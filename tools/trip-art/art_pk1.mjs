// Pikmin pets: Rock, Winged, Ice, Glow
const A = {
  // ===== Rock Pikmin =====
  'pkrock:s0': d=>{ // crystal wall fragment
    const C1='#BFE8FF',C2='#7CC4F0',C3='#4A86D0',C4='#E8FAFF',P='#B89CF0',P2='#8468D0';
    d.poly([[6,26],[9,10],[15,3],[20,8],[25,6],[27,20],[23,28],[12,29]],C2);
    d.poly([[9,10],[15,3],[16,16],[9,22]],C1);         // left lit facet
    d.poly([[15,3],[20,8],[19,18],[16,16]],C4);        // top bright facet
    d.poly([[20,8],[25,6],[27,20],[19,18]],C3);        // right shadow facet
    d.poly([[6,26],[9,22],[16,16],[19,18],[12,29]],C2);
    d.poly([[19,18],[27,20],[23,28],[12,29]],P2);      // bottom dark
    d.poly([[19,18],[24,21],[21,26],[15,25]],P);
    // cracks from smash
    d.line(15,8,13,14,C3); d.line(13,14,15,18,C3); d.line(22,12,24,16,'#2E5AA0');
    d.vline(10,13,17,C4); d.px(11,12,C4); d.px(17,6,'#FFFFFF'); d.px(16,7,'#FFFFFF');
    // small chips flying
    d.poly([[27,26],[29,24],[30,27]],C2); d.poly([[3,18],[5,16],[5,19]],C1); d.px(28,9,C1);
    d.outline('#26304A');
    d.stamp(2,4,['..w..','.wWw.','wWWWw','.wWw.','..w..'],{w:'#BFE8FF',W:'#FFFFFF'});
    d.stamp(26,1,['.w.','wWw','.w.'],{w:'#BFE8FF',W:'#FFFFFF'});
  },
  'pkrock:s1': d=>{ // pebble pal with face
    const G1='#8E98AC',G2='#6C7690',G3='#B8C2D4',G4='#4C5470',M='#7FBF6A',M2='#5A9A4A';
    d.ell(16,19,12,9,G2);
    d.ell(15,17,11,8,G1);
    d.ell(12,13,6,3,G3); d.hline(9,13,11,'#DCE4F0');
    d.ell(18,24,9,2,G2);
    // little moss tuft + tiny sprout like pikmin
    d.stamp(17,7,['..ll..','.lLl..','l..Ll.','....lL','.....l'],{l:M,L:M2});
    d.vline(16,5,10,'#6A8F4A'); d.ell(16,4,1,1,M);
    // chips/speckles
    d.px(22,16,G4); d.px(23,17,G2); d.px(8,20,G4); d.px(25,21,G4);
    // face
    d.rect(11,17,2,3,'#1E2230'); d.rect(19,17,2,3,'#1E2230'); d.px(11,17,'#FFFFFF'); d.px(19,17,'#FFFFFF');
    d.hline(15,17,21,'#1E2230'); d.px(14,20,'#1E2230'); d.px(18,20,'#1E2230');
    d.rect(8,20,2,1,'#E89AA8'); d.rect(22,20,2,1,'#E89AA8');
    d.outline('#2A2E40');
    // shadow
  },
  'pkrock:s2': d=>{ // moai-like stone giant face
    const S1='#A89C8C',S2='#857A6C',S3='#C8BDAA',S4='#5E554A',M='#7CB85A',M2='#548A3C';
    d.poly([[8,6],[23,4],[25,29],[7,29]],S1);
    d.poly([[19,5],[23,4],[25,29],[20,29]],S2);   // shaded right side
    d.rect(6,9,20,4,S2); d.hline(6,25,9,S3);       // heavy brow
    d.rect(9,13,4,3,S4); d.rect(18,13,4,3,S4);       // deep eye sockets
    d.px(10,14,'#E8D888'); d.px(19,14,'#E8D888');   // faint glint
    d.poly([[14,12],[17,12],[19,22],[13,22]],S3);  // long nose
    d.poly([[17,12],[19,22],[17,22]],S2);
    d.hline(13,19,22,S4); d.px(14,21,S4); d.px(18,21,S4);
    d.rect(11,24,10,2,S2); d.hline(11,20,24,S4);    // pursed lips
    d.rect(8,26,16,3,S1); d.hline(8,24,28,S2);      // chin
    d.rect(5,12,2,8,S2); d.rect(25,12,2,8,S4);      // ears
    // moss cap & flower
    d.poly([[7,6],[12,3],[20,2],[25,5],[24,8],[8,8]],M);
    d.hline(8,24,8,M2); d.px(10,9,M); d.px(22,9,M2); d.px(15,9,M);
    d.vline(20,0,3,'#4A7A30'); d.stamp(18,-1,['.w.','wyw','.w.'],{w:'#FFFFFF',y:'#F8D040'});
    // cracks
    d.line(9,17,11,21,S4); d.line(22,19,23,23,S4); d.px(8,24,S4);
    d.rect(4,29,24,2,'#6F665A');
    d.outline('#2A2620');
  },
  'pkrock:c0': d=>{ // Stone Wall Alley (city)
    d.grad(0,0,64,10,['#8CCBF0','#A6D8F4','#C4E6F8']);
    d.ell(30,4,5,1,'#FFFFFF'); d.ell(52,3,3,1,'#FFFFFF');
    // far rooftops
    d.rect(24,5,14,8,'#E6C9A0'); d.poly([[23,6],[31,1],[39,6]],'#D06A50'); d.rect(28,8,3,3,'#6A90B8');
    d.rect(40,7,6,6,'#D8B8E0');
    // ground: cobbles
    d.rect(0,12,64,28,'#B8AE9C');
    for(let y=14;y<40;y+=3) for(let x=((y/3)%2)*3;x<64;x+=6){ d.hline(x,x+4,y,'#CEC4B0'); d.px(x+5,y,'#988E7C'); }
    for(let y=16;y<40;y+=3) d.hline(0,63,y,'#A69C8A');
    // left wall (behind pet, low and far up)
    d.rect(0,0,6,18,'#9C9488');
    for(let y=1;y<18;y+=4) d.hline(0,5,y,'#7C7468');
    // right stone wall
    d.poly([[38,13],[64,0],[64,34],[38,24]],'#A49A8C');
    const st=[[44,8,6,4],[51,6,6,5],[58,3,5,5],[41,14,5,4],[47,12,7,5],[55,10,8,6],[42,19,6,4],[49,18,6,5],[56,17,7,6],[45,24,5,4],[52,24,6,5],[59,24,5,6]];
    st.forEach(([x,y,w,h],i)=>{ d.rect(x,y,w,h,i%3?'#BCB2A2':'#C8BEAE'); d.hline(x,x+w-1,y,'#DAD2C2'); d.hline(x,x+w-1,y+h-1,'#867C70'); });
    d.rect(53,13,2,1,'#7CB85A'); d.rect(43,22,2,1,'#7CB85A'); d.px(60,22,'#7CB85A');
    // smashed hole in wall with rubble
    d.ell(50,21,3,3,'#3A3440'); d.px(48,19,'#867C70');
    d.stamp(44,27,['..aa.....b.','.abba.aa.bb','abbbbabba..'],{a:'#C8BEAE',b:'#8E8474'});
    // giant everyday object: a huge soda can leaning
    d.rect(24,16,10,16,'#E05050'); d.rect(24,16,10,2,'#D0D4DC'); d.hline(25,32,15,'#D0D4DC'); d.hline(26,31,14,'#E8ECF0'); d.rect(28,14,3,1,'#8A8E98'); d.hline(24,33,17,'#9A9EA8'); d.rect(24,30,10,2,'#B0B4BC');
    d.vline(25,18,29,'#F08A8A'); d.vline(32,18,29,'#B03838'); d.rect(27,21,4,4,'#FFFFFF'); d.rect(28,22,2,2,'#E05050');
    d.hline(23,35,33,'#988E7C');
    // flower pot on the wall
    d.rect(58,30,5,4,'#C8704A'); d.circ(60,28,2,'#F07A9A'); d.px(60,28,'#FFE070');
  },
  'pkrock:c1': d=>{ // Crystal Cave (night)
    d.rect(0,0,64,40,'#1C1830');
    d.grad(0,0,64,24,['#141026','#1C1834','#262044','#30285A']);
    // cave ceiling stalactites
    for(let x=0;x<64;x+=5){const h=d.ri(2,6); d.poly([[x,0],[x+4,0],[x+2,h]],'#0E0A1C');}
    // cave walls
    d.poly([[0,0],[8,0],[5,12],[3,22],[0,24]],'#0E0A1C');
    // glowing floor
    d.grad(0,26,64,14,['#3A2E66','#43357A','#4C3C84','#3A2E66']);
    for(let x=2;x<64;x+=7) d.hline(x,x+3,30+(x%3),'#5A4A98');
    // big crystal cluster center-right
    const cr=(x,y,w,h,c,hi)=>{ d.poly([[x,y],[x+w/2,y-h],[x+w,y]],c); d.line(x+w/2,y-h,x+w/2,y-1,hi); };
    d.ell(44,27,16,6,'#5C4AA0'); // glow halo
    d.ell(44,27,11,4,'#7462C0');
    cr(32,28,8,14,'#7CC4F0','#E8FAFF'); cr(38,28,10,22,'#9CE0FF','#FFFFFF'); cr(46,28,8,17,'#B89CF0','#F0E4FF');
    cr(52,28,6,10,'#7CC4F0','#E8FAFF'); cr(28,28,5,7,'#B89CF0','#F0E4FF');
    d.poly([[43,28],[48,8],[48,28]],'#5EA4E0'); // shade on big
    // right wall crystal
    d.poly([[64,6],[57,12],[64,16]],'#B89CF0'); d.poly([[64,18],[59,22],[64,25]],'#7CC4F0');
    // ceiling crystals
    d.poly([[24,0],[27,7],[30,0]],'#7CC4F0'); d.poly([[14,0],[16,4],[18,0]],'#B89CF0');
    // smashed small crystals scattered
    d.stamp(25,33,['.a.','aba'],{a:'#7CC4F0',b:'#E8FAFF'}); d.stamp(56,34,['a.','ab'],{a:'#B89CF0',b:'#F0E4FF'});
    // sparkles
    [[34,10],[55,6],[20,14],[60,30],[12,6]].forEach(([x,y])=>d.stamp(x-1,y-1,['.w.','wWw','.w.'],{w:'#9CE0FF',W:'#FFFFFF'}));
    // reflection puddle
    d.ell(44,35,8,1,'#6A5AB0'); d.hline(41,47,35,'#9CE0FF');
  },
  'pkrock:c2': d=>{ // Rocky Summit (day)
    d.grad(0,0,64,22,['#4A9AE0','#62AAE8','#7CBAEE','#98CCF2','#B4DCF6']);
    d.circ(10,6,3,'#FFF6B0'); d.circ(10,6,2,'#FFFFFF');
    // sea of clouds below
    d.rect(0,20,64,6,'#F0F6FC');
    for(let x=0;x<64;x+=8){ d.ell(x+4,20,5,2,'#FFFFFF'); }
    d.ell(56,22,8,2,'#DDE8F4');
    // distant peaks poking clouds
    d.poly([[22,21],[28,13],[34,21]],'#8A9CB8'); d.poly([[27,14],[28,13],[30,16],[27,16]],'#FFFFFF');
    // big rock summit right
    d.poly([[30,40],[40,14],[46,8],[50,10],[56,4],[64,12],[64,40]],'#8A8070');
    d.poly([[46,8],[50,10],[48,24],[40,30],[40,14]],'#A89E8C');
    d.poly([[56,4],[64,12],[64,40],[56,30]],'#6C6456');
    d.line(44,16,42,28,'#6C6456'); d.line(52,14,54,26,'#5A5246'); d.line(58,12,60,22,'#4C463C');
    d.hline(38,46,30,'#BCB2A0');
    // flag on top (planted by explorers)
    d.vline(56,0,4,'#5A4430'); d.poly([[57,0],[62,1],[57,3]],'#E04848');
    // foreground rocky ledge (pet area)
    d.rect(0,28,40,12,'#9A9080');
    d.poly([[0,26],[12,25],[26,26],[36,28],[0,30]],'#B4AA98');
    d.hline(0,30,26,'#C8BEAC');
    for(let x=2;x<38;x+=6) d.px(x,32+(x%3),'#7A7262');
    d.stamp(26,33,['.aa.','abba','bbbb'],{a:'#BCB2A0',b:'#7A7262'});
    // edelweiss-ish flowers
    d.stamp(32,24,['.w.','wyw','.w.'],{w:'#FFFFFF',y:'#F8D040'}); d.vline(33,27,28,'#5A9A4A');
    // birds
    d.stamp(20,8,['a.a','.a.'],{a:'#3A4A6A'}); d.stamp(34,5,['a.a','.a.'],{a:'#3A4A6A'});
  },

  // ===== Winged Pikmin =====
  'pkwing:s0': d=>{ // pink feather on the wind
    const P1='#F8A8C8',P2='#E07AA8',P3='#FFD4E4',P4='#B84A80',Q='#FFF4F8';
    const A=[7,27],B=[26,4], L=Math.hypot(B[0]-A[0],B[1]-A[1]), ux=(B[0]-A[0])/L, uy=(B[1]-A[1])/L, nx=-uy, ny=ux;
    const at=(u,w)=>[A[0]+ux*L*u+nx*w, A[1]+uy*L*u+ny*w];
    const wd=u=>6.5*Math.pow(Math.sin(Math.PI*Math.min(1,u)),0.7)*(u<0.15?u/0.15:1);
    const left=[],right=[],mid=[];
    for(let i=0;i<=20;i++){const u=0.08+0.92*i/20; left.push(at(u,-wd(u))); right.push(at(u,wd(u)*0.85)); mid.push(at(u,0));}
    d.poly([...left,...mid.slice().reverse()],P1);
    d.poly([...mid,...right.slice().reverse()],P2);
    d.poly([...left.slice(3,17).map(([x,y],i)=>[x+nx*1.5,y+ny*1.5]),...mid.slice(3,17).reverse().map(([x,y])=>[x-nx*2.5,y-ny*2.5])],P3);
    // notches (split barbs)
    [[0.45,-1],[0.62,1],[0.3,1]].forEach(([u,sd])=>{const w=wd(u)*(sd>0?0.85:1); d.poly([at(u,sd*(w+1)),at(u+0.03,sd*w*0.35),at(u+0.09,sd*(w+1))],null);});
    // barb lines
    [0.25,0.4,0.55,0.7,0.82].forEach(u=>{const [x0,y0]=at(u,0),[x1,y1]=at(u+0.08,-wd(u)*0.9); d.line(x0,y0,x1,y1,P3);});
    [0.3,0.48,0.66].forEach(u=>{const [x0,y0]=at(u,0),[x1,y1]=at(u+0.08,wd(u)*0.75); d.line(x0,y0,x1,y1,'#C8609A');});
    // fluffy down at base
    d.stamp(5,23,['.p.p','pPp.','.pp.'],{p:P3,P:Q});
    d.line(3,30,25,5,P4); d.line(4,29,9,23,Q);
    d.outline('#6A2A4A');
    // wind swirls
    d.stamp(21,21,['.bbb.','b...b','...b.','bb...'],{b:'#9CD4F0'});
    d.hline(24,30,27,'#9CD4F0'); d.hline(27,31,29,'#C4E8F8');
    d.stamp(1,5,['.bb','b..','.bb'],{b:'#C4E8F8'});
  },
  'pkwing:s1': d=>{ // balloon freed from a tree
    const R1='#F06080',R2='#C83C60',R3='#FF9AB0',W='#FFFFFF';
    d.ell(16,11,9,10,R1);
    d.ell(18,13,7,8,R1); d.ell(19,14,6,7,R2); d.ell(16,11,7,8,R1);
    d.ell(12,7,3,3,R3); d.rect(10,5,2,2,W); d.px(12,4,W);
    d.stamp(14,21,['.aaa.','..a..'],{a:R2});
    d.outline('#4A1A2A');
    // wavy string
    const sp=[[16,23],[17,24],[17,25],[16,26],[15,27],[15,28],[16,29],[17,30]]; sp.forEach(([x,y])=>d.px(x,y,'#7A6A6A'));
    // twig snagged on string
    d.line(9,25,21,28,'#8A5A34'); d.line(9,26,20,29,'#6A4222'); d.line(13,26,11,23,'#8A5A34');
    d.stamp(5,22,['.gg.','gGGg','.gG.'],{g:'#6CC05A',G:'#4A9A3C'}); d.stamp(21,25,['gg.','gGg','.g.'],{g:'#6CC05A',G:'#4A9A3C'});
    d.stamp(8,26,['ab'],{a:'#5A3A1A',b:'#5A3A1A'});
    // little sparkle
    d.stamp(26,3,['.y.','yYy','.y.'],{y:'#FFE070',Y:W});
  },
  'pkwing:s2': d=>{ // slice of rainbow
    const cols=['#F05A5A','#F8A040','#F8E058','#6CCB5A','#4AA8E8','#8A6AD8'];
    // arc band from left to right, broken jagged on the right
    cols.forEach((c,i)=>{ const r=14-i*1.6; for(let a=Math.PI;a<=Math.PI*1.82;a+=0.01){ for(let k=0;k<1.7;k+=0.5){ d.px(16+(r-k)*Math.cos(a),24+(r-k)*Math.sin(a),c);} } });
    // jagged broken right end
    for(let y=4;y<14;y++){ const xx=23+((y%3)); for(let x=xx;x<32;x++) d.clear(x,y); }
    // highlight dots
    d.px(5,14,'#FFD0D0'); d.px(7,10,'#FFE0B0');
    // cloud at bottom left
    d.ell(6,25,5,3,'#FFFFFF'); d.ell(11,26,4,3,'#FFFFFF'); d.ell(3,27,3,2,'#FFFFFF');
    d.hline(2,14,28,'#D8E8F4'); d.hline(3,13,29,'#D8E8F4');
    d.outline('#3A3460');
    d.stamp(25,15,['..w..','.wWw.','wWWWw','.wWw.','..w..'],{w:'#FFF2A0',W:'#FFFFFF'});
    d.stamp(27,4,['.w.','wWw','.w.'],{w:'#FFF2A0',W:'#FFFFFF'}); d.px(29,23,'#FFF2A0');
  },
  'pkwing:c0': d=>{ // Tulip Field (day)
    d.grad(0,0,64,14,['#7CC8F4','#92D2F4','#AADCF6','#C6E8F8']);
    d.ell(12,4,5,1,'#FFFFFF'); d.ell(40,6,4,1,'#FFFFFF');
    // windmill in the distance
    d.poly([[24,16],[26,7],[30,7],[32,16]],'#F4E8D0'); d.poly([[25,8],[28,4],[31,8]],'#B85A3A'); d.rect(27,12,2,4,'#7A5A3A');
    d.line(28,7,23,2,'#FFFFFF'); d.line(28,7,33,12,'#FFFFFF'); d.line(28,7,33,2,'#FFFFFF'); d.line(28,7,23,12,'#FFFFFF');
    // distant hill + striped rows
    d.rect(0,14,64,4,'#8ACB6A');
    const rows=[['#F05A6A',18],['#F8D048',21],['#F890C0',24],['#F07A40',27]];
    rows.forEach(([c,y],i)=>{ d.rect(0,y,64,3,'#6AB84A'); for(let x=(i%2);x<64;x+=2) d.px(x,y,c); for(let x=0;x<64;x+=3) d.px(x+(i%2),y+1,c); d.hline(0,63,y+2,'#5AA040'); });
    d.rect(0,30,64,10,'#7CC45A'); for(let x=1;x<64;x+=4) d.px(x,32+(x%5)%3,'#9AD878');
    d.hline(0,63,30,'#5AA040');
    // giant tulips in the foreground right (seen from a tiny pikmin)
    const tulip=(x,top,c,c2,c3)=>{ d.rect(x,top+10,2,40,'#3E8A34'); d.vline(x+1,top+10,39,'#5AAA44');
      d.poly([[x,top+20],[x-7,top+13],[x-5,top+12],[x,top+16]],'#5AAA44'); d.poly([[x+2,top+24],[x+8,top+17],[x+6,top+16],[x+2,top+20]],'#3E8A34');
      d.ell(x+0.5,top+6,5,5,c); d.rect(x-5,top,12,6,c);
      d.poly([[x-5,top+1],[x-5,top-4],[x-2,top]],c); d.poly([[x-2,top+1],[x+1,top-5],[x+4,top+1]],c3); d.poly([[x+3,top],[x+6,top-4],[x+6,top+1]],c);
      d.vline(x+1,top,top+9,c2); d.vline(x+2,top+1,top+9,c2); d.rect(x+5,top+2,2,6,c2);
      d.vline(x-3,top+1,top+7,'#FFFFFF'); d.px(x-4,top+3,'#FFFFFF'); };
    tulip(36,8,'#F05A6A','#C83A4A','#F88A9A'); tulip(49,14,'#F8D048','#D8A828','#FCE490'); tulip(59,5,'#F890C0','#D8609A','#FCB8D8');
    // bee & falling petal
    d.stamp(42,4,['.ww','yky','.k.'],{w:'#FFFFFF',y:'#F8D048',k:'#3A3020'});
    d.stamp(27,23,['aa','.a'],{a:'#F05A6A'});
  },
  'pkwing:c1': d=>{ // Island Across the Water (sea)
    d.grad(0,0,64,16,['#5AB4F0','#6ABEF2','#82CAF4','#9CD6F6','#B6E2F8']);
    d.ell(20,5,6,2,'#FFFFFF'); d.ell(26,4,3,1,'#FFFFFF');
    // sea
    d.grad(0,16,64,24,['#2E8AD0','#3696D8','#40A2DE','#4AAEE2']);
    for(let y=18;y<40;y+=3) for(let x=(y*5)%9;x<64;x+=9) d.hline(x,x+2,y,'#8ACFF0');
    // near shore (pet area) - sandy beach left
    d.poly([[0,24],[18,25],[26,30],[28,40],[0,40]],'#F2D9A0');
    d.poly([[0,24],[18,25],[26,30],[25,31],[17,27],[0,26]],'#FFFFFF');
    for(let i=0;i<14;i++) d.px(d.ri(1,24),d.ri(29,39),'#E2C080');
    // island right
    d.ell(48,19,12,3,'#F2D9A0'); d.ell(48,17,10,3,'#6CC05A'); d.ell(46,16,6,2,'#8AD470');
    d.hline(36,60,21,'#FFFFFF');
    // palm tree
    d.line(50,16,52,6,'#8A5A34'); d.line(51,16,53,6,'#A8743E');
    d.poly([[52,6],[45,8],[48,5]],'#3E9A3A'); d.poly([[52,6],[59,9],[56,5]],'#3E9A3A'); d.poly([[52,6],[50,1],[54,3]],'#5AB84A'); d.poly([[52,6],[58,3],[55,2]],'#5AB84A');
    d.circ(52,7,1,'#7A4A24');
    // dotted flight path from shore to island
    [[22,24],[25,21],[29,18],[33,16],[37,14],[41,13]].forEach(([x,y])=>d.px(x,y,'#FFFFFF'));
    // floating leaf boat & seagulls
    d.stamp(34,30,['g....g','.gggg.'],{g:'#4A9A3C'}); d.vline(36,27,29,'#8A5A34'); d.poly([[37,27],[40,29],[37,29]],'#F890C0');
    d.stamp(10,6,['a.a','.a.'],{a:'#3A4A6A'}); d.stamp(40,9,['a.a','.a.'],{a:'#3A4A6A'});
    d.stamp(56,32,['.ww.','w..w'],{w:'#FFFFFF'});
  },
  'pkwing:c2': d=>{ // Sky Above the Clouds (day, pastel)
    d.grad(0,0,64,30,['#F6C8E0','#F8D4E0','#FAE0D8','#FCEAD0','#FDF2D0','#E8F0F8']);
    // sun glow
    d.circ(46,10,6,'#FFF2C0'); d.circ(46,10,4,'#FFFBE8');
    // rainbow arc behind cloud castle
    ['#F07A7A','#F8B060','#F8E070','#8AD878','#7AB8F0','#A890E0'].forEach((c,i)=>{for(const k of [0,0.5]) d.ring(42,32,18-i-k,c);});
    // cloud castle / big cumulus right
    d.ell(52,28,13,6,'#FFFFFF'); d.ell(44,24,6,5,'#FFFFFF'); d.ell(56,21,7,6,'#FFFFFF'); d.ell(50,19,4,4,'#FFFFFF');
    d.ell(58,26,6,3,'#E4E6F4'); d.hline(40,63,31,'#E4E6F4');
    // small floating cloud islands
    d.ell(14,20,5,2,'#FFFFFF'); d.hline(10,18,22,'#E4E6F4'); d.ell(28,5,4,1,'#FFFFFF');
    // cloud floor (pet area)
    d.rect(0,30,64,10,'#FFFFFF');
    for(let x=0;x<64;x+=7) d.ell(x+3,30,4,2,'#FFFFFF');
    for(let x=2;x<64;x+=7) d.hline(x,x+4,34+((x/7|0)%2)*2,'#E4E6F4');
    d.hline(0,63,39,'#D8DCEE');
    // drifting feathers & a stray balloon
    d.stamp(34,20,['..p','.pP','pP.'],{p:'#F8A8C8',P:'#E87AA8'});
    d.ell(9,8,2,3,'#7AB8F0'); d.px(8,6,'#FFFFFF'); d.line(9,11,10,15,'#7A6A8A');
    // birds
    d.stamp(18,10,['a.a','.a.'],{a:'#8A6A9A'});
  },

  // ===== Ice Pikmin =====
  'pkice:s0': d=>{ // ice cube
    const T='#E4F8FF',L='#B4E4F8',R='#7CC0E8',D='#5AA0D8',W='#FFFFFF';
    d.poly([[4,10],[16,4],[28,10],[16,16]],T);          // top
    d.poly([[4,10],[16,16],[16,29],[4,23]],L);          // left
    d.poly([[16,16],[28,10],[28,23],[16,29]],R);        // right
    d.line(16,16,16,29,'#E4F8FF');
    // frost on top edge & highlights
    d.line(6,10,15,5,W); d.line(5,11,9,13,W); d.vline(5,12,20,W); d.vline(6,13,16,'#D4F0FC');
    d.line(18,6,24,9,'#F4FCFF');
    // inner bubbles / cracks
    d.px(9,17,W); d.px(10,19,'#D4F0FC'); d.px(8,21,W); d.px(21,18,'#B4E4F8'); d.px(23,21,'#B4E4F8'); d.px(20,23,'#A4D8F2');
    d.line(22,13,25,18,D); d.line(25,18,24,22,D); d.line(11,20,13,24,'#8CCCEC');
    // frost dither bottom right
    d.dither(19,24,8,3,R,D); d.poly([[16,29],[28,23],[28,26],[16,32]],null);
    d.outline('#2A4A78');
    // cold sparkles and mist
    d.stamp(25,0,['..w..','w.w.w','.www.','w.w.w','..w..'],{w:'#9CD8F8'});
    d.stamp(1,25,['.ccc','c...'],{c:'#C4E8F8'}); d.stamp(28,27,['cc','..'],{c:'#C4E8F8'});
  },
  'pkice:s1': d=>{ // snowflake brooch
    const S='#9CD4F4',S2='#5A9AD8',W='#FFFFFF',G='#C0C8DC';
    const cx=16,cy=16;
    for(let k=0;k<6;k++){ const a=k*Math.PI/3-Math.PI/2, ca=Math.cos(a), sa=Math.sin(a);
      const P=(r,o)=>[cx+ca*r-sa*o, cy+sa*r+ca*o];
      for(const o of [-0.5,0.5]) d.line(...P(0,o),...P(13,o),S);
      d.line(...P(7,0),...P(10,-3.5),S); d.line(...P(7,0),...P(10,3.5),S);
      d.line(...P(10,0),...P(12,-2.5),S); d.line(...P(10,0),...P(12,2.5),S);
      d.line(...P(4,0),...P(5.5,-2),S2); d.line(...P(4,0),...P(5.5,2),S2);
      d.px(...P(13,0),W); d.px(...P(8,0),W);
    }
    d.circ(cx,cy,3,G); d.circ(cx,cy,2,'#80D0F8'); d.px(15,15,W); d.px(17,17,'#4A90D0');
    d.outline('#2A3A6A');
    d.stamp(25,25,['..w..','.wWw.','..w..'],{w:'#C8ECFF',W:W}); d.stamp(3,4,['.w.','wWw','.w.'],{w:'#C8ECFF',W:W});
  },
  'pkice:s2': d=>{ // glacier shaved ice
    const C='#D8F0FF',C2='#A8D8F4',W='#FFFFFF',B='#5AA8E8',B2='#3A80D0',G='#E8F4F8',G2='#B4CCD8';
    // cup
    d.poly([[5,19],[27,19],[23,28],[9,28]],G); d.poly([[19,19],[27,19],[23,28],[19,28]],G2);
    d.rect(10,28,12,2,G2); d.rect(8,30,16,1,'#98B0C0');
    d.hline(5,27,19,'#9AB8CA'); d.vline(8,20,25,W);
    // shaved ice mound like a glacier peak
    d.poly([[4,19],[7,12],[11,8],[14,4],[17,6],[20,3],[24,9],[28,19]],C);
    d.poly([[14,4],[17,6],[20,3],[19,11],[15,10]],W);
    d.poly([[20,3],[24,9],[28,19],[19,19],[21,11]],C2);
    // blue syrup drizzle
    d.poly([[9,13],[13,10],[18,12],[22,10],[25,14],[25,17],[22,15],[20,18],[17,15],[14,17],[12,14],[9,16]],B);
    d.hline(12,16,12,'#9CD0F8'); d.px(22,13,B2); d.px(20,17,B2); d.px(14,16,B2); d.vline(25,15,17,B2);
    // ancient ice crystal on top & mint leaf
    d.poly([[16,1],[18,-2],[19,2],[17,4]],'#7CD8F8'); d.px(17,0,W);
    d.stamp(9,6,['.gg','gGg','gg.'],{g:'#6CC07A',G:'#4A9A5A'});
    // spoon
    d.line(24,6,29,0,'#C8D0DC'); d.ell(23,7,1,1,'#E0E6EE');
    // texture dots on mound
    d.px(8,17,C2); d.px(11,18,C2); d.px(26,16,'#C8E6F8'); d.px(7,15,W);
    d.outline('#2A4060');
  },
  'pkice:c0': d=>{ // Frozen Fountain (snow, plaza)
    d.grad(0,0,64,20,['#A8B8D8','#B4C4E0','#C0D0E6','#CCDCEC']);
    // bare trees & lamp in back
    d.vline(4,3,20,'#6A5A6A'); d.line(4,8,1,5,'#6A5A6A'); d.line(4,10,8,6,'#6A5A6A'); d.px(1,5,'#FFFFFF'); d.px(8,6,'#FFFFFF');
    d.rect(28,6,1,14,'#3A4458'); d.rect(27,4,3,3,'#FFE8A0'); d.hline(27,29,4,'#3A4458');
    // hedge with snow
    d.rect(0,17,64,4,'#5A8A7A'); d.hline(0,63,17,'#FFFFFF'); for(let x=0;x<64;x+=5) d.px(x+2,18,'#FFFFFF');
    // snowy plaza ground
    d.rect(0,21,64,19,'#EEF4FA');
    for(let y=24;y<40;y+=4) for(let x=(y%8)?0:4;x<64;x+=8) d.hline(x,x+5,y,'#DCE6F2');
    // fountain basin
    d.ell(45,31,15,5,'#9AA8BC'); d.ell(45,30,14,4,'#B8C4D4'); d.ell(45,30,12,3,'#C8ECFA'); d.hline(36,54,30,'#E4F8FF');
    d.hline(32,58,27,'#FFFFFF'); d.ell(45,27,13,1,'#FFFFFF');
    // pillar and upper bowl
    d.rect(43,16,4,13,'#B8C4D4'); d.vline(43,16,28,'#D4DCE8');
    d.ell(45,16,7,2,'#9AA8BC'); d.hline(38,52,14,'#FFFFFF');
    d.rect(44,8,2,7,'#B8C4D4'); d.ell(45,8,3,1,'#9AA8BC'); d.ell(45,7,2,1,'#FFFFFF');
    // frozen water arcs mid-splash
    d.line(45,6,41,4,'#CCF0FF'); d.line(41,4,38,8,'#CCF0FF'); d.line(45,6,49,4,'#CCF0FF'); d.line(49,4,52,8,'#CCF0FF'); d.px(45,4,'#FFFFFF');
    d.line(38,17,35,21,'#A8E0F8'); d.line(35,21,34,26,'#A8E0F8'); d.line(52,17,55,21,'#A8E0F8'); d.line(55,21,56,26,'#A8E0F8');
    // icicles
    [39,41,48,50,52].forEach((x,i)=>d.vline(x,17,17+1+(i%2)*2,'#E4F8FF'));
    [34,37,53,56].forEach((x,i)=>d.vline(x,28,29+(i%2),'#E4F8FF'));
    // coin frozen in ice + snowman tiny
    d.px(47,30,'#F8D048');
    d.circ(26,33,2,'#FFFFFF'); d.circ(26,29,1.5,'#FFFFFF'); d.px(25,29,'#2A2A3A'); d.px(27,29,'#2A2A3A'); d.px(26,30,'#F08A30'); d.hline(24,28,31,'#E05050');
    // snowfall
    for(let i=0;i<30;i++){const x=d.ri(0,63),y=d.ri(0,22); if(!(x>=6&&x<=21&&y>=20)) d.px(x,y,'#FFFFFF');}
  },
  'pkice:c1': d=>{ // Snowfield (bright snow day)
    d.grad(0,0,64,16,['#5AA8E8','#78B8EE','#96CAF2','#B4DAF6']);
    d.circ(54,5,3,'#FFFBE0'); d.circ(54,5,2,'#FFFFFF');
    // far mountains
    d.poly([[0,16],[10,6],[18,12],[28,3],[40,14],[50,8],[64,16]],'#C4D8EE');
    d.poly([[28,3],[31,6],[29,7],[26,5]],'#FFFFFF'); d.poly([[10,6],[13,9],[8,8]],'#FFFFFF'); d.poly([[50,8],[53,10],[48,10]],'#FFFFFF');
    d.poly([[28,3],[40,14],[30,14]],'#A8C2E0');
    // vast snow plain with soft blue drifts
    d.rect(0,16,64,24,'#FFFFFF');
    d.ell(48,18,18,2,'#E6F0FA'); d.ell(30,24,22,2,'#EEF4FC'); d.ell(56,30,14,2,'#E6F0FA'); d.ell(36,37,20,2,'#EEF4FC');
    d.hline(0,63,16,'#DCEAF6');
    // lone snowy pine
    d.vline(46,24,28,'#6A4A3A');
    d.poly([[46,8],[40,16],[52,16]],'#3A7A5A'); d.poly([[46,12],[39,21],[53,21]],'#3A7A5A'); d.poly([[46,16],[38,25],[54,25]],'#3A7A5A');
    d.poly([[46,8],[43,12],[49,12]],'#FFFFFF'); d.hline(41,51,16,'#FFFFFF'); d.hline(40,52,21,'#FFFFFF'); d.hline(38,54,25,'#FFFFFF');
    d.ell(46,28,6,1,'#D4E4F4');
    // footprint trail leading toward the tree (tiny pikmin steps)
    [[22,33],[25,31],[28,32],[31,30],[34,31],[37,29],[40,29]].forEach(([x,y])=>d.px(x,y,'#A8C4E0'));
    // ice crystal poking from snow, and a snow hare track
    d.stamp(57,30,['.a.','aba','aba'],{a:'#7CC8F0',b:'#E4F8FF'});
    d.stamp(26,20,['c.c.','.c.c'],{c:'#C8DCEE'});
    // drifting glitter
    [[16,6],[36,9],[60,20],[8,18]].forEach(([x,y])=>d.px(x,y,'#FFFFFF'));
  },
  'pkice:c2': d=>{ // Distant Tundra (aurora twilight, sea ice, penguins)
    d.grad(0,0,64,22,['#0E1E3A','#14284A','#1A3458','#22426A','#2E5480']);
    // aurora ribbons
    for(let x=0;x<64;x++){ const y=6+Math.round(3*Math.sin(x/7)); d.vline(x,y,y+3,(x%2)?'#4AE0A0':'#38C890'); d.px(x,y+4,'#2A9C80'); const y2=3+Math.round(2*Math.sin(x/5+1)); if(x>24) d.px(x,y2,'#A07AE8'); }
    [[4,2],[20,1],[40,15],[58,14],[12,15],[50,1]].forEach(([x,y])=>d.px(x,y,'#FFFFFF'));
    // dark sea band with ice floes
    d.rect(0,16,64,6,'#183A5A'); d.hline(0,63,16,'#2A5478');
    d.ell(30,18,4,1,'#D8ECF8'); d.ell(40,20,3,0,'#D8ECF8'); d.ell(8,19,3,0,'#D8ECF8');
    for(let x=2;x<64;x+=6) d.px(x,19+(x%2),'#4AE0A0');
    // big iceberg right
    d.poly([[44,18],[49,7],[53,10],[58,3],[64,18]],'#D8ECF8'); d.poly([[58,3],[64,18],[57,18],[56,9]],'#9CC4E4'); d.poly([[49,7],[51,10],[49,15]],'#FFFFFF');
    d.hline(44,63,18,'#7AA8CC');
    // snowy ice shelf foreground
    d.rect(0,21,64,19,'#E4F0FA'); d.hline(0,63,21,'#FFFFFF'); d.hline(0,63,22,'#C4D8EA');
    d.ell(42,34,16,2,'#CCDFEF'); d.ell(16,38,12,1,'#D4E6F4');
    // igloo
    d.ell(31,30,7,6,'#8AA8C8'); d.ell(31,30,6,5,'#F4FAFF'); d.rect(23,31,17,5,'#E4F0FA'); d.hline(23,39,35,'#C4D8EA');
    d.hline(26,36,28,'#C4D8EA'); d.hline(25,37,31,'#C4D8EA'); d.vline(29,26,28,'#C4D8EA'); d.vline(33,29,31,'#C4D8EA');
    d.rect(29,31,4,4,'#2A3A58'); d.hline(29,32,31,'#3A4A70');
    // penguin pals on the ice
    const peng=(x,y)=>d.stamp(x,y,['.kk.','kwwk','kwwk','kwwk','.yy.'],{k:'#1E2436',w:'#FFFFFF',y:'#F8B040'});
    peng(44,29); peng(49,30); peng(54,28); d.px(46,29,'#F8B040'); d.px(51,30,'#F8B040'); d.px(56,28,'#F8B040');
    // fish dropped on ice
    d.stamp(40,36,['.bb.b','bbbbb','.bb.b'],{b:'#7AA8C8'});
  },

  // ===== Glow Pikmin =====
  'pkglow:s0': d=>{ // glowing seed
    const H1='#2A5A3A',H2='#3E8A4A',G1='#A8F070',G2='#E4FFB0',G3='#6CD050',W='#FFFFFF';
    // glow halo (soft, not outlined: drawn after outline)
    d.poly([[16,4],[22,12],[24,19],[21,26],[16,28],[11,26],[8,19],[10,12]],G3);
    d.poly([[16,6],[21,13],[22,19],[19,24],[16,25],[12,23],[10,18],[12,12]],G1);
    d.ell(15,18,4,5,G2); d.vline(13,14,20,W); d.px(14,13,W);
    d.line(16,8,16,25,'#58B848'); d.line(17,10,19,22,'#4AA040');
    // husk cap at the bottom & sprout top
    d.poly([[10,23],[22,23],[19,28],[13,28]],H2); d.hline(11,21,23,'#5AAA5A'); d.px(14,26,H1); d.px(18,26,H1);
    d.vline(16,1,4,'#4A8A3A'); d.stamp(13,0,['gg...','.g...'],{g:'#7CD060'}); d.stamp(17,0,['..gg','..g.'],{g:'#7CD060'});
    d.outline('#1E3A2A');
    // glow sparkles around
    d.stamp(3,8,['..y..','..y..','yyWyy','..y..','..y..'],{y:'#D8FF90',W:W});
    d.stamp(26,4,['.y.','yWy','.y.'],{y:'#D8FF90',W:W}); d.stamp(25,24,['.y.','yWy','.y.'],{y:'#D8FF90',W:W});
    d.px(5,22,'#D8FF90'); d.px(28,15,'#D8FF90');
  },
  'pkglow:s1': d=>{ // firefly lantern
    const P='#F8C860',P2='#F09A40',P3='#FFF0B0',R='#C8503A',R2='#8A3226',B='#7A5230',Y='#FFFFA0',W='#FFFFFF';
    // twig handle
    d.line(6,3,26,3,B); d.line(8,2,24,2,'#9A6A40'); d.vline(16,3,6,'#5A3A20');
    d.stamp(23,0,['.gg','gg.'],{g:'#6CB84A'});
    // top & bottom caps
    d.rect(11,6,11,3,R); d.hline(11,21,6,'#E07050'); d.rect(11,26,11,3,R); d.hline(11,21,28,R2);
    // paper body (rounded)
    d.ell(16,17,10,9,P2); d.ell(15,16,9,8,P); d.ell(14,15,5,5,P3);
    // ribs
    [12,17,22].forEach(y=>d.hline(7,25,y,'#E0A050')); d.vline(16,9,25,'#E8B050');
    // fireflies glowing inside
    [[12,13],[18,15],[14,20],[20,21],[16,11]].forEach(([x,y])=>{d.px(x,y,W); d.px(x+1,y,Y);});
    // tassel
    d.vline(16,29,31,R); d.px(15,31,R); d.px(17,31,R);
    d.outline('#3A2218');
    // fireflies outside
    d.stamp(26,13,['.w.','wYw','.k.'],{w:'#E0F0FF',Y:Y,k:'#3A3020'}); d.stamp(2,21,['.w.','wYw','.k.'],{w:'#E0F0FF',Y:Y,k:'#3A3020'});
    d.px(28,22,Y); d.px(4,10,Y);
  },
  'pkglow:s2': d=>{ // shard of moonlight
    const M1='#FFF4B8',M2='#F8E080',M3='#E0C058',W='#FFFFFF';
    // crescent
    d.circ(15,16,12,M2); d.circ(20,13,10,null);
    d.circ(14,17,10,M1); d.circ(20,13,10,null);
    // jagged broken edge on upper tip
    d.poly([[11,3],[14,5],[12,7],[15,9],[9,9],[8,4]],null);
    d.poly([[9,5],[12,7],[9,9]],M1);
    // craters
    d.circ(7,18,1,M3); d.px(11,24,M3); d.px(10,25,M3); d.circ(6,13,0.6,M3);
    d.line(5,12,4,18,W); d.px(5,20,W);
    d.outline('#4A3A70');
    // moonlight dust drifting
    d.stamp(21,18,['.y.','yWy','.y.'],{y:M1,W:W}); d.stamp(25,10,['..y..','.yWy.','yWWWy','.yWy.','..y..'],{y:M1,W:W});
    d.px(22,25,M1); d.px(27,22,'#C8B8F8'); d.px(19,4,'#C8B8F8'); d.px(28,4,M1);
  },
  'pkglow:c0': d=>{ // Park at Night
    d.grad(0,0,64,24,['#141C3A','#18224A','#1E2A56','#263464','#2E3E70']);
    for(let i=0;i<20;i++) d.px(d.ri(0,63),d.ri(0,16),d.rnd()<.3?'#FFFFFF':'#A8B4E0');
    d.circ(8,6,3,'#FFF4C8'); d.circ(9,5,2,'#FFFBE8');
    // city skyline far
    [[22,15,5,9],[28,12,4,12],[33,16,6,8],[40,14,4,10]].forEach(([x,y,w,h])=>{d.rect(x,y,w,h,'#2A2E50'); d.px(x+1,y+2,'#F8D870'); d.px(x+2,y+5,'#F8D870');});
    // big tree silhouette right
    d.circ(56,10,9,'#1E3A3A'); d.circ(48,14,6,'#1E3A3A'); d.circ(62,16,6,'#1E3A3A'); d.rect(54,16,4,10,'#2A2420');
    d.circ(54,8,3,'#28484A');
    // grass
    d.rect(0,24,64,16,'#2A5A3A'); d.hline(0,63,24,'#3A7448');
    for(let x=1;x<64;x+=3) d.px(x,25+(x%4),'#3A7448');
    // path
    d.poly([[24,40],[30,24],[36,24],[46,40]],'#5A5868'); d.hline(31,35,24,'#6A687A');
    // lamp post with light pool
    d.ell(44,31,9,3,'#4A7A50'); d.ell(44,31,5,2,'#6A9A60');
    d.vline(44,9,30,'#1A1A2A'); d.rect(42,7,5,4,'#FFE888'); d.hline(41,47,6,'#1A1A2A'); d.px(44,8,'#FFFFFF');
    d.px(40,11,'#4A4A30'); d.px(48,11,'#4A4A30');
    // bench
    d.rect(49,25,11,1,'#8A5A34'); d.rect(49,27,11,1,'#8A5A34'); d.rect(49,29,11,1,'#6A4224'); d.vline(50,29,32,'#3A2A20'); d.vline(58,29,32,'#3A2A20');
    // fireflies / glow spores
    [[28,19],[34,28],[60,22],[38,16],[24,30],[52,35]].forEach(([x,y])=>{d.px(x,y,'#D8FF90');});
    d.stamp(30,31,['.y.','yWy','.y.'],{y:'#A8F070',W:'#FFFFFF'});
  },
  'pkglow:c1': d=>{ // Glowing Mushroom Woods
    d.grad(0,0,64,40,['#120A24','#180E30','#1E1238','#24163E','#1A1030']);
    // tree trunks in back
    [[2,3],[26,4],[40,3],[60,4]].forEach(([x,w])=>{d.rect(x,0,w,30,'#24183A'); d.vline(x,0,29,'#2E2048');});
    // mossy ground
    d.rect(0,30,64,10,'#1E3A34'); d.hline(0,63,30,'#2E5A48');
    for(let x=0;x<64;x+=5) d.px(x+2,32+(x%3),'#2E5A48');
    // mushroom builder
    const mush=(x,y,rw,rh,stemH,c,c2,dot)=>{
      d.ell(x,y+rh+stemH,rw+3,2,'#2E5A6A');            // glow on ground
      d.rect(x-1,y+rh-1,3,stemH+1,'#E8E0F0'); d.vline(x+1,y+rh,y+rh+stemH,'#B8B0D0');
      d.ell(x,y+rh,rw,rh,c2); d.ell(x,y+rh-1,rw,rh,c); d.hline(x-rw,x+rw,y+rh+1,c2);
      [[-rw/2,0],[rw/3,-rh/2],[0,1]].forEach(([dx,dy])=>d.px(x+dx,y+rh+dy-1,dot));
    };
    mush(46,4,10,6,16,'#4AE0E8','#2AA0C0','#E8FFFF');
    mush(33,16,5,3,10,'#F070D8','#B040A8','#FFD8F8');
    mush(58,20,4,3,7,'#A8F070','#6CB040','#F0FFD0');
    mush(26,25,2,2,4,'#4AE0E8','#2AA0C0','#E8FFFF');
    // small cluster bottom right
    d.ell(52,33,2,1,'#F070D8'); d.vline(52,34,35,'#E8E0F0'); d.ell(55,34,1,1,'#F070D8'); d.vline(55,35,36,'#E8E0F0');
    // gills shadow under big cap
    d.hline(38,54,12,'#1E7890');
    // floating spores
    [[10,4],[20,10],[30,6],[56,26],[38,24],[14,14],[62,6],[24,18]].forEach(([x,y],i)=>d.px(x,y,['#4AE0E8','#F070D8','#D8FF90'][i%3]));
    d.stamp(17,6,['.c.','cWc','.c.'],{c:'#4AE0E8',W:'#FFFFFF'});
  },
  'pkglow:c2': d=>{ // Where the Star Fell
    d.grad(0,0,64,26,['#1A0E3A','#24124A','#321A5A','#462468','#5E3070','#7A3E70']);
    for(let i=0;i<22;i++) d.px(d.ri(0,63),d.ri(0,18),d.rnd()<.4?'#FFFFFF':'#C8B0F0');
    // star trail streak from top-left to crater
    d.line(14,1,44,20,'#F8E0A0'); d.line(14,2,44,21,'#C890D0'); d.line(20,4,44,19,'#FFF8E0');
    // distant hills
    d.poly([[0,26],[10,20],[22,24],[34,18],[48,23],[64,19],[64,28],[0,28]],'#2A1A40');
    // ground
    d.rect(0,27,64,13,'#3A2A50'); d.hline(0,63,27,'#4A3A64');
    for(let x=0;x<64;x+=4) d.px(x+1,30+(x%5)%4,'#4A3A64');
    // glow halo (soft bands)
    d.ell(46,23,13,9,'#4E2C70'); d.ell(46,23,10,7,'#6A3E88'); d.ell(46,23,7,5,'#9068A8');
    // crater rim and bowl
    d.ell(46,31,15,4,'#5A4A78'); d.ell(46,31,13,3,'#241A36'); d.ell(46,32,10,2,'#1A1228');
    d.ell(46,30,5,1,'#C88050'); d.hline(43,49,29,'#F8D080');
    // fallen star (cute 5-point)
    d.stamp(40,19,[
      '.....y.....',
      '....yYy....',
      '....yYy....',
      'yyyyyWYyyyy',
      '.yYYWWWYYy.',
      '..yYWWWYy..',
      '..yYYWYYy..',
      '.yYYy.yYYy.',
      '.yy.....yy.'],{y:'#F8C840',Y:'#FFE880',W:'#FFFFF0'});
    d.px(44,23,'#3A2A20'); d.px(46,23,'#3A2A20');
    // rubble & sparkles scattered
    d.stamp(30,32,['.a.','aba'],{a:'#5A4A78',b:'#8A7AA8'}); d.stamp(58,33,['aa','ab'],{a:'#5A4A78',b:'#8A7AA8'});
    [[36,14],[56,15],[52,32],[38,35],[60,24]].forEach(([x,y])=>d.stamp(x-1,y-1,['.y.','yWy','.y.'],{y:'#FFE880',W:'#FFFFFF'}));
    d.px(28,36,'#FFE880'); d.px(25,29,'#FFE880');
  },
};
export default A;
