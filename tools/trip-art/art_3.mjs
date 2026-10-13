// art_3: chick, panda, rock, mark, kitty, nanami, widow, hachiware, bart, brachio, ttukbul
// shared helpers
const cloud=(d,x,y,w,c,s)=>{ // puffy cloud, w ~ width
  const h=Math.max(2,Math.round(w/4));
  d.ell(x+w/2,y+h,w/2,h/2+0.5,c);
  d.circ(x+w*0.35,y+h*0.6,h*0.75,c); d.circ(x+w*0.62,y+h*0.45,h*0.9,c);
  if(s) d.hline(Math.round(x+2),Math.round(x+w-2),Math.round(y+h+h/2),s);
};
const stars=(d,n,x0,x1,y0,y1,cols)=>{for(let i=0;i<n;i++){d.px(d.ri(x0,x1),d.ri(y0,y1),cols[i%cols.length])}};
const twinkle=(d,x,y,c,c2)=>{d.px(x,y,c2||c); d.px(x-1,y,c); d.px(x+1,y,c); d.px(x,y-1,c); d.px(x,y+1,c)};
const sparkle=(d,x,y,c,w)=>{d.stamp(x-2,y-2,['..y..','..y..','yyWyy','..y..','..y..'],{y:c,W:w||'#FFFFFF'})};
const hen=(d,x,y,b,b2,flip)=>{ // 9x7 hen facing left (flip -> right)
  const rows=['.rr......','bbbb....t','bkbbb..tt','ybbbbbbtt','.bbbbbBbb','..bbBBbb.','...y..y..'];
  const pal={r:'#E83A3A',b,B:b2,k:'#2A1E1A',y:'#F0A020',t:b2};
  rows.forEach((r,j)=>[...r].forEach((ch,i)=>{if(ch!=='.') d.px(flip?x+8-i:x+i,y+j,pal[ch])}));
};
const tuft=(d,x,y,c)=>{d.px(x,y,c); d.px(x+1,y-1,c); d.px(x+2,y,c)};
const note=(d,x,y,c)=>{d.stamp(x,y,['.cc','.c.','.c.','cc.','cc.'],{c})};
// shaded ellipse: tones dark -> light, light from upper-left
const ball=(d,cx,cy,rx,ry,tones,lx=-0.55,ly=-0.65)=>{
  for(let y=Math.floor(cy-ry-1);y<=Math.ceil(cy+ry+1);y++)for(let x=Math.floor(cx-rx-1);x<=Math.ceil(cx+rx+1);x++){
    const nx=(x-cx)/(rx+.4), ny=(y-cy)/(ry+.4), r2=nx*nx+ny*ny; if(r2>1) continue;
    const nz=Math.sqrt(1-r2), l=(nx*lx+ny*ly)+nz*0.55;
    const i=Math.max(0,Math.min(tones.length-1,Math.floor((l+0.35)/1.45*tones.length)));
    d.px(x,y,tones[i]);
  }
};
const bamboo=(d,x,y0,y1,w,c,c2,nd,step=5)=>{ // vertical stalk x..x+w-1, nodes every step
  d.rect(x,y0,w,y1-y0+1,c); if(w>1) d.vline(x+w-1,y0,y1,c2);
  for(let y=y1-step;y>=y0;y-=step){d.hline(x-(w>2?1:0),x+w-1+(w>2?1:0),y,nd)}
};
const leaf=(d,x,y,dir,c,c2)=>{ // dir 1 = to right, -1 = to left; ~5px long drooping leaf
  d.px(x,y,c); d.px(x+dir,y,c); d.px(x+2*dir,y+1,c); d.px(x+dir,y-1,c2||c); d.px(x+3*dir,y+1,c); d.px(x+4*dir,y+2,c); d.px(x+2*dir,y,c2||c);
};
const fillHoles=d=>{for(let x=0;x<d.W;x++)for(let y=0;y<d.H;y++) if(!d.get(x,y)){let c=null; for(let k=1;k<d.H&&!c;k++) c=d.get(x,y-k)||d.get(x,y+k)||d.get(x-k,y)||d.get(x+k,y); d.px(x,y,c)}};
const ART={
  'chick:c0': d=>{
    d.grad(0,0,64,20,['#8ACCF2','#9ED6F4','#B4E0F6','#CAEAF6']);
    cloud(d,22,3,12,'#FFFFFF'); cloud(d,4,6,9,'#FFFFFF'); d.circ(40,5,3,'#FFF4B0'); d.circ(40,5,2,'#FFFFFF');
    // far hills
    d.ell(14,22,20,5,'#9ACF70'); d.ell(44,22,16,4,'#8CC464');
    d.rect(0,22,64,18,'#86C45A'); d.dither(0,22,64,1,'#86C45A','#9AD06A');
    // dirt yard
    d.ell(36,33,26,6,'#D8B880'); d.ell(36,33,24,5,'#E4C890');
    // fence in back
    for(let x=0;x<44;x+=5){d.rect(x,15,2,8,'#F4F0E4'); d.px(x,14,'#F4F0E4')} d.hline(0,43,17,'#E0D8C4'); d.hline(0,43,20,'#E0D8C4');
    // henhouse
    const X=43; d.rect(X,13,19,15,'#C84A3A'); for(let y=14;y<28;y+=2) d.hline(X,X+18,y,'#B03C30');
    d.poly([[X-3,13],[X+9.5,3],[X+22,13]],'#6A4A3A'); d.poly([[X-1,12],[X+9.5,5],[X+20,12]],'#8A6248'); d.hline(X-3,X+21,13,'#4A3228');
    d.rect(X+7,17,6,11,'#3A2420'); d.frame(X+6,16,8,12,'#F4F0E4'); d.rect(X+8,18,4,4,'#2A1A18'); d.px(X+9,19,'#F8C838'); d.px(X+10,19,'#F8C838');
    d.rect(X+15,16,3,3,'#F8E8B0'); d.frame(X+14,15,5,5,'#F4F0E4');
    d.rect(X+1,16,4,4,'#F8E8B0'); d.frame(X,15,6,6,'#F4F0E4');
    // ramp
    d.line(X+6,28,X-2,33,'#9A7048'); d.line(X+6,29,X-2,34,'#7A5434'); for(let i=0;i<4;i++) d.px(X+5-i*2,29+i,'#C8A070');
    // straw
    d.hline(X+1,X+5,27,'#F2D060'); d.px(X+16,27,'#F2D060'); d.px(X+17,26,'#E8C048');
    // hens
    hen(d,24,25,'#FFFFFF','#DCD8D0',false); hen(d,33,29,'#C8783A','#9A5228',true); hen(d,27,32,'#FFFFFF','#DCD8D0',true); hen(d,53,31,'#FFFFFF','#DCD8D0',false);
    // egg basket
    d.ell(37,24,3,1,'#FFF6E8'); d.px(35,24,'#F4E2C0'); d.rect(34,25,7,3,'#B07838'); d.hline(34,40,26,'#8A5A28'); d.ell(36,24,1,1,'#FFFFFF'); d.px(38,23,'#F6E4C8');
    // scattered seeds
    for(const [x,y] of [[30,37],[45,36],[50,34],[25,36],[40,35],[58,37]]) d.px(x,y,'#F8C838');
    tuft(d,2,30,'#6AAA48'); tuft(d,60,24,'#6AAA48'); tuft(d,12,37,'#6AAA48');
  },
  'chick:c1': d=>{
    d.grad(0,0,64,18,['#5EB8F0','#78C6F2','#92D2F4','#B0E0F6']);
    d.circ(8,5,4,'#FFE868'); d.circ(8,5,3,'#FFF6B8');
    cloud(d,18,4,10,'#FFFFFF');
    // distant field band
    d.rect(0,18,64,4,'#7AB850');
    for(let x=0;x<64;x+=3){d.circ(x+1,18,1,'#F8C828'); d.px(x+1,18,'#8A5A20')}
    // middle row
    d.rect(0,22,64,18,'#6AAE48');
    for(let x=24;x<64;x+=5){d.vline(x+2,23,28,'#3E8A30'); d.circ(x+2,22,2,'#F8B820'); d.circ(x+2,22,1,'#7A4A1A')}
    // ground
    d.rect(0,30,64,10,'#8ACB58'); d.dither(0,30,64,1,'#8ACB58','#6AAE48');
    for(let x=0;x<64;x+=4) d.px(x+(x%8?1:3),35,'#A6DC74');
    // giant sunflowers
    const sf=(cx,cy,r,lean)=>{
      d.line(cx,cy+r,cx+lean,39,'#3A8A2A'); d.line(cx+1,cy+r,cx+lean+1,39,'#2E7020');
      d.ell(cx+lean*0.6-4,cy+r+9,3,1.5,'#4AA038'); d.ell(cx+lean*0.7+5,cy+r+14,3,1.5,'#4AA038');
      for(let a=0;a<16;a++){const t=a/16*Math.PI*2; d.ell(cx+Math.cos(t)*r*0.95,cy+Math.sin(t)*r*0.95,1.4,1.4,a%2?'#F8C020':'#FFD838')}
      d.circ(cx,cy,r*0.62,'#7A4518'); d.circ(cx,cy,r*0.45,'#5A3010');
      for(let i=-1;i<=1;i++) d.px(cx+i*2,cy+((i+3)%2),'#A06428');
      d.px(cx-Math.round(r*0.4),cy-Math.round(r*0.4),'#B07838');
    };
    sf(36,10,5,-1); sf(48,6,6,1); sf(58,13,4.5,0); sf(28,16,3.5,0);
    // bee
    d.stamp(41,20,['.ww.','yky.','.y..'],{w:'#E8F6FF',y:'#F8D030',k:'#2A1E1A'});
    // fallen petal & sunflower seeds
    d.px(26,36,'#FFD838'); d.px(27,36,'#F8C020'); d.px(45,37,'#5A3010'); d.px(47,36,'#5A3010');
  },
  // the hill where dawn begins: dawn sky, sun cresting behind a round hill topped by a rooster weathervane
  'chick:c2': d=>{
    d.grad(0,0,64,26,['#5A4A8A','#7A5A9A','#A86AA0','#D47A98','#F09A88','#F8B878','#FCD48A','#FEE8A8']);
    for(const [a,b] of [[38,0],[32,6],[60,6],[26,14],[64,14]]) d.line(46,22,a,b,'#FFE8A0');
    d.circ(46,22,8,'#FFE890'); d.circ(46,22,6,'#FFF6D0');
    twinkle(d,10,4,'#FFE8F0','#FFFFFF'); d.px(22,7,'#FFF0F8'); d.px(60,3,'#FFF0F8');
    d.hline(4,16,12,'#F4A4A0'); d.hline(6,14,13,'#E890A0'); d.hline(20,28,9,'#C890B0');
    d.ell(10,31,22,7,'#7A6A8E');
    d.ell(44,44,29,19,'#B8D878'); d.ell(44,45,28,19,'#5E9E58'); d.ell(41,47,25,17,'#56944F');
    d.rect(0,34,64,6,'#56944F'); d.dither(0,33,64,1,'#56944F','#7A6A8E'); d.dither(0,36,64,1,'#56944F','#4E8A50'); d.rect(0,37,64,3,'#4E8A50');
    d.vline(44,13,26,'#3A2A2A'); d.hline(41,47,17,'#3A2A2A'); d.px(40,17,'#3A2A2A'); d.px(48,17,'#3A2A2A');
    d.stamp(40,7,['..r......','.kkk....k','kkkkk..kk','.kkkkkkkk','..kkkkkk.','...kkkk..'],{k:'#3A2A2A',r:'#C04040'});
    for(const [x,y] of [[29,30],[33,28],[55,28],[59,30]]) {d.vline(x,y,y+5,'#5A3A2A'); d.px(x,y-1,'#7A5440')}
    d.line(29,32,33,30,'#5A3A2A'); d.line(55,30,59,32,'#5A3A2A');
    note(d,23,14,'#FFF6E8'); note(d,27,10,'#FFE0E8');
    for(const [x,y,c] of [[28,35,'#FFF4F0'],[36,37,'#F8D048'],[50,35,'#FFF4F0'],[60,36,'#F8D048'],[43,32,'#F8A0B0'],[38,30,'#FFF4F0']]){d.px(x,y,c); d.px(x,y+1,'#3A7040')}
  },
  // handful of yard seeds: wheat ear behind, two equal seed heaps on a leaf ("half for you"), little heart
  'chick:s0': d=>{
    const ST='#B8902E', HD='#F2C860', HD2='#C8963A', HL='#FFE7A0', AW='#D8C080';
    // wheat stalk + ear (standing behind, leaning right)
    d.line(16,24,18,13,ST); d.line(17,24,19,13,ST);
    for(let k=0;k<5;k++){const y=3+k*2, x=21-Math.round(k*0.6);
      d.stamp(x-3,y,['.hh','hhH','.HH'],{h:HD,H:HD2}); d.stamp(x,y,['hh.','hHH','HH.'],{h:HD,H:HD2});
      d.px(x-2,y,HL);
      d.px(x-4,y,AW); d.px(x+3,y,AW);
    }
    d.stamp(20,0,['h','H'],{h:HD,H:HD2}); d.line(20,0,18,-4,AW); d.line(21,1,24,-3,AW); d.line(17,3,14,0,AW); d.line(23,3,26,0,AW);
    // leaf plate
    d.ell(16,26,15,4,'#4E9A34'); d.ell(16,25,14,3,'#6CB84A'); d.line(3,25,29,25,'#8ED06A');
    for(const x of [8,14,20,26]) d.line(x,25,x-2,27,'#5AA83E');
    // two heaps
    [9,23].forEach((cx,hi)=>{
      ball(d,cx,21,6,4.5,['#B88A48','#D0A464','#E2BC7C']);
      const seeds=hi?[[-4,1,'c'],[-2,-3,'c'],[2,-1,'c'],[-2,1,'m'],[1,2,'s'],[4,1,'c'],[3,-3,'m'],[-4,-1,'m'],[0,-1,'m']]:[[-4,1,'c'],[-1,-3,'s'],[2,0,'c'],[-2,1,'m'],[4,1,'m'],[1,-3,'c'],[-4,-1,'c'],[0,2,'m']];
      for(const [dx,dy,t] of seeds){const x=cx+dx, y=21+dy;
        if(t==='c') d.stamp(x,y,['Yy','yo'],{y:'#F8C838',Y:'#FFF2A8',o:'#E09A20'});
        else if(t==='s') d.stamp(x,y,['kw','kk'],{k:'#3A3434',w:'#E8E4DA'});
        else d.px(x,y,'#FFF0C8');
      }
    });
    d.stamp(1,27,['Yy','yo'],{y:'#F8C838',Y:'#FFF2A8',o:'#E09A20'}); d.stamp(29,27,['kw','kk'],{k:'#3A3434',w:'#E8E4DA'});
    d.outline('#4A3020');
    d.stamp(4,8,['.rr.rr.','rWrrrrr','rrrrrrr','.rrrrr.','..rrr..','...r...'],{r:'#F06070',W:'#FFC0C8'});
  },

  'chick:s1': d=>{
    const P=t=>{const a=[5,30],b=[8,6],c=[28,3]; const u=1-t; return [u*u*a[0]+2*u*t*b[0]+t*t*c[0], u*u*a[1]+2*u*t*b[1]+t*t*c[1]]};
    const bands=[['#E85A2A','#B83A1A'],['#F0902A','#C8601A'],['#2E9A5A','#1E6A40'],['#2A8A88','#1A5E66'],['#3A6AC8','#2A4898'],['#6A4AB8','#46308A']];
    for(let t=0.04;t<=1.0;t+=0.004){
      const [x,y]=P(t), [x2,y2]=P(Math.min(1,t+0.01)); let nx=-(y2-y), ny=x2-x; const L=Math.hypot(nx,ny)||1; nx/=L; ny/=L;
      const w=t<0.15?1+t*14:Math.sin(Math.PI*Math.min(1,(t-0.05)/1.0))*5.2+1.2;
      const bi=Math.min(5,Math.floor(Math.max(0,t-0.12)/0.15)); const [c1,c2]=bands[bi];
      for(let s=0;s<=w;s+=0.5){d.px(x+nx*s,y+ny*s,s>w-1.3?c2:c1); d.px(x-nx*s*0.85,y-ny*s*0.85,s>w*0.85-1.3?c2:c1)}
    }
    // barbs gaps
    for(let t=0.3;t<0.95;t+=0.11){const [x,y]=P(t); const [x2,y2]=P(t+0.01); let nx=-(y2-y),ny=x2-x; const L=Math.hypot(nx,ny); nx/=L; ny/=L;
      for(let s=2;s<7;s++) {const X=Math.round(x+nx*s+ (x2-x)/L*s*0.6), Y=Math.round(y+ny*s+(y2-y)/L*s*0.6); if(d.get(X,Y)&&s>4) d.clear(X,Y)}}
    // eye spot near tip
    const [ex,ey]=P(0.86); d.ell(ex+1,ey+1,2,1.5,'#88E0C0'); d.px(ex+1,ey+1,'#F4FFF8');
    // shaft
    for(let t=0;t<=0.97;t+=0.005){const [x,y]=P(t); d.px(x,y,t<0.2?'#FFF6E0':'#F8F0D0')}
    // shine
    for(let t=0.35;t<0.8;t+=0.02){const [x,y]=P(t); d.px(x-1,y-2,'#9AF0B0')}
    d.outline('#2A1E2A');
    sparkle(d,25,15,'#F8E070'); d.px(6,10,'#F8E070'); d.px(28,24,'#F8E070');
  },
  // the first golden eggshell: hatched golden egg (bottom half with zigzag rim), cap tilted above, glowing
  'chick:s2': d=>{
    const T=['#B07414','#D89A1E','#F2BC2C','#FAD448','#FFEC90'];
    ball(d,16,21,10,9,T);
    const rim=x=>{const m=(x+1)%6; return 14+(m<3?m:6-m)};
    for(let x=0;x<32;x++) for(let y=0;y<rim(x);y++) d.clear(x,y);
    // inner shadow: dark inside back wall
    for(let x=7;x<=25;x++){const r=rim(x); if(d.get(x,r)){d.px(x,r,'#FFF4D0'); if(x>8&&x<24) d.px(x,r+1,'#8A5A10'); if(x>10&&x<22&&r<16) d.px(x,r+2,'#A06C14')}}
    d.line(21,23,23,26,'#A06410'); d.line(23,26,22,28,'#A06410');
    d.vline(9,19,24,'#FFFFFF'); d.px(10,18,'#FFFFFF');
    // cap: dome with zigzag bottom, tilted to the right
    ball(d,17,8,8,6,T);
    for(let x=0;x<32;x++){const m=x%6; const cy=9+(m<3?m:6-m)-Math.round((x-17)/4); for(let y=Math.max(0,cy);y<15;y++) d.clear(x,y)}
    for(let x=0;x<32;x++){for(let y=13;y>=0;y--) if(d.get(x,y)){d.px(x,y,'#FFF4D0'); break}}
    d.px(13,4,'#FFFFFF'); d.px(14,3,'#FFFFFF');
    d.outline('#5A3A10');
    for(const [a,b,c,e] of [[2,14,5,14],[27,20,30,20],[3,22,5,21],[26,26,29,28],[4,4,6,6]]) d.line(a,b,c,e,'#FFE868');
    sparkle(d,27,6,'#FFE868'); d.px(3,30,'#FFF8C0'); d.px(29,30,'#FFE868');
  },

  // neighborhood slide: big curvy yellow slide on the right with roll lines, swings, houses behind
  'panda:c0': d=>{
    d.grad(0,0,64,22,['#86CCF4','#9AD4F4','#B0DEF6','#C8E8F6']);
    cloud(d,6,3,11,'#FFFFFF'); cloud(d,30,6,8,'#FFFFFF');
    // houses behind
    d.rect(0,14,12,9,'#F4D6B8'); d.poly([[-1,14],[6,8],[13,14]],'#D86A5A'); d.rect(3,17,3,3,'#A8D4F0');
    d.rect(13,16,10,7,'#C8E0F0'); d.poly([[12,16],[18,11],[24,16]],'#6A8AC8'); d.rect(16,18,3,3,'#FFF6D8');
    d.circ(30,17,5,'#5EAA4A'); d.circ(27,19,3,'#4E9A3E'); d.vline(30,21,23,'#7A5434');
    // ground
    d.rect(0,23,64,17,'#7CC45A'); d.dither(0,23,64,1,'#7CC45A','#96D46E');
    d.ell(42,33,24,6,'#E8D098'); d.ell(42,33,22,5,'#F2DCA8');
    // swing set far right
    d.line(55,12,52,30,'#C84A4A'); d.line(55,12,58,30,'#C84A4A'); d.hline(44,63,12,'#C84A4A'); d.line(63,12,63,30,'#C84A4A');
    d.vline(60,13,25,'#8A8A9A'); d.vline(63,13,25,'#8A8A9A'); d.hline(59,63,26,'#3A6AC8');
    // slide: ladder, platform, curvy chute
    d.vline(46,8,31,'#3A6AC8'); d.vline(50,8,31,'#3A6AC8'); for(let y=12;y<31;y+=3) d.hline(46,50,y,'#5A8AE0');
    d.rect(36,7,16,2,'#E04848'); d.rect(36,9,16,1,'#B03030'); d.poly([[36,7],[44,1],[52,7]],'#F06A6A'); d.line(44,1,44,7,'#FFFFFF');
    for(let x=24;x<=40;x++){const t=(x-24)/16; const y=Math.round(31-Math.pow(t,1.6)*22);
      d.vline(x,y,y+3,'#F8C830'); d.px(x,y,'#FFE888'); d.px(x,y+3,'#C89818'); d.px(x,y-1,'#E0A820');}
    d.vline(37,10,31,'#3A6AC8'); d.vline(30,26,31,'#3A6AC8');
    // roll marks (whoosh lines)
    d.line(33,18,30,23,'#FFFFFF'); d.line(36,15,33,20,'#FFFFFF'); d.px(27,27,'#FFFFFF'); d.px(25,28,'#FFFFFF');
    // dropped bamboo leaf + ball
    d.stamp(28,35,['gg..','.ggg'],{g:'#3A9A3A'}); d.circ(57,35,2,'#F86A8A'); d.px(56,34,'#FFFFFF');
    tuft(d,2,38,'#5EAA4A'); tuft(d,60,38,'#5EAA4A');
  },
  // bamboo forest valley: layered green bamboo, a stream winding down the middle, bamboo snack pile
  'panda:c1': d=>{
    d.grad(0,0,64,40,['#D8F0C8','#C4E8B0','#B0DC98']);
    // far bamboo (pale)
    for(let x=1;x<64;x+=4) bamboo(d,x,0,24,1,'#A0D488','#A0D488','#88C070',4);
    // valley slopes
    d.poly([[0,18],[22,24],[30,40],[0,40]],'#5EA04A'); d.poly([[64,14],[40,22],[34,40],[64,40]],'#4E9040');
    // stream
    d.poly([[30,20],[36,20],[44,40],[28,40]],'#6AC0E0'); d.poly([[31,20],[34,20],[38,40],[32,40]],'#8AD4F0');
    for(const [x,y] of [[33,24],[34,29],[36,33],[33,37],[38,36]]) d.hline(x,x+1,y,'#E0F6FF');
    d.circ(42,38,2,'#8A8A80'); d.circ(29,35,1.5,'#9A9A90'); d.px(41,37,'#B0B0A8');
    // mist band
    d.dither(0,19,64,2,'#C4E8B0','#E8F6E0');
    // mid bamboo
    for(const x of [24,27,44,49]) bamboo(d,x,0,22,2,'#6EB850','#4E9A3A','#3A7A2A',5);
    // near bamboo right (dark, big)
    for(const [x,w] of [[52,3],[57,3],[61,3]]) bamboo(d,x,0,39,w,'#4E9A34','#2E6A20','#1E4A18',6);
    for(const [x,y,s] of [[55,6,1],[56,14,-1],[60,10,1],[51,20,-1],[47,4,1],[26,8,-1],[29,12,1],[46,14,-1],[24,3,1]]) leaf(d,x,y,s,'#3A8A2A','#5AAA40');
    // floor of the left (pet ground)
    d.rect(0,30,28,10,'#6AAE50'); d.dither(0,29,26,1,'#6AAE50','#5EA04A');
    // munched bamboo pile + leaves
    d.line(44,36,52,34,'#8ACB5A'); d.line(45,37,53,35,'#6EB840'); d.line(46,38,51,36,'#8ACB5A'); d.px(53,34,'#3A7A2A');
    d.stamp(48,31,['gg.','.gg','..g'],{g:'#3A8A2A'});
    tuft(d,3,33,'#4E9040'); tuft(d,23,37,'#4E9040');
    // z z z (sleepy)
    d.stamp(38,6,['zzz','.z.','zzz'],{z:'#FFFFFF'}); d.stamp(42,2,['zz','zz'],{z:'#FFFFFF'});
  },
  // bamboo peak above the clouds: sunset sea of clouds, rocky peaks with bamboo, dream bubble
  'panda:c2': d=>{
    d.grad(0,0,64,26,['#F4A070','#F6B47A','#F8C888','#FADA9C','#FCE8B8']);
    d.circ(30,20,6,'#FFF0C0'); d.circ(30,20,4,'#FFFAE8');
    // distant peaks
    d.poly([[22,26],[30,14],[38,26]],'#B08AA0'); d.poly([[2,26],[8,18],[16,26]],'#C09AAC');
    // cloud sea
    d.rect(0,24,64,16,'#FFE8E0');
    for(let x=-2;x<66;x+=7){d.circ(x,24+(x%3),4,'#FFF4EE'); d.circ(x+3,28,3,'#FFDCD0')}
    for(let x=0;x<64;x+=9) d.hline(x,x+5,33,'#F8C8C0');
    // main peak right with bamboo
    d.poly([[38,40],[44,12],[50,9],[56,12],[64,22],[64,40]],'#7A6878'); d.poly([[50,9],[56,12],[64,22],[64,40],[54,40]],'#5E4E62');
    d.line(44,12,50,9,'#9A889A'); d.hline(44,56,11,'#6EA858'); d.hline(45,55,10,'#88C060');
    for(const [x,h] of [[45,0],[48,3],[51,1],[54,4]]) bamboo(d,x,h,10,2,'#8ED45E','#5A9A3A','#3E7A2A',3);
    for(const [x,y,s] of [[47,2,1],[50,6,-1],[53,3,1],[56,7,1],[44,4,-1]]) leaf(d,x,y,s,'#4E9A34','#7ACC50');
    // pet's cliff (lower-left): flat mossy ledge
    d.rect(0,30,26,10,'#7A6878'); d.rect(0,29,26,2,'#88C060'); d.hline(0,25,31,'#6EA858'); d.poly([[25,29],[29,33],[28,40],[25,40]],'#5E4E62');
    d.dither(0,34,26,6,'#7A6878','#6E5E70');
    // dream bubble with bamboo
    d.circ(30,6,4,'#FFFFFF'); d.circ(26,4,3,'#FFFFFF'); d.circ(34,4,3,'#FFFFFF'); d.circ(24,11,1,'#FFFFFF'); d.px(22,14,'#FFFFFF');
    d.vline(30,2,9,'#6EB850'); d.px(30,5,'#3E7A2A'); d.px(31,3,'#4E9A34'); d.px(32,3,'#4E9A34'); d.px(29,7,'#4E9A34'); d.px(28,7,'#4E9A34');
    // birds
    d.stamp(8,6,['k.k','.k.'],{k:'#7A5A6A'}); d.stamp(14,10,['k.k','.k.'],{k:'#7A5A6A'});
  },
  // potted bamboo: terracotta pot, three bamboo stalks with leaves; one leaf has a tiny nibble
  'panda:s0': d=>{
    const B='#7CC850', B2='#4E9A34', ND='#3A7A28', L='#5AB040', L2='#8ADA60';
    bamboo(d,10,6,24,3,B,B2,ND,5); bamboo(d,15,2,24,3,'#8ED45E',B2,ND,6); bamboo(d,20,10,24,3,B,B2,ND,4);
    d.px(11,6,'#B8EC8A'); d.px(16,2,'#B8EC8A'); d.px(21,10,'#B8EC8A');
    for(const [x,y,s] of [[13,9,1],[9,8,-1],[18,5,1],[14,4,-1],[23,13,1],[19,12,-1],[18,16,1],[9,15,-1],[13,13,1]]) {
      d.poly(s>0?[[x,y],[x+7,y-2],[x+5,y+1]]:[[x,y],[x-7,y-2],[x-5,y+1]],L); d.line(x,y,x+5*s,y-1,L2);
    }
    // nibble on top-right leaf
    d.clear(24,10); d.clear(25,11); d.clear(25,10);
    // pot
    d.poly([[6,23],[26,23],[23,31],[9,31]],'#D8744A'); d.rect(5,21,22,4,'#E88A5A'); d.hline(5,26,21,'#F4A878'); d.hline(5,26,24,'#B85A38');
    d.poly([[19,25],[25,25],[22,31],[18,31]],'#B85A38'); d.vline(8,25,29,'#F09A6A');
    // soil
    d.hline(7,24,21,'#5A3A28');
    // little heart sticker
    d.stamp(13,26,['r.r','rrr','.r.'],{r:'#F4E6D0'});
    d.outline('#2E2A26');
  },
  // sichuan steamed bun: fat pleated baozi on a bamboo steamer, steam curling up
  'panda:s1': d=>{
    // steamer
    d.ell(16,26,14,4,'#B88848'); d.rect(2,24,29,4,'#C89858'); d.ell(16,24,14,3,'#E0B870');
    d.hline(2,30,26,'#9A6A30'); for(let x=4;x<30;x+=4) d.vline(x,25,28,'#A87838');
    d.ell(16,23,12,2,'#F0D8A0');
    // bun
    ball(d,16,17,11,8,['#D8CCBC','#ECE2D4','#F8F2E8','#FFFFFF']);
    for(let y=22;y<26;y++) for(let x=0;x<32;x++) if(d.get(x,y)==='#D8CCBC'&&y>23) d.px(x,y,'#F0D8A0');
    // pleats converging to a knot
    for(const [x,y] of [[8,15],[11,12],[15,11],[20,12],[23,14],[9,19],[24,18]]) d.line(x,y,16,9,'#D4C8B6');
    d.circ(16,9,2,'#ECE2D4'); d.px(15,8,'#FFFFFF'); d.px(17,10,'#D4C8B6');
    // red dot stamp of the shop
    d.circ(20,17,1,'#E0484A'); d.px(20,16,'#F07070');
    d.outline('#4A3628');
    // steam
    for(const [x,y] of [[8,2],[15,0],[22,2]]){d.px(x,y+5,'#E8F0F8'); d.px(x+1,y+4,'#E8F0F8'); d.px(x+1,y+3,'#E8F0F8'); d.px(x,y+2,'#E8F0F8'); d.px(x,y+1,'#E8F0F8'); d.px(x+1,y,'#E8F0F8')}
  },
  // original black & white certificate: checkered B/W border, panda emblem, red seal with ribbons
  'panda:s2': d=>{
    // checkered frame
    for(let y=3;y<27;y++)for(let x=2;x<30;x++) d.px(x,y,((x>>1)+(y>>1))%2?'#2A2A2A':'#FFFFFF');
    d.rect(4,5,24,20,'#FFF8E6'); d.frame(4,5,24,20,'#D8C8A0');
    // title bar
    d.rect(8,7,16,2,'#2A2A2A'); d.px(7,8,'#C8A040'); d.px(24,8,'#C8A040');
    // panda emblem
    d.circ(11,15,4,'#FFFFFF'); d.circ(8,11,1.5,'#2A2A2A'); d.circ(14,11,1.5,'#2A2A2A'); d.circ(11,15,4,'#FFFFFF');
    d.ring(11,15,4,'#C8C0B0');
    d.stamp(8,13,['kk..kk','kw..wk','......','..kk..','.k..k.'],{k:'#2A2A2A',w:'#FFFFFF'});
    // text lines
    for(const [y,w] of [[12,9],[14,8],[16,9],[18,6]]) d.hline(17,17+w-1,y,'#A8A090');
    // signature
    d.line(8,22,11,21,'#2A2A2A'); d.line(11,21,13,22,'#2A2A2A'); d.line(13,22,15,21,'#2A2A2A');
    // red seal with ribbons
    d.poly([[20,24],[18,31],[20,30],[22,31]],'#C83038'); d.poly([[24,24],[23,31],[25,29],[27,31]],'#A82028');
    d.circ(23,22,4,'#E04048'); d.ring(23,22,3,'#F87078'); d.circ(23,22,2,'#C83038'); d.px(22,21,'#FFB0B0');
    d.outline('#2A2A2A');
    sparkle(d,28,3,'#FFE868');
  },






  // rock friend next door: a round mossy stone sitting quietly, "..." bubble
  'rock:s0': d=>{
    ball(d,15,20,12,8,['#6A6058','#857A70','#A09488','#B8AEA2']);
    d.ell(15,28,11,1,'#5A5048');
    for(const [x,y] of [[9,22],[18,24],[22,18],[12,17],[25,22],[7,19],[16,21]]) d.px(x,y,'#6A6058');
    for(const [x,y] of [[11,15],[19,16],[14,19]]) d.px(x,y,'#D0C6BA');
    // moss cap
    d.ell(18,13,6,2,'#5E9A40'); d.ell(17,12,4,1,'#7AB850'); d.px(14,12,'#9AD068'); d.px(21,13,'#4A8030');
    d.px(16,10,'#6AAA48'); d.px(16,9,'#6AAA48'); d.px(17,8,'#F4E070');
    // crack
    d.line(24,20,26,23,'#5A5048');
    d.outline('#2E2824');
    // ... bubble
    d.ell(7,5,6,3,'#FFFFFF'); d.ring(7,5,0,'#FFFFFF'); d.px(9,9,'#FFFFFF'); d.px(10,10,'#FFFFFF');
    d.px(4,5,'#5A5A6A'); d.px(7,5,'#5A5A6A'); d.px(10,5,'#5A5A6A');
    d.hline(2,12,1,'#C8C8D4'); d.hline(2,12,9,'#C8C8D4'); d.vline(0,3,7,'#C8C8D4'); d.vline(14,3,7,'#C8C8D4'); d.px(1,2,'#C8C8D4'); d.px(13,2,'#C8C8D4'); d.px(1,8,'#C8C8D4'); d.px(13,8,'#C8C8D4');
  },
  // wave-smoothed pebble: glossy blue-grey oval with a white quartz band, droplets and a tiny shell
  'rock:s1': d=>{
    ball(d,16,17,13,9,['#4A5868','#62788A','#7E94A6','#9CB2C2','#C0D2DE']);
    // quartz band (diagonal)
    for(let y=0;y<32;y++)for(let x=0;x<32;x++){const t=x*0.35+y; if(d.get(x,y)&&t>21&&t<24) d.px(x,y,t<22.4?'#D8E4EC':'#F4F8FA')}
    d.ell(11,12,3,1,'#E8F4FA'); d.px(8,13,'#FFFFFF'); d.px(9,12,'#FFFFFF');
    for(const [x,y] of [[20,21],[24,15],[14,23],[26,19]]) d.px(x,y,'#56687A');
    d.outline('#2A3440');
    // wet droplets
    d.stamp(25,4,['.b.','bwb','.b.'],{b:'#8ACCF0',w:'#FFFFFF'}); d.px(29,9,'#8ACCF0');
    // tiny shell
    d.stamp(2,25,['..pp..','.pPpP.','pPpPpp','.pppp.','..oo..'],{p:'#F8C8C0',P:'#E89890',o:'#C87870'});
    d.outline('#2A3440');
  },
  // grandpa meteorite chip: dark jagged iron chunk with glowing seams, crystals and sparkles
  'rock:s2': d=>{
    d.poly([[4,18],[8,9],[15,5],[23,7],[28,13],[27,22],[21,28],[10,28],[5,24]],'#3A3644');
    d.poly([[8,9],[15,5],[23,7],[18,13],[11,14]],'#5A5468'); d.poly([[23,7],[28,13],[27,22],[20,17],[18,13]],'#46404F');
    d.poly([[4,18],[11,14],[18,13],[20,17],[14,22],[5,24]],'#4C4658');
    d.line(8,9,15,5,'#7A7488'); d.line(15,5,23,7,'#8A8498'); d.px(12,8,'#A8A2B8');
    // thumbprint dimples
    for(const [x,y,r] of [[10,20,1.5],[22,22,1.5],[16,9,1]]) {d.circ(x,y,r,'#2A2632'); d.px(x-1,y-1,'#6A6478')}
    // glowing seams
    d.line(11,14,14,18,'#F08030'); d.line(14,18,13,22,'#F8B040'); d.line(20,17,24,19,'#F08030'); d.px(14,18,'#FFE080'); d.px(24,19,'#FFE080');
    // crystals
    d.stamp(17,23,['.c.','cCc','.c.'],{c:'#A8E0F8',C:'#FFFFFF'}); d.px(7,16,'#C8F0FF'); d.px(25,12,'#C8F0FF');
    d.outline('#1A1620');
    // space trail
    d.line(28,1,31,0,'#F8D070'); d.line(26,2,30,1,'#F8A050');
    sparkle(d,4,5,'#FFE868'); sparkle(d,28,27,'#C8E8FF'); d.px(30,6,'#FFE868'); d.px(2,29,'#FFE868');
  },
  // next to the flowerpot: sunny windowsill corner indoors, big potted plant right, ruler marking "3cm" trail
  'rock:c0': d=>{
    // wallpaper
    d.rect(0,0,64,27,'#F4E8D4'); for(let x=2;x<64;x+=6) for(let y=2;y<27;y+=6) d.px(x+((y/6|0)%2)*3,y,'#E8D4BC');
    // window
    d.rect(26,2,26,18,'#E8D6BC'); d.rect(28,4,22,14,'#A8DCF6'); d.rect(28,13,22,5,'#C4E8F8');
    d.vline(38,4,17,'#E8D6BC'); d.vline(39,4,17,'#D4C0A4'); d.hline(28,49,10,'#E8D6BC');
    d.ell(33,15,5,2,'#9AD078'); d.ell(45,16,6,2,'#8AC468'); cloud(d,30,5,6,'#FFFFFF'); cloud(d,42,6,5,'#FFFFFF');
    // curtain
    d.rect(22,1,5,22,'#F0A0A8'); for(let y=1;y<23;y+=2) d.px(23,y,'#E08890'); d.rect(51,1,5,22,'#F0A0A8'); for(let y=1;y<23;y+=2) d.px(54,y,'#E08890');
    d.hline(20,58,1,'#B08060');
    // sunbeam
    for(let i=0;i<10;i++) d.line(30+i,20,22+i*1.5,39,i%3?'#F8E6C0':'#FCEED0');
    // floor (wood)
    d.rect(0,27,64,13,'#D8A870'); d.hline(0,63,27,'#B88850'); for(let y=31;y<40;y+=4) d.hline(0,63,y,'#C8985E');
    for(let i=0;i<10;i++) d.line(30+i,28,24+i*1.5,39,i%3?'#E8BC84':'#ECC690');
    d.rect(0,26,64,1,'#FFFFFF');
    // big flowerpot
    d.poly([[44,24],[60,24],[58,37],[46,37]],'#D06A40'); d.rect(43,22,18,3,'#E07E50'); d.hline(43,60,22,'#F09A6A'); d.poly([[54,25],[59,25],[57,37],[53,37]],'#B05830'); d.vline(46,25,34,'#E8885A');
    d.ell(52,38,8,1,'#B88850');
    // plant: monstera-ish leaves
    for(const [x,y,rx,ry,c] of [[47,12,5,4,'#4E9A3E'],[57,10,5,4,'#3E8A32'],[52,5,4,4,'#5AAA48'],[44,18,4,3,'#5AAA48'],[60,17,4,3,'#4E9A3E']]){d.ell(x,y,rx,ry,c); d.line(x-rx+1,y,x+rx-1,y,'#86CC6A')}
    for(const [a,b] of [[52,21],[47,15],[57,13],[52,9],[44,20],[60,19]]) d.line(52,22,a,b,'#3A7A2A');
    d.px(48,11,'#F4F0E4'); d.px(56,9,'#F4F0E4');
    // tiny ruler showing the 3cm journey
    d.rect(26,35,16,3,'#F8E070'); d.hline(26,41,37,'#D8B840'); for(let x=26;x<42;x+=5) d.vline(x,35,36,'#8A6A20'); for(let x=28;x<42;x+=5) d.px(x,35,'#8A6A20');
    // dust trail dots
    for(const x of [23,26,29,32]) d.px(x,33,'#C08A58');
    d.stamp(35,30,['333','..3','.33','..3','333'],{3:'#8A6A20'});
  },
  // giant desert boulder: dunes, huge banded red boulder center-right, cactus, heat sun
  'rock:c1': d=>{
    d.grad(0,0,64,22,['#F8C878','#FAD490','#FCE0A8','#FDEAC0']);
    d.circ(14,7,5,'#FFF4C8'); d.circ(14,7,4,'#FFFFFF');
    // far dunes
    d.ell(10,23,20,4,'#E8B878'); d.ell(52,22,18,4,'#E8B878');
    d.rect(0,23,64,17,'#F0C890');
    for(let y=26;y<40;y+=4) for(let x=0;x<64;x++) if(Math.sin(x*0.25+y)>0.6) d.px(x,y,'#E0B070');
    // big boulder (grey cousin)
    d.poly([[26,30],[28,16],[34,9],[46,6],[56,10],[62,20],[63,31]],'#8A8690');
    d.poly([[46,6],[56,10],[62,20],[63,31],[50,31],[52,18]],'#6E6A76');
    d.poly([[28,16],[34,9],[46,6],[42,12],[32,18]],'#A8A4AE');
    for(const y of [17,22,26]) d.hline(30,60,y,'#7A7682');
    d.line(40,12,44,22,'#5E5A66'); d.line(44,22,42,28,'#5E5A66');
    d.ell(45,32,19,2,'#D8A870');
    // moss & tiny flower on top (old-timer)
    d.hline(40,48,6,'#7AA858'); d.hline(42,46,5,'#8ABA60'); d.px(44,4,'#F8A0B0');
    // cactus (just right of the pet spot)
    {const X=6; d.rect(18+X,20,3,13,'#4E9A4A'); d.vline(18+X,20,32,'#6AB860'); d.rect(15+X,24,2,4,'#4E9A4A'); d.rect(15+X,27,3,2,'#4E9A4A'); d.rect(22+X,22,2,4,'#4E9A4A'); d.rect(21+X,25,3,2,'#4E9A4A'); d.px(19+X,19,'#F87090'); d.ell(19+X,33,4,1,'#D8A870')}
    // pebbles & shadow
    for(const [x,y] of [[30,36],[56,36],[38,38]]) {d.hline(x,x+1,y,'#9A96A0'); d.px(x,y-1,'#B8B4BE')}
    // heat shimmer
    for(const x of [30,38,50]) {d.px(x,3,'#FDEAC0'); d.px(x+1,2,'#FDEAC0')}
  },
  // crater on the moon: black space, earth rising, grey regolith, big crater center-right, footprints-like roll trail
  'rock:c2': d=>{
    d.rect(0,0,64,40,'#0E0E22'); d.dither(0,14,64,6,'#0E0E22','#16163A');
    stars(d,26,0,63,0,18,['#FFFFFF','#C8D0FF','#FFF0C0']); twinkle(d,40,4,'#C8D0FF','#FFFFFF');
    // earth
    d.circ(12,7,5,'#3A7AD8'); d.ell(10,6,2,1,'#5AB860'); d.ell(14,9,2,1,'#5AB860'); d.px(9,4,'#FFFFFF'); d.px(13,3,'#FFFFFF'); for(let y=2;y<13;y++) for(let x=13;x<18;x++) if(d.get(x,y)!=='#0E0E22'&&x-12+((y-7)**2)/8>2.5) d.px(x,y,'#1E3E7A');
    // horizon
    d.poly([[0,20],[18,18],[36,19],[52,17],[64,19],[64,40],[0,40]],'#9A9AA8');
    d.rect(0,26,64,14,'#8A8A98'); d.dither(0,25,64,1,'#9A9AA8','#8A8A98');
    // big crater
    d.ell(44,29,17,6,'#B8B8C4'); d.ell(44,30,15,5,'#5E5E6E'); d.ell(45,31,13,4,'#6E6E7E'); d.ell(47,32,9,2,'#7A7A8A');
    d.hline(30,58,24,'#D0D0DA'); d.px(29,25,'#D0D0DA');
    // small craters
    for(const [x,y,r] of [[22,22,2],[8,35,2],[58,21,1.5],[28,37,1.5],[60,37,2]]){d.ell(x,y,r+1,r*0.6,'#6E6E7E'); d.hline(x-r,x+r,Math.round(y-r*0.6)-1,'#B0B0BC')}
    // a little home-like pebble inside crater
    d.ell(46,31,2,1,'#A8A0B0'); d.px(45,30,'#C8C0D0');
    stars(d,6,0,63,19,22,['#C0C0CC']);
  },

  // mini lady liberty: green statue with torch and crown on a stone pedestal
  'mark:s1': d=>{
    const G='#5EB8A0', G2='#3E9480', G3='#8AD6C0', S='#C8BCA8', S2='#A89C88';
    // pedestal
    d.rect(9,24,14,7,S); d.rect(8,23,16,2,'#DCD2C0'); d.rect(9,29,14,2,S2); d.vline(20,25,30,S2); d.rect(13,25,6,3,'#B0A48E');
    // robe
    d.poly([[11,23],[13,13],[19,13],[21,23]],G); d.poly([[16,13],[19,13],[21,23],[17,23]],G2);
    for(const x of [13,15,18]) d.line(x,16,x-1,22,G2); d.line(12,18,20,15,G3);
    // tablet arm
    d.rect(10,14,3,5,'#6A8A7A'); d.rect(10,14,3,1,G3);
    // raised arm + torch
    d.rect(19,6,2,8,G); d.vline(20,6,13,G2); d.rect(18,4,4,2,'#C8A040'); d.rect(19,2,2,2,'#F8B030'); d.px(19,1,'#FFE070'); d.px(20,0,'#FFF4B0'); d.px(18,2,'#F87830');
    // head + crown
    d.rect(13,9,4,4,G); d.rect(13,11,4,2,G2); d.px(14,10,G3);
    for(const [x,y] of [[12,7],[13,6],[15,5],[17,6],[18,7]]) d.line(15,8,x,y,G3);
    d.hline(12,17,8,G2);
    d.outline('#1E3A34');
    sparkle(d,5,5,'#FFE868'); d.px(27,9,'#FFE868'); d.px(4,17,'#FFF4B0');
  },

  // hospital coffee cart: hospital in back with red cross, coffee truck on right, three nurses waving from windows
  'mark:c0': d=>{
    d.grad(0,0,64,14,['#8ED0F4','#A4DAF6','#BCE4F8']);
    cloud(d,2,2,10,'#FFFFFF');
    // hospital
    d.rect(14,3,50,22,'#EEF2F6'); d.rect(14,3,50,2,'#C8D2DE'); d.rect(54,3,10,22,'#D8E0EA');
    for(let y=7;y<20;y+=5) for(let x=17;x<52;x+=6) {d.rect(x,y,4,3,'#8AB8DC'); d.px(x,y,'#C8E4F8')}
    d.rect(30,5,6,6,'#FFFFFF'); d.rect(32,6,2,4,'#E04048'); d.rect(31,7,4,2,'#E04048');
    // three nurses waving (tiny caps + hands)
    for(const [x,y] of [[23,12],[41,12],[47,17]]) {d.rect(x,y,4,3,'#F4D4B8'); d.hline(x,x+3,y,'#9AD0C0'); d.px(x+3,y-1,'#F4D4B8'); d.px(x+4,y-2,'#F4D4B8')}
    d.rect(24,19,6,6,'#7AA8CC'); d.vline(27,19,24,'#5A88AC');
    // ground
    d.rect(0,25,64,15,'#C8CCD4'); d.rect(0,24,64,1,'#9AA0AC'); for(let x=0;x<64;x+=8) d.vline(x,25,39,'#B8BCC6');
    d.rect(0,22,14,3,'#6AB850'); d.circ(5,19,4,'#5AAA48'); d.circ(10,20,3,'#4E9A3E'); d.vline(7,22,24,'#7A5434');
    // coffee truck
    d.rect(34,17,28,15,'#F4E0C0'); d.rect(34,17,28,2,'#8A5A3A'); d.rect(56,19,6,13,'#E8CCA4');
    d.rect(37,20,16,7,'#5A3A2A'); d.rect(38,21,14,5,'#3A2420');
    for(let x=35;x<56;x+=4) {d.rect(x,15,2,3,'#9A2A2A'); d.rect(x+2,15,2,3,'#FFFFFF')} d.hline(35,55,18,'#7A1A1A');
    d.rect(36,26,18,2,'#B07848');
    d.stamp(39,23,['c.c.c','ccccc'],{c:'#FFFFFF'}); d.px(40,22,'#E8E8E8'); d.px(42,22,'#E8E8E8');
    d.stamp(57,21,['.ss.','s..s','.ss.','.cc.','cccc'],{s:'#F4E0C0',c:'#8A5A3A'});
    d.circ(40,32,2,'#2A2A30'); d.circ(55,32,2,'#2A2A30'); d.px(40,32,'#9A9AA8'); d.px(55,32,'#9A9AA8');
    // coffee cup sign on top
    d.stamp(44,9,['.s.s.','.....','ccccc','cwwwc','cwwwcc','cwwwc.','.ccc.'],{s:'#FFFFFF',c:'#8A5A3A',w:'#F4E0C0'});
    // steam & dropped receipt
    d.px(32,36,'#FFFFFF'); d.px(33,36,'#F0F0F0'); d.px(28,37,'#8A5A3A');
  },
  // manhattan at night: deep blue skyline with empire state, lit windows, neon cocktail bar sign at street level
  'mark:c1': d=>{
    d.grad(0,0,64,24,['#141832','#1C2244','#283058','#3A3A6A','#5A4A7A']);
    stars(d,10,0,63,0,10,['#FFFFFF','#C8D0FF']); d.circ(8,5,2,'#FFF4D0'); d.px(9,4,'#141832');
    // far skyline
    for(const [x,w,h] of [[0,5,14],[5,4,18],[9,6,12],[15,4,20],[50,5,16],[55,4,22],[59,5,15]]) d.rect(x,24-h,w,h+4,'#2A2E50');
    // empire state
    d.rect(32,10,10,20,'#3A3E68'); d.rect(34,6,6,4,'#3A3E68'); d.rect(35,3,4,3,'#3A3E68'); d.vline(37,0,2,'#C8C8E8'); d.rect(36,2,2,1,'#F8D060');
    d.rect(34,6,6,1,'#F8D060'); d.rect(32,10,10,1,'#F8D060');
    // chrysler-ish
    d.rect(44,12,7,18,'#34385E'); d.poly([[44,12],[47.5,4],[51,12]],'#9AA0C8'); d.vline(47,1,4,'#C8C8E8');
    for(let y=6;y<12;y+=2) d.hline(46,49,y,'#3A3E68');
    d.rect(22,14,8,16,'#30345A'); d.rect(52,16,8,14,'#30345A');
    // windows
    for(const [x0,x1,y0] of [[23,29,16],[33,41,12],[45,50,14],[53,59,18]]) for(let y=y0;y<29;y+=2) for(let x=x0;x<x1;x+=2) if(((x*7+y*3)%5)<2) d.px(x,y,'#F8E080');
    // street level
    d.rect(0,28,64,12,'#2A2A3A'); d.rect(0,28,64,2,'#4A4A5E');
    d.rect(0,34,64,6,'#24242E'); for(let x=2;x<64;x+=8) d.hline(x,x+3,37,'#E8D070');
    // bar front
    d.rect(40,22,22,10,'#4A2A3A'); d.rect(42,25,8,5,'#F8C878'); d.rect(52,24,4,8,'#2A1A20'); d.px(55,28,'#F8D060');
    // neon cocktail sign
    d.stamp(57,13,['ppppp','.ppp.','..p..','..p..','.ppp.'],{p:'#F860C0'}); d.px(60,13,'#60F0F0');
    d.hline(41,61,22,'#F860C0'); d.hline(41,61,23,'#B83080');
    // puddle reflection
    d.hline(44,52,33,'#5A5A7A'); d.hline(46,50,32,'#F8C878');
    // street lamp
    d.vline(29,20,33,'#5A5A70'); d.rect(28,19,3,2,'#FFF4B0'); d.dither(26,21,7,3,'#3A3A6A','#5A5A7E');
  },
  // hollywood red carpet: carpet runs from the pet spot to a glittering theater, spotlights, ropes, camera flashes
  'mark:c2': d=>{
    d.grad(0,0,64,22,['#100C24','#1C1438','#2C1C4A','#3E2858']);
    // spotlights
    d.poly([[40,22],[24,0],[30,0]],'#4A3A6A'); d.poly([[56,22],[62,0],[64,0],[64,6]],'#4A3A6A'); d.poly([[48,22],[44,0],[49,0]],'#5A4A78');
    stars(d,10,0,40,0,12,['#FFFFFF','#E0D0FF']);
    // hills with sign-ish letters (tiny)
    d.ell(14,20,16,5,'#2A2040'); d.stamp(6,15,['h.h.ooo.l..','hhh.o.o.l..','h.h.ooo.lll'],{h:'#F4F0E8',o:'#F4F0E8',l:'#F4F0E8'});
    // theater
    d.rect(34,8,30,22,'#7A2A3A'); d.rect(34,8,30,2,'#F8D060'); d.poly([[34,8],[49,2],[64,8]],'#9A3A4A'); d.px(49,3,'#F8D060');
    d.rect(36,12,26,5,'#F8E8B0'); for(let x=37;x<62;x+=2){d.px(x,12,'#F8C030'); d.px(x+1,16,'#F8C030')} d.hline(39,58,14,'#B83040');
    d.rect(42,19,14,11,'#2A1418'); d.rect(43,20,12,10,'#F8C868'); d.vline(49,20,29,'#B88838');
    for(const x of [36,59]) {d.rect(x,19,3,11,'#5A1A28'); d.px(x+1,20,'#F8D060')}
    // ground
    d.rect(0,30,64,10,'#2A2434'); d.rect(0,29,64,1,'#4A4058');
    // walk of fame star
    d.stamp(26,35,['..y..','yyyyy','.yyy.','y...y'],{y:'#F8C8D0'});
    // red carpet in perspective
    d.poly([[0,40],[24,40],[56,30],[42,30]],'#C8202C'); d.line(0,39,42,30,'#E84850'); d.line(24,40,56,30,'#8A1018');
    for(let i=0;i<4;i++) d.line(6+i*7,38-i*2,10+i*7,38-i*2,'#D83038');
    // ropes + gold posts
    for(const [x,y] of [[30,33],[38,31],[46,29]]) {d.vline(x,y-4,y,'#F8D060'); d.px(x,y-5,'#FFF4B0')}
    d.line(30,30,38,28,'#B01828'); d.line(38,28,46,26,'#B01828');
    // camera flashes
    sparkle(d,22,26,'#FFFFFF','#FFFFFF'); sparkle(d,60,33,'#FFF4B0'); twinkle(d,30,22,'#FFFFFF');
    d.rect(58,34,4,3,'#3A3A44'); d.px(59,35,'#9AD0F0');
  },
  // scrub-check mirror: oval silver hand mirror, reflection shows navy scrubs and a confident sparkle
  'mark:s0': d=>{
    // handle
    d.rect(14,21,4,10,'#28386A'); d.vline(14,21,30,'#4A5C98'); d.vline(17,22,30,'#1C284E'); d.rect(13,30,6,2,'#C8CCD8');
    d.rect(13,20,6,2,'#C8CCD8'); d.hline(13,18,20,'#EEF0F6'); d.px(15,25,'#9A2A2A'); d.px(16,25,'#9A2A2A'); d.px(15,26,'#9A2A2A'); d.px(16,26,'#9A2A2A');
    // frame
    d.ell(16,11,10,10,'#A8ACB8'); d.ell(16,11,9,9,'#D8DCE4'); d.ell(15,10,8,8,'#EEF0F6'); d.ell(16,11,8,8,'#D8DCE4');
    // glass
    d.ell(16,11,7,7.5,'#B8DCEC');
    for(let y=0;y<32;y++)for(let x=0;x<32;x++) if(d.get(x,y)==='#B8DCEC'&&y>14) d.px(x,y,'#9ACCE0');
    // reflection: navy scrub V-neck, neck, chin
    d.poly([[9,19],[11,14],[16,17],[21,14],[23,19]],'#28386A'); d.poly([[13,14],[16,17],[19,14]],'#E8BC9C'); d.line(11,14,16,18,'#4A5C98'); d.line(21,14,16,18,'#4A5C98');
    d.rect(14,11,5,3,'#E8BC9C'); d.hline(14,18,13,'#D8A888'); d.hline(14,18,10,'#E8BC9C'); d.px(15,13,'#6A5A50'); d.px(17,13,'#6A5A50');
    // shine
    d.line(11,7,13,5,'#FFFFFF'); d.line(11,9,15,5,'#E8F6FC'); d.px(20,6,'#FFFFFF');
    // crest on top
    d.stamp(14,0,['.rr.','rrrr'],{r:'#9A2A2A'});
    d.outline('#2A2638');
    sparkle(d,28,5,'#FFE868'); d.px(4,24,'#FFE868'); d.px(28,16,'#FFE868'); d.px(3,4,'#FFF4B0');
  },
  // golden sutures: bold curved golden needle trailing a wavy gold thread over a suture packet
  'mark:s2': d=>{
    // packet
    d.poly([[2,20],[20,16],[24,29],[6,31]],'#E8ECF4'); d.poly([[2,20],[20,16],[21,19],[3,23]],'#C8D0E0');
    d.line(5,26,19,23,'#B8C2D4'); d.line(6,29,20,26,'#B8C2D4'); d.rect(13,25,4,3,'#9A2A2A'); d.px(14,26,'#FFFFFF');
    // thread: wavy from packet up to needle eye
    const TH='#F0C030', TH2='#C08A18';
    for(let x=4;x<=19;x+=0.25){const y=14+Math.sin(x*0.7)*3; d.px(x,y,TH); d.px(x,y+1,TH2)}
    // needle: thick C curve
    for(let a=-0.4;a<=Math.PI+0.2;a+=0.02){const x=23+Math.cos(a)*6.5, y=11-Math.sin(a)*6.5; d.px(x,y,'#F8D860'); d.px(x+Math.cos(a)*-1,y+Math.sin(a)*1,'#C89A28')}
    d.px(29,13,'#FFFFFF'); d.px(29,14,'#FFFFFF');
    d.rect(16,11,2,3,'#C89A28'); d.px(16,12,null);
    for(let a=1;a<2.2;a+=0.1) d.px(23+Math.cos(a)*7.5,11-Math.sin(a)*7.5,'#FFF4B0');
    d.outline('#4A3418');
    sparkle(d,27,24,'#FFE868'); sparkle(d,5,5,'#FFF4B0'); d.px(30,2,'#FFE868');
  },












  // measuring apple: shiny red apple, leaf, and a little ruler with five notches (five apples = Kitty)
  'kitty:s0': d=>{
    ball(d,15,18,11,10,['#A01828','#C82838','#E84050','#F87080']);
    d.ell(15,9,3,1.5,'#7A1420'); d.px(15,8,'#5A0E18');
    d.vline(15,3,8,'#7A5030'); d.px(16,3,'#7A5030');
    d.poly([[16,5],[22,2],[25,4],[20,7]],'#5AB040'); d.line(17,5,23,3,'#8ADA60');
    d.ell(9,13,2,3,'#FFC8D0'); d.px(9,11,'#FFFFFF'); d.px(8,13,'#FFFFFF');
    d.px(20,26,'#E8A040'); d.px(12,24,'#E8A040');
    // tiny white bow sticker
    d.stamp(17,17,['ww.ww','wwyww','ww.ww'],{w:'#FFFFFF',y:'#F8D060'});
    d.outline('#3A1418');
    // ruler at side with 5 notches
    d.rect(28,2,3,28,'#F8E070'); d.vline(30,2,29,'#D8B840'); for(let i=0;i<6;i++) d.hline(28,29,2+i*5.4|0,'#8A6A20'); d.frame(27,1,5,30,'#5A4418');
  },
  // london teapot: white porcelain with blue floral pattern, red bow on lid, steam
  'kitty:s1': d=>{
    const W='#FFFFFF', W2='#E4E8F0', W3='#C4CAD8', B='#4A70C8', B2='#8AA8E8';
    // spout
    d.poly([[22,20],[27,12],[29,12],[25,24]],W2); d.line(23,20,28,12,W);
    // handle
    d.ring(6,19,4.5,W2); d.ring(6,19,3.5,W3);
    // body
    ball(d,16,20,10,8,[W3,W2,W,W]);
    d.ell(16,28,7,1,W3);
    // lid
    d.ell(16,12,7,2,W2); d.ell(16,11,6,1.5,W); d.circ(16,8,2,W2); d.px(15,7,W);
    // floral band
    for(const x of [9,14,19,24]) {d.stamp(x-1,18,['.b.','bBb','.b.'],{b:B,B:'#F8D060'})}
    d.hline(7,25,15,B2); d.hline(7,25,23,B2); for(let x=8;x<25;x+=3) d.px(x,24,B);
    // red bow on lid knob
    d.stamp(12,4,['rr...rr','rrrkrrr','rr...rr'],{r:'#E02838',k:'#F8D060'});
    d.outline('#2A2A40');
    // steam
    for(const [x,y] of [[27,7],[29,4],[28,1]]) {d.px(x,y,'#C8D4E8'); d.px(x+1,y-1,'#C8D4E8')}
  },
  // the original red bow: big glossy red bow with knot and ribbon tails, gold "since" sparkle
  'kitty:s2': d=>{
    const R='#E02838', R2='#B01828', R3='#F86070';
    // loops
    d.poly([[15,13],[3,4],[1,10],[2,19],[5,24],[15,17]],R); d.poly([[17,13],[29,4],[31,10],[30,19],[27,24],[17,17]],R);
    d.poly([[15,15],[4,7],[3,12],[4,19],[6,22]],R2); d.poly([[17,15],[28,7],[29,12],[28,19],[26,22]],R2);
    d.poly([[14,14],[5,9],[5,16],[7,20]],R); d.poly([[18,14],[27,9],[27,16],[25,20]],R);
    d.line(4,6,9,9,R3); d.line(28,6,23,9,R3); d.px(3,9,'#FFFFFF');
    // tails
    d.poly([[13,17],[9,30],[12,28],[14,30],[16,18]],R2); d.poly([[19,17],[23,30],[20,28],[18,30],[16,18]],R);
    // knot
    d.ell(16,15,4,4,R); d.ell(16,14,3,2,R3); d.px(15,13,'#FFFFFF'); d.vline(13,13,18,R2); d.vline(19,13,18,R2);
    d.outline('#4A0E18');
    sparkle(d,27,26,'#FFE868'); d.px(4,27,'#FFE868'); d.px(16,3,'#FFE868');
  },
  // mama's kitchen: pink tiles, oven glowing right, apple pie on table with a slice saved on a plate
  'kitty:c0': d=>{
    d.rect(0,0,64,26,'#FCE4EA'); for(let y=2;y<26;y+=4) d.hline(0,63,y,'#F6D0DA'); for(let y=0;y<26;y+=4) for(let x=(y/4%2)*4;x<64;x+=8) d.vline(x,y,y+1,'#F6D0DA');
    // window with curtains
    d.rect(4,3,16,12,'#FFFFFF'); d.rect(5,4,14,10,'#AEE0F8'); d.vline(12,4,13,'#FFFFFF'); d.hline(5,18,9,'#FFFFFF');
    d.ell(9,12,3,1,'#9AD078'); d.circ(16,6,1.5,'#FFF6C0');
    d.poly([[3,2],[8,2],[5,12]],'#F890A8'); d.poly([[16,2],[21,2],[19,12]],'#F890A8'); d.hline(2,21,2,'#E06890');
    // shelf with apples & jars
    d.hline(24,40,8,'#C88A5A'); d.hline(24,40,9,'#A06A40');
    d.circ(27,6,1.5,'#E03040'); d.px(27,4,'#5AB040'); d.circ(31,6,1.5,'#E03040'); d.rect(34,3,4,5,'#F8E8B0'); d.rect(34,3,4,1,'#E06890');
    // oven / stove right
    d.rect(44,10,20,20,'#FFFFFF'); d.rect(44,10,20,3,'#F4C8D4'); d.frame(44,10,20,20,'#D8B8C4');
    d.rect(47,16,14,10,'#3A2A30'); d.rect(48,17,12,8,'#F8A048'); d.rect(49,21,10,3,'#E07030'); d.ell(54,21,4,1,'#C88848');
    for(const x of [48,53,58]) d.px(x,11,'#E06890');
    // hood
    d.poly([[46,0],[62,0],[60,7],[48,7]],'#F4C8D4'); d.hline(48,60,7,'#D8A0B0');
    // floor checker
    d.rect(0,30,64,10,'#FFFFFF'); for(let y=30;y<40;y+=3) for(let x=((y-30)/3%2)*3;x<64;x+=6) d.rect(x,y,3,3,'#F8B8C8');
    d.rect(0,26,44,4,'#F4D0DA'); d.hline(0,43,26,'#E8B0C0');
    // table with pie
    d.rect(24,22,20,2,'#C88A5A'); d.rect(24,24,20,1,'#A06A40'); d.rect(26,25,2,9,'#A06A40'); d.rect(40,25,2,9,'#A06A40');
    d.rect(23,21,22,1,'#FFFFFF'); for(let x=23;x<45;x+=2) d.px(x,22,'#F890A8');
    d.ell(31,19,6,2,'#E0A050'); d.ell(31,18,5,1.5,'#F0C070'); for(let x=27;x<36;x+=2) d.px(x,18,'#B07030'); d.line(27,17,35,19,'#C8883A');
    d.poly([[31,18],[36,17],[37,19]],'#C83040');
    // saved slice on plate with a heart
    d.ell(40,20,3,1,'#FFFFFF'); d.poly([[38,19],[42,18],[42,20]],'#F0C070'); d.px(41,19,'#C83040');
    d.stamp(39,14,['r.r','rrr','.r.'],{r:'#F06080'});
    // steam
    for(const x of [29,32]) {d.px(x,15,'#FFFFFF'); d.px(x+1,14,'#FFFFFF'); d.px(x,13,'#FFFFFF')}
  },
  // big ben, london: clock tower right, red double-decker bus, sentry box guard, grey-blue sky
  'kitty:c1': d=>{
    d.grad(0,0,64,26,['#A8C0D8','#B8CCE0','#C8D8E8','#D8E4EE']);
    cloud(d,2,3,12,'#F0F4F8','#D0DCE8'); cloud(d,24,1,10,'#F0F4F8');
    // big ben
    d.rect(48,8,10,26,'#C8A868'); d.vline(57,8,33,'#A88848'); d.rect(47,8,12,2,'#B89858');
    d.rect(49,10,8,8,'#B89858'); d.circ(53,14,3,'#FFF8E0'); d.ring(53,14,3,'#8A6A30'); d.vline(53,12,14,'#2A2A30'); d.hline(53,54,14,'#2A2A30');
    d.poly([[47,8],[53,1],[59,8]],'#4A5A6A'); d.vline(53,0,2,'#C8A868');
    for(let y=20;y<33;y+=3) {d.vline(50,y,y+1,'#8A6A40'); d.vline(55,y,y+1,'#8A6A40')}
    // parliament building low
    d.rect(30,18,18,14,'#D0B478'); for(let x=31;x<48;x+=3) {d.vline(x,21,28,'#B09458'); d.px(x,17,'#D0B478')}
    // ground: sidewalk + road
    d.rect(0,30,64,10,'#B8B8C0'); d.rect(0,29,64,1,'#9A9AA4'); d.rect(0,36,64,4,'#5A5A66'); for(let x=2;x<64;x+=8) d.hline(x,x+3,38,'#F4F4F4');
    // red bus
    d.rect(26,18,20,15,'#D82830'); d.rect(26,18,20,1,'#F05058'); d.rect(27,20,18,3,'#FFF4D8'); d.rect(27,26,13,3,'#FFF4D8'); d.rect(41,25,4,7,'#A81820');
    for(const x of [31,36,41]) {d.vline(x,20,22,'#D82830'); } for(const x of [31,35]) d.vline(x,26,28,'#D82830');
    d.hline(26,45,24,'#A81820'); d.circ(30,33,2,'#2A2A30'); d.circ(42,33,2,'#2A2A30'); d.px(30,33,'#9A9AA8'); d.px(42,33,'#9A9AA8');
    // sentry box + guard (no smile)
    d.rect(58,20,6,13,'#3A3A4A'); d.poly([[57,20],[61,16],[65,20]],'#2A2A3A'); d.rect(59,22,5,11,'#E8E0D0');
    d.rect(60,21,3,4,'#1A1A20'); d.rect(60,25,3,1,'#F0C8A8'); d.rect(60,26,3,5,'#D82830'); d.hline(60,62,28,'#1A1A20'); d.rect(60,31,3,2,'#1A1A20');
    // pigeon
    d.stamp(22,33,['.gg.','gggk','.yy.'],{g:'#8A8AA0',k:'#F0A040',y:'#E08040'});
  },
  // sanrio puroland: pastel dream castle, rainbow, candy clouds, floating hearts and balloons
  'kitty:c2': d=>{
    d.grad(0,0,64,26,['#C8B8F8','#D8C4F8','#F0CCF0','#FCD8EC']);
    // rainbow
    const rb=['#F87898','#F8B878','#F8E888','#98E0A8','#88C8F0','#B8A0F0'];
    rb.forEach((c,i)=>{for(let y=0;y<24;y++)for(let x=22;x<64;x++){const q=Math.hypot(x-42,(y-36)*1.15); if(q>30-i*1.6&&q<=31.6-i*1.6) d.px(x,y,c)}});
    d.rect(0,24,64,16,'#FCD8EC');
    // candy clouds
    cloud(d,0,4,14,'#FFFFFF','#F8D8F0'); cloud(d,52,14,12,'#FFFFFF','#F8D8F0');
    // castle
    const P='#FFC0D8', P2='#E890B4', L='#FFFFFF';
    d.rect(32,14,24,18,P); d.rect(32,14,24,2,L);
    for(const [x,h,c] of [[28,12,'#F890B8'],[52,12,'#B890F0'],[39,6,'#F890B8'],[46,9,'#88C8F0']]){d.rect(x,32-h-12,6,h+12,P); d.vline(x+5,32-h-12,31,P2); d.poly([[x-1,32-h-12],[x+3,32-h-19],[x+7,32-h-12]],c); d.px(x+3,32-h-20,'#F8E070'); d.rect(x+2,32-h-8,2,3,'#B8E0F8')}
    for(let x=32;x<56;x+=3) d.px(x,13,P);
    d.poly([[40,32],[40,25],[44,22],[48,25],[48,32]],'#B87098'); d.vline(44,23,31,'#9A5A80');
    d.stamp(42,16,['r.r','rrr','.r.'],{r:'#F05080'});
    // ground: candy path
    d.rect(0,31,64,9,'#B8EAC8'); d.dither(0,31,64,1,'#B8EAC8','#FCD8EC');
    d.poly([[38,32],[50,32],[60,40],[34,40]],'#FFF0F6'); for(let y=33;y<40;y+=2) d.hline(39-(y-32)/2,49+(y-32),y,'#F8C8DC');
    // lollipops & balloons
    d.vline(60,24,33,'#FFFFFF'); d.circ(60,22,3,'#F890B8'); d.ring(60,22,1.5,'#FFFFFF');
    d.vline(26,30,34,'#FFFFFF'); d.circ(26,28,2,'#88C8F0'); d.px(25,27,'#FFFFFF');
    for(const [x,y,c] of [[22,6,'#F06080'],[26,10,'#F8E070']]) {d.ell(x,y,2,3,c); d.px(x-1,y-1,'#FFFFFF'); d.line(x,y+3,x+1,y+8,'#FFFFFF')}
    for(const [x,y] of [[16,14],[58,6],[8,18]]) d.stamp(x,y,['r.r','rrr','.r.'],{r:'#F890B8'});
  },






  // bakery sandwich: casse-croute baguette with ham, lettuce and cheese, half-wrapped in bakery paper
  'nanami:s0': d=>{
    const C='#D89848', C2='#B07028', C3='#F0C070';
    // baguette (diagonal)
    d.poly([[2,21],[24,6],[30,10],[8,26]],C); d.poly([[2,21],[24,6],[26,7],[3,23]],C3);
    d.poly([[8,26],[30,10],[30,12],[9,28]],C2);
    for(let i=0;i<4;i++) {const x=8+i*5, y=19-i*3.4; d.line(x,y,x+3,y-3,C2); d.line(x+1,y,x+3,y-2,'#FFE0A0')}
    // fillings sticking out (lower side)
    for(let i=0;i<22;i++){const x=6+i, y=Math.round(24-i*0.7); d.px(x,y+1,i%3?'#7AC850':'#5AA838'); d.px(x,y+2,'#F098A0'); d.px(x+1,y+3,i%2?'#F8D850':'#F098A0')}
    // paper wrap
    d.poly([[0,25],[8,19],[15,27],[8,31],[1,31]],'#F4ECDC'); d.line(8,19,15,27,'#D8CCB4'); d.line(2,27,9,22,'#C8B898'); d.line(4,30,11,25,'#C8B898');
    d.stamp(3,27,['.ss.','sbbs','.ss.'],{s:'#7A5020',b:'#C89040'});
    d.outline('#4A3018');
    sparkle(d,7,6,'#FFE868'); d.px(27,22,'#FFE868');
  },
  // 7:3 pattern tie: blue tie with gold-brown pattern, a red 7:3 mark, wrapped tail curling like a fist wrap
  'nanami:s1': d=>{
    const B='#4A70B0', B2='#30508A', B3='#7A9AD8', Y='#C89040', Y2='#7A5020';
    // knot
    d.poly([[11,2],[19,2],[18,7],[12,7]],B); d.line(12,3,17,3,B3); d.px(18,6,B2);
    // collar loop hint
    d.line(10,2,6,0,'#DCCFAA'); d.line(20,2,24,0,'#DCCFAA');
    // blade
    d.poly([[12,7],[18,7],[21,25],[15,30],[9,25]],B); d.poly([[15,7],[18,7],[21,25],[15,30]],B2);
    // pattern: alternating gold/brown diamonds
    for(let y=9;y<27;y+=3) for(let x=11;x<21;x+=3) if(d.get(x,y)) d.px(x+(y%2),y,((x+y)%2)?Y:Y2);
    // 7:3 mark line (at 70% of the blade)
    d.line(9,20,21,20,'#E03030'); d.px(10,19,'#FFFFFF');
    d.line(13,8,10,22,B3);
    // wrapped tail curling
    d.ring(25,23,4,B); d.ring(25,23,3,B2); d.px(25,19,B3);
    d.outline('#1A2440');
    d.stamp(23,3,['777','..7','.7.','.7.','.7.'],{7:'#E03030'}); d.px(27,4,'#2A2A2A'); d.px(27,6,'#2A2A2A'); d.stamp(29,3,['33','.3','33','.3','33'],{3:'#E03030'});
  },
  // early retirement plan: clipboard with a seaside-house sketch, savings bars, empty signature line and pen
  'nanami:s2': d=>{
    // board
    d.rect(4,3,22,28,'#B07838'); d.rect(5,4,20,26,'#C88A48'); d.vline(25,3,30,'#8A5A28');
    // paper
    d.rect(6,6,18,23,'#FFFFFF'); d.rect(22,6,2,23,'#E8ECF0');
    // clip
    d.rect(11,1,8,5,'#B8BCC8'); d.rect(12,2,6,2,'#E0E4EC'); d.rect(13,0,4,2,'#8A8E9A');
    // title bar
    d.hline(8,20,8,'#2A2A30'); d.hline(8,15,10,'#9AA0B0');
    // sea + house sketch
    d.rect(8,12,13,6,'#BCE4F8'); d.rect(8,16,13,2,'#5AA8D8'); d.px(10,16,'#FFFFFF'); d.px(15,17,'#FFFFFF');
    d.rect(14,13,4,3,'#F4E0C0'); d.poly([[13,13],[16,10],[19,13]],'#E06040'); d.px(15,14,'#5A3A20'); d.circ(10,13,1,'#FFE070');
    // savings bars
    d.rect(8,20,2,4,'#7AC850'); d.rect(11,19,2,5,'#7AC850'); d.rect(14,18,2,6,'#7AC850'); d.rect(17,20,2,4,'#F8D060'); d.px(18,19,'#F8D060');
    // signature line (empty) + X
    d.hline(9,21,27,'#2A2A30'); d.stamp(8,25,['x.x','.x.','x.x'],{x:'#E03030'});
    d.outline('#3A2A18');
    // pen
    d.line(22,30,30,17,'#2A2A30'); d.line(23,30,31,17,'#4A4A58'); d.px(22,31,'#F8D060'); d.px(30,16,'#C89040');
    d.px(29,18,'#C89040');
  },
  // commute cafe: morning street cafe right with striped awning, wall clock at 9, outdoor table with one cup
  'nanami:c0': d=>{
    d.grad(0,0,64,20,['#F8E0B8','#FAE8C8','#FCF0D8','#E8F0F0']);
    d.circ(10,4,3,'#FFF4D0'); d.circ(10,4,2,'#FFFFFF');
    // background buildings
    d.rect(0,8,14,16,'#D8C8B8'); for(let y=10;y<22;y+=4) for(let x=2;x<13;x+=4) d.rect(x,y,2,2,'#B8C8D8');
    d.rect(14,4,10,20,'#C8B8A8'); for(let y=6;y<22;y+=4) for(let x=16;x<23;x+=3) d.rect(x,y,2,2,'#B8C8D8');
    // cafe
    d.rect(28,6,36,24,'#5A4A3A'); d.rect(28,6,36,4,'#3A2E24');
    d.rect(31,7,30,2,'#E8D080');
    d.rect(31,16,22,11,'#F4E0B0'); d.rect(32,17,20,9,'#FCEED0'); d.vline(42,17,25,'#5A4A3A');
    d.rect(55,16,7,14,'#3A2E24'); d.px(56,23,'#E8D080');
    // awning stripes
    for(let x=29;x<64;x+=4){d.rect(x,11,2,4,'#3E6A50'); d.rect(x+2,11,2,4,'#F4ECDC')} d.hline(29,63,15,'#2E5040');
    // clock at 9:00
    d.circ(46,3,3,'#FFFFFF'); d.ring(46,3,3,'#2A2A30'); d.vline(46,1,3,'#2A2A30'); d.hline(44,46,3,'#2A2A30');
    // bread in window
    d.ell(36,23,2,1,'#D89848'); d.ell(47,23,2,1,'#C88038'); d.px(35,22,'#F0C070');
    // sidewalk
    d.rect(0,30,64,10,'#D8CCC0'); d.rect(0,24,28,6,'#E4D8CC'); for(let x=0;x<64;x+=6) d.vline(x,30,39,'#C8BCB0'); d.hline(0,63,30,'#B8ACA0');
    // table + one coffee
    d.ell(38,31,6,1,'#FFFFFF'); d.vline(38,32,37,'#3A3A40'); d.hline(35,41,38,'#3A3A40');
    d.rect(37,28,3,3,'#FFFFFF'); d.px(40,29,'#FFFFFF'); d.px(38,28,'#6A4A2A');
    d.px(38,26,'#E8E8E8'); d.px(39,25,'#E8E8E8');
    // chair & newspaper
    d.rect(45,30,4,1,'#3A3A40'); d.vline(45,30,37,'#3A3A40'); d.vline(48,31,37,'#3A3A40'); d.vline(48,26,30,'#3A3A40');
    d.rect(42,30,3,2,'#E8E8E8');
    // planter
    d.rect(58,32,6,6,'#8A6A4A'); d.circ(61,30,3,'#5AA048');
  },
  // tokyo bakery tour: row of five tiny bakeries with bread signs, street lanterns, a full paper bag
  'nanami:c1': d=>{
    d.grad(0,0,64,24,['#9ACCF0','#A8D2F2','#B4D8F2','#C4E0F4','#D0E6F4']);
    d.rect(0,12,9,18,'#B8B0C8'); d.rect(9,16,10,14,'#C8C0D4'); for(let y=14;y<28;y+=3){d.px(2,y,'#E8F0F8'); d.px(5,y,'#E8F0F8'); d.px(11,y+2,'#E8F0F8'); d.px(15,y+2,'#E8F0F8')}
    // tokyo tower in distance
    d.poly([[11,13],[13,1],[15,13]],'#E85030'); d.hline(11,15,7,'#FFFFFF'); d.hline(12,14,4,'#FFFFFF'); d.vline(13,0,1,'#E85030');
    cloud(d,30,2,10,'#FFFFFF'); cloud(d,48,4,8,'#FFFFFF');
    // shops
    const shops=[['#F4D8B0','#D86040'],['#F8E8D0','#4A80C0'],['#E8D0C0','#6AA058'],['#F4E0E0','#D85080'],['#F0E4C0','#8A5A3A']];
    shops.forEach(([w,a],i)=>{const x=20+i*9, top=10+(i%2)*3;
      d.rect(x,top,9,22-top+8,w); d.rect(x,top,9,1,'#8A7A6A');
      for(let k=0;k<9;k+=2){d.rect(x+k,top+5,1,2,a)} d.hline(x,x+8,top+7,a);
      d.rect(x+1,top+9,4,30-top-9,'#FFF6E0'); d.rect(x+6,top+9,2,30-top-9,'#5A4A3A');
      d.rect(x+2,top+1,5,3,'#FFFFFF');
    });
    // bread icons on signs: croissant, loaf, melonpan, baguette, bun
    d.stamp(23,11,['.c.','ccc'],{c:'#D89848'}); d.stamp(31,14,['ccc','CCC'],{c:'#E8B060',C:'#B07028'}); d.stamp(40,11,['.y.','yyy'],{y:'#E8D070'}); d.line(48,15,52,15,'#C88038'); d.stamp(57,11,['.c.','ccc'],{c:'#C88038'});
    // window bread
    for(let i=0;i<5;i++){const x=21+i*9; d.hline(x+1,x+4,27,'#B08050'); d.hline(x+2,x+3,26,i%2?'#D89848':'#E8B060')}
    // lanterns
    for(const x of [19,46]) {d.rect(x,18,2,3,'#E84040'); d.px(x,17,'#2A2A30')}
    // street
    d.rect(0,30,64,10,'#C8C0B8'); d.rect(0,22,20,8,'#D8D0C8'); d.hline(0,63,30,'#A8A098'); for(let x=0;x<64;x+=8) d.hline(x,x+4,35,'#B8B0A8');
    // full paper bag with baguette poking out
    d.rect(36,32,7,6,'#D8B880'); d.hline(36,42,32,'#B89860'); d.line(38,32,40,27,'#D89848'); d.line(39,32,41,27,'#B07028'); d.ell(41,31,1,1,'#E8B060');
    // stamp card with 5 stamps
    d.rect(48,34,9,4,'#FFFFFF'); for(let i=0;i<5;i++) d.px(49+i*2,36,'#E04040');
  },
  // kuantan, malaysia: turquoise sea, palms, beach lounger with an open book and a coconut drink
  'nanami:c2': d=>{
    d.grad(0,0,64,16,['#48B8E8','#68C8F0','#88D6F4','#A8E2F6']);
    d.circ(52,5,4,'#FFF8C8'); d.circ(52,5,3,'#FFFFFF');
    cloud(d,10,3,12,'#FFFFFF'); cloud(d,30,7,7,'#FFFFFF');
    // sea
    d.rect(0,16,64,9,'#20A8C8'); d.rect(0,16,64,1,'#1888A8'); for(let x=0;x<64;x+=7) {d.hline(x,x+3,18+(x%3),'#60D0E0'); d.hline(x+2,x+4,22,'#48C0D8')}
    d.rect(0,24,64,2,'#E0F8F8');
    // island
    d.ell(40,16,6,2,'#3A8A60'); d.ell(40,15,3,1,'#4AA070');
    // sand
    d.rect(0,26,64,14,'#F4E0B0'); for(let i=0;i<30;i++) d.px(d.ri(0,63),d.ri(27,39),d.rnd()<.5?'#E8D098':'#FCEECC');
    // palms (right)
    const palm=(x,y,h,lean)=>{for(let i=0;i<h;i++) {d.px(x+Math.round(lean*i/h),y-i,'#8A6038'); d.px(x+1+Math.round(lean*i/h),y-i,i%3?'#A87848':'#7A5030')}
      const tx=x+lean, ty=y-h; for(const [a,b] of [[-7,2],[-5,-2],[0,-4],[5,-2],[7,2],[3,3],[-3,3]]) {d.line(tx,ty,tx+a,ty+b,'#3A9A40'); d.line(tx,ty+1,tx+a,ty+b+1,'#2A7A30')}
      d.circ(tx,ty+1,1,'#6A4A20')};
    palm(59,31,24,-4); palm(49,29,17,2);
    // lounger
    d.poly([[30,30],[44,30],[46,26],[47,27],[45,32],[30,32]],'#F4F4F4'); for(let x=31;x<44;x+=3) d.vline(x,30,31,'#E05050');
    d.vline(31,33,35,'#9A9AA8'); d.vline(43,33,35,'#9A9AA8');
    // open book on lounger
    d.stamp(34,27,['ww.ww','wwwww','.b.b.'],{w:'#FFFFFF',b:'#4A70B0'}); d.vline(36,27,28,'#C8C8D0');
    // coconut drink
    d.circ(27,32,2,'#7A5030'); d.ell(27,30,2,0,'#F4F0E0'); d.line(27,30,29,26,'#F05080'); d.px(26,29,'#F8D040');
    // parasol shadow
    d.ell(40,36,9,1,'#E0C890');
    // shells
    d.stamp(52,35,['.p.','ppp'],{p:'#F8B8B0'});
  },
























  // yelena's vest: olive tactical vest covered in pockets, zipper, and a proud little badge
  'widow:s0': d=>{
    const O='#6A7A48', O2='#4E5C34', O3='#8A9A60', P='#7A8A52';
    // shoulders & body
    d.poly([[6,3],[11,3],[13,9],[16,11],[19,9],[21,3],[26,3],[28,10],[28,29],[4,29],[4,10]],O);
    d.poly([[4,10],[6,3],[9,3],[8,12],[8,29],[4,29]],O2); d.poly([[28,10],[26,3],[23,3],[24,12],[24,29],[28,29]],O2);
    // armholes
    d.ell(4,12,2,4,null); d.ell(28,12,2,4,null); for(let y=8;y<17;y++){d.clear(3,y); d.clear(29,y)}
    // zipper
    d.vline(16,11,29,'#C8C8B8'); for(let y=12;y<29;y+=2) d.px(15,y,'#9A9A88'); d.rect(15,11,2,2,'#D8D8C8');
    // pockets (lots!)
    const pk=(x,y,w,h)=>{d.rect(x,y,w,h,P); d.hline(x,x+w-1,y,O3); d.rect(x,y,w,2,O3); d.hline(x,x+w-1,y+2,O2); d.px(x+(w>>1),y+1,'#2A2A20')};
    pk(6,13,4,5); pk(10,13,4,5); pk(18,13,4,5); pk(22,13,4,5); pk(5,20,5,6); pk(10,21,4,5); pk(18,21,4,5); pk(22,20,5,6); pk(11,6,3,3);
    // velcro badge
    d.rect(20,6,4,3,'#2A2A30'); d.px(21,7,'#E03030'); d.px(22,7,'#E03030');
    d.hline(4,28,28,O2);
    d.outline('#22281A');
    sparkle(d,29,2,'#FFE868');
  },
  // matryoshka doll: big red doll with a painted face and flowers, a smaller one and a tiny one with a red hourglass
  'widow:s1': d=>{
    const doll=(cx,top,s,body,acc)=>{
      const h=Math.round(20*s), w=Math.round(8*s);
      d.ell(cx,top+h*0.62,w,h*0.4,body); d.ell(cx,top+h*0.28,w*0.72,h*0.3,body);
      d.ell(cx,top+h*0.3,w*0.48,h*0.2,'#F8E0C8');
      d.ell(cx,top+h*0.72,w*0.62,h*0.22,'#FFF4E0');
      if(s>0.7){ d.circ(cx-2,top+h*0.72,1.5,acc); d.circ(cx+2,top+h*0.75,1.5,'#F8D040'); d.px(cx-2,top+h*0.72,'#FFFFFF'); d.px(cx,top+h*0.62,'#5AA838'); d.px(cx+1,top+h*0.64,'#5AA838')}
      const fy=Math.round(top+h*0.3); d.px(cx-1,fy,'#2A1A1A'); d.px(cx+1,fy,'#2A1A1A'); d.px(cx-2,fy+1,'#F8A0A0'); d.px(cx+2,fy+1,'#F8A0A0'); d.px(cx,fy+2,'#D02020');
      d.hline(Math.round(cx-w*0.48),Math.round(cx+w*0.48),Math.round(top+h*0.18),'#5A3020');
    };
    doll(11,6,1.2,'#D02828','#2A50A0');
    doll(23,14,0.7,'#2A50A0','#D02828');
    doll(29,22,0.38,'#2A2A30','#D02828');
    d.stamp(28,27,['rrr','.r.','rrr'],{r:'#E02020'});
    d.line(4,15,18,15,'#901818'); d.px(11,15,'#F8D040');
    d.outline('#2A1414');
  },
  // the red ledger: open ledger, every red line struck through on the left, a clean page on the right
  'widow:s2': d=>{
    // cover
    d.poly([[1,8],[16,11],[31,8],[31,26],[16,29],[1,26]],'#A01820'); d.line(1,26,16,29,'#701018'); d.line(16,29,31,26,'#701018');
    // pages
    d.poly([[3,7],[15,9],[15,26],[3,24]],'#FFF8EC'); d.poly([[17,9],[29,7],[29,24],[17,26]],'#FFFFFF');
    d.vline(16,9,27,'#C8B8A0'); d.line(3,24,15,26,'#E0D4C0'); d.line(17,26,29,24,'#E8E0D0');
    // left: red lines crossed out
    for(let i=0;i<6;i++){const y=11+i*2.4; d.line(5,Math.round(y-0.3),13,Math.round(y+1),'#E03040'); d.line(5,Math.round(y+0.8),13,Math.round(y),'#4A3A3A')}
    // right: almost blank, light lines and a check
    for(let i=0;i<5;i++){const y=12+i*2.4; d.line(19,Math.round(y+0.6),27,Math.round(y-0.6),'#E8E4EC')}
    d.line(21,21,23,23,'#4AA860'); d.line(23,23,27,18,'#4AA860');
    // ribbon bookmark
    d.poly([[22,26],[24,26],[24,31],[23,30],[22,31]],'#2A2A30');
    // hourglass emblem on top edge
    d.stamp(14,3,['rrrrr','.rrr.','..r..','.rrr.','rrrrr'],{r:'#E02020'});
    d.outline('#2A0E10');
    // floating feather (lighter now)
    d.line(26,1,30,5,'#C8D0E0'); d.px(27,1,'#FFFFFF'); d.px(29,3,'#FFFFFF'); d.px(25,2,'#E8ECF4');
  },
  // avengers training room: dawn light through tall windows, mats, punching bag, target with Clint's missed arrows
  'widow:c0': d=>{
    d.rect(0,0,64,26,'#3A4258'); for(let x=0;x<64;x+=8) d.vline(x,0,25,'#343C50');
    // tall windows with dawn
    for(const x of [4,18]) {d.rect(x,2,10,18,'#2A3044'); d.grad(x+1,3,8,16,['#5A5A9A','#B87AA0','#F0A080','#F8D090']); d.vline(x+5,3,18,'#2A3044'); d.hline(x+1,x+8,10,'#2A3044')}
    // A logo on wall
    d.circ(38,9,6,'#5A6480'); d.ring(38,9,6,'#C8D0E0'); d.stamp(35,5,['..aa..','.a..a.','.aaaa.','a....a','a....a','......'],{a:'#FFFFFF'}); d.line(38,4,40,13,'#C8D0E0');
    // light shafts on floor
    // floor
    d.rect(0,26,64,14,'#7A6A5A'); d.hline(0,63,26,'#5A4A3A'); for(let x=0;x<64;x+=10) d.line(x,27,x-4,39,'#6E5E4E');
    for(const [a,b] of [[5,13],[19,27]]) d.poly([[a,26],[b,26],[b+6,39],[a+4,39]],'#9A8268');
    // blue mats
    d.poly([[22,30],[50,30],[56,39],[18,39]],'#3A6AB8'); d.hline(22,50,30,'#5A8AD8'); d.line(36,30,37,39,'#2A5098');
    // punching bag
    d.vline(56,0,5,'#9A9AA8'); d.rect(53,6,7,16,'#C82830'); d.vline(54,7,20,'#E84850'); d.vline(59,6,21,'#901820'); d.hline(53,59,9,'#2A2A30'); d.hline(53,59,18,'#2A2A30');
    d.ell(56,24,4,1,'#5A4A3A');
    // target with arrows
    d.circ(47,15,5,'#FFFFFF'); d.circ(47,15,4,'#E03040'); d.circ(47,15,2.5,'#FFFFFF'); d.circ(47,15,1,'#E03040');
    d.line(42,10,46,14,'#5A3A2A'); d.px(41,9,'#9A2AB8'); d.line(50,20,53,22,'#5A3A2A'); d.px(54,22,'#9A2AB8');
    // dropped arrow on floor + water bottle + towel
    d.line(40,35,48,33,'#5A3A2A'); d.px(49,33,'#C8C8D0'); d.px(39,35,'#9A2AB8'); d.px(40,36,'#9A2AB8');
    d.rect(28,32,2,4,'#60B8E8'); d.px(28,31,'#2A2A30'); d.rect(31,34,5,2,'#FFFFFF');
  },
  // budapest at night: chain bridge with lights over the Danube, domed parliament glowing gold across the river
  'widow:c1': d=>{
    d.grad(0,0,64,20,['#0E1430','#16204A','#22305E','#2E3E70']);
    stars(d,12,0,63,0,9,['#FFFFFF','#C8D0FF']); d.stamp(38,1,['.mmm','mm..','mm..','mm..','.mmm'],{m:'#F8F0D0'});
    // far bank + parliament (right)
    d.rect(0,17,64,2,'#1A2244');
    d.rect(36,11,28,7,'#C89850'); d.rect(36,11,28,1,'#E8C070'); d.ell(50,10,4,3,'#D8A858'); d.vline(50,4,7,'#E8C070'); d.px(50,3,'#FFE8A0');
    for(const x of [37,44,56,62]) {d.rect(x,8,2,3,'#D8A858'); d.px(x,7,'#E8C070')}
    for(let x=37;x<64;x+=2) {d.px(x,13,'#FFE8A0'); d.px(x,15,'#FFE8A0')}
    // river
    d.rect(0,19,64,21,'#1A2850'); for(let y=21;y<40;y+=3) for(let x=(y%2)*4;x<64;x+=9) d.hline(x,x+3,y,'#2A3A68');
    for(let y=20;y<30;y+=2) {d.hline(40,60,y,'#8A7040'); d.hline(43,57,y+1,'#3A3A58')}
    // chain bridge (left-center)
    d.rect(0,17,36,2,'#6A6A7A'); d.hline(0,35,16,'#8A8A9A'); for(let x=1;x<36;x+=3) d.px(x,15,'#FFE8A0');
    for(const x of [6,26]) {d.rect(x,5,5,12,'#9A9AA8'); d.rect(x+1,8,3,6,'#3A3A50'); d.hline(x-1,x+5,5,'#B8B8C8'); d.rect(x+1,19,3,5,'#7A7A88')}
    const cab=(a,b,sag)=>{for(let x=a;x<=b;x++){const t=(x-a)/(b-a); d.px(x,Math.round(6+sag*4*t*(1-t)),'#F8D878')}};
    cab(11,26,9); for(let x=0;x<6;x++) d.px(x,Math.round(6+(6-x)*1.4),'#F8D878'); for(let x=31;x<37;x++) d.px(x,Math.round(6+(x-31)*1.6),'#F8D878');
    for(const x of [8,28]) for(let y=24;y<34;y+=2) d.px(x+1,y,'#F8D878');
    // embankment (pet stands here)
    d.rect(0,30,32,10,'#5A5A68'); d.rect(0,29,32,1,'#8A8A98'); for(let x=0;x<32;x+=5) d.vline(x,30,39,'#4A4A58');
    d.vline(29,21,29,'#2A2A38'); d.rect(28,19,3,2,'#FFE8A0');
    // two coffee cups on the wall (two different memories)
    d.rect(23,27,2,2,'#FFFFFF'); d.rect(26,27,2,2,'#E8D0D0'); d.px(24,26,'#C8C8D8'); d.px(27,26,'#C8C8D8');
  },
  // russian snow safehouse: snowy pines, log cabin with warm windows and chimney smoke, red guardian shield by the door
  'widow:c2': d=>{
    d.grad(0,0,64,22,['#8AA0C8','#A0B4D4','#B8C8E0','#D0DCEC']);
    for(let i=0;i<40;i++) d.px(d.ri(0,63),d.ri(0,30),'#FFFFFF');
    // far pines
    for(const [x,h] of [[2,10],[9,13],[16,9],[58,12],[33,8]]){d.poly([[x-4,22],[x,22-h],[x+4,22]],'#5A7890'); d.px(x,22-h,'#FFFFFF')}
    // ground snow
    d.rect(0,22,64,18,'#F4F8FC'); d.ell(20,24,24,3,'#E4ECF6'); for(let x=0;x<64;x+=5) d.px(x+2,30+(x%3),'#DCE6F2');
    // cabin
    d.rect(30,14,26,16,'#7A4A2A'); for(let y=15;y<30;y+=2) d.hline(30,55,y,'#5A3418');
    d.poly([[27,15],[43,4],[59,15]],'#F4F8FC'); d.poly([[29,15],[43,6],[57,15]],'#E0E8F4'); d.hline(27,59,15,'#C8D4E4');
    d.rect(50,4,3,6,'#5A4A4A'); d.rect(49,3,5,1,'#F4F8FC');
    // smoke
    for(const [x,y,r] of [[51,1,1.5],[48,0,1]]) d.circ(x,y,r,'#E8ECF4');
    // windows warm
    for(const x of [33,48]) {d.rect(x,18,5,5,'#F8C860'); d.vline(x+2,18,22,'#5A3418'); d.hline(x,x+4,20,'#5A3418'); d.hline(x-1,x+5,23,'#F4F8FC')}
    // door
    d.rect(40,20,5,10,'#4A2A18'); d.px(44,25,'#F8D060');
    // red guardian shield leaning by the door
    d.circ(38,27,3,'#E03030'); d.circ(38,27,2,'#F4F4F4'); d.circ(38,27,1,'#E03030'); d.px(38,27,'#F8D060');
    // snow on ground around cabin, footprints (family)
    d.rect(28,29,30,2,'#F4F8FC'); for(let i=0;i<5;i++){d.px(26-i*3,33+i%2,'#B8C8DC'); d.px(46+i*3,33+(i+1)%2,'#B8C8DC')}
    // near pine right
    d.poly([[56,34],[61,14],[66,34]],'#2E5A48'); d.poly([[57,26],[61,18],[65,26]],'#3E6E58'); d.hline(58,63,22,'#FFFFFF'); d.hline(57,64,29,'#FFFFFF'); d.rect(60,34,2,3,'#5A3A2A');
    // snowman
    d.circ(25,31,2.5,'#FFFFFF'); d.circ(25,27,1.8,'#FFFFFF'); d.px(25,27,'#F08030'); d.px(24,26,'#2A2A30'); d.px(26,26,'#2A2A30'); d.hline(23,27,28,'#C82020');
  },
  // lucky guitar pick: blue pick on a charm string, painted four-leaf clover and a star
  'hachiware:s0': d=>{
    const B='#7FA8C8', B2='#5A84A8', B3='#B0D0E8';
    // charm string
    d.ring(16,4,3,'#E07890'); d.px(16,7,'#E07890'); d.px(16,8,'#C8C8D0');
    // pick body (rounded triangle)
    d.poly([[4,10],[28,10],[16,30]],B); d.ell(16,11,12,3,B); d.circ(5,11,2,B); d.circ(27,11,2,B);
    d.poly([[19,10],[28,10],[16,30]],B2); d.ell(21,11,7,2,B2); d.circ(27,11,2,B2);
    d.line(6,10,14,24,B3); d.line(7,10,10,15,'#FFFFFF');
    // hole for string
    d.circ(16,10,1,'#FFFFFF'); d.px(16,10,'#2A3440');
    // clover
    d.stamp(12,14,['.gg.gg.','gGggGgg','.ggggg.','gGggGgg','.gg.gg.','...k...','..k....'],{g:'#6AC060',G:'#9AE090',k:'#3A8A3A'});
    d.outline('#2A3440');
    sparkle(d,27,22,'#FFE868'); d.px(4,24,'#FFE868'); d.px(28,3,'#FFF4B0');
  },
  // audition number tag: paper tag pinned at the corners, big number 8, a star sticker
  'hachiware:s1': d=>{
    d.rect(2,6,28,21,'#FFFFFF'); d.rect(2,24,28,3,'#E4E8EE'); d.vline(29,6,26,'#E4E8EE');
    d.rect(2,6,28,4,'#7FA8C8'); d.hline(2,29,9,'#5A84A8');
    for(let x=4;x<28;x+=3) d.px(x,7,'#FFFFFF');
    // big 8
    d.stamp(11,11,['.aaaaaa.','aa....aa','aa....aa','.aaaaaa.','aa....aa','aa....aa','aa....aa','.aaaaaa.'],{a:'#2A3440'});
    d.stamp(22,12,['.y.','yyy','.y.'],{y:'#F8D040'}); d.px(6,22,'#F8A8B8'); d.px(7,22,'#F8A8B8');
    // safety pins
    for(const x of [3,26]) {d.line(x,4,x+3,8,'#B8BCC8'); d.line(x+1,4,x+3,7,'#E0E4EC'); d.circ(x,4,1,'#F8D040')}
    d.outline('#2A3440');
    // nervous sweat drop + sparkle
    d.stamp(28,0,['.b','bb','bb'],{b:'#8AC8F0'});
    sparkle(d,3,29,'#FFE868');
  },
  // debut album: CD case with a cat-ear cover and a disc sliding out, music notes
  'hachiware:s2': d=>{
    // disc behind
    d.circ(21,13,10,'#C8D0DC'); for(let y=0;y<32;y++)for(let x=0;x<32;x++) if(d.get(x,y)==='#C8D0DC'){const a=Math.atan2(y-13,x-21); d.px(x,y,[ '#E0E8F4','#F8C8E0','#C8E8F8','#E8F0C8'][Math.floor((a+Math.PI)/(Math.PI/2))%4])}
    d.ring(21,13,10,'#A8B0C0'); d.circ(21,13,3,'#FFFFFF'); d.circ(21,13,1,'#8A92A0');
    // case
    d.rect(2,10,20,20,'#7FA8C8'); d.rect(2,10,2,20,'#5A84A8'); d.rect(5,12,15,15,'#FFFFFF');
    d.grad(5,12,15,15,['#B8D8F0','#C8E0F4','#F8D8E8']);
    // cover art: hachiware-style head silhouette
    d.ell(12,22,6,4,'#FFFFFF'); d.poly([[6,21],[7,15],[10,19]],'#2A3440'); d.poly([[18,21],[17,15],[14,19]],'#2A3440'); d.poly([[7,20],[12,17],[17,20],[12,22]],'#2A3440'); d.poly([[12,18],[10,21],[14,21]],'#FFFFFF');
    d.px(10,23,'#2A3440'); d.px(14,23,'#2A3440'); d.px(9,24,'#F8A8B8'); d.px(15,24,'#F8A8B8');
    // title track label
    d.rect(6,13,6,2,'#2A3440'); d.px(18,14,'#F8D040');
    d.outline('#2A3440');
    note(d,25,24,'#F06080'); note(d,28,19,'#5A84A8');
  },
  // chiikawa's house: cozy small room, futon with two pillows, round table with snacks, sunny window
  'hachiware:c0': d=>{
    d.rect(0,0,64,24,'#FFF0D8'); for(let x=0;x<64;x+=4) d.vline(x,0,23,'#F8E6C8');
    // window
    d.rect(36,3,16,12,'#E8C890'); d.rect(37,4,14,10,'#B8E4F8'); d.vline(44,4,13,'#E8C890'); d.hline(37,50,9,'#E8C890'); cloud(d,38,5,5,'#FFFFFF'); d.circ(48,6,1.5,'#FFF4B0');
    // shelf with mushroom lamp & plant
    d.hline(8,26,8,'#C8985E'); d.hline(8,26,9,'#A87840');
    d.ell(12,6,2,1,'#F06060'); d.px(11,6,'#FFFFFF'); d.vline(12,7,7,'#FFF4E0');
    d.rect(18,5,3,3,'#E8A070'); d.px(19,4,'#6AB850'); d.px(18,3,'#6AB850'); d.px(20,3,'#6AB850');
    d.rect(22,4,3,4,'#7FA8C8'); d.rect(23,3,1,1,'#7FA8C8');
    // floor (tatami-ish)
    d.rect(0,24,64,16,'#E8D8A0'); d.hline(0,63,24,'#C8B880'); for(let x=0;x<64;x+=16) d.vline(x,25,39,'#D4C488'); d.hline(0,63,32,'#D4C488');
    // futon with two pillows (nap spot, right)
    d.rect(36,26,28,11,'#F8B8C8'); d.rect(36,26,28,2,'#FFFFFF'); for(let x=38;x<64;x+=5) d.px(x,31,'#FFFFFF'); for(let x=40;x<64;x+=5) d.px(x,34,'#FFFFFF');
    d.ell(42,24,4,2,'#FFFFFF'); d.ell(54,24,4,2,'#FFFFFF'); d.hline(39,45,25,'#E8ECF4'); d.hline(51,57,25,'#E8ECF4');
    d.poly([[36,30],[50,28],[64,30],[64,37],[36,37]],'#F8B8C8'); d.hline(36,63,29,'#F0A0B8');
    // zz
    d.stamp(48,15,['zzz','.z.','zzz'],{z:'#7FA8C8'}); d.stamp(53,12,['zz','zz'],{z:'#B0C8E0'});
    // round table with snacks
    d.ell(28,28,6,2,'#C88A50'); d.ell(28,27,6,1.5,'#E0A868'); d.vline(25,30,33,'#A06A38'); d.vline(31,30,33,'#A06A38');
    d.stamp(25,24,['.pp.','pwwp'],{p:'#F8A8B8',w:'#FFFFFF'}); d.circ(31,26,1,'#F8D060'); d.px(31,25,'#FFF4B0');
    d.stamp(4,30,['...','...'],{});
  },
  // night street busking: street lamp spotlight, open guitar case with coins, mic stand, buildings, notes and applause sparkles
  'hachiware:c1': d=>{
    d.grad(0,0,64,26,['#1A1A3A','#22224A','#2E2E5A','#3A3A68']);
    stars(d,8,0,63,0,8,['#FFFFFF','#C8D0FF']);
    // buildings
    for(const [x,w,h,c] of [[0,10,18,'#2A2A48'],[10,8,14,'#30305A'],[18,12,20,'#2A2A4E'],[30,10,16,'#323260'],[40,12,22,'#2A2A4E'],[52,12,17,'#30305A']]) {d.rect(x,26-h,w,h,c); for(let y=28-h;y<24;y+=3) for(let i=x+1;i<x+w-1;i+=3) if((i*3+y)%4<2) d.px(i,y,'#F8D878')}
    // neon sign
    d.rect(42,7,8,4,'#F860A0'); d.rect(43,8,6,2,'#2A2A4E'); note(d,44,6,'#60F0F0');
    // sidewalk
    d.rect(0,26,64,14,'#4A4A60'); d.hline(0,63,26,'#6A6A80'); for(let x=0;x<64;x+=7) d.vline(x,27,39,'#42425A');
    // spotlight from lamp
    d.vline(52,8,30,'#5A5A70'); d.rect(48,7,6,2,'#7A7A90'); d.rect(48,9,3,2,'#FFF4C0');
    d.poly([[49,11],[30,38],[50,38]],'#6A6880'); d.poly([[49,11],[34,38],[47,38]],'#7A7890');
    // mic stand
    d.vline(38,24,36,'#2A2A30'); d.line(36,37,40,37,'#2A2A30'); d.rect(37,22,3,2,'#9A9AA8'); d.px(38,22,'#C8C8D0');
    // open guitar case with coins
    d.poly([[24,34],[34,34],[36,38],[22,38]],'#3A2A20'); d.poly([[25,35],[33,35],[34,37],[24,37]],'#C83050'); for(const x of [26,29,31]) d.px(x,36,'#F8D040'); d.px(28,35,'#F8D040');
    d.line(22,34,25,30,'#3A2A20'); d.line(34,34,36,30,'#3A2A20'); d.line(25,30,36,30,'#3A2A20');
    // notes & applause sparkles
    note(d,40,14,'#FFFFFF'); note(d,31,17,'#F8D878'); sparkle(d,58,20,'#FFF4B0'); sparkle(d,26,12,'#FFF4B0'); twinkle(d,60,30,'#F8D878');
  },
  // lighthouse at sea's end: tall striped lighthouse on a rock islet, sweeping beam, wide sea, rocky shore left
  'hachiware:c2': d=>{
    d.grad(0,0,64,20,['#3A5A9A','#5A78B0','#8AA0C8','#C8C0D0','#F0C8B0']);
    stars(d,6,0,63,0,6,['#FFFFFF']);
    // beam
    d.poly([[46,7],[0,0],[0,6]],'#B8C4DC'); d.poly([[46,7],[0,1],[0,4]],'#D8E0F0');
    // sea
    d.rect(0,20,64,20,'#2A6AA8'); d.rect(0,20,64,1,'#F0D8C0'); for(let y=22;y<40;y+=3) for(let x=(y*5)%9;x<64;x+=10) {d.hline(x,x+3,y,'#4A8AC8'); d.px(x+1,y-1,'#8AC0E8')}
    // islet
    d.ell(48,30,14,5,'#5A5A68'); d.ell(46,28,11,3,'#7A7A88'); d.px(40,27,'#9A9AA8');
    for(let x=34;x<63;x+=3) d.px(x,33,'#FFFFFF');
    // lighthouse
    d.poly([[43,28],[44,9],[50,9],[51,28]],'#FFFFFF'); for(const y of [12,19,25]) d.poly([[43,y],[51,y],[51,y+3],[43,y+3]],'#E03838');
    for(let y=9;y<28;y++) {const x=Math.round(50.5-(28-y)*0.05); d.px(x,y,d.get(x,y)==='#E03838'?'#B02828':'#D8DCE4')}
    d.rect(42,8,10,1,'#2A2A38'); d.rect(43,4,8,4,'#2A2A38'); d.rect(44,5,6,2,'#FFF4A0'); d.poly([[42,4],[47,0],[52,4]],'#E03838'); d.px(47,0,'#2A2A38');
    d.rect(46,23,2,4,'#3A3A4A');
    // rocky shore left (pet stands)
    d.poly([[0,29],[8,27],[18,28],[26,31],[28,40],[0,40]],'#6A6A78'); d.poly([[0,33],[12,32],[22,34],[26,40],[0,40]],'#5A5A68'); d.hline(0,20,28,'#8A8A98');
    for(const [x,y] of [[4,35],[16,37],[22,33]]) d.px(x,y,'#7A7A88');
    d.ell(27,32,3,1,'#E8F4FF');
    // gull
    d.stamp(20,10,['k.k','.k.'],{k:'#2A2A38'}); d.stamp(28,6,['k.k','.k.'],{k:'#2A2A38'});
  },
  // Bart's slingshot: Y-fork, taped grip, red band pulled back with a water balloon in the pouch
  'bart:s0': d=>{
    const W1='#7A4420', W2='#B07038', W3='#DCA060';
    // arms
    d.poly([[11,21],[16,21],[9,5],[4,5]],W2); d.poly([[16,21],[21,21],[28,5],[23,5]],W2);
    d.line(5,5,12,20,W3); d.line(24,5,17,20,W3); d.line(8,5,15,20,W1); d.line(27,5,20,20,W1);
    d.circ(6.5,4.5,2,W2); d.circ(25.5,4.5,2,W2); d.px(6,3,W3); d.px(25,3,W3);
    // grooves for band
    d.hline(4,9,7,W1); d.hline(23,28,7,W1);
    // crotch + handle
    d.poly([[11,18],[21,18],[18,24],[14,24]],W2); d.rect(13,22,6,9,W2); d.vline(14,19,30,W3); d.vline(18,20,30,W1); d.vline(17,24,30,W1);
    // tape wraps
    for(const y of [24,27]) {d.hline(13,18,y,'#F4F4F4'); d.hline(13,18,y+1,'#C8C8D4'); d.px(18,y,'#C8C8D4')}
    d.hline(13,18,31,W1);
    // band
    d.line(5,8,12,17,'#E03838'); d.line(4,8,11,17,'#A82020'); d.line(27,8,20,17,'#E03838'); d.line(28,8,21,17,'#A82020');
    // pouch + balloon
    d.ell(16,18,5,2,'#5A3418'); d.hline(12,20,17,'#8A5A30');
    d.circ(16,14,4,'#3A8AE8'); d.circ(15,13,2.4,'#5AB0F8'); d.px(14,12,'#FFFFFF'); d.px(13,13,'#C8ECFF'); d.px(16,10,'#3A8AE8'); d.px(16,9,'#2060B8');
    d.ell(16,18,5,1,'#6A4020'); d.hline(13,19,18,'#8A5A30');
    // little splash drops
    d.px(22,11,'#5AB0F8'); d.px(23,10,'#C8ECFF'); d.px(9,11,'#5AB0F8');
    d.outline('#2A1A10');
  },
  // Krusty's autograph: signed photo card, clown face with green hair, red nose, squiggle signature + star
  'bart:s1': d=>{
    d.rect(3,1,26,30,'#F8F4E4'); d.rect(27,2,2,29,'#D8D0B8'); d.hline(4,28,30,'#D8D0B8');
    d.rect(5,3,21,18,'#F8C848'); d.dither(5,3,21,4,'#F8C848','#F8D870'); for(let x=5;x<26;x+=4) d.vline(x,7,20,'#F0B838');
    // tie / shirt
    d.poly([[9,21],[22,21],[19,16],[12,16]],'#A0D0F0'); d.poly([[14,16],[17,16],[16,20],[15,20]],'#E04050');
    // hair tufts
    d.circ(8.5,11,3,'#38A838'); d.circ(22.5,11,3,'#38A838'); d.circ(9,8.5,2,'#58C858'); d.circ(22,8.5,2,'#58C858'); d.px(7,10,'#288828'); d.px(24,12,'#288828');
    // face
    d.ell(15.5,10.5,5,6,'#FFFFFF'); d.vline(20,8,13,'#E0E4EC'); d.hline(12,19,16,'#E0E4EC');
    d.stamp(11,7,['bb...bb','kk...kk','.......'],{b:'#5A80E0',k:'#202030'});
    d.px(11,9,'#FFFFFF'); d.px(18,9,'#FFFFFF');
    d.circ(15.5,11,1.5,'#E82830'); d.px(15,10,'#FF8A8A');
    d.stamp(11,13,['r.......r','rrrrrrrrr','.rrkkkrr.','..rrrrr..'],{r:'#E82830',k:'#7A1018'});
    // signature
    d.line(6,26,8,22,'#2848C8'); d.line(8,22,9,26,'#2848C8'); d.line(9,26,11,23,'#2848C8'); d.line(11,23,13,25,'#2848C8');
    d.line(13,25,16,23,'#2848C8'); d.line(16,23,17,26,'#2848C8'); d.line(17,26,21,24,'#2848C8'); d.line(21,24,24,25,'#2848C8'); d.hline(7,22,27,'#2848C8');
    d.stamp(23,21,['..s..','.sss.','sssss','.s.s.'],{s:'#E04050'});
    d.outline('#3A2A1A');
  },
  // gorge-jump skateboard: red deck with lightning graphic, crack patched with a bandage, yellow wheels
  'bart:s2': d=>{
    // deck top (grip) with kicktails
    d.poly([[4,10],[27,10],[30,7],[31,9],[29,13],[2,13],[0,9],[1,7]],'#3A3A44');
    d.hline(3,28,10,'#5A5A68'); for(const [x,y] of [[6,11],[11,12],[17,11],[22,12],[26,11],[9,12]]) d.px(x,y,'#5A5A68');
    // red side band
    d.poly([[2,13],[29,13],[31,9],[31,12],[29,17],[2,17],[0,12],[0,9]],'#E03030');
    d.hline(2,29,14,'#F05848'); d.hline(2,29,17,'#A01818'); d.px(30,13,'#A01818'); d.px(1,13,'#A01818');
    // lightning graphic
    d.poly([[8,14],[13,14],[11,15],[15,15],[9,17],[10,16],[7,16]],'#FFD83A');
    d.poly([[19,14],[24,14],[22,15],[26,15],[20,17],[21,16],[18,16]],'#FFD83A');
    // crack + bandage
    d.line(15,10,16,13,'#1A1A20'); d.line(16,13,15,16,'#701010');
    d.rect(13,12,6,3,'#F0C098'); d.rect(15,12,2,3,'#E0A070'); d.px(14,13,'#D08860'); d.px(17,13,'#D08860');
    // trucks
    for(const x of [6,22]) {d.rect(x,18,5,2,'#9AA0B0'); d.hline(x,x+4,18,'#C8CCD8'); d.rect(x+1,20,3,1,'#6A7080')}
    // wheels
    for(const x of [5,10,21,26]) {d.circ(x+0.5,22.5,2,'#F8D030'); d.px(x,21,'#FFF4A0'); d.px(x+1,23,'#C89818'); d.px(x+0.5,22.5,'#C89818')}
    // dust puffs + motion lines (cowabunga)
    d.hline(6,11,4,'#A0B8E8'); d.hline(14,19,2,'#A0B8E8'); d.hline(22,26,4,'#A0B8E8');
    {const G=d.G.map(r=>r.slice()); for(let y=0;y<32;y++)for(let x=0;x<32;x++) d.G[y][x]=y>=4&&y<32?G[y-4][x]:null; for(let y=0;y<4;y++)for(let x=0;x<32;x++) d.G[y][x]=null}
    d.outline('#1E1418');
  },
  // Moe's payphone: night street, green-brown tavern with neon beer sign, payphone with dangling handset at right
  'bart:c0': d=>{
    d.grad(0,0,64,22,['#1A1838','#22204A','#2C2A5A','#3A3468']);
    stars(d,7,0,63,0,6,['#C8C8F0','#FFFFFF']);
    // distant skyline
    for(const [x,w,h] of [[0,7,10],[6,6,14],[12,8,9],[19,5,12]]) {d.rect(x,22-h,w,h,'#2A2848'); for(let y=24-h;y<20;y+=3) for(let i=x+1;i<x+w-1;i+=2) if(d.rnd()<.4) d.px(i,y,'#E8C860')}
    // tavern
    d.rect(24,6,40,22,'#5A6A48'); d.rect(24,6,40,2,'#3A4A30'); for(let y=10;y<28;y+=3) d.hline(24,63,y,'#4E5E3E');
    d.rect(22,4,42,3,'#3A2A20');
    // neon sign box
    d.rect(28,7,18,7,'#1A1420'); d.frame(28,7,18,7,'#F04898');
    d.stamp(30,8,['k...k.kkk.kkk','kk.kk.k.k.k..','k.k.k.k.k.kk.','k...k.k.k.k..','k...k.kkk.kkk'],{k:'#FF9AD0'});
    // door
    d.rect(36,17,8,11,'#3A2418'); d.rect(37,18,6,9,'#5A3828'); d.px(42,22,'#E8C860'); d.rect(38,19,4,3,'#E8B850');
    // window with beer-mug neon
    d.rect(26,16,8,7,'#2A2030'); d.frame(26,16,8,7,'#3A2A20'); d.rect(28,18,3,4,'#F8C040'); d.hline(28,30,18,'#FFFFFF'); d.vline(31,19,20,'#F8C040');
    d.rect(47,15,9,7,'#2A2030'); d.frame(47,15,9,7,'#3A2A20'); d.rect(49,17,5,3,'#E05040'); d.px(51,18,'#F8E080');
    // payphone
    d.rect(57,10,7,18,'#8A93A8'); d.rect(56,9,8,2,'#5A6278'); d.rect(58,12,5,4,'#C8D0E0'); d.rect(59,13,3,2,'#40A050');
    for(let y=17;y<22;y+=2) for(let x=58;x<63;x+=2) d.px(x,y,'#3A4258');
    d.vline(63,10,27,'#6A7388');
    // dangling handset + cord
    d.line(57,20,55,24,'#1A1A20'); d.line(55,24,56,27,'#1A1A20'); d.rect(53,27,3,5,'#2A2A34'); d.px(53,27,'#4A4A58'); d.px(53,31,'#4A4A58');
    // sidewalk
    d.rect(0,28,64,12,'#5A586A'); d.hline(0,63,28,'#7A788C'); for(let x=3;x<64;x+=9) d.vline(x,29,39,'#4C4A5C');
    d.rect(0,37,64,3,'#3A3848'); d.hline(0,63,37,'#2A2838');
    // street lamp glow
    d.vline(24,8,27,'#2A2A38'); d.rect(22,6,5,2,'#2A2A38'); d.rect(23,8,3,1,'#FFF0A0');
    // pink neon glow on pavement
    d.dither(30,29,14,2,'#7A6A8C','#5A586A');
    // speech bubble "?"
    d.rect(48,2,7,5,'#FFFFFF'); d.px(49,7,'#FFFFFF'); d.stamp(50,2,['.kk.','...k','..k.','....','..k.'],{k:'#2A2848'});
  },
  // Itchy & Scratchy Land: candy park, ferris wheel, pink castle, toppled robot with sparks
  'bart:c1': d=>{
    d.grad(0,0,64,26,['#7AD8F0','#9AE0F0','#C0E8F4','#F4D0E8','#F8B8D8']);
    cloud(d,2,3,12,'#FFFFFF','#F0E0F0'); cloud(d,30,1,10,'#FFFFFF','#F0E0F0');
    // ferris wheel
    d.ring(48,12,9,'#E04890'); d.ring(48,12,8.4,'#F870B0');
    for(let a=0;a<8;a++){const t=a*Math.PI/4; d.line(48,12,48+Math.cos(t)*8,12+Math.sin(t)*8,'#F8A0C8'); const cx=48+Math.cos(t)*9, cy=12+Math.sin(t)*9; d.rect(Math.round(cx)-1,Math.round(cy),3,2,['#F8D030','#40C0E0','#80D850','#F06040'][a%4])}
    d.circ(48,12,1,'#FFFFFF'); d.line(48,12,44,26,'#A0508A'); d.line(48,12,52,26,'#A0508A');
    // castle (cat ear & mouse ear towers)
    d.rect(24,12,14,14,'#F8A8D0'); d.rect(24,12,14,1,'#F8C8E0'); d.vline(37,12,25,'#E088B8');
    d.rect(21,8,5,18,'#B890F0'); d.poly([[21,8],[23,3],[26,8]],'#8A60D0');
    d.rect(36,8,5,18,'#B890F0'); d.circ(38.5,6,2,'#8A60D0'); d.circ(36.5,5,1,'#8A60D0'); d.circ(40.5,5,1,'#8A60D0');
    for(const x of [24,27,30,33,36]) d.rect(x,10,2,2,'#F8A8D0');
    d.rect(29,18,4,8,'#7A3A6A'); d.circ(30.5,18,2,'#7A3A6A'); d.px(22,13,'#5A3A9A'); d.px(39,13,'#5A3A9A'); d.px(22,17,'#5A3A9A'); d.px(39,17,'#5A3A9A');
    d.rect(29,0,1,4,'#6A4A2A'); d.poly([[30,0],[34,1],[30,2]],'#F8D030');
    // candy ground
    d.rect(0,26,64,14,'#F8E0F0'); d.hline(0,63,26,'#E0A0D0'); for(let x=0;x<64;x+=4) {d.px(x,30,'#F8B8D8'); d.px(x+2,34,'#B8E8F8'); d.px(x+1,38,'#F8E080')}
    // striped path
    d.poly([[27,26],[35,26],[44,40],[22,40]],'#FFF8C8'); for(let y=27;y<40;y+=3) d.hline(28-((y-26)*0.4|0),34+((y-26)*0.65|0),y,'#F8E080');
    // toppled robot (gray mascot) with sparks
    d.rect(48,31,12,5,'#9AA4B8'); d.hline(48,59,31,'#C8D0E0'); d.rect(56,28,6,6,'#B8C0D0'); d.px(58,30,'#FF3030'); d.px(60,30,'#FF3030'); d.rect(57,32,4,1,'#5A6070');
    d.rect(45,32,3,2,'#7A8498'); d.rect(50,36,2,3,'#7A8498'); d.rect(55,36,2,3,'#7A8498'); d.vline(59,25,27,'#7A8498'); d.circ(59,24,1,'#F8D030');
    sparkle(d,54,26,'#F8D030'); twinkle(d,46,28,'#F8F070');
    // balloons
    for(const [x,y,c] of [[14,8,'#F04050'],[18,6,'#40C0E0'],[16,4,'#F8D030']]) {d.ell(x,y,1.5,2,c); d.px(x-1,y-1,'#FFFFFF'); d.line(x,y+2,16,15,'#8A7A9A')}
  },
  // Australian outback: burnt-orange sky, Uluru at right, kangaroo sign, big boot prop, red dust
  'bart:c2': d=>{
    d.grad(0,0,64,24,['#F8D890','#F8C878','#F8B060','#F09850','#E88848']);
    d.circ(14,7,4,'#FFF0C0'); d.circ(14,7,3,'#FFFCE8');
    // Uluru
    d.poly([[30,23],[34,14],[40,11],[56,11],[61,15],[64,23]],'#C8502A'); d.poly([[34,14],[40,11],[56,11],[57,13],[38,14]],'#E06A38');
    for(const x of [41,46,51,56]) d.line(x,13,x+1,22,'#A83E20');
    d.hline(30,63,23,'#A83E20');
    // far kangaroo silhouette
    d.stamp(19,13,['...kk','..kk.','.kkk.','kkkk.','k.kk.','..k.k'],{k:'#B05028'});
    // ground
    d.rect(0,24,64,16,'#D8703A'); d.dither(0,24,64,2,'#E08448','#D8703A'); for(let y=28;y<40;y+=3) for(let x=(y*7)%11;x<64;x+=13) d.hline(x,x+2,y,'#C05E2C');
    // spinifex tufts
    for(const [x,y] of [[28,30],[44,35],[58,28],[2,37],[36,38]]) {tuft(d,x,y,'#A8A040'); tuft(d,x+2,y,'#C8C058'); d.px(x+1,y+1,'#7A7A2A')}
    // kangaroo sign
    d.vline(32,22,32,'#6A6A70'); d.poly([[32,13],[38,19],[32,25],[26,19]],'#F8D030'); d.poly([[32,14],[37,19],[32,24],[27,19]],'#202020'); d.poly([[32,15],[36,19],[32,23],[28,19]],'#F8D030');
    d.stamp(29,17,['..kk.','.kk..','kkk..','.kk..','k..k.'],{k:'#202020'});
    // giant boot on a little stand (the "booting")
    d.rect(44,32,16,3,'#8A5A30'); d.hline(44,59,32,'#B07840');
    d.poly([[50,15],[58,15],[58,29],[59,31],[42,31],[42,28],[44,26],[50,25]],'#6A3C20');
    d.rect(51,16,5,10,'#8A5430'); d.ell(45,28,3,2,'#8A5430'); d.px(44,27,'#B07848');
    d.hline(49,58,15,'#3A2010'); d.vline(57,16,29,'#4A2814'); d.vline(58,26,30,'#4A2814');
    for(const y of [18,21,24]) {d.px(50,y,'#E8D8B0'); d.px(51,y+1,'#E8D8B0'); d.px(50,y+1,'#3A2010')}
    d.rect(42,31,18,1,'#2A1810'); d.rect(55,30,4,2,'#2A1810'); d.px(56,13,'#6A3C20'); d.px(56,14,'#6A3C20'); d.px(57,13,'#6A3C20');
    // footprints in the dust going right
    for(const [x,y] of [[22,36],[26,34],[30,36],[34,34]]) d.px(x,y,'#B05428');
  },
  // top-branch apple: big glossy red apple still on its twig with two leaves, sparkle of "only from up high"
  'brachio:s0': d=>{
    // twig
    d.line(3,5,15,7,'#6A4428'); d.line(3,6,15,8,'#8A5A34'); d.line(15,7,16,9,'#6A4428'); d.px(2,5,'#6A4428');
    d.line(8,6,6,2,'#6A4428');
    // apple
    ball(d,16,19,11,10,['#901828','#C02030','#E03840','#F06058']);
    d.circ(12,22,0.5,'#C02030');
    d.ell(16,10,3,1.2,'#901828'); // top dimple
    d.ell(11,14,2,3,'#FFB0A8'); d.px(10,13,'#FFFFFF'); d.px(10,14,'#FFFFFF');
    for(const [x,y] of [[20,20],[23,15],[14,25],[19,26],[24,22]]) d.px(x,y,'#F8C060');
    // stem
    d.vline(16,6,10,'#5A3820'); d.px(17,6,'#7A5030');
    // leaves
    d.poly([[17,8],[22,3],[28,3],[25,7]],'#48A838'); d.line(18,7,26,4,'#2E7A28'); d.px(23,4,'#78D058'); d.px(25,3,'#78D058');
    d.poly([[6,2],[2,0],[1,1],[3,4]],'#48A838'); d.line(6,2,2,1,'#2E7A28');
    // tiny cloud wisp at the bottom: it grew THAT high
    d.ell(6,28,4,1.5,'#E8F0FC'); d.ell(26,29,4,1.5,'#E8F0FC'); d.hline(3,9,29,'#C0D0EC'); d.hline(23,29,30,'#C0D0EC');
    d.outline('#3A1418');
  },
  // 10-meter scarf: very long striped scarf folded in a tall zig-zag stack, fringe, yarn ball with needles
  'brachio:s1': d=>{
    const st=['#E85060','#F8E8C8','#5888D8','#F8E8C8'], dk=['#B03040','#D8C8A0','#3A60A8','#D8C8A0'];
    // 4 layers folded zig-zag, gaps between, U-bends alternating sides
    const L=[3,9,15,21];
    L.forEach((y,i)=>{
      for(let k=0;k<20;k++){const x=6+k, c=Math.floor((k+i*2)/3)%4; d.vline(x,y,y+3,st[c]); d.px(x,y+3,dk[c]); if(k%2===0) d.px(x,y+1,dk[c])}
      if(i<3){const right=i%2===0, x=right?26:3; const c=(i*2+7)%4; d.rect(x,y+1,3,7,st[c]); d.vline(right?x+2:x,y+2,y+6,dk[c]); d.px(right?x+2:x,y+1,null); d.clear(right?x+2:x,y+1); d.clear(right?x+2:x,y+7)}
    });
    // fringe
    for(let y=3;y<7;y++){d.px(4,y,'#E85060'); d.px(3,y,'#E85060'); if(y%2) d.px(2,y,'#E85060')}
    for(let y=21;y<25;y++){d.px(26,y,'#5888D8'); d.px(27,y,'#5888D8'); if(y%2) d.px(28,y,'#5888D8')}
    // yarn ball with needles
    ball(d,8,27.5,3,3,['#B03040','#E85060','#F88890']);
    d.line(6,26,10,30,'#B03040'); d.line(5,28,9,25,'#F88890');
    d.line(12,25,17,31,'#C8C8D0'); d.line(15,24,12,31,'#A8A8B8'); d.px(15,24,'#F8D030'); d.px(12,25,'#F8D030');
    d.line(11,28,14,25,'#E85060');
    d.outline('#2A2030');
  },
  // a piece of cloud: plump white cloud with blue undersides, torn wispy edge where it was plucked, tied on a string
  'brachio:s2': d=>{
    const c1='#FFFFFF', c2='#E4EEFC', c3='#B8CCF0', c4='#8EA8DC';
    d.circ(9,15,6,c2); d.circ(17,11,8,c2); d.circ(24,15,6,c2); d.ell(16,18,13,5,c2);
    d.circ(8.5,14,5,c1); d.circ(16.5,10,7,c1); d.circ(23,14,5,c1);
    d.ell(16,21,11,2.5,c3); d.hline(6,26,23,c4); d.hline(9,23,24,c4);
    d.circ(14,8,2,'#FFFFFF'); d.px(12,7,'#FFFFFF');
    // torn wisps on the right
    d.px(30,13,c2); d.px(31,12,c2); d.px(30,17,c3); d.px(31,18,c3); d.hline(29,30,15,c2);
    // happy cheeks / face (it's a cute cloud)
    d.stamp(12,14,['k.....k','.......','..k.k..','...k...'],{k:'#5A6A9A'}); d.px(10,16,'#F8B8C8'); d.px(20,16,'#F8B8C8');
    // string + bow
    d.line(16,24,15,30,'#C06080'); d.px(15,31,'#C06080');
    d.stamp(13,23,['pp.pp','.ppp.'],{p:'#F070A0'});
    // tiny sparkles
    d.px(3,5,'#F8D030'); d.px(2,6,'#F8D030'); d.px(4,6,'#F8D030'); d.px(3,7,'#F8D030');
    d.px(28,4,'#F8D030'); d.px(27,5,'#F8D030'); d.px(29,5,'#F8D030'); d.px(28,6,'#F8D030');
    d.outline('#4A5A8A');
  },
  // apartment rooftop: bright city day, rooftop floor, water tank, laundry line, antenna, a leaf left behind
  'brachio:c0': d=>{
    d.grad(0,0,64,22,['#5AA8F0','#70B8F4','#8AC8F8','#A8D8F8']);
    cloud(d,36,2,14,'#FFFFFF','#DCEAF8'); cloud(d,4,5,10,'#FFFFFF','#DCEAF8');
    // skyline behind
    for(const [x,w,h,c] of [[0,10,10,'#8A9AB8'],[9,8,14,'#7A8AA8'],[18,12,8,'#9AAAC8'],[30,7,16,'#7A8AA8'],[40,10,11,'#8A9AB8'],[52,12,13,'#9AAAC8']]){d.rect(x,22-h,w,h,c); for(let y=24-h;y<21;y+=3) for(let i=x+1;i<x+w-1;i+=2) d.px(i,y,'#D8E4F4')}
    // parapet
    d.rect(0,21,64,3,'#C8B8A0'); d.hline(0,63,21,'#E0D4C0'); d.hline(0,63,23,'#A89880');
    // rooftop floor (green waterproof paint, like korean apartments)
    d.rect(0,24,64,16,'#5AAA88'); for(let y=27;y<40;y+=4) d.hline(0,63,y,'#4E9A7A'); for(let x=8;x<64;x+=16) d.vline(x,24,39,'#4E9A7A');
    // water tank
    d.rect(44,10,14,15,'#4A88C8'); d.rect(44,10,3,15,'#6AA8E0'); d.rect(55,10,3,15,'#3A6AA8'); d.ell(51,10,7,1.5,'#8AC0F0');
    for(const y of [14,19]) d.hline(44,57,y,'#3A6AA8');
    d.rect(45,25,2,4,'#7A7A88'); d.rect(55,25,2,4,'#7A7A88'); d.hline(44,58,28,'#5A5A68');
    // antenna
    d.vline(36,4,21,'#6A6A78'); d.hline(33,39,6,'#6A6A78'); d.hline(34,38,9,'#6A6A78'); d.hline(35,37,12,'#6A6A78');
    // laundry line with clothes
    d.vline(26,18,32,'#8A8A98'); d.vline(41,18,32,'#8A8A98'); d.line(26,19,41,21,'#E8E8F0');
    d.rect(28,20,4,5,'#F8D030'); d.rect(29,24,2,1,'#F8D030');
    d.poly([[33,20],[37,21],[36,26],[33,26]],'#F06878'); d.rect(38,21,2,3,'#FFFFFF');
    // planters
    d.rect(52,33,10,4,'#B06838'); d.hline(52,61,33,'#C88050'); for(const x of [53,56,59]) {d.px(x,32,'#48A838'); d.px(x+1,31,'#68C048'); d.px(x,31,'#48A838')}
    // a big leaf dropped (snack from the long neck)
    d.poly([[29,34],[35,32],[39,33],[34,36]],'#58B840'); d.line(29,34,38,33,'#3A8A2A');
    // door hut
    d.rect(0,12,6,12,'#D8C8B0'); d.rect(0,11,7,2,'#A89880'); d.rect(2,15,3,9,'#8A6848');
  },
  // giant tree forest: colossal trunks, sun shafts, canopy top with bitten leaf gaps, sleepy zzz
  'brachio:c1': d=>{
    d.grad(0,0,64,40,['#B8E0A0','#98D088','#78B870','#5AA060']);
    // far trunks
    for(const x of [2,30,58]) d.rect(x,0,4,30,'#6A8A58');
    // light shafts
    for(let y=0;y<30;y++) for(const x0 of [20,44]) {const x=x0+Math.floor(y*0.35); if(y%2===0) d.px(x,y,'#D8F0B0'); d.px(x+1,y,'#C8E8A0')}
    // giant trunks
    d.rect(38,0,12,32,'#7A5030'); d.rect(38,0,3,32,'#9A6A40'); d.rect(47,0,3,32,'#5A3820');
    for(let y=3;y<30;y+=5) {d.vline(42,y,y+2,'#5A3820'); d.vline(45,y+2,y+4,'#5A3820')}
    d.poly([[36,32],[52,32],[56,35],[33,35]],'#5A3820'); d.line(38,30,34,35,'#7A5030'); d.line(49,30,55,35,'#7A5030');
    d.rect(24,0,6,30,'#8A5E38'); d.vline(24,0,29,'#A87848'); d.vline(29,0,29,'#6A4428');
    // canopy across top, with bitten bites
    for(let x=-2;x<66;x+=7) {d.circ(x,2,5,'#2E7A3A'); d.circ(x+3,4,4,'#3E9A48')}
    for(let x=0;x<64;x+=5) d.px(x,5,'#68C060');
    for(let x=-2;x<66;x+=9) {d.circ(x+4,7,3,'#2E7A3A'); d.px(x+4,10,'#3E9A48')}
    // ferns + ground
    d.rect(0,32,64,8,'#4A8A3A'); d.hline(0,63,32,'#68A850'); for(let x=0;x<64;x+=3) d.px(x,35+(x%2),'#3A7A2E');
    for(const x of [30,58,62]) {d.line(x,33,x-3,29,'#3A8A30'); d.line(x,33,x+3,29,'#3A8A30'); d.line(x,33,x,28,'#58B040')}
    // mushrooms
    d.rect(53,34,1,2,'#F8F0E0'); d.ell(53,33,2,1,'#E04040'); d.px(52,33,'#FFFFFF');
    // fallen leaves (eaten scraps) + zzz
    d.poly([[24,36],[28,34],[30,35],[27,37]],'#68C048'); d.poly([[31,37],[34,36],[35,38]],'#88D058');
    // a leaf with a big bite taken out
    d.poly([[14,14],[20,12],[22,15],[17,18]],'#58B040'); d.circ(21,13,1.5,'#A8D898'); d.line(15,15,21,14,'#3A8A30');
  },
  // right below the moon: night, enormous moon filling the top right with a nose smudge, hilltop, glowing grass
  'brachio:c2': d=>{
    d.grad(0,0,64,40,['#0C1030','#141A44','#1E2658','#2A3268','#38407A']);
    stars(d,26,0,63,0,26,['#FFFFFF','#B8C8F8','#F8E8A0']);
    twinkle(d,8,6,'#8898D8','#FFFFFF'); twinkle(d,28,3,'#8898D8','#FFFFFF');
    // moon halo + moon
    d.circ(48,12,17,'#2A3470'); d.circ(48,12,15.5,'#38448A');
    ball(d,48,12,14,14,['#C8B880','#E0D498','#F4ECB8','#FFFAD8']);
    for(const [x,y,r] of [[42,8,2.5],[52,18,3],[55,7,1.5],[45,19,1.5],[38,14,1.5]]) {d.circ(x,y,r,'#D4C488'); d.px(x-1,y-1,'#C0B078')}
    // boop smudge (heart nose-print) on moon's lower-left
    d.stamp(38,20,['pp.pp','ppppp','.ppp.','..p..'],{p:'#F8A8B8'});
    // hilltop
    d.poly([[0,26],[10,24],[22,25],[34,28],[50,31],[64,32],[64,40],[0,40]],'#1E3A3A');
    d.poly([[0,27],[10,25],[22,26],[34,29],[50,32],[64,33],[64,34],[0,34]],'#2A4E48');
    d.hline(0,22,25,'#4A7A68'); d.line(22,26,50,32,'#3A6A5A');
    // fireflies / glowing grass
    for(const [x,y] of [[30,30],[44,35],[56,36],[26,35],[60,38]]) {d.px(x,y,'#C8F070'); d.px(x,y-1,'#E8FFA0')}
    for(let x=2;x<64;x+=4) tuft(d,x,26+Math.round(x*0.12),'#3A6A5A');
    // lone tall tree silhouette right
    d.rect(60,22,2,10,'#0E1E22'); d.circ(61,20,3,'#0E1E22');
  },
  // chubby cricket: plump brown cricket on a leaf, long antennae, big hop leg, a tiny bow (it's a gift to share)
  'ttukbul:s0': d=>{
    // leaf
    d.poly([[1,27],[10,23],[24,23],[31,26],[22,30],[8,30]],'#58A840'); d.line(2,27,30,26,'#3A7A2A'); d.hline(8,22,24,'#78C858');
    for(const x of [9,15,21]) {d.line(x,26,x+2,24,'#3A7A2A'); d.line(x,27,x+2,29,'#3A7A2A')}
    // body
    ball(d,15,17,9,5.5,['#5A3418','#7A4A24','#9A6434','#B8844C']);
    // wings stripes
    d.line(9,14,22,13,'#4A2810'); d.line(10,16,23,15,'#4A2810'); d.hline(12,20,12,'#C89860');
    // head
    ball(d,6,17,4,4,['#5A3418','#8A5A2C','#A87440']);
    d.px(4,16,'#1A1008'); d.px(4,15,'#FFFFFF'); d.px(3,16,'#3A2010');
    d.px(3,19,'#E88070');
    // antennae
    d.line(6,13,1,3,'#3A2010'); d.line(7,13,12,1,'#3A2010'); d.px(1,2,'#3A2010');
    // big hind leg
    d.poly([[18,20],[25,9],[28,10],[22,21]],'#7A4A24'); d.line(19,20,26,10,'#A87440');
    d.line(27,10,30,22,'#5A3418'); d.px(31,22,'#5A3418');
    for(const y of [13,16,19]) d.px(29-(22-y)/4,y,'#3A2010');
    // front legs
    d.line(9,21,7,24,'#5A3418'); d.line(13,22,12,25,'#5A3418'); d.line(17,22,18,25,'#5A3418');
    // gift bow
    d.stamp(13,7,['pp.pp','ppppp','pp.pp'],{p:'#F070A0'}); d.px(15,8,'#C04070'); d.line(15,10,15,12,'#F070A0');
    // cerci tail
    d.line(23,18,28,21,'#5A3418');
    d.outline('#24160A');
  },
  // tropical fruit mash: little feeding cup of banana-mango puree, banana slice + mango cube on top, lick swirl, spoon
  'ttukbul:s1': d=>{
    // cup
    d.poly([[4,16],[28,16],[25,29],[7,29]],'#58C0D8'); d.poly([[4,16],[8,16],[9,29],[7,29]],'#88DCEC'); d.poly([[24,16],[28,16],[25,29],[23,29]],'#3898B8');
    d.hline(7,25,29,'#2A7898'); for(let x=10;x<24;x+=4) d.vline(x,19,27,'#4AAEC8');
    d.ell(16,16,13,3,'#88DCEC');
    // puree
    d.ell(16,15,11,2.4,'#F8B030'); d.dither(8,14,16,2,'#F8B030','#F8C858');
    d.ell(16,12,8,3,'#F8B840'); d.ell(15,11,5,2,'#FFD060'); d.px(13,10,'#FFF0A8'); d.px(14,10,'#FFF0A8');
    // swirl peak + lick marks
    d.ell(16,8,3,1.5,'#FFD060'); d.px(17,6,'#FFD060'); d.px(18,5,'#F8B840'); d.line(12,12,15,13,'#E09020'); d.line(17,13,20,12,'#E09020');
    // banana slice
    d.circ(23,10,2.5,'#FFF4C0'); d.ring(23,10,2.5,'#F8E070'); d.px(23,10,'#C8A860'); d.px(22,9,'#C8A860'); d.px(24,11,'#C8A860');
    // mango cubes
    d.rect(7,9,4,4,'#F88820'); d.rect(7,9,4,1,'#FFB050'); d.vline(10,10,12,'#D86810');
    d.rect(11,6,3,3,'#F88820'); d.hline(11,13,6,'#FFB050');
    // spoon
    d.line(26,2,22,9,'#E8E8F0'); d.line(27,2,23,9,'#B8B8C8'); d.ell(27,2,1.5,1.5,'#E8E8F0');
    // drip
    d.vline(5,17,19,'#F8B030'); d.px(5,20,'#F8B030');
    d.outline('#2A2440');
  },
  // lash-shine dewdrop: big crystal dewdrop on a leaf tip with curly lash sparkle and rainbow glints
  'ttukbul:s2': d=>{
    // leaf tip coming from top-left
    d.poly([[0,0],[12,0],[16,4],[10,6],[0,6]],'#4AA048'); d.line(0,2,14,3,'#2E7A30'); d.hline(2,10,1,'#7AC860');
    // drop
    const t=['#5890D8','#78B0F0','#A8D4FF','#D8F0FF'];
    ball(d,15,20,9,9,t,0.5,-0.4);
    d.poly([[15,5],[8,15],[22,15]],t[2]); d.line(15,5,9,14,t[3]); d.line(15,5,21,14,t[1]);
    d.ell(15,23,6,3,t[1]); d.ell(15,24,4,2,t[2]);
    // glints
    d.ell(11,17,1.5,3,'#FFFFFF'); d.px(13,13,'#FFFFFF'); d.px(19,25,'#FFFFFF');
    d.px(20,22,'#F8A8D0'); d.px(21,21,'#F8E890'); d.px(22,20,'#A8F0C8');
    // curly lashes on top of the drop (crested-gecko style)
    d.stamp(9,6,['k.....','.k....','..k...'],{k:'#3A2A50'});
    d.stamp(19,6,['.....k','....k.','...k..'],{k:'#3A2A50'});
    d.stamp(13,3,['k...k','.k.k.'],{k:'#3A2A50'});
    // sparkles
    sparkle(d,27,9,'#F8D870'); sparkle(d,4,24,'#F8B8E0');
    d.px(26,27,'#F8D870'); d.px(28,15,'#FFFFFF');
    d.outline('#28305A');
  },
  // glass window wall: indoor room, huge window with sky & tree, little toe-pad prints climbing up the glass, plants on sill
  'ttukbul:c0': d=>{
    // wall
    d.rect(0,0,64,40,'#F0E0C8'); for(let x=0;x<64;x+=6) d.vline(x,0,27,'#E8D4B8');
    // window frame + glass outside view
    d.rect(24,1,38,26,'#FFFFFF');
    d.grad(26,3,34,22,['#88C8F0','#A0D4F4','#B8E0F8','#D0ECF8']);
    cloud(d,28,5,10,'#FFFFFF','#E0F0FC');
    d.circ(52,20,6,'#58A848'); d.circ(48,22,4,'#68B858'); d.circ(56,22,4,'#489838'); d.rect(51,23,3,2,'#7A5030');
    d.rect(26,22,34,3,'#98C878');
    d.vline(42,3,24,'#FFFFFF'); d.vline(43,3,24,'#E0E0E8'); d.hline(26,59,13,'#FFFFFF'); d.hline(26,59,14,'#E0E0E8');
    // glass reflections
    d.line(28,12,34,6,'#E8F6FF'); d.line(29,13,35,7,'#E8F6FF'); d.line(46,24,54,16,'#E8F6FF');
    // tiny toe-pad prints climbing up the glass
    for(const [x,y] of [[31,23],[34,20],[33,17],[36,14],[35,10],[38,8],[37,5]]) {d.px(x,y,'#B8A080'); d.px(x-1,y-1,'#B8A080'); d.px(x+1,y-1,'#B8A080')}
    // sill
    d.rect(22,25,42,3,'#C89060'); d.hline(22,63,25,'#E0B080'); d.hline(22,63,27,'#9A6838');
    // plants on sill
    d.rect(46,20,6,5,'#D86A40'); d.hline(46,51,20,'#F08858'); d.line(48,20,46,15,'#48A040'); d.line(49,20,50,14,'#48A040'); d.line(50,20,53,16,'#48A040'); d.px(46,15,'#68C058'); d.px(50,13,'#68C058'); d.px(53,15,'#68C058');
    d.rect(56,21,5,4,'#7A9AD8'); d.circ(58,19,2,'#58B060'); d.px(57,18,'#F870A0');
    // curtain left
    d.rect(22,0,4,25,'#F8A8A8'); for(let y=0;y<25;y+=2) d.px(23,y,'#E08888'); d.hline(20,63,0,'#9A6838');
    // floor
    d.rect(0,28,64,12,'#C88A50'); for(let y=31;y<40;y+=3) d.hline(0,63,y,'#B07840'); for(let x=5;x<64;x+=11) d.vline(x+(x%3),28,39,'#B07840'); d.hline(0,63,28,'#9A6838');
    // rug
    d.ell(40,35,14,3,'#78B8A8'); d.ell(40,35,11,2,'#98D0C0');
    // cricket snack dish
    d.rect(55,32,6,2,'#E0E0E8'); d.hline(55,60,32,'#FFFFFF'); d.px(57,31,'#7A4A24'); d.px(58,31,'#5A3418');
  },
  // rainforest treetop at night: deep teal canopy, big moon, mossy branch, bromeliad, vines, fireflies
  'ttukbul:c1': d=>{
    d.grad(0,0,64,40,['#0E2A3A','#123444','#164050','#1A4A58']);
    stars(d,10,0,63,0,12,['#CFE8E0','#FFFFFF']);
    d.circ(46,9,6,'#F8F0C8'); d.circ(48,8,5,'#FFFCE8'); d.circ(43,7,1,'#E8DCA8');
    // far canopy layers
    for(let x=-4;x<68;x+=8) d.circ(x,30-(x%3),7,'#1E5040');
    for(let x=0;x<68;x+=10) d.circ(x,34,6,'#24604A');
    // tall tree trunk at right with leaves
    d.rect(54,14,5,26,'#4A3424'); d.vline(54,14,39,'#6A4A34');
    d.circ(58,12,7,'#2E7050'); d.circ(52,14,5,'#2E7050'); d.circ(60,8,4,'#3A8460'); d.px(56,9,'#58A878');
    // vines
    for(const x of [30,38]) for(let y=0;y<16+x%5;y++) {d.px(x+Math.round(Math.sin(y/3)),y,'#3A8460'); if(y%4===0) d.px(x+1+Math.round(Math.sin(y/3)),y,'#58A878')}
    // mossy branch / platform where the pet stands
    d.poly([[0,34],[30,31],[50,33],[54,30],[56,32],[52,36],[30,36],[0,40]],'#5A3E28'); d.line(0,34,30,31,'#7A5A3A'); d.line(30,31,50,33,'#7A5A3A');
    d.rect(0,37,64,3,'#163A30');
    for(let x=0;x<52;x+=3) d.px(x,33-Math.round(x/12),'#58A060');
    // big leaves on branch
    leaf(d,40,31,1,'#3A8A58','#2A6A44'); leaf(d,26,30,-1,'#3A8A58','#2A6A44');
    // bromeliad (red/pink star plant)
    d.poly([[42,32],[39,25],[43,30],[44,24],[45,30],[49,26],[46,32]],'#E04868'); d.px(44,29,'#F8A0B0'); d.px(44,30,'#F8D030');
    // fireflies
    for(const [x,y] of [[20,12],[26,20],[34,24],[12,6],[50,22],[62,26]]) {d.px(x,y,'#E8FF90'); d.px(x+1,y,'#90C860')}
  },
  // New Caledonia forest at night: tall column pines (araucaria), Southern Cross, ocean sliver, cousins' glowing eyes with lashes
  'ttukbul:c2': d=>{
    d.grad(0,0,64,28,['#1A1240','#22184E','#2C2060','#3A2A70','#4A3680']);
    stars(d,14,0,63,0,16,['#E8E0FF','#FFFFFF','#C0B0F0']);
    // southern cross
    for(const [x,y] of [[38,2],[38,9],[35,6],[42,5]]) twinkle(d,x,y,'#B8A8F0','#FFFFFF'); d.px(40,7,'#FFFFFF');
    // sea sliver + moon reflection
    d.rect(0,20,64,4,'#2A3A80'); d.hline(0,63,20,'#5A6AB8'); for(let x=6;x<20;x+=3) d.px(x,22,'#B8C0F0');
    // distant araucaria
    for(const [x,h] of [[4,12],[12,15],[28,13],[60,14]]) {d.vline(x,20-h,20,'#1A1A38'); for(let y=21-h;y<20;y+=2) d.hline(x-2,x+2,y,'#1E2040')}
    // ground / forest floor
    d.rect(0,24,64,16,'#1E2A3A'); d.dither(0,24,64,2,'#283648','#1E2A3A'); for(let x=0;x<64;x+=5) tuft(d,x,29+(x%3),'#2E4048');
    d.rect(0,35,64,5,'#18202E');
    // two big araucaria (columns with layered tufts)
    for(const [x,top] of [[34,2],[52,4]]) {
      d.vline(x,top,34,'#3A2A2A'); d.vline(x+1,top,34,'#2A1E20');
      for(let y=top+1;y<32;y+=3){const w=1+Math.floor((y-top)/9); d.hline(x-w-1,x+w+2,y,'#2A5A50'); d.hline(x-w,x+w+1,y+1,'#1E4A40'); d.px(x-w-1,y+1,'#3A7A68')}
    }
    // tree fern
    d.vline(45,24,34,'#3A2A2A'); for(const [dx,dy] of [[-5,2],[5,2],[-4,-1],[4,-1],[0,-3]]) d.line(45,24,45+dx,24+dy,'#3A8A68');
    // cousins' eyes glowing in the dark (with lashes)
    for(const [x,y] of [[27,12],[55,17],[44,28]]) {
      d.stamp(x,y,['l.l..l.l','........','oko..oko','oko..oko'],{l:'#E8D0A0',o:'#F8D040',k:'#1A1008'});
    }
    d.circ(16,6,4,'#F8E8B0'); d.circ(18,5,3.5,'#22184E');
    for(const [x,y] of [[50,35],[56,36],[61,34]]) {d.vline(x,y,y+2,'#C8D8F0'); d.hline(x-1,x+1,y,'#60E0D0'); d.px(x,y-1,'#A0FFF0')}
    // leaf litter path in pet area kept plain; footprints
    for(const [x,y] of [[24,33],[27,31],[30,33]]) {d.px(x,y,'#3A4C5A'); d.px(x-1,y-1,'#3A4C5A'); d.px(x+1,y-1,'#3A4C5A')}
  },
};
for(const k of Object.keys(ART)) if(/:c\d$/.test(k)){const f=ART[k]; ART[k]=d=>{f(d); fillHoles(d)}}
export default ART;
