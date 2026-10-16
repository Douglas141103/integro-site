const paths={
 heart:'M12 21S2 15 2 8a5 5 0 0 1 10-1A5 5 0 0 1 22 8c0 7-10 13-10 13Z',
 bolt:'m14 2-9 12h6l-1 8 9-13h-6Z',power:'m14 2-9 12h6l-1 8 9-13h-6Z',
 sword:'m4 21 5-5m-4-4 7 7M9 15 20 3l1 6-9 9',
 star:'m12 2 3 7 7 1-5 5 1 7-6-4-6 4 1-7-5-5 7-1Z',
 crown:'m3 7 4 5 5-8 5 8 4-5-2 14H5Z',
 coin:'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0ZM14 6l-5 7h5l-3 5',
 fruit:'M12 7C4 2 0 11 5 18c3 5 5 2 7 2s4 3 7-2c5-7 1-16-7-11Zm0-1q0-5 6-4',
 bag:'M6 7h12l3 14H3ZM8 7V5a4 4 0 0 1 8 0v2M8 13h8',
 scroll:'M6 3h13v17H7V7H3V5a2 2 0 0 1 3-2ZM10 8h6m-6 4h6m-6 4h4',
 boat:'m3 15 3 5h12l3-5ZM12 2v13M11 3 3 12h8M15 5l6 7h-6',
 shop:'M3 3h18l1 6-3 3-4-2-3 2-4-2-3 2-3-3ZM4 12v9h16v-9M10 21v-6h5v6',
 home:'m2 11 10-9 10 9M5 9v12h14V9M10 21v-7h4v7',
 map:'m2 5 7-3 6 3 7-3v17l-7 3-6-3-7 3ZM9 2v17m6-14v17',
 pause:'M7 4v16M17 4v16',fullscreen:'M3 9V3h6m6 0h6v6m0 6v6h-6m-6 0H3v-6',
 compass:'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-6-6-2 8-8 4 4-8Z',
 hand:'M6 12V5a2 2 0 0 1 4 0v6-8a2 2 0 0 1 4 0v8-6a2 2 0 0 1 4 0v7-4a2 2 0 0 1 4 0v8c0 4-3 7-7 7h-2c-3 0-5-2-7-5l-3-5a2 2 0 0 1 3-2l3 3',
 coco:'M4 10h16v5a8 8 0 0 1-16 0Zm10 0 2-8h5M4 10q8-7 16 0',
 jump:'M12 22V3m-7 7 7-7 7 7M3 22h18',dash:'m12 5 8 7-8 7M20 12H5M2 7h5m-5 10h5',
 crystal:'m12 2 9 7-9 13L3 9ZM3 9h18M12 2 8 9l4 13 4-13Z',
 wave:'M2 10q3-5 6 0t6 0 6 0M2 17q3-5 6 0t6 0 6 0',moon:'M19 4a9 9 0 1 0 1 15A9 9 0 0 1 19 4Z',
 check:'m4 12 5 5L21 4',lock:'M5 10h14v11H5Zm3 0V6a4 4 0 0 1 8 0v4',bomb:'M21 14a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM15 6l3-3m0 0h4m-4 0V1',
};
const canvases=new Map();
export function iconCanvas(name){if(canvases.has(name))return canvases.get(name);const canvas=document.createElement('canvas');canvas.width=canvas.height=64;const c=canvas.getContext('2d');c.scale(2.4,2.4);c.translate(1.3,1.3);c.strokeStyle='#173e4b';c.fillStyle='#ffe09a';c.lineJoin=c.lineCap='round';c.lineWidth=2;
 const path=new Path2D(paths[name]||paths.star);if(['star','heart','fruit','crystal','crown','coin'].includes(name))c.fill(path);c.stroke(path);canvases.set(name,canvas);return canvas;}
export const iconURL=name=>iconCanvas(name).toDataURL();
export const iconMarkup=name=>`<svg class="fruit-icon" viewBox="0 0 26 26" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path transform="translate(1 1)" d="${paths[name]||paths.star}"/></svg>`;
export const fruitIcon=id=>({ember:'power',sprout:'fruit',frost:'crystal',wind:'dash',storm:'bolt',aurora:'star',tide:'wave',lunar:'moon'})[id]||'sword';
