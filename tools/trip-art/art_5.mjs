// art_5: frog, squirrel, yongbok, finn, kuromi, andrew, strange, momonga, maggie, ankylo, bokgil
const A={};
const OL='#2A2238';
// helpers
const cloud=(d,x,y,w,c,s)=>{d.ell(x,y,w,Math.max(1,w/3),c); d.ell(x-w/3,y+1,w/2,Math.max(1,w/4),c); d.ell(x+w/3,y,w/2.2,Math.max(1,w/3.5),c); if(s) d.hline(Math.round(x-w*0.7),Math.round(x+w*0.7),Math.round(y+w/3),s)};
const stars=(d,n,y0,y1,cs)=>{for(let i=0;i<n;i++) d.px(d.ri(0,d.W-1),d.ri(y0,y1),cs[i%cs.length])};
const twinkle=(d,x,y,c,c2)=>{d.px(x,y,c2||'#FFFFFF'); d.px(x-1,y,c); d.px(x+1,y,c); d.px(x,y-1,c); d.px(x,y+1,c)};
const sparkle=(d,x,y,c)=>d.stamp(x-2,y-2,['..a..','..a..','aabaa','..a..','..a..'],{a:c,b:'#FFFFFF'});
const note=(d,x,y,c)=>{d.rect(x,y+3,2,2,c); d.vline(x+2,y,y+4,c); d.px(x+3,y,c); d.px(x+4,y+1,c)};
const heart=(d,x,y,c)=>d.stamp(x,y,['a.a','aaa','.a.'],{a:c});
const bigheart=(d,x,y,c,h)=>d.stamp(x,y,['.aa.aa.','aaaaaaa','aaaaaaa','.aaaaa.','..aaa..','...a...'],{a:c}),bh=(d,x,y,c,h)=>{bigheart(d,x,y,c); if(h) d.px(x+1,y+1,h)};
// ===== FROG =====
A['frog:s0']=d=>{ // lily pad, damp, with tiny bud
  const G1='#4FB548',G2='#3A9440',G3='#7FD660',V='#2E7A36',W='#CFF4FF',W2='#86D2F0';
  d.ell(16,18,14,10,G2); d.ell(16,17,14,9,G1);
  d.poly([[16,17],[11,30],[18,30]],null); for(let y=17;y<=29;y++)for(let x=0;x<32;x++){ if(x>=16-Math.round((y-17)*0.42)&&x<=16+Math.round((y-17)*0.12)) d.clear(x,y);} 
  // veins
  for(const [x,y] of [[4,14],[8,9],[16,8],[24,9],[28,14],[29,21],[24,26],[6,22]]) d.line(16,17,x,y,V);
  d.ell(10,12,4,1,G3); d.hline(20,24,10,G3); d.px(25,11,G3);
  // droplets
  d.stamp(7,15,['.w.','wWw','.w.'].map(r=>r),{w:W2,W:W}); d.stamp(21,20,['ww','wW'],{w:W2,W:W}); d.px(12,22,W); d.px(26,15,W);
  // bud
  d.ell(23,8,2,3,'#F7A8C8'); d.px(22,6,'#FFD8E8'); d.px(23,5,'#F7A8C8'); d.vline(23,11,13,'#3A9440');
  d.outline(OL);
  // drip below
  d.px(14,31,W2); d.px(20,31,W2);
};
A['frog:s1']=d=>{ // frog umbrella
  const G1='#6CD050',G2='#48A840',G3='#A8EC80',W='#FFFFFF',K='#1E2A1E',P='#F6A0B0',H='#C88040',H2='#8A5428',R='#7EC8F0';
  d.circ(16,16,13,G1); for(let y=16;y<32;y++)for(let x=0;x<32;x++) d.clear(x,y);
  // ribs shading panels
  for(let x=3;x<=29;x++){const p=Math.floor((x-3)/9); if(p===1) for(let y=3;y<16;y++) if(d.get(x,y)) d.px(x,y,G2);} 
  for(let x=12;x<=20;x++) for(let y=3;y<16;y++) if(d.get(x,y)) d.px(x,y,G1);
  for(const x of [11,21]) d.line(16,3,x,15,G2);
  d.line(16,3,4,15,G2); d.line(16,3,28,15,G2);
  // scalloped edge
  for(let x=3;x<=29;x+=1){ const k=(x-3)%5; if(k===0||k===4) d.px(x,16,null); else d.px(x,16,G2);} 
  for(let x=3;x<=29;x+=5) d.clear(x,16);
  d.ell(10,6,4,1,G3); d.hline(7,9,8,G3);
  // frog eyes on top
  d.circ(10,5,3,G1); d.circ(22,5,3,G1); d.circ(10,4,2,W); d.circ(22,4,2,W); d.rect(10,4,2,2,K); d.rect(22,4,2,2,K);
  d.px(5,11,P); d.px(6,11,P); d.px(26,11,P); d.px(27,11,P); // cheeks
  d.line(13,12,16,13,K); d.line(16,13,19,12,K);
  // shaft & handle
  d.vline(16,17,26,'#5A5A6A'); d.vline(16,26,28,H); d.vline(17,26,28,H2); d.rect(16,28,2,1,H); d.px(15,29,H); d.px(14,29,H); d.px(13,28,H); d.px(13,27,H2);
  d.px(16,1,G2); d.px(16,2,G2);
  d.outline(OL);
  for(const [x,y] of [[2,20],[6,24],[25,21],[29,26],[3,28],[22,29]]){d.px(x,y,R); d.px(x,y+1,R); d.px(x,y-1,'#CFEFFF')}
};
A['frog:s2']=d=>{ // frog prince crown with kiss
  const Y1='#FFD34A',Y2='#E8A820',Y3='#FFF0A0',Y4='#B87810',R='#E8404A',B='#4878E8',Gm='#40C060',V='#8A2E9A',V2='#B04ABE',L='#F07090';
  // cushion
  d.ell(16,26,13,4,V); d.ell(16,25,12,3,V2); d.px(4,28,'#F4C24A'); d.px(28,28,'#F4C24A'); d.px(3,29,'#F4C24A'); d.px(29,29,'#F4C24A');
  // crown body
  d.poly([[6,22],[6,11],[10,16],[13,8],[16,14],[19,8],[22,16],[26,11],[26,22]],Y1);
  d.rect(6,19,21,4,Y2); d.hline(6,26,19,Y3);
  for(let y=11;y<19;y++) d.px(6,y,Y2); for(let y=11;y<19;y++) d.px(26,y,Y4);
  d.line(13,9,13,17,Y3); d.line(19,9,19,17,Y2);
  // tip balls
  for(const [x,y] of [[6,10],[13,7],[19,7],[26,10]]){d.circ(x,y,1.2,Y1); d.px(x,y-1,Y3)}
  d.circ(16,12,1.5,R); d.px(16,11,'#FF9AA0');
  // gems on band
  d.rect(9,20,2,2,B); d.rect(15,20,2,2,Gm); d.rect(21,20,2,2,R); d.px(9,20,'#A8C8FF'); d.px(15,20,'#A8F0B0'); d.px(21,20,'#FFB0B0');
  // tiny frog face on crown front (it's a frog crown)
  d.stamp(13,15,['g...g','ggggg','.ggg.'],{g:'#58B848'});
  d.outline(OL);
  // kiss mark & sparkle
  d.stamp(24,2,['.ll.ll.','lLllLll','.lllll.','..lll..'],{l:L,L:'#FFB0C8'});
  sparkle(d,4,5,'#FFE070');
};
A['frog:c0']=d=>{ // playground in rain (day)
  d.grad(0,0,64,24,['#9AAFC8','#A8BCD2','#B6C8DA','#C4D4E2']);
  cloud(d,12,3,8,'#8698B2'); cloud(d,40,2,10,'#8698B2'); cloud(d,58,5,7,'#9AABC2');
  // far trees / fence
  for(let x=0;x<64;x+=5) d.ell(x+2,22,4,3,'#6E9E8A'); d.rect(0,22,64,2,'#6E9E8A');
  // ground
  d.rect(0,24,64,16,'#B89A76'); d.dither(0,24,64,2,'#A88A68','#B89A76');
  for(let i=0;i<30;i++) d.px(d.ri(0,63),d.ri(27,39),'#A88A68');
  // slide (right)
  d.vline(50,10,30,'#5C6878'); d.vline(54,10,30,'#5C6878'); for(let y=13;y<30;y+=3) d.hline(50,54,y,'#7C8898');
  d.rect(48,9,8,2,'#E8503C'); d.poly([[48,10],[50,9],[56,9],[56,11]],'#E8503C');
  d.poly([[56,10],[60,10],[64,26],[64,32],[61,32],[57,14]],'#F4B828'); d.line(57,11,63,31,'#FFD860'); d.line(56,10,61,32,'#D89418');
  d.poly([[48,7],[52,3],[56,7]],'#3CA0E0'); d.hline(48,56,7,'#2A80C0');
  // swing (center)
  d.line(28,8,25,30,'#4060A8'); d.line(28,8,31,30,'#4060A8'); d.line(42,8,39,30,'#4060A8'); d.line(42,8,45,30,'#4060A8'); d.hline(27,43,8,'#4060A8'); d.hline(27,43,7,'#5A80C8');
  d.vline(33,9,22,'#9AA0A8'); d.vline(37,9,20,'#9AA0A8'); d.line(33,22,37,20,'#E8503C'); d.line(33,23,37,21,'#C03828');
  // puddles
  const pud=(x,y,w)=>{d.ell(x,y,w,1.2,'#7A9CC0'); d.hline(x-w+1,x+w-1,y-1,'#94B4D4'); d.hline(x-w+2,x-w+4,y,'#C8DCF0'); d.px(x+2,y,'#C8DCF0')};
  pud(32,33,6); pud(48,36,5); pud(58,29,3); pud(13,38,4); pud(24,28,3);
  // rain
  for(let i=0;i<70;i++){const x=d.ri(0,66),y=d.ri(0,36); d.px(x,y,'#E8F0FA'); d.px(x-1,y+1,'#D0DCEA');}
  // splash
  d.stamp(30,30,['w...w','.w.w.'],{w:'#E8F4FF'}); d.stamp(46,33,['w..w'],{w:'#E8F4FF'});
};
A['frog:c1']=d=>{ // rainforest swamp, giant fly
  d.grad(0,0,64,26,['#1E4A30','#245A36','#2E6E3C','#3A8244','#4A9450']);
  // light shafts
  for(let y=0;y<26;y++){ d.px(30+Math.floor(y/2),y,'#5AA858'); d.px(31+Math.floor(y/2),y,'#5AA858'); d.px(44+Math.floor(y/3),y,'#4E9C50'); }
  // tree trunks
  d.rect(2,0,5,26,'#4A3424'); d.vline(3,0,25,'#5E4430'); d.rect(56,0,6,28,'#4A3424'); d.vline(57,0,27,'#6A4E36'); d.poly([[53,28],[56,20],[56,28]],'#3E2C1E'); d.poly([[62,20],[64,24],[64,28],[62,28]],'#3E2C1E');
  // canopy leaves top
  for(let x=-2;x<66;x+=7){d.ell(x,1,5,3,'#2E7A34'); d.ell(x+3,3,3,2,'#3E9440');}
  // vines
  for(const [x,l] of [[12,14],[22,9],[40,16],[50,11]]){d.vline(x,0,l,'#4CA040'); for(let y=3;y<l;y+=3) d.px(x+((y/3)%2?1:-1),y,'#7CD060');}
  // big leaves
  d.poly([[44,26],[38,16],[46,20]],'#56B04A'); d.poly([[46,26],[52,14],[50,22]],'#48A040'); d.line(44,26,40,18,'#3A8A38');
  // bank (left ground)
  d.rect(0,26,64,14,'#2F6A5C');
  d.poly([[0,24],[26,24],[30,27],[28,40],[0,40]],'#5A4A30'); d.dither(0,24,26,1,'#6E5A3A','#5A4A30'); d.hline(0,25,24,'#7A8A3A');
  for(let x=0;x<26;x+=3) d.px(x,23,'#6CAA40');
  // water
  for(let y=27;y<40;y+=3) for(let x=30+(y%2)*3;x<64;x+=7) d.hline(x,x+2,y,'#3E8270');
  // lily pads
  d.ell(40,32,4,1,'#5ABE48'); d.px(40,31,'#2F6A5C'); d.ell(54,36,5,1.4,'#5ABE48'); d.ell(48,29,2,1,'#5ABE48');
  d.ell(54,35,1,1,'#F2A0C8');
  // cattails
  for(const x of [34,36,60]){d.vline(x,18,28,'#5E9440'); d.rect(x,19,1,4,'#7A4A28'); }
  // giant fly
  d.ell(44,8,4,3,'#C8E8F8'); d.ell(51,8,4,3,'#C8E8F8'); d.ring(44,8,3,'#8AB4CC'); d.ring(51,8,3,'#8AB4CC');
  d.ell(47,12,4,3,'#2A3A40'); d.px(46,11,'#5A7A80'); d.circ(44,12,1.4,'#D03030'); d.circ(50,12,1.4,'#D03030'); d.px(44,11,'#FF8080'); d.px(50,11,'#FF8080');
  for(const [a,b] of [[44,15],[47,16],[50,15]]) d.line(a,b,a-1,b+2,'#2A3A40');
  d.stamp(36,7,['a...','.a..','a...'],{a:'#E0F0D0'}); // buzz lines
  // fireflies/spores
  for(const [x,y] of [[18,10],[26,6],[9,16],[36,20]]) d.px(x,y,'#D8F060');
};
A['frog:c2']=d=>{ // moonlit frog chorus
  d.grad(0,0,64,24,['#141A3C','#1C2450','#243062','#2E3C74']);
  stars(d,26,0,16,['#FFFFFF','#B8C8FF','#FFF0A0']);
  d.circ(48,9,6,'#FFF4C8'); d.circ(48,9,5,'#FFFBE4'); d.px(46,7,'#F0E2A8'); d.px(50,11,'#F0E2A8'); d.px(47,12,'#F0E2A8');
  // reeds silhouettes
  for(const x of [1,4,60,62]){d.vline(x,14,24,'#16233A'); d.rect(x,14,1,3,'#2A2030')}
  // far bank
  d.rect(0,22,64,2,'#1A2C2E'); for(let x=0;x<64;x+=6) d.ell(x+3,22,3,1,'#1A2C2E');
  // pond
  d.rect(0,24,64,16,'#1A3550'); for(let y=26;y<40;y+=2) for(let x=(y*3)%7;x<64;x+=9) d.hline(x,x+2,y,'#24486A');
  // moon reflection
  for(let y=25;y<38;y+=2){const w=4-Math.floor((y-25)/4); const o=(y%4)?1:-1; d.hline(48-w+o,48+w+o,y,'#C8C090'); d.px(48+o,y,'#FFF4C8');}
  // left mossy rock stage for pet
  d.ell(13,34,11,7,'#3A5A3C'); d.ell(13,32,10,5,'#4E7A48'); d.hline(5,21,28,'#6A9A58'); d.rect(0,33,26,7,'#3A5A3C');
  // spotlight
  for(let y=0;y<28;y++){ const x0=14-Math.floor(y*0.25), x1=14+Math.floor(y*0.25); for(let x=x0;x<=x1;x++) if((x+y)%2===0&&y<20) d.px(x,y,'#3E4C88'); }
  // choir frogs on lily pads (small silhouettes)
  const pad=(x,y)=>{d.ell(x,y,4,1,'#3EA048'); d.hline(x-3,x+3,y-1,'#58C060'); d.stamp(x-2,y-4,['g.g.','gggg','gggg'],{g:'#2C6A3A'}); d.px(x-2,y-4,'#E8F0C0'); d.px(x,y-4,'#E8F0C0')};
  pad(34,30); pad(44,34); pad(57,30); pad(30,37); pad(56,38);
  // music notes
  note(d,30,18,'#FFE070'); note(d,40,22,'#9FE0FF'); note(d,54,18,'#FFB0D0'); note(d,22,12,'#FFE070'); note(d,60,24,'#9FE0FF');
  // fireflies
  for(const [x,y] of [[26,26],[38,16],[62,14],[5,20]]){d.px(x,y,'#F0FF90')}
};
// ===== SQUIRREL =====
A['squirrel:s0']=d=>{ // extra-shiny acorn
  const C1='#9A6234',C2='#6E4220',C3='#B87A44',N1='#D88A3A',N2='#B06424',N3='#F2B060',N4='#FFE6B0';
  d.ell(16,19,9,10,N2); d.ell(15,18,8,9,N1); d.ell(13,16,4,5,N3); d.ell(12,14,1.5,2.5,N4); d.px(11,13,'#FFFFFF'); d.px(12,12,'#FFFFFF');
  d.px(16,29,N2); d.px(16,30,C2);
  // cap
  d.ell(16,10,11,5,C2); d.ell(16,9,11,4,C1);
  for(let y=6;y<14;y++) for(let x=5;x<28;x++) if(d.get(x,y)===C1&&((x+y)%3===0)) d.px(x,y,C3);
  for(let y=6;y<14;y++) for(let x=5;x<28;x++) if(d.get(x,y)===C1&&((x-y+30)%3===0)) d.px(x,y,C2);
  d.hline(6,26,13,C2);
  // stem
  d.rect(16,2,2,4,C2); d.px(18,2,C2); d.px(19,1,C1);
  d.outline(OL);
  sparkle(d,27,22,'#FFE680'); sparkle(d,5,24,'#FFF2B0'); d.px(26,4,'#FFE680'); d.px(3,8,'#FFE680');
};
A['squirrel:s1']=d=>{ // wrong treasure map
  const P1='#F4E2B0',P2='#E2C888',P3='#C8A868',R='#D83A3A',B='#5C3A20',Gr='#5AA048',Bl='#6AAEE0';
  d.poly([[3,6],[28,4],[29,26],[4,28]],P1);
  // rolls
  d.rect(2,4,3,25,P2); d.vline(2,4,28,P3); d.rect(27,3,3,24,P2); d.vline(29,3,26,P3);
  // torn corner bottom right
  d.clear(26,25); d.clear(25,26);
  // dotted trail
  const pts=[[8,22],[10,19],[13,18],[15,15],[18,14],[20,11],[23,10]]; for(const [x,y] of pts) d.px(x,y,B);
  // river
  d.line(14,5,10,13,Bl); d.line(15,5,11,13,Bl); d.line(10,13,18,26,Bl);
  // trees
  for(const [x,y] of [[7,9],[21,20],[24,16]]){d.stamp(x-1,y-2,['.g.','ggg','.b.'],{g:Gr,b:B})}
  // X marks (multiple, crossed out)
  d.stamp(22,7,['r.r','.r.','r.r'],{r:R}); d.stamp(7,15,['r.r','.r.','r.r'],{r:R}); d.stamp(17,21,['r.r','.r.','r.r'],{r:R});
  // question mark
  d.stamp(13,8,['.qq.','q..q','..q.','.q..','....','.q..'],{q:'#7A4A9A'});
  // acorn doodle
  d.stamp(5,23,['bbb','.o.'],{b:B,o:'#C87A34'});
  // compass
  d.stamp(23,21,['.n.','nwn','.n.'],{n:'#4A3A2A',w:'#FFFFFF'});
  d.outline(OL);
  // little acorn sticker hanging & red ribbon
  d.stamp(26,27,['.cc.','cccc','.aa.','.aa.'],{c:'#7A4A24',a:'#D88A3A'});
};
A['squirrel:s2']=d=>{ // world tree golden acorn
  const Y1='#FFD040',Y2='#E8A018',Y3='#FFF0A0',Y4='#B87410',C1='#C88A20',C2='#946010',Lf='#58B848',Lf2='#3A8A38';
  d.ell(16,20,8,9,Y2); d.ell(15,19,7,8,Y1); d.ell(13,17,3,4,Y3); d.px(12,15,'#FFFFFF'); d.px(12,16,'#FFFFFF');
  d.px(16,29,Y4);
  d.ell(16,12,10,4,C2); d.ell(16,11,10,3,C1); for(let x=7;x<26;x+=3) d.px(x,11,Y1); for(let x=8;x<26;x+=3) d.px(x,13,Y2);
  d.rect(15,5,2,4,C2);
  // leaf
  d.poly([[17,6],[22,2],[28,3],[24,8]],Lf); d.line(17,6,26,3,Lf2);
  d.outline(OL);
  for(const [x,y] of [[16,1],[3,19],[29,19],[6,8],[26,8],[6,29],[26,29],[2,14],[30,24]]) if(!d.get(x,y)) d.px(x,y,'#FFE680');
  for(const [x,y] of [[4,19],[28,19],[7,9],[25,9],[7,28],[25,28]]) if(!d.get(x,y)) d.px(x,y,'#FFF6C8');
  sparkle(d,27,24,'#FFE680'); sparkle(d,5,12,'#FFF2A0'); sparkle(d,25,1,'#FFF2A0');
};
A['squirrel:c0']=d=>{ // apartment trees, hidden acorns
  d.grad(0,0,64,22,['#8CCBF0','#9ED4F2','#B2DEF4']);
  cloud(d,10,4,6,'#FFFFFF'); cloud(d,34,3,5,'#FFFFFF');
  // apartments
  const apt=(x,w,h,c,c2)=>{d.rect(x,22-h,w,h,c); d.rect(x,22-h,w,2,c2); for(let y=24-h;y<21;y+=3) for(let i=x+1;i<x+w-1;i+=3) d.rect(i,y,2,1,'#6A88A8');};
  apt(22,14,18,'#F0E6D6','#D8C8B0'); apt(38,12,14,'#E6DCEC','#C8B8D8'); apt(51,13,20,'#F4EAD8','#D8C4A4');
  d.rect(24,5,3,1,'#E86A50'); d.px(25,4,'#E86A50');
  apt(0,10,12,'#E4E8D8','#C8D0B8');
  // grass
  d.rect(0,22,64,18,'#78C058'); d.dither(0,22,64,1,'#68B04C','#78C058'); 
  for(let i=0;i<40;i++) d.px(d.ri(0,63),d.ri(24,39),'#68B04C');
  // path
  d.poly([[22,40],[30,22],[34,22],[40,40]],'#D8CCB0'); for(let y=25;y<40;y+=4) d.hline(26+Math.floor((40-y)/5),34-Math.floor((40-y)/5)+Math.floor((40-y)/3),y,'#C8BA98');
  // trees right & center
  const tree=(x,y,r)=>{d.rect(x-1,y,3,10,'#7A5232'); d.px(x,y+2,'#946640'); d.circ(x,y-2,r,'#3A8A3C'); d.circ(x-1,y-3,r-1,'#4CA048'); d.circ(x-2,y-4,r-3,'#68BC58');};
  tree(46,20,7); tree(58,24,6); tree(4,20,5);
  // dirt mounds with acorns
  const mound=(x,y)=>{d.ell(x,y,3,1,'#9A7048'); d.hline(x-2,x+2,y-1,'#B48858'); };
  mound(30,34); mound(52,36); mound(43,30);
  d.stamp(51,33,['cc','aa'],{c:'#6E4220',a:'#D88A3A'}); d.stamp(29,31,['cc','aa'],{c:'#6E4220',a:'#D88A3A'});
  // question marks
  d.stamp(36,25,['.qq.','q..q','..q.','.q..','....','.q..'],{q:'#FFFFFF'});
  d.stamp(56,27,['qq.','..q','.q.','...','.q.'],{q:'#FFFFFF'});
  // bench
  d.rect(16,30,0,0,'#000');
};
A['squirrel:c1']=d=>{ // autumn maple mountain at sunset
  d.grad(0,0,64,20,['#5A3C78','#9A4C78','#E06A60','#F49A50','#FCC860']);
  d.circ(40,15,5,'#FFE6A0'); d.circ(40,15,4,'#FFF4D0');
  d.poly([[18,24],[38,6],[58,24]],'#B83A2A'); d.poly([[38,6],[58,24],[46,24]],'#8A2A28'); d.poly([[34,10],[38,6],[42,10],[39,9],[37,11]],'#F4E8D8');
  d.poly([[-4,26],[14,12],[32,26]],'#D8602C'); d.poly([[14,12],[32,26],[22,26]],'#A84624');
  d.poly([[40,28],[56,14],[70,28]],'#E89030'); d.poly([[56,14],[70,28],[60,28]],'#B86A24');
  // tree dots on slopes
  for(let i=0;i<40;i++){const x=d.ri(0,63),y=d.ri(14,26); const c=d.get(x,y); if(c&&c!=='#F4E8D8'&&y>12) d.px(x,y,['#F8C040','#E84A30','#FFE070','#C03020'][i%4]);}
  // ground hill
  d.rect(0,26,64,14,'#C86A2E'); d.dither(0,26,64,2,'#E08838','#C86A2E');
  for(let i=0;i<34;i++) d.px(d.ri(0,63),d.ri(29,39),['#E84A30','#F8C040','#A84624'][i%3]);
  // maple tree right
  d.rect(48,22,3,14,'#5A3420'); d.line(49,24,44,20,'#5A3420'); d.line(50,25,55,21,'#5A3420');
  d.circ(46,17,6,'#E03A28'); d.circ(54,16,6,'#F06A2A'); d.circ(50,12,6,'#E85A28'); d.circ(48,15,3,'#F8A040'); d.circ(53,12,2,'#FFC860'); d.px(44,19,'#A82A20'); d.px(56,20,'#C04020');
  // pile of acorns + leaves
  d.ell(52,37,7,2,'#E85030'); d.stamp(48,34,['cc.cc.cc','aa.aa.aa'],{c:'#6E4220',a:'#D88A3A'});
  // falling leaves and acorns
  const leaf=(x,y,c)=>d.stamp(x,y,['.a.','aaa','.a.'],{a:c});
  leaf(30,4,'#F8C040'); leaf(24,14,'#E84A30'); leaf(34,22,'#F06A2A'); leaf(60,4,'#FFE070'); leaf(8,8,'#E84A30');
  for(const [x,y] of [[36,16],[42,25],[28,10],[57,28],[38,31]]){d.px(x,y,'#6E4220'); d.px(x,y+1,'#D88A3A')}
};
A['squirrel:c2']=d=>{ // sky-high world tree top, clouds below
  d.grad(0,0,64,30,['#3E86E0','#54A0EC','#70B6F2','#8CC8F6','#A8D8F8']);
  d.circ(10,6,3,'#FFF6C0'); d.circ(10,6,2,'#FFFFFF');
  // sea of clouds
  for(let x=-4;x<70;x+=8) d.ell(x,33,7,4,'#FFFFFF'); for(let x=0;x<70;x+=8) d.ell(x,30,4,2,'#F0F6FF');
  d.rect(0,34,64,6,'#E8F0FA');
  // massive trunk on right
  d.poly([[40,40],[44,0],[60,0],[64,40]],'#7A5030'); d.poly([[48,40],[50,0],[54,0],[56,40]],'#946440'); d.vline(46,0,39,'#5E3C22'); d.vline(58,0,39,'#5E3C22');
  for(let y=4;y<40;y+=7) d.hline(50,53,y,'#5E3C22');
  // huge branch platform going left at bottom
  d.poly([[0,34],[42,31],[44,36],[0,39]],'#6A4428'); d.hline(0,43,31,'#946440'); d.line(0,32,42,30,'#A87650');
  d.poly([[0,33],[30,31],[30,32],[0,34]],'#8A5A36');
  // leaves canopy top
  for(const [x,y,r] of [[40,2,6],[62,4,7],[30,0,4],[56,12,4]]){d.circ(x,y,r,'#3E9A44'); d.circ(x-1,y-1,r-2,'#5CBC50')}
  // golden acorns hanging
  for(const [x,y] of [[36,8],[60,14],[42,14]]){d.vline(x,y-3,y-1,'#3E9A44'); d.rect(x-1,y,3,1,'#946010'); d.rect(x-1,y+1,3,2,'#FFD040'); d.px(x,y+3,'#E8A018'); d.px(x-1,y+1,'#FFF0A0')}
  // little flag at top (champ!)
  d.vline(33,20,30,'#5A3A20'); d.poly([[34,20],[39,22],[34,24]],'#F05050'); d.px(35,22,'#FFFFFF');
  // birds
  d.stamp(18,10,['a.a','.a.'],{a:'#3A4A6A'}); d.stamp(25,14,['a.a','.a.'],{a:'#3A4A6A'});
  cloud(d,24,22,5,'#FFFFFF');
};
// ===== YONGBOK =====
A['yongbok:s0']=d=>{ // fresh brownies on tray
  const T1='#B8C0CC',T2='#8A94A4',T3='#E0E6EE',B1='#6A3A22',B2='#4E2814',B3='#8A5232',S='#FFFFFF',Wl='#F0E8E0';
  // tray (slight perspective)
  d.poly([[3,14],[29,14],[31,27],[1,27]],T2); d.poly([[4,15],[28,15],[29,25],[3,25]],T1); d.hline(4,28,15,T3);
  // brownies 2x3 grid
  const br=(x,y,w,h)=>{d.rect(x,y+2,w,h-2,B2); d.rect(x,y,w,h-1,B1); d.hline(x,x+w-1,y,B3); d.px(x+1,y+1,B3); d.px(x+w-3,y+2,B3); d.px(x+2,y+3,B2);};
  br(5,16,7,5); br(12,16,7,5); br(19,16,7,5); br(5,20,7,5); br(12,20,7,5);
  // one with bite mark (missing piece)
  br(19,20,7,5); d.circ(25,24,2,null); d.clear(24,24); d.clear(25,23); d.px(25,25,T1);d.px(26,24,T1);
  // powdered sugar & choc chips
  for(const [x,y] of [[7,17],[14,18],[21,17],[9,21],[16,22]]) d.px(x,y,S);
  for(const [x,y] of [[10,18],[17,17],[22,19],[7,23]]) d.px(x,y,'#2E1408');
  // handle ears
  d.rect(0,18,2,4,T2); d.rect(30,18,2,4,T2);
  d.outline(OL);
  // steam
  for(const x of [9,16,23]){ d.px(x,10,Wl); d.px(x-1,9,Wl); d.px(x-1,8,Wl); d.px(x,7,Wl); d.px(x+1,6,Wl); d.px(x,5,Wl); }
  heart(d,26,6,'#F07088'); d.px(4,7,'#FFD860');
};
A['yongbok:s1']=d=>{ // koala plushie
  const G1='#A8A8B8',G2='#7E7E92',G3='#D4D4E0',P='#F4B8C8',N='#2A2A36',W='#F4F2F6';
  // ears
  d.circ(6,9,6,G2); d.circ(6,9,5,G1); d.circ(6,10,3,P); d.circ(26,9,6,G2); d.circ(26,9,5,G1); d.circ(26,10,3,P);
  for(const [x,y] of [[2,5],[1,8],[30,8],[29,5]]) d.px(x,y,G3);
  // body
  d.ell(16,25,8,6,G2); d.ell(16,24,7,6,G1); d.ell(16,26,4,4,W);
  // head
  d.ell(16,13,10,9,G2); d.ell(16,12,9,8,G1); d.ell(13,8,4,2,G3);
  // nose
  d.ell(16,15,3,4,N); d.px(15,13,'#5A5A70');
  // eyes
  d.rect(10,12,2,2,N); d.rect(21,12,2,2,N); d.px(10,12,'#FFFFFF'); d.px(21,12,'#FFFFFF');
  d.rect(8,15,2,1,P); d.rect(23,15,2,1,P);
  // arms holding heart
  d.ell(10,24,2,3,G2); d.ell(22,24,2,3,G2); 
  d.stamp(13,22,['.r.r.','rrrrr','rRrrr','.rrr.','..r..'],{r:'#E84860',R:'#FF9AAA'});
  // feet
  d.ell(11,30,3,1.4,G1); d.ell(21,30,3,1.4,G1);
  // tag
  d.rect(28,15,3,4,'#F8E070'); d.px(29,16,'#D04040');
  d.outline(OL);
};
A['yongbok:s2']=d=>{ // letter to Stay
  const E1='#FFF4F0',E2='#F2D8D8',E3='#D8B0B8',P1='#FFFFFF',L='#B0C8E8',R='#E8405A',R2='#B02A44';
  // letter peeking out
  d.rect(7,3,18,14,P1); for(let y=6;y<15;y+=2) d.hline(9,22-(y%4?3:0),y,L);
  heart(d,20,4,'#F48AA0');
  // envelope
  d.rect(3,12,26,16,E2); d.poly([[3,12],[16,22],[29,12],[29,28],[3,28]],E1);
  d.line(3,28,13,19,E3); d.line(29,28,19,19,E3); d.line(3,12,16,22,E3); d.line(29,12,16,22,E3);
  // heart wax seal
  d.circ(16,21,4,R2); d.stamp(13,18,['.r.r.','rrrrr','rrrrr','.rrr.','..r..'],{r:R}); d.px(14,19,'#FF9AA8');
  // star sticker (freckle-like)
  d.stamp(23,23,['..y..','.yyy.','yyyyy','.y.y.'],{y:'#FFD840'});
  d.outline(OL);
  heart(d,1,4,'#F48AA0'); heart(d,27,1,'#F8B0C0'); sparkle(d,29,8,'#FFE070');
};
A['yongbok:c0']=d=>{ // park pond with duck family
  d.grad(0,0,64,18,['#9CD8F6','#B0E0F8','#C6EAFA']);
  cloud(d,46,4,7,'#FFFFFF'); cloud(d,20,6,4,'#FFFFFF');
  // far trees
  for(let x=0;x<70;x+=7){d.circ(x,15,5,'#4E9C50'); d.circ(x+3,13,4,'#5EB058');}
  d.rect(0,17,64,23,'#8ED068'); for(let i=0;i<40;i++) d.px(d.ri(0,63),d.ri(19,39),'#7ABE58');
  // pond
  d.ell(44,29,19,8,'#5AA8C8'); d.ell(44,28,18,7,'#78C4E0'); d.ell(40,26,8,1,'#A8DCF0'); d.hline(50,56,31,'#A8DCF0');
  d.ell(44,37,16,1,'#4A98B8');
  // reeds and rocks
  for(const x of [26,28,62]){d.vline(x,22,28,'#4E8A3C'); d.rect(x,22,1,2,'#7A4A28')}
  d.ell(27,32,2,1,'#A0A0A8'); d.ell(61,33,2,1,'#A0A0A8');
  // duck family: mom + 3 babies in a row
  d.stamp(32,22,['..ww...','.wwwo..','.wkw...','wwwwwww','wwwwwwl','.wwwww.'],{w:'#FFFFFF',k:'#222222',o:'#F49A30',l:'#D8D8E0'});
  d.recolor('#FFFFFF','#FAFAFA');
  for(const [x,y] of [[41,26],[46,27],[51,28]]) d.stamp(x,y,['.yy.','.yko','yyyy','.yy.'],{y:'#FFD840',k:'#222222',o:'#F49A30'});
  for(const [x,y] of [[36,28],[45,30],[50,31],[55,32]]) d.hline(x,x+3,y,'#A8DCF0');
  // bench with ice-cream? -> small tree right edge
  d.rect(58,12,2,10,'#7A5232'); d.circ(59,9,5,'#3E8A40'); d.circ(58,8,3,'#5CB450');
  // flowers
  for(const [x,y,c] of [[4,36,'#F07090'],[22,38,'#FFD840'],[24,22,'#F07090'],[14,20,'#FFFFFF'],[30,38,'#FFFFFF']]){d.px(x,y,c); d.px(x,y+1,'#4E8A3C')}
};
A['yongbok:c1']=d=>{ // Bondi beach: surf, ocean pool, lifeguard flags
  d.grad(0,0,64,14,['#3EA6F0','#58B8F4','#78C8F6','#98D8F8']);
  d.circ(14,5,3,'#FFF8C0'); d.circ(14,5,2,'#FFFFFF');
  cloud(d,34,4,5,'#FFFFFF');
  // headland right with ocean pool (Icebergs)
  d.poly([[44,14],[50,9],[64,8],[64,24],[44,24]],'#B89070'); d.poly([[50,9],[64,8],[64,11],[52,11]],'#5AA048');
  d.rect(52,10,8,4,'#FFFFFF'); d.hline(52,59,10,'#E8EEF4'); for(let x=53;x<59;x+=2) d.px(x,12,'#7AA8D0'); d.rect(52,13,8,1,'#D0D0D8');
  // ocean
  d.rect(0,14,44,10,'#1E78C8'); d.rect(0,14,44,1,'#165EA8');
  d.rect(46,17,13,5,'#5AD0E8'); d.frame(45,16,15,7,'#E8E8EE'); // ocean pool
  // big wave curling
  d.poly([[8,24],[14,17],[22,16],[28,18],[24,19],[20,24]],'#3E9CE0'); d.line(14,17,22,16,'#FFFFFF'); d.line(22,16,28,18,'#FFFFFF'); d.px(25,19,'#FFFFFF'); d.px(23,20,'#E8F6FF');
  for(let x=0;x<44;x+=5) d.hline(x,x+2,21+(x%2),'#5AB4F0');
  // surfer board on wave
  d.line(17,15,22,14,'#F4C030'); d.px(19,14,'#E84040');
  // foam
  for(let x=0;x<64;x++) d.px(x,24,(x%3)?'#FFFFFF':'#D8F0FF'); for(let x=0;x<64;x+=2) d.px(x,25,'#E8F8FF');
  // sand
  d.rect(0,26,64,14,'#F6DFA8'); d.dither(0,26,64,1,'#EAD098','#F6DFA8');
  for(let i=0;i<24;i++) d.px(d.ri(0,63),d.ri(28,39),'#E6C888');
  // lifeguard flags (red/yellow)
  for(const x of [30,42]){d.vline(x,16,32,'#6A6A6A'); d.rect(x+1,16,4,2,'#E83A30'); d.rect(x+1,18,4,2,'#F8D830');}
  // surfboard stuck in sand
  d.ell(54,30,2,6,'#F06A9A'); d.vline(54,25,35,'#FFFFFF'); d.ell(54,36,2,1,'#D8B878');
  // water bottle
  d.rect(36,32,3,6,'#A8E0FF'); d.rect(36,31,3,1,'#2A80D0'); d.rect(36,34,3,2,'#FFFFFF'); d.px(36,33,'#E0F6FF');
  // towel
  d.rect(44,35,8,4,'#38B8A8'); d.hline(44,51,36,'#F8D830');
};
A['yongbok:c2']=d=>{ // world tour finale stage
  d.grad(0,0,64,22,['#0C0A24','#16103A','#22164E','#30205E']);
  // fireworks
  const fw=(cx,cy,r,c,c2)=>{for(let a=0;a<12;a++){const t=a*Math.PI/6; for(let k=2;k<=r;k++){ if(k%2===0||k===r) d.px(cx+Math.round(Math.cos(t)*k),cy+Math.round(Math.sin(t)*k),k===r?c2:c);}} d.px(cx,cy,'#FFFFFF')};
  fw(12,6,5,'#FF7090','#FFD0E0'); fw(54,5,4,'#FFD840','#FFF6C0'); fw(36,4,3,'#70E0FF','#E0F8FF');
  // light beams
  for(const [x0,x1] of [[18,10],[46,56],[32,30]]) for(let y=0;y<22;y++){const x=Math.round(x1+(x0-x1)*y/21); d.px(x,y,'#4A3E8A'); d.px(x+1,y,'#4A3E8A');}
  // big screen with heart
  d.rect(26,7,18,12,'#1A1A2E'); d.rect(27,8,16,10,'#3A2A6E'); bigheart(d,31,10,'#FF6A9A'); d.px(32,11,'#FFC0D8');
  // stage truss
  d.hline(0,63,0,'#5A5A70'); d.rect(22,0,2,22,'#5A5A70'); d.rect(46,0,2,22,'#5A5A70'); for(let y=1;y<22;y+=3){d.px(22,y,'#8A8AA0'); d.px(47,y,'#8A8AA0')}
  // stage lights row
  for(let x=4;x<62;x+=6) {d.rect(x,1,2,1,'#FFE070')}
  // stage floor
  d.rect(0,22,64,13,'#2A2440'); d.grad(0,22,64,13,['#5A4A8A','#4A3C78','#3C3066','#2E2454']);
  for(let x=0;x<64;x+=8) d.line(x,22,x+(x-32)/4,34,'#4E407E');
  d.hline(0,63,34,'#E8D070');
  // crowd lightsticks
  d.rect(0,35,64,5,'#0A0818');
  for(let x=1;x<64;x+=3){const y=36+(x%2); d.px(x,y,'#FFF6A0'); d.px(x,y+1,'#8A7AE0'); }
  // confetti
  for(let i=0;i<30;i++) d.px(d.ri(0,63),d.ri(4,32),['#FF7090','#FFD840','#70E0FF','#FFFFFF'][i%4]);
  // mic stand right
  d.vline(54,24,33,'#9090A0'); d.rect(53,23,3,2,'#C0C0D0');
};
// ===== FINN =====
A['finn:s0']=d=>{ // bacon pancakes stack
  const P1='#F2C070',P2='#D8963E',P3='#FFE0A0',B1='#D84A3A',B2='#F49A8A',Bu='#FFF0A0',Sy='#B8601C',Pl='#E8EEF4',Pl2='#B8C4D0';
  d.ell(16,27,14,3,Pl2); d.ell(16,26,13,2,Pl);
  for(const y of [23,19,15]){ d.ell(16,y+1,11,3,P2); d.ell(16,y,11,2.5,P1); d.hline(7,25,y+3,P2); }
  d.ell(16,14,10,2,P3);
  // bacon strips woven in
  for(const [x,y] of [[3,21],[22,17]]){ for(let i=0;i<8;i++){ const yy=y+(i%2); d.px(x+i,yy,B1); d.px(x+i,yy+1,B2); d.px(x+i,yy+2,B1);} }
  d.stamp(8,10,['bbbbbbbbbbbbbbbb','pbpbppbpbbpbpbpb','bbbbbbbbbbbbbbbb'].map(r=>r.slice(0,16)),{b:B1,p:B2});
  // butter
  d.rect(14,7,5,3,Bu); d.hline(14,18,7,'#FFFAD8'); d.px(18,9,'#E8D070');
  // syrup drips
  d.px(10,13,Sy); d.vline(9,14,17,Sy); d.vline(23,13,19,Sy); d.px(23,20,Sy);
  d.outline(OL);
  // steam
  for(const x of [10,22]){d.px(x,5,'#F0E8E0'); d.px(x+1,4,'#F0E8E0'); d.px(x,3,'#F0E8E0'); d.px(x+1,2,'#F0E8E0')}
};
A['finn:s1']=d=>{ // green adventure pack with loot
  const G1='#4CB848',G2='#2E8A38',G3='#86DC6A',S='#2A6A30',Y='#FFD040',Y2='#D89A18',Gm='#E04A8A',Bk='#6AC0F0';
  // loot poking out top
  d.circ(10,6,3,Y); d.px(9,5,'#FFF0A0'); d.ring(10,6,3,Y2);
  d.stamp(19,1,['..ww','.wwg','wwg.','wg..'],{w:'#D0D8E8',g:'#8A94A8'}); d.rect(16,5,3,3,'#8A5428'); d.rect(15,6,5,1,'#FFD040');
  d.stamp(21,6,['.gg.','gGgg','.gg.'],{g:Gm,G:'#FFB0D0'});
  // pack body
  d.ell(16,19,11,11,G2); d.ell(16,18,10,10,G1); d.rect(6,18,21,11,G1); d.rect(6,27,21,2,G2);
  d.ell(12,13,4,3,G3);
  // flap
  d.poly([[7,9],[25,9],[24,17],[16,19],[8,17]],G2); d.poly([[8,9],[24,9],[23,16],[16,18],[9,16]],G1); d.hline(9,23,10,G3);
  // buckle
  d.rect(15,16,3,4,Y); d.px(16,17,G2); d.px(16,18,G2);
  // pocket
  d.rect(10,22,13,6,G2); d.rect(11,22,11,5,G1); d.hline(11,21,22,G3); d.px(16,24,'#FFFFFF');
  // straps on sides
  d.vline(5,14,28,S); d.vline(27,14,28,S);
  d.outline(OL);
  sparkle(d,4,4,'#FFE070');
};
A['finn:s2']=d=>{ // cursed grass sword
  const G1='#5CC848',G2='#3A9A38',G3='#A8F080',G4='#287028',H='#7A4E2A',H2='#5A3418',P='#B070E8',P2='#E0B8FF';
  // blade diagonal: from (24,3) to (10,19)
  for(let i=0;i<=15;i++){ const x=25-i, y=3+i; d.px(x,y,G1); d.px(x-1,y,G1); d.px(x+1,y,G2); d.px(x,y+1,G2); if(i%3===0){d.px(x+2,y-1,G1); d.px(x+2,y,G3)} if(i%3===1){d.px(x-2,y+1,G1); d.px(x-2,y+2,G3)} }
  d.line(26,2,12,16,G3); d.px(27,1,G3); d.px(26,1,G1);
  // grass hilt / crossguard (leaves)
  d.poly([[6,13],[10,15],[13,18],[16,22],[12,20],[8,17]],G2); d.line(7,14,14,20,G4);
  d.poly([[11,13],[14,15],[13,17]],G1);
  // grip wrapped with vines -> hand cuff (it's stuck to hand)
  d.line(10,20,5,25,H); d.line(11,21,6,26,H); d.line(9,21,5,24,H2);
  for(const [x,y] of [[9,21],[7,23]]) {d.px(x,y,G2); d.px(x+1,y+1,G2)}
  d.circ(4,27,2,G4); d.px(3,26,G1);
  // vine curling around blade
  for(const [x,y] of [[22,8],[20,10],[18,12],[16,14]]) d.px(x-1,y+2,G4);
  d.outline(OL);
  // curse sparks
  for(const [x,y] of [[29,6],[26,13],[17,4],[22,18],[6,9]]) {d.px(x,y,P); }
  sparkle(d,28,10,P2); d.stamp(18,22,['p.p','.p.','p.p'],{p:P});
};
A['finn:c0']=d=>{ // tree fort at dusk, stars
  d.grad(0,0,64,24,['#1C2A5A','#2E3E78','#4A5A96','#7E7AB0','#C890A8']);
  stars(d,22,0,12,['#FFFFFF','#FFF0A0','#C8D8FF']);
  // shooting star
  d.line(10,4,16,7,'#FFFFFF'); d.px(9,3,'#FFF0A0');
  d.circ(56,6,3,'#FFF6D0'); d.circ(57,5,2,'#2E3E78');
  // forest silhouettes
  for(let x=0;x<70;x+=6) d.poly([[x-4,26],[x,14+(x%4)],[x+4,26]],'#1E3A3A');
  // ground
  d.rect(0,26,64,14,'#3E7A3C'); d.dither(0,26,64,1,'#4E8C44','#3E7A3C'); for(let i=0;i<20;i++) d.px(d.ri(0,63),d.ri(28,39),'#2E6A32');
  // giant tree with fort
  d.poly([[34,40],[38,10],[50,10],[54,40]],'#6A4A2E'); d.vline(42,12,38,'#54381E'); d.poly([[30,40],[36,34],[38,40]],'#6A4A2E'); d.poly([[58,40],[52,34],[50,40]],'#6A4A2E');
  d.circ(44,6,13,'#2E6A34'); d.circ(40,4,8,'#3E8440'); d.circ(52,8,7,'#3E8440'); d.circ(36,10,5,'#2E6A34');
  // fort house
  d.rect(36,15,14,9,'#B88A58'); for(let y=16;y<24;y+=2) d.hline(36,49,y,'#A07448');
  d.poly([[34,15],[43,9],[52,15]],'#C84A3A'); d.hline(34,52,15,'#8A2E28');
  d.rect(39,17,4,4,'#FFD870'); d.px(41,17,'#B88A58'); d.vline(41,17,20,'#7A5232'); d.rect(45,18,3,6,'#5A3A22');
  // flag on roof & telescope
  d.vline(43,4,9,'#4A3020'); d.poly([[44,4],[48,5],[44,6]],'#5AC0F0');
  d.line(49,10,53,7,'#D8D8E8'); d.px(54,7,'#8A94A8');
  // ladder
  for(let y=25;y<38;y+=2) d.hline(52,55,y,'#A07448'); d.vline(52,24,38,'#7A5232'); d.vline(55,24,38,'#7A5232');
  // swing rope
  d.vline(30,12,30,'#C8A878'); d.hline(28,32,30,'#8A5A30');
  // fireflies
  for(const [x,y] of [[24,22],[60,30],[28,34],[18,16]]) d.px(x,y,'#E8FF80');
};
A['finn:c1']=d=>{ // candy kingdom
  d.grad(0,0,64,24,['#FFB0D8','#FFC4E0','#FFD8EA','#FFE6F0']);
  // cotton candy clouds
  cloud(d,10,5,6,'#FFFFFF'); cloud(d,12,6,4,'#F8D8F8'); cloud(d,58,3,5,'#C8F0FF');
  // castle center-right
  const P1='#F48AB8',P2='#E06A9C',P3='#FFC0DC';
  d.rect(32,12,24,14,P1); d.rect(32,12,2,14,P3); d.rect(54,12,2,14,P2);
  for(let x=32;x<56;x+=3) d.rect(x,11,2,1,P1);
  // towers
  const tower=(x,y,h)=>{d.rect(x,y,6,h,P1); d.px(x,y,P3); d.vline(x,y,y+h-1,P3); d.vline(x+5,y,y+h-1,P2); d.poly([[x-1,y],[x+3,y-6],[x+7,y]],'#FFFFFF'); for(let k=0;k<3;k++) d.line(x+k*2-1,y,x+3,y-6,'#F04A6A'); d.rect(x+2,y+3,2,3,'#7A3A6A'); d.ell(x+3,y-7,1,1,'#FFD840')};
  tower(28,8,18); tower(55,10,16); tower(41,4,10);
  d.rect(40,18,8,8,'#8A3A70'); d.circ(44,18,4,'#8A3A70'); d.px(44,16,'#FFD840');
  // windows peppermint
  d.circ(36,16,1.5,'#FFFFFF'); d.px(36,16,'#F04A6A'); d.circ(52,16,1.5,'#FFFFFF'); d.px(52,16,'#F04A6A');
  // ground: pink frosting with drips
  d.rect(0,26,64,14,'#C8F0D8'); d.rect(0,24,64,3,'#FFFFFF'); for(let x=0;x<64;x+=4) d.rect(x+1,27,2,1+(x%3),'#FFFFFF');
  d.dither(0,32,64,8,'#B8E8CC','#C8F0D8');
  for(let i=0;i<22;i++) d.px(d.ri(0,63),d.ri(30,39),['#FF7090','#FFD840','#70C8FF','#B080F0'][i%4]);
  // lollipop trees
  const lolly=(x,y,c)=>{d.vline(x,y,y+9,'#FFFFFF'); d.circ(x,y-2,3,c); d.ring(x,y-2,1.5,'#FFFFFF')};
  lolly(26,20,'#70C8FF'); lolly(60,22,'#FFD840');
  // candy cane
  d.vline(58,26,36,'#FFFFFF'); for(let y=27;y<37;y+=2) d.px(58,y,'#F04A6A'); d.px(57,25,'#F04A6A'); d.px(56,26,'#FFFFFF');
  // gumdrops
  for(const [x,y,c] of [[34,33,'#7AD060'],[44,36,'#F07090'],[52,32,'#B080F0']]){d.ell(x,y,2,2,c); d.px(x-1,y-1,'#FFFFFF')}
};
A['finn:c2']=d=>{ // the citadel in space
  d.rect(0,0,64,40,'#0A0820');
  // nebula
  for(let y=0;y<30;y++) for(let x=0;x<64;x++){ const v=Math.sin(x*0.15+y*0.2)+Math.sin(x*0.07-y*0.3); if(v>1.2) d.px(x,y,'#3A1E5E'); else if(v>0.7&&(x+y)%2) d.px(x,y,'#241448');}
  stars(d,40,0,28,['#FFFFFF','#A0C0FF','#FFE0A0','#FF90C0']);
  twinkle(d,8,6,'#A0C0FF'); twinkle(d,26,16,'#FFE0A0');
  // citadel crystal
  const C1='#6AE0F0',C2='#3A9AC8',C3='#C8F8FF',C4='#2A5A9A';
  d.poly([[44,2],[50,12],[50,30],[44,34],[38,30],[38,12]],C2); d.poly([[44,2],[44,34],[38,30],[38,12]],C1); d.line(44,2,38,12,C3); d.line(41,8,41,30,C3);
  d.poly([[34,14],[38,18],[38,30],[34,32],[31,28],[31,18]],C4); d.poly([[54,12],[58,18],[57,30],[52,31],[50,28],[50,16]],C4);
  d.line(34,14,31,18,C1); d.line(54,12,58,18,C1);
  d.rect(42,16,4,6,'#FFE070'); d.px(43,17,'#FFFFFF'); // glowing core / eye
  // orbit ring
  d.ell(44,22,16,3,null); for(let x=28;x<=60;x++){const t=(x-44)/16; const y=Math.round(22+3*Math.sqrt(Math.max(0,1-t*t))); d.px(x,y,'#E070F0');}
  // floating asteroid platform (ground)
  d.rect(0,32,64,8,'#4A3E5A'); d.poly([[0,30],[30,30],[36,32],[64,33],[64,40],[0,40]],'#5A4E6E'); d.hline(0,30,30,'#7A6E8E');
  for(let i=0;i<14;i++) d.px(d.ri(0,63),d.ri(33,39),'#3A2E4A');
  d.ell(54,36,3,1,'#3A2E4A');
  // planets
  d.circ(10,10,4,'#F08A4A'); d.hline(5,15,10,'#FFC08A'); d.circ(60,4,2,'#7AE09A');
};
// ===== KUROMI =====
A['kuromi:s0']=d=>{ // jar of rakkyo, lid with skull, one rakkyo outside
  const G1='#D8F0EC',G2='#A8D4D0',G3='#F4FFFE',L='#7A4AA0',L2='#5A3280',L3='#A878C8',R='#FFFFFF',R2='#D8D0B0',R3='#9CC060',P='#F8A8C8',K='#2A2A30',B='#E6D878';
  d.rect(6,4,15,5,L); d.hline(6,20,4,L3); d.rect(6,8,15,1,L2); // lid
  d.stamp(11,5,['.www.','wkwkw','.w.w.'],{w:P,k:L2});
  d.rect(7,9,13,2,G2); // neck
  d.poly([[5,11],[22,11],[24,14],[24,27],[22,29],[5,29],[3,27],[3,14]],G1);
  d.rect(4,16,20,12,B); for(let x=4;x<24;x+=2) d.px(x,16,G1);
  const bulb=(x,y)=>{d.ell(x,y,2,2,R2); d.ell(x,y-1,2,1,R); d.px(x,y-3,R3); d.px(x,y-2,R); d.px(x-1,y-1,'#FFFFFF')};
  for(const [x,y] of [[7,25],[12,26],[18,25],[9,21],[15,21],[20,20],[13,17]]) bulb(x,y);
  d.vline(5,13,26,G3); d.vline(6,13,15,G3); d.vline(22,14,26,G2);
  d.rect(9,12,9,3,P); d.stamp(11,12,['.k.k.','kkkkk','.k.k.'].map(r=>r.replace(/k/g,'k')),{k:'#FFFFFF'});
  // escaped rakkyo with a bite
  d.ell(28,25,2,3,R); d.ell(28,26,2,2,R2); d.px(28,21,R3); d.px(29,20,R3); d.px(27,23,'#FFFFFF'); d.clear(30,23); d.clear(30,24); d.clear(29,22);
  d.outline(K);
  d.stamp(26,2,['.p.','ppp','.p.'],{p:P}); d.px(29,6,P);
};
A['kuromi:s1']=d=>{ // locked diary with skull cover and My Melody bookmark
  const C='#3A2A48',C2='#2A1E36',C3='#5A4270',P='#F8A8C8',P2='#E07AA8',Pg='#FFF8EC',Pg2='#E8DCC8',Au='#F2C24A',Au2='#C08A28',W='#FFFFFF',K='#1A1420',M='#FFB8D0';
  // pages edge
  d.rect(8,6,18,22,Pg); for(let y=7;y<27;y+=2) d.hline(23,25,y,Pg2);
  // cover
  d.rect(5,4,19,23,C); d.rect(5,4,2,23,C2); d.hline(7,23,4,C3); d.vline(23,5,26,C3);
  // skull on cover
  d.stamp(10,8,['..wwwww..','.wwwwwww.','wwkkwkkww','wwkkwkkww','wwwwPwwww','.wwwwwww.','..w.w.w..'],{w:W,k:K,P:P});
  d.stamp(9,7,['p.........p'],{p:P}); d.px(10,6,P); d.px(18,6,P);
  // hearts doodles
  heart(d,8,19,P); heart(d,17,20,P2);
  // strap + lock
  d.rect(21,13,7,5,P2); d.rect(21,13,7,1,P);
  d.rect(24,12,5,7,Au); d.frame(24,12,5,7,Au2); d.px(26,14,K); d.vline(26,15,16,K);
  d.ring(26,10,2,Au2); d.clear(26,12);
  // My Melody ear bookmark (pink bunny ear w/ white)
  d.ell(14,2,2,3,'#FFFFFF'); d.ell(14,2,1,2,M); d.vline(14,4,5,P2);
  d.outline(K);
  d.px(26,9,'#FFF0A0');
};
A['kuromi:s2']=d=>{ // black jester hood w/ pink skull
  const K='#2A2A30',K2='#1A1A20',K3='#46465A',P='#F8A8C8',P2='#E07AA8',W='#FFFFFF',F='#FFF6F0',F2='#F0DCD8';
  // two ear-points curling outward
  d.poly([[8,14],[2,3],[4,2],[13,10]],K); d.poly([[24,14],[30,3],[28,2],[19,10]],K);
  d.circ(3,3,2,K); d.circ(29,3,2,K);
  d.ell(16,18,11,11,K);
  d.line(4,4,10,11,K3); d.line(28,4,22,11,K3); d.ell(10,11,3,2,K3);
  // hood opening: pink lining + dark inside
  d.ell(16,23,8,6,P2); d.ell(16,24,7,5,'#3A2440'); d.ell(16,26,5,3,'#2A1A32');
  for(let x=0;x<32;x++){d.clear(x,30); d.clear(x,31);} 
  // pink skull on forehead
  d.stamp(12,9,['..ppppp..','.ppppppp.','ppKpppKpp','ppKpppKpp','pppp2pppp','.ppppppp.','..p.p.p..'],{p:P,K:K2,2:P2});
  // tie bows at chin
  d.stamp(5,26,['pp.pp','ppppp','pp.pp'],{p:P}); d.stamp(22,26,['pp.pp','ppppp','pp.pp'],{p:P});
  d.outline('#141418');
  d.stamp(26,13,['..w..','.wWw.','..w..'],{w:P,W:W});
};
A['kuromi:c0']=d=>{ // hideout indoor: Baku napping, diary on desk
  const Wl='#3E2A52',Wl2='#4E3666',Fl='#5A3A4A',Fl2='#4A2E3E',P='#F8A8C8',K='#1E1626';
  d.grad(0,0,64,26,[Wl,Wl,Wl2]);
  for(let x=2;x<64;x+=8) for(let y=2;y<26;y+=8) d.stamp(x,y,['.p.','p.p','.p.'],{p:'#5A4276'});
  d.rect(0,26,64,14,Fl); for(let y=28;y<40;y+=3) d.hline(0,63,y,Fl2); d.hline(0,63,26,'#2A1A30');
  // round window with moon
  d.circ(40,9,6,'#2A2050'); d.circ(40,9,5,'#1A1638'); d.circ(42,7,2,'#FFF0B0'); d.px(37,11,'#FFFFFF'); d.px(44,12,'#FFFFFF'); d.ring(40,9,6,'#8A6A40');
  // skull flag banner
  d.rect(50,3,10,9,'#1A1A20'); d.stamp(52,4,['.www.','wkwkw','wwwww','.w.w.'],{w:P,k:'#1A1A20'}); d.poly([[50,12],[55,15],[60,12]],'#1A1A20'); 
  // desk with diary
  d.rect(26,21,16,2,'#8A5A40'); d.rect(27,23,2,8,'#6A4030'); d.rect(39,23,2,8,'#6A4030');
  d.rect(30,18,8,3,'#3A2A48'); d.rect(31,18,6,1,'#FFF8EC'); d.px(33,19,P); d.line(36,15,38,19,'#F2C24A'); // open diary + pencil
  d.rect(40,17,2,4,'#C8D890'); // rakkyo jar mini
  // Baku: purple tapir blob sleeping on cushion right
  d.ell(54,33,9,3,'#E06090'); d.ell(54,32,9,2,'#F080A8');
  d.ell(54,27,7,4,'#9A7AC8'); d.ell(53,25,5,2,'#B898E0'); d.poly([[47,27],[43,29],[44,30],[48,29]],'#9A7AC8'); // snout
  d.hline(50,52,26,K); d.hline(56,58,26,K); d.px(60,24,'#B898E0'); d.circ(58,23,1,'#9A7AC8');
  d.stamp(56,15,['zzz....','..z....','.z..zz.','zzz..z.','....zz.'],{z:'#FFFFFF'});
  // rug
  d.ell(36,35,8,2,'#7A3A66'); d.ell(36,35,6,1,'#9A4A80');
  // lamp
  d.vline(4,4,10,'#2A1A30'); d.poly([[1,4],[7,4],[6,1],[2,1]],'#F8A8C8');
};
A['kuromi:c1']=d=>{ // outside My Melody's cottage, prank prepared
  d.grad(0,0,64,22,['#9ED8F0','#B4E2F2','#CCEEF6']);
  cloud(d,14,4,5,'#FFFFFF'); cloud(d,34,6,4,'#FFFFFF');
  // background trees
  for(let x=-2;x<66;x+=7) d.circ(x,19,5,'#5AA858'); for(let x=2;x<66;x+=7) d.circ(x,21,4,'#4A9450');
  d.rect(0,23,64,17,'#7CC860'); d.rect(0,23,64,1,'#5EAA4A');
  for(let i=0;i<30;i++) d.px(d.ri(0,63),d.ri(25,39),'#94D874');
  // My Melody cottage: cream walls, pink roof, strawberry chimney
  d.rect(38,14,22,13,'#FFF4E4'); d.poly([[35,15],[49,4],[63,15]],'#F488A8'); d.hline(35,63,15,'#D86A8A');
  for(let x=40;x<62;x+=4) d.px(x,12,'#FFB0C8');
  d.rect(55,4,3,6,'#E04A5A'); d.px(56,3,'#5AA858');
  d.rect(46,19,6,8,'#C88A5A'); d.px(50,23,'#F2C24A'); d.circ(49,10,2,'#FFFFFF'); d.px(49,10,'#F8A8C8');
  d.rect(40,18,4,4,'#9ED8F0'); d.frame(40,18,4,4,'#D86A8A'); d.rect(54,18,4,4,'#9ED8F0'); d.frame(54,18,4,4,'#D86A8A');
  // flowers
  for(const x of [37,40,53,57,61]) {d.px(x,28,'#F8A8C8'); d.px(x,29,'#4A9450');}
  // path to door
  d.poly([[46,27],[52,27],[48,39],[38,39]],'#E8D0A0');
  // prank: banana peel on path, bucket on door top
  d.stamp(42,33,['..y..','.yyy.','y.y.y'],{y:'#F8D848'});
  d.rect(47,16,4,3,'#8A8AA0'); d.hline(47,50,16,'#B0B0C8'); d.px(46,17,'#6AC0F0');
  // pink skull sign stuck in ground
  d.vline(30,26,33,'#6A4A30'); d.rect(27,22,7,5,'#2A2A30'); d.stamp(29,23,['ppp','kpk'.replace(/k/g,'k'),'.p.'],{p:'#F8A8C8',k:'#2A2A30'});
  // strawberry
  d.stamp(25,34,['.g.','rrr','rwr','.r.'],{g:'#4A9450',r:'#E04A5A',w:'#FFD0D8'});
};
A['kuromi:c2']=d=>{ // conquered Mariland castle, painted pink, night
  d.grad(0,0,64,28,['#120A2A','#1E1240','#2E1A54','#44206A']); d.rect(0,26,64,4,'#2A1A3A');
  stars(d,26,0,16,['#FFFFFF','#F8C8E0','#B8A8FF']);
  d.circ(10,6,4,'#FFF2C8'); d.circ(12,5,3,'#120A2A');
  // hill
  d.ell(44,32,30,8,'#2A1A3A'); d.rect(0,30,64,10,'#2A1A3A'); d.rect(0,33,64,7,'#221430');
  for(let i=0;i<20;i++) d.px(d.ri(0,63),d.ri(31,39),'#3A2650');
  // castle pink
  const P='#F890C0',P2='#D86AA0',P3='#FFC0DC',K='#1A1020';
  d.rect(32,14,26,16,P); d.rect(32,14,2,16,P3);
  for(let x=32;x<58;x+=4) d.rect(x,12,2,2,P);
  d.rect(28,8,7,22,P2); d.rect(55,8,7,22,P2); d.poly([[27,8],[31,1],[36,8]],'#2A2A30'); d.poly([[54,8],[58,1],[63,8]],'#2A2A30');
  d.rect(40,4,10,10,P); d.poly([[38,4],[45,-4],[52,4]],'#2A2A30');
  // skull flag
  d.vline(45,-1,0,'#888'+'888'); d.vline(45,0,0,'#888888');
  d.rect(46,0,6,4,'#2A2A30'); d.stamp(47,0,['www','kwk','.w.'],{w:'#F8A8C8',k:'#2A2A30'});
  // door & windows (glowing)
  d.rect(42,22,6,8,K); d.circ(44.5,22,3,K); d.vline(44,21,29,'#3A2A40');
  for(const [x,y] of [[30,12],[30,20],[57,12],[57,20],[43,7],[36,18],[52,18]]) d.rect(x,y,2,3,'#FFE070');
  // paint bucket and drips
  for(const x of [34,39,50,54]) d.vline(x,14,14+((x*7)%5),P3);
  d.rect(24,33,4,4,'#C8C8D8'); d.hline(24,27,33,'#E0E0F0'); d.rect(25,31,2,2,P); d.px(28,35,P);
  d.line(19,38,22,30,'#8A5A30'); d.rect(21,28,3,3,P);
  // fireworks
  sparkle(d,22,6,'#F8A8C8'); sparkle(d,60,18,'#B8A8FF');
};
// ===== ANDREW (Spider-Man 2nd gen) =====
A['andrew:s0']=d=>{ // beat-up skateboard, tilted, stickers, scuffs
  const D='#3A6AB0',D2='#2A4E88',D3='#5A8AD0',Gt='#2A2A30',Wh='#F0E0B0',Wh2='#C8B080',Tr='#B0B8C8',Tr2='#7A8294',R='#C8243A',Sc='#D8C8B0';
  // deck as a rotated rounded bar from (4,22) to (28,8)
  for(let t=0;t<=24;t++){const x=4+t, y=22-t*14/24; d.circ(x,y,3.4,D);} 
  for(let t=0;t<=24;t++){const x=4+t, y=22-t*14/24; d.px(x,Math.round(y+3),D2); d.px(x,Math.round(y+2),D2);} 
  for(let t=2;t<=22;t+=1){const x=4+t, y=22-t*14/24; d.px(x,Math.round(y-2),D3);} 
  // grip tape stripe
  for(let t=3;t<=21;t++){const x=4+t, y=22-t*14/24; d.px(x,Math.round(y-1),Gt); d.px(x,Math.round(y),Gt);} 
  // spider sticker
  d.stamp(13,13,['r.r.r','.rrr.','rrrrr','.rrr.','r.r.r'],{r:R}); d.px(15,15,'#FFFFFF');
  // scuffs / chips
  d.px(7,19,Sc); d.px(8,19,Sc); d.px(22,11,Sc); d.px(25,10,Sc); d.px(19,15,Sc);
  // tape repair
  d.stamp(21,10,['ww','ww','ww'],{w:'#E8E0D0'});
  // trucks and wheels under
  d.rect(7,24,5,2,Tr); d.rect(21,16,5,2,Tr); d.hline(7,11,25,Tr2); d.hline(21,25,17,Tr2);
  for(const [x,y] of [[6,27],[12,26],[20,19],[26,18]]){d.circ(x,y,1.6,Wh); d.px(x+1,y+1,Wh2);} 
  d.outline('#1A1A24');
  // motion lines
  d.hline(1,4,28,'#9AA8C0'); d.hline(2,5,30,'#9AA8C0');
};
A['andrew:s1']=d=>{ // homemade web-shooter: wrist cuff (side view) with device and cartridges
  const M='#B8C0CC',M2='#8890A0',M3='#E4EAF2',R='#C8243A',R2='#961A2C',R3='#E8546A',B='#2A2A30',C='#5AB0E0',Y='#F2C24A',W='#FFFFFF';
  // cuff cylinder
  d.rect(6,13,20,11,R); d.ell(26,18,2,5,R2); d.hline(6,25,13,R3); d.hline(6,25,23,R2);
  for(let x=8;x<26;x+=4) d.vline(x,14,22,R2);
  d.ell(6,18,3,5,R2); d.ell(6,18,2,4,'#3A1A20'); // opening
  // device on top
  d.rect(9,7,13,7,M); d.hline(9,21,7,M3); d.hline(9,21,13,M2);
  d.rect(21,9,6,4,M); d.rect(26,10,3,2,M2); d.px(28,10,B); // nozzle
  d.rect(11,9,6,3,B); d.rect(12,10,4,1,C); // cartridge window
  d.px(19,9,Y); d.px(19,11,'#40C040');
  d.px(10,8,M2); d.px(20,8,M2); d.line(11,14,13,18,'#3A3A44'); d.line(13,18,17,18,'#3A3A44'); // wire
  // trigger button underside
  d.rect(14,24,4,2,M2);
  // spare cartridges
  d.rect(3,26,3,5,M); d.hline(3,5,26,M3); d.px(4,28,C); d.rect(8,26,3,5,M); d.hline(8,10,26,M3); d.px(9,28,C);
  d.outline('#1A1A24');
  // web spray
  d.line(30,11,31,8,W); d.px(31,11,W); d.line(30,11,31,13,W);
  d.stamp(26,1,['.w.','w.w','.w.'],{w:'#FFFFFF'});
};
A['andrew:s2']=d=>{ // graduation cap with tassel
  const K='#2A2A34',K2='#1C1C24',K3='#46465A',Y='#F2C24A',Y2='#C8902A',W='#FFFFFF';
  // skull cap
  d.ell(16,20,9,5,K2); d.rect(7,17,19,6,K2); d.ell(16,23,9,2,K);
  // board (diamond)
  d.poly([[16,4],[31,12],[16,20],[1,12]],K); d.poly([[16,4],[31,12],[16,13],[1,12]],K3); d.poly([[16,6],[27,12],[16,11],[5,12]],K);
  d.line(1,12,16,20,K2); d.line(16,20,31,12,K2);
  // button and tassel
  d.circ(16,12,1,Y);
  d.line(16,12,25,15,Y); d.vline(25,15,24,Y); d.rect(24,24,3,5,Y); d.vline(26,24,28,Y2); d.px(24,29,Y2); d.px(26,29,Y2);
  // diploma w/ red ribbon
  d.rect(2,24,13,4,'#FFF6E0'); d.circ(2,26,2,'#FFF6E0'); d.vline(14,24,27,'#E0D0B0'); d.rect(8,24,2,4,'#C8243A');
  d.outline('#141418');
  d.px(6,7,'#FFE070'); d.px(28,4,'#FFE070'); d.stamp(27,2,['.y.','yWy','.y.'],{y:Y,W:W});
};
A['andrew:c0']=d=>{ // school hallway: lockers on right, web strand on a locker, trophy case
  const Wl='#E8E0C8',Wl2='#D8CEB0',Fl='#C8B898',Fl2='#B4A280',L='#4A7AC0',L2='#3A64A4',L3='#6A9AD8';
  d.rect(0,0,64,40,Wl); d.rect(0,0,64,3,'#F4F0E4'); for(let x=4;x<64;x+=16){d.rect(x,0,8,2,'#FFFFFF');}
  d.rect(0,18,64,2,'#A04040'); // stripe
  // floor checkered perspective-ish
  d.rect(0,30,64,10,Fl); for(let y=30;y<40;y+=3) for(let x=((y/3)%2)*4;x<64;x+=8) d.rect(x,y,4,3,Fl2);
  d.hline(0,63,30,'#8A7A60');
  // lockers block x 26..63
  for(let i=0;i<8;i++){const x=26+i*5; d.rect(x,6,5,24,i%2?L:L2); d.vline(x,6,29,'#2A4A80'); d.rect(x+1,8,3,1,'#2A4A80'); d.rect(x+1,10,3,1,'#2A4A80'); d.rect(x+3,17,1,2,'#C8D0DC'); d.hline(x+1,x+3,7,L3);}
  d.hline(26,63,5,'#2A4A80');
  // dented/open locker with books
  d.rect(46,7,4,22,'#1A2A4A'); d.rect(46,24,4,2,'#C84040'); d.rect(46,21,4,3,'#F2C24A'); d.rect(50,7,2,22,L3);
  // web strand dangling from top of locker (upside-down clue)
  d.vline(36,0,12,'#FFFFFF'); d.line(36,0,33,3,'#E8E8F0'); d.line(36,0,39,3,'#E8E8F0'); d.hline(34,38,2,'#E8E8F0');
  d.stamp(34,12,['.w.w.','wwwww','.w.w.'],{w:'#FFFFFF'});
  // backpack under lockers
  d.rect(56,26,6,5,'#C8243A'); d.rect(57,27,4,2,'#961A2C');
  // bulletin board / science poster on left wall upper
  d.rect(4,4,16,11,'#C89A60'); d.frame(4,4,16,11,'#8A6030'); d.rect(6,6,5,4,'#FFFFFF'); d.circ(8,8,1,'#5AB0E0'); d.rect(12,6,6,6,'#FFF0A0'); d.px(14,8,'#C8243A'); d.px(16,10,'#C8243A'); d.rect(7,11,3,2,'#F8A8C8');
  // clock
  d.circ(23,4,2,'#FFFFFF'); d.ring(23,4,2,'#2A2A30'); d.px(23,3,'#2A2A30'); d.px(24,4,'#2A2A30');
  // dropped pencil, paper
  d.line(40,36,44,35,'#F2C24A'); d.rect(50,34,4,3,'#FFFFFF');
};
A['andrew:c1']=d=>{ // Brooklyn Bridge at sunset, web tangle
  d.grad(0,0,64,24,['#3A2A6A','#7A3A7A','#C8506A','#F07A50','#F8A848','#FCD070']);
  d.circ(24,16,5,'#FFE89A'); d.circ(24,16,3,'#FFF6D0');
  // skyline silhouette distant
  for(const [x,w,h] of [[0,4,6],[4,3,9],[8,5,5],[44,4,7],[49,3,11],[52,5,6],[58,6,9]]) d.rect(x,24-h,w,h,'#5A2A5A');
  // river
  d.rect(0,24,64,16,'#5A4A8A'); for(let y=25;y<40;y+=2) for(let x=(y%4);x<64;x+=7) d.hline(x,x+2,y,'#F0A060');
  d.vline(30,25,32,'#FFD890');
  // bridge deck
  d.rect(0,27,64,3,'#4A3A4A'); d.hline(0,63,27,'#6A5A6A'); d.hline(0,63,30,'#2A1E2A');
  // stone tower with gothic arches
  const S='#B08868',S2='#8A6648',S3='#D0A888';
  d.rect(40,6,14,22,S); d.rect(40,6,2,22,S3); d.rect(52,6,2,22,S2); d.rect(39,5,16,2,S2);
  for(const x of [43,48]){d.rect(x,12,3,14,'#7A3A5A'); d.px(x+1,11,'#7A3A5A');}
  // cables
  for(let x=4;x<40;x+=6){const y=Math.round(6+ (40-x)*(40-x)/1600*14); d.vline(x,y+3,26,'#4A2E4A');}
  for(let x=0;x<=40;x++) d.px(x,Math.round(6+(40-x)*(40-x)/1600*14)+3,'#2A1E2A');
  d.line(41,6,26,26,'#3A2A3A'); d.line(41,6,32,26,'#3A2A3A'); d.line(53,6,60,26,'#3A2A3A'); d.line(53,6,63,22,'#2A1E2A');
  // reflection
  d.rect(40,31,14,2,'#8A6A7A'); d.rect(42,34,10,1,'#8A6A7A');
  // web tangle near tower
  for(const [a,b,c,e] of [[56,16,63,10],[56,16,63,22],[56,16,60,8],[58,19,63,17]]) d.line(a,b,c,e,'#FFFFFF');
  d.ring(58,15,2,'#FFFFFF'); d.px(61,13,'#FFFFFF');
  // phone (selfie) dangling
  d.rect(59,22,3,4,'#2A2A30'); d.px(60,23,'#7AD0F0');
  // birds
  d.stamp(14,6,['a.a','.a.'],{a:'#3A2A4A'}); d.stamp(20,9,['a.a','.a.'],{a:'#3A2A4A'});
};
A['andrew:c2']=d=>{ // top of Statue of Liberty at night: crowned head, torch, web line, saved MJ heart
  d.grad(0,0,64,40,['#0A0E2A','#121A3E','#1A2650','#22305E']);
  stars(d,30,0,22,['#FFFFFF','#B8C8FF','#FFF0B0']);
  d.circ(10,7,4,'#F0F4FF'); d.px(9,6,'#D8E0F0'); d.px(11,9,'#D8E0F0');
  d.rect(0,33,64,7,'#0E1630'); for(const [x,w,h] of [[0,5,4],[6,4,7],[11,6,5],[18,3,8],[23,5,3],[60,4,6]]) d.rect(x,33-h,w,h,'#18203E');
  for(let i=0;i<34;i++) d.px(d.ri(0,63),d.ri(27,39),i%3?'#F8D870':'#FFFFFF');
  const G='#5ABAA0',G2='#3A8A78',G3='#8AD8C0',G4='#2A6A5C';
  // crown spikes (thick triangles)
  const cx=42,cy=22;
  for(let i=0;i<7;i++){const a=-Math.PI+i*Math.PI/6, tx=cx+Math.cos(a)*15, ty=cy+Math.sin(a)*13, nx=-Math.sin(a)*2, ny=Math.cos(a)*2; d.poly([[cx+nx,cy+ny],[tx,ty],[cx-nx,cy-ny]],i%2?G:G3);}
  // head
  d.ell(cx,31,8,9,G); d.ell(cx-2,30,5,7,G3); d.ell(cx+4,33,3,6,G2);
  d.rect(cx-9,21,19,5,G2); d.hline(cx-9,cx+9,21,G3); for(let x=cx-7;x<cx+8;x+=3) d.rect(x,22,2,2,'#FFE89A');
  d.hline(cx-6,cx-3,29,G4); d.hline(cx+2,cx+5,29,G4); d.px(cx-5,30,G4); d.px(cx+3,30,G4); // eyes
  d.vline(cx,30,33,G2); d.hline(cx-2,cx+2,36,G4); // nose, lips
  // torch arm right
  d.rect(57,12,5,28,G); d.vline(57,12,39,G3); d.vline(61,12,39,G2);
  d.rect(55,9,9,4,'#C8A040'); d.hline(55,63,9,'#E8C860'); d.poly([[55,9],[63,9],[59,1]],'#F8A030'); d.poly([[57,9],[62,9],[59,4]],'#FFE070'); d.px(59,6,'#FFFFFF');
  // web line from torch, swinging down-left, with heart (MJ caught)
  d.line(58,10,28,27,'#FFFFFF'); d.line(28,27,26,30,'#E8E8F0');
  bh(d,23,30,'#F05070','#FFB0C0');
  sparkle(d,26,8,'#FFF0B0');
};
// ===== DOCTOR STRANGE =====
A['strange:s0']=d=>{ // Kamar-Taj tea cup with steam + wifi password slip
  const C='#F4EEE0',C2='#D8CCB4',C3='#FFFFFF',T='#9AC060',T2='#78A040',O='#E08A30',O2='#B86A20',Pp='#FFF6D0',K='#3A2A20';
  // saucer
  d.ell(15,27,13,3,C2); d.ell(15,26,13,2,C); d.hline(6,24,25,C3);
  // cup bowl
  d.poly([[5,14],[25,14],[23,22],[19,26],[11,26],[7,22]],C); d.poly([[18,15],[25,14],[23,22],[19,26],[16,26]],C2);
  d.ell(15,14,10,2,O2); d.ell(15,14,9,1,T); d.hline(9,13,14,'#C0E080');
  // orange band with mandala dots
  d.hline(6,24,17,O); d.hline(6,24,18,O); for(let x=7;x<24;x+=3) d.px(x,18,'#FFE070');
  // handle
  d.ring(26,18,3,C2); d.ring(26,18,2,C);
  for(let x=24;x<=26;x++) d.clear(x+0,18);
  d.px(7,16,C3); d.vline(8,19,22,C3);
  // wifi password slip leaning
  d.poly([[24,5],[31,3],[31,11],[25,13]],Pp); d.stamp(26,5,['.ooo.','o...o','.ooo.','..o..'],{o:'#3A6AB0'});
  d.outline(K);
  // steam swirls
  d.stamp(9,3,['.s..','s...','.s..','..s.','.s..'],{s:'#C8D8E0'}); d.stamp(15,1,['..s.','.s..','..s.','...s','..s.','.s..'],{s:'#C8D8E0'}); d.stamp(20,5,['.s','s.','.s','s.'],{s:'#C8D8E0'});
};
A['strange:s1']=d=>{ // forbidden spellbook: old leather, mandala, chain, glowing, library card with late stamp
  const L='#6A3A2A',L2='#4A2618',L3='#8A5038',Au='#E8C040',Au2='#B08A28',G='#58D068',Pg='#F0E0B8',Pg2='#D0BC90',Ch='#9098A8',Ch2='#606878',K='#1E1410';
  d.rect(4,5,22,24,Pg); for(let y=7;y<28;y+=2) d.hline(24,26,y,Pg2);
  d.rect(3,3,21,25,L); d.rect(3,3,3,25,L2); d.hline(6,23,3,L3); d.vline(23,4,27,L3);
  for(const [x,y] of [[7,5],[21,5],[7,25],[21,25]]) d.rect(x-1,y-1,2,2,Au);
  // mandala
  d.ring(14,15,6,Au); d.ring(14,15,3,Au2); d.circ(14,15,1,G);
  for(let i=0;i<8;i++){const a=i*Math.PI/4; d.px(14+Math.cos(a)*8,15+Math.sin(a)*8,Au); d.px(14+Math.cos(a)*4.5,15+Math.sin(a)*4.5,Au2);} 
  // chain across
  for(let x=2;x<28;x+=3){d.rect(x,19-Math.floor((x-2)/9),2,1,Ch); d.px(x+1,20-Math.floor((x-2)/9),Ch2);} 
  d.rect(25,14,4,5,Ch); d.frame(25,14,4,5,Ch2); d.px(26,16,K); // padlock
  // library card with red LATE stamp
  d.rect(21,22,9,8,'#FFFFFF'); d.hline(22,28,24,'#A8B8D0'); d.hline(22,28,26,'#A8B8D0'); d.frame(23,25,5,4,'#D82830'); d.px(25,26,'#D82830'); d.px(25,27,'#D82830');
  d.outline(K);
  d.px(14,1,G); d.px(1,12,G); d.px(30,8,G);
};
A['strange:s2']=d=>{ // Eye of Agamotto: gold eye amulet w/ green gem, on cord
  const Au='#E8C040',Au2='#B08A28',Au3='#FFE888',G='#58D068',G2='#2E9A48',G3='#B8F8B0',K='#2A1A10',Cd='#7A4A2A';
  // cord
  d.line(3,0,9,9,Cd); d.line(28,0,22,9,Cd);
  // eye shape lids
  d.poly([[1,17],[9,9],[16,7],[23,9],[30,17],[23,25],[16,27],[9,25]],Au);
  d.poly([[3,17],[10,11],[16,10],[22,11],[28,17],[22,23],[16,24],[10,23]],Au2);
  d.poly([[5,17],[11,12],[16,11],[21,12],[26,17],[21,22],[16,23],[11,22]],Au);
  // decorative wings / prongs
  d.hline(0,4,17,Au2); d.hline(27,31,17,Au2);
  // central gem
  d.circ(16,17,5,G2); d.circ(16,17,4,G); d.circ(15,16,2,G3); d.px(14,15,'#FFFFFF');
  d.ring(16,17,5,Au3);
  // lid crease lines
  d.line(9,11,16,9,Au3); d.line(16,9,23,11,Au3);
  d.outline(K);
  // green glow ticks (time spell)
  for(const [x,y] of [[3,26],[28,26],[16,30],[2,6],[29,6]]) d.px(x,y,G);
  d.stamp(26,27,['.g.','gwg','.g.'],{g:G,w:'#FFFFFF'});
};
A['strange:c0']=d=>{ // Sanctum 177A Bleecker St. foyer: round window, staircase, cloak opening door
  const Wl='#6A3A2E',Wl2='#7E4836',Fl='#3A2420',Fl2='#4A2E28',Wd='#A8743A',Wd2='#7A5028';
  d.rect(0,0,64,28,Wl); for(let x=0;x<64;x+=8) d.vline(x,0,27,Wl2);
  d.rect(0,28,64,12,Fl); for(let y=29;y<40;y+=3) d.hline(0,63,y,Fl2); d.hline(0,63,28,'#2A1814');
  // rug
  d.poly([[20,37],[56,37],[50,31],[26,31]],'#8A2A2A'); d.poly([[24,36],[52,36],[48,32],[28,32]],'#B03A30'); d.hline(28,48,34,'#E8C040');
  // famous round window (top center-right) with pattern
  const cx=44,cy=8;
  d.circ(cx,cy,8,'#2A1A20'); d.circ(cx,cy,7,'#7AA8D8'); d.circ(cx,cy,5,'#A8D0F0');
  for(let i=0;i<8;i++){const a=i*Math.PI/4; d.line(cx,cy,cx+Math.cos(a)*7,cy+Math.sin(a)*7,'#2A1A20');}
  d.ring(cx,cy,4,'#2A1A20'); d.ring(cx,cy,7,'#2A1A20'); d.circ(cx,cy,1,'#E8C040');
  // staircase going up right
  for(let i=0;i<6;i++){d.rect(50+i*2,26-i*4,14-i*2,4,Wd); d.hline(50+i*2,63,26-i*4,'#C8904A');}
  d.vline(50,10,27,Wd2); for(let i=0;i<6;i++) d.vline(51+i*2,22-i*4,25-i*4,Wd2); d.line(50,10,63,-2,Wd2);
  // door (left-center, open), cloak floating holding it
  d.rect(24,8,9,20,'#2A1414'); d.rect(25,9,7,19,'#F4E8C8'); d.rect(25,9,7,10,'#FFF8E0'); // daylight
  d.poly([[32,8],[36,10],[36,30],[32,28]],'#5A2A1E'); d.px(35,19,'#E8C040'); // door slab swung open
  // red cloak
  d.poly([[37,15],[44,14],[46,28],[42,26],[39,29],[36,26]],'#C02828'); d.poly([[38,15],[43,15],[44,22],[40,20]],'#E04A3A'); d.hline(37,44,14,'#8A1A1A'); d.px(36,16,'#E8C040'); d.px(36,17,'#E8C040');
  d.line(36,18,34,19,'#C02828');
  // candle sconces
  for(const x of [10,58]){d.rect(x,6,2,4,'#F4E8C8'); d.px(x,5,'#FFD060'); d.px(x+1,4,'#FFF0A0'); d.hline(x-1,x+2,10,'#E8C040');}
  // artefact display: small pedestal with orb
};
A['strange:c1']=d=>{ // Kathmandu training courtyard: snow, mountains, prayer flags, spark portal
  d.grad(0,0,64,22,['#8EAACC','#A8C0DC','#C4D6EA','#DCE6F2']);
  // himalaya
  d.poly([[0,20],[10,6],[18,14],[28,2],[40,16],[50,8],[64,20]],'#7A8CA8');
  d.poly([[10,6],[7,10],[13,10]],'#FFFFFF'); d.poly([[28,2],[23,9],[31,8],[34,10]],'#FFFFFF'); d.poly([[50,8],[46,12],[54,12]],'#FFFFFF');
  d.poly([[0,24],[14,16],[30,24]],'#A8B4C8');
  // ground snow
  d.rect(0,24,64,16,'#F4F8FC'); d.rect(0,24,64,1,'#D8E2EE'); for(let i=0;i<25;i++) d.px(d.ri(0,63),d.ri(26,39),'#DCE6F0');
  // temple building right
  const R='#A83A2A',R2='#7A2618',Wo='#8A5A30';
  d.rect(44,14,18,12,'#E8DCC4'); d.poly([[42,14],[53,7],[64,14]],R); d.poly([[42,14],[53,7],[53,9],[44,14]],'#C85040'); d.hline(42,63,14,R2);
  d.hline(42,63,8,'#FFFFFF'); d.hline(45,61,10,'#FFFFFF'); // snow on roof
  d.poly([[44,14],[53,8],[62,14]],null);
  d.rect(50,18,6,8,Wo); d.vline(53,18,25,'#5A3A20'); d.rect(46,17,3,3,R2); d.rect(57,17,3,3,R2);
  // prayer flags string
  const fc=['#3A6AD0','#FFFFFF','#D83A3A','#3AAA5A','#F2C24A'];
  for(let i=0;i<10;i++){const x=24+i*2, y=4+Math.round(Math.sin(i/9*Math.PI)*3); d.px(x,y,'#5A4A3A'); d.rect(x,y+1,2,2,fc[i%5]);} 
  d.line(24,4,44,10,'#5A4A3A');
  // sling ring portal of sparks (center)
  const cx=32,cy=28;
  d.ring(cx,cy,6,'#F8A030'); d.ring(cx,cy,5,'#FFD060'); d.circ(cx,cy,4,'#3A5A7A'); d.circ(cx,cy,3,'#5A7AA0');
  for(let i=0;i<12;i++){const a=i*Math.PI/6; d.px(cx+Math.cos(a)*7.5,cy+Math.sin(a)*7.5,'#FFE890');}
  d.px(cx-1,cy-1,'#A8C8E8'); d.px(cx+1,cy,'#A8C8E8');
  // training staffs rack
  d.vline(26,30,38,'#8A5A30'); d.vline(28,31,38,'#8A5A30'); d.hline(25,29,33,'#6A4020');
  // snow falling
  for(let i=0;i<30;i++) d.px(d.ri(0,63),d.ri(0,23),'#FFFFFF');
};
A['strange:c2']=d=>{ // Dark Dimension: psychedelic purple, Dormammu face, floating tiles, tally 10
  d.grad(0,0,64,40,['#1A0830','#2A0C48','#3E1060','#561478','#3E1060','#2A0C48']);
  for(let y=0;y<40;y+=4) for(let x=((y/4)%2)*6;x<64;x+=12) d.rect(x,y,4,1,'#5A2A8A');
  // swirl rings
  d.ring(46,16,14,'#7A2AA0'); d.ring(46,16,11,'#A03AB8'); d.ring(46,16,8,'#C858C8');
  // Dormammu face (fiery)
  const F='#F06A20',F2='#F8A030',F3='#FFE070',P='#C02880';
  d.ell(46,16,6,8,P); d.ell(46,17,5,6,'#E04878');
  d.poly([[40,10],[42,3],[44,8],[46,1],[48,8],[50,3],[52,10]],F); d.poly([[42,9],[44,5],[46,8],[48,5],[50,9]],F2);
  d.rect(42,14,4,2,F3); d.rect(48,14,4,2,F3); d.px(43,14,'#FFFFFF'); d.px(50,14,'#FFFFFF');
  d.hline(44,48,21,'#2A0820'); d.hline(43,49,20,'#7A1040');
  // floating platform tiles (geometric)
  const T='#4A4A8A',T2='#6A6AB8',T3='#2A2A5A';
  d.rect(0,32,30,8,T); d.hline(0,29,32,T2); for(let x=4;x<30;x+=6) d.vline(x,33,39,T3); d.rect(30,34,6,6,T3);
  for(const [x,y,w] of [[34,30,8],[48,32,10],[56,26,6],[26,22,5],[4,10,6],[16,4,4]]){d.rect(x,y,w,3,T); d.hline(x,x+w-1,y,T2); d.hline(x,x+w-1,y+2,T3);} 
  d.rect(36,36,28,4,'#2A1A4A'); d.hline(36,63,36,'#4A2A7A');
  // tally marks: 10 attempts (two groups of five)
  for(const gx of [40,50]){for(let i=0;i<4;i++) d.vline(gx+i*2,30,34,'#FFE070'); d.line(gx-1,34,gx+7,30,'#FFF6C0');}
  // floating sparks
  for(const [x,y] of [[24,6],[10,20],[30,14],[60,4],[4,26]]) twinkle(d,x,y,'#C858C8','#FFE070');
};
// ===== MOMONGA =====
A['momonga:s0']=d=>{ // gold star praise sticker with heart, peeling corner
  const Y='#F8D040',Y2='#E0A820',Y3='#FFF0A0',P='#F06A90',P2='#FFB0C8',W='#FFFFFF',Bk='#E8E4F0',K='#5A3A20';
  // white sticker border star
  const star=(cx,cy,R,r,c)=>{const pts=[]; for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5, rr=i%2?r:R; pts.push([cx+Math.cos(a)*rr,cy+Math.sin(a)*rr]);} d.poly(pts,c)};
  star(16,17,15,7.5,W); star(16,17,13,6.3,Y); star(15,16,10,5,Y3); star(16,17,9.5,4.8,Y);
  // shading on lower-right arms
  for(let y=17;y<32;y++)for(let x=16;x<32;x++) if(d.get(x,y)===Y && (x-16)+(y-17)>8) d.px(x,y,Y2);
  // heart center
  d.stamp(12,13,['.pp.pp.','ppppppp','pWppppp','.ppppp.','..ppp..','...p...'],{p:P,W:W});
  // tiny smiling face? eyes on star
  // peeled corner bottom-right arm
  d.poly([[24,26],[29,30],[26,31]],Bk); d.px(25,27,'#C8C0D8');
  d.outline(K);
  d.stamp(1,1,['.p.','pWp','.p.'],{p:P2,W:W}); d.stamp(27,2,['.y.','yWy','.y.'],{y:Y,W:W}); d.px(3,26,P2);
};
A['momonga:s1']=d=>{ // strawberry shortcake slice with "mine" flag pick & bite mark
  const Cr='#FFFAF0',Cr2='#EEE2D0',Sp='#F6D08A',Sp2='#D8A860',R='#E8384A',R2='#B82838',Gn='#4AAA48',W='#FFFFFF',Pl='#D0E8F8',Pl2='#A8C8E0',K='#5A3030';
  // plate
  d.ell(16,27,15,3,Pl2); d.ell(16,26,15,2,Pl);
  // wedge side view: front face rectangle-ish, top triangle
  d.poly([[3,13],[20,8],[29,12],[29,25],[3,25]],Cr);
  d.poly([[3,13],[20,8],[29,12],[12,17]],W); // top
  d.poly([[3,13],[12,17],[12,25],[3,25]],Cr2); // left side (cut face)
  // layers on cut face and front
  for(const y of [17,22]) {d.hline(12,29,y,Sp); d.hline(12,29,y+1,Sp2);} 
  d.hline(12,29,20,R); for(let x=13;x<29;x+=4) d.px(x,20,'#FF8090');
  for(const y of [18,23]) d.hline(3,11,y-2,Sp);
  // cream dollops + strawberry on top
  d.circ(17,10,2,W); d.circ(23,11,2,W);
  d.ell(20,6,3,3,R); d.ell(19,5,1,1,'#FF7080'); d.px(21,8,R2); d.stamp(19,2,['g.g','.g.'],{g:Gn}); d.px(18,6,'#FFD0A0'); d.px(21,5,'#FFD0A0');
  // bite mark on left corner
  d.clear(3,13); d.clear(4,13); d.clear(3,14); d.clear(3,15); d.clear(4,14);
  // flag pick "1" claimed
  d.vline(26,1,11,'#C89058'); d.poly([[27,1],[31,3],[27,5]],'#F06A90'); d.px(28,3,W);
  d.outline(K);
  // crumbs
  d.px(2,29,Sp2); d.px(5,30,Sp2);
};
A['momonga:s2']=d=>{ // Cutest-Ever crown: pink crown, heart gem, ribbon "No.1", sparkles
  const P='#F8A8C8',P2='#E07AA8',P3='#FFD8E8',Au='#F8D048',Au2='#D0A030',R='#F04070',W='#FFFFFF',Bl='#80C8F0',K='#5A2A3A';
  // crown body
  d.poly([[4,22],[4,9],[10,16],[16,5],[22,16],[28,9],[28,22]],P);
  d.poly([[4,22],[4,12],[7,15],[7,22]],P3);
  d.poly([[22,16],[28,9],[28,22],[24,22]],P2);
  d.rect(4,20,25,5,Au); d.hline(4,28,20,'#FFF0A0'); d.hline(4,28,24,Au2);
  for(let x=6;x<28;x+=4) d.px(x,22,W);
  // tip balls
  d.circ(4,8,2,Au); d.circ(16,4,2,Au); d.circ(28,8,2,Au); d.px(15,3,W); d.px(3,7,W); d.px(27,7,W);
  // heart gem
  d.stamp(12,11,['.rr.rr.','rrrrrrr','rWrrrrr','.rrrrr.','..rrr..','...r...'],{r:R,W:W});
  d.px(8,17,Bl); d.px(24,17,Bl);
  // ribbon sash with "1"
  d.poly([[10,25],[22,25],[24,30],[19,28],[16,31],[13,28],[8,30]],'#80C8F0'); d.stamp(15,26,['.w','ww','.w'],{w:W});
  d.outline(K);
  sparkle(d,2,2,'#FFE070'); d.stamp(28,13,['.p.','pWp','.p.'],{p:P,W:W});
};
A['momonga:c0']=d=>{ // treetop glide spot: tall trunks, high branch platform, dotted glide path
  d.grad(0,0,64,30,['#B8E4F4','#C8ECF6','#D8F2F0','#E4F6E8']);
  cloud(d,30,5,5,'#FFFFFF');
  // distant tree line
  for(let x=-3;x<68;x+=6) d.circ(x,26,5,'#8ACC88'); 
  // ground grass
  d.rect(0,30,64,10,'#7CC860'); d.rect(0,30,64,1,'#5EAA4A'); for(let i=0;i<20;i++) d.px(d.ri(0,63),d.ri(32,39),'#9ADC7A');
  for(let x=2;x<64;x+=5) d.stamp(x,37,['g.g','.g.'],{g:'#5EAA4A'});
  // big tree right with platform
  const T='#8A5A3A',T2='#6A4028',T3='#A87048';
  d.rect(50,4,7,27,T); d.vline(50,4,30,T3); d.vline(56,4,30,T2); d.poly([[48,31],[59,31],[57,28],[50,28]],T2);
  d.circ(53,4,9,'#4AA050'); d.circ(46,6,6,'#5AB85A'); d.circ(60,8,6,'#3E8E46'); d.circ(52,1,6,'#6ACC64');
  // branch platform
  d.rect(36,12,15,2,T); d.hline(36,50,12,T3); d.rect(37,14,2,3,T2);
  d.rect(37,10,2,2,'#F06A90'); // tiny flag (start line)
  d.vline(37,8,11,'#6A4028'); d.poly([[38,8],[41,9],[38,10]],'#F06A90');
  // second smaller tree center
  d.rect(30,16,3,15,T); d.circ(31,14,5,'#5AB85A'); d.circ(29,12,3,'#7ACC6A');
  // dotted glide path from platform down to left ground
  for(let i=0;i<9;i++){const t=i/8, x=35-t*13, y=13+t*t*10; d.rect(x,y,2,1,'#F06A90');}
  // landing sparkle + star stickers for praise
  sparkle(d,24,22,'#FFE070'); heart(d,42,22,'#F06A90'); heart(d,26,6,'#F8A8C8');
  // falling leaves
  for(const [x,y] of [[44,18],[60,20],[22,10]]) d.stamp(x,y,['gg','.g'],{g:'#4AA050'});
};
A['momonga:c1']=d=>{ // photo spot street: city, heart neon frame, camera on tripod, balloons
  d.grad(0,0,64,24,['#F8C8D8','#F8D8E0','#FCE6E8']);
  // buildings pastel
  const bl=[[0,6,12,'#C8B8E8'],[6,8,16,'#F0C8A0'],[14,7,10,'#A8D8E8'],[50,8,15,'#B8E0C0'],[57,7,11,'#F8B8C8']];
  for(const [x,w,h,c] of bl){d.rect(x,24-h,w,h,c); for(let yy=26-h;yy<22;yy+=3) for(let xx=x+1;xx<x+w-1;xx+=2) d.px(xx,yy,'#FFFFFF');}
  // sidewalk + road
  d.rect(0,24,64,12,'#E8DCD4'); for(let x=0;x<64;x+=6) d.vline(x,24,35,'#D4C6BC'); d.hline(0,63,30,'#D4C6BC');
  d.rect(0,36,64,4,'#7A7488'); for(let x=2;x<64;x+=8) d.hline(x,x+3,38,'#F8F0D0');
  // shop facade center with awning
  d.rect(22,6,28,18,'#FFF4EC'); for(let x=22;x<50;x+=4) d.rect(x,6,2,3,'#F06A90'); d.rect(22,6,28,1,'#C84A70');
  for(let x=22;x<50;x+=2) d.px(x,9,x%4?'#F06A90':'#FFFFFF');
  // big neon heart photo frame
  const N='#FF5A9A',N2='#FFC0DC';
  d.stamp(28,10,['..nnnn....nnnn..','.n....n..n....n.','n......nn......n','n..............n','n..............n','.n............n.','..n..........n..','...n........n...','....n......n....','.....n....n.....','......n..n......','.......nn.......'],{n:N});
  d.vline(35,22,24,'#8A8A9A'); d.vline(36,22,24,'#8A8A9A'); d.rect(33,24,4,1,'#6A6A7A');
  for(const [x,y] of [[28,11],[44,11],[36,21]]) d.px(x,y,N2);
  // camera on tripod
  d.line(56,33,53,26,'#4A4A5A'); d.line(56,33,59,26,'#4A4A5A'); d.vline(56,26,33,'#4A4A5A');
  d.rect(52,21,9,5,'#3A3A4A'); d.rect(54,20,3,1,'#3A3A4A'); d.circ(56,23,1.5,'#88C8F0'); d.px(55,22,'#FFFFFF'); d.px(59,21,'#F8D048');
  // flash burst
  sparkle(d,60,16,'#FFF4A0');
  // balloons
  for(const [x,y,c] of [[45,13,'#F8A8C8'],[48,10,'#A8D8F8'],[50,14,'#F8E080']]){d.ell(x,y,2,3,c); d.px(x-1,y-2,'#FFFFFF'); d.line(x,y+3,47,23,'#B0A0A0');}
  // photos scattered on ground (100 photos of me!)
  for(const [x,y] of [[26,31],[31,33],[40,32],[45,29]]){d.rect(x,y,4,3,'#FFFFFF'); d.rect(x+1,y,2,2,'#F8D8E0'); d.px(x+2,y+1,'#3A3030');}
};
A['momonga:c2']=d=>{ // center stage night: red curtains, spotlight beams, star, fans with lightsticks
  d.rect(0,0,64,40,'#1A0E2A');
  d.grad(0,0,64,26,['#140A24','#1E1236','#2A1A48']);
  // curtains
  const C='#B82848',C2='#8A1A34',C3='#E04A68';
  d.rect(0,0,64,4,C2); for(let x=0;x<64;x+=4) d.ell(x+2,4,2,1,C);
  for(let x=0;x<8;x+=2){d.vline(x,0,30,x%4?C:C2);} d.vline(8,4,26,C3);
  for(let x=56;x<64;x+=2){d.vline(x,0,30,x%4?C:C2);} d.vline(55,4,26,C3);
  // spotlight beams converging on left stage area (where pet stands)
  const B='#4A3A6A',B2='#6A5A8A';
  d.poly([[26,0],[30,0],[22,30],[8,30]],B); d.poly([[50,0],[54,0],[24,30],[14,30]],B);
  d.poly([[27,0],[29,0],[19,30],[12,30]],B2);
  // stage floor
  d.rect(0,30,64,10,'#6A4A3A'); d.hline(0,63,30,'#A87A50'); for(let y=33;y<40;y+=3) d.hline(0,63,y,'#5A3A2E');
  d.ell(15,32,10,2,'#F8E8A0'); d.ell(15,32,7,1,'#FFF8D8'); // spotlight pool
  // big star backdrop
  const pts=[]; for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5, r=i%2?4:9; pts.push([42+Math.cos(a)*r,14+Math.sin(a)*r]);} d.poly(pts,'#F8D048');
  const pts2=[]; for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5, r=i%2?2:5; pts2.push([42+Math.cos(a)*r,14+Math.sin(a)*r]);} d.poly(pts2,'#FFF0A0');
  for(let x=32;x<54;x+=3) d.px(x,26,'#FFE070'); // marquee bulbs
  // lamp rigs
  for(const x of [28,52]) d.rect(x-1,0,4,2,'#3A3A4A');
  // audience heads + lightsticks (front, right)
  for(let x=30;x<56;x+=5){d.ell(x,39,2,2,'#140A1E'); d.vline(x+2,34,37,'#8A8A9A'); d.rect(x+1,32,3,2,x%10?'#F8A8C8':'#80E0F0');}
  heart(d,37,6,'#F8A8C8'); heart(d,49,24,'#F8A8C8'); twinkle(d,20,6,'#FFE070');
};
// ===== MAGGIE SIMPSON =====
A['maggie:s0']=d=>{ // spare red pacifier
  const R='#E83A3A',R2='#B82828',R3='#FF8080',Y='#F8E8B0',Y2='#E0C880',W='#FFFFFF',K='#3A1A1A';
  // ring handle top
  d.ring(16,7,5,R); d.ring(16,7,4,R); d.ring(16,7,5.6,R2); d.px(13,4,R3); d.px(12,5,R3);
  // shield
  d.ell(16,17,12,6,R); d.ell(16,18,12,5,R2); d.ell(16,16,11,4,R); d.ell(11,14,4,1,R3);
  d.circ(6,17,1,'#7A1A1A'); d.circ(26,17,1,'#7A1A1A'); // air holes
  // button center
  d.circ(16,16,3,R2); d.circ(16,15,2,R); d.px(15,14,R3);
  // nipple bottom
  d.ell(16,26,3,4,Y); d.ell(17,27,2,3,Y2); d.px(15,24,W); d.rect(14,22,5,2,Y);
  d.outline(K);
  // "suck" motion marks and spare tag
  d.stamp(26,25,['.b.','bbb','.b.'],{b:'#90D0F0'}); d.stamp(2,26,['b.b','.b.'],{b:'#90D0F0'});
};
A['maggie:s1']=d=>{ // big new blue bow
  const B='#4A9AE8',B2='#2A70C0',B3='#9ACCF8',W='#FFFFFF',K='#1A2A4A';
  // loops
  d.poly([[16,14],[3,5],[1,10],[2,20],[5,23],[16,17]],B);
  d.poly([[16,14],[29,5],[31,10],[30,20],[27,23],[16,17]],B);
  d.poly([[16,15],[5,9],[4,18],[16,16]],B2); d.poly([[16,15],[27,9],[28,18],[16,16]],B2);
  d.line(3,7,9,10,B3); d.line(29,7,23,10,B3); d.px(3,10,W);
  // tails
  d.poly([[14,17],[9,29],[12,28],[13,31],[16,19]],B); d.poly([[18,17],[23,29],[20,28],[19,31],[16,19]],B);
  d.line(14,19,11,27,B2); d.line(18,19,21,27,B2);
  // knot
  d.ell(16,16,3,4,B); d.ell(16,16,2,3,B3); d.px(15,14,W);
  // polka dots
  for(const [x,y] of [[7,14],[25,14],[10,20],[22,20],[6,6],[26,6]]) d.px(x,y,W);
  d.outline(K);
  // giggle sparkles + amusement park ticket stub
  d.stamp(27,25,['yyyy','y..y','yyyy'],{y:'#F8D048'}); sparkle(d,4,27,'#F8D048');
};
A['maggie:s2']=d=>{ // cassette tape "my first word"
  const Bd='#5A5A6A',Bd2='#3E3E4C',Bd3='#7A7A8C',L='#FFF4D0',L2='#F0A0A0',Rl='#2A2A30',W='#FFFFFF',Tp='#6A3A2A',K='#1A1A22';
  d.rect(2,6,28,20,Bd); d.hline(2,29,6,Bd3); d.vline(2,7,25,Bd3); d.hline(2,29,25,Bd2); d.vline(29,7,25,Bd2);
  for(const [x,y] of [[3,7],[28,7],[3,24],[28,24]]) d.px(x,y,'#A8A8B8');
  // label
  d.rect(5,8,22,12,L); d.rect(5,8,22,3,L2); d.hline(5,26,11,'#E07A7A');
  // heart + squiggle on label (first word)
  heart(d,7,8,'#FFFFFF'); d.stamp(11,9,['k.k.k.k.k','.k.k.k.k.'],{k:'#C84040'});
  // window with reels
  d.rect(9,13,14,6,Rl); d.rect(10,14,12,4,'#4A4A58');
  d.circ(12,16,2,Tp); d.circ(20,16,2,Tp); d.circ(12,16,1,W); d.circ(20,16,1,W); d.px(12,16,K); d.px(20,16,K);
  d.rect(14,15,4,3,Tp);
  // bottom trapezoid
  d.poly([[8,26],[10,21],[22,21],[24,26]],Bd2); for(const x of [11,15,17,21]) d.px(x,24,K);
  d.outline(K);
  // pacifier sticker
  d.circ(25,27,2,'#E83A3A'); d.px(25,29,'#F8E8B0'); d.px(24,26,'#FF8080');
  // sound waves
  d.stamp(26,1,['.n','n.','.n'],{n:'#90D0F0'}); d.stamp(29,0,['.n','n.','n.','.n'],{n:'#90D0F0'});
};
A['maggie:c0']=d=>{ // Ayn Rand School for Tots: daycare playroom, many pacifiers (babies on my side)
  const Wl='#F8E8B0',Wl2='#F0D890',Fl='#90C8D8',Fl2='#78B0C4';
  d.rect(0,0,64,27,Wl); for(let x=0;x<64;x+=6) d.vline(x,0,26,Wl2);
  d.rect(0,22,64,5,'#E8B8A0'); d.hline(0,63,22,'#C89078');
  d.rect(0,27,64,13,Fl); for(let y=27;y<40;y+=4) for(let x=((y/4)%2)*4;x<64;x+=8) d.rect(x,y,4,4,Fl2);
  // alphabet blocks pile right
  const blk=(x,y,c,ch)=>{d.rect(x,y,6,6,c); d.frame(x,y,6,6,'#3A3A4A'); d.stamp(x+1,y+1,ch,{k:'#FFFFFF'})};
  blk(48,30,'#E8484A',['.kk.','k..k','kkkk','k..k']); blk(54,30,'#4A9AE8',['kkk.','k..k','kkk.','kkkk']); blk(51,24,'#F8C040',['.kkk','k...','k...','.kkk']);
  // baby gate / crib
  d.rect(26,14,18,1,'#C89058'); d.rect(26,28,18,1,'#C89058'); for(let x=26;x<44;x+=3) d.vline(x,14,28,'#C89058'); d.rect(26,13,2,17,'#A87040'); d.rect(42,13,2,17,'#A87040');
  // pacifiers in crib (the babies' gang)
  for(const [x,y] of [[30,24],[35,23],[39,25]]){d.circ(x,y,1.5,'#E83A3A'); d.px(x,y+2,'#F8E8B0');}
  // window
  d.rect(46,4,14,10,'#A8D8F0'); d.frame(46,4,14,10,'#FFFFFF'); d.vline(53,4,13,'#FFFFFF'); d.circ(50,7,1,'#FFF4A0');
  // kids drawing on wall
  d.rect(6,4,9,8,'#FFFFFF'); d.circ(10,8,2,'#F8D048'); d.px(9,7,'#3A3A3A'); d.px(11,7,'#3A3A3A');
  d.rect(18,5,6,7,'#FFFFFF'); d.stamp(19,6,['.bb.','bbbb','.bb.','b..b'],{b:'#4A9AE8'});
  // stuffed teddy bear
  d.circ(59,21,3,'#C8905A'); d.circ(57,18,1,'#C8905A'); d.circ(61,18,1,'#C8905A'); d.px(58,20,'#3A2A1A'); d.px(60,20,'#3A2A1A'); d.ell(59,25,3,2,'#C8905A');
  // baby bottle on floor
  d.rect(36,33,3,5,'#FFFFFF'); d.rect(36,35,3,3,'#FFF0C8'); d.rect(36,32,3,1,'#F8A8C8'); d.px(37,31,'#F8E8B0');
  // ball
  d.circ(28,35,2,'#E8484A'); d.hline(26,30,35,'#FFFFFF');
};
A['maggie:c1']=d=>{ // Springfield Zoo: bear on rock behind fence, staring
  d.grad(0,0,64,18,['#8AD0F0','#A8DCF4','#C4E8F6']);
  cloud(d,12,4,4,'#FFFFFF'); cloud(d,46,3,5,'#FFFFFF');
  // trees background
  for(let x=-2;x<66;x+=8) d.circ(x,17,6,'#5AA050'); for(let x=2;x<66;x+=8) d.circ(x,19,5,'#4A8C44');
  d.rect(0,22,64,18,'#9AD070'); for(let i=0;i<20;i++) d.px(d.ri(0,63),d.ri(24,39),'#B0DC88');
  // enclosure: rocks + pool behind fence (right)
  d.ell(46,24,16,6,'#A89C90'); d.ell(44,22,12,5,'#C0B4A8'); d.ell(52,27,8,3,'#8A7E74');
  d.ell(36,28,6,2,'#60A8D8'); d.hline(33,38,27,'#A0D4F0');
  // bear
  const Br='#8A5A30',Br2='#6A4020',Br3='#B07A48';
  d.ell(48,18,6,5,Br); d.circ(44,13,1.5,Br); d.circ(52,13,1.5,Br); d.ell(48,15,4,3,Br);
  d.ell(48,17,2,1,Br3); d.px(48,16,'#2A1A10'); d.px(46,14,'#1A1010'); d.px(50,14,'#1A1010'); d.px(46,13,'#FFFFFF');
  d.ell(48,22,5,2,Br2); d.rect(44,22,2,3,Br2); d.rect(50,22,2,3,Br2);
  // staring contest marks (sweat drop for bear)
  d.stamp(53,10,['.b','bb'],{b:'#80C8F0'});
  // fence
  for(let x=24;x<64;x+=3) d.vline(x,26,33,'#6A6A7A'); d.hline(24,63,27,'#8A8A9A'); d.hline(24,63,32,'#8A8A9A');
  // zoo sign
  d.vline(26,16,26,'#7A5030'); d.rect(22,12,10,6,'#3E8A4A'); d.frame(22,12,10,6,'#2A5A32'); d.stamp(25,13,['b.b.b','.....','.bbb.','.bbb.'],{b:'#FFFFFF'});
  // path
  d.poly([[0,35],[64,33],[64,40],[0,40]],'#E8D0A0'); d.hline(0,63,34,'#D4B880');
  // dropped pacifier on path
  d.circ(40,37,1.5,'#E83A3A'); d.px(42,37,'#F8E8B0');
  // peanuts bag
  d.rect(56,35,4,4,'#F8E8B0'); d.hline(56,59,35,'#E83A3A');
};
A['maggie:c2']=d=>{ // Moon crib: space, moon surface, crib on moon, Earth with pacifier, zZ
  d.rect(0,0,64,40,'#0E0A26'); d.grad(0,0,64,28,['#0A0820','#120E30','#1A1640']);
  stars(d,40,0,26,['#FFFFFF','#B8C8FF','#FFF4C0']);
  // Earth top-left-ish (avoid pet), with tiny pacifier floating
  d.circ(14,8,5,'#3A7AD8'); d.ell(12,6,2,2,'#5AB860'); d.ell(16,10,2,1,'#5AB860'); d.px(16,5,'#FFFFFF'); d.px(11,9,'#FFFFFF');
  d.circ(22,4,1,'#E83A3A'); d.px(23,5,'#F8E8B0');
  // moon surface (big curved ground)
  const M='#C8C8D4',M2='#A8A8B8',M3='#E4E4EE';
  d.ell(32,52,46,24,M); d.ell(32,52,46,23,M); for(let x=0;x<64;x++){ for(let y=26;y<40;y++) if(!d.get(x,y)||d.get(x,y)==='#0E0A26') {} }
  d.rect(0,32,64,8,M);
  d.ell(30,30,40,2,M3);
  for(const [x,y,r] of [[28,34,3],[52,36,2],[10,37,2],[40,31,1.5]]){d.ell(x,y,r+1,r/2+.5,M2); d.ell(x,y-0.5,r,r/2,'#B8B8C6');}
  // crib on the moon (right)
  const Wd='#F4C8D8',Wd2='#D89AB0';
  d.rect(36,23,22,2,Wd); d.rect(36,30,22,2,Wd); for(let x=36;x<58;x+=3) d.vline(x,23,31,Wd2);
  d.rect(35,20,2,14,Wd); d.rect(57,20,2,14,Wd); d.circ(36,19,1,Wd); d.circ(58,19,1,Wd);
  d.rect(38,27,18,3,'#90D0F0'); d.ell(42,26,3,1,'#FFFFFF'); // blanket & pillow
  // crescent mobile above crib
  d.vline(47,10,14,'#B8B8C6'); d.hline(43,51,14,'#B8B8C6'); d.stamp(42,15,['y'],{y:'#F8E070'}); d.stamp(50,15,['y'],{y:'#F8E070'}); d.circ(47,16,1,'#F8E070');
  // zZ
  d.stamp(52,4,['zzzz','..z.','.z..','zzzz'],{z:'#FFFFFF'}); d.stamp(57,1,['zzz','.z.','zzz'],{z:'#C8D0F0'});
  // tiny flag
  d.vline(60,26,33,'#B8B8C6'); d.rect(61,26,3,2,'#90D0F0');
};
// ===== ANKYLOSAURUS =====
A['ankylo:s0']=d=>{ // knitted tail-club cozy with pom-pom
  const K1='#F08A8A',K2='#D06A6A',K3='#FFB8B0',S='#F8E8B0',S2='#E0C880',P='#FFFFFF',K='#4A2A2A';
  // cozy body: rounded club shape with two side lobes
  d.ell(16,19,11,9,K1); d.ell(6,19,4,5,K1); d.ell(26,19,4,5,K1);
  // knit rib texture
  for(let y=11;y<29;y++) for(let x=0;x<32;x++) if(d.get(x,y)===K1){ if((x+Math.floor(y/2))%3===0) d.px(x,y,K2); }
  // cream stripes
  for(const y of [16,22]) for(let x=0;x<32;x++) if(d.get(x,y)) {d.px(x,y,S); if(d.get(x,y+1)) d.px(x,y+1,(x%2)?S:S2);}
  // highlight
  d.ell(11,14,3,1,K3);
  // ribbed cuff (opening for tail)
  d.rect(12,5,8,6,K2); for(let x=12;x<20;x+=2) d.vline(x,5,10,K1); d.hline(12,19,5,K3);
  // the tail going in (ankylo armor)
  d.poly([[12,5],[19,5],[9,0],[0,0],[0,3]],'#A88858'); d.poly([[15,5],[19,5],[9,0],[5,0]],'#6A5030'); for(const [x,y] of [[3,1],[7,2],[11,3]]){d.px(x,y,'#E8D8B0'); d.px(x+1,y,'#E8D8B0');}
  // pom-pom
  d.circ(16,29,2,P); d.px(15,28,'#F0F0F0');
  d.outline(K);
  // indoor tag
  d.rect(25,6,5,4,'#90D0F0'); d.px(27,8,P); d.line(21,8,25,8,'#B0A0A0');
};
A['ankylo:s1']=d=>{ // Honorary Turtle membership card
  const C='#E8F4D0',C2='#C8DCA8',Bd='#4AA060',Bd2='#2E7A44',Tg='#6AC070',Tg2='#3E8A48',Ts='#A8D870',Sk='#F8D898',W='#FFFFFF',K='#1E3A24';
  d.rect(1,6,30,20,C); d.rect(1,6,30,4,Bd); d.hline(1,30,9,Bd2); d.hline(1,30,25,C2);
  for(let x=3;x<30;x+=3) d.px(x,7,Ts);
  // photo area: turtle portrait
  d.rect(3,12,11,11,'#BFE8F8'); d.frame(3,12,11,11,Bd2);
  d.ell(8,18,4,3,Tg); d.stamp(6,16,['.tt.','t..t','.tt.'],{t:Tg2}); d.ell(12,18,1,1,Sk); d.px(12,17,K); d.rect(6,21,2,1,Sk); d.rect(9,21,2,1,Sk);
  // text lines
  for(const y of [13,16,19]) d.hline(16,28,y,'#8AA87A'); d.hline(16,22,22,'#8AA87A');
  // shell stamp seal
  d.circ(25,20,3,'#E85A4A'); d.stamp(23,19,['w.w.w','.w.w.'],{w:W});
  // hole punch / lanyard
  d.rect(14,4,4,3,'#C8C8D0');
  d.outline(K);
  sparkle(d,29,3,'#FFE070');
};
A['ankylo:s2']=d=>{ // Cretaceous armor medal: shield w/ armor plates + ribbon
  const Au='#F2C24A',Au2='#C08A28',Au3='#FFE890',Rb='#3A8AD0',Rb2='#2A64A8',Rr='#D84040',Br='#A88858',Br2='#6A5030',Br3='#E8D8B0',K='#2A1A10';
  // ribbon V
  d.poly([[8,0],[14,0],[18,12],[13,13]],Rb); d.poly([[24,0],[18,0],[14,12],[19,13]],Rb2); d.vline(10,0,4,Rr); d.vline(21,0,4,Rr);
  // gold disc
  d.circ(16,20,10,Au); d.circ(16,20,8,Au2); d.circ(16,20,7,Au);
  for(let i=0;i<16;i++){const a=i*Math.PI/8; d.px(16+Math.cos(a)*9.3,20+Math.sin(a)*9.3,Au3);}
  // inner shield with ankylo armor pattern
  d.poly([[11,15],[21,15],[21,21],[16,26],[11,21]],Br); d.poly([[11,15],[16,15],[16,26],[11,21]],'#B89868');
  for(const [x,y] of [[13,17],[17,17],[15,20],[19,20],[13,21+0],[16,23]]){d.px(x,y,Br3); d.px(x+1,y+1,Br2);} 
  // broken tooth (T. rex couldn't bite)
  d.stamp(23,24,['w.','ww','w.'],{w:'#FFFFFF'});
  d.ell(12,14,2,1,Au3);
  d.outline(K);
  sparkle(d,4,22,'#FFE890'); d.px(28,12,'#FFE890');
};
A['ankylo:c0']=d=>{ // little side street (alley): walls, houses, potted plants, big slow footprints
  d.grad(0,0,64,12,['#A8D8F4','#BCE2F6','#D0EAF6']);
  // houses on right side receding
  d.rect(30,4,34,22,'#F0DCC0'); d.poly([[28,5],[46,-1],[64,5]],'#C8584A'); d.rect(28,4,36,2,'#A84038');
  d.rect(48,9,6,7,'#9AC8E8'); d.frame(48,9,6,7,'#FFFFFF'); d.rect(36,10,5,5,'#9AC8E8'); d.frame(36,10,5,5,'#FFFFFF');
  d.rect(56,16,6,10,'#7A5A3A'); d.px(57,21,'#F2C24A');
  // brick wall left-back
  d.rect(0,10,30,16,'#C88A6A'); for(let y=10;y<26;y+=3){d.hline(0,29,y,'#A86A4A'); for(let x=((y/3)%2)*3;x<30;x+=6) d.vline(x,y,y+2,'#A86A4A');}
  d.rect(0,9,30,1,'#8A5A40');
  // utility pole + wires
  d.rect(24,0,2,26,'#7A6A5A'); d.hline(21,28,3,'#7A6A5A'); d.line(0,6,24,3,'#3A3A3A'); d.line(26,3,63,8,'#3A3A3A');
  // asphalt lane with center (narrow)
  d.rect(0,26,64,14,'#A8A4A0'); d.hline(0,63,26,'#8A8680');
  for(let x=0;x<64;x+=4) d.px(x,30+(x%3),'#989490');
  // gutter
  d.hline(0,63,38,'#8A8680');
  // potted plants by the house
  for(const x of [33,43]){d.rect(x,22,4,4,'#C8704A'); d.circ(x+2,20,2,'#5AAA50'); d.px(x+1,19,'#F8A8C8');}
  // big round slow footprints trailing to right
  for(const [x,y] of [[30,33],[37,30],[44,34],[51,31],[58,35]]){d.ell(x,y,2,1,'#8A8680'); d.px(x-2,y-2,'#8A8680'); d.px(x,y-2,'#8A8680'); d.px(x+2,y-2,'#8A8680');}
  // snail (slow buddy)
  d.stamp(50,24,['.ss.','s.ss','.ss.','bbbbb'],{s:'#C89058',b:'#E8D0A0'});
  // cat on wall
  d.stamp(8,6,['k.k.','kkk.','kkkk','.kkk'],{k:'#3A3A44'});
};
A['ankylo:c1']=d=>{ // medieval armor museum: stone hall, knight armor on stand, banners, display rope
  const St='#9A92A0',St2='#847C8C',St3='#B0A8B6';
  d.rect(0,0,64,30,St); for(let y=0;y<30;y+=4){d.hline(0,63,y,St2); for(let x=((y/4)%2)*4;x<64;x+=8) d.vline(x,y,y+3,St2);} 
  // floor (red carpet + wood)
  d.rect(0,30,64,10,'#8A6040'); for(let y=32;y<40;y+=3) d.hline(0,63,y,'#6A4630'); d.hline(0,63,30,'#5A3A26');
  d.poly([[26,40],[60,40],[54,30],[34,30]],'#A82A30'); d.hline(36,52,32,'#D8A040');
  // arched window
  d.rect(30,4,8,12,'#BCD8F0'); d.circ(34,4,4,'#BCD8F0'); d.vline(34,0,15,'#5A5060'); d.hline(30,37,9,'#5A5060');
  // banners
  for(const [x,c] of [[24,'#C83030'],[56,'#3A5AB0']]){d.rect(x,2,6,12,c); d.poly([[x,14],[x+3,11],[x+6,14],[x+6,16],[x,16]],c); d.clear(x+3,15); d.px(x+3,15,St); d.stamp(x+1,5,['.y..','yyyy','.y..'].map(r=>r.slice(0,4)),{y:'#F2C24A'});}
  // knight armor on pedestal (center-right)
  const M='#C8D0DC',M2='#8A94A4',M3='#F0F4FA';
  d.rect(42,26,10,4,'#5A5060'); d.hline(42,51,26,'#7A7082');
  d.ell(47,8,3,3,M); d.rect(44,8,7,3,M); d.hline(45,49,9,'#2A2A34'); d.px(47,4,'#C83030'); d.vline(47,3,5,'#C83030'); // helmet w/ plume
  d.rect(43,12,9,8,M); d.rect(43,12,3,8,M3); d.rect(49,12,3,8,M2); d.hline(43,51,16,M2);
  d.rect(41,12,2,7,M2); d.rect(52,12,2,7,M2); // arms
  d.rect(44,20,3,6,M); d.rect(48,20,3,6,M2);
  d.vline(55,4,26,'#8A6A40'); d.poly([[54,4],[56,4],[55,1]],M3); // spear
  // little plaque
  d.rect(44,27,6,2,'#D8B860');
  // velvet rope posts
  for(const x of [36,60]){d.vline(x,24,30,'#D8B860'); d.px(x,23,'#F2D880');} d.line(36,25,48,28,'#A82A30'); d.line(48,28,60,25,'#A82A30');
  // shield on wall (left, above pet area)
  d.poly([[9,3],[17,3],[17,9],[13,13],[9,9]],'#3A5AB0'); d.vline(13,3,12,'#F2C24A'); d.hline(9,17,6,'#F2C24A');
};
A['ankylo:c2']=d=>{ // meteor impact site in desert: crater, smoke, glowing chunk, cracked ground, sunset sky
  d.grad(0,0,64,22,['#F0A060','#F4B470','#F8C888','#FCD8A0']);
  // meteor trails in sky
  d.line(60,0,46,10,'#FFF0C0'); d.line(61,1,47,11,'#F8A050');
  d.circ(52,6,1,'#FFFFFF');
  // mesas
  d.poly([[0,22],[2,14],[12,14],[14,22]],'#C0704A'); d.rect(2,14,10,1,'#D8885A'); d.poly([[54,22],[56,16],[64,16],[64,22]],'#B06040');
  // desert ground
  d.rect(0,22,64,18,'#E8B878'); for(let y=24;y<40;y+=4) for(let x=(y%8);x<64;x+=9) d.hline(x,x+2,y,'#D8A060');
  // crater
  d.ell(42,30,17,6,'#C08850'); d.ell(42,31,14,4,'#8A5A38'); d.ell(42,32,10,2.5,'#6A4028');
  d.ell(42,25,17,1,'#F0C890');
  // glowing meteorite in crater
  d.circ(42,30,4,'#4A3A3A'); d.circ(41,29,2,'#6A5A5A'); d.px(44,31,'#F86A30'); d.px(39,31,'#F86A30'); d.px(43,28,'#FFB040');
  // smoke puffs
  for(const [x,y,r] of [[44,22,3],[47,17,2.5],[44,12,2],[49,9,1.5]]) {d.circ(x,y,r,'#B8A8A0'); d.px(x-1,y-1,'#D8CCC4');}
  // cracks radiating
  for(const [a,b] of [[24,34],[26,38],[60,36],[62,28],[34,39]]) d.line(42,31,a,b,'#B07A48');
  // debris rocks
  for(const [x,y] of [[25,28],[58,26],[30,37],[56,38]]){d.rect(x,y,2,2,'#7A5A4A'); d.px(x,y,'#9A7A6A');}
  // cactus
  d.rect(60,26,2,7,'#4A9A50'); d.rect(58,28,2,2,'#4A9A50'); d.vline(58,26,28,'#4A9A50'); d.vline(61,26,32,'#3A7A40');
  // STOMP dust ring near center-left
  d.stamp(23,30,['.d.d','d...','.d.d'],{d:'#FFF0D0'});
};
// ===== BOKGIL =====
A['bokgil:s0']=d=>{ // ID-style portrait of a dog with tongue out to the right
  const Fr='#C89A60',Fr2='#A87A40',Bg='#CDE6F4',F='#8A7C76',F2='#6E625E',F3='#A89C96',W='#FFFFFF',W2='#ECE2DC',N='#1A1414',T='#F4A0B0',T2='#E07A90',K='#3A2A20';
  d.rect(2,1,28,30,Fr); d.rect(4,3,24,26,Bg); d.hline(2,29,1,'#E0B880'); d.hline(2,29,30,Fr2);
  // dog head
  d.ell(16,17,9,8,F); d.ell(16,19,6,5,W); d.ell(16,15,8,5,F);
  d.ell(7,12,3,6,F2); d.ell(25,12,3,6,F2); // floppy ears
  d.ell(12,11,2,1,F3);
  d.rect(9,16,2,2,N); d.rect(21,16,2,2,N); d.px(9,16,W); d.px(21,16,W); // eyes (aloof stare)
  d.hline(8,11,14,F2); d.hline(20,23,14,F2);
  d.ell(16,19,2,1,N); d.px(15,19,'#4A4040');
  d.line(16,21,14,22,K); d.line(16,21,18,22,K);
  // tongue out to the right
  d.rect(18,22,3,4,T); d.px(18,25,T2); d.vline(19,23,24,T2); d.rect(21,23,1,2,T);
  // shoulders / chest
  d.ell(16,28,10,3,W2); d.ell(16,28,10,3,W2);
  d.rect(4,26,24,3,W2);
  d.outline(K);
  // corner stamp
  d.stamp(23,3,['.r.','rrr','.r.'],{r:'#E85A5A'});
};
A['bokgil:s1']=d=>{ // cool marble tile, gray veins, frost sparkles, paw imprint
  const M='#F2F4F8',M2='#DCE0EA',M3='#C4CAD8',V='#9AA4B8',V2='#B8C0D0',E='#A8B0C4',K='#5A6478',Ic='#A8E0F8';
  // tile in slight perspective (rhombus top + thickness)
  d.poly([[16,4],[31,13],[16,22],[1,13]],M);
  d.poly([[1,13],[16,22],[16,27],[1,18]],M3); d.poly([[16,22],[31,13],[31,18],[16,27]],E);
  // veins
  d.line(6,12,12,14,V); d.line(12,14,16,11,V); d.line(16,11,22,13,V2); d.line(22,13,27,12,V2);
  d.line(10,9,14,8,V2); d.line(18,17,24,16,V); d.line(14,18,18,17,V2);
  d.poly([[16,5],[29,13],[24,16],[16,9]],M2);
  d.line(16,6,28,13,'#FFFFFF');
  // cool frost marks
  d.outline(K);
  d.stamp(3,1,['.i.','iWi','.i.'],{i:Ic,W:'#FFFFFF'}); d.stamp(26,3,['.i.','iWi','.i.'],{i:Ic,W:'#FFFFFF'});
  d.stamp(12,27,['i.i.i'],{i:Ic}); d.px(28,24,Ic);
  // flat paw/fur smudge (sploot mark)
  d.stamp(18,12,['f.f','.f.'],{f:'#B8ACA6'});
};
A['bokgil:s2']=d=>{ // the thing it barked at: an empty jar, lid open, "!" puff of nothing
  const O='#2A2A3A',G1='#D4EEF8',G2='#A8D4E8',G3='#F0FAFF',Lid='#E06A50',Lid2='#B04A38',W='#FFFFFF',Y='#F8E070';
  // jar body (wide, short) lying slightly
  d.rect(8,11,16,3,G2); d.ell(16,21,10,8,G1); d.ell(16,23,9,6,G1); d.ell(18,22,6,6,'#C4E4F2');
  d.vline(9,16,25,G3); d.vline(10,14,18,G3); d.px(11,13,G3);
  d.ell(16,29,8,1,G2);
  // empty-ness: dotted outline of "nothing" inside
  d.stamp(13,18,['.d.d.','d...d','.....','d...d','.d.d.'],{d:'#9AC4D8'});
  // lid tipped on side
  d.ell(26,8,4,2,Lid); d.ell(26,7,4,1,'#F08A70'); d.hline(22,30,9,Lid2);
  d.outline(O);
  // bark lines from left
  d.stamp(0,6,['b..','.b.','..b'],{b:'#6E625E'}); d.stamp(1,13,['bbb'],{b:'#6E625E'});
  d.stamp(15,1,['.y.','.y.','.y.','...','.y.'],{y:Y});
};
A['bokgil:c0']=d=>{ // quiet path: winding dirt path, fields, lone bench, wind lines, blown leaves
  d.grad(0,0,64,18,['#C4E4F4','#D0EAF4','#DCEFF0','#E8F2E4']);
  cloud(d,44,5,4,'#FFFFFF');
  // gentle hills
  d.ell(16,22,28,6,'#B8D890'); d.ell(52,21,22,5,'#A8CC84');
  d.rect(0,22,64,18,'#9CCB78'); for(let y=24;y<40;y+=3) for(let x=(y%6);x<64;x+=11) d.stamp(x,y,['g.g','.g.'],{g:'#86B864'});
  // winding path from left-bottom to right-back
  d.poly([[0,40],[22,40],[30,33],[38,28],[50,24],[58,22],[52,22],[42,24],[32,27],[22,31],[6,36],[0,37]],'#E4D0A4');
  d.line(6,36,22,31,'#CCB488'); d.line(22,31,32,27,'#CCB488');
  for(const [x,y] of [[26,35],[40,27],[14,38]]) d.px(x,y,'#C8B080');
  // lone tree leaning in wind
  d.rect(54,10,2,13,'#7A5A3A'); d.circ(53,9,5,'#6AAA58'); d.circ(57,8,4,'#5A9A4E'); d.circ(52,6,3,'#7ABC66');
  // bench
  d.rect(40,30,10,2,'#A8784A'); d.rect(40,28,10,1,'#A8784A'); d.vline(41,32,34,'#6A4A2A'); d.vline(48,32,34,'#6A4A2A');
  // wind swooshes
  d.hline(26,34,12,'#FFFFFF'); d.px(35,11,'#FFFFFF'); d.hline(30,38,16,'#FFFFFF'); d.px(39,15,'#FFFFFF'); d.hline(18,24,7,'#FFFFFF');
  // blown leaves
  for(const [x,y] of [[38,13],[44,17],[28,9]]) d.stamp(x,y,['ll','.l'],{l:'#E8A040'});
  // little wildflowers
  for(const [x,y,c] of [[34,36,'#F8E070'],[56,33,'#F8A8C8'],[60,37,'#FFFFFF'],[46,37,'#F8E070']]){d.px(x,y,c); d.px(x,y+1,'#5A9A4E');}
};
A['bokgil:c1']=d=>{ // empty beach (different from parasol one): low tide at dusk-blue, rocks, sploot imprint
  d.grad(0,0,64,13,['#F8D8C0','#F8E0C8','#F4E8D4']);
  d.circ(14,11,4,'#FFF2C0');
  d.rect(0,13,64,8,'#6AB4D0'); d.hline(0,63,13,'#4A94B8');
  for(let x=0;x<64;x+=7) d.hline(x,x+3,15+(x%3),'#9AD4E8');
  d.hline(10,18,14,'#FFF0C0'); d.hline(12,16,16,'#FFF0C0');
  // wet sand band + foam curve
  d.rect(0,21,64,5,'#C8B48C'); for(let x=0;x<64;x++) d.px(x,21+Math.round(Math.sin(x/5)),'#FFFFFF');
  d.rect(0,26,64,14,'#E8D6AE'); for(let i=0;i<30;i++) d.px(d.ri(0,63),d.ri(27,39),i%2?'#D8C49A':'#F4E6C4');
  // rocks right
  d.ell(54,20,8,4,'#7A7470'); d.ell(52,18,5,3,'#9A948E'); d.ell(61,22,4,2,'#6A6460'); d.px(50,16,'#B8B2AA');
  // sploot imprint in sand (dog shape flat with legs out)
  d.ell(38,32,5,2,'#BCA67A'); d.line(33,32,30,34,'#BCA67A'); d.line(33,32,30,30,'#BCA67A'); d.line(43,32,46,34,'#BCA67A'); d.line(43,32,46,30,'#BCA67A');
  // paw prints leading to it
  for(const [x,y] of [[26,36],[28,33],[23,38]]) d.stamp(x,y,['p.p','.p.'],{p:'#BCA67A'});
  // driftwood + crab
  d.rect(48,34,10,2,'#A8804E'); d.px(47,33,'#A8804E');
  d.stamp(58,28,['r.r','rrr','.r.'],{r:'#E0604A'});
  // gulls
  d.stamp(36,4,['a.a','.a.'],{a:'#6A6A7A'}); d.stamp(44,7,['a.a','.a.'],{a:'#6A6A7A'});
};
A['bokgil:c2']=d=>{ // dogless snowy peak: big mountain, summit flag, snowfall, bark echo lines
  d.grad(0,0,64,40,['#6A8CC8','#84A2D4','#A0B8DE','#BCCEE8']);
  // far peaks
  d.poly([[0,24],[8,14],[16,22],[24,16],[30,24]],'#9AAED0');
  // main mountain center-right
  d.poly([[18,40],[44,4],[64,30],[64,40]],'#E8EEF8'); d.poly([[44,4],[64,30],[64,40],[48,40],[50,22]],'#C4D0E4');
  d.poly([[44,4],[38,12],[42,11],[46,14],[48,9]],'#FFFFFF');
  for(const [a,b,c,e] of [[36,18,30,26],[50,20,54,28],[42,24,40,32]]) d.line(a,b,c,e,'#A8B8D4');
  // summit flag
  d.vline(44,0,4,'#5A4A3A'); d.poly([[45,0],[50,1],[45,3]],'#E85A5A');
  // snowy foreground ground (left, pet area)
  d.ell(10,40,28,10,'#F4F8FC'); d.rect(0,34,64,6,'#F4F8FC'); d.ell(14,31,14,2,'#FFFFFF');
  // tiny pine trees
  for(const [x,h] of [[25,9],[31,7],[60,6]]){const y=35-h; d.vline(x,33,35,'#6A4A3A'); d.poly([[x,y],[x-4,33],[x+4,33]],'#2E6A4A'); d.poly([[x,y],[x-3,y+h-3],[x,y+h-3]],'#4A8A62'); d.px(x,y,'#FFFFFF'); d.hline(x-1,x+1,y+3,'#FFFFFF'); d.hline(x-3,x+3,33,'#FFFFFF');} 
  // bark echo arcs to empty sky
  for(const r of [3,5,7]) for(let t=-0.7;t<=0.7;t+=0.2) d.px(14+Math.cos(t)*r, 10+Math.sin(t)*r,'#FFFFFF');
  // snow falling
  for(let i=0;i<34;i++) d.px(d.ri(0,63),d.ri(0,33),'#FFFFFF');
  // single bone left in snow
  d.stamp(44,35,['w....w','wwwwww','w....w'],{w:'#D8C8A8'});
};
export default A;
