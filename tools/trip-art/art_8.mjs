// art_8: bear, owl, derek, pb, keroppi, spidey, patrick, shisa, ghost, rakun, mikael
const T=(d,x0,y0,x1,y1,r,c)=>{const n=Math.max(1,Math.ceil(Math.hypot(x1-x0,y1-y0)*2)); for(let i=0;i<=n;i++) d.circ(x0+(x1-x0)*i/n,y0+(y1-y0)*i/n,r,c)};
const spark=(d,x,y,c,c2)=>d.stamp(x-2,y-2,['..a..','..a..','aabaa','..a..','..a..'],{a:c,b:c2||'#FFFFFF'});
const plus=(d,x,y,c)=>d.stamp(x-1,y-1,['.a.','aaa','.a.'],{a:c});
const cloud=(d,x,y,w,c,sh)=>{d.ell(x+w/2,y+3,w/2,2,c); d.circ(x+w*.33,y+2,2.4,c); d.circ(x+w*.6,y+1,3,c); if(sh) d.hline(x+2,x+w-2,y+5,sh)};
const stars=(d,n,x0,y0,x1,y1,cols)=>{for(let i=0;i<n;i++) d.px(d.ri(x0,x1),d.ri(y0,y1),cols[i%cols.length])};
const pine=(d,x,y,h,c1,c2,tr)=>{d.vline(x,y-1,y,tr); const top=y-h; for(let yy=top;yy<y-1;yy++){const t=yy-top; let w=Math.round(t*.42)-((t%4===3)?1:0); if(w<0) w=0; d.hline(x-w,x+w,yy,c1); for(let i=0;i<=Math.floor(w/2);i++) d.px(x+w-i,yy,c2)}};
const zz=(d,x,y,c)=>d.stamp(x,y,['ccc','..c','.c.','c..','ccc'],{c});
const note=(d,x,y,c)=>d.stamp(x,y,['.cc','.c.','.c.','cc.','cc.'],{c});
export default {
// ---------- BEAR ----------
'bear:s0': d=>{ // 편의점 꿀 스틱
  const O='#5A3410', P='#F4ECD8', P2='#CDBE9A', H1='#C0700C', H2='#F2A81E', H3='#FFCF48', HL='#FFF4B8', R='#E0504A', W='#FFFFFF';
  T(d,4,28,8,24,2.6,P); T(d,24,8,28,4,2.6,P);                   // 투명 비닐 끝부분
  for(let i=0;i<4;i++){d.line(3+i,25+i,7+i,29+i,P2); }          // 접힌 자국
  for(let i=0;i<4;i++){d.line(25+i,1+i,29+i,5+i,P2); }
  for(let i=0;i<4;i++){d.line(3+i,25+i,7+i,29+i,P2)}
  T(d,8,24,24,8,3.2,H2);                                        // 꿀
  T(d,9.5,25.5,25.5,9.5,1.4,H1);                                // 아래 그늘
  T(d,6.8,22.6,22.6,6.8,1,H3); T(d,9,20,17,12,.5,HL);           // 빛
  for(let y=0;y<32;y++)for(let x=0;x<32;x++){const c=d.get(x,y); if(c&&c!==P&&c!==P2&&Math.abs(x-y)<=2) d.px(x,y,Math.abs(x-y)===2?'#B83A38':R)} // 가게 띠
  d.stamp(15,14,['.w.w.','wwwww','.www.','..w..'],{w:W});        // 하트 로고
  d.ell(4,30,1.5,1,H2);                                         // 똑 떨어진 꿀
  d.stamp(20,20,['...ww.ww.','...ww.ww.','.yykyyky.','kyykyykyk','.yykyyky.'],{w:'#DFF4FF',y:'#FFD43A',k:'#2A2420'}); // 따라온 벌
  d.outline(O);
  d.stamp(2,4,['..y..','..y..','yywyy','..y..','..y..'],{y:'#FFE070',w:W}); d.px(9,2,'#FFE070');
},
'bear:s1': d=>{ // 강에서 잡은 연어
  const O='#2A2A3A', B1='#4E6E7E', B2='#6E909E', S='#E87A68', S2='#F49A84', L='#FAD0BC', F='#C85C50', K='#22303A';
  d.poly([[2,20],[8,23],[2,29],[5,24]],F); d.poly([[1,19],[7,22],[3,24]],F); d.poly([[1,30],[8,24],[5,30]],F); // 꼬리
  for(let i=0;i<=40;i++){const t=i/40, x=6+20*t, y=23-13*t-4*Math.sin(Math.PI*t), r=1.6+4.6*Math.sin(Math.PI*(.12+.8*t)); d.circ(x,y,r,S)}
  for(let i=0;i<=40;i++){const t=i/40, x=6+20*t, y=23-13*t-4*Math.sin(Math.PI*t), r=1.6+4.6*Math.sin(Math.PI*(.12+.8*t)); d.circ(x-r*.45,y-r*.45,r*.55,B2); d.circ(x+r*.5,y+r*.5,r*.45,L)}
  for(let i=0;i<=40;i++){const t=i/40, x=6+20*t, y=23-13*t-4*Math.sin(Math.PI*t), r=1.6+4.6*Math.sin(Math.PI*(.12+.8*t)); d.circ(x-r*.6,y-r*.6,r*.3,B1)}
  for(let i=0;i<=30;i++){const t=.15+i/30*.6, x=6+20*t, y=23-13*t-4*Math.sin(Math.PI*t); d.px(x,y,S2)} // 옆줄
  d.poly([[12,12],[15,8],[18,10],[17,12]],F);                   // 등지느러미
  d.poly([[18,20],[20,24],[22,19]],F);                          // 배지느러미
  for(const [x,y] of [[11,15],[14,12],[17,10],[20,8],[9,18],[13,16]]) d.px(x,y,K);
  d.line(24,6,22,10,'#B04848');                                 // 아가미
  d.circ(26,5,1.2,'#FFFFFF'); d.px(26,5,K); d.px(27,4,'#FFFFFF');
  d.stamp(28,6,['oo','.o'],{o:'#9A3A3A'});                       // 벌린 입
  d.outline(O);
  for(const [x,y] of [[29,13],[30,15],[6,8],[4,11],[28,22]]) d.px(x,y,'#8ED0F0');
  d.stamp(2,5,['.b.','bwb','.b.'],{b:'#8ED0F0',w:'#E8F8FF'}); d.stamp(27,17,['.b.','bwb','.b.'],{b:'#8ED0F0',w:'#E8F8FF'});
},
'bear:s2': d=>{ // 끝없는 꿀단지
  const O='#4A2410', C1='#8A4626', C2='#B4643A', C3='#D88A55', H1='#D88A10', H2='#F6B020', H3='#FFD860', HL='#FFF4C0', W1='#8A5A30', W2='#C08A50';
  T(d,19,9,27,1,1.2,W2); d.line(20,9,27,2,W1);                  // 꿀 막대
  d.ell(16,21,12,9,C2); d.ell(19,23,9,7,C1); d.ell(14,20,9,7,C2); d.ell(11,18,4,4,C3); d.vline(8,16,22,'#E8A878');
  d.rect(9,9,14,4,C2); d.hline(9,22,12,C1); d.ell(16,9,9,2,C3); d.hline(8,24,10,C1);
  for(let x=6;x<=26;x+=4){d.stamp(x,22,['.h.','h.h','.h.'],{h:H1})} // 벌집 무늬 띠
  d.hline(5,27,20,C1); d.hline(5,27,26,C1);
  d.ell(16,8,8,3,H2); d.ell(15,6,5,2,H3); d.circ(13,6,1,HL);     // 넘치는 꿀
  for(const [x,l] of [[8,7],[11,13],[20,9],[24,5],[16,4]]){d.vline(x,8,8+l,H2); d.vline(x+1,8,8+l-1,H2); d.circ(x+.5,8+l,1.2,H2); d.px(x,9+l-2,H3)}
  d.vline(8,9,12,H3);
  d.T=0; T(d,22,6,26,2,1,W2);
  d.outline(O);
  spark(d,4,5,'#FFE070'); spark(d,28,12,'#FFE070'); d.px(3,14,'#FFE070'); d.px(29,26,'#FFE070'); d.px(27,8,'#FFFFFF');
},
'bear:c0': d=>{ // 뒷산 벌집 나무
  d.grad(0,0,64,26,['#D4F0D8','#C2E8C8','#AEDCB6','#9AD0A4']);
  for(let x=0;x<64;x+=5) d.circ(x+d.ri(0,2),d.ri(17,20),d.ri(4,6),'#7CB888');
  for(let x=2;x<64;x+=7) d.circ(x,d.ri(21,23),d.ri(3,5),'#68A876');
  d.rect(0,25,64,15,'#7EC062'); d.hline(0,63,25,'#94D070'); d.rect(0,33,64,7,'#6CAE52');
  for(let i=0;i<22;i++){const x=d.ri(0,63),y=d.ri(27,39); d.px(x,y,'#5A9A44'); d.px(x+1,y-1,'#5A9A44')}
  // 큰 나무
  d.rect(42,8,8,22,'#7A5232'); d.rect(47,8,3,22,'#5E3E24'); d.vline(44,12,26,'#946A44'); d.poly([[38,31],[42,24],[42,31]],'#7A5232'); d.poly([[50,24],[54,31],[50,31]],'#5E3E24');
  d.ell(45,29,1.5,2,'#3A2414');                                  // 나무 구멍
  d.line(42,13,29,11,'#7A5232'); d.line(42,14,30,12,'#7A5232'); d.line(42,15,34,13,'#5E3E24');
  for(const [x,y,r,c] of [[32,4,6,'#3E8E48'],[44,2,8,'#3E8E48'],[58,4,8,'#3E8E48'],[52,10,6,'#3E8E48'],[37,7,5,'#3E8E48'],[40,1,5,'#58A85A'],[54,1,5,'#58A85A'],[30,2,3,'#58A85A'],[60,8,3,'#58A85A']]) d.circ(x,y,r,c);
  for(let i=0;i<14;i++) d.px(d.ri(28,63),d.ri(0,10),'#78C070');
  // 벌집
  d.vline(32,12,13,'#5E3E24'); d.ell(32,19,5,6,'#E8B040'); for(const y of [15,18,21,24]) d.hline(28,36,y,'#C88A28'); d.ell(32,19,5,6,null);
  for(let y=13;y<26;y++)for(let x=26;x<39;x++){if(d.get(x,y)==='#C88A28'&&((x-32)/5.4)**2+((y-19)/6.4)**2>1) d.px(x,y,d.get(x,y-1)||'#AEDCB6')}
  d.ell(31,17,1.5,1.5,'#FFD870'); d.ell(32,20,1,1,'#4A2A10'); d.vline(33,25,28,'#F6B020'); d.px(33,29,'#F6B020'); d.px(34,30,'#F6B020');
  // 벌 떼 (왼쪽 위로 쫓아가는 중)
  const bee=(x,y)=>{d.px(x,y,'#FFD43A'); d.px(x+1,y,'#2A2420'); d.px(x,y-1,'#FFFFFF')};
  for(const [x,y] of [[24,14],[21,12],[26,10],[18,10],[22,8],[15,13],[27,16],[37,22],[39,17],[12,9]]) bee(x,y);
  for(let i=0;i<10;i++){const t=i/10; d.px(12+t*14,7+Math.sin(t*9)*1.5,'#F8F8E0')}
  // 꽃
  for(const [x,y,c] of [[56,34,'#FFFFFF'],[60,30,'#F8E060'],[28,36,'#F8A0C0'],[36,33,'#FFFFFF'],[3,30,'#F8E060']]){d.px(x,y,c); d.px(x-1,y,c); d.px(x+1,y,c); d.px(x,y-1,c); d.px(x,y+1,c); d.px(x,y,'#F0A030')}
},
'bear:c1': d=>{ // 연어 폭포 계곡
  d.grad(0,0,64,14,['#8CCCF4','#A4D8F6','#BCE4F8']);
  cloud(d,6,2,12,'#FFFFFF'); cloud(d,48,0,10,'#FFFFFF');
  d.poly([[0,16],[10,6],[18,12],[26,4],[36,14],[0,14]],'#8A9AC8'); d.poly([[20,8],[26,4],[30,7]],'#FFFFFF');
  for(let x=0;x<34;x+=3) pine(d,x,19,d.ri(5,8),'#3E7A52','#2E6040','#4A3020');
  d.rect(0,17,34,23,'#6EAE58');
  // 절벽
  d.poly([[30,40],[33,8],[63,6],[63,40]],'#8A7A6A'); d.poly([[54,6],[63,6],[63,40],[56,40]],'#6E6054');
  for(const y of [14,20,26]) d.line(33,y,63,y-1,'#6E6054');
  for(let x=36;x<64;x+=5) pine(d,x,9,d.ri(5,7),'#2E6A44','#24543A','#4A3020');
  // 폭포
  d.rect(39,7,11,23,'#B8E4F8'); for(let x=39;x<50;x++) if(x%3===0) d.vline(x,7,29,'#FFFFFF'); for(let x=39;x<50;x++) if(x%3===2) d.vline(x,9+(x%5),29,'#88C8EC');
  d.hline(38,50,7,'#FFFFFF');
  // 강
  d.poly([[26,40],[30,30],[63,28],[63,40]],'#4A9AD8'); d.poly([[30,30],[63,28],[63,31],[29,33]],'#78BAE8');
  for(let i=0;i<10;i++){const x=d.ri(32,60),y=d.ri(32,38); d.hline(x,x+3,y,'#9ED2F2')}
  d.ell(44,30,8,2,'#FFFFFF'); d.ell(44,30,5,1,'#E0F4FF');
  // 강가 돌
  d.ell(28,35,3,2,'#9A9A9A'); d.ell(27,34,1,1,'#C8C8C8'); d.ell(24,39,3,1,'#8A8A8A');
  // 뛰어오르는 연어
  const fish=(x,y,f)=>d.stamp(x,y,f?['k.....','kkoss.','.osssw','kkoss.','k.....']:['.....k','.ssokk','wssso.','.ssokk','.....k'],{s:'#F07A64',o:'#C85048',w:'#2A2A3A',k:'#D86050'});
  fish(33,20,0); fish(53,23,1); fish(45,15,0);
  for(const [x,y] of [[39,24],[40,22],[56,27],[51,20]]) d.px(x,y,'#FFFFFF');
},
'bear:c2': d=>{ // 전설의 겨울잠 동굴
  d.grad(0,0,64,26,['#2E3A7A','#3C4A8C','#4E5E9E','#6474B0','#7C8CC2']);
  d.circ(10,6,3,'#F4F0D8'); d.circ(11,5,3,'#2E3A7A');
  // 눈 덮인 산
  d.poly([[18,30],[34,8],[46,2],[58,6],[63,10],[63,30]],'#E4ECFA'); d.poly([[46,2],[58,6],[63,10],[63,30],[52,30]],'#C6D2EE');
  d.poly([[34,8],[46,2],[40,12],[36,16]],'#FFFFFF');
  for(let x=0;x<22;x+=5) {pine(d,x+2,25,d.ri(7,10),'#2E5A5A','#244848','#3A2A20'); d.hline(x,x+4,18+d.ri(0,3),'#FFFFFF')}
  // 동굴 입구
  d.ell(44,26,11,10,'#8A9AC0'); d.ell(44,27,9,9,'#2A2440'); d.ell(44,30,6,6,'#3A2E4A'); d.ell(45,32,4,3,'#5A4038');
  d.rect(30,30,30,2,null);
  for(let x=35;x<54;x+=2) {d.vline(x,18,18+(x%4?1:3),'#E8F4FF')}                       // 고드름
  // 동굴 속 꿀단지와 따뜻한 빛
  d.ell(48,32,2,2,'#C87038'); d.hline(47,49,30,'#F6B020');
  // 눈 바닥
  d.rect(0,33,64,7,'#F4F8FF'); d.rect(0,30,34,3,'#F4F8FF'); d.hline(0,63,36,'#DCE6F8'); d.hline(28,63,33,'#DCE6F8');
  d.dither(0,38,64,2,'#DCE6F8','#F4F8FF');
  for(const [x,y] of [[24,35],[28,34],[31,36],[35,34]]) d.stamp(x,y,['p.p','.p.'],{p:'#A8B8DC'}); // 발자국
  // 쿨쿨
  zz(d,52,12,'#FFFFFF'); d.stamp(57,7,['cc','.c','c.','cc'],{c:'#FFFFFF'}); d.stamp(48,16,['cc','cc'],{c:'#E0E8FF'});
  d.stamp(57,14,['p.p','ppp','.p.'],{p:'#F8A0B8'});
  for(let i=0;i<26;i++) d.px(d.ri(0,63),d.ri(0,30),'#FFFFFF');
},
// ---------- OWL ----------
'owl:s0': d=>{ // 도서관 책갈피
  const O='#1A1A30', N='#34428A', N2='#26306A', G='#E8B84A', G2='#B88A2A', R='#D8504A', R2='#A83434';
  d.rect(9,3,13,26,N); d.poly([[9,28],[15,23],[22,28],[22,30],[9,30]],null);
  d.rect(9,3,13,26,N); d.rect(18,3,4,23,N2);
  for(let y=26;y<30;y++) for(let x=9;x<22;x++){const k=Math.abs(x-15.5); if(y-25>5.5-k) d.clear(x,y)}
  d.frame(10,4,11,21,G); d.hline(10,20,24,G);
  d.circ(15,6,1,'#1A1A30');                                      // 구멍
  d.stamp(11,8,['a.......a','aa.....aa','aaaaaaaaa','awwaaawwa','awkaaakwa','awwaoawwa','aaaaoaaaa','.aaaaaaa.','..aaaaa..','..o...o..'],{a:'#B07A48',w:'#FFF4D0',k:'#1A1A30',o:'#F09030'});
  d.stamp(12,19,['.yy..','y....','y....','.yy..'],{y:G}); d.px(18,19,G); d.px(17,21,'#FFFFFF');   // 달·별
  d.line(15,6,21,2,R2); d.line(21,2,25,7,R2);                    // 끈
  d.rect(24,8,3,2,G); d.rect(23,10,5,8,R); d.vline(26,10,17,R2); for(let x=23;x<28;x+=2) d.px(x,18,R);
  d.outline(O);
  d.px(4,4,'#FFE070'); d.stamp(3,12,['.y.','yWy','.y.'],{y:'#FFE070',W:'#FFFFFF'});
},
'owl:s1': d=>{ // 고대 도서관 두루마리
  const O='#3A2410', P='#F0DCA8', P2='#D8BC80', P3='#FFF2CC', W='#8A5530', W2='#5E3618', K='#C8902E', I='#6A4A3A';
  d.rect(6,8,17,17,P); d.hline(6,22,8,P3); d.hline(6,22,24,P2); d.rect(20,8,3,17,P2);
  for(let y=11;y<23;y+=2){for(let x=8;x<18;x++) if((x+y)%5) d.px(x,y,I)}             // 글자 줄
  d.stamp(9,10,['.o.o.','ooooo','owoow','ooooo'],{o:'#8A5A3A',w:'#F0DCA8'});  d.hline(14,18,11,P);d.hline(14,18,12,P);d.hline(14,18,13,P);d.hline(14,18,11,I);d.hline14=0;
  d.rect(3,5,4,23,W); d.vline(3,5,27,W2); d.rect(2,3,6,3,K); d.rect(2,27,6,3,K); d.px(3,3,'#F0C060'); d.px(3,27,'#F0C060');
  d.ell(25,16,4,10,P2); d.ell(25,16,3,9,P); d.ell(25,16,2,7,P2); d.ell(25,16,1,5,P3); d.vline(25,12,20,P2); // 감긴 쪽
  d.rect(24,4,3,3,K); d.rect(24,26,3,3,K);
  d.circ(18,25,2.5,'#C83838'); d.px(17,24,'#E86060'); d.line(17,27,15,30,'#C83838'); d.line(19,27,20,30,'#A82828'); // 밀랍 봉인
  d.outline(O);
},
'owl:s2': d=>{ // 지혜의 여신의 깃펜
  const O='#2A2030', F1='#FFF8E8', F2='#F2D78A', F3='#D4A84A', S='#B88A2A', K='#2E2A4A', K2='#4A4670';
  const ax=10,ay=21,bx=29,by=2, L=Math.hypot(bx-ax,by-ay), ux=(bx-ax)/L, uy=(by-ay)/L;
  for(let y=0;y<32;y++)for(let x=0;x<32;x++){const t=((x-ax)*ux+(y-ay)*uy)/L, s=(x-ax)*(-uy)+(y-ay)*ux; if(t<.22||t>1.02) continue; const w=6*Math.pow(Math.sin(Math.PI*Math.min(1,(t-.22)/.82)),.6); if(Math.abs(s)<=w){ const band=Math.floor(t*L)%3===0; d.px(x,y,s<0?(band?F2:F1):(band?F3:F2))}}
  d.line(ax,ay,bx-1,by+1,S);
  d.circ(21,10,2,'#5A9AD8'); d.circ(21,10,1,'#1E3A6A'); d.px(20,9,'#FFFFFF'); // 부엉이 눈 무늬
  // 잉크병
  d.rect(4,20,11,9,K); d.rect(6,18,7,2,K2); d.rect(5,17,9,1,'#B88A2A'); d.vline(5,21,27,K2); d.hline(4,14,28,'#1E1A30');
  d.line(ax,ay,7,15,S); d.line(8,16,ax,ay,S); d.px(7,15,'#1A1A30');
  d.stamp(7,22,['.ww.','wyyw','.ww.'],{w:'#E8E0FF',y:'#F2D78A'});
  d.outline(O);
  spark(d,4,5,'#FFE070'); spark(d,27,22,'#FFE070'); d.px(16,2,'#FFE070'); d.px(30,13,'#FFFFFF');
},
'owl:c0': d=>{ // 밤의 동네 도서관
  d.rect(0,0,64,31,'#3A3060'); for(let x=0;x<64;x+=8) d.vline(x,0,30,'#342A56');
  d.rect(0,31,64,9,'#6A4630'); for(const y of [33,36,39]) d.hline(0,63,y,'#5A3A26'); for(let i=0;i<8;i++) d.px(d.ri(0,63),d.ri(32,39),'#7E5638');
  // 창문
  d.rect(25,6,15,18,'#5A4A3A'); d.circ(32,6,7,'#5A4A3A'); d.rect(26,7,13,16,'#1A2050'); d.circ(32,6,6,'#1A2050'); d.rect(26,6,13,1,'#1A2050');
  d.circ(35,5,3,'#FFF6C8'); d.circ(34,4,1,'#FFFFFF'); for(const [x,y] of [[28,4],[29,12],[36,15],[30,19],[37,11]]) d.px(x,y,'#E8E8FF');
  d.vline(32,0,23,'#5A4A3A'); d.hline(26,38,14,'#5A4A3A'); d.rect(24,23,17,2,'#7A6248');
  // 달빛
  for(let y=31;y<40;y++) for(let x=24+(y-31);x<40+(y-31);x++) if((x+y)%2) d.px(x,y,'#8A6A50');
  // 책장
  d.rect(44,1,20,31,'#5A3A22'); d.rect(46,3,16,27,'#3A2414');
  const bc=['#D85050','#5080D8','#58B060','#E8B040','#A060C0','#E07830','#40A8A8'];
  for(const sy of [3,10,17,24]){let x=46; while(x<61){const w=d.ri(1,2), h=d.ri(4,6); d.rect(x,sy+6-h,w,h,bc[d.ri(0,6)]); x+=w+(d.rnd()<.15?1:0)} d.rect(44,sy+6,20,1,'#6E4A2C')}
  d.rect(0,6,4,25,'#5A3A22'); for(const sy of [8,15,22]){for(let x=0;x<3;x++) d.vline(x,sy,sy+5,bc[(x+sy)%7])}
  // 책상과 스탠드, 읽은 책 세 권
  d.rect(26,27,17,2,'#8A5A34'); d.vline(28,29,34,'#6A4426'); d.vline(41,29,34,'#6A4426');
  d.rect(30,25,8,1,'#D85050'); d.rect(31,24,7,1,'#5080D8'); d.rect(30,23,8,1,'#58B060');
  d.vline(39,21,26,'#C8A040'); d.poly([[37,21],[41,21],[40,19],[38,19]],'#E8C050'); d.rect(37,22,5,1,'#FFF6B0');
  d.dither(35,22,8,4,'#4A3E6A','#3A3060'); d.rect(30,23,8,1,'#58B060'); d.rect(31,24,7,1,'#5080D8'); d.rect(30,25,8,1,'#D85050'); d.vline(39,22,26,'#C8A040');
  d.rect(37,26,4,1,'#463C30');
},
'owl:c1': d=>{ // 오래된 대학 시계탑
  d.grad(0,0,64,24,['#141238','#1C1A48','#26245A','#32306C']);
  stars(d,30,0,0,63,18,['#FFFFFF','#C8C8FF','#FFF0A0']);
  d.circ(12,7,4,'#FFF4C0'); d.circ(14,6,4,'#141238');
  // 캠퍼스 건물
  d.rect(0,20,30,10,'#3A2A3A'); d.poly([[0,20],[6,15],[12,20]],'#3A2A3A'); d.rect(52,18,12,12,'#3A2A3A'); d.poly([[50,18],[57,13],[64,18]],'#3A2A3A');
  for(let x=1;x<30;x+=4) d.rect(x,22,2,3,(x%3)?'#F8D870':'#2A1E2A'); for(let x=54;x<63;x+=3) d.rect(x,21,1,3,'#F8D870');
  // 시계탑
  d.rect(37,8,14,24,'#8A4A3A'); d.rect(46,8,5,24,'#6A3628'); for(let y=10;y<32;y+=3) d.hline(37,50,y,'#7A3E30');
  d.poly([[36,8],[44,-2],[52,8]],'#4A8A7A'); d.poly([[44,-2],[52,8],[46,8]],'#367064'); d.vline(44,-2,0,'#C8C060');
  d.circ(44,13,4,'#FFF0B8'); d.ring(44,13,4,'#C8A040'); d.vline(44,10,13,'#3A2A20'); d.hline(44,46,13,'#3A2A20');
  d.rect(40,20,2,4,'#F8D870'); d.rect(46,20,2,4,'#F8D870'); d.rect(42,27,4,5,'#2A1A18');
  d.rect(36,8,17,1,'#5E3428');
  // 잔디와 길
  d.rect(0,30,64,10,'#2E5A3A'); d.poly([[38,30],[48,30],[56,40],[34,40]],'#8A8070'); d.hline(0,63,30,'#3E6E48');
  for(let i=0;i<12;i++) d.px(d.ri(0,63),d.ri(32,39),'#264A30');
  for(const x of [28,60]){d.vline(x,24,31,'#2A2A2A'); d.circ(x,23,1.5,'#FFF0A0'); d.dither(x-2,22,5,1,'#FFE070','#32306C')}
},
'owl:c2': d=>{ // 별자리 천문대
  d.grad(0,0,64,32,['#080824','#0C0C30','#12123C','#1A1848']);
  for(let x=0;x<64;x++){const y=24-x*.35; for(let k=-3;k<=3;k++) if((x+k)%2===0||Math.abs(k)<2) d.px(x,y+k,Math.abs(k)<2?'#3A2C70':'#2A2058')}
  stars(d,40,0,0,63,28,['#FFFFFF','#9AA8F0','#FFE8A0','#6A70B0']);
  const con=(pts)=>{for(let i=0;i+1<pts.length;i++) d.line(...pts[i],...pts[i+1],'#4A5AA8'); pts.forEach(([x,y])=>d.stamp(x-1,y-1,['.s.','sSs','.s.'],{s:'#AEC0FF',S:'#FFFFFF'}))};
  con([[4,5],[9,4],[13,6],[17,5],[20,9],[25,8],[24,4]]);
  con([[36,3],[40,8],[44,4],[48,9],[52,5]]);
  con([[8,16],[13,14],[15,19],[10,20]]);
  d.line(56,2,61,5,'#FFFFFF'); d.px(55,1,'#C8D0FF');
  d.poly([[0,30],[20,28],[36,26],[64,24],[64,40],[0,40]],'#1E2440'); d.poly([[0,34],[64,30],[64,40],[0,40]],'#161B34');
  // 천문대
  d.rect(42,22,18,11,'#C8CCD8'); d.rect(54,22,6,11,'#A0A6B8'); d.ell(51,22,9,7,'#E4E8F2'); d.rect(41,23,20,8,null);
  for(let y=15;y<23;y++) for(let x=41;x<62;x++) if(y>=22) d.px(x,y,d.get(x,y));
  d.rect(42,22,18,11,'#C8CCD8'); d.rect(54,22,6,11,'#A0A6B8'); d.hline(41,60,22,'#8A90A4');
  d.poly([[48,15],[51,15],[51,22],[48,22]],'#2A2A44');
  d.line(49,17,40,9,'#5A6078'); d.line(50,17,41,10,'#7A8098'); d.line(50,18,42,10,'#5A6078'); d.rect(39,8,3,2,'#9AA0B8');
  d.rect(49,27,3,6,'#FFE090'); d.px(45,25,'#FFE090'); d.px(56,25,'#FFE090');
  for(let i=0;i<10;i++) d.px(d.ri(0,40),d.ri(29,39),'#2A3050');
},
// ---------- DEREK ----------
'derek:s0': d=>{ // 트레일러 낚싯대
  const O='#2A1E18', R1='#5A3A22', R2='#8A5A32', R3='#B88450', C1='#C89A60', C2='#E8C690', M1='#6A7280', M2='#A8B0BC', M3='#E0E6EE', L='#E8F4FF', F1='#3A8AC0', F2='#7CC4E8', F3='#E86A4A';
  // 손잡이(코르크)
  T(d,4,29,10,23,2.2,C1); T(d,4.6,28.4,9.4,23.6,1,C2); for(let i=0;i<3;i++) d.line(5+i*2,28-i*2,6+i*2,29-i*2,'#A87A48');
  // 릴
  d.circ(12,24,3.4,M1); d.circ(12,24,2.4,M2); d.circ(12,24,1,M3); d.line(12,24,15,27,M1); d.rect(15,27,2,2,'#2A2A2A');
  // 낚싯대
  T(d,10,22,28,3,1.1,R2); d.line(11,20,27,3,R3); for(const t of [.35,.6,.82]) d.circ(10+18*t,22-19*t,1.3,M2);
  d.px(29,2,R1);
  d.outline(O);
  // 낚싯줄과 미끼 물고기
  for(let y=4;y<16;y++) d.px(29-Math.round((y-4)*.25),y,L);
  d.stamp(20,16,['....ooo...','..ooBBBo.o','.oBbbbbBoo','oBbWbbbbBo','.obbbbbboo','..oooooo.o'],{o:O,B:F1,b:F2,W:'#FFFFFF'});
  d.px(26,15,F3); d.px(26,14,'#C8C8C8');
  spark(d,4,5,'#FFE070'); d.px(20,12,'#FFE070');
},
'derek:s1': d=>{ // 페리보트 모자
  const O='#1A1E2E', N1='#1E2E5A', N2='#2E4A8A', N3='#4A6AB0', W1='#F4F6FA', W2='#C8D0DE', G1='#C8901E', G2='#F2C440', K='#16161E', H1='#3A2418', H2='#5A3A26';
  // 흰 윗부분
  d.ell(16,11,13,6,W2); d.ell(16,10,12,5,W1); d.hline(6,24,7,'#FFFFFF');
  // 남색 띠
  d.rect(4,14,24,6,N2); d.rect(4,18,24,2,N1); d.hline(4,27,14,N3);
  // 금색 끈
  d.hline(4,27,20,G1); d.hline(5,26,19,G2);
  // 챙
  d.poly([[3,20],[29,20],[26,25],[6,25]],K); d.hline(6,25,21,'#3A3A4A');
  // 닻 배지
  d.circ(16,15,3.6,G1); d.circ(16,15,2.8,G2); d.stamp(14,12,['..a..','.aaa.','..a..','a.a.a','.aaa.'],{a:N1});
  // 삐져나온 멋진 머리
  d.stamp(2,12,['..hh','.hHh','hHh.','hh..','.h..'],{h:H1,H:H2});
  d.stamp(26,13,['hh..','hHh.','.hHh','..hh'],{h:H1,H:H2});
  d.outline(O);
  // 물결 장식
  d.stamp(4,27,['.w..w..w..w..w..w..w..w..w.','w.ww.ww.ww.ww.ww.ww.ww.ww.w'],{w:'#6AB4E8'});
  spark(d,27,4,'#FFE070');
},
'derek:s2': d=>{ // 황금 뇌 모형
  const O='#3A2410', G0='#9A6410', G1='#C8901E', G2='#F0BE3A', G3='#FFE27A', G4='#FFFBE0', B1='#4A2A1A', B2='#6A3E26', B3='#8A5634';
  // 받침대
  d.rect(6,25,20,4,B2); d.rect(8,23,16,2,B3); d.hline(6,25,28,B1); d.rect(12,26,8,2,G1); d.hline(13,18,26,G2);
  // 뇌
  d.ell(16,14,12,9,G1); d.ell(15,13,11,8,G2); d.ell(13,11,7,5,G3);
  d.rect(14,21,4,3,G0); // 줄기
  // 주름
  const F=G0;
  d.vline(16,6,20,F); d.px(15,7,F); d.px(17,9,F);
  d.stamp(6,9,['..ff.','.f..f','f...f','..ff.'],{f:F}); d.stamp(9,14,['ff..f','..ff.','.f...'],{f:F});
  d.stamp(19,8,['.ff..','f..f.','....f','.ff.f'],{f:F}); d.stamp(20,14,['f..ff','.ff..','...f.'],{f:F});
  d.stamp(10,6,['ff.'],{f:F}); d.stamp(6,17,['.ff','f..'],{f:F}); d.stamp(22,18,['ff.','..f'],{f:F});
  d.px(10,9,G4); d.px(11,8,G4); d.px(12,8,G4);
  d.outline(O);
  spark(d,4,4,'#FFE070'); spark(d,28,6,'#FFF6C0'); d.px(28,22,'#FFE070'); d.px(3,21,'#FFE070');
},
'derek:c0': d=>{ // 숲속 트레일러
  d.grad(0,0,64,20,['#BFE4E8','#CDEAE0','#DCEFD8','#E6F2D0']);
  for(let x=0;x<64;x+=7) pine(d,x+3,24,14+((x*3)%7),'#8AB89A','#7AA88A','#6A5A4A');
  for(let x=0;x<64;x+=9) pine(d,x+1,27,16+((x*5)%6),'#4E8A5E','#3E7A50','#5A4030');
  d.rect(0,26,64,14,'#7CB858'); d.hline(0,63,26,'#94C868'); for(let i=0;i<30;i++) d.px(d.ri(0,63),d.ri(28,39),d.rnd()<.5?'#6AA84A':'#8CC468');
  // 트레일러
  d.ell(44,20,13,7,'#C8CED6'); d.rect(31,20,27,8,'#C8CED6'); d.ell(44,18,12,5,'#E2E8EE'); d.hline(33,55,16,'#F6F8FA');
  d.hline(31,57,24,'#8A929E'); d.hline(31,57,25,'#E06A4A');
  d.rect(35,18,6,4,'#5A7A9A'); d.rect(35,18,6,1,'#9AC0DC'); d.rect(46,18,5,4,'#5A7A9A'); d.rect(46,18,5,1,'#9AC0DC');
  d.rect(52,19,4,8,'#8A929E'); d.px(53,23,'#E0B040');
  d.circ(38,29,2,'#2A2A2A'); d.circ(38,29,1,'#8A8A8A'); d.line(29,26,31,26,'#6A6A6A');
  d.rect(56,26,4,1,'#8A6A4A'); d.vline(57,27,29,'#6A4A30');
  // 장작불
  d.line(24,33,30,31,'#6A4428'); d.line(24,31,30,33,'#8A5A32');
  d.stamp(25,27,['..a..','.aba.','abcba','.bcb.'],{a:'#E84A2A',b:'#F89A30',c:'#FFE070'});
  d.px(27,25,'#B0B0B0'); d.px(28,23,'#C8C8C8'); d.px(27,21,'#D8D8D8');
  // 사슴(오른쪽 나무 사이에서 빼꼼)
  pine(d,61,34,18,'#3E7A50','#2E6A40','#5A4030');
  d.stamp(56,22,['b.b..','.bb..','.ccc.','cecc.','.ccn.','.cc..','.cc..'],{b:'#8A5A32',c:'#B07A48',e:'#1A1A1A',n:'#3A2A20'});
  // 꽃
  for(const [x,y] of [[16,36],[44,35],[50,38],[4,38]]) d.stamp(x-1,y-1,['.w.','wyw','.w.'],{w:'#FFFFFF',y:'#F8D048'});
},
'derek:c1': d=>{ // 워싱턴 D.C.
  d.grad(0,0,64,26,['#7AB8E8','#8CC4EC','#A0D0F0','#B8DCF2','#D0E8F4']);
  cloud(d,4,3,12,'#FFFFFF','#E0EEF8'); cloud(d,48,2,10,'#FFFFFF');
  // 워싱턴 기념탑
  d.rect(22,5,4,22,'#EDE6DA'); d.rect(24,5,2,22,'#D2C8B8'); d.poly([[22,5],[24,2],[26,5]],'#EDE6DA'); d.px(24,2,'#FFFFFF');
  // 국회의사당
  const W1='#F6F2EA', W2='#DCD4C6', W3='#B8AE9E';
  d.rect(30,19,34,9,W1); d.rect(30,19,34,1,W3); for(let x=31;x<64;x+=2) d.vline(x,21,27,W2);
  d.rect(40,14,14,5,W1); for(let x=41;x<54;x+=2) d.vline(x,15,18,W2);
  d.ell(47,12,7,5,W1); d.rect(40,12,15,2,W2); d.ell(46,10,5,3,'#FFFFFF');
  for(let x=42;x<53;x+=2) d.vline(x,9,13,W2);
  d.rect(46,4,3,4,W1); d.px(47,2,'#6A5A4A'); d.px(47,3,'#6A5A4A');
  d.poly([[38,19],[47,15],[56,19]],W2);
  // 국기
  d.vline(34,13,19,'#6A6A6A'); d.stamp(35,13,['rwr','bwr','rwr'],{r:'#D04848',w:'#FFFFFF',b:'#3A4A90'});
  // 반사 연못과 잔디
  d.rect(0,27,64,13,'#6CB050'); d.hline(0,63,27,'#86C468');
  d.rect(24,30,40,5,'#86B8DC'); d.hline(24,63,30,'#A8D2EE'); for(let x=26;x<62;x+=5) d.hline(x,x+2,32,'#C8E4F6');
  d.rect(46,31,3,3,'#DCE8F0');
  // 벚꽃
  for(const x of [28,58]){d.vline(x,32,37,'#6A4A3A'); d.circ(x,30,3,'#F8B8CC'); d.px(x-1,29,'#FFE0EA'); d.px(x+1,31,'#E890AC')}
  for(let i=0;i<10;i++) d.px(d.ri(24,63),d.ri(35,39),'#FFC8D8');
},
'derek:c2': d=>{ // 언덕 위 꿈의 집
  d.grad(0,0,64,22,['#3A2E6A','#6A3E7A','#B04E78','#E8706A','#F89A5A','#FCC060']);
  d.circ(14,20,5,'#FFE29A'); d.circ(14,20,3.5,'#FFF4C8');
  // 바다 수평선
  d.rect(0,21,64,6,'#C25A6A'); for(let x=0;x<64;x+=3) d.px(x,22+(x%2),'#F0A070'); d.hline(9,19,23,'#FFD890'); d.hline(11,17,25,'#FFD890');
  // 언덕
  d.poly([[0,28],[20,25],[40,18],[64,16],[64,40],[0,40]],'#5A7A4A');
  d.poly([[0,31],[24,28],[44,22],[64,21],[64,40],[0,40]],'#4A6A3E');
  for(let i=0;i<20;i++) d.px(d.ri(0,63),d.ri(30,39),'#3E5A34');
  // 집
  const S='#E8D6B8', S2='#C8B090', R='#4A3A3A', G='#FFD27A';
  d.rect(40,10,20,10,S); d.rect(52,10,8,10,S2); d.poly([[38,10],[50,3],[62,10]],R); d.poly([[50,3],[62,10],[56,10]],'#2E2424');
  d.rect(42,12,8,7,G); d.vline(46,12,18,'#B08A50'); d.hline(42,49,15,'#B08A50');
  d.rect(53,12,5,5,G); d.rect(54,17,3,3,'#6A4A30');
  d.rect(38,20,24,2,'#8A6A4A'); for(let x=39;x<62;x+=3) d.vline(x,18,19,'#8A6A4A'); d.hline(38,61,18,'#8A6A4A');
  d.rect(57,4,2,4,'#6A5050');
  // 촛불로 그린 집 모양 (앞마당)
  const cand=(x,y)=>{d.vline(x,y,y+1,'#FFF4E0'); d.px(x,y-1,'#FFC040'); d.px(x,y-2,'#FFF0A0')};
  for(const [x,y] of [[26,36],[30,36],[34,36],[38,36],[26,33],[38,33],[26,30],[38,30],[29,28],[32,26],[35,28]]) cand(x,y);
  for(let i=0;i<4;i++) d.px(d.ri(24,40),d.ri(25,38),'#FFE6A0');
  // 별 하나
  d.px(56,1,'#FFF4D0'); d.px(32,2,'#FFF4D0');
},
// ---------- PRINCESS BUBBLEGUM ----------
'pb:s0': d=>{ // 버블검 시약 비커
  const O='#3A1E3A', G1='#DCEFF6', G2='#B4D8E8', G3='#FFFFFF', P1='#D8508E', P2='#F27AB0', P3='#FFB0D4', P4='#FFE0EE', K='#C8A0E0';
  // 플라스크 몸
  d.rect(12,3,8,9,G1); d.rect(11,2,10,2,G2);
  d.poly([[12,11],[20,11],[28,27],[4,27]],G1); d.ell(16,26,12,3,G1);
  // 액체
  d.poly([[9,17],[23,17],[28,27],[4,27]],P2); d.ell(16,26,12,3,P2); d.ell(16,27,11,2,P1); d.hline(9,23,17,P3); d.hline(10,22,18,P3);
  d.poly([[10,19],[13,19],[9,27],[6,27]],P3);
  // 거품
  d.circ(19,22,1.6,P4); d.circ(14,24,1,P4); d.circ(22,25,1,P4); d.px(17,20,P4);
  d.circ(16,13,1.5,P3); d.circ(18,9,1.2,P3); d.circ(15,6,1,P3);
  // 유리 반사
  d.vline(13,4,11,G3); d.line(12,13,8,21,G3);
  // 눈금
  for(const y of [14,17,20]) d.hline(21,22,y,'#8AAABB');
  d.outline(O);
  // 경고: 흔들지 마!
  d.stamp(23,1,['..y..','.yky.','.yky.','yyyyy','yykyy','yyyyy'],{y:'#FFD848',k:'#3A1E3A'});
  d.stamp(1,9,['s.s','.s.','s.s'],{s:K}); d.px(27,13,P3); d.px(28,15,K);
},
'pb:s1': d=>{ // 예비 왕관
  const O='#5A3A10', G1='#C8901E', G2='#F2C440', G3='#FFE27A', G4='#FFF8D0', B1='#2A6AC8', B2='#6AB4F8', P='#FF7AB0';
  d.poly([[4,24],[4,12],[10,18],[16,7],[22,18],[28,12],[28,24]],G2);
  d.poly([[16,7],[22,18],[19,18]],G1); d.poly([[28,12],[28,24],[25,24],[25,15]],G1);
  d.rect(4,22,25,4,G1); d.hline(4,28,22,G3); d.hline(4,28,25,'#9A6410');
  d.line(6,15,9,19,G3); d.line(15,9,12,17,G3);
  // 보석
  d.ell(16,17,3,3,B1); d.ell(15,16,1.5,1.5,B2); d.px(15,15,'#FFFFFF');
  d.circ(4,11,1.8,G2); d.circ(16,6,1.8,G2); d.circ(28,11,1.8,G2);
  for(const x of [8,24]) {d.circ(x,23.5,1.2,P); d.px(x-1,23,'#FFD0E4')}
  d.circ(16,23.5,1.2,B2);
  d.outline(O);
  // 과학적 반짝임 (원자 기호)
  d.ring(26,4,2.5,'#9AD8FF'); d.px(26,4,'#FF7AB0');
  spark(d,4,4,'#FFE070'); d.px(30,18,G4); d.px(1,18,G4); spark(d,9,29,'#FFF6C0');
},
'pb:s2': d=>{ // 마더 검 조각
  const O='#5A1A3E', P0='#B03070', P1='#D8508E', P2='#F27AB0', P3='#FFA8D0', P4='#FFE0F0', W='#FFFFFF';
  // 빛
  // 껌 조각 (둥근 덩어리 + 뿔)
  d.poly([[9,9],[16,3],[24,8],[27,18],[22,27],[11,28],[5,19]],P1);
  d.poly([[10,10],[16,5],[22,9],[24,17],[18,15],[12,17],[7,18]],P2);
  d.poly([[11,10],[16,6],[19,9],[14,12]],P3); d.line(12,9,15,7,P4);
  d.poly([[18,15],[24,17],[22,25],[16,26]],P0);
  // 몰캉한 기포
  d.circ(10,22,1.2,P3); d.circ(20,20,1,P3); d.px(14,20,P3);
  // 귀여운 얼굴
  d.stamp(10,17,['k...k','k...k','.....','.kkk.'],{k:'#5A1A3E'}); d.px(9,19,'#FFC0DC'); d.px(15,19,'#FFC0DC');
  d.outline(O);
  for(let y=0;y<32;y++) for(let x=0;x<32;x++){const q=Math.hypot(x-16,y-16); if(!d.get(x,y)&&q<15&&(q<13.2?(x+y)%2===0:(x%2===0&&y%2===0))) d.px(x,y,q<13.2?'#FFD6EA':'#FFE6F2')}
  spark(d,26,4,'#FFFFFF','#FFB0D4'); d.px(4,7,W); d.px(28,25,P3); spark(d,4,28,'#FFC0DE');
},
'pb:c0': d=>{ // 버블검 연구실
  d.rect(0,0,64,28,'#F6C6DC'); for(let x=0;x<64;x+=8) d.vline(x,0,27,'#EEB4CE');
  d.rect(0,0,64,2,'#E4A0C0');
  // 칠판
  d.rect(4,3,22,13,'#8A5A3A'); d.rect(5,4,20,11,'#2E5A4E');
  d.line(7,12,10,9,'#FFFFFF'); d.line(10,9,13,11,'#FFFFFF'); d.line(13,11,17,6,'#FFFFFF');
  d.stamp(19,6,['w.w','.w.','w.w'],{w:'#FFE070'}); d.stamp(19,10,['www','.w.','.w.'],{w:'#FFB0D4'}); d.px(23,12,'#9AD8FF');
  d.stamp(7,5,['ww','w.','ww'],{w:'#9AD8FF'}); d.hline(5,24,15,'#C8C8C8');
  // 선반 + 병
  d.rect(30,9,30,1,'#B07A50'); d.rect(30,10,30,1,'#8A5A3A');
  for(const [x,c,h] of [[32,'#7AD0A0',5],[36,'#FFD848',4],[40,'#9A7AE0',6],[45,'#FF7A9A',4],[50,'#7AC0F8',5],[55,'#F8A050',4]]){d.rect(x,9-h,3,h,'#E8F4FA'); d.rect(x,9-h+2,3,h-2,c); d.px(x+1,8-h,'#C8D0D8')}
  // 실험대
  d.rect(28,22,36,3,'#E8E8F0'); d.rect(28,24,36,1,'#B8B8C8'); d.rect(30,25,32,7,'#B0688A'); d.rect(30,25,32,1,'#8A4A6A');
  for(const x of [34,46,56]) d.rect(x,27,6,1,'#FFD0E4');
  // 현미경
  d.rect(30,20,6,2,'#4A4A5A'); d.rect(33,13,2,7,'#6A6A7A'); d.line(34,13,37,10,'#4A4A5A'); d.rect(36,9,2,2,'#2A2A3A'); d.rect(35,17,4,1,'#8A8A9A');
  // 플라스크 + 거품
  d.poly([[41,21],[43,15],[45,15],[47,21]],'#E8F4FA'); d.poly([[41,21],[42,18],[46,18],[47,21]],'#F27AB0'); d.px(44,13,'#FFB0D4'); d.circ(45,10,1,'#FFB0D4'); d.px(42,11,'#FFD0E4');
  d.rect(50,16,3,6,'#E8F4FA'); d.rect(50,19,3,3,'#7AD0A0'); d.rect(54,16,3,6,'#E8F4FA'); d.rect(54,18,3,4,'#FFD848');
  d.rect(59,14,3,8,'#E8F4FA'); d.rect(59,18,3,4,'#9A7AE0'); d.px(60,12,'#C8B0FF');
  // 체크표시 세 개 (가설 검증)
  // 체크 세 개 (가설 검증) — 오른쪽 클립보드
  d.rect(57,25,6,8,'#C89A60'); d.rect(58,26,4,6,'#FFFFFF'); d.rect(59,24,2,2,'#8A8A9A'); for(const y of [27,29,31]) {d.px(58,y,'#3AA060'); d.hline(59,61,y,'#B0B0C0')}
  // 바닥
  d.rect(0,32,64,8,'#E8D8F0'); for(let x=0;x<64;x+=4) for(let y=32;y<40;y+=4) d.rect(x+((y/4)%2?2:0),y,2,4,'#D8C4E6');
  d.rect(0,28,64,4,'#E8D8F0'); for(let x=0;x<30;x+=4) d.rect(x,28,2,4,'#D8C4E6'); d.hline(0,63,28,'#C0A8D4');
},
'pb:c1': d=>{ // 캔디 왕국 성
  d.grad(0,0,64,26,['#FFC8E4','#FFD4EA','#FFE0EE','#FFEAF2']);
  cloud(d,2,2,12,'#FFFFFF','#FFE0F0'); cloud(d,24,6,8,'#FFFFFF');
  // 먼 솜사탕 언덕
  d.ell(10,26,14,5,'#C8A8F0'); d.ell(32,27,12,4,'#B8E0F8');
  // 성
  const K1='#FF8AB8', K2='#F06A9E', K3='#FFB8D6', R='#C83A7A';
  d.rect(36,10,20,18,K1); d.rect(48,10,8,18,K2);
  for(let x=36;x<56;x+=3) d.rect(x,8,2,2,K1);
  d.rect(30,6,6,22,K3); d.rect(56,6,6,22,K3); d.rect(34,6,2,22,K1); d.rect(60,6,2,22,K1);
  d.poly([[29,6],[33,-1],[37,6]],R); d.poly([[55,6],[59,-1],[63,6]],R);
  d.rect(43,4,6,8,K3); d.poly([[42,4],[46,-3],[50,4]],R);
  // 줄무늬(캔디)
  for(let y=8;y<28;y+=4){d.hline(30,35,y,'#FFFFFF'); d.hline(56,61,y,'#FFFFFF')}
  // 창문/문
  d.ell(46,23,3,4,'#7A3A5A'); d.rect(43,23,7,5,'#7A3A5A'); d.vline(46,20,27,'#5A2A4A');
  d.circ(46,8,1.4,'#FFF4A0'); for(const x of [32,58]) d.rect(x,12,2,3,'#FFF4A0'); d.rect(39,14,2,3,'#FFF4A0'); d.rect(52,14,2,3,'#FFF4A0');
  // 깃발
  d.vline(46,-3,-1,'#8A5A6A'); d.stamp(33,0,['f'],{f:'#FFE070'}); d.px(59,0,'#FFE070');
  // 사탕 땅
  d.rect(0,28,64,12,'#8AE0B8'); d.hline(0,63,28,'#B4F0D4');
  for(let x=0;x<64;x+=6) d.ell(x+2,28,2,1,'#FFFFFF');
  d.poly([[40,40],[44,28],[48,28],[54,40]],'#FFE6A0'); for(let y=30;y<40;y+=3) d.hline(40,54,y,'#F8C878');
  // 지팡이 사탕과 젤리
  const cane=(x)=>{d.vline(x,20,33,'#FFFFFF'); for(let y=21;y<34;y+=3) d.px(x,y,'#E83A5A'); d.px(x+1,19,'#FFFFFF'); d.px(x+2,20,'#E83A5A'); d.px(x+2,21,'#FFFFFF')};
  cane(26); cane(58);
  for(const [x,c] of [[30,'#7AC0F8'],[60,'#FFD848'],[36,'#B88AF0']]){d.ell(x,35,2,2,c); d.px(x-1,34,'#FFFFFF')}
  d.circ(24,37,2,'#FF7AB0'); d.px(24,37,'#FFFFFF'); d.px(23,36,'#FFFFFF');
},
'pb:c2': d=>{ // 우주 실험 정거장
  d.grad(0,0,64,40,['#120A2E','#1A0E3E','#24124E','#2E1658']);
  stars(d,40,0,0,63,30,['#FFFFFF','#FFC8E4','#A8C0FF']);
  // 핑크 캔디 행성 표면 (아래)
  d.ell(32,62,60,32,'#E86AA8'); d.ell(32,64,60,32,'#F28ABC');
  for(let y=0;y<40;y++) for(let x=0;x<64;x++) if(d.get(x,y)==='#F28ABC'&&(x*7+y*3)%23===0) d.px(x,y,'#FFC0DC');
  d.ell(48,37,6,2,'#D0508E'); d.ell(56,33,3,1,'#D0508E'); d.ell(30,38,4,1,'#D0508E');
  // 우주 정거장
  const M1='#C8CCDA', M2='#9AA0B4', M3='#E8ECF4', S='#3A5AB8', S2='#6A8AE0';
  d.rect(28,6,8,1,M2); d.rect(31,2,2,22,M2);
  d.rect(22,1,18,4,S); for(let x=22;x<40;x+=3) d.vline(x,1,4,S2);
  d.rect(22,20,18,4,S); for(let x=22;x<40;x+=3) d.vline(x,20,23,S2);
  d.rect(36,9,22,8,M1); d.rect(36,15,22,2,M2); d.hline(36,57,9,M3); d.ell(58,13,3,4,M1);
  d.rect(28,10,8,6,M3); d.ell(28,13,3,3,M3);
  for(const x of [40,45,50]) {d.circ(x,12,1.5,'#7AD8F8'); d.px(x-1,11,'#FFFFFF')}
  d.vline(54,6,9,M2); d.circ(54,5,1.4,'#FF7AB0');
  d.rect(28,12,2,2,'#FF7AB0');
  // 무중력 실험: 둥둥 떠다니는 비커와 물방울
  d.stamp(10,8,['.gg.','.gg.','gppg','gppg','.gg.'],{g:'#E8F4FA',p:'#F27AB0'});
  d.circ(17,5,1.4,'#FF9ACA'); d.circ(6,14,1,'#FF9ACA'); d.circ(20,12,1.8,'#9AD8FF'); d.px(19,11,'#FFFFFF');
  // 데이터 신호
  for(let i=0;i<3;i++) d.ring(58,4,1+i*2,i%2?'#7AD8F8':'#4A9AD0');
  d.circ(58,4,1,'#FFFFFF');
},
// ---------- KEROPPI ----------
'keroppi:s0': d=>{ // 도넛 연못 연잎 (우산 겸용)
  const O='#1E3A1E', G1='#3A8A3A', G2='#5AB04A', G3='#8AD468', G4='#C4F09A', S='#4A7A2A', P='#FF8AB0', P2='#FFD0E0', Y='#FFE070', W='#BFEFFF';
  // 우산 줄기
  d.vline(16,12,26,S); d.vline(17,12,26,'#6A9A3A'); d.stamp(12,25,['..ss..','.s..s.','s.....'],{s:S}); d.stamp(12,26,['......','......','......'],{s:S});
  d.px(12,27,S); d.px(12,26,S); d.px(13,28,S); d.px(14,28,S); d.px(15,27,S);
  // 잎(위에서 살짝 기울어진 반구)
  d.ell(16,10,14,8,G1); d.ell(16,9,13,7,G2); d.ell(14,7,9,4,G3);
  // 홈(V자 틈)
  d.poly([[16,10],[21,2],[25,3]],null); for(let y=0;y<11;y++) for(let x=16;x<27;x++){const a=(x-16)/(10.01-y); if(y<10&&x>16+(10-y)*.5&&x<16+(10-y)*.95) d.clear(x,y)}
  // 잎맥
  for(const [x,y] of [[4,10],[8,15],[16,17],[24,15],[28,10],[8,4],[13,2]]) d.line(16,10,x,y,G1);
  d.px(10,6,G4); d.px(11,5,G4); d.px(12,5,G4);
  d.outline(O);
  // 연꽃과 물방울
  d.stamp(4,3,['.p.p.','pPpPp','.pYp.'],{p:P,P:P2,Y:Y});
  d.stamp(25,13,['.w.','www','wWw','.w.'],{w:W,W:'#FFFFFF'});
  d.stamp(22,20,['.w.','wWw','.w.'],{w:W,W:'#FFFFFF'}); d.px(9,22,W); d.px(26,25,W);
},
'keroppi:s1': d=>{ // 노래자랑 마이크
  const O='#1E2A2A', M1='#8A929E', M2='#C4CAD4', M3='#ECF0F6', G1='#2E8A3A', G2='#4AB45A', G3='#8AE08A', Gd1='#C8901E', Gd2='#F2C440', R='#E04A5A', R2='#B0303E';
  // 머리(그물)
  d.circ(19,10,7,M1); d.circ(18,9,6,M2);
  for(let y=3;y<17;y++) for(let x=12;x<26;x++) if(d.get(x,y)===M2&&(x+y)%3===0) d.px(x,y,M1);
  d.circ(16,7,1.5,M3); d.px(15,6,'#FFFFFF');
  d.rect(12,13,12,2,Gd1); d.line(12,13,23,13,Gd2);
  // 손잡이(개구리 초록)
  T(d,15,17,7,27,2.6,G1); T(d,14.4,16.6,6.6,26,1.2,G2); d.line(13,17,7,25,G3);
  d.circ(6,28,2,'#2A2A2A');
  // 우승 리본
  d.stamp(17,17,['.rr.rr.','rRRrRRr','.rrrrr.','..rrr..','.rr.rr.','.r...r.'],{r:R,R:'#FF8A8A'});
  d.outline(O);
  d.circ(20,23,2.4,Gd2); d.circ(20,23,2.4,Gd2); d.ring(20,23,2.4,Gd1); d.stamp(19,22,['.y','yy','.y'],{y:Gd1});
  // 케로케로 음표
  note(d,25,1,'#4AB45A'); note(d,2,7,'#E04A8A'); note(d,27,16,'#4A9AE0');
},
'keroppi:s2': d=>{ // 바다 끝 노래 소라
  const O='#4A2430', S1='#D88A7A', S2='#F4B49A', S3='#FFE2CC', S4='#B8605E', I1='#F2789A', I2='#FFB4C8', I3='#FFE6EE', W='#FFFFFF';
  // 뾰족한 나선 탑 (오른쪽 위)
  d.poly([[9,14],[27,2],[21,17]],S2); d.poly([[18,10],[27,2],[21,17]],S1);
  for(const t of [.25,.5,.72]) d.line(9+18*t,14-12*t,21+6*t,17-15*t,S4);
  for(const [x,y] of [[13,10],[17,8],[21,6],[24,4]]) d.px(x,y-1,S2);
  // 몸통
  d.ell(13,19,10,9,S2); d.ell(10,16,6,5,S3); d.ell(16,23,8,5,S1);
  for(const [x,y] of [[5,12],[9,9],[3,17]]) {d.px(x,y,S2); d.px(x-1,y-1,S2)}
  d.line(4,20,12,11,S4); d.line(6,25,18,12,S4);
  // 입구 (분홍 안쪽)
  d.ell(18,22,7,6,I1); d.ell(18,22,5,4,I2); d.ell(19,22,2.5,2,I3);
  d.line(25,17,26,27,S3); d.line(24,28,13,28,S3);
  d.px(9,13,W); d.px(10,12,W);
  d.outline(O);
  // 노래가 흘러나와요
  note(d,26,23,'#4A9AE0'); note(d,28,14,'#7AC0F8'); d.stamp(27,27,['.cc.','c..c'],{c:'#9AD8FF'});
  spark(d,4,3,'#FFE070');
},
'keroppi:c0': d=>{ // 도넛 연못
  d.grad(0,0,64,14,['#86CCF4','#9AD6F6','#B0E0F8','#C8EAF8']);
  cloud(d,6,2,12,'#FFFFFF','#E4F2FA'); cloud(d,44,4,9,'#FFFFFF');
  d.circ(58,4,2.5,'#FFF4A0'); d.circ(58,4,1.5,'#FFFFFF');
  // 나무 언덕
  for(const [x,r] of [[4,6],[14,5],[26,7],[40,5],[52,6],[62,5]]) d.circ(x,15,r,'#5AA84A');
  for(const [x,r] of [[10,4],[33,5],[47,4],[58,4]]) d.circ(x,14,r,'#4A9A3E');
  d.rect(0,15,64,25,'#8ED46A'); d.hline(0,63,15,'#A8E084');
  // 도넛 연못 (가운데 섬)
  d.ell(43,27,19,9,'#3A9AD8'); d.ell(43,26,18,8,'#5AB4E8'); d.ell(43,25,15,6,'#7ACCF0');
  d.ell(43,27,7,3,'#F0C080'); d.ell(43,26,7,3,'#F8D8A0'); d.ell(43,25,6,2,'#FF9AC0');
  for(const [x,y,c] of [[39,25,'#FFFFFF'],[42,24,'#FFE070'],[45,25,'#7AD0F8'],[47,24,'#FFFFFF'],[41,26,'#9A7AE0'],[44,26,'#7AD07A']]) d.px(x,y,c);
  // 수영 자국 (물결 고리)
  for(let a=0;a<6.28;a+=.5) d.px(43+Math.cos(a)*12,26+Math.sin(a)*5,'#C8ECFA');
  // 연잎
  for(const [x,y] of [[29,26],[56,23],[52,31],[33,31]]) {d.ell(x,y,2,1,'#3A8A3A'); d.px(x+1,y-1,'#6AC05A')}
  d.stamp(55,29,['.p.','pyp'],{p:'#FF8AB0',y:'#FFE070'});
  // 갈대
  for(const x of [24,61,62]) {d.vline(x,24,31,'#5A8A3A'); d.rect(x,22,1,3,'#8A5A3A')}
  for(let i=0;i<20;i++) d.px(d.ri(0,63),d.ri(33,39),d.rnd()<.5?'#7CC85A':'#A4E07E');
  for(const [x,y] of [[3,36],[22,38],[58,37]]) d.stamp(x-1,y-1,['.w.','wyw','.w.'],{w:'#FFFFFF',y:'#F8D048'});
  // 10 바퀴!
  d.stamp(56,15,['.f.ff.','ff.f.f','.f.f.f','.f.f.f','fff.ff'],{f:'#FFFFFF'});
},
'keroppi:c1': d=>{ // 장마 합창 대회
  d.grad(0,0,64,24,['#6A7E8E','#7A8E9A','#8A9EA6','#9AAEB0']);
  d.ell(10,3,12,4,'#5A6A7A'); d.ell(40,2,16,4,'#5A6A7A'); d.ell(60,4,8,3,'#5A6A7A');
  for(let x=0;x<64;x+=6) pine(d,x+2,26,12+((x*7)%5),'#3E6E54','#2E5E46','#3A3A30');
  d.rect(0,26,64,14,'#4E8A4A'); d.hline(0,63,26,'#6AA45A');
  // 무대 (큰 그루터기)
  d.ell(44,25,12,3,'#C8A070'); d.rect(32,25,25,9,'#8A5A3A'); d.ell(44,34,12,2,'#6A4428');
  d.ell(44,25,9,2,'#E0BC88'); d.ring(44,25,5,'#B88A58');
  for(const x of [36,42,48,54]) d.vline(x,27,34,'#6A4428');
  // 큰 버섯 우산 들
  d.vline(30,18,33,'#E8DCC0'); d.ell(30,18,5,3,'#E04A4A'); d.px(28,17,'#FFFFFF'); d.px(32,16,'#FFFFFF');
  d.vline(59,14,33,'#E8DCC0'); d.ell(59,14,5,3,'#F0A040'); d.px(57,13,'#FFF0D0'); d.px(61,14,'#FFF0D0');
  // 연잎 마이크 스탠드
  d.vline(44,14,24,'#3A3A3A'); d.ell(44,13,2,2,'#B0B8C0'); d.px(43,12,'#FFFFFF');
  // 음표 (합창)
  note(d,37,6,'#FFE070'); note(d,49,8,'#FFFFFF'); note(d,53,3,'#9AE0A0');
  // 물웅덩이
  d.ell(18,36,6,1,'#7AA6C0'); d.ell(52,38,5,1,'#7AA6C0'); d.hline(16,19,36,'#B0D4E8');
  // 빗줄기
  for(let i=0;i<70;i++){const x=d.ri(0,63), y=d.ri(0,37); d.px(x,y,'#C8DCE8'); d.px(x-1,y+1,'#A8C0D0')}
},
'keroppi:c2': d=>{ // 고래 타고 대양 횡단
  d.grad(0,0,64,16,['#5AB8F0','#74C4F2','#8ED0F4','#AADCF6']);
  cloud(d,30,3,14,'#FFFFFF','#E4F2FA'); cloud(d,4,6,8,'#FFFFFF');
  d.rect(0,16,64,24,'#2A80C8'); d.hline(0,63,16,'#1A6AB0'); for(let x=0;x<64;x+=5) d.hline(x,x+2,18+(x%3),'#5AA8E0');
  // 고래 (등이 바닥이 돼요)
  const B1='#2E5A9A', B2='#4A7AC0', B3='#7AA4DA', Wb='#E8F0F8';
  d.ell(32,40,34,11,B1); d.ell(31,39,32,10,B2); d.ell(26,32,20,3,B3);
  // 머리
  d.ell(52,32,11,8,B2); d.rect(41,32,22,8,B2); d.ell(54,37,9,3,Wb); for(let x=46;x<63;x+=2) d.vline(x,36,39,'#C8D4E4');
  d.circ(55,30,1.6,'#1A1A2A'); d.px(54,29,'#FFFFFF'); d.ell(58,33,1.2,.6,'#FF9AB0');
  // 꼬리 (왼쪽 물 위)
  d.poly([[0,30],[2,28],[4,32]],B1);
  // 물 뿜기
  d.vline(47,15,23,'#C8ECFF'); d.stamp(43,11,['.w.w.w.','w.www.w','.wwWww.','..www..'],{w:'#C8ECFF',W:'#FFFFFF'});
  d.px(42,9,'#C8ECFF'); d.px(52,10,'#C8ECFF');
  // 물보라
  d.line(3,31,40,29,'#1E4A84'); d.hline(40,46,29,'#1E4A84');
  for(let x=0;x<64;x+=3){const y=26+((x*5)%3); if(d.get(x,y)==='#2A80C8'||d.get(x,y)==='#5AA8E0') d.px(x,y,'#FFFFFF')}
  // 깃발 (최초의 개구리!)
  d.vline(38,18,26,'#8A6A4A'); d.stamp(39,18,['ggg.','gwgg','ggg.'],{g:'#4AB45A',w:'#FFFFFF'});
  d.stamp(58,6,['.b..b.','b.bb.b'],{b:'#3A4A6A'});
},
// ---------- SPIDER-MAN ----------
'spidey:s0': d=>{ // 델마 가게 샌드위치 (긴 서브 샌드위치)
  const O='#3A2418', B1='#B8742E', B2='#E0A050', B3='#F8CC80', B4='#FFF0C8', L='#4AA838', L2='#8AD860', T1='#E0403A', T2='#FF7A6A', C='#FFD040', M='#F2A0A8', P='#F4ECDC', P2='#D8CCB4';
  // 포장지
  d.poly([[1,17],[31,17],[29,27],[3,27]],P); d.line(1,17,3,27,P2); d.hline(3,29,26,P2); d.line(16,17,16,26,P2);
  // 아래 빵
  d.ell(16,19,14,3,B1); d.ell(16,18,14,2,B2);
  // 속: 상추(물결), 토마토, 치즈, 햄
  for(let x=2;x<31;x++) d.px(x,16+(x%3===0?1:0),L); for(let x=3;x<30;x+=3) d.px(x,17,L2);
  d.hline(3,29,15,M); d.hline(3,29,14,C); d.px(30,14,C); d.px(2,15,C);
  for(let x=4;x<29;x+=5){d.rect(x,13,3,1,T1); d.px(x+1,13,T2)}
  d.hline(2,30,12,L); for(let x=2;x<31;x+=2) d.px(x,11,L2);
  // 위 빵 (길쭉한 바게트)
  d.ell(16,8,14,4,B2); d.ell(15,7,12,2.5,B3); d.hline(6,20,5,B4);
  for(const x of [8,14,20,26]) d.line(x,6,x+2,9,B1);
  // 이쑤시개 깃발 두 개
  for(const x of [9,23]){d.vline(x,0,5,'#E8C890'); d.stamp(x+1,0,['rr','r.'],{r:'#E0403A'})}
  d.outline(O);
  // 고양이 머피 스티커
  d.stamp(20,20,['k...k','kk.kk','kkkkk','kykyk','kkpkk','.kkk.'],{k:'#3A3A3A',y:'#FFE070',p:'#FF9AB0'});
  d.stamp(6,21,['.ss.','s..s','.ss.'],{s:'#C8B8A0'});
  d.stamp(26,29,['.w.','www','.w.'],{w:'#FFE6A0'});
},
'spidey:s1': d=>{ // 이디스 안경
  const O='#14141C', F1='#2A2A36', F2='#4A4A5A', F3='#7A7A8E', L1='#B0303A', L2='#E05058', L3='#FF8A8A', H='#7AF0FF';
  // 다리(뒤쪽)
  d.line(4,12,1,9,F1); d.line(27,12,30,9,F1);
  // 테 + 렌즈
  for(const cx of [9,22]){d.rect(cx-6,10,13,10,F1); d.rect(cx-5,11,11,8,L1); d.rect(cx-5,11,11,4,L2); d.line(cx-4,12,cx-2,12,L3); d.px(cx-4,13,L3)}
  d.rect(15,11,2,3,F1); d.hline(3,28,10,F2); d.hline(4,27,9,F3);
  // HUD 표시
  d.ring(22,16,2,H); d.px(22,16,H); d.hline(5,9,17,H); d.hline(5,7,16,H); d.px(12,14,H);
  d.outline(O);
  // 드론 버튼 (누르지 마!)
  d.stamp(23,23,['..ooo..','.orrro.','orRrrro','orrrrro','.orrro.','..ooo..'],{o:O,r:'#E04048',R:'#FF9A9A'});
  d.stamp(9,24,['.x.x.','..x..','.x.x.'],{x:'#E04048'});
  d.stamp(2,1,['.ss.','s..s','.ss.'],{s:H}); spark(d,28,3,'#FFE070');
},
'spidey:s2': d=>{ // 아이언 스파이더 다리
  const O='#2A1010', R1='#9A1E22', R2='#D0343A', R3='#F06A6A', G1='#B07A18', G2='#E8B030', G3='#FFE27A', K='#3A3A44';
  // 위 마디 (등 연결 부분)
  T(d,5,5,15,12,2.8,R1); T(d,5,4.6,15,11.6,1.8,R2); d.line(5,3,14,9,R3);
  // 관절
  d.circ(16,13,3.2,G1); d.circ(16,13,2.2,G2); d.px(15,12,G3); d.circ(16,13,.8,K);
  d.circ(4,5,3,G1); d.circ(4,5,2,G2); d.px(3,4,G3);
  // 아래 마디
  T(d,17,16,20,25,2.2,R1); T(d,16.6,16,19.6,25,1.3,R2); d.line(17,16,19,24,R3);
  d.circ(20,26,2.4,G1); d.circ(20,26,1.4,G2);
  // 금색 끝 (뾰족)
  d.poly([[18,27],[22,27],[25,31]],G2); d.line(20,28,24,31,G3);
  // 패널 선
  d.line(9,9,10,7,O); d.line(17,20,19,19,O);
  d.outline(O);
  // 거미 엠블럼 반짝
  d.stamp(21,3,['g.g.g','.ggg.','ggggg','.ggg.','g.g.g'],{g:G2}); spark(d,28,10,'#FFF4B0'); d.px(8,22,'#FFE070');
},
'spidey:c0': d=>{ // 미드타운 과학고 (교실)
  d.rect(0,0,64,28,'#E8E0C8'); d.rect(0,22,64,6,'#B8C8D8'); d.hline(0,63,22,'#8A9AB0');
  // 창문
  for(const x of [2,18]){d.rect(x,3,13,12,'#8A6A4A'); d.rect(x+1,4,11,10,'#9AD0F0'); d.vline(x+6,4,13,'#8A6A4A'); d.hline(x+1,x+11,8,'#8A6A4A'); d.px(x+3,5,'#FFFFFF'); d.px(x+9,10,'#C8E8F8')}
  // 칠판
  d.rect(34,3,28,13,'#6A4A30'); d.rect(35,4,26,11,'#2E4A3E');
  d.stamp(37,6,['w.w.www','.w..w.w','w.w.w.w'],{w:'#FFFFFF'}); d.line(46,12,58,6,'#FFE070'); d.stamp(52,10,['www','w.w','www'],{w:'#9AD8FF'});
  d.rect(35,15,26,1,'#B8B8B8');
  // 주기율표 포스터
  d.rect(26,4,6,8,'#FFFFFF'); for(let y=5;y<11;y+=2) for(let x=27;x<31;x++) if((x+y)%2) d.px(x,y,'#7AB0E0'); else d.px(x,y,'#F0A060');
  // 책상과 레고 데스스타
  d.rect(30,24,32,2,'#C89A60'); d.rect(30,26,32,1,'#8A6A40'); d.rect(32,27,2,6,'#8A6A40'); d.rect(58,27,2,6,'#8A6A40');
  d.circ(46,18,6,'#9AA0AC'); d.circ(45,17,5,'#B8BEC8'); d.hline(40,52,18,'#6A707C');
  d.circ(43,15,1.6,'#6A707C'); d.px(43,15,'#4A5060');
  for(const [x,y] of [[47,14],[49,20],[44,21],[41,19],[50,16]]) d.px(x,y,'#8A909C');
  // 아직 덜 조립된 부분 + 흩어진 레고
  for(let x=47;x<53;x++) for(let y=19;y<24;y++) if((x+y)%2) d.px(x,y,'#E8E0C8');
  for(const [x,y,c] of [[36,22,'#E04040'],[38,23,'#4080E0'],[55,22,'#F0D040'],[57,23,'#9AA0AC'],[54,23,'#9AA0AC']]) d.rect(x,y,2,1,c);
  // 숙제 노트 (아직 안 함)
  d.rect(58,20,5,4,'#FFFFFF'); d.hline(59,62,21,'#B0B8C8'); d.hline(59,61,22,'#B0B8C8');
  // 사물함
  d.rect(0,20,0,0,'#000000');
  // 바닥
  d.rect(0,28,64,12,'#C8A878'); for(let y=28;y<40;y+=3) d.hline(0,63,y,'#B89868'); for(let x=0;x<64;x+=8) d.vline(x+((x/8)%2?3:0),29,30,'#B89868');
  d.rect(0,27,64,1,'#8A6A40');
},
'spidey:c1': d=>{ // 베네치아 운하
  d.grad(0,0,64,12,['#7AC0F0','#96D0F4','#B6DEF6']);
  // 건물들
  const bld=[[0,8,'#E8A060'],[10,4,'#F0D080'],[22,7,'#E07A6A'],[34,3,'#F4C0A0'],[46,6,'#D89A5A'],[56,2,'#E8D4B0']];
  bld.forEach(([x,y,c],i)=>{const w=i===5?8:12; d.rect(x,y,w,24-y,c); d.rect(x,y,w,1,'#9A5A3A'); for(let wy=y+3;wy<20;wy+=5) for(let wx=x+2;wx<x+w-2;wx+=4){d.rect(wx,wy,2,3,'#4A5A7A'); d.px(wx,wy-1,'#FFFFFF')}});
  for(let x=0;x<64;x+=4) d.px(x+1,24,'#6A4A3A');
  // 다리
  d.ell(40,22,10,5,'#C8B89A'); d.ell(40,24,7,4,null); for(let y=18;y<28;y++) for(let x=33;x<48;x++) if(((x-40)/7.4)**2+((y-25)/4.4)**2<=1) d.px(x,y,'#3A6A8A');
  d.hline(30,50,17,'#A89878');
  // 운하 물
  d.rect(0,24,64,16,'#3A8AB0'); d.hline(0,63,24,'#2A6A90'); for(let y=27;y<40;y+=3) for(let x=(y*3)%6;x<64;x+=8) d.hline(x,x+2,y,'#6AB4D8');
  // 운하 옆 길 (펫 자리)
  d.rect(0,30,24,10,'#C8B090'); d.hline(0,23,30,'#E0CCA8'); for(let x=0;x<24;x+=4) d.vline(x,31,39,'#B09878'); d.rect(0,30,25,1,'#E0CCA8'); d.vline(24,30,39,'#8A7A60');
  // 곤돌라
  d.poly([[28,33],[50,33],[54,29],[52,35],[30,36]],'#1E1E2A'); d.hline(31,49,33,'#C8A040'); d.vline(53,27,30,'#1E1E2A');
  // 물 괴물!
  d.ell(55,24,6,10,'#4AB4E8'); d.ell(55,22,5,8,'#7AD0F4'); d.ell(54,19,3,4,'#A8E4FA');
  d.stamp(52,17,['k...k','.....','.kkk.','k...k'],{k:'#1A4A7A'});
  d.line(49,22,45,16,'#4AB4E8'); d.line(61,22,63,15,'#4AB4E8'); d.px(44,15,'#A8E4FA'); d.px(63,14,'#A8E4FA');
  for(const [x,y] of [[47,12],[60,10],[52,11]]) d.px(x,y,'#C8ECFF');
  // 거미줄 (스파이디 흔적)
  d.line(0,0,6,6,'#FFFFFF'); d.line(0,4,4,4,'#F0F0F0'); d.line(4,0,4,4,'#F0F0F0');
},
'spidey:c2': d=>{ // 타이탄 행성
  d.grad(0,0,64,26,['#3A1E4A','#6A2E52','#A2445A','#D06A5A','#E89A6A']);
  // 고리 행성
  d.circ(48,8,6,'#F2B880'); d.circ(47,7,4,'#FFD6A8'); d.line(37,12,60,5,'#FFE6C0'); d.line(38,13,61,6,'#C88A60');
  stars(d,18,0,0,63,10,['#FFFFFF','#FFD0E0']);
  // 떠다니는 파편
  for(const [x,y,w] of [[8,5,5],[24,9,3],[32,3,4],[58,15,3],[20,15,2]]){d.rect(x,y,w,2,'#4A2A3A'); d.hline(x,x+w-1,y,'#7A4A5A')}
  // 기울어진 거대 파편 (오른쪽)
  d.poly([[38,28],[46,12],[54,10],[60,28]],'#5A3040'); d.poly([[46,12],[54,10],[52,28],[46,28]],'#7A4252'); d.line(46,12,54,10,'#A06070');
  d.poly([[56,28],[62,16],[64,16],[64,28]],'#4A2636');
  // 땅
  d.rect(0,26,64,14,'#C86A3A'); d.poly([[0,26],[18,24],[30,26],[64,25],[64,30],[0,30]],'#B05A30');
  d.rect(0,30,64,10,'#D8804A'); d.hline(0,63,30,'#E89A60');
  for(let i=0;i<24;i++) d.px(d.ri(0,63),d.ri(31,39),d.rnd()<.5?'#B86A3A':'#F0A870');
  // 크레이터
  d.ell(40,35,6,2,'#B05A30'); d.ell(40,34,5,1,'#C06A3A'); d.ell(56,38,3,1,'#B05A30');
  // 이상한 탑 구조물
  d.rect(28,18,3,8,'#6A3A4A'); d.rect(27,16,5,2,'#8A4A5A'); d.px(29,15,'#FFC0A0');
  // 스타크의 아크 원자로 빛 (떨어진 물건)
  d.circ(50,33,1.6,'#9AF0FF'); d.px(50,33,'#FFFFFF');
},
// ---------- PATRICK ----------
'patrick:s0': d=>{ // 녹은 아이스크림 (넘어진 콘 + 웅덩이)
  const O='#4A2A2A', C1='#B8742E', C2='#E0A050', C3='#F8CC80', P1='#E05A8A', P2='#FF8AB4', P3='#FFC4DA', P4='#FFFFFF', Ch='#6A3A2A';
  // 웅덩이
  d.ell(12,25,11,5,P2); d.ell(10,24,7,3,P3); d.ell(24,28,4,1.6,P2); d.ell(5,29,2,1,P2);
  d.px(7,23,P4); d.px(8,22,P4);
  // 넘어진 콘
  d.poly([[9,13],[18,22],[29,4]],C2); d.poly([[13,17],[18,22],[29,4]],C1);
  for(let i=1;i<5;i++){d.line(9+i*2.6,13-i*1.2,18+i*1.6,22-i*2.4,C1)} for(let i=1;i<4;i++){d.line(10+i*2.6,15+i*1.8,23+i*1.6,6+i*1,C3)}
  // 녹는 스쿱 (콘 입구에서 흘러나옴)
  d.circ(11,18,5,P2); d.circ(10,16,3,P3); d.px(9,14,P4); d.px(10,14,P4);
  d.ell(12,22,6,2,P2); d.hline(7,16,23,P1);
  for(const [x,y] of [[11,19],[14,17],[8,19]]) d.px(x,y,Ch);
  d.outline(O);
  // 까먹었어 (물음표)
  d.stamp(4,1,['.qq.','q..q','..q.','.q..','....','.q..'],{q:'#7A5AA0'});
  d.stamp(26,13,['.w.','w.w','.w.'],{w:'#9AD8FF'}); d.px(29,17,'#FFE070');
},
'patrick:s1': d=>{ // 악기용 마요네즈
  const O='#1E2A3A', J1='#DDE6EE', J2='#F4F8FB', J3='#B4C2D0', Y1='#F4E6B0', Y2='#FFF6D8', Lb='#3A70C8', Lb2='#6A9AE8', Ld='#2A4A8A';
  // 병 몸
  d.rect(6,8,20,20,J1); d.ell(16,28,10,2,J1); d.rect(7,9,18,18,Y1); d.rect(7,9,7,18,Y2);
  d.vline(8,10,25,'#FFFFFF'); d.vline(9,10,13,'#FFFFFF');
  // 라벨
  d.rect(6,15,20,9,Lb); d.hline(6,25,15,Lb2); d.hline(6,25,23,Ld);
  d.stamp(11,17,['k...k','kk.kk','k.k.k','k...k','k...k'],{k:'#FFFFFF'});
  d.stamp(18,17,['.yy.','yyyy','.yy.'],{y:'#FFD848'});
  // 뚜껑 (열려서 옆에)
  d.rect(7,6,18,3,J3); d.hline(7,24,6,J2);
  d.ell(16,4,6,2,Lb); d.ell(16,3,6,1.4,Lb2);
  d.outline(O);
  // 부우~ 음표
  note(d,25,1,'#E05A8A'); note(d,1,3,'#7A5AA0'); d.stamp(26,10,['.ww','w..','.ww'],{w:'#9AD8FF'}); d.px(29,13,'#9AD8FF');
},
'patrick:s2': d=>{ // 아무것도 안 하기 상
  const O='#4A2E10', G1='#B07818', G2='#E8B030', G3='#FFDA60', G4='#FFF4C0', W1='#5A3A28', W2='#7A5236', P='#FF8AB4', P2='#E0608E';
  // 손잡이
  d.ring(5,9,3.2,G1); d.ring(27,9,3.2,G1); d.ring(5,9,2.4,G2); d.ring(27,9,2.4,G2);
  // 컵
  d.poly([[6,4],[26,4],[23,15],[9,15]],G2); d.ell(16,15,7,3,G2); d.poly([[18,4],[26,4],[23,15],[18,17]],G1);
  d.hline(6,26,4,G3); d.hline(7,25,3,G4); d.vline(9,6,13,G3); d.vline(10,6,9,G4);
  // 핑크 별 (패트릭!)
  d.stamp(12,6,['...p...','..pPp..','ppPPPpp','.pPPPp.','.pp.pp.','.p...p.'],{p:P2,P:P});
  // 기둥 + 받침
  d.rect(14,18,4,4,G1); d.hline(14,17,18,G3);
  d.rect(10,22,12,2,G2); d.rect(7,24,18,6,W2); d.rect(7,28,18,2,W1); d.rect(10,25,12,3,G3);
  d.stamp(11,25,['zzz.zz','.z...z','zzz.zz'],{z:G1});
  d.outline(O);
  // 쿨쿨 zZ
  zz(d,27,17,'#9AB8F0'); d.stamp(1,15,['cc','.c','cc'],{c:'#9AB8F0'});
  spark(d,3,2,'#FFF4B0'); d.px(29,2,'#FFE070');
},
'patrick:c0': d=>{ // 우리 집 바위 밑
  d.grad(0,0,64,30,['#3A9AD8','#4AA8E0','#5AB4E6','#6CC0EC','#80CCF0']);
  // 꽃구름 (바다 꽃)
  const fl=(x,y,c)=>d.stamp(x-3,y-2,['.c.c.','ccccc','cc.cc','ccccc','.c.c.'],{c});
  fl(8,5,'#9AE0C8'); fl(24,3,'#F8C0E0'); fl(40,7,'#FFE6A0'); fl(58,3,'#B8E8FF'); fl(50,12,'#F8C0E0');
  // 먼 해초
  for(const x of [3,30,61]) for(let y=20;y<30;y++) d.px(x+((y%4)<2?0:1),y,'#2E8A6A');
  // 모래 바닥
  d.rect(0,28,64,12,'#F2DCA0'); d.hline(0,63,28,'#FFEEC0'); for(let i=0;i<26;i++) d.px(d.ri(0,63),d.ri(30,39),d.rnd()<.5?'#E0C480':'#FFF0CC');
  // 바위 (살짝 들림)
  d.ell(44,32,8,3,'#4A3020');
  d.ell(44,25,14,9,'#8A5634'); d.ell(42,23,12,7,'#A86A40'); d.ell(39,20,6,3,'#C08050');
  d.rect(30,28,29,2,'#8A5634'); for(let y=28;y<40;y++) for(let x=28;x<62;x++) if(y>=30&&d.get(x,y)==='#8A5634') d.px(x,y,'#F2DCA0');
  d.hline(31,57,30,'#2A1A10'); d.hline(33,55,31,'#2A1A10');
  // 바람개비(풍향계)
  d.vline(44,10,16,'#6A6A6A'); d.line(41,12,47,12,'#6A6A6A'); d.poly([[47,11],[49,12],[47,13]],'#6A6A6A'); d.rect(40,11,2,3,'#6A6A6A');
  // 받침 막대기
  d.vline(36,29,33,'#C8A070'); d.vline(52,29,33,'#C8A070');
  // 거품
  for(const [x,y,r] of [[26,18,1.5],[28,13,1],[25,9,1.6],[56,18,1]]){d.ring(x,y,r,'#D8F4FF'); d.px(x-.5,y-.5,'#FFFFFF')}
  // 불가사리 발자국 (오고 감)
  for(const x of [26,30]) d.stamp(x,35,['.f.','fff','f.f'],{f:'#E0B878'});
},
'patrick:c1': d=>{ // 해파리 동산
  d.grad(0,0,64,22,['#5AC0F0','#6ACAF2','#80D4F4','#98DEF6']);
  const fl=(x,y,c)=>d.stamp(x-3,y-2,['..c..','.ccc.','cc.cc','.ccc.','..c..'],{c});
  fl(6,4,'#FFFFFF'); fl(20,8,'#C8F0E0'); fl(36,3,'#FFFFFF'); fl(56,6,'#C8F0E0');
  // 언덕
  d.ell(48,30,24,12,'#5AC870'); d.ell(16,32,26,10,'#6AD47A'); d.ell(48,31,22,10,'#6AD47A');
  d.rect(0,30,64,10,'#7ADC88'); for(let i=0;i<30;i++) d.px(d.ri(0,63),d.ri(24,39),d.rnd()<.5?'#5AC870':'#9AE8A4');
  // 산호 나무
  for(const x of [28,60]){d.vline(x,16,30,'#B07AD0'); d.line(x,22,x-3,18,'#B07AD0'); d.line(x,20,x+3,15,'#B07AD0'); d.circ(x-3,17,1,'#E0A8F8'); d.circ(x+3,14,1,'#E0A8F8')}
  // 해파리들
  const jelly=(x,y,big)=>{const r=big?4:2.5; d.ell(x,y,r,r*.7,'#FF8AC8'); d.ell(x-.5,y-.5,r*.6,r*.4,'#FFC0E0'); d.hline(x-r,x+r,y+Math.round(r*.7),'#E060A8');
    for(let i=-Math.floor(r);i<=r;i+=2) for(let k=1;k<(big?6:4);k++) d.px(x+i+(k%2),y+r*.7+k,'#FF9AD0')};
  jelly(44,10,true); jelly(34,17,false); jelly(55,20,false); jelly(24,5,false);
  // 날 잡은 해파리 (그물 안에서 탈출)
  d.vline(46,20,31,'#C8A070'); d.ell(46,19,4,3,null); d.ring(46,18,3.5,'#E8E8E8'); for(let x=43;x<50;x+=2) d.vline(x,16,20,'#E8E8E8');
  d.circ(46,18,1.5,'#FF8AC8');
  // 전기 지직
  d.stamp(40,7,['y..','.y.','y..'],{y:'#FFF060'}); d.stamp(50,8,['..y','.y.','..y'],{y:'#FFF060'});
},
'patrick:c2': d=>{ // 하늘의 진짜 별들 (친척들)
  d.grad(0,0,64,40,['#0E0A2A','#16103A','#20164A','#2A1C58']);
  stars(d,50,0,0,63,30,['#FFFFFF','#FFC0D8','#FFE6A0','#9AA8F0']);
  // 별 친척들 (얼굴 있는 별)
  const st=(x,y,c,c2)=>{d.stamp(x-4,y-4,['....c....','...ccc...','ccccccccc','.ccCcCcc.','..ccccc..','..cc.cc..','.cc...cc.'],{c,C:'#3A1A2A'}); d.px(x-1,y-1,c2); d.px(x+3,y,'#FF8AB0')};
  st(30,7,'#FFE070','#FFF8C8'); st(46,4,'#FF8AB4','#FFD0E4'); st(56,14,'#FFC060','#FFE8B0'); st(38,17,'#FF9AA8','#FFD8DE');
  for(const [x,y] of [[18,4],[10,12],[60,26],[24,14]]) d.stamp(x-1,y-1,['.a.','aaa','.a.'],{a:'#FFE6A0'});
  // 달 표면 (펫 자리)
  d.ell(28,48,48,18,'#8A8AB0'); d.ell(28,49,47,17,'#A8A8C8');
  d.ell(44,36,5,1.6,'#8A8AB0'); d.ell(30,38,3,1,'#8A8AB0'); d.ell(56,33,3,1,'#8A8AB0');
  // 지구 (멀리 비키니 바텀 바다)
  d.circ(6,6,3.4,'#3A8AD8'); d.px(5,5,'#5AC870'); d.px(7,7,'#5AC870'); d.px(4,7,'#FFFFFF');
},
// ---------- SHISA ----------
'shisa:s0': d=>{ // 직접 만든 라멘
  const O='#3A1A12', R1='#A0281E', R2='#D8402E', R3='#F06A4A', Wt='#FFF6E0', B='#E8A040', B2='#F8C868', N='#FFE69A', N2='#E8C060', E='#FFFFFF', Y='#FFB020', Ch='#B8643A', Ch2='#E0946A', Nr='#2A4A2A', Gn='#5AB040', P='#FF7AA0', K='#C89060';
  // 그릇
  d.ell(16,16,14,4,R1); d.poly([[2,16],[30,16],[25,27],[7,27]],R2); d.poly([[18,16],[30,16],[25,27],[20,27]],R1);
  d.rect(11,27,10,2,R1); d.hline(4,28,20,Wt); for(let x=5;x<28;x+=3) d.px(x,21,Wt);
  d.line(4,17,8,25,R3);
  // 국물
  d.ell(16,15,13,3,B); d.ell(15,14,10,2,B2);
  // 면
  for(let x=5;x<16;x+=2) d.line(x,13,x+2,16,N); d.line(6,15,10,13,N2);
  // 차슈
  d.ell(21,13,3.6,2.4,Ch); d.ell(21,13,2.4,1.4,Ch2); d.px(21,13,Ch);
  // 계란
  d.ell(13,12,2.6,1.8,E); d.circ(13,12,1,Y);
  // 김
  d.rect(25,7,4,7,Nr); d.vline(26,8,12,'#3A6A3A');
  // 나루토
  d.ell(17,11,2,1.4,E); d.px(17,11,P); d.px(18,11,P);
  // 파
  for(const [x,y] of [[9,14],[24,15],[19,15],[11,15]]) d.px(x,y,Gn);
  // 젓가락
  d.line(22,1,30,12,K); d.line(24,1,31,10,'#A06A3A');
  d.outline(O);
  // 김(증기)
  d.stamp(6,2,['.s..','s...','.s..','..s.','.s..'],{s:'#E8E8F0'}); d.stamp(13,1,['..s','.s.','s..','.s.'],{s:'#E8E8F0'});
},
'shisa:s1': d=>{ // 남쪽 섬 히비스커스
  const O='#4A1018', R1='#B0182A', R2='#E0304A', R3='#FF6A7A', R4='#FFB0B8', Y='#FFD848', Y2='#FFF4A0', G1='#2A7A3A', G2='#4AA850', G3='#8AD878';
  // 잎
  d.poly([[2,22],[10,17],[14,24],[6,29]],G1); d.line(3,23,12,20,G2); d.poly([[20,26],[27,22],[30,29],[22,31]],G1); d.line(21,28,28,25,G2);
  // 꽃잎 5장
  const pet=(cx,cy)=>{d.circ(cx,cy,5.2,R2)};
  pet(16,7); pet(25,13); pet(22,23); pet(10,23); pet(7,13);
  d.circ(16,15,7,R2);
  d.circ(16,7,3,R3); d.circ(24,13,3,R3); d.circ(9,13,3,R3); d.px(15,4,R4); d.px(14,5,R4); d.px(24,10,R4);
  // 꽃잎 주름 (짙은 선)
  for(const [x,y] of [[16,3],[29,12],[25,27],[8,27],[3,12]]) d.line(16,15,x,y,R1);
  d.circ(16,15,3,R1);
  // 수술
  d.line(16,15,20,6,Y); d.stamp(19,3,['.y.','yYy','.y.'],{y:Y,Y:Y2}); d.px(22,5,Y); d.px(18,5,Y);
  d.outline(O);
  spark(d,28,3,'#FFF4B0');
},
'shisa:s2': d=>{ // 사장님 비법 노트
  const O='#2A1A12', C1='#2E4A7A', C2='#4A6AA8', C3='#6A8AC8', Pg='#FFF8E8', Pg2='#E8DCC4', T='#E0403A', Gd='#F2C440', Bk='#C82A3A';
  // 노트 (살짝 기울어짐)
  d.poly([[5,6],[25,3],[28,27],[8,30]],Pg2); d.poly([[4,5],[24,2],[27,26],[7,29]],C1); d.poly([[5,6],[23,3],[25,15],[7,18]],C2);
  d.line(5,6,23,3,C3);
  // 스프링
  for(let y=6;y<28;y+=3) d.stamp(3,y,['ss','.s'],{s:'#C8CCD8'});
  // 표지: 라멘 그릇 그림
  d.ell(16,13,5,1.4,Pg); d.poly([[11,13],[21,13],[19,18],[13,18]],Pg); d.line(12,9,15,6,Pg); d.line(14,9,17,6,Pg);
  d.hline(13,19,15,T);
  // '비밀' 도장
  d.ring(18,23,3.4,Bk); d.stamp(16,21,['k.k.k','.kkk.','k.k.k','.kkk.','k.k.k'],{k:Bk});
  // 책갈피 리본
  d.vline(22,26,31,Gd); d.vline(23,26,30,Gd); d.px(22,31,null);
  d.outline(O);
  // 국물 얼룩과 연필
  d.circ(10,25,1.6,'#E8B060'); d.px(10,25,'#D89040');
  d.line(26,1,30,8,'#F2C440'); d.line(27,1,31,8,'#E0A020'); d.px(30,9,'#3A3A3A'); d.px(25,0,'#FF9AB0');
  spark(d,3,2,'#FFE070');
},
'shisa:c0': d=>{ // 라멘 가게 주방
  // 벽 타일
  d.rect(0,0,64,28,'#F2EEE4'); for(let y=0;y<28;y+=4) d.hline(0,63,y,'#D8D2C4'); for(let y=0;y<28;y+=4) for(let x=(y%8?2:0);x<64;x+=4) d.vline(x,y,y+3,'#D8D2C4');
  // 노렌 (위쪽 천)
  d.rect(0,0,64,6,'#2A3A6A'); for(let x=8;x<64;x+=10) d.vline(x,1,5,'#1A2448'); d.stamp(28,1,['.www.','w.w.w','.www.'],{w:'#FFFFFF'}); d.hline(0,63,6,'#1A2448');
  // 국자 걸이
  d.hline(4,26,9,'#8A8A8A'); for(const x of [7,13,19,24]) {d.vline(x,9,14,'#9AA0A8'); d.ell(x,15,1.4,1,'#9AA0A8')}
  // 화구
  d.rect(30,24,34,4,'#4A4A52'); d.rect(30,24,34,1,'#6A6A72');
  d.stamp(36,22,['.bbb.','b.b.b'],{b:'#E85A2A'}); d.stamp(52,22,['.bbb.','b.b.b'],{b:'#E85A2A'});
  // 큰 육수 냄비
  d.rect(33,11,14,11,'#B8C0C8'); d.rect(42,11,5,11,'#9098A4'); d.hline(32,47,10,'#D8E0E8'); d.ell(40,11,7,1,'#E8B060');
  d.rect(30,14,3,2,'#6A6A72'); d.rect(47,14,3,2,'#6A6A72'); d.vline(35,12,20,'#D8E0E8');
  d.vline(43,4,11,'#8A6A40'); d.ell(43,11,2,1,'#8A6A40');
  // 작은 냄비 (면 삶기)
  d.rect(50,15,10,7,'#3A3A42'); d.hline(49,60,14,'#5A5A62'); d.rect(60,16,4,1,'#5A5A62');
  for(const x of [52,55,58]) d.vline(x,12,14,'#E8D090');
  // 김
  for(const [x,y] of [[36,3],[41,6],[44,2],[54,7],[57,4]]) d.stamp(x,y,['.s','s.','.s'],{s:'#FFFFFF'});
  // 나루토 + 그릇 선반
  d.rect(2,17,24,1,'#8A5A3A'); for(const x of [4,10,16,22]) {d.ell(x+1,16,2.4,1,'#D8402E'); d.hline(x-1,x+3,15,'#FFF6E0')}
  // 나무 바닥 / 카운터
  d.rect(0,28,64,12,'#B88A5A'); for(let y=30;y<40;y+=3) d.hline(0,63,y,'#A07448'); d.hline(0,63,28,'#D8A870');
  for(let x=0;x<64;x+=9) d.vline(x+((x/9)%2?4:0),31,32,'#A07448');
  // 바닥의 앞치마 (떨어짐)
  d.stamp(52,33,['.ww.','wwww','wrrw','wwww'],{w:'#FFFFFF',r:'#D8402E'});
},
'shisa:c1': d=>{ // 고향 섬 바다
  d.grad(0,0,64,14,['#4AB8F0','#60C4F2','#7AD0F4','#96DCF6']);
  cloud(d,34,2,14,'#FFFFFF','#E0F0FA'); cloud(d,4,4,8,'#FFFFFF');
  // 먼 섬
  d.ell(54,14,8,3,'#3A9A5A'); d.rect(46,14,16,1,'#3A9A5A');
  // 바다 (투명한 에메랄드 → 진청)
  d.grad(0,14,64,10,['#1E8ACA','#2AA4D8','#3ABCDA','#5AD4D8']);
  for(let y=15;y<24;y+=2) for(let x=(y*5)%7;x<64;x+=9) d.hline(x,x+2,y,'#8AE4F0');
  // 산호와 열대어 (얕은 물 속)
  d.stamp(30,19,['.oo.','oyyo','.oo.','o..o'],{o:'#FF8A4A',y:'#FFD848'}); d.px(29,20,'#FF8A4A');
  d.stamp(44,17,['bb.b','bbbb','bb.b'],{b:'#FFE040'}); d.px(45,17,'#1A1A1A');
  d.stamp(52,21,['.cc..c','cwcccc','.cc..c'],{c:'#4A6AF0',w:'#FFFFFF'});
  // 모래 해변
  d.poly([[0,24],[30,24],[44,40],[0,40]],'#F8E6B0'); d.poly([[30,24],[64,26],[64,40],[44,40]],'#5AD4D8');
  d.line(30,24,44,40,'#FFFFFF'); d.line(31,24,45,40,'#C8F4F4'); for(let i=0;i<14;i++) d.px(d.ri(0,34),d.ri(26,39),'#E8D090');
  for(let y=27;y<40;y+=3) for(let x=48+(y%2)*3;x<64;x+=7) d.hline(x,x+2,y,'#8AE4F0');
  d.stamp(54,30,['.r.','rrr','r.r'],{r:'#FF6A5A'});
  // 붉은 기와 지붕 정자 + 시사 석상 (작은)
  d.vline(38,10,24,'#7A4A2A'); d.poly([[30,12],[38,4],[46,12]],'#D8503A'); for(let x=32;x<46;x+=3) d.vline(x,9+Math.abs(x-38)*0+0,11,'#B03A28');
  d.hline(30,46,12,'#A03020'); d.vline(31,12,24,'#7A4A2A'); d.vline(45,12,22,'#7A4A2A');
  d.stamp(36,1,['.c.c.','ccccc','cwcwc','ccccc'],{c:'#E8A040',w:'#3A2A1A'});
  // 야자수
  d.line(60,24,57,8,'#8A5A32'); d.line(61,24,58,8,'#A06A3A');
  for(const [x,y] of [[50,9],[64,6],[52,4],[63,12],[58,2]]) d.line(57,7,x,y,'#3A9A4A'); d.circ(57,8,1,'#6A3A1A');
  // 히비스커스 덤불
  d.circ(26,24,3,'#3A9A4A'); d.px(25,23,'#E0304A'); d.px(27,25,'#E0304A');
  // 바닷가 발자국과 수건
  d.stamp(24,33,['wrwrwrw','rwrwrwr'],{w:'#FFFFFF',r:'#E0304A'});
},
'shisa:c2': d=>{ // 라멘 순례 마지막 집 (석양 포장마차)
  d.grad(0,0,64,24,['#4A2A6A','#8A3A72','#D0506A','#F07A5A','#F8A85A','#FCD078']);
  d.circ(22,22,6,'#FFD890'); d.circ(22,22,4,'#FFF0C0');
  // 먼 도시 실루엣
  for(const [x,w,h] of [[0,6,6],[7,4,9],[12,8,5],[34,5,8],[40,7,5],[48,4,10],[54,10,6]]) d.rect(x,24-h,w,h,'#6A3A5A');
  d.rect(0,24,64,16,'#7A5A5A'); d.hline(0,63,24,'#9A6A60');
  // 길 (석양 반사)
  d.rect(0,30,64,10,'#8A6A64'); for(let x=0;x<64;x+=6) d.hline(x,x+3,34,'#A88078'); d.hline(0,63,30,'#A88078');
  // 포장마차
  d.rect(30,10,32,2,'#C8402E'); d.poly([[28,10],[34,5],[58,5],[64,10]],'#E05A3A'); for(let x=32;x<62;x+=4) d.line(x,6,x-1,9,'#C8402E');
  d.vline(31,12,30,'#6A4428'); d.vline(61,12,30,'#6A4428');
  // 노렌 천
  for(let x=33;x<60;x+=5) {d.rect(x,12,4,5,'#2A3A6A'); d.px(x+1,13,'#FFFFFF')}
  // 가게 안 따뜻한 불빛 + 냄비
  d.rect(32,17,29,6,'#FFD890'); d.rect(40,18,8,4,'#B8C0C8'); d.hline(39,48,17,'#D8E0E8');
  d.stamp(41,13,['.s.s','s.s.','.s.s'],{s:'#FFFFFF'});
  // 카운터 + 의자
  d.rect(30,23,33,3,'#8A5A32'); d.hline(30,62,23,'#B07A48'); d.rect(31,26,31,4,'#6A4428');
  for(const x of [36,46,56]) {d.rect(x-1,28,4,1,'#C8402E'); d.vline(x+1,29,32,'#3A3A3A')}
  // 그릇 쌓임 (다 먹었다!)
  for(let i=0;i<3;i++) d.stamp(50,20-i*2,['rrrrr','.rrr.'],{r:i%2?'#F06A4A':'#D8402E'});
  // 빨간 등
  d.vline(28,10,12,'#3A3A3A'); d.ell(28,15,2,3,'#E83A2A'); d.hline(27,29,15,'#FFB070'); d.px(28,14,'#FFD8A0');
  // 순례 스탬프 카드 (땅에 떨어진 지도)
  d.rect(24,33,8,5,'#FFF4D8'); for(const [x,y] of [[25,34],[27,34],[29,34],[25,36],[27,36],[29,36]]) d.px(x,y,'#D8402E'); d.px(30,36,'#FFD848');
},
// ---------- GHOST ----------
'ghost:s0': d=>{ // 구멍 뚫린 하얀 이불
  const O='#2A2A44', W1='#FFFFFF', W2='#E4E8F4', W3='#BCC4DC', H='#8A6A4A', H2='#B08A60', M='#9AA0B0';
  // 옷걸이
  d.stamp(14,0,['.mm.','m..m','...m','..m.'],{m:M}); d.line(16,4,5,9,H); d.line(16,4,27,9,H); d.hline(5,27,9,H2);
  // 이불 (주름 진 천)
  d.poly([[4,9],[28,9],[29,27],[3,27]],W2);
  d.poly([[8,9],[14,9],[13,27],[7,27]],W1); d.poly([[19,9],[24,9],[25,27],[20,27]],W1);
  d.vline(15,10,27,W3); d.vline(26,11,27,W3); d.vline(6,11,27,W3);
  // 물결 밑단
  for(let x=3;x<30;x++){const k=(x%6); if(k<3) d.px(x,28,W2); if(k===1) d.px(x,29,W2)}
  // 눈 구멍 (진짜 구멍!)
  d.ell(12,15,2,2.4,null); d.ell(21,15,2,2.4,null);
  d.outline(O);
  // 가위
  d.stamp(23,24,['..o.o','.o..o','o.oo.','ooo..','o....'],{o:'#5A6A8A'});
  d.ring(23,28,1.2,'#E05A6A'); d.ring(26,28,1.2,'#E05A6A');
  d.stamp(1,1,['b.b','.b.','b.b'],{b:'#C8D0F0'}); d.px(30,4,'#C8D0F0');
},
'ghost:s1': d=>{ // 유령 마을 사탕
  const O='#2E1A4A', P1='#6A3AB0', P2='#9A6AE0', P3='#C8A8FF', T1='#3AB8B0', T2='#7AE8D8', W='#FFFFFF', Wr='#E8E0FF', Wr2='#B8A8E8';
  // 포장지 꼬임
  d.poly([[1,9],[8,13],[8,19],[1,23],[3,16]],Wr); d.poly([[31,9],[24,13],[24,19],[31,23],[29,16]],Wr);
  d.line(2,11,7,15,Wr2); d.line(2,21,7,17,Wr2); d.line(30,11,25,15,Wr2); d.line(30,21,25,17,Wr2);
  // 사탕 본체 (반투명 줄무늬)
  d.ell(16,16,9,8,P2); for(let i=-12;i<16;i+=5) d.line(8+i,24,16+i,8,P1);
  d.ell(16,16,9,8,null); d.ell(16,16,9,8,P2); for(let x=7;x<26;x++) for(let y=8;y<25;y++){if(d.get(x,y)===P2&&((x+y)%6<2)) d.px(x,y,T1)}
  d.ell(14,13,4,3,P3); d.px(12,11,W); d.px(13,11,W); d.px(11,12,W);
  // 꼬마 유령 얼굴
  for(let y=14;y<21;y++) for(let x=11;x<21;x++) if(d.get(x,y)===T1) d.px(x,y,P2);
  d.stamp(12,15,['kk...kk','kk...kk','.......','..kkk..','...t...'],{k:'#2E1A4A',t:T2});
  d.px(11,18,'#FF9AD0'); d.px(19,18,'#FF9AD0');
  d.outline(O);
  // 투명 혀 반짝
  spark(d,26,4,'#C8F8FF'); d.px(5,4,T2); d.px(6,28,P3); d.px(27,28,T2);
},
'ghost:s2': d=>{ // 꺼지지 않는 촛불
  const O='#2A1A30', C1='#E8D8C0', C2='#FFF4E0', C3='#C8B49A', F1='#FF7A2A', F2='#FFC040', F3='#FFF4A0', B1='#6A5A8A', B2='#9A8AC0', B3='#C8BCE8';
  // 받침 접시와 손잡이
  d.ell(16,27,12,3,B1); d.ell(16,26,11,2,B2); d.hline(9,22,25,B3);
  d.ring(27,23,2.6,B1);
  // 초
  d.rect(12,13,8,13,C1); d.rect(12,13,3,13,C2); d.rect(18,13,2,13,C3);
  // 촛농
  d.ell(16,13,4,1,C2); d.vline(12,13,17,C2); d.vline(19,13,15,C1); d.px(19,16,C1);
  // 용기 얼굴
  d.stamp(14,18,['k..k','....','.kk.'],{k:'#5A3A3A'}); d.px(13,20,'#FFA0A0'); d.px(18,20,'#FFA0A0');
  // 심지 + 불꽃
  d.vline(16,10,12,'#3A2A2A');
  d.poly([[16,1],[20,7],[19,11],[13,11],[12,7]],F1); d.poly([[16,3],[18,8],[17,11],[15,11],[14,8]],F2); d.ell(16,9,1,1.6,F3);
  d.outline(O);
  // 따뜻한 빛
  for(let y=0;y<16;y++) for(let x=4;x<29;x++){const q=Math.hypot(x-16,(y-7)*1.1); if(!d.get(x,y)&&q<10&&q>5&&(x+y)%2===0) d.px(x,y,'#FFE8A0')}
  d.px(3,3,'#FFE8A0'); d.px(29,10,'#FFE8A0');
},
'ghost:c0': d=>{ // 옆집 벽 속
  // 왼쪽 방 (우리 집, 어두운 벽지)
  d.rect(0,0,26,30,'#5A6A9A'); for(let x=2;x<26;x+=5) d.vline(x,0,29,'#4E5E8A');
  // 벽 단면 (벽돌)
  d.rect(26,0,10,30,'#B0705A'); for(let y=0;y<30;y+=3){d.hline(26,35,y,'#8A5040'); for(let x=26+((y/3)%2?2:0);x<36;x+=5) d.vline(x,y,y+2,'#8A5040')}
  // 유령 모양 구멍 (통과한 자국)
  d.ell(31,14,4,5,'#2A2A3A'); d.rect(27,14,9,8,'#2A2A3A'); for(const x of [27,30,33]) d.px(x+1,22,'#2A2A3A');
  d.px(30,13,'#C8D0F8'); d.px(32,13,'#C8D0F8');
  // 오른쪽 방 (옆집, 따뜻한 벽지)
  d.rect(36,0,28,30,'#F2D8A8'); for(let x=38;x<64;x+=4) for(let y=2;y<30;y+=6) d.px(x+((y/6)%2?2:0),y,'#E0B880');
  // 액자, 창문, 램프, 소파
  d.rect(42,4,9,7,'#8A5A3A'); d.rect(43,5,7,5,'#8AC8E8'); d.poly([[43,10],[46,6],[50,10]],'#5AA858'); d.px(48,6,'#FFF4A0');
  d.rect(55,3,7,9,'#FFFFFF'); d.rect(56,4,5,7,'#1E2A5A'); d.vline(58,4,10,'#FFFFFF'); d.px(57,5,'#FFF4A0');
  d.vline(54,16,28,'#6A4A3A'); d.poly([[51,16],[57,16],[56,12],[52,12]],'#F4A060'); d.ell(54,18,5,3,'#FFF0C0'); d.vline(54,17,28,'#6A4A3A');
  d.rect(38,20,14,7,'#D05A6A'); d.rect(38,18,14,3,'#E07A86'); d.rect(37,19,2,8,'#B04050'); d.rect(51,19,2,8,'#B04050');
  d.rect(42,20,4,2,'#FFE6A0');
  // 몰래 본 흔적: 둥둥 효과
  d.stamp(38,13,['.w.w','w.w.'],{w:'#FFFFFF'});
  // 바닥 (양쪽 이어진 나무)
  d.rect(0,30,64,10,'#8A6040'); for(let y=32;y<40;y+=3) d.hline(0,63,y,'#7A5236'); d.hline(0,63,30,'#A87A50');
  d.rect(26,30,10,1,'#6A4028');
  // 걸레받이
  d.hline(0,25,29,'#3A4A72'); d.hline(36,63,29,'#C89A60');
},
'ghost:c1': d=>{ // 오래된 저택
  d.grad(0,0,64,30,['#1A1030','#241640','#2E1E50','#3A2A58']);
  stars(d,20,0,0,63,14,['#FFFFFF','#C8B8F0']);
  // 초승달
  d.circ(10,6,4,'#FFF4C0'); d.circ(12,5,3.4,'#1A1030');
  // 박쥐
  for(const [x,y] of [[22,5],[28,9],[16,11]]) d.stamp(x,y,['b.b.b','bbbbb','.b.b.'],{b:'#0E0A18'});
  // 저택
  const M1='#4A3A5A', M2='#3A2C4A', R='#2A1E36', Wn='#F8D860';
  d.rect(34,12,26,20,M1); d.rect(50,12,10,20,M2);
  d.poly([[32,12],[42,4],[52,12]],R); d.poly([[48,12],[55,6],[62,12]],R);
  d.rect(38,4,6,10,M1); d.poly([[37,4],[41,-2],[45,4]],R); d.rect(40,6,2,3,Wn);
  // 기울어진 굴뚝
  d.poly([[56,2],[59,1],[60,8],[57,8]],M2);
  for(const [x,y,lit] of [[36,15,1],[44,15,0],[53,15,1],[36,22,0],[44,22,1],[53,22,0]]){d.rect(x,y,4,5,lit?Wn:'#1A1428'); d.vline(x+2,y,y+4,R); d.hline(x,x+3,y+2,R)}
  // 깨진 창문 + 문
  d.px(45,16,'#3A2A58'); d.rect(46,27,5,5,'#1A1428'); d.ell(48,27,2,1,'#1A1428'); d.px(50,29,'#C8A040');
  // 창문의 놀란 눈 (무서운 것!)
  d.stamp(44,22,['wkkw','....','w..w'],{w:'#FFFFFF',k:'#E03A3A'});
  // 죽은 나무
  d.vline(27,16,32,'#1E1828'); d.line(27,20,23,15,'#1E1828'); d.line(27,22,31,17,'#1E1828'); d.line(23,15,21,15,'#1E1828'); d.line(31,17,32,14,'#1E1828');
  // 땅 + 안개
  d.rect(0,30,64,10,'#2A3A2E'); d.hline(0,63,30,'#3A4E3E');
  for(let y=29;y<34;y++) for(let x=0;x<64;x++) if((x+y*3)%7<2) d.px(x,y,'#6A7A8E');
  // 울타리
  for(let x=24;x<64;x+=3) {d.vline(x,30,35,'#1A1420'); d.px(x,29,'#1A1420')} d.hline(24,63,32,'#1A1420');
  // 비석
  d.rect(56,34,4,4,'#7A7A8A'); d.ell(58,34,2,1,'#7A7A8A'); d.hline(57,59,35,'#5A5A6A');
  // 땀방울 (놀란 흔적)
  d.stamp(4,24,['.s.','sSs','.s.'],{s:'#8AC8F8',S:'#FFFFFF'});
},
'ghost:c2': d=>{ // 보름달 유령 무도회
  d.grad(0,0,64,26,['#141638','#1C2050','#262A62','#323470']);
  stars(d,24,0,0,63,20,['#FFFFFF','#C8D0FF']);
  // 큰 보름달
  d.circ(44,10,9,'#FFF4C8'); d.circ(44,10,8,'#FFFAE0'); d.circ(40,8,1.6,'#F0E4B0'); d.circ(47,13,2,'#F0E4B0'); d.circ(48,6,1,'#F0E4B0');
  // 등불 줄
  for(let x=0;x<64;x++) d.px(x,3+Math.round(Math.sin(x/10.2)*2+2),'#3A3A5A');
  for(const x of [5,15,25,35,55]) {const y=3+Math.round(Math.sin(x/10.2)*2+2); d.rect(x-1,y+1,3,3,['#FFD860','#FF9AD0','#9AE0FF'][x%3]); d.px(x,y+2,'#FFFFFF')}
  // 무도회 테라스 난간
  d.rect(0,22,64,3,'#E0DCF0'); for(let x=1;x<64;x+=4) d.rect(x,25,2,5,'#C8C4E0'); d.rect(0,29,64,1,'#A8A4C8');
  // 체크 무늬 무대 바닥
  for(let y=30;y<40;y++) for(let x=0;x<64;x++) d.px(x,y,((Math.floor(x/4)+Math.floor((y-30)/3))%2)?'#3A3A6A':'#7A7AB0');
  d.hline(0,63,30,'#9A9AD0');
  // 춤추는 유령들
  const gh=(x,y,c)=>{d.stamp(x,y,['..ccc..','.ccccc.','ccecec c','ccccccc','ccc.ccc','cc...cc','c.....c'].map(r=>r.replace(' ','')),{c,e:'#2A2A44'})};
  gh(34,15,'#F4F6FF'); gh(52,17,'#E8F0FF'); gh(27,21,'#F0E8FF');
  d.px(40,18,'#F4F6FF'); d.px(33,18,'#F4F6FF'); d.px(51,19,'#E8F0FF'); d.px(59,20,'#E8F0FF');
  // 음표
  note(d,46,20,'#FFD860'); note(d,60,9,'#FF9AD0'); note(d,22,12,'#9AE0FF');
  // 달빛 무대 조명
  for(let y=31;y<40;y++) for(let x=0;x<64;x++) if(d.get(x,y)==='#7A7AB0'&&Math.abs(x-46)<10) d.px(x,y,'#A8A8D8');
},
// ---------- RAKUN ----------
'rakun:s0': d=>{ // 반짝이는 열쇠
  const O='#5A3A08', G1='#B07A10', G2='#E0A824', G3='#FFD24A', HL='#FFF6C0', R='#E04848', R2='#FF8A8A', S='#7A4A20';
  // 손잡이(고리) - 왼쪽 위 동그란 꽃 모양
  for(const [a,b] of [[0,-4],[4,0],[0,4],[-4,0]]) d.circ(10+a*.9,10+b*.9,3,G2);
  d.circ(10,10,5.2,G2); d.circ(9,9,4,G3); d.circ(10,10,2.2,null);
  for(let y=8;y<=12;y++)for(let x=8;x<=12;x++) if((x-10)**2+(y-10)**2<=3.6) d.clear(x,y);
  d.circ(10.5,10.5,1.2,R); d.px(10,10,R2);   // 박힌 빨간 보석
  // 몸통 막대
  T(d,13,13,25,25,1.6,G2); T(d,12.5,12.5,24.5,24.5,.6,G3); T(d,14.6,14.6,26,26,.5,G1);
  d.circ(14.5,14.5,2.4,G2); d.circ(14,14,1.2,G3);              // 목 장식 링
  // 열쇠 이빨
  d.stamp(17,23,['gg.','ggg','.gg','.g.'],{g:G2}); d.stamp(21,25,['ggg','ggG','.g.'],{g:G2,G:G1});
  d.stamp(19,22,['G'],{G:G1});
  d.circ(26,26,1.6,G2); d.px(27,27,G1);
  // 하이라이트
  d.px(7,7,HL); d.px(8,6,HL); d.px(6,8,HL); d.px(15,15,HL); d.px(18,18,HL);
  // 꼬리표 끈
  d.line(5,14,3,19,S); d.rect(1,19,5,6,'#F2E2B8'); d.px(3,21,'#C8A870'); d.hline(2,4,23,'#C8A870');
  d.outline(O);
  spark(d,27,5,'#FFE070'); spark(d,20,9,'#FFFFFF','#FFE070'); d.px(29,14,'#FFE070'); d.px(12,26,'#FFE070'); plus(d,6,29,'#FFF0A0');
},
'rakun:s1': d=>{ // 냇가 조약돌 비누
  const O='#2E4A4A', S1='#5AA89A', S2='#86CEBE', S3='#B4EADC', HL='#F0FFFA', K='#3E7E74', B='#CFEFFF', BW='#FFFFFF', BB='#8EC8E8';
  // 받침 젖은 조약돌
  d.ell(16,26,13,3.5,'#8A8C90'); d.ell(15,25,11,2.5,'#B0B2B8'); d.hline(9,14,24,'#D0D2D8');
  // 조약돌 비누 본체
  d.ell(16,18,11,7,S1); d.ell(15,17,10,6,S2); d.ell(13,15,6,3,S3); d.hline(9,12,13,HL); d.px(8,14,HL);
  // 찍힌 발바닥 자국
  d.stamp(18,16,['.k.k.','k...k','..k..','.kkk.','.kkk.'],{k:K});
  // 거품
  d.ell(12,12,7,2.5,BW); d.circ(8,11,3,BW); d.circ(14,10,3.2,BW); d.circ(19,11,2.4,BW);
  d.hline(6,20,13,B); d.px(9,10,B); d.px(15,9,B);
  // 떠다니는 비눗방울
  d.circ(25,6,3,B); d.circ(24,5,1,BW); d.circ(6,4,2,B); d.px(5,3,BW); d.circ(28,13,1.6,B);
  d.outline(O);
  // 방울 테두리를 연하게
  for(const [cx,cy,r] of [[25,6,4],[6,4,3],[28,13,3]]) for(let y=cy-r;y<=cy+r;y++)for(let x=cx-r;x<=cx+r;x++) if(d.get(x,y)===O&&Math.abs(Math.hypot(x-cx,y-cy)-r)<1.2&&y<9) d.px(x,y,BB);
  d.px(29,22,'#8EC8E8'); d.px(2,20,'#8EC8E8'); d.px(1,22,'#8EC8E8'); d.px(30,24,'#8EC8E8');
},
'rakun:s2': d=>{ // 쓰레기통 왕의 왕관
  const O='#2A2430', T1='#8A8C98', T2='#B8BCC8', T3='#E4E6EE', R='#D83A3A', R2='#FF7070', Bl='#3A6AD8', Bl2='#80A8FF', Gn='#3AA850', Gn2='#88E08A', Y='#F2C230', Y2='#FFE890';
  // 깡통 띠 (왕관 몸통)
  d.poly([[3,18],[29,18],[27,28],[5,28]],T2); d.rect(5,24,22,4,T1); d.hline(4,28,19,T3); d.hline(5,27,22,T3);
  for(let x=6;x<27;x+=3) d.vline(x,20,27,T1);  // 깡통 주름
  // 뾰족 끝 다섯 개
  for(const [x,h] of [[5,8],[10,11],[16,13],[22,11],[27,8]]) {d.poly([[x-4,19.5],[x+4,19.5],[x,19-h]],T2); d.line(x,20-h,x-2,18,T3); d.line(x+1,21-h,x+3,18,T1)}
  // 병뚜껑 보석 (톱니 테두리)
  const cap=(cx,cy,c,c2)=>{d.circ(cx,cy,2.6,c); for(let a=0;a<12;a++){const t=a*Math.PI/6; d.px(cx+Math.cos(t)*3.4,cy+Math.sin(t)*3.4,c)} d.circ(cx-.5,cy-.5,1.2,c2)};
  cap(16,5,R,R2); cap(5,10,Bl,Bl2); cap(27,10,Gn,Gn2);
  cap(10,24,Y,Y2); cap(22,24,R,R2); cap(16,24,Bl,Bl2);
  // 따개 고리
  d.px(15,4,'#FFFFFF');
  d.outline(O);
  spark(d,3,4,'#FFE070'); spark(d,29,3,'#FFE070'); d.px(12,2,'#FFFFFF'); d.px(30,22,'#FFE070');
},
'rakun:c0': d=>{ // 동네 뒷골목
  // 노을빛 좁은 하늘
  d.grad(0,0,64,10,['#3A2E5A','#5A3E72','#8A5078','#C06A70']);
  // 왼쪽 벽 (벽돌)
  d.rect(0,0,24,32,'#7A4E4A');
  for(let y=0;y<32;y++) for(let x=0;x<24;x++) if(y%4===3||((x+((y>>2)%2)*4)%8===0)) d.px(x,y,'#5E3A38');
  d.rect(0,18,24,14,'#8A6A60'); for(let y=18;y<32;y+=3) d.hline(0,23,y,'#7A5A52');  // 아랫벽 시멘트 (밋밋)
  // 오른쪽 건물
  d.rect(24,2,40,30,'#5A5868'); for(let y=2;y<32;y+=4) d.hline(24,63,y,'#4A4858');
  d.rect(30,6,8,7,'#2A2838'); d.rect(31,7,6,5,'#FFD27A'); d.vline(34,7,11,'#2A2838'); d.hline(31,36,9,'#2A2838'); // 불 켜진 창
  d.rect(46,4,6,6,'#2A2838'); d.rect(47,5,4,4,'#3E4A6A');
  // 비상계단
  d.hline(42,62,13,'#2A2A30'); for(let x=42;x<=62;x+=2) d.vline(x,11,13,'#2A2A30'); d.line(44,14,56,24,'#2A2A30'); d.hline(42,62,24,'#2A2A30');
  // 가로등
  d.vline(60,4,31,'#2E2E38'); d.rect(56,3,5,2,'#2E2E38'); d.rect(56,5,3,1,'#FFF0A0');
  // 바닥 아스팔트
  d.rect(0,32,64,8,'#4A4A54'); d.hline(0,63,32,'#6A6A74'); for(let x=2;x<64;x+=9) d.hline(x,x+2,36,'#3A3A44');
  d.ell(57,33,6,1.2,'#6A6458'); d.hline(53,61,33,'#7E7868'); d.ell(48,37,6,1,'#5A6A8A'); d.hline(45,49,37,'#8A9AC0'); // 물웅덩이
  // 쓰레기통 (주인공)
  d.rect(30,20,12,13,'#4A7A5A'); d.rect(31,20,3,13,'#6AA07A'); for(let x=33;x<42;x+=3) d.vline(x,21,32,'#3A6048');
  d.hline(30,41,25,'#3A6048'); d.hline(29,42,20,'#2E4A3A');
  // 뒤집힌 뚜껑
  d.ell(45,31,4,1.5,'#6AA07A'); d.hline(42,48,32,'#3A6048'); d.rect(44,29,2,1,'#2E4A3A');
  // 넘치는 보물
  d.circ(33,18,2,'#2E2E36'); d.px(32,17,'#5A5A66'); // 봉지
  d.circ(38,18,2.5,'#2E2E36'); d.px(37,17,'#5A5A66'); d.px(38,15,'#2E2E36');
  d.stamp(34,14,['..b','.b.','b..'],{b:'#E8E8F0'}); d.stamp(35,15,['ff.f','ffff','f.ff'].slice(0,0),{f:'#fff'});
  d.stamp(26,30,['.bbbb.b','bwbwbbb','.bbbb.b'],{b:'#E8E8F0',w:'#B8B8C0'}); // 생선뼈
  d.stamp(50,27,['rrr','rgr','rrr','.r.'],{r:'#D84848',g:'#FFFFFF'}); // 찌그러진 깡통
  d.stamp(51,25,['s'],{s:'#C0C0C8'});
  d.stamp(23,33,['yyy','y.y'],{y:'#E8C040'});  // 반짝이 병뚜껑
  // 반짝임 + 고양이 눈
  spark(d,40,15,'#FFE070'); d.px(36,13,'#FFFFFF');
  d.px(48,9,'#9AF09A'); d.px(50,9,'#9AF09A');
  d.px(10,4,'#FFE070'); d.px(52,1,'#FFE0C0'); d.px(20,2,'#FFE0C0');
},
'rakun:c1': d=>{ // 숲속 냇가
  d.grad(0,0,64,14,['#BDE8F0','#CDEFE6','#DDF4DC']);
  // 뒤쪽 숲
  for(const [x,h,c] of [[2,14,'#4E8A5A'],[12,17,'#3E7A4E'],[24,12,'#4E8A5A'],[44,16,'#3E7A4E'],[56,13,'#4E8A5A'],[34,18,'#2E6A42']]) pine(d,x,18,h,c,'#2E5A3A','#5A3A28');
  d.rect(0,17,64,4,'#5E9A5A');
  // 앞쪽 풀밭 (왼쪽 넓게)
  d.rect(0,20,64,20,'#7CC070'); for(let y=21;y<40;y+=3) for(let x=(y%2)*3;x<64;x+=7) d.px(x,y,'#68AC5E');
  // 냇물 (오른쪽 위에서 오른쪽 아래로 휘어짐)
  for(let y=19;y<40;y++){const c=40+Math.round(Math.sin((y-19)/6)*4)+(y-19)*.5, w=4+(y-19)*.45; d.hline(Math.round(c-w),Math.round(c+w),y,'#4AA8D8'); d.hline(Math.round(c-w),Math.round(c-w)+1,y,'#8ED0F0'); if(y%3===0) d.hline(Math.round(c-1),Math.round(c+2),y,'#B8E8FF')}
  // 물가 돌
  for(const [x,y,r] of [[33,30,2.5],[30,35,2],[56,27,2.5],[60,34,3],[38,22,1.6]]){d.ell(x,y,r+1,r*.7,'#8A8E96'); d.ell(x-.5,y-.5,r*.6,r*.4,'#B6BAC2')}
  // 물에 반쯤 담긴 사과 + 거품
  d.circ(45,28,2.6,'#E03A3A'); d.circ(44,27,1,'#FF8A8A'); d.vline(45,24,25,'#6A4020'); d.px(46,24,'#5AB040');
  d.hline(41,49,31,'#FFFFFF'); d.px(42,30,'#FFFFFF'); d.px(48,30,'#FFFFFF'); d.px(43,32,'#B8E8FF');
  // 물가에 놓인 사과 하나 + 씨
  d.circ(54,22,2,'#E03A3A'); d.px(53,21,'#FF8A8A'); d.px(54,19,'#6A4020');
  // 반짝 물보라 (열 번 씻은)
  for(const [x,y] of [[40,25],[50,26],[47,24],[42,23]]) d.px(x,y,'#FFFFFF');
  spark(d,50,30,'#FFFFFF','#B8E8FF');
  // 수건 걸린 나뭇가지 (깔끔한 신사)
  d.line(58,4,63,8,'#5A3A28'); d.rect(59,6,3,4,'#F4F0F4'); d.vline(60,6,9,'#E0A0A0');
  // 꽃
  for(const [x,y,c] of [[25,24,'#FFE070'],[28,37,'#FFFFFF'],[62,38,'#FFB0D0'],[3,38,'#FFFFFF'],[24,31,'#FFB0D0']]) d.stamp(x-1,y-1,['.c.','cyc','.c.'],{c,y:'#F0A030'});
  // 나비
  d.stamp(30,9,['p.p','.k.','p.p'],{p:'#FF9AD0',k:'#3A2A2A'});
},
'rakun:c2': d=>{ // 잠들지 않는 도시
  d.grad(0,0,64,30,['#120A2E','#1E1048','#2E1660','#4A1E78','#6A2A88','#7A3090']);
  stars(d,14,0,0,63,8,['#FFFFFF','#C8B0FF']);
  d.circ(10,5,3,'#FFF0C8'); d.circ(11,4,3,'#1E1048'); // 초승달
  // 먼 빌딩 실루엣
  for(const [x,w,h] of [[0,8,14],[22,6,18],[30,7,12],[50,6,16],[58,6,20]]) d.rect(x,24-h+8,w,h,'#2A1E4E');
  // 큰 빌딩들 (가운데·오른쪽)
  const bld=(x,y,w,h,c,win)=>{d.rect(x,y,w,h,c); for(let j=y+2;j<y+h-1;j+=3) for(let i=x+1;i<x+w-1;i+=2) if(d.rnd()<.65) d.px(i,j,win[d.ri(0,win.length-1)])};
  bld(26,10,10,24,'#3A2A68',['#FFE070','#FFC060','#9AE0FF']);
  d.vline(31,3,9,'#5A4A88'); d.px(31,2,'#FF4A6A');  // 안테나 빨간불
  bld(38,4,9,30,'#2E2458',['#FFE070','#FFFFFF','#FF9AD0']);
  d.poly([[38,4],[42,0],[46,4]],'#4A3A80');
  bld(49,13,8,21,'#40306E',['#9AE0FF','#FFE070']);
  bld(57,8,7,26,'#33265E',['#FFE070','#FFB060']);
  // 네온 간판
  d.frame(48,16,10,5,'#FF4AB0'); d.rect(49,17,8,3,'#3A1040'); d.stamp(50,17,['y.y.y','.y.y.','y.y.y'],{y:'#FFE070'});
  d.frame(25,20,6,4,'#4AF0FF'); d.px(27,21,'#FFFFFF'); d.px(28,22,'#FFFFFF');
  // 거리 (왼쪽 넓은 인도)
  d.rect(0,30,64,10,'#2A2440'); d.hline(0,63,30,'#5A4A7A');
  d.rect(0,34,64,6,'#1E1A30'); for(let x=24;x<64;x+=8) d.hline(x,x+3,37,'#FFE070');
  // 젖은 거리 반사
  for(const [x,c] of [[30,'#FFE070'],[41,'#FF9AD0'],[52,'#FF4AB0'],[60,'#FFC060']]) {d.vline(x,35,39,c); d.px(x+1,36,c)}
  // 가로등
  d.vline(23,18,29,'#5A4A7A'); d.rect(22,17,3,2,'#FFF0A0'); d.px(23,19,'#FFE070');
  // 반짝이 천국
  for(const [x,y] of [[18,12],[56,3],[34,6],[6,14],[47,27]]) spark(d,x,y,'#FFE070');
  for(const [x,y] of [[14,18],[44,10],[62,12],[20,26]]) d.px(x,y,'#FFFFFF');
  // 길 위에 떨어진 반짝이 병뚜껑과 동전
  d.stamp(36,31,['yyy','yWy','yyy'],{y:'#E8B830',W:'#FFF4B0'}); d.stamp(44,32,['.c.','cWc'],{c:'#C0C8D8',W:'#FFFFFF'});
},

// ---------- MIKAEL ----------
'mikael:s0': d=>{ // 꼭 닮은 브라키오 인형: 길쭉한 목에 작은 머리, 미카엘을 닮은 회색 브라키오사우루스 인형
  const O='#232A38', B1='#5E687A', B2='#7C8698', B3='#9AA4B4', B4='#C0C8D4', P='#D4A4AC', E='#1A1E2A', W='#FFFFFF', St='#E8ECF4', R='#E06A7A';
  // 꼬리
  d.poly([[6,21],[0,27],[1,29],[8,25]],B2); d.line(2,27,6,23,B3);
  // 몸통 (폭신하게 앉은 자세)
  d.ell(13,23,9,6,B2); d.ell(12,21,6,3,B3); d.ell(13,25,5,3,B4);
  // 짧은 다리
  d.rect(5,26,5,4,B2); d.rect(16,26,5,4,B2); d.hline(5,9,29,B1); d.hline(16,20,29,B1); for(const x of [6,8,17,19]) d.px(x,30,B4);
  // 길쭉한 목
  d.poly([[15,20],[21,20],[26,7],[22,6]],B2); d.line(19,18,23,8,B3); d.line(18,19,22,9,B3);
  // 작은 머리
  d.ell(25,5,4,3,B2); d.ell(24,4,2,1,B3); d.px(26,4,E); d.px(27,4,E); d.px(26,3,W); d.px(28,6,B1); d.px(24,7,P); d.px(25,7,P);
  // 목의 리본
  d.stamp(17,15,['rr.rr','rrrrr','rr.rr'],{r:R}); d.px(19,16,'#FF9AA8');
  // 바느질 자국과 등의 동그란 무늬
  for(let x=7;x<=19;x+=2) d.px(x,18+(x%4?0:1),St); d.circ(10,21,1,B1); d.circ(15,20,1,B1);
  // 꼬리표
  d.rect(1,23,3,3,'#FFF4C8'); d.px(2,24,R);
  d.outline(O);
  spark(d,29,12,'#FFE0EA'); d.px(4,12,'#FFE0EA');
},
'mikael:s1': d=>{ // 한 그릇 더
  const O='#2A2A3A', R1='#D8D4C8', R2='#F4F2EA', R3='#FFFFFF', B1='#2E4E8A', B2='#4A70B8', B3='#7A9AD8', BW='#E8EEF8', S='#C8D4E8', Ch='#A86A38', Ch2='#D89A5A';
  // 그릇
  d.poly([[3,17],[29,17],[24,27],[8,27]],B2); d.poly([[3,17],[29,17],[27,21],[5,21]],B3);
  d.rect(11,27,10,2,B1); d.hline(5,27,17,BW);
  d.hline(8,24,26,B1); d.line(26,18,23,26,B1);
  // 그릇 무늬: 뼈다귀
  d.stamp(13,22,['w.....w','wwwwwww','w.....w'],{w:BW});
  // 수북이 쌓인 밥
  d.ell(16,15,12,4,R2); d.ell(16,11,9,5,R2); d.ell(15,7,5,4,R2);
  d.ell(19,13,6,3,R1); d.ell(18,9,3,2,R1); d.hline(6,26,17,R1);
  for(const [x,y] of [[10,12],[13,8],[15,5],[20,10],[23,14],[8,15],[17,13],[12,15]]) {d.px(x,y,R3); d.px(x+1,y,R1)}
  // 꼭대기 밥알 하나 + 콩
  d.circ(16,4,1,'#5A9A48'); d.px(16,3,'#8ACA70');
  // 숟가락
  T(d,26,15,30,5,.6,S); d.ell(30,4,1.5,2,S); d.px(30,3,'#FFFFFF');
  d.outline(O);
  // 김
  for(const [x,y] of [[5,2],[9,0],[24,0]]) d.stamp(x,y,['.s','s.','.s','s.'],{s:'#C8D4E4'});
  d.stamp(1,24,['.y.','yyy','.y.'],{y:'#FFE070'});
},
'mikael:s2': d=>{ // 구름 방석
  const O='#5A6890', C1='#B8C4E8', C2='#DCE4FA', C3='#FFFFFF', P='#FFC8D8', B2='#7C8698', B3='#9AA4B4', E='#232A38';
  // 구름 덩어리
  d.ell(16,22,14,6,C1); d.circ(8,17,5,C1); d.circ(16,14,7,C1); d.circ(25,17,5,C1);
  d.ell(15,20,12,5,C2); d.circ(8,16,4,C2); d.circ(15,13,6,C2); d.circ(24,16,4,C2);
  d.circ(13,11,3,C3); d.circ(7,15,2,C3); d.circ(23,14,2,C3);
  // 쏙 들어간 자국 (누운 자리)
  d.ell(16,18,6,2,C1); d.hline(11,21,17,'#C8D2F0');
  // 그 위에 웅크린 인형
  d.ell(16,16,5,2.5,B2); d.ell(15,15,3,1.5,B3); d.circ(20,14,2.6,B2); d.circ(19.5,13.5,1.5,B3);
  d.poly([[21,11],[23,12],[22,15]],'#5E687A');
  d.hline(19,20,14,E); d.px(22,15,E);
  d.px(11,17,B2); d.px(10,16,B2);
  // 볼 분홍 + 매달린 리본
  d.px(18,15,P);
  d.outline(O);
  // 바닥 그림자 빼고 반짝 별
  d.stamp(2,2,['.y.','yWy','.y.'],{y:'#FFE070',W:'#FFFFFF'}); d.stamp(27,4,['.y.','yWy','.y.'],{y:'#FFE070',W:'#FFFFFF'});
  zz(d,25,7,'#8A9AD0'); d.px(30,9,'#8A9AD0');
},
'mikael:c0': d=>{ // 햇살 소파
  // 벽지 (따뜻한 크림 + 세로 줄)
  d.rect(0,0,64,28,'#F6E8CC'); for(let x=2;x<64;x+=6) d.vline(x,0,27,'#EEDCB8');
  d.hline(0,63,27,'#C8A880');
  // 창문 (오른쪽 위)
  d.rect(44,3,16,13,'#FFFFFF'); d.rect(45,4,14,11,'#A8DCF8'); d.vline(52,4,14,'#FFFFFF'); d.hline(45,58,9,'#FFFFFF');
  d.circ(48,7,1.5,'#FFF4B0'); cloud(d,53,10,5,'#FFFFFF');
  d.rect(42,2,3,16,'#F49AA8'); d.rect(59,2,3,16,'#F49AA8'); d.hline(41,62,2,'#C86A78');
  // 액자
  d.rect(6,4,8,6,'#B07A48'); d.rect(7,5,6,4,'#BDE0B0'); d.stamp(8,6,['.g.','ggg'],{g:'#5E9A5A'});
  // 바닥 (나무)
  d.rect(0,28,64,12,'#D8A468'); for(let y=30;y<40;y+=3) d.hline(0,63,y,'#C08A50'); for(let x=5;x<64;x+=11) d.vline(x,28,29,'#C08A50');
  // 햇살 줄기 (창 → 소파 위로)
  for(let y=16;y<40;y++){const x0=Math.round(40-(y-16)*.5), x1=Math.round(56-(y-16)*.35); for(let x=x0;x<=x1;x++){const c=d.get(x,y); const m={'#F6E8CC':'#FFF4D8','#EEDCB8':'#FFEAC8','#D8A468':'#ECC088','#C08A50':'#D8A468','#C8A880':'#E0C098'}[c]; if(m) d.px(x,y,m)}}
  // 소파
  d.rect(26,15,30,8,'#6A9AD0'); d.rect(27,16,28,6,'#82B2E4'); // 등받이
  d.rect(24,22,34,8,'#5A88C0'); d.rect(26,22,30,4,'#82B2E4'); d.hline(26,55,22,'#A8CCF4');
  d.rect(22,18,5,12,'#4A78B0'); d.rect(55,18,5,12,'#4A78B0'); d.rect(23,18,3,2,'#6A9AD0'); d.rect(56,18,3,2,'#6A9AD0');
  d.rect(25,30,2,3,'#7A4A28'); d.rect(55,30,2,3,'#7A4A28');
  // 쿠션 + 인형 (낮잠 베개)
  d.rect(46,17,8,6,'#F4B8C4'); d.hline(47,52,18,'#FFD8E0');
  d.ell(36,20,5,3,'#7C8698'); d.ell(35,19,3,2,'#9AA4B4'); d.circ(31,18,3,'#7C8698'); d.circ(30,17,1.6,'#9AA4B4');
  d.poly([[29,15],[27,17],[29,19]],'#5E687A'); d.hline(30,31,18,'#232A38'); d.px(28,19,'#232A38');
  d.px(41,20,'#7C8698'); d.px(32,20,'#D4A4AC');
  // 눌린 자국 (낮잠 흔적)
  d.ell(43,24,4,1,'#6A9AD0');
  // 바닥 털 몇 가닥 + 공
  d.circ(60,35,2,'#E05A5A'); d.px(59,34,'#FF9A9A');
  d.stamp(38,34,['g.g','.g.'],{g:'#9AA4B4'});
  // 햇살 먼지 반짝
  for(const [x,y] of [[44,20],[38,26],[50,24],[34,31]]) d.px(x,y,'#FFFFFF');
  zz(d,34,10,'#8A9AC8'); d.px(39,9,'#8A9AC8');
},
'mikael:c1': d=>{ // 간식 시장
  d.grad(0,0,64,12,['#9ED8F8','#B8E4FA','#D0EEFC']);
  // 뒤 건물
  d.rect(0,6,64,14,'#E8D4B8'); for(const x of [3,15,27,39,51]) {d.rect(x,9,6,5,'#7A8AA8'); d.rect(x+1,10,4,3,'#B8D0E8')}
  // 연등 줄
  for(let x=0;x<64;x++) d.px(x,5+Math.round(Math.abs(Math.sin(x/8))*2),'#5A4038');
  for(const [x,c] of [[4,'#FF5A5A'],[12,'#FFC040'],[20,'#FF5A5A'],[29,'#FFC040'],[37,'#FF5A5A'],[46,'#FFC040'],[54,'#FF5A5A'],[62,'#FFC040']]) {d.rect(x-1,7,3,3,c); d.px(x,10,'#5A4038')}
  // 바닥 (보도블록)
  d.rect(0,20,64,20,'#D8CCB8'); for(let y=23;y<40;y+=4) d.hline(0,63,y,'#C4B6A0'); for(let y=20;y<40;y+=4) for(let x=((y/4)%2)*4;x<64;x+=8) d.vline(x,y,y+3,'#C4B6A0');
  // 가판대 (오른쪽 두 개)
  const stall=(x,w,a1,a2)=>{for(let i=0;i<w;i+=4) {d.rect(x+i,11,2,4,a1); d.rect(x+i+2,11,2,4,a2)} d.rect(x,15,w,1,a1); for(let i=0;i<w;i+=4) d.px(x+i+1,16,a1);
    d.rect(x+1,22,w-2,9,'#B07A48'); d.rect(x+1,22,w-2,2,'#C89060'); d.vline(x+1,16,21,'#7A4A28'); d.vline(x+w-2,16,21,'#7A4A28')};
  stall(25,18,'#E84A4A','#FFFFFF'); stall(45,18,'#3A9A5A','#FFF4C8');
  // 꼬치 가게: 꼬치 + 김
  for(let i=0;i<4;i++){const x=28+i*4; d.vline(x+1,17,21,'#C8A070'); d.rect(x,17,3,3,['#C85A3A','#E8A040','#C85A3A','#E8C060'][i]); d.px(x,17,'#FFC890')}
  d.stamp(29,12,['.s.s','s.s.','.s.s'].slice(0,0),{s:'#fff'});
  // 떡볶이 냄비
  d.ell(36,21,4,1.2,'#3A3A44'); d.ell(36,20,3,1,'#E84A3A'); d.px(35,20,'#FFE0C8'); d.px(37,20,'#FFE0C8');
  // 빵/뼈다귀 과자 가게
  for(let i=0;i<3;i++) d.stamp(47+i*5,18,['w..w','wwww','w..w'],{w:'#F4E4C0'});
  d.ell(52,22,5,1,'#E8A848'); d.circ(48,21,1.5,'#C8783A'); d.circ(57,21,1.5,'#E890A0');
  // 맛있는 냄새 (구불 김)
  for(const [x,y,c] of [[30,9,'#FFFFFF'],[36,10,'#FFFFFF'],[50,9,'#FFF0D8']]) d.stamp(x,y,['c.','.c','c.','.c'],{c});
  // 냄새 화살 → 시장 쪽 (킁킁)
  d.stamp(18,16,['.c.c.c'],{c:'#F0B860'}); d.stamp(21,15,['c'],{c:'#F0B860'});
  // 바닥에 떨어진 한 입 흔적 (발자국)
  for(const [x,y] of [[23,33],[28,36],[33,34],[38,37]]) d.stamp(x,y,['c.c','.c.'],{c:'#A89A84'});
  d.stamp(42,33,['bbb','b.b'],{b:'#C8A070'});
  // 하트 (얻어먹은)
  d.stamp(40,4,['.'],{});
  d.stamp(56,25,['r.r','rrr','.r.'],{r:'#FF6A8A'});
},
'mikael:c2': d=>{ // 인형 친구 꿈나라
  d.grad(0,0,64,28,['#2A2058','#3A2A70','#4E3488','#6A40A0','#8A54B0']);
  stars(d,16,0,0,63,14,['#FFFFFF','#FFE0F0','#C8D8FF']);
  // 잠자는 달 + 수면모자
  const sky=['#2A2058','#3A2A70','#4E3488','#6A40A0','#8A54B0'];
  d.circ(52,7,5,'#FFF0B0'); for(let y=0;y<14;y++)for(let x=48;x<62;x++) if((x-55)**2+(y-5)**2<=20) d.px(x,y,sky[Math.floor(y*5/28)]);
  d.poly([[47,3],[52,0],[51,4]],'#FF7AA0'); d.px(52,0,'#FFFFFF');
  d.stamp(49,7,['ee'],{e:'#C8A050'});
  // 솜사탕 구름 땅
  d.rect(0,28,64,12,'#E8C8F0'); for(let x=0;x<64;x+=6) d.circ(x+3,28,3,'#E8C8F0');
  for(let x=0;x<64;x+=6) d.px(x+2,27,'#FFFFFF'); for(let y=32;y<40;y+=3) for(let x=(y%2)*4;x<64;x+=9) d.hline(x,x+2,y,'#D8B0E4');
  // 간식 산 (가운데-오른쪽)
  d.poly([[26,30],[38,6],[52,30]],'#C88A50'); d.poly([[38,6],[52,30],[44,30]],'#A86A38');
  // 간식들 박힘
  const bone=(x,y)=>d.stamp(x,y,['w...w','wwwww','w...w'],{w:'#F8ECD0'});
  const dn=(x,y,c)=>{d.circ(x,y,2,c); d.px(x,y,'#C88A50'); d.px(x-1,y-1,'#FFFFFF')};
  bone(34,13); bone(40,22); bone(30,25); dn(38,10,'#FF8AB0'); dn(44,17,'#8AD0FF'); dn(34,20,'#FFE070'); dn(47,26,'#FF8AB0');
  d.stamp(41,13,['cc','cc'],{c:'#5A3420'}); d.stamp(36,26,['cc','cc'],{c:'#5A3420'});
  // 꼭대기 체리
  d.circ(38,4,1.6,'#E83A4A'); d.px(37,3,'#FF9AA8'); d.line(38,2,40,0,'#5A9A48');
  // 산 옆에 앉은 인형 친구 (오른쪽)
  d.ell(57,28,4,3,'#7C8698'); d.ell(57,27,2,1.5,'#9AA4B4');
  d.circ(57,21,4,'#7C8698'); d.circ(56,20,2.5,'#9AA4B4');
  d.poly([[53,18],[51,21],[54,22]],'#5E687A'); d.poly([[61,18],[63,21],[60,22]],'#5E687A');
  d.hline(55,56,20,'#232A38'); d.hline(58,59,20,'#232A38'); d.px(57,22,'#232A38'); d.px(54,22,'#D4A4AC'); d.px(60,22,'#D4A4AC');
  d.stamp(55,25,['rr.rr','.rrr.'],{r:'#E06A7A'});
  // 뼈다귀 하나 들고 있음
  bone(50,26);
  // 꿈 방울 + Zz
  zz(d,22,8,'#FFE0F0'); zz(d,16,4,'#C8D8FF'); d.circ(27,14,1,'#E8D0FF'); d.px(25,17,'#E8D0FF');
  spark(d,8,10,'#FFE070'); spark(d,30,3,'#FFFFFF','#FFE0F0');
},

};
