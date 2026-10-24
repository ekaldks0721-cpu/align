// Christmas souvenirs (xmas:s0-s5, xmasx:s0-s3), 32x32
const OL='#3A1E1E';
export default {
  // 진저브레드 쿠키: 웃는 얼굴, 단추 세 개, 하얀 아이싱 지그재그
  'xmas:s0': d=>{
    const B='#C8763A', B2='#A85A28', B3='#E09858', I='#FFFFFF';
    d.circ(16,8,6,B);                                  // head
    d.poly([[4,13],[28,13],[28,18],[22,18],[22,20],[10,20],[10,18],[4,18]],B); // arms+chest
    d.ell(4.5,15.5,2,2.5,B); d.ell(27.5,15.5,2,2.5,B);
    d.rect(10,17,12,7,B);                              // belly
    d.poly([[10,22],[16,22],[14,30],[8,30]],B); d.poly([[16,22],[22,22],[24,30],[18,30]],B); // legs
    d.ell(10.5,29,3,1.6,B); d.ell(21.5,29,3,1.6,B);
    // shading
    d.px(15,23,B2); d.px(16,23,B2); d.vline(21,17,22,B2); d.vline(22,24,28,B2);
    for(const [x,y] of [[8,30],[9,30],[23,30],[24,30],[4,18],[28,18],[21,14],[11,14]]) d.px(x,y,B2);
    d.px(12,3,B3); d.px(13,3,B3); d.px(11,4,B3); d.px(5,13,B3); d.px(6,13,B3);
    // icing zigzag on arms and legs
    for(let i=0;i<3;i++){ d.px(4+i,13+(i%2)*1+1,I); d.px(25+i,14+(i%2),I); d.px(4+i,16+(i%2),I); d.px(25+i,16+(i%2),I);} 
    for(let i=0;i<5;i++){ d.px(7+i,i%2?27:28,I); d.px(20+i,i%2?28:27,I); }
    // face
    d.stamp(12,5,['.k...k.','kk...kk','.......','r.....r','.k...k.','..kkk..'],{k:'#3A1E1E',r:'#F07878'});
    d.px(13,5,'#FFFFFF'); d.px(18,5,'#FFFFFF');
    // buttons
    d.stamp(15,14,['rr','rR'],{r:'#E03A3A',R:'#A02020'});
    d.stamp(15,17,['gg','gG'],{g:'#3AA850',G:'#1E7034'});
    d.stamp(15,20,['ww','wW'],{w:'#FFFFFF',W:'#CFE0F0'});
    d.outline(OL);
  },
  // 크리스마스 양말: 엄청 큰 빨간 양말 + 작은 초록 양말
  'xmas:s1': d=>{
    const R='#E03A3A', R2='#B02428', R3='#FF6A6A', W='#FFFFFF', W2='#D8E6F0', G='#3AA850', G2='#1E7A38', Y='#F8D048';
    // small green stocking (left, behind), toe pointing left
    d.rect(3,12,6,11,G); d.ell(4,23,4,3,G); d.vline(8,13,24,G2); d.hline(1,7,26,G2);
    d.hline(3,8,17,R); d.hline(3,8,20,R); d.px(4,14,'#7AD08A'); d.px(4,15,'#7AD08A');
    d.px(0,23,R); d.px(0,24,R); d.px(1,25,R);
    d.rect(2,9,8,3,W); d.px(4,10,W2); d.px(7,10,W2); d.hline(2,9,11,W2);
    // candy cane poking out of big stocking
    d.vline(19,0,7,W); d.vline(20,0,7,W); d.hline(21,22,0,W); d.vline(23,1,3,W); d.px(22,1,W);
    for(const [x,y] of [[19,2],[20,3],[19,5],[20,6],[21,0],[23,2]]) d.px(x,y,R);
    // big red stocking: leg + foot toe pointing right
    d.rect(11,8,12,14,R); d.ell(18,24,7.5,5,R); d.ell(23,24.5,6,4.5,R); d.ell(14,23,3.5,5,R);
    // heel and toe patches
    for(let y=0;y<32;y++)for(let x=0;x<32;x++){ const c=d.get(x,y); if(c===R){ if(x>=25&&y>=20) d.px(x,y,G); if(x<=14&&y>=25&&(x-11)**2+(y-28)**2<12) d.px(x,y,G); } }
    d.hline(13,28,29,R2); d.vline(22,9,19,R2); d.px(27,28,G2); d.px(28,27,G2); d.px(12,29,G2);
    d.vline(12,10,13,R3); d.px(13,10,R3); d.px(20,21,R3); d.px(21,21,R3);
    for(const y of [13,17]) { d.hline(12,21,y,'#2E9A4A'); d.hline(12,21,y+1,G2); }
    d.stamp(15,24,['.y.','yyy','.y.'],{y:Y}); // little gold star knit
    // fluffy cuff
    d.rect(9,4,16,4,W); d.hline(9,24,7,W2); for(let x=10;x<24;x+=3) d.px(x,5,W2);
    // hanging loop
    d.vline(10,1,3,Y); d.px(11,0,Y); d.px(12,1,Y); d.px(12,2,Y);
    d.outline(OL);
    d.stamp(27,6,['.y.','yWy','.y.'],{y:Y,W:'#FFFFFF'}); d.px(29,13,Y);
  },
  // 썰매 방울: 금빛 방울, 빨간 리본, 호랑가시, 딸랑 표시
  'xmas:s2': d=>{
    const Gd='#F2C030', G2='#C88A18', G3='#FFE88A', G4='#8A5A10', R='#E03A3A', R2='#A82028', L='#3AA850', L2='#1E7034';
    d.circ(16,19,10,Gd);
    d.circ(14,17,8,'#F8D048'); d.circ(13,15,4,G3); d.circ(12,13,1.5,'#FFFFFF');
    // lower shade
    for(let y=22;y<=29;y++)for(let x=6;x<=26;x++) if(d.get(x,y)&&(x-16)**2+(y-19)**2>64) d.px(x,y,G2);
    // equator band
    d.hline(6,26,19,G2); d.hline(7,25,20,G3);
    // slit
    d.rect(14,22,5,4,G4); d.rect(15,23,3,1,'#3A2408'); d.ell(16,25,3,1,G4); d.circ(16,22,1.5,G4); d.px(16,23,'#3A2408');
    // top loop
    d.rect(14,7,5,3,G2); d.px(15,7,G3);
    // ribbon bow
    d.poly([[16,7],[6,2],[7,9]],R); d.poly([[16,7],[26,2],[25,9]],R);
    d.px(8,4,'#FF7070'); d.px(9,4,'#FF7070'); d.px(24,4,'#FF7070');
    d.line(16,7,8,6,R2); d.line(16,7,24,6,R2);
    d.rect(14,5,4,4,R2); d.rect(15,5,2,3,R);
    // holly
    d.ell(4,10,3,1.5,L); d.ell(28,10,3,1.5,L); d.px(4,10,L2); d.px(3,10,L2); d.px(28,10,L2); d.px(29,10,L2);
    d.circ(6,12,1,R); d.circ(26,12,1,R);
    d.outline(OL);
    // jingle marks
    d.line(1,17,2,19,G3); d.line(1,22,2,23,G3); d.line(30,17,29,19,G3); d.line(30,22,29,23,G3);
  },
  // 녹지 않는 눈송이: 큰 육각 눈송이, 반짝이
  'xmas:s3': d=>{
    const I='#BFE6FF', I2='#7CC0F0', W='#FFFFFF', OLb='#2A4A7A';
    const cx=16, cy=16;
    const thick=(x0,y0,x1,y1,c)=>{ const n=Math.ceil(Math.hypot(x1-x0,y1-y0)*2); for(let i=0;i<=n;i++){ const t=i/n; d.circ(x0+(x1-x0)*t,y0+(y1-y0)*t,0.8,c);} };
    const arms=[];
    for(let k=0;k<6;k++){ const a=k*Math.PI/3-Math.PI/2; arms.push([Math.cos(a),Math.sin(a),a]); }
    for(const [ux,uy,a] of arms){
      thick(cx,cy,cx+ux*12,cy+uy*12,I);
      for(const s of [1,-1]){ const b=a+s*Math.PI/3;
        thick(cx+ux*7,cy+uy*7,cx+ux*7+Math.cos(b)*4,cy+uy*7+Math.sin(b)*4,I);
        d.line(cx+ux*10.5,cy+uy*10.5,cx+ux*10.5+Math.cos(b)*2.2,cy+uy*10.5+Math.sin(b)*2.2,I2);
      }
    }
    for(const [ux,uy,a] of arms){
      d.line(cx+ux*3,cy+uy*3,cx+ux*12,cy+uy*12,W);
      for(const s of [1,-1]){ const b=a+s*Math.PI/3; d.line(cx+ux*7,cy+uy*7,cx+ux*7+Math.cos(b)*3.5,cy+uy*7+Math.sin(b)*3.5,W); }
      d.px(cx+ux*13.3,cy+uy*13.3,I2);
    }
    d.circ(cx,cy,3.2,I2); d.circ(cx,cy,2.2,I); d.px(cx-1,cy-1,W); d.px(cx,cy-1,W); d.px(cx-1,cy,W);
    d.outline(OLb);
    // sparkles
    d.stamp(25,2,['.y.','yWy','.y.'],{y:'#F8E070',W:W}); d.px(4,27,'#F8E070'); d.px(28,26,'#BFE6FF'); d.px(3,4,'#BFE6FF');
  },
  // 스노볼: 유리 돔 안 작은 마을, 우리 집에 불빛
  'xmas:s4': d=>{
    const Gl='#D8F0FF', Gl2='#B0DAF4', S='#FFFFFF', S2='#D8E6F0', Wd='#B03030', Wd2='#7A1E22', Gd='#F2C030';
    d.circ(16,14,12,Gl2); d.circ(16,14,11,'#9ED0F0');
    d.grad(5,3,22,14,['#6A9AD8','#7AAAE0','#8EBCE8','#A4CCF0']);
    for(let y=0;y<32;y++)for(let x=0;x<32;x++) if(d.get(x,y)&&(x-16)**2+(y-14)**2>110) d.px(x,y,Gl2);
    for(let y=0;y<32;y++)for(let x=0;x<32;x++) if((x-16)**2+(y-14)**2>130) d.clear(x,y);
    // tree
    d.poly([[6.5,20],[10,13],[13.5,20]],'#2E8A44'); d.poly([[7.5,16],[10,10],[12.5,16]],'#3AA850'); d.poly([[8.5,12.5],[10,8],[11.5,12.5]],'#4AC060'); d.px(10,8,Gd); d.px(9,14,'#E03A3A'); d.px(11,17,Gd);
    // other house (left back)
    d.rect(12,15,5,5,'#8A6A9A'); d.poly([[11,15],[14.5,11],[18,15]],S); d.px(14,17,'#5A4A6A');
    // our house (center right), warm lit
    d.rect(17,14,8,7,'#E8A060'); d.poly([[16,14],[21,8],[26,14]],'#E03A3A'); d.hline(16,26,13,S); d.hline(18,24,10,S);
    d.rect(18,16,2,2,'#FFE070'); d.rect(22,17,2,4,'#7A4A2A'); d.px(23,19,Gd);
    d.rect(23,9,2,3,'#7A4A2A'); d.px(23,8,S);
    d.px(21,12,'#FFE070'); d.px(22,18,'#3AA850'); d.px(23,17,'#3AA850'); // attic light, wreath
    // snow ground
    d.ell(16,22,11,3,S); d.hline(6,26,23,S2);
    // falling snow
    for(const [x,y] of [[8,5],[13,4],[19,5],[24,6],[11,7],[16,6],[26,10],[6,11],[21,4],[15,10]]) d.px(x,y,S);
    // glass glare
    d.line(8,6,10,4,S); d.px(7,8,S); d.px(7,9,Gl);
    // base
    d.poly([[5,24],[27,24],[29,30],[3,30]],Wd); d.hline(4,28,29,Wd2); d.hline(3,29,30,Wd2);
    d.hline(5,27,25,Gd); d.hline(4,28,26,'#C88A18');
    d.px(7,28,'#E05050'); d.px(16,28,Gd); d.px(15,27,Gd); d.px(17,27,Gd); d.px(16,27,'#FFE88A'); d.px(25,28,'#E05050');
    d.outline(OL);
  },
  // 착한 아이 명단: 두루마리, 줄줄이 이름, 빨간 도장
  'xmas:s5': d=>{
    const P='#FFF2CC', P2='#EAD49A', P3='#C8A868', K='#6A5040', R='#E03A3A', R2='#A82028', Gd='#F2C030';
    d.rect(7,4,18,24,P); d.vline(23,4,27,P2); d.vline(24,4,27,P2);
    // top roll
    d.rect(5,1,22,4,P2); d.hline(5,26,1,P); d.hline(5,26,4,P3); d.ell(5,2.5,1.5,2,P3); d.ell(26,2.5,1.5,2,P3); d.px(26,2,K);d.px(5,2,K);
    // bottom roll (curled)
    d.rect(5,27,22,4,P2); d.hline(5,26,27,P); d.hline(5,26,30,P3); d.ell(5,28.5,1.5,2,P3); d.ell(26,28.5,1.5,2,P3); d.px(26,29,K); d.px(5,29,K);
    // header (gold ribbon star)
    d.hline(10,21,6,'#2E9A4A'); d.hline(10,21,7,'#2E9A4A'); d.px(15,6,Gd); d.px(16,6,Gd); d.px(15,7,Gd); d.px(16,7,Gd);
    // name lines with check marks
    for(let i=0;i<6;i++){ const y=10+i*3; d.px(9,y,'#3AA850'); d.px(10,y+1,'#3AA850'); d.px(11,y,'#3AA850'); d.px(12,y-1,'#3AA850');
      const L=[9,7,10,6,8,9][i]; d.hline(14,13+L,y,i===3?'#2A2A6A':K); if(i%2) d.px(13+L+2,y,K); }
    // highlight my line
    d.rect(13,18,8,3,'#FFE070'); d.hline(14,19,19,'#2A2A6A');
    // stamp (round red seal with star) overlapping
    d.circ(23,20,5,R); d.ring(23,20,4,R2); d.ring(23,20,3.2,'#FF7070');
    d.stamp(21,18,['..w..','wwwww','.www.','.w.w.'],{w:'#FFFFFF'});
    d.px(20,25,R); d.px(27,15,R); // stamp splatter
    // quill
    d.poly([[30,3],[27,6],[25,12],[27,11],[30,6]],'#FFFFFF'); d.line(30,3,25,13,'#B8C8D8'); d.line(25,13,24,15,K);
    d.outline(OL);
  },
  // 빼빼로 상자: 초코·아몬드·딸기 막대
  'xmasx:s0': d=>{
    const R='#E03A3A', R2='#A82028', R3='#FF7070', B='#E8C080', C='#6A3A1E', C2='#8A5030', Pk='#F48AB0', Pk2='#D86090', A='#F0D8A8', Gd='#F2C030';
    // sticks (behind box)
    const sticks=[[9,4,C,C2,'choco'],[13,2,C,C2,'almond'],[17,3,Pk,Pk2,'straw'],[21,5,C,C2,'choco']];
    for(const [x,top,c,c2,kind] of sticks){
      d.rect(x,top,3,14,c); d.vline(x+2,top,top+13,c2); d.px(x,top,c2); d.px(x+2,top,null); d.clear(x+2,top);
      d.px(x,top+1,kind==='straw'?'#FFC0D8':'#9A6040');
      if(kind==='almond') for(let y=top+1;y<top+12;y+=3){ d.px(x+1,y,A); d.px(x,y+1,A); d.px(x+2,y+2,'#D8B880'); }
      if(kind==='straw') for(let y=top+2;y<top+12;y+=3) d.px(x+1,y,'#FFFFFF');
    }
    // one stick being shared, sticking out tilted
    d.line(25,12,29,4,B); d.line(26,12,30,4,B); d.line(27,8,29,4,C); d.line(28,8,30,4,C); d.px(29,5,C2);
    // box
    d.rect(6,14,20,17,R);
    d.hline(6,26,14,R3); d.hline(6,26,15,R3); d.vline(24,16,29,R2); d.vline(25,16,29,R2); d.hline(7,25,30,R2);
    // label "11"
    d.rect(9,19,14,8,'#FFFFFF'); d.frame(9,19,14,8,Gd);
    d.stamp(11,20,['.c...c.','cc..cc.','.c...c.','.c...c.','.c...c.','ccc.ccc'],{c:C});
    d.stamp(18,21,['pp.pp','ppppp','.ppp.','..p..'],{p:Pk});
    d.outline(OL);
  },
  // 엉망진창 포장 선물: 삐뚤빼뚤, 테이프 여러 겹, 리본 세 개
  'xmasx:s1': d=>{
    const G='#3AA850', G2='#1E7034', G3='#7AD08A', Y='#F8D048', R='#E03A3A', R2='#A82028', B='#5AA0E8', B2='#2E6AB8', T='#E8F4F0', T2='#C0D8D0', Pk='#F48AB0';
    // lopsided box
    d.poly([[4,13],[27,11],[29,29],[3,30]],G);
    d.poly([[20,12],[27,11],[29,29],[22,29]],G2);
    // polka dots wrap pattern (crooked)
    for(const [x,y] of [[7,16],[12,15],[17,17],[8,22],[14,21],[19,24],[6,27],[12,27],[24,16],[25,22],[23,27]]) { d.px(x,y,G3); d.px(x+1,y,G3); }
    // torn corner showing cardboard
    d.poly([[3,24],[7,30],[3,30]],'#C8A060'); d.px(4,28,'#A07840');
    // ribbon cross (crooked)
    d.poly([[14,12],[18,12],[17,30],[13,30]],R); d.vline(17,13,29,R2);
    d.poly([[3,19],[28,17],[28,20],[3,22]],R); d.hline(4,27,21,R2);
    // tape strips everywhere
    const tapes=[[5,13,10,16],[22,12,26,15],[24,26,29,23],[3,26,8,29],[10,24,13,27],[20,21,24,19],[8,17,11,14]];
    for(const [a,b,c,e] of tapes){ d.line(a,b,c,e,T); d.line(a+1,b,c+1,e,T2); }
    // three bows
    const bow=(x,y,c,c2)=>d.stamp(x,y,['.cc...cc.','cCCc.cCCc','cCcckccCc','cccc.cccc','.cc.c.cc.','...c.c...','..c...c..'],{c,C:c2,k:c2});
    bow(1,4,Y,'#C89818'); bow(21,3,B,B2); bow(11,5,R,R2);
        d.px(21,4,Pk);
    d.outline(OL);
    d.px(1,9,Y); d.px(30,14,Pk); // fluff
  },
  // 트리 꼭대기 별: 빛나는 금별, 수줍은 얼굴
  'xmasx:s2': d=>{
    const Gd='#F8D048', G2='#E0A020', G3='#FFF0A0', W='#FFFFFF', OLg='#6A3A10';
    // glow rays
    const gl='#FFF6C8';
    const pts=[]; for(let k=0;k<10;k++){ const a=-Math.PI/2+k*Math.PI/5, r=k%2?6:14; pts.push([16+Math.cos(a)*r,17+Math.sin(a)*r]); }
    d.poly(pts,Gd);
    // lower right shading: fill pixels right of center below
    for(let y=0;y<32;y++)for(let x=0;x<32;x++) if(d.get(x,y)===Gd && (x-16)+(y-17)*0.6>5) d.px(x,y,G2);
    // highlight upper-left
    for(let y=0;y<32;y++)for(let x=0;x<32;x++) if(d.get(x,y)===Gd && (x-16)+(y-17)<-8) d.px(x,y,G3);
    d.px(14,6,W); d.px(15,5,W); d.px(15,6,W);
    // face
    d.stamp(12,15,['k.....k','.......','.......','r.k.k.r','...k...'],{k:'#5A3010',r:'#FF8A8A'});
    d.px(12,14,'#5A3010'); d.px(13,14,'#5A3010'); d.px(18,14,'#5A3010'); d.px(19,14,'#5A3010');
    d.clear(12,15); d.clear(18,15); d.px(12,15,'#5A3010'); d.px(18,15,'#5A3010');
    // tree tip under star
    d.poly([[13,31],[16,27],[19,31]],'#2E8A44'); d.px(16,27,'#3AA850');
    d.outline(OLg);
    // glints
    for(const [x,y] of [[3,4],[28,5],[2,20],[29,22]]) d.stamp(x-1,y-1,['.g.','gWg','.g.'],{g:gl,W:W});
    d.px(6,28,gl); d.px(26,29,gl);
  },
  // 산타의 빨간 장갑: 털 커프, 눈꽃 니트 무늬, 따뜻한 김
  'xmasx:s3': d=>{
    const R='#E03A3A', R2='#A82028', R3='#FF6A6A', W='#FFFFFF', W2='#D8E6F0', W3='#B8C8D8', Gd='#F2C030';
    // hand body
    d.ell(16,15,8,9,R); d.rect(8,15,17,9,R);
    // thumb
    d.ell(6,16,3,5,R); d.poly([[5,20],[10,13],[10,22]],R);
    // shading
    d.vline(24,12,23,R2); d.vline(23,8,23,R2); d.px(22,7,R2); d.px(21,6,R2);
    d.vline(10,8,11,R3); d.vline(11,7,8,R3); d.px(12,6,R3); d.px(4,13,R3); d.px(5,12,R3);
    d.line(9,18,9,22,R2); // thumb crease
    // knit pattern: snowflake + band
    d.stamp(14,10,['..w..','w.w.w','.www.','wwWww','.www.','w.w.w','..w..'].map(r=>r),{w:W,W:Gd});
    for(let x=10;x<=23;x+=2){ d.px(x,20,W); d.px(x+1,21,W);} 
    // fluffy cuff
    d.rect(6,23,21,6,W); for(let x=6;x<=26;x+=3){ d.circ(x+1,23,1.2,W); d.circ(x+1,28.5,1,W);} 
    for(const [x,y] of [[9,25],[13,27],[17,25],[21,27],[24,25],[11,28],[19,28]]) d.px(x,y,W2);
    d.hline(7,25,28,W3); for(let x=6;x<=26;x+=3) d.px(x+1,29,W3); d.px(26,26,W3);
    // pom pom string
    d.outline(OL);
    // warm steam
    d.stamp(24,0,['.o..','o...','.o..','..o.','.o..'],{o:'#FFC0A0'});
    d.stamp(28,2,['o.','.o','o.','.o'],{o:'#FFD8C0'});
  },
};
