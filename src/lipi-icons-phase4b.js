/* ═══════════════════════════════════════════════════════════════
   LiPi Icon System — Phase 4 expansion pack (batch B)
   Adds 84 more base icons. Rounds out existing categories and
   introduces Surgery/Anaesthesia, Imaging modalities, Microbiology,
   Immunisation, Accessibility, Mobile/Device states.
   © 2026 imagiQa Healthcare Services Pvt Ltd · All rights reserved.
   ═══════════════════════════════════════════════════════════════ */

const LIPI_ICONS_PHASE4B = {

  /* ═══ 21 · SURGERY · ANAESTHESIA ════════════════════════════ */
  "scalpel": {
    cat: "surgery", keywords: ["blade","cut","knife","incision"],
    paths: [
      `<path d="M3.5 20.5l8-8 4 4-8 8z"/>`,
      `<path d="M15.5 16.5l5-12-12 5z"/>`
    ]
  },
  "suture": {
    cat: "surgery", keywords: ["stitch","closure","needle","thread"],
    paths: [
      `<path d="M3 12c2-2 5-2 7 0M10 12c2 2 5 2 7 0M17 12c2-2 3-2 4-1.5"/>`,
      `<path d="M5 10v4M9 10v4M13 10v4M17 10v4"/>`
    ]
  },
  "anaesthesia": {
    cat: "surgery", keywords: ["sedation","mask","gas","analgesia"],
    paths: [
      `<path d="M7 6.5h10v6a5 5 0 0 1-10 0z"/>`,
      `<path d="M11 18.5v2M13 18.5v2"/>`,
      `<path d="M7 9.5h-2v3h2"/>`
    ]
  },
  "intubation": {
    cat: "surgery", keywords: ["airway","tube","ventilation","et tube"],
    paths: [
      `<path d="M4 6.5c5 1 11 1 16 0"/>`,
      `<path d="M5 6.5v3c0 4 3 7 7 7s7-3 7-7v-3"/>`,
      `<path d="M12 13.5v6"/>`
    ]
  },
  "forceps": {
    cat: "surgery", keywords: ["clamp","tweezers","grip","instrument"],
    paths: [
      `<path d="M7 4l3 8-1 8M17 4l-3 8 1 8"/>`,
      `<path d="M9 12h6"/>`
    ]
  },
  "ot-light": {
    cat: "surgery", keywords: ["surgical light","operating light","cieling lamp"],
    paths: [
      `<circle cx="12" cy="9" r="5"/>`,
      `<circle cx="12" cy="9" r="1.5"/>`,
      `<path d="M9 6l-1.5-1.5M15 6l1.5-1.5M9 12l-1.5 1.5M15 12l1.5 1.5"/>`,
      `<path d="M12 14v6"/>`
    ]
  },
  "scrub-sink": {
    cat: "surgery", keywords: ["scrub","handwash","disinfect","prep"],
    paths: [
      `<path d="M3.5 11h17l-1 6a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2z"/>`,
      `<path d="M12 4v7M10 5h4"/>`,
      `<path d="M3.5 11h17" stroke-width="2.5"/>`
    ]
  },
  "implant": {
    cat: "surgery", keywords: ["screw","plate","prosthesis","ortho"],
    paths: [
      `<rect x="9.5" y="3.5" width="5" height="17" rx="2.5"/>`,
      `<path d="M9.5 8h5M9.5 12h5M9.5 16h5"/>`
    ]
  },
  "operating-table": {
    cat: "surgery", keywords: ["bed","ot table","operation"],
    paths: [
      `<path d="M3 10h18v3h-18z"/>`,
      `<path d="M6 13v6M18 13v6"/>`,
      `<circle cx="6" cy="7" r="1.75"/>`
    ]
  },
  "vital-monitor": {
    cat: "surgery", keywords: ["monitor","ecg","intra-op","sensor"],
    paths: [
      `<rect x="3.5" y="4.5" width="17" height="12" rx="1.5"/>`,
      `<path d="M6 11h2l1-2 2 4 2-3 1.5 1h5"/>`,
      `<path d="M9 20h6M12 16.5v3.5"/>`
    ]
  },

  /* ═══ 22 · IMAGING MODALITIES ═══════════════════════════════ */
  "mri": {
    cat: "imaging", keywords: ["mri","magnet","tunnel","scan"],
    paths: [
      `<path d="M4 7.5h16v9h-16z"/>`,
      `<path d="M4 12h16"/>`,
      `<rect x="9" y="9.5" width="6" height="5" rx="0.5"/>`,
      `<path d="M4 19l2-2.5M20 19l-2-2.5"/>`
    ]
  },
  "ct-scan": {
    cat: "imaging", keywords: ["ct","cat scan","cross section","tomography"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M12 3.75v16.5M3.75 12h16.5"/>`,
      `<circle cx="12" cy="12" r="2.5"/>`
    ]
  },
  "ultrasound": {
    cat: "imaging", keywords: ["sonography","usg","probe","wave"],
    paths: [
      `<path d="M4 4l4 4-1 1c-2 2-2 4 0 6l5 5 1-1c2-2 4-2 6 0l1-1-4-4"/>`,
      `<path d="M14 6c2 2 2 4 0 6"/>`,
      `<path d="M16 4c4 4 4 8 0 12"/>`
    ]
  },
  "xray-image": {
    cat: "imaging", keywords: ["radiograph","film","chest x-ray"],
    paths: [
      `<rect x="4" y="3.5" width="16" height="17" rx="1.5"/>`,
      `<path d="M9 7c1 3 1 7 0 10M15 7c-1 3-1 7 0 10"/>`,
      `<path d="M7 11h10M7 14h10"/>`
    ]
  },
  "pet-scan": {
    cat: "imaging", keywords: ["pet","tracer","positron","oncology imaging"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<ellipse cx="12" cy="12" rx="8.25" ry="3.5"/>`,
      `<circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>`
    ]
  },
  "fluoroscopy": {
    cat: "imaging", keywords: ["live x-ray","c-arm","real-time","contrast"],
    paths: [
      `<path d="M5 19c0-7 5-12 12-12"/>`,
      `<path d="M5 19h3M17 7v-3"/>`,
      `<rect x="11" y="11" width="6" height="6" rx="0.5"/>`,
      `<path d="M14 11v6M11 14h6"/>`
    ]
  },
  "endoscopy": {
    cat: "imaging", keywords: ["scope","camera","gi","fibrescope"],
    paths: [
      `<rect x="4" y="4" width="6" height="8" rx="1"/>`,
      `<path d="M10 8c5 0 5 4 5 6s0 5 5 6"/>`,
      `<circle cx="7" cy="8" r="1.5"/>`
    ]
  },
  "doppler": {
    cat: "imaging", keywords: ["colour doppler","blood flow","vascular"],
    paths: [
      `<path d="M3 14c3-5 6-5 9 0s6 5 9 0"/>`,
      `<path d="M3 10c3-5 6-5 9 0s6 5 9 0"/>`
    ]
  },
  "echo": {
    cat: "imaging", keywords: ["echocardiogram","cardiac usg","2d echo"],
    paths: [
      `<path d="M12 20s-7-4.5-7-10a4.5 4.5 0 0 1 7-3.7 4.5 4.5 0 0 1 7 3.7c0 5.5-7 10-7 10z"/>`,
      `<path d="M9 11l1.5-2 1.5 3 1.5-2 1.5 1.5"/>`
    ]
  },
  "bone-density": {
    cat: "imaging", keywords: ["dxa","dexa","osteoporosis","scan"],
    paths: [
      `<path d="M6 4c0 2 0 3 1.5 3s1.5-1 1.5-1 0 4 3 4 3-4 3-4 0 1 1.5 1 1.5-1 1.5-3"/>`,
      `<path d="M6 20c0-2 0-3 1.5-3s1.5 1 1.5 1 0-4 3-4 3 4 3 4 0-1 1.5-1 1.5 1 1.5 3"/>`,
      `<path d="M9 9c-1 2-1 4 0 6M15 9c1 2 1 4 0 6"/>`
    ]
  },

  /* ═══ 23 · MICROBIOLOGY · PATHOLOGY EXTRAS ══════════════════ */
  "bacteria": {
    cat: "microbio", keywords: ["microbe","germ","infection","culture"],
    paths: [
      `<ellipse cx="12" cy="12" rx="6" ry="3" transform="rotate(35 12 12)"/>`,
      `<path d="M6 8l-2-1M18 16l2 1M5 13l-2 0M21 11h-2M9 5l-1-2M16 21l1-2"/>`
    ]
  },
  "virus": {
    cat: "microbio", keywords: ["virus","spike","corona","pathogen"],
    paths: [
      `<circle cx="12" cy="12" r="4.5"/>`,
      `<path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3M5.6 5.6l2.2 2.2M16.2 16.2l2.2 2.2M5.6 18.4l2.2-2.2M16.2 7.8l2.2-2.2"/>`,
      `<circle cx="12" cy="3.5" r="1"/>`,
      `<circle cx="20.5" cy="12" r="1"/>`,
      `<circle cx="12" cy="20.5" r="1"/>`,
      `<circle cx="3.5" cy="12" r="1"/>`
    ]
  },
  "petri-dish": {
    cat: "microbio", keywords: ["culture","agar","plate","colony"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<circle cx="9" cy="10" r="1.5"/>`,
      `<circle cx="14" cy="13" r="1"/>`,
      `<circle cx="11" cy="15" r="0.8"/>`
    ]
  },
  "swab": {
    cat: "microbio", keywords: ["sample","nasal","collection","cotton"],
    paths: [
      `<path d="M5 19l11-11"/>`,
      `<ellipse cx="17" cy="7" rx="2.5" ry="1.5" transform="rotate(-45 17 7)"/>`,
      `<path d="M5 19l-1.5 1.5"/>`
    ]
  },
  "centrifuge": {
    cat: "microbio", keywords: ["spin","separator","lab equipment"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M12 6l-3 7h6z"/>`,
      `<circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>`
    ]
  },
  "antibody": {
    cat: "microbio", keywords: ["immune","y-shape","serology","igg"],
    paths: [
      `<path d="M12 12v8"/>`,
      `<path d="M12 12l-5-7M12 12l5-7"/>`,
      `<circle cx="7" cy="5" r="1.5"/>`,
      `<circle cx="17" cy="5" r="1.5"/>`,
      `<circle cx="12" cy="20" r="1.5"/>`
    ]
  },
  "specimen-tube": {
    cat: "microbio", keywords: ["vial","container","collection","tube"],
    paths: [
      `<path d="M8 3.5h8v4l-2 1v12a2 2 0 0 1-4 0v-12l-2-1z"/>`,
      `<path d="M10 13h4M10 16h4"/>`
    ]
  },
  "infection-control": {
    cat: "microbio", keywords: ["ipc","prevention","biohazard","containment"],
    paths: [
      `<path d="M12 3.5l7 2.25v5.5c0 4.4-3 7.6-7 9.25-4-1.65-7-4.85-7-9.25v-5.5z"/>`,
      `<circle cx="12" cy="12" r="1.5"/>`,
      `<path d="M9 9l1.5 1.5M15 9l-1.5 1.5M12 15v1.5"/>`
    ]
  },

  /* ═══ 24 · IMMUNISATION · VACCINATION ═══════════════════════ */
  "vaccine-vial": {
    cat: "immune", keywords: ["dose","vial","ampoule","jab"],
    paths: [
      `<path d="M9 3.5h6v3h-1v13a2 2 0 0 1-4 0v-13h-1z"/>`,
      `<path d="M10 11h4M10 14h4"/>`
    ]
  },
  "immunisation-card": {
    cat: "immune", keywords: ["vaccine record","card","schedule","child"],
    paths: [
      `<rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/>`,
      `<path d="M7 9h6M7 12h8M7 15h5"/>`,
      `<path d="M16 11.5l1.25 1.25L19.5 10"/>`
    ]
  },
  "schedule-dose": {
    cat: "immune", keywords: ["dose schedule","booster","series","calendar"],
    paths: [
      `<rect x="3.75" y="5.25" width="16.5" height="15" rx="2"/>`,
      `<path d="M3.75 9.75h16.5"/>`,
      `<path d="M8 14h2M12 14h2M16 14h-1"/>`,
      `<path d="M8 17h2M12 17h2"/>`
    ]
  },
  "cold-chain": {
    cat: "immune", keywords: ["temperature","fridge","storage","vaccine"],
    paths: [
      `<rect x="6" y="3.5" width="12" height="17" rx="1.5"/>`,
      `<path d="M6 11h12"/>`,
      `<path d="M8.5 7h0M8.5 14h0" stroke-width="2"/>`,
      `<path d="M19.5 8c2 1 2 4 0 5"/>`
    ]
  },
  "antibody-titre": {
    cat: "immune", keywords: ["titre","serology","level","measure"],
    paths: [
      `<path d="M4 19l5-10 3 5 3-8 5 13"/>`,
      `<path d="M3.5 19.5h17"/>`
    ]
  },
  "vaccine-syringe": {
    cat: "immune", keywords: ["jab","shot","injection","needle"],
    paths: [
      `<path d="M14 4l6 6"/>`,
      `<path d="M11 7l6 6-7 7-3-3z"/>`,
      `<path d="M4 20l3-3"/>`,
      `<path d="M12 10l2 2"/>`
    ]
  },

  /* ═══ 25 · ACCESSIBILITY ════════════════════════════════════ */
  "accessibility": {
    cat: "a11y", keywords: ["disability","a11y","universal","inclusive"],
    paths: [
      `<circle cx="12" cy="5.5" r="1.75"/>`,
      `<path d="M7 9h10"/>`,
      `<path d="M12 9v5l-3 5M12 14h2.5l2.5 5"/>`
    ]
  },
  "hearing-aid": {
    cat: "a11y", keywords: ["audio","ear","hearing","loop"],
    paths: [
      `<path d="M9 4.5c-3 0-5 2.5-5 6 0 3 1 5 1 7s-1 2-1 2"/>`,
      `<path d="M12 7c2 0 4 2 4 5"/>`,
      `<path d="M15 5c4 0 6 3 6 7"/>`
    ]
  },
  "sign-language": {
    cat: "a11y", keywords: ["asl","hand","deaf","communication"],
    paths: [
      `<path d="M9 11v-5a1.5 1.5 0 0 1 3 0v5"/>`,
      `<path d="M12 11v-6a1.5 1.5 0 0 1 3 0v6"/>`,
      `<path d="M15 11v-4a1.5 1.5 0 0 1 3 0v8c0 4-3 6-6 6s-6-1-7-5l-1-4a1.5 1.5 0 0 1 3-1l1 3"/>`
    ]
  },
  "braille": {
    cat: "a11y", keywords: ["dots","tactile","visually impaired"],
    paths: [
      `<circle cx="8" cy="7" r="1.4" fill="currentColor" stroke="none"/>`,
      `<circle cx="14" cy="7" r="1.4"/>`,
      `<circle cx="8" cy="12" r="1.4"/>`,
      `<circle cx="14" cy="12" r="1.4" fill="currentColor" stroke="none"/>`,
      `<circle cx="8" cy="17" r="1.4" fill="currentColor" stroke="none"/>`,
      `<circle cx="14" cy="17" r="1.4"/>`
    ]
  },
  "screen-reader": {
    cat: "a11y", keywords: ["voiceover","tts","talkback","narrator"],
    paths: [
      `<rect x="3.5" y="5.5" width="13" height="11" rx="1.5"/>`,
      `<path d="M7 9h6M7 12h4"/>`,
      `<path d="M17 9a4 4 0 0 1 0 6M19.5 7a7 7 0 0 1 0 10"/>`
    ]
  },
  "high-contrast": {
    cat: "a11y", keywords: ["theme","accessibility","contrast","b&w"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M12 3.75v16.5" stroke="none"/>`,
      `<path d="M12 3.75a8.25 8.25 0 0 0 0 16.5z" fill="currentColor" stroke="none"/>`
    ]
  },
  "magnify-text": {
    cat: "a11y", keywords: ["zoom","font size","readability","enlarge"],
    paths: [
      `<circle cx="10.5" cy="10.5" r="6.25"/>`,
      `<path d="M19.75 19.75l-4.6-4.6"/>`,
      `<path d="M8 11h5M10.5 8v6"/>`
    ]
  },

  /* ═══ 26 · MOBILE · DEVICE · CONNECTIVITY ═══════════════════ */
  "mobile-app": {
    cat: "device", keywords: ["phone","smartphone","handset","mobile"],
    paths: [
      `<rect x="7" y="3" width="10" height="18" rx="2"/>`,
      `<path d="M11 18h2"/>`,
      `<path d="M9 6h6"/>`
    ]
  },
  "tablet": {
    cat: "device", keywords: ["ipad","handheld","slate","point of care"],
    paths: [
      `<rect x="4" y="3.5" width="16" height="17" rx="2"/>`,
      `<path d="M11 17h2"/>`
    ]
  },
  "kiosk": {
    cat: "device", keywords: ["self-service","check-in","standee","terminal"],
    paths: [
      `<rect x="6" y="3" width="12" height="14" rx="1"/>`,
      `<path d="M10 17v3M14 17v3M8 20h8"/>`,
      `<path d="M9 7h6M9 10h6M9 13h4"/>`
    ]
  },
  "barcode": {
    cat: "device", keywords: ["scan","code","label","wristband"],
    paths: [
      `<path d="M4 5v14M6 5v14M8.5 5v14M10.5 5v14M13 5v14M15 5v14M17 5v14M19.5 5v14"/>`
    ]
  },
  "qrcode": {
    cat: "device", keywords: ["qr","scan","upi","payment code"],
    paths: [
      `<rect x="4" y="4" width="6" height="6"/>`,
      `<rect x="14" y="4" width="6" height="6"/>`,
      `<rect x="4" y="14" width="6" height="6"/>`,
      `<rect x="6" y="6" width="2" height="2" fill="currentColor" stroke="none"/>`,
      `<rect x="16" y="6" width="2" height="2" fill="currentColor" stroke="none"/>`,
      `<rect x="6" y="16" width="2" height="2" fill="currentColor" stroke="none"/>`,
      `<path d="M14 14h2v2M18 14v6M14 18h2M20 18v2h-2"/>`
    ]
  },
  "rfid": {
    cat: "device", keywords: ["rfid","tag","wireless","tracker"],
    paths: [
      `<path d="M4 12c0-2 1-4 3-5M4 12c0 2 1 4 3 5"/>`,
      `<path d="M9 14a4 4 0 0 1 0-4M11 16a7 7 0 0 1 0-8"/>`,
      `<circle cx="17" cy="12" r="2" fill="currentColor" stroke="none"/>`
    ]
  },
  "wifi": {
    cat: "device", keywords: ["wireless","network","signal","connect"],
    paths: [
      `<path d="M5 10c4-4 10-4 14 0M7.5 13c3-3 6-3 9 0M10 16c1-1 3-1 4 0"/>`,
      `<circle cx="12" cy="19" r="0.9" fill="currentColor" stroke="none"/>`
    ]
  },
  "bluetooth": {
    cat: "device", keywords: ["bt","wireless","pair","device"],
    paths: [
      `<path d="M8 7l8 10-4 3v-16l4 3-8 10"/>`
    ]
  },
  "battery": {
    cat: "device", keywords: ["power","charge","level","cell"],
    paths: [
      `<rect x="3.5" y="8" width="15" height="8" rx="1.5"/>`,
      `<path d="M18.5 11v2h2v-2z" fill="currentColor"/>`,
      `<rect x="5" y="9.5" width="6" height="5" fill="currentColor" stroke="none"/>`
    ]
  },
  "sync": {
    cat: "device", keywords: ["refresh","update","two-way","cloud"],
    paths: [
      `<path d="M4.5 8a7.5 7.5 0 0 1 13-2"/>`,
      `<path d="M19.5 16a7.5 7.5 0 0 1-13 2"/>`,
      `<path d="M17.5 6V3M17.5 6h3M6.5 18v3M6.5 18h-3"/>`
    ]
  },

  /* ═══ 27 · NUTRITION · DIET ═════════════════════════════════ */
  "diet-plan": {
    cat: "nutrition", keywords: ["nutrition","meal","food plan","dietitian"],
    paths: [
      `<rect x="4.5" y="3.5" width="13" height="17" rx="1.5"/>`,
      `<path d="M8 8h6M8 11h6M8 14h4"/>`,
      `<path d="M16 16l1.5 1.5L20 15"/>`
    ]
  },
  "meal-tray": {
    cat: "nutrition", keywords: ["food","tray","patient meal","catering"],
    paths: [
      `<path d="M3 12h18"/>`,
      `<path d="M5 12c0-4 3-7 7-7s7 3 7 7"/>`,
      `<path d="M5 15h14l-1 4h-12z"/>`
    ]
  },
  "calorie": {
    cat: "nutrition", keywords: ["kcal","energy","intake","count"],
    paths: [
      `<path d="M12 3.5c2 3 4 5 4 8a4 4 0 0 1-8 0c0-3 2-5 4-8z"/>`,
      `<circle cx="12" cy="11" r="1.5"/>`,
      `<path d="M6 19.5h12"/>`
    ]
  },
  "hydration": {
    cat: "nutrition", keywords: ["water","fluid","intake","drink"],
    paths: [
      `<path d="M12 3.5l5 7a5 5 0 1 1-10 0z"/>`,
      `<path d="M9.5 13c0 1.5 1 2.5 2.5 2.5"/>`
    ]
  },
  "feeding-tube": {
    cat: "nutrition", keywords: ["ng tube","enteral","ryle","feed"],
    paths: [
      `<path d="M8 4h8v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"/>`,
      `<path d="M12 10v6c0 2 2 2 2 4"/>`,
      `<path d="M10 5h4"/>`
    ]
  },

  /* ═══ 28 · BLOOD BANK SPECIFIC ══════════════════════════════ */
  "blood-group": {
    cat: "bloodbank", keywords: ["a","b","ab","o","abo","rh"],
    paths: [
      `<path d="M12 4.5c-3 4-5 7-5 10a5 5 0 0 0 10 0c0-3-2-6-5-10z"/>`,
      `<path d="M10 14h4M12 12v4"/>`
    ]
  },
  "blood-donation": {
    cat: "bloodbank", keywords: ["donor","give blood","drive","camp"],
    paths: [
      `<path d="M12 4.5c-3 4-5 7-5 10a5 5 0 0 0 10 0c0-3-2-6-5-10z"/>`,
      `<path d="M10 13l1.5 1.5L14 12"/>`
    ]
  },
  "crossmatch": {
    cat: "bloodbank", keywords: ["compatibility","grouping","testing","match"],
    paths: [
      `<circle cx="8" cy="8" r="3"/>`,
      `<circle cx="16" cy="16" r="3"/>`,
      `<path d="M5 5l14 14M19 5l-14 14"/>`
    ]
  },
  "platelet": {
    cat: "bloodbank", keywords: ["platelets","apheresis","sdp","rdp"],
    paths: [
      `<circle cx="8" cy="9" r="2"/>`,
      `<circle cx="14" cy="13" r="2"/>`,
      `<circle cx="11" cy="17" r="2"/>`,
      `<circle cx="17" cy="7" r="2"/>`
    ]
  },
  "plasma": {
    cat: "bloodbank", keywords: ["ffp","plasma","fresh frozen","component"],
    paths: [
      `<path d="M8 3.5h8v3l-1 14h-6l-1-14z"/>`,
      `<path d="M9 10c2 2 4-2 6 0"/>`,
      `<path d="M9 14c2 2 4-2 6 0"/>`
    ]
  },

  /* ═══ 29 · ADMIN · MASTERS · SETUP ══════════════════════════ */
  "tariff-master": {
    cat: "admin", keywords: ["price list","rates","master","catalog"],
    paths: [
      `<rect x="4" y="4.5" width="16" height="15" rx="1.5"/>`,
      `<path d="M4 9h16M9 9v10.5"/>`,
      `<path d="M11.5 11.5h6M11.5 14h6M11.5 16.5h4"/>`
    ]
  },
  "department-master": {
    cat: "admin", keywords: ["dept master","setup","org chart"],
    paths: [
      `<rect x="10" y="3.5" width="4" height="4" rx="0.5"/>`,
      `<rect x="3.5" y="16.5" width="4" height="4" rx="0.5"/>`,
      `<rect x="10" y="16.5" width="4" height="4" rx="0.5"/>`,
      `<rect x="16.5" y="16.5" width="4" height="4" rx="0.5"/>`,
      `<path d="M12 7.5v3M12 13H5.5v3.5M12 13v3.5M12 13h6.5v3.5"/>`
    ]
  },
  "role-master": {
    cat: "admin", keywords: ["permissions","rbac","access","roles"],
    paths: [
      `<circle cx="12" cy="8" r="3.5"/>`,
      `<path d="M5 19c1.4-3.4 4.1-5 7-5s5.6 1.6 7 5"/>`,
      `<path d="M16.5 7l1.25 1.25L20.5 5.5"/>`
    ]
  },
  "config": {
    cat: "admin", keywords: ["settings","preferences","wrench","setup"],
    paths: [
      `<path d="M14.5 4l-1.5 2 1.5 2-3 3-2-1.5-2 1.5-1.5-1.5-1.5 1.5 2 2-1.5 2.5 2 2 2.5-1.5 2 2 2-1.5-1.5-1.5 1.5-2 2 1.5 2.5-2-1.5-2"/>`
    ]
  },
  "license": {
    cat: "admin", keywords: ["legal","permit","registration","authority"],
    paths: [
      `<rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/>`,
      `<circle cx="8" cy="11" r="2.5"/>`,
      `<path d="M13 9.5h5M13 12.5h5M6 16h12"/>`
    ]
  },

  /* ═══ 30 · QUEUES · OPERATIONS ══════════════════════════════ */
  "queue": {
    cat: "ops", keywords: ["line","waiting","token","sequence"],
    paths: [
      `<circle cx="6" cy="12" r="2"/>`,
      `<circle cx="11" cy="12" r="2"/>`,
      `<circle cx="16" cy="12" r="2"/>`,
      `<path d="M19 12h2"/>`
    ]
  },
  "token": {
    cat: "ops", keywords: ["queue token","number","ticket","display"],
    paths: [
      `<rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/>`,
      `<path d="M11 8v8M9 10l2-2 2 2"/>`,
      `<path d="M16 11h-2v3h2"/>`
    ]
  },
  "shift": {
    cat: "ops", keywords: ["roster","duty","schedule","rotation"],
    paths: [
      `<circle cx="12" cy="12" r="8.25"/>`,
      `<path d="M12 3.75v8.25l5 3"/>`,
      `<path d="M4.5 8.5l1.5-1M19.5 8.5l-1.5-1"/>`
    ]
  },
  "duty-roster": {
    cat: "ops", keywords: ["roster","staff schedule","grid","week"],
    paths: [
      `<rect x="3.5" y="5" width="17" height="14" rx="1.5"/>`,
      `<path d="M3.5 9h17M8.5 9v10M13.5 9v10"/>`,
      `<circle cx="6" cy="12" r="0.9" fill="currentColor" stroke="none"/>`,
      `<circle cx="11" cy="15" r="0.9" fill="currentColor" stroke="none"/>`,
      `<circle cx="16" cy="12" r="0.9" fill="currentColor" stroke="none"/>`
    ]
  },
  "attendance": {
    cat: "ops", keywords: ["check-in","present","absent","punch"],
    paths: [
      `<circle cx="12" cy="8" r="3.25"/>`,
      `<path d="M5 19c1.4-3.4 4.1-5 7-5s5.6 1.6 7 5"/>`,
      `<path d="M9 9.5l1.25 1.25L13 8"/>`
    ]
  },
  "biometric": {
    cat: "ops", keywords: ["fingerprint","scan","auth","identity"],
    paths: [
      `<path d="M7 19c-1-2-1.5-4-1.5-7a6.5 6.5 0 0 1 13 0c0 1 0 2-.5 3.5"/>`,
      `<path d="M9 19c-.5-1-1-3-1-5a4 4 0 0 1 8 0v2"/>`,
      `<path d="M12 9v6M12 17v.5"/>`
    ]
  }
};

Object.assign(window.LIPI_ICONS, LIPI_ICONS_PHASE4B);
