// art_pk0: Pikmin — red, yellow, blue, purple, white
const ball=(d,cx,cy,rx,ry,tones,lx=-0.55,ly=-0.65)=>{
  for(let y=Math.floor(cy-ry-1);y<=Math.ceil(cy+ry+1);y++)for(let x=Math.floor(cx-rx-1);x<=Math.ceil(cx+rx+1);x++){
    const nx=(x-cx)/(rx+.4), ny=(y-cy)/(ry+.4), r2=nx*nx+ny*ny; if(r2>1) continue;
    const nz=Math.sqrt(1-r2), l=(nx*lx+ny*ly)+nz*0.55;
    const i=Math.max(0,Math.min(tones.length-1,Math.floor((l+0.35)/1.45*tones.length)));
    d.px(x,y,tones[i]);
  }
};
const cloud=(d,x,y,w,c,s)=>{const h=Math.max(2,Math.round(w/4));
  d.ell(x+w/2,y+h,w/2,h/2+0.5,c); d.circ(x+w*0.35,y+h*0.6,h*0.75,c); d.circ(x+w*0.62,y+h*0.45,h*0.9,c);
  if(s) d.hline(Math.round(x+2),Math.round(x+w-2),Math.round(y+h+h/2),s);};
const sparkle=(d,x,y,c,w)=>{d.stamp(x-2,y-2,['..y..','..y..','yyWyy','..y..','..y..'],{y:c,W:w||'#FFFFFF'})};
const twinkle=(d,x,y,c)=>{d.px(x,y,'#FFFFFF'); d.px(x-1,y,c); d.px(x+1,y,c); d.px(x,y-1,c); d.px(x,y+1,c)};
// grass blade: base x,y, height h, lean dir
const blade=(d,x,y,h,lean,c,c2)=>{for(let j=0;j<h;j++){const xx=x+Math.round(lean*j*j/(h*h)*3); d.px(xx,y-j,c); if(j<h-2&&c2) d.px(xx+1,y-j,c2)}};
// tiny pellet posy: stem + disc flower with pellet
const posy=(d,x,y,h,col,col2)=>{d.vline(x,y-h,y,'#3E9A3A'); d.px(x+1,y-3,'#58B848'); d.px(x+2,y-4,'#58B848'); d.px(x-1,y-5,'#58B848'); d.px(x-2,y-6,'#58B848');
  const t=y-h; for(const [a,b] of [[-3,0],[3,0],[0,-3],[-2,-2],[2,-2],[-2,2],[2,2]]) d.circ(x+a,t+b,1.2,'#F4F0E0'); d.circ(x,t,2,col); d.px(x-1,t-1,col2)};

const ART={
  // ---------------- RED ----------------
  'pkred:s0': d=>{ // flat pellet disc with "1"
    const R1='#8E1A22', R2='#C42A30', R3='#E8484A', R4='#FF7A6E', W='#FFF3E8';
    d.ell(16,19,13,9,R1);              // side thickness
    d.rect(3,15,27,5,R1);
    d.ell(16,15,13,9,R2);              // top face
    d.ell(16,15,11,7,R3);
    for(let a=0;a<64;a++){const t=a/64*Math.PI*2; d.px(16+Math.cos(t)*11.5,15+Math.sin(t)*7.5,R2)}
    d.ell(16,15,10,6,R3);
    for(let a=0;a<20;a++){const t=Math.PI*1.05+a/20*Math.PI*0.55; d.px(16+Math.cos(t)*9,15+Math.sin(t)*5.5,R4); d.px(16+Math.cos(t)*8,15+Math.sin(t)*4.5,R4)}
    // number 1 with shadow
    d.stamp(14,9,['.WWs','WWWs','sWWs','.WWs','.WWs','.WWs','.WWs','.WWs','WWWWs','.ssss'],{W,s:R1});
    // side shading bands
    d.hline(6,26,24,'#6E1018'); d.hline(9,23,26,'#6E1018');
    d.px(5,19,R2); d.px(6,20,R2); d.px(4,17,R2);
    d.px(7,10,'#FFFFFF'); d.px(8,9,'#FFFFFF'); d.px(10,8,'#FFFFFF');
    d.outline('#3A0A10');
    sparkle(d,27,5,'#FFD0C0');
  },
  'pkred:s1': d=>{ // candle in hand-sized brass holder, big flame
    const O='#3A1E14', W1='#F6E8C8', W2='#E4CCA0', W3='#FFFBEA', B1='#B07A2A', B2='#D8A440', B3='#F8D878';
    // holder
    d.ell(16,27,11,3,B1); d.ell(16,26,11,3,B2); d.ell(16,25,8,2,B1); d.ell(15,25,5,1,B3);
    d.rect(26,24,4,2,B2); d.circ(29,23,2,B2); d.circ(29,23,1,null); d.px(29,23,null);
    // candle body
    d.rect(12,10,9,15,W1); d.vline(19,10,24,W2); d.vline(20,10,24,W2); d.vline(13,11,23,W3);
    // drips
    d.vline(12,10,15,W3); d.rect(11,10,2,6,W1); d.px(11,16,W1);
    d.rect(17,10,2,9,W1); d.px(17,19,W1); d.vline(18,11,18,W2);
    d.hline(12,20,10,W3);
    d.px(21,11,W1); d.px(21,12,W2);
    // wick
    d.vline(16,7,9,'#3A2A20');
    // flame
    d.ell(16,5,3,4,'#F06A20'); d.poly([[13,5],[16,-1],[19,5]],'#F06A20');
    d.ell(16,6,2,3,'#FFB028'); d.px(16,1,'#FFB028'); d.px(16,2,'#FFB028');
    d.ell(16,7,1,1.5,'#FFF4B0');
    d.outline(O);
    d.circ(29,23,1,null); d.px(28,23,O);
    // glow sparks
    d.px(9,4,'#FFB028'); d.px(23,3,'#FFB028'); d.px(24,7,'#F06A20'); d.px(8,8,'#F06A20');
  },
  'pkred:s2': d=>{ // little iron brazier with coals and flames
    const O='#1E1418', I1='#3A3440', I2='#5C5464', I3='#8A8296', C='#FF6A20', C2='#FFB830', C3='#FFF0A0', E='#B02A1A';
    // legs
    d.line(9,22,5,30,I1); d.line(10,22,6,30,I2); d.line(23,22,27,30,I1); d.line(22,22,26,30,I2); d.rect(15,24,3,6,I1); d.vline(16,24,29,I2);
    d.hline(4,7,30,I1); d.hline(25,28,30,I1); d.hline(14,18,30,I1);
    // bowl
    d.poly([[4,13],[28,13],[24,23],[8,23]],I2); d.hline(9,23,23,I1); d.hline(7,25,21,I1);
    d.poly([[6,15],[10,15],[10,22],[9,22]],I3);
    d.rect(3,12,26,3,I3); d.hline(3,28,14,I2); d.hline(4,27,12,'#B0A8BC');
    // rivets / embers glow pattern
    for(const x of [9,14,19,24]) d.px(x,17,E); for(const x of [11,17,22]) d.px(x,19,'#7A2016');
    // coals
    d.ell(16,11,11,2,E); for(const [x,y] of [[8,10],[12,9],[17,10],[22,9],[25,11],[14,11],[20,11]]) {d.circ(x,y,1.5,'#3A2228'); d.px(x,y,C)}
    // flames
    d.poly([[8,11],[11,2],[13,11]],C); d.poly([[13,11],[16,-1],[20,11]],C); d.poly([[19,11],[22,3],[25,11]],C);
    d.poly([[10,11],[11,5],[12,11]],C2); d.poly([[15,11],[16,3],[18,11]],C2); d.poly([[21,11],[22,6],[23,11]],C2);
    d.vline(16,6,10,C3); d.vline(17,8,10,C3);
    d.outline(O);
    // warmth wisps
    d.px(5,4,'#FFB830'); d.px(4,6,'#FFB830'); d.px(28,3,'#FFB830'); d.px(27,6,'#FF6A20');
  },
  'pkred:c0': d=>{ // sunny garden from bug height: giant daisy, clover, pellet posy, garden fence far
    d.grad(0,0,64,18,['#7CC6F2','#92D0F4','#A8DAF4','#BEE4F2']);
    d.circ(8,4,4,'#FFF2A0'); d.circ(8,4,3,'#FFFCE0');
    for(let i=0;i<5;i++){d.line(8,4,8+[7,6,0,-6,7][i],4+[0,5,7,5,-4][i],'#FFF2A0')}
    cloud(d,24,2,11,'#FFFFFF'); cloud(d,42,5,8,'#FFFFFF');
    // far wooden fence
    d.rect(0,13,64,6,'#C89A68'); for(let x=1;x<64;x+=5){d.rect(x,11,4,8,'#D8AE7C'); d.px(x+1,11,'#C89A68'); d.vline(x+3,12,18,'#B4865A')}
    d.hline(0,63,14,'#B4865A');
    // hedge
    for(let x=-2;x<66;x+=6) d.circ(x,18,3.5,'#4E9E3E'); for(let x=1;x<66;x+=6) d.circ(x,17,2.5,'#62B24A');
    // ground
    d.grad(0,20,64,20,['#78C050','#6CB848','#62AE40','#58A43A']);
    for(let i=0;i<70;i++){const x=d.ri(0,63),y=d.ri(22,39); if(x>=5&&x<=22&&y>=20) continue; d.px(x,y,d.rnd()<.5?'#8ED062':'#4E9A36')}
    // tall blades back
    for(const [x,h,l] of [[24,14,1],[27,10,-1],[60,16,-1],[62,11,1],[3,8,1],[33,7,1]]) blade(d,x,32,h,l,'#4E9E3E','#6CBC4A');
    // giant daisy
    d.vline(46,14,37,'#3E8E34'); d.vline(47,14,37,'#56A844');
    d.poly([[47,30],[54,25],[56,27],[48,32]],'#4E9E3E'); d.line(48,31,55,26,'#6CBC4A');
    d.poly([[46,24],[39,20],[38,22],[45,26]],'#4E9E3E');
    for(let a=0;a<12;a++){const t=a/12*Math.PI*2; d.ell(46+Math.cos(t)*6,11+Math.sin(t)*4,2.2,1.6,'#FFFFFF')}
    for(let a=0;a<12;a++){const t=a/12*Math.PI*2+.26; d.px(46+Math.cos(t)*7,11+Math.sin(t)*4.5,'#E4E8EE')}
    d.ell(46,11,3,2,'#F8C828'); d.ell(45,10,1.5,1,'#FFE878'); d.px(48,12,'#D89A18');
    // clover patch right
    for(const [x,y] of [[56,34],[60,31]]){ for(const [a,b] of [[-2,0],[2,0],[0,-2]]) d.circ(x+a,y+b,1.6,'#3E9A3A'); d.px(x,y,'#7ACC5A'); d.vline(x,y+1,y+4,'#3E8E34')}
    // pellet posy with red pellet
    posy(d,32,37,12,'#E83A3A','#FF8070');
    // a red pellet fallen on the ground + leaf
    d.ell(38,35,3,1.5,'#B02A2A'); d.ell(38,34,3,1.5,'#E83A3A'); d.px(38,34,'#FFFFFF'); d.px(37,33,'#FF8070');
    // ladybug on daisy leaf
    d.stamp(52,25,['.kk','rkr','rrk'],{k:'#2A1A1A',r:'#E83A3A'});
    // butterfly
    d.stamp(56,15,['y.y','.k.','y.y'],{y:'#F8A0C8',k:'#5A3A4A'});
  },
  'pkred:c1': d=>{ // lava cave: dark rock arch, glowing lava river, fire geyser
    d.grad(0,0,64,40,['#2A1418','#3A1A1C','#4A2020','#5A2620','#6E3022']);
    // back glow
    d.ell(44,22,22,14,'#7A3420'); d.ell(44,24,16,9,'#A04424'); d.ell(44,26,10,5,'#C85A28');
    // stalactites
    for(const [x,w,h] of [[4,4,6],[12,3,9],[20,5,5],[30,3,8],[38,4,4],[48,3,10],[56,5,6],[62,3,7]]) d.poly([[x-w,0],[x+w,0],[x,h]],'#2A1416');
    for(const [x,h] of [[12,9],[30,8],[48,10]]) d.line(x-1,1,x,h-1,'#4A2622');
    // right rock wall + pillar
    d.poly([[52,40],[56,14],[60,10],[64,8],[64,40]],'#3A1E1C'); d.poly([[56,16],[60,11],[61,24],[58,40],[55,40]],'#4E2A24'); d.vline(57,18,36,'#6A3828');
    // far rocky ridge
    d.poly([[22,26],[28,20],[34,23],[40,18],[46,22],[52,19],[56,26]],'#4A2420');
    // lava river middle
    d.poly([[22,27],[56,25],[60,31],[30,32],[22,31]],'#E05020');
    d.grad(24,27,32,2,['#F07828','#E86020']);
    for(const [x,y] of [[28,28],[36,29],[44,27],[50,28],[33,30],[47,30]]) {d.hline(x,x+3,y,'#FFB040'); d.px(x+1,y,'#FFE890')}
    // lava crust ellipses
    d.ell(40,29,2,1,'#7A2A18'); d.ell(52,29,1.5,.8,'#7A2A18');
    // fire geyser
    d.poly([[36,26],[38,8],[42,8],[44,26]],'#F06A20'); d.poly([[38,26],[39,11],[41,11],[42,26]],'#FFB030'); d.vline(40,13,25,'#FFF0A0');
    d.ell(40,8,4,2,'#F06A20'); d.ell(40,8,2,1,'#FFB030'); for(const [x,y] of [[35,5],[38,3],[42,3],[45,5],[36,9],[44,9]]) d.px(x,y,'#F06A20'); d.px(40,5,'#FFB030'); d.px(40,4,'#F06A20');
    d.px(34,10,'#FFB030'); d.px(46,12,'#FFB030'); d.px(35,15,'#F06A20');
    // vent rock
    d.poly([[34,27],[37,23],[43,23],[46,27]],'#3A1E1C'); d.hline(37,43,23,'#7A3A28');
    // floor rock (foreground, pet area)
    d.rect(0,32,64,8,'#4A2622'); d.poly([[0,24],[10,22],[22,25],[24,33],[0,33]],'#4A2622');
    d.grad(0,33,64,7,['#5A2E26','#4E2824','#42221E']);
    d.hline(0,23,24,'#7A3E2C'); d.hline(22,63,32,'#8A4430');
    for(const [x,y] of [[3,30],[26,36],[34,38],[44,35],[52,37],[60,34],[16,39]]) {d.hline(x,x+2,y,'#6E3A2C')}
    // glowing cracks
    d.line(30,35,36,37,'#E05020'); d.line(36,37,40,36,'#E05020'); d.line(48,38,54,36,'#C84020');
    // embers
    for(const [x,y] of [[26,14],[30,19],[50,15],[33,8],[47,6],[24,20]]) d.px(x,y,'#FFB040');
    // treasure: bottle cap near lava (right)
    d.ell(49,34,4,1.5,'#A87A20'); d.ell(49,33,4,1.5,'#F0C040'); d.ell(49,33,2,.6,'#C89020'); for(const x of [45,47,49,51,53]) d.px(x,35,'#7A5418'); d.px(46,32,'#FFF4B0');
  },
  'pkred:c2': d=>{ // faraway planet: purple sky, ringed planet, red Onion on three legs, ship crater
    d.grad(0,0,64,26,['#140C2E','#1E1240','#2A1852','#3A2066','#4E2C78','#6A3A86']);
    for(let i=0;i<30;i++) d.px(d.ri(0,63),d.ri(0,18),d.rnd()<.6?'#B0A8F0':'#FFFFFF');
    twinkle(d,6,4,'#B0A8F0'); twinkle(d,30,3,'#B0A8F0');
    // ringed planet
    ball(d,15,9,5,5,['#3A6AA8','#4E8AC8','#70ACE0','#9ACCF0']);
    d.line(6,12,24,6,'#F0D890'); d.line(7,13,25,7,'#C8A860'); d.ell(15,9,5,5,null); ball(d,15,9,5,5,['#3A6AA8','#4E8AC8','#70ACE0','#9ACCF0']); d.line(8,11,9,11,'#F0D890'); d.line(20,8,24,6,'#F0D890'); d.line(21,9,25,7,'#C8A860');
    d.line(9,12,14,10.6,'#F0D890');
    // tiny moon
    d.circ(54,5,2,'#F0E0F8'); d.px(53,4,'#FFFFFF');
    // shooting star
    d.line(36,3,41,5,'#FFE8A0'); d.px(42,5,'#FFFFFF');
    // far mesas
    d.poly([[0,26],[6,20],[14,22],[22,18],[30,24],[38,21],[46,23],[54,17],[64,22],[64,26]],'#5A2C5A');
    // alien ground
    d.grad(0,25,64,15,['#B0507A','#A04870','#904068','#803860']);
    for(const [x,y,r] of [[10,30,3],[30,36,2.5],[58,37,3]]) {d.ell(x,y,r,r/2.5,'#7A3058'); d.hline(x-r+1,x+r-1,y-1,'#C06688')}
    for(let i=0;i<30;i++){const x=d.ri(0,63),y=d.ri(26,39); if(x>=5&&x<=22&&y>=20) continue; d.px(x,y,d.rnd()<.5?'#C8608A':'#783058')}
    // glowing alien plants
    for(const [x,h] of [[27,6],[61,5]]){d.vline(x,30-h,30,'#3AA88A'); d.circ(x,29-h,1.5,'#7AF0D0'); d.px(x,29-h,'#FFFFFF')}
    // Red Onion: bulb on three legs with flower on top
    const ox=44, oy=13;
    d.line(ox-5,oy+4,ox-11,32,'#5A3A2A'); d.line(ox+5,oy+4,ox+11,32,'#5A3A2A'); d.line(ox,oy+5,ox+1,33,'#6E4A34');
    d.line(ox-6,oy+4,ox-12,32,'#6E4A34'); d.line(ox+4,oy+4,ox+10,32,'#6E4A34');
    d.hline(ox-14,ox-10,32,'#5A3A2A'); d.hline(ox+9,ox+13,32,'#5A3A2A'); d.hline(ox-1,ox+3,33,'#5A3A2A');
    ball(d,ox,oy,8,6,['#8E1A22','#C42A30','#E8484A','#FF7A6E']);
    d.hline(ox-7,ox+7,oy+3,'#8E1A22'); d.hline(ox-5,ox+5,oy+5,'#6E1018');
    for(const x of [ox-4,ox,ox+4]) d.px(x,oy+4,'#FFD040');
    // onion stem + flower
    d.vline(ox,oy-9,oy-6,'#3E9A3A'); for(let a=0;a<5;a++){const t=a/5*Math.PI*2-Math.PI/2; d.circ(ox+Math.cos(t)*2.2,oy-10+Math.sin(t)*2,1.1,'#FFFFFF')} d.px(ox,oy-10,'#F8C828'); d.px(ox+1,oy-10,'#F8C828'); d.px(ox-1,oy-7,'#58B848'); d.px(ox+1,oy-7,'#58B848');
    // tractor beam
    for(let y=oy+7;y<=30;y++){const w=Math.round((y-oy-7)/4); for(let x=ox-w;x<=ox+w;x++) if((x+y)%2===0) d.px(x,y,'#FFE8A0')}
    d.ell(ox,31,4,1,'#FFE8A0');
    // footprints-ish little seeds
    d.px(ox-2,34,'#FFFFFF'); d.px(ox+3,35,'#FFFFFF');
  },
  // ---------------- YELLOW ----------------
  'pkyellow:s0': d=>{ // AA battery, tilted, with zaps
    const O='#1E1A24', Y1='#C89A10', Y2='#F4C828', Y3='#FFE878', K1='#24222C', K2='#3E3C4A', K3='#5E5C6E', M1='#8A8A96', M2='#C8C8D4', M3='#F0F0F8';
    // draw upright on an offscreen grid then rotate ~ -35deg into canvas
    const g={}; const put=(x,y,c)=>{g[x+','+y]=c};
    for(let y=0;y<24;y++)for(let x=0;x<10;x++){let c;
      if(y<1) c=(x>=3&&x<=6)?(x===4?M3:M2):null; else if(y<2) c=(x>=3&&x<=6)?M1:null;
      else if(y<3) c=x===0||x===9?M1:(x<3?M3:M2);
      else if(y<14) c=x===0?Y3:x<3?Y3:x<7?Y2:Y1; else if(y<15) c=K1;
      else if(y<23) c=x<2?K3:x<6?K2:K1; else c=x<3?M2:M1;
      if(y<14&&y>=3&&x===1) c='#FFF6C0';
      if(c) put(x,y,c)}
    // + sign and bolt
    for(const [x,y] of [[5,4],[4,5],[5,5],[6,5],[5,6]]) put(x,y,O);
    for(const [x,y] of [[5,8],[4,9],[5,9],[4,10],[5,10],[6,10],[5,11],[4,12]]) put(x,y,'#E8481A');
    for(const [x,y] of [[4,18],[5,18],[6,18]]) put(x,y,M3);
    const a=-0.62, ca=Math.cos(a), sa=Math.sin(a);
    for(let y=0;y<32;y++)for(let x=0;x<32;x++){const u=x-16, v=y-16; const sx=Math.round(u*ca+v*sa+4.5), sy=Math.round(-u*sa+v*ca+11.5); const c=g[sx+','+sy]; if(c) d.px(x,y,c)}
    d.outline(O);
    // zaps
    const Z='#FFF060', Z2='#7AE0FF';
    d.stamp(3,3,['z...','.zz.','..z.','.zz.','z...'],{z:Z});
    d.stamp(25,22,['..z','.z.','zzz','.z.','z..'],{z:Z2});
    d.px(27,4,Z); d.px(28,5,Z); d.px(27,6,Z); d.px(4,26,Z2); d.px(5,27,Z2);
  },
  'pkyellow:s1': d=>{ // bomb rock: round grey stone with fuse (out) and red light
    const O='#1C1A22';
    ball(d,15,18,11,11,['#4A4654','#646070','#80808E','#9C9CAA','#BCBCC8']);
    // cracks / stone facets
    d.line(8,14,12,17,'#4A4654'); d.line(12,17,11,21,'#4A4654'); d.line(19,24,23,21,'#4A4654'); d.line(18,10,21,12,'#5A5664');
    d.px(9,25,'#4A4654'); d.px(22,15,'#5A5664');
    // metal band
    for(let x=4;x<=26;x++){const y=18+Math.round(Math.sqrt(Math.max(0,121-(x-15)**2))*0.22); d.px(x,y,'#3A3644'); d.px(x,y-1,'#7A6A44')}
    // red light
    d.circ(15,20,2,'#B02020'); d.circ(15,20,1,'#F04040'); d.px(14,19,'#FFB0A0');
    // fuse cap
    d.rect(13,5,5,3,'#5A4A3A'); d.hline(13,17,5,'#8A7458'); d.rect(14,7,3,1,'#3A3030');
    // fuse (unlit, curled)
    d.line(15,4,16,2,'#C8A060'); d.line(16,2,19,1,'#C8A060'); d.px(20,2,'#C8A060'); d.px(20,3,'#3A3030');
    d.outline(O);
    // puff of smoke (out)
    d.circ(25,4,1.5,'#D8D8E0'); d.circ(28,2,1,'#E8E8F0'); d.px(23,5,'#D8D8E0');
    d.px(9,13,'#E0E0EA'); d.px(8,14,'#E0E0EA'); d.px(10,12,'#E0E0EA');
  },
  'pkyellow:s2': d=>{ // glowing light bulb
    const O='#2A2420';
    // glow halo
    d.circ(16,12,13,'#FFF6C8'); for(let a=0;a<16;a++){const t=a/16*Math.PI*2; if(a%2) d.circ(16+Math.cos(t)*12,12+Math.sin(t)*12,0.6,'#FFF6C8'); else d.line(16+Math.cos(t)*12,12+Math.sin(t)*12,16+Math.cos(t)*14,12+Math.sin(t)*14,'#FFE878')}
    d.circ(16,12,13,null);
    // rays
    for(let a=0;a<8;a++){const t=a/8*Math.PI*2-Math.PI/2; if(Math.sin(t)>0.6) continue; d.line(16+Math.cos(t)*12,12+Math.sin(t)*12,16+Math.cos(t)*14.5,12+Math.sin(t)*14.5,'#FFD030')}
    // glass
    d.circ(16,11,9,'#FFE878'); d.poly([[11,17],[21,17],[19,23],[13,23]],'#FFE878');
    d.circ(17,12,7,'#FFF0A8'); d.circ(16,11,4,'#FFFCE8');
    d.ell(12,7,2,3,'#FFFFFF');
    // filament
    d.vline(14,15,22,'#B08A40'); d.vline(18,15,22,'#B08A40'); d.stamp(13,11,['z.z.z.','.z.z.z'],{z:'#FF9020'}); d.px(14,13,'#FF9020'); d.px(18,13,'#FF9020'); d.px(14,14,'#B08A40'); d.px(18,14,'#B08A40');
    // screw base
    for(let j=0;j<6;j++) d.hline(12,20,23+j,j%2?'#8A8A96':'#C8C8D4'); for(let j=0;j<6;j+=2) d.px(13,23+j,'#F0F0F8');
    d.rect(14,29,5,2,'#3A3640'); d.px(16,30,'#8A6A40');
    d.outline(O);
    // remove outline around halo (keep halo soft): repaint halo edge
  },
  'pkyellow:c0': d=>{ // flower hill: hill sweeping up to right with giant dandelion & sunflowers
    d.grad(0,0,64,24,['#88CCF0','#9CD6F2','#B2E0F2','#CCEAF0','#E4F2E8']);
    cloud(d,6,3,10,'#FFFFFF'); cloud(d,30,6,7,'#FFFFFF');
    // distant hills
    d.ell(14,26,22,6,'#9ED080'); d.ell(40,26,16,5,'#B0DA90');
    // big hill rising right
    d.poly([[0,40],[0,26],[18,25],[34,20],[46,14],[56,11],[64,10],[64,40]],'#7CC254');
    d.poly([[0,40],[0,30],[20,29],[38,23],[52,17],[64,14],[64,40]],'#6AB448');
    d.poly([[0,40],[0,34],[30,33],[48,26],[64,22],[64,40]],'#5CA83E');
    // flower dots in bands
    const fl=(x,y,c)=>{if(x>=5&&x<=22&&y>=20) return; d.px(x,y,c); d.px(x-1,y,c); d.px(x+1,y,c); d.px(x,y-1,c); d.px(x,y+1,c); d.px(x,y,'#FFF8D0')};
    for(let i=0;i<28;i++){const x=d.ri(24,62), yb=Math.round(40-((x-0)*0.42)); const y=d.ri(Math.max(14,40-Math.round(x*0.45)+2),39); fl(x,y,['#FFD83A','#FFFFFF','#FF9AB8','#FFC020'][i%4])}
    for(let i=0;i<14;i++){const x=d.ri(0,4),y=d.ri(28,39); d.px(x,y,'#FFD83A')}
    // giant dandelion puff on top of hill
    d.line(52,11,50,-1,'#5A9A3A'); d.line(53,11,51,0,'#78B850');
    d.circ(49,-2,0,'#FFFFFF');
    // sunflower tall (right-center)
    d.vline(38,10,30,'#3E8A30'); d.vline(39,10,30,'#5AA844'); d.poly([[39,22],[45,18],[44,21],[40,24]],'#4E9A3A'); d.poly([[38,25],[32,22],[33,25],[37,27]],'#4E9A3A');
    for(let a=0;a<14;a++){const t=a/14*Math.PI*2; d.ell(38.5+Math.cos(t)*5,8+Math.sin(t)*5,1.5,1.5,'#FFC820')}
    for(let a=0;a<14;a++){const t=a/14*Math.PI*2+.2; d.px(38.5+Math.cos(t)*6.5,8+Math.sin(t)*6.5,'#F09A10')}
    d.circ(38.5,8,3.5,'#7A4A1A'); d.dither(36,6,5,5,'#7A4A1A','#5A3410'); d.circ(38.5,8,3.5,null); d.circ(38.5,8,3.4,'#6A3E16'); d.dither(37,6,4,4,'#8A5A24','#6A3E16');
    // dandelion seed puff (white globe) at top right
    for(let a=0;a<18;a++){const t=a/18*Math.PI*2; d.line(56,4,56+Math.cos(t)*5,4+Math.sin(t)*5,'#F4F4F4')} d.circ(56,4,1,'#C8B890');
    for(let a=0;a<18;a++){const t=a/18*Math.PI*2; d.px(56+Math.cos(t)*5,4+Math.sin(t)*5,'#FFFFFF')}
    d.line(56,5,57,11,'#5A9A3A');
    // flying seeds
    d.stamp(28,13,['.w.','www','.l.','.l.'],{w:'#FFFFFF',l:'#C8B890'}); d.stamp(46,22,['w.w','.l.'],{w:'#FFFFFF',l:'#C8B890'});
    // yellow pellet on hill
    d.ell(30,35,2.5,1.2,'#C89A10'); d.ell(30,34,2.5,1.2,'#F4C828'); d.px(29,33,'#FFF6C0');
  },
  'pkyellow:c1': d=>{ // thunder canyon at night: electric gate between canyon walls, lightning
    d.grad(0,0,64,26,['#0C1028','#121838','#1A2248','#222C58','#2C3666']);
    for(let i=0;i<14;i++) d.px(d.ri(18,50),d.ri(0,10),'#8890C0');
    // storm clouds
    for(const [x,y,w] of [[16,1,14],[34,0,16],[28,4,10]]) {d.ell(x+w/2,y+2,w/2,2.5,'#3A4270'); d.ell(x+w/2,y+1,w/2-2,1.5,'#4E5888')}
    // lightning bolt
    d.line(40,5,37,11,'#FFF6A0'); d.line(37,11,41,12,'#FFF6A0'); d.line(41,12,36,21,'#FFF6A0'); d.line(38,6,36,10,'#FFE040'); d.line(42,12,38,19,'#FFE040');
    d.line(37,11,33,14,'#FFE040');
    // canyon walls
    d.poly([[0,0],[14,0],[16,8],[13,14],[17,22],[14,30],[0,30]],'#4A3048'); d.poly([[0,0],[10,0],[12,9],[9,16],[12,24],[0,26]],'#5E3C58');
    d.poly([[64,0],[52,0],[49,7],[53,13],[48,20],[52,28],[64,30]],'#4A3048'); d.poly([[64,0],[56,0],[54,8],[57,14],[53,22],[64,24]],'#5E3C58');
    for(const y of [6,12,18]){d.hline(0,9,y,'#3A2438'); d.hline(55,63,y+2,'#3A2438')}
    d.line(14,2,15,8,'#7A5A80'); d.line(50,3,49,7,'#7A5A80');
    // ground
    d.grad(0,26,64,14,['#3A2E46','#342A40','#2E2438','#281F32']);
    d.poly([[14,30],[17,22],[22,26],[48,26],[48,20],[52,28],[64,30],[64,26],[0,26]],'#3A2E46');
    for(const [x,y] of [[26,33],[36,36],[48,34],[58,38],[30,39]]) d.hline(x,x+3,y,'#46384E');
    // electric gate posts and field
    for(const x of [30,50]){d.rect(x,14,3,15,'#6A6A7A'); d.vline(x,14,28,'#9A9AAC'); d.rect(x-1,13,5,2,'#4A4A5A'); d.circ(x+1,12,1.5,'#FFF060'); d.rect(x-1,28,5,2,'#4A4A5A')}
    for(const y of [16,21,26]){for(let x=33;x<50;x++){const k=(x-33)%4; d.px(x,y+(k===1?-1:k===3?1:0),'#FFF060')}}
    for(const y of [18,23]){for(let x=33;x<50;x++){const k=(x-31)%4; d.px(x,y+(k===1?-1:k===3?1:0),'#7AE0FF')}}
    // glow on ground
    d.dither(31,29,21,1,'#5A5470','#3A2E46');
    // sparks
    for(const [x,y] of [[28,11],[54,10],[41,27],[35,28],[46,12]]) twinkle(d,x,y,'#FFE040');
    // little battery dropped on ground right
    d.rect(55,34,6,3,'#F4C828'); d.rect(59,34,2,3,'#24222C'); d.px(61,35,'#C8C8D4'); d.hline(55,58,34,'#FFE878');
  },
  'pkyellow:c2': d=>{ // above the clouds: sea of clouds, high blue sky, rainbow, dandelion seed parachute
    d.grad(0,0,64,26,['#2E7AD8','#3E8AE0','#52A0E8','#6AB4EE','#88C8F2','#A8D8F4']);
    // sun
    d.circ(54,6,4,'#FFF4B0'); d.circ(54,6,3,'#FFFCE0'); for(let a=0;a<12;a++){const t=a/12*Math.PI*2; d.px(54+Math.cos(t)*6.5,6+Math.sin(t)*6.5,'#FFF4B0')}
    // rainbow arc (left-center)
    const rb=['#F06A6A','#F8A848','#F8E058','#7AD070','#60A8F0','#9A7AE0'];
    rb.forEach((c,i)=>{const r=17-i; for(let a=0;a<=90;a++){const t=Math.PI+a/90*Math.PI; d.px(26+Math.cos(t)*r,24+Math.sin(t)*r*.85,c)}});
    // distant cloud sea
    d.rect(0,22,64,6,'#DCEAF6'); for(let x=-3;x<70;x+=6) d.circ(x,22,3,'#DCEAF6');
    for(let x=0;x<70;x+=6) d.hline(x,x+2,22,'#F4F8FC');
    // foreground cloud floor with bumps
    d.rect(0,28,64,12,'#FFFFFF');
    for(const [x,y,r] of [[-2,28,6],[10,27,6],[22,28,5],[34,27,6],[48,25,7],[60,26,6]]) d.circ(x,y,r,'#FFFFFF');
    for(const [x,y,r] of [[48,25,7],[60,26,6],[34,27,6]]) {for(let a=0;a<=10;a++){const t=a/10*Math.PI*.5; d.px(x+Math.cos(t)*r,y+Math.sin(t)*r,'#D0E2F2')}}
    for(const [x,y,w] of [[26,35,10],[44,33,8],[54,37,9],[36,39,10]]) {d.hline(x,x+w,y,'#D0E2F2'); d.hline(x+2,x+w-2,y-1,'#E8F0F8')}
    // dandelion seed parachute
    const cx=44, cy=10;
    for(let a=0;a<=12;a++){const t=Math.PI*1.08+a/12*Math.PI*0.84; d.line(cx,cy+3,cx+Math.cos(t)*7,cy+3+Math.sin(t)*6,'#F4F8FC'); d.px(cx+Math.cos(t)*7,cy+3+Math.sin(t)*6,'#FFFFFF'); d.px(cx+Math.cos(t)*8,cy+3+Math.sin(t)*7,'#E0ECF8')}
    d.vline(cx,cy+3,cy+12,'#D8C8A0'); d.ell(cx,cy+14,1,2.2,'#A88A50'); d.px(cx,cy+13,'#C8A870');
    // second small seed
    d.stamp(58,15,['w.w.w','.www.','..l..','..l..','..s..'],{w:'#FFFFFF',l:'#D8C8A0',s:'#A88A50'});
    // birds far
    d.stamp(32,4,['k.k','.k.'],{k:'#2A4A7A'}); d.stamp(38,7,['k.k','.k.'],{k:'#2A4A7A'});
    // a yellow pellet resting on cloud
    d.ell(40,33,2.5,1.2,'#C89A10'); d.ell(40,32,2.5,1.2,'#F4C828'); d.px(39,31,'#FFF6C0');
  },
  // ---------------- BLUE ----------------
  'pkblue:s0': d=>{ // pearly scallop shell
    const O='#3A2440', P1='#D88AA8', P2='#F2B0C4', P3='#FFD8E2', P4='#FFF4F6', L='#B8E4F0';
    const cx=16, cy=27, R=20, SP=0.72;
    for(let y=0;y<32;y++)for(let x=0;x<32;x++){const dx=x-cx, dy=y-cy, r=Math.hypot(dx,dy), a=Math.atan2(dx,-dy); if(r<=R&&Math.abs(a)<=SP&&dy<0) d.px(x,y,P2)}
    for(let i=-4;i<=4;i++){const ang=i*0.18; d.circ(cx+Math.sin(ang)*R,cy-Math.cos(ang)*R,1.5,P2)}
    const rib=(ang,r0,r1,c)=>{for(let r=r0;r<=r1;r+=.5){const x=Math.round(cx+Math.sin(ang)*r), y=Math.round(cy-Math.cos(ang)*r); if(d.get(x,y)) d.px(x,y,c)}};
    for(let i=-4;i<=4;i++) rib(i*0.18,3,R+1,P1);
    for(let i=-4;i<4;i++) rib((i+.5)*0.18,7,R-2,P3);
    // hinge ears
    d.poly([[10,23],[16,22],[22,23],[20,28],[12,28]],P1); d.hline(12,20,26,'#B86A88'); d.hline(12,20,27,P2); d.line(11,23,13,23,P3); d.line(19,23,21,23,P3);
    // pearly sheen
    d.line(8,13,11,9,P4); d.line(9,15,10,14,P4); d.line(20,8,23,10,L); d.line(23,12,24,13,L); d.px(13,9,P4);
    d.outline(O);
    sparkle(d,27,3,'#B8E4F0'); d.px(3,27,'#B8E4F0'); d.px(4,26,'#FFFFFF');
    d.stamp(26,25,['.b.','bwb','.b.'],{b:'#7ABCE8',w:'#FFFFFF'});
  },
  'pkblue:s1': d=>{ // glass marble with swirl
    const O='#162A44';
    ball(d,16,16,13,13,['#2A5A9A','#3A78C0','#58A0E0','#86C4F2','#B8E2FA']);
    // inner swirl ribbons
    for(let t=0;t<9;t+=.05){const r=2+t*1.1; const x=16+Math.cos(t*1.2)*r*.9, y=16+Math.sin(t*1.2)*r*.55; d.px(x,y,t<5?'#F8F8FF':'#C8F0FF')}
    for(let t=0;t<6;t+=.06){const r=1+t*1.2; d.px(16-Math.cos(t*1.2)*r, 17-Math.sin(t*1.2)*r*.5,'#40D0C8')}
    // rim darkening bottom
    for(let a=0;a<60;a++){const t=a/60*Math.PI; d.px(16+Math.cos(t)*12.6,16+Math.sin(t)*12.6,'#1E4880')}
    // highlights
    d.ell(10,9,3,2,'#FFFFFF'); d.px(14,6,'#FFFFFF'); d.px(15,6,'#E8F6FF'); d.px(22,24,'#B8E2FA'); d.px(23,23,'#B8E2FA');
    d.outline(O);
    // dew drops
    d.stamp(25,2,['..b..','.bbb.','bbwbb','.bbb.'],{b:'#7ABCE8',w:'#FFFFFF'});
    d.stamp(2,25,['.b.','bwb','.b.'],{b:'#7ABCE8',w:'#FFFFFF'});
  },
  'pkblue:s2': d=>{ // broken crown shard: gold points with blue gem, seaweed and barnacles
    const O='#2A1E10', G1='#A8781A', G2='#E0A828', G3='#FFD458', G4='#FFF2B0';
    // crown piece: band plus 3 spikes, broken diagonally on right
    d.poly([[3,18],[3,27],[24,29],[27,24],[24,20],[28,17],[26,12],[22,16],[18,6],[14,16],[9,8],[6,17]],G2);
    d.poly([[3,22],[26,24],[24,29],[3,27]],G1);
    d.hline(3,25,21,G3); d.hline(3,24,22,G4);
    d.line(9,9,8,16,G3); d.line(18,7,16,15,G3); d.line(26,13,24,17,G3);
    // orbs on spikes
    for(const [x,y] of [[9,7],[18,5]]) {d.circ(x,y,1.6,G3); d.px(x-1,y-1,G4)}
    // big gem
    d.poly([[12,17],[15,14],[18,17],[15,21]],'#2A70D0'); d.poly([[13,17],[15,15],[15,17]],'#7AC8F8'); d.px(16,19,'#1A4A9A'); d.px(14,16,'#FFFFFF');
    // small gems in band
    for(const [x,c] of [[6,'#40C0A0'],[21,'#E84A6A']]) {d.rect(x,24,2,2,c); d.px(x,24,'#FFFFFF')}
    // break edge (jagged)
    d.line(27,24,24,29,G1); d.px(25,26,G3);
    // barnacles + seaweed
    d.circ(5,25,1.5,'#D8D0C0'); d.px(5,25,'#8A8070'); d.circ(8,27,1,'#D8D0C0');
    d.line(2,28,4,23,'#3A9A6A'); d.line(4,23,3,19,'#3A9A6A'); d.line(3,19,5,15,'#58C080'); d.px(1,29,'#3A9A6A');
    d.outline(O);
    sparkle(d,27,6,'#9AE0FF'); d.px(23,3,'#9AE0FF');
    d.stamp(28,27,['.o.','o.o','.o.'],{o:'#9AE0FF'}); d.px(30,23,'#9AE0FF');
  },
  'pkblue:c0': d=>{ // neighborhood pond, underwater: lily pads overhead, light rays, pebbles, sunken can
    d.grad(0,0,64,40,['#6ACCD8','#52BACC','#44AAC0','#3A9AB4','#3288A6','#2C7898','#286A8A']);
    // surface + lily pads silhouettes
    d.rect(0,0,64,2,'#A8E8EE'); d.hline(0,63,2,'#86DCE6');
    for(const [x,w] of [[10,10],[34,13],[54,9]]) {d.ell(x,2,w/2,1.6,'#2E7A3A'); d.ell(x,1,w/2-1,1,'#3E9A44'); d.px(x+w/4,2,'#86DCE6'); d.px(x+w/4,3,'#86DCE6')}
    // lily stems
    for(const [x,c] of [[10,'#3E8A5A'],[34,'#3E8A5A'],[54,'#3E8A5A']]) {let xx=x; for(let y=4;y<36;y++){xx+=Math.sin(y*.4+x)*.4; d.px(xx,y,c)}}
    // light rays
    for(const x0 of [22,44]) for(let y=3;y<30;y++){const x=x0+y*.4; if((y%3)!==0) {d.px(x,y,'#7AD6E2'); d.px(x+1,y,'#7AD6E2')}}
    // bottom
    d.poly([[0,40],[0,32],[16,31],[30,33],[46,30],[64,31],[64,40]],'#C8B07A');
    d.grad(0,33,64,7,['#BCA470','#B09868','#A48C60']);
    for(const [x,y,r,c] of [[28,35,2,'#8A8A9A'],[34,37,1.5,'#A89A8A'],[44,34,2.5,'#7A8A8A'],[58,36,2,'#9A9AAA'],[2,36,1.5,'#8A8A9A'],[40,38,1.2,'#B8B0A0']]) {d.ell(x,y,r,r*.7,c); d.px(x-1,y-1,'#D8D8E0')}
    // sunken tin can lying on side (right)
    d.rect(48,27,11,6,'#C83A3A'); d.hline(48,58,27,'#E86A5A'); d.hline(48,58,32,'#8A2A2A'); d.rect(51,28,5,4,'#F0F0F0'); d.px(52,29,'#3A88D0'); d.px(54,30,'#3A88D0');
    d.ell(59,30,1.4,3,'#B8B8C8'); d.ell(59,30,.6,2,'#6A6A7A');
    // water plant
    for(const x of [40,42]) {for(let y=33;y>23;y--) d.px(x+Math.round(Math.sin(y*.6)),y,'#3AA060')}
    // tadpoles
    for(const [x,y] of [[30,14],[36,18],[25,21]]) d.stamp(x,y,['kk..','kkkk'],{k:'#2A3A3A'});
    // bubbles
    for(const [x,y] of [[46,20],[47,16],[45,12],[18,10],[19,7]]) d.ring(x,y,0.7,'#C8F4FA');
  },
  'pkblue:c1': d=>{ // fish river: current, big fish passing, round stones, reeds
    d.grad(0,0,64,40,['#9ADAB8','#7CCAA8','#62B89A','#4EA48C','#3E907E','#347E70']);
    // surface ripples
    d.rect(0,0,64,3,'#C8EEDA'); for(let x=0;x<64;x+=5) d.hline(x,x+2,3,'#C8EEDA');
    // current streaks
    for(const [x,y,w] of [[24,8,8],[40,6,10],[30,14,6],[52,12,8],[4,6,8],[44,20,6],[28,23,7]]) {d.hline(x,x+w,y,'#B4E8CC'); d.hline(x+w-2,x+w+1,y+1,'#9ADAB8')}
    // far reeds on right bank
    for(let x=56;x<64;x+=2) {for(let y=30;y>12+(x%5);y--) d.px(x+Math.round(Math.sin(y*.3)),y,'#2E7A4A')}
    // big fish (center-right) facing left
    const fx=40, fy=17;
    d.ell(fx,fy,10,5,'#5A6A8A'); d.ell(fx,fy+1,9,3,'#7A8AAA'); d.ell(fx-1,fy+3,8,1.5,'#C8D4E0');
    d.poly([[fx+9,fy],[fx+16,fy-6],[fx+15,fy],[fx+16,fy+6]],'#4A5A7A'); d.line(fx+11,fy,fx+15,fy-4,'#6A7A9A');
    d.poly([[fx-2,fy-4],[fx+4,fy-9],[fx+6,fy-4]],'#4A5A7A'); d.poly([[fx,fy+4],[fx+3,fy+8],[fx+5,fy+4]],'#4A5A7A');
    d.circ(fx-6,fy-1,1.5,'#FFFFFF'); d.px(fx-7,fy-1,'#1A1A2A'); d.px(fx-6,fy-1,'#1A1A2A');
    d.line(fx-3,fy-3,fx-3,fy+3,'#4A5A7A'); d.px(fx-10,fy+1,'#3A3A5A');
    for(const [x,y] of [[fx+1,fy-1],[fx+4,fy],[fx+1,fy+1],[fx+7,fy-1],[fx+4,fy-2]]) d.px(x,y,'#9AAAC8');
    // bubbles from fish mouth
    d.ring(fx-12,fy-3,0.8,'#E0F8F0'); d.ring(fx-13,fy-7,1.2,'#E0F8F0'); d.px(fx-11,fy-10,'#E0F8F0');
    // small fish school
    for(const [x,y] of [[22,5],[26,4],[18,10]]) d.stamp(x,y,['.oo.o','ooooo','.oo.o'],{o:'#F08A4A'});
    // riverbed stones
    d.rect(0,33,64,7,'#6A7A62');
    for(const [x,y,rx,ry,c] of [[2,33,6,3,'#7A8A72'],[24,34,5,3,'#8A8A7A'],[36,36,7,3,'#7A7A6A'],[50,33,6,4,'#8A9A82'],[61,36,5,3,'#6E7E66'],[14,38,5,2,'#7A8A72'],[44,39,4,2,'#8A8A7A']]) {d.ell(x,y,rx,ry,c); d.hline(x-rx+2,x+rx-2,y-ry,'#AABA9A')}
    // moss
    d.px(50,29,'#4E9A4A'); d.px(51,29,'#4E9A4A'); d.px(36,33,'#4E9A4A');
  },
  'pkblue:c2': d=>{ // deep seafloor: navy dark, whale silhouette, glowing coral, sunken anchor
    d.grad(0,0,64,40,['#1A3A6A','#163262','#122A56','#0E224A','#0C1C40','#0A1636']);
    // faint light from above
    for(let y=0;y<14;y++){const x=26+y*.3; if(y%2===0) {d.px(x,y,'#2A4E80'); d.px(x+2,y,'#2A4E80')}}
    // whale silhouette top-right
    d.ell(46,9,12,4,'#1E3E70'); d.poly([[56,8],[63,3],[62,9],[63,14]],'#1E3E70'); d.ell(44,11,9,2,'#2A4E80'); d.px(37,8,'#4A6A9A'); d.poly([[42,12],[46,17],[48,12]],'#1E3E70');
    for(let x=36;x<50;x+=3) d.px(x,12,'#3A5E90');
    // marine snow
    for(let i=0;i<22;i++) d.px(d.ri(0,63),d.ri(0,28),'#5A7AAA');
    // seafloor
    d.poly([[0,40],[0,31],[20,30],[34,32],[50,29],[64,30],[64,40]],'#2A3A5A');
    d.grad(0,32,64,8,['#2E3E60','#283656','#22304C']);
    for(const [x,y] of [[26,35],[40,37],[56,34],[32,39],[10,39]]) d.hline(x,x+2,y,'#3A4E72');
    // anchor half-buried
    d.vline(34,16,30,'#6A6A7A'); d.vline(35,16,30,'#4A4A5A'); d.ring(34.5,14,2,'#6A6A7A'); d.hline(31,38,19,'#6A6A7A');
    for(let a=0;a<=10;a++){const t=a/10*Math.PI; d.px(34.5+Math.cos(t)*6,27+Math.sin(t)*4,'#6A6A7A')} d.px(28,26,'#6A6A7A'); d.px(41,26,'#6A6A7A');
    d.px(33,22,'#3A9A6A'); d.px(36,24,'#3A9A6A'); d.px(33,25,'#3A9A6A');
    // glowing coral
    const coral=(x,y,c,g)=>{d.vline(x,y-6,y,c); d.line(x,y-3,x-3,y-6,c); d.line(x,y-2,x+3,y-5,c); d.line(x-3,y-6,x-3,y-8,c); for(const [a,b] of [[0,-7],[-3,-9],[3,-6]]) d.px(x+a,y+b,g)};
    coral(46,31,'#C04A8A','#FF9AD0'); coral(52,30,'#3AA8B8','#9AF8FF'); coral(59,31,'#C04A8A','#FF9AD0');
    // anglerfish lure glow
    d.circ(24,18,1.5,'#3A6A9A'); d.px(24,18,'#FFF6A0'); d.ring(24,18,2.6,'#1E4472');
    d.line(24,19,27,23,'#2A3A5A'); d.ell(29,24,3,2,'#16264A'); d.px(28,23,'#C8E0FF');
    // shells & gem glints
    d.stamp(42,34,['.ss.','ssss'],{s:'#C8A0B8'}); d.px(58,37,'#9AF8FF');
    // bubbles
    for(const [x,y] of [[52,22],[53,18],[51,14]]) d.ring(x,y,0.8,'#7A9ACA');
  },
  // ---------------- PURPLE ----------------
  'pkpurple:s0': d=>{ // glass dome paperweight with violet flower inside, heavy
    const O='#22182E';
    // base slab
    d.ell(16,25,13,4,'#4A3A5A'); d.rect(3,22,27,3,'#6A5480'); d.ell(16,22,13,4,'#8A72A0'); d.hline(6,26,24,'#5A4870');
    // glass dome
    d.ell(16,15,12,10,'#C8D8F0'); d.rect(4,15,25,7,'#C8D8F0'); d.ell(16,21,12,3,'#B0C4E4');
    // flower inside
    d.vline(16,13,21,'#3E8A4A'); d.line(16,19,12,16,'#3E8A4A'); d.ell(12,16,2,1,'#58A85A'); d.line(16,18,20,16,'#3E8A4A'); d.ell(20,16,2,1,'#58A85A');
    for(let a=0;a<6;a++){const t=a/6*Math.PI*2; d.circ(16+Math.cos(t)*3,11+Math.sin(t)*2.6,1.7,'#9A50D0')}
    for(let a=0;a<6;a++){const t=a/6*Math.PI*2; d.px(16+Math.cos(t)*3,11+Math.sin(t)*2.6,'#C890F0')}
    d.circ(16,11,1.2,'#FFD84A'); d.px(15,10,'#FFF4B0');
    // bubbles in glass
    d.px(9,18,'#FFFFFF'); d.px(23,12,'#FFFFFF'); d.px(22,19,'#E8F0FF');
    // glass highlights
    d.line(7,13,9,8,'#FFFFFF'); d.line(8,15,8,14,'#FFFFFF'); d.px(11,6,'#FFFFFF'); d.line(24,8,25,10,'#E8F0FF');
    d.hline(6,26,22,'#9A8AB4');
    d.outline(O);
    // heavy impact lines + dust
    d.hline(0,2,29,'#8A7A9A'); d.hline(29,31,29,'#8A7A9A'); d.px(1,27,'#8A7A9A'); d.px(30,27,'#8A7A9A');
    d.stamp(26,2,['.k.','kkk','.k.'],{k:'#FFFFFF'}); 
  },
  'pkpurple:s1': d=>{ // pair of dumbbells, crossed
    const O='#1E1626';
    const bell=(x0,y0,x1,y1)=>{ // bar
      d.line(x0,y0,x1,y1,'#B8B8C8'); d.line(x0,y0+1,x1,y1+1,'#7A7A8A');
      for(const [x,y] of [[x0,y0],[x1,y1]]){d.circ(x,y,4.5,'#6A3A9A'); d.circ(x,y,3.5,'#8A50C0'); d.circ(x-1,y-1,1.8,'#B080E8'); d.circ(x,y,1,'#4A2A6A'); d.px(x,y,'#D8D8E8')}
    };
    // back one (horizontal-ish)
    d.line(7,21,25,21,'#B8B8C8'); d.line(7,22,25,22,'#7A7A8A');
    for(const x of [6,26]){d.rect(x-3,15,6,13,'#5A3088'); d.rect(x-2,15,4,13,'#7A48B0'); d.vline(x-2,16,26,'#A070D8'); d.hline(x-3,x+2,15,'#9A68D0')}
    for(const x of [10,22]){d.rect(x-1,17,2,9,'#5A3088'); d.vline(x-1,17,25,'#8A58C0')}
    // front one diagonal
    d.line(9,13,23,6,'#D8D8E8'); d.line(9,14,23,7,'#9A9AAA'); d.line(9,15,23,8,'#7A7A8A');
    for(const [x,y] of [[8,13],[24,6]]){d.circ(x,y,4.5,'#5A3088'); d.circ(x,y,3.6,'#7A48B0'); d.circ(x-1,y-1,1.8,'#A070D8'); d.circ(x,y,1,'#3E2058'); d.px(x,y,'#D8D8E8')}
    // grip knurl
    for(let i=0;i<5;i++) d.px(13+i*2,12-i,'#7A7A8A');
    d.outline(O);
    // effort sparkle / sweat
    d.stamp(28,13,['.b','bb','bb'],{b:'#8AC8F0'}); d.px(29,13,'#FFFFFF');
    d.px(2,4,'#FFD84A'); d.px(1,5,'#FFD84A'); d.px(3,5,'#FFD84A'); d.px(2,6,'#FFD84A');
  },
  'pkpurple:s2': d=>{ // colossal acorn
    const O='#2A1810';
    // nut
    ball(d,16,19,10,11,['#7A4A1E','#9A5E26','#BA7832','#D8984A','#EEB66A']);
    d.poly([[12,28],[16,31],[20,28]],'#9A5E26'); d.px(16,31,'#5A3414');
    // stripes
    d.line(11,16,10,25,'#A86A2C'); d.line(21,16,22,24,'#8A5420');
    // cap
    d.ell(16,11,14,6,'#6A5030'); d.ell(16,10,13,5,'#8A6A40');
    for(let y=6;y<=15;y+=2)for(let x=3;x<=29;x+=3){const xx=x+(y%4?1:0); if(d.get(xx,y)) {d.px(xx,y,'#5A4024'); d.px(xx+1,y,'#A88458')}}
    d.hline(4,28,15,'#5A4024'); d.hline(6,26,16,'#4A3018');
    // stem
    d.rect(15,1,3,5,'#6A5030'); d.vline(15,1,5,'#8A6A40'); d.px(18,1,'#6A5030');
    // highlight
    d.ell(11,20,1.5,3,'#F8D090'); d.px(12,24,'#F8D090');
    // crack (from the thud)
    d.line(20,18,22,21,'#5A3414'); d.line(22,21,21,23,'#5A3414');
    d.outline(O);
    // thud dust puffs
    d.circ(3,29,2,'#D8C8B0'); d.circ(29,29,2,'#D8C8B0'); d.px(1,26,'#D8C8B0'); d.px(30,26,'#D8C8B0'); d.px(5,30,'#C0B098');
  },
  'pkpurple:c0': d=>{ // backyard: brick house wall, terracotta pot, garden hose, tennis ball
    // brick wall back
    d.rect(0,0,64,24,'#C8735A');
    for(let y=0;y<24;y+=3){d.hline(0,63,y+2,'#E0C4A8'); for(let x=(y/3%2)*4;x<64;x+=8) d.vline(x,y,y+1,'#E0C4A8')}
    for(let i=0;i<14;i++){const x=d.ri(0,62),y=d.ri(0,22); if(d.get(x,y)==='#C8735A') d.px(x,y,'#B4604A')}
    // window with blue sky + curtain
    d.rect(4,2,16,12,'#F4ECDC'); d.rect(5,3,14,10,'#8ACCF0'); d.rect(5,3,14,4,'#A8DAF4'); d.vline(11,3,12,'#F4ECDC'); d.vline(12,3,12,'#F4ECDC'); d.hline(5,18,8,'#F4ECDC');
    d.rect(5,3,3,10,'#F08AB0'); d.rect(16,3,3,10,'#F08AB0'); d.vline(7,3,12,'#D06890'); d.vline(16,3,12,'#D06890'); d.hline(3,20,14,'#D8CCB8');
    // wall base/ground line
    d.rect(0,22,64,2,'#9A8070');
    // lawn ground
    d.grad(0,24,64,16,['#86C860','#7CC058','#72B650','#68AC48']);
    for(let i=0;i<40;i++){const x=d.ri(0,63),y=d.ri(25,39); if(x>=5&&x<=22) continue; d.px(x,y,d.rnd()<.5?'#98D470':'#5E9E40')}
    // terracotta pot (giant) right
    d.poly([[38,18],[56,18],[54,34],[40,34]],'#C86A3A'); d.rect(36,14,22,5,'#D87A44'); d.hline(36,57,14,'#EC9A60'); d.hline(36,57,18,'#A8552E');
    d.poly([[39,19],[42,19],[42,33],[41,33]],'#E08A50'); d.poly([[52,19],[55,19],[53,33],[50,33]],'#A8552E');
    d.ell(47,35,8,1.5,'#4E8A38');
    // plant in pot: big leaves
    d.ell(47,13,9,2,'#5A4030');
    for(const [x,y,rx,ry,c] of [[42,6,4,6,'#4E9E3E'],[52,5,4,7,'#5AAE48'],[47,2,3,6,'#6CC054']]) {d.ell(x,y,rx,ry,c); d.line(x,y-ry+1,x,13,'#3E8A34')}
    // garden hose coil (left-center behind pet area, right side of it)
    d.ell(30,31,6,3,'#2E9A58'); d.ell(30,31,4,2,'#68AC48'); d.ell(30,30,6,3,null); 
    for(let a=0;a<40;a++){const t=a/40*Math.PI*2; d.px(30+Math.cos(t)*6,31+Math.sin(t)*3,'#2E9A58'); d.px(30+Math.cos(t)*4.5,31+Math.sin(t)*2,'#3EB86A')}
    d.line(36,31,40,37,'#2E9A58'); d.line(40,37,46,38,'#2E9A58'); d.rect(46,37,3,2,'#E8C048');
    d.hline(25,35,28,'#58D088');
    // tennis ball
    d.circ(60,31,3,'#D8E048'); d.circ(59,30,1.5,'#EEF07A'); d.line(57,29,61,33,'#FFFFFF');
    // fallen paperweight? purple pellet near pot
    d.ell(33,37,2.5,1.2,'#5A3088'); d.ell(33,36,2.5,1.2,'#8A50C0'); d.px(32,35,'#C890F0');
  },
  'pkpurple:c1': d=>{ // deep forest: giant trunks, roots, mushrooms, light shafts
    d.grad(0,0,64,30,['#1E3A2A','#22422E','#284A32','#2E5236','#345A3A']);
    // far trunks
    for(const [x,w] of [[8,3],[20,2],[52,3],[30,2]]) d.rect(x,0,w,30,'#1A3024');
    // canopy leaves
    for(let i=0;i<16;i++) d.circ(d.ri(0,63),d.ri(0,4),d.ri(2,4),i%2?'#1E4A2A':'#285A32');
    // light shafts
    for(const x0 of [24,40]) for(let y=0;y<30;y++){const x=x0+Math.floor(y*.5); if((x+y)%2) d.px(x,y,'#4E7A4A'); d.px(x+1,y,'#4E7A4A')}
    // giant trunk right
    d.rect(44,0,14,32,'#5A3E2A'); d.rect(44,0,3,32,'#7A5638'); d.rect(54,0,4,32,'#46301E');
    for(const y of [5,12,20]) {d.line(48,y,50,y+3,'#46301E'); d.line(52,y+2,52,y+5,'#46301E')}
    d.poly([[38,32],[44,24],[46,32]],'#5A3E2A'); d.poly([[56,24],[63,32],[56,32]],'#46301E');
    // moss on trunk
    for(const [x,y] of [[45,10],[46,11],[44,18],[45,19],[46,26]]) d.px(x,y,'#5A9A4A');
    // ivy hanging
    for(let y=0;y<16;y++){d.px(36+Math.round(Math.sin(y*.5)),y,'#3E7A3A'); if(y%3===0) d.px(37+Math.round(Math.sin(y*.5)),y,'#5A9A4A')}
    // forest floor
    d.grad(0,30,64,10,['#3E5A2E','#38522A','#324A26']);
    d.poly([[0,40],[0,30],[64,30],[64,40]],'#3E5A2E'); d.grad(0,31,64,9,['#46623A','#3E5A2E','#38522A']);
    for(const [x,y] of [[26,34],[34,37],[60,36],[14,39],[40,39]]) {d.px(x,y,'#C8783A'); d.px(x+1,y,'#A85A2A')}
    // big red mushrooms center
    const mush=(x,y,r,c,c2)=>{d.rect(x-1,y-3,3,4,'#F0E8D8'); d.vline(x+1,y-3,y,'#C8C0B0'); d.ell(x,y-4,r,r*.6,c); d.hline(x-r+1,x+r-1,y-3,c2); for(const [a,b] of [[-r/2,-r*.4],[r/3,-r*.5],[0,-r*.2]]) d.px(x+a,y-4+b,'#FFFFFF')};
    mush(32,32,5,'#C83A3A','#8A2424'); mush(38,33,3,'#C83A3A','#8A2424');
    // fallen acorn
    d.ell(26,31,2,2.5,'#B87A3A'); d.ell(26,29,2.5,1.2,'#7A5A34'); d.px(25,31,'#E0A860');
    // fireflies
    for(const [x,y] of [[22,14],[30,20],[14,10],[60,14],[40,22]]) d.px(x,y,'#E8F070');
  },
  'pkpurple:c2': d=>{ // giant's kitchen: tile wall, counter, frying pan with egg, salt shaker, checker floor
    // wall tiles
    d.rect(0,0,64,24,'#E8EEF0');
    for(let x=0;x<64;x+=5) d.vline(x,0,23,'#C8D4DA'); for(let y=0;y<24;y+=5) d.hline(0,63,y,'#C8D4DA');
    for(let y=0;y<24;y+=10)for(let x=0;x<64;x+=10) d.rect(x+1,y+1,4,4,'#B8DCE8');
    // window w/ sunlight
    d.rect(4,2,14,10,'#FFFFFF'); d.rect(5,3,12,8,'#9AD4F4'); d.vline(10,3,10,'#FFFFFF'); d.hline(5,6,7,'#FFFFFF'); d.circ(14,5,1.5,'#FFF4B0');
    // giant counter edge right
    d.rect(30,18,34,4,'#C89A68'); d.hline(30,63,18,'#E0B888'); d.rect(30,22,34,12,'#A8784A'); d.vline(46,22,33,'#8A5E38'); d.hline(31,45,27,'#8A5E38'); d.hline(47,62,27,'#8A5E38');
    d.rect(37,25,3,1,'#D8D0C0'); d.rect(53,25,3,1,'#D8D0C0');
    // frying pan on counter with egg
    d.ell(44,16,9,3,'#2A2A34'); d.ell(44,15,8,2,'#4A4A58'); d.rect(52,14,11,2,'#2A2A34'); d.hline(53,62,14,'#5A5A6A');
    d.ell(43,15,4,1.6,'#FFFFFF'); d.ell(44,15,1.5,1,'#F8C030'); d.px(43,14,'#FFE890');
    // steam
    for(const x of [40,45]) {d.px(x,11,'#FFFFFF'); d.px(x+1,10,'#FFFFFF'); d.px(x,9,'#FFFFFF'); d.px(x+1,8,'#F4F4F4')}
    // salt shaker
    d.rect(33,9,5,9,'#F4F4F8'); d.rect(33,7,5,2,'#B8B8C8'); d.hline(33,37,6,'#D8D8E0'); d.vline(37,9,17,'#D0D4DC'); d.px(34,7,'#5A5A6A'); d.px(36,7,'#5A5A6A');
    // floor checker
    d.rect(0,24,30,16,'#F4E8D0');
    for(let y=24;y<40;y+=4)for(let x=0;x<64;x+=4) if(((x+y)/4)%2) d.rect(x,y,4,4,'#D8B888');
    d.rect(30,34,34,6,'#F4E8D0'); for(let y=34;y<40;y+=4)for(let x=30;x<64;x+=4) if(((x+y)/4)%2===0) d.rect(x,y,4,Math.min(4,40-y),'#D8B888');
    d.hline(0,29,24,'#C8A878');
    // dropped sugar cube + crumbs on floor
    d.rect(24,33,4,4,'#FFFFFF'); d.hline(24,27,33,'#F0F4FF'); d.vline(27,33,36,'#D8DCE8');
    d.px(36,37,'#E0B070'); d.px(38,38,'#E0B070'); d.px(58,37,'#E0B070');
  },
  // ---------------- WHITE ----------------
  'pkwhite:s0': d=>{ // old brass key with dirt clumps
    const O='#2A1E14', B1='#9A6A1E', B2='#D49A30', B3='#F4C858', B4='#FFF0B0';
    // bow (ring) - ornate
    d.circ(9,10,7,B2); d.circ(9,10,3,null); 
    for(let a=0;a<4;a++){const t=a/4*Math.PI*2+Math.PI/4; d.circ(9+Math.cos(t)*7,10+Math.sin(t)*7,1.6,B2)}
    d.circ(9,10,3,null);
    // shaft diagonal
    d.line(13,14,26,27,B2); d.line(14,14,27,27,B2); d.line(13,15,26,28,B1); d.line(14,13,27,26,B3);
    // bit (teeth)
    d.poly([[20,24],[23,21],[26,24],[23,27]],B2); d.stamp(21,25,['bb..','bbb.','.b..'],{b:B1});
    d.rect(22,22,2,2,B3);
    // collar
    d.line(14,17,17,14,B1); d.line(15,18,18,15,B3);
    // shading on bow
    for(let a=0;a<30;a++){const t=Math.PI*.1+a/30*Math.PI; d.px(9+Math.cos(t)*5.5,10+Math.sin(t)*5.5,B1)}
    for(let a=0;a<20;a++){const t=Math.PI*1.1+a/20*Math.PI*.7; d.px(9+Math.cos(t)*5.5,10+Math.sin(t)*5.5,B3)}
    d.px(5,6,B4); d.px(6,5,B4);
    d.outline(O);
    // dirt clumps
    d.ell(27,28,3,2,'#6A4A30'); d.px(26,27,'#8A6444'); d.ell(4,25,2,1.5,'#6A4A30'); d.px(3,24,'#8A6444');
    d.px(18,9,'#6A4A30'); d.px(19,10,'#6A4A30');
    // root strand
    d.line(28,26,31,23,'#C8A878'); d.px(30,28,'#C8A878');
    sparkle(d,25,6,'#FFF0B0');
  },
  'pkwhite:s1': d=>{ // purple potion flask, poison
    const O='#22142A';
    // flask
    d.rect(13,4,6,7,'#D8E8F0'); d.circ(16,20,10,'#D8E8F0');
    // liquid
    d.circ(16,21,9,'#7A30A8'); d.rect(6,13,21,4,null);
    for(let y=0;y<32;y++)for(let x=0;x<32;x++) if(d.get(x,y)==='#7A30A8'&&y<16) d.px(x,y,'#D8E8F0');
    d.hline(8,24,16,'#B070E0'); d.hline(7,25,17,'#9A4ACC');
    ball(d,16,21,9,9,['#4A1A6A','#6A2A90','#8A3AB8','#A050D0']); for(let y=11;y<16;y++) d.hline(6,26,y,null);
    d.circ(16,20,10,'#D8E8F0'); 
    for(let y=16;y<32;y++)for(let x=0;x<32;x++){const r=Math.hypot(x-16,y-20); if(r<=9.2){const l=-(x-16)*.5-(y-20)*.6+ (9-r); d.px(x,y,l>4?'#B070E0':l>0?'#8A3AB8':l>-4?'#6A2A90':'#4A1A6A')}}
    d.hline(8,24,16,'#C890F0');
    // bubbles in potion
    d.ring(13,23,1,'#D8B0F8'); d.px(19,20,'#D8B0F8'); d.px(18,26,'#D8B0F8');
    // neck & cork
    d.rect(13,4,6,7,'#D8E8F0'); d.vline(13,4,10,'#B8C8D8'); d.rect(12,1,8,4,'#B08050'); d.hline(12,19,1,'#D0A070'); d.vline(19,1,4,'#8A6038');
    d.rect(11,10,10,1,'#B8C8D8');
    // glass highlight
    d.line(9,15,8,20,'#FFFFFF'); d.px(10,13,'#FFFFFF'); d.vline(14,5,9,'#FFFFFF');
    // skull label
    d.rect(12,22,8,6,'#F4ECD8'); d.stamp(13,22,['.sss..','sksks.','.sss..','.s.s..'],{s:'#4A3A50',k:'#F4ECD8'});
    d.outline(O);
    // poison fog wisps
    d.stamp(22,1,['.gg..','g..g.','...gg'],{g:'#B890D0'}); d.stamp(1,6,['gg.','..g'],{g:'#B890D0'}); d.px(25,8,'#C8A8E0');
  },
  'pkwhite:s2': d=>{ // gem in rock clump
    const O='#1E1A26';
    // rock clump
    d.ell(16,24,14,6,'#6A5A4A'); d.ell(16,23,12,5,'#7E6C58'); d.ell(9,22,4,3,'#8E7A64'); d.ell(24,23,4,2.5,'#5A4C3E');
    for(const [x,y] of [[6,25],[12,27],[22,27],[27,25]]) d.px(x,y,'#4A3E32');
    // gem: hexagonal diamond
    d.poly([[8,10],[12,4],[20,4],[24,10],[16,24]],'#E8D0F8');
    d.poly([[8,10],[12,4],[14,10]],'#FFFFFF'); d.poly([[14,10],[12,4],[20,4],[18,10]],'#F4E4FF'); d.poly([[18,10],[20,4],[24,10]],'#C8A8EC');
    d.poly([[8,10],[14,10],[16,24]],'#D8B8F4'); d.poly([[14,10],[18,10],[16,24]],'#F0E0FF'); d.poly([[18,10],[24,10],[16,24]],'#A880D8');
    d.hline(8,24,10,'#B898E0');
    d.px(11,6,'#FFFFFF'); d.px(12,7,'#FFFFFF');
    // dirt over bottom of gem
    d.ell(16,24,5,2,'#7E6C58'); d.px(14,23,'#8E7A64');
    d.outline(O);
    // red-eye glint sparkles (white pikmin found it)
    sparkle(d,27,4,'#FF8A9A'); d.px(4,5,'#FF8A9A'); d.px(3,6,'#FF8A9A'); d.px(5,6,'#FF8A9A'); d.px(4,7,'#FF8A9A');
    d.px(28,14,'#F4E4FF');
  },
  'pkwhite:c0': d=>{ // pink flower path: winding stone path, cherry tree, falling petals
    d.grad(0,0,64,20,['#A8D8F4','#B8E0F4','#CCE8F2','#E0F0F0']);
    cloud(d,18,3,10,'#FFFFFF');
    // far pink bushes
    for(let x=-2;x<66;x+=7) d.circ(x,20,4,'#F4B8D0'); for(let x=2;x<66;x+=7) d.circ(x,19,2.5,'#F8D0E0');
    // ground
    d.grad(0,21,64,19,['#8ACC68','#7EC260','#74B858','#6AAE50']);
    // winding path from bottom-left to back right
    d.poly([[0,40],[0,30],[14,28],[28,26],[40,23],[50,21],[54,21],[46,25],[36,30],[26,36],[22,40]],'#E8D8C0');
    for(const [x,y] of [[8,32],[18,30],[30,28],[40,25],[47,22],[14,36],[26,33],[36,28]]) {d.ell(x,y,2,1,'#D4C0A4'); d.px(x-1,y-1,'#F4E8D8')}
    // cherry tree right
    d.rect(55,10,3,14,'#6A4434'); d.line(56,14,50,8,'#6A4434'); d.line(57,12,62,7,'#6A4434'); d.vline(55,10,23,'#8A5A44');
    for(const [x,y,r] of [[48,6,5],[56,4,6],[62,6,4],[52,10,4],[60,10,4]]) d.circ(x,y,r,'#F4A8C8');
    for(const [x,y,r] of [[47,5,3],[55,3,4],[61,5,2.5]]) d.circ(x,y,r,'#FCCCE0');
    for(const [x,y] of [[50,4],[57,2],[53,8],[60,8]]) d.px(x,y,'#FFFFFF');
    // pink flowers lining path
    const fl=(x,y)=>{d.px(x,y,'#F070A8'); d.px(x-1,y,'#F8A0C8'); d.px(x+1,y,'#F8A0C8'); d.px(x,y-1,'#F8A0C8'); d.px(x,y+1,'#3E9A3A')};
    for(const [x,y] of [[28,23],[34,22],[24,31],[34,34],[42,32],[50,28],[56,30],[60,26],[44,36],[54,36],[62,34],[38,27],[30,38]]) fl(x,y);
    // falling petals
    for(const [x,y] of [[40,10],[44,15],[36,6],[30,14],[50,16],[26,8]]) {d.px(x,y,'#F8A0C8'); d.px(x+1,y+1,'#F4B8D0')}
  },
  'pkwhite:c1': d=>{ // poison fog valley at sunset
    d.grad(0,0,64,22,['#3A2A5A','#6A3A6A','#A84A6A','#E07050','#F4A050','#F8C870']);
    d.circ(40,19,5,'#FFE0A0'); d.circ(40,19,4,'#FFF0C8');
    // valley cliffs silhouettes
    d.poly([[0,8],[8,10],[14,18],[20,24],[0,24]],'#3A2A48'); d.poly([[64,6],[56,10],[52,16],[48,24],[64,24]],'#3A2A48');
    d.poly([[0,14],[6,16],[12,22],[0,24]],'#2E2240'); d.poly([[64,12],[58,16],[54,24],[64,24]],'#2E2240');
    // dead twisted tree
    d.vline(50,10,26,'#2A1E34'); d.vline(51,12,26,'#2A1E34'); d.line(50,14,45,10,'#2A1E34'); d.line(45,10,44,7,'#2A1E34'); d.line(51,12,56,8,'#2A1E34'); d.line(56,8,58,9,'#2A1E34'); d.line(50,18,47,17,'#2A1E34');
    // fog layers
    d.rect(0,22,64,18,'#7A5A8A');
    d.grad(0,22,64,18,['#9A6AA8','#8A5E98','#7A548A','#6A4A7C','#5E4270']);
    for(const [y,c] of [[21,'#B890C8'],[27,'#A880BC'],[33,'#9A74AE']]) for(let x=-4;x<68;x+=9) {d.ell(x+(y%2)*4,y,5,1.4,c)}
    // fog green tint wisps
    for(const [x,y] of [[30,25],[44,29],[56,24],[36,35],[58,36]]) {d.hline(x,x+5,y,'#9ACC8A'); d.hline(x+2,x+7,y+1,'#8AB880')}
    // poison mushrooms with glowing spots
    const pm=(x,y,r)=>{d.rect(x-1,y-2,2,3,'#D8C8E0'); d.ell(x,y-3,r,r*.6,'#7A2A9A'); d.px(x-1,y-4,'#C8F07A'); d.px(x+1,y-3,'#C8F07A')};
    pm(30,36,3); pm(36,38,2); pm(56,33,3); pm(48,37,2.5);
    // ground behind fog bottom
    d.rect(0,38,64,2,'#4A3460'); d.hline(0,63,38,'#5A4070');
    // little skull warning stone
    d.rect(40,30,6,6,'#8A8A9A'); d.hline(40,45,30,'#AAAABA'); d.stamp(41,31,['.ss.','skks','.ss.','s..s'],{s:'#E8E8F0',k:'#4A4A5A'});
  },
  'pkwhite:c2': d=>{ // deep in the cave: glowing crystals, underground pool, stalagmites
    d.grad(0,0,64,40,['#0E0E1E','#121428','#161A30','#1A2038','#1E2640']);
    // cave rock silhouettes
    for(const [x,w,h] of [[3,4,7],[14,3,10],[24,5,5],[36,3,8],[46,4,6],[58,5,9]]) {d.poly([[x-w,0],[x+w,0],[x,h]],'#262A44'); d.px(x,h-1,'#3A4060')}
    d.poly([[0,0],[0,30],[4,24],[2,14],[5,6]],'#22263C'); d.poly([[64,0],[64,30],[60,22],[62,12],[58,4]],'#22263C');
    // cave floor
    d.poly([[0,40],[0,30],[20,29],[34,31],[64,30],[64,40]],'#2E3450');
    d.grad(0,32,64,8,['#2E3450','#282E48','#222840']);
    // underground pool center-right reflecting crystals
    d.ell(42,34,14,3,'#1E4A6A'); d.ell(42,34,12,2,'#2A6A8A'); d.hline(34,48,34,'#4AA0C0'); d.hline(38,44,35,'#6AC8E0');
    // crystal cluster
    const cr=(x,y,h,w,c,c2,c3)=>{d.poly([[x-w,y],[x-w,y-h+w],[x,y-h],[x+w,y-h+w],[x+w,y]],c); d.poly([[x,y-h],[x+w,y-h+w],[x+w,y],[x,y]],c2); d.vline(x-w+1,y-h+w,y-1,c3)};
    cr(44,30,14,3,'#5AC8E8','#3A98C0','#B8F4FF'); cr(39,30,9,2,'#6AD8F0','#3A98C0','#C8F8FF'); cr(50,30,10,2,'#8A7AE8','#6A58C0','#D8D0FF'); cr(54,31,6,2,'#5AC8E8','#3A98C0','#B8F4FF'); cr(35,31,5,1.5,'#8A7AE8','#6A58C0','#D8D0FF');
    // glow halo dots
    for(const [x,y] of [[44,13],[37,18],[52,17],[47,10],[57,22],[31,24]]) d.px(x,y,'#4A6A98');
    // stalagmites
    d.poly([[24,31],[27,20],[30,31]],'#3A4060'); d.vline(26,23,30,'#4A5070'); d.poly([[60,31],[62,24],[64,31]],'#3A4060');
    // glowing mushrooms
    for(const [x,y] of [[28,33],[31,34]]) {d.vline(x,y-1,y,'#C8D8E8'); d.hline(x-1,x+1,y-2,'#7AF0B0'); d.px(x,y-3,'#7AF0B0')}
    // floor pebbles
    for(const [x,y] of [[24,37],[58,37],[32,39],[50,39]]) d.hline(x,x+2,y,'#3A4060');
    // hidden treasure glint in floor
    twinkle(d,58,35,'#FFE890');
  },
};
export default ART;
