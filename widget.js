// ALIGN_WIDGET — Scriptable 앱에서 돌아가는 Align 위젯.
// 아이폰 Scriptable에 붙여넣는 짧은 "불러오기" 코드가 이 파일을 받아 실행해요. (앱 설정 → 위젯에서 복사)
// 기록은 Firebase(Firestore)에서 직접 읽어요. 로그인은 Scriptable 앱에서 한 번만 하면 되고,
// 비밀번호는 저장하지 않고 로그인 토큰만 아이폰 키체인에 보관해요.

const APP_URL = 'https://ekaldks0721-cpu.github.io/align/';
const FB = { apiKey: 'AIzaSyADvQk2inabPw--ixLZuvYtzS2j72lDwWQ', projectId: 'align-2c655' };
const KC_TOKEN = 'align.widget.refresh', KC_UID = 'align.widget.uid', KC_EMAIL = 'align.widget.email';
const WD = ['월', '화', '수', '목', '금', '토', '일'], WDE = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], MONE = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// 언어: 앱 설정(설정 → 화면 → 언어)을 따르고, 아직 기록을 못 읽었으면 아이폰 언어를 따름
let WEN = false; try { WEN = !/^ko/i.test(Device.language()); } catch (e) {}
const WDICT = {" · 할 일 ": " · tasks: ", " 완료": " done", " 외 ": " +", " 집중": " focus", "Align 로그인": "Align login", "Align 앱 설정 → 기기 간 동기화에서 쓰는 이메일과 비밀번호를 입력하세요. 비밀번호는 저장하지 않아요.": "Enter the email and password you use under Settings → Sync across devices in Align. Your password isn't stored.", "Align 위젯": "Align widget", "Scriptable 앱에서 이 스크립트를 실행해 다시 로그인해 주세요.": "Run this script in the Scriptable app and log in again.", "Scriptable 앱에서 이 스크립트를 한 번 실행해 로그인해 주세요.": "Run this script once in the Scriptable app to log in.", "개 · ": " · ", "개 남음": " left", "개 더": " more", "개": "", "기록을 불러오지 못했어요. 인터넷 연결을 확인해 주세요.": "Couldn't load your records. Check your internet connection.", "기록을 읽지 못했어요": "Couldn't read your records", "남은 일정이 없어요": "No more events", "다가오는 일정": "Upcoming", "다시 로그인이 필요해요": "Please log in again", "다시 로그인해 주세요": "Please log in again", "다음": "Next", "닫기": "Close", "로그아웃": "Log out", "로그인": "Log in", "로그인하지 못했어요 (": "Couldn't log in (", "로그인하지 못했어요": "Couldn't log in", "목표 ": "Goal ", "비밀번호": "Password", "시도가 너무 많아요. 잠시 뒤에 다시 해 주세요": "Too many attempts. Please try again later", "오늘 ": "Today ", "오늘 남은 일정 없음": "No more events today", "오늘 남은 일정이 없어요": "No more events today", "오늘 일정": "Today's events", "오늘 집중": "Focus today", "오늘 할 일을 다 했어요 🎉": "All tasks done today 🎉", "오늘 할 일이 없어요": "No tasks today", "오늘": "Today", "외 ": "+", "이메일": "Email", "이메일이나 비밀번호가 맞지 않아요": "Email or password is incorrect", "인터넷에 연결되면 새로 고쳐요": "Will refresh when you're online", "일정 ": "Events: ", "일정": "Events", "작게 미리보기": "Preview small", "종일": "All day", "중간 미리보기": "Preview medium", "지금 ": "Now ", "지금": "Now", "집중 ": "Focus ", "집중": "Focus", "취소": "Cancel", "크게 미리보기": "Preview large", "할 일 ": "Tasks: ", "할 일": "Tasks", "항목 없음": "No item", "확인": "OK", " 계정으로 연결돼 있어요. 홈 화면을 길게 눌러 Scriptable 위젯을 추가하고, 위젯을 길게 눌러 \"위젯 편집\" → Script를 이 스크립트로 고르세요. 오늘 일정만 보고 싶으면 Parameter에 \"일정\", 동물을 보고 싶으면 \"동물\"이라고 적으세요.": " is connected. Long-press the Home Screen to add a Scriptable widget, then long-press it → \"Edit Widget\" → pick this script as Script. To see only today's events, type \"schedule\" in Parameter; to watch your pet, type \"pet\".", "Align 앱의 동물 탭에서 동물 친구를 데려오면 여기에 보여요.": "Adopt a pet in the Align Pets tab and it will show up here.", "동물 미리보기": "Pet preview"};
const WT = s => WEN && WDICT[s] != null ? WDICT[s] : s;
const PALETTE = ['#F2CB3D', '#F08FB0', '#6FCFAB', '#6FB6EE', '#AE98EC', '#F39B52', '#A9D34E', '#9AA7BA'];

/* ---------- 날짜 (앱과 같은 규칙: '하루가 시작되는 시각' 전은 전날) ---------- */
const pad = n => String(n).padStart(2, '0');
const keyOf = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
const parts = k => k.split('-').map(Number);
const wdOf = k => { const [y, m, d] = parts(k); return (new Date(y, m - 1, d).getDay() + 6) % 7; };
const hm = min => pad(Math.floor(min / 60) % 24) + ':' + pad(min % 60);
function fmtDur(sec) { const m = Math.round(sec / 60), h = Math.floor(m / 60), mm = m % 60; if (WEN) return h ? (mm ? h + 'h ' + mm + 'm' : h + 'h') : mm + ' min'; return h ? (mm ? h + '시간 ' + mm + '분' : h + '시간') : mm + '분'; }

/* ---------- Firebase (REST) ---------- */
async function postJSON(url, body, form) {
  const r = new Request(url); r.method = 'POST';
  r.headers = { 'Content-Type': form ? 'application/x-www-form-urlencoded' : 'application/json' };
  r.body = form ? body : JSON.stringify(body);
  const j = await r.loadJSON(); return j;
}
async function signIn(email, password) {
  const j = await postJSON('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + FB.apiKey, { email, password, returnSecureToken: true });
  if (!j || !j.refreshToken) {
    const m = j && j.error && j.error.message || '';
    throw new Error(/INVALID|PASSWORD|EMAIL_NOT_FOUND/.test(m) ? WT('이메일이나 비밀번호가 맞지 않아요') : /TOO_MANY/.test(m) ? WT('시도가 너무 많아요. 잠시 뒤에 다시 해 주세요') : WT('로그인하지 못했어요 (') + m + ')');
  }
  Keychain.set(KC_TOKEN, j.refreshToken); Keychain.set(KC_UID, j.localId); Keychain.set(KC_EMAIL, email);
}
async function idToken() {
  const j = await postJSON('https://securetoken.googleapis.com/v1/token?key=' + FB.apiKey,
    'grant_type=refresh_token&refresh_token=' + encodeURIComponent(Keychain.get(KC_TOKEN)), true);
  if (!j || !j.id_token) { const e = new Error(WT('다시 로그인해 주세요')); e.relogin = true; throw e; }
  if (j.refresh_token) Keychain.set(KC_TOKEN, j.refresh_token);
  return j.id_token;
}
async function loadDocs(ids) { // 문서 여러 개를 한 번에. 앱은 문서를 {j: JSON 글자}로 저장해 둠
  const tok = await idToken(), uid = Keychain.get(KC_UID);
  const base = 'projects/' + FB.projectId + '/databases/(default)/documents';
  const r = new Request('https://firestore.googleapis.com/v1/' + base + ':batchGet'); r.method = 'POST';
  r.headers = { 'Content-Type': 'application/json', Authorization: 'Bearer ' + tok };
  r.body = JSON.stringify({ documents: ids.map(id => base + '/users/' + uid + '/docs/' + id) });
  const res = await r.loadJSON(); if (!Array.isArray(res)) throw new Error(WT('기록을 읽지 못했어요'));
  const out = {};
  res.forEach(x => { if (!x.found) return; const id = x.found.name.split('/').pop(), f = x.found.fields || {};
    try { out[id] = f.j && f.j.stringValue ? JSON.parse(f.j.stringValue) : null; } catch (e) {} });
  return out;
}

/* ---------- 앱의 기록을 오늘 기준으로 정리 ---------- */
function summarize(D, now) {
  const items = id => ((D[id] && D[id].items) || []).filter(i => !i.x);
  const raw = id => (D[id] && D[id].items) || [];
  const v = (D.settings && D.settings.v) || {}, dayStart = v.dayStart != null ? v.dayStart : 5;
  WEN = v.lang === 'en'; // 앱에서 영어로 바꾸지 않았으면 한국어
  const dayKey = ts => keyOf(new Date(ts - dayStart * 3600e3));
  const k = dayKey(now), [y, mo, d] = parts(k), st = new Date(y, mo - 1, d, dayStart).getTime(), en = st + 864e5;
  const subs = items('subjects').sort((a, b) => (a.o || 0) - (b.o || 0)), cats = items('cats').sort((a, b) => (a.o || 0) - (b.o || 0));
  const sub = id => subs.find(s => s.id === id), cat = id => cats.find(c => c.id === id);
  const catOf = sid => { const s = sub(sid), c = s && s.cat; return c && cat(c) ? c : 'c-study'; };

  // 공부(집중) 시간: 오늘 범위에 걸친 구간만 더함
  let total = 0; const byCat = {};
  const logs = [].concat(...Object.keys(D).filter(id => id.indexOf('log-') === 0).map(items));
  logs.forEach(s => (s.segs || []).forEach(g => { const a = Math.max(g[0] * 1e3, st), b = Math.min(g[1] * 1e3, en, now);
    if (b > a) { const len = (b - a) / 1e3; total += len; const c = catOf(s.sub); byCat[c] = (byCat[c] || 0) + len; } }));

  // 집중 시간: 앱 설정 → 위젯에서 고른 카테고리 기준 (안 골랐으면 앱의 목표 기준 카테고리, 기본은 '공부')
  let wc = v.widgetCat != null ? v.widgetCat : (v.goalCat != null ? v.goalCat : 'c-study'); if (wc && !cat(wc)) wc = '';
  const goals = v.goals || { [v.goalCat || '']: { d: v.dailyGoal != null ? v.dailyGoal : 240 } };
  const fsec = wc ? byCat[wc] || 0 : total, fname = wc ? cat(wc).name : '';
  const goal = goals[wc] && goals[wc].d ? { min: goals[wc].d, name: fname, sec: fsec } : null;

  // 할 일: 오늘 것 + 아직 앱에서 만들어지지 않은 오늘의 반복 할 일. 앱과 같은 순서(카테고리 → 항목 → 직접 정한 순서)
  const tdoc = 'tasks-' + k.slice(0, 7), tasks = items(tdoc).filter(t => t.date === k), had = new Set(raw(tdoc).map(t => t.id));
  items('repeats').forEach(r => { const id = 'r-' + r.id + '-' + k;
    if ((r.days || []).indexOf(wdOf(k)) >= 0 && !(r.from && r.from > k) && !had.has(id))
      tasks.push({ id, date: k, title: r.title, sub: r.sub || '', done: false, o: now /* 앱이 만들 때처럼 그 항목의 맨 뒤 */, due: r.dueT != null ? k : '', dueT: r.dueT != null ? r.dueT : null }); });
  const co = {}, so = {}; cats.forEach((c, i) => co[c.id] = i); subs.forEach((s, i) => so[s.id] = i);
  const keyC = t => t.sub && sub(t.sub) ? catOf(t.sub) : '';
  tasks.sort((a, b) => { const ca = keyC(a), cb = keyC(b); if (ca !== cb) return (ca === '' ? 1e9 : co[ca] ?? 1e8) - (cb === '' ? 1e9 : co[cb] ?? 1e8);
    const sa = sub(a.sub) ? a.sub : '', sb = sub(b.sub) ? b.sub : ''; if (sa !== sb) return (sa ? so[sa] ?? 1e8 : 1e9) - (sb ? so[sb] ?? 1e8 : 1e9); return (a.o || 0) - (b.o || 0); });
  const taskOut = tasks.map(t => { const s = sub(t.sub), c = s ? cat(catOf(t.sub)) : null;
    return { title: t.title, done: !!t.done, color: s ? s.color : PALETTE[7], cat: c ? c.name : WT('항목 없음'), dueT: t.due === k ? t.dueT : null }; });

  // 일정: 캘린더 + 시간표 고정 일정(그날 쉬기·시간 바꾸기·기간 쉬기 반영)
  const nowMin = Math.floor((now - new Date(y, mo - 1, d).getTime()) / 6e4), evs = [];
  items('cal-' + k.slice(0, 7)).filter(e => e.date === k).forEach(e => evs.push({ title: e.title, place: e.place || '', s: e.s, e: e.e, color: e.color || PALETTE[3] }));
  const w = wdOf(k), xs = {}; items('schedx').filter(x => x.date === k).forEach(x => xs[x.ev] = x);
  const brks = items('schedbrk').filter(b => b.from <= k && k <= b.to);
  items('schedule').filter(e => (!e.from || e.from <= k) && (!e.to || e.to >= k) && e.day === w).forEach(e => {
    const x = xs[e.id], over = x && (x.on || x.s != null), b = over ? null : brks.find(z => z.ev === '*' || z.ev === e.id);
    if ((x && x.skip) || b) return;
    evs.push({ title: e.title, place: e.place || '', s: x && x.s != null ? x.s : e.s, e: x && x.s != null ? x.e : e.e, color: e.color || PALETTE[3] }); });
  const upcoming = evs.filter(e => e.s == null || e.e > nowMin).sort((a, b) => (a.s == null ? -1 : a.s) - (b.s == null ? -1 : b.s))
    .map(e => Object.assign(e, { now: e.s != null && e.s <= nowMin, when: e.s == null ? WT('종일') : hm(e.s) }));

  return { k, total: fsec, fname, goal, tasks: taskOut, events: upcoming, at: now };
}

/* ---------- 그리기 ---------- */
// 읽기 쉽게: 가장 작은 글자 12pt, 진한 회색, 위젯마다 꼭 필요한 것만
const C = { ink: Color.dynamic(new Color('#0F1E3D'), new Color('#F2F5FC')), ink2: Color.dynamic(new Color('#46557A'), new Color('#B4C1DC')),
  bg: Color.dynamic(new Color('#FFFFFF'), new Color('#121A2E')), accent: Color.dynamic(new Color('#2457DB'), new Color('#86ABFF')),
  soft: Color.dynamic(new Color('#E3EAF8'), new Color('#2A3756')), warn: Color.dynamic(new Color('#C73A2F'), new Color('#FF9585')),
  line: Color.dynamic(new Color('#E6ECF6'), new Color('#24304B')) };
function bar(width, height, ratio, fill, track) {
  const c = new DrawContext(); c.size = new Size(width, height); c.opaque = false; c.respectScreenScale = true;
  const p = new Path(); p.addRoundedRect(new Rect(0, 0, width, height), height / 2, height / 2); c.addPath(p); c.setFillColor(track); c.fillPath();
  if (ratio > 0) { const q = new Path(); q.addRoundedRect(new Rect(0, 0, Math.max(height, width * Math.min(1, ratio)), height), height / 2, height / 2); c.addPath(q); c.setFillColor(fill); c.fillPath(); }
  return c.getImage();
}
function text(stack, s, size, color, weight, lines, scale) {
  const t = stack.addText(s); t.font = weight === 'bold' ? Font.boldSystemFont(size) : weight === 'heavy' ? Font.heavySystemFont(size) : weight === 'semi' ? Font.semiboldSystemFont(size) : weight === 'med' ? Font.mediumSystemFont(size) : Font.systemFont(size);
  t.textColor = color; t.lineLimit = lines || 1; t.minimumScaleFactor = scale || .8; return t;
}
const shortDur = sec => { const m = Math.round(sec / 60), h = Math.floor(m / 60), mm = m % 60; if (WEN) return h ? h + 'h' + (mm ? ' ' + mm + 'm' : '') : mm + ' min'; return h ? h + '시간' + (mm ? ' ' + mm + '분' : '') : mm + '분'; };
const clockDur = sec => { const m = Math.round(sec / 60); return Math.floor(m / 60) + ':' + pad(m % 60); };
function dateLabel(k) { const [, m, d] = parts(k); return WEN ? WDE[wdOf(k)] + ', ' + MONE[m - 1] + ' ' + d : m + '월 ' + d + '일 ' + WD[wdOf(k)] + '요일'; }
function pctOf(S) { return S.goal ? Math.round(S.goal.sec / 60 / S.goal.min * 100) : null; }
function bigDur(st, sec, size) { // 숫자는 크게, '시간·분'은 작게 (좁은 위젯에서도 잘리지 않게)
  const m = Math.round(sec / 60), h = Math.floor(m / 60), mm = m % 60, row = st.addStack(); row.bottomAlignContent(); row.spacing = 1;
  const num = n => text(row, String(n), size, C.ink, 'heavy', 1, .6), unit = u => { const t = text(row, u, Math.round(size * .5), C.ink, 'bold'); return t; };
  const U = WEN ? ['h', 'm', 'min'] : ['시간', '분', '분'];
  if (h) { num(h); unit(U[0]); if (mm) { row.addSpacer(Math.round(size * .2)); num(mm); unit(U[1]); } } else { num(mm); unit(U[2]); }
}
function focusBlock(st, S, width, size, goalLine) { // 라벨 + 큰 시간 + 막대 (+ 목표 줄은 큰 위젯만)
  const top = st.addStack(); top.centerAlignContent();
  text(top, S.fname ? S.fname + WT(' 집중') : WT('오늘 집중'), 13, C.ink2, 'semi'); top.addSpacer();
  const pct = pctOf(S); if (pct != null) text(top, pct + '%', 13, pct >= 100 ? C.accent : C.ink, 'bold');
  st.addSpacer(2);
  bigDur(st, S.goal ? S.goal.sec : S.total, size);
  if (S.goal) { st.addSpacer(6); const im = st.addImage(bar(width, 8, S.goal.sec / 60 / S.goal.min, C.accent, C.soft)); im.imageSize = new Size(width, 8);
    if (goalLine) { st.addSpacer(4); text(st, WT('목표 ') + shortDur(S.goal.min * 60), 12, C.ink2, 'med'); } }
}
function eventRow(st, e, size) {
  const row = st.addStack(); row.centerAlignContent(); row.spacing = 8;
  text(row, e.now ? WT('지금') : e.when, size, e.now ? C.accent : C.ink, 'bold');
  text(row, e.title, size, C.ink, 'med');
  if (e.place) { row.addSpacer(); text(row, '📍 ' + e.place, size - 2, C.ink2, 'semi'); }
  return row;
}
function placeLine(st, e, size) { if (e && e.place) text(st, '📍 ' + e.place, size, C.ink2, 'semi'); }
function taskRow(st, t, size) {
  const row = st.addStack(); row.centerAlignContent(); row.spacing = 6;
  const o = row.addText('○'); o.font = Font.boldSystemFont(size - 1); o.textColor = new Color(t.color);
  text(row, t.title, size, C.ink, 'med');
  if (t.dueT != null) { row.addSpacer(); text(row, hm(t.dueT), size - 2, C.warn, 'bold'); }
  return row;
}
function sectionTitle(st, s, right) {
  const r = st.addStack(); r.centerAlignContent(); text(r, s, 13, C.accent, 'bold');
  if (right) { r.addSpacer(); text(r, right, 12, C.ink2, 'semi'); }
}
function emptyTasks(st, S, size) {
  if (!S.tasks.length) text(st, WT('오늘 할 일이 없어요'), size, C.ink2, 'med');
  else text(st, WT('오늘 할 일을 다 했어요 🎉'), size, C.accent, 'bold');
}
function buildEvents(S, fam) { // 잠금 화면 '오늘 일정' 종류
  const w = new ListWidget(); w.url = APP_URL; w.refreshAfterDate = new Date(Date.now() + 15 * 60e3);
  const ev = S.events, when = e => e.now ? WT('지금') : e.s == null ? WT('종일') : hm(e.s), W = Color.white();
  if (fam === 'accessoryInline') { w.addText(ev.length ? WT('일정 ') + ev.length + WT('개 · ') + when(ev[0]) + ' ' + ev[0].title : WT('오늘 남은 일정 없음')); return w; }
  if (fam === 'accessoryCircular') {
    const a = w.addText(WT('일정')); a.font = Font.semiboldSystemFont(11); a.centerAlignText();
    const b = w.addText(String(ev.length)); b.font = Font.heavySystemFont(22); b.centerAlignText(); return w; }
  if (!/^accessory/.test(fam)) { // 홈 화면에 둔 경우: 일정 목록
    w.backgroundColor = C.bg; w.setPadding(14, 16, 14, 16); sectionTitle(w, WT('오늘 일정'), ev.length ? ev.length + WT('개 남음') : ''); w.addSpacer(8);
    if (!ev.length) text(w, WT('오늘 남은 일정이 없어요'), 14, C.ink2, 'med');
    ev.slice(0, fam === 'large' ? 9 : fam === 'medium' ? 4 : 3).forEach(e => { if (fam === 'small') { text(w, when(e), 12, e.now ? C.accent : C.ink2, 'bold'); text(w, e.title, 13, C.ink, 'semi'); w.addSpacer(3); } else { eventRow(w, e, 15); w.addSpacer(6); } });
    w.addSpacer(); return w; }
  // 직사각형: 장소 없이 '시간 일정'만, 4줄까지 (넘치면 마지막 줄에 남은 개수)
  if (!ev.length) { text(w, WT('오늘 일정'), 13, W, 'semi'); text(w, WT('남은 일정이 없어요'), 15, W, 'heavy', 1, .7); return w; }
  const MAX = 4, list = ev.length > MAX ? ev.slice(0, MAX - 1) : ev;
  w.setPadding(0, 0, 0, 0); w.spacing = 0;
  list.forEach((e, i) => { const r = w.addStack(); r.spacing = 4; r.centerAlignContent();
    text(r, when(e), 12.5, W, 'heavy', 1, .8); text(r, e.title, 12.5, W, i === 0 ? 'bold' : 'semi', 1, .8); });
  if (ev.length > MAX) text(w, '+ ' + (ev.length - list.length) + WT('개 더'), 12, W, 'semi');
  return w;
}
function build(S, fam, note) {
  if (MODE === 'pet') return buildPet(S, fam, note);
  if (MODE === 'events') return buildEvents(S, fam);
  const w = new ListWidget(); w.url = APP_URL; w.refreshAfterDate = new Date(Date.now() + 15 * 60e3);
  // 잠금 화면: 다음 일정을 맨 앞에 (지금 하고 있는 일정이면 '지금')
  const nx = S.events[0], nxLabel = nx ? (nx.now ? WT('지금 ') : nx.s == null ? WT('오늘 ') : hm(nx.s) + ' ') + nx.title : '';
  const focus = shortDur(S.goal ? S.goal.sec : S.total), open = S.tasks.filter(t => !t.done), done = S.tasks.length - open.length;
  if (fam === 'accessoryInline') { w.addText(nx ? nxLabel + (nx.place ? ' · ' + nx.place : ' · ' + focus) : focus + WT(' · 할 일 ') + open.length + WT('개')); return w; }
  if (fam === 'accessoryCircular') {
    const top = w.addText(nx ? (nx.now ? WT('지금') : WT('다음')) : WT('집중')); top.font = Font.semiboldSystemFont(11); top.centerAlignText();
    const t = w.addText(nx ? (nx.now ? nx.title : nx.s == null ? WT('종일') : hm(nx.s)) : clockDur(S.goal ? S.goal.sec : S.total));
    t.font = Font.heavySystemFont(16); t.minimumScaleFactor = .5; t.lineLimit = 1; t.centerAlignText(); return w; }
  if (fam === 'accessoryRectangular') {
    if (nx) { text(w, nxLabel, 15, Color.white(), 'heavy', 1, .7); if (nx.place) text(w, '📍 ' + nx.place, 13, Color.white(), 'semi'); }
    text(w, WT('집중 ') + focus + (S.goal ? ' · ' + pctOf(S) + '%' : ''), 13, Color.white(), 'semi');
    if (open[0] && !(nx && nx.place)) text(w, '○ ' + open[0].title + (!nx && open[1] ? WT(' 외 ') + (open.length - 1) : ''), 13, Color.white(), 'med');
    return w; }

  w.backgroundColor = C.bg;
  if (fam === 'small') {
    w.setPadding(14, 15, 14, 15);
    focusBlock(w, S, 128, 30); w.addSpacer();
    if (nx) { text(w, nx.now ? WT('지금') : nx.s == null ? WT('오늘') : hm(nx.s), 12, nx.now ? C.accent : C.ink2, 'bold'); text(w, nx.title, 14, C.ink, 'semi'); placeLine(w, nx, 12); }
    else if (open[0]) { text(w, WT('할 일 ') + open.length + WT('개 남음'), 12, C.ink2, 'bold'); text(w, open[0].title, 14, C.ink, 'semi'); }
    else emptyTasks(w, S, 13);
  } else if (fam === 'medium') {
    w.setPadding(14, 16, 14, 16);
    const row = w.addStack(); row.topAlignContent();
    const left = row.addStack(); left.layoutVertically(); left.size = new Size(124, 130);
    focusBlock(left, S, 124, 30); left.addSpacer();
    if (nx) { text(left, nx.now ? WT('지금') : nx.s == null ? WT('오늘') : hm(nx.s), 12, nx.now ? C.accent : C.ink2, 'bold'); text(left, nx.title, 13, C.ink, 'semi'); placeLine(left, nx, 12); }
    row.addSpacer(18);
    const right = row.addStack(); right.layoutVertically(); right.spacing = 7;
    sectionTitle(right, WT('할 일'), S.tasks.length ? done + ' / ' + S.tasks.length : '');
    if (!open.length) emptyTasks(right, S, 14);
    open.slice(0, 4).forEach(t => taskRow(right, t, 14));
    if (open.length > 4) text(right, WT('외 ') + (open.length - 4) + WT('개'), 12, C.ink2, 'semi');
  } else {
    w.setPadding(16, 18, 16, 18);
    text(w, dateLabel(S.k), 15, C.ink, 'bold'); w.addSpacer(10);
    focusBlock(w, S, 302, 34, true); w.addSpacer(14);
    if (S.events.length) { sectionTitle(w, WT('다가오는 일정')); w.addSpacer(6); S.events.slice(0, 2).forEach(e => { eventRow(w, e, 15); w.addSpacer(5); }); w.addSpacer(10); }
    sectionTitle(w, WT('할 일'), S.tasks.length ? done + ' / ' + S.tasks.length + WT(' 완료') : ''); w.addSpacer(6);
    if (!open.length) emptyTasks(w, S, 15);
    const max = S.events.length ? 5 : 7; open.slice(0, max).forEach(t => { taskRow(w, t, 15); w.addSpacer(6); });
    if (open.length > max) text(w, WT('외 ') + (open.length - max) + WT('개'), 12, C.ink2, 'semi');
  }
  w.addSpacer();
  if (note) text(w, note, 12, C.warn, 'semi');
  return w;
}
function message(msg, fam) {
  const w = new ListWidget(); w.url = APP_URL; w.backgroundColor = C.bg; w.setPadding(14, 14, 14, 14);
  if (!/^accessory/.test(fam || '')) { text(w, 'Align', 15, C.accent, 'heavy'); w.addSpacer(6); }
  text(w, msg, 14, C.ink, 'semi', 5); return w;
}

/* ---------- 동물 위젯: 앱이 동기화해 둔 유리병 그림을 픽셀 그대로 그려요 ---------- */
const PX_ALPHA = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&*+-/:;<=>?@^_~';
function petSummary(D, now) {
  const first = id => ((D[id] && D[id].items) || []).filter(i => !i.x)[0] || null;
  const v = (D.settings && D.settings.v) || {}; WEN = v.lang === 'en';
  const P = first('petview'); if (!P) return null;
  const st = first('petstate'), d = new Date(now), hr = d.getHours() + d.getMinutes() / 60;
  const tod = hr >= 6.5 && hr < 17.5 ? 'day' : (hr >= 17.5 && hr < 19.5) || (hr >= 5 && hr < 6.5) ? 'dusk' : 'night';
  const full = (ts, h) => Math.max(0, Math.min(1, 1 - (now - (ts || 0)) / (h * 36e5)));
  const fed = full(P.fed, 36), water = full(P.water, 24);
  const run = st && st.run && (st.end == null || now < st.end), focus = run && st.focus, rest = run && !st.focus;
  const sleepy = hr >= 23.5 || hr < 6, slot = Math.floor(now / 9e5); // 15분마다 다른 행동
  const poses = P.pets.map((p, i) => {
    if (!p.st) return 'egg';
    if (p.me) {
      if (focus) return slot % 3 === 2 ? 'write0' : 'read0';
      if (rest || sleepy) return 'sleep0';
      if (fed < .15 || water < .15) return 'sad0';
      return ['stand', 'happy', 'wag0', 'read0', 'stand', 'cheer0', 'blink'][(slot + i) % 7];
    }
    if (focus) return 'wag0';
    if (rest || sleepy) return 'sleep0';
    return ['stand', 'wag0', 'stand', 'sleep0'][(slot + i * 3) % 4];
  });
  const me = P.pets.find(p => p.me) || P.pets[0], mi = P.pets.indexOf(me), mp = poses[mi];
  const L = P.labels || {}, base = mp === 'egg' ? 'egg' : mp.replace(/[01]$/, '').replace('blink', 'stand').replace('happy', 'stand');
  const status = mp === 'sad0' ? (fed < .15 ? L.hungry : L.thirsty) : (L[base] || '');
  return { P, tod, poses, me, mp, status, fed, water, slot, focus };
}
function drawGrid(ctx, rows, pal, ox, oy, sc, flip) {
  rows.forEach((r, y) => { let x = 0; while (x < r.length) { const ch = r[flip ? r.length - 1 - x : x]; if (ch === '.') { x++; continue; }
    let n = 1; while (x + n < r.length && r[flip ? r.length - 1 - x - n : x + n] === ch) n++;
    ctx.setFillColor(new Color(pal[PX_ALPHA.indexOf(ch)] || '#000000')); ctx.fillRect(new Rect((ox + x) * sc, (oy + y) * sc, n * sc, sc)); x += n; } });
}
function inJar(x, y) { if (y < 10 || y > 67 || x < 4 || x > 91) return false; const cut = [5, 3, 2, 1, 1], dy = y < 15 ? y - 10 : y > 62 ? 67 - y : 9; const c = dy < 5 ? cut[dy] : 0; return x >= 4 + c && x <= 91 - c; }
function sceneImage(S, sc) {
  const P = S.P, ctx = new DrawContext(); ctx.size = new Size(96 * sc, 72 * sc); ctx.opaque = false; ctx.respectScreenScale = false;
  drawGrid(ctx, P.bg[S.tod] || P.bg.day, P.pal, 0, 0, sc);
  if (P.wx === 'rain' || P.wx === 'snow') { // 비·눈 한 장면
    const area = P.theme === 'room' ? [12, 18, 22, 18] : [4, 10, 88, 58]; let seed = S.slot * 7 + 3; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    ctx.setFillColor(new Color(P.wx === 'snow' ? '#FFFFFF' : S.tod === 'night' ? '#6070A0' : '#D8F0FF'));
    for (let i = 0; i < (P.theme === 'room' ? 10 : 34); i++) { const x = area[0] + Math.floor(rnd() * area[2]), y = area[1] + Math.floor(rnd() * area[3]); if (P.theme !== 'room' && !inJar(x, y)) continue; ctx.fillRect(new Rect(x * sc, y * sc, sc, (P.wx === 'snow' ? 1 : 2) * sc)); }
  }
  let egg = 0, k = 0; const order = P.pets.map((p, i) => i).sort((a, b) => P.pets[a].me - P.pets[b].me);
  order.forEach((i, j) => { const p = P.pets[i], pose = S.poses[i], f = p.frames[pose] || p.frames.stand || p.frames.egg; if (!f) return;
    let x, y = p.me ? 44 : 43 - (j % 2);
    if (!p.st) { x = 12 + egg++ * 16; ctx.setFillColor(new Color('#C8A060')); ctx.fillRect(new Rect((x + 2) * sc, 58 * sc, 12 * sc, 2 * sc)); }
    else if (p.me && S.focus) x = 60; else { x = 28 + k * 15 + (S.slot % 3) * 2; if (S.focus && x > 44) x -= 30; k++; }
    drawGrid(ctx, f, P.pal, x, y, sc, p.st && !p.me && (S.slot + j) % 2 === 1);
  });
  return ctx.getImage();
}
function spriteImage(S, sc) {
  const ctx = new DrawContext(); ctx.size = new Size(16 * sc, 16 * sc); ctx.opaque = false; ctx.respectScreenScale = false;
  const f = S.me.frames[S.mp] || S.me.frames.stand || S.me.frames.egg; drawGrid(ctx, f, S.P.pal, 0, 0, sc); return ctx.getImage();
}
function petBar(st, icon, label, v, color, width) {
  const r = st.addStack(); r.centerAlignContent(); text(r, icon + ' ' + label, 11, C.ink2, 'semi'); r.addSpacer(6);
  const im = r.addImage(bar(width, 7, v, new Color(color), C.soft)); im.imageSize = new Size(width, 7); r.addSpacer(4); text(r, Math.round(v * 100) + '%', 10, C.ink2, 'med');
}
function buildPet(S, fam, note) {
  const w = new ListWidget(); w.url = APP_URL + '#pet'; w.backgroundColor = C.bg;
  if (!S) { return message(WT('Align 앱의 동물 탭에서 동물 친구를 데려오면 여기에 보여요.'), fam); }
  const me = S.me, name = me.name, head = 'Lv ' + me.lv + ' ' + name;
  w.refreshAfterDate = new Date(Date.now() + 15 * 6e4);
  if (fam === 'accessoryInline') { text(w, '🐾 ' + name + ' · ' + S.status, 12, C.ink, 'semi'); return w; }
  if (fam === 'accessoryCircular') { const im = w.addImage(spriteImage(S, 6)); im.imageSize = new Size(52, 52); im.centerAlignImage(); return w; }
  if (fam === 'accessoryRectangular') { const r = w.addStack(); r.centerAlignContent(); const im = r.addImage(spriteImage(S, 6)); im.imageSize = new Size(44, 44); r.addSpacer(6);
    const c = r.addStack(); c.layoutVertically(); text(c, head, 13, C.ink, 'heavy'); text(c, S.status, 12, C.ink, 'semi'); text(c, me.stage, 11, C.ink2, 'med'); return w; }
  if (fam === 'small') { w.setPadding(8, 8, 8, 8); const im = w.addImage(sceneImage(S, 5)); im.imageSize = new Size(140, 105); im.centerAlignImage(); w.addSpacer(4);
    text(w, head, 13, C.ink, 'heavy'); text(w, S.status, 11, C.ink2, 'semi'); if (note) text(w, note, 10, C.warn, 'semi'); return w; }
  if (fam === 'medium') { w.setPadding(10, 10, 10, 12); const r = w.addStack(); r.centerAlignContent();
    const im = r.addImage(sceneImage(S, 6)); im.imageSize = new Size(180, 135); r.addSpacer(10);
    const c = r.addStack(); c.layoutVertically(); text(c, head, 16, C.ink, 'heavy'); text(c, (me.sp && me.sp !== name ? me.sp + ' · ' : '') + me.stage, 12, C.ink2, 'semi'); c.addSpacer(4);
    text(c, S.status, 14, C.accent, 'bold'); c.addSpacer(8);
    if (me.st) { petBar(c, '🍚', '', S.fed, '#F09838', 70); c.addSpacer(3); petBar(c, '💧', '', S.water, '#58A8F0', 70); }
    if (note) { c.addSpacer(4); text(c, note, 10, C.warn, 'semi'); } return w; }
  w.setPadding(14, 14, 14, 14); text(w, head, 18, C.ink, 'heavy'); text(w, (me.sp && me.sp !== name ? me.sp + ' · ' : '') + me.stage + ' · ' + S.status, 13, C.ink2, 'semi'); w.addSpacer(8);
  const im = w.addImage(sceneImage(S, 7)); im.imageSize = new Size(300, 225); im.centerAlignImage(); w.addSpacer(8);
  if (me.st) { petBar(w, '🍚', S.P.labels.full || '', S.fed, '#F09838', 150); w.addSpacer(4); petBar(w, '💧', S.P.labels.water || '', S.water, '#58A8F0', 150); }
  if (S.P.pets.length > 1) { w.addSpacer(6); text(w, S.P.pets.filter(p => !p.me).map(p => p.name).join(' · '), 12, C.ink2, 'med'); }
  if (note) text(w, note, 11, C.warn, 'semi'); return w;
}

/* ---------- 실행 ---------- */
const fm = FileManager.local(), cacheP = fm.joinPath(fm.documentsDirectory(), 'align-widget-cache.json'), cacheP2 = fm.joinPath(fm.documentsDirectory(), 'align-widget-pet.json');
async function fetchSummary() {
  if (MODE === 'pet') { const D = await loadDocs(['settings', 'petview', 'petstate']); try { fm.writeString(cacheP2, JSON.stringify(D)); } catch (e) {} return petSummary(D, Date.now()); }
  const now = Date.now(), d0 = new Date(now), months = new Set();
  [-1, 0, 1].forEach(o => months.add(keyOf(new Date(now + o * 864e5)).slice(0, 7))); // 하루 시작 시각 때문에 걸치는 달까지
  const ids = ['settings', 'subjects', 'cats', 'repeats', 'schedule', 'schedx', 'schedbrk'];
  months.forEach(m => ids.push('tasks-' + m, 'log-' + m, 'cal-' + m));
  const D = await loadDocs(ids), S = summarize(D, now);
  try { fm.writeString(cacheP, JSON.stringify(D)); } catch (e) {}
  return S;
}
async function loginFlow() {
  const a = new Alert(); a.title = WT('Align 로그인');
  a.message = WT('Align 앱 설정 → 기기 간 동기화에서 쓰는 이메일과 비밀번호를 입력하세요. 비밀번호는 저장하지 않아요.');
  a.addTextField(WT('이메일'), Keychain.contains(KC_EMAIL) ? Keychain.get(KC_EMAIL) : ''); a.addSecureTextField(WT('비밀번호'), '');
  a.addAction(WT('로그인')); a.addCancelAction(WT('취소'));
  if (await a.present() === -1) return false;
  try { await signIn(a.textFieldValue(0).trim(), a.textFieldValue(1)); return true; }
  catch (e) { const b = new Alert(); b.title = WT('로그인하지 못했어요'); b.message = e.message; b.addAction(WT('확인')); await b.present(); return false; }
}

const fam = config.widgetFamily || 'medium';
// 위젯 편집 → Parameter에 '일정'이라고 적으면 오늘 일정만 보여 주는 종류가 됨
const MODE = (() => { const p = String((typeof args !== 'undefined' && args && args.widgetParameter) || '').trim().toLowerCase(); return /일정|schedule|event/.test(p) ? 'events' : /동물|pet|펫/.test(p) ? 'pet' : ''; })();
const loggedIn = () => Keychain.contains(KC_TOKEN) && Keychain.contains(KC_UID);
if (config.runsInWidget) {
  let w;
  if (!loggedIn()) w = message(WT('Scriptable 앱에서 이 스크립트를 한 번 실행해 로그인해 주세요.'), fam);
  else {
    try { w = build(await fetchSummary(), fam); }
    catch (e) {
      let S = null; try { if (MODE === 'pet') { if (fm.fileExists(cacheP2)) S = petSummary(JSON.parse(fm.readString(cacheP2)), Date.now()); } else if (fm.fileExists(cacheP)) S = summarize(JSON.parse(fm.readString(cacheP)), Date.now()); } catch (_) {}
      w = S ? build(S, fam, e.relogin ? WT('다시 로그인이 필요해요') : WT('인터넷에 연결되면 새로 고쳐요')) : message(e.relogin ? WT('Scriptable 앱에서 이 스크립트를 실행해 다시 로그인해 주세요.') : WT('기록을 불러오지 못했어요. 인터넷 연결을 확인해 주세요.'), fam);
    }
  }
  Script.setWidget(w);
} else {
  if (!loggedIn() && !(await loginFlow())) { Script.complete(); }
  else {
    const m = new Alert(); m.title = WT('Align 위젯');
    m.message = Keychain.get(KC_EMAIL) + WT(' 계정으로 연결돼 있어요. 홈 화면을 길게 눌러 Scriptable 위젯을 추가하고, 위젯을 길게 눌러 "위젯 편집" → Script를 이 스크립트로 고르세요. 오늘 일정만 보고 싶으면 Parameter에 "일정", 동물을 보고 싶으면 "동물"이라고 적으세요.');
    [WT('작게 미리보기'), WT('중간 미리보기'), WT('크게 미리보기'), WT('동물 미리보기')].forEach(x => m.addAction(x)); m.addDestructiveAction(WT('로그아웃')); m.addCancelAction(WT('닫기'));
    const i = await m.present();
    if (i === 3) { let w; try { const D = await loadDocs(['settings', 'petview', 'petstate']); w = buildPet(petSummary(D, Date.now()), 'medium'); } catch (e) { w = message(e.message, 'medium'); } await w.presentMedium(); }
    else if (i === 4) { [KC_TOKEN, KC_UID].forEach(x => { if (Keychain.contains(x)) Keychain.remove(x); }); try { fm.remove(cacheP); } catch (e) {} }
    else if (i >= 0 && i <= 2) {
      let w; try { const S = await fetchSummary(); w = build(S, ['small', 'medium', 'large'][i]); } catch (e) { w = message(e.message, 'medium'); }
      await [() => w.presentSmall(), () => w.presentMedium(), () => w.presentLarge()][i]();
    }
  }
}
Script.complete();
