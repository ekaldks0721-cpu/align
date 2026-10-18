// n4: shared gifts (any pet), Bikini Bottom theme. Souvenirs 32x32, postcards 64x40.
const O='#2A2433';

// Bikini Bottom "sky flower": 5 round petals + center, optional lighter inner shape
function flower(d,cx,cy,r,c,c2,rot=0){
  for(let i=0;i<5;i++){const a=rot+i*Math.PI*2/5-Math.PI/2; d.circ(cx+Math.cos(a)*r*.75,cy+Math.sin(a)*r*.75,r*.5,c)}
  d.circ(cx,cy,r*.55,c);
  if(c2){ if(r>=4){for(let i=0;i<5;i++){const a=rot+i*Math.PI*2/5-Math.PI/2; d.px(cx+Math.cos(a)*r*.7,cy+Math.sin(a)*r*.7,c2)} d.circ(cx,cy,r*.22,c2)} else d.px(cx,cy,c2); }
}
function bubble(d,x,y,r,c,hi){ if(r<=0){d.px(x,y,c);return} d.ring(x,y,r,c); d.px(x-Math.max(1,Math.round(r*.5)),y-Math.max(1,Math.round(r*.5)),hi||'#FFFFFF') }
function sand(d,y0,c1,c2,c3){ d.rect(0,y0,64,40-y0,c1); for(let i=0;i<40;i++){d.px(d.ri(0,63),d.ri(y0+1,39),d.rnd()<.5?c2:c3)} }

export default {
  // 비눗방울 막대: 분홍 막대 + 둥근 고리, 고리에서 나온 나비 모양 비눗방울
  'any:s0-20': d=>{
    const P='#F07AA8', P2='#C84E80', P3='#FFB0CC', F='#BFEAF8', F2='#8FD0EE', F3='#E6C8FF', F4='#FFF2A8', W='#FFFFFF';
    // stick diagonal bottom-left
    d.line(3,30,12,19,P); d.line(4,30,13,19,P); d.line(3,29,12,18,P3); d.line(5,30,13,20,P2);
    // ring loop
    d.ring(15,15,4,P); d.ring(15,15,3.4,P2); d.px(13,12,P3); d.px(12,13,P3);
    // soap film in the ring
    d.circ(15,15,2.4,'#DFF6FF'); d.px(14,14,W);
    // butterfly bubble top-right
    const bx=23, by=8;
    d.ell(bx-3,by-2,3,3,F); d.ell(bx+3,by-2,3,3,F); d.ell(bx-2,by+3,2,2,F); d.ell(bx+2,by+3,2,2,F);
    d.ell(bx-3,by-2,2,2,'#E2F6FF'); d.ell(bx+3,by-2,2,2,'#E2F6FF');
    d.px(bx-4,by-3,F3); d.px(bx+4,by-1,F3); d.px(bx+2,by-3,F4); d.px(bx-2,by+3,F3); d.px(bx+2,by+4,F4);
    d.vline(bx,by-3,by+4,F2); // body
    d.px(bx-1,by-6,F2); d.px(bx-2,by-7,F2); d.px(bx+1,by-6,F2); d.px(bx+2,by-7,F2); // antennae
    d.px(bx-5,by-4,W); d.px(bx+1,by-4,W);
    d.outline(O);
    // little trailing bubbles
    for(const [x,y,r] of [[19,20,1.2],[22,17,0],[27,18,1.5],[9,8,1.2]]) bubble(d,x,y,r,F2,W);
    d.stamp(4,2,['.y.','yWy','.y.'],{y:F4,W});
  },

  // 하늘 꽃무늬 스티커: 청록 하늘 꽃, 흰 스티커 테두리, 한쪽 꽃잎이 들려 뒷면이 보임
  'any:s0-22': d=>{
    const W='#FFFFFF', B='#DCE4EC', B2='#B8C4D0', G='#6CCFB0', G2='#3FA88C', G3='#A8EED6', I='#E6FFF4', Y='#FFE27A';
    const cx=16, cy=17, P=[];
    for(let i=0;i<5;i++){const a=i*Math.PI*2/5-Math.PI/2; P.push([cx+Math.cos(a)*7.5, cy+Math.sin(a)*7.5])}
    // white sticker margin
    for(const [x,y] of P) d.circ(x,y,6,W); d.circ(cx,cy,7,W);
    // petals: dark rim lower-right, body, light inner
    for(const [x,y] of P) d.circ(x+.6,y+.6,4.6,G2);
    for(const [x,y] of P) d.circ(x,y,4.4,G);
    d.circ(cx,cy,5,G);
    for(const [x,y] of P) d.circ(x+(cx-x)*.12,y+(cy-y)*.12,2.2,G3);
    d.circ(cx,cy,3,I); d.circ(cx,cy,1.5,Y);
    // peel the top-right corner back along the line x-y=12
    const cut=[];
    for(let y=0;y<32;y++)for(let x=0;x<32;x++) if(d.get(x,y)&&x-y>12) cut.push([x,y]);
    cut.forEach(([x,y])=>d.clear(x,y));
    cut.forEach(([x,y])=>d.px(y+12,x-12,B));
    for(let t=0;t<32;t++){ if(d.get(t+12,t)) d.px(t+12,t,W) } // fold crease
    cut.forEach(([x,y])=>{ if(x-y===13) d.px(y+12,x-12,B2) });
    d.outline(O);
    d.stamp(1,1,['.y.','yWy','.y.'],{y:Y,W});
    d.px(28,4,Y); d.px(3,28,Y);
  },

  // 다람이 공기 헬멧: 투명 어항 헬멧, 꼭대기 분홍 꽃, 흰 목 고리, 안쪽에 공기 반짝
  'any:s1-20': d=>{
    const G='#CFF0FF', G2='#9ED8F2', G3='#6FB6DE', W='#FFFFFF', C='#F2F2F6', C2='#BFC3D0', C3='#8E93A6', F='#F27AA8', F2='#C8508A', Y='#FFE27A', L='#6ACB6A';
    d.circ(16,16,12,G2);
    d.circ(15,15,11,G);
    d.circ(17,17,8,'#E4F7FF');
    // shading rim
    d.ring(16,16,11.6,G3);
    // highlights
    d.line(8,10,10,7,W); d.line(7,13,8,11,W); d.px(12,6,W); d.px(13,5,W);
    d.px(22,22,W); d.px(23,21,W);
    // collar ring
    d.rect(6,25,20,5,C); d.hline(6,25,25,W); d.hline(6,25,29,C3); d.hline(7,24,28,C2);
    for(const x of [9,14,19,23]) d.px(x,27,C3);
    // flower on top with stem
    d.vline(16,2,4,L); d.px(17,3,L);
    flower(d,16,2,2.6,F); d.px(16,2,Y); d.px(15,1,'#FFB0CC');
    // air shimmer inside
    d.stamp(17,13,['..a..','.a.a.','a...a'],{a:'#FFFFFF'});
    d.outline(O);
  },

  // 인어맨과 조개소년 카드: 무지개 반짝 테두리 카드, 인어맨(흰머리, 파란 마스크, 주황 셔츠)과 조개소년(선원모, 검은 마스크)
  'any:s1-22': d=>{
    const B1='#F8D048', B2='#E58A3A', B3='#F07AA8', B4='#7AC8F0', BG='#3A6EC8', BG2='#5A8EE0', SK='#F8C8A0', WH='#FFFFFF', HG='#D8DCE6', MB='#2A5AC0', OR='#F28A2A', BK='#2A2433', SW='#F2F2F6', SB='#3A58A8';
    // card body + holo border bands
    d.rect(5,2,22,29,B1);
    for(let y=2;y<31;y++){const c=[B1,B2,B3,B4][Math.floor(y/4)%4]; d.px(5,y,c); d.px(6,y,c); d.px(25,y,c); d.px(26,y,c)}
    d.rect(7,4,18,18,BG); // picture window
    for(let i=0;i<3;i++) d.line(7+i*5,21,12+i*5,4,BG2); d.line(22,21,24,16,BG2); // action lines
    // Mermaid Man (left): white hair + beard, blue mask, orange shirt
    d.rect(8,15,8,7,OR); d.hline(8,15,15,'#FFB060');
    d.circ(11,12,3,SK); d.rect(8,8,7,2,WH); d.px(8,10,WH); d.px(14,10,WH); d.px(8,11,WH);
    d.hline(9,13,11,MB); d.px(10,11,WH); d.px(12,11,WH);
    d.rect(9,13,5,3,WH); d.px(11,14,'#C0505A'); d.hline(9,13,16,HG);
    d.stamp(9,18,['.y.','yyy'],{y:B1}); // starfish belt badge
    // Barnacle Boy (right): white sailor cap, black mask, sailor collar
    d.rect(17,17,7,5,SW); d.poly([[17,17],[23,17],[20,20]],SB);
    d.circ(20,14,2.6,SK); d.rect(17,10,7,2,SW); d.hline(18,22,9,SW); d.hline(17,23,12,'#3A3A4A');
    d.hline(18,22,13,BK); d.px(19,13,WH); d.px(21,13,WH);
    d.hline(19,21,16,'#C0505A');
    // name plate
    d.rect(7,23,18,7,'#FFF4D8'); d.stamp(9,24,['m...m.....bbb.','mm.mm.....b..b','m.m.m.....bbb.','m...m.....b..b','m...m.....bbb.'],{m:'#C0505A',b:'#3A58A8'});
    d.hline(7,24,29,'#E2C080');
    d.outline(O);
    // holo shine streak
    for(let i=0;i<6;i++){d.px(18+i,4+i*2,'#FFFFFF'); d.px(19+i,4+i*2,'#DFF6FF')}
    d.stamp(28,5,['.y.','yWy','.y.'],{y:B1,W:WH}); d.px(2,26,B4); d.px(3,9,B3);
  },

  // 황금 뒤집개: 바위에 꽂혀 빛나는 황금 뒤집개 (아무도 못 뽑던 전설)
  'any:s2-20': d=>{
    const Y='#F8D048', Y2='#E0A82E', Y3='#FFF2A8', Y4='#B07820', R='#9AA0B4', R2='#6E7488', R3='#C2C8D6', S='#FFFFFF';
    // golden handle with grip bands
    d.rect(14,1,4,11,Y); d.vline(14,1,11,Y3); d.vline(17,1,11,Y2);
    for(const y of [3,6,9]) d.hline(14,17,y,Y4);
    d.ell(15.5,1,2,1,Y); d.px(15,0,Y3);
    d.rect(15,12,2,2,Y2); d.px(15,12,Y);
    // wide blade
    d.poly([[8,14],[24,14],[25,26],[7,26]],Y);
    d.vline(8,15,25,Y3); d.hline(9,23,14,Y3); d.line(9,15,12,15,S);
    d.vline(24,15,25,Y2);
    for(const x of [11,14,17,20]) d.vline(x,17,22,Y4); // slots
    for(const x of [12,15,18,21]) d.vline(x,17,22,Y2);
    // rock gripping the blade
    d.poly([[2,31],[5,25],[11,23],[21,23],[27,25],[30,31]],R);
    d.poly([[5,25],[11,23],[21,23],[27,25],[23,26],[9,26]],R3);
    d.line(22,27,25,31,R2); d.line(8,27,6,31,R2); d.hline(3,29,31,R2); d.px(14,28,R2); d.px(15,29,R2); d.px(18,28,R2);
    d.hline(8,24,24,R3); d.hline(7,25,25,R3);
    d.outline(O);
    // glow rays + sparkles (no outline)
    for(const [x0,y0,x1,y1] of [[11,9,8,6],[21,9,24,6],[5,15,1,14],[27,15,31,14],[10,4,8,2],[22,4,24,2]]) d.line(x0,y0,x1,y1,Y3);
    d.stamp(26,7,['..y..','..y..','yySyy','..y..','..y..'],{y:Y,S});
    d.stamp(2,8,['.y.','ySy','.y.'],{y:Y,S}); d.px(29,20,Y3); d.px(3,21,Y3);
  },

  // 유령 해적의 양말: 비치는 연두빛 양말, 구멍, 냄새 물결, 유령 꼬리 같은 발끝
  'any:s2-22': d=>{
    const G='#B8F2C8', G2='#86DCA4', G3='#E4FFEC', G4='#58B880', S='#9AE07A', W='#FFFFFF', OL='#3A6A58';
    // sock leg (top) + foot pointing left-down
    d.rect(14,4,11,15,G);
    d.poly([[14,15],[25,15],[25,22],[20,28],[8,28],[5,25],[6,21],[10,19],[14,19]],G);
    d.circ(8,24,4,G);
    // see-through dither
    for(let y=6;y<27;y++)for(let x=5;x<26;x++) if(d.get(x,y)===G && (x+y)%4===0) d.px(x,y,G3);
    // cuff stripes
    d.rect(14,3,11,3,G2); d.hline(14,24,3,G3); d.hline(14,24,8,G2);
    // heel and toe patches
    d.circ(23,22,2.5,G2); d.circ(6,25,2.2,G2);
    // holes
    d.clear(21,17); d.clear(22,17); d.clear(21,18);
    d.stamp(16,9,['.www.','wkwkw','wwwww','.w.w.','k...k','.k.k.','..k..','.k.k.'],{w:'#FFFFFF',k:'#3A6A58'}); // pirate skull
    d.clear(12,23); d.clear(13,23); d.clear(12,24);
    // shadow side
    d.vline(24,6,20,G4); d.hline(9,20,27,G4);
    d.outline(OL);
    // stink waves
    for(const [x,y] of [[2,8],[6,5],[27,10]]){d.px(x,y+4,S); d.px(x+1,y+3,S); d.px(x,y+2,S); d.px(x+1,y+1,S); d.px(x,y,S)}
    d.stamp(28,2,['.w.','wWw','.w.'],{w:G2,W});
    for(const [x,y] of [[4,18],[28,28],[29,16],[2,29],[12,8]]) d.px(x,y,G3);
  },

  // ---------------- postcards ----------------

  // 집게리아 카운터: 나무 벽, 둥근 창 밖 바다, 메뉴판, 카운터 위 게살버거와 동전, 계산대
  'any:c0-20': d=>{
    const WD='#B87A44', WD2='#9A5E30', WD3='#D49A5E', FL='#C88A50', FL2='#A86E3A', SEA='#4AA8E0', SEA2='#7FC8F0', RG='#8A8F9E', RG2='#B8BCC8';
    // plank wall
    d.rect(0,0,64,24,WD); for(let x=0;x<64;x+=6){d.vline(x,0,23,WD2); d.vline(x+1,0,23,WD3)}
    d.hline(0,63,0,WD2); d.hline(0,63,23,'#7A4824');
    // portholes with sea + flower
    for(const cx of [10]){ d.circ(cx,9,5,RG); d.circ(cx,9,4,SEA); d.ell(cx,11,4,1,SEA2); d.px(cx-2,7,'#FFFFFF'); d.ring(cx,9,4.6,RG2); for(const [a,b] of [[0,-5],[0,5],[-5,0],[5,0]]) d.px(cx+a,9+b,'#5E6270'); }
    flower(d,11,8,2,'#8ADCC0','#E6FFF4'); 
    // menu board
    d.rect(22,2,22,11,'#3A3A4A'); d.frame(22,2,22,11,'#7A4824');
    d.stamp(24,4,['ww.www.ww.www','...........','ww.ww..www.ww','...........','www.ww.ww.www'],{w:'#FFFFFF'});
    d.stamp(38,4,['yy','yy','..','yy','..'],{y:'#F8D048'});
    // ship wheel decoration
    d.ring(51,7,3,'#7A4824'); d.px(51,7,'#7A4824'); for(const [a,b] of [[0,-4],[0,4],[-4,0],[4,0],[-3,-3],[3,3],[-3,3],[3,-3]]) d.px(51+a,7+b,'#7A4824');
    // floor
    d.rect(0,24,64,16,FL); for(let y=26;y<40;y+=3) d.hline(0,63,y,FL2); for(let y=24;y<40;y+=3) for(let x=(y*7)%11;x<64;x+=11) d.px(x,y+1,FL2);
    // counter (right side, front)
    d.rect(26,22,38,3,'#E2D2B0'); d.hline(26,63,22,'#FFF2D6'); d.hline(26,63,24,'#B8A47E');
    d.rect(27,25,37,13,'#2E8AA8'); d.hline(27,63,25,'#1E6A88');
    for(let x=29;x<64;x+=6) d.rect(x,27,4,9,'#3AA2C0'); d.hline(27,63,37,'#1E5A78');
    // life ring on counter front
    d.ring(45,31,3,'#FFFFFF'); d.ring(45,31,2.2,'#E04848'); d.px(45,28,'#E04848'); d.px(45,34,'#E04848');
    // cash register (boat-shaped, red-ish)
    d.poly([[52,21],[63,21],[63,13],[55,13]],'#D84848'); d.rect(56,14,6,3,'#2A3A2A'); d.stamp(57,15,['yy.y'],{y:'#8ADC6A'}); d.stamp(55,18,['w.w.w.w','.......'],{w:'#FFF2D6'}); d.hline(55,63,13,'#F07070');
    d.hline(52,63,21,'#A82C36'); d.rect(57,10,4,2,'#5E6270');
    // krabby patty on tray
    d.rect(32,20,10,2,'#E8E0C8');
    d.ell(37,17,4,2,'#E0A050'); d.hline(33,41,18,'#6ACB3A'); d.hline(33,41,19,'#7A3A20'); d.hline(34,40,20,'#E0A050'); d.px(35,16,'#FFF2C8'); d.px(38,16,'#FFF2C8');
    // coins: stack and a single coin, plus an empty slot outline (one short)
    d.stamp(44,18,['.yy.','yYYy','.yy.','yYYy','.yy.'],{y:'#E0A82E',Y:'#F8D048'});
    
    d.stamp(48,17,['.oo.','o..o','o..o','.oo.'],{o:'#FFF2D6'}); // dotted spot where the missing coin should be
    // bubble drifting
    bubble(d,24,16,1,'#BFEAF8'); d.px(26,13,'#BFEAF8');
    d.recolor('#E6FFF4','#FFFFFF'); d.recolor('#7FC8F0','#BFEAF8'); d.recolor('#F07070','#E04848'); d.recolor('#FFF2C8','#FFF2D6'); d.recolor('#E8E0C8','#E2D2B0'); d.recolor('#6ACB3A','#8ADC6A'); d.recolor('#A82C36','#7A3A20'); d.recolor('#1E5A78','#1E6A88'); d.recolor('#B8BCC8','#E2D2B0'); d.recolor('#A86E3A','#9A5E30');
  },

  // 징징이네 집 앞: 모아이 석상 집, 창에서 음표, 뒤에 파인애플 집, 멀리 바위 집, 하늘 꽃 무늬 바다
  'any:c0-22': d=>{
    d.grad(0,0,64,26,['#3A8ED6','#4A9EDE','#5AAEE4','#6ABCEA','#7CC8EE']);
    flower(d,8,5,4,'#66C8D8','#9AE6EE'); flower(d,26,9,3,'#7AD0B0','#B6F0D8'); flower(d,40,3,3.5,'#A0A8E8','#D0D4FF'); flower(d,60,9,3,'#66C8D8','#9AE6EE');
    for(const [x,y,r] of [[18,4,1],[33,13,1],[49,2,0],[3,14,1],[29,3,0]]) bubble(d,x,y,r,'#CFF0FF');
    // sand
    sand(d,26,'#F2DCA0','#E2C47E','#FFF0C8');
    d.hline(0,63,26,'#E2C47E');
    // Patrick's rock far left behind (above pet area)
    d.ell(26,25,4,4,'#8A6A58'); d.ell(25,24,3,2,'#A6826C'); d.hline(22,30,26,'#C8A870'); d.vline(26,18,21,'#6A4E40'); d.px(27,18,'#6A4E40');
    // SpongeBob pineapple (right edge)
    d.ell(58,24,6,9,'#F2A22A'); d.ell(57,23,4,7,'#F8BC48');
    for(let y=17;y<33;y+=3) for(let x=53;x<64;x+=3) d.px(x+((y/3)%2?1:0),y,'#C8781A');
    for(const [a,b] of [[56,6],[58,4],[60,6],[54,9],[62,9]]) d.line(58,15,a,b,'#4AA84A'); d.line(58,15,58,5,'#6ACB3A');
    d.ell(58,30,2,3,'#8A9AB8'); d.px(58,28,'#6A7A98'); d.circ(55,21,1.4,'#7AC8F0'); d.px(55,21,'#3A6EC8');
    // Squidward's moai house (center)
    const S='#4E6E9A', S2='#3A5480', S3='#6A8AB8', S4='#2C3E60';
    d.rect(34,8,14,25,S); d.rect(34,6,14,2,S);
    d.vline(34,6,32,S3); d.vline(35,6,32,S3); d.vline(47,6,32,S2);
    d.rect(31,12,3,8,S2); d.rect(48,12,3,8,S2); d.vline(31,13,18,S4); d.vline(50,13,18,S4); // ears
    d.rect(35,11,12,2,S4); // brow
    // window eyes
    d.rect(36,13,3,3,'#FFE27A'); d.rect(43,13,3,3,'#FFE27A'); d.hline(36,38,13,'#F8D048'); d.hline(43,45,13,'#F8D048'); d.px(37,14,S4); d.px(44,14,S4);
    // long nose
    d.rect(40,13,2,11,S3); d.rect(39,21,4,3,S3); d.vline(42,13,23,S2); d.hline(39,42,24,S4);
    // door mouth
    d.rect(38,27,6,6,'#7A5A3A'); d.rect(38,26,6,1,S4); d.px(42,30,'#F8D048'); d.vline(41,27,32,'#5E4228');
    d.hline(33,48,33,'#C8A870');
    // music notes from window
    d.stamp(25,8,['..nn','..n.','..n.','nnn.','nn..'],{n:'#2A2433'});
    d.stamp(48,2,['nnn','n.n','n.n','n.n'],{n:'#2A2433'}); d.px(47,6,'#2A2433'); d.px(50,6,'#2A2433'); d.px(46,5,'#2A2433'); d.px(49,5,'#2A2433');
    d.stamp(30,4,['.n','.n','nn'],{n:'#2A2433'});
    // kelp and shells
    for(const [x,h] of [[3,7],[52,6]]) for(let i=0;i<h;i++) d.px(x+(i%2),33-i,'#3AA84A');
    d.stamp(27,35,['.ss.','ssss'],{s:'#F07AA8'}); d.px(48,37,'#FFFFFF'); d.px(60,36,'#C8781A');
    d.recolor('#FFE27A','#F8D048'); d.recolor('#D0D4FF','#CFF0FF'); d.recolor('#B6F0D8','#9AE6EE'); d.recolor('#4AA84A','#3AA84A'); d.recolor('#6ACB3A','#3AA84A'); d.recolor('#7CC8EE','#6ABCEA'); d.recolor('#7AC8F0','#6ABCEA'); d.recolor('#3A6EC8','#3A5480'); d.recolor('#6A4E40','#5E4228'); d.recolor('#FFF0C8','#FFFFFF'); d.recolor('#6A7A98','#6A8AB8'); d.recolor('#7AD0B0','#66C8D8');
  },

  // 다람이네 나무 돔: 유리 돔 안의 잔디와 큰 참나무, 돔 밖은 바다, 바닥엔 공기 헬멧
  'any:c1-20': d=>{
    // outside water
    d.grad(0,0,64,40,['#2E7EC8','#3A8ED6','#4A9EDE','#5AAEE4']);
    flower(d,4,4,3.5,'#66C8D8','#9AE6EE'); flower(d,60,5,3,'#A0A8E8','#D0D4FF'); flower(d,2,30,3,'#7AD0B0');
    // dome interior (air): big ellipse
    d.ell(34,38,38,36,'#CFEFF6');
    d.ell(34,38,36,34,'#E2F7EE');
    // grass ground inside
    d.rect(0,25,64,15,'#6ACB5A'); for(let x=0;x<64;x+=2) d.px(x,25-(x%4?0:1),'#6ACB5A');
    for(let i=0;i<40;i++) d.px(d.ri(0,63),d.ri(27,39),d.rnd()<.5?'#4AAA48':'#8ADC6A');
    d.hline(0,63,24,'#8ADC6A');
    // oak tree trunk + canopy
    d.rect(40,14,7,13,'#9A6A3A'); d.vline(40,14,26,'#B8864E'); d.vline(46,14,26,'#7A4E28');
    d.poly([[38,27],[40,22],[40,27]],'#9A6A3A'); d.poly([[47,22],[49,27],[46,27]],'#7A4E28');
    d.ell(43,21,1,2,'#4A2E18'); // knot hole
    d.ell(43,8,15,7,'#3E9A3E'); d.ell(36,10,7,5,'#3E9A3E'); d.ell(51,10,7,5,'#3E9A3E');
    d.ell(42,6,12,5,'#56B44A'); d.ell(36,5,5,3,'#6ACB5A'); d.ell(49,5,5,3,'#6ACB5A');
    d.line(42,14,35,11,'#7A4E28'); d.line(45,14,51,11,'#7A4E28');
    for(const [x,y] of [[34,9],[48,8],[42,3],[53,11]]) d.px(x,y,'#E04848'); // acorn-ish fruit
    // glass dome edge + glare
    d.ring(34,38,37,'#9FD8EA'); d.ring(34,38,36,'#FFFFFF');
    d.line(8,14,13,8,'#FFFFFF'); d.line(9,16,14,10,'#FFFFFF'); d.line(56,8,59,12,'#FFFFFF');
    // bubbles outside
    for(const [x,y,r] of [[6,12,1],[62,18,1],[57,1,0],[1,19,0]]) bubble(d,x,y,r,'#CFF0FF');
    // picnic stuff: air helmet resting on grass, right
    d.circ(56,30,4,'#CFF0FF'); d.ring(56,30,4,'#9ED8F2'); d.rect(52,33,9,2,'#F2F2F6'); d.hline(52,60,35,'#BFC3D0'); d.px(54,28,'#FFFFFF'); d.px(55,27,'#FFFFFF');
    flower(d,56,25,1.6,'#F27AA8'); d.px(56,25,'#FFE27A');
    // small flowers in grass
    for(const [x,y,c] of [[27,33,'#FFE27A'],[33,36,'#F27AA8'],[60,38,'#FFFFFF'],[30,29,'#FFFFFF']]){d.px(x,y,c); d.px(x-1,y,c); d.px(x+1,y,c); d.px(x,y-1,c); d.px(x,y,'#F8A030')}
  },

  // 버블 볼 하프타임: 밤 바다 경기장, 무대 위 기타와 스피커, 조명 빔, 관중석 불빛, 잔디 필드
  'any:c1-22': d=>{
    d.grad(0,0,64,12,['#121838','#18204A','#1E285A','#24306A']);
    flower(d,6,4,3,'#2A3C7E','#3A50A0'); flower(d,22,3,2.5,'#34387E'); flower(d,62,4,2.5,'#2A3C7E');
    for(const [x,y,r] of [[14,6,1],[18,2,0],[27,8,0]]) bubble(d,x,y,r,'#5A6AA0','#9AA8D8');
    // stands with crowd heads + light-sticks
    d.rect(0,11,64,10,'#33294A'); d.hline(0,63,11,'#4E4268');
    for(let y=13;y<21;y+=2) for(let x=(y%4);x<64;x+=3) d.px(x,y,['#F8C8A0','#F2A060','#F8D048','#E6E0D8'][(x*3+y)%4]);
    for(let x=1;x<64;x+=7){ d.px(x,12,'#7AE0F0'); d.px(x+3,12,'#F07AA8'); }
    // field
    d.rect(0,21,64,19,'#3A9A48'); for(let y=21;y<40;y+=4) d.rect(0,y,64,2,'#46AA52');
    for(const x of [3,25]) d.vline(x,22,39,'#E6F4E6');
    // stage truss arch with lamps
    const T='#9AA0B4';
    d.vline(31,3,27,T); d.vline(62,3,27,T); d.hline(31,62,3,T); d.hline(31,62,5,T);
    for(let x=32;x<62;x+=2) d.px(x,4,(x/2)%2?T:'#5E6270');
    // backdrop
    d.rect(32,6,30,21,'#2A1E46'); for(let x=34;x<62;x+=4) d.vline(x,6,26,'#32265A');
    // spotlight cones (dither)
    for(const cx of [39,54]){ d.rect(cx-1,6,3,1,'#FFF2A8'); for(let y=7;y<27;y++){const w=Math.floor((y-6)/3); for(let x=cx-w;x<=cx+w;x++) if((x+y)%2===0) d.px(x,y,'#5A4A8A')} }
    // stage platform
    d.rect(29,27,35,3,'#C8CCD8'); d.hline(29,63,27,'#E6E8F0'); d.rect(29,30,35,7,'#4E5468'); for(let x=31;x<64;x+=4) d.vline(x,30,36,'#3A4054'); d.hline(29,63,37,'#2A2E3E');
    for(let x=31;x<64;x+=5) d.px(x,28,['#F07AA8','#7AE0F0','#F8D048'][x%3]);
    // speakers
    for(const x of [33,55]){ d.rect(x,15,7,12,'#1A1622'); d.circ(x+3,19,2,'#5E6270'); d.px(x+3,19,'#1A1622'); d.circ(x+3,24,1.4,'#5E6270'); d.hline(x,x+6,15,'#3A3448'); }
    // big electric guitar on a stand
    const R='#E04848', R2='#9A2030', N='#9A6A3A', N2='#6A4420';
    d.rect(46,6,2,13,N); d.vline(47,6,18,N2); for(const y of [9,12,15]) d.px(46,y,'#F2EAD2');
    d.rect(45,2,4,4,'#2A2433'); d.px(44,3,'#C8CCD8'); d.px(44,5,'#C8CCD8'); d.px(49,3,'#C8CCD8'); d.px(49,5,'#C8CCD8');
    d.ell(46,23,5,3,R2); d.ell(45,19,3,2,R2); d.ell(48,19,3,2,R2);
    d.ell(46,23,4,2,R); d.ell(45,19,2,1,R); d.ell(48,19,2,1,R); d.rect(43,19,7,4,R);
    d.rect(44,20,5,3,'#F2F2F6'); d.hline(45,47,20,'#2A2433'); d.hline(45,47,22,'#2A2433'); d.px(43,19,'#FF8A8A'); d.px(42,22,'#FF8A8A');
    d.line(42,26,44,25,'#5E6270'); d.line(50,26,48,25,'#5E6270');
    // notes + confetti
    d.stamp(17,3,['..nn','..n.','nnn.','nn..'],{n:'#FFE27A'}); d.stamp(25,5,['nnn','n.n','n.n','..n'],{n:'#FFE27A'}); d.px(24,8,'#FFE27A');
    for(const [x,y,c] of [[36,1,'#F07AA8'],[41,0,'#7AC8F0'],[52,1,'#F8D048'],[58,0,'#8ADC6A'],[28,1,'#F07AA8'],[10,9,'#7AC8F0'],[44,9,'#F8D048'],[51,12,'#F07AA8'],[37,13,'#8ADC6A']]) d.px(x,y,c);
    d.recolor('#FFE27A','#F8D048'); d.recolor('#9AA8D8','#9AA0B4'); d.recolor('#F2F2F6','#F2EAD2'); d.recolor('#E6E0D8','#F2EAD2'); d.recolor('#3A3448','#33294A'); d.recolor('#34387E','#2A3C7E'); d.recolor('#2A2E3E','#2A2433'); d.recolor('#3A4054','#33294A'); d.recolor('#E6E8F0','#E6F4E6'); d.recolor('#1A1622','#2A2433'); d.recolor('#7AE0F0','#7AC8F0'); d.recolor('#32265A','#33294A'); d.recolor('#4E4268','#5A4A8A'); d.recolor('#6A4420','#9A2030'); d.recolor('#3A50A0','#2A3C7E');
  },

  // 뉴 켈프 시티: 노을빛 물속 빌딩 숲, 'KELP' 간판 아래 해초 없는 화분, 말라버린 해초 그루터기
  'any:c2-20': d=>{
    d.grad(0,0,64,26,['#3A5E9A','#4E6EA8','#6A7EB4','#8A8CBC','#B09AC0','#D8A8B8']);
    flower(d,6,4,3,'#7A90C8','#A8B8E8'); flower(d,20,10,2.5,'#C8A0C8','#E8C8E8'); flower(d,40,3,2.5,'#7A90C8');
    // far skyline
    for(const [x,w,h] of [[24,5,10],[30,4,14],[35,6,9],[45,4,16],[50,6,11],[57,7,13]]) d.rect(x,24-h,w,h,'#5A5A86');
    // near buildings
    const blds=[[27,7,15,'#7A6A9A'],[35,8,19,'#8A5A7A'],[44,6,22,'#5E6A9E'],[51,7,14,'#9A7A8E'],[58,6,18,'#6E5E8E']];
    for(const [x,w,h,c] of blds){ d.rect(x,26-h,w,h,c); d.hline(x,x+w-1,26-h,'#C8B8D8'); for(let y=28-h;y<24;y+=3) for(let xx=x+1;xx<x+w-1;xx+=2) d.px(xx,y,(xx*y)%5?'#FFE27A':'#3A3458'); }
    // antenna on tallest
    d.vline(47,0,3,'#C8B8D8'); d.px(47,0,'#E04848');
    // road / pavement
    d.rect(0,26,64,14,'#B8A8A0'); d.hline(0,63,26,'#D8C8C0');
    d.rect(0,35,64,5,'#6A6470'); for(let x=2;x<64;x+=8) d.hline(x,x+3,37,'#F8D048');
    for(let x=0;x<64;x+=6) d.vline(x,27,34,'#A89890');
    // welcome sign with kelp icon, center-right
    d.vline(29,22,33,'#5E4228'); d.vline(39,22,33,'#5E4228');
    d.rect(25,15,19,8,'#3A8A5A'); d.frame(25,15,19,8,'#2A5A3A'); d.stamp(27,17,['k.k.kkk.k...kkk','kk..kk..k...k.k','k.k.kkk.kkk.kkk','k.k.kkk.kkk.k..'],{k:'#FFFFFF'});
    d.px(43,14,'#2A5A3A'); d.px(25,23,'#2A5A3A');
    d.stamp(28,17,['.'],{});
    // empty planters (no kelp) with dry stubs
    for(const x of [44,54]){ d.rect(x,29,6,4,'#C86A3A'); d.hline(x,x+5,29,'#E08A5A'); d.rect(x+1,28,4,1,'#6A4A30'); d.px(x+2,27,'#A8904A'); d.px(x+3,26,'#A8904A'); }
    // dried kelp leaf on ground
    d.stamp(48,33,['..aa','.aa.','aa..'],{a:'#A8904A'});
    // bubbles
    for(const [x,y,r] of [[14,14,1],[22,3,0],[60,2,1],[4,18,0]]) bubble(d,x,y,r,'#E8D8F0');
    d.recolor('#E8D8F0','#E8C8E8'); d.recolor('#A8B8E8','#C8B8D8'); d.recolor('#5E6A9E','#5A5A86'); d.recolor('#6E5E8E','#7A6A9A'); d.recolor('#9A7A8E','#8A5A7A'); d.recolor('#A89890','#B8A8A0'); d.recolor('#6A4A30','#5E4228'); d.recolor('#7A90C8','#6A7EB4'); d.recolor('#E08A5A','#E04848');
  },

  // 아틀란티스: 깊은 물속 황금 신전, 기둥과 돔, 받침대 위 세상에서 가장 오래된 무지갯빛 비눗방울
  'any:c2-22': d=>{
    d.grad(0,0,64,30,['#0E2A5A','#14366E','#1C4482','#245296','#2C60A8']);
    // light rays
    for(const x0 of [20,34,48]) for(let y=0;y<26;y++) if((y+x0)%2===0) d.px(x0+Math.floor(y/3),y,'#3A72B8');
    flower(d,6,4,3,'#2E5A98','#4A78B8'); flower(d,58,4,3,'#3A4A98','#5A6AC0'); flower(d,26,6,2,'#2E5A98');
    // seafloor
    sand(d,30,'#3E5E8A','#2E4E78','#56769E'); d.hline(0,63,30,'#5A7AA8');
    // temple: steps, columns, roof, dome
    const Gd='#E0B848', Gd2='#B88A2E', Gd3='#F8E08A', St='#D8D0B8', St2='#A8A08A';
    d.rect(26,30,38,3,St2); d.rect(28,28,36,2,St); d.hline(28,63,28,'#F2EAD2');
    for(const x of [30,37,52,59]){ d.rect(x,14,3,14,St); d.vline(x,14,27,'#F2EAD2'); d.vline(x+2,14,27,St2); d.rect(x-1,13,5,1,Gd); d.rect(x-1,27,5,1,Gd2); }
    d.rect(28,10,36,3,Gd); d.hline(28,63,10,Gd3); d.hline(28,63,12,Gd2);
    d.poly([[28,10],[46,4],[64,10]],Gd); d.line(28,10,46,4,Gd3); d.line(46,4,63,10,Gd3);
    d.ell(46,4,6,4,Gd); d.ell(45,3,4,2,Gd3); d.rect(40,4,13,6,Gd); d.hline(40,52,9,Gd2); d.vline(46,0,1,Gd);
    d.ell(46,6,2,1,Gd2);
    // pedestal with the oldest bubble (center, between columns)
    d.rect(43,24,7,4,St); d.hline(43,49,24,'#F2EAD2'); d.hline(43,49,27,St2); d.rect(44,23,5,1,Gd);
    d.circ(46,18,5,'#3A6AB0'); d.ring(46,18,5,'#BFEAF8');
    d.px(44,14,'#F07AA8'); d.px(43,15,'#F07AA8'); d.px(50,17,'#8ADC6A'); d.px(50,19,'#F8E08A'); d.px(47,23,'#B8A8F8'); d.px(42,20,'#8ADC6A');
    d.px(44,16,'#FFFFFF'); d.px(43,17,'#FFFFFF');
    // glow sparkles
    for(const [x,y] of [[40,15],[53,21],[41,22]]) d.px(x,y,Gd3);
    // ruins: broken column on sand right foreground + scattered gold
    d.rect(56,34,6,3,St); d.hline(56,61,34,'#F2EAD2'); d.rect(25,34,3,2,St2);
    d.stamp(30,36,['.y.','yYy'],{y:Gd2,Y:Gd3});
    // rising bubbles
    for(const [x,y,r] of [[16,10,1],[13,4,1],[22,14,0],[35,2,0],[60,16,1]]) bubble(d,x,y,r,'#8AC0E8','#FFFFFF');
    // coral
    d.stamp(1,24,['p.p.','pp.p','.pp.','..p.','..p.','..p.'],{p:'#E06A9A'});
  },
};
