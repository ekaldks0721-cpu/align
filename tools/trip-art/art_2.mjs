// art_2: bunny, raccoon, pelican, alex, lsp, baymax, hulk, chiikawa, marge, stego, yuni
const A={};
// ---- helpers ----
const cloud=(d,x,y,w,c='#FFFFFF',s=null)=>{d.ell(x,y,w,Math.max(1,w/3),c); d.ell(x-w/3,y-1,w/2.2,Math.max(1,w/4),c); d.ell(x+w/4,y-Math.max(1,w/4),w/3,Math.max(1,w/4),c); if(s) d.hline(Math.round(x-w+2),Math.round(x+w-2),Math.round(y+Math.max(1,w/3)),s)};
const stars=(d,n,x0,x1,y0,y1,cols,big=0)=>{for(let i=0;i<n;i++){const x=d.ri(x0,x1),y=d.ri(y0,y1); d.px(x,y,cols[i%cols.length])} for(let i=0;i<big;i++){const x=d.ri(x0+1,x1-1),y=d.ri(y0+1,y1-1),c=cols[0]; d.px(x,y,c);d.px(x-1,y,c);d.px(x+1,y,c);d.px(x,y-1,c);d.px(x,y+1,c)}};
const twinkle=(d,x,y,c,c2)=>{d.px(x,y,c2||c); d.px(x-1,y,c); d.px(x+1,y,c); d.px(x,y-1,c); d.px(x,y+1,c)};
const tufts=(d,n,x0,x1,y0,y1,c,c2,avoid)=>{for(let i=0;i<n;i++){const x=d.ri(x0,x1),y=d.ri(y0,y1); if(avoid&&x>=avoid[0]&&x<=avoid[1]&&y>=avoid[2]&&y<=avoid[3]) continue; d.px(x,y,c); d.px(x-1,y-1,c2||c); d.px(x+1,y-1,c2||c)}};
const specks=(d,n,x0,x1,y0,y1,cols)=>{for(let i=0;i<n;i++) d.px(d.ri(x0,x1),d.ri(y0,y1),cols[i%cols.length])};
const pine=(d,x,y,h,c1,c2,trunk)=>{ // x center, y = base of foliage
  if(trunk) d.rect(x-1,y,2,2,trunk);
  const tiers=3; for(let k=0;k<tiers;k++){const t=y-h+Math.round(k*h/4), b=Math.round(t+h/2)+(k==2?Math.round(h/4)-(h/2|0)+ (h/2|0):0), bb=k==tiers-1?y:Math.round(t+h/2); const w=Math.max(2,Math.round((h/3.2)*(k+1)/tiers*1.6+1)); d.poly([[x,t],[x+w,bb],[x-w,bb]],c1); d.poly([[x,t],[x+w,bb],[x,bb]],c2)} };
const sun=(d,x,y,r,c,c2)=>{d.circ(x,y,r+1,c2); d.circ(x,y,r,c)};
// ===== bunny =====
A['bunny:s0']=d=>{ // fresh garden carrot with one bite, dirt crumbs
  const O='#4A2A1A', C='#F08A2A', C2='#D06A1A', C3='#FFB45A', L='#5AB040', L2='#3A8A2A', L3='#9ADC6A', P='#FFE0B0', D='#8A5A36';
  // leaves
  d.poly([[19,9],[21,1],[24,8]],L2); d.poly([[21,9],[27,0],[26,9]],L); d.poly([[22,10],[31,4],[27,11]],L2); d.poly([[20,10],[16,2],[22,8]],L);
  d.line(22,9,26,2,L3); d.line(23,10,29,5,L3); d.line(20,8,18,4,L3);
  // carrot body: rounded top + long taper toward lower-left
  d.circ(21,13,5,C); d.poly([[16,10],[25,17],[5,29]],C);
  d.poly([[22,17],[25,15],[8,28]],C2); d.circ(23,15,2,C2);
  d.line(17,10,8,24,C3); d.line(18,10,10,22,C3); d.px(20,9,C3); d.px(19,9,C3);
  // ridges
  for(const [x,y,w] of [[15,15,3],[12,19,3],[10,23,2],[19,13,2]]) d.hline(x,x+w,y,C2);
  // the one nibble: two scallops bitten out of the right shoulder
  d.circ(26,11,2,null); d.circ(25,14,2,null); for(const [x,y] of [[24,10],[24,11],[23,12],[23,13],[23,14],[23,15],[24,12],[24,16]]) d.px(x,y,P);
  for(let y=0;y<32;y++)for(let x=0;x<32;x++) if(d.get(x,y)===null) d.clear(x,y);
  d.outline(O);
  // dirt crumbs
  for(const [x,y] of [[4,30],[7,31],[11,30],[14,31],[2,28],[9,29]]) {d.px(x,y,D)} d.px(13,29,D);
  // tooth marks hint
  d.px(25,10,'#FFFFFF'); d.px(24,14,'#FFFFFF');
};
A['bunny:s1']=d=>{ // four-leaf clover with sparkle
  const O='#1E4A24', G='#4CB45A', G2='#2E8A42', G3='#8EE08A', S='#3E7A2E', Y='#FFE46A';
  const leaf=(cx,cy)=>{ // heart-ish leaf
    d.circ(cx-2,cy-2,3.2,G); d.circ(cx+2,cy+2,3.2,G); d.circ(cx+2,cy-2,3.6,G); };
  // four hearts around center 15,13
  const c=[15,13];
  d.circ(10,8,3.4,G); d.circ(13,6,3.4,G); d.poly([[8,10],[15,13],[11,4]],G); // top-left
  d.circ(17,6,3.4,G); d.circ(20,8,3.4,G); d.poly([[22,10],[15,13],[19,4]],G);   // top-right
  d.circ(20,18,3.4,G); d.circ(17,20,3.4,G); d.poly([[22,16],[15,13],[19,22]],G);// bottom-right
  d.circ(13,20,3.4,G); d.circ(10,18,3.4,G); d.poly([[8,16],[15,13],[11,22]],G); // bottom-left
  // shade lower halves
  for(let y=0;y<32;y++)for(let x=0;x<32;x++) if(d.get(x,y)===G && (x-15)+(y-13)>5) d.px(x,y,G2);
  // veins
  d.line(15,13,10,7,G2); d.line(15,13,20,7,G2); d.line(15,13,20,19,'#24703A'); d.line(15,13,10,19,'#24703A');
  // highlights
  for(const [x,y] of [[9,6],[10,5],[12,4],[17,4],[18,4],[21,7],[8,17]]) d.px(x,y,G3);
  d.px(11,7,G3); d.px(19,6,G3);
  // white chevrons (clover marks)
  d.stamp(9,8,['w..','.w.'],{w:'#D8F4C8'}); d.stamp(19,8,['..w','.w.'],{w:'#D8F4C8'});
  // stem curving down
  d.line(15,14,16,22,S); d.line(16,22,19,28,S); d.line(19,28,22,30,S); d.line(16,15,17,22,S);
  d.outline(O);
  twinkle(d,27,4,Y,'#FFFFFF'); twinkle(d,4,25,Y,'#FFFFFF'); d.px(27,15,Y); d.px(3,4,Y);
};
A['bunny:s2']=d=>{ // moon rabbit's wooden rice-cake mallet (tteokme), rice cake stuck on, pink ribbon
  const O='#3A2418', W='#C88A4A', W2='#9A6430', W3='#E8B474', H='#B07A44', H2='#84562C', H3='#D8A464', M='#FFFFFF', M2='#E8E4F0', R='#F27A9A', R2='#C84E70', Y='#FFE27A', Y2='#F0B840';
  // barrel head
  d.rect(7,3,19,11,W); d.ell(25,8,2,5,W); d.hline(8,25,4,W3); d.hline(8,25,5,W3); d.rect(8,11,18,3,W2);
  for(const x of [11,21]){d.vline(x,3,13,W2); d.vline(x+1,3,13,'#B07840')}
  d.px(14,7,W2); d.hline(15,18,8,W2); d.px(23,7,W2);
  // left end face with growth rings
  d.ell(6,8,3,5,'#D8A060'); d.ell(6,8,2,3.5,'#E8BC80'); d.ell(6,8,1,2,'#C89050'); d.px(6,8,'#9A6430');
  // sticky rice cake on the striking face (bottom)
  d.ell(19,14,3,1.5,M); d.px(18,16,M); d.px(21,16,M2); d.px(17,13,M2);
  // handle
  d.rect(14,14,4,15,H); d.vline(14,14,28,H3); d.vline(17,14,28,H2); d.ell(15.5,29,2.5,1.5,H2); d.hline(14,17,29,H);
  // ribbon bow
  d.poly([[15,18],[10,15],[10,21]],R); d.poly([[16,18],[21,15],[21,21]],R); d.px(11,17,R2); d.px(20,17,R2); d.rect(14,17,4,2,R2); d.line(14,19,12,24,R); d.line(17,19,19,24,R);
  // little crescent moon (lower right) and a rice-cake pair (lower left)
  d.stamp(23,20,['..yyy.','.yyz..','yyz...','yyz...','yyz...','.yyz.y','..yyy.'],{y:Y,z:Y2});
  d.ell(5,27,3,2,M); d.ell(8,25,2.2,1.6,'#FFC6D4'); d.px(4,26,'#FFFFFF'); d.px(7,24,'#FFE4EC'); d.hline(3,7,29,M2);
  d.outline(O);
  twinkle(d,29,14,Y,'#FFFFFF'); d.px(2,20,Y); d.px(30,30,Y);
};
A['bunny:c0']=d=>{ // flowerbed behind the apartment, day
  d.grad(0,0,64,22,['#8ED2F4','#A2DAF6','#B8E4F8','#CCEEFA']);
  cloud(d,12,5,5); cloud(d,30,3,3);
  // apartment block (center-right)
  const B='#F2E2C4', B2='#DCC6A0', Wn='#6AA8D0', Wn2='#A8D8F0';
  d.rect(26,2,38,22,B); d.rect(26,2,38,2,'#C89A70'); d.rect(56,2,8,22,B2);
  for(let r=0;r<4;r++)for(let c=0;c<6;c++){const x=29+c*6, y=6+r*4; if(x>60) continue; d.rect(x,y,3,2,Wn); d.px(x,y,Wn2); d.hline(x-1,x+3,y+2,'#B8A080')}
  d.rect(46,18,4,6,'#8A6A4A'); d.px(49,21,'#F8D060');
  // a quilt hanging from a balcony
  d.rect(35,10,4,3,'#F49AB0'); d.px(36,11,'#FFFFFF');
  // grass ground
  d.rect(0,22,64,18,'#78C058'); d.grad(0,22,64,4,['#68B04A','#78C058']);
  // brick flowerbed border along right/back
  d.rect(24,24,40,4,'#5A3A26'); for(let x=24;x<64;x+=4){d.rect(x,28,3,2,'#C8664A'); d.px(x+3,28,'#9A4A36'); d.px(x+3,29,'#9A4A36')} d.hline(24,63,30,'#9A4A36');
  // tulips
  const cols=[['#F05A6A','#C83A4A'],['#FFD24A','#E0A82A'],['#F49AC8','#D070A0'],['#FFFFFF','#D8D8E8']];
  for(let i=0;i<10;i++){const x=26+i*4, y=19+(i%2), [c,c2]=cols[i%4]; d.vline(x+1,y+3,27,'#3E8A3A'); d.px(x+2,y+5,'#58A848'); d.px(x,y+6,'#58A848'); d.rect(x,y,3,3,c); d.px(x+1,y,c2===c?c:c2); d.px(x+2,y+2,c2); d.px(x,y-1,c); d.px(x+2,y-1,c)}
  // nibbled grass patch and a fallen tulip petal, near the pet spot
  d.rect(0,30,64,10,'#78C058');
  tufts(d,26,0,63,24,39,'#5EA442','#8AD06A',[5,22,19,38]);
  d.ell(26,35,3,1,'#9ED67A'); for(const x of [24,26,28]) d.px(x,34,'#5EA442'); d.px(27,33,'#F05A6A');
  // little "shh" garden sign on right
  d.vline(58,31,37,'#7A5236'); d.rect(54,29,9,4,'#E8C890'); d.frame(54,29,9,4,'#7A5236'); d.stamp(56,30,['.r.r.','r.r.r'],{r:'#C83A4A'});
  // stepping stones
  d.ell(36,36,2,1,'#B8B8B0'); d.ell(44,38,2,1,'#B8B8B0'); d.px(36,35,'#D8D8D0'); d.px(44,37,'#D8D8D0');
};
A['bunny:c1']=d=>{ // endless carrot fields at sunset
  d.grad(0,0,64,18,['#5A4A98','#8A5AA0','#C86A98','#F08A88','#F8A870','#FFC870']);
  sun(d,46,17,6,'#FFF0A0','#FFD878');
  cloud(d,14,4,5,'#E89AB8','#C87AA0'); cloud(d,58,7,4,'#F8B0A0'); cloud(d,30,9,3,'#F8B0A0');
  // far hills
  d.ell(10,18,14,3,'#7A4A78'); d.ell(60,18,10,2,'#7A4A78'); d.hline(0,63,18,'#8A5A6A');
  d.rect(0,19,64,21,'#9A6040');
  const rows=[[19,2,0],[21,3,0],[23,3,0],[26,4,1],[29,5,1],[33,6,2],[38,7,2]];
  rows.forEach(([y,sp,sz],k)=>{
    d.hline(0,63,y+1,'#7A4A2E'); if(sz) d.hline(0,63,y+2,'#7A4A2E');
    for(let x=(k*3)%sp; x<64; x+=sp){
      if(x>=4&&x<=23&&y>=21) continue; // keep the pet spot clear
      if(sz===0){d.px(x,y,'#5AB040'); d.px(x,y+1,'#E8782A')}
      else if(sz===1){d.px(x,y-1,'#7AD058'); d.px(x-1,y,'#3E8A2A'); d.px(x+1,y,'#5AB040'); d.px(x,y,'#5AB040'); d.px(x,y+1,'#F08A2A')}
      else {d.line(x,y-1,x-2,y-3,'#3E8A2A'); d.line(x,y-1,x+2,y-3,'#5AB040'); d.vline(x,y-3,y,'#7AD058'); d.rect(x-1,y+1,3,1,'#F08A2A'); d.px(x+1,y+1,'#FFB45A')}
    }
  });
  // golden light on field near the sun
  for(let y=19;y<25;y++) for(let x=38;x<56;x++) if(d.get(x,y)==='#9A6040'&&(x+y)%2) d.px(x,y,'#B87A4A');
  // dirt path through the pet spot
  d.poly([[2,40],[26,40],[22,20],[14,20]],'#C89060'); d.line(14,20,2,40,'#A87444'); d.line(22,20,26,40,'#A87444'); specks(d,10,8,22,24,39,['#D8A070','#A87444']);
  // a pulled carrot and leaves dropped on the path
  d.poly([[24,34],[30,32],[30,34]],'#F08A2A'); d.px(31,32,'#5AB040'); d.px(32,31,'#3E8A2A'); d.px(32,33,'#7AD058');
  // overflowing carrot basket (right)
  d.rect(50,31,12,7,'#D8A050'); for(let x=51;x<62;x+=2) d.vline(x,31,37,'#B07A38'); d.hline(49,62,30,'#8A5A2A'); d.hline(50,61,38,'#8A5A2A');
  for(const x of [51,54,57,60]){d.poly([[x-1,30],[x+2,30],[x+0.5,25]],'#F08A2A'); d.px(x,25,'#5AB040'); d.px(x+1,24,'#3E8A2A'); d.px(x-1,24,'#7AD058')}
  // scarecrow
  d.vline(36,17,30,'#5A3420'); d.hline(31,41,21,'#5A3420'); d.circ(36,16,2,'#F0D090'); d.rect(33,12,7,2,'#C8644A'); d.hline(32,40,14,'#C8644A');
  d.px(35,16,'#3A2418'); d.px(37,16,'#3A2418'); d.rect(33,19,7,5,'#4A7AC8'); d.px(35,21,'#F8D060'); d.px(31,22,'#E8C060'); d.px(41,22,'#E8C060');
  // birds
  d.stamp(22,5,['b.b','.b.'],{b:'#4A3A60'}); d.stamp(26,8,['b.b','.b.'],{b:'#4A3A60'});
};
A['bunny:c2']=d=>{ // moon rabbit rice-cake village at night
  d.grad(0,0,64,24,['#121634','#1A2046','#232B58','#2C3668']);
  stars(d,36,0,63,0,20,['#FFFFFF','#C8D0FF','#FFE8A0'],2);
  // earth in the sky
  d.circ(9,7,4,'#3A7AD0'); d.ell(8,6,2,1,'#5AB860'); d.px(11,9,'#5AB860'); d.px(10,5,'#5AB860'); d.px(7,4,'#D8F0FF'); d.px(6,5,'#D8F0FF');
  // curved moon ground
  for(let x=0;x<64;x++){const top=20+Math.round(((x-34)/34)**2*5); d.vline(x,top,39,'#C8C4D8'); d.px(x,top,'#E8E6F4'); d.px(x,top+1,'#DAD6EA')}
  for(let y=31;y<40;y++) for(let x=0;x<64;x++) d.px(x,y,y<35?((x+y)%2?'#C8C4D8':'#B8B4CC'):'#B8B4CC');
  for(const [x,y,r] of [[30,35,2],[45,37,1.5],[27,25,1],[58,24,1]]){d.ell(x,y,r+1,r/2+0.5,'#9894B0'); d.ell(x,y-0.5,r,r/2,'#ACA8C4'); d.hline(x-r,x+r,y+r/2+0.5,'#E8E6F4')}
  // hanok huts with curved tile roofs
  const hut=(x,y,w)=>{d.rect(x,y,w,6,'#F0E6D0'); d.vline(x,y,y+5,'#8A5A3A'); d.vline(x+w-1,y,y+5,'#8A5A3A'); d.rect(x+(w>>1)-1,y+2,3,4,'#8A5A3A'); d.rect(x+2,y+1,2,2,'#FFD870'); d.rect(x+w-4,y+1,2,2,'#FFD870');
    d.poly([[x-2,y],[x+w+1,y],[x+w-1,y-4],[x+1,y-4]],'#3A4A6A'); d.hline(x+1,x+w-2,y-4,'#4E6088'); d.hline(x-3,x+w+2,y,'#262E48'); d.px(x-3,y-1,'#3A4A6A'); d.px(x+w+2,y-1,'#3A4A6A');
    d.vline(x-1,y+1,y+2,'#3A4A6A'); d.rect(x-2,y+3,3,2,'#F86A6A'); d.px(x-1,y+3,'#FFD870')};
  hut(28,15,10); hut(42,15,8);
  // big mortar with mallet mid-pound
  d.poly([[48,25],[62,25],[60,35],[50,35]],'#A8744A'); d.poly([[56,25],[62,25],[60,35],[56,35]],'#8A5A38'); d.rect(47,23,16,3,'#C88A5A'); d.hline(47,62,23,'#E0A874'); d.rect(49,35,12,2,'#6A4228');
  d.hline(50,60,29,'#8A5A38'); d.ell(55,22,5,1,'#FFFFFF'); d.px(52,21,'#FFFFFF');
  d.vline(55,10,21,'#A87444'); d.vline(56,10,21,'#8A5A38'); d.rect(49,5,14,6,'#C88A5A'); d.hline(49,62,5,'#E0A874'); d.hline(49,62,10,'#8A5A38'); d.ell(49,7.5,1,2.5,'#E0A874'); d.vline(52,5,10,'#8A5A38'); d.vline(59,5,10,'#8A5A38');
  d.stamp(45,18,['w....','.w...'],{w:'#FFF6B0'}); d.stamp(62,18,['.w','w.'],{w:'#FFF6B0'}); twinkle(d,46,13,'#FFF6B0','#FFFFFF');
  // plate of tteok
  d.ell(37,30,6,1,'#E8E6F4'); d.hline(31,43,31,'#9894B0');
  for(const [x,y,c] of [[32,28,'#F8B8C8'],[35,28,'#FFFFFF'],[38,28,'#B8E0A0'],[41,28,'#FFFFFF'],[34,26,'#B8E0A0'],[37,26,'#F8B8C8'],[40,26,'#FFFFFF'],[36,24,'#FFFFFF'],[39,24,'#F8B8C8']]) {d.rect(x,y,3,2,c); d.px(x+2,y+1,'#DAD6EA')}
  // little rabbit footprints hopping toward the mortar
  for(const [x,y] of [[25,37],[31,33],[42,35]]){d.px(x,y,'#9894B0'); d.px(x+2,y,'#9894B0'); d.px(x+1,y+1,'#9894B0')}
};
// ===== raccoon =====
A['raccoon:s0']=d=>{ // half-eaten cup ramen with my name (raccoon face logo), peeled lid, chopsticks, steam
  const O='#3A2014', R='#E0402A', R2='#B02A1C', R3='#FF7A5A', W='#FFF4E0', W2='#E6D4B4', N='#F6D27A', N2='#D8A848', S='#7A4A2A', S2='#A8703E', B='#5A3A2A', K='#2A1A12';
  // cup body (tapered)
  d.poly([[5,13],[27,13],[24,30],[8,30]],R); d.poly([[19,13],[27,13],[24,30],[19,30]],R2); d.poly([[5,13],[9,13],[10,30],[8,30]],R3);
  d.rect(5,12,23,2,W); d.hline(5,27,12,'#FFFFFF'); d.hline(8,24,29,R2);
  // white band with raccoon face
  d.poly([[6,17],[26,17],[25,24],[7,24]],W); d.poly([[20,17],[26,17],[25,24],[20,24]],W2);
  d.stamp(11,16,[
    '.bb......bb.',
    'bkbb....bbkb',
    'bbbbbbbbbbbb',
    'bwwkkbbkkwwb',
    'bwkkwbbwkkwb',
    '.bwwwkkwwwb.',
    '..bbwwwwbb..',
    '....bbbb....'],{b:S2,k:K,w:W});
  d.px(13,20,'#FFFFFF'); d.px(19,20,'#FFFFFF');
  // noodles inside (half left) + a fishcake slice and dried veg
  d.ell(16,11,10,2,N2); d.ell(15,10,9,1.5,N);
  for(const x of [9,12,15,18,21]){d.px(x,10,N2); d.px(x+1,11,'#FFE6A0')}
  d.ell(12,10,1.5,1,'#FFFFFF'); d.px(12,10,'#F48AA0'); d.px(19,9,'#5AA040'); d.px(21,10,'#E86A3A');
  // peeled lid flap sticking up at back-right
  d.poly([[17,9],[28,2],[30,5],[24,10]],'#F4E8D0'); d.line(17,9,28,2,'#D8C6A0'); d.line(25,6,29,4,R); d.px(27,4,R);
  // chopsticks resting across
  d.line(2,8,29,13,B); d.line(2,9,29,14,'#8A5A3A'); d.line(3,6,28,11,B);
  d.outline(O);
  // steam
  for(const [x,y] of [[8,2],[9,3],[8,4],[9,5],[13,0],[14,1],[13,2],[14,3]]) d.px(x,y,'#D8E4F0');
  // half-eaten note: a dropped noodle
  d.line(26,30,30,29,N); d.px(30,30,N2);
};
A['raccoon:s1']=d=>{ // shapeshifting leaf with a poof of magic smoke
  const O='#1E3A1A', G='#5AB04A', G2='#3A8A34', G3='#9AE07A', V='#2A6A28', S='#8A5A2A', P='#F0EAF8', P2='#C8B8E0', Y='#FFE46A';
  // leaf: big pointed oval tilted
  d.poly([[4,26],[8,14],[16,6],[27,2],[25,12],[19,21],[10,26]],G);
  d.poly([[4,26],[25,4],[27,2],[25,12],[19,21],[10,26]],G2);
  d.poly([[6,22],[9,14],[16,7],[24,4],[14,12]],G3);
  d.poly([[8,14],[16,6],[20,5],[12,11]],'#C0F0A0');
  // midrib and veins
  d.line(4,27,26,3,V); for(const [a,b,c,e] of [[9,21,8,16],[12,18,12,12],[16,14,17,8],[19,10,21,6],[11,20,16,21],[15,16,20,16],[19,12,23,11]]) d.line(a,b,c,e,V);
  // little curly stem
  d.line(4,27,1,30,S); d.px(2,31,S); d.px(0,30,S);
  // notch where it was nibbled during practice
  d.clear(22,15); d.clear(23,14); d.clear(22,14);
  d.outline(O);
  // magic poof clouds
  for(const [x,y,r] of [[26,24,3],[29,20,2],[22,28,2.5],[29,28,2]]) d.circ(x,y,r,P);
  for(const [x,y] of [[24,26],[27,26],[23,29],[28,22],[30,29]]) d.px(x,y,P2);
  twinkle(d,6,4,Y,'#FFFFFF'); twinkle(d,29,11,Y,'#FFFFFF'); d.px(13,28,Y); d.px(2,12,Y);
};
A['raccoon:s2']=d=>{ // legendary golden ramen pot (yangeun naembi) with crown-glow, noodles and chopsticks
  const O='#4A2A08', Y='#F6C83A', Y2='#D89A1A', Y3='#FFF0A0', Y4='#B0700E', N='#F8D888', N2='#E0B050', Rb='#E8502A', E='#FFFFFF', G='#5AA040', K='#5A3A2A';
  // glow rays
  for(const [a,b,c,e] of [[16,0,16,3],[5,3,8,6],[27,3,24,6],[1,12,4,12],[31,12,28,12]]) d.line(a,b,c,e,Y3);
  // pot body
  d.rect(5,15,22,12,Y); d.ell(16,27,11,2,Y); d.rect(19,15,8,12,Y2); d.ell(23,27,4,2,Y2); d.rect(5,15,3,12,Y3);
  // dents and rings (hammered pot look)
  d.hline(5,26,18,Y2); d.hline(5,26,24,Y2); for(const [x,y] of [[10,21],[14,20],[17,22],[22,20],[12,26]]) d.px(x,y,Y4); for(const [x,y] of [[9,20],[13,19],[16,21]]) d.px(x,y,Y3);
  // rim
  d.ell(16,15,12,2,Y3); d.ell(16,15,10,1,N2);
  // noodles piled above rim, springy
  d.ell(16,13,9,3,N); for(let x=8;x<=24;x+=2){d.px(x,12,N2); d.px(x+1,14,N2); d.px(x,10+((x>>1)%2),N)}
  d.ell(11,12,2,1,E); d.px(11,12,'#F48AA0'); d.rect(19,11,2,2,Rb); d.px(15,10,G); d.px(22,13,G); d.ell(16,11,2,1,'#FFF6D0'); d.px(16,10,'#FFB830');
  // handles
  d.rect(1,17,4,3,Y2); d.hline(1,4,17,Y); d.rect(27,17,4,3,Y4); d.hline(27,30,17,Y2);
  // chopsticks stuck in noodles
  d.line(20,11,27,1,K); d.line(21,11,29,2,'#8A5A3A');
  d.outline(O);
  // shine and sparkles
  d.vline(7,19,23,E); d.px(6,16,E);
  twinkle(d,3,5,'#FFF0A0','#FFFFFF'); twinkle(d,29,8,'#FFF0A0','#FFFFFF'); d.px(30,30,Y); d.px(1,29,Y);
};
A['raccoon:c0']=d=>{ // the 3 a.m. corner store, night
  d.grad(0,0,64,22,['#0E1430','#141C40','#1C2650','#24305E']);
  stars(d,18,0,63,0,12,['#FFFFFF','#B8C4F0']);
  d.circ(16,3,2,'#FFF4C0'); d.circ(17,2,1.5,'#0E1430'); // crescent moon
  // background apartment silhouettes with a few lit windows
  d.rect(0,9,22,13,'#1A1E3A'); d.rect(4,6,8,3,'#1A1E3A'); for(const [x,y] of [[2,12],[8,15],[14,11],[18,16],[6,9]]) d.rect(x,y,2,2,'#F8D870');
  // street / sidewalk
  d.rect(0,22,64,18,'#3A3E58'); d.rect(0,22,64,2,'#5A5E7A'); for(let x=0;x<64;x+=8) d.vline(x,24,39,'#2E3248');
  d.hline(0,63,24,'#2E3248');
  // store building
  d.rect(24,6,40,17,'#E8ECF4'); d.rect(24,6,40,3,'#2E9A5A'); d.rect(24,9,40,2,'#F48A2A'); d.hline(24,63,11,'#E04A3A');
  d.stamp(26,6,['ww.www','.w..ww','ww...w'],{w:'#FFFFFF'});
  // big glowing window
  d.rect(26,12,24,10,'#FFF8D0'); d.rect(27,13,22,8,'#FFF2B0');
  for(const y of [14,17]){d.hline(27,48,y+2,'#C8B890'); for(let x=27;x<49;x+=2) d.px(x,y+1,['#E0402A','#4AA0E0','#F48A2A','#2E9A5A'][(x+y)%4])}
  // clerk behind counter
  d.circ(44,15,2,'#F2C8A0'); d.rect(42,17,5,4,'#2E9A5A'); d.px(43,15,'#2A2A2A'); d.px(45,15,'#2A2A2A'); d.hline(42,46,13,'#2A2A2A'); d.rect(38,19,11,2,'#C8B890');
  // glass door
  d.rect(52,12,10,11,'#C8E8F0'); d.frame(52,12,10,11,'#8A9AB0'); d.vline(57,12,22,'#8A9AB0'); d.px(56,17,'#2A2A2A'); d.px(58,17,'#2A2A2A');
  d.vline(50,12,22,'#C8E8F0'); d.vline(51,12,22,'#C8E8F0');
  // light spill on the sidewalk
  d.poly([[24,24],[62,24],[64,32],[30,32]],'#6A6880'); d.dither(28,24,34,2,'#8A9AB0','#6A6880');
  // outdoor table with ramen cups and steam, trash can, street lamp
  d.rect(36,28,10,2,'#E8ECF4'); d.vline(37,30,35,'#8A9AB0'); d.vline(44,30,35,'#8A9AB0');
  d.rect(38,25,3,3,'#E0402A'); d.hline(38,40,25,'#FFF4E0'); d.rect(42,25,3,3,'#E0402A'); d.hline(42,44,25,'#FFF4E0');
  d.px(39,23,'#C8E8F0'); d.px(40,22,'#C8E8F0'); d.px(43,23,'#C8E8F0');
  d.rect(57,27,5,7,'#4A8A6A'); d.hline(56,62,27,'#2E9A5A');
  // lamp post on left beyond pet area
  d.vline(23,8,33,'#5A5E7A'); d.hline(20,23,8,'#5A5E7A'); d.rect(19,9,3,1,'#FFF4C0');
  // paw prints across the lit sidewalk toward the store
  for(const [x,y] of [[28,36],[33,33],[48,36]]){d.px(x,y,'#2E3248'); d.px(x+1,y-1,'#2E3248'); d.px(x-1,y-1,'#2E3248')}
};
A['raccoon:c1']=d=>{ // old home forest: sunbeams through trees, den under roots, stripes of light
  d.grad(0,0,64,40,['#2A5A3A','#2E6A40','#357848','#3E8650']);
  // distant trunk layer
  for(const x of [3,13,29,37,45,58]) d.rect(x,0,2,26,'#2A4A30');
  // sunbeams (striped light, like a tail) — diagonal dither bands
  for(const x0 of [20,32,44]) for(let y=0;y<30;y++) for(let w=0;w<3;w++){const x=x0+w+Math.floor(y/3); if(d.get(x,y)!=='#2A4A30') d.px(x,y,(x+y)%3?'#4E9258':'#5EA060')}
  // canopy
  for(const [x,y,r] of [[6,2,8],[20,0,9],[36,3,8],[52,1,10],[63,4,6]]){d.circ(x,y,r,'#2A6A34'); d.circ(x-1,y-1,r-2,'#3A8A40'); d.circ(x-2,y-3,r-5,'#5AA850')}
  // ground
  d.rect(0,25,64,15,'#5A4A2A'); d.grad(0,25,64,4,['#4A7A34','#5A8A3A','#6A5A30','#5A4A2A']); d.rect(0,29,64,11,'#6A5A34');
  tufts(d,16,0,63,27,39,'#4A8A3A','#6AAA4A',[4,22,20,38]);
  // big old tree with root den (right)
  d.rect(44,4,12,22,'#6A4428'); d.rect(52,4,4,22,'#4E3018'); d.vline(46,6,22,'#8A5A34'); d.vline(48,8,18,'#5A3820');
  d.poly([[40,30],[44,22],[47,26]],'#6A4428'); d.poly([[56,22],[62,30],[53,27]],'#4E3018');
  d.ell(50,26,4,4,'#1E140C'); d.rect(46,26,9,4,'#1E140C'); d.ell(50,25,3,2,'#2A1C10'); // den hole
  d.ell(50,30,5,1,'#8A7448'); // worn dirt doorstep
  // leaf bed and a little stone sign
  d.px(49,28,'#C88A3A'); d.px(51,29,'#C88A3A'); d.px(48,29,'#E0A84A');
  // mushrooms
  for(const [x,y,c] of [[36,32,'#E05A3A'],[40,34,'#E05A3A'],[59,34,'#F0C850']]){d.vline(x,y,y+2,'#F4E8D0'); d.rect(x-1,y-1,3,1,c); d.px(x,y-2,c); d.px(x-1,y-1,'#FFFFFF')}
  // stream crossing the bottom right
  d.poly([[26,40],[30,34],[38,36],[64,36],[64,40]],'#5AA8D0'); d.hline(31,40,35,'#9AD8F0'); d.hline(44,52,37,'#9AD8F0'); d.hline(56,62,38,'#9AD8F0');
  // fireflies
  for(const [x,y] of [[26,18],[33,12],[40,22],[60,16],[24,8]]) d.px(x,y,'#E8F870');
  // striped acorn cap clue on log
  d.rect(28,28,8,3,'#7A5A34'); d.ell(28,29.5,1,1.5,'#B08850'); d.px(28,29,'#7A5A34');
};
A['raccoon:c2']=d=>{ // great tanuki shapeshift contest at sunset: stage, lanterns, torii, teapot trophy with a striped tail
  d.grad(0,0,64,24,['#6A3A7A','#A84A78','#E06A6A','#F49A60','#FCC06A']);
  sun(d,32,20,5,'#FFE8A0','#FFD078');
  // distant mountains
  d.poly([[0,22],[10,12],[20,22]],'#7A4A6A'); d.poly([[12,22],[24,15],[34,22]],'#7A4A6A');
  // ground: packed earth festival yard
  d.rect(0,22,64,18,'#C88A5A'); d.grad(0,22,64,3,['#A8704A','#B87C50','#C88A5A']); specks(d,14,24,63,26,39,['#A8704A','#B87C50']);
  // torii gate (left-center behind pet, kept above y20 mostly)
  const T='#E0402A', T2='#A82A1C';
  d.rect(22,5,22,2,'#2A1A1A'); d.px(21,4,'#2A1A1A'); d.px(44,4,'#2A1A1A'); d.rect(23,7,20,1,T); d.rect(24,10,18,2,T); d.vline(32,7,9,T); d.vline(33,7,9,T);
  d.rect(26,8,2,16,T); d.rect(38,8,2,16,T); d.vline(27,8,23,T2); d.vline(39,8,23,T2); d.rect(25,23,4,1,'#2A1A1A'); d.rect(37,23,4,1,'#2A1A1A');
  // stage platform (right)
  d.rect(42,24,22,8,'#8A5A34'); d.rect(42,24,22,2,'#B07A48'); for(let x=44;x<64;x+=5) d.vline(x,26,31,'#6A4224');
  d.rect(42,32,22,2,'#6A4224');
  // curtain banner + lantern string
  d.rect(46,4,18,3,'#7A2A5A'); d.line(46,8,64,8,'#2A1A1A');
  for(let x=48;x<64;x+=5){d.rect(x,9,3,4,x%2?'#F05A3A':'#FFD060'); d.hline(x,x+2,9,'#2A1A1A'); d.px(x+1,13,'#2A1A1A'); d.px(x+1,11,'#FFF4C0')}
  // winner podium with a teapot and a fluffy striped tail sticking out
  d.rect(44,17,10,7,'#F4D27A'); d.rect(44,17,10,1,'#FFF0B0'); d.rect(51,18,3,6,'#D8A848'); d.stamp(48,19,['.1.','11.','.1.','.1.','111'],{1:'#B07A48'});
  const P='#E8EEF4', P2='#A8B8C8';
  d.ell(48,13,4,3,P); d.rect(46,9,5,1,P2); d.px(48,8,P2); d.line(52,12,55,10,P); d.px(56,9,P); d.ring(44,13,1.5,P2); d.hline(45,51,15,P2);
  d.px(46,12,'#5AA0E0'); d.px(49,13,'#5AA0E0'); d.px(47,14,'#5AA0E0');
  // the tail: brown with dark stripes, poking out to the left
  d.line(43,15,39,13,'#8A5A34'); d.line(43,14,39,12,'#8A5A34'); d.line(42,15,38,14,'#8A5A34'); d.px(41,13,'#2A1A12'); d.px(40,14,'#2A1A12'); d.px(38,13,'#2A1A12'); d.px(39,12,'#2A1A12');
  // trophy cup on the side
  d.rect(58,19,4,3,'#FFD040'); d.rect(59,22,2,2,'#D8A848'); d.px(57,19,'#FFD040'); d.px(62,19,'#FFD040'); d.px(59,19,'#FFF0B0');
  // floating leaves (shapeshift magic) and poof clouds
  for(const [x,y] of [[36,16],[56,4],[30,12],[40,2]]){d.px(x,y,'#5AB04A'); d.px(x+1,y-1,'#3A8A34')}
  d.circ(36,20,1.5,'#FFF0B0'); d.circ(38,19,1,'#FFF0B0');
  // crowd of leaf hats in front of the stage
  for(const x of [30,36,42,50,58]){d.ell(x,36,2,1,'#2A1A1A'); d.px(x,34,'#5AB04A'); d.px(x+1,33,'#3A8A34')}
};
// ===== pelican =====
A['pelican:s0']=d=>{ // pelican beak with a bulging see-through pouch full of anchovies
  const O='#4A2A1A', B='#F6C04A', B2='#D8962A', B3='#FFE48A', P='#FFC89A', P2='#F4A878', P3='#FFE4C8', F='#5A7898', F2='#9AB4CC', F3='#FFFFFF', K='#1A2A3A';
  // pouch hanging under the bill
  d.poly([[3,11],[29,10],[27,20],[20,28],[11,29],[5,23]],P); d.ell(16,22,11,7,P);
  d.poly([[20,12],[29,10],[27,20],[20,28],[16,29]],P2); d.ell(9,16,4,3,P3);
  // anchovies packed inside (clear silhouettes)
  const fish=(x,y,flip)=>{const r=flip?['k.fffff..','fffffffff','.ffffwf..']:['..fffff.k','fffffffff','..fwffff.']; d.stamp(x,y,flip?r:r.map(t=>t),{f:F,k:F,w:K}); d.hline(x+(flip?1:2),x+(flip?6:7),y+1,F2)};
  fish(6,14,0); fish(15,13,1); fish(9,18,1); fish(17,18,0); fish(6,22,0); fish(14,23,1); fish(18,26,0);
  // upper bill across top with hooked tip
  d.poly([[1,7],[29,6],[31,8],[30,10],[2,11]],B); d.hline(3,27,7,B3); d.hline(2,29,10,B2); d.poly([[28,6],[31,7],[31,11],[29,11]],'#E07A2A');
  // tails poking out of the pouch mouth
  for(const [x,y] of [[7,9],[14,9],[21,8]]){d.stamp(x,y-3,['f.f','.f.'],{f:F}); d.px(x+1,y-1,F)}
  d.outline(O);
  // escaped anchovy + water drops
  d.stamp(21,29,['.fff..f','fwfffff','.fff..f'],{f:F,w:F3});
  for(const [x,y] of [[30,15],[30,19],[1,15],[2,26]]) d.px(x,y,'#7AC8F0');
};
A['pelican:s1']=d=>{ // harbor anchor keychain with rope and a little tag
  const O='#1A2A44', N='#3A6AB8', N2='#2A4A88', N3='#7AA8E8', M='#C8D0D8', M2='#8A96A4', M3='#FFFFFF', R='#D8B880', R2='#A8844A', T='#F05A4A', T2='#C83A30';
  // key ring + chain
  d.ring(9,5,3.5,M); d.ring(9,5,2.5,M2); d.px(7,2,M3);
  for(const [x,y] of [[11,9],[12,10],[13,11]]) {d.px(x,y,M2); d.px(x+1,y,M)}
  // anchor
  d.ring(16,14,2,N); d.px(16,14,null);
  d.rect(15,16,3,13,N); d.vline(15,16,28,N3); d.vline(17,16,28,N2);
  d.rect(11,18,11,2,N); d.hline(11,21,18,N3); d.rect(10,18,2,2,N2); d.rect(21,18,2,2,N2);
  // bottom arms curved
  d.poly([[5,22],[8,22],[11,26],[16,28],[16,30],[10,29],[6,26]],N); d.poly([[28,22],[25,22],[22,26],[17,28],[17,30],[23,29],[27,26]],N2);
  d.poly([[3,22],[7,19],[8,23]],N); d.poly([[30,22],[26,19],[25,23]],N2);
  d.line(6,23,10,27,N3);
  // rope wrapping
  for(let y=16;y<28;y+=2){d.px(14,y,R); d.px(15,y+1,R2); d.px(16,y+1,R); d.px(17,y,R2); d.px(18,y,R)}
  d.line(18,21,22,24,R); d.line(22,24,24,23,R2);
  // little paper tag with a fish symbol
  d.rect(22,6,8,6,'#FFF4DC'); d.line(18,10,22,8,R2); d.stamp(23,8,['.tt.t','tttt.','.tt.t'],{t:T}); d.px(29,11,T2);
  d.outline(O);
  d.px(16,12,M3); d.px(4,20,M3);
};
A['pelican:s2']=d=>{ // whale song held in a pouch-shaped water bubble, with notes drifting out
  const O='#1A3A5A', W='#7AC8F0', W2='#4A98D0', W3='#C8ECFF', Wh='#3A5A98', Wh2='#2A4278', Wb='#C8D8F0', Y='#FFE46A', Nn='#F49AC8';
  // big droplet/pouch bubble
  d.circ(15,19,11,W2); d.circ(15,18,10,W); d.ell(15,13,7,4,W3); d.ell(14,12,5,2,'#E8F8FF');
  d.poly([[10,9],[15,0],[20,9]],W); d.poly([[13,6],[15,1],[17,6]],W3);
  // tiny whale inside
  d.ell(15,21,6,3.5,Wh); d.ell(15,23,5,2,Wb); d.poly([[20,19],[25,15],[25,18],[22,21]],Wh); d.poly([[24,14],[27,13],[25,17]],Wh2); d.poly([[24,18],[27,20],[25,16]],Wh2);
  d.px(11,20,'#FFFFFF'); d.px(11,21,'#1A1A2A'); d.line(10,23,13,24,Wh2); d.px(12,18,'#5A7AB8');
  // whale spout
  d.px(15,16,W3); d.px(14,15,W3); d.px(16,15,W3); d.px(13,14,W3); d.px(17,14,W3);
  // highlights on bubble
  d.px(7,14,'#FFFFFF'); d.px(7,15,'#FFFFFF'); d.px(8,13,'#FFFFFF'); d.vline(6,17,20,W3);
  d.outline(O);
  // music notes floating out
  d.stamp(25,2,['..nn','..nn','..n.','.nn.','nnn.','.n..'],{n:Nn}); d.stamp(1,4,['.yy','.y.','yy.','yy.'],{y:Y});
  d.px(29,10,Y); d.px(2,26,W); d.px(29,27,W3);
};
A['pelican:c0']=d=>{ // local fishing spot: pond with wooden pier, rod, empty bucket
  d.grad(0,0,64,16,['#7EC8F0','#94D2F2','#AADCF4','#C0E6F6']);
  cloud(d,46,4,5); cloud(d,20,6,3,'#F4FAFF');
  // far tree line
  for(let x=0;x<64;x+=5) d.circ(x+2,15,3+(x%3),'#4A9A4A'); d.rect(0,15,64,3,'#4A9A4A'); for(let x=1;x<64;x+=7) d.circ(x,14,2,'#62B05A');
  // pond (center-right)
  d.rect(0,18,64,22,'#7CC05A');
  d.ell(44,28,24,9,'#3A8AC8'); d.ell(44,27,22,7,'#4A9ED8'); d.hline(28,58,22,'#7AC0E8');
  for(const [x,y,w] of [[34,25,5],[46,29,6],[56,26,3],[40,32,4]]) d.hline(x,x+w,y,'#9AD4F0');
  // reeds at pond edge
  for(const x of [24,26,62,60]){d.vline(x,24,31,'#3E7A30'); d.rect(x,22,1,3,'#8A5A34')}
  // wooden pier going right
  d.rect(36,24,26,3,'#B88A54'); d.hline(36,61,24,'#D8AA70'); for(let x=38;x<62;x+=4) d.vline(x,24,26,'#8A6038');
  for(const x of [38,48,58]) d.rect(x,27,2,5,'#6A4628');
  // fishing rod leaning, line hanging into water, no fish
  d.line(52,23,44,8,'#5A3A20'); d.line(44,8,40,26,'#E0E0E0'); d.px(40,27,'#F05A4A'); d.px(40,26,'#FFFFFF');
  // stool and overturned empty bucket with a lone fish bone
  d.rect(54,20,5,2,'#8A6038'); d.vline(55,22,23,'#6A4628'); d.vline(58,22,23,'#6A4628');
  d.poly([[44,23],[50,23],[49,19],[45,19]],'#5A88C8'); d.hline(44,50,23,'#3A68A8'); d.hline(45,49,19,'#8AB0E0');
  d.stamp(51,25,['k.k.k..','kkkkkkk','k.k.k..'],{k:'#F4F0E0'}); d.px(58,25,'#F4F0E0');
  // ripple and splash where the catch was gulped
  d.ring(32,32,2,'#9AD4F0'); d.ring(32,32,4,'#7AC0E8'); d.px(31,29,'#FFFFFF'); d.px(34,29,'#FFFFFF');
  // grass tufts and flowers on the left bank
  tufts(d,14,0,30,20,39,'#5EA442','#94D06A',[5,22,19,38]);
  for(const [x,y] of [[26,36],[2,24],[28,22]]){d.px(x,y,'#FFF07A'); d.px(x+1,y,'#FFFFFF')}
  // dragonfly
  d.stamp(18,8,['w.w','.b.','w.w','.b.'],{w:'#E0F4FF',b:'#3A6AB8'});
};
A['pelican:c1']=d=>{ // harbor at sunset: sea, sailboats, lighthouse, dock planks
  d.grad(0,0,64,22,['#3A3878','#6A4A8A','#B85A80','#E87A6A','#F8A860','#FFD07A']);
  sun(d,40,20,6,'#FFF0B0','#FFD890');
  cloud(d,12,6,6,'#F49AA8','#C8708A'); cloud(d,56,4,4,'#F49AA8');
  // sea with sun reflection
  d.grad(0,21,64,19,['#E8886A','#B8607A','#7A4A7A','#4A3A6A']);
  for(let y=22;y<38;y+=2){const w=Math.max(1,8-((y-22)>>1)); d.hline(40-w,40+w,y,'#FFD890')}
  for(const [x,y] of [[26,25],[52,27],[30,31],[58,33]]) d.hline(x,x+4,y,'#F8B080');
  // lighthouse on rocks (far right)
  d.ell(58,21,7,3,'#3A2A40'); d.rect(55,6,6,15,'#FFFFFF'); for(const y of [9,14,19]) d.rect(55,y,6,2,'#E0402A');
  d.rect(54,4,8,2,'#3A2A40'); d.rect(56,2,4,2,'#FFF4A0'); d.px(58,1,'#3A2A40'); d.line(53,3,46,1,'#FFF4A0'); d.line(53,4,46,5,'#FFF4A0');
  // sailboats silhouetted
  const boat=(x,y,s,c,c2)=>{d.poly([[x-s*2,y],[x+s*2,y],[x+s*1.4,y+s],[x-s*1.4,y+s]],c2); d.vline(x,y-s*4,y-1,c2); d.poly([[x+1,y-s*4],[x+1,y-1],[x+s*2,y-1]],c); d.poly([[x-1,y-s*3],[x-1,y-1],[x-s*1.5,y-1]],c)};
  boat(30,22,2,'#F8E8D0','#4A2A40'); boat(47,26,3,'#FFFFFF','#5A2A40'); boat(20,21,1,'#F8E0C8','#4A2A40');
  // gulls/pelicans in flight trail
  d.stamp(36,9,['bb.bb','..b..'],{b:'#3A2A50'}); d.stamp(28,13,['b.b','.b.'],{b:'#3A2A50'});
  // dock planks foreground left, extending to x 28
  d.rect(0,30,30,10,'#9A6A44'); for(let y=30;y<40;y+=3) d.hline(0,29,y,'#7A5034'); d.hline(0,29,30,'#C08A5A');
  d.rect(26,26,3,14,'#6A4428'); d.hline(26,28,26,'#8A6038'); d.rect(2,26,3,5,'#6A4428'); d.line(3,26,27,26,'#D8B880');
  // coiled rope and crate on the dock edge
  d.ell(25,35,2,1,'#D8B880'); d.px(25,35,'#7A5034');
};
A['pelican:c2']=d=>{ // pelican king's island: turquoise sea, crowned beak-shaped rock, palms, sandbar foreground
  d.grad(0,0,64,18,['#4AB4F0','#64C2F4','#7ED0F6','#9ADCF8']);
  cloud(d,10,4,4); cloud(d,34,3,6); cloud(d,58,7,3);
  // ocean
  d.grad(0,18,64,22,['#3ACAD0','#2AB4C8','#1E98B8','#1680A8']);
  for(const [x,y,w] of [[30,21,6],[44,24,4],[54,30,6],[36,33,5],[58,36,3]]) {d.hline(x,x+w,y,'#9AF0F0'); d.px(x+w+1,y-1,'#FFFFFF')}
  // island
  d.ell(46,21,17,4,'#F4DC9A'); d.ell(46,22,17,3,'#E0C080'); d.ell(46,23,16,1,'#9AF0F0');
  // giant pelican-head rock with crown
  d.poly([[36,20],[38,8],[44,5],[48,8],[48,20]],'#A8A0B8'); d.poly([[44,5],[48,8],[48,20],[44,20]],'#8A82A0');
  d.poly([[46,8],[63,10],[63,12],[46,13]],'#F0B040'); d.poly([[47,13],[63,12],[60,18],[52,20],[48,19]],'#F8C86A'); d.line(47,13,63,12,'#C8862A'); d.px(63,13,'#C8862A');
  d.px(43,9,'#2A2438'); d.px(42,8,'#FFFFFF');
  d.stamp(39,0,['y.y.y.y','yyyyyyy','yrybyry','yyyyyyy'],{y:'#FFD840',r:'#E0402A',b:'#3A6AE0'});
  // palms
  const palm=(x,y,h)=>{d.line(x,y,x+2,y-h,'#8A5A34'); d.line(x+1,y,x+3,y-h,'#A87444'); const tx=x+2, ty=y-h; for(const [a,b] of [[-5,2],[5,2],[-4,-2],[4,-2],[0,-3]]) {d.line(tx,ty,tx+a,ty+b,'#2E9A44'); d.line(tx,ty+1,tx+a,ty+b+1,'#4ABA54')} d.circ(tx,ty+1,1,'#6A4A2A')};
  palm(57,21,5); palm(31,21,6);
  // sandbar in front for the pet, with shells and a beach towel crown flag
  d.poly([[0,26],[12,24],[28,27],[30,40],[0,40]],'#F8E4A8'); d.line(0,26,12,24,'#FFF4D0'); d.line(12,24,28,27,'#FFF4D0'); d.dither(0,38,30,2,'#F8E4A8','#E8CC88');
  for(const [x,y] of [[24,34],[27,30]]){d.px(x,y,'#F49AB0'); d.px(x+1,y,'#FFD0DC')}
  // fish leaping (the ocean all fits in the beak)
  d.stamp(33,27,['.o...','ooo.o','ooooo','ooo.o','.o...'].map(r=>r),{o:'#F8884A'}); d.px(34,28,'#1A2A3A'); d.hline(31,39,33,'#9AF0F0');
};
// ===== alex =====
A['alex:s0']=d=>{ // bouquet of three swirl lollipops for the peds ward kids, tied with a ribbon and a hospital wristband
  const O='#3A2030', S='#F4EEE4', S2='#C8BCA8', Rb='#5A9AE0', Rb2='#3A70B8', Wb='#FFFFFF';
  const pop=(cx,cy,r,c1,c2,c3)=>{d.circ(cx,cy,r,c1); for(let y=-r-1;y<=r+1;y++)for(let x=-r-1;x<=r+1;x++){if(d.get(Math.round(cx+x),Math.round(cy+y))!==c1) continue; const q=Math.hypot(x,y); if(q>r+.5) continue; const t=Math.atan2(y,x)/(Math.PI*2)*2+q/2.6; if(((Math.floor(t)%2)+2)%2) d.px(cx+x,cy+y,c2)} d.px(cx-r+2,cy-r+2,c3); d.px(cx-r+2,cy-r+3,c3); d.px(cx-r+3,cy-r+2,c3)};
  // sticks
  d.line(9,13,15,28,S); d.line(23,12,17,28,S); d.vline(16,15,29,S); d.line(10,14,16,29,S2); d.vline(17,15,29,S2);
  pop(8,9,6,'#F05A6A','#FFFFFF','#FFD0D8'); pop(24,9,6,'#5AC86A','#FFFFFF','#D0F8D0'); pop(16,7,6.5,'#FFC83A','#F07A2A','#FFF4C0');
  // ribbon bow
  d.poly([[16,22],[10,19],[10,25]],Rb); d.poly([[17,22],[23,19],[23,25]],Rb); d.rect(15,21,3,3,Rb2); d.line(15,24,12,28,Rb); d.line(17,24,20,28,Rb);
  // wristband loop with heart around sticks
  d.outline(O);
  d.px(3,23,'#FFC83A'); d.px(29,22,'#5AC86A'); d.px(28,2,'#F05A6A');
};
A['alex:s1']=d=>{ // open box of dino band-aids, some spilling out
  const O='#2A3A2A', G='#6AC86A', G2='#3E9A4E', G3='#A8EC98', Bd='#F4C8A0', Bd2='#D8A07A', Bd3='#FFE4CC', Dn='#3E9A4E', Y='#FFD83A', P='#F48AA8';
  // box back flap & body
  d.poly([[4,10],[26,10],[29,6],[7,6]],G2); d.rect(4,10,22,18,G); d.poly([[26,10],[29,6],[29,24],[26,28]],G2);
  d.hline(4,25,10,G3); d.vline(4,10,27,G3);
  // band-aids peeking out of the top
  const strip=(x0,y0,x1,y1)=>{d.line(x0,y0,x1,y1,Bd); d.line(x0,y0+1,x1,y1+1,Bd); d.line(x0,y0+2,x1,y1+2,Bd3); const mx=(x0+x1)>>1, my=(y0+y1)>>1; d.rect(mx-1,my,3,3,Bd2); d.px(mx,my+1,Dn)};
  strip(5,6,14,1); strip(12,6,22,2); strip(18,7,27,4);
  // front flap open
  d.poly([[4,28],[26,28],[24,31],[2,31]],G2);
  // dino on the box (big cute stego-ish)
  d.stamp(8,13,[
    '......y.y.....',
    '.....yyyyy....',
    '...ddddddddd..',
    '..ddddddddddd.',
    'dddddkdddddddd',
    'dddddddddddd.d',
    '..dd.....dd...',
    '..dd.....dd...'],{d:'#FFFFFF',y:Y,k:'#2A3A2A'});
  d.stamp(9,23,['p.p.p.p.p.p'],{p:P}); d.px(12,18,P);
  // spilled band-aid with a tiny dino print
  d.poly([[20,26],[30,22],[31,25],[21,29]],Bd); d.poly([[24,24],[27,23],[28,26],[25,27]],Bd2); d.px(25,25,Dn); d.px(26,24,Dn);
  d.outline(O);
  d.px(2,18,Y); d.px(1,3,P); d.px(30,15,Y);
};
A['alex:s2']=d=>{ // old brass farm key with a little barn tag and a sunflower
  const O='#3A2410', K='#E8B848', K2='#B8862A', K3='#FFF0A0', R='#D8483A', R2='#A82E28', Wh='#FFFFFF', Sf='#FFC81A', Sf2='#8A4A1A', L='#5AA040';
  // key bow (ring) top-left with clover cut-outs
  d.circ(9,9,7,K); d.circ(9,9,3,null); for(let y=0;y<32;y++)for(let x=0;x<32;x++) if(d.get(x,y)===null) d.clear(x,y);
  d.ring(9,9,6,K2); d.px(5,5,K3); d.px(6,4,K3); d.px(4,6,K3);
  // shaft diagonal
  d.line(13,13,26,26,K); d.line(14,13,27,26,K); d.line(13,14,26,27,K2); d.line(14,12,27,25,K3);
  // bit (teeth)
  d.poly([[22,25],[26,21],[29,24],[25,28]],K); d.stamp(24,26,['kk.','.kk','k..'],{k:K2}); d.px(27,23,K3);
  d.circ(13,13,1.5,K2);
  // barn tag hanging from the bow
  d.line(4,15,4,19,'#8A6A4A');
  d.poly([[0,23],[4,19],[8,23]],R2); d.rect(1,23,7,6,R); d.rect(3,25,3,4,Wh); d.line(3,25,5,28,R2); d.line(5,25,3,28,R2); d.hline(0,8,23,Wh);
  // sunflower tucked in the ring
  d.circ(15,4,2.5,Sf); for(const [x,y] of [[15,0],[19,4],[11,4],[15,8],[12,1],[18,1],[18,7],[12,7]]) d.px(x,y,Sf); d.circ(15,4,1,Sf2); d.line(15,8,12,11,L);
  d.outline(O);
  d.px(30,10,K3); d.px(20,30,K3); d.px(29,11,K3); d.px(31,10,K3); d.px(30,9,K3);
};
A['alex:c0']=d=>{ // nursery window: hospital hallway, glass into a nursery with sleeping babies in bassinets
  // wall
  d.rect(0,0,64,40,'#E8F0EC'); d.rect(0,0,64,3,'#D0DED8');
  // handrail + lower wall stripe
  d.rect(0,22,64,2,'#9AC8B8'); d.hline(0,63,21,'#B8DCD0');
  // floor
  d.rect(0,26,64,14,'#C8D4E0'); for(let y=26;y<40;y++) for(let x=0;x<64;x++) if(((x>>2)+(y>>2))%2) d.px(x,y,'#B8C6D4'); d.hline(0,63,26,'#8A9AB0');
  // nursery window (center-right)
  d.rect(24,4,38,18,'#6A7A8A'); d.rect(25,5,36,16,'#FDF2F4'); d.rect(25,5,36,3,'#F8DCE4');
  d.vline(43,5,20,'#6A7A8A'); d.hline(25,60,13,'#F4E4EA');
  // stork + moon decals on the nursery wall
  d.stamp(28,6,['..yy.','.yyy.','yy...','yy...','.yyy.','..yy.'].map(r=>r),{y:'#FFD870'});
  d.stamp(53,6,['..ww...','.wwwkk.','wwwww..','.www...','..w....'],{w:'#FFFFFF',k:'#F49A3A'});
  // bassinets with babies (pink / blue / yellow blankets), one is fussing (little z marks)
  const bas=(x,y,c,c2)=>{d.rect(x,y+3,8,4,'#FFFFFF'); d.frame(x,y+3,8,4,'#B8C0D0'); d.vline(x+1,y+7,y+8,'#B8C0D0'); d.vline(x+6,y+7,y+8,'#B8C0D0');
    d.circ(x+2,y+2,1.6,'#F2C8A8'); d.px(x+1,y+2,'#7A5A4A'); d.px(x+3,y+2,'#7A5A4A'); d.rect(x+1,y,3,1,c2); d.rect(x+3,y+2,5,2,c); d.hline(x+4,x+7,y+2,c2)};
  bas(27,10,'#F8B8C8','#F4C8D4'); bas(35,11,'#A8D0F8','#C8E0F8'); bas(45,10,'#FFE48A','#FFF0B0'); bas(53,11,'#A8D0F8','#C8E0F8');
  d.stamp(41,6,['zz.','.z.','zz.'],{z:'#9AA8C0'}); d.stamp(51,4,['z.','zz'],{z:'#9AA8C0'});
  // sill and name cards
  d.rect(24,22,38,1,'#8A9AB0');
  // "Peds" sign plate with a balloon icon, and a wall clock
  d.rect(6,4,14,6,'#5AA8D0'); d.circ(10,7,1.5,'#F05A6A'); d.vline(10,9,9,'#FFFFFF'); d.hline(13,18,6,'#FFFFFF'); d.hline(13,16,8,'#FFFFFF');
  d.circ(15,15,3,'#FFFFFF'); d.ring(15,15,3,'#6A7A8A'); d.vline(15,13,15,'#3A3A48'); d.hline(15,16,15,'#3A3A48');
  // potted plant and wheelchair-free floor; scrub cap dropped by the bench
  d.rect(56,30,6,6,'#E8A070'); d.circ(59,27,3,'#5AA860'); d.px(57,26,'#7ACA7A');
  d.rect(30,30,16,3,'#5A8AC8'); d.vline(31,33,36,'#3A5A8A'); d.vline(44,33,36,'#3A5A8A'); d.hline(30,45,30,'#7AAAE0');
  d.ell(38,29,2,1,'#3A8A4A'); d.px(37,28,'#5AAA6A');
  // soft night light glow on the floor
  d.ell(43,38,16,1.5,'#D8E0EA');
};
A['alex:c1']=d=>{ // hometown Iowa: green cornfields, red barn, silo, water tower, dirt road
  d.grad(0,0,64,20,['#5AB0F0','#78C0F2','#98D0F6','#B8E0F8']);
  cloud(d,20,5,5); cloud(d,50,3,4); cloud(d,36,9,2,'#F4FAFF');
  // distant flat horizon and water tower
  d.rect(0,17,64,3,'#8AC070');
  d.rect(30,7,6,4,'#D0D8E0'); d.hline(30,35,7,'#E8EEF4'); d.poly([[30,7],[33,4],[36,7]],'#B8C4D0'); d.vline(31,11,18,'#9AA4B0'); d.vline(35,11,18,'#9AA4B0'); d.line(31,12,35,17,'#9AA4B0'); d.line(35,12,31,17,'#9AA4B0');
  d.stamp(31,8,['ccc.'],{c:'#5A7AB0'});
  // red barn + silo (right)
  d.rect(44,10,14,10,'#C8382A'); d.poly([[43,10],[51,4],[59,10]],'#8A2A22'); d.hline(44,57,10,'#FFFFFF');
  d.rect(48,13,6,7,'#9A2A20'); d.line(48,13,53,19,'#FFFFFF'); d.line(53,13,48,19,'#FFFFFF'); d.frame(48,13,6,7,'#FFFFFF'); d.rect(50,7,2,2,'#FFFFFF');
  d.rect(59,5,5,15,'#B8C0C8'); d.ell(61,5,2,2,'#8A96A4'); d.vline(60,6,19,'#D8DEE4');
  // corn rows (tall green stalks with tassels) across the field
  d.rect(0,20,64,20,'#6A4A2A');
  const stalk=(x,y,h)=>{d.vline(x,y-h,y,'#4E9A34'); d.line(x,y-h+2,x-2,y-h+4,'#6AB848'); d.line(x,y-h+3,x+2,y-h+5,'#3E8A2A'); d.px(x,y-h-1,'#E8D070'); d.px(x+1,y-h+5,'#F0D060')};
  for(let r=0;r<5;r++){const y=21+r*4, h=3+r; for(let x=(r%2)*2; x<64; x+=3+(r>2?1:0)){ if(x>=4&&x<=23&&y>=22) continue; stalk(x,y,h)}}
  // dirt road leading to the barn through the pet spot
  d.poly([[4,40],[24,40],[22,20],[16,20]],'#C8A070'); d.line(16,20,4,40,'#A8804A'); d.line(22,20,24,40,'#A8804A');
  d.vline(19,22,26,'#B89060'); d.vline(18,30,34,'#B89060');
  // mailbox at the roadside
  d.vline(27,30,37,'#6A4A2A'); d.rect(25,27,5,3,'#3A5A9A'); d.px(30,27,'#E0402A'); d.px(30,28,'#E0402A');
  // crow sitting on a fence post
  d.rect(40,24,2,6,'#8A6A4A'); d.stamp(39,21,['.kk','kkk','.kk'],{k:'#2A2A30'}); d.px(42,22,'#F0B030');
};
A['alex:c2']=d=>{ // Kansas wheat fields at sunset: golden waves, farmhouse with porch, windmill, two kites (the twins)
  d.grad(0,0,64,22,['#E86A6A','#F08A6A','#F8A868','#FCC478','#FFDC90']);
  sun(d,22,19,5,'#FFF4C0','#FFE8A0');
  cloud(d,46,5,5,'#F8B8A0','#E8907A'); cloud(d,10,8,3,'#F8B8A0');
  // two kites with tails
  d.poly([[28,1],[31,4],[28,8],[25,4]],'#3A8AE0'); d.line(28,1,28,8,'#FFFFFF'); d.line(28,8,25,15,'#5A3A3A'); d.px(27,11,'#FFD040'); d.px(26,13,'#F05A6A');
  d.poly([[34,5],[36,7],[34,10],[32,7]],'#F05A9A'); d.line(34,5,34,10,'#FFFFFF'); d.line(34,10,32,16,'#5A3A3A'); d.px(33,13,'#3A8AE0');
  // horizon
  d.rect(0,21,64,2,'#C88A3A');
  // farmhouse with porch (right)
  d.rect(48,13,13,9,'#F8F0E0'); d.poly([[46,13],[54,6],[62,13]],'#5A6A8A'); d.rect(58,7,2,4,'#8A5A4A');
  d.rect(50,15,3,3,'#FFD870'); d.rect(56,15,3,3,'#FFD870'); d.rect(53,17,3,5,'#8A5A3A'); d.hline(47,62,18,'#C8B8A0');
  for(const x of [48,52,57,61]) d.vline(x,18,21,'#C8B8A0');
  // windmill (left-center, behind field)
  d.line(40,11,38,21,'#7A6A6A'); d.line(40,11,42,21,'#7A6A6A'); d.hline(39,41,16,'#7A6A6A');
  for(const [a,b] of [[-3,-3],[3,-3],[-3,3],[3,3],[0,-4],[0,4],[-4,0],[4,0]]) d.line(40,11,40+a,11+b,'#E8E0D8'); d.px(40,11,'#5A4A4A'); d.px(43,11,'#7A6A6A'); d.px(44,10,'#E8E0D8');
  // wheat field in bands
  d.grad(0,23,64,17,['#E8B84A','#F0C458','#E0A840','#D89A38']);
  for(let r=0;r<6;r++){const y=24+r*3; for(let x=(r*2)%5; x<64; x+=4+(r>3?1:0)){ if(x>=5&&x<=22&&y>=26) continue; d.vline(x,y-1-(r>>1),y,'#C88A28'); d.px(x,y-2-(r>>1),'#FFE48A'); d.px(x+1,y-1-(r>>1),'#FFE48A')}}
  // trampled play path circling in the wheat
  d.ell(14,33,10,5,'#F4D48A'); d.ell(14,33,7,3,'#F8DC98');
  // two tiny pairs of rain boots by the path
  d.rect(26,34,2,3,'#F05A6A'); d.rect(28,35,2,2,'#F05A6A'); d.rect(31,34,2,3,'#3A8AE0'); d.rect(33,35,2,2,'#3A8AE0');
};
// ===== lsp =====
const lump=(d,cx,cy,rx,ry,c,seed=0)=>{d.ell(cx,cy,rx,ry,c); const n=6; for(let i=0;i<n;i++){const a=i/n*Math.PI*2+seed; d.circ(cx+Math.cos(a)*rx*0.8,cy+Math.sin(a)*ry*0.8,Math.max(1.5,Math.min(rx,ry)*0.45),c)}};
A['lsp:s0']=d=>{ // lumpy lip gloss: a lumpy purple tube with a star cap and a dripping gloss wand
  const O='#2A1238', P='#B080D8', P2='#8858B0', P3='#D8C0F4', G='#F07AB8', G2='#C84A90', G3='#FFC0E0', Y='#FFE04A', Y2='#E0A820', W='#FFFFFF';
  // tube body (lumpy)
  d.rect(9,14,12,15,P); lump(d,15,23,7,6,P,0.3); d.rect(16,14,5,15,P2); d.poly([[16,14],[21,14],[22,27],[16,29]],P2);
  d.vline(10,15,27,P3); d.px(11,18,P3); d.px(9,22,P3);
  d.ell(12,24,2,1.5,P3); d.px(18,20,P3);
  // pink gloss window showing level
  d.rect(12,18,6,8,G); d.rect(15,18,3,8,G2); d.vline(12,19,24,G3);
  // glitter
  for(const [x,y] of [[13,21],[16,23],[14,25],[17,19]]) d.px(x,y,W);
  // collar
  d.rect(9,11,12,3,'#E8E0F0'); d.hline(9,20,11,W); d.rect(16,11,5,3,'#C8B8D8');
  // wand pulled out to the right, dripping
  d.line(20,9,27,2,'#E8E0F0'); d.ell(27,3,2,2.5,G); d.px(26,2,G3); d.px(28,6,G); d.px(28,7,G2);
  // star cap set aside at top-left
  d.stamp(2,1,['...y...','..yyy..','yyyyyyy','.yyyyy.','.yy.yy.','yy...yy'],{y:Y}); d.px(5,3,Y2); d.px(4,4,Y2); d.px(6,4,Y2); d.px(4,2,W);
  d.outline(O);
  // smooch mark
  d.stamp(24,24,['.gg.gg','gggggg','.gggg.','..gg..'],{g:G});
  d.px(3,26,Y); d.px(29,13,Y);
};
A['lsp:s1']=d=>{ // princess phone in a lumpy purple case, buzzing with drama
  const O='#2A1238', P='#B080D8', P2='#8858B0', P3='#D8C0F4', Sc='#2A2448', Sc2='#3A3460', B1='#F07AB8', B2='#7AD0F8', Y='#FFE04A', W='#FFFFFF';
  // case
  d.rect(8,3,16,26,P); for(const [x,y] of [[8,8],[23,13],[8,20],[23,24],[15,3],[11,29],[20,3]]) d.circ(x,y,2,P);
  d.rect(20,3,4,26,P2); d.circ(23,13,2,P2); d.circ(23,24,2,P2);
  d.vline(9,5,26,P3); d.px(8,8,P3);
  // screen
  d.rect(11,6,10,18,Sc); d.rect(11,6,10,2,Sc2);
  // chat bubbles (drama!)
  d.rect(12,9,6,2,B1); d.px(12,11,B1); d.rect(14,12,6,2,B2); d.px(19,14,B2); d.rect(12,15,5,2,B1); d.px(12,17,B1); d.rect(14,18,6,2,B2);
  d.stamp(13,21,['h.h','hhh','.h.'],{h:B1}); d.px(18,22,'#F44A4A'); d.px(18,21,'#F44A4A');
  // battery icon low
  d.frame(17,6,3,1,W); d.px(17,6,'#F44A4A');
  // home button & star charm
  d.circ(16,26,1,P3);
  d.line(24,26,27,28,'#E8E0F0'); d.stamp(25,27,['..y..','.yyy.','yyyyy','.y.y.'],{y:Y});
  // charger cord curling off
  d.line(13,30,10,31,'#E8E0F0');
  d.outline(O);
  // buzz lines
  for(const [x,y] of [[4,8],[3,10],[4,12],[28,5],[29,7],[28,9]]) d.px(x,y,'#F07AB8');
  d.px(2,20,Y); d.px(29,16,Y);
};
A['lsp:s2']=d=>{ // THE lumpy crown star: a big chunky lumpy yellow star
  const O='#5A3A08', Y='#FFE04A', Y2='#E8B020', Y3='#FFF4A8', Y4='#C08A10';
  d.poly([[16,1],[20,11],[31,12],[22,19],[26,30],[16,23],[6,30],[10,19],[1,12],[12,11]],Y);
  // lumps on arms
  for(const [x,y,r] of [[16,4,2.5],[27,12,2.5],[23,26,2.5],[9,26,2.5],[5,12,2.5],[13,15,2],[20,17,2]]) d.circ(x,y,r,Y);
  // shading (lower right)
  d.poly([[16,16],[31,12],[22,19],[26,30],[16,23]],Y2); d.circ(23,26,2,Y2); d.circ(27,13,1.5,Y2);
  d.poly([[18,22],[22,20],[25,29]],Y4);
  // highlights
  d.circ(13,10,2,Y3); d.px(16,3,Y3); d.px(15,4,Y3); d.px(4,12,Y3); d.px(9,25,Y3);
  // cute face
  d.px(13,16,'#3A2008'); d.px(19,16,'#3A2008'); d.hline(15,17,19,'#3A2008'); d.px(14,18,'#3A2008'); d.px(18,18,'#3A2008');
  d.px(11,18,'#F8A0B8'); d.px(21,18,'#F8A0B8');
  d.outline(O);
  for(const [x,y] of [[2,3],[29,3],[30,25],[2,22]]) twinkle(d,x,y,'#B080D8','#FFFFFF');
};
A['lsp:c0']=d=>{ // woods hideout: dusky forest clearing, stick lean-to, campfire, stolen camping stuff
  d.grad(0,0,64,22,['#3A4A7A','#4A5A88','#6A6A98','#9A80A8']);
  for(const [x,h] of [[2,20],[10,16],[48,19],[58,22],[34,15],[26,18]]) pine(d,x,h+2,h,'#2A4A3A','#1E3A2E');
  for(const [x,h] of [[40,24],[18,22],[62,26]]) pine(d,x,h,h,'#3A5E44','#2E4E38','#4A3020');
  // ground
  d.rect(0,22,64,18,'#4E6A3A'); d.grad(0,22,64,3,['#3A5A30','#4E6A3A']); tufts(d,14,0,63,24,39,'#3E5A2E','#6A8A4A',[5,22,19,38]);
  // campfire glow pool
  d.ell(46,32,12,5,'#7A7A3A'); d.ell(46,32,8,3,'#9A8A40');
  // lean-to hideout of sticks and a purple blanket
  d.poly([[28,30],[38,16],[40,30]],'#7A5434'); d.poly([[30,30],[37,19],[38,30]],'#2A1C14');
  for(const [a,b,c,e] of [[27,30,38,15],[31,30,38,16],[35,30,39,15],[40,30,38,15],[38,15,36,13]]) d.line(a,b,c,e,'#5A3A20');
  d.poly([[32,30],[36,24],[38,30]],'#9A6AC8'); d.px(35,26,'#C8A0F0');
  // campfire
  d.line(42,34,50,31,'#6A4428'); d.line(42,31,50,34,'#5A3A20');
  d.poly([[43,32],[46,23],[49,32]],'#F0782A'); d.poly([[44,32],[46,26],[48,32]],'#FFC03A'); d.px(46,29,'#FFF4A0'); d.px(45,30,'#FFF4A0');
  d.px(44,21,'#FFC03A'); d.px(48,19,'#F0782A'); d.px(47,17,'#FFC03A');
  // stick with a toasted marshmallow, and a log seat
  d.line(53,30,47,25,'#8A6038'); d.rect(46,24,2,2,'#F4E8D8'); d.px(46,25,'#C8884A');
  d.rect(54,32,8,3,'#7A5434'); d.ell(54,33.5,1,1.5,'#B08860'); d.px(54,33,'#7A5434');
  // a sign "Keep out" style (just an X) and a backpack
  d.vline(58,22,30,'#6A4428'); d.rect(55,20,7,4,'#B08860'); d.line(57,21,59,22,'#5A1A1A'); d.line(59,21,57,22,'#5A1A1A');
  // fireflies + first stars
  for(const [x,y] of [[22,14],[30,10],[52,12],[62,6],[8,4],[44,4]]) d.px(x,y,'#F0F890');
};
A['lsp:c1']=d=>{ // lumpy prom: dance hall with disco ball, purple lumpy decor, checker floor, dancing silhouettes
  d.grad(0,0,64,24,['#1E1038','#2A1848','#3A2058','#4A2868']);
  // lumpy streamers / balloon clusters along the ceiling
  for(let x=0;x<64;x+=10){lump(d,x+4,2,4,2,'#8858B0',x); d.px(x+3,1,'#B080D8')}
  for(let x=4;x<64;x+=8){d.line(x,4,x+4,7,'#F07AB8'); d.line(x+4,7,x+8,4,'#F07AB8')}
  // disco ball
  d.vline(40,4,6,'#9A9AB0'); d.circ(40,10,4,'#C8C8E0'); for(let y=6;y<15;y++)for(let x=36;x<45;x++) if(d.get(x,y)==='#C8C8E0'&&(x+y)%2) d.px(x,y,'#8A8AB0'); d.px(38,8,'#FFFFFF'); d.px(39,9,'#FFFFFF');
  // light beams
  d.line(37,13,26,24,'#5A3A80'); d.line(43,13,56,24,'#5A3A80'); d.line(40,14,40,24,'#5A3A80');
  for(const [x,y,c] of [[22,8,'#7AD0F8'],[56,9,'#F07AB8'],[30,4,'#FFE04A'],[50,16,'#7AD0F8'],[12,10,'#F07AB8'],[60,18,'#FFE04A']]) d.px(x,y,c);
  // stage/banner with a star
  d.rect(50,12,12,7,'#5A2A78'); d.frame(50,12,12,7,'#FFE04A'); d.stamp(54,13,['.y..','yyyy','.yy.','y..y'],{y:'#FFE04A'});
  // checker dance floor
  d.rect(0,24,64,16,'#2A1A40'); for(let y=24;y<40;y++)for(let x=0;x<64;x++) if(((x>>2)+((y-24)>>2))%2) d.px(x,y,'#4A3068');
  // colored light spots on floor
  d.ell(30,33,4,1,'#B04A90'); d.ell(50,35,5,1,'#3A6AA8'); d.ell(40,28,3,1,'#9A8A3A');
  // the couple dancing (lumpy silhouettes) center-right
  d.ell(36,23,3,4,'#C8A060'); d.circ(36,18,3,'#C8A060'); d.rect(33,26,6,3,'#3A2A50'); d.px(35,17,'#2A1A20'); d.px(37,17,'#2A1A20'); d.hline(34,38,15,'#6A4A2A');
  lump(d,44,21,4,4,'#F4B040',1.2); d.circ(44,15,2,'#F4B040'); d.rect(41,24,6,4,'#F4B040'); d.px(43,19,'#3A2010'); d.px(45,19,'#3A2010');
  d.line(39,21,41,20,'#C8A060'); d.stamp(38,11,['h.h','hhh','.h.'],{h:'#F05A8A'});
  // punch bowl table (right)
  d.rect(52,26,11,2,'#E8E0F0'); d.vline(53,28,33,'#9A90B0'); d.vline(61,28,33,'#9A90B0'); d.ell(57,24,3,2,'#F07AB8'); d.hline(54,60,24,'#FFC0E0');
  // a dropped corsage near the pet spot
  d.circ(26,36,1,'#F07AB8'); d.px(27,37,'#5AB060'); d.px(25,37,'#5AB060');
};
A['lsp:c2']=d=>{ // lumpy space: purple space sky, lumpy cloud islands, lumpy parents' house, lumpy ground
  d.grad(0,0,64,40,['#1A0A30','#24103E','#30164C','#3E1E5C']);
  stars(d,30,0,63,0,26,['#FFFFFF','#F0C0F8','#C0D0FF'],2);
  // big lumpy planet
  lump(d,12,8,6,5,'#B070D8',0.4); lump(d,12,8,4,3,'#C890E8',0.9); d.px(9,6,'#E8C8FF'); d.px(10,5,'#E8C8FF');
  // floating lumpy cloud islands
  lump(d,30,10,5,2,'#8A5AB0',0.2); lump(d,58,6,4,2,'#8A5AB0',1.0); d.hline(26,34,12,'#6A3A90');
  // lumpy ground
  for(let x=0;x<64;x++){const top=24+Math.round(Math.sin(x*0.45)*1.5+Math.sin(x*0.17)*1.5); d.vline(x,top,39,'#9A68C8'); d.px(x,top,'#C8A0EC')}
  for(const [x,y,r] of [[8,34,4],[36,36,5],[56,33,4],[26,30,3]]) lump(d,x,y,r,r*0.6,'#8858B0',x);
  for(const [x,y] of [[34,34],[54,31],[6,32]]) d.px(x,y,'#B88AE0');
  // parents' lumpy dome house (right)
  lump(d,48,20,9,7,'#B080D8',0.5); lump(d,48,18,6,4,'#C8A0EC',1.1); d.rect(46,20,5,7,'#4A2268'); d.ell(48,20,2.5,1.5,'#4A2268'); d.px(50,23,'#FFE04A');
  d.circ(42,17,1.5,'#FFE890'); d.circ(55,17,1.5,'#FFE890'); d.vline(49,6,11,'#8858B0'); d.stamp(47,3,['.y.','yyy','.y.'],{y:'#FFE04A'});
  // speech-bubble nags from the window
  d.rect(56,8,7,4,'#FFFFFF'); d.px(56,12,'#FFFFFF'); d.hline(57,61,9,'#8858B0'); d.hline(57,60,10,'#8858B0');
  d.rect(34,14,6,3,'#FFFFFF'); d.px(39,17,'#FFFFFF'); d.hline(35,38,15,'#8858B0');
  // a dropped purse near the pet
  d.rect(25,27,4,3,'#F07AB8'); d.line(25,27,27,25,'#FFE04A'); d.line(27,25,28,27,'#FFE04A');
};
// ===== baymax =====
A['baymax:s0']=d=>{ // big post-checkup lollipop with a Baymax face, in a cellophane wrapper with a red bow
  const O='#3A3040', C='#F8A0B8', C2='#E07898', C3='#FFD8E4', W='#FFFFFF', K='#2A2A30', St='#F4EEE4', St2='#C8BCA8', Cl='#E0F0FA', Cl2='#B8D8EC', R='#E0403A', R2='#B02A28';
  // cellophane wrapper puff
  d.circ(15,12,11,Cl); d.circ(15,12,9,Cl2);
  // candy disc
  d.circ(15,12,8,C); d.poly([[15,12],[23,8],[23,16]],C2); d.poly([[15,12],[7,16],[10,20]],C2); d.poly([[15,12],[11,4],[19,4]],C3);
  // Baymax face sticker: white oval, two eyes joined by a line
  d.ell(15,12,5,2.5,W); d.circ(12,12,1,K); d.circ(18,12,1,K); d.hline(13,17,12,K);
  // wrapper twist + bow
  d.poly([[11,22],[19,22],[17,25],[13,25]],Cl); d.poly([[15,25],[9,22],[9,28]],R); d.poly([[15,25],[21,22],[21,28]],R2); d.rect(14,24,3,3,R);
  // stick
  d.rect(14,27,3,5,St); d.vline(16,27,31,St2);
  // shine
  d.px(9,6,W); d.px(10,5,W); d.px(8,8,W); d.px(21,4,W);
  d.outline(O);
  // star "good patient" sparkles
  twinkle(d,28,4,'#FFE04A',W); twinkle(d,3,26,'#FFE04A',W);
};
A['baymax:s1']=d=>{ // San Fransokyo wind-turbine blimp model on a little stand (round and white, like me)
  const O='#3A4250', W='#F8F8FA', W2='#DCE0E8', W3='#B8BEC8', R='#E0403A', P='#6A7A8A', K='#2A2A30', Y='#FFE04A';
  // body
  d.ell(15,11,12,7,W); d.ell(17,14,10,4,W2); d.ell(19,15,7,2,W3); d.ell(11,8,6,3,'#FFFFFF');
  // red band + koi-ish fin tail
  d.vline(10,5,17,R); d.vline(11,5,17,R);
  d.poly([[1,6],[5,9],[5,13],[1,16]],W2); d.poly([[0,4],[4,8],[2,8]],W3); d.poly([[0,18],[4,14],[2,14]],W3); d.hline(0,4,11,R);
  // front turbine propeller
  d.rect(27,9,2,4,P); d.line(29,11,31,5,W3); d.line(29,11,31,17,W3); d.px(30,11,K);
  // baymax-ish face on front
  d.px(22,10,K); d.px(25,10,K); d.hline(23,24,10,K);
  // tether + little stand
  d.line(15,18,15,27,P); d.rect(10,27,11,2,P); d.rect(12,29,7,2,'#4A5868'); d.hline(10,20,27,'#8A9AAA');
  d.outline(O);
  // wind swirls
  d.line(2,23,7,22,'#9AD8F0'); d.px(8,21,'#9AD8F0'); d.line(22,24,28,23,'#9AD8F0'); d.px(29,22,'#9AD8F0');
  d.px(4,1,Y); d.px(28,1,Y);
};
A['baymax:s2']=d=>{ // Tadashi's green care chip with a heart, glowing softly
  const O='#183A20', G='#4AC86A', G2='#2E9A4E', G3='#9AF0A8', Au='#F0C040', Au2='#B88A20', W='#FFFFFF', H='#F05A6A', H2='#FFB0C0', Gl='#D8FFE0';
  // glow halo
  d.rect(5,1,22,30,Gl); d.clear(5,1); d.clear(26,1); d.clear(5,30); d.clear(26,30);
  // card body
  d.rect(7,3,18,26,G); d.rect(19,3,6,26,G2); d.vline(8,4,27,G3); d.hline(8,23,4,G3);
  // notch corner
  d.poly([[20,3],[25,3],[25,8]],null); for(let y=3;y<8;y++)for(let x=20;x<26;x++) if(x-20>y-3) d.px(x,y,Gl);
  // gold contacts
  for(let i=0;i<5;i++){d.rect(9+i*3,24,2,4,Au); d.px(10+i*3,24,Au2)}
  // circuit traces
  d.line(10,8,10,13,G2); d.line(10,13,13,16,G2); d.line(22,10,22,14,'#1E7A3A'); d.line(22,14,19,17,'#1E7A3A'); d.hline(9,12,20,G2); d.hline(19,23,20,'#1E7A3A');
  // heart in the middle
  d.stamp(12,10,['.hh.hh.','hhwhhhh','hhhhhhh','.hhhhh.','..hhh..','...h...'],{h:H,w:H2});
  // tiny "T" mark
  d.hline(15,18,18,W); d.vline(16,18,21,W); d.vline(17,18,21,W);
  d.outline(O);
  twinkle(d,2,4,'#FFE04A',W); twinkle(d,29,26,'#FFE04A',W);
};
A['baymax:c0']=d=>{ // Lucky Cat Café: warm interior, counter, big beckoning cat, pastries, hanging lamps
  d.rect(0,0,64,26,'#F4D8B0'); for(let x=0;x<64;x+=6) d.vline(x,0,25,'#ECCDA0');
  d.rect(0,0,64,2,'#8A4A2A');
  // window with city view (left-top, above pet area)
  d.rect(3,4,18,12,'#6A3A20'); d.rect(4,5,16,10,'#9AD0F0'); d.rect(4,11,16,4,'#C8E4F4');
  for(const [x,h] of [[5,4],[8,6],[11,3],[14,7],[17,5]]) d.rect(x,15-h,2,h,'#8AA0C0'); d.vline(12,5,14,'#6A3A20'); d.hline(4,19,10,'#6A3A20');
  // hanging lamps
  for(const x of [28,40,52]){d.vline(x,2,5,'#3A2A20'); d.poly([[x-3,8],[x,5],[x+3,8]],'#E0503A'); d.hline(x-2,x+2,8,'#FFE48A'); d.ell(x,10,2,1,'#FFF0C0')}
  // floor
  d.rect(0,26,64,14,'#B8784A'); for(let y=26;y<40;y+=3) d.hline(0,63,y,'#A0663C'); for(let y=26;y<40;y++) if(y%6<3) d.px((y*7)%64,y,'#A0663C');
  // counter (right) with pastry case
  d.rect(30,17,34,10,'#8A4A2A'); d.rect(30,17,34,2,'#C87A4A'); d.hline(30,63,16,'#E8A070');
  d.rect(33,19,14,6,'#E8F4F8'); d.frame(33,19,14,6,'#C8D8E0');
  for(const [x,c] of [[35,'#F8C060'],[38,'#F48AA8'],[41,'#F8E0B0'],[44,'#8A5A3A']]){d.ell(x,23,1,1,c); d.px(x,21,c)}
  // the giant lucky cat statue
  d.circ(56,9,4,'#FFFFFF'); d.rect(52,11,9,6,'#FFFFFF'); d.poly([[52,6],[53,3],[55,5]],'#FFFFFF'); d.poly([[60,6],[59,3],[57,5]],'#FFFFFF');
  d.px(53,4,'#F48AA8'); d.px(59,4,'#F48AA8'); d.px(54,9,'#2A2A30'); d.px(58,9,'#2A2A30'); d.px(56,10,'#F48AA8');
  d.rect(61,6,2,5,'#FFFFFF'); d.px(62,5,'#FFFFFF'); d.hline(53,59,12,'#E0403A'); d.circ(56,13,1,'#FFD040'); d.rect(54,14,5,3,'#FFD040'); d.hline(54,58,14,'#FFF0A0');
  // cups and snack plate on a table near the pet (offered, untouched)
  d.rect(26,30,12,2,'#8A4A2A'); d.vline(27,32,37,'#6A3A20'); d.vline(36,32,37,'#6A3A20');
  d.rect(28,28,3,2,'#FFFFFF'); d.px(31,29,'#FFFFFF'); d.px(29,27,'#E8E0D8');
  d.ell(34,29,2,0.5,'#FFFFFF'); d.rect(33,27,3,2,'#F8C060'); d.px(34,27,'#FFF0C0');
  // sign board
  d.rect(46,30,8,7,'#3A3A3A'); d.frame(46,30,8,7,'#8A4A2A'); d.stamp(48,31,['c.c','ccc','.c.'],{c:'#FFFFFF'}); d.hline(47,52,35,'#F8C060'); d.line(47,37,46,39,'#8A4A2A'); d.line(52,37,53,39,'#8A4A2A');
};
A['baymax:c1']=d=>{ // sky over San Fransokyo at sunset: pagoda-topped bridge, floating turbine blimps, skyline, rooftop ledge
  d.grad(0,0,64,26,['#5A4A9A','#8A5AA8','#D86A8A','#F8906A','#FFC070','#FFE098']);
  sun(d,30,22,5,'#FFF0B0','#FFE098');
  // floating wind-turbine blimps tethered
  const blimp=(x,y,s)=>{d.ell(x,y,s*3,s*1.6,'#F8F8FA'); d.ell(x+s,y+s*0.6,s*2,s*0.6,'#DCE0E8'); d.vline(x-s*2,y-s,y+s,'#E0403A'); d.px(x+s*3+1,y,'#6A7A8A'); d.line(x,y+s*1.6,x+s,y+14,'#7A6A8A')};
  blimp(20,6,2); blimp(48,4,1.5); blimp(58,12,1);
  // skyline silhouette with pagoda roofs
  d.rect(0,22,64,6,'#4A3A6A');
  for(const [x,w,h] of [[24,4,12],[30,5,9],[36,3,15],[40,6,11],[48,4,8],[53,5,13],[59,5,10]]){d.rect(x,26-h,w,h,'#4A3A6A'); for(let y=26-h+2;y<26;y+=3) for(let i=1;i<w-1;i+=2) d.px(x+i,y,'#F8D870')}
  d.poly([[34,11],[38,8],[42,11]],'#3A2A5A'); d.poly([[35,13],[38,10],[41,13]],'#3A2A5A'); d.vline(38,6,8,'#3A2A5A');
  // bay water
  d.rect(0,27,64,13,'#6A4A8A'); for(const [x,y,w] of [[26,29,8],[42,31,6],[34,34,10],[52,36,6]]) d.hline(x,x+w,y,'#F8A880');
  // bridge with red torii-style towers
  d.line(28,27,63,24,'#C83A2A'); d.line(28,28,63,25,'#8A2A20');
  for(const x of [38,56]){d.rect(x,12,2,15,'#C83A2A'); d.rect(x-2,12,6,1,'#C83A2A'); d.rect(x-1,15,4,1,'#C83A2A'); d.px(x-3,11,'#C83A2A'); d.px(x+4,11,'#C83A2A')}
  d.line(28,26,38,13,'#E06A50'); d.line(40,13,55,13,'#E06A50'); d.line(58,13,63,18,'#E06A50');
  for(let x=30;x<63;x+=3) d.vline(x,Math.round(27-(x-28)*3/35)-3,Math.round(27-(x-28)*3/35)-1,'#E06A50');
  // rooftop ledge (left foreground)
  d.rect(0,30,30,10,'#5A5070'); d.rect(0,30,30,2,'#7A7090'); d.vline(29,30,39,'#3A3050');
  d.rect(24,24,4,6,'#7A7090'); d.rect(23,23,6,1,'#9A90B0'); d.px(25,26,'#3A3050');
  // birds/microbots trail
  d.stamp(10,10,['k.k','.k.'],{k:'#3A2A50'}); d.stamp(6,14,['k.k','.k.'],{k:'#3A2A50'});
};
A['baymax:c2']=d=>{ // beyond the portal: swirling quantum space, a glowing portal ring, a rescue pod, low battery
  d.grad(0,0,64,40,['#0E0828','#1A0E3A','#2A1250','#3A1A62']);
  // swirling color bands
  for(let i=0;i<200;i++){const a=i*0.11, r=4+i*0.16; const x=44+Math.cos(a)*r, y=17+Math.sin(a)*r*0.7; d.px(x,y,['#7A3AC8','#3A6AE0','#E05AB8'][i%3])}
  stars(d,26,0,63,0,39,['#FFFFFF','#C8E0FF','#F8C0F0'],2);
  // portal ring
  d.ell(46,17,9,11,'#7AE8F8'); d.ell(46,17,7,9,'#2A1250'); d.ell(46,17,5,7,'#4A2A8A'); d.ell(46,17,3,4,'#8A5AE0'); d.ell(46,17,1,2,'#E8F8FF');
  for(const [x,y] of [[37,10],[55,24],[38,26],[54,8]]) d.px(x,y,'#E8F8FF');
  // floating debris (microbot fragments)
  for(const [x,y] of [[30,6],[60,34],[34,30],[26,14],[60,4]]){d.rect(x,y,2,2,'#2A2A38'); d.px(x+1,y,'#5A5A70')}
  // hypersleep pod drifting out
  d.ell(30,22,5,3,'#E8EEF4'); d.ell(30,21,4,1.5,'#9AD8F0'); d.hline(25,35,23,'#B8C4D0'); d.px(33,23,'#F05A6A');
  // floating rock platform under the pet
  d.poly([[2,36],[26,36],[22,40],[6,40]],'#5A4A7A'); d.rect(0,33,28,4,'#7A6A9A'); d.hline(0,27,33,'#9A8AC0'); d.rect(0,37,24,3,'#5A4A7A');
  d.ell(14,31,10,1,'#6A5A8A'); d.rect(4,30,22,3,'#7A6A9A'); d.hline(4,25,30,'#9A8AC0');
  // low battery icon floating
  d.frame(52,32,9,5,'#FFFFFF'); d.rect(61,33,1,3,'#FFFFFF'); d.rect(53,33,2,3,'#F05A4A');
  // a tiny red healthcare cross badge on the platform
  d.stamp(23,27,['.r.','rrr','.r.'],{r:'#F05A4A'});
};
// ===== hulk =====
A['hulk:s0']=d=>{ // the unrippable purple pants (stretchy, with ragged hems but intact seat)
  const O='#24123A', P='#8A5AC0', P2='#6A3E9A', P3='#B48AE0', P4='#4E2A78', B='#3A2A20', Y='#F0C040';
  // waistband
  d.rect(5,2,22,4,P2); d.hline(5,26,2,P3); d.rect(14,3,4,2,B); d.px(15,3,Y); d.px(16,3,Y);
  // body
  d.poly([[5,6],[27,6],[29,24],[18,24],[16,12],[14,24],[3,24]],P);
  d.poly([[17,6],[27,6],[29,24],[19,24],[17,12]],P2);
  // ragged torn hems at the bottom (pants survived; only the hems fray)
  d.stamp(2,24,['pp.ppp.pp.pp..','p...pp..p...p.','....p.........'],{p:P});
  d.stamp(18,24,['qq.qqq.qq.qq','.q..qq..q..q','.....q......'],{q:P2});
  // seams & folds
  d.line(16,6,16,11,P4); d.line(9,8,8,20,P3); d.line(11,10,10,22,P3); d.line(22,9,24,21,P4); d.line(6,14,8,14,P4); d.line(25,16,27,16,P4);
  d.px(20,8,P4); d.px(21,8,P4);
  // pocket stitches
  d.line(6,7,9,10,P3); d.line(26,7,23,10,P4);
  // a sewn patch
  d.rect(22,17,4,4,'#6AAE40'); d.frame(22,17,4,4,'#3A7A20'); d.px(23,18,'#FFFFFF');
  d.outline(O);
  // stretch marks showing it held
  for(const [x,y] of [[1,10],[0,12],[31,10],[30,12]]) d.px(x,y,P3);
};
A['hulk:s1']=d=>{ // smart Hulk tacos: one big, one small (Banner size), stuffed
  const O='#4A2A10', S='#F6C84A', S2='#D89A2A', S3='#FFE890', L='#6AC04A', L2='#3E8A2A', T='#E8402A', M='#8A4A2A', M2='#6A3418', Ch='#FFE070', Cr='#FFFFFF';
  const taco=(cx,cy,r)=>{
    // filling peeking above the shell
    for(let x=cx-r+1;x<=cx+r-1;x++){const h=Math.round(Math.sqrt(Math.max(0,r*r-(x-cx)**2))*0.35); d.vline(x,cy-h-2,cy,(x%3===0)?L:(x%3===1)?L2:L); if(x%4===0) d.px(x,cy-h-1,T); if(x%4===2) d.px(x,cy-h,M); if(x%5===1) d.px(x,cy-h-1,Ch)}
    // shell half-moon
    for(let y=cy;y<=cy+r;y++)for(let x=cx-r;x<=cx+r;x++) if((x-cx)**2+(y-cy)**2<=r*r) d.px(x,y,S);
    for(let y=cy;y<=cy+r;y++)for(let x=cx-r;x<=cx+r;x++) if((x-cx)**2+(y-cy)**2<=r*r && (x-cx)+(y-cy)*1.5>r*0.6) d.px(x,y,S2);
    d.line(cx-r+2,cy+1,cx-2,cy+r-1,S3);
    for(let i=0;i<4;i++) d.px(cx-r/2+i*r/3,cy+r/2+((i%2)),S2);
  };
  taco(12,13,11); taco(25,21,6);
  d.ell(10,8,2,1,Cr);
  d.outline(O);
  // a giant green fingerprint / thumb smudge and a small one (half each)
  d.px(3,28,'#6AAE40'); d.px(4,29,'#6AAE40'); d.px(5,28,'#6AAE40');
  twinkle(d,29,5,'#FFE070','#FFFFFF');
};
A['hulk:s2']=d=>{ // nano gauntlet: red-gold glove with six glowing stones, sparks and smoke
  const O='#2A0E0A', R='#D8302A', R2='#A01E1A', R3='#F86A5A', G='#F0B83A', G2='#B8801A', G3='#FFE890', Sm='#8A8A9A', Sm2='#B8B8C8';
  // smoke wisps behind
  d.circ(5,6,2,Sm); d.circ(8,3,2,Sm2); d.circ(27,4,2,Sm); d.circ(25,1,1.5,Sm2);
  // fingers (raised, snap pose)
  for(const [x,t] of [[9,7],[13,5],[17,5],[21,8]]){d.rect(x,t,4,12-(t-5),R); d.hline(x,x+3,t+3,G2); d.hline(x,x+3,t+7,G2); d.vline(x,t,15,R3); d.vline(x+3,t,15,R2); d.rect(x,t,4,1,G)}
  // thumb
  d.poly([[5,18],[9,14],[11,16],[8,21]],R); d.line(6,18,9,15,R3);
  // palm/back of hand
  d.rect(8,15,17,10,R); d.rect(20,15,5,10,R2); d.hline(9,23,15,R3);
  // knuckle stone row (six stones)
  const st=['#5A6AF0','#F04A4A','#B05AF0','#F0D040','#4AD06A','#F08A2A'];
  [[11,10],[15,8],[19,8],[23,11],[7,18],[15,19]].forEach(([x,y],i)=>{d.rect(x-1,y-1,3,3,G); d.px(x,y,st[i]); d.px(x-1,y,st[i]); d.px(x,y-1,'#FFFFFF')});
  // gold center plate
  d.ell(16,20,4,3,G); d.ell(16,20,2,1.5,G3); d.px(16,20,'#FFFFFF');
  // cuff
  d.rect(9,25,15,5,G); d.rect(9,25,15,1,G3); d.rect(19,25,5,5,G2); d.hline(9,23,28,G2);
  d.rect(10,30,13,2,'#5A5A6A'); d.hline(11,21,30,'#3A3A48');
  d.outline(O);
  // energy sparks
  for(const [x,y] of [[2,12],[29,15],[3,26],[28,24],[30,9]]) twinkle(d,x,y,'#FFE890','#FFFFFF');
};
A['hulk:c0']=d=>{ // New York street: skyscrapers, crosswalk, yellow taxis, giant (careful) footprint beside a taxi
  d.grad(0,0,64,24,['#9ACCF0','#AAD4F2','#BCDCF4','#CCE4F6']);
  // far skyline incl. a spire tower
  for(const [x,w,h,c] of [[0,8,16,'#8A9AB8'],[9,6,20,'#7A8AA8'],[26,7,22,'#8A9AB8'],[36,6,14,'#7A8AA8'],[44,6,26,'#8A9AB8'],[52,7,18,'#7A8AA8'],[60,4,15,'#8A9AB8']]) d.rect(x,24-h,w,h,c);
  d.poly([[45,-2],[47,-6],[49,-2]],'#8A9AB8'); d.vline(47,0,4,'#6A7A98'); d.rect(45,2,5,2,'#9AAAC8');
  for(let x=0;x<64;x++)for(let y=2;y<24;y++) if(d.get(x,y)!==null&&d.get(x,y)[1]!=='9'&&x%3===1&&y%3===1&&d.get(x,y)!=='#A Abb') d.px(x,y,'#C8D8F0');
  // closer brownstone + store awnings (right)
  d.rect(30,10,34,14,'#B86A4A'); for(let x=32;x<64;x+=5) {d.rect(x,12,3,3,'#F8E8A0'); d.rect(x,17,3,3,'#9ACCE0')} d.rect(30,10,34,1,'#8A4A30');
  d.rect(30,20,34,4,'#3A3A48'); for(let x=31;x<64;x+=4) {d.rect(x,19,4,2,(x/4|0)%2?'#2E9A5A':'#FFFFFF')}
  // sidewalk + road
  d.rect(0,24,64,3,'#B8B8C0'); d.hline(0,63,24,'#D8D8E0'); d.rect(0,27,64,13,'#4A4A58');
  for(let x=2;x<64;x+=8) d.rect(x,33,4,1,'#F0D040');
  // crosswalk (right side)
  for(let x=40;x<62;x+=4) d.rect(x,28,2,11,'#E8E8F0');
  // taxis
  const taxi=(x,y)=>{d.rect(x,y,13,4,'#F8C82A'); d.rect(x+3,y-3,7,3,'#F8C82A'); d.rect(x+4,y-2,2,2,'#9ACCE0'); d.rect(x+7,y-2,2,2,'#9ACCE0'); d.rect(x+5,y-4,3,1,'#FFFFFF'); d.hline(x,x+12,y+2,'#2A2A2A'); for(let i=x+1;i<x+12;i+=2) d.px(i,y+2,'#F8F8F8'); d.circ(x+3,y+4,1.2,'#1A1A1A'); d.circ(x+10,y+4,1.2,'#1A1A1A'); d.px(x+12,y,'#FFF4A0')};
  taxi(26,30); taxi(48,25);
  // giant green-tinted footprint on the sidewalk next to the taxi, cracked edges
  d.ell(32,37,4,2,'#3A3A48'); for(const x of [28,30,32,34,36]) d.px(x,35,'#3A3A48'); d.line(36,37,39,38,'#2A2A38');
  // hydrant + lamp
  d.rect(23,22,2,3,'#E0402A'); d.px(22,23,'#E0402A'); d.px(25,23,'#E0402A'); d.vline(28,6,24,'#3A3A48'); d.hline(28,30,6,'#3A3A48'); d.px(30,7,'#FFF4A0');
};
A['hulk:c1']=d=>{ // Kolkata: hazy warm day, cantilever bridge, colorful buildings, yellow taxi, auto-rickshaw, clinic
  d.grad(0,0,64,20,['#F8D890','#F8E0A8','#F4E8C0','#F0ECD0']);
  sun(d,10,5,3,'#FFF8E0','#FFF0C0');
  // howrah-style cantilever bridge
  d.hline(20,63,15,'#6A6A7A'); for(const x of [26,52]){d.rect(x,2,2,13,'#6A6A7A'); d.rect(x+5,2,2,13,'#6A6A7A'); d.hline(x,x+6,2,'#6A6A7A'); d.line(x,3,x+6,13,'#6A6A7A'); d.line(x+6,3,x,13,'#6A6A7A')}
  d.line(33,3,51,14,'#6A6A7A'); d.line(51,3,33,14,'#6A6A7A'); d.line(33,3,51,3,'#6A6A7A'); d.line(20,15,26,8,'#6A6A7A'); d.line(59,8,63,12,'#6A6A7A');
  // river strip
  d.rect(0,16,64,3,'#9AB8B8'); d.hline(30,40,17,'#C8E0E0');
  // riverside ghat steps (left)
  d.rect(0,19,24,7,'#D8B888'); for(let y=20;y<26;y+=2) d.hline(0,23,y,'#B89868'); d.rect(0,18,24,1,'#9AB8B8');
  // colorful buildings row (right, center)
  const cols=[['#F4A0B0','#D87A8A'],['#8AD0C8','#5AA8A0'],['#F8C860','#D8A040'],['#B8A0E0','#9078C0'],['#F49A5A','#D07A3A']];
  [[24,8],[32,10],[40,7],[48,9],[56,8]].forEach(([x,h],i)=>{const [c,c2]=cols[i]; d.rect(x,20-h+0,8,h+6,c); d.rect(x,20-h,8,1,c2); for(let y=22-h;y<24;y+=3){d.rect(x+1,y,2,2,'#5A3A3A'); d.rect(x+5,y,2,2,'#5A3A3A'); d.hline(x,x+7,y+2,c2)}});
  // clinic sign with red cross
  d.rect(34,13,7,5,'#FFFFFF'); d.frame(34,13,7,5,'#8A8A9A'); d.hline(36,38,15,'#E0402A'); d.vline(37,14,16,'#E0402A');
  // street
  d.rect(0,26,64,14,'#C8A070'); d.rect(0,26,64,1,'#A88050'); specks(d,14,0,63,28,39,['#B89060','#D8B080']);
  // yellow ambassador taxi
  d.rect(40,31,14,4,'#F8D020'); d.poly([[43,31],[45,27],[51,27],[52,31]],'#F8D020'); d.rect(45,28,2,2,'#9ACCE0'); d.rect(48,28,3,2,'#9ACCE0'); d.circ(43,35,1.2,'#1A1A1A'); d.circ(51,35,1.2,'#1A1A1A'); d.hline(40,53,33,'#D8A810');
  // auto-rickshaw (green/yellow)
  d.poly([[26,28],[34,28],[35,34],[25,34]],'#3A9A4A'); d.rect(26,26,8,2,'#F8D020'); d.rect(28,29,4,3,'#2A2A2A'); d.rect(25,34,2,2,'#1A1A1A'); d.rect(33,34,2,2,'#1A1A1A'); d.rect(29,34,2,2,'#1A1A1A'); d.px(26,34,'#8A8A9A'); d.px(34,34,'#8A8A9A');
  // marigold garland strung across
  for(let x=24;x<64;x+=2) d.px(x,1+Math.round(Math.sin((x-24)/40*Math.PI)*3),x%4?'#F8901A':'#F8C81A');
  // stethoscope left on a crate near the pet (Banner the doctor)
  d.rect(56,32,7,5,'#6A3A2A'); d.hline(56,62,32,'#8A5A3A'); d.rect(58,30,3,2,'#4A2A1A'); d.px(59,31,'#6A3A2A'); d.hline(58,60,34,'#FFFFFF'); d.vline(59,33,35,'#FFFFFF'); d.px(59,34,'#E0402A');
};
A['hulk:c2']=d=>{ // Sakaar arena: junk-planet sky, colosseum walls, crowd, giant green champion head statue, sand floor
  d.grad(0,0,64,16,['#E8604A','#F0804A','#F8A050','#F8C070']);
  // floating junk + wormhole
  d.ring(8,5,3,'#8A3A8A'); d.ring(8,5,2,'#C85AB8'); d.px(8,5,'#FFE0F0');
  for(const [x,y] of [[20,3],[30,6],[54,2]]){d.rect(x,y,3,2,'#6A4A5A'); d.px(x+1,y-1,'#8A6A7A')}
  // arena wall ring (back)
  d.rect(0,12,64,10,'#A87A5A'); d.rect(0,12,64,2,'#C89A70');
  for(let x=1;x<64;x+=5){d.rect(x,15,3,5,'#6A4A3A'); d.px(x+1,15,'#3A2A28')}
  // crowd dots
  for(let x=0;x<64;x+=2) d.px(x,11,['#F05A6A','#5AA0F0','#F0D040','#8AE06A','#E0A0F0'][(x*7)%5]);
  // champion tower with giant green head
  d.rect(44,0,16,22,'#8A5A4A'); d.rect(44,0,16,1,'#C89A70');
  d.circ(52,6,6,'#6AAE40'); d.rect(46,4,13,6,'#6AAE40'); d.rect(47,1,11,3,'#1A1A1A'); d.px(46,3,'#1A1A1A'); d.px(58,3,'#1A1A1A');
  d.hline(48,50,5,'#2A3A10'); d.hline(54,56,5,'#2A3A10'); d.px(49,6,'#FFFFFF'); d.px(55,6,'#FFFFFF'); d.rect(49,9,7,2,'#2A3A10'); d.hline(50,54,9,'#FFFFFF');
  d.rect(46,12,13,3,'#5A9A34'); d.vline(52,5,8,'#5A9A34');
  // banners
  for(const x of [36,62]){d.vline(x,2,14,'#4A3A3A'); d.rect(x-2,3,4,8,'#3A9A4A'); d.px(x-1,5,'#F0D040'); d.px(x,5,'#F0D040')}
  // sand arena floor
  d.rect(0,22,64,18,'#E8C080'); d.grad(0,22,64,3,['#C89A60','#D8AE70','#E8C080']);
  for(let y=26;y<40;y+=3) for(let x=(y*5)%7;x<64;x+=9) d.hline(x,x+2,y,'#D8AE70');
  // smash crater + dropped helmet (Thor came, Hulk won)
  d.ell(42,33,8,3,'#C89A60'); d.ell(42,33,6,2,'#B88A50'); d.line(34,33,30,35,'#B88A50'); d.line(50,32,54,30,'#B88A50');
  d.circ(42,31,2.5,'#C8C8D8'); d.hline(40,44,33,'#A8A8B8'); d.line(39,30,37,27,'#FFFFFF'); d.line(45,30,47,27,'#FFFFFF'); d.px(41,30,'#FFFFFF');
  // trophy on a pedestal
  d.rect(56,30,6,6,'#8A5A4A'); d.rect(57,25,4,3,'#F0C040'); d.px(56,25,'#F0C040'); d.px(61,25,'#F0C040'); d.rect(58,28,2,2,'#C89A20'); d.px(58,25,'#FFF0A0');
};
// ===== chiikawa =====
A['chiikawa:s0']=d=>{ // a bundle of hard-pulled weeds with dirt clumps on the roots, tied with a little ribbon
  const O='#2A3A1A', G='#5AB04A', G2='#3A8A34', G3='#9ADC6A', Dt='#8A5A34', Dt2='#6A4024', Dt3='#A87444', Rt='#E8D8B0', R='#F8A8B8', R2='#E07890';
  // blades and leaves fanning up
  for(const [x0,y0,x1,y1,c] of [[14,18,6,2,G2],[15,18,11,1,G],[16,18,16,0,G3],[16,18,21,1,G],[17,18,26,3,G2],[15,18,3,8,G],[17,18,29,9,G]]){d.line(x0,y0,x1,y1,c); d.line(x0+1,y0,x1+1,y1,c)}
  // dandelion-ish weed flower and a clover leaf
  d.circ(6,3,2,'#FFE04A'); d.px(6,3,'#F0B020'); d.circ(26,4,2,G); d.circ(28,6,1.5,G); d.circ(24,6,1.5,G);
  d.poly([[9,8],[12,5],[13,10]],G3); d.poly([[22,7],[20,4],[19,10]],G3);
  // ribbon tie
  d.rect(13,17,6,3,R); d.poly([[13,18],[9,15],[9,21]],R); d.poly([[18,18],[22,15],[22,21]],R2); d.px(15,18,R2);
  // roots with dirt clumps
  d.ell(16,25,7,4,Dt); d.ell(14,24,4,2,Dt3); d.ell(18,27,4,2,Dt2);
  for(const [a,b,c,e] of [[12,27,9,31],[15,28,14,31],[18,28,20,31],[20,26,24,30]]) d.line(a,b,c,e,Rt);
  for(const [x,y] of [[11,24],[17,23],[20,25]]) d.px(x,y,Dt3);
  d.outline(O);
  // sweat drop of effort + hopeful sparkle
  d.stamp(27,13,['.b.','bbb','bwb','.b.'],{b:'#7AC8F0',w:'#FFFFFF'}); twinkle(d,3,15,'#FFE04A','#FFFFFF');
  d.px(4,29,Dt); d.px(27,30,Dt); d.px(29,28,Dt2);
};
A['chiikawa:s1']=d=>{ // weeding exam workbook: red cover with a sprout, tabs, bookmark and a pencil
  const O='#3A1418', R='#E04A4A', R2='#B0302E', R3='#F88080', Pg='#FFF8EC', Pg2='#E0D4C0', G='#5AB04A', G2='#3A8A34', Y='#FFD84A', B='#7AC8F0', Pc='#F8C83A', Pc2='#E0A020';
  // pages edge
  d.rect(7,4,20,25,Pg); for(let y=6;y<28;y+=2) d.hline(25,26,y,Pg2);
  // cover
  d.rect(5,3,19,25,R); d.rect(5,3,3,25,R2); d.vline(8,3,27,R3); d.hline(9,23,4,R3);
  // label box with sprout
  d.rect(11,8,10,9,Pg); d.frame(11,8,10,9,R2); d.line(16,15,16,12,G2); d.poly([[16,12],[12,10],[14,13]],G); d.poly([[16,12],[20,9],[19,13]],G); d.hline(13,19,15,'#8A5A34');
  // title lines
  d.hline(11,20,19,Pg); d.hline(12,18,21,R3);
  // sticky tabs
  d.rect(24,8,3,3,Y); d.rect(24,13,3,3,B); d.rect(24,18,3,3,'#9AE07A');
  // ribbon bookmark
  d.rect(19,27,2,4,'#F8A8B8'); d.px(19,31,'#F8A8B8'); d.px(20,30,'#E07890');
  // star sticker "you can do it"
  d.stamp(9,22,['.y.','yyy','y.y'],{y:Y});
  // pencil diagonal across corner
  d.line(20,30,30,20,Pc); d.line(21,30,31,20,Pc2); d.line(20,29,30,19,Pc); d.px(30,19,'#F8A8B8'); d.px(31,19,'#F8A8B8'); d.px(19,31,'#3A3A3A'); d.px(20,31,'#E8C890');
  d.outline(O);
  // determination sparkles
  twinkle(d,2,2,'#FFE04A','#FFFFFF'); d.px(30,4,'#FFE04A');
};
A['chiikawa:s2']=d=>{ // the weeding license: gold medal with a sprout emblem on a ribbon, plus happy tears
  const O='#4A2A08', Y='#F8C83A', Y2='#D89A1A', Y3='#FFF0A0', Rb='#E05A6A', Rb2='#B83A4A', Bl='#5A9AE0', Bl2='#3A70B8', G='#5AB04A', G2='#3A8A34', T='#9AD8F8';
  // ribbon V
  d.poly([[6,0],[13,0],[18,14],[13,16]],Rb); d.poly([[25,0],[18,0],[13,14],[18,16]],Bl); d.poly([[9,0],[11,0],[15,12],[14,13]],Rb2); d.poly([[22,0],[20,0],[17,12],[18,13]],Bl2);
  // medal
  d.circ(16,21,9,Y2); d.circ(16,21,8,Y); d.ring(16,21,6,Y2); d.circ(13,17,2,Y3);
  // notches around rim
  for(let a=0;a<12;a++){const x=16+Math.cos(a/12*6.283)*9, y=21+Math.sin(a/12*6.283)*9; d.px(x,y,Y3)}
  // sprout emblem
  d.vline(16,20,26,G2); d.poly([[16,21],[11,18],[13,22]],G); d.poly([[16,20],[21,16],[20,21]],G); d.line(12,19,15,21,'#9ADC6A');
  d.hline(13,19,26,'#8A5A34');
  d.outline(O);
  // happy tears drops
  d.stamp(1,16,['.t.','ttt','ttt','.t.'],{t:T}); d.stamp(28,15,['.t.','ttt','ttt','.t.'],{t:T}); d.px(2,22,T); d.px(29,22,T);
  twinkle(d,4,5,'#FFE04A','#FFFFFF'); twinkle(d,28,6,'#FFE04A','#FFFFFF');
};
A['chiikawa:c0']=d=>{ // weeding field: bright day, tall weeds, a pile of pulled weeds, job board with flyers, basket
  d.grad(0,0,64,18,['#8AD4F8','#A0DCF8','#B4E4FA','#C8ECFA']);
  cloud(d,14,5,4); cloud(d,44,3,5); cloud(d,58,10,2);
  // hills
  d.ell(10,19,20,5,'#8ACC6A'); d.ell(50,19,22,4,'#7AC060'); d.rect(0,18,64,2,'#7AC060');
  // field
  d.rect(0,20,64,20,'#9AD878'); d.dither(0,20,64,2,'#8ACC6A','#9AD878');
  // unweeded patch of tall weeds (right side)
  for(let x=38;x<64;x+=2){const h=4+((x*7)%5); d.vline(x,32-h,32,'#4E9A3A'); d.px(x-1,32-h+1,'#6AB850'); if(x%6===0) d.px(x,31-h,'#FFE04A'); if(x%8===2){d.px(x+1,30-h,'#FFFFFF')}}
  d.rect(38,32,26,8,'#7AC060'); tufts(d,12,38,63,33,39,'#4E9A3A','#6AB850');
  // weeded neat area left/center (darker soil stripes)
  d.rect(0,30,36,10,'#A8D888'); for(let y=31;y<40;y+=3) d.hline(0,35,y,'#C8A878');
  // pile of pulled weeds + basket
  d.ell(30,30,5,3,'#5AA040'); d.ell(30,29,4,2,'#7AC058'); d.px(27,27,'#FFE04A'); d.px(32,26,'#4E9A3A'); d.px(33,27,'#4E9A3A');
  d.rect(24,31,6,4,'#D8A860'); d.hline(23,30,31,'#A87838'); d.vline(25,31,34,'#B88848'); d.vline(28,31,34,'#B88848'); d.px(26,30,'#5AA040');
  // job board (labor board) with flyers
  d.vline(46,8,20,'#7A5236'); d.vline(58,8,20,'#7A5236'); d.rect(44,6,16,10,'#C8925A'); d.frame(44,6,16,10,'#7A5236');
  d.rect(46,8,4,5,'#FFFFFF'); d.rect(51,8,4,4,'#FFF0A0'); d.rect(55,10,3,4,'#F8C8D8'); d.hline(47,49,10,'#5AA040'); d.px(52,9,'#E05A4A'); d.px(47,9,'#5AA040');
  // dessert dream: a little coin pouch on a stump
  d.rect(17,19,6,4,'#9A6A40'); d.ell(20,19,3,1,'#C8925A'); d.ell(20,17,2,1.5,'#F0D060'); d.px(20,15,'#8A5A34'); d.px(19,16,'#FFF4A0');
};
A['chiikawa:c1']=d=>{ // cherry blossom hill: pink trees, falling petals, picnic blanket for three
  d.grad(0,0,64,22,['#A8D8F8','#BCE2FA','#D0EAFA','#E4F2FA']);
  cloud(d,32,4,4,'#FFFFFF');
  // hill
  d.ell(36,40,40,18,'#8AD070'); d.ell(36,40,38,16,'#9ADC7A'); d.rect(0,30,64,10,'#9ADC7A'); d.rect(0,26,20,14,'#9ADC7A'); d.ell(8,30,14,6,'#9ADC7A');
  // big blossom tree (center-right) and a smaller one
  const tree=(x,y,r)=>{d.rect(x-1,y,3,r+4,'#7A4A3A'); d.line(x,y+2,x-3,y-1,'#7A4A3A'); d.line(x+1,y+2,x+4,y-1,'#7A4A3A');
    for(const [a,b,k] of [[0,-r*0.6,1],[-r*0.7,-r*0.1,0.85],[r*0.7,-r*0.1,0.85],[-r*0.3,-r*0.9,0.7],[r*0.4,-r*0.9,0.7]]){d.circ(x+a,y+b,r*k*0.62,'#F4A8C0'); d.circ(x+a-1,y+b-1,r*k*0.45,'#F8C8D8')}
    for(let i=0;i<10;i++) d.px(x+d.ri(-r,r),y+d.ri(-r,0),'#FFFFFF')};
  tree(44,12,11); tree(60,16,6);
  // picnic blanket with checks, onigiri and three cups
  d.poly([[28,30],[50,30],[54,36],[24,36]],'#F07A8A'); for(let y=30;y<36;y++) for(let x=24;x<55;x++) if(d.get(x,y)==='#F07A8A'&&((x>>1)+(y>>1))%2) d.px(x,y,'#FFFFFF');
  for(const x of [32,38]){d.poly([[x,33],[x+2,30],[x+4,33]],'#FFFFFF'); d.rect(x+1,32,3,1,'#2A3A2A')}
  for(const [x,c] of [[44,'#F8C860'],[47,'#9AD8F8'],[50,'#F8A8B8']]) {d.rect(x,31,2,3,c); d.px(x,31,'#FFFFFF')}
  // falling petals across the sky
  for(const [x,y] of [[6,4],[14,10],[22,6],[28,14],[60,4],[56,26],[30,22],[18,18],[8,14],[36,26]]){d.px(x,y,'#F8B8CC'); d.px(x+1,y,'#F4A8C0')}
  // petals on ground
  for(const [x,y] of [[26,38],[40,38],[58,34],[22,32],[60,38]]) d.px(x,y,'#F8C8D8');
};
A['chiikawa:c2']=d=>{ // dark forest hunt: gloomy purple woods, a defeated blob monster with swirly eyes, dropped stick, glowing mushrooms
  d.grad(0,0,64,40,['#1E1A30','#262038','#2E2640','#36304A']);
  // twisted trees
  const twist=(x,w,c)=>{for(let y=0;y<32;y++){const o=Math.round(Math.sin(y/4+x)*1.2); d.hline(x+o,x+o+w-1,y,c)}};
  twist(2,3,'#14101E'); twist(30,4,'#1A1626'); twist(56,4,'#14101E'); twist(24,2,'#1A1626');
  for(const [x,y,r] of [[4,2,7],[30,0,8],[58,3,7],[44,0,6],[16,0,5]]) d.circ(x,y,r,'#1A2A26');
  // glowing eyes in the dark
  for(const [x,y] of [[12,12],[48,8],[40,16]]){d.px(x,y,'#F8E040'); d.px(x+2,y,'#F8E040')}
  // ground
  d.rect(0,30,64,10,'#2A3A2E'); d.grad(0,28,64,3,['#22302A','#2A3A2E','#30423A']); tufts(d,10,0,63,31,39,'#3A5040','#4A6050',[5,22,19,38]);
  // defeated monster (big dark blob) with swirl eyes and a bump on head
  d.ell(46,29,12,6,'#5A4A6A'); d.ell(44,27,9,4,'#6A5A80'); d.ell(42,25,3,1,'#8A7AA0');
  d.ring(42,28,1.5,'#FFFFFF'); d.px(42,28,'#FFFFFF'); d.ring(49,28,1.5,'#FFFFFF'); d.px(49,28,'#FFFFFF');
  d.line(44,32,47,32,'#2A2038'); d.px(43,33,'#2A2038'); d.px(48,33,'#2A2038');
  d.circ(47,22,1.5,'#7A6A90'); d.px(47,21,'#9A8AB0'); twinkle(d,52,19,'#F8E040','#FFFFFF'); twinkle(d,38,20,'#F8E040','#FFFFFF');
  // dropped stick weapon and a lost little cape
  d.line(26,38,34,33,'#9A7A50'); d.line(26,37,34,32,'#B8946A');
  // glowing mushrooms for light
  for(const [x,y] of [[58,34],[61,36],[30,30],[22,28]]){d.vline(x,y,y+2,'#C8E0D0'); d.rect(x-1,y-1,3,1,'#6AE0C8'); d.px(x,y-2,'#9AF8E0')}
  // tear drops on ground near pet spot (sniffle)
  d.px(24,34,'#7AC8F0'); d.px(25,35,'#7AC8F0');
  // moon peeking
  d.circ(20,5,2,'#E8E4C8');
};
// ===== marge =====
const brush=(d,pts,r,c)=>{for(let i=0;i+1<pts.length;i++){const [ax,ay]=pts[i],[bx,by]=pts[i+1]; const n=Math.max(1,Math.ceil(Math.hypot(bx-ax,by-ay)*2)); for(let k=0;k<=n;k++) d.circ(ax+(bx-ax)*k/n,ay+(by-ay)*k/n,r,c)}};
A['marge:s0']=d=>{ // big soft pretzel from the pretzel wagon, coarse salt, on a paper napkin
  const O='#4A2410', B='#B8642A', B2='#8A4418', B3='#E0944A', S='#FFFFFF', S2='#D8E0F0', N='#F4ECD8', N2='#D8CCB0';
  // napkin
  d.poly([[1,24],[29,22],[31,31],[3,31]],N); d.hline(3,31,31,N2); d.line(4,27,26,25,N2);
  // pretzel: outer loop (two lobes on top, round bottom) + arms twisting in the middle
  const loop=[[16,9],[13,4],[7,4],[3,9],[3,17],[6,24],[12,28],[20,28],[26,24],[29,17],[29,9],[25,4],[19,4],[16,9]];
  brush(d,loop,2.1,B2); brush(d,loop,1.4,B);
  const armL=[[16,9],[17,13],[15,15],[10,16],[5,16]], armR=[[16,9],[15,13],[17,15],[22,16],[27,16]];
  brush(d,armL,2.1,B2); brush(d,armL,1.4,B); brush(d,armR,2.1,B2); brush(d,armR,1.4,B);
  d.px(16,13,B2); d.px(15,14,B2); d.px(17,12,B3);
  // highlights along tops
  for(const [x,y] of [[2,12],[2,13],[3,8],[5,5],[7,3],[8,3],[20,3],[21,3],[24,4],[28,7],[4,20],[8,25],[9,26],[12,15],[20,15],[13,15],[24,15]]) d.px(x,y,B3);
  // salt crystals
  for(const [x,y] of [[10,4],[22,4],[28,12],[3,15],[5,22],[14,28],[22,26],[16,11],[9,16],[22,16],[27,20],[18,28]]) {d.px(x,y,S); d.px(x+1,y,S2)}
  d.outline(O);
};
A['marge:s1']=d=>{ // Marge's own painting of Ringo Starr in a gilded frame, his reply letter tucked in the corner
  const O='#2A1A10', F='#E0B040', F2='#B08020', F3='#FFE48A', BG='#3A70D8', BG2='#5A90F0', H='#3A2418', H2='#5A3A26', SK='#F0C8A0', SK2='#D8A880', SH='#2A2A34', W='#FFFFFF', E='#F4F0E4', E2='#D0C8B4', R='#E04030';
  // frame
  d.rect(2,1,26,28,F2); d.rect(3,2,24,26,F); d.frame(3,2,24,26,F3); d.rect(5,4,20,22,F2);
  for(const [x,y] of [[2,1],[27,1],[2,28],[27,28]]) d.px(x,y,F3);
  // canvas: blue painterly brushstrokes
  d.rect(6,5,18,20,BG); for(let y=5;y<25;y+=3) for(let x=6+(y%2);x<24;x+=5) d.hline(x,x+1,y,BG2);
  // portrait: suit shoulders
  d.ell(15,24,8,3,SH); d.poly([[14,21],[16,21],[15,24]],W);
  // face
  d.ell(15,15,4,5,SK); d.vline(18,12,18,SK2);
  // mop-top hair (Beatles fringe) + sideburns
  d.ell(15,10,5,3,H); d.rect(10,10,2,6,H); d.rect(19,10,2,6,H); d.hline(11,19,12,H); d.px(13,9,H2); d.px(16,8,H2); d.px(18,10,H2);
  // eyes, big nose, beard & mustache
  d.px(13,14,SH); d.px(17,14,SH); d.vline(15,15,16,SK2); d.px(16,17,SK2);
  d.hline(13,17,18,H); d.ell(15,19.5,3,1.5,H); d.px(15,19,SK2);
  // rings on a raised hand (peace sign) at side
  d.vline(22,17,19,SK); d.vline(23,17,19,SK); d.rect(21,20,3,2,SK); d.px(22,19,'#C0C0C0');
  // Marge's signature squiggle (M) bottom-left
  d.stamp(7,22,['m.m','.m.'],{m:R});
  // reply letter tucked into the frame corner (with a tiny heart seal)
  d.poly([[20,22],[30,19],[31,27],[22,30]],E); d.line(20,22,26,25,E2); d.line(26,25,30,19,E2); d.px(26,25,R); d.px(25,24,R); d.px(27,24,R);
  d.outline(O);
};
A['marge:s2']=d=>{ // pink outlet Chanel suit on a hanger, black trim, gold buttons, slashed price tag, pins for altering
  const O='#2A1820', P='#F48AB0', P2='#D86A94', P3='#FFC0D6', K='#2A2A32', G='#F0C030', G2='#B08818', HG='#9A9AA8', HG2='#D0D0DC', T='#FFFFFF', R='#E03040', BL='#FFF4F8';
  // hanger hook and bar
  d.ring(15,2,1.5,HG); d.clear(13,3); d.clear(13,2); d.vline(15,4,5,HG); d.line(15,5,6,8,HG2); d.line(15,5,24,8,HG2);
  // sleeves hanging straight down
  d.poly([[8,8],[4,10],[3,24],[7,24],[8,13]],P2); d.poly([[22,8],[26,10],[27,24],[23,24],[22,13]],P2);
  d.vline(4,11,22,P); d.hline(3,7,23,K); d.hline(23,27,23,K); d.hline(3,7,22,P3); d.hline(23,27,22,P3);
  // jacket body (boxy)
  d.poly([[8,8],[22,8],[23,23],[7,23]],P); d.rect(18,9,5,14,P2); d.vline(8,9,22,P3);
  // blouse V neckline + black trim
  d.poly([[12,8],[18,8],[15,15]],BL); d.line(12,8,15,15,K); d.line(18,8,15,15,K); d.hline(8,11,8,K); d.hline(19,22,8,K);
  d.vline(15,15,23,K);
  d.hline(7,23,23,K);
  // pockets with trim
  d.frame(9,17,4,3,K); d.frame(18,17,4,3,K);
  // gold buttons
  for(const y of [16,19,21]){d.px(14,y,G); d.px(16,y,G2)}
  d.px(10,17,G); d.px(19,17,G2);
  // boucle texture flecks
  for(const [x,y] of [[10,11],[12,14],[9,21],[20,12],[13,20],[5,15],[25,18],[25,12]]) d.px(x,y,P3);
  // skirt below
  d.poly([[8,24],[22,24],[24,31],[6,31]],P2); d.rect(8,24,15,1,P); d.hline(6,24,31,K); d.line(12,25,11,30,P); d.line(18,25,19,30,P);
  // outlet price tag on string, price slashed
  d.line(22,9,27,6,'#808080'); d.rect(26,1,6,7,T); d.hline(27,30,3,K); d.hline(27,30,5,K); d.line(26,7,31,1,R); d.px(27,2,R);
  // pins (for altering) at hem
  d.line(24,26,26,28,HG2); d.px(24,26,R); d.line(5,26,7,28,HG2); d.px(5,26,G);
  d.outline(O);
};
A['marge:c0']=d=>{ // Kwik-E-Mart on a sunny day: striped sign, big windows, Squishee poster, milk carton & water bottle on the lot
  d.grad(0,0,64,24,['#6AB0F0','#7ABCF4','#8AC8F8','#9AD2FA']);
  cloud(d,10,5,6,'#FFFFFF'); cloud(d,32,3,4,'#FFFFFF');
  // background palm-ish trees & hills
  d.ell(6,22,10,4,'#78B858'); d.ell(58,22,8,3,'#78B858');
  // parking lot
  d.rect(0,24,64,16,'#9A9AA0'); d.hline(0,63,24,'#B8B8C0'); for(let x=2;x<64;x+=10) d.vline(x,33,39,'#E8E8E8');
  d.dither(0,36,64,4,'#9A9AA0','#8C8C94');
  // store body
  d.rect(26,10,38,15,'#E8DCB8'); d.rect(26,10,38,2,'#D0C4A0');
  // big sign band (red/yellow/green stripes)
  d.rect(24,5,40,6,'#E04030'); d.rect(24,5,40,2,'#F0C030'); d.hline(24,63,10,'#40A050'); d.hline(24,63,9,'#40A050');
  // pixel letters "KEM" on sign
  d.stamp(36,7,['w.w.ww.w.w','ww..w..www','w.w.ww.w.w'],{w:'#FFFFFF'});
  // roof cap
  d.hline(24,63,4,'#B02820');
  // windows with posters
  d.rect(28,13,12,9,'#5AB0D8'); d.rect(46,13,17,9,'#5AB0D8'); d.line(29,14,32,14,'#AEE0F4'); d.line(47,14,51,14,'#AEE0F4');
  // squishee poster (cup with straw)
  d.rect(31,16,4,5,'#E04030'); d.rect(31,15,4,1,'#4AC8F0'); d.vline(34,13,15,'#FFFFFF'); d.px(32,18,'#FFFFFF');
  // shelves inside right window
  d.hline(47,62,17,'#8A7A60'); for(let x=48;x<62;x+=2) {d.px(x,16,['#F0C030','#E04030','#40A050','#F48AB0'][x%4]); d.px(x+1,20,['#4A8AE0','#F0C030'][x%2])} d.hline(47,62,21,'#8A7A60');
  // glass door
  d.rect(41,13,4,11,'#3A8AB8'); d.vline(43,14,23,'#AEE0F4'); d.px(41,18,'#F0C030');
  // ice chest & newspaper box outside
  d.rect(56,22,7,4,'#F0F4F8'); d.hline(56,62,22,'#4A8AE0'); d.rect(27,21,3,4,'#E04030');
  // sidewalk curb
  d.hline(24,63,25,'#C8C8CC'); d.hline(24,63,26,'#ACACB4');
  // shopping cart parked center
  d.frame(30,27,7,4,'#D0D0D8'); d.line(37,27,38,25,'#D0D0D8'); d.hline(30,36,29,'#D0D0D8'); d.px(31,32,'#3A3A40'); d.px(35,32,'#3A3A40');
  // milk carton & water bottle on the lot
  d.rect(44,30,3,4,'#FFFFFF'); d.poly([[44,30],[45.5,28],[46,30]],'#FFFFFF'); d.hline(44,46,31,'#4A8AE0'); d.px(45,28,'#D0D0D8');
  d.rect(49,30,2,4,'#9AD8F8'); d.px(49,29,'#2A6AC0'); d.px(50,29,'#2A6AC0'); d.px(49,31,'#FFFFFF');
  // a car parked far right
  d.rect(54,30,10,4,'#F0C030'); d.rect(56,28,6,2,'#D8A818'); d.rect(57,28,4,1,'#AEE0F4'); d.px(56,34,'#2A2A30'); d.px(62,34,'#2A2A30');
};
A['marge:c1']=d=>{ // Capital City at dusk: tall neon skyline, honking traffic streaks, Homer's lost hat and a dropped donut
  d.grad(0,0,64,24,['#2A1E58','#3A2A70','#5A3A88','#8A4A90','#C86A88','#F09A78']);
  stars(d,10,0,63,0,6,['#FFF4C0','#C8C0F0']);
  d.circ(10,4,2,'#FFF4D0');
  // far skyline silhouettes
  for(const [x,w,h] of [[0,6,10],[5,5,14],[22,4,12],[25,6,16],[40,5,13],[60,4,15]]) d.rect(x,22-h,w,h,'#3A2E60');
  // big towers
  const tower=(x,w,top,c,c2,win)=>{d.rect(x,top,w,24-top,c); d.vline(x+w-1,top,23,c2); for(let y=top+2;y<23;y+=2) for(let i=1;i<w-1;i+=2) if(((x*7+y*3+i)%5)) d.px(x+i,y,win)};
  tower(30,8,6,'#3A3C70','#2A2C58','#F8E07A'); d.vline(34,1,5,'#8888B0'); d.px(34,0,'#FF4040');
  tower(39,6,10,'#4A3A78','#38285E','#F8E07A');
  tower(45,9,3,'#2E3466','#22284E','#F8E07A'); d.poly([[45,3],[49,0],[54,3]],'#2E3466');
  tower(55,6,9,'#4A3A78','#38285E','#F8E07A');
  tower(25,5,12,'#2E3466','#22284E','#F8E07A');
  // neon signs (dancing donut-ish & a 'Hmm' heart-shaped blink)
  d.ring(42,14,1.5,'#FF60C0'); d.px(42,14,'#3A2E60'); d.frame(56,13,4,3,'#60F0F0');
  // road
  d.rect(0,24,64,16,'#3A3848'); d.hline(0,63,24,'#6A6878'); d.hline(0,63,25,'#4A4858');
  for(let x=24;x<64;x+=6) d.hline(x,x+2,31,'#F0D040');
  // car light streaks
  d.hline(26,63,28,'#FF5040'); d.hline(30,58,29,'#B82820'); d.hline(24,63,34,'#FFF4B0'); d.hline(28,55,35,'#F0D040');
  // yellow cab
  d.rect(48,30,9,3,'#F0C030'); d.rect(50,28,5,2,'#F0C030'); d.rect(51,28,3,1,'#AEE0F4'); d.px(48,33,'#1A1A20'); d.px(55,33,'#1A1A20'); d.px(57,31,'#FFF4B0');
  // honk lines
  d.line(59,27,61,26,'#FFFFFF'); d.line(59,29,62,29,'#FFFFFF');
  // streetlamp
  d.vline(24,14,26,'#8888A0'); d.hline(24,27,14,'#8888A0'); d.px(27,15,'#FFF4B0'); d.dither(26,16,3,2,'#FFF4B0','#3A3848');
  // Homer's dropped pink donut and a lost white hat
  d.circ(34,37,2,'#F0B060'); d.circ(34,37,1.5,'#F48AB0'); d.px(34,37,'#3A3848'); d.px(33,36,'#FFFFFF'); d.px(35,36,'#60C0F0');
  d.rect(39,36,4,2,'#FFFFFF'); d.hline(38,43,38,'#E8E8E8'); d.hline(39,42,37,'#3A3A40');
};
A['marge:c2']=d=>{ // atop Marge's towering blue beehive: cloud sea below, curly hair "ground", lookout scope with balloons, a hairpin rail
  d.grad(0,0,64,22,['#4A90E8','#5AA0F0','#6AB0F4','#80C0F8','#9AD0FA']);
  // cloud sea far below on horizon
  d.rect(0,20,64,14,'#FFFFFF'); d.dither(0,30,64,4,'#FFFFFF','#E4ECF8'); for(let x=0;x<64;x+=7) d.circ(x+3,20,3,'#FFFFFF'); for(let x=4;x<64;x+=9) d.circ(x,22,2,'#E4ECF8');
  cloud(d,50,7,5,'#FFFFFF'); cloud(d,16,9,4,'#F0F6FF');
  // a tiny airplane passing BELOW-level
  d.hline(36,40,13,'#FFFFFF'); d.px(38,12,'#FFFFFF'); d.px(36,12,'#D04040'); d.hline(41,46,13,'#C8E0F8');
  // the hair summit: a giant blue beehive dome poking above the clouds, combed strands converging to the top
  const hx=32, hy=50, rx=44, ry=25;
  d.ell(hx,hy,rx,ry,'#2A5CC0'); d.ell(hx,hy+1,rx-1,ry-1,'#3A70D8');
  for(let k=-9;k<=9;k++){const sN=k/10; for(let y=hy-ry+1;y<40;y++){const t=Math.sqrt(Math.max(0,1-((y-hy)/ry)**2)); d.px(hx+sN*(rx-1)*t,y,k%2?'#2A5CC0':'#5A90F0')}}
  // glossy shine band
  for(let y=28;y<40;y++){const t=Math.sqrt(Math.max(0,1-((y-hy)/ry)**2)); d.px(hx-0.35*(rx-1)*t+1,y,'#9AC0FA')}
  // the very top curl tuft at right
  d.line(32,25,33,21,'#3A70D8'); d.line(33,21,36,19,'#3A70D8'); d.ring(37,20,1.2,'#3A70D8');
  // red hairpin-railing (bobby pins stuck in hair as a fence)
  for(const x of [30,34,38,42]){d.vline(x,23,28,'#E04030'); d.px(x,22,'#F06050')} d.hline(30,42,24,'#B82820');
  // coin-op viewing scope on a pole
  d.vline(46,22,28,'#606070'); d.rect(44,19,5,3,'#808090'); d.px(43,20,'#404050'); d.px(49,20,'#C0C0D0'); d.hline(45,47,28,'#404050');
  // balloons tied to the scope
  d.line(47,19,50,10,'#E8E8E8'); d.line(46,19,44,9,'#E8E8E8'); d.line(47,19,55,12,'#E8E8E8');
  d.ell(50,8,2,3,'#E04040'); d.px(49,7,'#FF9090'); d.ell(44,7,2,3,'#F0C030'); d.px(43,6,'#FFF0A0'); d.ell(55,10,2,3,'#40B060'); d.px(54,9,'#A0F0B0');
  // a pearl-necklace bead rolled up here + birds level with us
  d.line(34,34,38,32,'#D8D8E0'); d.px(34,34,'#9A9AA8'); // a stray bobby pin

  d.stamp(20,6,['b.b','.b.'],{b:'#2A3A60'}); d.stamp(26,4,['b.b','.b.'],{b:'#2A3A60'});
};
// ===== stego =====
const plate=(d,x,y,w,h,c,c2,c3)=>{d.poly([[x-w,y],[x-w*0.6,y-h*0.6],[x,y-h],[x+w*0.6,y-h*0.6],[x+w,y]],c); if(c2) d.poly([[x,y-h],[x+w*0.6,y-h*0.6],[x+w,y],[x,y]],c2); if(c3) d.line(x-w*0.5,y-h*0.5,x-1,y-h+1,c3)};
A['stego:s0']=d=>{ // a big soft napping leaf, slightly curled like a blanket, with a drool spot and a little zZ
  const O='#1E3A14', L='#7AC848', L2='#58A030', L3='#B0E880', V='#D8F4A8', S='#8A6A3A', Z='#5A7AC0', DR='#A0D8F0';
  // leaf body: broad oval on a diagonal
  d.poly([[3,28],[3,19],[8,10],[17,4],[29,2],[29,12],[24,21],[14,27],[6,29]],L);
  d.poly([[29,2],[29,12],[24,21],[14,27],[6,29],[17,19],[24,10]],L2);
  // curled-over edge (blanket fold) at bottom-left
  d.poly([[3,28],[6,22],[10,25],[7,29]],L3);
  // central vein + side veins
  d.line(4,29,27,4,V); for(const [x,y,dx,dy] of [[9,23,-2,-5],[13,19,-2,-6],[17,15,-1,-6],[21,11,0,-5],[11,21,5,1],[15,17,5,1],[19,13,5,0],[23,8,3,1]]) d.line(x,y,x+dx,y+dy,V);
  // stem
  d.line(1,31,4,28,S); d.px(2,31,S);
  // soft highlights
  for(const [x,y] of [[8,15],[11,11],[15,8],[7,19]]) d.px(x,y,L3);
  // dent where a head rested, drool spot
  d.ell(18,15,2,1,L2); d.px(20,18,DR); d.px(20,19,DR);
  d.outline(O);
  // zZ (sleepy), floating without outline
  d.stamp(1,8,['zzzzz','...z.','..z..','.z...','zzzzz'],{z:'#3A6AB0'}); d.stamp(8,1,['zzzz','..z.','.z..','zzzz'],{z:'#3A6AB0'});
};
A['stego:s1']=d=>{ // a thermometer built into a stego back plate: red bulb, mercury tube, warm-to-cool scale, little sun & snowflake
  const O='#3A2410', P='#F0A040', P2='#D07828', P3='#FFD080', G='#88B048', T='#F4F8FC', T2='#C8D4E0', R='#E83A2A', R2='#B02018', K='#5A4030';
  // plate silhouette (big pentagon-ish leaf shape) with rim
  plate(d,16,30,13,29,P,P2,P3);
  // inner panel
  d.poly([[8,27],[10,14],[16,6],[22,14],[24,27]],P3); d.poly([[16,6],[22,14],[24,27],[16,27]],P);
  // glass tube
  d.rect(14,7,4,17,T); d.vline(17,7,23,T2); d.px(15,6,T); d.px(16,6,T);
  // mercury level (high, warm!)
  d.rect(15,11,2,14,R); d.px(15,12,'#FF8070');
  // bulb
  d.circ(16,25,3,R); d.circ(17,26,2,R2); d.px(15,24,'#FF9A8A');
  // scale ticks
  for(let y=8;y<23;y+=2) d.hline(11,12,y,K); for(let y=9;y<23;y+=4) d.px(20,y,K);
  // sun (top-right) & snowflake (bottom-left) symbols
  d.circ(21,9,1,'#FFE040'); d.px(21,7,'#FFE040'); d.px(23,9,'#FFE040'); d.px(19,9,'#FFE040');
  d.stamp(9,20,['.b.','bbb','.b.'],{b:'#4A9AE0'});
  // green base stand (dino skin)
  d.rect(6,28,20,3,G); d.hline(6,25,28,'#A8D068'); d.hline(6,25,30,'#5A8028');
  d.outline(O);
};
A['stego:s2']=d=>{ // a pink brain model the size of a walnut on a display stand next to a real walnut, with a grit star medal
  const O='#3A1A24', B='#F4A0B4', B2='#D87890', B3='#FFD0DC', W='#C89050', W2='#9A6A30', W3='#E8B878', S='#6A4A3A', S2='#8A6A50', S3='#4A3024', G='#F8D040', G2='#C89A20', R='#E04040';
  // display stand: wooden base with a plaque
  d.poly([[3,26],[29,26],[31,31],[1,31]],S2); d.hline(3,29,26,'#A88868'); d.hline(1,31,31,S3);
  d.rect(12,27,8,3,G); d.hline(13,18,28,G2);
  // brain on a little pedestal
  d.rect(12,22,6,4,S); d.hline(12,17,22,S2);
  d.ell(15,15,9,7,B); d.ell(17,17,7,5,B2); d.ell(13,12,5,3,B3);
  d.vline(15,9,21,B2); // hemisphere split
  // folds (squiggles)
  for(const [x,y] of [[9,14],[11,11],[19,11],[21,15],[12,18],[18,19],[17,13],[10,16],[20,18]]){d.px(x,y,B2); d.px(x+1,y+1,B2); d.px(x+2,y,B2)}
  d.px(10,12,B3); d.px(12,10,'#FFFFFF');
  // the walnut, for scale (same size!) on the right
  d.ell(26,22,4,4,W); d.ell(27,23,3,3,W2); d.vline(26,18,26,W2); for(const [x,y] of [[24,20],[28,21],[24,23],[28,24]]) d.px(x,y,W3);
  // "=" sign between them
  d.hline(22,23,15,R); d.hline(22,23,17,R);
  // grit star medal hanging from the stand on a ribbon
  d.line(5,26,7,21,'#4A80E0'); d.line(6,26,8,21,'#4A80E0');
  d.poly([[7,15],[8,18],[11,18],[9,20],[10,23],[7,21],[4,23],[5,20],[3,18],[6,18]],G); d.px(7,19,G2); d.px(6,17,'#FFF0A0');
  d.outline(O);
};
A['stego:c0']=d=>{ // sunny hillside: bright sky, big sun, a soft grassy hill, napping dent with zZ, sunflowers and a big shady tree
  d.grad(0,0,64,26,['#78C8F8','#88D0F8','#98D8FA','#A8E0FA','#C0EAFA']);
  // sun with rays
  sun(d,38,7,4,'#FFE860','#FFF4B0'); for(const [dx,dy] of [[0,-7],[0,7],[-7,0],[7,0],[5,5],[-5,-5],[5,-5],[-5,5]]) d.px(38+dx,7+dy,'#FFE860');
  cloud(d,14,5,5,'#FFFFFF','#E0EEF8'); cloud(d,26,10,3,'#FFFFFF');
  // far hills
  d.ell(10,26,18,5,'#9ADA78'); d.ell(42,25,14,4,'#A8E080');
  // main sunny hillside rising to the right
  d.poly([[0,28],[20,27],[36,22],[48,18],[64,16],[64,40],[0,40]],'#78C050');
  d.poly([[36,22],[48,18],[64,16],[64,22],[44,23]],'#90D468');
  d.rect(0,33,64,7,'#68B040'); d.dither(0,31,64,2,'#78C050','#68B040');
  // big round shade tree on the hilltop
  d.rect(55,8,3,10,'#7A5030'); d.vline(57,9,17,'#5A3820');
  d.circ(56,7,6,'#3A9038'); d.circ(52,9,4,'#3A9038'); d.circ(60,10,4,'#3A9038'); d.circ(55,5,3,'#58B048'); d.px(53,4,'#78D060');
  // sunflowers on the slope
  for(const [x,y] of [[38,23],[43,21],[30,26]]){d.vline(x,y,y+4,'#3A8030'); d.px(x+1,y+2,'#58A040'); d.circ(x,y,1.5,'#FFD030'); d.px(x,y,'#8A5020')}
  // flattened nap spot in the grass on the hill with zZ floating
  d.ell(45,26,5,1,'#5AA038'); d.hline(41,49,25,'#A0E078');
  d.stamp(43,17,['zzzz','..z.','.z..','zzzz'],{z:'#3A6AB0'}); d.stamp(49,12,['zzz','.z.','zzz'],{z:'#3A6AB0'});
  // a dropped half-eaten leaf near the nap spot
  d.poly([[34,30],[38,28],[40,30],[36,32]],'#A8E070'); d.line(34,31,39,29,'#5A9030');
  // grass tufts and little flowers in the foreground (outside pet spot)
  tufts(d,14,0,63,28,39,'#4E9A34','#5AA840',[5,22,19,38]);
  for(const [x,y,c] of [[26,35,'#FFFFFF'],[30,37,'#F890B0'],[52,30,'#FFFFFF'],[58,34,'#F890B0'],[3,36,'#FFE040'],[60,26,'#FFFFFF']]){d.px(x,y,c); d.px(x,y-1,'#FFE040')}
};
A['stego:c1']=d=>{ // Jurassic conifer forest: misty green air, towering monkey-puzzle conifers, ferns, smoking volcano, a pile of pinecones
  d.grad(0,0,64,30,['#B8D8A8','#A8D0A0','#98C898','#88BC90','#78B088']);
  // distant volcano with smoke
  d.poly([[34,22],[42,9],[46,9],[56,22]],'#7A8A80'); d.poly([[42,9],[46,9],[45,11],[43,11]],'#E06030');
  d.circ(44,6,2,'#D8E0D0'); d.circ(46,3,2.5,'#E4EAE0'); d.circ(49,1,2,'#E4EAE0');
  // far tree silhouettes
  for(let x=0;x<64;x+=5){const h=8+((x*7)%5); d.poly([[x-3,24],[x,24-h],[x+3,24]],'#5E9A70')}
  // ground
  d.rect(0,24,64,16,'#4A7A38'); d.grad(0,24,64,4,['#5A8A40','#527E3A']); d.dither(0,34,64,6,'#4A7A38','#3E6A30');
  // tall conifers (araucaria-style layered branches)
  const tall=(x,top,bot,w)=>{d.rect(x-1,top,3,bot-top,'#6A4428'); d.vline(x+1,top,bot-1,'#4A2E18');
    for(let y=top;y<bot-6;y+=4){const ww=w-Math.max(0,(top+8-y)>>1); d.ell(x,y,ww,1.6,'#2E6A34'); d.hline(x-ww+1,x+ww-1,y-1,'#4A8A44'); d.px(x-ww,y+1,'#24542A'); d.px(x+ww,y+1,'#24542A')}};
  tall(30,2,26,7); tall(58,0,30,8); tall(46,6,25,5);
  // a big tree trunk framing the far right edge
  d.rect(62,0,2,40,'#5A3820');
  // giant ferns
  const fern=(x,y,s,c)=>{for(let i=-3;i<=3;i++){d.line(x,y,x+i*s,y-s*2+Math.abs(i)*s*0.5,c)}};
  fern(38,33,2,'#3E8A3A'); fern(52,35,2,'#4A9A40'); fern(26,30,1.5,'#4A9A40'); fern(60,37,1.5,'#3E8A3A');
  // pile of pinecones (picked with tail spikes)
  for(const [x,y] of [[42,35],[45,35],[48,35],[43.5,33],[46.5,33],[45,31]]){d.ell(x,y,1.2,1.5,'#9A6030'); d.px(x,y-1,'#C08048'); d.px(x+1,y+1,'#6A3E1A')}
  // one cone still speared on a broken branch stick
  d.line(34,38,37,34,'#7A5030'); d.ell(37,33,1,1.5,'#9A6030');
  // misty light beams
  for(let y=4;y<24;y++) if(y%2) d.px(18+(y>>1),y,'#D0E8C0');
  d.line(4,4,11,22,'#C8E0B8');
  // dragonfly
  d.hline(22,25,10,'#2A6AA0'); d.px(23,9,'#C8F0F8'); d.px(24,9,'#C8F0F8');
};
A['stego:c2']=d=>{ // fossil canyon: striped red rock cliffs, an embedded stegosaurus skeleton, giant ancient footprint in the canyon floor
  d.grad(0,0,64,30,['#F8C060','#F8D078','#F8DC90','#F8E8B0']);
  sun(d,10,5,3,'#FFF4D0','#FFE8A0');
  // far mesas
  d.rect(0,12,10,6,'#D88A5A'); d.rect(2,10,6,2,'#D88A5A'); d.rect(20,13,8,5,'#D88A5A');
  // big canyon wall on the right with strata bands
  d.poly([[26,40],[28,14],[34,8],[44,6],[64,4],[64,40]],'#C8603A');
  const bands=['#E0804A','#B85030','#D8743E','#A84828','#E89058','#C0603A'];
  for(let y=6;y<40;y++) {const c=bands[Math.floor(y/4)%bands.length]; for(let x=0;x<64;x++) if(d.get(x,y)==='#C8603A') d.px(x,y,c)}
  // shadowed left face of the wall
  d.poly([[26,40],[28,14],[34,8],[31,40]],'#9A4028');
  // embedded stegosaurus fossil skeleton in the wall
  const bone='#F4E8D0', bs='#C8B8A0';
  d.line(38,22,58,20,bone); d.line(38,23,58,21,bs); // spine
  for(let i=0;i<7;i++){const x=40+i*3; d.vline(x,22,26,bone); plate(d,x+1,20-(i%2),2,4-Math.abs(3-i)*0.3+2,bone,bs)} // ribs + plates
  d.ell(60,21,3,2,bone); d.px(61,21,'#7A3020'); d.px(63,22,bone); // skull
  d.line(38,22,33,26,bone); for(const [x,y] of [[34,24],[33,27]]){d.px(x,y-1,bone); d.px(x+1,y-2,bone)} // tail + thagomizer spikes
  d.vline(43,26,30,bone); d.vline(53,25,29,bone); d.hline(42,44,30,bone); d.hline(52,54,29,bone); // legs
  // canyon floor
  d.rect(0,30,64,10,'#E8A868'); d.rect(0,30,27,1,'#F0B878'); d.dither(0,36,64,4,'#E8A868','#D89858');
  // left low rocks to frame (behind pet spot)
  d.poly([[0,30],[0,18],[4,17],[6,22],[3,30]],'#B85030'); d.hline(0,3,22,'#E0804A');
  // the giant ancient footprint in the floor (round with 3 stubby toes)
  d.ell(42,35,5,2,'#B87840'); d.ell(42,35,4,1,'#9A6030');
  for(const dx of [-4,0,4]) d.ell(42+dx,31.5,1.2,0.8,'#9A6030');
  d.px(39,36,'#C88850'); // rim highlight
  // a brush & chisel left from digging
  d.line(52,36,56,33,'#8A6A40'); d.rect(56,32,2,2,'#E8D8A0'); d.line(48,38,51,37,'#A0A0A8');
  // cacti and pebbles
  d.vline(30,27,31,'#5A9A48'); d.px(29,28,'#5A9A48'); d.px(31,29,'#5A9A48');
  specks(d,8,24,63,32,39,['#C88850','#F4C890']);
  // dust puff of a stomp
  d.circ(36,38,1,'#F8E0B8'); d.circ(48,39,1,'#F8E0B8');
};
// ===== yuni =====
const paw=(d,x,y,c)=>{d.rect(x,y+1,3,2,c); d.px(x-1,y,c); d.px(x+1,y-1,c); d.px(x+3,y,c)};
A['yuni:s0']=d=>{ // orange yarn ball (same as my head patch), loose strand curling away, a pink bell tag
  const O='#5A2A10', Y='#F0A050', Y2='#C87830', Y3='#FFD090', P='#F8B0BA', P2='#D88090', G='#F8D040', G2='#C09820';
  d.circ(14,15,11,Y);
  // shading on lower right
  for(let y=4;y<27;y++)for(let x=3;x<26;x++) if(d.get(x,y)===Y && (x-14)*0.7+(y-15)*0.7>5) d.px(x,y,Y2);
  // wrapped yarn strands (curved bands)
  for(const [a,b,c] of [[-0.6,0,Y2],[-0.3,0,Y3],[0.2,0,Y2],[0.5,0,Y3]]){for(let t=-1;t<=1;t+=0.04){const x=14+t*10, y=15+a*10+Math.sin(t*1.6)*5*(a>0?1:-1); if(d.get(Math.round(x),Math.round(y))) d.px(x,y,c)}}
  for(let t=-1;t<=1;t+=0.04){const y=15+t*10, x=14+Math.sin(t*1.5)*6; if(d.get(Math.round(x),Math.round(y))) d.px(x,y,Y3); if(d.get(Math.round(x+4),Math.round(y))) d.px(x+4,y,Y2)}
  d.px(9,8,'#FFF0D0'); d.px(10,7,'#FFF0D0'); d.px(8,9,Y3);
  // loose strand curling off to the bottom-right
  const tail=[[22,23],[25,26],[28,25],[29,22],[27,21],[26,23],[28,28],[30,30]]; for(let i=0;i+1<tail.length;i++) d.line(...tail[i],...tail[i+1],Y);
  // pink tag with a gold bell (cat toy)
  d.line(5,24,3,27,P2); d.rect(1,27,5,4,P); d.hline(1,5,30,P2); d.circ(7,26,1.5,G); d.px(7,27,G2); d.px(6,25,'#FFF0A0');
  d.outline(O);
};
A['yuni:s1']=d=>{ // a plump grilled harbor fish treat with grill marks, held on a little string with a pink bow, and a bite mark
  const O='#1E2A3A', F='#9AB8D0', F2='#6A8AA8', F3='#D8E8F4', B='#F4F0E8', R='#F8B0BA', R2='#D88090', GR='#5A4A40', E='#1E2A3A';
  // body (diagonal fish)
  d.ell(15,17,11,6,F); d.ell(16,19,10,4,F2); d.ell(14,14,8,2,F3);
  // tail fin
  d.poly([[26,17],[31,11],[30,17],[31,23]],F2); d.line(27,17,30,13,F3);
  // head
  d.ell(6,16,4,5,F); d.vline(9,12,21,F2);
  d.circ(5,15,1.5,'#FFFFFF'); d.px(5,15,E); d.px(4,14,'#FFFFFF');
  d.px(2,18,R2); d.px(3,18,R2); // mouth
  // grill marks
  for(const x of [12,16,20]) d.line(x,13,x-3,21,GR);
  // fins
  d.poly([[14,11],[18,8],[20,12]],F2); d.poly([[13,22],[16,26],[18,22]],F2);
  // scales highlight
  for(const [x,y] of [[13,16],[17,15],[21,16],[19,19],[11,18]]) d.px(x,y,F3);
  // bite out of the belly (purr-snack)
  d.circ(19,24,2,null); d.circ(22,23,1.5,null); d.px(20,22,B);
  // string & pink bow on the tail
  d.line(28,17,31,3,'#C8B8A0'); d.stamp(26,4,['rr.rr','rrrrr','rr.rr'],{r:R}); d.px(28,5,R2);
  d.outline(O);
};
A['yuni:s2']=d=>{ // the perfect cardboard box: open flaps, cat-shaped dent, paw stamp, sparkles and a heart
  const O='#4A2C14', C='#D8A060', C2='#B07A3A', C3='#F0C488', IN='#5A3A1E', IN2='#7A5230', T='#E8DCC0', P='#F8B0BA', W='#FFFFFF', OR='#F0A050';
  // box front & side
  d.poly([[3,14],[22,14],[22,30],[3,30]],C); d.poly([[22,14],[29,10],[29,26],[22,30]],C2);
  // opening (top)
  d.poly([[3,14],[10,10],[29,10],[22,14]],IN); d.poly([[5,13],[10,11],[27,11],[21,13]],IN2);
  // flaps
  d.poly([[3,14],[0,7],[7,4],[10,10]],C3); d.poly([[10,10],[13,3],[30,3],[29,10]],C3); d.poly([[29,10],[31,5],[31,20],[29,26]],C2); d.poly([[3,14],[22,14],[19,19],[1,19]],C3);
  // tape strip
  d.rect(11,19,4,11,T); d.px(12,24,'#D0C4A8');
  // white & orange fur tufts left inside (the perfect fit!)
  d.px(14,12,W); d.px(15,11,W); d.px(17,12,OR); d.px(18,12,OR); d.px(20,11,W);
  // paw print stamp on the side
  paw(d,24,18,P);
  // heart above
  d.stamp(18,0,['.r.r.','rrrrr','.rrr.','..r..'],{r:'#F06080'});
  // sparkles
  twinkle(d,3,2,'#F8D040','#FFFFFF');
  d.outline(O);
  d.px(30,30,'#F8D040'); d.px(1,27,'#F8D040');
};
A['yuni:c0']=d=>{ // sunny windowsill inside: cream wall, big window with blue sky and leafy branch, warm sunbeam on the floor, cushion & plant
  d.rect(0,0,64,28,'#F4E4C8'); for(let x=2;x<64;x+=8) d.vline(x,0,27,'#ECD8B8'); // striped wallpaper
  // wooden floor
  d.rect(0,28,64,12,'#C8905A'); for(let y=31;y<40;y+=3) d.hline(0,63,y,'#B07A48'); for(const [x,y] of [[10,29],[30,32],[50,29],[20,35],[44,35],[60,38]]) d.px(x,y,'#A06A3A');
  d.hline(0,63,28,'#9A6A40'); d.hline(0,63,27,'#E8D0A8');
  // big window (center-right)
  d.rect(28,3,30,20,'#FFFFFF'); d.rect(30,5,26,16,'#8ACCF4'); d.rect(30,5,26,4,'#78C0F0');
  cloud(d,38,10,4,'#FFFFFF'); sun(d,51,8,2,'#FFF4A0','#FFE860');
  d.ell(32,17,5,4,'#6AB850'); d.ell(54,19,6,3,'#5AA848'); d.line(30,12,40,16,'#7A5030'); // tree branch peeking
  d.vline(43,5,20,'#FFFFFF'); d.hline(30,55,13,'#FFFFFF');
  // curtains
  d.poly([[25,1],[30,1],[29,22],[25,24]],'#F890A8'); d.poly([[56,1],[61,1],[61,24],[57,22]],'#F890A8'); d.vline(27,2,22,'#E07090'); d.vline(59,2,22,'#E07090');
  d.hline(24,62,1,'#9A6A40');
  // windowsill ledge
  d.rect(26,23,34,2,'#FFFFFF'); d.hline(26,59,25,'#D8C8B0');
  // sunbeam parallelogram falling across the floor toward the left (cozy)
  d.poly([[30,25],[56,25],[44,40],[12,40]],'#E8B070'); d.dither(18,36,30,4,'#E8B070','#D8A060');
  d.poly([[44,25],[56,25],[44,40],[34,40]],'#F0C080');
  // dust motes in the beam
  for(const [x,y] of [[36,30],[40,27],[33,34],[46,32]]) d.px(x,y,'#FFF4D0');
  // round cushion bed on the sill with a dent and a single white hair
  d.ell(37,21,6,2,'#F0A050'); d.ell(37,20,4,1,'#F8C080'); d.px(38,19,'#FFFFFF');
  // potted plant on sill
  d.rect(50,19,4,4,'#D0603A'); d.hline(50,53,19,'#E07848'); d.circ(51,16,2,'#58A040'); d.circ(53,15,2,'#6AB850'); d.px(52,13,'#78C860');
  // yarn ball on the floor & a fish toy
  d.circ(56,34,2,'#F0A050'); d.px(55,33,'#FFD090'); d.line(58,35,62,37,'#F0A050');
  d.ell(28,37,2,1,'#9AB8D0'); d.px(31,37,'#9AB8D0'); d.px(31,36,'#9AB8D0'); d.px(27,37,'#1E2A3A');
  // wall clock showing 'nap time' and a framed paw picture on the left wall
  d.circ(14,8,3,'#FFFFFF'); d.ring(14,8,3,'#9A6A40'); d.vline(14,6,8,'#3A2A20'); d.hline(14,15,8,'#3A2A20');
  d.frame(4,3,6,6,'#9A6A40'); d.rect(5,4,4,4,'#FFF4EA'); d.px(6,6,'#F8B0BA'); d.px(7,6,'#F8B0BA'); d.px(5,5,'#F8B0BA'); d.px(8,5,'#F8B0BA');
};
A['yuni:c1']=d=>{ // harbor cat town: pastel hillside houses, blue sea with fishing boats, pier with fish drying rack, crates of fish, gulls
  d.grad(0,0,64,20,['#A8DCF8','#B8E4FA','#C8ECFC']);
  cloud(d,8,4,4,'#FFFFFF'); cloud(d,30,2,3,'#FFFFFF');
  // hillside town on the right
  d.poly([[30,20],[40,10],[52,6],[64,5],[64,22],[30,22]],'#88C070');
  const house=(x,y,w,h,c,r)=>{d.rect(x,y,w,h,c); d.poly([[x-1,y],[x+w/2-0.5,y-3],[x+w,y]],r); d.px(x+1,y+2,'#3A5A80'); if(w>4) d.px(x+w-2,y+2,'#3A5A80')};
  house(36,15,5,5,'#FFF4EA','#E05040'); house(43,12,6,5,'#F8D070','#3A70C0'); house(51,9,5,5,'#F8B0BA','#E05040'); house(58,8,6,6,'#FFFFFF','#4AA0C0'); house(48,16,6,5,'#9AD0E8','#F0A050'); house(56,16,6,5,'#FFF4EA','#E05040');
  // lighthouse on the far left headland
  d.poly([[0,20],[0,12],[6,14],[10,20]],'#78B060'); d.rect(3,5,3,8,'#FFFFFF'); d.hline(3,5,7,'#E05040'); d.hline(3,5,10,'#E05040'); d.rect(3,4,3,1,'#3A3A48'); d.px(4,3,'#FFE860');
  // sea
  d.rect(0,20,64,10,'#3A90D0'); d.hline(0,63,20,'#6AB8E8'); for(const [x,y] of [[6,23],[18,22],[26,25],[40,23],[52,26],[58,22],[12,27]]) d.hline(x,x+2,y,'#8AD0F4');
  // boats
  d.poly([[32,24],[42,24],[40,26],[34,26]],'#E05040'); d.vline(37,17,23,'#6A4A30'); d.poly([[38,18],[38,23],[42,23]],'#FFFFFF');
  d.poly([[48,23],[56,23],[54,25],[50,25]],'#F8D070'); d.rect(50,21,3,2,'#FFFFFF');
  // wooden pier (foreground, wide, pet stands here)
  d.rect(0,30,64,10,'#B8885A'); for(let x=0;x<64;x+=5) d.vline(x,30,39,'#9A6E44'); d.hline(0,63,30,'#D8A878'); d.hline(0,63,39,'#7A5434');
  // fish drying rack (center)
  d.vline(30,20,31,'#7A5434'); d.vline(44,20,31,'#7A5434'); d.hline(29,45,21,'#7A5434'); d.hline(30,44,22,'#E8E0D0');
  for(const x of [32,35,38,41]){d.vline(x,23,26,'#9AB8D0'); d.px(x,27,'#6A8AA8'); d.px(x-1,27,'#6A8AA8'); d.px(x+1,27,'#6A8AA8'); d.px(x,24,'#1E2A3A')}
  // crate full of fish
  d.rect(50,31,10,6,'#C89050'); d.frame(50,31,10,6,'#8A5A30'); for(const x of [51,54,57]){d.ell(x+1,31,1.5,1,'#9AB8D0'); d.px(x,30,'#C8DCEC')}
  // bollard with coiled rope
  d.rect(25,31,3,4,'#3A3A48'); d.ring(26.5,36,2,'#E8D8A8');
  // gulls
  d.stamp(14,8,['g.g','.g.'],{g:'#4A5A6A'}); d.stamp(22,6,['g...g','.g.g.','..g..'],{g:'#4A5A6A'});
  // little fish bones left on the pier (yum)
  d.hline(44,47,37,'#FFFFFF'); d.px(45,36,'#FFFFFF'); d.px(45,38,'#FFFFFF'); d.px(48,36,'#FFFFFF'); d.px(48,38,'#FFFFFF');
};
A['yuni:c2']=d=>{ // kneading hill on the moon: deep space, earth, soft cream moon hill covered in paw-press dents, comet, cozy blanket
  d.grad(0,0,64,40,['#120E2E','#1A1640','#221E52','#2A2660']);
  stars(d,26,0,63,0,26,['#FFFFFF','#F8E0A0','#C0C8FF'],3);
  // earth
  d.circ(50,9,5,'#3A80E0'); d.ell(48,8,2,2,'#5AB050'); d.ell(52,11,2,1,'#5AB050'); d.px(47,6,'#FFFFFF'); d.px(53,7,'#FFFFFF'); d.ring(50,9,5.6,'#6AA8F0');
  // comet
  d.line(14,4,22,9,'#8A90D0'); d.line(15,4,22,8,'#C0C8FF'); d.circ(23,9,1,'#FFFFFF');
  // the moon hill: big soft cream dome rising to the right, plus flat ground at left
  d.ell(44,42,32,16,'#E8DEC0'); d.rect(0,30,64,10,'#E8DEC0'); d.ell(46,40,28,13,'#F4ECD4');
  d.hline(0,20,30,'#F4ECD4');
  // soft shading & dither near the base
  d.dither(0,36,64,4,'#E8DEC0','#D8CCAC');
  // craters
  for(const [x,y,r] of [[30,34,2],[56,31,2.5],[4,33,1.5]]){d.ell(x,y,r+1,r*0.5+0.5,'#C8BC98'); d.ell(x,y-0.5,r,r*0.4,'#D8CCAC')}
  // paw-press kneading dents on the hill (little toe-bean prints)
  for(const [x,y] of [[36,30],[44,28],[52,30],[40,34],[49,34],[57,35]]) d.stamp(x,y,['c.c.c','.ccc.','.ccc.'],{c:'#E0C4B4'});
  // pink blanket on the summit with a heart
  d.poly([[40,26],[48,25],[50,27],[42,28]],'#F8B0BA'); d.hline(42,49,27,'#D88090'); d.px(45,26,'#FFFFFF');
  // glow above the summit and floaty purr notes
  d.stamp(34,18,['.c.c.','ccccc','.ccc.','..c..'],{c:'#F890B0'});
  twinkle(d,56,20,'#F8E0A0','#FFFFFF'); twinkle(d,28,22,'#C0C8FF','#FFFFFF');
  // small flag stuck in the moon with an orange paw patch
  d.vline(58,20,28,'#C0C0C8'); d.rect(59,20,5,3,'#F0A050'); d.px(61,21,'#FFF4EA');
};
export default A;
