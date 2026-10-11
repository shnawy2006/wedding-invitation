/* =====================================================
   ✏️  عدّل بيانات العميل هنا فقط (CONFIG)
   كل حاجة تانية في الصفحة بتتغير أوتوماتيك
   ==============================ev======================= */
const CONFIG = {
  groom: { en: "Ahmed", ar: "أحمد" },
  bride: { en: "Malak", ar: "ملك" },

  // التواريخ بتوقيت مصر (السنة-الشهر-اليوم T الساعة)
  katb: "2026-11-09T19:00:00+02:00",   // كتب الكتاب — الاثنين 9 نوفمبر  (← عدّل الساعة)
  date: "2026-11-12T19:00:00+02:00",   // الزفاف — الخميس 12 نوفمبر      (← عدّل الساعة)

  // اسم القاعة والمدينة والعنوان — سيبهم فاضيين وهما مش هيظهروا
  venue:   { en: "Casablanca Palace", ar: "قصر كازابلانكا" },
  city:    { en: "Shibin El Qanater, Qalyubia", ar: "شبين القناطر، القليوبية" },
  address: { en: "", ar: "" },
  // الخريطة اللي بتظهر جوه الدعوة (لوكيشن القاعة)
  mapEmbed: "https://maps.google.com/maps?cid=11067860501152914846&z=16&output=embed",
  // لو الخريطة ما ظهرتش أو ظهرت مكان غلط: افتح جوجل ماب على الكمبيوتر ← Share ← Embed a map ←
  // Copy HTML، وانسخ اللينك اللي جوه src="..." والصقه مكان اللينك اللي فوق.

  mapLink: "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x14580d6b45b24ca3:0x9998f07c5acbdd9e?entry=s&sa=X&ved=2ahUKEwiUpb27qLCXAxVp1AIHHQbxLLoQ4kB6BAgYEAA&hl=en",

  whatsapp: "201000000000",   // ← رقم واتساب بكود الدولة بدون +

  // برنامج الحفل: icon = users | heart | dinner | music
  schedule: [
    { icon: "users", time: { en: "7:00 PM", ar: "٧:٠٠ م" }, label: { en: "Guests Arrival",   ar: "استقبال الضيوف" } },
    { icon: "heart", time: { en: "8:00 PM", ar: "٨:٠٠ م" }, label: { en: "Wedding Ceremony", ar: "مراسم الزفاف" } }
  ]
};

const I18N = {
  en: {
    btn: "عربي",
    exclusive: "This invitation is exclusive for you",
    tap: "Tap the seal to open",
    letterSub: "Wedding Invitation",
   eyebrow: "With joyful hearts and under the grace of Allah",
    invite: "Cordially invite you to share the joy of our wedding celebration",
    eventsTitle: "Save the Date",
    eventsSub: "One special days",
    katb: "Katb El Kitab",
    wedding: "Wedding Celebration",
    countTitle: "Counting down to our day",
    days: "Days", hours: "Hours", min: "Min", sec: "Sec",
    programTitle: "Program of the Evening",
    programSub: "A glimpse of how the night will unfold",
    venueTitle: "The Location",
    venueSub: "We’ll be waiting for you here",
    rsvpTitle: "Your Presence, Our Gift",
    rsvpSub: "Let us know you’ll be sharing our happiest moments",
    yes: "Joyfully Accept",
    no: "Regretfully Decline",
    addCal: "Add to Calendar",
    thanks: "We can’t wait to celebrate with you",
    wYes: (g, b) => `Hello! I'm happy to confirm that I'll attend the wedding of ${g} & ${b} 🤍`,
    wNo:  (g, b) => `Hello! Congratulations on the wedding of ${g} & ${b}. Unfortunately I won't be able to attend. Wishing you all the happiness 🤍`,
blessText: "Your presence will complete our joy, and your prayers mean the world to us",
    
    shareText: (g, b) => `Wedding invitation of ${g} & ${b} 🤍`,
    cal:  (g, b) => `Wedding of ${g} & ${b}`
  },
  ar: {
    btn: "English",
    exclusive: "هذه الدعوة خاصة بك",
    tap: "اضغط على الختم لفتح الدعوة",
    letterSub: "دعوة زفاف",
    eyebrow: "بقلوب مفعمة بالفرح وبفضل من الله",
    invite: "يتشرفان بدعوتكم لمشاركتهما فرحة زفافهما",
    eventsTitle: "احفظوا الموعد",
    eventsSub: "يوم لا يُنسى",
    katb: "كتب الكتاب",
    wedding: "حفل الزفاف",
    countTitle: "العد التنازلي ليوم الفرح",
    days: "يوم", hours: "ساعة", min: "دقيقة", sec: "ثانية",
    programTitle: "برنامج الحفل",
    programSub: "تفاصيل أمسية الفرح",
    venueTitle: "الموقع",
    venueSub: "هنكون في انتظاركم هنا",
    rsvpTitle: "حضوركم يكمّل فرحتنا",
    rsvpSub: "أخبرونا أنكم ستشاركوننا أجمل لحظاتنا",
    yes: "سأحضر بإذن الله",
    no: "أعتذر عن الحضور",
    addCal: "أضف للتقويم",
    thanks: "بانتظاركم بكل حب",
    wYes: (g, b) => `السلام عليكم، يسعدني تأكيد حضوري لحفل زفاف ${g} و${b} 🤍`,
    wNo:  (g, b) => `السلام عليكم، مبروك لحفل زفاف ${g} و${b}. للأسف لن أتمكن من الحضور، ألف مبروك 🤍`,
blessText: "نسعد بحضوركم، ونسألكم صالح الدعاء لنا بالتوفيق والسعادة",
    
    shareText: (g, b) => `دعوة زفاف ${g} و${b} 🤍`,
    cal:  (g, b) => `حفل زفاف ${g} و${b}`
  }
};

const ICONS = {
  users:  '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  heart:  '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  dinner: '<path d="M5 3v7a2 2 0 0 0 2 2v9M9 3v7M7 3v9M18 3c-2.2 1.8-3 4-3 7 0 1.6 1 2.6 3 3v8"/>',
  music:  '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>'
};

let lang = "en";
const $ = (s) => document.querySelector(s);
const T = () => I18N[lang];
const pick = (o) => o[lang];
const show = (sel, txt) => { const el = $(sel); el.textContent = txt; el.style.display = txt ? "" : "none"; };

/* ---------- Render (texts, names, date, schedule…) ---------- */
function render() {
  const t = T(), ar = lang === "ar";
  document.documentElement.lang = lang;
  document.documentElement.dir = ar ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t[el.dataset.i18n]));
  $("#langBtn").textContent = t.btn;

  const g = pick(CONFIG.groom), b = pick(CONFIG.bride);
  $("#gName").textContent = g;
  $("#bName").textContent = b;
  // الظرف بيتشال من الصفحة بعد الفتح، فنتأكد إنه موجود قبل ما نكتب فيه
  const ln = $("#letterNames"), si = $("#sealInit");
  if (ln) ln.textContent = `${g} & ${b}`;
  if (si) si.textContent = (CONFIG.groom.en[0] + CONFIG.bride.en[0]).toUpperCase();
  document.title = `${g} & ${b}`;

  const d = new Date(CONFIG.date), loc = ar ? "ar-EG" : "en-GB", tz = "Africa/Cairo";
  $("#heroDate").textContent = d.toLocaleDateString(loc, { day: "numeric", month: "long", year: "numeric", timeZone: tz });

  // اسم القاعة / المدينة / العنوان: بيظهروا بس لو اتكتبوا
  const place = [pick(CONFIG.venue), pick(CONFIG.city)].filter(Boolean).join(" · ");
  show("#heroPlace", place);
  show("#venueName", pick(CONFIG.venue));
  show("#venueCity", pick(CONFIG.city));
  show("#venueAddr", pick(CONFIG.address));

  // برنامج الحفل
  $("#program").style.setProperty("--n", CONFIG.schedule.length);
  $("#program").innerHTML = CONFIG.schedule.map((s) =>
    `<div class="it"><svg viewBox="0 0 24 24">${ICONS[s.icon] || ICONS.heart}</svg>
     <div class="time">${pick(s.time)}</div><div class="lbl">${pick(s.label)}</div></div>`).join("");

  // كتب الكتاب + الزفاف
  const fmtE = (iso, o) => new Date(iso).toLocaleDateString(loc, { ...o, timeZone: tz });
  $("#events").innerHTML = [[CONFIG.date, t.wedding]].map(([iso, name]) =>
    `<div class="ev"><div class="ev-wd">${fmtE(iso, { weekday: "long" })}</div>
     <div class="ev-day">${fmtE(iso, { day: "numeric" })}</div>
     <div class="ev-mo">${fmtE(iso, { month: "long", year: "numeric" })}</div>
    
     <div class="ev-name">${name}</div></div>`).join("");

  // روابط الواتساب والتقويم
  const wa = (msg) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  
  const fmt = (x) => x.toISOString().replace(/[-:]|\.\d{3}/g, "");
  const end = new Date(d.getTime() + 4 * 3600e3);
  $("#calBtn").href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(t.cal(g, b))}` +
    `&dates=${fmt(d)}/${fmt(end)}&details=${encodeURIComponent(CONFIG.mapLink || "")}` +
    `&location=${encodeURIComponent([pick(CONFIG.venue), pick(CONFIG.city)].filter(Boolean).join(", "))}`;

  tick();
}

/* ---------- Countdown ---------- */
function tick() {
  const t = T(), ms = Math.max(0, new Date(CONFIG.date) - new Date());
  const v = [Math.floor(ms / 864e5), Math.floor(ms / 36e5) % 24, Math.floor(ms / 6e4) % 60, Math.floor(ms / 1e3) % 60];
  const n = [t.days, t.hours, t.min, t.sec];
  $("#count").innerHTML = v.map((x, i) => `<div><b>${String(x).padStart(2, "0")}</b><span>${n[i]}</span></div>`).join("");
}
setInterval(tick, 1000);

/* ---------- Language ---------- */
$("#langBtn").onclick = () => { lang = lang === "en" ? "ar" : "en"; render(); };

/* ---------- Music ---------- */
const bgm = $("#bgm"), musicBtn = $("#musicBtn");
bgm.addEventListener("error", () => (musicBtn.style.display = "none"));
musicBtn.onclick = () => {
  if (bgm.paused) { bgm.play().catch(() => {}); musicBtn.classList.remove("off"); }
  else { bgm.pause(); musicBtn.classList.add("off"); }
};
function fadeInMusic() {
  bgm.volume = 0;
  bgm.play().then(() => {
    let v = 0;
    const iv = setInterval(() => { v = Math.min(0.75, v + 0.05); bgm.volume = v; if (v >= 0.75) clearInterval(iv); }, 150);
  }).catch(() => musicBtn.classList.add("off"));
}

/* ---------- Open the envelope ---------- */
$("#seal").onclick = () => {
  const scene = $("#scene");
  scene.classList.add("opening");
  fadeInMusic();                                   // الموسيقى تشتغل أول ما يضغط على الختم
  setTimeout(() => scene.classList.add("leaving"), 2700);
  setTimeout(() => {
    document.body.classList.remove("locked");
    document.body.classList.add("opened");
    window.scrollTo(0, 0);
    petals();
  }, 3000);
  setTimeout(() => scene.remove(), 4500);
};

/* ---------- Falling petals ---------- */
function petals() {
  const c = $("#petals"), x = c.getContext("2d");
  c.width = innerWidth; c.height = innerHeight;
  const P = Array.from({ length: 22 }, () => ({
    x: Math.random() * c.width, y: -Math.random() * c.height, s: 8 + Math.random() * 10,
    v: 0.6 + Math.random() * 1.1, w: Math.random() * 6.28, r: Math.random() * 6, a: 0.5 + Math.random() * 0.4
  }));
  const end = performance.now() + 11000;
  (function frame(n) {
    x.clearRect(0, 0, c.width, c.height);
    P.forEach((p) => {
      p.y += p.v; p.w += 0.02; p.x += Math.sin(p.w) * 0.8; p.r += 0.02;
      x.save(); x.translate(p.x, p.y); x.rotate(p.r);
      x.globalAlpha = p.a * (n < end ? 1 : Math.max(0, 1 - (n - end) / 1500));
      x.fillStyle = "#e8a5b3"; x.beginPath(); x.ellipse(0, 0, p.s * 0.55, p.s * 0.3, 0, 0, 7); x.fill(); x.restore();
      if (p.y > c.height + 20 && n < end) { p.y = -20; p.x = Math.random() * c.width; }
    });
    if (n < end + 1500) requestAnimationFrame(frame); else x.clearRect(0, 0, c.width, c.height);
  })(performance.now());
}

/* ---------- Scroll reveal ---------- */
const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: 0.15 });
document.querySelectorAll(".rv").forEach((el) => io.observe(el));

/* ---------- Map + start ---------- */
if (CONFIG.mapEmbed) $("#mapFrame").src = CONFIG.mapEmbed;
else $("#mapBox").style.display = "none";
render();

