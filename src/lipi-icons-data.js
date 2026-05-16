/* ═══════════════════════════════════════════════════════════════
   LiPi Icon System — v0.5 (Phase 3 · 491 icons across 13 categories)
   © 2026 imagiQa Healthcare Services Pvt Ltd · All rights reserved.
   Brand: LiPi · A product of imagiQa Healthcare Services Pvt Ltd
   ═══════════════════════════════════════════════════════════════ */

/* ── Design rules ───────────────────────────────────────────────
   • Canvas: 24×24, viewBox "0 0 24 24"
   • Live area: 20×20, centred (2px margin all sides)
   • Stroke (Regular): 1.75px
     ─ Light: 1.25px · Bold: 2.25px · Thin: 1px
     ─ Fill: 0 stroke, solid fill
     ─ Duotone: 1.5px stroke + 25% opacity background shape (pending)
   • Caps & joins: round
   • Currency: ₹ (Indian Rupee) for finance icons
   • Colour: currentColor — let CSS / parent tint
   ─────────────────────────────────────────────────────────────── */

const LIPI_ICONS = {

  /* ═══ 01 · GENERAL · UI · ACTIONS ═══════════════════════════ */
  "search": {
    cat: "ui", keywords: ["find","look","magnifier","query"],
    paths: [
      `<circle cx="10.5" cy="10.5" r="6.25"/>`,
      `<path d="M19.75 19.75l-4.6-4.6"/>`
    ]
  },
  "filter": {
    cat: "ui", keywords: ["funnel","sort","refine"],
    paths: [`<path d="M3.75 5.5h16.5l-6.5 7.75v6l-3.5 1.75v-7.75z"/>`]
  },
  "settings": {
    cat: "ui", keywords: ["gear","cog","preferences","admin"],
    paths: [
      `<circle cx="12" cy="12" r="2.75"/>`,
      `<path d="M12 3.5l1.1 2.4 2.6-.4.7 2.55 2.4 1.1-1 2.4 1 2.4-2.4 1.1-.7 2.55-2.6-.4-1.1 2.4-1.1-2.4-2.6.4-.7-2.55-2.4-1.1 1-2.4-1-2.4 2.4-1.1.7-2.55 2.6.4z"/>`
    ]
  },
  "plus": {
    cat: "ui", keywords: ["add","new","create"],
    paths: [`<path d="M12 4.5v15M4.5 12h15"/>`]
  },
  "close": {
    cat: "ui", keywords: ["x","cancel","dismiss","exit"],
    paths: [`<path d="M5.5 5.5l13 13M18.5 5.5l-13 13"/>`]
  },
  "menu": {
    cat: "ui", keywords: ["hamburger","nav","drawer"],
    paths: [`<path d="M3.75 7h16.5M3.75 12h16.5M3.75 17h16.5"/>`]
  },
  "more-horizontal": {
    cat: "ui", keywords: ["kebab","dots","overflow"],
    paths: [
      `<circle cx="6" cy="12" r="1.4" fill="currentColor" stroke="none"/>`,
      `<circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/>`,
      `<circle cx="18" cy="12" r="1.4" fill="currentColor" stroke="none"/>`
    ]
  },
  "more-vertical": {
    cat: "ui", keywords: ["dots","kebab","options"],
    paths: [
      `<circle cx="12" cy="6" r="1.4" fill="currentColor" stroke="none"/>`,
      `<circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/>`,
      `<circle cx="12" cy="18" r="1.4" fill="currentColor" stroke="none"/>`
    ]
  },
  "user": {
    cat: "ui", keywords: ["profile","person","account"],
    paths: [
      `<circle cx="12" cy="8.25" r="3.75"/>`,
      `<path d="M4.5 19.5c1.5-3.6 4.4-5.25 7.5-5.25s6 1.65 7.5 5.25"/>`
    ]
  },
  "users": {
    cat: "ui", keywords: ["team","group","staff"],
    paths: [
      `<circle cx="9" cy="8.5" r="3.25"/>`,
      `<path d="M3 19c1.2-3 3.4-4.5 6-4.5s4.8 1.5 6 4.5"/>`,
      `<path d="M15.5 5.5a3.25 3.25 0 0 1 0 6"/>`,
      `<path d="M16 14.5c2.5.3 4.3 1.8 5 4.5"/>`
    ]
  },
  "bell": {
    cat: "ui", keywords: ["notification","alert","ring"],
    paths: [
      `<path d="M6.5 17.25v-5.5a5.5 5.5 0 0 1 11 0v5.5"/>`,
      `<path d="M4.75 17.25h14.5"/>`,
      `<path d="M10 20.25a2 2 0 0 0 4 0"/>`
    ]
  },
  "calendar": {
    cat: "ui", keywords: ["date","schedule","day"],
    paths: [
      `<rect x="3.75" y="5.25" width="16.5" height="15" rx="2"/>`,
      `<path d="M3.75 9.75h16.5M8.5 3.5v3.5M15.5 3.5v3.5"/>`
    ]
  },
  "clock": {
    cat: "ui", keywords: ["time","schedule","duration"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M12 7.5V12l3 2"/>`
    ]
  },
  "edit": {
    cat: "ui", keywords: ["pencil","write","modify"],
    paths: [
      `<path d="M4.5 19.5l-1 1.5 1.5-1 12-12-2.5-2.5z"/>`,
      `<path d="M14.5 5.5l2.25-2.25a1.2 1.2 0 0 1 1.7 0l1.05 1.05a1.2 1.2 0 0 1 0 1.7L17 8.25z"/>`
    ]
  },
  "trash": {
    cat: "ui", keywords: ["delete","remove","bin"],
    paths: [
      `<path d="M4.5 6.5h15"/>`,
      `<path d="M9 6.5V4.5h6v2"/>`,
      `<path d="M6 6.5l1 13.25h10L18 6.5"/>`,
      `<path d="M10 10v6M14 10v6"/>`
    ]
  },
  "save": {
    cat: "ui", keywords: ["disk","store","floppy"],
    paths: [
      `<path d="M4.5 4.5h12l4 4v11a1.5 1.5 0 0 1-1.5 1.5h-13a1.5 1.5 0 0 1-1.5-1.5v-13.5a1.5 1.5 0 0 1 1.5-1.5z"/>`,
      `<path d="M7 4.5v6h9v-6"/>`,
      `<path d="M7 21v-6h10v6"/>`
    ]
  },
  "download": {
    cat: "ui", keywords: ["save","import","arrow down"],
    paths: [
      `<path d="M12 3.75v12.5"/>`,
      `<path d="M7 11.25l5 5 5-5"/>`,
      `<path d="M4.5 19.5h15"/>`
    ]
  },
  "upload": {
    cat: "ui", keywords: ["import","arrow up","cloud"],
    paths: [
      `<path d="M12 20.25V7.75"/>`,
      `<path d="M7 12.75l5-5 5 5"/>`,
      `<path d="M4.5 4.5h15"/>`
    ]
  },
  "check": {
    cat: "ui", keywords: ["tick","done","confirm","success"],
    paths: [`<path d="M4.5 12.5l5 5 10-11"/>`]
  },
  "check-circle": {
    cat: "ui", keywords: ["verified","approved","success"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M8.25 12l2.75 2.75L15.75 9.5"/>`
    ]
  },
  "info": {
    cat: "ui", keywords: ["details","help","about"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M12 11v5.5"/>`,
      `<circle cx="12" cy="8" r="0.9" fill="currentColor" stroke="none"/>`
    ]
  },
  "warning": {
    cat: "ui", keywords: ["alert","caution","triangle"],
    paths: [
      `<path d="M12 3.5l9.5 16.5h-19z"/>`,
      `<path d="M12 9.5v5"/>`,
      `<circle cx="12" cy="17.25" r="1" fill="currentColor" stroke="none"/>`
    ]
  },
  "eye": {
    cat: "ui", keywords: ["view","show","visible"],
    paths: [
      `<path d="M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5-9.5-6.5-9.5-6.5z"/>`,
      `<circle cx="12" cy="12" r="2.75"/>`
    ]
  },
  "eye-off": {
    cat: "ui", keywords: ["hide","invisible","mask"],
    paths: [
      `<path d="M4 5l16 14"/>`,
      `<path d="M9 5.75c1-.2 2-.25 3-.25 6 0 9.5 6.5 9.5 6.5a17.4 17.4 0 0 1-3.4 4.05"/>`,
      `<path d="M6.5 7.5A14.6 14.6 0 0 0 2.5 12s3.5 6.5 9.5 6.5c1.65 0 3.1-.5 4.4-1.25"/>`,
      `<path d="M9.5 9.75a2.75 2.75 0 0 0 4 4"/>`
    ]
  },
  "lock": {
    cat: "ui", keywords: ["secure","private","password"],
    paths: [
      `<rect x="4.5" y="10.5" width="15" height="10" rx="1.75"/>`,
      `<path d="M7.75 10.5V7.25a4.25 4.25 0 0 1 8.5 0v3.25"/>`
    ]
  },
  "refresh": {
    cat: "ui", keywords: ["reload","sync","update"],
    paths: [
      `<path d="M20 5.5v5h-5"/>`,
      `<path d="M19.5 13a8 8 0 1 1-2.4-7.4l3-2.5"/>`
    ]
  },
  "link": {
    cat: "ui", keywords: ["chain","url","attach"],
    paths: [
      `<path d="M10.5 13.5a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5L12 6.5"/>`,
      `<path d="M13.5 10.5a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5L12 17.5"/>`
    ]
  },
  "copy": {
    cat: "ui", keywords: ["duplicate","clone","clipboard"],
    paths: [
      `<rect x="8.5" y="8.5" width="11" height="11" rx="1.5"/>`,
      `<path d="M5.5 15.5h-1a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>`
    ]
  },
  "star": {
    cat: "ui", keywords: ["favourite","rate","bookmark"],
    paths: [`<path d="M12 3.5l2.7 5.5 6 .9-4.35 4.25 1.05 6.05L12 17.3l-5.4 2.9 1.05-6.05L3.3 9.9l6-.9z"/>`]
  },
  "home": {
    cat: "ui", keywords: ["dashboard","main","house"],
    paths: [
      `<path d="M3.5 11.25L12 4l8.5 7.25v8a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1z"/>`,
      `<path d="M9.5 20.25v-5.5h5v5.5"/>`
    ]
  },
  "chevron-right": {
    cat: "ui", keywords: ["arrow","next","forward"],
    paths: [`<path d="M9 5.5l6.5 6.5-6.5 6.5"/>`]
  },
  "chevron-left": {
    cat: "ui", keywords: ["arrow","back","previous"],
    paths: [`<path d="M15 5.5l-6.5 6.5 6.5 6.5"/>`]
  },
  "chevron-down": {
    cat: "ui", keywords: ["arrow","expand","dropdown"],
    paths: [`<path d="M5.5 9l6.5 6.5 6.5-6.5"/>`]
  },
  "chevron-up": {
    cat: "ui", keywords: ["arrow","collapse","up"],
    paths: [`<path d="M5.5 15l6.5-6.5 6.5 6.5"/>`]
  },
  "external-link": {
    cat: "ui", keywords: ["open","new tab","launch"],
    paths: [
      `<path d="M14 4.5h5.5V10"/>`,
      `<path d="M19.5 4.5L11 13"/>`,
      `<path d="M19.5 14v4.75a1 1 0 0 1-1 1H5.25a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1H10"/>`
    ]
  },
  "print": {
    cat: "ui", keywords: ["printer","output","paper"],
    paths: [
      `<path d="M7 8.5V4h10v4.5"/>`,
      `<rect x="3.5" y="8.5" width="17" height="9" rx="1.5"/>`,
      `<rect x="7" y="14" width="10" height="6.5" rx="0.5"/>`,
      `<circle cx="17" cy="11.5" r="0.7" fill="currentColor" stroke="none"/>`
    ]
  },
  "share": {
    cat: "ui", keywords: ["send","forward","export"],
    paths: [
      `<circle cx="6" cy="12" r="2.5"/>`,
      `<circle cx="17.5" cy="6.5" r="2.5"/>`,
      `<circle cx="17.5" cy="17.5" r="2.5"/>`,
      `<path d="M8.25 11l7-3.25M8.25 13l7 3.25"/>`
    ]
  },

  /* ═══ 02 · FINANCE · BILLING · INSURANCE ═══════════════════ */
  "rupee": {
    cat: "finance", keywords: ["inr","money","currency","price"],
    paths: [`<path d="M7 6.5h10M7 10h10M9 6.5c2.5 0 4.5 1.5 4.5 3.5s-2 3.5-4.5 3.5H7l8 6.5"/>`]
  },
  "invoice": {
    cat: "finance", keywords: ["bill","receipt","statement"],
    paths: [
      `<path d="M5.5 3.5h13v17l-2.5-1.5-2.5 1.5-2.5-1.5-2.5 1.5-2.5-1.5-.5.3z"/>`,
      `<path d="M9 8.5h6M9 12h6M9 15.5h4"/>`
    ]
  },
  "credit-card": {
    cat: "finance", keywords: ["card","payment","pay"],
    paths: [
      `<rect x="3" y="6" width="18" height="12" rx="2"/>`,
      `<path d="M3 10h18M7 14.5h3"/>`
    ]
  },
  "claim": {
    cat: "finance", keywords: ["insurance","reimbursement","tpa"],
    paths: [
      `<path d="M5 4.5h11l3.5 3.5v12H5z"/>`,
      `<path d="M16 4.5v3.5h3.5"/>`,
      `<path d="M9 13.5l2 2 4-4"/>`
    ]
  },
  "wallet": {
    cat: "finance", keywords: ["purse","money","cash","balance"],
    paths: [
      `<path d="M3.5 7.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v10.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"/>`,
      `<path d="M3.5 9.5h17"/>`,
      `<circle cx="16.5" cy="14" r="1.25" fill="currentColor" stroke="none"/>`
    ]
  },
  "discount": {
    cat: "finance", keywords: ["offer","percent","tag"],
    paths: [
      `<path d="M12.5 3.5l8 8-9 9-8-8v-9z"/>`,
      `<circle cx="8.5" cy="8.5" r="1.25" fill="currentColor" stroke="none"/>`,
      `<path d="M14.5 11.5l-4 4"/>`
    ]
  },
  "bank": {
    cat: "finance", keywords: ["building","institution","branch"],
    paths: [
      `<path d="M3.5 9.5L12 4l8.5 5.5"/>`,
      `<path d="M3.5 9.5h17"/>`,
      `<path d="M5.5 10v8M9 10v8M15 10v8M18.5 10v8"/>`,
      `<path d="M3 20h18"/>`
    ]
  },
  "refund": {
    cat: "finance", keywords: ["return","reverse","money back"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M9 8.5H7v-2"/>`,
      `<path d="M7 8.5a5.5 5.5 0 0 1 10.5 2.5"/>`,
      `<path d="M11 14h2.5a1.75 1.75 0 0 0 0-3.5H11v6"/>`
    ]
  },
  "package-rate": {
    cat: "finance", keywords: ["bundle","pricing","scheme","ayushman"],
    paths: [
      `<path d="M12 3.5l8 4v9l-8 4-8-4v-9z"/>`,
      `<path d="M4 7.5l8 4 8-4M12 11.5v9"/>`,
      `<path d="M8 5.5l8 4"/>`
    ]
  },
  "estimate": {
    cat: "finance", keywords: ["quote","preauth","calculator","approx"],
    paths: [
      `<rect x="5" y="3.5" width="14" height="17" rx="1.5"/>`,
      `<rect x="7.5" y="6" width="9" height="3" rx="0.5"/>`,
      `<circle cx="8.5" cy="12" r="0.8" fill="currentColor" stroke="none"/>`,
      `<circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none"/>`,
      `<circle cx="15.5" cy="12" r="0.8" fill="currentColor" stroke="none"/>`,
      `<circle cx="8.5" cy="15.5" r="0.8" fill="currentColor" stroke="none"/>`,
      `<circle cx="12" cy="15.5" r="0.8" fill="currentColor" stroke="none"/>`,
      `<circle cx="15.5" cy="15.5" r="0.8" fill="currentColor" stroke="none"/>`,
      `<circle cx="8.5" cy="18" r="0.8" fill="currentColor" stroke="none"/>`
    ]
  },
  "deposit": {
    cat: "finance", keywords: ["advance","prepay","topup"],
    paths: [
      `<path d="M3.5 17.5h17"/>`,
      `<path d="M5 17.5v-7.5h14v7.5"/>`,
      `<path d="M12 4.5v7M9 8l3 3.5 3-3.5"/>`
    ]
  },
  "ledger": {
    cat: "finance", keywords: ["accounts","book","journal","double-entry"],
    paths: [
      `<path d="M5 4h14v17H7a2 2 0 0 1-2-2z"/>`,
      `<path d="M5 19a2 2 0 0 1 2-2h12"/>`,
      `<path d="M9 8.5h7M9 12h5"/>`
    ]
  },
  "payer": {
    cat: "finance", keywords: ["sponsor","insurer","tpa","corporate"],
    paths: [
      `<path d="M4 6.5l8-3 8 3v6c0 4.5-3.5 7.5-8 9-4.5-1.5-8-4.5-8-9z"/>`,
      `<path d="M9.5 12h5M12 9.5v5"/>`
    ]
  },
  "receipt": {
    cat: "finance", keywords: ["paid","stub","proof"],
    paths: [
      `<path d="M5.5 3.5h13v17l-2-1.25-2 1.25-2-1.25-2 1.25-2-1.25-3 1.25z"/>`,
      `<path d="M9 8.5h6"/>`,
      `<path d="M10 12.5l1.5 1.5 3-3.25"/>`
    ]
  },

  /* ═══ 03 · CLINICAL ═════════════════════════════════════════ */
  "stethoscope": {
    cat: "clinical", keywords: ["doctor","exam","auscultate"],
    paths: [
      `<path d="M5.5 4v6a4.5 4.5 0 0 0 9 0V4"/>`,
      `<path d="M5.5 4h-1.5M14.5 4h1.5"/>`,
      `<path d="M10 14.5v2.25a3.5 3.5 0 0 0 7 0v-1.25"/>`,
      `<circle cx="17" cy="13.25" r="2.25"/>`
    ]
  },
  "heart-pulse": {
    cat: "clinical", keywords: ["ecg","vitals","monitor","cardio"],
    paths: [
      `<rect x="3" y="5" width="18" height="13" rx="1.5"/>`,
      `<path d="M5.5 11.5h2l1.5-2.5 2 5 1.5-3.5 1 2h5"/>`,
      `<rect x="8.5" y="18" width="7" height="1.5" rx="0.5"/>`,
      `<path d="M9.5 19.5v1.5h5v-1.5"/>`
    ]
  },
  "syringe": {
    cat: "clinical", keywords: ["injection","vaccine","dose","barrel"],
    paths: [
      `<rect x="6.5" y="9" width="11" height="6" rx="0.5" transform="rotate(-45 12 12)"/>`,
      `<path d="M16.5 4.5l3 3"/>`,
      `<path d="M14.5 6.5l3 3"/>`,
      `<path d="M3.5 20.5l3-3"/>`,
      `<path d="M9 12l4 4"/>`,
      `<path d="M11 10l1 1M9 12l1 1M13 8l1 1"/>`
    ]
  },
  "prescription": {
    cat: "clinical", keywords: ["rx","medication","script"],
    paths: [
      `<path d="M6.5 3.5h5a3 3 0 0 1 0 6h-5z"/>`,
      `<path d="M6.5 9.5v11M6.5 9.5l5 5M14 13l6.5 6.5M20.5 13L14 19.5"/>`
    ]
  },
  "allergy": {
    cat: "clinical", keywords: ["warning","reaction","peanut","nut"],
    paths: [
      `<path d="M12 3.5l9.5 16.5h-19z"/>`,
      `<path d="M12 9.5v5"/>`,
      `<circle cx="12" cy="17.25" r="1" fill="currentColor" stroke="none"/>`
    ]
  },
  "patient": {
    cat: "clinical", keywords: ["mrn","person","visitor"],
    paths: [
      `<circle cx="12" cy="7.5" r="3.25"/>`,
      `<path d="M5 20.5c.7-3.7 3.5-5.75 7-5.75s6.3 2.05 7 5.75"/>`,
      `<path d="M15 17l1.25 1.25M15 19.25l1.25-1.25"/>`
    ]
  },
  "doctor": {
    cat: "clinical", keywords: ["physician","md","clinician"],
    paths: [
      `<circle cx="12" cy="7" r="3.25"/>`,
      `<path d="M6 20.5v-3.25a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3.25"/>`,
      `<path d="M10.5 13.5L12 17l1.5-3.5"/>`,
      `<circle cx="12" cy="17.5" r="1.5"/>`
    ]
  },
  "nurse": {
    cat: "clinical", keywords: ["caregiver","staff","sister","cap"],
    paths: [
      `<path d="M4.5 14.5h15v3.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2z"/>`,
      `<path d="M5.5 14.5l1.5-7a2 2 0 0 1 2-1.5h6a2 2 0 0 1 2 1.5l1.5 7"/>`,
      `<path d="M12 8.5v3.5M10.25 10.25h3.5"/>`
    ]
  },
  "thermometer": {
    cat: "clinical", keywords: ["temperature","fever","temp"],
    paths: [
      `<path d="M14 4.5a2.5 2.5 0 0 0-5 0v9.5a4 4 0 1 0 5 0z"/>`,
      `<path d="M11.5 7v8.5"/>`,
      `<circle cx="11.5" cy="17" r="1.5" fill="currentColor" stroke="none"/>`
    ]
  },
  "blood-drop": {
    cat: "clinical", keywords: ["blood","drop","donate","sample"],
    paths: [
      `<path d="M12 3.5c-3.5 4.5-6 7.5-6 11a6 6 0 0 0 12 0c0-3.5-2.5-6.5-6-11z"/>`,
      `<path d="M9 14a3 3 0 0 0 3 3"/>`
    ]
  },
  "lungs": {
    cat: "clinical", keywords: ["respiratory","pulmo","breath"],
    paths: [
      `<path d="M12 4v9"/>`,
      `<path d="M12 9c-1-2-3-2.5-4.5-1.5C5.5 9 4 12 4 14.5c0 2.5 1 4.5 3 5 2 .5 3.5-1 3.5-3.5"/>`,
      `<path d="M12 9c1-2 3-2.5 4.5-1.5 2 1.5 3.5 4.5 3.5 7 0 2.5-1 4.5-3 5-2 .5-3.5-1-3.5-3.5"/>`,
      `<path d="M10 4h4"/>`
    ]
  },
  "brain": {
    cat: "clinical", keywords: ["neuro","mind","cerebrum"],
    paths: [
      `<path d="M9 4.5a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0-2 4 2.5 2.5 0 0 0 0 4 2.5 2.5 0 0 0 2 4A2.5 2.5 0 0 0 9 21.5a2.5 2.5 0 0 0 3-2.5"/>`,
      `<path d="M15 4.5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 2 4 2.5 2.5 0 0 1 0 4 2.5 2.5 0 0 1-2 4A2.5 2.5 0 0 1 15 21.5a2.5 2.5 0 0 1-3-2.5"/>`,
      `<path d="M12 4.5v15"/>`
    ]
  },
  "kidney": {
    cat: "clinical", keywords: ["renal","nephro","urology"],
    paths: [
      `<path d="M12 4c-4 0-7 3-7 8s2.5 8 7 8c2.5 0 5-1 5-4 0-2-1.5-3-3-3-1.5 0-2 .5-2 1.5"/>`,
      `<circle cx="9" cy="11" r="0.7" fill="currentColor" stroke="none"/>`
    ]
  },
  "liver": {
    cat: "clinical", keywords: ["hepatic","gastro","organ"],
    paths: [
      `<path d="M3.5 8c5-2 8-3 12-3 3 0 5 1.5 5 4 0 4-3 9-9 9-4.5 0-7.5-3-8-7"/>`,
      `<path d="M11 8.5l-3 3M14 9l-2 3"/>`
    ]
  },
  "dna": {
    cat: "clinical", keywords: ["genetics","helix","molecular"],
    paths: [
      `<path d="M7 3.5c0 4.5 10 4.5 10 10s-10 5.5-10 7"/>`,
      `<path d="M17 3.5c0 4.5-10 4.5-10 10s10 5.5 10 7"/>`,
      `<path d="M9 6h6M8.5 9h7M8.5 15h7M9 18h6"/>`
    ]
  },
  "pill": {
    cat: "clinical", keywords: ["tablet","drug","medicine"],
    paths: [
      `<rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-30 12 12)"/>`,
      `<path d="M7.5 7.5l9 9" stroke-width="1.25"/>`
    ]
  },
  "iv-bag": {
    cat: "clinical", keywords: ["drip","saline","infusion","fluid"],
    paths: [
      `<path d="M9 3.5h6v3l-2 2v8a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-8l-2-2z"/>`,
      `<path d="M11 3.5v-1h2v1"/>`,
      `<path d="M9 10h6"/>`,
      `<path d="M12 18.5v2"/>`
    ]
  },
  "bandage": {
    cat: "clinical", keywords: ["plaster","wound","first aid"],
    paths: [
      `<rect x="2.5" y="9" width="19" height="6" rx="3" transform="rotate(-30 12 12)"/>`,
      `<rect x="8.5" y="8" width="7" height="8" rx="1" transform="rotate(-30 12 12)"/>`,
      `<circle cx="10.5" cy="11" r="0.5" fill="currentColor" stroke="none"/>`,
      `<circle cx="13.5" cy="13" r="0.5" fill="currentColor" stroke="none"/>`,
      `<circle cx="11" cy="14" r="0.5" fill="currentColor" stroke="none"/>`,
      `<circle cx="13" cy="10" r="0.5" fill="currentColor" stroke="none"/>`
    ]
  },
  "mask": {
    cat: "clinical", keywords: ["surgical","ppe","face","n95"],
    paths: [
      `<path d="M4 9.5c0-1 .5-1.5 1.5-1.5h13c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-13c-1 0-1.5-.5-1.5-1.5z"/>`,
      `<path d="M4 11h-1.5M20 11h1.5M4 13h-1.5M20 13h1.5"/>`,
      `<path d="M4 9.5l3-2M4 14.5l3 2M20 9.5l-3-2M20 14.5l-3 2"/>`
    ]
  },
  "blood-pressure": {
    cat: "clinical", keywords: ["bp","cuff","sphygmo","vitals"],
    paths: [
      `<rect x="3.5" y="11" width="10" height="7" rx="1"/>`,
      `<path d="M5.5 11V8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3"/>`,
      `<path d="M13.5 14h2.5"/>`,
      `<circle cx="18.5" cy="14" r="2.5"/>`,
      `<path d="M18.5 12.5v1.5l1 .8"/>`
    ]
  },
  "wheelchair": {
    cat: "clinical", keywords: ["mobility","disability","accessibility"],
    paths: [
      `<circle cx="12" cy="7.5" r="1.75"/>`,
      `<path d="M10.5 10.5l1 4h5"/>`,
      `<path d="M11.5 14.5l1 3.5"/>`,
      `<circle cx="11" cy="18" r="3.25"/>`,
      `<path d="M16 14.5l-1 3"/>`
    ]
  },

  /* ═══ 04 · DEPARTMENTS ══════════════════════════════════════ */
  "radiology": {
    cat: "department", keywords: ["x-ray","imaging","film","hand","phalanges"],
    paths: [
      `<rect x="3.5" y="3.5" width="17" height="17" rx="1.5"/>`,
      `<path d="M9 18v-4.5l-1-1V9.5a1 1 0 0 1 2 0v3M11 12.5v-5a1 1 0 0 1 2 0v5M13 12.5v-4a1 1 0 0 1 2 0v4.5M15 13v-3a1 1 0 0 1 1.5 0v4.5c0 1.5-1 3-2.5 3.5"/>`
    ]
  },
  "pharmacy": {
    cat: "department", keywords: ["medicine","drugs","capsule","pill"],
    paths: [
      `<rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-30 12 12)"/>`,
      `<path d="M7.5 7.5l9 9" stroke-width="1.25"/>`
    ]
  },
  "pathology": {
    cat: "department", keywords: ["microscope","lab","slide","biopsy","histology"],
    paths: [
      `<path d="M10 3.5h4l-.5 4h-3z"/>`,
      `<path d="M11 7.5l-1 5h4l-1-5"/>`,
      `<circle cx="12" cy="14" r="1.5"/>`,
      `<path d="M12 15.5v2"/>`,
      `<path d="M6 20.5h12"/>`,
      `<path d="M8 20.5c0-1.5 1.5-3 4-3s4 1.5 4 3"/>`,
      `<path d="M14 5.5h3a2.5 2.5 0 0 1 0 5h-2.5"/>`
    ]
  },
  "operating-theatre": {
    cat: "department", keywords: ["ot","surgery","operation","theater"],
    paths: [
      `<path d="M4 5h16M4 5v3M20 5v3M4 8h16"/>`,
      `<path d="M12 8v6"/>`,
      `<path d="M7 14h10v6h-10z"/>`,
      `<circle cx="12" cy="17" r="1.25" fill="currentColor" stroke="none"/>`
    ]
  },
  "cssd": {
    cat: "department", keywords: ["sterilisation","autoclave","central supply","sterile","steam"],
    paths: [
      `<rect x="3" y="6" width="18" height="12" rx="1.5"/>`,
      `<circle cx="9" cy="12" r="3.5"/>`,
      `<path d="M9 8.5v7M5.5 12h7"/>`,
      `<path d="M15 9h4M15 12h4M15 15h4"/>`,
      `<circle cx="20" cy="6" r="0.6" fill="currentColor" stroke="none"/>`,
      `<path d="M3 4.5c.5.8 0 1.5 0 1.5M5 4.5c.5.8 0 1.5 0 1.5"/>`
    ]
  },
  "nuclear-medicine": {
    cat: "department", keywords: ["isotope","radioactive","pet","spect","tracer"],
    paths: [
      `<circle cx="12" cy="12" r="2"/>`,
      `<ellipse cx="12" cy="12" rx="9" ry="3.5"/>`,
      `<ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)"/>`,
      `<ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)"/>`
    ]
  },
  "biomedical": {
    cat: "department", keywords: ["bme","heart","wrench","device service","engineering"],
    paths: [
      `<path d="M12 19.5C8 16.5 4 13.5 4 9.75A4.25 4.25 0 0 1 8.25 5.5c1.5 0 2.85.7 3.75 1.85.9-1.15 2.25-1.85 3.75-1.85A4.25 4.25 0 0 1 20 9.75c0 1.4-.55 2.6-1.4 3.75"/>`,
      `<path d="M14.5 14l5 5"/>`,
      `<circle cx="20.5" cy="20" r="1.5"/>`,
      `<path d="M14 13.5l-1 1"/>`
    ]
  },
  "medical-physics": {
    cat: "department", keywords: ["dosimetry","calipers","atom","qa","calibration"],
    paths: [
      `<circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>`,
      `<ellipse cx="12" cy="12" rx="7" ry="3"/>`,
      `<ellipse cx="12" cy="12" rx="7" ry="3" transform="rotate(60 12 12)"/>`,
      `<path d="M3 5.5l3 3M21 5.5l-3 3M3 5.5l1-1M3 5.5l-.5 1.5M21 5.5l-1-1M21 5.5l.5 1.5"/>`
    ]
  },
  "emergency": {
    cat: "department", keywords: ["er","casualty","trauma","acute"],
    paths: [
      `<rect x="3.5" y="3.5" width="17" height="17" rx="2"/>`,
      `<path d="M12 7v10M7 12h10"/>`
    ]
  },
  "icu": {
    cat: "department", keywords: ["intensive care","critical","monitor"],
    paths: [
      `<rect x="3" y="4.5" width="18" height="11" rx="1.5"/>`,
      `<path d="M5.5 10h2l1.5-2.5 2 4.5 1.5-3 1 1h5"/>`,
      `<path d="M3 18.5h18"/>`,
      `<path d="M7 18.5v2M17 18.5v2"/>`
    ]
  },
  "opd": {
    cat: "department", keywords: ["outpatient","clinic","consultation","queue","token"],
    paths: [
      `<rect x="5" y="4" width="14" height="17" rx="1.5"/>`,
      `<rect x="9" y="2.75" width="6" height="3" rx="0.75"/>`,
      `<path d="M12 9.5v3.5M10.25 11.25h3.5"/>`,
      `<path d="M8 16.5h8M8 18.5h5"/>`
    ]
  },
  "ipd": {
    cat: "department", keywords: ["inpatient","admission","ward","bed"],
    paths: [
      `<path d="M3.5 18.5h17"/>`,
      `<path d="M3.5 18.5v-6h17v6"/>`,
      `<path d="M3.5 12.5V8.5h7a2 2 0 0 1 2 2v2"/>`,
      `<circle cx="7" cy="9.5" r="1.25"/>`
    ]
  },
  "ambulance": {
    cat: "department", keywords: ["transport","emergency","vehicle"],
    paths: [
      `<path d="M2.5 16.5v-7h11v7"/>`,
      `<path d="M13.5 11.5h4l3 3v2h-7"/>`,
      `<circle cx="6.5" cy="17" r="1.75"/>`,
      `<circle cx="16.5" cy="17" r="1.75"/>`,
      `<path d="M2.5 16.5h2M8.5 16.5h6"/>`,
      `<path d="M7 11.5v3M5.5 13h3"/>`
    ]
  },
  "lab": {
    cat: "department", keywords: ["flask","chemistry","test","sample"],
    paths: [
      `<path d="M9.5 3.5h5v5l4.5 9a2 2 0 0 1-1.8 2.9H5.8A2 2 0 0 1 4 17.5l5.5-9z"/>`,
      `<path d="M8.5 3.5h7"/>`,
      `<path d="M7 13h10"/>`,
      `<circle cx="10.5" cy="16" r="0.6" fill="currentColor" stroke="none"/>`,
      `<circle cx="13.5" cy="17" r="0.6" fill="currentColor" stroke="none"/>`
    ]
  },
  "blood-bank": {
    cat: "department", keywords: ["donation","blood storage","transfusion"],
    paths: [
      `<path d="M12 3.5c-3.5 4.5-6 7.5-6 11a6 6 0 0 0 12 0c0-3.5-2.5-6.5-6-11z"/>`,
      `<path d="M9.5 13.5h5M12 11v5"/>`
    ]
  },
  "dental": {
    cat: "department", keywords: ["dentistry","tooth","ortho","oral"],
    paths: [
      `<path d="M7 3.5c2 0 3 1 5 1s3-1 5-1c2.5 0 3.5 2 3 5l-2 9c-.3 1.4-1.5 2-2.5 1.5-.8-.4-1-1.5-1-3l-.5-3.5c-.2-1-.7-1.5-2-1.5s-1.8.5-2 1.5l-.5 3.5c0 1.5-.2 2.6-1 3-1 .5-2.2-.1-2.5-1.5L4 8.5c-.5-3 .5-5 3-5z"/>`
    ]
  },
  "ent": {
    cat: "department", keywords: ["ear nose throat","otolaryngology"],
    paths: [
      `<path d="M9 3.75c-3 0-5 2.25-5 5.5 0 2.5 1.5 4.5 1.5 7 0 2 1 3.75 3 3.75 1.5 0 2.5-1.5 2.5-3.5 0-1.5.5-2 1.5-2 1 0 2-.5 2.5-2.5"/>`,
      `<circle cx="9" cy="10" r="1"/>`,
      `<path d="M15 7l4-2M15 11l4 1M15 15l3 2.5"/>`
    ]
  },
  "ophthalmology": {
    cat: "department", keywords: ["eye","vision","optical"],
    paths: [
      `<path d="M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5-9.5-6.5-9.5-6.5z"/>`,
      `<circle cx="12" cy="12" r="3.25"/>`,
      `<circle cx="12" cy="12" r="1.25" fill="currentColor" stroke="none"/>`
    ]
  },
  "dialysis": {
    cat: "department", keywords: ["nephro","kidney","hemodialysis","dialyzer","filter"],
    paths: [
      `<rect x="9" y="3.5" width="6" height="14" rx="1.25"/>`,
      `<path d="M9 7.5h6M9 13.5h6"/>`,
      `<path d="M9 9.5h6M9 11.5h6"/>`,
      `<path d="M9 5.5c-2 0-3.5 1.5-3.5 3.5s-1.5 3-3 3"/>`,
      `<path d="M15 15.5c2 0 3.5-1.5 3.5-3.5s1.5-3 3-3"/>`,
      `<path d="M12 17.5v3"/>`,
      `<path d="M9.5 20.5h5"/>`
    ]
  },
  "physio": {
    cat: "department", keywords: ["rehabilitation","therapy","exercise","dumbbell","strength"],
    paths: [
      `<path d="M3.5 12h17"/>`,
      `<rect x="2.5" y="8.5" width="2.5" height="7" rx="0.6"/>`,
      `<rect x="19" y="8.5" width="2.5" height="7" rx="0.6"/>`,
      `<rect x="5.5" y="10" width="2" height="4" rx="0.4"/>`,
      `<rect x="16.5" y="10" width="2" height="4" rx="0.4"/>`,
      `<path d="M11 6.5h2M11 17.5h2"/>`
    ]
  },
  "maternity": {
    cat: "department", keywords: ["obg","pregnancy","obstetrics","mother"],
    paths: [
      `<circle cx="11.5" cy="6" r="2.25"/>`,
      `<path d="M11.5 8.5c-2.5 0-4 2-4 4.5v3.5l1.5 1v3.5h5v-3.5l1.5-1v-3.5"/>`,
      `<circle cx="14" cy="13.5" r="2"/>`
    ]
  },
  "nicu": {
    cat: "department", keywords: ["neonatal","newborn","infant","baby"],
    paths: [
      `<rect x="3" y="9" width="18" height="9" rx="1.5"/>`,
      `<path d="M3 9c2-3 5-4.5 9-4.5s7 1.5 9 4.5"/>`,
      `<circle cx="12" cy="13.5" r="2"/>`,
      `<path d="M9 18v2M15 18v2"/>`
    ]
  },

  /* ═══ 05 · ONCOLOGY-SPECIFIC ════════════════════════════════ */
  "linac": {
    cat: "oncology", keywords: ["linac","c-arm","radiotherapy","gantry"],
    paths: [
      `<path d="M5 4v9a3 3 0 0 0 3 3h1"/>`,
      `<rect x="4" y="3" width="3" height="2" rx="0.4"/>`,
      `<rect x="7.25" y="15.25" width="3.5" height="2.5" rx="0.4"/>`,
      `<path d="M8.5 17.75l-.5 2.75M9.5 17.75l.5 2.75"/>`,
      `<rect x="12" y="13" width="8.5" height="3" rx="0.5"/>`,
      `<path d="M14 16v4M18.5 16v4"/>`
    ]
  },
  "chemo": {
    cat: "oncology", keywords: ["infusion","iv","chemotherapy","drip","bag"],
    paths: [
      `<rect x="8" y="3.5" width="8" height="10" rx="1.5"/>`,
      `<path d="M10 3.5V2.5h4v1"/>`,
      `<path d="M12 13.5v3"/>`,
      `<circle cx="12" cy="18.5" r="2"/>`,
      `<path d="M11 8h2M10.5 10.5h3"/>`
    ]
  },
  "tumor-board": {
    cat: "oncology", keywords: ["mdt","case review","multidisciplinary","conference"],
    paths: [
      `<rect x="3" y="5" width="18" height="11" rx="1.5"/>`,
      `<circle cx="8" cy="10.5" r="1.5"/>`,
      `<circle cx="12" cy="10.5" r="1.5"/>`,
      `<circle cx="16" cy="10.5" r="1.5"/>`,
      `<path d="M8 19v-3M16 19v-3M5 19h14"/>`
    ]
  },
  "biopsy": {
    cat: "oncology", keywords: ["sample","tissue","needle core"],
    paths: [
      `<path d="M3 21l3-3"/>`,
      `<path d="M5 19l8-8"/>`,
      `<path d="M11.5 9.5l3 3"/>`,
      `<path d="M14.5 6.5l3 3-1.5 1.5-3-3z"/>`,
      `<path d="M17 4l3 3"/>`,
      `<circle cx="8.5" cy="15.5" r="1" fill="currentColor" stroke="none"/>`
    ]
  },
  "mammography": {
    cat: "oncology", keywords: ["breast","screening","mammo"],
    paths: [
      `<path d="M5 7h14"/>`,
      `<path d="M7 7v3a5 5 0 0 0 10 0V7"/>`,
      `<circle cx="12" cy="13" r="0.9" fill="currentColor" stroke="none"/>`,
      `<path d="M9 17l3-2 3 2"/>`,
      `<path d="M5 7l-1.5-1.5M19 7l1.5-1.5"/>`
    ]
  },
  "palliative": {
    cat: "oncology", keywords: ["hospice","end of life","comfort","care"],
    paths: [
      `<path d="M12 21s-7.5-4.5-7.5-10.5A4.5 4.5 0 0 1 9 6c1.5 0 2.5.75 3 1.75.5-1 1.5-1.75 3-1.75a4.5 4.5 0 0 1 4.5 4.5C19.5 16.5 12 21 12 21z"/>`,
      `<path d="M9 11.5h6M12 8.5v6"/>`
    ]
  },
  "radiation-therapy": {
    cat: "oncology", keywords: ["beam","fraction","external","ebrt"],
    paths: [
      `<circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>`,
      `<path d="M12 5v3M12 16v3M5 12h3M16 12h3M7 7l2 2M15 15l2 2M7 17l2-2M15 9l2-2"/>`,
      `<circle cx="12" cy="12" r="5.5" stroke-dasharray="2 2"/>`
    ]
  },
  "brachy": {
    cat: "oncology", keywords: ["brachytherapy","seed","implant","internal"],
    paths: [
      `<rect x="10.5" y="3" width="3" height="12" rx="1.5"/>`,
      `<path d="M12 15v3.5"/>`,
      `<path d="M9 19h6"/>`,
      `<circle cx="12" cy="6.5" r="0.6" fill="currentColor" stroke="none"/>`,
      `<circle cx="12" cy="9" r="0.6" fill="currentColor" stroke="none"/>`,
      `<circle cx="12" cy="11.5" r="0.6" fill="currentColor" stroke="none"/>`
    ]
  },
  "staging": {
    cat: "oncology", keywords: ["tnm","stage","grade","cancer"],
    paths: [
      `<path d="M4 20h16"/>`,
      `<rect x="5" y="14" width="3" height="6"/>`,
      `<rect x="10.5" y="10" width="3" height="10"/>`,
      `<rect x="16" y="6" width="3" height="14"/>`,
      `<path d="M5.5 12.5L11 9l5.5-3.5"/>`
    ]
  },
  "surveillance": {
    cat: "oncology", keywords: ["follow up","monitoring","check","recurrence"],
    paths: [
      `<circle cx="11" cy="11" r="6.25"/>`,
      `<path d="M19 19l-3.5-3.5"/>`,
      `<path d="M8.5 11l2 2 3.5-3.5"/>`
    ]
  },
  "screening": {
    cat: "oncology", keywords: ["check up","prevention","early detection"],
    paths: [
      `<rect x="3.5" y="4.5" width="17" height="13" rx="1.5"/>`,
      `<path d="M3.5 8h17"/>`,
      `<path d="M8 12l2 2 4-4"/>`,
      `<path d="M9 20h6M12 17.5v2.5"/>`
    ]
  },
  "port-cath": {
    cat: "oncology", keywords: ["port","catheter","central line","access"],
    paths: [
      `<circle cx="9" cy="11" r="3.5"/>`,
      `<circle cx="9" cy="11" r="1" fill="currentColor" stroke="none"/>`,
      `<path d="M11.5 13l5 5"/>`,
      `<path d="M16 16l3-3 2 2-3 3z"/>`,
      `<path d="M19 13l-1-1"/>`
    ]
  },

  /* ═══ 06 · RECORDS · DOCUMENTS ══════════════════════════════ */
  "file": {
    cat: "records", keywords: ["document","page","record"],
    paths: [
      `<path d="M5.5 3.5h9l5 5v12H5.5z"/>`,
      `<path d="M14.5 3.5v5h5"/>`
    ]
  },
  "folder": {
    cat: "records", keywords: ["directory","group","collection"],
    paths: [`<path d="M3.5 6.5a1.5 1.5 0 0 1 1.5-1.5h4l2 2h8a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-14a1.5 1.5 0 0 1-1.5-1.5z"/>`]
  },
  "report": {
    cat: "records", keywords: ["chart","analytics","summary"],
    paths: [
      `<path d="M5.5 3.5h9l5 5v12H5.5z"/>`,
      `<path d="M14.5 3.5v5h5"/>`,
      `<path d="M9 17v-3M12 17v-5M15 17v-2"/>`
    ]
  },
  "lab-report": {
    cat: "records", keywords: ["pathology result","blood test","investigation"],
    paths: [
      `<path d="M5.5 3.5h9l5 5v12H5.5z"/>`,
      `<path d="M14.5 3.5v5h5"/>`,
      `<path d="M8.5 13h7M8.5 16h5"/>`,
      `<path d="M8.5 10.5l1 1 2-2"/>`
    ]
  },
  "image-study": {
    cat: "records", keywords: ["dicom","scan","ct","mri","study"],
    paths: [
      `<rect x="3.5" y="4.5" width="17" height="13" rx="1.5"/>`,
      `<path d="M3.5 14l4-3.5 3.5 3 3.5-4 5.5 4.5"/>`,
      `<circle cx="8" cy="8.5" r="1.25"/>`,
      `<path d="M8 20.5h8"/>`
    ]
  },
  "consent": {
    cat: "records", keywords: ["sign","agreement","permission"],
    paths: [
      `<path d="M5.5 3.5h13v17h-13z"/>`,
      `<path d="M8.5 7h7M8.5 10h5"/>`,
      `<path d="M8.5 16c1.5-2 3-2 4 0s2.5 2 3.5 0"/>`,
      `<path d="M8 18.5h8"/>`
    ]
  },
  "discharge-summary": {
    cat: "records", keywords: ["discharge","exit","ds","release"],
    paths: [
      `<path d="M5.5 3.5h9l5 5v12H5.5z"/>`,
      `<path d="M14.5 3.5v5h5"/>`,
      `<path d="M8 13h6"/>`,
      `<path d="M14 13l-2-2M14 13l-2 2"/>`,
      `<path d="M8 17h8"/>`
    ]
  },
  "mrn": {
    cat: "records", keywords: ["medical record","uhid","patient id","barcode"],
    paths: [
      `<rect x="3.5" y="6" width="17" height="12" rx="1"/>`,
      `<path d="M6 9v6M8 9v6M10.5 9v6M13 9v6M15.5 9v6M18 9v6"/>`
    ]
  },
  "consent-signed": {
    cat: "records", keywords: ["e-sign","signed","verified document"],
    paths: [
      `<path d="M5.5 3.5h13v17h-13z"/>`,
      `<path d="M8.5 7h7M8.5 10h5"/>`,
      `<path d="M7.5 16c2-3 4-3 6 0"/>`,
      `<circle cx="16.5" cy="17.5" r="3"/>`,
      `<path d="M15 17.5l1 1 2-2"/>`
    ]
  },
  "appointment": {
    cat: "records", keywords: ["booking","slot","schedule"],
    paths: [
      `<rect x="3.75" y="5.25" width="16.5" height="15" rx="2"/>`,
      `<path d="M3.75 9.75h16.5M8.5 3.5v3.5M15.5 3.5v3.5"/>`,
      `<path d="M8 14l2 2 4-4"/>`
    ]
  },

  /* ═══════════════════════════════════════════════════════════
     PHASE 2 · v0.4 — +100 icons (HIS coverage expansion)
     ═══════════════════════════════════════════════════════════ */

  /* ── 01 · UI (additional) ─────────────────────────────────── */
  "help": {
    cat: "ui", keywords: ["question","support","faq"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.8.4-1 .9-1 1.7v.5"/>`,
      `<circle cx="12" cy="16.25" r="0.9" fill="currentColor" stroke="none"/>`
    ]
  },
  "sort": {
    cat: "ui", keywords: ["order","arrange","asc","desc"],
    paths: [
      `<path d="M7 4.5v15M3.75 8l3.25-3.5 3.25 3.5"/>`,
      `<path d="M17 19.5v-15M13.75 16l3.25 3.5 3.25-3.5"/>`
    ]
  },
  "columns": {
    cat: "ui", keywords: ["layout","split","table"],
    paths: [
      `<rect x="3.5" y="4.5" width="17" height="15" rx="1.5"/>`,
      `<path d="M9.5 4.5v15M14.5 4.5v15"/>`
    ]
  },
  "expand": {
    cat: "ui", keywords: ["fullscreen","maximize","enlarge"],
    paths: [
      `<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>`
    ]
  },
  "collapse": {
    cat: "ui", keywords: ["minimize","shrink","contract"],
    paths: [
      `<path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/>`
    ]
  },
  "drag": {
    cat: "ui", keywords: ["reorder","move","handle","grip"],
    paths: [
      `<circle cx="9" cy="6" r="1.3" fill="currentColor" stroke="none"/>`,
      `<circle cx="15" cy="6" r="1.3" fill="currentColor" stroke="none"/>`,
      `<circle cx="9" cy="12" r="1.3" fill="currentColor" stroke="none"/>`,
      `<circle cx="15" cy="12" r="1.3" fill="currentColor" stroke="none"/>`,
      `<circle cx="9" cy="18" r="1.3" fill="currentColor" stroke="none"/>`,
      `<circle cx="15" cy="18" r="1.3" fill="currentColor" stroke="none"/>`
    ]
  },
  "zoom-in": {
    cat: "ui", keywords: ["magnify","plus","closer"],
    paths: [
      `<circle cx="10.5" cy="10.5" r="6.25"/>`,
      `<path d="M19.75 19.75l-4.6-4.6"/>`,
      `<path d="M10.5 7.75v5.5M7.75 10.5h5.5"/>`
    ]
  },
  "zoom-out": {
    cat: "ui", keywords: ["magnify","minus","farther"],
    paths: [
      `<circle cx="10.5" cy="10.5" r="6.25"/>`,
      `<path d="M19.75 19.75l-4.6-4.6"/>`,
      `<path d="M7.75 10.5h5.5"/>`
    ]
  },
  "clipboard": {
    cat: "ui", keywords: ["paste","copy","board"],
    paths: [
      `<rect x="5" y="4.5" width="14" height="16" rx="1.5"/>`,
      `<rect x="9" y="3" width="6" height="3.5" rx="0.75"/>`
    ]
  },
  "attachment": {
    cat: "ui", keywords: ["paperclip","attach","file"],
    paths: [
      `<path d="M19 11.5l-7.5 7.5a4.5 4.5 0 0 1-6.5-6.5l8-8a3 3 0 0 1 4.5 4.5l-8 8a1.5 1.5 0 0 1-2.25-2.25l7-7"/>`
    ]
  },
  "arrow-up": {
    cat: "ui", keywords: ["north","up"],
    paths: [`<path d="M12 19.5v-15M5.5 11l6.5-6.5 6.5 6.5"/>`]
  },
  "arrow-down": {
    cat: "ui", keywords: ["south","down"],
    paths: [`<path d="M12 4.5v15M5.5 13l6.5 6.5 6.5-6.5"/>`]
  },
  "arrow-left": {
    cat: "ui", keywords: ["west","back"],
    paths: [`<path d="M19.5 12h-15M11 5.5l-6.5 6.5 6.5 6.5"/>`]
  },
  "arrow-right": {
    cat: "ui", keywords: ["east","forward"],
    paths: [`<path d="M4.5 12h15M13 5.5l6.5 6.5-6.5 6.5"/>`]
  },
  "tag": {
    cat: "ui", keywords: ["label","category","chip"],
    paths: [
      `<path d="M3.5 11V4.5h6.5l10 10-6.5 6.5z"/>`,
      `<circle cx="7.5" cy="8.5" r="1.25" fill="currentColor" stroke="none"/>`
    ]
  },
  "flag": {
    cat: "ui", keywords: ["mark","priority","important"],
    paths: [
      `<path d="M5 20.5V4.5h12l-2.5 4 2.5 4H5"/>`
    ]
  },
  "pin": {
    cat: "ui", keywords: ["sticky","fix","bookmark"],
    paths: [
      `<path d="M14 3.5l6.5 6.5-3 1-3.5 3.5 1 4-2 1L8 14.5l-4.5 4.5"/>`,
      `<path d="M9.5 16l-2 2"/>`
    ]
  },
  "undo": {
    cat: "ui", keywords: ["back","revert","history"],
    paths: [
      `<path d="M4 9.5h8a5 5 0 0 1 0 10H8"/>`,
      `<path d="M7.5 5.5L4 9l3.5 3.5"/>`
    ]
  },
  "redo": {
    cat: "ui", keywords: ["forward","replay"],
    paths: [
      `<path d="M20 9.5h-8a5 5 0 0 0 0 10h4"/>`,
      `<path d="M16.5 5.5L20 9l-3.5 3.5"/>`
    ]
  },
  "bookmark": {
    cat: "ui", keywords: ["save","favorite","ribbon"],
    paths: [`<path d="M6.5 3.5h11v17l-5.5-3.5-5.5 3.5z"/>`]
  },
  "toggle": {
    cat: "ui", keywords: ["switch","on","off"],
    paths: [
      `<rect x="2.5" y="7" width="19" height="10" rx="5"/>`,
      `<circle cx="16" cy="12" r="2.5" fill="currentColor" stroke="none"/>`
    ]
  },

  /* ── 02 · Finance (additional) ────────────────────────────── */
  "coins": {
    cat: "finance", keywords: ["cash","money","stack"],
    paths: [
      `<ellipse cx="8" cy="7" rx="4.5" ry="2"/>`,
      `<path d="M3.5 7v3c0 1.1 2 2 4.5 2s4.5-.9 4.5-2V7"/>`,
      `<path d="M3.5 10v3c0 1.1 2 2 4.5 2s4.5-.9 4.5-2v-3"/>`,
      `<ellipse cx="16" cy="15" rx="4.5" ry="2"/>`,
      `<path d="M11.5 15v3c0 1.1 2 2 4.5 2s4.5-.9 4.5-2v-3"/>`
    ]
  },
  "upi": {
    cat: "finance", keywords: ["payment","qr","digital","pay"],
    paths: [
      `<rect x="3.5" y="3.5" width="7" height="7" rx="1"/>`,
      `<rect x="13.5" y="3.5" width="7" height="7" rx="1"/>`,
      `<rect x="3.5" y="13.5" width="7" height="7" rx="1"/>`,
      `<rect x="6" y="6" width="2" height="2" fill="currentColor" stroke="none"/>`,
      `<rect x="16" y="6" width="2" height="2" fill="currentColor" stroke="none"/>`,
      `<rect x="6" y="16" width="2" height="2" fill="currentColor" stroke="none"/>`,
      `<path d="M14 14h2v2M18 14v2h-2M14 18h2v2M18 18v2"/>`
    ]
  },
  "qr-code": {
    cat: "finance", keywords: ["scan","code","pay"],
    paths: [
      `<rect x="3.5" y="3.5" width="6" height="6" rx="1"/>`,
      `<rect x="14.5" y="3.5" width="6" height="6" rx="1"/>`,
      `<rect x="3.5" y="14.5" width="6" height="6" rx="1"/>`,
      `<rect x="5.75" y="5.75" width="1.5" height="1.5" fill="currentColor" stroke="none"/>`,
      `<rect x="16.75" y="5.75" width="1.5" height="1.5" fill="currentColor" stroke="none"/>`,
      `<rect x="5.75" y="16.75" width="1.5" height="1.5" fill="currentColor" stroke="none"/>`,
      `<path d="M14.5 14.5h2.5v2.5M20.5 14.5v2.5h-2M14.5 18.5h2v2M20.5 18.5v2h-2"/>`
    ]
  },
  "transfer": {
    cat: "finance", keywords: ["send","swap","exchange"],
    paths: [
      `<path d="M3.5 8.5h14M14 5l3.5 3.5L14 12"/>`,
      `<path d="M20.5 15.5h-14M10 19l-3.5-3.5L10 12"/>`
    ]
  },
  "due": {
    cat: "finance", keywords: ["pending","outstanding","unpaid"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M12 7v5.5l3 1.75"/>`
    ]
  },
  "overdue": {
    cat: "finance", keywords: ["late","alert","missed"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M12 7v5.5"/>`,
      `<circle cx="12" cy="15.75" r="0.9" fill="currentColor" stroke="none"/>`,
      `<path d="M18 4l2.5 2.5M20.5 4L18 6.5"/>`
    ]
  },
  "write-off": {
    cat: "finance", keywords: ["waiver","adjustment","forgive"],
    paths: [
      `<rect x="3.5" y="5" width="17" height="14" rx="1.5"/>`,
      `<path d="M7 9.5h6M7 13h4"/>`,
      `<path d="M14 17l5-5M19 17l-5-5"/>`
    ]
  },
  "statement": {
    cat: "finance", keywords: ["account","summary","transactions"],
    paths: [
      `<rect x="4.5" y="3.5" width="15" height="17" rx="1.5"/>`,
      `<path d="M7.5 7.5h9M7.5 11h9M7.5 14.5h6"/>`,
      `<path d="M7.5 17.5h4"/>`
    ]
  },
  "gst": {
    cat: "finance", keywords: ["tax","percent","compliance"],
    paths: [
      `<rect x="3.5" y="4.5" width="17" height="15" rx="1.5"/>`,
      `<path d="M16 8.5l-8 8"/>`,
      `<circle cx="9" cy="9.5" r="1.25"/>`,
      `<circle cx="15" cy="15.5" r="1.25"/>`
    ]
  },
  "refund-amount": {
    cat: "finance", keywords: ["return cash","reverse","₹"],
    paths: [
      `<path d="M7 6.5h10M7 10h10M9 6.5c2.5 0 4.5 1.5 4.5 3.5s-2 3.5-4.5 3.5H7l8 6.5"/>`,
      `<path d="M19 17l2.5 2.5M21.5 17L19 19.5"/>`
    ]
  },

  /* ── 03 · Clinical (additional) ───────────────────────────── */
  "spo2": {
    cat: "clinical", keywords: ["oxygen","saturation","pulse ox"],
    paths: [
      `<path d="M9 4.5h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-1l-2 3-2-3H9a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z"/>`,
      `<path d="M12 7c-1.5 2-2.5 3.25-2.5 4.5a2.5 2.5 0 0 0 5 0c0-1.25-1-2.5-2.5-4.5z"/>`
    ]
  },
  "heart-rate": {
    cat: "clinical", keywords: ["hr","bpm","pulse"],
    paths: [
      `<path d="M3 12h4l1.5-2.5 2 5 1.5-3.5 1 2h8"/>`,
      `<path d="M16 7c2 0 3.5 1.5 3.5 3.5 0 3-3.5 5.5-7.5 8.5-4-3-7.5-5.5-7.5-8.5C4.5 8.5 6 7 8 7c1.5 0 2.5 1 4 3 1.5-2 2.5-3 4-3z" opacity="0"/>`
    ]
  },
  "respiration": {
    cat: "clinical", keywords: ["rr","breathing","breath rate"],
    paths: [
      `<path d="M3 14c2 0 2-3 4-3s2 4 4 4 2-5 4-5 2 4 4 4 2-2 2-2"/>`,
      `<path d="M3 18h18" opacity="0"/>`
    ]
  },
  "specimen-tube": {
    cat: "clinical", keywords: ["vial","sample","tube","vacutainer"],
    paths: [
      `<path d="M9 3.5h6v15a3 3 0 0 1-6 0z"/>`,
      `<path d="M9 12h6"/>`,
      `<path d="M9.5 14a3 3 0 0 0 5 0" opacity="0"/>`,
      `<path d="M9 14.5h6"/>`
    ]
  },
  "swab": {
    cat: "clinical", keywords: ["culture","sample","cotton","rt-pcr"],
    paths: [
      `<path d="M5 19l9-9"/>`,
      `<ellipse cx="15.5" cy="8.5" rx="2" ry="3.5" transform="rotate(45 15.5 8.5)"/>`,
      `<path d="M3.5 20.5l1.5-1.5"/>`
    ]
  },
  "ct-scan": {
    cat: "clinical", keywords: ["computed tomography","scan","donut"],
    paths: [
      `<rect x="3.5" y="6" width="17" height="12" rx="3"/>`,
      `<circle cx="12" cy="12" r="3.5"/>`,
      `<path d="M3.5 19l-1 2M20.5 19l1 2"/>`,
      `<path d="M6 18v2M18 18v2"/>`
    ]
  },
  "mri-scan": {
    cat: "clinical", keywords: ["magnetic resonance","scan","tunnel"],
    paths: [
      `<rect x="3.5" y="7" width="17" height="10" rx="1.5"/>`,
      `<rect x="6" y="9" width="4" height="6" rx="0.5"/>`,
      `<path d="M11 9.5l3.5 5M11 14.5l3.5-5"/>`,
      `<path d="M16.5 9v6"/>`
    ]
  },
  "ultrasound": {
    cat: "clinical", keywords: ["sonography","probe","transducer","usg"],
    paths: [
      `<rect x="7.5" y="3.5" width="5" height="7" rx="1"/>`,
      `<path d="M10 10.5l-2 4"/>`,
      `<path d="M14 6.5c2 0 3.5 1 4.5 2.5M14 9.5c1.5 0 2.5.5 3 1.5M14 12.5c.5 0 1 .25 1.5.5"/>`,
      `<path d="M5.5 17h13l-1.5 3.5h-10z"/>`
    ]
  },
  "defibrillator": {
    cat: "clinical", keywords: ["aed","shock","resus"],
    paths: [
      `<rect x="3.5" y="4.5" width="17" height="12" rx="1.5"/>`,
      `<path d="M8 11l2-3 1.5 5 2-4 1.5 2h2.5"/>`,
      `<path d="M7 19.5l3-2M17 19.5l-3-2"/>`,
      `<rect x="6" y="19" width="3" height="2" rx="0.5"/>`,
      `<rect x="15" y="19" width="3" height="2" rx="0.5"/>`
    ]
  },
  "ventilator": {
    cat: "clinical", keywords: ["breathing","respirator","icu"],
    paths: [
      `<rect x="4" y="3.5" width="10" height="13" rx="1.5"/>`,
      `<circle cx="9" cy="8.5" r="2"/>`,
      `<path d="M6 13h6"/>`,
      `<path d="M14 9h3M14 12h3"/>`,
      `<path d="M9 16.5v3M9 19.5h7"/>`,
      `<path d="M16 19.5c2 0 3 1 3 1.5"/>`
    ]
  },
  "oxygen-mask": {
    cat: "clinical", keywords: ["o2","respiration","face mask"],
    paths: [
      `<path d="M5 8.5c0-1 1-2 2.5-2h9c1.5 0 2.5 1 2.5 2v6c0 2-2 4.5-7 4.5s-7-2.5-7-4.5z"/>`,
      `<path d="M9.5 11h5M9.5 13.5h5"/>`,
      `<path d="M5 9l-2-2M19 9l2-2"/>`
    ]
  },
  "infusion-pump": {
    cat: "clinical", keywords: ["iv pump","syringe pump","flow"],
    paths: [
      `<rect x="3.5" y="5" width="17" height="9" rx="1.5"/>`,
      `<rect x="6" y="7.5" width="6" height="4" rx="0.5"/>`,
      `<path d="M14 8.5h4M14 11h4"/>`,
      `<path d="M12 14v3M12 17l-2 3.5h4z"/>`
    ]
  },
  "stretcher": {
    cat: "clinical", keywords: ["gurney","trolley","transport"],
    paths: [
      `<path d="M3 12.5h18"/>`,
      `<path d="M5 12.5v-2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2"/>`,
      `<path d="M3 12.5v3M21 12.5v3"/>`,
      `<circle cx="6.5" cy="18" r="1.5"/>`,
      `<circle cx="17.5" cy="18" r="1.5"/>`,
      `<path d="M8 9.5l3-3 3 3"/>`
    ]
  },
  "crutches": {
    cat: "clinical", keywords: ["mobility","walking aid","orthopedic"],
    paths: [
      `<path d="M7 3.5h4M7 6h4M9 6v13.5"/>`,
      `<path d="M6.5 19.5h5"/>`,
      `<path d="M13 3.5h4M13 6h4M15 6v13.5"/>`,
      `<path d="M12.5 19.5h5"/>`
    ]
  },
  "inhaler": {
    cat: "clinical", keywords: ["asthma","puff","mdi"],
    paths: [
      `<path d="M7 9.5h7v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"/>`,
      `<path d="M14 11.5l3-2v5l-3-2"/>`,
      `<rect x="8.5" y="5.5" width="4" height="4" rx="0.5"/>`
    ]
  },
  "nebulizer": {
    cat: "clinical", keywords: ["aerosol","steam","asthma"],
    paths: [
      `<rect x="4" y="12.5" width="9" height="7" rx="1"/>`,
      `<path d="M13 14.5h3.5l3-3v8l-3-3H13"/>`,
      `<circle cx="7" cy="16" r="0.6" fill="currentColor" stroke="none"/>`,
      `<path d="M8 8c0 1.5-1 1.5-1 3M11 6c0 2-1 2-1 4M14 8c0 1.5-1 1.5-1 3"/>`
    ]
  },
  "hearing-aid": {
    cat: "clinical", keywords: ["audiology","ear","deaf"],
    paths: [
      `<path d="M9 4.5c-3 0-5 2.5-5 5.5 0 3 2 4 2 7"/>`,
      `<circle cx="9" cy="10" r="2"/>`,
      `<path d="M12 7c1.5 0 3 1 3 3M14.5 4c2.5 0 4.5 2.5 4.5 6"/>`
    ]
  },
  "weight-scale": {
    cat: "clinical", keywords: ["weight","kg","bmi"],
    paths: [
      `<rect x="3.5" y="5.5" width="17" height="13" rx="2"/>`,
      `<path d="M12 9v3"/>`,
      `<path d="M8 14.5a4 4 0 0 1 8 0"/>`,
      `<circle cx="12" cy="14.5" r="0.8" fill="currentColor" stroke="none"/>`
    ]
  },
  "height-rod": {
    cat: "clinical", keywords: ["stadiometer","height","cm"],
    paths: [
      `<path d="M7 3.5v17"/>`,
      `<path d="M7 5.5h2.5M7 8h3.5M7 10.5h2.5M7 13h3.5M7 15.5h2.5M7 18h3.5"/>`,
      `<path d="M13 11l3-2v5z"/>`,
      `<path d="M16 11h2v2h-2z"/>`
    ]
  },
  "vaccine": {
    cat: "clinical", keywords: ["immunization","shot","shield"],
    paths: [
      `<path d="M12 3.5c-3 1-5 3-5 7v3c0 4 2.5 7 5 7s5-3 5-7v-3c0-4-2-6-5-7z"/>`,
      `<path d="M9.5 12l2 2 3.5-3.5"/>`
    ]
  },
  "first-aid": {
    cat: "clinical", keywords: ["kit","emergency","medical box"],
    paths: [
      `<rect x="3.5" y="7" width="17" height="12" rx="1.5"/>`,
      `<path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>`,
      `<path d="M12 10v6M9 13h6"/>`
    ]
  },
  "surgical-blade": {
    cat: "clinical", keywords: ["scalpel","surgery","cut"],
    paths: [
      `<path d="M3.5 20.5l9-9"/>`,
      `<path d="M12 11l4-4 4 1-1 4-4 4z"/>`,
      `<path d="M5 19l1.5 1.5"/>`
    ]
  },
  "suture": {
    cat: "clinical", keywords: ["stitches","wound closure","thread"],
    paths: [
      `<path d="M3.5 12h17"/>`,
      `<path d="M5 9l1.5 6M9 9l1.5 6M13 9l1.5 6M17 9l1.5 6"/>`
    ]
  },

  /* ── 04 · Departments (additional) ────────────────────────── */
  "cardiology": {
    cat: "department", keywords: ["heart","cardiac","cvs"],
    paths: [
      `<path d="M12 19.5C8 16.5 4 13.5 4 9.75A4.25 4.25 0 0 1 8.25 5.5c1.5 0 2.85.7 3.75 1.85.9-1.15 2.25-1.85 3.75-1.85A4.25 4.25 0 0 1 20 9.75c0 3.75-4 6.75-8 9.75z"/>`,
      `<path d="M7 11h2l1.5-2 2 4 1-2h4"/>`
    ]
  },
  "neurology": {
    cat: "department", keywords: ["neuro","brain","cns"],
    paths: [
      `<path d="M9 4.5a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0-2 4 2.5 2.5 0 0 0 0 4 2.5 2.5 0 0 0 2 4A2.5 2.5 0 0 0 9 21.5a2.5 2.5 0 0 0 3-2.5"/>`,
      `<path d="M15 4.5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 2 4 2.5 2.5 0 0 1 0 4 2.5 2.5 0 0 1-2 4A2.5 2.5 0 0 1 15 21.5a2.5 2.5 0 0 1-3-2.5"/>`,
      `<path d="M12 4.5v15"/>`
    ]
  },
  "orthopedics": {
    cat: "department", keywords: ["bone","ortho","fracture","joint"],
    paths: [
      `<path d="M7 4.5a2 2 0 1 0-2 2 2 2 0 0 0-2 2 2 2 0 0 0 4 0L13 16a2 2 0 0 0 0 4 2 2 0 0 0 4 0 2 2 0 0 0 4-2 2 2 0 0 0-4 0L9.5 9.5a2 2 0 0 0 0-3 2 2 0 0 0-2.5-2z"/>`
    ]
  },
  "urology": {
    cat: "department", keywords: ["bladder","urinary","prostate"],
    paths: [
      `<path d="M5.5 11.5c0-3 3-5 6.5-5s6.5 2 6.5 5v4a4 4 0 0 1-4 4h-5a4 4 0 0 1-4-4z"/>`,
      `<path d="M12 6.5V3.5"/>`,
      `<path d="M9 11.5c1 0 1.5-1 3-1s2 1 3 1"/>`
    ]
  },
  "gastro": {
    cat: "department", keywords: ["git","stomach","intestine"],
    paths: [
      `<path d="M12 4.5c-3 0-5 2-5 4.5 0 2 1.5 3 3 3 1 0 1.5-.5 2-1 .5.5 1 1 2 1 1.5 0 3-1 3-3 0-2.5-2-4.5-5-4.5z"/>`,
      `<path d="M14 12c0 2-2 2-2 4s2 2 2 4M10 12c0 2 2 2 2 4s-2 2-2 4"/>`
    ]
  },
  "psychiatry": {
    cat: "department", keywords: ["mental health","counseling","therapy"],
    paths: [
      `<path d="M5 11c0-4 3-7 7-7s7 3 7 7c0 2-1 3.5-2.5 4.5L16 19h-3v-3a3 3 0 0 1-3-3c0-1 .5-2 2-2"/>`,
      `<circle cx="10" cy="10" r="0.8" fill="currentColor" stroke="none"/>`,
      `<circle cx="14" cy="10" r="0.8" fill="currentColor" stroke="none"/>`
    ]
  },
  "dermatology": {
    cat: "department", keywords: ["skin","derma","rash"],
    paths: [
      `<path d="M4.5 12c0-4 3.5-7.5 7.5-7.5s7.5 3.5 7.5 7.5-3.5 7.5-7.5 7.5"/>`,
      `<circle cx="9" cy="10" r="1"/>`,
      `<circle cx="13.5" cy="13" r="1"/>`,
      `<circle cx="10" cy="15" r="1"/>`,
      `<path d="M4.5 16l-2 4M6.5 18l-1 2"/>`
    ]
  },
  "endocrinology": {
    cat: "department", keywords: ["hormones","thyroid","diabetes"],
    paths: [
      `<path d="M9.5 4.5c-1.5 1-2.5 2.5-2.5 4 0 2.5 2 3 2 5 0 1.5-1 2-1 3.5 0 1.5 1 2.5 2.5 2.5"/>`,
      `<path d="M14.5 4.5c1.5 1 2.5 2.5 2.5 4 0 2.5-2 3-2 5 0 1.5 1 2 1 3.5 0 1.5-1 2.5-2.5 2.5"/>`,
      `<circle cx="12" cy="12" r="1.5"/>`
    ]
  },
  "gynecology": {
    cat: "department", keywords: ["obg","women","female"],
    paths: [
      `<circle cx="12" cy="9" r="5.25"/>`,
      `<path d="M12 14.25v6"/>`,
      `<path d="M9 18h6"/>`
    ]
  },
  "pediatrics": {
    cat: "department", keywords: ["children","kids","baby","paeds"],
    paths: [
      `<circle cx="12" cy="8.5" r="4.25"/>`,
      `<circle cx="10.5" cy="8" r="0.6" fill="currentColor" stroke="none"/>`,
      `<circle cx="13.5" cy="8" r="0.6" fill="currentColor" stroke="none"/>`,
      `<path d="M10.5 10.5c.5.75 1 1 1.5 1s1-.25 1.5-1"/>`,
      `<path d="M5.5 20.5c1-3.5 3.5-5 6.5-5s5.5 1.5 6.5 5"/>`
    ]
  },
  "anesthesia": {
    cat: "department", keywords: ["sedation","surgery","airway"],
    paths: [
      `<path d="M9 4.5h6v3"/>`,
      `<rect x="7.5" y="7.5" width="9" height="6" rx="1"/>`,
      `<path d="M12 13.5v3"/>`,
      `<path d="M8 16.5h8l-1.5 4h-5z"/>`,
      `<path d="M11 10l-1 1M13 10l1 1"/>`
    ]
  },
  "reception": {
    cat: "department", keywords: ["front desk","counter","check-in"],
    paths: [
      `<path d="M3 18.5h18"/>`,
      `<path d="M5 18.5v-4h14v4"/>`,
      `<circle cx="9" cy="8" r="2.5"/>`,
      `<path d="M5 14.5c0-2 2-3.5 4-3.5s4 1.5 4 3.5"/>`,
      `<rect x="15" y="8" width="4" height="3" rx="0.5"/>`
    ]
  },
  "mortuary": {
    cat: "department", keywords: ["morgue","deceased","cold storage"],
    paths: [
      `<rect x="3.5" y="5" width="17" height="14" rx="1.5"/>`,
      `<path d="M3.5 12h17"/>`,
      `<circle cx="7" cy="8.5" r="0.7" fill="currentColor" stroke="none"/>`,
      `<circle cx="7" cy="15.5" r="0.7" fill="currentColor" stroke="none"/>`,
      `<path d="M11 8.5h6M11 15.5h6"/>`
    ]
  },
  "kitchen": {
    cat: "department", keywords: ["dietary","food service","catering"],
    paths: [
      `<path d="M5 11.5h14v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/>`,
      `<path d="M3.5 11.5h17"/>`,
      `<path d="M9 7c0-1.5 1.5-3 3-3s3 1.5 3 3M12 4v7"/>`
    ]
  },
  "laundry": {
    cat: "department", keywords: ["linen","washing","clothes"],
    paths: [
      `<rect x="4" y="3.5" width="16" height="17" rx="1.5"/>`,
      `<circle cx="12" cy="13" r="4.5"/>`,
      `<path d="M9 10.5c1-1 2-1.5 3-1.5s2 .5 3 1.5"/>`,
      `<circle cx="7.5" cy="6.5" r="0.7" fill="currentColor" stroke="none"/>`,
      `<circle cx="10" cy="6.5" r="0.7" fill="currentColor" stroke="none"/>`
    ]
  },
  "housekeeping": {
    cat: "department", keywords: ["cleaning","sanitation","broom"],
    paths: [
      `<path d="M16.5 3.5l-9 9"/>`,
      `<path d="M14 6l4 4"/>`,
      `<path d="M5 14.5l5 5 1.5-1.5-3-7-3.5 3.5z"/>`,
      `<path d="M7 17.5l1.5 1.5"/>`
    ]
  },
  "security": {
    cat: "department", keywords: ["guard","safety","shield"],
    paths: [
      `<path d="M4 6.5l8-3 8 3v6c0 4.5-3.5 7.5-8 9-4.5-1.5-8-4.5-8-9z"/>`,
      `<path d="M9 12l2 2 4-4"/>`
    ]
  },
  "billing-counter": {
    cat: "department", keywords: ["cashier","payment desk","checkout"],
    paths: [
      `<rect x="4" y="10" width="16" height="9" rx="1"/>`,
      `<rect x="7" y="4.5" width="10" height="5.5" rx="0.5"/>`,
      `<path d="M10 7h4"/>`,
      `<path d="M7 13.5h2M11 13.5h2M15 13.5h2M7 16h2M11 16h2M15 16h2"/>`
    ]
  },
  "waiting-area": {
    cat: "department", keywords: ["chairs","queue","seating"],
    paths: [
      `<path d="M3.5 11h17v5h-17z"/>`,
      `<path d="M5 16v4M19 16v4"/>`,
      `<path d="M3.5 13h17"/>`,
      `<path d="M6 11V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/>`
    ]
  },
  "oncology-dept": {
    cat: "department", keywords: ["cancer ward","chemo center","oncology"],
    paths: [
      `<rect x="3.5" y="5" width="17" height="15" rx="1.5"/>`,
      `<path d="M9 11.5a3 3 0 1 1 3 3M15 11.5a3 3 0 1 0-3-3M12 8.5v6"/>`,
      `<path d="M3.5 9h17"/>`
    ]
  },

  /* ── 05 · Oncology (additional) ───────────────────────────── */
  "tumor-marker": {
    cat: "oncology", keywords: ["biomarker","ca","psa","cea"],
    paths: [
      `<circle cx="12" cy="12" r="4.25"/>`,
      `<path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3"/>`,
      `<circle cx="12" cy="12" r="1.25" fill="currentColor" stroke="none"/>`
    ]
  },
  "metastasis": {
    cat: "oncology", keywords: ["spread","secondary","mets"],
    paths: [
      `<circle cx="6" cy="6" r="2.25"/>`,
      `<circle cx="18" cy="7" r="1.5"/>`,
      `<circle cx="15" cy="15" r="1.75"/>`,
      `<circle cx="7" cy="17" r="1.25"/>`,
      `<circle cx="19" cy="17" r="1.25"/>`,
      `<path d="M7.5 7.5l5.5 6M7.5 8l-1 7M8 6.5l9 .75M16 8l-1 5"/>`
    ]
  },
  "lymph-node": {
    cat: "oncology", keywords: ["node","lymphoma","glands"],
    paths: [
      `<ellipse cx="12" cy="12" rx="4" ry="3"/>`,
      `<ellipse cx="6" cy="7.5" rx="2.5" ry="1.75"/>`,
      `<ellipse cx="18" cy="7.5" rx="2.5" ry="1.75"/>`,
      `<ellipse cx="6" cy="16.5" rx="2.5" ry="1.75"/>`,
      `<ellipse cx="18" cy="16.5" rx="2.5" ry="1.75"/>`
    ]
  },
  "port-flush": {
    cat: "oncology", keywords: ["saline","port care","line care"],
    paths: [
      `<circle cx="8" cy="12" r="3.25"/>`,
      `<circle cx="8" cy="12" r="1" fill="currentColor" stroke="none"/>`,
      `<path d="M11.25 12h6.5M14.5 9.5L18 12l-3.5 2.5"/>`,
      `<path d="M19.5 8v8"/>`
    ]
  },
  "radiotherapy-plan": {
    cat: "oncology", keywords: ["plan","isodose","contour","beam plan"],
    paths: [
      `<rect x="3.5" y="3.5" width="17" height="17" rx="1.5"/>`,
      `<circle cx="12" cy="12" r="2"/>`,
      `<circle cx="12" cy="12" r="4.5"/>`,
      `<circle cx="12" cy="12" r="7"/>`,
      `<path d="M12 5v2M12 17v2M5 12h2M17 12h2"/>`
    ]
  },
  "ct-sim": {
    cat: "oncology", keywords: ["simulator","planning ct","sim"],
    paths: [
      `<rect x="3.5" y="6" width="17" height="12" rx="3"/>`,
      `<circle cx="12" cy="12" r="3.5"/>`,
      `<path d="M12 8.5v7M8.5 12h7" stroke-dasharray="1.5 1.5"/>`,
      `<path d="M3.5 19l-1 2M20.5 19l1 2"/>`
    ]
  },
  "immobilization": {
    cat: "oncology", keywords: ["mask","thermoplastic","head fix"],
    paths: [
      `<path d="M8 4.5h8a2 2 0 0 1 2 2v8c0 3-2 5-6 5s-6-2-6-5v-8a2 2 0 0 1 2-2z"/>`,
      `<path d="M8 8h8M8 11h8M8 14h8"/>`,
      `<path d="M11 4.5v14M13 4.5v14"/>`
    ]
  },
  "contour": {
    cat: "oncology", keywords: ["target","gtv","ctv","ptv","delineation"],
    paths: [
      `<path d="M5 8c2-3 5-4 8-3s5 4 4 8-4 7-8 6-6-4-6-7c0-1.5.5-3 2-4z"/>`,
      `<path d="M8 11c1-1.5 3-2 4.5-1.5s2.5 2.5 2 4-2.5 3-4 2.5-2.5-2-2.5-3c0-.5.25-1 .75-1.5"/>`,
      `<circle cx="11" cy="12" r="0.8" fill="currentColor" stroke="none"/>`
    ]
  },
  "fraction": {
    cat: "oncology", keywords: ["dose schedule","sessions","fxn"],
    paths: [
      `<rect x="3.5" y="4.5" width="3.5" height="15" rx="0.5"/>`,
      `<rect x="8.25" y="4.5" width="3.5" height="15" rx="0.5"/>`,
      `<rect x="13" y="4.5" width="3.5" height="15" rx="0.5"/>`,
      `<path d="M17.75 6.5l3.5 11"/>`
    ]
  },
  "cancer-stage": {
    cat: "oncology", keywords: ["i ii iii iv","tnm","grading"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M9.5 9h5"/>`,
      `<path d="M10 9v6M14 9v6"/>`,
      `<path d="M9.5 15h5"/>`
    ]
  },

  /* ── 06 · Records (additional) ────────────────────────────── */
  "audit-log": {
    cat: "records", keywords: ["history","trail","who-when"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M12 7v5h4"/>`,
      `<path d="M4.5 6.5L3 5M19.5 6.5L21 5"/>`
    ]
  },
  "version": {
    cat: "records", keywords: ["v1 v2","history","branch"],
    paths: [
      `<circle cx="7" cy="6" r="2"/>`,
      `<circle cx="7" cy="18" r="2"/>`,
      `<circle cx="17" cy="12" r="2"/>`,
      `<path d="M7 8v8"/>`,
      `<path d="M7 12c0-2.5 2-4 4-4h2a2 2 0 0 1 2 2v1"/>`
    ]
  },
  "signature": {
    cat: "records", keywords: ["sign","esign","autograph"],
    paths: [
      `<path d="M3.5 16c2-1 2.5-3 3.5-5s2.5-1 2 1-1 4 .5 4 2-3 3.5-3 1.5 2.5 3 2.5 2-1 3-1 1.5.5 1.5.5"/>`,
      `<path d="M3.5 19.5h17"/>`
    ]
  },
  "abha": {
    cat: "records", keywords: ["ndhm","health id","ayushman"],
    paths: [
      `<rect x="3.5" y="5" width="17" height="14" rx="2"/>`,
      `<circle cx="8.5" cy="11" r="1.75"/>`,
      `<path d="M5.5 16c.5-1.5 1.5-2.5 3-2.5s2.5 1 3 2.5"/>`,
      `<path d="M13 9.5h5M13 12.5h5M13 15.5h3"/>`
    ]
  },
  "referral": {
    cat: "records", keywords: ["refer out","send","transfer-doc"],
    paths: [
      `<path d="M5.5 3.5h9l5 5v8h-14z"/>`,
      `<path d="M14.5 3.5v5h5"/>`,
      `<path d="M8.5 12h6"/>`,
      `<path d="M14.5 12l-2-2M14.5 12l-2 2"/>`,
      `<path d="M5.5 19.5h14"/>`
    ]
  },
  "transfer-record": {
    cat: "records", keywords: ["move file","send record","forward"],
    paths: [
      `<path d="M4.5 3.5h7l3 3v3"/>`,
      `<path d="M11.5 3.5v3h3"/>`,
      `<path d="M4.5 3.5v17h11"/>`,
      `<path d="M11.5 14.5h9"/>`,
      `<path d="M17 11l3.5 3.5L17 18"/>`
    ]
  },
  "archive": {
    cat: "records", keywords: ["box","storage","old records"],
    paths: [
      `<rect x="3" y="4.5" width="18" height="4" rx="0.5"/>`,
      `<path d="M4.5 8.5v10a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-10"/>`,
      `<path d="M9.5 13h5"/>`
    ]
  },
  "timestamp": {
    cat: "records", keywords: ["date time","recorded at","clock"],
    paths: [
      `<path d="M5.5 3.5h9l5 5v12H5.5z"/>`,
      `<path d="M14.5 3.5v5h5"/>`,
      `<circle cx="12" cy="14.5" r="3.25"/>`,
      `<path d="M12 12.5v2l1.5 1"/>`
    ]
  },
  "export-record": {
    cat: "records", keywords: ["export","download record","pdf"],
    paths: [
      `<path d="M5.5 3.5h9l5 5v12H5.5z"/>`,
      `<path d="M14.5 3.5v5h5"/>`,
      `<path d="M12 11v6M9 14l3 3 3-3"/>`
    ]
  },
  "summary-pdf": {
    cat: "records", keywords: ["pdf","summary","export doc"],
    paths: [
      `<path d="M5.5 3.5h9l5 5v12H5.5z"/>`,
      `<path d="M14.5 3.5v5h5"/>`,
      `<path d="M8 13.5h2.5a1.25 1.25 0 0 0 0-2.5H8v5"/>`,
      `<path d="M12.5 11v5M12.5 11h2a2 2 0 0 1 0 5h-2"/>`
    ]
  },

  /* ═══ 07 · COMMUNICATION (NEW) ════════════════════════════ */
  "chat": {
    cat: "comms", keywords: ["message","talk","bubble"],
    paths: [
      `<path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-4 3.5V16H6a2 2 0 0 1-2-2z"/>`
    ]
  },
  "video-call": {
    cat: "comms", keywords: ["telemed","video","meeting"],
    paths: [
      `<rect x="3" y="7" width="13" height="10" rx="1.5"/>`,
      `<path d="M16 11l5-3v8l-5-3z"/>`
    ]
  },
  "voice-call": {
    cat: "comms", keywords: ["phone","dial","telephone"],
    paths: [
      `<path d="M5 4.5h3l1.5 4-2 1.5c1 2 3 4 5 5l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.5 1.5C9 19 5 15 5 6A1.5 1.5 0 0 1 6.5 4.5"/>`
    ]
  },
  "sms": {
    cat: "comms", keywords: ["text","message","otp"],
    paths: [
      `<path d="M3.5 6a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-9l-4 3v-3h-2a2 2 0 0 1-2-2z"/>`,
      `<path d="M7.5 9.5h.01M12 9.5h.01M16.5 9.5h.01"/>`
    ]
  },
  "email": {
    cat: "comms", keywords: ["mail","envelope","inbox"],
    paths: [
      `<rect x="3" y="5.5" width="18" height="13" rx="1.5"/>`,
      `<path d="M3 7l9 6 9-6"/>`
    ]
  },
  "broadcast": {
    cat: "comms", keywords: ["announcement","megaphone","alert all"],
    paths: [
      `<path d="M3.5 10v4l9 4V6z"/>`,
      `<path d="M12.5 7c2 1 3 2.5 3 5s-1 4-3 5"/>`,
      `<path d="M15.5 5c3 1.5 4.5 4 4.5 7s-1.5 5.5-4.5 7"/>`
    ]
  },
  "telemedicine": {
    cat: "comms", keywords: ["online consult","virtual","remote"],
    paths: [
      `<rect x="3" y="5.5" width="18" height="11" rx="1.5"/>`,
      `<path d="M7 19.5h10"/>`,
      `<circle cx="12" cy="10" r="1.75"/>`,
      `<path d="M9 14c.5-1.5 1.5-2.5 3-2.5s2.5 1 3 2.5"/>`,
      `<path d="M12 8.5V7M10.5 9h-1.5"/>`
    ]
  },
  "in-app-message": {
    cat: "comms", keywords: ["alert","toast","banner"],
    paths: [
      `<rect x="3.5" y="6" width="17" height="6" rx="1.5"/>`,
      `<path d="M6 9h2M6 15h2M6 18h2"/>`,
      `<rect x="10" y="14" width="10.5" height="5" rx="1.5"/>`
    ]
  },
  "fax": {
    cat: "comms", keywords: ["facsimile","send paper","print"],
    paths: [
      `<path d="M7.5 4.5h7v5"/>`,
      `<rect x="3.5" y="9.5" width="17" height="7" rx="1.5"/>`,
      `<rect x="7" y="14" width="10" height="6" rx="0.5"/>`,
      `<circle cx="17.5" cy="12.5" r="0.7" fill="currentColor" stroke="none"/>`,
      `<path d="M9 16.5h6M9 18h4"/>`
    ]
  },
  "notify-doctor": {
    cat: "comms", keywords: ["page","escalate","alert clinician"],
    paths: [
      `<circle cx="12" cy="8" r="3.25"/>`,
      `<path d="M5.5 19.5c1-3 3.5-4.5 6.5-4.5s5.5 1.5 6.5 4.5"/>`,
      `<circle cx="18" cy="5" r="2.5" fill="currentColor" stroke="none"/>`
    ]
  },

  /* ═══ 08 · LABORATORY ═══════════════════════════════════════ */
  "test-tube": {
    cat: "lab", keywords: ["sample","specimen","tube","vial"],
    paths: [
      `<path d="M9 3.5h6v13.25a3 3 0 0 1-6 0z"/>`,
      `<path d="M9 12.5h6"/>`,
      `<path d="M8 3.5h8"/>`
    ]
  },
  "test-tube-rack": {
    cat: "lab", keywords: ["specimens","batch","samples","holder"],
    paths: [
      `<path d="M3.5 8h17"/>`,
      `<path d="M6 8v8.5a2 2 0 0 0 4 0V8"/>`,
      `<path d="M10 8v8.5a2 2 0 0 0 4 0V8"/>`,
      `<path d="M14 8v8.5a2 2 0 0 0 4 0V8"/>`,
      `<path d="M3.5 8l1-2.5h15l1 2.5"/>`
    ]
  },
  "petri-dish": {
    cat: "lab", keywords: ["culture","microbiology","agar","plate"],
    paths: [
      `<ellipse cx="12" cy="13" rx="8.5" ry="3"/>`,
      `<path d="M3.5 13v2c0 1.6 3.8 3 8.5 3s8.5-1.4 8.5-3v-2"/>`,
      `<circle cx="9" cy="12.5" r="1.25"/>`,
      `<circle cx="14.5" cy="13.5" r="0.9"/>`
    ]
  },
  "microscope": {
    cat: "lab", keywords: ["magnify","slide","histology","optics"],
    paths: [
      `<path d="M11 3.5h3l-.5 7h-2z"/>`,
      `<path d="M9.5 10.5h6l-.5 4h-5z"/>`,
      `<path d="M12.5 14.5v3"/>`,
      `<path d="M7 17.5h11"/>`,
      `<path d="M5.5 20.5h13"/>`,
      `<path d="M16 5.5l3 1.5-1.5 3"/>`
    ]
  },
  "centrifuge": {
    cat: "lab", keywords: ["spin","plasma","separate","rotor"],
    paths: [
      `<rect x="3.5" y="6.5" width="17" height="11" rx="1.75"/>`,
      `<circle cx="12" cy="12" r="3.25"/>`,
      `<path d="M12 8.75v6.5M8.75 12h6.5"/>`,
      `<path d="M3.5 17.5l-.5 2.5M20.5 17.5l.5 2.5"/>`
    ]
  },
  "blood-tube-edta": {
    cat: "lab", keywords: ["lavender","cbc","whole blood","tube"],
    paths: [
      `<path d="M9.5 3.5h5v3h-5z"/>`,
      `<path d="M9 6.5h6v13a2.5 2.5 0 0 1-5 0z"/>`,
      `<path d="M10.5 13.5c1 .5 2 .5 3 0"/>`,
      `<path d="M10.5 16c1 .5 2 .5 3 0"/>`
    ]
  },
  "blood-tube-sst": {
    cat: "lab", keywords: ["serum","gold","gel","chemistry"],
    paths: [
      `<path d="M9.5 3.5h5v3h-5z"/>`,
      `<path d="M9 6.5h6v13a2.5 2.5 0 0 1-5 0z"/>`,
      `<path d="M9 12.25h6"/>`
    ]
  },
  "urine-cup": {
    cat: "lab", keywords: ["specimen","sample","container","cup"],
    paths: [
      `<path d="M5 7.5h14l-1.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1z"/>`,
      `<path d="M4.5 7.5h15"/>`,
      `<path d="M7 11.5l9.5 6.5"/>`
    ]
  },
  "stool-sample": {
    cat: "lab", keywords: ["faecal","occult","container","specimen"],
    paths: [
      `<rect x="6.5" y="6" width="11" height="14" rx="1.5"/>`,
      `<path d="M9 6V4.5h6V6"/>`,
      `<path d="M9 11.5h6M9 14h6M9 16.5h4"/>`
    ]
  },
  "swab-test": {
    cat: "lab", keywords: ["covid","nasal","throat","cotton"],
    paths: [
      `<path d="M5 19l11-11"/>`,
      `<ellipse cx="17.5" cy="6.5" rx="2.5" ry="1.75" transform="rotate(-45 17.5 6.5)"/>`,
      `<path d="M4 20l1.5-1.5"/>`
    ]
  },
  "slide": {
    cat: "lab", keywords: ["microscope","glass","specimen","stain"],
    paths: [
      `<rect x="6" y="3.5" width="12" height="17" rx="0.75"/>`,
      `<rect x="8.5" y="9" width="7" height="6" rx="0.5"/>`,
      `<path d="M8 6.5h2"/>`
    ]
  },
  "pipette": {
    cat: "lab", keywords: ["dropper","aliquot","liquid","measure"],
    paths: [
      `<path d="M11 3.5h2v3h-2z"/>`,
      `<path d="M10 6.5h4l-.5 9.5a1.5 1.5 0 0 1-3 0z"/>`,
      `<path d="M11.25 18.5l.75 2 .75-2"/>`,
      `<path d="M10.5 9.5h3M10.5 12h3"/>`
    ]
  },
  "burette": {
    cat: "lab", keywords: ["titration","glassware","graduated","measure"],
    paths: [
      `<path d="M11 3.5h2v15.5l-1 2-1-2z"/>`,
      `<path d="M11 8h2M11 11h2M11 14h2M11 17h2"/>`
    ]
  },
  "flask-erlenmeyer": {
    cat: "lab", keywords: ["conical","chemistry","glassware","beaker"],
    paths: [
      `<path d="M9.5 3.5h5v5l4.5 9a2 2 0 0 1-1.8 2.9H5.8A2 2 0 0 1 4 17.5l5.5-9z"/>`,
      `<path d="M9 3.5h6"/>`,
      `<path d="M6.5 14h11"/>`
    ]
  },
  "beaker": {
    cat: "lab", keywords: ["glassware","measure","liquid","chemistry"],
    paths: [
      `<path d="M6 4.5h12"/>`,
      `<path d="M7 4.5v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-14"/>`,
      `<path d="M7 13c1.5-1 3-1 5 0s3.5 1 5 0"/>`,
      `<path d="M9.5 8h2M9.5 10.5h2"/>`
    ]
  },
  "molecule": {
    cat: "lab", keywords: ["chemistry","compound","structure","atom"],
    paths: [
      `<circle cx="6" cy="7" r="2"/>`,
      `<circle cx="18" cy="7" r="2"/>`,
      `<circle cx="12" cy="17" r="2"/>`,
      `<path d="M7.5 8.5l3 6.5M16.5 8.5l-3 6.5M8 7h8"/>`
    ]
  },
  "barcode-sample": {
    cat: "lab", keywords: ["lis","tracking","label","accession"],
    paths: [
      `<rect x="3.5" y="6" width="17" height="12" rx="1"/>`,
      `<path d="M6 9v6M8 9v6M10 9v6M12.5 9v6M14.5 9v6M16.5 9v6M18 9v6"/>`
    ]
  },
  "qr-sample": {
    cat: "lab", keywords: ["scan","track","specimen","2d code"],
    paths: [
      `<rect x="3.75" y="3.75" width="6" height="6" rx="0.75"/>`,
      `<rect x="14.25" y="3.75" width="6" height="6" rx="0.75"/>`,
      `<rect x="3.75" y="14.25" width="6" height="6" rx="0.75"/>`,
      `<path d="M14.25 14.25h2.5v2.5h-2.5z"/>`,
      `<path d="M19 14.25h1.25v2.5M14.25 19h2.5v1.25M19 19h1.25v1.25"/>`
    ]
  },
  "report-lab": {
    cat: "lab", keywords: ["result","values","print","report"],
    paths: [
      `<path d="M5.5 3.5h11l3 3v14h-14z"/>`,
      `<path d="M16.5 3.5v3h3"/>`,
      `<path d="M8 11h8M8 13.5h8M8 16h5"/>`,
      `<circle cx="14.5" cy="16" r="0.9" fill="currentColor" stroke="none"/>`
    ]
  },
  "result-pending": {
    cat: "lab", keywords: ["awaiting","tat","queue","wip"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M12 7v5l3 2"/>`,
      `<circle cx="18" cy="6" r="2.25" fill="currentColor" stroke="none"/>`
    ]
  },
  "result-critical": {
    cat: "lab", keywords: ["panic","abnormal","high","alert value"],
    paths: [
      `<path d="M12 3.5l9.5 16.5h-19z"/>`,
      `<path d="M12 9.5v4.5"/>`,
      `<circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none"/>`
    ]
  },
  "result-normal": {
    cat: "lab", keywords: ["within range","green","ok"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M8 12l3 3 5-5.5"/>`
    ]
  },
  "phlebotomy": {
    cat: "lab", keywords: ["draw","venipuncture","collection","blood draw"],
    paths: [
      `<path d="M5 14l7-7 4 4-7 7"/>`,
      `<path d="M14 5.5l4.5 4.5"/>`,
      `<path d="M5 17.5l-1.5 2"/>`,
      `<circle cx="6.5" cy="15.5" r="0.6" fill="currentColor" stroke="none"/>`,
      `<circle cx="4.5" cy="17.5" r="0.6" fill="currentColor" stroke="none"/>`
    ]
  },
  "biohazard": {
    cat: "lab", keywords: ["infectious","waste","danger","bsl"],
    paths: [
      `<circle cx="12" cy="12" r="2.25"/>`,
      `<path d="M12 6.5a3 3 0 0 0-2.5 4.5"/>`,
      `<path d="M12 6.5a3 3 0 0 1 2.5 4.5"/>`,
      `<path d="M7 16a3 3 0 0 1 4-2.5"/>`,
      `<path d="M17 16a3 3 0 0 0-4-2.5"/>`,
      `<path d="M9 19a3 3 0 0 1 1.5-3.5"/>`,
      `<path d="M15 19a3 3 0 0 0-1.5-3.5"/>`
    ]
  },
  "incubator-lab": {
    cat: "lab", keywords: ["temperature","culture","37c","oven"],
    paths: [
      `<rect x="3.5" y="4.5" width="17" height="15" rx="1.5"/>`,
      `<rect x="6" y="7" width="12" height="9.5" rx="0.75"/>`,
      `<circle cx="17" cy="6.5" r="0.6" fill="currentColor" stroke="none"/>`,
      `<path d="M9 11.5h6"/>`
    ]
  },
  "elisa-plate": {
    cat: "lab", keywords: ["96 well","assay","immuno","plate"],
    paths: [
      `<rect x="3.5" y="6.5" width="17" height="11" rx="1"/>`,
      `<circle cx="7" cy="9.5" r="0.7"/>`,
      `<circle cx="10" cy="9.5" r="0.7"/>`,
      `<circle cx="13" cy="9.5" r="0.7"/>`,
      `<circle cx="16" cy="9.5" r="0.7"/>`,
      `<circle cx="7" cy="12" r="0.7"/>`,
      `<circle cx="10" cy="12" r="0.7"/>`,
      `<circle cx="13" cy="12" r="0.7"/>`,
      `<circle cx="16" cy="12" r="0.7"/>`,
      `<circle cx="7" cy="14.5" r="0.7"/>`,
      `<circle cx="10" cy="14.5" r="0.7"/>`,
      `<circle cx="13" cy="14.5" r="0.7"/>`,
      `<circle cx="16" cy="14.5" r="0.7"/>`
    ]
  },
  "pcr-machine": {
    cat: "lab", keywords: ["thermocycler","amplify","molecular","rt-pcr"],
    paths: [
      `<rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/>`,
      `<path d="M3.5 9.5h17"/>`,
      `<rect x="6.5" y="12" width="11" height="4" rx="0.75"/>`,
      `<circle cx="6.5" cy="7.5" r="0.5" fill="currentColor" stroke="none"/>`,
      `<circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" stroke="none"/>`
    ]
  },
  "spectrophotometer": {
    cat: "lab", keywords: ["analyzer","optical","absorbance","wavelength"],
    paths: [
      `<rect x="3" y="9" width="18" height="8" rx="1"/>`,
      `<circle cx="8" cy="13" r="1.75"/>`,
      `<path d="M11.5 13h7"/>`,
      `<path d="M8 9V6.5h3"/>`,
      `<path d="M3 19.5h18"/>`
    ]
  },
  "lab-coat": {
    cat: "lab", keywords: ["scientist","ppe","staff","apron"],
    paths: [
      `<path d="M8 4.5l-3 2v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-13l-3-2"/>`,
      `<path d="M8 4.5l4 4 4-4"/>`,
      `<path d="M12 8.5v11"/>`,
      `<rect x="14" y="14" width="2.5" height="3" rx="0.3"/>`
    ]
  },
  "gloves": {
    cat: "lab", keywords: ["nitrile","ppe","hand","exam"],
    paths: [
      `<path d="M7.5 11V6a1 1 0 0 1 2 0v4"/>`,
      `<path d="M9.5 10V4.5a1 1 0 0 1 2 0V10"/>`,
      `<path d="M11.5 10V5a1 1 0 0 1 2 0v5"/>`,
      `<path d="M13.5 10.5V6.5a1 1 0 0 1 2 0V12"/>`,
      `<path d="M7.5 10.5c-1 1-2 2-2 4 0 3 2 6 5 6h2c2 0 3-2 3-3v-5"/>`
    ]
  },
  "centrifuge-tube": {
    cat: "lab", keywords: ["falcon","conical","15ml","50ml"],
    paths: [
      `<path d="M9 3.5h6v3h-6z"/>`,
      `<path d="M9 6.5h6v10l-3 4-3-4z"/>`,
      `<path d="M9.5 10h5M9.5 12.5h5"/>`
    ]
  },
  "agar-plate": {
    cat: "lab", keywords: ["culture","streak","colony","microbio"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M7 9c2 1 4 1 6-.5"/>`,
      `<path d="M7.5 13c2 1.5 5 1 7-1"/>`,
      `<circle cx="9" cy="11.5" r="0.6" fill="currentColor" stroke="none"/>`,
      `<circle cx="14.5" cy="14" r="0.6" fill="currentColor" stroke="none"/>`,
      `<circle cx="13" cy="9" r="0.6" fill="currentColor" stroke="none"/>`
    ]
  },
  "vacutainer": {
    cat: "lab", keywords: ["draw tube","vacuum","blood","sample"],
    paths: [
      `<path d="M9 3.5h6v2.5l-1 1h-4l-1-1z"/>`,
      `<path d="M9 7h6v12.5a3 3 0 0 1-6 0z"/>`,
      `<path d="M10 14c1 .5 3 .5 4 0"/>`
    ]
  },
  "specimen-bag": {
    cat: "lab", keywords: ["transport","biohazard","ziplock","courier"],
    paths: [
      `<path d="M5.5 6.5h13v14h-13z"/>`,
      `<path d="M5.5 9h13"/>`,
      `<path d="M8 4.5h8l-.5 2h-7z"/>`,
      `<path d="M9 13h5"/>`
    ]
  },
  "reagent": {
    cat: "lab", keywords: ["bottle","chemical","solvent","stock"],
    paths: [
      `<path d="M10 3.5h4v3l1.5 2v11a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-11l1.5-2z"/>`,
      `<path d="M10 11h4"/>`,
      `<path d="M9.5 6.5h5"/>`
    ]
  },
  "calibration": {
    cat: "lab", keywords: ["qc","levey","westgard","control"],
    paths: [
      `<path d="M3.5 18.5h17"/>`,
      `<path d="M3.5 12h17"/>`,
      `<path d="M3.5 5.5h17" stroke-dasharray="2 2"/>`,
      `<path d="M5 8l3 5 3-3 4 4 4-6"/>`,
      `<circle cx="5" cy="8" r="0.9" fill="currentColor" stroke="none"/>`,
      `<circle cx="11" cy="10" r="0.9" fill="currentColor" stroke="none"/>`,
      `<circle cx="19" cy="8" r="0.9" fill="currentColor" stroke="none"/>`
    ]
  },
  "control-sample": {
    cat: "lab", keywords: ["qc","ref","standard","quality"],
    paths: [
      `<path d="M9 3.5h6v3h-6z"/>`,
      `<path d="M9 6.5h6v13a2.5 2.5 0 0 1-5 0z"/>`,
      `<path d="M11 11l1 1.5 2-2.5"/>`
    ]
  },
  "histology": {
    cat: "lab", keywords: ["tissue","section","biopsy","cassette"],
    paths: [
      `<rect x="4" y="6" width="16" height="12" rx="1"/>`,
      `<path d="M4 9.5h16"/>`,
      `<path d="M6 12h2M9 12h2M12 12h2M15 12h2M6 14.5h2M9 14.5h2M12 14.5h2M15 14.5h2"/>`
    ]
  },
  "cytology": {
    cat: "lab", keywords: ["pap","cells","smear","fnac"],
    paths: [
      `<rect x="6" y="3.5" width="12" height="17" rx="0.75"/>`,
      `<circle cx="10.5" cy="10" r="1.25"/>`,
      `<circle cx="13.5" cy="13" r="1.25"/>`,
      `<circle cx="11" cy="15.5" r="0.9"/>`,
      `<circle cx="14" cy="8" r="0.9"/>`
    ]
  },
  "blood-gas": {
    cat: "lab", keywords: ["abg","arterial","poc","istat"],
    paths: [
      `<rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/>`,
      `<path d="M7 9h6"/>`,
      `<path d="M7 11.5h4"/>`,
      `<path d="M7 14h5"/>`,
      `<circle cx="16.5" cy="12" r="2"/>`
    ]
  },
  "culture-broth": {
    cat: "lab", keywords: ["liquid media","tube culture","microbio"],
    paths: [
      `<path d="M9.5 3.5h5l-.25 4-.25 12.5a2 2 0 0 1-4 0L9.75 7.5z"/>`,
      `<path d="M9 3.5h6"/>`,
      `<path d="M10 13c.7-.5 1.5-.5 2 0s1.3.5 2 0"/>`,
      `<circle cx="11" cy="16" r="0.5" fill="currentColor" stroke="none"/>`,
      `<circle cx="13" cy="17" r="0.5" fill="currentColor" stroke="none"/>`
    ]
  },
  "antibiogram": {
    cat: "lab", keywords: ["sensitivity","mic","disk diffusion","resistance"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<circle cx="9" cy="9.5" r="1"/>`,
      `<circle cx="15" cy="10" r="1"/>`,
      `<circle cx="10.5" cy="14.5" r="1"/>`,
      `<circle cx="15" cy="14.5" r="1"/>`,
      `<circle cx="9" cy="9.5" r="2.5" stroke-dasharray="1.5 1.5"/>`,
      `<circle cx="15" cy="14.5" r="2.5" stroke-dasharray="1.5 1.5"/>`
    ]
  },
  "tat-clock": {
    cat: "lab", keywords: ["turnaround","sla","time","report"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M12 7.5v5l3.5 1.5"/>`,
      `<path d="M3 4.5l1.5 1.5M21 4.5l-1.5 1.5"/>`
    ]
  },
  "sample-rejection": {
    cat: "lab", keywords: ["hemolysed","clotted","reject","reorder"],
    paths: [
      `<path d="M9 3.5h6v3h-6z"/>`,
      `<path d="M9 6.5h6v13a2.5 2.5 0 0 1-5 0z"/>`,
      `<path d="M16.5 6.5l4 4M20.5 6.5l-4 4"/>`
    ]
  },
  "panel-cbc": {
    cat: "lab", keywords: ["complete blood count","hematology","panel"],
    paths: [
      `<rect x="4" y="4" width="16" height="16" rx="1.5"/>`,
      `<circle cx="8.5" cy="9" r="1.25"/>`,
      `<circle cx="12" cy="9" r="1.25"/>`,
      `<circle cx="15.5" cy="9" r="1.25"/>`,
      `<path d="M7 14h10M7 16.5h7"/>`
    ]
  },
  "panel-lipid": {
    cat: "lab", keywords: ["cholesterol","ldl","hdl","triglycerides"],
    paths: [
      `<rect x="4" y="4" width="16" height="16" rx="1.5"/>`,
      `<path d="M7 16l3-3 3 1 4-5"/>`,
      `<path d="M7 8h4M7 10h6"/>`
    ]
  },
  "panel-thyroid": {
    cat: "lab", keywords: ["tsh","t3","t4","endocrine"],
    paths: [
      `<path d="M8 7c0-1.5 1-3 4-3s4 1.5 4 3v2c0 5-2 11-4 11s-4-6-4-11z"/>`,
      `<path d="M10 9.5c1 .5 3 .5 4 0"/>`
    ]
  },
  "panel-renal": {
    cat: "lab", keywords: ["urea","creatinine","kft","kidney panel"],
    paths: [
      `<path d="M9.5 4c-3 0-5.5 2.5-5.5 7s2 8.5 5.5 8.5c2 0 3.5-1 3.5-3 0-1.5-1-2.5-2.5-2.5"/>`,
      `<path d="M14.5 4c3 0 5.5 2.5 5.5 7s-2 8.5-5.5 8.5c-2 0-3.5-1-3.5-3 0-1.5 1-2.5 2.5-2.5"/>`
    ]
  },
  "panel-liver": {
    cat: "lab", keywords: ["sgot","sgpt","lft","bilirubin"],
    paths: [
      `<path d="M3.5 8c5-2 8-3 12-3 3 0 5 1.5 5 4 0 4-3 9-9 9-4.5 0-7.5-3-8-7"/>`,
      `<path d="M9 11.5c1 .5 2.5.5 3.5 0"/>`
    ]
  },
  "panel-glucose": {
    cat: "lab", keywords: ["sugar","fbs","ppbs","hba1c","diabetes"],
    paths: [
      `<path d="M12 4l4 5c1 1.5 1.5 3 1.5 4.5a5.5 5.5 0 0 1-11 0c0-1.5.5-3 1.5-4.5z"/>`,
      `<path d="M10 13.5c.7-.5 1.5-.5 2 0s1.3.5 2 0"/>`
    ]
  },

  /* ═══ 09 · PHARMACY ═════════════════════════════════════════ */
  "capsule": {
    cat: "pharmacy", keywords: ["medicine","drug","pill","two-tone"],
    paths: [
      `<rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-30 12 12)"/>`,
      `<path d="M9 7l6 10" transform="rotate(0)"/>`
    ]
  },
  "tablet": {
    cat: "pharmacy", keywords: ["pill","drug","round","scored"],
    paths: [
      `<circle cx="12" cy="12" r="6.5"/>`,
      `<path d="M5.5 12h13"/>`
    ]
  },
  "blister-pack": {
    cat: "pharmacy", keywords: ["strip","tablets","foil","pop"],
    paths: [
      `<rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/>`,
      `<circle cx="7.5" cy="9.5" r="1.25"/>`,
      `<circle cx="12" cy="9.5" r="1.25"/>`,
      `<circle cx="16.5" cy="9.5" r="1.25"/>`,
      `<circle cx="7.5" cy="14.5" r="1.25"/>`,
      `<circle cx="12" cy="14.5" r="1.25"/>`,
      `<circle cx="16.5" cy="14.5" r="1.25"/>`
    ]
  },
  "syrup-bottle": {
    cat: "pharmacy", keywords: ["liquid","cough","suspension","oral"],
    paths: [
      `<path d="M10 3.5h4v3h-4z"/>`,
      `<path d="M8 6.5h8v13a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1z"/>`,
      `<path d="M8 13h8"/>`,
      `<path d="M9.5 9.5h2"/>`
    ]
  },
  "ointment": {
    cat: "pharmacy", keywords: ["tube","cream","topical","gel"],
    paths: [
      `<path d="M5 8.5h12l3 3-3 3H5z"/>`,
      `<path d="M5 8.5v6"/>`,
      `<path d="M5 8.5l-1.5-1v8z" transform="translate(1.5 0)"/>`,
      `<path d="M3.5 7.5v9"/>`
    ]
  },
  "drops-bottle": {
    cat: "pharmacy", keywords: ["eye","ear","nasal","dropper"],
    paths: [
      `<path d="M11 3.5h2v3h-2z"/>`,
      `<path d="M9 6.5h6v3.5H9z"/>`,
      `<path d="M8 10h8l-.5 9.5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z"/>`,
      `<path d="M11 14l1 2 1-2"/>`
    ]
  },
  "inhaler-mdi": {
    cat: "pharmacy", keywords: ["asthma","copd","puffer","mdi"],
    paths: [
      `<path d="M9 3.5h4v6h-4z"/>`,
      `<path d="M7 9.5h8v9a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 7 18.5z"/>`,
      `<path d="M15 14h4"/>`
    ]
  },
  "injection-vial": {
    cat: "pharmacy", keywords: ["multidose","ampoule","im","sc"],
    paths: [
      `<path d="M9 4h6v2.5h-6z"/>`,
      `<path d="M8.5 6.5h7v12a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5z"/>`,
      `<path d="M8.5 14h7"/>`,
      `<path d="M9.5 6.5v-2.5"/>`
    ]
  },
  "ampoule": {
    cat: "pharmacy", keywords: ["glass","snap","single dose","injectable"],
    paths: [
      `<path d="M11 3.5h2v3l1 2v10a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-10l1-2z"/>`,
      `<path d="M10 8h4"/>`,
      `<path d="M11 10v4"/>`
    ]
  },
  "powder-sachet": {
    cat: "pharmacy", keywords: ["sachet","ors","granule","sprinkle"],
    paths: [
      `<path d="M5.5 5.5h13v13a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1z"/>`,
      `<path d="M5.5 8h13" stroke-dasharray="1 1.5"/>`,
      `<path d="M9 12.5h6M9 15h4"/>`
    ]
  },
  "rx": {
    cat: "pharmacy", keywords: ["prescription","script","take","℞"],
    paths: [
      `<rect x="4" y="3.5" width="16" height="17" rx="1.5"/>`,
      `<path d="M8 7h3a2 2 0 0 1 0 4H8z"/>`,
      `<path d="M8 11v4"/>`,
      `<path d="M10 11l3 4"/>`,
      `<path d="M14 16.5h3"/>`
    ]
  },
  "drug-database": {
    cat: "pharmacy", keywords: ["formulary","catalog","mims","monograph"],
    paths: [
      `<ellipse cx="12" cy="6" rx="7" ry="2.25"/>`,
      `<path d="M5 6v12c0 1.25 3.1 2.25 7 2.25s7-1 7-2.25V6"/>`,
      `<path d="M5 12c0 1.25 3.1 2.25 7 2.25s7-1 7-2.25"/>`,
      `<path d="M9 16h2.5"/>`
    ]
  },
  "interaction-warning": {
    cat: "pharmacy", keywords: ["drug-drug","contraindication","alert"],
    paths: [
      `<rect x="3" y="9" width="11" height="6" rx="3" transform="rotate(-30 8.5 12)"/>`,
      `<path d="M14.5 5l4.5 1.5L17.5 11l-4.5-1.5z"/>`,
      `<path d="M16 14l1.5 4.5"/>`,
      `<path d="M18.5 17l-2.5 1.5"/>`,
      `<path d="M16 14h3" stroke-dasharray="1 1"/>`
    ]
  },
  "dose-calc": {
    cat: "pharmacy", keywords: ["pediatric","weight-based","mg/kg","calculator"],
    paths: [
      `<rect x="5" y="3.5" width="14" height="17" rx="1.5"/>`,
      `<rect x="7" y="6" width="10" height="3" rx="0.5"/>`,
      `<circle cx="9" cy="12" r="0.9" fill="currentColor" stroke="none"/>`,
      `<circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none"/>`,
      `<circle cx="15" cy="12" r="0.9" fill="currentColor" stroke="none"/>`,
      `<circle cx="9" cy="15" r="0.9" fill="currentColor" stroke="none"/>`,
      `<circle cx="12" cy="15" r="0.9" fill="currentColor" stroke="none"/>`,
      `<circle cx="15" cy="15" r="0.9" fill="currentColor" stroke="none"/>`,
      `<circle cx="9" cy="18" r="0.9" fill="currentColor" stroke="none"/>`,
      `<circle cx="12" cy="18" r="0.9" fill="currentColor" stroke="none"/>`
    ]
  },
  "narcotic": {
    cat: "pharmacy", keywords: ["controlled","schedule","ndps","opioid"],
    paths: [
      `<path d="M12 3.5l8 4v9l-8 4-8-4v-9z"/>`,
      `<path d="M9 11.5h6M12 8.5v7"/>`,
      `<rect x="10.5" y="10" width="3" height="3" rx="0.4" fill="currentColor" stroke="none"/>`
    ]
  },
  "expiry": {
    cat: "pharmacy", keywords: ["batch","exp date","outdated","disposal"],
    paths: [
      `<rect x="3.75" y="5.25" width="16.5" height="15" rx="2"/>`,
      `<path d="M3.75 9.75h16.5M8.5 3.5v3.5M15.5 3.5v3.5"/>`,
      `<path d="M9 14.5l6 3M15 14.5l-6 3"/>`
    ]
  },
  "batch-number": {
    cat: "pharmacy", keywords: ["lot","tracking","manufacture","gtin"],
    paths: [
      `<rect x="3.5" y="6.5" width="17" height="11" rx="1"/>`,
      `<path d="M6 9.5v5M8 9.5v5M10.5 9.5v5M13 9.5v5M15.5 9.5v5M17.5 9.5v5"/>`,
      `<path d="M3.5 6.5l2-3h13l2 3"/>`
    ]
  },
  "compounding": {
    cat: "pharmacy", keywords: ["mortar","pestle","prep","mix"],
    paths: [
      `<path d="M4 12h16l-2 7a2 2 0 0 1-2 1.5h-8A2 2 0 0 1 6 19z"/>`,
      `<path d="M3.5 12h17"/>`,
      `<path d="M14 12V6.5a1.5 1.5 0 0 1 3 0L19 9"/>`
    ]
  },
  "dispense": {
    cat: "pharmacy", keywords: ["counter","handoff","fill","release"],
    paths: [
      `<rect x="3" y="9" width="11" height="6" rx="3" transform="rotate(-30 8.5 12)"/>`,
      `<path d="M16 14l3.5 3.5"/>`,
      `<path d="M19.5 14v3.5h-3.5"/>`
    ]
  },
  "stock-pharmacy": {
    cat: "pharmacy", keywords: ["shelf","inventory","drugs","supply"],
    paths: [
      `<path d="M3.5 5h17M3.5 12h17M3.5 19h17"/>`,
      `<rect x="5" y="6" width="2.5" height="5" rx="0.3"/>`,
      `<rect x="9" y="6" width="2.5" height="5" rx="0.3"/>`,
      `<rect x="13" y="6" width="2.5" height="5" rx="0.3"/>`,
      `<rect x="6" y="13" width="2.5" height="5" rx="0.3"/>`,
      `<rect x="10" y="13" width="2.5" height="5" rx="0.3"/>`,
      `<rect x="14" y="13" width="2.5" height="5" rx="0.3"/>`
    ]
  },
  "pharmacy-counter": {
    cat: "pharmacy", keywords: ["counter","window","dispensing","handover"],
    paths: [
      `<path d="M3 19.5h18"/>`,
      `<path d="M5 19.5v-7h14v7"/>`,
      `<path d="M5 12.5h14"/>`,
      `<rect x="9" y="6" width="6" height="6.5" rx="0.5"/>`,
      `<path d="M12 6V3.5"/>`
    ]
  },
  "iv-prep": {
    cat: "pharmacy", keywords: ["admixture","compound","sterile","cleanroom"],
    paths: [
      `<path d="M9 3.5h6v3l-2 2v8a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-8l-2-2z"/>`,
      `<path d="M11 14l1 2 1-2"/>`,
      `<path d="M16 16l3-3"/>`,
      `<path d="M19 13v3h-3"/>`
    ]
  },
  "tpn": {
    cat: "pharmacy", keywords: ["nutrition","parenteral","feed","amino"],
    paths: [
      `<path d="M5.5 4.5h13v3l-2 2v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-9l-2-2z"/>`,
      `<path d="M8 12h8"/>`,
      `<path d="M9.5 8h5"/>`,
      `<path d="M12 17v2"/>`
    ]
  },
  "schedule-h": {
    cat: "pharmacy", keywords: ["prescription only","red triangle","rx-only","india"],
    paths: [
      `<path d="M12 3.5l9.5 16.5h-19z"/>`,
      `<path d="M9.5 14V9.5M14.5 14V9.5M9.5 12h5"/>`
    ]
  },
  "generic": {
    cat: "pharmacy", keywords: ["unbranded","molecule","substitute","generic name"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M9.5 9.5l5 5M14.5 9.5l-5 5"/>`,
      `<path d="M9 13.5h6"/>`
    ]
  },
  "brand": {
    cat: "pharmacy", keywords: ["trade name","branded","manufacturer","logo"],
    paths: [
      `<path d="M5 4.5h11l3.5 3.5v3.5l-3.5 3.5L9 22l-7-7L9 8h-4z"/>`,
      `<circle cx="14.5" cy="9.5" r="1.25" fill="currentColor" stroke="none"/>`
    ]
  },
  "scan-prescription": {
    cat: "pharmacy", keywords: ["e-rx","upload","read","ocr"],
    paths: [
      `<rect x="5" y="3.5" width="14" height="17" rx="1.5"/>`,
      `<path d="M3 8.5h2M3 15.5h2M19 8.5h2M19 15.5h2"/>`,
      `<path d="M8 9h6"/>`,
      `<path d="M8 12h8"/>`,
      `<path d="M8 15h5"/>`
    ]
  },
  "refill": {
    cat: "pharmacy", keywords: ["repeat","reorder","auto","subscription"],
    paths: [
      `<path d="M20 5.5v5h-5"/>`,
      `<path d="M19.5 13a8 8 0 1 1-3-9.5L20 5.5"/>`,
      `<rect x="9.5" y="10" width="5" height="5" rx="2.5"/>`
    ]
  },
  "out-of-stock": {
    cat: "pharmacy", keywords: ["empty","unavailable","backorder","nil"],
    paths: [
      `<rect x="3" y="9" width="11" height="6" rx="3" transform="rotate(-30 8.5 12)"/>`,
      `<path d="M4 4l16 16" stroke-width="2"/>`
    ]
  },
  "indent-pharmacy": {
    cat: "pharmacy", keywords: ["request","issue","ward stock","slip"],
    paths: [
      `<path d="M5.5 3.5h11l3 3v14h-14z"/>`,
      `<path d="M16.5 3.5v3h3"/>`,
      `<path d="M8 11h8M8 13.5h8M8 16h5"/>`,
      `<circle cx="14.5" cy="16" r="0.9" fill="currentColor" stroke="none"/>`
    ]
  },
  "return-pharmacy": {
    cat: "pharmacy", keywords: ["unused","ward return","credit","reverse"],
    paths: [
      `<rect x="3" y="9" width="11" height="6" rx="3" transform="rotate(-30 8.5 12)"/>`,
      `<path d="M19 5.5v4h-4"/>`,
      `<path d="M19 9.5a4.5 4.5 0 0 0-7-1"/>`
    ]
  },
  "cold-chain": {
    cat: "pharmacy", keywords: ["fridge","2-8","cold storage","vaccine"],
    paths: [
      `<rect x="6" y="3.5" width="12" height="17" rx="1.5"/>`,
      `<path d="M6 11h12"/>`,
      `<path d="M9 7v2M9 14v2"/>`,
      `<path d="M14.5 4.5l1.5 1.5"/>`
    ]
  },
  "vaccine-vial": {
    cat: "pharmacy", keywords: ["immunisation","jab","schedule","booster"],
    paths: [
      `<rect x="6.5" y="9" width="11" height="6" rx="0.5" transform="rotate(-45 12 12)"/>`,
      `<path d="M16 4l4 4"/>`,
      `<path d="M10.5 9.5l4 4"/>`,
      `<path d="M5 19l2-2"/>`,
      `<path d="M3.5 20.5l1.5-1.5"/>`,
      `<path d="M14 7l3 3" stroke-width="2.5"/>`
    ]
  },
  "dispenser-machine": {
    cat: "pharmacy", keywords: ["robot","automation","cabinet","pyxis"],
    paths: [
      `<rect x="4" y="3.5" width="16" height="17" rx="1.5"/>`,
      `<rect x="6" y="6" width="5" height="3" rx="0.4"/>`,
      `<rect x="13" y="6" width="5" height="3" rx="0.4"/>`,
      `<rect x="6" y="11" width="5" height="3" rx="0.4"/>`,
      `<rect x="13" y="11" width="5" height="3" rx="0.4"/>`,
      `<rect x="8.5" y="16" width="7" height="2.5" rx="0.4"/>`
    ]
  },
  "smart-shelf": {
    cat: "pharmacy", keywords: ["rfid","tracked","kanban","auto-count"],
    paths: [
      `<path d="M3.5 7h17M3.5 12h17M3.5 17h17"/>`,
      `<rect x="5" y="8" width="2.5" height="3.5" rx="0.3"/>`,
      `<rect x="9" y="8" width="2.5" height="3.5" rx="0.3"/>`,
      `<rect x="13" y="13" width="2.5" height="3.5" rx="0.3"/>`,
      `<circle cx="18" cy="9.5" r="1" fill="currentColor" stroke="none"/>`,
      `<circle cx="18" cy="14.5" r="1" fill="currentColor" stroke="none"/>`
    ]
  },
  "label-print": {
    cat: "pharmacy", keywords: ["sticker","instructions","sig","dosage label"],
    paths: [
      `<path d="M7 8.5V4h10v4.5"/>`,
      `<rect x="3.5" y="8.5" width="17" height="8" rx="1.5"/>`,
      `<rect x="7" y="14.5" width="10" height="6" rx="0.5"/>`,
      `<path d="M9 17h6M9 19h4"/>`,
      `<circle cx="17" cy="11.5" r="0.5" fill="currentColor" stroke="none"/>`
    ]
  },
  "patient-counsel": {
    cat: "pharmacy", keywords: ["education","instructions","explain","sig"],
    paths: [
      `<circle cx="9" cy="8" r="3"/>`,
      `<path d="M3.5 19c1-3 3-4.5 5.5-4.5"/>`,
      `<path d="M14 7.5h6.5l-.5 6h-3l-2 1.5v-1.5h-1z"/>`,
      `<path d="M16 9.5h3M16 11.5h2"/>`
    ]
  },
  "med-reconcile": {
    cat: "pharmacy", keywords: ["reconciliation","admit","discharge","review"],
    paths: [
      `<path d="M5.5 5.5h6v13h-6z"/>`,
      `<path d="M12.5 5.5h6v13h-6z"/>`,
      `<path d="M11.5 9h1M11.5 12h1M11.5 15h1"/>`,
      `<path d="M7 9h3M7 12h3M7 15h3"/>`,
      `<path d="M14 9h3M14 12h3M14 15h3"/>`
    ]
  },
  "iv-pump": {
    cat: "pharmacy", keywords: ["infusion pump","ml/hr","controlled","bolus"],
    paths: [
      `<rect x="4" y="6" width="16" height="11" rx="1.5"/>`,
      `<rect x="6.5" y="8.5" width="7" height="3" rx="0.4"/>`,
      `<circle cx="16" cy="14" r="1"/>`,
      `<path d="M12 17v3M9 20.5h6"/>`
    ]
  },
  "barcode-med": {
    cat: "pharmacy", keywords: ["med bar","verify","bcma","scan"],
    paths: [
      `<rect x="3.5" y="6" width="17" height="12" rx="1"/>`,
      `<path d="M6 9v6M8 9v6M10 9v6M12.5 9v6M14.5 9v6M16.5 9v6M18 9v6"/>`,
      `<path d="M9.5 19h5"/>`
    ]
  },
  "thermolabile": {
    cat: "pharmacy", keywords: ["heat sensitive","keep cool","snowflake","cold"],
    paths: [
      `<path d="M12 3.5v17M3.5 12h17"/>`,
      `<path d="M5 5l14 14M19 5L5 19"/>`,
      `<path d="M9 5l3 3 3-3M9 19l3-3 3 3M5 9l3 3-3 3M19 9l-3 3 3 3"/>`
    ]
  },
  "shelf-life": {
    cat: "pharmacy", keywords: ["expiry","fefo","rotation","stock age"],
    paths: [
      `<circle cx="12" cy="13" r="7.5"/>`,
      `<path d="M12 8v5l3 2"/>`,
      `<path d="M9 4h6"/>`
    ]
  },
  "near-expiry": {
    cat: "pharmacy", keywords: ["soon","amber","within 90 days","fefo alert"],
    paths: [
      `<rect x="3.75" y="5.25" width="16.5" height="15" rx="2"/>`,
      `<path d="M3.75 9.75h16.5M8.5 3.5v3.5M15.5 3.5v3.5"/>`,
      `<path d="M12 12.5v3"/>`,
      `<circle cx="12" cy="17.5" r="0.7" fill="currentColor" stroke="none"/>`
    ]
  },
  "narcotic-register": {
    cat: "pharmacy", keywords: ["controlled register","double lock","logbook","schedule x"],
    paths: [
      `<path d="M5 4h14v17H7a2 2 0 0 1-2-2z"/>`,
      `<path d="M5 8h14"/>`,
      `<path d="M9 11.5h6M9 14h6M9 16.5h4"/>`,
      `<rect x="14.5" y="15.5" width="3" height="3" rx="0.4" fill="currentColor" stroke="none"/>`
    ]
  },
  "fefo": {
    cat: "pharmacy", keywords: ["first expiry first out","rotation","stock"],
    paths: [
      `<rect x="3.5" y="7" width="5" height="10" rx="0.5"/>`,
      `<rect x="9.5" y="7" width="5" height="10" rx="0.5"/>`,
      `<rect x="15.5" y="7" width="5" height="10" rx="0.5"/>`,
      `<path d="M5 11h2M11 11h2M17 11h2"/>`,
      `<path d="M2 19.5l3-1.5 3 1.5"/>`
    ]
  },
  "bulk-pack": {
    cat: "pharmacy", keywords: ["case","carton","wholesale","ctn"],
    paths: [
      `<path d="M4 7l8-3.5L20 7v10l-8 3.5L4 17z"/>`,
      `<path d="M4 7l8 3.5L20 7M12 10.5v10"/>`,
      `<path d="M8 5.5l8 3.5"/>`
    ]
  },
  "stat-order": {
    cat: "pharmacy", keywords: ["urgent","now","priority","red"],
    paths: [
      `<path d="M12 3.5l2.5 5.5 6 .9-4.35 4.25 1.05 6.05L12 17.3l-5.2 2.85 1.05-6.05L3.6 9.9l6-.9z"/>`,
      `<path d="M11 9.5h2v3l1 1"/>`
    ]
  },
  "medication-list": {
    cat: "pharmacy", keywords: ["chart","mar","schedule","timing"],
    paths: [
      `<rect x="4" y="4" width="16" height="16" rx="1.5"/>`,
      `<circle cx="7.5" cy="9" r="1.25"/>`,
      `<path d="M10.5 9h7"/>`,
      `<circle cx="7.5" cy="13" r="1.25"/>`,
      `<path d="M10.5 13h7"/>`,
      `<circle cx="7.5" cy="17" r="1.25"/>`,
      `<path d="M10.5 17h5"/>`
    ]
  },

  /* ═══ 10 · BED · WARD MANAGEMENT ════════════════════════════ */
  "bed": {
    cat: "bed", keywords: ["ward","inpatient","admit","cot"],
    paths: [
      `<path d="M3.5 18.5h17"/>`,
      `<path d="M3.5 18.5v-9"/>`,
      `<path d="M20.5 18.5v-6"/>`,
      `<path d="M3.5 12.5h17"/>`,
      `<path d="M5 12.5c0-2 1.5-3 3.5-3h3.5v3"/>`,
      `<circle cx="7" cy="10.5" r="1.5"/>`
    ]
  },
  "bed-occupied": {
    cat: "bed", keywords: ["filled","patient","admitted","red"],
    paths: [
      `<path d="M3.5 18.5h17"/>`,
      `<path d="M3.5 18.5v-9"/>`,
      `<path d="M20.5 18.5v-6"/>`,
      `<path d="M3.5 12.5h17"/>`,
      `<path d="M5 12.5c0-2 1.5-3 3.5-3h3.5v3"/>`,
      `<circle cx="7" cy="10.5" r="1.5"/>`,
      `<rect x="3.5" y="12.5" width="17" height="6" rx="0.5" fill="currentColor" fill-opacity="0.18" stroke="none"/>`
    ]
  },
  "bed-vacant": {
    cat: "bed", keywords: ["empty","available","green","ready"],
    paths: [
      `<path d="M3.5 18.5h17"/>`,
      `<path d="M3.5 18.5v-9"/>`,
      `<path d="M20.5 18.5v-6"/>`,
      `<path d="M3.5 12.5h17"/>`,
      `<path d="M14.5 15l1.5 1.5 3-3"/>`
    ]
  },
  "bed-cleaning": {
    cat: "bed", keywords: ["housekeeping","turnover","sanitize","amber"],
    paths: [
      `<path d="M3.5 18.5h17"/>`,
      `<path d="M3.5 18.5v-9"/>`,
      `<path d="M20.5 18.5v-6"/>`,
      `<path d="M3.5 12.5h17"/>`,
      `<path d="M14.5 16l-1 2 1 1.5 1-1.5-1-2z"/>`,
      `<path d="M14.5 16v-1.5"/>`
    ]
  },
  "bed-blocked": {
    cat: "bed", keywords: ["maintenance","oos","unavailable"],
    paths: [
      `<path d="M3.5 18.5h17"/>`,
      `<path d="M3.5 18.5v-9"/>`,
      `<path d="M20.5 18.5v-6"/>`,
      `<path d="M3.5 12.5h17"/>`,
      `<path d="M5 14l14 4M19 14L5 18"/>`
    ]
  },
  "bed-icu": {
    cat: "bed", keywords: ["critical care","monitored","ventilator"],
    paths: [
      `<path d="M3 18.5h18"/>`,
      `<path d="M3 18.5v-9"/>`,
      `<path d="M21 18.5v-7"/>`,
      `<path d="M3 12.5h18"/>`,
      `<path d="M5 12.5c0-2 1.5-3 3.5-3h3.5v3"/>`,
      `<rect x="16" y="3.5" width="5" height="5.5" rx="0.5"/>`,
      `<path d="M17 6.5h3"/>`,
      `<path d="M18.5 5v3"/>`
    ]
  },
  "bed-day-care": {
    cat: "bed", keywords: ["daycare","short stay","procedure","recliner"],
    paths: [
      `<path d="M3.5 18.5h17"/>`,
      `<path d="M3.5 18.5v-7"/>`,
      `<path d="M20.5 18.5v-3"/>`,
      `<path d="M5 11.5l3-3h7v7"/>`,
      `<path d="M3.5 15.5h17"/>`
    ]
  },
  "bed-paediatric": {
    cat: "bed", keywords: ["child","cot","crib","peds"],
    paths: [
      `<path d="M5 18.5h14"/>`,
      `<path d="M5 18.5V8"/>`,
      `<path d="M19 18.5V8"/>`,
      `<path d="M5 13h14"/>`,
      `<path d="M7 8v5M9 8v5M11 8v5M13 8v5M15 8v5M17 8v5"/>`
    ]
  },
  "bed-isolation": {
    cat: "bed", keywords: ["airborne","negative pressure","barrier","quarantine"],
    paths: [
      `<rect x="3" y="4" width="18" height="16" rx="1.5" stroke-dasharray="2 2"/>`,
      `<path d="M5 17h14"/>`,
      `<path d="M5 17v-5"/>`,
      `<path d="M19 17v-3"/>`,
      `<path d="M5 12.5h14"/>`,
      `<circle cx="8" cy="11" r="1"/>`
    ]
  },
  "bed-private": {
    cat: "bed", keywords: ["single","deluxe","premium","room"],
    paths: [
      `<rect x="3" y="3.5" width="18" height="17" rx="1.5"/>`,
      `<path d="M6 17h12"/>`,
      `<path d="M6 17v-4"/>`,
      `<path d="M18 17v-3"/>`,
      `<path d="M6 13.5h12"/>`,
      `<circle cx="8.5" cy="12.5" r="0.9"/>`,
      `<path d="M16 6.5h2v2"/>`
    ]
  },
  "bed-shared": {
    cat: "bed", keywords: ["semi private","double","twin"],
    paths: [
      `<path d="M2.5 18.5h19"/>`,
      `<path d="M3 18.5v-5"/>`,
      `<path d="M21 18.5v-5"/>`,
      `<path d="M3 14h8M13 14h8"/>`,
      `<circle cx="5" cy="12" r="1"/>`,
      `<circle cx="15" cy="12" r="1"/>`
    ]
  },
  "ward": {
    cat: "bed", keywords: ["bay","unit","floor","general"],
    paths: [
      `<path d="M3 19.5h18"/>`,
      `<path d="M5 19.5V6h14v13.5"/>`,
      `<path d="M5 10h14"/>`,
      `<path d="M9 6v4M15 6v4M9 10v4M15 10v4M9 14v5.5M15 14v5.5"/>`
    ]
  },
  "bed-board": {
    cat: "bed", keywords: ["dashboard","map","occupancy","grid"],
    paths: [
      `<rect x="3.5" y="4" width="17" height="16" rx="1"/>`,
      `<path d="M3.5 9h17M3.5 14.5h17"/>`,
      `<path d="M9 4v16M14.5 4v16"/>`,
      `<rect x="5" y="6" width="2.5" height="1.5" fill="currentColor" stroke="none"/>`,
      `<rect x="10.5" y="11.5" width="2.5" height="1.5" fill="currentColor" stroke="none"/>`,
      `<rect x="16" y="17" width="2.5" height="1.5" fill="currentColor" stroke="none"/>`
    ]
  },
  "admit": {
    cat: "bed", keywords: ["admission","check-in","ipd entry","reserve"],
    paths: [
      `<path d="M3.5 18.5h17"/>`,
      `<path d="M3.5 18.5v-7"/>`,
      `<path d="M20.5 18.5v-5"/>`,
      `<path d="M3.5 14.5h17"/>`,
      `<path d="M14 5.5l5 5-5 5M19 10.5h-9"/>`
    ]
  },
  "discharge": {
    cat: "bed", keywords: ["release","check-out","summary","home"],
    paths: [
      `<path d="M3.5 18.5h17"/>`,
      `<path d="M3.5 18.5v-7"/>`,
      `<path d="M20.5 18.5v-5"/>`,
      `<path d="M3.5 14.5h17"/>`,
      `<path d="M19 5.5l-5 5 5 5M14 10.5h9"/>`
    ]
  },
  "transfer-bed": {
    cat: "bed", keywords: ["move","shift","swap","reassign"],
    paths: [
      `<path d="M3 9h7v-2l4 3-4 3v-2H3z"/>`,
      `<path d="M21 15h-7v-2l-4 3 4 3v-2h7z"/>`
    ]
  },
  "bed-request": {
    cat: "bed", keywords: ["allocate","reserve","queue","need bed"],
    paths: [
      `<path d="M3.5 18.5h17"/>`,
      `<path d="M3.5 18.5v-7"/>`,
      `<path d="M20.5 18.5v-5"/>`,
      `<path d="M3.5 14.5h17"/>`,
      `<circle cx="17" cy="6.5" r="3"/>`,
      `<path d="M17 5v3M15.5 6.5h3"/>`
    ]
  },
  "ward-rounds": {
    cat: "bed", keywords: ["doctor","clinical rounds","review","walkthrough"],
    paths: [
      `<path d="M3 19.5h18"/>`,
      `<path d="M5 19.5V8h14v11.5"/>`,
      `<path d="M5 12h14"/>`,
      `<circle cx="9" cy="14" r="0.9"/>`,
      `<circle cx="15" cy="14" r="0.9"/>`,
      `<path d="M7 17l3-2 4 1.5 3-2"/>`
    ]
  },
  "occupancy-rate": {
    cat: "bed", keywords: ["%","kpi","fill rate","gauge"],
    paths: [
      `<path d="M3.5 13a8.5 8.5 0 1 1 17 0"/>`,
      `<path d="M12 13l4-4"/>`,
      `<circle cx="12" cy="13" r="1" fill="currentColor" stroke="none"/>`
    ]
  },
  "los": {
    cat: "bed", keywords: ["length of stay","days","kpi","trend"],
    paths: [
      `<path d="M3.5 18.5h17"/>`,
      `<path d="M5 18.5v-4M9 18.5v-7M13 18.5v-5M17 18.5v-9"/>`,
      `<path d="M3.5 4h17" stroke-dasharray="2 2"/>`
    ]
  },
  "bed-screen": {
    cat: "bed", keywords: ["headend","pillow tv","display","unit"],
    paths: [
      `<rect x="4" y="4.5" width="16" height="10" rx="1"/>`,
      `<path d="M9 14.5v3M15 14.5v3M7 17.5h10"/>`,
      `<path d="M8 8h8M8 10.5h5"/>`
    ]
  },
  "linen": {
    cat: "bed", keywords: ["bedsheet","laundry","change","bedding"],
    paths: [
      `<path d="M5 4.5h14l-2 16h-10z"/>`,
      `<path d="M5 4.5l1.5 4 5-2 5 2 1.5-4"/>`,
      `<path d="M8 12h8"/>`
    ]
  },
  "housekeeping-staff": {
    cat: "bed", keywords: ["clean","mop","staff","sanitize"],
    paths: [
      `<path d="M5 20l3-3 5 5" transform="translate(0 -2)"/>`,
      `<path d="M11 14l5-5 4 4-5 5z"/>`,
      `<path d="M14 11l3 3"/>`,
      `<path d="M16 6l2-2"/>`
    ]
  },
  "patient-call": {
    cat: "bed", keywords: ["nurse call","button","bedside","alert"],
    paths: [
      `<rect x="6" y="3.5" width="12" height="14" rx="1.5"/>`,
      `<circle cx="12" cy="10" r="2.5"/>`,
      `<path d="M12 17.5v3"/>`,
      `<path d="M9 20.5h6"/>`
    ]
  },
  "patient-monitor": {
    cat: "bed", keywords: ["bedside monitor","vitals","screen","ecg"],
    paths: [
      `<rect x="3" y="5" width="18" height="13" rx="1.5"/>`,
      `<path d="M5 12h3l1.5-3 2 6 2-3h6"/>`,
      `<path d="M9 21h6"/>`,
      `<path d="M12 18v3"/>`
    ]
  },
  "oxygen-port": {
    cat: "bed", keywords: ["o2 outlet","wall gas","supply","piped"],
    paths: [
      `<rect x="6" y="3.5" width="12" height="17" rx="1"/>`,
      `<circle cx="12" cy="10" r="2.5"/>`,
      `<path d="M11.5 10l1 .5.5-1"/>`,
      `<path d="M9 16h6M9 18h4"/>`
    ]
  },
  "suction-port": {
    cat: "bed", keywords: ["wall vacuum","suction","outlet","gas"],
    paths: [
      `<rect x="6" y="3.5" width="12" height="17" rx="1"/>`,
      `<circle cx="12" cy="10" r="2.5"/>`,
      `<circle cx="12" cy="10" r="0.9" fill="currentColor" stroke="none"/>`,
      `<path d="M9 16h6M9 18h4"/>`
    ]
  },
  "headboard": {
    cat: "bed", keywords: ["bed station","equipment rail","panel"],
    paths: [
      `<rect x="3" y="4" width="18" height="6" rx="1"/>`,
      `<circle cx="7" cy="7" r="0.7" fill="currentColor" stroke="none"/>`,
      `<circle cx="10" cy="7" r="0.7" fill="currentColor" stroke="none"/>`,
      `<circle cx="13" cy="7" r="0.7" fill="currentColor" stroke="none"/>`,
      `<circle cx="16" cy="7" r="0.7" fill="currentColor" stroke="none"/>`,
      `<path d="M3.5 14h17"/>`,
      `<path d="M3.5 14v6"/>`,
      `<path d="M20.5 14v4"/>`
    ]
  },
  "patient-band": {
    cat: "bed", keywords: ["wristband","id band","barcode","name"],
    paths: [
      `<path d="M5 9.5l3 -2.5h8l3 2.5v5l-3 2.5h-8l-3 -2.5z"/>`,
      `<rect x="9" y="10" width="6" height="4" rx="0.4"/>`,
      `<path d="M10 11.5h4M10 13h2.5"/>`
    ]
  },
  "bed-side-table": {
    cat: "bed", keywords: ["bedside","trolley","side table","cabinet"],
    paths: [
      `<rect x="6" y="6" width="12" height="13" rx="1"/>`,
      `<path d="M6 11h12"/>`,
      `<path d="M6 15h12"/>`,
      `<rect x="11" y="8" width="2" height="1.5" rx="0.2" fill="currentColor" stroke="none"/>`,
      `<rect x="11" y="12.5" width="2" height="1" rx="0.2" fill="currentColor" stroke="none"/>`
    ]
  },
  "bed-curtain": {
    cat: "bed", keywords: ["privacy","screen","drape","cubicle"],
    paths: [
      `<path d="M3.5 4.5h17"/>`,
      `<path d="M5 4.5c1 5 0 10 1 14M9 4.5c-1 5 0 10-1 14M13 4.5c1 5 0 10 1 14M17 4.5c-1 5 0 10-1 14"/>`,
      `<circle cx="6" cy="4.5" r="0.6" fill="currentColor" stroke="none"/>`,
      `<circle cx="10" cy="4.5" r="0.6" fill="currentColor" stroke="none"/>`,
      `<circle cx="14" cy="4.5" r="0.6" fill="currentColor" stroke="none"/>`,
      `<circle cx="18" cy="4.5" r="0.6" fill="currentColor" stroke="none"/>`
    ]
  },
  "bed-bath": {
    cat: "bed", keywords: ["sponge bath","care","hygiene","towel"],
    paths: [
      `<path d="M3.5 18.5h17"/>`,
      `<path d="M3.5 18.5v-3"/>`,
      `<path d="M20.5 18.5v-3"/>`,
      `<path d="M3.5 15.5h17"/>`,
      `<path d="M9 13c.5-1 1.5-1 2 0s1.5 1 2 0 1.5-1 2 0"/>`,
      `<circle cx="11" cy="9" r="1.5"/>`
    ]
  },
  "bed-position": {
    cat: "bed", keywords: ["fowler","semi","incline","head up"],
    paths: [
      `<path d="M3 18.5h18"/>`,
      `<path d="M3 18.5v-3"/>`,
      `<path d="M21 18.5v-7"/>`,
      `<path d="M3 15.5h18"/>`,
      `<path d="M14 15.5l-3-4 4-2v6"/>`
    ]
  },
  "patient-fall-risk": {
    cat: "bed", keywords: ["yellow band","risk","prevention","alert"],
    paths: [
      `<path d="M12 3.5l9.5 16.5h-19z"/>`,
      `<path d="M9 13.5l3-3 3 3"/>`,
      `<path d="M9 16.5l3-3 3 3"/>`
    ]
  },
  "infection-flag": {
    cat: "bed", keywords: ["mrsa","infection","precaution","isolation flag"],
    paths: [
      `<path d="M5 4v17"/>`,
      `<path d="M5 4h12l-2.5 4 2.5 4h-12"/>`,
      `<circle cx="11" cy="8" r="0.9" fill="currentColor" stroke="none"/>`
    ]
  },
  "dnd": {
    cat: "bed", keywords: ["do not disturb","rest","quiet","privacy"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M7.5 12h9"/>`
    ]
  },
  "vitals-chart": {
    cat: "bed", keywords: ["bedside chart","trends","obs","vital signs"],
    paths: [
      `<rect x="4" y="4" width="16" height="16" rx="1.5"/>`,
      `<path d="M6 14l3-4 3 2 5-6"/>`,
      `<circle cx="6" cy="14" r="0.7" fill="currentColor" stroke="none"/>`,
      `<circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none"/>`,
      `<circle cx="12" cy="12" r="0.7" fill="currentColor" stroke="none"/>`,
      `<circle cx="17" cy="6" r="0.7" fill="currentColor" stroke="none"/>`
    ]
  },
  "intake-output": {
    cat: "bed", keywords: ["i/o","fluid balance","record","ml"],
    paths: [
      `<path d="M8 4.5l-3 7a3 3 0 1 0 6 0z"/>`,
      `<path d="M16 11.5l3 7a3 3 0 1 1-6 0z"/>`,
      `<path d="M12 5v14"/>`,
      `<path d="M11 7l1-1 1 1M11 17l1 1 1-1"/>`
    ]
  },

  /* ═══ 11 · HUMAN RESOURCES ══════════════════════════════════ */
  "employee": {
    cat: "hr", keywords: ["staff","worker","person","badge"],
    paths: [
      `<circle cx="12" cy="8" r="3.25"/>`,
      `<path d="M5 19.5c1-3.5 4-5.25 7-5.25s6 1.75 7 5.25"/>`,
      `<rect x="9.5" y="13" width="5" height="2" rx="0.3" fill="currentColor" stroke="none"/>`
    ]
  },
  "employee-id": {
    cat: "hr", keywords: ["badge","card","lanyard","photo id"],
    paths: [
      `<rect x="4" y="6" width="16" height="13" rx="1.5"/>`,
      `<circle cx="9" cy="11.5" r="2"/>`,
      `<path d="M6.5 16.5c.5-1.5 1.5-2.5 2.5-2.5s2 1 2.5 2.5"/>`,
      `<path d="M14 11h4M14 13.5h3M14 16h4"/>`,
      `<path d="M10 6V4h4v2"/>`
    ]
  },
  "attendance": {
    cat: "hr", keywords: ["check-in","clock in","punch","present"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M8.5 12.5l2.5 2.5 5-5.5"/>`
    ]
  },
  "absence": {
    cat: "hr", keywords: ["leave","off","absent","gone"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M9 9l6 6M15 9l-6 6"/>`
    ]
  },
  "leave": {
    cat: "hr", keywords: ["holiday","vacation","time off","calendar"],
    paths: [
      `<rect x="3.75" y="5.25" width="16.5" height="15" rx="2"/>`,
      `<path d="M3.75 9.75h16.5M8.5 3.5v3.5M15.5 3.5v3.5"/>`,
      `<path d="M11 13l-2 2 2 2M9 15h6"/>`
    ]
  },
  "shift": {
    cat: "hr", keywords: ["roster","schedule","duty","rotation"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M12 7v5l3.5 2"/>`,
      `<path d="M3.5 12a8.5 8.5 0 0 1 5-7.75"/>`
    ]
  },
  "roster": {
    cat: "hr", keywords: ["schedule grid","duty list","calendar","week"],
    paths: [
      `<rect x="3" y="5" width="18" height="14" rx="1"/>`,
      `<path d="M3 9h18M8 5v14M13 5v14M18 5v14"/>`,
      `<rect x="4" y="11" width="3" height="2" rx="0.3" fill="currentColor" stroke="none"/>`,
      `<rect x="14" y="15" width="3" height="2" rx="0.3" fill="currentColor" stroke="none"/>`
    ]
  },
  "payroll": {
    cat: "hr", keywords: ["salary","pay","wages","stub"],
    paths: [
      `<rect x="3.5" y="4.5" width="17" height="13" rx="1.5"/>`,
      `<circle cx="12" cy="11" r="2.5"/>`,
      `<path d="M11.5 10h1.5M11 12h2"/>`,
      `<circle cx="6" cy="11" r="0.7" fill="currentColor" stroke="none"/>`,
      `<circle cx="18" cy="11" r="0.7" fill="currentColor" stroke="none"/>`,
      `<path d="M6 20l4-2 4 2 4-2"/>`
    ]
  },
  "salary-slip": {
    cat: "hr", keywords: ["payslip","earnings","deductions","net pay"],
    paths: [
      `<path d="M5 3.5h11l3 3v14h-14z"/>`,
      `<path d="M16 3.5v3h3"/>`,
      `<path d="M7.5 11h6M7.5 13.5h8M7.5 16h5"/>`,
      `<path d="M14 17l1.5 1.5 2.5-2.5"/>`
    ]
  },
  "appraisal": {
    cat: "hr", keywords: ["review","kpi","performance","rating"],
    paths: [
      `<rect x="4" y="3.5" width="16" height="17" rx="1.5"/>`,
      `<path d="M7 8h10M7 11h10"/>`,
      `<path d="M7.5 16l1 1 1.5-1.5"/>`,
      `<path d="M11.5 16l1 1 1.5-1.5"/>`,
      `<path d="M15.5 16l1 1 1.5-1.5"/>`
    ]
  },
  "training": {
    cat: "hr", keywords: ["learning","course","graduate","cap"],
    paths: [
      `<path d="M3 9.5l9-4 9 4-9 4z"/>`,
      `<path d="M7 11.5v4c0 1.5 2.5 2.5 5 2.5s5-1 5-2.5v-4"/>`,
      `<path d="M19 9.5v5"/>`
    ]
  },
  "certification": {
    cat: "hr", keywords: ["cert","license","credential","ribbon"],
    paths: [
      `<circle cx="12" cy="9.5" r="5.25"/>`,
      `<path d="M12 6.5v6M9.5 9h5"/>`,
      `<path d="M9 14l-1.5 6 4.5-2 4.5 2-1.5-6"/>`
    ]
  },
  "designation": {
    cat: "hr", keywords: ["title","role","position","hierarchy"],
    paths: [
      `<circle cx="12" cy="6" r="2.5"/>`,
      `<path d="M12 8.5v3M12 11.5h-5v3"/>`,
      `<path d="M12 11.5h5v3"/>`,
      `<rect x="4.5" y="14.5" width="5" height="5" rx="0.5"/>`,
      `<rect x="14.5" y="14.5" width="5" height="5" rx="0.5"/>`
    ]
  },
  "department-hr": {
    cat: "hr", keywords: ["org","team","unit","group"],
    paths: [
      `<rect x="3" y="5" width="6" height="14" rx="1"/>`,
      `<rect x="11" y="5" width="6" height="14" rx="1"/>`,
      `<path d="M19 5h2v14h-2"/>`,
      `<path d="M5 9h2M5 12h2M5 15h2"/>`,
      `<path d="M13 9h2M13 12h2M13 15h2"/>`
    ]
  },
  "hire": {
    cat: "hr", keywords: ["recruit","onboard","add staff","welcome"],
    paths: [
      `<circle cx="10" cy="8" r="3.25"/>`,
      `<path d="M3.5 19c1-3.5 3.5-5.25 6.5-5.25"/>`,
      `<path d="M17 6.5v6M14 9.5h6"/>`
    ]
  },
  "terminate": {
    cat: "hr", keywords: ["fire","exit","offboard","resign"],
    paths: [
      `<circle cx="10" cy="8" r="3.25"/>`,
      `<path d="M3.5 19c1-3.5 3.5-5.25 6.5-5.25"/>`,
      `<path d="M14.5 7l5 5M19.5 7l-5 5"/>`
    ]
  },
  "interview": {
    cat: "hr", keywords: ["meeting","candidate","chat","table"],
    paths: [
      `<circle cx="7" cy="8" r="2.5"/>`,
      `<circle cx="17" cy="8" r="2.5"/>`,
      `<path d="M3.5 18c1-3 2.5-4 3.5-4M20.5 18c-1-3-2.5-4-3.5-4"/>`,
      `<path d="M3 20.5h18"/>`
    ]
  },
  "resume": {
    cat: "hr", keywords: ["cv","candidate","application","profile"],
    paths: [
      `<path d="M5 3.5h11l3 3v14h-14z"/>`,
      `<path d="M16 3.5v3h3"/>`,
      `<circle cx="9.5" cy="10.5" r="1.75"/>`,
      `<path d="M7 15c.5-1.5 1.5-2.5 2.5-2.5s2 1 2.5 2.5"/>`,
      `<path d="M14 11.5h3M14 14h3M14 16.5h3"/>`
    ]
  },
  "offer-letter": {
    cat: "hr", keywords: ["joining letter","appointment","contract","stamp"],
    paths: [
      `<path d="M5 3.5h14v17h-14z"/>`,
      `<path d="M7.5 8h9M7.5 11h9M7.5 14h6"/>`,
      `<circle cx="15" cy="16.5" r="2.25"/>`,
      `<path d="M15 14.5v4"/>`
    ]
  },
  "team": {
    cat: "hr", keywords: ["group","collaborate","crew","unit"],
    paths: [
      `<circle cx="7" cy="9" r="2.5"/>`,
      `<circle cx="17" cy="9" r="2.5"/>`,
      `<circle cx="12" cy="13" r="2.5"/>`,
      `<path d="M3 18.5c.5-2 2-3.25 4-3.25M21 18.5c-.5-2-2-3.25-4-3.25"/>`,
      `<path d="M7.5 20c1-2 2.5-3 4.5-3s3.5 1 4.5 3"/>`
    ]
  },
  "hr-policy": {
    cat: "hr", keywords: ["handbook","rules","manual","compliance"],
    paths: [
      `<path d="M5 4h12l2 2v14h-14z"/>`,
      `<path d="M5 4v16"/>`,
      `<path d="M8 9h8M8 12h8M8 15h6"/>`,
      `<path d="M14 16.5l1.5 1.5 2.5-2.5"/>`
    ]
  },
  "duty-roster": {
    cat: "hr", keywords: ["on-call","duty","schedule","shift list"],
    paths: [
      `<rect x="4" y="5" width="16" height="14" rx="1"/>`,
      `<path d="M4 9h16"/>`,
      `<rect x="6" y="11" width="3" height="2" rx="0.3" fill="currentColor" stroke="none"/>`,
      `<rect x="10.5" y="11" width="3" height="2" rx="0.3" fill="currentColor" stroke="none"/>`,
      `<rect x="15" y="11" width="3" height="2" rx="0.3" fill="currentColor" stroke="none"/>`,
      `<rect x="6" y="14.5" width="7.5" height="2" rx="0.3"/>`
    ]
  },
  "overtime": {
    cat: "hr", keywords: ["extra hours","ot","late","clock"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M12 7v5l3.5 2"/>`,
      `<path d="M16.5 19.5l3 1.5-1-3"/>`
    ]
  },
  "biometric": {
    cat: "hr", keywords: ["fingerprint","punch","auth","scan"],
    paths: [
      `<path d="M8 19c-1.5-2-2-4.5-2-7a6 6 0 0 1 12 0c0 1"/>`,
      `<path d="M9.5 17c-.5-1.5-1-3-1-5a3.5 3.5 0 0 1 7 0"/>`,
      `<path d="M11 15.5a8 8 0 0 1-.5-3.5 1.5 1.5 0 0 1 3 0c0 1.5 0 3 .5 4.5"/>`,
      `<path d="M12 9.5v4"/>`
    ]
  },
  "leave-balance": {
    cat: "hr", keywords: ["entitlement","days left","casual leave","ledger"],
    paths: [
      `<rect x="3.75" y="5.25" width="16.5" height="15" rx="2"/>`,
      `<path d="M3.75 9.75h16.5M8.5 3.5v3.5M15.5 3.5v3.5"/>`,
      `<path d="M7 13h3M7 16h3"/>`,
      `<path d="M14 13h3M14 16h3"/>`
    ]
  },
  "compensatory-off": {
    cat: "hr", keywords: ["comp off","compensation","exchange","balance"],
    paths: [
      `<rect x="3.75" y="5.25" width="16.5" height="15" rx="2"/>`,
      `<path d="M3.75 9.75h16.5M8.5 3.5v3.5M15.5 3.5v3.5"/>`,
      `<path d="M9 14l-2 2 2 2M7 16h5"/>`,
      `<path d="M15 14l2 2-2 2M17 16h-5"/>`
    ]
  },
  "shift-day": {
    cat: "hr", keywords: ["morning","sun","day duty"],
    paths: [
      `<circle cx="12" cy="12" r="3.5"/>`,
      `<path d="M12 4v2.5M12 17.5V20M4 12h2.5M17.5 12H20M6.3 6.3l1.8 1.8M15.9 15.9l1.8 1.8M6.3 17.7l1.8-1.8M15.9 8.1l1.8-1.8"/>`
    ]
  },
  "shift-night": {
    cat: "hr", keywords: ["night duty","moon","graveyard"],
    paths: [
      `<path d="M19 14a8 8 0 1 1-9-9 6 6 0 0 0 9 9z"/>`,
      `<circle cx="16.5" cy="6.5" r="0.6" fill="currentColor" stroke="none"/>`,
      `<circle cx="13" cy="4.5" r="0.6" fill="currentColor" stroke="none"/>`
    ]
  },
  "shift-evening": {
    cat: "hr", keywords: ["pm","afternoon","evening duty"],
    paths: [
      `<path d="M3.5 14h17"/>`,
      `<circle cx="12" cy="14" r="4.5"/>`,
      `<path d="M12 6v3M6.5 9.5l1.8 1.8M17.5 9.5l-1.8 1.8"/>`,
      `<path d="M3.5 17.5h17"/>`
    ]
  },
  "promotion": {
    cat: "hr", keywords: ["upgrade","title","level up","arrow"],
    paths: [
      `<path d="M12 4l5 5h-3v8h-4v-8h-3z"/>`,
      `<path d="M7 20.5h10"/>`
    ]
  },
  "transfer-staff": {
    cat: "hr", keywords: ["relocate","move","reassign","branch"],
    paths: [
      `<circle cx="8" cy="8" r="2.75"/>`,
      `<circle cx="16" cy="8" r="2.75"/>`,
      `<path d="M5 18c.5-2.5 1.5-4 3-4M19 18c-.5-2.5-1.5-4-3-4"/>`,
      `<path d="M9.5 14h5M11.5 12.5l-2 1.5 2 1.5"/>`
    ]
  },
  "hr-letter": {
    cat: "hr", keywords: ["memo","letter","communication","stamp"],
    paths: [
      `<path d="M4 6h16v12h-16z"/>`,
      `<path d="M4 6l8 6 8-6"/>`,
      `<circle cx="17" cy="16" r="1.75"/>`
    ]
  },
  "hr-helpdesk": {
    cat: "hr", keywords: ["query","support","ticket","question"],
    paths: [
      `<path d="M4 6.5h13a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H10l-4 3v-3H6a2 2 0 0 1-2-2z"/>`,
      `<path d="M9 11c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5c0 1-.5 1.5-1.25 2-.75.5-1.25 1-1.25 1.5"/>`,
      `<circle cx="11.5" cy="16" r="0.7" fill="currentColor" stroke="none"/>`
    ]
  },
  "skill-matrix": {
    cat: "hr", keywords: ["competency","grid","capability","rating"],
    paths: [
      `<rect x="3.5" y="3.5" width="17" height="17" rx="1"/>`,
      `<path d="M3.5 9h17M3.5 14.5h17M9 3.5v17M14.5 3.5v17"/>`,
      `<rect x="5" y="5" width="2.5" height="2.5" rx="0.3" fill="currentColor" stroke="none"/>`,
      `<rect x="10.5" y="10.5" width="2.5" height="2.5" rx="0.3" fill="currentColor" stroke="none"/>`,
      `<rect x="16" y="16" width="2.5" height="2.5" rx="0.3" fill="currentColor" stroke="none"/>`
    ]
  },
  "headcount": {
    cat: "hr", keywords: ["fte","total staff","count","metric"],
    paths: [
      `<circle cx="9" cy="8.5" r="3.25"/>`,
      `<path d="M3 19c1-3.25 3-5 6-5s5 1.75 6 5"/>`,
      `<path d="M16 11.5l3-3M19 8.5h-3M19 8.5v3"/>`
    ]
  },
  "exit-interview": {
    cat: "hr", keywords: ["resign","feedback","attrition","goodbye"],
    paths: [
      `<circle cx="9" cy="8" r="3"/>`,
      `<path d="M3.5 19c1-3.5 3-5 5.5-5"/>`,
      `<path d="M14 12h7M19 10l2 2-2 2"/>`
    ]
  },
  "attendance-clock": {
    cat: "hr", keywords: ["punch in","biometric","time clock","face"],
    paths: [
      `<rect x="4.5" y="3.5" width="15" height="17" rx="1.5"/>`,
      `<circle cx="12" cy="11" r="3.5"/>`,
      `<path d="M12 8.5v2.5l1.5 1"/>`,
      `<path d="M9 17h6M9 19h6"/>`
    ]
  },
  "duty-handover": {
    cat: "hr", keywords: ["sbar","handoff","shift change","report"],
    paths: [
      `<path d="M3 12.5l5-3v2h6v2H8v2z"/>`,
      `<circle cx="18" cy="9" r="2.25"/>`,
      `<circle cx="18" cy="15" r="2.25"/>`,
      `<path d="M14 18c0-1.5 1.5-2.5 4-2.5"/>`
    ]
  },
  "credential": {
    cat: "hr", keywords: ["license verify","privilege","scope","clinical"],
    paths: [
      `<rect x="4" y="4.5" width="16" height="13" rx="1.5"/>`,
      `<path d="M8 19l4-2 4 2v-3"/>`,
      `<circle cx="12" cy="11" r="2.5"/>`,
      `<path d="M11 11l1 1 2-2"/>`
    ]
  },
  "duty-doctor": {
    cat: "hr", keywords: ["on duty md","resident","cmo","duty"],
    paths: [
      `<circle cx="12" cy="7.5" r="3.25"/>`,
      `<path d="M5 19c1.5-3 4-4.5 7-4.5s5.5 1.5 7 4.5"/>`,
      `<path d="M16 5l3 1-1 3" stroke-linecap="round"/>`,
      `<rect x="11" y="11" width="2" height="3" fill="currentColor" stroke="none"/>`
    ]
  },
  "vacation": {
    cat: "hr", keywords: ["beach","holiday","palm","off"],
    paths: [
      `<circle cx="6" cy="6.5" r="2.25"/>`,
      `<path d="M6 8.75v3.25"/>`,
      `<path d="M6 12c2-2 5-2 7 0"/>`,
      `<path d="M6 12c-1.5-3-1.5-6 1-7"/>`,
      `<path d="M6 12c1-3 4-4.5 7-3"/>`,
      `<path d="M3 17.5c2 1 4-.5 6 .5s4-.5 6 .5 4-.5 6 0"/>`
    ]
  },
  "training-hours": {
    cat: "hr", keywords: ["cme","cpd","credit hours","learning time"],
    paths: [
      `<path d="M3 9l9-4 9 4-9 4z"/>`,
      `<path d="M7 11v3c0 1 2 2 5 2s5-1 5-2v-3"/>`,
      `<circle cx="18.5" cy="16" r="3"/>`,
      `<path d="M18.5 14.5v1.5l1 1"/>`
    ]
  },
  "succession": {
    cat: "hr", keywords: ["plan","backup","next in line","tree"],
    paths: [
      `<circle cx="12" cy="5.5" r="2.25"/>`,
      `<path d="M12 7.75v3.25M7 11h10"/>`,
      `<path d="M7 11v2M17 11v2M12 11v2"/>`,
      `<circle cx="7" cy="15" r="2"/>`,
      `<circle cx="12" cy="15" r="2"/>`,
      `<circle cx="17" cy="15" r="2"/>`
    ]
  },
  "absconded": {
    cat: "hr", keywords: ["awol","missing","unauthorised","gone"],
    paths: [
      `<circle cx="12" cy="7.5" r="3"/>`,
      `<path d="M5 18l4-3 1 2 4-1.5"/>`,
      `<path d="M14 13.5l4-2"/>`,
      `<path d="M16 19.5l4-1.5-1.5-4"/>`
    ]
  },

  /* ═══ 12 · INVENTORY · STORE ════════════════════════════════ */
  "box": {
    cat: "inventory", keywords: ["package","container","item","unit"],
    paths: [
      `<path d="M4 7l8-3.5L20 7v10l-8 3.5L4 17z"/>`,
      `<path d="M4 7l8 3.5L20 7M12 10.5v10"/>`
    ]
  },
  "warehouse": {
    cat: "inventory", keywords: ["store","godown","facility","building"],
    paths: [
      `<path d="M3 9.5L12 4l9 5.5v11h-4v-7h-10v7H3z"/>`,
      `<path d="M9 17h6"/>`,
      `<path d="M9 14h6"/>`
    ]
  },
  "stock-in": {
    cat: "inventory", keywords: ["grn","receive","inward","arrival"],
    paths: [
      `<path d="M4 7l8-3.5L20 7v10l-8 3.5L4 17z"/>`,
      `<path d="M4 7l8 3.5L20 7"/>`,
      `<path d="M12 10.5v6"/>`,
      `<path d="M9.5 14l2.5 2.5 2.5-2.5"/>`
    ]
  },
  "stock-out": {
    cat: "inventory", keywords: ["issue","outward","dispatch","release"],
    paths: [
      `<path d="M4 7l8-3.5L20 7v10l-8 3.5L4 17z"/>`,
      `<path d="M4 7l8 3.5L20 7"/>`,
      `<path d="M12 16.5v-6"/>`,
      `<path d="M9.5 13l2.5-2.5 2.5 2.5"/>`
    ]
  },
  "stock-transfer": {
    cat: "inventory", keywords: ["move","relocate","interbranch","swap"],
    paths: [
      `<rect x="3" y="6" width="7" height="7" rx="0.5"/>`,
      `<rect x="14" y="11" width="7" height="7" rx="0.5"/>`,
      `<path d="M10 9.5h4M12 8l2 1.5-2 1.5"/>`
    ]
  },
  "indent": {
    cat: "inventory", keywords: ["request","slip","order from ward","internal"],
    paths: [
      `<path d="M5 3.5h14v17h-14z"/>`,
      `<path d="M8 8h8M8 11h8M8 14h5"/>`,
      `<path d="M14 16l1 1 2-2"/>`
    ]
  },
  "purchase-order": {
    cat: "inventory", keywords: ["po","supplier","procurement","order"],
    paths: [
      `<path d="M5 4h11l3 3v13h-14z"/>`,
      `<path d="M16 4v3h3"/>`,
      `<path d="M8 11h8M8 13.5h8M8 16h5"/>`,
      `<path d="M14.5 17.5l1.5-1.5 1.5 1.5M16 16v3"/>`
    ]
  },
  "grn": {
    cat: "inventory", keywords: ["goods received","note","inward","receipt"],
    paths: [
      `<path d="M5 4h14v17h-14z"/>`,
      `<path d="M8 8h8M8 11h8"/>`,
      `<path d="M8 16l2.5 2 4-4"/>`
    ]
  },
  "supplier": {
    cat: "inventory", keywords: ["vendor","manufacturer","contact","factory"],
    paths: [
      `<path d="M3 19.5h18"/>`,
      `<path d="M5 19.5V8h3v11.5M16 19.5V8h3v11.5M8 19.5V12h8v7.5"/>`,
      `<rect x="10" y="14" width="4" height="5" rx="0.3"/>`,
      `<rect x="6" y="5" width="3" height="2" rx="0.3" fill="currentColor" stroke="none"/>`
    ]
  },
  "vendor": {
    cat: "inventory", keywords: ["partner","seller","third party","contract"],
    paths: [
      `<rect x="4" y="6" width="16" height="13" rx="1"/>`,
      `<path d="M4 9.5h16"/>`,
      `<path d="M8 6V4h8v2"/>`,
      `<path d="M8 13h3M8 15.5h3"/>`,
      `<circle cx="15" cy="14.5" r="1.75"/>`
    ]
  },
  "stock-take": {
    cat: "inventory", keywords: ["count","audit","cycle count","verify"],
    paths: [
      `<rect x="4" y="3.5" width="16" height="17" rx="1.5"/>`,
      `<path d="M7 8h7"/>`,
      `<path d="M7 11h7"/>`,
      `<path d="M7 14h7"/>`,
      `<path d="M16.5 8.5l1 1 2-2M16.5 11.5l1 1 2-2M16.5 14.5l1 1 2-2"/>`
    ]
  },
  "low-stock": {
    cat: "inventory", keywords: ["reorder point","alert","threshold","warning"],
    paths: [
      `<path d="M4 7l8-3.5L20 7v10l-8 3.5L4 17z"/>`,
      `<path d="M4 7l8 3.5L20 7M12 10.5v6"/>`,
      `<path d="M12 19l3 3 3-3" transform="translate(0 -5) scale(0.6) translate(8 25)"/>`,
      `<path d="M16.5 14v3"/>`,
      `<circle cx="16.5" cy="18.5" r="0.6" fill="currentColor" stroke="none"/>`
    ]
  },
  "barcode": {
    cat: "inventory", keywords: ["scan","sku","label","ean"],
    paths: [
      `<rect x="3.5" y="6" width="17" height="12" rx="1"/>`,
      `<path d="M6 9v6M8 9v6M10 9v6M12.5 9v6M14.5 9v6M16.5 9v6M18 9v6"/>`
    ]
  },
  "qr-inventory": {
    cat: "inventory", keywords: ["2d code","scan","sku","track"],
    paths: [
      `<rect x="3.75" y="3.75" width="6" height="6" rx="0.75"/>`,
      `<rect x="14.25" y="3.75" width="6" height="6" rx="0.75"/>`,
      `<rect x="3.75" y="14.25" width="6" height="6" rx="0.75"/>`,
      `<rect x="5.5" y="5.5" width="2.5" height="2.5" fill="currentColor" stroke="none"/>`,
      `<rect x="16" y="5.5" width="2.5" height="2.5" fill="currentColor" stroke="none"/>`,
      `<rect x="5.5" y="16" width="2.5" height="2.5" fill="currentColor" stroke="none"/>`,
      `<rect x="14.25" y="14.25" width="2.5" height="2.5" fill="currentColor" stroke="none"/>`,
      `<rect x="17.75" y="17.75" width="2.5" height="2.5" fill="currentColor" stroke="none"/>`
    ]
  },
  "scanner": {
    cat: "inventory", keywords: ["barcode scan","gun","read","tool"],
    paths: [
      `<path d="M6 9h2v6H6z"/>`,
      `<path d="M6 12h-2.5"/>`,
      `<path d="M8 9c2-1 4-1 6 0v6c-2 1-4 1-6 0z"/>`,
      `<path d="M14 9l5-3v12l-5-3"/>`
    ]
  },
  "rfid": {
    cat: "inventory", keywords: ["wireless","tag","track","contactless"],
    paths: [
      `<rect x="6" y="9" width="6" height="6" rx="0.5"/>`,
      `<path d="M14 7c2 1.5 2 8 0 10"/>`,
      `<path d="M16.5 5c3.5 2 3.5 12 0 14"/>`,
      `<path d="M19 3c5 3 5 15 0 18"/>`
    ]
  },
  "shelf": {
    cat: "inventory", keywords: ["rack","bin","storage","aisle"],
    paths: [
      `<path d="M3.5 5h17M3.5 12h17M3.5 19h17"/>`,
      `<rect x="5" y="6" width="2.5" height="5" rx="0.3"/>`,
      `<rect x="9" y="6" width="2.5" height="5" rx="0.3"/>`,
      `<rect x="13" y="6" width="2.5" height="5" rx="0.3"/>`,
      `<rect x="6" y="13" width="2.5" height="5" rx="0.3"/>`,
      `<rect x="10" y="13" width="2.5" height="5" rx="0.3"/>`,
      `<rect x="14" y="13" width="2.5" height="5" rx="0.3"/>`
    ]
  },
  "rack": {
    cat: "inventory", keywords: ["bin","slot","row","aisle"],
    paths: [
      `<rect x="3.5" y="4" width="17" height="16" rx="1"/>`,
      `<path d="M3.5 9.5h17M3.5 15h17"/>`,
      `<path d="M9 4v16M14.5 4v16"/>`
    ]
  },
  "bin-location": {
    cat: "inventory", keywords: ["pin","slot","aisle","find"],
    paths: [
      `<path d="M12 21s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12z"/>`,
      `<rect x="9" y="6.5" width="6" height="5" rx="0.5"/>`,
      `<path d="M9 8.5h6"/>`
    ]
  },
  "asset": {
    cat: "inventory", keywords: ["equipment","tag","fixed asset","device"],
    paths: [
      `<rect x="4" y="5" width="16" height="11" rx="1"/>`,
      `<path d="M8 19h8M12 16v3"/>`,
      `<rect x="6.5" y="7.5" width="6" height="2" rx="0.3" fill="currentColor" stroke="none"/>`,
      `<circle cx="16" cy="11.5" r="1.5"/>`
    ]
  },
  "consumable": {
    cat: "inventory", keywords: ["disposable","single use","supply","one-time"],
    paths: [
      `<path d="M5 8h14v3l-1 8a2 2 0 0 1-2 1.5H8a2 2 0 0 1-2-1.5L5 11z"/>`,
      `<path d="M9 8V5h6v3"/>`,
      `<path d="M9 12h6"/>`
    ]
  },
  "implant": {
    cat: "inventory", keywords: ["device","traceable","high-value","serial"],
    paths: [
      `<rect x="3.5" y="9" width="17" height="6" rx="1"/>`,
      `<rect x="6" y="11" width="3" height="2" rx="0.3" fill="currentColor" stroke="none"/>`,
      `<path d="M11 11.5h7M11 13h5"/>`,
      `<circle cx="20" cy="6" r="2"/>`
    ]
  },
  "expiry-stock": {
    cat: "inventory", keywords: ["expired","near-exp","fefo","disposal"],
    paths: [
      `<path d="M4 7l8-3.5L20 7v10l-8 3.5L4 17z"/>`,
      `<path d="M4 7l8 3.5L20 7M12 10.5v10"/>`,
      `<path d="M9 14l6 3M15 14l-6 3"/>`
    ]
  },
  "min-max": {
    cat: "inventory", keywords: ["reorder level","par","threshold","levels"],
    paths: [
      `<path d="M3.5 18.5h17"/>`,
      `<path d="M5 18.5v-4M9 18.5v-7M13 18.5v-9M17 18.5v-12"/>`,
      `<path d="M3 7h17" stroke-dasharray="2 2"/>`,
      `<path d="M3 13h17" stroke-dasharray="2 2"/>`
    ]
  },
  "abc-analysis": {
    cat: "inventory", keywords: ["pareto","classification","value","ranking"],
    paths: [
      `<path d="M3.5 18.5h17"/>`,
      `<rect x="5" y="7" width="3" height="11.5" rx="0.3" fill="currentColor" stroke="none"/>`,
      `<rect x="10" y="11" width="3" height="7.5" rx="0.3"/>`,
      `<rect x="15" y="14.5" width="3" height="4" rx="0.3"/>`
    ]
  },
  "kit": {
    cat: "inventory", keywords: ["set","bundle","procedure tray","pack"],
    paths: [
      `<rect x="4" y="6.5" width="16" height="12" rx="1"/>`,
      `<path d="M9 6.5V4h6v2.5"/>`,
      `<path d="M4 11h16"/>`,
      `<path d="M9 14h6M9 16h6"/>`
    ]
  },
  "reorder": {
    cat: "inventory", keywords: ["repurchase","auto","loop","top-up"],
    paths: [
      `<path d="M20 5.5v5h-5"/>`,
      `<path d="M19.5 13a8 8 0 1 1-3-9.5L20 5.5"/>`,
      `<path d="M9 12h6M12 9v6"/>`
    ]
  },
  "store-room": {
    cat: "inventory", keywords: ["central store","pharmacy store","cssd","supply"],
    paths: [
      `<path d="M3 19.5h18"/>`,
      `<path d="M5 19.5V7h14v12.5"/>`,
      `<rect x="10" y="13" width="4" height="6.5" rx="0.3"/>`,
      `<path d="M5 7l7-3 7 3"/>`,
      `<rect x="7" y="11" width="2" height="2" fill="currentColor" stroke="none"/>`,
      `<rect x="15" y="11" width="2" height="2" fill="currentColor" stroke="none"/>`
    ]
  },
  "pallet": {
    cat: "inventory", keywords: ["bulk","forklift","wood","load"],
    paths: [
      `<rect x="3.5" y="6" width="17" height="9" rx="0.5"/>`,
      `<path d="M3.5 11h17"/>`,
      `<path d="M5 15v3M9 15v3M15 15v3M19 15v3"/>`,
      `<path d="M3.5 18.5h17"/>`
    ]
  },
  "forklift": {
    cat: "inventory", keywords: ["pallet","lift","logistics","load"],
    paths: [
      `<path d="M3 17.5h12v-9h-4l-3 4H3z"/>`,
      `<circle cx="6" cy="19" r="1.5"/>`,
      `<circle cx="13" cy="19" r="1.5"/>`,
      `<path d="M15 17.5h6"/>`,
      `<path d="M15 17.5V6.5h2"/>`,
      `<path d="M19 17.5V8h2"/>`
    ]
  },
  "delivery": {
    cat: "inventory", keywords: ["dispatch","truck","logistics","ship"],
    paths: [
      `<path d="M3 16.5V6h11v10.5"/>`,
      `<path d="M14 9.5h4l3 3v4h-7"/>`,
      `<circle cx="7" cy="17" r="1.75"/>`,
      `<circle cx="17" cy="17" r="1.75"/>`
    ]
  },
  "courier": {
    cat: "inventory", keywords: ["box","sent","awb","parcel"],
    paths: [
      `<path d="M5 7h14v13h-14z"/>`,
      `<path d="M5 7l2-3h10l2 3"/>`,
      `<path d="M5 11h14"/>`,
      `<path d="M10 14.5h4"/>`
    ]
  },
  "po-approval": {
    cat: "inventory", keywords: ["sign off","authorise","sanction","ok"],
    paths: [
      `<path d="M5 4h11l3 3v13h-14z"/>`,
      `<path d="M16 4v3h3"/>`,
      `<path d="M8 11h8"/>`,
      `<path d="M7.5 15.5l2 2 5-5"/>`
    ]
  },
  "sku": {
    cat: "inventory", keywords: ["item code","catalog","master","number"],
    paths: [
      `<rect x="3.5" y="5" width="17" height="14" rx="1.5"/>`,
      `<path d="M6 10h2v4H6zM10 10v4M10 12h2v2M14 10l3 4M14 14l3-4"/>`,
      `<path d="M6 17h12"/>`
    ]
  },
  "uom": {
    cat: "inventory", keywords: ["unit of measure","ml","strip","box"],
    paths: [
      `<rect x="4" y="6" width="6" height="13" rx="0.5"/>`,
      `<rect x="14" y="9" width="6" height="10" rx="0.5"/>`,
      `<path d="M10 12.5h4M12 11l2 1.5-2 1.5"/>`
    ]
  },
  "stock-ledger": {
    cat: "inventory", keywords: ["movement","history","journal","kardex"],
    paths: [
      `<path d="M5 4h14v17H7a2 2 0 0 1-2-2z"/>`,
      `<path d="M8 8h8M8 11h8M8 14h6"/>`,
      `<path d="M14 16l1.5 1.5 2-2"/>`
    ]
  },
  "asset-tag": {
    cat: "inventory", keywords: ["serial","barcode","label","fixed"],
    paths: [
      `<path d="M3.5 12L11 4.5h7v7L10.5 19z"/>`,
      `<circle cx="14.5" cy="8" r="1.5"/>`,
      `<path d="M9 9.5l4 4"/>`
    ]
  },
  "discrepancy": {
    cat: "inventory", keywords: ["mismatch","variance","audit","gap"],
    paths: [
      `<path d="M3.5 18.5h17"/>`,
      `<path d="M3.5 18.5v-7"/>`,
      `<path d="M20.5 18.5v-7"/>`,
      `<path d="M3.5 11.5l8.5-3 8.5 3"/>`,
      `<path d="M12 8.5v10"/>`,
      `<circle cx="12" cy="13" r="0.7" fill="currentColor" stroke="none"/>`,
      `<circle cx="12" cy="16" r="0.7" fill="currentColor" stroke="none"/>`
    ]
  },
  "donation-stock": {
    cat: "inventory", keywords: ["gift","grant","csr","received"],
    paths: [
      `<path d="M4 7l8-3.5L20 7v10l-8 3.5L4 17z"/>`,
      `<path d="M4 7l8 3.5L20 7M12 10.5v10"/>`,
      `<path d="M9 4.5C9 3 10 3 11 3s2 1 1 2.5c1-1.5 2-1.5 3-1s1 1.5 0 2.5"/>`
    ]
  },
  "cssd-supply": {
    cat: "inventory", keywords: ["sterile pack","autoclaved","tray","ot"],
    paths: [
      `<rect x="4" y="6.5" width="16" height="12" rx="1"/>`,
      `<path d="M9 6.5V4h6v2.5"/>`,
      `<path d="M4 11h16"/>`,
      `<path d="M8 14l2 2 4-4"/>`
    ]
  },
  "linen-stock": {
    cat: "inventory", keywords: ["laundry","bedsheets","fabric","stock"],
    paths: [
      `<path d="M4 6h16v3l-2 2v8h-12v-8l-2-2z"/>`,
      `<path d="M4 9h16"/>`,
      `<path d="M9 14h6"/>`
    ]
  },
  "stationery": {
    cat: "inventory", keywords: ["office supply","paper","forms","admin"],
    paths: [
      `<rect x="4" y="6" width="16" height="13" rx="1"/>`,
      `<path d="M4 6l3-2h10l3 2"/>`,
      `<path d="M9 11h6M9 13.5h6M9 16h4"/>`
    ]
  },
  "cylinder-stock": {
    cat: "inventory", keywords: ["o2 cylinder","gas","tank","medical gas"],
    paths: [
      `<path d="M9 5h6"/>`,
      `<rect x="9.5" y="5" width="5" height="2" rx="0.3"/>`,
      `<rect x="8" y="7" width="8" height="13.5" rx="3"/>`,
      `<path d="M10 11h4"/>`,
      `<path d="M10 13.5h4"/>`
    ]
  },
  "expiry-window": {
    cat: "inventory", keywords: ["aging","stock age","30-60-90","report"],
    paths: [
      `<rect x="3.5" y="6" width="17" height="13" rx="1"/>`,
      `<path d="M7 6V4h2v2M15 6V4h2v2"/>`,
      `<rect x="5.5" y="9" width="3" height="7" rx="0.3" fill="currentColor" stroke="none"/>`,
      `<rect x="10.5" y="11" width="3" height="5" rx="0.3"/>`,
      `<rect x="15.5" y="13" width="3" height="3" rx="0.3"/>`
    ]
  },

  /* ═══ 13 · BUSINESS INTELLIGENCE · ANALYTICS ════════════════ */
  "dashboard": {
    cat: "bi", keywords: ["home","overview","kpis","widgets"],
    paths: [
      `<rect x="3.5" y="3.5" width="7" height="9" rx="1"/>`,
      `<rect x="13.5" y="3.5" width="7" height="5" rx="1"/>`,
      `<rect x="13.5" y="11.5" width="7" height="9" rx="1"/>`,
      `<rect x="3.5" y="15.5" width="7" height="5" rx="1"/>`
    ]
  },
  "chart-bar": {
    cat: "bi", keywords: ["bars","compare","columns","report"],
    paths: [
      `<path d="M3.5 19.5h17"/>`,
      `<rect x="6" y="11" width="2.5" height="8" rx="0.3"/>`,
      `<rect x="11" y="7" width="2.5" height="12" rx="0.3"/>`,
      `<rect x="16" y="13" width="2.5" height="6" rx="0.3"/>`
    ]
  },
  "chart-bar-h": {
    cat: "bi", keywords: ["horizontal","ranking","top n","compare"],
    paths: [
      `<path d="M4.5 4v17"/>`,
      `<rect x="5" y="6" width="13" height="2.5" rx="0.3"/>`,
      `<rect x="5" y="11" width="9" height="2.5" rx="0.3"/>`,
      `<rect x="5" y="16" width="6" height="2.5" rx="0.3"/>`
    ]
  },
  "chart-line": {
    cat: "bi", keywords: ["trend","series","over time","graph"],
    paths: [
      `<path d="M3.5 19.5h17"/>`,
      `<path d="M5 16l4-5 3 2 4-7 3 4"/>`,
      `<circle cx="5" cy="16" r="0.7" fill="currentColor" stroke="none"/>`,
      `<circle cx="9" cy="11" r="0.7" fill="currentColor" stroke="none"/>`,
      `<circle cx="12" cy="13" r="0.7" fill="currentColor" stroke="none"/>`,
      `<circle cx="16" cy="6" r="0.7" fill="currentColor" stroke="none"/>`,
      `<circle cx="19" cy="10" r="0.7" fill="currentColor" stroke="none"/>`
    ]
  },
  "chart-area": {
    cat: "bi", keywords: ["area","cumulative","filled trend"],
    paths: [
      `<path d="M3.5 19.5h17"/>`,
      `<path d="M5 16l4-5 3 2 4-7 3 4v6.5h-14z"/>`
    ]
  },
  "chart-pie": {
    cat: "bi", keywords: ["share","split","slice","percent"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M12 12V3.75"/>`,
      `<path d="M12 12l7 4.5"/>`
    ]
  },
  "chart-donut": {
    cat: "bi", keywords: ["ring","share","kpi","percent"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<circle cx="12" cy="12" r="3.75"/>`,
      `<path d="M12 3.75A8.25 8.25 0 0 1 19.5 9" stroke-width="3"/>`
    ]
  },
  "chart-scatter": {
    cat: "bi", keywords: ["dots","correlation","distribution"],
    paths: [
      `<path d="M3.5 19.5h17M3.5 3.5v16"/>`,
      `<circle cx="7" cy="15" r="1" fill="currentColor" stroke="none"/>`,
      `<circle cx="11" cy="11" r="1" fill="currentColor" stroke="none"/>`,
      `<circle cx="14" cy="13" r="1" fill="currentColor" stroke="none"/>`,
      `<circle cx="9" cy="8" r="1" fill="currentColor" stroke="none"/>`,
      `<circle cx="17" cy="7" r="1" fill="currentColor" stroke="none"/>`,
      `<circle cx="13" cy="6" r="1" fill="currentColor" stroke="none"/>`,
      `<circle cx="18" cy="11" r="1" fill="currentColor" stroke="none"/>`
    ]
  },
  "chart-bubble": {
    cat: "bi", keywords: ["bubbles","3 axis","size","scatter"],
    paths: [
      `<path d="M3.5 19.5h17M3.5 3.5v16"/>`,
      `<circle cx="8" cy="14" r="2"/>`,
      `<circle cx="14" cy="9" r="3"/>`,
      `<circle cx="18" cy="15" r="1.25"/>`
    ]
  },
  "chart-radar": {
    cat: "bi", keywords: ["spider","star","multi-axis","profile"],
    paths: [
      `<path d="M12 3.5l7.5 5.5-3 9h-9l-3-9z"/>`,
      `<path d="M12 7l4.5 3-1.75 5.5h-5.5L7.5 10z"/>`,
      `<path d="M12 3.5v17M4.5 9l15 0M5 18l14-9M5 9l14 9"/>`
    ]
  },
  "chart-gauge": {
    cat: "bi", keywords: ["speedometer","kpi","status","semi-circle"],
    paths: [
      `<path d="M3.5 14a8.5 8.5 0 1 1 17 0"/>`,
      `<path d="M12 14l5-5"/>`,
      `<circle cx="12" cy="14" r="1" fill="currentColor" stroke="none"/>`,
      `<path d="M3.5 17h17"/>`
    ]
  },
  "chart-funnel": {
    cat: "bi", keywords: ["conversion","stages","decline"],
    paths: [
      `<path d="M3.5 4.5h17l-3 4h-11z"/>`,
      `<path d="M5.5 9.5h13l-2 4h-9z"/>`,
      `<path d="M7.5 14.5h9l-2 4h-5z"/>`,
      `<path d="M10 19.5h4"/>`
    ]
  },
  "chart-stacked": {
    cat: "bi", keywords: ["stacked bars","composition","groups"],
    paths: [
      `<path d="M3.5 19.5h17"/>`,
      `<rect x="6" y="14" width="2.5" height="5.5" rx="0.3"/>`,
      `<rect x="6" y="9" width="2.5" height="5" rx="0.3" fill="currentColor" stroke="none"/>`,
      `<rect x="11" y="14" width="2.5" height="5.5" rx="0.3"/>`,
      `<rect x="11" y="6" width="2.5" height="8" rx="0.3" fill="currentColor" stroke="none"/>`,
      `<rect x="16" y="14" width="2.5" height="5.5" rx="0.3"/>`,
      `<rect x="16" y="11" width="2.5" height="3" rx="0.3" fill="currentColor" stroke="none"/>`
    ]
  },
  "chart-heatmap": {
    cat: "bi", keywords: ["grid","intensity","matrix","cohort"],
    paths: [
      `<rect x="3.5" y="3.5" width="17" height="17" rx="1"/>`,
      `<path d="M9 3.5v17M14.5 3.5v17M3.5 9h17M3.5 14.5h17"/>`,
      `<rect x="4" y="4" width="5" height="5" fill="currentColor" fill-opacity="0.85" stroke="none"/>`,
      `<rect x="9" y="9" width="5.5" height="5.5" fill="currentColor" fill-opacity="0.45" stroke="none"/>`,
      `<rect x="14.5" y="14.5" width="6" height="6" fill="currentColor" fill-opacity="0.2" stroke="none"/>`
    ]
  },
  "chart-waterfall": {
    cat: "bi", keywords: ["bridge","change","plus minus","steps"],
    paths: [
      `<path d="M3.5 19.5h17"/>`,
      `<rect x="5" y="13" width="2.5" height="6.5" rx="0.3"/>`,
      `<rect x="9" y="9" width="2.5" height="4" rx="0.3"/>`,
      `<rect x="13" y="11.5" width="2.5" height="3" rx="0.3"/>`,
      `<rect x="17" y="6" width="2.5" height="13.5" rx="0.3"/>`,
      `<path d="M7.5 13h1.5M11.5 11.5h1.5M15.5 11.5h1.5" stroke-dasharray="1.5 1.5"/>`
    ]
  },
  "trend-up": {
    cat: "bi", keywords: ["growth","increase","positive","arrow up"],
    paths: [
      `<path d="M4 17l5-5 3 3 7-9"/>`,
      `<path d="M14.5 6h4.5v4.5"/>`
    ]
  },
  "trend-down": {
    cat: "bi", keywords: ["decline","decrease","negative","arrow down"],
    paths: [
      `<path d="M4 7l5 5 3-3 7 9"/>`,
      `<path d="M14.5 18h4.5v-4.5"/>`
    ]
  },
  "trend-flat": {
    cat: "bi", keywords: ["stable","unchanged","plateau"],
    paths: [
      `<path d="M3.5 12h13"/>`,
      `<path d="M14 8.5l3.5 3.5-3.5 3.5"/>`
    ]
  },
  "kpi": {
    cat: "bi", keywords: ["target","metric","number","value"],
    paths: [
      `<rect x="3.5" y="4" width="17" height="16" rx="1.5"/>`,
      `<path d="M7 9.5v6M7 12h3.5M7 15h3.5"/>`,
      `<path d="M14 9.5l3 6M14 15.5l3-6"/>`
    ]
  },
  "target": {
    cat: "bi", keywords: ["goal","bullseye","aim"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<circle cx="12" cy="12" r="5"/>`,
      `<circle cx="12" cy="12" r="2"/>`,
      `<circle cx="12" cy="12" r="0.7" fill="currentColor" stroke="none"/>`
    ]
  },
  "forecast": {
    cat: "bi", keywords: ["predict","project","future","ai"],
    paths: [
      `<path d="M3.5 19.5h17"/>`,
      `<path d="M5 14l4-3 3 2 3-4"/>`,
      `<path d="M15 9l4-2.5" stroke-dasharray="2 1.5"/>`,
      `<circle cx="19" cy="6.5" r="1.25"/>`
    ]
  },
  "anomaly": {
    cat: "bi", keywords: ["outlier","alert","spike","unusual"],
    paths: [
      `<path d="M3.5 19.5h17"/>`,
      `<path d="M5 14h3l1.5-3 1.5 6 1.5-9 1.5 5h5"/>`,
      `<circle cx="11" cy="8" r="1.5" fill="currentColor" stroke="none"/>`
    ]
  },
  "drill-down": {
    cat: "bi", keywords: ["explore","detail","zoom","slice"],
    paths: [
      `<path d="M3.5 19.5h17"/>`,
      `<rect x="5" y="11" width="2.5" height="8" rx="0.3"/>`,
      `<rect x="10" y="7" width="2.5" height="12" rx="0.3"/>`,
      `<rect x="15" y="13" width="2.5" height="6" rx="0.3"/>`,
      `<path d="M11.5 4l3 3-3 3"/>`,
      `<circle cx="11" cy="13" r="2.25"/>`
    ]
  },
  "filter-bi": {
    cat: "bi", keywords: ["slice","slicer","facet","narrow"],
    paths: [
      `<path d="M3.75 5.5h16.5l-6.5 7.75v6l-3.5 1.75v-7.75z"/>`,
      `<path d="M14 14l5 5M19 14l-5 5"/>`
    ]
  },
  "report-bi": {
    cat: "bi", keywords: ["pdf","output","document","scheduled"],
    paths: [
      `<path d="M5 3.5h11l3 3v14h-14z"/>`,
      `<path d="M16 3.5v3h3"/>`,
      `<path d="M7.5 11h9M7.5 13.5h9"/>`,
      `<rect x="7.5" y="15.5" width="9" height="3" rx="0.3"/>`
    ]
  },
  "report-schedule": {
    cat: "bi", keywords: ["recurring","cron","auto","email"],
    paths: [
      `<path d="M5 3.5h11l3 3v14h-14z"/>`,
      `<path d="M16 3.5v3h3"/>`,
      `<path d="M7.5 11h9M7.5 13.5h6"/>`,
      `<circle cx="16" cy="16.5" r="2.75"/>`,
      `<path d="M16 15v1.5l1 .75"/>`
    ]
  },
  "data-export": {
    cat: "bi", keywords: ["csv","xlsx","download","extract"],
    paths: [
      `<rect x="4" y="4" width="16" height="16" rx="1.5"/>`,
      `<path d="M4 9h16"/>`,
      `<path d="M12 12v6"/>`,
      `<path d="M9 15l3 3 3-3"/>`
    ]
  },
  "data-import": {
    cat: "bi", keywords: ["upload","csv","ingest","load"],
    paths: [
      `<rect x="4" y="4" width="16" height="16" rx="1.5"/>`,
      `<path d="M4 9h16"/>`,
      `<path d="M12 18v-6"/>`,
      `<path d="M9 15l3-3 3 3"/>`
    ]
  },
  "olap-cube": {
    cat: "bi", keywords: ["cube","multidim","dataset","data"],
    paths: [
      `<path d="M4 7l8-3.5L20 7v10l-8 3.5L4 17z"/>`,
      `<path d="M4 7l8 3.5L20 7M12 10.5v10"/>`,
      `<path d="M8 5.5l8 3.5M16 5.5l-8 3.5"/>`
    ]
  },
  "data-table": {
    cat: "bi", keywords: ["grid","rows","columns","tabular"],
    paths: [
      `<rect x="3.5" y="4" width="17" height="16" rx="1"/>`,
      `<path d="M3.5 9h17M3.5 14.5h17"/>`,
      `<path d="M9 4v16M14.5 4v16"/>`
    ]
  },
  "pivot": {
    cat: "bi", keywords: ["cross-tab","summarise","group","matrix"],
    paths: [
      `<rect x="3.5" y="4" width="17" height="16" rx="1"/>`,
      `<path d="M3.5 9h17M9 4v16"/>`,
      `<path d="M14 12l3-2 3 2M17 10v6"/>`,
      `<path d="M5.5 14l2 2 2-2M7.5 12v6"/>`
    ]
  },
  "segment": {
    cat: "bi", keywords: ["cohort","group","split","audience"],
    paths: [
      `<circle cx="9" cy="10" r="5"/>`,
      `<circle cx="15" cy="14" r="5"/>`,
      `<path d="M11.5 12.5a5 5 0 0 1 .5-2.5"/>`
    ]
  },
  "compare": {
    cat: "bi", keywords: ["versus","diff","two periods","ab"],
    paths: [
      `<rect x="3.5" y="5" width="7" height="14" rx="1"/>`,
      `<rect x="13.5" y="5" width="7" height="14" rx="1"/>`,
      `<path d="M5 16h4M15 14h4M15 11h4M15 8h4"/>`,
      `<path d="M5 13h4M5 10h4"/>`
    ]
  },
  "alert-bi": {
    cat: "bi", keywords: ["threshold","trigger","notify","exceeded"],
    paths: [
      `<path d="M6.5 17.25v-5.5a5.5 5.5 0 0 1 11 0v5.5"/>`,
      `<path d="M4.75 17.25h14.5"/>`,
      `<path d="M10 20.25a2 2 0 0 0 4 0"/>`,
      `<circle cx="18" cy="6" r="2.25" fill="currentColor" stroke="none"/>`
    ]
  },
  "benchmark": {
    cat: "bi", keywords: ["peer","industry","baseline","compare"],
    paths: [
      `<path d="M3.5 19.5h17"/>`,
      `<rect x="6" y="13" width="2.5" height="6.5" rx="0.3"/>`,
      `<rect x="11" y="9" width="2.5" height="10.5" rx="0.3"/>`,
      `<rect x="16" y="11" width="2.5" height="8.5" rx="0.3"/>`,
      `<path d="M3 8.5h18" stroke-dasharray="2 2"/>`
    ]
  },
  "data-source": {
    cat: "bi", keywords: ["connect","db","integration","feed"],
    paths: [
      `<ellipse cx="12" cy="6" rx="7" ry="2.25"/>`,
      `<path d="M5 6v12c0 1.25 3.1 2.25 7 2.25s7-1 7-2.25V6"/>`,
      `<path d="M5 12c0 1.25 3.1 2.25 7 2.25s7-1 7-2.25"/>`
    ]
  },
  "etl": {
    cat: "bi", keywords: ["pipeline","extract","transform","load"],
    paths: [
      `<rect x="3" y="9" width="4" height="6" rx="0.5"/>`,
      `<rect x="10" y="9" width="4" height="6" rx="0.5"/>`,
      `<rect x="17" y="9" width="4" height="6" rx="0.5"/>`,
      `<path d="M7 12h3M14 12h3"/>`
    ]
  },
  "sql": {
    cat: "bi", keywords: ["query","script","database","ad hoc"],
    paths: [
      `<rect x="3.5" y="4" width="17" height="16" rx="1.5"/>`,
      `<path d="M6 8h2M10 8h6"/>`,
      `<path d="M6 11h12"/>`,
      `<path d="M6 14h2M10 14h4"/>`,
      `<path d="M6 17h7"/>`
    ]
  },
  "insight": {
    cat: "bi", keywords: ["bulb","ai","insight","aha"],
    paths: [
      `<path d="M9 14a4.5 4.5 0 1 1 6 0c-1 1-1.5 1.5-1.5 2.5h-3c0-1-.5-1.5-1.5-2.5z"/>`,
      `<path d="M10.5 18.5h3"/>`,
      `<path d="M11 20.5h2"/>`
    ]
  },
  "story": {
    cat: "bi", keywords: ["narrative","slides","story-telling","present"],
    paths: [
      `<rect x="3.5" y="5" width="17" height="11" rx="1.5"/>`,
      `<path d="M9 19.5h6M12 16v3.5"/>`,
      `<path d="M6 12l2-2 2 2 2-3 2 2 2-2"/>`
    ]
  },
  "map-bi": {
    cat: "bi", keywords: ["geo","region","map","location chart"],
    paths: [
      `<path d="M3.5 6l5-1.5 7 1.5 5-1.5v13l-5 1.5-7-1.5-5 1.5z"/>`,
      `<path d="M8.5 4.5v13M15.5 6v13"/>`,
      `<circle cx="12" cy="11" r="1.5" fill="currentColor" stroke="none"/>`
    ]
  },
  "throughput": {
    cat: "bi", keywords: ["volume","ops","per day","capacity"],
    paths: [
      `<path d="M3.5 12h17"/>`,
      `<path d="M16 8.5l4 3.5-4 3.5"/>`,
      `<rect x="4" y="9.5" width="2.5" height="5" rx="0.3" fill="currentColor" stroke="none"/>`,
      `<rect x="8" y="9.5" width="2.5" height="5" rx="0.3" fill="currentColor" stroke="none"/>`,
      `<rect x="12" y="9.5" width="2.5" height="5" rx="0.3" fill="currentColor" stroke="none"/>`
    ]
  },
  "denial-rate": {
    cat: "bi", keywords: ["claim denial","rejection","payer","kpi"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M3.75 12a8.25 8.25 0 0 1 12.75-6.9" stroke-width="2.75"/>`,
      `<path d="M9 9l6 6M15 9l-6 6"/>`
    ]
  },
  "average": {
    cat: "bi", keywords: ["mean","avg","statistic"],
    paths: [
      `<path d="M5 19.5l5-15 5 15"/>`,
      `<path d="M7 14h6"/>`,
      `<path d="M16 5.5h3M16 19.5h3M17.5 5.5v14"/>`
    ]
  },
  "percentile": {
    cat: "bi", keywords: ["p50","p90","percentile","quantile"],
    paths: [
      `<path d="M5 5l14 14"/>`,
      `<circle cx="7.5" cy="7.5" r="2"/>`,
      `<circle cx="16.5" cy="16.5" r="2"/>`
    ]
  },
  "histogram": {
    cat: "bi", keywords: ["distribution","frequency","bins","spread"],
    paths: [
      `<path d="M3.5 19.5h17"/>`,
      `<rect x="4.5" y="14" width="2" height="5.5" rx="0.2"/>`,
      `<rect x="7" y="11" width="2" height="8.5" rx="0.2"/>`,
      `<rect x="9.5" y="6" width="2" height="13.5" rx="0.2"/>`,
      `<rect x="12" y="9" width="2" height="10.5" rx="0.2"/>`,
      `<rect x="14.5" y="13" width="2" height="6.5" rx="0.2"/>`,
      `<rect x="17" y="15.5" width="2" height="4" rx="0.2"/>`
    ]
  },
  "kpi-card": {
    cat: "bi", keywords: ["tile","metric card","big number","widget"],
    paths: [
      `<rect x="3.5" y="4.5" width="17" height="15" rx="1.5"/>`,
      `<path d="M6.5 8h7"/>`,
      `<path d="M6.5 11.5h6M6.5 14h6"/>`,
      `<path d="M14 16l3-3 1.5 1.5"/>`
    ]
  },

};

window.LIPI_ICONS = LIPI_ICONS;
window.LIPI_ICON_VERSION = "0.5.0";
window.LIPI_ICON_COPYRIGHT = "© 2026 imagiQa Healthcare Services Pvt Ltd";
