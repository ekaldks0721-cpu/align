// Halloween limited souvenirs & postcards (hw)
const OL='#2A1A30';
const P={o1:'#FFB347',o2:'#F28A1E',o3:'#C85F14',o4:'#8A3A10',g1:'#8ED65A',g2:'#4FA04A',g3:'#2F6A32',
  y1:'#FFF6B0',y2:'#FFE04A',y3:'#FFB020',pk:'#FF7AB0',pk2:'#E0508A',mt:'#6EE0C0',mt2:'#3AB898',
  w1:'#FFFFFF',w2:'#F2F0FF',w3:'#C8C2EC',w4:'#9A92CC',v1:'#B48AF0',v2:'#8A5AD8',v3:'#5E3AA8',v4:'#3E2478',v5:'#26164E'};

// round pumpkin with ribs
function pumpkin(d,cx,cy,rx,ry,c1=P.o1,c2=P.o2,c3=P.o3,stem=true){
  d.ell(cx,cy,rx,ry,c2);
  d.ell(cx-Math.round(rx*.45),cy,Math.max(1,Math.round(rx*.5)),ry,c2);
  d.ell(cx+Math.round(rx*.45),cy,Math.max(1,Math.round(rx*.5)),ry,c2);
  // shading right/bottom
  for(let y=cy-ry;y<=cy+ry;y++)for(let x=cx-rx;x<=cx+rx;x++){
    if(d.get(x,y)!==c2) continue;
    const nx=(x-cx)/(rx+.5), ny=(y-cy)/(ry+.5);
    if(nx*.7+ny*.7>.55) d.px(x,y,c3);
  }
  // ribs
  if(rx>=3){
    const r1=Math.round(rx*.45);
    for(const s of [-1,1]){const x=cx+s*r1; for(let y=cy-ry+2;y<=cy+ry-2;y++) if(d.get(x,y)) d.px(x,y,c3)}
  }
  // highlight
  if(rx>=3){d.vline(cx-Math.round(rx*.7),cy-Math.round(ry*.4),cy,c1); d.px(cx-Math.round(rx*.7)+1,cy-Math.round(ry*.5),c1)}
  if(stem){d.rect(cx-1,cy-ry-1,2,2,P.g3); d.px(cx,cy-ry-2,P.g2)}
}
function ghost(d,x,y,big=false,face=true){ // top-left, 9x10
  const rows=big?[
    '...wwwww...',
    '..wwwwwww..',
    '.wwwwwwwww.',
    '.wwwwwwwww.',
    'wwwwwwwwwww',
    'wwwwwwwwwws',
    'wwwwwwwwwws',
    'wwwwwwwwwss',
    'wwwwwwwwsss',
    'ww.www.www.',
    'w...w...w..',
  ]:[
    '..www..',
    '.wwwww.',
    'wwwwwww',
    'wwwwwws',
    'wwwwwws',
    'wwwwwss',
    'w.ww.ws',
  ];
  d.stamp(x,y,rows,{w:P.w2,s:P.w3});
  if(face){
    if(big){d.px(x+3,y+4,OL);d.px(x+3,y+5,OL);d.px(x+7,y+4,OL);d.px(x+7,y+5,OL);d.px(x+2,y+6,P.pk);d.px(x+8,y+6,P.pk);d.hline(x+4,x+6,y+7,OL);d.px(x+5,y+6,OL)}
    else{d.px(x+2,y+3,OL);d.px(x+4,y+3,OL);d.px(x+3,y+4,P.pk)}
  }
}
function bat(d,x,y,c='#2E1A40',eye='#FFE04A'){ // 7x4 small bat, x,y = center top
  d.stamp(x-3,y,['c.....c','cc.c.cc','ccccccc','.c...c.'].map(r=>r),{c});
  d.px(x-1,y+1,c);d.px(x+1,y+1,c); d.px(x,y+2,c);
  d.px(x-1,y+2,eye); d.px(x+1,y+2,eye);
}
function bat2(d,x,y,c='#2A1848',e='#FFFFFF'){ // 11x6 bat, x,y = top-left
  d.stamp(x,y,['c.........c','cc..c.c..cc','ccc.ccc.ccc','ccccccccccc','.c.c.c.c.c.','.....c.....'],{c});
  d.px(x+4,y+2,e); d.px(x+6,y+2,e);
}
function stars(d,n,x0,x1,y0,y1,cols){for(let i=0;i<n;i++){const x=d.ri(x0,x1),y=d.ri(y0,y1); d.px(x,y,cols[i%cols.length])}}
function twinkle(d,x,y,c,c2){d.px(x,y,c2||c);d.px(x-1,y,c);d.px(x+1,y,c);d.px(x,y-1,c);d.px(x,y+1,c)}

export default {
  // ===== 호박 사탕 바구니
  'hw:s0': d=>{
    // handle
    d.ring(16,14,10,'#3A2A40'); for(let y=14;y<32;y++)for(let x=0;x<32;x++) if(d.get(x,y)==='#3A2A40') d.clear(x,y);
    d.ring(16,14,9,'#5A4A60');
    // candies poking out
    d.vline(22,3,12,P.w1); d.vline(23,4,12,P.w3);           // lollipop stick
    d.circ(22,4,3,P.pk); d.ring(22,4,2,P.w1); d.px(22,4,P.pk2); d.px(21,3,P.w1);
    d.stamp(7,8,['p.....p','pp...pp','ppmmmpp','pmmwmmp','ppmmmpp','pp...pp','p.....p'],{p:P.mt2,m:P.mt,w:P.w1}); // wrapped candy
    d.stamp(13,7,['.yy.','yyyy','oooo','oooo','.ww.','.ww.'].reverse(),{y:P.y2,o:P.o2,w:P.w1}); // candy corn
    d.circ(17,11,2,P.v1); d.px(16,10,P.w1);                  // gumball
    d.stamp(24,10,['.rr.','rrrr','rwrr','rrrr'],{r:'#E84860',w:P.w1});
    // bucket pumpkin
    pumpkin(d,16,21,13,9,P.o1,P.o2,P.o3,false);
    d.ell(16,13,10,2,P.o4); d.hline(8,24,12,P.o3); // rim opening
    // put candies back over rim
    d.stamp(9,11,['mm.','.yy'],{m:P.mt,y:P.y2}); d.stamp(19,11,['pp.p','.vvp'],{p:P.pk,v:P.v1});
    // cute face
    const F='#4A1E10';
    d.stamp(9,17,['.FF.','FFFF','FwFF','FFFF'],{F,w:P.y1});
    d.stamp(19,17,['.FF.','FFFF','FwFF','FFFF'],{F,w:P.y1});
    d.stamp(11,23,['F.........F','FFF.FFF.FFF','.FFFFFFFFF.','..FFFFFFF..','...FF.FF...'],{F});
    d.px(7,22,P.pk); d.px(8,22,P.pk); d.px(24,22,P.pk); d.px(25,22,P.pk);
    d.outline(OL);
    twinkle(d,3,4,P.y2,P.w1); twinkle(d,28,15,P.y2,P.w1);
  },
  // ===== 잭오랜턴 촛불
  'hw:s1': d=>{
    // glow halo
    d.circ(16,18,15,'#FFE9A8'); d.circ(16,18,14,null);
    for(let y=0;y<32;y++)for(let x=0;x<32;x++){const q=Math.hypot(x-16,y-18); if(q>13.5&&q<15&&(x+y)%2===0) d.px(x,y,'#FFD870')}
    for(let y=0;y<32;y++)for(let x=0;x<32;x++) if(d.get(x,y)==='#FFE9A8') d.clear(x,y);
    pumpkin(d,16,19,13,10,P.o1,P.o2,P.o3,false);
    // lid cut line and stem with curly vine
    d.line(8,12,11,11,P.o4); d.hline(11,21,11,P.o4); d.line(21,11,24,12,P.o4);
    d.rect(15,6,3,4,P.g3); d.px(16,6,P.g2); d.px(15,7,P.g2);
    d.stamp(18,5,['.gg.','g..g','...g','.gg.'],{g:P.g1}); d.stamp(10,6,['.ll','lll'],{l:P.g2});
    // glowing carved face
    const L=P.y2,L2=P.y1,L3=P.y3;
    d.stamp(8,14,['..L..','.LLL.','LLWLL','LLLLL'],{L,W:L2});
    d.stamp(19,14,['..L..','.LLL.','LLWLL','LLLLL'],{L,W:L2});
    d.stamp(14,19,['.L.','LLL'],{L:L3});
    // smile mouth with candle inside
    d.stamp(8,22,['L...............L','LL.............LL','LLLLLLLLLLLLLLLLL','.LLLLLLLLLLLLLLL.','..LLLLLLLLLLLLL..','....LLLLLLLLL....'],{L:L3});
    d.rect(10,24,13,2,L);
    d.rect(15,23,3,4,P.w2); d.vline(17,23,26,P.w3); d.px(16,22,'#3A2A20');
    d.stamp(15,19,['.y.','yyy','yWy'],{y:P.y3,W:P.w1}); // flame peeking
    d.px(16,22,'#3A2A20');
    d.px(13,25,OL);d.px(19,25,OL); // tooth notches
    d.px(6,20,P.pk); d.px(7,20,P.pk); d.px(25,20,P.pk); d.px(26,20,P.pk);
    d.outline(OL);
    twinkle(d,4,9,P.y2,P.w1); twinkle(d,28,8,P.y2,P.w1); d.px(27,28,P.y2); d.px(3,26,P.y2);
  },
  // ===== 마녀의 빗자루
  'hw:s2': d=>{
    // shadow on ground (floating)
    
    // handle (diagonal)
    const H1='#B07A48',H2='#8A5A2A',H3='#D9A070';
    for(let i=0;i<=17;i++){const x=27-i, y=3+Math.round(i*0.82); d.px(x,y,H1); d.px(x,y+1,H2); d.px(x+1,y,H3)}
    d.circ(27,3,1,H2); d.px(28,2,H1);
    // bristles (bottom-left), fanning
    const B1='#F6D46A',B2='#E0A83C',B3='#B87A28';
    d.poly([[11,16],[14,19],[10,25],[2,27],[1,23],[5,18]],B2);
    d.poly([[10,17],[13,19],[9,23],[3,24],[4,20]],B1);
    for(const [a,b,c,e] of [[11,18,2,26],[12,19,5,26],[10,17,1,23],[12,18,8,25]]) d.line(a,b,c,e,B3);
    d.line(6,19,3,22,'#FFF0A0');
    // purple ribbon tie
    d.poly([[10,15],[13,17],[12,19],[9,17]],P.v2); d.line(10,15,12,18,P.v1);
    d.stamp(12,18,['vv.','.vv','..v'],{v:P.v3});
    // tiny star charm on handle
    d.px(20,8,P.y3); d.stamp(19,9,['.y.','yYy','.y.'],{y:P.y2,Y:P.w1});
    d.outline(OL);
    for(let x=6;x<=24;x++) for(let y=29;y<=30;y++) if((x+y)%2===0 && Math.abs(x-15)<(y===29?9:7)) d.px(x,y,'#8A7AAA');
    // magic sparkles / float lines
    twinkle(d,5,10,P.v1,P.w1); twinkle(d,25,15,P.mt,P.w1); d.px(16,24,P.v1); d.px(22,22,P.y2); d.px(4,14,P.mt);
    d.hline(18,21,26,P.w3); d.hline(23,25,25,P.w3);
  },
  // ===== 박쥐 머리핀
  'hw:s3': d=>{
    // hair clip bar
    d.rect(5,24,22,3,'#C8CCD8'); d.hline(5,26,24,'#F0F2F8'); d.hline(5,26,26,'#8A90A4'); d.rect(25,23,3,5,'#A0A6B8'); d.px(4,25,'#A0A6B8');
    // wings
    const B1='#5A3A80',B2='#3E2460',B3='#7A56A8',M='#9A70C8';
    const wing=[[13,13],[7,6],[3,7],[1,12],[2,18],[5,17],[7,20],[10,18],[13,20]];
    d.poly(wing,B1); d.poly(wing.map(([x,y])=>[31-x,y]),B1);
    // membrane bones
    d.line(12,13,4,8,B3); d.line(12,14,5,16,B2); d.line(12,15,9,19,B2);
    d.line(19,13,27,8,B3); d.line(19,14,26,16,B2); d.line(19,15,22,19,B2);
    d.line(6,7,8,11,M); d.line(25,7,23,11,M);
    // body/head
    d.ell(16,15,5,6,B1); d.ell(16,16,4,5,B3);
    d.stamp(11,7,['B........B','BB......BB','BBB....BBB'],{B:B1}); // ears
    d.px(12,8,P.pk2); d.px(19,8,P.pk2);
    d.ell(16,13,5,4,B1); d.ell(16,12,4,3,B3);
    // face
    d.stamp(13,11,['WW..WW','WO..WO','OO..OO'],{W:P.w1,O:'#1A0E26'});
    d.px(12,15,P.pk); d.px(13,15,P.pk); d.px(19,15,P.pk); d.px(20,15,P.pk);
    d.stamp(15,15,['O..O','.OO.'],{O:'#1A0E26'}); d.px(15,16,P.w1); d.px(18,16,P.w1);
    // tiny orange bow
    d.stamp(14,20,['oo.oo','ooOoo','o...o'],{o:P.o2,O:P.o3});
    d.outline(OL);
    twinkle(d,27,3,P.y2,P.w1); d.px(4,3,P.v1);
  },
  // ===== 마녀의 수정 구슬
  'hw:s4': d=>{
    // stand
    const G1='#FFD86A',G2='#D8A030',G3='#9A6A20';
    d.poly([[7,30],[25,30],[22,24],[10,24]],G2); d.hline(8,24,29,G3); d.hline(10,22,24,G1); d.hline(9,23,25,G1);
    d.rect(14,27,4,1,P.v2); d.px(16,27,P.pk);
    d.stamp(6,21,['C...','CC..','.CC.'],{C:G2}); d.stamp(22,21,['...C','..CC','.CC.'],{C:G2});
    // ball
    const C1='#E4D0FF',C2='#B48AF0',C3='#8A5AD8',C4='#5E3AA8';
    d.circ(16,13,11,C3);
    d.circ(15,12,9,C2); d.circ(14,11,6,C1);
    for(let y=0;y<32;y++)for(let x=0;x<32;x++){const q=Math.hypot(x-16,y-13); if(q>9.3&&q<=11.6&&x+y>29&&d.get(x,y)) d.px(x,y,C4)}
    // swirl mist
    d.line(8,17,12,19,P.mt); d.line(12,19,19,19,P.mt); d.line(20,18,23,15,P.mt);
    // vision: a little to-do note with all checks
    d.rect(11,8,10,9,P.w1); d.hline(11,20,8,'#FFE8F2'); d.vline(20,9,16,P.w3); d.hline(12,20,16,P.w3);
    for(const y of [10,12,14]){ d.stamp(12,y-1,['..g','g.g','.g.'].map(r=>r),{g:P.g2}); d.hline(16,19,y,P.w4)}
    // highlights
    d.stamp(8,5,['.ww','w..','w..'],{w:P.w1}); d.px(23,9,P.w1);
    d.outline(OL);
    twinkle(d,3,4,P.y2,P.w1); twinkle(d,28,5,P.v1,P.w1); d.px(27,15,P.y2); d.px(4,12,P.mt);
  },
  // ===== 유령 파티 초대장
  'hw:s5': d=>{
    // envelope
    const E1='#A07AE0',E2='#7A52C0',E3='#C6A8F4';
    d.rect(3,14,26,15,E1);
    d.poly([[3,28],[16,19],[29,28]],E2); d.line(3,14,16,22,E2); d.line(29,14,16,22,E2);
    d.poly([[3,14],[16,22],[29,14]],E3);
    // card sticking up behind ghost: orange invitation
    d.rect(6,6,20,10,P.o1); d.frame(6,6,20,10,P.o3); d.rect(7,7,18,8,'#FFE2B0');
    d.circ(21,10,2,P.y2); d.px(20,9,P.y1); // full moon on card
    d.stamp(9,8,['b.b','bbb','.b.'],{b:P.v4}); // tiny bat
    d.hline(9,15,12,P.o3); d.hline(9,17,13,'#E8B070');
    // redraw front flap over card
    d.poly([[3,14],[16,22],[29,14],[29,16],[3,16]].slice(0,3),E3);
    d.rect(3,16,26,1,E1); d.poly([[3,16],[16,24],[29,16]],E3); d.rect(3,16,26,13,E1); d.poly([[3,16],[16,24],[29,16]],E3); d.poly([[3,28],[16,21],[29,28]],E2);
    // wax seal pumpkin
    pumpkin(d,16,23,3,2,P.o1,P.o2,P.o3,true);
    // ghost peeking out of the top
    ghost(d,10,1,true);
    d.outline(OL);
    // boo waves
    d.stamp(23,1,['.w.w','w.w.'],{w:P.w3}); d.stamp(25,4,['.w.w.w','w.w.w.'],{w:P.w3});
    twinkle(d,3,6,P.y2,P.w1); d.px(28,10,P.y2);
  },

  // ===== 밤 호박밭 (teal/navy night, giant round pumpkin)
  'hw:c0': d=>{
    d.grad(0,0,64,22,['#0E1A3A','#122248','#18305A','#1E3E68','#285070','#33627A']);
    stars(d,26,0,63,0,14,['#FFF6B0','#C8D8FF','#FFFFFF']);
    twinkle(d,40,3,'#9AB0E0','#FFFFFF'); twinkle(d,8,5,'#9AB0E0','#FFFFFF');
    // crescent moon top-left-ish
    d.circ(27,6,4,'#FFF2B0'); d.circ(29,5,3,'#122248'); d.px(25,6,'#FFFFFF');
    // far hills & fence
    d.poly([[0,22],[14,17],[30,20],[46,16],[64,19],[64,23],[0,23]],'#1C3A3A');
    for(let x=0;x<64;x+=5){d.vline(x,18,22,'#4A3A30'); d.px(x,17,'#6A5440')} d.hline(0,63,19,'#4A3A30');
    // field
    d.rect(0,22,64,18,'#2E4A2A'); d.grad(0,22,64,4,['#24402A','#2A462A']);
    for(let y=27;y<40;y+=4) for(let x=0;x<64;x+=3) d.px(x+(y%3),y,'#3A5A30');
    // vines
    d.line(24,30,40,34,P.g3); d.line(40,34,62,32,P.g3); d.line(26,24,44,25,P.g3);
    for(const [x,y] of [[30,31],[36,33],[48,33],[56,32],[33,24],[40,25]]) d.stamp(x,y-1,['gg','g.'],{g:'#4A8A40'});
    // small pumpkins scattered (background rows)
    for(const [x,y,r] of [[25,24,2],[37,23,2],[3,21,1]]) pumpkin(d,x,y,r+1,r,P.o1,'#D87418','#A85010',true);
    // fireflies
    for(const [x,y] of [[26,15],[48,12],[34,20],[58,24]]) {d.px(x,y,'#E8FF80'); d.px(x+1,y,'#8AB040')}
    // GIANT pumpkin
    d.ell(49,38,13,2,'#1E3020');
    pumpkin(d,49,28,12,10,P.o1,P.o2,P.o3,false);
    d.rect(48,16,3,3,P.g3); d.px(49,15,P.g2); d.px(50,15,P.g2); d.stamp(51,14,['.gg','g..'],{g:P.g1});
    d.vline(41,22,34,'#FFD08A');
    // red ribbon "1st" rosette
    d.circ(58,23,2,'#E84860'); d.px(58,23,P.y2); d.stamp(57,26,['r.r','r.r'],{r:'#C02E48'});
    // medium pumpkins in front
    pumpkin(d,33,35,4,3); pumpkin(d,62,37,4,3);
    // scarecrow-ish sign stake with witch hat
    d.vline(29,19,32,'#7A5A3A'); d.hline(26,32,23,'#7A5A3A');
    d.poly([[26,19],[32,19],[30,15],[29,12]],'#3E2478'); d.hline(25,33,19,'#5E3AA8'); d.hline(27,31,18,P.o2);
    d.stamp(27,20,['.oo.','o..o','.oo.'],{o:'#E8C890'});
  },

  // ===== 트릭 오어 트릿 골목 (magenta dusk street, houses, lights)
  'hw:c1': d=>{
    d.grad(0,0,64,16,['#3A1450','#4E1A62','#682478','#88308A','#A84090']);
    stars(d,14,0,63,0,6,['#FFD8F0','#FFFFFF']);
    // houses row
    const houses=[[22,6,12,'#5A3A5A','#3E2440'],[34,4,10,'#3E4A6E','#2A3250'],[44,7,10,'#5A3A5A','#3E2440'],[54,3,10,'#3E4A6E','#2A3250']];
    for(const [x,y,w,c,r] of houses){
      d.rect(x,y+6,w,24-y,c);
      d.poly([[x-1,y+7],[x+w/2,y],[x+w,y+7]],r);
      // windows lit
      d.rect(x+2,y+9,3,3,P.y2); d.px(x+3,y+9,P.y1); d.hline(x+2,x+4,y+12,r);
      d.rect(x+w-5,y+9,3,3,P.o1); d.vline(x+w-4,y+9,y+11,r);
    }
    // left side houses (far, behind pet)
    d.rect(0,8,22,15,'#4A2A50'); d.poly([[-1,9],[8,2],[18,9]],'#3E2440'); d.rect(3,11,3,3,P.y2); d.rect(12,11,3,3,P.y2); d.rect(18,5,3,5,'#3E2440');
    // doors
    d.rect(26,18,4,6,'#2A1620'); d.px(29,21,P.y2);
    d.rect(47,18,4,6,'#2A1620'); d.px(48,21,P.y2);
    // string lights
    for(let x=0;x<64;x++){const y=4+Math.round(2.2*Math.sin((x%21)/21*Math.PI)); d.px(x,y,'#2A1430'); if(x%4===1) {d.px(x,y+1,[P.o1,P.v1,P.g1][(x>>2)%3])}}
    // sidewalk / road
    d.rect(0,23,64,3,'#8A7A9A'); d.hline(0,63,23,'#A898B4');
    d.rect(0,26,64,14,'#4A3E5E');
    for(let y=27;y<40;y+=3) for(let x=(y%2)*2;x<64;x+=5) d.hline(x,x+2,y,'#5A4E70');
    // street lamp
    d.vline(41,10,26,'#2A2030'); d.rect(40,8,3,3,P.y1); d.px(39,9,'#2A2030'); d.px(43,9,'#2A2030'); d.hline(40,42,7,'#2A2030');
    for(let y=11;y<26;y++) for(let x=37;x<46;x++) if((x+y)%2===0 && Math.abs(x-41)<(y-8)/3) if(d.get(x,y)!=='#2A2030') d.px(x,y,'#FFE9A8');
    // porch pumpkins with faces
    for(const [x,y] of [[24,22],[32,22],[52,22]]){pumpkin(d,x,y,2,2,P.o1,P.o2,P.o3,true); d.px(x-1,y-1,P.y2); d.px(x+1,y-1,P.y2); d.hline(x-1,x+1,y+1,P.y2)}
    // overflowing candy bag on ground
    d.poly([[48,38],[60,38],[59,30],[49,30]],'#E06A2A'); d.hline(49,59,30,'#B04A18'); d.line(49,30,47,28,'#B04A18');
    d.stamp(51,32,['.oo.o','o.o.o','.ooo.'].map(r=>r),{o:'#2A1430'});
    d.stamp(48,26,['..pp.yy..','.mmppyyvv','mmm.c.vvv','..cccc...'],{p:P.pk,y:P.y2,m:P.mt,v:P.v1,c:'#E84860'});
    // spilled candies
    d.stamp(38,34,['m.m','.M.','m.m'].map(r=>r),{m:P.mt2,M:P.mt}); d.stamp(42,37,['p.p','.P.'],{p:P.pk2,P:P.pk});
    d.stamp(30,36,['y','o','w'],{y:P.y2,o:P.o2,w:P.w1});
    // bats in sky
    bat(d,30,1,'#2A1430','#FF9A40'); bat(d,47,3,'#2A1430','#FF9A40');
  },

  // ===== 보름달 언덕 (huge moon, hill silhouette)
  'hw:c2': d=>{
    d.grad(0,0,64,30,['#1A1038','#22144A','#2C1A5A','#3A226A','#4A2C78','#5E3A88']);
    stars(d,22,0,63,0,20,['#FFF6D0','#FFFFFF','#D8C8FF']);
    // HUGE moon with halo
    d.circ(42,15,17,'#4E3A8A'); d.circ(42,15,16,'#6A52A0');
    d.circ(42,15,14,'#FFE7A0'); d.circ(40,13,12,'#FFF2C0');
    d.circ(36,9,2,'#F4DC98'); d.circ(48,20,3,'#F4DC98'); d.circ(46,9,1,'#F4DC98'); d.circ(38,21,1,'#F4DC98');
    d.px(34,13,'#FFFFFF'); d.px(35,12,'#FFFFFF');
    // far hills
    d.poly([[0,28],[18,24],[32,27],[50,22],[64,25],[64,32],[0,32]],'#2A1848');
    // main hill (right) rising with tree and wolf
    d.poly([[24,40],[30,32],[42,28],[56,27],[64,28],[64,40]],'#1A0E30');
    for(let x=30;x<64;x++){let y=0; while(y<40&&d.get(x,y)!=='#1A0E30') y++; if(y<40&&x%2) d.px(x,y,'#3A2A5E')}
    for(const [x,y] of [[40,35],[58,33]]){pumpkin(d,x,y,3,2,P.o1,P.o2,P.o3,true); d.px(x-1,y-1,P.y1); d.px(x+1,y-1,P.y1); d.hline(x-1,x+1,y+1,P.y2)}
    // wolf silhouette howling on hilltop
    d.stamp(47,16,[
      'k...........',
      'kk..........',
      '.kk..k......',
      '..kkkkk.....',
      '...kkkkk....',
      '....kkkk....',
      '....kkkkk...',
      '...kkkkkkk..',
      '...kkkkkkk..',
      '...kkkkkkkk.',
      '..kkkkkkkkkk',
      '..k.kkkkkkk.',
    ],{k:'#1A0E30'}); d.px(50,19,'#FFE04A');
    // curly bare tree
    d.vline(32,18,31,'#1A0E30'); d.vline(33,22,31,'#1A0E30');
    d.line(32,22,27,17,'#1A0E30'); d.line(27,17,26,14,'#1A0E30'); d.px(27,13,'#1A0E30'); d.px(28,13,'#1A0E30');
    d.line(33,20,37,15,'#1A0E30'); d.line(37,15,39,15,'#1A0E30'); d.px(39,14,'#1A0E30');
    d.line(32,19,31,13,'#1A0E30'); d.px(30,12,'#1A0E30');
    // a little hanging lantern on tree
    d.vline(38,16,17,'#1A0E30'); d.rect(37,18,3,3,P.o2); d.px(38,19,P.y1);
    // foreground grassy hill for pet (left)
    d.poly([[0,26],[12,25],[26,30],[34,40],[0,40]],'#3A2A5E');
    d.grad(0,30,30,10,['#3A2A5E','#33264F','#2C2046']);
    d.poly([[0,26],[12,25],[26,30],[34,40],[0,40]].map(([x,y])=>[x,y+0]),'#3A2A5E');
    for(let x=0;x<30;x+=3){const y=26+Math.max(0,Math.round((x-12)*0.35)); d.px(x,y-1,'#5A4688'); d.px(x+1,y,'#5A4688')}
    for(let i=0;i<14;i++) d.px(d.ri(1,26),d.ri(30,39),'#4A3874');
    // bats crossing the moon
    bat2(d,42,4); bat2(d,12,4,'#140A28','#FFE04A'); bat2(d,52,1,'#140A28','#FFE04A');
    // dandelion-like glowing flowers
    for(const [x,y] of [[26,35],[29,37],[60,34],[56,37]]) {d.px(x,y,'#FFE04A'); d.px(x,y+1,'#3A6A40')}
  },

  // ===== 거미줄 숲 (misty green forest, giant dewy web)
  'hw:c3': d=>{
    d.grad(0,0,64,26,['#1E3A34','#24463C','#2C5444','#36624C','#447256','#56845E']);
    // far trees silhouettes
    for(const [x,w,c] of [[2,3,'#2A4A3E'],[12,2,'#2A4A3E'],[25,3,'#2E5244'],[58,2,'#2A4A3E']]) d.rect(x,0,w,26,c);
    // canopy blobs
    for(const [x,y,r] of [[4,1,6],[16,0,5],[28,2,6],[46,0,7],[60,2,6]]) {d.circ(x,y,r,'#183028'); d.circ(x+1,y+1,r-2,'#203A30')}
    // mist band
    for(let x=0;x<64;x++){d.px(x,22+((x>>3)%2),'#7AA088'); if(x%2) d.px(x,21,'#6A9078')}
    // ground
    d.rect(0,25,64,15,'#3A5A30'); d.grad(0,25,64,15,['#4A6E38','#42663A','#3A5A30','#344F2C']);
    for(let i=0;i<30;i++){const x=d.ri(0,63),y=d.ri(27,39); d.px(x,y,'#5A8A44')}
    // big trunks framing web
    const T1='#5A3E2E',T2='#3E2A20',T3='#7A5A42';
    d.rect(31,0,6,28,T1); d.vline(31,0,27,T3); d.vline(36,0,27,T2); d.stamp(29,25,['tt......tt','.tt....tt.'],{t:T1});
    d.rect(57,0,7,28,T1); d.vline(57,0,27,T3); d.stamp(55,25,['tt.......','.t.......'],{t:T1});
    d.px(33,10,T2); d.px(34,15,T2); d.px(60,8,T2);
    // web between trunks: center (47,12)
    const W='#D8F0F0', cx=47, cy=12;
    const spokes=[[37,1],[37,12],[37,22],[47,0],[47,25],[57,2],[57,12],[57,22],[42,24],[52,0]];
    for(const [x,y] of spokes) d.line(cx,cy,x,y,W);
    for(const r of [3,6,9]){ for(let a=0;a<360;a+=6){const x=cx+Math.round(r*1.05*Math.cos(a*Math.PI/180)), y=cy+Math.round(r*Math.sin(a*Math.PI/180)); if(x>36&&x<57&&y>=0) d.px(x,y,'#A8D0D0')} }
    for(const [x,y] of spokes) d.line(cx,cy,x,y,W);
    // dew drops sparkle
    for(const [x,y] of [[44,9],[50,6],[53,15],[41,15],[47,21],[47,3]]) {d.px(x,y,'#FFFFFF'); d.px(x+1,y,'#9AE8FF')}
    twinkle(d,50,9,'#9AE8FF','#FFFFFF'); twinkle(d,42,18,'#9AE8FF','#FFFFFF');
    // cute spider dangling
    d.vline(47,12,17,W);
    d.stamp(44,17,[
      'l.l.l.l',
      '.l.bb.l',
      '..bbbb.',
      'lbebbebl',
      '.bbpbbb.',
      'l.bbbb.l',
      '.l....l.',
    ].map(r=>r),{b:'#4A2A6A',l:'#2A1A3A',e:'#FFFFFF',p:P.pk});
    // glowing mushrooms
    for(const [x,y,c] of [[28,33,'#FF8AC0'],[40,36,'#B48AF0'],[52,32,'#FF8AC0'],[60,37,'#FFB347']]){
      d.rect(x,y,2,3,'#F2E8D8'); d.ell(x+0.5,y-1,2,1,c); d.px(x,y-2,'#FFFFFF');
    }
    // small strand web in left corner too (above pet zone)
    d.line(0,0,6,6,W); d.line(0,6,6,6,W); d.line(6,0,6,6,W); d.line(0,3,3,6,'#A8D0D0'); d.line(3,0,6,3,'#A8D0D0');
    // fireflies
    for(const [x,y] of [[22,12],[26,6],[14,16]]) d.px(x,y,'#E8FF80');
  },

  // ===== 유령의 성 (green-teal sky, castle, ghosts hiding)
  'hw:c4': d=>{
    d.grad(0,0,64,24,['#0E2A2E','#123638','#184440','#20524A','#2A6052','#367058']);
    stars(d,18,0,63,0,12,['#D8FFE8','#FFFFFF']);
    d.circ(10,6,4,'#E0FFD0'); d.circ(10,6,3,'#F4FFE8');
    // castle (center-right)
    const S1='#6A6488',S2='#4E4868',S3='#8A84A8',R='#3A2A5A';
    d.rect(30,12,30,18,S2); d.rect(31,12,28,17,S1);
    for(let x=30;x<60;x+=3) d.rect(x,10,2,2,S1);
    // towers
    for(const [x,w,h] of [[26,7,24],[42,8,30],[57,7,22]]){
      const top=34-h; d.rect(x,top,w,h,S1); d.vline(x,top,33,S3); d.vline(x+w-1,top,33,S2);
      d.poly([[x-1,top],[x+w/2-.5,top-8],[x+w,top]],R); d.px(x+Math.floor(w/2),top-9,'#E84860');
      d.rect(x+Math.floor(w/2)-1,top+4,2,3,'#7AFF9A'); d.px(x+Math.floor(w/2)-1,top+4,'#D8FFE0');
    }
    // stone texture
    for(let i=0;i<20;i++){const x=d.ri(27,62),y=d.ri(10,32); if(d.get(x,y)===S1) d.hline(x,x+1,y,S2)}
    // gate
    d.rect(44,26,4,8,'#2A1E3A'); d.circ(45.5,26,2,'#2A1E3A'); d.px(45,29,'#7AFF9A');
    // windows
    for(const [x,y] of [[34,17],[38,17],[52,17],[34,23],[53,23]]) {d.rect(x,y,2,3,'#FFE04A'); d.px(x,y,'#FFF6B0')}
    // ground
    d.rect(0,24,64,16,'#2A4A3A'); d.rect(0,33,64,7,'#2A4A3A'); d.rect(0,30,26,10,'#2A4A3A');
    d.poly([[0,26],[20,27],[28,34],[0,34]],'#2A4A3A');
    d.grad(0,28,30,12,['#3A6048','#34583F','#2E5038','#2A4A34']);
    for(let x=0;x<64;x+=4) d.px(x+1,34+(x%3),'#4A7A54');
    // bushes & tree for hiding
    d.ell(36,34,5,3,'#1E5038'); d.ell(37,33,3,2,'#2E6A48');
    d.ell(61,35,4,3,'#1E5038');
    // ghosts hiding: behind bush, behind tower, in window, peeking from gate
    ghost(d,33,27,false); d.ell(36,35,5,3,'#1E5038'); d.ell(37,34,3,1,'#2E6A48');
    // peeking from behind left tower (half visible)
    d.stamp(23,15,['.ww','www','wwW','www','.ww'],{w:P.w2,W:OL}); d.px(24,17,OL);
    // ghost in top window of center tower
    d.stamp(45,8,['ww','oo'],{w:P.w2,o:OL});
    // ghost floating in sky (it's "it")
    ghost(d,54,0,true);
    // a gravestone-ish "found you" marker? little flag of pet's win
    d.vline(30,28,36,'#8A6A4A'); d.poly([[31,28],[35,29],[31,31]],P.y2);
    // floating green wisps
    for(const [x,y] of [[20,10],[24,4],[62,28]]) {d.px(x,y,'#9AFFB8'); d.px(x,y+1,'#4AB880')}
  },

  // ===== 마녀의 오두막 (indoor, warm cabin, bubbling cauldron)
  'hw:c5': d=>{
    // wooden walls
    d.rect(0,0,64,30,'#5A3A2A');
    for(let y=0;y<30;y+=5){d.hline(0,63,y,'#4A2E20'); for(let x=(y*7)%11;x<64;x+=13) d.vline(x,y+1,y+4,'#4A2E20')}
    for(let y=2;y<30;y+=5) for(let x=3;x<64;x+=9) d.px(x,y,'#6A4A34');
    // window with night outside
    d.rect(2,3,14,11,'#1E1440'); d.circ(12,5,2,'#FFF2B0'); d.circ(13,4,1,'#1E1440'); d.px(4,5,'#FFFFFF'); d.px(6,11,'#FFFFFF'); d.px(14,12,'#C8C2EC'); d.px(3,7,'#C8C2EC');
    d.frame(1,2,16,13,'#8A5A3A'); d.vline(8,3,13,'#8A5A3A'); d.hline(2,15,8,'#8A5A3A'); d.hline(0,17,15,'#A8744A');
    bat(d,5,9,'#2A1430','#FFB020');
    // shelves with potions
    d.hline(22,40,9,'#A8744A'); d.hline(22,40,10,'#7A4E30');
    for(const [x,c,h] of [[23,'#7AFF9A',4],[27,'#FF7AB0',5],[31,'#B48AF0',3],[35,'#6EC8FF',5],[38,'#FFB347',3]]){
      d.rect(x,9-h,2,h,c); d.px(x,9-h-1,'#C8A070'); d.px(x,9-h+1,'#FFFFFF');
    }
    d.hline(22,40,19,'#A8744A'); d.hline(22,40,20,'#7A4E30');
    d.rect(23,15,4,4,'#E8D8B0'); d.hline(23,26,15,'#C02E48'); // book stack
    d.rect(23,13,5,2,'#5E3AA8');
    pumpkin(d,32,17,2,2,P.o1,P.o2,P.o3,true);
    d.stamp(36,14,['.cc.','c..c','cccc','c..c','cccc'],{c:'#D8D0C0'}); // jar w/ candy
    d.px(37,16,P.pk); d.px(38,18,P.mt);
    // hanging witch hat on peg
    d.px(59,1,'#C8A070'); d.poly([[55,9],[63,9],[61,3],[58,0]],'#3E2478'); d.hline(53,63,9,'#5E3AA8'); d.hline(54,63,10,'#3E2478'); d.hline(56,62,8,P.o2); d.px(59,8,P.y2);
    // hanging herbs
    for(const x of [19,44]){d.vline(x,0,3,'#7A5A3A'); d.stamp(x-2,4,['g.g.g','.ggg.','..g..'],{g:'#6AA048'})}
    // floor
    d.rect(0,30,64,10,'#8A5A38'); for(let y=30;y<40;y+=3) d.hline(0,63,y,'#6E4428'); for(let x=5;x<64;x+=11) d.vline(x,31,32,'#6E4428');
    // rug under pet
    d.ell(14,35,11,3,'#7A3A6A'); d.ell(14,35,9,2,'#9A4A88'); d.hline(7,21,35,P.o2);
    // stone hearth on right
    d.rect(40,13,24,18,'#6A6070'); d.rect(43,16,21,14,'#2A1A1A'); d.px(43,16,'#6A6070'); d.px(44,16,'#6A6070'); d.px(43,17,'#6A6070');
    for(let y=14;y<31;y+=3){d.hline(40,42,y,'#8A8090'); d.px(41,y+1,'#4E4868')}
    d.hline(39,63,13,'#8A8090'); for(let x=44;x<64;x+=5) d.px(x,14,'#4E4868');
    // warm glow
    for(let y=18;y<30;y++) for(let x=44;x<64;x++) if((x+y)%2===0 && y>22) d.px(x,y,'#4A2A20');
    // cauldron (on legs over fire)
    d.ell(51,22,8,5,'#2E2A3A'); d.ell(50,22,7,4,'#3E3A4E'); d.vline(45,21,24,'#6A6070'); d.px(46,25,'#6A6070');
    d.ell(51,17,9,1,'#2E2A3A'); d.hline(43,59,17,'#8AE04A'); d.hline(44,58,16,'#8AE04A'); d.px(46,16,'#C8FF8A'); d.px(54,17,'#C8FF8A'); d.px(50,16,'#B48AF0');
    d.vline(45,26,27,'#2E2A3A'); d.vline(57,26,27,'#2E2A3A');
    // fire under cauldron
    d.stamp(44,26,['..y...y..y...y','.yoy.yoyyoy.yoy','yoroyyorooroyoro','oorrooorrroorroo'],{y:P.y2,o:P.o2,r:'#E84830'});
    d.rect(43,30,18,1,'#5A3A20');
    // bubbles
    for(const [x,y,c] of [[47,13,'#8AE04A'],[53,12,'#B48AF0'],[50,9,'#8AE04A'],[51,6,'#8AE04A'],[45,9,'#B48AF0']]){d.stamp(x-1,y-1,['.c.','c.c','.c.'],{c}); d.px(x-1,y-1,'#E8FFD0')}
    // bubbles
    // steam swirls
    d.line(49,5,47,3,'#C8C2EC'); d.line(47,3,49,1,'#C8C2EC'); d.line(52,6,53,3,'#C8C2EC');
    // ladle
    d.line(56,16,59,12,'#A8744A'); d.px(60,11,'#A8744A');
    // table with soup bowl (right of pet area)
    d.rect(26,27,10,2,'#A8744A'); d.hline(26,35,29,'#7A4E30'); d.vline(27,29,36,'#7A4E30'); d.vline(34,29,36,'#7A4E30');
    d.ell(31,25,3,1,'#8AE04A'); d.hline(28,34,26,'#E8E0F0'); d.hline(29,33,27,'#C8C2EC'); d.px(30,25,'#E06AFF'); d.px(32,24,'#8AE04A');
    d.line(34,23,36,25,'#C8C8D0');
    // steam
    d.px(30,22,'#E8E0F0'); d.px(31,21,'#E8E0F0'); d.px(32,22,'#E8E0F0');
    const M={'#6A4A34':'#8A5A38','#8A5A3A':'#A8744A','#C8A070':'#A8744A','#7A5A3A':'#7A4E30','#D8D0C0':'#E8E0F0','#E8D8B0':'#E8E0F0','#F2E8D8':'#E8E0F0',
      '#5A5670':'#6A6070','#8A8090':'#6A6070','#E84830':'#E84860','#E8FFD0':'#C8FF8A','#E06AFF':'#B48AF0','#C8C8D0':'#C8C2EC','#6EC8FF':'#6EE0C0','#7AFF9A':'#8AE04A',
      '#5A3A20':'#4A2E20','#C02E48':'#E84860','#6AA048':'#4FA04A','#FFF2B0':'#FFF6B0','#C8C2EC':'#C8C2EC','#6E4428':'#7A4E30'};
    for(const k in M) d.recolor(k,M[k]);
  },
};
