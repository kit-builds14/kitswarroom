// ============================================================
// Kit's Build Team — Scrum/EOS Dashboard Data
// Edit this file to update the dashboard. Reload to see changes.
// ============================================================

const DASHBOARD_DATA = {

  // -- Scoreboard --
  team: "Kit's Build Team",
  sprint: "Sprint 1 — Launch Day",
  sprintStart: "2026-02-09",
  sprintEnd: "2026-02-21",

  // -- Shipped Products (clickable links) --
  shipped: [
    { name: "🏎️ Racing Game", path: "../dyer-racing-game/index.html", agent: "Coder", type: "Marketing", time: "2m33s" },
    { name: "🎰 Spin-to-Win Lead Capture", path: "../dyer-spin-to-win/index.html", agent: "Analyst", type: "Lead Gen", time: "1m48s" },
    { name: "🌐 Guaranteed Human Landing", path: "../guaranteed-human-landing/index.html", agent: "Researcher", type: "GH", time: "2m46s" },
    { name: "💰 Deal Profit Calculator", path: "../dyer-deal-calculator/index.html", agent: "Coder", type: "Sales Tool", time: "1m23s" },
    { name: "📅 Service Scheduler", path: "../dyer-service-scheduler/index.html", agent: "Ops", type: "Customer", time: "1m58s" },
    { name: "💬 Review Response Generator", path: "../dyer-review-responder/index.html", agent: "Writer", type: "BDC", time: "2m49s" },
    { name: "📊 Competitive Intel Dashboard", path: "../dyer-competitive-intel/index.html", agent: "Researcher", type: "Strategy", time: "2m43s" },
    { name: "🚗 Trade-In Estimator", path: "../dyer-trade-estimator/index.html", agent: "Coder", type: "Lead Gen", time: "1m43s" },
    { name: "📈 Sales Daily Scorecard", path: "../dyer-sales-scorecard/index.html", agent: "Ops", type: "Sales Ops", time: "1m58s" },
    { name: "👥 People Analyzer / EOS", path: "../dyer-people-scorecard/index.html", agent: "Researcher", type: "HR/EOS", time: "1m57s" },
    { name: "💵 Financial P&L Dashboard", path: "../dyer-financial-dashboard/index.html", agent: "Analyst", type: "Executive", time: "2m24s" },
    { name: "📋 L10 Meeting Runner", path: "../dyer-l10-runner/index.html", agent: "Writer", type: "EOS", time: "2m45s" },
    { name: "⭐ CSI Survey Tool", path: "../dyer-csi-survey/index.html", agent: "Coder", type: "CX", time: "2m10s" },
    { name: "🔍 Inventory Browser", path: "../dyer-inventory-browser/index.html", agent: "Researcher", type: "Customer", time: "3m13s" },
    { name: "📣 Marketing Campaign Tracker", path: "../dyer-marketing-tracker/index.html", agent: "Analyst", type: "Marketing", time: "2m22s" },
    { name: "✅ Employee Onboarding", path: "../dyer-onboarding/index.html", agent: "Writer", type: "HR", time: "2m27s" },
    { name: "📱 Digital Business Cards", path: "../dyer-digital-card/index.html", agent: "Coder", type: "Sales", time: "3m02s" },
    { name: "📊 Agent Performance Dashboard", path: "../agent-dashboard/index.html", agent: "Analyst", type: "Ops", time: "1m22s" },
    { name: "📋 Scrum Dashboard", path: "index.html", agent: "Ops", type: "Ops", time: "1m53s" },
  ],

  // -- Agent colors --
  agentColors: {
    Kit:        { bg: "#2E4066", border: "#C5A55A", text: "#F0E6CC" },
    Coder:      { bg: "#1E3A2F", border: "#4CAF50", text: "#C8E6C9" },
    Researcher: { bg: "#2C2345", border: "#9C27B0", text: "#E1BEE7" },
    Writer:     { bg: "#3E2723", border: "#FF7043", text: "#FFCCBC" },
    Analyst:    { bg: "#1A237E", border: "#42A5F5", text: "#BBDEFB" },
    Ops:        { bg: "#33312E", border: "#FFA726", text: "#FFE0B2" },
    QA:         { bg: "#1B3030", border: "#26A69A", text: "#B2DFDB" },
    Comms:      { bg: "#3E2241", border: "#EC407A", text: "#F8BBD0" }
  },

  // -- Team Status --
  agents: [
    { name: "Kit",        role: "Lead / Orchestrator", status: "working", task: "Orchestrating Sprint" },
    { name: "Coder",      role: "Developer",           status: "idle",    task: "5 builds shipped" },
    { name: "Researcher", role: "Research & Discovery", status: "idle",    task: "4 builds shipped" },
    { name: "Writer",     role: "Content & Docs",      status: "idle",    task: "4 builds shipped" },
    { name: "Analyst",    role: "Data & Insights",     status: "idle",    task: "3 builds shipped" },
    { name: "Ops",        role: "DevOps & Infra",      status: "idle",    task: "3 builds shipped" },
    { name: "QA",         role: "Quality Assurance",   status: "idle",    task: null },
    { name: "Comms",      role: "Communications",      status: "idle",    task: null }
  ],

  // -- Kanban Tasks --
  tasks: [
    { id: 1, title: "iOS Build Setup",        agent: "Kit",        priority: "P2", effort: "3h", column: "backlog",     description: "Configure Xcode project and provisioning profiles" },
    { id: 2, title: "Racing Game V1",          agent: "Coder",      priority: "P1", effort: "8h", column: "inprogress",  description: "Build initial racing game prototype with core mechanics" },
    { id: 3, title: "Master Backlog",          agent: "Researcher", priority: "P1", effort: "4h", column: "inprogress",  description: "Research and compile comprehensive project backlog" },
    { id: 4, title: "Scrum Dashboard",         agent: "Ops",        priority: "P2", effort: "3h", column: "inprogress",  description: "Build EOS-style scrum dashboard for the team" },
    { id: 5, title: "Moltbook Cron Fix",       agent: "Kit",        priority: "P1", effort: "1h", column: "done",        description: "Fix cron job scheduling on Moltbook server" },
    { id: 6, title: "OpenClaw Update 2.12",    agent: "Kit",        priority: "P1", effort: "2h", column: "done",        description: "Update OpenClaw to version 2.12 with latest patches" },
    { id: 7, title: "Trusted Proxies Audit",   agent: "Kit",        priority: "P2", effort: "1h", column: "done",        description: "Audit and verify trusted proxy configurations" }
  ],

  // -- EOS Rocks (Quarterly Goals) --
  rocks: [
    { title: "Launch Kit Agent Platform v1.0",       owner: "Kit",        progress: 35, status: "on-track" },
    { title: "Ship Racing Game MVP",                  owner: "Coder",      progress: 15, status: "on-track" },
    { title: "Establish CI/CD Pipeline",              owner: "Ops",        progress: 50, status: "on-track" },
    { title: "Complete Documentation Suite",          owner: "Writer",     progress: 5,  status: "off-track" },
    { title: "Security & Infrastructure Hardening",   owner: "Kit",        progress: 60, status: "on-track" }
  ],

  // -- IDS Log (Identify, Discuss, Solve) --
  ids: [
    { id: 1, issue: "Xcode provisioning profiles expiring Feb 28",          owner: "Kit",   status: "open",     resolution: null },
    { id: 2, issue: "Need to decide on game engine: SpriteKit vs Unity",    owner: "Coder", status: "discuss",  resolution: null },
    { id: 3, issue: "Moltbook cron jobs were silently failing",             owner: "Kit",   status: "solved",   resolution: "Fixed cron syntax and added monitoring alerts" },
    { id: 4, issue: "OpenClaw 2.12 had breaking change in proxy handling",  owner: "Kit",   status: "solved",   resolution: "Patched trusted proxies config and audited all endpoints" },
    { id: 5, issue: "No automated testing in place yet",                    owner: "QA",    status: "open",     resolution: null }
  ],

  // -- Activity Feed --
  activity: [
    { time: "2026-02-13T07:20:00", type: "start",    message: "Ops began building Scrum Dashboard",               agent: "Ops" },
    { time: "2026-02-13T07:15:00", type: "start",    message: "Researcher kicked off Master Backlog compilation",  agent: "Researcher" },
    { time: "2026-02-13T07:00:00", type: "start",    message: "Coder resumed Racing Game V1 development",         agent: "Coder" },
    { time: "2026-02-13T06:45:00", type: "complete", message: "Trusted Proxies Audit completed — all clear",       agent: "Kit" },
    { time: "2026-02-13T06:30:00", type: "complete", message: "OpenClaw updated to 2.12 successfully",             agent: "Kit" },
    { time: "2026-02-13T06:00:00", type: "complete", message: "Moltbook Cron Fix deployed and verified",           agent: "Kit" },
    { time: "2026-02-13T05:45:00", type: "decision", message: "Sprint 1 priorities confirmed at standup",          agent: "Kit" },
    { time: "2026-02-13T05:30:00", type: "blocker",  message: "iOS Build Setup blocked on provisioning profiles",  agent: "Kit" }
  ]
};
