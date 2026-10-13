// art_6: penguin, hedgehog, stv, jake, cinnamoroll, miles, sponge, kurimanju, homer, pachy, tibfox
const A={};
// ---------- helpers ----------
const stars=(d,n,x0,y0,w,h,cols)=>{for(let i=0;i<n;i++) d.px(d.ri(x0,x0+w-1),d.ri(y0,y0+h-1),cols[i%cols.length])};
const twinkle=(d,x,y,c,cc)=>{d.px(x,y,cc||c); d.px(x-1,y,c); d.px(x+1,y,c); d.px(x,y-1,c); d.px(x,y+1,c)};
const bigTwinkle=(d,x,y,c,cc)=>{d.stamp(x-2,y-2,['..a..','..a..','aabaa','..a..','..a..'],{a:c,b:cc||'#FFFFFF'})};
const cloud=(d,cx,cy,w,c,sh)=>{const r=Math.max(2,Math.round(w/4)); d.ell(cx,cy+1,w/2,r*0.7,sh||c); d.circ(cx-w/4,cy,r*0.8,c); d.circ(cx+w/5,cy-1,r,c); d.ell(cx,cy+1,w/2-1,r*0.6,c); if(sh) d.hline(cx-w/2+2,cx+w/2-2,cy+Math.round(r*0.7)+1,sh)};
const wave=(d,x0,x1,y,amp,per,c,th=1)=>{for(let x=x0;x<=x1;x++){const yy=Math.round(y+Math.sin(x/per)*amp); for(let t=0;t<th;t++) d.px(x,yy+t,c)}};

// ================= PENGUIN =================
Object.assign(A,{
  'penguin:s0': d=>{ // 얼음 한 조각 — 반짝이는 큐브, 안에 기포, 김
    const O='#1E3A5A', T='#F0FBFF', T2='#D2F0FC', L='#A8DCF4', L2='#8CCCEC', R='#6EB4E0', R2='#5AA0D0', W='#FFFFFF';
    d.poly([[16,4],[29,10],[16,16],[3,10]],T); d.poly([[16,7],[24,10],[16,13],[8,10]],T2);
    d.poly([[3,10],[16,16],[16,29],[3,23]],L); d.poly([[16,16],[29,10],[29,23],[16,29]],R);
    d.poly([[3,18],[16,24],[16,29],[3,23]],L2); d.poly([[16,24],[29,18],[29,23],[16,29]],R2);
    d.line(3,10,16,16,W); d.line(16,16,29,10,'#BFE6F8'); d.vline(16,16,28,'#DDF4FF');
    d.line(4,11,4,20,W); d.line(5,12,5,15,W); // 반사
    d.line(18,19,26,15,'#9AD2F0'); d.line(18,20,22,18,'#9AD2F0');
    for(const [x,y] of [[8,17],[11,21],[7,22],[21,22],[25,19]]) {d.px(x,y,W);}
    d.ring(10,19,1,'#E6F8FF'); d.ring(23,24,1,'#BFE6F8');
    d.outline(O);
    // 서리 & 반짝임 & 냉기
    d.hline(9,14,4,'#FFFFFF'); d.px(11,3,W); d.px(20,4,W);
    bigTwinkle(d,27,4,'#BFEFFF'); twinkle(d,4,4,'#BFEFFF',W); twinkle(d,29,28,'#BFEFFF',W);
    d.stamp(0,26,['.c..','c.c.','...c'],{c:'#CFEAF8'});
  },
  'penguin:s1': d=>{ // 정어리 — 은빛 몸, 파란 등, 점무늬, 얼음 조각
    const O='#1C2A44', B='#2E5A8C', B2='#4A7EB0', M='#B4CCDE', S='#EEF4F8', W='#FFFFFF', K='#101820', I='#CFEFFF', I2='#9CD6F0';
    // 꼬리
    d.poly([[1,6],[7,13],[1,20],[4,13]],B2); d.line(2,8,5,13,B); d.line(2,18,5,13,B);
    // 몸
    d.ell(17,13,12,6.5,M); d.ell(17,16,11,3.5,S);
    d.poly([[6,12],[12,8],[22,7],[28,10],[29,12],[7,13]],B); d.hline(8,27,12,B2); d.hline(10,24,13,B2);
    d.poly([[12,8],[15,4],[19,7]],B2); // 등지느러미
    d.poly([[13,19],[15,23],[18,19]],M); d.poly([[6,16],[4,19],[9,17]],M);
    for(const x of [10,13,16,19]) {d.px(x,15,'#3A4E66');}
    d.line(8,17,22,18,W); d.hline(12,20,17,W);
    // 머리
    d.line(23,8,22,18,'#7A9CB8');
    d.circ(26,12,2,W); d.px(26,12,K); d.px(27,12,K); d.px(26,13,K); d.px(27,13,K); d.px(26,11,W);
    d.hline(28,30,16,'#5A7A98');
    d.outline(O);
    // 얼음 조각
    for(const [x,y] of [[4,25],[12,26],[20,24],[26,27]]){d.rect(x,y,4,4,I); d.hline(x,x+3,y,W); d.vline(x+3,y+1,y+3,I2); d.frame(x-1,y-1,6,6,'#5A8CB0'); d.px(x-1,y-1,null); }
    twinkle(d,23,2,'#FFFFFF','#CFEFFF'); d.px(30,4,'#CFEFFF'); twinkle(d,8,1,'#CFEFFF',W);
  },
  'penguin:s2': d=>{ // 최고의 조약돌 — 매끈한 돌 + 하트
    const O='#2A2A3A', G='#8E959F', G1='#B7BEC7', G2='#D7DDE4', Dk='#676E79', D2='#535963', W='#FFFFFF', H='#F07890', H2='#C84C6A', H3='#FFC0CC';
    d.ell(16,21,12,7.5,'#4A505A'); d.ell(16,20,12,7,G); d.ell(14,18,9,5,G1); d.ell(12,16,5,2.5,G2);
    d.ell(18,24,9,2.5,Dk);
    d.hline(9,22,26,D2); d.hline(12,20,27,D2);
    d.hline(9,12,14,W); d.px(8,15,W); d.px(13,14,W);
    // 무늬 띠 (돌의 줄무늬)
    d.line(5,22,11,20,'#A3AAB4'); d.line(11,20,19,21,'#A3AAB4'); d.line(19,21,27,18,'#A3AAB4');
    for(const [x,y] of [[20,17],[23,22],[8,23],[17,25]]) d.px(x,y,Dk);
    d.outline(O);
    d.ell(16,30,10,1,'#9FB4C8');
    // 하트
    d.stamp(11,1,['.hh.hh.','hwhhhhh','hhhhhhh','.hhhhh.','..hhh..','...h...'],{h:H,w:H3});
    d.px(17,2,H2); d.px(16,3,H2); d.px(15,4,H2);
    twinkle(d,25,6,'#FFE070',W); twinkle(d,5,8,'#FFE070',W); d.px(28,12,'#FFE070');
  },
  'penguin:c0': d=>{ // 동네 아이스링크 — 펜스, 눈 덮인 나무, 배 미끄럼 소용돌이 자국
    d.grad(0,0,64,14,['#B8C8E0','#C6D4E8','#D4E0F0','#E0E8F4']);
    // 먼 건물 & 나무
    d.rect(40,4,14,10,'#9AA8C0'); d.poly([[39,4],[47,0],[55,4]],'#8090AC'); d.rect(43,7,2,2,'#F8E8A0'); d.rect(49,7,2,2,'#F8E8A0');
    for(const [x,h] of [[4,9],[11,7],[19,10],[27,8],[34,9],[58,10]]){d.poly([[x-4,14],[x,14-h],[x+4,14]],'#3E7A6A'); d.poly([[x-2,14-h+4],[x,14-h],[x+2,14-h+4]],'#FFFFFF'); d.hline(x-4,x+4,14,'#2E5E50'); d.px(x-3,13,'#FFFFFF'); d.px(x+2,11,'#FFFFFF')}
    // 펜스
    d.rect(0,14,64,6,'#F4F6FA'); d.hline(0,63,16,'#E04848'); d.hline(0,63,17,'#3060B0'); d.hline(0,63,19,'#AAB6C8');
    for(let x=0;x<64;x+=8) d.vline(x,14,19,'#C8D2E0');
    d.rect(28,14,8,2,'#FFD848'); d.px(31,14,'#E04848'); d.px(32,15,'#E04848');
    // 얼음
    d.rect(0,20,64,20,'#CFEAF8'); d.rect(0,20,64,2,'#E4F4FC');
    for(let y=23;y<40;y+=3) for(let x=(y*7)%11;x<64;x+=13) d.hline(x,x+4,y,'#E6F6FF');
    d.hline(0,63,30,'#BFE0F2');
    // 배 미끄럼 소용돌이
    const cx=42,cy=31; for(let a=0;a<15;a+=.05){const r=1+a*0.75; d.px(cx+Math.cos(a)*r*1.6,cy+Math.sin(a)*r*0.65,'#9CCAE4')}
    d.line(14,33,cx-12,cy+2,'#A9D2EA'); d.line(14,34,cx-12,cy+3,'#BCDCEE');
    // 가로등
    d.vline(58,8,30,'#3A4458'); d.rect(56,6,5,2,'#3A4458'); d.rect(57,8,3,2,'#FFF0A0'); d.px(57,30,'#3A4458'); d.px(59,30,'#3A4458'); d.ell(58,33,4,1,'#A9D2EA');
    // 콘
    d.poly([[50,36],[52,30],[54,36]],'#F48838'); d.hline(51,53,33,'#FFFFFF'); d.hline(49,55,36,'#C86020');
    // 눈송이
    for(let i=0;i<34;i++){const x=d.ri(0,63), y=d.ri(0,38); if(!(x>=5&&x<=22&&y>=19)) d.px(x,y,'#FFFFFF')}
  },
  'penguin:c1': d=>{ // 차가운 북쪽 바다 (수중) — 유빙, 빛줄기, 고래, 정어리 떼
    d.grad(0,0,64,40,['#3A9CC4','#2E88B4','#2474A2','#1C6090','#164E7C','#103E68','#0C3258']);
    // 수면 & 유빙
    d.rect(0,0,64,2,'#7FD0EC'); d.rect(4,0,12,4,'#E8F8FF'); d.rect(6,4,8,1,'#B8E2F4'); d.rect(46,0,16,3,'#E8F8FF'); d.rect(50,3,9,2,'#B8E2F4'); d.rect(28,0,5,2,'#E8F8FF');
    // 빛줄기
    for(const x0 of [18,30,40]) for(let y=2;y<26;y+=2) d.px(x0+Math.floor(y/2),y,'#4FAED2');
    // 고래 (머리 왼쪽, 꼬리 오른쪽)
    const Wh='#34506C', Wl='#4A6A88', Wb='#BCCAD6';
    d.ell(40,16,15,6.5,Wh); d.ell(38,14,12,3,Wl);
    d.poly([[52,13],[60,9],[56,15],[60,21],[52,19]],Wh); d.poly([[58,8],[63,6],[60,12]],Wh); d.poly([[58,22],[63,24],[60,18]],Wh);
    d.ell(37,20,12,2.5,Wb); for(let x=27;x<48;x+=3) d.vline(x,19,21,'#8E9EB0');
    d.poly([[34,21],[30,27],[38,22]],Wh); // 지느러미
    d.px(30,16,'#FFFFFF'); d.px(31,16,'#101820'); d.line(25,18,29,19,'#24384E');
    // 물보라 숨구멍 거품
    for(const [x,y] of [[33,7],[34,5],[32,3],[35,2]]) d.ring(x,y,0.6,'#9EE0F4');
    // 정어리 떼
    const fish=(x,y)=>{d.hline(x,x+2,y,'#C8DCE8'); d.px(x+3,y,'#E8F2F8'); d.px(x-1,y-1,'#9AB4C8'); d.px(x-1,y+1,'#9AB4C8'); d.px(x+2,y-1,'#6A8AA8')};
    for(const [x,y] of [[24,28],[29,26],[33,29],[28,31],[37,27],[41,30],[35,32],[45,28],[43,33],[49,31],[25,33],[39,35]]) fish(x,y);
    // 해저
    d.poly([[0,36],[14,35],[30,37],[46,35],[64,36],[64,40],[0,40]],'#2A3E50');
    d.ell(52,36,6,3,'#3A5266'); d.ell(51,35,4,1,'#4A6478'); d.ell(30,38,4,2,'#3A5266');
    for(const x of [57,60,62]) for(let y=26;y<37;y++) d.px(x+(y%4<2?0:1),y,'#2E7A5A');
    // 거품
    for(const [x,y] of [[12,10],[14,6],[11,14],[22,12],[46,24],[48,21]]) d.ring(x,y,0.6,'#8ED6F0');
    d.px(9,22,'#8ED6F0'); d.px(55,30,'#8ED6F0');
  },
  'penguin:c2': d=>{ // 남극 오로라 밤 — 오로라, 별, 빙산, 옹기종기 모인 친구 실루엣
    d.grad(0,0,64,30,['#070B22','#0A1230','#0E1A40','#14244E','#1C305C']);
    stars(d,40,0,0,64,26,['#FFFFFF','#B8C8FF','#FFF4C0']);
    // 오로라 리본
    for(let x=0;x<64;x++){
      const y1=Math.round(9+Math.sin(x/7)*3+Math.sin(x/3)*0.7), y2=Math.round(5+Math.sin(x/9+2)*2.5);
      for(let t=0;t<6;t++) d.px(x,y1+t,t<1?'#B8FFD8':t<3?'#5CEFA2':'#2EA87C');
      for(let t=0;t<3;t++) d.px(x,y2+t-3,t<1?'#E0B8FF':'#9A68E0');
      if(x%3===0) for(let t=6;t<10;t++) if((t+x)%2) d.px(x,y1+t,'#1E6A60');
    }
    // 빙산/산
    d.poly([[22,30],[32,16],[38,22],[44,14],[56,30]],'#C8DCF0'); d.poly([[32,16],[34,30],[22,30]],'#9AB4D4'); d.poly([[44,14],[46,30],[38,22]],'#9AB4D4');
    d.poly([[50,30],[58,20],[64,26],[64,30]],'#B4CCE6'); d.line(32,16,33,19,'#FFFFFF'); d.line(44,14,45,17,'#FFFFFF');
    // 눈밭
    d.rect(0,29,64,11,'#DCEAF8'); d.hline(0,63,29,'#F4FAFF'); d.dither(0,36,64,4,'#C8DAF0','#DCEAF8');
    d.ell(52,34,10,2,'#BCD2EA');
    // 친구들 옹기종기
    const pen=(x,y)=>{d.ell(x,y,2,3,'#14182A'); d.ell(x,y+1,1,2,'#F4F6FA'); d.px(x,y-2,'#14182A'); d.px(x+1,y-2,'#F8A018')};
    for(const [x,y] of [[44,31],[48,30],[52,31],[56,30],[60,31],[50,33],[54,33],[58,33]]) pen(x,y);
    // 오로라 반사 반짝
    for(const [x,y] of [[30,32],[36,35],[40,33],[26,37]]) d.px(x,y,'#9AF0C8');
    bigTwinkle(d,60,3,'#C0D0FF');
  },
});

// ================= HEDGEHOG =================
Object.assign(A,{
  'hedgehog:s0': d=>{ // 가시에 꽂혀 온 사과
    const O='#3A1A1A', R='#E03A3A', R2='#B42634', R3='#FF7466', W='#FFFFFF', St='#6A4024', L='#5CB848', L2='#3C8A34', Q='#7A5030', Qt='#F2E2C4';
    // 가시들 (사과에 박힘) — 사과 뒤로
    for(const [x0,y0,x1,y1] of [[21,10,29,3],[24,15,31,13],[8,10,2,4]]){d.line(x0,y0,x1,y1,Q); d.line(x0+1,y0,x1+1,y1,Q); d.px(x1,y1,Qt); d.px(x1+1,y1,Qt)}
    d.circ(12,20,9,R); d.circ(20,20,9,R); d.ell(16,23,12,7,R);
    d.ell(19,25,9,4,R2); d.circ(10,16,3,R3); d.px(8,15,W); d.px(9,14,W); d.px(9,15,W);
    d.ell(16,12,3,1,R2);
    d.line(16,12,17,5,St); d.line(17,12,18,5,St);
    d.poly([[18,7],[25,4],[22,9]],L); d.line(19,7,23,5,L2);
    // 구멍 자국
    for(const [x,y] of [[21,10],[24,15],[8,11]]) d.px(x,y,'#7A1A20');
    d.outline(O);
    twinkle(d,5,27,'#FFE070',W); d.px(28,26,'#FFE070');
  },
  'hedgehog:s1': d=>{ // 숲속 버섯 우산 — 손잡이처럼 굽은 줄기
    const O='#3A1C1C', C='#E04848', C2='#B23040', C3='#FF8A78', Wd='#FFF6EC', G='#E6CDA8', G2='#C8AA80', S='#F6EAD2', S2='#DCC6A2', Gr='#5CB848', Gr2='#3C8A34';
    d.poly([[2,15],[5,8],[10,4],[16,3],[22,4],[27,8],[30,15]],C); d.ell(16,9,13,6,C);
    d.ell(11,7,6,2,C3); d.ell(20,13,10,2,C2);
    d.rect(2,15,29,2,G); for(let x=4;x<30;x+=2) d.px(x,16,G2);
    // 점
    d.ell(9,9,2,1.5,Wd); d.circ(18,6,1.6,Wd); d.ell(25,10,2,1.4,Wd); d.circ(14,12,1,Wd); d.px(5,13,Wd); d.px(28,14,Wd);
    // 줄기 + 손잡이 고리
    d.rect(14,17,5,9,S); d.vline(18,17,25,S2); d.vline(14,17,25,S2);
    d.rect(13,25,6,3,S); d.rect(10,27,5,3,S); d.rect(9,24,3,4,S); d.hline(10,17,29,S2); d.px(9,24,S2);
    d.px(15,19,Wd); d.px(15,20,Wd);
    d.outline(O);
    // 풀 & 빗방울
    d.stamp(20,27,['g...g.','.g.g.g','ggGgGg'],{g:Gr,G:Gr2});
    d.stamp(1,20,['.b.','bwb','.b.'],{b:'#7CC8F0',w:'#DFF4FF'}); d.px(29,21,'#7CC8F0'); d.px(29,22,'#7CC8F0');
  },
  'hedgehog:s2': d=>{ // 전설의 가시 갑옷 — 가시 깃 투구, 수줍은 볼
    const O='#22222E', M='#C8D0DC', M2='#9AA4B4', M3='#6A7488', W='#FFFFFF', Q='#8A5A34', Q2='#5E3A20', Qt='#F2DDB8', P='#F28AA0', Gd='#F2C040', Gd2='#B88820';
    // 뒤쪽 가시 방사
    for(let i=0;i<11;i++){const a=Math.PI*(1.05+i*0.09); const x1=16+Math.cos(a)*15, y1=15+Math.sin(a)*14; d.line(16+Math.cos(a)*8,15+Math.sin(a)*7,x1,y1,i%2?Q:Q2); d.line(17+Math.cos(a)*8,15+Math.sin(a)*7,x1+1,y1,Q); d.px(x1,y1,Qt)}
    // 투구
    d.circ(16,15,9,M); d.rect(7,15,19,10,M); d.poly([[7,24],[16,29],[25,24]],M);
    d.ell(13,11,4,3,'#E4EAF2'); d.px(11,9,W); d.px(12,9,W);
    d.rect(24,12,2,13,M2); d.poly([[16,26],[25,23],[25,25],[16,29]],M2);
    d.vline(16,6,14,M2); // 가운데 능선
    // 바이저
    d.rect(9,16,15,4,M3); d.hline(9,23,16,'#4A5266'); for(let x=10;x<23;x+=3) d.vline(x,17,19,'#2A2E3A');
    for(const x of [9,23]) d.px(x,22,Gd);
    // 수줍은 볼
    d.ell(10,23,1.5,0.8,P); d.ell(22,23,1.5,0.8,P);
    // 숨구멍 & 금테
    d.hline(8,24,21,Gd); d.hline(8,24,25,Gd2); for(let x=13;x<20;x+=2) d.px(x,27,M3);
    d.outline(O);
    // 금장 가시 문양
    d.stamp(14,3,['.g.','ggg'],{g:Gd});
    d.stamp(26,25,['.p.p.','ppppp','.ppp.','..p..'],{p:P});
    twinkle(d,4,27,'#FFE070',W);
  },
  'hedgehog:c0': d=>{ // 낙엽 쌓인 골목 — 벽돌 담, 은행나무, 낙엽 더미에 빼꼼 가시
    d.grad(0,0,64,12,['#8FD0F4','#A6DAF6','#BEE4F8']);
    cloud(d,10,4,12,'#FFFFFF','#DDEFFA');
    // 뒤 담장
    d.rect(0,12,40,13,'#D8C8B0'); for(let y=12;y<25;y+=3){d.hline(0,39,y,'#C2AE92'); for(let x=(y%6?0:4);x<40;x+=8) d.vline(x,y,y+2,'#C2AE92')}
    d.hline(0,39,12,'#A89478');
    // 오른쪽 벽돌 건물
    d.rect(40,2,24,26,'#C86A4A'); for(let y=3;y<28;y+=2){d.hline(40,63,y,'#A85438'); for(let x=40+(y%4===1?0:3);x<64;x+=6) d.px(x,y+1,'#A85438')}
    d.rect(46,6,8,7,'#5A3A2A'); d.rect(47,7,6,5,'#9AD0F0'); d.vline(50,7,11,'#5A3A2A'); d.hline(47,52,9,'#5A3A2A'); d.rect(45,13,10,1,'#7A4A3A');
    d.rect(55,14,7,14,'#6A4A34'); d.rect(56,15,5,13,'#8A6040'); d.px(57,21,'#F2C040');
    d.vline(42,2,27,'#7A8494'); d.vline(43,2,27,'#9AA4B4');
    // 나무
    d.rect(29,10,3,16,'#6A4A30'); d.line(31,14,36,10,'#6A4A30'); d.line(29,15,25,11,'#6A4A30');
    d.circ(30,6,7,'#F2A030'); d.circ(24,9,5,'#E88028'); d.circ(36,8,5,'#F6C040'); d.circ(29,4,3,'#FAD060'); d.px(26,7,'#C85A20'); d.px(34,5,'#C85A20');
    // 땅(보도)
    d.rect(0,25,64,15,'#B4ACA0'); d.hline(0,63,25,'#8E867A');
    for(let y=28;y<40;y+=4) d.hline(0,63,y,'#A39B8F'); for(let y=25;y<40;y+=4) for(let x=(y%8?6:0);x<64;x+=12) d.vline(x,y,y+3,'#A39B8F');
    // 낙엽 더미 + 가시
    const LV=['#F2A030','#E06A28','#F6C840','#C8482A','#E88028'];
    d.ell(42,34,11,4,'#E06A28'); d.ell(42,33,9,3,'#F2A030'); d.ell(39,32,4,1,'#F6C840');
    for(let i=0;i<40;i++){const a=d.rnd()*6.28, r=d.rnd(); d.px(42+Math.cos(a)*r*10,33+Math.sin(a)*r*3,LV[i%5])}
    for(const [x,y] of [[40,29],[42,28],[44,29],[46,30],[38,30]]){d.line(x,y+2,x,y,'#6A4024'); d.px(x,y,'#F2DDB8')}
    d.ell(57,36,4,1.5,'#F6C840'); d.ell(58,35,2,1,'#E88028');
    // 흩날리는 낙엽
    for(const [x,y,c] of [[18,14,0],[22,18,1],[36,18,2],[52,20,3],[12,8,4],[48,1,0],[26,30,1],[34,38,2],[60,32,3],[3,34,2]]) {d.px(x,y,LV[c]); d.px(x+1,y,LV[c])}
  },
  'hedgehog:c1': d=>{ // 버섯 마을 숲 — 버섯 집, 불 켜진 창, zZ
    d.grad(0,0,64,26,['#2E5A3A','#356842','#3E7848','#4A8650']);
    // 나무줄기 (배경)
    for(const [x,w,c] of [[3,4,'#244630'],[16,3,'#2A4E34'],[56,5,'#244630'],[33,3,'#2A4E34']]) d.rect(x,0,w,26,c);
    // 잎 덩어리
    for(const [x,y,r] of [[6,2,7],[20,0,6],[36,1,8],[52,2,8],[63,0,6]]){d.circ(x,y,r,'#1E4A2C'); d.circ(x-1,y-1,r-2,'#2A5E36')}
    // 빛줄기
    for(let y=4;y<26;y++) if(y%2) {d.px(24+Math.floor(y/2),y,'#6A9E5A'); d.px(25+Math.floor(y/2),y,'#5A9050')}
    // 땅
    d.rect(0,26,64,14,'#5A9A48'); d.hline(0,63,26,'#78B65A'); d.dither(0,36,64,4,'#4E8A40','#5A9A48');
    d.poly([[22,40],[30,30],[40,28],[46,29],[38,32],[34,40]],'#C8A878'); d.line(30,30,40,28,'#E0C498');
    for(let i=0;i<12;i++){const x=d.ri(0,63), y=d.ri(28,39); d.px(x,y,'#3E7A34'); d.px(x+1,y-1,'#3E7A34')}
    // 큰 버섯 집
    d.rect(39,17,12,12,'#F4E6CC'); d.rect(48,17,3,12,'#DCC8A6');
    d.poly([[33,18],[36,10],[45,5],[54,10],[58,18]],'#E04848'); d.ell(45,11,12,6,'#E04848'); d.hline(33,58,18,'#B23040'); d.ell(41,8,5,2,'#FF8A78');
    d.circ(40,12,1.5,'#FFF6EC'); d.circ(48,9,1.8,'#FFF6EC'); d.circ(53,14,1.2,'#FFF6EC'); d.px(36,15,'#FFF6EC');
    d.rect(42,22,5,7,'#8A5A34'); d.ell(44,22,2,2,'#8A5A34'); d.px(46,25,'#F2C040');
    d.circ(49,21,1.5,'#FFE070'); d.px(49,21,'#FFF6C0'); d.ring(49,21,1.5,'#8A5A34');
    d.rect(40,29,9,1,'#B48E60');
    // zZ
    d.stamp(51,13,['zzz.','.z..','zzz.'],{z:'#FFFFFF'}); d.stamp(55,9,['zz','zz'],{z:'#DFF4FF'});
    // 작은 버섯 집 (파랑)
    d.rect(57,25,6,6,'#F4E6CC'); d.ell(60,24,5,3,'#4A8AE0'); d.hline(55,64,25,'#2E64B0'); d.px(58,22,'#FFFFFF'); d.px(61,23,'#FFFFFF'); d.rect(59,27,2,4,'#8A5A34');
    // 꼬마 버섯 & 반딧불
    d.rect(28,25,1,2,'#F4E6CC'); d.ell(28,24,2,1,'#F2A030'); d.rect(53,31,1,2,'#F4E6CC'); d.ell(53,30,2,1,'#E04848');
    for(const [x,y] of [[30,16],[26,21],[58,6],[12,12],[33,23]]) {d.px(x,y,'#F6F09A')}
  },
  'hedgehog:c2': d=>{ // 별똥별 고슴도치 언덕 — 밤하늘, 큰 별똥별, 언덕 위 나무
    d.grad(0,0,64,34,['#0C0E2A','#141640','#1E1E54','#2A2864','#3A3070','#4A3878']);
    stars(d,45,0,0,64,28,['#FFFFFF','#FFF0B0','#C8D0FF']);
    d.circ(10,6,3,'#FFF6C8'); d.circ(11,5,3,'#141640'); // 초승달
    // 별똥별
    for(let i=0;i<22;i++){const x=56-i, y=4+Math.round(i*0.55); d.px(x,y,i<6?'#FFFFFF':i<13?'#FFE070':'#F2A040'); if(i<16) d.px(x,y+1,i<8?'#FFE070':'#B87A50')}
    bigTwinkle(d,57,4,'#FFE070','#FFFFFF');
    // 언덕
    d.poly([[0,36],[20,35],[34,30],[46,22],[56,20],[64,21],[64,40],[0,40]],'#1E3A4A');
    d.poly([[30,40],[38,30],[46,24],[56,22],[64,23],[64,40]],'#28485A');
    d.line(34,30,46,22,'#3E6A70'); d.line(46,22,56,20,'#3E6A70');
    d.rect(0,36,64,4,'#1A3240'); d.hline(0,20,35,'#2E5260');
    // 언덕 위 나무
    d.vline(54,13,20,'#14202A'); d.circ(54,11,4,'#14202A'); d.circ(51,13,2,'#14202A'); d.circ(57,13,2,'#14202A');
    // 풀숲에 떨어진 작은 별
    for(const [x,y] of [[40,30],[48,27],[60,26],[44,35],[34,36]]) twinkle(d,x,y,'#F6D860','#FFFFFF');
    for(let x=0;x<64;x+=3) d.px(x,37+(x%2),'#2E5260');
  },
});

// ================= ST. VINCENT =================
Object.assign(A,{
  'stv:s0': d=>{ // 빈티지 이펙트 페달 — 오렌지 퍼즈 박스, 노브 3개, 빨간 LED, 풋스위치, 케이블
    const O='#20141A', B='#F28A2E', B2='#C8621C', B3='#FFB866', M='#D6DAE2', M2='#9AA0AC', M3='#FFFFFF', K='#2A2228', R='#FF3040', Cb='#3A3440', Cb2='#5A5468';
    // 케이블 (왼쪽 잭 → 둥글게)
    d.line(4,14,1,12,Cb); d.line(1,12,1,6,Cb); d.line(1,6,4,3,Cb); d.line(4,3,9,3,Cb); d.px(2,6,Cb2); d.px(5,3,Cb2);
    d.line(28,18,31,20,Cb); d.line(31,20,31,27,Cb);
    // 몸통
    d.rect(4,7,24,22,B); d.rect(4,7,24,2,B3); d.vline(27,9,28,B2); d.hline(4,27,28,B2); d.vline(4,9,27,B3);
    d.rect(3,12,1,4,M2); d.rect(28,16,1,4,M2); // 잭
    // 노브
    for(const x of [9,16,23]){d.circ(x,12,2.2,K); d.circ(x,12,1.4,'#4A4048'); d.px(x,10,M3); d.px(x-1,11,'#6A6070')}
    // 라벨 띠 (물결 그림)
    d.rect(6,16,20,4,'#FFF0D8'); for(let x=7;x<25;x++) d.px(x,18+Math.round(Math.sin(x/1.5)),'#E04060');
    // LED
    d.circ(16,22,1,R); d.px(16,22,'#FFC0C8'); d.px(13,22,'#FFD0D8'); d.px(19,22,'#FFD0D8');
    // 풋스위치
    d.rect(13,24,7,3,M2); d.rect(14,24,5,2,M); d.hline(14,18,24,M3);
    // 나사
    for(const [x,y] of [[6,9],[25,9],[6,26],[25,26]]) d.px(x,y,B2);
    d.outline(O);
    d.stamp(25,1,['..y..','..y..','yyWyy','..y..','..y..'],{y:'#FFE070',W:'#FFFFFF'});
  },
  'stv:s1': d=>{ // 형광 핑크 부츠 — 롱부츠 한 켤레, 스틸레토, 지퍼, 반짝임
    const O='#3A0A24', P='#FF3CA8', P2='#C81E7C', P3='#FF96D2', P4='#FFD0EC', S='#2A2030', Z='#E0E4EC';
    const boot=(x,y)=>{
      d.rect(x,y,7,18,P); d.vline(x+6,y,y+17,P2); d.vline(x+1,y+1,y+15,P3); d.vline(x+2,y+2,y+6,P4);
      d.rect(x-1,y,9,2,P2); d.hline(x-1,x+7,y,P3);
      d.poly([[x,y+16],[x+7,y+15],[x+11,y+19],[x+13,y+21],[x+13,y+23],[x,y+23]],P);
      d.line(x+8,y+18,x+12,y+21,P3); d.hline(x+2,x+12,y+22,P2);
      d.hline(x,x+13,y+23,S); // 밑창
      d.rect(x,y+24,2,4,S); d.px(x+1,y+27,S); d.rect(x+1,y+24,1,3,'#4A4050'); // 굽
      for(let j=y+3;j<y+15;j+=2) d.px(x+5,j,Z); // 지퍼
    };
    boot(3,1); boot(15,3);
    d.outline(O);
    twinkle(d,13,3,'#FFFFFF',P4); d.px(29,10,'#FFE070'); twinkle(d,28,6,'#FFE070','#FFFFFF');
  },
  'stv:s2': d=>{ // 시그니처 기타 — 각진 몸통, 흰 픽가드, 대각선 넥, 스트링
    const O='#160A12', R='#2E3C8C', R2='#1E2860', R3='#5C74D8', R4='#9EB4FF', N='#C88A4A', F='#3A2414', M='#E8ECF2', M2='#9AA0AC', PG='#F4F2EE', PG2='#C8C4C0', W='#FFFFFF';
    // 넥
    d.poly([[12,18],[26,4],[29,7],[15,21]],N); d.poly([[13,18],[26,5],[28,7],[15,20]],F);
    for(let i=0;i<6;i++){const x=16+i*2, y=16-i*2; d.px(x,y,M2); d.px(x+1,y+1,M2)}
    // 헤드
    d.poly([[25,4],[28,0],[31,0],[31,3],[29,6]],R); d.hline(28,30,0,R3);
    for(const [x,y] of [[28,2],[30,1],[29,4],[31,3]]) d.px(x,y,M);
    // 몸통 (각진 비대칭)
    d.poly([[1,20],[5,14],[9,15],[13,11],[18,13],[20,18],[17,22],[20,27],[14,31],[6,31],[2,27],[4,23]],R);
    d.poly([[4,23],[2,27],[6,31],[14,31],[20,27],[17,24],[12,28],[6,28]],R2);
    d.line(2,19,5,15,R3); d.line(6,15,9,16,R3); d.line(13,12,17,14,R4); d.px(3,18,R4); d.line(18,14,19,17,R3);
    // 픽가드
    d.poly([[6,20],[11,15],[15,18],[16,22],[11,27],[6,25]],PG); d.line(11,27,16,22,PG2);
    // 픽업 & 브릿지
    for(const k of [0,1]){d.line(9+k,17,13+k,21,'#20202A'); d.line(6+k,20,10+k,24,'#20202A'); d.line(5+k,24,8+k,27,M2)}
    // 노브
    for(const [x,y] of [[15,25],[17,23],[13,28]]) {d.px(x,y,M); d.px(x+1,y,M2)}
    // 스트링
    d.line(15,17,27,5,'#F0F2F6'); for(let i=0;i<4;i++) d.px(8+i*2,24-i*2,'#B8BCC8');
    d.outline(O);
    d.stamp(23,14,['..nn.','..n.n','..n..','nnn..','nn...'],{n:'#FF3CA8'});
    twinkle(d,4,6,'#FFE070',W); d.px(27,27,'#FFE070'); d.px(25,22,'#FFE070');
  },
  'stv:c0': d=>{ // 동네 레코드 가게 — LP 벽, 진열 상자, 턴테이블, 리프 메모
    d.rect(0,0,64,40,'#3A2A44');
    d.grad(0,0,64,24,['#4A3458','#523A62','#5A406A']);
    // LP 벽 선반 (오른쪽)
    const LP=['#E04060','#F2C040','#40A0E0','#60C080','#F28A2E','#B060E0','#F0F0F0','#2A2A36'];
    for(const sy of [3,12]){ d.rect(26,sy+7,38,1,'#8A5A34'); d.rect(26,sy+8,38,1,'#5E3A20');
      for(let x=27;x<63;x+=1){ const h=5+((x*7+sy)%3); d.vline(x,sy+7-h,sy+6,LP[(x*5+sy)%8]); if(x%4===0) d.vline(x,sy+7-h,sy+6,'#2A1A28')}}
    // 앞에 진열한 LP 커버 하나 + 레코드
    d.rect(40,2,8,8,'#F2C040'); d.circ(44,6,2.5,'#E04060'); d.px(44,6,'#F2C040'); d.frame(40,2,8,8,'#2A1A28');
    // 왼쪽 벽 포스터 & 네온 음표
    d.rect(3,3,10,12,'#F4E6D0'); d.circ(8,8,3,'#1A1418'); d.circ(8,8,1,'#E04060'); d.hline(4,11,13,'#E04060'); d.frame(3,3,10,12,'#2A1A28');
    d.stamp(15,3,['..pp','..p.','..p.','.pp.','ppp.','.p..'],{p:'#FF5CC0'}); d.stamp(19,5,['.pp.','pp.p'],{p:'#FF5CC0'});
    // 바닥 체크 타일
    d.rect(0,24,64,16,'#C8B898'); for(let y=24;y<40;y+=3) for(let x=((y/3)%2)*4;x<64;x+=8) d.rect(x,y,4,3,'#A89878');
    d.hline(0,63,24,'#2A1A28');
    // 레코드 상자들
    for(const [x,c] of [[26,'#8A5A34'],[40,'#7A4A2A']]){ d.rect(x,22,12,9,c); d.hline(x,x+11,22,'#A8744A'); d.hline(x,x+11,30,'#4A2A14');
      for(let i=0;i<5;i++) d.rect(x+1+i*2,17+(i%2),2,6,LP[(i+x)%8]); d.rect(x+1,17,2,6,'#F0F0F0'); d.px(x+2,19,'#2A2A36')}
    // 카운터 + 턴테이블
    d.rect(53,20,11,12,'#6A4A30'); d.hline(53,63,20,'#8A6040'); d.rect(54,22,9,9,'#5A3A24');
    d.rect(53,17,11,3,'#2A2A36'); d.ell(57,17,3,1,'#14141A'); d.px(57,17,'#E04060'); d.line(61,16,59,18,'#D6DAE2');
    // 리프 메모 (악보 쪽지) + 연필 (바닥 중앙)
    d.rect(30,33,12,6,'#FFFBEA'); for(const y of [34,36,38]) d.hline(31,40,y,'#9AB4D8');
    d.stamp(32,33,['..n...n..','.n...nn.n','nn..nn.nn'],{n:'#2A1A28'});
    d.line(43,38,47,34,'#F2C040'); d.px(43,38,'#3A2A20'); d.px(47,34,'#F07890');
    // 떠오르는 음표
    d.stamp(46,26,['.nn','.n.','nn.'],{n:'#FF5CC0'}); d.stamp(50,23,['nn','n.'],{n:'#FFE070'});
    // 펜던트 조명
    for(const x of [22,36]){d.vline(x,0,2,'#1A1418'); d.rect(x-2,3,5,2,'#1A1418'); d.hline(x-1,x+1,5,'#FFE9A0')}
  },
  'stv:c1': d=>{ // 텍사스 사막 고속도로 — 붉은 메사, 지평선으로 사라지는 길, 사와로 선인장, 전봇대
    d.grad(0,0,64,18,['#4AA8E8','#68B8EC','#8CCAF0','#B4DCF2','#F4D8A8']);
    d.circ(12,5,3,'#FFF6C8'); d.circ(12,5,2,'#FFFFFF');
    // 메사
    d.poly([[30,18],[33,10],[46,10],[48,14],[54,13],[56,18]],'#C8603A'); d.hline(33,46,10,'#E48058'); d.rect(46,14,8,4,'#A84A2E');
    d.poly([[0,18],[2,13],[10,13],[12,18]],'#D07450'); d.poly([[56,18],[58,15],[64,15],[64,18]],'#B85A38');
    // 사막 땅
    d.rect(0,18,64,22,'#E8B878'); d.hline(0,63,18,'#D49A5A');
    d.dither(0,19,64,2,'#E0AC6C','#E8B878');
    // 도로 (소실점 44,18)
    d.poly([[43,18],[45,18],[64,32],[64,40],[30,40]],'#4A4650'); d.poly([[43,18],[44,18],[34,40],[30,40]],'#5A5660');
    for(let y=19;y<40;y+=3) {const t=(y-18)/22; const x=44+Math.round(t*4); d.px(x,y,'#F6D040'); if(t>.4) d.px(x,y+1,'#F6D040')}
    d.line(43,18,30,40,'#D8D2C8'); d.line(45,18,64,31,'#D8D2C8');
    // 전봇대
    for(const [x,h] of [[40,4],[36,7],[28,12]]){const y=18; d.vline(x,y-h,y,'#5A3A24'); d.hline(x-1-(h>6?1:0),x+1+(h>6?1:0),y-h+1,'#5A3A24')}
    d.line(40,15,36,12,'#3A2A20'); d.line(36,12,28,7,'#3A2A20');
    // 사와로 선인장
    const cac=(x,y,h)=>{d.rect(x,y-h,3,h,'#3E9A50'); d.vline(x,y-h,y-1,'#5CBA66'); d.rect(x-3,y-h+5,3,2,'#3E9A50'); d.rect(x-3,y-h+2,2,4,'#3E9A50'); d.rect(x+3,y-h+7,3,2,'#3E9A50'); d.rect(x+4,y-h+4,2,4,'#3E9A50'); d.px(x+1,y-h,'#2E7A3E'); d.px(x+1,y-h-1,'#F070A0')};
    cac(55,36,14); cac(24,24,7);
    // 덤불 & 돌
    d.ell(50,24,2,1,'#8A9A50'); d.ell(5,38,2,1,'#A8744A'); d.ell(60,38,3,1,'#A8744A');
    // 표지판 (빈 초록판)
    d.vline(28,24,32,'#9AA0AC'); d.rect(25,21,7,4,'#2E8A4E'); d.frame(25,21,7,4,'#FFFFFF'); d.px(28,23,'#FFFFFF');
    // 새 + 회전초
    d.stamp(20,6,['b.b','.b.'],{b:'#3A2A30'}); d.ring(38,34,1.5,'#B48A50'); d.px(38,34,'#B48A50');
  },
  'stv:c2': d=>{ // 우주 정거장 무대 — 둥근 창 밖 지구, 조명 리그, 앰프, 떠다니는 피크·음표
    d.grad(0,0,64,40,['#0A0820','#120E30','#1A1440']);
    stars(d,30,0,0,64,26,['#FFFFFF','#C8D0FF','#FFE0F0']);
    // 지구 (오른쪽 위)
    d.circ(58,-2,13,'#2E6AD0'); d.ell(54,4,5,3,'#4CB060'); d.ell(62,6,3,2,'#4CB060'); d.ell(50,1,3,1,'#FFFFFF'); d.ring(58,-2,13,'#8ED0FF');
    // 정거장 트러스 (상단)
    d.hline(0,40,2,'#7A8094'); d.hline(0,40,5,'#7A8094'); for(let x=0;x<40;x+=4){d.line(x,2,x+2,5,'#5A6074'); d.line(x+2,5,x+4,2,'#5A6074')}
    d.rect(4,6,6,3,'#3A4058'); d.rect(30,6,6,3,'#3A4058');
    // 조명 빔
    for(const [x0,x1,c] of [[33,44,'#4A2E6A'],[48,52,'#2E4A6A']]) d.poly([[x0,9],[x0+2,9],[x1+5,30],[x1-3,30]],c);
    d.rect(32,7,4,2,'#FF5CC0'); d.rect(47,7,4,2,'#5CD0FF');
    // 무대 바닥 (금속 데크)
    d.rect(0,30,64,10,'#4A5068'); d.hline(0,63,30,'#9AA4C0'); for(let x=0;x<64;x+=8) d.vline(x,31,39,'#3A4058'); d.hline(0,63,35,'#3A4058');
    for(let x=4;x<64;x+=8) d.px(x,33,'#7A8094');
    // 무대 단
    d.rect(28,26,36,4,'#2A2A3E'); d.hline(28,63,26,'#FF5CC0'); for(let x=30;x<64;x+=4) d.px(x,28,'#FFE070');
    // 앰프 스택
    d.rect(54,14,9,12,'#1A1A24'); d.rect(55,15,7,5,'#3A3A4A'); d.rect(55,21,7,4,'#3A3A4A'); d.circ(58,17,1.5,'#14141A'); d.circ(58,22,1.5,'#14141A'); d.hline(54,62,14,'#D0D4E0');
    // 마이크 스탠드 (둥실)
    d.line(40,25,40,18,'#B0B4C0'); d.line(40,18,43,16,'#B0B4C0'); d.circ(44,15,1,'#3A3A4A'); d.hline(38,42,25,'#B0B4C0');
    // 떠다니는 피크 & 음표
    d.stamp(24,12,['ppp','ppp','.p.'],{p:'#FF5CC0'}); d.stamp(46,20,['ccc','.c.'],{c:'#5CD0FF'});
    d.stamp(14,10,['.nn','.n.','nn.'],{n:'#FFE070'}); d.stamp(28,18,['nnn','n.n','n.n'],{n:'#FFFFFF'});
    d.ring(21,22,1.5,'#9AA4C0'); // 떠다니는 볼트
    bigTwinkle(d,6,15,'#C8D0FF');
  },
});

// ================= JAKE =================
Object.assign(A,{
  'jake:s0': d=>{ // 완벽한 샌드위치 — 높이 쌓은 층, 이쑤시개 올리브
    const O='#3A2410', B='#E8A850', B2='#C07E30', B3='#F8D090', Bi='#FFF0D0', L='#6CC040', L2='#3E8A2A', T='#E83C3C', T2='#B02028', C='#FFD038', C2='#E0A818', H='#F2A0A8', H2='#D07880', W='#FFFFFF';
    // 아래 빵
    d.rect(3,25,26,4,B); d.hline(3,28,28,B2); d.hline(4,27,25,Bi);
    // 햄
    d.rect(3,22,26,3,H); d.hline(3,28,24,H2); for(let x=5;x<28;x+=5) d.px(x,22,'#FFD0D6');
    // 치즈 (뾰족 늘어짐)
    d.rect(2,20,28,2,C); d.poly([[6,21],[8,25],[10,21]],C); d.poly([[20,21],[23,26],[25,21]],C); d.hline(2,29,21,C2);
    // 토마토
    d.rect(3,17,26,3,T); for(const x of [8,16,24]) {d.ell(x,18,2,1,T2); d.px(x,18,'#FFD0A0')}
    // 상추
    for(let x=1;x<31;x++){const y=15+(x%3===0?-1:x%3===1?0:1); d.vline(x,y,16,L)} d.hline(2,29,16,L2); for(let x=3;x<30;x+=4) d.px(x,15,'#A8E070');
    // 위 빵 (돔)
    d.ell(16,11,13,5,B); d.rect(3,11,27,4,B); d.hline(3,29,14,B2); d.ell(12,9,7,2,B3);
    for(const [x,y] of [[8,9],[14,8],[20,9],[24,11],[11,11],[17,11]]) {d.px(x,y,Bi); d.px(x+1,y,Bi)}
    // 이쑤시개 + 올리브
    d.vline(16,1,9,'#E8D8B0'); d.circ(16,3,2,'#4A8A2A'); d.px(16,3,'#E83C3C'); d.px(15,2,'#8ACA5A');
    d.outline(O);
    twinkle(d,27,3,'#FFE070',W); twinkle(d,4,4,'#FFE070',W);
  },
  'jake:s1': d=>{ // 제이크의 비올라 — 비스듬한 몸통, f구멍, 스크롤, 활
    const O='#2A1408', V='#D07A28', V2='#A85818', V3='#F2A850', V4='#FFD8A0', K='#2A1A14', S='#F4EEE0', Bw='#8A5A30', Hr='#F8F4E8';
    // 몸통 (세로, 살짝 기울어짐 대신 똑바로 + 활은 대각선)
    d.ell(14,24,8,6,V); d.ell(14,14,6.5,5,V); d.rect(10,17,9,4,V); d.circ(8,19,1.6,null); 
    d.ell(14,25,6,4,V3); d.ell(13,14,4,3,V3); d.ell(12,22,2,2,V4); d.px(11,12,V4);
    d.ell(18,27,4,2,V2); d.vline(21,22,27,V2);
    // f구멍
    for(const x of [10,18]){d.vline(x,19,24,K); d.px(x-1,19,K); d.px(x+1,24,K)}
    // 지판 & 줄받침
    d.rect(13,4,3,21,K); d.rect(11,25,7,1,'#E8D0A0'); d.rect(12,27,5,3,K);
    // 스크롤 & 줄감개
    d.rect(13,1,3,4,V2); d.circ(15,1,1.5,V2); d.px(15,1,V3);
    d.hline(11,12,2,K); d.hline(16,17,3,K);
    // 줄
    for(const x of [13,14,15]) d.vline(x,4,25,'#C8C0B0');
    // 활 (대각선)
    d.line(2,30,28,6,Bw); d.line(3,30,29,6,Hr); d.rect(1,28,3,3,K); d.px(28,5,K);
    d.outline(O);
    d.stamp(23,15,['..nn','..n.','.nn.','nnn.','.n..'],{n:'#F2B030'}); d.stamp(25,25,['nn','n.'],{n:'#F2B030'});
  },
  'jake:s2': d=>{ // 레이니콘 무지개 조각 — 물결치는 리본 띠, 반짝임
    const C=['#FF6B8A','#FFA24A','#FFE15A','#7AD87A','#5AB4F0','#A07AF0'], O='#4A3060';
    for(let x=3;x<=28;x++){const yc=16+Math.sin((x-3)/4.2)*7; C.forEach((c,i)=>{d.px(x,yc-6+i*2,c); d.px(x,yc-5+i*2,c)})}
    // 끝은 비스듬 컷
    for(let y=0;y<32;y++){d.clear(2,y); d.clear(29,y)}
    for(let x=3;x<=28;x+=4){const yc=16+Math.sin((x-3)/4.2)*7; d.px(x,yc-6,'#FFD0DE')}
    d.outline(O);
    // 반짝
    for(const [x,y] of [[6,4],[25,27],[28,4]]) bigTwinkle(d,x,y,'#FFE070','#FFFFFF');
    twinkle(d,14,28,'#FFB0D0','#FFFFFF'); twinkle(d,18,3,'#B8E0FF','#FFFFFF');
  },
  'jake:c0': d=>{ // 트리하우스 부엌 — 나무 벽, 둥근 창, 화덕 위 베이컨 팬케이크
    d.rect(0,0,64,40,'#9A6A3A');
    for(let y=0;y<26;y+=4){d.hline(0,63,y,'#7A4E28'); for(let x=(y%8?5:12);x<64;x+=17) d.vline(x,y+1,y+3,'#7A4E28')}
    for(let x=2;x<64;x+=9) d.px(x,(x*3)%24+2,'#B88050');
    // 둥근 창 (나뭇잎 바깥)
    d.circ(30,9,6,'#5A3A1A'); d.circ(30,9,5,'#8ED0F0'); d.circ(28,7,2,'#7AC860'); d.circ(33,11,2.5,'#5AA848'); d.circ(32,6,1.5,'#7AC860'); d.hline(25,35,9,'#5A3A1A'); d.vline(30,4,14,'#5A3A1A');
    // 선반 + 냄비들
    d.rect(40,8,22,2,'#5A3A1A'); d.rect(42,4,5,4,'#B8C0CC'); d.hline(41,47,4,'#8A92A0'); d.rect(50,5,4,3,'#E06040'); d.rect(56,3,3,5,'#F2D8A0'); d.hline(56,58,3,'#C84030');
    // 걸린 국자
    for(const x of [6,11]){d.vline(x,0,6,'#4A4A54'); d.circ(x,8,1.5,'#9AA0AC')}
    // 바닥
    d.rect(0,26,64,14,'#C8925A'); d.hline(0,63,26,'#5A3A1A'); for(let y=29;y<40;y+=3) d.hline(0,63,y,'#B07C48'); for(let y=26;y<40;y+=3) for(let x=(y*5)%14;x<64;x+=14) d.vline(x,y,y+2,'#B07C48');
    // 화덕 + 프라이팬
    d.rect(42,17,20,15,'#4A4A54'); d.rect(42,17,20,2,'#6A6A78'); d.rect(45,24,14,6,'#2A2A32'); d.rect(46,25,12,4,'#E0602A'); d.hline(47,56,26,'#FFC040');
    d.ell(48,16,6,1.5,'#2A2A32'); d.line(54,16,60,14,'#2A2A32');
    // 팬케이크 탑 + 베이컨
    for(let i=0;i<3;i++){d.ell(48,14-i*2,5,1,'#E8A850'); d.hline(44,52,15-i*2,'#B87428')}
    d.rect(44,8,9,1,'#C84030'); d.hline(45,51,7,'#F28A70'); d.ell(48,7,2,0.8,'#FFE070'); d.px(48,6,'#FFFFFF');
    // 김
    for(const [x,y] of [[46,4],[49,2],[52,4]]) {d.px(x,y,'#F4ECE0'); d.px(x+1,y-1,'#F4ECE0')}
    // 식탁 & 접시
    d.rect(26,24,13,2,'#7A4E28'); d.rect(27,26,2,8,'#5A3A1A'); d.rect(36,26,2,8,'#5A3A1A'); d.ell(32,23,3,0.8,'#FFFFFF'); d.ell(32,22,2,0.6,'#E8A850');
    // 음표
    d.stamp(36,12,['.nn','.n.','nn.'],{n:'#FFE070'}); d.stamp(22,16,['nnn','n.n','n.n'],{n:'#FFF4D0'}); d.stamp(58,0,['.n','nn'],{n:'#FFE070'});
  },
  'jake:c1': d=>{ // 레이니콘 하늘길 — 크게 휘어지는 무지개 길, 구름 바닥, 솜사탕 성
    d.grad(0,0,64,30,['#6CC4F4','#82CEF6','#98D8F8','#B0E2FA','#C8ECFC']);
    d.circ(8,5,3,'#FFF6B0'); d.circ(8,5,2,'#FFFFFF');
    // 먼 캔디 성
    d.rect(14,12,10,8,'#F8A8C8'); d.rect(12,9,3,11,'#F890B8'); d.rect(23,9,3,11,'#F890B8'); d.poly([[11,9],[13,5],[16,9]],'#E05890'); d.poly([[22,9],[24,5],[27,9]],'#E05890'); d.rect(17,15,3,5,'#C8508A');
    // 무지개 길 (아래 중앙에서 오른쪽 위로 크게)
    const R=['#FF6B8A','#FFA24A','#FFE15A','#7AD87A','#5AB4F0','#A07AF0'];
    for(let i=0;i<6;i++) for(let a=Math.PI*1.02;a<Math.PI*1.75;a+=0.012){d.px(60+Math.cos(a)*(30-i*2),44+Math.sin(a)*(36-i*2),R[i]); d.px(60+Math.cos(a)*(29-i*2),44+Math.sin(a)*(35-i*2),R[i])}
    // 구름 바닥
    d.rect(0,31,64,9,'#FFFFFF');
    for(let x=0;x<64;x+=7) d.circ(x+3,31,4,'#FFFFFF');
    d.dither(0,37,64,3,'#E4F2FC','#FFFFFF'); for(let x=2;x<64;x+=7) d.hline(x,x+3,35,'#E4F2FC');
    cloud(d,52,10,14,'#FFFFFF','#E4F2FC'); cloud(d,34,4,10,'#FFFFFF','#E4F2FC');
    // 반짝
    for(const [x,y] of [[44,18],[56,24],[38,24]]) twinkle(d,x,y,'#FFF0A0','#FFFFFF');
    d.stamp(48,26,['h.h','hhh','.h.'],{h:'#FF6B8A'});
  },
  'jake:c2': d=>{ // 화성 — 붉은 땅, 크레이터, 작은 지구, 돌 위 실크햇과 깃발
    d.grad(0,0,64,24,['#0A0614','#140A1E','#24102A','#3A1830']);
    stars(d,28,0,0,64,20,['#FFFFFF','#FFD8C8','#C8D0FF']);
    d.circ(12,6,3,'#3A7AE0'); d.px(11,5,'#5CC060'); d.px(13,7,'#5CC060'); d.px(11,4,'#FFFFFF'); d.ring(12,6,3,'#9AD0FF');
    d.circ(48,4,1,'#C8B4A0'); // 위성
    // 먼 언덕
    d.poly([[0,24],[10,19],[22,22],[34,16],[46,20],[56,15],[64,18],[64,24]],'#A8402A');
    // 땅
    d.rect(0,23,64,17,'#D0603A'); d.hline(0,63,23,'#E88050'); d.dither(0,34,64,6,'#C05430','#D0603A');
    // 크레이터
    for(const [x,y,r] of [[30,30,4],[54,36,3],[44,26,2]]){d.ell(x,y,r+1,r/2+.5,'#E88050'); d.ell(x,y,r,r/2,'#A8402A'); d.hline(x-r+1,x+r-1,y+Math.floor(r/2),'#C05430')}
    for(const [x,y] of [[24,37],[60,27],[4,25],[38,38]]) {d.px(x,y,'#8A3020'); d.px(x+1,y,'#8A3020')}
    // 바위 + 실크햇 (링컨!)
    d.ell(48,31,6,3,'#8A3A26'); d.ell(47,30,5,2,'#A84A30'); d.hline(44,49,29,'#C05A3A');
    d.rect(45,20,5,8,'#1A1418'); d.hline(43,51,28,'#1A1418'); d.hline(45,49,26,'#5A3A3A'); d.px(46,21,'#3A3438');
    // 깃발
    d.vline(56,12,26,'#D0D4DC'); d.rect(57,12,6,4,'#FFFFFF'); d.rect(57,12,3,2,'#3A5AC0'); d.hline(60,62,13,'#E04040'); d.hline(57,62,15,'#E04040');
    // 길게 늘어난 발자국 (늘어난 흔적)
    for(let x=24;x<40;x+=3) d.px(x,35-((x/3)%2),'#8A3020');
    bigTwinkle(d,36,8,'#FFD8C8');
  },
});

// ================= CINNAMOROLL =================
Object.assign(A,{
  'cinnamoroll:s0': d=>{ // 카페 시나몬 롤빵 — 소용돌이 빵, 하얀 아이싱, 접시
    const O='#4A2A18', B='#E0A060', B2='#B87038', B3='#F6C88A', K='#8A4A20', I='#FFFFFF', I2='#E6F2FC', P='#FFFFFF', P2='#BFDDF4', P3='#8EC0E8';
    d.ell(16,24,15,6,P2); d.ell(16,23,14,5,P); d.ell(16,25,10,2,P3); d.ell(16,24,9,2,P2);
    d.ell(16,15,12,10,B); d.ell(16,18,11,7,B2); d.ell(16,14,11,9,B);
    // 소용돌이
    for(let a=0;a<15;a+=.04){const r=a*0.72; d.px(16+Math.cos(a)*r*1.12,14+Math.sin(a)*r*0.82,K)}
    d.ell(13,10,4,2,B3);
    // 아이싱 줄
    for(const [x0,x1,y] of [[7,14,9],[18,25,11],[9,20,16],[14,24,19]]){for(let x=x0;x<=x1;x++) d.px(x,y+Math.round(Math.sin(x)*0.8),I)}
    d.px(8,10,I); d.px(8,11,I2); d.px(24,12,I); d.px(24,13,I2);
    d.outline(O);
    // 계피 가루 & 김
    for(const [x,y] of [[12,13],[20,14],[16,8],[18,18]]) d.px(x,y,'#6A3410');
    d.stamp(24,0,['.w.','w..','.w.','..w'],{w:'#E6F2FC'}); d.stamp(6,0,['..w','.w.','w..','.w.'],{w:'#E6F2FC'});
  },
  'cinnamoroll:s1': d=>{ // 하늘 산책 풍선 — 하늘색 풍선에 웃는 얼굴, 꼬불 끈, 리본
    const O='#2A4A6A', B='#8ED0F8', B2='#5AAEE8', B3='#C8EAFF', W='#FFFFFF', K='#2A3A4A', P='#FFA0C0', S='#A8B8C8';
    d.ell(16,12,10,11,B); d.ell(18,15,8,8,B2); d.ell(15,11,8,9,B);
    d.ell(11,6,3,4,B3); d.px(10,4,W); d.px(10,5,W); d.px(11,4,W);
    d.poly([[14,23],[16,22],[18,23],[17,25],[15,25]],B2);
    // 얼굴
    d.rect(12,12,2,2,K); d.rect(19,12,2,2,K); d.px(12,12,W); d.px(19,12,W);
    d.px(15,16,K); d.px(16,17,K); d.px(17,16,K);
    d.ell(10,15,1.5,0.8,P); d.ell(23,15,1.5,0.8,P);
    // 끈
    for(let y=25;y<31;y++) d.px(16+Math.round(Math.sin(y)*1.2),y,S);
    d.outline(O);
    // 리본 & 구름 조각
    d.stamp(13,24,['p.p','.p.','p.p'],{p:'#FF7EA8'});
    d.ell(4,26,3,1.5,W); d.ell(27,22,3,1.5,W); d.ell(28,21,2,1,W); d.px(28,3,'#FFE070'); twinkle(d,27,6,'#FFE070',W);
  },
  'cinnamoroll:s2': d=>{ // 구름 위 무지개 — 둥근 무지개 아치, 양 끝 구름
    const C=['#FF8AA8','#FFB870','#FFE680','#9AE08A','#7AC4F4','#B49AF4'], W='#FFFFFF', W2='#DCEEFA', O='#6A7AA8';
    for(let i=0;i<6;i++) for(let r=13-i*1.5;r>12.2-i*1.5-1.3;r-=.5) for(let a=Math.PI;a<=Math.PI*2;a+=.01) d.px(16+Math.cos(a)*r,22+Math.sin(a)*r,C[i]);
    for(let y=14;y<32;y++) for(let x=8;x<25;x++) if((x-16)**2+(y-22)**2<26) d.clear(x,y);
    // 구름
    for(const cx of [6,26]){d.circ(cx,22,4,W); d.circ(cx-3,25,3,W); d.circ(cx+3,25,3,W); d.ell(cx,26,6,2.5,W); d.hline(cx-6,cx+6,28,W2); d.px(cx-2,21,W2)}

    d.outline(O);
    d.px(5,23,'#2A3A4A'); d.px(8,23,'#2A3A4A'); d.px(25,23,'#2A3A4A'); d.px(28,23,'#2A3A4A'); d.px(6,25,'#FFA0C0'); d.px(27,25,'#FFA0C0');
    twinkle(d,16,4,'#FFE070',W); d.px(3,5,'#FFE070'); d.px(29,6,'#FFE070');
  },
  'cinnamoroll:c0': d=>{ // 카페 시나몬 — 하늘색 차양, 테라스 테이블 위 코코아, 롤빵 간판
    d.grad(0,0,64,14,['#9AD6F8','#B0E0FA','#C8EAFC']);
    cloud(d,10,5,12,'#FFFFFF','#E4F2FC');
    // 건물
    d.rect(24,2,40,26,'#FFF6EA'); d.rect(24,2,40,2,'#F2E2CC'); d.hline(24,63,1,'#C8A880');
    // 차양 (줄무늬)
    for(let x=24;x<64;x++) d.vline(x,8,12,(Math.floor((x-24)/3))%2?'#FFFFFF':'#7AC4F4'); for(let x=24;x<64;x+=3) d.px(x+1,13,(Math.floor((x-24)/3))%2?'#FFFFFF':'#7AC4F4');
    // 간판 (롤빵 마크)
    d.ell(44,5,7,2.5,'#7AC4F4'); d.ell(44,5,6,1.5,'#FFFFFF'); d.circ(44,5,1.5,'#E0A060'); d.px(44,5,'#8A4A20');
    // 큰 창과 문
    d.rect(27,14,16,10,'#A8D8F4'); d.frame(27,14,16,10,'#8A6A4A'); d.vline(35,14,23,'#8A6A4A'); d.line(29,16,32,19,'#E4F4FF');
    d.rect(31,19,3,3,'#E0A060'); d.rect(37,19,4,3,'#F2C8E0');
    d.rect(47,13,9,15,'#8A6A4A'); d.rect(48,14,7,14,'#B08A60'); d.rect(49,15,5,5,'#C8EAFC'); d.px(53,22,'#FFE070');
    d.rect(58,16,4,4,'#A8D8F4'); d.frame(58,16,4,4,'#8A6A4A');
    // 화분
    for(const x of [25,57]){d.rect(x,24,4,4,'#E08A60'); d.circ(x+2,22,2,'#6CC060'); d.px(x+1,21,'#FF8AB0'); d.px(x+3,22,'#FFE070')}
    // 바닥 (테라스 타일)
    d.rect(0,28,64,12,'#F2D8B0'); d.hline(0,63,28,'#C8A880'); for(let y=31;y<40;y+=4) d.hline(0,63,y,'#E2C498'); for(let x=0;x<64;x+=6) d.vline(x,28,39,'#E2C498');
    d.rect(0,14,24,14,'#BCE6C8'); d.rect(0,22,24,6,'#8ACC90'); for(let x=1;x<24;x+=3) d.circ(x,22,2,'#7ABE80');
    // 테라스 테이블 + 파라솔 + 코코아
    d.vline(40,18,35,'#8A6A4A'); d.poly([[30,20],[40,15],[50,20]],'#FFFFFF'); d.hline(30,50,20,'#7AC4F4'); d.line(40,15,35,20,'#7AC4F4'); d.line(40,15,45,20,'#7AC4F4');
    d.ell(40,30,7,1.5,'#FFFFFF'); d.hline(33,47,31,'#C8D8E4'); d.vline(40,32,37,'#B0B8C4'); d.hline(37,43,37,'#B0B8C4');
    for(const x of [36,43]){d.rect(x-1,27,4,3,'#FFFFFF'); d.px(x+3,28,'#FFFFFF'); d.hline(x,x+1,27,'#8A4A20'); d.px(x,26,'#FFFFFF'); d.px(x+1,24,'#E4F2FC'); d.px(x,25,'#E4F2FC')}
    // 의자
    d.rect(52,30,6,1,'#7AC4F4'); d.vline(52,26,37,'#8A6A4A'); d.vline(57,31,37,'#8A6A4A');
  },
  'cinnamoroll:c1': d=>{ // 노을 구름 위 — 붉게 물든 하늘, 지는 해, 구름 바다
    d.grad(0,0,64,26,['#5A4A9A','#8A5AA8','#C46A9A','#EE8A86','#FAAE70','#FFD07A']);
    d.circ(42,22,7,'#FFE6A0'); d.circ(42,22,5,'#FFF4D0');
    for(const y of [16,19]) d.hline(30,56,y,'#FFC890');
    // 멀리 줄구름
    d.ell(14,8,9,1,'#F4A0B0'); d.ell(50,6,8,1,'#E890B0'); d.ell(30,12,6,1,'#FFC0A0');
    stars(d,6,0,0,64,6,['#FFFFFF']);
    // 구름 바다 (뒤 → 앞)
    for(let x=-2;x<66;x+=8) d.circ(x,27,5,'#F8B4A0');
    d.rect(0,27,64,13,'#F8B4A0');
    for(let x=2;x<66;x+=9) d.circ(x,31,5,'#FFD4C4');
    d.rect(0,31,64,9,'#FFD4C4');
    for(let x=-1;x<66;x+=10) d.circ(x,36,5,'#FFF0E8');
    d.rect(0,36,64,4,'#FFF0E8');
    // 해 반사
    for(const y of [28,30]) d.hline(37,47,y,'#FFE6C0');
    // 큰 앞 구름 (오른쪽)
    d.circ(56,28,6,'#FFF0E8'); d.circ(50,31,5,'#FFF0E8'); d.circ(61,31,5,'#FFF0E8'); d.hline(46,63,34,'#FFD4C4');
    // 새
    d.stamp(22,10,['b.b','.b.'],{b:'#4A2A5A'}); d.stamp(27,14,['b.b','.b.'],{b:'#4A2A5A'});
    d.stamp(54,18,['.h.h.','hhhhh','.hhh.','..h..'],{h:'#FF7EA8'});
  },
  'cinnamoroll:c2': d=>{ // 구름 고향 — 우주에 떠 있는 솜사탕 구름 섬, 구름 집, 별똥별
    d.grad(0,0,64,40,['#1A1A4A','#24205A','#302868','#3E3478','#4A3E88']);
    d.ell(42,12,22,6,'#4A3A8A'); d.ell(20,26,14,4,'#3E3A84');
    stars(d,40,0,0,64,40,['#FFFFFF','#C8E0FF','#FFE0F4']);
    for(let i=0;i<14;i++){const x=54-i, y=3+Math.round(i*0.4); d.px(x,y,i<4?'#FFFFFF':i<9?'#FFF0A0':'#B8A0E0')}
    // 왼쪽 아래 큰 구름 섬 (동물 자리)
    const cl=(cx,cy,w,a,b)=>{for(let x=cx-w;x<=cx+w;x+=4) d.circ(x,cy-Math.round(Math.cos((x-cx)/w*1.5)*2),4,a); d.ell(cx,cy+2,w+2,3,a); d.hline(cx-w,cx+w,cy+4,b)};
    cl(16,36,18,'#FFFFFF','#C8DCF4'); d.rect(0,36,40,4,'#FFFFFF'); d.dither(0,38,40,2,'#E0ECFA','#FFFFFF');
    // 오른쪽 떠 있는 구름 섬 + 구름 집
    cl(46,30,14,'#FFFFFF','#C8DCF4'); d.ell(46,35,10,2,'#C8DCF4'); d.px(42,38,'#C8DCF4'); d.px(50,39,'#C8DCF4');
    d.circ(46,20,6,'#FFFFFF'); d.circ(41,24,4,'#FFFFFF'); d.circ(51,24,4,'#FFFFFF'); d.rect(40,22,13,6,'#FFFFFF'); d.hline(40,52,27,'#DCEAF8');
    d.rect(44,23,4,5,'#7AC4F4'); d.ell(46,23,2,1.5,'#7AC4F4'); d.px(47,25,'#FFE070');
    d.circ(42,20,1,'#FFE6A0'); d.circ(50,20,1,'#FFE6A0');
    // 작은 구름들
    cl(56,12,5,'#E8F0FC','#B8C8EC'); cl(26,14,4,'#E8F0FC','#B8C8EC');
    // 반짝 별
    bigTwinkle(d,34,24,'#FFE070'); bigTwinkle(d,10,6,'#C8E0FF'); twinkle(d,60,24,'#FFE0F4','#FFFFFF');
  },
});

// ================= MILES =================
Object.assign(A,{
  'miles:s0': d=>{ // 빨간 헤드폰 — 검은 밴드, 빨간 컵, 해바라기 스티커, 음표
    const O='#14080C', R='#E02838', R2='#A81828', R3='#FF6A70', K='#22222A', K2='#3A3A46', K3='#5A5A68', Y='#FFD030', Y2='#C88A20', Br='#6A4020', W='#FFFFFF';
    // 밴드
    for(let a=Math.PI*1.08;a<=Math.PI*1.92;a+=.01){for(let t=0;t<3;t++) d.px(16+Math.cos(a)*(12-t),18+Math.sin(a)*(13-t),t===0?K3:t===1?K2:K)}
    d.ell(16,7,4,1,R); // 밴드 쿠션 포인트
    // 컵
    for(const [x,f] of [[2,1],[23,-1]]){
      d.rect(x,15,7,12,R); d.ell(x+3,15,3,1,R); d.ell(x+3,27,3,1,R2); d.vline(f>0?x:x+6,15,26,R3); d.vline(f>0?x+6:x,16,27,R2);
      d.rect(f>0?x+6:x-2,17,3,9,K); d.vline(f>0?x+8:x-2,18,24,K2); // 이어패드
    }
    d.px(3,16,W); d.px(24,16,W);
    // 해바라기 스티커 (왼쪽 컵)
    d.stamp(3,19,['.y.y.','yybyy','.bBb.','yybyy','.y.y.'],{y:Y,b:Br,B:Y2});
    // 번개 마크 (오른쪽 컵)
    d.stamp(25,18,['..w','.w.','www','.w.','w..'],{w:W});
    d.outline(O);
    d.stamp(12,13,['..nn','..n.','.nn.','nnn.','.n..'],{n:Y}); d.stamp(17,18,['nnn','n.n','n.n'],{n:'#FF6A70'});
  },
  'miles:s1': d=>{ // 스프레이 페인트 캔 — 노즐에서 뿜어지는 페인트, 물감 흘림
    const O='#14101A', C='#7A3AE0', C2='#5428A8', C3='#A878FF', M='#D8DCE6', M2='#9AA0AC', M3='#FFFFFF', L='#FFE040', K='#22222A';
    // 캔 몸통
    d.rect(5,11,13,19,C); d.vline(15,11,29,C2); d.vline(16,11,29,C2); d.vline(17,12,28,C2); d.vline(7,12,28,C3); d.vline(8,13,22,'#C8A8FF');
    d.ell(11,29,6,1.5,C2);
    // 라벨 (그래피티 낙서)
    d.rect(5,17,13,7,L); d.stamp(6,18,['.r..rr.g.g.','rrr.r..ggg.','.r..rr.g.g.'],{r:'#E02838',g:'#22A0E0'}); d.hline(5,17,23,'#E0B820'); d.hline(6,16,22,K);
    // 어깨 & 캡
    d.ell(11,11,6,2,M); d.hline(5,17,11,M2); d.rect(9,6,5,4,M); d.vline(13,6,9,M2); d.rect(10,4,3,2,K); d.px(13,5,K); d.px(10,7,M3);
    // 흘러내린 물감
    d.vline(7,24,26,'#E02838'); d.px(7,27,'#E02838'); d.vline(14,24,25,'#22A0E0');
    d.outline(O);
    // 분사 구름
    const sp=[['#FF3C8A',22,6],['#FFE040',26,3],['#22C0E0',27,10],['#FF3C8A',29,6]];
    for(const [c,x,y] of sp) d.circ(x,y,2,c);
    for(const [x,y,c] of [[16,5,'#FF3C8A'],[18,4,'#FF3C8A'],[19,7,'#FFE040'],[24,13,'#22C0E0'],[30,13,'#FFE040'],[20,1,'#22C0E0'],[29,1,'#FF3C8A'],[31,9,'#FFE040']]) d.px(x,y,c);
    d.px(22,5,'#FFB0D0'); d.px(26,2,'#FFFFFF');
  },
  'miles:s2': d=>{ // 차원 이동 손목시계 — 검은 밴드, 홀로그램 화면, 글리치
    const O='#0A0A12', K='#22222A', K2='#3A3A48', K3='#5A5A6A', S='#B8C0CC', Cy='#3CE8F0', Mg='#FF3CC8', R='#E02838', W='#FFFFFF', Sc='#0E2A3A';
    // 밴드
    d.rect(10,0,12,9,K); d.rect(10,23,12,9,K); for(let y=1;y<9;y+=2) d.hline(11,20,y,K2); for(let y=24;y<32;y+=2) d.hline(11,20,y,K2);
    d.rect(14,28,4,2,S);
    // 본체
    d.rect(5,7,22,18,K2); d.rect(6,8,20,16,K3); d.rect(6,8,20,1,'#7A7A8C');
    d.rect(27,13,2,3,R); d.rect(3,12,2,2,S); // 버튼
    // 화면
    d.rect(8,10,16,12,Sc);
    // 거미 엠블럼 (홀로그램)
    d.stamp(11,11,['c........c','.c..cc..c.','..c.cc.c..','cccccccccc','..cccccc..','.c.cccc.c.','c...cc...c','....cc....'],{c:Cy});
    // 글리치 (밀린 자홍)
    for(const [x,y,w] of [[8,19,5],[18,13,6],[13,21,7]]) d.hline(x,x+w-1,y,Mg);
    d.rect(20,18,3,2,Cy); d.px(9,12,Mg); d.hline(8,10,20,W);
    d.outline(O);
    // 화면 밖 글리치 픽셀
    for(const [x,y,c] of [[2,4,Mg],[3,4,Cy],[28,22,Cy],[29,22,Mg],[1,20,Cy],[30,6,Mg],[29,7,Cy]]) d.px(x,y,c);
    d.rect(26,2,3,2,Mg); d.rect(27,3,3,1,Cy); d.rect(2,26,3,2,Cy); d.rect(3,27,3,1,Mg);
  },
  'miles:c0': d=>{ // 브루클린 옥상 노을 — 물탱크, 스카이라인, 다리, 멀리 사이렌 불빛
    d.grad(0,0,64,26,['#3A2A6A','#6A3A7A','#B04A6A','#E8705A','#F8A050','#FFC860']);
    d.circ(30,22,5,'#FFE6A0'); d.circ(30,22,3,'#FFF6D0');
    // 다리 (멀리)
    d.hline(0,40,20,'#5A2A4A'); for(const x of [8,30]){d.rect(x,10,2,10,'#5A2A4A'); d.line(x+1,10,x+11,19,'#5A2A4A'); d.line(x,10,x-10,19,'#5A2A4A')}
    // 스카이라인
    const bl=[[0,7,16],[6,5,13],[11,8,18],[19,6,15],[25,9,17],[34,5,12],[39,8,19],[47,6,14],[53,11,17],[60,4,15]];
    for(const [x,w,y] of bl){d.rect(x,y,w,26-y,'#3A1E40'); for(let wy=y+2;wy<25;wy+=3) for(let wx=x+1;wx<x+w-1;wx+=2) if(((wx*7+wy*3)%5)<2) d.px(wx,wy,'#FFC860')}
    d.rect(41,3,2,5,'#3A1E40'); d.px(41,2,'#FF4040');
    // 사이렌 불빛 (거리 아래에서 번쩍)
    d.ell(18,25,4,1,'#E84060'); d.ell(26,25,4,1,'#4A70F0'); d.px(18,24,'#FF8090'); d.px(26,24,'#90A8FF');
    // 옥상 바닥
    d.rect(0,26,64,14,'#7A5A5A'); d.hline(0,63,26,'#A07070'); d.dither(0,36,64,4,'#6A4A4E','#7A5A5A');
    for(let x=0;x<64;x+=10) d.vline(x,27,39,'#6A4A4E');
    // 난간
    d.rect(0,24,64,2,'#5A3A40'); d.hline(0,63,24,'#C08070');
    // 물탱크
    d.rect(44,8,14,12,'#8A5A3A'); for(let x=45;x<58;x+=3) d.vline(x,8,19,'#6A4028'); d.poly([[43,8],[51,2],[59,8]],'#5A3A2A'); d.hline(43,58,13,'#3A2418'); d.hline(43,58,17,'#3A2418');
    for(const x of [45,51,56]) d.vline(x,20,30,'#3A2418'); d.line(45,24,51,20,'#3A2418'); d.line(51,24,56,20,'#3A2418');
    // 옥상 소품: 스프레이 캔, 붐박스
    d.rect(36,32,7,4,'#2A2A34'); d.circ(38,34,1,'#9AA0AC'); d.circ(41,34,1,'#9AA0AC'); d.hline(37,41,31,'#2A2A34');
    d.rect(30,33,2,4,'#E02838'); d.px(30,32,'#D0D4DC');
    // 그래피티 거미줄 무늬
    d.stamp(50,32,['r...r','.r.r.','rrrrr','.r.r.','r...r'],{r:'#E02838'});
    // 새
    d.stamp(14,6,['b.b','.b.'],{b:'#2A1A30'});
  },
  'miles:c1': d=>{ // 비전스 아카데미 — 기둥 있는 학교 건물, 시계탑, 창문에서 늘어진 이불 밧줄
    d.grad(0,0,64,20,['#5AB0F0','#78C0F4','#96D0F6','#B4DEF8']);
    cloud(d,12,6,12,'#FFFFFF','#DCEEFA');
    // 시계탑
    d.rect(38,0,10,10,'#C8B898'); d.poly([[37,1],[43,-4],[49,1]],'#2E4A7A'); d.circ(43,5,3,'#FFFFFF'); d.ring(43,5,3,'#2A2A34'); d.line(43,5,43,3,'#2A2A34'); d.line(43,5,45,5,'#2A2A34');
    // 본관
    d.rect(24,10,40,20,'#D8C8A8'); d.hline(24,63,10,'#2E4A7A'); d.rect(24,9,40,2,'#2E4A7A');
    d.poly([[32,12],[43,6],[54,12]],'#E8DCC0'); d.hline(32,54,12,'#B8A888');
    for(const x of [33,38,47,52]) {d.rect(x,13,3,13,'#F4ECDC'); d.vline(x+2,13,25,'#C8BCA0')}
    d.rect(41,17,5,9,'#5A3A2A'); d.px(45,21,'#F2C040');
    // 창문들
    for(const [x,y] of [[26,13],[26,20],[57,13],[57,20],[61,13],[61,20]]) {d.rect(x,y,3,4,'#5A8CC0'); d.px(x,y,'#B4DEF8')}
    // 열린 창 + 이불 밧줄 (몰래 탈출)
    d.rect(29,13,3,4,'#2A3A5A'); d.vline(31,17,27,'#F2F2F2'); for(let y=18;y<28;y+=3) d.px(31,y,'#E05A5A'); d.px(30,27,'#F2F2F2');
    // 계단 & 잔디
    d.rect(36,26,15,4,'#C8BCA0'); d.hline(36,50,27,'#B0A488'); d.hline(36,50,29,'#B0A488');
    d.rect(0,22,24,8,'#8ACC6A'); d.rect(0,30,64,10,'#6CB850'); d.hline(0,63,30,'#8ACC6A');
    d.dither(0,36,64,4,'#5CA844','#6CB850');
    // 길
    d.poly([[38,30],[49,30],[54,40],[33,40]],'#E0D4B8'); d.line(38,30,33,40,'#C8BCA0');
    // 나무 & 국기
    d.rect(4,12,2,12,'#6A4A30'); d.circ(5,9,5,'#4CA048'); d.circ(3,11,3,'#3E8A3C'); d.circ(7,7,2,'#6CC060');
    d.vline(58,26,38,'#9AA0AC'); d.rect(59,26,4,3,'#E02838'); d.px(60,27,'#FFFFFF');
    // 가방 떨어짐
    d.rect(28,33,4,3,'#E02838'); d.hline(28,31,32,'#2A2A34');
  },
  'miles:c2': d=>{ // 누에바 욕 2099 — 네온 고층 빌딩, 날아다니는 차, 홀로그램, 글리치
    d.grad(0,0,64,40,['#0A0418','#160828','#24103A','#36104A']);
    stars(d,14,0,0,64,10,['#FFFFFF','#FF9CE8']);
    // 먼 빌딩
    for(const [x,w,y] of [[22,6,8],[30,5,4],[36,7,10],[45,5,2],[52,8,7],[60,4,12]]){d.rect(x,y,w,40-y,'#2A1A4A'); for(let wy=y+2;wy<34;wy+=2) if(wy%4) d.hline(x+1,x+w-2,wy,(x+wy)%3?'#3A2A6A':'#5A3AA0')}
    // 앞 빌딩 (네온 테두리)
    for(const [x,w,y,c] of [[26,8,14,'#FF3CC8'],[40,9,6,'#3CE8F0'],[54,10,16,'#FFB030']]){d.rect(x,y,w,40-y,'#140A28'); d.vline(x,y,39,c); d.vline(x+w-1,y,39,c); d.hline(x,x+w-1,y,c);
      for(let wy=y+3;wy<30;wy+=3) for(let wx=x+2;wx<x+w-2;wx+=2) d.px(wx,wy,(wx+wy)%2?'#5A3AA0':c)}
    d.vline(44,0,5,'#3CE8F0'); d.px(44,0,'#FFFFFF');
    // 홀로그램 광고판 (거미 얼굴 글리치)
    d.rect(41,12,7,6,'#1A4A6A'); d.stamp(42,13,['c...c','.ccc.','cc.cc','.ccc.'],{c:'#3CE8F0'}); d.hline(41,47,15,'#FF3CC8');
    // 날아다니는 차 + 빛 궤적
    for(const [x,y,c] of [[12,8,'#FF3CC8'],[34,22,'#3CE8F0'],[52,4,'#FFB030']]){d.rect(x,y,5,2,'#C8C8E0'); d.hline(x+1,x+3,y-1,'#9AA0C0'); d.px(x+4,y+1,c); for(let i=1;i<7;i+=2) d.px(x-i,y+1,c)}
    // 공중 보도 (동물 자리)
    d.rect(0,33,64,7,'#2A2440'); d.hline(0,63,33,'#3CE8F0'); for(let x=2;x<64;x+=6) d.px(x,35,'#FF3CC8'); d.dither(0,37,64,3,'#1E1A34','#2A2440');
    d.hline(0,24,30,'#5A5A80'); for(let x=0;x<25;x+=6) d.vline(x,30,33,'#5A5A80');
    // 글리치 블록
    for(const [x,y,w,c] of [[18,18,3,'#FF3CC8'],[20,19,3,'#3CE8F0'],[60,30,4,'#3CE8F0'],[8,4,2,'#FFB030'],[35,30,3,'#FF3CC8']]) d.hline(x,x+w-1,y,c);
  },
});

// ================= SPONGEBOB =================
Object.assign(A,{
  'sponge:s0': d=>{ // 갓 구운 게살버거 — 참깨 번, 패티, 치즈, 상추, 토마토, 김
    const O='#3A2008', B='#F2A840', B2='#C87A20', B3='#FFD080', Se='#FFF6DC', P='#7A4020', P2='#5A2A10', L='#7AD040', L2='#4A9A28', T='#E83A3A', C='#FFD030', W='#FFFFFF';
    // 아래 번
    d.ell(16,27,13,3,B); d.hline(4,28,28,B2); d.hline(5,27,26,B3);
    // 패티
    d.rect(3,21,26,4,P); d.hline(3,28,24,P2); for(let x=5;x<28;x+=3) d.px(x,22,'#9A5A30');
    // 치즈
    d.rect(3,19,26,2,C); d.poly([[24,20],[29,20],[29,24]],C); d.poly([[4,20],[7,20],[5,23]],C);
    // 토마토 & 상추
    d.rect(4,17,24,2,T); d.hline(4,27,18,'#B02028');
    for(let x=2;x<30;x++) d.vline(x,15+(x%3===0?0:1),16,L); d.hline(3,28,16,L2);
    // 위 번
    d.ell(16,10,13,6,B); d.rect(3,10,27,5,B); d.hline(3,29,14,B2); d.ell(11,7,6,2,B3);
    for(const [x,y] of [[8,6],[13,5],[18,5],[23,7],[11,9],[20,9],[16,7],[25,10],[6,10]]) {d.px(x,y,Se); d.px(x+1,y,Se)}
    d.outline(O);
    // 김
    for(const x of [9,16,23]) d.stamp(x,0,['.w','w.','.w'],{w:'#F0F0F0'});
    twinkle(d,2,3,'#FFE070',W);
  },
  'sponge:s1': d=>{ // 해파리 잼 한 병 — 분홍 보라 잼, 천 뚜껑, 해파리 라벨
    const O='#2A1A3A', G='#E8F4FC', J='#E060C0', J2='#B03C98', J3='#FF9AE0', Lc='#F2E0B8', Lc2='#C8A878', R='#E04040', W='#FFFFFF';
    // 병
    d.rect(6,9,20,20,J); d.rect(6,27,20,2,J2); d.vline(25,9,28,J2); d.vline(7,10,26,J3); d.vline(8,10,15,W);
    d.rect(8,7,16,2,G);
    // 기포
    for(const [x,y] of [[22,12],[20,25],[11,26],[23,20]]) d.px(x,y,J3);
    // 라벨 (해파리 그림)
    d.rect(9,15,14,9,'#FFFBEA'); d.frame(9,15,14,9,'#E8A0D0');
    d.ell(16,18,4,2,'#F070C0'); d.hline(12,20,19,'#F070C0'); for(const x of [13,15,17,19]) d.vline(x,20,22,'#C050A0'); d.px(15,18,'#2A1A3A'); d.px(17,18,'#2A1A3A');
    // 천 뚜껑 + 끈
    d.rect(5,3,22,4,Lc); d.poly([[5,7],[3,10],[8,8]],Lc); d.poly([[27,7],[29,10],[24,8]],Lc); for(let x=6;x<27;x+=3) d.px(x,4,R); for(let x=7;x<27;x+=3) d.px(x,6,R);
    d.hline(5,26,7,R); d.ell(16,2,8,1,Lc2);
    d.stamp(13,7,['r.r','.r.'],{r:R});
    d.outline(O);
    // 작은 해파리 둥실
    d.stamp(26,13,['.pp.','pppp','p.p.','.p.p'],{p:'#FF9AE0'}); d.stamp(1,18,['.p.','ppp','p.p'],{p:'#C890F0'});
    twinkle(d,28,3,'#FFE070',W);
  },
  'sponge:s2': d=>{ // 넵튠 왕의 왕관 — 금빛 뾰족 왕관, 가운데 삼지창, 진주와 조개
    const O='#4A2A08', G='#F6C83A', G2='#C8901C', G3='#FFE88A', G4='#FFF8D0', R='#E03A5A', Bl='#3AA0E8', P='#F4F0FF', Sh='#FFA8B8';
    // 띠
    d.rect(3,20,26,8,G); d.hline(3,28,27,G2); d.hline(3,28,21,G3); d.hline(3,28,25,G2);
    // 뾰족
    d.poly([[3,21],[3,10],[8,17]],G); d.poly([[8,21],[10,8],[13,17],[16,4],[19,17],[22,8],[24,21]],G); d.poly([[29,21],[29,10],[24,17]],G);
    d.line(10,9,11,17,G3); d.line(16,5,16,16,G3); d.line(4,12,5,18,G3);
    d.line(22,9,21,17,G2); d.line(28,11,26,17,G2);
    // 삼지창 문양
    d.stamp(14,8,['h.h.h','h.h.h','hhhhh','..h..','..h..','..h..'],{h:G2});
    // 보석
    d.circ(9,23,1.5,R); d.circ(16,23,1.8,Bl); d.circ(23,23,1.5,R); d.px(8,22,'#FF9AB0'); d.px(15,22,'#B8E4FF'); d.px(22,22,'#FF9AB0');
    // 끝 진주
    for(const [x,y] of [[3,9],[10,7],[16,3],[22,7],[29,9]]){d.circ(x,y,1.3,P); d.px(x,y-1,'#FFFFFF')}
    d.outline(O);
    // 조개 장식 & 반짝
    d.stamp(0,27,['.s.s.','sssss','.sss.'],{s:Sh}); d.stamp(27,27,['.s.s.','sssss','.sss.'],{s:Sh});
    bigTwinkle(d,26,3,'#FFE070'); d.px(5,3,'#FFE070');
  },
  'sponge:c0': d=>{ // 우리 파인애플 집 — 비키니 시티 바다, 하늘꽃 무늬, 파인애플 집, 핑핑이 밥그릇
    d.grad(0,0,64,40,['#4AB8E8','#40AAE0','#389CD6','#2E8ECC']);
    // 하늘꽃
    const fl=(x,y,c)=>{d.stamp(x-2,y-2,['.c.c.','ccccc','.cwc.','ccccc','.c.c.'],{c,w:'#FFFFFF'})};
    fl(6,5,'#8AE0F8'); fl(22,9,'#C8F0A0'); fl(14,16,'#F8C8F0'); fl(30,3,'#F8E8A0'); fl(60,30,'#8AE0F8');
    // 빛 물결
    for(let y=2;y<20;y+=5) wave(d,0,63,y,1,3,'#5CC4EE');
    // 모래 바닥
    d.rect(0,28,64,12,'#F2DCA0'); for(let x=0;x<64;x++) d.px(x,28+Math.round(Math.sin(x/5)),'#F2DCA0'); d.dither(0,36,64,4,'#E6CC88','#F2DCA0');
    for(const [x,y] of [[30,34],[56,37],[24,38]]) {d.px(x,y,'#C8A868'); d.px(x+1,y,'#C8A868')}
    // 파인애플 집
    d.ell(44,22,10,11,'#F2A820'); d.ell(42,20,6,8,'#FFC840');
    for(let y=11;y<34;y++) for(let x=33;x<56;x++) if(((x-44)/10.4)**2+((y-22)/11.4)**2<=1 && (((x+y*2)%6===0)||((x-y*2)%6===0)||((x-y*2)%6===-0))) d.px(x,y,'#C87A18');
    // 잎
    d.poly([[38,13],[34,3],[41,10]],'#4AA040'); d.poly([[41,11],[40,0],[45,10]],'#5CC050'); d.poly([[45,11],[50,1],[48,11]],'#4AA040'); d.poly([[48,12],[56,5],[50,14]],'#3E8A34'); d.line(41,9,40,2,'#7ADC6A');
    // 문 & 둥근 창
    d.rect(42,26,5,7,'#8A9AB0'); d.ell(44,26,2,2,'#8A9AB0'); d.rect(43,27,3,6,'#5A6A80'); d.px(45,30,'#F2C040');
    for(const [x,y] of [[39,18],[49,22]]){d.circ(x,y,2,'#5A6A80'); d.circ(x,y,1.2,'#8ED0F0')}
    d.rect(41,33,7,1,'#B89868');
    // 핑핑이 밥그릇 & 달팽이 자국
    d.ell(56,34,3,1,'#E04848'); d.hline(54,58,33,'#F07070'); d.px(55,32,'#C88A40'); d.px(57,32,'#C88A40');
    for(let x=26;x<52;x+=2) d.px(x,36,'#D8BA78');
    // 거품
    for(const [x,y] of [[34,8],[36,4],[58,18],[60,14],[27,22]]) d.ring(x,y,0.8,'#B8ECFF');
    // 산호 (오른쪽)
    d.vline(61,22,29,'#E06A9A'); d.vline(59,24,29,'#E06A9A'); d.px(60,26,'#E06A9A'); d.px(62,24,'#E06A9A');
  },
  'sponge:c1': d=>{ // 구 라군 — 해변, 파라솔, 서핑보드, 모래 위 찢어진 바지 조각
    d.grad(0,0,64,14,['#58C0F0','#70CCF2','#88D6F4']);
    d.circ(54,5,3,'#FFF6B0');
    cloud(d,20,4,12,'#FFFFFF','#DDEFFA');
    // 라군 물
    d.rect(0,14,64,10,'#2EB0C8'); d.hline(0,63,14,'#1E90B0');
    for(let x=0;x<64;x+=7){d.hline(x,x+3,16+((x/7)%2),'#7ADCE8'); d.hline(x+4,x+5,20,'#5ACCDC')}
    d.rect(0,22,64,2,'#FFFFFF'); for(let x=1;x<64;x+=3) d.px(x,24,'#E4FAFF');
    // 모래
    d.rect(0,24,64,16,'#F6DFA0'); d.dither(0,34,64,6,'#ECCF88','#F6DFA0');
    for(let i=0;i<20;i++) d.px(d.ri(24,63),d.ri(26,39),'#E2C278');
    // 파라솔 (노랑 빨강)
    d.vline(48,12,32,'#8A6A4A'); d.poly([[36,16],[48,8],[60,16]],'#FFD030');
    for(const [a,b] of [[40,44],[52,56]]) d.poly([[48,8],[a,16],[b,16]],'#E84040');
    d.hline(36,60,16,'#B83030');
    // 서핑보드 꽂힘
    d.ell(32,22,2,8,'#F2F2F2'); d.vline(32,15,29,'#3AA0E8'); d.ell(32,29,2,1,'#E6CC88');
    // 수건
    d.rect(40,30,16,5,'#4AC0A0'); d.hline(40,55,32,'#FFFFFF');
    // 찢어진 바지 (갈색 네모 바지, 찢어진 엉덩이)
    d.rect(26,33,8,3,'#B07A40'); d.rect(26,36,3,2,'#B07A40'); d.rect(31,36,3,2,'#B07A40'); d.hline(26,33,33,'#2A2A2A'); d.px(27,33,'#FFFFFF');
    d.px(30,34,'#F6DFA0'); d.px(29,35,'#F6DFA0'); d.px(30,35,'#8A5A28'); d.px(31,34,'#8A5A28');
    // 조개 & 불가사리
    d.stamp(58,35,['.p.','ppp','p.p'],{p:'#FF8A9A'}); d.stamp(22,37,['.s.','s.s'],{s:'#D89060'});
    // 갈매기
    d.stamp(28,8,['w.w','.w.'],{w:'#FFFFFF'});
  },
  'sponge:c2': d=>{ // 락 바텀 — 깊고 어두운 협곡, 뾰족 바위, 버스 정류장, 아귀 불빛
    d.grad(0,0,64,40,['#04060E','#080C1A','#0C1226','#101A30','#142038']);
    // 뾰족 바위 기둥
    for(const [x,w,h,c] of [[28,6,30,'#2A3552'],[38,4,34,'#323E5E'],[50,7,28,'#2A3552'],[60,5,36,'#323E5E'],[0,5,26,'#26304A']]){d.poly([[x,40],[x+w/2,40-h],[x+w,40]],c); d.line(x+w/2,40-h,x+w/2,40-h+10,'#46567A')}
    // 바닥
    d.rect(0,32,64,8,'#1E2638'); d.hline(0,63,32,'#2E3A52'); d.dither(0,37,64,3,'#161E2E','#1E2638');
    for(const [x,y] of [[26,34],[44,36],[58,35]]) d.ell(x,y,2,1,'#2A3448');
    // 버스 정류장
    d.vline(44,14,33,'#9AA0AC'); d.rect(41,10,7,5,'#E0E4EC'); d.frame(41,10,7,5,'#2A3A5A'); d.rect(43,11,3,2,'#3A6AC0'); d.hline(43,45,13,'#2A3A5A');
    d.circ(44,8,1.3,'#FFE88A'); d.ell(44,33,4,1,'#2E3A52');
    // 벤치
    d.rect(34,29,8,1,'#5A4A3A'); d.vline(35,30,32,'#3A2E24'); d.vline(40,30,32,'#3A2E24');
    // 아귀 불빛 & 이상한 눈들
    d.line(18,8,22,5,'#3A4A6A'); d.circ(17,9,1.5,'#BFFFE0'); d.ring(17,9,3,'#1E4A40');
    for(const [x,y] of [[55,18],[57,18],[31,14],[33,14]]) d.px(x,y,'#F8F060');
    d.stamp(8,4,['.g.','ggg','.g.'],{g:'#1A3A34'}); d.px(9,5,'#7AF0C0');
    // 해파리 희미한 빛
    d.stamp(54,4,['.pp.','pppp','p..p'],{p:'#9A60D0'}); d.stamp(24,22,['.p.','ppp','p.p'],{p:'#5AC0E0'});
    // 떨어진 해파리 잡이 그물? → 거품
    for(const [x,y] of [[50,12],[48,16],[22,30]]) d.ring(x,y,0.8,'#3A5A7A');
  },
});

// ================= KURIMANJU =================
Object.assign(A,{
  'kurimanju:s0': d=>{ // 손수 만든 꼬치 안주 — 츠쿠네·네기마·닭꼬치 세 개, 소스 윤기, 긴 나무 접시
    const O='#2A1408', Pl='#C88A50', Pl2='#9A6430', Pl3='#E8B070', St='#F0E2BC', St2='#C8B088', M='#B8622A', M2='#8A4018', M3='#E08A48', Gl='#FFE0B0', Gn='#6CB848', Gn2='#4A8A30', Gw='#F4F0E0', Tk='#7A3A18';
    // 접시
    d.ell(16,26,15,4,Pl2); d.ell(16,25,15,3.5,Pl); d.hline(3,28,23,Pl3); d.ell(16,25,11,1.5,'#B87A40');
    for(const [y,kind] of [[6,0],[13,1],[20,2]]){
      d.hline(1,30,y,St); d.hline(1,6,y+1,St2); d.px(30,y,St2);
      for(let i=0;i<4;i++){const x=9+i*5;
        if(kind===0){d.ell(x,y,2.3,2.6,Tk); d.px(x-1,y-2,'#B8622A'); d.px(x-1,y-1,Gl)}
        else if(kind===1&&i%2){d.rect(x-2,y-2,4,5,Gw); d.rect(x+1,y-2,1,5,Gn); d.px(x-2,y-2,'#FFFFFF')}
        else {d.circ(x,y,2.4,M); d.px(x-1,y-1,M3); d.px(x-1,y-2,Gl); d.px(x+1,y+2,M2); d.px(x+2,y+1,M2)}}
    }
    // 소스 방울
    d.px(14,9,Tk); d.px(19,10,Tk);
    d.outline(O);
    // 김
    d.stamp(27,0,['.w','w.','.w'],{w:'#F0E8E0'}); d.stamp(3,0,['w.','.w','w.'],{w:'#F0E8E0'});
  },
  'kurimanju:s1': d=>{ // 양조장 한정 술 — 하얀 도쿠리, 남색 띠, 빨간 라벨, 작은 잔
    const O='#1A1A2A', W='#F6F2EA', W2='#D8D0C2', W3='#FFFFFF', B='#2E4A8A', B2='#1E3466', R='#D83A3A', Rs='#F0C040', S='#E6E0D4';
    // 병 (도쿠리)
    d.ell(13,22,9,8,W); d.rect(10,4,6,10,W); d.ell(13,13,5,3,W); d.ell(13,3,4,1.5,W);
    d.ell(16,24,6,6,W2); d.vline(7,17,26,W3); d.vline(11,4,12,W3);
    d.hline(9,16,3,W2);
    d.rect(5,17,17,3,B); d.hline(5,21,19,B2);
    // 라벨
    d.rect(9,21,8,7,R); d.frame(9,21,8,7,'#9A2020'); d.stamp(11,22,['.yy.','y..y','.yy.','..y.','.y.y'],{y:Rs});
    // 잔
    d.poly([[23,24],[31,24],[30,30],[24,30]],W); d.hline(23,31,24,W2); d.ell(27,24,3,0.6,'#E8F0FC'); d.vline(30,25,29,W2); d.hline(24,30,28,B);
    d.outline(O);
    // 하아~ 김
    d.stamp(17,2,['.ww.','w..w','...w','..w.'],{w:'#E8E8F0'});
    twinkle(d,26,15,'#FFE070','#FFFFFF');
  },
  'kurimanju:s2': d=>{ // 인생 첫 모금 잔 — 거품 넘치는 맥주잔, 물방울, 반짝
    const O='#3A2208', Gl='#E8F4FC', Bz='#F6B830', Bz2='#E08C18', Bz3='#FFD860', F='#FFFFFF', F2='#F2E8D8', H='#D8E4EC';
    // 손잡이
    d.ring(24,17,5,H); d.ring(24,17,4,H); d.ring(24,17,3,'#C0D0DC');
    // 잔 몸통
    d.rect(5,8,18,22,Gl); d.rect(6,11,16,18,Bz); d.vline(20,11,28,Bz2); d.vline(21,11,28,Bz2); d.vline(7,12,27,Bz3); d.vline(8,12,20,'#FFF0B0');
    d.rect(5,29,18,2,H);
    // 기포
    for(const [x,y] of [[12,24],[15,20],[11,17],[17,26],[14,14],[18,16]]) d.px(x,y,'#FFF0B0');
    // 거품 (넘침)
    d.circ(8,8,3,F); d.circ(13,6,4,F); d.circ(19,7,3.5,F); d.rect(5,7,18,4,F); d.circ(4,11,1.5,F); d.vline(4,11,15,F); d.px(4,16,F);
    d.hline(5,22,10,F2); d.px(10,4,F2); d.px(16,4,F2);
    d.outline(O);
    // 물방울 & 반짝
    for(const [x,y] of [[22,22],[9,27]]) d.px(x,y,'#FFFFFF');
    twinkle(d,28,4,'#FFE070','#FFFFFF'); twinkle(d,2,24,'#FFE070','#FFFFFF'); d.px(29,28,'#FFE070');
  },
  'kurimanju:c0': d=>{ // 단골 이자카야 — 붉은 등, 메뉴 쪽지, 나무 카운터 위 술병과 잔
    d.rect(0,0,64,40,'#5A3420');
    d.grad(0,0,64,22,['#4A2A1A','#5A3420','#6A4028']);
    // 벽 기둥
    for(const x of [0,24,46]) d.rect(x,0,2,26,'#3A1E10');
    // 메뉴 쪽지 (빈 종이)
    for(let x=27;x<45;x+=3){d.rect(x,3,2,8,'#F4E8D0'); d.vline(x+1,4,9,'#C8B898'); d.px(x,4,'#2A1A10'); d.px(x,6,'#2A1A10')}
    d.hline(26,45,2,'#2A1A10');
    // 노렌 (왼쪽 위 남색 천)
    for(let x=3;x<22;x++) d.vline(x,0,(x%6===0)?0:7,'#2E3A6A'); d.ell(12,3,2,2,'#F4E8D0');
    // 붉은 등
    for(const [x,y] of [[52,6],[59,9]]){d.vline(x,0,y-4,'#2A1A10'); d.ell(x,y,3,4,'#E83A2A'); d.hline(x-3,x+3,y-1,'#B02010'); d.hline(x-2,x+2,y+2,'#B02010'); d.rect(x-1,y-5,3,1,'#2A1A10'); d.rect(x-1,y+4,3,1,'#2A1A10'); d.px(x-1,y-2,'#FF9A70')}
    // 선반 술병
    d.rect(26,14,19,1,'#3A1E10'); for(const [x,c] of [[28,'#2E6A3A'],[31,'#F4F0E0'],[34,'#6A3A1A'],[38,'#2E4A8A'],[41,'#F4F0E0']]){d.rect(x,9,2,5,c); d.px(x,8,c); d.px(x+1,8,c); d.px(x,7,'#2A1A10')}
    // 카운터
    d.rect(24,24,40,4,'#C88A50'); d.hline(24,63,24,'#E8B070'); d.rect(24,28,40,12,'#8A5A30'); for(let x=26;x<64;x+=8) d.vline(x,29,39,'#6A4020');
    // 바닥 (동물 자리)
    d.rect(0,26,24,14,'#7A5030'); for(let y=29;y<40;y+=4) d.hline(0,23,y,'#6A4228'); d.hline(0,23,26,'#3A1E10');
    // 카운터 위: 맥주잔, 도쿠리, 꼬치 접시
    d.rect(30,18,5,6,'#F6B830'); d.rect(30,17,5,2,'#FFFFFF'); d.vline(35,19,22,'#D8E4EC');
    d.ell(42,21,2,3,'#F6F2EA'); d.rect(41,17,2,2,'#F6F2EA'); d.hline(40,44,21,'#2E4A8A'); d.rect(45,22,2,2,'#F6F2EA');
    d.ell(53,23,5,1,'#F4F0E0'); d.line(49,22,57,21,'#E8D8B0'); for(const x of [51,54]) d.circ(x,21.5,1,'#B8622A');
    // 하아~ 김
    d.stamp(31,13,['.w','w.','.w'],{w:'#E8D8D0'});
    // 따뜻한 빛
    d.ell(55,14,3,1,'#7A4A30');
  },
  'kurimanju:c1': d=>{ // 눈 내리는 온천 마을 — 노천탕, 김, 눈 덮인 바위, 떠 있는 술 쟁반
    d.grad(0,0,64,22,['#4A5A8A','#5A6A98','#6E7EA8','#8696BC']);
    // 산 & 료칸
    d.poly([[0,16],[10,8],[20,14],[30,6],[42,14],[64,10],[64,22],[0,22]],'#B8C8E0'); d.poly([[30,6],[33,9],[27,9]],'#FFFFFF'); d.poly([[10,8],[13,11],[7,11]],'#FFFFFF');
    d.rect(40,10,22,12,'#6A4028'); d.poly([[37,11],[51,4],[65,11]],'#3A3040'); d.poly([[38,10],[51,4],[64,10],[64,8],[51,3],[38,8]],'#FFFFFF');
    for(const x of [43,49,55]){d.rect(x,13,4,5,'#FFD880'); d.vline(x+2,13,17,'#6A4028')}
    d.ell(58,9,2,3,'#E83A2A'); d.px(58,8,'#FF9A70');
    // 눈 바닥
    d.rect(0,22,64,18,'#EEF2FA'); d.hline(0,63,22,'#FFFFFF'); d.dither(0,36,64,4,'#DCE4F2','#EEF2FA');
    // 온천 (오른쪽 중앙)
    d.ell(43,31,17,6,'#6A6A78'); d.ell(43,31,15,5,'#7ACCD8'); d.ell(41,30,10,3,'#9ADCE4'); for(let x=30;x<56;x+=5) d.hline(x,x+2,32,'#B8ECF0');
    for(const [x,y,r] of [[27,30,2.5],[30,36,2],[58,28,3],[56,36,2.5],[44,37,2]]){d.circ(x,y,r,'#7A7A88'); d.ell(x,y-r+0.5,r,1,'#FFFFFF')}
    // 떠 있는 쟁반 + 도쿠리
    d.rect(44,29,7,2,'#B8862A'); d.ell(46,27,1,2,'#F6F2EA'); d.rect(48,28,2,1,'#F6F2EA'); d.px(46,25,'#F6F2EA');
    // 김
    for(const [x,y] of [[34,24],[40,20],[48,22],[54,19],[38,14]]) d.stamp(x,y,['.w','w.','.w','w.'],{w:'#FFFFFF'});
    // 눈송이
    for(let i=0;i<30;i++){const x=d.ri(0,63), y=d.ri(0,38); if(!(x>=5&&x<=22&&y>=19)) d.px(x,y,'#FFFFFF')}
    // 나무 표지 & 등롱
    d.rect(22,26,2,8,'#5A3420'); d.rect(20,24,6,3,'#7A4A28'); d.ell(23,23,3,1,'#FFFFFF');
  },
  'kurimanju:c2': d=>{ // 별 쏟아지는 언덕 — 유성우, 언덕 위 돗자리와 건배 잔 두 개, 등불
    d.grad(0,0,64,32,['#061420','#0A2030','#0E2C40','#143A50','#1C4A5E']);
    d.ell(36,10,30,4,'#123448'); 
    stars(d,50,0,0,64,28,['#FFFFFF','#B8F0FF','#FFF0C0']);
    // 유성우 (평행 사선 여러 개)
    for(const [x,y,l] of [[60,2,10],[48,6,8],[36,1,12],[54,14,6],[26,8,7],[62,20,5],[42,16,5]]) for(let i=0;i<l;i++) d.px(x-i,y+Math.round(i*0.6),i===0?'#FFFFFF':i<l/2?'#C8F4FF':'#5AA0C0');
    // 언덕
    d.poly([[0,34],[14,32],[30,28],[44,26],[56,27],[64,28],[64,40],[0,40]],'#1E3A2E'); d.line(30,28,44,26,'#3A6A50'); d.line(44,26,56,27,'#3A6A50');
    d.rect(0,35,64,5,'#16302A'); d.dither(0,37,64,3,'#122620','#16302A');
    for(let x=1;x<64;x+=4) d.px(x,33+(x%3),'#2E5A44');
    // 돗자리
    d.poly([[36,31],[54,29],[58,33],[38,35]],'#E06A5A'); for(let i=0;i<4;i++) d.line(38+i*5,35-i*0.5,36+i*5,31-i*0.5,'#F4D0A0');
    // 건배 잔 두 개 (부딪힘)
    d.rect(43,24,3,5,'#F6B830'); d.hline(43,45,23,'#FFFFFF'); d.rect(48,24,3,5,'#F6B830'); d.hline(48,50,23,'#FFFFFF'); d.px(46,22,'#FFF0A0'); d.px(47,21,'#FFF0A0'); d.px(47,23,'#FFF0A0');
    // 술병
    d.ell(54,28,1.5,2,'#F6F2EA'); d.vline(54,24,26,'#F6F2EA'); d.hline(53,55,28,'#2E4A8A');
    // 등불
    d.vline(60,22,32,'#3A2A20'); d.ell(60,21,2,2,'#FFC860'); d.px(60,21,'#FFF4D0'); d.ell(60,21,4,3,null);
    d.ell(60,21,2,2,'#FFC860'); d.px(60,21,'#FFF4D0');
    bigTwinkle(d,14,10,'#C8F4FF');
  },
});

// ================= HOMER K =================
Object.assign(A,{
  'homer:s0': d=>{ // 정육점 꽃등심 — 마블링 스테이크, 뼈, 정육점 종이
    const O='#3A1010', Pp='#F4E6CC', Pp2='#D8C4A0', M='#D8404A', M2='#A82838', M3='#F27A80', F='#FFF0E8', F2='#F2D8C8', Bn='#F8F2E0', Bn2='#D8CCB0', Tw='#C89A60';
    // 종이
    d.poly([[1,22],[18,30],[31,20],[14,13]],Pp); d.line(1,22,18,30,Pp2); d.line(18,30,31,20,Pp2);
    // 고기
    d.ell(15,15,12,9,F); d.ell(15,15,11,8,M); d.ell(17,17,9,6,M2); d.ell(13,13,7,4,M);
    // 마블링
    for(const [x0,y0,x1,y1] of [[6,13,11,11],[12,17,18,14],[16,20,22,18],[9,18,12,20],[19,11,23,13],[7,16,9,15]]) d.line(x0,y0,x1,y1,F2);
    d.ell(18,14,2,1.5,F); d.px(10,10,M3); d.px(11,10,M3); d.px(12,9,M3);
    // 뼈
    d.circ(24,17,3,Bn); d.circ(24,17,1.5,Bn2); d.px(23,16,'#FFFFFF');
    // 끈
    d.line(3,10,27,22,Tw); d.px(27,23,Tw); d.px(28,24,Tw);
    d.outline(O);
    // 반짝 & 보상!
    bigTwinkle(d,28,4,'#FFE070'); twinkle(d,3,3,'#FFE070','#FFFFFF');
  },
  'homer:s1': d=>{ // 한정 인형 — 하얗고 동그란 작은 곰 인형, 분홍 볼, 태그
    const O='#4A4050', W='#FFFFFF', W2='#ECE8F0', W3='#D4CEDC', K='#2A2228', P='#FFA0B4', T='#F2C040', R='#E05070';
    // 몸
    d.ell(16,24,8,6,W2); d.ell(16,23,7,5,W);
    d.ell(9,22,2.5,2,W); d.ell(23,22,2.5,2,W); // 팔
    d.ell(12,29,3,2,W2); d.ell(20,29,3,2,W2); // 발
    // 머리
    d.ell(16,12,11,9,W); d.ell(18,15,9,5,W2); d.ell(14,9,7,4,W);
    d.circ(8,4,2.5,W); d.circ(24,4,2.5,W); d.px(8,4,'#FFD8E0'); d.px(24,4,'#FFD8E0'); // 귀
    // 얼굴
    d.rect(11,12,2,3,K); d.rect(20,12,2,3,K); d.px(11,12,W); d.px(20,12,W);
    d.px(15,16,K); d.px(16,17,K); d.px(17,16,K); d.px(16,15,K);
    d.ell(8,16,2,1,P); d.ell(24,16,2,1,P);
    // 가슴 리본
    d.stamp(13,19,['rr.rr','.rrr.','rr.rr'],{r:R});
    d.hline(9,23,28,W3);
    d.outline(O);
    // 한정 태그
    d.line(23,24,27,27,'#9A90A0'); d.rect(26,26,5,5,T); d.frame(26,26,5,5,'#B88820'); d.px(28,28,R);
    // 하트
    d.stamp(1,8,['h.h','hhh','.h.'],{h:'#FF7EA0'}); d.stamp(27,10,['h.h','hhh','.h.'],{h:'#FF7EA0'});
  },
  'homer:s2': d=>{ // 전설의 레고 세트 — 블록 집, 굴뚝 자리 하나만 비어 있고 마지막 블록이 둥실
    const R='#E03030', R2='#A81E20', R3='#FF7A70', Y='#FFD030', Y2='#C89A10', B='#2E7AE0', B2='#1E54A8', G='#3EB050', G2='#2A7E38', W='#F4F4F4', W2='#BEC4CC', Gy='#7A8A9A', Gy2='#5A6A7A';
    const brick=(x,y,w,h,c,c2,hi)=>{d.rect(x,y,w,h,c); d.hline(x,x+w-1,y+h-1,c2); d.vline(x+w-1,y,y+h-1,c2); for(let i=1;i<w-1;i+=3){d.rect(x+i,y-1,2,1,c); d.px(x+i,y-1,hi)}};
    brick(1,27,30,3,Gy,Gy2,'#9AAABA');
    brick(3,23,9,4,R,R2,R3); brick(12,23,8,4,W,W2,'#FFFFFF'); brick(20,23,9,4,R,R2,R3);
    brick(3,19,6,4,W,W2,'#FFFFFF'); brick(9,19,7,4,Y,Y2,'#FFF09A'); brick(16,19,7,4,Y,Y2,'#FFF09A'); brick(23,19,6,4,W,W2,'#FFFFFF');
    d.rect(5,20,3,2,'#9AD0F0'); d.rect(24,20,3,2,'#9AD0F0'); d.rect(14,24,4,3,'#5A3A20');
    // 지붕 (경사 블록)
    d.poly([[1,18],[16,7],[31,18]],B); d.poly([[16,7],[31,18],[24,18]],B2); d.line(2,17,15,8,'#7AB8FF'); for(let y=10;y<18;y+=3) d.hline(16-(y-7)*1.36+2,16+(y-7)*1.36-2,y,B2);
    brick(21,1,6,3,G,G2,'#8AE08A'); d.outline('#1A1A24');
    // 굴뚝 빈자리 (점선)
    for(const [x,y] of [[22,7],[24,7],[26,7],[22,9],[26,9],[22,11]]) d.px(x,y,'#5A6A7A');
    d.stamp(28,4,['a..','aa.','aaa','aa.','a..'],{a:'#FFE070'});
    twinkle(d,6,4,'#FFE070','#FFFFFF'); d.px(11,2,'#FFE070');
  },
  'homer:c0': d=>{ // 동네 드라이브 노을 — 바닷가 도로, 의자 젖힌 빨간 차, zZ
    d.grad(0,0,64,20,['#4A3A8A','#8A4A9A','#D45A80','#F2826A','#FAA860','#FFD070']);
    d.circ(16,19,6,'#FFE6A0'); d.circ(16,19,4,'#FFF4D0');
    // 바다
    d.rect(0,19,64,7,'#C85A70'); for(let x=0;x<64;x+=5) d.hline(x,x+2,21+((x/5)%2)*2,'#F2A080'); d.hline(10,22,20,'#FFE0A0'); d.hline(12,20,22,'#FFE0A0');
    // 가드레일 + 도로
    d.rect(0,26,64,14,'#4A3A4A'); d.hline(0,63,26,'#2A2030'); d.hline(0,63,28,'#E6D0B0'); for(let x=0;x<64;x+=6) d.vline(x,27,29,'#9A8A90');
    for(let x=2;x<64;x+=10) d.hline(x,x+5,35,'#FFD070');
    d.dither(0,38,64,2,'#3A2E3A','#4A3A4A');
    // 야자수
    d.vline(58,8,27,'#3A2030'); d.vline(59,10,27,'#3A2030'); for(const [x,y] of [[52,6],[64,6],[54,11],[63,11]]) d.line(58,7,x,y,'#3A2030'); d.line(58,7,58,3,'#3A2030');
    // 빨간 차 (오픈카)
    d.rect(29,26,26,6,'#E03A3A'); d.poly([[32,26],[36,22],[44,22],[46,26]],'#E03A3A'); d.hline(29,54,27,'#FF7A6A'); d.hline(29,54,31,'#A82020');
    d.poly([[35,25],[38,22],[42,22],[44,25]],'#9AD0F0');
    d.line(46,26,50,21,'#6A3A2A'); d.line(47,26,51,21,'#8A4A30'); // 젖힌 의자
    d.circ(34,32,2.5,'#2A2028'); d.circ(50,32,2.5,'#2A2028'); d.px(34,32,'#B0A8B0'); d.px(50,32,'#B0A8B0');
    d.rect(54,28,1,2,'#FFE070'); d.rect(29,28,1,2,'#FFA0A0');
    // zZ
    d.stamp(52,13,['zzz','.z.','zzz'],{z:'#FFFFFF'}); d.stamp(56,9,['zz','zz'],{z:'#FFE6F0'});
    // 갈매기
    d.stamp(30,6,['w.w','.w.'],{w:'#3A2040'});
  },
  'homer:c1': d=>{ // 스프링필드 — 노란 하늘 아닌 파란 하늘, 원자력 냉각탑, 대형 도넛 간판 가게
    d.grad(0,0,64,22,['#5AA8F0','#78B8F4','#96CAF6','#B4DAF8']);
    for(const [x,y] of [[8,4],[30,8],[52,3]]) {d.ell(x,y,5,1.5,'#FFFFFF'); d.ell(x+2,y-1,3,1,'#FFFFFF')}
    // 냉각탑 (멀리)
    for(const x of [8,18]){d.poly([[x-4,22],[x-2,12],[x+2,12],[x+4,22]],'#A8B0B8'); d.vline(x+2,12,21,'#8A929A'); d.ell(x,9,2,2,'#E8ECF0'); d.ell(x+1,6,2,1.5,'#E8ECF0')}
    // 거리 건물
    d.rect(0,18,24,6,'#C89A80'); d.rect(36,14,10,10,'#8AB0D0'); d.rect(46,12,18,12,'#E8B8C8');
    for(let y=16;y<23;y+=3) for(let x=37;x<45;x+=3) d.rect(x,y,2,2,'#FFF4C0');
    // 도넛 가게 + 거대 도넛 간판
    d.rect(46,16,18,10,'#F0D090'); d.rect(52,19,6,7,'#6A4A30'); d.rect(47,19,4,4,'#9AD0F0'); d.rect(59,19,4,4,'#9AD0F0');
    d.vline(54,9,12,'#6A6A78'); d.circ(55,6,6,'#E8A050'); d.circ(55,6,5,'#FF8AC8'); d.circ(55,6,2,'#96CAF6');
    for(const [x,y,c] of [[52,3,'#FFFFFF'],[57,2,'#FFE040'],[59,6,'#5AC0F0'],[51,8,'#80E080'],[56,10,'#FFFFFF']]) d.px(x,y,c);
    d.rect(26,10,8,14,'#9AA8B8'); d.rect(27,12,2,2,'#FFF4C0'); d.rect(31,12,2,2,'#FFF4C0'); d.rect(27,16,2,2,'#FFF4C0');
    // 인도 & 도로
    d.rect(0,24,64,6,'#C8C4BC'); d.hline(0,63,24,'#A8A49C'); for(let x=0;x<64;x+=6) d.vline(x,24,29,'#B4B0A8');
    d.rect(0,30,64,10,'#5A5A64'); for(let x=2;x<64;x+=9) d.hline(x,x+4,35,'#FFE040');
    // 떨어진 도넛 한 입 & 맥주 캔
    d.circ(34,27,2,'#FF8AC8'); d.px(34,27,'#C8C4BC'); d.px(36,26,'#C8C4BC'); d.rect(40,26,2,3,'#D83A3A'); d.px(40,26,'#E0E0E0');
    // 분홍 차
    d.rect(44,31,12,4,'#F290B8'); d.poly([[46,31],[48,28],[53,28],[55,31]],'#F290B8'); d.rect(48,29,4,2,'#9AD0F0'); d.circ(47,35,1.5,'#2A2A30'); d.circ(53,35,1.5,'#2A2A30');
  },
  'homer:c2': d=>{ // 구름 위 침대 왕국 — 사탕색 하늘, 구름 위 푹신한 침대들, 베개 성
    d.grad(0,0,64,40,['#F8B8E0','#FAC6E4','#FCD4E8','#FEE2EC','#FFF0F0']);
    stars(d,10,0,0,64,14,['#FFFFFF','#FFF6B0']);
    d.circ(8,7,4,'#FFF6C8'); d.circ(9,6,4,'#F8B8E0'); // 초승달
    // 베개 성
    d.rect(40,4,16,14,'#FFFFFF'); for(const x of [40,47,54]) {d.rect(x,1,3,4,'#FFFFFF'); d.ell(x+1,1,2,1,'#FFFFFF')}
    d.rect(45,10,6,8,'#C8A0F0'); d.ell(48,10,3,2,'#C8A0F0'); d.hline(40,55,17,'#E0D0F0'); d.ell(44,7,2,1,'#FFD8F0'); d.ell(52,7,2,1,'#FFD8F0');
    d.vline(48,-1,4,'#9A7AC8'); d.rect(49,0,3,2,'#FF7AB0');
    // 구름 바닥
    for(let x=-2;x<66;x+=7) d.circ(x,22,5,'#FFFFFF'); d.rect(0,22,64,18,'#FFFFFF');
    for(let x=2;x<66;x+=9) d.hline(x,x+5,28,'#F4E4F4'); d.dither(0,37,64,3,'#F4E4F4','#FFFFFF');
    // 침대 1 (분홍)
    d.rect(26,24,18,5,'#FF9AC8'); d.rect(26,22,18,2,'#FFE0F0'); d.rect(26,18,3,11,'#C890E0'); d.rect(42,20,2,9,'#C890E0'); d.ell(31,21,3,1.5,'#FFFFFF'); d.hline(29,41,26,'#F27AB0');
    for(let x=30;x<42;x+=4) d.px(x,24,'#FFFFFF');
    // 침대 2 (민트, 멀리)
    d.rect(50,22,12,4,'#8AE0C8'); d.rect(50,19,2,7,'#C890E0'); d.rect(60,20,2,6,'#C890E0'); d.ell(54,21,2,1,'#FFFFFF');
    // 사탕 & zZ
    d.stamp(30,12,['zzz','.z.','zzz'],{z:'#C890E0'}); d.stamp(35,9,['zz','zz'],{z:'#E0B0F0'});
    for(const [x,y,c] of [[24,33,'#FF7AB0'],[48,32,'#7AC8FF'],[58,34,'#FFD050']]){d.circ(x,y,1.5,c); d.px(x-2,y,c); d.px(x+2,y,c); d.px(x,y,'#FFFFFF')}
    twinkle(d,20,6,'#FFFFFF','#FFF6B0');
  },
});

// ================= PACHY =================
Object.assign(A,{
  'pachy:s0': d=>{ // 돌머리 헬멧 — 둥근 돔, 뒤쪽 뿔혹, 턱끈, 금 간 자국
    const O='#2A1A10', H='#F2B840', H2='#C8861C', H3='#FFE08A', H4='#FFF6D0', K='#B89060', K2='#8A6438', S='#3A6AC0', S2='#2A4A8A', W='#FFFFFF';
    // 돔
    d.ell(16,15,13,11,H); d.rect(3,15,27,7,H); d.ell(18,18,11,6,H2); d.ell(14,13,10,8,H);
    d.ell(11,8,5,3,H3); d.px(9,7,H4); d.px(10,6,H4); d.px(11,6,H4);
    // 가장자리 띠
    d.rect(2,21,29,3,S); d.hline(2,30,23,S2);
    // 뒤쪽·옆 뿔혹
    for(const [x,y] of [[3,15],[5,10],[9,6],[27,10],[29,15],[24,6]]){d.circ(x,y,1.5,K); d.px(x,y+1,K2)}
    // 금
    d.line(19,5,21,9,H2); d.line(21,9,19,12,H2); d.line(21,9,24,11,H2);
    // 턱끈
    d.line(6,24,10,29,'#4A3A2A'); d.line(26,24,22,29,'#4A3A2A'); d.hline(10,22,29,'#4A3A2A'); d.rect(15,28,3,3,'#C8C8D0');
    // 별 스티커
    d.stamp(13,14,['..w..','.www.','wwwww','.w.w.'],{w:W});
    d.outline(O);
    // 쿵! 효과
    d.stamp(27,0,['y..y','.yy.','.yy.','y..y'],{y:'#FFE070'}); d.px(1,2,'#FFE070'); d.px(2,3,'#FFE070');
  },
  'pachy:s1': d=>{ // 박치기로 딴 수박 — 쩍 갈라진 두 조각, 빨간 속, 씨, 즙
    const O='#1A2A10', G='#3E9A3A', G2='#2A6E28', G3='#7ACC5A', Wr='#F4F0D0', R='#F04A5A', R2='#C83040', R3='#FF8A90', S='#1A1A1A';
    // 왼쪽 조각 (단면 보이게 기울어짐)
    d.ell(9,18,8,11,G); for(let y=8;y<29;y+=3) d.line(3,y,6,y+2,G2); d.ell(11,18,6,9.5,Wr); d.ell(11,18,5,8.5,R); d.ell(12,16,2,4,R3);
    for(const [x,y] of [[10,13],[13,17],[9,20],[12,23],[10,17]]) d.px(x,y,S);
    // 오른쪽 조각
    d.ell(23,18,8,11,G); for(let y=8;y<29;y+=3) d.line(29,y,26,y+2,G2); d.ell(21,18,6,9.5,Wr); d.ell(21,18,5,8.5,R); d.ell(20,20,2,4,R2);
    for(const [x,y] of [[22,14],[19,18],[23,21],[21,24],[22,18]]) d.px(x,y,S);
    // 지그재그 금 사이 (틈)
    for(let y=7;y<30;y++){const x=16+((y%4)<2?-1:0); d.clear(x,y); d.clear(x+1,y)}
    d.px(4,12,G3); d.px(5,10,G3); d.px(27,10,G3);
    d.outline(O);
    // 즙 방울 & 쩍! 충격선
    for(const [x,y] of [[16,4],[13,2],[19,2],[16,31]]) d.px(x,y,R);
    d.line(10,1,12,3,'#FFE070'); d.line(22,1,20,3,'#FFE070'); d.vline(16,0,1,'#FFE070');
  },
  'pachy:s2': d=>{ // 박치기 챔피언 벨트 — 금 버클 가운데 공룡 돔 문양, 보석, 가죽끈
    const O='#2A1408', L='#8A3A2A', L2='#5E2418', L3='#B05A40', G='#F6C83A', G2='#C8901C', G3='#FFE88A', R='#E03A4A', Bl='#3AA0E8', Gn='#3EB050', W='#FFFFFF';
    // 끈 (살짝 휘어짐)
    for(let x=0;x<32;x++){const y=13+Math.round(Math.abs(x-16)*0.18); d.vline(x,y,y+6,L); d.px(x,y,L3); d.px(x,y+6,L2); if(x%3===0) d.px(x,y+3,L2)}
    // 옆 판
    for(const x of [2,25]){d.rect(x,13,5,8,G2); d.rect(x+1,14,3,6,G); d.circ(x+2,17,1,R)}
    // 큰 버클
    d.ell(16,16,9,10,G2); d.ell(16,16,8,9,G); d.ell(15,14,6,6,G3); d.ell(16,16,6,7,G);
    // 공룡 돔 머리 문양
    d.ell(16,13,4,3,G2); d.rect(13,13,7,4,G2); d.px(20,15,G2); d.px(21,15,G2); d.px(14,14,'#1A1A1A'); for(const x of [12,13,19,20]) d.px(x,11,G2);
    d.ell(16,12,3,1.5,G3);
    // 보석
    d.circ(16,22,1.8,R); d.px(15,21,'#FF9AB0'); d.circ(10,17,1.3,Bl); d.circ(22,17,1.3,Gn); d.circ(16,6,1.3,Bl);
    // 별 장식
    d.px(11,10,W); d.px(21,10,W);
    d.outline(O);
    bigTwinkle(d,27,4,'#FFE070'); twinkle(d,4,5,'#FFE070',W); d.px(29,28,'#FFE070');
  },
  'pachy:c0': d=>{ // 동네 축구장 — 줄무늬 잔디, 골대 그물, 하늘 멀리 날아가는 공
    d.grad(0,0,64,16,['#5AB4F4','#72C0F6','#8ACCF8','#A4D8FA']);
    cloud(d,22,8,12,'#FFFFFF','#DCEEFA');
    // 날아가는 공 (오른쪽 위 작게) + 궤적
    for(let i=0;i<18;i++){const x=24+i*1.9, y=26-i*1.2-Math.sin(i/5)*2; if(i%2===0) d.px(x,y,'#FFFFFF')}
    d.circ(59,4,2,'#FFFFFF'); d.px(59,4,'#2A2A30'); d.px(58,3,'#2A2A30'); d.px(60,5,'#2A2A30'); bigTwinkle(d,62,1,'#FFE070');
    // 펜스 & 나무
    for(const [x,r] of [[4,5],[12,4],[42,5],[50,4]]){d.circ(x,13,r,'#4A9A48'); d.circ(x-1,12,r-2,'#5CB458')}
    d.rect(0,15,64,3,'#9AA4B0'); for(let x=0;x<64;x+=2) d.vline(x,15,17,'#B8C2CC');
    // 잔디 (줄무늬)
    for(let x=0;x<64;x+=8) d.rect(x,18,4,22,'#6CC050'); for(let x=4;x<64;x+=8) d.rect(x,18,4,22,'#5CB044');
    // 흰 선
    d.hline(0,63,19,'#FFFFFF'); d.line(30,40,36,19,'#FFFFFF'); d.ell(33,30,5,2,null);
    for(let a=0;a<6.28;a+=.05) d.px(33+Math.cos(a)*6,30+Math.sin(a)*2.5,'#FFFFFF');
    // 골대 (오른쪽)
    d.rect(46,14,16,1,'#FFFFFF'); d.vline(46,14,30,'#FFFFFF'); d.vline(61,14,30,'#FFFFFF');
    for(let x=48;x<61;x+=2) d.vline(x,15,29,'#DCE4EC'); for(let y=17;y<30;y+=2) d.hline(47,60,y,'#DCE4EC');
    d.line(46,30,50,27,'#C8D0D8'); d.line(61,30,58,27,'#C8D0D8');
    // 콘 & 물병
    for(const x of [26,40]){d.poly([[x-1,36],[x,33],[x+1,36]],'#F48838'); d.hline(x-2,x+2,36,'#C86020')}
    d.rect(55,33,2,4,'#4AA0E0'); d.px(55,32,'#FFFFFF');
    // 땅에 패인 자국 (헤딩 발 디딤)
    d.ell(23,37,2,0.6,'#8A6A40');
  },
  'pachy:c1': d=>{ // 산양 바위 산 — 층층이 절벽, 소나무, 절벽 위 산양, 쿵! 충격
    d.grad(0,0,64,20,['#7AB8E0','#90C6E6','#A8D4EC','#C0E0F0']);
    // 먼 산
    d.poly([[0,20],[12,8],[22,16],[34,4],[48,14],[64,6],[64,22],[0,22]],'#8AA0B8'); d.poly([[34,4],[37,8],[31,8]],'#FFFFFF'); d.poly([[64,6],[64,10],[60,9]],'#FFFFFF');
    // 소나무 숲
    for(const [x,h] of [[2,10],[8,12],[14,9],[20,11],[26,8]]){d.poly([[x-3,24],[x,24-h],[x+3,24]],'#2E6A40'); d.poly([[x-2,24-h/2],[x,24-h],[x+1,24-h/2]],'#3E8A50')}
    // 큰 바위 절벽 (오른쪽)
    d.poly([[30,40],[32,22],[38,16],[46,14],[52,8],[60,10],[64,8],[64,40]],'#A8988A');
    d.poly([[46,14],[52,8],[60,10],[56,18],[48,20]],'#C8B8A8'); d.poly([[32,22],[38,16],[42,22],[36,28]],'#C0B0A0');
    for(const [x0,y0,x1,y1] of [[40,24,50,28],[52,20,62,24],[44,32,56,34],[36,30,42,36]]) d.line(x0,y0,x1,y1,'#7A6A60');
    // 바위 선반 위 산양
    d.rect(48,10,8,1,'#7A6A60');
    d.ell(52,6,3,2,'#F4F0E8'); d.rect(50,7,1,3,'#F4F0E8'); d.rect(54,7,1,3,'#F4F0E8'); d.circ(49,4,1.5,'#F4F0E8'); d.px(48,4,'#2A2A2A'); d.line(49,2,51,1,'#6A5A50'); d.px(47,6,'#E8E0D0');
    // 쿵! 충격 별
    d.stamp(42,1,['y.y.y','.yyy.','yyWyy','.yyy.','y.y.y'],{y:'#FFE070',W:'#FFFFFF'});
    // 땅 (동물 자리: 풀밭)
    d.rect(0,24,32,16,'#6AA850'); d.hline(0,31,24,'#88C068'); d.dither(0,35,32,5,'#5A9844','#6AA850');
    for(let i=0;i<10;i++){const x=d.ri(0,30), y=d.ri(26,38); d.px(x,y,'#4A8A3A'); d.px(x+1,y-1,'#4A8A3A')}
    // 떨어진 돌 조각
    for(const [x,y] of [[26,34],[28,37],[24,38]]) {d.rect(x,y,2,2,'#A8988A'); d.px(x,y,'#C8B8A8')}
  },
  'pachy:c2': d=>{ // 백악기 박치기 경기장 — 노을, 화산, 돌 원형 경기장, 관중석의 긴목 공룡들
    d.grad(0,0,64,18,['#5A2A6A','#9A3A6A','#E0605A','#F89050','#FFC060']);
    d.circ(14,15,4,'#FFE6A0');
    // 화산
    d.poly([[2,18],[12,6],[16,6],[26,18]],'#5A3A40'); d.rect(12,5,4,2,'#E8502A'); d.line(13,7,11,12,'#FF8030'); d.line(15,7,17,11,'#FF8030');
    d.ell(14,2,4,2,'#8A6A7A'); d.ell(18,0,3,1.5,'#7A5A6A');
    // 프테라노돈
    d.stamp(34,4,['p...p','.ppp.','..p..'],{p:'#3A1A3A'}); d.stamp(46,8,['p..p','.pp.'],{p:'#3A1A3A'});
    // 관중석 돌벽 (반원 뒤쪽)
    d.rect(24,12,40,14,'#A8885A'); for(let y=14;y<26;y+=4){d.hline(24,63,y,'#8A6A40'); for(let x=24+(y%8);x<64;x+=8) d.vline(x,y,y+3,'#8A6A40')}
    d.rect(0,18,24,8,'#A8885A'); d.hline(0,23,22,'#8A6A40');
    // 아치
    for(const x of [28,38,48,58]){d.rect(x,19,4,7,'#4A3020'); d.ell(x+1.5,19,2,2,'#4A3020')}
    // 관중 공룡 (긴 목, 뿔 등)
    const dinos=[[26,'#5AA060',1],[32,'#E0A040',0],[37,'#6A8AE0',1],[43,'#D06A80',0],[49,'#5AA060',1],[54,'#E0A040',0],[60,'#9A6AD0',1]];
    for(const [x,c,lng] of dinos){ if(lng){d.vline(x,4,12,c); d.vline(x+1,5,12,c); d.ell(x+1,4,2,1,c); d.px(x+2,3,'#1A1A1A')} else {d.ell(x,10,3,2,c); d.px(x+1,9,'#1A1A1A'); d.px(x-2,8,'#F4F0E0'); d.px(x+2,8,'#F4F0E0')}}
    // 깃발
    d.vline(24,4,12,'#5A3A20'); d.poly([[25,4],[29,5],[25,7]],'#E83A3A');
    // 모래 경기장 바닥
    d.rect(0,26,64,14,'#F2C880'); d.hline(0,63,26,'#C8985A'); d.dither(0,36,64,4,'#E6B870','#F2C880');
    for(let a=0;a<6.28;a+=.03) d.px(44+Math.cos(a)*12,32+Math.sin(a)*3.5,'#E0A860');
    // 경기장 가운데 금 간 바위(과녁) & 발자국
    d.ell(44,31,4,2,'#8A7A6A'); d.ell(43,30,3,1,'#A8988A'); d.line(43,29,45,32,'#4A3A30');
    for(const [x,y] of [[28,35],[32,33],[36,35]]) d.stamp(x,y,['p.p','.p.'],{p:'#C8985A'});
    // 함성 효과
    d.stamp(30,0,['y','y','.','y'],{y:'#FFF0A0'}); d.stamp(52,0,['y','y','.','y'],{y:'#FFF0A0'});
  },
});

// ================= TIBETAN FOX =================
Object.assign(A,{
  'tibfox:s0': d=>{ // 네모난 돌멩이 — 무표정 얼굴 같은 사각 돌
    const O='#2A2420', S='#B0A898', S2='#8A8274', S3='#D0C8BA', S4='#6A6458', K='#2A2420', M='#7AA060';
    d.rect(4,6,24,21,S); d.rect(5,5,22,1,S); d.rect(3,7,1,19,S); d.rect(28,7,1,19,S); d.rect(5,27,22,1,S2);
    d.rect(4,6,24,3,S3); d.vline(4,8,24,S3); d.rect(20,20,8,7,S2); d.vline(27,8,26,S2); d.hline(5,27,26,S4);
    // 무표정 얼굴 (반쯤 감은 눈, 일자 입)
    d.hline(9,13,14,K); d.hline(18,22,14,K); d.hline(10,12,15,K); d.hline(19,21,15,K);
    d.hline(13,18,21,K);
    // 이끼 & 줄무늬
    d.rect(4,6,4,2,M); d.px(8,6,M); d.px(26,25,M); d.px(25,26,M);
    d.line(22,8,25,11,S2); d.px(7,23,S2);
    d.outline(O);
    // 땅 그림자 & ... 말풍선
    d.ell(16,30,12,1,'#C8C0B4');
    d.stamp(23,0,['www','w.w','www'],{w:'#FFFFFF'}); d.stamp(24,1,['k'],{k:'#2A2420'}); d.hline(24,26,1,'#D0D0D0'); d.px(25,1,'#2A2420');
  },
  'tibfox:s1': d=>{ // 곰 발자국 석고 — 둥근 석고판에 큰 발자국, 나무 액자 테
    const O='#3A2A1A', Wd='#A8743A', Wd2='#7A4E20', Wd3='#C8945A', P='#F4F0E6', P2='#DAD4C6', P3='#C0B8A8', K='#8A8070';
    d.circ(16,16,14,Wd); d.circ(16,16,12.5,Wd2); d.circ(16,16,12,P); d.ell(14,13,8,6,'#FAF8F2');
    d.ring(16,16,13.5,Wd3);
    // 발자국 (움푹 들어간 그늘)
    d.ell(16,20,6,4.5,P3); d.ell(16,19,5,3.5,P2);
    for(const [x,y] of [[8,11],[12,8],[17,7],[22,9],[25,13]]){d.ell(x,y,1.8,2,P3); d.px(x,y-1,P2); d.px(x,y-3,K)}
    d.hline(12,20,24,K);
    d.outline(O);
    // 작은 여우 발자국 따라옴 (아래)
    d.stamp(25,26,['.k.','k.k','.k.'],{k:'#E8A050'}); d.stamp(28,29,['k.','.k'],{k:'#E8A050'});
    twinkle(d,3,3,'#FFE070','#FFFFFF');
  },
  'tibfox:s2': d=>{ // 우는토끼 인형 — 동글동글 회갈색, 둥근 귀, 한정 태그, 행복한 얼굴
    const O='#3A2A20', F='#B89A78', F2='#8A6E50', F3='#D8C0A0', F4='#F2E6D4', K='#2A1A10', P='#F2A0A0', T='#FFFFFF';
    d.ell(16,19,12,10,F); d.ell(18,22,10,7,F2); d.ell(15,18,10,8,F); d.ell(13,14,6,3,F3);
    d.circ(8,8,4,F); d.circ(24,8,4,F); d.circ(8,8,2.5,'#E8B8A8'); d.circ(24,8,2.5,'#E8B8A8');
    d.ell(16,24,6,4,F4);
    // 얼굴 (행복한 ^^ 눈)
    d.stamp(9,15,['.k.','k.k'],{k:K}); d.stamp(20,15,['.k.','k.k'],{k:K});
    d.px(16,19,K); d.px(15,20,K); d.px(17,20,K);
    d.ell(8,19,1.8,1,P); d.ell(24,19,1.8,1,P);
    // 발 & 앞발
    d.ell(10,28,3,1.5,F2); d.ell(22,28,3,1.5,F2); d.ell(11,24,2,1.5,F3); d.ell(21,24,2,1.5,F3);
    d.outline(O);
    // 태그
    d.line(26,24,29,27,'#9A9080'); d.rect(27,26,5,5,'#E8504A'); d.px(29,28,T);
    // 하트
    d.stamp(1,0,['h.h','hhh','.h.'],{h:'#FF7EA0'});
  },
  'tibfox:c0': d=>{ // 동네 눈밭 — 흐린 하늘, 자작나무, 머리 박은 눈 구멍과 눈 튀김, 쥐 발자국
    d.grad(0,0,64,18,['#C0C8D8','#CCD4E2','#D8DEEA','#E2E8F0']);
    // 먼 언덕 & 자작나무
    d.poly([[0,18],[16,14],[34,17],[50,12],[64,15],[64,20],[0,20]],'#E8EEF6');
    for(const [x,h] of [[40,16],[46,12],[58,18],[30,9]]){d.rect(x,18-h,2,h+2,'#F4F2EC'); for(let y=18-h+1;y<19;y+=3) d.px(x+(y%2),y,'#3A3430'); d.line(x+1,20-h,x+4,17-h,'#7A6A60'); d.line(x,22-h,x-3,20-h,'#7A6A60')}
    // 눈밭
    d.rect(0,19,64,21,'#F4F8FC'); d.hline(0,63,19,'#FFFFFF'); for(let x=0;x<64;x+=9) d.ell(x+4,24+(x%3),5,1,'#E2EAF4'); d.dither(0,36,64,4,'#E6EEF8','#F4F8FC');
    // 머리부터 꽂은 구멍 + 눈 튀김
    d.ell(42,30,5,2.5,'#C8D4E4'); d.ell(42,30,3,1.5,'#9AAAC4'); d.ell(42,29,2,0.8,'#7A8AA8');
    for(const [x,y] of [[36,26],[38,24],[47,25],[49,27],[42,23],[34,29],[51,30],[45,22]]) {d.px(x,y,'#FFFFFF'); d.px(x+1,y,'#DCE6F2')}
    // 쥐 발자국 (도망감 → 오른쪽)
    for(let i=0;i<6;i++){const x=48+i*3, y=33+(i%2); d.px(x,y,'#A8B4C8'); d.px(x+1,y-1,'#A8B4C8')}
    // 여우 발자국 (왼쪽에서 구멍까지)
    for(let i=0;i<5;i++){const x=22+i*3, y=33-(i%2); d.px(x,y,'#B8C4D8')}
    // 떨어지는 눈송이
    for(let i=0;i<25;i++){const x=d.ri(0,63), y=d.ri(0,37); if(!(x>=5&&x<=22&&y>=19)) d.px(x,y,'#FFFFFF')}
    // … 표시
    for(const x of [52,54,56]) d.px(x,20,'#7A8494');
  },
  'tibfox:c1': d=>{ // 곰 아저씨 굴 앞 — 언덕 비탈의 굴 입구, 파낸 흙더미, 빼꼼 우는토끼, 곰 발자국
    d.grad(0,0,64,16,['#9AC8E0','#AED4E6','#C2E0EC']);
    // 뒤 산림
    for(let x=-2;x<66;x+=6) {d.poly([[x-4,20],[x,6+(x*7)%6],[x+4,20]],'#3E6A48'); d.line(x,8+(x*7)%6,x,18,'#2E5638')}
    // 언덕 비탈 (오른쪽 큰 언덕)
    d.poly([[24,40],[30,24],[40,14],[54,10],[64,12],[64,40]],'#8A6A48'); d.poly([[30,24],[40,14],[54,10],[64,12],[64,15],[52,14],[40,19]],'#6AA050');
    // 굴 입구
    d.ell(48,27,8,6,'#5A4030'); d.ell(48,28,6,5,'#2A1A10'); d.rect(42,28,13,5,'#2A1A10'); d.hline(40,56,33,'#5A4030');
    for(const [x,y] of [[41,24],[55,23],[43,21]]) {d.rect(x,y,2,2,'#A8988A')}
    // 땅
    d.rect(0,24,64,16,'#7AA858'); d.poly([[24,40],[30,24],[40,14],[54,10],[64,12],[64,40]],null);
    d.poly([[0,24],[28,26],[24,40],[0,40]],'#7AA858'); d.dither(0,35,30,5,'#6A9848','#7AA858');
    d.rect(24,33,40,7,'#7AA858'); d.dither(24,35,40,5,'#6A9848','#7AA858'); d.poly([[36,33],[42,33],[40,26],[38,27]],'#8A6A48'); d.rect(40,33,16,1,'#5A4030');
    // 파낸 흙더미
    d.ell(34,32,5,2.5,'#9A7450'); d.ell(33,31,3,1,'#B48C64'); for(const [x,y] of [[30,30],[38,29],[36,34]]) d.px(x,y,'#6A5038');
    // 빼꼼 우는토끼 (굴 옆 작은 구멍에서)
    d.ell(58,35,3,1,'#2A1A10'); d.ell(58,33,2.5,2,'#B89A78'); d.circ(56,31,1,'#B89A78'); d.circ(60,31,1,'#B89A78'); d.px(57,33,'#2A1A10'); d.px(59,33,'#2A1A10'); d.px(58,34,'#E8A0A0');
    // 곰 발자국
    for(const [x,y] of [[28,37],[34,38],[44,37]]){d.ell(x,y,1.5,1,'#5A8A40'); d.hline(x-1,x+1,y-2,'#5A8A40')}
    // 버섯 & 꽃
    d.px(14,27,'#F2E060'); d.px(20,31,'#F08AA0'); d.px(6,30,'#FFFFFF');
  },
  'tibfox:c2': d=>{ // 해발 5천m 고원 노을 — 평평한 초원, 설산 봉우리 알펜글로, 타르초 깃발 줄
    d.grad(0,0,64,22,['#2A3A7A','#5A4A8A','#A05A8A','#E07A70','#F8A860','#FFD080']);
    // 설산 (분홍 알펜글로)
    d.poly([[14,22],[26,8],[32,13],[40,4],[50,14],[56,10],[64,18],[64,22]],'#7A6A9A');
    d.poly([[26,8],[29,11],[27,12],[24,11]],'#FFC8C8'); d.poly([[40,4],[44,8],[42,9],[39,8],[36,8]],'#FFD0D0'); d.poly([[56,10],[59,13],[54,12]],'#FFC8C8');
    d.line(40,4,46,22,'#5A4A7A'); d.line(26,8,30,22,'#5A4A7A');
    d.poly([[0,22],[6,18],[14,22]],'#6A5A8A');
    // 끝없는 고원
    d.rect(0,22,64,18,'#C8A060'); d.hline(0,63,22,'#E0B870'); for(let y=25;y<40;y+=4) d.hline(0,63,y,'#B89050'); d.dither(0,36,64,4,'#B08848','#C8A060');
    for(let i=0;i<14;i++){const x=d.ri(24,63), y=d.ri(24,38); d.px(x,y,'#A08040')}
    // 타르초 (오색 깃발 줄)
    const TC=['#3A7AE0','#FFFFFF','#E83A3A','#3EB050','#FFD030'];
    d.vline(30,12,30,'#5A3A20'); d.vline(62,16,30,'#5A3A20');
    for(let i=0;i<10;i++){const x=32+i*3, y=12+Math.round(i*0.4+Math.sin(i/3)*1.5); d.rect(x,y+1,2,3,TC[i%5])}
    d.line(30,12,62,16,'#3A2A20');
    // 돌무더기
    d.ell(30,31,3,1.5,'#8A8274'); d.ell(30,29,2,1,'#A8A098'); d.circ(30,27,1,'#C0B8AC');
    // 새 & 별 하나
    d.stamp(10,6,['b.b','.b.'],{b:'#2A1A3A'}); twinkle(d,54,3,'#FFF0C0','#FFFFFF');
  },
});

export default A;
