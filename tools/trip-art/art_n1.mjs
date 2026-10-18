// n1: shared souvenirs & postcards (any pet)
const DIG={0:['ooo','o.o','o.o','o.o','ooo'],1:['.o.','oo.','.o.','.o.','ooo'],2:['ooo','..o','ooo','o..','ooo'],3:['ooo','..o','.oo','..o','ooo'],6:['ooo','o..','ooo','o.o','ooo']};
const num=(d,x,y,s,c)=>[...s].forEach((ch,i)=>d.stamp(x+i*4,y,DIG[ch],{o:c}));
const spark=(d,x,y,c,w='#FFFFFF')=>d.stamp(x-2,y-2,['..c..','..c..','ccwcc','..c..','..c..'],{c,w});
const hx2=c=>c.match(/\w\w/g).map(h=>parseInt(h,16));
const mix=(c,t,k)=>{const a=hx2(c),b=hx2(t);return '#'+a.map((v,i)=>Math.round(v+(b[i]-v)*k).toString(16).padStart(2,'0')).join('').toUpperCase()};
const shade=c=>mix(c,'#6A4A9A',.3), light=c=>mix(c,'#FFFFFF',.45);
const twinkle=(d,x,y,c)=>{d.px(x,y,c);d.px(x-1,y,c);d.px(x+1,y,c);d.px(x,y-1,c);d.px(x,y+1,c)};

export default {
  // 몽당연필 — 짧게 닳은 연필이 존경의 방석 위에, 머리 위엔 후광
  'any:s0-9': d=>{
    const O='#2B2335';
    // cushion
    d.ell(16,24,13,5,'#B83A52'); d.ell(16,25,12,4,'#9A2C44'); d.ell(15,23,11,3,'#C8485F'); d.ell(13,22,6,1,'#E07088');
    d.hline(4,28,24,'#9A2C44');
    for(const x of [3,29]){d.stamp(x-1,23,['.g.','ggg','.g.','gGg','gGg','g.g'],{g:'#F2C440',G:'#C8901E'})}
    // pencil stub (lying, tip right)
    const y=14;
    d.rect(4,y,4,7,'#F49AA8'); d.rect(4,y+5,4,2,'#D87080'); d.px(4,y,'#D87080'); d.hline(5,7,y+1,'#FFC4CC'); // worn eraser
    d.rect(8,y,3,7,'#D8DCE4'); d.vline(9,y,y+6,'#A8B0BE'); d.rect(8,y+5,3,2,'#9AA2B0'); d.px(8,y+1,'#FFFFFF'); d.px(10,y+1,'#FFFFFF');
    d.rect(11,y,9,2,'#FFE48A'); d.rect(11,y+2,9,3,'#F8C840'); d.rect(11,y+5,9,2,'#D89A20');
    d.hline(12,18,y,'#FFF4C0');
    for(let x=20;x<=27;x++){const k=x-20, t=Math.floor(k*3/8), y0=y+t, y1=y+6-t; for(let yy=y0;yy<=y1;yy++) d.px(x,yy, x>=25?(yy<y+3?'#6A6A7A':'#3E3E4E'):(yy<=y+3?'#F2CC94':'#D8A868'))}
    d.px(20,y,'#F8C840'); d.px(20,y+6,'#D89A20'); d.px(21,y+3,'#F8E0B8');
    // teeth marks (studied hard)
    d.px(14,y+2,'#B07818'); d.px(16,y+2,'#B07818');
    d.outline(O);
    // halo
    d.ell(15,8,7,2,'#F2B830'); d.ell(15,8,5,1,null); d.ell(15,8,4,0,null);
    for(let x=6;x<=24;x++){ if(d.get(x,6)) d.px(x,6,'#FFF2A0'); if(d.get(x,7)) d.px(x,7,'#FFE060') }
    spark(d,27,5,'#FFE060'); d.px(4,9,'#FFE060'); d.px(24,10,'#FFF6B0');
  },
  // 네 잎 클로버 — 큰 네 잎, 아래엔 확인한 세 잎 클로버들
  'any:s0-13': d=>{
    const O='#1E3A2A', L1='#86D872', L2='#52B252', L3='#2F8A3E', HI='#C8F8A8';
    const cx=15, cy=12, s=4.6, r2=Math.SQRT1_2;
    const dirs=[[-r2,-r2],[r2,-r2],[r2,r2],[-r2,r2]];
    for(let y=0;y<32;y++)for(let x=0;x<32;x++){
      for(const [ax,ay] of dirs){
        const px=x-cx, py=y-cy, along=px*ax+py*ay, perp=px*(-ay)+py*ax;
        const hx=perp/s, hy=(along-s*1.1)/s;
        const f=(hx*hx+hy*hy-1)**3-hx*hx*hy**3;
        if(f<=0 && along>0){
          let c=L2; if(hy>0.2&&perp<-0.5) c=L1; if(hy<-0.45) c=L3; if(Math.abs(perp)<0.5 && along>1 && along<s*1.7) c=L3;
          d.px(x,y,c);
        }
      }
    }
    // white chevron marks on each leaf
    for(const [ax,ay] of dirs){const mx=cx+ax*5.5, my=cy+ay*5.5; d.px(mx,my,HI); d.px(mx-ay*1.5,my+ax*1.5,HI); d.px(mx+ay*1.5,my-ax*1.5,HI)}
    d.circ(15,12,1,'#A8E07A'); d.px(15,12,L1);
    // stem
    d.line(15,13,18,29,L3); d.line(16,13,19,29,L2);
    // little three-leaf clovers below (checked ones)
    const three=(x,y)=>{d.stamp(x,y,['gg.gg','ggggg','.ggg.','..h..','..h..'],{g:'#9CCB86',h:'#6E9A60'})};
    three(1,25); three(6,27); three(24,26);
    d.outline(O);
    spark(d,28,4,'#FFE060'); d.px(3,4,'#FFF2A0'); d.px(29,14,'#FFF2A0'); d.px(2,18,'#FFE060');
  },

  // 여분 단추 — 세탁소 카드에 꿰매진 단추, 옆엔 "언젠가" 빈 자리 점선
  'any:s0-17': d=>{
    const O='#2E2A3A';
    d.rect(1,7,30,20,'#F4E6C8'); d.rect(1,24,30,3,'#E2CFA8'); d.hline(1,30,7,'#FFF6E0');
    d.circ(28,10,1,'#C8B088'); d.px(28,10,'#7A6650');
    d.line(28,9,30,4,'#C05040'); d.line(29,9,31,4,'#E07060');
    // dashed empty spot (someday)
    for(let a=0;a<20;a++){ if(a%2) continue; const t=a/20*Math.PI*2; d.px(Math.round(23+Math.cos(t)*4.5),Math.round(17+Math.sin(t)*4.5),'#A8946E') }
    d.px(23,17,'#C8B48E');
    // big button
    const bx=10,by=16;
    d.circ(bx,by,8,'#4A76C8'); d.circ(bx-1,by-1,7,'#7AA6EC'); d.circ(bx,by,6,'#5A86D8'); d.circ(bx,by,5,'#6E98E4');
    d.px(bx-5,by-4,'#D8E8FF'); d.px(bx-4,by-5,'#D8E8FF'); d.px(bx-6,by-2,'#B8D4FA'); d.px(bx-2,by-6,'#B8D4FA');
    for(const [hx,hy] of [[-2,-2],[1,-2],[-2,1],[1,1]]) d.rect(bx+hx,by+hy,2,2,'#2A4686');
    d.line(bx-1,by-1,bx+2,by+2,'#FFFFFF'); d.line(bx+2,by-1,bx-1,by+2,'#FFFFFF');
    d.line(bx-2,by-2,bx+2,by+2,'#F2F2F2'); d.line(bx+2,by-2,bx-2,by+2,'#F2F2F2');
    d.outline(O);
  },

  // 공룡 자 — 브라키오사우루스 모양 자, 눈금 대신 뼈
  'any:s1-9': d=>{
    const O='#1F3A3A', A='#9EE0C8', B='#72C8AC', C='#4EA68C', HI='#D8FFF0';
    d.ell(19,14,8,5,A); d.ell(20,16,7,3,B); d.ell(18,12,5,2,HI); d.ell(19,13,6,2,A);
    d.poly([[11,14],[6,4],[9,3],[15,11]],A); d.line(9,4,14,11,B);
    d.ell(7,4,3,2,A); d.px(3,5,A); d.px(6,3,O); d.hline(4,6,6,B);
    d.poly([[25,12],[31,20],[29,21],[24,17]],A); d.line(27,15,30,20,B);
    d.rect(12,17,3,4,B); d.rect(23,17,3,4,B); d.rect(15,17,2,4,C);d.rect(21,17,2,4,C);
    // ruler strip
    d.rect(1,21,30,8,A); d.rect(1,27,30,2,B); d.hline(1,30,21,HI);
    for(let x=1;x<=30;x++){ const big=(x-1)%7===0; d.vline(x,big?25:27,28, C) }
    for(const x of [3,10,17,24]) d.stamp(x,22,['w....w','wwwwww','w....w'],{w:'#FFFFFF'});
    d.outline(O);
    spark(d,28,5,'#FFE060');
  },

  // 볼링핀 — 스트라이크 기념, 넘어진 흔적으로 반창고
  'any:s1-13': d=>{
    const O='#2A2430', W1='#FFFFFF', W2='#E8E6EE', W3='#BEBACA', R='#E2384A', R2='#B02434';
    const prof=[[1,2],[2,3],[3,4],[4,4],[5,4],[6,4],[7,4],[8,3],[9,3],[10,2],[11,2],[12,3],[13,4],[14,5],[15,6],[16,6],[17,7],[18,7],[19,7],[20,7],[21,7],[22,7],[23,6],[24,6],[25,6],[26,5],[27,5],[28,4],[29,4]];
    for(const [y,hw] of prof){ for(let x=16-hw;x<16+hw;x++){ const r=(x-(16-hw))/(2*hw); d.px(x,y, r<0.3?W1:(r<0.72?W2:W3)) } }
    d.hline(15-0,16,1,W2);
    // stripes at neck
    for(const y of [9,12]){ const hw=prof.find(p=>p[0]===y)[1]; d.hline(16-hw,15+hw,y,R); d.px(15+hw,y,R2); d.px(14+hw,y,R2) }
    d.hline(12,13,13, R); d.hline(18,19,13,R2); d.hline(14,17,13,R);
    // highlights
    d.vline(13,3,6,W1); d.px(12,4,W1); d.vline(11,17,23,W1);
    // bandage
    d.poly([[17,18],[23,15],[24,17],[18,20]],'#F2C6A0'); d.rect(19,16,3,3,'#E0A880'); d.px(20,17,'#C88A68'); 
    // scuff
    d.px(14,25,W3); d.px(15,26,W3);
    d.outline(O);
    // impact stars
    spark(d,5,6,'#FFD040'); spark(d,27,8,'#FFD040'); d.px(28,24,'#FFD040'); d.px(4,20,'#FFE890');
  },

  // 인공위성 나사 — 하늘에서 떨어진 육각 볼트, 끝이 그을림. 위성은 멀쩡히 웃는 중
  'any:s1-17': d=>{
    const O='#22222E', M1='#F4F6FA', M2='#C6CCD6', M3='#8E96A6', M4='#5E6676';
    const S1='#D88A4A', S2='#A85E34', S3='#6A3A24';
    const X=9; // left of head
    // hex head (side view: 3 faces)
    d.rect(X,9,15,7,M2); d.rect(X,9,4,7,M1); d.rect(X+11,9,4,7,M3);
    d.hline(X+1,X+13,8,M1); d.hline(X+4,X+10,8,'#FFFFFF'); d.hline(X,X+14,15,M4);
    d.vline(X+4,9,15,M2); d.px(X+1,10,'#FFFFFF'); d.px(X+1,11,'#FFFFFF');
    // washer
    d.rect(X+1,16,13,2,M3); d.hline(X+1,X+13,16,M2);
    // shank with sawtooth thread
    const sx=X+3, sw=9;
    for(let y=18;y<=28;y++){
      const t=(y%2===0)?1:0; d.hline(sx-t,sx+sw-1+t,y,M2);
      d.px(sx-t,y,M1); d.px(sx+1-t,y,M1); d.px(sx+sw-1+t,y,M4); d.px(sx+sw-2+t,y,M3);
      if(y%2===1){ d.line(sx,y,sx+sw-1,y-1,M3); }
    }
    // scorched lower part
    for(let y=25;y<=28;y++)for(let x=sx-1;x<=sx+sw;x++){const c=d.get(x,y); if(!c) continue; const k=y-25; d.px(x,y, c===M4||c===M3?(k<3?S2:S3):(k<2?S1:(k<4?S2:S3)))}
    d.poly([[sx,29],[sx+sw-1,29],[sx+sw-3,31],[sx+2,31]],S3);
    d.outline(O);
    // falling: flame flicks & speed lines above
    d.stamp(X+1,2,['..f.....f..f.','.fFf...fFf.F.','.fYf.f.fYf.f.','..f..F..f....'],{f:'#F8A040',F:'#FFD070',Y:'#FFF2B0'});
    d.vline(X-2,2,6,'#C8CCD8'); d.vline(X+17,1,5,'#C8CCD8'); d.vline(X+19,6,8,'#C8CCD8'); d.vline(X-4,9,11,'#C8CCD8');
    // smiling, totally fine satellite (top-left)
    d.stamp(0,0,['bb...bb','bB.g.Bb','bbgwgbb','bB.g.Bb','bb...bb'],{b:'#3A6AC8',B:'#7AA6F0',g:'#D8DCE4',w:'#FFFFFF'});
    d.stamp(2,5,['k.k','.k.'],{k:'#3A3A4A'});
    twinkle(d,28,22,'#FFE060'); d.px(3,17,'#FFF2A0'); d.px(27,13,'#FFF2A0');
  },

  // 노벨상 초콜릿 메달 — 금박을 벗기면 초콜릿, 한 입 베어 문 자국
  'any:s2-9': d=>{
    const O='#3A2418', G1='#FFE68A', G2='#F2C440', G3='#C8901E', G4='#9A6A14', C1='#8A5434', C2='#6A3A22', C3='#A86A44';
    d.poly([[9,0],[14,0],[17,9],[13,10]],'#3A6AD0'); d.poly([[18,0],[23,0],[19,10],[15,9]],'#2A50A8'); d.vline(11,0,4,'#6A96F0'); d.px(12,5,'#6A96F0');
    const cx=15,cy=19;
    d.circ(cx,cy,10,G3); d.circ(cx-1,cy-1,9,G2); d.circ(cx,cy,7,G3); d.circ(cx-.5,cy-.5,6.5,G2);
    // profile emboss
    d.stamp(10,13,['..ggg...','.gggggg.','gggggggg','.gggggg.','..ggggg.','..gggg..','.gggggg.','gggggggg'],{g:G3});
    d.stamp(10,13,['..www...','.w......','w.......'],{w:G1});
    for(let a=0;a<9;a++){ const t=Math.PI*(1.05+a*0.07); d.px(Math.round(cx+Math.cos(t)*8.5),Math.round(cy+Math.sin(t)*8.5),'#FFF8D0') }
    // chocolate (peeled lower right) with jagged tear
    for(let y=0;y<32;y++)for(let x=0;x<32;x++){ if(!d.get(x,y)||y<9) continue; const k=(x-cx)*0.8+(y-cy)-2+((x%3)?0:1);
      if(k>0) d.px(x,y, k<1.5?G1:((x*3+y)%7===0?C3:(k>8?C2:C1))) }
    // bite marks
    d.circ(24,26,2.6,null); d.circ(21,29,2.2,null); d.circ(26,22,1.6,null);
    d.px(22,26,C2); d.px(23,24,C2); d.px(20,27,C2);
    // curled foil flap
    d.poly([[22,15],[30,12],[29,16],[25,17]],G1); d.line(22,15,30,12,G2); d.px(27,15,'#FFFFFF'); d.px(29,13,G3);
    d.outline(O);
    d.px(27,29,C1); d.px(29,27,C2); d.px(28,31,C1);
    spark(d,4,5,'#FFF0A0');
  },

  // 말랑한 유니콘 뿔 — 파스텔 나선 뿔, 살짝 휘어짐, 뿌리 쪽은 말랑 분홍, "뽀잉" 선
  'any:s2-13': d=>{
    const O='#4A2A5A';
    const cols=[['#FF8EC0','#E066A0','#FFC4E0'],['#FFD060','#E8A830','#FFE8A8'],['#70D8A8','#40B080','#B0F0D0'],['#78A8F8','#5080D8','#B8D4FF'],['#B888F0','#9060D0','#DCC8FF']];
    for(let y=1;y<=25;y++){
      const t=(y-1)/24, hw=0.5+t*6.5, cx=16+Math.sin(t*2.6+0.4)*2.5-1.5;
      for(let x=Math.round(cx-hw);x<=Math.round(cx+hw);x++){
        const band=Math.floor((y + (x-cx)*1.1 + 50)/3.2)%5;
        const side=(x-cx)/(hw+.5);
        const pal=cols[band]; const c=side>0.4?pal[1]:(side<-0.35?pal[2]:pal[0]);
        d.px(x,y,c);
      }
    }
    // squishy root (fell out)
    d.ell(15,27,8,3,'#FF9EC8'); d.ell(15,26,7,2,'#FFC0DC'); d.hline(10,15,25,'#FFE4F0'); d.hline(9,21,29,'#E07AA8');
    // squeeze dent + shine
    d.px(10,16,'#FFFFFF'); d.px(11,14,'#FFFFFF'); d.px(13,9,'#FFFFFF');
    d.outline(O);
    spark(d,22,3,'#FFF080'); d.px(5,10,'#FF9EC8'); d.px(27,13,'#78A8F8'); d.px(25,8,'#B888F0');
    d.line(2,22,4,20,'#C8A0E0'); d.line(1,25,4,25,'#C8A0E0'); d.line(27,21,29,19,'#C8A0E0'); d.line(27,25,30,25,'#C8A0E0');
  },

  // 천 년에 한 번 피는 꽃 — 빛나는 별꽃, 화분에 3026
  'any:s2-17': d=>{
    const O='#3A1A40';
    d.vline(15,16,25,'#3E9A50'); d.vline(16,16,25,'#2E7A40');
    d.poly([[15,21],[6,17],[4,20],[11,23]],'#5AC068'); d.line(14,21,7,18,'#3E9A50');
    d.poly([[16,22],[24,18],[26,21],[20,24]],'#4AAE5A'); d.line(17,22,23,20,'#2E7A40');
    for(let k=0;k<8;k++){ const t=k/8*Math.PI*2-Math.PI/2; const ex=15.5+Math.cos(t)*6.8, ey=9.5+Math.sin(t)*6.8;
      d.ell(ex,ey,3,3,k%2?'#B03EA8':'#E05EC0'); d.px(Math.round(ex+Math.cos(t)*2),Math.round(ey+Math.sin(t)*2),'#FF9ADC') }
    for(let k=0;k<8;k++){ const t=(k+.5)/8*Math.PI*2-Math.PI/2; const ex=15.5+Math.cos(t)*4.3, ey=9.5+Math.sin(t)*4.3;
      d.ell(ex,ey,2.4,2.4,'#FF8ED4'); d.px(Math.round(ex-1),Math.round(ey-1),'#FFD0F0') }
    d.circ(15.5,9.5,2.6,'#FFC830'); d.circ(15.5,9.5,1.6,'#FFEE90'); d.px(15,9,'#FFFFFF');
    // pot with 3026
    d.rect(6,24,20,2,'#E88A5A'); d.hline(6,25,24,'#F8A878');
    d.poly([[7,26],[25,26],[23.5,31],[8.5,31]],'#C0622E'); d.hline(9,23,31,'#A04E22');
    d.outline(O);
    num(d,9,26,'3026','#FFE8C8');
    for(const [x,y] of [[15,0],[3,9],[28,9],[6,2],[25,2]]) d.px(x,y,'#FFE060');
    spark(d,3,3,'#FFE060'); spark(d,28,3,'#FFE060'); d.px(1,14,'#FFF2A0'); d.px(30,14,'#FFF2A0');
  },
  // 독서실 칸막이 — 조용한 칸막이 책상 두 칸, 스탠드 불빛, 옆 칸 샤프에서 날아오는 딸깍 소리(음표)
  'any:c0-9': d=>{
    const WA='#E6D9BE', WL='#F2E8D2', WD='#C9B48E', LT='#FFFBEA', F1='#B98A58', F2='#A57746', F3='#C49866', FD='#8E6238';
    const P1='#7E9C86', P2='#97B49E', P3='#5E7A66', P4='#748F7B', DK='#E8C890', DF='#9A6E44', DL='#7A5432', IN='#3A4A5A', GL='#FFF0A8';
    const RED='#E05A5A', BLU='#4A70C0', ORA='#E0A040', PUR='#A070C0';
    d.rect(0,0,64,20,WA); d.rect(0,0,64,2,WD); d.hline(0,63,2,WL);
    for(let x=4;x<64;x+=16){ d.rect(x,3,8,1,LT); d.rect(x+1,4,6,1,WL) }
    d.rect(0,15,64,5,WD); d.hline(0,63,15,DK);
    d.rect(0,20,64,20,F1); for(let y=21;y<40;y+=3){ d.hline(0,63,y,F3); d.hline(0,63,y+1,F1); d.hline(0,63,y+2,F2); const o=(y*7)%13; for(let x=o;x<64;x+=13) d.px(x,y+1,F2) }
    d.hline(0,63,20,FD);
    d.circ(12,8,4,DL); d.circ(12,8,3,LT); d.vline(12,6,8,IN); d.hline(12,14,8,IN);
    d.rect(1,14,4,6,'#C8704A'); d.ell(3,10,3,4,'#5AA060'); d.ell(2,9,1,2,'#7CC07A');
    const carrel=(x,w,neighbor)=>{
      d.rect(x,5,w,18,P1); d.rect(x,5,w,2,P2); for(let y=8;y<22;y+=2) for(let i=x+1;i<x+w;i+=2) d.px(i+(y%4?1:0),y,P4);
      d.rect(x,22,w,2,DK); d.hline(x,x+w-1,22,WL); d.rect(x,24,w,6,DF); d.hline(x,x+w-1,24,DL);
      d.rect(x+1,30,2,5,DL); d.rect(x+w-3,30,2,5,DL);
      if(!neighbor){
        for(let y=12;y<=21;y++){const sp=(y-11)*0.55; for(let i=Math.round(x+9-sp-1);i<=Math.round(x+9+sp+1);i++) if(y>=19||(i+y)%2===0) d.px(i,y,GL)}
        d.rect(x+1,20,4,2,IN); d.vline(x+2,10,19,IN); d.line(x+2,10,x+7,9,IN); d.rect(x+7,9,5,2,IN); d.hline(x+8,x+10,11,LT);
        d.poly([[x+5,21],[x+9,19.5],[x+13,21],[x+13,22],[x+5,22]],'#FFFFFF'); d.vline(x+9,19,22,WD); d.hline(x+6,x+8,21,BLU); d.hline(x+10,x+12,21,BLU); d.hline(x+5,x+13,22,WD);
        d.rect(x+w-3,19,2,3,RED); d.px(x+w-1,20,RED);
      } else {
        d.rect(x+1,16,7,2,BLU); d.rect(x+2,18,6,2,ORA); d.rect(x+1,20,8,2,RED); d.hline(x+2,x+7,16,P2);
        d.rect(x+w-6,20,5,2,PUR);
        // mechanical pencil clicking
        d.line(x+w-9,21,x+w-3,17,IN); d.px(x+w-3,17,LT);
        d.px(x+w-2,15,RED); d.px(x+w-1,17,RED); d.px(x+w-4,15,RED); d.px(x+w-5,14,RED);
      }
      d.rect(x-2,3,2,28,P3); d.vline(x-2,3,30,P4); d.rect(x+w,3,2,28,P3); d.vline(x+w,3,30,P4);
    };
    carrel(27,16,false); carrel(46,16,true);
    for(const x of [25,44]) d.rect(x,35,21,1,F2);
    // ASMR notes drifting from the neighbor toward our desk
    d.stamp(50,8,['.n','.nn','.n.','nn.','nn.'],{n:BLU});
    d.stamp(37,6,['.nnnn','.n..n','.n..n','nn.nn','nn.nn'],{n:PUR});
    d.stamp(31,13,['.n','.n','nn','nn'],{n:BLU});
    d.rect(60,27,4,2,IN); d.rect(61,29,2,6,IN);
  },
  // 논두렁 길 — 논 사이 흙길, 오른쪽엔 개구리 합창단과 음표, 길가엔 지휘봉 나뭇가지
  'any:c0-13': d=>{
    d.grad(0,0,64,15,['#7CC6F2','#92D0F4','#A8DAF6','#C0E6F8']);
    d.ell(16,4,5,2,'#FFFFFF'); d.ell(20,3,3,2,'#FFFFFF'); d.ell(44,6,4,1,'#FFFFFF');
    d.circ(56,4,3,'#FFF4A0'); d.circ(56,4,2,'#FFFFFF');
    // far hills
    d.poly([[0,13],[10,7],[22,12],[34,6],[48,11],[58,8],[64,11],[64,14],[0,14]],'#7EB8A0'); d.poly([[0,14],[14,10],[30,13],[46,10],[64,13],[64,15],[0,15]],'#5EA080');
    // paddies base
    d.rect(0,15,64,25,'#6CBF4E');
    // rows of rice in paddies
    for(let y=16;y<40;y+=2) for(let x=(y%4?0:1);x<64;x+=3) d.px(x,y,'#4E9E3A');
    for(let y=17;y<40;y+=4) for(let x=1;x<64;x+=6) d.px(x,y,'#A8E070');
    // dikes (horizontal)
    for(const y of [18,24,31]) { d.hline(0,63,y,'#C8A46A'); d.hline(0,63,y+1,'#A8844E') }
    // flooded paddy on right (water reflecting sky)
    d.rect(36,25,28,6,'#8ED0EE'); for(let x=36;x<64;x+=4) d.px(x+1,26+(x%3),'#C0E8FA'); for(let x=38;x<64;x+=5) d.vline(x,28,30,'#5EAE48');
    d.rect(36,19,28,5,'#86CCE6'); for(let x=37;x<64;x+=3) d.px(x,20+(x%2),'#B8E4F6');
    // dirt path: wide lane at bottom-left, bending toward the hills
    d.poly([[0,26],[22,26],[30,15],[33,15],[28,40],[0,40]],'#D8B07A'); d.hline(0,22,26,'#C8A46A');
    for(let i=0;i<30;i++){ const x=d.ri(0,30), y=d.ri(27,39); if(d.get(x,y)==='#D8B07A') d.px(x,y,d.rnd()<.5?'#C49A64':'#E8C894') }
    d.line(28,40,33,15,'#B89058');
    // grass tufts at path edge
    for(const [x,y] of [[2,28],[9,26],[26,33],[29,25]]) d.stamp(x,y,['g.g','.g.'],{g:'#3E8E30'});
    // frogs on dike y=24 and 31
    const frog=(x,y,open)=>{d.stamp(x,y-4,['.ee.ee.','gEggEgg','ggggggg',open?'gmMMMmg':'ggmmmgg','.ggggg.','l.....l'],{e:'#6CC050',E:'#1E2A1E',g:'#4EA83A',m:'#2E5A24',M:'#E87070',l:'#3E8E30'}); d.px(x+1,y-4,'#FFFFFF'); d.px(x+4,y-4,'#FFFFFF')};
    frog(38,24,true); frog(47,24,true); frog(56,24,false); frog(42,31,true); frog(53,31,true);
    // notes
    d.stamp(38,13,['.nn','.n.','nn.','nn.'],{n:'#2E3A8A'}); d.stamp(46,11,['nnnn','n..n','n..n','nn.nn','nn.nn'].map(r=>r.slice(0,5)),{n:'#2E3A8A'});
    d.stamp(55,13,['.n','.nn','.n.','nn.'],{n:'#2E3A8A'}); d.stamp(51,8,['n','n','nn'],{n:'#5A3AA0'});
    // conductor's twig baton by the path
    d.line(22,36,27,33,'#7A4A24'); d.px(27,33,'#FFFFFF'); d.px(23,36,'#5A3418');
  },
  // 옥상 별 관측 — 은하수, 물탱크, 망원경, 담요와 베개, 바닥엔 분필로 센 별 개수
  'any:c0-17': d=>{
    d.grad(0,0,64,26,['#0E1238','#141A48','#1C2458','#243068','#2E3C78']);
    // milky way band
    for(let x=0;x<64;x++){ const yc=2+x*0.28; for(let y=Math.round(yc-3);y<=Math.round(yc+3);y++){ const q=Math.abs(y-yc); if(q<1) d.px(x,y,'#3A4284'); else if(q<2.5&&(x+y)%2===0) d.px(x,y,'#2C3470') } }
    for(let i=0;i<55;i++){ const x=d.ri(0,63), y=d.ri(0,20); d.px(x,y,d.rnd()<.3?'#FFF2A0':'#FFFFFF') }
    for(const [x,y] of [[10,4],[30,8],[47,3],[24,14]]) twinkle(d,x,y,'#FFF6C8');
    d.line(50,9,58,6,'#E8ECFF'); d.px(58,6,'#FFFFFF'); d.px(49,10,'#8A90C8');
    // distant city
    const bl=[[0,19,6],[6,21,5],[11,18,4],[15,22,7],[22,17,5],[27,20,6],[33,16,4],[37,21,8],[45,19,5],[50,22,6]];
    for(const [x,y,w] of bl){ d.rect(x,y,w,26-y,'#1A1E3E'); for(let j=y+1;j<25;j+=2)for(let i=x+1;i<x+w-1;i+=2) if(d.rnd()<.35) d.px(i,j,'#F8D870') }
    // water tank
    d.rect(52,8,11,15,'#4A8AA8'); d.ell(57,8,5,1,'#6AAAC8'); for(const y of [12,17]) d.hline(52,62,y,'#3A7090'); d.vline(53,9,22,'#6AAAC8');
    d.rect(53,23,2,3,'#3A4058'); d.rect(60,23,2,3,'#3A4058');
    // parapet
    d.rect(0,25,64,3,'#7A7E96'); d.hline(0,63,25,'#9AA0B8');
    // rooftop floor
    d.rect(0,28,64,12,'#5E6480'); for(let y=31;y<40;y+=4) d.hline(0,63,y,'#565C78'); for(let x=8;x<64;x+=12) d.vline(x,28,39,'#565C78');
    // blanket + pillow
    d.poly([[24,33],[44,31],[47,38],[26,39]],'#E0607A'); for(let x=27;x<46;x+=4) d.line(x,33,x+1,38,'#F08AA0'); d.line(24,33,44,31,'#F8A8B8');
    d.ell(29,33,3,1,'#F4F0E0'); d.px(27,32,'#FFFFFF');
    // telescope
    d.line(36,29,33,35,'#2A2E40'); d.line(36,29,39,35,'#2A2E40'); d.line(36,29,36,35,'#2A2E40');
    d.line(32,27,42,22,'#D8DCE8'); d.line(32,28,42,23,'#A8AEC4'); d.line(33,28,42,24,'#8088A8'); d.rect(42,21,2,4,'#3A4060'); d.px(31,28,'#3A4060');
    // chalk tally marks: counted stars
    for(let g=0;g<4;g++){ const x=g%2?57:48, y=g<2?30:35; for(let i=0;i<4;i++) d.vline(x+i*2,y,y+3,'#D8DEEA'); d.line(x-1,y+4,x+7,y-1,'#FFFFFF') }
    // mug
    d.rect(22,35,2,2,'#F0C040'); d.px(24,35,'#F0C040');
  },
  // 과학관 — 반데그라프 정전기 공, 번개 불꽃과 날아다니는 털 뭉치, 천장엔 행성 모빌
  'any:c1-9': d=>{
    d.grad(0,0,64,24,['#1E2A50','#22305A','#283864','#2E406E']);
    // spotlights
    for(const cx of [42]) for(let y=0;y<24;y++){const sp=y*0.45; for(let x=Math.round(cx-sp);x<=Math.round(cx+sp);x++) if((x+y)%2===0) d.px(x,y,'#2C3C6C')}
    // planet mobile
    d.hline(4,30,2,'#8A92B8'); for(const [x,l] of [[6,5],[14,8],[22,4],[29,7]]) d.vline(x,2,2+l,'#8A92B8');
    d.circ(6,8,2,'#E86A5A'); d.px(5,7,'#FFA898');
    d.circ(14,12,3,'#F2B84A'); d.hline(9,19,12,'#C8E0FF'); d.px(13,11,'#FFE098');
    d.circ(22,7,1.5,'#6AC0E8'); d.circ(29,11,2,'#9A7AE0'); d.px(28,10,'#C8B0FF');
    // floor tiles
    d.rect(0,24,64,16,'#C8CCDA'); for(let y=24;y<40;y+=4)for(let x=0;x<64;x+=4) if(((x+y)/4)%2===0) d.rect(x,y,4,4,'#B0B6C8');
    d.hline(0,63,24,'#8A92B0');
    // DNA model (right)
    for(let y=4;y<30;y++){ const a=Math.sin(y*0.5)*3; d.px(Math.round(58+a),y,'#E86AB8'); d.px(Math.round(58-a),y,'#6ACAE8'); if(y%3===0) d.hline(Math.round(58-Math.abs(a)),Math.round(58+Math.abs(a)),y,'#C8CCDA') }
    d.rect(54,30,9,3,'#5A6488'); d.hline(54,62,30,'#7A86AA');
    // Van de Graaff
    d.rect(37,30,13,4,'#5A6488'); d.hline(37,49,30,'#7A86AA');
    d.rect(41,16,5,14,'#E8E4D8'); d.vline(41,16,29,'#FFFFFF'); d.vline(45,16,29,'#B8B4A8');
    d.circ(43,12,7,'#9AA4BC'); d.circ(42,11,6,'#C8D0E0'); d.circ(41,10,3,'#E8EEF8'); d.px(40,8,'#FFFFFF'); d.px(39,9,'#FFFFFF');
    // grounding ball
    d.vline(53,18,29,'#7A86AA'); d.circ(53,17,2,'#C8D0E0'); d.px(52,16,'#FFFFFF');
    // lightning
    d.line(50,11,52,14,'#FFF27A'); d.line(52,14,50,15,'#FFF27A'); d.line(50,15,52,17,'#FFF27A');
    d.line(36,8,33,6,'#C8A0FF'); d.line(33,6,34,4,'#C8A0FF'); d.line(37,15,34,17,'#C8A0FF'); d.line(43,4,44,1,'#FFF27A'); d.line(44,1,46,0,'#FFF27A');
    // fluffy hair tufts flying (every hair stood up!)
    const tuft=(x,y)=>d.stamp(x,y,['f.f.f','.FfF.','fFFFf','.FfF.','f.f.f'],{f:'#F4D8A8',F:'#FFF0D0'});
    tuft(28,13); tuft(31,20); tuft(23,19); tuft(33,6);
    // info stand
    d.rect(26,26,6,4,'#E8C060'); d.rect(28,30,2,4,'#5A6488'); d.stamp(28,27,['.y','y.'],{y:'#3A3A5A'});
  },
  // 롤러코스터 — 높은 언덕과 루프, 떨어지기 직전 열차, 비명 선
  'any:c1-13': d=>{
    d.grad(0,0,64,30,['#5EB8F0','#74C4F2','#8ED0F4','#A8DCF6','#C2E8F8']);
    d.ell(12,6,6,2,'#FFFFFF'); d.ell(16,5,3,2,'#FFFFFF'); d.ell(28,13,4,1,'#FFFFFF');
    // ground
    d.rect(0,29,64,11,'#7CCB5A'); d.hline(0,63,29,'#5EAE48'); for(let y=31;y<40;y+=3) for(let x=(y%2)*3;x<64;x+=7) d.px(x,y,'#5EAE48');
    // walkway
    d.rect(0,35,64,5,'#E8D4A8'); d.hline(0,63,35,'#D0B888'); for(let x=2;x<64;x+=6) d.px(x,37,'#D0B888');
    // track: hill and loop
    const T='#E04848', TD='#A83030', S='#F2F2F2';
    const pts=[]; for(let x=24;x<=62;x++){ let y; if(x<=40) y=28-(x-24)*1.45; else if(x<=50) y=5+(x-40)**2*0.22; else y=27; pts.push([x,Math.round(y)]) }
    // supports first
    for(let i=0;i<pts.length;i+=3){ const [x,y]=pts[i]; d.vline(x,y+1,29,S); }
    for(let i=0;i<pts.length-3;i+=6){ const [x,y]=pts[i], [x2,y2]=pts[i+3]; d.line(x,29,x2,Math.max(y2+2,y+2),'#D0D4DE') }
    // loop
    d.ring(55,18,7,T); d.ring(55,18,6,TD); for(const x of [50,60]) d.vline(x,24,29,S);
    for(let i=0;i<pts.length-1;i++){ d.line(pts[i][0],pts[i][1],pts[i+1][0],pts[i+1][1],T); d.px(pts[i][0],pts[i][1]+1,TD) }
    // train at top, tipping over the drop
    const ty=x=>x<=40?28-(x-24)*1.45:(x<=50?5+(x-40)**2*0.22:27);
    const car=(x,c)=>{const y=Math.round(ty(x+2))-3; d.rect(x,y,5,3,c); d.hline(x,x+4,y,'#FFF0A0'); d.px(x+1,y-1,'#F8D8B8'); d.px(x+3,y-1,'#F8D8B8'); d.px(x,y-2,'#F8D8B8'); d.px(x+4,y-2,'#F8D8B8')};
    car(32,'#F2C230'); car(37,'#3A8AE0'); car(42,'#F2C230');
    // scream lines
    d.line(47,1,50,0,'#FFFFFF'); d.line(48,3,52,2,'#FFFFFF'); d.line(49,5,52,5,'#FFFFFF'); d.line(26,8,28,10,'#FFFFFF'); d.line(25,12,28,12,'#FFFFFF'); d.stamp(53,0,['w.w','w.w','...','w.w'],{w:'#E04848'});
    // flags & balloon vendor
    d.vline(62,2,10,'#8A8A9A'); d.poly([[62,2],[58,4],[62,5]],'#F2C230');
    d.line(29,34,27,25,'#5A5A6A'); d.circ(27,23,2,'#F06AA8'); d.px(26,22,'#FFC0DE');
    d.line(30,34,31,26,'#5A5A6A'); d.circ(31,25,2,'#7AD0F8'); d.px(30,24,'#D0F0FF');
  },
  // 마법 학교 기숙사 — 보랏빛 밤, 뾰족 지붕 탑과 불 켜진 창문, 나무에 걸린 빗자루와 모자
  'any:c1-17': d=>{
    d.grad(0,0,64,30,['#1E1440','#2A1A54','#3A2266','#4A2C78','#5A3888']);
    for(let i=0;i<30;i++){ d.px(d.ri(0,63),d.ri(0,18),d.rnd()<.4?'#FFE8A0':'#E8E0FF') }
    // big moon
    d.circ(10,8,5,'#FFF4C8'); d.circ(12,7,4,'#2A1A54'); d.px(7,6,'#FFFFFF');
    // castle
    const WL='#6A6488', WD='#4E4A6C', RF='#3A5ACA', RL='#5A7AE8', WIN='#FFD860';
    d.rect(26,16,26,14,WL); for(let x=26;x<52;x+=3) d.rect(x,14,2,2,WL);
    for(let y=18;y<30;y+=3) for(let x=26+(y%2)*2;x<52;x+=5) d.hline(x,x+2,y,WD);
    const tower=(x,w,top)=>{ d.rect(x,top,w,30-top,WL); d.vline(x+w-1,top,29,WD); d.poly([[x-1,top],[x+w/2-0.5,top-9],[x+w,top]],RF); d.line(x+w/2-0.5,top-9,x,top-1,RL);
      d.vline(Math.round(x+w/2-0.5),top-12,top-9,'#C8C0D8'); d.poly([[Math.round(x+w/2-0.5),top-12],[Math.round(x+w/2+3),top-11],[Math.round(x+w/2-0.5),top-10]],'#E04870') };
    tower(29,6,12); tower(43,7,8);
    // windows
    for(const [x,y] of [[31,15],[31,21],[45,12],[45,18],[37,20],[40,20]]) { d.rect(x,y,2,3,WIN); d.px(x,y,'#FFF4C0') }
    d.rect(45,24,2,3,'#3A3660');
    d.rect(36,25,5,5,'#5A3A2A'); d.px(40,27,WIN); // door
    // tree with stuck broom and hat
    d.rect(56,20,4,10,'#5A3A2A'); d.line(57,21,53,16,'#5A3A2A'); d.line(59,20,62,16,'#5A3A2A');
    d.circ(57,12,8,'#2E5A3A'); d.circ(55,10,5,'#3E7448'); d.circ(61,14,4,'#3E7448'); d.circ(52,15,3,'#2E5A3A');
    for(const [x,y] of [[54,7],[58,9],[51,13],[61,12],[56,15]]) d.px(x,y,'#5A9A5E');
    // broom stuck across the branches
    d.line(47,15,58,8,'#B07A3E'); d.line(47,16,58,9,'#8A5A2A'); d.poly([[58,7],[64,3],[64,11],[59,10]],'#E8C060'); d.line(59,8,63,6,'#C89A3A'); d.line(59,9,63,9,'#C89A3A'); d.vline(58,7,10,'#C04848');
    // wizard hat dangling from a branch
    d.vline(53,16,18,'#C8C0D8'); d.poly([[50,24],[53,18],[56,24]],'#7A3AC0'); d.hline(49,57,24,'#6A2AA8'); d.hline(51,55,23,'#F2C230'); d.px(53,20,'#FFE8A0'); d.px(52,21,'#9A5AE0');
    d.px(48,27,'#3E7448'); d.px(46,25,'#5A9A5E');
    // ground: lawn + stone path
    d.rect(0,30,64,10,'#2E5A40'); d.hline(0,63,30,'#3E7050'); for(let i=0;i<20;i++) d.px(d.ri(0,63),d.ri(31,39),'#3E7050');
    d.poly([[34,30],[42,30],[48,40],[28,40]],'#7A7494'); for(let y=32;y<40;y+=3) d.hline(30,46,y,'#625C7E');
    // lanterns
    for(const x of [26,50]) { d.vline(x,25,30,'#2A2440'); d.rect(x-1,23,3,2,'#FFD860') }
  },
  // 비밀 연구소 — 버튼 하나 눌렀더니 전부 초록색. 빨간 큰 버튼만 원래 색, 초록 점액이 뚝뚝
  'any:c2-9': d=>{
    const G0='#0E2A1C', G1='#16402A', G2='#1E5A38', G3='#2A7A48', G4='#3EA05A', G5='#6CD070', G6='#A8F088', G7='#E0FFC0';
    d.rect(0,0,64,40,G1);
    // wall tiles
    for(let y=0;y<26;y+=5) for(let x=(y/5%2)*4;x<64;x+=8){ d.hline(x,x+6,y,G2); d.vline(x,y,y+4,G2) }
    // pipes along ceiling
    d.rect(0,2,64,3,G3); d.hline(0,63,2,G4); for(const x of [10,30,50]) d.rect(x,1,3,5,G2);
    d.rect(4,5,3,14,G3); d.vline(4,5,18,G4);
    // floor
    d.rect(0,26,64,14,G2); d.hline(0,63,26,G4); for(let y=29;y<40;y+=4) d.hline(0,63,y,G1); for(let x=3;x<64;x+=9) d.line(x,27,x-4,39,G1);
    // big goo puddle
    d.ell(36,36,10,2,G5); d.ell(34,35,5,1,G6); d.ell(56,38,6,1,G5);
    // drips from ceiling
    for(const [x,l] of [[18,6],[40,9],[58,4]]){ d.vline(x,5,5+l,G5); d.circ(x,6+l,1,G5); d.px(x,6+l-1,G7) }
    // big specimen tank (right)
    d.rect(49,6,13,20,G4); d.rect(50,7,11,18,G5); d.rect(48,4,15,3,G3); d.rect(48,25,15,3,G3); d.hline(48,62,4,G4);
    for(const [x,y] of [[52,20],[55,16],[58,12],[53,11],[57,22],[54,8]]) d.ring(x,y,0.8,G7);
    d.vline(51,8,23,G6);
    // something blob-shaped in the tank
    d.ell(56,17,3,4,G3); d.px(55,16,G7); d.px(57,16,G7);
    // console (center)
    d.poly([[24,18],[46,18],[48,28],[22,28]],G3); d.rect(22,28,26,6,G2); d.hline(22,47,28,G4); d.hline(24,46,18,G5);
    d.rect(23,10,10,7,G0); d.rect(24,11,8,5,G4); d.line(24,15,27,12,G6); d.line(27,12,29,14,G6); d.line(29,14,31,11,G6); // monitor graph
    d.rect(36,9,9,8,G0); d.rect(37,10,7,6,G3); d.stamp(38,11,['.ooo.','o...o','o.o.o','o...o','.ooo.'],{o:G6});
    d.rect(27,17,2,1,G2); d.rect(39,17,2,1,G2);
    for(let x=25;x<44;x+=3) d.px(x,21,(x%2)?G6:G5); for(let x=26;x<44;x+=4) d.px(x,24,G6);
    // THE red button (pressed) — only thing not green
    d.ell(36,23,3,1,'#7A1A1A'); d.ell(36,22,2,1,'#E83838'); d.px(35,22,'#FF9A9A');
    d.stamp(32,19,['y.....y'],{y:G7}); d.px(36,19,G7);
    // flasks on shelf (left top area, above pet zone)
    d.rect(8,14,14,1,G3); d.hline(8,21,15,G0);
    d.stamp(9,8,['.gg.','.gg.','g..g','gGGg','gGGg','.gg.'],{g:G4,G:G6});
    d.stamp(15,9,['.g.','.g.','ggg','gGg','GGG'],{g:G4,G:G5});
    d.stamp(19,10,['g','g','G','G'],{g:G4,G:G6});
    // bubbles rising from flask
    d.px(11,6,G6); d.px(12,4,G7); d.px(10,2,G6);
  },
  // 낙타 행렬 — 노을 사막, 능선 위 낙타 행렬, 앞쪽 낙타 한 마리가 왼쪽(나)에게만 침 퉤
  'any:c2-13': d=>{
    d.grad(0,0,64,24,['#F2A060','#F6B470','#F8C67E','#FAD690','#FCE4A8']);
    d.circ(12,8,4,'#FFF2C0'); d.circ(12,8,3,'#FFFFE0');
    for(const [x,y,w] of [[20,4,6],[48,3,5],[56,6,4]]) d.hline(x,x+w,y,'#FCD8A0');
    // far dunes + caravan silhouettes on the ridge
    d.poly([[0,19],[14,14],[30,17],[46,12],[64,16],[64,24],[0,24]],'#E89A5A');
    const cam=(x,y)=>d.stamp(x,y,['......hh','..hh..h.','.hhhh.h.','hhhhhhh.','hhhhhh..','.h..h...','.h..h...'],{h:'#8A4A3A'});
    cam(30,8); cam(39,6); cam(48,7); d.hline(37,40,10,'#8A4A3A'); d.hline(46,49,10,'#8A4A3A');
    d.rect(0,22,64,18,'#F2B470');
    d.poly([[0,26],[20,20],[40,23],[64,19],[64,40],[0,40]],'#F2B470');
    d.poly([[0,29],[30,26],[64,30],[64,40],[0,40]],'#F8CC88');
    for(let i=0;i<36;i++){ const x=d.ri(0,63), y=d.ri(30,39); d.px(x,y,d.rnd()<.5?'#E8B470':'#FFE0A8') }
    for(let x=0;x<64;x+=7) d.line(x,34+(x%3),x+3,34+(x%3),'#E8B470');
    // spitting camel on its own layer (so it gets an outline)
    const snap=[]; for(let y=0;y<40;y++){ snap.push([]); for(let x=0;x<64;x++){ snap[y].push(d.get(x,y)); d.clear(x,y) } }
    const B='#C8844A', BD='#A0643A', BL='#E0A06A', O='#5A3420';
    for(const [x,c] of [[45,BD],[49,B],[54,BD],[57,B]]){ d.rect(x,25,2,11,c); d.rect(x-1,30,3,2,c); d.rect(x,35,3,1,O) }
    d.ell(51,22,9,5,B); d.ell(51,25,8,2,BD); d.ell(52,16,5,4,B); d.ell(51,14,3,2,BL);
    d.poly([[45,19],[41,12],[37,10],[36,14],[40,16],[43,25]],B); d.line(42,13,45,20,BL);
    d.ell(36,11,4,2.5,B); d.rect(30,10,5,4,B); d.hline(31,35,10,BL); d.rect(30,13,4,1,BD);
    d.stamp(37,7,['ee','.e'],{e:BD});
    d.line(60,20,62,26,BD); d.px(62,27,O);
    // blanket on the side
    d.poly([[46,18],[57,18],[58,25],[45,25]],'#D84858'); d.hline(45,58,25,'#F2C230'); for(let x=46;x<58;x+=3) d.px(x,26,'#F2C230'); d.hline(47,56,20,'#3A8AC8'); d.hline(46,57,23,'#3A8AC8');
    d.outline(O);
    // smug half-closed eye + puckered lips
    d.hline(35,37,10,O); d.px(36,11,'#FFFFFF'); d.px(37,11,O); d.px(29,12,O); d.px(30,12,'#E86A6A');
    for(let y=0;y<40;y++)for(let x=0;x<64;x++) if(!d.get(x,y)) d.px(x,y,snap[y][x]);
    // spit arc landing right on the pet's spot
    const sp='#E0F6FF', sp2='#8AC8EA';
    for(const [x,y] of [[27,11],[25,10],[23,10],[21,11],[19,13],[17,16]]) { d.px(x,y,sp); d.px(x+1,y+1,sp2) }
    d.circ(15,19,1,sp); d.px(16,20,sp2); d.px(14,18,'#FFFFFF');
    d.px(26,8,'#FFFFFF'); d.px(22,7,'#FFFFFF');
  },
  // 월드컵 결승전 — 꽉 찬 관중석, 파도타기 물결, 그 위로 날아오른 응원 머플러, 초록 잔디
  'any:c2-17': d=>{
    d.grad(0,0,64,6,['#1A2048','#222A5A','#2C3870']);
    for(let i=0;i<8;i++) d.px(d.ri(10,53),d.ri(0,4),'#C8D0F0');
    for(const x of [4,59]){ d.vline(x,2,6,'#5A6080'); d.rect(x-3,0,7,2,'#FFFBE0'); d.hline(x-3,x+3,2,'#C8C8B0') }
    d.rect(0,6,64,17,'#3A3E5A');
    const fans=['#E04848','#F2F2F2','#3A6AD0','#F2C230'];
    const SK='#F4C8A0';
    for(let r=0;r<4;r++){ const y0=7+r*4; d.hline(0,63,y0+3,'#2A2E46');
      for(let x=0;x<64;x+=2){
        const dist=Math.abs(x-38); const lift=dist<3?2:(dist<5?1:0);
        const c=fans[(x/2+r*2)%fans.length];
        d.px(x,y0+1-lift,SK); d.px(x,y0+2-lift,c); if(lift) d.px(x,y0+3-lift,c);
        if(lift===2){ d.px(x-1,y0-2,SK); d.px(x+1,y0-2,SK) }
      }
    }
    // scarf flying off the wave crest
    d.stamp(40,1,['rw.....','.rwrw..','....rwr','......w'],{r:'#E04848',w:'#F2F2F2'});
    d.line(38,3,39,2,'#FFFFFF'); d.px(48,2,'#FFFFFF');
    // ad boards
    d.rect(0,23,64,3,'#1E6AD0'); for(let x=2;x<64;x+=12){ d.rect(x,24,6,1,'#FFFFFF') } d.rect(26,23,12,3,'#F2C230'); d.hline(28,35,24,'#E04848');
    for(let y=26;y<40;y++) d.hline(0,63,y,((y-26)>>1)%2?'#4EAA48':'#5EBE54');
    d.vline(40,26,39,'#F0F8F0'); d.ell(40,34,7,3,'#F0F8F0'); d.ell(40,34,6,2,null);
    for(let y=31;y<=37;y++)for(let x=34;x<=46;x++) if(!d.get(x,y)) d.px(x,y,((y-26)>>1)%2?'#4EAA48':'#5EBE54');
    d.vline(40,26,39,'#F0F8F0');
    // goal on right
    d.rect(55,27,9,9,'#E8F0E8'); for(let y=28;y<35;y+=2) d.hline(56,63,y,'#B8C8B8'); for(let x=57;x<64;x+=2) d.vline(x,28,35,'#B8C8B8'); d.vline(55,27,36,'#FFFFFF'); d.hline(55,63,27,'#FFFFFF');
    d.circ(30,35,1.5,'#FFFFFF'); d.px(30,35,'#2A2A3A'); d.px(29,36,'#C8C8D0');
    for(const [x,y,c] of [[24,28,'#F2C230'],[48,30,'#E04848'],[33,27,'#3A6AD0'],[52,37,'#F2C230'],[26,38,'#E04848'],[50,27,'#F2F2F2']]) d.px(x,y,c);
  },
};
