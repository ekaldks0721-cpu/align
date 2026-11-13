// 눈사람·루돌프 고유 기념품(32×32)과 엽서(64×40)
const stars=(d,n,y0,y1,cols)=>{for(let i=0;i<n;i++) d.px(d.ri(0,63),d.ri(y0,y1),cols[i%cols.length])};
const snowfall=(d,n,cols,skip)=>{for(let i=0;i<n;i++){const x=d.ri(0,63), y=d.ri(0,39); if(skip&&skip(x,y)) continue; d.px(x,y,cols[i%cols.length])}};
const inPet=(x,y)=>x>=5&&x<=22&&y>=19;
const fir=(d,cx,top,h,c1,c2,c3,snow)=>{for(let y=0;y<h;y++){const w=Math.round(1+(y%Math.ceil(h/3))*0.9+Math.floor(y/Math.ceil(h/3))*1.4); d.hline(cx-w,cx+w,top+y,c1); d.hline(cx-w+1,cx,top+y,c2); if(snow&&y%Math.ceil(h/3)===0) d.hline(cx-w,cx+w-1,top+y,snow)} d.rect(cx-1,top+h,2,2,c3)};

export default {
  /* ---------- 눈사람 ---------- */
  // 여분 당근 코: 커다란 당근 + 초록 잎, 반창고 하나
  'snowman:s0': d=>{
    const O='#F08A28', O2='#D06A18', O3='#FFB060', G='#4AA848', G2='#2E7A30', G3='#7ACB5A';
    d.poly([[5,25],[10,20],[24,6],[27,9],[13,27],[8,29]],O);
    d.line(8,28,25,10,O2); d.line(9,27,25,11,O2); d.line(6,24,23,7,O3);
    for(const [x,y] of [[12,20],[16,16],[20,12],[10,24]]){d.px(x,y,O2); d.px(x+1,y+1,O2); d.px(x+2,y+2,O2)}
    // 잎
    d.poly([[24,6],[22,1],[25,3],[27,0],[28,4],[31,3],[29,7],[27,9]],G); d.line(25,5,27,1,G3); d.line(27,7,30,4,G2); d.line(25,7,23,3,G2);
    // 반창고 ("비상용")
    d.poly([[13,16],[16,13],[19,16],[16,19]],'#F4D8B0'); d.px(16,16,'#E0B888'); d.px(15,15,'#E0B888'); d.px(17,17,'#E0B888');
    d.outline('#5A2E10');
    d.stamp(3,8,['.w.','www','.w.'],{w:'#BFE0F8'}); d.stamp(27,22,['.w.','www','.w.'],{w:'#BFE0F8'}); d.px(22,29,'#BFE0F8');
  },
  // 줄무늬 털목도리: 동그랗게 감긴 빨간·흰 줄무늬 목도리, 술 장식
  'snowman:s1': d=>{
    const R='#D83040', R2='#A81E2C', W='#F8F4F0', W2='#D8D0D0';
    // 감긴 고리
    d.ell(16,12,12,8,R); d.ell(16,12,7,4,null);
    for(let y=0;y<32;y++)for(let x=0;x<32;x++){const c=d.get(x,y); if(c===R&&(x+Math.floor(y/2))%6<3) d.px(x,y,W)}
    for(let x=4;x<29;x++){const y=Math.round(12+Math.sqrt(Math.max(0,1-((x-16)/12.4)**2))*8.4); if(d.get(x,y-1)) d.px(x,y-1,d.get(x,y-1)===W?W2:R2)}
    d.ell(16,12,6,3,'#E8EEF8'); d.ell(16,12,5,2,null); for(let y=8;y<17;y++)for(let x=9;x<24;x++) if(d.get(x,y)==='#E8EEF8') d.clear(x,y);
    // 늘어진 꼬리 두 갈래
    const tail=(x0,dir)=>{for(let j=0;j<11;j++){const x=x0+Math.round(dir*j*0.25); const c=(Math.floor(j/2))%2?W:R; d.hline(x,x+4,17+j,c); d.px(x+4,17+j,(c===W?W2:R2))}
      for(let i=0;i<5;i++) d.vline(x0+Math.round(dir*2.5)+i,28,30-(i%2),i%2?R2:R)};
    tail(9,-1); tail(18,1);
    d.outline('#4A1018');
  },
  // 북극 얼음 조각: 반짝이는 커다란 얼음 결정 덩어리, 안에 작은 눈송이
  'snowman:s2': d=>{
    const I1='#BEE8F8', I2='#8CCCEC', I3='#5AA8D8', I4='#E8FAFF', W='#FFFFFF';
    d.poly([[8,28],[4,18],[9,8],[15,3],[22,6],[27,14],[28,24],[22,29]],I2);
    d.poly([[9,8],[15,3],[16,15],[4,18]],I1); d.poly([[15,3],[22,6],[27,14],[16,15]],I4);
    d.poly([[16,15],[27,14],[28,24]],I2); d.poly([[4,18],[16,15],[8,28]],I3); d.poly([[16,15],[28,24],[22,29],[8,28]],I3);
    d.line(16,15,15,3,I4); d.line(16,15,4,18,W); d.line(16,15,27,14,I1);
    // 안의 눈송이
    const sx=16, sy=20; d.hline(sx-3,sx+3,sy,W); d.vline(sx,sy-3,sy+3,W); d.line(sx-2,sy-2,sx+2,sy+2,W); d.line(sx-2,sy+2,sx+2,sy-2,W);
    d.outline('#2A5A88');
    // 반짝
    d.stamp(25,1,['.w.','www','.w.'],{w:W}); d.px(3,6,W); d.px(29,28,W); d.px(12,8,W); d.px(11,9,W);
    // 바닥 차가운 기운
    d.hline(9,22,31,'#A8D8F0');
  },
  // 눈사람 마을: 낮, 크고 작은 눈사람들이 늘어선 눈 마을
  'snowman:c0': d=>{
    d.grad(0,0,64,24,['#7EC0EC','#92CCF0','#A8D8F4','#C0E4F8']);
    d.ell(52,5,3,3,'#FFF6C8'); d.ell(52,5,2,2,'#FFFFFF');
    // 먼 언덕
    d.ell(14,26,22,7,'#E4EEF8'); d.ell(48,25,24,8,'#DCE8F6');
    // 작은 집들
    const house=(x,y,c,r)=>{d.rect(x,y,9,6,c); d.poly([[x-1,y],[x+4.5,y-5],[x+10,y]],r); d.hline(x-1,x+9,y-1,'#FFFFFF'); d.hline(x,x+8,y-4+1,'#FFFFFF'); d.rect(x+3,y+2,3,4,'#6A4028'); d.rect(x+7,y+1,2,2,'#F8D060')};
    house(26,12,'#E8B880','#C84848'); house(44,11,'#C8A0D8','#5A68B8');
    // 눈 바닥
    d.rect(0,24,64,16,'#F4F8FC'); for(let x=0;x<64;x+=7) d.hline(x,x+3,26+(x%3),'#DCE6F2'); d.hline(0,63,24,'#E2ECF6');
    // 눈사람들 (크기 다르게)
    const sm=(cx,by,s,sc)=>{const r1=3*s, r2=2.2*s, r3=1.6*s; d.circ(cx,by-r1,r1,'#FFFFFF'); d.circ(cx,by-2*r1-r2+1,r2,'#FFFFFF'); d.circ(cx,by-2*r1-2*r2-r3+2,r3,'#FFFFFF');
      const hy=Math.round(by-2*r1-2*r2-r3+2); d.px(cx-1,hy,'#1A1A28'); d.px(cx+1,hy,'#1A1A28'); d.px(cx+1,hy+1,'#F08A28'); d.px(cx+2,hy+1,'#F08A28');
      d.hline(cx-Math.round(r2),cx+Math.round(r2),Math.round(by-2*r1-r2*0.2),sc); d.px(cx-Math.round(r2*0.8)+1,Math.round(by-2*r1-r2*0.2)+1,sc);
      d.px(cx,Math.round(by-r1-1),'#1A1A28'); d.px(cx,Math.round(by-r1+1),'#1A1A28');
      for(let y=0;y<Math.round(r1*2);y++) if(d.get(cx+Math.round(r1),by-y)==='#FFFFFF') d.px(cx+Math.round(r1),by-y,'#D0DCEC')};
    sm(29,35,1.5,'#D83040'); sm(39,34,1.1,'#3A8AD8'); sm(49,36,1.7,'#48A858'); sm(59,33,1.0,'#F0B030');
    // 나뭇가지 팔
    d.line(24,28,22,26,'#7A4A28'); d.line(34,28,36,26,'#7A4A28'); d.line(44,30,42,28,'#7A4A28'); d.line(54,30,56,28,'#7A4A28');
    // 그림자
    for(const [x,w] of [[29,5],[39,4],[49,6],[59,3]]) d.hline(x-w,x+w,37,'#DCE6F2');
    snowfall(d,24,['#FFFFFF','#E8F2FC'],(x,y)=>inPet(x,y)||y>23);
  },
  // 꽁꽁 언 호수: 노을, 얼음 위 스케이트 자국, 침엽수
  'snowman:c1': d=>{
    d.grad(0,0,64,20,['#5A5490','#9A6A9A','#E8889A','#F8B088','#FCD498']);
    d.circ(40,19,5,'#FFE6A0'); d.circ(40,19,3,'#FFF4D0');
    // 먼 산
    d.poly([[0,20],[10,10],[18,16],[28,8],[40,18],[52,9],[64,17],[64,22],[0,22]],'#6A5E92');
    d.poly([[28,8],[31,11],[25,11]],'#E8E0F0'); d.poly([[52,9],[55,12],[49,12]],'#E8E0F0'); d.poly([[10,10],[12,12],[8,12]],'#E8E0F0');
    // 숲 띠
    for(let x=-2;x<66;x+=4) fir(d,x,15+(x%3),6,'#2A3A5A','#344A6A','#1E2A40',null);
    // 얼음 호수
    d.rect(0,22,64,18,'#A8D4EC'); d.grad(0,22,64,6,['#F0C0B0','#D8C8D0','#B8D0E4']);
    d.ell(40,25,6,1,'#FFE8B8'); d.hline(36,44,27,'#F8D8B8');
    // 얼음 금과 반사
    d.line(30,30,38,28,'#D8EEF8'); d.line(38,28,44,31,'#D8EEF8'); d.line(48,34,58,32,'#E4F4FC'); d.line(52,37,60,38,'#88B8D8');
    // 스케이트 자국: 빙글빙글 (펫이 미끄럼 탄 흔적)
    d.ring(42,34,4,'#E8F6FF'); d.ring(42,34,2,'#E8F6FF'); d.line(22,36,38,35,'#E8F6FF'); d.line(23,37,38,36,'#CCE6F6');
    // 눈 덮인 물가
    d.ell(4,39,12,3,'#F4F6FA'); d.ell(60,39,10,3,'#F4F6FA'); d.ell(62,23,6,2,'#F4F6FA');
    fir(d,58,12,10,'#1E5A48','#2A7A58','#5A3A28','#F4F6FA');
    // 넘어진 자리 (엉덩방아 눈 자국)
    d.ell(50,36,3,1,'#F4F6FA'); d.px(48,35,'#FFFFFF'); d.px(53,35,'#FFFFFF');
    stars(d,6,0,6,['#F8E8F8','#FFFFFF']);
  },
  // 오로라 언덕: 밤, 초록·보라 오로라, 눈 언덕과 작은 이글루
  'snowman:c2': d=>{
    d.grad(0,0,64,30,['#060A20','#0A1230','#0E1A3C','#142448','#1A2E58']);
    stars(d,40,0,22,['#FFFFFF','#A8C0F0','#E0E8FF']);
    // 오로라 띠
    for(let x=0;x<64;x++){const y=Math.round(8+Math.sin(x/7)*3+Math.sin(x/3.3)*1);
      const h=6+Math.round(Math.sin(x/5+1)*2);
      for(let j=0;j<h;j++){const c=j<2?'#A8F8C8':j<4?'#48D898':j<h-1?'#2A9878':'#5A3A98'; if((x+j)%(j>3?2:1)===0) d.px(x,y+j,c)}
      if(x%3===0) d.vline(x,y-3,y-1,'#C890F0')}
    // 언덕
    d.ell(46,36,30,12,'#C8D8F0'); d.ell(46,34,26,10,'#DCE8F8'); d.ell(6,40,24,8,'#B8C8E4');
    d.rect(0,33,64,7,'#C8D8F0'); d.dither(0,36,64,4,'#C8D8F0','#B8CAE6');
    // 이글루
    d.ell(48,26,7,5,'#F0F6FF'); d.rect(41,26,15,4,'#F0F6FF');
    for(const y of [23,26,29]) d.hline(42,54,y,'#B8CCE8'); for(const [x,y] of [[45,24],[51,24],[48,27],[44,28],[52,28]]) d.vline(x,y,y+1,'#B8CCE8');
    d.ell(48,28,2,2,'#2A3A68'); d.rect(46,28,5,2,'#2A3A68'); d.px(47,28,'#F8C860');
    // 오로라 반사
    d.hline(30,38,31,'#7AD8B0'); d.hline(56,62,30,'#7AD8B0');
    // 언덕 꼭대기 깃발
    d.vline(60,17,23,'#8A6A48'); d.rect(61,17,3,2,'#D83040');
  },

  /* ---------- 루돌프 ---------- */
  // 이끼 간식 주머니: 갈색 천 주머니, 끈, 초록 이끼가 비죽
  'rudolph:s0': d=>{
    const B='#B8824A', B2='#946032', B3='#D8A86A', M='#6AB848', M2='#4A9438', M3='#9AD870';
    d.ell(16,21,11,9,B); d.ell(16,12,6,2,B); d.poly([[10,12],[22,12],[24,16],[8,16]],B);
    d.ell(19,23,7,6,B2); d.ell(14,20,8,6,B); d.ell(11,17,3,3,B3);
    // 이끼 비죽
    for(const [x,y,r] of [[12,7,3],[17,5,3.5],[21,8,2.5]]) {d.circ(x,y,r,M); d.circ(x-1,y-1,r-1.5,M3)}
    d.px(16,3,M3); d.px(19,4,M2); d.px(13,9,M2); d.px(22,9,M2); d.px(10,6,M2);
    // 끈 (빨강)
    d.hline(9,23,11,'#C82838'); d.hline(9,23,12,'#981828'); d.line(23,11,27,15,'#C82838'); d.line(23,12,26,17,'#C82838'); d.px(27,16,'#981828'); d.px(26,18,'#981828');
    // 천 바느질과 발굽 무늬 패치
    for(let x=8;x<26;x+=3) d.px(x,27,'#E8C890');
    d.stamp(13,18,['.k.k.','kk.kk','kk.kk'],{k:'#7A4A22'});
    d.outline('#4A2A10');
  },
  // 빨간 코 전구: 동그란 빨간 전구, 금색 소켓, 빛줄기
  'rudolph:s1': d=>{
    const R='#E8283A', R2='#B01828', R3='#FF7080', Y='#F0C040', Y2='#C89820', Y3='#FFE890';
    // 빛 번짐
    for(const [x,y,x2,y2] of [[16,2,16,4],[4,14,6,14],[26,14,28,14],[7,5,9,7],[25,5,23,7],[7,23,9,21],[25,23,23,21]]) d.line(x,y,x2,y2,'#FFD0D8');
    d.circ(16,14,9,R); d.circ(14,12,6,'#F04050'); d.ell(19,18,5,4,R2); d.ell(17,16,5,4,R);
    d.ell(12,10,2,2,R3); d.px(11,9,'#FFFFFF'); d.px(12,9,'#FFFFFF'); d.px(11,10,'#FFFFFF');
    // 소켓
    d.rect(12,23,9,2,Y); d.rect(12,25,9,2,Y2); d.rect(13,27,7,2,Y); d.rect(14,29,5,2,Y2); d.hline(12,20,23,Y3); d.hline(13,19,27,Y3); d.px(16,31,'#7A6020');
    d.outline('#4A1018');
    d.px(16,1,'#FFFFFF'); d.px(3,14,'#FFFFFF'); d.px(29,14,'#FFFFFF');
  },
  // 썰매 대장 메달: 금메달 + 빨강·초록 리본, 메달에 썰매 발굽 무늬
  'rudolph:s2': d=>{
    const Rd='#D83040', Rd2='#A81E2C', Gn='#2E9A50', Gn2='#1E7038', Y='#F4C030', Y2='#C89018', Y3='#FFE68A';
    // 리본 (V)
    d.poly([[6,0],[13,0],[18,14],[12,15]],Rd); d.poly([[19,0],[26,0],[20,15],[14,14]],Gn);
    d.line(9,0,14,13,Rd2); d.line(23,0,18,13,Gn2); d.line(7,0,12,13,'#F05868'); d.line(25,0,20,13,'#48B868');
    // 메달
    d.circ(16,21,9,Y2); d.circ(16,21,8,Y); d.circ(16,21,6,Y2); d.circ(16,21,5,Y);
    for(let a=0;a<12;a++){const x=16+Math.round(Math.cos(a*Math.PI/6)*8), y=21+Math.round(Math.sin(a*Math.PI/6)*8); d.px(x,y,Y3)}
    // 가운데 무늬: 빨간 코 + 뿔
    d.circ(16,23,1.5,Rd); d.px(15,22,'#FF8090');
    d.stamp(11,15,['b.b...b.b','.bb...bb.','..b...b..','..bb.bb..'],{b:'#8A5A20'});
    d.ell(12,18,1,1,Y3);
    d.outline('#4A2A08');
    // 반짝
    d.stamp(25,13,['.w.','www','.w.'],{w:'#FFFFFF'}); d.px(5,26,'#FFF4C0');
  },
  // 눈 덮인 전나무 숲: 숲, 썰매 자국과 떨어진 방울
  'rudolph:c0': d=>{
    d.grad(0,0,64,18,['#9AC8E8','#B0D4EC','#C8E0F0','#DCEAF4']);
    // 먼 숲
    for(let x=-2;x<66;x+=5) fir(d,x,6+((x*7)%5),9,'#4A7A78','#5A8A88','#3A5A58','#E8F0F4');
    // 가까운 큰 전나무 (오른쪽)
    fir(d,34,4,22,'#1E5A3A','#2A7A48','#5A3A20','#F4F8FC'); fir(d,48,2,26,'#1E5A3A','#2A7A48','#5A3A20','#F4F8FC'); fir(d,60,6,22,'#1E5A3A','#2A7A48','#5A3A20','#F4F8FC');
    // 눈 바닥
    d.rect(0,26,64,14,'#F4F8FC'); d.ell(40,26,26,3,'#F4F8FC'); for(let x=2;x<64;x+=6) d.hline(x,x+2,29+(x%4),'#DCE6F2');
    // 썰매 자국 두 줄 (오른쪽 안쪽으로)
    for(let x=22;x<64;x++){const y=Math.round(36-(x-22)*0.22); d.px(x,y,'#B8C8DC'); d.px(x,y-3,'#B8C8DC')}
    // 발굽 자국
    for(let x=24;x<62;x+=5){const y=Math.round(34.5-(x-22)*0.22); d.px(x,y,'#A8B8D0'); d.px(x+1,y,'#A8B8D0')}
    // 떨어진 금 방울
    d.circ(44,30,1.6,'#F4C030'); d.px(43,29,'#FFE890'); d.px(44,31,'#8A6010'); d.line(45,29,47,28,'#C82838');
    // 나무에 걸린 빨간 리본
    d.stamp(46,13,['rr.rr','.rrr.','r.r.r'],{r:'#D83040'});
    snowfall(d,30,['#FFFFFF','#E8F2FC'],(x,y)=>inPet(x,y));
  },
  // 산타 마을 선물 공장: 실내, 컨베이어 벨트 위 선물, 리본 산더미, 창밖 눈
  'rudolph:c1': d=>{
    // 벽
    d.rect(0,0,64,40,'#C86A4A'); for(let y=0;y<26;y+=4) for(let x=(y/4%2)*4;x<64;x+=8) d.rect(x,y,7,3,'#B85A3C');
    for(let y=3;y<26;y+=4) d.hline(0,63,y,'#9A4A30');
    // 창 (밤 + 눈)
    d.rect(40,3,18,12,'#5A3A22'); d.rect(41,4,16,10,'#1E2A58'); d.vline(49,4,13,'#5A3A22'); d.hline(41,56,8,'#5A3A22');
    for(const [x,y] of [[43,5],[46,7],[52,5],[55,10],[44,11],[51,12],[47,10]]) d.px(x,y,'#FFFFFF'); d.hline(41,56,13,'#F4F8FC');
    // 줄전구
    for(let x=0;x<64;x++){const y=Math.round(1+((x%21)-10)**2/30); d.px(x,y,'#2A3A2A'); if(x%4===0) d.px(x,y+1,['#F86070','#F8D048','#70D0F8','#90E070'][(x/4)%4])}
    // 마루
    d.rect(0,26,64,14,'#C89858'); for(let y=28;y<40;y+=3) d.hline(0,63,y,'#A87A40'); for(let y=26;y<40;y+=3) for(let x=(y%2)*5;x<64;x+=11) d.vline(x,y,y+2,'#A87A40');
    // 컨베이어 벨트 (오른쪽)
    d.rect(28,20,36,3,'#4A4A58'); d.rect(28,23,36,2,'#2A2A34'); for(let x=29;x<64;x+=4) d.circ(x,23.5,1,'#8A8A98'); d.rect(30,25,2,4,'#3A3A44'); d.rect(60,25,2,4,'#3A3A44');
    // 벨트 위 선물
    const gift=(x,y,w,h,c,r)=>{d.rect(x,y,w,h,c); d.vline(x+Math.floor(w/2),y,y+h-1,r); d.hline(x,x+w-1,y+Math.floor(h/2),r); d.stamp(x+Math.floor(w/2)-1,y-2,['r.r','.r.'],{r})};
    gift(31,15,6,5,'#3A9AE0','#FFFFFF'); gift(40,14,7,6,'#48B868','#E84860'); gift(50,16,5,4,'#E84860','#F8D048'); gift(57,15,6,5,'#B870D8','#F8D048');
    // 리본 산더미 (오른쪽 바닥)
    for(const [x,y,c] of [[50,33,'#E84860'],[54,31,'#F8D048'],[57,34,'#3A9AE0'],[60,32,'#48B868'],[53,35,'#B870D8'],[47,35,'#F8D048'],[58,29,'#E84860']]){d.ring(x,y,1.5,c); d.px(x+2,y+1,c); d.px(x+3,y+2,c)}
    // 포장지 롤
    d.rect(26,31,12,3,'#E84860'); for(let x=27;x<38;x+=3) d.px(x,32,'#FFFFFF'); d.ell(26,32,1,1.5,'#F8C8D0');
    // 작업대 위 가위·테이프
    d.stamp(40,35,['k..k','.kk.','.kk.','k..k'],{k:'#5A5A68'});
  },
  // 안개 낀 밤하늘: 밤, 안개 띠, 작은 지붕들 위로 빨간 빛이 길을 밝힘
  'rudolph:c2': d=>{
    d.grad(0,0,64,40,['#0A0E28','#101838','#16224A','#1C2C58','#22365E']);
    stars(d,26,0,14,['#FFFFFF','#A8B8E8']);
    d.circ(12,7,4,'#F4ECC8'); d.circ(14,6,3,'#101838'); // 초승달
    // 빨간 코 빛의 길 (오른쪽 위로 이어지는 점선)
    for(let i=0;i<12;i++){const x=24+i*3, y=Math.round(19-i*1.1+Math.sin(i)*0.6); d.px(x,y,i%2?'#F86070':'#FF98A0'); if(i%3===0) d.px(x,y-1,'#FFD0D8')}
    d.circ(60,6,1.5,'#FF4058'); d.px(60,5,'#FFC0C8');
    // 작은 지붕들 (아래)
    const roof=(x,w,h,c,wall)=>{d.rect(x,40-h,w,h,wall); d.poly([[x-1,40-h],[x+w/2,40-h-5],[x+w+1,40-h]],c); d.line(x-1,40-h,x+w/2,40-h-5,'#F4F8FC'); d.line(x+w/2,40-h-5,x+w+1,40-h,'#F4F8FC'); d.rect(x+2,40-h+2,2,2,'#F8D060'); d.rect(x+w-4,40-h+2,2,2,'#F8B048')};
    roof(25,9,7,'#B84848','#4A4A70'); roof(37,11,9,'#4A6AB0','#3E4064'); roof(50,8,6,'#6A9A58','#4A4A70'); roof(59,8,8,'#A868B0','#3E4064');
    d.rect(40,21,2,4,'#5A5A78'); d.px(40,19,'#8A98C0'); d.px(41,18,'#8A98C0');
    // 안개 띠
    for(const [y,c] of [[16,'#3A4870'],[24,'#4A5880'],[35,'#5A6890']]) for(let x=0;x<64;x++) if((x+y)%5<3||x%7===0) d.px(x,y+Math.round(Math.sin(x/6)),c);
    d.dither(0,36,64,4,'#22365E','#2A3E68');
    // 펫 자리 바닥: 구름 위
    d.ell(13,38,12,3,'#8A98C0'); d.ell(13,37,10,2,'#A8B4D8');
  },
};
