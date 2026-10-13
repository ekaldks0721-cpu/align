// 공용 기념품·엽서 (any) — 어느 펫이든 가져올 수 있는 것들
const O='#2A2233';
const S={}; // souvenirs
const C={}; // postcards

// ───────── 동네 기념품 ─────────
S['any:s0-0']=d=>{ // 바스락 낙엽
  const A='#F28A2E', B='#D9622A', H='#FFC25A', V='#A84420', BR='#7A4420';
  const pts=[[16,2],[19,8],[23,5],[22,12],[29,9],[27,15],[30,18],[23,20],[25,25],[17,22],[16,24],[15,22],[7,25],[9,20],[2,18],[5,15],[3,9],[10,12],[9,5],[13,8]];
  d.poly(pts,A);
  d.poly([[16,12],[22,12],[29,9],[27,15],[30,18],[23,20],[25,25],[17,22]],B);
  d.poly([[16,4],[18,9],[16,14],[11,12],[10,7],[13,9]],H);
  d.line(16,23,16,4,V); d.line(16,17,26,11,V); d.line(16,17,6,11,V); d.line(16,20,25,18,V); d.line(16,20,6,18,V);
  d.line(16,23,13,30,BR); d.line(17,23,14,30,BR);
  // 바스락 갈색 끄트머리
  d.stamp(2,17,['bb','.b'],{b:BR}); d.stamp(27,8,['bb','b.'],{b:BR}); d.px(16,2,BR); d.px(24,25,BR);
  d.px(20,15,BR); d.px(11,19,BR); d.px(21,19,BR);
  d.outline(O);
  // 바스락 소리 표시
  d.stamp(26,25,['y..','.y.','..y'],{y:'#F8D048'}); d.stamp(27,1,['y.y','.y.'],{y:'#F8D048'}); d.stamp(1,25,['..y','.y.','y..'],{y:'#F8D048'});
};

S['any:s0-1']=d=>{ // 버스 표
  const T='#A7E6CF', T2='#7CCDB0', ST='#2F9E7E', W='#FFFFFF', Y='#FFD24A', K='#3A3A4A';
  d.poly([[2,9],[29,6],[30,23],[3,26]],T);
  d.poly([[2,9],[29,6],[29,10],[2,13]],ST);
  d.poly([[3,23],[30,20],[30,23],[3,26]],T2);
  // 절취선
  for(let y=8;y<25;y+=2) d.px(22,y,W);
  // 버스 아이콘
  d.stamp(5,14,['.yyyyyy.','ywwywwyy','ywwywwyy','yyyyyyyy','.k....k.'],{y:Y,w:'#CFF4FF',k:K});
  d.stamp(15,14,['kk.','..k','.k.','k..','kkk'],{k:K}); // 2
  // 구멍
  d.ell(26,15,1.5,1.5,null); for(const [x,y] of [[25,14],[26,14],[27,14],[25,15],[26,15],[27,15],[25,16],[26,16],[27,16]]) d.clear(x,y);
  // 양옆 반달 홈
  for(const [x,y] of [[2,17],[2,18],[3,17],[3,18],[2,16],[2,19],[30,14],[30,15],[29,14],[29,15],[30,13],[30,16]]) d.clear(x,y);
  d.hline(4,8,11,W); d.hline(10,12,11,W);
  d.outline(O);
};

S['any:s0-2']=d=>{ // 편의점 사탕
  const R='#F2556A', R2='#C93A55', W='#FFFFFF', P='#FFB8D0', P2='#F28FB4', P3='#FFE0EC';
  d.poly([[10,16],[2,8],[5,16],[2,24]],P); d.poly([[22,16],[30,8],[27,16],[30,24]],P);
  d.line(10,16,3,10,P2); d.line(10,16,3,22,P2); d.line(22,16,29,10,P2); d.line(22,16,29,22,P2);
  d.px(3,9,P3); d.px(4,11,P3); d.px(28,9,P3); d.px(28,11,P3);
  d.rect(9,14,2,5,P2); d.rect(21,14,2,5,P2);
  d.circ(16,16,7,R);
  for(let a=0;a<6;a++){const t=a*Math.PI/3; for(let r=1;r<=7;r++){const u=t+r*.32; d.px(16+Math.cos(u)*r,16+Math.sin(u)*r,W)}}
  for(let y=18;y<=23;y++)for(let x=12;x<=22;x++){ if(d.get(x,y)===R && (x-16)**2+(y-16)**2>22) d.px(x,y,R2)}
  d.px(13,12,W); d.px(12,13,W); d.px(14,12,W);
  d.outline(O);
  d.stamp(23,2,['.y.','yWy','.y.'],{y:'#FFE070',W});
};

S['any:s0-3']=d=>{ // 제일 동그란 돌
  const G1='#B9B4C4', G2='#9690A6', G3='#77708A', H='#E4E0EC';
  d.circ(15,15,12,G2); d.circ(14,14,10,G1); d.circ(12,11,5,'#CBC7D6'); d.circ(10,9,2,H); d.px(13,8,H);
  for(let y=3;y<28;y++)for(let x=3;x<28;x++){ if(d.get(x,y) && (x-15)**2+(y-15)**2>110 && x+y>32) d.px(x,y,G3)}
  for(const [x,y] of [[18,12],[20,18],[11,19],[16,22],[22,14],[9,15]]) d.px(x,y,G2);
  // 1등 리본
  d.stamp(21,20,['..bbb..','.bbbbb.','bbywbbb','bbbbbbb','.bbbbb.','..bbb..','.rr.rr.','.rr.rr.','.r...r.'],{b:'#4A8BE8',y:'#FFE070',w:'#FFFFFF',r:'#E05A6A'});
  d.stamp(23,22,['.y.','yy.','.y.'],{y:'#FFE070'});
  d.outline(O);
  d.stamp(1,1,['.w.','www','.w.'],{w:'#FFF6B0'});
};

S['any:s0-4']=d=>{ // 놓친 풍선
  const R='#F04E5E', R2='#C23448', R3='#FF8A94', W='#FFFFFF', S1='#6A5A6A';
  d.ell(16,11,9,10,R);
  d.ell(18,13,7,8,R); for(let y=2;y<23;y++)for(let x=6;x<27;x++) if(d.get(x,y)===R && ((x-16)/9)**2+((y-11)/10)**2>.6 && x+y>27) d.px(x,y,R2);
  d.ell(12,7,2,3,R3); d.px(11,5,W); d.px(11,6,W); d.px(12,5,W); d.px(14,4,W);
  d.poly([[14,23],[18,23],[16,21]],R2); d.rect(15,22,3,2,R2);
  d.outline(O);
  // 끈 (구불구불)
  for(let y=25;y<32;y++) d.px(16+[0,1,1,0,-1,-1,0][y-25],y,S1);
  d.stamp(24,24,['.b.','b.b'],{b:'#9AC8F0'}); d.stamp(3,22,['b.b','.b.'],{b:'#9AC8F0'});
};

S['any:s0-5']=d=>{ // 민들레 홀씨
  const ST='#5AAE48', ST2='#3E8A36', W='#FFFFFF', P='#EEF2F8', L='#C8D2E0', C1='#B89A5A';
  d.line(15,30,15,18,ST); d.line(16,30,16,18,ST2);
  d.poly([[15,29],[7,22],[10,22],[15,26]],ST); d.poly([[16,28],[24,21],[22,25],[17,29]],ST2);
  d.circ(15.5,11,10,P);
  for(let y=0;y<32;y++)for(let x=0;x<32;x++) if(d.get(x,y)===P && (x-15.5)+(y-11)>6) d.px(x,y,'#DCE3EE');
  for(let i=0;i<16;i++){const t=i*Math.PI*2/16; d.line(15.5+Math.cos(t)*2.5,11+Math.sin(t)*2.5,15.5+Math.cos(t)*8,11+Math.sin(t)*8,L);}
  for(let i=0;i<16;i++){const t=i*Math.PI*2/16+.2; d.px(15.5+Math.cos(t)*9.6,11+Math.sin(t)*9.6,W)}
  d.circ(15.5,11,1.6,C1);
  d.px(11,5,W); d.px(10,6,W); d.px(12,5,W);
  d.outline('#6A7488');
  // 날아가는 씨앗
  d.stamp(26,1,['w.w','.w.','.l.','.l.'],{w:W,l:L}); d.stamp(28,8,['w.w','.w.','.l.'],{w:W,l:L});
  d.outline('#6A7488');
};

S['any:s0-6']=d=>{ // 짝 잃은 양말
  const B='#7FB8F0', B2='#5A92D6', Y='#FFD45A', R='#F06A7A', R2='#C84A5E', W='#FFFFFF';
  d.poly([[8,3],[20,3],[20,18],[26,19],[29,22],[29,26],[26,29],[14,29],[9,26],[8,21]],B);
  for(const y of [10,11,15,16]) d.hline(8,20,y,Y);
  d.rect(8,3,13,5,W); for(let x=9;x<20;x+=2) d.vline(x,3,7,'#D8E2F0');
  d.ell(12,25,4,4,R); for(let y=21;y<30;y++)for(let x=7;x<16;x++) if(d.get(x,y)===R && y<23) d.px(x,y,B);
  d.ell(26,24,4,4,R);
  for(let y=19;y<30;y++)for(let x=8;x<30;x++){const c=d.get(x,y); if(c&&y>=27) d.px(x,y,c===R?R2:B2)}
  d.vline(19,8,18,B2); d.vline(20,8,18,B2);
  d.outline(O);
  d.stamp(24,4,['.qq.','q..q','...q','..q.','....','..q.'],{q:'#9A8AB0'}); // ?
};

S['any:s0-7']=d=>{ // 빵집 시식빵 (한 입 먹은)
  const CR='#C9803E', CR2='#A0602A', CR3='#E2A05A', IN='#FFEBC0', IN2='#F2D49A';
  d.ell(16,12,12,8,CR); d.rect(5,12,22,17,CR);
  d.ell(16,12,10,6,IN); d.rect(7,12,18,15,IN);
  d.hline(8,23,7,CR3); d.hline(6,9,9,CR3);
  d.rect(5,27,22,2,CR2);
  for(const [x,y] of [[10,14],[14,17],[19,13],[12,21],[18,22],[21,18],[15,24],[9,25]]){d.px(x,y,IN2); d.px(x+1,y,IN2)}
  // 한 입
  for(const [cx,cy,r] of [[28,9,4],[28,15,4],[27,20,3.2]]) for(let y=0;y<32;y++)for(let x=0;x<32;x++) if((x-cx)**2+(y-cy)**2<=r*r) d.clear(x,y);
  d.outline(O);
  d.px(29,20,CR3); d.px(27,22,IN2); d.px(30,23,CR3);
};

// ───────── 먼 곳 기념품 ─────────
S['any:s1-0']=d=>{ // 소라 껍데기
  const A='#F7E2C0', A2='#E6BE8A', A3='#C99868', P='#F7A9AE', P2='#E07A8C', W='#FFF8EC';
  d.ell(15,18,10,9,A);
  d.poly([[17,12],[28,3],[25,15]],A);
  d.poly([[20,10],[28,3],[26,9]],A2);
  for(let i=0;i<4;i++) d.line(9+i*3,10+i,23-i,26-i*2,A2);
  d.line(27,4,19,13,A3); d.line(25,9,20,15,A3);
  for(const [x,y] of [[12,9],[17,9],[22,12],[24,17]]) d.poly([[x-1,y+1],[x,y-2],[x+1,y+1]],A);
  d.ell(10,20,5,6,P); d.ell(10,21,3,4,P2); d.ell(9,22,1,2,'#B85A70');
  d.px(13,13,W); d.px(14,12,W); d.px(15,12,W); d.px(20,16,W);
  for(let y=20;y<28;y++)for(let x=14;x<26;x++) if(d.get(x,y)===A && x+y>40) d.px(x,y,A2);
  d.outline(O);
  d.stamp(0,8,['.bb.','b..b','....','.bb.','b..b'],{b:'#5AB4E8'});
};

S['any:s1-1']=d=>{ // 낡은 열쇠
  const G='#D8A84A', G2='#B07E30', G3='#F4D27A', RU='#8A6A4A', T='#F4E6C8', T2='#D8C49C';
  d.circ(9,11,6,G); d.circ(9,11,3,null);
  for(const [cx,cy] of [[9,7],[5,11],[13,11],[9,15]]) d.circ(cx,cy,1.6,G);
  for(let y=0;y<32;y++)for(let x=0;x<32;x++) if((x-9)**2+(y-11)**2<=4) d.clear(x,y);
  d.rect(14,10,15,3,G); d.hline(14,28,12,G2);
  d.stamp(23,13,['gg.gg','gg.gg','g...g','g....'],{g:G});
  d.stamp(24,13,['g.g','g.g','...'],{g:G2});
  d.px(6,8,G3); d.px(5,9,G3); d.hline(15,22,10,G3);
  for(const [x,y] of [[18,11],[19,12],[11,15],[12,14],[26,11]]) d.px(x,y,RU);
  d.outline(O);
  // 꼬리표 '?'
  d.line(8,17,8,20,'#C84A4A');
  d.poly([[4,21],[12,21],[12,29],[4,29]],T); d.hline(4,12,29,T2);
  d.stamp(6,22,['.qq.','q..q','..q.','..q.','....','..q.'],{q:'#6A4A6A'});
  d.outline(O);
};

S['any:s1-2']=d=>{ // 여행지 자석
  const F='#FFC844', F2='#E89A2A', SK='#8ED6F6', SK2='#B8E8FA', SE='#2F8ED6', SE2='#5AB0EA', SA='#F6DA9A', M='#6ABF6A', M2='#4A9A50', SU='#FF8A4A', W='#FFFFFF';
  d.rect(3,4,26,24,F); d.clear(3,4); d.clear(28,4); d.clear(3,27); d.clear(28,27);
  d.rect(3,26,26,2,F2); d.clear(3,27); d.clear(28,27);
  d.grad(6,7,20,10,[SK,SK,SK2]);
  d.poly([[6,17],[13,9],[19,17]],M); d.poly([[13,9],[19,17],[15,17]],M2); d.stamp(12,9,['.w.','www'],{w:W});
  d.circ(21,10,2,SU);
  d.rect(6,17,20,3,SE); d.hline(7,10,18,SE2); d.hline(16,20,18,SE2);
  d.rect(6,20,20,4,SA);
  d.vline(22,13,21,'#8A5A30'); d.stamp(19,11,['gg.gg','.ggg.','g.g.g'],{g:'#3E9A48'});
  d.stamp(9,21,['.r.r.','rrrrr','.rrr.','..r..'],{r:'#F04E6A'});
  d.hline(6,9,7,W);
  d.outline(O);
  d.stamp(26,0,['..y..','.yWy.','..y..'],{y:'#FFF6B0',W});
};

S['any:s1-3']=d=>{ // 시골 꿀
  const GL='#F7B32B', GL2='#D98A18', GL3='#FFD86A', CL='#E8524A', CL2='#FFFFFF', ST='#8A5A2A', LB='#FFF4D6', GLS='#FFF0C0';
  d.rect(7,10,18,19,GL); d.ell(16,28,9,2,GL); d.clear(7,29); d.clear(24,29);
  d.rect(9,8,14,3,'#E8D8B0');
  d.rect(20,12,4,16,GL2); d.rect(8,12,2,14,GL3); d.vline(9,13,22,GLS);
  // 체크 천 뚜껑
  d.poly([[5,8],[27,8],[25,3],[7,3]],CL);
  for(let x=7;x<26;x+=3) d.vline(x,3,8,CL2);
  for(const y of [5]) d.hline(6,26,y,CL2);
  d.poly([[5,8],[3,12],[7,11]],CL); d.poly([[27,8],[29,12],[25,11]],CL);
  d.hline(6,26,9,ST); d.px(16,10,ST); d.px(15,11,ST); d.px(17,11,ST);
  // 라벨 + 벌
  d.rect(11,15,10,9,LB);
  d.stamp(13,16,['..ww..','.wwww.','yykyyk','kyykyy','.yykk.','..k...'],{w:'#CFEFFF',y:'#FFD03A',k:'#3A2A2A'});
  d.stamp(12,23,['h.h.h.h.h'],{h:GL2});
  // 흘러내린 꿀
  d.rect(22,9,2,4,GL); d.px(23,13,GL);
  d.outline(O);
};

S['any:s1-4']=d=>{ // 흔들린 즉석 사진
  const W='#FAFAF4', W2='#DCDAD0', BG='#8FD4C8', BG2='#B4E4D8', F1='#F6C68A', F2='#F6C68A', K='#2A2233', CH='#F48A9A';
  d.poly([[4,4],[26,2],[28,29],[6,31]],W);
  d.poly([[6,6],[25,5],[26,22],[7,23]],BG);
  d.poly([[6,6],[25,5],[25,10],[6,11]],BG2);
  // 흐릿한 얼굴 두 겹
  d.ell(14,16,6,5,'#F8DCB4'); d.ell(17,15,6,5,F1); d.ell(15,15,5,5,F2);
  d.stamp(11,10,['oo.....oo','o.......o'],{o:'#E8A86A'}); // 귀
  // 선명한 눈과 웃음
  d.stamp(12,13,['k...k','k...k','.....','.k.k.','..k..'],{k:K}); d.px(11,16,CH); d.px(18,16,CH);
  d.line(21,8,24,8,W); d.line(21,10,24,11,'#D8F2EC');
  // 아래 흰 부분 하트
  d.stamp(15,25,['r.r','rrr','.r.'],{r:CH});
  d.hline(7,26,29,W2);
  d.outline(O);
};

S['any:s1-5']=d=>{ // 작은 나침반
  const B='#D9A23A', B2='#A8742A', B3='#F6D47A', F='#FFF6E0', F2='#EADCB8', R='#E83A50', N='#5A6A8A', K='#3A3048';
  d.ring(16,4,2,B); d.rect(14,6,4,2,B);
  d.circ(16,18,12,B); d.circ(16,18,10,B2); d.circ(16,18,9,F);
  for(let y=0;y<32;y++)for(let x=0;x<32;x++) if(d.get(x,y)===F && (x-16)**2+(y-18)**2>64 && x+y>34) d.px(x,y,F2);
  d.px(16,10,K); d.px(16,26,K); d.px(8,18,K); d.px(24,18,K);
  for(const [x,y] of [[10,12],[22,12],[10,24],[22,24]]) d.px(x,y,F2);
  d.stamp(15,11,['k.k','kkk','k.k'],{k:K}); // N... 작게
  // 하트 바늘: 아래-오른쪽(너!) 을 가리킴
  d.line(12,14,16,18,N); d.line(13,14,16,17,N);
  d.line(16,18,20,22,R); d.line(17,18,20,21,R);
  d.stamp(19,20,['rr.rr','rrrrr','.rrr.','..r..'],{r:R});
  d.circ(16,18,1,'#FFD860');
  d.px(9,14,'#FFFFFF'); d.px(10,13,'#FFFFFF'); d.px(9,15,'#FFFFFF');
  d.hline(8,12,8,B3); d.px(6,11,B3);
  d.outline(O);
};

S['any:s1-6']=d=>{ // 바람 풍경
  const G='#BFE6F7', G2='#7FC0E0', G3='#EAF8FF', P='#E84A5A', ST='#7A6A7A', PA='#FFE58A', PA2='#F2C84A', CL='#F4A0B0';
  d.vline(16,0,3,ST);
  d.ell(16,12,8,9,G); for(let y=17;y<25;y++)for(let x=0;x<32;x++) d.clear(x,y);
  d.rect(8,8,17,9,G); d.ell(16,7,7,4,G);
  for(let y=0;y<17;y++)for(let x=0;x<32;x++) if(d.get(x,y)===G && x>20) d.px(x,y,'#A6DAF0');
  d.hline(8,24,16,G2); d.hline(9,23,15,'#D8F0FA');
  // 금붕어 그림
  d.stamp(10,9,['.rr.r','rrrrr','.rr.r'],{r:P}); d.stamp(18,11,['r.rr.','rrrrr','r.rr.'],{r:P});
  d.stamp(15,6,['.g.','g.g'],{g:'#5AB46A'});
  d.vline(10,5,7,G3); d.px(11,4,G3); d.vline(9,8,12,G3);
  d.vline(16,17,20,ST); d.circ(16,19,1.5,CL);
  // 흔들리는 종이
  d.poly([[16,21],[19,21],[23,31],[20,31]],PA); d.line(19,21,23,31,PA2);
  d.px(18,24,PA2); d.px(20,27,PA2);
  d.outline(O);
  d.stamp(25,15,['.d.','d.d','...','d..'],{d:'#5AB4E8'}); d.stamp(4,15,['.d','d.','.d'],{d:'#5AB4E8'});
};

S['any:s1-7']=d=>{ // 휴게소 경단
  const SK='#C8925A', SK2='#9A6A3A', P='#FFB0C4', P2='#F088A8', W='#FFF8F0', W2='#E8DED6', GR='#9AD27A', GR2='#6AAE52', K='#3A2A2A', CH='#FF8AA0';
  d.line(3,30,29,2,SK); d.line(4,30,29,3,SK2);
  d.circ(21,10,5.5,P); d.circ(22,11,4,P); for(let y=4;y<17;y++)for(let x=15;x<28;x++) if(d.get(x,y)===P && (x-21)+(y-10)>4) d.px(x,y,P2);
  d.circ(15,16,5.5,W); for(let y=10;y<23;y++)for(let x=9;x<22;x++) if(d.get(x,y)===W && (x-15)+(y-16)>4) d.px(x,y,W2);
  d.circ(9,22,5.5,GR); for(let y=16;y<29;y++)for(let x=3;x<16;x++) if(d.get(x,y)===GR && (x-9)+(y-22)>4) d.px(x,y,GR2);
  d.line(29,2,29,2,SK);
  d.px(19,8,'#FFFFFF'); d.px(18,9,'#FFFFFF'); d.px(13,14,'#FFFFFF'); d.px(7,20,'#D8F2C8');
  // 가운데 경단 얼굴
  d.px(13,16,K); d.px(17,16,K); d.stamp(14,17,['k.k','.k.'],{k:K}); d.px(12,17,CH); d.px(18,17,CH);
  d.outline(O);
};

// ───────── 아주 먼 곳 기념품 ─────────
S['any:s2-0']=d=>{ // 별똥별 조각
  const Y='#FFE46A', Y2='#FFB830', Y3='#FFFBD8', OR='#FF8A3A', T1='#B8A4FF', T2='#8A9CF4', T3='#FFC8E8';
  // 꼬리
  d.poly([[2,30],[14,15],[18,20]],T2); d.poly([[5,29],[15,17],[17,19]],T1); d.line(8,26,16,18,T3);
  // 별
  const cx=20,cy=12, pts=[]; for(let i=0;i<10;i++){const r=i%2?4.5:10.5, t=-Math.PI/2+i*Math.PI/5+.25; pts.push([cx+Math.cos(t)*r,cy+Math.sin(t)*r])}
  d.poly(pts,Y);
  for(let y=0;y<32;y++)for(let x=0;x<32;x++) if(d.get(x,y)===Y && (x-cx)+(y-cy)>3) d.px(x,y,Y2);
  d.circ(cx,cy,2.5,Y3); d.px(cx-1,cy-1,'#FFFFFF');
  // 깨진 모서리
  d.clear(26,19); d.clear(25,19); d.px(24,18,OR);
  d.outline('#5A2A3A');
  // 따뜻한 김
  d.stamp(26,1,['o.','.o','o.','.o'],{o:OR}); d.stamp(29,3,['o.','.o','o.'],{o:OR}); d.stamp(3,4,['.w.','www','.w.'],{w:Y3});
};

S['any:s2-1']=d=>{ // 무지개 끝 동전
  const RB=['#F25A5A','#FF9A3A','#FFD84A','#6ACF6A','#4AA8F0','#9A6AE8'];
  RB.forEach((c,i)=>{ for(let t=0;t<=Math.PI;t+=.02){ const r=13-i; d.px(4+r*Math.cos(t)*-1+0, 18-r*Math.sin(t), null) } });
  // 무지개 띠 (왼쪽 위에서 동전으로)
  RB.forEach((c,i)=>{ for(let t=Math.PI*.55;t<=Math.PI;t+=.01){const r=12-i; d.px(17+r*Math.cos(t),17-r*Math.sin(t)*1.1,c)} });
  const G='#F8C830', G2='#D89A1A', G3='#FFE88A', G4='#B87A10';
  d.circ(19,20,10,G2); d.circ(18,19,9,G); d.ring(18,19,7,G2);
  // 동전 속 작은 무지개
  d.stamp(13,15,['..rrrrrr..','.rooooooor','roy....yor','ro......or','ro......or'],{r:'#E25A5A',o:'#FF9A3A',y:'#FFD84A'});
  d.stamp(11,20,['.cc.','cccc'],{c:'#FFFFFF'}); d.stamp(21,20,['.cc.','cccc'],{c:'#FFFFFF'});
  d.px(13,13,G3); d.px(14,12,G3); d.px(12,14,G3); d.hline(15,18,11,G3);
  for(let y=0;y<32;y++)for(let x=0;x<32;x++) if(d.get(x,y)===G && (x-18)**2+(y-19)**2>40 && x+y>40) d.px(x,y,G4);
  d.outline(O);
  d.stamp(27,3,['..w..','.wWw.','wWWWw','.wWw.','..w..'],{w:'#FFE88A',W:'#FFFFFF'}); d.px(4,24,'#FFE88A'); d.px(29,13,'#FFE88A');
};

S['any:s2-2']=d=>{ // 공룡 발자국 화석
  const S1='#D9C2A0', S2='#BFA27C', S3='#EDDCC0', F='#8A6E50', F2='#6A523C', CR='#A88A66';
  d.poly([[3,8],[10,3],[23,2],[30,9],[29,24],[22,30],[8,30],[2,22]],S1);
  d.poly([[3,8],[10,3],[23,2],[24,4],[10,5],[5,10],[4,22],[2,22]],S3);
  d.poly([[29,12],[29,24],[22,30],[8,30],[10,28],[22,28],[27,22]],S2);
  // 세 발가락 발자국
  d.ell(16,20,5,5,F); d.poly([[12,18],[7,7],[10,6],[15,16]],F); d.poly([[14,16],[15,4],[18,4],[18,16]],F); d.poly([[18,16],[23,6],[26,7],[21,19]],F);
  d.ell(16,22,3,2,F2); d.px(8,6,F2); d.px(16,3,F2); d.px(25,6,F2);
  d.px(8,7,F2); d.px(16,4,F2); d.px(24,6,F2);
  // 금, 작은 조개 화석
  d.line(26,11,28,15,CR); d.line(28,15,27,18,CR); d.line(5,25,9,27,CR);
  d.stamp(4,13,['.c.','c.c','ccc'],{c:CR});
  d.outline(O);
};

S['any:s2-3']=d=>{ // 남극 얼음 조각
  const I='#BFEAFF', I2='#8ECFF4', I3='#5EA8E0', W='#FFFFFF', DR='#7CC8F4';
  d.poly([[6,10],[14,3],[24,5],[28,14],[24,25],[12,27],[4,20]],I);
  d.poly([[14,3],[24,5],[28,14],[17,13]],'#DDF5FF');
  d.poly([[17,13],[28,14],[24,25]],I2);
  d.poly([[4,20],[12,27],[24,25],[17,13]],I);
  d.poly([[12,27],[24,25],[17,13],[16,20]],I2);
  d.poly([[24,25],[28,14],[26,22]],I3);
  d.line(14,3,17,13,W); d.line(17,13,4,20,'#E6F8FF');
  d.stamp(8,9,['ww.','w..'],{w:W}); d.px(20,6,W); d.px(21,6,W);
  d.outline('#2A4A6A');
  // 녹는 물방울
  d.stamp(15,28,['.d.','ddd','.d.'],{d:DR}); d.stamp(21,27,['d','d'],{d:DR}); d.hline(9,24,31,'#A8DCF4');
  d.stamp(27,1,['.w.','w.w','.w.'],{w:'#8ED0F8'}); d.stamp(1,3,['w.w','.w.','w.w'],{w:'#8ED0F8'});
};

S['any:s2-4']=d=>{ // 토성 고리 조각 반지
  const B=['#C89A6A','#E8C890','#F6E2B8','#B8C8E0','#E8C890'];
  for(let i=0;i<B.length;i++) d.ell(16,21,12-i*.6,8-i*.6,B[i]);
  d.ell(16,21,7,4,null); for(let y=0;y<32;y++)for(let x=0;x<32;x++) if(((x-16)/7.4)**2+((y-21)/4.4)**2<=1) d.clear(x,y);
  for(let y=0;y<32;y++)for(let x=0;x<32;x++){const c=d.get(x,y); if(c && y>24 && c!=='#A8784A') d.px(x,y,'#A8784A')}
  for(let y=0;y<32;y++)for(let x=0;x<32;x++) if(d.get(x,y) && y>=25 && ((x-16)/12)**2+((y-21)/8)**2<.62) d.px(x,y,'#D0A878');
  // 미니 토성 보석
  d.circ(16,9,5,'#F4C870'); d.hline(12,20,8,'#E0A050'); d.hline(11,21,10,'#E8B860'); d.px(14,6,'#FFF0C0'); d.px(13,7,'#FFF0C0');
  d.line(8,12,24,6,'#9AB8E8'); d.line(8,11,24,5,'#C8DAF4');
  d.outline(O);
  d.stamp(26,13,['.w.','wWw','.w.'],{w:'#FFE88A',W:'#FFFFFF'}); d.px(3,4,'#FFE88A'); d.px(28,2,'#C8DAF4');
};

S['any:s2-5']=d=>{ // 용의 비늘
  const G1='#3FBF9A', G2='#2A9A86', G3='#1E6E6A', G4='#8AE8C0', P='#9A7AE8', W='#E8FFF4';
  d.poly([[16,30],[4,15],[4,9],[9,3],[23,3],[28,9],[28,15]],G2);
  d.poly([[16,26],[7,14],[7,9],[11,5],[21,5],[25,9],[25,14]],G1);
  d.poly([[16,21],[10,13],[10,9],[13,7],[19,7],[22,9],[22,13]],G4);
  d.poly([[16,16],[13,12],[14,9],[18,9],[19,12]],W);
  for(let y=0;y<32;y++)for(let x=0;x<32;x++){const c=d.get(x,y); if(c&&x>17&&y>8&&(c===G2)) d.px(x,y,G3)}
  d.line(5,14,15,28,P); d.line(27,14,20,24,P);
  d.vline(16,17,25,G2);
  d.outline('#16303A');
  d.stamp(26,0,['..y..','..y..','yyWyy','..y..','..y..'],{y:'#C8FFEA',W:'#FFFFFF'}); d.px(3,24,'#C8FFEA'); d.px(29,22,'#B8A0F8');
};

S['any:s2-6']=d=>{ // 사막의 유물 (황금 풍뎅이 부적)
  const G='#F4C23A', G2='#C88A1A', G3='#FFE88A', L='#2A6AC8', L2='#4A9AF0', L3='#1A3A8A', R='#E8483A', TQ='#3AC8C0';
  // 날개 (왼쪽만 그리고 거울)
  d.poly([[13,13],[2,8],[1,12],[4,15],[2,17],[6,19],[4,21],[13,20]],G);
  d.line(13,14,3,10,G2); d.line(13,17,4,16,G2); d.line(13,19,6,20,G2);
  d.px(4,10,TQ); d.px(5,10,TQ); d.px(6,14,TQ); d.px(7,14,TQ); d.px(8,19,TQ);
  d.mirrorX();
  // 해 원반
  d.circ(15.5,5,3.5,R); d.px(14,3,'#FF9A80');
  // 몸통
  d.ell(15.5,17,5,8,L); d.ell(15.5,13,4,3,L2); d.ell(15.5,10,3,2,L3);
  d.vline(15,15,24,L3); d.vline(16,15,24,L3);
  d.px(13,16,'#9AD0FF'); d.px(13,17,'#9AD0FF');
  // 다리
  d.stamp(9,22,['g....','.g...'],{g:G2}); d.stamp(18,22,['....g','...g.'],{g:G2});
  d.px(3,8,G3); d.px(28,8,G3); d.hline(4,8,9,G3);
  d.outline(O);
  d.stamp(26,23,['..w..','.wWw.','..w..'],{w:G3,W:'#FFFFFF'}); d.px(3,26,G3);
};

S['any:s2-7']=d=>{ // 수정 구슬
  const GL='#C8B8FF', GL2='#A08AF0', GL3='#E8E0FF', ST='#C88A3A', ST2='#9A5E28', ST3='#F0C060', SN='#FFFFFF', M='#7A6AC8', M2='#5A4AA8', FL='#F04E6A';
  d.circ(16,13,11,GL); d.circ(15,12,9,GL3);
  d.circ(16,13,9,GL);
  // 안쪽: 산꼭대기 깃발 (해냄!)
  d.poly([[8,21],[16,9],[24,21]],M); d.poly([[16,9],[24,21],[19,21]],M2); d.poly([[14,12],[16,9],[18,12],[16,13]],SN);
  d.vline(16,4,9,'#5A4A4A'); d.stamp(17,4,['ff.','fff','ff.'],{f:FL});
  for(let y=0;y<32;y++)for(let x=0;x<32;x++) if(((x-16)**2+(y-13)**2>121) ) d.clear(x,y);
  d.ring(16,13,10.3,GL2);
  d.stamp(9,6,['.ww','w..','w..'],{w:SN});
  d.stamp(23,14,['y','.'],{y:'#FFE88A'}); d.px(10,15,'#FFE88A');
  // 받침
  d.poly([[8,24],[24,24],[26,29],[6,29]],ST); d.hline(9,23,24,ST3); d.hline(10,22,25,ST3); d.hline(6,26,29,ST2); d.rect(6,28,21,2,ST2);
  d.px(15,26,'#E85A9A'); d.px(16,26,'#E85A9A'); d.px(15,27,'#E85A9A'); d.px(16,27,'#E85A9A');
  d.outline(O);
  d.stamp(27,1,['.w.','wWw','.w.'],{w:'#E8E0FF',W:SN}); d.px(3,20,'#E8E0FF');
};

// ───────── 엽서 공용 도우미 ─────────
const starsAt=(d,n,x0,x1,y0,y1,cols,avoid)=>{for(let i=0;i<n;i++){const x=d.ri(x0,x1),y=d.ri(y0,y1); if(avoid&&avoid(x,y)) continue; d.px(x,y,cols[i%cols.length])}};
const twinkle=(d,x,y,c,c2)=>{d.px(x,y,c2||'#FFFFFF'); d.px(x-1,y,c); d.px(x+1,y,c); d.px(x,y-1,c); d.px(x,y+1,c)};
const cloud=(d,x,y,w,c,sh)=>{d.ell(x+w/2,y+2,w/2,2,c); d.circ(x+w*0.35,y+1,2.2,c); d.circ(x+w*0.62,y,2.6,c); if(sh) d.hline(x+1,x+w-1,y+4,sh)};

// ───────── 동네 엽서 ─────────
C['any:c0-0']=d=>{ // 편의점 앞 — 저녁 도시, 밝은 가게, 문 앞 고양이
  d.grad(0,0,64,22,['#3A3E78','#4A4A88','#5E5694','#76649E','#9474A4']);
  // 먼 건물 실루엣
  d.rect(0,8,10,22,'#2E2E58'); d.rect(10,12,8,18,'#38386A'); d.rect(18,6,8,24,'#2E2E58'); d.rect(0,26,26,4,'#24244A'); d.hline(0,25,26,'#3A3A68');
  for(const [x,y] of [[2,10],[6,13],[3,17],[12,15],[20,9],[23,13],[20,17],[14,19]]) d.rect(x,y,2,2,'#F8D878');
  // 가게 건물
  d.rect(26,4,38,27,'#E8E2D4'); d.rect(26,4,38,2,'#C8C0B0');
  // 간판
  d.rect(28,7,34,6,'#3AA868'); d.hline(28,61,7,'#5AC888'); d.hline(28,61,12,'#2A8050');
  d.stamp(31,8,['ooo.o.o','..o.o.o','ooo.ooo','o.....o','ooo...o'],{o:'#FFFFFF'}); // 24 느낌
  d.stamp(41,8,['.r.r.','rrrrr','rrrrr','.rrr.','..r..'],{r:'#F06A7A'}); // 하트
  d.stamp(49,8,['bbbbbb','b....b','b.bb.b','b....b','bbbbbb'],{b:'#FFE070'});
  // 차양
  for(let x=27;x<63;x++) d.vline(x,13,15,Math.floor((x-27)/3)%2?'#FFFFFF':'#F06A6A');
  for(let x=27;x<63;x+=3) d.px(x+1,16,'#F06A6A');
  // 큰 창(밝은 안쪽, 선반)
  d.rect(28,17,22,12,'#FFF4C0'); d.frame(28,17,22,12,'#7A7A88');
  d.hline(29,48,21,'#C8B888'); d.hline(29,48,25,'#C8B888');
  const goods=['#F06A7A','#5AB0F0','#FFC040','#7AD07A','#C080E0'];
  for(let x=30;x<48;x+=2){d.rect(x,19,1,2,goods[x%5]); d.rect(x,23,1,2,goods[(x+2)%5]); d.rect(x,27,1,1,goods[(x+1)%5])}
  // 문
  d.rect(52,17,10,14,'#B8E0F0'); d.frame(52,17,10,14,'#7A7A88'); d.vline(57,18,29,'#7A7A88'); d.px(56,24,'#4A4A58'); d.px(58,24,'#4A4A58');
  d.rect(53,18,3,4,'#E0F4FF');
  // 인도
  d.rect(0,30,64,10,'#B4AEB8'); d.hline(0,63,30,'#D0CAD4');
  for(let x=0;x<64;x+=8){d.vline(x,31,39,'#9A94A0')} d.hline(0,63,35,'#9A94A0');
  // 창빛이 바닥에
  d.dither(28,31,22,3,'#D8D0B0','#B4AEB8');
  // 고양이 (문 옆)
  d.stamp(44,24,[
    '.k...k..',
    '.kk.kk..',
    '.kkkkk..',
    '.kykyk..',
    '.kkpkk..',
    '..kkk...',
    '.kkkkk..',
    'kkkkkkk.',
    'kkkkkkkt',
    'kkkkkkkt',
    '.k.k.k.t',
  ],{k:'#3A3440',y:'#FFE040',p:'#F09AA8',t:'#3A3440'});
  // 아이스크림 판넬, 쓰레기통
  d.rect(37,27,4,4,'#5A6AC0'); d.rect(37,27,4,1,'#7A8AE0');
  // 별/작은 인사 하트
  d.stamp(40,20,['r.r','rrr','.r.'],{r:'#F06A7A'});
  d.px(8,2,'#FFFFFF'); d.px(15,4,'#E0E0FF'); d.px(4,5,'#E0E0FF');
};

C['any:c0-1']=d=>{ // 놀이터 그네 — 맑은 낮, 하늘 높이 올라간 그네
  d.grad(0,0,64,26,['#5AB4F0','#6EC0F4','#84CCF6','#9CD8F8','#B4E2FA']);
  cloud(d,4,4,12,'#FFFFFF','#E0F0FC'); cloud(d,40,2,10,'#FFFFFF'); cloud(d,24,8,7,'#FFFFFF');
  d.circ(58,5,3,'#FFF2A0'); d.circ(58,5,2,'#FFFFFF');
  // 먼 나무 줄
  for(const [x,r] of [[2,4],[8,3],[54,4],[61,3]]){d.circ(x,22,r,'#5AAE5A'); d.circ(x-1,21,r-1,'#7AC86A')}
  d.rect(0,24,64,16,'#7CCB5E'); d.hline(0,63,24,'#94DA72');
  for(let i=0;i<40;i++) d.px(d.ri(0,63),d.ri(26,39),'#68B44E');
  // 모래밭
  d.ell(44,33,17,5,'#F0D898'); d.dither(30,32,28,3,'#F0D898','#E2C47C'); d.ell(44,33,17,5,'#F0D898');
  for(let i=0;i<14;i++) d.px(d.ri(30,58),d.ri(30,36),'#E2C47C');
  // 그네 틀 (A 모양 두 개)
  const P='#E05A4A', P2='#B04034', B='#F8C040';
  d.line(30,32,34,10,P); d.line(31,32,35,10,P2); d.line(38,32,34,10,P);
  d.line(52,32,56,10,P); d.line(60,32,56,10,P); d.line(61,32,57,10,P2);
  d.rect(33,9,25,2,B); d.hline(33,57,10,'#C8962A');
  // 그네1: 하늘 높이 (사슬 비스듬히)
  const CH='#8A8A98';
  d.line(40,11,27,18,CH); d.line(46,11,33,20,CH);
  d.poly([[25,18],[34,20],[34,21],[25,19]],'#4A7AE0'); d.hline(26,33,21,'#3458B0');
  // 그네2: 가만히
  d.vline(48,11,26,CH); d.vline(53,11,26,CH); d.rect(47,26,7,2,'#F06A8A'); d.hline(47,53,28,'#C04A6A');
  // 바람 자국
  d.hline(20,23,15,'#FFFFFF'); d.hline(19,22,18,'#FFFFFF'); d.hline(22,24,21,'#E8F6FF');
  // 미끄럼틀 조금 (오른쪽 끝 멀리)
  d.rect(62,14,2,18,'#5AB0E0');
  // 하늘 반짝
  twinkle(d,20,6,'#FFF2A0');
  // 꽃
  for(const [x,y,c] of [[26,36,'#FF8AA8'],[3,29,'#FFE060'],[60,37,'#FFFFFF']]){d.px(x,y,c); d.px(x,y+1,'#4A9A3E')}
};

C['any:c0-2']=d=>{ // 비 오는 골목 — 벽돌 골목, 빗줄기, 웅덩이
  d.grad(0,0,64,12,['#5A6480','#66708C','#727C96']);
  // 오른쪽 벽 (원근)
  d.poly([[40,0],[64,0],[64,40],[40,30]],'#9A6A5A');
  for(let y=1;y<34;y+=3) d.line(40,y*0.9+0,64,y,'#7E5244');
  // 왼쪽 먼 벽
  d.poly([[0,0],[24,0],[24,30],[0,30]],'#8A7280');
  for(let y=2;y<30;y+=3) d.hline(0,23,y,'#76606E');
  for(let y=2;y<30;y+=3) for(let x=(y%2?2:5);x<24;x+=6) d.vline(x,y+1,y+2,'#76606E');
  // 안쪽 골목 끝 (밝은 창문)
  d.rect(24,0,16,30,'#6A6E8A'); d.rect(24,10,16,20,'#5A5C78');
  d.rect(29,13,6,6,'#FFE08A'); d.frame(29,13,6,6,'#3A3A50'); d.vline(32,13,18,'#3A3A50');
  d.rect(26,22,4,8,'#3A3A50');
  // 오른쪽 벽: 창문과 화분, 에어컨, 전선
  d.poly([[46,10],[54,11],[54,20],[46,18]],'#FFD878'); d.line(46,10,54,11,'#4A3A3A'); d.line(46,18,54,20,'#4A3A3A'); d.line(50,10,50,19,'#4A3A3A');
  d.rect(46,19,8,2,'#5A9A4A'); d.px(47,18,'#F06A7A'); d.px(51,18,'#F06A7A');
  d.line(0,4,40,8,'#2A2A3A'); d.line(24,2,64,6,'#2A2A3A');
  // 바닥
  d.poly([[0,30],[24,30],[40,30],[64,40],[0,40]],'#5C6070');
  d.rect(0,30,40,10,'#5C6070');
  for(let y=31;y<40;y+=3) d.hline(0,63,y,'#525666');
  // 웅덩이
  const PU='#8EA8D0', PL='#B8D0F0';
  d.ell(34,35,7,2,PU); d.hline(31,36,35,PL); d.ell(52,37,6,2,PU); d.hline(50,54,36,PL); d.ell(27,31,3,1,PU);
  // 첨벙 물방울
  d.stamp(30,31,['w...w','.w.w.'],{w:'#D8E8FF'}); d.stamp(49,33,['.w.w.','w...w'],{w:'#D8E8FF'});
  // 빗줄기
  for(let i=0;i<46;i++){const x=d.ri(0,63), y=d.ri(0,34); if(x>=5&&x<=22&&y>=18) continue; d.px(x,y,'#C8D8F0'); d.px(x,y+1,'#A8B8D8'); d.px(x,y+2,'#8A9AC0')}
  // 작은 발자국 (젖은)
  for(const [x,y] of [[24,37],[27,38],[38,38],[42,39]]){d.px(x,y,'#7A8098'); d.px(x+1,y,'#7A8098')}
  // 노란 우산 걸린 것
  d.poly([[56,22],[60,19],[64,22]],'#F8C840'); d.vline(60,22,27,'#4A3A3A'); d.px(59,27,'#4A3A3A');
};

C['any:c0-3']=d=>{ // 동네 도서관 — 책장 벽, 창문, 펼친 책
  d.rect(0,0,64,40,'#E8D8B8');
  // 창문 (왼쪽 위)
  d.rect(3,3,14,12,'#9AD4F0'); d.rect(3,10,14,5,'#B8E4F8'); d.frame(2,2,16,14,'#8A5A34'); d.vline(9,3,14,'#8A5A34'); d.hline(3,16,8,'#8A5A34');
  d.ell(6,5,2,1,'#FFFFFF'); d.circ(14,12,2,'#7AC06A');
  // 햇빛 줄
  for(let i=0;i<6;i++) d.line(18+i,6+i,26+i,20+i,'#F2E4C4');
  // 책장 (오른쪽 큰)
  const W='#8A5A34', W2='#6A4024', W3='#A87448';
  d.rect(24,1,40,30,W2); d.rect(25,2,38,28,'#4A2E1C');
  const sp=['#E05A5A','#4A8AD8','#F0B040','#5AB06A','#9A6AD0','#E88A4A','#3AA8A8','#F07AA0','#C8C8D8'];
  for(const y of [2,9,16,23]){
    let x=26; while(x<62){const w=d.ri(1,2), h=d.ri(4,6), c=sp[d.ri(0,8)]; if(d.rnd()<.08){d.line(x,y+6,x+2,y+6-h+1,c); x+=3; continue} d.rect(x,y+7-h,w,h,c); d.px(x,y+7-h+1,'#FFFFFF'); x+=w+(d.rnd()<.15?1:0)}
    d.rect(24,y+7,40,1,W3);
  }
  d.vline(44,2,30,W2);
  // 바닥
  d.rect(0,31,64,9,'#C08850'); for(let y=33;y<40;y+=3) d.hline(0,63,y,'#A87040'); for(let x=3;x<64;x+=9) d.vline(x,31,32,'#A87040');
  d.rect(0,30,64,1,'#8A5A34');
  // 작은 책상 + 펼친 책 + 스탠드 (오른쪽 앞)
  d.rect(40,26,22,3,W3); d.hline(40,61,26,'#C8945C'); d.rect(42,29,2,9,W2); d.rect(58,29,2,9,W2);
  d.poly([[44,25],[50,23],[51,25]],'#FFFFFF'); d.poly([[51,25],[52,23],[58,25]],'#F4F0E4'); d.vline(51,23,25,'#B8A890');
  d.hline(45,49,24,'#B8B8C8'); d.hline(53,57,24,'#B8B8C8');
  d.vline(60,18,25,'#5A5A6A'); d.poly([[57,18],[63,18],[61,15],[59,15]],'#3AA868'); d.dither(55,19,8,6,'#FFF4C8','#E8D8B8'); d.vline(60,19,25,'#5A5A6A');
  // 소리 표시(책장 넘기는 ♪ 작게)
  d.stamp(47,17,['.nn','.n.','nn.'],{n:'#8A6AC0'}); d.stamp(53,15,['nn','n.'],{n:'#8A6AC0'});
  // 화분
  
  // 쉿 표지
  d.rect(17,13,7,7,'#FFFFFF'); d.frame(17,13,7,7,'#C8B898'); d.stamp(18,14,['.fff.','fk..f','fkkkf','fk.ff','.fff.'],{f:'#E05A5A',k:'#5A5A6A'}); // 소리 금지
};

C['any:c0-4']=d=>{ // 노을 지는 옥상 — 발그레한 노을, 초록 옥상, 빨래줄, 물탱크
  d.grad(0,0,64,26,['#6A5AA8','#9A68B0','#D078A8','#F08A98','#F8A888','#FCC488']);
  // 해 (반쯤 지는)
  d.circ(36,19,7,'#FCC488'); d.circ(36,19,5,'#FFE6A0'); d.circ(36,19,3,'#FFF4D0');
  // 발그레 구름 (볼처럼)
  d.ell(14,6,7,2,'#F8A8C0'); d.ell(16,5,4,1,'#FFD0DC'); d.ell(54,9,6,1,'#F8A8C0'); d.ell(30,12,5,1,'#F8A8C0');
  d.ell(10,9,1,0,'#F07AA0'); d.ell(20,9,1,0,'#F07AA0');
  // 도시 실루엣
  const SI='#5A3A6A', SI2='#6E4878';
  for(const [x,w,h] of [[0,6,8],[6,5,5],[11,7,10],[18,4,6],[22,6,12],[28,5,7],[33,8,4],[50,6,9],[56,8,6]]) d.rect(x,26-h,w,h+2,x%2?SI:SI2);
  for(const [x,y] of [[2,20],[13,18],[24,16],[25,20],[52,19],[58,22],[14,22]]) d.px(x,y,'#FFD878');
  // 난간
  d.rect(0,26,64,2,'#E8E0E8'); d.hline(0,63,25,'#C8B8D0');
  for(let x=1;x<64;x+=5) d.vline(x,22,25,'#C8B8D0'); d.hline(0,63,22,'#E8E0E8');
  // 초록 옥상 바닥
  d.rect(0,28,64,12,'#5AA878'); d.hline(0,63,28,'#3E8A60'); d.dither(26,30,38,10,'#5AA878','#64B282');
  d.dither(30,29,28,4,'#E8A080','#5AA878'); // 노을빛 반사
  // 물탱크
  d.rect(51,14,10,13,'#4A88C8'); d.ell(56,14,5,2,'#6AA8E0'); d.vline(52,15,26,'#6AA8E0'); d.vline(60,15,26,'#3A6AA0');
  d.hline(51,60,19,'#3A6AA0'); d.hline(51,60,23,'#3A6AA0'); d.rect(52,27,2,4,'#5A5A6A'); d.rect(58,27,2,4,'#5A5A6A');
  // 빨래줄과 빨래
  d.vline(26,14,31,'#8A6A5A'); d.vline(48,14,31,'#8A6A5A'); d.line(26,15,48,16,'#FFFFFF');
  d.rect(29,16,5,6,'#FFFFFF'); d.rect(29,16,5,1,'#E8E0E8'); // 수건
  d.stamp(35,16,['ss.ss','sssss','.sss.','.sss.','.s.s.'],{s:'#F8D058'}); // 옷
  d.stamp(41,16,['qqqq','q..q','q..q'],{q:'#7AB8F0'}); d.rect(41,16,4,3,'#7AB8F0'); d.vline(42,19,22,'#7AB8F0'); d.vline(44,19,22,'#7AB8F0');
  // 화분 (고추/상추)
  d.rect(34,33,6,4,'#D07050'); d.hline(34,39,33,'#E8A080'); d.circ(37,31,2,'#4A9A4A'); d.px(36,30,'#E04040'); d.px(38,31,'#E04040');
  d.rect(42,34,5,3,'#D07050'); d.circ(44,32,2,'#7AC86A');
  // 평상 (벤치)
  d.rect(48,32,14,2,'#B88050'); d.hline(48,61,32,'#D8A070'); d.rect(49,34,2,4,'#8A5A34'); d.rect(59,34,2,4,'#8A5A34');
  twinkle(d,6,3,'#FFE0E8');
};

C['any:c0-5']=d=>{ // 마을버스 종점 — 언덕 마을, 초록 마을버스, 정류장 표지
  d.grad(0,0,64,16,['#7ACAF4','#8ED4F6','#A6DEF8','#C4EAF8']);
  cloud(d,2,3,10,'#FFFFFF'); cloud(d,46,5,8,'#FFFFFF');
  // 언덕
  d.ell(16,22,26,9,'#8ACB6A'); d.ell(52,24,20,8,'#6AB458'); d.ell(16,23,26,8,'#8ACB6A');
  // 언덕 위 집들
  const hs=[[6,13,'#F07A6A'],[14,11,'#F8C058'],[22,13,'#7AA8E8'],[44,16,'#E88AB0'],[52,15,'#F07A6A']];
  for(const [x,y,c] of hs){d.rect(x,y+2,5,4,'#F8F0E0'); d.poly([[x-1,y+2],[x+2,y-1],[x+6,y+2]],c); d.px(x+2,y+4,'#5A7AA8')}
  // 길가 나무
  d.circ(30,17,3,'#4A9A4A'); d.vline(30,19,23,'#7A5A3A');
  // 땅: 회차 마당 (흙길)
  d.rect(0,24,64,16,'#D8C49A'); d.hline(0,63,24,'#C4AE84');
  d.ell(44,34,22,4,'#9A9AA4'); d.ell(44,34,20,3,'#A8A8B2'); // 회차 아스팔트
  for(let i=0;i<20;i++) d.px(d.ri(0,63),d.ri(26,39),'#C4AE84');
  // 정류장 표지
  d.vline(27,14,33,'#6A6A78'); d.circ(27,13,3,'#3A7AD8'); d.circ(27,13,2,'#FFFFFF');
  d.stamp(26,12,['bb.','b.b','bb.'],{b:'#3A7AD8'});
  d.rect(25,20,5,6,'#FFF4C0'); d.frame(25,20,5,6,'#6A6A78'); d.hline(26,28,22,'#B8A880'); d.hline(26,28,24,'#B8A880');
  // 마을버스 (초록)
  const G='#4AB868', G2='#2E8A4A', G3='#7AD890', WN='#BEE6F8', WN2='#8ACAEC';
  d.rect(33,17,29,13,G); d.rect(34,16,27,1,G); d.hline(34,60,16,G3);
  d.rect(33,26,29,3,G2); d.hline(33,61,25,'#F8F0D0');
  for(let x=35;x<56;x+=5){d.rect(x,18,4,5,WN); d.px(x,18,'#FFFFFF'); d.hline(x,x+3,22,WN2)}
  d.rect(57,18,4,8,WN); d.vline(57,18,25,G2); d.px(58,19,'#FFFFFF'); // 앞 유리
  d.rect(55,18,1,10,G2); d.rect(53,23,2,5,'#E8F6FF'); // 문
  d.px(61,27,'#FFE070'); d.px(33,27,'#F05050');
  d.rect(35,16,6,1,'#FFE070'); // 노선판
  d.stamp(43,12,['o.o.o','.....'],{o:'#FFFFFF'}); 
  for(const x of [38,56]){d.circ(x,29,2.4,'#2A2A34'); d.circ(x,29,1,'#A8A8B8')}
  // 깃발 (일주 성공!)
  d.vline(12,8,13,'#6A5A4A'); d.stamp(13,8,['ff','fff','ff'],{f:'#F05A6A'});
};

C['any:c0-6']=d=>{ // 아이스크림 가게 — 파스텔 가게 안, 진열장과 메뉴판
  d.rect(0,0,64,30,'#C8F0E4');
  for(let x=0;x<64;x+=8) d.rect(x,0,4,30,'#B4E6D8');
  d.rect(0,0,64,3,'#F8A8C8'); for(let x=0;x<64;x+=4) d.ell(x+2,3,2,1,'#F8A8C8'); // 장식 테두리
  // 메뉴판 (위 오른쪽)
  d.rect(30,6,32,10,'#5A3A4A'); d.frame(29,5,34,12,'#C88A5A');
  const fl=['#FFB8D0','#8A5A3A','#FFF0C0','#9AE0B0','#C8A8F0','#FFD068'];
  for(let i=0;i<6;i++){const x=32+i*5; d.circ(x+1,9,1.5,fl[i]); d.poly([[x,11],[x+3,11],[x+1.5,14]],'#E8B068')}
  // 걸린 큰 콘 장식
  d.vline(20,0,3,'#7A7A88'); d.circ(20,6,3,'#FFB8D0'); d.circ(19,5,1,'#FFE0EC'); d.poly([[17,8],[24,8],[20.5,15]],'#E8B068'); d.line(18,9,21,13,'#C88A48'); d.line(23,9,20,13,'#C88A48');
  d.px(20,3,'#E83A5A');
  // 진열 냉장고 (카운터)
  d.rect(26,20,38,12,'#F8F4F8'); d.rect(26,20,38,1,'#FFFFFF');
  d.rect(27,21,36,7,'#DCF2FA'); d.frame(27,21,36,7,'#A8C8D8');
  for(let i=0;i<8;i++){const x=28+i*4.4; d.rect(x,24,4,3,'#C8C8D8'); d.ell(x+1.5,24,1.8,1.2,fl[i%6]); d.px(x+1,23,'#FFFFFF')}
  d.line(28,22,32,21,'#FFFFFF'); d.rect(26,28,38,4,'#F8A8C8'); d.hline(26,63,28,'#E888B0');
  // 콘 탑 & 숟가락 꽂이
  d.rect(58,16,4,4,'#E8B068'); for(let y=13;y<16;y++) d.hline(58,61,y,y%2?'#D8A058':'#E8B068');
  d.rect(52,17,4,3,'#7AC8E8'); d.vline(53,14,17,'#F86A8A'); d.vline(54,15,17,'#FFE068');
  // 떨어진 고민 흔적: 맛 고르기 물음표 + 시계
  d.stamp(28,14,['.qq.','q..q','..q.','.q..','....','.q..'].slice(0,6),{q:'#E86A9A'});
  d.circ(9,8,4,'#FFFFFF'); d.ring(9,8,4,'#E86A9A'); d.vline(9,5,8,'#5A3A4A'); d.hline(9,11,8,'#5A3A4A');
  // 바닥 체크무늬
  for(let y=32;y<40;y++)for(let x=0;x<64;x++) d.px(x,y,((x>>2)+(y>>2))%2?'#F8D0E0':'#FFFFFF');
  d.hline(0,63,32,'#E0A8C0'); d.rect(0,30,26,2,'#B4E6D8');
  // 작은 의자
  d.ell(2,26,3,1,'#F86A8A'); d.vline(2,27,31,'#9A9AA8');
};

C['any:c0-7']=d=>{ // 밤 산책길 — 가로등 세 개, 그 끝에 별
  d.grad(0,0,64,26,['#141A3A','#1A2248','#222C58','#2C3866','#364274']);
  starsAt(d,26,30,63,0,14,['#FFFFFF','#FFF2B0','#C8D8FF']);
  starsAt(d,6,0,29,0,8,['#8890C0']);
  twinkle(d,54,4,'#FFF2B0'); twinkle(d,44,8,'#C8D8FF'); twinkle(d,60,11,'#FFF2B0');
  for(let y=0;y<10;y++)for(let x=30;x<42;x++) if((x-35)**2+(y-5)**2<=11&&(x-37)**2+(y-4)**2>8) d.px(x,y,'#FFF4C8'); // 초승달
  // 먼 언덕과 나무 실루엣
  d.ell(48,27,26,5,'#1E2A44'); d.ell(8,26,16,4,'#1A2440');
  for(const [x,r] of [[4,4],[11,3],[60,4],[33,3]]){d.circ(x,22,r,'#14203A')}
  // 풀밭
  d.rect(0,26,64,14,'#203C3C'); d.dither(0,26,64,2,'#203C3C','#1A2440');
  // 산책길: 왼아래에서 오른위로
  d.poly([[0,40],[30,40],[60,26],[52,26]],'#4A4E62'); d.poly([[0,36],[0,40],[22,40],[54,27]],'#4A4E62');
  d.line(0,35,53,26,'#5E6278'); d.line(29,40,60,26,'#5E6278');
  // 가로등 3개 (멀어질수록 작게)
  const L=(x,y,h,r)=>{d.ell(x,y+h,r+3,r>2?2:1,'#7A7650'); d.ell(x,y+h,r+1,1,'#9A9460'); d.vline(x,y,y+h,'#2A2E3E'); d.rect(x-1,y-2,3,2,'#2A2E3E'); d.px(x,y,'#FFF0A0'); d.circ(x,y,r,'#FFE070'); d.circ(x,y,r-1,'#FFF8D0')};
  for(let i=0;i<14;i++){d.px(28+d.ri(-4,4),22+d.ri(-4,4),'#3A4470')}
  L(28,23,13,2.2); L(42,20,9,1.7); L(53,18,7,1.2);
  d.ell(28,24,6,4,'#4A4A68'); L(28,23,13,2.2); // 빛 번짐 다시
  // 숫자 발자국 (1·2·3) 대신 작은 점선 발자국
  for(const [x,y] of [[24,36],[30,34],[36,32],[42,30],[47,29]]){d.px(x,y,'#6A6E88'); d.px(x+1,y-1,'#6A6E88')}
  // 반딧불 몇 개
  for(const [x,y] of [[58,32],[50,36],[38,37]]) d.px(x,y,'#D8F070');
};

// ───────── 먼 곳 엽서 ─────────
C['any:c1-0']=d=>{ // 여름 바닷가 — 파도에 반쯤 쓸려 간 모래성
  d.grad(0,0,64,11,['#58C0F8','#74CCF8','#94D8FA']);
  cloud(d,6,2,11,'#FFFFFF'); cloud(d,48,4,7,'#FFFFFF');
  d.circ(30,3,2,'#FFF6C0'); 
  // 바다 (오른쪽이 넓게)
  d.rect(0,11,64,29,'#2E9AD8'); d.hline(0,63,11,'#1E7AB8');
  d.rect(0,12,64,3,'#48B0E4');
  for(let y=14;y<26;y+=3) for(let x=(y*7)%9;x<64;x+=9) d.hline(x,x+2,y,'#78CCF0');
  // 모래 (대각선 해안)
  d.poly([[0,18],[22,20],[64,33],[64,40],[0,40]],'#F4DCA0');
  d.poly([[0,18],[22,20],[64,33],[64,35],[22,22],[0,20]],'#E8C888'); // 젖은 모래
  // 파도 거품 줄
  d.line(0,17,22,19,'#FFFFFF'); d.line(22,19,64,32,'#FFFFFF');
  for(let x=24;x<64;x+=5){const y=Math.round(19+(x-22)*13/42); d.px(x,y-1,'#FFFFFF'); d.px(x+1,y-1,'#DFF4FF')}
  for(let i=0;i<30;i++) d.px(d.ri(0,63),d.ri(24,39),d.rnd()<.5?'#E8C888':'#FFF0C8');
  // 쓸려 간 모래성 (오른쪽 반이 무너짐)
  const S='#E0B068', S2='#C8944C', S3='#F4CC88';
  d.rect(34,24,14,8,S); d.hline(34,47,24,S3);
  d.rect(35,19,4,5,S); d.stamp(35,18,['s.s.'],{s:S}); d.vline(35,19,23,S3);
  d.rect(40,16,5,8,S); d.stamp(40,15,['s.s.s'],{s:S}); d.vline(40,16,23,S3); d.rect(42,19,1,2,S2);
  d.poly([[45,24],[48,20],[51,24],[52,32],[47,32]],S2); // 무너진 쪽
  d.rect(36,27,3,5,S2); d.px(37,26,S2);
  d.ell(52,30,5,2,'#FFFFFF'); d.ell(53,30,3,1,'#BFE8FF'); // 덮친 파도
  // 작은 깃발 (기울어짐)
  d.line(42,14,43,10,'#7A5A3A'); d.stamp(43,9,['ff','f.'],{f:'#F05A5A'});
  // 양동이와 삽
  d.poly([[26,30],[31,30],[30,35],[27,35]],'#F06A7A'); d.hline(26,31,30,'#FF9AA8'); d.ring(28.5,29,2,'#B04A5A');
  d.line(57,36,61,30,'#F8C840'); d.rect(56,36,2,2,'#F8C840');
  // 조개·불가사리
  d.stamp(30,37,['.o.','ooo','o.o'],{o:'#F08A5A'}); d.stamp(48,36,['.ww.','wwww'],{w:'#F8E8F0'});
};

C['any:c1-1']=d=>{ // 구름 위 산 — 운해 위 눈 덮인 봉우리
  d.grad(0,0,64,22,['#3A78C8','#4A8AD4','#62A0DC','#7EB6E4','#9CCAEA','#BCDCF0']);
  d.circ(10,6,3,'#FFFBE0'); d.circ(10,6,2,'#FFFFFF');
  // 먼 봉우리
  d.poly([[18,24],[30,10],[40,24]],'#8EA4C8'); d.poly([[27,13],[30,10],[33,13],[31,14],[29,13]],'#F4F8FF');
  // 큰 봉우리 (오른쪽)
  d.poly([[30,30],[48,4],[64,24],[64,30]],'#6A7AA8'); d.poly([[48,4],[64,24],[64,30],[52,30]],'#54628E');
  d.poly([[42,13],[48,4],[54,12],[51,11],[49,14],[46,11]],'#FFFFFF'); d.poly([[48,4],[54,12],[51,11]],'#D8E4F4');
  d.line(48,6,44,14,'#E8F0FC'); d.line(52,14,58,20,'#E8F0FC');
  d.vline(48,0,4,'#5A4A4A'); d.stamp(49,0,['ff','ff'],{f:'#F05A6A'}); // 꼭대기 깃발
  // 운해
  const CL='#FFFFFF', CL2='#E8EEF8', CL3='#C8D4EC';
  d.rect(0,26,64,14,CL2);
  for(const [x,y,r] of [[24,26,5],[33,25,4],[42,27,6],[54,26,5],[62,27,4],[30,29,4],[48,30,5]]){d.circ(x,y+1,r,CL3); d.circ(x,y,r,CL); d.circ(x-1,y-1,r-2,'#FFFFFF')}
  for(let x=23;x<64;x+=4) d.px(x,36+(x%3),CL3);
  d.dither(23,34,41,2,CL2,CL3);
  // 왼쪽 눈 바위 턱 (동물 자리)
  d.poly([[0,22],[8,20],[18,23],[24,28],[26,40],[0,40]],'#A8B4CC'); d.poly([[0,22],[8,20],[18,23],[24,28],[24,31],[18,26],[8,23],[0,25]],'#FFFFFF'); for(let i=0;i<10;i++) d.px(d.ri(1,22),d.ri(28,39),'#98A4BC'); d.line(0,22,8,20,'#D8E4F4'); d.line(8,20,18,23,'#D8E4F4'); d.line(18,23,24,28,'#C8D4EC');
  d.poly([[20,31],[26,29],[27,40],[21,40]],'#8A94AC'); d.poly([[22,32],[26,30],[26,35]],'#A8B4C8');
  for(const [x,y] of [[4,30],[13,36],[9,26],[2,37]]){d.px(x,y,'#D8E4F4'); d.px(x+1,y,'#D8E4F4')}
  // 발자국 (눈)
  for(const [x,y] of [[3,34],[6,33],[9,35]]) d.px(x,y,'#B8C8E0');
  // 반짝임
  twinkle(d,40,20,'#FFFFFF','#FFFFFF'); twinkle(d,58,34,'#E8EEF8','#FFFFFF');
};

C['any:c1-2']=d=>{ // 기차 창가 — 창밖으로 휙휙 지나가는 들판
  // 기차 벽
  d.rect(0,0,64,40,'#E8D8C0');
  d.rect(0,0,64,3,'#C8A878'); d.hline(0,63,3,'#A88858');
  // 큰 창 (가운데~오른쪽)
  const WX=24, WY=5, WW=38, WH=21;
  d.rect(WX-2,WY-2,WW+4,WH+4,'#8A6A4A'); d.rect(WX-1,WY-1,WW+2,WH+2,'#C8C8D0');
  d.grad(WX,WY,WW,9,['#78C4F0','#90D0F4','#A8DCF6']);
  cloud(d,WX+3,WY+1,8,'#FFFFFF'); cloud(d,WX+24,WY+3,6,'#FFFFFF');
  d.poly([[WX,WY+12],[WX+10,WY+7],[WX+20,WY+11],[WX+30,WY+6],[WX+WW-1,WY+10],[WX+WW-1,WY+14],[WX,WY+14]],'#7AA8C8'); // 먼 산
  d.rect(WX,WY+12,WW,WH-12,'#8ACB5E');
  d.rect(WX,WY+15,WW,3,'#F2D060'); // 유채밭 띠
  d.rect(WX,WY+18,WW,3,'#6AB04A');
  for(let x=WX;x<WX+WW;x+=7){d.vline(x+2,WY+8,WY+15,'#6A5A4A'); d.px(x+1,WY+8,'#6A5A4A'); d.px(x+3,WY+8,'#6A5A4A')} // 전봇대
  d.line(WX,WY+9,WX+WW-1,WY+9,'#6A5A4A');
  // 작은 집과 나무
  d.rect(WX+12,WY+11,4,3,'#FFFFFF'); d.poly([[WX+11,WY+11],[WX+14,WY+8],[WX+17,WY+11]],'#E86A5A');
  d.circ(WX+28,WY+12,2,'#4A9A4A'); d.circ(WX+33,WY+13,1.5,'#4A9A4A');
  // 속도선
  for(const [x,y,l] of [[WX+2,WY+19,6],[WX+14,WY+17,8],[WX+26,WY+19,7],[WX+20,WY+20,5]]) d.hline(x,x+l,y,'#A8DC88');
  // 창 반사
  d.line(WX+1,WY+6,WX+6,WY+1,'#FFFFFF'); d.line(WX+2,WY+8,WX+8,WY+2,'#E8F6FF');
  d.vline(WX+WW/2,WY-1,WY+WH,'#C8C8D0'); // 창틀 가운데
  // 창 아래 작은 탁자와 음료·표
  d.rect(26,28,34,2,'#A87448'); d.hline(26,59,28,'#C8945C'); d.rect(40,30,4,6,'#8A6A4A');
  d.rect(30,24,3,4,'#F8F8F8'); d.rect(30,24,3,1,'#E86A5A'); d.vline(32,22,24,'#E86A5A'); // 컵
  d.rect(48,26,7,2,'#FFE070'); d.px(50,26,'#E86A5A'); // 표
  d.circ(56,26,1.5,'#F08A3A'); // 귤
  // 짐 선반 (왼쪽 위)
  d.rect(0,8,20,2,'#9A9AA8'); for(let x=1;x<20;x+=3) d.vline(x,10,11,'#9A9AA8');
  d.rect(3,4,9,4,'#E86A6A'); d.hline(3,11,4,'#F89A9A'); d.rect(6,3,3,1,'#8A4A4A');
  // 의자 등받이 오른쪽 끝, 바닥
  d.rect(0,30,64,10,'#5A6AA8'); d.hline(0,63,30,'#4A5888'); for(let x=2;x<64;x+=6) d.px(x,34,'#6A7AB8'); for(let x=5;x<64;x+=6) d.px(x,37,'#6A7AB8');
  d.rect(60,14,4,16,'#4A5888'); d.rect(60,14,4,2,'#6A7AB8');
};

C['any:c1-3']=d=>{ // 오래된 성 — 노을 속 성, 꼭대기 깃발
  d.rect(0,28,64,12,'#9A6078'); d.grad(0,0,64,30,['#F8B060','#F8A058','#F48A58','#EC7860','#D86A70','#B86080']);
  d.circ(14,18,5,'#FFE0A0'); d.circ(14,18,3,'#FFF0C8');
  d.hline(2,24,9,'#FFD090'); d.hline(6,20,11,'#FFD090'); d.hline(36,52,5,'#FFC890');
  // 새
  d.stamp(26,6,['b.b','.b.'],{b:'#6A3A50'}); d.stamp(31,9,['b.b','.b.'],{b:'#6A3A50'});
  // 언덕
  d.ell(44,36,30,10,'#7A4A6A'); d.ell(8,40,20,8,'#8A5A70');
  // 성 (보라 실루엣)
  const K='#5A3A60', K2='#4A2E50', K3='#704C78', WN='#FFD070';
  d.rect(34,18,24,12,K); // 성벽
  for(let x=34;x<58;x+=3) d.rect(x,16,2,2,K);
  d.rect(30,12,6,18,K3); d.poly([[29,12],[33,5],[37,12]],K2); for(let x=30;x<36;x+=2) d.px(x,12,K2);
  d.rect(56,12,6,18,K3); d.poly([[55,12],[59,5],[63,12]],K2);
  d.rect(41,6,10,14,K3); d.poly([[40,6],[46,-2],[52,6]],K2); // 큰 탑
  d.rect(44,26,4,4,K2); d.ell(46,26,2,2,K2); // 문
  for(const [x,y] of [[32,16],[32,21],[58,16],[58,21],[45,10],[45,15],[38,22],[52,22]]){d.rect(x,y,2,3,WN)}
  d.px(46,10,WN);
  // 꼭대기 깃발 펄럭
  d.vline(46,-1,3,'#3A2A3A'); d.stamp(47,0,['fff.','ffff','ff..'],{f:'#F8E070'});
  // 손 흔드는 작은 자국 (탑 창문 옆 반짝)
  twinkle(d,50,9,'#FFF0C8');
  // 길
  d.poly([[18,40],[26,40],[46,30],[44,30]],'#C88A70'); d.line(26,40,46,30,'#A06A60');
  // 들판 (동물 자리)
  d.rect(0,33,30,7,'#8A5A70'); d.ell(8,34,14,3,'#8A5A70'); d.hline(0,63,39,'#6A4060');
  for(const [x,y] of [[2,35],[24,36],[10,38],[60,35],[54,38]]){d.px(x,y,'#B07A8A')}
};

C['any:c1-4']=d=>{ // 해바라기 밭 — 해바라기들이 다 왼쪽(동물)을 쳐다봄
  d.grad(0,0,64,16,['#48A8F0','#62B6F2','#7EC4F4','#9CD2F4']);
  cloud(d,30,3,9,'#FFFFFF'); d.circ(56,5,3,'#FFF4A0'); d.circ(56,5,2,'#FFFFFF');
  d.ell(32,18,40,5,'#7AB850'); d.rect(0,18,64,22,'#7AB850');
  // 먼 해바라기 줄 (작은 노란 점)
  for(let x=22;x<64;x+=3){d.px(x,16+(x%2),'#F8C820'); d.px(x+1,16+(x%2),'#F8C820'); d.px(x,17+(x%2),'#8A5A2A')}
  for(let x=24;x<64;x+=4){d.circ(x,20,1,'#F8C820'); d.px(x-1,20,'#7A4A20')}
  // 큰 해바라기 (얼굴이 왼쪽을 봄)
  const Y='#FFD028', Y2='#F0A818', BR='#7A4A20', BR2='#5A3418', ST='#4A9A3A', LF='#5AB04A';
  const SF=(x,y,r,h)=>{
    d.vline(x,y,y+h,ST); d.vline(x+1,y+2,y+h,'#3A8030'); d.poly([[x,y+5],[x-4,y+3],[x-2,y+7]],LF); d.poly([[x+1,y+8],[x+5,y+6],[x+3,y+10]],LF);
    d.circ(x-1,y,r*1.25,'#D88A18'); d.circ(x-1,y,r*0.95,Y2); for(let a=0;a<10;a++){const t=a*Math.PI/5; d.circ(x-1+Math.cos(t)*r*0.92,y+Math.sin(t)*r*0.92,r*0.3,Y)} d.circ(x-1,y,r*0.62,Y2);
    d.circ(x-1,y,r*0.55,BR); d.circ(x-1.5,y-0.5,r*0.3,BR2);
    // 왼쪽을 보는 얼굴
    const ex=Math.round(x-1-r*0.3), ey=Math.round(y-1);
    d.px(ex,ey,'#2A1A10'); d.px(ex+2,ey,'#2A1A10'); d.px(ex,ey-1,'#FFFFFF');
    d.px(ex-1,ey+1,'#F88A8A'); d.px(ex+3,ey+1,'#F88A8A'); d.px(ex+1,ey+2,'#2A1A10');
  };
  SF(30,21,4,19); SF(41,16,5,24); SF(54,19,5,21); SF(61,26,4,14); SF(47,29,3,11);
  // 앞쪽 풀
  for(let x=24;x<64;x+=2) d.vline(x,37+(x%3),39,'#5AA040');
  for(let i=0;i<14;i++) d.px(d.ri(0,22),d.ri(24,39),'#6AA846');
  // 하트 (인기 많아)
  d.stamp(23,8,['.r.r.','rrrrr','.rrr.','..r..'],{r:'#F06A8A'}); d.stamp(18,13,['r.r','.r.'],{r:'#F06A8A'});
  // 벌
  d.stamp(36,7,['.ww','yky','.k.'].slice(0,2),{w:'#FFFFFF',y:'#F8C820',k:'#2A2A2A'});
};

C['any:c1-5']=d=>{ // 바닷가 관람차 — 노을 바다, 큰 관람차, 꼭대기 반짝
  d.grad(0,0,64,22,['#4A5AA0','#6A64B0','#A070B4','#E08AA8','#F8A890','#FCC890']);
  starsAt(d,6,0,63,0,4,['#E8E0FF']);
  d.circ(14,21,4,'#FFE8A8');
  // 바다
  d.rect(0,22,64,8,'#5A6AB0'); d.hline(0,63,22,'#8A7ABC');
  for(let y=23;y<30;y+=2) for(let x=(y*5)%7;x<64;x+=7) d.hline(x,x+2,y,'#7A84C4');
  d.vline(14,23,29,'#F8C890'); d.vline(13,24,28,'#E8A890'); d.vline(15,24,28,'#E8A890'); // 해 반사
  // 부두 (나무 바닥)
  d.rect(0,30,64,10,'#B07A58'); d.hline(0,63,30,'#D09A70'); for(let y=33;y<40;y+=3) d.hline(0,63,y,'#946248');
  for(let x=4;x<64;x+=11) d.vline(x,31,32,'#946248');
  // 관람차
  const cx=45, cy=15, r=12, F='#F4F0FF', F2='#C8C0E0';
  d.line(cx,cy,cx-7,30,F2); d.line(cx,cy,cx+7,30,F2); d.line(cx+1,cy,cx+8,30,'#9890B8');
  d.ring(cx,cy,r,F); d.ring(cx,cy,r-1,F2);
  for(let a=0;a<8;a++){const t=a*Math.PI/4; d.line(cx,cy,cx+Math.cos(t)*r,cy+Math.sin(t)*r,F2)}
  d.circ(cx,cy,1.5,'#FFE070');
  const cab=['#F06A7A','#FFC040','#5AC0E0','#7AD07A','#C080E0','#F890B0','#F8A040','#60A0F0'];
  for(let a=0;a<8;a++){const t=a*Math.PI/4-Math.PI/2, x=Math.round(cx+Math.cos(t)*r), y=Math.round(cy+Math.sin(t)*r); d.rect(x-1,y+1,3,3,cab[a]); d.px(x,y+1,'#FFF4D0'); d.px(x,y,'#5A5A70')}
  // 꼭대기 소원 반짝
  twinkle(d,cx+4,cy-r-1,'#FFE070','#FFFFFF'); d.px(cx-4,cy-r+1,'#FFE070');
  // 전구 점
  for(let a=0;a<16;a++){const t=a*Math.PI/8; if(a%2) d.px(Math.round(cx+Math.cos(t)*(r-0.5)),Math.round(cy+Math.sin(t)*(r-0.5)),'#FFE070')}
  // 매표소
  d.rect(56,25,7,6,'#F8F0E0'); d.poly([[55,25],[59,22],[64,25]],'#F06A7A'); d.rect(58,27,3,2,'#5A6AB0');
  // 갈매기
  d.stamp(24,9,['w.w','.w.'],{w:'#FFFFFF'}); d.stamp(29,6,['w.w','.w.'],{w:'#FFFFFF'});
};

C['any:c1-6']=d=>{ // 야시장 — 줄 전구, 포장마차, 김 나는 꼬치
  d.grad(0,0,64,20,['#24183A','#2E1E48','#3A2656','#4A3064']);
  starsAt(d,8,0,63,0,6,['#C8B8F0']);
  // 뒤 건물 실루엣
  d.rect(0,8,14,14,'#1E1630'); d.rect(48,6,16,16,'#1E1630'); d.rect(14,12,8,10,'#241A38');
  for(const [x,y] of [[3,11],[8,14],[51,9],[58,12],[54,16]]) d.px(x,y,'#F8C060');
  // 줄 전구 두 줄
  const bulbs=['#FF6A6A','#FFD040','#6AE0A0','#6AB0FF','#F890D0'];
  for(let x=0;x<64;x++){const y=Math.round(4+Math.sin(x/64*Math.PI)*5); d.px(x,y,'#3A3040'); if(x%4===1){d.px(x,y+1,bulbs[(x>>2)%5]); d.px(x,y+2,bulbs[(x>>2)%5])}}
  // 포장마차 1 (주황 천막)
  const st=(x,w,c1,c2,food)=>{
    for(let i=0;i<w;i++) d.vline(x+i,14,17,Math.floor(i/3)%2?c1:c2);
    for(let i=0;i<w;i+=3) d.px(x+i+1,18,c2);
    d.rect(x,18,w,8,'#3A2A3A'); d.rect(x+1,19,w-2,6,'#FFD890'); // 안쪽 불빛
    d.rect(x,26,w,5,'#8A5A3A'); d.hline(x,x+w-1,26,'#B07A50'); d.vline(x,14,31,'#5A3A2A'); d.vline(x+w-1,14,31,'#5A3A2A');
    food(x,w);
  };
  st(25,18,'#F07A3A','#FFFFFF',(x,w)=>{ // 어묵 꼬치 냄비
    d.rect(x+3,22,12,4,'#A8A8B8'); d.hline(x+3,x+14,22,'#C8C8D8');
    for(let i=0;i<5;i++){const sx=x+4+i*2.3; d.vline(sx,17,22,'#E8D0A0'); d.rect(sx,19+(i%2),2,3,'#F0C070'); d.px(sx,19+(i%2),'#F8E0A0')}
  });
  st(45,19,'#E04A5A','#FFE070',(x,w)=>{ // 떡꼬치·붕어빵
    for(let i=0;i<4;i++){d.vline(x+3+i*4,20,25,'#E8D0A0'); for(let j=0;j<3;j++) d.px(x+3+i*4,20+j,'#E04A3A')}
    d.ell(x+15,23,2,1,'#E8A848');
  });
  // 홍등
  for(const [x,y] of [[24,12],[44,12],[63,12]]){d.ell(x,y,1.5,2,'#F04A4A'); d.px(x,y-1,'#FF8A8A'); d.px(x,y+3,'#F8D040')}
  // 김 (모락모락)
  const SM='#E8E0F0';
  d.stamp(30,9,['.s..','s...','.s..','..s.','.s..'],{s:SM}); d.stamp(36,8,['..s','.s.','..s','.s.','s..'],{s:SM}); d.stamp(53,9,['.s','s.','.s','s.'],{s:SM});
  // 바닥
  d.rect(0,31,64,9,'#4A3E58'); d.rect(0,22,25,9,'#3A2E4A'); d.hline(0,24,22,'#4A3E58');
  d.dither(25,31,39,2,'#7A5A58','#4A3E58'); // 불빛 반사
  for(let x=2;x<64;x+=8) d.hline(x,x+3,36,'#58486A');
  // 의자
  d.rect(56,34,5,1,'#F07A3A'); d.vline(57,35,38,'#5A3A2A'); d.vline(60,35,38,'#5A3A2A');
  // 냄새 (꼬불선) 왼쪽으로 흐름
  d.line(22,16,19,15,'#B8A8D0'); d.px(18,16,'#B8A8D0'); d.px(17,17,'#B8A8D0');
};

C['any:c1-7']=d=>{ // 깊은 숲 캠핑 — 모닥불, 텐트, 탄 마시멜로
  d.grad(0,0,64,24,['#0E1E2A','#122838','#163040','#1C3A48','#22444E']);
  starsAt(d,10,10,60,0,7,['#E8F0D0','#B0C8D0']);
  // 뒤 소나무 실루엣
  const pine=(x,y,h,c)=>{for(let i=0;i<h;i++){const w=Math.floor(i*0.45)+1; d.hline(x-w,x+w,y+i,c)} };
  for(const [x,y,h] of [[2,6,20],[10,3,22],[20,8,16],[34,2,22],[44,6,18],[56,1,24],[63,7,18]]) pine(x,y,h,'#0A2A24');
  for(const [x,y,h] of [[6,12,16],[27,10,16],[50,11,15],[60,14,12]]) pine(x,y,h,'#123A30');
  // 땅
  d.rect(0,24,64,16,'#2A4A32'); d.hline(0,63,24,'#335A3A');
  for(let i=0;i<20;i++) d.px(d.ri(0,63),d.ri(26,39),'#234028');
  // 불빛 원
  d.ell(36,31,14,6,'#4A5A34'); d.ell(36,31,10,4,'#5E6A3A'); d.ell(36,31,6,2,'#76703E');
  // 텐트 (오른쪽)
  d.poly([[46,30],[55,14],[64,30]],'#F08A3A'); d.poly([[55,14],[64,30],[59,30]],'#C86A28'); d.poly([[53,30],[55,22],[57,30]],'#3A2018');
  d.line(55,14,46,30,'#FFB060'); d.vline(55,12,14,'#8A6A4A');
  // 통나무 의자
  d.rect(24,32,8,3,'#8A5A34'); d.hline(24,31,32,'#A87448'); d.ell(24,33,1,1,'#C8945C');
  // 모닥불
  d.line(32,31,40,28,'#6A4024'); d.line(32,28,40,31,'#5A341C');
  d.poly([[32,29],[34,22],[36,26],[37,19],[39,25],[40,29]],'#F06A2A');
  d.poly([[33,29],[35,24],[36,27],[37,22],[38,26],[39,29]],'#F8B030');
  d.poly([[35,29],[36,26],[37,25],[38,29]],'#FFF0A0');
  for(const [x,y] of [[34,17],[39,15],[36,13],[41,19]]) d.px(x,y,'#F8B030'); // 불티
  // 마시멜로 꼬치 (하나는 탐)
  d.line(28,23,33,20,'#B08A60'); d.rect(33,19,2,2,'#FFFFFF'); d.px(34,19,'#F0D0A0');
  d.line(44,25,40,21,'#B08A60'); d.rect(38,20,2,2,'#2A2020'); d.px(38,19,'#5A5A5A'); d.px(37,18,'#7A7A7A'); // 탄 것 + 연기
  // 반딧불
  for(const [x,y] of [[8,18],[18,14],[48,10],[60,34],[14,32]]){d.px(x,y,'#E0F870')}
  // 버섯
  d.stamp(4,36,['rrr','.w.'],{r:'#E05A4A',w:'#F0E8D0'}); d.stamp(58,36,['rr','w.'],{r:'#E05A4A',w:'#F0E8D0'});
};

// ───────── 아주 먼 곳 엽서 ─────────
C['any:c2-0']=d=>{ // 오로라 마을 — 춤추는 오로라, 눈 덮인 오두막
  d.grad(0,0,64,26,['#0A1028','#0E1834','#122040','#16284A','#1C3052']);
  starsAt(d,22,0,63,0,20,['#FFFFFF','#C8E8FF','#E0FFE8']);
  // 오로라 커튼 (물결)
  for(let x=0;x<64;x++){
    const y1=Math.round(6+Math.sin(x/7)*3+Math.sin(x/3.1)*1), h=6+Math.round(Math.sin(x/5+1)*2);
    for(let j=0;j<h;j++){const c=j<2?'#B0FFD0':j<h-2?'#5AE0A0':'#2A8A78'; if(!(j>=h-2&&(x+j)%2)) d.px(x,y1+j,c)}
    const y2=Math.round(14+Math.sin(x/6+2)*2);
    if(x>18){for(let j=0;j<3;j++) if((x+j)%2===0||j===0) d.px(x,y2+j,j?'#8A5AC8':'#E890E0')}
  }
  // 먼 산
  d.poly([[0,24],[10,17],[20,23],[34,16],[48,22],[58,17],[64,20],[64,26],[0,26]],'#2A3A5A');
  d.poly([[34,16],[38,19],[30,19]],'#C8D8F0'); d.poly([[58,17],[61,19],[55,19]],'#C8D8F0');
  // 눈밭
  d.rect(0,25,64,15,'#E8F0FA'); d.hline(0,63,25,'#FFFFFF');
  d.hline(0,63,27,'#D8E4F4');
  d.ell(40,33,18,3,'#C8E8D8'); d.ell(40,33,14,2,'#D8F4E4'); // 오로라 빛 반사
  // 소나무
  const pine=(x,y,h)=>{for(let i=0;i<h;i++){const w=Math.floor(i*0.4); d.hline(x-w,x+w,y+i,'#1A4A44')} for(let i=0;i<h;i+=3) d.px(x-Math.floor(i*0.4),y+i,'#FFFFFF'); d.vline(x,y+h,y+h+1,'#4A3A3A')};
  pine(26,17,9); pine(61,15,11);
  // 오두막 두 채
  const hut=(x,y,w,c)=>{d.rect(x,y,w,7,c); d.poly([[x-2,y],[x+w/2,y-5],[x+w+1,y]],'#FFFFFF'); d.line(x-2,y,x+w/2,y-5,'#D0DCF0'); d.rect(x+2,y+2,3,3,'#FFD878'); d.px(x+3,y+3,'#FFF0B0'); d.rect(x+w-4,y+3,2,4,'#4A2E2A')};
  hut(34,23,11,'#A0503A'); hut(50,22,9,'#5A6AA0');
  d.ell(37,31,3,1,'#F8E8B0'); // 창빛
  d.vline(41,13,17,'#5A4A4A'); d.stamp(40,10,['.s.','s.s','.s.'],{s:'#C8D8E8'}); // 굴뚝 연기
  d.rect(41,16,2,2,'#5A4A4A');
  // 썰매 자국
  d.line(28,39,46,30,'#C8D4EA'); d.line(31,39,49,30,'#C8D4EA');
};

C['any:c2-1']=d=>{ // 고래가 지나는 바다 — 바닷속, 노래하는 큰 고래
  d.grad(0,0,64,40,['#3AA8D8','#2E94CC','#2480BC','#1C6CAA','#165A98','#124A84']);
  // 빛줄기
  for(const x of [8,22,38,54]){d.line(x,0,x+6,20,'#58BCE4'); d.line(x+1,0,x+7,20,'#58BCE4')}
  d.hline(0,63,0,'#9ADCF4'); for(let x=0;x<64;x+=6) d.hline(x,x+2,1,'#7ACCEE');
  // 고래 (오른쪽, 크게)
  const B='#3A5A9A', B2='#2A4478', BL='#C8DCF0', BL2='#A8C0E0';
  d.ell(44,16,17,8,B);
  d.poly([[26,14],[18,8],[20,14],[17,20],[27,18]],B); // 꼬리
  d.poly([[18,8],[21,13],[20,9]],B2);
  d.ell(47,21,13,4,BL); for(let x=36;x<60;x+=3) d.line(x,19,x+1,24,BL2); // 배 주름
  d.ell(44,13,15,4,'#4A6AAA'); d.ell(44,16,17,8,null||'#3A5A9A'); // (몸 다시)
  d.ell(47,21,13,4,BL); for(let x=36;x<60;x+=3) d.line(x,19,x+1,24,BL2);
  d.ell(42,11,10,2,'#5A7ABA');
  d.poly([[44,22],[40,29],[48,24]],B2); // 지느러미
  d.circ(55,15,1.5,'#1A2A48'); d.px(55,14,'#FFFFFF'); d.px(57,18,'#F08AA8'); d.px(58,18,'#F08AA8'); // 눈, 볼
  d.line(58,20,61,19,'#2A4478');
  // 노래 음표
  d.stamp(57,4,['..nn','..n.','..n.','nnn.','nn..'],{n:'#FFF2A0'}); d.stamp(50,2,['.n','.n','nn'],{n:'#FFF2A0'}); d.stamp(30,6,['nnn','n.n','n.n','nn.'].slice(0,3),{n:'#FFF2A0'});
  // 거품
  for(const [x,y,r] of [[60,10,1],[62,6,1.2],[24,24,1],[27,21,0.7]]) d.ring(x,y,r,'#BFE8FA');
  for(const [x,y] of [[20,4],[14,14],[61,2]]) d.px(x,y,'#BFE8FA');
  // 바닥 모래와 해초
  d.ell(32,40,40,6,'#D8C890'); d.rect(0,35,64,5,'#D8C890'); d.hline(0,63,35,'#C8B478'); d.ell(32,40,40,6,'#D8C890');
  for(let i=0;i<14;i++) d.px(d.ri(0,63),d.ri(36,39),'#C0AC70');
  const weed=(x,h,c)=>{for(let i=0;i<h;i++) d.px(x+(Math.floor(i/2)%2),36-i,c)};
  weed(26,9,'#3AAA6A'); weed(28,6,'#2E8A58'); weed(52,10,'#3AAA6A'); weed(55,7,'#2E8A58'); weed(62,8,'#3AAA6A');
  d.stamp(40,33,['.p.p.','ppppp','.ppp.'],{p:'#F08AA0'}); d.stamp(46,35,['o.o','.o.'],{o:'#F8A848'}); // 산호, 불가사리
  // 작은 물고기
  d.stamp(4,8,['.yy.','yyyk','.yy.'],{y:'#FFD050',k:'#2A2A2A'}); d.stamp(10,11,['.yy.','yyyk','.yy.'],{y:'#FFD050',k:'#2A2A2A'});
};

C['any:c2-2']=d=>{ // 불의 섬 — 용암 뿜는 화산, 뜨거운 노을
  d.grad(0,0,64,24,['#3A1A3A','#6A2440','#A83A3A','#E0603A','#F8904A','#FCB868']);
  // 연기 구름
  for(const [x,y,r] of [[44,4,4],[50,3,3],[38,6,3],[56,6,3.5],[30,4,2.5]]){d.circ(x,y,r,'#5A3A4A'); d.circ(x-1,y-1,r-1.5,'#7A4A5A')}
  // 화산
  d.poly([[22,30],[38,10],[48,10],[64,26],[64,30]],'#4A2A2A'); d.poly([[43,10],[48,10],[64,26],[64,30],[52,30]],'#3A1E22');
  d.poly([[37,11],[38,10],[48,10],[49,11]],'#F8D040');
  // 분출
  d.poly([[39,10],[41,3],[43,7],[45,1],[46,8],[48,10]],'#F05A2A'); d.poly([[41,10],[43,5],[45,10]],'#F8D040');
  for(const [x,y,c] of [[36,2,'#F8A040'],[50,0,'#F05A2A'],[52,4,'#F8D040'],[34,6,'#F05A2A'],[48,3,'#F8D040']]){d.px(x,y,c); d.px(x+1,y,c)}
  // 용암 줄기
  d.line(41,11,36,19,'#F05A2A'); d.line(36,19,33,25,'#F05A2A'); d.line(42,11,37,19,'#F8A040'); d.line(37,19,34,25,'#F8A040');
  d.line(46,11,52,20,'#F05A2A'); d.line(52,20,55,27,'#F05A2A'); d.line(47,11,53,20,'#F8A040');
  d.px(33,26,'#F8D040'); d.px(55,28,'#F8D040');
  // 바다 (노을 반사)
  d.rect(0,24,64,6,'#5A3A6A'); for(let y=25;y<30;y+=2) for(let x=(y*3)%7;x<22;x+=7) d.hline(x,x+2,y,'#E07A5A');
  d.rect(0,22,22,2,'#E08A6A'); d.hline(0,21,24,'#7A4A7A');
  // 검은 모래 해변 (동물 자리)
  d.rect(0,30,64,10,'#4A3438'); d.hline(0,63,30,'#6A4A4A'); d.poly([[0,30],[20,28],[30,30]],'#4A3438');
  for(let i=0;i<22;i++) d.px(d.ri(0,63),d.ri(31,39),d.rnd()<.6?'#5E4448':'#3A282C');
  // 야자수 (오른쪽 앞)
  d.line(56,39,58,26,'#8A5A34'); d.line(57,39,59,26,'#6A4024');
  for(const [dx,dy] of [[-6,2],[6,1],[-4,-2],[5,-3],[0,-4]]) d.line(58,25,58+dx,25+dy,'#3A8A3A');
  d.px(58,26,'#7A4A2A'); d.px(59,27,'#7A4A2A');
  // 열기 아지랑이 + 땀방울 느낌 (너무 따뜻해)
  for(const [x,y] of [[26,33],[32,31],[44,34]]){d.px(x,y,'#E87A5A'); d.px(x+1,y-1,'#E87A5A'); d.px(x,y-2,'#E87A5A')}
  // 돌 위 달걀 (구워짐)
  d.ell(46,36,4,1,'#6A5A5A'); d.ell(46,35,2,1,'#FFFFFF'); d.px(46,35,'#F8C030');
};

C['any:c2-3']=d=>{ // 별이 쏟아지는 사막 — 별비, 모래언덕, 선인장
  d.rect(0,26,64,10,'#7A4A8A'); d.grad(0,0,64,28,['#1A1240','#24185A','#30206A','#422A78','#5A3884','#7A4A8A']);
  // 은하수 띠
  for(let x=0;x<64;x++){const y=Math.round(22-x*0.32); for(let j=-2;j<=2;j++) if((x+j)%2===0||Math.abs(j)<1) d.px(x,y+j,Math.abs(j)<1?'#8A6AB0':'#6A4A9A')}
  starsAt(d,60,0,63,0,24,['#FFFFFF','#FFF2C0','#D8C8FF','#FFFFFF']);
  for(const [x,y] of [[50,4],[24,6],[58,14],[36,12]]) twinkle(d,x,y,'#FFF2C0');
  // 별똥별
  for(const [x,y,l] of [[8,8,7],[30,20,6],[44,24,5],[20,2,5]]){d.line(x,y,x+l,y-Math.round(l/2),'#B8A8E8'); d.line(x,y,x+Math.round(l/2),y-Math.round(l/4),'#FFF2C0'); d.px(x,y,'#FFFFFF')}
  // 모래언덕
  d.ell(48,34,26,9,'#C88A60'); d.ell(52,32,18,6,'#D89A68'); d.poly([[38,30],[52,26],[60,28],[52,31]],'#E8B07A');
  d.ell(10,38,26,9,'#B07A5A'); d.rect(0,33,64,7,'#B07A5A');
  d.ell(44,38,24,4,'#C88A60');
  d.line(26,33,52,26,'#E8B07A');
  for(let x=0;x<64;x+=5) d.px(x,36+(x%3),'#9A6A4E');
  // 선인장
  const CA='#3A6A5A', CA2='#2A5048';
  d.rect(56,18,3,13,CA); d.rect(53,21,2,5,CA); d.hline(53,55,25,CA); d.rect(60,20,2,4,CA); d.hline(59,61,23,CA); d.vline(58,18,30,CA2);
  d.px(57,17,'#F890B0');
  // 별 세는 흔적: 모래에 누운 자국 + 손가락 점
  d.ell(38,35,4,1,'#9A6A4E'); 
  for(let i=0;i<5;i++) d.px(30+i*2,38,'#E8C090');
  // 떨어진 작은 별 하나
  d.stamp(46,33,['.y.','yYy','.y.'],{y:'#FFE070',Y:'#FFFFFF'});
};

C['any:c2-4']=d=>{ // 달 기지 — 동글동글 귀여운 지구, 돔 기지, 로켓
  d.rect(0,0,64,40,'#0A0A1E');
  starsAt(d,40,0,63,0,26,['#FFFFFF','#C8C8F0','#FFF2C0','#8888B0']);
  twinkle(d,8,6,'#C8C8F0'); twinkle(d,30,3,'#FFF2C0');
  // 지구 (오른쪽 위, 귀여운 얼굴)
  const EX=-14; d.circ(48+EX,10,8,'#3A8AE0'); d.circ(47+EX,9,7,'#4AA0F0');
  d.poly([[28,5],[32,3],[33,6],[30,8],[28,7]],'#5AC86A'); d.poly([[37,12],[40,9],[41,13],[38,16],[36,14]],'#5AC86A'); d.poly([[30,14],[32,15],[30,17]],'#5AC86A');
  d.hline(31,37,2,'#FFFFFF');
  d.ring(34,10,8.6,'#6AB8F8');
  d.stamp(31,9,['k...k','.....','pk.kp','..k..'].slice(0,1),{k:'#1A2A48',p:'#F890B0'}); d.rect(31,9,1,2,'#1A2A48'); d.rect(36,9,1,2,'#1A2A48'); d.px(33,12,'#1A2A48'); d.px(34,12,'#1A2A48'); d.px(30,11,'#F890B0'); d.px(37,11,'#F890B0'); // 얼굴
  d.px(29,5,'#FFFFFF');
  // 달 표면
  d.poly([[0,26],[14,24],[30,27],[46,24],[64,26],[64,40],[0,40]],'#A8A8B8');
  d.line(0,26,14,24,'#C8C8D4'); d.line(14,24,30,27,'#C8C8D4'); d.line(30,27,46,24,'#C8C8D4'); d.line(46,24,64,26,'#C8C8D4');
  d.dither(0,34,64,6,'#A8A8B8','#9898A8');
  for(const [x,y,rx] of [[30,33,4],[56,36,3],[4,30,2],[40,29,2]]){d.ell(x,y,rx,1,'#7A7A8C'); d.hline(x-rx+1,x+rx-1,y-1,'#C8C8D4')}
  // 돔 기지
  d.rect(30,22,16,5,'#E8E8F0'); d.hline(30,45,22,'#FFFFFF'); d.hline(30,45,26,'#B8B8C8');
  d.ell(38,22,7,6,'#9ADCF8'); d.rect(30,22,16,5,'#E8E8F0'); d.hline(30,45,26,'#B8B8C8');
  d.ell(36,19,2,2,'#D8F4FF'); d.ring(38,22,7,'#C8C8D8'); d.rect(30,23,16,4,'#E8E8F0'); d.hline(30,45,26,'#B8B8C8');
  d.vline(38,16,18,'#78A8C8'); d.rect(34,23,2,2,'#FFD040'); d.rect(41,23,2,2,'#FFD040');
  d.rect(46,23,4,3,'#C8C8D8'); // 통로
  // 로켓
  d.rect(52,12,5,13,'#F4F4F8'); d.poly([[52,12],[54.5,6],[57,12]],'#F05A5A'); d.vline(56,12,24,'#C8C8D8');
  d.circ(54,15,1,'#4AA0F0'); d.poly([[50,25],[52,20],[52,25]],'#F05A5A'); d.poly([[59,25],[57,20],[57,25]],'#F05A5A');
  d.rect(53,25,3,1,'#5A5A6A');
  // 깃발
  d.vline(26,18,27,'#D8D8E0'); d.stamp(27,18,['rrrr','ryyr','rrrr'],{r:'#F05A8A',y:'#FFE070'});
  // 발자국
  for(const [x,y] of [[22,36],[25,34],[28,36],[60,32]]){d.px(x,y,'#7A7A8C'); d.px(x+1,y,'#7A7A8C')}
};

C['any:c2-5']=d=>{ // 구름 과자 나라 — 솜사탕 구름, 막대사탕 나무, 한 입 베어 문 구름
  d.grad(0,0,64,26,['#C8A8F0','#D8B0F0','#F0B8E8','#FFC8E0','#FFD8E4']);
  // 무지개
  const rb=['#FF8AA0','#FFC070','#FFF090','#9AE8A8','#8AC8FF'];
  rb.forEach((c,i)=>d.ring(46,26,15-i,c));
  d.ring(46,26,14.5,'#FFB090');
  // 별사탕 반짝
  for(const [x,y,c] of [[8,4,'#FFFFFF'],[22,8,'#FFF090'],[60,4,'#FFFFFF']]) twinkle(d,x,y,c);
  // 뒤 솜사탕 구름들
  const puff=(x,y,r,c,c2)=>{d.circ(x,y+1,r,c2); d.circ(x,y,r,c); d.circ(x-r*0.3,y-r*0.3,r*0.45,'#FFFFFF')};
  for(const [x,y,r] of [[30,24,5],[40,22,6],[52,23,5],[62,24,5]]) puff(x,y,r,'#A8DCF8','#88C4EC');
  // 막대사탕 나무
  const lolly=(x,y,r,c,c2)=>{d.vline(x,y,y+11,'#FFFFFF'); d.vline(x+1,y+r,y+11,'#E8D8E8'); d.circ(x,y,r,c); for(let a=0;a<r;a+=1.5) d.ring(x,y,a,a%3<1.5?c2:c); d.px(x-1,y-2,'#FFFFFF')};
  lolly(36,13,4,'#FF7AA8','#FFFFFF'); lolly(58,14,3,'#7AD8B0','#FFFFFF');
  // 앞 분홍 솜사탕 땅
  d.rect(0,28,64,12,'#FFB0D0');
  for(const [x,y,r] of [[2,28,5],[12,27,6],[22,28,5],[33,29,6],[44,28,6],[55,29,6],[64,28,5]]) puff(x,y,r,'#FFB0D0','#F090B8');
  d.rect(0,31,64,9,'#FFB0D0'); d.dither(0,36,64,4,'#FFB0D0','#FFC4DC');
  // 한 입 베어 문 구름 (오른쪽 앞)
  d.circ(48,24,4,'#FFFFFF'); d.circ(52,23,4,'#FFFFFF'); d.circ(50,26,4,'#F8E8F4'); d.circ(55,22,2,'#FFB0D0'); d.circ(56,24,2,'#FFB0D0'); // 베어 문 자국
  d.px(53,22,'#F090B8'); d.px(54,25,'#F090B8');
  // 스프링클
  const spr=['#FF6A8A','#6AC8FF','#FFE060','#8AE08A','#C08AF0'];
  for(let i=0;i<18;i++){const x=d.ri(24,63), y=d.ri(30,39); d.px(x,y,spr[i%5]); d.px(x+1,y+(i%2?1:0),spr[i%5])}
  // 막대 솜사탕 하나 꽂혀 있음
  d.vline(28,30,37,'#F8F0E0'); d.circ(28,28,3,'#C8A8F8'); d.circ(27,27,1,'#E8D8FF');
};

C['any:c2-6']=d=>{ // 반짝이는 대도시 — 하늘까지 닿는 빌딩, 탐조등, 높은 탑
  d.grad(0,0,64,30,['#120A30','#1E0E44','#2E1458','#44186A','#5E2078','#7A2A80']);
  // 탐조등
  d.poly([[38,30],[22,0],[27,0]],'#3A2A6A'); d.poly([[50,30],[62,0],[58,0]],'#3A2A6A');
  starsAt(d,10,0,63,0,6,['#E8D8FF']);
  // 가운데 탑 (🗼 같은 높은 탑)
  const T='#E86AA8', T2='#B04A88';
  d.poly([[40,30],[44,4],[46,4],[50,30]],T2); d.poly([[42,30],[44.5,4],[45.5,4],[48,30]],T);
  d.vline(45,0,4,'#FFE070'); d.px(45,0,'#FFFFFF');
  d.rect(42,12,7,2,'#FFE070'); d.rect(41,20,9,2,'#FFE070');
  for(let y=6;y<30;y+=3) d.px(45,y,'#FFF0B0');
  // 뒤 빌딩 (하늘 끝까지)
  const bld=(x,y,w,c,win,c2)=>{d.rect(x,y,w,40-y,c); d.vline(x,y,39,c2); for(let yy=y+2;yy<34;yy+=3) for(let xx=x+1;xx<x+w-1;xx+=2) if(d.rnd()<.7) d.px(xx,yy,win)};
  bld(26,-1,8,'#2A1E5A','#6AE0F8','#3E2E7A'); bld(34,8,6,'#241A4E','#F8D070','#382A6A');
  bld(51,-1,7,'#2A1E5A','#F890D0','#3E2E7A'); bld(58,6,6,'#221A48','#6AE0F8','#36286A');
  bld(0,4,7,'#221A48','#F8D070','#36286A'); bld(7,12,6,'#2A1E5A','#6AE0F8','#3E2E7A'); bld(13,2,7,'#241A4E','#F890D0','#382A6A'); bld(20,10,6,'#221A48','#F8D070','#36286A');
  // 빌딩 꼭대기 빨간 등
  for(const x of [29,54,16,3]) d.px(x,x===29||x===54?0:x===16?2:4,'#FF4A5A');
  // 네온 간판
  d.rect(35,16,4,8,'#1A0A2A'); d.vline(36,17,22,'#6AF8D8'); d.vline(37,17,22,'#F86AB8');
  d.rect(58,20,6,3,'#F86AB8'); d.hline(59,62,21,'#FFE0F0');
  // 거리
  d.rect(0,30,64,10,'#3A3050'); d.hline(0,63,30,'#5A4A78');
  d.dither(24,31,40,2,'#5A3A6A','#3A3050'); // 네온 반사
  for(let x=28;x<62;x+=4) d.rect(x,35,2,4,'#D8D0E8'); // 횡단보도
  // 길 잃을 뻔: 표지판 화살표 여러 개
  d.vline(25,23,34,'#8A8AA0'); d.stamp(23,21,['ggggg.','gggggg','ggggg.'],{g:'#3AB86A'}); d.stamp(23,25,['.bbbbb','bbbbbb','.bbbbb'],{b:'#3A7AD8'});
  d.stamp(25,22,['w'],{w:'#FFFFFF'}); d.stamp(25,26,['w'],{w:'#FFFFFF'});
  // 반짝임
  twinkle(d,46,9,'#FFF0B0'); twinkle(d,31,18,'#C8F8FF');
};

C['any:c2-7']=d=>{ // 남극 펭귄 마을 — 빙하, 이글루, 줄 서서 걷는 펭귄
  d.grad(0,0,64,18,['#9AD0F0','#AEDAF4','#C2E4F6','#D8EEF8']);
  d.circ(8,5,3,'#FFFBE0');
  cloud(d,30,3,9,'#FFFFFF');
  // 바다와 빙산
  d.rect(0,16,64,6,'#4A9AD0'); d.hline(0,63,16,'#3A80B8');
  for(let x=0;x<64;x+=7) d.hline(x,x+2,19,'#7AC0E8');
  d.poly([[33,17],[38,7],[42,9],[46,5],[53,17]],'#9ABCE0'); d.poly([[34,17],[38,8],[42,10],[46,6],[52,17]],'#F4FAFF'); d.poly([[46,6],[52,17],[47,17],[44,11]],'#C8E0F4'); d.line(38,8,42,10,'#FFFFFF');
  d.poly([[56,17],[59,12],[63,17]],'#E8F4FF'); d.poly([[59,12],[63,17],[61,17]],'#C8E0F4');
  // 눈 땅
  d.rect(0,21,64,19,'#EEF6FC'); d.hline(0,63,21,'#FFFFFF'); d.hline(0,63,22,'#D8E8F6');
  for(const [x,y] of [[4,30],[40,37],[58,27],[14,25]]) d.hline(x,x+3,y,'#D8E8F6');
  // 이글루
  const ig=(x,y,r)=>{d.ell(x,y,r+1,r*0.75+1,'#9ABCE0'); d.ell(x,y,r,r*0.75,'#FFFFFF'); d.rect(x-r,y,r*2+1,1,'#C8DCF0'); for(let j=y-Math.round(r*0.5);j<y;j+=2) d.hline(x-r+1,x+r-1,j,'#D8E8F6'); d.vline(x-2,y-r*0.7,y,'#D8E8F6'); d.vline(x+3,y-r*0.6,y,'#D8E8F6'); d.ell(x+r-1,y-1,2,2,'#FFFFFF'); d.rect(x+r-1,y-2,2,2,'#5A7AA0')};
  ig(56,27,7); ig(30,25,4);
  // 펭귄 줄 (오른쪽→왼쪽으로 걷는 중)
  const peng=(x,y,f)=>d.stamp(x,y,[
    '.kkk.',
    'kkwwk',
    'kwkwo',
    'kwww.',
    'kwwwk',
    'kwwwk',
    '.www.',
    f?'o..o.':'.oo..',
  ],{k:'#2A2E3E',w:'#FFFFFF',o:'#F8A030'});
  peng(26,29,0); peng(33,30,1); peng(40,31,0); peng(47,32,1);
  d.stamp(26,27,['.kkk'],{k:'#2A2E3E'});
  // 발자국 줄
  for(let x=22;x>=2;x-=3){d.px(x,37-((x/3)%2),'#B8CCE4'); d.px(x+1,37-((x/3)%2),'#B8CCE4')}
  // 깃발
  d.vline(52,30,38,'#8A6A4A'); d.stamp(53,30,['ff','fff','ff'],{f:'#F05A5A'});
  // 생선
  d.stamp(36,37,['.bb.b','bbbbb','.bb.b'],{b:'#7AA8D8'});
  // 눈송이
  for(const [x,y] of [[16,8],[24,14],[50,3],[62,9]]) d.px(x,y,'#FFFFFF');
};

export default {...S,...C};
