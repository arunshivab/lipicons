/* ═══════════════════════════════════════════════════════════════
   LiPi Icon System — Phase 4 expansion pack (batch C)
   Adds 80 more base icons across clinical specialties, UI states,
   records, pharmacy/inventory ops, ambulatory + emergency extras.
   © 2026 imagiQa Healthcare Services Pvt Ltd · All rights reserved.
   ═══════════════════════════════════════════════════════════════ */

const LIPI_ICONS_PHASE4C = {

  /* ═══ 31 · CLINICAL SPECIALTIES (deep cuts) ═════════════════ */
  "cardiology": {
    cat: "specialty", keywords: ["heart","cardio","ecg","cardiac"],
    paths: [
      `<path d="M12 20.5s-7-4.5-7-10.5a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5c0 6-7 10.5-7 10.5z"/>`,
      `<path d="M7 12h2l1.5-2.5L13 14l1-2 1 1h3"/>`
    ]
  },
  "neurology": {
    cat: "specialty", keywords: ["brain","neuro","neural","mind"],
    paths: [
      `<path d="M9 5c-3 0-5 2-5 5 0 2 1 3 1 5s-1 3-1 4M15 5c3 0 5 2 5 5 0 2-1 3-1 5s1 3 1 4"/>`,
      `<path d="M9 5c0 2 6 2 6 0M12 5v15"/>`,
      `<circle cx="9" cy="10" r="0.8" fill="currentColor" stroke="none"/>`,
      `<circle cx="15" cy="10" r="0.8" fill="currentColor" stroke="none"/>`
    ]
  },
  "dermatology": {
    cat: "specialty", keywords: ["skin","derma","mole","rash"],
    paths: [
      `<path d="M4 12c0-5 4-8 8-8s8 3 8 8-4 8-8 8-8-3-8-8z"/>`,
      `<circle cx="9" cy="10" r="1.2"/>`,
      `<circle cx="14" cy="13" r="0.8"/>`,
      `<circle cx="11" cy="16" r="1"/>`,
      `<circle cx="16" cy="9" r="0.6"/>`
    ]
  },
  "urology": {
    cat: "specialty", keywords: ["urinary","bladder","kidney","stones"],
    paths: [
      `<path d="M8 4v4M16 4v4"/>`,
      `<path d="M6 8h12l-1 4c1 2 1 4 0 5s-3 1.5-5 1.5-4 .5-5-1.5-1-3 0-5z"/>`,
      `<circle cx="12" cy="13" r="1"/>`
    ]
  },
  "gastro": {
    cat: "specialty", keywords: ["stomach","gi","intestine","digestion"],
    paths: [
      `<path d="M10 4c4 0 5 3 5 6 0 2-2 2-2 4s2 2 2 4-2 3-4 3-3-2-3-4 2-2 2-4-2-2-2-4 1-5 2-5z"/>`,
      `<path d="M10 4c0 1 .5 2 1 2"/>`
    ]
  },
  "pediatrics": {
    cat: "specialty", keywords: ["child","baby","peds","kid"],
    paths: [
      `<circle cx="12" cy="8" r="3.5"/>`,
      `<path d="M9 6.5c-1.5-1-1.5-3 0-3M15 6.5c1.5-1 1.5-3 0-3"/>`,
      `<path d="M7 19.5c1-3 3-4 5-4s4 1 5 4"/>`
    ]
  },
  "orthopedics": {
    cat: "specialty", keywords: ["bone","ortho","fracture","skeletal"],
    paths: [
      `<path d="M4 8a2.5 2.5 0 0 1 4-2 2.5 2.5 0 0 1 2 2v.5l8 8h.5a2.5 2.5 0 0 1 2 4 2.5 2.5 0 0 1-4 0V20l-8-8h-.5a2.5 2.5 0 0 1-4-2v-2z"/>`
    ]
  },
  "ophthalmology-detail": {
    cat: "specialty", keywords: ["eye","retina","vision","fundus"],
    paths: [
      `<path d="M3 12c2-4 5-6 9-6s7 2 9 6c-2 4-5 6-9 6s-7-2-9-6z"/>`,
      `<circle cx="12" cy="12" r="3"/>`,
      `<circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>`
    ]
  },
  "psychiatry": {
    cat: "specialty", keywords: ["mental health","psych","mind","therapy"],
    paths: [
      `<path d="M16 4c-3-1-7 0-8 4s-1 6 1 9c1 2 5 3 7 1s3-5 2-8"/>`,
      `<path d="M11 13c1 1 2 1 3 0"/>`,
      `<circle cx="11" cy="10" r="0.8" fill="currentColor" stroke="none"/>`,
      `<circle cx="15" cy="10" r="0.8" fill="currentColor" stroke="none"/>`
    ]
  },
  "endocrinology": {
    cat: "specialty", keywords: ["thyroid","diabetes","hormone","gland"],
    paths: [
      `<path d="M8 6c0 4 0 8 4 8s4-4 4-8c-1 0-2 1-4 1s-3-1-4-1z"/>`,
      `<path d="M8 14l-2 6M16 14l2 6"/>`,
      `<path d="M10 14v3M14 14v3"/>`
    ]
  },
  "rheumatology": {
    cat: "specialty", keywords: ["joint","arthritis","autoimmune","ra"],
    paths: [
      `<circle cx="8" cy="8" r="3"/>`,
      `<circle cx="16" cy="16" r="3"/>`,
      `<path d="M10 10l4 4"/>`,
      `<path d="M6 6l-1.5-1.5M18 18l1.5 1.5"/>`
    ]
  },
  "obgyn": {
    cat: "specialty", keywords: ["gynecology","womens health","uterus","ovary"],
    paths: [
      `<circle cx="12" cy="9" r="3.5"/>`,
      `<path d="M12 12.5v8M9 17h6"/>`
    ]
  },

  /* ═══ 32 · UI · STATES & ARROWS ═════════════════════════════ */
  "arrow-up": {
    cat: "ui", keywords: ["arrow","up","direction"],
    paths: [`<path d="M12 19.5v-15M5.5 11l6.5-6.5 6.5 6.5"/>`]
  },
  "arrow-down": {
    cat: "ui", keywords: ["arrow","down","direction"],
    paths: [`<path d="M12 4.5v15M5.5 13l6.5 6.5 6.5-6.5"/>`]
  },
  "arrow-left": {
    cat: "ui", keywords: ["arrow","back","left"],
    paths: [`<path d="M19.5 12h-15M11 5.5l-6.5 6.5 6.5 6.5"/>`]
  },
  "arrow-right": {
    cat: "ui", keywords: ["arrow","forward","right","next"],
    paths: [`<path d="M4.5 12h15M13 5.5l6.5 6.5-6.5 6.5"/>`]
  },
  "sort": {
    cat: "ui", keywords: ["order","arrange","asc desc"],
    paths: [
      `<path d="M7 4.5v15M3.5 8L7 4.5 10.5 8"/>`,
      `<path d="M17 19.5v-15M13.5 16L17 19.5 20.5 16"/>`
    ]
  },
  "expand": {
    cat: "ui", keywords: ["fullscreen","grow","maximize"],
    paths: [
      `<path d="M4 9V4h5"/>`,
      `<path d="M20 9V4h-5"/>`,
      `<path d="M4 15v5h5"/>`,
      `<path d="M20 15v5h-5"/>`
    ]
  },
  "collapse": {
    cat: "ui", keywords: ["minimize","shrink","exit fullscreen"],
    paths: [
      `<path d="M9 4v5H4"/>`,
      `<path d="M15 4v5h5"/>`,
      `<path d="M9 20v-5H4"/>`,
      `<path d="M15 20v-5h5"/>`
    ]
  },
  "drag-handle": {
    cat: "ui", keywords: ["grip","reorder","move"],
    paths: [
      `<circle cx="9" cy="6" r="1.4" fill="currentColor" stroke="none"/>`,
      `<circle cx="9" cy="12" r="1.4" fill="currentColor" stroke="none"/>`,
      `<circle cx="9" cy="18" r="1.4" fill="currentColor" stroke="none"/>`,
      `<circle cx="15" cy="6" r="1.4" fill="currentColor" stroke="none"/>`,
      `<circle cx="15" cy="12" r="1.4" fill="currentColor" stroke="none"/>`,
      `<circle cx="15" cy="18" r="1.4" fill="currentColor" stroke="none"/>`
    ]
  },
  "list-view": {
    cat: "ui", keywords: ["list","rows","table view"],
    paths: [
      `<path d="M8 6h12M8 12h12M8 18h12"/>`,
      `<circle cx="4.5" cy="6" r="1.2" fill="currentColor" stroke="none"/>`,
      `<circle cx="4.5" cy="12" r="1.2" fill="currentColor" stroke="none"/>`,
      `<circle cx="4.5" cy="18" r="1.2" fill="currentColor" stroke="none"/>`
    ]
  },
  "grid-view": {
    cat: "ui", keywords: ["grid","tile","cards"],
    paths: [
      `<rect x="4" y="4" width="7" height="7" rx="0.5"/>`,
      `<rect x="13" y="4" width="7" height="7" rx="0.5"/>`,
      `<rect x="4" y="13" width="7" height="7" rx="0.5"/>`,
      `<rect x="13" y="13" width="7" height="7" rx="0.5"/>`
    ]
  },
  "kanban": {
    cat: "ui", keywords: ["board","cards","columns","workflow"],
    paths: [
      `<rect x="4" y="4" width="4" height="14" rx="0.5"/>`,
      `<rect x="10" y="4" width="4" height="10" rx="0.5"/>`,
      `<rect x="16" y="4" width="4" height="7" rx="0.5"/>`
    ]
  },
  "calendar-day": {
    cat: "ui", keywords: ["day view","today","date","schedule"],
    paths: [
      `<rect x="3.75" y="5.25" width="16.5" height="15" rx="2"/>`,
      `<path d="M3.75 9.75h16.5M8.5 3.5v3.5M15.5 3.5v3.5"/>`,
      `<rect x="7" y="12" width="10" height="2" rx="0.5" fill="currentColor" stroke="none"/>`
    ]
  },
  "notification-dot": {
    cat: "ui", keywords: ["badge","alert","unread","dot"],
    paths: [
      `<path d="M6.5 17.25v-5.5a5.5 5.5 0 0 1 11 0v5.5"/>`,
      `<path d="M4.75 17.25h14.5"/>`,
      `<path d="M10 20.25a2 2 0 0 0 4 0"/>`,
      `<circle cx="17.5" cy="6.5" r="2.5" fill="currentColor" stroke="none"/>`
    ]
  },
  "bookmark": {
    cat: "ui", keywords: ["save","ribbon","mark","favorite"],
    paths: [
      `<path d="M6 4h12v16l-6-4-6 4z"/>`
    ]
  },
  "tag": {
    cat: "ui", keywords: ["label","badge","category","price tag"],
    paths: [
      `<path d="M3.5 11l8-7h8v8l-8 8z"/>`,
      `<circle cx="15.5" cy="8.5" r="1.25" fill="currentColor" stroke="none"/>`
    ]
  },
  "flag": {
    cat: "ui", keywords: ["mark","priority","report","alert"],
    paths: [
      `<path d="M5 20.5v-16h11l-2 4 2 4h-11"/>`
    ]
  },

  /* ═══ 33 · RECORDS · ENCOUNTERS ═════════════════════════════ */
  "encounter": {
    cat: "records", keywords: ["visit","episode","consultation"],
    paths: [
      `<rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/>`,
      `<circle cx="9" cy="11" r="2.5"/>`,
      `<path d="M13 9.5h5M13 12h4M6 16h12"/>`
    ]
  },
  "discharge-summary": {
    cat: "records", keywords: ["dc summary","clinical summary","release note"],
    paths: [
      `<rect x="5" y="3.5" width="14" height="17" rx="1.5"/>`,
      `<path d="M8 8h8M8 11h8M8 14h6"/>`,
      `<path d="M14 17l2 2 2.5-2.5"/>`
    ]
  },
  "case-history": {
    cat: "records", keywords: ["history","past","timeline","records"],
    paths: [
      `<path d="M4 7.5a8 8 0 1 1 0 9"/>`,
      `<path d="M4 7.5v-3M4 7.5h3"/>`,
      `<path d="M12 8v4l3 2"/>`
    ]
  },
  "icd-code": {
    cat: "records", keywords: ["icd-10","coding","diagnosis code"],
    paths: [
      `<rect x="3.5" y="5" width="17" height="14" rx="1.5"/>`,
      `<path d="M7 9.5h2l2 5M11 9.5h6M11 14.5h6"/>`
    ]
  },
  "snomed-code": {
    cat: "records", keywords: ["snomed","terminology","standard","code"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M8.5 11c0-2 2-2.5 3.5-2.5s3 .5 3 2.5-2.5 1.5-3 3 1.5 2 3.5 2"/>`,
      `<circle cx="8" cy="16" r="0.8" fill="currentColor" stroke="none"/>`
    ]
  },
  "lab-request": {
    cat: "records", keywords: ["order","request","investigation"],
    paths: [
      `<rect x="4.5" y="3.5" width="13" height="17" rx="1.5"/>`,
      `<path d="M8 8h6M8 11h6"/>`,
      `<path d="M14 16l2 2 4-4"/>`
    ]
  },
  "operative-note": {
    cat: "records", keywords: ["op note","surgery report","procedure note"],
    paths: [
      `<rect x="4" y="3.5" width="14" height="17" rx="1.5"/>`,
      `<path d="M7 8h6M7 11h8M7 14h6"/>`,
      `<path d="M16 16.5l-2.5 2.5 1-3 5-5 1.5 1.5z"/>`
    ]
  },
  "vitals-chart": {
    cat: "records", keywords: ["chart","trend","graph","monitoring"],
    paths: [
      `<rect x="3.5" y="5" width="17" height="14" rx="1.5"/>`,
      `<path d="M6 14l3-3 3 1 3-4 3 2"/>`,
      `<path d="M3.5 9h17" stroke-dasharray="1.5 2"/>`
    ]
  },
  "intake-output": {
    cat: "records", keywords: ["i/o","fluid balance","intake","output"],
    paths: [
      `<path d="M6 4v6c0 3 2 5 4 5"/>`,
      `<path d="M18 20v-6c0-3-2-5-4-5"/>`,
      `<path d="M8 9l-2 2-2-2"/>`,
      `<path d="M16 15l2-2 2 2"/>`
    ]
  },
  "care-plan": {
    cat: "records", keywords: ["plan","goals","interventions","carepath"],
    paths: [
      `<rect x="4" y="3.5" width="14" height="17" rx="1.5"/>`,
      `<path d="M7 8h8"/>`,
      `<path d="M7 12l1.5 1.5L11 11M7 16l1.5 1.5L11 15"/>`,
      `<path d="M13 12h4M13 16h4"/>`
    ]
  },

  /* ═══ 34 · PHARMACY · OPS ═══════════════════════════════════ */
  "dispense": {
    cat: "pharmacy", keywords: ["issue","give","release","drug"],
    paths: [
      `<path d="M5 8.5l7-4 7 4v7l-7 4-7-4z"/>`,
      `<path d="M5 8.5l7 4 7-4M12 12.5v6"/>`,
      `<path d="M9 7l6 3.5"/>`
    ]
  },
  "drug-return": {
    cat: "pharmacy", keywords: ["return","reverse","unused","credit"],
    paths: [
      `<rect x="6" y="4" width="6" height="16" rx="3"/>`,
      `<path d="M6 12h6"/>`,
      `<path d="M14 9l3-3M17 6h-3M17 6v3"/>`,
      `<path d="M14 15l3 3M17 18h-3M17 18v-3"/>`
    ]
  },
  "drug-interaction": {
    cat: "pharmacy", keywords: ["interaction","contraindication","ddi"],
    paths: [
      `<rect x="3.5" y="9" width="8" height="6" rx="3"/>`,
      `<rect x="12.5" y="9" width="8" height="6" rx="3"/>`,
      `<path d="M11.5 12h1"/>`,
      `<path d="M10 7l1 2M14 7l-1 2M10 17l1-2M14 17l-1-2"/>`
    ]
  },
  "formulary": {
    cat: "pharmacy", keywords: ["formulary","approved drugs","list","catalog"],
    paths: [
      `<rect x="4.5" y="3.5" width="14" height="17" rx="1.5"/>`,
      `<path d="M8 8h6M8 11h6"/>`,
      `<rect x="6" y="3.5" width="2" height="17" fill="currentColor" stroke="none" fill-opacity="0.2"/>`,
      `<path d="M14 15.5l1.5 1.5L18 14.5"/>`
    ]
  },
  "narcotic": {
    cat: "pharmacy", keywords: ["controlled","narcotic","scheduled","secure"],
    paths: [
      `<path d="M12 3.5l7 2.25v5.5c0 4.4-3 7.6-7 9.25-4-1.65-7-4.85-7-9.25v-5.5z"/>`,
      `<rect x="9.5" y="11" width="5" height="4.5" rx="0.5"/>`,
      `<path d="M10.5 11V9.5a1.5 1.5 0 0 1 3 0V11"/>`
    ]
  },
  "compounding": {
    cat: "pharmacy", keywords: ["mix","prepare","ipd pharmacy","mortar"],
    paths: [
      `<path d="M5 9h14l-1 4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4z"/>`,
      `<path d="M5 9c0-2 2-3 3.5-3"/>`,
      `<path d="M17 4l-3 4"/>`,
      `<path d="M10 17v3M14 17v3M9 20h6"/>`
    ]
  },
  "tpr-chart": {
    cat: "pharmacy", keywords: ["temp pulse resp","vital chart","nursing"],
    paths: [
      `<rect x="3.5" y="5" width="17" height="14" rx="1.5"/>`,
      `<path d="M3.5 9h17M3.5 13h17" stroke-dasharray="1.5 2"/>`,
      `<path d="M5 16l3-3 3 1 3-4 3 2 2-1"/>`
    ]
  },
  "mar": {
    cat: "pharmacy", keywords: ["medication admin record","mar","schedule"],
    paths: [
      `<rect x="3.5" y="5" width="17" height="14" rx="1.5"/>`,
      `<path d="M3.5 9h17"/>`,
      `<path d="M8 12.5l1 1 1.5-1.5M13 12.5l1 1 1.5-1.5"/>`,
      `<path d="M8 16.5l1 1 1.5-1.5M13 16.5l3 0"/>`
    ]
  },

  /* ═══ 35 · INVENTORY · PROCUREMENT ══════════════════════════ */
  "purchase-order": {
    cat: "inventory", keywords: ["po","procurement","order","vendor"],
    paths: [
      `<rect x="4" y="3.5" width="14" height="17" rx="1.5"/>`,
      `<path d="M7.5 8h7M7.5 11.5h7M7.5 15h4"/>`,
      `<path d="M14 17l1.5 1.5L18.5 15.5"/>`
    ]
  },
  "grn": {
    cat: "inventory", keywords: ["goods received","grn","intake","receipt"],
    paths: [
      `<rect x="4" y="7.5" width="16" height="11" rx="1"/>`,
      `<path d="M4 11h16"/>`,
      `<path d="M9 4l3 3 3-3"/>`,
      `<path d="M8 15l1.5 1.5L13 13"/>`
    ]
  },
  "vendor": {
    cat: "inventory", keywords: ["supplier","partner","seller","company"],
    paths: [
      `<path d="M4 11h16v9h-16z"/>`,
      `<path d="M6 11l1-4h10l1 4"/>`,
      `<path d="M9 11v3h6v-3"/>`
    ]
  },
  "stock-in": {
    cat: "inventory", keywords: ["inward","receive","add stock"],
    paths: [
      `<rect x="3.5" y="9" width="17" height="11" rx="1"/>`,
      `<path d="M12 3.5v9M8.5 9l3.5-3.5L15.5 9"/>`
    ]
  },
  "stock-out": {
    cat: "inventory", keywords: ["outward","issue","dispatch"],
    paths: [
      `<rect x="3.5" y="3.5" width="17" height="11" rx="1"/>`,
      `<path d="M12 20.5v-9M8.5 15l3.5 3.5 3.5-3.5"/>`
    ]
  },
  "expiry": {
    cat: "inventory", keywords: ["expired","shelf life","date","batch"],
    paths: [
      `<circle cx="12" cy="13" r="7"/>`,
      `<path d="M12 9.5v4l2 1.5"/>`,
      `<path d="M9 4h6M12 4v3"/>`
    ]
  },
  "batch-number": {
    cat: "inventory", keywords: ["lot","batch","trace","stock"],
    paths: [
      `<rect x="4" y="6" width="16" height="12" rx="1"/>`,
      `<path d="M7 6v12M11 6v12M15 6v12M19 6v12"/>`,
      `<path d="M4 10h16"/>`
    ]
  },
  "warehouse": {
    cat: "inventory", keywords: ["store","godown","stockroom","central store"],
    paths: [
      `<path d="M3.5 10.5l8.5-5.5 8.5 5.5v9h-17z"/>`,
      `<rect x="7" y="13" width="4" height="3" fill="currentColor" stroke="none" fill-opacity="0.25"/>`,
      `<rect x="13" y="13" width="4" height="3" fill="currentColor" stroke="none" fill-opacity="0.25"/>`,
      `<rect x="7" y="16.5" width="4" height="3"/>`,
      `<rect x="13" y="16.5" width="4" height="3"/>`
    ]
  },

  /* ═══ 36 · AMBULATORY · EMERGENCY EXTRAS ════════════════════ */
  "triage": {
    cat: "ambulatory", keywords: ["triage","sorting","priority","esi"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M12 6l1.5 4h4l-3.5 2.5 1.5 4-3.5-2.5-3.5 2.5 1.5-4-3.5-2.5h4z"/>`
    ]
  },
  "stretcher": {
    cat: "ambulatory", keywords: ["gurney","cot","emergency","transport"],
    paths: [
      `<path d="M3 13h18l-1.5 3h-15z"/>`,
      `<circle cx="6" cy="18" r="1.5"/>`,
      `<circle cx="18" cy="18" r="1.5"/>`,
      `<path d="M7 13v-3h10v3"/>`
    ]
  },
  "defibrillator": {
    cat: "ambulatory", keywords: ["aed","defib","resuscitation","shock"],
    paths: [
      `<rect x="4" y="5" width="16" height="12" rx="1"/>`,
      `<path d="M7 11h2l1-2 2 4 2-3 1.5 1h2"/>`,
      `<path d="M9 20h6"/>`
    ]
  },
  "code-blue": {
    cat: "ambulatory", keywords: ["code blue","cardiac arrest","emergency"],
    paths: [
      `<rect x="4" y="5" width="16" height="12" rx="1"/>`,
      `<path d="M8 9h2v6h-2c-1 0-1.5-.5-1.5-1.5S7 12 8 12s1.5-.5 1.5-1.5S9 9 8 9"/>`,
      `<path d="M12 9h4M14 9v6M12 15h4"/>`
    ]
  },
  "oxygen": {
    cat: "ambulatory", keywords: ["o2","cylinder","oxygen","support"],
    paths: [
      `<rect x="8.5" y="3.5" width="7" height="17" rx="2"/>`,
      `<path d="M10 3.5v-1h4v1"/>`,
      `<path d="M10.5 11h3M12 9.5v3"/>`
    ]
  },
  "snake-bite": {
    cat: "ambulatory", keywords: ["envenomation","snake","poison","emergency"],
    paths: [
      `<path d="M5 7c3-2 6 0 7 3s4 5 7 3"/>`,
      `<path d="M16 12l2 1-2 1z" fill="currentColor" stroke="none"/>`,
      `<path d="M5 19h14"/>`
    ]
  },
  "burn": {
    cat: "ambulatory", keywords: ["burn","flame","scald","emergency"],
    paths: [
      `<path d="M12 3c-2 3-5 4-5 8s2 6 5 6 5-3 5-6c0-2-1-3-2-4-1 1-1 3-2 3s-1-3 0-5-1-2-1-2z"/>`
    ]
  },
  "poison": {
    cat: "ambulatory", keywords: ["poison","toxic","hazard","overdose"],
    paths: [
      `<circle cx="12" cy="9" r="4.5"/>`,
      `<circle cx="10.5" cy="8.5" r="0.8" fill="currentColor" stroke="none"/>`,
      `<circle cx="13.5" cy="8.5" r="0.8" fill="currentColor" stroke="none"/>`,
      `<path d="M9 11s1 1.5 3 1.5 3-1.5 3-1.5"/>`,
      `<path d="M8 14l-2 6M16 14l2 6M9 17h6"/>`
    ]
  },

  /* ═══ 37 · GOVERNANCE · ABDM · SECURITY ═════════════════════ */
  "abha": {
    cat: "govern", keywords: ["abha","abdm","health id","india","ndhm"],
    paths: [
      `<rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/>`,
      `<circle cx="8" cy="11" r="2.5"/>`,
      `<path d="M13 9.5h5M13 12.5h3"/>`,
      `<path d="M5 16h14"/>`
    ]
  },
  "consent-manager": {
    cat: "govern", keywords: ["consent","abdm","data sharing","cm"],
    paths: [
      `<path d="M12 3.5l7 2.25v5.5c0 4.4-3 7.6-7 9.25-4-1.65-7-4.85-7-9.25v-5.5z"/>`,
      `<path d="M9 11l2 2 4-4"/>`,
      `<circle cx="12" cy="3.5" r="0.8" fill="currentColor" stroke="none"/>`
    ]
  },
  "data-fiduciary": {
    cat: "govern", keywords: ["dpdp","fiduciary","data protection","privacy"],
    paths: [
      `<rect x="4" y="5" width="16" height="14" rx="1.5"/>`,
      `<circle cx="9" cy="12" r="2"/>`,
      `<path d="M13 11h4M13 14h4"/>`,
      `<path d="M18 4l1.5 1.5L21 4"/>`
    ]
  },
  "audit-trail": {
    cat: "govern", keywords: ["log","activity","trail","forensic"],
    paths: [
      `<path d="M5 5h14v14h-14z"/>`,
      `<path d="M5 9h14M5 13h14M5 17h14"/>`,
      `<circle cx="8" cy="11" r="0.7" fill="currentColor" stroke="none"/>`,
      `<circle cx="8" cy="15" r="0.7" fill="currentColor" stroke="none"/>`
    ]
  },
  "encryption": {
    cat: "govern", keywords: ["encrypt","secure","cipher","tls"],
    paths: [
      `<rect x="5" y="11" width="14" height="9" rx="1"/>`,
      `<path d="M8 11V8a4 4 0 0 1 8 0v3"/>`,
      `<circle cx="12" cy="15" r="1"/>`,
      `<path d="M12 16v2"/>`
    ]
  },
  "two-factor": {
    cat: "govern", keywords: ["2fa","mfa","otp","verification"],
    paths: [
      `<rect x="6" y="3.5" width="8" height="17" rx="1.5"/>`,
      `<path d="M9 7h2"/>`,
      `<circle cx="10" cy="17" r="0.9" fill="currentColor" stroke="none"/>`,
      `<path d="M16 11.5l2 2 3.5-3.5"/>`
    ]
  },
  "session": {
    cat: "govern", keywords: ["login","session","auth","user"],
    paths: [
      `<rect x="3.5" y="5" width="17" height="14" rx="1.5"/>`,
      `<circle cx="9" cy="12" r="2.5"/>`,
      `<path d="M13 11h5M13 13.5h3"/>`,
      `<path d="M6 16.5c.7-1.2 2-2 3-2s2.3.8 3 2"/>`
    ]
  }
};

Object.assign(window.LIPI_ICONS, LIPI_ICONS_PHASE4C);
