// art_1: dog, sheep, capybara, webber, iceking, gekko, thor, krabs, simhomer, trike, sawol
const seg=(d,x0,y0,x1,y1,r,c)=>{const n=Math.max(Math.abs(x1-x0),Math.abs(y1-y0))*2||1; for(let i=0;i<=n;i++) d.circ(x0+(x1-x0)*i/n,y0+(y1-y0)*i/n,r,c)};
const spark=(d,x,y,c,w='#FFFFFF')=>d.stamp(x-2,y-2,['..a..','..a..','aawaa','..a..','..a..'],{a:c,w});
const tw=(d,x,y,c)=>{d.px(x,y,c); d.px(x-1,y,c); d.px(x+1,y,c); d.px(x,y-1,c); d.px(x,y+1,c)};
const cloud=(d,x,y,w,c,s)=>{d.ell(x,y,w,2,c); d.ell(x-Math.round(w/3),y-1,Math.round(w/2),2,c); d.ell(x+Math.round(w/4),y-2,Math.round(w/3),2,c); if(s) d.hline(x-w+1,x+w-1,y+2,s)};
const starfield=(d,n,cols,y1)=>{for(let i=0;i<n;i++) d.px(d.ri(0,d.W-1),d.ri(0,y1),cols[i%cols.length])};
const speck=(d,n,x0,y0,x1,y1,cols)=>{for(let i=0;i<n;i++) d.px(d.ri(x0,x1),d.ri(y0,y1),cols[i%cols.length])};
const heart=(d,x,y,c,h)=>d.stamp(x,y,['.c.c.','ccccc','ccccc','.ccc.','..c..'],{c}) || (h&&d.px(x+1,y+1,h));
const bone=(d,x,y,c,s)=>{d.stamp(x,y,['c...c','ccccc','c...c'],{c}); if(s) d.hline(x+1,x+3,y+2,s)};

export default {
  // ===== DOG =====
  'dog:s0': d=>{ // best stick
    const B1='#A8743E',B2='#8A5A2A',B3='#C8925A',K='#6A4220',L1='#6CC24A',L2='#4A9A34';
    seg(d,5,26,26,6,2,B2); seg(d,5,25,25,6,1.5,B1); seg(d,6,24,24,7,0.6,B3);
    seg(d,17,14,13,6,1,B1); // twig
    d.px(14,8,B2); d.px(15,10,B2);
    d.ell(11,5,3,2,L1); d.px(10,4,L2); d.px(11,5,L2); d.px(12,6,L2); d.px(9,4,'#9FE07A');
    d.ell(25,9,2,1,L1); d.px(26,9,L2);
    for(const [x,y] of [[10,21],[16,15],[21,11]]){d.px(x,y,K); d.px(x+1,y-1,K)} // bark knots
    d.px(4,27,'#E8C090'); d.px(5,27,'#E8C090'); d.px(4,26,'#E8C090'); // broken end
    d.px(13,20,'#D06048'); d.px(19,15,'#D06048'); // teeth marks
    d.outline('#3A2414');
    heart(d,23,18,'#F06A8A'); d.px(24,19,'#FFC0D0');
    d.px(27,21,'#F06A8A'); d.px(28,22,'#F06A8A');
    d.stamp(6,28,['w..','.w.'],{w:'#9AD8F0'}); d.px(8,30,'#9AD8F0');
  },
  'dog:s1': d=>{ // slobbery tennis ball
    const Y1='#D8EC48',Y2='#B4CC2C',Y3='#F0FA90',S='#FFFFFF',SL='#B8E8F8',SD='#7CC8E8';
    d.circ(16,15,12,Y2); d.circ(15,14,11,Y1); d.circ(12,10,5,Y3); d.circ(12,10,3,Y1);
    // seams: two curves
    for(let y=4;y<=26;y++){const t=(y-15)/11; d.px(Math.round(8+5*t*t),y,S); d.px(Math.round(24-5*t*t),y,S)}
    d.px(8,10,Y3); d.px(9,8,Y3); d.px(10,7,'#FFFFFF');
    d.outline('#4A5A14');
    // slobber
    d.stamp(17,24,['sss.....','sSss....','.sS.....','.ss.....','.sS.....','..s.....','..S.....'],{s:SL,S:SD});
    d.stamp(23,23,['ss','sS','s.','S.'],{s:SL,S:SD});
    d.px(14,6,S); d.px(20,8,SL); d.px(21,9,SL);
    d.px(27,5,'#9AD8F0'); d.px(28,4,'#9AD8F0'); d.px(4,24,'#E8D098'); d.px(6,27,'#E8D098'); d.px(28,26,'#E8D098');
  },
  'dog:s2': d=>{ // galaxy trophy
    const G1='#F8C838',G2='#D89A20',G3='#FFF0A0',P='#7A5AD0',P2='#5A3AA8',R='#E85870';
    d.rect(9,27,14,4,P2); d.rect(10,27,12,1,P); d.rect(10,24,12,3,G2); d.rect(13,20,6,4,G1); d.rect(14,20,2,4,G3);
    d.poly([[6,6],[26,6],[24,14],[20,19],[12,19],[8,14]],G1);
    d.poly([[19,6],[26,6],[24,14],[20,19],[17,19]],G2);
    d.vline(9,7,13,G3); d.vline(10,7,10,G3);
    d.ring(5,10,3,G2); d.ring(27,10,3,G2); d.clear(7,10); d.clear(25,10);
    // paw emblem
    d.stamp(12,9,['.p.p.','p...p','..p..','.ppp.','.ppp.'],{p:P}); d.stamp(13,9,['.....','.....','.....','.....','.....'],{});
    d.rect(10,27,1,1,G3);
    d.stamp(13,28,['w.ww','w..w','w..w'],{w:'#FFE070'}); // '1' and a tiny o
    // planet on top
    d.circ(16,3,2,'#8AD0F8'); d.hline(12,20,3,'#F06A9A'); d.px(15,2,'#E0F6FF');
    d.outline('#3A2A1A');
    // ribbon tails
    d.stamp(19,18,['rr.','rRr','.rr','.r.'],{r:R,R:'#B83A58'});
    spark(d,28,20,'#FFE070'); spark(d,3,22,'#A0E0FF'); d.px(29,2,'#FFFFFF'); d.px(2,3,'#FFE070');
  },
  'dog:c0': d=>{ // neighborhood walk, lampposts
    d.grad(0,0,64,18,['#8ED0F4','#A4DAF6','#BAE4F8']);
    cloud(d,12,5,6,'#FFFFFF'); cloud(d,40,3,4,'#FFFFFF');
    // houses back row
    const houses=[[24,'#F4A0A0','#C85A5A'],[36,'#F8E0A0','#C89A48'],[48,'#A8D8B8','#5A9A70']];
    for(const [x,w,r] of houses){d.rect(x,12,10,9,w); d.poly([[x-1,12],[x+5,6],[x+11,12]],r); d.rect(x+2,15,2,2,'#7AB8E0'); d.rect(x+6,16,2,5,'#8A5A3A')}
    d.rect(0,14,24,7,'#7CC062'); for(let x=0;x<24;x+=5) d.circ(x+2,14,3,'#5EA84A');
    d.rect(58,14,6,7,'#7CC062'); d.circ(61,14,3,'#5EA84A');
    d.rect(0,20,64,2,'#C8C8C0'); d.hline(0,63,21,'#A8A8A0');
    d.rect(0,22,64,18,'#E4DCC8'); // sidewalk
    for(let x=0;x<64;x+=8) d.vline(x,22,39,'#CEC4AE');
    d.hline(0,63,30,'#CEC4AE');
    d.rect(0,38,64,2,'#7CC062');
    // lampposts
    for(const x of [30,44,58]){d.rect(x,9,1,22,'#4A5A6A'); d.rect(x-1,30,3,1,'#3A4A5A'); d.rect(x-1,8,3,2,'#FFE48A'); d.hline(x-1,x+1,7,'#4A5A6A'); d.px(x+1,26,'#F8D048'); d.px(x+2,27,'#F8D048')}
    // hydrant
    d.stamp(37,25,['.rr.','rRRr','.rr.','rrrr','.rr.','.rr.'],{r:'#E04848',R:'#FF8A7A'});
    // tree on right
    d.rect(51,20,2,10,'#8A5A3A'); d.circ(52,16,5,'#4A9A3A'); d.circ(50,14,3,'#6CC04E'); d.px(54,17,'#E05050');
    // paw prints trail
    for(const [x,y] of [[24,33],[29,35],[34,33],[39,35],[44,33]]) d.stamp(x,y,['p.p','.p.'],{p:'#B8AC90'});
    // leash on ground
    d.line(56,36,62,33,'#E05A8A'); d.px(55,36,'#E05A8A');
  },
  'dog:c1': d=>{ // big beach, wave barked at
    d.grad(0,0,64,12,['#FFD8A8','#FFE6C0','#BEE6F4']);
    d.circ(10,4,3,'#FFF4C0'); d.circ(10,4,2,'#FFFFFF');
    d.rect(0,12,64,8,'#2E8AC8'); d.hline(0,63,12,'#1E6EA8'); for(let x=2;x<64;x+=7) d.hline(x,x+2,15+(x%2),'#6AB8E8');
    // big curling wave on the right
    d.poly([[30,20],[40,10],[50,6],[58,8],[63,12],[63,26],[30,26]],'#3A9AD8');
    d.poly([[44,20],[48,12],[54,9],[60,11],[56,12],[52,16],[52,22]],'#1E6EA8');
    d.ell(55,9,5,2,'#FFFFFF'); d.px(50,8,'#FFFFFF'); d.px(47,10,'#E0F4FF'); d.px(61,10,'#E0F4FF');
    for(let x=30;x<64;x+=3) d.px(x,19,'#8ACCF0');
    d.rect(0,20,64,2,'#5AB0E4');
    d.rect(0,22,64,18,'#F4DCA4'); d.rect(0,22,64,3,'#D8B878'); // wet sand
    for(let x=0;x<64;x+=1) if((x*7)%5<2) d.px(x,22,'#FFFFFF');
    d.poly([[30,22],[63,22],[63,28],[46,27],[36,25]],'#FFFFFF'); d.hline(36,62,27,'#D8F0FF');
    speck(d,30,0,30,63,39,['#E2C080','#FFF0C8']);
    // footprints running
    for(const [x,y] of [[24,34],[28,31],[32,34],[36,31],[40,34]]) d.stamp(x,y,['p.p','.p.'],{p:'#C8A468'});
    // ball, sandcastle, starfish
    d.circ(44,33,2,'#D8EC48'); d.px(43,32,'#FFFFFF'); d.line(43,35,45,31,'#FFFFFF');
    d.stamp(52,28,['k...k...k','kk.kk.kk.','kkkkkkkk.','kKkkKkkk.','kkkkkkkk.','kkkkkkkk.','KKKKKKKK.'],{k:'#E8C47C',K:'#C89A50'}); d.vline(56,24,27,'#7A5A3A'); d.px(57,24,'#E85050'); d.px(58,25,'#E85050');
    d.stamp(30,36,['.o.','ooo','o.o'],{o:'#F08A5A'});
    d.stamp(24,3,['g...g','.g.g.'],{g:'#6A6A7A'});
  },
  'dog:c2': d=>{ // endless treat galaxy
    d.grad(0,0,64,40,['#1A1040','#24145A','#30186E','#3A1E7A']);
    for(let x=0;x<64;x++){const y=Math.round(4+x*0.3+Math.sin(x/5)*2); d.px(x,y,'#5A3A9A'); d.px(x,y+1,'#4A2E8A'); if(x%3==0) d.px(x,y-1,'#7A5AC0')}
    starfield(d,40,['#FFFFFF','#C8B8FF','#FFE8A0'],30);
    // bone stars
    for(const [x,y] of [[30,6],[46,15],[56,4],[8,10],[38,26],[52,24]]) bone(d,x,y,'#FFF0D0','#E0C8A0');
    // donut planet
    d.circ(48,12,6,'#D89048'); d.circ(48,12,5,'#F08AB0'); d.circ(48,12,2,'#30186E'); d.px(45,9,'#FFFFFF'); d.px(50,9,'#7AD8F8'); d.px(52,13,'#F8E050'); d.px(44,14,'#7AD8F8'); d.px(47,16,'#F8E050'); d.px(51,15,'#FFFFFF');
    // cookie moon
    d.circ(22,6,4,'#D8A868'); d.px(21,5,'#6A3A1A'); d.px(23,7,'#6A3A1A'); d.px(24,4,'#6A3A1A'); d.px(20,8,'#6A3A1A');
    // fish treat comet
    d.stamp(32,16,['..oo.o','.oooOo','oOooo.','.oo..o'],{o:'#F0A050',O:'#202020'}); d.line(26,14,31,17,'#FFE8A0');
    // biscuit ground
    d.poly([[0,30],[20,28],[40,31],[64,29],[64,40],[0,40]],'#D49A58');
    d.poly([[0,33],[30,32],[64,33],[64,40],[0,40]],'#C0864A');
    for(let x=2;x<64;x+=5) d.px(x,34+(x%3),'#9A6230'); d.hline(0,63,30,'#E8B878'); d.hline(20,40,28,'#E8B878');
    d.circ(46,30,3,'#A8743E'); d.circ(46,30,2,'#8A5A2A'); d.circ(58,32,2,'#A8743E');
    spark(d,12,4,'#FFE070'); spark(d,60,20,'#C8B8FF'); tw(d,26,22,'#FFE8A0');
  },

  // ===== SHEEP =====
  'sheep:s0': d=>{ // tuft of park grass
    const G1='#6CC24A',G2='#4A9A34',G3='#A0E070',D1='#8A6A48',D2='#6A4E34',D3='#A88860';
    d.ell(16,25,10,4,D1); d.ell(15,24,8,3,D3); d.ell(18,27,7,2,D2);
    const blades=[[7,24,4,12],[10,24,8,5],[13,24,12,3],[16,24,16,2],[19,24,20,4],[22,24,25,8],[24,24,27,14],[12,24,5,9],[20,24,23,2]];
    for(const [x0,y0,x1,y1] of blades){seg(d,x0,y0,x1,y1,0.6,G2)}
    for(const [x0,y0,x1,y1] of blades){d.line(x0+1,y0-1,x1,y1+1,G1)}
    d.line(15,22,16,4,G3); d.line(11,20,8,8,G3); d.line(21,20,24,6,G3);
    // clover flower
    d.vline(26,17,23,G2); d.stamp(24,13,['.www.','wwpww','wpPpw','wwpww','.www.'],{w:'#FFFFFF',p:'#F8C0D0',P:'#F08AA8'});
    d.stamp(5,19,['.cc.','cccc','.cc.'],{c:G1}); d.px(6,22,G2);
    d.outline('#2A4A1C');
    d.px(16,3,'#BFF0FF'); d.px(9,7,'#BFF0FF'); // dew
    d.stamp(1,2,['b.b','.b.'],{b:'#FFFFFF'});
    d.px(13,26,'#4A3420'); d.px(20,25,'#4A3420');
  },
  'sheep:s1': d=>{ // scarf from my wool
    const W1='#FFF8EC',W2='#EAD8C0',W3='#C8B49A',P1='#F48AA8',P2='#D0607E';
    // neck loop (thick ring)
    d.ell(16,10,12,7,W2); d.ell(16,9,11,6,W1);
    for(let y=0;y<32;y++) for(let x=0;x<32;x++) if(((x-16)/7.2)**2+((y-9)/3.2)**2<=1) d.clear(x,y);
    for(let x=6;x<27;x+=2){d.px(x,14+(x>10&&x<22?1:0),W3)} // knit row on loop
    for(let x=5;x<28;x+=3){d.px(x,6+(Math.abs(x-16)>8?2:0),W2)}
    // hanging tails
    d.poly([[7,13],[14,14],[13,27],[5,26]],W1); d.poly([[13,14],[14,14],[13,27],[11,27]],W2);
    d.poly([[18,14],[25,13],[27,25],[19,26]],W2); d.poly([[18,14],[23,14],[25,24],[20,25]],W1);
    for(const y of [18,22]){d.hline(6,13,y,P1); d.hline(6,13,y+1,P2); d.line(19,y-1,26,y-2,P1); d.line(19,y,26,y-1,P2)}
    for(let y=15;y<26;y+=2) for(let x=7;x<13;x+=2) if(![18,19,22,23].includes(y)) d.px(x,y,W2);
    for(let y=15;y<25;y+=2) for(let x=20;x<25;x+=2) if(![17,18,21,22].includes(y)) d.px(x,y,W3);
    d.vline(8,3,5,'#FFFFFF'); d.vline(7,4,6,'#FFFFFF');
    d.outline('#7A6650');
    for(const x of [5,7,9,11,13]) d.vline(x,28,30,P2);
    for(const x of [19,21,23,25,27]) d.vline(x,27,29,P2);
    d.stamp(27,1,['.w.','www','.w.'],{w:'#FFFFFF'}); d.px(2,10,'#FFFFFF'); d.px(30,18,'#FFFFFF');
  },
  'sheep:s2': d=>{ // cloud flock fluff
    const C1='#FFFFFF',C2='#E4ECFF',C3='#BCC8F0',P='#F8B8D0',K='#4A4868';
    d.circ(9,18,6,C3); d.circ(23,18,6,C3); d.circ(16,12,8,C3); d.circ(16,20,7,C3);
    d.circ(9,17,5,C2); d.circ(23,17,5,C2); d.circ(16,11,7,C2); d.circ(16,19,6,C2);
    d.circ(9,16,3,C1); d.circ(14,9,5,C1); d.circ(21,13,3,C1);
    // little ear nubs + sleepy face
    d.stamp(8,9,['kk','kk'],{k:'#8A86A8'}); d.stamp(22,9,['kk','kk'],{k:'#8A86A8'});
    d.stamp(12,15,['kk.....kk','.........','...k.k...','....k....'],{k:K});
    d.px(10,17,P); d.px(11,17,P); d.px(21,17,P); d.px(22,17,P);
    d.stamp(12,25,['pp...pp','pPpppPp','.pPpPp.','..ppp..'],{p:P,P:'#E07CA0'});
    d.outline('#6A74A8');
    spark(d,28,4,'#FFE6A0'); spark(d,3,5,'#A8D8FF'); d.px(29,27,'#FFE6A0'); d.px(2,27,'#A8D8FF');
  },
  'sheep:c0': d=>{ // grassy neighborhood park
    d.grad(0,0,64,16,['#9ED8F8','#B6E2FA','#D2EEFC']);
    cloud(d,30,5,5,'#FFFFFF'); cloud(d,50,8,4,'#FFFFFF');
    d.circ(6,4,3,'#FFF4A0');
    // tree line back
    for(let x=-2;x<66;x+=6) d.circ(x,15,4,'#5AA850'); for(let x=1;x<66;x+=6) d.circ(x,16,3,'#4A9440');
    d.rect(0,17,64,23,'#7CCC5A'); d.dither(0,17,64,2,'#6CBE4E','#7CCC5A');
    // lawn mowing stripes
    for(let y=21;y<40;y+=6) d.rect(0,y,64,3,'#88D468');
    // big tree right
    d.rect(46,14,4,14,'#8A5A3A'); d.rect(47,14,1,14,'#A87448');
    d.circ(48,9,9,'#3E8E3A'); d.circ(45,7,5,'#5AB04C'); d.circ(52,10,4,'#4AA044'); d.px(44,5,'#8ADC70'); d.px(51,7,'#8ADC70');
    d.ell(48,28,9,2,'#5EA848'); // shadow
    // bench
    d.rect(30,24,12,2,'#B87A48'); d.rect(30,21,12,2,'#B87A48'); d.vline(31,26,29,'#6A4A2A'); d.vline(40,26,29,'#6A4A2A');
    // pond
    d.ell(55,35,8,3,'#5AB0E0'); d.ell(54,34,5,1,'#8ED0F4'); d.px(60,34,'#FFFFFF');
    // flowers + grass bits
    for(const [x,y,c] of [[28,32,'#F8E050'],[36,36,'#FFFFFF'],[42,33,'#F07AA0'],[25,37,'#FFFFFF'],[60,26,'#F8E050']]){d.px(x,y,c); d.px(x,y+1,'#4A9A34')}
    for(let i=0;i<14;i++){const x=d.ri(23,63),y=d.ri(20,39); d.px(x,y,'#5AAE44'); d.px(x+1,y-1,'#5AAE44')}
    // wool tuft left on the grass
    d.stamp(23,29,['.ww.','wwww','.w..'],{w:'#FFFFFF'});
  },
  'sheep:c1': d=>{ // alpine meadows
    d.grad(0,0,64,14,['#5EB4F0','#7EC4F4','#A2D6F8']);
    // mountains
    d.poly([[8,22],[24,3],[40,22]],'#7A88A8'); d.poly([[30,22],[46,1],[64,18],[64,22]],'#8A98B8');
    d.poly([[24,3],[20,8],[23,7],[26,9],[28,6]],'#FFFFFF'); d.poly([[46,1],[41,7],[44,6],[47,8],[50,5]],'#FFFFFF');
    d.poly([[24,3],[40,22],[32,22],[26,10]],'#68769A'); d.poly([[46,1],[64,18],[64,22],[54,22],[48,8]],'#7684A8');
    d.poly([[0,22],[0,10],[10,20]],'#8A98B8');
    // hills
    d.ell(14,27,26,8,'#6CC250'); d.ell(50,26,24,7,'#88D460'); d.ell(50,25,20,5,'#9CDE70');
    d.rect(0,28,64,12,'#7ACC58'); d.ell(14,27,26,6,'#7ACC58');
    // sheep friends dots on far hills
    for(const [x,y] of [[36,21],[40,23],[44,20],[48,22],[52,21],[57,23],[60,20],[46,25],[54,24],[33,24]]){d.hline(x,x+1,y,'#FFFFFF'); d.px(x+2,y,'#3A3A4A')}
    // chalet
    d.rect(52,27,9,6,'#B8784A'); d.poly([[50,27],[56,22],[62,27]],'#8A3A2A'); d.rect(55,29,2,4,'#6A3A2A'); d.rect(58,28,2,2,'#FFE48A');
    // fence
    for(let x=24;x<50;x+=4) d.vline(x,29,33,'#A0784A'); d.hline(24,48,30,'#C89A60'); d.hline(24,48,32,'#C89A60');
    // wildflowers
    for(let i=0;i<22;i++){const x=d.ri(23,63),y=d.ri(34,39); d.px(x,y,['#F8E050','#F07AA0','#FFFFFF','#B080F0'][i%4])}
    d.stamp(4,3,['..g..g','.g.g..'],{g:'#3A3A4A'});
  },
  'sheep:c2': d=>{ // counting-sheep dreamland
    d.grad(0,0,64,40,['#1A1A48','#22245A','#2C306C','#3A3E80']);
    starfield(d,28,['#FFFFFF','#FFE8A0','#B8C8FF'],26);
    // crescent moon with hanging star
    d.circ(51,10,7,'#FFE89A'); d.circ(48,9,5,'#FFF4C8'); d.circ(55,7,6,'#22245A');
    d.vline(56,0,13,'#8A88C8'); tw(d,56,15,'#FFE89A');
    // dream clouds floor
    d.rect(0,32,64,8,'#B8A8E8'); for(let x=0;x<70;x+=7) d.circ(x,32,4,'#B8A8E8'); for(let x=3;x<70;x+=7) d.circ(x,34,3,'#D0C4F4');
    d.rect(0,37,64,3,'#9A88D0');
    // fence
    d.rect(34,24,2,10,'#C89A60'); d.rect(44,24,2,10,'#C89A60'); d.hline(32,48,26,'#E8C080'); d.hline(32,48,29,'#E8C080');
    // dream sheep arc over fence (count numbers)
    const ds=(x,y)=>d.stamp(x,y,['.www.w.','wwwwwkk','wwwwwkk','wwwww..','.k..k..'],{w:'#FFFFFF',k:'#3A3A50'});
    ds(24,21); ds(36,13); ds(49,20);
    for(let i=0;i<9;i++){const t=i/8; d.px(Math.round(30+t*22),Math.round(22-Math.sin(t*Math.PI)*10),'#8A88C8')}
    d.stamp(38,6,['.1.','11.','.1.','.1.','111'],{'1':'#FFE89A'});
    d.stamp(51,13,['22.','..2','.2.','222'],{'2':'#FFE89A'});
    // zzz
    d.stamp(24,6,['zzz','.z.','zzz'],{z:'#D8D0FF'}); d.stamp(28,3,['zz','zz'],{z:'#A8A0E8'});
    // pillow
    d.ell(58,33,5,2,'#F4E8FF'); d.hline(54,62,35,'#C8B8F0');
  },
  // ===== CAPYBARA =====
  'capybara:s0': d=>{ // tangerine from my head
    const O1='#F89828',O2='#D87010',O3='#FFC060',L1='#5AAE44',L2='#3A8A30',S='#6A4A2A';
    d.ell(16,18,12,10,O2); d.ell(15,17,11,9,O1); d.ell(11,13,5,4,O3); d.ell(11,13,3,2,'#FFE0A0');
    for(const [x,y] of [[20,12],[23,17],[19,22],[13,24],[24,22],[8,20],[16,15]]) d.px(x,y,O2);
    d.hline(9,23,27,O2); d.hline(12,20,28,O2); // flat bottom (sat on a head)
    d.rect(15,6,2,3,S); d.poly([[17,7],[22,3],[27,4],[23,8],[18,9]],L1); d.line(18,8,25,4,L2); d.px(26,4,L2);
    d.outline('#6A3A10');
    d.px(9,11,'#FFFFFF'); d.px(10,10,'#FFFFFF');
    // calm sparkles
    spark(d,4,5,'#FFE070'); d.px(29,13,'#FFE070'); d.px(3,26,'#FFE070');
  },
  'capybara:s1': d=>{ // yuzu bath salts jar
    const G1='#D8F0F4',G2='#A8D4DC',Y1='#F8E048',Y2='#E0C020',Y3='#FFF4A0',K='#C08848';
    d.rect(10,2,12,4,K); d.hline(10,21,5,'#9A6830'); d.hline(11,20,2,'#D8A060');
    d.rect(11,6,10,2,G2); d.rect(7,8,18,21,G1); d.rect(8,29,16,1,G1);
    // crystals inside
    d.rect(8,13,16,16,Y1); for(let i=0;i<40;i++) d.px(d.ri(8,23),d.ri(13,28),[Y2,Y3,'#FFFFFF'][i%3]);
    d.hline(8,23,13,Y3); for(let x=8;x<24;x+=3) d.px(x,12,Y1);
    // label with yuzu slice + steam
    d.rect(10,17,12,9,'#FFFDF0'); d.hline(10,21,17,'#E08A3A'); d.hline(10,21,25,'#E08A3A');
    d.circ(16,22,3,'#F0C020'); d.circ(16,22,2,'#FFF0A0'); d.line(16,20,16,24,'#F0C020'); d.line(14,22,18,22,'#F0C020');
    d.stamp(13,18,['.r..r..r','r..r..r.'],{r:'#E06050'});
    d.vline(8,9,27,'#FFFFFF'); d.vline(9,9,11,'#FFFFFF');
    d.outline('#4A5A60');
    // floating yuzu
    d.circ(27,26,3,Y1); d.px(26,25,Y3); d.px(27,22,'#5AAE44'); d.px(28,22,'#5AAE44');
    d.stamp(25,6,['.s.s','s.s.','.s.s','s.s.'],{s:'#C8D8E0'});
  },
  'capybara:s2': d=>{ // friend-of-everyone badge
    const R1='#4AB878',R2='#2E8A58',C1='#FFF6DC',B1='#B88050',B2='#8A5A34',Gd='#F8C838';
    // ribbons
    d.poly([[9,20],[14,22],[11,31],[9,28],[6,30]],R2); d.poly([[18,22],[23,20],[26,30],[23,28],[21,31]],R1);
    d.circ(16,15,11,Gd); d.circ(16,15,9,R1); d.circ(16,15,7,C1);
    for(let a=0;a<12;a++){const t=a*Math.PI/6; d.px(16+Math.round(Math.cos(t)*10),15+Math.round(Math.sin(t)*10),'#FFF0A0')}
    // capybara face
    d.ell(16,17,5,4,B1); d.rect(13,12,1,2,B2); d.rect(19,12,1,2,B2); d.ell(16,19,3,2,B2);
    d.px(14,16,'#2A1A10'); d.px(18,16,'#2A1A10'); d.px(15,19,'#2A1A10'); d.px(17,19,'#2A1A10');
    d.px(13,18,'#F0A0A0'); d.px(19,18,'#F0A0A0');
    // tiny croc on the bottom edge
    d.stamp(9,22,['.gg.gg....','gggggggggg','.gwgwgwg..'],{g:'#6AA840',w:'#FFFFFF'});
    d.outline('#3A2A1A');
    // dove perched on top
    d.stamp(19,0,['..ww...','.wwkw..','wwwwwoo','.wwww..','..ww...'],{w:'#FFFFFF',k:'#2A2A3A',o:'#F0A040'});
    d.px(18,2,'#C8D0E0'); d.px(18,3,'#C8D0E0');
    d.px(3,4,'#F8E070'); d.px(28,10,'#F8E070');
  },
  'capybara:c0': d=>{ // local bathhouse
    d.rect(0,0,64,22,'#E8F4FA');
    for(let y=0;y<22;y+=4) d.hline(0,63,y,'#C4DCE8'); for(let y=0;y<22;y++) for(let x=(y>>2)%2*2;x<64;x+=4) if(y%4) {} 
    for(let x=0;x<64;x+=4) for(let y=0;y<22;y++) if(y%4) d.px(x,y,'#C4DCE8');
    // fuji mural
    d.rect(24,1,38,14,'#8ACCF0'); d.rect(24,11,38,4,'#4A9ADA');
    d.poly([[30,12],[43,2],[56,12]],'#5A6AB0'); d.poly([[39,5],[43,2],[47,5],[45,6],[43,5],[41,6]],'#FFFFFF');
    d.circ(57,4,2,'#F86A5A'); cloud(d,30,5,3,'#FFFFFF');
    for(let x=24;x<62;x+=3) d.px(x,13,'#8ACCF0');
    d.frame(23,0,40,16,'#8A5A3A');
    // bath tub
    d.rect(26,22,38,12,'#7ABEE0'); d.rect(26,22,38,2,'#4A9ACA'); d.rect(24,20,40,2,'#E0C8A0'); d.rect(24,20,2,14,'#E0C8A0');
    for(let x=28;x<64;x+=5) d.hline(x,x+2,26,'#A8DAF0');
    d.ell(48,25,2,1,'#F8E048'); d.px(47,24,'#FFFFFF'); // rubber duck
    d.px(50,24,'#F8E048'); d.px(51,25,'#F08030');
    // steam
    for(const x of [32,42,56]) for(let y=10;y<19;y++) if(y%3!=0) d.px(x+((y>>1)%2),y,'#FFFFFF');
    // tiled floor
    d.rect(0,22,26,18,'#D8E8E8'); d.rect(24,34,40,6,'#D8E8E8');
    for(let x=0;x<64;x+=5) d.vline(x,22,39,'#B8CCD0'); for(let y=26;y<40;y+=5) d.hline(0,63,y,'#B8CCD0');
    d.rect(26,34,38,1,'#B8CCD0');
    // yellow buckets stack + stool
    d.stamp(48,34,['.yyyyy.','yYyyyyy','.yyyyy.'],{y:'#F8D040',Y:'#FFF0A0'}); d.stamp(49,32,['yyyyy','.yyy.'],{y:'#F0C030'});
    d.rect(36,35,6,2,'#E87050'); d.vline(37,37,39,'#B84A30'); d.vline(40,37,39,'#B84A30');
    d.stamp(28,36,['ww','ww'],{w:'#FFFFFF'}); // towel
  },
  'capybara:c1': d=>{ // snowy yuzu hot spring
    d.grad(0,0,64,20,['#5A6A9A','#6E7EAA','#8494BA','#9AAACA']);
    // snowy pines back
    for(const [x,h] of [[4,10],[14,13],[52,14],[60,10],[30,8]]){d.poly([[x-5,20],[x,20-h],[x+5,20]],'#2E5A4A'); d.poly([[x-2,20-h+4],[x,20-h],[x+2,20-h+4]],'#FFFFFF'); d.hline(x-4,x+4,18,'#E8F0FF')}
    d.rect(0,20,64,20,'#F0F4FF'); d.dither(0,20,64,1,'#D8E0F4','#F0F4FF');
    // rocks ring + pool
    d.ell(44,30,18,7,'#6A6A78'); d.ell(44,30,16,6,'#8A8A98'); d.ell(44,31,14,5,'#5AC0C8'); d.ell(44,32,12,3,'#7AD4D8');
    for(const [x,y] of [[28,27],[33,24],[40,23],[50,23],[57,25],[61,30],[58,36],[30,35]]){d.ell(x,y,2,1,'#9A9AA8'); d.hline(x-1,x+1,y-1,'#FFFFFF')}
    // floating yuzu
    for(const [x,y] of [[38,30],[44,33],[50,30],[47,28],[35,33]]){d.circ(x,y,1.2,'#F8D828'); d.px(x-1,y-1,'#FFF4A0')}
    // steam
    for(const x of [36,44,52]) for(let y=12;y<26;y++) if(y%4!=0) d.px(x+(((y>>1)%2)?1:0),y,'#E8EEFA');
    // stone lantern
    d.rect(60,14,3,8,'#7A7A88'); d.rect(58,13,7,2,'#9A9AA8'); d.rect(60,16,3,2,'#FFD870'); d.hline(58,64,12,'#FFFFFF');
    // falling snow
    for(let i=0;i<46;i++) d.px(d.ri(0,63),d.ri(0,38),'#FFFFFF');
    d.px(22,30,'#C8D0E8'); d.px(23,31,'#C8D0E8');
  },
  'capybara:c2': d=>{ // amazon friendship river
    d.grad(0,0,64,14,['#A8E0B0','#C0EAB8','#D6F2C0']);
    // jungle canopy
    for(let x=-2;x<66;x+=5) d.circ(x,2,4,'#2E7A3A'); for(let x=1;x<66;x+=5) d.circ(x,5,3,'#3E9A44');
    for(let x=0;x<64;x+=9) d.circ(x+4,14,5,'#3A8A40');
    // vine with monkey (friend)
    d.vline(44,0,13,'#5A8A30'); d.px(45,5,'#6AB040');
    d.stamp(42,13,['.bbb.','bfbfb','bfffb','.bbb.','b...b'],{b:'#8A5A34',f:'#E8C8A0'});
    // river
    d.rect(0,18,64,22,'#4AAAB8'); d.poly([[0,24],[24,22],[40,26],[0,40]],'#5A9A4A');
    d.rect(0,20,64,2,'#3A8A98');
    for(let y=24;y<40;y+=3) for(let x=26+(y%2)*3;x<64;x+=8) d.hline(x,x+2,y,'#7ACAD4');
    // left bank (pet area)
    d.poly([[0,20],[30,22],[26,40],[0,40]],'#7AB44A'); d.poly([[0,34],[22,32],[24,40],[0,40]],'#6AA040');
    for(let i=0;i<10;i++){const x=d.ri(1,22),y=d.ri(23,38); d.px(x,y,'#9AD060')}
    // croc in the water
    d.stamp(38,27,['.gg..........','gWgg.........','ggggggggggggg','gGgGgGgGgGg..'],{g:'#5A9A3A',G:'#3E7A2A',W:'#FFFFFF'}); d.px(39,27,'#FFFFFF'); d.px(40,28,'#202020');
    // parrot on branch
    d.line(52,16,63,15,'#6A4A2A'); d.stamp(55,10,['.rr.','rkrr','rrrY','.bb.','.bb.','..g.'],{r:'#E84030',k:'#202020',Y:'#F8D040',b:'#3A7AE0',g:'#4ABA48'});
    // lily pads
    for(const [x,y] of [[30,34],[56,36],[50,25]]){d.ell(x,y,2,1,'#4ABA48'); d.px(x+1,y-1,'#F8A0C0')}
    // warm bubbles
    d.px(46,32,'#E0F8FF'); d.px(48,30,'#E0F8FF'); d.px(34,30,'#E0F8FF');
  },

  // ===== WEBBER =====
  'webber:s0': d=>{ // chief's office mug
    const M1='#3A5AB8',M2='#2A4290',M3='#6A8AE0',C='#5A3418',W='#FFFFFF';
    d.rect(6,10,17,19,M1); d.rect(18,10,5,19,M2); d.rect(7,11,3,17,M3); d.hline(6,22,29,M2);
    d.ell(14,10,8,2,M2); d.ell(14,10,7,1,C); d.hline(10,17,10,'#7A4A28');
    d.ring(25,19,4,M1); d.ring(25,19,3,M2); d.clear(25,19);
    // emblem: medical cross in white circle
    d.circ(14,19,4,W); d.rect(13,16,3,7,'#E04848'); d.rect(11,18,7,3,'#E04848');
    d.hline(8,20,26,'#F8C838'); // gold band
    d.outline('#1A2448');
    // steam
    d.stamp(9,0,['.s...s.','s...s..','.s...s.','..s...s','.s...s.','s...s..'],{s:'#C8CCD8'});
  },
  'webber:s1': d=>{ // lucky tie
    const T1='#9A2A3A',T2='#7A1A2A',T3='#C04A5A',S='#F0C048';
    d.poly([[12,2],[20,2],[18,7],[14,7]],T2); d.poly([[13,2],[19,2],[17,6],[15,6]],T1);
    d.poly([[14,7],[18,7],[22,25],[16,30],[10,25]],T1);
    d.poly([[17,7],[18,7],[22,25],[16,30],[16,9]],T2);
    for(let k=0;k<5;k++){const y=10+k*4; d.line(11+Math.floor((y-7)/6),y+2,21-Math.floor((y-7)/7),y-2,S)}
    d.vline(14,9,22,T3);
    // collar
    d.poly([[5,1],[13,1],[12,6],[7,6]],'#F4F4F8'); d.poly([[19,1],[27,1],[25,6],[20,6]],'#F4F4F8');
    d.outline('#3A0A14');
    // clover tie pin
    d.stamp(19,14,['.g.','ggg','.g.'],{g:'#4ABA48'}); d.px(20,15,'#A0F080'); d.hline(15,18,15,'#D8D8E0');
    spark(d,27,20,'#F8E070'); d.px(4,24,'#F8E070');
  },
  'webber:s2': d=>{ // the webber method book
    const B1='#3AA058',B2='#2A7A42',B3='#5ACA78',P='#FFF8E8',Gd='#F0C848';
    d.poly([[6,6],[24,3],[27,27],[9,30]],P); // pages
    d.poly([[4,5],[23,2],[25,26],[6,29]],B1);
    d.poly([[4,5],[7,5],[9,29],[6,29]],B2);
    for(const y of [8,26]) d.line(5,y,7,y,Gd);
    d.line(8,6,22,4,B3);
    // emblem: scalpel + gold frame
    d.poly([[11,9],[20,8],[21,17],[12,18]],B2); d.line(11,9,20,8,Gd); d.line(12,18,21,17,Gd); d.line(11,9,12,18,Gd); d.line(20,8,21,17,Gd);
    d.line(13,16,19,10,'#E0E4EC'); d.line(13,16,15,14,'#8A6A4A'); d.px(19,10,'#FFFFFF');
    // title bars
    d.line(11,21,21,20,Gd); d.line(12,23,19,22,Gd); d.px(15,25,Gd); d.px(16,25,Gd);
    d.vline(26,8,26,'#E8DCC4');
    d.outline('#163A22');
    // bookmark ribbon
    d.rect(18,28,2,3,'#E04858'); d.px(18,31,'#E04858'); d.px(19,30,'#B8303E');
    spark(d,28,4,'#F8E070');
  },
  'webber:c0': d=>{ // joe's bar at night
    d.grad(0,0,64,14,['#141830','#1C2240','#24304E']);
    starfield(d,10,['#8A9AC8'],10);
    // city back
    d.rect(0,8,10,14,'#2A3050'); d.rect(56,6,8,16,'#2A3050'); for(const [x,y] of [[2,10],[5,13],[58,9],[61,14]]) d.px(x,y,'#F8D878');
    // bar building
    d.rect(22,6,34,22,'#7A3A30'); for(let y=8;y<28;y+=3) for(let x=22+(y%2)*2;x<56;x+=4) d.px(x,y,'#5A2A24');
    d.rect(22,5,34,2,'#4A2420');
    // neon sign
    d.frame(27,8,24,6,'#FF5A8A'); d.rect(28,9,22,4,'#2A1420');
    d.stamp(30,10,['JJJ.OOO.EEE','..J.O.O.EE.','JJJ.OOO.EEE'],{J:'#7AF0FF',O:'#7AF0FF',E:'#7AF0FF'});
    d.stamp(43,9,['yyyy','ywwy','.yy.','.yy.'],{y:'#F8D048',w:'#FFFFFF'});
    // windows warm glow with silhouettes
    d.rect(25,17,12,8,'#FFC860'); d.rect(41,17,12,8,'#FFC860');
    d.stamp(27,20,['.k...k..','kkk.kkk.','kkk.kkk.'],{k:'#5A3020'}); d.stamp(43,20,['..k.....','.kkk..k.','.kkk.kkk'],{k:'#5A3020'});
    d.hline(25,36,21,'#E8A040'); d.hline(41,52,21,'#E8A040');
    d.rect(37,18,4,10,'#3A1A14'); d.px(40,23,'#F8D048');
    // wet street
    d.rect(0,28,64,12,'#2A2E44'); d.rect(0,22,22,6,'#343A54');
    d.rect(0,27,64,1,'#4A5070');
    for(let x=24;x<56;x+=2) d.px(x,30+(x%4==0?1:0),'#6A4A40'); d.hline(26,34,32,'#8A6A40'); d.hline(43,51,33,'#8A6A40'); d.hline(30,49,36,'#4A3A5A');
    // rain
    for(let i=0;i<30;i++){const x=d.ri(0,63),y=d.ri(0,36); d.px(x,y,'#5A6A9A'); d.px(x,y+1,'#5A6A9A')}
    // street lamp
    d.vline(59,14,30,'#5A6070'); d.rect(58,13,3,2,'#FFE8A0'); d.ell(59,31,3,1,'#5A5A70');
  },
  'webber:c1': d=>{ // boston medical conference
    d.grad(0,0,64,18,['#7AB8E8','#94C8EE','#B0D8F2']);
    // skyline
    for(const [x,w,h,c] of [[0,6,12,'#8A9AB0'],[5,5,16,'#7A8AA0'],[52,5,20,'#6A7A98'],[57,7,14,'#8A9AB0']]){d.rect(x,22-h,w,h,c); for(let y=22-h+2;y<22;y+=3) for(let i=x+1;i<x+w-1;i+=2) d.px(i,y,'#C8D8E8')}
    d.vline(54,0,2,'#6A7A98');
    // brick conference hall
    d.rect(18,8,34,18,'#B85A44'); for(let y=9;y<26;y+=2) for(let x=18+(y%4==1?0:2);x<52;x+=4) d.px(x,y,'#9A4434');
    d.poly([[16,8],[35,1],[54,8]],'#E8E0D0'); d.poly([[20,7],[35,3],[50,7]],'#C8BEB0');
    d.circ(35,5,1,'#F0C848');
    for(const x of [21,27,33,39,45]) {d.rect(x,10,3,14,'#F4ECDC'); d.vline(x+2,10,23,'#D0C8B8')}
    d.rect(16,24,38,2,'#D8D0C0'); d.rect(14,26,42,2,'#C8C0B0');
    // banners with caduceus
    for(const x of [24,42]){d.rect(x,11,4,9,'#2A5AB0'); d.vline(x+1,12,18,'#F0C848'); d.px(x+2,13,'#FFFFFF'); d.px(x,14,'#FFFFFF'); d.px(x+2,15,'#FFFFFF'); d.px(x,16,'#FFFFFF')}
    d.rect(31,15,8,9,'#4A2A20'); d.rect(32,16,6,8,'#FFD880'); d.vline(35,16,23,'#C8A050');
    // plaza
    d.rect(0,22,18,18,'#C8C0B4'); d.rect(0,28,64,12,'#C8C0B4');
    for(let x=0;x<64;x+=6) d.vline(x,28,39,'#B0A898'); d.hline(0,63,34,'#B0A898');
    for(let x=0;x<18;x+=6) d.vline(x,22,27,'#B0A898');
    // red line trail (freedom trail bricks)
    d.rect(24,36,40,2,'#A84434'); d.hline(24,63,36,'#C85A44');
    // lanyard / badge dropped
    d.stamp(46,30,['.bb.','bwwb','bwkb','bbbb'],{b:'#2A5AB0',w:'#FFFFFF',k:'#E04848'}); d.line(47,29,43,28,'#E04848');
    d.ell(14,6,4,1,'#FFFFFF');
  },
  'webber:c2': d=>{ // puget sound sunset
    d.grad(0,0,64,20,['#5A3A8A','#A04A8A','#E0607A','#F88A5A','#FFB858']);
    d.circ(40,19,6,'#FFE48A'); d.circ(40,19,4,'#FFF4C0');
    // olympic mountains silhouette
    d.poly([[0,20],[8,13],[14,17],[22,10],[30,16],[36,12],[46,17],[54,11],[64,16],[64,20]],'#6A3A6A');
    d.poly([[22,10],[20,12],[24,12]],'#F8C8D8'); d.poly([[54,11],[52,13],[56,13]],'#F8C8D8');
    d.rect(0,20,64,20,'#3A4A8A');
    for(let y=21;y<40;y+=2) {const w=Math.max(1,8-(y-20)/2); d.hline(40-w,40+w,y,'#F8A860')}
    for(let y=22;y<40;y+=3) for(let x=(y*7)%9;x<64;x+=11) d.hline(x,x+2,y,'#5A6AA8');
    // ferry
    d.rect(48,20,12,2,'#FFFFFF'); d.rect(50,18,8,2,'#E8E8F0'); d.rect(53,16,2,2,'#2A3A5A'); d.hline(48,59,22,'#2A3A5A'); for(let x=51;x<58;x+=2) d.px(x,19,'#FFE48A');
    // space needle silhouette at right edge
    d.vline(61,5,22,'#2A1A3A'); d.ell(61,7,3,1,'#2A1A3A'); d.px(61,3,'#2A1A3A'); d.px(61,4,'#2A1A3A'); d.line(59,22,61,10,'#2A1A3A'); d.line(63,22,61,10,'#2A1A3A');
    // wooden pier (pet ground)
    d.rect(0,27,36,4,'#9A6A44'); for(let x=0;x<36;x+=4) d.vline(x,27,30,'#7A5034'); d.hline(0,35,27,'#C08A5A');
    d.rect(0,31,36,9,'#3A4A8A'); for(const x of [3,13,23,33]) d.rect(x,31,2,9,'#5A3A2A');
    d.rect(0,33,24,7,'#7A5034'); d.hline(0,23,33,'#9A6A44');
    // birds
    d.stamp(10,4,['g...g','.g.g.'],{g:'#3A2A4A'}); d.stamp(18,7,['g.g','.g.'],{g:'#3A2A4A'});
    // seagull post with scrub hat? -> coffee cup on pier
    d.stamp(30,24,['ww','bb','bb'],{w:'#FFFFFF',b:'#3A5AB8'});
  },

  // ===== ICE KING =====
  'iceking:s0': d=>{ // gunter plushie
    const K1='#2A2A3A',K2='#40405A',W='#FFFFFF',W2='#E0E4F0',O='#F8A030';
    d.ell(16,18,10,11,K1); d.ell(16,9,7,6,K1); d.ell(15,8,4,3,K2);
    d.ell(16,20,7,8,W); d.ell(16,21,6,7,W2); d.ell(15,19,5,6,W);
    d.ell(16,9,5,3,W); d.px(13,8,K1); d.px(19,8,K1); d.px(13,7,W2);
    d.poly([[14,11],[18,11],[16,14]],O); d.hline(15,17,11,'#FFC860');
    // flippers
    d.poly([[6,14],[3,22],[7,21]],K1); d.poly([[26,14],[29,22],[25,21]],K1);
    d.ell(11,29,3,1,O); d.ell(21,29,3,1,O);
    // stitches
    for(let y=14;y<28;y+=2) d.px(16,y,'#B8BED0');
    d.outline('#101018');
    // tag
    d.rect(26,24,4,3,'#F8E8E8'); d.px(25,25,'#E05050'); d.px(27,25,'#E05050');
    d.px(4,4,'#A8E0FF'); tw(d,28,5,'#A8E0FF');
  },
  'iceking:s1': d=>{ // ice drumsticks
    const I1='#A8E4FF',I2='#6AC0F0',I3='#E8F8FF',I4='#4A98D0';
    seg(d,4,28,24,4,1.6,I2); seg(d,4,28,24,4,1,I1); d.line(5,26,23,4,I3);
    seg(d,28,28,8,4,1.6,I2); seg(d,28,28,8,4,1,I1); d.line(27,26,9,4,I3);
    d.circ(25,3,2,I1); d.circ(7,3,2,I1); d.px(24,2,'#FFFFFF'); d.px(6,2,'#FFFFFF');
    // grip wraps
    for(const t of [0.08,0.16,0.24]){d.line(4+20*t-2,28-24*t,4+20*t+2,28-24*t,I4); d.line(28-20*t+2,28-24*t,28-20*t-2,28-24*t,I4)}
    // icicles
    d.vline(15,18,21,I1); d.vline(17,17,20,I1);
    d.outline('#1E4A7A');
    // frost sparkles + snowflake
    d.stamp(13,24,['s.s.s','.sss.','sssss','.sss.','s.s.s'],{s:'#C8F0FF'}); d.px(15,26,'#FFFFFF');
    spark(d,28,14,'#C8F0FF'); spark(d,3,14,'#C8F0FF');
  },
  'iceking:s2': d=>{ // magic ice crown
    const G1='#F8D048',G2='#D8A020',G3='#FFF0A0',R='#E02040',R2='#FF7A8A';
    d.poly([[4,26],[4,10],[10,18],[16,5],[22,18],[28,10],[28,26]],G1);
    d.poly([[16,5],[22,18],[28,10],[28,26],[17,26]],G2);
    d.rect(4,22,25,5,G2); d.hline(4,28,22,G3); d.rect(4,26,25,1,'#B07A10');
    d.line(6,13,6,21,G3); d.line(16,8,12,17,G3);
    // three red gems
    for(const [x,y] of [[16,14],[7,18],[25,18]]){d.ell(x,y,2,2,R); d.px(x-1,y-1,R2)}
    for(let x=7;x<27;x+=4) d.ell(x,24,1,0,'#4AC0F0');
    d.outline('#5A3A08');
    // magic sparkles
    spark(d,3,4,'#8AE0FF'); spark(d,28,3,'#8AE0FF'); d.px(16,1,'#FFFFFF'); d.px(30,15,'#8AE0FF'); d.px(1,15,'#8AE0FF');
    d.stamp(12,28,['.b.b.b.b.'],{b:'#8AE0FF'});
  },
  'iceking:c0': d=>{ // ice kingdom castle party
    d.grad(0,0,64,22,['#8AB8E8','#A4CAF0','#C0DCF6']);
    for(let i=0;i<14;i++) d.px(d.ri(0,63),d.ri(0,20),'#FFFFFF');
    // ice mountain castle
    d.poly([[24,30],[44,2],[64,30]],'#7AC8F0'); d.poly([[44,2],[64,30],[48,30]],'#5AAADC');
    d.poly([[44,2],[40,8],[42,7],[44,9],[46,7],[48,8]],'#FFFFFF');
    d.poly([[30,30],[34,14],[38,30]],'#9AD8F8'); d.poly([[54,30],[58,16],[62,30]],'#9AD8F8');
    // windows + door
    for(const [x,y] of [[42,14],[46,14],[44,19],[34,22],[58,22]]) d.rect(x,y,2,2,'#2A5A9A');
    d.ell(44,28,3,4,'#2A4A80'); d.rect(41,28,7,4,'#2A4A80');
    // party bunting
    for(let x=28;x<62;x+=3){const y=17+Math.round(Math.abs(x-45)/6); d.poly([[x,y],[x+2,y],[x+1,y+2]],['#F05A7A','#F8D048','#5AC060'][x%3])}
    // snowy ground
    d.rect(0,28,64,12,'#F4F8FF'); d.rect(0,22,26,6,'#E8F0FC'); for(let x=0;x<26;x+=5) d.circ(x+2,23,3,'#F4F8FF');
    d.dither(0,38,64,2,'#DCE6F8','#F4F8FF');
    // penguins with party hats
    for(const x of [30,50,56]){d.stamp(x,30,['..p..','.ppp.','.kkk.','kkwkk','.kwk.','.kwk.','.o.o.'],{p:['#F05A7A','#F8D048','#5AC060'][x%3],k:'#2A2A3A',w:'#FFFFFF',o:'#F8A030'}); d.px(x+2,32,'#F8A030')}
    // confetti
    for(let i=0;i<18;i++) d.px(d.ri(26,63),d.ri(24,38),['#F05A7A','#F8D048','#5AC060','#8A6AF0'][i%4]);
    d.stamp(25,33,['.c.','ccc','ccc'],{c:'#F4F8FF'});
  },
  'iceking:c1': d=>{ // under princess's window
    d.grad(0,0,64,30,['#1A1440','#28205A','#382A70','#4A3480']);
    starfield(d,26,['#FFFFFF','#FFE0F0'],24);
    d.circ(10,6,4,'#FFF4D0'); d.circ(12,5,3,'#28205A');
    // candy castle tower
    d.rect(40,8,16,28,'#F8A8C8'); d.rect(50,8,6,28,'#E088B0');
    for(let x=40;x<56;x+=4) d.rect(x,6,2,2,'#F8A8C8');
    d.poly([[38,6],[48,-6],[58,6]],'#E05A98'); d.poly([[48,-6],[58,6],[52,6]],'#C04A80');
    d.circ(48,1,1,'#FFFFFF');
    // lit window with balcony
    d.ell(48,15,3,4,'#FFE48A'); d.rect(45,15,7,4,'#FFE48A'); d.vline(48,11,18,'#E0A050'); d.hline(45,51,15,'#E0A050');
    d.rect(43,19,11,2,'#F8C8DC'); for(let x=44;x<54;x+=2) d.px(x,21,'#C06090');
    d.ell(48,15,1,1,'#FFF8D0');
    // swirl candy stripes on tower
    for(let y=24;y<36;y+=4) d.line(40,y,55,y-3,'#FFFFFF');
    // bushes + ground
    d.rect(0,30,64,10,'#2A5A4A'); d.rect(0,36,64,4,'#22483C');
    for(const x of [30,36,58,62]) d.circ(x,30,3,'#3A7A5A');
    // music notes floating up
    d.stamp(26,18,['.nn','.n.','nn.','nn.'],{n:'#A8F0FF'}); d.stamp(33,10,['.nnn','.n.n','nn.n','nnnn'],{n:'#FFE0F0'}); d.stamp(38,24,['.n','.n','nn'],{n:'#A8F0FF'});
    // little drum + rose on ground
    d.ell(30,34,3,2,'#E04858'); d.ell(30,33,3,1,'#F4ECDC'); d.line(33,31,35,29,'#C8A060');
    d.px(37,35,'#E04858'); d.px(38,36,'#3A8A3A');
  },
  'iceking:c2': d=>{ // fionna & cake world (fanfic book)
    d.grad(0,0,64,22,['#FFC8E0','#FFD8E8','#FFE4F0','#FFF0F6']);
    cloud(d,12,4,5,'#FFFFFF'); cloud(d,58,8,4,'#FFFFFF');
    // cupcake hills
    d.ell(50,26,18,10,'#F8B0D0'); d.ell(50,22,14,6,'#FFFFFF'); for(let x=38;x<64;x+=4) d.circ(x,27,2,'#FFFFFF');
    d.ell(14,28,20,7,'#C8A0F0'); for(let x=0;x<34;x+=4) d.circ(x,23,2,'#FFFFFF');
    // big open book (story world)
    d.poly([[26,30],[36,27],[36,8],[26,11]],'#FFF8E8'); d.poly([[36,27],[46,30],[46,11],[36,8]],'#FFF0D8');
    d.vline(36,8,27,'#C8A880'); d.line(26,30,36,27,'#C87A4A'); d.line(36,27,46,30,'#C87A4A');
    for(let y=14;y<26;y+=3){d.line(28,y,34,y-2,'#D0B8A0'); d.line(38,y-2,44,y,'#D0B8A0')}
    d.stamp(29,12,['.ww.','wkkw','w..w'],{w:'#FFFFFF',k:'#3AA0F0'}); // fionna bunny hat hint
    d.stamp(39,12,['c..c','cccc','cyyc'],{c:'#F8B040',y:'#FFFFFF'}); // cake cat hint
    spark(d,24,6,'#FFE070'); spark(d,48,4,'#FFE070'); d.px(36,5,'#FFFFFF');
    // candy ground
    d.rect(0,30,64,10,'#F8E0C0'); d.rect(0,30,64,1,'#E8B890');
    for(let x=0;x<64;x+=6) d.px(x+(x%4),34+(x%3),['#F05A7A','#5AC0F0','#8AD060'][(x/6)%3]);
    // lollipop trees
    for(const [x,c] of [[56,'#5AC0F0'],[62,'#F8D048']]){d.vline(x,24,32,'#FFFFFF'); d.circ(x,21,3,c); d.ring(x,21,1.5,'#FFFFFF')}
    // candy cane
    d.vline(50,27,33,'#F05A7A'); d.px(51,26,'#F05A7A'); d.px(52,27,'#F05A7A'); d.px(50,29,'#FFFFFF'); d.px(50,31,'#FFFFFF');
    // crown left on book step
    d.stamp(28,33,['y.y.y','yyyyy','yrrry'],{y:'#F8D048',r:'#E02040'});
  },
  // ===== GEKKO =====
  'gekko:s0': d=>{ // LA taco truck taco
    const T1='#F2C25A',T2='#D89A34',T3='#FFE08A',M1='#8A4A2A',M2='#6A3418',L1='#7CD04A',L2='#4CA032',C1='#FFD030',R='#E8402A',W='#FFF4E0';
    // filling peeking over the shell
    for(const [x,c] of [[6,L1],[10,L2],[15,L1],[20,L2],[25,L1]]) d.circ(x,11,3,c);
    d.px(5,9,L2); d.px(14,8,L2); d.px(24,8,L2);
    d.ell(16,13,11,2,M1); for(const x of [8,13,18,23]) d.px(x,12,M2);
    for(const x of [9,17,24]){d.rect(x,10,2,2,R); d.px(x,10,'#FF8070')}
    for(const x of [6,12,15,20,26]) {d.px(x,13,C1); d.px(x+1,14,C1)}
    d.px(13,9,W); d.px(21,9,W);
    // half-moon tortilla (curved side down)
    for(let y=13;y<=27;y++) for(let x=2;x<=30;x++){const q=((x-16)/14.4)**2+((y-13)/14.4)**2; if(q<=1) d.px(x,y,q>.75?T2:T1)}
    d.hline(3,29,13,T3); d.hline(4,28,14,T1);
    for(const [x,y] of [[9,18],[14,22],[20,19],[23,16],[11,24],[18,25],[6,16]]) {d.px(x,y,'#C07A28'); d.px(x+1,y,T3)}
    // bite taken (split with Wingman)
    for(let y=8;y<=22;y++) for(let x=24;x<32;x++) if(((x-31)**2+(y-15)**2)<=14) d.clear(x,y);
    d.outline('#4A2A10');
    // little green heart (Wingman)
    d.stamp(25,1,['.g.g.','ggggg','.ggg.','..g..'],{g:'#6CE05A'}); d.px(26,2,'#C8FFB0');
    d.px(2,5,'#FFE070'); d.px(4,3,'#FFE070'); d.px(29,27,'#7CD04A'); d.px(30,28,'#4CA032');
  },
  'gekko:s1': d=>{ // mosh globule (sleeping buddy orb)
    const G0='#2E8A3A',G1='#4CC04A',G2='#8CEA5A',G3='#D8FF9A',P='#6A3AC0';
    d.ell(16,26,11,3,'#A8D0A0');
    d.circ(16,16,11,G0); d.circ(15,15,10,G1); d.circ(14,13,7,G2); d.circ(12,10,3,G3); d.px(11,9,'#FFFFFF'); d.px(12,9,'#FFFFFF');
    // swirl veins
    d.line(7,19,11,23,G0); d.line(22,7,25,11,G0); d.px(24,20,G0); d.px(25,19,G0);
    // sleepy face
    d.stamp(10,17,['kk...kk','.......','..k.k..','...k...'],{k:'#1E4A20'});
    d.px(9,19,'#F890A0'); d.px(21,19,'#F890A0');
    // little nubs
    d.circ(6,24,2,G1); d.circ(26,24,2,G1);
    d.outline('#163A18');
    // zzz
    d.stamp(23,1,['ppp','..p','.p.','ppp'],{p:P}); d.stamp(28,6,['pp','.p','pp'],{p:'#9A70E0'});
    d.px(3,6,G2); d.px(2,12,G3); d.px(29,15,G2);
  },
  'gekko:s2': d=>{ // radianite crystal cluster
    const A='#38E0D0',B='#14A8B0',C='#0A6A80',H='#C8FFF4',P='#F060B0';
    // big central crystal
    d.poly([[16,1],[22,9],[21,27],[11,27],[10,9]],B); d.poly([[16,1],[16,27],[11,27],[10,9]],A);
    d.line(16,2,16,26,H); d.line(12,9,12,22,H);
    // side crystals
    d.poly([[6,10],[10,15],[10,28],[4,28],[3,15]],C); d.poly([[6,10],[6,28],[4,28],[3,15]],B); d.px(5,14,H);
    d.poly([[26,8],[29,15],[28,28],[22,28],[22,14]],C); d.poly([[26,8],[25,28],[22,28],[22,14]],B); d.line(24,13,24,22,A);
    d.poly([[19,17],[24,22],[23,29],[17,29]],A); d.line(19,19,19,27,H);
    // rock base
    d.ell(16,29,13,2,'#5A4A6A'); d.ell(14,29,9,1,'#7A6A8A');
    d.outline('#0E2A3A');
    // pink inner glow + sparkles
    d.px(15,13,P); d.px(14,16,P); d.px(18,11,'#FFB0E0');
    spark(d,28,3,'#7AF8E8'); spark(d,3,5,'#F890D0'); d.px(30,20,'#FFFFFF'); d.px(1,22,'#7AF8E8');
  },
  'gekko:c0': d=>{ // LA mural alley at sunset
    d.grad(0,0,64,16,['#5A3A8A','#A84A8A','#F0707A','#FFA060','#FFD07A']);
    d.circ(30,15,5,'#FFE8A0'); d.circ(30,15,3,'#FFF6D0');
    // distant city
    for(const [x,w,h] of [[0,6,6],[7,5,9],[40,6,8],[47,4,5],[53,7,10],[58,6,7]]) d.rect(x,16-h,w,h,'#4A2A5A');
    // palm trees
    for(const [x,h] of [[24,14],[36,17]]){d.vline(x,16-h,16,'#3A2040'); d.vline(x+1,16-h+2,16,'#3A2040');
      for(const [a,b] of [[-4,1],[4,1],[-3,-1],[3,-1],[-2,2],[2,2]]) d.line(x,16-h,x+a,16-h+b+1,'#3A2040')}
    // left building wall (plain), right mural wall
    d.rect(0,10,22,22,'#B86A50'); for(let y=12;y<32;y+=3) for(let x=(y%2)*2;x<22;x+=5) d.hline(x,x+3,y,'#A05840');
    d.rect(38,6,26,26,'#E8D0B0'); d.frame(38,6,26,26,'#C0A080');
    // mural: big green creature face with heart + rainbow stripe
    d.rect(39,7,24,24,'#4ABCE0'); for(let i=0;i<5;i++) d.hline(39,62,26+i,['#F04A6A','#F8A040','#F8E050','#6AD060','#5A80F0'][i]);
    d.circ(50,16,7,'#6CE05A'); d.circ(50,15,6,'#8AF07A');
    d.circ(47,14,2,'#FFFFFF'); d.circ(53,14,2,'#FFFFFF'); d.px(47,14,'#1A1A2A'); d.px(53,14,'#1A1A2A');
    d.hline(48,52,19,'#2A6A2A'); d.px(47,18,'#2A6A2A'); d.px(53,18,'#2A6A2A');
    d.stamp(41,8,['.c.c.','ccccc','.ccc.','..c..'],{c:'#FF6AA0'}); d.stamp(57,20,['y.y','.y.','y.y'],{y:'#FFE050'});
    // alley floor
    d.rect(0,32,64,8,'#6A5A6A'); d.rect(22,26,16,6,'#7A6A70'); d.poly([[22,32],[38,32],[44,40],[16,40]],'#8A7A80');
    d.rect(0,30,64,2,'#5A4A5A'); d.hline(0,63,32,'#9A8A8A');
    for(let x=4;x<64;x+=9) d.hline(x,x+3,36,'#5A4A5A');
    // dumpster + small heart bubble near mural (Wingman in love)
    d.rect(23,24,9,8,'#3A8A6A'); d.rect(22,23,11,2,'#2A6A50'); d.hline(24,30,27,'#2A6A50');
    d.stamp(34,14,['.p.p.','ppppp','.ppp.','..p..'],{p:'#FF4A8A'}); d.px(35,15,'#FFC0D8');
    // string lights
    for(let x=0;x<38;x++){const y=4+Math.round(Math.abs(Math.sin(x/6))*3); d.px(x,y,'#3A2040'); if(x%4===0) d.px(x,y+1,['#FFE070','#FF8AB0','#8AF07A'][x/4%3])}
  },
  'gekko:c1': d=>{ // Bind teleporter (desert, moroccan)
    d.grad(0,0,64,18,['#F8B860','#FAC878','#FCD898','#FDE8B8']); d.rect(0,18,64,12,'#F0C890');
    d.circ(54,5,3,'#FFF4D0');
    // dunes back
    d.ell(10,19,16,4,'#E8B070'); d.ell(56,19,14,3,'#E0A060');
    // sandstone buildings
    d.rect(26,6,38,24,'#D89058'); d.rect(26,6,38,2,'#B87040');
    for(let x=27;x<64;x+=4) d.rect(x,4,2,2,'#D89058'); // crenellation
    d.rect(56,0,6,8,'#C88048'); d.rect(56,0,6,1,'#A86030'); d.ell(59,0,3,2,'#40A0A0');
    // moroccan arch windows with teal tile
    for(const x of [29,55]){d.rect(x,12,6,8,'#5A3020'); d.ell(x+2.5,12,3,2,'#5A3020'); d.hline(x-1,x+6,20,'#30A0A8')}
    // teleporter: big arch with swirling portal
    d.rect(36,9,18,21,'#A86A38'); d.ell(45,11,9,4,'#A86A38');
    d.rect(38,13,14,17,'#2A1A4A'); d.ell(45,13,7,4,'#2A1A4A');
    d.ell(45,20,6,8,'#5A3AC0'); d.ell(45,20,4,6,'#8A5AF0'); d.ell(45,20,2,4,'#C0A0FF'); d.ell(45,20,1,2,'#FFFFFF');
    for(let a=0;a<12;a++){const t=a*0.55; d.px(45+Math.round(Math.cos(t)*(1+a*.45)),20+Math.round(Math.sin(t)*(1.5+a*.55)),'#40F0E0')}
    d.hline(36,53,9,'#30A0A8'); d.hline(36,53,30,'#30A0A8'); for(let x=37;x<53;x+=3) d.px(x,9,'#F8D060');
    // ground: sand tiles
    d.rect(0,30,64,10,'#E8BC80'); d.rect(0,30,64,1,'#C89058');
    for(let y=33;y<40;y+=3) for(let x=(y%2)*3;x<64;x+=6) d.px(x,y,'#D0A068');
    // dizzy stars near portal + pots
    for(const [x,y] of [[34,24],[56,22],[38,6]]) d.stamp(x-1,y-1,['.s.','sss','.s.'],{s:'#FFE050'});
    d.ell(59,33,3,3,'#B05A30'); d.rect(58,29,3,2,'#B05A30'); d.vline(59,25,29,'#4A9A40'); d.px(58,26,'#6AC050'); d.px(60,27,'#6AC050');
    d.ell(27,34,2,2,'#C06A38'); d.px(27,31,'#C06A38');
  },
  'gekko:c2': d=>{ // Icebox base snowball fight
    d.grad(0,0,64,28,['#9AB8D8','#B0CCE4','#C8DCEC','#DCE8F2']); d.rect(0,18,64,10,'#C8D6E8');
    // mountains
    d.poly([[0,18],[10,6],[20,18]],'#8AA0C0'); d.poly([[10,6],[13,10],[8,10]],'#FFFFFF');
    d.poly([[14,18],[27,4],[40,18]],'#7A90B0'); d.poly([[27,4],[31,9],[23,9]],'#FFFFFF');
    // crane
    d.vline(58,2,26,'#E8A030'); d.vline(59,2,26,'#C88020'); d.hline(36,63,3,'#E8A030'); for(let x=37;x<63;x+=3) d.px(x,4,'#C88020');
    d.vline(42,4,10,'#5A5A6A'); d.rect(40,10,5,2,'#5A5A6A');
    // stacked containers
    const box=(x,y,w,c,s)=>{d.rect(x,y,w,6,c); for(let i=x+1;i<x+w;i+=2) d.vline(i,y+1,y+4,s); d.frame(x,y,w,6,s)};
    box(30,22,14,'#D84A3A','#A8302A'); box(44,22,14,'#3A7AD0','#2A58A0'); box(36,16,14,'#3AA870','#2A7850'); box(50,16,10,'#F0B030','#C08020');
    d.hline(30,57,22,'#FFFFFF'); d.hline(36,59,16,'#FFFFFF');
    // snow ground
    d.rect(0,28,64,12,'#F4F8FC'); d.rect(0,28,64,1,'#DCE8F4'); d.ell(48,30,18,2,'#F4F8FC');
    for(let x=2;x<64;x+=7) d.hline(x,x+2,34+(x%3),'#C8D8EC');
    // snow fort with snowball pile
    d.rect(36,30,18,5,'#E4EEF8'); for(let x=36;x<54;x+=4) d.rect(x,29,2,1,'#E4EEF8'); d.frame(36,30,18,5,'#B8CCE4');
    for(const [x,y] of [[25,34],[28,34],[26,32],[31,35]]){d.circ(x,y,1,'#FFFFFF'); d.px(x+1,y+1,'#B8CCE4')}
    // flying snowballs with motion lines
    for(const [x,y] of [[22,13],[31,9]]){d.circ(x,y,1.2,'#FFFFFF'); d.hline(x+3,x+6,y,'#E0ECF8'); d.hline(x+3,x+5,y+1,'#E0ECF8')}
    d.circ(45,12,1.5,'#FFFFFF'); d.stamp(43,10,['b...b','.....','b...b'],{b:'#F4F8FC'});
    // falling snow
    for(let i=0;i<22;i++) d.px(d.ri(0,63),d.ri(0,26),'#FFFFFF');
    // little green radianite flag on fort
    d.vline(52,22,29,'#5A5A6A'); d.rect(53,22,4,3,'#6CE05A');
  },
  // ===== THOR =====
  'thor:s0': d=>{ // smashed mug ("Another!")
    const M1='#ECE4D4',M2='#C8BCA8',M3='#FFFFFF',B='#4A7AC0',BD='#2A5090',L='#D8902A',L2='#F0B848',F='#FFF4D0',K='#6A5A4A';
    // puddle of spilled mead
    d.ell(15,28,13,2.5,L); d.ell(12,28,7,1,L2);
    // remaining lower half of tankard, jagged top
    d.poly([[5,27],[5,14],[8,10],[10,13],[12,8],[15,12],[17,9],[19,13],[21,11],[21,27]],M1);
    for(let y=8;y<28;y++){ if(d.get(20,y)) {d.px(20,y,M2); d.px(19,y,M2)} if(d.get(5,y)) d.px(5,y,M2); if(d.get(7,y)) d.px(7,y,M3)}
    d.hline(5,21,26,M2); d.hline(5,21,27,M2);
    // dark inside + mead with foam visible through break
    d.poly([[7,15],[9,12],[11,14],[12,11],[15,14],[17,12],[19,15]],'#7A4A20'); d.hline(8,18,15,L); d.hline(9,17,16,L2);
    d.circ(10,14,1,F); d.circ(14,13,1.2,F); d.px(17,14,F);
    // blue bands
    d.hline(5,21,19,B); d.hline(5,21,20,BD); d.hline(5,21,23,B);
    // crack
    d.line(13,17,11,21,K); d.line(11,21,13,24,K); d.px(14,18,K);
    // snapped handle on the floor
    d.ring(26,21,3.5,M2); d.ring(26,21,2.5,M1); for(let y=16;y<=26;y++) for(let x=21;x<=25;x++) if(d.get(x,y)===M1||d.get(x,y)===M2) d.clear(x,y);
    d.px(28,19,M3);
    // flying shards
    d.poly([[1,8],[4,6],[4,10]],M1); d.poly([[23,3],[27,4],[24,7]],M1); d.px(24,5,B); d.poly([[25,27],[29,26],[27,29]],M2);
    d.outline('#3A2A20');
    // foam splash + impact stars
    d.circ(12,4,1.5,F); d.px(9,2,F); d.px(16,3,F); d.px(15,1,F);
    d.stamp(28,10,['.y.','yyy','.y.'],{y:'#FFE060'}); d.px(1,15,'#FFE060'); d.px(2,17,'#FFE060');
  },
  'thor:s1': d=>{ // Bifrost shard
    const bands=['#FF5A6A','#FF9A3A','#FFE04A','#5AE06A','#4AB0FF','#8A6AF0'];
    // crystal shard shape
    d.poly([[14,1],[24,9],[22,26],[13,30],[7,20],[9,8]],'#FFFFFF');
    for(let y=0;y<32;y++) for(let x=0;x<32;x++) if(d.get(x,y)) d.px(x,y,bands[Math.min(5,Math.max(0,Math.floor((x+y-12)/6.5)))]);
    // facets: light left face, dark right face
    d.line(14,1,15,29,'#FFFFFF'); d.line(14,2,10,9,'#FFF4FF');
    for(let y=0;y<32;y++) for(let x=0;x<32;x++){const c=d.get(x,y); if(c&&x>15+(y-1)*0.25&&(x+y)%2) d.px(x,y,{'#FF5A6A':'#D83A5A','#FF9A3A':'#D8702A','#FFE04A':'#D0B030','#5AE06A':'#38B050','#4AB0FF':'#3080D0','#8A6AF0':'#6448C0'}[c]||c)}
    d.line(15,6,15,25,'#FFFFFF');
    d.outline('#3A2A6A');
    spark(d,4,4,'#9AE8FF'); spark(d,28,22,'#FFE04A'); d.px(27,3,'#FFFFFF'); d.px(3,26,'#FF9AD0'); d.px(5,28,'#9AE8FF');
  },
  'thor:s2': d=>{ // mini mjolnir
    const S1='#B8C0CC',S2='#8A94A4',S3='#E8ECF4',S4='#5A6474',W1='#8A5A34',W2='#5A3A20',G='#E8C04A';
    // head
    d.rect(4,4,24,13,S2); d.rect(5,5,22,11,S1); d.rect(5,5,22,3,S3); d.rect(4,14,24,3,S4);
    d.rect(4,4,2,13,S2); d.rect(26,4,2,13,S2);
    // celtic knot hint on face
    d.ring(16,10,3,S4); d.px(16,10,S4); d.px(13,7,S3);
    // handle with leather wrap
    d.rect(14,17,4,11,W1); for(let y=18;y<27;y+=2) d.hline(14,17,y,W2);
    d.rect(13,27,6,2,S2); d.hline(13,18,27,S1);
    // wrist strap loop
    d.ring(16,30,1.6,W2);
    d.outline('#20242E');
    // lightning crackles
    d.stamp(0,19,['..y','.y.','yy.','.y.','y..'],{y:'#8AE0FF'}); d.stamp(27,17,['y..','.y.','.yy','.y.','..y'],{y:'#8AE0FF'});
    d.px(1,1,'#FFFFFF'); d.px(30,1,'#FFE060'); d.px(30,2,'#FFE060');
  },
  'thor:c0': d=>{ // New Mexico desert crater
    d.grad(0,0,64,20,['#3A8AE0','#5AA0E8','#7AB8F0','#A0D0F8']);
    // mesas
    d.poly([[30,18],[34,8],[50,8],[54,18]],'#C86A3A'); d.rect(34,8,16,2,'#E08A50'); d.hline(32,52,13,'#A85030');
    d.poly([[52,18],[55,12],[62,12],[64,18]],'#B85A30'); d.poly([[0,18],[2,12],[12,12],[15,18]],'#D07A48');
    d.rect(0,18,64,22,'#E8B878'); d.rect(0,18,64,2,'#D8A060');
    for(let i=0;i<30;i++) d.px(d.ri(0,63),d.ri(21,39),'#D8A468');
    // crater center-right: raised rim then deep bowl
    d.ell(42,28,17,6,'#F0C890'); d.ell(42,28,14,4,'#C08048'); d.ell(42,29,11,3,'#9A6034'); d.ell(42,30,7,1.5,'#7A4A28');
    d.hline(30,54,24,'#F8DCA8');
    for(const [x,y] of [[24,30],[59,29],[28,35],[57,35]]){d.px(x,y,'#9A6034'); d.px(x+1,y,'#C08048')}
    // little lightning-scorched center
    d.stamp(40,29,['..y.','.yy.','yy..','.y..'],{y:'#FFE060'});
    // cactus
    for(const [x,h] of [[60,10],[25,7]]){d.rect(x,32-h,3,h,'#3A9A4A'); d.vline(x+1,32-h,31,'#5AC060'); d.rect(x-2,28-h/2,2,2,'#3A9A4A'); d.vline(x-2,25-h/2,28-h/2,'#3A9A4A'); d.rect(x+3,29-h/2,2,2,'#3A9A4A'); d.vline(x+4,26-h/2,29-h/2,'#3A9A4A')}
    // warning cones around crater
    for(const x of [30,52]){d.stamp(x,31,['.o.','.w.','ooo'],{o:'#F06A2A',w:'#FFFFFF'})}
    // sun + bird
    d.circ(10,4,3,'#FFF6C0'); d.circ(10,4,2,'#FFFFFF');
    d.stamp(20,5,['b.b','.b.'],{b:'#2A3A6A'});
  },
  'thor:c1': d=>{ // Asgard feast hall
    d.rect(0,0,64,40,'#5A3A2A');
    // back wall golden panels
    d.grad(0,0,64,26,['#8A5A2A','#A06A30','#B87C3A','#C88C44']);
    for(const x of [2,30,58]){d.rect(x,0,5,28,'#E8C050'); d.vline(x+1,0,27,'#FFE890'); d.vline(x+4,0,27,'#B08A30')}
    // arched window with golden city
    d.rect(39,3,14,14,'#6AB0F0'); d.ell(46,3,7,3,'#6AB0F0'); d.ell(46,3,7,3,'#E8C050'); d.ell(46,3,6,2,'#8AC8F8');
    d.frame(38,2,16,16,'#E8C050'); for(const [x,h] of [[40,6],[43,9],[46,11],[49,7],[51,5]]) d.rect(x,17-h,2,h,'#F8D070');
    // banners
    for(const x of [11,22]){d.rect(x,2,5,12,'#C02A2A'); d.poly([[x,14],[x+5,14],[x+2.5,17]],'#C02A2A'); d.vline(x+2,4,12,'#F8D050'); d.hline(x-1,x+5,2,'#E8C050')}
    // floor
    d.rect(0,28,64,12,'#7A4A2A'); for(let x=0;x<64;x+=8) d.vline(x,28,39,'#5A3418'); d.hline(0,63,28,'#E8C050');
    // long table (right side)
    d.rect(26,24,38,4,'#8A5428'); d.hline(26,63,24,'#B07038'); d.rect(28,28,2,8,'#5A3418'); d.rect(60,28,2,8,'#5A3418');
    // mountain of meat
    d.ell(40,21,8,4,'#C05A2A'); d.ell(40,19,6,3,'#D87A3A'); d.ell(38,17,3,2,'#E89A50');
    for(const [x,y] of [[34,20],[45,18],[41,15]]){d.line(x,y,x+(x>40?2:-2),y-2,'#F8F0E0'); d.px(x+(x>40?3:-3),y-3,'#FFFFFF')}
    // goblets + fruit
    for(const x of [30,52,58]){d.rect(x,19,3,3,'#E8C050'); d.px(x+1,22,'#E8C050'); d.hline(x,x+2,23,'#E8C050'); d.px(x,19,'#FFF0A0')}
    d.circ(55,22,1.3,'#7AC040'); d.circ(49,22,1.3,'#C03050');
    // Loki as green snake on the table
    d.line(46,23,50,23,'#3AA040'); d.px(47,22,'#3AA040'); d.px(48,22,'#3AA040'); d.px(51,22,'#3AA040'); d.px(52,21,'#5AD060'); d.px(52,22,'#E8C050');
    // torches
    for(const x of [8,34]){d.rect(x,10,2,4,'#5A3418'); d.ell(x+.5,8,1,2,'#FF9A2A'); d.px(x,8,'#FFE060')}
  },
  'thor:c2': d=>{ // Nidavellir forge around a dying star
    d.rect(0,0,64,40,'#0E0A24');
    for(let i=0;i<40;i++) d.px(d.ri(0,63),d.ri(0,30),['#FFFFFF','#8A8AD0','#C8B0FF'][i%3]);
    d.ell(14,10,9,4,'#2A1A4A'); d.ell(52,30,10,3,'#2A1A4A');
    // star core
    d.circ(42,16,9,'#FF6A1A'); d.circ(42,16,7,'#FFA02A'); d.circ(42,16,5,'#FFD860'); d.circ(42,16,3,'#FFFFFF');
    // giant metal ring (tilted ellipse)
    for(let a=0;a<360;a+=2){const t=a*Math.PI/180, x=42+Math.cos(t)*19, y=16+Math.sin(t)*6; if(Math.sin(t)<0&&Math.abs(Math.cos(t))<.55) continue; d.circ(x,y,1.3,'#6A7488'); d.px(x,y-1,'#A8B0C4')}
    // ring front pieces over star
    for(let a=10;a<170;a+=2){const t=a*Math.PI/180; d.circ(42+Math.cos(t)*19,16+Math.sin(t)*6,1.3,'#7A8498'); d.px(42+Math.cos(t)*19,16+Math.sin(t)*6-1,'#C0C8D8')}
    // molten stream to axe mold
    d.line(42,22,48,31,'#FF8A2A'); d.line(43,22,49,31,'#FFD040');
    // forge platform (bottom)
    d.rect(0,31,64,9,'#3A3A4A'); d.hline(0,63,31,'#7A7A8A'); for(let x=0;x<64;x+=6) d.vline(x,32,39,'#2A2A38');
    // Stormbreaker glowing on anvil
    d.rect(44,32,12,3,'#5A5A6A'); d.rect(46,35,8,4,'#4A4A58');
    d.line(42,31,56,25,'#8A5A34'); d.poly([[52,22],[58,22],[60,27],[55,29]],'#C8D0E0'); d.line(53,23,57,28,'#FFFFFF');
    d.stamp(58,19,['.y.','yyy','.y.'],{y:'#8AE0FF'}); d.stamp(38,27,['y.','.y'],{y:'#8AE0FF'});
    // sparks
    for(const [x,y] of [[50,30],[47,28],[57,31],[60,30]]) d.px(x,y,'#FFD040');
  },
  // ===== KRABS =====
  'krabs:s0': d=>{ // framed first dollar
    const F1='#C8902A',F2='#A06A1A',F3='#F0C860',G1='#9AC890',G2='#6AA060',G3='#C8E8B8',GD='#3A6A3A';
    d.rect(1,5,30,22,F2); d.rect(2,6,28,20,F1); d.hline(2,29,6,F3); d.vline(2,6,25,F3);
    for(const [x,y] of [[1,5],[30,5],[1,26],[30,26]]) {d.px(x,y,F3)} // corner gems
    d.rect(4,8,24,16,'#5A2A1A'); // mat
    // dollar bill
    d.rect(5,9,22,14,G1); d.frame(5,9,22,14,G2); d.frame(6,10,20,12,G3);
    d.ell(16,16,4,4,G3); d.ell(16,16,3,3,G2); d.ell(16,15,2,2,G3); d.hline(14,18,18,GD); // portrait
    d.stamp(7,11,['.1','11','.1','.1','111'],{1:GD}); d.stamp(23,17,['.1','11','.1','.1','111'],{1:GD});
    d.stamp(8,18,['gg','gg'],{g:G2}); d.stamp(22,11,['gg','gg'],{g:G2});
    // glass glare
    d.line(8,10,12,10,'#FFFFFF'); d.line(20,21,24,21,'#E8FFF0');
    // hanging nail + string
    d.line(16,1,6,5,'#5A4A3A'); d.line(16,1,25,5,'#5A4A3A'); d.px(16,1,'#9A9AA8');
    d.outline('#3A2410');
    // "hands off" claw-sparkle
    spark(d,28,29,'#FFE060'); d.px(2,29,'#FFE060'); d.px(3,30,'#F0C860');
  },
  'krabs:s1': d=>{ // coin found on the road
    const C1='#F0C030',C2='#C89018',C3='#FFE88A',C4='#8A6010',DT='#8A6A4A';
    d.ell(16,17,13,12,C4); d.ell(15,16,12,11,C2); d.ell(15,15,11,10,C1); d.ell(15,15,8,7,C2); d.ell(15,15,7,6,C1);
    // dollar sign
    d.stamp(12,8,['..s..','.ssss','s.s..','.sss.','..s.s','ssss.','..s..'],{s:C4}); d.stamp(13,9,['h'],{h:C3});
    // rim ticks
    for(let a=0;a<360;a+=30){const t=a*Math.PI/180; d.px(15+Math.cos(t)*10,15+Math.sin(t)*9,C3)}
    // shine
    d.line(8,8,10,6,'#FFFFFF'); d.px(7,10,'#FFFFFF'); d.px(9,7,C3);
    // dirt smudges (from the road)
    d.px(20,22,DT); d.px(21,22,DT); d.px(22,21,DT); d.px(9,21,DT); d.px(18,24,DT);
    d.outline('#4A3008');
    spark(d,27,4,'#FFF0A0'); d.px(3,4,'#FFE060'); d.px(29,26,'#FFE060');
    // little pebbles
    d.circ(4,28,1,'#9A8A7A'); d.px(7,30,'#7A6A5A'); d.px(26,30,'#9A8A7A');
  },
  'krabs:s2': d=>{ // "secret formula" blank note + peeking Plankton
    const P1='#F8EED8',P2='#E0D0B0',P3='#C0A880',R='#C02A2A';
    // paper sheet slightly curled
    d.poly([[5,4],[24,3],[26,26],[7,28]],P1);
    d.line(24,3,26,26,P2); d.line(7,28,26,26,P2);
    d.ell(6,16,2,12,P2); d.ell(5,16,1,11,P1); // left roll
    d.ell(25,15,2,11,P2); d.ell(26,15,1,10,P3);
    // faint fold lines (blank!)
    d.line(8,15,24,14,P2);
    // big wax seal (krusty-red)
    d.circ(15,21,3,R); d.circ(15,21,2,'#E04848'); d.px(14,20,'#FF9A8A');
    // tiny question mark where formula should be
    d.stamp(14,8,['qq.','..q','.q.','...','.q.'],{q:P3});
    d.outline('#5A4020');
    // plankton peeking from the corner
    d.stamp(24,21,['k...k','.k.k.','.ggg.','gwwwg','gwrwg','gwwwg','.ggg.','g.g.g'],{k:'#2A6A30',g:'#3AA048',w:'#FFFFFF',r:'#D02020'});
    spark(d,3,3,'#FFE060');
  },
  'krabs:c0': d=>{ // Krusty Krab safe
    // wooden ship wall
    d.rect(0,0,64,30,'#A8703A'); for(let y=0;y<30;y+=5){d.hline(0,63,y,'#7A4A22'); for(let x=(y*3)%11;x<64;x+=11) d.vline(x,y+1,y+4,'#8A5A2A')}
    // portholes with sea view
    for(const x of [12,30]){d.circ(x,10,5,'#C89A40'); d.circ(x,10,4,'#2A8AC0'); d.circ(x,10,3,'#4AB0E0'); d.px(x-2,8,'#FFFFFF'); d.px(x+1,12,'#A8E0F8'); d.circ(x,10,1,'#4AB0E0')}
    d.px(29,11,'#F0A0C0'); d.px(31,9,'#F0A0C0'); // flower clouds
    // anchor decor
    d.vline(22,4,13,'#5A5A6A'); d.hline(20,24,6,'#5A5A6A'); d.line(18,11,22,14,'#5A5A6A'); d.line(26,11,22,14,'#5A5A6A');
    // floor planks
    d.rect(0,30,64,10,'#8A5A2A'); d.hline(0,63,30,'#5A3418'); for(let y=33;y<40;y+=3) d.hline(0,63,y,'#7A4A22');
    // big safe
    d.rect(38,8,24,25,'#5A6474'); d.rect(39,9,22,23,'#7A8494'); d.rect(41,11,18,19,'#8A94A4'); d.frame(41,11,18,19,'#4A5464');
    d.circ(50,20,5,'#5A6474'); d.circ(50,20,4,'#C8D0DC'); d.circ(50,20,1,'#4A5464');
    for(let a=0;a<8;a++){const t=a*Math.PI/4; d.px(50+Math.round(Math.cos(t)*3),20+Math.round(Math.sin(t)*3),'#4A5464')}
    d.rect(56,17,2,6,'#E8C050'); d.rect(42,12,2,2,'#E8C050'); d.rect(42,27,2,2,'#E8C050'); // handle + hinges
    d.rect(40,33,4,2,'#3A4454'); d.rect(56,33,4,2,'#3A4454');
    // money bags + coin piles
    d.ell(33,33,4,4,'#C8A868'); d.rect(32,28,3,2,'#A88848'); d.stamp(32,32,['.s.','sss','.s.'],{s:'#4A8A3A'});
    for(const [x,y] of [[26,36],[28,36],[27,35],[60,37],[36,37]]) {d.rect(x,y,2,1,'#F0C030'); d.px(x,y,'#FFE88A')}
    // "3x checked" tally marks on wall
    for(let i=0;i<3;i++) d.vline(54+i*2,2,5,'#FFFFFF');
  },
  'krabs:c1': d=>{ // Glove World (underwater amusement park)
    d.grad(0,0,64,24,['#3AB0D8','#5AC4E0','#7AD4E8','#9AE0EE']);
    // bikini-bottom flower clouds
    for(const [x,y,c] of [[6,4,'#A8E8F8'],[22,8,'#C8F0A0'],[56,3,'#F8C8E8']]) d.stamp(x-2,y-2,['.c.c.','ccccc','.cwc.','ccccc','.c.c.'],{c,w:'#FFFFFF'});
    // ferris wheel
    d.ring(30,13,9,'#F04A6A'); d.ring(30,13,8,'#FFFFFF'); for(let a=0;a<8;a++){const t=a*Math.PI/4; d.line(30,13,30+Math.cos(t)*8,13+Math.sin(t)*8,'#F8B0C0'); d.rect(29+Math.round(Math.cos(t)*9),12+Math.round(Math.sin(t)*9),2,2,['#F8D040','#4AB0F0','#6AD060'][a%3])}
    d.line(26,24,30,13,'#C83A5A'); d.line(34,24,30,13,'#C83A5A');
    // roller coaster track on the right
    for(let x=40;x<64;x++){const y=Math.round(10+Math.sin((x-40)/4)*5); d.px(x,y,'#F8D040'); d.px(x,y+1,'#C8A020'); if(x%4===0) d.vline(x,y+2,24,'#E8B030')}
    // giant glove arch gate (center)
    d.rect(36,14,4,12,'#F8F8F8'); d.rect(52,14,4,12,'#F8F8F8');
    const glove=(c,o)=>{d.ell(46,12,8+o,5+o,c); for(const x of [40,44,48,52]) d.ell(x,6,1.5+o,3.5+o,c); d.ell(56,13,2+o,1.5+o,c); d.line(55,13,58,10,c)};
    glove('#6A6A9A',1); glove('#FFFFFF',0); d.ell(46,13,7,3,'#F0F0FA'); d.hline(39,53,15,'#C8C8E0'); for(const x of [41,45,49]) d.vline(x,9,13,'#C8C8E0');
    d.rect(40,16,12,10,'#1A6A9A');
    // ticket booth with high price
    d.rect(57,18,7,8,'#F04A6A'); d.rect(58,20,5,3,'#FFE860'); d.stamp(58,20,['$$$'],{$:'#1A6A20'}); d.poly([[56,18],[60,14],[64,18]],'#FFE860');
    // sandy ground
    d.rect(0,24,64,16,'#F0DCA0'); d.rect(0,24,64,1,'#D8C080'); for(let i=0;i<20;i++) d.px(d.ri(0,63),d.ri(26,39),'#E0C888');
    d.rect(38,26,16,14,'#E8C890'); // path through gate
    // bubbles
    for(const [x,y] of [[2,15],[4,12],[60,30],[34,4]]) d.ring(x,y,1,'#E8FAFF');
  },
  'krabs:c2': d=>{ // pirate treasure island
    d.grad(0,0,64,18,['#5AB8F0','#7AC8F4','#9AD8F8','#C0E8FA']);
    cloud(d,50,4,6,'#FFFFFF');
    // sea
    d.rect(0,16,64,24,'#2A8AC8'); for(let y=18;y<40;y+=3) for(let x=(y*5)%9;x<64;x+=9) d.hline(x,x+2,y,'#5AB0E0');
    // pirate ship on horizon
    d.poly([[4,14],[16,14],[14,17],[6,17]],'#6A3A1A'); d.vline(10,4,14,'#4A2A10'); d.poly([[10,5],[15,9],[10,12]],'#F8F0E0'); d.rect(9,3,3,2,'#1A1A1A');
    // island (right) with sand to the left/bottom for pet
    d.ell(44,30,30,8,'#F0D890'); d.rect(0,30,64,10,'#F0D890'); d.poly([[0,21],[14,21],[30,26],[34,31],[0,31]],'#F0D890'); d.ell(44,29,26,6,'#F8E4A8');
    d.line(0,21,14,21,'#FFFFFF'); d.line(15,22,29,26,'#FFFFFF');
    for(let i=0;i<14;i++) d.px(d.ri(0,63),d.ri(32,39),'#E0C478');
    // palm tree
    d.line(54,28,51,10,'#8A5A2A'); d.line(55,28,52,10,'#A8743A');
    for(const [a,b] of [[-8,3],[7,4],[-6,-2],[5,-2],[0,-4]]) {d.line(52,10,52+a,10+b,'#3A9A3A'); d.line(52,11,52+a,11+b,'#5AC050')}
    d.circ(51,12,1,'#6A4A20'); d.circ(53,12,1,'#6A4A20');
    // parrot on palm
    d.rect(56,13,2,3,'#E83A2A'); d.px(58,13,'#F8D040'); d.px(56,16,'#3A7AE0'); d.px(57,16,'#3A7AE0');
    // open treasure chest
    d.rect(34,23,12,7,'#8A4A1A'); d.rect(34,23,12,1,'#E8C050'); d.vline(39,23,29,'#E8C050'); d.vline(40,23,29,'#E8C050');
    d.poly([[34,23],[46,23],[45,17],[35,17]],'#6A3A12'); d.hline(35,45,17,'#E8C050');
    d.ell(40,22,5,2,'#F8D040'); d.px(37,21,'#FFFFFF'); d.px(42,21,'#FFF0A0'); d.circ(39,21,1,'#F0F0FF'); d.px(43,22,'#E83A6A');
    // X marks the spot + shovel
    d.line(26,32,29,35,'#C83A2A'); d.line(29,32,26,35,'#C83A2A');
    d.line(48,30,50,25,'#8A5A2A'); d.rect(47,30,2,2,'#9AA0A8');
    spark(d,46,15,'#FFFFFF');
  },
  // ===== SIMHOMER =====
  'simhomer:s0': d=>{ // Lard Lad pink donut with a bite
    const D1='#E0A050',D2='#B87830',P1='#F890C0',P2='#E060A0',P3='#FFC8E0';
    d.ell(16,17,14,12,D2); d.ell(16,16,13,11,D1);
    // pink frosting with drippy edge
    d.ell(16,15,12,10,P2); d.ell(15,14,11,9,P1); for(const [x,y] of [[6,22],[11,25],[20,25],[26,21],[4,17]]) d.circ(x,y,1.2,P2);
    d.ell(11,10,4,2,P3);
    // hole
    d.ell(16,15,4,3,D2); d.ell(16,15,3,2,null); for(let y=12;y<=18;y++) for(let x=12;x<=20;x++) if(((x-16)/3.4)**2+((y-15)/2.4)**2<=1) d.clear(x,y);
    // sprinkles
    const sp=['#FFFFFF','#5AC8F0','#FFE050','#7AD060','#F05A3A','#B080F0'];
    for(const [x,y,h] of [[8,12,1],[12,8,0],[19,8,1],[24,11,0],[25,16,1],[9,18,0],[13,21,1],[20,21,0],[6,15,0],[22,6,1],[17,11,0]]){const c=sp[(x+y)%6]; d.px(x,y,c); h?d.px(x+1,y,c):d.px(x,y+1,c)}
    // bite
    for(let y=0;y<32;y++) for(let x=0;x<32;x++) if(((x-27)**2+(y-6)**2)<=26||((x-29)**2+(y-10)**2)<=8) d.clear(x,y);
    d.outline('#5A3018');
    d.px(30,13,'#E0A050'); d.px(29,15,'#E0A050'); // crumbs
  },
  'simhomer:s1': d=>{ // Pin Pals bowling ball + pin
    const B1='#5A3AA0',B2='#3A2478',B3='#8A6AD8',S='#F0C030',H='#1A1030';
    // pin behind
    d.ell(25,19,4,7,'#E8E8E8'); d.ell(25,9,2.5,3.5,'#F4F4F4'); d.rect(24,12,3,3,'#E8E8E8'); d.hline(22,28,13,'#E83A3A'); d.hline(22,28,14,'#E83A3A'); d.vline(23,16,24,'#FFFFFF');
    d.vline(28,17,24,'#C8C8D0');
    // ball
    d.circ(14,18,11,B2); d.circ(13,17,10,B1); d.circ(10,13,4,B3); d.px(8,11,'#C8B8F8'); d.px(9,10,'#FFFFFF');
    // team swirl stripe
    for(let x=3;x<25;x++){const y=Math.round(20+Math.sin(x/3)*2); d.px(x,y,S); d.px(x,y+1,'#C89818')}
    // finger holes
    d.circ(14,12,1.4,H); d.circ(18,11,1.4,H); d.circ(16,16,1.6,H);
    d.outline('#140A28');
    // shine star
    spark(d,4,4,'#FFE060'); d.px(29,29,'#FFE060');
  },
  'simhomer:s2': d=>{ // inanimate carbon rod with hero medal
    const R1='#5A5A64',R2='#3A3A44',R3='#8A8A98',G='#F0C030',GD='#B88A10',RB='#3A6AE0';
    // rod diagonally
    for(let i=0;i<=20;i++){const x=6+i,y=27-i; d.circ(x,y,2.2,R2); d.circ(x-.5,y-.5,1.5,R1); d.px(x-1,y-1,R3)}
    d.circ(26,7,2.2,R3); d.circ(6,27,2.2,R2);
    // ribbon + medal hanging off the rod
    d.line(13,19,10,25,RB); d.line(14,20,12,26,'#E8403A'); d.line(15,21,13,26,RB);
    d.circ(12,28,3,GD); d.circ(12,28,2,G); d.px(11,27,'#FFF0A0'); d.stamp(11,27,['.s.','sss','.s.'],{s:'#FFF0A0'});
    d.outline('#141420');
    // space sparkles
    spark(d,26,24,'#FFFFFF'); d.px(4,5,'#FFE060'); d.px(8,3,'#9AD0FF'); d.px(29,15,'#FFE060'); spark(d,18,4,'#9AD0FF');
  },
  'simhomer:c0': d=>{ // Moe's Tavern interior at night
    d.rect(0,0,64,40,'#3A2A22');
    d.grad(0,0,64,26,['#3A3020','#4A3A26','#54442C']); // dim greenish-brown wall
    for(let x=0;x<64;x+=6) d.vline(x,0,25,'#3A2E1C');
    // window with night + moon (left top)
    d.rect(4,3,14,10,'#14183A'); d.frame(3,2,16,12,'#6A4A2A'); d.vline(10,3,12,'#6A4A2A'); d.circ(15,6,2,'#FFF4C0'); d.px(6,5,'#FFFFFF'); d.px(8,9,'#FFFFFF');
    // neon beer sign glow (no text): mug shape
    d.stamp(24,4,['.oooo.','oyyyyo','oyyyyoo','oyyyy.o','oyyyyoo','oyyyyo.','.oooo.'],{o:'#FF5AA0',y:'#FFE060'});
    // back shelf with bottles
    d.rect(34,8,30,2,'#6A4A2A'); d.rect(34,15,30,2,'#6A4A2A');
    for(let x=35;x<63;x+=3){const c=['#3A8A3A','#8A3A2A','#C89030','#3A5AA0'][x%4]; d.rect(x,4,2,4,c); d.px(x,3,c); d.px(x,5,'#FFFFFF'); d.rect(x+((x%2)),11,2,4,['#C89030','#3A8A3A','#5A3A20'][x%3])}
    // bar counter (right)
    d.rect(30,22,34,11,'#7A4A24'); d.rect(30,21,34,2,'#A86A34'); d.hline(30,63,21,'#C88A48');
    for(let x=32;x<64;x+=8) d.vline(x,24,32,'#5A3418');
    // taps
    for(const x of [44,48]){d.rect(x,16,2,5,'#C0C8D0'); d.rect(x-1,15,4,2,'#E8E8F0'); d.px(x,14,'#F0C030')}
    // Duff can + mug on counter
    d.rect(36,17,4,4,'#E83A3A'); d.ell(37.5,18.5,1,1,'#FFFFFF'); d.hline(36,39,17,'#C0C8D0');
    d.rect(54,17,4,4,'#F0B838'); d.hline(54,57,17,'#FFFFFF'); d.px(58,18,'#E8E8F0'); d.px(58,19,'#E8E8F0');
    // bar stools
    for(const x of [33,51]){d.rect(x,30,6,2,'#C02A2A'); d.vline(x+3,32,37,'#8A8A98')}
    // floor
    d.rect(0,33,64,7,'#4A3628'); for(let x=0;x<64;x+=4) d.px(x+(x%8?2:0),36,'#5A4434');
    d.rect(0,26,30,7,'#4A3628'); d.hline(0,29,26,'#5A4434');
    // dusty pool of lamp light
    d.ell(42,0,8,2,'#E8C060');
  },
  'simhomer:c1': d=>{ // Duff Gardens: beer river + giant can tower
    d.grad(0,0,64,18,['#4AA8F0','#6ABAF4','#8ACCF8','#AADCFA']);
    cloud(d,10,5,5,'#FFFFFF'); cloud(d,30,3,4,'#FFFFFF');
    // hills
    d.ell(20,22,26,8,'#5AB050'); d.ell(56,21,16,6,'#4AA048');
    // giant Duff can tower
    d.rect(42,2,14,22,'#D82A2A'); d.rect(42,2,3,22,'#F04A4A'); d.rect(53,2,3,22,'#A81E1E');
    d.ell(49,2,7,1.5,'#C8D0D8'); d.ell(49,2,5,0.8,'#E8EEF4');
    d.ell(49,12,5,4,'#FFFFFF'); d.ell(49,12,4,3,'#F0E8D0'); d.hline(46,52,12,'#D82A2A'); d.hline(47,51,11,'#D82A2A');
    d.hline(42,55,6,'#F0C030'); d.hline(42,55,18,'#F0C030');
    // flags on tower
    d.vline(49,-2,1,'#5A5A6A'); d.px(50,0,'#F0C030');
    // roller coaster loop behind (left-center)
    d.ring(30,12,5,'#F0C030'); d.ring(30,12,4,'#C89818'); d.line(25,17,22,22,'#C89818'); d.line(35,17,40,22,'#C89818');
    // grass bank
    d.rect(0,22,64,18,'#6AC058'); d.rect(0,22,64,1,'#8AD878');
    // beer river flowing through center-right with foam edges
    d.poly([[26,40],[34,26],[64,24],[64,40]],'#E8A830'); d.poly([[34,40],[38,30],[64,29],[64,40]],'#F0C048');
    for(let i=0;i<9;i++){const t=i/8; d.circ(26+8*t,40-14*t,1.2,'#FFF8E8')} d.line(34,25,63,23,'#FFF8E8'); d.line(34,26,63,24,'#FFFFFF');
    for(const [x,y] of [[44,33],[52,30],[58,36],[47,38]]) d.ring(x,y,1,'#FFF4D0');
    // inner tube floating (Homer was here)
    d.ring(51,34,2.5,'#F070A0'); d.ring(51,34,1.6,'#F8A8C8');
    // flower patches + fence
    for(let x=2;x<24;x+=5) d.px(x,37-(x%3),['#F8E040','#F07AA0','#FFFFFF'][x%3]);
    for(let x=0;x<25;x+=3) d.vline(x,22,25,'#FFFFFF'); d.hline(0,24,23,'#FFFFFF');
  },
  'simhomer:c2': d=>{ // Deep Space Homer
    d.rect(0,0,64,40,'#0A0A22'); d.dither(0,0,64,6,'#0A0A22','#12123A');
    for(let i=0;i<45;i++) d.px(d.ri(0,63),d.ri(0,40),['#FFFFFF','#9AA8FF','#FFE8A0'][i%3]);
    // Earth lower right
    d.circ(58,40,16,'#2A6AD0'); d.circ(56,39,15,'#3A8AE8'); d.ell(52,30,4,2,'#4AB050'); d.ell(60,33,5,3,'#4AB050'); d.ell(48,36,3,1,'#FFFFFF'); d.ell(62,27,3,1,'#FFFFFF');
    d.ring(58,40,16,'#9AD0FF');
    // space shuttle center
    d.poly([[22,13],[44,13],[50,16],[44,19],[22,19]],'#F0F0F4'); d.rect(22,13,3,6,'#C8C8D0'); d.poly([[30,19],[38,19],[30,24]],'#D8D8E0'); d.poly([[30,13],[38,13],[30,8]],'#D8D8E0');
    d.hline(25,45,16,'#C8C8D0'); for(const x of [41,44]) d.px(x,15,'#2A3A6A'); d.px(47,16,'#3A3A44'); d.poly([[44,19],[50,16],[48,19]],'#3A3A44');
    d.rect(19,14,3,4,'#5A5A64'); d.poly([[19,15],[13,14],[13,18],[19,17]],'#FFA02A'); d.poly([[19,15],[16,15],[16,17],[19,17]],'#FFE860');
    // floating potato chips
    for(const [x,y] of [[30,5],[36,27],[52,9],[25,30],[58,20]]){d.ell(x,y,2,1,'#F0C040'); d.px(x-1,y,'#FFE070'); d.px(x+1,y+1,'#C89020')}
    // the carbon rod floating triumphantly
    d.line(10,5,17,9,'#5A5A64'); d.line(10,6,17,10,'#3A3A44'); spark(d,13,3,'#FFE060');
    // shuttle wing as foreground floor (lower-left)
    d.poly([[0,25],[30,29],[40,40],[0,40]],'#E0E0E8'); d.line(0,25,30,29,'#FFFFFF');
    for(let x=2;x<36;x+=5) d.vline(x,27+Math.round(x/8),39,'#C8C8D4'); d.hline(0,36,34,'#C8C8D4');
    d.rect(26,34,5,3,'#3A3A44');
  },
  // ===== TRIKE =====
  'trike:s0': d=>{ // frill polish bottle + cloth
    const B1='#4AC0A8',B2='#2A9080',B3='#9AF0D8',L='#FFF4D8',F1='#F09A3A',F2='#C86A20',C1='#F890B0',C2='#D86A90';
    // bottle body
    d.rect(7,12,14,16,B2); d.rect(8,12,12,16,B1); d.ell(14,12,7,2,B1); d.ell(14,28,7,1.5,B2);
    d.vline(9,13,26,B3); d.vline(10,14,18,B3);
    // neck + pump cap
    d.rect(11,7,6,4,B2); d.rect(12,7,4,4,B1); d.rect(10,4,8,3,'#E8E8F0'); d.hline(10,17,4,'#FFFFFF'); d.rect(13,1,2,3,'#C8C8D0'); d.rect(15,1,4,2,'#C8C8D0');
    // label with frill shape
    d.rect(9,16,10,9,L); d.ell(14,22,4,3,F1); d.ell(14,22,3,2,F2); for(const x of [10,12,14,16,18]) d.px(x,19+Math.abs(x-14)/2,F1);
    d.px(14,24,'#7A5A30'); d.px(12,21,'#FFF0A0'); d.px(16,21,'#FFF0A0');
    // polishing cloth draped
    d.poly([[19,22],[29,20],[30,29],[20,30]],C1); d.line(21,25,28,23,C2); d.line(21,28,29,26,C2);
    d.outline('#1A3A34');
    // shine
    spark(d,25,8,'#FFFFFF','#FFF0A0'); d.px(4,10,'#FFE060'); d.px(3,15,'#FFE060'); d.px(29,13,'#9AF0D8');
  },
  'trike:s1': d=>{ // cretaceous cycad leaf with beak snip
    const L1='#4AA848',L2='#2E7A34',L3='#8AD86A',S='#8A6A30';
    // leaflets: long narrow blades along a curved stem, angled toward the tip
    const P=i=>[5+i*0.95,28-i*1.0-Math.sin(i/7)*2];
    for(let i=3;i<22;i+=2.5){const [x,y]=P(i), len=Math.min(9,3+i*0.5)*(i>17?0.7:1);
      d.line(x,y,x-len*0.35,y-len,L2); d.line(x+1,y,x-len*0.35+1,y-len,L1);
      d.line(x,y,x+len,y+len*0.3,L2); d.line(x,y-1,x+len,y+len*0.3-1,L1); d.px(x+len-1,y+len*0.3-1,L3); d.px(x-len*0.35+1,y-len+1,L3)}
    for(let i=0;i<24;i++){const [x,y]=P(i); d.px(x,y,S); d.px(x+1,y,S)}
    // snipped tip (beak cut, pale)
    {const [x,y]=P(24); d.px(x,y,'#E8D890'); d.px(x+1,y,'#E8D890')}
    d.outline('#16401A');
    d.stamp(27,1,['v.v','.v.'],{v:'#FFFFFF'});
    spark(d,27,24,'#FFE060'); d.px(3,6,'#B8F0A0'); d.px(5,4,'#B8F0A0');
  },
  'trike:s2': d=>{ // three-horn trophy
    const G1='#F0C030',G2='#C8901A',G3='#FFF0A0',H1='#F8F0DC',H2='#D8C8A8',B='#3A8A5A',BD='#2A6A44';
    // cup
    d.poly([[7,10],[25,10],[22,20],[10,20]],G2); d.poly([[8,10],[23,10],[21,19],[11,19]],G1); d.vline(10,11,17,G3); d.vline(11,11,18,G3);
    // handles
    for(const x of [5,27]){d.circ(x,13,3.5,G2); d.circ(x,13,1.6,null); for(let y=11;y<=15;y++) for(let i=x-2;i<=x+2;i++) if((i-x)**2+(y-13)**2<=2.6) d.clear(i,y)}
    // stem + base
    d.rect(14,20,4,4,G2); d.rect(15,20,2,4,G1); d.rect(9,24,14,2,G1); d.rect(7,26,18,4,B); d.hline(7,24,26,'#5AB07A'); d.rect(12,27,8,2,BD); d.hline(13,18,27,G1);
    // three horns rising from cup
    d.poly([[8,11],[13,11],[6,1]],H1); d.line(12,10,7,2,H2);
    d.poly([[19,11],[24,11],[26,1]],H1); d.line(23,10,25,2,H2);
    d.poly([[14,11],[18,11],[16,5]],H1); d.vline(17,8,10,H2);
    // tiny frill emblem
    d.ell(16,14,3,2,'#E86A3A'); d.px(15,14,'#FFFFFF'); d.px(17,14,'#FFFFFF');
    d.outline('#4A3008');
    spark(d,28,4,'#FFFFFF'); d.px(3,4,'#FFE060'); d.px(29,23,'#FFE060');
  },
  'trike:c0': d=>{ // local meadow, tall grass
    d.grad(0,0,64,20,['#9ADCF8','#B0E4F8','#C8EEF8','#E0F6F8']);
    cloud(d,40,5,6,'#FFFFFF','#E0F0F8');
    // far hills with windmill
    d.ell(48,22,24,7,'#9AD070'); d.ell(16,22,22,5,'#B0DC80');
    d.rect(53,8,3,10,'#F0E8D8'); d.poly([[52,8],[54.5,5],[57,8]],'#C85A3A'); d.line(54,8,50,4,'#8A6A4A'); d.line(54,8,58,4,'#8A6A4A'); d.line(54,8,50,12,'#8A6A4A'); d.line(54,8,58,12,'#8A6A4A');
    // meadow ground
    d.rect(0,22,64,18,'#7CC850'); d.rect(0,22,64,1,'#9ADC6A');
    d.dither(0,34,64,6,'#7CC850','#6AB844');
    // big tall-grass clumps right with seed heads
    for(let x=27;x<64;x+=2){const h=8+((x*7)%5); d.vline(x,30-h,30,(x%4)?'#5AA83A':'#3A8A2A'); if(x%3===0) d.rect(x-1,29-h,2,2,'#E8C860')}
    for(let x=24;x<64;x+=3) d.vline(x,30,34,'#4A9A30');
    // mossy rock with fern (center)
    d.ell(40,30,6,4,'#9A9AA8'); d.ell(39,29,5,3,'#B8B8C4'); d.ell(37,28,2,1,'#D8D8E0'); d.ell(41,27,3,1,'#6AB844');
    // wildflowers
    for(const [x,y,c] of [[26,36,'#FFFFFF'],[30,38,'#F8E040'],[44,36,'#F080B0'],[50,38,'#FFFFFF'],[58,35,'#F8E040'],[4,37,'#F080B0']]){d.px(x,y,c); d.px(x+1,y,c); d.px(x,y+1,'#3A8A2A')}
    // butterflies
    d.stamp(30,12,['b.b','.k.','b.b'],{b:'#F8A040',k:'#3A2A1A'}); d.stamp(47,14,['b.b','.k.','b.b'],{b:'#FFFFFF',k:'#3A2A1A'});
    // nibbled grass bits on ground
    d.line(23,33,25,32,'#9ADC6A'); d.px(22,35,'#9ADC6A');
  },
  'trike:c1': d=>{ // savanna rhino village
    d.grad(0,0,64,22,['#F89848','#F8B058','#F8C870','#F8DC98']);
    d.circ(14,13,6,'#FFE8A0'); d.circ(14,13,4,'#FFF4D0');
    // distant flat-top acacias
    d.ell(48,9,9,2,'#6A5A2A'); d.ell(48,8,7,1,'#8A7A3A'); d.vline(48,10,20,'#5A3A1A'); d.line(48,14,45,10,'#5A3A1A'); d.line(48,13,51,10,'#5A3A1A');
    d.ell(6,16,5,1,'#8A6A30'); d.vline(6,17,22,'#6A4A20');
    // ground
    d.rect(0,22,64,18,'#E0A858'); d.rect(0,22,64,2,'#C89048'); for(let i=0;i<24;i++) d.px(d.ri(0,63),d.ri(25,39),'#C89048');
    for(let x=0;x<64;x+=3) d.vline(x,21,22+(x%2),'#B8A048');
    // round huts with thatched cone roofs
    for(const [x,w] of [[32,8],[57,7]]){d.rect(x-w/2,15,w,8,'#C87848'); d.poly([[x-w/2-2,15],[x,8],[x+w/2+2,15]],'#E8C060'); for(let i=-w/2;i<w/2;i+=2) d.px(x+i,14,'#B89038'); d.rect(x-1,18,3,5,'#5A3018')}
    // friendly rhino
    d.ell(46,28,7,4,'#8A8A98'); d.ell(46,27,6,3,'#A0A0AC'); d.ell(39,28,3,3,'#8A8A98'); d.rect(41,31,2,3,'#7A7A88'); d.rect(49,31,2,3,'#7A7A88'); d.rect(45,31,2,3,'#7A7A88');
    d.poly([[36,28],[37,23],[38,27]],'#F0E8D0'); d.px(38,25,'#F0E8D0'); d.px(39,26,'#3A3A44'); d.px(41,24,'#8A8A98'); d.px(53,27,'#7A7A88');
    // little horn-count tally: 3 vs 2 drawn in dirt
    d.stamp(27,34,['|.|.|'],{'|':'#A06A30'}); d.stamp(56,35,['|.|'],{'|':'#A06A30'});
    // birds
    d.stamp(25,6,['b.b','.b.'],{b:'#6A3A2A'}); d.stamp(32,3,['b.b','.b.'],{b:'#6A3A2A'});
  },
  'trike:c2': d=>{ // great cretaceous plains at sunset, herd marching
    d.grad(0,0,64,24,['#5A2A6A','#A03A6A','#E85A5A','#F8904A','#FFC060']);
    d.circ(30,22,7,'#FFE080'); d.circ(30,22,5,'#FFF4C0');
    // volcano right with smoke
    d.poly([[44,24],[54,6],[58,6],[64,18],[64,24]],'#4A2A3A'); d.poly([[54,6],[58,6],[57,9],[55,9]],'#F86A2A');
    d.circ(56,3,2,'#8A6A7A'); d.circ(59,1,2,'#8A6A7A'); d.circ(53,1,1.5,'#8A6A7A');
    // pterosaurs
    d.stamp(12,6,['w...w','.www.','..w..'],{w:'#3A1A3A'}); d.stamp(40,4,['w.w','.w.'],{w:'#3A1A3A'});
    // herd silhouette on horizon (lots of tiny trikes)
    d.rect(0,22,64,3,'#5A2A3A');
    for(let x=22;x<64;x+=5){const y=21-(x%2); d.rect(x,y,3,2,'#3A1A2A'); d.px(x-1,y,'#3A1A2A'); d.px(x+3,y-1,'#3A1A2A'); d.px(x,y+2,'#3A1A2A'); d.px(x+2,y+2,'#3A1A2A')}
    // ground plain
    d.rect(0,25,64,15,'#A85A3A'); d.dither(0,25,64,3,'#A85A3A','#8A4A3A'); d.rect(0,28,64,12,'#C8784A');
    for(let i=0;i<10;i++) d.hline(d.ri(24,60),d.ri(24,60)+2,d.ri(30,38),'#B0683E');
    // big ferns foreground right
    for(const [x,y] of [[56,39],[46,40]]) for(let a=-3;a<=3;a++){d.line(x,y,x+a*3,y-10+Math.abs(a)*2,'#3A6A2A'); d.line(x+1,y,x+a*3+1,y-10+Math.abs(a)*2,'#5A8A3A')}
    // giant footprints marching right
    for(const [x,y] of [[26,33],[32,36],[38,32]]){d.ell(x,y,2,1,'#8A4A2A'); d.px(x-2,y-1,'#8A4A2A'); d.px(x,y-2,'#8A4A2A'); d.px(x+2,y-1,'#8A4A2A')}
  },
  // ===== SAWOL =====
  'sawol:s0': d=>{ // matching pink leash (coiled) with heart tag
    const P1='#F890B8',P2='#D86A98',P3='#FFC8DC',M='#C8C8D4',MD='#8A8A98';
    // handle loop
    d.ell(8,8,6,5,P2); d.ell(8,8,4,3,null); for(let y=4;y<=12;y++) for(let x=3;x<=13;x++) if(((x-8)/4.4)**2+((y-8)/3.4)**2<=1) d.clear(x,y);
    d.ring(8,8,5,P1);
    // coils
    for(const [cx,cy,r] of [[17,17,6],[18,18,4.5]]) {d.ring(cx,cy,r,P2); d.ring(cx-.5,cy-.5,r,P1)}
    d.line(12,11,13,13,P1); d.line(13,11,14,13,P2);
    // strap to clasp
    d.line(22,21,25,25,P1); d.line(23,21,26,25,P2);
    // metal clasp
    d.rect(25,25,3,4,M); d.px(25,25,'#FFFFFF'); d.ring(27,29,1.5,MD);
    // heart tag (matching with sis)
    d.stamp(2,20,['.hh.hh.','hhhhhhh','hhwhhhh','.hhhhh.','..hhh..','...h...'],{h:'#FF5A8A',w:'#FFFFFF'});
    d.line(5,19,10,13,M);
    d.px(13,8,P3); d.px(16,11,P3); d.px(13,16,P3);
    d.outline('#5A2A3A');
    // second little heart for sis
    d.stamp(25,3,['h.h','hhh','.h.'],{h:'#FF8AB0'}); d.px(28,9,'#FFE060');
  },
  'sawol:s1': d=>{ // yum-yum chew bone
    const B1='#F0D8A0',B2='#D0B070',B3='#FFF4D8',BD='#A88A48';
    // diagonal bone: shaft + knobby ends
    for(let i=0;i<=14;i++){const x=9+i,y=22-i; d.circ(x,y,2.6,B2); d.circ(x-.4,y-.4,2,B1)}
    for(const [x,y] of [[6,21],[9,25],[23,5],[26,9]]) {d.circ(x,y,3.6,B2); d.circ(x-.5,y-.5,2.8,B1)}
    d.px(5,19,B3); d.px(6,19,B3); d.px(22,3,B3); d.px(23,3,B3); d.line(12,17,18,11,B3);
    // dental ridges + nibble marks
    for(let i=2;i<14;i+=3) d.line(9+i,21-i,11+i,23-i,BD);
    d.px(20,12,'#C88A50'); d.px(14,18,'#C88A50');
    d.outline('#5A4220');
    // excited motion lines + sparkle (sprinted for it!)
    d.stamp(1,3,['ww..','..ww'],{w:'#9AD8F0'}); d.stamp(2,8,['ww.','..w'],{w:'#9AD8F0'});
    spark(d,28,26,'#FFE060'); d.px(4,30,'#FF8AB0'); d.px(5,29,'#FF8AB0');
  },
  'sawol:s2': d=>{ // smells-like-sis blanket, a cozy hideout
    const C1='#F8D8E8',C2='#E8B0C8',C3='#FFF0F6',Y='#FFE8A0',K='#3A2A2A';
    // blanket mound (someone is hiding inside)
    d.ell(16,20,14,10,C2); d.ell(15,19,13,9,C1);
    d.poly([[2,28],[30,28],[31,31],[1,31]],C2);
    // check pattern
    for(let x=4;x<30;x+=5) for(let y=12;y<30;y++) if(d.get(x,y)===C1) d.px(x,y,'#F0C0D8');
    for(let y=14;y<30;y+=5) for(let x=2;x<31;x++) if(d.get(x,y)===C1) d.px(x,y,'#F0C0D8');
    for(let x=4;x<30;x+=5) for(let y=14;y<30;y+=5) if(d.get(x,y)) d.px(x,y,'#E8A0C0');
    d.ell(11,14,4,2,C3);
    // dark opening with two shy eyes peeking
    d.ell(19,25,5,3,'#4A3040'); d.stamp(16,24,['ww..ww','wk..wk'],{w:'#FFFFFF',k:K});
    // folded corner tassel
    d.poly([[24,12],[29,15],[25,17]],Y); d.px(28,17,'#F8B040');
    d.outline('#6A3A50');
    // scent wisps (sis smell) + heart
    d.stamp(4,2,['..s','.s.','s..','.s.'],{s:'#C8A0E8'}); d.stamp(8,0,['.s','s.','.s'],{s:'#C8A0E8'});
    d.stamp(25,2,['h.h','hhh','.h.'],{h:'#FF7AA0'});
  },
  'sawol:c0': d=>{ // neighborhood walk: blossom lane, apartments
    d.grad(0,0,64,20,['#88C8F8','#A0D4F8','#B8E0F8','#D0ECF8']);
    // apartment blocks behind
    for(const [x,w,h,c] of [[24,12,16,'#E8E0D0'],[37,10,19,'#D8D4E0'],[48,14,14,'#F0E4D4']]){d.rect(x,22-h,w,h,c); for(let y=24-h;y<20;y+=3) for(let i=x+1;i<x+w-1;i+=3) d.rect(i,y,2,1,'#88A8C8')}
    d.rect(37,3,10,2,'#C85A5A');
    // hedge + low wall
    d.rect(0,18,64,5,'#5AA850'); for(let x=0;x<64;x+=4) d.circ(x+2,18,2,'#6ABA5A');
    // cherry blossom trees (center & right)
    for(const [x,r] of [[34,7],[56,8]]){d.rect(x-1,14,3,12,'#7A4A3A'); d.circ(x,9,r,'#F8B8D0'); d.circ(x-2,7,r-3,'#FFD8E8'); d.circ(x+3,11,r-4,'#F0A0C0')}
    for(let i=0;i<12;i++) d.px(d.ri(26,63),d.ri(16,36),'#FFC8DC');
    // sidewalk + path
    d.rect(0,23,64,17,'#D8CCB8'); for(let y=26;y<40;y+=5) d.hline(0,63,y,'#C0B4A0'); for(let x=0;x<64;x+=8) d.vline(x+((x/8)%2)*4,23,39,'#C0B4A0');
    d.rect(0,23,64,1,'#B8AC98');
    // a passing dog's leash dangling + big paw prints going right (scary dog passed)
    for(const [x,y] of [[40,34],[46,31],[52,35],[58,32]]){d.rect(x,y,2,2,'#8A7A68'); d.px(x-1,y-1,'#8A7A68'); d.px(x+1,y-2,'#8A7A68'); d.px(x+3,y-1,'#8A7A68')}
    // sis's shoes footprints + tiny paws hiding behind (left-center)
    d.rect(26,30,2,3,'#9A8A78'); d.rect(29,28,2,3,'#9A8A78'); d.px(24,33,'#9A8A78'); d.px(25,34,'#9A8A78');
    // bench + bike sign
    d.rect(44,24,12,2,'#A86A3A'); d.vline(45,26,28,'#5A3A20'); d.vline(54,26,28,'#5A3A20');
    // streetlight
    d.vline(61,8,30,'#5A6070'); d.rect(59,6,4,2,'#5A6070'); d.px(60,8,'#FFF0A0');
  },
  'sawol:c1': d=>{ // wide open field at sunset, long walk
    d.grad(0,0,64,18,['#F07A5A','#F8985A','#F8B86A','#F8D08A','#FCE4B0']);
    d.circ(48,17,5,'#FFF0C0'); d.circ(48,17,3,'#FFFFF0');
    // flat distant horizon with one lonely tree
    d.rect(0,17,64,2,'#C88A50'); d.vline(57,11,17,'#5A3A2A'); d.circ(57,10,3,'#6A4A2A');
    // vast golden field
    d.grad(0,19,64,21,['#E0A848','#E8B858','#F0C868','#F8D47A']);
    for(let y=21;y<40;y+=2) for(let x=(y*7)%6;x<64;x+=6+(y>30)) d.px(x,y,'#D09838');
    for(let x=0;x<64;x+=3) if(x>24) d.vline(x,33+(x%2),39,'#C88A30');
    // path winding toward the sun
    d.poly([[22,40],[34,40],[47,19],[45,19]],'#F8E0A8'); d.line(45,19,24,40,'#E8C890');
    // footprints: shoes + tiny paws following
    for(const [x,y] of [[30,36],[33,31],[37,27],[40,23]]){d.rect(x,y,2,2,'#C8A060'); d.px(x+3,y+1,'#C8A060'); d.px(x+4,y+2,'#C8A060')}
    // long shadows / birds
    d.stamp(30,5,['b.b','.b.'],{b:'#8A3A3A'}); d.stamp(36,8,['b.b','.b.'],{b:'#8A3A3A'});
    // dandelion fluff blowing
    for(const [x,y] of [[52,26],[58,30],[44,13],[26,10]]) {d.px(x,y,'#FFFFFF'); d.px(x+1,y-1,'#FFF4E0')}
  },
  'sawol:c2': d=>{ // dreamland beside sis: cozy bedroom at night
    d.rect(0,0,64,40,'#3A2E5A');
    d.grad(0,0,64,26,['#2A2450','#34295A','#3E3064']);
    // wallpaper stars
    for(let y=3;y<24;y+=6) for(let x=(y%12?3:0);x<64;x+=7) d.px(x,y,'#5A4A8A');
    // window with big moon
    d.rect(4,3,16,13,'#141A40'); d.frame(3,2,18,15,'#C8A0D8'); d.vline(11,3,16,'#C8A0D8'); d.hline(4,19,9,'#C8A0D8');
    d.stamp(13,3,['.mm..','mm...','mm...','mm...','.mm..'],{m:'#FFF4C0'}); d.px(13,4,'#FFFFFF'); d.px(6,5,'#FFFFFF'); d.px(8,12,'#FFFFFF'); d.px(17,13,'#FFFFFF');
    // floor
    d.rect(0,26,64,14,'#5A4A7A'); d.hline(0,63,26,'#7A6A9A'); for(let x=0;x<64;x+=10) d.vline(x,27,39,'#4A3A6A');
    d.ell(16,34,13,3,'#6A5A8A'); // rug
    // bed on right with sis's blanket
    d.rect(30,18,34,10,'#E8D8F0'); d.rect(30,15,4,15,'#8A6A9A'); d.rect(30,15,4,1,'#A88AB8');
    d.ell(38,19,4,2,'#FFFFFF'); // pillow
    d.ell(52,21,13,5,'#F0B0C8'); d.rect(38,22,26,6,'#F0B0C8'); d.hline(38,63,22,'#F8C8DC');
    for(let x=42;x<64;x+=5) for(let y=23;y<28;y+=3) d.px(x,y,'#E890B0');
    d.rect(30,28,34,2,'#8A6A9A');
    // small dog bed / cushion next to it (Sawol's spot)
    d.ell(26,31,4,2,'#F8E0A0'); d.ell(26,30,3,1,'#FFF0C8');
    // dream bubbles + floating hearts and zzz
    d.circ(44,8,4,'#4A4A8A'); d.circ(44,8,3,'#5A5AA0'); d.circ(38,13,1,'#5A5AA0'); d.circ(40,11,1.5,'#5A5AA0');
    d.stamp(42,6,['.h.h.','hhhhh','.hhh.','..h..'],{h:'#FF9AC0'});
    d.stamp(52,4,['zzz','.z.','zzz'],{z:'#C8B8F0'}); d.stamp(57,1,['zz','zz'],{z:'#A898D8'});
    // nightlight glow
    d.circ(24,23,1.5,'#FFE8A0'); d.ell(24,25,2,1,'#8A6A9A');
  },
};
