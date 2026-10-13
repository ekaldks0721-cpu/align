// 사용법: node render.mjs <art 파일.mjs> <출력.png> [id]   — 그림을 그려서 한 장에 모아 보여 주고 문제를 알려 줘요
// 엽서는 왼쪽 아래(동물 자리)에 회색 반투명 상자로 동물이 설 자리를 보여 줘요. 그 자리에는 중요한 것을 그리지 마세요
import {chromium} from '/opt/node-tools/node_modules/playwright/index.mjs';
import {draw,sizeOf} from './lib.mjs';
import path from 'path';
const [,,src,out,only]=process.argv; const mod=(await import(path.resolve(src)+'?t='+Date.now())).default;
const ids=Object.keys(mod).filter(k=>!only||k===only), bad=[];
const cells=ids.map(id=>{let G; try{G=draw(id,mod[id])}catch(e){bad.push(id+': '+e.message); return ''} const [W,H]=sizeOf(id), sc=only?14:(W===32?5:5);
  let r='', n=0; const cols=new Set(); G.forEach((row,y)=>row.forEach((c,x)=>{if(!c) return; n++; cols.add(c); if(!/^#[0-9a-fA-F]{6}$/.test(c)) bad.push(id+' bad color '+c); r+=`<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${c}"/>`}));
  if(W===64&&n<W*H*.9) bad.push(id+` postcard should fill the whole scene (${n}/${W*H})`); if(W===32&&n<120) bad.push(id+' souvenir looks empty');
  if(cols.size>40) bad.push(id+' too many colors '+cols.size);
  const pet=W===64?'<rect x="6" y="20" width="16" height="18" fill="rgba(80,80,80,.35)" stroke="#fff" stroke-width=".3"/>':'';
  return `<div style="display:inline-block;margin:5px;text-align:center;font:11px sans-serif;vertical-align:top"><svg shape-rendering="crispEdges" viewBox="0 0 ${W} ${H}" width="${W*sc}" height="${H*sc}" style="background:repeating-conic-gradient(#ddd 0 25%,#fff 0 50%) 0 0/10px 10px">${r}${pet}</svg><div>${id}</div></div>`});
const b=await chromium.launch(); const pg=await b.newPage({viewport:{width:1500,height:900}});
await pg.setContent('<body style="margin:6px;background:#fff">'+cells.join('')+'</body>'); await pg.screenshot({path:out,fullPage:true}); await b.close();
console.log(ids.length+' drawings', bad.length?'PROBLEMS:\n'+bad.join('\n'):'ok');
