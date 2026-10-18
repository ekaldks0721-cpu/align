// ac2: Blathers (c1,c2), K.K. Slider, Apollo — Animal Crossing: New Horizons flavored gifts
const leaf=(d,x,y,c1,c2)=>d.stamp(x,y,['..aa.','.aaab','aabb.','abb..','b....'],{a:c1,b:c2}); // small NH leaf
const stars=(d,n,x0,y0,x1,y1,cols)=>{for(let i=0;i<n;i++){d.px(d.ri(x0,x1),d.ri(y0,y1),cols[i%cols.length])}};
const twinkle=(d,x,y,c,cc)=>d.stamp(x-1,y-1,['.c.','cCc','.c.'],{c,C:cc||'#FFFFFF'});
const note=(d,x,y,c)=>d.stamp(x,y,['..cc','..cc','..c.','..c.','ccc.','cc..'],{c});

export default {
  // ---------- BLATHERS ----------
  // Aquarium tunnel: glass arch, fish & shark shadow overhead, museum carpet walkway
  'blathers:c1': d=>{
    const W1='#0E4A78',W2='#16639A',W3='#2280B4',W4='#3A9CCB',RAY='#5FB8DD';
    d.grad(0,0,64,30,[W1,W1,W2,W2,W3,W3,W4]);
    // light rays from surface
    for(const [x,w] of [[8,3],[26,2],[42,4],[56,2]]) for(let y=0;y<26;y++) if((y+x)%3) d.hline(x+Math.floor(y/3),x+w+Math.floor(y/3),y,(y%2)?W3:RAY);
    d.grad(0,0,64,2,['#BFE8FA',RAY]);
    // shark shadow
    const S='#0A3558';
    d.ell(40,8,9,2,S); d.poly([[48,8],[54,4],[53,8],[54,12]],S); d.poly([[38,6],[41,1],[43,6]],S); d.poly([[36,9],[33,12],[39,10]],S);
    // fish (sea bass, clownfish, angel fish)
    const fish=(x,y,b,s,f)=>{d.ell(x,y,3,2,b); d.hline(x-2,x+2,y+1,s); d.poly([[x+3,y],[x+6,y-2],[x+6,y+2]],f); d.px(x-2,y-1,'#101820'); d.px(x-3,y,'#FFFFFF')};
    fish(14,7,'#F07830','#C85020','#F07830'); d.vline(14,5,9,'#FFFFFF'); d.vline(16,5,9,'#FFFFFF');
    fish(24,14,'#C8D8E0','#7890A0','#C8D8E0');
    fish(52,17,'#F8D040','#D0A020','#4A70C8');
    fish(6,16,'#F07830','#C85020','#F07830'); d.vline(6,14,18,'#FFFFFF');
    // tiny school
    for(const [x,y] of [[30,4],[33,5],[31,6],[34,3]]) {d.hline(x,x+1,y,'#BFE8FA'); d.px(x+2,y,RAY)}
    // bubbles
    for(const [x,y] of [[20,4],[21,1],[59,8],[60,5],[3,9],[46,21]]) d.ring(x,y,.6,'#BFE8FA');
    // tunnel glass arches (ribs) with perspective
    const R='#C8D8E0',R2='#7890A0';
    const arch=(cx,rx,ry,base,c)=>{for(let a=0;a<=180;a+=1){const t=a*Math.PI/180; d.px(cx+Math.cos(t)*rx,base-Math.sin(t)*ry,c)}};
    arch(32,36,34,32,R2); arch(32,35,33,32,R);
    arch(40,22,20,30,R2); arch(44,12,11,28,R2);
    // kelp & coral at tunnel base (right & left edges)
    for(const x of [58,61]) for(let y=14;y<29;y++) d.px(x+((y>>1)%2),y,'#3AA060');
    for(const x of [2]) for(let y=10;y<28;y++) d.px(x+((y>>1)%2),y,'#3AA060');
    d.circ(50,27,2,'#F07890'); d.circ(53,26,2,'#F07890'); d.px(53,25,'#F8D070'); d.circ(29,27,2,'#F0A040'); d.px(29,25,'#F8D070');
    d.rect(0,27,64,2,'#E8D8B0'); 
    // floor: walkway carpet
    d.rect(0,29,64,11,'#5A4870');
    d.poly([[6,40],[58,40],[46,29],[38,29]],'#B04050');
    d.line(6,39,38,29,'#D8B060'); d.line(58,39,46,29,'#D8B060');
    // floor side tiles
    for(let y=31;y<40;y+=3) {d.hline(0,63,y,'#4A3C60')}
    d.poly([[6,40],[58,40],[46,29],[38,29]],'#B04050'); d.line(6,39,38,29,'#D8B060'); d.line(58,39,46,29,'#D8B060');
    d.hline(40,44,31,'#F07890'); d.hline(36,48,35,'#F07890');
    // museum info stand (right)
    d.rect(58,30,1,6,'#0A3558'); d.rect(55,27,7,4,'#8A5E36'); d.rect(56,28,5,2,'#E8D8B0'); d.px(57,28,'#3AA060'); d.px(58,28,'#3AA060');
    // dim floor glow
    for(let x=0;x<64;x+=2) d.px(x,29,'#4A3C60');
  },
  // Observatory: starry sky, milky way, Celeste's shooting star, dome on a grassy hill
  'blathers:c2': d=>{
    d.grad(0,0,64,30,['#141A40','#18204C','#1E2858','#263464','#304274']);
    // milky way band
    for(let i=0;i<60;i++){const t=d.rnd(); const x=Math.round(t*64), y=Math.round(22-t*20+d.ri(-2,2)); d.px(x,y,d.rnd()<.5?'#4A5A90':'#7A88B8')}
    stars(d,45,0,0,63,24,['#FFFFFF','#FFF0A0','#C8D4F8']);
    // constellation (sister's favorite) — little connected dots
    const cs=[[22,4],[26,6],[30,5],[33,8],[29,10]]; for(let i=0;i<cs.length-1;i++) d.line(...cs[i],...cs[i+1],'#4A5A90'); cs.forEach(([x,y])=>twinkle(d,x,y,'#FFF0A0'));
    // shooting star (Celeste's wish)
    d.line(4,3,14,8,'#7A88B8'); d.line(5,3,14,7,'#C8D4F8'); twinkle(d,15,8,'#FFE880');
    d.stamp(8,10,['y'],{y:'#FFE880'});
    // crescent moon
    d.circ(56,6,4,'#FFF2B0'); d.circ(58,5,4,'#18204C');
    // far hills + sea
    d.rect(0,24,64,3,'#263464'); for(let x=0;x<64;x+=5) d.hline(x,x+1,25,'#4A5A90');
    d.poly([[0,27],[10,23],[22,26],[30,25],[64,24],[64,40],[0,40]],'#1E4A3A');
    d.poly([[24,40],[30,26],[44,20],[64,21],[64,40]],'#28603E');
    d.rect(0,28,64,12,'#2A6A44'); d.poly([[22,28],[32,24],[46,19],[64,20],[64,28]],'#2E7048');
    for(let i=0;i<30;i++) d.px(d.ri(0,63),d.ri(29,39),d.rnd()<.5?'#3A8050':'#1E4A3A');
    // flowers (night) in grass
    for(const [x,y] of [[26,33],[30,37],[3,38],[58,36],[36,30]]) {d.px(x,y,'#FFFFFF'); d.px(x+1,y,'#C8D4F8')}
    // observatory building
    const WL='#E6DDCC',WS='#B8AC98',DM='#9AA8BA',DM2='#6C7A90',DM3='#C8D2DE';
    d.rect(42,16,18,13,WL); d.rect(42,16,2,13,WS); d.rect(58,16,2,13,WS);
    d.ell(51,15,9,8,DM); d.rect(41,16,20,13,null); d.rect(42,16,18,13,WL); d.rect(57,16,3,13,WS);
    for(let y=7;y<=15;y++) for(let x=42;x<=60;x++) if(((x-51)/9.4)**2+((y-15)/8.4)**2<=1){d.px(x,y,x<47?DM3:x>56?DM2:DM)}
    d.hline(41,61,16,DM2);
    // slit open + telescope
    d.rect(50,7,3,9,'#101634'); d.line(48,12,57,4,DM3); d.line(48,13,57,5,DM2); d.rect(56,3,2,2,'#FFFFFF');
    // door & lit windows
    d.rect(49,22,4,7,'#6A4A2E'); d.px(52,25,'#F0C850'); d.rect(44,20,3,3,'#F8D878'); d.rect(55,20,3,3,'#F8D878'); d.px(45,20,'#FFFFFF');
    d.hline(48,54,29,WS);
    // owl-emblem plaque (Blathers museum leaf)
    leaf(d,49,17,'#3A9A48','#2E7A38');
    // small telescope on tripod in middle
    d.line(34,24,37,33,'#5A4030'); d.line(34,24,31,33,'#5A4030'); d.line(34,24,34,33,'#5A4030');
    d.line(29,23,38,19,'#C88838'); d.line(29,22,38,18,'#F0C850'); d.rect(38,17,2,2,'#F8D878'); d.px(28,23,'#5A4030');
    // star chart blanket
    d.poly([[24,36],[36,34],[40,38],[26,39]],'#304274'); d.px(30,36,'#FFF0A0'); d.px(34,37,'#FFF0A0'); d.px(28,37,'#FFF0A0');
  },

  // ---------- K.K. SLIDER ----------
  // Worn guitar pick with a snapped string curling across
  'kk:s0': d=>{
    const O='#3A2418',A='#E8902C',A2='#C06C1C',A3='#F8B860',A4='#FFE0A8',W='#F6D8A8';
    // rounded triangle: hull of three corner circles
    d.poly([[4,8],[9,3],[23,3],[28,8],[19,27],[13,27]],A); d.circ(9,8,5,A); d.circ(23,8,5,A); d.circ(16,25,3,A);
    // right-side shade & left highlight
    d.poly([[24,4],[28,8],[19,27],[16,28],[21,14]],A2); d.circ(24,8,3,A); d.circ(23,7,2,A);
    d.line(6,6,14,23,A3); d.line(7,6,15,23,A3); d.hline(9,14,4,A3); d.px(8,5,A4); d.px(9,4,A4); d.px(7,6,A4);
    // worn thumb spot
    d.ell(16,10,5,4,W); d.ell(16,10,3,3,'#FBE6C0');
    // embossed eighth note in the worn spot
    d.stamp(14,7,['...oo','...o.','...o.','.ooo.','.oo..'],{o:'#B86418'});
    // scratches & chip
    d.line(11,18,13,20,A2); d.line(19,17,21,16,A2); d.px(17,22,A2); d.px(12,15,A2);
    d.clear(27,9); d.clear(28,9);
    d.outline(O);
    // snapped string
    const S='#C8CCD4',S2='#8A90A0';
    d.line(0,25,5,21,S); d.line(5,21,8,23,S); d.ring(9,26,2,S); d.line(11,27,14,30,S2);
    d.line(26,1,30,0,S); d.line(24,2,26,1,S2); d.px(31,0,'#FFFFFF');
    twinkle(d,27,21,'#FFF0A0'); d.px(3,13,'#FFF0A0');
  },
  // Limited edition K.K. album: sleeve with K.K. portrait + vinyl peeking out
  'kk:s1': d=>{
    const O='#24202A',V='#2A2A34',V2='#44444E',V3='#6A6A78',L='#E84A5A';
    // vinyl record
    d.circ(21,14,11,V); for(const r of [9,7,5]) d.ring(21,14,r,V2); d.ring(21,14,8,V3); d.circ(21,14,3,L); d.px(21,14,'#F8E8D0'); d.line(26,7,29,10,'#9A9AA8');
    // sleeve
    const B='#F2D06A',B2='#D8A840',B3='#FFE8A0';
    d.rect(2,6,20,22,B); d.rect(2,6,20,1,B3); d.rect(21,6,1,22,B2); d.rect(2,27,20,1,B2);
    // painted backdrop stripes (album art style)
    d.rect(4,8,16,17,'#6AB8C8'); d.rect(4,19,16,6,'#8ED080'); d.hline(4,19,19,'#6AB060');
    // K.K. face: white dog, droopy ears, thick brows, closed eyes, smile
    const F='#F8F8F2',F2='#C8C8BE',K='#3A3A3A';
    d.ell(12,15,5,5,F); d.rect(5,12,2,6,F2); d.rect(17,12,2,6,F2); d.ell(6,15,1,3,F2); d.ell(18,15,1,3,F2);
    d.hline(9,10,12,K); d.hline(14,15,12,K); d.px(8,13,K); d.px(16,13,K);
    d.hline(9,10,14,K); d.hline(14,15,14,K);
    d.rect(11,16,3,2,K); d.px(12,19,K); d.px(11,19,'#F0C0C0'); d.px(13,19,'#F0C0C0');
    d.hline(8,16,20,F2);
    // tiny guitar neck across bottom
    d.line(5,24,10,21,'#8A5A2A'); d.ell(5,24,2,1,'#C08040');
    d.outline(O);
    // limited edition gold star sticker
    const G='#F8C830',G2='#E09A10';
    d.stamp(22,21,['...g...','..ggg..','ggggggg','.gGgGg.','.ggggg.','gg...gg'],{g:G,G:G2});
    d.stamp(21,20,['...o...'],{o:O});
    twinkle(d,28,3,'#FFF0A0'); twinkle(d,3,3,'#FFF0A0');
  },
  // Legendary live mic: classic chrome mic on stand, gold band, spotlight sparkles
  'kk:s2': d=>{
    const O='#22202A',C1='#E8ECF2',C2='#B8C0CC',C3='#7C8494',G='#F2C640',G2='#C89420',B='#2A2A34',B2='#4A4A58';
    // grille head
    d.ell(16,8,7,7,C2); d.ell(14,6,4,4,C1);
    for(let y=2;y<=14;y+=2) for(let x=9;x<=23;x++) if(((x-16)/7.4)**2+((y-8)/7.4)**2<=1 && (x+y)%2===0) d.px(x,y,C3);
    d.ell(13,5,2,2,'#FFFFFF');
    d.rect(9,13,15,2,G); d.hline(9,23,14,G2); d.px(11,13,'#FFF0A0');
    // body
    d.poly([[11,15],[21,15],[19,23],[13,23]],B); d.vline(13,16,21,B2); d.vline(14,16,20,B2);
    d.rect(14,17,4,3,'#D84050'); d.px(15,18,'#FFD0D0'); // red on-air badge
    d.rect(13,23,6,2,C2); d.hline(13,18,24,C3);
    // stand
    d.rect(15,25,2,4,C3); d.px(15,25,C2); d.ell(16,29,7,1,B); d.hline(10,22,29,B2);
    d.outline(O);
    // spotlight sparkle and stars
    twinkle(d,26,4,'#FFE880'); twinkle(d,5,10,'#FFE880'); d.px(27,13,'#FFE880'); d.px(4,3,'#FFE880');
    note(d,25,18,'#7A5AC8');
  },
  // Saturday plaza show: night, Resident Services tent, stool & spotlight, speakers, plaza tree
  'kk:c0': d=>{
    d.grad(0,0,64,22,['#1A1C48','#22265A','#2C3068','#383A78','#4A4688']);
    stars(d,26,0,0,63,14,['#FFFFFF','#FFF4C0']);
    d.circ(8,5,2,'#FFF4C8'); d.circ(9,4,2,'#22265A');
    // trees behind plaza
    for(const x of [0,6,13,52,58,63]) {d.ell(x,16,4,5,'#1C3A30'); d.ell(x,15,3,3,'#24483A')}
    // Resident Services tent (green & white)
    const T1='#4CAA5A',T2='#E8F0E0',T3='#30804A';
    d.poly([[22,20],[42,20],[38,9],[26,9]],T1); for(let x=27;x<=37;x+=3) d.poly([[x,9],[x+1,9],[x-1,20],[x-2,20]],T2);
    d.poly([[24,9],[40,9],[32,4]],T3); d.hline(22,42,20,T3); d.rect(29,15,6,5,'#F8D878'); d.rect(30,16,4,4,'#FFE8A0');
    leaf(d,30,5,'#8ED870','#4CAA5A');
    // ground: plaza tiles
    d.rect(0,20,64,20,'#5A6A54'); d.rect(0,20,64,1,'#4A5846');
    for(let y=23;y<40;y+=4) d.hline(0,63,y,'#4E5E4A');
    for(let y=20;y<40;y+=4) for(let x=((y/4)%2)*3;x<64;x+=6) d.vline(x,y+1,y+3,'#4E5E4A');
    // spotlight cone onto stage
    for(let y=4;y<36;y++){const w=Math.floor((y-4)*.32); for(let x=46-w;x<=46+w;x++) if((x+y)%4===0) d.px(x,y,'#C8B880'); d.px(46-w,y,'#F8E8A0'); d.px(46+w,y,'#F8E8A0')}
    d.ell(46,35,10,2,'#F8E8A0'); d.ell(46,35,7,1,'#FFF6D0');
    // stool
    d.ell(46,26,4,1,'#C88848'); d.hline(43,49,27,'#8A5A2A'); d.line(43,28,42,34,'#8A5A2A'); d.line(49,28,50,34,'#8A5A2A'); d.vline(46,28,33,'#6A4420'); d.hline(43,49,31,'#6A4420');
    // acoustic guitar leaning
    d.ell(53,32,2,3,'#D88C38'); d.ell(53,29,2,2,'#D88C38'); d.px(53,31,'#3A2418'); d.vline(53,21,27,'#6A4420'); d.rect(52,20,3,2,'#3A2418');
    // speakers
    for(const x of [34,58]) {d.rect(x,26,5,8,'#2A2A30'); d.circ(x+2,28,1,'#6A6A78'); d.circ(x+2,31,1.4,'#6A6A78'); d.px(x+2,31,'#2A2A30')}
    // lamp post
    d.vline(27,10,34,'#2A2C34'); d.rect(26,9,3,2,'#FFE890'); d.px(27,8,'#2A2C34');
    // notes floating
    note(d,38,12,'#F8D878'); note(d,56,8,'#F8A0C0');
    // fireflies
    for(const [x,y] of [[3,18],[60,24],[24,26]]) d.px(x,y,'#E8F870');
  },
  // Back-alley café: brick + wood, coffee siphons, tiny stage with mic stand, steaming cup
  'kk:c1': d=>{
    const BR='#9A4E3A',BR2='#7E3E2E',MOR='#B8826A';
    d.rect(0,0,64,26,BR);
    for(let y=0;y<26;y+=3){d.hline(0,63,y,MOR); for(let x=(y/3%2)*3;x<64;x+=6) d.vline(x,y+1,y+2,MOR)}
    for(let i=0;i<14;i++){const x=d.ri(0,60),y=d.ri(0,8)*3+1; d.hline(x+1,x+4,y,BR2)}
    // wooden wainscot & floor
    d.rect(0,20,64,6,'#6A4426'); for(let x=0;x<64;x+=4) d.vline(x,20,25,'#5A3820'); d.hline(0,63,20,'#8A5E36');
    d.rect(0,26,64,14,'#B07A44'); for(let y=29;y<40;y+=3) d.hline(0,63,y,'#9A6838'); for(let y=26;y<40;y+=3) for(let x=((y/3)%3)*7;x<64;x+=19) d.vline(x,y,y+2,'#9A6838');
    // counter (right) with siphons
    d.rect(36,14,28,13,'#7A4A26'); d.rect(35,13,29,2,'#D8A868'); d.hline(36,63,15,'#5A3418'); for(let x=40;x<64;x+=6) d.vline(x,16,26,'#6A3E1E');
    const siphon=(x)=>{d.circ(x,9,2,'#C8E8F0'); d.px(x-1,8,'#FFFFFF'); d.rect(x-1,4,3,3,'#A8D0E0'); d.px(x,3,'#5A3418'); d.circ(x,11,1.5,'#6A3418'); d.rect(x-1,12,3,1,'#3A3A40')};
    siphon(42); siphon(48);
    // hanging leaf-shaped menu & lamp
    d.vline(56,0,4,'#3A2418'); d.poly([[53,5],[59,5],[58,9],[54,9]],'#F0C060'); d.hline(54,58,9,'#FFE8A0');
    d.vline(24,0,3,'#3A2418'); d.poly([[21,4],[27,4],[26,6],[22,6]],'#2E5A3A'); d.ell(24,7,1,1,'#FFE890');
    // framed old concert poster (wall)
    d.rect(27,9,7,8,'#3A2418'); d.rect(28,10,5,6,'#F0DCAC'); note(d,29,10,'#C06C1C');
    // small stage platform center
    d.rect(23,27,12,4,'#5A3820'); d.hline(23,34,27,'#8A5E36'); d.hline(23,34,30,'#3A2414');
    d.vline(29,18,26,'#2A2A30'); d.rect(28,17,3,2,'#B8C0CC'); d.line(27,26,31,26,'#2A2A30');
    // bar stool & table with coffee
    d.ell(50,31,6,1,'#5A3418'); d.vline(50,32,38,'#3A2414'); d.hline(47,53,38,'#3A2414');
    d.rect(48,28,4,3,'#F8F4EC'); d.px(52,29,'#F8F4EC'); d.hline(48,51,28,'#6A3418'); d.ell(50,31,3,0.4,'#F8F4EC');
    for(const [x,y] of [[49,26],[50,25],[49,24],[51,24]]) d.px(x,y,'#E8DED0');
    d.px(55,30,'#E0C090'); d.px(56,30,'#E0C090');
    // warm glow
    for(let x=0;x<64;x+=2) d.px(x,26,'#C89058');
  },
  // Big city club (DJ K.K.): neon skyline, light beams, disco ball, DJ booth with turntables
  'kk:c2': d=>{
    d.grad(0,0,64,30,['#120A2A','#1A0E38','#241246','#2E1654','#3A1A60']);
    // city skyline through club windows
    const bld=[[0,10,8],[7,6,7],[13,12,6],[19,4,6],[44,8,6],[50,3,7],[57,9,7]];
    for(const [x,y,w] of bld){d.rect(x,y,w,30-y,'#2A1A4A'); for(let yy=y+2;yy<28;yy+=3) for(let xx=x+1;xx<x+w-1;xx+=2) if(d.rnd()<.55) d.px(xx,yy,d.rnd()<.6?'#F8D878':'#78E8F8')}
    d.vline(53,0,2,'#F84888');
    // light beams
    const beam=(x0,x1,c)=>{for(let y=0;y<30;y++){const x=Math.round(x0+(x1-x0)*y/30); for(let k=-1;k<=1;k++) if((x+k+y)%2===0) d.px(x+k,y,c)}};
    beam(30,6,'#F848A8'); beam(34,60,'#48D8F8'); beam(32,40,'#B8F848');
    // disco ball
    d.vline(32,0,2,'#888898'); d.circ(32,6,4,'#C8CCD8'); for(let y=2;y<=10;y+=2) for(let x=28;x<=36;x++) if(((x-32)**2+(y-6)**2)<=17 && (x+y)%4===0) d.px(x,y,'#FFFFFF'); for(let x=28;x<=36;x+=3) d.vline(x,3,9,'#8890A8'); d.ell(30,4,1,1,'#FFFFFF');
    twinkle(d,26,9,'#FFFFFF'); twinkle(d,39,4,'#FFFFFF');
    // stage
    d.rect(0,26,64,14,'#1E1630');
    for(let y=27;y<40;y+=3) for(let x=((y/3)%2)*4;x<64;x+=8) d.rect(x,y,4,3,'#2A2044');
    d.rect(0,26,64,1,'#F848A8');
    // DJ booth (right-center)
    d.rect(32,22,26,9,'#2A2A38'); d.rect(32,22,26,2,'#4A4A60');
    d.hline(32,57,30,'#48D8F8');
    for(const cx of [37,52]) {d.ell(cx,23,4,1,'#18181E'); d.px(cx,23,'#F84888')}
    d.rect(43,22,4,2,'#3A3A50'); d.px(44,22,'#B8F848'); d.px(46,22,'#F8D878');
    // headphones resting
    d.ring(45,19,2,'#E84858'); d.rect(42,20,2,2,'#E84858'); d.rect(47,20,2,2,'#E84858'); d.rect(43,19,5,1,null);
    // booth front neon: dog face logo-ish note
    note(d,42,25,'#F848A8'); d.stamp(48,25,['ggg','g.g','ggg'],{g:'#48D8F8'});
    // speakers stacks
    for(const x of [59,26]) {d.rect(x,16,5,14,'#18141E'); d.circ(x+2,19,1.4,'#4A4458'); d.circ(x+2,25,2,'#4A4458'); d.px(x+2,25,'#18141E')}
    // confetti
    for(const [x,y,c] of [[4,30,'#F848A8'],[22,34,'#48D8F8'],[60,36,'#F8D878'],[40,36,'#B8F848'],[28,38,'#F848A8']]) d.px(x,y,c);
  },

  // ---------- APOLLO ----------
  // Paper parasol (wagasa) with raindrops
  'apollo:s0': d=>{
    const O='#2A1E1E',R='#D8404A',R2='#A82A36',R3='#F07078',RIB='#F8E8C8',H='#B88A50',H2='#7A5A30';
    // canopy — wide dome (wagasa), seen slightly from below
    for(let y=2;y<=16;y++) for(let x=1;x<=30;x++){const q=((x-16)/15.4)**2+((y-16)/14)**2; if(q<=1) d.px(x,y,x>22?R2:(x<9&&y<12)?R3:R)}
    // scalloped edge
    for(let x=1;x<=30;x++) if(x%4===2) d.clear(x,16);
    d.hline(2,29,15,R2);
    // ribs
    for(const x of [3,8,13,19,24,29]) d.line(16,3,x,15,RIB);
    d.ell(16,8,3,2,'#F8D8A0'); d.ell(16,8,2,1,R2);  // center ring
    // handle
    d.vline(16,16,27,H); d.vline(17,16,27,H2); d.rect(15,17,3,2,'#3A2A20'); d.rect(15,26,3,3,'#3A2A20'); d.px(16,29,'#3A2A20');
    d.rect(15,1,3,2,'#3A2A20');
    d.outline(O);
    leaf(d,20,9,'#F8E8C8','#E8C890');
    // raindrops & puddle
    for(const [x,y] of [[3,20],[8,24],[25,21],[29,26],[22,27],[1,27],[11,19]]) {d.px(x,y,'#7AB8E8'); d.px(x,y+1,'#4A90D0')}
    d.ell(10,30,5,1,'#9AC8F0'); d.hline(8,12,30,'#C8E4F8');
  },
  // Black flight jacket: leather bomber with fur collar, zipper, wing patch
  'apollo:s1': d=>{
    const O='#141418',B='#2A2A32',B2='#3E3E4A',B3='#5A5A6A',F='#E8DCC0',F2='#C4B494',Z='#C8C8D0',Y='#F8C830';
    // body
    d.poly([[9,6],[23,6],[25,27],[7,27]],B);
    // sleeves
    d.poly([[9,6],[3,10],[1,25],[6,26],[8,14]],B); d.poly([[23,6],[29,10],[31,25],[26,26],[24,14]],B);
    // shading
    d.poly([[3,10],[5,11],[3,24],[1,25]],B2); d.vline(10,10,25,B2); d.vline(22,10,25,B3); d.vline(23,12,24,B2);
    // ribbed cuffs & waistband
    for(const [x] of [[1],[26]]) {d.rect(x,24,5,3,B3); for(let i=x;i<x+5;i+=2) d.vline(i,24,26,B2)}
    d.rect(7,26,19,3,B3); for(let x=7;x<26;x+=2) d.vline(x,26,28,B2);
    // fur collar
    d.poly([[8,4],[16,9],[24,4],[24,8],[16,13],[8,8]],F); d.line(9,7,15,11,F2); d.line(23,7,17,11,F2); d.rect(13,3,6,2,F); d.hline(13,18,4,F2);
    // zipper
    d.vline(16,12,26,Z); for(let y=13;y<26;y+=2) d.px(15,y,'#8A8A98'); d.rect(16,15,2,2,Z);
    // pockets
    d.line(10,19,13,22,B3); d.line(22,19,19,22,B3);
    // feather/wing patch (yellow, for an eagle) & star badge
    d.stamp(18,12,['yyyy.','.yyyy','..yyy','...y.'],{y:Y}); d.px(18,12,'#E09A10');
    d.stamp(9,12,['.w.','www','.w.'],{w:'#E84A4A'});
    d.outline(O);
    d.px(4,13,'#7A7A88'); d.px(4,14,'#7A7A88'); d.px(11,10,'#6A6A7A');
  },
  // Eagle feather medal: ribbon, gold medal, feather across
  'apollo:s2': d=>{
    const O='#2A1E14',RB='#2E4A9A',RB2='#22387A',RR='#D84040',G='#F2C640',G2='#C89420',G3='#FFF0A0';
    // ribbon V
    d.poly([[8,1],[14,1],[18,13],[13,13]],RB); d.poly([[24,1],[18,1],[14,13],[19,13]],RB2);
    d.line(10,1,15,12,RR); d.line(22,1,17,12,RR);
    d.rect(11,12,10,3,G2); d.hline(11,20,12,G);
    // medal
    d.circ(16,22,8,G2); d.circ(16,22,7,G); d.ring(16,22,5,G2); d.ell(13,19,2,2,G3);
    // feather (white-tipped brown, eagle)
    const FW='#F4F2EC',FB='#8A6A48',FB2='#5E4630';
    d.line(10,29,22,16,'#4A3A2A');
    d.poly([[13,25],[18,18],[22,15],[22,17],[20,22],[15,27]],FB); d.poly([[13,25],[14,20],[18,17],[22,15],[18,18]],FB2);
    d.poly([[20,17],[22,15],[24,15],[23,18]],FW);
    for(const [x,y] of [[16,23],[18,21],[15,22]]) d.px(x,y,FB2);
    // laurel leaves around bottom
    leaf(d,6,23,'#5AAA50','#3A8040'); leaf(d,22,24,'#5AAA50','#3A8040');
    d.outline(O);
    twinkle(d,28,8,'#FFF0A0'); twinkle(d,4,9,'#FFF0A0');
  },
  // Outside Apollo's house: sunny island, dark-roofed cabin, garden table with one teacup, cliff sea
  'apollo:c0': d=>{
    d.grad(0,0,64,16,['#7CCBF0','#90D4F2','#A8DEF4','#C0E8F6']);
    d.ell(10,4,5,2,'#FFFFFF'); d.ell(40,3,6,2,'#FFFFFF'); d.ell(43,2,3,1,'#FFFFFF');
    // sea glimpse
    d.rect(0,13,64,4,'#3AA8D0'); for(let x=2;x<64;x+=7) d.hline(x,x+2,14,'#8AD4EC');
    // grass ground
    d.rect(0,17,64,23,'#7CC85A'); d.hline(0,63,17,'#5AAA48');
    // NH grass triangle texture
    for(let y=20;y<40;y+=4) for(let x=((y/4)%2)*4;x<64;x+=8) d.stamp(x,y,['.g.','g.g'],{g:'#6AB850'});
    // dirt path to house
    d.poly([[44,27],[50,27],[60,40],[48,40]],'#D8BC88'); d.hline(45,50,27,'#C8A870');
    // house: wooden walls, dark slate roof (cranky eagle vibe)
    d.rect(36,13,22,14,'#B08058'); for(let y=15;y<27;y+=3) d.hline(36,57,y,'#946844');
    d.poly([[33,14],[47,3],[61,14]],'#3A3A4A'); d.poly([[47,3],[61,14],[56,14],[47,6]],'#2A2A36'); d.hline(33,61,14,'#22222C');
    d.rect(52,5,3,6,'#6A5A5A'); d.rect(51,4,5,1,'#4A3A3A');
    d.rect(45,19,5,8,'#5A3A22'); d.px(48,23,'#F8C830'); d.rect(45,18,5,1,'#3A2414');
    d.rect(38,17,5,4,'#A8DCF0'); d.vline(40,17,20,'#F4F2EC'); d.hline(38,42,19,'#F4F2EC'); d.frame(37,16,7,6,'#F4F2EC');
    d.rect(52,17,4,4,'#A8DCF0'); d.frame(51,16,6,6,'#F4F2EC');
    // stars-and-stripes-ish flag? keep: house nameplate with feather
    d.rect(44,10,7,2,'#F4F2EC'); d.stamp(46,10,['bbb.','.bbb'],{b:'#8A6A48'});
    // mailbox
    d.vline(32,22,28,'#7A5A3A'); d.rect(30,19,5,4,'#D84A4A'); d.px(35,19,'#F8C830'); d.px(35,20,'#F8C830');
    // garden table with one teacup
    d.ell(56,30,5,1,'#F4F2EC'); d.vline(56,31,35,'#C8C4BC'); d.hline(54,58,35,'#C8C4BC');
    d.rect(54,27,3,2,'#F8F8F8'); d.px(57,28,'#F8F8F8'); d.px(55,27,'#A86A3A'); d.hline(53,57,29,'#E0D8C8');
    d.px(55,25,'#FFFFFF'); d.px(56,24,'#FFFFFF');
    d.rect(61,30,3,1,'#8A5E36'); d.vline(62,31,35,'#8A5E36'); d.vline(61,26,30,'#8A5E36');
    // fruit tree (left back) and flowers
    d.vline(4,10,18,'#7A5A3A'); d.circ(4,8,5,'#3E9A48'); d.circ(3,7,3,'#56B058'); d.px(2,9,'#F07040'); d.px(6,7,'#F07040'); d.px(5,10,'#F07040');
    for(const [x,y,c] of [[26,32,'#F06080'],[29,35,'#F8D048'],[38,30,'#FFFFFF'],[36,36,'#F06080'],[24,38,'#FFFFFF']]) {d.stamp(x-1,y-1,['.c.','cyc','.c.'],{c,y:'#F8E070'})}
    // pine bush
    d.poly([[62,17],[64,13],[64,26],[59,26]],'#3E8A48');
  },
  // Mountaintop rock at sunset: sea of clouds, island below, flat summit rock, feather + notes
  'apollo:c1': d=>{
    d.grad(0,0,64,24,['#4A3A78','#7A4A88','#B85A88','#E8786A','#F8A060','#FCC878']);
    d.circ(22,16,5,'#FFE8A0'); d.circ(22,16,3,'#FFF6D0');
    // sea of clouds
    d.rect(0,18,64,6,'#F8C0A0');
    for(const [x,y,r] of [[4,18,4],[13,19,3],[34,18,5],[46,19,3],[58,18,4]]) d.ell(x,y,r+2,2,'#FCD8C0');
    for(const x of [8,40]) d.hline(x,x+8,21,'#F8E0D0');
    // distant small island peeking
    d.poly([[26,22],[30,19],[34,22]],'#7A5A78'); d.px(30,18,'#4A8A58');
    // far ridges
    d.poly([[0,26],[8,20],[16,24],[24,22],[30,26]],'#6A4A6E');
    // main mountain right: big rocky peak with flat summit rock
    d.poly([[22,40],[40,14],[50,12],[64,22],[64,40]],'#6A5A6A');
    d.poly([[40,14],[50,12],[64,22],[64,40],[52,40],[46,22]],'#4E4258');
    d.poly([[40,14],[43,14],[30,34],[26,40],[22,40]],'#8A7484');
    // summit rock
    d.ell(46,12,7,3,'#9A8A90'); d.ell(45,11,5,2,'#B8A8A8'); d.hline(40,52,14,'#5A4A5A');
    // sunlit edge
    d.line(40,15,30,30,'#E8A080'); d.line(46,9,50,9,'#F8C8A0');
    // foreground ground (rocky plateau, lower-left)
    d.rect(0,30,64,10,'#7A6A6A'); d.poly([[0,28],[10,27],[24,29],[30,31],[0,32]],'#8A7878');
    d.hline(0,63,30,'#9A8888'); for(const [x,y] of [[3,34],[14,37],[26,35],[36,38],[44,33],[58,36]]) {d.hline(x,x+2,y,'#5E5050'); d.px(x+1,y-1,'#A89898')}
    d.poly([[22,40],[40,14],[43,14],[32,30],[30,40]],'#8A7484'); d.rect(0,30,30,10,'#7A6A6A'); d.hline(0,30,30,'#9A8888');
    for(const [x,y] of [[3,34],[14,37],[26,35]]) {d.hline(x,x+2,y,'#5E5050'); d.px(x+1,y-1,'#A89898')}
    // alpine flowers and a dropped eagle feather on the summit
    d.stamp(42,8,['..ww','.bww','bbb.','b...'],{w:'#F4F2EC',b:'#8A6A48'});
    for(const [x,y] of [[34,32],[39,36],[28,38]]) {d.px(x,y,'#F8E070'); d.px(x+1,y,'#F8F0FF')}
    // floating song notes
    note(d,52,2,'#FFF0D0'); note(d,58,6,'#FFE0B0'); note(d,34,4,'#FFD8C8');
    // birds
    for(const [x,y] of [[8,6],[13,4]]) d.stamp(x,y,['c.c','.c.'],{c:'#3A2A48'});
  },
  // Moon landing marker: grey moon surface, earth (leafy island globe), lander, flag, plaque, footprints
  'apollo:c2': d=>{
    d.rect(0,0,64,40,'#0C0E22'); d.grad(0,0,64,20,['#080A1A','#0C0E22','#121630']);
    stars(d,40,0,0,63,22,['#FFFFFF','#C8D8FF','#FFF4C0']);
    twinkle(d,10,6,'#FFF4C0'); twinkle(d,40,4,'#C8D8FF');
    // Earth
    d.circ(54,7,5,'#3A8AD8'); d.ell(52,6,2,2,'#5AB860'); d.ell(56,9,2,1,'#5AB860'); d.px(55,4,'#5AB860'); d.ell(57,4,1,0.6,'#FFFFFF'); d.ell(51,9,1,0.5,'#FFFFFF');
    for(let y=2;y<=12;y++) for(let x=55;x<=60;x++) if(((x-54)**2+(y-7)**2)<=29 && x+y>63) d.px(x,y,d.get(x,y)==='#3A8AD8'?'#2A64A8':'#3E8A48');
    // moon surface
    d.poly([[0,24],[12,22],[30,23],[48,21],[64,22],[64,40],[0,40]],'#A8A8B4');
    d.poly([[30,23],[48,21],[64,22],[64,26],[40,25]],'#C4C4CE');
    d.rect(0,28,64,12,'#9898A6'); d.hline(0,63,28,'#A8A8B4');
    for(let i=0;i<20;i++) d.px(d.ri(0,63),d.ri(25,39),d.rnd()<.5?'#86869A':'#B8B8C4');
    // craters
    for(const [x,y,r] of [[4,25,3],[28,36,3],[58,35,4],[36,26,2]]) {d.ell(x,y,r,r/3+.5,'#7A7A8C'); d.hline(x-r+1,x+r-1,y-1,'#6A6A7C'); d.hline(x-r+1,x+r,y+Math.ceil(r/3),'#C8C8D2')}
    // lunar lander (gold foil)
    const GF='#E8B030',GF2='#B88010',SL='#C8C8D2',SL2='#8A8A98';
    d.rect(42,18,10,6,GF); d.dither(42,18,10,6,GF,'#F0C850'); d.rect(48,18,4,6,GF2);
    d.poly([[43,12],[51,12],[52,18],[42,18]],SL); d.rect(48,12,4,6,SL2); d.rect(44,13,3,3,'#2A2A40'); d.px(44,13,'#8AA8E8');
    d.line(42,23,38,29,SL2); d.line(51,23,55,29,SL2); d.line(46,24,46,29,SL2);
    for(const x of [37,45,54]) d.hline(x,x+2,29,SL);
    d.vline(47,9,11,SL2); d.px(47,8,'#E84848');
    // flag with eagle feather emblem
    d.vline(32,12,28,'#E8E8EC'); d.rect(33,12,8,5,'#F4F2EC'); d.rect(33,12,8,1,'#2E4A9A');
    d.stamp(35,13,['..bw','.bb.','bb..'],{b:'#8A6A48',w:'#2A2420'}); d.hline(33,40,16,'#D84040');
    // memorial plaque
    d.rect(55,28,6,4,'#C8A048'); d.frame(55,28,6,4,'#8A6A20'); d.hline(56,59,29,'#8A6A20'); d.hline(56,58,30,'#8A6A20'); d.rect(57,32,2,3,'#7A7A8C');
    // talon footprints leading from left to flag
    for(const [x,y] of [[23,33],[26,31],[29,30],[24,36]]) d.stamp(x,y,['c.c','.c.'],{c:'#6A6A7C'});
  },
};
