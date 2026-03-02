const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const USERS_FILE = path.join(__dirname, "users.json");
const CHATS_FILE = path.join(__dirname, "chats.json");

if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, "{}");
if (!fs.existsSync(CHATS_FILE)) fs.writeFileSync(CHATS_FILE, "{}");

function loadUsers() { try { return JSON.parse(fs.readFileSync(USERS_FILE)); } catch { return {}; } }
function saveUsers(d) { fs.writeFileSync(USERS_FILE, JSON.stringify(d, null, 2)); }
function loadChats() { try { return JSON.parse(fs.readFileSync(CHATS_FILE)); } catch { return {}; } }
function saveChats(d) { fs.writeFileSync(CHATS_FILE, JSON.stringify(d, null, 2)); }
function hash(p) { return crypto.createHash("sha256").update(p).digest("hex"); }
function genToken() { return crypto.randomBytes(32).toString("hex"); }

const VAQUEIRO_PROMPT = `
Você é o Vaqueiro — o programador mais aurado do Brasil. Ego enorme, entrega maior ainda. Não é papo furado não.

PERSONALIDADE:
- Fala como brasileiro raiz: "mano", "véi", "pardeiro", "tá ligado", "bora", "vixi", "é nois", "meu consagrado"
- NUNCA fala "posso te ajudar", "claro!", "com certeza!", "ótima pergunta!" — isso é coisa de bot genérico
- Simplesmente RESOLVE. Vai direto ao ponto como um expert que já viu tudo
- Comemora junto quando resolve algo difícil: "ISSO AÍ MANO! 🔥"
- Quando é algo simples, faz com naturalidade sem drama
- Tem opinião própria: discorda quando acha errado, sugere o melhor caminho
- Usa emojis estrategicamente, não em todo lugar: 🔥🤠💀😂⚡

EXPERTISE TÉCNICA — ULTRA MEGA MASTER:
- Todas as linguagens: Python, JavaScript, TypeScript, Rust, Go, C, C++, Java, Kotlin, Swift, PHP, Ruby, Lua, R, Dart, Elixir, Haskell, Assembly e qualquer outra
- Frontend: React, Vue, Angular, Svelte, HTML/CSS, Tailwind, Next.js, Nuxt
- Backend: Node.js, Express, FastAPI, Django, Laravel, Spring, NestJS
- Mobile: React Native, Flutter, Android nativo, iOS nativo
- Banco de dados: PostgreSQL, MySQL, MongoDB, Redis, SQLite, Supabase, Firebase
- DevOps: Docker, Kubernetes, CI/CD, GitHub Actions, AWS, GCP, Azure
- Scripts e automação: Bash, PowerShell, Python scripts, cron jobs
- APIs, websockets, microserviços, arquitetura de software
- Segurança, performance, otimização de código
- IA/ML: TensorFlow, PyTorch, LangChain, RAG, fine-tuning
- Qualquer coisa de tech — TUDO

MODO TDAH — SEMPRE ATIVO:
1. Passos numerados e curtos (máx 2-3 linhas cada)
2. Emojis como marcadores visuais
3. "👉 FOCO AQUI:" para o mais importante
4. "⚡ RESUMINDO:" no final
5. NUNCA faz textão contínuo
6. Código sempre explicado linha por linha

Responde SEMPRE em português brasileiro. Mesmo que a pergunta seja em inglês.
`;

// AUTH
app.post("/api/register", (req, res) => {
  const { nick, pass } = req.body;
  if (!nick || !pass) return res.json({ error: "Preenche tudo!" });
  if (nick.length < 2) return res.json({ error: "Nick muito curto!" });
  if (pass.length < 4) return res.json({ error: "Senha muito curta!" });

  const users = loadUsers();
  if (users[nick.toLowerCase()]) return res.json({ error: "Nick já existe, pardeiro!" });

  const token = genToken();
  users[nick.toLowerCase()] = { nick, pass: hash(pass), token };
  saveUsers(users);
  res.json({ nick, token });
});

app.post("/api/login", (req, res) => {
  const { nick, pass } = req.body;
  if (!nick || !pass) return res.json({ error: "Preenche tudo!" });

  const users = loadUsers();
  const user = users[nick.toLowerCase()];
  if (!user) return res.json({ error: "Nick não encontrado!" });
  if (user.pass !== hash(pass)) return res.json({ error: "Senha errada, pardeiro!" });

  const token = genToken();
  user.token = token;
  saveUsers(users);
  res.json({ nick: user.nick, token });
});

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: "Sem autorização!" });
  const users = loadUsers();
  const user = Object.values(users).find(u => u.token === token);
  if (!user) return res.status(401).json({ error: "Token inválido!" });
  req.user = user;
  next();
}

// CHATS
app.get("/api/chats", authMiddleware, (req, res) => {
  const allChats = loadChats();
  const userChats = allChats[req.user.nick.toLowerCase()] || {};
  res.json({ chats: userChats });
});

app.post("/api/chats/save", authMiddleware, (req, res) => {
  const { chatId, title, messages } = req.body;
  const allChats = loadChats();
  if (!allChats[req.user.nick.toLowerCase()]) allChats[req.user.nick.toLowerCase()] = {};
  allChats[req.user.nick.toLowerCase()][chatId] = { title, messages, updatedAt: Date.now() };
  saveChats(allChats);
  res.json({ ok: true });
});

// CHAT AI
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) return res.status(400).json({ error: "Mensagens inválidas." });

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${GROQ_API_KEY}` },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "system", content: VAQUEIRO_PROMPT }, ...messages],
        max_tokens: 600,
        temperature: 0.85,
      }),
    });
    const data = await response.json();
    if (data.error) return res.status(500).json({ error: data.error.message });
    res.json({ reply: data.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: "Erro interno no servidor." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🤠 Vaqueiro rodando na porta ${PORT}`));
