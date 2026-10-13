// 픽셀 그림 도구. 그림 하나 = (d)=>{...}. souvenir(기념품) 32×32, postcard(엽서 풍경) 64×40. 색은 '#RRGGBB'.
export function canvas(W,H,seed){
  const G=Array.from({length:H},()=>Array(W).fill(null)); let s=(seed>>>0)||1;
  const d={W,H,G,
    rnd(){s^=s<<13; s^=s>>>17; s^=s<<5; return (s>>>0)/4294967296}, // Math.random 대신 (항상 같은 그림)
    ri(a,b){return a+Math.floor(d.rnd()*(b-a+1))},
    in(x,y){return x>=0&&y>=0&&x<W&&y<H},
    px(x,y,c){x=Math.round(x); y=Math.round(y); if(d.in(x,y)) G[y][x]=c},
    get(x,y){return d.in(x,y)?G[y][x]:null},
    clear(x,y){if(d.in(x,y)) G[y][x]=null},
    rect(x,y,w,h,c){for(let j=0;j<h;j++)for(let i=0;i<w;i++) d.px(x+i,y+j,c)},
    frame(x,y,w,h,c){for(let i=0;i<w;i++){d.px(x+i,y,c); d.px(x+i,y+h-1,c)} for(let j=0;j<h;j++){d.px(x,y+j,c); d.px(x+w-1,y+j,c)}},
    hline(x0,x1,y,c){for(let x=Math.min(x0,x1);x<=Math.max(x0,x1);x++) d.px(x,y,c)},
    vline(x,y0,y1,c){for(let y=Math.min(y0,y1);y<=Math.max(y0,y1);y++) d.px(x,y,c)},
    line(x0,y0,x1,y1,c){x0=Math.round(x0);y0=Math.round(y0);x1=Math.round(x1);y1=Math.round(y1); const dx=Math.abs(x1-x0), dy=-Math.abs(y1-y0), sx=x0<x1?1:-1, sy=y0<y1?1:-1; let e=dx+dy; for(;;){d.px(x0,y0,c); if(x0===x1&&y0===y1) break; const e2=2*e; if(e2>=dy){e+=dy; x0+=sx} if(e2<=dx){e+=dx; y0+=sy}}},
    circ(cx,cy,r,c){for(let y=Math.floor(cy-r);y<=Math.ceil(cy+r);y++)for(let x=Math.floor(cx-r);x<=Math.ceil(cx+r);x++) if((x-cx)**2+(y-cy)**2<=r*r+r*.8) d.px(x,y,c)},
    ring(cx,cy,r,c){for(let y=Math.floor(cy-r-1);y<=Math.ceil(cy+r+1);y++)for(let x=Math.floor(cx-r-1);x<=Math.ceil(cx+r+1);x++){const q=Math.sqrt((x-cx)**2+(y-cy)**2); if(Math.abs(q-r)<.6) d.px(x,y,c)}},
    ell(cx,cy,rx,ry,c){for(let y=Math.floor(cy-ry);y<=Math.ceil(cy+ry);y++)for(let x=Math.floor(cx-rx);x<=Math.ceil(cx+rx);x++) if(((x-cx)/(rx+.4))**2+((y-cy)/(ry+.4))**2<=1) d.px(x,y,c)},
    poly(pts,c){const ys=pts.map(p=>p[1]); for(let y=Math.floor(Math.min(...ys));y<=Math.ceil(Math.max(...ys));y++){const xs=[]; for(let i=0;i<pts.length;i++){const [ax,ay]=pts[i], [bx,by]=pts[(i+1)%pts.length]; if((ay<=y+.5&&by>y+.5)||(by<=y+.5&&ay>y+.5)) xs.push(ax+(y+.5-ay)*(bx-ax)/(by-ay))} xs.sort((a,b)=>a-b); for(let i=0;i+1<xs.length;i+=2) for(let x=Math.ceil(xs[i]-.5);x<=Math.floor(xs[i+1]-.5);x++) d.px(x,y,c)}},
    grad(x,y,w,h,cols){for(let j=0;j<h;j++) d.hline(x,x+w-1,y+j,cols[Math.min(cols.length-1,Math.floor(j*cols.length/h))])}, // 위→아래 색 띠
    dither(x,y,w,h,c1,c2){for(let j=0;j<h;j++)for(let i=0;i<w;i++) d.px(x+i,y+j,(i+j)%2?c2:c1)},
    stamp(x,y,rows,pal){rows.forEach((r,j)=>[...r].forEach((ch,i)=>{if(ch!=='.'&&ch!==' '){if(!pal[ch]) throw new Error('stamp: no color for '+ch); d.px(x+i,y+j,pal[ch])}}))}, // 손으로 찍은 점 그림
    mirrorX(){for(let y=0;y<H;y++)for(let x=0;x<W/2;x++){const c=G[y][x]; if(c) G[y][W-1-x]=c}}, // 왼쪽 반을 오른쪽에 거울처럼
    recolor(from,to){for(let y=0;y<H;y++)for(let x=0;x<W;x++) if(G[y][x]===from) G[y][x]=to},
    outline(c){const add=[]; for(let y=0;y<H;y++)for(let x=0;x<W;x++) if(!G[y][x]&&[[1,0],[-1,0],[0,1],[0,-1]].some(([a,b])=>d.get(x+a,y+b)&&d.get(x+a,y+b)!==c)) add.push([x,y]); add.forEach(([x,y])=>G[y][x]=c)}, // 빈칸 쪽 테두리
  };
  return d;
}
export const SIZE={s:[32,32],c:[64,40]};
export const sizeOf=id=>SIZE[id.split(':')[1][0]];
export function hash(str){let h=2166136261; for(const ch of str){h^=ch.codePointAt(0); h=Math.imul(h,16777619)} return h>>>0}
export function draw(id,fn){const [W,H]=sizeOf(id), d=canvas(W,H,hash(id)); fn(d); return d.G}
