// n0: shared gifts (any pet). Souvenirs 32x32, postcards 64x40.
const blob=(d,pts,r,c)=>{for(const [x,y] of pts) d.circ(x,y,r,c)};
const thick=(d,x0,y0,x1,y1,r,c)=>{const n=Math.max(Math.abs(x1-x0),Math.abs(y1-y0))*2||1; for(let i=0;i<=n;i++) d.circ(x0+(x1-x0)*i/n,y0+(y1-y0)*i/n,r,c)};
const heartPts=(cx,cy,s,n)=>{const p=[]; for(let i=0;i<n;i++){const t=i/n*Math.PI*2; p.push([cx+s*16*Math.sin(t)**3/16, cy-s*(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))/16])} return p};

export default {
  // ---------- souvenirs ----------
  // 오답노트: 펼친 스프링 노트, 줄마다 빨간 X, 커피 자국, 몽당연필
  'any:s0-8': d=>{
    const O='#2E2A3A', P='#FFFDF4', P2='#E6DFCB', L='#A8C8E8', W='#7A7890', R='#E43C3C', C='#6A8FD8', C2='#4A68B0', S='#B8BCC8', S2='#7C8090';
    d.rect(2,7,28,21,C); d.rect(2,26,28,2,C2); d.rect(2,7,28,1,'#8AAAE8');
    d.rect(3,5,12,21,P); d.rect(17,5,12,21,P);
    d.vline(14,5,25,P2); d.vline(17,5,25,P2); d.hline(3,14,25,P2); d.hline(17,28,25,P2);
    for(let y=6;y<25;y+=2){d.px(15,y,S); d.px(16,y,S2);}
    for(let y=9;y<25;y+=3){d.hline(4,13,y,L); d.hline(18,27,y,L);}
    // writing + red X on every line
    const X=(x,y)=>{d.px(x,y,R);d.px(x+2,y,R);d.px(x+1,y+1,R);d.px(x,y+2,R);d.px(x+2,y+2,R)};
    for(let y=9;y<25;y+=3){
      for(let x=4;x<10;x++) if(d.rnd()<.7) d.px(x,y-1,W);
      for(let x=18;x<24;x++) if(d.rnd()<.7) d.px(x,y-1,W);
      X(10,y-2); X(24,y-2);
    }
    // big red "0" score on right page corner
    d.ring(25,3,2,R); d.px(27,1,R);
    // coffee ring
    d.ring(7,20,2.5,'#C8986A');
    d.outline(O);
    // pencil stub lying across
    thick(d,19,30,29,20,1,'#F4C840'); d.line(19,29,28,20,'#FFE07A');
    thick(d,28,21,30,19,1,'#F08A9A'); d.px(30,18,'#F08A9A');
    d.px(18,31,'#E8C090'); d.px(19,31,'#E8C090'); d.px(18,30,'#E8C090'); d.px(17,31,'#3A3A3A');
    d.outline(O);
  },
  // 달팽이 경주 리본: 파란 로제트 "1", 리본 꼬리 위를 기어가는 우승 달팽이 + 점액 자국
  'any:s0-12': d=>{
    const O='#2A2638', B='#3E6AD8', B2='#2A4AA8', B3='#7AA0F0', Y='#F8C840', Y2='#D89A20', Y3='#FFF0A0', R='#E8505A', R2='#B83440';
    // tails
    d.poly([[9,15],[15,17],[12,30],[9,27],[5,30]],R); d.poly([[23,15],[17,17],[20,30],[23,27],[27,30]],R);
    d.line(12,18,9,28,R2); d.line(20,18,23,28,R2);
    // rosette pleats
    d.circ(16,11,10,B2);
    for(let i=0;i<14;i++){const a=i/14*Math.PI*2; d.circ(16+Math.cos(a)*9,11+Math.sin(a)*9,2,i%2?B:B3);}
    d.circ(16,11,8,B);
    for(let i=0;i<14;i++){const a=i/14*Math.PI*2; d.line(16+Math.cos(a)*6,11+Math.sin(a)*6,16+Math.cos(a)*8,11+Math.sin(a)*8,B2);}
    d.circ(16,11,6,Y2); d.circ(16,11,5,Y); d.circ(15,10,3,Y3); d.circ(16,11,3,Y);
    d.stamp(15,8,['.oo','ooo','.oo','.oo','.oo','oooo'].map(r=>r.padEnd(4,'.')),{o:Y2});
    d.px(13,8,'#FFFFFF'); d.px(12,9,'#FFFFFF');
    // snail on right tail
    d.rect(21,26,8,2,'#C8E07A'); d.hline(20,28,28,'#A8C058'); d.rect(20,24,2,3,'#C8E07A');
    d.vline(20,22,23,'#A8C058'); d.vline(22,22,23,'#A8C058'); d.px(20,21,O); d.px(22,21,O);
    d.circ(25,23,3.2,'#C87838'); d.circ(25,23,2.2,'#E09A50'); d.px(25,23,'#8A4A20'); d.px(26,22,'#8A4A20'); d.px(26,24,'#8A4A20'); d.px(24,24,'#8A4A20');d.px(24,21,'#FFD8A0');
    d.px(21,25,O);
    d.outline(O);
    // slime trail
    for(let x=29;x<32;x++) d.px(x,29,'#CFF0FF');
    d.px(30,28,'#CFF0FF');
  },
  // 포춘쿠키: 접힌 쿠키 + 튀어나온 쪽지 "A+"
  'any:s0-16': d=>{
    const O='#3A2A20', C='#F0B858', C2='#D08A30', C4='#A8661E', C3='#FFD890', Pp='#FFFFFF', P2='#DCDCE6', R='#E04048';
    d.ell(16,21,14,13,C); for(let y=22;y<32;y++) for(let x=0;x<32;x++) d.clear(x,y);
    d.ell(16,21,11,10,C3); d.ell(16,22,11,10,C); for(let y=22;y<32;y++) for(let x=0;x<32;x++) d.clear(x,y);
    d.poly([[2,18],[9,20],[7,27],[3,26]],C); d.poly([[30,18],[23,20],[25,27],[29,26]],C);
    d.line(3,19,4,25,C3); d.line(25,21,26,26,C2); d.line(8,21,7,26,C2);
    d.poly([[8,22],[24,22],[19,17],[16,15],[13,17]],C2); d.poly([[11,22],[21,22],[16,17]],C4);
    d.ell(10,10,3,2,C3);
    d.poly([[13,20],[31,20],[31,27],[13,25]],Pp); d.line(13,25,31,27,P2);
    d.stamp(20,20,['.r.....','r.r..r.','rrr.rrr','r.r..r.','r.r....'],{r:R});
    d.outline(O);
    d.px(4,30,C2); d.px(9,29,C); d.px(11,31,C2);
    d.stamp(26,4,['.y.','yWy','.y.'],{y:'#F8E070',W:'#FFFFFF'}); d.px(4,6,'#F8E070');
  },
  // 합격 엿: 호박색 엿가락이 합격 동그라미 종이에 찰싹 붙음, 늘어난 실
  'any:s1-8': d=>{
    const O='#3A2418', A='#E4A04A', A2='#C07830', A3='#FFD488', Pp='#FFF8EC', P2='#E8DCC8', R='#E43C3C';
    // paper (pass slip)
    d.poly([[11,11],[29,9],[30,29],[12,30]],Pp); d.line(29,9,30,29,P2); d.line(12,30,30,29,P2);
    d.ring(21,20,5,R); d.ring(21,20,4,R);
    d.hline(15,19,27,'#C0B8A8'); d.hline(22,27,27,'#C0B8A8');
    // stick
    thick(d,4,27,22,6,2.3,A2); thick(d,4,26,21,6,2,A); thick(d,4,25,20,6,0.8,A3);
    for(const [x,y] of [[8,22],[12,17],[16,13],[11,21],[18,10]]) d.px(x,y,A2);
    // sticky blob on paper + strings
    d.ell(14,17,3,2,A); d.px(13,16,A3);
    d.line(17,16,22,15,A); d.line(17,17,21,18,A3);
    d.vline(10,24,28,A); d.px(10,29,A); d.vline(7,27,29,A2);
    // ribbon bow at top end
    d.stamp(17,1,['rr...rr','rRr.rRr','.rrRrr.','rRr.rRr','rr...rr'],{r:R,R:'#B82C30'});
    d.outline(O);
    d.px(10,30,A); d.px(10,31,A2);
  },
  // 광대 빨간 코: 반짝이는 빨간 공 + 고무줄 + 빵! 효과선
  'any:s1-12': d=>{
    const O='#3A1A22', R='#E83A3A', R2='#B42430', R3='#FF7A6A', K='#50505A';
    for(let i=0;i<=40;i++){const t=Math.PI*(i/40); d.px(16+14*Math.cos(t),16-11*Math.sin(t),K); d.px(16+14*Math.cos(t),15-11*Math.sin(t),'#8A8A96');}
    d.circ(16,19,11,R2); d.circ(15,18,10,R); d.circ(14,16,7,R); d.ell(12,14,4,3,R3); d.ell(11,13,2,1,'#FFC0B0'); d.px(10,12,'#FFFFFF'); d.px(11,12,'#FFFFFF');
    d.ell(20,26,4,1,'#D02C36');
    d.outline(O);
    // honk lines
    d.stamp(25,0,['..y..y','.y..y.','y..y..'],{y:'#F8C840'});
    d.stamp(0,0,['y..','.y.','..y'],{y:'#F8C840'});
    d.px(1,26,'#7AC8F0'); d.px(30,24,'#F070C0'); d.px(29,29,'#70D890'); d.px(2,30,'#F8C840');
  },
  // 버섯 모양 돌: 회색 돌 버섯, 깨문 자국, 옆에 빠질 뻔한 이
  'any:s1-16': d=>{
    const O='#2E2C34', G='#A8A6B0', G2='#7E7C88', G3='#CCCAD2', S='#94929E', M='#6C8A50';
    // stem
    d.poly([[11,16],[20,16],[21,27],[10,27]],G2); d.rect(12,16,6,11,G); d.vline(13,17,26,G3);
    // cap
    d.ell(15,11,13,7,G2); d.ell(15,10,12,6,G); d.ell(12,8,7,3,G3);
    // spots (carved)
    for(const [x,y,r] of [[9,9,1.5],[16,6,1.2],[21,10,1.5],[13,13,1],[5,12,1]]) {d.circ(x,y,r,S); d.px(x-1,y-1,G2);}
    d.hline(4,26,16,G2);
    for(const [cx,cy] of [[28,8],[29,11],[28,14]]) for(let y=cy-2;y<=cy+2;y++) for(let x=cx-2;x<=cx+2;x++) if((x-cx)**2+(y-cy)**2<=4) d.clear(x,y);
    for(const [x,y] of [[25,8],[26,10],[26,12],[25,14],[26,6]]) d.px(x,y,G2);
    d.line(17,18,16,22,G2); d.line(18,8,20,7,G2);
    d.ell(14,28,10,2,M); d.ell(14,28,8,1,'#8AAE68');
    d.stamp(24,20,['.oooooo.','oWoooooo','oWoooooo','oooooooo','.oooooo.','.ooo.oo.','.oo...o.','.o.....o'],{o:'#FFFFFF',W:'#E8F4FF'});
    d.vline(30,23,26,'#D8DCE8');
    d.outline(O);
    d.stamp(27,16,['.y.','yWy','.y.'],{y:'#F8E070',W:'#FFFFFF'});
    d.px(3,3,'#F8E070');
  },
  // 전설의 족보: 빛나는 두루마리, 읽을 수 없는 꼬부랑 글씨, 빨간 별표
  'any:s2-8': d=>{
    const O='#3A2418', P='#F4E2B0', P2='#DCC088', P3='#FFF4D0', W='#6A4A30', K='#8A4E2A', K2='#5E3018', R='#E03C3C', Y='#FFE070';
    d.rect(6,6,20,20,P); d.vline(6,6,25,P2); d.vline(25,6,25,P2); d.rect(8,7,6,2,P3);
    // torn edge right
    d.px(25,12,null); d.clear(25,12); d.clear(25,13); d.px(24,13,P2);
    // scribbles
    for(let y=9;y<25;y+=3){let yy=y; for(let x=8;x<23;x++){ if(d.rnd()<.12) continue; yy=Math.max(y-1,Math.min(y+1,yy+d.ri(-1,1))); d.px(x,yy,W);} }
    // red star + circle mark
    d.ring(17,16,3.4,R);
    d.stamp(19,20,['..r..','rrrrr','.rrr.','r...r'],{r:R});
    d.circ(10,22,1.5,R);
    // rollers
    d.rect(4,3,24,3,K); d.hline(4,27,3,'#B07040'); d.rect(2,2,2,5,K2); d.rect(28,2,2,5,K2);
    d.rect(4,26,24,3,K); d.hline(4,27,26,'#B07040'); d.rect(2,25,2,5,K2); d.rect(28,25,2,5,K2);
    d.outline(O);
    // glow sparkles
    d.stamp(0,10,['.y.','yWy','.y.'],{y:Y,W:'#FFFFFF'});
    d.stamp(28,13,['.y.','yWy','.y.'],{y:Y,W:'#FFFFFF'});
    d.px(1,17,Y); d.px(30,9,Y); d.px(30,20,Y); d.px(15,0,Y); d.px(1,4,Y); d.px(16,31,Y);
  },
  // 잃어버린 왕관: 보라 방석 위 금관, 졸린 Zz
  'any:s2-12': d=>{
    const O='#2E1E36', Y='#F8C840', Y2='#D0901E', Y3='#FFF0A0', Pu='#8A58D0', Pu2='#6038A0', Pu3='#B088F0';
    // cushion
    d.ell(16,26,14,4,Pu2); d.ell(16,25,13,3,Pu); d.ell(12,24,6,1,Pu3);
    d.stamp(0,27,['yy','.y'],{y:Y}); d.stamp(30,27,['yy','y.'],{y:Y});
    // crown
    d.poly([[6,22],[26,22],[27,9],[21,15],[16,6],[11,15],[5,9]],Y);
    d.poly([[6,22],[26,22],[26,18],[6,18]],Y2); d.hline(6,26,18,Y3);
    d.line(6,10,10,15,Y3); d.line(16,8,12,14,Y3);
    d.circ(5,8,1.5,Y); d.circ(16,5,1.5,Y); d.circ(27,8,1.5,Y); d.px(15,4,Y3); d.px(4,7,Y3); d.px(26,7,Y3);
    // gems
    d.rect(15,19,3,3,'#E03C50'); d.px(15,19,'#FF9AA8');
    d.rect(9,19,2,2,'#3AA0E8'); d.rect(22,19,2,2,'#3AC878');
    d.stamp(15,11,['.r.','rRr','.r.'],{r:'#E03C50',R:'#FF9AA8'});
    d.outline(O);
    // Zz
    d.stamp(23,0,['zzzz','..z.','.z..','zzzz'],{z:'#9AD0FF'});
    d.stamp(28,4,['zzz','.z.','zzz'],{z:'#C8E6FF'});
  },
  // 공룡 알: 금 간 얼룩무늬 알, 구멍으로 엿보는 눈, 톡톡 효과선, 둥지
  'any:s2-16': d=>{
    const O='#2A2E26', E='#E6F0C8', E2='#BCCF96', E3='#FAFFEA', Sp='#7FA860', N='#C89850', N2='#9A6A30', N3='#E8C078';
    d.ell(16,15,10,13,E2); d.ell(15,14,9,12,E); d.ell(12,9,4,5,E3);
    for(const [x,y,r] of [[19,8,1.5],[10,18,1.2],[20,20,1.8],[14,24,1],[23,14,1],[8,11,1]]) d.circ(x,y,r,Sp);
    // crack zigzag
    d.stamp(7,13,['o.......o.......','.o.....o.o.....o','..o...o...o...o.','...o.o.....o.o..','....o.......o...'],{o:'#5A6A48'});
    // peek hole with eye
    d.stamp(15,4,['..kkkk..','.kwwwkk.','kwwbbwkk','kwwbWwkk','.kwwwkk.','..kkkk..'],{k:'#1E1E24',w:'#FFFFFF',b:'#3A2A10',W:'#F8C040'});
    d.px(17,4,E3); d.px(22,4,E3);
    // nest
    d.ell(16,28,15,3,N2); d.ell(16,27,13,2,N);
    for(let i=0;i<14;i++){const x=d.ri(2,29), y=d.ri(25,30); d.line(x,y,x+d.ri(-3,3),y-1,i%2?N3:N2);}
    d.outline(O);
    // tap tap
    d.stamp(27,1,['k..','.k.','k.k'],{k:'#E05A3A'}); d.stamp(1,2,['..k','.k.','k.k'],{k:'#E05A3A'});
  },

  // ---------- postcards ----------
  // 방과 후 교실: 노을빛 창, 칠판에 분필 "!!", 책상들
  'any:c0-8': d=>{
    d.rect(0,0,64,26,'#F2E2C2'); d.rect(0,0,64,2,'#D8C4A0');
    d.rect(0,20,64,6,'#C9A27A'); d.hline(0,63,20,'#A8805A');
    // window with sunset
    d.rect(2,3,19,14,'#8A6040'); d.grad(3,4,17,12,['#F8A060','#FAB878','#FCCC90','#FFE0A8']);
    d.circ(14,13,2.5,'#FFF0C0'); d.rect(3,14,17,2,'#E89060'); d.vline(11,4,15,'#8A6040'); d.hline(3,19,9,'#8A6040');
    d.rect(1,16,21,2,'#A87850');
    // chalkboard
    d.rect(25,3,36,15,'#7A5034'); d.rect(26,4,34,13,'#2F6A4E'); d.dither(26,4,34,13,'#2F6A4E','#2C644A');
    const ch='#F4F4EC';
    // "FOCUS!" as scrawl: F O C + big !
    d.stamp(28,6,['ccc.ccc.ccc.c.c.ccc','c...c.c.c...c.c.c..','cc..c.c.c...c.c.ccc','c...c.c.c...c.c...c','c...ccc.ccc.ccc.ccc'],{c:ch});
    d.rect(50,5,3,6,ch); d.rect(50,12,3,2,ch); d.rect(55,5,2,6,'#F8D0E0'); d.rect(55,12,2,2,'#F8D0E0');
    d.line(28,13,46,13,'#C8E0D0'); d.line(28,14,46,14,'#C8E0D0');
    d.hline(25,60,18,'#A87850'); d.rect(30,17,4,1,'#F0F0F0'); d.rect(38,17,2,1,'#F8E070'); d.rect(52,16,5,2,'#5A5070');
    // floor
    d.rect(0,26,64,14,'#C8925A'); for(let y=29;y<40;y+=4) d.hline(0,63,y,'#B07C48');
    for(let y=26,k=0;y<40;y+=4,k++) for(let x=(k%2)*7;x<64;x+=14) d.vline(x,y,y+2,'#B07C48');
    // sun patch on floor
    d.poly([[24,26],[36,26],[44,39],[30,39]],'#D8A468');
    // desks
    const desk=(x,y)=>{d.rect(x+2,y-4,7,1,'#4A88C8'); d.vline(x+3,y-3,y,'#3A6898'); d.rect(x+2,y-5,7,1,'#6AA8E0'); d.vline(x+8,y-3,y,'#3A6898'); d.rect(x+1,y-2,9,1,'#7A7A88');
      d.rect(x-1,y-8,13,3,'#E0A858'); d.hline(x-1,x+11,y-8,'#F4C880'); d.vline(x,y-5,y+1,'#6A6A78'); d.vline(x+10,y-5,y+1,'#6A6A78');};
    desk(30,32); desk(48,32); desk(40,38);
    d.rect(41,24,5,1,'#F4F4F4'); d.px(57,23,'#E04848');
    d.rect(58,30,3,2,'#E04848');
  },
  // 고양이 골목: 벽돌 골목, 박스 탁자에 모인 고양이 회의, 졸린 Zz
  'any:c0-12': d=>{
    d.grad(0,0,64,10,['#6A5A9A','#9A6AA0','#D88A9A','#F4B0A0']);
    // buildings
    d.rect(0,6,30,22,'#B8705A'); d.rect(28,3,36,25,'#9A8AA8');
    for(let y=8;y<26;y+=2) for(let x=((y/2)%2)*2;x<28;x+=4) d.hline(x,x+2,y,'#A86048');
    for(let y=5;y<26;y+=3) d.hline(28,63,y,'#8C7C9A');
    // windows
    const win=(x,y,lit)=>{d.rect(x,y,6,5,'#5A4A60'); d.rect(x+1,y+1,4,3,lit?'#FFE08A':'#3A3450'); d.vline(x+3,y+1,y+3,'#5A4A60'); d.hline(x-1,x+6,y+5,'#DCD0E0');};
    win(4,9,true); win(16,9,false); win(34,7,true); win(46,7,false); win(56,7,true);
    // laundry line
    d.line(10,4,40,6,'#E8E0E8');
    d.rect(16,5,3,4,'#F07A7A'); d.rect(24,5,4,3,'#7AC0F0'); d.rect(32,6,3,4,'#F8E070');
    // sleeping cat on window sill (white)
    d.stamp(45,8,['c.c......','ccccccc..','ckcckcccc','cccccccct'],{c:'#F4F0E8',k:'#5A4A60',t:'#F4F0E8'});
    d.stamp(53,4,['zzz','.z.','zzz'],{z:'#FFFFFF'});
    // ground
    d.rect(0,28,64,12,'#6E6A78'); d.hline(0,63,27,'#8C8896'); d.rect(0,26,64,1,'#5A5664');
    for(let i=0;i<14;i++){const x=d.ri(0,62), y=d.ri(30,39); d.hline(x,x+1,y,'#8C8896');}
    // meeting box
    d.rect(38,26,13,7,'#C89048'); d.hline(38,50,26,'#E0B068'); d.vline(44,26,32,'#A87028'); d.rect(38,32,13,1,'#A87028');
    d.rect(41,24,5,2,'#FFFFFF'); d.stamp(42,24,['z..','.z.'],{z:'#5050A0'});
    // cats: sitting
    const cat=(x,y,c,c2,e)=>d.stamp(x,y,[
      'c...c.','cc.cc.','ccccc.','cecec.','ccncc.','.ccc..','ccccc.','cbbbcc','cbbbc.','ccccc.'],{c,b:c2,e,n:'#F09090'});
    cat(31,23,'#F0A040','#FFE0B0','#2A2A2A');
    cat(52,23,'#D8D4CC','#FFFFFF','#2A8A3A');
    cat(42,15,'#3A3640','#5A5662','#F8D040');
    cat(57,28,'#A8A0A0','#E8E0DC','#2A2A2A');
    // tails
    d.line(36,31,37,28,'#F0A040'); d.line(56,31,57,27,'#D8D4CC');
    // trash can
    d.rect(24,20,5,7,'#7A9A8A'); d.hline(23,29,19,'#9ABAAA'); d.vline(26,21,26,'#6A8A7A');
  },
  // 점집 앞: 밤, 보라 천막 문, 수정구 간판, 수정구 안에 간식(쿠키)
  'any:c0-16': d=>{
    d.grad(0,0,64,26,['#141838','#1A2048','#222A5A','#2A3468']);
    for(const [x,y] of [[3,3],[12,6],[20,2],[8,13],[17,11],[25,5],[2,17],[15,17]]) d.px(x,y,'#FFF4C0');
    d.px(22,9,'#C8D0FF'); d.px(5,9,'#C8D0FF');
    d.circ(10,7,3,'#FFF0B0'); d.circ(11,6,3,'#141838');
    // distant rooftops
    d.poly([[0,26],[0,20],[4,17],[8,20],[8,26]],'#101430'); d.rect(8,21,10,5,'#101430'); d.poly([[16,26],[16,19],[21,15],[26,19],[26,26]],'#101430');
    d.px(19,21,'#FFD870'); d.px(4,22,'#FFD870');
    // shop facade
    d.rect(26,4,38,26,'#5A3478'); d.dither(26,4,38,26,'#5A3478','#56307A');
    d.poly([[24,6],[64,6],[64,2],[28,2]],'#3E2258');
    for(let x=26;x<64;x+=6){d.poly([[x,6],[x+6,6],[x+3,10]],x%12===2?'#E8C060':'#C06A9A');}
    // door arch with bead curtain
    d.rect(35,12,13,18,'#2A1440'); d.circ(41,13,6,'#2A1440'); d.rect(35,13,13,17,'#2A1440');
    for(let x=36;x<47;x+=2) for(let y=10;y<30;y+=2) if(d.get(x,y)==='#2A1440') d.px(x,y,(x+y)%4?'#C060C0':'#F0C860');
    d.ring(41,13,6,'#E8C060');
    // hanging sign with eye
    d.line(52,6,52,9,'#C8A050'); d.line(60,6,60,9,'#C8A050'); d.rect(50,9,12,7,'#E8C060'); d.rect(51,10,10,5,'#3A1E58');
    d.stamp(52,11,['.wwwwww.','wwbbwww.','.wwwwww.'].map(r=>r),{w:'#F0E0FF',b:'#7A3AE0'});
    // lanterns
    for(const x of [30,57]){d.vline(x,6,9,'#C8A050'); d.ell(x,12,2,3,'#F07040'); d.vline(x,10,14,'#FFB070'); d.hline(x-1,x+1,15,'#B04020');}
    // table with crystal ball showing a cookie
    d.rect(49,25,13,2,'#8A3A6A'); d.poly([[49,27],[62,27],[61,32],[50,32]],'#A04A80'); for(let x=50;x<62;x+=3) d.px(x,31,'#F0C860');
    d.circ(55,20,5,'#7AD0F0'); d.circ(55,20,4,'#A8E4F8'); d.circ(55,21,2.4,'#D89A48'); d.px(54,20,'#6A3A18'); d.px(56,22,'#6A3A18'); d.px(56,20,'#6A3A18');
    d.px(53,17,'#FFFFFF'); d.px(52,18,'#FFFFFF'); d.rect(53,25,5,1,'#E8C060');
    d.px(48,15,'#B8F0FF'); d.px(62,16,'#B8F0FF'); d.px(55,13,'#B8F0FF');
    // street
    d.rect(0,26,64,14,'#3A3A58'); d.hline(0,63,26,'#4E4E70');
    for(let y=28;y<40;y+=3) for(let x=(y%2)*3;x<64;x+=6) d.hline(x,x+3,y,'#46466A');
    // door glow on ground
    d.poly([[35,30],[48,30],[52,39],[31,39]],'#4E3A6A');
    d.rect(36,30,11,1,'#6A4A88');
  },
  // 큰 대학 도서관: 천장까지 책장, 사다리 위 펼친 책, 아치 창, 초록 스탠드
  'any:c1-8': d=>{
    d.rect(0,0,64,28,'#E8D8BC'); d.rect(0,0,64,2,'#8A5A3A');
    // arched window left
    d.rect(5,4,13,15,'#B89A70'); d.circ(11,6,6,'#B89A70');
    d.rect(6,6,11,12,'#A8D4F0'); d.circ(11,6,5,'#A8D4F0'); d.rect(6,13,11,5,'#C8E4F4');
    d.vline(11,1,17,'#B89A70'); d.hline(6,16,10,'#B89A70');
    d.rect(4,19,15,1,'#9A7A58');
    // column
    d.rect(21,2,3,26,'#D8C4A2'); d.vline(21,2,27,'#F0E2C8'); d.rect(20,2,5,2,'#C8B490');
    // tall bookshelves
    d.rect(25,0,39,30,'#6A3E24');
    const bc=['#C84A4A','#3A7AC0','#E0A040','#4A9A5A','#8A5AB0','#E07A5A','#2A5A8A','#D8C080'];
    for(let y=2;y<28;y+=5){ d.rect(26,y,37,4,'#3E2414'); let x=26; while(x<63){ const w=d.ri(1,2), h=d.ri(3,4); d.rect(x,y+4-h,w,h,bc[d.ri(0,bc.length-1)]); x+=w+(d.rnd()<.12?1:0);} d.hline(25,63,y+4,'#8A5A34'); }
    // ladder
    for(const x of [40,46]) d.line(x,3,x+3,30,'#C08A48');
    for(let y=7;y<30;y+=4) d.hline(40+Math.round(y*3/30),46+Math.round(y*3/30),y,'#E0B070');
    // open book on top rung + cushion
    d.rect(39,4,9,2,'#E85A6A'); d.hline(39,47,4,'#F88A98');
    d.stamp(39,1,['.www.www.','wwwwkwwww','wwwwkwwww'],{w:'#FFFFFF',k:'#C0B8A8'}); d.hline(40,42,2,'#9A9AB0'); d.hline(45,46,2,'#9A9AB0');
    // floor
    d.rect(0,28,64,12,'#9A6A40'); for(let y=31;y<40;y+=3) d.hline(0,63,y,'#875A34');
    d.hline(0,63,28,'#5A3A20');
    // rug
    d.ell(14,35,13,3,'#B04848'); d.ell(14,35,11,2,'#C86060'); d.hline(4,24,35,'#E8C060');
    // reading table + green lamp + book stack
    d.rect(47,31,16,2,'#7A4A28'); d.hline(47,62,31,'#A06A3A'); d.vline(48,33,38,'#5A3418'); d.vline(61,33,38,'#5A3418');
    d.vline(58,27,30,'#C8A040'); d.poly([[55,27],[61,27],[60,25],[56,25]],'#3A9A5A'); d.hline(55,61,27,'#2A7A48'); d.px(57,28,'#FFF0A0'); d.px(59,28,'#FFF0A0');
    d.rect(49,30,6,1,'#E0A040'); d.rect(50,29,5,1,'#C84A4A'); d.rect(49,28,5,1,'#3A7AC0');
  },
  // 도넛 공장: 컨베이어 도넛, 구멍 뚫는 프레스, 구멍 공짜 통 "0"
  'any:c1-12': d=>{
    d.rect(0,0,64,30,'#F8D8E4'); d.rect(0,18,64,12,'#F0C4D4');
    d.dither(0,18,64,1,'#F0C4D4','#F8D8E4');
    // pipes
    d.rect(0,3,64,3,'#B8C8D8'); d.hline(0,63,3,'#E0ECF4'); for(let x=6;x<64;x+=14) d.rect(x,2,2,5,'#8A9AB0');
    d.rect(10,6,3,8,'#B8C8D8'); d.ell(11,15,3,1,'#8A9AB0');
    // round window
    // press machine
    d.rect(31,6,14,9,'#E06A8A'); d.rect(31,6,14,2,'#F49AB0'); d.rect(33,9,10,4,'#B84A6A');
    d.circ(35,11,1,'#FFE070'); d.circ(40,11,1,'#70E0A0');
    d.rect(36,15,4,4,'#A8B4C4'); d.rect(35,19,6,2,'#8A96A8');
    d.stamp(33,22,['.a...a.','..a.a..'],{a:'#FFFFFF'});
    // conveyor
    d.rect(23,24,41,4,'#5A5A6A'); d.hline(23,63,24,'#8A8A9A'); for(let x=24;x<64;x+=3) d.px(x,26,'#3A3A48');
    d.circ(24,26,2,'#3A3A48'); for(const x of [28,46,60]) d.vline(x,28,33,'#5A5A6A');
    // donuts on belt (before: solid, after: holes)
    const donut=(x,hole,ic)=>{d.ell(x,22,3,1.6,'#D89048'); d.ell(x,21,3,1,ic); if(hole){d.px(x,21,'#C0703A'); d.px(x-1,21,'#C0703A');} d.px(x-2,21,'#FFFFFF'); d.px(x+1,20,'#FFE070');};
    donut(27,false,'#F07AA8'); donut(48,true,'#F07AA8'); donut(56,true,'#8A5038');
    d.ell(38,22,3,1.6,'#D89048'); d.ell(38,21,3,1,'#7AD0E8');
    // holes falling into bin
    d.circ(38,25,0.7,'#C88040');
    // hole bin
    d.rect(52,29,11,9,'#7AA8D8'); d.hline(52,62,29,'#A8CCF0'); d.rect(52,37,11,1,'#5A88B8');
    for(let i=0;i<9;i++){d.circ(54+(i%5)*2,28-(i>4?1:0),1,i%2?'#D08A40':'#B87030');}
    // FREE tag "0"
    d.rect(55,32,6,5,'#FFFFFF'); d.stamp(56,32,['.rr.','r..r','r..r','.rr.'].map((r,i)=>r),{r:'#E03C50'});
    d.px(54,32,'#FFFFFF');
    // floor tiles
    d.rect(0,30,64,10,'#F4EEF0');
    for(let y=30;y<40;y+=3) for(let x=((y/3)%2)*4;x<64;x+=8) d.rect(x,y,4,3,'#E4DAE4');
    d.rect(52,30,11,8,'#7AA8D8'); d.rect(55,32,6,5,'#FFFFFF'); d.stamp(56,32,['.rr.','r..r','r..r','.rr.','....'],{r:'#E03C50'});
    for(const x of [28,46]) d.vline(x,28,33,'#5A5A6A');
    d.hline(52,62,37,'#5A88B8');
    // sprinkles on wall stripe
    for(let x=2;x<64;x+=5) d.px(x,17,['#F8C840','#70C8F0','#E04878','#70D890'][x%4]);
    // donut sign on wall
    d.ell(20,10,4,4,'#D89048'); d.ell(20,10,3,3,'#F07AA8'); d.circ(20,10,1,'#F8D8E4'); d.px(18,8,'#FFFFFF'); d.px(22,11,'#FFE070');
  },
  // 판다 숲: 안개 낀 대나무 숲, 대나무 먹는 판다, 씹다 만 대나무
  'any:c1-16': d=>{
    d.grad(0,0,64,28,['#D8EED8','#C4E4C4','#B0DAB0','#A0D0A0']);
    const bam=(x,w,c,c2,top)=>{d.rect(x,top,w,30-top,c); for(let y=top+4;y<30;y+=6) d.hline(x,x+w-1,y,c2);};
    for(const x of [2,9,16,23,30,37,44,52,59]) bam(x,1,'#9ACB98','#86B884',0);
    for(const x of [5,20,33,48,61]) bam(x,2,'#6AAE68','#4A8E4A',0);
    // leaves
    const leaf=(x,y,c)=>{d.line(x,y,x+3,y-1,c); d.line(x,y+1,x+3,y,c);};
    for(const [x,y] of [[6,6],[21,10],[34,4],[49,8],[30,14],[57,3]]) {leaf(x,y,'#4A8E4A'); leaf(x-4,y+3,'#5A9E58');}
    // front bamboo right
    bam(60,3,'#3E8A44','#2A6A32',0); d.vline(60,0,29,'#5AAA5E');
    // ground
    d.rect(0,28,64,12,'#7AB86A'); d.hline(0,63,28,'#5A9A50'); for(let i=0;i<20;i++){const x=d.ri(0,62), y=d.ri(30,39); d.px(x,y,'#68A85A'); d.px(x+1,y-1,'#68A85A');}
    // panda sitting
    const B='#2A2A32', Wt='#F8F8F4', W2='#DAD8D4';
    d.ell(46,27,8,7,Wt); d.ell(46,29,7,4,W2); d.ell(46,29,6,3,Wt);
    d.circ(46,16,6,Wt); d.ell(46,18,5,4,Wt);
    d.circ(41,11,2,B); d.circ(51,11,2,B);
    d.ell(43,16,1.5,2,B); d.ell(49,16,1.5,2,B); d.px(43,15,'#FFFFFF'); d.px(49,15,'#FFFFFF');
    d.rect(45,18,3,1,B); d.px(46,19,B);
    d.circ(42,19,0.7,'#F4B0B8'); d.circ(50,19,0.7,'#F4B0B8');
    d.ell(38,22,3,1.5,'#F8F8F4');
    d.ell(39,30,3,4,B); d.ell(53,30,3,4,B); d.ell(40,33,3,2,B); d.ell(52,33,3,2,B);
    d.ell(38,23,2,4,B); d.ell(54,23,2,4,B);
    d.rect(40,22,13,4,B); d.rect(40,21,13,1,B);
    // bamboo stalk in paws, to mouth
    d.line(41,25,48,14,'#6AAE68'); d.line(42,25,49,14,'#4A8E4A'); leaf(48,12,'#4A8E4A'); leaf(46,10,'#5A9E58');
    d.ell(46,22,4,2,B);
    // chewed bamboo bits on ground near pet
    d.line(24,35,29,33,'#8AC078'); d.px(24,36,'#4A8E4A'); d.px(29,34,'#4A8E4A');
    d.stamp(27,37,['gg.','.gg'],{g:'#6AAE68'});
    d.px(58,36,'#6AAE68'); d.px(59,36,'#6AAE68');
    // mist band
  },
  // 천 년 된 대학: 돌 강의실, 스테인드글라스, 큰 옛 시계, 계단식 나무 의자, 거미줄, 촛불
  'any:c2-8': d=>{
    d.rect(0,0,64,28,'#8C8478');
    for(let y=0;y<28;y+=4) for(let x=((y/4)%2)*4;x<64;x+=8){d.hline(x,x+7,y,'#7A7266'); d.vline(x,y,y+3,'#7A7266');}
    d.dither(0,0,64,6,'#7A7266','#8C8478');
    // stained glass pointed window
    d.poly([[24,22],[24,8],[29,2],[34,8],[34,22]],'#5A5246');
    d.poly([[25,21],[25,8],[29,3],[33,8],[33,21]],'#3A60B0');
    const sg=['#E04848','#F8C840','#48B070','#9058C0'];
    for(let y=4;y<21;y++) for(let x=25;x<34;x++) if(d.get(x,y)==='#3A60B0' && ((x*3+y*5)%7<2)) d.px(x,y,sg[(x+y)%4]);
    d.vline(29,3,21,'#2A2A2A'); d.hline(25,33,12,'#2A2A2A'); d.hline(25,33,17,'#2A2A2A');
    // light beam
    for(let y=22;y<40;y++) for(let x=24+Math.floor((y-22)*0.6);x<34+Math.floor((y-22)*0.9);x++) if((x+y)%3===0) d.px(x,y,'#C8BEA0');
    // big old clock
    d.circ(54,8,6,'#6A4A28'); d.circ(54,8,5,'#F0E4C0'); d.circ(54,8,4,'#E4D4A8');
    for(let i=0;i<12;i+=3){const a=i/12*Math.PI*2; d.px(54+Math.sin(a)*4,8-Math.cos(a)*4,'#3A2A1A');}
    d.line(54,8,54,5,'#3A2A1A'); d.line(54,8,56,9,'#3A2A1A');
    d.ring(54,8,6,'#C8A050');
    // cobwebs
    d.line(0,0,6,0,'#D8D8DC'); d.line(0,0,0,6,'#D8D8DC'); d.line(0,0,4,4,'#D8D8DC'); d.line(0,3,3,0,'#D8D8DC'); d.line(0,5,5,0,'#D8D8DC');
    d.line(63,16,63,22,'#D8D8DC'); d.line(63,19,60,22,'#D8D8DC');
    // candle chandelier
    d.vline(12,0,4,'#4A3A2A'); d.hline(7,17,5,'#6A5038'); for(const x of [7,12,17]){d.vline(x,3,4,'#F4ECD8'); d.px(x,2,'#FFC040');} d.px(12,1,'#FFE890');
    // floor stone
    d.rect(0,28,64,12,'#A49A88'); d.hline(0,63,28,'#6A6258');
    for(let y=31;y<40;y+=4) d.hline(0,63,y,'#948A78');
    for(let y=28;y<40;y+=4) for(let x=(y%8?3:9);x<64;x+=12) d.vline(x,y+1,y+3,'#948A78');
    // tiered benches (right, rising back)
    const bench=(x0,y)=>{d.rect(x0,y,64-x0,2,'#8A5A30'); d.hline(x0,63,y,'#B07A44'); d.rect(x0,y+2,64-x0,4,'#5E3A1E'); for(let x=x0+2;x<64;x+=6) d.vline(x,y+2,y+5,'#4A2C14');};
    bench(44,16); bench(40,22); bench(37,29);
    // dozing pillow + open old book on lowest bench
    d.ell(46,28,3,1,'#F0E0F0'); d.stamp(52,27,['wwkww','wwkww'],{w:'#F4E8C8',k:'#B09A70'});
    d.stamp(48,23,['zzzz','..z.','.z..','zzzz'],{z:'#FFFFFF'}); d.stamp(53,18,['zzz','.z.','zzz'],{z:'#E8E8F0'});
    // lectern
    d.poly([[26,25],[33,23],[33,26],[26,28]],'#7A4A24'); d.rect(29,27,2,8,'#5E3A1E'); d.rect(27,34,6,2,'#4A2C14');
    d.hline(27,32,24,'#F4E8C8'); d.px(32,23,'#F4E8C8');
    // dust motes
    for(const [x,y] of [[28,27],[31,31],[35,36],[30,35]]) d.px(x,y,'#F4ECD0');
  },
  // 후지산 꼭대기: 해돋이, 구름바다, 붉은 화산암 정상, 도리이, 등산 지팡이
  'any:c2-12': d=>{
    d.grad(0,0,64,20,['#3A2A6A','#5A3A82','#8A4A8A','#C25E86','#E87E78','#F8A868','#FCC870']);
    d.circ(44,19,5,'#FFE89A'); d.circ(44,19,4,'#FFF8D8');
    for(const [a,b] of [[30,8],[36,4],[44,2],[52,4],[58,8]]) d.line(44,13,a,b,'#FFD890');
    d.px(8,3,'#FFFFFF'); d.px(18,6,'#F0E0FF'); d.px(3,9,'#F0E0FF');
    // sea of clouds
    d.rect(0,20,64,9,'#F4C8C0');
    for(let x=-2;x<66;x+=7) d.ell(x,21,4,2,'#FFE4D8');
    for(let x=2;x<66;x+=9) d.ell(x,24,5,2,'#F8D4CC');
    for(let x=-3;x<66;x+=8) d.ell(x,27,5,2,'#E8B0B0');
    d.hline(36,52,21,'#FFF4E0');
    // summit ground (left flat, crater rim rising right)
    d.poly([[0,28],[30,27],[40,24],[50,20],[64,18],[64,40],[0,40]],'#7A4038');
    d.poly([[0,30],[30,29],[42,26],[52,22],[64,21],[64,40],[0,40]],'#8C4C40');
    d.hline(0,30,28,'#A8665A'); d.line(30,27,50,20,'#A8665A'); d.line(50,20,63,18,'#A8665A');
    for(let i=0;i<30;i++){const x=d.ri(0,63), y=d.ri(31,39); d.px(x,y,d.rnd()<.5?'#6E3A32':'#A05C50');}
    // snow patches
    d.hline(54,58,20,'#F8F4FF'); d.hline(55,57,21,'#E0E0F0'); d.hline(36,39,26,'#F8F4FF');
    // torii
    const T='#E04030', T2='#A82A20';
    d.rect(46,9,15,2,T); d.hline(45,61,9,T2); d.hline(44,45,8,T2); d.hline(61,62,8,T2); d.rect(47,13,13,1,T);
    d.rect(48,11,2,11,T); d.rect(57,11,2,10,T); d.vline(49,11,21,T2); d.vline(58,11,20,T2); d.rect(53,11,1,2,T2);
    // walking stick with bell & flag
    d.vline(27,20,29,'#D8B880'); d.vline(28,22,29,'#B89860'); d.rect(28,20,3,2,'#FFFFFF'); d.px(29,21,'#E04030'); d.px(26,23,'#F8C840');
    // stone cairn
    d.ell(36,30,2,1,'#5E3430'); d.ell(36,28,1.5,1,'#6E4038'); d.px(36,27,'#7A4A40');
  },
  // 불꽃 축제: 밤하늘의 큰 하트 불꽃, 다른 불꽃들, 강물 반사, 등불 줄, 노점
  'any:c2-16': d=>{
    d.grad(0,0,64,24,['#0C0C28','#141638','#1C1E48','#262858']);
    for(const [x,y] of [[4,2],[14,9],[30,3],[61,17],[2,14]]) d.px(x,y,'#B0B8E0');
    // heart firework
    for(const [x,y] of heartPts(41,11,11,22)) d.px(x,y,'#C04A8A');
    for(const [x,y] of heartPts(41,11,8.5,160)) d.px(x,y,'#FF6AA8');
    for(const [x,y] of heartPts(41,11,7.5,160)) d.px(x,y,'#FF6AA8');
    for(const [x,y] of heartPts(41,11,5,14)) d.px(x,y,'#FFB0D0');
    for(const [x,y] of heartPts(41,11,9.5,16)) d.px(x,y,'#FFFFFF');
    d.px(41,11,'#FFFFFF');
    // gold burst
    const burst=(cx,cy,r,c,c2)=>{for(let i=0;i<12;i++){const a=i/12*Math.PI*2; d.line(cx+Math.cos(a)*2,cy+Math.sin(a)*2,cx+Math.cos(a)*r,cy+Math.sin(a)*r,c); d.px(cx+Math.cos(a)*(r+1),cy+Math.sin(a)*(r+1),c2);} d.px(cx,cy,'#FFFFFF');};
    burst(14,7,4,'#F8C840','#FFF0A0'); burst(59,5,3,'#60E0E8','#C8FFFF');
    // rising trail
    d.vline(24,12,20,'#F8C840'); d.px(24,11,'#FFFFFF');
    // far bank with stalls
    d.rect(26,20,38,4,'#1A1430');
    for(const [x,c] of [[30,'#E04040'],[40,'#F8A040'],[50,'#E04040'],[58,'#F0D060']]){d.poly([[x-1,20],[x+6,20],[x+5,18],[x,18]],c); d.rect(x,20,5,2,'#FFE8A0');}
    // lantern string
    d.line(0,16,26,19,'#5A4A6A'); for(let x=2;x<26;x+=4){const y=16+Math.round(x*3/26); d.rect(x,y+1,2,2,x%8===2?'#FF5A4A':'#FFC84A');}
    // river
    d.rect(26,24,38,8,'#1A2450');
    for(let y=26;y<32;y+=3) d.hline(26,63,y,'#24306A');
    for(let x=31;x<52;x+=2){const y=25+d.ri(0,3); d.vline(x,y,y+d.ri(0,2),x%4===1?'#FF6AA8':'#C04A8A');}
    for(const x of [38,41,44]) d.vline(x,25,30,'#FFB0D0');
    d.vline(59,25,27,'#60E0E8'); d.vline(58,28,29,'#60E0E8');
    for(const x of [32,42,52,60]) d.hline(x,x+2,24,'#FFE8A0');
    // near ground: left hill + bottom bank
    d.poly([[0,20],[14,20],[26,23],[29,32],[0,32]],'#26402E'); d.line(14,20,26,23,'#3A5A40'); d.hline(0,13,20,'#3A5A40');
    d.rect(0,32,64,8,'#2A4632'); d.hline(26,63,32,'#3A5A40');
    for(let i=0;i<22;i++){const x=d.ri(0,62), y=d.ri(22,39); if(d.get(x,y)!=='#1A2450') d.px(x,y,'#34543C');}
    // picnic mat & sparkler
    d.rect(44,34,12,4,'#4A6AC0'); d.dither(44,34,12,4,'#4A6AC0','#6A8AE0'); d.vline(58,32,36,'#A0A0A0'); d.stamp(57,30,['y.y','.W.','y.y'],{y:'#F8C840',W:'#FFFFFF'});
  },
};
