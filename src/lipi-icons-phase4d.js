/* ═══════════════════════════════════════════════════════════════
   LiPi Icon System — Phase 4 expansion pack (batch D)
   Adds 80 more base icons across IoT/Devices, Lab automation,
   Radiation safety, Maternity/NICU, Rehab, Wellness, Reporting,
   File types, Geography, plus a final UI sweep.
   © 2026 imagiQa Healthcare Services Pvt Ltd · All rights reserved.
   ═══════════════════════════════════════════════════════════════ */

const LIPI_ICONS_PHASE4D = {

  /* ═══ 38 · IoT · MEDICAL DEVICES ════════════════════════════ */
  "iot-sensor": {
    cat: "iot", keywords: ["sensor","probe","wireless","node"],
    paths: [
      `<circle cx="12" cy="12" r="2.5"/>`,
      `<path d="M8 8c-2 2-2 6 0 8M16 8c2 2 2 6 0 8"/>`,
      `<path d="M5 5c-4 4-4 10 0 14M19 5c4 4 4 10 0 14"/>`
    ]
  },
  "gateway": {
    cat: "iot", keywords: ["gateway","hub","router","bridge"],
    paths: [
      `<rect x="3.5" y="13" width="17" height="6" rx="1.5"/>`,
      `<path d="M7 16h0M10 16h0" stroke-width="2"/>`,
      `<circle cx="16" cy="16" r="1.2" fill="currentColor" stroke="none"/>`,
      `<path d="M8 13v-3a4 4 0 0 1 8 0v3"/>`
    ]
  },
  "edge-device": {
    cat: "iot", keywords: ["edge","node","compute","on-prem"],
    paths: [
      `<rect x="5" y="5" width="14" height="14" rx="1.5"/>`,
      `<rect x="9" y="9" width="6" height="6" rx="0.5"/>`,
      `<path d="M9 5v-2M15 5v-2M9 21v-2M15 21v-2M3 9h2M3 15h2M21 9h-2M21 15h-2"/>`
    ]
  },
  "alarm": {
    cat: "iot", keywords: ["alert","siren","emergency","alarm"],
    paths: [
      `<path d="M5 17.5h14"/>`,
      `<path d="M7 17.5v-6a5 5 0 0 1 10 0v6"/>`,
      `<path d="M11 4v-1.5M13 4v-1.5"/>`,
      `<path d="M11 20.5a1 1 0 0 0 2 0"/>`
    ]
  },
  "ventilator": {
    cat: "iot", keywords: ["mechanical","breathing","support","icu"],
    paths: [
      `<rect x="4" y="5" width="16" height="12" rx="1.5"/>`,
      `<path d="M6 11c2-2 4 2 6 0s4 2 6 0"/>`,
      `<circle cx="17" cy="14" r="0.8" fill="currentColor" stroke="none"/>`,
      `<circle cx="19" cy="14" r="0.8" fill="currentColor" stroke="none"/>`,
      `<path d="M9 20h6"/>`
    ]
  },
  "infusion-pump": {
    cat: "iot", keywords: ["iv pump","dosing","flow","infusion"],
    paths: [
      `<rect x="5" y="3.5" width="14" height="13" rx="1.5"/>`,
      `<path d="M9 7.5h6M9 10h4"/>`,
      `<rect x="8" y="13" width="8" height="2" rx="0.3" fill="currentColor" stroke="none" fill-opacity="0.35"/>`,
      `<path d="M12 16.5v4M10 20.5h4"/>`
    ]
  },
  "patient-monitor": {
    cat: "iot", keywords: ["bedside monitor","multipara","vitals","display"],
    paths: [
      `<rect x="3" y="4" width="18" height="13" rx="1.5"/>`,
      `<path d="M5 11h2l1-3 2 6 2-4 1 2h2M16 11h3"/>`,
      `<path d="M9 21h6M12 17v4"/>`
    ]
  },

  /* ═══ 39 · LAB AUTOMATION ═══════════════════════════════════ */
  "auto-analyzer": {
    cat: "labauto", keywords: ["analyzer","chemistry","automation","hematology"],
    paths: [
      `<rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/>`,
      `<circle cx="8" cy="12" r="2"/>`,
      `<path d="M12 9h6M12 12h6M12 15h6"/>`
    ]
  },
  "pipette": {
    cat: "labauto", keywords: ["pipette","micro","dispense","liquid"],
    paths: [
      `<path d="M11 3.5h2v4l1 11a2 2 0 0 1-4 0l1-11z"/>`,
      `<path d="M11 7h2M11 11h2"/>`,
      `<path d="M11.5 19l.5 1 .5-1z" fill="currentColor" stroke="none"/>`
    ]
  },
  "rack": {
    cat: "labauto", keywords: ["tube rack","test rack","holder","lab"],
    paths: [
      `<path d="M4 9h16v2h-16zM4 18h16v2h-16z"/>`,
      `<path d="M7 11v7M11 11v7M15 11v7M17.5 11v7"/>`
    ]
  },
  "incubator": {
    cat: "labauto", keywords: ["incubator","culture","temperature","lab"],
    paths: [
      `<rect x="4" y="6" width="16" height="13" rx="1.5"/>`,
      `<rect x="6" y="8" width="12" height="6" rx="0.5"/>`,
      `<path d="M8 17h3M13 17h3"/>`,
      `<path d="M10 11l1 1 2-2"/>`
    ]
  },
  "spectrometer": {
    cat: "labauto", keywords: ["spectrum","spectro","analyzer","wave"],
    paths: [
      `<path d="M3 14c4-9 14-9 18 0"/>`,
      `<path d="M3 14h18"/>`,
      `<rect x="7" y="14" width="2" height="4" fill="currentColor" stroke="none"/>`,
      `<rect x="11" y="14" width="2" height="6" fill="currentColor" stroke="none" fill-opacity="0.5"/>`,
      `<rect x="15" y="14" width="2" height="3" fill="currentColor" stroke="none" fill-opacity="0.3"/>`
    ]
  },
  "qc-control": {
    cat: "labauto", keywords: ["quality control","levey jennings","lab qc"],
    paths: [
      `<path d="M3 12h18"/>`,
      `<path d="M3 8h18M3 16h18" stroke-dasharray="2 2"/>`,
      `<path d="M5 12l3-2 3 4 3-3 3 1 3 1"/>`,
      `<circle cx="8" cy="10" r="0.8" fill="currentColor" stroke="none"/>`,
      `<circle cx="14" cy="11" r="0.8" fill="currentColor" stroke="none"/>`
    ]
  },
  "reagent": {
    cat: "labauto", keywords: ["chemical","reagent","bottle","solvent"],
    paths: [
      `<path d="M9 3.5h6v5l3 9a2 2 0 0 1-2 2.5h-8a2 2 0 0 1-2-2.5l3-9z"/>`,
      `<path d="M9 3.5h6"/>`,
      `<path d="M8 14h8"/>`
    ]
  },

  /* ═══ 40 · RADIATION · ONCOLOGY OPS ═════════════════════════ */
  "radiation": {
    cat: "radonc", keywords: ["ionising","radiation","trefoil","warning"],
    paths: [
      `<circle cx="12" cy="12" r="2"/>`,
      `<path d="M12 3.5l-3.5 6h7z"/>`,
      `<path d="M3.5 17l6-3.5-3.5-6z" transform="rotate(120 8 13)"/>`,
      `<path d="M3.5 17l6-3.5-3.5-6z" transform="rotate(240 16 13)"/>`
    ]
  },
  "dose-fractionation": {
    cat: "radonc", keywords: ["fractions","dose","schedule","radiotherapy"],
    paths: [
      `<path d="M3.5 19.5h17"/>`,
      `<rect x="5" y="14" width="2" height="5.5" fill="currentColor" stroke="none"/>`,
      `<rect x="9" y="10" width="2" height="9.5" fill="currentColor" stroke="none"/>`,
      `<rect x="13" y="7" width="2" height="12.5" fill="currentColor" stroke="none"/>`,
      `<rect x="17" y="12" width="2" height="7.5" fill="currentColor" stroke="none"/>`
    ]
  },
  "simulation-ct": {
    cat: "radonc", keywords: ["simulation","ct sim","planning","oncology"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M12 3.75v16.5"/>`,
      `<path d="M3.75 12h16.5" stroke-dasharray="2 2"/>`,
      `<circle cx="14" cy="10" r="0.9" fill="currentColor" stroke="none"/>`
    ]
  },
  "isocenter": {
    cat: "radonc", keywords: ["isocentre","crosshair","alignment","linac"],
    paths: [
      `<circle cx="12" cy="12" r="6"/>`,
      `<path d="M12 3v4M12 17v4M3 12h4M17 12h4"/>`,
      `<circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>`
    ]
  },
  "treatment-plan": {
    cat: "radonc", keywords: ["plan","contour","target","ptv"],
    paths: [
      `<rect x="4" y="5" width="16" height="14" rx="1.5"/>`,
      `<path d="M9 14c-2 0-3-2-3-3.5s1-3 3-3 4 2 4 4-2 2.5-4 2.5z"/>`,
      `<path d="M15 9h2M15 12h2M15 15h2"/>`
    ]
  },
  "brachytherapy": {
    cat: "radonc", keywords: ["brachy","seed","implant","radiation"],
    paths: [
      `<path d="M5 5l14 14M19 5L5 19"/>`,
      `<circle cx="8.5" cy="8.5" r="1.4" fill="currentColor" stroke="none"/>`,
      `<circle cx="15.5" cy="15.5" r="1.4" fill="currentColor" stroke="none"/>`,
      `<circle cx="8.5" cy="15.5" r="1.4" fill="currentColor" stroke="none"/>`,
      `<circle cx="15.5" cy="8.5" r="1.4" fill="currentColor" stroke="none"/>`,
      `<circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/>`
    ]
  },
  "imrt": {
    cat: "radonc", keywords: ["imrt","vmat","intensity modulated","beams"],
    paths: [
      `<circle cx="12" cy="12" r="3"/>`,
      `<path d="M12 4v3M12 17v3M4 12h3M17 12h3M6.5 6.5l2 2M15.5 15.5l2 2M6.5 17.5l2-2M15.5 8.5l2-2"/>`
    ]
  },

  /* ═══ 41 · MATERNITY · NICU EXTRAS ══════════════════════════ */
  "fetal-monitor": {
    cat: "matnicu", keywords: ["ctg","fetal heart","nst","monitoring"],
    paths: [
      `<rect x="3" y="6" width="18" height="9" rx="1"/>`,
      `<path d="M5 11c2-3 4 2 6 0s4-3 6 0 2-1 3-1"/>`,
      `<path d="M9 18h6M12 15v3"/>`
    ]
  },
  "antenatal": {
    cat: "matnicu", keywords: ["antenatal","anc","prenatal","checkup"],
    paths: [
      `<path d="M9 4a3 3 0 0 1 6 0v2"/>`,
      `<path d="M6 8c0 6 3 12 6 12s6-6 6-12c-1 1-3 1-6 1s-5 0-6-1z"/>`,
      `<circle cx="13" cy="13" r="1.3"/>`
    ]
  },
  "delivery-room": {
    cat: "matnicu", keywords: ["labour","delivery","birth","ward"],
    paths: [
      `<path d="M4 19v-7l8-4 8 4v7"/>`,
      `<path d="M10 19v-5h4v5"/>`,
      `<path d="M11.5 11l1 1 1.5-1.5"/>`
    ]
  },
  "incubator-baby": {
    cat: "matnicu", keywords: ["nicu","preterm","baby incubator"],
    paths: [
      `<path d="M3 15c0-4 4-7 9-7s9 3 9 7"/>`,
      `<path d="M3 15h18v3h-18z"/>`,
      `<circle cx="12" cy="13" r="1.5"/>`
    ]
  },
  "kangaroo-care": {
    cat: "matnicu", keywords: ["skin to skin","ksc","newborn","bonding"],
    paths: [
      `<circle cx="10" cy="7" r="2.5"/>`,
      `<path d="M5 20c1-4 3-6 6-6s4 1 5 4"/>`,
      `<circle cx="16" cy="13" r="1.5"/>`,
      `<path d="M14.5 16c.5-1 1.5-1.5 2.5-1.5s2 .5 2 1.5"/>`
    ]
  },
  "lactation": {
    cat: "matnicu", keywords: ["breastfeeding","lactation","mother","baby"],
    paths: [
      `<path d="M3 14c0-3 3-5 6-5s4 2 4 4-1 4-3 4M9 17l4-4"/>`,
      `<circle cx="9" cy="11" r="0.8" fill="currentColor" stroke="none"/>`,
      `<circle cx="18" cy="9" r="3"/>`
    ]
  },

  /* ═══ 42 · REHAB · PHYSIO EXTRAS ════════════════════════════ */
  "gait-analysis": {
    cat: "rehab", keywords: ["walking","gait","steps","analysis"],
    paths: [
      `<path d="M5 19l1-7 2-1 2 4M14 19l1-7 2-1"/>`,
      `<circle cx="8" cy="6" r="1.4"/>`,
      `<circle cx="17" cy="6" r="1.4"/>`,
      `<path d="M5 19h14"/>`
    ]
  },
  "exercise": {
    cat: "rehab", keywords: ["workout","dumbbell","strength","activity"],
    paths: [
      `<path d="M3 12h2M19 12h2"/>`,
      `<rect x="5" y="9" width="2" height="6" rx="0.3"/>`,
      `<rect x="17" y="9" width="2" height="6" rx="0.3"/>`,
      `<path d="M7 12h10"/>`,
      `<rect x="8" y="10.5" width="8" height="3" rx="0.3"/>`
    ]
  },
  "stretch": {
    cat: "rehab", keywords: ["stretch","flexibility","yoga","warmup"],
    paths: [
      `<circle cx="12" cy="5.5" r="2"/>`,
      `<path d="M12 7.5v6M6 11l6 2 6-2M9 20l3-6 3 6"/>`
    ]
  },
  "balance": {
    cat: "rehab", keywords: ["balance","equilibrium","stability","training"],
    paths: [
      `<path d="M3 11h18"/>`,
      `<path d="M12 11v6"/>`,
      `<path d="M9 17h6"/>`,
      `<path d="M5 11l2-4M19 11l-2-4"/>`,
      `<circle cx="7" cy="7" r="1.5"/>`,
      `<circle cx="17" cy="7" r="1.5"/>`
    ]
  },
  "crutch": {
    cat: "rehab", keywords: ["crutch","walking aid","support","mobility"],
    paths: [
      `<path d="M10 4h4v3l-1 13M14 7l1 13"/>`,
      `<path d="M9 7h6M11 20h5"/>`
    ]
  },
  "speech-therapy": {
    cat: "rehab", keywords: ["speech","voice","talk","therapy"],
    paths: [
      `<path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 3v-3a2 2 0 0 1-1-1.7z"/>`,
      `<path d="M8 9c2-2 6-2 8 0M9 12c1-1 5-1 6 0"/>`
    ]
  },

  /* ═══ 43 · WELLNESS · LIFESTYLE ═════════════════════════════ */
  "step-count": {
    cat: "wellness", keywords: ["steps","pedometer","activity","walk"],
    paths: [
      `<path d="M6 4.5c2 0 4 2 3 5s-3 2-4 0-1-5 1-5z"/>`,
      `<path d="M15 11c2 0 4 2 3 5s-3 2-4 0-1-5 1-5z"/>`,
      `<circle cx="7" cy="11" r="1.2"/>`,
      `<circle cx="9" cy="13" r="0.9"/>`,
      `<circle cx="16" cy="17" r="1.2"/>`,
      `<circle cx="18" cy="19" r="0.9"/>`
    ]
  },
  "sleep": {
    cat: "wellness", keywords: ["sleep","moon","rest","night"],
    paths: [
      `<path d="M20 14a8 8 0 1 1-10-10c0 5.5 4.5 10 10 10z"/>`,
      `<path d="M16 5l1 1 1-1M15 7l1 1 1-1"/>`
    ]
  },
  "meditation": {
    cat: "wellness", keywords: ["meditate","mindfulness","calm","zen"],
    paths: [
      `<circle cx="12" cy="6" r="2.25"/>`,
      `<path d="M12 9v4"/>`,
      `<path d="M5 18c2-3 4-5 7-5s5 2 7 5"/>`,
      `<path d="M5 18h14"/>`
    ]
  },
  "nutrition-score": {
    cat: "wellness", keywords: ["nutri","food score","quality","rating"],
    paths: [
      `<path d="M12 5l-2 4-4 .5 3 3-.5 4 3.5-2 3.5 2-.5-4 3-3-4-.5z"/>`,
      `<path d="M4 18h16"/>`
    ]
  },
  "mental-wellness": {
    cat: "wellness", keywords: ["mood","stress","mental","wellbeing"],
    paths: [
      `<path d="M12 20s-8-4-8-11a4 4 0 0 1 7-2.5A4 4 0 0 1 20 9c0 5-4 8-6 10z"/>`,
      `<path d="M9 11l1 1 1-1M14 11l-1 1-1-1M10 14s1 1 2 1 2-1 2-1"/>`
    ]
  },

  /* ═══ 44 · REPORTING · ANALYTICS EXTRAS ═════════════════════ */
  "report-export": {
    cat: "reporting", keywords: ["report","export","share","pdf"],
    paths: [
      `<rect x="5" y="3.5" width="11" height="14" rx="1.5"/>`,
      `<path d="M8 8h5M8 11h5"/>`,
      `<path d="M16 11l4-2v8l-4-2z"/>`,
      `<path d="M16 13.5h-3"/>`
    ]
  },
  "report-schedule": {
    cat: "reporting", keywords: ["scheduled","cron","report","email"],
    paths: [
      `<rect x="4" y="3.5" width="12" height="14" rx="1.5"/>`,
      `<path d="M7 8h6M7 11h4"/>`,
      `<circle cx="17" cy="15" r="4.5"/>`,
      `<path d="M17 13v2.5l1.5 1"/>`
    ]
  },
  "dashboard-builder": {
    cat: "reporting", keywords: ["dashboard","builder","tiles","custom"],
    paths: [
      `<rect x="3.5" y="3.5" width="17" height="17" rx="1.5"/>`,
      `<path d="M3.5 9.5h17M9 9.5v11M9 14h11"/>`,
      `<path d="M11 17l1 1 2.5-2.5"/>`
    ]
  },
  "drill-down": {
    cat: "reporting", keywords: ["drill","explore","detail","drill-through"],
    paths: [
      `<rect x="3.5" y="3.5" width="8" height="8" rx="1"/>`,
      `<path d="M11.5 11.5l5 5M16 13v3.5h-3.5"/>`,
      `<rect x="14" y="14" width="6" height="6" rx="1"/>`
    ]
  },
  "data-export": {
    cat: "reporting", keywords: ["export","csv","data dump","download"],
    paths: [
      `<path d="M3.5 14v4a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-4"/>`,
      `<path d="M12 4v11M8 11l4 4 4-4"/>`
    ]
  },
  "data-import": {
    cat: "reporting", keywords: ["import","upload","ingest","load"],
    paths: [
      `<path d="M3.5 14v4a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-4"/>`,
      `<path d="M12 15V4M8 8l4-4 4 4"/>`
    ]
  },
  "compare": {
    cat: "reporting", keywords: ["compare","ab","diff","versus"],
    paths: [
      `<path d="M7 4v16M17 4v16"/>`,
      `<path d="M4 7l3-3 3 3M14 17l3 3 3-3"/>`,
      `<path d="M7 8h2M7 12h2M7 16h2M15 8h2M15 12h2M15 16h2"/>`
    ]
  },

  /* ═══ 45 · FILE · DOCUMENT TYPES ════════════════════════════ */
  "file-pdf": {
    cat: "filetype", keywords: ["pdf","document","file","report"],
    paths: [
      `<path d="M5 4.5h9l5 5v9.5a1.5 1.5 0 0 1-1.5 1.5h-12.5a1.5 1.5 0 0 1-1.5-1.5v-13.5a1.5 1.5 0 0 1 1.5-1.5z"/>`,
      `<path d="M14 4.5v5h5"/>`,
      `<path d="M7 14h2v3M11 14h1.5a1.25 1.25 0 0 1 0 2.5H11zM11 14v3M14 14h3M14 14v3M14 15.5h2"/>`
    ]
  },
  "file-image": {
    cat: "filetype", keywords: ["image","photo","jpg","png"],
    paths: [
      `<rect x="4" y="4.5" width="16" height="15" rx="1.5"/>`,
      `<circle cx="9" cy="10" r="1.5"/>`,
      `<path d="M4 17l4-4 3 3 4-5 5 6"/>`
    ]
  },
  "file-excel": {
    cat: "filetype", keywords: ["excel","csv","spreadsheet","xlsx"],
    paths: [
      `<path d="M5 4.5h9l5 5v9.5a1.5 1.5 0 0 1-1.5 1.5h-12.5a1.5 1.5 0 0 1-1.5-1.5v-13.5a1.5 1.5 0 0 1 1.5-1.5z"/>`,
      `<path d="M14 4.5v5h5"/>`,
      `<path d="M8 13l5 5M13 13l-5 5"/>`
    ]
  },
  "file-word": {
    cat: "filetype", keywords: ["word","doc","document","letter"],
    paths: [
      `<path d="M5 4.5h9l5 5v9.5a1.5 1.5 0 0 1-1.5 1.5h-12.5a1.5 1.5 0 0 1-1.5-1.5v-13.5a1.5 1.5 0 0 1 1.5-1.5z"/>`,
      `<path d="M14 4.5v5h5"/>`,
      `<path d="M7 13l1 4 1.5-3 1.5 3 1-4"/>`
    ]
  },
  "file-dicom": {
    cat: "filetype", keywords: ["dicom","medical image","radiology","slice"],
    paths: [
      `<path d="M5 4.5h9l5 5v9.5a1.5 1.5 0 0 1-1.5 1.5h-12.5a1.5 1.5 0 0 1-1.5-1.5v-13.5a1.5 1.5 0 0 1 1.5-1.5z"/>`,
      `<path d="M14 4.5v5h5"/>`,
      `<path d="M7 14h2v3M11 14h2a1.5 1.5 0 0 1 0 3h-2zM11 14v3M16 14v3M16 14h1"/>`
    ]
  },
  "file-archive": {
    cat: "filetype", keywords: ["zip","archive","compressed","bundle"],
    paths: [
      `<path d="M5 4.5h9l5 5v9.5a1.5 1.5 0 0 1-1.5 1.5h-12.5a1.5 1.5 0 0 1-1.5-1.5v-13.5a1.5 1.5 0 0 1 1.5-1.5z"/>`,
      `<path d="M14 4.5v5h5"/>`,
      `<path d="M9 4.5v2M11 6.5v2M9 8.5v2M11 10.5v2"/>`,
      `<rect x="9" y="13" width="3" height="4" rx="0.5"/>`
    ]
  },
  "file-attach": {
    cat: "filetype", keywords: ["attach","paperclip","attachment","file"],
    paths: [
      `<path d="M19 11l-8 8a4 4 0 0 1-6-6l9-9a3 3 0 0 1 4 4l-9 9a2 2 0 0 1-3-3l8-8"/>`
    ]
  },

  /* ═══ 46 · GEOGRAPHY · LOCATION ═════════════════════════════ */
  "location-pin": {
    cat: "geo", keywords: ["pin","location","map","gps"],
    paths: [
      `<path d="M12 21s-7-7-7-12a7 7 0 0 1 14 0c0 5-7 12-7 12z"/>`,
      `<circle cx="12" cy="9" r="2.5"/>`
    ]
  },
  "map": {
    cat: "geo", keywords: ["map","atlas","region","plot"],
    paths: [
      `<path d="M3.5 6l5-2 7 2 5-2v14l-5 2-7-2-5 2z"/>`,
      `<path d="M8.5 4v14M15.5 6v14"/>`
    ]
  },
  "navigation": {
    cat: "geo", keywords: ["compass","direction","navigate","route"],
    paths: [
      `<path d="M3.5 20.5L12 3.5l8.5 17-8.5-4z"/>`,
      `<path d="M12 7v9"/>`
    ]
  },
  "branch-location": {
    cat: "geo", keywords: ["branch","hospital","facility","centre"],
    paths: [
      `<path d="M12 21s-7-7-7-12a7 7 0 0 1 14 0c0 5-7 12-7 12z"/>`,
      `<path d="M12 6v6M9 9h6"/>`
    ]
  },
  "catchment": {
    cat: "geo", keywords: ["catchment","area","region","zone"],
    paths: [
      `<circle cx="12" cy="12" r="3"/>`,
      `<circle cx="12" cy="12" r="6" stroke-dasharray="2 2"/>`,
      `<circle cx="12" cy="12" r="9" stroke-dasharray="1 3"/>`
    ]
  },
  "route": {
    cat: "geo", keywords: ["route","path","journey","gps"],
    paths: [
      `<circle cx="6" cy="6" r="2"/>`,
      `<circle cx="18" cy="18" r="2"/>`,
      `<path d="M6 8c0 4 4 4 4 8 0 4 4 4 6 0"/>`
    ]
  }
};

Object.assign(window.LIPI_ICONS, LIPI_ICONS_PHASE4D);
