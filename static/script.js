document.addEventListener('DOMContentLoaded', () => {
  const world = document.getElementById('agent-world');
  const canvas = document.getElementById('world-canvas');
  const inspector = document.getElementById('world-inspector');
  const returnCore = document.getElementById('return-core');
  const context = canvas.getContext('2d');
  const core = { id: 'core', x: 0, y: 0, tier: 0, title: 'Yash Adhyapak', kicker: 'GALACTIC CORE / GENERATIVE AI ENGINEER', copy: 'Building production RAG pipelines, multi-agent systems, and applied ML — from HERE Technologies to solo-built agents.', impact: 'Chhatrapati Sambhajinagar (Aurangabad), Maharashtra, India', stack: ['1.5+ years GenAI', 'Production systems', 'Open to collaboration'], link: '#contact' };
  const clusters = [
    { id: 'skills', x: -390, y: -210, title: 'Skill Verticals', kicker: 'CONSTELLATION 01 / SKILLS', copy: 'The engineering primitives behind dependable AI products.', stack: ['LangChain', 'LangGraph', 'RAG', 'FastAPI', 'GCP Cloud Run', 'Docker', 'OpenAI / Anthropic', 'PyTorch', 'SQL / Pandas'], impact: 'Retrieval accuracy +35%', children: [{ title: 'RAG & Memory', copy: 'FAISS, Chroma, Qdrant, embeddings, reranking and grounded generation.', stack: ['FAISS', 'Chroma', 'Qdrant'], impact: 'Query latency 2.5s → 0.8s' }, { title: 'Agent Orchestration', copy: 'Tool-calling systems with shared state, deterministic handoffs and evaluation.', stack: ['LangGraph', 'FastAPI', 'Python'], impact: '0.8% task failure' }] },
    { id: 'projects', x: 380, y: -230, title: 'Projects', kicker: 'CONSTELLATION 02 / BUILDS', copy: 'Applied systems that turn models into useful, measurable workflows.', stack: ['RAG', 'Agents', 'Forecasting'], impact: '40% lower inference cost', children: [{ title: 'AI Market Intelligence Platform', copy: 'Forecasting across S&P500, Crude Oil and Steel Futures with anomaly detection and dashboards.', stack: ['LangGraph', 'Prophet', 'Isolation Forest', 'ChromaDB', 'HuggingFace', 'Streamlit / Plotly'], impact: 'Market signals / Mar–May 2026' }, { title: 'Job Automation Agent', copy: 'Multi-board scraper with local-Ollama scoring, SQLite deduplication and Telegram alerts.', stack: ['Python', 'Ollama', 'SQLite', 'Telegram'], impact: '10–12 hrs/week automated', link: 'https://github.com/Yash1453/job-automation-agent' }, { title: 'NeuroGrowth AI', copy: 'Conceptual autonomous multi-agent marketing OS for experimentation and growth intelligence.', stack: ['FastAPI', 'LangGraph', 'PostgreSQL', 'Redis', 'ChromaDB', 'PyTorch'], impact: 'Concept architecture' }, { title: 'ATISS', copy: 'Conceptual counter-terrorism surveillance and intelligence system architecture.', stack: ['Multi-agent systems', 'Intelligence', 'Architecture'], impact: 'Concept architecture' }, { title: 'EV Market Segmentation', copy: 'Exploratory data analysis and regression research for electric vehicle markets.', stack: ['EDA', 'Regression', 'Python'], impact: 'Applied ML research' }] },
    { id: 'experience', x: 380, y: 260, title: 'Experience', kicker: 'CONSTELLATION 03 / FIELD SIGNALS', copy: 'A trajectory from geospatial data quality to independent GenAI engineering.', stack: ['HERE Technologies', 'Feynn Labs', 'Independent'], impact: '500K+ records handled', children: [{ title: 'HERE Technologies', copy: 'Spatial Data Specialist Trainee working on production geospatial quality workflows.', stack: ['Python', 'SQL', 'Data quality'], impact: '81% fewer invalid records' }, { title: 'Feynn Labs', copy: 'Machine Learning Intern focused on NLP, experimentation and applied analytics.', stack: ['ML', 'NLP', 'Scikit-learn'], impact: '88% NLP F1-score' }, { title: 'Independent GenAI Engineer', copy: 'Freelance systems builder shipping RAG, agent and automation workflows.', stack: ['LLMs', 'RAG', 'Agents'], impact: '99.2% production uptime' }] },
    { id: 'education', x: -360, y: 250, title: 'Education', kicker: 'CONSTELLATION 04 / FOUNDATION', copy: 'The formal foundation beneath the systems practice.', stack: ['BCA', 'Computer applications'], impact: 'Computer applications', children: [{ title: 'BCA — MIT Aurangabad', copy: 'Bachelor of Computer Applications, 2021.', stack: ['Computer applications'], impact: '2021' }] },
    { id: 'signal', x: 0, y: 410, title: 'Signal / Contact', kicker: 'CONSTELLATION 05 / TRANSMIT', copy: 'A direct line for serious AI collaborations, consulting and engineering work.', stack: ['GitHub', 'LinkedIn', 'Resume', 'Email'], impact: 'Signal open', children: [{ title: 'GitHub', copy: 'Explore the public builds and experiments.', stack: ['github.com/Yash1453'], impact: 'Open source signal', link: 'https://github.com/Yash1453' }, { title: 'Start a conversation', copy: 'Bring a difficult workflow, unreliable AI system or ambitious prototype.', stack: ['Consulting', 'Build sprint'], impact: 'Open to 1–2 serious collaborations', link: '#contact' }] }
  ];
  let worldActive = false;
  let galaxy = { zoom: .92, panX: 0, panY: 0, hovered: null, expanded: null, selected: core, dragging: false, startX: 0, startY: 0, lastX: 0, lastY: 0, prelude: false };
  const nodes = () => [core, ...clusters, ...clusters.flatMap((cluster) => galaxy.expanded === 'all' || galaxy.expanded === cluster.id ? cluster.children.map((child, index) => ({ ...child, id: `${cluster.id}-${index}`, x: cluster.x + Math.cos(index * 1.4) * (145 + index * 20), y: cluster.y + Math.sin(index * 1.4) * (145 + index * 20), parent: cluster.id, tier: 2, kicker: `${cluster.title.toUpperCase()} / ORBITAL NODE`, link: child.link || '#work' })) : [])];
  const awakening = document.getElementById('awakening');
  const blackHoleTrigger = document.getElementById('black-hole-trigger');
  const blackHole = document.querySelector('.black-hole');
  for (let index = 0; index < 34; index += 1) {
    const particle = document.createElement('span');
    particle.className = 'accretion-particle';
    particle.style.setProperty('--orbit', `${68 + (index % 7) * 17}px`);
    particle.style.setProperty('--depth', `${(index % 5 - 2) * 10}px`);
    particle.style.setProperty('--speed', `${1.8 + (index % 6) * .34}s`);
    particle.style.setProperty('--delay', `${index * -.16}s`);
    particle.style.setProperty('--tilt', `${-12 + (index % 5) * 6}deg`);
    blackHole.appendChild(particle);
  }
  let introFinished = false;
  const enterGalaxy = () => {
    if (introFinished) return;
    introFinished = true;
    galaxy.expanded = 'all';
    awakening.classList.add('black-hole-flight');
    for (let index = 0; index < 42; index += 1) {
      const shard = document.createElement('i');
      shard.className = 'shard';
      shard.style.setProperty('--sx', `${(Math.random() - .5) * 100}vw`);
      shard.style.setProperty('--sy', `${(Math.random() - .5) * 100}vh`);
      shard.style.setProperty('--delay', `${Math.random() * .25}s`);
      awakening.appendChild(shard);
    }
    activateWorld();
    window.setTimeout(() => awakening.remove(), 2200);
  };
  blackHoleTrigger.addEventListener('click', enterGalaxy);
  document.getElementById('skip-intro').addEventListener('click', enterGalaxy);
  const openNode = (node) => {
    document.getElementById('inspector-kicker').textContent = node.kicker;
    document.getElementById('inspector-title').textContent = node.title;
    document.getElementById('inspector-copy').textContent = node.copy;
    document.getElementById('inspector-stack').innerHTML = (node.stack || []).map((item) => `<span>${item}</span>`).join('');
    document.getElementById('inspector-impact').textContent = node.impact || '';
    document.getElementById('inspector-link').href = node.link || '#work';
    inspector.hidden = false;
    galaxy.selected = node;
  };
  const drawGalaxy = (time = 0) => {
    const width = world.clientWidth;
    const height = world.clientHeight;
    const dpr = Math.min(window.devicePixelRatio, 2);
    if (canvas.width !== width * dpr || canvas.height !== height * dpr) { canvas.width = width * dpr; canvas.height = height * dpr; }
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.clearRect(0, 0, width, height);
    const galaxyGradient = context.createRadialGradient(width * .48, height * .48, 20, width * .48, height * .48, Math.max(width, height) * .78);
    galaxyGradient.addColorStop(0, '#241b29');
    galaxyGradient.addColorStop(.16, '#101728');
    galaxyGradient.addColorStop(.42, '#050b18');
    galaxyGradient.addColorStop(1, '#010207');
    context.fillStyle = galaxyGradient;
    context.fillRect(0, 0, width, height);
    const nebula = context.createRadialGradient(width / 2, height / 2, 4, width / 2, height / 2, Math.min(width, height) * .28);
    nebula.addColorStop(0, 'rgba(255,214,151,.28)');
    nebula.addColorStop(.16, 'rgba(255,119,76,.17)');
    nebula.addColorStop(.38, 'rgba(95,61,180,.17)');
    nebula.addColorStop(.7, 'rgba(0,194,255,.12)');
    nebula.addColorStop(1, 'rgba(0,194,255,0)');
    context.fillStyle = nebula;
    context.fillRect(0, 0, width, height);
    context.save();
    context.globalCompositeOperation = 'screen';
    for (let cloud = 0; cloud < 14; cloud += 1) {
      const cloudX = width * (.12 + ((cloud * 37) % 82) / 100);
      const cloudY = height * (.1 + ((cloud * 61) % 80) / 100);
      const cloudRadius = Math.min(width, height) * (.12 + (cloud % 4) * .045);
      const cloudGradient = context.createRadialGradient(cloudX, cloudY, 0, cloudX, cloudY, cloudRadius);
      const colors = ['rgba(34,129,255,.08)', 'rgba(119,38,196,.1)', 'rgba(255,88,62,.08)', 'rgba(0,220,255,.07)'];
      cloudGradient.addColorStop(0, colors[cloud % colors.length]);
      cloudGradient.addColorStop(1, 'rgba(0,0,0,0)');
      context.fillStyle = cloudGradient;
      context.beginPath();
      context.arc(cloudX, cloudY, cloudRadius, 0, Math.PI * 2);
      context.fill();
    }
    context.restore();
    const project = (node) => ({ x: width / 2 + (node.x + galaxy.panX) * galaxy.zoom, y: height / 2 + (node.y + galaxy.panY) * galaxy.zoom });
    const visible = nodes();
    const byId = new Map(visible.map((node) => [node.id, node]));
    context.save();
    context.globalAlpha = .35;
    for (let index = 0; index < 260; index += 1) {
      const x = (index * 173) % width;
      const y = (index * 97) % height;
      const band = Math.abs(y - (height * .46 + Math.sin(x / 130) * 70));
      context.globalAlpha = band < 62 ? .7 : .42;
      context.fillStyle = index % 5 ? '#b9e8ff' : '#7cffcb';
      context.fillRect(x, y, index % 11 ? 1 : 2, index % 13 ? 1 : 2);
    }
    context.globalAlpha = 1;
    const milkyWay = context.createLinearGradient(0, height * .2, width, height * .8);
    milkyWay.addColorStop(0, 'rgba(0,194,255,0)');
    milkyWay.addColorStop(.48, 'rgba(110,190,235,.08)');
    milkyWay.addColorStop(.55, 'rgba(124,255,203,.13)');
    milkyWay.addColorStop(1, 'rgba(0,194,255,0)');
    context.fillStyle = milkyWay;
    context.fillRect(0, height * .2, width, height * .6);
    context.restore();
    context.save();
    context.translate(0, Math.sin(time / 5000) * 3);
    clusters.forEach((cluster) => {
      const parent = project(cluster);
      context.strokeStyle = galaxy.expanded === cluster.id ? 'rgba(0,194,255,.55)' : 'rgba(0,194,255,.2)';
      context.lineWidth = 1;
      context.beginPath(); context.moveTo(width / 2, height / 2); context.lineTo(parent.x, parent.y); context.stroke();
      if (galaxy.expanded === 'all' || galaxy.expanded === cluster.id) cluster.children.forEach((child, index) => { const orbital = byId.get(`${cluster.id}-${index}`); if (!orbital) return; const point = project(orbital); context.strokeStyle = 'rgba(124,255,203,.35)'; context.beginPath(); context.moveTo(parent.x, parent.y); context.lineTo(point.x, point.y); context.stroke(); });
    });
    visible.forEach((node) => {
      const point = project(node);
      const isCore = node.tier === 0;
      const isCluster = node.tier !== 2;
      const radius = (isCore ? 34 : isCluster ? 18 : 9) * galaxy.zoom * (galaxy.hovered?.id === node.id ? 1.35 : 1);
      const gradient = context.createRadialGradient(point.x, point.y, 0, point.x, point.y, radius * 2.8);
      gradient.addColorStop(0, isCore ? 'rgba(124,255,203,.9)' : 'rgba(0,194,255,.85)'); gradient.addColorStop(1, 'rgba(0,194,255,0)');
      context.fillStyle = gradient; context.beginPath(); context.arc(point.x, point.y, radius * 2.8, 0, Math.PI * 2); context.fill();
      context.fillStyle = isCore ? '#7cffcb' : node.tier === 2 ? '#00c2ff' : '#fff';
      context.beginPath(); context.arc(point.x, point.y, radius * .34, 0, Math.PI * 2); context.fill();
      context.fillStyle = 'rgba(245,250,255,.86)'; context.font = `${isCore ? 600 : 500} ${isCore ? 15 : 11}px "DM Mono", monospace`; context.textAlign = 'center';
      context.fillText(node.title, point.x, isCore ? point.y + 4 : point.y + radius + 18);
      if (node.tier === 2) { context.fillStyle = 'rgba(124,255,203,.7)'; context.font = '9px "DM Mono", monospace'; context.fillText('ORBITAL', point.x, point.y + radius + 31); }
    });
    context.restore();
    document.getElementById('world-coords').textContent = `${galaxy.selected?.title?.toUpperCase() || 'CORE'} · ZOOM ${galaxy.zoom.toFixed(2)}`;
    document.getElementById('compass-label').textContent = galaxy.selected?.title || 'CORE';
    requestAnimationFrame(drawGalaxy);
  };
  const nodeAt = (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) / galaxy.zoom - galaxy.panX;
    const y = (event.clientY - rect.top - rect.height / 2) / galaxy.zoom - galaxy.panY;
    return nodes().reverse().find((node) => Math.hypot(node.x - x, node.y - y) < (node.tier === 0 ? 60 : node.tier === 2 ? 28 : 45) / galaxy.zoom);
  };
  const activateWorld = () => { if (worldActive) return; worldActive = true; world.classList.add('world-active'); drawGalaxy(); };
  const centerCore = () => { galaxy.panX = 0; galaxy.panY = 0; galaxy.zoom = .92; galaxy.selected = core; returnCore.hidden = true; };
  const expandNode = (node) => { if (node.tier === 0) { galaxy.expanded = galaxy.expanded === 'all' ? null : 'all'; galaxy.selected = core; openNode(core); return; } if (node.tier === 1) { galaxy.expanded = galaxy.expanded === node.id ? null : node.id; galaxy.selected = node; return; } openNode(node); };
  canvas.addEventListener('pointerdown', (event) => { galaxy.dragging = true; galaxy.startX = event.clientX; galaxy.startY = event.clientY; galaxy.lastX = event.clientX; galaxy.lastY = event.clientY; canvas.setPointerCapture(event.pointerId); });
  canvas.addEventListener('pointermove', (event) => { galaxy.hovered = nodeAt(event); if (galaxy.dragging) { galaxy.panX += (event.clientX - galaxy.lastX) / galaxy.zoom; galaxy.panY += (event.clientY - galaxy.lastY) / galaxy.zoom; galaxy.lastX = event.clientX; galaxy.lastY = event.clientY; returnCore.hidden = false; } });
  canvas.addEventListener('pointerup', (event) => { if (galaxy.dragging && Math.abs(event.clientX - galaxy.startX) < 6 && Math.abs(event.clientY - galaxy.startY) < 6) { const node = nodeAt(event); if (node) expandNode(node); } galaxy.dragging = false; });
  canvas.addEventListener('wheel', (event) => { event.preventDefault(); galaxy.zoom = Math.max(.5, Math.min(1.8, galaxy.zoom * (event.deltaY > 0 ? .9 : 1.1))); returnCore.hidden = galaxy.zoom < .94 ? false : returnCore.hidden; }, { passive: false });
  returnCore.addEventListener('click', centerCore);
  window.addEventListener('resize', () => { if (worldActive) drawGalaxy(); });
  window.addEventListener('keydown', (event) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(event.key)) event.preventDefault();
    if (event.key === 'Escape') { inspector.hidden = true; galaxy.expanded = null; }
    if (event.key === 'Enter' && galaxy.hovered) expandNode(galaxy.hovered);
    if (event.key === 'Tab') { event.preventDefault(); const list = nodes(); const index = list.findIndex((node) => node.id === galaxy.hovered?.id); galaxy.hovered = list[(index + 1) % list.length]; }
  });
  document.getElementById('world-close').addEventListener('click', () => { inspector.hidden = true; });

  const projectGrid = document.getElementById('project-grid');
  const projects = [
    {
      number: '01',
      category: 'AI INFRASTRUCTURE',
      name: 'Enterprise AI Memory Engine',
      description: 'An offline-first memory substrate for local AI: persistent context, vector indexing, semantic retrieval, and agent workflows in one dependable layer.',
      tags: ['FastAPI', 'Qdrant', 'Ollama', 'RAG'],
      link: 'https://github.com/Yash1453',
      role: 'Architecture, retrieval, backend',
      outcome: 'Persistent context for local AI',
      details: 'Designed as a durable knowledge layer rather than a one-off prompt wrapper, with semantic retrieval and memory workflows that can run offline.'
    },
    {
      number: '02',
      category: 'AGENT SYSTEMS',
      name: 'Multi-Agent Orchestration',
      description: 'A coordinated fleet of specialized agents using tool calling, state machines, shared memory, and deterministic handoffs for complex enterprise work.',
      tags: ['LangGraph', 'Agents', 'Tool calling', 'Docker'],
      link: 'https://github.com/Yash1453',
      role: 'Agent orchestration, state, tools',
      outcome: 'Complex work split into observable steps',
      details: 'A coordinated system of specialized agents with explicit handoffs, shared memory, and deterministic execution patterns.'
    },
    {
      number: '03',
      category: 'MARKET INTELLIGENCE',
      name: 'AI Market Intelligence Platform',
      description: 'A signal-to-decision environment combining live data, forecasting, anomaly detection, and dashboards for faster, more informed analysis.',
      tags: ['Forecasting', 'Anomaly detection', 'Dashboards', 'Python'],
      link: 'https://github.com/Yash1453',
      role: 'Data pipelines, forecasting, UX',
      outcome: 'Faster signal-to-decision workflows',
      details: 'Combines live signals, forecasting, anomaly detection, and dashboards into a focused intelligence surface.'
    },
    {
      number: '04',
      category: 'WORKFLOW AUTOMATION',
      name: 'Job Automation Agent',
      description: 'A practical autonomous pipeline that scrapes opportunities, scores them against a resume with a local LLM, tracks applications, and sends updates.',
      tags: ['Python', 'Ollama', 'SQLite', 'Playwright'],
      link: 'https://github.com/Yash1453',
      role: 'Automation, scoring, integrations',
      outcome: 'Less manual job-search overhead',
      details: 'A practical local-LLM workflow that scrapes, scores, tracks, and notifies while keeping the process inspectable.'
    },
    {
      number: '05',
      category: 'RESPONSIBLE AI',
      name: 'Evaluation & Quality Controls',
      description: 'Structured review patterns for accuracy, bias, hallucination, prompt injection, and governance across enterprise and healthcare AI workflows.',
      tags: ['Evaluation', 'Guardrails', 'RAG grounding', 'QA'],
      link: 'https://www.linkedin.com/in/yash-adhyapak/',
      role: 'Evaluation, guardrails, QA',
      outcome: 'Safer enterprise and healthcare AI',
      details: 'Structured controls for accuracy, bias, hallucination, prompt injection, and grounded outputs.'
    },
    {
      number: '06',
      category: 'DATA SYSTEMS',
      name: 'Geospatial Quality Automation',
      description: 'Validation, normalization, and anomaly detection pipelines that raised data quality from 87% to 96% across 500K+ records.',
      tags: ['SQL', 'Data validation', 'Anomaly detection', 'Agile'],
      link: 'https://www.linkedin.com/in/yash-adhyapak/',
      role: 'Python, SQL, data quality',
      outcome: '87% → 96% quality across 500K+ records',
      details: 'Automated validation, normalization, and anomaly detection across geospatial workflows and multiple Agile teams.'
    }
  ];

  projectGrid.innerHTML = projects.map((project) => `
    <article class="project-card" tabindex="0" data-project="${project.number}">
      <div class="project-top"><span class="project-number">${project.number}</span><span class="project-tag">${project.category}</span></div>
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <div class="project-bottom"><div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div><button class="card-open" aria-label="View ${project.name} details">↗</button></div>
    </article>
  `).join('');

  const modal = document.getElementById('project-modal');
  const openProject = (number) => {
    const project = projects.find((item) => item.number === number);
    if (!project) return;
    document.getElementById('modal-kicker').textContent = `${project.number} / ${project.category}`;
    document.getElementById('modal-title').textContent = project.name;
    document.getElementById('modal-description').textContent = project.details;
    document.getElementById('modal-role').textContent = project.role;
    document.getElementById('modal-outcome').textContent = project.outcome;
    document.getElementById('modal-stack').textContent = project.tags.join(' · ');
    document.getElementById('modal-link').href = project.link;
    modal.showModal();
  };
  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('click', (event) => {
      if (!event.target.closest('a')) openProject(card.dataset.project);
    });
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') openProject(card.dataset.project);
    });
  });
  document.querySelector('.modal-close').addEventListener('click', () => modal.close());
  modal.addEventListener('click', (event) => {
    if (event.target === modal) modal.close();
  });

  const pathCopy = {
    prototype: ['Start with a focused build sprint.', 'I can turn the idea into a scoped use case, architecture, and testable first version.', '#contact'],
    reliable: ['Start with a system audit.', 'We’ll identify retrieval, orchestration, latency, or evaluation failure modes and prioritize the highest-leverage fix.', '#lab'],
    evaluation: ['Start with an evaluation plan.', 'Define the test set, quality dimensions, release thresholds, and guardrails your team can operate.', '#lab'],
    hire: ['Start with the work.', 'Explore the systems, outcomes, and engineering approach—or connect directly for a serious collaboration.', '#work']
  };
  document.querySelectorAll('.path-card').forEach((card) => {
    card.addEventListener('click', () => {
      const [title, copy, link] = pathCopy[card.dataset.path];
      const result = document.getElementById('path-result');
      result.innerHTML = `<strong>${title}</strong><span>${copy}</span><a href="${link}">Take me there ↗</a>`;
      result.hidden = false;
    });
  });

  const revealItems = document.querySelectorAll('.section-block, .proof-strip');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => {
    item.classList.add('reveal');
    revealObserver.observe(item);
  });

  document.addEventListener('pointermove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 12;
    const y = (event.clientY / window.innerHeight - 0.5) * 12;
    document.documentElement.style.setProperty('--pointer-x', `${x}px`);
    document.documentElement.style.setProperty('--pointer-y', `${y}px`);
  });

  fetch('https://api.github.com/users/Yash1453')
    .then((response) => response.ok ? response.json() : Promise.reject(new Error('GitHub unavailable')))
    .then((profile) => {
      const githubStat = document.querySelector('[data-github-stat]');
      if (githubStat) githubStat.textContent = `${profile.public_repos} public repos`;
    })
    .catch(() => {});

      const copilot = document.querySelector('.copilot');
      const copilotToggle = document.querySelector('.copilot-toggle');
      const copilotPanel = document.querySelector('.copilot-panel');
      const messages = document.getElementById('copilot-messages');
      const answers = [
        { keys: ['build', 'work', 'project'], answer: 'Yash builds production-minded GenAI systems: RAG and memory layers, multi-agent workflows, FastAPI backends, evaluation controls, and automation pipelines.' },
        { keys: ['different', 'why', 'hire'], answer: 'The differentiator is the combination of building and measuring. Yash works across data quality, ML, backend delivery, and responsible AI—so prototypes are designed to survive contact with real workflows.' },
        { keys: ['help', 'team', 'client', 'hire'], answer: 'He can help scope an AI prototype, diagnose unreliable RAG or agent behavior, design evaluation and guardrails, or ship a containerized backend. Start with the “What brings you here?” section.' },
        { keys: ['rag', 'retrieval', 'memory'], answer: 'His retrieval work covers chunking, embeddings, hybrid search, reranking, vector databases, persistent memory, and grounded generation. Reported impact: 35% retrieval-accuracy improvement and 0.8s query latency.' },
        { keys: ['experience', 'background', 'resume'], answer: 'Yash has 1.5+ years across GenAI engineering, geospatial data quality at HERE Technologies, and ML/NLP at Feynn Labs. He has handled 500K+ records and built systems with 99.2% uptime.' }
      ];
      const answerFor = (question) => {
        const normalized = question.toLowerCase();
        const match = answers.find((item) => item.keys.some((key) => normalized.includes(key)));
        return match ? match.answer : 'The short version: Yash builds reliable AI systems and is open to serious collaborations. Try asking about his projects, RAG, experience, or how he can help your team.';
      };
      const askCopilot = (question) => {
        const clean = question.trim();
        if (!clean) return;
        messages.insertAdjacentHTML('beforeend', `<p class="user-message">${clean}</p><p class="bot-message">${answerFor(clean)}</p>`);
        messages.scrollTop = messages.scrollHeight;
      };
      const setCopilot = (open) => {
        copilotPanel.hidden = !open;
        copilotToggle.setAttribute('aria-expanded', String(open));
        if (open) document.getElementById('copilot-input').focus();
      };
      copilotToggle.addEventListener('click', () => setCopilot(copilotPanel.hidden));
      document.querySelector('.copilot-close').addEventListener('click', () => setCopilot(false));
      document.querySelectorAll('.quick-questions button').forEach((button) => button.addEventListener('click', () => askCopilot(button.dataset.question)));
      document.getElementById('copilot-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.getElementById('copilot-input');
        askCopilot(input.value);
        input.value = '';
      });
  const traces = {
    retrieve: {
      status: '● grounded',
      code: `query = embed(user_question)
chunks = vector_store.search(query, k=8)
context = reranker.rank(chunks)
answer = llm.generate(context=context)`,
      caption: 'The answer starts with evidence. Retrieval, reranking, and grounding work together before the model speaks.'
    },
    orchestrate: {
      status: '● coordinated',
      code: `state = planner.route(request)
for agent in state.specialists:
    result = agent.invoke(tools, memory)
state = reducer.merge(result)
return supervisor.verify(state)`,
      caption: 'Agents are useful when their responsibilities are explicit, their state is observable, and handoffs are deterministic.'
    },
    evaluate: {
      status: '● measured',
      code: `scores = evaluator.run(test_set, output)
check(scores.accuracy, scores.groundedness)
check(scores.bias, scores.injection_resistance)
ship_if(scores >= release_threshold)`,
      caption: 'A demo is not a deployment plan. I build evaluation into the loop so quality can improve instead of becoming guesswork.'
    }
  };
  const traceCode = document.getElementById('trace-code');
  const traceCaption = document.getElementById('trace-caption');
  const traceStatus = document.getElementById('trace-status');
  const renderTrace = (name) => {
    const trace = traces[name];
    traceCode.textContent = trace.code;
    traceCaption.textContent = trace.caption;
    traceStatus.textContent = trace.status;
  };
  document.querySelectorAll('.lab-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.lab-tab').forEach((item) => {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      renderTrace(tab.dataset.trace);
    });
  });
  renderTrace('retrieve');
});
