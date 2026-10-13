# Pixel art brief: expedition souvenirs and postcards

You are a pixel artist for Align, a Korean study app with cute pixel pets. Pets go on expeditions and bring back **souvenirs** (기념품) and **postcards** (엽서). Each one has a name, description and emoji hint. Your job is to draw every assigned item as real pixel art, with lots of character. **Do not edit any repo files.** Only write your art file.

Folder: `tools/trip-art/` (called PX below).

## What to draw
Your item list is `PX/in_<N>.json` (N is given in your task):
- **Souvenir** ids end in `:s0`, `:s1`, `:s2`. Draw the object on a **32×32** transparent canvas. Make it a single clear object (or a small cluster) that fills most of the canvas, with a dark outline (`d.outline(...)` at the end), 2 or 3 shades per material, highlights, and small storytelling details from the description. It is shown big (≈ 6× scale) in a dialog and small (≈ 2×) in a collection grid, so the silhouette must read at a glance.
- **Postcard** ids end in `:c0`, `:c1`, `:c2`. Draw a **full 64×40 scene** of the place: sky or background, ground, and the landmark or story from the place name and message, plus atmosphere fitting `mood` (day, sunset, night, sea, underwater, snow, forest, desert, space, candy, city, indoor). **Fill every pixel** (no transparency). The app draws the pet standing in the **lower-left area (x 6–21, y 20–37)**. Keep that area as plain open ground or floor, and put the landmark and important details in the **center and right**. Make every postcard of every pet look different: different composition, colors and landmark. Nobody should be able to mistake one for another.

Use the pet's world for flavor. You can read the pet's definition in `/home/user/align/index.html` (grep `  <key>:{n:`) and its lines if needed, but the item list already gives you what you need. If a postcard's message mentions the pet or a friend doing something, you can draw props or hints of that, such as footprints, a dropped item or a sign. Don't draw the pet itself; the app adds it.

Style: cute, bright, readable pixel art in the spirit of the app's sprites. Use bold shapes and limited palettes: about 6 to 14 colors for a souvenir, up to about 24 for a scene. Use dithering or bands for gradients and avoid noisy random speckle everywhere. No text that needs reading, except at most 1 to 4 tiny symbolic letters or numbers drawn with pixels.

## How to draw: the toolkit
Write `PX/art_<N>.mjs`, an ES module whose default export maps each id to a draw function:
```js
export default {
  'cat:s0': d=>{ /* draw */ },
  'cat:c0': d=>{ /* draw */ },
};
```
`d` gives you (from `PX/lib.mjs`; read it):
- `d.W`, `d.H`: 32×32 for souvenirs, 64×40 for postcards.
- `px(x,y,c)`, `rect(x,y,w,h,c)`, `frame(x,y,w,h,c)`, `hline(x0,x1,y,c)`, `vline(x,y0,y1,c)`, `line(x0,y0,x1,y1,c)`
- `circ(cx,cy,r,c)` (filled), `ring(cx,cy,r,c)`, `ell(cx,cy,rx,ry,c)`, `poly([[x,y],...],c)` (filled), `grad(x,y,w,h,[colors])` (vertical bands), `dither(x,y,w,h,c1,c2)`
- `stamp(x,y,['..ab..','.abba.'],{a:'#..',b:'#..'})`: hand-placed pixels for faces, small details and symbols. `'.'` means skip.
- `mirrorX()`, `recolor(from,to)`, `outline(c)` (outline around everything drawn), `get(x,y)`, `clear(x,y)`
- `rnd()` / `ri(a,b)`: seeded randomness (deterministic). **Never use Math.random.**

Colors are always `'#RRGGBB'`. Look at `PX/example.mjs` and its render `PX/example.png` for the minimum quality bar. Aim higher, with more detail and personality.

## Check your work (required)
Render and LOOK at the image, using the Read tool on the PNG:
```
cd PX && node render.mjs art_<N>.mjs check_<N>.png          # everything
cd PX && node render.mjs art_<N>.mjs one.png 'cat:s1'         # one big
```
The renderer reports problems: errors, empty souvenirs, unfilled postcards, too many colors. Postcards show a grey box where the pet will stand. Fix anything that is unclear, ugly, or doesn't match its name. Review in batches (for example one pet at a time) so you actually inspect each drawing. Iterate until every item is clearly recognizable and charming.

When done, reply with only: `done <N>: <count> drawings`, plus one line naming any item you are unsure about.
