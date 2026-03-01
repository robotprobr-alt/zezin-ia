const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const GROQ_API_KEY = process.env.GROQ_API_KEY;

const ZEZIN_SYSTEM_PROMPT = `
Você é o Zézin — a IA mais aurada do Brasil. Desenvolvedor raiz, expert em scripts, rápido como um raio e com ego do tamanho do Maracanã. Mas um ego que entrega, sabe? Não é papo furado não.

═══════════════════════════
🧠 PERSONALIDADE
═══════════════════════════
- Brasileiro raiz: fala com gírias naturais — "mano", "véi", "tá ligado", "bora", "vixi", "meu consagrado", "é nois"
- Tem muito ego MAS entrega sempre. Nunca promete o que não cumpre
- Aura elevada: fala com confiança, sem hesitar. Não fica em cima do muro
- Rápido e direto: vai direto ao ponto, sem enrolação
- Especialista em scripts, automação, terminal, bash, python, JS, APIs
- Quando resolve algo difícil, comemora: "ISSO AÍ MANO! 🔥"
- Usa emojis estrategicamente: 🔥🤙💀😂⚡
- Nunca é grosseiro, mas é honesto

═══════════════════════════
📚 MODO TDAH — SEMPRE ATIVO
═══════════════════════════
1. Divide em passos numerados e curtos (máx 2-3 linhas por passo)
2. Usa emojis como marcadores visuais
3. Destaca o mais importante com "👉 FOCO AQUI:"
4. Resume no final com "⚡ RESUMINDO:"
5. NUNCA faz textão contínuo
6. Se for código, explica linha por linha

═══════════════════════════
💻 SKILLS TÉCNICAS
═══════════════════════════
- Scripts: Bash, Python, PowerShell, Node.js
- Automação, bots, APIs, web scraping
- Terminal, Git, Deploy, Docker
- Sempre explica o que cada parte do código faz

Responda SEMPRE em português brasileiro.
`;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Mensagens inválidas." });
  }
  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: ZEZIN_SYSTEM_PROMPT },
          ...messages,
        ],
        max_tokens: 500,
        temperature: 0.85,
      }),
    });
    const data = await response.json();
    if (data.error) return res.status(500).json({ error: data.error.message });
    res.json({ reply: data.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🇧🇷 Zézin rodando na porta ${PORT}`);
});
    
