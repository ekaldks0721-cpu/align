// ac1: Animal Crossing gifts (Timmy, Tommy, Blathers). Souvenirs 32x32, postcards 64x40.
const thick=(d,x0,y0,x1,y1,r,c)=>{const n=Math.max(Math.abs(x1-x0),Math.abs(y1-y0))*2||1; for(let i=0;i<=n;i++) d.circ(x0+(x1-x0)*i/n,y0+(y1-y0)*i/n,r,c)};
// Nook leaf emblem (7x8)
const LEAF=['...ll','..lLl','.lLlg','lLlgg','lLgg.','.gg..','.s...','s....'];
const leaf=(d,x,y,l='#7CCB6A',L='#B8EC98',g='#4E9E4A',s='#6A4A2A')=>d.stamp(x,y,LEAF,{l,L,g,s});
// AC round tree: crown blobs + trunk
const tree=(d,cx,by,r,c1,c2,c3,tr='#9A6A40',tr2='#6E4A2A')=>{
  d.rect(cx-1,by-r-2,3,r+2,tr); d.vline(cx+1,by-r-2,by-1,tr2); d.px(cx-2,by-1,tr); d.px(cx+2,by-1,tr2);
  const cy=by-r-4;
  d.circ(cx,cy,r,c3); d.circ(cx-r*.45,cy-1,r*.7,c1); d.circ(cx+r*.45,cy,r*.7,c1); d.circ(cx,cy-r*.4,r*.7,c1);
  d.circ(cx-r*.3,cy-r*.5,r*.35,c2); d.circ(cx+r*.4,cy+r*.45,r*.4,c3);
  return cy;
};
const star4=(d,x,y,c,cc='#FFFFFF')=>{d.px(x,y,cc); d.px(x-1,y,c); d.px(x+1,y,c); d.px(x,y-1,c); d.px(x,y+1,c)};
const star5=(d,cx,cy,R,r,c)=>{const p=[]; for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5, q=i%2?r:R; p.push([cx+Math.cos(a)*q,cy+Math.sin(a)*q])} d.poly(p,c)};
const cloud=(d,x,y,w,c='#FFFFFF',c2='#E4F2FA')=>{d.ell(x,y,w,2,c); d.ell(x-w*.35,y-1,w*.45,2,c); d.ell(x+w*.3,y-2,w*.4,2,c); d.hline(x-w+1,x+w-1,y+2,c2)};

export default {
  // ===================== TIMMY =====================
  // Grand Opening Key: gold key whose bow is the Nook leaf crest, red celebration ribbon, sparkles
  'timmy:s2': d=>{
    const O='#3A2A1A', G='#F2C94C', G2='#D49A2A', G3='#FFF0A0', G4='#A86E1A', R='#E8504A', R2='#B23238', R3='#FF8A80';
    // bow ring
    d.circ(10,11,8.5,G2); d.circ(10,10,8,G); d.circ(9,9,6,G3); d.circ(10,10,6,G); d.circ(10,11,5,G4); d.circ(10,10,5,'#FFF8E0');
    leaf(d,7,6);
    // shaft
    d.rect(18,9,12,4,G); d.hline(18,29,9,G3); d.hline(18,29,12,G2); d.rect(17,8,2,6,G2); d.vline(17,8,13,G);
    // teeth
    d.rect(23,13,3,4,G); d.vline(25,13,16,G2); d.rect(27,13,3,3,G); d.vline(29,13,15,G2); d.px(23,16,G2);
    // ribbon bow under the ring
    d.poly([[10,20],[3,17],[4,24]],R); d.poly([[10,20],[17,17],[16,24]],R);
    d.line(4,18,9,20,R3); d.line(16,18,11,20,R2);
    d.poly([[9,21],[5,30],[8,29],[10,22]],R2); d.poly([[11,21],[15,30],[12,29],[10,22]],R);
    d.circ(10,20,1.5,R2); d.px(10,19,R3);
    d.outline(O);
    d.stamp(25,2,['..y..','..y..','yyWyy','..y..','..y..'],{y:'#FFE070',W:'#FFFFFF'});
    star4(d,21,22,'#FFE070'); d.px(30,20,'#FFE070'); d.px(1,4,'#FFE070');
  },
  // Shop Counter: Nook's Cranny interior, wood floor, shelves of goods, counter with register, ears peeking
  'timmy:c0': d=>{
    const W1='#E8C894', W2='#D8B07A', W3='#C49A64', Wd='#A87C4A', Wl='#F4DCAE';
    // back wall: warm log wall with planks
    d.grad(0,0,64,22,['#D6A86C','#CFA064']);
    for(let y=3;y<22;y+=4) d.hline(0,63,y,'#B8864E');
    for(let y=1;y<22;y+=4) for(let x=(y*3)%11;x<64;x+=13) d.px(x,y,'#E4B87E');
    // upper trim
    d.rect(0,0,64,2,'#8A5E34');
    // window with island view (left-top)
    d.rect(3,4,14,10,'#FFF4DC'); d.rect(4,5,12,8,'#A8DEF5'); d.rect(4,10,12,3,'#8FD18A'); d.circ(13,6,1,'#FFFFFF'); d.vline(10,5,12,'#FFF4DC'); d.hline(4,15,9,'#FFF4DC');
    // shelf with goods (center)
    d.rect(22,4,20,15,'#9A6A3E'); d.rect(23,5,18,13,'#7A4E2A');
    d.hline(23,40,10,'#B88050'); d.hline(23,40,17,'#B88050');
    // goods top shelf: jars, a turnip-like plant, a red box
    d.rect(24,7,3,3,'#E85A5A'); d.px(24,7,'#FF9090');
    d.rect(28,6,3,4,'#7CCB6A'); d.rect(28,6,3,1,'#4E9E4A');
    d.rect(32,8,3,2,'#F2C94C'); d.px(33,7,'#F2C94C');
    d.rect(36,6,4,4,'#8ABCF0'); d.hline(36,39,6,'#5A8ACC');
    // lower shelf: tools (net, shovel heads), fruit
    d.circ(25,15,1.5,'#F49A3A'); d.circ(28,15,1.5,'#F4A0B0'); d.px(25,13,'#4E9E4A');
    d.rect(31,12,2,5,'#B08060'); d.rect(30,12,4,2,'#C8CCD8');
    d.rect(35,13,5,4,'#FFFFFF'); d.rect(35,13,5,1,'#7CCB6A'); d.px(37,15,'#E85A5A');
    // Nook leaf sign on wall right
    d.rect(46,3,15,9,'#2E8A4A'); d.rect(47,4,13,7,'#3EA65A'); leaf(d,50,3.5,'#B8EC98','#FFFFFF','#7CCB6A','#FFF4DC');
    // floor: light planks
    d.rect(0,22,64,18,W1);
    for(let y=24;y<40;y+=3){d.hline(0,63,y,W2); for(let x=((y*7)%9);x<64;x+=11) d.px(x,y-1,W3)}
    d.hline(0,63,22,Wd);
    // rug under pet area (green, soft)
    d.ell(14,34,10,3,'#9AD48A'); d.ell(14,34,8,2,'#B8E4A6');
    // counter on right (front view, wood with green top)
    d.rect(36,21,28,15,W3); d.rect(36,21,28,2,'#4E9E4A'); d.hline(36,63,21,'#7CCB6A');
    for(let x=40;x<64;x+=6) d.vline(x,24,35,Wd);
    d.hline(36,63,35,Wd); d.rect(36,36,28,2,'#8A5E34');
    leaf(d,46,26,'#7CCB6A','#B8EC98','#3E8A3E','#5A3A1A');
    // register on counter
    d.rect(54,15,9,6,'#E85A5A'); d.rect(55,16,7,2,'#FFF4DC'); d.rect(56,13,5,2,'#B23238'); d.hline(55,61,19,'#B23238'); d.px(56,16,'#4E9E4A'); d.px(58,16,'#4E9E4A');
    d.rect(52,20,12,1,'#B23238');
    // hide and seek: someone's ears + eyes peeking over the counter
    d.ell(42,20,4,2,'#A87850'); d.circ(39,17,1.5,'#7A5230'); d.circ(45,17,1.5,'#7A5230'); d.px(39,17,'#3A2618'); d.px(45,17,'#3A2618');
    d.px(41,20,'#2A1A10'); d.px(43,20,'#2A1A10'); d.hline(40,44,19,'#C89A6A'); d.px(42,18,'#7CCB6A'); d.px(43,17,'#7CCB6A');
    d.rect(36,21,28,1,'#4E9E4A');
    // tiny "!" pop
    d.stamp(48,15,['w','w','.','w'],{w:'#FFFFFF'});
  },
  // Fruit Tree Hill: rolling green hill, peach trees, basket with only pits left, cores on grass
  'timmy:c1': d=>{
    d.grad(0,0,64,20,['#8ED6F4','#A0DEF6','#B4E6F8','#CBEFF8']);
    cloud(d,14,5,6); cloud(d,40,3,4);
    // far sea strip + distant island
    d.rect(0,14,64,3,'#6FC6E0'); d.hline(0,63,14,'#5AB2D2'); d.ell(30,14,6,1,'#9ACB7A');
    // back hill
    d.ell(46,26,28,12,'#8FD18A'); d.ell(10,24,22,6,'#A6DC92');
    // front grass
    d.rect(0,22,64,18,'#9CD98A'); d.ell(46,26,26,9,'#88CE7A'); d.ell(46,24,22,5,'#9CD98A');
    for(let y=24;y<40;y+=3) for(let x=(y*5)%7;x<64;x+=9){d.px(x,y,'#7CC26E'); d.px(x+1,y-1,'#7CC26E')}
    // tiny AC flowers (white/pink)
    for(const [x,y] of [[3,38],[26,36],[58,37],[30,27]]) d.stamp(x-1,y-1,['.p.','pyp','.p.'],{p:'#FFFFFF',y:'#F8D048'});
    // peach trees
    const pch=(x,y)=>{d.circ(x,y,1.2,'#F8A0A0'); d.px(x-1,y-1,'#FFD0C8'); d.px(x,y+1,'#E07070'); d.px(x+1,y-2,'#4E9E4A')};
    let cy=tree(d,36,27,7,'#6FBF63','#9ADB80','#4E9E4A');
    for(const [a,b] of [[-4,-1],[3,-3],[1,3],[-2,4],[5,2]]) pch(36+a,cy+b);
    cy=tree(d,54,25,8,'#6FBF63','#9ADB80','#4E9E4A');
    for(const [a,b] of [[-5,0],[2,-4],[4,3],[-1,4]]) pch(54+a,cy+b);
    // shadows under trees
    d.ell(36,28,5,1,'#78BC6A'); d.ell(54,26,6,1,'#78BC6A');
    // basket full of pits
    d.ell(46,34,5,2,'#C8955A'); d.rect(41,32,11,4,'#C8955A'); d.ell(46,32,5,1,'#8A5E34');
    for(let x=42;x<51;x+=2) d.vline(x,33,35,'#A8743E'); d.ell(46,36,5,1,'#A8743E');
    d.px(44,31,'#B86A48'); d.px(47,31,'#B86A48'); d.px(46,30,'#B86A48');
    d.line(41,32,43,27,'#8A5E34'); d.line(51,32,49,27,'#8A5E34'); d.hline(43,49,27,'#8A5E34');
    // eaten peach cores trail on grass
    const core=(x,y)=>d.stamp(x,y,['.f.','rbr','.f.'],{f:'#F8A0A0',r:'#C86A48',b:'#8A4A30'});
    core(26,31); core(30,34); core(56,31);
    // one leaf drifting
    d.stamp(22,12,['.g','gg'],{g:'#6FBF63'});
  },
  // Festival Stall: night plaza, striped Nook stall, paper lanterns, fireworks, empty crates = sold out
  'timmy:c2': d=>{
    d.grad(0,0,64,24,['#1E1F4A','#262A5A','#2E366A','#3A4478']);
    for(const [x,y] of [[4,3],[12,8],[20,2],[58,10],[30,6],[9,14]]) d.px(x,y,'#E6E8FF');
    // fireworks
    const fw=(cx,cy,r,c,c2)=>{for(let i=0;i<12;i++){const a=i/12*Math.PI*2; d.px(cx+Math.cos(a)*r,cy+Math.sin(a)*r,c); d.px(cx+Math.cos(a)*(r-2),cy+Math.sin(a)*(r-2),c2)} d.px(cx,cy,'#FFFFFF')};
    fw(18,7,5,'#FF7AA8','#FFD0E0'); fw(40,5,4,'#7AE8FF','#E0FAFF'); fw(56,4,3,'#FFE070','#FFF8C0');
    // distant trees silhouette
    for(const x of [2,10,26,62]) d.circ(x,20,4,'#24405A');
    d.rect(0,20,64,4,'#24405A');
    // plaza ground (dirt path lit warm)
    d.rect(0,24,64,16,'#5A6A4A'); d.ell(42,32,24,8,'#8A7A58'); d.ell(42,32,20,6,'#9A8A62');
    for(let y=26;y<40;y+=3) for(let x=(y*3)%8;x<64;x+=10) d.px(x,y,'#4A5A3E');
    // lantern string
    for(let x=0;x<64;x++){const y=Math.round(2+Math.abs(Math.sin(x/64*Math.PI*2))*0+ (x<32?1+((x-16)**2)/90:1+((x-48)**2)/90)); d.px(x,y+8,'#2A2A3A')}
    const lan=(x,y,c)=>{d.rect(x-1,y,3,3,c); d.px(x,y+3,'#FFE070'); d.px(x-1,y,'#FFFFFF')};
    lan(4,12,'#FF8A6A'); lan(16,10,'#FFD06A'); lan(28,12,'#FF8A6A'); lan(36,12,'#FFD06A'); lan(48,10,'#FF8A6A'); lan(60,12,'#FFD06A');
    // stall
    const X0=30, X1=60;
    d.vline(X0+1,16,35,'#8A5E34'); d.vline(X1-1,16,35,'#8A5E34');
    d.rect(X0,14,X1-X0+1,6,'#FFFFFF'); for(let x=X0;x<=X1;x+=4) d.rect(x,14,2,6,'#3EA65A');
    for(let x=X0;x<=X1;x+=2) d.px(x,20,(x/2)%2?'#3EA65A':'#FFFFFF');
    d.rect(X0-1,13,X1-X0+3,1,'#2E7A42');
    // sign board with leaf
    d.rect(40,8,12,6,'#F4DCAE'); d.frame(40,8,12,6,'#8A5E34'); leaf(d,43,7,'#3EA65A','#9ADB80','#2E7A42','#5A3A1A');
    d.vline(41,13,14,'#8A5E34'); d.vline(50,13,14,'#8A5E34');
    // inside glow
    d.rect(X0+2,21,X1-X0-3,7,'#F8D888'); d.rect(X0+2,21,X1-X0-3,1,'#FFF0B8');
    // counter
    d.rect(X0,28,X1-X0+1,8,'#C49A64'); d.hline(X0,X1,28,'#E8C894'); for(let x=X0+3;x<X1;x+=5) d.vline(x,29,35,'#A87C4A');
    // empty crates on counter (sold out) + one coin bag
    d.rect(33,25,6,3,'#A87C4A'); d.hline(33,38,25,'#C89A6A'); d.rect(34,26,4,1,'#6A4A2A');
    d.rect(41,25,6,3,'#A87C4A'); d.hline(41,46,25,'#C89A6A'); d.rect(42,26,4,1,'#6A4A2A');
    d.circ(53,25,2,'#E8C894'); d.px(53,22,'#C49A64'); d.stamp(52,24,['.y.','yyy','.y.'],{y:'#F2C94C'});
    // bells (coins) spilled on counter
    d.px(49,27,'#F2C94C'); d.px(57,27,'#F2C94C'); d.px(58,27,'#D49A2A');
    // sold-out tag with check mark
    d.rect(36,30,9,5,'#E8504A'); d.stamp(38,31,['....w','w..w.','.ww..'],{w:'#FFFFFF'});
  },

  // ===================== TOMMY =====================
  // Copied Note: two notes, Timmy's neat one behind, Tommy's wobbly copy in front, autumn leaf, pencil
  'tommy:s0': d=>{
    const O='#3A2A1A', P='#FFFBEA', P2='#EADFC0', Pb='#F2F8E6', I='#5A6A8A', I2='#8A9AB8';
    // back note (Timmy's, tilted left)
    d.poly([[3,4],[20,2],[22,22],[5,24]],Pb); d.line(3,4,20,2,'#B8D49A');
    for(let k=0;k<4;k++) d.line(6,8+k*4,18,6.5+k*4,I2);
    // front note (Tommy's copy)
    d.poly([[9,9],[28,10],[27,29],[8,28]],P); d.line(8,28,27,29,P2); d.line(27,10,27,29,P2);
    // wobbly copied lines
    for(let k=0;k<4;k++){const y=14+k*4; for(let x=11;x<25;x++){if(k===3&&x>18) break; d.px(x,y+((x+k)%3===0?1:0),I)}}
    // "..." trailing dots
    d.px(20,26,I); d.px(22,26,I); d.px(24,26,I);
    d.outline(O);
    // maple leaf pinned on top-right corner
    d.stamp(20,2,[
      '...o...',
      '..ooo..',
      'o.oOo.o',
      'ooOOOoo',
      '.ooOoo.',
      'ooo.ooo',
      '...s...',
      '...s...'],{o:'#F08A3A',O:'#F8B860',s:'#8A4A2A'});
    // pencil at bottom-left
    thick(d,2,29,9,22,1,'#F2C94C'); d.line(2,28,8,22,'#FFE890');
    d.px(9,21,'#F4A0B0'); d.px(10,21,'#F4A0B0'); d.px(10,20,'#F4A0B0');
    d.px(1,30,'#E8C894'); d.px(2,30,'#E8C894'); d.px(1,31,'#3A3A3A');
    d.outline(O);
  },
  // Half an Orange: AC orange cut in half, juicy segments, leaf on stem, the other half's peel cap behind
  'tommy:s1': d=>{
    const O='#5A2A10', P='#F28A1E', P2='#D0681A', P3='#FFB24A', Pt='#FFF0C8', F='#FFA640', F2='#FFC870', F3='#F08A2A';
    // the other half behind, peel side up (small)
    d.ell(24,10,6,5,P); d.ell(23,8,4,3,P3); d.ell(25,13,5,2,P2); d.px(22,7,'#FFE0A0');
    d.vline(24,4,5,'#6A4A2A');
    // big cut half: peel rim (side) + face
    d.ell(14,20,12,10,P2); d.ell(14,19,12,9,P);
    d.ell(14,18,11,7,Pt); d.ell(14,18,10,6,F2);
    // segments
    for(let i=0;i<8;i++){const a=i/8*Math.PI*2; d.line(14,18,14+Math.cos(a)*10,18+Math.sin(a)*6,Pt)}
    for(let i=0;i<8;i++){const a=(i+.5)/8*Math.PI*2; d.px(14+Math.cos(a)*6,18+Math.sin(a)*3.6,F); d.px(14+Math.cos(a)*7.5,18+Math.sin(a)*4.5,F3)}
    d.circ(14,18,1,Pt);
    // peel dimples
    for(const [x,y] of [[6,25],[10,27],[18,27],[22,25],[14,28]]) d.px(x,y,P3);
    // juice drops
    d.px(8,15,'#FFFFFF'); d.px(9,14,'#FFFFFF');
    d.outline(O);
    // leaf on small half
    d.stamp(25,1,['..gg','.gGg','gGg.','gg..'],{g:'#4E9E4A',G:'#8FD18A'});
    d.px(4,8,'#FFE070'); star4(d,6,6,'#FFE070');
  },
  // Shooting Star Wish Card: navy card, big shooting star with pastel trail, two matching tiny stars, string tie
  'tommy:s2': d=>{
    const O='#1E1A3A', N='#2E3A7A', N2='#3E4E9A', N3='#22285E', Y='#FFE070', Y2='#F2B83A', Y3='#FFFFFF', Ed='#F4E6C0';
    // card
    d.rect(4,5,24,25,Ed); d.rect(5,6,22,23,N); d.rect(5,6,22,8,N2); d.rect(5,22,22,7,N3);
    // hole + string
    d.circ(16,8,1,Ed); d.px(16,8,O);
    d.line(16,7,13,1,'#E8504A'); d.line(16,7,19,1,'#E8504A');
    // trail (pastel rainbow) from top-right to star
    d.line(26,8,15,17,'#F8A0C8'); d.line(26,9,15,18,'#A0E0F8'); d.line(26,10,16,18,'#B8EC98');
    // star
    star5(d,12,20,6,2.6,Y); star5(d,12,20,4,1.8,Y3); star5(d,12,20.5,4,1.8,Y);
    d.px(11,19,Y3); d.px(10,19,Y3);
    // two tiny matching wish stars on bottom (same wish!)
    star4(d,19,25,Y); star4(d,23,25,Y);
    // dotted star dust
    for(const [x,y] of [[8,10],[22,14],[7,27],[25,20],[20,8]]) d.px(x,y,'#C8D0FF');
    d.outline(O);
    d.stamp(27,0,['.y.','yWy','.y.'],{y:Y,W:Y3});
  },
  // Shade by the Shop: big hardwood tree shade at left, Nook's Cranny building on right, sunny day
  'tommy:c0': d=>{
    d.grad(0,0,64,18,['#9EDCF6','#AEE2F8','#C0EAFA']);
    cloud(d,36,4,5);
    // grass
    d.rect(0,17,64,23,'#9CD98A');
    for(let y=19;y<40;y+=3) for(let x=(y*7)%9;x<64;x+=11){d.px(x,y,'#86C874'); d.px(x+1,y-1,'#86C874')}
    // paved stone path to shop door
    for(let i=0;i<5;i++){const x=48-i*2, y=38-i*3; d.ell(x,y,3,1,'#E0D6C0'); d.px(x-1,y,'#F0E8D6')}
    // shop: Nook's Cranny style (cozy wooden hut, dark brown roof, leaf sign)
    d.rect(38,10,24,14,'#C89A64'); for(let y=12;y<24;y+=3) d.hline(38,61,y,'#A87C4A');
    d.poly([[34,11],[50,1],[66,11]],'#7A4A2A'); d.poly([[37,10],[50,3],[63,10]],'#9A5E34');
    for(let y=5;y<11;y+=2) d.hline(50-(y-2)*1.4,50+(y-2)*1.4,y,'#7A4A2A');
    d.hline(34,63,11,'#5A341A');
    // door + windows
    d.rect(46,15,8,9,'#6A4A2A'); d.rect(47,16,6,8,'#8A5E34'); d.px(52,20,'#F2C94C');
    d.rect(40,14,4,4,'#FFF4C0'); d.frame(40,14,4,4,'#6A4A2A'); d.rect(56,14,4,4,'#FFF4C0'); d.frame(56,14,4,4,'#6A4A2A');
    // leaf sign above door
    d.rect(45,5,10,6,'#3EA65A'); d.frame(45,5,10,6,'#2E7A42'); leaf(d,47,4,'#B8EC98','#FFFFFF','#7CCB6A','#FFF4DC');
    // foundation + shrubs
    d.hline(38,61,24,'#8A6A4A'); d.circ(37,24,2,'#4E9E4A'); d.circ(62,24,2,'#4E9E4A'); d.px(36,23,'#F4A0B0'); d.px(62,23,'#FFFFFF');
    // big tree: trunk just right of pet area, crown over the top-left
    d.ell(16,33,18,6,'#82C272'); d.ell(16,33,15,4,'#7ABA6A'); // shade on grass (still open ground)
    d.rect(24,8,4,24,'#9A6A40'); d.vline(27,8,31,'#6E4A2A'); d.vline(24,10,30,'#B07C4C'); d.px(23,31,'#9A6A40'); d.px(28,31,'#6E4A2A');
    d.line(25,12,19,8,'#9A6A40');
    d.circ(18,5,10,'#4E9E4A'); d.circ(10,4,8,'#5EAE58'); d.circ(26,3,8,'#5EAE58'); d.circ(16,1,8,'#6FBF63'); d.circ(5,8,6,'#4E9E4A'); d.circ(31,8,5,'#4E9E4A');
    d.circ(12,1,4,'#8FD18A'); d.circ(24,0,3,'#8FD18A');
    for(let i=0;i<14;i++) d.px(d.ri(2,34),d.ri(0,12),'#3E8A3E');
    // fallen leaf + small sign "waiting" (a little stool)
    d.stamp(30,35,['.g','gg'],{g:'#6FBF63'});
    d.rect(31,27,5,1,'#C89A64'); d.vline(31,28,30,'#8A5E34'); d.vline(35,28,30,'#8A5E34');
    // butterfly
    d.stamp(34,18,['y.y','.k.','y.y'],{y:'#F8D048',k:'#3A2A1A'});
  },
  // Island Beach: diagonal shoreline, palm tree with coconuts, big scallop shell beside a small one
  'tommy:c1': d=>{
    d.grad(0,0,64,14,['#70CCF2','#86D6F4','#9CDEF6']);
    cloud(d,10,5,5); cloud(d,30,3,3);
    // sea on upper right, diagonal shore
    d.rect(0,10,64,6,'#4EB8DE'); d.hline(0,63,10,'#3AA2CE');
    d.poly([[30,16],[64,10],[64,30],[46,30]],'#4EB8DE');
    d.poly([[0,16],[30,16],[46,30],[64,30],[64,40],[0,40]],'#F6E2B0');
    // shallows + foam band
    d.poly([[30,16],[46,30],[50,30],[34,16]],'#8EDAEC');
    for(let i=0;i<20;i++){const t=i/20; d.px(28+t*16,16+t*14,'#FFFFFF'); d.px(29+t*16,16+t*14,'#FFFFFF')}
    for(let x=0;x<30;x++) if(x%5!==0) d.px(x,16,'#FFFFFF');
    for(let x=36;x<64;x+=6){d.hline(x,x+2,13+((x/6)%2),'#86D6F4'); d.hline(x+10,x+11,20+((x/6)%3),'#86D6F4')}
    // sand texture (soft dots in rows)
    for(let y=19;y<40;y+=3) for(let x=(y*5)%8;x<64;x+=8) d.px(x,y,'#E8CC90');
    // palm tree on right
    d.line(56,36,58,16,'#B07C4C'); d.line(57,36,59,16,'#8A5E34');
    for(let y=19;y<36;y+=3) d.hline(56+(36-y)/9,58+(36-y)/9,y,'#6E4A2A');
    const frond=(pts,c)=>{for(let i=0;i+1<pts.length;i++) thick(d,pts[i][0],pts[i][1],pts[i+1][0],pts[i+1][1],1,c)};
    frond([[58,15],[52,13],[47,16]],'#4E9E4A'); frond([[58,15],[64,13],[66,17]],'#4E9E4A');
    frond([[58,15],[54,8],[49,8]],'#6FBF63'); frond([[58,15],[62,8],[66,9]],'#6FBF63'); frond([[58,15],[58,9],[56,6]],'#8FD18A');
    d.circ(57,17,1.3,'#7A5230'); d.circ(60,17,1.3,'#7A5230'); d.px(57,16,'#A87850');
    d.ell(56,37,6,1,'#E0C488');
    // big scallop shell (center) + smaller one next to it
    d.stamp(34,29,[
      '...ppppp...',
      '..pPpPpPp..',
      '.pPpPpPpPp.',
      'pPpPpPpPpPp',
      'pPpPpPpPpPp',
      '.pPpPpPpPp.',
      '..ppppppp..',
      '...rr.rr...',
      '...rrrrr...'],{p:'#F8A0A0',P:'#FFD0C8',r:'#D87070'});
    d.stamp(28,34,['.pp.','pPPp','.rr.'],{p:'#F4C8A0',P:'#FFE6D0',r:'#C89070'});
    // starfish and footprints toward the shell
    d.stamp(42,24,['..s..','sssss','.sss.','s...s'],{s:'#F49A3A'});
    for(const [x,y] of [[24,30],[26,33],[22,27]]) {d.px(x,y,'#E0C488'); d.px(x+1,y,'#E0C488')}
    // bucket
    d.rect(46,33,5,4,'#E8504A'); d.hline(45,51,33,'#FF8A80'); d.line(46,33,48,30,'#3A3A3A'); d.line(50,33,48,30,'#3A3A3A');
  },
  // Night of Shooting Stars: meteor shower over cliff + sea, crescent moon, starry purple sky
  'tommy:c2': d=>{
    d.grad(0,0,64,24,['#141238','#1C1A4A','#262460','#33307A','#46409A','#5A4EA8']);
    // milky-way dither band
    for(let i=0;i<64;i++){const y=Math.round(4+i*0.22); if(i%3===0) d.px(i,y,'#4E4C98')}
    // stars
    for(let i=0;i<34;i++) d.px(d.ri(0,63),d.ri(0,20),d.rnd()<.7?'#C8CCFF':'#FFF4B0');
    star4(d,10,5,'#FFE070'); star4(d,28,9,'#C8E8FF'); star4(d,60,15,'#FFE070');
    // crescent moon
    d.circ(52,6,4,'#FFF4B0'); d.circ(54,5,3.6,'#1C1A4A');
    // shooting stars (many, parallel)
    const meteor=(x,y,l)=>{for(let k=0;k<l;k++){d.px(x+k,y-k*0.5,k<2?'#FFFFFF':k<l/2?'#FFE070':'#8A80D8')} d.px(x,y+1,'#FFF8C0')};
    meteor(18,12,10); meteor(34,6,12); meteor(40,16,7); meteor(6,16,6); meteor(46,12,6);
    // sea on right with moon reflection
    d.rect(34,22,30,18,'#24306A'); d.hline(34,63,22,'#3A4A90');
    for(let y=24;y<40;y+=3) for(let x=36+(y%2)*3;x<64;x+=7) d.hline(x,x+2,y,'#34428A');
    for(let y=24;y<38;y+=2) d.hline(51-((y/2)%2),53+((y/2)%2),y,'#E8DCA0');
    // grassy cliff (left) at night
    d.rect(0,22,36,18,'#3E6A5A'); d.poly([[30,22],[38,22],[40,40],[32,40]],'#3E6A5A');
    d.hline(0,37,22,'#5A8A6A'); d.line(37,22,40,40,'#2A4A40'); d.line(36,23,38,40,'#2A4A40');
    for(let y=24;y<40;y+=3) for(let x=(y*3)%7;x<34;x+=9){d.px(x,y,'#36605A'); d.px(x+1,y-1,'#4E7A64')}
    // night flowers + small wish-sign hint: a wish star pinwheel stuck in ground
    for(const [x,y] of [[26,34],[30,28],[4,38]]) d.stamp(x-1,y-1,['.w.','wyw','.w.'],{w:'#D8D0FF',y:'#FFE070'});
    // silhouetted tree (right edge of cliff)
    // distant island silhouette
    d.ell(48,22,6,2,'#1C2650'); d.rect(42,22,13,1,'#1C2650');
  },

  // ===================== BLATHERS =====================
  // Dino Toe Bone: big curved claw bone with knuckle segments, fossil cracks, little museum tag
  'blathers:s0': d=>{
    const O='#3A2A1A', B='#EEDDB4', B2='#D4BC8A', B3='#FFF6DC', B4='#B09468';
    // toe bone segments, each with knobbed knuckle ends, then a big hooked claw
    const bone=(x0,y0,x1,y1)=>{thick(d,x0,y0,x1,y1,1.6,B); d.circ(x0,y0,2.6,B); d.circ(x1,y1,2.6,B); d.line(x0,y0-1.5,x1,y1-1.5,B3); d.line(x0+.5,y0+2,x1,y1+2,B2); d.px(x0-1,y0-1,B3)};
    bone(5,7,11,10); bone(14,12,18,15);
    // claw
    d.poly([[19,13],[24,13],[28,16],[30,21],[30,28],[28,24],[25,20],[20,18]],B);
    d.poly([[25,18],[28,22],[30,28],[27,22]],B2); d.line(22,14,27,16,B3); d.line(27,16,29,20,B3);
    d.circ(21,15,2.6,B); d.px(20,14,B3);
    // fossil cracks
    d.line(8,7,9,9,B4); d.px(16,13,B4); d.px(24,16,B4); d.px(25,17,B4);
    d.outline(O);
    d.line(12,9,13,12,O); d.line(19,12,19,17,O);
    // museum tag on string
    d.line(6,10,6,17,'#8A5E34'); d.rect(2,17,9,6,'#FFFBEA'); d.frame(2,17,9,6,'#8A5E34'); d.hline(4,8,19,'#6A8ACC'); d.hline(4,7,21,'#B8C8E8'); d.px(6,17,'#8A5E34');
    star4(d,26,6,'#FFE070'); d.px(29,10,'#FFE070');
  },
  // Appraisal Loupe: brass-rimmed magnifier with wooden handle, magnified ammonite in lens
  'blathers:s1': d=>{
    const O='#2A1E14', M='#D8A848', M2='#A87420', M3='#FFE08A', L='#CFEFF8', L2='#A6DCEC', H='#8A5230', H2='#6A3A1E', H3='#B07040';
    // handle (diagonal down-right)
    thick(d,19,19,28,28,2,H); d.line(19,18,27,26,H3); d.line(21,21,29,29,H2);
    thick(d,18,18,20,20,2.2,M2); d.line(17,17,20,19,M3);
    // rim
    d.circ(12,12,10,M2); d.circ(12,12,9,M); d.ring(12,12,9,M3);
    d.circ(12,12,7.4,L);
    // ammonite fossil inside (magnified)
    d.circ(13,13,5,'#C8A878');
    const sp=[]; for(let t=0;t<16;t+=.25){const r=4.5-t*.27; sp.push([13+Math.cos(t)*r,13+Math.sin(t)*r])}
    for(let i=0;i+1<sp.length;i++) d.line(sp[i][0],sp[i][1],sp[i+1][0],sp[i+1][1],'#8A6A40');
    d.px(13,13,'#8A6A40');
    // glass shine
    d.line(7,9,9,6,'#FFFFFF'); d.px(7,10,'#FFFFFF'); d.px(10,6,L2); d.ell(16,17,2,1,L2);
    // owl-feather charm tied on handle
    d.line(27,27,24,31,'#3EA65A'); d.stamp(21,28,['..ff','.fFf','fFf.','ff..'],{f:'#8A6A4A',F:'#C8A878'});
    d.outline(O);
    star4(d,26,4,'#FFE070'); d.px(29,8,'#FFE070');
  },
  // Complete T. Rex Fossil: full skeleton on a plaque: skull, spine with ribs, legs, long tail
  'blathers:s2': d=>{
    const O='#2E2418', B='#EEDDB4', B2='#C8AE7C', B3='#FFF6DC', P='#8A5E34', P2='#6A4422', P3='#B08050', Au='#F2C94C';
    // plaque base
    d.rect(2,27,28,4,P); d.hline(2,29,27,P3); d.hline(2,29,30,P2); d.rect(13,28,6,2,Au);
    // support poles
    d.vline(14,17,26,'#8A8A9A'); d.vline(22,19,26,'#8A8A9A');
    // tail: from hips to right & down
    thick(d,19,15,24,17,1.2,B); thick(d,24,17,28,20,1,B); thick(d,28,20,30,23,.6,B);
    for(let x=20;x<30;x+=2) d.px(x,16+(x-19)*.6,B2);
    // spine (back) from neck to hips
    thick(d,9,10,19,14,1.2,B);
    for(let x=10;x<19;x+=2) d.px(x,10+(x-9)*.4-1,B3);
    // ribs
    for(let i=0;i<5;i++){const x=11+i*1.8, y=11+i*.5; d.line(x,y,x-.5,y+5-i*.4,B); d.px(x-.5,y+5-i*.4,B2)}
    // pelvis
    d.ell(19,15,2.5,2,B); d.px(19,15,B2);
    // legs: thigh, shin, foot
    thick(d,19,16,17,21,1,B); thick(d,17,21,19,25,.8,B); d.hline(18,22,26,B); d.px(22,25,B);
    thick(d,21,16,22,21,.8,B2); thick(d,22,21,23,25,.6,B2); d.hline(23,26,26,B2);
    // tiny arms
    d.line(10,15,11,17,B); d.px(12,17,B);
    // neck + skull
    thick(d,6,8,9,10,1,B);
    d.poly([[1,4],[6,2],[9,4],[9,8],[6,9],[1,8]],B);
    d.ell(6,4,1.4,1,B3); d.px(6,5,O); d.px(5,5,O); // eye socket
    d.hline(1,7,7,O); for(let x=2;x<8;x+=2) d.px(x,6,B3); // jaw line + teeth
    d.px(3,3,B2); d.px(8,6,B2);
    d.outline(O);
    // tiny gold crown sparkle: "complete!"
    d.stamp(25,2,['..y..','..y..','yyWyy','..y..','..y..'],{y:'#FFE070',W:'#FFFFFF'});
  },
  // Museum Entrance: grand lobby, owl crest over the main arch, three wings (fossil, fish, bug), banners
  'blathers:c0': d=>{
    // wall: warm stone
    d.grad(0,0,64,24,['#C8B898','#D4C4A2','#DCCCAA']);
    for(let y=4;y<24;y+=5) d.hline(0,63,y,'#BCAA88');
    for(let y=0;y<24;y+=5) for(let x=((y/5)%2)*6;x<64;x+=12) d.vline(x,y+1,y+4,'#BCAA88');
    d.rect(0,0,64,2,'#7A5A3A'); d.hline(0,63,2,'#A87C4A');
    // arches: fossil (center), fish (right), bug (far right top small)
    const arch=(cx,w,top,c,inner)=>{d.rect(cx-w-1,top+w,2*w+3,24-top-w,c); d.circ(cx,top+w,w+1,c); d.rect(cx-w,top+w,2*w+1,24-top-w,inner); d.circ(cx,top+w,w,inner)};
    arch(36,6,4,'#8A6A4A','#3A2E3A');
    arch(55,4,8,'#8A6A4A','#2A3A5A');
    // interior glimpses
    // fossil hall: dino skull silhouette
    d.stamp(32,12,['.bbbbb..','bbobbbbb','bbbbbbb.','b.b.b.b.','........','...bb...','...bb...'],{b:'#E6D4A8',o:'#3A2E3A'});
    // fish hall: aquarium blue + fish
    d.rect(52,13,7,11,'#3A7AB8'); d.stamp(53,16,['.cc.c','cccc.','.cc.c'],{c:'#F49A3A'}); d.px(56,20,'#9AD8F8'); d.px(54,21,'#9AD8F8');
    // owl crest above main arch
    d.circ(36,3,3,'#F2C94C'); d.circ(36,3,2,'#D49A2A'); d.stamp(34,1,['.y.y.','y.y.y','.yyy.'].map(r=>r),{y:'#FFF0A0'});
    d.px(35,3,'#3A2A1A'); d.px(37,3,'#3A2A1A');
    // columns
    const col=(x)=>{d.rect(x,3,4,21,'#EFE6D0'); d.vline(x+3,3,23,'#CFC4A8'); d.vline(x+1,4,23,'#FFFFFF'); d.rect(x-1,3,6,2,'#D8CCB0'); d.rect(x-1,22,6,2,'#D8CCB0')};
    col(24); col(45); col(61);
    // hanging banners (left wall) — leaf + bone
    d.rect(4,4,6,11,'#3E8A5A'); d.poly([[4,15],[7,17],[10,15]],'#3E8A5A'); leaf(d,4,6,'#B8EC98','#FFFFFF','#7CCB6A','#FFF4DC');
    d.rect(14,4,6,11,'#8A3A3A'); d.poly([[14,15],[17,17],[20,15]],'#8A3A3A');
    d.stamp(15,6,['ww..','www.','.ww.','.ww.','.www','..ww'],{w:'#F4E6C0'});
    // floor: checkered marble
    d.rect(0,24,64,16,'#E8DCC0');
    for(let y=24;y<40;y+=4) for(let x=0;x<64;x+=8) d.rect(x+((y/4)%2)*4,y,4,4,'#D4C4A2');
    d.hline(0,63,24,'#A88A5A');
    // red carpet from main arch to front center/right
    d.poly([[31,24],[41,24],[50,40],[30,40]],'#C84848'); d.line(31,24,30,40,'#E8C060'); d.line(41,24,50,40,'#E8C060');
    d.line(36,25,40,39,'#D86060');
    // info desk with bell (Blathers' spot) at right of arch
    d.rect(50,28,13,7,'#8A5E34'); d.hline(50,62,28,'#B08050'); d.rect(51,30,11,1,'#6A4422');
    d.circ(56,27,1.2,'#F2C94C'); d.px(56,25,'#D49A2A');
    // potted plants
    d.rect(2,31,4,4,'#C8786A'); d.circ(4,28,3,'#4E9E4A'); d.circ(3,27,1,'#8FD18A');
    // welcome mat glow dots / feathers
    d.stamp(43,36,['.f','ff'],{f:'#8A6A4A'});
  },
};
