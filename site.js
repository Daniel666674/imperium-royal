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
    const u='https://raw.githubusercontent.com/daniel666674/imperium-royal/main/images/'+encodeURIComponent(p.img);
    return `<img src="${u}" alt="${p.brand} ${p.name}" loading="lazy" class="product-photo">`;
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
    spotlight.innerHTML=`<div><figure>${productArt(hero)}</figure><h3>${hero.name}</h3><p>${hero.brand} / ${hero.size}. ${hero.notes.join(", ")}.</p><div class="price">${money(hero.price)}</div></div><button class="pill-btn primary" data-add>Reservar pieza</button>`;
  }
  grid.innerHTML=list.map((p,i)=>`<article class="product-card enter" data-cat="${p.cat}" style="--i:${i}"><figure class="product-image">${productArt(p)}</figure><div class="product-info"><span class="product-brand">${p.brand} / ${p.size}</span><h3>${p.name}</h3><div class="notes"><div><b>Salida</b><span>${p.notes[0]}</span></div><div><b>Corazon</b><span>${p.notes[1]}</span></div><div><b>Base</b><span>${p.notes[2]}</span></div></div><div class="price-row"><span class="price">${money(p.price)}</span><button class="mini-add" data-add>Agregar</button></div></div></article>`).join("");
  bindCardMotion();
}

function bindCardMotion(){
  document.querySelectorAll(".product-card").forEach(card=>{
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

function bindFinder(){
  const finder=document.querySelector("[data-scent-finder]");
  if(!finder) return;
  const result=finder.querySelector("[data-result]");
  const picks={cat:"unisex",mood:"firma"};
  const paint=()=>{
    const match=PRODUCTS.find(p=>(p.cat===picks.cat||picks.cat==="unisex")&&p.mood===picks.mood)||PRODUCTS.find(p=>p.mood===picks.mood)||PRODUCTS[0];
    result.innerHTML=`<div class="result-name">${match.name}</div><p class="result-copy">${match.brand} funciona para una compra ${picks.mood}: ${match.notes.join(", ")}.</p><div class="price">${money(match.price)}</div><a class="pill-btn primary" href="catalogo.html?cat=${match.cat}">Ver catalogo</a>`;
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
  document.body.insertAdjacentHTML("afterbegin",'<div class="progress" id="scrollProgress"></div>');
  document.body.insertAdjacentHTML("afterbegin",'<div class="cursor-glow" id="cursorGlow"></div>');
  document.querySelector(".menu-toggle")?.addEventListener("click",()=>document.querySelector(".nav-links")?.classList.toggle("open"));
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("visible")}),{threshold:.16});
  document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));
  const header=document.querySelector(".site-header");
  window.addEventListener("scroll",()=>{
    const max=document.documentElement.scrollHeight-window.innerHeight;
    const progress=max>0?window.scrollY/max:0;
    document.querySelector("#scrollProgress").style.transform=`scaleX(${progress})`;
    header?.classList.toggle("scrolled",window.scrollY>40);
    document.querySelectorAll(".photo-frame").forEach((el,i)=>{el.style.marginTop=(i+1)*window.scrollY*.012+"px"});
    document.querySelectorAll(".atelier-panel").forEach((el,i)=>{el.style.translate=`${Math.sin((window.scrollY+i*90)/320)*8}px 0`});
  },{passive:true});
  const glow=document.querySelector("#cursorGlow");
  if(glow&&matchMedia("(pointer:fine)").matches){
    window.addEventListener("pointermove",e=>{glow.style.transform=`translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;glow.classList.add("on")},{passive:true});
    window.addEventListener("pointerleave",()=>glow.classList.remove("on"));
  }
  document.querySelectorAll(".feature-tile,.service-card,.panel").forEach(tile=>{
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
