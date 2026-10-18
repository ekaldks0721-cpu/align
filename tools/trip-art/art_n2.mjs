// n2: shared gifts (any pet). Souvenirs 32x32, postcards 64x40.
const OL='#2A2438';
const sparkle=(d,x,y,c='#FFF6B0',w='#FFFFFF')=>d.stamp(x-2,y-2,['..c..','..c..','ccwcc','..c..','..c..'],{c,w});
const twinkle=(d,x,y,c)=>{d.px(x,y,c);d.px(x-1,y,c);d.px(x+1,y,c);d.px(x,y-1,c);d.px(x,y+1,c)};

export default {
  // 아주 긴 영수증: 아코디언처럼 끝없이 접힌 영수증 + 산 건 사탕 하나
  'any:s0-10': d=>{
    const P='#FFFFFF', P2='#ECE8E0', P3='#C9C2B6', T='#8A8494', K='#3A3448', R='#E05A6A';
    const n=7;
    for(let i=0;i<n;i++){const x=6+(i%2?3:0)+(i>4?1:0), y=1+i*4;
      d.rect(x,y,17,3,P); d.hline(x,x+16,y+2,P2);
      // fold
      if(i%2===0){d.rect(x+15,y+3,5,1,P3)} else {d.rect(x-3,y+3,5,1,P3)}
      d.hline(x+2,x+2+d.ri(5,9),y+1,T); d.hline(x+13,x+15,y+1,T);
    }
    d.rect(9,2,10,1,K); // shop name
    for(let x=6;x<23;x+=2) d.clear(x,1); // torn top
    // last stretch trails onto the floor and curls
    d.rect(7,29,22,2,P); d.hline(7,28,30,P2); d.rect(20,29,7,1,K); d.px(22,29,P); d.px(25,29,P); d.hline(10,14,29,T);
    d.stamp(27,26,['.pp.','p..p','p.pp'],{p:P3});
    // the one thing bought: a tiny candy
    d.stamp(0,27,['.y.r.y','yrrrry','.y.r.y'],{r:R,y:'#FFB0C0'});
    d.outline(OL);
    d.stamp(25,8,['..1..','.11..','..1..','..1..','.111.'],{1:'#E05A6A'}); // "1" thing
  },

  // 목장갑 한 짝: 하얀 면장갑, 빨간 코팅 손바닥, 줄무늬 손목
  'any:s0-14': d=>{
    const W='#FAF8F2', W2='#DEDAD0', W3='#B8B2A6', R='#E04848', R2='#B83040', B='#4A78D0', Y='#F2C040';
    // fingers
    const fing=[[8,6,4,12],[13,3,4,14],[18,4,4,13],[23,8,3,10]];
    fing.forEach(([x,y,w,h])=>{d.rect(x,y+1,w,h,W); d.rect(x+1,y,w-2,1,W); d.vline(x+w-1,y+2,y+h,W2)});
    // thumb
    d.poly([[3,16],[6,14],[10,19],[9,22],[6,22]],W); d.line(4,16,8,21,W2);
    // palm
    d.rect(8,16,18,9,W); d.rect(9,24,16,3,W2);
    // red coated tips
    fing.forEach(([x,y,w])=>{d.rect(x,y+1,w,3,R); d.rect(x+1,y,w-2,1,R); d.px(x+w-1,y+3,R2); d.px(x+1,y+1,'#F88888')});
    d.poly([[3,16],[6,14],[7,15],[5,18],[3,17]],R);
    // red rubber palm dots
    for(let y=17;y<23;y+=2)for(let x=10+(y%4?1:0);x<25;x+=3) d.px(x,y,R);
    // knit texture
    for(let y=7;y<16;y+=3) [9,14,19,24].forEach(x=>d.px(x,y,W2));
    // cuff
    d.rect(9,27,16,4,W); for(let x=9;x<25;x+=2) d.vline(x,27,30,W2);
    d.hline(9,24,27,B); d.hline(9,24,28,Y);
    d.outline(OL);
    // little "?" looking for the pair
    d.stamp(26,1,['.qq.','q..q','..q.','.q..','....','.q..'],{q:'#7A90C8'});
  },

  // 장난감 망원경: 알록달록 플라스틱, 렌즈 속에 옆집 지붕
  'any:s0-18': d=>{
    const R='#E84A5A', R2='#B83048', Y='#F8C840', Y2='#D89A28', B='#4A8AE0', B2='#2E5EB0', G='#5AC890', GL='#BFE8FF', GL2='#88C4EC';
    // tube segments along diagonal from bottom-left (eyepiece) to top-right (lens)
    const seg=(t0,t1,r,c,c2)=>{for(let t=t0;t<=t1;t+=0.5){const x=4+t, y=27-t*0.8; d.circ(x,y,r,c)} for(let t=t0;t<=t1;t+=0.5){d.px(4+t+r*0.6,27-t*0.8+r*0.7,c2)}};
    seg(0,4,2,Y,Y2);
    seg(4,10,3,B,B2);
    seg(10,15,4,R,R2);
    // rings
    [[8,23.8],[14,19],[19,15]].forEach(([x,y],i)=>d.line(x-3,y-3,x+3,y+3,i%2?Y:G));
    // lens end
    d.circ(22,10.6,7,Y); d.circ(22,10.6,5.6,Y2);
    d.circ(22,10.6,5,GL);
    // neighbor's roof inside lens
    d.poly([[17,13],[22,7],[27,13]],'#D85840'); d.hline(18,26,13,'#A83A30'); d.rect(19,14,7,2,'#F2E0C0'); d.px(24,8,'#7A5040'); d.px(24,9,'#7A5040');
    for(let y=0;y<32;y++)for(let x=0;x<32;x++){const q=Math.hypot(x-22,y-10.6); if(q>5.2&&q<5.9) d.px(x,y,Y2)}
    d.px(19,7,'#FFFFFF'); d.px(20,6,'#FFFFFF');
    // eyepiece
    d.circ(3,28,2,'#3A3448');
    d.outline(OL);
  },

  // 동네 분식집
  'any:c0-10': d=>{
    // wall tiles
    d.rect(0,0,64,26,'#F6EEDC');
    for(let y=1;y<26;y+=4) d.hline(0,63,y,'#E6DAC2'); for(let y=0;y<26;y++) for(let x=(Math.floor(y/4)%2)*3;x<64;x+=6) d.px(x,y,'#E6DAC2');
    // green wainscot stripe
    d.rect(0,24,64,2,'#5AB890');
    // menu board top
    d.rect(4,2,38,7,'#FFF8E8'); d.frame(4,2,38,7,'#C85040');
    const mc=['#E85A4A','#F2A840','#5AB890','#E85A4A','#8A6ABA'];
    mc.forEach((c,i)=>{d.rect(6+i*7,4,5,3,c); d.hline(6+i*7,10+i*7,7,'#D8CCB4')});
    // window with street
    d.rect(46,2,15,12,'#A8DAF4'); d.rect(46,9,15,5,'#C8E8F8'); d.frame(45,1,17,14,'#8A6040'); d.vline(53,2,13,'#8A6040');
    d.rect(47,10,5,4,'#F0B080'); d.rect(55,8,5,6,'#D8A0C8');
    // floor
    d.rect(0,26,64,14,'#D8C8A8'); for(let y=28;y<40;y+=4) d.hline(0,63,y,'#C8B690'); for(let y=26;y<40;y++) for(let x=(Math.floor((y-26)/4)%2)*4;x<64;x+=8) d.px(x,y,'#C8B690');
    // counter right
    d.rect(30,20,34,14,'#C87848'); d.rect(30,20,34,2,'#E8E4E0'); d.rect(30,22,34,1,'#A0A0A8');
    for(let x=32;x<64;x+=8) d.vline(x,24,33,'#A85E38'); d.rect(30,33,34,1,'#8A4A2A');
    // tteokbokki pan
    d.ell(48,17,11,4,'#4A4A52'); d.ell(48,16,10,3,'#D8302A'); d.ell(47,15,7,2,'#F04838');
    for(let i=0;i<9;i++){const x=40+i*2, y=15+(i%2); d.hline(x,x+1,y,'#FFE0C0')} d.px(44,17,'#FFF4E0'); d.px(52,17,'#FFE8D0');
    d.rect(36,17,3,2,'#3A3A42'); // handle
    // steam
    [[42,6],[48,4],[54,7]].forEach(([x,y])=>{d.px(x,y+3,'#FFFFFF');d.px(x+1,y+2,'#FFFFFF');d.px(x,y+1,'#FFFFFF');d.px(x+1,y,'#FFFFFF')});
    // kimbap plate on counter + one dipped kimbap on a toothpick
    d.ell(36,20,5,1,'#FFFFFF');
    for(let i=0;i<3;i++){const x=32+i*3; d.rect(x,17,3,3,'#1E2A22'); d.px(x+1,18,'#F2E64A'); d.px(x,18,'#FFFFFF'); d.px(x+2,18,'#E86A4A')}
    // dipped piece held over pan
    d.vline(40,9,12,'#E8C890'); d.rect(39,12,3,3,'#1E2A22'); d.px(40,13,'#F2E64A'); d.hline(39,41,14,'#D8302A'); d.px(40,15,'#D8302A');
    sparkle(d,37,10);
    // stools
    [[40,30],[52,30]].forEach(([x,y])=>{d.ell(x,y,3,1,'#E04848'); d.vline(x,y+1,y+7,'#8A8A92')});
  },

  // 동네 회전목마: 어지러운 소용돌이
  'any:c0-14': d=>{
    d.grad(0,0,64,26,['#8ED4F8','#A2DCF8','#B6E4F8','#CCECF8']);
    // clouds tilted, and a spinning swirl sun (world spins too)
    [[8,6],[24,3]].forEach(([x,y])=>{d.ell(x,y,4,1,'#FFFFFF'); d.px(x+4,y-1,'#FFFFFF'); d.px(x-4,y+1,'#FFFFFF')});
    d.circ(18,10,4,'#FFE070');
    for(let a=0;a<12;a+=0.12){const r=a*0.33; d.px(Math.round(18+Math.cos(a)*r),Math.round(10+Math.sin(a)*r),'#F2A830')}
    for(const [x,y] of [[18,4],[24,10],[12,10],[22,6],[14,14],[22,14],[14,6]]) d.px(x,y,'#FFE070');
    // ground grass + path
    d.rect(0,26,64,14,'#7CCB6A'); d.rect(0,30,64,10,'#E6D2A8');
    for(let x=0;x<64;x+=3) d.px(x,27+(x%2),'#5EAE52');
    for(let i=0;i<20;i++) d.px(d.ri(0,63),d.ri(31,39),'#D4BC8C');
    // carousel base
    const cx=44;
    d.ell(cx,33,16,3,'#8A5ABA'); d.ell(cx,32,16,3,'#C08AE0'); d.hline(cx-15,cx+15,32,'#E0B8F8');
    // center pole
    d.rect(cx-2,10,4,22,'#F2C850'); d.vline(cx-1,10,31,'#FFE890');
    // canopy
    d.poly([[cx,1],[cx+17,10],[cx-17,10]],'#F05A6A');
    for(let k=-3;k<=3;k++) if(k%2===0) d.poly([[cx,1],[cx+k*5+2.5,10],[cx+k*5-2.5,10]],'#FFFFFF');
    d.rect(cx-17,10,35,3,'#F2C850');
    for(let x=cx-17;x<=cx+17;x+=4){d.circ(x+1,13,1,'#F05A6A')}
    d.px(cx,0,'#F2C850'); d.rect(cx-1,0,3,1,'#F2C850');
    for(let x=cx-15;x<=cx+15;x+=5) d.px(x,11,'#FFFFFF');
    // poles + horses
    const horse=(x,y,c,c2)=>{
      d.vline(x+3,13,30,'#E0E0E8');
      d.stamp(x-1,y,[
        '.....mm.',
        '....cccc',
        '...ccce.',
        'cccccc..',
        'cccccc..',
        '.c..c...',
        '.c..c...'],{c,m:c2,e:'#2A2438'});
      d.px(x-2,y+3,c2);
    };
    horse(cx-12,20,'#FFFFFF','#F08AA0');
    horse(cx-1,22,'#F8D0A0','#8A5ABA');
    horse(cx+9,20,'#A8D8F8','#F2C850');
    // motion arrows
    d.line(cx-18,24,cx-20,28,'#FFFFFF'); d.line(cx+19,28,cx+17,24,'#FFFFFF');
    // little spinning stars (dizzy)
    twinkle(d,28,6,'#F8E070'); twinkle(d,60,17,'#F8E070'); d.px(24,18,'#F8E070');
  },

  // 마트 시식 코너: 시식대 둘레로 다섯 바퀴 발자국
  'any:c0-18': d=>{
    d.rect(0,0,64,22,'#EEF2F4');
    d.rect(0,0,64,2,'#C8D4DC'); for(let x=4;x<64;x+=14) d.rect(x,0,8,1,'#FFFFFF');
    // shelves
    const prod=['#E85A4A','#F2C040','#4A9AE0','#5AB870','#F08AB0','#8A6ABA','#F29A40'];
    for(let s=0;s<3;s++){const y=4+s*6; d.rect(0,y+4,64,1,'#9AA4AE'); for(let x=0;x<64;x+=3){const c=prod[(x/3+s*2)%prod.length]; d.rect(x,y+(x%2),2,4-(x%2),c); d.px(x,y+1+(x%2),'#FFFFFF')}}
    d.rect(0,21,64,1,'#7A848E');
    // floor
    d.rect(0,22,64,18,'#F2F0EA'); for(let y=22;y<40;y++) for(let x=(y%2)*0;x<64;x+=8) if(((x>>3)+(y>>2))%2===0) d.hline(x,x+7,y,'#E2E0D8');
    // sample table right
    d.rect(36,22,22,3,'#FFFFFF'); d.rect(36,25,22,8,'#E85A4A'); for(let x=37;x<58;x+=4) d.vline(x,25,32,'#C83A3A');
    d.hline(36,57,25,'#FFFFFF');
    // tray with samples + toothpicks
    d.ell(42,21,4,1,'#C8C8D0'); for(let i=0;i<4;i++){d.rect(39+i*2,19,2,2,'#C86A3A'); d.px(39+i*2,18,'#F2D8A0')}
    // dumpling pan
    d.ell(51,21,5,1,'#4A4A52'); for(let i=0;i<4;i++) d.ell(48+i*2,20,1,1,'#FFF4D8');
    d.vline(54,15,18,'#E8E8E8'); d.px(55,14,'#E8E8E8'); d.px(53,13,'#E8E8E8');
    // sample sign
    d.vline(57,10,21,'#7A848E'); d.rect(52,6,11,6,'#FFF4A0'); d.frame(52,6,11,6,'#E85A4A'); d.stamp(54,8,['xx.x.x','x..xxx'],{x:'#E85A4A'});
    // a tower of five used sample cups (five laps) + heart from the staff
    for(let k=0;k<5;k++){const y=21-k*2; d.rect(31,y,4,2,'#FFFFFF'); d.px(31,y,'#D8D8E0'); d.px(34,y+1,'#D8D8E0'); d.px(33,y-1,'#E8C890')}
    d.stamp(58,13,['.h.h.','hhhhh','.hhh.','..h..'],{h:'#F06A8A'});
    // little name-tag star sticker on the floor
    d.stamp(59,30,['.y.','yyy','.y.'],{y:'#F2C040'});
    // shopping cart
    d.stamp(25,27,[
      'k..........',
      '.kkkkkkkkk.',
      '.kbbbbbbbk.',
      '..kbbbbbk..',
      '..kkkkkkk..',
      '...k....k..',
      '..o.....o..'],{k:'#5A6470',b:'#A8C8E8',o:'#2A2438'});
    d.rect(28,27,2,2,'#F2C040'); d.rect(31,26,2,3,'#5AB870');
  },

  // 산골 치즈
  'any:s1-10': d=>{
    const Y='#F8D458', Y2='#E8B838', Y3='#C88E28', T='#FFF0A0', H='#B8822A', H2='#8A5E20';
    // wedge: top face and front face
    d.poly([[3,13],[27,6],[29,10],[5,17]],T);
    d.poly([[3,13],[5,17],[29,10],[29,25],[3,27]],Y);
    d.rect(3,17,26,10,Y); d.poly([[29,10],[29,25],[27,26]],Y2);
    d.hline(3,29,27,Y3); d.vline(3,13,27,Y2);
    // rind on back
    d.line(27,6,29,10,Y3);
    // holes front
    [[8,21,2.4],[16,19,1.5],[22,22,2.4],[13,25,1],[26,16,1.4],[10,15.5,0.9]].forEach(([x,y,r])=>{d.circ(x,y,r,H); d.circ(x+.6,y+.6,Math.max(.4,r-1),H2)});
    // holes top
    [[14,10],[21,9]].forEach(([x,y])=>{d.ell(x,y,2,1,Y2); d.px(x,y,Y3)});
    // bite mark taken out of corner
    d.circ(3,25,2.3,null); d.circ(4,28,1.6,null);
    // little mountain flag pick
    d.vline(19,0,9,'#8A6040'); d.poly([[20,0],[26,2],[20,4]],'#E85A4A'); d.stamp(21,1,['.w.','www'],{w:'#FFFFFF'});
    d.outline(OL);
    // a lone escaped hole on the side (just the hole)
    d.ell(29,29,2,1,H2); d.px(29,29,H);
  },

  // 야시장 등불
  'any:s1-14': d=>{
    const R='#E8383A', R2='#B82030', R3='#FF7060', Gd='#F8C840', Gd2='#C88A20', L='#FFF0A0';
    d.vline(16,0,3,'#5A4A3A'); d.ring(16,1,1,'#5A4A3A');
    d.rect(11,4,10,3,Gd); d.hline(11,20,6,Gd2);
    d.ell(16,15,12,8,R);
    d.ell(16,15,8,7,R3); d.ell(16,15,5,6,L); d.ell(16,15,3,5,'#FFFFFF');
    for(const x of [7,11,21,25]) for(let y=8;y<23;y++) if(d.get(x,y)) d.px(x,y,R2);
    d.hline(5,27,15,R2);
    d.rect(11,23,10,3,Gd); d.hline(11,20,25,Gd2);
    // tassel
    d.rect(15,26,2,1,Gd2); for(let x=14;x<=18;x++) d.vline(x,27,31-(x===14||x===18?1:0),x%2?R:R2);
    d.outline(OL);
    // glow + market smells
    for(const [x,y] of [[3,6],[29,7],[2,22],[30,22]]) d.px(x,y,'#FFE070');
    d.stamp(25,0,['.s.','s..','.s.','..s'],{s:'#F0A0A0'});
    d.stamp(3,1,['..s','.s.','s..','.s.'],{s:'#F0A0A0'});
  },

  // 마술사 모자: 토끼 대신 비둘기 깃털
  'any:s1-18': d=>{
    const K='#2E2A3A', K2='#46405A', K3='#625A7A', Rb='#E04858', F='#D8DCE6', F2='#A8B0C2', Fw='#FFFFFF';
    // hat (upside-down: brim on top, crown at bottom)
    d.poly([[7,15],[24,15],[23,27],[8,27]],K);
    d.ell(15.5,27,7,1,K2);
    d.ell(15.5,14,13,3,K2); d.ell(15.5,13,13,2,K3); d.ell(15.5,14,9,2,'#14121C');
    d.rect(7,17,17,3,Rb); d.hline(7,23,19,'#A83040');
    for(let y=20;y<27;y++) d.px(9,y,K3);
    // pigeon feathers popping out
    const fe=['..w..','.wgw.','.wgw.','wwgwf','wfgww','.wgf.','.fgf.','..g..','..g..'];
    d.stamp(5,2,fe,{w:F,g:F2,f:'#B8C0D0'}); d.stamp(13,0,fe,{w:Fw,g:F2,f:F}); d.stamp(21,3,fe,{w:F,g:F2,f:'#B8C0D0'});
    d.px(7,2,Fw); d.px(15,0,Fw);
    // wand
    d.line(25,29,30,20,'#2A2438'); d.line(26,29,31,20,'#2A2438'); d.px(30,20,Fw); d.px(31,20,Fw);
    d.outline(OL);
    // floating loose feather
    d.stamp(1,6,['..f','.ff','ff.','f..'],{f:F2}); d.px(3,6,Fw);
    sparkle(d,4,22,'#F8D860');
  },

  // 온천 마을: 눈, 김, 원숭이들, 비워 둔 자리
  'any:c1-10': d=>{
    d.grad(0,0,64,16,['#9AAAD0','#AEBCDA','#C2CCE2','#D4DCEA']);
    // mountains
    d.poly([[28,16],[42,4],[56,16]],'#8A9AB8'); d.poly([[38,8],[42,4],[46,8],[44,9],[42,8],[40,9]],'#FFFFFF');
    d.poly([[46,16],[58,7],[70,16]],'#7A8AA8'); d.poly([[55,10],[58,7],[61,10],[58,11]],'#FFFFFF');
    // inn building
    d.rect(4,10,20,8,'#9A6040'); d.poly([[2,10],[14,4],[26,10]],'#4A4A62'); d.hline(2,26,4+6,'#FFFFFF'); d.poly([[6,8],[14,4],[22,8]],'#FFFFFF');
    for(const x of [7,13,19]){d.rect(x,12,3,3,'#FFD878')}
    d.circ(25,13,1,'#E84848');
    // snow ground
    d.rect(0,18,64,22,'#F4F8FF'); d.rect(0,18,64,1,'#E0E8F4');
    for(let x=0;x<64;x+=5) d.px(x+2,22+(x%3),'#DCE4F0');
    // hot spring pool (right/center)
    d.ell(45,29,17,7,'#8A8A9A');
    d.ell(45,29,15,5,'#5AB0C8'); d.ell(45,28,13,3,'#7ACCDC'); d.hline(36,52,27,'#A8E4F0');
    // rocks around
    [[29,27],[31,33],[38,35],[52,35],[60,32],[61,26],[33,23],[57,23]].forEach(([x,y])=>{d.ell(x,y,2,1,'#6A6A7A'); d.px(x-1,y-1,'#FFFFFF'); d.px(x,y-1,'#FFFFFF')});
    // monkeys in water
    const monkey=(x,y)=>{d.circ(x,y,2,'#A89078'); d.circ(x,y-2,1,'#C8B49C'); d.rect(x-1,y-1,3,2,'#F08A8A'); d.px(x-1,y-1,'#2A2438'); d.px(x+1,y-1,'#2A2438'); d.px(x-2,y-2,'#FFFFFF'); d.px(x+1,y-4,'#FFFFFF')};
    monkey(41,27); monkey(53,27);
    // empty seat with folded towel
    d.rect(46,24,4,1,'#FFFFFF'); d.rect(46,25,4,1,'#F2A8B8');
    // steam
    for(const x of [37,45,52,58]) for(let k=0;k<3;k++) d.px(x+(k%2),19-k*2,'#FFFFFF');
    // snowfall
    for(let i=0;i<34;i++){const x=d.ri(0,63), y=d.ri(0,17); d.px(x,y,'#FFFFFF')}
    // wooden sign ♨
    d.vline(30,15,22,'#7A5030'); d.rect(27,13,7,4,'#C88A50'); d.stamp(28,14,['w.w.w','wwwww'],{w:'#FFFFFF'});
  },

  // 노래방: 화면에 100점
  'any:c1-14': d=>{
    d.rect(0,0,64,40,'#2A1E48');
    // wall pattern stars
    for(let y=2;y<24;y+=5) for(let x=(y%2)*3;x<64;x+=7) d.px(x,y,'#4A3A78');
    // light beams
    d.poly([[30,0],[34,0],[18,26],[10,26]],'#3E2C64'); d.poly([[48,0],[51,0],[62,26],[56,26]],'#3E2C64');
    // disco ball
    d.vline(32,0,2,'#A0A0B0'); d.circ(32,5,3,'#C8D0E0'); d.px(31,4,'#FFFFFF'); d.px(33,6,'#8A92A8'); d.px(30,6,'#8A92A8');
    for(const [x,y,c] of [[6,4,'#F870C0'],[58,3,'#70E0F8'],[26,14,'#F8E070'],[45,12,'#F870C0'],[12,15,'#70E0F8']]) twinkle(d,x,y,c);
    // TV screen
    d.rect(34,6,26,15,'#1A1A24'); d.rect(35,7,24,13,'#3A6AE0'); d.grad(35,7,24,13,['#4A3AD0','#5A4AE0','#7A5AE8','#F070C0']);
    // "100"
    const one=['.x','xx','.x','.x','.x'], zero=['xxx','x.x','x.x','x.x','xxx'];
    d.stamp(39,9,one,{x:'#FFF070'}); d.stamp(42,9,zero,{x:'#FFF070'}); d.stamp(46,9,zero,{x:'#FFF070'});
    d.stamp(40,10,one,{x:'#E8A020'}); // shadow? keep subtle
    d.stamp(39,9,one,{x:'#FFF070'});
    // confetti
    for(const [x,y,c] of [[37,8,'#F8E070'],[56,9,'#70F8C0'],[52,16,'#F8E070'],[37,17,'#70E0F8'],[54,12,'#F870C0']]) d.px(x,y,c);
    // stars rating
    for(let i=0;i<5;i++) d.px(40+i*3,17,'#FFF070');
    // glitch crack on corner (broken machine joke)
    d.line(55,7,57,10,'#FFFFFF'); d.line(57,10,56,12,'#FFFFFF');
    d.rect(45,21,4,2,'#1A1A24');
    // floor carpet
    d.rect(0,26,64,14,'#5A2E6A'); for(let y=27;y<40;y+=3) for(let x=(y%2)*2;x<64;x+=6) d.px(x,y,'#7A4A8A');
    d.hline(0,63,26,'#3A1E4A');
    // sofa right
    d.rect(44,24,20,4,'#E04870'); d.rect(42,28,22,6,'#F05A82'); d.rect(42,33,22,1,'#B83058'); d.hline(42,63,28,'#FF8AA8');
    // table with mic + tambourine
    d.rect(25,29,15,2,'#8A6A9A'); d.vline(27,31,36,'#6A4A7A'); d.vline(38,31,36,'#6A4A7A'); d.hline(25,39,29,'#B090C0');
    d.stamp(28,25,['.kk.','kkkk','.kk.','..s.','..s.'],{k:'#4A4A58',s:'#C8C8D8'}); d.px(29,25,'#9A9AB0');
    d.ring(35,27,2,'#F2C040'); d.px(35,27,'#F870C0');
  },

  // 미로 정원: 같은 분수만 세 시간째 (위에서 본 미로 + 앞마당 분수)
  'any:c1-18': d=>{
    const H1='#3A8A48', H2='#2A6A38', H3='#6ABE5E', P='#E2D49A', P2='#CDBE84';
    d.grad(0,0,64,5,['#A8DCF4','#BEE6F4']);
    for(let x=0;x<64;x+=5) d.circ(x+2,5,2,'#4A9858');
    // maze seen from above, receding: grid of walls
    d.rect(0,6,64,15,P2);
    const M=[
      '#################################',
      '#...#.......#.....#.......#.....#',
      '#.#.#.#####.#.###.#.#####.#.###.#',
      '#.#...#...#...#.#...#...#...#...#',
      '#.#####.#.#####.#####.#.#####.#.#',
      '#.......#.......#.....#.......#.#',
      '###.#########.###.#####.#####.#.#',
    ];
    M.forEach((r,j)=>[...r].forEach((ch,i)=>{const x=i*2-1, y=7+j*2; if(ch==='#'){d.rect(x,y,2,2,H1); d.hline(x,x+1,y,H3)}}));
    // foreground ground
    d.rect(0,20,64,20,P); d.hline(0,63,20,H2);
    for(let i=0;i<18;i++) d.px(d.ri(0,63),d.ri(22,39),P2);
    // tall hedge walls framing the right side
    const hedge=(x,y,w,h)=>{d.rect(x,y,w,h,H1); d.hline(x,x+w-1,y,H3); d.hline(x,x+w-1,y+h-1,H2); for(let j=y+2;j<y+h-1;j+=3) for(let i=x+(j%2);i<x+w;i+=4) d.px(i,j,H2)};
    hedge(56,14,8,26); hedge(26,16,6,9); hedge(24,34,12,6);
    // fountain (center right)
    d.ell(44,32,10,3,'#B8B8C8'); d.ell(44,31,9,2,'#6AB8E8'); d.hline(36,52,31,'#A0D8F8'); d.hline(35,53,34,'#9898A8');
    d.rect(43,22,3,9,'#C8C8D8'); d.vline(43,22,30,'#E0E0EA'); d.ell(44,22,4,1,'#B8B8C8'); d.ell(44,21,1,1,'#C8C8D8');
    for(const [x,y] of [[44,16],[44,17],[43,18],[45,18],[42,19],[46,19],[40,21],[48,21],[39,23],[49,23],[39,25],[49,26]]) d.px(x,y,'#A8DCF8');
    // footprint loops worn around the fountain (third hour...)
    for(let k=0;k<3;k++) for(let a=0;a<6.28;a+=0.4){const x=Math.round(44+Math.cos(a+k*.2)*(12+k)), y=Math.round(32+Math.sin(a+k*.2)*(4+k*0.6)); if(d.get(x,y)===P||d.get(x,y)===P2) d.px(x,y,'#B4A26A')}
    // signpost with arrows pointing every way
    d.vline(52,18,29,'#7A5030');
    d.poly([[46,18],[52,18],[52,20],[46,20],[45,19]],'#F2D070'); d.poly([[52,21],[58,21],[59,22],[58,23],[52,23]],'#F2D070');
    d.poly([[46,24],[52,24],[52,26],[46,26],[45,25]],'#F2D070');
    // dropped "help" flag in the hedge
    d.vline(30,11,16,'#FFFFFF'); d.rect(31,11,3,2,'#E85A6A');
  },

  // 전설의 초밥 한 알: 방석 위 밥알 하나
  'any:s2-10': d=>{
    const Rd='#C83048', Rd2='#901E38', Rd3='#E85868', Gd='#F8C840', Gd2='#C88A20', Ri='#FFFFFF', Ri2='#E8E4DC', Ri3='#C8C0B4';
    // velvet cushion
    d.poly([[3,22],[16,16],[29,22],[16,28]],Rd);
    d.poly([[3,22],[16,28],[16,30],[3,24]],Rd2); d.poly([[29,22],[16,28],[16,30],[29,24]],'#A82438');
    d.line(6,22,16,17,Rd3); d.line(16,17,26,22,Rd3);
    // tassels
    for(const [x,y] of [[3,22],[29,22],[16,30]]){d.px(x,y+1,Gd); d.vline(x,y+2,y+4,Gd); d.px(x,y+4,Gd2)}
    d.px(16,16,Gd);
    // the single grain (long, slightly tilted, glossy)
    d.stamp(9,10,[
      '.....aaaaa....',
      '...aaaaaaaaa..',
      '.aaawwaaaaaaab',
      'aaaaaaaaaaabbb',
      '.abbbbbbbbbbb.',
      '...cccccccc...'],{a:Ri,w:'#FFFFFF',b:Ri2,c:Ri3});
    d.outline(OL);
    // glow + sparkles + gold leaf
    d.px(10,14,Ri); d.px(10,13,Gd);
    sparkle(d,6,8,'#F8E070'); sparkle(d,26,6,'#F8E070'); d.px(16,6,Gd); d.px(21,9,'#FFF6B0'); d.px(11,9,'#FFF6B0');
    d.stamp(18,10,['gG','.g'],{g:Gd,G:'#FFF2A0'});
    // light rays
    d.vline(16,1,4,'#FFF0A0'); d.px(9,2,'#FFF0A0'); d.px(23,2,'#FFF0A0');
  },

  // UFO 운전면허증
  'any:s2-14': d=>{
    const C='#9AE8C8', C2='#6ACAA8', C3='#3A9A88', Wt='#F2FFF8', Al='#7AE070', Al2='#4AB050';
    d.rect(1,6,30,20,C); d.rect(2,5,28,1,C); d.rect(2,26,28,1,C2);
    d.rect(1,6,30,4,C3); d.hline(1,30,9,'#2A7A70');
    // UFO logo on header
    d.ell(6,8,3,1,'#E0E8F0'); d.ell(6,7,1,1,'#A8E8FF'); d.px(4,9,'#F8E070'); d.px(8,9,'#F8E070');
    for(let x=11;x<29;x+=2) d.px(x,7,Wt); for(let x=12;x<26;x+=3) d.px(x,8,'#C8F0E8');
    // photo
    d.rect(3,12,11,12,'#E8D8F8'); d.rect(3,21,11,3,'#C8B8E8');
    d.ell(8,16,4,4,Al); d.ell(8,15,4,3,Al);
    d.stamp(5,14,['ee..ee','eWe.eW','ee..ee'],{e:'#14121C',W:'#FFFFFF'}); // big alien eyes
    d.hline(7,9,19,Al2); d.px(6,18,Al2); d.px(10,18,Al2); // smile
    d.vline(6,10,12,Al2); d.vline(10,10,12,Al2); d.px(6,10,'#F870C0'); d.px(10,10,'#F870C0'); // antennae
    d.rect(5,21,7,3,'#8A6ABA'); // shirt
    d.px(5,13,'#FFFFFF'); // photo shine
    // text lines
    for(let r=0;r<4;r++){const y=13+r*3; d.hline(16,16+(r%2?9:12),y,C3)}
    // stamp seal + barcode
    d.ring(25,22,2,'#E85A6A'); d.px(25,22,'#E85A6A');
    for(let x=16;x<22;x++) if(x%2===0||x===19) d.vline(x,22,24,'#2A3A48');
    d.outline(OL);
    // holo sparkle
    d.px(28,12,'#FFFFFF'); d.px(27,13,'#FFFFFF'); d.px(29,13,'#FFFFFF'); d.px(28,14,'#FFFFFF');
    sparkle(d,29,2,'#F8E070');
  },

  // 미니 자유의 횃불
  'any:s2-18': d=>{
    const Cu='#6AC8A8', Cu2='#3E9A84', Cu3='#A0E8CC', Cu4='#2A7066', F1='#FFF4A0', F2='#F8C840', F3='#F0802A', Gd='#F8D458', Gd2='#D09A28';
    // flame
    d.poly([[16,1],[22,8],[23,13],[9,13],[10,8],[13,5],[14,7]],F3);
    d.poly([[16,4],[20,9],[21,13],[11,13],[12,9],[14,8]],F2);
    d.poly([[16,7],[19,11],[18,13],[14,13],[13,11]],F1);
    d.px(16,10,'#FFFFFF'); d.px(16,11,'#FFFFFF');
    d.rect(9,12,15,2,Gd); d.hline(9,23,13,Gd2);
    // cup / balcony
    d.poly([[8,14],[24,14],[21,19],[11,19]],Cu);
    for(let x=10;x<23;x+=2) d.vline(x,15,17,Cu2);
    d.hline(8,24,14,Cu3); d.hline(11,21,19,Cu4);
    d.rect(12,19,8,2,Cu2); d.hline(12,19,19,Cu3);
    // handle tapering
    d.poly([[12,21],[20,21],[18,30],[14,30]],Cu); d.line(13,21,15,30,Cu3); d.line(19,21,17,30,Cu2);
    d.hline(13,19,24,Cu4); d.hline(13,19,25,Cu3); d.hline(14,18,28,Cu4);
    d.rect(14,30,5,1,Cu4);
    d.outline(OL);
    // freedom sparkles + a tiny pencil? keep sparkles
    sparkle(d,4,5,'#FFF0A0'); sparkle(d,28,4,'#FFF0A0'); d.px(27,16,F2); d.px(5,17,F2);
  },

  // 용의 둥지
  'any:c2-10': d=>{
    d.grad(0,0,64,24,['#5A3A80','#9A4A88','#E0607A','#F68A60','#FBB060','#FCD080']);
    d.circ(14,20,5,'#FFE8A0'); d.circ(14,20,4,'#FFF6D0');
    d.ell(8,8,6,1,'#C060A0'); d.ell(30,5,7,1,'#C060A0'); d.ell(50,12,5,1,'#F0907A');
    // distant cliffs
    d.poly([[0,24],[6,18],[12,24]],'#7A3A6A'); d.poly([[18,24],[26,15],[34,24]],'#7A3A6A');
    // ground plateau
    d.rect(0,24,64,16,'#9A5A4A'); d.rect(0,24,64,2,'#B87058');
    for(let i=0;i<22;i++) d.px(d.ri(0,63),d.ri(27,39),'#7E4638');
    // rocky peak right holding the nest
    d.poly([[30,40],[36,22],[44,18],[58,20],[64,26],[64,40]],'#6E3E44');
    d.poly([[36,22],[44,18],[58,20],[56,22],[40,23]],'#8A5258');
    // nest
    d.ell(48,19,12,4,'#8A5A30'); d.ell(48,18,10,3,'#6A4020');
    for(let x=37;x<60;x+=3){d.line(x,16,x+3,22,'#B07840'); d.line(x+2,16,x-1,22,'#5A3418')}
    // egg
    d.ell(48,12,5,7,'#F2E4C8'); d.ell(47,11,4,6,'#FFF4E0');
    for(const [x,y] of [[46,9],[50,12],[47,15],[50,8]]) d.px(x,y,'#E86A6A');
    d.px(46,7,'#FFFFFF');
    // dragon tail curling round the nest + wing
    d.poly([[64,0],[54,2],[57,5],[52,8],[56,10],[53,14],[60,16],[64,18]],'#C82E42');
    d.line(64,0,55,3,'#8A1E30'); d.line(63,4,53,9,'#8A1E30'); d.line(63,9,54,14,'#8A1E30'); d.poly([[60,4],[64,2],[64,8]],'#E8506A');
    // tail curling around the rock
    for(let t=0;t<=20;t++){const x=64-t*1.1, y=32-Math.sin(t/20*3.0)*6; d.circ(x,y,Math.max(0.6,2.2-t/10),'#D8384A'); if(t%3===0) d.px(Math.round(x),Math.round(y-2.4+t/10),'#F8C840')}
    d.poly([[41,26],[44,24],[45,28],[43,30]],'#D8384A'); d.px(43,26,'#F06070');
    // open book in front
    d.poly([[32,32],[38,30],[38,35],[32,37]],'#FFFFFF'); d.poly([[38,30],[44,32],[44,37],[38,35]],'#F2EEE0');
    d.vline(38,30,35,'#B8A890'); for(const y of [32,34]){d.hline(33,36,y+(y===32?0:0),'#B8B8C8'); d.hline(40,43,y+1,'#B8B8C8')}
    d.hline(32,44,37,'#5A70C0');
    // music-like reading hearts
    d.stamp(40,26,['h.h','hhh','.h.'],{h:'#FF8AA8'});
  },

  // 초콜릿 강: 한 입만... 강이 반으로
  'any:c2-14': d=>{
    d.grad(0,0,64,18,['#F8B8D8','#FAC8E0','#FCD8E8','#FDE6F0']);
    d.ell(10,4,5,2,'#FFFFFF'); d.ell(40,3,6,2,'#FFFFFF'); d.ell(54,6,4,1,'#FFFFFF');
    // candy hills
    d.ell(30,16,14,5,'#C8F0D0'); d.ell(56,16,12,6,'#B8E8F8');
    // lollipop trees
    const lolly=(x,y,c)=>{d.vline(x,y,y+8,'#FFFFFF'); d.circ(x,y,3,c); d.ring(x,y,1.5,'#FFFFFF'); d.px(x,y,'#FFFFFF')};
    lolly(36,10,'#F0607A'); lolly(60,9,'#7AC0F0');
    // pink candy ground
    d.rect(0,18,64,22,'#F8D0B0'); for(let y=19;y<40;y+=4) for(let x=(y%8?0:3);x<64;x+=6) d.px(x,y,'#F0B898');
    // river channel (mostly drained): caramel-stained bed
    d.poly([[38,18],[58,18],[64,25],[64,40],[24,40]],'#B88458');
    d.line(38,18,24,40,'#6A4028'); d.line(58,18,64,25,'#6A4028');
    // old waterline stains along both banks
    d.line(39,19,26,40,'#8A5A38'); d.line(40,19,28,40,'#D8A878');
    // remaining chocolate: a narrow stream
    d.poly([[46,18],[52,18],[64,30],[64,40],[42,40]],'#5E3420');
    d.poly([[47,19],[51,19],[62,32],[60,39],[46,39]],'#7A4428');
    for(const [x,y] of [[49,22],[52,27],[48,31],[56,35],[50,36]]) d.hline(x,x+2,y,'#A06840');
    d.px(48,20,'#C08A60'); d.px(54,30,'#C08A60');
    // drips and puddles left on the bed
    d.ell(36,31,2,1,'#7A4428'); d.ell(40,24,1,0,'#7A4428'); d.ell(33,37,1,0,'#7A4428');
    // giant striped straw sipping from the river
    for(let y=4;y<=32;y++){const x=Math.round(48+(32-y)*0.3); const band=Math.floor(y/3)%2; d.hline(x,x+2,y,band?'#F06A8A':'#FFFFFF'); d.px(x-1,y,'#B84068'); d.px(x+3,y,'#B84068')}
    d.line(56,4,61,0,'#B84068'); d.line(57,4,62,0,'#FFFFFF'); d.line(58,4,63,0,'#F06A8A'); d.line(59,4,64,0,'#B84068');
    d.ell(49,33,3,1,'#C08A60'); d.hline(47,51,33,'#A06840');
    // candy cane stuck in the bank + gumdrops
    d.vline(27,24,33,'#FFFFFF'); for(let y=25;y<34;y+=2) d.px(27,y,'#E84848'); d.stamp(27,21,['.ww.','w..w','...w'],{w:'#E84848'}); d.px(28,21,'#FFFFFF');
    d.ell(25,37,2,1,'#7AD070'); d.px(24,36,'#FFFFFF'); d.ell(33,22,1,1,'#F8D050');
  },

  // 달의 뒷면: 아무도 없음, 책상 하나
  'any:c2-18': d=>{
    d.rect(0,0,64,40,'#0A0A1C');
    d.grad(0,0,64,22,['#06061A','#0A0A22','#10102C','#16163A']);
    for(let i=0;i<40;i++){const x=d.ri(0,63), y=d.ri(0,20); d.px(x,y,d.rnd()<.3?'#FFF6C0':'#C8D0F0')}
    twinkle(d,50,4,'#FFFFFF'); twinkle(d,12,7,'#C8D0F0'); twinkle(d,33,13,'#FFF6C0');
    // distant galaxy smudge
    d.ell(26,4,4,1,'#3A2A6A'); d.px(26,4,'#8A7ACA');
    // moon horizon (curved)
    for(let x=0;x<64;x++){const y=Math.round(20+((x-32)/32)**2*3); d.vline(x,y,39,'#A8A8B8'); d.px(x,y,'#D0D0DC')}
    // shading bands
    for(let x=0;x<64;x++) for(let y=33;y<40;y++) if((x+y)%2===0) d.px(x,y,'#9898A8');
    // craters (keep away from pet zone)
    const crater=(x,y,rx,ry)=>{d.ell(x,y,rx,ry,'#8A8A9C'); d.ell(x,y+0.5,rx-1,ry-1,'#76768A'); d.hline(x-rx+1,x+rx-1,y-ry,'#C8C8D4')};
    crater(30,27,5,2); crater(56,34,6,2); crater(40,36,3,1); crater(3,24,2,1);
    // little desk + glowing lamp + open book (great for focusing)
    d.rect(42,26,14,2,'#B07840'); d.hline(42,55,26,'#D09A60'); d.vline(43,28,33,'#7A5030'); d.vline(54,28,33,'#7A5030');
    d.poly([[45,25],[48,24],[48,26],[45,26]],'#FFFFFF'); d.poly([[48,24],[51,25],[51,26],[48,26]],'#E8E4D8');
    d.vline(53,20,25,'#5A5A6A'); d.line(53,20,51,19,'#5A5A6A'); d.poly([[49,18],[52,18],[53,20],[48,20]],'#F2C040');
    // lamp light cone
    for(let y=21;y<26;y++) for(let x=47-(y-21);x<=52;x++) if(!d.get(x,y)||d.get(x,y).startsWith('#0')||d.get(x,y).startsWith('#1')) d.px(x,y,(x+y)%2?'#3A3A30':'#16163A');
    d.px(50,21,'#FFF6C0');
    // chair
    d.rect(57,27,4,1,'#B07840'); d.vline(60,22,33,'#7A5030'); d.vline(57,28,33,'#7A5030');
    // footprints from left to desk
    for(let x=24;x<41;x+=3) d.px(x,31+((x/3)%2),'#7A7A8E');
  },
};
