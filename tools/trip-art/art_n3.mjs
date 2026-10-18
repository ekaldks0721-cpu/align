// n3: shared gifts (any pet). Souvenirs 32x32, postcards 64x40.
const O='#2A2433';

export default {
  // 짝짝이 나무젓가락: V자로 쪼개진 젓가락, 왼쪽은 뚱뚱 오른쪽은 비쩍, 위엔 먹구름(운세 흉)
  'any:s0-11': d=>{
    const L='#F6DCA6', M='#E2B878', D='#B98A4E', G='#9A6C38', R='#D8424A', R2='#A82C36';
    // fat stick (left)
    d.poly([[9,6],[16,6],[12,30],[5,30]],M);
    d.line(9,6,5,29,L); d.line(10,6,6,29,L);
    d.line(15,7,11,29,D); d.line(14,10,11,22,D);
    d.line(12,12,10,24,G); // grain
    // splintered inner edge
    d.px(16,9,M); d.px(16,10,M); d.px(15,13,D); d.px(15,14,M); d.px(14,18,M);
    // thin stick (right), slightly bent
    d.line(17,6,21,18,M); d.line(21,18,23,30,M); d.line(18,6,22,18,D); d.line(22,18,24,30,D);
    d.px(17,7,L); d.px(18,10,L);
    // splinter flake
    d.px(19,13,L); d.px(20,12,L);
    // joined top with paper band
    d.rect(9,1,9,6,M); d.vline(9,1,6,L); d.vline(10,1,6,L); d.vline(17,1,6,D);
    d.rect(9,3,9,3,R); d.hline(9,17,5,R2); d.px(10,3,'#F27A7A'); d.px(11,3,'#F27A7A');
    d.vline(13,1,2,D); // crack start
    // bad-luck rain cloud (grumpy)
    d.stamp(21,1,['...cccc...','.ccCCCcc..','cccccccccc','cceccceccc','.cccmmccc.'],{c:'#8A8EA6',C:'#A8ACC2',e:'#3A3A4A',m:'#3A3A4A'});
    d.outline(O);
    d.px(23,8,'#5AA0E0'); d.px(25,9,'#5AA0E0'); d.px(27,8,'#5AA0E0'); d.px(25,10,'#5AA0E0'); d.px(23,11,'#5AA0E0');
    // small lightning
    d.stamp(29,8,['y.','yy','.y'],{y:'#F8D048'});
  },

  // 뜯기 실패한 삼각김밥: 김이 갈가리 찢어져 붙어 있고, 비닐 조각이 펄럭, 그래도 웃는 얼굴
  'any:s0-15': d=>{
    const W1='#FFFFFF', W2='#ECEEF2', W3='#C9CED8', N='#2E4636', N2='#1C2C22', N3='#47664E', P='#BFE2F4', P2='#E6F4FC', R='#E04848';
    // rice triangle
    d.poly([[16,3],[29,26],[3,26]],W2);
    d.circ(16,6,3,W2); d.circ(6,24,3,W2); d.circ(26,24,3,W2); d.rect(6,24,20,4,W2);
    d.poly([[16,4],[25,20],[8,20]],W1);
    d.line(26,24,22,27,W3); d.hline(8,25,27,W3); d.line(4,25,6,27,W3);
    // rice grain texture
    for(const [x,y] of [[12,13],[19,12],[22,22],[9,21],[15,9],[24,17],[7,24]]) d.px(x,y,W3);
    // torn nori: ragged bottom strip
    const top=[22,21,22,20,21,23,22,21,24,22,21,20,22,23,21,22,24,22,21,22,23];
    for(let i=0;i<top.length;i++){const x=7+i; for(let y=top[i];y<=28;y++) if(d.get(x,y)) d.px(x,y,N)}
    d.vline(14,23,24,W2); d.vline(15,24,24,W2); // tear hole
    d.hline(8,26,28,N2); for(let i=0;i<top.length;i+=3) d.px(7+i,top[i],N3);
    // a nori scrap stuck high on the side
    d.stamp(21,9,['.nn','nnn','nn.','n..'],{n:N}); d.px(22,9,N3);
    d.stamp(8,14,['nn.','.nn'],{n:N});
    // face (still happy)
    d.px(13,15,O); d.px(19,15,O); d.stamp(15,17,['o.o','.o.'],{o:O}); d.px(12,17,'#F6A8B8'); d.px(20,17,'#F6A8B8');
    d.outline(O);
    // plastic wrapper scraps flapping off
    d.stamp(0,8,['..pp.','.pPpp','ppPp.','.pp..','..p..'],{p:P,P:P2});
    d.stamp(27,10,['.pp.','pPpp','.ppp','..p.'],{p:P,P:P2});
    d.line(1,6,4,7,R); d.line(28,8,30,9,R); // red pull-tab strips
    d.stamp(29,2,['.y.','yWy','.y.'],{y:'#F8D048',W:'#FFFFFF'});
  },

  // 다람쥐가 숨긴 도토리: 흙더미에 반쯤 묻힌 도토리, 머리 위에 '?'
  'any:s0-19': d=>{
    const B='#C87A3A', B2='#E89E58', B3='#8E5026', C='#8C6A42', C2='#6C4E2E', C3='#AA8858', S='#5A3A20', E='#7A5432', E2='#5C3C22', E3='#9A7048', G='#6CC04A', G2='#4A9A34';
    // acorn body (tilted)
    d.ell(15,18,7,8,B); d.ell(13,16,4,5,B2); d.ell(17,21,5,4,B); d.px(15,26,B3);
    d.line(20,14,21,22,B3); d.line(19,22,16,25,B3);
    d.px(11,13,'#FFE2B8'); d.px(11,14,'#FFE2B8'); d.px(12,12,'#FFE2B8');
    // cap
    d.ell(15,10,9,4,C); d.ell(15,8,8,3,C3);
    for(let y=6;y<=13;y++)for(let x=6;x<=24;x++) if(d.get(x,y)===C||d.get(x,y)===C3){ if((x+y)%3===0) d.px(x,y,C2) }
    d.hline(7,23,13,C2);
    d.rect(14,2,2,4,S); d.px(16,2,S); d.px(17,1,S);
    // dirt mound burying the bottom
    d.ell(15,28,14,4,E); d.ell(13,27,8,2,E3); d.hline(2,28,31,E2); d.hline(3,27,30,E2);
    d.px(22,28,E2); d.px(8,29,E2); d.px(18,30,E3);
    // grass tufts
    d.stamp(2,23,['g.g','gGg','.G.'],{g:G,G:G2}); d.stamp(25,24,['.g.g','gGgG','.GG.'],{g:G,G:G2});
    // fallen leaf
    d.stamp(21,25,['.oo','ooO','oO.'],{o:'#F0A040',O:'#C8702A'});
    d.outline(O);
    // floating question mark
    d.stamp(25,0,['.qqq.','qq.qq','...qq','..qq.','..q..','.....','..q..'],{q:'#7A5A9A'});
  },

  // 시장 왕만두: 얼굴만 한 찐빵 만두, 반을 크게 베어 먹어 속이 보이고 김이 모락모락
  'any:s1-11': d=>{
    const D1='#FFF8EC', D2='#F0DEBE', D3='#D0B488', IN='#FFFFFF', M='#A0603C', M2='#7C4428', M3='#C4805A', V='#5CA040';
    d.ell(15,19,13,10,D1);
    d.ell(15,24,13,5,D2); d.ell(14,19,11,8,D1);
    d.hline(4,26,28,D3); d.line(3,24,5,27,D3);
    // pleated swirl on top
    d.ell(15,10,4,2,D2);
    for(const [x,y] of [[9,14],[11,12],[19,12],[21,14],[13,11],[17,11]]) d.line(15,9,x,y,D3);
    d.px(15,9,D3); d.px(15,8,D2);
    d.px(8,16,IN); d.px(7,17,IN); d.px(7,18,IN); d.px(9,15,IN);
    // inside: white bread rim then meat filling
    d.ell(22,20,9,9,IN); d.ell(23,20,7,7,M); d.ell(22,18,3,3,M3);
    for(const [x,y] of [[25,23],[20,23],[26,17],[23,25]]) d.px(x,y,M2);
    for(const [x,y] of [[23,17],[26,21],[20,21],[24,23],[21,16]]) d.px(x,y,V);
    // big bite (half gone): clear region right of a scalloped edge
    for(let y=0;y<32;y++)for(let x=0;x<32;x++) if(x>=27||[[27,7],[26,13],[25,19],[26,25],[27,31]].some(([cx,cy])=>(x-cx)**2+(y-cy)**2<=10)) d.clear(x,y);
    d.outline(O);
    // steam
    const S='#D6E4F0';
    d.stamp(7,0,['.s.','s..','.s.','..s','.s.'],{s:S});
    d.stamp(13,0,['..s','.s.','s..','.s.'],{s:S});
    // crumbs where the bite went
    d.px(28,22,D2); d.px(29,26,M); d.px(27,29,D2); d.px(30,19,D3);
  },
  // 마트료시카: 큰 인형부터 점점 작게, 마지막은 콩알만 함
  'any:s1-15': d=>{
    const R='#D83A40', R2='#A02430', R3='#F2706A', F='#FFE2CA', H='#6A4028', Y='#F8D048', Y2='#D8A030', Wt='#FFFFFF', K='#F4A0A8', E='#2A2433', G='#5CB04A';
    const doll=(cx,base,w,h,col,col2,col3,face)=>{
      const hw=w/2, bh=Math.round(h*0.62), hh=h-bh;
      d.ell(cx,base-bh/2,hw,bh/2,col);
      d.ell(cx,base-bh-hh/2+2,hw*0.78,hh/2+1,col);
      d.ell(cx-hw*0.3,base-bh/2,hw*0.35,bh/2-1,col3);
      d.ell(cx+hw*0.2,base-bh/2+1,hw*0.75,bh/2-1,col);
      d.ell(cx+hw*0.55,base-bh/2+1,hw*0.25,bh/2-2,col2);
      return {hw,bh,hh};
    };
    // big doll
    const b={cx:9,base:30};
    doll(9,30,15,27,R,R2,R3);
    d.ell(9,11,5,5,F); d.rect(5,6,9,2,H); d.px(4,8,H); d.px(14,8,H);
    d.px(7,11,E); d.px(11,11,E); d.px(6,13,K); d.px(12,13,K); d.hline(8,10,14,'#C83040');
    d.hline(4,14,6,R2);
    // apron with flower
    d.ell(9,23,5,5,Y); d.circ(9,23,2,Wt); d.px(9,23,R); d.px(9,21,R3); d.px(7,23,R3); d.px(11,23,R3); d.px(9,25,R3);
    d.px(5,25,G); d.px(13,25,G); d.px(6,20,G); d.px(12,20,G);
    d.hline(3,15,17,Y2); // seam (it opens here)
    // medium (blue)
    const B='#3A78D0', B2='#2A54A0', B3='#6AA4F0';
    doll(19,30,8,18,B,B2,B3);
    d.ell(19,17,2,2,F); d.hline(17,21,14,H); d.px(18,17,E); d.px(20,17,E); d.px(19,19,'#C83040');
    d.ell(19,25,2,3,Y); d.px(19,25,R); d.hline(16,22,21,Y2);
    // small (green)
    const Gn='#4AA850', Gn2='#2E7A3A', Gn3='#7ACC72';
    doll(25,30,5,12,Gn,Gn2,Gn3);
    d.rect(24,21,3,2,F); d.px(24,21,E); d.px(26,21,E); d.rect(24,26,3,2,Y);
    // pea-sized (yellow)
    d.stamp(28,27,['.r.','rfr','rrr'],{r:'#F08A30',f:F});
    d.outline(O);
    // sparkle at the pea one
    d.stamp(26,11,['..w..','..w..','wwWww','..w..','..w..'],{w:Y,W:Wt});
  },

  // 공항 짐표: 끈이 끊긴 짐표만 남고, 가방은 날개 달고 다른 데로 날아감
  'any:s1-19': d=>{
    const P='#FFF6DE', P2='#EAD6AA', P3='#C8AC78', Gr='#3AA878', Gr2='#26805A', K='#2A2433', Ri='#B8C0CC', Ri2='#8890A0', Rb='#E05050', Rb2='#A83038';
    // tag body (slightly tilted feel via cut corners)
    d.poly([[6,10],[9,6],[19,6],[22,10],[22,30],[6,30]],P);
    d.rect(20,10,2,20,P2); d.hline(7,21,29,P2);
    // green airline band
    d.rect(6,14,16,4,Gr); d.hline(6,21,17,Gr2);
    d.stamp(9,15,['.w..','wwww','.w..'],{w:'#FFFFFF'}); // tiny plane
    // destination '?'
    d.stamp(15,19,['.qq.','q..q','..q.','.q..','....','.q..'],{q:Rb});
    // barcode
    for(const [x,w] of [[8,1],[10,2],[13,1],[15,1],[17,2],[20,1]]) d.rect(x,26,w,3,K);
    d.hline(8,13,20,P3); d.hline(8,12,22,P3); d.hline(8,13,24,P3);
    // grommet hole
    d.circ(14,9,2,Ri); d.circ(14,9,1,Ri2); d.px(14,9,'#FFFFFF'); d.clear(14,9);
    // snapped rubber string
    d.line(13,8,9,3,Rb); d.line(9,3,7,1,Rb); d.px(6,1,Rb2); d.px(6,0,Rb2);
    d.line(15,8,17,4,Rb); d.px(18,3,Rb2); d.px(18,2,Rb);
    d.outline(O);
    // the suitcase flying off elsewhere
    d.stamp(23,2,[
      '....hh...',
      '...h..h..',
      'wwsssssww',
      '.wsSssSw.',
      '..sssss..',
      '..sSssS..',
      '..sssss..',
    ],{h:'#5A4A3A',s:'#E07A3A',S:'#B85424',w:'#9AD0F0'});
    // motion dots trailing back
    d.px(22,10,'#8EA0B8'); d.px(20,12,'#8EA0B8'); d.px(24,11,'#8EA0B8');
  },

  // 여왕님의 찻주전자: 왕관 뚜껑, 금 테두리, 파란 꽃무늬. 손잡이를 쥔 장갑 손은 새끼손가락이 저절로 쏙
  'any:s2-11': d=>{
    const W1='#FFFFFF', W2='#E6ECF6', W3='#B4C2D8', Bl='#3A62C0', Bl2='#7A9AE0', Au='#F2C230', Au2='#C08A20', Au3='#FFE68A', T='#B86A2A', Rr='#E04868', Gl='#FFFFFF', Gl2='#C8D0DC', Pu='#7A4AB8', Pu2='#5A3090';
    // handle (C ring, left)
    for(let y=12;y<=28;y++)for(let x=1;x<=12;x++){const q=Math.hypot(x-7,y-20); if(q>=3&&q<=5.4) d.px(x,y,q>4.5?W3:W2)}
    // body
    d.ell(19,21,8,7,W2); d.ell(18,19,6,5,W1); d.hline(10,26,28,W3); d.line(26,22,24,27,W3);
    d.hline(10,26,15,Au); d.hline(11,25,14,Au3); d.hline(9,27,27,Au); d.hline(11,25,28,Au2);
    // lid + crown
    d.ell(18,13,5,2,W2); d.hline(13,23,13,W3);
    d.stamp(14,5,['a...a...a','aa.aaa.aa','aAaaRaaAa','aaaaaaaaa','.bbbbbbb.'],{a:Au,A:Au3,R:Rr,b:Au2});
    d.px(14,4,Rr); d.px(18,4,Bl2); d.px(22,4,Rr);
    for(const [x,y] of [[14,20],[21,22],[17,24]]){d.px(x,y,Bl); d.px(x-1,y,Bl2); d.px(x+1,y,Bl2); d.px(x,y-1,Bl2); d.px(x,y+1,Bl2)}
    d.px(23,18,Bl2); d.px(12,23,Bl2);
    // spout (right)
    d.poly([[25,19],[28,16],[30,11],[31,12],[30,19],[26,25]],W2); d.line(30,13,29,18,W3); d.px(30,11,Au); d.px(31,11,Au);
    // tea stream
    d.px(31,13,T);
    // gloved hand gripping the handle top, pinky sticking out
    d.stamp(4,12,[
      '.ggg.',
      'ggggg',
      'GgGgG',
      'ggggg',
      '.ggg.',
    ],{g:Gl,G:Gl2});
    d.px(3,12,Gl); d.px(2,11,Gl); d.px(1,10,Gl); d.px(1,9,Gl); // the raised pinky
    d.rect(5,10,3,2,Gl2); d.rect(5,5,4,5,Pu); d.vline(8,5,9,Pu2); d.hline(5,8,9,Au); // lacy cuff + royal sleeve
    d.outline(O);
    d.stamp(0,4,['.y.','yWy','.y.'],{y:Au,W:W1}); // pinky sparkle
  },
  // 혜성 꼬리털: 금고리로 묶은 반짝이는 털 다발, 빗이 지나가며 반짝이 가루가 후두둑
  'any:s2-15': d=>{
    const Cs=['#5A4AC8','#8A7AF0','#7AD8F4','#BFF4FF','#FFFFFF','#BFF4FF','#7AD8F4','#8A7AF0','#5A4AC8'];
    const Au='#F2C230', Au2='#B88420', Pk='#F48AB8', Pk2='#C85A8C';
    Cs.forEach((c,k)=>{
      const o=k-4;
      for(let t=0;t<=1;t+=0.006){
        const sp=1+t*1.4;
        const x=25-23*t + o*0.35*sp*(1-t*0.2);
        const y=8+19*t + o*0.55*sp + 4*Math.sin(t*Math.PI*2.2)*t;
        if(t>0.85+Math.abs(o)*0.02*(o%2?1:-1)+ (k%3)*0.03) continue;
        d.px(x,y,c); if(t<0.7) d.px(x+1,y,c);
      }
    });
    // clip at the root
    d.rect(24,4,6,6,Au); d.vline(24,4,9,Au2); d.hline(24,29,9,Au2); d.hline(25,28,5,'#FFF2B0');
    d.rect(30,5,2,4,'#BFF4FF');
    // comb
    d.stamp(8,7,['.pppppppppp.','pPPPPPPPPPPp','p.p.p.p.p.p.','p.p.p.p.p.p.'],{p:Pk,P:Pk2});
    d.outline(O);
    // glitter falling
    const gl=['#FFFFFF','#F8E070','#7AD8F4','#F48AB8'];
    for(const [x,y,i] of [[4,30,1],[8,31,2],[12,29,3],[17,31,1],[22,29,2],[25,26,1],[28,30,3],[19,27,0]]) d.px(x,y,gl[i]);
    d.stamp(9,12,['.y.','yWy','.y.'],{y:'#F8E070',W:'#FFFFFF'});
    d.stamp(1,2,['..y..','.yWy.','..y..'],{y:'#F8E070',W:'#FFFFFF'});
    d.stamp(26,22,['.y.','yWy','.y.'],{y:'#F8E070',W:'#FFFFFF'});
  },
  // 우주에서 찾은 양말 짝: 토성 고리를 두른 줄무늬 양말, 별 반짝
  'any:s2-19': d=>{
    const S1='#F27A8A', S2='#C84A62', S3='#FFB0BC', St='#FFFFFF', St2='#DCE4F0', H='#F8D048', Rg='#9AD8F8', Rg2='#5AA8E0', Rg3='#2E7AC0';
    const ring=(front)=>{for(let y=0;y<32;y++)for(let x=0;x<32;x++){const q=((x-16)/15.4)**2+((y-15)/5.4)**2, r=((x-16)/10.5)**2+((y-15)/2.6)**2; if(q<=1&&r>1&&((y>=15)===front)) d.px(x,y,front?(y>=19?Rg2:Rg):Rg3)}};
    ring(false);
    // sock: leg + foot to the left
    d.rect(13,2,10,18,S1);
    d.poly([[13,18],[23,18],[23,23],[20,28],[7,28],[4,26],[4,23],[7,20],[13,20]],S1);
    d.circ(6,25,2.6,S1);
    for(const y of [7,8,12,13]) d.hline(13,22,y,St);
    for(const y of [8,13]) d.hline(13,22,y,St2);
    d.rect(13,1,10,4,St); d.hline(13,22,4,St2); d.vline(15,1,3,St2); d.vline(18,1,3,St2); d.vline(21,1,3,St2);
    d.circ(20,25,2.5,S2); d.ell(5,25,2,2,S2);
    d.vline(14,5,22,S3); d.vline(22,5,23,S2);
    d.stamp(16,21,['h.h','hhh','.h.'],{h:H}); // heart patch
    ring(true);
    d.outline(O);
    for(const [x,y] of [[3,4],[28,3],[29,28],[3,30],[27,10]]) d.stamp(x-1,y-1,['.w.','wWw','.w.'],{w:'#F8E070',W:'#FFFFFF'});
    d.px(8,9,'#FFFFFF'); d.px(30,22,'#FFFFFF'); d.px(13,31,'#FFFFFF');
  },

  // 빨래방: 민트 타일 벽, 세탁기 세 대(가운데는 빙글빙글), 30분짜리 시계, 세제 선반, 바구니
  'any:c0-11': d=>{
    const Wl='#BFE8E0', Wl2='#A8DAD0', Tr='#4AA89A', F1='#F4E8D0', F2='#DCCAA8', Wm='#F6F8FA', Wm2='#CDD4DE', Wm3='#8E98A8', Gl='#6AB8E8', Gl2='#3A88C8', K='#2A2433';
    d.rect(0,0,64,30,Wl);
    for(let y=3;y<30;y+=5) d.hline(0,63,y,Wl2); for(let y=0;y<6;y++) for(let x=(y%2)*4;x<64;x+=8) d.vline(x,3+y*5,7+y*5,Wl2);
    d.rect(0,0,64,2,Tr); d.hline(0,63,2,'#3A8A7E');
    d.rect(0,28,64,2,Tr);
    for(let y=30;y<40;y++)for(let x=0;x<64;x++) d.px(x,y,((x>>2)+((y-30)>>1))%2?F1:F2);
    // clock: 30 minutes, half pie
    d.circ(11,10,5,K); d.circ(11,10,4,'#FFFFFF');
    for(let y=6;y<=14;y++)for(let x=11;x<=15;x++) if((x-11)**2+(y-10)**2<=17) d.px(x,y,'#F8B0B8');
    d.vline(11,6,10,K); d.vline(11,10,14,'#E04858'); d.px(11,10,K);
    // shelf with detergent
    d.hline(25,62,8,'#B07840'); d.hline(25,62,9,'#8A5A30');
    d.stamp(27,3,['.r.','rrr','rWr','rrr','rrr'],{r:'#E85A6A',W:'#FFFFFF'});
    d.stamp(32,4,['.b.','bbb','bWb','bbb'],{b:'#4A7AE0',W:'#FFFFFF'});
    d.stamp(47,2,['..y..','yyyyy','yWWyy','yyyyy','yyyyy','yyyyy'],{y:'#F8D048',W:'#FFFFFF'});
    d.stamp(55,4,['ggg','gWg','ggg','ggg'],{g:'#5CC08A',W:'#FFFFFF'});
    // washers
    const washer=(x,inside)=>{
      d.rect(x,12,12,18,Wm); d.vline(x+11,12,29,Wm2); d.hline(x,x+11,29,Wm2); d.frame(x-1,11,14,20,K);
      d.rect(x,12,12,3,Wm2); d.px(x+1,13,'#5CC08A'); d.px(x+3,13,'#E85A6A'); d.rect(x+7,13,3,1,K);
      d.circ(x+5.5,21.5,4.5,Wm3); d.circ(x+5.5,21.5,3.5,Gl); inside(x+5.5,21.5);
    };
    washer(25,(cx,cy)=>{d.rect(cx-3,cy+1,7,3,Gl2); d.px(cx-1,cy-2,'#E8F6FF')});
    washer(39,(cx,cy)=>{
      const cl=['#E85A6A','#F8D048','#5CC08A','#FFFFFF','#B07AE0','#E85A6A'];
      for(let i=0;i<6;i++){const a=i/6*Math.PI*2+0.4; d.px(cx+Math.cos(a)*2.4,cy+Math.sin(a)*2.4,cl[i]); d.px(cx+Math.cos(a+0.4)*2,cy+Math.sin(a+0.4)*2,cl[i])}
      d.px(cx,cy,Gl2);
    });
    washer(53,(cx,cy)=>{for(const [a,b] of [[-2,1],[1,2],[0,-1],[2,-2],[-1,-2]]) d.px(cx+a,cy+b,'#E8F6FF'); d.rect(cx-3,cy+2,7,2,Gl2)});
    // spin & shake lines around middle washer
    d.stamp(36,17,['w.','.w','..','w.','.w'],{w:'#FFFFFF'}); d.stamp(51,17,['.w','w.','..','.w','w.'],{w:'#FFFFFF'});
    d.stamp(42,32,['w.w.w'],{w:'#8E98A8'});
    // laundry basket
    d.rect(53,32,10,6,'#E89A48'); d.frame(52,31,12,8,K); for(let x=54;x<62;x+=2) d.vline(x,32,37,'#C07028'); d.hline(53,62,34,'#C07028');
    d.stamp(54,29,['.pp..bb.','pppbbbbb'],{p:'#F8A8C0',b:'#7AB8F0'});
    // stray sock
    d.stamp(28,34,['.rr','.rr','rrr','rr.'],{r:'#E85A6A'});
  },

  // 수상한 맨홀: 저녁 골목, 들린 맨홀 뚜껑 밑에서 반짝이는 네 쌍의 눈(파랑·빨강·주황·보라 두건), 피자 조각
  'any:c0-15': d=>{
    d.grad(0,0,64,18,['#3A3468','#4E4280','#6E4E8E','#9A5A90','#D07888','#F0A088']);
    const B1='#2C2846', B2='#3A3458', Wn='#F8D870', Wn2='#6A5E88';
    for(const [x,w,h,c] of [[0,10,13,B2],[9,8,17,B1],[17,12,11,B2],[29,9,15,B1],[38,13,12,B2],[51,13,16,B1]]){
      d.rect(x,22-h,w,h,c);
      for(let y=22-h+2;y<20;y+=3) for(let i=x+1;i<x+w-1;i+=3) d.px(i,y,((i*7+y*3)%5)<2?Wn:Wn2);
    }
    d.rect(33,4,1,3,B1); d.px(33,3,'#E05050');
    // sidewalk + curb + road
    d.rect(0,20,64,6,'#8E8CA0'); for(let x=0;x<64;x+=6) d.vline(x,20,25,'#7A7890'); d.hline(0,63,26,'#5E5C74');
    d.rect(0,27,64,13,'#45455A'); for(let x=26;x<64;x+=8) d.hline(x,x+3,38,'#F2D060');
    for(let i=0;i<20;i++) d.px(d.ri(0,63),d.ri(28,39),'#3A3A4E');
    // street lamp
    d.vline(60,5,25,'#2A2433'); d.hline(56,60,5,'#2A2433'); d.rect(55,6,3,2,'#FFF0B0');
    for(let y=0;y<27;y++)for(let x=48;x<64;x++){const q=Math.hypot(x-56,(y-8)*0.8); if(q<7.5&&d.get(x,y)!=='#2A2433'&&!(y>=6&&y<=7&&x>=55&&x<=57)) d.px(x,y,q<3.2?'#FFF6C8':q<5.4?'#C898B0':'#7E6496')}
    for(let x=51;x<62;x++) if(x!==60) d.px(x,25,'#C8C6D4');
    // the manhole hole
    d.ell(42,33,9,3,'#14121C');
    d.hline(34,50,36,'#5A5868');
    // eyes with mask bands
    for(const [x,c] of [[35,'#3A7AF0'],[39,'#E04040'],[43,'#F09030'],[47,'#A050E0']]){d.hline(x,x+2,33,c); d.px(x,33,'#FFFFFF'); d.px(x+2,33,'#FFFFFF')}
    // lifted, tilted lid
    d.ell(44,29,9,2,'#7A7684'); d.hline(36,52,31,'#5A5868');
    for(let x=37;x<52;x+=3) d.px(x,29,'#5A5868'); d.hline(39,49,28,'#9A96A4');
    d.vline(37,30,32,'#5A5868');
    // green sewer glow + steam
    d.px(33,32,'#7AE07A'); d.px(51,32,'#7AE07A'); d.px(33,34,'#5AC05A'); d.px(51,34,'#5AC05A');
    d.stamp(46,20,['.s.','s..','.s.','..s','.s.'],{s:'#C8C4D8'}); d.stamp(40,22,['s.','.s','s.','.s'],{s:'#C8C4D8'});
    // pizza slice + crumbs
    d.stamp(54,31,['ccccc','ymyyc','.yyc.','.ym.','..y.'],{c:'#C88040',y:'#F8D060',m:'#D84040'});
    d.px(30,35,'#F8D060'); d.px(31,36,'#C88040');
    // munch marks
    d.stamp(28,29,['w.w','.w.'],{w:'#FFFFFF'});
  },

  // 벚꽃 터널: 분홍 꽃 아치 사이로 멀어지는 길, 꽃잎이 흩날리고 오른쪽엔 꽃잎 더미
  'any:c0-19': d=>{
    const P1='#FFD6E2', P2='#F8B4CA', P3='#EE8EAE', P4='#D86A90', Tk='#6A4430', Tk2='#4A2E22', G1='#8ED070', G2='#6CB454', Pa='#F2DEB8', Pa2='#E2C898';
    d.grad(0,0,64,24,['#BFE6FA','#D2EEFC','#E6F6FE']);
    // distant path & grass
    d.rect(0,22,64,18,G1); for(let i=0;i<30;i++) d.px(d.ri(0,63),d.ri(23,39),G2);
    d.poly([[38,20],[42,20],[64,40],[0,40]],Pa); d.line(38,20,6,40,Pa2); d.line(42,20,62,40,Pa2);
    // trunks (receding)
    for(const [x,y0,w] of [[0,8,3],[25,10,2],[32,13,1],[47,13,1],[52,10,2],[59,6,4]]){ d.rect(x,y0,w,30-y0,Tk); d.vline(x+w-1,y0,30,Tk2) }
    d.rect(25,10,2,13,Tk); d.rect(52,10,2,13,Tk);
    // canopy blobs
    const blobs=[[2,2,8],[12,0,8],[24,1,7],[34,-2,6],[46,-1,6],[56,2,8],[63,8,6],[0,12,5],[27,8,4],[54,9,5],[33,9,3],[47,9,3],[20,4,6],[40,-3,5]];
    for(const [x,y,r] of blobs){d.circ(x,y,r,P3)}
    for(const [x,y,r] of blobs){d.circ(x-1,y-1,r-1.5,P2)}
    for(const [x,y,r] of blobs){d.circ(x-2,y-2,r-4,P1)}
    for(let i=0;i<40;i++){const x=d.ri(0,63),y=d.ri(0,16); if(d.get(x,y)===P2) d.px(x,y,P4)}
    // falling petals
    for(let i=0;i<34;i++){const x=d.ri(0,63),y=d.ri(10,39); if(!(x>=6&&x<=21&&y>=20)) d.px(x,y,i%3?P2:'#FFFFFF')}
    // petal pile on the right path edge
    d.ell(53,35,7,3,P2); d.ell(52,34,4,2,P1); d.px(48,36,P3); d.px(57,36,P3); d.px(54,33,'#FFFFFF');
    // a petal "hat" pile on a little stump
    d.rect(35,30,5,3,Tk); d.hline(35,39,32,Tk2); d.ell(37,29,3,1,P2); d.px(37,27,P1); d.px(36,28,P1);
  },

  // 피자의 고향: 화산 아래 골목, 삼색 차양 피자집, 파인애플 금지 표지, 문밖으로 쫓겨난 파인애플 피자
  'any:c1-11': d=>{
    d.grad(0,0,64,22,['#6CC4F0','#88D0F2','#A8DEF6','#C8EAF8']);
    // Vesuvius
    d.poly([[-4,22],[10,7],[17,6],[34,22]],'#8A7E9A'); d.poly([[10,7],[17,6],[19,9],[8,10]],'#6E6280');
    d.ell(14,3,3,2,'#E8E8F0'); d.ell(18,1,2,1,'#E8E8F0');
    // back houses
    d.rect(0,14,14,14,'#F2B860'); d.rect(14,11,12,17,'#E88A60'); d.rect(26,15,8,13,'#F4D488'); d.rect(0,25,34,3,'#D8A060'); d.hline(0,33,25,'#B88048');
    for(const [x,y] of [[3,16],[8,16],[17,14],[22,14],[28,17]]){d.rect(x,y,2,3,'#3A7A50'); d.px(x+2,y,'#2A5A3A')}
    d.line(14,12,0,15,'#5A5A5A'); d.stamp(4,13,['w.r','w.r'],{w:'#FFFFFF',r:'#E04848'}); d.stamp(9,12,['b'],{b:'#4A7AE0'});
    // pizzeria
    d.rect(34,6,30,22,'#C8604A'); for(let y=8;y<28;y+=3) for(let x=34+(y%2)*2;x<64;x+=5) d.hline(x,x+3,y,'#B04A38');
    d.rect(34,5,30,2,'#8A3A2A');
    for(let x=34;x<64;x++){const c=['#3AA860','#FFFFFF','#E04040'][Math.floor((x-34)/3)%3]; d.vline(x,9,12,c)}
    for(let x=34;x<64;x+=2) d.px(x,13,['#3AA860','#FFFFFF','#E04040'][Math.floor((x-34)/3)%3]);
    // door with oven glow
    d.rect(41,15,10,13,'#3A2420'); d.ell(46,23,3,3,'#F08030'); d.ell(46,23,2,2,'#FFD060'); d.rect(41,15,10,1,'#2A1810');
    d.rect(37,17,3,5,'#9ED8F0'); d.rect(52,17,3,5,'#9ED8F0');
    // no-pineapple sign
    d.circ(59,20,4,'#FFFFFF'); d.ring(59,20,4,'#E04040');
    d.stamp(57,17,['.g.g.','..g..','.yyy.','.yYy.','.yyy.'],{g:'#3AA860',y:'#E8B030',Y:'#F8D860'});
    d.line(56,17,62,23,'#E04040');
    // cobblestones
    d.rect(0,28,64,12,'#C8BCA8');
    for(let y=28;y<40;y+=3) for(let x=((y/3)%2)*3;x<64;x+=6){d.hline(x,x+4,y,'#A89880'); d.px(x+5,y+1,'#A89880'); d.px(x+5,y+2,'#A89880')}
    d.hline(34,63,28,'#8A7A68');
    // pizza flying out with pineapple on it
    d.ell(30,34,5,2,'#E8A848'); d.ell(30,34,4,1,'#F8D860');
    for(const [x,y] of [[28,34],[31,33],[33,34]]) d.px(x,y,'#F0C030'); d.px(29,33,'#E04040'); d.px(32,35,'#E04040');
    d.stamp(36,31,['w.w.','.w.w'],{w:'#FFFFFF'}); // motion lines
    // a pineapple rolling away
    d.stamp(55,32,['.g.g','..g.','.yy.','yYyy','yyYy','.yy.'],{g:'#3AA860',y:'#E0A030',Y:'#F8D060'});
  },

  // 모아이 섬: 바다와 초록 언덕, 모아이 셋, 제일 큰 모아이가 눈을 부릅뜨고 노려봄, 항복 흰 깃발
  'any:c1-15': d=>{
    d.grad(0,0,64,15,['#6CC0F0','#84CCF2','#A0D8F4','#BCE4F6']);
    d.ell(10,4,5,1,'#FFFFFF'); d.ell(40,3,4,1,'#FFFFFF'); d.ell(44,2,2,1,'#FFFFFF');
    d.rect(0,15,64,8,'#2A88C8'); d.hline(0,63,15,'#1E6EAE');
    for(let x=0;x<64;x+=7){d.hline(x,x+2,17+(x%3),'#6AB8E8')}
    d.rect(0,22,64,1,'#FFFFFF');
    // grassy island rising to the right
    d.poly([[0,23],[30,23],[40,18],[64,14],[64,40],[0,40]],'#7CC860');
    d.poly([[0,26],[34,25],[64,22],[64,40],[0,40]],'#6AB850');
    for(let i=0;i<30;i++) d.px(d.ri(22,63),d.ri(24,39),'#58A040');
    for(let i=0;i<8;i++) d.px(d.ri(0,21),d.ri(30,39),'#58A040');
    // stone platform
    d.rect(28,32,36,4,'#8A8070'); d.hline(28,63,32,'#A49A88'); for(let x=30;x<64;x+=5) d.vline(x,33,35,'#6E6658');
    const moai=(x,y,w,h,eyes,hat)=>{
      const S='#8E7E6E', S2='#6C5C4E', S3='#AC9C8A';
      d.rect(x,y,w,h,S); d.vline(x,y,y+h-1,S3); d.vline(x+w-1,y+2,y+h-1,S2);
      d.hline(x,x+w-1,y+Math.round(h*0.28),S2); // heavy brow
      const nx=x+Math.floor(w/2); d.vline(nx,y+Math.round(h*0.3),y+Math.round(h*0.62),S3); d.px(nx+1,y+Math.round(h*0.62),S2);
      d.hline(x+2,x+w-3,y+Math.round(h*0.75),S2); // lips
      d.vline(x-1,y+3,y+Math.round(h*0.6),S2); d.vline(x+w,y+3,y+Math.round(h*0.6),S2); // ears
      if(eyes){ for(const ex of [x+1,x+w-4]){d.rect(ex,y+Math.round(h*0.3)+1,3,2,'#FFFFFF'); d.px(ex,y+Math.round(h*0.3)+2,'#1A1A22')} }
      if(hat) d.rect(x+1,y-2,w-2,2,'#B85A3A');
    };
    moai(31,20,6,12,false,false);
    moai(40,16,7,16,false,true);
    moai(51,8,10,24,true,false);
    // glare lines from the big one
    d.stamp(46,9,['w.','.w','w.'],{w:'#FFFFFF'});
    // tiny white flag of defeat
    d.vline(24,27,34,'#7A5A3A'); d.stamp(25,27,['www','wwW','ww.'],{w:'#FFFFFF',W:'#D8D8E0'});
  },

  // 크루즈 갑판: 나무 갑판, 난간 너머 바다, 빨간 굴뚝, 구명 튜브, 과자 봉지를 물고 달아나는 갈매기
  'any:c1-19': d=>{
    d.grad(0,0,64,10,['#4AB0F0','#6CC0F4','#90D2F6']);
    d.rect(0,10,64,10,'#1E70B8'); for(let x=0;x<64;x+=5) d.hline(x,x+1,12+(x%4),'#4A98D8');
    d.hline(0,63,10,'#165A9A');
    // funnel
    d.rect(50,0,11,20,'#E84848'); d.rect(50,4,11,3,'#FFFFFF'); d.rect(50,0,11,2,'#2A2433'); d.vline(60,2,19,'#B83038');
    d.ell(48,0,3,1,'#D8DCE4'); d.ell(44,1,2,1,'#E8ECF2');
    // railing
    d.hline(0,63,13,'#FFFFFF'); d.hline(0,63,14,'#C8D0DC'); for(let x=1;x<64;x+=5) d.vline(x,14,19,'#FFFFFF'); d.hline(0,63,17,'#E0E6EE');
    // life ring on railing
    d.circ(36,16,3,'#F07830'); d.circ(36,16,1,'#1E70B8'); d.px(33,16,'#FFFFFF'); d.px(39,16,'#FFFFFF'); d.px(36,13,'#FFFFFF'); d.px(36,19,'#FFFFFF');
    // deck planks
    d.rect(0,20,64,20,'#D29A60'); d.hline(0,63,20,'#8A5A30');
    for(let y=23;y<40;y+=3) d.hline(0,63,y,'#B47A44');
    for(let y=21;y<40;y+=3) for(let x=((y*5)%13);x<64;x+=19) d.px(x,y+1,'#B47A44');
    // deck chair
    d.poly([[44,27],[50,22],[52,23],[47,28]],'#3A78C8'); d.rect(46,27,12,3,'#3A78C8');
    for(let x=46;x<58;x+=3) d.vline(x,27,29,'#FFFFFF'); d.line(48,24,49,23,'#FFFFFF');
    d.vline(46,30,33,'#6A4428'); d.vline(57,30,33,'#6A4428');
    // spilled chips on deck
    for(const [x,y] of [[24,34],[26,36],[27,33],[29,35],[31,37]]) d.stamp(x,y,['yy','y.'],{y:'#F8C840'});
    // seagull with chip bag
    d.stamp(22,1,[
      'ww.....ww',
      '.www.www.',
      '..wwGww..',
      '...wwwoo.',
      '....g..rr',
      '.......rR',
    ],{w:'#FFFFFF',G:'#A0A8B8',g:'#7A8090',o:'#F8A030',r:'#E84848',R:'#F8C840'});
    d.px(30,7,'#F8C840'); d.px(28,8,'#F8C840');
  },

  // 인어 마을: 빛줄기 내리는 바닷속, 소라 집, 산호, 조개 무대의 진주, 바위 뒤 인어 꼬리, 음표 거품
  'any:c2-11': d=>{
    d.grad(0,0,64,40,['#4AB8E0','#3AA4D8','#2E8CCA','#2478BC','#1E64AA','#1A569A']);
    for(const x0 of [8,26,44]) for(let y=0;y<26;y++){const c=y<9?'#7AD2F0':y<18?'#5ABEE6':'#48A8DA'; for(let x=x0+Math.floor(y*0.5);x<x0+3+Math.floor(y*0.5);x++) d.px(x,y,c)}
    // sand
    d.ell(32,40,40,9,'#E8D4A0'); d.rect(0,33,64,7,'#E8D4A0');
    for(let y=34;y<40;y+=2) for(let x=(y%4)*2;x<64;x+=9) d.hline(x,x+3,y,'#D4BC84');
    // kelp at far left
    for(const kx of [1,4]) for(let y=10;y<34;y++) d.px(kx+Math.round(Math.sin(y*0.5+kx)),y,y%3?'#4AB070':'#2E8A50');
    // rock with mermaid tail
    
    d.stamp(30,17,[
      'tt...tt',
      'tTt.tTt',
      '.tTtTt.',
      '..ttt..',
      '..tTt..',
      '...tt..',
      '...tTt.',
      '....tt.',
      '....tTt',
      '....ttt',
    ],{t:'#2EB896',T:'#7AE8C8'});
    // conch house
    const Sh='#F4A8B8', Sh2='#D8788E', Sh3='#FFD2DA';
    d.poly([[38,32],[52,32],[49,20],[45,8],[41,20]],Sh);
    for(const y of [12,16,20,24,28]) d.line(41+(y-8)*0.1,y+1,50-(32-y)*0.05,y-1,Sh2);
    d.vline(42,18,31,Sh3); d.px(45,8,Sh3);
    d.ell(45,28,2,3,'#7A3A48'); d.circ(47,17,1.5,'#FFE070'); d.px(47,17,'#FFFFFF');
    d.ell(33,31,5,4,'#5A6A88'); d.ell(32,30,3,2,'#7A8AA8');
    // clam stage with pearl
    d.ell(58,32,6,2,'#C8A0E0'); d.poly([[52,31],[64,31],[62,24],[58,22],[54,24]],'#B888D8');
    for(const x of [55,58,61]) d.line(58,23,x,31,'#9A68C0');
    d.circ(58,30,1.5,'#FFFFFF'); d.px(57,29,'#F0F0FF');
    // coral
    d.stamp(24,24,['r.r..','r.r.r','rrr.r','.rrrr','..r..','..r..','..r..','..r..','..r..'],{r:'#F06A6A'});
    d.stamp(54,15,['o.o','ooo','.o.','.o.'],{o:'#F8A048'});
    // music note bubbles
    const N='#FFFFFF';
    d.stamp(29,6,['.nn','.n.','.n.','nn.','nn.'],{n:N}); d.stamp(38,2,['.nnn','.n.n','.n.n','nn.n','nn.n'],{n:N});
    d.stamp(53,6,['.n','.n','nn','nn'],{n:N});
    for(const [x,y] of [[46,4],[50,2],[34,13],[57,11],[26,18]]) d.ring(x,y,1,'#BFEFFF');
    // little fish
    d.stamp(14,8,['y.yy.','yyyyy','y.yy.'],{y:'#F8D048'}); d.px(17,8,'#2A2433');
  },

  // 사바나 초원: 노을, 큰 해, 우산 같은 아카시아, 목이 화면 밖까지 쭉 올라간 기린, '?' 이정표
  'any:c2-15': d=>{
    d.grad(0,0,64,24,['#F2A050','#F4B058','#F6C068','#F8D078','#FADC8A','#FCE8A0']);
    d.circ(30,20,7,'#FFF0B0'); d.circ(30,20,5,'#FFF8D8');
    for(const [x,y] of [[12,6],[15,5],[18,7]]) d.stamp(x,y,['b.b','.b.'],{b:'#8A4A30'});
    // far hills
    d.poly([[0,24],[14,20],[28,23],[44,19],[64,23],[64,26],[0,26]],'#D8944A');
    // golden grass
    d.grad(0,25,64,15,['#E8B850','#E0AC48','#D49C40','#C88E38']);
    for(let i=0;i<60;i++){const x=d.ri(0,63),y=d.ri(26,39); if(!(x>=6&&x<=21&&y>=20)) {d.px(x,y,'#B07A2E'); d.px(x,y-1,'#F2C860')}}
    // acacia
    const T='#4A3426';
    d.vline(36,10,27,T); d.vline(37,14,27,T); d.line(36,14,31,9,T); d.line(37,14,42,9,T); d.line(36,18,33,12,T);
    d.ell(36,8,10,2,'#3E6A2E'); d.ell(36,7,8,1,'#5A8A3A'); d.ell(28,10,3,1,'#3E6A2E'); d.ell(44,10,3,1,'#3E6A2E');
    // giraffe: neck runs off the top
    const Y='#F2C058', Y2='#D8A040', Sp='#B8662E', Hf='#5A3A28';
    d.ell(53,22,7,4,Y); d.rect(47,22,13,3,Y);
    for(const lx of [47,50,56,59]){d.rect(lx,24,2,12,Y); d.rect(lx,35,2,1,Hf); d.vline(lx+1,25,34,Y2)}
    d.poly([[56,20],[60,20],[63,-1],[58,-1]],Y); d.line(56,19,60,-1,Y2);
    // mane
    d.line(61,20,64,1,Sp);
    // spots
    for(const [x,y] of [[49,20],[53,19],[57,21],[51,23],[55,23],[59,15],[60,9],[61,3],[58,12],[59,5],[47,22]]) d.stamp(x,y,['ss','s.'],{s:Sp});
    d.stamp(45,19,['.t','t.','t.'],{t:Hf}); // tail
    // signpost with '?'
    d.vline(25,26,36,'#7A5A3A'); d.rect(22,26,7,3,'#C8965A'); d.px(28,27,'#C8965A'); d.px(29,27,'#C8965A');
    d.stamp(24,26,['qq.','.q.','...'],{q:'#5A3A28'}); d.px(25,28,'#5A3A28');
    d.rect(23,30,5,2,'#B88048'); d.px(22,30,'#B88048');
  },

  // 거꾸로 마을: 하늘에 거꾸로 매달린 사탕 땅과 집, 아래로 자라는 롤리팝 나무, 지붕으로 선 집, 위로 올라가는 빗방울
  'any:c2-19': d=>{
    d.grad(0,0,64,40,['#F8C8E8','#F0D0F0','#E8D8FA','#DCE0FF','#D4E8FF']);
    // upside-down ground on top (mint candy with drips downward)
    d.rect(0,0,64,5,'#8EE0C0'); d.hline(0,63,5,'#6CC8A8');
    for(let x=0;x<64;x+=5) d.vline(x+2,5,6+(x%3),'#8EE0C0');
    for(let x=0;x<64;x+=4) d.px(x,1,'#FFFFFF'), d.px(x+2,3,'#F8A8C8');
    // hanging houses (roof points down)
    const house=(x,y,w,h,wall,roof,inv)=>{
      if(inv){ d.rect(x,y,w,h,wall); d.poly([[x-2,y+h],[x+w+2,y+h],[x+w/2,y+h+5]],roof); d.rect(x+2,y+h-4,2,3,'#7AB8F0'); d.rect(x+w-4,y,2,4,'#8A5A70') }
    };
    house(9,6,10,7,'#FFF2C8','#F06A8A',true);
    house(44,6,9,4,'#C8F0FF','#A070E0',true);
    // hanging lollipop trees
    for(const [x,c] of [[27,'#F8D048'],[35,'#F07AA8'],[57,'#7ACCE8']]){ d.vline(x,6,12,'#FFFFFF'); d.circ(x,15,3,c); d.ring(x,15,1.5,'#FFFFFF') }
    // bottom candy ground (pink striped)
    d.rect(0,33,64,7,'#F8A8C8'); d.hline(0,63,33,'#E07AA4');
    for(let x=0;x<64;x+=6) d.line(x,34,x+3,39,'#FFFFFF');
    // house standing on its roof tip
    d.poly([[46,32],[39,25],[59,25],[52,32]],'#5CC0A0'); d.hline(39,59,25,'#3E9A80');
    d.rect(41,17,16,8,'#FFE6A0'); d.rect(43,18,3,3,'#7AB8F0'); d.rect(52,18,3,3,'#7AB8F0'); d.rect(47,17,4,5,'#C07848'); d.px(50,20,'#F8D048'); d.hline(41,56,17,'#E8C878');
    // upside-down tree on ground: candy on ground, stick up
    d.circ(32,30,3,'#F8D048'); d.ring(32,30,1.5,'#F07AA8'); d.vline(32,22,27,'#FFFFFF');
    // rain going up
    for(const [x,y] of [[28,22],[36,19],[24,15],[60,20],[38,10],[22,25]]) d.stamp(x,y,['bbb','bbb','.b.','...','.l.','.l.'],{b:'#6AA8E8',l:'#B8D8F8'});
    // smiley sun upside down near the ground
    d.circ(27,36,3,'#FFE070'); d.px(26,37,'#C88A30'); d.px(28,37,'#C88A30'); d.hline(26,28,35,'#C88A30'); d.px(25,34,'#C88A30'); d.px(29,34,'#C88A30');
  },
};
