const PRODUCTS=[
  {brand:"Initio",name:"Oud for Greatness EDP",cat:"unisex",price:890000,size:"90 ml",img:"WhatsApp Image 2026-06-13 at 3.58.41 PM.jpeg",notes:["Oud","Nuez moscada / Pachuli","Almizcle / Resina"],mood:"firma",featured:1},
  {brand:"Nautica",name:"Voyage EDT",cat:"hombre",price:180000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.42 PM.jpeg",notes:["Limon / Manzana","Nenufar / Madera","Cedro / Musk"],mood:"diario",featured:2},
  {brand:"Tom Ford",name:"Tobacco Vanille",cat:"unisex",price:720000,size:"50 ml",img:"WhatsApp Image 2026-06-13 at 3.58.43 PM.jpeg",notes:["Tabaco","Especias / Tonka","Vainilla / Cacao"],mood:"noche",featured:3},
  {brand:"Ralph Lauren",name:"Polo Black EDT",cat:"hombre",price:290000,size:"200 ml",img:"WhatsApp Image 2026-06-13 at 3.58.44 PM (1).jpeg",notes:["Mango / Vetiver","Pachuli / Salvia","Cedro / Sandalo"],mood:"noche",featured:4},
  {brand:"Yves Saint Laurent",name:"Black Opium EDP",cat:"mujer",price:220000,size:"30 ml",img:"WhatsApp Image 2026-06-13 at 3.58.44 PM.jpeg",notes:["Cafe negro / Pera","Flor blanca / Jazmin","Vainilla / Pachuli"],mood:"noche",featured:5},
  {brand:"Jean Paul Gaultier",name:"Le Beau Le Parfum",cat:"hombre",price:480000,size:"75 ml",img:"WhatsApp Image 2026-06-13 at 3.58.45 PM (1).jpeg",notes:["Lima / Bergamota","Coco / Heliotropo","Tonka / Vainilla"],mood:"firma",featured:6},
  {brand:"Valentino",name:"Donna Born in Roma Intense",cat:"mujer",price:420000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.45 PM.jpeg",notes:["Rosa damascena","Jazmin Sambac","Vainilla Bourbon"],mood:"noche",featured:7},
  {brand:"Valentino",name:"Uomo EDT",cat:"hombre",price:350000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.46 PM (1).jpeg",notes:["Bergamota / Neroli","Iris / Cuero","Cedro / Ambar"],mood:"oficina",featured:8},
  {brand:"Parfums de Marly",name:"Delina EDP",cat:"mujer",price:750000,size:"75 ml",img:"WhatsApp Image 2026-06-13 at 3.58.46 PM (2).jpeg",notes:["Ruibarbo / Lichi","Rosa / Peonia / Jazmin","Musk / Cachemira / Vainilla"],mood:"firma",featured:9},
  {brand:"Rasasi",name:"Hawas Ice EDP",cat:"hombre",price:195000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.46 PM.jpeg",notes:["Mandarina / Bergamota","Menta artica / Salvia","Ambar / Musk"],mood:"diario",featured:10},
  {brand:"Louis Vuitton",name:"Pur Oud EDP",cat:"unisex",price:1250000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.47 PM (1).jpeg",notes:["Oud","Rosa / Azafran","Sandalo / Resina"],mood:"firma",featured:11},
  {brand:"Yves Saint Laurent",name:"Libre Intense EDP",cat:"mujer",price:450000,size:"90 ml",img:"WhatsApp Image 2026-06-13 at 3.58.47 PM.jpeg",notes:["Bergamota / Mandarina","Lavanda / Jazmin","Vainilla / Musk"],mood:"noche",featured:12},
  {brand:"Valentino",name:"Born in Roma Green Stravaganza",cat:"hombre",price:360000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.48 PM (1).jpeg",notes:["Bergamota / Salvia","Cardamomo / Flores silvestres","Vetiver / Pachuli"],mood:"diario",featured:13},
  {brand:"Emporio Armani",name:"Stronger With You Absolutely",cat:"hombre",price:340000,size:"50 ml",img:"WhatsApp Image 2026-06-13 at 3.58.48 PM (2).jpeg",notes:["Jengibre / Cardamomo","Castana / Lavanda","Vainilla / Ambar"],mood:"noche",featured:14},
  {brand:"Azzaro",name:"The Most Wanted Parfum",cat:"hombre",price:380000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.48 PM (3).jpeg",notes:["Cardamomo / Canela","Tonka / Lavanda","Madera ambarada"],mood:"noche",featured:15},
  {brand:"Ariana Grande",name:"Cloud EDP",cat:"mujer",price:220000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.48 PM.jpeg",notes:["Pera / Lavanda","Coco / Praline","Musk / Vainilla"],mood:"diario",featured:16},
  {brand:"Bond No. 9",name:"Bleecker Street",cat:"unisex",price:890000,size:"50 ml",img:"WhatsApp Image 2026-06-13 at 3.58.49 PM (1).jpeg",notes:["Bergamota / Lima","Te verde / Geranio","Cedro / Musk / Ambar"],mood:"firma",featured:17},
  {brand:"Moschino",name:"Toy Boy EDP",cat:"hombre",price:280000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.49 PM.jpeg",notes:["Cardamomo / Clavo","Rosa / Iris","Pachuli / Ambar"],mood:"noche",featured:18},
  {brand:"Maison Francis Kurkdjian",name:"Baccarat Rouge 540 Extrait",cat:"unisex",price:980000,size:"70 ml",img:"WhatsApp Image 2026-06-13 at 3.58.50 PM (1).jpeg",notes:["Azafran / Jazmin","Ambrette / Resina","Cedro / Ambargris"],mood:"firma",featured:19},
  {brand:"Givenchy",name:"Gentleman Reserve Privee EDP",cat:"hombre",price:520000,size:"60 ml",img:"WhatsApp Image 2026-06-13 at 3.58.50 PM.jpeg",notes:["Bergamota / Mandarina","Iris / Geranio","Vetiver / Musk"],mood:"oficina",featured:20},
  {brand:"Lattafa",name:"Mayar Natural Intense EDP",cat:"mujer",price:170000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.51 PM (1).jpeg",notes:["Bergamota / Pera","Peonia / Jazmin","Vainilla / Musk"],mood:"diario",featured:21},
  {brand:"Afnan",name:"9am Dive EDP",cat:"unisex",price:140000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.51 PM (2).jpeg",notes:["Citricos / Pepino","Notas marinas / Algas","Musk / Ambar"],mood:"diario",featured:22},
  {brand:"Rave",name:"Now Women EDP",cat:"mujer",price:120000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.51 PM.jpeg",notes:["Frutas dulces / Bayas","Rosa / Gardenia","Musk / Vainilla"],mood:"regalo",featured:23},
  {brand:"Afnan",name:"9pm Night Out Extrait",cat:"hombre",price:160000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.52 PM.jpeg",notes:["Manzana / Pera","Canela / Pachuli","Ambar / Musk"],mood:"noche",featured:24},
  {brand:"Afnan",name:"Supremacy Collector Edition",cat:"unisex",price:190000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.54 PM.jpeg",notes:["Bergamota / Limon","Pachuli / Cedro","Musk / Ambar"],mood:"firma",featured:25},
  {brand:"Ariana Grande",name:"Thank U Next EDP",cat:"mujer",price:160000,size:"30 ml",img:"WhatsApp Image 2026-06-13 at 3.58.55 PM (1).jpeg",notes:["Ruibarbo / Frambuesa","Rosa / Higos","Ambar / Musk / Praline"],mood:"diario",featured:26},
  {brand:"Emporio Armani",name:"Stronger With You Absolutely EDP",cat:"hombre",price:420000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.55 PM (2).jpeg",notes:["Jengibre / Cardamomo","Castana / Lavanda","Vainilla / Ambar"],mood:"noche",featured:27},
  {brand:"Dolce & Gabbana",name:"Light Blue EDT",cat:"mujer",price:310000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.55 PM (3).jpeg",notes:["Limon siciliano / Bambu","Jazmin / Rosa","Cedro / Ambar"],mood:"diario",featured:28},
  {brand:"Lattafa",name:"Eclaire EDP",cat:"unisex",price:155000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.55 PM (4).jpeg",notes:["Bergamota / Pera","Jazmin / Rosa","Almizcle / Ambar"],mood:"regalo",featured:29},
  {brand:"Carolina Herrera",name:"Good Girl EDP",cat:"mujer",price:280000,size:"50 ml",img:"WhatsApp Image 2026-06-13 at 3.58.55 PM.jpeg",notes:["Almendra / Cafe","Jazmin / Tuberosa","Cacao / Tonka"],mood:"noche",featured:30},
  {brand:"French Avenue",name:"Liquid Brun EDP",cat:"unisex",price:210000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.56 PM (1).jpeg",notes:["Bergamota / Canela","Praline / Vainilla","Ambar / Musk"],mood:"noche",featured:31},
  {brand:"Louis Vuitton",name:"Ombre Nomade EDP",cat:"unisex",price:1350000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.56 PM (2).jpeg",notes:["Oud de lodo","Rosa / Incienso","Olibano / Resina"],mood:"firma",featured:32},
  {brand:"Dolce & Gabbana",name:"K by Dolce EDT",cat:"hombre",price:290000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.56 PM (3).jpeg",notes:["Bergamota / Calabaza","Cardamomo / Madera","Ambar / Vetiver"],mood:"oficina",featured:33},
  {brand:"Paco Rabanne",name:"Phantom EDT",cat:"hombre",price:310000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.56 PM.jpeg",notes:["Limon / Lavanda","Jengibre / Madera","Vainilla / Musk"],mood:"diario",featured:34},
  {brand:"Lancome",name:"La Vie est Belle EDP",cat:"mujer",price:490000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.57 PM (1).jpeg",notes:["Grosella / Pera","Iris / Jazmin","Praline / Vainilla / Pachuli"],mood:"regalo",featured:35},
  {brand:"Issey Miyake",name:"L'Eau d'Issey Pour Homme",cat:"hombre",price:290000,size:"125 ml",img:"WhatsApp Image 2026-06-13 at 3.58.57 PM (2).jpeg",notes:["Bergamota / Mandarina","Nuez moscada / Salvia","Cedro / Sandalo"],mood:"diario",featured:36},
  {brand:"Giorgio Armani",name:"Acqua di Gio EDT",cat:"hombre",price:360000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.57 PM.jpeg",notes:["Bergamota / Neroli","Jazmin / Romero","Cedro / Pachuli / Musk"],mood:"diario",featured:37},
  {brand:"Hugo Boss",name:"Boss Bottled Unlimited EDT",cat:"hombre",price:270000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.58 PM.jpeg",notes:["Manzana / Bergamota","Canela / Mango","Madera / Musk"],mood:"diario",featured:38},
  {brand:"Paco Rabanne",name:"1 Million EDT",cat:"hombre",price:370000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.59 PM (1).jpeg",notes:["Mandarina / Toronja","Canela / Rosa","Cuero / Ambar / Cedro"],mood:"noche",featured:39},
  {brand:"Lattafa",name:"Angham EDP",cat:"unisex",price:145000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.59 PM (2).jpeg",notes:["Bergamota / Limon","Oud / Madera","Ambar / Almizcle"],mood:"firma",featured:40},
  {brand:"Xerjoff",name:"Naxos EDP",cat:"unisex",price:890000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.59 PM.jpeg",notes:["Bergamota / Lavanda","Miel / Tabaco","Tonka / Vainilla"],mood:"firma",featured:41},
  {brand:"Carolina Herrera",name:"Bad Boy EDT",cat:"hombre",price:380000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.00 PM (1).jpeg",notes:["Salvia verde / Menta","Cafe / Bergamota","Cedro / Ambar gris"],mood:"noche",featured:42},
  {brand:"Versace",name:"Bright Crystal EDT",cat:"mujer",price:290000,size:"90 ml",img:"WhatsApp Image 2026-06-13 at 3.59.00 PM.jpeg",notes:["Granada / Yuzu","Magnolia / Loto","Ambar / Almizcle"],mood:"diario",featured:43},
  {brand:"Rasasi",name:"Hawas Kobra EDP",cat:"hombre",price:185000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.01 PM.jpeg",notes:["Manzana / Cardamomo","Ambar gris / Madera","Almizcle / Oud"],mood:"noche",featured:44},
  {brand:"Armaf",name:"Delights Yum Yum EDP",cat:"mujer",price:130000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.02 PM.jpeg",notes:["Pera / Bergamota","Rosa / Lirio","Praline / Vainilla"],mood:"regalo",featured:45},
  {brand:"Armaf",name:"Club de Nuit Intense Man EDT",cat:"hombre",price:215000,size:"105 ml",img:"WhatsApp Image 2026-06-13 at 3.59.04 PM.jpeg",notes:["Limon / Pina","Rosa / Abedul","Musk / Ambar gris"],mood:"firma",featured:46},
  {brand:"Armaf",name:"Club de Nuit Woman EDP",cat:"mujer",price:215000,size:"105 ml",img:"WhatsApp Image 2026-06-13 at 3.59.05 PM (1).jpeg",notes:["Bergamota / Durazno","Jazmin / Rosa","Vainilla / Musk"],mood:"noche",featured:47},
  {brand:"Carolina Herrera",name:"Bad Boy EDT Collector",cat:"hombre",price:380000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.05 PM (2).jpeg",notes:["Salvia verde / Menta","Cafe / Bergamota","Cedro / Ambar gris"],mood:"noche",featured:48},
  {brand:"Azzaro",name:"Wanted EDT",cat:"hombre",price:260000,size:"50 ml",img:"WhatsApp Image 2026-06-13 at 3.59.05 PM (3).jpeg",notes:["Lima / Limon","Bergamota / Pimienta","Madera ambarada / Musk"],mood:"diario",featured:49},
  {brand:"Azzaro",name:"The Most Wanted EDP Intense",cat:"hombre",price:370000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.05 PM.jpeg",notes:["Cardamomo / Canela","Tonka / Lavanda","Madera ambarada / Vetiver"],mood:"noche",featured:50},
  {brand:"Rasasi",name:"Hawas Fire EDP",cat:"hombre",price:195000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.06 PM (1).jpeg",notes:["Mandarina / Bergamota","Canela / Especias","Ambar / Musk"],mood:"noche",featured:51},
  {brand:"Dior",name:"Sauvage EDP",cat:"hombre",price:480000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.06 PM (2).jpeg",notes:["Bergamota / Pimienta","Lavanda / Ambroxan","Cedro / Vetiver"],mood:"noche",featured:52},
  {brand:"Chanel",name:"No. 5 EDP",cat:"mujer",price:620000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.06 PM (3).jpeg",notes:["Aldehydes / Bergamota","Jazmin / Rosa / Iris","Vetiver / Sandalo / Musgo"],mood:"firma",featured:53},
  {brand:"Yves Saint Laurent",name:"MYSLF Le Parfum",cat:"hombre",price:460000,size:"60 ml",img:"WhatsApp Image 2026-06-13 at 3.59.06 PM.jpeg",notes:["Bergamota siciliana","Flor de naranjo / Ambrette","Cedro / Vetiver"],mood:"firma",featured:54},
  {brand:"Rasasi",name:"Hawas Ice EDP Edition",cat:"hombre",price:195000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.07 PM (1).jpeg",notes:["Mandarina / Bergamota","Menta artica / Salvia","Ambar / Musk"],mood:"diario",featured:55},
  {brand:"Jean Paul Gaultier",name:"Le Beau Le Parfum Intense",cat:"hombre",price:520000,size:"125 ml",img:"WhatsApp Image 2026-06-13 at 3.59.07 PM (2).jpeg",notes:["Lima / Bergamota","Coco / Heliotropo","Tonka / Vainilla"],mood:"firma",featured:56},
  {brand:"Lacoste",name:"L.12.12 Blanc EDT",cat:"hombre",price:245000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.07 PM (3).jpeg",notes:["Bergamota / Pamplemusa","Jazmin / Rosa","Cedro / Musk"],mood:"diario",featured:57},
  {brand:"Jo Milano",name:"Game of Spades Wildcard Parfum",cat:"unisex",price:350000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.07 PM (4).jpeg",notes:["Bergamota / Especias","Cuero / Rosa","Oud / Ambar"],mood:"noche",featured:58},
  {brand:"Armaf",name:"Club de Nuit Iconic EDP",cat:"unisex",price:235000,size:"105 ml",img:"WhatsApp Image 2026-06-13 at 3.59.07 PM.jpeg",notes:["Bergamota / Limon","Rosa / Jazmin","Musk / Ambar"],mood:"noche",featured:59},
  {brand:"Afnan",name:"9pm EDP",cat:"hombre",price:155000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.08 PM (1).jpeg",notes:["Manzana / Pera","Pachuli / Canela","Ambar / Musk"],mood:"noche",featured:60},
  {brand:"Valentino",name:"Uomo Born in Roma EDT",cat:"hombre",price:380000,size:"150 ml",img:"WhatsApp Image 2026-06-13 at 3.59.08 PM (2).jpeg",notes:["Bergamota","Iris / Piel","Vetiver / Ambar"],mood:"oficina",featured:61},
  {brand:"Lattafa",name:"Yara EDP",cat:"mujer",price:165000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.08 PM.jpeg",notes:["Frutas / Bergamota","Rosa / Jazmin","Almizcle / Ambar"],mood:"regalo",featured:62},
  {brand:"Jean Paul Gaultier",name:"Le Beau EDT",cat:"hombre",price:390000,size:"125 ml",img:"WhatsApp Image 2026-06-13 at 3.59.09 PM (1).jpeg",notes:["Lima / Neroli","Coco / Heliotropo","Cedro / Musk"],mood:"diario",featured:63},
  {brand:"Lattafa",name:"Pride Afeef EDP",cat:"mujer",price:280000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.09 PM (2).jpeg",notes:["Bergamota / Frutas","Rosa / Peonia","Vainilla / Musk / Ambar"],mood:"firma",featured:64},
  {brand:"Al Haramain",name:"Amber Oud EDP",cat:"unisex",price:315000,size:"60 ml",img:"WhatsApp Image 2026-06-13 at 3.59.09 PM (3).jpeg",notes:["Oud","Ambar / Especias","Vainilla / Musk"],mood:"firma",featured:65},
  {brand:"Armaf",name:"Odyssey Mandarin Sky EDP",cat:"hombre",price:190000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.09 PM (4).jpeg",notes:["Mandarina / Limon","Notas verdes / Madera","Musk / Ambar"],mood:"diario",featured:66},
  {brand:"Paco Rabanne",name:"Invictus Victory Elixir",cat:"hombre",price:460000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.09 PM.jpeg",notes:["Pomelo / Especias","Canela / Patchouli","Guayaco / Vetiver"],mood:"noche",featured:67},
  {brand:"Lattafa",name:"Khamrah EDP",cat:"unisex",price:165000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.10 PM (1).jpeg",notes:["Canela / Especias","Caramelo / Praline","Vainilla / Tonka"],mood:"noche",featured:68},
  {brand:"Afnan",name:"9pm Rebel EDP",cat:"hombre",price:160000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.10 PM (2).jpeg",notes:["Manzana / Bergamota","Cardamomo / Canela","Ambar / Musk"],mood:"noche",featured:69},
  {brand:"Lattafa",name:"Asad EDP",cat:"unisex",price:170000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.10 PM (3).jpeg",notes:["Bergamota / Especias","Oud / Cuero","Ambar / Musk"],mood:"firma",featured:70},
  {brand:"Yves Saint Laurent",name:"Y EDP",cat:"hombre",price:430000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.10 PM.jpeg",notes:["Manzana / Bergamota","Salvia / Geranio","Cedro / Tonka"],mood:"oficina",featured:71},
  {brand:"Jean Paul Gaultier",name:"Le Male Le Parfum",cat:"hombre",price:480000,size:"125 ml",img:"WhatsApp Image 2026-06-13 at 3.59.11 PM.jpeg",notes:["Lavanda / Especias","Miel / Tabaco","Vainilla / Tonka"],mood:"noche",featured:72},
  {brand:"Jean Paul Gaultier",name:"Scandal Le Parfum Homme",cat:"hombre",price:520000,size:"150 ml",img:"WhatsApp Image 2026-06-13 at 3.59.12 PM (1).jpeg",notes:["Bergamota / Limon","Tabaco / Pachuli","Madera / Ambar"],mood:"noche",featured:73},
  {brand:"Valentino",name:"Uomo Born in Roma Intense EDP",cat:"hombre",price:420000,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.12 PM.jpeg",notes:["Bergamota / Especias","Iris / Cuero","Cedro / Ambar"],mood:"noche",featured:74}
];

const money=n=>"$"+n.toLocaleString("es-CO");
function productArt(p){
  if(p.img){
    const u='images/'+encodeURIComponent(p.img);
    return `<img src="${u}" alt="${p.brand} ${p.name}" loading="lazy" decoding="async" class="product-photo">`;
  }
  return `<div class="scent-art art-fresh" role="img" aria-label="${p.brand} ${p.name}"><span class="scent-box"></span><span class="scent-bottle"></span></div>`;
}
function sorted(list){
  const mode=document.querySelector("#sortSelect")?.value||"featured";
  return [...list].sort((a,b)=>{
    if(mode==="priceAsc") return a.price-b.price;
    if(mode==="priceDesc") return b.price-a.price;
    if(mode==="name") return a.name.localeCompare(b.name);
    if(mode==="brand") return a.brand.localeCompare(b.brand);
    return a.featured-b.featured;
  });
}

let activeFilter=new URLSearchParams(location.search).get("cat")||"all";
function renderCatalog(){
  const grid=document.querySelector("#productGrid");
  if(!grid) return;
  const query=(document.querySelector("#searchInput")?.value||"").trim().toLowerCase();
  const filtered=(activeFilter==="all"?PRODUCTS:PRODUCTS.filter(p=>p.cat===activeFilter)).filter(p=>{
    const haystack=[p.brand,p.name,p.cat,p.mood,p.notes.join(" ")].join(" ").toLowerCase();
    return !query||haystack.includes(query);
  });
  const list=sorted(filtered);
  const hero=list[0]||PRODUCTS[0];
  document.querySelectorAll("[data-filter]").forEach(btn=>btn.classList.toggle("active",btn.dataset.filter===activeFilter));
  const count=document.querySelector("#catalogCount");
  if(count) count.textContent=`${list.length} piezas`;
  const spotlight=document.querySelector("#spotlight");
  if(spotlight){
    const heroIdx=PRODUCTS.indexOf(hero);
    spotlight.innerHTML=`<div><figure data-open="${heroIdx}" style="cursor:pointer">${productArt(hero)}</figure><h3>${hero.name}</h3><p>${hero.brand} / ${hero.size}. ${hero.notes.join(", ")}.</p><div class="price">${money(hero.price)}</div></div><button class="pill-btn primary" data-open="${heroIdx}">Ver detalle</button>`;
  }
  grid.innerHTML=list.map((p,i)=>{const idx=PRODUCTS.indexOf(p);return `<article class="product-card enter" data-cat="${p.cat}" data-open="${idx}" style="--i:${Math.min(i,10)}"><figure class="product-image">${productArt(p)}</figure><div class="product-info"><span class="product-brand">${p.brand} / ${p.size}</span><h3>${p.name}</h3><div class="notes"><div><b>Salida</b><span>${p.notes[0]}</span></div><div><b>Corazon</b><span>${p.notes[1]}</span></div><div><b>Base</b><span>${p.notes[2]}</span></div></div><div class="price-row"><span class="price">${money(p.price)}</span><button class="mini-add" data-add>Agregar</button></div></div></article>`}).join("");
  bindCardMotion();
}

function bindCardMotion(){
  if(!matchMedia("(pointer:fine)").matches) return;
  document.querySelectorAll(".product-card").forEach(card=>{
    if(card.dataset.motion) return;
    card.dataset.motion="1";
    card.addEventListener("pointermove",event=>{
      const rect=card.getBoundingClientRect();
      const x=(event.clientX-rect.left)/rect.width-.5;
      const y=(event.clientY-rect.top)/rect.height-.5;
      card.style.setProperty("--ry",`${x*5}deg`);
      card.style.setProperty("--rx",`${-y*5}deg`);
    });
    card.addEventListener("pointerleave",()=>{
      card.style.setProperty("--ry","0deg");
      card.style.setProperty("--rx","0deg");
    });
  });
}

const SOCIAL=[
  {label:"Instagram",href:"https://instagram.com/imperiumroyal",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.18.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.41-.35 1.03-.4 2.18-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.4 2.18.22.55.47.94.88 1.35.41.41.8.66 1.35.88.41.16 1.03.35 2.18.4 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.18-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.41.35-1.03.4-2.18.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.4-2.18-.22-.55-.47-.94-.88-1.35-.41-.41-.8-.66-1.35-.88-.41-.16-1.03-.35-2.18-.4-1.24-.06-1.61-.07-4.76-.07zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6zm0 1.62a3.68 3.68 0 1 0 0 7.36 3.68 3.68 0 0 0 0-7.36zm5.48-2.9a1.24 1.24 0 1 1 0 2.48 1.24 1.24 0 0 1 0-2.48z"/></svg>'},
  {label:"TikTok",href:"https://tiktok.com/@imperiumroyal",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.1v12.4a2.52 2.52 0 0 1-2.52 2.52 2.52 2.52 0 0 1 0-5.04c.26 0 .51.04.75.11V9.8a5.6 5.6 0 0 0-.75-.05 5.62 5.62 0 1 0 5.62 5.62V8.96a7.34 7.34 0 0 0 4.3 1.38V7.24a4.28 4.28 0 0 1-3.25-1.42z"/></svg>'},
  {label:"Facebook",href:"https://facebook.com/imperiumroyal",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>'},
  {label:"WhatsApp",href:"https://wa.me/573105550199",svg:'<svg viewBox="0 0 32 32" fill="currentColor"><path d="M16.003.064C7.17.064.008 7.226.008 16.062a15.94 15.94 0 0 0 2.137 7.992L0 32.064l8.2-2.148a15.98 15.98 0 0 0 7.803 1.992h.007c8.83 0 15.99-7.162 15.99-15.998 0-4.28-1.663-8.302-4.682-11.322A15.89 15.89 0 0 0 16.003.064zM23.31 19.28c-.4-.2-2.37-1.17-2.74-1.3-.37-.13-.64-.2-.9.2-.27.4-1.03 1.3-1.27 1.57-.23.27-.47.3-.87.1-.4-.2-1.69-.62-3.22-1.98-1.19-1.06-1.99-2.37-2.22-2.77-.23-.4-.02-.62.18-.82.18-.18.4-.47.6-.7.2-.23.27-.4.4-.67.13-.27.07-.5-.03-.7-.1-.2-.9-2.17-1.23-2.97-.33-.78-.66-.67-.9-.69-.23-.01-.5-.01-.77-.01-.27 0-.7.1-1.07.5-.37.4-1.4 1.37-1.4 3.34 0 1.97 1.43 3.87 1.63 4.13.2.27 2.82 4.31 6.83 6.04.95.41 1.7.66 2.28.84.96.31 1.83.26 2.52.16.77-.12 2.37-.97 2.7-1.9.33-.93.33-1.73.23-1.9-.1-.17-.37-.27-.77-.47z"/></svg>'}
];
function injectSocial(){
  const foot=document.querySelector(".footer-bottom");
  if(!foot||foot.querySelector(".social"))return;
  const row=SOCIAL.map(s=>`<a class="social-btn" href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}">${s.svg}</a>`).join("");
  foot.insertAdjacentHTML("afterbegin",`<div class="social">${row}</div>`);
}

function bindCatalog(){
  document.querySelectorAll("[data-filter]").forEach(btn=>btn.addEventListener("click",()=>{
    activeFilter=btn.dataset.filter;
    renderCatalog();
  }));
  document.querySelector("#searchInput")?.addEventListener("input",renderCatalog);
  document.querySelector("#sortSelect")?.addEventListener("change",renderCatalog);
  document.addEventListener("click",event=>{
    const btn=event.target.closest("[data-add]");
    if(!btn) return;
    const old=btn.textContent;
    btn.textContent="Agregado";
    btn.closest(".product-card,.spotlight")?.classList.add("pulse");
    setTimeout(()=>{btn.textContent=old;btn.closest(".product-card,.spotlight")?.classList.remove("pulse")},1100);
  });
  renderCatalog();
}

const MOOD_COPY={
  diario:"Para los dias regulares: cercano, elegante y facil de llevar. Ideal para clima calido y uso constante en piel.",
  oficina:"Profesional y discreto. Proyecta presencia sin invadir el espacio compartido. Funciona en reuniones y largas jornadas.",
  firma:"Pieza de firma con caracter memorable. La gente la asocia contigo aun cuando no estas. Para marcar territorio sin esfuerzo.",
  noche:"Intenso y magnetico, pensado para alta recordacion despues de las 7 pm. Deja estela en los espacios donde te mueves.",
  regalo:"Envolvente y amable. Una entrada segura para regalar o regalarte algo distinto, con presencia inmediata."
};
const CAT_COPY={hombre:"Categoria masculina",mujer:"Categoria femenina",unisex:"Sin etiquetas de genero"};
function descriptionFor(p){
  return `<p><strong>${p.brand} ${p.name}</strong>. ${MOOD_COPY[p.mood]||""}</p><p>Su estructura olfativa abre con <em>${(p.notes[0]||"").toLowerCase()}</em> en la salida, evoluciona en el corazon hacia <em>${(p.notes[1]||"").toLowerCase()}</em> y reposa sobre una base de <em>${(p.notes[2]||"").toLowerCase()}</em>.</p><p class="m-fine">${CAT_COPY[p.cat]||""} &middot; Presentacion ${p.size}</p>`;
}
function similarProducts(p,limit){
  const idx=PRODUCTS.indexOf(p);
  return PRODUCTS.map((q,i)=>({q,i,score:(q.cat===p.cat?2:0)+(q.mood===p.mood?2:0)-(i===idx?100:0)})).sort((a,b)=>b.score-a.score).slice(0,limit);
}
function waLinkFor(p){
  const msg=`Hola Imperium Royal, me interesa ${p.brand} ${p.name} (${p.size}) por ${money(p.price)}. Esta disponible?`;
  return `https://wa.me/573105550199?text=${encodeURIComponent(msg)}`;
}
function ensureModal(){
  if(document.querySelector("#productModal")) return;
  document.body.insertAdjacentHTML("beforeend",'<dialog id="productModal" class="product-modal" aria-labelledby="modalTitle"><button class="modal-close" data-close aria-label="Cerrar">&times;</button><div class="modal-body" data-modal-body></div></dialog>');
  const dlg=document.querySelector("#productModal");
  dlg.addEventListener("click",e=>{ if(e.target===dlg) dlg.close(); });
  dlg.addEventListener("close",()=>document.body.style.overflow="");
  document.addEventListener("click",e=>{ if(e.target.closest("[data-close]")) dlg.close(); });
}
function openProductModal(idx){
  const p=PRODUCTS[idx]; if(!p) return;
  ensureModal();
  const dlg=document.querySelector("#productModal");
  const body=dlg.querySelector("[data-modal-body]");
  const sims=similarProducts(p,2);
  body.dataset.cat=p.cat;
  body.innerHTML=`
    <figure class="m-photo">${productArt(p)}</figure>
    <div class="m-info">
      <span class="product-brand">${p.brand}</span>
      <h3 id="modalTitle">${p.name}</h3>
      <div class="m-meta"><span>${p.cat}</span><span>${p.mood}</span><span>${p.size}</span></div>
      <div class="m-desc">${descriptionFor(p)}</div>
      <div class="notes">
        <div><b>Salida</b><span>${p.notes[0]||""}</span></div>
        <div><b>Corazon</b><span>${p.notes[1]||""}</span></div>
        <div><b>Base</b><span>${p.notes[2]||""}</span></div>
      </div>
      <div class="price-row"><span class="price">${money(p.price)}</span><a class="pill-btn primary" href="${waLinkFor(p)}" target="_blank" rel="noopener">Pedir por WhatsApp</a></div>
      ${sims.length?`<div class="m-similar"><span class="eyebrow">Piezas similares</span><div class="m-similar-row">${sims.map(({q,i})=>`<button class="finder-card" data-cat="${q.cat}" data-open="${i}"><div class="finder-card-photo">${productArt(q)}</div><div class="finder-card-info"><span class="product-brand">${q.brand}</span><b>${q.name}</b><span class="finder-card-price">${money(q.price)}</span></div></button>`).join("")}</div></div>`:""}
    </div>`;
  document.body.style.overflow="hidden";
  dlg.showModal();
}
function bindModalDelegation(){
  document.addEventListener("click",e=>{
    const trigger=e.target.closest("[data-open]");
    if(!trigger) return;
    const idx=parseInt(trigger.dataset.open,10);
    if(isNaN(idx)) return;
    if(trigger.tagName==="A") e.preventDefault();
    openProductModal(idx);
  });
}

function bindFinder(){
  const finder=document.querySelector("[data-scent-finder]");
  if(!finder) return;
  const results=finder.querySelector("[data-results]");
  const single=finder.querySelector("[data-result]");
  const picks={cat:"all",mood:"firma",budget:"any"};
  const inBudget=(price,b)=>b==="any"||(b==="economico"&&price<=250000)||(b==="medio"&&price>250000&&price<=500000)||(b==="alto"&&price>500000);
  const rank=()=>PRODUCTS.map((p,i)=>{
    let s=0;
    if(picks.cat==="all"||p.cat===picks.cat) s+=3;
    if(p.mood===picks.mood) s+=3;
    if(inBudget(p.price,picks.budget)) s+=2;
    s+=(100-(p.featured||50))*0.005;
    return {p,i,s};
  }).sort((a,b)=>b.s-a.s);
  const card=({p,i})=>`<button class="finder-card" data-cat="${p.cat}" data-open="${i}"><div class="finder-card-photo">${productArt(p)}</div><div class="finder-card-info"><span class="product-brand">${p.brand}</span><b>${p.name}</b><span class="finder-card-price">${money(p.price)}</span></div></button>`;
  const paint=()=>{
    const ranked=rank().slice(0,3);
    if(!ranked.length) return;
    if(results){ results.innerHTML=ranked.map(card).join(""); }
    if(single){
      const m=ranked[0].p;
      single.innerHTML=`<div class="result-name">${m.name}</div><p class="result-copy">${m.brand} funciona para una compra ${picks.mood}: ${m.notes.join(", ")}.</p><div class="price">${money(m.price)}</div><button class="pill-btn primary" data-open="${ranked[0].i}">Ver detalle</button>`;
    }
  };
  finder.querySelectorAll("[data-pick]").forEach(btn=>btn.addEventListener("click",()=>{
    const [key,value]=btn.dataset.pick.split(":");
    picks[key]=value;
    finder.querySelectorAll(`[data-pick^="${key}:"]`).forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    paint();
  }));
  paint();
}

function bindGlobal(){
  const fine=matchMedia("(pointer:fine)").matches;
  document.body.insertAdjacentHTML("afterbegin",'<div class="progress" id="scrollProgress"></div>');
  if(fine) document.body.insertAdjacentHTML("afterbegin",'<div class="cursor-glow" id="cursorGlow"></div>');
  const menuToggle=document.querySelector(".menu-toggle");
  menuToggle?.addEventListener("click",()=>{
    const open=document.querySelector(".nav-links")?.classList.toggle("open");
    menuToggle.classList.toggle("open",open);
    menuToggle.setAttribute("aria-expanded",open?"true":"false");
  });
  injectSocial();
  const showAll=()=>document.querySelectorAll(".reveal:not(.visible)").forEach(el=>el.classList.add("visible"));
  if("IntersectionObserver" in window){
    const revealObserver=new IntersectionObserver((entries,obs)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");obs.unobserve(entry.target)}}),{threshold:0,rootMargin:"0px 0px -2% 0px"});
    document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));
    setTimeout(showAll,900);
  } else { showAll(); }
  const header=document.querySelector(".site-header");
  const progressBar=document.querySelector("#scrollProgress");
  const photoFrames=document.querySelectorAll(".photo-frame");
  const atelierPanels=document.querySelectorAll(".atelier-panel");
  let ticking=false;
  const onScroll=()=>{
    if(ticking) return;
    ticking=true;
    requestAnimationFrame(()=>{
      const y=window.scrollY;
      const max=document.documentElement.scrollHeight-window.innerHeight;
      const progress=max>0?y/max:0;
      if(progressBar) progressBar.style.transform=`scaleX(${progress})`;
      header?.classList.toggle("scrolled",y>40);
      if(fine){
        photoFrames.forEach((el,i)=>{el.style.marginTop=(i+1)*y*.012+"px"});
        atelierPanels.forEach((el,i)=>{el.style.translate=`${Math.sin((y+i*90)/320)*8}px 0`});
      }
      ticking=false;
    });
  };
  window.addEventListener("scroll",onScroll,{passive:true});
  const glow=document.querySelector("#cursorGlow");
  if(glow){
    window.addEventListener("pointermove",e=>{glow.style.transform=`translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;glow.classList.add("on")},{passive:true});
    window.addEventListener("pointerleave",()=>glow.classList.remove("on"));
  }
  if(fine) document.querySelectorAll(".feature-tile,.service-card,.panel").forEach(tile=>{
    tile.addEventListener("pointermove",e=>{
      const r=tile.getBoundingClientRect();
      tile.style.setProperty("--mx",((e.clientX-r.left)/r.width*100)+"%");
      tile.style.setProperty("--my",((e.clientY-r.top)/r.height*100)+"%");
    });
  });
  document.querySelectorAll("form[data-soft-submit]").forEach(form=>form.addEventListener("submit",event=>{
    event.preventDefault();
    const btn=form.querySelector("button");
    const old=btn.textContent;
    btn.textContent="Enviado";
    btn.classList.add("pulse");
    setTimeout(()=>{btn.textContent=old;btn.classList.remove("pulse");form.reset()},1300);
  }));
}

bindGlobal();
bindCatalog();
bindFinder();
ensureModal();
bindModalDelegation();
