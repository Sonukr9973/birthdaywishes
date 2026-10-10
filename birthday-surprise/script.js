/* ===== EDIT ME: everything personal lives here ===== */
const birthdayConfig = {
  name: "Reena Didi",            // shown everywhere
  title: "A Little Birthday Surprise for Reena Didi 💗",
  songPath: "assets/audio/birthday-song.mp3",
  songTitle: "A Special Birthday Song",
  songArtist: "For Didi",
  birthdayMessage: `Happy Birthday, Didi! 💗

I hope your special day is filled with beautiful smiles, endless happiness, sweet surprises, and moments that make your heart feel warm. May all your dreams slowly turn into reality, and may life bring you countless reasons to smile.

You have a special way of making ordinary moments feel a little more beautiful. I hope this little surprise brings a smile to your face, because you deserve to feel special today and every day.

Keep shining, keep smiling, and never stop being the wonderful person you are.

Happy Birthday once again! 🎂🌷✨`,
  letterMessage: `Hey, Didi... 💕

I wanted to do something a little different to make your birthday memorable. So I created this tiny corner of the internet just for you.

I don't know if this little surprise can capture how special you are, but I hope it makes you smile. You deserve happiness, beautiful memories, and all the good things life has to offer.

Never forget how amazing you are.

Keep smiling, keep shining, and have the most beautiful birthday ever. 🌷💗`,
  // Photos: put files in assets/photos/ and list them here (order = display order)
  photoPaths: ["https://plain-apac-prod-public.komododecks.com/202610/10/93RqQVnooG2PYsaogsbG/image.jpg", "https://plain-apac-prod-public.komododecks.com/202610/10/YD1CPrRlm3EK6oWxkUhd/image.jpg", "https://plain-apac-prod-public.komododecks.com/202610/10/UnVDWgByH2wVknoKBCLy/image.jpg"],
  photoCaptions: ["Your caption here 💗", "Another sweet memory 🌸", "Always smiling ✨"]
};
/* ===== End of config. Code below needs no editing. ===== */

const C = birthdayConfig, $ = s => document.querySelector(s);
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
document.body.innerHTML = document.body.innerHTML.replaceAll('{{name}}', C.name);
document.title = C.title;
const FALLBACK = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#f8c8dc"/><text x="200" y="215" font-size="90" text-anchor="middle">💗</text></svg>');

/* cakes */
const cakeSVG = `<svg viewBox="0 0 200 190" role="img" aria-label="Birthday cake with candles"><ellipse cx="100" cy="176" rx="90" ry="10" fill="#e8b4cc"/><rect x="30" y="120" width="140" height="52" rx="10" fill="#ff9ec4"/><rect x="50" y="78" width="100" height="46" rx="10" fill="#ffc2da"/><path d="M30 130q12 14 24 0t24 0 24 0 24 0 24 0 20 0v-8H30z" fill="#fff4ee"/><path d="M50 88q10 12 20 0t20 0 20 0 20 0 20 0v-8H50z" fill="#fff4ee"/><circle cx="62" cy="150" r="4" fill="#f6c978"/><circle cx="100" cy="152" r="4" fill="#f6c978"/><circle cx="138" cy="150" r="4" fill="#f6c978"/>${[70,100,130].map(x=>`<rect x="${x-3}" y="52" width="6" height="26" rx="2" fill="#c9b6ff"/><ellipse class="fl" cx="${x}" cy="44" rx="5" ry="9" fill="#ffd27a"/>`).join('')}</svg>`;
['#cakeHero','#cakeWish','#cakeFinal'].forEach(s => $(s).innerHTML = cakeSVG);

/* particles (hearts, petals, confetti, sparks) */
const cv = $('#fx'), cx = cv.getContext('2d'); let P = [], running = false;
const fit = () => { cv.width = innerWidth; cv.height = innerHeight; }; fit(); addEventListener('resize', fit);
const rnd = (a, b) => a + Math.random() * (b - a), pick = a => a[Math.floor(Math.random() * a.length)];
const COL = ['#ff8fb8', '#ffd1e6', '#c9b6ff', '#f6c978', '#fff'];
function push(p) { if (P.length > 350) return; P.push(p); if (!running) { running = true; requestAnimationFrame(loop); } }
function loop() {
  cx.clearRect(0, 0, cv.width, cv.height);
  P = P.filter(p => p.l > 0 && p.y < cv.height + 40);
  for (const p of P) {
    p.x += p.vx; p.y += p.vy; p.vy += p.g; p.l--; p.a += p.va;
    cx.save(); cx.globalAlpha = Math.min(1, p.l / 30); cx.translate(p.x, p.y); cx.rotate(p.a);
    if (p.e) { cx.font = p.s + 'px serif'; cx.fillText(p.e, 0, 0); } else { cx.fillStyle = p.c; cx.fillRect(-p.s / 2, -p.s / 3, p.s, p.s * .6); }
    cx.restore();
  }
  if (P.length) requestAnimationFrame(loop); else running = false;
}
function rain(kind, n, spread = 1500) {
  n = calm ? Math.ceil(n / 4) : n;
  for (let i = 0; i < n; i++) setTimeout(() => push({
    x: rnd(0, cv.width), y: -20, vx: rnd(-1, 1), vy: rnd(1, 3), g: .01, l: 400, a: 0, va: rnd(-.05, .05),
    s: kind === 'confetti' ? rnd(7, 12) : rnd(16, 28), c: pick(COL),
    e: kind === 'hearts' ? pick(['💗', '💖', '💕', '✨']) : kind === 'petals' ? pick(['🌸', '🌹', '🌷']) : null
  }), Math.random() * spread);
}
function boom(x, y, n = 40) {
  n = calm ? 8 : n; const c = pick(['#ff8fb8', '#f6c978', '#ffd1e6']);
  for (let i = 0; i < n; i++) { const a = rnd(0, 6.28), v = rnd(1, 5);
    push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, g: .05, l: 70, a: 0, va: 0, s: 5, c }); }
}
function fireworks(times) { for (let i = 0; i < times; i++) setTimeout(() => boom(rnd(cv.width * .15, cv.width * .85), rnd(cv.height * .1, cv.height * .5)), i * 600); }
function balloons(n) {
  if (calm) return;
  for (let i = 0; i < n; i++) setTimeout(() => { const b = document.createElement('div'); b.className = 'bl';
    b.textContent = pick(['🎈', '🎀', '🎈']); b.style.left = rnd(2, 92) + '%'; b.style.animationDuration = rnd(7, 11) + 's';
    $('#balloons').append(b); setTimeout(() => b.remove(), 12000); }, i * 350);
}

/* typewriter (cancels itself if restarted) */
function type(el, text, speed = 35) {
  el._t = (el._t || 0) + 1; const id = el._t; let i = 0; el.textContent = '';
  if (calm) { el.textContent = text; return; }
  (function step() { if (el._t !== id) return; el.textContent = text.slice(0, ++i); if (i < text.length) setTimeout(step, speed); })();
}

/* scroll reveal */
const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }), { threshold: .25 }) : null;
document.querySelectorAll('.rv').forEach(el => io ? io.observe(el) : el.classList.add('in'));
$('#msg').textContent = C.birthdayMessage;

/* music */
const audio = $('#audio'), player = $('#player'); let audioOK = true;
$('#songTitle').textContent = '♪ ' + C.songTitle; $('#songArtist').textContent = C.songArtist; audio.src = C.songPath;
audio.addEventListener('error', () => { audioOK = false; $('#songArtist').textContent = 'Add your song to ' + C.songPath; player.classList.remove('playing'); });
audio.addEventListener('timeupdate', () => { if (audio.duration) $('#prog').style.width = audio.currentTime / audio.duration * 100 + '%'; });
function toggleMusic(force) {
  if (!audioOK) { $('#songArtist').textContent = 'Music file not found yet 🎵'; return; }
  audio.loop = true;
  const want = force ?? audio.paused;
  if (want) audio.play().then(() => player.classList.add('playing')).catch(() => player.classList.remove('playing'));
  else { audio.pause(); player.classList.remove('playing'); }
}
$('#playBtn').onclick = () => toggleMusic(); $('#musicBtn2').onclick = () => toggleMusic();
$('#muteBtn').onclick = e => { audio.muted = !audio.muted; e.currentTarget.textContent = audio.muted ? '🔇' : '🔊'; };

/* open the surprise */
let ambient;
$('#openBtn').onclick = () => {
  $('#flash').classList.add('go'); toggleMusic(true);
  setTimeout(() => {
    $('#intro').hidden = true; $('#surprise').hidden = false; player.hidden = false; scrollTo(0, 0);
    rain('hearts', 30, 3000); rain('confetti', 50, 3000); rain('petals', 20, 4000); balloons(8); fireworks(5);
    type($('#title'), `HAPPY BIRTHDAY, ${C.name.toUpperCase()}! 🎂💖`, 60);
    document.querySelectorAll('#hero .rv').forEach(el => el.classList.add('in'));
    clearInterval(ambient); ambient = setInterval(() => { if (!document.hidden) rain('hearts', 1); }, 2500);
  }, 700);
};

/* gallery + lightbox */
const photos = C.photoPaths.map((src, i) => ({ src, cap: C.photoCaptions[i] || '' })); let cur = 0;
$('#track').innerHTML = photos.map((p, i) => `<button class="pol" data-i="${i}" style="--r:${(i % 2 ? 2 : -2) - i % 3}deg" aria-label="Open photo ${i + 1}"><img loading="lazy" src="${p.src}" alt="${p.cap}"><span>${p.cap}</span></button>`).join('');
document.querySelectorAll('.pol img').forEach(im => im.onerror = () => { im.onerror = null; im.src = FALLBACK; });
function show(i) { cur = (i + photos.length) % photos.length; const im = $('#lbImg'); im.onerror = () => { im.onerror = null; im.src = FALLBACK; };
  im.src = photos[cur].src; im.alt = photos[cur].cap; $('#lbCap').textContent = photos[cur].cap; }
$('#track').onclick = e => { const b = e.target.closest('.pol'); if (b) { show(+b.dataset.i); $('#lb').hidden = false; $('#lbClose').focus(); } };
$('#lbClose').onclick = () => $('#lb').hidden = true;
$('#lbPrev').onclick = () => show(cur - 1); $('#lbNext').onclick = () => show(cur + 1);
addEventListener('keydown', e => { if ($('#lb').hidden) return;
  if (e.key === 'Escape') $('#lb').hidden = true; if (e.key === 'ArrowLeft') show(cur - 1); if (e.key === 'ArrowRight') show(cur + 1); });

/* wish cake */
let blown = false;
$('#wishBtn').onclick = () => {
  blown = !blown; $('#cakeWish').classList.toggle('out', blown);
  if (blown) {
    $('#wishBtn').textContent = 'RELIGHT THE CANDLES 🕯️'; rain('confetti', 40, 1500);
    const r = $('#cakeWish').getBoundingClientRect(); boom(r.left + r.width / 2, r.top + 20, 50);
    type($('#wish1'), 'Close your eyes and make a beautiful wish. 💖', 45);
    setTimeout(() => { if (blown) $('#wish2').textContent = 'May all your little wishes come true!'; }, calm ? 0 : 2800);
  } else { $('#wishBtn').textContent = 'MAKE A WISH ✨'; $('#wish1').textContent = ''; $('#wish2').textContent = ''; }
};

/* love letter */
let opened = false;
$('#letterBtn').onclick = () => {
  if (opened) return; opened = true; $('#env').classList.add('open'); $('#letterBtn').setAttribute('aria-expanded', 'true'); $('#letterBtn').hidden = true;
  setTimeout(() => { $('#letter').classList.add('show'); type($('#letterText'), C.letterMessage, 30); rain('hearts', 20, 3000); }, calm ? 0 : 900);
};

/* final buttons (each bound once) */
$('#topBtn').onclick = () => $('#hero').scrollIntoView();
$('#replayBtn').onclick = () => {
  opened = false; blown = false; $('#env').classList.remove('open'); $('#letter').classList.remove('show'); $('#letterText').textContent = '';
  $('#letterBtn').hidden = false; $('#letterBtn').setAttribute('aria-expanded', 'false');
  $('#cakeWish').classList.remove('out'); $('#wishBtn').textContent = 'MAKE A WISH ✨'; $('#wish1').textContent = ''; $('#wish2').textContent = '';
  document.querySelectorAll('.rv').forEach(el => el.classList.remove('in')); $('#title').textContent = '';
  clearInterval(ambient); $('#surprise').hidden = true; $('#intro').hidden = false; scrollTo(0, 0);
};
$('#shareBtn').onclick = async () => {
  const data = { title: C.title, text: 'A little birthday surprise 💗', url: location.href };
  try { if (navigator.share) { await navigator.share(data); return; }
    await navigator.clipboard.writeText(location.href); $('#shareNote').textContent = 'Link copied! Paste it in WhatsApp or Instagram 💗';
  } catch { $('#shareNote').textContent = 'Copy this link: ' + location.href; }
};
