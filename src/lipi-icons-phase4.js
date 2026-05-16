/* ═══════════════════════════════════════════════════════════════
   LiPi Icon System — Phase 4 expansion pack
   Adds 60 base icons across 7 new sub-domains, all merged into
   the global LIPI_ICONS dictionary.
   © 2026 imagiQa Healthcare Services Pvt Ltd · All rights reserved.
   ═══════════════════════════════════════════════════════════════ */

const LIPI_ICONS_PHASE4 = {

  /* ═══ 14 · QUALITY · COMPLIANCE · ACCREDITATION ═════════════ */
  "nabh": {
    cat: "quality", keywords: ["accreditation","india","standard","badge","seal"],
    paths: [
      `<path d="M12 3.5l7 2.25v5.5c0 4.4-3 7.6-7 9.25-4-1.65-7-4.85-7-9.25v-5.5z"/>`,
      `<path d="M9 12l2 2 4-4"/>`
    ]
  },
  "jci": {
    cat: "quality", keywords: ["joint commission","international","accreditation","gold"],
    paths: [
      `<circle cx="12" cy="10" r="4.25"/>`,
      `<path d="M9.5 13.5l-2 7 4.5-2.5 4.5 2.5-2-7"/>`,
      `<path d="M10.5 10l1 1 2-2"/>`
    ]
  },
  "audit-report": {
    cat: "quality", keywords: ["review","inspection","checklist","verify"],
    paths: [
      `<rect x="4.5" y="3.75" width="13" height="16.5" rx="1.5"/>`,
      `<path d="M7.5 8h7M7.5 11.5h7M7.5 15h4"/>`,
      `<path d="M15 17l2 2 3-3"/>`
    ]
  },
  "compliance-shield": {
    cat: "quality", keywords: ["policy","regulation","conform","protect"],
    paths: [
      `<path d="M12 3.5l7 2.25v5.5c0 4.4-3 7.6-7 9.25-4-1.65-7-4.85-7-9.25v-5.5z"/>`,
      `<path d="M12 8v4M12 15v.5"/>`
    ]
  },
  "root-cause": {
    cat: "quality", keywords: ["fishbone","why","ishikawa","analysis"],
    paths: [
      `<circle cx="19" cy="12" r="1.5"/>`,
      `<path d="M3.5 12h14"/>`,
      `<path d="M6 8l2 4M10 8l2 4M14 8l2 4"/>`,
      `<path d="M6 16l2-4M10 16l2-4M14 16l2-4"/>`
    ]
  },
  "capa": {
    cat: "quality", keywords: ["corrective","preventive","action","plan","fix"],
    paths: [
      `<path d="M6 7h12l-1.5 12h-9z"/>`,
      `<path d="M9 7v-2a3 3 0 0 1 6 0v2"/>`,
      `<path d="M9.5 13l2 2 3-3.5"/>`
    ]
  },
  "sentinel-event": {
    cat: "quality", keywords: ["serious","incident","never event","red flag"],
    paths: [
      `<path d="M5 4.5h2v15h-2z" fill="currentColor" stroke="none"/>`,
      `<path d="M7 5l11 1.5-3 4 3 4-11-1.5z"/>`
    ]
  },
  "near-miss": {
    cat: "quality", keywords: ["close call","almost","incident","caution"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M12 8v4.5"/>`,
      `<circle cx="12" cy="16" r="0.9" fill="currentColor" stroke="none"/>`,
      `<path d="M5.5 5.5l13 13" stroke-dasharray="2 2"/>`
    ]
  },
  "incident-report": {
    cat: "quality", keywords: ["report","occurrence","log","sentinel"],
    paths: [
      `<rect x="4.5" y="3.75" width="13" height="16.5" rx="1.5"/>`,
      `<path d="M11 7v4M11 13.5v.5"/>`,
      `<path d="M7.5 17h7"/>`
    ]
  },
  "sop": {
    cat: "quality", keywords: ["standard operating procedure","manual","protocol"],
    paths: [
      `<rect x="4.5" y="4" width="13" height="16" rx="1.5"/>`,
      `<path d="M4.5 7.5h13"/>`,
      `<path d="M7.5 11h4M7.5 14h7M7.5 17h6"/>`,
      `<path d="M14.5 9.75h2.5"/>`
    ]
  },

  /* ═══ 15 · WORKFLOW · STATUS ════════════════════════════════ */
  "status-pending": {
    cat: "workflow", keywords: ["waiting","queue","awaiting","hourglass"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M12 7.5V12l2.75 2"/>`
    ]
  },
  "status-progress": {
    cat: "workflow", keywords: ["wip","in progress","ongoing","running"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M12 3.75a8.25 8.25 0 0 1 0 16.5" stroke-width="2.75"/>`
    ]
  },
  "status-approved": {
    cat: "workflow", keywords: ["accepted","signed off","green","verified"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M8 12.25l2.75 2.75L16 9.5"/>`
    ]
  },
  "status-rejected": {
    cat: "workflow", keywords: ["denied","refused","no","blocked"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M9 9l6 6M15 9l-6 6"/>`
    ]
  },
  "status-hold": {
    cat: "workflow", keywords: ["pause","wait","stop","freeze"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M10 9v6M14 9v6"/>`
    ]
  },
  "escalated": {
    cat: "workflow", keywords: ["urgent","priority","raise","upward"],
    paths: [
      `<path d="M12 4l8 8h-4.5v8h-7v-8H4z"/>`
    ]
  },
  "assigned": {
    cat: "workflow", keywords: ["allocate","assign","owner","claim"],
    paths: [
      `<circle cx="9" cy="9" r="3.25"/>`,
      `<path d="M3 19c1.2-3 3.4-4.5 6-4.5s4.8 1.5 6 4.5"/>`,
      `<path d="M16.5 7.5l2 2 3-3"/>`
    ]
  },
  "draft": {
    cat: "workflow", keywords: ["unsaved","wip","sketch","preview"],
    paths: [
      `<path d="M5 19l3.5-1 9-9-2.5-2.5-9 9z"/>`,
      `<path d="M15 7.5l2.5 2.5"/>`,
      `<path d="M5 19l3.5-1" stroke-dasharray="2 1.5"/>`
    ]
  },
  "scheduled": {
    cat: "workflow", keywords: ["calendar","booked","queued","upcoming"],
    paths: [
      `<rect x="3.75" y="5.25" width="16.5" height="15" rx="2"/>`,
      `<path d="M3.75 9.75h16.5M8.5 3.5v3.5M15.5 3.5v3.5"/>`,
      `<path d="M9 14l2.25 2.25L16 12"/>`
    ]
  },
  "cancelled": {
    cat: "workflow", keywords: ["void","abort","cross","remove"],
    paths: [
      `<rect x="3.75" y="5.25" width="16.5" height="15" rx="2"/>`,
      `<path d="M3.75 9.75h16.5"/>`,
      `<path d="M9.5 13l5 5M14.5 13l-5 5"/>`
    ]
  },

  /* ═══ 16 · PATIENT JOURNEY ══════════════════════════════════ */
  "admission": {
    cat: "journey", keywords: ["check-in","admit","arrival","intake"],
    paths: [
      `<path d="M4 19.5v-9l8-4.5 8 4.5v9"/>`,
      `<path d="M9.5 19.5v-4.5h5v4.5"/>`,
      `<path d="M11 11.5l2 2"/>`
    ]
  },
  "discharge": {
    cat: "journey", keywords: ["release","exit","check-out","home"],
    paths: [
      `<path d="M4 19.5v-9l8-4.5 8 4.5v9"/>`,
      `<path d="M9.5 19.5v-6h5v6"/>`,
      `<path d="M14 16.5h5M16.5 14.5l2 2-2 2"/>`
    ]
  },
  "transfer-ward": {
    cat: "journey", keywords: ["move","shift","transfer","internal"],
    paths: [
      `<path d="M4 8.5h10l-2-2M14 15.5h-10l2 2"/>`,
      `<path d="M17 5.5h3v13h-3" stroke-dasharray="2 1.5"/>`
    ]
  },
  "referral-in": {
    cat: "journey", keywords: ["incoming","inbound","received","external"],
    paths: [
      `<path d="M14 12h-8M9 7l-5 5 5 5"/>`,
      `<rect x="14" y="5" width="6" height="14" rx="1"/>`,
      `<path d="M16 9h2M16 12h2M16 15h2"/>`
    ]
  },
  "referral-out": {
    cat: "journey", keywords: ["outgoing","outbound","send","external"],
    paths: [
      `<path d="M10 12h8M15 7l5 5-5 5"/>`,
      `<rect x="4" y="5" width="6" height="14" rx="1"/>`,
      `<path d="M6 9h2M6 12h2M6 15h2"/>`
    ]
  },
  "follow-up": {
    cat: "journey", keywords: ["revisit","next","return","review"],
    paths: [
      `<path d="M4.5 12a7.5 7.5 0 1 1 2.5 5.6"/>`,
      `<path d="M4.5 12v-4M4.5 12h4"/>`,
      `<circle cx="12" cy="12" r="1.25" fill="currentColor" stroke="none"/>`
    ]
  },
  "no-show": {
    cat: "journey", keywords: ["missed","absent","didn't attend","skip"],
    paths: [
      `<circle cx="12" cy="8.25" r="3.25"/>`,
      `<path d="M5 19c1.4-3.4 4.1-5 7-5s5.6 1.6 7 5"/>`,
      `<path d="M4 4l16 16" stroke-width="2.5"/>`
    ]
  },
  "walk-in": {
    cat: "journey", keywords: ["unscheduled","drop in","arrival","direct"],
    paths: [
      `<circle cx="10" cy="5.25" r="1.75"/>`,
      `<path d="M9 9l-2 5 2.5 1.5L8.5 20"/>`,
      `<path d="M9.5 12.5l3 .5 2-2"/>`,
      `<path d="M11 16l2.5 4"/>`
    ]
  },

  /* ═══ 17 · VITALS · MEASUREMENT ═════════════════════════════ */
  "spo2": {
    cat: "vitals", keywords: ["oximetry","oxygen saturation","pulse ox","finger"],
    paths: [
      `<rect x="6.5" y="4.5" width="11" height="9" rx="2"/>`,
      `<path d="M9 8.5l1.5 1.5 4-4"/>`,
      `<path d="M8 13.5l1 6h6l1-6"/>`
    ]
  },
  "heart-rate": {
    cat: "vitals", keywords: ["hr","bpm","pulse","ecg"],
    paths: [
      `<path d="M3.5 12h4l2-4 3 8 2-5 1.5 1h4.5"/>`
    ]
  },
  "respiratory-rate": {
    cat: "vitals", keywords: ["breath","rr","ventilation","wave"],
    paths: [
      `<path d="M3 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/>`,
      `<path d="M3 16h18" stroke-dasharray="1.5 2"/>`
    ]
  },
  "weight-scale": {
    cat: "vitals", keywords: ["weigh","kg","mass","measurement"],
    paths: [
      `<rect x="3.75" y="6.5" width="16.5" height="13" rx="2"/>`,
      `<path d="M9 10.5l3-2 3 2"/>`,
      `<path d="M12 14v2"/>`
    ]
  },
  "height-measure": {
    cat: "vitals", keywords: ["stadiometer","tall","cm","ruler"],
    paths: [
      `<path d="M5 4.5v15h2"/>`,
      `<path d="M5 6.5h2M5 9.5h2M5 12.5h2M5 15.5h2M5 18.5h2"/>`,
      `<path d="M10 19.5v-7l3-2.5 3 2.5v7"/>`,
      `<circle cx="13" cy="7" r="1.5"/>`
    ]
  },
  "bmi": {
    cat: "vitals", keywords: ["body mass","obesity","index","health"],
    paths: [
      `<path d="M4.5 18.5a7.5 7.5 0 0 1 15 0"/>`,
      `<path d="M4.5 18.5h15"/>`,
      `<path d="M12 18.5l4-5.5"/>`,
      `<circle cx="16" cy="13" r="0.9" fill="currentColor" stroke="none"/>`
    ]
  },
  "glucose": {
    cat: "vitals", keywords: ["sugar","bsl","diabetes","glucometer"],
    paths: [
      `<rect x="5.5" y="3.5" width="9" height="14" rx="1.5"/>`,
      `<path d="M7.5 7.5h5M7.5 11h3"/>`,
      `<path d="M14.5 14.5l4 4M16 16l2.5-2.5"/>`
    ]
  },
  "pain-score": {
    cat: "vitals", keywords: ["pain scale","face","0-10","assessment"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M9 14.5s1 1.5 3 1.5 3-1.5 3-1.5"/>`,
      `<circle cx="9" cy="10" r="0.9" fill="currentColor" stroke="none"/>`,
      `<circle cx="15" cy="10" r="0.9" fill="currentColor" stroke="none"/>`
    ]
  },

  /* ═══ 18 · TELEMEDICINE · DIGITAL HEALTH ════════════════════ */
  "video-consult": {
    cat: "telemed", keywords: ["telehealth","video call","virtual visit","webcam"],
    paths: [
      `<rect x="3.5" y="6.5" width="12" height="11" rx="1.5"/>`,
      `<path d="M15.5 10l5-3v10l-5-3z"/>`,
      `<path d="M7 10v2"/>`
    ]
  },
  "e-prescription": {
    cat: "telemed", keywords: ["erx","digital rx","online","script"],
    paths: [
      `<rect x="5" y="3.5" width="14" height="17" rx="1.5"/>`,
      `<path d="M8 8h2v4l2-1.5 2 1.5V8h2"/>`,
      `<path d="M8 14h8M8 17h6"/>`
    ]
  },
  "remote-monitor": {
    cat: "telemed", keywords: ["rpm","wearable","iot","home monitoring"],
    paths: [
      `<rect x="8.5" y="5.5" width="7" height="13" rx="1.5"/>`,
      `<path d="M10 9.5h4"/>`,
      `<circle cx="12" cy="14" r="1.4"/>`,
      `<path d="M5 11h-1.5M5 13h-1.5M19 11h1.5M19 13h1.5"/>`
    ]
  },
  "chat-consult": {
    cat: "telemed", keywords: ["text chat","message","async","support"],
    paths: [
      `<path d="M4 6.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 3v-3a2 2 0 0 1-1-1.7z"/>`,
      `<circle cx="9" cy="10.5" r="0.9" fill="currentColor" stroke="none"/>`,
      `<circle cx="12" cy="10.5" r="0.9" fill="currentColor" stroke="none"/>`,
      `<circle cx="15" cy="10.5" r="0.9" fill="currentColor" stroke="none"/>`
    ]
  },
  "virtual-waiting": {
    cat: "telemed", keywords: ["queue","online lobby","virtual room","wait"],
    paths: [
      `<rect x="3.5" y="5.5" width="17" height="11" rx="1.5"/>`,
      `<circle cx="12" cy="11" r="2.5"/>`,
      `<path d="M12 8.5v-1M12 13.5v1M9.5 11h-1M15.5 11h-1"/>`,
      `<path d="M7 20h10"/>`
    ]
  },
  "tele-icu": {
    cat: "telemed", keywords: ["e-icu","remote critical care","monitoring"],
    paths: [
      `<rect x="3.5" y="5.5" width="17" height="11" rx="1.5"/>`,
      `<path d="M6 11h2l1-2 1.5 4 1.5-3 1 1h5"/>`,
      `<path d="M7 20h10"/>`
    ]
  },

  /* ═══ 19 · INSURANCE WORKFLOW ═══════════════════════════════ */
  "pre-auth": {
    cat: "insure", keywords: ["pre-authorisation","approval","preauth","sanction"],
    paths: [
      `<rect x="4" y="3.5" width="13.5" height="17" rx="1.5"/>`,
      `<path d="M7.5 8h7M7.5 11.5h7M7.5 15h4"/>`,
      `<path d="M14.5 17l2 2 3.5-3.5"/>`
    ]
  },
  "eligibility": {
    cat: "insure", keywords: ["coverage check","verify","insured","member"],
    paths: [
      `<rect x="3.5" y="5.5" width="17" height="11" rx="1.5"/>`,
      `<circle cx="9" cy="11" r="2"/>`,
      `<path d="M13.5 9.5h4M13.5 12.5h3"/>`,
      `<path d="M5.5 19l1.5-1.5 2 1.5 2-1.5 1.5 1.5"/>`
    ]
  },
  "cashless": {
    cat: "insure", keywords: ["no payment","direct","empanelled","tpa"],
    paths: [
      `<rect x="3.5" y="6.5" width="17" height="11" rx="1.5"/>`,
      `<path d="M3.5 10h17"/>`,
      `<path d="M7 14h3"/>`,
      `<path d="M16 16.5l3-3"/>`
    ]
  },
  "copay": {
    cat: "insure", keywords: ["coinsurance","share","split","percent"],
    paths: [
      `<circle cx="8.5" cy="11" r="4.5"/>`,
      `<circle cx="15.5" cy="13" r="4.5"/>`,
      `<path d="M8.5 11l-.6-1.5M15.5 13l.6 1.5"/>`
    ]
  },
  "deductible": {
    cat: "insure", keywords: ["excess","out of pocket","threshold","limit"],
    paths: [
      `<path d="M3.5 19.5h17"/>`,
      `<path d="M3.5 15h17" stroke-dasharray="2 2"/>`,
      `<rect x="6" y="9" width="3" height="6.5"/>`,
      `<rect x="10.5" y="6" width="3" height="9.5"/>`,
      `<rect x="15" y="11" width="3" height="4.5"/>`
    ]
  },
  "denial": {
    cat: "insure", keywords: ["claim rejected","refused","no","payer"],
    paths: [
      `<rect x="4" y="3.5" width="13.5" height="17" rx="1.5"/>`,
      `<path d="M7.5 8h7M7.5 11.5h7"/>`,
      `<circle cx="16.5" cy="17" r="3.25"/>`,
      `<path d="M14.5 15l4 4M18.5 15l-4 4"/>`
    ]
  },
  "appeal": {
    cat: "insure", keywords: ["dispute","resubmit","contest","review"],
    paths: [
      `<rect x="4" y="3.5" width="13.5" height="17" rx="1.5"/>`,
      `<path d="M7.5 8h7M7.5 11.5h5"/>`,
      `<path d="M9 18l-2-2 2-2M7 16h6a3 3 0 0 0 3-3"/>`
    ]
  },
  "eob": {
    cat: "insure", keywords: ["explanation of benefits","statement","summary","payer letter"],
    paths: [
      `<rect x="3.5" y="5" width="17" height="14" rx="1.5"/>`,
      `<path d="M3.5 9h17"/>`,
      `<path d="M6.5 12h7M6.5 14.5h7M6.5 17h5"/>`,
      `<path d="M16 13.5l1.25 1.25L19 13"/>`
    ]
  },

  /* ═══ 20 · EDUCATION · RESEARCH ═════════════════════════════ */
  "clinical-trial": {
    cat: "research", keywords: ["trial","study","randomized","rct"],
    paths: [
      `<circle cx="7" cy="8" r="2.5"/>`,
      `<circle cx="17" cy="8" r="2.5"/>`,
      `<path d="M7 10.5v3M17 10.5v3"/>`,
      `<path d="M4 18.5l3-5 3 5M14 18.5l3-5 3 5"/>`
    ]
  },
  "study-protocol": {
    cat: "research", keywords: ["sop","method","procedure","trial doc"],
    paths: [
      `<rect x="5" y="3.5" width="14" height="17" rx="1.5"/>`,
      `<path d="M8 8h8M8 11h8M8 14h5"/>`,
      `<path d="M14.5 16l1.5 1.5 3-3"/>`
    ]
  },
  "ethics": {
    cat: "research", keywords: ["ec","irb","review board","approval"],
    paths: [
      `<path d="M12 4v16"/>`,
      `<path d="M6 7h12"/>`,
      `<path d="M3.5 13c0-2 1.5-6 3-6s3 4 3 6z"/>`,
      `<path d="M14.5 13c0-2 1.5-6 3-6s3 4 3 6z"/>`
    ]
  },
  "consent-form": {
    cat: "research", keywords: ["informed consent","signature","participate","form"],
    paths: [
      `<rect x="5" y="3.5" width="14" height="17" rx="1.5"/>`,
      `<path d="M8 8h8M8 11h8"/>`,
      `<path d="M8 16c1.5-1.5 2.5 1 4 0s2-2 4-1"/>`
    ]
  },
  "training": {
    cat: "research", keywords: ["course","learn","certificate","program"],
    paths: [
      `<path d="M3 9.5l9-4 9 4-9 4z"/>`,
      `<path d="M7 11.5v4c0 1.5 2.5 3 5 3s5-1.5 5-3v-4"/>`,
      `<path d="M21 9.5v4.5"/>`
    ]
  },
  "cme": {
    cat: "research", keywords: ["continuing medical education","credit","cpd"],
    paths: [
      `<rect x="3.5" y="5" width="17" height="13" rx="1.5"/>`,
      `<path d="M8 9.5h4M8 12.5h6"/>`,
      `<circle cx="16.5" cy="13.5" r="2.5"/>`,
      `<path d="M14.5 16l-1 2 3-1 3 1-1-2"/>`
    ]
  },
  "library": {
    cat: "research", keywords: ["books","catalogue","references","resources"],
    paths: [
      `<rect x="4" y="4" width="3" height="16" rx="0.5"/>`,
      `<rect x="8" y="4" width="3" height="16" rx="0.5"/>`,
      `<path d="M13 5l3-.8 4 14.5-3 .8z"/>`,
      `<path d="M5.5 8h0M9.5 8h0" stroke-width="2"/>`
    ]
  },
  "journal-publication": {
    cat: "research", keywords: ["paper","pubmed","article","publish"],
    paths: [
      `<path d="M5 5h8a3 3 0 0 1 3 3v12a3 3 0 0 0-3-3H5z"/>`,
      `<path d="M19 5h-3a3 3 0 0 0-3 3v12a3 3 0 0 1 3-3h3z"/>`,
      `<path d="M7 9h6M7 12h6"/>`
    ]
  },
  "dataset": {
    cat: "research", keywords: ["data","records","cohort","registry"],
    paths: [
      `<ellipse cx="12" cy="6" rx="7" ry="2.5"/>`,
      `<path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6"/>`,
      `<path d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6"/>`
    ]
  },
  "evidence": {
    cat: "research", keywords: ["evidence based","citation","reference","proof"],
    paths: [
      `<path d="M5 4.5h9l5 5v10a1.5 1.5 0 0 1-1.5 1.5h-12.5a1.5 1.5 0 0 1-1.5-1.5v-13.5a1.5 1.5 0 0 1 1.5-1.5z"/>`,
      `<path d="M14 4.5v5h5"/>`,
      `<path d="M8 14l2 2 4-4.5"/>`
    ]
  }
};

Object.assign(window.LIPI_ICONS, LIPI_ICONS_PHASE4);
window.LIPI_ICON_VERSION = "0.6.0";
window.LIPI_ICON_PHASE = 4;
