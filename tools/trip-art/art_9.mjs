// art_9: dragon, tiger, cristina, marceline, doodlebob, ironman, sandy, duo, dino, seal
const A={}; export default A;
const spark=(d,x,y,c,w='#FFFFFF')=>{d.px(x,y,w);d.px(x-1,y,c);d.px(x+1,y,c);d.px(x,y-1,c);d.px(x,y+1,c)};
const bigSpark=(d,x,y,c,w='#FFFFFF')=>{d.vline(x,y-2,y+2,c);d.hline(x-2,x+2,y,c);d.px(x,y,w)};
const stars=(d,n,x0,x1,y0,y1,cols)=>{for(let i=0;i<n;i++)d.px(d.ri(x0,x1),d.ri(y0,y1),cols[i%cols.length])};
const cloud=(d,x,y,w,c,s)=>{d.ell(x+w/2,y+2,w/2,2,c);d.ell(x+w/3,y+1,w/4,2,c);d.ell(x+w*0.65,y,w/5,2,c);if(s)d.hline(x+2,x+w-2,y+4,s)};

// ===== DRAGON =====
A['dragon:s0']=d=>{ // shiny gold coin, slight tilt with rim thickness
  const O='#4A2A10',E='#B8761A',E2='#8A5410',G='#F8C838',G2='#E0A020',H='#FFF0A0',W='#FFFFFF';
  d.ell(17,16,11,13,E2); d.ell(16,16,11,13,E); // edge thickness
  d.ell(15,16,11,13,G); d.ell(15,16,9,11,G2); d.ell(15,16,8,10,G);
  // ridged edge marks
  for(let a=0;a<24;a++){const t=a/24*Math.PI*2; d.px(15+Math.cos(t)*10.5,16+Math.sin(t)*12.5,G2)}
  // embossed crown emblem
  d.stamp(8,10,[
   'h...h...h..',
   'eh.ehe.he..',
   'ehheGehhe..',
   'eGGGGGGGe..',
   'eGrGGbGGe..',
   'eGGGGGGGe..',
   '.eeeeeeee..',
   '.hhhhhhh...'],{e:E2,G:H,h:H,r:'#E04848',b:'#4890E0'});
  d.stamp(9,20,['eeeeeee','.......','.eeeee.'],{e:E2});
  d.outline(O);
  // shine
  d.line(8,8,10,6,H); d.px(7,10,W); d.px(8,9,W); d.vline(6,12,16,H);
  bigSpark(d,26,5,'#FFE060'); spark(d,4,26,'#FFE060'); spark(d,28,24,'#FFE060');
};
A['dragon:s1']=d=>{ // volcano roasted marshmallow on a stick
  const O='#3A1E14',S='#A0703A',S2='#6E4A22',M='#FFF4E6',M2='#F0D8B8',T='#E0A040',T2='#B86A20',C='#5A3020',F='#FF7A20',F2='#FFD040';
  d.line(3,30,14,19,S); d.line(4,30,15,19,S); d.line(3,29,13,19,S2); d.px(4,31,S2);
  // marshmallow block, tilted, toasted top
  d.poly([[10,14],[17,6],[27,12],[21,21]],M);
  d.poly([[10,14],[17,6],[27,12],[24,15],[14,12]],T);
  d.poly([[14,9],[17,6],[24,10],[20,11]],T2);
  d.poly([[10,14],[21,21],[21,24],[11,17]],M2);
  d.poly([[21,21],[27,12],[27,15],[21,24]],'#E8C49A');
  d.px(19,8,C); d.px(20,8,C); d.px(22,10,C); d.px(16,9,C); d.px(24,12,'#7A4020');
  // gooey drip
  d.vline(13,17,20,M); d.vline(14,18,22,M); d.px(14,23,M); d.vline(17,19,21,M);
  d.px(12,12,'#FFFFFF'); d.px(13,11,'#FFFFFF');
  d.outline(O);
  // tiny ember flame + sparks (volcano heat)
  d.stamp(24,1,['..f..','.fFf.','fFyFf','.fFf.'],{f:F,F:F2,y:'#FFFFFF'});
  d.px(28,6,F); d.px(29,4,F2); d.px(8,6,F); d.px(6,9,F2);
};
A['dragon:s2']=d=>{ // dragon king's pearl wrapped in flames on a cloud
  const O='#2A1A50',P='#E8E0FF',P2='#B8A8F0',P3='#8878D0',H='#FFFFFF',F='#FF6A30',F2='#FFB030',F3='#FFE070',C='#F8F4FF',C2='#C8C0E8';
  // flames
  d.poly([[6,20],[3,12],[8,15],[7,6],[12,11],[14,2],[17,9],[21,3],[22,11],[27,6],[25,15],[29,13],[26,22]],F);
  d.poly([[8,20],[6,14],[10,16],[10,9],[14,13],[16,5],[18,12],[22,7],[22,14],[26,11],[24,21]],F2);
  d.poly([[10,20],[11,13],[15,14],[17,9],[20,14],[22,12],[22,21]],F3);
  d.circ(16,17,8,P3); d.circ(15,16,7,P2); d.circ(14,15,5,P);
  d.ell(12,12,2,1,H); d.px(11,14,H); d.px(19,21,P);
  // swirl inside
  d.px(17,18,P3); d.px(18,17,P3); d.px(18,16,P3); d.px(16,19,P3);
  // cloud base
  d.ell(9,27,5,2,C); d.ell(16,26,6,3,C); d.ell(23,27,5,2,C); d.hline(6,26,29,C2); d.hline(9,22,28,C);
  d.outline(O);
  spark(d,3,4,'#F8C838'); spark(d,29,3,'#F8C838'); d.px(30,20,'#F8A0C8'); d.px(1,18,'#F8A0C8');
};
A['dragon:c0']=d=>{ // rooftop flight school (city day)
  d.grad(0,0,64,20,['#78B8F0','#8CC4F2','#A2D0F4','#BCDDF6','#D2E8F6']);
  cloud(d,6,3,12,'#FFFFFF'); cloud(d,40,2,9,'#FFFFFF');
  // skyline
  const bl=['#8AA0C0','#7890B4','#9AAECA'];
  [[0,10,8],[7,14,6],[12,6,9],[20,12,7],[26,4,6],[31,9,8],[38,13,5],[42,7,10],[51,11,6],[56,5,8]].forEach(([x,y,w],i)=>{d.rect(x,y,w,20-y,bl[i%3]); for(let yy=y+2;yy<19;yy+=3)for(let xx=x+1;xx<x+w-1;xx+=2)d.px(xx,yy,'#C8D8EC')});
  d.vline(29,0,3,'#7890B4'); d.px(29,0,'#F05050');
  // rooftop parapet
  d.rect(0,19,64,3,'#B0A8A0'); d.hline(0,63,19,'#D0C8C0'); for(let x=2;x<64;x+=8) d.vline(x,19,21,'#98908A');
  // floor
  d.rect(0,22,64,18,'#9C9C9C'); d.dither(0,22,64,2,'#9C9C9C','#8E8E8E');
  for(let x=0;x<64;x+=10) d.vline(x,24,39,'#8C8C8C'); d.hline(0,63,31,'#8C8C8C');
  // runway with dashes and arrow
  d.rect(22,31,42,6,'#5A5E66'); for(let x=25;x<62;x+=6) d.hline(x,x+2,33,'#F8E060');
  d.stamp(52,32,['y..','yy.','yyy','yy.'],{y:'#FFFFFF'});
  // three paw prints then stop
  [[26,27],[31,28],[36,27]].forEach(([x,y])=>d.stamp(x,y,['p.p','.P.'],{p:'#6A6A6A',P:'#6A6A6A'}));
  // water tank
  d.vline(46,14,26,'#5A4030'); d.vline(55,14,26,'#5A4030'); d.line(46,20,55,26,'#5A4030'); d.line(55,20,46,26,'#5A4030');
  d.rect(44,6,14,9,'#C07850'); d.ell(51,6,7,2,'#9A5A38'); for(let x=46;x<58;x+=3) d.vline(x,7,14,'#A86440'); d.hline(44,57,14,'#7A4A30');
  // windsock pole
  d.vline(60,14,30,'#E0E0E0'); d.stamp(61,14,['rw','rw','rr'],{r:'#F05040',w:'#FFFFFF'}); 
  // traffic cones + flag banner
  const cone=(x,y)=>d.stamp(x,y,['.o.','.w.','ooo','ooo'],{o:'#F08030',w:'#FFFFFF'});
  cone(24,26); cone(40,25);
  d.line(24,19,40,19,'#555555'); [26,29,32,35,38].forEach((x,i)=>d.stamp(x,20,['ff','f.'],{f:['#F85050','#F8C838','#58C858','#5090F0','#B070E0'][i]}));
  // small chalk wing doodle
  d.stamp(28,35,['w.....w','ww...ww','.wwwww.'],{w:'#E8E8E8'});
};
A['dragon:c1']=d=>{ // fire volcano island at sunset
  d.grad(0,0,64,22,['#3A2060','#6A2A70','#A83A60','#E05A40','#F88A30','#FFB850']);
  d.circ(14,19,5,'#FFE070'); d.circ(14,19,3,'#FFF4B0');
  d.ell(44,6,10,2,'#7A2A50'); d.ell(8,8,6,1,'#9A3A50');
  // volcano
  d.poly([[26,30],[40,7],[48,7],[64,30]],'#4A2830');
  d.poly([[40,7],[44,7],[34,30],[26,30]],'#3A1E26');
  d.hline(40,48,7,'#FF5020'); d.rect(41,5,6,2,'#FFB030');
  // lava rivers
  d.line(46,8,50,16,'#FF6020'); d.line(50,16,49,22,'#FF6020'); d.line(49,22,53,29,'#FF8030');
  d.line(42,8,40,15,'#FF6020'); d.line(40,15,42,22,'#FF8030');
  // eruption
  d.ell(44,2,4,2,'#FF8030'); d.px(39,1,'#FFD040'); d.px(49,0,'#FFD040'); d.px(51,3,'#FF6020'); d.px(37,3,'#FF6020');
  d.ell(54,1,6,1,'#5A3040'); d.ell(58,3,5,1,'#6A3848');
  // sea
  d.rect(0,22,64,8,'#C04848'); d.hline(0,63,22,'#FFB850');
  for(let x=0;x<26;x+=5) d.hline(x,x+2,24+(x/5)%3,'#F08050');
  d.vline(14,23,28,'#FFD070'); d.vline(13,24,26,'#FFD070');
  // beach (dark volcanic sand)
  d.rect(0,30,64,10,'#6A4038'); d.hline(0,63,30,'#F0A060'); d.dither(0,31,64,1,'#6A4038','#805048');
  for(let i=0;i<14;i++) d.px(d.ri(24,63),d.ri(32,39),'#4E2C28');
  // palm tree right
  d.vline(58,20,33,'#5A3A20'); d.vline(59,22,33,'#6E4828');
  d.line(58,20,52,22,'#2E5A30'); d.line(58,20,63,23,'#2E5A30'); d.line(58,19,54,17,'#3A6A38'); d.line(59,19,63,17,'#3A6A38');
  // smoldering rocks & practice scorch marks
  d.stamp(36,33,['.rr.','rRRr'],{r:'#3A2026',R:'#FF6020'}); d.stamp(46,35,['.r.','rRr'],{r:'#3A2026',R:'#FFA030'});
  d.stamp(27,35,['s.s','.s.'],{s:'#2A1818'});
};
A['dragon:c2']=d=>{ // dragon castle above the clouds, pink-gold
  d.grad(0,0,64,26,['#F0A0C8','#F4B4C8','#F8C8C0','#FCD8B0','#FFE6A8']);
  d.circ(10,6,3,'#FFF6D0');
  // distant cloud layer
  d.ell(52,22,14,3,'#F8E0F0'); d.ell(16,24,16,3,'#F8E0F0');
  // castle on right
  const S='#8878F8',S2='#6858D0',R='#302070',Rf='#F8A0C8';
  d.rect(36,10,22,18,S); d.rect(36,10,6,18,S2);
  for(let x=36;x<58;x+=3) d.rect(x,8,2,2,S);
  d.rect(32,4,7,24,S); d.rect(55,6,7,22,S); d.rect(45,1,6,10,S);
  d.poly([[31,4],[35,-3],[40,4]],R); d.poly([[54,6],[58,0],[63,6]],R); d.poly([[44,1],[48,-5],[52,1]],R);
    d.vline(48,0,0,'#F8C838'); d.px(49,0,'#F8C838');
  // windows
  [[34,8],[34,14],[57,10],[57,16],[47,5]].forEach(([x,y])=>{d.rect(x,y,2,3,'#FFE070');d.px(x,y,'#302070')});
  // gate with treasure spilling out
  d.rect(42,17,10,11,R); d.ell(46.5,17,5,3,R); d.rect(43,18,8,10,'#4A3890');
  d.ell(47,27,8,3,'#F8C838'); d.ell(47,26,5,2,'#FFE070');
  [[42,26],[46,24],[50,25],[53,27],[44,28]].forEach(([x,y])=>d.px(x,y,'#E0A020'));
  d.px(47,24,'#F04070'); d.px(51,26,'#40C0F0'); spark(d,45,23,'#FFF4B0');
  // cloud floor (fluffy front)
  d.rect(0,28,64,12,'#FFFFFF');
  for(let x=-2;x<66;x+=9) d.ell(x+4,28,5,3,'#FFFFFF');
  d.dither(0,34,64,1,'#FFFFFF','#F4E4F4'); d.rect(0,35,64,5,'#F4E4F4'); d.dither(0,38,64,2,'#F4E4F4','#E8D0EC');
  for(let x=4;x<66;x+=12) d.hline(x,x+5,32,'#F8E8F4');
  // treasure trail coins on cloud
  [[30,31],[35,30],[39,33],[56,32],[60,34]].forEach(([x,y])=>{d.px(x,y,'#F8C838');d.px(x+1,y,'#E0A020')});
  // big treasure hoard pile front-right
  d.ell(55,33,9,4,'#E0A020'); d.ell(55,32,7,4,'#F8C838'); d.ell(54,30,4,2,'#FFE070');
  d.stamp(49,27,['..c..','.cCc.','cCCCc','.ccc.'],{c:'#C03050',C:'#F06080'}); // ruby goblet-ish gem
  [[52,31],[57,30],[60,33],[50,34],[56,34]].forEach(([x,y])=>{d.px(x,y,'#B87818')});
  d.px(58,29,'#40C0F0'); d.px(59,29,'#A0F0FF'); bigSpark(d,61,27,'#FFF4B0'); spark(d,53,28,'#FFF4B0');
  // flying little dragons silhouettes far
  d.stamp(20,10,['p.p','.p.'],{p:'#A070B0'}); d.stamp(26,6,['p.p','.p.'],{p:'#A070B0'});
};

// ===== TIGER =====
A['tiger:s0']=d=>{ // plaster paw print cast
  const O='#4A3A30',P='#F4EEE2',P2='#DCD2C0',P3='#BEB09A',I='#A89880',I2='#8A7A64';
  d.ell(16,18,13,11,P3); d.ell(16,16,13,11,P2); d.ell(16,15,12,10,P);
  // paw: main pad + 4 toes, recessed (dark top-left edge, light bottom-right)
  const pad=(cx,cy,rx,ry)=>{d.ell(cx,cy,rx,ry,I2); d.ell(cx+0.5,cy+0.5,rx-0.5,ry-0.5,I); d.px(cx+rx-1,cy+ry-1,'#FFFFFF')};
  pad(16,19,5,4); d.px(15,23,P); d.px(16,23,I2); d.px(17,23,P);
  pad(8,13,2,2); pad(12,9,2,2.5); pad(20,9,2,2.5); pad(24,13,2,2);
  // claw nicks
  d.px(8,9,I2); d.px(12,5,I2); d.px(20,5,I2); d.px(25,9,I2);
  // crack + tiny leaf + date scratch
  d.line(27,18,24,21,P3); d.px(23,22,P3);
  d.stamp(4,20,['.gg','gGg','g..'],{g:'#58A040',G:'#80C860'});
  d.outline(O);
  spark(d,28,4,'#F8D070');
};
A['tiger:s1']=d=>{ // yarn ball from cat cousin
  const O='#4A1E34',Y='#F27AA0',Y2='#D85A84',Y3='#FFB0C8',N='#C0C0C8';
  d.circ(15,15,11,Y2); d.circ(14,14,10,Y);
  // wrapped strand bands
  for(let k=-3;k<=3;k++){ d.line(5+k*2,22+k,22+k*2,4+k,Y2) }
  d.line(6,9,24,21,Y3); d.line(5,12,22,24,Y3); d.line(9,6,26,17,Y3);
  d.ell(11,9,3,1,Y3); d.px(9,8,'#FFFFFF'); d.px(10,8,'#FFFFFF');
  // loose strand curling away
  d.line(24,22,27,26,Y); d.line(27,26,24,29,Y); d.line(24,29,19,29,Y); d.line(19,29,17,27,Y); d.px(16,26,Y);
  // knitting needle
  d.line(2,4,23,25,N); d.px(1,3,'#F8C838'); d.px(2,3,'#F8C838'); d.px(1,4,'#F8C838');
  d.outline(O);
  // cat cousin tag (little paw)
  d.stamp(23,2,['.oooooo','oWWWWWo','oWpWpWo','oWWpWWo','.oooooo'],{o:O,W:'#FFF6E8',p:'#F89020'});
  d.line(23,5,20,8,O);
};
A['tiger:s2']=d=>{ // magpie & tiger folk painting scroll
  const O='#2A1E18',R='#8A4A2A',R2='#5A2E18',Pa='#F2E2BC',Pa2='#E2CC9C',T='#F89020',T2='#C86810',K='#281810',W='#FFF8F0',G='#3E7A48',G2='#2A5A34',B='#3060C0';
  d.rect(3,1,26,3,R); d.hline(3,28,3,R2); d.rect(1,1,2,3,R2); d.rect(29,1,2,3,R2); // top rod
  d.rect(5,4,22,24,Pa); d.frame(5,4,22,24,'#3A6A80'); d.frame(6,5,20,22,Pa2);
  d.rect(3,28,26,3,R); d.hline(3,28,30,R2); d.rect(1,28,2,3,R2); d.rect(29,28,2,3,R2); // bottom rod
  d.line(10,1,16,-2,K); d.line(22,1,16,-2,K); // hanging string (top clipped)
  // pine branch + magpie (top right)
  d.line(14,8,25,8,'#6A4A30'); d.line(14,8,12,10,'#6A4A30');
  d.stamp(14,6,['gg.gg..gg','.ggg.gggg'],{g:G});
  d.stamp(19,6,['..kk.','.kWkk','kkkkB','.kWW.','..k..'],{k:K,W:W,B:B});
  d.px(17,6,'#F04040'); d.px(16,6,'#F04040');
  // tiger (folk-style, big eyes, grin)
  d.stamp(7,12,[
   '.oo.....oo....',
   'oTTo...oTTo...',
   'oTTTooooTTTo..',
   'oTKTTTTTTKTo..',
   'oTWWKTTKWWTo..',
   'oWKWWTTWWKWo..',
   'oTWWTTTTWWTo..',
   'oKTTTWWTTTKoTT',
   '.oTWKKKKWTo.TT',
   '.oTWWWWWWTo.TK',
   'oTTTWWWWTTTTTT',
   'oTKTTTTTTKTKTT',
   'oTTKTTTTKTTTKT',
   '.ooooooooooooo'],{o:O,T:T,K:K,W:W});
  d.px(12,20,'#F04040');
  // red seal stamp bottom-right
  d.rect(22,23,3,3,'#D03030'); d.px(23,24,Pa);
  d.outline(O);
};
A['tiger:c0']=d=>{ // the hill out back, day, roar echo
  d.grad(0,0,64,24,['#68B8F0','#80C4F2','#98D0F4','#B0DCF6','#C8E8F8']);
  cloud(d,4,4,10,'#FFFFFF'); cloud(d,24,2,8,'#FFFFFF');
  d.circ(57,5,3,'#FFF0A0');
  // far hills
  d.ell(10,24,16,5,'#9ACF8A'); d.ell(30,25,12,4,'#8AC07A');
  // the back hill rising to the right
  d.poly([[18,40],[30,24],[40,14],[48,9],[56,10],[64,15],[64,40]],'#5AA048');
  d.poly([[40,14],[48,9],[56,10],[64,15],[64,18],[52,14],[44,16]],'#7ABE5A');
  // trees on hill
  const tree=(x,y)=>{d.vline(x,y,y+3,'#6A4A2A'); d.ell(x,y-1,2,3,'#2E7A3A'); d.px(x-1,y-2,'#4E9A4A')};
  [[33,25],[38,22],[58,16],[61,20],[44,22],[54,24]].forEach(([x,y])=>tree(x,y));
  // stone step trail to the top
  [[28,35],[32,31],[35,28],[39,24],[42,20],[46,16],[49,13]].forEach(([x,y])=>d.hline(x,x+2,y,'#C8C0B0'));
  // little summit rock with flag
  d.ell(51,10,3,2,'#A8A098'); d.vline(52,3,8,'#6A4A2A'); d.stamp(53,3,['oo','oK','oo'],{o:'#F89020',K:'#281810'});
  // echo arcs drifting away to the right getting fainter
  d.stamp(56,2,['w..','.w.','.w.','w..'],{w:'#FFFFFF'}); d.stamp(59,1,['c...','.c..','.c..','.c..','c...'],{c:'#E0F0FA'});
  // foreground grass meadow
  d.rect(0,30,30,10,'#78C058'); d.poly([[0,30],[18,28],[26,30],[30,40],[0,40]],'#78C058');
  d.dither(0,36,40,4,'#78C058','#6AB04C');
  [[4,33],[13,35],[22,32],[26,37]].forEach(([x,y])=>d.stamp(x,y,['g.g','.g.'],{g:'#4E9A3A'}));
  d.stamp(25,31,['.y.','yry','.y.'],{y:'#FFF0A0',r:'#F89020'}); d.stamp(2,29,['.p.','pyp','.p.'],{p:'#F8A0C8',y:'#FFF0A0'});
};
A['tiger:c1']=d=>{ // jungle riverbank at night, hide-and-seek
  d.grad(0,0,64,22,['#0E1A30','#142440','#1A2E4A','#203858']);
  d.circ(36,6,4,'#F4F0C8'); d.circ(37,5,3,'#203858'); d.circ(36,6,0,'#F4F0C8');
  stars(d,12,0,63,0,14,['#C8D8F0','#FFFFFF']);
  // back jungle canopy silhouette
  for(let x=-2;x<66;x+=7) d.ell(x,18+(x%3),5,5,'#14342A'); d.rect(0,20,64,4,'#14342A');
  // river
  d.rect(0,24,64,7,'#1E4A6A'); d.hline(0,63,24,'#2A5E80');
  for(let x=2;x<64;x+=7) d.hline(x,x+3,26+(x%2)*2,'#3A7AA0'); d.hline(34,38,25,'#C8D0B0'); d.hline(35,37,27,'#A8B8A0');
  // muddy bank
  d.rect(0,31,64,9,'#3A3020'); d.hline(0,63,31,'#4E4028'); d.dither(0,37,64,3,'#3A3020','#30281A');
  // big palm left-center top edge & right bushes with tiger-striped reeds
  d.vline(54,6,31,'#4A3424'); d.vline(55,8,31,'#3A2818');
  [[54,6,44,10],[54,6,63,9],[54,6,47,2],[54,6,61,1],[54,6,50,13]].forEach(([a,b,c,e])=>{d.line(a,b,c,e,'#2E6A3A');d.line(a,b+1,c,e+1,'#1E4A2A')});
  d.ell(46,30,8,4,'#1E4A2A'); d.ell(60,29,6,5,'#265A32'); d.ell(30,31,5,2,'#1E4A2A');
  // striped reeds (orange & black) hiding spot
  for(let x=40;x<52;x+=2){ d.vline(x,24,30,x%4?'#F89020':'#281810'); d.px(x,23,'#3A7A3A')}
  // glowing eyes in bush (a friend hiding) + fireflies
  d.px(58,28,'#F8E060'); d.px(61,28,'#F8E060');
  [[20,14],[28,20],[46,17],[12,22],[60,20],[24,11]].forEach(([x,y])=>{d.px(x,y,'#D8FF70')});
  // big leaf foreground right bottom
  d.poly([[52,40],[58,33],[64,32],[64,40]],'#2E6A3A'); d.line(53,39,63,33,'#4E8A4A');
  d.stamp(26,34,['p.p','.P.'],{p:'#2A2214',P:'#2A2214'}); d.stamp(32,36,['p.p','.P.'],{p:'#2A2214',P:'#2A2214'});
};
A['tiger:c2']=d=>{ // Mt Baekdu, crater lake Cheonji, snow
  d.grad(0,0,64,20,['#4A88D0','#5E98DA','#76AAE2','#90BCEA','#B0D0F0']);
  // jagged crater rim peaks
  d.poly([[18,26],[26,10],[30,13],[35,6],[40,11],[44,8],[50,12],[56,7],[64,13],[64,26]],'#7A7A8A');
  d.poly([[26,10],[30,13],[35,6],[40,11],[44,8],[50,12],[56,7],[64,13],[64,16],[54,13],[48,15],[42,12],[36,10],[30,15],[24,15]],'#FFFFFF');
  d.poly([[35,6],[36,10],[33,10]],'#DDE6F0'); d.poly([[56,7],[57,12],[54,12]],'#DDE6F0');
  for(const x of [28,38,47,58]) d.line(x,15,x-2,24,'#5E5E70');
  // the crater lake
  d.ell(43,22,15,3,'#2A6AB8'); d.ell(43,21,13,2,'#3A88D0'); d.hline(36,44,21,'#9CCCF0'); d.hline(48,52,22,'#6AAAE0');
  // snowfield foreground
  d.rect(0,26,64,14,'#F4F8FC'); d.poly([[0,24],[18,23],[30,27],[0,30]],'#F4F8FC');
  d.dither(0,34,64,2,'#F4F8FC','#DCE6F2'); d.rect(0,36,64,4,'#DCE6F2');
  d.ell(48,29,14,2,'#E2EBF6');
  // birch trees right
  const birch=(x,y,h)=>{d.vline(x,y,y+h,'#F8F8F0'); for(let j=y+1;j<y+h;j+=3) d.px(x,j,'#3A3A3A'); d.ell(x,y,2,3,'#3A6A4A'); d.px(x+1,y-2,'#FFFFFF')};
  birch(54,22,12); birch(59,24,11); birch(62,21,13);
  // big tiger paw prints across snow (ancestor trail)
  [[28,33],[34,35],[40,32],[46,34]].forEach(([x,y])=>d.stamp(x,y,['o.o.o','.ooo.','.ooo.'],{o:'#B8C8DC'}));
  // snowfall
  for(let i=0;i<26;i++) d.px(d.ri(0,63),d.ri(0,33),'#FFFFFF');
  // sun glint
  bigSpark(d,8,5,'#FFF6C0');
};

// ===== CRISTINA =====
A['cristina:s0']=d=>{ // on-call pager
  const O='#1A1A22',B='#3A3E48',B2='#2A2E36',B3='#5A606C',L='#9CC088',L2='#7AA068',K='#24341E',R='#E04040';
  d.rect(8,3,10,4,B2); d.rect(10,4,6,2,B3); // belt clip on top
  d.rect(4,7,24,19,B); d.rect(4,22,24,4,B2); d.hline(5,26,7,B3); d.vline(4,8,24,B3);
  d.rect(7,10,18,8,L2); d.rect(8,11,16,6,L);
  // "911" on lcd
  d.stamp(10,12,['kkk..k...k','k.k.kk..kk','kkk..k...k','..k..k...k','kkk.kkk.kkk'],{k:K});
  d.px(22,12,K); d.px(22,13,K); // tiny signal
  // buttons
  d.rect(7,20,4,3,B3); d.rect(14,20,4,3,B3); d.rect(21,20,4,3,R); d.hline(7,10,20,'#7A808C'); d.hline(21,24,20,'#FF7070');
  d.px(26,9,'#60E060');
  d.outline(O);
  // buzz lines
  d.stamp(0,10,['.o','o.','.o','o.'],{o:'#E04040'}); d.stamp(30,10,['o.','.o','o.','.o'],{o:'#E04040'});
  d.stamp(12,28,['ss.ss.ss'],{s:'#9098A8'});
};
A['cristina:s1']=d=>{ // cover-story journal
  const O='#2A0E14',C='#C83040',C2='#9A2030',C3='#E85868',P='#F6F0E4',P2='#D8CCB4',G='#F8C838',H='#F06070';
  d.poly([[6,3],[24,3],[27,6],[27,30],[9,30],[6,27]],P2); // page block
  for(let y=6;y<29;y+=2) d.hline(25,26,y,'#BCAE94');
  d.rect(5,2,20,26,C); d.vline(5,2,27,C2); d.vline(6,2,27,C2); d.hline(5,24,2,C3);
  // title band
  d.rect(8,5,15,4,P); d.stamp(9,6,['kk.k.kk.k.k','k..k.k..kkk'],{k:C2});
  // cover image: heart on dark panel
  d.rect(8,11,15,12,'#2A1A30');
  d.stamp(10,13,['.hh..hh.','hHhhhhhh','hhhhhhhh','hhhhhhhh','.hhhhhh.','..hhhh..','...hh...'],{h:H,H:'#FFFFFF'});
  d.line(18,14,21,12,'#5AA0E0'); d.line(19,15,22,14,'#5AA0E0');
  d.hline(8,22,25,P); d.hline(8,15,26,P2);
  d.outline(O);
  // gold "#1" award sticker
  d.circ(25,23,4,G); d.ring(25,23,4,'#C88A10');
  d.stamp(24,21,['.k','kk','.k','.k','kkk'],{k:'#7A4A08'});
  bigSpark(d,28,4,'#FFE070');
};
A['cristina:s2']=d=>{ // 3D printed anatomical heart on print bed
  const O='#3A0E18',R='#E04858',R2='#B83040',R3='#FF8A90',BL='#5A80D8',BL2='#3A5AB0',P='#F0A0A8';
  // print plate
  d.poly([[3,26],[7,22],[29,22],[25,26]],'#8A9098'); d.rect(3,26,23,2,'#5A6068'); d.poly([[25,26],[29,22],[29,24],[25,28]],'#5A6068');
  // vessels on top
  d.rect(14,3,4,8,R2); d.rect(15,3,2,8,R); d.ell(16,3,2,1,R3); // aorta
  d.line(17,5,22,3,R2); d.line(17,6,22,4,R); d.rect(22,2,3,3,R2); // arch branch
  d.rect(9,4,4,7,BL2); d.rect(10,4,2,7,BL); d.ell(10.5,4,2,1,'#8AAAF0'); // vena cava
  d.rect(19,7,4,5,BL2); d.rect(20,7,2,5,BL);
  // heart body
  d.poly([[8,12],[13,9],[22,9],[26,13],[25,19],[18,25],[14,24],[8,18]],R);
  d.poly([[18,25],[25,19],[26,13],[24,12],[23,18],[17,23]],R2);
  d.ell(12,13,3,2,R3);
  // print layer lines
  for(let y=11;y<25;y+=2) for(let x=7;x<27;x++){const c=d.get(x,y); if(c===R) d.px(x,y,'#D63E50'); else if(c===R2) d.px(x,y,'#A82A38')}
  // coronary vessel
  d.line(18,10,15,15,'#8A1E2E'); d.line(15,15,16,20,'#8A1E2E'); d.line(16,13,20,16,'#8A1E2E');
  d.px(11,12,'#FFFFFF'); d.px(12,12,'#FFFFFF');
  d.outline(O);
  // printer nozzle hint
  d.rect(26,0,4,3,'#5A6068'); d.px(27,3,'#5A6068'); d.px(27,4,'#FFB040');
  spark(d,4,8,'#FFE070'); spark(d,29,14,'#FFE070');
};
A['cristina:c0']=d=>{ // on-call room dance party
  d.rect(0,0,64,40,'#2A2440');
  d.grad(0,0,64,26,['#241E3A','#2A2444','#30284C','#382E56']);
  // disco light beams from ceiling
  const beam=(x0,x1,x2,c)=>d.poly([[x0,0],[x0+1,0],[x2,26],[x1,26]],c);
  beam(30,18,24,'#4A3A6A'); beam(31,36,44,'#3E4A6A'); beam(32,48,58,'#5A3A5E');
  d.circ(31,2,2,'#C8C8E0'); d.px(30,1,'#FFFFFF'); d.px(32,3,'#8A8AB0');
  // string lights
  for(let x=0;x<64;x+=4){d.px(x,4+((x/4)%2),'#5A5070'); d.px(x+2,5,['#F85080','#F8D040','#50E0F0','#90F070'][(x/4)%4])}
  // poster on wall
  d.rect(4,8,9,10,'#E8E0D0'); d.stamp(6,10,['.hh.hh','hhhhhh','.hhhh.','..hh..'],{h:'#E04858'}); d.hline(6,11,16,'#A09888');
  // bunk bed right
  const M='#6A7A90',M2='#4A5A70';
  d.vline(42,8,34,M2); d.vline(62,8,34,M2);
  d.rect(42,13,21,2,M); d.rect(43,10,19,3,'#D8E0F0'); d.rect(48,10,6,2,'#FFFFFF');
  d.rect(42,27,21,2,M); d.rect(43,24,19,3,'#5A7AC8'); d.rect(56,22,6,2,'#FFFFFF');
  d.line(44,15,44,26,M); d.hline(44,46,18,M); d.hline(44,46,22,M); d.vline(46,15,26,M);
  // pager on bed blinking
  d.rect(50,23,3,2,'#24242A'); d.px(51,22,'#F04040');
  // floor
  d.rect(0,26,64,14,'#5A4A62'); d.hline(0,63,26,'#6E5E78');
  for(let y=30;y<40;y+=4) d.hline(0,63,y,'#4E4058');
  // colored light spots on floor
  d.ell(26,33,5,1,'#8A5A9A'); d.ell(44,36,5,1,'#5A7AA0'); d.ell(58,31,3,1,'#9A5A7A');
  // dance-step footprints & music notes
  d.stamp(30,30,['k.','kk','.k'],{k:'#F8D040'}); d.px(29,29,'#F8D040'); 
  d.stamp(36,18,['.kk','.k.','kk.','kk.'],{k:'#F8D040'}); d.stamp(18,20,['kkk','k.k','k.k'],{k:'#50E0F0'}); d.px(17,22,'#50E0F0'); d.px(19,22,'#50E0F0');
  // dropped scrub cap
  d.ell(35,37,3,1,'#50B8A8'); d.px(33,37,'#3A9A8A');
};
A['cristina:c1']=d=>{ // Mayo Clinic, snowy Minnesota
  d.grad(0,0,64,24,['#9AA8BC','#A8B6C8','#B6C2D2','#C6D0DC']);
  // background lower buildings
  d.rect(20,14,14,12,'#B8B0A4'); for(let y=16;y<25;y+=3)for(let x=22;x<33;x+=3) d.rect(x,y,2,1,'#7A8494');
  // main tall hospital tower (modern glass)
  d.rect(36,3,18,23,'#D8D2C6'); d.rect(36,3,2,23,'#BCB4A6');
  for(let y=5;y<25;y+=2) d.hline(39,52,y,'#7A9CBC'); for(let x=42;x<52;x+=4) d.vline(x,5,24,'#D8D2C6');
  d.rect(36,2,18,1,'#FFFFFF');
  // red cross sign on top-right wing
  d.rect(55,12,9,14,'#A8A090'); for(let y=18;y<25;y+=3) d.hline(57,62,y,'#6A7A8C');
  d.rect(56,8,7,7,'#FFFFFF'); d.rect(58,9,3,5,'#D83040'); d.rect(57,10,5,3,'#D83040');
  // entrance
  d.rect(42,21,6,5,'#4A5A6C'); d.hline(41,48,20,'#8A2030');
  // snow roofs
  d.hline(20,33,14,'#FFFFFF'); d.hline(55,63,12,'#FFFFFF');
  // pines
  const pine=(x,y)=>{d.poly([[x,y],[x-3,y+6],[x+3,y+6]],'#2E5A48'); d.poly([[x,y+3],[x-4,y+9],[x+4,y+9]],'#2E5A48'); d.vline(x,y+9,y+10,'#5A4030'); d.px(x,y,'#FFFFFF'); d.hline(x-1,x+1,y+3,'#FFFFFF'); d.hline(x-2,x+2,y+6,'#F0F4F8')};
  pine(29,16); pine(60,17);
  // snow ground
  d.rect(0,26,64,14,'#F2F6FA'); d.dither(0,26,64,1,'#F2F6FA','#E2EAF2'); d.rect(0,34,64,6,'#E6EEF6');
  // cleared path to door
  d.poly([[40,26],[49,26],[56,40],[36,40]],'#C6CCD4'); d.hline(38,52,31,'#D6DCE4');
  // ambulance parked
  d.rect(24,29,10,5,'#FFFFFF'); d.rect(31,30,4,4,'#F4F4F4'); d.rect(32,30,2,2,'#7AA0C8'); d.hline(24,34,32,'#D83040'); d.rect(27,30,2,2,'#D83040');
  d.px(26,34,'#2A2A30'); d.px(33,34,'#2A2A30'); d.px(28,28,'#F04040'); d.px(29,28,'#4080F0');
  // falling snow (heavy)
  for(let i=0;i<40;i++) d.px(d.ri(0,63),d.ri(0,38),'#FFFFFF');
};
A['cristina:c2']=d=>{ // Zurich: Alps, lake, twin-tower church, her institute
  d.grad(0,0,64,18,['#3A8AE0','#58A0EA','#78B6F0','#9ACAF4']);
  // Alps
  d.poly([[0,18],[10,6],[16,11],[24,3],[32,12],[40,5],[50,13],[58,7],[64,11],[64,18]],'#8A98B8');
  d.poly([[10,6],[13,9],[8,9]],'#FFFFFF'); d.poly([[24,3],[28,8],[20,8]],'#FFFFFF'); d.poly([[40,5],[44,9],[36,9]],'#FFFFFF'); d.poly([[58,7],[61,10],[55,10]],'#FFFFFF');
  // lake
  d.rect(0,18,64,5,'#2A78C0'); for(let x=0;x<64;x+=5) d.hline(x,x+2,19+(x%2)*2,'#6AAAE0');
  // Grossmunster twin towers
  const T='#E8DCC4',T2='#C8B898',Dm='#6A8A70';
  d.rect(26,10,5,16,T); d.rect(34,10,5,16,T); d.rect(31,16,3,10,T2);
  d.poly([[25,10],[28.5,4],[32,10]],Dm); d.poly([[33,10],[36.5,4],[40,10]],Dm);
  d.rect(27,13,2,2,'#4A4A5A'); d.rect(35,13,2,2,'#4A4A5A'); d.circ(28.5,18,1,'#F8C838'); d.circ(36.5,18,1,'#F8C838');
  // institute modern building right with heart logo
  d.rect(44,12,20,14,'#F4F4F4'); d.rect(44,12,20,2,'#B0B8C4');
  for(let y=15;y<25;y+=3) d.hline(46,62,y,'#88B0D8');
  d.rect(51,15,6,5,'#FFFFFF'); d.stamp(52,16,['h.h.','hhh.','.h..'],{h:'#E04858'}); d.px(55,16,'#E04858');d.px(54,16,'#E04858');
  d.stamp(51,16,['h.h','hhh','.h.'],{h:'#E04858'});
  // Swiss flag
  d.vline(63,4,12,'#888888'); d.rect(59,4,4,4,'#E03030'); d.px(60,5,'#FFFFFF');d.px(61,5,'#FFFFFF');d.px(60,6,'#FFFFFF');d.px(61,6,'#FFFFFF');
  // old town houses left of church
  d.rect(16,18,10,8,'#E8B080'); d.poly([[15,18],[20,14],[26,18]],'#B05040'); d.rect(18,21,2,2,'#4A5A6A'); d.rect(22,21,2,2,'#4A5A6A');
  // snowy promenade
  d.rect(0,26,64,14,'#EEF4FA'); d.hline(0,63,26,'#C8D4E0'); d.dither(0,36,64,4,'#EEF4FA','#DCE6F0');
  // tram rails
  d.hline(24,63,31,'#9AA8B8'); d.hline(24,63,34,'#9AA8B8'); for(let x=26;x<64;x+=4) d.vline(x,31,34,'#B8C4D0');
  // lamp post
  d.vline(42,22,32,'#3A4048'); d.rect(41,21,3,2,'#F8E080');
  // swan on lake
  d.stamp(8,19,['..w','.ww','www'],{w:'#FFFFFF'});
};

// ===== MARCELINE =====
A['marceline:s0']=d=>{ // drained white strawberry with two fang holes and a drop of red
  const O='#3A2A3A',W='#FAF4F0',W2='#E8DCDC',W3='#CDBEC4',L='#5CB050',L2='#3A8A3A',L3='#88D070',R='#E03048';
  d.poly([[6,11],[26,11],[28,15],[24,24],[16,30],[8,24],[4,15]],W);
  d.ell(16,13,11,4,W);
  d.poly([[17,12],[26,11],[28,15],[24,24],[16,30]],W2);
  d.poly([[22,16],[28,15],[24,24],[18,29]],W3);
  // seeds (pale dimples)
  for(const [x,y] of [[9,15],[13,14],[18,15],[23,15],[7,19],[11,19],[15,19],[20,19],[24,19],[10,23],[14,23],[19,23],[13,27],[17,26]]){d.px(x,y,W3);d.px(x,y+1,'#B8A4AC')}
  // leaves
  d.poly([[5,10],[10,6],[13,9],[16,4],[19,9],[23,6],[27,10],[21,13],[16,11],[11,13]],L);
  d.poly([[10,9],[13,9],[16,5],[19,9],[22,9],[19,11],[13,11]],L3);
  d.hline(11,21,11,L2);
  d.rect(15,1,2,5,L2); d.px(17,1,L2);
  // highlight
  d.vline(7,13,17,'#FFFFFF'); d.vline(8,12,14,'#FFFFFF');
  // fang puncture holes
  d.px(14,18,'#8A2030'); d.px(18,18,'#8A2030'); d.px(14,17,R); d.px(18,17,R);
  d.outline(O);
  // last red drop falling
  d.stamp(26,22,['.r.','rrr','rRr','.r.'],{r:R,R:'#FF8090'});
  d.px(27,21,O);
};
A['marceline:s1']=d=>{ // black parasol, open, lace scallops, curved handle
  const O='#120A18',B='#3A2A48',B2='#2A1E36',B3='#584270',L='#C8B8D8',H='#8A6A3A',H2='#5A4020';
  d.poly([[2,17],[8,7],[16,3],[24,7],[30,17]],B);
  d.ell(16,15,14,10,B); d.rect(0,17,32,15,null);
  for(let x=0;x<32;x++)for(let y=17;y<32;y++)d.clear(x,y);
  // panels shading
  for(const [x0,c] of [[4,B2],[10,B3],[16,B],[22,B2],[28,B2]]) d.line(16,4,x0,17,B3);
  d.poly([[2,17],[8,8],[10,17]],B2); d.poly([[22,17],[24,8],[30,17]],B2);
  d.poly([[13,17],[16,5],[19,17]],B3);
  // scallop lace edge
  for(let x=2;x<=29;x+=4){d.ell(x+1.5,18,2,1,B2); d.px(x+1,19,L); d.px(x+2,19,L)}
  d.hline(2,30,17,L);
  // tip
  d.vline(16,0,3,'#9A9AAA');
  // shaft + J handle
  d.vline(16,18,27,'#4A4050'); d.vline(17,18,27,'#2A2030');
  d.rect(15,26,3,2,H); d.vline(16,28,29,H); d.line(16,30,13,30,H); d.px(12,29,H); d.px(12,28,H); d.px(16,30,H2); d.px(15,30,H2);
  // tiny bat charm
  d.stamp(18,21,['b.b','bbb','.b.'],{b:'#E04060'});
  d.outline(O);
  // shine
  d.line(8,10,12,6,'#7A64A0'); d.px(13,5,'#9A88C0');
};
A['marceline:s2']=d=>{ // axe bass: red double-axe body, long neck, strings
  const O='#1A0A10',R='#C82030',R2='#901828',R3='#F05050',S='#C0C4CC',S2='#8A9098',N='#6A4428',N2='#4A2E18',P='#E8D8B0';
  // neck diagonal up-right
  d.poly([[13,18],[26,3],[28,5],[15,20]],N);
  d.line(14,19,27,4,N2);
  for(let i=0;i<6;i++){const t=i/6; d.px(16+t*10,16-t*11,P)}
  // head with pegs
  d.poly([[24,2],[28,0],[31,3],[28,7]],R2);
  d.px(25,0,S); d.px(29,7,S); d.px(31,1,S); d.px(23,4,S);
  // axe body: blade shape
  d.poly([[1,14],[8,8],[14,13],[18,20],[13,26],[5,30],[2,24],[6,20]],R);
  d.poly([[1,14],[8,8],[10,10],[4,16],[6,20],[2,24]],R3);
  d.poly([[13,26],[18,20],[14,13],[16,18],[12,24]],R2);
  // steel blade edge
  d.line(1,14,8,8,S); d.line(1,15,7,10,S2); d.line(2,24,5,30,S); d.line(3,24,5,28,S2); d.line(1,14,2,24,S);
  // pickups + bridge
  d.rect(8,16,4,2,'#2A2A2A'); d.rect(10,20,4,2,'#2A2A2A'); d.rect(9,23,3,1,S2);
  // strings
  d.line(10,24,27,4,'#E0E0E0');
  // knobs
  d.px(6,24,'#F8C838'); d.px(8,26,'#F8C838');
  d.outline(O);
  d.line(3,13,7,10,'#FFFFFF');
};
A['marceline:c0']=d=>{ // night, cave mouth with cozy house inside on right, bats, moon
  d.grad(0,0,64,24,['#141030','#1E1640','#2A1E52','#36285E']);
  stars(d,20,0,63,0,18,['#FFFFFF','#B8A8F0']);
  d.circ(10,6,4,'#F4ECC8'); d.circ(12,5,3,'#1E1640'); // crescent
  // hills
  d.poly([[0,26],[10,20],[22,23],[30,26]],'#2A3448');
  // big rock mass with cave
  d.poly([[24,40],[26,14],[34,4],[46,0],[64,0],[64,40]],'#4A4058');
  d.poly([[28,40],[29,18],[36,8],[46,4],[64,4],[64,10],[50,8],[40,12]],'#5E5270');
  d.ell(48,26,13,13,'#120C1C'); d.rect(35,26,27,14,'#120C1C');
  d.ell(48,27,11,11,'#1E1628'); d.rect(37,27,23,13,'#1E1628');
  // house inside cave (pink-grey with lit windows)
  d.rect(40,24,16,12,'#8A7898'); d.poly([[38,24],[48,16],[58,24]],'#5A3A5A'); d.hline(38,58,24,'#3A2A3A');
  d.rect(42,27,4,4,'#F8D870'); d.rect(50,27,4,4,'#F8D870'); d.px(44,27,'#FFF0B0'); d.px(52,27,'#FFF0B0');
  d.vline(44,27,30,'#5A3A5A'); d.vline(52,27,30,'#5A3A5A');
  d.rect(46,31,3,5,'#3A2440'); d.px(48,33,'#F8C838');
  d.vline(54,17,21,'#5A4A5A'); // chimney
  // window glow spill
  d.dither(40,36,16,1,'#3A3048','#5A4A40');
  // stalactites
  for(const x of [37,41,47,53,58]) d.poly([[x,15],[x+3,15],[x+1.5,18+(x%3)]],'#4A4058');
  // ground
  d.rect(0,36,64,4,'#2A2438'); d.rect(0,26,30,10,'#30384A'); d.dither(0,34,30,2,'#30384A','#2A2438');
  for(const [x,y] of [[2,30],[26,32],[4,37],[30,38]]) d.px(x,y,'#4A5468');
  // bats
  for(const [x,y] of [[20,6],[27,10],[16,12]]) d.stamp(x,y,['b...b','bb.bb','.bbb.'],{b:'#0A0612'});
  d.px(22,7,'#E04060');
  // axe bass leaning by door
  d.line(58,36,61,28,'#C82030'); d.line(59,36,62,28,'#901828');
};
A['marceline:c1']=d=>{ // forest night gig: stage with amp, spotlight, ghost crowd
  d.grad(0,0,64,26,['#0C1420','#122030','#18283A','#1E3040']);
  stars(d,12,0,63,0,10,['#FFFFFF','#A8C8E8']);
  d.circ(56,5,3,'#E8F0D0');
  // tree silhouettes back
  for(let x=-2;x<66;x+=7){const h=d.ri(8,14); d.poly([[x,22],[x+4,22-h],[x+8,22]],'#0E2A24')}
  for(let x=2;x<66;x+=9){const h=d.ri(6,10); d.poly([[x,24],[x+4,24-h],[x+8,24]],'#143A30')}
  // ground
  d.rect(0,24,64,16,'#1A3020'); d.dither(0,24,64,2,'#1A3020','#143A30');
  // spotlight beam from right
  d.poly([[60,0],[63,0],[52,32],[38,32]],'#2C4050');
  // stage
  d.rect(30,26,34,6,'#5A3A28'); d.hline(30,63,26,'#8A5A38'); d.rect(30,32,34,2,'#3A2418');
  for(let x=32;x<64;x+=6) d.vline(x,27,31,'#4A2E20');
  // amp
  d.rect(52,17,9,9,'#2A2A30'); d.rect(53,18,7,7,'#3A3A42'); d.circ(56.5,21.5,2,'#18181C'); d.px(56,21,'#5A5A60');
  d.hline(53,59,18,'#8A8A90');
  // mic stand
  d.vline(40,18,25,'#9A9AA8'); d.rect(39,16,3,2,'#C0C0C8'); d.line(38,25,42,25,'#9A9AA8');
  // music notes
  d.stamp(44,10,['.nn','.n.','nn.'],{n:'#F8E070'}); d.stamp(48,6,['nnn','n.n','n.n'],{n:'#F09060'});
  // string lights over stage
  for(let x=30;x<64;x+=3) d.px(x,13+Math.round(Math.sin(x/4)),['#F04860','#F8D040','#60D0F0'][x%3]);
  // ghost crowd bottom right
  for(const [x,y] of [[26,33],[34,34],[42,33],[50,34],[58,33]]) {
    d.stamp(x,y,['.ggg.','ggggg','gkgkg','ggggg','g.g.g'],{g:'#D8F0F0',k:'#203040'});
  }
  d.px(29,33,'#A0C8D0'); // raised ghost arm
  // footlights
  for(let x=33;x<64;x+=6) d.px(x,31,'#F8E080');
};
A['marceline:c2']=d=>{ // Nightosphere: red sky, lava pools, spiked chaos castle, scattered fries
  d.grad(0,0,64,25,['#2A0818','#4A0C20','#6E1428','#9A2030','#C83A30']);
  // swirl clouds
  cloud(d,4,3,16,'#5A1028'); cloud(d,36,6,18,'#5A1028');
  // floating rocks
  d.poly([[22,6],[30,5],[28,10],[24,10]],'#3A1A28'); d.px(26,11,'#3A1A28');
  // castle on right: dark spiky
  d.rect(40,8,16,18,'#2A1422'); d.rect(36,14,6,12,'#2A1422'); d.rect(54,12,6,14,'#2A1422');
  for(const [x,y] of [[40,8],[44,8],[48,8],[52,8],[36,14],[54,12],[58,12]]) d.poly([[x,y],[x+2,y-4],[x+3,y]],'#2A1422');
  d.poly([[46,8],[48,0],[50,8]],'#2A1422');
  for(const [x,y] of [[44,12],[50,12],[38,18],[56,16],[47,18]]) {d.rect(x,y,2,3,'#F8B030'); d.px(x,y,'#FFE070')}
  // giant amulet eye on gate
  d.ell(48,22,3,2,'#E8E040'); d.rect(48,21,1,3,'#200810');
  // ground: dark crust
  d.rect(0,24,64,16,'#3A1424'); d.dither(0,24,64,2,'#3A1424','#5A1A28');
  // lava pools + cracks
  d.ell(44,33,10,3,'#F06020'); d.ell(44,33,7,2,'#FFB030'); d.hline(41,47,33,'#FFE070');
  d.line(26,28,34,32,'#F06020'); d.line(58,28,62,38,'#F06020'); d.line(2,38,8,36,'#C83A20');
  // fire spurts
  for(const x of [30,60]) d.stamp(x-2,22,['..f..','.fFf.','fFyFf','fFFFf'],{f:'#F04020',F:'#FFA020',y:'#FFE070'});
  // fries carton prop (the fight)
  d.rect(52,34,5,5,'#E83030'); d.rect(52,34,5,1,'#FFFFFF'); for(const x of [52,54,56]) d.vline(x,31,33,'#F8D048'); d.vline(53,30,33,'#F8D048'); d.vline(55,32,33,'#F8D048');
  d.px(50,38,'#F8D048'); d.px(59,37,'#F8D048'); d.px(48,37,'#F8D048');
  // embers
  for(const [x,y] of [[34,14],[12,10],[20,16],[60,6],[6,18]]) d.px(x,y,'#FF8040');
};

// ===== DOODLEBOB =====
A['doodlebob:s0']=d=>{ // spiral notepad with a scribbled doodle friend
  const O='#2A2A34',P='#FFFDF4',P2='#EDE6D2',L='#A8C8E8',M='#F08080',S='#A0A0AC',K='#3A3A44';
  d.rect(5,5,22,26,P2); d.rect(4,4,22,26,P);
  for(let y=9;y<29;y+=3) d.hline(5,24,y,L);
  d.vline(8,5,29,M);
  // spiral rings
  for(let x=6;x<25;x+=3){d.rect(x,1,1,5,S); d.px(x,1,'#E0E0E8'); d.px(x+1,3,S)}
  // doodle friend: square body, stick limbs, big grin (pencil grey)
  d.frame(12,10,9,8,K); d.px(14,12,K); d.px(18,12,K); d.hline(14,18,15,K); d.px(13,14,K); d.px(19,14,K);
  d.px(15,16,K); d.px(17,16,K);
  d.line(12,13,10,11,K); d.line(20,13,23,10,K); d.px(23,9,K);
  d.vline(14,18,22,K); d.vline(18,18,22,K); d.hline(13,14,23,K); d.hline(18,19,23,K);
  // scribbles + heart
  d.line(10,26,13,24,'#5A80C8'); d.line(13,24,15,27,'#5A80C8'); d.line(15,27,18,24,'#5A80C8');
  d.stamp(20,24,['h.h','hhh','.h.'],{h:'#E04858'});
  // page curl corner
  d.poly([[22,30],[26,26],[26,30]],P2); d.line(22,30,26,26,S);
  d.outline(O);
};
A['doodlebob:s1']=d=>{ // the notebook prison: closed notebook, broken chain, torn hole with scribbles
  const O='#1E1A28',C='#5A4A9A',C2='#443878',C3='#7A6AC0',P='#FFF8E8',P2='#E8DCC4',CH='#B8BCC8',CH2='#7A808C';
  d.rect(6,3,21,27,P2); d.rect(7,4,20,25,P); for(let y=6;y<29;y+=2) d.hline(25,26,y,P2);
  d.rect(4,2,21,27,C); d.rect(4,2,3,27,C2); d.rect(7,2,18,2,C3);
  for(let y=4;y<29;y+=3) d.px(5,y,'#2A2050');
  // label
  d.rect(10,6,12,5,'#F8E8B0'); d.hline(11,20,8,'#A89870');
  // torn hole in cover (escape)
  d.poly([[12,15],[16,13],[21,15],[22,20],[19,24],[13,23],[11,19]],P);
  d.poly([[12,15],[16,13],[17,15],[13,17]],P2);
  // scribble coming out
  d.line(14,18,19,17,'#3A3A44'); d.line(19,17,14,20,'#3A3A44'); d.line(14,20,20,21,'#3A3A44');
  d.line(19,20,26,13,'#3A3A44'); d.line(26,13,29,15,'#3A3A44');
  // broken chain
  for(const [x,y] of [[1,9],[3,11]]) {d.frame(x,y,3,3,CH); d.px(x+1,y+1,null)}
  d.frame(25,22,3,3,CH); d.frame(27,25,3,3,CH2); d.px(29,28,CH);
  d.rect(2,14,4,4,'#C8A030'); d.px(3,15,'#3A3A44'); d.px(3,16,'#3A3A44'); // padlock
  d.vline(2,12,13,CH); d.vline(5,12,13,CH);
  d.outline(O);
  d.stamp(27,5,['.y.','yWy','.y.'],{y:'#F8D848',W:'#FFFFFF'});
};
A['doodlebob:s2']=d=>{ // magic pencil, diagonal, glowing tip drawing a sparkly trail
  const O='#2A1A10',Y='#F8C838',Y2='#E0A020',Y3='#FFE070',W='#F4D4A4',G='#3A3A44',E='#F08098',E2='#C85870',M='#C8C8D0',M2='#9090A0';
  // body from top-right to bottom-left
  d.poly([[23,1],[30,8],[12,26],[5,19]],Y);
  d.poly([[26.5,4.5],[30,8],[12,26],[8.5,22.5]],Y2);
  d.line(7,20,24,3,Y3); d.line(8,20,25,3,Y3);
  // eraser + ferrule
  d.poly([[23,1],[26,-1],[32,5],[30,8]],E); d.line(26,0,31,5,E2);
  d.poly([[21,3],[23,1],[30,8],[28,10]],M); d.line(22,3,29,10,M2); d.line(23,4,28,9,'#E8E8F0');
  // wood cone + lead
  d.poly([[5,19],[12,26],[3,28]],W); d.poly([[3,28],[4,25],[6,27]],G); d.px(2,29,G);
  d.outline(O);
  // magic: sparkly drawn swirl from the tip
  for(const [x,y,c] of [[1,24,'#B888F8'],[0,21,'#88C8F8'],[2,18,'#F888C8'],[5,15,'#B888F8']]) d.px(x,y,c);
  bigSpark(d,7,11,'#F8E070'); spark(d,14,7,'#B888F8'); spark(d,28,22,'#88E0F8'); spark(d,20,28,'#F888C8');
  d.px(25,16,'#F8E070'); d.px(3,9,'#88E0F8');
};
A['doodlebob:c0']=d=>{ // blank paper: ruled lines, a drawn box with crayon scribbles escaping it
  d.rect(0,0,64,40,'#FFFDF6');
  for(let y=4;y<40;y+=4) d.hline(0,63,y,'#D6E6F4');
  d.vline(4,0,39,'#F4B8B8');
  // margin holes
  for(const y of [8,20,32]) {d.circ(1,y,1,'#E8E2D4')}
  // the box (lines)
  d.frame(30,8,20,16,'#3A3A44');
  // scribbles inside and escaping
  const sc=(pts,c)=>{for(let i=0;i+1<pts.length;i++) d.line(...pts[i],...pts[i+1],c)};
  sc([[32,10],[38,20],[40,11],[44,21],[46,12],[48,20]],'#F06060');
  sc([[46,14],[54,10],[51,18],[60,14],[56,24],[62,22]],'#4890E0');
  sc([[34,22],[36,28],[42,26],[40,33],[48,30]],'#48B060');
  sc([[48,4],[52,2],[50,7],[56,4]],'#F8B030');
  // pencil lying bottom right
  d.poly([[40,36],[58,30],[59,32],[41,38]],'#F8C838'); d.line(41,37,58,31,'#E0A020');
  d.poly([[58,30],[61,29],[62,31],[59,32]],'#F08098'); d.poly([[40,36],[41,38],[36,38]],'#F4D4A4'); d.px(36,38,'#3A3A44');
  // eraser crumbs and smudge
  d.rect(26,32,6,3,'#F8C0C8'); d.hline(26,31,34,'#E89AA8');
  for(const [x,y] of [[24,34],[25,36],[33,36]]) d.px(x,y,'#C8C0C0');
  // tiny star doodle top-left area (not in pet zone)
  d.stamp(12,6,['..k..','.k.k.','k...k','.k.k.','..k..'],{k:'#A0A0B0'});
};
A['doodlebob:c1']=d=>{ // inside the pineapple: curved orange walls, porthole, TV, bubbles
  d.rect(0,0,64,40,'#F0A040');
  // wall texture: pineapple diamond pattern
  for(let y=0;y<28;y+=4)for(let x=(y/4)%2?2:0;x<64;x+=4){d.px(x,y,'#D88828'); d.px(x+1,y+1,'#F8B858')}
  // curved ceiling shading
  d.grad(0,0,64,3,['#B87020','#D08830','#E09838']);
  // round porthole window right with sea outside + fish
  d.circ(48,11,7,'#8A6A40'); d.circ(48,11,6,'#C8A060'); d.circ(48,11,5,'#4AA8D8'); d.circ(47,10,3,'#6AC0E8');
  d.stamp(45,11,['.ff.','fffk','.ff.'],{f:'#F87848',k:'#203040'});
  for(const [x,y] of [[46,8],[51,13]]) d.px(x,y,'#FFFFFF');
  // second small porthole
  d.circ(26,9,4,'#8A6A40'); d.circ(26,9,3,'#4AA8D8'); d.px(25,8,'#FFFFFF');
  // floor
  d.rect(0,28,64,12,'#8A5A30'); for(let x=0;x<64;x+=8) d.vline(x,28,39,'#6A4220'); d.hline(0,63,28,'#5A3618');
  // tiki chair / TV
  d.rect(30,18,10,9,'#5A4A3A'); d.rect(31,19,8,6,'#7ACCE8'); d.px(32,20,'#FFFFFF'); d.rect(33,27,4,1,'#3A2A20');
  d.line(33,18,31,15,'#3A3A3A'); d.line(37,18,39,15,'#3A3A3A');
  // round armchair (spongey)
  d.ell(54,26,7,4,'#E8D040'); d.ell(54,24,6,2,'#F8E870'); d.rect(48,27,13,3,'#E8D040');
  for(const [x,y] of [[50,26],[55,28],[58,25]]) d.px(x,y,'#B8A020');
  // anchor wall decor
  d.stamp(12,6,['.a.','aaa','.a.','.a.','a.a'],{a:'#5A5A6A'});
  // fleeing footprints of real SpongeBob (square, yellow) leading out right
  for(const [x,y] of [[42,35],[48,37],[54,35],[60,37]]) d.rect(x,y,2,1,'#E8D040');
  // bubbles
  for(const [x,y] of [[59,3],[22,15],[40,3],[3,8]]) d.stamp(x,y,['.w.','w.w','.w.'],{w:'#FFFFFF'});
};
A['doodlebob:c2']=d=>{ // endless doodle land: paper world, flat outlined candy-pastel doodles
  const K='#3A3A48';
  d.rect(0,0,64,40,'#FFF6FA');
  d.dither(0,0,64,6,'#FFF6FA','#F8E8F4');
  // hand-drawn rolling ground line
  for(let x=0;x<64;x++){const y=24+Math.round(Math.sin(x/7)*1.5); d.vline(x,y,39,'#F0FAF0'); d.px(x,y,K)}
  // crayon grass scribble band
  for(let x=0;x<64;x+=2){d.px(x,27+(x%4?0:1),'#8ADA8A')}
  // sun with scribble rays
  d.circ(54,7,4,'#FFE878'); d.ring(54,7,4,K);
  for(const [a,b] of [[54,0],[61,7],[59,2],[49,2],[59,12],[47,7]]) d.line(54+(a-54)*.75,7+(b-7)*.75,a,b,K);
  d.px(53,6,K); d.px(55,6,K); d.hline(53,55,8,K);
  // flat doodle house
  d.rect(30,14,12,11,'#B8E0FF'); d.frame(30,14,12,11,K); d.poly([[29,14],[36,7],[43,14]],'#FFB0C8');
  d.line(29,14,36,7,K); d.line(36,7,43,14,K); d.frame(34,18,4,7,K); d.frame(39,16,2,2,K);
  // lollipop tree
  d.vline(23,16,25,K); d.circ(23,13,4,'#C8A8F8'); d.ring(23,13,4,K); d.line(21,12,25,14,'#F8F8FF');
  // doodle cloud
  d.ell(18,7,6,2,'#FFFFFF'); d.ell(15,5,3,2,'#FFFFFF'); d.ell(20,5,3,2,'#FFFFFF');
  {const pts=[]; for(let y=1;y<12;y++)for(let x=8;x<29;x++) if(d.get(x,y)!=='#FFFFFF'&&[[1,0],[-1,0],[0,1],[0,-1]].some(([a,b])=>d.get(x+a,y+b)==='#FFFFFF')) pts.push([x,y]); pts.forEach(([x,y])=>d.px(x,y,K));}
  // doodle rainbow arch
  [['#F87898',9],['#F8C838',8],['#88D888',7],['#88B8F8',6]].forEach(([c,r])=>{for(let a=0;a<=Math.PI;a+=0.05) d.px(54+Math.cos(a)*r,24-Math.sin(a)*r,c)});
  for(let a=0;a<=Math.PI;a+=0.05){d.px(54+Math.cos(a)*10,24-Math.sin(a)*10,K)}
  // flat doodle friends (stick buddies) on right
  d.frame(56,27,5,5,'#E89848'); d.px(57,28,K); d.px(59,28,K); d.hline(57,59,30,K);
  d.vline(57,32,34,K); d.vline(59,32,34,K);
  d.frame(44,29,4,4,'#68A8E8'); d.px(45,30,K); d.px(46,30,K); d.vline(45,33,35,K); d.vline(46,33,35,K);
  // scribble flowers and stars
  for(const [x,y,c] of [[30,33,'#F87898'],[38,36,'#F8C838'],[26,30,'#88B8F8']]) d.stamp(x-1,y-1,['.c.','ckc','.c.'],{c,k:K});
  d.stamp(4,3,['..k..','kkkkk','.k.k.'],{k:'#F8B848'});
  // candy dots
  for(const [x,y,c] of [[8,12,'#F8A8C8'],[26,18,'#A8E8C8'],[62,20,'#F8D878']]) d.px(x,y,c);
};

// ===== IRON MAN =====
A['ironman:s0']=d=>{ // stacked cheeseburger with sesame bun, melted cheese drip, toothpick flag
  const O='#3A1E10',B='#E8A048',B2='#C87828',B3='#F8C878',S='#FFF4D8',L='#68C048',L2='#3A9030',C='#F8C830',C2='#E0A010',M='#7A4020',M2='#5A2A12',T='#E84838';
  // top bun dome
  d.ell(16,11,13,7,B); d.rect(3,11,27,4,B); d.ell(16,13,13,3,B2); d.rect(3,12,27,3,B);
  d.ell(13,8,7,3,B3); for(const [x,y] of [[10,7],[14,6],[18,7],[22,9],[12,10],[17,10],[8,10],[25,11]]) {d.px(x,y,S)}
  // lettuce
  for(let x=2;x<30;x++) d.vline(x,15,16+(x%3===0?1:0),L); d.hline(2,29,15,L2);
  // tomato
  d.rect(4,17,24,2,T); d.px(8,17,'#FF8070'); d.px(20,17,'#FF8070');
  // cheese with drips
  d.rect(3,19,26,2,C); d.poly([[7,21],[10,21],[8.5,24]],C); d.poly([[19,21],[23,21],[21,25]],C); d.hline(3,28,20,C2);
  // patty
  d.rect(3,21,26,4,M); d.hline(3,28,24,M2); for(const [x,y] of [[6,22],[13,23],[25,22],[16,22]]) d.px(x,y,M2);
  d.poly([[7,21],[10,21],[8.5,24]],C); d.poly([[19,21],[23,21],[21,25]],C); d.px(21,25,C2);
  // bottom bun
  d.rect(4,25,24,4,B); d.rect(5,28,22,1,B2); d.hline(5,26,25,B3);
  d.outline(O);
  // toothpick with tiny red-gold flag
  d.vline(16,0,4,'#E8D0A0'); d.rect(17,0,4,3,'#C82828'); d.px(18,1,'#F8C838'); d.px(19,1,'#F8C838');
};
A['ironman:s1']=d=>{ // pink donut box, lid open, giant donut on top of the lid, donuts inside
  const O='#3A1A28',P='#F8B8CC',P2='#E890A8',P3='#FFE0EA',K='#C87838',K2='#A05820',I='#F06898',I2='#FFFFFF',CH='#6A3A20';
  // lid open back
  d.poly([[4,16],[28,16],[26,8],[6,8]],P2); d.poly([[6,8],[26,8],[25,10],[7,10]],P3);
  // giant donut on lid top
  d.ell(16,6,8,5,K); d.ell(16,5,7,4,'#8A5A3A'); d.ell(16,5,7,3.5,CH); d.ell(16,5,3,1.5,K2);
  for(const [x,y,c] of [[11,4,'#F8E048'],[20,3,'#60C8F0'],[13,7,'#F06898'],[21,6,'#78D878'],[17,2,'#FFFFFF']]) d.px(x,y,c);
  d.ell(16,5,2,1,P2);
  // box body
  d.rect(3,16,26,13,P); d.rect(3,16,26,2,P2); d.rect(3,26,26,3,P2);
  // donuts visible inside the front (peeking over)
  for(const [x,c] of [[8,I],[16,'#F8E048'],[24,'#7A4A28']]) {d.ell(x,16,4,2,K); d.ell(x,15,3,1,c); d.px(x,15,P2); d.px(x-1,14,I2)}
  // front label: donut symbol stripe
  d.rect(9,20,14,5,'#FFFFFF'); d.ell(16,22,3,2,K); d.ell(16,22,3,1,I); d.hline(15,17,22,'#FFFFFF'); d.hline(10,12,22,I); d.hline(20,22,22,I);
  d.outline(O);
};
A['ironman:s2']=d=>{ // arc reactor in a glass display frame on stand
  const O='#1A1A2A',F='#3A3E4A',F2='#5A606E',G='#D4E8F0',C='#7AE8FF',C2='#C8FAFF',C3='#3AA8D8',M='#A8B0BC',M2='#6E7684',GD='#D8B048';
  // frame/case
  d.rect(3,2,26,26,F); d.rect(4,3,24,24,F2); d.rect(6,5,20,20,'#2A3442');
  // reactor ring
  d.circ(16,14,8,M2); d.circ(16,14,7,M);
  for(let a=0;a<10;a++){const t=a/10*Math.PI*2; d.px(16+Math.cos(t)*6,14+Math.sin(t)*6,'#E8ECF0'); d.px(16+Math.cos(t)*7,14+Math.sin(t)*7,M2)}
  d.circ(16,14,5,C3); d.circ(16,14,4,C); d.circ(16,14,2,C2); d.px(16,14,'#FFFFFF');
  // tri-segment hint
  d.line(16,9,16,11,C3); d.line(12,16,14,15,C3); d.line(20,16,18,15,C3);
  // gold plaque
  d.rect(9,23,14,2,GD); d.hline(10,21,24,'#B08830'); d.px(12,23,'#7A5A20'); d.px(15,23,'#7A5A20'); d.px(18,23,'#7A5A20');
  // glass reflection diagonal
  d.line(7,10,11,6,G); d.line(7,11,12,6,'#9AB8C8');
  // stand
  d.rect(6,28,20,3,'#4A3A2A'); d.hline(6,25,28,'#6A5038');
  d.outline(O);
  // glow
  for(const [x,y] of [[2,14],[30,14],[16,0]]) d.px(x,y,C);
};
A['ironman:c0']=d=>{ // Malibu garage: concrete, hotrod, workbench, robot arm, hole in ceiling with sky
  d.rect(0,0,64,40,'#4A4E58');
  d.grad(0,0,64,6,['#2E323A','#383C46']);
  // ceiling hole with sky
  d.poly([[38,0],[50,0],[48,5],[44,7],[40,5]],'#8ACCF0'); d.px(43,2,'#FFFFFF'); d.px(46,3,'#FFFFFF');
  for(const [x,y] of [[38,1],[39,4],[49,2],[47,6],[44,8],[41,7],[50,5]]) d.px(x,y,'#6A6E78');
  // debris falling
  for(const [x,y] of [[42,10],[45,13],[47,9]]) d.px(x,y,'#8A8E98');
  // back wall glass panels
  for(let x=24;x<64;x+=10){d.rect(x,7,9,13,'#2A3A4E'); d.line(x+1,18,x+6,8,'#3E5268')}
  // HUD screens
  d.rect(26,9,7,5,'#3AA8D8'); d.hline(27,31,10,'#C8FAFF'); d.hline(27,30,12,'#C8FAFF');
  // floor
  d.rect(0,22,64,18,'#9AA0AA'); d.hline(0,63,22,'#6E7480'); d.dither(0,22,64,1,'#9AA0AA','#B4BAC4');
  for(let x=0;x<64;x+=16) d.vline(x,23,39,'#8A909A');
  d.ell(44,36,14,1,'#B4BAC4');
  // red hot rod
  d.poly([[34,30],[37,25],[48,24],[53,27],[61,28],[62,32],[34,33]],'#C82828'); d.poly([[39,25],[47,25],[49,28],[38,28]],'#2A3A4E');
  d.hline(36,61,30,'#F05050'); d.circ(39,33,2,'#1E1E24'); d.circ(56,33,2,'#1E1E24'); d.px(39,33,'#9A9AA8'); d.px(56,33,'#9A9AA8');
  // workbench with gauntlet
  d.rect(24,18,12,2,'#7A5A38'); d.vline(25,20,26,'#5A4028'); d.vline(34,20,26,'#5A4028');
  d.rect(28,15,5,3,'#C82828'); d.rect(28,15,2,3,'#F8C838'); d.px(32,16,'#C8FAFF');
  // DUM-E robot arm right
  d.rect(58,20,5,4,'#E0C040'); d.line(60,20,57,13,'#5A5E68'); d.line(61,20,58,13,'#5A5E68'); d.line(57,13,52,12,'#5A5E68');
  d.stamp(50,11,['cc','c.','cc'],{c:'#3A3E46'}); d.px(49,13,'#F0F0F0');
  // hanging lamp
  d.vline(14,0,3,'#2A2A30'); d.rect(12,4,5,2,'#F8E080'); d.dither(11,6,7,2,'#4A4E58','#5E6270');
};
A['ironman:c1']=d=>{ // dusk city from Stark Tower: skyline, penthouse pad, glowing arc logo
  d.grad(0,0,64,28,['#2A2A60','#4A3A80','#8A4A88','#D86A70','#F8A060','#F8C878']);
  stars(d,8,0,63,0,6,['#FFFFFF']);
  // distant skyline band
  for(let x=0;x<64;x+=4){const h=d.ri(4,10); d.rect(x,26-h,4,h,'#4A3A68')}
  for(let x=1;x<64;x+=6){for(let y=20;y<26;y+=2) if(d.rnd()<.5) d.px(x+1,y,'#F8D878')}
  // Stark Tower right: tall with angled top
  d.poly([[46,40],[46,8],[52,2],[60,4],[60,40]],'#5A6A80');
  d.poly([[53,2],[60,4],[60,40],[54,40]],'#3E4A5E');
  for(let y=10;y<40;y+=3) d.hline(47,59,y,'#8AB0D0');
  d.circ(53,9,2,'#7AE8FF'); d.px(53,9,'#FFFFFF');
  // landing pad
  d.rect(36,14,12,2,'#9AA4B4'); d.hline(36,47,16,'#5A6474'); d.ring(41,13,1,'#F8C838');
  // penthouse balcony floor (foreground)
  d.rect(0,28,64,12,'#3A3E4A'); d.hline(0,63,28,'#8A93A4');
  d.rect(0,29,64,1,'#5A6070');
  for(let x=0;x<64;x+=8) d.rect(x,32,8,8,(x/8)%2?'#40444F':'#363A44');
  // glass railing
  d.hline(0,45,25,'#A8C8E0'); for(let x=0;x<46;x+=9) d.vline(x,25,28,'#A8C8E0');
  // drink on a little table
  d.rect(32,26,6,1,'#8A6A4A'); d.vline(35,27,30,'#6A4A2A'); d.rect(33,23,2,3,'#C8E8F0'); d.px(33,24,'#F8A060');
  // repulsor glow pucks on floor
  d.px(26,36,'#7AE8FF'); d.px(40,34,'#7AE8FF');
};
A['ironman:c2']=d=>{ // space: swirling wormhole, missile with flame trail, alien ships, earth edge
  d.rect(0,0,64,40,'#0A0818');
  stars(d,40,0,63,0,39,['#FFFFFF','#A8B8F8','#F8E0A0']);
  // nebula band
  d.dither(0,10,64,4,'#0A0818','#1E1440');
  // wormhole swirl right
  d.circ(46,18,15,'#1E2A6A'); d.circ(46,18,12,'#2A4AA8'); d.circ(46,18,9,'#4A8AE0'); d.circ(46,18,6,'#88D0F8'); d.circ(46,18,3,'#E8F8FF'); d.circ(46,18,1,'#FFFFFF');
  for(let a=0;a<6;a++){for(let r=4;r<15;r++){const t=a/6*Math.PI*2+r*0.25; d.px(46+Math.cos(t)*r,18+Math.sin(t)*r,r>9?'#4A8AE0':'#C8F0FF')}}
  // earth curve bottom
  d.ell(10,44,30,8,'#2A6AC0'); d.ell(10,44,30,7,'#3A8AD8'); for(const [x,y] of [[0,38],[6,37],[18,38],[28,38]]) d.rect(x,y,3,1,'#48A858');
  for(let x=0;x<40;x++){const y=Math.round(44-Math.sqrt(Math.max(0,1-((x-10)/30.4)**2))*8.4); d.px(x,y,'#A8D8FF')}
  // missile heading into wormhole with red/gold flying trail
  d.line(14,22,34,12,'#F8A040'); d.line(14,23,34,13,'#F86030'); d.line(10,24,28,15,'#F8E0A0');
  d.poly([[30,13],[36,10],[38,11],[32,15]],'#B8BCC8'); d.px(38,10,'#E04040'); d.px(37,11,'#E04040'); d.line(31,14,36,11,'#6A6E78');
  // chitauri ships
  for(const [x,y] of [[22,5],[58,36],[30,30]]) d.stamp(x,y,['g...g','ggggg','.gpg.'],{g:'#6A6A58',p:'#A8F0A0'});
  // small planet
  d.circ(6,6,3,'#C878A8'); d.circ(5,5,1,'#E8A8C8');
};

// ===== SANDY =====
A['sandy:s0']=d=>{ // plump Texas acorn with textured cap and stem, little star mark
  const O='#3A2010',N='#C8843A',N2='#A06428',N3='#E8A85A',H='#FFE0A8',C='#8A5A30',C2='#6A4020',C3='#A87440';
  d.ell(16,20,10,10,N); d.poly([[10,26],[16,31],[22,26]],N);
  d.ell(19,22,7,8,N2); d.ell(15,19,8,8,N); d.ell(13,17,4,5,N3);
  d.px(16,31,N2); d.px(16,30,N2);
  // cap
  d.ell(16,11,13,6,C); d.rect(3,11,27,3,C); d.hline(3,29,14,C2);
  // cap crosshatch texture
  for(let y=7;y<14;y+=2)for(let x=4+(y%4?1:0);x<29;x+=3) d.px(x,y,C2);
  for(let y=8;y<14;y+=2)for(let x=5;x<29;x+=3) d.px(x,y,C3);
  // stem
  d.rect(15,1,3,5,C2); d.px(18,1,C2); d.px(19,0,C2);
  // tiny Texas lone-star mark
  d.stamp(18,20,['..s..','sssss','.sss.','.s.s.'],{s:'#F8E8C0'});
  d.outline(O);
  d.px(11,16,H); d.px(10,17,H); d.px(10,18,H); d.px(8,9,'#C89868');
};
A['sandy:s1']=d=>{ // tan cowboy hat with band and star, brim curled up at sides
  const O='#3A2410',T='#D8A868',T2='#B88848',T3='#F0C890',B='#8A3A2A',B2='#6A2A1E',S='#F8D040';
  // brim
  d.ell(16,22,15,5,T2); d.ell(16,21,14,4,T);
  d.poly([[0,16],[3,20],[6,22],[2,22]],T); d.poly([[31,16],[28,20],[25,22],[29,22]],T);
  d.px(0,15,T); d.px(31,15,T);
  // crown
  d.poly([[8,20],[7,10],[10,5],[14,7],[16,6],[18,7],[22,5],[25,10],[24,20]],T);
  d.poly([[16,6],[18,7],[22,5],[25,10],[24,20],[18,20]],T2);
  d.line(16,7,16,12,T2); // pinch crease
  d.poly([[9,10],[10,6],[13,8],[11,14]],T3);
  // band
  d.rect(8,16,17,3,B); d.hline(8,24,18,B2);
  d.stamp(14,15,['..s..','sssss','.sss.','.s.s.'],{s:S});
  // brim highlight
  d.hline(5,13,24,T3); d.line(1,17,4,21,T3);
  d.outline(O);
  d.px(29,3,'#FFFFFF'); spark(d,28,4,'#F8E070');
};
A['sandy:s2']=d=>{ // karate champion belt: black belt tied knot with gold medallion and red stripes
  const O='#0E0E14',K='#2A2A34',K2='#1A1A22',K3='#4A4A58',G='#F8C838',G2='#C89020',G3='#FFF0A0',R='#E03838';
  // belt loop band (curved)
  d.poly([[0,12],[10,14],[22,14],[32,12],[32,17],[22,19],[10,19],[0,17]],K);
  d.line(0,13,32,13,K3); d.hline(10,22,14,K3); d.line(0,17,10,19,K2); d.line(22,19,32,17,K2);
  // red champion stripes near ends
  d.vline(3,13,17,R); d.vline(28,13,17,R);
  // knot + tails hanging
  d.rect(13,13,6,7,K3); d.rect(14,14,4,5,K);
  d.poly([[13,19],[16,20],[9,30],[6,29]],K); d.poly([[19,19],[16,20],[23,30],[26,29]],K);
  d.line(7,29,13,20,K3); d.line(25,29,19,20,K3);
  d.hline(6,9,28,R); d.hline(23,26,28,R);
  // medallion over the knot
  d.circ(16,8,6,G2); d.circ(16,8,5,G); d.circ(15,7,2,G3);
  d.stamp(14,6,['.s...','sssss','.sss.','.s.s.'],{s:G2});
  d.poly([[12,12],[14,14],[11,15]],R); d.poly([[20,12],[18,14],[21,15]],R);
  d.outline(O);
  bigSpark(d,26,3,'#F8E070'); spark(d,5,5,'#F8E070');
};
A['sandy:c0']=d=>{ // inside the Treedome: glass dome curve, ocean beyond, oak tree, grass, helmet on lawn
  // ocean beyond glass
  d.grad(0,0,64,28,['#1A4A8A','#2060A0','#2A78B8','#3A90C8']);
  for(const [x,y] of [[6,4],[20,10],[60,20],[40,3]]) d.stamp(x,y,['.w.','w.w','.w.'],{w:'#A8D8F0'});
  // inside dome air (lighter, greenish tint) - large dome
  d.ell(36,40,40,36,'#9ADCF0'); d.ell(36,40,38,34,'#B8E8F4');
  // dome glass ribs
  for(const a of [0.7,1.2,1.9,2.4]){for(let t=0.55;t<1;t+=0.02) d.px(36+Math.cos(a)*38*t, 40-Math.sin(a)*34*t, '#D0F0FA')}
  for(let a=0;a<=Math.PI;a+=0.01) d.px(36+Math.cos(a)*39,40-Math.sin(a)*35,'#E8F8FF');
  d.line(14,22,20,12,'#E8F8FF'); d.line(16,22,21,14,'#D8F0FA');
  // oak tree right of center
  d.rect(42,14,5,14,'#7A4A28'); d.rect(42,14,2,14,'#9A6038'); d.line(46,18,52,14,'#7A4A28');
  d.circ(44,10,9,'#3A9038'); d.circ(52,12,6,'#3A9038'); d.circ(36,13,5,'#3A9038');
  d.circ(42,8,6,'#58B048'); d.circ(51,10,3,'#58B048'); d.circ(40,6,2,'#88D068');
  for(const [x,y] of [[38,12],[48,8],[54,14],[44,15]]) d.px(x,y,'#C87838'); // acorns
  // tree-house door + window
  d.rect(43,20,3,4,'#4A2A14'); d.px(45,22,'#F8C838');
  // grass
  d.rect(0,28,64,12,'#68B848'); d.hline(0,63,28,'#88D060');
  for(let x=1;x<64;x+=3) d.px(x,27+(x%2),'#88D060');
  d.dither(0,36,64,4,'#68B848','#58A040');
  // picnic table + helmet on the lawn
  d.rect(50,30,12,2,'#B87840'); d.vline(51,32,35,'#8A5A30'); d.vline(60,32,35,'#8A5A30');
  d.circ(32,31,3,'#E0F4FF'); d.ring(32,31,3,'#A8C8D8'); d.rect(29,33,7,2,'#F0F0F0'); d.px(31,30,'#FFFFFF'); d.circ(34,28,0,'#F87898');
  // flowers
  for(const [x,c] of [[26,'#F8E048'],[38,'#F87898'],[56,'#FFFFFF']]) {d.px(x,36,c); d.px(x,37,'#3A8030')}
  // hose sprinkler hint: water drops
  d.px(48,26,'#B8E8F4'); d.px(49,25,'#B8E8F4');
};
A['sandy:c1']=d=>{ // Texas desert: wide sunny sky, mesa, saguaro cacti, windmill, ranch house with Ma
  d.grad(0,0,64,22,['#4AA8E8','#68B8EC','#88C8F0','#B0DAF4','#F4E2B0']);
  d.circ(54,6,4,'#FFF4B0'); d.circ(54,6,3,'#FFFFFF');
  // mesas
  d.poly([[18,22],[22,13],[36,13],[40,22]],'#C8643A'); d.poly([[22,13],[36,13],[36,15],[22,15]],'#E08048');
  d.poly([[44,22],[47,16],[58,16],[62,22]],'#B85A34'); d.hline(47,58,16,'#D87444');
  d.hline(20,38,18,'#A85030');
  // desert ground
  d.rect(0,22,64,18,'#E8C080'); d.dither(0,22,64,2,'#E8C080','#D8A868');
  for(let i=0;i<14;i++) d.px(d.ri(24,63),d.ri(26,39),'#C89858');
  // ranch house mid-right
  d.rect(30,20,12,7,'#C89060'); d.poly([[29,20],[36,15],[43,20]],'#8A3A2A'); d.rect(35,23,3,4,'#5A3018'); d.rect(32,22,2,2,'#F8E8A0'); d.rect(39,22,2,2,'#F8E8A0');
  d.hline(30,41,24,'#A87048');
  // windmill
  d.line(48,28,50,12,'#7A7A84'); d.line(52,28,50,12,'#7A7A84'); d.hline(49,51,20,'#7A7A84');
  for(const [a,b] of [[46,9],[54,9],[46,15],[54,15],[50,8],[50,16]]) d.line(50,12,a,b,'#B0B0B8'); d.px(50,12,'#5A5A64');
  // big saguaro right
  d.rect(57,18,3,16,'#3A9040'); d.rect(57,18,1,16,'#58B058'); d.rect(54,22,3,2,'#3A9040'); d.rect(54,18,2,5,'#3A9040'); d.rect(60,25,3,2,'#3A9040'); d.rect(61,21,2,5,'#3A9040');
  d.px(58,17,'#F87898');
  // small cactus mid
  d.rect(27,30,2,6,'#3A9040'); d.rect(25,31,2,1,'#3A9040'); d.rect(25,29,1,2,'#3A9040');
  // tumbleweed + fence
  d.ring(44,34,2,'#A87840'); d.px(44,34,'#A87840');
  for(let x=24;x<64;x+=5) d.vline(x,25,28,'#8A5A30'); d.hline(24,63,26,'#8A5A30');
  // longhorn skull
  d.stamp(36,35,['h.....h','.hhwhh.','..www..','...w...'],{h:'#F4ECDA',w:'#FFFFFF'});
};
A['sandy:c2']=d=>{ // the moon: grey cratered ground, Earth in black sky, tall acorn-tipped rocket, flag
  d.rect(0,0,64,40,'#08081A');
  stars(d,30,0,63,0,24,['#FFFFFF','#C8D0F8']);
  // earth
  d.circ(14,7,5,'#2A6AC8'); d.rect(12,4,3,2,'#48A858'); d.rect(15,8,3,2,'#48A858'); d.px(11,8,'#48A858'); d.px(12,4,'#FFFFFF'); d.px(16,3,'#FFFFFF');
  // moon horizon with gentle hills
  for(let x=0;x<64;x++){const y=24+Math.round(Math.sin(x/9)*1.5); d.vline(x,y,39,'#B8BCC8'); d.px(x,y,'#D8DCE4')}
  d.dither(0,34,64,6,'#B8BCC8','#A4A8B4');
  // craters
  for(const [x,y,r] of [[44,34,4],[30,30,2],[58,28,2],[26,37,3]]) {d.ell(x,y,r,r/2,'#8A8E9A'); d.ell(x,y-0.5,r-1,r/2-0.5,'#9CA0AC'); d.hline(x-r+1,x+r-1,y-Math.ceil(r/2),'#7A7E8A')}
  // rocket (tall, red/silver, with acorn porthole)
  d.poly([[48,4],[52,10],[52,28],[44,28],[44,10]],'#E8ECF0'); d.poly([[48,4],[52,10],[48,10]],'#C8CCD4'); d.rect(48,10,4,18,'#C8CCD4');
  d.poly([[48,1],[50,4],[46,4]],'#E04040'); d.px(48,0,'#E04040');
  d.poly([[44,22],[40,30],[44,28]],'#E04040'); d.poly([[52,22],[56,30],[52,28]],'#E04040'); d.rect(47,22,2,8,'#E04040');
  d.circ(48,14,2,'#7AC8F0'); d.px(47,13,'#FFFFFF'); d.rect(45,18,6,1,'#E04040');
  d.dither(43,29,11,2,'#A4A8B4','#E8ECF0');
  // flag with acorn
  d.vline(32,14,27,'#9A9AA8'); d.rect(33,14,7,5,'#FFFFFF'); d.circ(36,16,1,'#C8843A'); d.hline(35,37,15,'#8A5A30');
  // footprints toward rocket
  for(const [x,y] of [[26,33],[30,34],[34,32],[38,33]]) {d.px(x,y,'#8A8E9A'); d.px(x+1,y,'#8A8E9A')}
};

// ===== DUO =====
A['duo:s0']=d=>{ // twin-bell alarm clock in owl green, ringing, hands at dawn (6)
  const O='#1E3A10',G='#58CC02',G2='#46A302',G3='#89E219',Y='#FFC800',Y2='#E0A000',W='#FFFFFF',F='#F4F4E8',K='#3A3A3A';
  // bells on top
  d.ell(8,6,5,4,Y); d.ell(24,6,5,4,Y); d.ell(8,7,4,2,Y2); d.ell(24,7,4,2,Y2); d.px(6,4,'#FFF0A0'); d.px(22,4,'#FFF0A0');
  d.rect(15,2,2,4,K); d.rect(13,1,6,2,Y);
  // feet
  d.line(8,26,5,30,K); d.line(9,26,6,30,K); d.line(24,26,27,30,K); d.line(23,26,26,30,K);
  // body
  d.circ(16,17,11,G); d.circ(17,18,10,G2); d.circ(16,17,10,G); d.circ(14,15,7,G3); d.circ(16,17,10,G);
  d.ring(16,17,10,G2);
  // face
  d.circ(16,17,8,F); d.circ(17,18,7,'#E8E8D8'); d.circ(16,17,7,F);
  for(const [x,y] of [[16,10],[23,17],[16,24],[9,17]]) d.px(x,y,K);
  // hands: hour at 6, minute at 12 (dawn 6:00)
  d.vline(16,12,17,K); d.vline(16,17,21,'#E04040'); d.px(16,17,Y);
  // owl eyes peeking on rim
  d.circ(12,13,0,K);
  d.outline(O);
  // ring wiggle marks
  d.line(1,2,3,4,O); d.line(0,6,2,7,O); d.line(31,2,29,4,O); d.line(31,7,29,7,O);
  d.px(10,4,W); d.px(26,4,W);
};
A['duo:s1']=d=>{ // streak ember: a fierce flame in a little glass lantern, with a "7" glow
  const O='#3A1A08',F='#FF9600',F2='#FF4B4B',F3='#FFC800',F4='#FFF4B0',M='#5A5E6A',M2='#3A3E48',G='#DDF4FF',G2='#A8D8F0';
  // ring handle
  d.ring(16,3,2,M); d.rect(11,5,10,3,M); d.hline(11,20,7,M2);
  // glass body
  d.rect(9,8,14,18,G2); d.rect(10,8,12,18,G);
  // flame
  d.poly([[16,9],[21,17],[21,22],[18,25],[14,25],[11,22],[11,16],[13,18],[14,12]],F2);
  d.poly([[16,12],[20,18],[19,23],[16,25],[13,23],[12,19],[14,20],[15,15]],F);
  d.poly([[16,16],[18,20],[18,23],[16,25],[14,23],[14,20]],F3);
  d.rect(15,22,2,3,F4);
  // posts + base
  d.vline(9,8,25,M); d.vline(22,8,25,M);
  d.rect(8,26,16,3,M); d.hline(8,23,28,M2); d.rect(10,29,12,2,M2);
  // glass shine
  d.vline(10,10,16,'#FFFFFF');
  d.outline(O);
  // floating embers
  d.px(26,10,F); d.px(27,6,F3); d.px(5,12,F); d.px(4,18,F3); d.px(28,15,F2);
};
A['duo:s2']=d=>{ // diamond league trophy: gold cup with big cyan diamond and wings
  const O='#1A2A3A',GD='#FFC800',GD2='#E0A000',GD3='#FFF0A0',D='#7AE0FF',D2='#3AB8F0',D3='#C8F6FF',D4='#2A88D0',B='#58CC02',B2='#46A302';
  // cup handles
  d.ring(5,13,3,GD2); d.ring(26,13,3,GD2);
  // cup
  d.poly([[6,9],[26,9],[24,18],[19,22],[13,22],[8,18]],GD);
  d.poly([[18,9],[26,9],[24,18],[19,22],[17,22]],GD2);
  d.poly([[8,10],[12,10],[11,17],[9,16]],GD3);
  // stem + base
  d.rect(14,22,4,3,GD2); d.rect(11,25,10,2,GD); d.rect(9,27,14,4,B); d.hline(9,22,30,B2); d.rect(13,28,6,1,GD3);
  // diamond on top
  d.poly([[10,6],[13,2],[19,2],[22,6],[16,14]],D);
  d.poly([[10,6],[22,6],[16,14]],D2); d.poly([[16,6],[22,6],[16,14]],D4);
  d.poly([[13,2],[16,6],[19,2]],D3); d.line(10,6,22,6,D3);
  d.outline(O);
  bigSpark(d,26,3,'#FFFFFF'); spark(d,4,4,D3); spark(d,28,24,'#FFF0A0');
};
A['duo:c0']=d=>{ // night: your house wall with a lit window and a desk/laptop inside, tree branch, moon
  d.grad(0,0,64,40,['#0E1430','#141C40','#1A244E','#202C5A']);
  stars(d,18,0,40,0,20,['#FFFFFF','#C8D0F8']);
  d.circ(10,7,4,'#FFF6D0'); d.circ(9,6,1,'#F0E4B0'); d.px(12,9,'#F0E4B0');
  // house wall right side
  d.rect(30,0,34,40,'#4A3E5E'); for(let y=2;y<40;y+=4) d.hline(30,63,y,'#3E3450');
  for(let y=0;y<40;y+=4) for(let x=30+((y/4)%2?4:0);x<64;x+=8) d.vline(x,y+3,y+5,'#3E3450');
  // window frame
  d.rect(36,8,22,18,'#E8E0D0'); d.rect(38,10,18,14,'#F8D878');
  // room inside: wallpaper, desk, laptop glow, plant, sleepy bed corner
  d.rect(38,10,18,14,'#F8E0A0'); d.rect(38,19,18,5,'#C89060'); d.hline(38,55,19,'#A87048');
  d.rect(42,15,7,4,'#3A3A44'); d.rect(43,16,5,2,'#89E219'); d.px(45,16,'#FFFFFF');
  d.rect(51,14,3,5,'#58CC02'); d.rect(51,17,3,2,'#C86040');
  d.rect(39,11,4,3,'#A8D8F0'); // poster
  d.vline(47,10,23,'#E8E0D0'); d.hline(38,55,17,'#E8E0D0');
  // curtains
  d.rect(36,8,3,18,'#E04858'); d.rect(55,8,3,18,'#E04858'); d.vline(37,8,25,'#B83848');
  // sill
  d.rect(35,26,24,2,'#C8C0B0');
  // light spill on ground
  d.dither(30,34,34,6,'#2A2440','#3A3050');
  // tree branch from top left across (where an owl would perch)
  d.line(0,14,30,22,'#3A2A20'); d.line(0,15,30,23,'#2A1E16'); d.line(20,19,24,14,'#3A2A20');
  d.circ(25,13,2,'#2A4A2A'); d.circ(4,12,3,'#2A4A2A');
  // ground / lawn
  d.rect(0,30,30,10,'#1A2E28'); d.dither(0,30,30,1,'#1A2E28','#24403A');
  // green feather on the sill (clue)
  d.line(40,27,44,26,'#58CC02'); d.px(45,26,'#89E219');
};
A['duo:c1']=d=>{ // Mexico City: colorful facades, papel picado, Angel column, taco cart
  d.grad(0,0,64,22,['#48B8F0','#68C8F0','#90D8F4','#B8E8F8']);
  // Angel of Independence column center-left back
  d.rect(26,6,3,18,'#E8E0C8'); d.rect(25,22,5,3,'#D0C8A8'); d.stamp(25,1,['..g..','g.g.g','.ggg.','..g..','.g.g.'],{g:'#FFC800'});
  // colorful buildings right
  const bl=[[32,10,8,'#F86080'],[40,6,8,'#FFC800'],[48,12,7,'#3AB8F0'],[55,8,9,'#58CC02']];
  for(const [x,y,w,c] of bl){d.rect(x,y,w,24-y,c); d.hline(x,x+w-1,y,'#FFFFFF'); for(let yy=y+3;yy<22;yy+=5) for(let xx=x+1;xx<x+w-1;xx+=3) {d.rect(xx,yy,2,3,'#3A2A4A'); d.px(xx,yy-1,'#FFFFFF')}}
  d.rect(0,14,24,10,'#E89060'); for(let x=2;x<24;x+=5) d.rect(x,16,2,3,'#7A3A2A'); d.hline(0,23,14,'#FFFFFF');
  // papel picado bunting
  for(let x=0;x<64;x++){const y=3+Math.round(Math.abs(Math.sin(x/10.2))*3); d.px(x,y,'#5A4A3A')}
  for(let x=2;x<64;x+=4){const y=4+Math.round(Math.abs(Math.sin(x/10.2))*3); d.rect(x,y,3,3,['#F86080','#FFC800','#58CC02','#3AB8F0','#B068F0'][(x/4|0)%5])}
  // street
  d.rect(0,24,64,16,'#D8C8B0'); d.dither(0,24,64,1,'#C0B098','#D8C8B0');
  for(let x=0;x<64;x+=6) d.hline(x,x+2,31,'#C4B49C');
  // taco cart right
  d.rect(42,27,16,7,'#F86080'); d.rect(42,27,16,2,'#FFFFFF'); d.circ(45,35,1,'#3A3A3A'); d.circ(55,35,1,'#3A3A3A');
  d.poly([[40,22],[60,22],[58,19],[42,19]],'#58CC02'); d.vline(43,22,27,'#8A8A8A'); d.vline(57,22,27,'#8A8A8A');
  for(let x=42;x<60;x+=4) d.rect(x,19,2,3,'#FFFFFF');
  // taco icon on cart
  d.stamp(47,29,['.yyyy.','yglryy','yyyyyy'],{y:'#FFC800',g:'#58CC02',l:'#58CC02',r:'#F04040'});
  // cactus pot
  d.rect(34,30,4,3,'#C86040'); d.rect(35,26,2,4,'#46A302'); d.px(34,27,'#46A302'); d.px(37,28,'#46A302');
};
A['duo:c2']=d=>{ // moon lesson room: crater ground, glass dome classroom with chalkboard, Earth rising
  d.rect(0,0,64,40,'#0A0A20'); stars(d,26,0,63,0,22,['#FFFFFF','#B8C8F8']);
  // earth
  d.circ(8,7,4,'#3A78D8'); d.rect(6,5,3,2,'#58CC02'); d.px(10,9,'#58CC02'); d.px(7,4,'#FFFFFF');
  // dome classroom
  d.ell(46,26,15,13,'#5A8AB8'); d.ell(46,26,14,12,'#9ACCE8');
  // moon ground
  d.rect(0,27,64,13,'#C8C8D4'); d.hline(0,29,27,'#E0E0EA'); d.dither(0,34,64,6,'#C8C8D4','#B4B4C2');
  for(const [x,y,r] of [[24,33,3],[58,36,2],[40,37,2]]) {d.ell(x,y,r,r/2,'#9A9AAC'); d.hline(x-r+1,x+r-1,y-1,'#8A8A9C')}
  d.hline(0,30,26,'#C8C8D4'); d.hline(0,29,26,'#E0E0EA');
  d.rect(30,26,33,3,'#7A7A8A'); d.hline(30,62,26,'#A0A0B0');
  // chalkboard inside
  d.rect(38,16,16,8,'#2A5A3A'); d.frame(38,16,16,8,'#A87048');
  d.stamp(40,18,['g.g.ggg','.g..g.g','g.g.ggg'],{g:'#FFFFFF'}); // "x = 0"ish tiny marks, symbolic
  d.line(48,22,52,18,'#FFC800');
  // student desk + green streak flame on desk
  d.rect(40,24,6,1,'#A87048'); d.stamp(51,21,['.f.','fff','fyf'],{f:'#FF9600',y:'#FFC800'});
  // dome shine
  d.line(36,20,40,15,'#E8F8FF'); d.px(41,14,'#E8F8FF');
  // antenna
  d.vline(46,10,13,'#9A9AA8'); d.px(46,9,'#FF4B4B');
  // footprints (bird tracks) to door
  for(const [x,y] of [[26,36],[30,35],[34,36]]) d.stamp(x,y,['p.p','.p.'],{p:'#8A8A9C'});
  // flag
  d.vline(60,18,26,'#9A9AA8'); d.rect(56,18,4,3,'#58CC02');
};

// ===== DINO =====
A['dino:s0']=d=>{ // warm speckled dino egg in a straw nest, steam wisps, tiny crack
  const O='#2A3A20',E='#F4F0D8',E2='#DCD4B0',E3='#FFFFFF',S='#7AB858',S2='#5A9A40',N='#C8984A',N2='#A07030',N3='#E8C070';
  // egg
  d.ell(16,15,9,12,E); d.ell(18,17,7,10,E2); d.ell(15,14,8,11,E);
  d.vline(10,9,15,E3); d.vline(11,7,9,E3);
  for(const [x,y,r] of [[13,9,1.2],[19,12,1.5],[12,18,1],[20,20,1.2],[16,6,0.8],[22,15,0.8]]) {d.circ(x,y,r,S)}
  d.px(14,10,S2); d.px(20,13,S2);
  // crack zigzag
  d.stamp(15,15,['k....','.k.k.','..k.k'],{k:'#8A7A5A'});
  // nest
  d.ell(16,27,14,4,N); d.ell(16,26,12,2,N2);
  for(let x=3;x<30;x+=3){d.line(x,25,x+3,29,N3); d.line(x+2,24,x,28,N2)}
  d.hline(4,28,30,N2);
  d.outline(O);
  // steam (warm!)
  for(const [x,y] of [[7,1],[8,2],[7,3],[25,0],[26,1],[25,2]]) d.px(x,y,'#F8B8A0');
  d.px(28,6,'#F8B8A0'); d.px(27,7,'#F8B8A0');
};
A['dino:s1']=d=>{ // jurassic fern frond: upright stem, separated leaflets, curled fiddlehead, a bite taken
  const O='#163A18',G='#58B048',G2='#2E7A2A',G3='#90D870',B='#7A5A30',B2='#5A3A20';
  const SX=y=>15+Math.round(Math.sin((29-y)/9)*2);
  for(let y=6;y<=29;y++){d.px(SX(y),y,G2); d.px(SX(y)+1,y,G2)}
  const leaf=(sy,dir,L)=>{const sx=SX(sy)+(dir>0?1:0); for(let k=1;k<=L;k++){const x=sx+dir*k, y=sy-Math.round(k*0.45); d.px(x,y,k===L?G3:G); d.px(x,y+1,k>L-2?G:G2); if(k%3===0&&k<L) d.px(x,y-1,G)}};
  [[26,-1,11],[24,1,11],[21,-1,10],[19,1,10],[16,-1,8],[14,1,8],[11,-1,6],[9,1,5]].forEach(([y,dr,L])=>leaf(y,dr,L));
  // fiddlehead curl at top
  const tx=SX(6); d.ring(tx+2,4,2,G2); d.px(tx+2,4,G3); d.px(tx+3,4,G); d.px(tx+1,6,G2);
  // a bite out of the top-right leaflet
  for(const [x,y] of [[25,19],[26,19],[26,18],[25,18],[26,20]]) d.clear(x,y);
  // soil clump
  d.ell(16,30,6,2,B); d.hline(11,21,31,B2);
  d.outline(O);
  d.px(29,22,'#F8F0D0'); d.px(28,24,'#F8F0D0');
};
A['dino:s2']=d=>{ // meteor fragment: dark pitted rock with glowing lava veins and a smoking trail
  const O='#1A0A08',R='#4A3A3A',R2='#342828',R3='#6A5654',L='#FF7A20',L2='#FFD040',T='#FFB060';
  // trail
  d.poly([[0,2],[6,2],[16,12],[10,16]],'#F86020'); d.poly([[2,3],[6,3],[14,12],[11,13]],T); d.poly([[4,4],[13,12],[11,12]],L2);
  // rock
  d.poly([[10,14],[16,9],[24,10],[29,16],[28,24],[22,29],[13,28],[8,22]],R);
  d.poly([[20,10],[24,10],[29,16],[28,24],[22,29],[19,26],[24,20]],R2);
  d.poly([[12,15],[16,11],[19,12],[14,18]],R3);
  // craters
  for(const [x,y] of [[13,22],[22,14],[18,24]]) {d.circ(x,y,1.3,R2); d.px(x-1,y-1,R3)}
  // glowing cracks
  d.line(16,16,20,20,L); d.line(20,20,26,19,L); d.line(20,20,19,26,L); d.px(20,20,L2); d.px(18,18,L2); d.line(11,19,14,20,L);
  d.outline(O);
  spark(d,28,6,'#FFD040'); d.px(4,24,'#FF7A20'); d.px(6,28,'#FFD040');
};
A['dino:c0']=d=>{ // sunny park: lawn, path, pond, big oak, bench, pigeons, giant dino footprints
  d.grad(0,0,64,18,['#68C0F0','#80CCF2','#98D8F4','#B4E4F6']);
  cloud(d,30,3,12,'#FFFFFF'); cloud(d,4,6,9,'#FFFFFF');
  // far tree line
  for(let x=-2;x<66;x+=5) d.circ(x,18,4,(x/5)%2?'#5AA848':'#4A9840');
  // lawn
  d.rect(0,19,64,21,'#78C858'); d.dither(0,19,64,1,'#78C858','#68B848');
  // path curving to right
  d.poly([[0,36],[30,32],[64,28],[64,32],[30,37],[0,40]],'#E8D4A8'); d.line(0,36,64,28,'#D0B888');
  // pond right
  d.ell(50,36,10,3,'#4AA8D8'); d.ell(50,35,8,2,'#78C8F0'); d.px(46,35,'#FFFFFF'); d.px(54,36,'#FFFFFF');
  // big oak right
  d.rect(52,12,4,14,'#7A5030'); d.circ(54,9,8,'#3A8A30'); d.circ(49,11,5,'#3A8A30'); d.circ(53,7,6,'#58B048'); d.circ(50,9,3,'#78C858');
  // bench center
  d.rect(30,22,12,2,'#B87840'); d.rect(30,19,12,1,'#B87840'); d.rect(30,20,12,1,'#8A5A30'); d.vline(31,24,27,'#5A5A60'); d.vline(40,24,27,'#5A5A60');
  // lamp post
  d.vline(46,14,27,'#3A3A44'); d.rect(45,12,3,2,'#F8E890');
  // pigeons (distant cousins)
  for(const [x,y] of [[34,29],[39,30],[27,30]]) d.stamp(x,y,['.gg.','gggk','.wg.','.y.y'],{g:'#9A9AB0',k:'#E87040',w:'#C8C8D8',y:'#E87040'});
  // giant 3-toed dino footprints across the lawn
  for(const [x,y] of [[24,24],[44,22],[58,24]]) d.stamp(x,y,['f.f.f','.fff.','.fff.'],{f:'#5AA040'});
  // flowers
  for(const [x,y,c] of [[2,22,'#F8E048'],[26,20,'#F87898'],[62,30,'#FFFFFF']]) d.px(x,y,c);
};
A['dino:c1']=d=>{ // natural history museum hall: columns, T-rex skeleton, rope barrier, marble floor
  d.rect(0,0,64,40,'#E8DCC4');
  d.grad(0,0,64,4,['#C8B898','#D8C8A8']);
  // tall arched windows with skylight
  for(const x of [4,20]) {d.rect(x,6,8,14,'#A8D0E8'); d.ell(x+3.5,6,4,3,'#A8D0E8'); d.vline(x+4,4,19,'#E8DCC4'); d.hline(x,x+7,12,'#E8DCC4')}
  // columns
  for(const x of [16,30,62]) {d.rect(x,4,3,24,'#F4ECDA'); d.vline(x+2,4,27,'#D0C4A8'); d.rect(x-1,4,5,2,'#C8B898'); d.rect(x-1,26,5,2,'#C8B898')}
  // marble floor checker
  for(let y=28;y<40;y+=3)for(let x=0;x<64;x+=6) d.rect(x+((y/3)%2?3:0),y,3,3,'#D8CCB4');
  d.rect(0,28,64,40,null);
  for(let y=28;y<40;y++)for(let x=0;x<64;x++) d.px(x,y,((Math.floor(x/4)+Math.floor((y-28)/3))%2)?'#F0E8D8':'#D4C8B0');
  d.hline(0,63,28,'#A89878');
  // plinth
  d.rect(34,25,28,4,'#8A7A68'); d.hline(34,61,25,'#A89888');
  // T-rex skeleton
  const B='#FFFAEE',B2='#C8BCA0';
  d.poly([[52,6],[60,6],[61,9],[58,11],[53,11],[51,9]],B); // skull
  d.px(54,8,'#3A3028'); d.hline(53,60,10,B2); for(let x=53;x<60;x+=2) d.px(x,11,B); // teeth
  d.line(51,10,46,13,B); d.line(46,13,38,15,B); d.line(38,15,34,18,B); d.line(34,18,32,22,B); // spine + tail
  for(let x=39;x<50;x+=2) {d.line(x,14-(x-39)/6,x,18-(x-39)/6,B2)} // ribs
  d.line(44,16,42,24,B); d.line(42,24,40,25,B); d.line(48,15,49,24,B); d.line(49,24,51,25,B); // legs
  d.line(50,13,52,16,B); // tiny arm
  // museum stand posts + rope
  for(const x of [26,40,56]) {d.vline(x,30,35,'#C8A040'); d.px(x,29,'#F8D060')}
  for(let x=26;x<56;x++) d.px(x,31+Math.round(Math.sin((x-26)/15*Math.PI*2)*1.2+1),'#B83838');
  // info plaque with tiny "66"
  d.rect(36,30,4,3,'#3A3A44'); d.px(37,31,'#F8F0D8'); d.px(38,31,'#F8F0D8');
  // banner
  d.rect(22,20,7,5,'#3A7A48'); d.stamp(23,21,['b..b','.bb.'],{b:'#F8F0D8'});
};
A['dino:c2']=d=>{ // jurassic island: teal-peach sky, smoking green volcano right, cycads, pterosaurs, egg nest, river
  d.grad(0,0,64,26,['#5AB8B0','#88C8A8','#F8C890','#F8A070','#F88860']);
  d.circ(20,16,5,'#FFE8A0');
  // pterosaurs
  for(const [x,y] of [[30,5],[40,9]]) d.stamp(x,y,['p.....p','.pp.pp.','...p...'],{p:'#3A3A4A'});
  // volcano right-center (green slopes, lava top, smoke)
  d.poly([[28,26],[40,8],[48,8],[64,22],[64,26]],'#3A6A3A'); d.poly([[44,8],[48,8],[64,22],[64,26],[50,26]],'#2A5030');
  d.rect(40,7,8,2,'#5A3A2A'); d.hline(41,46,7,'#FF7A20'); d.line(43,9,41,16,'#FF7A20'); d.line(45,9,46,14,'#FF9A30');
  for(const [x,y,r] of [[44,4,3],[48,1,3],[53,0,2]]) d.circ(x,y,r,'#8A8090');
  d.circ(43,4,1.5,'#A8A0B0');
  // jungle ground
  d.rect(0,26,64,14,'#5AA040'); d.dither(0,26,64,2,'#5AA040','#4A8A30');
  // river curling across front right
  d.poly([[24,40],[30,33],[40,30],[64,29],[64,32],[44,34],[36,40]],'#3AA0C8'); d.line(32,36,40,32,'#88D8F0'); d.line(48,32,58,31,'#88D8F0');
  // cycads / tree ferns
  for(const [x,h] of [[56,14],[26,12]]) {d.rect(x,40-h-6,2,h,'#7A5030'); for(const [a,b] of [[-6,2],[6,2],[-4,-2],[4,-2],[0,-3]]) d.line(x+1,40-h-6,x+1+a,40-h-6+b,'#2A7A30')}
  // egg nest center-right
  d.ell(48,37,6,2,'#A07038'); d.ell(46,35,2,2,'#F4F0D8'); d.ell(50,35,2,2,'#F4F0D8'); d.px(46,34,'#7AB858'); d.px(50,36,'#7AB858');
  // ferns foreground edge
  for(const x of [2,30,62]) d.stamp(x-2,36,['g...g','.g.g.','..g..'],{g:'#2A7A30'});
};

// ===== SEAL =====
A['seal:s0']=d=>{ // circus nose-balance ball: big glossy striped ball with star, little stand-dent on top
  const O='#1A2040',R='#F04848',R2='#C02E3A',Y='#FFD040',Y2='#E0A820',B='#3A8AE8',B2='#2A68C0',W='#FFFFFF',W2='#E0E4F0';
  d.circ(16,17,13,W);
  // stripes as wedges from top pole
  for(let y=0;y<32;y++)for(let x=0;x<32;x++){ if(!d.get(x,y)) continue; const a=Math.atan2(y-4,x-16); const k=Math.floor((a+Math.PI)/(Math.PI/4))%4; d.px(x,y,[R,W,B,Y][k]) }
  // shading on lower-right
  for(let y=0;y<32;y++)for(let x=0;x<32;x++){const c=d.get(x,y); if(!c) continue; if((x-10)**2+(y-11)**2>15*15){d.px(x,y,{[R]:R2,[W]:W2,[B]:B2,[Y]:Y2}[c]||c)}}
  // top pole cap
  d.circ(16,5,2,Y); d.px(16,4,W);
  // star badge
  d.stamp(5,16,['...w...','..www..','wwwwwww','.wwwww.','.ww.ww.'],{w:Y});
  d.outline(O);
  // gloss
  d.rect(8,9,2,3,W); d.px(10,8,W); d.px(7,13,W);
  // balance marks
  d.line(3,1,5,3,'#88C8F0'); d.line(29,1,27,3,'#88C8F0');
};
A['seal:s1']=d=>{ // fresh mackerel: arched fish, wavy dark stripes, silver belly, water drops
  const O='#14202E',B='#2A8AA0',B2='#1A6070',B3='#58B8C8',S='#D8E4EC',S2='#A8B8C8',K='#0E2A34',F='#3A7888';
  // body (slightly arched)
  d.poly([[3,16],[8,11],[16,9],[23,11],[27,15],[23,19],[15,21],[8,20]],B);
  d.poly([[3,16],[8,20],[15,21],[23,19],[27,15],[22,17],[14,18],[7,17]],S);
  d.poly([[8,20],[15,21],[23,19],[22,18],[14,19.5]],S2);
  // tail
  d.poly([[26,15],[31,9],[30,15],[31,21]],B2); d.line(27,15,30,11,F); d.line(27,15,30,19,F);
  // dorsal fins + finlets
  d.poly([[13,9],[16,5],[18,9]],B2); for(const x of [20,22,24]) d.px(x,10+(x-20)/2,B2);
  d.poly([[13,19],[15,23],[17,20]],S2);
  // wavy mackerel stripes
  for(let x=9;x<25;x+=3){d.line(x,11,x+1,13,K); d.line(x+1,13,x,15,K)}
  d.line(8,12,21,11,B3);
  // head/eye/gill
  d.circ(7,14,1.5,'#FFFFFF'); d.px(7,14,K); d.px(6,13,'#FFFFFF');
  d.line(10,12,9,18,B2); d.px(3,16,'#E89090');
  d.outline(O);
  // water drops
  for(const [x,y] of [[6,5],[22,4],[4,26],[25,26]]) d.stamp(x,y,['.d.','ddd','.d.'],{d:'#88D0F0'});
};
A['seal:s2']=d=>{ // clapping champion cup: gold cup, two flippers clapping on top, blue wave band, star
  const O='#2A1A0A',G='#F8C838',G2='#D09018',G3='#FFF0A0',F='#7A8A9A',F2='#5A6878',F3='#A8B8C8',W='#3A8AE8',W2='#88C8F0';
  // flippers clapping above cup
  d.poly([[8,10],[6,4],[10,1],[15,7],[15,11]],F); d.poly([[24,10],[26,4],[22,1],[17,7],[17,11]],F);
  d.poly([[8,10],[6,4],[8,3],[11,9]],F3); d.poly([[24,10],[26,4],[24,3],[21,9]],F2);
  d.line(7,3,8,1,F2); d.line(25,3,24,1,F2);
  // clap burst
  d.px(16,3,'#FFFFFF'); d.px(16,1,G); d.px(14,0,G); d.px(18,0,G);
  // cup
  d.ring(5,15,3,G2); d.ring(26,15,3,G2);
  d.poly([[6,11],[26,11],[24,20],[19,24],[13,24],[8,20]],G);
  d.poly([[17,11],[26,11],[24,20],[19,24],[16,24]],G2);
  d.poly([[8,12],[11,12],[11,19],[9,18]],G3);
  // wave band
  for(let x=8;x<25;x++) d.px(x,16+((x>>1)%2),W); for(let x=8;x<25;x++) d.px(x,17+((x>>1)%2),W2);
  // stem & base
  d.rect(14,24,4,2,G2); d.rect(10,26,12,2,G); d.rect(8,28,16,3,'#3A6AB8'); d.hline(8,23,30,'#2A4A88'); d.rect(13,29,6,1,G3);
  d.outline(O);
  spark(d,29,24,'#FFF0A0'); spark(d,3,24,'#FFF0A0');
};
A['seal:c0']=d=>{ // sunny harbor: blue sea, big smooth pier rock center-right, wooden pier, gulls, buoy, lighthouse
  d.grad(0,0,64,14,['#58B0F0','#70C0F2','#90D0F4','#B0E0F6']);
  cloud(d,8,2,12,'#FFFFFF'); d.circ(40,4,3,'#FFF4B0'); d.circ(40,4,2,'#FFFFFF');
  // sea
  d.rect(0,14,64,14,'#2A8AD0'); d.hline(0,63,14,'#1E6EB0');
  for(let y=16;y<28;y+=3) for(let x=(y*5)%7;x<64;x+=9) d.hline(x,x+2,y,'#5AB0E8');
  // lighthouse far
  d.rect(4,6,3,8,'#FFFFFF'); d.rect(4,8,3,2,'#E04848'); d.rect(4,12,3,1,'#E04848'); d.rect(3,5,5,1,'#3A3A44'); d.px(5,4,'#F8E048');
  // pier (planks on posts) right
  d.rect(50,18,14,3,'#A87848'); for(let x=50;x<64;x+=3) d.vline(x,18,20,'#8A5A30'); for(const x of [51,57,62]) d.vline(x,21,30,'#6A4428');
  // shore ground (pebble beach) where pet stands
  d.rect(0,28,64,12,'#D8C8A0'); d.dither(0,28,64,1,'#FFFFFF','#D8C8A0');
  for(let i=0;i<16;i++) d.px(d.ri(24,63),d.ri(31,39),d.rnd()<.5?'#B8A880':'#E8DCC0');
  // big sunbathing rock
  d.ell(40,28,12,6,'#8A8E9A'); d.ell(39,26,11,4,'#A4A8B4'); d.ell(37,24,7,2,'#BEC2CC'); d.hline(29,51,33,'#6E7280');
  d.px(44,25,'#6E7280'); d.px(33,27,'#6E7280');
  // towel on rock + ball
  d.rect(36,22,7,2,'#F87898'); d.hline(36,42,23,'#FFFFFF'); d.circ(48,22,2,'#F04848'); d.px(48,21,'#FFD040'); d.px(47,21,'#FFFFFF');
  // gulls
  d.stamp(26,6,['g.g','.g.'],{g:'#3A3A44'}); d.stamp(32,9,['g...g','.g.g.'],{g:'#3A3A44'});
  // red buoy
  d.rect(22,19,3,3,'#E04848'); d.px(23,18,'#FFFFFF'); d.hline(21,25,22,'#1E6EB0');
};
A['seal:c1']=d=>{ // open sea: huge curling wave right, deep blues, sun glare, foam, dolphin fins
  d.grad(0,0,64,12,['#88C8F8','#A0D4F8','#BCE2FA']);
  d.circ(14,4,3,'#FFF8D0');
  cloud(d,30,2,10,'#FFFFFF');
  // horizon sea
  d.rect(0,12,64,28,'#1E6AB8'); d.grad(0,12,64,10,['#4A9AD8','#3A88CC','#2E78C0']);
  // sun glare stripes
  for(const [y,w] of [[13,4],[15,6],[17,3]]) d.hline(14-w/2,14+w/2,y,'#C8E8FF');
  // big curling wave right
  d.poly([[28,40],[34,24],[42,14],[52,10],[60,12],[64,16],[64,40]],'#2A80C8');
  d.poly([[42,14],[52,10],[60,12],[64,16],[58,15],[52,16],[48,22]],'#4AA8E0');
  d.poly([[52,16],[58,15],[64,16],[64,22],[56,22]],'#145090'); // tube inside
  d.poly([[36,26],[42,18],[48,22],[44,30]],'#3A98D8');
  // foam crest
  for(let x=42;x<64;x++){const y=Math.round(10+((x-52)**2)/40); d.px(x,y,'#FFFFFF'); d.px(x,y+1,(x%2)?'#FFFFFF':'#C8E8FF')}
  d.circ(43,13,1.5,'#FFFFFF'); d.px(41,15,'#FFFFFF'); d.px(39,17,'#FFFFFF');
  // foreground water (where pet floats) with gentle foam lines
  d.rect(0,30,40,10,'#1A5AA8'); for(let x=0;x<40;x+=5){d.hline(x,x+2,31+(x%3),'#5AA8E8')}
  // dolphin fins
  for(const [x,y] of [[26,22],[33,20]]) d.stamp(x,y,['.d','dd','dd'],{d:'#5A6A88'});
  // spray drops
  for(const [x,y] of [[38,9],[46,6],[56,5],[62,7]]) d.px(x,y,'#FFFFFF');
};
A['seal:c2']=d=>{ // Antarctic: pale sky, aurora wisp, tall iceberg stage right with ball, penguin audience
  d.grad(0,0,64,20,['#B8D8F4','#C8E2F6','#D8ECF8','#E8F4FA']);
  for(let x=0;x<64;x++){d.px(x,4+Math.round(Math.sin(x/6)*2),'#A8E8D0'); d.px(x,5+Math.round(Math.sin(x/6)*2),'#C8F0E0')}
  // distant flat bergs
  d.poly([[0,20],[4,15],[14,15],[18,20]],'#E0EEF8'); d.poly([[20,20],[23,17],[30,17],[32,20]],'#E0EEF8');
  // sea strip
  d.rect(0,20,64,6,'#3A7AB8'); for(let x=0;x<64;x+=6) d.hline(x,x+2,22,'#7AB0E0');
  // tall iceberg right
  d.poly([[38,26],[42,8],[48,4],[54,6],[60,14],[62,26]],'#F4FAFF');
  d.poly([[50,5],[54,6],[60,14],[62,26],[52,26],[54,14]],'#C8E0F4');
  d.poly([[40,22],[42,12],[45,10],[44,22]],'#FFFFFF');
  d.line(46,14,50,18,'#A8CCE8'); d.line(56,18,58,22,'#A8CCE8');
  // ball balanced on the peak
  d.circ(48,1,1.5,'#F04848'); d.px(47,1,'#FFD040'); d.px(49,0,'#3A8AE8');
  // ice shelf ground
  d.rect(0,26,64,14,'#F0F6FC'); d.hline(0,63,26,'#FFFFFF'); d.dither(0,36,64,4,'#F0F6FC','#DCE8F4');
  // penguin audience cheering
  for(const [x,y] of [[27,29],[35,31],[43,29],[51,31],[58,29]]){
    d.stamp(x-1,y-2,['.......','k.kkk.k','kkkkkkk','.kkwkk.','.kwywk.','.kwwwk.','.kwwwk.','..kkk..','.yy.yy.'],{k:'#1E2230',w:'#FFFFFF',y:'#F8A030'}); // flippers up
  }
  // clap marks
  for(const [x,y] of [[31,25],[47,25],[62,25]]) d.stamp(x-1,y-1,['.c.','c.c','.c.'],{c:'#F8C030'});
  // snowflakes
  for(const [x,y] of [[10,10],[26,6],[60,2],[34,12]]) d.px(x,y,'#FFFFFF');
};
