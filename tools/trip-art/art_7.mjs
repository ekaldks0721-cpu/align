// art_7: fox, duck, meredith, bmo, pompompurin, gwen, squid, rakko, prof, spino, hbadger
const OL='#2A1E2A';
// small helpers
const stars=(d,n,x0,y0,x1,y1,cols)=>{for(let i=0;i<n;i++) d.px(d.ri(x0,x1),d.ri(y0,y1),cols[i%cols.length])};
const cloud=(d,x,y,w,c,s)=>{d.ell(x,y,w,2,c); d.ell(x-w/3,y-1,w/2,2,c); d.ell(x+w/4,y-2,w/3,2,c); if(s) d.hline(x-w+1,x+w-1,y+2,s)};
const sparkle=(d,x,y,c,cc)=>{d.px(x,y,cc||'#FFFFFF'); d.px(x-1,y,c); d.px(x+1,y,c); d.px(x,y-1,c); d.px(x,y+1,c)};

const A={};

// ===================== FOX =====================
A['fox:s0']=d=>{ // grapes from the fence
  const D='#3E1F6A', M='#6A3AA8', L='#9A6AD8', H='#E8D8FF', S='#7A4A20', S2='#A8723A', G1='#4A9A3A', G2='#78C850', G3='#2E6A2A';
  // stem & tendril
  d.line(16,2,16,8,S); d.line(17,2,17,7,S2); d.line(17,4,21,2,S); d.px(22,3,S); d.px(22,4,S);
  // leaf
  d.poly([[17,5],[23,2],[29,4],[28,9],[24,11],[19,9]],G2); d.poly([[17,5],[23,7],[28,9],[24,11],[19,9]],G1);
  d.line(18,6,27,6,G3); d.line(22,6,24,3,G3); d.line(23,6,25,9,G3);
  const g=(x,y)=>{d.circ(x,y,2.6,D); d.circ(x-.4,y-.4,2,M); d.px(x-1,y-1,L); d.px(x-2,y-1,L); if(y<20) d.px(x-1,y-2,H)};
  const rows=[[8,[10.5,15.5,20.5]],[12,[8,13,18,23]],[16,[10.5,15.5,20.5,25]],[20,[8.5,13.5,18.5]],[23.5,[11,16,21]],[27,[13.5,18.5]]];
  rows.forEach(([y,xs])=>xs.forEach(x=>g(x,y)));
  g(16,29.3);
  d.outline(OL);
  // shine sparkle "not sour!"
  sparkle(d,4,6,'#F8E070'); d.px(28,15,'#F8E070'); d.px(3,21,'#F8E070');
};
A['fox:s1']=d=>{ // kitsune festival mask
  const W1='#FFFFFF', W2='#F0E8E0', W3='#D8C8C0', R='#E03A3A', R2='#A82028', K='#2A1A1A', Gd='#F8C040', Gd2='#C08020', P='#F89090';
  // ears
  d.poly([[6,3],[13,10],[5,13]],W2); d.poly([[26,3],[19,10],[27,13]],W2);
  d.poly([[7,6],[11,10],[7,11]],R); d.poly([[25,6],[21,10],[25,11]],R);
  // face: broad top tapering to snout
  d.ell(16,15,11,8,W1); d.poly([[6,17],[26,17],[19,28],[13,28]],W1);
  d.ell(16,28,3,2,W1);
  // shading on lower right
  d.poly([[22,19],[26,17],[19,28],[17,28]],W2); d.ell(23,15,3,5,W2); d.px(17,29,W3); d.hline(14,18,30,W3);
  // forehead flame mark
  d.stamp(13,7,['..r..r..','.rr..rr.','.r.rr.r.','..rrrr..','...rr...'],{r:R});
  d.px(16,9,Gd); d.px(17,9,Gd);
  // eyes: upturned slits with red liner
  d.stamp(7,14,['rr.....','.rrrr..','..KKKKr','...KKK.'],{r:R,K});
  d.stamp(18,14,['.....rr','..rrrr.','rKKKK..','.KKK...'],{r:R,K});
  // cheek whiskers
  d.hline(6,9,19,R); d.hline(6,9,21,R); d.hline(23,26,19,R); d.hline(23,26,21,R);
  // nose & smile
  d.rect(15,27,3,2,K); d.px(16,27,'#5A3A3A');
  d.line(13,24,15,25,R2); d.line(19,24,17,25,R2); d.px(16,25,R2);
  d.px(10,23,P); d.px(11,23,P); d.px(21,23,P); d.px(22,23,P);
  d.outline(OL);
  // string & tassel
  d.line(3,14,1,18,Gd2); d.rect(0,18,3,2,R); d.vline(0,20,24,R2); d.vline(1,20,25,R); d.vline(2,20,24,R2);
  d.line(29,14,31,17,Gd2);
};
A['fox:s2']=d=>{ // nine-tailed fox orb
  const C1='#1A2A6A', C2='#3A6AD0', C3='#7AB8F8', C4='#D8F0FF', F1='#8AF0F0', F2='#FFFFFF', Pu='#7A4AC8', R='#C8283A', R2='#88182A', Gd='#F8C848', Gd2='#C08828';
  // cushion
  d.poly([[3,24],[16,20],[29,24],[16,29]],R); d.poly([[3,24],[16,29],[29,24],[29,26],[16,31],[3,26]],R2);
  d.px(3,24,Gd); d.px(29,24,Gd); d.px(16,29,Gd); d.rect(1,25,2,3,Gd); d.rect(29,25,2,3,Gd); d.px(1,28,Gd2); d.px(30,28,Gd2);
  // orb
  d.circ(16,13,10,C1); d.circ(15,12,9,C2); d.circ(14,11,7,Pu); d.circ(14,11,6,C2); d.circ(13,10,4,C3);
  // fox-fire inside (flame shape)
  d.poly([[16,20],[12,16],[13,11],[15,13],[16,7],[18,12],[20,10],[20,16]],F1);
  d.poly([[16,18],[14,15],[15,12],[16,14],[17,11],[18,15]],F2);
  // nine little tail-swirls around orb rim hint
  d.px(9,6,C4); d.px(8,7,C4); d.rect(10,5,2,1,F2); d.px(7,9,C4);
  d.outline(OL);
  sparkle(d,27,3,Gd); sparkle(d,4,4,F1); d.px(29,12,Gd); d.px(2,15,F1);
};
A['fox:c0']=d=>{ // vineyard, day
  d.grad(0,0,64,16,['#6EC0F0','#86CCF2','#A0D8F4','#BEE6F6']);
  d.circ(8,5,3,'#FFF6A0'); d.circ(8,5,2,'#FFFFFF');
  cloud(d,30,5,6,'#FFFFFF'); cloud(d,52,3,4,'#FFFFFF');
  // distant hills
  d.ell(44,20,30,8,'#8CC870'); d.ell(10,21,20,6,'#A0D488'); d.ell(54,18,14,5,'#78B860');
  // ground
  d.rect(0,22,64,18,'#9ED070'); d.grad(0,30,64,10,['#92C664','#86BC58']);
  // dirt path in pet area
  d.ell(14,33,12,4,'#D8B880'); d.ell(14,33,10,3,'#E4C890');
  // trellis rows (perspective) right side
  const post='#7A5030', vine='#3E8A3A', vine2='#5CAA48';
  for(let r=0;r<3;r++){
    const y=17+r*7, x0=25+r*-1, x1=63;
    d.rect(x0,y,x1-x0+1,4,vine); d.hline(x0,x1,y,vine2);
    for(let x=x0+1;x<x1;x+=3) d.px(x,y+1,vine2);
    for(let x=x0;x<=x1;x+=9) d.vline(x,y-1,y+6,post);
    d.hline(x0,x1,y+5,'#6AA040');
    // grape bunches
    for(let x=x0+3+r*2;x<x1;x+=6+(r%2)){d.rect(x,y+3,3,2,'#6A3AA8'); d.rect(x+1,y+5,1,1,'#6A3AA8'); d.px(x,y+3,'#9A6AD8'); d.px(x+2,y+4,'#3E1F6A')}
  }
  // tall fence on far right with one missing bunch (stem only)
  // basket of grapes & empty stem in front
  d.ell(44,36,6,2,'#6A9A48');
  d.rect(38,32,10,5,'#C8883A'); d.hline(38,47,32,'#E8A858'); for(let x=39;x<47;x+=2) d.vline(x,33,36,'#A86A28');
  d.ell(43,31,4,2,'#6A3AA8'); d.px(41,30,'#9A6AD8'); d.px(44,30,'#9A6AD8'); d.px(43,29,'#3E8A3A');
  d.line(37,31,38,28,'#7A5030'); d.line(48,31,47,28,'#7A5030'); d.hline(38,47,27,'#7A5030');
  // eaten bunch: bare stem near path
  d.line(26,36,29,33,'#7A5030'); d.px(27,35,'#5A3A20'); d.px(28,34,'#5A3A20'); d.px(25,37,'#9A6AD8');
  // flowers
  [[3,25],[58,34],[31,38],[55,38]].forEach(([x,y])=>{d.px(x,y,'#FFFFFF'); d.px(x+1,y,'#F8E070')});
};
A['fox:c1']=d=>{ // thousand red torii gates, forest
  d.grad(0,0,64,40,['#2E5A32','#346638','#3C7240']);
  // trees bg
  for(let x=-2;x<66;x+=7){d.ell(x,6,5,8,'#1E4626'); d.ell(x+3,3,4,5,'#285430')}
  d.rect(0,12,64,6,'#24502C');
  // light shafts
  for(let i=0;i<3;i++) for(let y=0;y<18;y+=2) d.px(10+i*14+y/2,y,'#5A8A4A');
  // ground moss
  d.rect(0,24,64,16,'#4A7A3A'); d.dither(0,24,64,2,'#3A6A32','#4A7A3A');
  // stone path receding toward vanishing point (44,18)
  d.poly([[26,40],[64,40],[48,19],[42,19]],'#A8A498');
  for(let y=22;y<40;y+=3){const t=(y-19)/21; d.hline(Math.round(42-16*t),Math.round(48+16*t),y,'#8A867C')}
  // gates tunnel (vanishing at 46,18)
  const R='#E0302A', R2='#A01818', K='#2A1A1A';
  [0.22,0.3,0.4,0.53,0.72,1].forEach(s=>{
    const by=Math.round(18+22*s), h=Math.round(30*s), hw=Math.round(12*s), cx=46, top=by-h;
    const pw=Math.max(1,Math.round(3*s)), lb=Math.max(1,Math.round(2.2*s));
    d.rect(cx-hw,top,pw,h,R); d.rect(cx+hw-pw+1,top,pw,h,R);
    if(pw>1){d.vline(cx-hw,top,by-1,R2); d.vline(cx+hw-pw+1,top,by-1,R2)}
    d.rect(cx-hw-pw,top-lb,2*hw+2*pw+1,lb,K); d.px(cx-hw-pw-1,top-lb,K); d.px(cx+hw+pw+1,top-lb,K);
    d.rect(cx-hw-pw+1,top,2*hw+2*pw-1,Math.max(1,lb-1),R);
    d.rect(cx-hw,top+Math.round(h*.22),2*hw+1,Math.max(1,lb-1),R);
    if(s>.5) d.rect(cx-hw,by-Math.round(2*s),pw,Math.round(2*s),K), d.rect(cx+hw-pw+1,by-Math.round(2*s),pw,Math.round(2*s),K);
  });
  // stone fox statue right
  d.rect(58,30,5,6,'#9A968C'); d.rect(57,35,7,3,'#7A766C'); d.poly([[58,30],[59,27],[60,30]],'#B4B0A6'); d.poly([[61,30],[62,27],[63,30]],'#B4B0A6');
  d.px(59,31,K); d.px(62,31,K); d.rect(59,33,3,1,R);
  // lanterns
  d.vline(34,26,34,'#5A4A3A'); d.rect(33,23,3,4,'#F8D070'); d.hline(33,35,23,R2); d.hline(33,35,26,R2);
  // fallen leaves
  [[24,34],[28,38],[52,37],[3,38]].forEach(([x,y])=>{d.px(x,y,'#E86A3A'); d.px(x+1,y,'#F8A048')});
};
A['fox:c2']=d=>{ // nine-tail's moonlit wood, night
  d.grad(0,0,64,28,['#0E1238','#141A48','#1C2458','#242E66','#2E3A74']);
  stars(d,26,0,0,63,18,['#FFFFFF','#B8C8FF','#F8E8A0']);
  // moon
  d.circ(56,6,4,'#FFF4C8'); d.circ(55,5,3,'#FFFBE8'); d.px(57,8,'#E8DCA8'); d.px(58,6,'#E8DCA8');
  // distant hill
  d.ell(48,30,24,8,'#18204C'); d.ell(10,32,22,6,'#1A2450');
  // glowing spirit nine-tailed fox sitting on the hill, tails fanned
  d.ell(45,28,14,4,'#141A40');
  const Wf='#F0EEFF', Wf2='#BCB4F0', Of='#6A5AC0', Tip='#7AF0F8';
  const tails=[]; for(let i=0;i<9;i++){const a=Math.PI+i*Math.PI/8; tails.push([45+Math.cos(a)*14,24+Math.sin(a)*12])}
  tails.forEach(([x,y])=>{for(let t=0.25;t<=1;t+=0.08) d.circ(45+(x-45)*t,24+(y-24)*t,0.9+1.2*t,Of)});
  tails.forEach(([x,y],i)=>{for(let t=0.25;t<=1;t+=0.08) d.circ(45+(x-45)*t,24+(y-24)*t,0.2+0.9*t,i%2?Wf:Wf2); d.circ(x,y,1,Tip)});
  d.stamp(40,13,['.o......o.','oWo....oWo','oWWooooWWo','oWWWWWWWWo','oWkWWWWkWo','.oWWWWWWo.','..oWnnWo..','...oWWo...','..oWWWWo..','.oWWVVWWo.','.oWWVVWWo.','oWWWVVWWWo','oWWWWWWWWo','.ooo..ooo.'],{o:Of,W:Wf,k:'#2A2060',n:'#E890B0',V:Wf2});
  // fox fire wisps
  [[28,14],[31,22],[20,9],[60,24]].forEach(([x,y])=>{d.rect(x-1,y,3,2,'#3AA0D8'); d.rect(x,y,1,2,'#7AF0F8'); d.px(x,y-1,'#7AF0F8'); d.px(x+1,y-2,'#D8FFFF')});
  // trees: dark trunks frame
  const T='#0A0E26', T2='#141C40';
  d.rect(0,0,4,40,T); d.ell(4,6,7,7,T2); d.ell(2,4,5,5,T);
  d.rect(26,0,2,31,T2); d.ell(27,2,6,4,T2);
  d.rect(61,4,3,30,T);
  // ground with moonlight
  d.rect(0,30,64,10,'#1E3A44'); d.dither(0,30,64,1,'#1E3A44','#2A4E58'); d.ell(30,35,14,2,'#2E5A62'); d.ell(30,35,10,1,'#3E7078');
  // glowing mushrooms & grass
  [[40,33],[44,36],[58,35]].forEach(([x,y])=>{d.rect(x-1,y,3,1,'#7AF0F8'); d.px(x,y+1,'#D8E8E8')});
  for(let x=2;x<64;x+=5) d.px(x,30,'#2E5A62');
  // fireflies
  [[26,24],[14,16],[33,28]].forEach(([x,y])=>d.px(x,y,'#F8F080'));
};

// ===================== DUCK =====================
A['duck:s0']=d=>{ // half-eaten bread
  const C1='#B86A28', C2='#8A4A18', B1='#F8E0A8', B2='#E8C480', B3='#FFF4D8', Cr='#D89048';
  // toast slice: crust outline shape
  d.ell(16,9,12,6,C1); d.rect(4,9,25,18,C1); d.ell(16,9,11,5,B1); d.rect(5,9,23,17,B1);
  d.rect(4,26,25,2,C2); d.hline(5,27,8,C1);
  // shading on crumb
  d.rect(5,20,23,6,B2); d.dither(5,18,23,2,B1,B2);
  // air holes
  [[9,12],[14,15],[20,11],[11,21],[18,19],[23,16]].forEach(([x,y])=>{d.px(x,y,B2); d.px(x+1,y,B2)});
  d.px(7,10,B3); d.px(8,10,B3); d.px(7,11,B3);
  // big bite taken out from right side (half eaten)
  [[26,10,5],[29,17,5],[25,24,4]].forEach(([x,y,r])=>d.circ(x,y,r,null));
  d.outline(OL);
  // crumbs
  [[27,28],[29,25],[30,28],[22,29],[2,29],[25,30]].forEach(([x,y],i)=>{d.px(x,y,i%2?Cr:B2); if(i<3) d.px(x+1,y,B1)});
};
A['duck:s1']=d=>{ // rubber duck buddy
  const Y1='#FFE040', Y2='#F8B820', Y3='#FFF6A0', O1='#F88820', O2='#D06010', K='#202030', Wt='#9AD8F8', Wt2='#5AB0E8';
  // water
  d.ell(16,27,15,3,Wt2); d.ell(16,26,13,2,Wt);
  // body
  d.ell(16,21,12,7,Y1); d.ell(18,23,10,5,Y2); d.ell(14,20,9,5,Y1);
  // tail
  d.poly([[26,14],[30,12],[29,20],[25,20]],Y1); d.px(29,13,Y3);
  // head
  d.circ(11,10,7,Y1); d.circ(12,11,6,Y1); d.ell(13,13,5,3,Y2); d.circ(10,9,5,Y1);
  // wing
  d.ell(19,20,5,3,Y2); d.hline(16,22,22,'#E0A010'); d.px(23,19,Y2);
  // beak
  d.ell(4,12,3,2,O1); d.hline(2,6,13,O2); d.px(3,11,'#FFB060');
  // eye
  d.rect(9,8,2,3,K); d.px(9,8,'#FFFFFF');
  // cheek & highlights
  d.px(8,12,'#F8A080'); d.px(13,5,Y3); d.px(14,5,Y3); d.px(15,6,Y3); d.hline(8,13,16,Y3);
  d.outline(OL);
  // bubbles
  d.ring(27,5,2,Wt2); d.px(26,4,'#FFFFFF'); d.ring(23,2,1,Wt2); d.circ(3,22,1,Wt);
};
A['duck:s2']=d=>{ // golden goose feather + golden egg
  const G1='#F8C830', G2='#D89818', G3='#A86A10', G4='#FFF0A0', Wh='#FFFFFF';
  // feather vane (diagonal from bottom-left to top-right)
  d.poly([[5,27],[12,14],[20,5],[28,2],[27,9],[21,18],[11,25]],G1);
  d.poly([[5,27],[11,25],[21,18],[27,9],[28,2],[25,10],[18,19]],G2);
  // barb notches
  [[9,18],[14,12],[19,8]].forEach(([x,y])=>{d.px(x,y,null); d.px(x-1,y+1,null)});
  d.px(24,15,null); d.px(16,21,null);
  // barb lines
  for(let i=0;i<6;i++){d.line(8+i*3,24-i*3.5,6+i*3,20-i*3.5,G3)}
  // shaft
  d.line(3,30,27,3,G4); d.line(3,31,4,30,G3);
  d.outline(OL);
  // golden egg
  d.ell(25,25,4,5,G2); d.ell(24,24,3,4,G1); d.px(23,22,G4); d.px(23,23,G4); d.px(22,24,Wh);
  d.ring(25,25,5.4,OL);
  sparkle(d,6,6,G1,Wh); sparkle(d,29,16,G1,Wh); d.px(14,4,G4);
};
A['duck:c0']=d=>{ // park pond, day
  d.grad(0,0,64,14,['#78C8F8','#90D4F8','#A8E0F8']);
  cloud(d,14,4,5,'#FFFFFF'); cloud(d,46,6,6,'#FFFFFF');
  // tree line
  for(let x=0;x<66;x+=8){d.circ(x+2,13,6,'#4AA048'); d.circ(x+6,11,4,'#5CB858')}
  d.rect(0,14,64,26,'#7CC860'); d.dither(0,14,64,2,'#6AB850','#7CC860');
  // path
  d.poly([[0,36],[26,30],[30,40],[0,40]],'#E8D0A0'); d.line(0,35,26,29,'#D0B080');
  // pond
  d.ell(44,27,19,8,'#3A8AC8'); d.ell(44,26,18,7,'#58A8E0'); d.ell(42,24,12,3,'#78C0EC');
  d.hline(32,40,23,'#B8E4FA'); d.hline(48,56,30,'#B8E4FA');
  // lily pads
  [[33,29],[55,24],[52,32]].forEach(([x,y])=>{d.ell(x,y,2,1,'#3E9A40'); d.px(x+2,y,'#58A8E0')}); d.px(55,23,'#F8A0C0');
  // splash
  d.stamp(36,17,['w...w..w','.w.w..w.','..ww.ww.','ccccccc.'],{w:'#FFFFFF',c:'#B8E4FA'});
  d.ring(39,22,3,'#B8E4FA');
  // reeds
  for(let x=59;x<64;x+=2){d.vline(x,18,26,'#4A8A3A'); d.rect(x,17,1,3,'#8A5A30')}
  // bench
  d.rect(4,20,14,2,'#B07040'); d.rect(4,23,14,1,'#B07040'); d.vline(5,24,26,'#6A4020'); d.vline(16,24,26,'#6A4020');
  // bread crumbs trail
  [[22,33],[25,34],[27,32],[29,35],[31,33]].forEach(([x,y])=>{d.px(x,y,'#F0C070'); d.px(x+1,y,'#C88838')});
  // flowers
  [[2,30],[60,37],[34,38]].forEach(([x,y])=>{d.px(x,y,'#F86A6A'); d.px(x,y+1,'#3E8A3A')});
};
A['duck:c1']=d=>{ // lakeside swan boat dock, sunset
  d.grad(0,0,64,18,['#5A3A80','#9A4A88','#E0607A','#F88A60','#F8B860','#F8D880']);
  d.circ(20,17,6,'#FFE8A0'); d.circ(20,17,4,'#FFF8D8');
  // far hills silhouette
  d.poly([[0,16],[10,12],[22,15],[36,10],[50,14],[64,11],[64,18],[0,18]],'#6A3A6A');
  // lake
  d.grad(0,18,64,14,['#E87A70','#C86A80','#8A5A90','#6A4A88']);
  for(let y=19;y<30;y+=2) d.hline(16+((y*3)%5),24-((y*3)%5),y,'#FFD8A0');
  // dock (wooden pier) at bottom, foreground left floor
  d.rect(0,30,64,10,'#A86A3A'); for(let x=0;x<64;x+=5) d.vline(x,30,39,'#7A4A28'); d.hline(0,63,30,'#D08A50');
  d.rect(0,38,64,2,'#6A3A20');
  // posts
  [26,62].forEach(x=>{d.rect(x,25,2,6,'#7A4A28'); d.px(x,25,'#D08A50')});
  // swan boats
  const swan=(x,y,big,c1,c2)=>{
    const s=big?1:0;
    d.ell(x,y,7+s*2,3+s,c1); d.rect(x-7-s*2,y-1,15+s*4,2,c1);
    d.ell(x+2,y-1,5+s,2,c2); // seat well
    d.rect(x-1,y-2,4,1,'#F06A8A');
    // neck & head
    d.rect(x-6-s,y-8-s*2,2,7+s*2,c1); d.circ(x-5-s,y-9-s*2,2,c1);
    d.poly([[x-9-s,y-9-s*2],[x-7-s,y-10-s*2],[x-7-s,y-8-s*2]],'#F88820'); d.px(x-6-s,y-10-s*2,'#202030');
    // wing tail
    d.poly([[x+5+s,y-1],[x+9+s*2,y-5-s],[x+9+s*2,y]],c1);
    d.hline(x-8-s*2,x+8+s*2,y+3+s,'#5A3A70');
  };
  swan(46,25,1,'#FFFFFF','#E0D8E8'); swan(33,21,0,'#F8E8F0','#D8C8D8');
  // rope coil & sign on dock
  d.ring(52,34,2,'#E8C890'); d.px(52,34,'#A86A3A');
  // wet webbed footprints chasing toward edge
  [[24,36],[30,34],[36,36],[42,33]].forEach(([x,y])=>d.stamp(x,y,['f.f','.f.'],{f:'#7A4A28'}));
};
A['duck:c2']=d=>{ // swan lake stage, night
  // backdrop: night lake painting
  d.grad(0,0,64,26,['#141838','#1C2450','#243068','#2E3C80']);
  stars(d,14,8,2,56,12,['#FFFFFF','#C8D0FF']);
  d.circ(32,8,4,'#F8F4D8'); d.circ(33,7,3,'#FFFFFF');
  d.ell(32,22,26,4,'#3A5AA0'); d.hline(18,46,22,'#7A9ADA');
  // painted swans on backdrop
  [[24,19],[40,19]].forEach(([x,y],i)=>{const k=i?1:-1; d.ell(x,y,2,1,'#E8E8F8'); d.vline(x-2*k,y-3,y,'#E8E8F8'); d.px(x-3*k,y-3,'#F8A030')});
  // curtains
  const Cu='#B01830', Cu2='#7A1020', Cu3='#E03048';
  d.poly([[0,0],[14,0],[9,10],[6,26],[0,26]],Cu); d.poly([[64,0],[50,0],[55,10],[58,26],[64,26]],Cu);
  for(let x=1;x<12;x+=3) d.line(x,1,Math.max(0,x-2),25,Cu2); for(let x=62;x>52;x-=3) d.line(x,1,Math.min(63,x+2),25,Cu2);
  d.rect(0,0,64,3,Cu2); for(let x=0;x<64;x+=6) d.ell(x+3,3,3,1,Cu3);
  d.hline(0,63,0,'#F8C848'); for(let x=0;x<64;x+=3) d.px(x+1,4,'#F8C848');
  // stage floor
  d.rect(0,26,64,14,'#7A4A2A'); for(let y=28;y<40;y+=3) d.hline(0,63,y,'#5A3418'); d.hline(0,63,26,'#B07848');
  // spotlight cone on center-right
  for(let y=3;y<34;y++){const h=Math.round((y-3)*0.3); for(let x=44-h;x<=44+h;x++) if((x+y)%2===0 && d.get(x,y)!=='#F8F4D8') d.px(x,y,'#F8E8B0')}
  d.ell(44,34,10,2,'#F8E0A0'); d.ell(44,34,7,1,'#FFF4D0');
  // tutu + ballet slippers in the spotlight
  d.ell(44,33,4,1,'#FFFFFF'); d.ell(44,32,3,1,'#F8D0E0'); d.px(44,31,'#F8A0C0');
  // roses thrown (ovation)
  [[30,36],[56,32],[36,31],[52,37],[25,33]].forEach(([x,y])=>{d.px(x,y,'#F02848'); d.px(x+1,y,'#C01030'); d.line(x+1,y+1,x+3,y+1,'#3E8A3A')});
  // footlights
  for(let x=2;x<64;x+=6){d.rect(x,38,3,2,'#2A1A10'); d.hline(x,x+2,38,'#F8E070')}
};

// ===================== MEREDITH =====================
A['meredith:s0']=d=>{ // post-it vows
  const Y1='#FFE868', Y2='#F8D040', Y3='#FFF6B8', Pk='#F8A0C0', Pk2='#E07898', Ink='#2A3A80', R='#E03A50';
  // back note (pink), rotated
  d.poly([[8,3],[29,6],[26,27],[5,24]],Pk); d.poly([[26,27],[5,24],[6,22],[26,25]],Pk2);
  // front note yellow
  d.poly([[2,8],[24,6],[26,28],[4,30]],Y1);
  d.poly([[2,8],[24,6],[24,9],[2,11]],Y2); // sticky strip
  // curled corner
  d.poly([[20,29],[26,28],[25,23]],Y3); d.line(20,29,25,23,Y2);
  // scribbled vow lines
  for(let i=0;i<5;i++){const y=13+i*3; const x1=19-(i%2)*4; for(let x=6;x<=x1;x++) d.px(x,y-Math.floor((x-4)/11)+((x%4===0)?-1:0),Ink)}
  // heart
  d.stamp(15,24,['.r.r.','rrrrr','.rrr.','..r..'],{r:R});
  d.outline(OL);
  d.px(4,13,Y3); d.px(4,14,Y3);
};
A['meredith:s1']=d=>{ // VHS surgery tapes stack
  const B1='#2A2A34', B2='#3E3E4C', B3='#5A5A6C', L='#F8F4E8', L2='#D8D0C0', R='#D83040', Bl='#4A8AD8', Wn='#7A7A90';
  const tape=(y,lab)=>{
    d.rect(2,y,28,11,B2); d.hline(2,29,y,B3); d.rect(2,y+9,28,2,B1);
    // label
    d.rect(4,y+2,24,3,L); d.hline(4,27,y+4,L2); d.rect(4,y+2,3,3,lab);
    // window with reels
    d.rect(10,y+6,12,3,B1); d.rect(11,y+6,10,2,Wn); d.circ(13,y+7,1,'#F8F4E8'); d.circ(19,y+7,1,'#F8F4E8'); d.px(13,y+7,B1); d.px(19,y+7,B1);
    d.rect(16,y+6,2,2,'#4A3A2A');
  };
  tape(14,Bl);
  // top tape slightly offset & rotated look
  d.rect(4,4,26,10,B2); d.hline(4,29,4,B3); d.rect(4,12,26,2,B1);
  d.rect(6,6,22,3,L); d.hline(6,27,8,L2); d.rect(6,6,3,3,R);
  // tiny "EG" on label
  d.stamp(11,6,['ee.gg','e..g.','ee.gg'],{e:R,g:R}); d.px(15,8,R);
  d.rect(12,10,10,2,B1); d.rect(13,10,8,1,Wn);
  d.rect(2,25,28,1,B1);
  // red tape on spine (surgery mark)
  d.rect(24,17,3,1,R);
  d.outline(OL);
  // little film strip curling out
  d.line(30,23,31,27,'#6A4A2A'); d.px(31,28,'#6A4A2A');
};
A['meredith:s2']=d=>{ // Harper Avery award: golden figure on base
  const G1='#F8D050', G2='#D8A020', G3='#A87010', G4='#FFF6B0', K1='#2A2A38', K2='#44445A', Pl='#E8E0C8';
  // base
  d.rect(7,24,18,6,K1); d.rect(8,24,16,1,K2); d.rect(5,29,22,2,K1); d.hline(5,26,29,K2);
  d.rect(12,26,8,2,G2); d.hline(13,18,26,G4);
  // pedestal
  d.rect(11,21,10,3,G2); d.hline(11,20,21,G1);
  // figure: torso with raised arms holding star
  d.rect(14,12,4,9,G1); d.rect(17,12,1,9,G2); d.vline(14,13,20,G4);
  d.circ(15.5,9,2,G1); d.px(15,8,G4);
  d.line(14,13,10,7,G1); d.line(13,13,9,7,G2); d.line(17,13,21,7,G1); d.line(18,13,22,7,G2);
  d.rect(13,18,6,3,G2); d.hline(14,17,18,G1);
  // star held aloft
  d.stamp(11,0,['....s....','...sss...','sssssssss','.sssSsss.','..sssss..','.ss...ss.','.s.....s.'],{s:G1,S:G4});
  d.outline(OL);
  sparkle(d,4,10,G1,'#FFFFFF'); sparkle(d,27,14,G1,'#FFFFFF');
};
A['meredith:c0']=d=>{ // Joe's Bar at night
  d.grad(0,0,64,22,['#0E1028','#161A3A','#20264A','#2A2E56']);
  stars(d,8,0,0,63,8,['#C8D0FF']);
  // background buildings
  d.rect(0,6,12,18,'#1A1E3A'); d.rect(46,4,18,20,'#1A1E3A'); [[2,9],[6,13],[50,8],[56,12],[60,8]].forEach(([x,y])=>d.rect(x,y,2,2,'#F8D878'));
  // street & sidewalk
  d.rect(0,24,64,16,'#3A3A4A'); d.rect(0,24,64,3,'#5A5A6A'); d.hline(0,63,27,'#2A2A38');
  d.dither(0,36,64,4,'#3A3A4A','#34343E');
  // wet reflection
  d.rect(36,30,14,1,'#8A5A3A'); d.rect(38,32,10,1,'#6A4A3A');
  // bar facade (brick)
  const Br='#8A3A2A', Br2='#6A2A1E';
  d.rect(26,4,30,20,Br); for(let y=5;y<24;y+=2) for(let x=26+(y%4?0:2);x<56;x+=4) d.px(x,y,Br2);
  d.rect(26,3,30,2,'#3A1A14');
  // windows warm
  d.rect(28,10,10,9,'#F8C060'); d.rect(29,11,8,7,'#F8D888'); d.hline(28,37,14,'#8A5A2A'); d.vline(32,10,18,'#8A5A2A');
  d.rect(46,10,8,9,'#F8C060'); d.rect(47,11,6,7,'#F8D888'); d.hline(46,53,14,'#8A5A2A');
  // silhouettes inside
  d.rect(30,15,2,3,'#6A3A2A'); d.circ(30.5,14,1,'#6A3A2A'); d.rect(48,15,2,3,'#6A3A2A'); d.circ(48.5,14,1,'#6A3A2A');
  // door
  d.rect(39,12,6,12,'#3A1E14'); d.rect(40,13,4,4,'#F8C060'); d.px(43,19,'#F8D048');
  // neon sign: cocktail glass, pink/cyan glow
  d.rect(36,5,10,5,'#2A0E20'); d.stamp(37,5,['nnnnnnnn','.nnnnnn.','..nnnn..','...cc...','..cccc..'],{n:'#F870C0',c:'#70F0F8'});
  d.px(34,7,'#F870C0'); d.px(47,7,'#70F0F8');
  // awning stripes
  for(let x=26;x<56;x+=4){d.rect(x,9,2,1,'#2A7A5A'); d.rect(x+2,9,2,1,'#E8E0C8')}
  // street lamp
  d.vline(58,8,30,'#2A2A34'); d.rect(56,7,4,2,'#2A2A34'); d.rect(57,9,2,1,'#FFF0A0');
  for(let y=10;y<24;y+=2) d.px(58+((y/2)%2?-2:2),y,'#4A4A5C');
  // sidewalk table with half tequila + pager
  d.rect(46,28,10,1,'#C8C8D0'); d.vline(51,29,33,'#8A8A98');
  d.rect(48,25,2,3,'#F8E8A8'); d.px(48,24,'#D8F0F8'); d.px(49,24,'#D8F0F8'); d.px(49,25,'#F8E070'); d.px(50,25,'#70D060');
  d.rect(52,26,3,2,'#2A2A34'); d.px(53,26,'#70F070');
  // pager buzz lines
  d.px(55,24,'#70F070'); d.px(56,23,'#70F070');
};
A['meredith:c1']=d=>{ // on the Seattle ferry deck
  d.grad(0,0,64,16,['#5A6A84','#6E7E98','#8494AC','#A0ACC0']);
  // sun break through clouds
  d.ell(50,4,10,3,'#C8D0DC'); d.ell(16,6,12,3,'#7A88A0'); d.ell(30,3,8,2,'#8A98AE');
  for(let y=6;y<16;y+=2) d.px(52+(y-6)/2,y,'#E8E0C0');
  // skyline with space needle
  const Sk='#3A4660';
  [[22,10,4],[27,8,3],[31,11,4],[36,7,3],[40,9,4],[45,11,3],[49,12,5]].forEach(([x,y,w])=>d.rect(x,y,w,16-y,Sk));
  d.vline(14,4,15,Sk); d.vline(15,5,15,Sk); d.ell(14.5,4,3,1,Sk); d.px(14,1,Sk); d.px(14,2,Sk); d.px(14,3,Sk); d.ell(14.5,6,2,0,Sk);
  // mountain (Rainier) far right
  d.poly([[52,16],[58,9],[64,15],[64,16]],'#6A788E'); d.poly([[56,11],[58,9],[60,11],[58,12]],'#E8ECF0');
  // sea
  d.grad(0,16,64,12,['#3A5A78','#34506E','#2E4864']);
  for(let i=0;i<14;i++){const x=d.ri(0,60), y=d.ri(17,27); d.hline(x,x+2,y,'#5A7A98')}
  // another ferry in distance
  d.rect(36,18,12,2,'#F0F0F0'); d.rect(38,16,8,2,'#F0F0F0'); d.hline(36,47,20,'#2A7A5A'); d.rect(41,14,2,2,'#2A2A34'); d.hline(38,45,17,'#3A5A78');
  // gull
  d.stamp(26,12,['w.w','.w.'],{w:'#FFFFFF'});
  // deck (we are on the ferry)
  d.rect(0,28,64,12,'#B8B0A0'); for(let y=30;y<40;y+=3) d.hline(0,63,y,'#A09888'); d.hline(0,63,28,'#E8E0D0');
  // railing
  d.hline(0,63,23,'#F0F0F0'); d.hline(0,63,26,'#D8D8D8'); for(let x=2;x<64;x+=5) d.vline(x,23,28,'#D8D8D8');
  d.hline(0,63,22,'#8A8A90');
  // life ring on rail
  d.ring(52,29,3,'#F07030'); d.ring(52,29,2,'#F07030'); d.px(49,29,'#FFFFFF'); d.px(55,29,'#FFFFFF'); d.px(52,26,'#FFFFFF'); d.px(52,32,'#FFFFFF');
  // coffee cup on bench (dark & twisty time)
  d.rect(34,33,14,2,'#7A5A3A'); d.vline(35,35,38,'#5A3A20'); d.vline(46,35,38,'#5A3A20');
  d.rect(39,30,3,3,'#F8F4E8'); d.hline(39,41,31,'#4A8AD8'); d.px(42,31,'#F8F4E8');
  d.px(40,28,'#D0D0D8'); d.px(41,27,'#D0D0D8');
  // puddle
  d.ell(28,37,4,1,'#C8C4BC');
};
A['meredith:c2']=d=>{ // Grey Sloan rooftop helipad at sunset
  d.grad(0,0,64,22,['#3A2A6A','#7A3A7A','#D0506A','#F07A50','#F8A848','#F8D070']);
  d.circ(14,19,5,'#FFE8A0'); d.circ(14,19,3,'#FFF8E0');
  d.hline(0,30,8,'#B04A78'); d.hline(36,63,5,'#9A4A80'); d.hline(40,58,12,'#E06A60');
  // city skyline silhouette
  const Sk='#4A2A50';
  [[0,16,6],[6,13,5],[12,17,6],[20,12,4],[26,15,7],[34,11,5],[40,14,6],[47,10,4],[52,15,6],[58,13,6]].forEach(([x,y,w])=>d.rect(x,y,w,22-y,Sk));
  [[8,15],[22,14],[36,13],[49,12],[60,15]].forEach(([x,y])=>d.px(x,y,'#F8D878'));
  // rooftop parapet and floor
  d.rect(0,22,64,2,'#8A8A98'); d.hline(0,63,22,'#B8B8C4');
  d.rect(0,24,64,16,'#6A6A7A'); d.dither(0,24,64,1,'#6A6A7A','#74748A');
  // helipad (perspective ellipse) right side
  d.ell(44,32,17,6,'#3A3A48'); d.ell(44,32,15,5,'#F8D048'); d.ell(44,32,13,4,'#3A3A48');
  d.stamp(40,29,['HH...HH','HH...HH','HHHHHHH','HH...HH','HH...HH','HH...HH'],{H:'#FFFFFF'});
  // red edge lights
  [[27,32],[61,32],[44,26],[44,38],[31,28],[57,28],[31,36],[57,36]].forEach(([x,y])=>d.px(x,y,'#F83040'));
  // vent & antenna
  d.rect(2,19,5,5,'#9A9AA8'); d.hline(2,6,19,'#C8C8D4'); d.hline(3,5,21,'#5A5A6A');
  d.vline(62,8,22,'#2A2A34'); d.px(62,7,'#F83040');
  // windsock
  d.vline(26,16,24,'#C8C8D4'); d.poly([[27,16],[32,17],[32,18],[27,19]],'#F07030'); d.px(29,17,'#FFFFFF');
};


// ===================== BMO =====================
const BT='#5CC8B0', BT2='#3A9A88', BT3='#9AE8D4', BK='#1A3A34', BS='#C8F0C8';
A['bmo:s0']=d=>{ // new game cartridge
  const G1='#9A9AAE', G2='#74748A', G3='#C4C4D4', Pin='#E8C048', Pin2='#B08A20';
  // body with notched top
  d.rect(5,3,22,25,G1); d.rect(5,3,22,1,G3); d.vline(5,3,27,G3); d.vline(26,4,27,G2);
  d.rect(7,1,18,3,G1); d.hline(7,24,1,G3);
  // grip ridges top
  for(let x=9;x<24;x+=3) d.vline(x,2,4,G2);
  // label
  d.rect(8,7,16,14,'#F8F4E8'); d.rect(8,7,16,4,'#E8508A'); d.hline(8,23,11,'#C83070');
  // label art: tiny BMO screen face + star
  d.rect(10,12,12,8,BT); d.rect(11,13,10,6,BS); d.px(13,14,BK); d.px(18,14,BK); d.line(14,16,17,16,BK); d.px(13,15,BK); d.px(18,15,BK);
  d.px(15,17,'#E8508A'); d.px(16,17,'#E8508A');
  d.stamp(10,8,['.y.','yyy','.y.'],{y:'#FFE860'}); d.stamp(19,8,['.y.','yyy','.y.'],{y:'#FFE860'});
  // arrow pointing down (insert)
  d.poly([[13,23],[19,23],[16,26]],G2);
  // connector pins
  d.rect(7,28,18,3,'#3A3A48'); for(let x=8;x<24;x+=2) d.rect(x,28,1,3,Pin); d.hline(8,23,30,Pin2);
  d.outline(OL);
  sparkle(d,29,5,'#FFE860'); d.px(2,12,'#FFE860');
};
A['bmo:s1']=d=>{ // hand mirror with Football inside
  const F1='#F890B8', F2='#D06090', F3='#FFC8DC', M1='#C8ECF8', M2='#98D0EC';
  // handle
  d.rect(14,22,4,9,F2); d.rect(15,22,2,9,F1); d.rect(13,29,6,2,F2); d.px(15,24,F3);
  // frame
  d.ell(16,12,13,11,F2); d.ell(16,12,12,10,F1);
  for(let a=0;a<12;a++){const t=a*Math.PI/6; d.px(16+Math.cos(t)*12.5,12+Math.sin(t)*10.5,F3)}
  // glass
  d.ell(16,12,10,8,M2); d.ell(15,11,9,7,M1);
  // Football (mirror BMO, flipped) inside
  d.rect(10,6,12,13,BT); d.rect(10,18,12,1,BT2); d.vline(21,6,18,BT2);
  d.rect(11,7,10,7,BS); d.px(13,9,BK); d.px(18,9,BK); d.hline(14,17,11,BK); d.px(13,10,BK); d.px(18,10,BK);
  d.px(12,11,'#F8A0B0'); d.px(19,11,'#F8A0B0');
  d.px(19,16,'#F0E040'); d.px(12,16,'#D83060'); d.px(13,16,'#3070D8'); d.hline(14,16,15,BK);
  // glare stripes
  d.line(6,8,9,5,'#FFFFFF'); d.line(7,10,11,6,'#FFFFFF');
  d.outline(OL);
  // "hi!" wave lines
  d.px(29,3,F1); d.px(30,2,F1); d.px(28,1,F1); sparkle(d,3,26,'#FFE860');
};
A['bmo:s2']=d=>{ // real boy certificate
  const P1='#FFF4D8', P2='#F0DCA8', P3='#D8B878', R='#D82838', R2='#A01828', Ink='#4A3A6A', Gd='#F8C848';
  // rolled scroll ends
  d.rect(3,4,26,22,P1);
  d.rect(2,2,28,4,P2); d.hline(2,29,2,P1); d.hline(2,29,5,P3); d.rect(1,3,1,2,P3); d.rect(30,3,1,2,P3);
  d.rect(2,25,28,4,P2); d.hline(2,29,25,P1); d.hline(2,29,28,P3); d.rect(1,26,1,2,P3); d.rect(30,26,1,2,P3);
  // decorative border
  d.frame(5,7,22,17,P2);
  // title bar + little boy icon
  d.hline(10,21,9,Ink); d.hline(11,20,10,Ink);
  // text lines
  d.hline(8,23,13,P3); d.hline(8,20,15,P3); d.hline(8,22,17,P3);
  // BMO signature squiggle
  d.line(8,21,10,20,Ink); d.line(10,20,11,22,Ink); d.line(11,22,13,20,Ink);
  d.outline(OL);
  // red seal stamp (self-stamped!) with ribbons
  d.poly([[20,23],[18,30],[21,28],[22,31]],R2); d.poly([[24,23],[26,30],[23,28],[22,31]],R);
  d.circ(22,21,4.4,R2); d.circ(22,21,3.6,R); d.ring(22,21,2.4,Gd);
  d.stamp(21,19,['.b.','bbb','.b.','b.b'],{b:'#FFE0A0'});
  sparkle(d,28,10,Gd); d.px(3,16,Gd);
};
A['bmo:c0']=d=>{ // tree fort bathroom, indoor
  // tree-wood walls (curved inside of tree)
  d.grad(0,0,64,26,['#8A5A34','#9A6A3E','#A87A48']);
  for(let x=0;x<64;x+=7) d.vline(x+(x%3),0,25,'#7A4A2A');
  for(let i=0;i<12;i++){const x=d.ri(2,62), y=d.ri(2,22); d.hline(x,x+2,y,'#B88A58')}
  // tile wainscot & floor
  d.rect(24,18,40,8,'#E0F0F0'); for(let x=24;x<64;x+=4) d.vline(x,18,25,'#B8D8D8'); d.hline(24,63,21,'#B8D8D8'); d.hline(24,63,18,'#9AC0C0');
  d.rect(0,26,64,14,'#7AB8C8'); for(let y=26;y<40;y+=4) for(let x=(y%8?2:0);x<64;x+=4) d.rect(x,y,1,1,'#5A98A8');
  d.dither(0,26,64,1,'#5A98A8','#7AB8C8');
  // round window w/ leaves
  d.circ(10,8,5,'#5A3A20'); d.circ(10,8,4,'#9AD8F8'); d.ell(8,6,2,1,'#5CB858'); d.ell(12,10,2,1,'#4AA048'); d.hline(6,14,8,'#5A3A20'); d.vline(10,4,12,'#5A3A20');
  // mirror over sink, Football face inside
  d.rect(37,2,14,13,'#E8C048'); d.rect(38,3,12,11,'#C8ECF8'); d.line(39,4,41,3,'#FFFFFF');
  d.rect(40,6,8,7,BT); d.rect(41,7,6,4,BS); d.px(42,8,BK); d.px(45,8,BK); d.hline(43,44,10,BK);
  // speech bubble "hi"
  d.rect(52,1,9,6,'#FFFFFF'); d.px(52,7,'#FFFFFF'); d.stamp(54,2,['k.k.k','kkk..','k.k.k','k.k.k'],{k:'#3A3A48'});
  // sink pedestal
  d.rect(36,16,16,3,'#FFFFFF'); d.hline(36,51,18,'#C8D8E0'); d.rect(42,19,4,7,'#E8F0F4'); d.vline(45,19,25,'#C8D8E0');
  d.rect(43,14,2,2,'#A8A8B8'); d.px(44,13,'#A8A8B8');
  // bathtub right with bubbles
  d.rect(53,20,11,9,'#FFFFFF'); d.hline(53,63,20,'#E0E8F0'); d.hline(53,63,28,'#C8D8E0'); d.px(54,29,'#E8C048'); d.px(62,29,'#E8C048');
  [[55,19],[58,18],[61,19],[57,17],[60,16]].forEach(([x,y])=>d.circ(x,y,1,'#E8F8FF'));
  // rubber duck on tub edge & towel
  d.rect(26,6,6,9,'#F8A0C0'); d.hline(26,31,6,'#E07898'); d.hline(26,31,12,'#FFFFFF'); d.rect(25,5,8,1,'#5A3A20');
  // toothbrush cup
  d.rect(48,13,2,3,'#F8E060'); d.vline(48,11,12,'#E8508A'); d.vline(49,10,12,'#5090E8');
  // bath mat
  d.ell(44,33,9,2,'#F8D060'); d.ell(44,33,7,1,'#FFE890');
};
A['bmo:c1']=d=>{ // MO factory, city
  d.grad(0,0,64,24,['#6A8AC8','#88A4D8','#A8C0E8','#C8D8F0']);
  // smog puffs
  cloud(d,34,4,4,'#D8D8E8'); cloud(d,44,2,3,'#C8C8DC');
  // distant city
  [[0,12,5],[5,9,4],[10,14,5],[56,11,4],[60,14,4]].forEach(([x,y,w])=>d.rect(x,y,w,24-y,'#7A8AB0'));
  // factory building
  const F='#5A9A8A', F2='#3E7A6C', F3='#7ABCAA';
  d.rect(24,10,40,16,F); d.hline(24,63,10,F3);
  for(let i=0;i<4;i++) d.poly([[24+i*10,10],[29+i*10,4],[34+i*10,10]],F2), d.line(24+i*10,10,29+i*10,4,F3);
  // chimneys w/ smoke
  [[30,0],[52,1]].forEach(([x,y])=>{d.rect(x,y+2,3,8,'#4A4A5A'); d.hline(x,x+2,y+2,'#F8A048'); d.circ(x+1,y,1.5,'#E8E8F0')});
  // big MO sign (two pixel letters)
  d.rect(36,12,14,7,'#1A3A34'); d.stamp(37,13,['m...m.ooo.','mm.mm.o.o.','m.m.m.o.o.','m...m.o.o.','m...m.ooo.'],{m:'#F8E060',o:'#F8E060'});
  // windows
  [[26,13],[52,13],[57,13]].forEach(([x,y])=>{d.rect(x,y,4,4,'#F8E8A0'); d.hline(x,x+3,y+2,'#C8B860')});
  // gate opening
  d.rect(26,19,10,7,'#2A3A40'); for(let y=19;y<26;y+=2) d.hline(26,35,y,'#4A5A60');
  // ground
  d.rect(0,24,64,16,'#8A8A9A'); d.hline(0,63,24,'#AAAAB8'); d.dither(0,36,64,4,'#8A8A9A','#7E7E8E');
  // conveyor belt with BMO siblings
  d.rect(24,32,40,3,'#3A3A48'); d.hline(24,63,32,'#5A5A6A'); for(let x=25;x<64;x+=4) d.circ(x,34,1,'#9A9AAA');
  d.vline(26,35,38,'#3A3A48'); d.vline(61,35,38,'#3A3A48');
  const cols=[BT,'#F890B8','#F8D060',BT,'#9A88E8'];
  for(let i=0;i<5;i++){const x=27+i*7, c=cols[i]; d.rect(x,25,6,7,c); d.rect(x+1,26,4,3,BS); d.px(x+1,27,BK); d.px(x+4,27,BK); d.hline(x+2,x+3,28,BK); d.px(x+1,30,'#D83060'); d.px(x+4,30,'#F0E040'); d.vline(x+5,25,31,'#00000022'.slice(0,7)==='#000000'?BT2:BT2)}
  // sparks
  sparkle(d,22,28,'#F8E060');
};
A['bmo:c2']=d=>{ // inside the game, space
  d.grad(0,0,64,40,['#120A30','#1A1040','#24164E','#2E1C5C']);
  // pixel grid horizon
  d.rect(0,28,64,12,'#200E48'); for(let i=-3;i<=3;i++) d.line(46+i*6,28,46+i*22,39,'#8A2A9A'); [30,33,38].forEach(y=>d.hline(0,63,y,'#8A2A9A')); d.hline(0,63,28,'#F060D0');
  // stars
  stars(d,30,0,0,63,24,['#FFFFFF','#80F0FF','#F8E060']);
  // big retro sun
  d.circ(46,20,8,'#F8A040'); d.circ(46,19,7,'#F8D060'); for(let y=21;y<28;y+=2) d.hline(38,54,y,'#2A1658');
  d.rect(36,26,22,2,'#200E48');
  // floating platforms (bricks)
  const brick=(x,y,w)=>{d.rect(x,y,w,3,'#C86030'); d.hline(x,x+w-1,y,'#F89048'); for(let i=x+1;i<x+w;i+=3) d.px(i,y+1,'#8A3A18')};
  brick(26,14,9); brick(50,8,10);
  // question block
  d.rect(36,6,5,5,'#F8C030'); d.frame(36,6,5,5,'#A87010'); d.stamp(37,7,['qq.','..q','.q.'],{q:'#FFFFFF'}); d.px(38,10,'#FFFFFF');
  // coins
  [[29,10],[32,10],[53,4],[57,4]].forEach(([x,y])=>{d.rect(x,y,2,3,'#F8E060'); d.px(x,y,'#FFFFFF')});
  // space invader
  d.stamp(52,13,['..g.....g..','...g...g...','..ggggggg..','.gg.ggg.gg.','ggggggggggg','g.ggggggg.g','g.g.....g.g','...gg.gg...'],{g:'#60F060'});
  // LEVEL 99
  d.stamp(2,2,['999.999','9.9.9.9','999.999','..9...9','999.999'],{9:'#FFFFFF'});
  d.hline(2,24,8,'#80F0FF'); d.rect(2,8,18,1,'#F8E060');
  // hearts HUD
  [[10,2],[14,2],[18,2]].map(([x,y])=>[x+8,y]).forEach(([x,y])=>d.stamp(x,y,['r.r','rrr','.r.'],{r:'#F84060'}));
  // ding sparkles
  sparkle(d,34,4,'#F8E060'); sparkle(d,60,24,'#80F0FF');
};

// ===================== POMPOMPURIN =====================
const PY1='#FFE890', PY2='#F8D060', PY3='#E0A838', CA1='#8A4A18', CA2='#B86A28', CA3='#D8904A';
A['pompompurin:s0']=d=>{ // mama's pudding
  const Pl='#FFFFFF', Pl2='#D8E4F0', Pl3='#A8BCD0', Cr='#FFFFFF', R='#E83848';
  // plate
  d.ell(16,27,15,4,Pl3); d.ell(16,26,14,3,Pl2); d.ell(16,25,12,2,Pl);
  // pudding body (trapezoid)
  d.poly([[8,12],[24,12],[27,26],[5,26]],PY2); d.poly([[8,12],[17,12],[16,26],[5,26]],PY1);
  d.poly([[22,12],[24,12],[27,26],[23,26]],PY3);
  d.hline(5,26,25,PY3);
  // caramel top w/ drips
  d.ell(16,12,8,2,CA1); d.rect(8,11,17,3,CA2); d.ell(16,11,8,2,CA2); d.hline(10,15,10,CA3);
  [[9,16],[13,15],[19,18],[23,15]].forEach(([x,y])=>{d.vline(x,13,y,CA2); d.px(x,y+1,CA1)});
  d.px(12,14,CA2); d.px(20,14,CA2);
  // cream dollop + cherry
  d.ell(16,8,4,2,Cr); d.ell(16,6,3,2,Cr); d.ell(16,4,1,1,Cr); d.px(18,7,Pl2); d.px(19,8,Pl2);
  d.circ(19,3,1.6,R); d.px(18,2,'#FFA0A8'); d.line(20,1,22,0,'#3E8A3A');
  // highlight on pudding
  d.vline(7,17,23,'#FFF8D0'); d.px(8,15,'#FFF8D0');
  d.outline(OL);
  // little heart from mama
  d.stamp(26,4,['r.r','rrr','.r.'],{r:'#F87090'}); d.stamp(2,6,['r.r','rrr','.r.'],{r:'#F87090'});
};
A['pompompurin:s1']=d=>{ // one stray shoe (sneaker)
  const R1='#E85050', R2='#B83038', R3='#FF8A80', S1='#FFFFFF', S2='#D8D8E0', L='#FFFFFF', Ln='#3A3A48';
  // sole
  d.poly([[2,23],[30,23],[30,26],[27,28],[3,28],[2,26]],S2); d.hline(3,29,23,S1); d.hline(3,29,24,S1);
  for(let x=4;x<28;x+=3) d.px(x,27,'#A8A8B8');
  // upper
  d.poly([[3,23],[3,17],[6,13],[12,11],[17,8],[21,6],[25,7],[27,11],[29,17],[30,23]],R1);
  d.poly([[19,21],[27,11],[29,17],[30,23]],R2);
  // toe cap
  d.poly([[3,23],[3,18],[6,15],[10,16],[11,23]],S1); d.hline(4,10,22,S2);
  // swoosh stripe
  d.line(10,20,24,15,S1); d.line(11,20,24,16,S1);
  // tongue & collar
  d.poly([[20,6],[23,1],[27,3],[25,7]],R3); d.line(21,6,25,7,R2);
  d.ell(25,8,3,1,Ln);
  // laces
  for(let i=0;i<4;i++){const x=13+i*2.5, y=12-i*1.6; d.line(x,y,x+3,y+2,L); d.px(x,y+1,Ln)}
  // lace loop dangling
  d.line(22,6,18,3,L); d.line(18,3,17,5,L);
  // highlight
  d.line(6,14,11,12,R3);
  d.outline(OL);
  // shh! sneaky paw print + sweat drop
  d.stamp(1,3,['.b.b.','b...b','..b..','.bbb.','.bbb.'],{b:'#C8904A'});
  d.px(30,2,'#80C8F8'); d.px(30,3,'#80C8F8'); d.px(29,3,'#80C8F8');
};
A['pompompurin:s2']=d=>{ // golden pudding trophy
  const G1='#F8D050', G2='#D8A020', G3='#A87010', G4='#FFF6B0', B1='#7A4A20', B2='#5A3418', Bl='#5A3418';
  // base
  d.rect(7,26,18,5,B1); d.hline(7,24,26,'#9A6A38'); d.rect(5,30,22,2,B2);
  d.rect(12,27,8,2,G2); d.hline(13,18,27,G4);
  // stem
  d.rect(14,21,4,5,G2); d.vline(14,21,25,G1); d.rect(11,20,10,2,G1); d.hline(11,20,21,G2);
  // golden pudding
  d.poly([[9,8],[23,8],[25,20],[7,20]],G1); d.poly([[18,8],[23,8],[25,20],[19,20]],G2); d.poly([[22,8],[23,8],[25,20],[23,20]],G3);
  d.ell(16,8,7,2,G2); d.ell(16,7,7,1,G3); d.hline(11,15,6,G2);
  // drips
  [[10,11],[14,10],[20,12]].forEach(([x,y])=>d.vline(x,9,y,G3));
  d.vline(9,11,18,G4); d.px(10,14,G4);
  // little beret on top (purin trademark)
  d.ell(16,4,5,2,Bl); d.ell(15,3,4,1,'#7A4A28'); d.vline(16,0,1,Bl); d.px(17,0,Bl);
  // Z badge
  d.stamp(13,13,['zzzzz','...z.','..z..','.z...','zzzzz'],{z:G3});
  // handles
  d.ring(5,13,2.5,G2); d.ring(27,13,2.5,G2);
  d.outline(OL);
  sparkle(d,29,4,G1,'#FFFFFF'); sparkle(d,2,22,G1,'#FFFFFF'); d.px(28,24,G4);
};
A['pompompurin:c0']=d=>{ // basket by the door, indoor
  // warm wallpaper
  d.rect(0,0,64,26,'#F8E8C8'); for(let x=2;x<64;x+=6) for(let y=2;y<26;y+=6) d.px(x+((y/6)%2?3:0),y,'#F0C890');
  d.rect(0,22,64,4,'#E8C898'); d.hline(0,63,22,'#C89868');
  // wood floor
  d.rect(0,26,64,14,'#C88A50'); for(let y=29;y<40;y+=4) d.hline(0,63,y,'#A86E3A'); for(let y=26;y<40;y+=4) d.px((y*7)%60+2,y+1,'#A86E3A');
  // front door right
  d.rect(48,2,15,24,'#8A5428'); d.frame(48,2,15,24,'#5A3418'); d.rect(50,4,11,8,'#A86A38'); d.rect(50,14,11,10,'#A86A38');
  d.rect(52,5,7,5,'#C8E8F8'); d.px(53,6,'#FFFFFF'); d.circ(51,17,1,'#F8D048');
  // doormat
  d.rect(44,27,18,4,'#6AA050'); d.frame(44,27,18,4,'#4A7A38');
  // shoe collection lined by door
  const shoe=(x,y,c,c2)=>{d.rect(x,y,5,2,c); d.rect(x+3,y-1,2,1,c); d.hline(x,x+4,y+2,'#FFFFFF'); d.px(x+4,y-1,c2)};
  shoe(46,33,'#E85050','#B83038'); shoe(52,34,'#5090E8','#3060B8'); shoe(57,33,'#F8D048','#C89820');
  // coat hook with beret
  d.hline(36,44,6,'#5A3418'); d.px(38,7,'#5A3418'); d.ell(38,9,3,1,'#6A3E1A'); d.px(38,7,'#6A3E1A');
  d.px(42,7,'#5A3418'); d.rect(41,8,3,6,'#F8A0B0');
  // basket with blanket & pillow (center)
  d.ell(32,32,10,2,'#A87040');
  d.poly([[22,26],[42,26],[40,34],[24,34]],'#D8A060'); for(let x=24;x<41;x+=2) d.line(x,27,x,33,'#B88040'); d.hline(22,42,26,'#A87040'); d.hline(23,41,29,'#E8B878');
  d.ell(32,25,9,2,'#88C8E8'); d.ell(30,24,5,2,'#A8D8F0'); d.ell(37,24,3,2,'#FFFFFF'); for(let x=25;x<40;x+=3) d.px(x,25,'#FFFFFF');
  // zzz
  d.stamp(30,13,['zzzz','..z.','.z..','zzzz'],{z:'#9A88D8'}); d.stamp(34,9,['zzzz','..z.','.z..','zzzz'],{z:'#9A88D8'});
  // clock 5 more minutes
  d.circ(14,8,4,'#FFFFFF'); d.ring(14,8,4,'#A86E3A'); d.vline(14,5,8,'#3A3A48'); d.hline(14,16,8,'#3A3A48');
};
A['pompompurin:c1']=d=>{ // sleepy beach, sea
  d.grad(0,0,64,16,['#88D0F8','#9ED8F8','#B4E2FA','#CCEEFC']);
  d.circ(52,5,4,'#FFF0A0'); d.circ(52,5,3,'#FFFBE0');
  cloud(d,20,5,5,'#FFFFFF'); cloud(d,36,2,3,'#FFFFFF');
  // sea
  d.grad(0,15,64,9,['#3AA0D8','#48B0E0','#5AC0E8']);
  for(let y=16;y<24;y+=3) for(let x=(y%2)*4;x<64;x+=9) d.hline(x,x+2,y,'#A8E4F8');
  // surf (foam scallops)
  for(let x=0;x<64;x+=6){d.ell(x+3,24,3,1,'#FFFFFF')} d.hline(0,63,25,'#D8F0F0');
  // sand
  d.rect(0,26,64,14,'#F8E0A8'); d.dither(0,26,64,1,'#F0D098','#F8E0A8');
  for(let i=0;i<10;i++) d.px(d.ri(0,63),d.ri(28,39),'#E8C888');
  // parasol
  d.line(46,13,44,33,'#8A6040');
  d.poly([[34,16],[46,9],[58,16]],'#F86A6A'); d.poly([[40,13],[46,9],[46,16],[42,16]],'#FFFFFF'); d.poly([[50,13],[46,9],[52,16],[54,16]],'#FFFFFF');
  for(let x=35;x<58;x+=4) d.px(x,17,'#F86A6A');
  // shadow + beach towel striped
  d.ell(44,33,10,2,'#E8C888');
  d.poly([[34,30],[56,30],[58,36],[32,36]],'#F8D048'); for(let y=31;y<36;y+=2) d.hline(34-(y-30)/3,56+(y-30)/3,y,'#58B8E8');
  // pillow on towel
  d.ell(52,31,3,1,'#FFFFFF');
  // three zZz (three naps)
  d.stamp(56,19,['zzzz','..z.','.z..','zzzz'],{z:'#7A68C8'}); d.stamp(59,14,['zzzz','..z.','.z..','zzzz'],{z:'#7A68C8'}); d.stamp(61,9,['zz','zz'],{z:'#7A68C8'});
  // shells & starfish
  d.stamp(28,37,['.o.','ooo','o.o'],{o:'#F89070'}); d.stamp(60,37,['ss','ss'],{s:'#F8C8D8'});
  // pudding cup on sand
  d.rect(25,31,4,3,PY2); d.hline(25,28,30,CA2); d.px(25,33,PY3);
};
A['pompompurin:c2']=d=>{ // caramel pudding volcano, sunset
  d.grad(0,0,64,24,['#7A3A8A','#C04A80','#F07060','#F8A050','#F8C870','#FFE0A0']);
  // whipped cream clouds
  cloud(d,12,6,6,'#FFF4F8','#F8D8E0'); cloud(d,54,9,5,'#FFF4F8','#F8D8E0');
  // distant small pudding hills
  d.poly([[0,24],[4,18],[12,18],[16,24]],'#E8B050'); d.ell(8,18,4,1,CA1);
  // main volcano (pudding shape) center-right
  d.poly([[26,30],[32,8],[50,8],[58,30]],PY2); d.poly([[26,30],[32,8],[38,8],[34,30]],PY1); d.poly([[48,8],[50,8],[58,30],[52,30]],PY3);
  d.ell(41,8,9,2,CA1); d.ell(41,7,8,1,CA2);
  // crater steam
  [[38,4],[42,2],[45,4]].forEach(([x,y])=>d.circ(x,y,1.5,'#FFF0E0'));
  // caramel flows
  [[33,14,22],[37,10,28],[44,10,20],[48,11,30],[53,18,26]].forEach(([x,y0,y1])=>{d.vline(x,y0,y1,CA2); d.vline(x+1,y0,y1-1,CA2); d.px(x,y1+1,CA1); d.px(x+1,y1,CA1); d.px(x+1,y0+2,CA3)});
  d.rect(33,9,16,3,CA2); d.hline(34,47,9,CA3);
  // ground: caramel pools / biscuit ground
  d.rect(0,24,64,16,'#E8B068'); d.poly([[26,30],[32,8],[50,8],[58,30]],PY2); d.poly([[26,30],[32,8],[38,8],[34,30]],PY1); d.poly([[48,8],[50,8],[58,30],[52,30]],PY3); [[33,14,22],[37,10,28],[44,10,20],[48,11,30],[53,18,26]].forEach(([x,y0,y1])=>{d.vline(x,y0,y1,CA2); d.vline(x+1,y0,y1-1,CA2); d.px(x,y1+1,CA1)}); d.rect(33,9,16,3,CA2); d.hline(34,47,9,CA3); d.dither(0,24,26,1,'#D89850','#E8B068');
  d.ell(44,33,16,2,CA2); d.ell(44,33,12,1,CA3); d.ell(20,37,4,1,CA2);
  // cookie stones & cherries
  [[60,36],[28,38]].forEach(([x,y])=>{d.circ(x,y,2,'#B87838'); d.px(x-1,y-1,'#7A4A20'); d.px(x+1,y,'#7A4A20')});
  d.circ(56,28,1.5,'#E83848'); d.line(57,26,58,25,'#3E8A3A');
  // drifting dream zzz
  d.stamp(56,13,['zz','zz'],{z:'#FFFFFF'}); d.stamp(59,10,['zzzz','..z.','.z..','zzzz'],{z:'#FFFFFF'});
  // spoon stuck in ground
  d.line(24,29,22,33,'#C8C8D8'); d.ell(25,28,1,1,'#E8E8F0');
};

// ===================== GWEN =====================
const GP='#E870B0', GP2='#B84888', GP3='#FFB0D8', GT='#40C8D8', GT2='#2A90A8', GW='#F4F4F8';
A['gwen:s0']=d=>{ // pair of drumsticks crossed
  const W1='#F0C888', W2='#D0A060', W3='#A87838', Tip='#FFF0D0';
  const stick=(x0,y0,x1,y1,tape)=>{
    for(let k=-1;k<=1;k++) d.line(x0+k,y0,x1+k,y1,k<0?W1:k>0?W3:W2); d.line(x0,y0+1,x1,y1+1,W2);
    // tip bead
    d.circ(x1+.5,y1+.5,1.4,Tip);
    // grip tape near butt
    const n=8; for(let i=0;i<n;i++){const t=i/24; const x=x0+(x1-x0)*t, y=y0+(y1-y0)*t; d.rect(Math.round(x)-1,Math.round(y),3,2,i%2?tape:GW)}
  };
  stick(4,28,25,4,GP); stick(27,28,6,5,GT);
  // highlight scuffs
  d.px(12,17,'#FFF0D0'); d.px(20,17,'#FFF0D0');
  d.outline(OL);
  // spider emblem sticker at cross
  d.stamp(13,13,['.b.b.','b.b.b','.bbb.','b.b.b','.b.b.'],{b:'#1A1A28'});
  // sound beats
  d.stamp(26,2,['.p','pp','p.'],{p:GP}); d.stamp(1,3,['t.','tt','.t'],{t:GT});
  d.px(29,14,GP3); d.px(2,15,GT);
};
A['gwen:s1']=d=>{ // ballet pointe shoes pair, hanging by ribbons
  const S2='#E8A0B8', S3='#FFE8F0', In='#C86888', R='#F8A8C8', R2='#E088A8';
  const shoe=(x,y,c1,c2,c3)=>{ // side view, toe pointing down
    d.poly([[x,y],[x+10,y],[x+11,y+8],[x+10,y+18],[x+7,y+23],[x+3,y+23],[x,y+18],[x-1,y+8]],c1);
    d.poly([[x+7,y],[x+10,y],[x+11,y+8],[x+10,y+18],[x+7,y+23],[x+6,y+23],[x+9,y+10]],c2);
    d.ell(x+5,y+1.5,4,1.5,In); d.hline(x+2,x+8,y+1,c3);
    d.hline(x,x+10,y+17,c2); d.rect(x+3,y+19,4,4,S3);
    d.vline(x+1,y+5,y+14,S3); d.vline(x+2,y+6,y+9,S3);
  };
  d.line(7,7,13,2,R); d.line(13,7,15,2,R2); d.line(20,9,16,2,R); d.line(26,9,17,3,R2);
  shoe(4,6,'#F8C8D8',S2,'#9A4868'); shoe(18,8,S2,'#D08AA8','#9A4868');
  d.line(4,9,14,13,R); d.line(14,9,4,13,R); d.line(18,11,28,15,R2); d.line(28,11,18,15,R2);
  d.stamp(12,0,['rr.rr','rrrrr','rr.rr','.r.r.'],{r:R2}); d.px(14,1,'#FFFFFF');
  d.outline(OL);
  sparkle(d,2,29,GT,'#FFFFFF'); sparkle(d,29,4,GP,'#FFFFFF'); d.px(16,30,GT); d.px(3,3,GP3);
};
A['gwen:s2']=d=>{ // upside-down polaroid photo
  const F='#FAFAF4', F2='#D8D8D0', Sk1='#1A1E48', Sk2='#2E3474', Sk3='#5A4A90', B='#0E1028', Lt='#F8D878', Web='#E8E8F0';
  // tilted polaroid
  d.poly([[3,4],[27,2],[29,30],[5,31]],F); d.poly([[5,31],[29,30],[29,28],[5,29]],F2);
  // photo area
  d.poly([[6,6],[25,5],[26,23],[7,24]],Sk2);
  d.poly([[6,6],[25,5],[25,10],[6,11]],Sk1);
  // upside-down skyline hanging from top
  [[8,6,3,6],[11,6,2,4],[13,6,4,8],[17,5,2,5],[19,5,3,7],[22,5,3,4]].forEach(([x,y,w,h])=>d.rect(x,y,w,h,B));
  [[9,9],[14,10],[15,12],[20,8],[21,10]].forEach(([x,y])=>d.px(x,y,Lt));
  // moon at bottom (it's upside down)
  d.circ(21,20,2,'#FFF4D0');
  // web line from below + two hanging friends (upside down silhouettes)
  d.vline(12,14,24,Web); d.vline(17,14,24,Web);
  d.stamp(11,15,['.w.','www','www','.w.','ppp','.p.'],{w:GW,p:GP}); // Gwen hood
  d.stamp(16,15,['.k.','kkk','krk','.k.','rrr','.r.'],{k:'#1A1A28',r:'#E03030'}); // Miles
  // tape on corner
  d.poly([[1,1],[7,0],[8,4],[2,5]],'#B8E8F0');
  // caption scribble
  d.line(10,27,14,26,GP); d.line(16,27,21,26,GP); d.px(23,26,GP);
  d.outline(OL);
  d.stamp(26,0,['r.r','rrr','.r.'],{r:GP});
};
A['gwen:c0']=d=>{ // band practice room, indoor
  // foam panel wall
  d.rect(0,0,64,26,'#3A3450'); for(let y=0;y<24;y+=4) for(let x=((y/4)%2)*4;x<64;x+=8){d.rect(x,y,3,3,'#4A4262'); d.px(x,y,'#5A5276')}
  // poster: Mary Janes (pink)
  d.rect(4,3,10,12,GP); d.rect(5,4,8,10,'#F8D0E8'); d.stamp(6,5,['m...m','mm.mm','m.m.m','m...m'],{m:'#1A1A28'}); d.hline(6,11,11,GT); d.hline(6,11,13,GP2);
  // string lights
  for(let x=18;x<64;x+=4){d.px(x,2+((x/4)%2),'#5A5276'); d.px(x+2,3,['#F8E060',GT,GP][(x/4)%3])}
  // floor (rug)
  d.rect(0,26,64,14,'#5A3A2E'); for(let y=28;y<40;y+=3) d.hline(0,63,y,'#4A2E24');
  d.ell(46,34,17,5,'#8A2E4A'); d.ell(46,34,15,4,'#A83A5A'); d.ring(46,34,10,'#C85A7A');
  // amp left back (out of pet area: x 23-31)
  d.rect(24,16,8,12,'#2A2A34'); d.rect(25,17,6,6,'#4A4A58'); for(let y=18;y<23;y+=2) d.hline(25,30,y,'#3A3A48'); d.hline(25,30,25,'#C8C8D0'); d.px(26,26,GT); d.px(29,26,GP);
  // guitar on stand
  d.line(36,8,36,20,'#5A3A20'); d.rect(35,5,3,3,'#2A2A34'); d.ell(36,23,4,4,GT); d.ell(36,21,3,2,GT); d.circ(36,23,1,'#1A1A28'); d.line(34,30,36,27,'#2A2A34'); d.line(38,30,36,27,'#2A2A34');
  // drum kit right
  d.ell(52,30,7,6,GW); d.ell(52,30,6,5,'#E8E8F0'); d.ell(52,30,4,3,'#1A1A28'); d.ring(52,30,6,GP); d.stamp(50,28,['b.b.b','.bbb.','b.b.b'],{b:GW});
  d.rect(43,22,6,4,GP); d.ell(46,22,3,1,GW); // tom
  d.rect(56,21,6,4,GP); d.ell(59,21,3,1,GW);
  d.line(41,14,41,32,'#A8A8B8'); d.ell(41,14,5,1,'#F8D048'); d.hline(37,45,14,'#D8A820'); // cymbal
  d.line(62,12,62,32,'#A8A8B8'); d.ell(61,12,4,1,'#F8D048');
  d.rect(57,28,5,4,GP2); d.ell(59,28,3,1,GW); // snare-ish floor tom
  // tossed drumsticks + cable
  d.line(26,35,31,33,'#E0B878'); d.line(27,37,32,36,'#E0B878');
  d.line(28,29,33,31,'#1A1A28'); d.line(33,31,38,30,'#1A1A28');
  // metronome
  d.poly([[18,6],[21,6],[22,13],[17,13]],'#C88A50'); d.line(19,12,21,7,'#1A1A28');
};
A['gwen:c1']=d=>{ // another earth's brooklyn, sunset, spider-verse style
  d.grad(0,0,64,22,['#F04A8A','#F86A78','#F8906A','#F8B060','#F8D070']); d.rect(0,22,64,4,'#F8D070'); d.rect(0,20,22,6,'#9A4A6A'); d.rect(0,17,8,9,'#8A3A5A'); d.rect(10,19,6,7,'#7A3A6A');
  // halftone dots in sky
  for(let y=1;y<14;y+=3) for(let x=(y%2)*2;x<64;x+=5) d.px(x,y,'#F8A0B0');
  d.circ(44,18,5,'#FFE8A0'); d.circ(44,18,3,'#FFF8E0');
  // far skyline
  [[24,10,4],[29,6,3],[33,12,5],[52,8,4],[57,11,7]].forEach(([x,y,w])=>d.rect(x,y,w,22-y,'#7A3A6A'));
  d.vline(30,2,6,'#7A3A6A');
  // brownstones row
  const BS=['#A0503A','#8A4A5A','#B8603A','#7A4A3A'];
  [[22,12,9],[31,14,10],[41,11,10],[51,13,13]].forEach(([x,y,w],i)=>{d.rect(x,y,w,26-y,BS[i]); d.hline(x,x+w-1,y,'#4A2028'); for(let wy=y+3;wy<24;wy+=4) for(let wx=x+2;wx<x+w-1;wx+=3) d.rect(wx,wy,2,2,(wx+wy)%3?'#F8D878':'#4A2A40')});
  // water tower
  d.rect(44,4,6,5,'#6A3A2A'); d.poly([[43,4],[47,1],[51,4]],'#5A2A20'); d.line(45,9,44,11,'#4A2028'); d.line(49,9,50,11,'#4A2028');
  // pizza shop front
  d.rect(30,19,12,7,'#2A6A5A'); d.rect(31,21,5,4,'#F8E0A0'); d.rect(37,21,4,5,'#3A2A30');
  for(let x=30;x<42;x+=2){d.px(x,18,'#E03838'); d.px(x+1,18,'#FFFFFF')}
  // giant pizza slice sign
  d.poly([[33,8],[41,8],[37,16]],'#F8C848'); d.hline(33,41,8,'#C87028'); d.hline(33,41,9,'#E89038'); [[35,11],[38,10],[37,13]].forEach(([x,y])=>d.px(x,y,'#D83838'));
  // fire escape zigzag
  d.line(53,15,61,19,'#2A1A20'); d.line(61,19,53,23,'#2A1A20'); d.hline(52,62,15,'#2A1A20'); d.hline(52,62,19,'#2A1A20');
  // sidewalk & street
  d.rect(0,26,64,14,'#6A5A70'); d.rect(0,26,64,3,'#8A7A8A'); d.hline(0,63,29,'#4A3A50');
  for(let x=0;x<64;x+=8) d.hline(x,x+3,34,'#F8D070');
  // graffiti spider tag + misprint offset
  d.stamp(24,22,['g.g.g','.ggg.','g.g.g'],{g:'#40D8E8'});
  // pizza box on sidewalk + web
  d.rect(46,27,9,2,'#F8F0E0'); d.hline(46,54,27,'#E8D8C0'); d.px(50,27,'#E03838');
  d.line(56,26,63,22,'#FFFFFF'); d.line(56,26,60,22,'#FFFFFF');
};
A['gwen:c2']=d=>{ // renaissance museum, indoor, vulture fight aftermath
  const M1='#E8DCC8', M2='#C8B8A0', M3='#A89880', Gd='#D8A830', Gd2='#A87818';
  d.rect(0,0,64,40,M1);
  // arches
  for(let i=0;i<3;i++){const x=6+i*22; d.rect(x,6,14,20,M2); d.circ(x+7,7,7,M2); d.rect(x+1,8,12,18,M1); d.circ(x+7,8,6,M1)}
  d.rect(0,0,64,3,M3); d.hline(0,63,3,Gd);
  // pillars
  [3,26,48].forEach(x=>{d.rect(x,4,3,22,'#F8F0E0'); d.vline(x+2,4,25,M2); d.rect(x-1,4,5,1,M3); d.rect(x-1,25,5,1,M3)});
  // paintings in gold frames
  // mona-ish portrait center
  d.rect(30,8,12,14,Gd); d.rect(31,9,10,12,'#4A5A3A'); d.rect(32,10,8,10,'#6A7A4A'); d.circ(36,13,2,'#E8C090'); d.rect(34,15,5,5,'#3A2A20'); d.rect(35,11,3,1,'#3A2A20'); d.hline(31,40,9,Gd2);
  // flying machine sketch (da vinci) right
  d.rect(51,8,12,10,Gd); d.rect(52,9,10,8,'#F0DCA8'); d.line(53,15,57,10,'#8A6A40'); d.line(57,10,61,15,'#8A6A40'); d.line(57,10,57,16,'#8A6A40'); d.line(54,12,60,12,'#8A6A40');
  // checkered floor
  d.rect(0,26,64,14,'#D8C8B0'); for(let y=26;y<40;y+=3) for(let x=((y-26)/3%2)*4;x<64;x+=8) d.rect(x,y,4,3,'#9A8A78');
  d.hline(0,63,26,M3);
  // torn wooden wing of the vulture on floor (right)
  {const px=40,py=36, tips=[[44,26],[50,25],[56,26],[61,29],[62,33]]; for(let i=0;i<tips.length-1;i++) d.poly([[px,py],tips[i],tips[i+1]],i%2?'#C8A070':'#E0C090'); tips.forEach(([x,y])=>d.line(px,py,x,y,'#5A3A20')); d.line(38,37,46,35,'#5A3A20');}
  // scattered feathers
  [[34,33],[52,36],[62,34],[30,38]].forEach(([x,y])=>{d.line(x,y,x+2,y-1,'#5A4A4A'); d.px(x+1,y,'#8A7A7A')});
  // broken painting tilted on floor
  d.poly([[26,38],[30,30],[36,32],[33,39]],Gd); d.poly([[27,37],[30,31],[35,33],[32,38]],'#5A7AA8'); d.line(29,33,33,36,'#F8F0E0');
  // web strands across top right
  d.line(42,0,63,10,'#FFFFFF'); d.line(52,0,63,5,'#FFFFFF'); d.line(56,0,47,7,'#FFFFFF');
  // velvet rope (cordon) knocked
  d.rect(24,30,2,6,Gd2); d.line(25,31,30,33,'#B02838');
};

// ===================== SQUID =====================
const SQ1='#9ACAC0', SQ2='#7AB0A8', SQ3='#C0E4DC', SQK='#2A3A38';
A['squid:s0']=d=>{ // new clarinet reed + mouthpiece
  const K1='#2A2A34', K2='#4A4A5C', K3='#6A6A80', Sv='#D8D8E4', Sv2='#A0A0B4', R1='#F0D488', R2='#D8B060', R3='#B88A38', R4='#FFF0C0';
  // clarinet mouthpiece (diagonal, upper-left to lower-right)
  d.poly([[4,8],[8,4],[24,20],[20,24]],K1); d.poly([[5,8],[8,5],[22,19],[19,22]],K2); d.line(7,6,21,20,K3);
  d.poly([[1,6],[6,1],[8,4],[4,8]],K1); d.line(2,6,6,2,K2); // beak tip
  // barrel joint
  d.poly([[20,24],[24,20],[28,24],[24,28]],K1); d.line(22,24,25,21,K3); d.poly([[24,28],[28,24],[31,27],[27,31]],K2);
  // ligature (silver bands)
  [[11,13],[16,18]].forEach(([x,y])=>{d.line(x-3,y+1,x+1,y-3,Sv); d.line(x-2,y+2,x+2,y-2,Sv2); d.px(x+2,y-3,Sv)});
  d.outline(OL);
  // shiny new reed laid alongside (separate)
  d.poly([[12,27],[14,25],[26,13],[29,10],[30,12],[28,15],[16,28],[14,29]],R1);
  d.line(14,28,29,13,R2); d.line(16,28,29,15,R3); d.line(13,26,27,12,R4);
  d.poly([[27,11],[30,10],[30,12]],R4); // thin tip
  // reed outline only around reed region
  for(let y=8;y<32;y++) for(let x=10;x<32;x++) if(!d.get(x,y)&&[[1,0],[-1,0],[0,1],[0,-1]].some(([a,b])=>[R1,R2,R3,R4].includes(d.get(x+a,y+b)))) d.px(x,y,OL);
  // music notes + sparkle
  d.stamp(23,1,['.nn','.n.','nn.'],{n:SQ2}); d.stamp(13,0,['nnn','n.n','n.n'],{n:SQ2});
  sparkle(d,4,26,'#F8E070','#FFFFFF');
};
A['squid:s1']=d=>{ // 'Bold and Brash' painting
  const Gd='#E8B840', Gd2='#B88820', Gd3='#FFE89A', Cv='#F4ECD8', Ink=SQK;
  d.rect(1,2,30,26,Gd); d.frame(1,2,30,26,Gd2); d.hline(2,29,3,Gd3); d.vline(2,3,26,Gd3);
  for(let x=4;x<29;x+=4){d.px(x,2,Gd3); d.px(x,27,Gd2)}
  d.rect(4,5,24,20,Cv);
  // bold brushy background swashes
  d.poly([[4,5],[16,5],[8,25],[4,25]],'#F8A040'); d.poly([[20,5],[28,5],[28,25],[24,25]],'#5A8AE0');
  d.line(4,22,12,24,'#E84848'); d.line(4,23,12,25,'#E84848');
  // squid self portrait: long head, droopy nose, heavy eyelids
  d.ell(16,12,6,7,SQ1); d.ell(18,13,4,6,SQ2); d.rect(13,18,7,5,SQ1);
  d.rect(11,11,4,3,'#FFFFFF'); d.rect(17,11,4,3,'#FFFFFF'); d.hline(11,14,11,SQ2); d.hline(17,20,11,SQ2); d.px(13,13,'#D84040'); d.px(18,13,'#D84040');
  d.rect(15,14,3,7,SQ2); d.rect(15,20,4,2,SQ2); d.px(15,15,SQ3);
  d.hline(12,20,23,Ink); d.px(12,22,Ink); d.px(20,22,Ink);
  // drippy paint
  d.vline(9,18,24,'#F8A040'); d.vline(25,15,21,'#5A8AE0');
  d.outline(OL);
  // plaque
  d.rect(11,28,10,3,Gd2); d.hline(12,19,29,Gd3); d.hline(11,20,31,OL); d.px(10,29,OL); d.px(21,29,OL); d.px(10,30,OL); d.px(21,30,OL);
};
A['squid:s2']=d=>{ // Tentacle Acres key (tiki-house shaped bow)
  const B1='#E8C058', B2='#C09030', B3='#8A6018', B4='#FFF0A8', T='#F8F0E0', Rib='#5A8AE0';
  // bow = Easter-island head house
  d.poly([[7,2],[17,2],[18,6],[19,16],[5,16],[6,6]],B1); d.poly([[14,2],[17,2],[18,6],[19,16],[15,16]],B2);
  d.rect(9,6,2,3,B3); d.rect(14,6,2,3,B3); d.hline(8,11,5,B3); d.hline(13,16,5,B3); // brows/eyes
  d.rect(11,7,3,6,B2); d.vline(11,7,12,B4); // nose
  d.rect(9,14,6,1,B3); d.rect(10,13,1,1,B3); // mouth/door
  d.vline(7,4,14,B4);
  // shaft
  d.rect(10,16,4,10,B1); d.vline(13,16,25,B2); d.vline(10,16,25,B4);
  // teeth
  d.rect(14,20,4,2,B1); d.rect(14,23,3,2,B1); d.rect(14,26,4,1,B2);
  d.rect(10,26,4,3,B1); d.hline(10,13,28,B2);
  // keyring hole
  d.circ(12,9.5,0.6,null);
  d.outline(OL);
  // tag on string
  d.line(19,4,23,6,'#8A6A40'); d.poly([[23,5],[29,5],[30,8],[29,11],[23,11]],T); d.px(24,8,'#8A6A40');
  d.ring(23.5,8,0,OL);
  d.stamp(25,7,['.k.','kkk','.k.'],{k:Rib});
  for(let y=4;y<13;y++) for(let x=21;x<32;x++) if(!d.get(x,y)&&[[1,0],[-1,0],[0,1],[0,-1]].some(([a,b])=>d.get(x+a,y+b)===T)) d.px(x,y,OL);
  // little "..." boredom
  [3,5,7].forEach(x=>d.px(x+18,30,SQ2));
};
A['squid:c0']=d=>{ // bubble bath, indoor
  // tiled bathroom wall (purple-ish underwater home)
  d.rect(0,0,64,28,'#7A9AC8'); for(let y=0;y<28;y+=5) d.hline(0,63,y,'#6A88B8'); for(let y=0;y<28;y+=5) for(let x=((y/5)%2)*3;x<64;x+=6) d.vline(x,y,y+4,'#6A88B8');
  // porthole window with ocean & jellyfish
  d.circ(14,9,6,'#5A4A3A'); d.circ(14,9,5,'#3AA0C8'); d.circ(14,9,4,'#58B8D8'); d.ell(15,8,2,1,'#F8A0D0'); d.vline(14,9,11,'#F8A0D0'); d.vline(16,9,11,'#F8A0D0'); d.px(12,6,'#B8E8F8');
  // floor
  d.rect(0,28,64,12,'#E0D0B0'); for(let x=0;x<64;x+=6) d.vline(x,28,39,'#C8B898'); d.hline(0,63,28,'#B8A888');
  // door far right with knock lines
  d.rect(56,6,8,22,'#8A5A30'); d.frame(56,6,8,22,'#5A3A1E'); d.circ(58,17,0.8,'#F8D048');
  [[52,10],[51,13],[52,16]].forEach(([x,y])=>d.hline(x,x+2,y,'#FFFFFF'));
  // bathtub (clawfoot)
  d.poly([[26,22],[52,22],[50,32],[28,32]],'#FFFFFF'); d.hline(26,52,22,'#D8E0E8'); d.poly([[44,23],[52,22],[50,32],[46,32]],'#D8E0E8');
  [[29,33],[48,33]].forEach(([x,y])=>{d.rect(x,y,2,2,'#E8C048')});
  // faucet
  d.rect(25,16,2,7,'#B8B8C8'); d.rect(25,16,5,2,'#B8B8C8'); d.px(29,18,'#9AD8F8');
  // bubbles mountain
  [[30,20,3],[34,18,4],[39,19,4],[44,18,3],[48,20,3],[37,15,3],[42,15,2],[33,15,2]].forEach(([x,y,r])=>{d.circ(x,y,r,'#F4FAFF'); d.px(x-1,y-1,'#FFFFFF'); d.ring(x,y,r,'#C8E0F0')});
  [[28,10],[46,8],[50,12],[31,6]].forEach(([x,y])=>{d.ring(x,y,1.2,'#E8F4FF'); d.px(x-1,y-1,'#FFFFFF')});
  // shower cap & book on stool, rubber duck
  d.rect(14,28,0,0,'#000000');
  d.ell(43,17,3,1,'#F8A0C8'); // floating loofah
  d.stamp(32,17,['.yy.','yyyo','.yy.'],{y:'#F8E048',o:'#F88820'});
  // "do not disturb" hanger
  d.rect(58,20,4,5,'#E84848'); d.hline(58,61,22,'#FFFFFF');
};
A['squid:c1']=d=>{ // New Kelp City concert hall, city
  // deep-sea night-blue sky with light rays
  d.grad(0,0,64,24,['#0E2A4A','#14385A','#1C486A','#245A7A']);
  for(let i=0;i<3;i++) d.line(8+i*20,0,2+i*20,22,'#2A6A8A');
  // kelp skyscrapers (tall rounded towers w/ windows)
  [[26,4,6,'#2A6A5A'],[56,2,7,'#2A6A5A'],[2,8,6,'#245A50'],[50,9,5,'#24504A']].forEach(([x,y,w,c])=>{d.rect(x,y+2,w,24-y,c); d.ell(x+w/2-.5,y+2,w/2,2,c); for(let wy=y+4;wy<24;wy+=3) d.rect(x+1+(wy%2),wy,2,1,'#F8E890')});
  // concert hall: grand facade w/ columns and dome
  const M='#E8DCC8', M2='#C8B8A0', M3='#A08870';
  d.ell(42,8,8,5,'#C88A3A'); d.ell(41,7,6,3,'#E8B050'); d.vline(42,0,3,'#C88A3A'); d.px(42,0,'#F8E070');
  d.rect(30,11,24,15,M); d.poly([[28,13],[42,7],[56,13]],M2); d.poly([[31,12],[42,8],[53,12]],M);
  d.rect(28,13,28,2,M3);
  for(let x=31;x<54;x+=4) {d.rect(x,15,2,10,'#FFFFFF'); d.vline(x+1,15,24,M2)}
  d.rect(39,19,6,7,'#F8C060'); d.rect(40,20,4,6,'#FFE098');
  // marquee with treble clef
  d.rect(36,10,12,3,'#B02838'); d.stamp(41,10,['.c','c.','cc'],{c:'#F8E070'}); for(let x=36;x<48;x+=2) d.px(x,13,'#F8E070');
  // steps & plaza
  d.rect(0,26,64,14,'#5A6A7A'); d.rect(28,26,28,1,M2); d.rect(26,27,32,1,M3); d.rect(24,28,36,1,M2);
  for(let x=0;x<64;x+=8) d.hline(x,x+5,33,'#4A5A6A');
  // searchlights
  // red carpet
  d.poly([[39,26],[45,26],[50,40],[34,40]],'#C02838'); d.line(39,26,34,40,'#E84858');
  // bubbles rising
  [[16,6],[19,12],[60,20],[24,16]].forEach(([x,y])=>{d.ring(x,y,1,'#8ACAE0')});
  // poster stand
  d.rect(57,28,5,8,'#2A3A4A'); d.rect(58,29,3,5,SQ1); d.px(59,30,SQK);
};
A['squid:c2']=d=>{ // the nothingness (white void that gets creepy)
  d.grad(0,0,64,40,['#FFFFFF','#FAFAFC','#F4F4F8','#EDEDF4','#E6E6EE','#DEDEE8']);
  d.hline(0,63,24,'#D8D8E4'); d.dither(0,25,64,1,'#E4E4EC','#EDEDF4');
  // lonely chair with long shadow
  d.poly([[37,34],[60,36],[58,38],[35,36]],'#CCCCDA');
  const C='#8A8A9E', C2='#6A6A80';
  d.rect(37,14,2,21,C); d.rect(45,24,2,11,C); d.rect(37,23,10,2,C2); d.rect(37,14,6,2,C); d.rect(41,16,2,7,'#A8A8BA'); d.vline(38,15,33,'#A8A8BA');
  d.rect(39,25,1,9,C2); d.rect(44,25,1,9,C2);
  // dropped clarinet
  d.line(26,36,33,34,'#3A3A48'); d.line(26,37,33,35,'#4A4A5C'); d.px(34,34,'#C8C8D8'); d.px(25,37,'#3A3A48');
  // creepy eyes in far distance
  d.stamp(53,9,['ww..ww','wk..wk'],{w:'#E0E0E8',k:'#9A9AAA'});
  [[20,6],[48,4],[30,14],[60,28]].forEach(([x,y])=>d.px(x,y,'#D0D0DC'));
  d.stamp(27,10,['k.k.k'],{k:'#B0B0C0'});
};

// ===================== RAKKO =====================
A['rakko:s0']=d=>{ // post-training sweets: dango skewer + wrapped candies
  const Sk='#C8A070', Sk2='#8A6A40';
  // skewer
  d.line(5,30,24,3,Sk2); d.line(6,30,25,3,Sk);
  // dango balls: pink, white, green
  [[20,9,'#F8A8C0','#E07898','#FFD8E4'],[15,16,'#FFF8F0','#E0D4C8','#FFFFFF'],[10,23,'#9AD078','#6AA850','#C8EAA8']].forEach(([x,y,c,c2,c3])=>{d.circ(x,y,4.4,c); d.circ(x+1,y+1,3,c); d.ell(x+1.5,y+2,2.5,1.5,c2); d.px(x-2,y-2,c3); d.px(x-1,y-2,c3); d.px(x-2,y-1,c3)});
  // syrup drizzle
  d.line(17,6,22,7,'#C88838'); d.px(23,8,'#C88838'); d.px(18,11,'#A86A20'); d.px(12,13,'#C88838'); d.line(12,13,18,14,'#C88838');
  d.outline(OL);
  // one wrapped candy set aside (to share)
  const cx=25, cy=24;
  d.ell(cx,cy,3,2.4,'#F8D048'); d.px(cx-1,cy-1,'#FFF4B0'); d.hline(cx-1,cx+1,cy+1,'#E0A020');
  d.poly([[cx-3,cy],[cx-6,cy-3],[cx-6,cy+3]],'#F87878'); d.poly([[cx+3,cy],[cx+6,cy-3],[cx+6,cy+3]],'#F87878');
  for(let y=18;y<31;y++) for(let x=17;x<32;x++) if(!d.get(x,y)&&[[1,0],[-1,0],[0,1],[0,-1]].some(([a,b])=>['#F8D048','#FFF4B0','#E0A020','#F87878'].includes(d.get(x+a,y+b)))) d.px(x,y,OL);
  // sweat drop (from training) & sparkle
  d.stamp(27,4,['.b.','bbb','.b.'],{b:'#F8E070'}); d.px(4,6,'#80C8F8'); d.px(4,7,'#80C8F8'); d.px(3,7,'#80C8F8');
};
A['rakko:s1']=d=>{ // elite hunt request paper
  const P1='#F4E4C0', P2='#E0C890', P3='#C0A060', Ink='#3A2A20', R='#D82838';
  d.poly([[4,3],[28,2],[29,29],[27,31],[5,30],[3,28]],P1);
  d.poly([[27,31],[29,29],[29,26],[25,30]],P2); // curl
  d.vline(4,4,28,P2); d.hline(5,27,29,P2);
  // torn edge bottom
  for(let x=6;x<26;x+=4) d.px(x,30,null);
  // header bar
  d.rect(7,5,18,3,Ink); d.hline(8,23,6,'#5A4A3A');
  // monster drawing (spiky beast)
  d.ell(16,15,7,5,P2); d.ell(16,15,6,4,'#B8A080');
  d.poly([[10,12],[11,8],[13,11]],Ink); d.poly([[19,11],[21,8],[22,12]],Ink);
  d.px(13,14,R); d.px(19,14,R); d.hline(13,19,17,Ink); d.px(14,18,'#FFFFFF'); d.px(18,18,'#FFFFFF');
  // difficulty stars (5)
  for(let i=0;i<5;i++) d.stamp(6+i*4,21,['.s.','sss','s.s'],{s:'#E8A020'});
  // lines of text
  d.hline(7,20,25,P3); d.hline(7,16,27,P3);
  // pin tack
  d.circ(16,2,1.6,'#3A8AE0'); d.px(15,1,'#9AD0F8');
  d.outline(OL);
  // big red DONE stamp ring slanted
  d.ring(23,22,5,R); d.ring(23,22,4.3,R); d.line(20,22,22,24,R); d.line(22,24,26,19,R); d.line(21,22,22,23,R); d.line(22,23,25,19,R);
};
A['rakko:s2']=d=>{ // No.1 hunter medal
  const G1='#F8D050', G2='#D8A020', G3='#A87010', G4='#FFF6B0', R='#D83040', R2='#A01828', Bl='#3A6AD8', Bl2='#2A4AA8';
  // ribbon V
  d.poly([[6,0],[13,0],[18,14],[13,16]],R); d.poly([[19,0],[26,0],[19,16],[14,14]],Bl);
  d.line(8,0,15,15,R2); d.line(24,0,18,15,Bl2); d.hline(6,12,0,'#F87888'); d.hline(20,26,0,'#7AA0F0');
  // medal
  d.circ(16,21,9.4,G3); d.circ(16,21,8.6,G2); d.circ(15,20,7.6,G1); d.ring(16,21,6.5,G2);
  // rays
  for(let a=0;a<12;a++){const t=a*Math.PI/6; d.px(16+Math.cos(t)*8,21+Math.sin(t)*8,G4)}
  // big 1
  d.stamp(13,16,['.11.','111.','.11.','.11.','.11.','.11.','.11.','1111'],{1:G3});
  d.stamp(14,16,['.1','11','.1','.1','.1','.1','.1','11'],{1:G4});
  // tiny crossed sticks emblem? highlight
  d.px(10,16,G4); d.px(11,15,G4); d.px(10,17,G4);
  // clasp
  d.rect(14,12,5,3,G2); d.hline(14,18,12,G4);
  d.outline(OL);
  sparkle(d,28,10,G1,'#FFFFFF'); sparkle(d,3,20,G1,'#FFFFFF'); d.px(27,30,G4);
};
A['rakko:c0']=d=>{ // training grounds, day
  d.grad(0,0,64,18,['#58B0F0','#70C0F4','#8ACCF6','#A8DCF8']);
  cloud(d,44,4,6,'#FFFFFF'); cloud(d,12,7,4,'#FFFFFF');
  // mountains
  d.poly([[0,18],[10,8],[20,16],[30,6],[44,18]],'#7A9A88'); d.poly([[30,6],[33,9],[30,10],[27,9]],'#F0F4F8'); d.poly([[34,18],[50,9],[64,16],[64,18]],'#6A8A78');
  // wooden fence
  d.rect(0,17,64,3,'#A8743E'); for(let x=0;x<64;x+=6) d.rect(x,15,2,6,'#8A5A2A');
  // dirt field
  d.rect(0,20,64,20,'#D8B078'); d.dither(0,20,64,1,'#C89A60','#D8B078'); for(let i=0;i<14;i++) d.px(d.ri(0,63),d.ri(22,39),'#C49A60');
  d.ell(14,30,11,5,'#E4C090');
  // training dummy (post with straw body & sticks arms)
  d.rect(40,10,2,22,'#7A4A28'); d.ell(41,17,4,5,'#E8C870'); d.ell(41,16,3,4,'#F8DC88'); d.circ(41,9,3,'#E8C870');
  d.hline(34,48,15,'#8A5A2A'); d.hline(34,48,16,'#6A4020');
  d.px(40,9,'#3A2A20'); d.px(42,9,'#3A2A20'); d.line(39,19,43,15,'#C8A048'); d.line(39,15,43,19,'#C8A048'); // X mark
  d.ell(41,32,5,1,'#B8905A');
  // tire
  d.ell(54,31,5,3,'#2A2A34'); d.ell(54,30,3,1,'#D8B078'); d.hline(50,58,29,'#4A4A58');
  // stack of 1000-pushup tally marks on a board
  d.rect(25,22,10,7,'#A87040'); d.frame(25,22,10,7,'#7A4A28'); for(let i=0;i<4;i++) d.vline(27+i*2,23,27,'#F8F4E8'); d.line(26,27,34,23,'#F8F4E8');
  d.vline(26,29,32,'#7A4A28'); d.vline(33,29,32,'#7A4A28');
  // dumbbell + towel
  d.rect(46,35,6,1,'#5A5A6A'); d.rect(45,34,2,3,'#2A2A34'); d.rect(51,34,2,3,'#2A2A34');
  d.rect(58,22,5,6,'#F8F4E8'); d.hline(58,62,24,'#E85050');
  // sweat drops in dirt
  [[30,36],[36,38]].forEach(([x,y])=>d.px(x,y,'#B8905A'));
};
A['rakko:c1']=d=>{ // deep forest hunt, forest
  d.grad(0,0,64,40,['#16302A','#1C3A30','#224436','#284E3C']);
  // layered tree silhouettes
  for(let x=-2;x<66;x+=6) d.poly([[x,24],[x+3,2+(x*7)%8],[x+6,24]],'#1A3A2E');
  for(let x=1;x<66;x+=9){d.rect(x,0,3,30,'#10241E'); d.ell(x+1,4,5,5,'#14302A')}
  // light shaft
  for(let y=0;y<28;y++) for(let x=Math.round(28+y/3);x<34+y/3;x++) if((x+y)%2) d.px(x,y,'#2E5A44');
  // ground
  d.rect(0,28,64,12,'#3A5A2E'); d.dither(0,28,64,1,'#2E4A26','#3A5A2E'); for(let x=0;x<64;x+=4) d.px(x+1,27,'#4A7A3A');
  // defeated forest monster (big furry beast, X eyes, lying)
  const M1='#6A4A8A', M2='#4A2E6A', M3='#8A6AAA';
  d.ell(48,29,13,6,M1); d.ell(48,31,13,4,M2); d.ell(46,27,10,3,M3);
  [[38,24],[44,22],[50,22],[56,24]].forEach(([x,y])=>d.poly([[x,y+2],[x+2,y-2],[x+4,y+2]],M2));
  d.stamp(38,27,['x.x...x.x','.x.....x.','x.x...x.x'],{x:'#F8F0E0'});
  d.hline(40,45,31,'#F8F0E0'); d.px(41,32,'#FFFFFF'); d.px(44,32,'#FFFFFF');
  // tongue & dizzy stars
  d.px(42,32,'#E85A7A');
  [[44,18],[50,17],[56,19]].forEach(([x,y])=>d.stamp(x-1,y-1,['.y.','yyy','.y.'],{y:'#F8E060'}));
  // broken trees and stick
  d.rect(28,22,3,8,'#5A3A20'); d.poly([[28,22],[30,19],[31,22]],'#7A5A30');
  d.line(24,36,33,33,'#A87840'); d.line(24,37,33,34,'#7A5030');
  // glowing mushrooms
  [[60,36],[34,38],[26,30]].forEach(([x,y])=>{d.rect(x-1,y,3,1,'#F86A6A'); d.px(x,y+1,'#E8D8C8'); d.px(x,y-1,'#F86A6A')});
  // fireflies
  [[12,12],[22,8],[58,10],[18,18]].forEach(([x,y])=>d.px(x,y,'#D8F880'));
};
A['rakko:c2']=d=>{ // legendary monster's lair, sunset
  d.grad(0,0,64,40,['#4A2050','#8A3050','#D0504A','#F07A40','#F8A848']);
  // sun low behind
  d.circ(44,16,6,'#FFD878'); d.circ(44,16,4,'#FFF0B0');
  // rocky cave mouth framing (dark rock arch)
  const R1='#3A2028', R2='#5A3038', R3='#7A4448';
  d.poly([[0,0],[64,0],[64,40],[58,40],[60,20],[56,8],[44,4],[30,6],[22,14],[20,26],[0,26]],R1);
  d.poly([[22,14],[30,6],[44,4],[56,8],[54,10],[44,7],[31,9],[25,16]],R2);
  for(let i=0;i<14;i++){const x=d.ri(0,62), y=d.ri(0,24); if(d.get(x,y)===R1) d.hline(x,x+1,y,R2)}
  for(let i=0;i<5;i++) d.poly([[28+i*7,7-(i%2)],[30+i*7,12+(i%2)*2],[32+i*7,7-(i%2)]],R2); // stalactites
  // ground: scorched rock
  d.rect(0,26,64,14,'#6A3A30'); d.dither(0,26,64,1,'#5A3028','#6A3A30'); d.rect(20,24,40,2,'#7A4438');
  // giant dragon skull (defeated legend) in lair center-right
  const B='#F0E4D0', B2='#C8B8A0', B3='#9A8A78';
  d.poly([[30,30],[34,20],[44,17],[54,20],[58,28],[54,32],[34,33]],B);
  d.poly([[34,29],[54,28],[58,28],[54,32],[34,33]],B2);
  d.ell(41,23,3,2,'#2A1418'); d.ell(51,23,2,2,'#2A1418'); d.px(41,23,'#F84020');
  d.poly([[44,17],[42,10],[46,16]],B); d.poly([[52,19],[56,11],[55,20]],B); // horns
  for(let x=35;x<55;x+=3) d.poly([[x,30],[x+1,33],[x+2,30]],'#FFFFFF'); // teeth
  d.hline(34,55,30,B3);
  // bones & treasure
  d.line(24,36,30,34,B); d.circ(24,36,1,B); d.circ(30,34,1,B);
  d.ell(58,35,5,2,'#F8C838'); d.px(56,33,'#FFF0A0'); d.px(59,34,'#FFF0A0'); d.px(57,34,'#C89820');
  // embers
  [[28,20],[36,14],[60,22],[24,30]].forEach(([x,y])=>d.px(x,y,'#F8D060'));
  // victory stick planted
  d.vline(61,26,36,'#A87840'); d.px(61,25,'#C89860');
};

// ===================== PROF =====================
const PN='#3A4A78', PN2='#2A3458';
A['prof:s0']=d=>{ // department vending coffee (paper cup)
  const C1='#FFFFFF', C2='#E0E4EC', C3='#B8C0CC', Br='#8A4A20', Br2='#5A2E14', Fo='#D8A070', Bl=PN, Bl2='#5A6AA0';
  // steam
  // cup body tapered
  d.poly([[6,9],[26,9],[23,30],[9,30]],C1); d.poly([[19,9],[26,9],[23,30],[18,30]],C2); d.poly([[24,9],[26,9],[23,30],[22,30]],C3);
  // rim + coffee surface
  d.ell(16,9,10,2,C2); d.ell(16,9,9,1,Br); d.hline(10,20,9,Fo); d.px(13,8,Fo);
  // printed band + logo
  d.poly([[7,15],[25,15],[24,22],[8,22]],Bl); d.poly([[19,15],[25,15],[24,22],[19,22]],PN2);
  d.stamp(12,16,['.cccc.','cc..cc','c.....','cc..cc','.cccc.'],{c:'#F8E070'}); // C = coffee/campus
  d.hline(8,24,15,Bl2);
  // highlight
  d.vline(8,10,28,'#FFFFFF'); d.vline(10,23,28,'#F4F6FA');
  d.hline(9,22,29,C3);
  d.outline(OL);
  // paper on side: equation scribble & coin
  d.line(12,1,10,3,'#B8C0D4'); d.line(10,3,12,5,'#B8C0D4'); d.line(18,0,16,2,'#B8C0D4'); d.line(16,2,18,4,'#B8C0D4');
  d.circ(27,27,2.5,'#E8C048'); d.px(26,26,'#FFF0A0'); d.ring(27,27,2.5,OL);
  d.stamp(1,24,['.ff.','f..f','....'],{f:'#8A8AA0'});
};
A['prof:s1']=d=>{ // conference proceedings: stack of books
  const book=(x,y,w,h,c,c2,pg)=>{d.rect(x,y,w,h,c); d.hline(x,x+w-1,y,c2); d.rect(x+w-2,y+1,1,h-1,pg); d.hline(x+1,x+w-3,y+h-1,c2)};
  // bottom thick
  d.rect(3,22,26,7,'#3A5A9A'); d.hline(3,28,22,'#5A7ABA'); d.rect(3,28,26,1,'#2A3A6A'); d.rect(26,23,2,5,'#F4ECD8'); for(let y=23;y<28;y+=2) d.hline(26,27,y,'#D8D0B8');
  d.rect(6,24,14,2,'#F8E070'); // spine label
  // middle
  d.rect(5,15,23,7,'#A83A3A'); d.hline(5,27,15,'#C85A5A'); d.rect(25,16,2,5,'#F4ECD8'); for(let y=16;y<21;y+=2) d.hline(25,26,y,'#D8D0B8'); d.rect(8,17,10,2,'#F0E0C0');
  // top: open proceedings
  d.poly([[3,13],[16,10],[16,15],[3,15]],'#F8F4E8'); d.poly([[16,10],[29,13],[29,15],[16,15]],'#ECE6D6');
  d.vline(16,10,15,'#C8C0A8'); d.hline(3,29,15,'#5A4A3A');
  for(let i=0;i<3;i++){d.line(5,13-i+1,14,11-i+1+0,'#9A9AB0')}
  d.hline(18,27,12,'#9A9AB0'); d.hline(18,26,14,'#9A9AB0');
  // highlighter mark (exam!)
  d.line(18,13,27,13,'#F8F060'); d.line(18,13,27,13,'#F0E048');
  // sticky tabs
  d.rect(9,21,2,3,'#F8E070'); d.rect(13,21,2,3,'#70D0F0'); d.rect(20,13,0,0,'#000');
  d.rect(28,17,2,2,'#F890B0'); d.rect(29,24,2,2,'#90E090');
  d.outline(OL);
  // star for "on the exam"
  d.stamp(24,3,['..r..','.rrr.','rrrrr','.r.r.'],{r:'#E84848'});
  // highlighter pen
  d.line(4,4,12,8,'#F0E048'); d.line(4,5,12,9,'#C8B820'); d.px(3,4,'#3A3A48'); d.ring(0,0,0,OL);
};
A['prof:s2']=d=>{ // Nobel prize medal in open box
  const V='#A82838', V2='#7A1828', V3='#C84858', G1='#F8D050', G2='#D8A020', G3='#A87010', G4='#FFF6B0';
  // box lid (open, back)
  d.rect(3,2,26,12,V2); d.rect(4,3,24,10,V); d.rect(6,5,20,6,V3); d.hline(3,28,13,'#5A1018');
  // box base
  d.rect(2,14,28,15,V2); d.rect(4,15,24,12,V); d.hline(2,29,28,'#5A1018'); d.hline(3,28,14,'#D8A020');
  // cushion slot
  d.ell(16,21,9,6,V2);
  // medal
  d.circ(16,21,7.4,G3); d.circ(16,21,6.6,G2); d.circ(15.5,20.5,5.8,G1); d.ring(16,21,5.4,G2);
  // relief profile (head facing left)
  d.stamp(13,17,['..ggg.','.ggggg','gggggg','.ggggg','..gggg','..ggg.','.gggg.'],{g:G2});
  d.px(13,19,G3); d.px(14,18,G4);
  d.px(11,17,G4); d.px(12,16,G4);
  d.outline(OL);
  sparkle(d,29,4,G1,'#FFFFFF'); sparkle(d,2,31,G1,'#FFFFFF');
};
A['prof:c0']=d=>{ // campus library, indoor
  d.rect(0,0,64,40,'#6A4A34');
  // tall arched window center
  d.rect(26,2,12,18,'#9AC8E8'); d.circ(32,3,6,'#9AC8E8'); d.rect(26,9,12,11,'#9AC8E8'); d.vline(32,0,19,'#4A3424'); d.hline(26,37,10,'#4A3424');
  d.frame(26,3,12,17,'#4A3424'); d.px(28,6,'#E8F4FC'); d.px(29,5,'#E8F4FC');
  // bookshelves on both sides (right big)
  const shelf=(x,y,w,h)=>{d.rect(x,y,w,h,'#4A2E1C'); for(let sy=y+1;sy<y+h-1;sy+=5){let bx=x+1; while(bx<x+w-1){const bw=d.ri(1,2), bh=d.ri(3,4), cols=['#B84040','#3A6AA8','#3A8A5A','#D8A040','#7A4A9A','#E8E0C8']; d.rect(bx,sy+4-bh,bw,bh,cols[d.ri(0,5)]); bx+=bw+(d.rnd()<.15?1:0)} d.hline(x,x+w-1,sy+4,'#7A5A3A')}};
  shelf(40,0,24,26); shelf(0,0,24,18);
  // rolling ladder
  d.line(44,4,50,26,'#C89060'); d.line(48,4,54,26,'#C89060'); for(let y=7;y<26;y+=4) d.hline(44+(y-4)/3.7,48+(y-4)/3.7,y,'#C89060');
  // floor: carpet + wood
  d.rect(0,26,64,14,'#8A2E2E'); d.dither(0,26,64,1,'#6A2222','#8A2E2E'); d.rect(0,18,24,8,'#7A5A40'); for(let y=20;y<26;y+=3) d.hline(0,23,y,'#6A4A30');
  // reading table with green lamp & book pile
  d.rect(30,28,26,2,'#A8703C'); d.hline(30,55,28,'#C89060'); d.vline(32,30,37,'#6A4020'); d.vline(53,30,37,'#6A4020');
  d.ell(48,24,3,1,'#2A8A4A'); d.rect(46,24,5,1,'#2A8A4A'); d.vline(48,25,27,'#D8A040'); d.ell(48,28,2,0,'#D8A040');
  d.rect(36,25,7,1,'#3A6AA8'); d.rect(37,24,6,1,'#B84040'); d.rect(36,23,6,1,'#E8E0C8'); d.rect(40,27,8,1,'#F8F4E8');
  // open book with reference note
  d.rect(33,27,0,0,'#000');
  // reading glasses on table
  d.ring(41,27,0.8,'#2A2A3A');
};
A['prof:c1']=d=>{ // overseas conference hall, city
  // walls dark blue with window to night city on right
  d.rect(0,0,64,28,'#2A3050');
  d.rect(46,2,16,18,'#141A38'); [[47,8,3],[51,5,3],[55,9,3],[58,6,3]].forEach(([x,y,w])=>{d.rect(x,y,w,20-y,'#283060'); for(let wy=y+1;wy<19;wy+=2) d.px(x+1,wy,'#F8D878')}); d.frame(46,2,16,18,'#8A8AA0'); d.vline(54,2,19,'#8A8AA0');
  d.circ(49,4,1,'#F8F4D8');
  // projector screen with chart
  d.rect(22,2,22,15,'#E8ECF4'); d.frame(22,2,22,15,'#9A9AB0'); d.rect(23,3,20,2,PN);
  [[25,12,2],[28,10,2],[31,8,2],[34,9,2],[37,6,2],[40,5,2]].forEach(([x,y,w],i)=>d.rect(x,y,w,15-y,i===5?'#E84848':'#5A8AE0'));
  d.line(25,11,41,5,'#F8A040');
  d.hline(23,42,15,'#9A9AB0');
  // flags/banner
  d.rect(2,2,10,6,'#E8C048'); d.hline(3,10,4,PN); d.hline(3,8,6,PN);
  // stage
  d.rect(0,22,64,6,'#5A3A2A'); d.hline(0,63,22,'#8A5A3A');
  // podium with mic
  d.rect(36,14,8,8,'#7A4A2A'); d.hline(36,43,14,'#A87040'); d.rect(38,17,4,2,'#E8C048'); d.line(38,13,36,10,'#3A3A48'); d.px(36,9,'#3A3A48');
  // audience rows (empty chairs - no questions)
  d.rect(0,28,64,12,'#3A2A3A');
  for(let r=0;r<2;r++) for(let x=24+r*2;x<64;x+=6){const y=30+r*5; d.rect(x,y,4,3,'#B83848'); d.hline(x,x+3,y,'#D85868'); d.rect(x,y+3,4,1,'#6A1E28')}
  // one raised question-mark sign lying, water bottle
  d.rect(30,19,2,3,'#9AD8F8'); d.px(30,18,'#3A6AA8');
  // spotlight beams
  for(let y=0;y<22;y++) if(y%3===0) d.px(36+y/4,y,'#4A5070');
  // name badge lanyard on floor
  d.rect(58,36,4,3,'#FFFFFF'); d.hline(58,61,36,'#3A6AA8'); d.line(57,36,54,34,'#3A6AA8');
};
A['prof:c2']=d=>{ // antarctic research base, snow
  d.grad(0,0,64,20,['#9AC8F0','#B0D6F4','#C8E4F8','#E0F0FC']);
  // aurora hint
  d.line(0,4,30,2,'#A8F0D8'); d.line(30,2,64,6,'#C8F0E0');
  // ice mountains
  d.poly([[0,20],[8,10],[16,20]],'#D8E8F4'); d.poly([[8,10],[11,14],[8,20],[6,20]],'#B8CCE0');
  d.poly([[40,20],[54,6],[64,16],[64,20]],'#D8E8F4'); d.poly([[54,6],[58,12],[56,20],[52,20]],'#B8CCE0');
  // snow ground
  d.rect(0,20,64,20,'#F4F8FC'); d.dither(0,20,64,1,'#DCE8F4','#F4F8FC'); d.ell(16,32,13,3,'#E8F0F8');
  for(let x=0;x<64;x+=7) d.hline(x,x+3,27+(x%3),'#DCE8F4');
  // research base: orange modules on stilts
  d.rect(30,10,22,9,'#F07830'); d.hline(30,51,10,'#F89858'); d.rect(30,18,22,1,'#B85020');
  d.rect(32,12,3,3,'#9AD8F8'); d.rect(37,12,3,3,'#9AD8F8'); d.rect(46,12,4,6,'#5A4A4A');
  [[31,19],[50,19],[40,19]].forEach(([x,y])=>d.vline(x,y,22,'#5A5A6A'));
  d.rect(30,9,22,1,'#FFFFFF'); // snow on roof
  // antenna & flag
  d.vline(54,2,22,'#5A5A6A'); d.line(54,4,58,2,'#5A5A6A'); d.rect(55,6,5,3,'#E84848'); d.hline(55,59,7,'#FFFFFF');
  // chalkboard on easel
  d.rect(25,22,10,7,'#2A4A3A'); d.frame(25,22,10,7,'#A87040'); d.line(27,26,29,24,'#FFFFFF'); d.hline(30,33,25,'#FFFFFF'); d.px(32,27,'#FFFFFF');
  d.line(26,29,25,33,'#A87040'); d.line(34,29,35,33,'#A87040');
  // penguin students (rows, all present)
  const peng=(x,y)=>d.stamp(x,y,['.kkk.','kkkkk','kwkwk','kwowk','kwwwk','kkwwk','.kww.','.o.o.'],{k:'#1A1A28',w:'#FFFFFF',o:'#F8A030'});
  [[38,24],[45,24],[52,24],[59,24],[41,31],[48,31],[55,31]].forEach(([x,y])=>peng(x,y));
  // tiny 100% raised-flipper sparkle
  sparkle(d,62,23,'#F8E070','#FFFFFF');
  // snowflakes
  [[6,6],[20,12],[36,4],[60,2],[24,18]].forEach(([x,y])=>d.px(x,y,'#FFFFFF'));
};

// ===================== SPINO =====================
const SO='#C8603A', SO2='#8A3A20', SO3='#E8A030', SO4='#F8D0B0';
A['spino:s0']=d=>{ // sail-back paper boat
  const P1='#FFFFFF', P2='#E8E4DC', P3='#C8C0B0', W1='#5AB0E8', W2='#8ACCF0', W3='#3A88C8';
  // sail shaped like spino back (half-disc with spines)
  d.ell(16,13,10,9,SO3); d.rect(5,13,23,9,null);
  for(let i=0;i<7;i++){const a=Math.PI+(i+0.5)*Math.PI/7; d.line(16,13,16+Math.cos(a)*9,13+Math.sin(a)*8,SO)}
  d.ell(16,13,10,9,null===0?0:SO3); // keep
  d.rect(5,14,23,8,null);
  d.hline(6,26,13,SO2);
  for(let i=0;i<7;i++){const a=Math.PI+(i+0.5)*Math.PI/7; d.line(16,13,16+Math.cos(a)*9,13+Math.sin(a)*8,SO)}
  d.px(10,7,'#F8E0A0'); d.px(11,6,'#F8E0A0');
  // mast
  d.vline(16,13,18,P3);
  // folded paper hull
  d.poly([[2,18],[30,18],[25,26],[7,26]],P1); d.poly([[16,18],[30,18],[25,26],[16,26]],P2);
  d.poly([[8,18],[16,14],[24,18]],P2); d.line(8,18,16,14,P3); d.line(16,14,24,18,P3);
  d.line(16,18,16,26,P3); d.hline(3,29,18,P3);
  // ruled lines (folded from notebook) + orange stripe
  d.hline(6,26,21,'#9AC8E8'); d.hline(8,24,24,'#9AC8E8'); d.px(10,22,SO); d.px(11,22,SO);
  d.outline(OL);
  // water ripples
  d.ell(16,29,14,2,W1); d.hline(4,28,28,W2); d.hline(8,12,30,W3); d.hline(20,25,30,W3);
  d.px(1,27,W2); d.px(30,27,W2);
};
A['spino:s1']=d=>{ // king catfish
  const F1='#7A8A6A', F2='#5A6A4A', F3='#A8B890', B='#E8E0C8', K='#1A1A20', Gd='#F8C838', Gd2='#C89818';
  // body (fish facing left)
  d.ell(17,18,12,6,F1); d.ell(18,20,11,4,B); d.ell(17,16,11,3,F1);
  // big flat head
  d.ell(8,18,6,6,F1); d.ell(7,20,5,3,B);
  // tail
  d.poly([[27,16],[31,11],[31,25],[27,20]],F2); d.line(29,13,29,23,F1);
  // fins
  d.poly([[16,12],[20,9],[22,12]],F2); d.poly([[14,23],[17,27],[19,23]],F2); d.poly([[22,23],[24,26],[25,22]],F2);
  // spots / back shade
  d.hline(10,26,13,F2); [[14,15],[19,14],[23,16],[18,17]].forEach(([x,y])=>d.px(x,y,F2));
  d.line(9,15,24,15,F3);
  // mouth & eye
  d.hline(2,7,21,K); d.px(2,20,K); d.circ(7,16,1.2,'#FFFFFF'); d.px(6,16,K); d.px(7,16,K);
  d.outline(OL);
  // whiskers long
  d.line(3,20,0,26,K); d.line(4,21,1,28,K); d.line(3,19,0,16,K); d.line(6,22,5,28,K);
  // crown
  d.stamp(5,6,['g.g.g','ggggg','gGgGg','ggggg'],{g:Gd,G:'#E83848'}); d.hline(5,9,9,Gd2);
  for(let y=4;y<11;y++) for(let x=3;x<12;x++) if(!d.get(x,y)&&[[1,0],[-1,0],[0,1],[0,-1]].some(([a,b])=>[Gd,Gd2,'#E83848'].includes(d.get(x+a,y+b)))) d.px(x,y,OL);
  // water drops (show off splash)
  d.px(27,4,'#5AB0E8'); d.px(28,5,'#5AB0E8'); d.px(24,6,'#5AB0E8'); sparkle(d,15,4,'#F8E070','#FFFFFF');
};
A['spino:s2']=d=>{ // ancient river compass
  const Br1='#C88A3A', Br2='#9A6020', Br3='#E8B060', Pt='#4AA88A', Pt2='#2E7A64', Fc='#F0E4C0', Fc2='#D8C8A0', R='#D83838';
  // bail ring
  d.ring(16,3,2,Br2); d.rect(14,5,5,2,Br1);
  // case
  d.circ(16,17,13,Br2); d.circ(16,17,12,Br1); d.circ(15,16,11,Br3); d.circ(16,17,10.5,Br1);
  // patina spots
  [[6,12],[25,22],[9,25],[24,9]].forEach(([x,y])=>{d.px(x,y,Pt); d.px(x+1,y,Pt2)});
  // face
  d.circ(16,17,9,Fc); d.ring(16,17,8,Fc2);
  // river wave engraving
  d.line(9,21,12,20,'#5A9AD8'); d.line(12,20,15,21,'#5A9AD8'); d.line(15,21,18,20,'#5A9AD8'); d.line(18,20,21,21,'#5A9AD8'); d.line(21,21,23,20,'#5A9AD8');
  // cardinal ticks
  d.px(16,9,Br2); d.px(16,25,Br2); d.px(8,17,Br2); d.px(24,17,Br2);
  // needle shaped like a tooth/claw (spino tooth)
  d.poly([[16,9],[18,16],[16,18],[14,16]],R); d.poly([[16,25],[18,18],[16,17],[14,18]],'#3A3A48');
  d.circ(16,17,1,Br3); d.px(16,17,Br2);
  // shine
  d.line(8,10,11,7,'#FFF0C8');
  d.outline(OL);
  // little fossil fish charm dangling
  d.line(26,6,28,9,Br2); d.stamp(26,10,['.bb.b','bbbbb','.bb.b'],{b:'#E8DCC0'}); d.px(26,11,'#3A3A48');
};
A['spino:c0']=d=>{ // neighborhood pool, underwater
  d.grad(0,0,64,40,['#5ACCF0','#48BCE8','#38ACDE','#2E9CD2','#268CC4']);
  // water surface at top with light wave
  d.rect(0,0,64,3,'#A8E8F8'); for(let x=0;x<64;x+=6) d.ell(x+3,3,3,1,'#A8E8F8');
  // caustic light ripples
  for(let i=0;i<10;i++){const x=d.ri(0,58), y=d.ri(6,22); d.line(x,y,x+3,y+1,'#7ADCF8'); d.line(x+3,y+1,x+5,y,'#7ADCF8')}
  // pool tile floor & back wall
  d.rect(0,30,64,10,'#7ACCE0'); for(let x=0;x<64;x+=4) d.vline(x,30,39,'#5AB0C8'); for(let y=30;y<40;y+=4) d.hline(0,63,y,'#5AB0C8');
  // lane line on floor (dark blue T)
  d.rect(30,34,34,2,'#1E5A9A'); d.rect(60,31,2,8,'#1E5A9A');
  // lane rope floats near surface
  for(let x=0;x<64;x+=3){d.rect(x,5,2,2,(x/3)%2?'#F8F8F8':'#E84848')}
  // swimmers' legs + floaties pushed to right side (moved aside)
  const legs=(x,c)=>{d.rect(x,3,4,5,c); d.vline(x,8,13,'#F8C8A0'); d.vline(x+3,8,12,'#F8C8A0'); d.px(x,14,'#F8C8A0'); d.px(x+3,13,'#F8C8A0')};
  legs(52,'#E84848'); legs(58,'#F8D048');
  d.ring(46,3,3,'#F8A0C8'); d.ring(46,3,2,'#F8A0C8');
  // pool ladder
  d.vline(41,0,24,'#C8D0D8'); d.vline(45,0,24,'#C8D0D8'); for(let y=10;y<24;y+=5) d.hline(41,45,y,'#C8D0D8');
  // dropped goggles on floor, bubbles trail
  d.ring(36,29,1,'#F86A3A'); d.ring(39,29,1,'#F86A3A'); d.hline(37,38,29,'#F86A3A');
  [[24,26],[26,20],[25,14],[27,9]].forEach(([x,y],i)=>d.ring(x,y,i%2?1:1.5,'#C8F0FC'));
  // drain grate
  d.rect(48,36,6,3,'#5A8A9A'); d.hline(48,53,37,'#3A6A7A');
};
A['spino:c1']=d=>{ // mangrove river, forest
  d.grad(0,0,64,18,['#7AB890','#8AC498','#A0D0A8']);
  // canopy
  for(let x=-4;x<68;x+=8){d.circ(x,2,7,'#2E6A3A'); d.circ(x+4,5,5,'#3A7A44')}
  d.rect(0,0,64,2,'#24582E');
  // river water
  d.rect(0,18,64,22,'#4A7A6A'); d.grad(0,18,64,22,['#5A8A72','#4A7A68','#3E6E5E']);
  for(let y=21;y<38;y+=4) for(let x=(y%8)*2;x<64;x+=12) d.hline(x,x+3,y,'#7AA890');
  // mangrove trees with arched roots
  const tree=(x,w)=>{d.rect(x-1,6,3,9,'#5A4030'); for(let i=-2;i<=2;i++){d.line(x,13,x+i*w,20,'#5A4030'); d.line(x+1,13,x+i*w+1,20,'#6A5038')} d.circ(x,6,6,'#3A7A44'); d.circ(x+2,4,4,'#4A8A50')};
  tree(34,3); tree(54,4); tree(4,2);
  // muddy bank left for pet
  d.poly([[0,24],[22,22],[28,30],[28,40],[0,40]],'#8A6A44'); d.dither(0,24,24,1,'#7A5A38','#8A6A44'); d.hline(0,22,24,'#A8885A');
  // crocodile peeking with eyes + snout bumps
  d.ell(44,28,8,1.5,'#3A5A2A'); d.stamp(36,25,['.gg..gg..','gwkg.gwkg','ggggggggg'],{g:'#4A6A34',w:'#F8F0A0',k:'#1A1A10'}); d.px(51,27,'#2A4A1E'); d.px(52,27,'#2A4A1E');
  d.hline(36,52,29,'#7AA890');
  // fishing rod & line + caught fish basket on bank
  d.line(22,14,30,21,'#A87840'); d.line(30,21,32,30,'#E0E0E0'); d.px(32,30,'#E84848');
  d.rect(22,30,5,4,'#C89058'); for(let x=22;x<27;x+=2) d.vline(x,31,33,'#A87040'); d.stamp(22,28,['.ss.','ssss'],{s:'#9AC8D8'});
  // fish jumping
  d.stamp(58,20,['.f..','ffff','.f.f'],{f:'#E8A040'}); d.px(61,21,'#1A1A20');
};
A['spino:c2']=d=>{ // cretaceous sahara river, desert
  d.grad(0,0,64,16,['#F8C870','#F8D488','#F8E0A0','#F8ECC0']);
  d.circ(10,5,4,'#FFF4C0'); d.circ(10,5,3,'#FFFFFF');
  // volcano far right w/ smoke
  d.poly([[40,16],[50,5],[54,5],[64,14],[64,16]],'#A86A4A'); d.poly([[50,5],[54,5],[52,8]],'#E85A2A');
  d.circ(52,2,2,'#C8A898'); d.circ(55,1,1.5,'#D8B8A8');
  // pterosaur
  d.stamp(26,4,['p......p','.pp..pp.','..pppp..','....p...'],{p:'#6A4A3A'});
  // dunes far
  d.ell(18,17,20,3,'#E8B868'); d.ell(56,18,14,2,'#E8B868');
  // wide river across middle
  d.rect(0,17,64,10,'#4AA0C8'); d.hline(0,63,17,'#7AC8E0'); for(let x=2;x<64;x+=7) d.hline(x,x+2,20+(x%3),'#8AD4EC');
  d.rect(0,24,64,3,'#3A88B0');
  // sandy bank foreground
  d.rect(0,27,64,13,'#F0C878'); d.dither(0,27,64,1,'#E8B868','#F0C878'); for(let i=0;i<12;i++) d.px(d.ri(0,63),d.ri(29,39),'#D8A858');
  // ferns & cycads (prehistoric plants)
  const cycad=(x,y)=>{d.rect(x,y,2,6,'#8A6A3A'); for(let i=-2;i<=2;i++) d.line(x+1,y,x+1+i*3,y-3+Math.abs(i),'#4A8A3A'); d.line(x+1,y,x+1,y-4,'#5AA048')};
  cycad(34,24); cycad(60,22); cycad(26,30);
  // jumping fish (fish heaven!)
  [[40,16,1],[48,19,-1],[56,15,1]].forEach(([x,y,k])=>{d.stamp(x,y,k>0?['.ff.f','fffff','.ff.f']:['f.ff.','fffff','f.ff.'],{f:'#E8E0D0'}); d.px(k>0?x+1:x+3,y+1,'#1A1A20'); d.px(x+2,y+3,'#8AD4EC')});
  // big fossil-y footprints in sand, giant bones
  [[40,33],[50,36]].forEach(([x,y])=>d.stamp(x,y,['k.k.k','.kkk.','..k..'],{k:'#C89848'}));
  d.line(54,30,60,31,'#F8F0E0'); d.circ(54,30,1,'#F8F0E0'); d.circ(60,31,1,'#F8F0E0');
};

// ===================== HBADGER =====================
const HN1='#F8C030', HN2='#E09018', HN3='#FFE070', HN4='#B86A10';
const bee=(d,x,y)=>d.stamp(x,y,['.ww.','ykyk','.kk.'],{w:'#E8F4FF',y:'#F8D030',k:'#1A1A20'});
A['hbadger:s0']=d=>{ // swiped honey pot
  const C1='#C87038', C2='#9A4A20', C3='#E89058', Cl='#F4E8D8';
  // pot body
  d.ell(16,20,11,9,C1); d.ell(18,22,9,7,C2); d.ell(14,18,9,7,C1); d.ell(11,16,3,4,C3);
  // neck & rim
  d.rect(9,8,14,4,C1); d.ell(16,8,8,2,C2); d.ell(16,7,7,1,HN4); d.hline(10,22,11,C2);
  // cloth band tied around neck
  d.rect(8,10,16,3,Cl); d.hline(8,23,12,'#D8C8B0'); d.poly([[22,11],[26,14],[24,16]],Cl);
  // honey overflowing + drips
  d.ell(16,7,6,1,HN1); d.hline(12,18,6,HN3);
  [[10,17],[14,20],[20,15],[23,19]].forEach(([x,y])=>{d.rect(x,9,2,y-9,HN1); d.px(x,9,HN3); d.circ(x+0.5,y,1,HN2)});
  d.rect(10,10,2,2,HN1); d.rect(20,10,2,2,HN1);
  // label: HONEY bee icon on pot (scratched)
  d.line(19,22,24,26,'#6A2A10'); d.line(20,21,25,25,'#6A2A10'); d.line(21,20,26,24,'#6A2A10'); // claw marks
  // dipper
  d.line(20,6,27,0,'#A87840'); d.line(21,6,28,0,'#C89860'); d.circ(19,7,1.5,HN2);
  d.outline(OL);
  bee(d,1,3); bee(d,26,9);
  d.stamp(2,26,['b.b','.b.'],{b:'#E85050'}); // sting marks "doesn't care"
};
A['hbadger:s1']=d=>{ // busted padlock
  const S1='#B8C0CC', S2='#8A92A0', S3='#5A6070', S4='#E8ECF4', G1='#E8B840', G2='#B88820', G3='#FFE088';
  // shackle broken: left leg still in, right bent away
  d.rect(6,4,3,12,S2); d.rect(6,4,1,12,S4); d.line(8,4,13,1,S2); d.line(8,5,13,2,S1); d.rect(13,0,3,3,S2);
  // snapped piece flying off right with bend
  d.line(19,5,24,1,S2); d.line(20,5,25,2,S1); d.rect(18,5,3,5,S2); d.px(18,5,S4);
  // break jagged ends
  d.stamp(15,0,['k.','.k','k.'],{k:S3}); d.stamp(23,0,['.k','k.'],{k:S3});
  // body
  d.rect(3,14,22,15,G1); d.rect(3,14,22,2,G3); d.rect(20,15,5,14,G2); d.hline(3,24,28,G2);
  d.vline(4,16,27,G3);
  // keyhole
  d.circ(13,20,2,'#3A2A10'); d.poly([[12,21],[14,21],[15,26],[11,26]],'#3A2A10');
  // dents & claw scratches
  d.line(6,18,9,23,G2); d.line(8,17,11,22,G2); d.line(17,17,19,21,G2); d.circ(21,25,1,'#C89828');
  // rivets
  [[5,16],[22,16],[5,26],[22,26]].forEach(([x,y])=>d.px(x,y,G2));
  d.outline(OL);
  // flying bits + impact star
  d.rect(28,10,2,2,S2); d.px(27,15,S1); d.px(29,18,G2);
  d.stamp(26,3,['.y.','yyy','.y.'],{y:'#F8E070'}); d.stamp(0,8,['k.','.k'],{k:S3});
};
A['hbadger:s2']=d=>{ // tuft of lion mane
  const M1='#E89838', M2='#C87020', M3='#9A4A10', M4='#F8C870', T='#7A4A20', T2='#A86A38';
  // fluffy tuft locks fanning up
  const lock=(x0,y0,x1,y1,w)=>{for(let t=0;t<=1;t+=0.06){const x=x0+(x1-x0)*t+Math.sin(t*5)*1.2, y=y0+(y1-y0)*t; d.circ(x,y,w*(1-t*0.6),M1)}};
  [[16,24,4,4,3],[16,24,10,1,3],[16,24,17,0,3.2],[16,24,24,2,3],[16,24,29,7,2.6],[16,24,2,11,2.6]].forEach(a=>lock(...a));
  // shading strands
  [[16,22,6,6],[16,22,11,3],[16,22,18,3],[16,22,23,5],[16,22,27,9],[16,22,5,12]].forEach(([a,b,c,e])=>{d.line(a,b,c,e,M2)});
  [[14,20,8,8],[17,20,20,6]].forEach(([a,b,c,e])=>d.line(a,b,c,e,M4));
  d.line(16,23,9,15,M3); d.line(16,23,23,14,M3);
  // tied with leather cord band
  d.rect(12,22,9,4,T); d.hline(12,20,22,T2); d.line(13,24,19,24,'#5A3010');
  d.rect(14,26,5,4,M2); d.rect(15,26,3,3,M1); // tuft base
  d.outline(OL);
  // trophy dangling tooth & sparkle
  d.line(20,25,24,29,T); d.poly([[24,28],[27,29],[25,31]],'#F8F0E0'); d.px(25,29,'#D8D0C0');
  sparkle(d,3,26,'#F8E070','#FFFFFF'); d.px(29,20,'#F8E070');
};
A['hbadger:c0']=d=>{ // hillside beehive, forest
  d.grad(0,0,64,20,['#8ACCE8','#A0D8EC','#B8E4F0']);
  // hillside slope (rising to the right)
  d.poly([[0,26],[30,18],[64,8],[64,40],[0,40]],'#6AA848'); d.poly([[0,30],[30,22],[64,13],[64,40],[0,40]],'#5A9A3E');
  d.dither(0,32,64,1,'#4E8A36','#5A9A3E');
  d.rect(0,33,64,7,'#4E8A36');
  // back trees
  [[6,14],[16,12]].forEach(([x,y])=>{d.rect(x,y,2,12,'#6A4A2E'); d.circ(x+1,y-1,5,'#3E8A3A'); d.circ(x+2,y-3,3,'#4E9A44')});
  // big oak with branch & hive
  d.rect(46,4,6,24,'#6A4A2E'); d.vline(47,4,27,'#8A6A44'); d.poly([[46,26],[40,30],[58,30],[52,26]],'#5A3A22');
  d.circ(50,2,10,'#2E7A34'); d.circ(56,4,7,'#3E8A3A'); d.circ(44,4,6,'#3E8A3A'); d.circ(48,0,5,'#4E9A44');
  d.line(46,10,32,12,'#6A4A2E'); d.line(46,11,32,13,'#5A3A22');
  // beehive hanging (striped, damaged chunk)
  d.ell(35,19,5,6,HN2); for(let y=14;y<26;y+=2) d.hline(31,39,y,HN4); d.ell(34,17,2,2,HN3); d.vline(35,13,14,'#5A3A22');
  d.circ(38,23,2,null);
  d.ell(35,24,1,1,'#3A2A10');
  // honey drip & broken comb on ground
  d.vline(37,24,27,HN1); d.px(37,28,HN2);
  d.stamp(32,33,['.hhh.','hHhHh','hhhhh','.hHh.'],{h:HN1,H:HN4}); d.px(31,35,HN2);
  // bees swarm
  [[28,8],[40,6],[24,16],[42,14],[30,26],[56,18],[60,26]].forEach(([x,y])=>bee(d,x,y));
  // dotted flight paths
  d.px(27,12,'#F8F0A0'); d.px(26,13,'#F8F0A0'); d.px(44,10,'#F8F0A0');
  // flowers
  [[58,36],[12,37],[26,38],[62,31]].forEach(([x,y])=>{d.px(x,y,'#F8E060'); d.px(x+1,y,'#FFFFFF')});
};
A['hbadger:c1']=d=>{ // kalahari desert
  d.grad(0,0,64,18,['#F8A858','#F8B868','#F8C880','#F8D898']);
  d.circ(52,6,5,'#FFF0B0'); d.circ(52,6,3,'#FFFFFF');
  // heat shimmer lines
  d.hline(4,14,10,'#F8D898'); d.hline(20,30,14,'#F8E0A8');
  // red dunes
  d.ell(16,20,26,6,'#D86A3A'); d.ell(52,21,22,5,'#C85A30'); d.ell(52,20,20,4,'#E07A44');
  d.rect(0,22,64,18,'#E88A4A'); d.dither(0,22,64,1,'#D87A40','#E88A4A'); for(let y=26;y<40;y+=4) for(let x=(y%8);x<64;x+=10) d.hline(x,x+4,y,'#D87A40');
  // acacia tree (flat top) right
  d.line(46,12,48,28,'#5A3A22'); d.line(47,12,49,28,'#6A4A2E'); d.line(47,18,42,12,'#5A3A22'); d.line(48,16,54,11,'#5A3A22');
  d.ell(47,10,11,2,'#5A7A30'); d.ell(46,9,8,1,'#6A8A3A'); d.ell(50,11,6,1,'#4A6A28');
  // shade under tree with napping spot
  d.ell(48,30,10,2,'#C86A38');
  // knocked-out cobra coiled (X eyes)
  d.ell(36,32,6,2,'#3A3A28'); d.ell(36,31,4,1,'#5A5A3A'); d.ell(36,31,2,1,'#3A3A28');
  d.stamp(28,25,['.ccc.','cxcxc','ccccc','.c.c.'],{c:'#5A5A3A',x:'#F8F0D0'}); d.line(30,29,32,31,'#3A3A28'); d.line(31,29,33,31,'#5A5A3A');
  d.px(30,30,'#E84848');
  // zZ from the nap spot
  d.stamp(54,22,['zzzz','..z.','.z..','zzzz'],{z:'#FFFFFF'}); d.stamp(59,18,['zzz','.z.','zzz'].map((r,i)=>i===1?'.z.':r),{z:'#FFFFFF'});
  // euphorbia cactus & bones
  d.rect(58,30,2,7,'#4A8A3A'); d.rect(56,32,1,3,'#4A8A3A'); d.px(56,31,'#4A8A3A'); d.rect(61,31,1,3,'#4A8A3A'); d.px(61,30,'#4A8A3A');
  d.line(24,36,28,36,'#F8F0E0'); d.px(24,35,'#F8F0E0'); d.px(28,35,'#F8F0E0');
  // footprints
  [[40,37],[44,35]].forEach(([x,y])=>d.stamp(x,y,['k.k','.k.'],{k:'#B85A2A'}));
};
A['hbadger:c2']=d=>{ // heart of lion country, sunset savanna
  d.grad(0,0,64,24,['#5A2A5A','#A03A5A','#E05A48','#F8883A','#F8B048','#F8D068']);
  d.circ(30,22,8,'#F8D860'); d.circ(30,22,6,'#FFF0A0');
  // pride rock silhouette (center)
  d.poly([[18,24],[24,18],[34,17],[44,14],[52,13],[50,16],[44,18],[42,24]],'#3A1E2A'); d.hline(44,52,13,'#5A2E3A');
  // acacia silhouettes
  const ac=(x,y,w)=>{d.vline(x,y,24,'#2A1420'); d.line(x,y+2,x-2,y,'#2A1420'); d.ell(x,y-1,w,1,'#2A1420'); d.ell(x-1,y-2,w-2,1,'#2A1420')};
  ac(8,14,6); ac(58,16,5);
  // savanna grass ground
  d.rect(0,24,64,16,'#C8883A'); d.dither(0,24,64,1,'#A86A30','#C8883A');
  for(let x=0;x<64;x+=3) d.line(x,24,x+1,22,'#A86A30');
  for(let y=28;y<40;y+=3) for(let x=(y%6);x<64;x+=8) d.line(x,y,x+1,y-2,'#B87830');
  // dust cloud of fleeing lions on the right
  [[52,28,5],[58,26,4],[47,30,3],[62,30,3]].forEach(([x,y,r])=>{d.circ(x,y,r,'#E8C08A'); d.px(x-1,y-1,'#F8D8A8')});
  // lion tails sticking out of dust + mane tufts flying
  [[50,23],[56,21],[61,24]].forEach(([x,y])=>{d.line(x,y+3,x+2,y,'#C8783A'); d.rect(x+2,y-1,2,2,'#7A3A1A')});
  d.stamp(44,24,['m.m','.m.'],{m:'#D87A2A'});
  // badger charge streaks & claw prints toward dust
  [[30,34],[35,33],[40,34]].forEach(([x,y])=>d.stamp(x,y,['k.k.k','.kkk.'],{k:'#7A4A1E'}));
  d.hline(24,36,30,'#F8E0A8'); d.hline(26,38,31,'#E8C08A');
  // birds
  d.stamp(14,6,['b.b','.b.'],{b:'#3A1E2A'}); d.stamp(20,4,['b.b','.b.'],{b:'#3A1E2A'});
};
export default A;
