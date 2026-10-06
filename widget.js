// ALIGN_WIDGET — Scriptable 앱에서 돌아가는 Align 위젯.
// 아이폰 Scriptable에 붙여넣는 짧은 "불러오기" 코드가 이 파일을 받아 실행해요. (앱 설정 → 위젯에서 복사)
// 기록은 Firebase(Firestore)에서 직접 읽어요. 로그인은 Scriptable 앱에서 한 번만 하면 되고,
// 비밀번호는 저장하지 않고 로그인 토큰만 아이폰 키체인에 보관해요.

const APP_URL = 'https://ekaldks0721-cpu.github.io/align/';
const FB = { apiKey: 'AIzaSyADvQk2inabPw--ixLZuvYtzS2j72lDwWQ', projectId: 'align-2c655' };
const KC_TOKEN = 'align.widget.refresh', KC_UID = 'align.widget.uid', KC_EMAIL = 'align.widget.email';
const WD = ['월', '화', '수', '목', '금', '토', '일'];
const PALETTE = ['#F2CB3D', '#F08FB0', '#6FCFAB', '#6FB6EE', '#AE98EC', '#F39B52', '#A9D34E', '#9AA7BA'];

/* ---------- 날짜 (앱과 같은 규칙: '하루가 시작되는 시각' 전은 전날) ---------- */
const pad = n => String(n).padStart(2, '0');
const keyOf = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
const parts = k => k.split('-').map(Number);
const wdOf = k => { const [y, m, d] = parts(k); return (new Date(y, m - 1, d).getDay() + 6) % 7; };
const hm = min => pad(Math.floor(min / 60) % 24) + ':' + pad(min % 60);
function fmtDur(sec) { const m = Math.round(sec / 60), h = Math.floor(m / 60), mm = m % 60; return h ? (mm ? h + '시간 ' + mm + '분' : h + '시간') : mm + '분'; }

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
    throw new Error(/INVALID|PASSWORD|EMAIL_NOT_FOUND/.test(m) ? '이메일이나 비밀번호가 맞지 않아요' : /TOO_MANY/.test(m) ? '시도가 너무 많아요. 잠시 뒤에 다시 해 주세요' : '로그인하지 못했어요 (' + m + ')');
  }
  Keychain.set(KC_TOKEN, j.refreshToken); Keychain.set(KC_UID, j.localId); Keychain.set(KC_EMAIL, email);
}
async function idToken() {
  const j = await postJSON('https://securetoken.googleapis.com/v1/token?key=' + FB.apiKey,
    'grant_type=refresh_token&refresh_token=' + encodeURIComponent(Keychain.get(KC_TOKEN)), true);
  if (!j || !j.id_token) { const e = new Error('다시 로그인해 주세요'); e.relogin = true; throw e; }
  if (j.refresh_token) Keychain.set(KC_TOKEN, j.refresh_token);
  return j.id_token;
}
async function loadDocs(ids) { // 문서 여러 개를 한 번에. 앱은 문서를 {j: JSON 글자}로 저장해 둠
  const tok = await idToken(), uid = Keychain.get(KC_UID);
  const base = 'projects/' + FB.projectId + '/databases/(default)/documents';
  const r = new Request('https://firestore.googleapis.com/v1/' + base + ':batchGet'); r.method = 'POST';
  r.headers = { 'Content-Type': 'application/json', Authorization: 'Bearer ' + tok };
  r.body = JSON.stringify({ documents: ids.map(id => base + '/users/' + uid + '/docs/' + id) });
  const res = await r.loadJSON(); if (!Array.isArray(res)) throw new Error('기록을 읽지 못했어요');
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

  // 하루 목표: 전체 목표가 있으면 그것, 없으면 목표를 둔 첫 카테고리
  const goals = v.goals || { [v.goalCat || '']: { d: v.dailyGoal != null ? v.dailyGoal : 240 } };
  const gk = [''].concat(cats.filter(c => !c.arch).map(c => c.id)).find(c => goals[c] && goals[c].d);
  const goal = gk == null ? null : { min: goals[gk].d, name: gk ? (cat(gk) || {}).name : '', sec: gk ? byCat[gk] || 0 : total };

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
    return { title: t.title, done: !!t.done, color: s ? s.color : PALETTE[7], cat: c ? c.name : '항목 없음', dueT: t.due === k ? t.dueT : null }; });

  // 일정: 캘린더 + 시간표 고정 일정(그날 쉬기·시간 바꾸기·기간 쉬기 반영)
  const nowMin = Math.floor((now - new Date(y, mo - 1, d).getTime()) / 6e4), evs = [];
  items('cal-' + k.slice(0, 7)).filter(e => e.date === k).forEach(e => evs.push({ title: e.title, s: e.s, e: e.e, color: e.color || PALETTE[3] }));
  const w = wdOf(k), xs = {}; items('schedx').filter(x => x.date === k).forEach(x => xs[x.ev] = x);
  const brks = items('schedbrk').filter(b => b.from <= k && k <= b.to);
  items('schedule').filter(e => (!e.from || e.from <= k) && (!e.to || e.to >= k) && e.day === w).forEach(e => {
    const x = xs[e.id], over = x && (x.on || x.s != null), b = over ? null : brks.find(z => z.ev === '*' || z.ev === e.id);
    if ((x && x.skip) || b) return;
    evs.push({ title: e.title, s: x && x.s != null ? x.s : e.s, e: x && x.s != null ? x.e : e.e, color: e.color || PALETTE[3] }); });
  const upcoming = evs.filter(e => e.s == null || e.e > nowMin).sort((a, b) => (a.s == null ? -1 : a.s) - (b.s == null ? -1 : b.s))
    .map(e => Object.assign(e, { now: e.s != null && e.s <= nowMin, when: e.s == null ? '종일' : hm(e.s) }));

  return { k, total, goal, tasks: taskOut, events: upcoming, at: now };
}

/* ---------- 그리기 ---------- */
const C = { ink: Color.dynamic(new Color('#0F1E3D'), new Color('#E8EEFB')), ink2: Color.dynamic(new Color('#5B6C8F'), new Color('#93A4C6')),
  bg: Color.dynamic(new Color('#F3F6FC'), new Color('#0F1830')), accent: Color.dynamic(new Color('#2B5BE0'), new Color('#7CA4FF')),
  soft: Color.dynamic(new Color('#DCE5F8'), new Color('#22304F')), warn: Color.dynamic(new Color('#D2453A'), new Color('#FF8A7A')) };
function bar(width, height, ratio, fill, track) {
  const c = new DrawContext(); c.size = new Size(width, height); c.opaque = false; c.respectScreenScale = true;
  const p = new Path(); p.addRoundedRect(new Rect(0, 0, width, height), height / 2, height / 2); c.addPath(p); c.setFillColor(track); c.fillPath();
  if (ratio > 0) { const q = new Path(); q.addRoundedRect(new Rect(0, 0, Math.max(height, width * Math.min(1, ratio)), height), height / 2, height / 2); c.addPath(q); c.setFillColor(fill); c.fillPath(); }
  return c.getImage();
}
function text(stack, s, size, color, weight, lines) {
  const t = stack.addText(s); t.font = weight === 'bold' ? Font.boldSystemFont(size) : weight === 'semi' ? Font.semiboldSystemFont(size) : weight === 'med' ? Font.mediumSystemFont(size) : Font.systemFont(size);
  t.textColor = color; t.lineLimit = lines || 1; t.minimumScaleFactor = .75; return t;
}
function dateLabel(k) { const [, m, d] = parts(k); return m + '월 ' + d + '일 ' + WD[wdOf(k)]; }
function header(w, S, fam) {
  const h = w.addStack(); h.centerAlignContent();
  text(h, 'Align', fam === 'small' ? 12 : 13, C.accent, 'bold'); h.addSpacer();
  text(h, dateLabel(S.k), fam === 'small' ? 11 : 12, C.ink2, 'med');
}
function focusBlock(st, S, width, big) {
  text(st, S.goal && S.goal.name ? S.goal.name + ' 집중' : '오늘 집중', 11, C.ink2, 'med');
  st.addSpacer(1);
  text(st, S.goal ? fmtDur(S.goal.sec) : fmtDur(S.total), big ? 26 : 22, C.ink, 'bold');
  if (S.goal) { st.addSpacer(5); const im = st.addImage(bar(width, 7, S.goal.sec / 60 / S.goal.min, C.accent, C.soft)); im.imageSize = new Size(width, 7);
    st.addSpacer(3); const pct = Math.round(S.goal.sec / 60 / S.goal.min * 100);
    text(st, '목표 ' + fmtDur(S.goal.min * 60) + ' · ' + pct + '%', 10, pct >= 100 ? C.accent : C.ink2, 'med'); }
}
function taskLines(st, S, max, withCats) {
  const open = S.tasks.filter(t => !t.done), done = S.tasks.length - open.length;
  if (!S.tasks.length) { text(st, '오늘 할 일이 없어요', 12, C.ink2); return; }
  if (!open.length) { text(st, '오늘 할 일을 다 했어요 🎉', 12, C.accent, 'semi'); return; }
  let lastCat = null, n = 0;
  for (const t of open) { if (n >= max) break;
    if (withCats && t.cat !== lastCat) { if (lastCat !== null) st.addSpacer(2); text(st, t.cat, 10, C.ink2, 'semi'); lastCat = t.cat; }
    const row = st.addStack(); row.centerAlignContent(); row.spacing = 5;
    const dot = row.addText('●'); dot.font = Font.systemFont(7); dot.textColor = new Color(t.color);
    text(row, t.title, 12, C.ink, 'med'); if (t.dueT != null) { row.addSpacer(); text(row, hm(t.dueT) + '까지', 10, C.warn, 'med'); }
    n++; st.addSpacer(2); }
  const rest = open.length - n; if (rest > 0 || done) text(st, (rest > 0 ? '외 ' + rest + '개 · ' : '') + '완료 ' + done + ' / ' + S.tasks.length, 10, C.ink2);
}
function eventLines(st, S, max) {
  S.events.slice(0, max).forEach(e => { const row = st.addStack(); row.centerAlignContent(); row.spacing = 6;
    text(row, e.now ? '지금' : e.when, 11, e.now ? C.accent : C.ink2, 'semi'); text(row, e.title, 12, C.ink, 'med'); st.addSpacer(2); });
}
function build(S, fam, note) {
  const w = new ListWidget(); w.url = APP_URL; w.refreshAfterDate = new Date(Date.now() + 15 * 60e3);
  // 잠금 화면: 다음 일정을 맨 앞에 (지금 하고 있는 일정이면 '지금')
  const nx = S.events[0], nxLabel = nx ? (nx.now ? '지금 ' : nx.s == null ? '오늘 ' : hm(nx.s) + ' ') + nx.title : '';
  const focus = fmtDur(S.goal ? S.goal.sec : S.total), open = S.tasks.filter(t => !t.done);
  if (fam === 'accessoryInline') { w.addText(nx ? nxLabel + ' · ' + focus : focus + ' · 할 일 ' + open.length + '개'); return w; }
  if (fam === 'accessoryCircular') {
    const top = w.addText(nx ? (nx.now ? '지금' : '다음') : '집중'); top.font = Font.mediumSystemFont(10); top.centerAlignText();
    const t = w.addText(nx ? (nx.now ? nx.title : nx.s == null ? '종일' : hm(nx.s)) : focus.replace('시간 ', 'h').replace('시간', 'h').replace('분', 'm'));
    t.font = Font.boldSystemFont(13); t.minimumScaleFactor = .5; t.lineLimit = 1; t.centerAlignText(); return w; }
  if (fam === 'accessoryRectangular') {
    if (nx) text(w, nxLabel, 13, Color.white(), 'bold');
    text(w, '집중 ' + focus + (S.goal ? ' / ' + fmtDur(S.goal.min * 60) : ''), nx ? 12 : 13, Color.white(), nx ? 'med' : 'semi');
    open.slice(0, nx ? 1 : 2).forEach(t => text(w, '· ' + t.title, 12, Color.white()));
    return w; }
  w.backgroundColor = C.bg; const P = fam === 'small' ? 13 : 15; w.setPadding(P, P, P, P);
  header(w, S, fam); w.addSpacer(fam === 'small' ? 8 : 10);
  if (fam === 'small') {
    focusBlock(w, S, 128, true); w.addSpacer();
    const open = S.tasks.filter(t => !t.done); text(w, S.tasks.length ? '할 일 ' + (S.tasks.length - open.length) + ' / ' + S.tasks.length : '할 일 없음', 11, C.ink2, 'med');
    if (open[0]) text(w, open[0].title, 12, C.ink, 'semi');
  } else if (fam === 'medium') {
    const row = w.addStack(); row.topAlignContent();
    const left = row.addStack(); left.layoutVertically(); left.size = new Size(118, 0); focusBlock(left, S, 112, false);
    if (S.events[0]) { left.addSpacer(); const e = S.events[0]; text(left, (e.now ? '지금 ' : e.when + ' ') + e.title, 10, e.now ? C.accent : C.ink2, 'semi', 2); }
    row.addSpacer(12); const right = row.addStack(); right.layoutVertically(); taskLines(right, S, 4, false);
  } else {
    focusBlock(w, S, 300, true); w.addSpacer(12);
    if (S.events.length) { text(w, '다가오는 일정', 11, C.accent, 'bold'); w.addSpacer(3); eventLines(w, S, 3); w.addSpacer(8); }
    text(w, '할 일', 11, C.accent, 'bold'); w.addSpacer(3); taskLines(w, S, S.events.length ? 6 : 9, true);
  }
  if (note) { w.addSpacer(); text(w, note, 9, C.ink2); } else w.addSpacer();
  return w;
}
function message(msg, fam) {
  const w = new ListWidget(); w.url = APP_URL; w.backgroundColor = C.bg; w.setPadding(14, 14, 14, 14);
  if (!/^accessory/.test(fam || '')) { text(w, 'Align', 13, C.accent, 'bold'); w.addSpacer(6); }
  text(w, msg, 12, C.ink, 'med', 4); return w;
}

/* ---------- 실행 ---------- */
const fm = FileManager.local(), cacheP = fm.joinPath(fm.documentsDirectory(), 'align-widget-cache.json');
async function fetchSummary() {
  const now = Date.now(), d0 = new Date(now), months = new Set();
  [-1, 0, 1].forEach(o => months.add(keyOf(new Date(now + o * 864e5)).slice(0, 7))); // 하루 시작 시각 때문에 걸치는 달까지
  const ids = ['settings', 'subjects', 'cats', 'repeats', 'schedule', 'schedx', 'schedbrk'];
  months.forEach(m => ids.push('tasks-' + m, 'log-' + m, 'cal-' + m));
  const D = await loadDocs(ids), S = summarize(D, now);
  try { fm.writeString(cacheP, JSON.stringify(D)); } catch (e) {}
  return S;
}
async function loginFlow() {
  const a = new Alert(); a.title = 'Align 로그인';
  a.message = 'Align 앱 설정 → 기기 간 동기화에서 쓰는 이메일과 비밀번호를 입력하세요. 비밀번호는 저장하지 않아요.';
  a.addTextField('이메일', Keychain.contains(KC_EMAIL) ? Keychain.get(KC_EMAIL) : ''); a.addSecureTextField('비밀번호', '');
  a.addAction('로그인'); a.addCancelAction('취소');
  if (await a.present() === -1) return false;
  try { await signIn(a.textFieldValue(0).trim(), a.textFieldValue(1)); return true; }
  catch (e) { const b = new Alert(); b.title = '로그인하지 못했어요'; b.message = e.message; b.addAction('확인'); await b.present(); return false; }
}

const fam = config.widgetFamily || 'medium';
const loggedIn = () => Keychain.contains(KC_TOKEN) && Keychain.contains(KC_UID);
if (config.runsInWidget) {
  let w;
  if (!loggedIn()) w = message('Scriptable 앱에서 이 스크립트를 한 번 실행해 로그인해 주세요.', fam);
  else {
    try { w = build(await fetchSummary(), fam); }
    catch (e) {
      let S = null; try { if (fm.fileExists(cacheP)) S = summarize(JSON.parse(fm.readString(cacheP)), Date.now()); } catch (_) {}
      w = S ? build(S, fam, e.relogin ? '다시 로그인이 필요해요' : '인터넷에 연결되면 새로 고쳐요') : message(e.relogin ? 'Scriptable 앱에서 이 스크립트를 실행해 다시 로그인해 주세요.' : '기록을 불러오지 못했어요. 인터넷 연결을 확인해 주세요.', fam);
    }
  }
  Script.setWidget(w);
} else {
  if (!loggedIn() && !(await loginFlow())) { Script.complete(); }
  else {
    const m = new Alert(); m.title = 'Align 위젯';
    m.message = Keychain.get(KC_EMAIL) + ' 계정으로 연결돼 있어요. 홈 화면을 길게 눌러 Scriptable 위젯을 추가하고, 위젯을 길게 눌러 "위젯 편집" → Script를 이 스크립트로 고르세요.';
    ['작게 미리보기', '중간 미리보기', '크게 미리보기'].forEach(x => m.addAction(x)); m.addDestructiveAction('로그아웃'); m.addCancelAction('닫기');
    const i = await m.present();
    if (i === 3) { [KC_TOKEN, KC_UID].forEach(x => { if (Keychain.contains(x)) Keychain.remove(x); }); try { fm.remove(cacheP); } catch (e) {} }
    else if (i >= 0 && i <= 2) {
      let w; try { const S = await fetchSummary(); w = build(S, ['small', 'medium', 'large'][i]); } catch (e) { w = message(e.message, 'medium'); }
      await [() => w.presentSmall(), () => w.presentMedium(), () => w.presentLarge()][i]();
    }
  }
}
Script.complete();
