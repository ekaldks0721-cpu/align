// 모든 art_*.mjs를 그려서 /home/user/align/trip-art.js로 묶어요. 한 그림 = "가로,세로|색1,색2,...|점들" (점: 색 글자 + 반복 수, '.'은 빈칸)
import {draw,sizeOf} from './lib.mjs'; import fs from 'fs'; import path from 'path';
const AL='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+-/:;<=>?@[]^_{}~';
const out={}; const files=fs.readdirSync('.').filter(f=>/^art_(\d|any|pk\d|hw|n\d|ac\d|xm\d)\.mjs$/.test(f)); let n=0; const bad=[];
for(const f of files){const mod=(await import(path.resolve(f))).default; for(const id of Object.keys(mod)){let G; try{G=draw(id,mod[id])}catch(e){bad.push(id+' '+e.message); continue}
  const [W,H]=sizeOf(id), pal=[]; if(W===64) for(let y=0;y<H;y++) for(let x=0;x<W;x++) if(!G[y][x]) G[y][x]=(x&&G[y][x-1])||(y&&G[y-1][x])||G[y][x+1]||'#FFFFFF'; /* 엽서 풍경에 빈 점이 없게 */ const idx=c=>{if(!c) return '.'; let i=pal.indexOf(c.toUpperCase()); if(i<0){i=pal.length; pal.push(c.toUpperCase())} if(i>=AL.length) throw new Error('too many colors'); return AL[i]};
  let flat=''; try{for(const row of G) for(const c of row) flat+=idx(c)}catch(e){bad.push(id+' '+e.message); continue}
  let rle=''; for(let i=0;i<flat.length;){let j=i; while(j<flat.length&&flat[j]===flat[i]) j++; const k=j-i; rle+=flat[i]+(k>1?k:''); i=j}
  out[id]=W+','+H+'|'+pal.map(c=>c.slice(1)).join(',')+'|'+rle; n++}}
fs.writeFileSync(new URL('../../trip-art.js',import.meta.url),'// 펫 탐험 기념품(32×32)·엽서 풍경(64×40) 도트 그림. tools/trip-art의 art_*.mjs에서 만들어요 (node build.mjs)\nwindow.TRIP_ART='+JSON.stringify(out)+';\n');
console.log(n+' drawings from '+files.length+' files', bad.length?'PROBLEMS: '+bad.join('; '):'', (fs.statSync(new URL('../../trip-art.js',import.meta.url)).size/1024).toFixed(0)+' KB');
