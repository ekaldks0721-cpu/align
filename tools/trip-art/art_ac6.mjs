// 마스터 탐험 기념품과 엽서
const spark=(d,x,y,c)=>{d.px(x,y,c); d.px(x-1,y,c); d.px(x+1,y,c); d.px(x,y-1,c); d.px(x,y+1,c)};
const steam=(d,x,y,c)=>{d.px(x,y,c); d.px(x+1,y-1,c); d.px(x,y-2,c); d.px(x+1,y-3,c)};
const cup=(d,x,y)=>{d.ell(x+2,y+3,4,1,'#C89048'); d.rect(x,y,5,3,'#FFFFFF'); d.rect(x,y,5,1,'#6A3A1A'); d.px(x+5,y+1,'#FFFFFF'); d.px(x+2,y+1,'#F0C8A0')};
const cafeRoom=(d,dark)=>{d.rect(0,0,64,40,dark?'#3A2A24':'#8A5A3A'); for(let x=0;x<64;x+=6) d.vline(x,0,26,dark?'#2E201C':'#7A4C30');
  d.rect(0,26,64,14,dark?'#4A3424':'#A07048'); d.hline(0,63,26,dark?'#6A4A34':'#C08A58'); for(let x=0;x<64;x+=8) d.vline(x,27,39,dark?'#3A2818':'#8A5E3A')};

export default {
'brewster:s0': d=>{ // 사이펀 커피 세트
  const O='#1E2A2A', G1='#C8E4F0', G2='#E8F4FA', C1='#5A2A10', C2='#7A4020', M='#9AA4B0', M2='#C8D0DC', W='#8A5A30';
  // 받침대와 손잡이
  d.rect(6,27,20,3,M); d.hline(6,25,27,M2); d.vline(23,8,27,M); d.vline(24,8,27,M2); d.rect(20,7,8,2,M);
  // 위쪽 유리관
  d.rect(14,3,5,10,G1); d.rect(15,3,2,10,G2); d.rect(13,2,7,1,M); d.rect(15,13,3,3,G1);
  // 아래쪽 둥근 플라스크 (커피가 보글보글)
  d.circ(16,21,6,G1); d.circ(16,22,5,C2); d.ell(16,24,4,2,C1); d.px(13,19,G2); d.px(14,18,G2);
  for(const [x,y] of [[15,20],[18,21],[16,18]]) d.px(x,y,'#C89060');
  // 알코올 램프
  d.ell(16,29,3,1,'#E8E0D0');
  d.outline(O);
  steam(d,8,8,'#FFFFFF'); steam(d,26,3,'#FFFFFF'); d.stamp(28,24,['.c.','ccc'],{c:'#C89048'});
},
'brewster:s1': d=>{ // 블루마운틴 원두
  const O='#2A1810', B1='#3A6AA8', B2='#5A8AC8', B3='#2A4E80', K1='#4A2A18', K2='#6A4028', K3='#8A5A38', W='#F4ECD8';
  d.poly([[7,6],[25,6],[27,29],[5,29]],B3); d.poly([[8,7],[24,7],[25,28],[7,28]],B2); d.line(9,9,8,26,'#7AA4D8');
  d.rect(9,4,14,4,B1); for(let x=10;x<22;x+=2) d.px(x,4,B3);
  // 산 그림 라벨
  d.rect(10,13,12,9,W); d.poly([[11,21],[15,15],[18,18],[20,16],[22,21]],'#4A7AB8'); d.poly([[14,16],[15,15],[16,16]],'#FFFFFF'); d.circ(19,15,1,'#F8D048');
  d.hline(11,20,24,'#C8D8F0');
  d.outline(O);
  // 쏟아진 원두
  for(const [x,y] of [[26,27],[28,29],[3,29],[24,30]]) {d.ell(x,y,1.6,1,K1); d.px(x,y,K3)}
  for(const [x,y] of [[12,2],[17,1],[20,3]]) {d.ell(x,y,1.4,1,K2); d.px(x,y,K3)}
},
'brewster:s2': d=>{ // 비둘기 우유
  const O='#2A3A3A', G1='#E8F4F4', G2='#FFFFFF', G3='#C8DCDC', T='#5AAA94', T2='#3E8A78';
  d.rect(10,10,12,19,G3); d.rect(11,11,10,17,G1); d.rect(12,12,3,14,G2);
  d.poly([[12,10],[20,10],[19,6],[13,6]],G1); d.rect(12,2,8,4,T); d.hline(12,19,2,'#78C0AC'); d.rect(12,5,8,1,T2);
  // 비둘기 라벨
  d.rect(12,16,8,7,T); d.ell(16,19,2,2,'#F4F4F4'); d.px(15,18,'#141418'); d.px(17,19,'#F4C830');
  d.outline(O);
  spark(d,5,6,'#FFFFFF'); spark(d,27,24,'#C8ECE4'); d.px(26,9,'#FFFFFF');
},
'brewster:c0': d=>{ // 카페 비둘기 둥지
  cafeRoom(d);
  // 선반 위 원두 병과 사이펀
  d.rect(26,6,38,2,'#C08A58'); for(const [x,c] of [[28,'#5A2A10'],[33,'#8A5A30'],[38,'#3A1A08'],[43,'#7A4020']]) {d.rect(x,1,4,5,'#E8F4FA'); d.rect(x,3,4,3,c); d.rect(x,0,4,1,'#9AA4B0')}
  d.rect(50,1,3,5,'#C8E4F0'); d.circ(51,7,0,'#C8E4F0');
  // 비둘기 그림 액자
  d.rect(54,10,9,8,'#C89048'); d.rect(55,11,7,6,'#78C0AC'); d.circ(58,14,1.6,'#5AAA94'); d.px(59,14,'#F4C830');
  // 카운터
  d.rect(26,18,38,8,'#6A3A20'); d.rect(26,18,38,2,'#9A6038'); for(let x=28;x<64;x+=6) d.vline(x,20,25,'#5A3018');
  cup(d,32,15); cup(d,44,15);
  steam(d,34,12,'#F4F4F4'); steam(d,46,12,'#F4F4F4');
  // 등
  d.vline(40,0,8,'#2A1A10'); d.ell(40,10,3,2,'#F8D890'); d.px(40,11,'#FFF4C8');
  // 의자
  d.rect(30,30,6,2,'#9A6038'); d.vline(31,32,38,'#6A3A20'); d.vline(34,32,38,'#6A3A20');
},
'brewster:c1': d=>{ // 비 오는 날 카페
  cafeRoom(d);
  // 커다란 창문과 빗줄기
  d.rect(26,3,34,18,'#7A8AA0'); for(let i=0;i<40;i++){const x=d.ri(27,58), y=d.ri(4,19); d.px(x,y,'#C8D4E0'); d.px(x-1,y+1,'#A8B4C4')}
  d.frame(25,2,36,20,'#4A2A18'); d.vline(43,3,20,'#4A2A18'); d.hline(26,59,11,'#4A2A18');
  d.rect(26,14,17,7,'#6A7A8A'); d.rect(44,15,16,6,'#5A6A7A'); // 바깥 건물
  // 창가 테이블과 커피
  d.rect(30,24,24,2,'#C08A58'); d.vline(41,26,36,'#6A3A20'); d.rect(37,36,9,1,'#6A3A20');
  cup(d,34,21); steam(d,36,18,'#F4F4F4');
  d.rect(46,22,4,2,'#F4E8C8'); d.hline(46,49,22,'#E8A060'); // 케이크 한 조각
  // 창틀 위 화분
  d.rect(28,0,3,2,'#C87848'); d.px(29,0,'#4A9A3E');
},
'brewster:c2': d=>{ // 문 닫은 밤 카페
  cafeRoom(d,1);
  // 창밖 밤하늘과 달
  d.rect(28,3,30,14,'#141A3A'); for(let i=0;i<12;i++) d.px(d.ri(29,57),d.ri(4,16),'#FFFFFF'); d.circ(52,7,2.4,'#FFF0B0');
  d.frame(27,2,32,16,'#2A1A10'); d.vline(43,3,16,'#2A1A10');
  // 'CLOSED' 대신 문고리에 걸린 작은 팻말
  d.rect(18,8,6,4,'#C89048'); d.line(19,8,21,5,'#8A5A30'); d.line(23,8,21,5,'#8A5A30'); d.hline(19,22,10,'#6A3A20');
  // 등불 하나만 켜진 카운터
  d.rect(26,20,38,6,'#5A3018'); d.rect(26,20,38,1,'#8A5030');
  d.vline(46,0,10,'#1A1008'); d.ell(46,12,3,2,'#F8C870'); d.px(46,13,'#FFF0C0');
  for(let y=14;y<20;y++) for(let x=46-(y-12);x<=46+(y-12);x++) if((x+y)%2) d.px(x,y,'#6A4A30');
  cup(d,43,17); steam(d,45,14,'#E8E0D0');
  // 정리해 둔 의자 (테이블 위로 뒤집어)
  d.rect(30,30,10,2,'#6A4028'); d.vline(31,24,30,'#5A3420'); d.vline(38,24,30,'#5A3420'); d.vline(34,32,38,'#4A2A18');
},
};
