// n5: shared gifts (any pet), Bikini Bottom theme. Souvenirs 32x32, postcards 64x40.
const O='#2A2433';

// --- helpers ---
// sky-flower (Bikini Bottom water pattern): 5 round petals + center
const flower=(d,cx,cy,r,c,cc)=>{
  for(let k=0;k<5;k++){const a=k*2*Math.PI/5-Math.PI/2; d.circ(cx+Math.cos(a)*r,cy+Math.sin(a)*r,r*.55,c)}
  d.circ(cx,cy,r*.6,c); if(cc) d.px(cx,cy,cc);
};
// small flower stamp (5x5) for tiny ones
const flowerS=(d,x,y,c,cc)=>d.stamp(x,y,['.c.c.','ccccc','.cmc.','ccccc','.c.c.'],{c,m:cc||c});
const bubble=(d,x,y,r,c='#DFF6FF',h='#FFFFFF')=>{ if(r<=1){d.stamp(x-1,y-1,['.b.','b.b','.b.'],{b:c}); d.px(x-1,y-1,h)} else {d.ring(x,y,r,c); d.px(x-1,y-r+1,h)} };
const sandFloor=(d,y0,c1,c2,c3,n=40)=>{ d.rect(0,y0,64,40-y0,c1); for(let i=0;i<n;i++) d.px(d.ri(0,63),d.ri(y0+1,39),d.rnd()<.5?c2:c3) };
// pineapple house
const pineapple=(d,x,y,s=1)=>{ // x,y = bottom center
  const P='#F0A030', P2='#C87818', P3='#FFC850', L='#3EA040', L2='#2A7A30';
  const w=6*s, h=9*s;
  d.ell(x,y-h,w,h,P);
  for(let j=y-2*h;j<=y;j++)for(let i=x-w-1;i<=x+w+1;i++) if(d.get(i,j)===P && ((i+j)%4===0||(i-j+400)%4===0)) d.px(i,j,P2);
  d.px(x-w+2,y-h-2,P3); d.px(x-w+2,y-h-1,P3);
  // leaves
  d.poly([[x-1,y-2*h+1],[x-5*s,y-2*h-5*s],[x,y-2*h-1]],L); d.poly([[x+1,y-2*h+1],[x+5*s,y-2*h-5*s],[x,y-2*h-1]],L);
  d.poly([[x-1,y-2*h+1],[x,y-2*h-7*s],[x+1,y-2*h+1]],L2);
  return {P,P2};
};

export default {
  // 집게리아 뒤집개: 반질반질한 금속 뒤집개, 손때 묻은 나무 손잡이, 하트와 반짝임
  'any:s0-21': d=>{
    const S1='#E6EEF4', S2='#B8C6D2', S3='#8696A8', S4='#FFFFFF', H='#9A5A30', H2='#C07A40', H3='#6E3C1E', Rv='#5A6878';
    // blade (tilted square-ish with rounded corners)
    d.poly([[3,4],[16,2],[19,15],[6,18]],S2);
    d.poly([[4,5],[15,3],[16,8],[5,10]],S1);
    d.line(6,18,19,15,S3); d.line(19,15,16,2,S3); d.line(18,14,15,3,S3);
    // slots
    for(const k of [0,1,2]){ d.line(7+k*3,7-0+(-k*0),8+k*3,14,Rv); d.line(8+k*3,7,9+k*3,14,S3) }
    // shine streaks (worn shiny)
    d.line(4,6,7,5,S4); d.px(5,8,S4); d.px(13,4,S4); d.px(14,4,S4);
    // neck
    d.poly([[11,16],[15,15],[18,21],[16,22]],S3); d.line(12,16,16,21,S2);
    // handle (wood, worn lighter in grip)
    d.poly([[16,21],[19,20],[29,29],[27,31]],H);
    d.line(17,21,27,30,H2); d.line(18,21,26,28,H2);
    d.line(19,20,29,29,H3);
    d.px(22,24,'#E0A060'); d.px(23,25,'#E0A060'); // worn spot
    d.circ(27,29,1,H3); d.px(27,29,'#3A2010'); // hang hole
    // rivets
    d.px(17,21,'#DDE4EA'); d.px(19,23,'#DDE4EA');
    d.outline(O);
    // little heart + sparkles
    d.stamp(23,8,['.r.r.','rrrrr','rrrrr','.rrr.','..r..'],{r:'#F05A78'}); d.px(24,9,'#FFB0C0');
    d.stamp(1,20,['.y.','yWy','.y.'],{y:'#F8D048',W:'#FFFFFF'});
    d.stamp(20,0,['.y.','yWy','.y.'],{y:'#F8D048',W:'#FFFFFF'});
    d.px(10,22,'#F8D048'); d.px(29,15,'#F8D048');
  },

  // 핑핑이 껍데기 광택제: 분홍 약병, 라벨에 핑핑이 껍데기 소용돌이, 반짝이는 작은 껍데기
  'any:s0-23': d=>{
    const B='#8ED0E8', B2='#5AA8CC', B3='#C8EEF8', L='#F07CA8', L2='#C24C80', C='#E04870', C2='#A82A52', W='#FFF6E4', Sp='#F4A6C4', Sp2='#C0507C';
    // cap (spray-pump-like)
    d.rect(10,2,8,3,C); d.hline(10,17,4,C2); d.rect(12,5,4,2,C2); d.rect(16,2,4,2,C); d.px(11,2,'#F890A8');
    // bottle
    d.rect(8,7,12,22,B); d.ell(14,8,6,2,B); d.rect(8,26,12,3,B2);
    d.vline(18,9,28,B2); d.vline(19,9,28,B2);
    // pink polish liquid
    d.rect(8,13,12,15,L); d.vline(18,13,27,L2); d.vline(19,13,27,L2); d.hline(8,19,13,'#F8A0C4');
    // highlight
    d.vline(9,8,26,B3); d.vline(10,9,11,B3);
    // label
    d.rect(9,16,9,9,W); d.frame(9,16,9,9,'#D8C8A8');
    // Gary-shell swirl on label
    d.stamp(10,17,['.sssss.','ss...ss','s..S..s','s.SSs.s','s.s...s','ss..ss.','.ssss..'],{s:Sp2,S:Sp2});
    d.stamp(11,18,['.....','.ppp.','.p...','..pp.','.....'],{p:Sp});
    d.outline(O);
    // little shiny shell beside
    d.ell(25,26,5,4,Sp); d.ring(25,26,3,Sp2); d.px(25,26,Sp2); d.px(26,25,Sp2);
    d.px(22,23,'#FFFFFF'); d.px(23,23,'#FFFFFF');
    d.rect(20,29,11,1,'#C8F0A0'); // Gary's body peeking? -> slime trail
    d.hline(20,30,29,'#B0E0F0');
    for(const [x,y] of [[22,28],[28,28]]) d.px(x,y,Sp);
    // outline shell area only
    for(let y=20;y<32;y++)for(let x=20;x<32;x++) if(!d.get(x,y)&&[[1,0],[-1,0],[0,1],[0,-1]].some(([a,b])=>{const g=d.get(x+a,y+b);return g&&g!==O&&x+a>=20})) d.px(x,y,O);
    // sparkles + meow sign
    d.stamp(23,13,['..y..','..y..','yyWyy','..y..','..y..'],{y:'#F8E070',W:'#FFFFFF'});
    d.stamp(27,19,['.y.','yWy','.y.'],{y:'#F8E070',W:'#FFFFFF'});
    d.px(3,10,'#F8E070'); d.px(4,20,'#F8E070'); d.px(2,15,'#FFFFFF');
  },

  // 징징이 클라리넷 리드: 갈색 클라리넷(은색 키)에서 쏙 빠진 커다란 리드, 삑! 지그재그
  'any:s1-21': d=>{
    const K='#6A4430', K2='#8A5E40', K3='#4A2C1E', M='#D8DEE6', M2='#9AA2B0', Mp='#2E2A30', R1='#F6DFA0', R2='#E2BE6C', R3='#B88E44', R4='#FFF4CC';
    // clarinet body, diagonal from bell (bottom-left) to mouthpiece (up-right)
    const x0=6,y0=27,x1=22,y1=11;
    for(let t=0;t<=1;t+=.01){const x=x0+(x1-x0)*t, y=y0+(y1-y0)*t; d.circ(x,y,1.6,K)}
    d.line(x0-1,y0-2,x1-2,y1-1,K2); d.line(x0+2,y0+1,x1+1,y1+2,K3);
    // bell
    d.poly([[0,25],[6,31],[10,28],[3,21]],K); d.line(0,25,6,31,K3); d.line(1,25,6,30,K3); d.line(1,24,4,21,K2);
    // silver keys + rings
    for(const t of [.2,.42,.64]){const x=Math.round(x0+(x1-x0)*t), y=Math.round(y0+(y1-y0)*t); d.line(x-1,y-1,x+1,y+1,M)}
    for(const t of [.3,.52,.74]){const x=Math.round(x0+(x1-x0)*t), y=Math.round(y0+(y1-y0)*t); d.px(x,y,M2); d.px(x+1,y-1,M)}
    // mouthpiece (black) + ligature, reed missing (empty slot)
    d.poly([[21,10],[23,12],[28,7],[26,5]],Mp); d.line(22,11,27,6,'#5A5560');
    d.line(20,11,23,14,M); d.line(21,10,24,13,M2);
    d.px(27,5,Mp); d.px(28,6,'#F0E0B0');
    // the reed, floating big (horizontal): flat butt left, thin rounded tip right
    d.rect(3,3,15,5,R2); d.rect(17,4,2,3,R2); d.px(19,5,R2); d.px(19,4,R2); d.px(19,6,R2); d.px(20,5,R2);
    d.rect(3,3,15,1,R4); d.rect(3,4,8,2,R1); d.hline(11,17,5,R1);
    d.hline(3,18,7,R3); d.px(19,6,R3);
    d.line(11,4,17,5,R4); // vamp cut
    d.vline(3,3,7,R3);
    d.px(6,6,R3); d.px(8,5,R3);
    d.outline(O);
    // motion lines from reed toward mouthpiece
    d.px(21,9,'#C8D0E0'); d.px(19,10,'#C8D0E0');
    // squeak zigzag
    d.stamp(22,0,['y...y...','.y.y.y.y','..y...y.'],{y:'#F05A5A'});
    d.stamp(22,16,['.nnnnn','.n...n','.n...n','nn..nn','nn..nn'],{n:'#7A6AC8'});
    d.stamp(28,23,['.w.','wWw','.w.'],{w:'#F8E070',W:'#FFFFFF'});
  },

  // 비키니 시티 라디오: 하늘색 레트로 라디오, 스피커에 게살버거 무늬, 음표가 퐁퐁
  'any:s1-23': d=>{
    const B='#4CB8C8', B2='#2E8A9E', B3='#8ADCE4', G='#F4E6C4', G2='#C8B48A', Bn='#E6A040', Bn2='#B87020', Pt='#7A4420', Le='#5CC048', Ch='#F8D040', A='#B0B8C4';
    // antenna
    d.line(22,9,28,1,A); d.px(28,1,'#F05A5A'); d.px(29,1,'#F05A5A'); d.px(28,0,'#F05A5A');
    // handle
    d.rect(9,6,14,2,B2); d.rect(9,6,2,5,B2); d.rect(21,6,2,5,B2);
    // body
    d.rect(3,10,26,18,B); d.rect(4,9,24,1,B); d.rect(4,28,24,1,B2);
    d.hline(4,27,10,B3); d.vline(3,11,26,B3);
    d.rect(3,26,26,2,B2);
    // speaker grille (cream circle with dots)
    d.circ(11,18,6,G); d.ring(11,18,6,G2);
    // krabby patty on grille
    d.ell(11,16,4,2,Bn); d.px(9,15,'#FFF0C0'); d.px(12,14,'#FFF0C0'); d.px(13,15,'#FFF0C0');
    d.hline(7,15,18,Le); d.px(6,18,Le); d.hline(7,15,19,Ch); d.hline(7,15,20,Pt);
    d.ell(11,21,4,1,Bn2);
    // dial + tuner
    d.rect(19,13,8,5,'#2A3A44'); d.hline(20,25,15,'#8AF0A0'); d.px(23,14,'#F05A5A'); d.px(23,16,'#F05A5A');
    d.circ(21,22,2,'#F0F0F0'); d.px(21,21,O); d.circ(26,22,1,'#F0F0F0');
    // feet
    d.rect(5,29,3,2,B2); d.rect(24,29,3,2,B2);
    d.outline(O);
    // notes + bubbles
    d.stamp(0,0,['..nn','..n.','..n.','nnn.','nn..'],{n:'#F05A78'});
    d.stamp(13,0,['.nnn','.n.n','nn.n','n.nn','..nn'],{n:'#7A6AC8'});
    d.px(30,8,'#BFEFFF'); d.px(30,12,'#BFEFFF'); d.stamp(29,14,['.b.','b.b','.b.'],{b:'#9AD8F0'});
  },

  // 플랑크톤의 비밀 계획서: 파란 설계도 두루마리, 집게리아 그림에 X, 화살표, 작은 플랑크톤, 3141
  'any:s2-21': d=>{
    const P='#3C6CC0', P2='#2A4E96', P3='#5A8AD8', Wl='#DCEBFF', Rd='#F04848', Gp='#4CB848', Gp2='#2E8A30', Rl='#E8D8A8', Rl2='#B8A070';
    // paper
    d.rect(4,4,24,23,P); d.hline(4,27,26,P2); d.vline(27,4,26,P2);
    // rolled ends top & bottom
    d.rect(2,2,28,3,Rl); d.hline(2,29,4,Rl2); d.hline(3,28,2,'#FFF4D0');
    d.rect(2,26,28,3,Rl); d.hline(2,29,28,Rl2); d.hline(3,28,26,'#FFF4D0');
    // grid
    for(let x=6;x<27;x+=4) for(let y=6;y<26;y++) if(y%2) d.px(x,y,P3);
    // Krusty Krab sketch (trap house w/ windows)
    d.frame(6,13,10,8,Wl); d.line(6,13,11,9,Wl); d.line(11,9,15,13,Wl);
    d.vline(9,15,18,Wl); d.vline(12,15,18,Wl); d.hline(10,11,18,Wl); d.frame(10,15,2,3,Wl);
    // red X target on the formula (bottle)
    d.stamp(19,7,['.ww.','w..w','w..w','.ww.'],{w:Wl});
    d.line(17,5,24,12,Rd); d.line(24,5,17,12,Rd);
    // dashed arrow from plankton to target
    d.stamp(17,14,['.rr.rr.r'],{r:Rd}); d.line(24,14,22,13,Rd); d.line(24,14,22,15,Rd);
    // numbers 3141 tiny
    d.stamp(17,20,['ww.w.w.w.w','.w.w.wwww.','ww.w...w.w'].map(r=>r),{w:Wl});
    // plankton
    d.stamp(7,21,['g...g.','.g.g..','ggggg.','gwWgg.','gwrgg.','ggggg.','g...g.'],{g:Gp,w:'#FFFFFF',W:'#FFFFFF',r:Rd});
    d.outline(O);
    // tiny doomed rain cloud? -> drop a red "fail" mark: sweat drop
    d.stamp(28,8,['.b','bb','bb'],{b:'#9AD8F0'});
    d.px(1,14,'#F8E070'); d.px(30,20,'#F8E070');
  },

  // 공식 친구 인증서: 크림색 증서, 네모 노란 스펀지 얼굴, 빨간 도장 쾅, 리본
  'any:s2-23': d=>{
    const Pp='#FFF6DC', Pp2='#E8D8B0', Bd='#3EA0D8', Y='#F8E050', Y2='#D0B030', Ys='#B8A028', Br='#9A6A30', Tie='#E04040', St='#E03848', St2='#B82838', Rib='#3E8AD8', Rib2='#2A66A8', Gd='#F0C040';
    d.rect(2,3,28,23,Pp); d.frame(3,4,26,21,Bd); d.frame(4,5,24,19,Pp2);
    d.hline(2,29,25,Pp2);
    // title wavy line
    d.hline(9,22,7,'#8A7A60'); d.hline(9,22,8,'#C8B898');
    // spongebob square face
    d.rect(6,10,9,9,Y); d.vline(14,10,18,Y2); d.hline(6,14,18,Y2);
    d.px(7,11,Ys); d.px(13,12,Ys); d.px(8,16,Ys);
    d.stamp(7,11,['.ww.ww.','wbwwbww','.ww.ww.'],{w:'#FFFFFF',b:'#3A86D0'});
    d.px(8,12,O); d.px(11,12,O);
    d.hline(8,12,15,O); d.px(9,16,'#FFFFFF'); d.px(11,16,'#FFFFFF');
    d.rect(6,19,9,2,Br); d.px(10,19,'#FFFFFF'); d.px(10,20,Tie); d.px(9,19,'#FFFFFF'); d.px(11,19,'#FFFFFF');
    // text lines
    d.hline(17,26,11,'#B0A080'); d.hline(17,24,13,'#B0A080'); d.hline(17,26,15,'#B0A080');
    d.hline(6,14,22,'#B0A080');
    d.outline(O);
    // red stamp (tilted circle w/ heart)
    d.ring(22,20,5,St); d.ring(22,20,4,St2);
    d.stamp(20,18,['r.r..','rrrr.','rrrr.','.rr..'].map(s=>s+''),{r:St});
    d.px(25,17,St); d.px(18,23,St);
    // ribbon seal bottom left
    d.poly([[4,26],[7,26],[6,31],[5,29],[3,31]],Rib); d.poly([[8,26],[11,26],[11,31],[9,29],[8,31]],Rib2);
    d.circ(7,25,3,Gd); d.px(6,24,'#FFF0A0'); d.px(7,25,'#C89020');
    // sparkle
    d.stamp(27,0,['.y.','yWy','.y.'],{y:'#F8E070',W:'#FFFFFF'});
  },

  // 미끼식당 앞: 회색 양동이 모양 건물(손잡이 아치), 초록 불빛 문, 문간의 플랑크톤(눈물), 텅 빈 거리, 저 멀리 집게리아
  'any:c0-21': d=>{
    d.grad(0,0,64,25,['#2C78B0','#3584BA','#3E90C4','#489CCC','#54A8D2']);
    flower(d,8,5,3,'#5CB4DC','#F0F4A0'); flower(d,24,12,2,'#6ABEE0'); flowerS(d,58,2,'#74C2E2','#F0F0A0'); flowerS(d,2,16,'#64B6DC');
    // distant Krusty Krab across the street (small)
    d.rect(23,17,9,7,'#9A6A40'); d.poly([[22,17],[27,13],[33,17]],'#7A4A2A'); d.hline(22,33,17,'#5A3A20');
    d.rect(24,19,3,2,'#7ACCE8'); d.rect(29,19,3,2,'#7ACCE8'); d.px(25,19,'#5A3A20'); d.px(25,20,'#5A3A20'); d.px(30,19,'#5A3A20'); d.px(30,20,'#5A3A20'); d.vline(23,17,23,'#7A4A2A'); d.vline(31,17,23,'#7A4A2A'); d.rect(27,21,2,3,'#3A2A1A');
    d.vline(27,10,12,'#5A3A20'); d.rect(25,9,5,2,'#E04848');
    // sand road
    sandFloor(d,24,'#D8CCA0','#C4B888','#E8DEB8',30);
    d.hline(0,63,24,'#B8AC80');
    for(let x=2;x<64;x+=8) d.hline(x,x+3,33,'#F4F0E0');
    // CHUM BUCKET building (metal bucket)
    const M1='#9AA6B0', M2='#7A8692', M3='#BCC6CE', M4='#5C6874', Rv='#E0E6EA';
    // handle arc
    for(let a=0;a<=Math.PI;a+=.02){const x=47+Math.cos(a)*13, y=11-Math.sin(a)*9; d.px(x,y,M4); d.px(x,y+1,M2)}
    d.circ(34,11,1,M4); d.circ(60,11,1,M4);
    d.poly([[33,10],[61,10],[58,36],[36,36]],M1);
    d.poly([[34,11],[38,11],[40,36],[37,36]],M3); d.poly([[56,11],[60,11],[58,36],[55,36]],M2);
    d.ell(47,10,14,2,M3); d.ell(47,10,12,1,M4);
    // bands + rivets
    for(const y of [16,28]){ const l=Math.round(33+(y-10)*3/26), r=Math.round(61-(y-10)*3/26); d.hline(l,r,y,M2); d.hline(l,r,y+1,M4); for(let x=l+2;x<r;x+=4) d.px(x,y,Rv) }
    // door with green glow
    d.rect(43,26,8,10,'#2A3A2A'); d.rect(44,27,6,9,'#3E6A3A'); d.rect(45,28,4,8,'#5AA048'); d.hline(43,50,26,M4);
    // plankton crying in doorway
    d.stamp(45,31,['g.g.','.gg.','gwwg','gwrg','gggg','g..g'],{g:'#3CB040',w:'#FFFFFF',r:'#E03838'});
    d.px(49,33,'#9AE0FF'); d.px(49,35,'#9AE0FF');
    // round glowing window
    for(const x of [40,54]) d.stamp(x-2,19,['.mmm.','mgggm','mgGgm','mgggm','.mmm.'],{m:'#5A6874',g:'#A8F070',G:'#E0FFC0'});
    // sign on pole: little bucket icon
    d.vline(62,14,36,'#5C6874'); d.vline(63,14,36,'#4A5460');
    d.rect(58,2,6,4,'#F0F0F0'); d.poly([[59,3],[63,3],[62,6],[60,6]],'#5C6874');
    // menu board by door
    d.rect(37,30,4,5,'#3A2A1A'); d.rect(38,31,2,3,'#F4F0E0'); d.vline(38,35,36,'#3A2A1A'); d.vline(40,35,36,'#3A2A1A');
    // bubbles
    bubble(d,30,6,1); bubble(d,32,3,1); bubble(d,18,3,2);
  },

  // 퐁퐁 부인 보트 학교: 하얀 배 모양 학교 건물, 벽에 박힌 보트(별), 가시 돋친 공처럼 부푼 선생님, 콘
  'any:c0-23': d=>{
    d.grad(0,0,64,24,['#3A9AD0','#44A4D6','#50AEDC','#5CB8E0','#6AC2E4']);
    flower(d,6,6,3,'#7ACAEA','#F8E080'); flower(d,22,3,2,'#82D0EC'); flowerS(d,28,14,'#78C8EA'); flowerS(d,14,15,'#78C8EA','#F8E080');
    // ground: sand + road
    sandFloor(d,24,'#F0E0A8','#DCCA88','#FFF2C8',25);
    d.hline(0,63,24,'#D8C690');
    d.rect(0,34,64,6,'#8C9AA8'); d.hline(0,63,34,'#6E7C8A'); for(let x=0;x<64;x+=8) d.hline(x,x+3,37,'#F8E070');
    // building (white boat-hull school)
    const Wt='#F4F6F8', Wt2='#D0D8E0', Rd='#E04848', Rd2='#B03030', Bl='#3A7AC8', Bl2='#2A5A9A';
    d.poly([[30,14],[63,14],[63,32],[33,32]],Wt);
    d.rect(30,28,34,4,Rd); d.hline(32,63,32,Rd2); d.vline(62,14,32,Wt2); d.vline(63,14,32,Wt2);
    // cabin/bridge roof
    d.rect(38,6,22,8,Wt); d.rect(36,4,26,3,Bl); d.hline(36,61,6,Bl2); d.vline(59,7,13,Wt2);
    d.rect(41,8,16,3,'#7ACCE8'); d.vline(45,8,10,Wt2); d.vline(49,8,10,Wt2); d.vline(53,8,10,Wt2);
    // flagpole
    d.vline(48,0,3,'#5A5A5A'); d.rect(49,0,4,2,Rd);
    // portholes
    for(const x of [44,52,59]) d.stamp(x-2,18,['.mmm.','mgggm','mWggm','mgggm','.mmm.'],{m:'#8E9AA8',g:'#7ACCE8',W:'#FFFFFF'});
    // big anchor emblem
    d.stamp(35,16,['..a..','.aaa.','..a..','..a..','a.a.a','.aaa.'],{a:Bl2});
    // door
    d.rect(48,24,6,8,Bl); d.rect(49,25,4,7,Bl2); d.px(52,28,'#F8E070');
    // life ring
    d.stamp(56,24,['.rwr.','r...r','w...w','r...r','.rwr.'],{r:Rd,w:'#FFFFFF'});
    // crash: boat-car stuck in wall at left corner
    d.line(31,16,29,23,'#6A7480'); d.line(33,20,35,23,'#6A7480'); d.line(31,26,34,27,'#6A7480'); // cracks
    const Bt='#F0A830', Bt2='#C07818', Gl='#A8E4F4';
    d.ell(27,26,6,4,Bt); d.ell(26,25,4,2,'#FFC860'); d.hline(21,33,29,Bt2); d.ell(28,23,3,2,Gl); d.px(27,22,'#FFFFFF');
    d.poly([[21,24],[23,22],[23,27]],Rd); // tail fin
    d.circ(24,30,1,'#3A3A44'); d.circ(31,30,1,'#3A3A44');
    // dizzy stars + smoke bubbles
    d.stamp(30,9,['.y.','yWy','.y.'],{y:'#F8E070',W:'#FFFFFF'}); d.stamp(24,15,['.y.','yyy','.y.'],{y:'#F8E070'}); d.px(34,12,'#F8E070');
    bubble(d,23,18,1); bubble(d,26,11,1);
    // Mrs Puff puffed (spiky ball) floating above
    const Pf='#E8D8A0', Pf2='#C8B070';
    const cx=20, cy=6; d.circ(cx+0,cy,4,Pf); d.ell(cx,cy+2,3,1,Pf2);
    for(let k=0;k<10;k++){const a=k*Math.PI/5; d.px(cx+Math.round(Math.cos(a)*6),cy+Math.round(Math.sin(a)*6),Pf2)}
    d.px(cx-2,cy-1,O); d.px(cx+1,cy-1,O); d.hline(cx-1,cx,cy+1,'#E05A5A');
    d.rect(cx-2,cy-5,5,1,'#3A6AC8'); d.rect(cx-1,cy-6,3,1,'#FFFFFF');
    // traffic cones at right
    d.stamp(57,33,['..o..','.ooo.','.www.','ooooo'],{o:'#F07830',w:'#FFFFFF'});
    d.stamp(38,33,['..o..','.ooo.','.www.','ooooo'],{o:'#F07830',w:'#FFFFFF'});
  },

  // 해초 숲: 똑같이 생긴 해초가 빽빽, 위에서 빛줄기, 빙글빙글 도는 발자국(길 잃음), 거품
  'any:c1-21': d=>{
    d.grad(0,0,64,28,['#1E6E8A','#227A92','#28869A','#2E92A2','#3A9EA8','#46A8AC']);
    // light rays
    for(const x0 of [12,30,46]) for(let y=0;y<28;y++){const x=x0+Math.floor(y/2); if((x+y)%2===0){d.px(x,y,'#4AAAB8'); d.px(x+1,y,'#4AAAB8')} }
    flower(d,20,4,2,'#3496A8','#9AD8C8'); flowerS(d,52,3,'#3496A8'); flowerS(d,4,10,'#2E8EA4','#9AD8C8');
    // far kelp (dark)
    const kelp=(x,top,bot,c,c2,ph)=>{ for(let y=top;y<=bot;y++){const xx=x+Math.round(Math.sin((y+ph)/3)*1.2); d.px(xx,y,c); d.px(xx+1,y,c); if((y+ph)%5===0){d.px(xx+2,y,c2); d.px(xx+3,y-1,c2); d.px(xx-1,y+1,c2); d.px(xx-2,y,c2)} } d.px(x,top-1,c2); d.circ(x+1,top-1,1,c2) };
    for(const x of [24,33,41,49,57,63]) kelp(x,4,28,'#2A7A5A','#2A7A5A',x);
    // floor
    sandFloor(d,27,'#B8C890','#A0B478','#CCD8A8',30); d.hline(0,63,27,'#94A86C');
    // near kelp (same-looking strands)
    for(const [x,top] of [[27,2],[36,1],[45,3],[54,1],[61,2],[1,3]]) kelp(x,top,32,'#3EA048','#62C058',0);
    for(const [x] of [[27],[36],[45],[54],[61],[1]]) { d.ell(x+1,33,2,1,'#2A7A3A'); }
    // looping footprints at right, around kelp
    const fp=(x,y)=>{d.px(x,y,'#7C8C58'); d.px(x+1,y,'#7C8C58')};
    for(let a=0;a<Math.PI*2;a+=Math.PI/7){ fp(Math.round(45+Math.cos(a)*10), Math.round(35+Math.sin(a)*3)) }
    // a dropped map
    d.rect(55,36,5,3,'#F4ECD0'); d.px(56,37,'#E04848'); d.vline(58,36,38,'#C8B890');
    // bubbles
    bubble(d,32,10,1); bubble(d,34,6,1); bubble(d,50,14,2); bubble(d,58,9,1); bubble(d,40,20,1);
    // fish silhouettes
    d.stamp(8,4,['.yy.y','yyyyy','.yy.y'],{y:'#F0C050'}); d.px(9,4,O);
  },

  // 비키니 시티 버스 정류장: 정류장 표지판(버스 그림)+시계, 빈 벤치, 텅 빈 길, 뒤로 돌·석상 머리·파인애플 집
  'any:c1-23': d=>{
    const F1='#7ACCEC', Y='#F8E070', Sd='#F2E2A8', Sd2='#DCC888', Pl='#5A6070';
    d.grad(0,0,64,24,['#3A9AD4','#46A6DA','#52B2E0','#60BEE6']);
    flower(d,10,5,3,F1,Y); flower(d,34,4,2,F1,'#F8B0C8'); flowerS(d,22,13,F1,Y); flowerS(d,2,15,F1);
    // Patrick's rock with weathervane
    d.ell(37,24,6,5,'#8A6A4E'); d.ell(36,22,3,2,'#A48266');
    d.vline(37,15,19,Pl); d.hline(35,39,16,Pl); d.px(39,15,Pl);
    sandFloor(d,24,Sd,Sd2,'#FFF4CC',30); d.hline(0,63,24,Sd2); d.hline(31,43,24,'#6A4E38');
    // Squidward's moai head
    const Q='#5A7A9A', Q2='#46628A', Q3='#7A98B4';
    d.rect(44,8,9,17,Q); d.hline(44,52,7,Q3); d.vline(44,8,24,Q3); d.vline(52,8,24,Q2);
    d.rect(45,10,7,2,Q2);
    d.rect(46,12,2,2,Y); d.rect(49,12,2,2,Y);
    d.rect(48,14,2,6,Q2); d.px(48,19,Q3);
    d.rect(46,21,5,4,'#6A4A2A'); d.px(50,23,Y);
    // SpongeBob's pineapple
    pineapple(d,59,24,1);
    d.rect(57,20,4,4,'#3A88C8'); d.px(58,19,'#3A88C8'); d.px(59,19,'#3A88C8');
    d.stamp(55,12,['.w.','w.w','.w.'],{w:F1}); d.stamp(60,15,['.w.','w.w','.w.'],{w:F1});
    // road
    d.rect(0,33,64,7,'#8C96A4'); d.hline(0,63,33,'#6E7886'); for(let x=2;x<64;x+=9) d.hline(x,x+4,36,'#F4F0E0');
    // bus stop pole + sign + clock
    d.vline(24,8,33,Pl); d.vline(25,8,33,'#7A8090');
    d.rect(21,1,8,7,'#2E6AC0'); d.frame(21,1,8,7,'#F4F4F4');
    d.stamp(22,2,['......','.yyyy.','.y##y.','.yyyy.','.o..o.'],{y:Y,'#':'#9AD8F0',o:O});
    d.circ(24,11,2,'#F4F4F4'); d.ring(24,11,2,Pl); d.px(24,10,O); d.px(25,11,O);
    // empty bench
    d.rect(27,26,10,1,'#C07A40'); d.rect(27,28,10,1,'#C07A40'); d.hline(27,36,29,'#7A4A20');
    d.vline(28,29,31,'#7A4A20'); d.vline(35,29,31,'#7A4A20');
    d.px(31,27,'#E05A5A'); d.px(32,27,'#E05A5A'); // forgotten ticket
    bubble(d,17,4,1); bubble(d,19,8,1); bubble(d,42,3,2);
  },

  // 플라잉 더치맨의 배: 깜깜한 밤 바다 밑, 초록빛 유령선(찢어진 돛, 해골 깃발), 초록 안개, 빈 과자봉지
  'any:c2-21': d=>{
    d.grad(0,0,64,26,['#0E1428','#121A32','#16223A','#1A2A42','#1E3248','#22384C']);
    for(let i=0;i<14;i++) d.px(d.ri(0,63),d.ri(0,16),d.rnd()<.5?'#3A5A6A':'#5A8A8A');
    flowerS(d,4,3,'#1E2C46','#3A5A6A'); flowerS(d,20,10,'#1E2C46'); flowerS(d,30,2,'#1C2A44');
    // green moon-glow
    d.circ(15,7,4,'#2A5A3A'); d.circ(15,7,3,'#4A9A5A'); d.circ(15,7,2,'#8AE09A'); d.px(14,6,'#E0FFC0');
    // seabed
    d.rect(0,26,64,14,'#1A2A2A'); for(let i=0;i<30;i++) d.px(d.ri(0,63),d.ri(27,39),d.rnd()<.5?'#243838':'#122020');
    d.hline(0,63,26,'#2A4A40');
    // ship
    const H='#2C3A2C', H2='#3E5A3A', Gl='#7CF08A', Gl2='#4AC060', Sl='#A8D8B0', Sl2='#7AAA88';
    d.poly([[27,20],[62,20],[58,30],[31,30]],H); d.hline(27,62,20,Gl); d.line(27,20,31,30,Gl2); d.line(62,20,58,30,Gl2);
    d.hline(29,60,23,H2); d.hline(30,59,27,H2);
    for(const x of [34,40,46,52]) d.stamp(x-1,24,['ggg','gYg','ggg'],{g:Gl,Y:'#E0FFC0'});
    d.poly([[56,20],[63,16],[63,20]],H); d.line(56,20,63,16,Gl2); // stern
    // masts
    d.vline(37,2,20,'#4A3A2A'); d.vline(49,0,20,'#4A3A2A');
    // tattered sails
    d.poly([[31,4],[43,4],[44,16],[30,16]],Sl); d.poly([[43,2],[56,2],[57,15],[42,15]],Sl);
    d.vline(36,4,16,Sl2); d.vline(50,2,15,Sl2);
    for(const [x,y] of [[33,8],[34,9],[40,12],[41,13],[46,6],[52,10],[53,11],[47,12]]) d.px(x,y,'#16223A');
    for(const x of [31,34,38,42]) d.px(x,16,'#1A2A42'); for(const x of [43,47,51,55]) d.px(x,15,'#1A2A42');
    d.stamp(48,5,['.www.','wOwOw','.www.','.w.w.'],{w:'#F0FFF0',O:'#16223A'}); // skull
    // flag
    d.rect(37,0,5,2,'#1A1A1A'); d.px(39,0,'#F0FFF0');
    // ghost green fog along waterline
    for(let x=0;x<64;x++){ if((x>>2)%2) d.px(x,30,'#3A7A5A'); }
    for(let x=24;x<64;x++){ d.px(x,31,(x%3)?'#2E6A4A':'#4A9A6A'); }
    // ghostly lanterns
    d.px(28,18,'#F8F070'); d.px(28,19,'#C8B040'); d.px(61,14,'#F8F070');
    // snack bag left behind (empty) + crumbs
    d.stamp(34,34,['ppppp','pyyyp','pyRyp','ppppp'],{p:'#E04878',y:'#F8D048',R:'#E04848'});
    d.px(40,36,'#E0B060'); d.px(42,35,'#E0B060'); d.px(44,36,'#E0B060');
    // ghost wisps / bubbles
    bubble(d,24,6,1,'#5A8A8A','#9AD8C8'); bubble(d,22,12,1,'#5A8A8A','#9AD8C8');
  },

  // 비키니 시티 위 수면: 뜨거운 해, 맑은 하늘, 왼쪽은 마른 모래톱, 오른쪽 바다 아래로 희미한 파인애플·석상 머리, 야자섬
  'any:c2-23': d=>{
    d.grad(0,0,64,20,['#4AA8F0','#5CB4F2','#70C0F4','#86CCF6','#9CD8F8']);
    // hot sun with rays
    d.circ(8,5,3,'#FFE860'); d.circ(8,5,2,'#FFF8C0');
    for(const [dx,dy] of [[5,0],[-5,0],[0,5],[0,-5],[4,4],[-4,4],[4,-4],[-4,-4]]) d.px(8+dx,5+dy,'#FFD040');
    d.ell(30,4,4,1,'#FFFFFF'); d.ell(48,7,3,1,'#FFFFFF');
    // palm island (Bikini atoll) right on horizon
    d.ell(55,20,7,2,'#F2DCA0'); d.vline(55,11,19,'#8A5A30'); d.px(54,14,'#8A5A30'); d.px(54,15,'#8A5A30');
    d.stamp(49,8,['..gggg.gggg..','.gg..gggg..gg','g....gGg....g','.....g.g.....'],{g:'#3EA040',G:'#7A4A20'});
    // sea surface
    d.rect(0,20,64,20,'#3AA0D0');
    d.grad(0,21,64,19,['#3AA0D0','#3496C8','#2E8CC0','#2882B6','#2276AA']);
    d.hline(0,63,20,'#E8FAFF');
    for(let x=0;x<64;x+=5) d.hline(x,x+2,22,'#7ACCE8');
    // underwater: faint town far below
    const F='#4C9ECE', F2='#3A88BA';
    // pineapple silhouette
    d.ell(42,35,4,5,F); d.stamp(38,25,['g...g...g','.g..g..g.','..g.g.g..','...ggg...'],{g:F});
    for(let y=31;y<40;y++)for(let x=38;x<47;x++) if(d.get(x,y)===F&&(x+y)%4===0) d.px(x,y,F2);
    d.rect(41,37,3,3,F2);
    // moai (Squidward) silhouette
    d.rect(50,27,7,13,F); d.rect(50,29,7,1,F2); d.rect(51,30,2,1,F2); d.rect(54,30,2,1,F2); d.rect(52,31,2,5,F2); d.rect(51,37,4,3,F2);
    // rock silhouette
    d.ell(61,39,4,3,F); d.vline(61,33,35,F2); d.hline(60,62,34,F2);
    flowerS(d,33,27,'#46A6D6','#80CCEA'); flowerS(d,58,24,'#46A6D6'); flower(d,48,25,1.6,'#46A6D6');
    bubble(d,38,30,1); bubble(d,40,25,1); bubble(d,46,22,1,'#DFF6FF');
    // dry sandbar (left) for pet
    d.poly([[0,21],[20,19],[28,22],[30,28],[26,40],[0,40]],'#F4DCA0');
    d.poly([[0,22],[20,20],[27,23],[28,27],[24,40],[0,40]],'#F8E4B0');
    d.line(20,19,28,22,'#FFFFFF'); d.line(28,22,30,28,'#FFFFFF'); d.line(30,28,26,39,'#E8FAFF');
    // cracks (so dry)
    d.stamp(2,30,['c...','.c.c','..c.'],{c:'#D8B878'}); d.stamp(22,35,['.c','c.','.c'],{c:'#D8B878'});
    d.stamp(24,25,['c..','.cc'],{c:'#D8B878'});
    // dripping puddle footprints from water to sandbar
    d.px(26,30,'#C8A868'); d.px(27,32,'#C8A868'); d.px(25,34,'#C8A868');
    // heat shimmer
    d.stamp(14,13,['.h.h','h.h.'],{h:'#C8E8FA'}); d.stamp(22,10,['.h.h','h.h.'],{h:'#C8E8FA'});
    // starfish on sandbar edge
    d.stamp(1,36,['..p..','ppppp','.ppp.','.p.p.'],{p:'#F08AA0'});
  },
};
