<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Vaqueiro</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #1a120a;
    --areia: #c8a96e;
    --verde: #2d6a2d;
    --surface: #221508;
    --surface2: #2e1c0e;
    --border: #3d2b18;
    --text: #f0e6d0;
    --muted: #8a7055;
    --accent: #ffdf00;
    --accent2: #f97316;
    --bubble-bot: #1a1008;
    --bubble-user: #0e1a0a;
  }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family:'Bebas Neue','Nunito',sans-serif; background:var(--bg); color:var(--text); height:100dvh; overflow:hidden; letter-spacing:0.5px; }

  /* SPLASH */
  #splash {
    position:fixed; inset:0;
    background: #2d6a2d;
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    z-index:1000;
    transition: background 1.5s ease 1.8s;
  }
  #splash.sand { background: #c8a96e; }
  #splash.hide { animation: splashOut 0.7s ease forwards; }
  @keyframes splashOut { to { opacity:0; pointer-events:none; } }

  .hat-wrap {
    width:200px; height:200px;
    display:flex; align-items:center; justify-content:center;
    animation: hatDrop 0.9s cubic-bezier(0.22,1,0.36,1) 0.4s both;
  }
  @keyframes hatDrop {
    from { transform:translateY(-400px) rotate(-10deg); opacity:0; }
    to   { transform:translateY(0) rotate(0deg); opacity:1; }
  }
  .hat-wrap img { width:100%; object-fit:contain; filter:drop-shadow(0 20px 40px rgba(0,0,0,0.4)); }

  .splash-welcome {
    font-family:'Bebas Neue',cursive;
    font-size:1.8rem;
    color:#fff;
    text-shadow:2px 4px 12px rgba(0,0,0,0.5);
    animation:fadeInUp 0.7s ease 2.2s both;
    margin-top:28px;
    letter-spacing:2px;
  }
  .splash-sub {
    font-size:0.72rem; color:rgba(255,255,255,0.55);
    letter-spacing:4px; text-transform:uppercase;
    animation:fadeInUp 0.7s ease 2.5s both;
    margin-top:8px;
  }
  @keyframes fadeInUp { from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)} }

  /* LOGIN */
  #login-screen {
    position:fixed; inset:0;
    background: linear-gradient(160deg, #1a0f05, #2a1a08);
    display:none; flex-direction:column; align-items:center; justify-content:center;
    z-index:900; padding:40px 24px;
  }
  #login-screen.show { display:flex; }

  .login-hat { width:80px; margin-bottom:12px; animation:hatBob 2s ease-in-out infinite; }
  @keyframes hatBob { 0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)} }

  .login-title { font-family:'Bebas Neue',cursive; font-size:2rem; color:var(--accent); margin-bottom:6px; }
  .login-sub { color:var(--muted); font-size:0.87rem; text-align:center; margin-bottom:32px; line-height:1.5; }

  .login-box { width:100%; max-width:320px; display:flex; flex-direction:column; gap:12px; }
  .login-input {
    background:var(--surface); border:1.5px solid var(--border);
    border-radius:12px; padding:13px 16px; color:var(--text);
    font-size:0.93rem; font-family:'Nunito',sans-serif; outline:none;
    transition:border-color 0.2s;
  }
  .login-input:focus { border-color:var(--accent); }
  .login-input::placeholder { color:var(--muted); }

  .btn-primary {
    background:var(--accent); color:#000; border:none;
    border-radius:12px; padding:13px; font-weight:800;
    font-size:0.95rem; font-family:'Nunito',sans-serif;
    cursor:pointer; transition:opacity 0.2s,transform 0.15s;
  }
  .btn-primary:hover { opacity:0.88; transform:scale(1.02); }

  .login-switch { text-align:center; font-size:0.82rem; color:var(--muted); }
  .login-switch span { color:var(--accent); cursor:pointer; font-weight:700; }

  .login-error { color:#ff6b6b; font-size:0.82rem; text-align:center; display:none; }
  .login-error.show { display:block; }

  /* APP */
  #app { display:none; height:100dvh; flex-direction:row; }
  #app.show { display:flex; }

  /* SIDEBAR */
  #sidebar {
    width:252px; background:var(--surface);
    border-right:1px solid var(--border);
    display:flex; flex-direction:column; flex-shrink:0;
    transition:transform 0.3s ease;
  }
  .sidebar-header {
    padding:14px 16px; border-bottom:1px solid var(--border);
    display:flex; align-items:center; justify-content:space-between;
  }
  .sidebar-logo {
    display:flex; align-items:center; gap:8px;
    font-family:'Bebas Neue',cursive; font-size:1rem; color:var(--accent);
  }
  .sidebar-logo img { width:28px; }
  .btn-new-chat {
    background:var(--accent); border:none; border-radius:8px;
    padding:6px 12px; font-size:0.78rem; font-weight:800;
    color:#000; cursor:pointer; font-family:'Nunito',sans-serif;
    transition:opacity 0.2s;
  }
  .btn-new-chat:hover { opacity:0.85; }

  .chats-list { flex:1; overflow-y:auto; padding:8px; }
  .chats-list::-webkit-scrollbar { width:4px; }
  .chats-list::-webkit-scrollbar-thumb { background:var(--border); border-radius:4px; }
  .chat-section-label { font-size:0.68rem; color:var(--muted); text-transform:uppercase; letter-spacing:1px; padding:8px 8px 4px; }
  .chat-item {
    padding:9px 12px; border-radius:10px; cursor:pointer;
    font-size:0.83rem; color:#aaa; white-space:nowrap;
    overflow:hidden; text-overflow:ellipsis;
    transition:background 0.15s; display:flex; align-items:center; gap:8px;
  }
  .chat-item:hover { background:var(--surface2); color:var(--text); }
  .chat-item.active { background:var(--surface2); color:var(--text); }

  .sidebar-footer {
    border-top:1px solid var(--border); padding:12px 16px;
    display:flex; align-items:center; gap:10px;
  }
  .user-avatar {
    width:32px; height:32px; border-radius:50%;
    background:linear-gradient(135deg,var(--accent),var(--accent2));
    display:flex; align-items:center; justify-content:center;
    font-size:14px; flex-shrink:0; font-weight:800; color:#000;
  }
  .user-info { flex:1; min-width:0; }
  .user-name { font-size:0.83rem; font-weight:700; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .user-tag { font-size:0.7rem; color:var(--muted); }
  .btn-logout { background:none; border:none; color:var(--muted); cursor:pointer; font-size:16px; padding:4px; transition:color 0.2s; }
  .btn-logout:hover { color:#ff4444; }

  /* MAIN */
  #main { flex:1; display:flex; flex-direction:column; min-width:0; background:var(--bg); }
  #mobile-header { display:none; padding:12px 16px; border-bottom:1px solid var(--border); align-items:center; gap:12px; }
  .btn-menu { background:none; border:none; color:var(--text); font-size:20px; cursor:pointer; }
  .mobile-title { font-family:'Bebas Neue',cursive; font-size:1rem; color:var(--accent); flex:1; }

  #chat { flex:1; overflow-y:auto; padding:24px 16px 16px; display:flex; flex-direction:column; gap:16px; scroll-behavior:smooth; }
  #chat::-webkit-scrollbar { width:5px; }
  #chat::-webkit-scrollbar-thumb { background:var(--border); border-radius:10px; }

  #empty-state { margin:auto; text-align:center; padding:20px; }
  #empty-state .big { width:80px; display:inline-block; margin-bottom:12px; animation:hatBob 2s ease-in-out infinite; }
  #empty-state h2 { font-family:'Bebas Neue',cursive; font-size:1.3rem; color:var(--accent); margin-bottom:8px; }
  #empty-state p { color:var(--muted); font-size:0.87rem; line-height:1.6; }

  .chips { display:flex; flex-wrap:wrap; gap:8px; justify-content:center; margin-top:20px; }
  .chip {
    background:var(--surface); border:1px solid var(--border);
    border-radius:20px; padding:8px 16px; font-size:0.82rem;
    cursor:pointer; color:#aaa; font-family:'Nunito',sans-serif;
    transition:all 0.2s;
  }
  .chip:hover { border-color:var(--accent); color:var(--accent); }

  .msg { display:flex; gap:10px; align-items:flex-start; animation:fadeInUp 0.2s ease; }
  .msg.user { flex-direction:row-reverse; }
  .msg-av {
    width:30px; height:30px; border-radius:50%;
    display:flex; align-items:center; justify-content:center;
    font-size:13px; flex-shrink:0; margin-top:2px;
    font-weight:800;
  }
  .msg.bot .msg-av { background:linear-gradient(135deg,var(--accent),var(--accent2)); color:#000; }
  .msg.user .msg-av { background:var(--surface2); border:1px solid var(--border); color:var(--text); font-size:11px; }

  .bubble {
    max-width:80%; padding:11px 15px; border-radius:16px;
    font-size:0.95rem; line-height:1.65; word-break:break-word;
    font-family:'Nunito',sans-serif; letter-spacing:0.2px;
  }
  .msg.bot .bubble { background:var(--bubble-bot); border:1px solid var(--border); border-top-left-radius:4px; }
  .msg.user .bubble { background:var(--bubble-user); border:1px solid #1e3a1e; border-top-right-radius:4px; }
  .bubble pre { background:#111; border:1px solid var(--border); border-radius:8px; padding:12px; margin:8px 0; overflow-x:auto; font-size:0.83rem; }

  .dots { display:flex; gap:5px; padding:4px 0; }
  .dots span { width:7px; height:7px; background:var(--muted); border-radius:50%; animation:bounce 1.1s infinite; }
  .dots span:nth-child(2){animation-delay:0.18s}
  .dots span:nth-child(3){animation-delay:0.36s}
  @keyframes bounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-7px)}}

  #bar { padding:12px 16px 20px; border-top:1px solid var(--border); background:var(--bg); }
  .bar-inner { max-width:760px; margin:0 auto; display:flex; gap:10px; align-items:flex-end; }
  #inp {
    flex:1; background:var(--surface); border:1.5px solid var(--border);
    border-radius:14px; padding:12px 16px; color:var(--text);
    font-size:0.95rem; font-family:'Nunito',sans-serif; outline:none;
    resize:none; max-height:120px; transition:border-color 0.2s; line-height:1.5;
  }
  #inp:focus { border-color:#554030; }
  #inp::placeholder { color:var(--muted); }
  #send {
    width:44px; height:44px; background:var(--accent); border:none;
    border-radius:12px; cursor:pointer; display:flex; align-items:center;
    justify-content:center; font-size:18px; flex-shrink:0;
    transition:transform 0.15s,opacity 0.2s; color:#000; font-weight:800;
  }
  #send:hover{transform:scale(1.07)}
  #send:active{transform:scale(0.94)}
  #send:disabled{opacity:0.3;cursor:not-allowed;transform:none}

  #overlay { display:none; position:fixed; inset:0; background:rgba(0,0,0,0.6); z-index:50; }

  @media(max-width:640px){
    #sidebar{position:fixed;top:0;left:0;bottom:0;z-index:100;transform:translateX(-100%)}
    #sidebar.open{transform:translateX(0)}
    #mobile-header{display:flex}
    #overlay.show{display:block}
  }
</style>
</head>
<body>

<!-- SPLASH -->
<div id="splash">
  <div class="hat-wrap">
    <img src="/hat.png" alt="chapéu">
  </div>
  <div class="splash-welcome">Bem-vindo ao Oeste</div>
  <div class="splash-sub">Alzhadys Presents</div>
</div>

<!-- LOGIN -->
<div id="login-screen">
  <img class="login-hat" src="/hat.png" alt="chapéu">
  <div class="login-title">Vaqueiro</div>
  <p class="login-sub">Entra pardeiro, o Oeste te espera. 🤠</p>
  <div class="login-box">
    <input class="login-input" id="login-nick" type="text" placeholder="Nick" maxlength="20">
    <input class="login-input" id="login-pass" type="password" placeholder="Senha">
    <div class="login-error" id="login-error">Nick ou senha incorretos!</div>
    <button class="btn-primary" id="btn-entrar" onclick="loginUser()">Entrar 🤠</button>
    <div class="login-switch">Não tem conta? <span onclick="registerUser()">Criar agora</span></div>
  </div>
</div>

<!-- APP -->
<div id="app">
  <div id="sidebar">
    <div class="sidebar-header">
      <div class="sidebar-logo">
        <img src="/hat.png" alt=""> Vaqueiro
      </div>
      <button class="btn-new-chat" onclick="newChat()">+ Novo</button>
    </div>
    <div class="chats-list" id="chats-list">
      <div class="chat-section-label">Conversas</div>
    </div>
    <div class="sidebar-footer">
      <div class="user-avatar" id="user-avatar">?</div>
      <div class="user-info">
        <div class="user-name" id="user-name">Pardeiro</div>
        <div class="user-tag">🤠 Vaqueiro</div>
      </div>
      <button class="btn-logout" onclick="logout()" title="Sair">↪</button>
    </div>
  </div>

  <div id="main">
    <div id="mobile-header">
      <button class="btn-menu" onclick="toggleSidebar()">☰</button>
      <div class="mobile-title">🤠 Vaqueiro</div>
    </div>
    <div id="chat">
      <div id="empty-state">
        <img class="big" src="/hat.png" alt="">
        <h2>Howdy, Pardeiro!</h2>
        <p>Pode mandar o papo.<br>O Vaqueiro tá aqui pra resolver. 🤠</p>
        <div class="chips">
          <button class="chip" onclick="sendChip('Quem é você Vaqueiro?')">Quem é o Vaqueiro? 🤠</button>
          <button class="chip" onclick="sendChip('Me ensina script bash do zero')">Script Bash 💻</button>
          <button class="chip" onclick="sendChip('Como uso API com Python?')">API com Python ⚡</button>
          <button class="chip" onclick="sendChip('Como automatizar tarefas com script?')">Automação 🤖</button>
        </div>
      </div>
    </div>
    <div id="bar">
      <div class="bar-inner">
        <textarea id="inp" rows="1" placeholder="Manda ver, pardeiro..."></textarea>
        <button id="send" onclick="sendMessage()">↑</button>
      </div>
    </div>
  </div>
</div>

<div id="overlay" onclick="closeSidebar()"></div>

<script>
  let currentUser = null;
  let currentChatId = null;
  let chatHistory = [];
  let chats = {};

  // ══ SPLASH ══
  // Som de faroeste via Web Audio API
  function playWesternSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const notes = [
        {f:523,t:0,d:0.3},{f:659,t:0.15,d:0.3},{f:784,t:0.3,d:0.3},
        {f:1047,t:0.5,d:0.5},{f:784,t:0.9,d:0.2},{f:659,t:1.05,d:0.2},
        {f:523,t:1.2,d:0.6}
      ];
      notes.forEach(n => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'triangle';
        osc.frequency.value = n.f;
        gain.gain.setValueAtTime(0, ctx.currentTime + n.t);
        gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + n.t + 0.05);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + n.t + n.d);
        osc.start(ctx.currentTime + n.t);
        osc.stop(ctx.currentTime + n.t + n.d + 0.1);
      });
    } catch(e) {}
  }

  window.addEventListener('load', () => {
    // Toca o som quando carregar
    setTimeout(playWesternSound, 500);
    // Troca fundo de verde pra areia
    setTimeout(() => document.getElementById('splash').classList.add('sand'), 1800);
    // Esconde splash e mostra login
    setTimeout(() => {
      document.getElementById('splash').classList.add('hide');
      setTimeout(() => {
        document.getElementById('splash').style.display = 'none';
        const saved = localStorage.getItem('vaqueiro_user');
        if (saved) {
          currentUser = JSON.parse(saved);
          showApp();
        } else {
          document.getElementById('login-screen').classList.add('show');
        }
      }, 700);
    }, 3500);
  });

  // ══ AUTH ══
  function loginUser() {
    const nick = document.getElementById('login-nick').value.trim();
    const pass = document.getElementById('login-pass').value;
    if (!nick || !pass) return showError('Preenche tudo, pardeiro!');

    fetch('/api/login', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({nick, pass})
    }).then(r => r.json()).then(data => {
      if (data.error) return showError(data.error);
      currentUser = { nick: data.nick, token: data.token };
      localStorage.setItem('vaqueiro_user', JSON.stringify(currentUser));
      showApp();
    }).catch(() => showError('Erro de conexão!'));
  }

  function registerUser() {
    const nick = document.getElementById('login-nick').value.trim();
    const pass = document.getElementById('login-pass').value;
    if (!nick || !pass) return showError('Preenche tudo, pardeiro!');
    if (pass.length < 4) return showError('Senha precisa ter pelo menos 4 caracteres!');

    fetch('/api/register', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({nick, pass})
    }).then(r => r.json()).then(data => {
      if (data.error) return showError(data.error);
      currentUser = { nick: data.nick, token: data.token };
      localStorage.setItem('vaqueiro_user', JSON.stringify(currentUser));
      showApp();
    }).catch(() => showError('Erro de conexão!'));
  }

  function showError(msg) {
    const el = document.getElementById('login-error');
    el.textContent = msg;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 3000);
  }

  function logout() {
    currentUser = null;
    localStorage.removeItem('vaqueiro_user');
    document.getElementById('app').classList.remove('show');
    document.getElementById('login-screen').classList.add('show');
    document.getElementById('login-nick').value = '';
    document.getElementById('login-pass').value = '';
  }

  function showApp() {
    document.getElementById('login-screen').classList.remove('show');
    document.getElementById('app').classList.add('show');
    document.getElementById('user-name').textContent = currentUser.nick;
    document.getElementById('user-avatar').textContent = currentUser.nick[0].toUpperCase();
    loadChats();
    newChat();
  }

  // ══ CHATS ══
  function loadChats() {
    fetch('/api/chats', {
      headers:{'Authorization': currentUser.token}
    }).then(r => r.json()).then(data => {
      chats = data.chats || {};
      renderChatList();
    }).catch(() => {});
  }

  function renderChatList() {
    const list = document.getElementById('chats-list');
    list.innerHTML = '<div class="chat-section-label">Conversas</div>';
    const sorted = Object.entries(chats).sort((a,b) => (b[1].updatedAt||0) - (a[1].updatedAt||0));
    sorted.forEach(([id, c]) => {
      const item = document.createElement('div');
      item.className = 'chat-item' + (id === currentChatId ? ' active' : '');
      item.id = 'chat-item-' + id;
      item.innerHTML = `<span>🤠</span>${c.title || 'Nova conversa'}`;
      item.onclick = () => openChat(id);
      list.appendChild(item);
    });
  }

  function openChat(id) {
    currentChatId = id;
    chatHistory = chats[id]?.messages || [];
    document.getElementById('chat').innerHTML = '';
    chatHistory.forEach(m => addBubble(m.role === 'user' ? 'user' : 'bot', m.content));
    document.querySelectorAll('.chat-item').forEach(i => i.classList.remove('active'));
    document.getElementById('chat-item-' + id)?.classList.add('active');
    closeSidebar();
  }

  function newChat() {
    currentChatId = null;
    chatHistory = [];
    document.getElementById('chat').innerHTML = `
      <div id="empty-state">
        <img class="big" src="/hat.png" alt="">
        <h2>Howdy, Pardeiro!</h2>
        <p>Pode mandar o papo.<br>O Vaqueiro tá aqui pra resolver. 🤠</p>
        <div class="chips">
          <button class="chip" onclick="sendChip('Quem é você Vaqueiro?')">Quem é o Vaqueiro? 🤠</button>
          <button class="chip" onclick="sendChip('Me ensina script bash do zero')">Script Bash 💻</button>
          <button class="chip" onclick="sendChip('Como uso API com Python?')">API com Python ⚡</button>
          <button class="chip" onclick="sendChip('Como automatizar tarefas com script?')">Automação 🤖</button>
        </div>
      </div>`;
    document.querySelectorAll('.chat-item').forEach(i => i.classList.remove('active'));
    closeSidebar();
  }

  // ══ SEND ══
  async function sendMessage(text) {
    const userText = text || document.getElementById('inp').value.trim();
    if (!userText) return;
    document.getElementById('inp').value = '';
    document.getElementById('inp').style.height = 'auto';
    document.getElementById('send').disabled = true;
    document.getElementById('empty-state')?.remove();

    addBubble('user', userText);
    chatHistory.push({ role:'user', content:userText });

    const typingDiv = document.createElement('div');
    typingDiv.className = 'msg bot'; typingDiv.id = 'typing';
    typingDiv.innerHTML = `<div class="msg-av">🤠</div><div class="bubble"><div class="dots"><span></span><span></span><span></span></div></div>`;
    document.getElementById('chat').appendChild(typingDiv);
    document.getElementById('chat').scrollTop = 99999;

    try {
      const res = await fetch('/api/chat', {
        method:'POST',
        headers:{'Content-Type':'application/json','Authorization':currentUser?.token||''},
        body: JSON.stringify({ messages: chatHistory })
      });
      const data = await res.json();
      document.getElementById('typing')?.remove();
      const reply = data.reply || data.error || 'Deu ruim aqui mano 😅';
      addBubble('bot', reply);
      chatHistory.push({ role:'assistant', content:reply });

      // salva chat
      if (!currentChatId) currentChatId = Date.now().toString();
      chats[currentChatId] = { title: userText.slice(0,40), messages: chatHistory, updatedAt: Date.now() };
      renderChatList();
      document.getElementById('chat-item-' + currentChatId)?.classList.add('active');

      fetch('/api/chats/save', {
        method:'POST',
        headers:{'Content-Type':'application/json','Authorization':currentUser?.token||''},
        body: JSON.stringify({ chatId: currentChatId, title: userText.slice(0,40), messages: chatHistory })
      }).catch(()=>{});

    } catch(err) {
      document.getElementById('typing')?.remove();
      addBubble('bot', 'Erro de conexão, pardeiro. Tenta de novo! 😅');
    }

    document.getElementById('send').disabled = false;
    document.getElementById('inp').focus();
  }

  window.sendChip = (t) => sendMessage(t);

  function addBubble(role, text) {
    const div = document.createElement('div');
    div.className = `msg ${role}`;
    const av = role === 'bot' ? '🤠' : (currentUser?.nick?.[0]?.toUpperCase() || '?');
    const formatted = text
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/```([\s\S]*?)```/g,'<pre><code>$1</code></pre>')
      .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
      .replace(/__(.+?)__/g,'<strong>$1</strong>')
      .replace(/\*(.+?)\*/g,'<em>$1</em>')
      .replace(/_(.+?)_/g,'<em>$1</em>')
      .replace(/~~(.+?)~~/g,'<del>$1</del>')
      .replace(/`(.+?)`/g,'<code style="background:#222;padding:2px 6px;border-radius:4px;font-size:0.85em;">$1</code>')
      .replace(/\n/g,'<br>');
    div.innerHTML = `<div class="msg-av">${av}</div><div class="bubble">${formatted}</div>`;
    document.getElementById('chat').appendChild(div);
    document.getElementById('chat').scrollTop = 99999;
  }

  window.toggleSidebar = () => { document.getElementById('sidebar').classList.toggle('open'); document.getElementById('overlay').classList.toggle('show'); };
  window.closeSidebar = () => { document.getElementById('sidebar').classList.remove('open'); document.getElementById('overlay').classList.remove('show'); };

  document.getElementById('inp').addEventListener('input', function(){ this.style.height='auto'; this.style.height=Math.min(this.scrollHeight,120)+'px'; });
  document.getElementById('inp').addEventListener('keydown', (e)=>{ if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMessage();} });
  document.getElementById('login-pass').addEventListener('keydown', (e)=>{ if(e.key==='Enter') loginUser(); });
</script>
</body>
</html>
