// art_4: hamster, koala, chul, amelia, mymelody, tobey, groot, usagi, lisa, ptera, bormi
// ---------- helpers ----------
// rotated ellipse; fn(u,v) gets normalized coords (u along long axis) and returns a color or null
const rell=(d,cx,cy,rx,ry,ang,fn)=>{const c=Math.cos(ang),s=Math.sin(ang),R=Math.max(rx,ry)+1;
  for(let y=Math.floor(cy-R);y<=Math.ceil(cy+R);y++)for(let x=Math.floor(cx-R);x<=Math.ceil(cx+R);x++){const dx=x-cx,dy=y-cy;
    const u=(dx*c+dy*s)/(rx+.4), v=(-dx*s+dy*c)/(ry+.4); if(u*u+v*v<=1){const col=fn(u,v); if(col) d.px(x,y,col)}}};
const bez=(p0,p1,p2,t)=>[(1-t)*(1-t)*p0[0]+2*(1-t)*t*p1[0]+t*t*p2[0],(1-t)*(1-t)*p0[1]+2*(1-t)*t*p1[1]+t*t*p2[1]];
const thick=(d,p0,p1,p2,r,c)=>{for(let i=0;i<=40;i++){const [x,y]=bez(p0,p1,p2,i/40); d.circ(x,y,r,c)}};
const curve=(d,p0,p1,p2,c,n=40)=>{let [px,py]=p0; for(let i=1;i<=n;i++){const [x,y]=bez(p0,p1,p2,i/n); d.line(px,py,x,y,c); px=x; py=y}};
const stars=(d,n,x0,y0,x1,y1,cols)=>{for(let i=0;i<n;i++) d.px(d.ri(x0,x1),d.ri(y0,y1),cols[i%cols.length])};
const twinkle=(d,x,y,c,cc)=>{d.px(x-1,y,c);d.px(x+1,y,c);d.px(x,y-1,c);d.px(x,y+1,c);d.px(x,y,cc||c)};
const bigtw=(d,x,y,c,cc)=>{d.hline(x-2,x+2,y,c);d.vline(x,y-2,y+2,c);d.px(x,y,cc||c)};
const cloud=(d,cx,cy,w,c,sh)=>{d.ell(cx,cy+1,w,2,c); d.circ(cx-w*.35,cy,w*.3,c); d.circ(cx+w*.15,cy-1,w*.42,c); if(sh) d.hline(cx-w+1,cx+w-1,cy+3,sh)};
const zz=(d,x,y,c)=>d.stamp(x,y,['zzz','..z','.z.','z..','zzz'].map(r=>r),{z:c});
const zs=(d,x,y,c)=>d.stamp(x,y,['zz','.z','z.','zz'],{z:c});
const heart=(d,x,y,c)=>d.stamp(x,y,['hh.hh','hhhhh','.hhh.','..h..'],{h:c});
const bigheart=(d,x,y,c,hl)=>{d.stamp(x,y,['.hh.hh.','hhhhhhh','hhhhhhh','.hhhhh.','..hhh..','...h...'],{h:c}); if(hl) d.px(x+1,y+1,hl)};
const seedPat=(d,cx,cy,rx,ry,ang,pal)=>rell(d,cx,cy,rx,ry,ang,(u,v)=>{const a=Math.abs(v);
  if(a<.2) return pal.l; if(Math.abs(a-.62)<.13) return pal.m; if(u>.75) return pal.t; return v>.45?pal.dk:pal.b});

export default {
// =================== HAMSTER ===================
'hamster:s0': d=>{ // pile of cheek-stuffed sunflower seeds, damp
  // teardrop seed (round end at -u, tip at +u), each with its own outline
  const seed=(cx,cy,ang,s=1)=>{const c=Math.cos(ang),sn=Math.sin(ang),rx=6.2*s,ry=3.3*s, inS=(u,v)=>{const w=1-.55*Math.max(0,u); return u*u+(v/w)**2<=1};
    for(let y=Math.floor(cy-9);y<=cy+9;y++)for(let x=Math.floor(cx-9);x<=cx+9;x++){const dx=x-cx,dy=y-cy, a=dx*c+dy*sn, b=-dx*sn+dy*c;
      if(inS(a/(rx+.3),b/(ry+.3))){const u=a/(rx+.3), q=b/(ry+.3)/(1-.55*Math.max(0,u));
        d.px(x,y, q<-.35&&q>-.75&&u<.7?'#ECE6D8': q>.4&&q<.8&&u<.6?'#8E8696': '#3E3846')}
      else if(inS(a/(rx+1.3),b/(ry+1.3))) d.px(x,y,'#1A1620')}
    d.px(cx-c*3*s-sn*0, cy-sn*3*s, '#5E5668')};
  // a sunflower head peeking behind the pile
  for(let a=0;a<10;a++){const t=a*Math.PI/5; rell(d,21+Math.cos(t)*6,9+Math.sin(t)*6,3,1.5,t,(u,v)=>v>.25?'#E89820':'#FFD040')}
  d.circ(21,9,4,'#6A3E1E'); for(let y=-3;y<=3;y++)for(let x=-3;x<=3;x++) if(x*x+y*y<=10&&(x+y)%2===0) d.px(21+x,9+y,'#4A2810');
  d.px(19,7,'#8A5A30'); d.px(20,6,'#8A5A30');
  d.outline('#3A2410');
  seed(8,17,-.9); seed(23,18,-2.5); seed(15,20,-1.57);
  seed(6,26,.25); seed(26,26,2.9); seed(16,27,-.1,1.05);
  // damp drops
  const drop=(x,y)=>d.stamp(x,y,['.o.','obo','owb','.o.'],{o:'#2A5A9A',b:'#7CC8F8',w:'#FFFFFF'});
  drop(3,6); drop(10,9); d.stamp(29,10,['.o.','obo','.o.'],{o:'#2A5A9A',b:'#9CD8FF'}); d.px(30,31,'#7CC8F8'); d.px(1,31,'#7CC8F8'); d.px(2,20,'#9CD8FF');
},
'hamster:s1': d=>{ // mini ferris wheel / hamster wheel
  const cx=16,cy=13;
  // A-frame stand
  d.line(15,cy,7,28,'#5878B8'); d.line(16,cy,8,28,'#5878B8'); d.line(17,cy,25,28,'#3E5A98'); d.line(16,cy,24,28,'#3E5A98');
  d.rect(4,27,24,3,'#7A98D0'); d.hline(4,27,29,'#4E6AA8'); d.hline(5,26,27,'#A8C0E8');
  d.circ(cx,cy,11,'#FFF2DC');
  for(let a=0;a<8;a++){const t=a*Math.PI/4; d.line(cx,cy,cx+Math.cos(t)*10,cy+Math.sin(t)*10,'#E88AA8')}
  d.ring(cx,cy,11,'#E8487A'); d.ring(cx,cy,10.2,'#F07898');
  for(let a=0;a<24;a++){const t=a*Math.PI/12; if(a%2) d.px(Math.round(cx+Math.cos(t)*11),Math.round(cy+Math.sin(t)*11),'#B82E5A')}
  d.ring(cx,cy,5,'#F5B8C8');
  d.circ(cx,cy,2,'#F8C840'); d.px(cx-1,cy-1,'#FFF4B0');
  const gc=['#58B8F0','#F8D040','#78D078','#B888F0'];
  for(let a=0;a<8;a++){const t=a*Math.PI/4+Math.PI/8, x=Math.round(cx+Math.cos(t)*12.2), y=Math.round(cy+Math.sin(t)*12.2), c=gc[a%4];
    d.rect(x-1,y,3,3,c); d.px(x,y-1,'#8A6A7A'); d.px(x-1,y+1,'#FFFFFF')}
  d.outline('#2A2038');
  twinkle(d,29,4,'#F8D040','#FFFFFF'); twinkle(d,2,8,'#F8D040','#FFFFFF');
},
'hamster:s2': d=>{ // snack stash treasure map
  const P1='#F4DEA8',P2='#E2C080',P3='#C89A58';
  d.rect(5,5,22,19,P1); for(let y=5;y<24;y++){d.px(5,y,P2); d.px(26,y,P2)}
  // rolled ends
  d.rect(2,3,4,22,P2); d.vline(2,3,24,P3); d.vline(4,3,24,'#FFF0C8'); d.rect(26,3,4,22,P2); d.vline(29,3,24,P3); d.vline(27,3,24,'#FFF0C8');
  // little land doodles
  d.stamp(8,7,['.g.','ggg','.b.'],{g:'#78A858',b:'#8A6038'}); d.stamp(11,9,['.g.','ggg','.b.'],{g:'#78A858',b:'#8A6038'});
  d.stamp(18,17,['..n..','.nnn.','nnnnn'],{n:'#B89060'});
  d.hline(7,10,21,'#7AB0D8'); d.hline(8,12,22,'#7AB0D8');
  // dashed path to X
  const path=[[8,19],[10,17],[12,15],[14,14],[16,12],[18,11],[20,10]]; path.forEach(([x,y],i)=>{d.px(x,y,'#D8483A'); if(i%2===0) d.px(x+1,y,'#D8483A')});
  d.stamp(21,6,['x...x','.x.x.','..x..','.x.x.','x...x'],{x:'#C82828'});
  // tiny seed and cookie icons
  d.stamp(13,18,['.k.','klk','klk','.k.'],{k:'#3E3846',l:'#E8E4DA'}); d.stamp(15,7,['.cc.','cdcc','ccdc','.cc.'],{c:'#D89850',d:'#7A4A28'});
  // money bag on the corner
  d.stamp(18,18,['...rr...','..roor..','...tt...','.bbbbbb.','bbbbbbbb','bbbbssbb','bbbsbbbb','bbbbsbbb','bbbssbbb','.bbbbbb.'],{r:'#C83838',o:'#E87070',t:'#8A5A2A',b:'#D8A848',s:'#8A6018'});
  d.px(19,22,'#F8E090'); d.px(19,23,'#F8E090');
  d.circ(8,27,2.2,'#F0C030'); d.px(7,26,'#FFF0A0'); d.circ(12,28,2.2,'#E8B020'); d.px(11,27,'#FFF0A0');
  d.outline('#3A2818');
  twinkle(d,14,25,'#FFF6B0','#FFFFFF'); d.px(28,27,'#FFF6B0');
},
'hamster:c0': d=>{ // secret base under the couch
  d.grad(0,0,64,24,['#2E2028','#3A2A30']);
  // light leaking from the front-right
  d.poly([[40,7],[64,7],[64,24],[52,24]],'#4A3640'); d.poly([[48,7],[64,7],[64,18],[58,24],[56,24]],'#56404A');
  // floor boards
  d.grad(0,24,64,16,['#6A4630','#7A5236']);
  for(const y of [27,31,35]) d.hline(0,63,y,'#4A2E20');
  for(let i=0;i<10;i++){const y=[24,28,32,36][i%4], x=(i*13+y*3)%64; d.vline(x,y,y+2,'#4A2E20')}
  d.poly([[52,24],[64,24],[64,40],[44,40]],'#9A6C46'); d.poly([[56,24],[64,24],[64,40],[52,40]],'#A87A50');
  for(const y of [27,31,35]) d.hline(48,63,y,'#7A5236');
  // couch underside + skirt
  d.rect(0,0,64,6,'#A04858'); d.hline(0,63,0,'#C06070'); for(let x=0;x<64;x+=2){d.px(x,6,'#A04858'); d.px(x+1,6,'#7A3040')} d.hline(0,63,5,'#7A3040');
  for(let x=1;x<64;x+=4) d.px(x,7,'#7A3040');
  // couch legs
  d.rect(1,6,3,24,'#6A4026'); d.vline(1,6,29,'#8A5A36'); d.rect(0,29,5,2,'#3A2418');
  d.rect(59,6,3,23,'#8A5A36'); d.vline(59,6,28,'#B07A4E'); d.rect(58,28,5,2,'#5A3A26');
  // little flag (toothpick + paper)
  d.vline(44,10,26,'#E8D0A0'); d.rect(45,10,6,4,'#F8E048'); d.px(46,11,'#E86848'); d.px(47,12,'#E86848'); d.px(48,11,'#E86848');
  // bottle-cap table with 3 snacks
  d.rect(30,26,22,3,'#C8C8D0'); d.hline(30,51,26,'#E8E8F0'); d.hline(30,51,28,'#8A8A98'); for(let x=31;x<51;x+=2) d.px(x,29,'#8A8A98');
  seedPat(d,34,23,3,1.6,.2,{b:'#3E3846',dk:'#28232E',l:'#F2EEE2',m:'#A8A0A6',t:'#5E5668'});
  d.circ(41,22,3,'#D89850'); d.px(40,21,'#7A4A28'); d.px(42,23,'#7A4A28'); d.px(41,20,'#F0B868'); d.px(43,21,'#7A4A28');
  d.stamp(46,20,['..y.','.yyy','yyoy','yyyy'],{y:'#F8D050',o:'#E0A830'}); // cheese wedge
  // cotton pillow + dust bunny + lost button
  d.ell(55,33,4,2,'#F4F0F0'); d.hline(52,58,35,'#C8C0C8'); d.px(54,32,'#FFFFFF');
  d.ell(28,35,3,2,'#A8A0A6'); d.px(26,34,'#C8C0C8'); d.px(29,34,'#C8C0C8'); d.px(30,36,'#5E5668');
  d.circ(38,36,1.5,'#58A0D8'); d.px(37,36,'#2A5A9A'); d.px(39,36,'#2A5A9A');
  d.stamp(60,1,['...'],{}); twinkle(d,36,15,'#F8E8A0','#FFFFFF');
},
'hamster:c1': d=>{ // theme park at night
  d.grad(0,0,64,32,['#14143A','#1C1A48','#261E56','#342260','#44286A']);
  stars(d,26,0,0,63,20,['#FFFFFF','#F8E8A0','#B8C8FF']);
  d.circ(8,6,3,'#FFF6D0'); d.circ(9,5,3,'#1C1A48');
  // ferris wheel (center)
  const cx=31,cy=16;
  d.line(cx,cy,25,32,'#5A4A7A'); d.line(cx,cy,37,32,'#5A4A7A');
  d.ring(cx,cy,12,'#7A68B0'); for(let a=0;a<12;a++){const t=a*Math.PI/6; d.line(cx,cy,cx+Math.cos(t)*12,cy+Math.sin(t)*12,'#4E4280')}
  const lc=['#FF6A8A','#FFD84A','#6AE0FF','#9AF07A'];
  for(let a=0;a<24;a++){const t=a*Math.PI/12; d.px(Math.round(cx+Math.cos(t)*12),Math.round(cy+Math.sin(t)*12),lc[a%4])}
  for(let a=0;a<6;a++){const t=a*Math.PI/3+.3, x=Math.round(cx+Math.cos(t)*12), y=Math.round(cy+Math.sin(t)*12); d.rect(x-1,y+1,3,2,lc[a%4])}
  d.circ(cx,cy,1.5,'#FFE070');
  // roller coaster (right)
  const f=x=>x<48? 30-(x-38)*2.1 : x<56 ? 9+ (x-48)*(x-48)*.05 : 12+(x-56)*2.6;
  for(let x=40;x<64;x+=3){const y=Math.round(f(x)); d.vline(x,y,33,'#3A3060')}
  for(let x=38;x<64;x++){const y=Math.round(f(x)); d.px(x,y,'#E84A6A'); d.px(x,y+1,'#A8304A')}
  d.ring(55,20,5,'#E84A6A'); d.ring(55,20,4,'#A8304A');
  d.stamp(47,6,['.cccc.','cyycyy','cccccc','.k..k.'],{c:'#3AB0F0',y:'#FFE070',k:'#222244'});
  for(let x=39;x<64;x+=4){const y=Math.round(f(x)); d.px(x,y-1,lc[(x>>2)%4])}
  // string lights
  for(let x=0;x<26;x++){const y=Math.round(2+((x-12)**2)/40); d.px(x,y,'#3A3060'); if(x%3===0) d.px(x,y+1,lc[(x/3)%4])}
  // little tent
  d.poly([[10,22],[16,14],[22,22]],'#E85A6A'); d.poly([[13,22],[16,14],[19,22]],'#FFF0E8'); d.vline(16,11,14,'#FFD84A'); d.px(17,11,'#FF6A8A');
  // ground
  d.grad(0,32,64,8,['#3A2E58','#33284E','#2C2244']);
  d.rect(10,22,13,10,'#2E2448'); d.rect(0,30,64,2,'#2E2448');
  for(let x=2;x<64;x+=7){d.px(x,34,'#5A4A80'); d.px(x+3,37,'#4E4074')}
  d.ell(31,35,5,1,'#5A4A7A');d.ell(56,35,4,1,'#6A3A60');
  // lamp post
  d.vline(26,22,33,'#6A5A8A'); d.circ(26,21,1.5,'#FFE89A'); d.px(26,21,'#FFFFFF');
  d.stamp(57,34,['ttt','t.t','ttt'].slice(0,0),{});
},
'hamster:c2': d=>{ // planet sunflower seed
  d.grad(0,0,64,30,['#0E0A24','#160E34','#1E1244','#281650','#34205E']);
  d.dither(4,6,14,6,'#2A1E54','#1E1244'); d.dither(8,8,8,2,'#3A2A6A','#2A1E54');
  stars(d,30,0,0,63,26,['#FFFFFF','#FFE89A','#B8C0FF']); bigtw(d,20,4,'#FFE89A','#FFFFFF'); twinkle(d,40,14,'#B8C0FF','#FFFFFF');
  // sunflower "sun" planet
  const fx=50,fy=11; for(let a=0;a<12;a++){const t=a*Math.PI/6; rell(d,fx+Math.cos(t)*7,fy+Math.sin(t)*7,3.4,1.6,t,(u,v)=>v>.2?'#E89820':'#FFD040')}
  d.circ(fx,fy,5,'#6A3E1E'); for(let y=-4;y<=4;y++)for(let x=-4;x<=4;x++) if(x*x+y*y<=18&&(x+y)%2===0) d.px(fx+x,fy+y,'#4A2810'); d.px(fx-2,fy-2,'#8A5A30');
  // small moon seed
  seedPat(d,32,7,3,1.6,.7,{b:'#4A4458',dk:'#2E2A38',l:'#E8E4DA',m:'#9A94A0',t:'#6A6478'});
  // planet surface (curved), made of seeds
  for(let x=0;x<64;x++){const top=Math.round(28+((x-34)**2)/220); d.vline(x,top,39,'#D8C8A8')}
  for(let x=0;x<64;x++){const top=Math.round(28+((x-34)**2)/220); d.px(x,top,'#F4E8CC')}
  let k=0; for(let y=31;y<41;y+=3) for(let x=(y%2)*3;x<66;x+=6){k++; seedPat(d,x,y,2.6,1.2,((k*7)%5-2)*.4,{b:'#3E3846',dk:'#28232E',l:'#F2EEE2',m:'#3E3846',t:'#5E5668'})}
  // seed mound (right)
  const P={b:'#3E3846',dk:'#28232E',l:'#F2EEE2',m:'#A8A0A6',t:'#5E5668'};
  for(let r=0;r<4;r++)for(let i=0;i<=3-r;i++) seedPat(d,40+i*6+r*3,30-r*3,3,1.5,(i+r)%2?.5:-.5,P);
  // tiny flag planted on top
  d.vline(49,15,22,'#E8E0D0'); d.rect(50,15,4,3,'#F86A8A'); d.px(51,16,'#FFFFFF');
},
// =================== KOALA ===================
'koala:s0': d=>{ // eucalyptus sprig on a little pillow
  // pillow
  d.ell(16,23,13,6,'#BFD8F0'); d.ell(16,22,12,5,'#D8EAFA'); d.ell(13,20,7,2,'#EEF6FF');
  for(const [x,y] of [[3,18],[29,18],[3,28],[29,28]]) d.circ(x,y,1.2,'#BFD8F0');
  d.hline(6,26,27,'#A0BEDC'); for(let x=8;x<26;x+=3) d.px(x,24,'#A8C4E0');
  // stem
  curve(d,[5,19],[14,9],[28,6],'#7A5A48'); curve(d,[5,20],[14,10],[28,7],'#5E4434');
  curve(d,[14,11],[13,16],[17,19],'#6A4E3E');
  // round eucalyptus leaves
  const leaf=(x,y,a,s=1)=>rell(d,x,y,3.4*s,2.2*s,a,(u,v)=>v>.35?'#5E8A80':(v<-.3&&u<.2?'#B8D8C8':'#8AB4A4'));
  leaf(8,13,-.9); leaf(12,18,.6); leaf(14,6,-.6); leaf(19,12,.9); leaf(21,4,-.3,.9); leaf(25,10,.4,.9); leaf(28,4,-.2,.8); leaf(18,21,.2,.85);
  d.outline('#2E3440');
  zs(d,25,14,'#7A8AB8'); d.stamp(28,12,['zz','.z','zz'].slice(0,0),{});
  d.px(3,9,'#B8D8C8'); d.px(4,8,'#B8D8C8');
},
'koala:s1': d=>{ // australian boomerang with dot art
  const A=[3,6],E=[15,26],B=[29,11];
  thick(d,A,[7,20],E,3.2,'#6A3A1E'); thick(d,E,[23,23],B,3.2,'#6A3A1E');
  thick(d,[A[0],A[1]-1],[7,19],[E[0],E[1]-1],2.8,'#B8682E'); thick(d,[E[0],E[1]-1],[23,22],[B[0],B[1]-1],2.8,'#B8682E');
  thick(d,[A[0]-.5,A[1]-1.5],[6.5,18.5],[E[0],E[1]-2],1.2,'#D88A48');thick(d,[E[0],E[1]-2],[23,21],[B[0],B[1]-1.5],1.2,'#D88A48');
  // dot painting
  for(let i=1;i<10;i++){const [x,y]=bez(A,[7,20],E,i/10); d.px(x,y,i%3?'#FFF4E0':'#F8D048')}
  for(let i=1;i<10;i++){const [x,y]=bez(E,[23,23],B,i/10); d.px(x,y-1,i%3?'#FFF4E0':'#F8D048')}
  for(const t of [.25,.6]){const [x,y]=bez(A,[7,20],E,t); d.px(x-2,y,'#E04838'); d.px(x+2,y-1,'#E04838')}
  for(const t of [.35,.7]){const [x,y]=bez(E,[23,23],B,t); d.px(x,y+1,'#E04838'); d.px(x-1,y-3,'#E04838')}
  d.circ(15,23,1.5,'#F8D048'); d.px(15,23,'#E04838');
  d.outline('#3A1E10');
  // little motion swoosh
  d.stamp(22,2,['..ww','.w..','w...'],{w:'#9AC8E8'}); d.stamp(3,27,['ww','..w'],{w:'#9AC8E8'});
},
'koala:s2': d=>{ // thousand-year eucalyptus branch with rings
  const BK='#C8BFAE',BK2='#A89C88',BK3='#857860',PE='#E8E0D0';
  thick(d,[6,25],[16,17],[29,8],3.6,BK2); thick(d,[6,24],[16,16],[29,7],3,BK);
  for(let i=0;i<14;i++){const [x,y]=bez([6,24],[16,16],[29,7],i/14); if(i%3===0) d.px(x+1,y-2,PE); if(i%4===1){d.px(x,y+1,BK3); d.px(x+1,y+1,BK3)}}
  // knot + gnarl
  d.circ(17,16,1.5,BK3); d.px(17,16,'#5E5240');
  // side twig with leaves
  curve(d,[20,13],[19,7],[13,4],BK2); curve(d,[24,11],[27,15],[29,20],BK2);
  const leaf=(x,y,a)=>rell(d,x,y,3,1.6,a,(u,v)=>v>.3?'#4E7A6C':(v<-.3?'#A8D0BC':'#78A894'));
  leaf(11,4,.3); leaf(15,8,1.1); leaf(18,4,-.5); leaf(28,22,1.3); leaf(26,18,.2); leaf(30,13,1.6);
  // cut end with growth rings
  d.ell(6,25,4,4.5,'#E8C890'); d.ring(6,25,3,'#B8905A'); d.ring(6,25,1.6,'#B8905A'); d.px(6,25,'#8A6438'); d.px(4,23,'#FFF0C8');
  // claw marks from long naps
  d.line(21,12,22,14,'#5E5240'); d.line(23,11,24,13,'#5E5240'); d.line(25,10,26,12,'#5E5240');
  d.outline('#2E2A24');
  bigtw(d,25,26,'#F8E070','#FFFFFF'); twinkle(d,3,9,'#F8E070','#FFFFFF'); twinkle(d,14,29,'#F8E070','#FFFFFF');
},
'koala:c0': d=>{ // street tree, day
  d.grad(0,0,64,22,['#8ED0F4','#9ED8F6','#B0E0F8','#C6EAFA']);
  cloud(d,14,5,5,'#FFFFFF'); cloud(d,36,3,4,'#FFFFFF');
  // background buildings
  d.rect(0,10,12,14,'#E8D8C0'); d.rect(12,13,10,11,'#D8C8E0'); d.rect(22,8,9,16,'#F0E0C8'); d.rect(52,12,12,12,'#D0DCE8');
  for(let y=12;y<22;y+=3){for(const x of [2,6,24,27,54,58]) d.rect(x,y,2,2,'#8AB0D0'); for(const x of [14,18]) if(y>14) d.rect(x,y,2,2,'#9A8AB8')}
  // road + curb
  d.rect(0,24,64,4,'#7A7A88'); for(let x=2;x<64;x+=8) d.hline(x,x+3,25,'#F0F0F0');
  d.hline(0,63,28,'#B8B8C0'); d.hline(0,63,29,'#9A9AA8');
  // sidewalk bricks
  d.rect(0,30,64,10,'#E8D8C8'); for(let y=30;y<40;y+=3){d.hline(0,63,y+2,'#D0BCA8'); for(let x=(y%2)*3;x<64;x+=6) d.vline(x,y,y+1,'#D0BCA8')}
  // tree guard + trunk
  d.rect(36,32,16,4,'#5A5A68'); d.hline(36,51,32,'#7A7A88'); for(let x=37;x<51;x+=2) d.px(x,34,'#3A3A48');
  d.rect(42,10,4,23,'#7A5638'); d.vline(42,10,32,'#9A7050'); d.vline(45,10,32,'#5E4028');
  d.line(44,16,52,10,'#7A5638'); d.line(44,17,52,11,'#5E4028'); d.line(43,18,36,13,'#7A5638');
  // crown
  for(const [x,y,r] of [[44,6,8],[34,9,6],[54,8,6],[40,2,5],[50,2,5]]) d.circ(x,y,r,'#4A9A4A');
  for(const [x,y,r] of [[42,4,5],[34,7,4],[52,6,4]]) d.circ(x,y,r,'#68B858');
  for(const [x,y] of [[38,4],[46,2],[50,6],[32,8],[56,10]]) d.px(x,y,'#9AD878');
  // sleepy branch spot: a pillow? z's drifting
  zs(d,55,15,'#5A6AA0'); d.stamp(58,12,['zz','.z','zz'],{z:'#7A8AC0'});
  // falling leaves
  d.px(30,20,'#68B858'); d.px(56,22,'#4A9A4A'); d.px(48,30,'#68B858');
  // street lamp
  d.vline(60,12,31,'#4A4A5A'); d.hline(57,60,12,'#4A4A5A'); d.rect(56,13,3,2,'#F8E89A');
},
'koala:c1': d=>{ // australian eucalyptus forest
  d.grad(0,0,64,26,['#F8E0B0','#F8E8C0','#F0ECD0','#E4ECD4']);
  // far trunks
  for(const x of [3,26,36,58]) {d.rect(x,0,2,28,'#D8D4C8'); d.px(x,10,'#C8C0B0')}
  // canopy wisps
  for(let i=0;i<14;i++) d.ell(d.ri(0,63),d.ri(0,5),d.ri(3,6),2,i%2?'#8AAE98':'#A0C0A8');
  // ground (red earth)
  d.grad(0,26,64,14,['#D88850','#C87840','#B86A38','#A85E30']);
  for(let i=0;i<30;i++) d.px(d.ri(0,63),d.ri(28,39),d.rnd()<.5?'#E89A60':'#98502A');
  for(const x of [2,14,30,46,58,25,40]) d.stamp(x,25,['g.g.g','.ggg.'],{g:'#B8A848'});
  // near eucalyptus trunks (pale, peeling)
  const trunk=(x,w)=>{d.rect(x,0,w,28,'#F0ECE4'); d.vline(x+w-1,0,27,'#C8C0B0'); for(let y=3;y<26;y+=7){d.rect(x,y,w-1,2,'#D8C8A8'); d.px(x+1,y+2,'#B8A888')} d.px(x-1,27,'#C8C0B0'); d.px(x+w,27,'#C8C0B0')};
  trunk(30,4); trunk(48,5); trunk(61,3);
  d.line(33,8,40,3,'#E0D8C8'); d.line(51,6,57,1,'#E0D8C8');
  for(const [x,y] of [[40,3],[57,1],[28,2],[46,4]]) d.ell(x,y,4,2,'#6A9A80');
  // kangaroos hopping
  const roo=(x,y,c,c2)=>d.stamp(x,y,[
    '..ee.......',
    '.hhhe......',
    'hhhh.......',
    '...hh......',
    '...hhhh....',
    '..h.hhhhh..',
    '....hhhhhh.',
    '.....hhh.hh',
    '......hh..h',
    '.....hhh...'],{h:c,e:c2});
  roo(37,15,'#9A5A34','#7A4224'); roo(52,20,'#8A4E2C','#6A3820'); d.stamp(44,9,['.e.','hhh','.hh','..hh'],{h:'#C8906A',e:'#B07850'});
  // dust puffs from hops
  d.ell(46,31,2,1,'#E8B888'); d.ell(60,30,2,1,'#E8B888'); d.px(43,30,'#E8B888');
  d.stamp(18,10,['z.','.z'].slice(0,0),{});
},
'koala:c2': d=>{ // tree of endless naps, night
  d.grad(0,0,64,30,['#1A1640','#221C50','#2A2260','#342A6C','#3E3278']);
  stars(d,28,0,0,63,24,['#FFFFFF','#E8E0FF','#FFF0B0']);
  d.circ(10,7,4,'#FFF4C8'); d.circ(12,5,4,'#1E1848'); d.px(8,7,'#FFFFFF');
  // hill
  d.ell(44,38,30,9,'#2A4A48'); d.rect(0,33,64,7,'#2A4A48'); d.ell(44,36,26,5,'#36605A');
  for(let x=0;x<64;x+=5) d.px(x,34,'#4A7A70');
  // giant tree
  d.rect(41,16,6,20,'#5A4038'); d.vline(41,16,35,'#7A5848'); d.vline(46,16,35,'#3E2A26');
  d.poly([[38,36],[41,30],[41,36]],'#5A4038'); d.poly([[47,30],[51,36],[47,36]],'#3E2A26');
  d.line(46,20,56,16,'#5A4038'); d.line(46,21,56,17,'#3E2A26');
  for(const [x,y,r] of [[44,9,10],[33,12,6],[56,10,7],[50,3,6],[38,3,5]]) d.circ(x,y,r,'#2E5A50');
  for(const [x,y,r] of [[42,7,6],[34,10,3],[54,8,4]]) d.circ(x,y,r,'#3E7066');
  // hammock on the branch
  d.line(50,18,50,21,'#C8B898'); d.line(56,17,57,21,'#C8B898');
  curve(d,[50,21],[53,26],[57,21],'#E87898'); curve(d,[50,22],[53,27],[57,22],'#B85878');
  d.stamp(51,22,['wwww','.ww.'],{w:'#F8C8D8'});
  // fireflies + z's
  for(const [x,y] of [[30,18],[36,22],[58,24],[27,10],[60,4],[47,13]]) {d.px(x,y,'#F8F080'); d.px(x+1,y,'#C8C850')}
  zs(d,56,13,'#B8B0F0'); d.stamp(59,8,['zzz','..z','.z.','zzz'],{z:'#D8D0FF'}); d.stamp(61,3,['zz','zz'],{z:'#F0E8FF'});
  // pillow in the crook
  d.ell(44,16,3,1.5,'#F8F0E8'); d.px(42,16,'#D8D0D8');
},
// =================== CHUL ===================
'chul:s0': d=>{ // new buldak cup noodle
  const K='#2A2228',K2='#3E3238',R='#E03030',R2='#B01E22',Y='#F8D040',W='#FFF4E8',F='#C8C8D0';
  // cup body (trapezoid)
  d.poly([[5,9],[27,9],[24,30],[8,30]],K2); d.poly([[5,9],[11,9],[11,30],[8,30]],K); d.poly([[22,9],[27,9],[24,30],[21,30]],'#4E4048');
  d.rect(6,13,20,6,R); d.hline(6,25,13,'#F05050'); d.hline(6,25,18,R2);
  // flame mascot
  d.stamp(12,19,['..f..f..','.fyf.ff.','.fyyffyf','fyyyyyyf','fywkywkf','fyyyyyyf','.fyrryf.','..ffff..'],{f:'#F06020',y:Y,w:W,k:K,r:R});
  // NEW sticker
  d.circ(23,24,3.2,Y); d.ring(23,24,3.2,'#E89820'); d.stamp(21,23,['n.n','nnn','n.n'],{n:R2});
  // rim + peeled foil lid
  d.rect(4,7,24,3,'#E8E0E0'); d.hline(4,27,9,'#B8B0B0');
  d.poly([[14,8],[27,8],[29,1],[19,2]],F); d.line(14,8,19,2,'#9A9AA8'); d.line(19,2,29,1,'#E8E8F0'); d.poly([[21,4],[26,3],[25,6],[21,6]],R); d.px(23,4,Y);
  // noodles peeking
  for(let x=5;x<14;x+=2) d.px(x,7,'#F8D890'); d.hline(6,13,6,'#F0C870'); d.px(8,5,'#F0C870'); d.px(11,5,'#F0C870');
  // chopsticks
  d.line(2,1,10,12,'#C89058'); d.line(3,1,11,12,'#A87038'); d.line(6,0,12,11,'#C89058');
  d.outline('#1A1014');
  // heat / spice puffs
  d.stamp(28,10,['.r.','rrr','.r.'],{r:'#F06020'}); d.px(1,16,'#F06020'); d.px(29,17,'#F8D040');
},
'chul:s1': d=>{ // legendary nursing notes, worn thick binder
  // stack of pages
  d.rect(5,6,22,23,'#F4EEE0'); for(let y=8;y<28;y+=2) d.hline(6,26,y,'#E0D8C4');
  d.rect(4,4,22,23,'#FFF8E8');
  // cover
  d.rect(3,3,22,23,'#4A7AC8'); d.rect(3,3,22,2,'#6A98E0'); d.vline(3,3,25,'#2E5AA0'); d.rect(3,24,22,2,'#2E5AA0');
  // spiral rings
  for(let y=5;y<25;y+=3){d.px(2,y,'#C8C8D0'); d.px(3,y,'#E8E8F0'); d.px(4,y,'#888898')}
  // label with red cross
  d.rect(9,7,12,10,'#FFFFFF'); d.frame(9,7,12,10,'#C8D0E0'); d.rect(14,8,2,8,'#E04848'); d.rect(11,11,8,2,'#E04848');
  // wear: torn corner, coffee ring, tape
  d.poly([[22,3],[25,3],[25,6]],'#FFF8E8'); d.line(22,3,25,6,'#2E5AA0');
  d.ring(19,21,2.5,'#8A5A38'); d.px(17,20,'#A87850');
  d.rect(5,19,6,3,'#F8F0B8'); d.px(5,19,'#E8E0A0'); d.px(10,21,'#E8E0A0');
  // colourful index tabs
  const tabs=[['#F86A8A',6],['#F8D040',11],['#78D078',16],['#58B8F0',21]]; for(const [c,y] of tabs){d.rect(25,y,3,3,c); d.px(27,y,'#FFFFFF')}
  // highlighter
  d.line(11,30,26,24,'#F8E848'); d.line(11,29,26,23,'#F8E848'); d.line(12,30,27,24,'#D8C820'); d.rect(25,22,4,3,'#E8E8E8'); d.px(9,30,'#F8E848');
  d.outline('#1E2A48');
  twinkle(d,29,2,'#F8D040','#FFFFFF'); d.px(1,1,'#F8D040');
},
'chul:s2': d=>{ // Yongbok signed photocard in a toploader
  // toploader
  d.rect(5,1,22,30,'#E0F0FF'); d.frame(5,1,22,30,'#B8D0E8');
  // photo
  d.rect(7,3,18,22,'#F8C8D8'); d.dither(7,3,18,6,'#F8C8D8','#FCDCE6');
  // person: blond hair, face with freckles
  d.ell(16,24,8,5,'#3A3048'); d.rect(9,21,15,4,'#3A3048'); d.px(16,20,'#FFFFFF');
  d.ell(16,13,5,6,'#F8E0C8'); d.rect(14,18,5,3,'#F0D0B8');
  d.ell(16,9,6,4,'#F8E070'); d.rect(10,9,3,6,'#F8E070'); d.rect(20,9,3,6,'#F8E070'); d.hline(12,20,11,'#F8E070'); d.px(13,12,'#F8E070'); d.px(18,12,'#E8C850');
  d.hline(11,15,7,'#FFF4B0');
  d.rect(13,14,2,2,'#2A2030'); d.rect(18,14,2,2,'#2A2030'); d.px(13,14,'#FFFFFF'); d.px(18,14,'#FFFFFF'); d.px(13,16,'#C89070'); d.px(15,16,'#C89070'); d.px(17,16,'#C89070'); d.px(19,16,'#C89070');
  d.hline(15,17,17,'#E07080'); d.px(14,16,'#F8A8B8'); d.px(19,16,'#F8A8B8');
  // signature scribble in silver/black marker over the photo
  curve(d,[9,24],[11,18],[13,22],'#F0F0FF'); curve(d,[13,22],[15,25],[17,21],'#F0F0FF'); curve(d,[17,21],[20,18],[22,23],'#F0F0FF'); d.line(10,25,23,24,'#F0F0FF'); d.px(23,21,'#F8D040'); d.px(24,22,'#F8D040');
  bigheart(d,18,3,'#E83A6A','#FFFFFF');
  // bottom strip of card
  d.rect(7,26,18,3,'#FFFFFF'); d.hline(9,15,27,'#C8B8D0');
  d.outline('#3A2A48');
  d.line(6,4,6,10,'#FFFFFF'); d.line(25,22,25,27,'#FFFFFF');
  heart(d,1,8,'#F86A9A'); heart(d,28,16,'#F86A9A'); twinkle(d,2,26,'#F8D040','#FFFFFF'); twinkle(d,29,4,'#F8D040','#FFFFFF');
},
'chul:c0': d=>{ // neighborhood trail, day, five dogs
  d.grad(0,0,64,16,['#9AD4F4','#AEDCF6','#C4E6F8']);
  cloud(d,20,4,5,'#FFFFFF'); cloud(d,48,6,4,'#FFFFFF');
  d.circ(58,3,3,'#FFF0A0'); d.circ(58,3,2,'#FFFFFF');
  // hills
  d.ell(10,17,18,5,'#8CC878'); d.ell(44,16,26,5,'#7AB868'); d.rect(0,17,64,23,'#88C470');
  // row of trees on far hill
  for(const x of [28,34,40,52,58]){d.vline(x,13,16,'#7A5638'); d.circ(x,11,3,'#4E9A50'); d.px(x-1,10,'#78C068')}
  // grass bands
  d.rect(0,24,64,16,'#9CD07C'); for(let i=0;i<34;i++){const x=d.ri(0,63),y=d.ri(19,39); d.px(x,y,'#78B060')}
  // winding dirt path from lower-left into the distance on the right
  for(let y=17;y<40;y++){const t=(y-17)/23, cx=50-36*t*t-4*t, w=1+t*9; d.hline(Math.round(cx-w),Math.round(cx+w),y,'#E8D0A0'); d.px(Math.round(cx-w),y,'#C8A878'); d.px(Math.round(cx+w),y,'#C8A878')}
  // five dogs on the path / grass
  const pup=(x,y,c,c2)=>d.stamp(x,y,['....ee','t..bbbk','.bbbbb.','.bbbb..','.b..b..'],{b:c,e:c2,t:c2,k:'#2A2020'});
  pup(44,17,'#F0C890','#C89060'); pup(52,20,'#FFFFFF','#C8C0B8'); pup(36,22,'#8A5A38','#5E3A22'); pup(54,27,'#2A2228','#5E5058'); pup(42,31,'#E8A858','#B87830');
  d.px(46,16,'#E83A3A'); // red bow
  // bench with dropped study book ("future me")
  d.rect(26,30,10,2,'#B07A48'); d.hline(26,35,30,'#C8925A'); d.vline(27,32,34,'#7A5030'); d.vline(34,32,34,'#7A5030'); d.rect(26,27,10,1,'#9A6A3E');
  d.rect(29,28,5,2,'#58A0E0'); d.hline(29,33,28,'#E04848');
  // flowers + sign
  for(const [x,y,c] of [[60,34,'#F86A8A'],[62,30,'#F8D040'],[25,37,'#FFFFFF'],[58,38,'#F8D040'],[38,38,'#F86A8A']]){d.px(x,y,c); d.px(x,y+1,'#4E8A40')}
  d.vline(60,20,26,'#7A5030'); d.rect(57,18,7,3,'#C8925A'); d.stamp(58,19,['p.p.p'],{p:'#5E3A22'});
},
'chul:c1': d=>{ // esports finals arena
  d.rect(0,0,64,40,'#140E2A');
  // rafters + spotlights beams
  d.hline(0,63,1,'#2E2850'); for(let x=2;x<64;x+=6) d.line(x,0,x+3,2,'#2E2850');
  d.poly([[8,2],[11,2],[30,24],[20,24]],'#2A2050'); d.poly([[56,2],[59,2],[50,24],[40,24]],'#2A2050');
  for(const x of [9,57]){d.rect(x,1,3,2,'#E8E8F0'); d.px(x+1,3,'#FFFFFF')}
  // giant screen
  d.rect(20,3,32,16,'#3A3A5A'); d.rect(21,4,30,14,'#0E2040');
  d.grad(21,4,30,14,['#163060','#1A3A70','#20447C']);
  d.rect(21,4,15,14,'#1C3A80'); d.rect(36,4,15,14,'#6A1E3A'); // blue vs red
  d.stamp(25,7,['.bb.','bwwb','bwwb','.bb.'],{b:'#58B8F0',w:'#E8F8FF'}); d.stamp(43,7,['.rr.','rwwr','rwwr','.rr.'],{r:'#F06070',w:'#FFE8EC'});
  d.stamp(33,7,['v.v','v.v','.v.'],{v:'#F8D040'}); d.stamp(35,7,['ss','s.','ss','.s','ss'],{s:'#F8D040'});
  d.hline(23,33,14,'#58B8F0'); d.hline(23,29,15,'#58B8F0'); d.hline(38,48,14,'#F06070'); d.hline(42,48,15,'#F06070');
  d.vline(36,4,17,'#FFFFFF');
  d.rect(35,19,2,3,'#3A3A5A');
  // stage with two team desks
  d.rect(14,22,50,4,'#2E2448'); d.hline(14,63,22,'#5A4A88'); for(let x=15;x<64;x+=3) d.px(x,25,'#58E0F0');
  d.rect(24,18,9,4,'#1C3A80'); d.hline(24,32,18,'#58B8F0'); d.rect(40,18,9,4,'#6A1E3A'); d.hline(40,48,18,'#F06070');
  for(const x of [25,28,31,41,44,47]) {d.px(x,17,'#2A2228'); d.px(x,16,'#E8C0A0')}
  // trophy center
  d.stamp(35,13,['y...y','yyyyy','.yyy.','..y..','.yyy.'].slice(0,0),{});
  // floor / crowd
  d.rect(0,26,64,14,'#1E1838'); d.grad(0,32,64,8,['#241C40','#2A2048']);
  for(let x=23;x<64;x+=4){const h=(x*7)%2; d.circ(x+1,30+h,1.5,'#4A3C70'); d.rect(x-1,32+h,5,8,'#4A3C70'); d.px(x,29+h,'#6A5A98')}
  for(let x=25;x<64;x+=4){const h=(x*3)%2; d.circ(x+1,34+h,1.5,'#5E4E88'); d.rect(x-1,36+h,5,4,'#5E4E88')}
  d.stamp(34,15,['y.y.y'.slice(0,0)],{}); d.stamp(34,19,['ywy','.y.','yyy'],{y:'#F8D040',w:'#FFFFFF'});
  // glowing phones / light sticks in crowd
  for(let x=27;x<64;x+=4){d.vline(x,26+(x%3),28+(x%3),x%8<4?'#58E0F0':'#F06090')}
  // "one more game": a held-up controller
  d.stamp(52,27,['.cccc.','ccwccc','cccccc','c....c'],{c:'#E8E8F0',w:'#F06070'});
  // confetti
  for(let i=0;i<16;i++) d.px(d.ri(14,63),d.ri(2,20),['#F8D040','#58E0F0','#F06090'][i%3]);
},
'chul:c2': d=>{ // Yongbok world tour concert at night
  d.grad(0,0,64,28,['#1A0A2E','#2A0E40','#3E1452','#561A64']);
  stars(d,14,0,0,63,8,['#FFFFFF','#F8C8E8']);
  const fw=(x,y,c)=>{for(let a=0;a<8;a++){const t=a*Math.PI/4; d.line(x+Math.cos(t)*2,y+Math.sin(t)*2,x+Math.cos(t)*4,y+Math.sin(t)*4,c)} d.px(x,y,'#FFFFFF')};
  fw(20,6,'#F8D040'); fw(8,13,'#F87AB0');
  // stage truss + screen
  d.rect(28,4,36,24,'#2A1438'); for(let x=28;x<64;x+=2) d.px(x,4,x%4?'#F8D040':'#F87AB0'); for(let y=5;y<28;y+=2){d.px(28,y,'#F8D040'); d.px(63,y,'#F87AB0')}
  d.rect(33,6,26,14,'#4A1A5A'); d.frame(33,6,26,14,'#6A2A7A');
  d.stamp(38,7,['..hhhh....hhhh..','.hhhhhh..hhhhhh.','hhwwhhhhhhhhhhhh','hhwhhhhhhhhhhhhh','hhhhhhhhhhhhhhhh','.hhhhhhhhhhhhhh.','..hhhhhhhhhhhh..','...hhhhhhhhhh...','.....hhhhhh.....','.......hh.......'],{h:'#F84A8A',w:'#FFFFFF'});
  // spotlight cones from above
  d.poly([[30,4],[32,4],[48,27],[42,27]],'#5A2468'); d.poly([[62,4],[60,4],[48,27],[52,27]],'#5A2468');
  // singer (blond, black outfit, mic)
  d.stamp(44,15,['.yyyy.','yyyyyy','yffffy','.fkfk.','.ffff.','..ff..','.ssss.','ssssss','s.ss.s','f.ss.f','..ss..','..s.s.','..s.s.'],{y:'#F8E070',f:'#F8D8C0',k:'#2A1A2A',s:'#120818'});
  d.px(50,21,'#C8C8D0'); d.px(50,22,'#888898');
  // stage floor
  d.rect(26,27,38,3,'#1E0C28'); d.hline(26,63,27,'#F8D040'); d.hline(26,63,29,'#120818');
  // crowd with lightsticks
  d.rect(0,30,64,10,'#140A1C'); d.rect(0,28,26,2,'#1A0C24');
  for(let x=26;x<64;x+=5){const y=34+((x*3)%2); d.rect(x-2,y+2,6,8,'#2E1640'); d.circ(x+.5,y,1.6,'#4A2A5E'); d.px(x,y-1,'#6A3E7A');
    const sx=x+3, lean=(x%10<5)?1:-1; d.line(sx,y+1,sx+lean,y-3,'#C8C8D0'); d.rect(sx+lean,y-6,1,3,x%3?'#F8D040':'#F87AB0'); d.px(sx+lean,y-6,'#FFFFFF')}
  // floating hearts ("looked at me!")
  heart(d,22,22,'#F87AB0'); bigheart(d,4,4,'#F84A8A','#FFFFFF'); heart(d,26,1,'#F87AB0'); heart(d,54,22,'#F84A8A');
  for(let x=1;x<24;x+=6) d.px(x,37,'#2A1638');
},
// =================== AMELIA ===================
'amelia:s0': d=>{ // brain jigsaw, one piece lifted out
  const P1='#F8A8BC',P2='#D86888',P3='#FFD4E0',SEAM='#B04868';
  d.ell(15,13,13,10,P1); d.ell(12,18,9,5,P1); d.rect(16,21,4,8,'#E8909E'); d.vline(19,21,28,'#C86A80'); d.vline(16,21,28,'#F0A8B8');
  // cerebellum with stripes
  d.ell(23,22,5,3.5,'#EC8CA8'); for(const y of [21,23]) curve(d,[19,y+1],[23,y-1],[27,y+1],P2);
  // gyri: iso-lines of a smooth field give meandering folds
  const pl=(pts)=>{for(let i=1;i<pts.length;i++){d.line(pts[i-1][0],pts[i-1][1]+1,pts[i][0],pts[i][1]+1,P3)} for(let i=1;i<pts.length;i++) d.line(pts[i-1][0],pts[i-1][1],pts[i][0],pts[i][1],P2)};
  pl([[5,9],[7,6],[10,6],[11,9],[9,11]]); pl([[13,4],[12,7],[14,9]]); pl([[18,5],[17,8],[19,11],[17,12]]);
  pl([[3,13],[6,12],[7,15],[10,16],[12,14]]); pl([[11,11],[13,12]]); pl([[24,9],[26,11],[25,14],[27,16]]);
  pl([[18,15],[21,16],[23,14],[25,17]]); pl([[5,19],[8,18],[10,20],[13,19],[14,21]]); pl([[16,19],[18,18]]); pl([[4,16],[3,18]]); pl([[20,11],[22,10]]);
  // jigsaw seams (light) with knobs
  // faint jigsaw cut lines
  for(let y=4;y<22;y+=2) if(d.get(15,y)!==null) d.px(15,y,'#E890A8'); for(let x=3;x<28;x+=2) d.px(x,13,'#E890A8'); d.stamp(13,8,['.s.','s.s','.s.'],{s:'#E890A8'}); d.stamp(21,12,['.s.','s.s','.s.'],{s:'#E890A8'});
  // missing piece hole with a knob
  d.rect(19,4,7,7,'#6A2A44'); d.circ(17.5,7,1.4,'#6A2A44'); d.hline(19,25,4,'#4A1A30'); d.vline(19,4,10,'#4A1A30');
  d.outline('#4A1A2E');
  // lifted piece floating up-right
  d.rect(24,0,7,7,P1); d.circ(22.5,3,1.4,P1); d.hline(24,30,0,P3); d.line(25,4,29,2,P2); d.px(27,4,P3);
  d.frame(24,0,7,7,'#4A1A2E'); d.px(22,1,'#4A1A2E'); d.px(21,3,'#4A1A2E'); d.px(22,5,'#4A1A2E'); d.px(23,1,'#4A1A2E');d.px(23,5,'#4A1A2E');
  twinkle(d,2,2,'#F8E070','#FFFFFF'); d.px(1,27,'#F8E070'); d.px(29,10,'#F8E070');
},
'amelia:s1': d=>{ // one-day-at-a-time coin (sobriety chip)
  const G1='#E8B840',G2='#C8902A',G3='#FFE488',G4='#9A6418';
  d.circ(16,16,14,G2); d.circ(15,15,13,G1); d.ring(16,16,14,G4);
  d.ring(16,16,11,G2); d.ring(15,15,11,G3);
  for(let a=0;a<36;a++){const t=a*Math.PI/18; if(a%2) d.px(Math.round(16+Math.cos(t)*12.6),Math.round(16+Math.sin(t)*12.6),G4)}
  // embossed triangle
  d.line(16,7,8,22,G4); d.line(16,7,24,22,G4); d.hline(8,24,22,G4); d.line(16,8,9,21,G3); d.hline(10,22,21,G2);
  // big "1"
  d.stamp(14,11,['.11','111','.11','.11','.11','.11','1111'],{1:G4}); d.stamp(13,11,['.33','...'],{3:G3});
  // tiny heart for pride
  heart(d,14,25,'#E85A7A');
  // shine
  d.line(6,9,9,5,'#FFF6D0'); d.px(5,11,'#FFF6D0'); d.px(10,4,'#FFFFFF');
  d.outline('#5A3A10');
  bigtw(d,27,4,'#FFF0A0','#FFFFFF'); twinkle(d,4,27,'#FFF0A0','#FFFFFF');
},
'amelia:s2': d=>{ // the impossible op chart on a clipboard
  // board
  d.rect(4,3,24,28,'#B07A48'); d.vline(4,3,30,'#C8925A'); d.vline(27,3,30,'#8A5A30'); d.hline(4,27,30,'#8A5A30');
  // paper
  d.rect(6,6,20,23,'#FFFFFF'); d.vline(25,6,28,'#E0E4EC'); d.hline(6,25,28,'#E0E4EC');
  // header bar
  d.rect(7,8,18,2,'#58A0D8');
  // scan of a brain with tumor circled
  d.ell(12,15,4,3,'#C8D8E8'); d.ell(12,15,3,2,'#E8F0F8'); curve(d,[10,14],[12,13],[13,16],'#A8B8C8');
  d.circ(14,15,1,'#8A4A5A'); d.ring(14,15,2.6,'#E03A3A');
  d.line(17,13,19,11,'#E03A3A');
  // lines of notes
  for(const y of [20,22,24]) d.hline(8,d.ri(17,23),y,'#A8B0C0');
  d.hline(19,24,13,'#A8B0C0'); d.hline(19,23,15,'#A8B0C0'); d.hline(19,24,17,'#A8B0C0');
  // big green check + signature
  d.line(17,25,19,27,'#38A858'); d.line(19,27,24,21,'#38A858'); d.line(18,25,19,26,'#58C878');
  curve(d,[8,27],[10,24],[12,27],'#2A3A6A'); d.line(12,27,15,26,'#2A3A6A');
  // metal clip
  d.rect(11,1,10,5,'#B8BCC8'); d.rect(13,0,6,2,'#D8DCE8'); d.hline(11,20,5,'#7A7E8A'); d.rect(14,1,4,1,'#7A7E8A'); d.px(12,2,'#FFFFFF');
  d.outline('#2A1E18');
  // tumour in a jar? keep simple: a small gold star "impossible!"
  bigtw(d,29,8,'#F8D040','#FFFFFF'); twinkle(d,2,20,'#F8D040','#FFFFFF');
},
'amelia:c0': d=>{ // hospital MRI suite
  // wall + floor
  d.rect(0,0,64,24,'#DCE8EE'); d.rect(0,0,64,2,'#C4D4DC'); d.hline(0,63,23,'#A8BCC8');
  for(let x=0;x<64;x+=16) d.vline(x,2,22,'#CCDCE4');
  d.rect(0,24,64,16,'#B8D0D8'); for(let y=26;y<40;y+=4) d.hline(0,63,y,'#A0BCC8'); for(let x=4;x<64;x+=8) d.vline(x,24,39,'#A0BCC8');
  d.dither(30,30,34,10,'#B8D0D8','#C8DCE4');
  // lightbox with brain scans on the left/center wall
  d.rect(22,4,18,10,'#5A6A78'); d.rect(23,5,16,8,'#E8F8FF');
  for(const x of [24,32]){d.rect(x,6,6,6,'#1A2A3A'); d.ell(x+3,9,2,2,'#7AA8C8'); d.px(x+3,9,'#C8E8FF'); d.px(x+2,8,'#E8F8FF')}
  d.px(36,10,'#F07AA0'); d.px(28,10,'#F07AA0');
  // MRI machine (big donut) on the right
  d.rect(42,6,22,22,'#F4F6F8'); d.rect(42,6,22,2,'#FFFFFF'); d.vline(63,6,27,'#C8D0D8'); d.hline(42,63,27,'#B8C0C8');
  d.circ(53,16,7,'#8A98A8'); d.circ(53,16,6,'#3A4A5A'); d.circ(53,16,4,'#24323E'); d.ring(53,16,7,'#C8D0D8');
  d.hline(45,61,7,'#58A0D8'); d.px(60,9,'#58E078'); d.px(58,9,'#F8D040');
  // patient bed sliding in
  d.rect(32,21,22,3,'#E8ECF0'); d.hline(32,53,21,'#FFFFFF'); d.rect(34,24,3,6,'#8A98A8'); d.rect(30,30,10,2,'#6A7888');
  d.ell(36,20,3,1,'#A8D8F0');
  // control monitor + clipboard
  d.rect(24,17,6,5,'#2A3A4A'); d.rect(25,18,4,3,'#58C8E8'); d.px(26,19,'#F07AA0'); d.rect(26,22,2,2,'#5A6A78');
  // ceiling lights + magnet warning
  d.rect(6,0,10,1,'#FFFFFF'); d.rect(48,0,10,1,'#FFFFFF');
  d.poly([[18,3],[21,8],[15,8]],'#F8D040'); d.px(18,5,'#2A2A2A'); d.px(18,7,'#2A2A2A');
  // heart sparkle (gorgeous brain)
  heart(d,30,1,'#F07AA0');
},
'amelia:c1': d=>{ // Oceanside, LA
  d.grad(0,0,64,16,['#F8C8A0','#F8D8B0','#F0E4C0','#C8E4E8']);
  d.circ(44,13,4,'#FFE8A0'); d.circ(44,13,3,'#FFF6D0');
  // sea
  d.rect(0,15,64,10,'#3A9AC8'); d.hline(0,63,15,'#2A7AA8');
  for(let y=17;y<25;y+=2) for(let x=(y*3)%7;x<64;x+=7) d.hline(x,x+2,y,'#6AC0E0');
  d.hline(40,48,16,'#FFE8A0'); d.hline(41,47,18,'#FFE8A0'); d.hline(42,46,20,'#FFF0C0');
  // pier on the right
  d.rect(36,12,28,2,'#8A5A3A'); d.hline(36,63,12,'#A87850'); for(let x=37;x<64;x+=4) d.vline(x,14,22,'#6A4028');
  d.rect(54,6,8,6,'#E8E0D0'); d.poly([[53,6],[58,2],[63,6]],'#D85A4A'); d.rect(56,8,2,2,'#58A0D8');
  // foam + sand
  d.rect(0,25,64,2,'#FFFFFF'); for(let x=0;x<64;x+=5) d.px(x+2,27,'#E8F4F8');
  d.rect(0,27,64,13,'#F4DCAA'); d.dither(0,36,64,4,'#F4DCAA','#E8CC94');
  // palm trees
  const palm=(x,h)=>{for(let i=0;i<h;i++){const xx=x+Math.round(Math.sin(i/5)*1.5); d.px(xx,34-i,'#8A6038'); d.px(xx+1,34-i,i%3?'#6A4428':'#A87848')} const tx=x+Math.round(Math.sin((h-1)/5)*1.5), ty=34-h;
    for(const [dx,dy] of [[-7,3],[-6,-1],[-2,-4],[3,-4],[7,-1],[8,3]]) {curve(d,[tx,ty],[tx+dx*.5,ty+dy-2],[tx+dx,ty+dy],'#3A8A4A'); curve(d,[tx,ty+1],[tx+dx*.5,ty+dy-1],[tx+dx,ty+dy+1],'#2A6A38'); d.px(tx+dx,ty+dy+2,'#2A6A38')}
    d.circ(tx,ty+1,1.2,'#7A4A28'); d.px(tx+1,ty+2,'#A87848')};
  palm(30,22); palm(36,16);
  // lifeguard hut & surfboard
  d.vline(50,24,33,'#8A5A3A'); d.vline(57,24,33,'#8A5A3A'); d.rect(49,20,10,5,'#58B8D8'); d.poly([[48,20],[54,16],[60,20]],'#F05A5A'); d.rect(52,21,3,2,'#FFFFFF');
  d.ell(43,31,1,5,'#F8D040'); d.vline(43,27,35,'#E8A030');
  // friends' coffee cups on a towel
  d.rect(24,34,14,4,'#F07AA0'); d.hline(24,37,35,'#FFFFFF'); d.rect(27,32,2,2,'#FFFFFF'); d.rect(31,32,2,2,'#FFFFFF'); d.px(27,32,'#8A5A3A'); d.px(31,32,'#8A5A3A');
  // gulls
  d.stamp(18,5,['g.g','.g.'],{g:'#6A6A7A'}); d.stamp(26,3,['g.g','.g.'],{g:'#6A6A7A'});
},
'amelia:c2': d=>{ // neuron galaxy inside a brain
  d.grad(0,0,64,40,['#0A0820','#100C2E','#18103C','#20144A']);
  d.dither(6,4,20,8,'#2A1A5A','#140E30'); d.dither(36,26,26,8,'#3A1A5A','#18103C');
  stars(d,40,0,0,63,39,['#5A4A9A','#8A7ACA','#FFFFFF']);
  // neurons: soma + dendrites
  const neuron=(x,y,r,c,c2,arms)=>{for(const [dx,dy] of arms){d.line(x,y,x+dx,y+dy,c2); d.line(x+dx,y+dy,x+dx+Math.sign(dx)*2,y+dy-2,c2); d.line(x+dx,y+dy,x+dx+Math.sign(dx)*1,y+dy+2,c2); d.px(x+dx+Math.sign(dx)*2,y+dy-2,'#FFFFFF')}
    d.circ(x,y,r,c); d.px(x-1,y-1,'#FFFFFF'); d.circ(x,y,Math.max(0,r-2),'#FFFFFF')};
  // big neuron with long axon
  curve(d,[44,16],[34,24],[26,10],'#F87AC8'); curve(d,[44,17],[34,25],[26,11],'#B84A98');
  for(const t of [.25,.5,.75]){const [x,y]=bez([44,16],[34,24],[26,10],t); d.rect(x-1,y-1,2,2,'#F8D0F0')}
  neuron(46,15,4,'#F8A8E8','#C860C0',[[8,-6],[10,2],[6,9],[-2,-9],[4,-11]]);
  // smaller neurons
  neuron(26,9,2.4,'#88D8FF','#4A90D0',[[-5,-4],[5,-5],[-4,4]]);
  neuron(56,30,2.4,'#A8F0C8','#4AB088',[[-6,-3],[4,-6],[5,5]]);
  neuron(36,32,2,'#FFE888','#C8A040',[[-5,3],[5,-4],[4,4]]);
  neuron(12,6,2,'#C8A8FF','#7A5ACA',[[5,4],[-4,3]]);
  // synapse sparks along connections
  d.line(28,10,34,30,'#3A3A7A'); d.line(38,31,52,30,'#3A3A7A');
  bigtw(d,32,22,'#F8D040','#FFFFFF'); twinkle(d,46,30,'#88D8FF','#FFFFFF'); twinkle(d,60,6,'#F8A8E8','#FFFFFF'); twinkle(d,20,17,'#88D8FF','#FFFFFF');
  // soft glowing tissue floor for the pet
  d.rect(0,37,64,3,'#3A2060'); for(let x=0;x<64;x++) if((x*7)%5<2) d.px(x,36,'#3A2060'); d.hline(0,63,37,'#5A3A8A');
},
// =================== MY MELODY ===================
'mymelody:s0': d=>{ // almond pound cake slice on a pink plate
  // plate
  d.ell(16,26,15,4,'#F8C8D8'); d.ell(16,25,13,3,'#FFE4EC'); d.ell(16,25,10,2,'#FFF4F8'); for(let x=3;x<30;x+=4) d.px(x,27,'#F8A8C0');
  // slice: front face (crumb) + top crust
  d.poly([[4,14],[24,10],[24,24],[4,26]],'#FFE8A8'); // front crumb
  d.poly([[24,10],[29,13],[29,25],[24,24]],'#E8B868'); // side crust
  d.poly([[4,14],[24,10],[29,13],[10,17]],'#C8803A'); // top crust
  d.line(4,14,24,10,'#E0A050'); d.line(10,17,29,13,'#A86428');
  d.line(4,14,10,17,'#A86428');
  // bottom crust strip
  d.line(4,26,24,24,'#D89850'); d.line(4,25,24,23,'#E8B868');
  // crumb texture
  for(const [x,y] of [[7,19],[12,21],[18,17],[15,23],[21,20],[9,23],[19,22]]) d.px(x,y,'#F0D088');
  for(const [x,y] of [[10,19],[16,19],[13,17]]) d.px(x,y,'#FFF4D0');
  // almond slices on top
  const alm=(x,y)=>d.stamp(x,y,['.aa.','abba','.aa.'],{a:'#F8E8C8',b:'#D8B888'});
  alm(9,12); alm(15,11); alm(21,11); alm(13,14); alm(19,13);
  // pink frosting drip + strawberry
  d.stamp(23,7,['.rr.','rrrr','rwrr','.rr.'],{r:'#F05070',w:'#FFFFFF'}); d.stamp(24,5,['g.g','.g.'],{g:'#58B058'});
  d.outline('#6A3A2A');
  // a little heart from Mama
  heart(d,1,4,'#F87AA8'); twinkle(d,29,3,'#F8D040','#FFFFFF');
},
'mymelody:s1': d=>{ // grandma's knitted pink scarf, coiled
  const K1='#F8A0C0',K2='#E07898',K3='#FFD0E0';
  // long band snaking: top loop then hanging tail
  thick(d,[6,8],[16,2],[26,8],4,K2); thick(d,[6,8],[16,2],[26,8],3.2,K1);
  thick(d,[26,8],[30,16],[22,20],4,K2); thick(d,[26,8],[30,16],[22,20],3.2,K1);
  thick(d,[6,8],[2,15],[8,18],4,K2); thick(d,[6,8],[2,15],[8,18],3.2,K1);
  // hanging tails
  d.rect(9,16,6,12,K2); d.rect(10,16,4,12,K1); d.rect(17,18,6,10,K2); d.rect(18,18,4,10,K1);
  // knit V stitches
  for(let y=17;y<28;y+=2){d.stamp(10,y,['k.k','.k.'].map(r=>r),{k:K2}); d.stamp(18,y+1,['k.k','.k.'],{k:K2})}
  for(const [x,y] of [[8,6],[12,4],[16,3],[20,4],[24,6],[27,11],[27,15],[4,11],[4,14]]) d.stamp(x,y,['k.k','.k.'],{k:K2});
  for(const [x,y] of [[10,5],[18,3],[28,13],[3,13]]) d.px(x,y,K3);
  // white stripes near the ends
  d.hline(10,13,24,'#FFFFFF'); d.hline(18,21,24,'#FFFFFF');
  // fringe
  for(let x=9;x<15;x++) if(x%2) d.vline(x,28,30,K2); else d.vline(x,28,31,K1);
  for(let x=17;x<23;x++) if(x%2) d.vline(x,28,30,K2); else d.vline(x,28,31,K1);
  // little white flower patch
  d.stamp(23,13,['.w.','wyw','.w.'],{w:'#FFFFFF',y:'#F8D040'});
  d.outline('#7A2E4A');
  // knitting needles + yarn ball peek
  d.circ(28,26,3,'#F8C8D8'); curve(d,[26,24],[29,26],[27,29],'#E07898'); d.line(25,22,31,30,'#C8A060'); d.px(31,30,'#F8D040');
},
'mymelody:s2': d=>{ // melody key — magic key with heart head
  const G1='#F8D050',G2='#D8A030',G3='#FFF0A0',P='#F888B0',P2='#E05888',P3='#FFD0E0';
  // shaft (vertical)
  d.rect(14,13,4,17,G1); d.vline(14,13,29,G3); d.vline(17,13,29,G2);
  // teeth (right side), shaped a bit like a note flag
  d.rect(18,21,4,3,G1); d.hline(18,21,21,G3); d.rect(18,26,6,4,G1); d.hline(18,23,26,G3); d.rect(21,24,2,2,G1);
  d.rect(13,29,6,2,G2);
  // collar + ribbon
  d.rect(12,13,8,3,G2); d.hline(12,19,13,G1);
  d.stamp(9,15,['rr....rr','rrr..rrr','.rr..rr.'],{r:'#F05888'}); d.px(10,15,'#F8A0C0'); d.px(16,15,'#F8A0C0');
  // heart head with gold rim
  const H=['..ggg...ggg..','.gpppg.gpppg.','gpqqppgppppPg','gpqpppppppppg','gppppppppppPg','gpppppppppPPg','.gpppppppPPg.','..gppppppPg..','...gppppPg...','....gpppg....','.....ggg.....'];
  d.stamp(9,2,H,{g:G1,p:P,q:P3,P:P2});
  d.stamp(13,4,['...ww','...w.','...w.','.www.','.ww..'],{w:'#FFFFFF'});
  // little wings
  d.stamp(3,4,['..www','.wwww','wwww.','.ww..'],{w:'#FFFFFF'}); d.stamp(23,4,['www..','wwww.','.wwww','..ww.'],{w:'#FFFFFF'});
  d.hline(4,6,6,'#D8E0F0'); d.hline(25,27,6,'#D8E0F0');
  d.outline('#7A3A2A');
  bigtw(d,27,14,'#F8E070','#FFFFFF'); twinkle(d,5,24,'#F8D040','#FFFFFF'); twinkle(d,26,1,'#F888B0','#FFFFFF'); d.px(4,15,'#F888B0');
},
'mymelody:c0': d=>{ // mariland forest (pastel)
  d.grad(0,0,64,22,['#D8F0E8','#E4F4E0','#F0F8E0']);
  // soft background trees
  for(const [x,r,c] of [[4,9,'#A8D8B0'],[20,8,'#B8E0B8'],[34,10,'#A8D8B0'],[50,9,'#B8E0B8'],[62,8,'#A8D8B0']]) d.circ(x,10,r,c);
  for(const x of [4,20,34,50,62]) d.rect(x-1,16,3,8,'#C8B098');
  // ground
  d.rect(0,24,64,16,'#B8E098'); d.hline(0,63,24,'#98CC80'); d.dither(0,34,64,6,'#B8E098','#A8D888');
  // pink path curling to the mushroom house
  for(let y=24;y<40;y++){const t=(y-24)/16, cx=46-28*t, w=1.5+t*5; d.hline(Math.round(cx-w),Math.round(cx+w),y,'#F8E0D0')}
  // big tree with squirrel friends (center)
  d.rect(26,6,6,22,'#A87850'); d.vline(26,6,27,'#C8946A'); d.vline(31,6,27,'#8A5E3A'); d.circ(29,14,1.5,'#6A4428');
  d.circ(29,4,9,'#78C888'); d.circ(24,6,5,'#88D898'); d.circ(34,3,6,'#68B878'); for(const [x,y] of [[26,1],[32,6],[22,7],[36,2]]) d.circ(x,y,1.2,'#F8A8C8');
  const sq=(x,y,f)=>d.stamp(x,y,(f?['tt..','ttbe','.bbb','.bb.']:['..tt','ebtt','bbb.','.bb.']),{t:'#D88848',b:'#C87838',e:'#2A1A10'});
  sq(32,15,0); sq(23,20,1); d.px(31,19,'#8A5A30'); d.px(30,18,'#C8A060'); // acorn
  // mushroom cottage on the right
  d.rect(49,17,10,9,'#FFF4E8'); d.rect(52,20,3,6,'#C8946A'); d.px(54,23,'#F8D040'); d.rect(56,19,2,2,'#88C8F0');
  d.ell(54,15,9,4,'#F0607A'); d.rect(45,15,19,2,'#F0607A'); d.hline(45,63,17,'#C84060');
  for(const [x,y] of [[49,13],[55,12],[60,15],[52,16]]) d.circ(x,y,1,'#FFFFFF');
  // flowers + tiny signpost (watch your step)
  for(const [x,y,c] of [[38,30,'#F8A8C8'],[42,35,'#FFFFFF'],[58,31,'#F8D040'],[62,36,'#F8A8C8'],[30,36,'#F8D040'],[24,31,'#FFFFFF']]){d.stamp(x-1,y-1,['.c.','cyc','.c.'],{c,y:'#F8D040'}); d.px(x,y+2,'#58A058')}
  d.vline(40,22,28,'#A87850'); d.rect(37,20,7,3,'#FFF4E8'); d.frame(37,20,7,3,'#C8946A'); d.px(40,21,'#F0607A');
  d.stamp(43,33,['.s.','sss','.s.'].slice(0,0),{});
  // a dropped acorn by the path & pebble
  d.stamp(33,36,['.c.','aaa','.a.'],{c:'#8A5A30',a:'#C8A060'}); d.ell(48,37,2,1,'#D8D0C8');
},
'mymelody:c1': d=>{ // tulip fields with a hint of Kuromi
  d.grad(0,0,64,14,['#88CCF4','#A0D8F6','#B8E2F8']);
  cloud(d,10,4,4,'#FFFFFF'); cloud(d,34,3,5,'#FFFFFF');
  // windmill
  d.poly([[50,14],[52,4],[56,4],[58,14]],'#E8D8C0'); d.rect(52,4,4,2,'#A86448'); d.poly([[51,4],[54,1],[57,4]],'#A86448'); d.rect(53,10,2,4,'#7A5A48');
  const cx=54,cy=4; d.line(cx-6,cy-5,cx+6,cy+5,'#8A6A5A'); d.line(cx+6,cy-5,cx-6,cy+5,'#8A6A5A');
  for(const [x,y] of [[cx-5,cy-4],[cx+5,cy+4]]) d.rect(x-1,y-1,2,2,'#FFFFFF'); for(const [x,y] of [[cx+5,cy-4],[cx-5,cy+4]]) d.rect(x-1,y-1,2,2,'#FFFFFF');
  d.circ(cx,cy,1,'#5A4A3A');
  // distant field stripes
  d.rect(0,14,64,26,'#78B858'); const cols=['#F05A6A','#F8D048','#F8A0C8','#FFFFFF','#B888E8'];
  for(let r=0;r<5;r++){const y0=14+r*2+r*r*.4; d.rect(0,Math.round(y0),64,1+r*.5|0,cols[r]); }
  // near rows of tulips (perspective stripes on the right)
  for(let row=0;row<4;row++){const y=24+row*4, c=cols[row%5];
    for(let x=24+(row%2)*2;x<64;x+=4){d.vline(x+1,y+1,y+3,'#3A8A3A'); d.px(x,y+2,'#58A848'); d.stamp(x,y-1,['c.c','ccc','ccc'],{c}); d.px(x+1,y-1,'#FFFFFF')}}
  // Kuromi hint: black jester hood ears with pink skull peeking between tulips
  d.stamp(36,17,['k.....k','kk...kk','kkkkkkk','kkwwwkk','kkpwpkk','.kwwwk.'],{k:'#2A2230',w:'#FFFFFF',p:'#F888B0'});
  d.px(37,16,'#2A2230'); d.px(41,16,'#2A2230');
  heart(d,44,15,'#F888B0');
  // path for the pet
  d.rect(0,30,24,10,'#98C878'); d.dither(0,34,24,6,'#98C878','#88B868'); for(let x=2;x<24;x+=5) d.px(x,32,'#F8D048');
},
'mymelody:c2': d=>{ // dream land (pastel night)
  d.grad(0,0,64,30,['#3A3478','#4A3E8A','#5E4A9A','#7A5AAA','#9A6AB8']);
  stars(d,26,0,0,63,22,['#FFFFFF','#FFE8F8','#F8E8A0']);
  // smiling crescent moon
  d.circ(12,8,6,'#FFF0B0'); d.circ(15,6,5,'#3A3478'); d.px(9,9,'#5A4A3A'); d.hline(8,10,11,'#F8A0B8');
  // rainbow arc
  for(const [r,c] of [[16,'#F8A0B8'],[15,'#F8D8A0'],[14,'#F8F0B0'],[13,'#B8F0C8'],[12,'#A8D8F8'],[11,'#C8B8F8']]) for(let a=0;a<=60;a++){const t=Math.PI+a*Math.PI/60; d.px(Math.round(46+Math.cos(t)*r),Math.round(26+Math.sin(t)*r*.8),c)}
  // castle on a cloud
  d.rect(42,12,10,10,'#FFE8F4'); d.rect(40,9,4,13,'#F8D0E8'); d.rect(50,9,4,13,'#F8D0E8');
  for(const x of [40,50]) d.poly([[x-1,9],[x+2,3],[x+5,9]],'#F888B0'); d.poly([[42,12],[47,5],[52,12]],'#E86898');
  d.px(41,4,'#F8D040'); d.px(51,4,'#F8D040'); d.rect(46,16,2,6,'#B888D8'); d.px(44,14,'#F8D040'); d.px(49,14,'#F8D040');
  for(const [x,y,w] of [[46,23,12],[34,26,8],[58,25,7]]) {d.ell(x,y,w,3,'#FFFFFF'); d.hline(x-w+2,x+w-2,y+3,'#E0D0F0')}
  // floating sheep (counting sheep)
  const sheep=(x,y)=>d.stamp(x,y,['.wwww.','wwwwwwk','wwwwwkk','.k..k..'],{w:'#FFFFFF',k:'#5A4A6A'}); sheep(26,13); sheep(58,15);
  // soft dreamy ground
  d.rect(0,30,64,10,'#B888D0'); d.hline(0,63,30,'#D8B0E8'); for(let x=0;x<64;x+=6) d.ell(x+3,31,3,1,'#D8B0E8'); d.dither(0,36,64,4,'#B888D0','#A878C0');
  // sparkly dream bubbles
  d.ring(30,22,2,'#F8D8F8'); d.px(29,21,'#FFFFFF'); d.ring(36,8,1.5,'#F8D8F8');
  bigtw(d,22,4,'#FFFFFF','#FFFFFF'); twinkle(d,60,4,'#F8E8A0','#FFFFFF'); heart(d,28,32,'#F888B0'); heart(d,56,33,'#FFFFFF');
},
// =================== TOBEY ===================
'tobey:s0': d=>{ // Joe's pizza box, open
  const B1='#F0E0C0',B2='#D8C098',B3='#B89C70',R='#D83A32';
  // lid (open, leaning back)
  d.poly([[4,2],[28,2],[29,13],[3,13]],B1); d.hline(4,27,2,'#FFF4DC'); d.poly([[3,13],[29,13],[29,14],[3,14]],B3);
  // lid logo: red circle with pizza slice + checkered band
  d.circ(16,7,4.5,R); d.circ(16,7,3.5,'#FFFFFF'); d.poly([[13,5],[19,5],[16,10]],'#F8C040'); d.px(15,6,R); d.px(17,6,R); d.px(16,8,R); d.hline(13,19,5,'#C88A3A');
  for(let x=5;x<28;x+=2){d.px(x,11,R); d.px(x+1,12,R)}
  d.stamp(5,4,['j.','j.','jj'].map(r=>r),{j:R}); // little 'J'
  // box base
  d.poly([[2,15],[30,15],[31,27],[1,27]],B2); d.rect(1,27,31,3,B3); d.hline(1,31,27,'#9A7E54');
  // pizza
  d.ell(16,21,13,5,'#D89048'); d.ell(16,21,12,4,'#F8D060'); d.ell(16,21,9,3,'#FFE488');
  // missing slice
  d.poly([[16,21],[27,19],[28,23]],B2);
  d.line(16,21,27,19,'#C88A3A'); d.line(16,21,28,23,'#C88A3A');
  // pepperoni + basil
  for(const [x,y] of [[8,20],[12,23],[18,18],[21,23],[9,23],[14,19]]){d.circ(x,y,1.2,'#C83A2A'); d.px(x-1,y-1,'#E86A50')}
  d.px(11,19,'#4A9A40'); d.px(20,21,'#4A9A40'); d.px(6,22,'#4A9A40');
  // receipt tucked (late!)
  d.rect(25,14,5,6,'#FFFFFF'); d.hline(26,28,16,'#A8A8B0'); d.hline(26,29,18,'#E04040');
  d.outline('#3A2A1A');
  // steam
  d.stamp(9,0,['s','.','s'].slice(0,0),{});
},
'tobey:s1': d=>{ // Daily Bugle press pass on a lanyard
  // lanyard
  d.line(10,0,14,6,'#2A4A9A'); d.line(22,0,18,6,'#2A4A9A'); d.line(11,0,15,6,'#3A5AB8'); d.line(21,0,17,6,'#3A5AB8');
  d.rect(14,5,4,3,'#C8C8D0'); d.px(15,6,'#88889A');
  // card
  d.rect(5,8,22,22,'#F4F4F0'); d.vline(26,8,29,'#D0D0D8'); d.hline(5,26,29,'#D0D0D8');
  // header bar
  d.rect(5,8,22,5,'#202020'); d.rect(7,9,8,3,'#FFFFFF'); d.stamp(8,9,['dd.bb','d.db.','dd.bb'].map(r=>r.replace(/b/g,'b')),{d:'#202020',b:'#202020'});
  d.rect(17,10,8,1,'#D83A32');
  // photo (messy brown hair, glasses)
  d.rect(7,15,8,9,'#B8D0E8'); d.ell(11,19,3,3,'#F0C8A0'); d.ell(11,16,3.5,1.5,'#6A4428'); d.px(9,18,'#6A4428');
  d.px(10,19,'#2A2A2A'); d.px(12,19,'#2A2A2A'); d.rect(8,22,7,2,'#4A6AA8');
  // text lines + PRESS stripe
  d.hline(17,24,16,'#8A8A98'); d.hline(17,22,18,'#8A8A98'); d.hline(17,24,20,'#8A8A98');
  d.rect(5,25,22,3,'#D83A32'); for(let x=8;x<24;x+=3) d.hline(x,x+1,26,'#FFFFFF');
  // little camera icon
  d.stamp(17,21,['.kk..','kkkkk','kwkkk','kkkkk'],{k:'#3A3A44',w:'#88C8F8'});
  // half-price stamp
  d.ring(23,21,2.6,'#E04848'); d.stamp(22,20,['5.','..','.0'].map(r=>r.replace('5','x').replace('0','x')),{x:'#E04848'});
  d.outline('#1A1A22');
  twinkle(d,2,10,'#F8E070','#FFFFFF'); d.px(29,24,'#F8E070');
},
'tobey:s2': d=>{ // black suit scrap with goo tendrils
  const K1='#1E1E2A',K2='#2E2E40',K3='#5A5A78',W='#F4F4FF';
  // torn fabric shape
  d.poly([[5,6],[12,3],[18,5],[25,3],[28,10],[26,17],[29,23],[22,28],[14,26],[7,29],[4,21],[6,14]],K2);
  d.poly([[6,8],[12,5],[18,7],[24,5],[26,11],[24,17],[26,22],[21,25],[14,23],[8,26],[6,20],[7,14]],K1);
  // web lines (subtle) across fabric
  for(const [x,y] of [[16,15]]) for(let a=0;a<6;a++){const t=a*Math.PI/3+.3; d.line(x,y,x+Math.cos(t)*12,y+Math.sin(t)*12,'#34344A')}
  d.ring(16,15,5,'#34344A'); d.ring(16,15,9,'#34344A');
  // white spider emblem
  d.stamp(11,9,['w........w','.w......w.','..w.ww.w..','...wwww...','www.ww.www','...wwww...','..wwwwww..','.w.wwww.w.','w..wwww..w','....ww....','...w..w...','..w....w..'],{w:W});
  // glossy highlights
  d.line(7,10,10,6,K3); d.px(24,7,K3); d.line(22,24,25,21,K3);
  // goo tendrils
  thick(d,[26,17],[31,18],[30,25],.8,K1); thick(d,[7,27],[3,30],[1,28],.8,K1); thick(d,[22,3],[24,0],[28,1],.8,K1);
  d.circ(30,26,1.5,K1); d.circ(1,27,1.2,K1);
  d.outline('#000000');
  d.px(30,25,K3); d.px(29,18,K3);
},
'tobey:c0': d=>{ // Aunt May's living room
  // floral wallpaper
  d.rect(0,0,64,26,'#E8D8B8'); for(let y=2;y<24;y+=6) for(let x=(y%12?3:0);x<64;x+=6){d.stamp(x,y,['.r.','rgr','.r.'],{r:'#D8A0A0',g:'#A8B888'})}
  d.rect(0,22,64,4,'#B88A60'); d.hline(0,63,22,'#D8A878'); // wainscot rail
  // floor + rug
  d.rect(0,26,64,14,'#8A5A3A'); for(const y of [29,33,37]) d.hline(0,63,y,'#7A4A30');
  d.ell(44,34,17,4,'#B84848'); d.ell(44,34,15,3,'#D86A5A'); d.ell(44,34,10,2,'#E8A080');
  // window (Queens night view) on the right wall
  d.rect(40,3,16,13,'#F4EEE0'); d.rect(41,4,14,11,'#2A3A6A'); for(const [x,h] of [[42,6],[45,8],[48,5],[51,9]]) d.rect(x,15-h,3,h,'#1A2448'); for(const [x,y] of [[43,11],[46,9],[52,8],[49,12],[52,12]]) d.px(x,y,'#F8E070');
  d.vline(48,4,14,'#F4EEE0'); d.hline(41,54,9,'#F4EEE0'); d.circ(52,6,1,'#FFF4C8');
  d.rect(38,2,3,16,'#C85A5A'); d.rect(55,2,3,16,'#C85A5A'); d.hline(38,57,2,'#8A3A3A');
  // armchair
  d.rect(48,20,13,10,'#6A8A5A'); d.rect(46,22,3,9,'#5A7A4A'); d.rect(60,22,3,9,'#5A7A4A'); d.rect(49,24,11,3,'#7A9A6A'); d.hline(48,60,20,'#8AAA78');
  d.ell(54,23,3,1.5,'#F4E8D8'); // doily
  d.vline(47,31,32,'#3A2A1A'); d.vline(61,31,32,'#3A2A1A');
  // side table, lamp, tea
  d.rect(30,24,8,2,'#7A4A2A'); d.vline(31,26,31,'#5A3420'); d.vline(36,26,31,'#5A3420');
  d.vline(33,16,23,'#C8A060'); d.poly([[30,16],[36,16],[35,12],[31,12]],'#F8E8B0'); d.hline(30,36,16,'#E8C880');
  d.stamp(35,22,['ww','ww'],{w:'#FFFFFF'}); d.px(36,21,'#C8A0A0');
  // envelopes (rent)
  d.rect(30,22,4,2,'#F4F0E0'); d.line(30,22,31,23,'#C8C0B0');
  // framed photo of Uncle Ben + wall clock
  d.rect(22,6,8,8,'#A87848'); d.rect(23,7,6,6,'#D8C8A8'); d.ell(26,10,1.5,2,'#8A7A68'); d.circ(26,8,1,'#A89888');
  d.circ(14,5,3,'#F4F0E0'); d.ring(14,5,3,'#8A5A3A'); d.line(14,5,14,3,'#2A2A2A'); d.line(14,5,16,5,'#2A2A2A');
  // wheatcakes plate? small heart on frame
  heart(d,24,15,'#D86A6A'); d.clear(0,0); d.px(0,0,'#E8D8B8');
},
'tobey:c1': d=>{ // elevated train stopped by webs
  d.grad(0,0,64,22,['#F8B878','#F8C890','#F8D8A8','#F0E0C0']);
  // skyline
  for(const [x,w,h,c] of [[0,8,14,'#8A7A9A'],[8,6,18,'#7A6A8A'],[14,9,12,'#9A8AAA'],[30,7,20,'#7A6A8A'],[37,8,15,'#8A7A9A'],[52,6,19,'#7A6A8A'],[58,6,13,'#9A8AAA']]){d.rect(x,22-h,w,h,c); for(let y=24-h;y<20;y+=3) for(let i=x+1;i<x+w-1;i+=2) d.px(i,y,'#F8D890')}
  d.poly([[31,2],[33,0],[35,2]],'#7A6A8A');
  // elevated track
  d.rect(0,22,64,2,'#5A5068'); d.hline(0,63,22,'#7A7088'); for(let x=2;x<64;x+=10){d.rect(x,24,2,9,'#4A4058'); d.line(x,24,x+3,27,'#4A4058'); d.line(x+1,24,x-2,27,'#4A4058')}
  // train (heading right, front at x~58)
  d.rect(24,12,34,10,'#C8C8D0'); d.hline(24,57,12,'#E8E8F0'); d.rect(24,19,34,3,'#9A9AA8'); d.hline(24,57,18,'#D83A32');
  for(let x=26;x<50;x+=6) d.rect(x,14,4,3,'#2A3A5A'); for(let x=27;x<50;x+=6) d.px(x,14,'#88A8C8');
  d.poly([[57,12],[61,14],[61,22],[57,22]],'#B8B8C0'); d.rect(58,14,2,3,'#2A3A5A'); d.px(60,19,'#F8E070');
  d.vline(38,13,21,'#9A9AA8'); d.vline(50,13,21,'#9A9AA8');
  // webs strung from the front to buildings
  d.line(61,15,63,4,'#FFFFFF'); d.line(61,17,63,10,'#FFFFFF'); d.line(60,16,55,2,'#FFFFFF'); d.line(61,18,63,23,'#F4F4FF');
  d.line(62,8,63,8,'#FFFFFF'); d.line(57,6,62,7,'#E8E8F8');
  // street below
  d.rect(0,33,64,7,'#6A6070'); d.hline(0,63,33,'#8A8090'); for(let x=3;x<64;x+=9) d.hline(x,x+3,36,'#F8E070');
  d.rect(0,24,64,9,'#B89098'); for(const [x,w] of [[0,8],[8,6],[30,7],[37,8],[52,6]]) {d.rect(x,24,w,9,'#8A7088'); for(let y=25;y<32;y+=3) for(let i=x+1;i<x+w-1;i+=2) d.px(i,y,'#F8D890')}
  for(let x=2;x<64;x+=10){d.rect(x,24,2,9,'#3A3048'); d.line(x,24,x+3,27,'#3A3048'); d.line(x+1,24,x-2,27,'#3A3048')} d.rect(0,22,64,2,'#4A4058'); d.hline(0,63,22,'#7A7088');
  // ground for the pet (platform)
  d.rect(0,30,24,3,'#7A7088'); d.hline(0,23,30,'#9A90A8');
  // dropped red mask hint
  d.stamp(40,36,['.rrr.','rwrwr','rrrrr'],{r:'#D83A32',w:'#FFFFFF'});
  d.rect(24,12,34,10,'#C8C8D0'); d.hline(24,57,12,'#E8E8F0'); d.rect(24,19,34,3,'#9A9AA8'); d.hline(24,57,18,'#D83A32'); for(let x=26;x<50;x+=6){d.rect(x,14,4,3,'#2A3A5A'); d.px(x+1,14,'#88A8C8')} d.vline(38,13,21,'#9A9AA8'); d.vline(50,13,21,'#9A9AA8');
},
'tobey:c2': d=>{ // across the multiverse
  d.grad(0,0,64,40,['#0E0A2A','#1A0E3A','#260E48','#1A0E3A']);
  stars(d,30,0,0,63,30,['#FFFFFF','#88E8FF','#F888D8']);
  // swirling portal on the right
  for(let r=13;r>0;r-=2){const c=['#F8E070','#F888D8','#88E8FF','#A878F8','#58F0B8','#F8E070','#FFFFFF'][(13-r)/2]; d.ell(46,15,r,r*.8,c)}
  d.ell(46,15,2,1.6,'#0E0A2A');
  // shattered dimension shards
  for(const [pts,c] of [[[[6,3],[14,1],[12,8]],'#F888D8'],[[[20,4],[26,2],[24,9],[19,8]],'#88E8FF'],[[[58,30],[63,26],[63,33]],'#58F0B8'],[[[30,2],[34,5],[29,7]],'#F8E070']]) d.poly(pts,c);
  // floating city chunk (other universe) upside down top-left
  d.poly([[2,10],[18,10],[14,16],[6,16]],'#5A4A7A'); for(const [x,h] of [[4,4],[8,6],[12,3],[15,5]]) d.rect(x,10-h,3,h,'#7A6AA0'); for(const x of [5,9,13,16]) d.px(x,8,'#F8E070');
  // floating rock platform center-right with cushion (back pain!)
  d.poly([[30,30],[58,30],[52,36],[36,36]],'#4A3A6A'); d.hline(30,58,30,'#7A6AA0'); d.poly([[36,36],[52,36],[46,39],[42,39]],'#3A2A5A');
  d.rect(45,27,7,3,'#58B8E8'); d.hline(45,51,27,'#88D8F8'); d.px(48,28,'#FFFFFF'); // lumbar pillow
  d.stamp(38,26,['.rr.','rbbr','.rr.'].slice(0,0),{});
  // three tiny spider symbols in different colours (three generations)
  const sp=(x,y,c)=>d.stamp(x,y,['c...c','.ccc.','ccccc','.ccc.','c...c'],{c});
  sp(33,22,'#E83A3A'); sp(40,20,'#3A6AF8'); sp(54,22,'#F8F8F8');
  // ground for the pet: glowing rift floor
  d.rect(0,36,30,4,'#3A2A5A'); d.hline(0,29,36,'#6A5A9A'); d.poly([[0,33],[26,33],[30,36],[0,36]],'#2E2050'); d.hline(0,25,33,'#5A4A8A');
  d.dither(0,38,64,2,'#3A2A5A','#2E2050');
},
// =================== GROOT ===================
'groot:s0': d=>{ // baby groot's pot
  const T1='#E08048',T2='#C0602E',T3='#F8A870',T4='#9A4A22';
  // pot body (tapered) + rim
  d.poly([[6,16],[26,16],[23,30],[9,30]],T1); d.poly([[20,16],[26,16],[23,30],[19,30]],T2); d.poly([[6,16],[10,16],[11,30],[9,30]],T3);
  d.rect(4,13,24,4,T1); d.hline(4,27,13,T3); d.hline(4,27,16,T4); d.rect(23,13,5,4,T2);
  // painted band: little leaves
  for(let x=9;x<24;x+=4) d.stamp(x,21,['.g.','ggg','.b.'],{g:'#6AA848',b:'#4A7A30'});
  d.hline(8,24,25,T4);
  // soil
  d.ell(16,13,10,1.4,'#5A3A22'); d.px(12,13,'#7A5232'); d.px(19,12,'#7A5232');
  // twiggy sprout with tiny face-like knots
  d.rect(15,4,3,9,'#8A6038'); d.vline(15,4,12,'#A87A4A'); d.vline(17,4,12,'#6A4428');
  d.line(15,7,10,3,'#8A6038'); d.line(17,6,22,2,'#8A6038'); d.line(16,8,20,7,'#8A6038');
  const lf=(x,y,a)=>rell(d,x,y,2.6,1.4,a,(u,v)=>v>.3?'#4A8A38':'#7AC058');
  lf(8,2,-.4); lf(23,1,.3); lf(21,6,.2); lf(13,5,.8); lf(19,3,-1);
  d.px(15,9,'#2A1A10'); d.px(17,9,'#2A1A10'); d.px(16,11,'#4A2A18');
  // name tag on string
  d.line(25,17,28,20,'#E8E0C8'); d.rect(26,20,5,4,'#F8F0D8'); d.px(28,21,'#6AA848'); d.px(27,22,'#8A6038');
  d.outline('#3A2010');
  d.stamp(1,8,['.n','nn','n.'].slice(0,0),{}); twinkle(d,3,6,'#F8E070','#FFFFFF'); d.px(29,10,'#F8E070');
},
'groot:s1': d=>{ // Awesome Mix cassette
  const C1='#3A3A44',C2='#2A2A32',C3='#5A5A68';
  d.rect(2,7,28,19,C1); d.hline(2,29,7,C3); d.vline(2,7,25,C3); d.vline(29,7,25,C2); d.hline(2,29,25,C2);
  // label (orange/yellow retro stripes)
  d.rect(4,9,24,11,'#F8E8C0'); d.rect(4,9,24,3,'#F09030'); d.hline(4,27,12,'#F8C840'); d.hline(4,27,13,'#E85A3A');
  d.hline(6,18,10,'#FFFFFF'); d.stamp(22,9,['.1','11','.1'],{1:'#FFFFFF'});
  // tape window with reels
  d.rect(9,14,14,5,'#1A1A20'); d.rect(10,15,12,3,'#6A4A3A');
  for(const x of [11,20]){d.circ(x,16,2.2,'#F4F4F8'); d.circ(x,16,1,'#1A1A20'); d.px(x,14,'#C8C8D0')}
  d.rect(13,15,6,3,'#4A2E22');
  // bottom trapezoid with screw holes
  d.poly([[8,21],[24,21],[26,25],[6,25]],C3); d.px(10,23,'#1A1A20'); d.px(15,23,'#1A1A20'); d.px(17,23,'#1A1A20'); d.px(22,23,'#1A1A20');
  for(const [x,y] of [[4,8],[27,8],[4,24],[27,24]]) d.px(x,y,'#9A9AA8');
  // handwritten line on label
  curve(d,[6,16],[7,14],[8,17],'#3A5AB8');
  d.outline('#101014');
  // dancing music notes
  d.stamp(2,0,['..nn','..n.','nnn.','nn..'],{n:'#F09030'}); d.stamp(25,0,['.nnn','.n.n','nn.n','n.nn'].map(r=>r),{n:'#E85A3A'});
  d.stamp(14,27,['.nn','.n.','nn.'],{n:'#6AA848'});
},
'groot:s2': d=>{ // xandar sprout in a glowing pod
  // glass pod
  d.ell(16,18,11,12,'#C8E8FF'); d.ell(16,18,10,11,'#E0F4FF'); d.dither(8,10,16,14,'#E0F4FF','#D0ECFF');
  d.ell(16,20,7,7,'#F4FCFF');
  // base
  d.rect(6,27,20,4,'#6A5AA8'); d.hline(6,25,27,'#9A8AD8'); d.rect(8,30,16,1,'#4A3A88'); for(const x of [9,14,19,23]) d.px(x,29,'#88F8E8');
  // cosmic soil
  d.ell(16,26,8,2,'#3A2A68'); d.px(13,25,'#F8E070'); d.px(19,26,'#88F8E8');
  // sprout
  d.vline(16,15,25,'#8A6038'); d.vline(17,17,25,'#6A4428'); curve(d,[16,18],[13,16],[11,13],'#8A6038');
  const lf=(x,y,a,s=1)=>rell(d,x,y,3*s,1.6*s,a,(u,v)=>v>.3?'#3AA858':(v<-.3?'#B8F8A8':'#68D878'));
  lf(12,11,-.7); lf(20,13,.5); lf(17,9,-1.4,.9);
  // glow sparkles
  bigtw(d,9,18,'#F8E070','#FFFFFF'); twinkle(d,23,20,'#88F8E8','#FFFFFF'); d.px(12,22,'#F8A8E8'); d.px(21,8,'#FFFFFF');
  // glass shine
  d.line(8,13,10,9,'#FFFFFF'); d.px(7,15,'#FFFFFF');
  d.ell(16,6,3,1,'#9A8AD8'); d.rect(13,5,7,2,'#6A5AA8'); d.hline(13,19,5,'#9A8AD8');
  d.outline('#2A2050');
  twinkle(d,2,4,'#F8E070','#FFFFFF'); twinkle(d,29,8,'#88F8E8','#FFFFFF'); d.px(30,24,'#F8E070'); d.px(1,22,'#F8A8E8');
},
'groot:c0': d=>{ // neighborhood flowerbed with a sunflower friend
  d.grad(0,0,64,24,['#78C8F0','#90D4F4','#A8DEF6','#C0E8F8']);
  cloud(d,12,5,4,'#FFFFFF'); cloud(d,30,8,3,'#FFFFFF');
  // picket fence
  for(let x=0;x<64;x+=4){d.rect(x,14,3,10,'#FFFFFF'); d.px(x+1,13,'#FFFFFF'); d.vline(x+2,14,23,'#D8E0E8')} d.hline(0,63,17,'#E8E8F0'); d.hline(0,63,21,'#E8E8F0');
  // lawn
  d.rect(0,24,64,16,'#8CCC68'); d.dither(0,34,64,6,'#8CCC68','#7CBC58'); for(let x=1;x<64;x+=3) d.px(x,24,'#6AAA48');
  // brick flowerbed (right)
  d.rect(28,28,36,6,'#C86A4A'); for(let y=28;y<34;y+=2){d.hline(28,63,y,'#A85438'); for(let x=28+(y%4?0:3);x<64;x+=6) d.px(x,y+1,'#A85438')} d.hline(28,63,28,'#E08A68');
  d.rect(29,25,34,3,'#6A4428'); d.hline(29,62,25,'#8A5A38');
  // tulips & small flowers
  for(const [x,c] of [[31,'#F05A6A'],[34,'#F8D048'],[37,'#F8A0C8'],[56,'#F05A6A'],[59,'#B888E8'],[62,'#F8D048']]){d.vline(x,20,25,'#4A8A38'); d.stamp(x-1,18,['c.c','ccc','.c.'],{c}); d.px(x+1,22,'#68B050')}
  // the big sunflower friend with a smile
  d.rect(46,12,2,14,'#4A8A38'); d.vline(47,12,25,'#3A7028'); rell(d,43,20,3,1.4,-.5,(u,v)=>'#5AA048'); rell(d,51,17,3,1.4,.5,(u,v)=>'#5AA048');
  for(let a=0;a<12;a++){const t=a*Math.PI/6; rell(d,47+Math.cos(t)*6,7+Math.sin(t)*6,3,1.5,t,(u,v)=>v>.25?'#E89820':'#FFD040')}
  d.circ(47,7,4,'#7A4A22'); d.dither(44,4,7,7,'#7A4A22','#6A3A18'); d.circ(47,7,4,null);
  d.px(45,6,'#2A1408'); d.px(49,6,'#2A1408'); d.hline(45,49,9,'#2A1408'); d.px(44,8,'#2A1408'); d.px(50,8,'#2A1408'); d.px(44,8,'#F07A6A');
  // watering can
  d.rect(36,30,7,5,'#58A8D8'); d.hline(36,42,30,'#88C8F0'); d.line(42,31,46,28,'#58A8D8'); d.ring(39,29,2,'#4A88B8'); d.px(47,27,'#58A8D8');
  // butterfly
  d.stamp(56,6,['p.p','.k.','p.p'],{p:'#F8A0C8',k:'#2A2A2A'});
},
'groot:c1': d=>{ // milano cockpit, forbidden red button pressed
  // hull interior
  d.rect(0,0,64,40,'#3A3448');
  // big canopy window showing space
  d.poly([[8,2],[56,2],[62,18],[2,18]],'#1A1A40'); stars(d,18,8,3,56,16,['#FFFFFF','#F8C890','#A8C8FF']);
  d.circ(48,9,3,'#E88850'); d.px(47,8,'#F8B880'); d.ell(20,10,6,2,'#6A3A7A');
  d.line(8,2,2,18,'#5A5470'); d.line(56,2,62,18,'#5A5470'); d.hline(8,56,2,'#5A5470'); d.vline(32,2,18,'#5A5470');
  // red alarm light washes
  d.rect(0,0,64,1,'#C83A3A'); d.circ(4,3,2,'#F83A3A'); d.circ(59,3,2,'#F83A3A'); d.px(4,3,'#FFC8C8'); d.px(59,3,'#FFC8C8');
  // control console
  d.poly([[0,19],[64,19],[64,27],[0,27]],'#5A5470'); d.hline(0,63,19,'#7A7490'); d.rect(24,20,30,7,'#4A4460');
  for(let x=26;x<52;x+=3){d.px(x,21,['#58E8F8','#F8D040','#68E878','#F86A8A'][x%4]); d.px(x+1,23,['#F8D040','#58E8F8','#F86A8A','#68E878'][x%4])}
  d.rect(36,21,6,4,'#1A2A3A'); d.hline(37,40,22,'#58E878'); d.px(39,23,'#58E878');
  // THE red button with hazard stripes + "pressed" burst
  d.rect(44,22,9,5,'#F8D040'); for(let i=0;i<9;i+=2) d.px(44+i,22,'#2A2A2A'), d.px(45+i,26,'#2A2A2A');
  d.ell(48,23,3,2,'#A82020'); d.ell(48,23,2,1,'#F83A3A'); d.px(47,22,'#FFC8C8');
  for(const [x,y] of [[48,18],[44,19],[52,19],[55,22],[41,22]]) d.px(x,y,'#F8F870');
  // little twig poking the button (a groot-y finger)
  d.line(56,28,51,24,'#8A6038'); d.px(57,29,'#6A4428'); d.px(52,26,'#7AC058');
  // floor and seats
  d.rect(0,27,64,13,'#2A2638'); for(let x=0;x<64;x+=8) d.vline(x,28,39,'#3A3448'); d.hline(0,63,33,'#3A3448');
  d.rect(30,28,10,8,'#C86A3A'); d.rect(31,26,8,3,'#D87A4A'); d.hline(30,39,31,'#A85428'); d.rect(33,36,4,4,'#4A4460');
  // cassette player on dashboard
  d.rect(56,23,6,3,'#2A2A32'); d.rect(57,24,4,1,'#F09030');
},
'groot:c2': d=>{ // knowhere — the celestial head colony
  d.grad(0,0,64,40,['#120A1E','#1E0E2A','#2E1434','#3E1C38']);
  d.dither(0,22,64,8,'#4A2238','#3E1C38'); d.ell(50,6,12,4,'#3A1A3A');
  stars(d,30,0,0,63,30,['#FFFFFF','#F8D8A0','#A8C8FF']);
  // giant celestial skull (right of center)
  const S1='#C89A60',S2='#A87840',S3='#E8C088',S4='#6A4A28';
  d.ell(44,16,15,13,S2); d.ell(43,15,14,12,S1); d.ell(40,9,8,4,S3);
  d.ell(37,16,4,3,S4); d.ell(51,16,4,3,S4); d.px(37,16,'#F8C040'); d.px(51,16,'#F8C040'); // eye sockets with glow
  d.poly([[44,19],[42,23],[46,23]],S4);
  d.rect(36,25,16,4,S2); for(let x=37;x<52;x+=3) d.rect(x,25,2,3,S3);
  // cracks and colony lights
  d.line(30,10,34,14,S4); d.line(56,8,53,13,S4);
  for(const [x,y,c] of [[33,20,'#F8E070'],[35,22,'#88E8FF'],[54,21,'#F8E070'],[56,18,'#F8A0C8'],[46,10,'#F8E070'],[40,6,'#88E8FF'],[50,26,'#F8E070'],[39,27,'#F8A0C8']]) d.px(x,y,c);
  // small ships
  d.stamp(18,6,['.y.','yyy'],{y:'#F8D040'}); d.line(14,7,17,7,'#F88040'); d.stamp(58,32,['.c.','ccc'],{c:'#88E8FF'});
  // metal dock platform (foreground)
  d.rect(0,31,64,9,'#4A4458'); d.hline(0,63,31,'#7A7490'); for(let x=0;x<64;x+=8){d.vline(x,32,39,'#3A3448'); d.px(x+4,35,'#F8D040')}
  d.dither(0,37,64,3,'#4A4458','#3A3448');
  // a glowing lamp post + the pretty edge-of-space star
  d.vline(28,22,30,'#7A7490'); d.circ(28,21,1.5,'#F8E070'); d.px(28,21,'#FFFFFF');
  bigtw(d,10,12,'#FFFFFF','#FFFFFF'); twinkle(d,24,3,'#F8D8A0','#FFFFFF');
},
// =================== USAGI ===================
'usagi:s0': d=>{ // half-eaten hanami dango on a skewer
  const W1='#B07838',W2='#D8A060',W3='#F0C890';
  // skewer, diagonal from bottom-left to top-right
  d.line(4,29,26,7,W1); d.line(5,29,27,7,W2); d.line(5,28,26,6,W3);
  // green (bottom) full ball
  const ball=(cx,cy,r,a,b,c)=>{d.circ(cx,cy,r,a); d.circ(cx-.8,cy-.8,r-1.3,b); d.circ(cx-2,cy-2,1,c)};
  ball(10,22,5.2,'#6AA850','#94CC70','#D8F4C0');
  // white ball (bitten)
  ball(16.5,15.5,5.2,'#D8D0C0','#F4F0E4','#FFFFFF');
  // bite: carve out upper-right of white ball with scalloped teeth marks
  for(const [x,y,r] of [[21,11,3.2],[19,9.5,2.2],[22.5,14,2.2]]) d.circ(x,y,r,null);
  // redraw skewer through the bitten area (visible again)
  for(let i=0;i<=8;i++){const x=19+i, y=12-i; if(!d.get(x,y)) {d.px(x,y,W2); d.px(x,y-1,W3)}}
  // bite mark inner shading (soft mochi)
  for(const [x,y] of [[18,11],[19,12],[20,13],[17,10],[21,14]]) if(d.get(x,y)) d.px(x,y,'#FFF8EC');
  // sweet crumb + pink mochi gone (just a pink smear on the stick top)
  d.px(24,9,'#F8A8B8'); d.px(25,8,'#F8A8B8'); d.px(26,7,'#F07890');
  d.outline('#4A3A28');
  // a few crumbs and a sparkle
  d.px(27,14,'#F4F0E4'); d.px(28,16,'#94CC70'); d.px(25,18,'#F4F0E4');
  d.stamp(26,22,['..y..','.yYy.','..y..'],{y:'#F8D860',Y:'#FFFFFF'});
  // tiny teeth-mark ticks on the bite edge
  d.px(20,15,'#C8C0B0');
},
'usagi:s1': d=>{ // a stack of earned license certificates
  const O='#3A2A20';
  const card=(x,y,w,h,c1,c2,c3)=>{d.rect(x,y,w,h,c1); d.hline(x,x+w-1,y+h-1,c2); d.vline(x+w-1,y,y+h-1,c2); d.hline(x,x+w-2,y,c3)};
  // bottom books/folders
  card(4,24,24,4,'#5A8AD0','#3A64A8','#8AB4F0'); d.rect(4,25,24,1,'#F8F0D8');
  card(5,20,22,4,'#E87070','#B84848','#F8A0A0'); d.rect(5,21,22,1,'#F8F0D8');
  card(3,16,24,4,'#6AB868','#3E8E48','#9CDC90'); d.rect(3,17,24,1,'#F8F0D8');
  card(6,12,21,4,'#F0C040','#C08A20','#F8E080'); d.rect(6,13,21,1,'#F8F0D8');
  // top: open certificate card with photo + seal
  d.rect(5,3,22,10,'#FFF8E4'); d.frame(5,3,22,10,'#D8A848'); d.frame(6,4,20,8,'#F0D890');
  d.rect(8,5,6,6,'#F8E8C0'); // photo
  d.stamp(9,5,['.e..e','.e..e','.eeee','ee..e','eqeee','.eeee'].map(r=>r),{e:'#FFF8E0',q:'#F8A8B8'}); // rabbit face in photo
  d.frame(8,5,6,6,'#C8A878'); d.px(10,8,'#3A2A20'); d.px(12,8,'#3A2A20');
  for(const y of [6,8,10]) d.hline(15,20,y,'#B8A890');
  // gold seal medallion with ribbons
  d.circ(23,11,3.2,'#E8B830'); d.circ(23,11,2,'#F8D860'); d.px(22,10,'#FFFFFF');
  d.stamp(21,14,['r...r','rr.rr','.r.r.'],{r:'#E04848'});
  d.outline(O);
  // "yaha!" sparkles
  d.stamp(27,2,['..y..','.yyy.','yyWyy','.yyy.','..y..'],{y:'#F8D860',W:'#FFFFFF'});
  d.px(1,10,'#F8D860'); d.px(29,19,'#F8D860');
},
'usagi:s2': d=>{ // legendary hunting club with impact sparkles
  const W1='#7A4A22',W2='#A86A34',W3='#D09858',W4='#F0C080';
  // thick club along a diagonal: thin at bottom-left handle, fat at top-right head
  for(let i=0;i<=40;i++){const t=i/40, x=6+t*16, y=27-t*17, r=1.6+t*t*4.2; d.circ(x,y,r,W1)}
  for(let i=0;i<=40;i++){const t=i/40, x=5.6+t*16, y=26.6-t*17, r=1+t*t*3.4; d.circ(x,y,r,W2)}
  for(let i=4;i<=40;i++){const t=i/40, x=5+t*15.5, y=26-t*16.8, r=.2+t*t*1.4; d.circ(x,y,r,W3)}
  d.px(18,10,W4); d.px(19,9,W4); d.px(20,8,W4);
  // knots in wood
  d.ell(22,13,1,1,W1); d.px(17,16,W1);
  // bandage grip wrap
  for(const [x,y] of [[5,26],[7,24],[9,22]]){d.line(x-1,y+1,x+2,y-1,'#F4ECD8'); d.line(x,y+2,x+2,y,'#C8BCA8')}
  // pommel
  d.circ(4,28,1.6,W1); d.px(4,28,W3);
  d.outline('#2E1C10');
  // power impact: star burst + speed lines at the head
  d.stamp(23,0,['...y...','..yYy..','yyYWYyy','..yYy..','...y...'],{y:'#F8C830',Y:'#F8E880',W:'#FFFFFF'});
  d.line(28,8,31,7,'#F88830'); d.line(28,11,31,11,'#F88830'); d.line(27,14,30,15,'#F88830');
  d.px(30,4,'#F8E880'); d.px(15,4,'#F8E880');
  // a little monster tuft stuck on it (it got sent flying)
  d.stamp(24,16,['.p.','ppp'],{p:'#8A6AB8'});
},
'usagi:c0': d=>{ // corner store at dusk, city
  d.grad(0,0,64,22,['#3A3870','#5A4888','#8A5C98','#C87C98','#F0A890']);
  // distant city silhouette
  for(const [x,w,h] of [[0,8,10],[7,6,14],[12,9,8],[52,7,13],[58,6,9],[22,6,12]]) d.rect(x,22-h,w,h,'#4A3A6A');
  for(let i=0;i<14;i++) d.px(d.ri(0,62),d.ri(10,20),'#F8D880');
  d.px(48,3,'#FFFFFF'); d.px(12,5,'#F8F0C0'); d.px(30,2,'#FFFFFF');
  // street behind + low wall/hedge
  d.rect(0,22,64,8,'#5A4E78'); d.rect(0,26,26,4,'#4A8A60'); for(let x=0;x<26;x+=3) d.px(x+1,26,'#6AAA70');
  // sidewalk/ground
  d.rect(0,30,64,10,'#8A8498'); d.hline(0,63,30,'#B4AEC0'); for(let x=0;x<64;x+=7) d.vline(x,31,39,'#7A7488');
  d.dither(0,37,64,3,'#8A8498','#7A7488');
  // store building (center-right)
  d.rect(26,8,36,22,'#F0EEE8'); d.rect(26,8,36,2,'#C8C4C0');
  // stripe sign band (green/orange/red like a konbini)
  d.rect(26,10,36,2,'#3AA860'); d.rect(26,12,36,2,'#F8A030'); d.rect(26,14,36,1,'#E04040');
  d.stamp(41,10,['w.w.w','.w.w.'],{w:'#FFFFFF'});
  // glowing windows with shelves of snacks
  d.rect(28,16,22,13,'#FFF8C8'); d.frame(28,16,22,13,'#A8A4A8'); d.vline(39,16,28,'#A8A4A8');
  const sc=['#F86A6A','#F8C040','#6AC0F0','#88D870','#F8A0C8'];
  for(const y of [19,23,27]){d.hline(29,38,y,'#C8B898'); d.hline(40,48,y,'#C8B898'); for(let x=29;x<49;x++) if(x!==39) d.px(x,y-1,sc[(x+y)%5]), (x%2) && d.px(x,y-2,sc[(x*3+y)%5])}
  // glass door with open sign
  d.rect(51,17,9,13,'#D8F0F8'); d.frame(51,17,9,13,'#7A8498'); d.vline(55,17,29,'#7A8498'); d.px(54,23,'#4A4A58'); d.px(56,23,'#4A4A58');
  d.rect(52,18,3,2,'#F86A6A');
  // light spill on sidewalk
  d.dither(28,31,32,2,'#B8B0A8','#8A8498'); d.rect(30,30,28,1,'#D8D0B8');
  // vending machine + bin at far right edge
  d.rect(61,18,3,12,'#E04848'); d.px(62,20,'#FFFFFF');
  // dropped receipt + overflowing snack bag near the pet
  d.rect(24,32,6,5,'#FFFFFF'); d.frame(24,32,6,5,'#C8C8D0'); d.px(25,31,'#F8C040'); d.px(27,30,'#F86A6A'); d.px(28,31,'#6AC0F0'); d.rect(25,30,2,2,'#88D870');
  d.px(23,36,'#F8C040'); d.px(31,35,'#F86A6A');
  // music notes "lululu"
  d.stamp(4,6,['.nn','.n.','nn.'],{n:'#F8F0C0'}); d.stamp(17,3,['.nn','.n.','nn.'],{n:'#F8D0E0'});
  // streetlamp
  d.vline(23,10,29,'#4A4A60'); d.hline(21,24,10,'#4A4A60'); d.px(21,11,'#F8F0A0'); d.dither(19,12,4,2,'#F8E0A0','#C87C98');
},
'usagi:c1': d=>{ // full-moon field at night, grass flattened where it flopped
  d.grad(0,0,64,26,['#0E1238','#16204A','#1E2C5C','#28386C','#34487A']);
  for(let i=0;i<30;i++) d.px(d.ri(0,63),d.ri(0,20),i%4?'#C8D0F0':'#FFFFFF');
  // huge full moon with halo (center-right)
  d.circ(44,13,11,'#3A4C84'); d.circ(44,13,9.5,'#F8F0C0'); d.circ(46,11,8,'#FFFAE0');
  d.ell(40,11,2,1.5,'#E8DCA8'); d.circ(47,17,1.5,'#E8DCA8'); d.circ(50,9,1,'#E8DCA8');
  // rabbit-shaped shadow on the moon (mochi-pounding hint)
  // distant hills
  d.ell(10,27,18,5,'#1E3A3A'); d.ell(56,28,16,4,'#1A3434');
  // field
  d.grad(0,26,64,14,['#28503C','#2E5C42','#346848','#3A744E']);
  // tall grass tufts (lit by moon)
  for(let x=0;x<64;x+=3){ if(x>4&&x<24) continue; const h=3+((x*7)%4); d.vline(x,36-h,36,'#4A8A58'); d.px(x+1,36-h+1,'#6AAE70'); d.px(x,36-h,'#98D090')}
  // flattened grass patch where it flopped (center), with the outline of a lying body
  d.ell(38,33,9,3,'#5C9A5C'); d.ell(38,33,7,2,'#6AA868'); d.line(31,33,45,33,'#78B474');
  d.stamp(45,30,['.e.e','.e.e','.eee'],{e:'#78B474'});
  // pampas grass (susuki) on right, moon-viewing style
  for(const [x,h] of [[56,14],[59,12],[61,15]]){d.line(x,37,x-2,37-h,'#B8A870'); d.ell(x-3,37-h+1,1,2,'#F0E4B8')}
  // dango offering stand
  d.rect(50,33,6,3,'#C89058'); d.hline(50,55,33,'#E0B078'); d.circ(53,31,1,'#FFFFFF'); d.circ(51,32,1,'#FFFFFF'); d.circ(55,32,1,'#FFFFFF');
  // fireflies
  for(const [x,y] of [[28,22],[33,19],[58,22],[26,28],[47,25]]) d.px(x,y,'#E8F870');
  // "ura!" zig speech marks
  d.stamp(28,9,['y.y','.y.','y.y'],{y:'#F8E070'});
},
'usagi:c2': d=>{ // peak above the clouds, snow
  d.grad(0,0,64,24,['#3A7ED8','#4C90E0','#62A2E8','#7EB6F0','#9CCAF4','#BCDCF8']);
  d.circ(12,6,3,'#FFF8C0'); d.circ(12,6,2,'#FFFFFF');
  // sea of clouds
  d.rect(0,22,64,18,'#E8F0FA');
  for(const [x,y,w] of [[4,22,8],[18,21,7],[34,23,9],[50,21,8],[62,22,6]]) cloud(d,x,y,w,'#FFFFFF');
  for(let x=0;x<64;x+=5) d.hline(x,x+2,28+(x%3),'#D0DEF0');
  // main mountain peak (center-right)
  const R1='#6A7A98',R2='#8A9AB8',S1='#FFFFFF',S2='#D8E4F4',S3='#B4C4DC';
  d.poly([[26,30],[44,4],[63,30]],R1); d.poly([[44,4],[63,30],[52,30]],'#5A6886');
  d.poly([[37,15],[44,4],[51,15],[48,13],[45,16],[42,13],[39,16]],S1);
  d.poly([[44,4],[51,15],[48,13],[46,11]],S2);
  d.line(34,22,38,18,R2); d.line(52,20,56,24,S3);
  // summit flag (made it!)
  d.vline(44,0,4,'#4A3A28'); d.rect(45,0,5,3,'#F86A80'); d.px(46,1,'#FFFFFF'); d.px(48,1,'#FFFFFF');
  // low clouds hugging the base
  cloud(d,30,27,7,'#FFFFFF','#D0DEF0'); cloud(d,58,28,7,'#FFFFFF','#D0DEF0');
  // snowy ledge the pet stands on (foreground lower area)
  d.poly([[0,31],[30,30],[40,33],[64,34],[64,40],[0,40]],S2); d.poly([[0,32],[28,31],[36,34],[64,36],[64,40],[0,40]],S1);
  d.hline(0,63,39,S2);
  // footprints leading to the right + planted stick
  for(const [x,y] of [[24,35],[28,36],[32,35],[36,37]]){d.px(x,y,S3); d.px(x+1,y,S3)}
  d.vline(46,29,36,'#8A5A30'); d.px(46,28,'#B07838');
  // sparkles of ice / yaha
  twinkle(d,58,10,'#FFFFFF'); twinkle(d,24,12,'#FFFFFF'); d.px(32,6,'#FFFFFF');
},
// =================== LISA ===================
'lisa:s0': d=>{ // library card in its pocket, with due-date stamps
  const O='#2A2018';
  // book pocket (back), slightly tilted look by offset
  d.rect(3,14,26,15,'#D89848'); d.rect(3,14,26,2,'#B87830'); d.rect(4,27,24,1,'#B87830');
  // the card sticking up out of the pocket
  d.rect(6,3,20,18,'#FFFAEC'); d.rect(6,3,20,4,'#6AA8E0'); d.hline(6,25,6,'#4A88C8');
  // book icon on header
  d.stamp(8,3,['bbb.bbb','bwb.bwb','bwbbbwb','bbbbbbb'].map(r=>r.replace(/\./g,'b')),{b:'#F8D840',w:'#FFFFFF'});
  d.hline(16,24,4,'#FFFFFF'); d.hline(16,22,5,'#D8ECF8');
  // ruled lines with stamped dates
  for(const y of [9,12,15,18]){d.hline(7,24,y,'#C8D4E8'); d.vline(15,7,19,'#C8D4E8')}
  for(const [y,c] of [[8,'#5A6AB8'],[11,'#5A6AB8'],[14,'#E06050'],[17,'#5A6AB8']]){d.hline(8,13,y,'#8A8478'); d.hline(17,22,y,c); d.px(19,y,'#FFFAEC')}
  // pocket front over the card
  d.rect(3,19,26,10,'#E8B060'); d.hline(3,28,19,'#F8D088'); d.rect(3,27,26,2,'#C88838');
  d.stamp(11,22,['.oooooooo.','o........o','.oooooooo.'],{o:'#B87830'}); // label window
  d.outline(O);
  // gold star sticker "knowledge is power"
  d.stamp(22,15,['...y...','..yyy..','yyyWyyy','.yyyyy.','.yy.yy.','.y...y.'],{y:'#F8C820',W:'#FFF8B0'});
  d.px(23,16,O);
},
'lisa:s1': d=>{ // Bleeding Gums Murphy LP sliding out of its sleeve
  const O='#1A1418';
  // vinyl record (behind, to the right)
  d.circ(20,14,11,'#1E1C24'); for(const r of [5,7,9]) d.ring(20,14,r,'#34303C');
  d.circ(20,14,3.5,'#F08A30'); d.circ(20,14,2.4,'#F8B060'); d.px(20,14,'#1E1C24');
  d.line(14,6,17,4,'#6A6478'); d.line(25,22,28,19,'#58546A'); // shine
  // sleeve (front, left)
  d.rect(2,9,20,21,'#2A4A8A'); d.rect(2,9,20,3,'#3A62A8'); d.dither(2,26,20,4,'#2A4A8A','#223C72');
  // spotlight circle + sax player silhouette with sunglasses
  d.circ(12,19,7,'#F8D060'); d.circ(12,19,6,'#F8E088');
  d.stamp(8,13,[
    '...hhh....',
    '..hhhhh...',
    '..ssggs...',
    '..sssss...',
    '...sss.g..',
    '..kkkkkgg.',
    '.kkkkkkgg.',
    '.kkkkkg.g.',
    '.kkkkgg...',
    '..kkkk....',
    '..kk.kk...',
  ],{h:'#3A2A20',s:'#8A5A3A',g:'#F8C030',k:'#3A3448'});
  d.px(10,15,'#1A1418'); d.px(11,15,'#1A1418'); d.px(13,15,'#1A1418'); // sunglasses
  // title band
  d.hline(4,19,10,'#F8E088'); d.hline(4,12,11,'#F0A0A0');
  d.outline(O);
  d.stamp(26,25,['..n','..n','nnn','nn.'],{n:'#F8C030'}); d.stamp(28,1,['.n','.n','nn'],{n:'#F8C030'});
},
'lisa:s2': d=>{ // golden saxophone
  const G1='#A86A10',G2='#D89A20',G3='#F8C840',G4='#FFF0A0',O='#4A2A08';
  // neck + mouthpiece at top
  d.line(19,4,23,1,G2); d.line(20,4,24,1,G1); d.line(19,3,22,1,G3); d.rect(24,0,3,2,'#2A2A2A'); d.px(26,0,'#5A5A5A');
  // body tube going down (from 19,4 to 19,22) widening
  for(let y=4;y<=22;y++){const w=1.5+(y-4)*.16; d.hline(Math.round(19-w),Math.round(19+w),y,G2); d.px(Math.round(19-w),y,G3); d.px(Math.round(19+w),y,G1)}
  // u-bend at bottom
  for(let a=0;a<=Math.PI;a+=.08){const x=15+Math.cos(a)*6, y=23+Math.sin(a)*5; d.circ(x,y,3,G2)}
  for(let a=0.3;a<=Math.PI-.3;a+=.1){const x=15+Math.cos(a)*6, y=24.4+Math.sin(a)*5; d.px(x,y,G1)}
  // rising bell
  d.poly([[6,23],[12,23],[13,10],[4,10]],G2); d.poly([[3,9],[14,9],[13,12],[4,12]],G2);
  d.vline(5,12,22,G3); d.vline(6,11,22,G4); d.vline(12,12,22,G1);
  d.ell(8.5,9,5.5,1.5,G1); d.ell(8.5,9,4.5,.8,'#6A4008');
  // keys
  for(const y of [8,11,14,17,20]){d.circ(21,y,1.2,'#FFF0C8'); d.px(21,y,G3)}
  for(const y of [14,18]) d.circ(11,y,1,'#FFF0C8');
  d.line(17,7,17,20,G4);
  d.outline(O);
  // notes floating out of the bell + sparkle
  d.stamp(1,0,['.nn','.n.','nn.'],{n:'#E06878'}); d.stamp(27,13,['..nnn','..n.n','nnnnn','nn.nn'],{n:'#5A8AE0'});
  d.stamp(25,20,['..w..','.wYw.','wYWYw','.wYw.','..w..'],{w:'#F8C840',Y:'#FFF0A0',W:'#FFFFFF'});
},
'lisa:c0': d=>{ // springfield library, warm indoor
  // wall
  d.rect(0,0,64,30,'#E8D4A8'); d.dither(0,0,64,2,'#D8C094','#E8D4A8');
  // arched window (left-top) with sunlight
  d.rect(4,3,12,14,'#A8D8F0'); d.circ(10,4,6,'#A8D8F0');
  d.vline(10,0,16,'#8A5A30'); d.hline(4,15,9,'#8A5A30'); d.frame(3,3,14,15,'#8A5A30'); d.px(6,5,'#FFFFFF'); d.px(13,6,'#FFFFFF');
  d.dither(4,18,12,1,'#F8E8C0','#E8D4A8');
  // big bookshelves (right side) floor to top
  const shelf=(x,w)=>{d.rect(x,1,w,28,'#7A4A24'); d.frame(x,1,w,28,'#5A3418');
    const bc=['#D85050','#4A78C8','#58A860','#E8B830','#9058A8','#E07838','#3A9898'];
    for(let s=0;s<4;s++){const y=3+s*7; d.hline(x+1,x+w-2,y+6,'#5A3418'); let i=0; for(let xx=x+1;xx<x+w-1;xx++){const h=4+((xx*5+s)%3); const c=bc[(xx*3+s*2)%7]; d.vline(xx,y+6-h,y+5,c); if(i++%3===0) d.px(xx,y+6-h,'#F8F0D8')}}};
  shelf(34,14); shelf(49,14);
  // rolling ladder
  d.line(46,4,42,29,'#C89058'); d.line(50,4,46,29,'#C89058'); for(let y=8;y<29;y+=4) d.hline(44-(y-8)/5|0,48-(y-8)/5|0,y,'#C89058');
  // wainscot + floor (carpet)
  d.rect(0,22,34,8,'#B88A58'); d.hline(0,33,22,'#8A5A30');
  d.rect(0,30,64,10,'#7A3A3A'); d.hline(0,63,30,'#5A2A2A'); for(let x=0;x<64;x+=2) d.px(x,35,'#8A4848'); d.dither(0,38,64,2,'#7A3A3A','#6A3030');
  // reading table with lamp + towering stack of 12 books (center)
  d.rect(22,27,18,2,'#A86A38'); d.hline(22,39,27,'#C88A50'); d.vline(23,29,36,'#7A4A24'); d.vline(38,29,36,'#7A4A24');
  const bc=['#D85050','#4A78C8','#58A860','#E8B830','#9058A8','#E07838'];
  for(let i=0;i<12;i++){const off=(i%3)-1; d.rect(29+off,26-i*1.6|0,7,2,bc[i%6]); d.px(35+off,(26-i*1.6|0),'#F8F0D8')}
  d.vline(25,21,26,'#3A6A48'); d.poly([[22,21],[28,21],[26,18],[24,18]],'#4A9A60'); d.dither(22,22,7,2,'#F8E8A0','#E8D4A8'); // green banker lamp
  // "SHHH" sign: one tiny letter-like plaque
  d.rect(19,6,9,5,'#3A5A3A'); d.frame(19,6,9,5,'#C8A060'); d.stamp(21,7,['s.s.s','sssss','s.s.s'],{s:'#F8F0D8'});
  // dust motes in light
  d.px(18,20,'#FFF8E0'); d.px(20,14,'#FFF8E0'); d.px(14,24,'#FFF8E0');
},
'lisa:c1': d=>{ // new orleans jazz street at night
  d.grad(0,0,64,14,['#1A1238','#24184A','#30205A','#3E286A']);
  d.circ(10,5,2.5,'#F8F0D0'); for(const [x,y] of [[20,3],[30,1],[4,11],[26,8]]) d.px(x,y,'#C8C0F0');
  // buildings with wrought-iron balconies
  const bld=(x,w,top,c,c2,win)=>{d.rect(x,top,w,30-top,c); d.hline(x,x+w-1,top,c2);
    for(let wx=x+2;wx<x+w-2;wx+=5){d.rect(wx,top+3,3,5,win); d.rect(wx,top+13,3,6,win)}
    d.hline(x,x+w-1,top+9,'#1A1A24'); for(let bx=x;bx<x+w;bx+=2) d.vline(bx,top+10,top+11,'#1A1A24'); d.hline(x,x+w-1,top+11,'#1A1A24')};
  bld(24,14,4,'#E07868','#F8A090','#F8D878'); bld(38,13,7,'#58A898','#88D0C0','#F8C860'); bld(51,13,3,'#E8B848','#F8D880','#F8E8A8');
  bld(0,24,10,'#4A3A6A','#6A5A8A','#8A6AA0');
  // street + sidewalk
  d.rect(0,30,64,10,'#4A4458'); d.hline(0,63,30,'#7A7090'); d.rect(0,34,64,6,'#3A3448');
  for(let x=2;x<64;x+=5) d.px(x,37,'#5A5470'); for(let x=0;x<64;x+=9) d.hline(x,x+3,36,'#6A6488');
  // gas lamps with glow
  for(const x of [23,48]){d.vline(x,18,30,'#1A1A24'); d.rect(x-1,16,3,3,'#F8E070'); d.px(x,15,'#1A1A24'); for(let j=0;j<7;j++)for(let i=0;i<7;i++) if((i+j)%2===0&&(i-3)**2+(j-3)**2<10) d.px(x-3+i,14+j,'#C8A060'); d.rect(x-1,16,3,3,'#FFF8C0')}
  // little stage spot on the street (center-right) with open sax case, coins + applause hands
  d.ell(38,33,9,2,'#8A7AA0'); d.ell(38,33,7,1,'#B0A0C0');
  d.rect(33,32,9,3,'#8A2A2A'); d.rect(34,32,7,2,'#C84848'); for(const [x,y] of [[35,32],[37,33],[39,32]]) d.px(x,y,'#F8D040');
  d.stamp(52,26,['.y.y.','yyyyy','yyyyy','.yyy.'],{y:'#F8C8A0'}); d.stamp(58,27,['.y.y.','yyyyy','.yyy.'],{y:'#E8A880'});
  // music notes drifting
  d.stamp(28,20,['.nn','.n.','nn.'],{n:'#F8D040'}); d.stamp(34,16,['..nnn','..n.n','nnnnn','nn.nn'],{n:'#F8A0D0'}); d.stamp(42,21,['.nn','.n.','nn.'],{n:'#88E8E0'});
  // purple neon sign over the corner (saxophone icon)
  d.rect(27,6,8,5,'#2A1A3A'); d.stamp(28,6,['....n','...n.','n.n..','nnn..','.n...'],{n:'#F870D8'});
},
'lisa:c2': d=>{ // future oval office
  // curved wall in cream with vertical panels
  d.rect(0,0,64,30,'#F4ECD4'); for(let x=2;x<64;x+=8){d.vline(x,0,29,'#E0D4B4'); d.vline(x+1,0,29,'#FFF8E8')}
  d.hline(0,63,1,'#D8C890'); d.hline(0,63,24,'#D8C890');
  // tall windows with blue-gold drapes (right half)
  for(const x of [30,46]){d.rect(x,3,8,19,'#9CCCF0'); d.dither(x,14,8,8,'#9CCCF0','#B8E0F8'); d.vline(x+4,3,21,'#FFFFFF'); d.hline(x,x+7,10,'#FFFFFF');
    d.rect(x-2,2,3,22,'#2A4A9A'); d.rect(x+7,2,3,22,'#2A4A9A'); d.vline(x-1,2,23,'#4A6AC0'); d.vline(x+8,2,23,'#4A6AC0'); d.hline(x-2,x+9,2,'#E8B830')}
  // flags between windows
  d.vline(42,6,27,'#C8A048'); d.px(42,5,'#E8C860');
  d.rect(43,7,4,6,'#FFFFFF'); for(const y of [7,9,11]) d.hline(43,46,y,'#E04848'); d.rect(43,7,2,3,'#2A4A9A');
  // floor and oval rug with gold seal
  d.rect(0,30,64,10,'#B8885A'); d.hline(0,63,30,'#8A6038');
  d.ell(40,35,22,4,'#1E3A80'); d.ell(40,35,20,3,'#2A4A9A'); d.ell(40,35,6,2,'#E8B830'); d.ell(40,35,4,1,'#F8D860'); d.px(40,35,'#C88A20');
  // resolute desk (center-right)
  d.rect(30,22,22,9,'#7A4022'); d.rect(30,21,22,2,'#A05A30'); d.hline(30,51,21,'#C07A48');
  d.rect(37,24,8,5,'#5A2E18'); d.ell(41,26,2,1,'#E8B830'); // carved seal
  d.vline(31,23,30,'#5A2E18'); d.vline(50,23,30,'#5A2E18');
  // on desk: stack of books, nameplate, star
  d.rect(33,18,6,1,'#D85050'); d.rect(34,17,5,1,'#4A78C8'); d.rect(33,16,6,1,'#58A860'); d.rect(34,15,4,1,'#E8B830');
  d.rect(43,19,6,2,'#E8B830'); d.hline(44,47,20,'#8A6020');
  // "24" on a little clock — 24-hour libraries pledge
  d.rect(14,5,11,9,'#C8A048'); d.rect(15,6,9,7,'#2A4A9A');
  d.stamp(16,7,['www.w.w','..w.w.w','www.www','w.....w','www...w'],{w:'#F8E8A0'});
  d.rect(54,26,8,4,'#E8B830'); d.rect(55,25,6,1,'#D85050'); d.rect(56,24,5,1,'#58A860');
  // a sax on its stand by the wall (left of desk)
  d.line(26,18,26,29,'#E8B830'); d.line(25,29,27,29,'#5A5A5A'); d.ell(24,27,2,2,'#E8B830'); d.px(27,18,'#2A2A2A');
  // presidential star sparkle
  bigtw(d,58,6,'#F8D860','#FFFFFF');
},
// =================== PTERA ===================
'ptera:s0': d=>{ // wind map: parchment with updraft swirls, pinned feather
  const P1='#F4E2B0',P2='#E0C488',P3='#C49A58',O='#4A2A1A';
  // rolled parchment: flat sheet with rolled ends
  d.rect(4,5,24,22,P1); d.dither(4,22,24,5,P1,P2);
  d.rect(2,4,3,24,P2); d.vline(2,4,27,P3); d.vline(4,4,27,'#FFF4D0');
  d.rect(27,4,3,24,P2); d.vline(29,4,27,P3); d.vline(27,4,27,'#FFF4D0');
  // coastline / island
  d.ell(10,20,5,3,'#9CC870'); d.ell(10,20,3,2,'#B8DC88'); d.px(9,19,'#6A9A48');
  // sea wash
  for(const [x,y] of [[6,25],[15,24],[20,25],[24,22]]) d.hline(x,x+2,y,'#8AC0E0');
  // updraft spirals (red) with up arrows
  const swirl=(cx,cy,c)=>{d.ring(cx,cy,2.5,c); d.px(cx,cy,c); d.vline(cx+3,cy-6,cy-1,c); d.px(cx+2,cy-5,c); d.px(cx+4,cy-5,c)};
  swirl(19,15,'#D04838'); swirl(10,11,'#D04838'); swirl(23,22,'#E07848');
  // dashed flight path
  for(const [x,y] of [[6,26],[8,24],[11,16],[13,13],[16,10],[19,8],[22,7],[25,6]]) d.px(x,y,'#5A4A6A');
  // little cloud
  d.ell(22,10,2,1,'#FFFFFF'); d.px(21,9,'#FFFFFF');
  // compass
  d.stamp(23,24,['..c..','.ccc.','cc.cc','.ccc.','..c..'],{c:'#5A4A6A'});
  d.outline(O);
  // pinned feather on top corner
  d.line(23,2,31,0,'#F8F0E0'); d.line(23,3,30,1,'#E0D0B8'); d.line(24,1,29,0,'#FFFFFF'); d.px(22,3,'#D04838');
},
'ptera:s1': d=>{ // a sky-caught fish, bent mid-flop with droplets
  const F1='#3A6A9A',F2='#5A90C0',F3='#9CC8E8',F4='#E8F4FF',O='#1A2A40';
  // body: arched ellipse via rell
  rell(d,15,16,11,5.5,-.35,(u,v)=>v<-.5?F2:(v>.35?F3:(Math.abs(v)<.12?F4:F2)));
  rell(d,15,16,11,5.5,-.35,(u,v)=>v<-.55?F1:null);
  // tail fin
  d.poly([[4,20],[0,15],[1,25]],F2); d.poly([[3,20],[1,17],[1,23]],F3);
  // dorsal + belly fins
  d.poly([[12,10],[17,8],[19,11]],F1); d.poly([[14,22],[17,25],[19,21]],F3);
  // head: eye, gill line, open mouth
  d.circ(22,13,1.6,'#FFFFFF'); d.px(23,13,'#1A1A24'); d.px(22,12,'#FFFFFF');
  d.line(19,13,20,18,F1); d.px(26,13,'#E07070'); d.px(25,14,O);
  // scale pattern
  for(const [x,y] of [[9,17],[12,15],[15,14],[11,19],[14,18],[17,16]]) d.px(x,y,F1);
  // beak pinch mark (where ptera held it)
  d.px(13,12,'#F8C0A0'); d.px(15,11,'#F8C0A0');
  d.outline(O);
  // water droplets
  for(const [x,y] of [[28,6],[26,3],[30,10],[6,6],[3,9],[29,22]]){d.px(x,y,'#7AC8F8'); d.px(x,y-1,'#C8ECFF')}
  d.stamp(7,1,['..w..','.wWw.','..w..'],{w:'#9CDCFF',W:'#FFFFFF'});
},
'ptera:s2': d=>{ // cretaceous kite shaped like a pteranodon
  const R1='#B05830',R2='#D89868',R3='#F8E0C0',M='#F07850',O='#4A2A1A';
  // wings: hand-placed left half, then mirrored
  d.stamp(0,6,[
    'L...............',
    'LL.............b',
    'DLLL..........bb',
    '.DLLLL........bb',
    '.DMMLLLL.....bbb',
    '..DMMMMLLL...bbb',
    '..DMMMMMMLLL.bbb',
    '...DMMMMMMMMLbbb',
    '...DDMMMMMMMMbbb',
    '....DMMMMMMMMbbb',
    '.....DDMMMMMMbbb',
    '.......DDMMMMbbb',
    '.........DDDDbbb',
    '.............bbb',
    '..............bb',
    '..............bb',
  ],{L:R3,M,D:R1,b:R2});
  d.mirrorX();
  // wing finger bones + body shading
  d.line(2,8,10,11,R2); d.line(29,8,21,11,R2); d.vline(14,8,20,R1); d.vline(17,8,20,R1); d.vline(15,9,19,R3);
  // feet
  d.px(14,22,R1); d.px(17,22,R1);
  // head: long beak to the right, tall crest to the left
  d.circ(16,5,2.6,R2); d.px(15,4,R3);
  d.poly([[17,4],[29,1],[18,7]],'#F8C890'); d.line(18,6,27,2,'#E0A060');
  d.poly([[15,4],[5,0],[7,0],[16,3]],R1); d.line(14,3,8,0,M);
  d.px(17,4,'#1A1A24'); d.px(16,4,'#FFFFFF');
  // kite spar (cross)
  d.line(3,9,28,9,'#7A4A22');
  d.outline(O);
  // tail string with bows
  let x=16,y=23; for(let i=0;i<8;i++){const nx=x+(i%2?2:-1), ny=y+1; d.line(x,y,nx,ny,'#5A4A3A'); x=nx; y=ny}
  for(const [bx,by,c] of [[14,24,'#F86A6A'],[17,27,'#F8D040'],[19,29,'#6AC0F0']]) d.stamp(bx,by,['c.c','.c.','c.c'],{c});
  d.ell(4,26,3,1,'#E8F4FF'); d.ell(27,24,3,1,'#E8F4FF'); d.ell(26,0,2,0,'#E8F4FF');
},
'ptera:c0': d=>{ // gliding over the river bridge at sunset
  d.grad(0,0,64,22,['#4A3A80','#8A4A8A','#D86A78','#F89870','#F8C070','#F8E0A0']);
  d.circ(48,19,5,'#FFF0B0'); d.circ(48,19,4,'#FFF8D8');
  // far city skyline silhouette
  for(const [x,w,h] of [[0,5,4],[5,3,7],[8,6,3],[30,4,6],[34,5,9],[39,3,5],[54,5,7],[59,5,4]]) d.rect(x,22-h,w,h,'#6A4A78');
  d.vline(36,10,12,'#6A4A78'); // tower
  // river
  d.grad(0,22,64,8,['#E89878','#C8788A','#9A6A9A','#7A5A9A']);
  for(let x=0;x<64;x+=5) d.hline(x,x+2,24+(x%3),'#F8C8A0');
  d.dither(44,22,8,8,'#F8E0A0','#C8788A');
  // the bridge: deck + arches across center-right
  d.rect(20,18,44,2,'#3A2A48'); d.hline(20,63,17,'#5A4A6A');
  for(let x=22;x<64;x+=10){for(let a=0;a<=Math.PI;a+=.15) d.px(x+5-Math.cos(a)*5,20+Math.sin(a)*4,'#3A2A48'); d.rect(x-1,20,2,8,'#3A2A48')}
  for(let x=20;x<64;x+=3) d.px(x,16,'#F8D070'); // lamp lights
  // near riverbank (grass park) where pet stands
  d.rect(0,30,64,10,'#4A6A48'); d.hline(0,63,30,'#6A8A58'); d.dither(0,37,64,3,'#4A6A48','#3E5A3E');
  d.rect(26,31,38,2,'#C8A880'); d.hline(26,63,33,'#A88860'); // bike path
  // spooked gulls scattering (V shapes) right side
  for(const [x,y] of [[40,6],[46,4],[52,8],[58,5],[30,9],[55,12]]) d.stamp(x,y,['w...w','.w.w.'],{w:'#FFFFFF'});
  d.px(48,7,'#F8E070'); d.px(42,4,'#F8E070');
  // feather drifting + ptera shadow over the water
  d.line(33,13,35,12,'#F8F0E0'); d.ell(40,26,5,1,'#6A4A80');
},
'ptera:c1': d=>{ // seaside cliffs, open sea
  d.grad(0,0,64,16,['#5AB0F0','#6CBCF2','#82C8F4','#9AD4F6','#B4E0F8']);
  d.ell(16,5,6,2,'#FFFFFF'); d.ell(20,4,4,2,'#FFFFFF'); d.ell(34,8,4,1,'#FFFFFF');
  // sea
  d.grad(0,16,64,24,['#2A8AC8','#2496C8','#1EA2C8','#1AAEC4','#18B8C0']);
  for(let i=0;i<22;i++){const x=d.ri(0,40), y=d.ri(17,38); d.hline(x,x+2,y,'#7AD8E8')}
  // tall cliff on the right with grass cap
  d.poly([[40,6],[64,4],[64,40],[44,40],[46,30],[42,22],[44,14]],'#C88A58');
  d.poly([[52,8],[64,6],[64,40],[56,40],[58,30]],'#A86A40');
  d.line(44,14,46,24,'#E8B080'); d.line(47,10,49,16,'#E8B080'); for(const y of [18,25,32]) d.hline(48,58,y,'#A86A40');
  d.poly([[39,7],[64,3],[64,7],[42,9]],'#5AB858'); d.hline(40,63,6,'#7ACC68'); for(let x=41;x<64;x+=3) d.px(x,9,'#4A9A48');
  // waves crashing at cliff foot
  for(const [x,y] of [[42,34],[45,28],[41,38],[46,36]]) {d.ell(x,y,3,1,'#FFFFFF'); d.px(x-2,y-1,'#E0F8FF')}
  // rocky sea stack (center)
  d.poly([[30,30],[33,18],[36,30]],'#8A6A58'); d.line(33,19,34,29,'#A8886A'); d.ell(33,31,4,1,'#FFFFFF');
  // nest on the cliff ledge with eggs
  d.ell(52,12,3,1,'#7A5A30'); d.px(51,11,'#F8F0E0'); d.px(53,11,'#F8F0E0');
  // sandy rock ledge for the pet (lower-left)
  d.poly([[0,30],[14,28],[24,31],[26,40],[0,40]],'#E8D098'); d.poly([[0,34],[18,33],[26,40],[0,40]],'#D0B478');
  d.px(8,30,'#F88878'); d.px(18,33,'#F8F0E0'); // starfish & shell
  // flying gulls
  d.stamp(24,6,['w...w','.w.w.'],{w:'#FFFFFF'}); d.stamp(30,12,['w.w','.w.'],{w:'#FFFFFF'});
  // cool spray sparkle
  twinkle(d,38,22,'#FFFFFF');
},
'ptera:c2': d=>{ // cretaceous sky above the clouds, sunset
  d.grad(0,0,64,22,['#2A1A4A','#4A2060','#7A2A6A','#B83A68','#E8605A','#F89848','#F8C050']);
  // giant setting sun on the horizon
  d.circ(40,15,10,'#F8A040'); d.circ(40,15,8,'#F8D060'); d.circ(40,15,6,'#FFF0A0');
  for(const y of [14,17,20]) d.hline(33,47,y,'#F8C050'); // sun bands
  // distant volcano peeks out of clouds (right) with smoke
  d.poly([[52,22],[58,10],[60,10],[64,20],[64,22]],'#5A2A48'); d.px(58,9,'#F86040'); d.px(59,9,'#F8A040');
  d.ell(60,6,3,2,'#8A5A78'); d.ell(62,3,2,1,'#8A5A78');
  // sea of clouds (pink/orange)
  d.rect(0,22,64,18,'#F8B898');
  for(const [x,y,w] of [[6,22,8],[22,23,9],[40,22,10],[58,23,8]]) cloud(d,x,y,w,'#F8C8A8');
  for(const [x,y,w] of [[14,27,10],[34,28,9],[54,28,10]]) cloud(d,x,y,w,'#FCD8C0','#E8A090');
  d.rect(0,33,64,7,'#E8A090'); for(let x=0;x<64;x+=6) d.hline(x,x+3,35+(x%2),'#F8B898');
  d.dither(0,38,64,2,'#E8A090','#D88888');
  // a huge cloud top where the pet stands (lower-left)
  d.ell(14,34,16,5,'#FFE8D8'); d.ell(14,36,17,4,'#FCD8C0'); d.hline(0,30,38,'#E8A090');
  // other pteranodons silhouetted against the sun
  const pt=(x,y)=>d.stamp(x,y,['k.......k','.kk.k.kk.','...kkk...','....k....'],{k:'#3A1A3A'});
  pt(34,13); pt(46,8); pt(24,5);
  // fern-tree tops sticking out of clouds (dino age)
  for(const x of [50,56]){d.vline(x,24,30,'#3A2A3A'); d.stamp(x-3,21,['k.k.k','.kkk.','kkkkk'],{k:'#3A2A3A'})}
  // first star
  twinkle(d,10,4,'#F8E8FF','#FFFFFF');
},
// =================== BORMI ===================
'bormi:s0': d=>{ // curl brush: wooden paddle with pins, curly fur caught, sparkles
  const W1='#8A5028',W2='#B87840',W3='#E0A868',O='#3A2010';
  // handle (diagonal down-left)
  for(let i=0;i<=20;i++){const t=i/20; d.circ(4+t*8,28-t*8,1.8,W1)}
  for(let i=0;i<=20;i++){const t=i/20; d.circ(3.6+t*8,27.6-t*8,1,W2)}
  d.line(3,27,10,20,W3); d.circ(3,29,1.2,W1);
  // paddle head
  rell(d,19,12,10,8,-.75,(u,v)=>v<-.7?W3:(v>.65?W1:W2));
  // pink cushion pad
  rell(d,19.4,11.6,8,6,-.75,(u,v)=>v>.5?'#E07890':'#F8A8B8');
  // pins in rows
  for(let j=-3;j<=3;j++)for(let i=-3;i<=3;i++){const x=19+i*2+j*1.2, y=12-i*1.6+j*1.6; if(((x-19.4)/7.5)**2+((y-11.6)/7.5)**2<.62&&(i+j)%1===0){d.px(Math.round(x),Math.round(y),'#FFFFFF'); d.px(Math.round(x),Math.round(y)+1,'#B85870')}}
  d.outline(O);
  // curly fur tufts caught in the pins
  const curl=(x,y)=>d.stamp(x,y,['.cc.','c..c','c.cc','.cc.'],{c:'#B86A3E'});
  curl(18,9); curl(22,13); d.px(20,10,'#C8804E');
  // sparkles
  d.stamp(26,0,['..w..','.wYw.','wYWYw','.wYw.','..w..'],{w:'#F8D860',Y:'#FFF0A0',W:'#FFFFFF'});
  twinkle(d,4,6,'#F8D860','#FFFFFF'); d.px(29,24,'#F8D860'); d.px(13,2,'#F8D860');
},
'bormi:s1': d=>{ // a whole bag of treats, spilling bone cookies
  const K1='#B8885A',K2='#D8AC78',K3='#F0CC98',O='#3A2216';
  // paper bag
  d.poly([[6,10],[24,10],[26,29],[4,29]],K2); d.poly([[18,10],[24,10],[26,29],[20,29]],K1);
  d.vline(6,11,28,K3); d.vline(7,11,28,K3);
  // crumpled open top
  d.poly([[5,7],[9,10],[12,6],[15,9],[18,5],[21,9],[25,7],[24,11],[6,11]],K3);
  d.stamp(5,7,['k...k'],{k:K1});
  // label with paw + heart
  d.rect(9,16,10,9,'#F8F0E0'); d.frame(9,16,10,9,'#E07070');
  d.stamp(11,17,['.p.p.','p...p','.ppp.','.ppp.','..p..'],{p:'#B86A3E'});
  d.px(15,23,'#E07070'); d.px(16,22,'#E07070'); d.px(14,22,'#E07070');
  // bone cookies poking out of the top and spilled at the base
  const bone=(x,y,c1,c2)=>d.stamp(x,y,['bb...bb','bbbbbbb','.bbbbb.','bbbbbbb','bb...bb'].map((r,i)=>i===1?'bcccccb':r),{b:c1,c:c2});
  const vbone=(x,y,c1,c2)=>d.stamp(x,y,['b.b','bbb','.c.','.c.','.c.','.c.','bbb','b.b'],{b:c1,c:c2});
  vbone(10,0,'#E8B060','#F8D490'); vbone(15,1,'#C88848','#E8B060'); vbone(20,2,'#E8B060','#F8D490');
  bone(22,25,'#E8B060','#F8D490'); bone(0,25,'#C88848','#E8B060');
  // one cookie half-bitten (missing end)
  d.clear(26,25); d.clear(27,25); d.clear(28,26); d.clear(27,26); d.clear(28,27);
  d.outline(O);
  // crumbs
  for(const [x,y] of [[10,30],[14,31],[29,31],[20,31],[2,22]]) d.px(x,y,'#E8B060');
  d.stamp(25,3,['.hh.hh','hhhhhh','.hhhh.','..hh..'].map(r=>r),{h:'#F0909A'});
},
'bormi:s2': d=>{ // dog-free island map
  const P1='#F4E4B8',P2='#E0C890',P3='#C8A060',O='#3A2216';
  d.rect(2,4,28,24,P1); d.frame(2,4,28,24,P3);
  // torn/folded creases
  d.vline(11,5,26,P2); d.vline(20,5,26,P2); d.hline(3,28,16,P2);
  // sea
  d.rect(3,5,26,22,'#9CD8F0'); for(const [x,y] of [[5,7],[24,8],[6,23],[23,24],[14,25]]) d.hline(x,x+2,y,'#C8ECF8');
  // heart-shaped island
  d.circ(12,12,5,'#F0D898'); d.circ(19,12,5,'#F0D898'); d.poly([[7,13],[24,13],[15.5,23]],'#F0D898');
  d.circ(12,12,4,'#88C868'); d.circ(19,12,4,'#88C868'); d.poly([[8,13],[23,13],[15.5,21]],'#88C868');
  // palm + hut
  d.vline(11,9,14,'#8A5A30'); d.stamp(9,8,['g.g.g','.ggg.'],{g:'#3E8A3E'});
  // little people icons (stick figures)
  for(const [x,y] of [[17,11],[20,14],[14,16]]) d.stamp(x,y,['.h.','hbh','.b.','b.b'],{h:'#F8C8A0',b:'#5A6AB8'});
  // red X treasure spot = treats
  d.stamp(18,17,['x.x','.x.','x.x'],{x:'#E04040'});
  // NO-DOG sign in corner: paw in red slashed circle
  d.circ(24,23,3.6,'#FFFFFF'); d.ring(24,23,3.4,'#E04040');
  d.stamp(22,21,['.p.p','p...','.pp.','.pp.'].map(r=>r.padEnd(5,'.')),{p:'#7A4A2A'}); d.line(22,21,26,25,'#E04040');
  // rolled edges
  d.rect(1,3,30,2,P3); d.hline(1,30,3,P1); d.rect(1,27,30,2,P3); d.hline(1,30,28,P2);
  d.outline(O);
  twinkle(d,29,1,'#F8D860','#FFFFFF');
},
'bormi:c0': d=>{ // dog-free alley, sunny day, snack smell
  d.grad(0,0,64,10,['#8ACCF0','#A0D8F4','#B8E2F6']);
  d.ell(30,3,5,1,'#FFFFFF'); d.ell(50,5,4,1,'#FFFFFF');
  // left wall (short, cream stucco) and right brick wall (tall)
  d.rect(0,8,26,22,'#F0E0C0'); d.dither(0,8,26,2,'#E0CCA8','#F0E0C0'); d.rect(0,26,26,4,'#D8C4A0');
  d.rect(4,12,7,6,'#7AB0D8'); d.frame(4,12,7,6,'#8A6A48'); d.vline(7,12,17,'#8A6A48'); d.rect(4,18,7,2,'#E06A6A'); // window box
  for(let x=4;x<11;x+=2) d.px(x,11+7,'#F8D040');
  // alley vanishing toward center
  d.poly([[26,30],[32,14],[38,14],[44,30]],'#C8BCA8');
  d.rect(26,6,4,24,'#B86A4A');
  // right side: bakery with snack smell + brick wall
  d.rect(44,4,20,26,'#C86A4A'); for(let y=5;y<30;y+=3){d.hline(44,63,y,'#A85438'); for(let x=44+(y%2)*3;x<64;x+=6) d.px(x,y+1,'#A85438')}
  d.rect(47,10,14,10,'#FFF4D8'); d.frame(47,10,14,10,'#7A4A2A');
  d.rect(46,8,16,3,'#F8A8B0'); for(let x=46;x<62;x+=4) d.rect(x,8,2,3,'#FFFFFF'); // awning
  // breads in window
  d.ell(50,17,2,1,'#D89040'); d.ell(54,17,2,1,'#E8A850'); d.ell(58,17,2,1,'#D89040'); d.ell(52,14,1,1,'#F8D088'); d.ell(56,14,1,1,'#F8D088');
  // smell wavy lines drifting left toward the pet
  for(const [x,y] of [[40,12],[36,16],[40,20]]) d.stamp(x,y,['.s..s.','s.ss.s'],{s:'#F8C8D0'});
  // the NO-DOG sign on a pole (center)
  d.vline(33,16,30,'#6A6A78'); d.circ(33,13,3.6,'#FFFFFF'); d.ring(33,13,3.4,'#E04040');
  d.stamp(31,11,['.p.p','p...','.pp.','.pp.'],{p:'#7A4A2A'}); d.line(31,11,35,15,'#E04040');
  // ground: paving stones
  d.rect(0,30,64,10,'#D8CCB4'); d.hline(0,63,30,'#B8A88C');
  for(let y=32;y<40;y+=3) for(let x=(y%2)*3;x<64;x+=7) d.hline(x,x+4,y,'#C4B69C');
  // potted flowers and a dropped treat
  d.rect(40,26,4,4,'#C86A3A'); d.stamp(39,22,['.r.y.','grgyg','.ggg.'],{r:'#F06A8A',y:'#F8D040',g:'#58A858'});
  d.stamp(28,33,['b...b','bbbbb','b...b'],{b:'#E8B060'});
  // cat on the wall instead of dogs
  d.stamp(17,5,['k...k','kkkkk','kwkwk','kkkkk','.kkkkk'],{k:'#5A5A6A',w:'#F8E070'});
},
'bormi:c1': d=>{ // poodle salon interior with city view
  // pink wall with stripes
  d.rect(0,0,64,30,'#F8D0D8'); for(let x=0;x<64;x+=6) d.rect(x,0,2,30,'#FCE0E6');
  // big window with city skyline (right)
  d.rect(38,3,24,15,'#88B8E8'); d.grad(38,3,24,15,['#78A8E0','#90C0EC','#B0D4F4']);
  for(const [x,w,h] of [[38,4,8],[42,5,11],[47,3,6],[50,5,10],[55,4,7],[59,3,12]]){d.rect(x,18-h,w,h,'#7A88B0'); for(let yy=18-h+2;yy<18;yy+=3) d.px(x+1,yy,'#F8E890')}
  d.frame(37,2,26,17,'#FFFFFF'); d.vline(50,2,18,'#FFFFFF');
  // round mirror with sparkle + lightbulbs
  d.circ(20,10,7,'#E8B830'); d.circ(20,10,6,'#D8F0F8'); d.line(17,6,15,9,'#FFFFFF'); d.line(23,7,24,8,'#FFFFFF');
  for(const a of [0,1,2,3,4,5,6,7]) d.px(20+Math.cos(a*.785)*8,10+Math.sin(a*.785)*8,'#FFF8C0');
  // shelf of bottles
  d.hline(2,12,7,'#C88A9A'); for(const [x,c] of [[3,'#F06A8A'],[6,'#6AC0E0'],[9,'#B888E0']]){d.rect(x,4,2,3,c); d.px(x,3,'#FFFFFF')}
  // salon chair + hood dryer (center-right)
  d.rect(30,22,8,2,'#E06A8A'); d.rect(31,16,6,6,'#E06A8A'); d.rect(32,17,4,4,'#F890A8'); d.vline(34,24,29,'#9898A8'); d.hline(31,37,29,'#9898A8');
  d.ell(34,13,4,3,'#B8B8C8'); d.ell(34,13,3,2,'#D8D8E8'); d.vline(38,12,22,'#9898A8');
  // grooming table with a brush, scissors, hairdryer
  d.rect(42,22,18,3,'#FFFFFF'); d.hline(42,59,24,'#D8C8D0'); d.vline(44,25,29,'#B8B8C8'); d.vline(57,25,29,'#B8B8C8');
  d.rect(45,20,5,2,'#B87840'); d.rect(46,19,3,1,'#F8A8B8'); // brush
  d.stamp(52,18,['o.o','.x.','x.x'],{o:'#9898A8',x:'#C8C8D8'}); // scissors
  d.rect(56,19,3,2,'#6AC0E0'); d.px(57,21,'#4A90B0');
  // checker floor
  d.rect(0,30,64,10,'#FFFFFF'); for(let y=30;y<40;y+=2) for(let x=((y/2)%2)*2;x<64;x+=4) d.rect(x,y,2,2,'#E8A8B8');
  d.hline(0,63,30,'#D88A9A');
  // brushed-out curls on the floor + bubbles/sparkles (got brushed a hundred times)
  for(const [x,y] of [[28,34],[36,36],[48,33],[56,37]]) d.stamp(x,y,['.cc','c.c','cc.'],{c:'#B86A3E'});
  for(const [x,y] of [[26,4],[30,9],[58,26],[27,16]]) twinkle(d,x,y,'#FFFFFF','#F8E070');
  d.ring(46,10,1,'#FFFFFF');
},
'bormi:c2': d=>{ // snack kingdom: candy land with cookie castle
  d.grad(0,0,64,24,['#F8C8E8','#F8D4EC','#FCE0F0','#FFECF4']);
  // bone-shaped clouds
  const bcl=(x,y)=>d.stamp(x,y,['ww....ww','wwwwwwww','ww....ww'],{w:'#FFFFFF'});
  bcl(4,3); bcl(22,6); bcl(52,2);
  // candy hills
  d.ell(10,26,16,7,'#B8E8C8'); d.ell(44,25,22,7,'#F8B0C8'); d.ell(56,26,10,5,'#C8D0F8');
  // cookie / cake castle (center-right)
  d.rect(34,10,22,16,'#D8A060'); for(let y=12;y<26;y+=4) for(let x=35+(y%8?2:0);x<55;x+=5) d.px(x,y,'#8A5428'); // chocolate chips
  d.rect(34,10,22,2,'#FFFFFF'); for(let x=34;x<56;x+=3) d.vline(x,12,12+(x%2)+1,'#FFFFFF'); // icing drips
  for(const x of [32,43,54]){d.rect(x,5,5,21,'#E8B070'); d.rect(x,5,5,2,'#F890B0'); d.poly([[x-1,5],[x+2.5,0],[x+6,5]],'#F06A8A'); d.px(x+2,0,'#F8E070')}
  d.rect(42,18,7,8,'#8A5428'); d.circ(45.5,18,3.5,'#8A5428'); d.px(47,22,'#F8E070'); // door
  // big donut sun
  d.circ(14,10,5,'#E8A060'); d.circ(14,10,4,'#F890B8'); d.circ(14,10,1.5,'#FCE0F0');
  for(const [x,y,c] of [[11,8,'#6AC0F0'],[16,7,'#F8E070'],[17,11,'#88D870'],[12,12,'#FFFFFF']]) d.px(x,y,c);
  // lollipop trees
  for(const [x,c] of [[27,'#F86A8A'],[60,'#88C8F8']]){d.vline(x,18,27,'#FFFFFF'); d.circ(x,16,3,c); d.ring(x,16,1.5,'#FFFFFF')}
  // milk river + kibble ground
  d.rect(0,27,64,13,'#E8B878'); d.hline(0,63,27,'#F8D8A0');
  for(let i=0;i<30;i++){const x=d.ri(0,63), y=d.ri(29,39); d.px(x,y,'#B8804A'); d.px(x+1,y,'#C8905A')}
  d.poly([[30,40],[36,30],[44,28],[50,30],[42,40]],'#FFFFFF'); d.line(38,32,42,30,'#E0E8F8'); d.line(40,36,44,32,'#E0E8F8');
  // giant bone treat and an empty bowl (still not full!)
  d.stamp(52,32,['bb......bb','bbbbbbbbbb','bb......bb'].map(r=>r.replace(/b/g,'b')),{b:'#F8E8C8'});
  d.ell(28,35,4,2,'#E04848'); d.ell(28,34,3,1,'#F8E0C0'); d.hline(25,31,36,'#A83030');
  // sprinkles in the air
  for(const [x,y,c] of [[26,3,'#6AC0F0'],[38,2,'#F8E070'],[60,12,'#88D870'],[30,20,'#F86A8A']]) {d.px(x,y,c); d.px(x+1,y+1,c)}
},
// @@END
};
