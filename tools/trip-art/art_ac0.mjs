// ac0: Animal Crossing gifts (nook, isabelle, timmy). Souvenirs 32x32, postcards 64x40.
const thick=(d,x0,y0,x1,y1,r,c)=>{const n=Math.max(Math.abs(x1-x0),Math.abs(y1-y0))*2||1; for(let i=0;i<=n;i++) d.circ(x0+(x1-x0)*i/n,y0+(y1-y0)*i/n,r,c)};
// leaf shape from base (x0,y0) to tip (x1,y1); pal: [light side, mid side, dark edge, vein]
const leaf=(d,x0,y0,x1,y1,wid,pal,veins=true)=>{
  const dx=x1-x0, dy=y1-y0, L=Math.hypot(dx,dy), ux=dx/L, uy=dy/L;
  for(let y=0;y<d.H;y++)for(let x=0;x<d.W;x++){
    const px=x-x0, py=y-y0, t=(px*ux+py*uy)/L, v=px*-uy+py*ux;
    if(t<0||t>1) continue;
    const w=wid*Math.pow(Math.sin(Math.PI*Math.pow(t,0.85)),0.65);
    if(Math.abs(v)>w) continue;
    let c=v<0?pal[0]:pal[1];
    if(v>0&&Math.abs(v)>w-1.2) c=pal[2];
    if(Math.abs(v)<0.55&&t<0.92) c=pal[3];
    d.px(x,y,c);
  }
  if(veins&&L>8) for(const t of [0.32,0.52,0.72]){
    const bx=x0+dx*t, by=y0+dy*t, wl=wid*0.55;
    for(const s of [-1,1]) d.line(bx,by,bx+(-uy*s)*wl+ux*wl*0.7,by+(ux*s)*wl+uy*wl*0.7,pal[3]);
  }
};
// ACNH round tree
const tree=(d,x,y,r,pal,fruit)=>{
  d.rect(x-1,y,3,r+2,'#8A5A34'); d.vline(x+1,y,y+r+1,'#6A4026'); d.hline(x-2,x+2,y+r+2,'#6A4026');
  d.circ(x,y-r*0.3,r,pal[2]); d.circ(x-0.6,y-r*0.45,r-1,pal[1]);
  d.circ(x-r*0.35,y-r*0.7,r*0.45,pal[0]);
  d.px(x+r*0.4,y-r*0.1,pal[2]);
  if(fruit) for(const [a,b] of [[-0.5,-0.1],[0.4,-0.5],[0.2,0.25]]) {d.px(x+a*r,y+b*r,fruit); d.px(x+a*r+1,y+b*r,fruit); d.px(x+a*r,y+b*r+1,fruit); d.px(x+a*r+1,y+b*r+1,fruit);}
};
const merge=(d,m)=>{for(const k in m) d.recolor(k,m[k])};
const inLeaf=(x,y,x0,y0,x1,y1,wid)=>{const dx=x1-x0,dy=y1-y0,L=Math.hypot(dx,dy),t=((x-x0)*dx+(y-y0)*dy)/L/L,v=((x-x0)*-dy+(y-y0)*dx)/L; if(t<0||t>1) return false; return Math.abs(v)<=wid*Math.pow(Math.sin(Math.PI*Math.pow(t,0.85)),0.65)};
const flower=(d,x,y,c,cc='#FFE680')=>{d.px(x,y-1,c);d.px(x-1,y,c);d.px(x+1,y,c);d.px(x,y+1,c);d.px(x,y,cc)};
const star5=(d,cx,cy,r,c)=>{const p=[]; for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5, rr=i%2?r*0.45:r; p.push([cx+Math.cos(a)*rr,cy+Math.sin(a)*rr])} d.poly(p,c)};
// Nook Inc. leaf emblem (small): leaf in a ring
const emblem=(d,cx,cy,bg,fg)=>{d.circ(cx,cy,3,bg); d.stamp(cx-2,cy-2,['...ff','.fff.','ffff.','.ff..','f....'],{f:fg})};

export default {
  // ===================== NOOK =====================
  // Leaf Wrapping Paper: the island "leaf" item icon, a fat green leaf with curled stem tied with twine
  'nook:s0': d=>{
    const O='#24402A';
    leaf(d,7,25,27,4,9.5,['#9EE07A','#62BE4E','#3E9440','#3A8A3C']);
    // highlight along light side
    d.line(10,17,15,11,'#C6F2A0'); d.line(11,18,16,12,'#B4EC90');
    d.outline(O);
    // stem curling
    thick(d,7,25,4,28,0.6,'#8A5A30'); d.px(3,28,'#8A5A30'); d.px(3,27,'#8A5A30'); d.px(4,26,'#A87440');
    // twine bow
    d.stamp(5,21,['r.r','.r.','r.r'],{r:'#D84848'}); d.px(6,22,'#F07070');
    d.outline(O);
    // sparkles
    d.stamp(23,20,['.w.','www','.w.'],{w:'#FFF6B0'}); d.px(28,14,'#FFF6B0'); d.px(4,6,'#FFF6B0'); d.px(5,7,'#FFF6B0');
  },
  // Bag of Bells: tied cloth money sack with bell emblem, spilled coins
  'nook:s1': d=>{
    const O='#3A2A1A', S='#EAD6A8', S2='#CDB27C', S3='#A88A58', H='#FFF4D6', T='#8A5A30', Y='#F6C838', Y2='#C89420', Y3='#FFF0A0';
    // body
    d.ell(15,20,11,9,S2); d.ell(14,19,10,8,S); d.ell(12,16,5,4,H); d.ell(13,17,6,4,S);
    d.ell(15,26,9,2,S2);
    // neck + flaps
    d.poly([[11,10],[19,10],[17,13],[13,13]],S); d.poly([[8,4],[13,9],[11,11]],S); d.poly([[22,4],[17,9],[19,11]],S2);
    d.poly([[12,3],[15,9],[18,3],[16,6],[14,6]],S); d.line(14,5,15,9,S3); d.line(9,5,12,9,H);
    // tie
    d.rect(11,10,9,2,T); d.hline(11,19,10,'#B07A40');
    d.line(19,11,23,14,T); d.px(24,15,T);
    // bell emblem on bag
    d.stamp(10,15,[
      '....yy....',
      '...yYYy...',
      '..yYYyyy..',
      '..yYyyyy..',
      '.yYyyyyyy.',
      '.yyyyyyyy.',
      'gggggggggg',
      '....gg....'],{y:Y,Y:Y3,g:Y2});
    d.px(14,14,Y2);
    // creases
    d.line(6,22,9,26,S3); d.line(24,21,22,26,S3);
    // spilled coins
    for(const [x,y] of [[26,27],[4,28]]){d.ell(x,y,2,1,Y); d.px(x-1,y-1,Y3); d.hline(x-1,x+1,y+1,Y2);}
    d.outline(O);
    d.stamp(25,6,['.w.','wYw','.w.'],{w:'#FFF6B0',Y:'#FFFFFF'}); d.px(5,12,'#FFF6B0');
  },
  // Island Getaway Contract: paper with leaf emblem, lines, signature and fountain pen
  'nook:s2': d=>{
    const O='#2E2A22', P='#FFF8E6', P2='#EEDFBE', P3='#D8C49A', G='#3F9E5A', G2='#2E7A44', L='#B8A890', R='#D84848';
    d.rect(5,3,20,26,P); d.rect(5,27,20,2,P2); d.vline(24,3,28,P2);
    // curled bottom
    d.ell(15,29,10,1,P3);
    // header band
    d.rect(5,3,20,4,G); d.hline(5,24,7,G2);
    d.circ(15,6,3,P); d.stamp(13,4,['...ff','.fff.','ffff.','.ff..','f....'],{f:G});
    // text lines
    for(const y of [10,12,14,16]){ d.hline(8,8+(y%4?14:12),y,L); }
    d.hline(8,15,18,L);
    // island sketch
    d.ell(19,19,3,1,'#F2D9A0'); d.px(19,17,'#5DB84A'); d.px(18,18,'#5DB84A'); d.px(20,18,'#5DB84A'); d.px(19,18,'#8A5A30');
    // signature line + scribble
    d.hline(7,22,25,'#6A5A48');
    d.stamp(8,21,['..x.....x....','.x.x...x.x..x','x...x.x...xx.','.....x.......'],{x:'#3A58A8'});
    // seal
    d.circ(21,22,2,R); d.px(20,21,'#F08080');
    d.outline(O);
    // fountain pen lying diagonally
    thick(d,17,30,28,19,1,'#2F6B48'); d.line(18,29,27,20,'#4FA070');
    d.rect(26,18,2,2,'#E8C060'); d.px(29,17,'#E8C060');
    d.line(16,31,15,31,'#C8C8D0'); d.px(16,30,'#C8C8D0');
    d.outline(O);
    d.px(3,10,'#FFF6B0'); d.px(27,6,'#FFF6B0'); d.px(28,5,'#FFF6B0'); d.px(26,5,'#FFF6B0'); d.px(27,4,'#FFF6B0');
  },
  // Nook's Cranny interior: wood walls, leaf sign, shelves, counter with register, welcome mat
  'nook:c0': d=>{
    // back wall: wood planks
    d.rect(0,0,64,24,'#C89A62');
    for(let x=0;x<64;x+=6){d.vline(x,0,23,'#A87A48');}
    for(let x=3;x<64;x+=6){d.px(x,5,'#B88A54'); d.px(x,15,'#B88A54');}
    d.rect(0,0,64,2,'#7A5232'); d.hline(0,63,2,'#94663E');
    // wainscot
    d.rect(0,19,64,5,'#8A5A34'); d.hline(0,63,19,'#A87444'); d.hline(0,63,23,'#6A4426');
    // green awning valance
    for(let x=0;x<64;x++){const c=Math.floor(x/4)%2?'#F4F0DC':'#4FA860'; d.vline(x,2,4,c); if(x%4===1||x%4===2) d.px(x,5,c);}
    // leaf sign center-right
    d.rect(31,7,12,10,'#6A4426'); d.rect(32,8,10,8,'#F4E6C0');
    leaf(d,33,15,41,8,3.2,['#9EE07A','#5DB84A','#3E9440','#3A8A3C'],false);
    // shelves left (above pet area, ok) with goods
    d.rect(2,9,24,2,'#7A5232'); d.hline(2,25,9,'#9A6A40');
    d.stamp(3,5,['.rr..yy..bbb..ggg..pp.',
                 'rrrr.yy..b.b..gGg.pppp',
                 'rrrr.yy..bbb..ggg.pppp',
                 '.rr..yy..bbb..ggg..pp.'],{r:'#E85A5A',y:'#F6C838',b:'#5AA0E0',g:'#6AC070',G:'#FFFFFF',p:'#F098C0'});
    d.rect(2,17,24,2,'#7A5232');
    d.stamp(4,12,['.oo.oo..cc....ww..',
                  'oooooo.cccc..wwww.',
                  'oooooo.cccc..wWWw.',
                  '.oo.oo.cccc..wwww.',
                  '.......cccc..wwww.'],{o:'#F59A3A',c:'#A07AD0',w:'#F4F4F4',W:'#7AB8E0'});
    // right shelf with furniture + plant
    d.rect(46,11,17,2,'#7A5232'); d.hline(46,62,11,'#9A6A40');
    d.stamp(47,6,['.gg..lll..rr.','gggg..l..rrrr','.bb...l..rrrr','.bb..lll.rrrr','.bb..lll..rr.'],{g:'#4FA860',b:'#C07A48',l:'#F0E070',r:'#E86A6A'});
    // floor
    d.rect(0,24,64,16,'#E8C894');
    for(let y=24;y<40;y+=4){d.hline(0,63,y,'#D4AE78'); for(let x=((y/4)%2)*8;x<64;x+=16) d.vline(x,y+1,y+3,'#D4AE78');}
    // counter right
    d.rect(36,20,28,10,'#9A6A3E'); d.rect(36,20,28,2,'#C08A50'); d.hline(36,63,22,'#7A5232');
    for(let x=40;x<64;x+=6) d.vline(x,23,29,'#86592F');
    d.rect(36,30,28,1,'#6A4426');
    // leaf on counter front
    emblem(d,50,26,'#F4E6C0','#4FA860');
    // cash register
    d.rect(53,15,9,5,'#6A7C8A'); d.rect(54,16,5,2,'#B8E8C8'); d.px(55,17,'#3A8A3C'); d.px(57,17,'#3A8A3C');
    d.rect(53,19,9,1,'#4A5A66'); d.rect(59,14,3,1,'#6A7C8A'); d.px(60,17,'#E85A5A'); d.px(60,18,'#F6C838');
    // basket of fruit on counter
    d.rect(40,17,7,3,'#C08A50'); d.hline(40,46,17,'#A06A34');
    d.stamp(40,14,['.rr.oo.','rrroooo','.ppp...'],{r:'#E84848',o:'#F59A3A',p:'#C8D860'});
    // two little twin welcome mats (green & blue), hint of the twins
    d.ell(29,35,5,2,'#68C070'); d.ell(29,35,3,1,'#9EE07A'); d.px(29,35,'#3A8A3C');
    d.ell(42,35,5,2,'#58A8D8'); d.ell(42,35,3,1,'#9AD0F0'); d.px(42,35,'#3A8A3C');
    // hanging lamp
    merge(d,{'#7AB8E0':'#58A8D8','#C8D860':'#9EE07A','#C07A48':'#C08A50','#4A3A2A':'#6A4426','#F6D86A':'#F6C838','#E84848':'#E85A5A','#E86A6A':'#E85A5A','#9AD0F0':'#B8E8C8','#C89A3A':'#A87A48','#A06A34':'#9A6A3E','#F0E070':'#F6C838','#E8D0A0':'#F4E6C0','#5ABAB0':'#58A8D8','#5DB84A':'#68C070','#3E9440':'#3A8A3C','#B88A54':'#A87A48','#5AA0E0':'#58A8D8','#6AC070':'#68C070','#86592F':'#8A5A34','#9A6A40':'#9A6A3E','#F4F4F4':'#F4F0DC','#FFFFFF':'#F4F0DC','#A87444':'#A87A48'});
  },
  // The First Tent: big cream tent with green trim & leaf emblem, campfire, round island trees
  'nook:c1': d=>{
    d.grad(0,0,64,14,['#9ED8F0','#B2E2F2','#C8ECF4']);
    d.ell(12,4,5,1,'#FFFFFF'); d.ell(44,3,6,1,'#FFFFFF'); d.ell(46,2,3,1,'#FFFFFF');
    // distant cliff band
    d.rect(0,11,64,5,'#7CC06A'); d.hline(0,63,11,'#94D27E');
    // back trees row
    for(const [x,r] of [[3,4],[11,5],[20,4],[56,5],[63,4]]) tree(d,x,10,r,['#8ED46E','#5CB050','#3E8A3E']);
    // grass
    d.rect(0,16,64,24,'#86CC66');
    for(let y=18;y<40;y+=3) for(let x=(y*7)%9;x<64;x+=9){d.px(x,y,'#6EB656'); d.px(x+1,y-1,'#6EB656');}
    // dirt path to tent
    d.poly([[32,40],[42,40],[44,31],[39,31]],'#D8BC88'); d.line(33,39,39,32,'#C4A472');
    // tent (large, right-center)
    d.poly([[29,31],[42,8],[55,31]],'#F2E6C6');
    d.poly([[42,8],[55,31],[48,31]],'#DCCCA4');
    // green stripes
    d.line(42,8,29,31,'#4FA860'); d.line(42,9,30,31,'#4FA860');
    d.line(42,8,55,31,'#3E8A4E'); d.line(42,9,54,31,'#3E8A4E');
    d.hline(29,55,31,'#3E8A4E');
    // door flap
    d.poly([[38,31],[42,20],[46,31]],'#5A4630'); d.poly([[42,20],[46,31],[44,31]],'#46362A');
    d.line(42,20,38,31,'#E8D8B0');
    // emblem
    emblem(d,42,15,'#4FA860','#F4F0DC');
    // pole top + flag
    d.vline(42,4,8,'#8A5A34'); d.poly([[43,4],[47,5],[43,6]],'#E85A5A');
    // ropes + pegs
    d.line(29,31,25,34,'#B8A080'); d.px(25,35,'#8A5A34'); d.line(55,31,59,34,'#B8A080'); d.px(59,35,'#8A5A34');
    // side tree with oranges
    tree(d,59,22,5,['#8ED46E','#5CB050','#3E8A3E'],'#F59A3A');
    // campfire right of path
    d.ell(30,34,3,1,'#7A7068'); d.stamp(28,30,['..o..','.oyo.','.oyo.','rrrrr'],{o:'#F5803A',y:'#FFE070',r:'#8A5A34'});
    // little DIY workbench
    d.rect(49,33,9,2,'#B07A46'); d.vline(50,35,37,'#8A5A34'); d.vline(56,35,37,'#8A5A34'); d.px(52,32,'#9AA4AE'); d.px(53,32,'#9AA4AE'); d.px(55,32,'#E85A5A');
    // flowers
    for(const [x,y,c] of [[26,38,'#F070A0'],[47,38,'#FFFFFF'],[61,37,'#F6C838'],[2,18,'#F070A0'],[24,19,'#FFFFFF']]) flower(d,x,y,c);
    // weeds clumps
    for(const [x,y] of [[36,24],[8,18],[18,38]]) d.stamp(x,y,['g.g','.g.'],{g:'#4E9A44'});
  },
  // A New Island Beach: turquoise sea, palms with coconuts, seaplane, distant islet, shells
  'nook:c2': d=>{
    d.grad(0,0,64,15,['#5EC0F0','#78CCF2','#92D8F4','#B2E4F6']);
    d.ell(10,4,6,1,'#FFFFFF'); d.ell(13,3,3,1,'#FFFFFF'); d.ell(34,7,4,1,'#EAF8FF');
    // seaplane
    d.stamp(36,1,[
      '....rr.......',
      'wwwwwwwwwww..',
      '..wwwwwwrrww.',
      '.rwwbwbwwwwwr',
      '..wwwwwwwwww.',
      '...k.....k...',
      '..kkk...kkk..'],{w:'#FFFFFF',r:'#E85A5A',b:'#5A90D0',k:'#8A9AA8'});
    // sea
    d.rect(0,15,64,10,'#2EA8D8'); d.rect(0,15,64,2,'#2290C8');
    for(let x=0;x<64;x+=7){d.hline(x,x+2,18+(x%3),'#7AD4F0'); d.hline(x+4,x+5,22,'#58C8EC');}
    // distant islet
    d.ell(52,15,7,2,'#F2D9A0'); d.rect(45,15,15,2,'#2290C8'); d.ell(52,14,5,1,'#F2D9A0');
    d.vline(53,9,13,'#8A5A34'); d.stamp(50,8,['gg.gg','.ggg.'],{g:'#3E9A4E'});
    // shallow lagoon band + foam
    d.rect(0,25,64,2,'#7AE0E0'); d.rect(0,27,64,1,'#FFFFFF');
    for(let x=2;x<64;x+=5) d.px(x,26,'#FFFFFF');
    // sand
    d.rect(0,28,64,12,'#F6E2AE'); d.hline(0,63,28,'#E8CC90');
    for(let i=0;i<30;i++) d.px(d.ri(24,63),d.ri(30,39),d.rnd()<.5?'#E8CC90':'#FFF4D6');
    // palm trees (right)
    const palm=(bx,by,tx,ty)=>{
      thick(d,bx,by,tx,ty,0.7,'#A87444'); for(let i=0;i<=by-ty;i+=2) d.px(bx+(tx-bx)*i/(by-ty),by-i,'#7A5232');
      for(const [ex,ey] of [[-8,0],[-6,-3],[-1,-4],[5,-3],[8,1],[3,3],[-4,3]]){ for(let t=0;t<=1;t+=0.08){const x=tx+ex*t, y=ty+ey*t+3*t*t; d.px(x,y+1,'#2E7A44'); d.px(x,y,'#4FA860'); if(t>0.2&&t<0.9) d.px(x,y-1,'#7ACC6A');} }
      d.circ(tx,ty+2,1,'#8A5A34'); d.px(tx+1,ty+3,'#6A4026');
    };
    palm(55,33,52,13); palm(42,33,44,18);
    // shells + starfish + sandcastle
    d.stamp(30,34,['.ss.','s..s','.ss.'],{s:'#F0A8A0'});
    d.stamp(58,36,['..o..','ooooo','.ooo.','.o.o.'],{o:'#F59A6A'});
    d.stamp(46,33,['f..f..f','fffffff','ff.f.ff','fffffff'],{f:'#E2C080'});
    // footprints into scene
    for(let i=0;i<4;i++){d.px(24+i*4,37-(i%2),'#E2C080'); d.px(25+i*4,37-(i%2),'#E2C080');}
    // sun
    d.circ(4,3,2,'#FFF6B0');
  },

  // ===================== ISABELLE =====================
  // Jingle Hair Tie: red topknot tie with a gold bell, jingle marks
  'isabelle:s0': d=>{
    const O='#3A1E22', R='#E83A3A', R2='#B82A30', R3='#FF8A80', Y='#F6C838', Y2='#C88A20', Y3='#FFF2A8';
    const T='#F8D070', T2='#E0A840', T3='#FFF0C8';
    // yellow topknot tuft fanning up out of the tie
    d.poly([[11,15],[6,6],[9,7],[10,2],[13,6],[16,0],[19,6],[22,2],[23,7],[26,6],[21,15]],T);
    d.line(10,4,13,13,T2); d.line(16,2,16,13,T2); d.line(22,4,19,13,T2); d.line(8,8,12,14,T2); d.line(24,8,20,14,T2);
    d.line(14,4,15,11,T3); d.line(18,4,17,10,T3);
    // the red tie: a fat band around the tuft
    d.ell(16,16,8,3,R2); d.ell(16,15,8,2,R); d.hline(10,22,14,R3);
    d.px(9,15,R2); d.px(23,15,R2);
    for(const x of [11,14,18,21]) d.px(x,17,'#9A2028');
    // tuft stub below
    d.rect(13,19,6,2,T2);
    // bell hanging from band front
    d.rect(15,18,3,2,'#8A5A30');
    d.circ(16,24,5,Y2); d.circ(16,24,4,Y); d.circ(14,22,2,Y3); d.px(13,21,'#FFFFFF');
    d.hline(11,21,25,Y2); d.hline(12,20,24,'#E8B030');
    d.rect(15,26,3,2,'#5A3A10'); d.px(16,28,'#5A3A10');
    d.outline(O);
    // jingle marks
    for(const [x0,y0,x1,y1] of [[5,21,8,23],[4,26,7,26],[28,21,25,23],[29,26,26,26]]) d.line(x0,y0,x1,y1,Y);
    d.stamp(1,12,['.w.','www','.w.'],{w:Y3}); d.px(29,13,Y3);
  },
  // Island News Script: clipboard with lined script, star sticker, "shh" seal, little mic doodle
  'isabelle:s1': d=>{
    const O='#2E2422', B='#C08A50', B2='#9A6A3E', B3='#DCAA70', P='#FFFDF4', P2='#E8E0CC', L='#A8C8E8', K='#7A7890', M='#9AA4AE';
    d.rect(5,3,22,28,B); d.rect(5,29,22,2,B2); d.vline(5,3,30,B3);
    d.rect(7,6,18,22,P); d.vline(24,6,27,P2); d.hline(7,24,27,P2);
    // clip
    d.rect(11,1,10,5,M); d.rect(12,2,8,2,'#C8D0D8'); d.rect(14,1,4,1,'#6A7480'); d.hline(11,20,5,'#6A7480');
    // title: little leaf + mic doodle
    d.stamp(9,8,['..gg','.ggg','ggg.','g...'],{g:'#4FA860'});
    d.stamp(19,7,['.mm.','mmmm','mmmm','.mm.','..k.','.kkk'],{m:'#F07A9A',k:K});
    // text lines
    for(const y of [13,15,17,19,21]){ for(let x=9;x<=22;x++) if((x*3+y)%7) d.px(x,y,K); }
    d.hline(9,22,14,L); d.hline(9,22,18,L); d.hline(9,22,22,L);
    // "SECRET" red tape across corner (shh!)
    d.line(15,25,25,19,'#E84848'); d.line(15,26,25,20,'#E84848'); d.line(16,26,25,21,'#C83A3A');
    d.outline(O);
    // finger-to-lips "shh" stamp: round pink seal with zip mouth
    d.circ(24,26,4,'#F6C838'); d.circ(24,26,3,'#FFE680');
    d.stamp(22,25,['k.k','...','kkk'],{k:'#5A3A10'}); d.vline(24,26,28,'#E84848');
    d.outline(O);
    d.stamp(1,10,['.y.','yyy','.y.'],{y:'#FFF2A8'});
  },
  // Five-Star Island Certificate: gold frame, five stars in an arc, ribbon seal, island
  'isabelle:s2': d=>{
    const O='#3A2A1A', F='#E8B030', F2='#B8801C', F3='#FFE07A', P='#FFFAEC', S='#F6C838', S2='#D8961C', R='#E84848', R2='#B83038', G='#5DB84A';
    d.rect(2,5,28,21,F); d.rect(2,24,28,2,F2); d.hline(2,29,5,F3); d.vline(2,5,25,F3);
    d.rect(4,7,24,17,P);
    // corner rivets
    for(const [x,y] of [[3,6],[28,6],[3,24],[28,24]]) d.px(x,y,'#FFF6C8');
    // five stars arc
    const pos=[[7.5,14],[11.5,11],[16,10],[20.5,11],[24.5,14]];
    pos.forEach(([x,y],i)=>{ star5(d,x,y,i===2?3.4:2.8,S2); star5(d,x,y-0.3,i===2?2.8:2.2,S); d.px(x-1,y-1,'#FFF6B0'); });
    // island + text lines
    d.ell(16,19,4,1,'#F2D9A0'); d.px(15,17,G); d.px(16,16,G); d.px(17,17,G); d.px(16,17,'#8A5A30'); d.px(16,18,'#8A5A30');
    d.hline(7,11,21,'#B8A890'); d.hline(21,25,21,'#B8A890'); d.hline(7,10,19,'#B8A890'); d.hline(22,25,19,'#B8A890');
    d.outline(O);
    // ribbon seal hanging bottom
    d.poly([[11,25],[14,26],[12,31],[10,29],[8,31]],R); d.poly([[21,25],[18,26],[20,31],[22,29],[24,31]],R);
    d.line(11,27,10,30,R2); d.line(21,27,22,30,R2);
    d.circ(16,25,4,R2); d.circ(16,25,3,R); d.circ(16,25,2,S); d.px(16,25,'#FFF6B0'); d.px(15,24,'#FFF6B0');
    d.outline(O);
    d.stamp(27,0,['.w.','www','.w.'],{w:'#FFF2A8'}); d.px(1,2,'#FFF2A8'); d.px(30,29,'#FFF2A8');
  },
  // Resident Services front desk: soft green walls, island map, desk with bell & papers, Nook Stop terminal, plants
  'isabelle:c0': d=>{
    // wall
    d.rect(0,0,64,26,'#D8EEC8');
    for(let x=0;x<64;x+=8) d.vline(x,3,22,'#C4E2B0');
    d.rect(0,0,64,3,'#8AB874'); d.hline(0,63,3,'#6E9E5A');
    // leaf frieze
    for(let x=2;x<64;x+=8) d.stamp(x,0,['.ff.','ff.f'],{f:'#F4F0DC'});
    d.rect(0,22,64,4,'#B07A46'); d.hline(0,63,22,'#C89058');
    // island map (center) framed
    d.rect(22,5,20,12,'#8A5A34'); d.rect(23,6,18,10,'#7AD0EC');
    d.poly([[25,9],[29,7],[35,8],[39,10],[38,14],[32,15],[27,14]],'#F2D9A0');
    d.poly([[26,10],[29,8],[34,9],[37,11],[36,13],[31,14],[28,13]],'#86CC66');
    d.line(30,9,33,14,'#4AB4E0'); d.px(32,11,'#E85A5A'); d.px(28,11,'#3E8A3E'); d.px(35,12,'#3E8A3E');
    // clock right
    d.circ(52,8,3,'#F4F0DC'); d.ring(52,8,3,'#8A5A34'); d.vline(52,6,8,'#3A2A1A'); d.hline(52,54,8,'#3A2A1A');
    // floor tiles
    d.rect(0,26,64,14,'#F2E6CC');
    for(let y=26;y<40;y+=5) d.hline(0,63,y,'#DCCCA8');
    for(let x=0;x<64;x+=8) d.vline(x,26,39,'#DCCCA8');
    // green rug under desk
    d.rect(24,33,30,6,'#7CC06A'); d.frame(24,33,30,6,'#5DA050');
    // desk
    d.rect(25,18,30,13,'#C08A50'); d.rect(25,18,30,2,'#E0AE70'); d.hline(25,54,20,'#9A6A3E');
    for(let x=29;x<55;x+=8) d.vline(x,21,30,'#A87444');
    d.rect(25,31,30,1,'#7A5232');
    emblem(d,40,25,'#4FA860','#F4F0DC');
    // desk items: service bell, papers, mug, notebook
    d.stamp(27,14,['..k..','.yyy.','yYyyy','kkkkk'],{k:'#6A4A2A',y:'#F6C838',Y:'#FFF2A8'});
    d.rect(34,16,7,2,'#FFFFFF'); d.rect(35,15,6,1,'#F4F4F4'); d.hline(35,39,16,'#A8C8E8');
    d.rect(44,15,3,3,'#F07A9A'); d.px(47,16,'#F07A9A'); d.px(45,15,'#FFFFFF');
    d.rect(49,16,5,2,'#5AA0E0');
    // Nook Stop terminal (right)
    d.rect(57,10,7,22,'#F59A3A'); d.rect(57,10,7,2,'#FFC070'); d.rect(58,13,5,5,'#8ADCF0'); d.px(59,14,'#FFFFFF');
    d.rect(58,20,5,2,'#C87020'); d.rect(57,31,7,1,'#B05A18'); d.vline(63,12,30,'#D87A28');
    // potted plants left, behind pet zone top
    d.rect(2,15,5,6,'#C87048'); d.hline(2,6,15,'#E08860'); d.circ(4,11,4,'#5CB050'); d.circ(3,10,2,'#8ED46E'); d.px(6,8,'#F070A0'); d.px(1,12,'#F070A0');
    d.rect(17,17,4,5,'#C87048'); d.stamp(16,11,['.g.g.','ggggg','.ggg.','gg.gg','.ggg.','..g..'],{g:'#4FA860'});
    merge(d,{'#E85A5A':'#F070A0','#3E8A3E':'#4FA860','#E08860':'#C87048','#3A2A1A':'#6A4A2A','#A8C8E8':'#8ADCF0','#4AB4E0':'#7AD0EC','#F4F4F4':'#FFFFFF','#B05A18':'#C87020','#F07A9A':'#F070A0','#5AA0E0':'#7AD0EC','#FFC070':'#F6C838','#D87A28':'#C87020','#C89058':'#E0AE70','#9A6A3E':'#8A5A34','#7A5232':'#8A5A34','#A87444':'#B07A46','#5CB050':'#5DA050','#6E9E5A':'#5DA050','#86CC66':'#7CC06A','#FFF2A8':'#F6C838'});
  },
  // Morning Broadcast Studio: dawn window, desk with big mic, ON AIR light, tissue box (almost sneezed!)
  'isabelle:c1': d=>{
    // walls: acoustic panels lavender
    d.rect(0,0,64,27,'#B8B0DC');
    for(let y=1;y<27;y+=5) for(let x=((y/5|0)%2)*3;x<64;x+=6) d.rect(x,y,5,4,'#A89ED0');
    // window with morning sunrise over sea
    d.rect(4,3,22,15,'#F4F0DC');
    d.grad(5,4,20,8,['#FFC8A0','#FFD8A8','#FFE8B8','#FFF2C8']);
    d.circ(10,11,3,'#FFB070'); d.circ(10,11,2,'#FFF6B0'); d.rect(5,12,20,5,'#5AB8E0'); d.hline(6,14,13,'#FFE8A0'); d.hline(8,12,15,'#FFF2C8');
    d.vline(15,4,16,'#F4F0DC');
    d.ell(9,6,2,0,'#FFFFFF'); d.ell(21,7,2,0,'#FFFFFF');
    // ON AIR sign
    d.rect(30,3,16,7,'#3A2A3A'); d.rect(31,4,14,5,'#E83A3A');
    d.stamp(32,4,['ooo.o...o','o.o.oo..o','o.o.o.o.o','o.o.o..oo','ooo.o...o'],{o:'#FFE0E0'});
    d.stamp(42,4,['.y.','yyy','.y.'],{y:'#FFF2A8'});
    // floor
    d.rect(0,27,64,13,'#8A6E9E');
    for(let x=0;x<64;x+=8) d.line(x,27,x-4,39,'#7A5E8E');
    d.hline(0,63,27,'#6A5280');
    // broadcast desk
    d.rect(28,22,36,9,'#F4E6C0'); d.rect(28,22,36,2,'#FFF6DC'); d.hline(28,63,24,'#D8C49A');
    d.rect(28,31,36,6,'#4FA860'); d.hline(28,63,31,'#3E8A4E');
    emblem(d,46,34,'#F4F0DC','#4FA860');
    // mic on stand
    d.vline(42,14,21,'#6A7480'); d.rect(40,21,5,1,'#4A5460');
    d.rect(40,10,5,6,'#9AA4AE'); d.rect(41,10,3,6,'#C8D0D8'); for(let y=11;y<16;y+=2) d.hline(40,44,y,'#7A848E');
    d.px(41,11,'#FFFFFF');
    // tissue box with tissue (sneeze!)
    d.rect(52,17,8,5,'#F07A9A'); d.hline(52,59,17,'#FFA0B8'); d.rect(54,18,3,1,'#C85A7A');
    d.stamp(53,13,['..ww.','.wWw.','wwww.','.ww..'],{w:'#FFFFFF',W:'#E8E8F0'});
    // script papers + mug
    d.rect(31,20,7,2,'#FFFFFF'); d.hline(32,36,20,'#A8C8E8');
    d.rect(48,19,3,3,'#5AA0E0'); d.px(51,20,'#5AA0E0'); d.px(49,17,'#E8E8F0'); d.px(50,16,'#E8E8F0');
    // headphones hanging
    d.stamp(31,15,['.kkkk.','k....k','k....k','pp..pp','pp..pp'],{k:'#3A2A3A',p:'#F07A9A'});
    // speaker on wall right
    d.rect(54,2,8,11,'#4A4258'); d.frame(54,2,8,11,'#2E2A3A'); d.stamp(56,4,['.kk.','kggk','.kk.'],{k:'#2E2A3A',g:'#8A84A0'}); d.stamp(55,8,['.kkk.','kgggk','kgwgk','kgggk','.kkk.'],{k:'#2E2A3A',g:'#8A84A0',w:'#C8C4D8'});
    // sneeze puff near mic
    d.stamp(45,12,['.w.w','w...','.w..'],{w:'#FFFFFF'});
  },
  // Island Fireworks Show: night sea, big leaf-shaped and star bursts, plaza lanterns, shoreline
  'isabelle:c2': d=>{
    d.grad(0,0,64,24,['#141838','#1A2048','#222A58','#2C3668','#384478']);
    for(const [x,y] of [[3,2],[19,6],[30,1],[62,9],[8,13],[58,1]]) d.px(x,y,'#C8D0F0');
    // burst helper
    const burst=(cx,cy,r,c1,c2,n=12)=>{for(let i=0;i<n;i++){const a=i/n*Math.PI*2; for(let k=2;k<=r;k++){ if(k%2&&k>r-2) continue; d.px(cx+Math.cos(a)*k,cy+Math.sin(a)*k,k>r*0.6?c2:c1);} } d.px(cx,cy,'#FFFFFF')};
    burst(46,8,7,'#FFF2A8','#F6C838',14);
    burst(58,15,4,'#F8B0D0','#F070A0',10);
    burst(10,6,4,'#B0F0E0','#5AD0B0',10);
    // leaf-shaped firework (Isabelle's design)
    { const x0=20,y0=20,x1=36,y1=2,w=6.5;
      for(let y=0;y<24;y++)for(let x=8;x<44;x++){ if(!inLeaf(x,y,x0,y0,x1,y1,w)) continue;
        const edge=[[1,0],[-1,0],[0,1],[0,-1]].some(([a,b])=>!inLeaf(x+a,y+b,x0,y0,x1,y1,w));
        if(edge){ d.px(x,y,(x+y)%3?'#9EF07A':'#E0FFC8'); } }
      for(let t=0;t<=1;t+=0.07) d.px(x0+(x1-x0)*t,y0+(y1-y0)*t,'#7AD860');
      for(const t of [0.3,0.5,0.7]){const bx=x0+(x1-x0)*t, by=y0+(y1-y0)*t; d.line(bx,by,bx-3,by-1,'#7AD860'); d.line(bx,by,bx+2,by+2,'#7AD860');}
      d.line(x0,y0,x0-2,y0+3,'#7AD860'); }
    // falling sparkle trails
    for(const [x,y] of [[40,17],[44,19],[50,18],[18,14]]) {d.px(x,y,'#F6C838'); d.px(x,y+2,'#C89420');}
    // sea with reflections
    d.rect(0,24,64,5,'#1E3A6A'); d.hline(0,63,24,'#2A4A80');
    for(let x=0;x<64;x+=5) d.hline(x,x+1,26+(x%2),'#3A5A90');
    d.hline(44,48,25,'#F6C838'); d.hline(45,47,27,'#C89420'); d.hline(28,31,26,'#7AD860'); d.hline(56,59,26,'#F070A0');
    // plaza ground (grass at night) + stone path on right
    d.rect(0,29,64,11,'#2E5A3E'); d.hline(0,63,29,'#3E7050');
    for(let i=0;i<20;i++) d.px(d.ri(0,63),d.ri(31,39),'#244A32');
    d.rect(34,31,30,9,'#6A6A80'); for(let x=34;x<64;x+=5) d.vline(x,31,39,'#585870'); d.hline(34,63,35,'#585870');
    // lanterns on poles
    for(const x of [36,48,60]){ d.vline(x,22,31,'#3A2A1A'); d.rect(x-1,20,3,3,'#FFB050'); d.px(x,21,'#FFF2A8'); d.px(x-2,21,'#FFB050'); }
    d.line(36,20,48,21,'#3A2A1A'); d.line(48,20,60,21,'#3A2A1A');
    for(const [x,y,c] of [[40,21,'#F070A0'],[44,22,'#F6C838'],[52,21,'#5AD0B0'],[56,22,'#F070A0']]) d.px(x,y,c);
    // picnic blanket + sparkler stand
    d.rect(40,34,10,4,'#E85A5A'); for(let x=40;x<50;x+=2) d.vline(x,34,37,'#F4F0DC');
    d.vline(56,33,37,'#C8C8D0'); d.stamp(54,30,['y.y.y','.yyy.','y.y.y'],{y:'#FFF2A8'});
    d.circ(26,36,1,'#F6C838'); d.px(25,35,'#FFF2A8');
  },

  // ===================== TIMMY =====================
  // Shop Broom: wooden broom with straw bristles bound in green, leaf charm, sparkle and dust pan
  'timmy:s0': d=>{
    const O='#2E2418', W='#C08A50', W2='#8A5A30', W3='#E0AE70', S='#F2CE60', S2='#D8A838', S3='#FFE898', G='#4FA860', G2='#2E7A44';
    // handle diagonal
    thick(d,25,3,13,19,1,W); d.line(25,2,13,18,W3); d.line(26,4,14,20,W2);
    // bristles head (fan)
    d.poly([[11,17],[17,21],[16,23],[9,30],[2,26],[7,21]],S);
    d.poly([[9,30],[2,26],[4,25],[10,28]],S2);
    for(const [a,b] of [[12,20,],[10,21],[8,22]]) d.line(a,b,a-6+2,b+6,S2);
    d.line(13,21,7,28,S3); d.line(11,20,5,26,S3);
    // binding
    thick(d,11,18,15,21,1,G); d.line(10,19,15,22,G2);
    d.outline(O);
    // hang loop + leaf charm
    d.ring(27,2,1,'#6A4426');
    d.stamp(22,7,['..gg','.ggg','ggg.','g...'],{g:'#5DB84A'}); d.px(24,7,'#9EE07A');
    // dust specks swept away + sparkle
    for(const [x,y] of [[2,31],[4,30],[0,29]]) d.px(x,y,'#B8A890');
    d.stamp(20,22,['..w..','..w..','wwWww','..w..','..w..'],{w:'#FFF2A8',W:'#FFFFFF'});
    d.stamp(26,16,['.w.','wWw','.w.'],{w:'#FFF2A8',W:'#FFFFFF'});
    d.px(28,26,'#FFF2A8');
  },
  // Hot Item Sticker: red-orange starburst sticker with leaf and "!" , peeling corner on a backing sheet
  'timmy:s1': d=>{
    const O='#3A1A12', R='#F0503A', R2='#C0342A', R3='#FF8A6A', Y='#FFE070', W='#FFFFFF', B='#E8EEF4', B2='#C8D2DC';
    // backing sheet behind
    d.rect(4,6,25,23,B); d.rect(4,27,25,2,B2); d.vline(28,6,28,B2);
    // starburst
    const p=[]; const n=24; for(let i=0;i<n;i++){const a=i/n*Math.PI*2-Math.PI/2, r=i%2?10:13; p.push([15+Math.cos(a)*r,16+Math.sin(a)*r]);}
    d.poly(p,R2);
    const p2=p.map(([x,y])=>[15+(x-15)*0.9-0.3,16+(y-16)*0.9-0.3]); d.poly(p2,R);
    d.circ(15,16,7,Y); d.circ(15,16,6,'#FFF0A8');
    // leaf and !
    d.stamp(10,12,['..gg','.ggg','ggg.','g...'],{g:'#4FA860'});
    d.stamp(17,11,['rr','rr','rr','rr','rr','..','rr'],{r:R2});
    d.hline(11,13,19,'#F6C838'); d.hline(10,14,20,'#F6C838');
    // highlights
    d.line(7,8,10,6,R3); d.px(6,10,R3);
    // peeling corner bottom-right shows backing
    d.poly([[21,27],[27,21],[27,27]],B); d.poly([[21,27],[27,21],[24,24]],'#FFFFFF'); d.line(21,27,27,21,R2);
    d.outline(O);
    d.stamp(27,1,['.w.','wWw','.w.'],{w:'#FFE070',W}); d.px(1,4,'#FFE070'); d.px(30,30,'#FFE070');
  },
};
