// art_0: cat, pig, axolotl, bailey, lemongrab, iso, cap, gary, dora, trex, unicorn
const seg=(d,x0,y0,x1,y1,r,c)=>{const n=Math.max(Math.abs(x1-x0),Math.abs(y1-y0))*2||1; for(let i=0;i<=n;i++) d.circ(x0+(x1-x0)*i/n,y0+(y1-y0)*i/n,r,c)};
const spark=(d,x,y,c,w='#FFFFFF')=>d.stamp(x-2,y-2,['..a..','..a..','aawaa','..a..','..a..'],{a:c,w});
const tw=(d,x,y,c)=>{d.px(x,y,c); d.px(x-1,y,c); d.px(x+1,y,c); d.px(x,y-1,c); d.px(x,y+1,c)};
const cloud=(d,x,y,w,c,s)=>{d.ell(x,y,w,2,c); d.ell(x-Math.round(w/3),y-1,Math.round(w/2),2,c); d.ell(x+Math.round(w/4),y-2,Math.round(w/3),2,c); if(s) d.hline(x-w+1,x+w-1,y+2,s)};
const starfield=(d,n,cols,y1,x0=0,x1)=>{for(let i=0;i<n;i++) d.px(d.ri(x0,x1??d.W-1),d.ri(0,y1),cols[i%cols.length])};
const speck=(d,n,x0,y0,x1,y1,cols)=>{for(let i=0;i<n;i++) d.px(d.ri(x0,x1),d.ri(y0,y1),cols[i%cols.length])};
const heart=(d,x,y,c,h)=>{d.stamp(x,y,['.c.c.','ccccc','ccccc','.ccc.','..c..'],{c}); if(h) d.px(x+1,y+1,h)};
// arc of a (rotated) ellipse, optional clip(x,y)
const arc=(d,cx,cy,rx,ry,a0,a1,c,rot=0,clip)=>{for(let t=a0;t<=a1;t+=0.015){const x=rx*Math.cos(t),y=ry*Math.sin(t); const X=Math.round(cx+x*Math.cos(rot)-y*Math.sin(rot)), Y=Math.round(cy+x*Math.sin(rot)+y*Math.cos(rot)); if(!clip||clip(X,Y)) d.px(X,Y,c)}};
// dithered vertical gradient: cols bands with checker rows between
const dgrad=(d,x,y,w,h,cols)=>{const n=cols.length; for(let j=0;j<h;j++){const f=j*n/h, k=Math.floor(f), fr=f-k; for(let i=0;i<w;i++){let c=cols[k]; if(fr>.75&&k+1<n&&(i+j)%2) c=cols[k+1]; d.px(x+i,y+j,c)}}};
const remap=(d,m)=>{for(const k in m) d.recolor(k,m[k])};
const bub=(d,x,y,c,h='#FFFFFF')=>{d.stamp(x-1,y-1,['.c.','c.c','.c.'],{c}); };
const bub2=(d,x,y,c,h='#FFFFFF')=>{d.stamp(x-2,y-2,['.cc.','c.hc','c..c','.cc.'],{c,h})};
const layer=(d,fn,O)=>{const old=d.G.map(r=>r.slice()); for(const r of d.G) r.fill(null); fn(); if(O) d.outline(O); for(let y=0;y<d.H;y++)for(let x=0;x<d.W;x++) if(!d.G[y][x]) d.G[y][x]=old[y][x]};
const bricks=(d,x,y,w,h,c,m,bw=4,bh=2)=>{d.rect(x,y,w,h,c); for(let j=0;j<h;j+=bh+1){d.hline(x,x+w-1,y+j+bh,m); const off=((j/(bh+1))%2)*Math.floor(bw/2); for(let i=off;i<w;i+=bw+1) d.vline(x+i,y+j,y+j+bh-1,m)}};

export default {
  // ===== CAT =====
  'cat:s0': d=>{ // perfectly sized box
    const O='#4A2E1C',L='#E8B878',M='#D09A58',D='#A87440',DD='#8A5A30',I='#5A3A22',I2='#7A5030',T='#F6E6B8',H='#FFD8A0';
    d.poly([[11,8],[26,8],[24,1],[13,1]],M); d.hline(13,24,2,H); // back flap
    d.poly([[6,13],[21,13],[26,8],[11,8]],I);
    d.poly([[11,8],[26,8],[24,10],[9,10]],I2);
    d.poly([[22,13],[27,8],[27,23],[22,28]],D); d.vline(22,13,28,DD);
    d.rect(6,13,16,16,L); d.hline(6,21,28,M);
    d.poly([[6,13],[11,8],[6,4],[1,9]],H); d.line(6,13,11,8,M); // left flap
    d.poly([[21,13],[26,8],[31,11],[26,16]],M); d.line(21,13,26,8,D); // right flap
    d.poly([[5,13],[23,13],[24,18],[4,18]],M); d.hline(5,23,13,H); d.hline(4,24,18,D); // front flap folded down
    d.rect(13,13,3,6,T); d.rect(13,19,3,3,T); d.px(13,22,T); d.px(15,22,T); // tape
    // up arrows
    d.stamp(7,20,['..k...k..','.kkk.kkk.','kkkkkkkkk','..k...k..','..k...k..'],{k:DD});
    // paw print
    d.stamp(16,23,['p.p.p','.....','.ppp.','.ppp.'],{p:DD});
    // side markings
    d.vline(24,15,20,'#C08850'); d.vline(25,14,18,'#C08850');
    d.outline(O);
    // cat hairs on rim
    d.px(9,11,'#F0F0F0'); d.px(10,10,'#F0F0F0'); d.px(17,9,'#D8D8D8'); d.px(19,11,'#F0F0F0');
    heart(d,26,0,'#F06A8A','#FFC0D0');
    d.px(2,26,'#FFE070'); d.px(1,27,'#FFE070'); d.px(3,27,'#FFE070'); d.px(2,28,'#FFE070');
  },
  'cat:s1': d=>{ // artisan yarn ball
    const O='#5A1838',B='#F27A9A',D2='#C84A72',L='#FFB0C4',N='#D8A868',N2='#A87840',K='#7AC8E8';
    seg(d,3,3,28,27,1,N); seg(d,28,4,4,28,1,N);
    d.circ(3,3,2,K); d.circ(28,4,2,'#F8D048');
    d.circ(15,16,11,D2); d.circ(14,15,10,B);
    const cl=(x,y)=>(x-15)**2+(y-16)**2<=110;
    for(const [rx,ry,rot] of [[11,4,0.5],[11,6,0.5],[10,8,0.5],[11,3,-0.9],[10,6,-0.9]]) arc(d,15,16,rx,ry,0,Math.PI*2,D2,rot,cl);
    for(const [rx,ry,rot] of [[9,3,0.5],[9,5,-0.9]]) arc(d,14,15,rx,ry,Math.PI*.9,Math.PI*1.6,L,rot,cl);
    d.ell(10,10,3,2,L); d.px(9,9,'#FFFFFF'); d.px(10,9,'#FFFFFF');
    // loose strand
    seg(d,24,22,27,27,.5,B); d.line(27,27,30,27,B); d.line(30,27,30,30,B); d.line(30,30,25,30,B); d.line(25,30,23,28,B);d.line(23,28,20,31,B);
    d.px(4,3,'#BFF0FF'); d.px(27,3,'#FFF4B0');
    d.outline(O);
    spark(d,27,15,'#FFE070');
  },
  'cat:s2': d=>{ // legendary golden tuna can
    const O='#5A3A08',G1='#FFF0A0',G2='#FFD848',G3='#E8A820',G4='#B87810',R='#2A7AD0',R2='#1A5AA8',F='#E8F4FF';
    // body
    for(let x=4;x<=28;x++){const t=(x-4)/24; const c=t<.12?G4:t<.3?G3:t<.48?G2:t<.6?G1:t<.85?G2:G3; d.vline(x,13,25,c)}
    d.ell(16,25,12,4,G4); for(let x=4;x<=28;x++){const c=d.get(x,24); if(c) d.px(x,24,c)}
    d.ell(16,26,12,3,G4); for(let x=6;x<=26;x++) d.px(x,26,G3);
    // label
    d.rect(4,16,25,8,R); d.hline(4,28,16,R2); d.hline(4,28,23,R2); d.rect(4,17,3,6,R2); d.rect(26,17,3,6,R2);
    d.stamp(10,17,['...fff....f','.ffffff..ff','fkfffffffff','.ffffff..ff','...fff....f'],{f:F,k:'#1A2A48'});
    d.px(14,17,'#FFFFFF'); d.stamp(23,18,['w','w','.','w'],{w:'#FFE070'});
    // ridges
    d.hline(4,28,14,G4); d.hline(4,28,25,G4);
    // lid
    d.ell(16,12,12,4,G3); d.ell(16,12,11,3,G2); d.ell(16,12,9,2,G1); arc(d,16,12,7,1.5,0,Math.PI*2,G3);
    // pull tab raised
    d.stamp(17,4,['.ggg.','g...g','g...g','.ggg.','..g..','..g..','..g..'],{g:G4}); d.stamp(18,5,['ww.'],{w:G1});
    d.px(9,11,'#FFFFFF'); d.px(10,10,'#FFFFFF');
    d.outline(O);
    // pop lines
    d.line(11,5,9,2,'#FF8A5A'); d.line(25,6,28,3,'#FF8A5A'); d.vline(14,1,2,'#FF8A5A');
    spark(d,4,8,'#FFE070'); spark(d,29,20,'#FFE070'); d.px(2,24,'#FFF4B0');
  },
  'cat:c0': d=>{ // sunny windowsill, indoor
    dgrad(d,0,0,64,27,['#F6E4C8','#F0DABA','#EAD0AC']);
    // framed fish picture
    d.rect(4,5,12,9,'#A8743E'); d.rect(5,6,10,7,'#CFE8F6'); d.stamp(6,8,['..ooo..o','.oooooo.','..ooo..o'],{o:'#F08A48'});
    // window
    d.rect(24,1,36,22,'#FFFFFF'); dgrad(d,26,3,32,18,['#8ED0F4','#A6DCF6','#C6EAF8']);
    cloud(d,33,7,4,'#FFFFFF'); d.circ(52,6,3,'#FFF6B0'); d.circ(52,6,2,'#FFFFFF');
    d.circ(40,18,5,'#5EA84A'); d.circ(46,16,4,'#78C05A'); d.circ(36,19,3,'#4A9A3A'); d.rect(41,19,2,2,'#7A5A3A');
    d.rect(26,17,32,4,'#9AD07A'); d.circ(40,17,4,'#5EA84A'); d.circ(45,16,3,'#78C05A');
    d.rect(41,2,2,20,'#FFFFFF'); d.rect(25,11,34,2,'#FFFFFF'); d.vline(43,2,21,'#D8CCB8'); d.hline(25,58,13,'#D8CCB8');
    // curtains
    for(const x0 of [19,57]){d.rect(x0,0,7,26,'#F4A0A0'); for(let x=x0+1;x<x0+7;x+=2) d.vline(x,0,25,'#E07E86'); d.hline(x0,x0+6,0,'#C86070')}
    d.rect(18,0,46,1,'#A8743E');
    // sill
    d.rect(22,22,40,2,'#E8AE70'); d.rect(22,24,40,1,'#B87A48'); d.hline(22,61,22,'#FFD0A0');
    // plant pot on sill
    d.rect(50,18,5,4,'#D86A48'); d.hline(49,55,18,'#B8503A'); d.stamp(49,13,['.g.g.','gg.gg','.ggg.','..g..','..g..'],{g:'#4A9A3A'});
    // mug
    d.rect(29,19,3,3,'#7AB8E0'); d.px(32,20,'#7AB8E0'); d.px(30,17,'#FFFFFF'); d.px(31,16,'#FFFFFF');
    // baseboard + floor
    d.rect(0,26,64,2,'#B07A50'); d.hline(0,63,26,'#C89060');
    d.rect(0,28,64,12,'#C88A58'); for(let y=31;y<40;y+=4) d.hline(0,63,y,'#A86E44');
    for(const [x,y] of [[12,28],[40,32],[22,36],[56,28],[6,32],[50,36]]) d.vline(x,y,y+2,'#A86E44');
    // sunbeam on floor
    const sun=[[18,28],[52,28],[46,39],[2,39]];
    d.poly(sun,'#E8AE70'); for(let y=28;y<40;y++) for(let x=0;x<64;x++) if(d.get(x,y)==='#A86E44'){const inb=x>=18-(y-28)*1.45&&x<=52-(y-28)*.55; if(inb) d.px(x,y,'#D49A60')}
    d.poly([[24,28],[46,28],[42,39],[12,39]],'#F2C080'); for(let y=31;y<40;y+=4) for(let x=0;x<64;x++) if(d.get(x,y)==='#F2C080') d.px(x,y,'#E8AE70');
    // cushion in the sun with a dent
    d.ell(38,33,7,3,'#F27A9A'); d.ell(38,32,6,2,'#FF9AB4'); d.ell(36,32,3,1,'#E86A8A'); d.px(32,31,'#FFC4D4'); d.px(33,30,'#FFC4D4');
    d.ell(38,36,7,1,'#B8784A');
    // toy mouse + dust motes
    d.stamp(54,33,['.gg..','ggggk','.gg..'],{g:'#9A9AA8',k:'#F08AA0'}); d.line(53,34,51,35,'#F08AA0');
    for(const [x,y] of [[30,25],[34,20],[27,22],[44,24],[38,27]]) d.px(x,y,'#FFF6D0');
    remap(d,{'#FFC4D4':'#FF9AB4','#F08AA0':'#F27A9A','#FFF6D0':'#FFF6B0','#B8503A':'#B87A48','#9A9AA8':'#D8CCB8','#7AB8E0':'#8ED0F4','#F08A48':'#D86A48','#E86A8A':'#E07E86','#78C05A':'#9AD07A','#C6EAF8':'#CFE8F6','#B8784A':'#B87A48','#FFD0A0':'#F2C080','#B07A50':'#A8743E','#C89060':'#E8AE70'});
  },
  'cat:c1': d=>{ // cat island alleys
    dgrad(d,0,0,64,12,['#FFC89A','#FFD8A8','#FFE6BC']);
    d.circ(33,8,3,'#FFF2C8');
    d.rect(18,10,30,5,'#4AA0C8'); d.hline(18,47,11,'#7AC4E0'); d.hline(22,28,13,'#7AC4E0'); d.hline(36,42,12,'#7AC4E0');
    // paving everywhere
    d.rect(0,14,64,26,'#C8BCA8');
    for(let y=17;y<40;y+=4){d.hline(0,63,y,'#B0A48E'); for(let x=((y-17)/4%2)*5;x<64;x+=10) d.vline(x,y-3,y-1,'#B0A48E')}
    // stone steps up to the sea
    for(let i=0;i<4;i++){d.rect(24,14+i*2,18,2,i%2?'#B8AC98':'#D8CEB8'); d.hline(24,41,15+i*2,'#9C907C')}
    d.rect(22,14,2,9,'#9C907C'); d.rect(42,14,2,9,'#9C907C');
    // left house
    d.rect(0,6,22,17,'#8A5A3A'); for(let x=1;x<22;x+=3) d.vline(x,8,22,'#76482C');
    d.poly([[-2,7],[4,1],[24,1],[24,7]],'#4A5A7A'); for(let x=-1;x<24;x+=2) d.vline(x,3,6,'#3A4864'); d.hline(-2,24,7,'#2E3A50');
    d.rect(4,11,6,5,'#F8E4B0'); d.vline(7,11,15,'#76482C'); d.hline(4,9,13,'#76482C');
    d.rect(14,12,6,10,'#5A3A22'); d.rect(14,12,6,3,'#3A6A9A'); d.vline(16,12,14,'#2A5080');
    d.rect(0,22,22,1,'#5A3A22');
    // right fish shop
    d.rect(44,6,20,25,'#E8DCC0'); d.poly([[42,7],[46,2],[64,2],[64,7]],'#B85A48'); d.hline(42,63,7,'#8A3A30');
    d.rect(44,8,20,4,'#3A78C8'); for(let x=44;x<64;x+=4) d.rect(x,8,2,4,'#FFFFFF'); for(let x=44;x<64;x+=4) d.px(x+1,12,'#3A78C8');
    d.rect(46,13,17,9,'#6A4428'); d.rect(52,14,5,3,'#F8E4B0'); d.hline(53,55,15,'#B85A48');
    // hanging fish in shop
    d.vline(49,13,14,'#3A2A1A'); d.stamp(48,15,['.c.','ccc','ccc','.c.','c.c'],{c:'#C0C8D8'}); d.px(49,16,'#1A2A3A');
    d.vline(60,13,14,'#3A2A1A'); d.stamp(59,15,['.c.','ccc','ccc','.c.','c.c'],{c:'#E8606A'}); d.px(60,16,'#1A2A3A');
    // counter with ice and fish
    d.rect(44,22,20,3,'#BCE8F4'); d.hline(44,63,22,'#FFFFFF');
    d.rect(44,25,20,6,'#A8743E'); d.hline(44,63,25,'#8A5A30'); d.hline(44,63,30,'#6A4428'); d.vline(53,26,29,'#8A5A30');
    for(const [x,y,c,e] of [[45,21,'#A8B4C8','#C8D0E0'],[52,22,'#E8606A','#FF9A9A'],[57,21,'#A8B4C8','#C8D0E0']]){d.stamp(x,y,['..ccc..c','.ceeeecc','ckcccc.c','..ccc..c'].slice(0,3),{c,e,k:'#1A2A3A'})}
    // price tags
    d.rect(47,26,3,2,'#FFFFFF'); d.rect(56,26,3,2,'#FFFFFF');
    // lanterns string
    d.line(0,2,44,4,'#3A2A1A');
    for(const x of [6,17,29,38]){const y=Math.round(2+x*2/44)+1; d.stamp(x-1,y,['.k.','rrr','rRr','rrr','.k.'],{k:'#3A2A1A',r:'#E84838',R:'#FFD060'})}
    // details
    d.rect(1,20,4,3,'#C86A48'); d.circ(3,18,2,'#5EA84A'); d.px(2,17,'#8AD06A');
    d.stamp(30,32,['k.k.k.k...','kkkkkkkkk.','k.k.k.k...'],{k:'#FFFFFF'}); d.stamp(39,31,['k','kk','k'].map(r=>r.padEnd(2,'.')),{k:'#FFFFFF'});
    d.ell(40,36,3,1,'#9AA4B0'); d.ell(40,35,3,1,'#E0E6EC'); d.px(39,35,'#8AB8E0'); // empty dish
    remap(d,{'#8AD06A':'#5EA84A','#8AB8E0':'#7AC4E0','#2A5080':'#3A4864','#FF9A9A':'#E8606A','#C8D0E0':'#E0E6EC','#C0C8D8':'#A8B4C8','#9AA4B0':'#9C907C','#3A6A9A':'#3A78C8','#E0E6EC':'#BCE8F4','#FFF2C8':'#F8E4B0','#8A3A30':'#8A5A30','#2E3A50':'#3A2A1A','#5A3A22':'#6A4428','#C86A48':'#B85A48'});
  },
  'cat:c2': d=>{ // giant box on the moon
    d.rect(0,0,64,40,'#0E1030'); dgrad(d,0,0,64,24,['#0A0C26','#12163A','#1A1E4A']);
    starfield(d,40,['#FFFFFF','#B8C8FF','#FFF0A0'],22);
    // earth
    d.circ(10,8,5,'#3A7AD8'); d.stamp(6,4,['..gg.....','.ggg..g..','..g..ggg.','.....gg..','..gg.....','.ggg...g.','..g......'],{g:'#5EC05A'}); d.ring(10,8,5,'#1E4A9A'); d.px(8,5,'#BFE4FF');
    for(let y=2;y<=14;y++)for(let x=4;x<=16;x++){if((x-10)**2+(y-8)**2<=30&&(x-13)**2+(y-6)**2>36&&x>11) d.px(x,y,'#1E3A80')}
    spark(d,30,4,'#FFE070'); tw(d,56,3,'#B8C8FF');
    // moon ground
    for(let x=0;x<64;x++){const h=Math.round(22+1.6*Math.sin(x/9)+(x>40?1:0)); d.vline(x,h,39,'#B8B8C8'); d.px(x,h,'#DCDCE8')}
    for(let y=30;y<40;y+=2) for(let x=(y%4)?0:1;x<64;x+=6) d.px(x,y,'#A4A4B6');
    for(const [x,y,r] of [[28,34,3],[50,36,2],[4,37,2],[60,27,2],[40,27,1.5]]){d.ell(x,y,r+1,r/2+.5,'#9696AA'); d.ell(x,y+.4,r,r/2,'#C8C8D6'); d.hline(x-r,x+r-1,Math.round(y-r/2),'#7E7E94')}
    // giant box
    const L='#E8B878',M='#D09A58',D='#A87440',I='#5A3A22',O='#4A2E1C';
    d.poly([[35,13],[53,13],[58,9],[40,9]],I); d.poly([[40,9],[58,9],[56,4],[42,4]],M);
    d.poly([[53,13],[58,9],[58,27],[53,31]],D);
    d.rect(35,13,18,18,L); d.hline(35,52,30,M);
    d.poly([[35,13],[40,9],[36,4],[31,8]],'#FFD8A0'); d.poly([[53,13],[58,9],[62,12],[57,17]],M);
    d.rect(42,13,3,6,'#F6E6B8');
    d.stamp(37,22,['.k...k.','kkk.kkk','.k...k.','.k...k.'],{k:'#8A5A30'});
    d.stamp(46,24,['p.p.p','.....','.ppp.','.ppp.'],{p:'#8A5A30'});
    for(const [a,b,c,e] of [[35,13,52,13],[35,13,35,30],[52,13,52,30],[35,30,52,30],[53,13,58,9],[58,9,58,27],[58,27,53,31]]) d.line(a,b,c,e,O);
    d.line(35,13,40,9,O); d.line(40,9,42,4,O); d.line(42,4,56,4,O); d.line(56,4,58,9,O); d.line(35,13,31,8,O); d.line(31,8,36,4,O); d.line(36,4,40,9,O);
    d.line(53,13,57,17,O); d.line(57,17,62,12,O); d.line(62,12,58,9,O);
    d.ell(46,32,12,1,'#8A8AA0');
    // paw footprints to box
    for(const [x,y] of [[14,36],[20,34],[26,36],[31,33]]) d.stamp(x,y,['p.p','.p.'],{p:'#8C8CA2'});
    // Z (sleeping inside)
    d.stamp(47,0,['zzzz','..z.','.z..','zzzz'],{z:'#FFFFFF'}); d.stamp(52,1,['zz','zz'],{z:'#B8C8FF'});
  },
  // ===== PIG =====
  'pig:s0': d=>{ // honey apple with bite
    const O='#4A1018',R='#E83A48',R2='#B82838',R3='#FF7A6A',F='#FFF0C0',F2='#F0D890',H='#F8B830',H2='#D88A18';
    d.circ(11,18,9,R2); d.circ(20,18,9,R2); d.circ(11,17,8,R); d.circ(19,17,8,R); d.ell(15,26,6,2,R2);
    d.ell(9,13,3,4,R3); d.px(8,11,'#FFFFFF'); d.px(8,12,'#FFFFFF'); d.px(9,10,'#FFFFFF');
    // bite
    const bites=[[29,15,4],[30,21,4]]; const inB=(x,y)=>bites.some(([a,b,r])=>(x-a)**2+(y-b)**2<=r*r+r*.8);
    const nearB=(x,y)=>bites.some(([a,b,r])=>(x-a)**2+(y-b)**2<=(r+1.6)**2);
    for(let y=0;y<32;y++)for(let x=0;x<32;x++){if(inB(x,y)) d.clear(x,y); else if(d.get(x,y)&&nearB(x,y)) d.px(x,y,F)}
    for(let y=0;y<32;y++)for(let x=0;x<32;x++) if(d.get(x,y)===F&&!nearB(x-1,y)) d.px(x,y,F);
    d.px(24,17,'#5A2A10'); d.px(24,19,'#5A2A10'); d.px(25,18,F2); d.px(24,14,F2); d.px(25,22,F2);
    // stem + leaf
    d.dimple=0; d.ell(15,10,3,1,R2); d.line(15,10,17,4,'#6A4220'); d.px(16,5,'#6A4220');
    d.poly([[18,6],[22,2],[27,3],[23,7]],'#5EB84A'); d.line(18,6,25,3,'#3E8A34');
    // honey drip
    d.ell(10,10,4,1,H); d.vline(7,10,14,H); d.vline(8,10,12,H); d.circ(7,15,1,H); d.vline(12,10,13,H); d.px(12,14,H); d.px(10,10,'#FFE890'); d.px(6,15,'#FFE890'); d.px(13,11,H2);
    d.outline(O);
    spark(d,4,5,'#FFE070'); d.px(28,28,'#FFE070'); d.px(2,25,'#FFE070');
  },
  'pig:s1': d=>{ // hot spring egg
    const O='#3A2410',E='#E8C8A0',E2='#C89A70',E3='#FFF0DC',B='#C89A50',B2='#9A7030',B3='#E8C078',S='#FFFFFF',S2='#D8EEF8';
    // eggs (right one behind)
    d.ell(21,17,6,7,E2); d.ell(20,16,5,6,E); d.ell(18,13,2,2,E3);
    d.line(23,13,24,15,'#8A6040'); d.line(24,15,22,17,'#8A6040'); d.line(22,17,24,19,'#8A6040');
    d.ell(11,17,7,9,O); d.ell(11,17,6,8,E2); d.ell(10,16,5,7,E); d.ell(8,12,2,3,E3); d.px(8,11,'#FFFFFF');
    // basket
    d.poly([[2,21],[30,21],[27,30],[5,30]],B); d.hline(2,30,21,B3); d.hline(1,31,22,B2); d.hline(1,31,20,B3);
    for(let y=23;y<30;y+=2) d.hline(3+Math.floor((y-21)/3),29-Math.floor((y-21)/3),y,B2);
    for(let x=5;x<28;x+=3) d.line(x,23,x+(x<16?1:-1),29,B3);
    d.outline(O);
    // steam
    for(const x0 of [7,16,25]){ for(let y=0;y<9;y++){const x=x0+Math.round(Math.sin(y*.8+x0)*1.5); d.px(x,y,'#A8D0E8'); d.px(x+1,y,y%3?'#FFFFFF':'#D8EEF8')}}
    // hot spring tag
    d.rect(21,22,9,8,'#E84050'); d.stamp(22,22,['.w.w.w.','w.w.w..','.w.w.w.','.......','w.....w','.wwwww.'],{w:'#FFFFFF'}); d.frame(20,21,11,10,O);
  },
  'pig:s2': d=>{ // eating contest gold medal
    const O='#4A2A08',G1='#FFF0A0',G2='#FFD040',G3='#E8A020',G4='#B07010',R='#E84050',R2='#B02838',W='#FFFFFF';
    // ribbon
    d.poly([[5,0],[11,0],[18,12],[13,14]],R); d.poly([[27,0],[21,0],[14,12],[19,14]],R2);
    d.line(8,0,15,12,W); d.line(24,0,17,12,'#F0C0C8');
    d.rect(13,11,6,4,G3);
    // medal
    d.circ(16,21,10,G4); d.circ(16,20,9,G3); d.circ(15,20,8,G2); d.ring(16,21,7,G3);
    d.ell(11,16,2,2,G1); d.px(10,15,W);
    // apple emblem
    d.stamp(12,17,['....g...','..rgr...','.rrrrr..','rrrrrrr.','rrrrrrr.','.rrrrr..','..r.r...'].map(r=>r),{r:R,g:'#5EA84A'}); d.px(14,19,'#FF9A9A');
    d.stamp(21,20,['kk','.k','kk','k.','kk'],{k:G4}); // tiny 100? 
    d.outline(O);
    // sleepy z
    d.stamp(25,13,['zzz','.z.','zzz'],{z:'#8AB8F0'}); d.stamp(28,9,['zz','zz'],{z:'#B8D8FF'});
    spark(d,3,24,'#FFE070'); d.px(29,28,'#FFE070');
  },
  'pig:c0': d=>{ // mud puddle after rain
    dgrad(d,0,0,64,18,['#86C8F0','#A0D6F4','#BCE4F8']);
    // rainbow
    const rb=['#F06A6A','#F8A848','#F8E058','#78D068','#68A8F0','#A878E0'];
    rb.forEach((c,i)=>arc(d,46,22,20-i,16-i,Math.PI,Math.PI*2,c)); rb.forEach((c,i)=>arc(d,46,22,19.5-i,15.5-i,Math.PI,Math.PI*2,c));
    cloud(d,14,5,6,'#FFFFFF','#DDEEF8'); cloud(d,30,9,4,'#FFFFFF','#DDEEF8'); cloud(d,62,8,4,'#FFFFFF');
    // far hill + fence
    d.ell(14,20,22,5,'#86C866'); d.ell(52,21,20,4,'#94D070');
    d.rect(0,20,64,20,'#7CC062');
    for(let x=1;x<64;x+=6){d.rect(x,14,2,7,'#C8925A'); d.px(x,13,'#C8925A')} d.hline(0,63,15,'#A8743E'); d.hline(0,63,18,'#A8743E');
    d.rect(0,21,64,1,'#6AAE52');
    // grass tufts
    for(const [x,y] of [[4,28],[24,36],[12,34],[58,37],[30,26],[60,24]]) d.stamp(x,y,['g.g','.g.'],{g:'#5A9E44'});
    // puddle
    d.ell(42,30,17,6,'#7A5030'); d.ell(42,29,15,5,'#9A6A40'); d.ell(41,28,11,3,'#B07E50');
    d.hline(34,40,27,'#C6E0F0'); d.hline(46,50,28,'#C6E0F0'); d.hline(37,42,30,'#86B8D8'); // sky reflections
    d.ell(42,35,15,1,'#6A4428');
    // splashes + bubbles
    d.stamp(25,22,['.b...','b.b..','...b.'],{b:'#9A6A40'}); d.stamp(56,22,['..b.','.b.b','b...'],{b:'#9A6A40'});
    d.ring(48,30,1,'#C89A6A'); d.px(30,29,'#C89A6A'); d.ring(36,31,1,'#C89A6A');
    // muddy hoof prints to the left
    for(const [x,y] of [[24,33],[19,35],[26,37]]) d.stamp(x,y,['m.m','m.m'],{m:'#8A5A30'});
    // hose + bucket for rinsing
    d.rect(56,30,6,6,'#5A9AD8'); d.hline(55,62,30,'#8AC4F0'); d.rect(56,35,6,1,'#3A78B8'); d.ring(59,29,2,'#3A78B8'); d.rect(57,31,4,1,'#C6E0F0');
    d.line(62,26,63,24,'#48B060'); d.line(55,33,52,37,'#48B060'); d.line(52,37,60,38,'#48B060'); d.line(60,38,63,36,'#48B060');
    // flowers + raindrops
    for(const [x,y,c] of [[8,24,'#F8E058'],[16,30,'#FFFFFF'],[3,36,'#F06A8A'],[33,38,'#F8E058']]){d.px(x,y,c); d.px(x,y+1,'#4A9A3A')}
    for(const [x,y] of [[10,26],[22,30],[60,27],[30,35]]) d.px(x,y,'#C6E0F0');
  },
  'pig:c1': d=>{ // mountain open-air hot spring, snow
    dgrad(d,0,0,64,20,['#2A3A6A','#3A4A80','#5A6A9A','#8A8AB8']);
    for(const [x,y] of [[6,3],[20,1],[44,4],[58,2],[33,6]]) d.px(x,y,'#E0E8FF');
    d.circ(52,6,3,'#FFF6D8'); d.circ(53,5,3,'#3A4A80'); // crescent moon
    // mountains
    d.poly([[-4,22],[14,6],[30,22]],'#6A7AA8'); d.poly([[18,22],[38,4],[60,22]],'#7A8AB8'); d.poly([[44,22],[60,10],[72,22]],'#6A7AA8');
    d.poly([[14,6],[10,10],[13,9],[16,11],[18,8]],'#FFFFFF'); d.poly([[38,4],[33,9],[36,8],[39,10],[42,8]],'#FFFFFF'); d.poly([[60,10],[57,13],[60,12],[63,13]],'#FFFFFF');
    // snowy pines
    const pine=(x,y)=>{d.poly([[x,y],[x-4,y+8],[x+4,y+8]],'#2A5A4A'); d.poly([[x,y-4],[x-3,y+3],[x+3,y+3]],'#2A5A4A'); d.hline(x-2,x+2,y+1,'#FFFFFF'); d.hline(x-3,x+3,y+6,'#FFFFFF'); d.px(x,y-4,'#FFFFFF'); d.vline(x,y+8,y+9,'#5A3A2A')};
    pine(4,10); pine(30,12); pine(60,12);
    // snow ground
    d.rect(0,22,64,18,'#F0F4FF'); d.hline(0,63,22,'#FFFFFF'); for(let x=0;x<64;x+=7) d.hline(x,x+3,30+(x%3),'#D8E0F4');
    // bamboo fence
    for(let x=24;x<64;x+=3){d.rect(x,14,2,9,'#B8A860'); d.px(x,13,'#FFFFFF'); d.px(x+1,13,'#FFFFFF'); d.hline(x,x+1,18,'#8A7A40')}
    // rock pool
    d.ell(44,31,17,7,'#6A6A7A'); d.ell(44,30,15,5,'#2AA8B8'); d.ell(44,29,12,3,'#4AC8D0'); d.hline(36,42,28,'#9AE8E8'); d.hline(47,52,30,'#9AE8E8');
    for(const [x,y,r] of [[28,30,3],[31,35,3],[38,37,3],[46,38,3],[54,37,3],[60,33,3],[60,27,3],[52,24,2],[34,25,2],[44,24,2]]){d.ell(x,y,r,r-1,'#7A7A8A'); d.hline(x-r+1,x+r-1,y-r+1,'#FFFFFF'); d.px(x-1,y,'#9A9AAA')}
    // steam
    for(const [x,y] of [[36,22],[44,20],[52,22]]) for(let j=0;j<8;j++) d.px(x+Math.round(Math.sin(j*.8+x)*1.5),y-j,j%2?'#E8F0FF':'#FFFFFF');
    // bucket + towel
    d.rect(57,22,5,4,'#C8925A'); d.hline(57,61,23,'#8A5A30'); d.hline(56,62,22,'#E0B07A');
    d.rect(25,26,5,2,'#F8A8B8'); d.hline(25,29,26,'#FFFFFF');
    // falling snow
    for(let i=0;i<26;i++){const x=d.ri(0,63), y=d.ri(0,38); if(!(x>5&&x<22&&y>19)) d.px(x,y,'#FFFFFF')}
  },
  'pig:c2': d=>{ // infinite dessert kingdom
    dgrad(d,0,0,64,24,['#FFB8D8','#FFC8E0','#FFDCEA','#FFE8F0']);
    cloud(d,10,6,6,'#FFFFFF'); cloud(d,30,3,4,'#FFFFFF');
    // lollipop trees (background left)
    for(const [x,c] of [[4,'#F870A0'],[13,'#70C8F0'],[22,'#B888E8']]){d.vline(x,12,22,'#FFFFFF'); d.circ(x,10,3,c); arc(d,x,10,2,2,0,Math.PI*1.5,'#FFFFFF'); d.px(x,10,'#FFFFFF')}
    // ground: cream with sprinkles
    d.rect(0,22,64,18,'#FFF0D8'); d.hline(0,63,22,'#FFFFFF'); for(let x=0;x<64;x+=5) d.ell(x+2,22,2,1,'#FFFFFF');
    const spr=['#F870A0','#70C8F0','#F8D048','#78D068','#B888E8']; for(let i=0;i<30;i++){const x=d.ri(0,63),y=d.ri(25,39); d.hline(x,x+1,y,spr[i%5])}
    // castle: cake walls
    const CK='#F8D888',CK2='#E8B868',CR='#FFFFFF',JM='#E84868',CH='#8A4A2A',CH2='#6A3418',SKY='#FFDCEA';
    const layer=(x,y,w,h)=>{d.rect(x,y,w,h,CK); for(let j=y+4;j<y+h-2;j+=6){d.rect(x,j,w,1,JM); d.rect(x,j+1,w,1,CR)} d.rect(x,y+h-2,w,2,CK2)};
    layer(26,16,36,15);
    d.rect(26,14,36,2,CR); for(let x=27;x<62;x+=3) d.vline(x,16,16+(x%2)+1,CR);
    // towers
    for(const [x,c] of [[29,'#F870A0'],[58,'#70C8F0']]){layer(x-4,7,9,24); d.ell(x,6,5,2,c); d.ell(x,4,3,2,c); d.px(x-1,3,'#FFFFFF'); d.circ(x,1,1.2,'#E82838'); d.px(x,-1,'#5EA84A'); d.px(x+1,0,'#5EA84A'); for(let i=x-4;i<=x+4;i+=2) d.vline(i,8,9,c); d.rect(x-1,12,2,3,CH2)}
    // central keep
    layer(39,6,11,10); d.rect(39,4,11,2,CR); for(let x=40;x<50;x+=2) d.px(x,6,CR);
    d.ell(44,3,4,1,CR); d.ell(44,1,2,1,CR); d.circ(44,-1,1.5,'#E82838'); d.rect(43,9,3,4,CH2); d.px(44,8,CH2);
    // door: chocolate bar
    d.rect(41,22,7,9,CH); d.rect(42,21,5,1,CH); d.vline(44,22,30,CH2); d.hline(41,47,26,CH2); d.px(42,23,'#B07040');
    // bite mark in the wall
    for(const [x,y] of [[52,14],[52,18]]) d.circ(x,y,2.5,SKY);
    for(const [x,y] of [[50,15],[50,19],[51,21]]) d.px(x,y,CK2);
    d.px(50,32,CK); d.px(53,33,CK2); d.px(48,34,CK);
    // candy cane
    d.vline(36,32,38,'#FFFFFF'); for(let y=32;y<39;y+=2) d.px(36,y,'#E84868'); arc(d,38,32,2,2,Math.PI,Math.PI*2,'#E84868'); d.px(40,33,'#FFFFFF'); d.px(38,30,'#FFFFFF');
    // cookie path stones
    for(const [x,y] of [[44,33],[46,36],[42,38]]){d.ell(x,y,2,1,'#D89A58'); d.px(x,y,'#6A3418')}
    // donut on ground
    d.circ(56,34,3,'#F870A0'); d.circ(56,34,1,'#FFF0D8'); d.px(54,33,'#FFFFFF'); d.px(57,32,'#F8D048');
    spark(d,24,4,'#FFFFFF','#FFE070');
  },
  // ===== AXOLOTL =====
  'axolotl:s0': d=>{ // the roundest bubble
    const O='#2A6A98',E='#6AB8E0',I='#E4F6FF',I2='#C8EAFA',W='#FFFFFF';
    d.circ(15,15,12,E); d.circ(15,15,11,I2); d.circ(14,14,9,I);
    // rainbow sheen
    arc(d,15,15,9,9,0.1,1.3,'#F8A8C8'); arc(d,15,15,8,8,0.15,1.25,'#F8E8A0'); arc(d,15,15,7,7,0.2,1.2,'#A8E8C8');
    // highlights
    arc(d,15,15,9,9,Math.PI*1.05,Math.PI*1.45,W); arc(d,15,15,8,8,Math.PI*1.1,Math.PI*1.4,W); d.circ(9,8,1.4,W); d.px(21,22,W);
    // tiny reflected window
    d.stamp(18,7,['bb.bb','bb.bb','.....','bb.bb'],{b:'#B0DCF4'});
    d.outline(O);
    // little bubbles
    d.stamp(25,25,['.ee.','eWIe','eIIe','.ee.'],{e:E,I:I2,W}); d.stamp(25,24,['.ee.'],{e:O}); 
    bub(d,5,28,E); bub(d,29,5,E);
    spark(d,27,15,'#9AE0FF');
  },
  'axolotl:s1': d=>{ // xochimilco flower crown
    const O='#2A3A28',G='#4AA048',G2='#2E7A3A',G3='#7ACC5A';
    // ribbons hanging behind
    const rib=[['#F05A8A',13],['#F8C838',16],['#38B8B0',19],['#A060D8',22]];
    rib.forEach(([c,x],i)=>{for(let y=16;y<31-(i%2)*3;y++) {d.px(x+Math.round(Math.sin(y*.5+i)*1),y,c); d.px(x+1+Math.round(Math.sin(y*.5+i)*1),y,c)}});
    // wreath ring
    for(let y=0;y<32;y++)for(let x=0;x<32;x++){const o=((x-16)/14.4)**2+((y-14)/8.4)**2, n=((x-16)/9.6)**2+((y-13)/4.2)**2; if(o<=1&&n>1) d.px(x,y,(x+y)%3?G:G2)}
    for(const [x,y] of [[4,12],[27,11],[9,7],[22,7],[6,18],[26,18],[16,21]]) d.stamp(x,y,['.l','ll'],{l:G3});
    const fl=(x,y,r,c,c2)=>{d.circ(x,y,r,c); d.px(x,y,'#FFE060'); if(r>1.5){d.px(x-1,y-1,c2); d.px(x+1,y+1,'#FFFFFF')}};
    fl(5,9,1.8,'#F870A0','#FFB0CC'); fl(11,6,1.6,'#F8A030','#FFD080'); fl(21,6,1.6,'#A878E8','#D0B8FF'); fl(27,9,1.8,'#F8E040','#FFF8A0');
    fl(3,15,2.2,'#F8A030','#FFD080'); fl(29,15,2.2,'#F870A0','#FFB0CC');
    fl(8,19,2.6,'#E83850','#FF8A9A'); fl(16,21,3,'#F870A0','#FFB0CC'); fl(24,19,2.6,'#F8A030','#FFD080');
    fl(12,21,1.5,'#FFFFFF','#FFFFFF'); fl(20,21,1.5,'#A878E8','#D0B8FF');
    d.outline(O);
    spark(d,27,26,'#FFE070'); d.px(3,26,'#FFE070');
  },
  'axolotl:s2': d=>{ // magic regrowing gill
    const O='#5A1A40',P='#F48AB0',P2='#D85A90',P3='#FFC4DC',V='#7A4AB8',V2='#5A3090',V3='#9A70D8',GL='#A8F0E8';
    // velvet cushion
    d.ell(16,27,13,4,V2); d.ell(16,26,12,3,V); d.ell(12,25,5,1,V3);
    d.px(4,27,'#F8D048'); d.px(28,27,'#F8D048'); d.px(3,28,'#F8D048'); d.px(29,28,'#F8D048');
    d.outline(O);
    // glow
    for(const [x,y] of [[8,10],[12,4],[22,13],[18,20],[6,18]]) d.px(x,y,GL);
    // three feathery gill stalks
    layer(d,()=>{
      for(const [ex,ey,cx,cy] of [[5,7,8,18],[16,2,13,14],[27,6,22,16]]){
        const B=t=>[(1-t)**2*15+2*(1-t)*t*cx+t*t*ex,(1-t)**2*25+2*(1-t)*t*cy+t*t*ey];
        for(let t=.22;t<=.98;t+=.075){const [x,y]=B(t),[x2,y2]=B(t+.01); let nx=-(y2-y),ny=x2-x; const L=Math.hypot(nx,ny); nx/=L; ny/=L; const len=1.5+2.5*Math.sin(t*Math.PI*.9);
          for(const g of [1,-1]){d.line(x,y,x+g*nx*len,y+g*ny*len,P2); d.px(Math.round(x+g*nx*(len+1)),Math.round(y+g*ny*(len+1)),P3)}}
        for(let t=0;t<=1;t+=.01){const [x,y]=B(t); d.circ(x,y,t<.4?1.3:.8,P)}
        for(let t=.05;t<=.8;t+=.02){const [x,y]=B(t); d.px(Math.round(x-.7),Math.round(y),P3)}
      }
      d.ell(15,25,3,2,P); d.ell(14,24,1,1,P3);
      // little regrowing bud
      d.line(22,24,25,20,P); d.circ(25,19,1.2,P3); d.px(23,21,P2); d.px(26,21,P2);
    },'#A83A78');
    spark(d,27,9,'#A8F0E8'); spark(d,5,4,'#FFE070'); tw(d,28,16,'#FFF4B0');
  },
  'axolotl:c0': d=>{ // pet shop fish tank
    dgrad(d,0,0,64,40,['#58C0D8','#48B0D0','#3AA0C8','#3090BC']);
    // tank rim + lamp
    d.rect(0,0,64,3,'#2A3A4A'); d.hline(0,63,2,'#4A5A6A'); d.rect(10,0,44,1,'#FFF6C8');
    d.hline(0,63,4,'#A8E8F4'); for(let x=0;x<64;x+=6) d.hline(x,x+2,5,'#80D4E8');
    // light rays
    for(const x0 of [20,38,52]) for(let y=6;y<28;y++) if((y+x0)%2) d.px(x0-Math.floor((y-6)/3),y,'#70CCE0');
    // gravel
    d.rect(0,31,64,9,'#E8D8C0'); for(let i=0;i<120;i++){const c=['#F890B0','#78C8F0','#FFFFFF','#F8D060','#C8B8A0'][i%5]; d.px(d.ri(0,63),d.ri(31,39),c)} d.hline(0,63,31,'#F8ECD8');
    d.rect(4,30,12,3,'#E8D8C0'); // flatter sand near pet
    // plants
    const weed=(x,h,c,c2)=>{for(let y=0;y<h;y++){const xx=x+Math.round(Math.sin(y*.45)*1.3); d.px(xx,31-y,c); if(y%3===0) {d.px(xx+1,31-y,c2); d.px(xx-1,30-y,c2)}}};
    weed(2,16,'#3AA048','#6ACC5A'); weed(60,22,'#3AA048','#6ACC5A'); weed(57,16,'#2E8A40','#6ACC5A'); weed(27,10,'#2E8A40','#6ACC5A');
    // castle ornament
    d.rect(40,20,14,11,'#C8A8D8'); d.rect(38,16,5,15,'#C8A8D8'); d.rect(51,16,5,15,'#C8A8D8');
    for(const x of [38,40,51,53,55]) d.px(x,15,'#C8A8D8'); d.px(42,15,'#C8A8D8'); d.px(38,15,'#C8A8D8');
    d.rect(44,24,6,7,'#4A3A6A'); d.circ(47,24,3,'#4A3A6A'); d.rect(39,19,2,2,'#4A3A6A'); d.rect(53,19,2,2,'#4A3A6A');
    d.poly([[37,16],[40,11],[43,16]],'#E87090'); d.poly([[50,16],[53,11],[56,16]],'#E87090');
    d.vline(41,22,30,'#A888C0'); d.vline(52,22,30,'#A888C0');
    // air stone + bubbles
    d.rect(31,30,4,2,'#8A8A9A'); bub(d,33,26,'#E8FAFF'); bub(d,32,21,'#E8FAFF'); bub2(d,34,16,'#E8FAFF'); bub2(d,32,11,'#E8FAFF'); bub(d,34,6,'#E8FAFF');
    // goldfish
    d.stamp(42,7,['...oooo.....','..oooooo..o.','.oooooooooo.','okoooooooo..','.oooooo.ooo.','..ooo......o'].map(r=>r),{o:'#F88A30',k:'#1A1A2A'});
    d.stamp(45,6,['ff.'],{f:'#FFB050'}); d.px(45,9,'#FFC870'); d.px(44,9,'#FFC870');
    d.px(40,8,'#E8FAFF'); d.px(38,6,'#E8FAFF');
    // thermometer on glass
    d.rect(60,6,3,13,'#F0F8FF'); d.rect(61,11,1,7,'#E84848'); d.circ(61,19,1.3,'#E84848'); d.px(59,11,'#58D068'); d.px(58,11,'#58D068');
    // glass edge shine
    d.vline(0,6,30,'#A8E8F4'); d.vline(1,8,12,'#A8E8F4');
    bub(d,12,13,'#E8FAFF'); d.px(10,20,'#E8FAFF');
  },
  'axolotl:c1': d=>{ // xochimilco canals, from below
    // above water
    dgrad(d,0,0,64,13,['#8ED4F4','#A8DEF6','#C4E8F6']);
    for(const x of [3,12,52,61]){d.ell(x,5,2,6,'#3A8A4A'); d.vline(x,10,12,'#6A4A2A')}
    d.rect(0,10,64,3,'#5AA050');
    // trajinera (flower boat) on the surface
    d.rect(24,6,26,1,'#E84858'); d.rect(24,7,26,3,'#F8D040');
    d.stamp(27,7,['f.f.f.f.f.f.f.f.f.f.f'],{f:'#E84858'}); d.stamp(28,8,['g.g.g.g.g.g.g.g.g.g'],{g:'#38A8D8'});
    d.vline(25,10,12,'#38A8D8'); d.vline(48,10,12,'#38A8D8'); d.vline(36,10,12,'#38A8D8');
    d.circ(26,5,1,'#F870A0'); d.circ(48,5,1,'#F8A030'); d.circ(37,4,1.3,'#F870A0'); d.circ(32,5,1,'#A060D8'); d.circ(43,5,1,'#F8E040');
    d.rect(22,12,30,1,'#38A8D8');
    // water surface line
    d.hline(0,63,13,'#D8F4F4');
    // underwater
    dgrad(d,0,14,64,26,['#5AB8A8','#48A898','#3A9488','#2E8078','#286E68']);
    // light rays
    for(const x0 of [8,18,30,56]) for(let y=14;y<34;y++) if((y+x0)%2) d.px(x0-Math.floor((y-14)/4),y,'#6ACAB8');
    // boat hull from below
    d.poly([[21,14],[53,14],[49,19],[25,19]],'#8A5A3A'); for(let x=24;x<51;x+=4) d.vline(x,15,18,'#6A4428'); d.hline(25,49,19,'#5A3A22');
    d.hline(21,53,14,'#C4E8E8');
    // lily pads and floating marigolds
    for(const [x,w] of [[4,4],[14,3],[58,4]]){d.ell(x,15,w,1,'#3A8A40'); d.px(x,16,'#2A6A30')}
    for(const [x,y] of [[9,17],[56,18],[60,22],[17,21]]){d.stamp(x,y,['.o.','ooo','.o.'],{o:'#F8A030'}); d.px(x+1,y+1,'#F8E040')}
    // canal bottom with weeds
    d.rect(0,34,64,6,'#4A5A3A'); for(let x=0;x<64;x+=3) d.px(x,33,'#4A5A3A'); for(let i=0;i<14;i++) d.px(d.ri(0,63),d.ri(35,39),'#5E7046');
    for(const [x,h] of [[26,8],[33,12],[40,7],[46,10],[60,9]]) for(let y=0;y<h;y++) d.px(x+Math.round(Math.sin(y*.6+x)),34-y,y%2?'#3A9A48':'#58B85A');
    // bubbles + little fish
    for(const [x,y] of [[30,24],[31,27],[44,22],[45,25]]) d.px(x,y,'#C4F0E8');
    d.stamp(50,26,['.ss.s','sssss','.ss.s'],{s:'#C8D8A0'}); d.px(51,27,'#1A2A2A');
  },
  'axolotl:c2': d=>{ // mystic deep-sea lake
    dgrad(d,0,0,64,40,['#0E1640','#0C1236','#0A0E2C','#080A22','#06081A']);
    // marine snow
    for(let i=0;i<30;i++) d.px(d.ri(0,63),d.ri(0,30),i%3?'#3A4A7A':'#6A7AAA');
    // seafloor
    d.rect(0,30,64,10,'#2A2440'); for(let x=0;x<64;x++) d.vline(x,29+Math.round(Math.sin(x/5)*1),30,'#2A2440');
    for(let i=0;i<20;i++) d.px(d.ri(0,63),d.ri(32,39),'#3A3458');
    // rock ridge behind
    d.poly([[24,30],[30,18],[36,22],[42,14],[50,20],[58,16],[64,22],[64,30]],'#1E1C38'); d.line(30,18,36,22,'#2E2A4E'); d.line(42,14,50,20,'#2E2A4E');
    // brine lake (lake on the seabed)
    d.ell(45,31,16,4,'#5A4A6A'); d.ell(45,30,14,3,'#4A90C8'); d.ell(45,30,12,2,'#7AC8F0'); d.hline(38,46,30,'#C8F0FF'); d.hline(48,52,29,'#C8F0FF');
    for(let x=30;x<61;x+=2) d.px(x,33+((x/2)%2),'#E8C870'); // mussel rim
    // glowing jellyfish
    d.ell(36,7,4,3,'#C890F0'); d.hline(32,40,9,'#9A60D0'); d.ell(36,6,2,1,'#F0D8FF');
    for(const x of [33,35,37,39]) for(let y=10;y<16;y++) d.px(x+(y%2&&x%4===1?1:0),y,'#B878E8');
    // anglerfish light
    d.stamp(54,4,['....l','...k.','..k..','.kk..'],{l:'#FFF8A0',k:'#3A3A6A'}); d.circ(58,4,2,'#3A4A2A'); d.px(58,4,'#FFF8A0'); d.circ(58,4,1,'#FFF8A0');
    d.ell(53,10,5,3,'#2A2A4A'); d.px(50,9,'#FFF8A0'); d.stamp(48,11,['w.w.w'],{w:'#E8E8F0'});
    // bioluminescent plants
    for(const [x,h,c] of [[26,8,'#38E8C8'],[29,5,'#F870C8'],[61,7,'#38E8C8']]){d.vline(x,30-h,29,'#1E5A5A'); d.circ(x,30-h,1,c); d.px(x-1,32-h,c)}
    for(const [x,y] of [[33,29],[57,30],[22,31]]) d.px(x,y,'#38E8C8');
    // sparkles
    tw(d,12,6,'#5A8AE8'); d.px(20,12,'#A8C8FF'); d.px(4,10,'#A8C8FF');
  },
  // ===== BAILEY =====
  'bailey:s0': d=>{ // scrub-room soap
    const O='#1E4A48',T='#9AE8D8',M='#5CC4B0',D='#3A9A88',W='#FFFFFF',F='#E0F4F8',B='#8AC8F0';
    d.poly([[3,16],[27,16],[23,9],[8,9]],T); d.rect(3,16,25,9,M); d.hline(3,27,24,D); d.rect(3,16,1,9,D); d.rect(27,16,1,9,D);
    d.hline(8,22,10,'#C8FFF4'); d.hline(5,10,15,'#C8FFF4');
    // engraved cross on top
    d.stamp(13,10,['.cc.','cccc','cccc','.cc.'].map(r=>r),{c:'#6AD0BC'}); d.stamp(13,10,['.ww.','wwww','.ww.'],{w:'#E8FFFA'});
    // suds
    for(const [x,y,r] of [[22,9,3],[26,11,2.4],[18,8,2],[6,15,2.2],[9,13,1.6]]){d.circ(x,y,r,F); d.px(Math.round(x-r/2),Math.round(y-r/2),W)}
    d.outline(O);
    // floating bubbles + drops
    for(const [x,y] of [[25,3],[9,5],[29,6]]) bub(d,x,y,B);
    bub2(d,15,3,B);
    d.stamp(5,26,['.b.','bbb','.b.'],{b:B}); d.stamp(25,27,['.b','bb'],{b:B}); d.px(12,28,B); d.px(12,29,B);
  },
  'bailey:s1': d=>{ // teddy for tuck
    const O='#3A2010',B='#B07840',B2='#8A5A2A',B3='#D8A060',M='#F0D0A0',K='#1A1010',P='#F0A0A0',R='#3A78D8';
    d.ell(16,23,8,7,B); d.ell(15,22,6,5,B3); d.ell(16,24,4,4,M);
    d.ell(8,21,3,4,B); d.ell(24,21,3,4,B); // arms
    d.circ(10,28,3.2,B); d.circ(22,28,3.2,B); d.circ(10,28,1.6,M); d.circ(22,28,1.6,M);
    d.circ(8,4,3,B); d.circ(24,4,3,B); d.circ(8,4,1.5,P); d.circ(24,4,1.5,P);
    d.circ(16,10,8,B); d.ell(14,8,4,3,B3); d.ell(16,13,3.4,2.4,M);
    d.px(12,9,K); d.px(20,9,K); d.px(12,8,K); d.px(20,8,K); d.px(11,8,'#FFFFFF');
    d.stamp(15,11,['kkk','.k.'],{k:K}); d.stamp(14,14,['k...k','.kkk.'],{k:'#6A3A20'});
    d.px(10,12,P); d.px(22,12,P);
    // bow tie
    d.stamp(11,17,['rr...rr','rrrkrrr','rr...rr'].map(r=>r.replace(/k/,'R')),{r:R,R:'#1E5AB0'}); d.rect(15,17,2,3,'#1E5AB0'); d.rect(12,17,8,3,R); d.rect(15,17,2,3,'#1E5AB0'); d.px(13,18,'#6AA0F0');
    // patch stitch
    d.stamp(19,22,['x.x','.x.','x.x'],{x:B2});
    d.outline(O);
    // gift tag T
    d.line(24,18,27,14,'#E8E0D0'); d.rect(25,9,6,6,'#FFF8E0'); d.frame(25,9,6,6,'#C8A060'); d.stamp(26,10,['kkkk','.kk.','.kk.','.kk.'],{k:'#E84050'});
    heart(d,1,10,'#F06A8A','#FFC0D0');
  },
  'bailey:s2': d=>{ // chief of surgery nameplate
    const O='#2A1A10',W='#6A3A22',W2='#4A2614',W3='#8A5232',G='#F8C838',G2='#C89020',G3='#FFF0A0',K='#3A2410';
    d.rect(1,8,30,17,W); d.rect(1,23,30,2,W2); d.hline(1,30,8,W3); d.vline(1,8,24,W3);
    for(let x=3;x<30;x+=5) d.px(x,10+(x%3),W2);
    d.rect(4,11,24,11,G2); d.rect(4,11,23,10,G); d.hline(4,26,11,G3); d.vline(4,11,20,G3);
    // MB
    d.stamp(7,13,['k...k.kkkk.','kk.kk.k...k','k.k.k.kkkk.','k...k.k...k','k...k.kkkk.'],{k:K});
    // star of life badge
    d.stamp(20,13,['.b.b.','bbbbb','.bbb.','bbbbb','.b.b.'],{b:'#2A6AC8'}); d.px(22,15,'#FFFFFF');
    d.hline(7,24,19,G2);
    // screws
    for(const [x,y] of [[3,10],[28,10],[3,22],[28,22]]){d.px(x,y,G3)}
    // hanging chain
    d.line(9,8,15,2,'#B8B8C0'); d.line(22,8,16,2,'#B8B8C0'); d.circ(16,2,1,'#D8D8E0');
    d.outline(O);
    spark(d,28,4,'#FFE070'); d.px(3,28,'#FFE070'); d.px(30,28,'#FFE070');
  },
  'bailey:c0': d=>{ // hospital on-call room
    d.rect(0,0,64,28,'#4A5478'); for(let y=4;y<28;y+=6) d.hline(0,63,y,'#444C6E');
    d.rect(0,28,64,12,'#6A7490'); for(let x=0;x<64;x+=6) d.vline(x,28,39,'#5E6884'); for(let y=31;y<40;y+=4) d.hline(0,63,y,'#5E6884');
    d.hline(0,63,27,'#3A4262');
    // door on the right, ajar with corridor light
    d.rect(54,6,10,22,'#E8F0FF'); d.rect(56,6,8,22,'#8A96B8'); d.rect(58,10,4,5,'#E8F0FF'); d.px(57,17,'#FFE070');
    d.poly([[54,28],[58,28],[46,39],[30,39]],'#8A94B0');
    // bunk bed
    const F='#9AA4BC',F2='#6A7490';
    d.rect(26,6,2,24,F); d.rect(50,6,2,24,F); d.rect(26,6,26,1,F);
    for(const y of [12,24]){d.rect(28,y,22,2,F2); d.rect(28,y-3,22,3,'#E8ECF4'); d.rect(28,y-3,5,2,'#FFFFFF');
      d.ell(40,y-3,8,2,'#3A78C8'); d.rect(33,y-3,17,3,'#3A78C8'); d.hline(33,49,y-3,'#5A98E8'); d.ell(41,y-4,5,2,'#3A78C8'); d.px(39,y-6,'#5A98E8')}
    // hair tufts peeking + Zzz
    d.stamp(31,6,['hh.','hhh'],{h:'#5A3A22'}); d.stamp(31,18,['.hh','hhh'],{h:'#E8B860'});
    d.stamp(36,1,['zzz','.z.','zzz'].map(r=>r.replace('.z.','..z').replace('..z','.z.')),{z:'#E8F0FF'}); d.stamp(41,13,['zz','zz'],{z:'#C8D4F0'});
    // nightstand + lamp glow
    d.rect(16,20,7,8,'#8A5A3A'); d.hline(16,22,20,'#A8743E'); d.hline(17,21,24,'#6A4428');
    d.circ(19,14,5,'#5A6488'); d.poly([[16,17],[22,17],[21,14],[17,14]],'#FFE08A'); d.vline(19,18,19,'#C8C8D0');
    // pager on the floor
    d.rect(44,33,5,3,'#2A2E3A'); d.rect(45,34,2,1,'#88E888'); d.px(48,33,'#FF5050');
    // clipboard / chart on the wall
    d.rect(4,6,7,9,'#C89A60'); d.rect(5,8,5,6,'#FFFFFF'); d.hline(6,8,9,'#8A96B8'); d.hline(6,8,11,'#8A96B8'); d.rect(6,5,3,2,'#B8B8C0');
    // coffee cups
    d.rect(18,18,2,2,'#FFFFFF'); d.rect(21,18,2,2,'#F0D8B0');
  },
  'bailey:c1': d=>{ // space needle
    dgrad(d,0,0,64,26,['#8AB0D0','#A0C0DC','#B8D0E4','#CCDCE8']);
    cloud(d,10,5,6,'#E8F0F8','#C8D8E8'); cloud(d,30,8,4,'#E8F0F8');
    // Mt Rainier faint
    d.poly([[0,24],[14,12],[30,24]],'#B0C0D8'); d.poly([[14,12],[10,16],[13,15],[15,17],[18,15]],'#F4F8FF');
    // skyline
    const bl=[[20,14,6],[27,10,5],[33,16,6],[52,12,5],[58,17,6],[2,18,6],[10,19,6]];
    for(const [x,y,w] of bl){d.rect(x,y,w,26-y,'#6A7A98'); for(let j=y+2;j<25;j+=3) for(let i=x+1;i<x+w-1;i+=2) d.px(i,j,'#A8C0E0')}
    d.rect(38,11,4,15,'#5A6A88');
    // space needle
    const N='#E8ECF0',N2='#B8C0CC',N3='#8A94A4';
    d.vline(46,0,4,N3); d.ell(46,5,2,1,N2);
    d.ell(46,7,8,1,N); d.hline(38,54,8,'#F8A848'); d.ell(46,9,6,1,N2); d.hline(41,51,10,N3);
    d.line(44,11,42,29,N); d.line(48,11,50,29,N); d.line(45,11,44,29,N2); d.line(47,11,48,29,N2);
    d.hline(43,49,17,N3); d.line(43,24,49,24,N3);
    // park + path
    d.rect(0,26,64,14,'#78B860'); d.hline(0,63,26,'#5A9A4A'); for(let i=0;i<18;i++) d.px(d.ri(0,63),d.ri(28,39),'#68A852');
    d.poly([[40,29],[52,29],[60,39],[34,39]],'#D8D0C0');
    for(const x of [30,58,62]){d.circ(x,25,3,'#3E8A44'); d.vline(x,27,29,'#6A4A2A')}
    d.circ(26,26,2,'#4E9A50');
    // bench + coffee cup
    d.rect(53,31,7,1,'#8A5A3A'); d.vline(54,32,33,'#5A3A22'); d.vline(59,32,33,'#5A3A22'); d.rect(55,30,2,1,'#FFFFFF'); d.px(56,29,'#3A7A3A');
  },
  'bailey:c2': d=>{ // summit of mt rainier, five rules
    dgrad(d,0,0,64,20,['#2A68C8','#3A80D8','#5A9AE4','#80B8EE']);
    d.circ(12,5,3,'#FFFFFF'); d.circ(12,5,4.5,'#9AC8F4'); d.circ(12,5,3,'#FFFFFF');
    // sea of clouds below
    d.rect(0,17,64,8,'#E8F0FA'); for(let x=0;x<64;x+=8){d.ell(x+3,17,5,2,'#FFFFFF')} d.hline(0,63,22,'#D0DCF0');
    // summit snow
    d.poly([[0,26],[30,24],[46,12],[54,10],[64,14],[64,40],[0,40]],'#F4F8FF');
    d.poly([[46,12],[54,10],[64,14],[64,20],[52,18]],'#FFFFFF'); d.line(30,24,46,12,'#D8E4F4'); d.line(54,10,64,14,'#D8E4F4');
    d.poly([[50,16],[58,15],[64,20],[64,24],[54,22]],'#C8D8EC'); // crater shadow
    for(const [x,y] of [[8,32],[20,35],[34,30],[44,36],[56,33]]) d.hline(x,x+5,y,'#DCE6F4');
    // sign post with five tally marks
    d.vline(40,14,26,'#8A5A3A'); d.rect(34,13,13,7,'#A8743E'); d.frame(34,13,13,7,'#6A4428');
    d.stamp(36,15,['k.k.k.k..','k.k.k.k..','kkkkkkkkk'],{k:'#2A1A10'}); d.line(35,18,44,15,'#E84040');
    // ice axe in snow + rope + footprints
    d.vline(50,22,28,'#5A5A6A'); d.hline(48,52,22,'#3A3A4A'); d.px(48,23,'#3A3A4A');
    d.line(50,27,58,30,'#E84040'); d.line(58,30,62,28,'#E84040');
    for(const [x,y] of [[26,36],[31,34],[36,32],[41,30],[45,28]]) d.stamp(x,y,['f.f'],{f:'#B8C8E0'});
    // flag on peak
    d.vline(54,4,10,'#5A5A6A'); d.rect(55,4,5,3,'#E84040'); d.hline(55,59,5,'#FFFFFF');
  },
  // ===== LEMONGRAB =====
  'lemongrab:s0': d=>{ // exactly one lemon candy
    const O='#5A4008',Y='#F8E040',Y2='#E0B820',Y3='#FFF8A8',C='#E8F4FF',C2='#B8D4F0',R='#E84040';
    // wrapper twists
    d.poly([[8,15],[1,8],[3,15],[1,22]],C); d.poly([[24,15],[31,8],[29,15],[31,22]],C);
    d.line(8,15,2,10,C2); d.line(8,15,2,20,C2); d.line(24,15,30,10,C2); d.line(24,15,30,20,C2);
    // candy
    d.ell(16,15,9,7,Y2); d.ell(15,14,8,6,Y); 
    // lemon slice pattern
    d.circ(16,15,4,Y3); for(let a=0;a<6;a++) d.line(16,15,16+Math.round(4*Math.cos(a*Math.PI/3)),15+Math.round(4*Math.sin(a*Math.PI/3)),Y2); d.ring(16,15,4,'#FFFFFF');
    d.ell(11,11,2,1,'#FFFFFF'); d.px(9,13,'#FFFFFF');
    d.outline(O);
    // "1" badge
    d.circ(26,25,4,R); d.stamp(25,22,['.w','ww','.w','.w','.w','ww'].map(r=>r.padEnd(3,'.')),{w:'#FFFFFF'}); d.stamp(26,27,['ww'],{w:'#FFFFFF'});
    d.ring(26,25,4.5,'#7A1818');
    spark(d,5,27,'#FFE070'); d.px(28,3,'#FFE070');
  },
  'lemongrab:s1': d=>{ // the rulebook
    const O='#3A0E10',R='#D03838',R2='#A02428',R3='#F06060',P='#FFF4D8',P2='#E0D0A8',G='#F8D040',G2='#C89A20',Y='#F8E040';
    d.rect(10,5,18,23,P); for(let y=7;y<28;y+=2) d.hline(24,27,y,P2);
    d.rect(4,3,20,25,R); d.rect(4,3,3,25,R2); d.hline(7,23,3,R3); d.vline(23,4,27,R2);
    // lemon emblem
    d.ell(15,13,5,4,Y); d.ell(14,12,3,2,'#FFF8A8'); d.px(21,13,Y); d.px(9,13,Y); d.px(20,11,G2); d.stamp(13,7,['.gg','gg.'],{g:'#5EA84A'});
    // gold frame lines + corners
    d.frame(8,5,14,21,G2); d.stamp(8,5,['gg','g.'],{g:G}); d.stamp(20,24,['.g','gg'],{g:G});
    // exclamation
    d.rect(14,19,2,3,G); d.rect(14,23,2,1,G);
    // ribbon bookmark + clasp
    d.rect(17,28,2,3,Y); d.px(17,31,Y); d.rect(23,13,6,4,G2); d.rect(26,14,2,2,G);
    d.outline(O);
    spark(d,28,4,'#FFE070');
  },
  'lemongrab:s2': d=>{ // deed to lemon kingdom
    const O='#4A2A10',P='#F8ECC8',P2='#E8D49C',P3='#C8A868',W='#8A5A2A',W2='#6A4020',K='#7A5A40',R='#C82838',Y='#F8E040';
    d.rect(6,4,20,23,P); d.rect(6,4,1,23,P2); d.rect(25,4,1,23,P2);
    for(let y=14;y<23;y+=2) d.hline(9,22-(y%4),y,K);
    // crown + lemon picture
    d.stamp(11,6,['y..y..y..y','yyyyyyyyyy','yryyyyyyry'].map(r=>r),{y:'#F8C838',r:R});
    d.ell(16,11,3,2,Y); d.px(13,11,Y); d.px(19,11,Y); d.px(15,10,'#FFFFFF');
    // signature
    d.line(10,24,12,22,'#3A2A8A'); d.line(12,22,13,24,'#3A2A8A'); d.line(13,24,16,22,'#3A2A8A'); d.line(16,22,18,24,'#3A2A8A');
    // rolls
    d.rect(3,1,26,4,P2); d.hline(3,28,1,P); d.hline(3,28,4,P3); d.rect(1,2,2,2,W); d.rect(29,2,2,2,W);
    d.rect(3,26,26,4,P2); d.hline(3,28,26,P); d.hline(3,28,29,P3); d.rect(1,27,2,2,W); d.rect(29,27,2,2,W);
    // wax seal with ribbon
    d.line(22,24,20,31,R); d.line(23,24,25,31,R); d.circ(22,24,3,'#E8C030'); d.circ(22,24,2,Y); d.px(21,23,'#FFFFFF'); d.px(22,24,W2);
    d.outline(O);
    spark(d,29,10,'#FFE070'); d.px(2,12,'#FFE070');
  },
  'lemongrab:c0': d=>{ // castle dungeon roll call
    bricks(d,0,0,64,32,'#5A5E4E','#44483A',5,2);
    for(let i=0;i<14;i++) d.px(d.ri(0,63),d.ri(0,30),'#6A6E5A');
    d.rect(0,32,64,8,'#3E4034'); for(let x=0;x<64;x+=7) d.vline(x,32,39,'#34362C'); d.hline(0,63,32,'#6A6E5A'); d.hline(0,63,36,'#34362C');
    // cell
    d.rect(28,6,32,26,'#1A1C16'); d.rect(28,5,32,2,'#2A2A24');
    for(const [x,y] of [[33,16],[40,20],[47,14],[53,22],[36,26]]){d.px(x,y,'#F8E040'); d.px(x+2,y,'#F8E040')}
    for(let x=29;x<60;x+=3){d.vline(x,7,31,'#7A7E88'); d.px(x,7,'#A8ACB4')} d.hline(28,59,10,'#5A5E68'); d.hline(28,59,28,'#5A5E68');
    d.rect(42,17,3,4,'#C89A30'); d.px(43,19,'#3A2A10'); // lock
    // torches with glow
    for(const x of [12,62]){d.circ(x,10,4,'#7A6A44'); d.rect(x-1,12,2,5,'#6A4428'); d.stamp(x-1,8,['.f.','fyf','fyf'],{f:'#F87830',y:'#FFE070'})}
    // chains + shackles
    d.vline(22,0,12,'#8A8E98'); for(let y=1;y<12;y+=2) d.px(23,y,'#8A8E98'); d.ring(22,14,1.5,'#8A8E98');
    // roll call list nailed on wall
    d.rect(14,17,8,10,'#F8ECC8'); for(let y=19;y<26;y+=2){d.hline(15,18,y,'#7A5A40'); d.px(20,y,'#40A040')} d.px(17,17,'#3A3A3A');
    // key ring on hook
    d.px(5,16,'#3A3A3A'); d.ring(5,19,2,'#E8C030'); d.stamp(6,20,['kk','.k','kk'],{k:'#E8C030'});
    // lemon in a puddle of drips
    d.ell(56,35,3,1,'#2A2C24');
  },
  'lemongrab:c1': d=>{ // lemon kingdom
    dgrad(d,0,0,64,22,['#78C8F4','#90D4F6','#A8DEF8']);
    d.circ(8,5,3,'#FFF6A0'); d.circ(8,5,2,'#FFFFFF');
    cloud(d,22,5,5,'#FFFFFF'); 
    d.ell(14,24,22,6,'#8AD068'); d.ell(52,23,20,5,'#9AD878');
    // castle
    const Y='#F8E040',Y2='#E0B820',Y3='#FFF8A8',G='#5EA84A';
    d.rect(30,10,30,14,Y); d.rect(30,10,30,1,Y3); for(let x=30;x<60;x+=4) d.rect(x,8,2,2,Y);
    for(const [x,w,h] of [[31,6,16],[53,6,16],[41,8,22]]){d.rect(x,22-h,w,h,Y2); d.rect(x+1,22-h,w-2,h,Y); const cx=x+w/2-.5; d.ell(cx,22-h-2,w/2+1,3,Y); d.px(cx,22-h-6,Y2); d.px(cx+.5,22-h-6,Y2); d.ell(cx-1,22-h-3,1,1,Y3); d.stamp(Math.round(cx),22-h-8,['gg','g.'],{g:G})}
    d.rect(44,14,3,4,'#3A78C8'); d.rect(33,12,2,3,'#3A78C8'); d.rect(55,12,2,3,'#3A78C8');
    d.rect(42,18,6,6,'#8A5A2A'); d.circ(45,18,3,'#8A5A2A'); d.vline(45,16,23,'#6A4020');
    // ground + path
    d.rect(0,24,64,16,'#7CC062'); for(let i=0;i<14;i++) d.stamp(d.ri(0,60),d.ri(26,38),['g.g'],{g:'#68AE50'});
    d.poly([[42,24],[48,24],[56,40],[34,40]],'#F0DC90'); d.line(42,24,34,39,'#D8C070'); d.line(48,24,56,39,'#D8C070');
    // lemon trees
    for(const x of [26,62]){d.vline(x,18,25,'#7A5A3A'); d.circ(x,15,4,'#4A9A3A'); d.px(x-2,14,Y); d.px(x+1,16,Y); d.px(x+2,13,Y)}
    // lemon citizens in a tidy line on the path
    const cit=(x,y)=>{d.ell(x,y,2,3,Y); d.px(x,y-4,Y2); d.px(x-1,y-1,'#2A2A10'); d.px(x+1,y-1,'#2A2A10'); d.px(x-1,y-2,Y3); d.vline(x-1,y+3,y+4,'#5A4A20'); d.vline(x+1,y+3,y+4,'#5A4A20')};
    cit(45,25); cit(46,29); cit(47,33); cit(48,37);
    d.px(50,26,'#FFFFFF');
  },
  'lemongrab:c2': d=>{ // dimension of chaos
    dgrad(d,0,0,64,40,['#2A0A40','#3A0E58','#4A1060','#2A0A40']);
    starfield(d,24,['#F870C8','#58F0C8','#F8E040'],38);
    // spiral
    for(let t=0;t<16;t+=0.03){const r=t*1.25; d.px(44+r*Math.cos(t),18+r*Math.sin(t)*.8,t%2<1?'#58F0C8':'#F870C8'); d.px(44+r*Math.cos(t)+.6,18+r*Math.sin(t)*.8,'#9A40C8')}
    d.circ(44,18,2,'#FFFFFF');
    // floating random things
    d.ell(56,6,3,2,'#F8E040'); d.px(52,6,'#F8E040'); d.px(60,6,'#E0B820'); d.px(55,8,'#2A2A10'); d.px(57,8,'#2A2A10'); // upside-down lemon
    for(let i=0;i<4;i++) d.rect(24+i*3,30-i*3,3,3,'#E8A050'); // stairs to nowhere
    d.rect(58,30,5,5,'#FFFFFF'); d.rect(58,30,2,2,'#1A1A1A'); d.rect(60,32,2,2,'#1A1A1A'); d.rect(62,30,1,2,'#1A1A1A'); d.rect(58,34,2,1,'#1A1A1A');
    d.poly([[4,4],[12,2],[9,10]],'#58F0C8'); d.poly([[28,4],[34,8],[26,10]],'#F8E040');
    d.circ(54,28,3,'#F87050'); d.circ(55,27,1,'#FFC0A0');
    // broken rule book flying
    d.rect(18,10,6,5,'#D03838'); d.rect(24,11,5,4,'#FFF4D8'); d.px(20,12,'#F8E040');
    // melting clock
    d.ell(34,32,4,3,'#F8F0D0'); d.vline(34,30,32,'#2A2A2A'); d.hline(34,36,32,'#2A2A2A'); d.vline(32,35,37,'#F8F0D0'); d.vline(36,35,38,'#F8F0D0');
    // floating checker platform (left)
    for(let y=31;y<40;y++) for(let x=0;x<24-(y>35?y-35:0);x++) d.px(x,y,((x>>1)+(y>>1))%2?'#F8F0FF':'#C878F0');
    d.hline(0,23,31,'#FFFFFF');
  },
  // ===== ISO =====
  'iso:s0': d=>{ // flow-state playlist: headphones + purple player
    const O='#1E1A2A',K='#3A3448',K2='#565068',K3='#7A7490',P='#7A58E8',P2='#A888FF',P3='#5236B8',W='#E8E4F8';
    // band
    arc(d,16,15,12,12,Math.PI*1.02,Math.PI*1.98,K,0); arc(d,16,15,11,11,Math.PI*1.02,Math.PI*1.98,K2,0); arc(d,16,15,10,10,Math.PI*1.05,Math.PI*1.95,K,0);
    arc(d,16,15,11,11,Math.PI*1.3,Math.PI*1.45,K3,0);
    d.rect(13,2,6,2,P); d.hline(14,17,2,P2);
    // cups
    for(const s of [0,1]){const x=s?23:3; d.rect(x,13,6,11,K); d.rect(x+(s?0:4),14,2,9,K2); d.ell(x+(s?4:1)+.5,18.5,2,5,P3); d.ell(x+(s?4:1)+.5,18.5,1,4,P); d.vline(x+(s?5:0),16,20,P2);
      d.rect(x+(s?-1:5),15,2,7,K3); }
    d.px(4,15,K3); d.px(27,15,K3);
    // little player in middle with play symbol
    d.rect(11,17,10,13,K); d.rect(12,18,8,6,'#2A2440'); d.stamp(14,19,['p...','ppp.','pppp','ppp.','p...'],{p:P2}); 
    d.circ(16,27,1.6,K2); d.px(16,27,P); d.hline(12,19,29,K2);
    // cable
    d.line(5,24,8,28,K); d.line(8,28,11,28,K);
    d.outline(O);
    // notes
    d.stamp(23,3,['.qq','.qq','.q.','qq.','qq.'],{q:P2}); d.stamp(26,5,['qqqq','q..q','q..q','q.qq','qqq.','qq..'],{q:P});
    d.stamp(2,4,['.w','.w','ww','ww'],{w:W}); d.px(3,2,W);
  },
  'iso:s1': d=>{ // chongqing hotpot base: pot of red chili oil
    const O='#2A1410',M='#5A5A68',M2='#8A8A98',M3='#C0C0CC',R='#C81E14',R2='#E8402A',R3='#FF7A40',Y='#F8C030',G='#4A9A3A';
    // steam
    // pot body
    d.ell(16,20,13,8,M); d.ell(16,19,13,7,M2); d.rect(4,19,25,2,M2);
    d.ell(16,24,11,5,M); d.hline(6,26,22,M); 
    d.ell(16,15,12,4,M3); d.ell(16,15,11,3,R); d.ell(16,15,9,2,R2);
    // handles
    d.rect(1,16,3,3,M); d.rect(28,16,3,3,M); d.px(1,16,M2); d.px(28,16,M2);
    // floating chilies & peppercorns
    d.stamp(8,13,['.gg..','..rrr','..rrr','...rr'],{g:G,r:'#F02A1A'});
    d.stamp(18,14,['g...','rrr.','.rrr'],{g:G,r:'#F02A1A'});
    d.px(14,15,'#5A1A10'); d.px(15,16,'#5A1A10'); d.px(23,15,'#5A1A10'); d.px(12,16,'#5A1A10');
    d.px(13,14,R3); d.px(25,14,R3); d.px(21,16,Y); d.px(11,15,Y);
    // shine on pot
    d.hline(7,10,19,M3); d.px(6,20,M3); d.hline(20,25,25,M2);
    // red label band with flame
    d.rect(10,20,12,5,R); d.hline(10,21,20,R2); d.stamp(14,20,['..y.','.yy.','yyry','yrry','.yy.'],{y:Y,r:R3});
    d.outline(O);
    for(const x of [10,16,22]) d.stamp(x-1,1,['.s','s.','.s','..s','.s','s.'].map(r=>r.padEnd(3,'.')),{s:'#C8C8DC'});
  },
  'iso:s2': d=>{ // completed duel contract scroll
    const O='#2A1E18',P='#F4E4C0',P2='#E0C898',P3='#C0A070',R='#A01828',R2='#D03040',V='#7A58E8',V2='#A888FF',I='#3A2A40';
    // paper
    d.rect(7,5,18,22,P); d.rect(23,5,2,22,P2); d.hline(7,24,26,P2);
    // rolls top/bottom
    d.rect(5,2,22,4,P2); d.hline(5,26,2,P); d.hline(5,26,5,P3); d.rect(4,2,1,4,P3); d.rect(27,2,1,4,P3);
    d.rect(5,26,22,4,P2); d.hline(5,26,26,P); d.hline(5,26,29,P3); d.rect(4,26,1,4,P3); d.rect(27,26,1,4,P3);
    // crosshair emblem 1v1
    d.ring(16,11,3,V); d.vline(16,6,9,V); d.vline(16,13,16,V); d.px(16,11,V2);
    d.hline(11,13,11,V); d.hline(19,21,11,V);
    // text lines
    for(const y of [17,19]) d.hline(9,22,y,P3);
    d.hline(9,17,21,P3);
    // two signatures: one crossed out, one signed
    d.line(9,24,13,23,I); d.line(13,23,14,24,I); d.px(10,23,I);
    d.line(17,24,20,22,V); d.line(20,22,21,24,V); d.line(21,24,23,23,V);
    d.outline(O);
    // wax seal hanging off right
    d.circ(24,22,3,R); d.circ(24,22,2,R2); d.px(23,21,'#FF8090'); d.stamp(23,21,['v.v','.v.','v.v'],{v:'#701018'});
    d.line(22,25,21,29,R); d.line(25,25,26,29,R);
    // completed check stamp
    d.stamp(8,7,['.....g','....gg','g..gg.','gggg..','.gg...'],{g:'#3A9A4A'});
  },
  'iso:c0': d=>{ // indoor shooting range
    // walls dark
    dgrad(d,0,0,64,22,['#1C1A28','#24223A','#2C2A44']);
    // ceiling lights
    for(const x of [14,34,54]){d.rect(x-3,0,7,1,'#F8F0C8'); d.dither(x-4,1,9,2,'#3A3858','#2C2A44')}
    // back wall with lanes & targets
    d.rect(24,6,40,16,'#34324A'); d.hline(24,63,6,'#4A4868');
    for(let i=0;i<4;i++){const x=27+i*10; d.vline(x-3,6,21,'#24223A');
      // target
      d.rect(x,9,6,9,'#E8E0D0'); d.ring(x+2.5,13,2.2,'#D02830'); d.px(x+2,13,'#D02830'); d.px(x+3,13,'#D02830');
      d.vline(x+2,6,8,'#8A8898'); d.vline(x+3,6,8,'#8A8898');
      // holes
      d.px(x+2,12,'#1A1A1A'); d.px(x+3,14,'#1A1A1A'); if(i!==1) d.px(x+1,13,'#1A1A1A');}
    // laser/tracer purple
    d.line(22,27,58,13,'#7A58E8'); d.line(23,27,58,14,'#A888FF');
    // floor
    d.rect(0,22,64,18,'#3A3A48'); for(let y=24;y<40;y+=4) d.hline(0,63,y,'#34343F');
    for(const x of [0,16,32,48]) d.line(x+20,22,x-4+ (x/4),39,'#34343F');
    // booth counter right
    d.rect(36,28,28,4,'#5A4A3A'); d.hline(36,63,28,'#7A6450'); d.rect(36,32,28,8,'#46382C');
    for(const x of [44,54]){d.rect(x,23,2,9,'#6A6A7A'); d.px(x,23,'#9A9AAA')}
    // ear protectors + casings on counter
    d.rect(39,26,5,2,'#7A58E8'); d.px(39,25,'#2A2A38'); d.px(43,25,'#2A2A38'); d.hline(40,42,24,'#2A2A38');
    for(const [x,y] of [[48,27],[50,27],[58,27],[33,36],[29,38],[26,35]]) d.px(x,y,'#E8B840');
    // score board: 30
    d.rect(2,3,16,9,'#101018'); d.frame(2,3,16,9,'#5A5870');
    d.stamp(5,5,['ggg.ggg','..g.g.g','ggg.g.g','..g.g.g','ggg.ggg'],{g:'#58F0A0'}); d.stamp(13,6,['.g.','ggg','.g.'],{g:'#A888FF'});
  },
  'iso:c1': d=>{ // chongqing at night
    d.rect(0,0,64,40,'#101838');
    dgrad(d,0,0,64,24,['#0A0A20','#141638','#22204A','#3A2450']);
    starfield(d,12,['#C8C8E8','#8888B8'],10);
    d.circ(8,6,2,'#F8F0D0');
    // far skyline on hills
    d.poly([[0,24],[0,16],[12,12],[28,15],[44,9],[64,12],[64,24]],'#1A1A34');
    const bl=[[2,14,4],[7,10,3],[11,13,4],[17,8,3],[21,11,5],[27,5,3],[31,9,4],[36,7,3],[41,3,4],[46,8,3],[50,6,4],[55,10,3],[59,7,5]];
    for(const [x,y,w] of bl){d.rect(x,y,w,24-y,'#22284A'); for(let j=y+1;j<22;j+=2) for(let i=x+1;i<x+w-1;i+=2) if(d.rnd()<.5) d.px(i,j,d.rnd()<.6?'#F8D870':'#58C8F0')}
    d.vline(42,0,2,'#F04040'); d.px(42,0,'#FF8080');
    // hongyadong stilt building center-right, glowing
    const Y='#F8C040',Y2='#E89020',Rr='#8A2A18';
    for(let k=0;k<4;k++){const y=14+k*3, x0=30+k, x1=56-k; d.rect(x0,y,x1-x0,3,'#5A2418'); d.hline(x0-1,x1,y,Rr); for(let x=x0+1;x<x1;x+=2) d.px(x,y+1,k%2?Y:Y2)}
    d.poly([[33,14],[43,10],[53,14]],'#3A1410'); d.hline(33,53,14,Rr);
    for(let x=31;x<57;x+=4) d.vline(x,26,30,'#3A1410');
    // lanterns
    for(const x of [34,40,46,52]){d.px(x,18,'#FF4030'); d.px(x,19,'#FF4030'); d.px(x,17,'#5A1A10')}
    // river with reflections
    d.rect(0,30,64,10,'#101838'); for(let y=31;y<40;y+=2) for(let x=30;x<58;x+=3) if(d.rnd()<.6) d.hline(x,x+1,y,d.rnd()<.6?'#C88A30':'#7A4A20');
    for(let y=32;y<40;y+=3) d.hline(8,14,y,'#1A2650');
    // bridge arc
    arc(d,48,30,16,6,Math.PI,Math.PI*2,'#7A88A8'); d.hline(32,63,24,'#5A6688'); for(let x=34;x<63;x+=5) d.vline(x,24,30,'#3A4668');
    // cable car
    d.line(0,8,28,14,'#5A5A7A'); d.rect(15,11,4,3,'#E84040'); d.px(16,12,'#F8E080'); d.px(17,10,'#5A5A7A');
    // promenade where pet stands
    d.rect(0,26,30,4,'#3A3448'); d.hline(0,29,26,'#5A5068'); d.rect(0,30,24,10,'#2C2838'); d.hline(0,23,30,'#3A3448');
    d.vline(24,22,30,'#5A5068'); d.rect(23,20,3,2,'#FF6040');
  },
  'iso:c2': d=>{ // Ascent floating city, day
    dgrad(d,0,0,64,40,['#58A8E8','#78BCF0','#98D0F8','#C0E4FC']);
    cloud(d,12,6,6,'#FFFFFF'); cloud(d,52,30,7,'#FFFFFF','#E0F0FC'); cloud(d,30,36,6,'#F0F8FF');
    // small floating islets far
    d.poly([[4,14],[12,14],[8,19]],'#8A7058'); d.hline(4,12,14,'#6AB050'); d.rect(6,11,3,3,'#E8D8B8'); d.poly([[5,11],[10,11],[7,9]],'#C8603A');
    d.poly([[56,8],[62,8],[59,12]],'#8A7058'); d.hline(56,62,8,'#6AB050');
    // main island
    const S='#E8D8B8',S2='#D0BC98',RR='#C8603A',RR2='#E07A4A';
    d.poly([[22,24],[62,24],[56,33],[46,38],[34,34],[26,29]],'#7A6048'); d.poly([[26,29],[62,24],[56,33]],'#8A7058'); d.hline(22,62,24,'#6AB050');
    for(let x=30;x<58;x+=5) d.px(x,30+(x%3),'#5A4434');
    // glowing radianite under island
    d.px(44,36,'#58F0E0'); d.px(45,37,'#58F0E0'); d.px(38,33,'#58F0E0');
    // buildings
    d.rect(26,15,10,9,S); d.poly([[25,15],[31,11],[37,15]],RR); d.hline(26,35,15,RR2); d.rect(28,18,2,3,'#5A7AA8'); d.rect(32,18,2,3,'#5A7AA8');
    d.rect(38,8,5,16,S2); d.rect(39,8,3,16,S); d.poly([[37,8],[40,3],[44,8]],RR); d.rect(39,10,3,3,'#3A3448'); d.px(40,11,'#F8D040');
    d.rect(44,14,12,10,S); d.poly([[43,14],[50,10],[57,14]],RR); d.hline(44,55,14,RR2);
    for(const x of [46,50,53]) d.rect(x,17,2,3,'#5A7AA8'); d.rect(48,20,3,4,'#7A4A2A');
    d.rect(57,17,5,7,S2); d.poly([[56,17],[59,14],[63,17]],RR);
    // canal
    d.rect(30,24,24,2,'#58A0D8'); d.hline(30,53,24,'#A8D8F8');
    // hover drone/ship
    d.stamp(48,3,['.kkk.','kpppk','.k.k.'],{k:'#3A3448',p:'#7A58E8'});
    // terrace where pet stands (lower left)
    d.rect(0,37,24,3,'#C8B898'); d.rect(0,32,22,5,'#E8D8B8'); d.hline(0,21,32,'#F8ECD0');
    for(let x=1;x<22;x+=4) d.vline(x,28,31,'#D0BC98'); d.hline(0,22,28,'#D0BC98'); d.hline(0,22,27,'#F8ECD0');
    d.rect(0,38,24,2,'#B0A080');
    d.poly([[22,27],[26,29],[24,40],[22,40]],'#8A7058');
    // flower pot on rail
    d.rect(19,25,3,2,'#C8603A'); d.px(20,24,'#E84070'); d.px(19,23,'#4A9A3A');
  },
  // ===== CAP =====
  'cap:s0': d=>{ // catch-up list notebook
    const O='#2A1E18',C='#2A4AA8',C2='#3A62C8',C3='#1E3678',P='#FFF8E8',P2='#E8DCC0',L='#A8C0E0',K='#3A3448',R='#D02830';
    // cover behind
    d.rect(3,4,27,25,C3); d.rect(2,5,27,25,C);
    // pages
    d.rect(4,5,12,23,P); d.rect(16,5,12,23,P); d.vline(16,5,27,P2); d.vline(15,5,27,P2);
    d.hline(4,27,27,P2);
    // spiral
    for(let y=6;y<27;y+=3){d.px(15,y,'#9A9AAA'); d.px(16,y,'#C8C8D8')}
    // left page: checklist lines
    for(let i=0;i<6;i++){const y=8+i*3; d.frame(5,y-1,3,3,K); d.hline(9,14,y,L)}
    // first item checked & crossed
    d.stamp(5,6,['..r','r.r','.r.'],{r:R}); d.hline(8,14,7,R);
    // right page: doodles: star, phone, music note
    d.stamp(19,7,['..y..','.yyy.','yyyyy','.y.y.'],{y:'#E8B020'});
    d.rect(19,13,3,5,K); d.px(20,16,'#58A8E8'); d.px(20,14,'#58A8E8');
    d.stamp(24,13,['.kk','.k.','.k.','kk.','kk.'],{k:K});
    for(const y of [20,22,24]) d.hline(18,26,y,L);
    // pencil diagonally
    d.line(21,30,30,21,'#F8C830'); d.line(22,30,30,22,'#E0A020'); d.px(20,31,'#3A3448'); d.px(21,31,'#E8C8A0'); d.px(20,30,'#E8C8A0'); d.px(30,20,'#F07080'); d.px(31,21,'#F07080');
    d.outline(O);
  },
  'cap:s1': d=>{ // smithsonian exhibit ticket
    const O='#2A1E18',T='#F8F0DC',T2='#E8D8B8',B='#2A4AA8',B2='#3A62C8',R='#D02830',W='#FFFFFF',G='#C8A040';
    // tilted ticket via poly
    d.poly([[2,9],[26,3],[30,20],[6,27]],T);
    d.poly([[22,4],[26,3],[30,20],[26,21]],T2); // stub
    for(let t=0;t<1;t+=.12){d.px(22+4*t*1.0+t*0, 4+t*17,'#B8A888')} 
    d.line(22,4,26,21,'#B8A888');
    // blue band
    d.poly([[3,12],[22,7],[23,10],[4,15]],B); d.line(3,12,22,7,B2);
    // shield portrait medallion
    d.circ(12,17,4,R); d.circ(12,17,3,W); d.circ(12,17,2,R); d.circ(12,17,1,B); d.px(12,17,W);
    // little lines (text)
    d.line(17,17,21,16,'#A89878'); d.line(17,19,20,18,'#A89878');
    d.line(6,22,10,21,'#A89878');
    // stub star + barcode
    d.stamp(25,8,['.y.','yyy','.y.'],{y:G});
    for(let i=0;i<5;i++) d.line(25+i*0.25+ (i>2?1:0),13+i*.0,26+i*0.25+(i>2?1:0),18,'#3A3448');
    // notches
    d.clear(22,4); d.clear(26,21);
    d.outline(O);
    // admit sparkle
    d.px(5,6,'#F8C830'); d.px(4,5,'#F8C830'); d.px(6,5,'#F8C830'); d.px(5,4,'#F8C830'); d.px(5,5,'#FFF4A0');
  },
  'cap:s2': d=>{ // compass with Peggy's photo
    const O='#3A2410',G='#C89830',G2='#F0C850',G3='#8A6418',GL='#FFF0A0',F='#F8F0DC',P='#E8D8C0';
    // chain
    for(let i=0;i<5;i++) d.ring(4+i*2,2+i,1,G3);
    // lid (top, open)
    d.circ(16,9,8,G); d.circ(16,9,7,G3); d.circ(16,9,6,P);
    // Peggy photo sepia: brown curls, face, red lips
    d.circ(16,9,5,'#D8C8A8'); 
    d.ell(16,8,4,4,'#6A4428'); d.ell(16,9,2,3,'#F0C8A0'); d.px(15,9,'#3A2410'); d.px(17,9,'#3A2410'); d.hline(16,16,11,'#D02830'); d.px(17,11,'#D02830');
    d.rect(13,13,7,2,'#2A4AA8'); d.px(16,13,'#F0C8A0');
    // hinge
    d.rect(14,16,5,2,G3);
    // base
    d.circ(16,24,7,G); d.circ(16,24,6,G2); d.circ(16,24,5,F); 
    d.px(16,19,G3); d.px(16,29,G3); d.px(11,24,G3); d.px(21,24,G3);
    d.line(16,24,19,20,'#D02830'); d.line(16,24,13,28,'#3A3448'); d.px(16,24,G3);
    d.px(12,20,GL); d.px(11,21,GL); d.px(10,6,GL); d.px(11,5,GL);
    d.outline(O);
    // tiny heart above
    heart(d,25,1,'#F05070','#FF9AB0');
  },
  'cap:c0': d=>{ // old brooklyn alley
    dgrad(d,0,0,64,40,['#78B8E8','#98CCF0','#B8DCF8']);
    const B='#A84A32',B2='#8A3A26';
    // distant building at alley end with water tower
    d.rect(12,9,16,20,'#C8A890'); for(const [x,y] of [[14,11],[18,11],[22,11],[14,16],[18,16],[22,16]]){d.rect(x,y,2,3,'#5A6A88'); d.px(x,y,'#9AB8D8')}
    d.hline(12,27,9,'#A88870'); d.rect(18,21,3,4,'#6A4A38');
    d.vline(16,5,8,'#5A3A28'); d.vline(21,5,8,'#5A3A28'); d.line(16,8,21,5,'#5A3A28'); d.rect(15,1,8,5,'#8A5A38'); d.hline(15,22,3,'#6A4428'); d.poly([[14,1],[18.5,-2],[23,1]],'#6A4428');
    // walls
    bricks(d,0,0,12,28,'#B85A3A','#9A4430',4,2);
    bricks(d,28,3,36,25,B,B2,4,2); d.vline(28,3,27,'#6A2A1A');
    // laundry line
    d.line(11,6,28,8,'#E8E8E8'); d.rect(14,7,3,4,'#E84040'); d.rect(20,7,3,3,'#F8F0E0'); d.rect(24,8,2,3,'#4A7AC8');
    // fire escape
    for(const y of [11,20]){d.hline(32,58,y,'#2A2A30'); d.hline(32,58,y-3,'#2A2A30'); for(let x=32;x<=58;x+=3) d.vline(x,y-3,y,'#2A2A30')}
    d.line(53,11,48,20,'#2A2A30'); d.line(54,11,49,20,'#2A2A30');
    for(const [x,y] of [[36,4],[46,4],[36,13],[46,13],[36,22],[56,22]]){d.rect(x,y,5,4,'#3A4A6A'); d.hline(x,x+4,y,'#F8F0E0'); d.px(x+1,y+1,'#9AC0E0')}
    // ground: cobbles
    d.rect(0,28,64,12,'#6A6670'); for(let y=29;y<40;y+=2) for(let x=(y%4===1?0:2);x<64;x+=4) d.hline(x,x+2,y,'#7A7680');
    d.rect(12,25,16,3,'#7A7680'); d.hline(0,63,28,'#5A5660');
    // trash cans
    for(const [x,c,c2,lid] of [[40,'#8A9098','#6A7078',0],[49,'#7A8088','#5A6068',1]]){d.rect(x,25,7,9,c); d.hline(x,x+6,28,c2); d.hline(x,x+6,31,c2); d.vline(x+1,25,33,'#A8B0B8'); d.ell(x+3,24.5,4,1,lid?'#A0A8B0':'#3A3A40'); if(lid){d.px(x+3,23,'#5A6068')}}
    // dented lid on ground (the old 'shield')
    d.ell(32,35,4,2,'#A8B0B8'); d.ell(31,34,2,1,'#D0D8E0'); d.px(32,34,'#5A6068'); d.hline(29,35,37,'#5A6068'); d.px(34,36,'#8A9098');
    // black cat sitting
    d.stamp(23,31,['k...k','kk.kk','kykyk','kkkkk','.kkk.','.kkkk','kkkkkk'],{k:'#2A2A30',y:'#F8D040'});
    // fire hydrant
    d.rect(58,30,4,7,'#D03028'); d.rect(57,32,6,2,'#D03028'); d.ell(59.5,29,2,1,'#E85040'); d.vline(58,31,36,'#F07060'); d.rect(57,37,6,1,'#8A2018');
    // puddle reflecting sky
    d.ell(46,37,4,1,'#9AC0E0');
  },
  'cap:c1': d=>{ // wakanda
    dgrad(d,0,0,64,26,['#F8C878','#F8D890','#C8E0A0','#A0D0A0']);
    // far mountains + futuristic towers
    d.poly([[0,20],[10,10],[20,18],[32,6],[46,16],[56,9],[64,14],[64,22],[0,22]],'#6A9A80');
    const T='#4A4A68',T2='#7A78A8',V='#B080F0';
    for(const [x,h,w] of [[36,16,3],[41,20,4],[47,13,3],[52,18,3]]){d.rect(x,24-h,w,h,T); d.vline(x+w-1,24-h,23,T2); d.poly([[x-1,24-h],[x+w/2,24-h-3],[x+w,24-h]],T2); for(let y=26-h;y<23;y+=3) d.px(x+1,y,V)}
    // waterfall center
    d.poly([[22,6],[30,6],[32,30],[20,30]],'#5A6A58'); d.rect(23,6,6,24,'#C8E8F8'); for(let y=7;y<30;y+=2) d.px(24+(y%3),y,'#FFFFFF'); d.vline(27,8,29,'#9AC8E8');
    // jungle foliage
    for(const [x,y,r] of [[4,18,6],[14,16,5],[60,20,6],[34,22,4]]){d.circ(x,y,r,'#2A7A3A'); d.circ(x-1,y-1,r-2,'#3A9A48'); d.px(x-2,y-3,'#6AC060')}
    // ground
    d.rect(0,26,64,14,'#7A5A3A'); d.dither(0,26,64,1,'#4A8A3A','#7A5A3A'); d.hline(0,63,25,'#4A8A3A');
    d.ell(26,31,9,2,'#5AA0C8'); d.hline(20,32,31,'#9AD0E8');
    // shield on tech stand, blue scan
    d.rect(46,33,8,3,'#3A3A50'); d.rect(49,29,2,4,'#5A5A78');
    d.circ(50,24,5,'#D02830'); d.circ(50,24,4,'#F0F0F0'); d.circ(50,24,3,'#D02830'); d.circ(50,24,2,'#2A4AA8'); d.stamp(49,23,['.w.','www','.w.'],{w:'#FFFFFF'});
    d.line(44,17,46,33,'#58E0F8'); d.line(56,17,54,33,'#58E0F8'); d.hline(44,56,17,'#58E0F8');
    // heart-shaped herb flowers purple glow
    for(const [x,y] of [[38,35],[58,37],[30,37],[60,30]]) heart(d,x,y,'#9A50E0','#E0B0FF');
    // kimoyo beads lying
    for(let i=0;i<5;i++) d.px(40+i,30+(i%2),i%2?'#5A3A28':'#8A5A3A');
  },
  'cap:c2': d=>{ // peggy's place 1949
    // wallpaper
    d.rect(0,0,64,26,'#6A3A3A'); for(let x=2;x<64;x+=6) for(let y=2;y<26;y+=6) d.stamp(x,y,['.r.','rrr','.r.'],{r:'#7E4A44'});
    d.hline(0,63,25,'#3A2018');
    // window with evening sky
    d.rect(36,3,16,14,'#3A2018'); d.rect(37,4,14,12,'#F0A060'); d.rect(37,4,14,4,'#B060A0'); d.rect(37,8,14,3,'#E08070'); d.vline(44,4,15,'#3A2018'); d.hline(37,50,10,'#3A2018');
    d.px(48,5,'#FFF8D0'); d.px(39,6,'#FFF8D0');
    d.rect(34,3,2,16,'#B83040'); d.rect(52,3,2,16,'#B83040');
    // floor parquet
    d.rect(0,26,64,14,'#8A5A30'); for(let y=27;y<40;y+=3) d.hline(0,63,y,'#6A4220'); for(let y=26;y<40;y+=3) for(let x=(y%2)*4;x<64;x+=8) d.vline(x,y,y+2,'#6A4220');
    d.rect(0,27,64,1,'#A87040');
    // rug
    d.ell(34,34,12,3,'#B83040'); d.ell(34,34,10,2,'#D85060');
    // jukebox / record player right
    d.rect(54,14,9,14,'#8A4A20'); d.circ(58.5,15,4,'#8A4A20'); d.circ(58.5,15,3,'#F8C860'); d.rect(56,19,6,4,'#2A1810'); d.ring(58.5,21,1.3,'#F8C860');
    d.rect(55,24,7,3,'#C83020'); d.hline(55,61,24,'#F8C860');
    // music notes
    d.stamp(48,10,['.kk','.k.','kk.'],{k:'#F8E0A0'}); d.stamp(51,7,['.kk','.k.','kk.'],{k:'#F8E0A0'});
    // floor lamp left of window
    d.vline(28,8,26,'#3A2A20'); d.poly([[25,8],[31,8],[30,4],[26,4]],'#F8E0A0'); d.hline(26,30,8,'#E8C070'); d.dither(24,9,9,3,'#7E4A44','#6A3A3A');
    // side table with two cups and photo
    d.rect(40,20,10,2,'#5A3018'); d.vline(41,22,27,'#5A3018'); d.vline(48,22,27,'#5A3018');
    d.rect(42,18,2,2,'#F8F0E0'); d.rect(46,18,2,2,'#F8F0E0'); d.px(44,18,'#F8F0E0');
    // framed photo on wall
    d.rect(10,4,8,7,'#C8A040'); d.rect(11,5,6,5,'#E8D8B8'); d.circ(14,7,1,'#6A4428'); d.px(14,9,'#2A4AA8');
    // roses in vase
    d.rect(21,19,3,4,'#5A9AC8'); d.vline(22,15,19,'#3A7A3A'); d.circ(22,15,1,'#D02840'); d.px(20,17,'#D02840'); d.px(24,16,'#D02840'); d.rect(19,23,7,2,'#5A3018');
    d.vline(20,25,26,'#5A3018'); d.vline(24,25,26,'#5A3018');
    // hearts in air
    heart(d,33,13,'#F07090','#FFC0D0');
  },
  // ===== GARY =====
  'gary:s0': d=>{ // can of snail food
    const O='#1E2A38',M='#9AA4B0',M2='#C8D0D8',M3='#6A7480',L='#3AA0A0',L2='#58C8C0',L3='#287878',S='#F8A0B0',S2='#E06A88',B='#7EB8E0',F='#B07840',F2='#D0A060';
    // can body
    d.rect(7,9,18,19,L); d.rect(7,9,4,19,L2); d.rect(21,9,4,19,L3);
    d.rect(7,26,18,2,M); d.hline(7,24,26,M2); d.hline(8,23,28,M3);
    // top rim and peeled lid
    d.ell(16,9,9,3,M); d.ell(16,9,8,2,F); for(const [x,y] of [[12,8],[15,9],[18,8],[20,10],[13,10]]) d.px(x,y,F2);
    d.poly([[17,7],[25,8],[30,1],[23,0]],M2); d.line(25,8,30,1,M3); d.px(24,2,'#FFFFFF');
    // label: Gary icon (shell with spiral + eye stalks)
    d.stamp(10,14,['.ww.ww......','.wk.wk.pppp.','..b..bppqqpp','..b..bpqppqp','..bbbbpqpqqp','.bbbbbpqppp.','bbbbbbbppppb','bbbbbbbbbbbb','.bbbbbbbbbb.'],{w:'#FFFFFF',k:'#2A2A2A',b:B,p:S,q:'#B03A68'});
    d.hline(8,24,12,M2); d.hline(8,24,24,M2);
    d.outline(O);
    // spilled pellets
    for(const [x,y] of [[3,29],[5,30],[27,30],[29,29],[26,28]]){d.px(x,y,F); d.px(x+1,y,F2)}
  },
  'gary:s1': d=>{ // grandma's cookies on a plate
    const O='#3A2418',C='#D89850',C2='#E8B870',C3='#B07030',K='#4A2A18',P='#F8F4F0',P2='#C8D8E8',P3='#E8A8C0';
    // plate
    d.ell(16,24,15,5,P2); d.ell(16,23,14,4,P); d.ell(16,23,11,3,'#E8EEF4');
    for(let a=0;a<6.28;a+=0.5) d.px(16+14*Math.cos(a),23+4*Math.sin(a),P3);
    // stack of cookies
    for(const [x,y,r] of [[12,20,6],[21,19,6],[16,13,6]]){d.ell(x,y+1,r,r-2,C3); d.ell(x,y,r,r-2,C); d.ell(x-1,y-1,r-2,r-4,C2);
      for(let i=0;i<5;i++){const a=i*1.3+x, q=(i%3)+1; d.px(x+Math.round(q*Math.cos(a)*1.4),y+Math.round(q*Math.sin(a)*.8),K)}}
    // bite in top cookie
    for(const [x,y] of [[19,8],[20,8],[21,8],[22,8],[20,9],[21,9],[22,9],[21,10],[22,10],[23,9],[22,11],[23,10]]) d.clear(x,y);
    d.outline(O);
    // crumbs + heart
    d.px(4,28,C); d.px(28,27,C2); d.px(26,29,C);
    heart(d,25,1,'#F06080','#FFB0C0');
  },
  'gary:s2': d=>{ // poseidon's beauty cream jar oozing slime
    const O='#1E2A3A',J='#E8F4F8',J2='#B8D4E4',J3='#88A8C0',G='#E8B830',G2='#F8D860',G3='#B08818',S='#78E070',S2='#A8F890',S3='#48B050',T='#2A6AB8';
    // jar
    d.rect(6,14,20,15,J); d.rect(6,14,3,15,'#FFFFFF'); d.rect(22,14,4,15,J2); d.ell(16,29,10,1,J3);
    // lid tilted off on top
    d.rect(5,10,22,4,G); d.hline(5,26,10,G2); d.hline(5,26,13,G3); for(let x=7;x<26;x+=3) d.vline(x,11,12,G3);
    // slime oozing over rim
    d.ell(14,9,7,2,S); d.ell(12,8,3,1,S2); d.rect(9,10,3,6,S); d.rect(19,10,2,4,S); d.circ(10,16,1.6,S); d.circ(20,14,1,S); d.vline(10,11,14,S2);
    // trident emblem on label
    d.rect(9,18,14,9,'#2A4A88'); d.frame(9,18,14,9,G);
    d.vline(16,19,26,G2); d.hline(13,19,21,G2); d.vline(13,19,21,G2); d.vline(19,19,21,G2); d.px(16,19,'#FFFFFF');
    d.outline(O);
    // sparkles + bubble
    tw(d,28,5,'#FFF4A0'); tw(d,3,6,'#C8F8FF'); bub(d,27,13,'#88D8F8');
    d.px(16,3,S); d.px(16,4,S3); d.px(17,5,S);
  },
  'gary:c0': d=>{ // pineapple living room, TV
    // curved orange wall with pineapple texture
    d.rect(0,0,64,40,'#E89A30');
    for(let y=0;y<26;y+=4) for(let x=(y%8?2:0);x<64;x+=4){d.px(x,y,'#C87820'); d.px(x+1,y+1,'#C87820'); d.px(x-1,y+1,'#C87820')}
    // porthole window with sea view
    d.circ(14,9,7,'#8A5A20'); d.circ(14,9,6,'#3AA8D8'); d.circ(14,9,5,'#58C0E8');
    d.ell(12,13,3,1,'#E8D890'); bub2(d,16,7,'#E8F8FF'); d.px(11,6,'#FFFFFF'); d.vline(14,3,15,'#8A5A20'); d.hline(8,20,9,'#8A5A20');
    // floor
    d.rect(0,26,64,14,'#C08048'); for(let y=28;y<40;y+=3) d.hline(0,63,y,'#A86A38'); d.hline(0,63,26,'#8A5A20');
    // rug oval
    d.ell(38,34,14,4,'#3A8AC8'); d.ell(38,34,11,3,'#58A8E0'); d.ell(38,34,6,1,'#88C8F0');
    // old TV with antennae on right
    d.rect(44,13,17,14,'#7A4A28'); d.rect(45,14,15,12,'#9A6438'); d.rect(46,15,10,9,'#2A3A48'); d.rect(47,16,8,7,'#68B8E0');
    // show on TV: jellyfish
    d.ell(50,18,2,1,'#F8A0D0'); d.px(49,20,'#F8A0D0'); d.px(51,20,'#F8A0D0'); d.px(53,21,'#FFFFFF');
    d.px(58,17,'#E8D060'); d.px(58,20,'#E8D060'); d.vline(58,22,23,'#5A3418');
    d.line(50,13,46,6,'#3A3A3A'); d.line(54,13,58,6,'#3A3A3A'); d.px(46,6,'#E84040'); d.px(58,6,'#E84040');
    d.rect(46,27,2,3,'#5A3418'); d.rect(57,27,2,3,'#5A3418');
    // gary's bowl
    d.ell(30,30,4,2,'#E84060'); d.hline(27,33,29,'#F8A0B0'); d.px(29,28,'#B07840'); d.px(31,28,'#B07840');
    // slime trail across floor (rolled around)
    for(let x=24;x<44;x++) d.px(x,36+Math.round(Math.sin(x/2)),'#9AE0D8');
    // lamp on left wall
    d.vline(30,3,15,'#5A3418'); d.ell(30,3,3,2,'#F8E080'); 
    // remote on rug
    d.rect(40,32,4,2,'#2A2A2A'); d.px(41,32,'#E84040');
  },
  'gary:c1': d=>{ // grandma's house under the sea, day
    dgrad(d,0,0,64,26,['#5AB8E8','#78CCF0','#98DCF8']);
    // sky flowers (bikini bottom)
    for(const [x,y,c] of [[6,5,'#F8F0A0'],[26,3,'#B8F0A8'],[44,8,'#F8C8E0'],[58,3,'#F8F0A0']]) d.stamp(x-2,y-2,['.c.c.','ccccc','.cwc.','ccccc','.c.c.'],{c,w:'#FFFFFF'});
    // sand ground
    d.rect(0,26,64,14,'#F0DCA0'); d.dither(0,26,64,2,'#E0C888','#F0DCA0'); for(let i=0;i<12;i++) d.px(d.ri(0,63),d.ri(29,39),'#D8C080');
    // cottage
    const W='#F8E8D0',W2='#E0C8A8',R='#D86A6A',R2='#B04A4A';
    d.rect(34,13,24,15,W); d.rect(54,13,4,15,W2); d.poly([[31,14],[46,3],[61,14]],R); d.line(31,14,46,3,R2); d.hline(31,61,14,R2);
    d.rect(52,5,3,6,'#A88870'); d.px(53,3,'#E8F4F8'); d.px(54,1,'#E8F4F8');
    d.rect(43,19,6,9,'#8A5A38'); d.px(47,23,'#F8D040'); d.ell(45.5,19,3,1,'#8A5A38');
    for(const x of [36,51]){d.rect(x,17,5,5,'#7AB8E0'); d.frame(x,17,5,5,'#FFFFFF'); d.px(x+1,18,'#FFFFFF')}
    d.rect(36,22,5,1,'#E87090'); d.rect(51,22,5,1,'#E87090');
    // heart wreath on door
    heart(d,44,20,'#E84060');
    // path
    d.poly([[43,28],[49,28],[52,40],[40,40]],'#E8D8B8');
    // two bowls by door
    d.ell(38,31,3,1,'#E84060'); d.hline(36,40,30,'#F8A0B0'); d.ell(55,31,3,1,'#4A8AE0'); d.hline(53,57,30,'#88C0F8');
    d.px(37,29,'#B07840'); d.px(39,29,'#B07840'); d.px(54,29,'#B07840'); d.px(56,29,'#B07840');
    // fence + sea plants
    for(let x=24;x<34;x+=3){d.vline(x,23,28,'#FFFFFF'); d.px(x,22,'#E8E8E8')} d.hline(24,33,25,'#FFFFFF');
    for(const x of [28,61]){d.vline(x,20,27,'#3A9A58'); d.px(x-1,22,'#3A9A58'); d.px(x+1,24,'#3A9A58')}
    // cookie on grass near path
    d.circ(58,36,1,'#D89850'); d.px(58,36,'#4A2A18');
    bub(d,22,12,'#E8F8FF'); bub(d,24,8,'#E8F8FF');
  },
  'gary:c2': d=>{ // atlantic city boardwalk at night
    dgrad(d,0,0,64,24,['#100828','#1C1040','#2A1650','#3A1C58']);
    starfield(d,10,['#F8F0C8','#C8B8F8'],10);
    // sea horizon
    d.rect(0,18,30,6,'#1A2A58'); for(let x=2;x<30;x+=5) d.hline(x,x+1,20+(x%2),'#3A5A98');
    // ferris wheel
    d.ring(18,10,8,'#F8C040'); d.ring(18,10,7,'#C87020');
    for(let a=0;a<6.28;a+=0.785){d.line(18,10,18+8*Math.cos(a),10+8*Math.sin(a),'#C87020'); d.px(18+8*Math.cos(a),10+8*Math.sin(a),['#F84060','#58E0F8','#F8E040'][Math.round(a*1.3)%3])}
    d.line(18,10,14,24,'#8A5A30'); d.line(18,10,22,24,'#8A5A30'); d.circ(18,10,1,'#F8F0C8');
    // casino building w/ neon
    const N='#F84098',N2='#58F0E8',Y='#F8E040';
    d.rect(32,6,32,18,'#3A2050'); d.rect(32,6,32,2,'#5A3070');
    d.poly([[38,6],[48,0],[58,6]],'#5A3070'); d.ring(48,4,1.4,Y); d.px(48,4,N);
    d.frame(34,9,28,6,N); d.dither(35,10,26,4,'#5A2050','#3A2050');
    // slot 777 sign
    for(const [i,c] of [[0,Y],[1,N2],[2,Y]]){const x=39+i*6; d.stamp(x,10,['ccc','..c','.c.','.c.'],{c})}
    for(let x=34;x<62;x+=3) d.px(x,8,x%2?Y:N2);
    for(let x=35;x<62;x+=4){d.rect(x,17,2,4,'#F8C860'); d.px(x,17,'#FFF0A0')}
    d.rect(45,18,6,6,'#F8D870'); d.hline(44,51,17,N);
    // boardwalk planks
    d.rect(0,24,64,16,'#8A5A38'); for(let y=26;y<40;y+=2) d.hline(0,63,y,'#6A4228'); for(let y=24;y<40;y+=2) for(let x=(y%4?3:0);x<64;x+=7) d.px(x,y+1,'#6A4228');
    d.hline(0,63,24,'#A87048');
    // railing on boardwalk top
    for(let x=0;x<32;x+=4) d.vline(x,21,24,'#C8A070'); d.hline(0,31,21,'#C8A070');
    // lamp post with lost poster
    d.vline(58,14,33,'#2A2A3A'); d.circ(58,13,1.5,'#FFF0A0'); d.dither(55,10,7,7,'#3A1C58','#3A2050'); d.circ(58,13,1,'#FFFFFF');
    d.rect(55,24,6,6,'#F8F0E0'); d.ell(58,27,2,1,'#F8A0B0'); d.px(58,27,'#B03A68'); d.hline(56,59,25,'#3A3A3A');
    // slime trail leading to casino
    for(let x=24;x<46;x++) d.px(x,34-Math.round((x-24)*0.4)+Math.round(Math.sin(x/1.5)*0.6),'#9AE0D8');
    // dropped spatula (spongebob came)
    d.rect(28,36,4,2,'#A8B0B8'); d.line(32,37,37,37,'#7A4A28');
  },
  // ===== DORA =====
  'dora:s0': d=>{ // fresh dorayaki
    const O='#3A2010',B='#C87830',B2='#E09A48',B3='#F0C070',B4='#9A5420',A='#5A1E1E',A2='#7A2E2A',P='#F8F0E0';
    // paper wrapper
    d.poly([[4,24],[28,24],[26,30],[6,30]],P); d.hline(6,26,29,'#E0D4C0'); for(let x=6;x<27;x+=3) d.px(x,26,'#E8A0A0');
    // bottom pancake
    d.ell(16,21,13,4,B4); d.ell(16,20,13,3,B); d.hline(5,27,19,B2);
    // anko filling
    d.ell(16,16,13,2,A); for(const x of [5,9,14,20,25,27]) d.px(x,17,A2); d.px(8,16,A2); d.px(23,16,A2);
    // top pancake (domed)
    d.ell(16,11,13,5,B4); d.ell(16,10,13,5,B); d.ell(16,9,11,4,B2); d.ell(14,8,7,2,B3);
    // branded bell mark
    d.stamp(19,8,['.kk.','kkkk','k..k','.kk.'],{k:B4});
    d.outline(O);
    // steam
    for(const x of [9,16,23]) d.stamp(x-1,0,['.s','s.','.s','s.'],{s:'#B8B0C0'});
    heart(d,26,1,'#F06080','#FFB0C0');
  },
  'dora:s1': d=>{ // bag of memory bread with printed notes
    const O='#2A2A3A',C='#C88A48',C2='#E0A860',W='#FFFDF4',W2='#F0E8D0',K='#3A3A5A',BG='#D8ECF8',BG2='#A8C8E8',BL='#1CA0E8';
    // clear bag
    d.poly([[4,6],[20,6],[22,30],[2,30]],BG); d.line(4,6,2,30,BG2); d.line(20,6,22,30,BG2); d.hline(2,22,30,BG2);
    d.rect(8,2,8,4,BG); d.rect(7,4,10,2,BL); d.px(6,3,BL); d.px(17,3,BL); d.px(5,2,BL); d.px(18,2,BL);
    // bread slices inside bag
    for(const [x,y] of [[5,13],[7,9]]){d.rect(x,y+2,11,13,C); d.ell(x+5,y+3,5.5,3,C); d.rect(x+1,y+3,9,11,W); d.ell(x+5,y+3,4.5,2,W);}
    for(let j=0;j<4;j++) d.hline(9,14,13+j*2,'#8A9AB8');
    // big slice in front with printed notes
    const X=14,Y=10;
    d.rect(X,Y+3,16,17,C); d.ell(X+7.5,Y+4,8,4,C); d.rect(X+1,Y+4,14,15,W); d.ell(X+7.5,Y+5,7,3,W); d.vline(X+14,Y+4,Y+18,W2); d.hline(X+1,X+14,Y+18,W2);
    d.ell(X+5,Y+2,4,1,C2);
    // printed text: tiny letters + formula
    d.stamp(X+3,Y+5,['.k..kk..k.k','k.k.k.k.k.k','kkk.kk..kkk','k.k.k.k.k.k','k.k.kk..k.k'],{k:K});
    d.hline(X+3,X+12,Y+12,'#5A6A98'); d.hline(X+3,X+10,Y+14,'#5A6A98'); d.hline(X+3,X+11,Y+16,'#5A6A98');
    d.outline(O);
    // bite-sized sparkle of knowledge
    tw(d,29,3,'#F8E040'); d.px(26,6,'#F8E040');
  },
  'dora:s2': d=>{ // mii-chan's ribbon with bell
    const O='#4A1A2A',R='#F06090',R2='#F890B8',R3='#C83A70',G='#F8C830',G2='#FFF0A0',G3='#C89818';
    // tails
    d.poly([[13,16],[8,29],[11,27],[13,30],[16,18]],R3); d.poly([[19,16],[24,29],[21,27],[19,30],[16,18]],R);
    d.line(14,18,10,27,R2);
    // loops
    d.poly([[15,13],[3,5],[1,11],[3,19],[15,17]],R); d.poly([[17,13],[29,5],[31,11],[29,19],[17,17]],R);
    d.poly([[15,14],[5,8],[4,12],[6,16],[15,16]],R3); d.poly([[17,14],[27,8],[28,12],[26,16],[17,16]],R3);
    d.line(3,6,9,9,R2); d.line(29,6,23,9,R2);
    // knot
    d.rect(13,11,6,8,R); d.rect(14,12,4,6,R2); d.vline(18,12,18,R3);
    // bell under knot
    d.circ(16,22,3,G); d.px(15,21,G2); d.px(14,22,G2); d.hline(13,19,22,G3); d.px(16,24,'#3A2410'); d.vline(16,25,25,G3);
    // polka dots
    for(const [x,y] of [[6,10],[9,13],[26,10],[23,13],[4,15],[28,15]]) d.px(x,y,'#FFFFFF');
    d.outline(O);
    // hearts floating (thump)
    heart(d,24,0,'#F04070','#FFB0C0'); d.stamp(4,0,['c.c','ccc','.c.'],{c:'#F890B8'});
  },
  'dora:c0': d=>{ // empty lot with pipes, sunset
    dgrad(d,0,0,64,26,['#5A3A80','#B05A80','#E8806A','#F8B060','#F8D080']);
    d.circ(30,22,5,'#FFE0A0'); d.circ(30,22,4,'#FFF0C8');
    // house silhouettes
    for(const [x,w,h] of [[0,10,8],[10,8,10],[44,10,9],[54,10,12]]){d.rect(x,26-h,w,h,'#4A3060'); d.poly([[x-1,26-h],[x+w/2,26-h-4],[x+w,26-h]],'#3A2450'); d.px(x+3,28-h,'#F8D070')}
    // wooden fence
    d.rect(0,20,64,6,'#9A6A4A'); for(let x=0;x<64;x+=3) d.vline(x,20,25,'#7A4A30'); d.hline(0,63,22,'#7A4A30');
    // ground dirt + grass tufts
    d.rect(0,26,64,14,'#C8A070'); d.dither(0,26,64,1,'#A8C068','#C8A070');
    for(const [x,y] of [[26,30],[58,28],[34,37],[60,36],[4,38]]) d.stamp(x,y,['g.g','.g.'],{g:'#6A9A40'});
    // three concrete pipes (2 bottom, 1 top)
    const P='#A8A8B0',P2='#C8C8D0',P3='#787880',H='#3A3240';
    for(const [cx,cy] of [[38,30],[50,30],[44,21]]){d.circ(cx,cy,6,P3); d.circ(cx,cy,5,P); d.circ(cx-1,cy-1,4,P2); d.circ(cx,cy,3,H); d.ring(cx,cy,3,P3)}
    // long shadow
    d.rect(31,36,26,2,'#A88050');
    // dropped glasses + bat
    d.stamp(25,34,['kk.kk','kwkkw','kk.kk'],{k:'#2A2A3A',w:'#C8E0F8'});
    d.line(56,38,63,33,'#D0A060'); d.line(57,38,63,34,'#B08040');
    // bamboo-copter on top of pipe
    d.hline(40,48,13,'#F8D040'); d.vline(44,14,15,'#F8D040'); d.px(44,16,'#E8B020');
    tw(d,52,12,'#FFF8C0');
    // crows
    d.stamp(12,6,['k.k','.k.'],{k:'#3A2450'}); d.stamp(18,4,['k.k','.k.'],{k:'#3A2450'});
  },
  'dora:c1': d=>{ // cretaceous japan
    dgrad(d,0,0,64,24,['#88C8D8','#A8D8D0','#C8E8C0']);
    // volcano far with smoke
    d.poly([[30,20],[42,6],[46,6],[58,20]],'#8A7A88'); d.poly([[42,6],[46,6],[45,9],[43,9]],'#E86A3A');
    for(const [x,y,r] of [[44,3,2],[47,1,2],[41,1,1]]) d.circ(x,y,r,'#C8C0C8');
    // long-neck dinosaur silhouette far
    d.ell(24,17,5,3,'#6A9A8A'); d.line(27,15,32,6,'#6A9A8A'); d.line(28,15,33,6,'#6A9A8A'); d.ell(33,5,2,1,'#6A9A8A'); d.line(19,18,14,20,'#6A9A8A'); for(const x of [21,23,26,28]) d.vline(x,19,22,'#6A9A8A');
    // pterosaur
    d.stamp(8,4,['k.....k','.k...k.','..kkk..','...k...'],{k:'#4A5A68'});
    // jungle bands
    d.rect(0,20,64,6,'#3A8A48'); for(let x=0;x<64;x+=5) d.circ(x,20,3,'#3A8A48');
    for(let x=2;x<64;x+=7) d.circ(x,19,2,'#58A858');
    // ground
    d.rect(0,26,64,14,'#7A9A48'); d.dither(0,26,64,2,'#5A8A40','#7A9A48'); for(let i=0;i<10;i++) d.stamp(d.ri(22,60),d.ri(29,38),['g.g'],{g:'#5A7A38'});
    // giant ferns / cycads
    const F='#2A7A3A',F2='#4AA050';
    for(const [x,y] of [[58,24],[26,26]]){d.vline(x,y-6,y+4,'#7A5A30'); for(let i=0;i<5;i++){const a=-2.6+i*0.55; d.line(x,y-6,x+7*Math.cos(a),y-6+5*Math.sin(a),i%2?F:F2)}}
    // big footprint
    d.stamp(34,34,['.k.k.k','.k.k.k','..kkk.','..kkk.'],{k:'#5A6A30'});
    // time machine platform floating right
    d.rect(40,22,16,3,'#D8D8E0'); d.hline(40,55,22,'#FFFFFF'); d.hline(40,55,24,'#9898A8');
    d.rect(52,16,3,6,'#7A8898'); d.rect(50,14,6,3,'#5A6878'); d.px(51,15,'#F84040'); d.px(53,15,'#58F040'); d.px(54,15,'#F8D040');
    d.dither(40,25,16,1,'#B8F0FF','#88D8F8');
    // dino egg
    d.ell(47,33,2,3,'#F0E8C8'); d.px(46,32,'#B8A878'); d.px(48,34,'#B8A878');
  },
  'dora:c2': d=>{ // matsushiba factory 2112, space
    d.rect(0,0,64,40,'#2A3048');
    // big window into space
    d.rect(22,2,40,15,'#0A0A20'); starfield(d,22,['#FFFFFF','#A8C8FF','#F8E0A0'],15,23,60);
    d.circ(52,8,4,'#E87A48'); d.ell(52,8,7,1,'#F8C870'); d.circ(51,7,2,'#F8A070');
    d.frame(21,1,42,17,'#8A98B8'); d.vline(35,2,16,'#8A98B8'); d.vline(49,2,16,'#8A98B8');
    // flying car outside
    d.stamp(28,7,['.cc.','cccc','.yy.'],{c:'#58C8F8',y:'#F8E040'});
    // wall panels left
    for(let y=4;y<20;y+=5) d.hline(0,20,y,'#3A4260');
    // framed photo: yellow doraemon with ears
    d.rect(4,3,11,11,'#C8A040'); d.rect(5,4,9,9,'#FFF8E0');
    d.circ(9.5,9,3,'#F8D030'); d.circ(6,6,1,'#F8D030'); d.circ(13,6,1,'#F8D030'); d.ell(9.5,10,2,1,'#FFFFFF'); d.px(9,8,'#2A2A2A'); d.px(10,8,'#2A2A2A'); d.px(9,9,'#E02828'); d.px(10,9,'#E02828');
    // floor
    d.rect(0,26,64,14,'#5A6680'); for(let x=0;x<64;x+=8) d.vline(x,26,39,'#4A5670'); d.hline(0,63,26,'#9AA8C8');
    // conveyor belt
    d.rect(24,22,40,4,'#3A3A48'); d.hline(24,63,22,'#6A6A80'); for(let x=25;x<64;x+=3) d.px(x,24,'#8A8AA0'); d.rect(24,26,40,2,'#2A2A38');
    // robot heads on conveyor: blue, yellow, blue
    for(const [x,c] of [[30,'#F8D030'],[40,'#1CA0E8'],[50,'#1CA0E8'],[60,'#F8D030']]){d.circ(x,18,3.5,c); d.ell(x,19,2.5,2,'#FFFFFF'); d.px(x-1,16,'#FFFFFF'); d.px(x+1,16,'#FFFFFF'); d.px(x,18,'#E02828')}
    // robotic arm from ceiling
    d.rect(43,0,3,2,'#9AA8C8'); d.line(44,2,40,8,'#C8D0E0'); d.line(45,2,41,8,'#9AA8C8'); d.line(40,8,40,13,'#C8D0E0'); d.stamp(38,13,['k...k','kk.kk'],{k:'#C8D0E0'});
    // little bell parts in crate
    d.rect(24,31,10,6,'#8A6A40'); d.hline(24,33,31,'#A88850'); for(const x of [26,29,32]) {d.circ(x,30,1,'#F8C830'); d.px(x,30,'#FFF0A0')}
    // glowing floor markings
    d.hline(36,62,34,'#58E8F8'); d.hline(36,62,37,'#2A90B8');
    // pocket-shaped hatch on wall
    d.ell(14,22,4,2,'#FFFFFF'); d.hline(10,18,22,'#C8C8D0');
  },
  // ===== TREX =====
  'trex:s0': d=>{ // giant meat on the bone
    const O='#3A1A10',M='#B8502A',M2='#D86A3A',M3='#8A3418',M4='#F09060',B='#F8F0E0',B2='#D8D0C0',F='#F8E0C8';
    // bone through (diagonal)
    seg(d,4,27,27,5,1.6,B2); seg(d,4,26,27,4,1,B);
    // bone knobs
    for(const [x,y] of [[2,27],[4,29],[27,2],[29,4]]){d.circ(x,y,2,B2); d.circ(x-.5,y-.5,1.3,B)}
    // meat chunk
    d.ell(16,16,10,8,M3); d.ell(15,15,10,8,M); d.ell(14,13,7,5,M2); d.ell(12,11,3,2,M4);
    // fat marbling
    d.line(9,18,14,20,F); d.line(18,10,22,12,F); d.px(20,19,F);
    // bite marks (tooth row)
    for(const [x,y] of [[23,18],[24,16],[25,14]]){d.clear(x+1,y); d.px(x,y,M3)}
    d.outline(O);
    // little sauce drip + sparkle
    d.px(10,25,M3); d.px(10,26,M); tw(d,27,22,'#FFF0A0');
  },
  'trex:s1': d=>{ // lost tooth (banana-sized)
    const O='#3A2418',I='#F8F0DC',I2='#E0D0B0',I3='#B8A880',R='#F0A0A0',R2='#C87070',Y='#F8D840',Y2='#E0B020',Y3='#8A6A10';
    // tooth curved (big)
    d.poly([[6,4],[18,4],[17,14],[14,24],[9,30],[8,24],[7,16]],I);
    d.poly([[14,4],[18,4],[17,14],[14,24],[9,30],[12,22],[14,14]],I2);
    d.line(10,26,16,10,'#FFFFFF'); d.line(9,24,8,14,'#FFFFFF');
    // serrations on back edge
    for(let y=8;y<24;y+=3) d.px(18-(y-8)/4,y,I3);
    // root / gum
    d.rect(5,1,14,4,R); d.hline(5,18,1,'#F8C8C8'); d.hline(5,18,4,R2);
    // banana for scale
    d.poly([[22,6],[25,10],[27,18],[26,26],[23,30],[24,22],[24,14]],Y); d.line(25,10,26,24,Y2); d.px(22,5,Y3); d.px(22,6,Y3); d.px(23,30,Y3);
    d.outline(O);
    tw(d,4,28,'#FFF0A0'); d.px(29,2,'#FFF0A0');
  },
  'trex:s2': d=>{ // tyrant king crown
    const O='#3A2008',G='#E8B020',G2='#F8D850',G3='#B07810',GL='#FFF6B0',R='#D82838',E='#38B848',B='#3A78E0';
    // band
    d.rect(3,18,26,9,G); d.hline(3,28,18,G2); d.rect(3,25,26,2,G3); d.rect(3,19,3,6,G2);
    // tooth-shaped spikes
    for(const [x,h] of [[4,9],[10,12],[16,16],[22,12],[28,9]]){d.poly([[x-3,18],[x+3,18],[x,18-h]],G); d.line(x-2,17,x,18-h+1,G2)}
    // dino-scale pattern
    for(let x=6;x<28;x+=4){d.px(x,24,G3); d.px(x+1,23,G3); d.px(x+2,24,G3)}
    // gems
    d.circ(16,21,2,R); d.px(15,20,'#FF8890'); d.rect(9,20,2,2,E); d.rect(22,20,2,2,E); d.px(16,8,B); d.px(16,9,B);
    d.circ(4,9,1,R); d.circ(28,9,1,R);
    d.outline(O);
    // shine
    tw(d,12,4,GL); d.px(26,14,GL);
    // tiny claw scratch marks on band (tried to put it on)
    d.line(11,26,13,24,'#8A5A08'); d.line(13,26,15,24,'#8A5A08');
  },
  'trex:c0': d=>{ // playground slide, day
    dgrad(d,0,0,64,28,['#68B8F0','#88CCF8','#A8DCF8']);
    cloud(d,10,6,6,'#FFFFFF'); cloud(d,40,4,5,'#FFFFFF');
    // trees background
    for(const [x,r] of [[4,7],[60,8],[30,6]]){d.circ(x,20,r,'#4AA050'); d.circ(x-2,18,r-3,'#68C060')}
    // grass + sand
    d.rect(0,26,64,14,'#78C858'); d.ell(44,35,18,5,'#F0D890'); d.ell(44,35,16,4,'#F8E4A8');
    // slide structure
    const S='#F8C838',S2='#E0A020',R='#E85050',R2='#C83838',L='#5888D8';
    d.vline(52,8,32,L); d.vline(57,8,32,L); for(let y=10;y<32;y+=4) d.hline(52,57,y,L);
    d.rect(49,7,11,2,R); d.hline(49,59,7,'#F87878'); d.poly([[48,7],[54,1],[60,7]],R2); d.hline(50,58,6,R);
    d.poly([[49,9],[51,9],[34,30],[30,30]],S); d.line(50,9,32,30,S2);
    d.line(51,8,35,28,R); d.line(48,8,31,28,R);
    d.rect(28,30,6,2,S); d.vline(36,28,33,L);
    // swing on left-center
    d.line(26,8,28,27,'#9A6A40'); d.line(26,8,24,27,'#9A6A40'); d.line(4,8,2,27,'#9A6A40'); d.line(4,8,6,27,'#9A6A40'); d.hline(4,26,8,'#9A6A40'); d.hline(4,26,7,'#B8885A');
    for(const x of [9,19]){d.vline(x,9,16,'#8A8A98'); d.vline(x+3,9,16,'#8A8A98'); d.rect(x,17,4,1,R)}
    // dino footprints in sand
    for(const [x,y] of [[38,36],[46,33],[54,37]]) d.stamp(x,y,['k.k.k','.kkk.','..k..'],{k:'#C8A860'});
    // forgotten bucket
    d.rect(40,30,3,3,'#58A8E8'); d.hline(39,43,30,'#78C8F8');
    for(let i=0;i<10;i++) d.stamp(d.ri(0,62),d.ri(28,39),['g'],{g:'#58A840'});
  },
  'trex:c1': d=>{ // dino movie set (city)
    d.rect(0,0,64,40,'#2A2438');
    // painted city backdrop
    d.rect(0,4,64,22,'#F8A870'); d.rect(0,4,64,8,'#E88870');
    for(const [x,w,h,c] of [[2,6,12,'#7A5A8A'],[9,5,16,'#8A6A9A'],[15,7,10,'#7A5A8A'],[24,6,18,'#6A4A7A'],[31,8,12,'#8A6A9A'],[41,5,15,'#7A5A8A'],[47,7,9,'#6A4A7A'],[55,6,13,'#8A6A9A']]){d.rect(x,26-h,w,h,c); for(let j=28-h;j<25;j+=3) for(let i=x+1;i<x+w-1;i+=2) d.px(i,j,'#F8E070')}
    // knocked-over building prop (roar damage)
    d.poly([[33,26],[36,22],[44,26]],'#A88870'); 
    // rigging lights top
    d.hline(0,63,1,'#4A4458'); for(const x of [12,32,52]){d.rect(x-2,1,4,3,'#1A1A24'); d.px(x-1,4,'#FFF8C0'); d.px(x,4,'#FFF8C0')}
    // stage floor
    d.rect(0,26,64,14,'#6A4A38'); for(let y=28;y<40;y+=3) d.hline(0,63,y,'#5A3A2A'); d.hline(0,63,26,'#8A6A50');
    // spotlight beam on center
    {const mix=(a,b,t)=>'#'+[1,3,5].map(i=>Math.round(parseInt(a.slice(i,i+2),16)*(1-t)+parseInt(b.slice(i,i+2),16)*t).toString(16).padStart(2,'0')).join('').toUpperCase();
     for(let y=5;y<40;y++){const w=Math.round((y-5)*0.35); for(let x=32-w;x<=32+w;x++) d.px(x,y,mix(d.get(x,y),'#FFF0B0',.3))}}
    // camera on tripod right
    d.rect(52,18,8,6,'#2A2A34'); d.circ(51,21,2,'#3A3A48'); d.px(50,21,'#58A8E8'); d.circ(55,16,2,'#2A2A34'); d.circ(59,16,2,'#2A2A34');
    d.line(56,24,52,36,'#4A4A58'); d.line(56,24,60,36,'#4A4A58'); d.vline(56,24,36,'#4A4A58');
    // clapperboard on floor
    d.rect(38,32,8,5,'#1A1A1A'); d.stamp(38,30,['wkwkwkwk','kwkwkwkw'],{w:'#FFFFFF',k:'#1A1A1A'}); d.hline(39,44,34,'#E8E8E8'); d.px(40,35,'#E8E8E8');
    // director chair with star
    d.rect(25,30,7,4,'#C83030'); d.rect(25,27,7,3,'#C83030'); d.vline(25,30,38,'#8A5A30'); d.vline(31,30,38,'#8A5A30'); d.line(25,34,31,38,'#8A5A30'); d.line(31,34,25,38,'#8A5A30');
    d.stamp(27,27,['.y.','yyy','.y.'],{y:'#F8D040'});
    // stage tape X mark
    d.stamp(12,36,['y...y','.y.y.','..y..','.y.y.','y...y'],{y:'#F8D040'});
  },
  'trex:c2': d=>{ // cretaceous throne hill, sunset
    dgrad(d,0,0,64,30,['#4A2A6A','#A8407A','#E8604A','#F89848','#F8C868']);
    d.circ(20,22,6,'#FFD878'); d.circ(20,22,5,'#FFE8A0');
    // far volcano erupting
    d.poly([[0,26],[8,14],[12,14],[22,26]],'#6A3050'); d.poly([[8,14],[12,14],[11,16],[9,16]],'#F86030');
    d.line(10,13,8,6,'#F88030'); d.line(10,13,13,7,'#F8A040'); for(const [x,y] of [[7,5],[13,6],[10,3]]) d.circ(x,y,1,'#5A3050');
    // pterosaurs
    d.stamp(30,6,['k...k','.kkk.','..k..'],{k:'#3A1A3A'}); d.stamp(38,10,['k..k','.kk.'],{k:'#3A1A3A'});
    // throne hill on right
    d.poly([[24,40],[36,22],[42,14],[52,10],[60,14],[64,18],[64,40]],'#5A3448');
    d.poly([[42,14],[52,10],[60,14],[56,16],[46,16]],'#7A4A58');
    d.line(36,22,42,14,'#8A5A68'); d.line(30,30,36,22,'#8A5A68');
    // throne carved in rock on top
    d.rect(48,4,10,7,'#7A4A58'); d.rect(49,5,8,5,'#9A6A70'); d.rect(46,9,14,3,'#7A4A58'); d.hline(46,59,9,'#AA7A80');
    d.poly([[48,4],[50,0],[52,4]],'#7A4A58'); d.poly([[54,4],[56,0],[58,4]],'#7A4A58');
    d.circ(53,6,1,'#F8D040');
    // ground
    d.rect(0,30,40,10,'#4A2A3A'); d.poly([[0,30],[30,30],[24,40],[0,40]],'#3A2030'); d.hline(0,29,30,'#6A3A48');
    // bowing small dinos silhouettes on hill slope
    for(const [x,y] of [[34,30],[40,26],[44,34]]) d.stamp(x,y,['......kk','kkkkkkk.','.kkkkk..','.k..k...'],{k:'#2A1428'});
    // lava glow cracks
    d.line(48,30,52,38,'#F86030'); d.line(58,24,61,30,'#F86030');
    // roar lines from top
    d.line(42,6,38,4,'#FFF0C0'); d.line(42,9,37,9,'#FFF0C0'); d.line(60,4,63,2,'#FFF0C0');
  },
  // ===== UNICORN =====
  'unicorn:s0': d=>{ // rainbow cupcake
    const O='#4A3868',W='#F8B8D8',W2='#E890B8',W3='#C8689A';
    // wrapper
    d.poly([[6,18],[26,18],[23,30],[9,30]],W); for(let x=8;x<26;x+=3) d.line(x,18,x+(x<16?1:-1)*1+ (16-x)*0.15,30,W2); d.hline(9,22,30,W3);
    // frosting swirl rainbow layers
    const rb=['#F86A8A','#F8A050','#F8E060','#78D878','#68B8F8','#B888F0'];
    d.ell(16,17,11,3,rb[5]); d.ell(16,14,10,3,rb[4]); d.ell(16,11,8,3,rb[3]); d.ell(16,8,6,2,rb[2]); d.ell(16,5,4,2,rb[1]); d.ell(16,3,2,1,rb[0]);
    for(const [y,w] of [[16,9],[13,8],[10,6],[7,4]]) d.hline(16-w,16-w+3,y,'#FFFFFF');
    // sprinkles
    for(const [x,y,c] of [[9,16,'#FFFFFF'],[21,15,'#F8E060'],[13,12,'#F86A8A'],[19,10,'#FFFFFF'],[12,8,'#B888F0'],[22,18,'#F86A8A']]) d.px(x,y,c);
    d.outline(O);
    // sparkle star topper
    tw(d,16,0,'#FFF4A0'); tw(d,27,6,'#FFFFFF'); d.px(4,10,'#FFF4A0');
  },
  'unicorn:s1': d=>{ // piece of rainbow (broken off arc)
    const O='#4A3868', rb=['#F86A8A','#F8A050','#F8E060','#78D878','#68B8F8','#B888F0'];
    for(let i=0;i<6;i++) arc(d,24,27,20-i*2,20-i*2,Math.PI*1.0,Math.PI*1.5,rb[i]);
    for(let i=0;i<6;i++) arc(d,24,27,19-i*2,19-i*2,Math.PI*1.0,Math.PI*1.5,rb[i]);
    // jagged broken end at top-right
    for(const [x,y] of [[24,7],[24,8],[23,9],[24,10],[25,11],[24,12],[25,13],[24,14]]){d.clear(x,y); d.clear(x+1,y)}
    // cloud at bottom left end
    d.circ(6,27,3,'#FFFFFF'); d.circ(10,28,3,'#FFFFFF'); d.circ(3,29,2,'#FFFFFF'); d.hline(2,13,30,'#E0E0F8');
    d.outline(O);
    // crumbs falling from broken end
    d.px(27,12,'#F8E060'); d.px(28,15,'#68B8F8'); d.px(26,17,'#F86A8A');
    tw(d,14,4,'#FFF4A0'); tw(d,28,25,'#FFFFFF');
  },
  'unicorn:s2': d=>{ // wishing stardust jar
    const O='#3A2858',G='#D8F0FF',G2='#A8D0F0',G3='#88A8D8',K='#C08850',K2='#9A6838',S='#F8E060',S2='#FFF8C0',P='#F890C8',P2='#B888F0';
    // jar
    d.rect(7,10,18,19,G); d.ell(16,28,9,2,G); d.rect(10,7,12,4,G2); d.rect(23,10,2,18,G2);
    // stardust layers
    d.rect(8,20,16,8,P2); d.ell(16,28,8,1,P2); d.rect(8,16,16,4,P); d.dither(8,16,16,1,P,G);
    for(const [x,y] of [[10,22],[14,24],[19,21],[21,25],[12,18],[17,17],[22,18],[11,26]]) d.px(x,y,S2);
    // big star floating inside
    d.stamp(12,10,['...s...','..sss..','sssssss','.sssss.','.ss.ss.','.s...s.'],{s:S}); d.px(15,12,S2);
    // cork
    d.rect(10,3,12,4,K); d.hline(10,21,3,'#D8A870'); d.hline(10,21,6,K2);
    // glass shine
    d.vline(9,11,24,'#FFFFFF'); d.vline(10,12,15,'#FFFFFF');
    // ribbon around neck + heart tag
    d.rect(9,8,14,2,P); d.line(22,9,26,13,P);
    d.outline(O);
    heart(d,25,13,'#F06090','#FFC0D8');
    tw(d,4,4,'#FFF4A0'); tw(d,28,3,'#FFFFFF'); d.px(3,15,S);
  },
  'unicorn:c0': d=>{ // flower hill, day
    dgrad(d,0,0,64,24,['#88C8F8','#A8D8F8','#C8E8F8']);
    cloud(d,50,5,6,'#FFFFFF'); cloud(d,22,8,4,'#FFFFFF');
    // far hills
    d.ell(14,26,22,7,'#98D888'); d.ell(52,22,22,10,'#78C870');
    // main hill rising to right with blossoming tree on top
    d.poly([[0,28],[28,26],[44,18],[56,15],[64,15],[64,40],[0,40]],'#68B858');
    d.poly([[0,30],[24,29],[40,24],[64,22],[64,40],[0,40]],'#58A848');
    d.vline(54,6,16,'#8A5A3A'); d.vline(55,8,16,'#7A4A2A'); d.line(54,10,50,7,'#8A5A3A');
    d.circ(54,5,6,'#F8B8D8'); d.circ(50,7,4,'#F8B8D8'); d.circ(58,7,4,'#F8A0C8'); d.circ(53,3,3,'#FFD0E8');
    for(const [x,y] of [[51,4],[56,6],[53,8]]) d.px(x,y,'#FFFFFF');
    // flower carpets
    const fc=['#F86A8A','#F8E060','#FFFFFF','#B888F0','#F8A050'];
    let k=0; for(let y=22;y<40;y+=4) for(let x=24+(y%8?3:0);x<64;x+=6){const xx=x+d.ri(-1,1), yy=y+d.ri(0,1); const g=d.get(xx,yy); if(g==='#58A848'||g==='#68B858'){const c=fc[(k++)%5]; d.stamp(xx-1,yy-1,['.c.','cyc','.c.'],{c,y:c==='#F8E060'?'#F8A050':'#F8E060'}); d.px(xx,yy+2,'#3A8A38')}}
    for(const [x,y,c] of [[3,36,'#F86A8A'],[10,38,'#FFFFFF'],[17,35,'#F8E060'],[2,31,'#B888F0']]) d.px(x,y,c);
    // big daisies center
    for(const [x,y] of [[30,33],[42,30],[36,37]]) d.stamp(x-2,y-2,['.w.w.','wwyww','.wyw.','wwyww','.w.w.'],{w:'#FFFFFF',y:'#F8D040'});
    // butterflies
    d.stamp(38,14,['p.p','.k.','p.p'],{p:'#F890C8',k:'#4A3868'}); d.stamp(28,18,['b.b','.k.','b.b'],{b:'#68B8F8',k:'#4A3868'});
    // sparkle trail (prancing)
    for(const [x,y] of [[24,24],[30,22],[36,21]]) tw(d,x,y,'#FFF4A0');
  },
  'unicorn:c1': d=>{ // cotton candy cloud land
    dgrad(d,0,0,64,26,['#F8C8E8','#E8C8F8','#C8D8F8','#C8F0F8']);
    // rainbow arc
    const rb=['#F86A8A','#F8A050','#F8E060','#78D878','#68B8F8','#B888F0'];
    for(let i=0;i<6;i++) arc(d,44,26,20-i,16-i,Math.PI,Math.PI*2,rb[i]);
    // floating candy clouds
    cloud(d,10,6,5,'#FFD8EC'); cloud(d,30,4,4,'#D8E8FF');
    // cloud ground (cotton candy pink + blue puffs)
    for(let x=-2;x<66;x+=6) d.circ(x,27+(x%12?1:0),5,(x/6)%2?'#F8B8DC':'#B8D8F8');
    d.rect(0,28,64,12,'#F8C8E4'); for(let x=2;x<64;x+=8) d.circ(x,36,4,'#FFD8EC'); for(let x=6;x<64;x+=8) d.circ(x,33,3,'#E8B0D8');
    // lollipop trees
    for(const [x,h,c] of [[30,12,'#F86A8A'],[58,16,'#68B8F8'],[44,10,'#B888F0']]){d.vline(x,30-h,30,'#FFFFFF'); d.circ(x,30-h-3,4,c); d.ring(x,30-h-3,2,'#FFFFFF'); d.px(x,30-h-3,'#FFFFFF')}
    // cotton candy cone stand on right (big swirl)
    d.poly([[50,38],[54,26],[46,26]],'#F8E8B8'); d.line(50,38,48,27,'#E8C888'); d.circ(50,22,5,'#F890C8'); d.circ(48,21,3,'#FFB8DC'); d.circ(53,20,2,'#FFC8E4');
    // gumdrops on ground
    for(const [x,y,c] of [[28,34,'#78D878'],[38,35,'#F8E060'],[60,34,'#F8A050']]){d.ell(x,y,2,1,c); d.px(x,y-2,c); d.hline(x-1,x+1,y-1,c); d.px(x-1,y-1,'#FFFFFF')}
    // sparkles
    tw(d,22,14,'#FFFFFF'); tw(d,62,4,'#FFFFFF'); d.px(16,18,'#FFF4A0'); d.px(38,8,'#FFF4A0');
  },
  'unicorn:c2': d=>{ // starland at rainbow's end, space
    dgrad(d,0,0,64,40,['#1A1040','#2A1858','#3A2070']);
    starfield(d,30,['#FFFFFF','#F8E8A0','#C8B8F8'],30);
    // rainbow road ending from left-top down into starland right
    const rb=['#F86A8A','#F8A050','#F8E060','#78D878','#68B8F8','#B888F0'];
    for(let i=0;i<6;i++){arc(d,32,38,28-i,28-i,Math.PI*1.3,Math.PI*1.98,rb[i]); arc(d,32,38,27.5-i,27.5-i,Math.PI*1.3,Math.PI*1.98,rb[i])}
    for(const [x,y,r] of [[59,35,3],[55,37,3],[13,15,2],[10,16,2]]) d.circ(x,y,r,'#FFFFFF');
    // ringed planet
    d.circ(12,8,4,'#F8A0C8'); d.circ(11,7,2,'#FFC8E0'); d.line(5,10,19,6,'#F8E060');
    // starland ground: purple glowing hills with star dust
    d.ell(48,40,22,9,'#5A3898'); d.ell(16,42,22,9,'#4A2A88'); d.rect(0,36,64,4,'#4A2A88');
    for(let i=0;i<30;i++){const x=d.ri(0,63), y=d.ri(32,39); if(d.get(x,y)!=='#1A1040'&&d.get(x,y)!=='#2A1858'&&d.get(x,y)!=='#3A2070') d.px(x,y,i%2?'#F8E060':'#FFFFFF')}
    // big waving stars with faces
    const star=(x,y,c,c2)=>{d.stamp(x-4,y-4,['....s....','...sss...','sssssssss','.sssssss.','..sssss..','..ss.ss..','.ss...ss.'],{s:c}); d.px(x-1,y-1,'#3A2058'); d.px(x+1,y-1,'#3A2058'); d.px(x,y,c2)};
    star(33,26,'#F8E060','#F86A8A'); star(45,28,'#FFF4A0','#F86A8A'); star(57,8,'#F8D040','#F86A8A');
    // waving little arms (motion lines)
    d.line(28,22,26,20,'#FFFFFF'); d.line(50,24,52,22,'#FFFFFF'); d.line(62,4,63,2,'#FFFFFF');
    // shooting star
    d.line(20,2,28,6,'#C8B8F8'); tw(d,29,6,'#FFFFFF');
  },
};
