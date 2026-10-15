// Interactive Portfolio Logic for Soranut Sangroongruang (English Edition)
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCanvas();
  initTypewriter();
  renderWorkExperience();
  renderProjects();
  renderSkills();
  calculateDebt();
  updateNutritionPreview();

  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/* ==========================================================================
   Theme Switcher (Default: LIGHT / White)
   ========================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  
  const saved = localStorage.getItem('soranut_theme_pref') || 'light';

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('soranut_theme_pref', theme);
    if (themeIcon) {
      themeIcon.setAttribute('data-lucide', theme === 'light' ? 'moon' : 'sun');
      if (window.lucide) window.lucide.createIcons();
    }
  }

  apply(saved);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') || 'light';
      apply(cur === 'light' ? 'dark' : 'light');
    });
  }
}

/* ==========================================================================
   Subtle Interactive Ambient Canvas
   ========================================================================== */
function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let w, h;
  let particles = [];
  const count = 32;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Node {
    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.vx = (Math.random() - 0.5) * 0.25;
      this.vy = (Math.random() - 0.5) * 0.25;
      this.radius = Math.random() * 1.5 + 0.8;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > w) this.vx *= -1;
      if (this.y < 0 || this.y > h) this.vy *= -1;
    }
    draw() {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? 'rgba(56, 189, 248, 0.4)' : 'rgba(37, 99, 235, 0.3)';
      ctx.fill();
    }
  }

  for (let i = 0; i < count; i++) {
    particles.push(new Node());
  }

  function render() {
    ctx.clearRect(0, 0, w, h);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 125) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = isDark 
            ? `rgba(56, 189, 248, ${0.1 * (1 - dist / 125)})`
            : `rgba(37, 99, 235, ${0.08 * (1 - dist / 125)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(render);
  }
  render();
}

/* ==========================================================================
   Typewriter Animation for Hero Roles
   ========================================================================== */
function initTypewriter() {
  const roles = [
    "Software Engineer",
    "Java Spring Boot & Backend Specialist",
    "AI-Integrated Full-Stack Developer",
    "DevOps & Security Practitioner"
  ];
  let rIndex = 0;
  let cIndex = 0;
  let isDeleting = false;
  const target = document.getElementById('typewriter-text');
  if (!target) return;

  function type() {
    const current = roles[rIndex];
    if (isDeleting) {
      target.textContent = current.substring(0, cIndex - 1);
      cIndex--;
    } else {
      target.textContent = current.substring(0, cIndex + 1);
      cIndex++;
    }

    let speed = isDeleting ? 30 : 65;
    if (!isDeleting && cIndex === current.length) {
      speed = 1800;
      isDeleting = true;
    } else if (isDeleting && cIndex === 0) {
      isDeleting = false;
      rIndex = (rIndex + 1) % roles.length;
      speed = 400;
    }
    setTimeout(type, speed);
  }
  type();
}

/* ==========================================================================
   Render Work Experience (Faithful to CV)
   ========================================================================== */
function renderWorkExperience() {
  const container = document.getElementById('work-exp-container');
  if (!container || !window.PORTFOLIO_DATA) return;

  const list = window.PORTFOLIO_DATA.workExperience;
  container.innerHTML = list.map(item => `
    <article class="work-card">
      <div class="work-head">
        <div>
          <h3 class="company-title">${item.company}</h3>
          <div class="work-sub">
            ${item.badge ? `<span class="badge-tag">${item.badge}</span>` : ''}
            <span class="work-pos">${item.position}</span>
          </div>
        </div>
        <div class="work-period">${item.period}</div>
      </div>

      ${item.techStack ? `
        <div class="work-tech-pills">
          <span style="font-size:0.76rem; color:var(--text-muted); margin-right:4px;">Tech:</span>
          ${item.techStack.map(t => `<span class="tech-pill">${t}</span>`).join('')}
        </div>
      ` : ''}

      <ul class="work-bullets">
        ${item.highlights.map(h => `
          <li>
            ${h.title ? `<strong>${h.title}:</strong> ` : ''}${h.desc}
            ${h.subItems ? `
              <ul class="sub-bullets">
                ${h.subItems.map(sub => `<li>${sub}</li>`).join('')}
              </ul>
            ` : ''}
          </li>
        `).join('')}
      </ul>
    </article>
  `).join('');
}

/* ==========================================================================
   Render Projects
   ========================================================================== */
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container || !window.PORTFOLIO_DATA) return;

  const projects = window.PORTFOLIO_DATA.projects;
  container.innerHTML = projects.map(p => `
    <article class="proj-card">
      <div class="proj-head">
        <div>
          <h3 class="proj-title">${p.name}</h3>
          <div class="work-sub">
            <span class="badge-tag">${p.badge}</span>
            <span class="work-pos">${p.role || ''}</span>
          </div>
        </div>
        <div class="work-period">${p.period}</div>
      </div>

      <div class="work-tech-pills" style="margin-bottom:12px;">
        ${p.techStack.map(t => `<span class="tech-pill">${t}</span>`).join('')}
      </div>

      ${p.summary ? `
        <div class="proj-summary-box">
          <strong style="color:var(--text-primary);">Project Summary:</strong> ${p.summary}
        </div>
      ` : ''}

      <ul class="work-bullets">
        ${p.responsibilities.map(r => `<li>${r}</li>`).join('')}
      </ul>

      <div class="proj-actions">
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" title="Open Live Demo">
          <i data-lucide="external-link" style="width:14px; height:14px;"></i> Live Demo
        </a>` : ''}
        <a href="${p.github}" target="_blank" class="btn btn-secondary btn-sm" title="View Repository on GitHub">
          <i data-lucide="github" style="width:14px; height:14px;"></i> GitHub Repository
        </a>
        <button class="btn btn-primary btn-sm" onclick="openProjectModal('${p.id}')">
          <i data-lucide="layers" style="width:14px; height:14px;"></i> Architecture Deep Dive
        </button>
      </div>
    </article>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

/* ==========================================================================
   Render Technical Skills (Clean Layout, No %)
   ========================================================================== */
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container || !window.PORTFOLIO_DATA) return;

  const categories = window.PORTFOLIO_DATA.skills;
  container.innerHTML = categories.map(cat => `
    <div class="skill-cat-box">
      <div class="cat-head">
        <i data-lucide="${cat.icon}" style="color:var(--accent-blue); width:20px; height:20px;"></i>
        <span>${cat.category}</span>
      </div>

      <div class="skill-clean-list">
        ${cat.items.map(item => `
          <div class="skill-clean-item">
            <div class="skill-item-title-row">
              <span class="skill-dot-badge"></span>
              <strong class="skill-item-name">${item.name}</strong>
            </div>
            <div class="skill-item-desc">${item.desc}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

/* ==========================================================================
   ROBUST 3-STRATEGY AMORTIZATION CALCULATION ENGINE (FinanceCare)
   Includes: Debt Avalanche, Debt Snowball, and Optimal Cost (Marginal Cost)
   ========================================================================== */
let debtStrategy = 'avalanche';
let currentHealthGoal = 'fatloss';

function switchSimulatorTab(tab) {
  const debtView = document.getElementById('sim-debt-view');
  const yourpaceView = document.getElementById('sim-yourpace-view');
  const debtBtn = document.getElementById('tab-debt-btn');
  const yourpaceBtn = document.getElementById('tab-yourpace-btn');

  if (tab === 'debt') {
    debtView.style.display = 'block';
    yourpaceView.style.display = 'none';
    debtBtn.classList.add('active');
    yourpaceBtn.classList.remove('active');
  } else {
    debtView.style.display = 'none';
    yourpaceView.style.display = 'block';
    debtBtn.classList.remove('active');
    yourpaceBtn.classList.add('active');
    updateNutritionPreview();
  }
}

function setDebtStrategy(strat) {
  debtStrategy = strat;
  document.getElementById('btn-strat-avalanche').classList.toggle('active', strat === 'avalanche');
  document.getElementById('btn-strat-snowball').classList.toggle('active', strat === 'snowball');
  document.getElementById('btn-strat-optimal').classList.toggle('active', strat === 'optimal');
  calculateDebt();
}

/**
 * Mathematically rigorous amortization simulator supporting 3 strategies:
 * - 'avalanche': Highest APR first (Minimizes total interest mathematically)
 * - 'snowball': Lowest remaining balance first (Fastest account closure / momentum)
 * - 'optimal': Marginal Cost Strategy (Monthly interest + BoT Overdue penalty risk)
 */
function runAmortizationSimulation(balance1, apr1, balance2, apr2, monthlyBudget, strategy) {
  let b1 = balance1;
  let b2 = balance2;
  const rate1 = apr1 / 100 / 12;
  const rate2 = apr2 / 100 / 12;
  
  // Bank of Thailand penalty rate (3% above normal rate on overdue amounts)
  const penaltyRate1 = (apr1 + 3) / 100 / 12;
  const penaltyRate2 = (apr2 + 3) / 100 / 12;

  let months = 0;
  let totalInterest = 0;
  let loan1ClearedMonth = null;
  let loan2ClearedMonth = null;

  while ((b1 > 0.01 || b2 > 0.01) && months < 360) {
    months++;

    // Monthly interest calculation
    const int1 = b1 > 0 ? b1 * rate1 : 0;
    const int2 = b2 > 0 ? b2 * rate2 : 0;
    totalInterest += (int1 + int2);

    // Balance after monthly interest
    b1 += int1;
    b2 += int2;

    // Minimum Payment (5% of balance or ฿500 minimum)
    let min1 = b1 > 0 ? Math.min(b1, Math.max(500, b1 * 0.05)) : 0;
    let min2 = b2 > 0 ? Math.min(b2, Math.max(500, b2 * 0.05)) : 0;

    let availableBudget = Math.max(monthlyBudget, min1 + min2);

    // Deduct minimum payments first (Waterfall protection)
    b1 -= min1;
    b2 -= min2;
    let extraBudget = availableBudget - (min1 + min2);

    // Apply Extra Budget according to strategy:
    if (extraBudget > 0) {
      if (strategy === 'avalanche') {
        // Debt Avalanche: Priority to highest APR (Loan 2 @ 26% APR)
        if (b2 > 0) {
          const payB2 = Math.min(b2, extraBudget);
          b2 -= payB2;
          extraBudget -= payB2;
        }
        if (extraBudget > 0 && b1 > 0) {
          const payB1 = Math.min(b1, extraBudget);
          b1 -= payB1;
          extraBudget -= payB1;
        }
      } else if (strategy === 'snowball') {
        // Debt Snowball: Priority to lowest remaining balance (Loan 1 @ smaller balance)
        if (b1 > 0) {
          const payB1 = Math.min(b1, extraBudget);
          b1 -= payB1;
          extraBudget -= payB1;
        }
        if (extraBudget > 0 && b2 > 0) {
          const payB2 = Math.min(b2, extraBudget);
          b2 -= payB2;
          extraBudget -= payB2;
        }
      } else if (strategy === 'optimal') {
        // Optimal Cost Strategy: Calculates Marginal Cost (Monthly Interest Damage + BoT Late Penalty Liability)
        const marginalCost1 = (b1 * rate1) + (min1 * penaltyRate1);
        const marginalCost2 = (b2 * rate2) + (min2 * penaltyRate2);

        if (marginalCost2 >= marginalCost1 && b2 > 0) {
          const payB2 = Math.min(b2, extraBudget);
          b2 -= payB2;
          extraBudget -= payB2;
          if (extraBudget > 0 && b1 > 0) {
            const payB1 = Math.min(b1, extraBudget);
            b1 -= payB1;
            extraBudget -= payB1;
          }
        } else if (b1 > 0) {
          const payB1 = Math.min(b1, extraBudget);
          b1 -= payB1;
          extraBudget -= payB1;
          if (extraBudget > 0 && b2 > 0) {
            const payB2 = Math.min(b2, extraBudget);
            b2 -= payB2;
            extraBudget -= payB2;
          }
        }
      }
    }

    if (b1 <= 0.01 && loan1ClearedMonth === null) loan1ClearedMonth = months;
    if (b2 <= 0.01 && loan2ClearedMonth === null) loan2ClearedMonth = months;
  }

  return {
    months,
    totalInterest: Math.round(totalInterest),
    loan1ClearedMonth: loan1ClearedMonth || months,
    loan2ClearedMonth: loan2ClearedMonth || months
  };
}

// Calculate baseline if user only pays minimum payments (no extra budget)
function runMinimumsOnlySimulation(balance1, apr1, balance2, apr2) {
  let b1 = balance1;
  let b2 = balance2;
  const rate1 = apr1 / 100 / 12;
  const rate2 = apr2 / 100 / 12;
  let months = 0;
  let totalInterest = 0;

  while ((b1 > 0.01 || b2 > 0.01) && months < 480) {
    months++;
    const int1 = b1 > 0 ? b1 * rate1 : 0;
    const int2 = b2 > 0 ? b2 * rate2 : 0;
    totalInterest += (int1 + int2);

    b1 += int1;
    b2 += int2;

    const min1 = b1 > 0 ? Math.min(b1, Math.max(500, b1 * 0.05)) : 0;
    const min2 = b2 > 0 ? Math.min(b2, Math.max(500, b2 * 0.05)) : 0;

    b1 -= min1;
    b2 -= min2;
  }

  return { months, totalInterest: Math.round(totalInterest) };
}

function calculateDebt() {
  const l1 = parseFloat(document.getElementById('range-loan1').value); // Credit Card (16% APR)
  const l2 = parseFloat(document.getElementById('range-loan2').value); // Personal Loan (26% APR)
  const budget = parseFloat(document.getElementById('range-budget').value);

  const apr1 = 16;
  const apr2 = 26;

  // Update Input Labels
  document.getElementById('label-loan1').textContent = `฿${l1.toLocaleString()}`;
  document.getElementById('label-loan2').textContent = `฿${l2.toLocaleString()}`;
  document.getElementById('label-budget').textContent = `฿${budget.toLocaleString()}`;

  // Run All 3 Strategy Simulations
  const resAvalanche = runAmortizationSimulation(l1, apr1, l2, apr2, budget, 'avalanche');
  const resSnowball = runAmortizationSimulation(l1, apr1, l2, apr2, budget, 'snowball');
  const resOptimal = runAmortizationSimulation(l1, apr1, l2, apr2, budget, 'optimal');
  const resMinOnly = runMinimumsOnlySimulation(l1, apr1, l2, apr2);

  let activeRes = resAvalanche;
  if (debtStrategy === 'snowball') activeRes = resSnowball;
  if (debtStrategy === 'optimal') activeRes = resOptimal;

  const savingsVsMinimums = Math.max(0, resMinOnly.totalInterest - activeRes.totalInterest);

  // Update Main Engine Output Cards
  document.getElementById('res-time').textContent = `${activeRes.months} Months`;
  document.getElementById('res-interest').textContent = `฿${activeRes.totalInterest.toLocaleString()}`;
  document.getElementById('res-savings').textContent = `฿${savingsVsMinimums.toLocaleString()}`;

  // Update 3-Way Comparison Cards
  document.getElementById('cmp-aval-months').textContent = `${resAvalanche.months} Months`;
  document.getElementById('cmp-aval-interest').textContent = `฿${resAvalanche.totalInterest.toLocaleString()}`;

  document.getElementById('cmp-snow-months').textContent = `${resSnowball.months} Months`;
  document.getElementById('cmp-snow-interest').textContent = `฿${resSnowball.totalInterest.toLocaleString()}`;

  document.getElementById('cmp-opt-months').textContent = `${resOptimal.months} Months`;
  document.getElementById('cmp-opt-interest').textContent = `฿${resOptimal.totalInterest.toLocaleString()}`;

  const snowDesc = document.getElementById('cmp-snow-desc');
  if (snowDesc) {
    snowDesc.textContent = `Eliminates ฿${(l1/1000).toFixed(0)}k credit card in ~${resSnowball.loan1ClearedMonth} months for rapid momentum.`;
  }

  // Active Tag
  const activeTag = document.getElementById('active-strategy-tag');
  if (activeTag) {
    if (debtStrategy === 'avalanche') activeTag.textContent = 'Debt Avalanche Active';
    else if (debtStrategy === 'snowball') activeTag.textContent = 'Debt Snowball Active';
    else activeTag.textContent = 'Optimal Cost Strategy Active';
  }

  // Highlight active comparison card
  const cardAvalanche = document.getElementById('compare-card-avalanche');
  const cardSnowball = document.getElementById('compare-card-snowball');
  const cardOptimal = document.getElementById('compare-card-optimal');
  if (cardAvalanche && cardSnowball && cardOptimal) {
    cardAvalanche.classList.toggle('active-compare', debtStrategy === 'avalanche');
    cardSnowball.classList.toggle('active-compare', debtStrategy === 'snowball');
    cardOptimal.classList.toggle('active-compare', debtStrategy === 'optimal');
  }

  // Dynamic Explanatory Text
  const explText = document.getElementById('strategy-explanation-text');
  if (explText) {
    if (debtStrategy === 'avalanche') {
      const intDiff = Math.abs(resSnowball.totalInterest - resAvalanche.totalInterest);
      explText.innerHTML = `<strong>Avalanche Advantage:</strong> By prioritizing the <strong>26% APR</strong> personal loan, you save <strong>฿${intDiff.toLocaleString()}</strong> in interest compared to Snowball and become debt-free in <strong>${resAvalanche.months} months</strong>.`;
    } else if (debtStrategy === 'snowball') {
      explText.innerHTML = `<strong>Snowball Advantage:</strong> By eliminating the smaller <strong>฿${l1.toLocaleString()}</strong> credit card in just <strong>${resSnowball.loan1ClearedMonth} months</strong>, you gain immediate momentum and reduce your required monthly obligations fastest.`;
    } else {
      explText.innerHTML = `<strong>Optimal Cost Advantage:</strong> Evaluates marginal cost (monthly interest liability + Bank of Thailand overdue penalty risk) each month to minimize compound financial damage while protecting minimum payment integrity.`;
    }
  }
}

/* ==========================================================================
   YourPace Health Mentor Simulator Logic
   ========================================================================== */
function setHealthGoal(goal) {
  currentHealthGoal = goal;
  
  const goals = ['fatloss', 'muscle', 'endurance'];
  goals.forEach(g => {
    const btn = document.getElementById(`goal-btn-${g}`);
    if (btn) {
      const isActive = (g === goal);
      btn.classList.toggle('active', isActive);
      const icon = btn.querySelector('svg') || btn.querySelector('i');
      if (icon) icon.style.opacity = isActive ? '1' : '0';
    }
  });

  updateNutritionPreview();
}

function updateNutritionPreview() {
  const calories = parseInt(document.getElementById('range-cal').value);
  document.getElementById('label-cal').textContent = `${calories.toLocaleString()} kcal`;

  let pPct = 0.35, cPct = 0.40, fPct = 0.25;
  let advice = "";

  if (currentHealthGoal === 'fatloss') {
    pPct = 0.40; cPct = 0.35; fPct = 0.25;
    advice = `<strong>Gemini AI Advice:</strong> For <strong>Fat Loss & Muscle Retention</strong>, prioritizing a 40% high-protein intake (${Math.round((calories*pPct)/4)}g) prevents muscle catabolism. Distribute carbs evenly across 3-4 meals and maintain at least 2.8L daily water hydration.`;
  } else if (currentHealthGoal === 'muscle') {
    pPct = 0.30; cPct = 0.50; fPct = 0.20;
    advice = `<strong>Gemini AI Advice:</strong> For <strong>Muscle Hypertrophy & Strength</strong>, a structured caloric surplus with 50% carbohydrates (${Math.round((calories*cPct)/4)}g) replenishes glycogen for progressive overload, alongside 1.8g protein per kg bodyweight.`;
  } else {
    pPct = 0.25; cPct = 0.55; fPct = 0.20;
    advice = `<strong>Gemini AI Advice:</strong> For <strong>Endurance & Marathon Conditioning</strong>, sustained complex carbohydrate loading provides enduring aerobic energy, paired with essential electrolytes and rapid post-run recovery protein.`;
  }

  const pGrams = Math.round((calories * pPct) / 4);
  const cGrams = Math.round((calories * cPct) / 4);
  const fGrams = Math.round((calories * fPct) / 9);

  document.getElementById('macro-protein').textContent = `${pGrams}g`;
  document.getElementById('macro-carbs').textContent = `${cGrams}g`;
  document.getElementById('macro-fats').textContent = `${fGrams}g`;
  document.getElementById('ai-mentor-advice').innerHTML = advice;
}

/* ==========================================================================
   Architecture Deep Dive Modal (Visual Flow Nodes)
   ========================================================================== */
function openProjectModal(id) {
  const p = window.PORTFOLIO_DATA.projects.find(item => item.id === id);
  if (!p) return;

  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-content');

  content.innerHTML = `
    <div>
      <span class="badge-tag">${p.badge}</span>
      <h2 style="font-family:var(--font-heading); font-size:1.6rem; font-weight:800; margin-top:8px; color:var(--text-primary);">${p.name}</h2>
      <div style="font-size:0.86rem; color:var(--text-muted); font-family:var(--font-mono); margin-top:2px;">${p.period} • ${p.role || ''}</div>
    </div>

    ${p.summary ? `
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); padding:16px 20px; border-radius:var(--radius-md);">
        <h4 style="font-size:0.92rem; font-weight:700; color:var(--text-primary); margin-bottom:4px;">Project Overview</h4>
        <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.7;">${p.summary}</p>
      </div>
    ` : ''}

    ${p.flowNodes ? `
      <div>
        <h4 style="font-size:0.95rem; font-weight:700; color:var(--text-primary); margin-bottom:8px; display:flex; align-items:center; gap:6px;">
          <i data-lucide="git-branch" style="width:16px; height:16px; color:var(--accent-blue);"></i> System Architecture & Data Flow
        </h4>
        <div class="flow-nodes-container">
          ${p.flowNodes.map(node => `
            <div class="flow-node-card">
              <span class="flow-node-step">${node.step}</span>
              <span class="flow-node-tech">${node.tech}</span>
              <span class="flow-node-desc">${node.desc}</span>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <div>
      <h4 style="font-size:0.95rem; font-weight:700; color:var(--text-primary); margin-bottom:8px; display:flex; align-items:center; gap:6px;">
        <i data-lucide="check-circle-2" style="width:16px; height:16px; color:var(--accent-emerald);"></i> Engineering Responsibilities & Key Contributions
      </h4>
      <ul class="work-bullets">
        ${p.responsibilities.map(r => `<li>${r}</li>`).join('')}
      </ul>
    </div>

    <div>
      <h4 style="font-size:0.9rem; font-weight:700; color:var(--text-primary); margin-bottom:8px;">Technology Stack</h4>
      <div class="work-tech-pills">
        ${p.techStack.map(t => `<span class="tech-pill" style="background:var(--bg-secondary); color:var(--accent-blue); padding:5px 12px; font-size:0.82rem;">${t}</span>`).join('')}
      </div>
    </div>

    <div style="display:flex; gap:12px; margin-top:8px; padding-top:16px; border-top:1px solid var(--border-subtle);">
      ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" title="Open Live Demo">
          <i data-lucide="external-link" style="width:14px; height:14px;"></i> Live Demo
        </a>` : ''}
        <a href="${p.github}" target="_blank" class="btn btn-secondary btn-sm">
        <i data-lucide="github" style="width:14px; height:14px;"></i> View Repository on GitHub
      </a>
      <button class="btn btn-secondary btn-sm" onclick="closeProjectModal()">Close</button>
    </div>
  `;

  modal.classList.add('open');
  if (window.lucide) window.lucide.createIcons();
}

function closeProjectModal() {
  document.getElementById('project-modal').classList.remove('open');
}

// Close modal on backdrop click
document.addEventListener('click', (e) => {
  const modal = document.getElementById('project-modal');
  if (e.target === modal) {
    closeProjectModal();
  }
});

/* ==========================================================================
   Copy to Clipboard Helper
   ========================================================================== */
function copyToClipboard(text, msg) {
  navigator.clipboard.writeText(text).then(() => {
    const toast = document.createElement('div');
    toast.style.cssText = 'position:fixed; bottom:24px; right:24px; background:var(--accent-blue); color:#fff; padding:10px 18px; border-radius:8px; font-size:0.85rem; font-weight:600; z-index:2000; box-shadow:0 4px 14px rgba(0,0,0,0.2);';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
  });
}

/* ==========================================================================
   Download CV (PDF) Trigger
   ========================================================================== */
function downloadCV() {
  const origTitle = document.title;
  document.title = "Soranut_Sangroongruang_CV";
  window.print();
  setTimeout(() => {
    document.title = origTitle;
  }, 1000);
}

// Global functions for inline HTML event handlers
window.switchSimulatorTab = switchSimulatorTab;
window.setDebtStrategy = setDebtStrategy;
window.calculateDebt = calculateDebt;
window.setHealthGoal = setHealthGoal;
window.updateNutritionPreview = updateNutritionPreview;
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.copyToClipboard = copyToClipboard;
window.downloadCV = downloadCV;
