// 한교동·쿠치팟치 탐험 기념품과 엽서
const spark=(d,x,y,c)=>{d.px(x,y,c); d.px(x-1,y,c); d.px(x+1,y,c); d.px(x,y-1,c); d.px(x,y+1,c)};
const star=(d,x,y,c)=>d.px(x,y,c);
const cloud=(d,x,y,w,c,s)=>{d.ell(x+w/2,y+2,w/2,2,c); d.circ(x+w*.35,y+1,2.2,c); d.circ(x+w*.62,y,2.8,c); if(s) d.hline(x+1,x+w-1,y+4,s)};
const bubble=(d,x,y,c)=>{d.px(x,y-1,c); d.px(x-1,y,c); d.px(x+1,y,c); d.px(x,y+1,c)};

export default {
// ---------- 한교동 ----------
'hangyodon:s0': d=>{ // 웃음 소라: 귀에 대면 웃음소리가 들려요
  const O='#3A2440', S1='#E0907E', S2='#F6B8A0', S3='#FFE0CC', S4='#B86460', I1='#F0789A', I2='#FFB0C4', I3='#FFE4EC';
  // 나선 위쪽(동글동글 층)
  d.ell(10,10,7,6,S2); d.ell(8,8,4,3,S3); d.circ(5,6,2.2,S2); d.px(4,5,S3);
  d.ring(10,10,5,S4); d.ring(9,9,2.6,S4);
  // 몸통과 입구
  d.ell(17,18,12,10,S2); d.ell(14,15,7,5,S3); d.ell(21,22,8,6,S1);
  d.line(6,18,14,9,S4); d.line(9,25,20,10,S4);
  d.ell(21,21,7,6,I1); d.ell(21,21,5,4,I2); d.ell(22,21,2.5,2,I3);
  // 작은 혹들
  for(const [x,y] of [[11,6],[16,8],[22,10],[26,13]]) {d.px(x,y-1,S2); d.px(x+1,y-1,S1)}
  d.px(12,12,'#FFFFFF'); d.px(13,11,'#FFFFFF');
  d.outline(O);
  // 웃음소리 (ㅋ 모양 물결과 하하 입)
  d.stamp(26,2,['ww.','..w','ww.','..w'],{w:'#2E9AD8'});
  d.stamp(1,24,['.ccc.','c...c','.c.c.','..c..'],{c:'#3AB0A8'});
  d.stamp(27,27,['y.y','.y.','y.y'],{y:'#FFD040'});
  spark(d,28,10,'#FFFFFF'); d.px(28,10,'#7AD0F8');
},
'hangyodon:s1': d=>{ // 개그 공연 가면: 웃는 얼굴 가면과 막대
  const O='#2A2030', M1='#FFD84A', M2='#FFEC90', M3='#E0A820', R='#E04A5A', R2='#FF8A9A', K='#2A2030', St='#8A5A34', St2='#B8804A';
  // 막대
  d.line(22,22,29,31,St); d.line(23,22,30,31,St2);
  // 가면 (둥근 얼굴, 아래가 살짝 넓어요)
  d.ell(15,14,12,11,M3); d.ell(14,13,11,10,M1); d.ell(11,9,6,4,M2);
  // 눈 구멍 (웃는 반달)
  d.stamp(7,10,['.kkk.','k...k'],{k:K}); d.stamp(17,10,['.kkk.','k...k'],{k:K});
  // 커다란 웃는 입
  d.poly([[7,16],[23,16],[19,22],[11,22]],K); d.poly([[9,17],[21,17],[18,21],[12,21]],R); d.hline(11,19,17,'#FFFFFF'); d.ell(15,20,3,1,R2);
  // 볼 터치
  d.ell(6,15,1.5,1,'#FF9AB0'); d.ell(24,15,1.5,1,'#FF9AB0');
  // 리본 장식
  d.stamp(11,0,['rr.rr','rRrRr','.rrr.'],{r:R,R:R2});
  d.outline(O);
  // 빵 터진 웃음 효과
  spark(d,2,3,'#FF8A3A'); spark(d,29,4,'#3AB0E8'); d.stamp(0,24,['b..','.b.','b.b'],{b:'#FF6A8A'});
},
'hangyodon:s2': d=>{ // 히어로 망토: 접힌 망토와 별 배지
  const O='#1E2440', C1='#B82838', C2='#E04A5A', C3='#FF8A8A', L1='#2A3A8A', L2='#4A64C8', G1='#D8A020', G2='#FFE070', G3='#FFF6C0';
  // 망토 (어깨에서 아래로 넓게 퍼져요)
  d.poly([[9,6],[23,6],[30,29],[2,29]],C1); d.poly([[10,7],[22,7],[27,27],[5,27]],C2);
  for(const x of [9,16,23]) d.line(16,8,x,28,C1);
  d.line(11,8,6,26,C3); d.line(12,8,9,20,C3);
  // 아래 물결 끝
  for(let x=2;x<=30;x+=4) d.ell(x+1,29,2,1,C1);
  // 안감 (파랑)이 살짝
  d.poly([[24,24],[30,29],[26,29]],L2); d.poly([[2,29],[6,24],[7,29]],L1);
  // 깃 (목 부분)
  d.ell(16,6,8,2,L1); d.ell(16,5,7,1.5,L2);
  // 별 배지
  d.stamp(12,1,['...g...','..gYg..','ggYYYgg','.gYWYg.','.gY.Yg.','g.....g'],{g:G1,Y:G2,W:G3});
  d.outline(O);
  spark(d,4,4,'#FFE070'); spark(d,28,3,'#FFFFFF'); d.px(28,3,'#FFE070');
},
'hangyodon:c0': d=>{ // 파도 타기: 큰 파도와 해변
  d.grad(0,0,64,15,['#4AB0F0','#66BEF2','#84CCF4','#A4DAF6']);
  d.circ(52,5,4,'#FFF2A0'); d.circ(52,5,2.6,'#FFFFFF');
  cloud(d,6,3,12,'#FFFFFF','#E0F0FA'); cloud(d,30,1,8,'#FFFFFF');
  // 바다
  d.grad(0,15,64,10,['#2A8AD0','#3A9ADA','#4AAAE0']);
  // 큰 파도 (오른쪽에서 말려 들어와요)
  d.poly([[30,25],[38,14],[48,9],[58,9],[64,12],[64,25]],'#2A7AC8');
  d.poly([[34,25],[41,15],[49,11],[57,11],[64,14],[64,25]],'#3A9ADA');
  d.ell(55,12,6,2,'#8AD4F4'); d.poly([[48,9],[58,8],[62,10],[56,13],[50,12]],'#FFFFFF');
  for(const [x,y] of [[46,11],[44,13],[42,15],[40,17]]) {d.px(x,y,'#FFFFFF'); d.px(x+1,y,'#C8ECFA')}
  for(let x=0;x<64;x+=4) d.px(x+(x%8?1:0),18+(x%3),'#8AD0F4');
  // 파도 위 서핑 보드 (주인을 기다려요)
  d.poly([[44,20],[58,17],[60,18],[46,22]],'#FFB040'); d.line(45,21,59,18,'#E07A20'); d.px(52,19,'#FFFFFF');
  // 물보라 거품 띠
  for(let x=0;x<64;x++) if((x*7)%5<2) d.px(x,24,'#FFFFFF'); d.hline(0,63,25,'#C8ECFA');
  // 모래사장
  d.grad(0,26,64,14,['#F4DCA0','#F0D090','#E8C480']);
  for(let i=0;i<30;i++) d.px(d.ri(0,63),d.ri(28,39),'#D8B070');
  // 조개와 불가사리, 지느러미 발자국
  d.stamp(40,31,['.o.o.','ooooo','.ooo.','.o.o.'],{o:'#FF8A6A'});
  d.stamp(54,34,['.p.','ppp','PpP'],{p:'#FFB0C8',P:'#E07898'});
  for(const [x,y] of [[26,36],[30,34],[34,36]]) d.stamp(x,y,['b.b','.b.'],{b:'#C89A58'});
  // 뻐끔뻐끔 물방울
  bubble(d,36,6,'#FFFFFF'); bubble(d,40,3,'#D8F0FF');
},
'hangyodon:c1': d=>{ // 바닷속 개그 대회: 조개 무대와 관객 물고기
  d.grad(0,0,64,40,['#1A5A98','#1E68A6','#2678B4','#2E88C0','#3898CA']);
  // 위에서 내려오는 빛줄기
  for(const x of [12,30,48]) for(let y=0;y<26;y++) if((y+x)%2) d.px(x+Math.floor(y/4),y,'#4AA6D8');
  // 바닥 모래
  d.ell(32,40,40,8,'#D8C08A'); d.rect(0,34,64,6,'#D8C08A'); d.hline(0,63,33,'#E8D4A0');
  // 조개 무대 (가운데 오른쪽)
  d.ell(44,22,15,12,'#F2A0B8'); d.ell(44,22,13,10,'#FFC4D4');
  for(let a=-1.3;a<=1.31;a+=.43) d.line(44,32,44+Math.sin(a)*13,32-Math.cos(a)*10,'#E888A4');
  d.ell(44,33,16,3,'#E8B070'); d.ell(44,32,15,2,'#F8D090');
  // 스포트라이트와 마이크
  d.poly([[44,0],[38,31],[50,31]],null); for(let y=4;y<31;y++){const w=Math.floor(y/5); for(let x=44-w;x<=44+w;x++) if((x+y)%2===0) d.px(x,y,'#FFF6C0')}
  d.vline(44,24,31,'#3A3A44'); d.ell(44,23,1.5,1.5,'#B8C0C8'); d.px(43,22,'#FFFFFF');
  // 관객 물고기들이 웃어요
  const fish=(x,y,c,c2)=>{d.ell(x,y,3,2,c); d.poly([[x+3,y],[x+6,y-2],[x+6,y+2]],c2); d.px(x-1,y-1,'#1A1A2A'); d.hline(x-2,x,y+1,'#1A1A2A')};
  fish(26,10,'#FFB040','#E08020'); fish(58,6,'#FF7A9A','#D85878'); fish(24,22,'#7AE07A','#4AB04A');
  // ㅋㅋ 웃음 거품
  for(const [x,y] of [[22,6],[33,4],[54,2],[20,17]]) bubble(d,x,y,'#C8ECFF');
  // 해초와 산호
  for(const x of [2,4,62]) for(let y=24;y<34;y++) d.px(x+((y%4)<2?0:1),y,'#2E9A5A');
  d.stamp(56,27,['r.r.r','rrrrr','.rrr.','..r..'],{r:'#FF6A6A'});
  for(let i=0;i<14;i++) d.px(d.ri(0,63),d.ri(35,39),'#C4A870');
},
'hangyodon:c2': d=>{ // 달빛 바다 산책: 밤바다와 커다란 달
  d.grad(0,0,64,22,['#0E1A3E','#142450','#1A2E5E','#22386C']);
  for(let i=0;i<26;i++) star(d,d.ri(0,63),d.ri(0,18),d.rnd()<.5?'#FFFFFF':'#C8D8FF');
  // 커다란 둥근 달
  d.circ(46,9,7,'#FFF0B0'); d.circ(46,9,6,'#FFF8D8'); d.circ(43,7,1.4,'#F0E0A0'); d.circ(48,12,1,'#F0E0A0'); d.circ(49,6,.8,'#F0E0A0');
  // 먼 섬 실루엣
  d.ell(10,22,10,3,'#1A2448'); d.ell(60,22,7,2,'#1A2448');
  // 밤바다
  d.grad(0,22,64,18,['#1A3A70','#1E4478','#224E82','#26588A','#2A6090']);
  // 달빛 길 (물 위에 반짝이는 줄)
  for(let y=23;y<40;y++){const w=1+Math.floor((y-22)/4); for(let x=46-w;x<=46+w;x++) if((x*3+y)%4<2) d.px(x,y,y<30?'#FFF0B0':'#E8D890')}
  for(let x=0;x<64;x+=5) d.hline(x,x+2,25+(x%4)*3,'#3A6AA0');
  // 바닷가 바위 (외로운 쉼터)
  d.ell(58,36,7,4,'#2A3450'); d.ell(57,34,5,2,'#3A4668'); d.px(55,33,'#5A6A90');
  // 반딧불 같은 바다 반딧불 (야광 플랑크톤)
  for(const [x,y] of [[30,30],[34,34],[26,36],[38,28],[50,37]]) d.px(x,y,'#7AF0E0');
  // 헤엄친 자리의 물결 고리와 물방울
  for(let a=0;a<6.28;a+=.6) d.px(30+Math.cos(a)*6,31+Math.sin(a)*2,'#8AB4E0');
  bubble(d,32,24,'#B8E0FF');
  d.stamp(18,6,['.y.','yyy','.y.'],{y:'#FFE070'});
},
// ---------- 쿠치팟치 ----------
'kuchipatchi:s0': d=>{ // 특대 주먹밥: 반쯤 먹은 큰 삼각김밥
  const O='#2A2A30', R1='#E8E4DA', R2='#FFFFFF', R3='#C8C2B4', N1='#1E3A2A', N2='#2E5A3E', N3='#4A7A5A', U='#E05A6A';
  // 둥근 삼각형 주먹밥
  d.poly([[16,1],[30,27],[2,27]],R1); d.ell(16,24,14,5,R1); d.circ(16,4,3,R1);
  d.poly([[16,3],[24,18],[12,12]],R2);
  // 한 입 베어 먹은 자리 (오른쪽 위)
  d.circ(24,9,4.5,null); for(let y=4;y<15;y++) for(let x=19;x<30;x++) if((x-24)**2+(y-9)**2<=21) d.clear(x,y);
  for(const [x,y] of [[20,8],[21,12],[23,13],[26,13]]) d.px(x,y,R3);
  // 밥알 무늬
  for(const [x,y] of [[8,20],[12,16],[20,22],[24,24],[14,24],[18,14],[9,25],[26,20]]) {d.px(x,y,R3); d.px(x+1,y,R2)}
  // 김 (아래쪽 띠)
  d.rect(9,18,14,11,N1); d.rect(10,18,12,10,N2); for(let x=11;x<21;x+=3) d.vline(x,19,26,N3);
  // 속에 보이는 매실
  d.circ(23,10,1.3,U); d.px(22,9,'#FF9AA8');
  d.outline(O);
  // 밥알 부스러기
  d.stamp(27,28,['w.','.w'],{w:'#FFFFFF'}); d.px(4,29,'#FFFFFF');
  spark(d,4,4,'#FFE070');
},
'kuchipatchi:s1': d=>{ // 케이크 가게 쿠폰: 케이크 그림 쿠폰
  const O='#4A2A30', P1='#F890A8', P2='#FFC4D2', P3='#FFE8EE', Y='#FFE070', W='#FFFFFF', Cr='#FFF6E8', Cb='#C8905A', S='#E83A4A';
  // 쿠폰 종이 (점선 가장자리)
  d.rect(1,7,30,19,P2); d.rect(2,8,28,17,P3);
  for(let x=1;x<31;x+=2) {d.px(x,7,P1); d.px(x,25,P1)}
  for(const y of [11,16,21]) {d.clear(1,y); d.clear(30,y)}
  d.vline(21,9,23,P1); for(let y=9;y<24;y+=2) d.px(21,y,P3);
  // 조각 케이크
  d.poly([[4,22],[17,22],[17,14],[4,18]],Cr); d.rect(4,19,13,1,P1); d.poly([[4,18],[17,14],[17,13],[5,17]],W);
  d.hline(4,17,22,Cb); d.vline(17,14,22,'#F0DCC8');
  d.circ(12,13,1.6,S); d.px(11,12,'#FF9AA0'); d.px(13,11,'#3A9A4A');
  // 무료 1 표시
  d.stamp(23,11,['.r.r.','rrrrr','.rrr.','..r..'],{r:'#F05A7A'});
  d.stamp(24,18,['.y.','yy.','.y.','.y.','yyy'],{y:'#E86A8A'});
  d.outline(O);
  spark(d,28,3,Y); spark(d,3,29,'#FF8AB0');
},
'kuchipatchi:s2': d=>{ // 반짝이는 알: 무늬 있는 알
  const O='#2A3040', E1='#C8D8F0', E2='#E8F0FF', E3='#FFFFFF', E4='#9AB0D8', B='#5AB0F0', Bd='#3A8AD0', Y='#FFD848', Yd='#E0A830';
  d.ell(16,17,10,13,E4); d.ell(15,16,9,12,E1); d.ell(13,12,5,6,E2); d.ell(12,9,2,2.5,E3);
  // 지그재그 띠와 점 무늬
  for(let x=7;x<26;x++){const y=19+((x%4)<2?0:1); d.px(x,y,B); d.px(x,y+1,Bd)}
  for(const [x,y,c] of [[11,24,Y],[19,25,Y],[15,27,Bd],[22,13,Y],[9,15,B]]) {d.px(x,y,c); d.px(x+1,y,c); d.px(x,y+1,c===Y?Yd:c); d.px(x+1,y+1,c===Y?Yd:c)}
  // 작은 금
  d.line(17,5,19,8,'#7A8AA8'); d.line(19,8,18,10,'#7A8AA8');
  d.outline(O);
  // 반짝반짝
  spark(d,4,5,Y); spark(d,28,8,'#FFFFFF'); d.px(28,8,Y); spark(d,27,26,Y); d.px(3,22,'#FFFFFF');
},
'kuchipatchi:c0': d=>{ // 도시락 소풍: 잔디밭 돗자리 위 도시락 세 개
  d.grad(0,0,64,16,['#7AC8F4','#8ED2F6','#A6DCF8','#C0E8FA']);
  cloud(d,34,2,12,'#FFFFFF','#E4F2FA'); cloud(d,4,5,8,'#FFFFFF');
  d.circ(58,4,3,'#FFE880'); d.circ(58,4,2,'#FFF8C8');
  // 언덕과 큰 나무
  d.ell(48,17,24,5,'#6AB850'); d.ell(10,18,14,4,'#7AC45A');
  d.rect(54,6,3,12,'#8A5A34'); d.circ(55,6,6,'#4A9A3E'); d.circ(52,4,4,'#5AAA48'); d.circ(58,3,3,'#5AAA48'); d.px(51,2,'#8AD068');
  d.rect(0,17,64,23,'#8ED46A'); d.hline(0,63,17,'#A8E084');
  // 체크무늬 돗자리
  d.poly([[26,26],[60,24],[63,37],[30,39]],'#FFFFFF');
  for(let y=24;y<40;y++) for(let x=26;x<64;x++) if(d.get(x,y)==='#FFFFFF'&&((Math.floor(x/3)+Math.floor(y/3))%2)) d.px(x,y,'#F07080');
  // 도시락 셋 (두 개는 빈 통)
  const box=(x,y,full)=>{d.rect(x,y,9,6,'#3A3A48'); d.rect(x+1,y+1,7,4,full?'#FFFFFF':'#E8E0D0'); if(full){d.px(x+2,y+2,'#E8483A'); d.px(x+3,y+3,'#FFD848'); d.px(x+5,y+2,'#58B048'); d.px(x+6,y+3,'#C8784A'); d.px(x+4,y+2,'#F8A0B0')} else {d.px(x+3,y+3,'#FFFFFF'); d.px(x+6,y+2,'#FFFFFF')}};
  box(33,27,0); box(44,26,0); box(48,32,1);
  // 젓가락과 물병
  d.line(36,35,42,33,'#C89050'); d.line(36,36,42,34,'#C89050');
  d.rect(58,27,3,6,'#7AC8F0'); d.rect(58,26,3,1,'#E04A4A'); d.px(59,28,'#FFFFFF');
  // 꽃과 잔디
  for(let i=0;i<20;i++) d.px(d.ri(0,25),d.ri(20,39),d.rnd()<.5?'#7CC85A':'#A4E07E');
  for(const [x,y,c] of [[4,24,'#FFFFFF'],[22,36,'#FFE070'],[2,35,'#FF9AC0']]) d.stamp(x-1,y-1,['.w.','wyw','.w.'],{w:c,y:'#F8B048'});
  // 배불러서 나온 하트
  d.stamp(40,19,['.r.r.','rrrrr','.rrr.','..r..'],{r:'#FF6A8A'});
},
'kuchipatchi:c1': d=>{ // 라멘 골목 투어: 저녁 골목의 라멘 가게들
  d.grad(0,0,64,14,['#F08A5A','#F4A070','#F8B888','#FAD0A0']);
  d.rect(0,14,64,10,'#C89078'); for(let x=2;x<64;x+=7) d.rect(x,16,3,3,'#FFE0A0');
  // 뒤쪽 건물 실루엣
  for(const [x,w,h] of [[0,10,8],[22,8,10],[44,12,7],[56,8,11]]) d.rect(x,14-h+8,w,h,'#B07060');
  // 골목 바닥
  d.grad(0,24,64,16,['#8A7A70','#7A6A62','#6A5C56']);
  for(let x=0;x<64;x+=6) d.hline(x,x+3,30+(x%4),'#9A8A80');
  // 라멘 가게 (가운데·오른쪽)
  const shop=(x,w,roof,cur,lit)=>{d.rect(x,9,w,15,'#E8D4B0'); d.rect(x-1,7,w+2,3,roof); d.hline(x-1,x+w,7,'#3A2A2A');
    d.rect(x+1,13,w-2,11,'#4A3A3A'); d.rect(x+2,14,w-4,4,lit); for(let i=x+1;i<x+w-1;i+=2) d.rect(i,12,1,4,cur);
    d.rect(x+2,21,w-4,3,'#8A5A34')};
  shop(24,13,'#C83838','#2A3A8A','#FFE8A0'); shop(42,14,'#3A6A9A','#E83A3A','#FFF0C0');
  // 등불
  for(const [x,y] of [[23,11],[56,11],[38,8]]) {d.ell(x,y,1.5,2,'#FF5A3A'); d.px(x,y,'#FFD860'); d.px(x,y-3,'#3A2A2A')}
  // 라멘 그릇 간판 (김 모락모락)
  d.ell(35,4,4,1.5,'#E83A3A'); d.ell(35,3,3,1,'#FFE070'); d.rect(31,3,8,1,'#E83A3A');
  for(const x of [33,35,37]) {d.px(x,1,'#FFFFFF'); d.px(x+1,0,'#FFFFFF')}
  // 다섯 군데 도장 (점 다섯 개)
  for(let i=0;i<5;i++) d.circ(4+i*4,4,1.2,'#E83A3A');
  // 가게 앞 빈 그릇 탑
  for(let i=0;i<3;i++) {d.ell(60,36-i*2,3,1,'#FFFFFF'); d.hline(57,63,36-i*2+1,'#C8C0B8')}
  d.px(59,32,'#E83A3A');
  // 저녁 하늘 별 하나
  d.px(12,2,'#FFFFFF');
},
'kuchipatchi:c2': d=>{ // 다마고치 별 여행: 알 모양 별과 하트 별들
  d.grad(0,0,64,40,['#1E1A4A','#2A2260','#382C74','#463684','#56408E']);
  for(let i=0;i<34;i++) star(d,d.ri(0,63),d.ri(0,27),d.rnd()<.6?'#FFFFFF':'#FFE8A0');
  // 다마고치 별 (알 모양 행성, 가운데 위)
  d.ell(38,14,10,12,'#F4C04A'); d.ell(37,13,9,11,'#FFD868'); d.ell(34,9,4,5,'#FFEAA0');
  for(let x=29;x<48;x++){const y=16+((x%4)<2?0:1); if(d.get(x,y)) d.px(x,y,'#F08A5A')}
  for(const [x,y] of [[33,20],[42,21],[44,9],[38,23]]) {d.px(x,y,'#E89A30'); d.px(x+1,y,'#E89A30')}
  // 행성 고리
  for(let x=24;x<54;x++){const y=Math.round(16+(x-38)*.15+Math.sqrt(Math.max(0,1-((x-38)/15)**2))*2); if(d.get(x,y)!=='#FFD868'&&d.get(x,y)!=='#F08A5A') d.px(x,y,'#B8A0F0')}
  // 반짝이는 큰 별과 하트 별
  spark(d,54,5,'#FFFFFF'); d.px(54,5,'#FFE070'); spark(d,12,6,'#FFE070');
  d.stamp(56,18,['.p.p.','ppppp','.ppp.','..p..'],{p:'#FF8AC0'});
  // 착륙한 작은 언덕 (외계 땅)
  d.ell(32,42,40,10,'#6A5AA8'); d.ell(32,41,38,8,'#8070C0'); d.rect(0,34,64,6,'#8070C0'); d.hline(0,63,33,'#9A8AD8');
  for(const [x,y] of [[30,36],[44,35],[56,37],[26,38]]) d.ell(x,y,1.5,.6,'#6A5AA8');
  // 꽂아 둔 깃발과 꼬마 로켓
  d.vline(50,24,34,'#E8E8F0'); d.stamp(51,24,['ggg','gyg','gg.'],{g:'#A8CC00',y:'#FFE070'});
  d.poly([[40,34],[43,26],[46,34]],'#F0F0F8'); d.rect(41,31,5,3,'#F0F0F8'); d.circ(43,30,1,'#5AB0F0'); d.px(43,26,'#E83A3A'); d.stamp(40,34,['r.....r'],{r:'#E83A3A'});
  // 별똥별
  d.line(2,14,10,10,'#C8C0FF'); d.px(10,10,'#FFFFFF');
},
};
