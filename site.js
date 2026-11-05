/* Precios: todos los perfumes valen lo mismo; el combo de 2 tiene precio fijo. */
const UNIT_PRICE=110000;
const COMBO_SIZE=2;
const COMBO_PRICE=180000;

const PRODUCTS=[
  {brand:"Initio",name:"Oud for Greatness EDP",cat:"unisex",price:UNIT_PRICE,size:"90 ml",img:"WhatsApp Image 2026-06-13 at 3.58.41 PM.jpeg",notes:["Oud","Nuez moscada / Pachuli","Almizcle / Resina"],mood:"firma",featured:1},
  {brand:"Nautica",name:"Voyage EDT",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.42 PM.jpeg",notes:["Limon / Manzana","Nenufar / Madera","Cedro / Musk"],mood:"diario",featured:2},
  {brand:"Tom Ford",name:"Tobacco Vanille",cat:"unisex",price:UNIT_PRICE,size:"50 ml",img:"WhatsApp Image 2026-06-13 at 3.58.43 PM.jpeg",notes:["Tabaco","Especias / Tonka","Vainilla / Cacao"],mood:"noche",featured:3},
  {brand:"Ralph Lauren",name:"Polo Black EDT",cat:"hombre",price:UNIT_PRICE,size:"200 ml",img:"WhatsApp Image 2026-06-13 at 3.58.44 PM (1).jpeg",notes:["Mango / Vetiver","Pachuli / Salvia","Cedro / Sandalo"],mood:"noche",featured:4},
  {brand:"Yves Saint Laurent",name:"Black Opium EDP",cat:"mujer",price:UNIT_PRICE,size:"30 ml",img:"WhatsApp Image 2026-06-13 at 3.58.44 PM.jpeg",notes:["Cafe negro / Pera","Flor blanca / Jazmin","Vainilla / Pachuli"],mood:"noche",featured:5},
  {brand:"Jean Paul Gaultier",name:"Le Beau Le Parfum",cat:"hombre",price:UNIT_PRICE,size:"75 ml",img:"WhatsApp Image 2026-06-13 at 3.58.45 PM (1).jpeg",notes:["Lima / Bergamota","Coco / Heliotropo","Tonka / Vainilla"],mood:"firma",featured:6},
  {brand:"Valentino",name:"Donna Born in Roma Intense",cat:"mujer",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.45 PM.jpeg",notes:["Rosa damascena","Jazmin Sambac","Vainilla Bourbon"],mood:"noche",featured:7},
  {brand:"Valentino",name:"Uomo EDT",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.46 PM (1).jpeg",notes:["Bergamota / Neroli","Iris / Cuero","Cedro / Ambar"],mood:"oficina",featured:8},
  {brand:"Parfums de Marly",name:"Delina EDP",cat:"mujer",price:UNIT_PRICE,size:"75 ml",img:"WhatsApp Image 2026-06-13 at 3.58.46 PM (2).jpeg",notes:["Ruibarbo / Lichi","Rosa / Peonia / Jazmin","Musk / Cachemira / Vainilla"],mood:"firma",featured:9},
  {brand:"Rasasi",name:"Hawas Ice EDP",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.46 PM.jpeg",notes:["Mandarina / Bergamota","Menta artica / Salvia","Ambar / Musk"],mood:"diario",featured:10},
  {brand:"Louis Vuitton",name:"Pur Oud EDP",cat:"unisex",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.47 PM (1).jpeg",notes:["Oud","Rosa / Azafran","Sandalo / Resina"],mood:"firma",featured:11},
  {brand:"Yves Saint Laurent",name:"Libre Intense EDP",cat:"mujer",price:UNIT_PRICE,size:"90 ml",img:"WhatsApp Image 2026-06-13 at 3.58.47 PM.jpeg",notes:["Bergamota / Mandarina","Lavanda / Jazmin","Vainilla / Musk"],mood:"noche",featured:12},
  {brand:"Valentino",name:"Born in Roma Green Stravaganza",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.48 PM (1).jpeg",notes:["Bergamota / Salvia","Cardamomo / Flores silvestres","Vetiver / Pachuli"],mood:"diario",featured:13},
  {brand:"Emporio Armani",name:"Stronger With You Absolutely",cat:"hombre",price:UNIT_PRICE,size:"50 ml",img:"WhatsApp Image 2026-06-13 at 3.58.48 PM (2).jpeg",notes:["Jengibre / Cardamomo","Castana / Lavanda","Vainilla / Ambar"],mood:"noche",featured:14},
  {brand:"Azzaro",name:"The Most Wanted Parfum",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.48 PM (3).jpeg",notes:["Cardamomo / Canela","Tonka / Lavanda","Madera ambarada"],mood:"noche",featured:15},
  {brand:"Ariana Grande",name:"Cloud EDP",cat:"mujer",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.48 PM.jpeg",notes:["Pera / Lavanda","Coco / Praline","Musk / Vainilla"],mood:"diario",featured:16},
  {brand:"Bond No. 9",name:"Bleecker Street",cat:"unisex",price:UNIT_PRICE,size:"50 ml",img:"WhatsApp Image 2026-06-13 at 3.58.49 PM (1).jpeg",notes:["Bergamota / Lima","Te verde / Geranio","Cedro / Musk / Ambar"],mood:"firma",featured:17},
  {brand:"Moschino",name:"Toy Boy EDP",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.49 PM.jpeg",notes:["Cardamomo / Clavo","Rosa / Iris","Pachuli / Ambar"],mood:"noche",featured:18},
  {brand:"Maison Francis Kurkdjian",name:"Baccarat Rouge 540 Extrait",cat:"unisex",price:UNIT_PRICE,size:"70 ml",img:"WhatsApp Image 2026-06-13 at 3.58.50 PM (1).jpeg",notes:["Azafran / Jazmin","Ambrette / Resina","Cedro / Ambargris"],mood:"firma",featured:19},
  {brand:"Givenchy",name:"Gentleman Reserve Privee EDP",cat:"hombre",price:UNIT_PRICE,size:"60 ml",img:"WhatsApp Image 2026-06-13 at 3.58.50 PM.jpeg",notes:["Bergamota / Mandarina","Iris / Geranio","Vetiver / Musk"],mood:"oficina",featured:20},
  {brand:"Lattafa",name:"Mayar Natural Intense EDP",cat:"mujer",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.51 PM (1).jpeg",notes:["Bergamota / Pera","Peonia / Jazmin","Vainilla / Musk"],mood:"diario",featured:21},
  {brand:"Afnan",name:"9am Dive EDP",cat:"unisex",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.51 PM (2).jpeg",notes:["Citricos / Pepino","Notas marinas / Algas","Musk / Ambar"],mood:"diario",featured:22},
  {brand:"Rave",name:"Now Women EDP",cat:"mujer",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.51 PM.jpeg",notes:["Frutas dulces / Bayas","Rosa / Gardenia","Musk / Vainilla"],mood:"regalo",featured:23},
  {brand:"Afnan",name:"9pm Night Out Extrait",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.52 PM.jpeg",notes:["Manzana / Pera","Canela / Pachuli","Ambar / Musk"],mood:"noche",featured:24},
  {brand:"Afnan",name:"Supremacy Collector Edition",cat:"unisex",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.54 PM.jpeg",notes:["Bergamota / Limon","Pachuli / Cedro","Musk / Ambar"],mood:"firma",featured:25},
  {brand:"Ariana Grande",name:"Thank U Next EDP",cat:"mujer",price:UNIT_PRICE,size:"30 ml",img:"WhatsApp Image 2026-06-13 at 3.58.55 PM (1).jpeg",notes:["Ruibarbo / Frambuesa","Rosa / Higos","Ambar / Musk / Praline"],mood:"diario",featured:26},
  {brand:"Emporio Armani",name:"Stronger With You Absolutely EDP",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.55 PM (2).jpeg",notes:["Jengibre / Cardamomo","Castana / Lavanda","Vainilla / Ambar"],mood:"noche",featured:27},
  {brand:"Dolce & Gabbana",name:"Light Blue EDT",cat:"mujer",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.55 PM (3).jpeg",notes:["Limon siciliano / Bambu","Jazmin / Rosa","Cedro / Ambar"],mood:"diario",featured:28},
  {brand:"Lattafa",name:"Eclaire EDP",cat:"unisex",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.55 PM (4).jpeg",notes:["Bergamota / Pera","Jazmin / Rosa","Almizcle / Ambar"],mood:"regalo",featured:29},
  {brand:"Carolina Herrera",name:"Good Girl EDP",cat:"mujer",price:UNIT_PRICE,size:"50 ml",img:"WhatsApp Image 2026-06-13 at 3.58.55 PM.jpeg",notes:["Almendra / Cafe","Jazmin / Tuberosa","Cacao / Tonka"],mood:"noche",featured:30},
  {brand:"French Avenue",name:"Liquid Brun EDP",cat:"unisex",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.56 PM (1).jpeg",notes:["Bergamota / Canela","Praline / Vainilla","Ambar / Musk"],mood:"noche",featured:31},
  {brand:"Louis Vuitton",name:"Ombre Nomade EDP",cat:"unisex",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.56 PM (2).jpeg",notes:["Oud de lodo","Rosa / Incienso","Olibano / Resina"],mood:"firma",featured:32},
  {brand:"Dolce & Gabbana",name:"K by Dolce EDT",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.56 PM (3).jpeg",notes:["Bergamota / Calabaza","Cardamomo / Madera","Ambar / Vetiver"],mood:"oficina",featured:33},
  {brand:"Paco Rabanne",name:"Phantom EDT",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.56 PM.jpeg",notes:["Limon / Lavanda","Jengibre / Madera","Vainilla / Musk"],mood:"diario",featured:34},
  {brand:"Lancome",name:"La Vie est Belle EDP",cat:"mujer",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.57 PM (1).jpeg",notes:["Grosella / Pera","Iris / Jazmin","Praline / Vainilla / Pachuli"],mood:"regalo",featured:35},
  {brand:"Issey Miyake",name:"L'Eau d'Issey Pour Homme",cat:"hombre",price:UNIT_PRICE,size:"125 ml",img:"WhatsApp Image 2026-06-13 at 3.58.57 PM (2).jpeg",notes:["Bergamota / Mandarina","Nuez moscada / Salvia","Cedro / Sandalo"],mood:"diario",featured:36},
  {brand:"Giorgio Armani",name:"Acqua di Gio EDT",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.57 PM.jpeg",notes:["Bergamota / Neroli","Jazmin / Romero","Cedro / Pachuli / Musk"],mood:"diario",featured:37},
  {brand:"Hugo Boss",name:"Boss Bottled Unlimited EDT",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.58 PM.jpeg",notes:["Manzana / Bergamota","Canela / Mango","Madera / Musk"],mood:"diario",featured:38},
  {brand:"Paco Rabanne",name:"1 Million EDT",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.59 PM (1).jpeg",notes:["Mandarina / Toronja","Canela / Rosa","Cuero / Ambar / Cedro"],mood:"noche",featured:39},
  {brand:"Lattafa",name:"Angham EDP",cat:"unisex",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.59 PM (2).jpeg",notes:["Bergamota / Limon","Oud / Madera","Ambar / Almizcle"],mood:"firma",featured:40},
  {brand:"Xerjoff",name:"Naxos EDP",cat:"unisex",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.58.59 PM.jpeg",notes:["Bergamota / Lavanda","Miel / Tabaco","Tonka / Vainilla"],mood:"firma",featured:41},
  {brand:"Carolina Herrera",name:"Bad Boy EDT",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.00 PM (1).jpeg",notes:["Salvia verde / Menta","Cafe / Bergamota","Cedro / Ambar gris"],mood:"noche",featured:42},
  {brand:"Versace",name:"Bright Crystal EDT",cat:"mujer",price:UNIT_PRICE,size:"90 ml",img:"WhatsApp Image 2026-06-13 at 3.59.00 PM.jpeg",notes:["Granada / Yuzu","Magnolia / Loto","Ambar / Almizcle"],mood:"diario",featured:43},
  {brand:"Rasasi",name:"Hawas Kobra EDP",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.01 PM.jpeg",notes:["Manzana / Cardamomo","Ambar gris / Madera","Almizcle / Oud"],mood:"noche",featured:44},
  {brand:"Armaf",name:"Delights Yum Yum EDP",cat:"mujer",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.02 PM.jpeg",notes:["Pera / Bergamota","Rosa / Lirio","Praline / Vainilla"],mood:"regalo",featured:45},
  {brand:"Armaf",name:"Club de Nuit Intense Man EDT",cat:"hombre",price:UNIT_PRICE,size:"105 ml",img:"WhatsApp Image 2026-06-13 at 3.59.04 PM.jpeg",notes:["Limon / Pina","Rosa / Abedul","Musk / Ambar gris"],mood:"firma",featured:46},
  {brand:"Armaf",name:"Club de Nuit Woman EDP",cat:"mujer",price:UNIT_PRICE,size:"105 ml",img:"WhatsApp Image 2026-06-13 at 3.59.05 PM (1).jpeg",notes:["Bergamota / Durazno","Jazmin / Rosa","Vainilla / Musk"],mood:"noche",featured:47},
  {brand:"Carolina Herrera",name:"Bad Boy EDT Collector",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.05 PM (2).jpeg",notes:["Salvia verde / Menta","Cafe / Bergamota","Cedro / Ambar gris"],mood:"noche",featured:48},
  {brand:"Azzaro",name:"Wanted EDT",cat:"hombre",price:UNIT_PRICE,size:"50 ml",img:"WhatsApp Image 2026-06-13 at 3.59.05 PM (3).jpeg",notes:["Lima / Limon","Bergamota / Pimienta","Madera ambarada / Musk"],mood:"diario",featured:49},
  {brand:"Azzaro",name:"The Most Wanted EDP Intense",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.05 PM.jpeg",notes:["Cardamomo / Canela","Tonka / Lavanda","Madera ambarada / Vetiver"],mood:"noche",featured:50},
  {brand:"Rasasi",name:"Hawas Fire EDP",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.06 PM (1).jpeg",notes:["Mandarina / Bergamota","Canela / Especias","Ambar / Musk"],mood:"noche",featured:51},
  {brand:"Dior",name:"Sauvage EDP",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.06 PM (2).jpeg",notes:["Bergamota / Pimienta","Lavanda / Ambroxan","Cedro / Vetiver"],mood:"noche",featured:52},
  {brand:"Chanel",name:"No. 5 EDP",cat:"mujer",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.06 PM (3).jpeg",notes:["Aldehydes / Bergamota","Jazmin / Rosa / Iris","Vetiver / Sandalo / Musgo"],mood:"firma",featured:53},
  {brand:"Yves Saint Laurent",name:"MYSLF Le Parfum",cat:"hombre",price:UNIT_PRICE,size:"60 ml",img:"WhatsApp Image 2026-06-13 at 3.59.06 PM.jpeg",notes:["Bergamota siciliana","Flor de naranjo / Ambrette","Cedro / Vetiver"],mood:"firma",featured:54},
  {brand:"Rasasi",name:"Hawas Ice EDP Edition",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.07 PM (1).jpeg",notes:["Mandarina / Bergamota","Menta artica / Salvia","Ambar / Musk"],mood:"diario",featured:55},
  {brand:"Jean Paul Gaultier",name:"Le Beau Le Parfum Intense",cat:"hombre",price:UNIT_PRICE,size:"125 ml",img:"WhatsApp Image 2026-06-13 at 3.59.07 PM (2).jpeg",notes:["Lima / Bergamota","Coco / Heliotropo","Tonka / Vainilla"],mood:"firma",featured:56},
  {brand:"Lacoste",name:"L.12.12 Blanc EDT",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.07 PM (3).jpeg",notes:["Bergamota / Pamplemusa","Jazmin / Rosa","Cedro / Musk"],mood:"diario",featured:57},
  {brand:"Jo Milano",name:"Game of Spades Wildcard Parfum",cat:"unisex",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.07 PM (4).jpeg",notes:["Bergamota / Especias","Cuero / Rosa","Oud / Ambar"],mood:"noche",featured:58},
  {brand:"Armaf",name:"Club de Nuit Iconic EDP",cat:"unisex",price:UNIT_PRICE,size:"105 ml",img:"WhatsApp Image 2026-06-13 at 3.59.07 PM.jpeg",notes:["Bergamota / Limon","Rosa / Jazmin","Musk / Ambar"],mood:"noche",featured:59},
  {brand:"Afnan",name:"9pm EDP",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.08 PM (1).jpeg",notes:["Manzana / Pera","Pachuli / Canela","Ambar / Musk"],mood:"noche",featured:60},
  {brand:"Valentino",name:"Uomo Born in Roma EDT",cat:"hombre",price:UNIT_PRICE,size:"150 ml",img:"WhatsApp Image 2026-06-13 at 3.59.08 PM (2).jpeg",notes:["Bergamota","Iris / Piel","Vetiver / Ambar"],mood:"oficina",featured:61},
  {brand:"Lattafa",name:"Yara EDP",cat:"mujer",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.08 PM.jpeg",notes:["Frutas / Bergamota","Rosa / Jazmin","Almizcle / Ambar"],mood:"regalo",featured:62},
  {brand:"Jean Paul Gaultier",name:"Le Beau EDT",cat:"hombre",price:UNIT_PRICE,size:"125 ml",img:"WhatsApp Image 2026-06-13 at 3.59.09 PM (1).jpeg",notes:["Lima / Neroli","Coco / Heliotropo","Cedro / Musk"],mood:"diario",featured:63},
  {brand:"Lattafa",name:"Pride Afeef EDP",cat:"mujer",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.09 PM (2).jpeg",notes:["Bergamota / Frutas","Rosa / Peonia","Vainilla / Musk / Ambar"],mood:"firma",featured:64},
  {brand:"Al Haramain",name:"Amber Oud EDP",cat:"unisex",price:UNIT_PRICE,size:"60 ml",img:"WhatsApp Image 2026-06-13 at 3.59.09 PM (3).jpeg",notes:["Oud","Ambar / Especias","Vainilla / Musk"],mood:"firma",featured:65},
  {brand:"Armaf",name:"Odyssey Mandarin Sky EDP",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.09 PM (4).jpeg",notes:["Mandarina / Limon","Notas verdes / Madera","Musk / Ambar"],mood:"diario",featured:66},
  {brand:"Paco Rabanne",name:"Invictus Victory Elixir",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.09 PM.jpeg",notes:["Pomelo / Especias","Canela / Patchouli","Guayaco / Vetiver"],mood:"noche",featured:67},
  {brand:"Lattafa",name:"Khamrah EDP",cat:"unisex",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.10 PM (1).jpeg",notes:["Canela / Especias","Caramelo / Praline","Vainilla / Tonka"],mood:"noche",featured:68},
  {brand:"Afnan",name:"9pm Rebel EDP",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.10 PM (2).jpeg",notes:["Manzana / Bergamota","Cardamomo / Canela","Ambar / Musk"],mood:"noche",featured:69},
  {brand:"Lattafa",name:"Asad EDP",cat:"unisex",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.10 PM (3).jpeg",notes:["Bergamota / Especias","Oud / Cuero","Ambar / Musk"],mood:"firma",featured:70},
  {brand:"Yves Saint Laurent",name:"Y EDP",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.10 PM.jpeg",notes:["Manzana / Bergamota","Salvia / Geranio","Cedro / Tonka"],mood:"oficina",featured:71},
  {brand:"Jean Paul Gaultier",name:"Le Male Le Parfum",cat:"hombre",price:UNIT_PRICE,size:"125 ml",img:"WhatsApp Image 2026-06-13 at 3.59.11 PM.jpeg",notes:["Lavanda / Especias","Miel / Tabaco","Vainilla / Tonka"],mood:"noche",featured:72},
  {brand:"Jean Paul Gaultier",name:"Scandal Le Parfum Homme",cat:"hombre",price:UNIT_PRICE,size:"150 ml",img:"WhatsApp Image 2026-06-13 at 3.59.12 PM (1).jpeg",notes:["Bergamota / Limon","Tabaco / Pachuli","Madera / Ambar"],mood:"noche",featured:73},
  {brand:"Valentino",name:"Uomo Born in Roma Intense EDP",cat:"hombre",price:UNIT_PRICE,size:"100 ml",img:"WhatsApp Image 2026-06-13 at 3.59.12 PM.jpeg",notes:["Bergamota / Especias","Iris / Cuero","Cedro / Ambar"],mood:"noche",featured:74},
  {"brand":"Carolina Herrera","name":"212 Women EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"212-fem.webp","notes":["Mandarina / Gardenia","Nardo / Jazmin","Almizcle / Sandalo"],"mood":"diario","featured":75},
  {"brand":"Carolina Herrera","name":"212 Men NYC EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"212-men.webp","notes":["Bergamota / Jengibre","Lavanda / Algodon","Almizcle / Sandalo"],"mood":"diario","featured":76},
  {"brand":"Carolina Herrera","name":"212 Men Aqua Limited Edition","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"212-men-aqua.webp","notes":["Menta / Citricos","Notas acuaticas","Almizcle / Cedro"],"mood":"diario","featured":77},
  {"brand":"Carolina Herrera","name":"212 Men Heroes Forever Young","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"212-men-heroes.webp","notes":["Manzana / Citricos","Cardamomo / Jengibre","Almizcle / Madera"],"mood":"diario","featured":78},
  {"brand":"Carolina Herrera","name":"212 Men Heroes NYC MTV","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"212-men-heroes-nyc-mtv.webp","notes":["Manzana verde / Limon","Jengibre / Lavanda","Almizcle / Cedro"],"mood":"diario","featured":79},
  {"brand":"Carolina Herrera","name":"212 VIP Men Wild Party","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"212-men-wild-party.webp","notes":["Cardamomo / Lima","Jengibre / Menta","Cuero / Ambar"],"mood":"noche","featured":80},
  {"brand":"Carolina Herrera","name":"212 Sexy Women EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"212-sexy.webp","notes":["Mandarina / Frambuesa","Jazmin / Flor de naranjo","Vainilla / Almizcle"],"mood":"noche","featured":81},
  {"brand":"Carolina Herrera","name":"212 Sexy Men EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"212-sexy-men.webp","notes":["Bergamota / Pimienta rosa","Jengibre / Cardamomo","Vainilla / Sandalo"],"mood":"noche","featured":82},
  {"brand":"Carolina Herrera","name":"212 VIP Men EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"212-vip.webp","notes":["Lima / Maracuya","Jengibre / Menta","Ambar / Vodka"],"mood":"noche","featured":83},
  {"brand":"Carolina Herrera","name":"212 VIP Black EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"212-vip-black.webp","notes":["Absenta / Anis","Lavanda / Salvia","Vainilla / Almizcle"],"mood":"noche","featured":84},
  {"brand":"Carolina Herrera","name":"212 VIP Women EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"212-vip-fem.webp","notes":["Maracuya / Lima","Gardenia / Jazmin","Vainilla / Almizcle"],"mood":"noche","featured":85},
  {"brand":"Carolina Herrera","name":"212 VIP Men Are You On The List","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"212-vip-men.webp","notes":["Lima / Jengibre","Menta / Ambar","Cuero / Madera"],"mood":"noche","featured":86},
  {"brand":"Carolina Herrera","name":"212 VIP Black Red Limited","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"212-vip-men-red.webp","notes":["Absenta / Anis","Lavanda / Salvia","Vainilla / Almizcle"],"mood":"noche","featured":87},
  {"brand":"Carolina Herrera","name":"212 VIP Men Wins","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"212-vip-men-wins.webp","notes":["Cardamomo / Manzana verde","Cedro / Jengibre","Vetiver / Ambar"],"mood":"diario","featured":88},
  {"brand":"Carolina Herrera","name":"212 VIP Rose EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"212-vip-rose.webp","notes":["Champan rosado / Pimienta rosa","Rosa / Peonia","Almizcle / Madera"],"mood":"noche","featured":89},
  {"brand":"Carolina Herrera","name":"212 VIP Rose I Love NY","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"212-vip-rose-ilove-ny.webp","notes":["Champan rosado / Pimienta rosa","Rosa / Peonia","Almizcle / Madera"],"mood":"noche","featured":90},
  {"brand":"Perry Ellis","name":"360 for Men EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"360.webp","notes":["Menta / Citricos","Lavanda / Salvia","Almizcle / Madera"],"mood":"diario","featured":91},
  {"brand":"Perry Ellis","name":"360 Coral Women","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"360-perry-elis-coral.webp","notes":["Flores frescas / Frutas","Lirio / Jazmin","Almizcle / Ambar"],"mood":"diario","featured":92},
  {"brand":"Perry Ellis","name":"360 Red Women","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"360-perry-elis-red.webp","notes":["Frutas rojas / Citricos","Flores blancas","Almizcle / Madera"],"mood":"diario","featured":93},
  {"brand":"Perry Ellis","name":"360 White Women","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"360-perry-ellis.webp","notes":["Flor de naranjo / Citricos","Jazmin / Peonia","Almizcle / Sandalo"],"mood":"diario","featured":94},
  {"brand":"Perry Ellis","name":"360 Red for Men","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"360-red.webp","notes":["Mandarina / Pimienta","Salvia / Jengibre","Almizcle / Ambar"],"mood":"diario","featured":95},
  {"brand":"Afnan","name":"9PM Black EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"9pm-negra.webp","notes":["Manzana / Canela","Lavanda / Flor de naranjo","Vainilla / Tonka"],"mood":"noche","featured":96},
  {"brand":"Afnan","name":"9PM Night Out EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"9pm-night-out.webp","notes":["Manzana / Bergamota","Lavanda / Canela","Vainilla / Ambar"],"mood":"noche","featured":97},
  {"brand":"Afnan","name":"9PM Rebel EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"9pm-rebel.webp","notes":["Cardamomo / Lavanda","Almendra / Canela","Vainilla / Ambar"],"mood":"noche","featured":98},
  {"brand":"Giorgio Armani","name":"Acqua di Gio EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"acqua-di-gio.webp","notes":["Limon / Bergamota","Jazmin / Romero","Almizcle / Cedro"],"mood":"diario","featured":99},
  {"brand":"Giorgio Armani","name":"Acqua di Gio Profumo","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"acqua-di-gio-profumo.webp","notes":["Bergamota / Notas marinas","Salvia / Geranio","Incienso / Pachuli"],"mood":"noche","featured":100},
  {"brand":"Lattafa","name":"Body Spray Aerosol Surtido","cat":"unisex","price":UNIT_PRICE,"size":"Spray","img":"aerosol.webp","notes":["Citricos / Frutas","Flores / Especias","Almizcle / Ambar"],"mood":"diario","featured":101},
  {"brand":"Lattafa","name":"Afeef EDP","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"afeef-lattafa.webp","notes":["Cardamomo / Azafran","Rosa / Oud","Ambar / Madera"],"mood":"firma","featured":102},
  {"brand":"Escada","name":"Agua del Sol","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"agua-de-sol-escada.webp","notes":["Frutas tropicales / Citricos","Jazmin / Gardenia","Almizcle / Coco"],"mood":"diario","featured":103},
  {"brand":"Ahli","name":"Corvus Femme EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"ahli-fem-corvus.webp","notes":["Frutas rojas / Pera","Rosa / Jazmin","Vainilla / Almizcle"],"mood":"noche","featured":104},
  {"brand":"Ahli","name":"Karpos Femme EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"ahli-fem-karpos.webp","notes":["Bergamota / Frutas","Flores blancas","Almizcle / Ambar"],"mood":"diario","featured":105},
  {"brand":"Ahli","name":"Pegasus EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"ahli-pegasus.webp","notes":["Bergamota / Lavanda","Especias / Madera","Ambar / Almizcle"],"mood":"noche","featured":106},
  {"brand":"Ahli","name":"Vega EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"ahli-vega.webp","notes":["Pimienta / Cardamomo","Iris / Cuero","Ambar / Vainilla"],"mood":"noche","featured":107},
  {"brand":"Chanel","name":"Allure Homme Sport EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"allure-home-sport.webp","notes":["Naranja / Aldehidos","Pimienta / Neroli","Vainilla / Almizcle"],"mood":"diario","featured":108},
  {"brand":"Al Haramain","name":"Amber Oud Gold Edition","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"amber-oud-caja.webp","notes":["Bergamota / Frutas","Rosa / Flores","Ambar / Vainilla"],"mood":"firma","featured":109},
  {"brand":"Mugler","name":"Angel EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"angel-mugler-fem.webp","notes":["Bergamota / Frambuesa","Caramelo / Miel","Pachuli / Vainilla"],"mood":"noche","featured":110},
  {"brand":"Bvlgari","name":"Aqva Atlantiqve EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"aqua-bvlgari-atlantique.webp","notes":["Bergamota / Notas marinas","Lavanda / Salvia","Ambar / Madera"],"mood":"diario","featured":111},
  {"brand":"Giorgio Armani","name":"Acqua di Gio Profondo EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"aqua-di-gio-profondo.webp","notes":["Notas marinas / Bergamota","Romero / Lavanda","Pachuli / Almizcle"],"mood":"diario","featured":112},
  {"brand":"Ariana Grande","name":"Sweet Like Candy EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"ariana-candy.webp","notes":["Pera / Bergamota","Malvavisco / Vainilla","Almizcle / Sandalo"],"mood":"diario","featured":113},
  {"brand":"Ariana Grande","name":"Cloud EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"ariana-grande-cloud.webp","notes":["Lavanda / Bergamota","Coco / Crema","Praline / Vainilla"],"mood":"noche","featured":114},
  {"brand":"Ariana Grande","name":"Cloud Pink EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"ariana-grande-cloud-pink.webp","notes":["Pera / Frutas rojas","Lavanda / Orquidea","Almizcle / Vainilla"],"mood":"diario","featured":115},
  {"brand":"Ariana Grande","name":"R.E.M. EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"ariana-grande-r-e-m.webp","notes":["Pera / Higo","Flor de pera / Pistacho","Vainilla / Almizcle"],"mood":"noche","featured":116},
  {"brand":"Ariana Grande","name":"Mod Blush EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"ariana-mood-blush.webp","notes":["Frambuesa / Ciruela","Rosa / Lirio","Vainilla / Almizcle"],"mood":"diario","featured":117},
  {"brand":"Ariana Grande","name":"Thank U Next 2.0 EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"ariana-thank-next-2-0.webp","notes":["Pera / Frambuesa","Coco / Vainilla","Almizcle / Sandalo"],"mood":"diario","featured":118},
  {"brand":"Ariana Grande","name":"Thank U Next EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"ariana-thank-u-next.webp","notes":["Pera / Frambuesa","Coco / Vainilla","Almizcle / Sandalo"],"mood":"diario","featured":119},
  {"brand":"Lattafa","name":"Asad Bourbon EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"asad-bourbon.webp","notes":["Pimienta / Canela","Vainilla / Tabaco","Ambar / Cuero"],"mood":"noche","featured":120},
  {"brand":"Maison Francis Kurkdjian","name":"Baccarat Rouge 540 EDP","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"baccarat.webp","notes":["Azafran / Jazmin","Ambar gris / Cedro","Resina / Almizcle"],"mood":"firma","featured":121},
  {"brand":"Maison Francis Kurkdjian","name":"Baccarat Rouge 540 Extrait","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"baccarat-rouge.webp","notes":["Azafran / Jazmin","Ambar gris / Cedro","Resina / Almizcle"],"mood":"firma","featured":122},
  {"brand":"Carolina Herrera","name":"Bad Boy Le Parfum","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"bad-boy.webp","notes":["Pimienta negra / Bergamota","Salvia / Cacao","Tonka / Ambar"],"mood":"noche","featured":123},
  {"brand":"Le Labo","name":"Bergamote 22 EDP","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"bergamote-22.webp","notes":["Bergamota / Pomelo","Neroli / Pimienta","Vetiver / Ambar"],"mood":"diario","featured":124},
  {"brand":"Lattafa","name":"Berry on Top Give Me Gourmand","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"berry-on-top.webp","notes":["Frutas rojas / Frambuesa","Crema / Caramelo","Vainilla / Almizcle"],"mood":"regalo","featured":125},
  {"brand":"Bharara","name":"Bharara EDP","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"bharara.webp","notes":["Bergamota / Especias","Flores / Madera","Ambar / Almizcle"],"mood":"firma","featured":126},
  {"brand":"Bharara","name":"Don EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"bharara-don.webp","notes":["Pimienta / Cardamomo","Oud / Cuero","Ambar / Pachuli"],"mood":"noche","featured":127},
  {"brand":"Bharara","name":"King EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"bharara-king.webp","notes":["Lavanda / Bergamota","Vainilla / Iris","Ambar / Sandalo"],"mood":"firma","featured":128},
  {"brand":"Bharara","name":"King Cofre","cat":"hombre","price":UNIT_PRICE,"size":"Estuche","img":"bharara-king-cofre.webp","notes":["Lavanda / Bergamota","Vainilla / Iris","Ambar / Sandalo"],"mood":"regalo","featured":129},
  {"brand":"Bharara","name":"Niche EDP","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"bharara-niche.webp","notes":["Azafran / Bergamota","Rosa / Jazmin","Ambar / Vainilla"],"mood":"firma","featured":130},
  {"brand":"Bharara","name":"Niche Femme Cofre","cat":"mujer","price":UNIT_PRICE,"size":"Estuche","img":"bharara-niche-femme-cofre.webp","notes":["Azafran / Frutas","Rosa / Jazmin","Ambar / Vainilla"],"mood":"regalo","featured":131},
  {"brand":"Bharara","name":"Onyx Cofre","cat":"unisex","price":UNIT_PRICE,"size":"Estuche","img":"bharara-onyx-cofre.webp","notes":["Cardamomo / Pimienta","Oud / Rosa","Ambar / Cuero"],"mood":"regalo","featured":132},
  {"brand":"Bharara","name":"Rose Cofre","cat":"mujer","price":UNIT_PRICE,"size":"Estuche","img":"bharara-rose-cofre.webp","notes":["Rosa / Frambuesa","Peonia / Jazmin","Vainilla / Almizcle"],"mood":"regalo","featured":133},
  {"brand":"Bharara","name":"Scarlet EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"bharara-scarlet.webp","notes":["Frutas rojas / Pimienta rosa","Rosa / Jazmin","Vainilla / Ambar"],"mood":"noche","featured":134},
  {"brand":"Giardini di Toscana","name":"Bianco Latte EDP","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"bianco-latte.webp","notes":["Leche / Algodon de azucar","Vainilla / Caramelo","Almizcle / Sandalo"],"mood":"regalo","featured":135},
  {"brand":"Paco Rabanne","name":"Black XS EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"black-xs.webp","notes":["Limon / Lima","Cardamomo / Jengibre","Pachuli / Cuero"],"mood":"noche","featured":136},
  {"brand":"Paco Rabanne","name":"Black XS L'Aphrodisiaque","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"black-xs-l-aphrodisiaque.webp","notes":["Cafe / Pimienta","Cardamomo / Cacao","Vainilla / Ambar"],"mood":"noche","featured":137},
  {"brand":"Paco Rabanne","name":"Black XS L'Exces","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"black-xs-l-exces.webp","notes":["Mandarina / Pimienta","Cuero / Tabaco","Vainilla / Madera"],"mood":"noche","featured":138},
  {"brand":"Chanel","name":"Bleu de Chanel EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"bleu-de-chanel.webp","notes":["Pomelo / Limon","Jengibre / Nuez moscada","Cedro / Sandalo"],"mood":"firma","featured":139},
  {"brand":"Bvlgari","name":"BLV Pour Homme","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"blv-bvlgari.webp","notes":["Bergamota / Naranja","Pimienta / Cardamomo","Madera / Almizcle"],"mood":"oficina","featured":140},
  {"brand":"Viktor&Rolf","name":"Bonbon Cofre","cat":"mujer","price":UNIT_PRICE,"size":"Estuche","img":"bon-bon-cofre.webp","notes":["Mandarina / Naranja","Caramelo / Flor de naranjo","Vainilla / Sandalo"],"mood":"regalo","featured":141},
  {"brand":"Bond No. 9","name":"Bleecker Street Cofre","cat":"unisex","price":UNIT_PRICE,"size":"Estuche","img":"bond-bleecker-cofre.webp","notes":["Bergamota / Frutas","Flores blancas","Almizcle / Ambar"],"mood":"regalo","featured":142},
  {"brand":"Bond No. 9","name":"Chinatown EDP","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"bond-chinatownn.webp","notes":["Bergamota / Lichi","Peonia / Jazmin","Almizcle / Ambar"],"mood":"diario","featured":143},
  {"brand":"Bond No. 9","name":"New York Nights EDP","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"bond-n9.webp","notes":["Bergamota / Pimienta","Especias / Flores","Ambar / Almizcle"],"mood":"noche","featured":144},
  {"brand":"Bond No. 9","name":"Wall Street EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"bond-n9-wall-street.webp","notes":["Bergamota / Pomelo","Lavanda / Salvia","Cedro / Vetiver"],"mood":"oficina","featured":145},
  {"brand":"Bond No. 9","name":"New Haarlem EDP","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"bond-new.webp","notes":["Especias / Cardamomo","Madera / Lavanda","Ambar / Almizcle"],"mood":"noche","featured":146},
  {"brand":"Valentino","name":"Born in Roma EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"born-in-roma.webp","notes":["Salvia / Jengibre","Violeta / Mineral","Vetiver / Madera"],"mood":"diario","featured":147},
  {"brand":"Versace","name":"Bright Crystal EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"bright-crystal.webp","notes":["Granada / Yuzu","Peonia / Magnolia","Almizcle / Ambar"],"mood":"diario","featured":148},
  {"brand":"Burberry","name":"Burberry Her EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"burberry-her.webp","notes":["Frutas rojas / Grosella","Jazmin / Violeta","Vainilla / Almizcle"],"mood":"diario","featured":149},
  {"brand":"Bvlgari","name":"Man in Black EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"bvlgari-man-in-black.webp","notes":["Especias / Ron","Tuberosa / Iris","Cuero / Benjui"],"mood":"noche","featured":150},
  {"brand":"Louis Vuitton","name":"California Dream EDP","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"california-dream-lv.webp","notes":["Naranja / Citricos","Flor de naranjo","Ambar / Madera"],"mood":"diario","featured":151},
  {"brand":"Carolina Herrera","name":"CH Men EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"carolina-herrera-men.webp","notes":["Bergamota / Pomelo","Salvia / Cedro","Madera / Cuero"],"mood":"oficina","featured":152},
  {"brand":"Xerjoff","name":"Casamorati Regio","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"casamorati-regio.webp","notes":["Bergamota / Lavanda","Iris / Madera","Ambar / Almizcle"],"mood":"firma","featured":153},
  {"brand":"Carolina Herrera","name":"CH Africa EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"ch-africa.webp","notes":["Cardamomo / Citricos","Madera / Especias","Ambar / Almizcle"],"mood":"diario","featured":154},
  {"brand":"Carolina Herrera","name":"CH Beast EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"ch-beast.webp","notes":["Pimienta / Bergamota","Lavanda / Cuero","Madera / Ambar"],"mood":"noche","featured":155},
  {"brand":"Carolina Herrera","name":"CH Women EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"ch-fem.webp","notes":["Frutas / Bergamota","Rosa / Jazmin","Vainilla / Almizcle"],"mood":"diario","featured":156},
  {"brand":"Carolina Herrera","name":"CH Men Prive EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"ch-men.webp","notes":["Bergamota / Whisky","Lavanda / Cuero","Madera / Ambar"],"mood":"noche","featured":157},
  {"brand":"Chanel","name":"Chance EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"chance-de-chanel.webp","notes":["Pomelo / Pimienta rosa","Jazmin / Jacinto","Pachuli / Vetiver"],"mood":"diario","featured":158},
  {"brand":"Lattafa","name":"Choco Overdose","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"choco-overdose.webp","notes":["Chocolate / Cafe","Praline / Caramelo","Vainilla / Almizcle"],"mood":"regalo","featured":159},
  {"brand":"Calvin Klein","name":"CK Be EDT","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"ck-be.webp","notes":["Bergamota / Mandarina","Lavanda / Jazmin","Almizcle / Sandalo"],"mood":"diario","featured":160},
  {"brand":"Calvin Klein","name":"CK One EDT","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"ck-one.webp","notes":["Bergamota / Pina","Te verde / Jazmin","Almizcle / Ambar"],"mood":"diario","featured":161},
  {"brand":"Calvin Klein","name":"CK Shock EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"ck-shock.webp","notes":["Cardamomo / Pomelo","Salvia / Madera","Cuero / Ambar"],"mood":"diario","featured":162},
  {"brand":"Clinique","name":"Happy EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"clinique-happy.webp","notes":["Naranja / Mandarina","Flores / Frutas","Almizcle / Ambar"],"mood":"diario","featured":163},
  {"brand":"Armaf","name":"Club de Nuit Intense Man","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"club-de-nuit.webp","notes":["Limon / Pina","Abedul / Jazmin","Ambar gris / Vainilla"],"mood":"firma","featured":164},
  {"brand":"Armaf","name":"Club de Nuit Maleka","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"club-de-nuit-maleka.webp","notes":["Frutas / Bergamota","Rosa / Jazmin","Vainilla / Almizcle"],"mood":"noche","featured":165},
  {"brand":"Armaf","name":"Club de Nuit Milestone","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"club-de-nuit-milestone.webp","notes":["Bergamota / Manzana","Lavanda / Rosa","Ambar / Vainilla"],"mood":"diario","featured":166},
  {"brand":"Armaf","name":"Club de Nuit Untold","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"club-de-nuit-untold.webp","notes":["Azafran / Cardamomo","Jazmin / Rosa","Vainilla / Ambar"],"mood":"firma","featured":167},
  {"brand":"Chanel","name":"Coco Mademoiselle EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"coco-mademoiselle.webp","notes":["Naranja / Bergamota","Rosa / Jazmin","Pachuli / Vetiver"],"mood":"firma","featured":168},
  {"brand":"Lattafa","name":"Cookie Crave","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"cookie-crave.webp","notes":["Galleta / Mantequilla","Caramelo / Almendra","Vainilla / Almizcle"],"mood":"regalo","featured":169},
  {"brand":"Ahli","name":"Corvus Pour Homme EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"corvus.webp","notes":["Bergamota / Cardamomo","Lavanda / Pimienta","Ambar / Madera"],"mood":"noche","featured":170},
  {"brand":"Creed","name":"Aventus EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"creed-aventus.webp","notes":["Pina / Bergamota","Abedul / Pachuli","Almizcle / Ambar gris"],"mood":"firma","featured":171},
  {"brand":"Creed","name":"Millesime Imperial EDP","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"creed-millesine-imperial.webp","notes":["Limon / Bergamota","Sal marina","Ambar gris / Sandalo"],"mood":"firma","featured":172},
  {"brand":"Creed","name":"Original Vetiver EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"creed-original-vetiver.webp","notes":["Limon / Mandarina","Vetiver / Pimienta","Madera / Almizcle"],"mood":"oficina","featured":173},
  {"brand":"Creed","name":"Original Santal EDP","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"creed-santal.webp","notes":["Cardamomo / Iris","Sandalo / Jazmin","Cedro / Almizcle"],"mood":"firma","featured":174},
  {"brand":"Creed","name":"Silver Mountain Water EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"creed-silver-mountain.webp","notes":["Bergamota / Mandarina","Te verde / Grosella","Sandalo / Almizcle"],"mood":"diario","featured":175},
  {"brand":"Victoria's Secret","name":"Crema Corporal Fragancia","cat":"mujer","price":UNIT_PRICE,"size":"Spray","img":"crema-victoria-s-secret.webp","notes":["Frutas / Flores","Vainilla / Almendra","Almizcle / Ambar"],"mood":"regalo","featured":176},
  {"brand":"Cartier","name":"Declaration EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"declaration-cartier.webp","notes":["Bergamota / Naranja","Cedro / Jengibre","Vetiver / Ambar"],"mood":"oficina","featured":177},
  {"brand":"Parfums de Marly","name":"Delina EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"delina.webp","notes":["Ruibarbo / Lichi","Rosa / Peonia","Almizcle / Vainilla"],"mood":"firma","featured":178},
  {"brand":"Diesel","name":"Plus Plus Masculine EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"diesel-plus-plus.webp","notes":["Bergamota / Menta","Lavanda / Cuero","Madera / Ambar"],"mood":"diario","featured":179},
  {"brand":"Diesel","name":"Plus Plus Gold EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"diesel-plus-plus-gold.webp","notes":["Cardamomo / Citricos","Cuero / Madera","Ambar / Vainilla"],"mood":"noche","featured":180},
  {"brand":"Dolce & Gabbana","name":"Light Blue EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"dolce-gabbana-light-blue.webp","notes":["Limon siciliano / Manzana","Jazmin / Bambu","Cedro / Almizcle"],"mood":"diario","featured":181},
  {"brand":"Dolce & Gabbana","name":"Dolce Queen EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"dolce-gabbana-queen.webp","notes":["Frutas / Citricos","Flores blancas","Almizcle / Ambar"],"mood":"diario","featured":182},
  {"brand":"Dolce & Gabbana","name":"The Only One Rosso EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"dolce-gabbana-roja-fem.webp","notes":["Frutas rojas / Bergamota","Rosa / Violeta","Vainilla / Almizcle"],"mood":"noche","featured":183},
  {"brand":"Dolce & Gabbana","name":"The One EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"dolce-gabbana-the-one-fem.webp","notes":["Mandarina / Litchi","Lirio / Jazmin","Vainilla / Ambar"],"mood":"noche","featured":184},
  {"brand":"Valentino","name":"Donna Rosa EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"donna-pink.webp","notes":["Bergamota / Frutas rojas","Rosa / Jazmin","Vainilla / Almizcle"],"mood":"diario","featured":185},
  {"brand":"Cartier","name":"Eau de Cartier EDT","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"eau-de-cartier.webp","notes":["Bergamota / Limon","Cedro / Pimienta","Almizcle / Ambar"],"mood":"diario","featured":186},
  {"brand":"Lacoste","name":"L.12.12 Pour Elle EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"eau-de-lacoste-l12-12-pour-elle.webp","notes":["Pomelo / Pina","Jazmin / Peonia","Almizcle / Vetiver"],"mood":"diario","featured":187},
  {"brand":"Lattafa","name":"Eclaire Pistache","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"eclaire-pistache.webp","notes":["Pistacho / Crema","Caramelo / Almendra","Vainilla / Almizcle"],"mood":"regalo","featured":188},
  {"brand":"Escada","name":"Miami Blossom EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"escada-miami-blosson.webp","notes":["Frutas tropicales / Citricos","Jazmin / Peonia","Almizcle / Ambar"],"mood":"diario","featured":189},
  {"brand":"Escada","name":"Sorbetto Rosso EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"escada-sorbeto-rosso.webp","notes":["Frambuesa / Cereza","Peonia / Rosa","Almizcle / Sandalo"],"mood":"diario","featured":190},
  {"brand":"Ariana Grande","name":"Estuche Ariana Grande","cat":"mujer","price":UNIT_PRICE,"size":"Estuche","img":"estuche-ariana-grande.webp","notes":["Pera / Frambuesa","Vainilla / Coco","Almizcle / Sandalo"],"mood":"regalo","featured":191},
  {"brand":"Lattafa","name":"Estuche Odyssey x3","cat":"unisex","price":UNIT_PRICE,"size":"Estuche","img":"estuche-odyssey-x3.webp","notes":["Frutas / Citricos","Flores / Especias","Vainilla / Ambar"],"mood":"regalo","featured":192},
  {"brand":"Orientica","name":"Estuche Orientica Mini","cat":"unisex","price":UNIT_PRICE,"size":"Estuche","img":"estuche-orientica-mini.webp","notes":["Azafran / Bergamota","Oud / Rosa","Ambar / Almizcle"],"mood":"regalo","featured":193},
  {"brand":"Lattafa","name":"Estuche Shaheen","cat":"unisex","price":UNIT_PRICE,"size":"Estuche","img":"estuche-shaheen.webp","notes":["Azafran / Pimienta","Oud / Rosa","Ambar / Vainilla"],"mood":"regalo","featured":194},
  {"brand":"Lattafa","name":"Estuche Universo x3","cat":"unisex","price":UNIT_PRICE,"size":"Estuche","img":"estuche-universo-x-3.webp","notes":["Frutas / Citricos","Flores / Especias","Vainilla / Ambar"],"mood":"regalo","featured":195},
  {"brand":"Lattafa","name":"Estuche Yara Mini x3","cat":"mujer","price":UNIT_PRICE,"size":"Estuche","img":"estuche-yara-mini-x3.webp","notes":["Orquidea / Frutas","Vainilla / Heliotropo","Almizcle / Sandalo"],"mood":"regalo","featured":196},
  {"brand":"Lattafa","name":"Estuche Yum Yum Mini x3","cat":"mujer","price":UNIT_PRICE,"size":"Estuche","img":"estuche-yum-yum-mini-x3.webp","notes":["Frutas / Caramelo","Crema / Almendra","Vainilla / Almizcle"],"mood":"regalo","featured":197},
  {"brand":"Calvin Klein","name":"Eternity for Men EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"eternity-for-men.webp","notes":["Lavanda / Mandarina","Salvia / Geranio","Sandalo / Ambar"],"mood":"oficina","featured":198},
  {"brand":"Dior","name":"Fahrenheit EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"fahrenheit.webp","notes":["Mandarina / Lavanda","Violeta / Cuero","Vetiver / Sandalo"],"mood":"oficina","featured":199},
  {"brand":"Lattafa","name":"Fakhar Black EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"fakhar-black.webp","notes":["Bergamota / Lavanda","Madera / Iris","Ambar / Vainilla"],"mood":"noche","featured":200},
  {"brand":"Lattafa","name":"Fakhar Extrait","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"fakhar-extrait.webp","notes":["Cardamomo / Bergamota","Lavanda / Rosa","Ambar / Tonka"],"mood":"firma","featured":201},
  {"brand":"Lattafa","name":"Fakhar Rose EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"fakhar-rose.webp","notes":["Frutas / Pimienta rosa","Rosa / Peonia","Vainilla / Almizcle"],"mood":"noche","featured":202},
  {"brand":"Rabanne","name":"Fame Parfum","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"fame-couture.webp","notes":["Mango / Jazmin","Flores blancas","Vainilla / Sandalo"],"mood":"noche","featured":203},
  {"brand":"Rabanne","name":"Fame EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"fame-paco-rabanne.webp","notes":["Mango / Mandarina","Jazmin / Flores blancas","Vainilla / Almizcle"],"mood":"noche","featured":204},
  {"brand":"Britney Spears","name":"Fantasy EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"fantasy-britney-spears.webp","notes":["Kiwi / Litchi","Jazmin / Orquidea","Vainilla / Almizcle"],"mood":"diario","featured":205},
  {"brand":"Lattafa","name":"Feu EDP","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"feu.webp","notes":["Pimienta / Especias","Ambar / Rosa","Vainilla / Madera"],"mood":"noche","featured":206},
  {"brand":"Givenchy","name":"Blue Label EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"givenchy-blue-label.webp","notes":["Bergamota / Limon","Lavanda / Madera","Cedro / Almizcle"],"mood":"diario","featured":207},
  {"brand":"Carolina Herrera","name":"Good Girl EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"good-girl.webp","notes":["Almendra / Cafe","Jazmin / Tuberosa","Tonka / Cacao"],"mood":"noche","featured":208},
  {"brand":"Carolina Herrera","name":"Good Girl Blush EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"good-girl-blush.webp","notes":["Bergamota / Almendra","Rosa / Peonia","Tonka / Vainilla"],"mood":"diario","featured":209},
  {"brand":"Carolina Herrera","name":"Good Girl Blush Elixir","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"good-girl-blush-elixir.webp","notes":["Almendra / Bergamota","Rosa / Peonia","Tonka / Vainilla"],"mood":"noche","featured":210},
  {"brand":"Carolina Herrera","name":"Good Girl Fantastic Pink","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"good-girl-fantastic-pink.webp","notes":["Frutas rojas / Bergamota","Peonia / Jazmin","Tonka / Almizcle"],"mood":"diario","featured":211},
  {"brand":"Carolina Herrera","name":"Good Girl Legere","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"good-girl-legere.webp","notes":["Almendra / Bergamota","Jazmin / Tuberosa","Tonka / Almizcle"],"mood":"diario","featured":212},
  {"brand":"Creed","name":"Green Irish Tweed EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"green-irish-creed.webp","notes":["Limon / Verbena","Lirio / Iris","Sandalo / Ambar gris"],"mood":"oficina","featured":213},
  {"brand":"Gucci","name":"Guilty EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"gucci-guilty.webp","notes":["Lavanda / Mandarina","Neroli / Naranja","Cedro / Pachuli"],"mood":"noche","featured":214},
  {"brand":"Gucci","name":"Gucci The Voice","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"gucci-the-voice.webp","notes":["Bergamota / Frutas","Jazmin / Gardenia","Almizcle / Ambar"],"mood":"diario","featured":215},
  {"brand":"Jesus del Pozo","name":"Halloween Woman EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"halloween-fem.webp","notes":["Frutas / Manzana","Jazmin / Rosa","Vainilla / Ambar"],"mood":"noche","featured":216},
  {"brand":"Al Haramain","name":"Aqua Dubai EDP","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"haramain-aqua-dubai.webp","notes":["Notas marinas / Citricos","Flores / Menta","Almizcle / Ambar"],"mood":"diario","featured":217},
  {"brand":"Al Haramain","name":"Dubai Night EDP","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"haramain-dubai-night.webp","notes":["Bergamota / Especias","Oud / Rosa","Ambar / Vainilla"],"mood":"noche","featured":218},
  {"brand":"Rasasi","name":"Hawas Fire EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"hawas-fire.webp","notes":["Pimienta / Bergamota","Manzana / Jengibre","Ambar / Madera"],"mood":"noche","featured":219},
  {"brand":"Rasasi","name":"Hawas for Him EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"hawas-for-him.webp","notes":["Manzana / Canela","Bergamota / Lavanda","Ambar / Almizcle"],"mood":"diario","featured":220},
  {"brand":"Lattafa","name":"Haya Cofre","cat":"mujer","price":UNIT_PRICE,"size":"Estuche","img":"haya-cofre.webp","notes":["Frutas / Jazmin","Rosa / Vainilla","Almizcle / Ambar"],"mood":"regalo","featured":221},
  {"brand":"Lattafa","name":"Her Confession EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"her-confession.webp","notes":["Pera / Bergamota","Vainilla / Jazmin","Almizcle / Ambar"],"mood":"noche","featured":222},
  {"brand":"Paris Hilton","name":"Paris Hilton EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"hilton.webp","notes":["Frutas / Flores","Rosa / Jazmin","Vainilla / Almizcle"],"mood":"diario","featured":223},
  {"brand":"Hugo Boss","name":"Boss Bottled EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"hugo-boss-bottled.webp","notes":["Manzana / Bergamota","Canela / Geranio","Sandalo / Vetiver"],"mood":"oficina","featured":224},
  {"brand":"Hugo Boss","name":"Boss In Motion EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"hugo-boss-in-motion.webp","notes":["Mandarina / Bergamota","Pimienta / Madera","Almizcle / Ambar"],"mood":"diario","featured":225},
  {"brand":"Hugo Boss","name":"Hugo Man EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"hugo-boss-men.webp","notes":["Manzana verde / Salvia","Jengibre / Lavanda","Cedro / Almizcle"],"mood":"diario","featured":226},
  {"brand":"Hugo Boss","name":"Boss The Scent EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"hugo-boss-the-scent.webp","notes":["Jengibre / Mandarina","Maninka / Lavanda","Cuero / Madera"],"mood":"noche","featured":227},
  {"brand":"Hugo Boss","name":"Boss The Scent Absolute EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"hugo-boss-the-scent-absolute.webp","notes":["Jengibre / Pomelo","Maninka / Higo","Vainilla / Cuero"],"mood":"noche","featured":228},
  {"brand":"Hugo Boss","name":"Boss Unlimited EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"hugo-boss-unlimited.webp","notes":["Limon / Menta","Lavanda / Salvia","Almizcle / Madera"],"mood":"diario","featured":229},
  {"brand":"Amouage","name":"Interlude Man EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"interlude-amouage.webp","notes":["Oregano / Pimienta","Incienso / Ambar","Oud / Cuero"],"mood":"firma","featured":230},
  {"brand":"Paco Rabanne","name":"Invictus EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"invictus.webp","notes":["Pomelo / Mandarina","Laurel / Jazmin","Ambar gris / Madera"],"mood":"diario","featured":231},
  {"brand":"Paco Rabanne","name":"Invictus Aqua EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"invictus-aqua.webp","notes":["Notas marinas / Pomelo","Salvia / Jazmin","Madera / Ambar"],"mood":"diario","featured":232},
  {"brand":"Paco Rabanne","name":"Invictus Legend EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"invictus-legend.webp","notes":["Naranja / Bergamota","Lavanda / Salvia","Madera / Ambar"],"mood":"diario","featured":233},
  {"brand":"Paco Rabanne","name":"Invictus Onyx EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"invictus-onyx.webp","notes":["Pomelo / Pimienta","Ambar / Cuero","Madera / Almizcle"],"mood":"noche","featured":234},
  {"brand":"Paco Rabanne","name":"Invictus Platinum EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"invictus-platinum.webp","notes":["Lavanda / Bergamota","Cuero / Salvia","Ambar / Pachuli"],"mood":"noche","featured":235},
  {"brand":"Paco Rabanne","name":"Invictus Rogue","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"invictus-rogue.webp","notes":["Pimienta / Bergamota","Lavanda / Cuero","Ambar / Madera"],"mood":"noche","featured":236},
  {"brand":"Paco Rabanne","name":"Invictus Victory EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"invictus-victory.webp","notes":["Pomelo / Lavanda","Vainilla / Tonka","Ambar / Madera"],"mood":"noche","featured":237},
  {"brand":"Paco Rabanne","name":"Invictus Victory Elixir","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"invictus-victory-elixir.webp","notes":["Lavanda / Pomelo","Vainilla / Tonka","Ambar / Madera"],"mood":"noche","featured":238},
  {"brand":"Lattafa","name":"Island Bliss","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"island-bliss.webp","notes":["Coco / Frutas tropicales","Jazmin / Flor de tiare","Vainilla / Almizcle"],"mood":"diario","featured":239},
  {"brand":"Issey Miyake","name":"L'Eau d'Issey Pour Homme","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"issey-miyake.webp","notes":["Yuzu / Bergamota","Cardamomo / Jengibre","Madera / Almizcle"],"mood":"diario","featured":240},
  {"brand":"Issey Miyake","name":"Nuit d'Issey","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"issey-miyake-nuit.webp","notes":["Bergamota / Pimienta","Madera / Vetiver","Cedro / Ambar"],"mood":"noche","featured":241},
  {"brand":"Issey Miyake","name":"L'Eau d'Issey Polaris","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"issey-miyake-polaris.webp","notes":["Mandarina / Pimienta","Madera / Cardamomo","Almizcle / Ambar"],"mood":"diario","featured":242},
  {"brand":"Issey Miyake","name":"L'Eau d'Issey Rose & Rose","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"issey-miyake-rose-rose.webp","notes":["Rosa / Pomelo","Peonia / Jazmin","Almizcle / Madera"],"mood":"diario","featured":243},
  {"brand":"Issey Miyake","name":"L'Eau d'Issey EDT","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"issey-miyake-tradicional.webp","notes":["Loto / Fresia","Rosa / Peonia","Almizcle / Ambar"],"mood":"diario","featured":244},
  {"brand":"Jean Paul Gaultier","name":"Classique EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"jean-paul-classique.webp","notes":["Mandarina / Pera","Flor de naranjo / Jazmin","Vainilla / Ambar"],"mood":"noche","featured":245},
  {"brand":"Jean Paul Gaultier","name":"Le Male Elixir Lata","cat":"hombre","price":UNIT_PRICE,"size":"Lata","img":"jean-paul-elixir-lata.webp","notes":["Menta / Lavanda","Miel / Tabaco","Tonka / Vainilla"],"mood":"noche","featured":246},
  {"brand":"Jean Paul Gaultier","name":"Le Male EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"jean-paul-le-male.webp","notes":["Menta / Lavanda","Canela / Cardamomo","Vainilla / Tonka"],"mood":"noche","featured":247},
  {"brand":"Jean Paul Gaultier","name":"Le Male Caja","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"jean-paul-le-male-caja.webp","notes":["Menta / Lavanda","Canela / Cardamomo","Vainilla / Tonka"],"mood":"noche","featured":248},
  {"brand":"Jean Paul Gaultier","name":"Le Male Elixir Absolu","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"jean-paul-le-male-elixir-absolu.webp","notes":["Menta / Lavanda","Miel / Tabaco","Tonka / Vainilla"],"mood":"noche","featured":249},
  {"brand":"Jean Paul Gaultier","name":"Le Male Le Parfum","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"jean-paul-le-male-parfum.webp","notes":["Cardamomo / Lavanda","Iris / Vainilla","Ambar / Tonka"],"mood":"noche","featured":250},
  {"brand":"Jean Paul Gaultier","name":"Ultra Male EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"jean-paul-ultramale.webp","notes":["Pera / Menta","Lavanda / Canela","Vainilla negra / Ambar"],"mood":"noche","featured":251},
  {"brand":"Dolce & Gabbana","name":"K by Dolce & Gabbana","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"k-by-dolce-gabbana.webp","notes":["Naranja / Limon","Salvia / Geranio","Cedro / Sandalo"],"mood":"diario","featured":252},
  {"brand":"Lattafa","name":"Khamrah Dukhan","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"khamrah-dunkhan.webp","notes":["Canela / Nuez moscada","Datil / Praline","Vainilla / Tonka"],"mood":"noche","featured":253},
  {"brand":"Lattafa","name":"Khamrah Qahwa Karaz","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"khamrah-karaz.webp","notes":["Cafe / Cardamomo","Praline / Canela","Vainilla / Tonka"],"mood":"noche","featured":254},
  {"brand":"Lattafa","name":"Khamrah Black","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"khamrah-negra.webp","notes":["Canela / Bergamota","Datil / Praline","Vainilla / Ambar"],"mood":"noche","featured":255},
  {"brand":"Lattafa","name":"Khamrah Qahwa","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"khamrah-qahwa.webp","notes":["Cafe / Cardamomo","Praline / Canela","Vainilla / Tonka"],"mood":"noche","featured":256},
  {"brand":"Lattafa","name":"Khamrah Zanqam","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"khamrah-zanqam.webp","notes":["Canela / Cardamomo","Datil / Rosa","Vainilla / Ambar"],"mood":"noche","featured":257},
  {"brand":"Issey Miyake","name":"L'Eau d'Issey Femme EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"l-eau-d-issey-fem.webp","notes":["Loto / Fresia","Rosa / Peonia","Almizcle / Ambar"],"mood":"diario","featured":258},
  {"brand":"Louis Vuitton","name":"L'Immensite EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"l-inmensite-lv.webp","notes":["Bergamota / Pomelo","Jengibre / Ambroxan","Salvia / Ambar gris"],"mood":"firma","featured":259},
  {"brand":"Carolina Herrera","name":"La Bomba EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"la-bomba-carolina.webp","notes":["Frutas rojas / Pimienta","Rosa / Jazmin","Vainilla / Almizcle"],"mood":"noche","featured":260},
  {"brand":"Lancome","name":"La Vie Est Belle EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"la-vie-est-belle.webp","notes":["Grosella / Pera","Iris / Jazmin","Praline / Vainilla"],"mood":"firma","featured":261},
  {"brand":"Lacoste","name":"Lacoste Blue EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"lacoste-azul.webp","notes":["Menta / Cardamomo","Salvia / Madera","Cedro / Almizcle"],"mood":"diario","featured":262},
  {"brand":"Lacoste","name":"Lacoste Essential EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"lacoste-essential.webp","notes":["Bergamota / Jengibre","Cardamomo / Salvia","Cedro / Vetiver"],"mood":"diario","featured":263},
  {"brand":"Lacoste","name":"Lacoste Live EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"lacoste-live.webp","notes":["Mandarina / Pimienta","Lavanda / Salvia","Madera / Ambar"],"mood":"diario","featured":264},
  {"brand":"Lacoste","name":"Lacoste Natural EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"lacoste-natural.webp","notes":["Citricos / Hierbas","Lavanda / Madera","Cedro / Almizcle"],"mood":"diario","featured":265},
  {"brand":"Lacoste","name":"Lacoste Noir EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"lacoste-noir.webp","notes":["Bergamota / Pimienta","Madera / Cuero","Ambar / Almizcle"],"mood":"noche","featured":266},
  {"brand":"Lacoste","name":"Lacoste Red EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"lacoste-red.webp","notes":["Pomelo / Jengibre","Salvia / Madera","Cedro / Almizcle"],"mood":"diario","featured":267},
  {"brand":"Lacoste","name":"Lacoste Rouge Women EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"lacoste-rouge.webp","notes":["Frutas rojas / Citricos","Rosa / Peonia","Almizcle / Ambar"],"mood":"diario","featured":268},
  {"brand":"Lacoste","name":"Lacoste Vert EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"lacoste-vert.webp","notes":["Menta / Manzana","Hierbas / Lavanda","Madera / Almizcle"],"mood":"diario","featured":269},
  {"brand":"Lacoste","name":"Lacoste White EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"lacoste-white.webp","notes":["Cardamomo / Mandarina","Cuero / Madera","Almizcle / Vetiver"],"mood":"oficina","featured":270},
  {"brand":"Rabanne","name":"Lady Million Royal EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"lady-million-royal.webp","notes":["Frutas / Bergamota","Jazmin / Rosa","Ambar / Vainilla"],"mood":"noche","featured":271},
  {"brand":"Rabanne","name":"Lady Million EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"lady-millon.webp","notes":["Frambuesa / Neroli","Jazmin / Gardenia","Miel / Pachuli"],"mood":"noche","featured":272},
  {"brand":"Ted Lapidus","name":"Lapidus Pour Homme","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"lapidus.webp","notes":["Lavanda / Bergamota","Madera / Especias","Ambar / Almizcle"],"mood":"oficina","featured":273},
  {"brand":"Lattafa","name":"Amethyst Cofre","cat":"mujer","price":UNIT_PRICE,"size":"Estuche","img":"lattafa-amethyst-cofre.webp","notes":["Frutas / Bergamota","Rosa / Jazmin","Vainilla / Almizcle"],"mood":"regalo","featured":274},
  {"brand":"Lattafa","name":"Emeer EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"lattafa-emeer.webp","notes":["Pimienta / Bergamota","Oud / Lavanda","Ambar / Vainilla"],"mood":"noche","featured":275},
  {"brand":"Lattafa","name":"Fakhar Gold EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"lattafa-fakhar.webp","notes":["Bergamota / Lavanda","Madera / Iris","Ambar / Vainilla"],"mood":"firma","featured":276},
  {"brand":"Lattafa","name":"Honor & Glory Cofre","cat":"unisex","price":UNIT_PRICE,"size":"Estuche","img":"lattafa-honor-glory-cofre.webp","notes":["Cardamomo / Bergamota","Madera / Vainilla","Ambar / Tonka"],"mood":"regalo","featured":277},
  {"brand":"Lattafa","name":"Mayar Blue EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"lattafa-mayar-azul.webp","notes":["Frutas / Pera","Flores blancas","Vainilla / Almizcle"],"mood":"diario","featured":278},
  {"brand":"Lattafa","name":"Mayar Rosa EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"lattafa-mayar-rosada.webp","notes":["Frambuesa / Pera","Rosa / Peonia","Vainilla / Almizcle"],"mood":"diario","featured":279},
  {"brand":"Lattafa","name":"Noble Blush EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"lattafa-noble-blush.webp","notes":["Frutas rojas / Pimienta rosa","Rosa / Peonia","Vainilla / Almizcle"],"mood":"diario","featured":280},
  {"brand":"Lattafa","name":"Pisa EDP","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"lattafa-pisa.webp","notes":["Bergamota / Mandarina","Flores blancas","Almizcle / Ambar"],"mood":"diario","featured":281},
  {"brand":"Lattafa","name":"Sublime Cofre","cat":"mujer","price":UNIT_PRICE,"size":"Estuche","img":"lattafa-sublime-cofre.webp","notes":["Frutas / Pera","Vainilla / Jazmin","Almizcle / Ambar"],"mood":"regalo","featured":282},
  {"brand":"Lattafa","name":"Universo EDP","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"lattafa-universo.webp","notes":["Bergamota / Frutas","Flores / Especias","Vainilla / Ambar"],"mood":"diario","featured":283},
  {"brand":"Jean Paul Gaultier","name":"Le Beau Le Parfum","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"le-beau-le-parfum.webp","notes":["Pina / Bergamota","Coco / Tonka","Vainilla / Sandalo"],"mood":"firma","featured":284},
  {"brand":"Jean Paul Gaultier","name":"Le Beau Paradise Garden","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"le-beau-paradise-garden.webp","notes":["Higo / Bergamota","Coco / Hoja de higuera","Sandalo / Almizcle"],"mood":"diario","featured":285},
  {"brand":"Jean Paul Gaultier","name":"Le Male Lata","cat":"hombre","price":UNIT_PRICE,"size":"Lata","img":"le-male-lata.webp","notes":["Menta / Lavanda","Canela / Cardamomo","Vainilla / Tonka"],"mood":"noche","featured":286},
  {"brand":"Jean Paul Gaultier","name":"Le Male Le Parfum Lata","cat":"hombre","price":UNIT_PRICE,"size":"Lata","img":"le-male-le-parfum-lata.webp","notes":["Cardamomo / Lavanda","Iris / Vainilla","Ambar / Tonka"],"mood":"noche","featured":287},
  {"brand":"Parfums de Marly","name":"Layton Exclusif","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"leyton-exclusif.webp","notes":["Manzana / Lavanda","Vainilla / Cardamomo","Pachuli / Sandalo"],"mood":"firma","featured":288},
  {"brand":"Dolce & Gabbana","name":"Light Blue Forever EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"light-blue-forever.webp","notes":["Limon / Manzana","Enebro / Romero","Almizcle / Ambar"],"mood":"diario","featured":289},
  {"brand":"Lattafa","name":"Mallow Madness","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"mallow-madness.webp","notes":["Malvavisco / Frutas","Vainilla / Crema","Almizcle / Sandalo"],"mood":"regalo","featured":290},
  {"brand":"Marc Jacobs","name":"Daisy Rojo EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"marc-jacobs-rojo.webp","notes":["Frutas rojas / Pomelo","Rosa / Jazmin","Vainilla / Almizcle"],"mood":"diario","featured":291},
  {"brand":"Marc Jacobs","name":"Daisy Rosado EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"marc-jacobs-rosado.webp","notes":["Fresa / Violeta","Jazmin / Gardenia","Vainilla / Almizcle"],"mood":"diario","featured":292},
  {"brand":"Lattafa","name":"Marshmallow","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"marshmallow.webp","notes":["Malvavisco / Vainilla","Crema / Flores","Almizcle / Sandalo"],"mood":"regalo","featured":293},
  {"brand":"Lattafa","name":"Mefisto EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"mefisto.webp","notes":["Pimienta / Bergamota","Cardamomo / Lavanda","Ambar / Madera"],"mood":"noche","featured":294},
  {"brand":"Mercedes-Benz","name":"Mercedes-Benz Man EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"mercedes-benz.webp","notes":["Bergamota / Lavanda","Madera / Salvia","Ambar / Almizcle"],"mood":"oficina","featured":295},
  {"brand":"Dior","name":"Miss Dior EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"miss-dior-fem.webp","notes":["Mandarina / Peonia","Rosa / Lirio","Pachuli / Almizcle"],"mood":"firma","featured":296},
  {"brand":"Montblanc","name":"Emblem EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"mont-blanc-emblem.webp","notes":["Pomelo / Cardamomo","Salvia / Violeta","Madera / Ambar"],"mood":"oficina","featured":297},
  {"brand":"Montblanc","name":"Legend EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"mont-blanc-legend.webp","notes":["Bergamota / Lavanda","Pina / Manzana","Musgo / Madera"],"mood":"oficina","featured":298},
  {"brand":"Montblanc","name":"Legend Spirit EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"mont-blanc-legend-spirit.webp","notes":["Bergamota / Limon","Notas marinas / Menta","Cedro / Almizcle"],"mood":"diario","featured":299},
  {"brand":"Montblanc","name":"Starwalker EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"mont-blanc-stalwaker.webp","notes":["Menta / Pomelo","Violeta / Pimienta","Madera / Vetiver"],"mood":"diario","featured":300},
  {"brand":"Montale","name":"Arabians Tonka","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"montale-arabians-tonka.webp","notes":["Rosa / Azafran","Oud / Almendra","Tonka / Vainilla"],"mood":"firma","featured":301},
  {"brand":"Montale","name":"Candy Rose","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"montale-candy-rose.webp","notes":["Rosa / Frutas","Vainilla / Caramelo","Almizcle / Sandalo"],"mood":"regalo","featured":302},
  {"brand":"Montale","name":"Intense Cafe","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"montale-intense-cafe.webp","notes":["Cafe / Rosa","Vainilla / Cuero","Ambar / Madera"],"mood":"noche","featured":303},
  {"brand":"Montale","name":"Starry Nights","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"montale-starry-nights.webp","notes":["Bergamota / Frutas","Jazmin / Rosa","Vainilla / Ambar"],"mood":"noche","featured":304},
  {"brand":"Moschino","name":"Fresh Couture EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"moschino-fresh.webp","notes":["Frutas / Citricos","Flores blancas","Almizcle / Ambar"],"mood":"diario","featured":305},
  {"brand":"Moschino","name":"Funny EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"moschino-funny.webp","notes":["Frutas / Citricos","Flores / Peonia","Almizcle / Ambar"],"mood":"diario","featured":306},
  {"brand":"Moschino","name":"Pink Bouquet Pearl","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"moschino-pearl.webp","notes":["Pera / Frutas","Rosa / Peonia","Almizcle / Ambar"],"mood":"diario","featured":307},
  {"brand":"Nautica","name":"Voyage EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"nautica-voyage.webp","notes":["Limon / Manzana","Nenufar / Madera","Cedro / Musk"],"mood":"diario","featured":308},
  {"brand":"Tom Ford","name":"Neroli Portofino EDP","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"neroli-tom-ford.webp","notes":["Bergamota / Limon","Neroli / Jazmin","Ambar / Almizcle"],"mood":"diario","featured":309},
  {"brand":"Lattafa","name":"Nitro Red","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"nitro-red.webp","notes":["Pimienta / Bergamota","Lavanda / Cardamomo","Ambar / Madera"],"mood":"diario","featured":310},
  {"brand":"Lattafa","name":"Now Women EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"now-women-lattafa.webp","notes":["Frutas / Bergamota","Rosa / Jazmin","Vainilla / Almizcle"],"mood":"diario","featured":311},
  {"brand":"Lattafa","name":"Nusuk Blue","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"nusuk-azul.webp","notes":["Citricos / Menta","Flores / Madera","Almizcle / Ambar"],"mood":"diario","featured":312},
  {"brand":"Lattafa","name":"Nusuk White","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"nusuk-blanca.webp","notes":["Bergamota / Flores blancas","Jazmin / Peonia","Almizcle / Sandalo"],"mood":"diario","featured":313},
  {"brand":"Lattafa","name":"Nusuk Red","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"nusuka-roja.webp","notes":["Frutas rojas / Pimienta","Rosa / Especias","Ambar / Vainilla"],"mood":"noche","featured":314},
  {"brand":"Armaf","name":"Odyssey Aoud","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"odyssey-aoud.webp","notes":["Cardamomo / Pimienta","Oud / Cuero","Ambar / Madera"],"mood":"noche","featured":315},
  {"brand":"Armaf","name":"Odyssey Aqua","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"odyssey-aqua.webp","notes":["Notas marinas / Citricos","Menta / Lavanda","Almizcle / Madera"],"mood":"diario","featured":316},
  {"brand":"Armaf","name":"Odyssey Bahamas","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"odyssey-bahamas.webp","notes":["Coco / Frutas tropicales","Flores blancas","Vainilla / Almizcle"],"mood":"diario","featured":317},
  {"brand":"Armaf","name":"Odyssey Candee","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"odyssey-candee.webp","notes":["Frutas / Caramelo","Crema / Flores","Vainilla / Almizcle"],"mood":"regalo","featured":318},
  {"brand":"Armaf","name":"Odyssey Go Mango","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"odyssey-go-mango.webp","notes":["Mango / Maracuya","Coco / Flores","Vainilla / Almizcle"],"mood":"diario","featured":319},
  {"brand":"Armaf","name":"Odyssey Homme","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"odyssey-homme.webp","notes":["Bergamota / Manzana","Lavanda / Cardamomo","Ambar / Vainilla"],"mood":"diario","featured":320},
  {"brand":"Armaf","name":"Odyssey Spectra","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"odyssey-spectra.webp","notes":["Frutas / Bergamota","Flores / Especias","Ambar / Almizcle"],"mood":"diario","featured":321},
  {"brand":"Rabanne","name":"Olympea EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"olympea-paco-rabanne.webp","notes":["Mandarina / Jazmin","Vainilla / Sal","Ambar gris / Sandalo"],"mood":"noche","featured":322},
  {"brand":"Louis Vuitton","name":"Ombre Nomade EDP","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"ombre-nomade.webp","notes":["Oud / Incienso","Rosa / Azafran","Ambar / Benjui"],"mood":"firma","featured":323},
  {"brand":"Bvlgari","name":"Omnia Amethyste EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"omnia-amethyste.webp","notes":["Bergamota / Frutas rojas","Peonia / Iris","Almizcle / Ambar"],"mood":"diario","featured":324},
  {"brand":"Bvlgari","name":"Omnia Coral EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"omnia-coral.webp","notes":["Granada / Mandarina","Peonia / Jazmin","Almizcle / Ambar"],"mood":"diario","featured":325},
  {"brand":"Bvlgari","name":"Omnia Crystalline EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"omnia-crystalline.webp","notes":["Bambu / Te","Loto / Peonia","Almizcle / Madera"],"mood":"diario","featured":326},
  {"brand":"Rabanne","name":"1 Million EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"one-million.webp","notes":["Pomelo / Menta","Canela / Rosa","Cuero / Ambar"],"mood":"noche","featured":327},
  {"brand":"Rabanne","name":"1 Million Elixir","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"one-million-elixir.webp","notes":["Mandarina / Pomelo","Miel / Lavanda","Vainilla / Ambar"],"mood":"noche","featured":328},
  {"brand":"Rabanne","name":"1 Million Gold","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"one-million-gold.webp","notes":["Mandarina / Pomelo","Canela / Rosa","Cuero / Ambar"],"mood":"noche","featured":329},
  {"brand":"Rabanne","name":"1 Million Lucky EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"one-million-lucky.webp","notes":["Ciruela / Bergamota","Avellana / Miel","Madera / Ambar"],"mood":"noche","featured":330},
  {"brand":"Rabanne","name":"1 Million Parfum","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"one-million-parfum.webp","notes":["Pimienta / Bergamota","Cuero / Cacao","Vainilla / Ambar"],"mood":"noche","featured":331},
  {"brand":"Rabanne","name":"1 Million Prive EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"one-million-prive.webp","notes":["Manzana / Bergamota","Cuero / Pimienta","Ambar / Vainilla"],"mood":"noche","featured":332},
  {"brand":"Rabanne","name":"1 Million Royal","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"one-million-royal.webp","notes":["Lavanda / Bergamota","Cuero / Pimienta","Ambar / Vainilla"],"mood":"noche","featured":333},
  {"brand":"Orientica","name":"Amber Noir Cofre","cat":"unisex","price":UNIT_PRICE,"size":"Estuche","img":"orientica-amber-noir-cofre.webp","notes":["Azafran / Pimienta","Ambar / Rosa","Oud / Vainilla"],"mood":"regalo","featured":334},
  {"brand":"Orientica","name":"Amber Rouge","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"orientica-amber-rouge-caja.webp","notes":["Azafran / Jengibre","Ambar / Jazmin","Cedro / Resina"],"mood":"firma","featured":335},
  {"brand":"Orientica","name":"Amber Rouge Cofre","cat":"unisex","price":UNIT_PRICE,"size":"Estuche","img":"orientica-amber-rouge-cofre.webp","notes":["Azafran / Jengibre","Ambar / Jazmin","Cedro / Resina"],"mood":"regalo","featured":336},
  {"brand":"Orientica","name":"Azure Fantasy Cofre","cat":"unisex","price":UNIT_PRICE,"size":"Estuche","img":"orientica-azure-fantasy-cofre.webp","notes":["Bergamota / Frutas","Flores / Ambar","Almizcle / Madera"],"mood":"regalo","featured":337},
  {"brand":"Orientica","name":"Dania Cofre","cat":"mujer","price":UNIT_PRICE,"size":"Estuche","img":"orientica-dania-cofre.webp","notes":["Frutas / Rosa","Jazmin / Ambar","Vainilla / Almizcle"],"mood":"regalo","featured":338},
  {"brand":"Orientica","name":"Noble EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"orientica-noble.webp","notes":["Bergamota / Cardamomo","Lavanda / Ambar","Madera / Almizcle"],"mood":"firma","featured":339},
  {"brand":"Orientica","name":"Oud Saffron Cofre","cat":"unisex","price":UNIT_PRICE,"size":"Estuche","img":"orientica-oud-saffron-cofre.webp","notes":["Azafran / Rosa","Oud / Ambar","Madera / Almizcle"],"mood":"regalo","featured":340},
  {"brand":"Orientica","name":"Royal Amber","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"orientica-royal-amber-caja.webp","notes":["Azafran / Bergamota","Ambar / Rosa","Oud / Vainilla"],"mood":"firma","featured":341},
  {"brand":"Orientica","name":"Royal Amber Cofre","cat":"unisex","price":UNIT_PRICE,"size":"Estuche","img":"orientica-royal-amber-cofre.webp","notes":["Azafran / Bergamota","Ambar / Rosa","Oud / Vainilla"],"mood":"regalo","featured":342},
  {"brand":"Orientica","name":"Velvet Gold","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"orientica-velvet-gold.webp","notes":["Bergamota / Azafran","Rosa / Ambar","Vainilla / Almizcle"],"mood":"firma","featured":343},
  {"brand":"Orientica","name":"Velvet Gold Caja","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"orientica-velvet-gold-caja.webp","notes":["Bergamota / Azafran","Rosa / Ambar","Vainilla / Almizcle"],"mood":"firma","featured":344},
  {"brand":"Orientica","name":"Oud Saffron","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"oud-saffron-caja.webp","notes":["Azafran / Rosa","Oud / Ambar","Madera / Almizcle"],"mood":"firma","featured":345},
  {"brand":"Parfums de Marly","name":"Kalan EDP","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"parfums-de-marly-kalan.webp","notes":["Bergamota / Cardamomo","Lavanda / Madera","Ambar / Almizcle"],"mood":"firma","featured":346},
  {"brand":"Paris Hilton","name":"Paris Hilton EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"paris-hilton.webp","notes":["Frutas / Flores","Rosa / Jazmin","Vainilla / Almizcle"],"mood":"diario","featured":347},
  {"brand":"Paris Hilton","name":"Can Can EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"paris-hilton-can-can.webp","notes":["Frutas / Bergamota","Rosa / Jazmin","Vainilla / Almizcle"],"mood":"diario","featured":348},
  {"brand":"Paris Hilton","name":"Dazzle EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"paris-hilton-dazzle.webp","notes":["Frutas / Citricos","Flores blancas","Vainilla / Almizcle"],"mood":"diario","featured":349},
  {"brand":"Paris Hilton","name":"Heiress EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"paris-hilton-heiress.webp","notes":["Frutas / Orquidea","Jazmin / Rosa","Vainilla / Almizcle"],"mood":"diario","featured":350},
  {"brand":"Jean Paul Gaultier","name":"Classique Dorada","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"paul-classique-dorada.webp","notes":["Mandarina / Pera","Flor de naranjo / Jazmin","Vainilla / Ambar"],"mood":"noche","featured":351},
  {"brand":"Rabanne","name":"Phantom Intense","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"phantom-intense.webp","notes":["Lavanda / Limon","Cardamomo / Salvia","Vainilla / Pachuli"],"mood":"noche","featured":352},
  {"brand":"Rabanne","name":"Phantom Legion","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"phantom-legion.webp","notes":["Limon / Lavanda","Vainilla / Cardamomo","Ambar / Madera"],"mood":"noche","featured":353},
  {"brand":"Rabanne","name":"Phantom Black","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"phantom-negra.webp","notes":["Limon / Lavanda","Vainilla / Cardamomo","Ambar / Madera"],"mood":"noche","featured":354},
  {"brand":"Rabanne","name":"Phantom EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"phantom-paco-rabanne.webp","notes":["Limon / Lavanda","Vainilla / Cardamomo","Ambar / Madera"],"mood":"diario","featured":355},
  {"brand":"Ralph Lauren","name":"Polo Blue EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"polo-blue.webp","notes":["Melon / Pepino","Salvia / Albahaca","Almizcle / Madera"],"mood":"diario","featured":356},
  {"brand":"Ralph Lauren","name":"Polo Red EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"polo-red.webp","notes":["Pomelo / Arandano","Azafran / Salvia","Cafe / Madera"],"mood":"noche","featured":357},
  {"brand":"Prada","name":"Paradoxe EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"prada-paradoxe.webp","notes":["Neroli / Bergamota","Jazmin / Flor de naranjo","Ambar / Almizcle"],"mood":"firma","featured":358},
  {"brand":"Rabanne","name":"Pure XS EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"pure-xs.webp","notes":["Jengibre / Mandarina","Salvia / Pachuli","Vainilla / Sandalo"],"mood":"noche","featured":359},
  {"brand":"Ralph Lauren","name":"Ralph Lauren Fragancia","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"ralph-lauren.webp","notes":["Bergamota / Lavanda","Madera / Especias","Ambar / Almizcle"],"mood":"oficina","featured":360},
  {"brand":"Maison Francis Kurkdjian","name":"Rouge Caja","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"rouge-caja.webp","notes":["Azafran / Jazmin","Ambar gris / Cedro","Resina / Almizcle"],"mood":"firma","featured":361},
  {"brand":"Le Labo","name":"Santal 33 EDP","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"santal-33.webp","notes":["Cardamomo / Iris","Sandalo / Violeta","Cedro / Cuero"],"mood":"firma","featured":362},
  {"brand":"Cartier","name":"Santos de Cartier EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"santos-de-cartier.webp","notes":["Mandarina / Pomelo","Lavanda / Salvia","Cedro / Sandalo"],"mood":"oficina","featured":363},
  {"brand":"Dior","name":"Sauvage EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"sauvage.webp","notes":["Bergamota / Pimienta","Lavanda / Geranio","Ambroxan / Cedro"],"mood":"firma","featured":364},
  {"brand":"Dior","name":"Sauvage Elixir","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"sauvage-elixir-dior.webp","notes":["Canela / Nuez moscada","Lavanda / Regaliz","Sandalo / Ambar"],"mood":"noche","featured":365},
  {"brand":"Jean Paul Gaultier","name":"Scandal EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"scandal-fem.webp","notes":["Naranja / Miel","Gardenia / Jazmin","Pachuli / Caramelo"],"mood":"noche","featured":366},
  {"brand":"Jean Paul Gaultier","name":"Scandal Gold","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"scandal-gold.webp","notes":["Mandarina / Miel","Gardenia / Jazmin","Pachuli / Vainilla"],"mood":"noche","featured":367},
  {"brand":"Jean Paul Gaultier","name":"La Belle EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"scandal-la-belle.webp","notes":["Pera / Coco","Vainilla / Haba tonka","Almendra / Sandalo"],"mood":"noche","featured":368},
  {"brand":"Jean Paul Gaultier","name":"Scandal Le Parfum Pour Homme","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"scandal-le-parfum-men.webp","notes":["Pomelo / Menta","Miel / Cardamomo","Cuero / Vainilla"],"mood":"noche","featured":369},
  {"brand":"Jean Paul Gaultier","name":"Scandal Pour Homme EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"scandal-men.webp","notes":["Mandarina / Menta","Miel / Salvia","Cuero / Caramelo"],"mood":"noche","featured":370},
  {"brand":"Lattafa","name":"Sehr EDP","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"sehr-lattafa.webp","notes":["Cardamomo / Bergamota","Rosa / Oud","Ambar / Vainilla"],"mood":"firma","featured":371},
  {"brand":"Lattafa","name":"Shaheen Gold","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"shaheen-gold.webp","notes":["Azafran / Bergamota","Rosa / Oud","Ambar / Vainilla"],"mood":"firma","featured":372},
  {"brand":"Lattafa","name":"Shaheen Silver","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"shaheen-silver.webp","notes":["Bergamota / Lavanda","Madera / Iris","Ambar / Almizcle"],"mood":"diario","featured":373},
  {"brand":"Tom Ford","name":"Soleil Blanc EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"soleil-blanc-tom-ford.webp","notes":["Bergamota / Cardamomo","Jazmin / Ylang","Ambar / Coco"],"mood":"diario","featured":374},
  {"brand":"Viktor&Rolf","name":"Spicebomb EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"spicebombs.webp","notes":["Pimienta rosa / Bergamota","Canela / Azafran","Tabaco / Cuero"],"mood":"noche","featured":375},
  {"brand":"Victoria's Secret","name":"Splash Corporal Surtido","cat":"mujer","price":UNIT_PRICE,"size":"Spray","img":"splash-acrilicos.webp","notes":["Frutas / Flores","Vainilla / Almendra","Almizcle / Ambar"],"mood":"regalo","featured":376},
  {"brand":"Montblanc","name":"Starwalker EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"starwalker-mont-blanc.webp","notes":["Menta / Pomelo","Violeta / Pimienta","Madera / Vetiver"],"mood":"diario","featured":377},
  {"brand":"Emporio Armani","name":"Stronger With You Intensely","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"stronger-with-you-intensely.webp","notes":["Pimienta rosa / Jengibre","Lavanda / Castana","Vainilla / Ambar"],"mood":"noche","featured":378},
  {"brand":"Hammer","name":"Summer Hammer","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"summer-hammer.webp","notes":["Citricos / Menta","Madera / Notas marinas","Almizcle / Ambar"],"mood":"diario","featured":379},
  {"brand":"Victorinox","name":"Swiss Army EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"swiss-army.webp","notes":["Bergamota / Lavanda","Madera / Salvia","Ambar / Almizcle"],"mood":"oficina","featured":380},
  {"brand":"Lattafa","name":"The Matcha 26","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"the-matcha-26.webp","notes":["Te matcha / Bergamota","Leche / Flores","Almizcle / Sandalo"],"mood":"regalo","featured":381},
  {"brand":"Tiziana Terenzi","name":"Kirke Extrait","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"tiziana-terenzi-kirke.webp","notes":["Frutas tropicales / Pina","Rosa / Peonia","Almizcle / Vainilla"],"mood":"firma","featured":382},
  {"brand":"Lattafa","name":"Toffee Coffee","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"toffee-coffee.webp","notes":["Cafe / Caramelo","Toffee / Crema","Vainilla / Almizcle"],"mood":"regalo","featured":383},
  {"brand":"Tommy Hilfiger","name":"Tommy Girl Now EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"tommy-girl-now.webp","notes":["Frutas / Citricos","Flores / Te","Almizcle / Ambar"],"mood":"diario","featured":384},
  {"brand":"Tommy Hilfiger","name":"Tommy Girl EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"tommy-girl-tommy-hilfiger.webp","notes":["Limon / Grosella","Peonia / Jazmin","Almizcle / Ambar"],"mood":"diario","featured":385},
  {"brand":"Tommy Hilfiger","name":"Tommy EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"tommy-hilfiger.webp","notes":["Limon / Manzana","Lavanda / Menta","Almizcle / Sandalo"],"mood":"diario","featured":386},
  {"brand":"Lacoste","name":"Touch of Pink EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"touch-of-pink-lacoste.webp","notes":["Frutas rojas / Rosa","Peonia / Jazmin","Almizcle / Ambar"],"mood":"diario","featured":387},
  {"brand":"Moschino","name":"Toy 2 Bubble Gum","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"toy-2-bubblegum.webp","notes":["Chicle / Frutas","Rosa / Flores","Almizcle / Vainilla"],"mood":"regalo","featured":388},
  {"brand":"Moschino","name":"Toy 2 EDP","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"toy-2-moschino.webp","notes":["Bergamota / Frutas","Flores / Especias","Almizcle / Ambar"],"mood":"diario","featured":389},
  {"brand":"Lattafa","name":"Vainilla Freak","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"vainilla-freak.webp","notes":["Vainilla / Coco","Crema / Caramelo","Almizcle / Sandalo"],"mood":"regalo","featured":390},
  {"brand":"Versace","name":"Bright Crystal Absolu","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"versace-bright-crystal-absolu.webp","notes":["Granada / Yuzu","Peonia / Magnolia","Almizcle / Ambar"],"mood":"diario","featured":391},
  {"brand":"Versace","name":"Dylan Blue Pour Homme","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"versace-dylan-blue.webp","notes":["Bergamota / Pomelo","Violeta / Pachuli","Almizcle / Incienso"],"mood":"diario","featured":392},
  {"brand":"Versace","name":"Dylan Blue Pour Femme","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"versace-dylan-blue-fem.webp","notes":["Manzana / Bergamota","Rosa / Jazmin","Almizcle / Ambar"],"mood":"diario","featured":393},
  {"brand":"Versace","name":"Dylan Turquoise EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"versace-dylan-turquoise.webp","notes":["Pera / Higo","Flor de naranjo / Jazmin","Almizcle / Sandalo"],"mood":"diario","featured":394},
  {"brand":"Versace","name":"Man Eau Fraiche EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"versace-eau-fraiche.webp","notes":["Limon / Bergamota","Cedro / Salvia","Madera / Almizcle"],"mood":"diario","featured":395},
  {"brand":"Versace","name":"Energy Men EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"versace-energy-men.webp","notes":["Menta / Citricos","Lavanda / Salvia","Cedro / Almizcle"],"mood":"diario","featured":396},
  {"brand":"Versace","name":"Eros EDT","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"versace-eros.webp","notes":["Menta / Manzana verde","Haba tonka / Geranio","Vainilla / Cedro"],"mood":"noche","featured":397},
  {"brand":"Versace","name":"Eros Flame EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"versace-flame.webp","notes":["Mandarina / Pimienta","Geranio / Romero","Vainilla / Cuero"],"mood":"noche","featured":398},
  {"brand":"Versace","name":"Yellow Diamond EDT","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"versace-yellow-diamond.webp","notes":["Limon / Bergamota","Fresia / Nenufar","Almizcle / Ambar"],"mood":"diario","featured":399},
  {"brand":"Carolina Herrera","name":"Very Good Girl EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"very-good-girl.webp","notes":["Frutas rojas / Cereza","Rosa / Jazmin","Vainilla / Almizcle"],"mood":"noche","featured":400},
  {"brand":"Victoria's Secret","name":"Splash Corporal","cat":"mujer","price":UNIT_PRICE,"size":"Spray","img":"victoria-s-secret-splash.webp","notes":["Frutas / Flores","Vainilla / Almendra","Almizcle / Ambar"],"mood":"regalo","featured":401},
  {"brand":"Lattafa","name":"Whipped Pleasure","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"whipped-pleasure.webp","notes":["Crema batida / Frutas","Vainilla / Caramelo","Almizcle / Sandalo"],"mood":"regalo","featured":402},
  {"brand":"Xerjoff","name":"Herba Pura","cat":"unisex","price":UNIT_PRICE,"size":"100 ml","img":"xerjoff-herba-pura-caja.webp","notes":["Bergamota / Menta","Hierbas / Flores","Almizcle / Madera"],"mood":"firma","featured":403},
  {"brand":"Yves Saint Laurent","name":"Y EDP","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"y-yves-saint-laurent-men.webp","notes":["Manzana / Jengibre","Salvia / Geranio","Cedro / Ambar"],"mood":"firma","featured":404},
  {"brand":"Lattafa","name":"Yara Candy EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"yara-candy.webp","notes":["Mandarina / Frutas","Heliotropo / Vainilla","Almizcle / Sandalo"],"mood":"diario","featured":405},
  {"brand":"Lattafa","name":"Yara Elixir EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"yara-elixir.webp","notes":["Mandarina / Frambuesa","Heliotropo / Vainilla","Almizcle / Sandalo"],"mood":"noche","featured":406},
  {"brand":"Lattafa","name":"Yara Moi EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"yara-moi.webp","notes":["Mandarina / Frutas","Heliotropo / Vainilla","Almizcle / Sandalo"],"mood":"diario","featured":407},
  {"brand":"Lattafa","name":"Yara Tous EDP","cat":"mujer","price":UNIT_PRICE,"size":"100 ml","img":"yara-tous.webp","notes":["Mandarina / Frambuesa","Heliotropo / Vainilla","Almizcle / Sandalo"],"mood":"diario","featured":408},
  {"brand":"Lattafa","name":"Yum Yum Cofre","cat":"mujer","price":UNIT_PRICE,"size":"Estuche","img":"yum-yum-cofre.webp","notes":["Frutas / Caramelo","Crema / Almendra","Vainilla / Almizcle"],"mood":"regalo","featured":409},
  {"brand":"Yves Saint Laurent","name":"Y Eau de Parfum Intense","cat":"hombre","price":UNIT_PRICE,"size":"100 ml","img":"yves-saint-laurent-y.webp","notes":["Manzana / Jengibre","Salvia / Geranio","Cedro / Ambar"],"mood":"noche","featured":410}
];

const money=n=>"$"+n.toLocaleString("es-CO");
/* Cada perfume se vende como "inspirado en" una fragancia conocida (p.brand = marca de referencia). */
const inspiredBy=p=>`Inspirado en ${p.brand}`;
function productArt(p){
  if(p.img){
    const u='images/'+encodeURIComponent(p.img);
    return `<img src="${u}" alt="${p.name}, ${inspiredBy(p).toLowerCase()}" loading="lazy" decoding="async" class="product-photo">`;
  }
  return `<div class="scent-art art-fresh" role="img" aria-label="${p.name}, ${inspiredBy(p).toLowerCase()}"><span class="scent-box"></span><span class="scent-bottle"></span></div>`;
}
function sorted(list){
  const mode=document.querySelector("#sortSelect")?.value||"featured";
  return [...list].sort((a,b)=>{
    if(mode==="name") return a.name.localeCompare(b.name);
    if(mode==="brand") return a.brand.localeCompare(b.brand);
    return a.featured-b.featured;
  });
}

const CATALOG_PAGE=48;
let shown=CATALOG_PAGE,lastViewKey="";
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
  const viewKey=activeFilter+"|"+query+"|"+(document.querySelector("#sortSelect")?.value||"featured");
  if(viewKey!==lastViewKey){lastViewKey=viewKey;shown=CATALOG_PAGE;}
  const hero=list[0]||PRODUCTS[0];
  document.querySelectorAll("[data-filter]").forEach(btn=>btn.classList.toggle("active",btn.dataset.filter===activeFilter));
  const count=document.querySelector("#catalogCount");
  if(count) count.textContent=`${list.length} piezas`;
  const spotlight=document.querySelector("#spotlight");
  if(spotlight){
    const heroIdx=PRODUCTS.indexOf(hero);
    spotlight.innerHTML=`<div><figure data-open="${heroIdx}" style="cursor:pointer">${productArt(hero)}</figure><h3>${hero.name}</h3><p>${inspiredBy(hero)} / ${hero.size}. ${hero.notes.join(", ")}.</p><div class="price">${money(hero.price)}</div></div><button class="pill-btn primary" data-open="${heroIdx}">Ver detalle</button>`;
  }
  grid.innerHTML=list.slice(0,shown).map((p,i)=>{const idx=PRODUCTS.indexOf(p);return `<article class="product-card enter" data-cat="${p.cat}" data-open="${idx}" style="--i:${Math.min(i,10)}"><figure class="product-image">${favBtn(idx)}${productArt(p)}</figure><div class="product-info"><span class="product-brand">${inspiredBy(p)} / ${p.size}</span><h3>${p.name}</h3><div class="notes"><div><b>Salida</b><span>${p.notes[0]}</span></div><div><b>Corazon</b><span>${p.notes[1]}</span></div><div><b>Base</b><span>${p.notes[2]}</span></div></div><div class="price-row"><span class="price">${money(p.price)}</span>${comboBtn(idx)}</div></div></article>`}).join("");
  let more=document.querySelector("#loadMore");
  if(!more){more=document.createElement("div");more.id="loadMore";more.className="load-more";grid.after(more);}
  more.innerHTML=list.length>shown?`<button class="pill-btn primary" type="button">Ver mas perfumes (${list.length-shown})</button>`:"";
  more.querySelector("button")?.addEventListener("click",()=>{shown+=CATALOG_PAGE;renderCatalog();});
  bindCardMotion();
  updateFavUI();
  updateComboUI();
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
  {label:"Instagram",href:"https://instagram.com/maisonduo",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.18.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.41-.35 1.03-.4 2.18-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.4 2.18.22.55.47.94.88 1.35.41.41.8.66 1.35.88.41.16 1.03.35 2.18.4 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.18-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.41.35-1.03.4-2.18.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.4-2.18-.22-.55-.47-.94-.88-1.35-.41-.41-.8-.66-1.35-.88-.41-.16-1.03-.35-2.18-.4-1.24-.06-1.61-.07-4.76-.07zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6zm0 1.62a3.68 3.68 0 1 0 0 7.36 3.68 3.68 0 0 0 0-7.36zm5.48-2.9a1.24 1.24 0 1 1 0 2.48 1.24 1.24 0 0 1 0-2.48z"/></svg>'},
  {label:"TikTok",href:"https://tiktok.com/@maisonduo",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.1v12.4a2.52 2.52 0 0 1-2.52 2.52 2.52 2.52 0 0 1 0-5.04c.26 0 .51.04.75.11V9.8a5.6 5.6 0 0 0-.75-.05 5.62 5.62 0 1 0 5.62 5.62V8.96a7.34 7.34 0 0 0 4.3 1.38V7.24a4.28 4.28 0 0 1-3.25-1.42z"/></svg>'},
  {label:"Facebook",href:"https://facebook.com/maisonduo",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>'},
  {label:"WhatsApp",href:"https://wa.me/573112703720",svg:'<svg viewBox="0 0 32 32" fill="currentColor"><path d="M16.003.064C7.17.064.008 7.226.008 16.062a15.94 15.94 0 0 0 2.137 7.992L0 32.064l8.2-2.148a15.98 15.98 0 0 0 7.803 1.992h.007c8.83 0 15.99-7.162 15.99-15.998 0-4.28-1.663-8.302-4.682-11.322A15.89 15.89 0 0 0 16.003.064zM23.31 19.28c-.4-.2-2.37-1.17-2.74-1.3-.37-.13-.64-.2-.9.2-.27.4-1.03 1.3-1.27 1.57-.23.27-.47.3-.87.1-.4-.2-1.69-.62-3.22-1.98-1.19-1.06-1.99-2.37-2.22-2.77-.23-.4-.02-.62.18-.82.18-.18.4-.47.6-.7.2-.23.27-.4.4-.67.13-.27.07-.5-.03-.7-.1-.2-.9-2.17-1.23-2.97-.33-.78-.66-.67-.9-.69-.23-.01-.5-.01-.77-.01-.27 0-.7.1-1.07.5-.37.4-1.4 1.37-1.4 3.34 0 1.97 1.43 3.87 1.63 4.13.2.27 2.82 4.31 6.83 6.04.95.41 1.7.66 2.28.84.96.31 1.83.26 2.52.16.77-.12 2.37-.97 2.7-1.9.33-.93.33-1.73.23-1.9-.1-.17-.37-.27-.77-.47z"/></svg>'}
];
function injectDisclaimer(){
  const foot=document.querySelector(".footer-bottom");
  if(!foot||document.querySelector(".brand-disclaimer"))return;
  foot.insertAdjacentHTML("afterend",'<p class="brand-disclaimer shell">Maison Duo vende perfumes inspirados en fragancias famosas. No son productos de esas marcas ni tenemos relacion con ellas: sus nombres se usan solo como referencia de aroma y pertenecen a sus titulares.</p>');
}
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
  return `<p><strong>${p.name}</strong>, perfume inspirado en ${p.brand}. ${MOOD_COPY[p.mood]||""}</p><p>Su estructura olfativa abre con <em>${(p.notes[0]||"").toLowerCase()}</em> en la salida, evoluciona en el corazon hacia <em>${(p.notes[1]||"").toLowerCase()}</em> y reposa sobre una base de <em>${(p.notes[2]||"").toLowerCase()}</em>.</p><p class="m-fine">${CAT_COPY[p.cat]||""} &middot; Presentacion ${p.size} &middot; Sin relacion con ${p.brand}</p>`;
}
function similarProducts(p,limit){
  const idx=PRODUCTS.indexOf(p);
  return PRODUCTS.map((q,i)=>({q,i,score:(q.cat===p.cat?2:0)+(q.mood===p.mood?2:0)-(i===idx?100:0)})).sort((a,b)=>b.score-a.score).slice(0,limit);
}
const WA_GENERIC=`Hola Maison Duo 👋 Quiero armar mi combo de 2 perfumes por ${money(COMBO_PRICE)}. ¿Me ayudan a elegir? Me gustan los aromas: `;
function waLinkFor(p){
  const msg=`Hola Maison Duo 👋 Quiero pedir este perfume:\n\n*${p.name}* (inspirado en ${p.brand}, ${p.size}) — ${money(p.price)}\n\n¿Está disponible? Si sumo un segundo perfume, ¿me dejan los 2 en ${money(COMBO_PRICE)}? Mi ciudad es: `;
  return `https://wa.me/573112703720?text=${encodeURIComponent(msg)}`;
}
const WA_PATH="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z";
const WA_SVG=`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${WA_PATH}"/></svg>`;
const MAG_SVG='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>';
const HEART_SVG='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
function miniCard(p,i){return `<button class="finder-card" data-cat="${p.cat}" data-open="${i}"><div class="finder-card-photo">${productArt(p)}</div><div class="finder-card-info"><span class="product-brand">${inspiredBy(p)}</span><b>${p.name}</b><span class="finder-card-price">${money(p.price)}</span></div></button>`;}

/* ---- Favoritos (wishlist) ---- */
const FAV_KEY="ir_favs";
const getFavs=()=>{try{return JSON.parse(localStorage.getItem(FAV_KEY))||[]}catch(e){return[]}};
const setFavs=a=>{try{localStorage.setItem(FAV_KEY,JSON.stringify(a))}catch(e){}};
const isFav=i=>getFavs().includes(i);
function toggleFav(i){const f=getFavs();const k=f.indexOf(i);if(k>=0)f.splice(k,1);else f.push(i);setFavs(f);updateFavUI();if(document.querySelector("#favModal")?.open)renderFavModal();}
function updateFavUI(){
  const n=getFavs().length;
  document.querySelectorAll("[data-fav-count]").forEach(el=>{el.textContent=n;el.classList.toggle("show",n>0)});
  document.querySelectorAll("[data-fav-toggle]").forEach(b=>{const i=+b.dataset.favToggle;const on=isFav(i);b.classList.toggle("on",on);b.setAttribute("aria-pressed",on?"true":"false")});
}
function favBtn(i){return `<button class="fav-btn" data-fav-toggle="${i}" aria-label="Guardar en favoritos">${HEART_SVG}</button>`;}

/* ---- Combo: COMBO_SIZE perfumes por COMBO_PRICE (a eleccion, cualquier marca) ---- */
const COMBO_KEY="ir_combo";
let comboState=(()=>{try{const a=JSON.parse(localStorage.getItem(COMBO_KEY));return Array.isArray(a)?a.filter(i=>PRODUCTS[i]):[]}catch(e){return[]}})();
const saveCombo=()=>{try{localStorage.setItem(COMBO_KEY,JSON.stringify(comboState))}catch(e){}};
const inCombo=i=>comboState.includes(i);
function comboTotal(n){return Math.floor(n/COMBO_SIZE)*COMBO_PRICE+(n%COMBO_SIZE)*UNIT_PRICE;}
let lastComboAdded=null;
function toggleCombo(i){const k=comboState.indexOf(i);if(k>=0)comboState.splice(k,1);else{comboState.push(i);lastComboAdded=i}saveCombo();updateComboUI();}
function clearCombo(){comboState=[];saveCombo();updateComboUI();}
function comboBtn(i,wide){
  return wide
    ?`<button class="pill-btn secondary combo-btn" data-combo-toggle="${i}" data-on="En tu combo &#10003;" data-off="Sumar a mi combo">Sumar a mi combo</button>`
    :`<button class="mini-add combo-add" data-combo-toggle="${i}" data-on="En combo" data-off="Al combo" aria-label="Sumar al combo">Al combo</button>`;
}
function comboWaLink(items){
  const list=items.map(({p},n)=>`${n+1}. *${p.name}* (inspirado en ${p.brand}, ${p.size})`).join("\n");
  const msg=`Hola Maison Duo 👋 Quiero armar mi combo:\n\n${list}\n\nTotal: *${money(comboTotal(items.length))}*\n\n¿Están disponibles? Mi ciudad es: `;
  return `https://wa.me/573112703720?text=${encodeURIComponent(msg)}`;
}
function ensureComboTray(){
  if(document.querySelector("#comboTray")) return;
  document.body.insertAdjacentHTML("beforeend",'<aside id="comboTray" class="combo-tray" hidden aria-label="Tu combo"><div class="combo-tray-main"><div class="combo-slots" data-combo-slots></div><p class="combo-msg" data-combo-msg aria-live="polite"></p></div><div class="combo-tray-side"><div class="combo-total"><s data-combo-was></s><b data-combo-price></b></div><a class="pill-btn primary wa-cta" data-combo-wa href="#" target="_blank" rel="noopener">'+WA_SVG+'<span>Pedir mi combo por WhatsApp</span></a><button class="combo-clear" data-combo-clear>Vaciar</button></div></aside>');
  if("ResizeObserver" in window){
    const tray=document.querySelector("#comboTray");
    new ResizeObserver(()=>{if(!tray.hidden) document.body.style.setProperty("--tray-h",tray.offsetHeight+"px")}).observe(tray);
  }
}
function renderComboTray(){
  const items=comboState.map(i=>({p:PRODUCTS[i],i})).filter(x=>x.p);
  const n=items.length;
  document.body.classList.toggle("has-tray",n>0);
  if(!n){
    const t=document.querySelector("#comboTray");
    if(t) t.hidden=true;
    document.body.style.removeProperty("--tray-h");
    return;
  }
  ensureComboTray();
  const tray=document.querySelector("#comboTray");
  const toNext=(COMBO_SIZE-(n%COMBO_SIZE))%COMBO_SIZE;
  const total=comboTotal(n), regular=n*UNIT_PRICE, saving=regular-total;
  const chip=({p,i})=>`<div class="combo-slot${i===lastComboAdded?" pop":""}" data-cat="${p.cat}"><span class="combo-slot-photo">${productArt(p).replace('loading="lazy"','loading="eager"')}</span><span class="combo-slot-name"><small>${inspiredBy(p)}</small>${p.name}</span><button class="combo-slot-x" data-combo-remove="${i}" aria-label="Quitar ${p.name}">&times;</button></div>`;
  const blanks=Array.from({length:toNext},()=>'<a class="combo-slot empty" href="catalogo.html#catalogo"><span class="combo-slot-photo">+</span><span class="combo-slot-name"><small>Elige otro</small>perfume</span></a>').join("");
  tray.querySelector("[data-combo-slots]").innerHTML=items.map(chip).join("")+blanks;
  tray.querySelector("[data-combo-msg]").innerHTML=toNext
    ?(n<COMBO_SIZE?`Suma ${toNext} mas y pagas <b>${money(COMBO_PRICE)}</b> por los ${COMBO_SIZE} (ahorras ${money(COMBO_SIZE*UNIT_PRICE-COMBO_PRICE)})`:`Suma ${toNext} mas y completa otro combo de ${COMBO_SIZE} por <b>${money(COMBO_PRICE)}</b>`)
    :`Combo completo: ahorras <b>${money(saving)}</b>`;
  tray.querySelector("[data-combo-price]").textContent=money(total);
  tray.querySelector("[data-combo-was]").textContent=saving>0?money(regular):"";
  tray.querySelector("[data-combo-wa]").href=comboWaLink(items);
  tray.hidden=false;
  lastComboAdded=null;
  document.body.style.setProperty("--tray-h",tray.offsetHeight+"px");
}
function updateComboUI(){
  document.querySelectorAll("[data-combo-toggle]").forEach(b=>{
    const on=inCombo(+b.dataset.comboToggle);
    b.classList.toggle("on",on);
    b.setAttribute("aria-pressed",on?"true":"false");
    const label=on?b.dataset.on:b.dataset.off;
    if(label&&b.innerHTML!==label) b.innerHTML=label;
  });
  renderComboTray();
}

/* ---- Recently viewed ---- */
const RECENT_KEY="ir_recent";
function pushRecent(i){let r=[];try{r=JSON.parse(sessionStorage.getItem(RECENT_KEY))||[]}catch(e){}r=[i,...r.filter(x=>x!==i)].slice(0,6);try{sessionStorage.setItem(RECENT_KEY,JSON.stringify(r))}catch(e){}renderRecent();}
function renderRecent(){
  const grid=document.querySelector("[data-recent]");const sec=document.querySelector("[data-recent-section]");if(!grid)return;
  let r=[];try{r=JSON.parse(sessionStorage.getItem(RECENT_KEY))||[]}catch(e){}
  if(!r.length){if(sec)sec.style.display="none";return;}
  if(sec)sec.style.display="";
  grid.innerHTML=r.map(i=>{const p=PRODUCTS[i];return p?miniCard(p,i):""}).join("");
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
      <span class="product-brand">${inspiredBy(p)}</span>
      <h3 id="modalTitle">${p.name}</h3>
      <div class="m-meta"><span>${p.cat}</span><span>${p.mood}</span><span>${p.size}</span></div>
      <div class="m-desc">${descriptionFor(p)}</div>
      <div class="notes">
        <div><b>Salida</b><span>${p.notes[0]||""}</span></div>
        <div><b>Corazon</b><span>${p.notes[1]||""}</span></div>
        <div><b>Base</b><span>${p.notes[2]||""}</span></div>
      </div>
      <div class="price-row"><div class="m-price"><span class="price">${money(p.price)}</span><small>o 2 a tu eleccion por <b>${money(COMBO_PRICE)}</b></small></div><div class="m-actions">${favBtn(idx)}${comboBtn(idx,true)}<a class="pill-btn primary wa-cta" href="${waLinkFor(p)}" target="_blank" rel="noopener">${WA_SVG}<span>Pedir este perfume por WhatsApp</span></a></div></div>
      ${sims.length?`<div class="m-similar"><span class="eyebrow">Piezas similares</span><div class="m-similar-row">${sims.map(({q,i})=>miniCard(q,i)).join("")}</div></div>`:""}
    </div>`;
  document.body.style.overflow="hidden";
  updateFavUI();
  updateComboUI();
  pushRecent(idx);
  if(typeof closeSearch==="function") closeSearch();
  if(!dlg.open) dlg.showModal();
  dlg.scrollTop=0;
}
function bindGlobalClicks(){
  document.addEventListener("click",e=>{
    const fav=e.target.closest("[data-fav-toggle]");
    if(fav){e.preventDefault();e.stopPropagation();toggleFav(+fav.dataset.favToggle);return;}
    const comboT=e.target.closest("[data-combo-toggle]");
    if(comboT){e.preventDefault();e.stopPropagation();toggleCombo(+comboT.dataset.comboToggle);return;}
    const comboR=e.target.closest("[data-combo-remove]");
    if(comboR){e.preventDefault();toggleCombo(+comboR.dataset.comboRemove);return;}
    if(e.target.closest("[data-combo-clear]")){e.preventDefault();clearCombo();return;}
    const favOpen=e.target.closest("[data-fav-open]");
    if(favOpen){e.preventDefault();openFavModal();return;}
    const searchOpen=e.target.closest("[data-search-open]");
    if(searchOpen){e.preventDefault();openSearch();return;}
    const searchClose=e.target.closest("[data-search-close]");
    if(searchClose){e.preventDefault();closeSearch();return;}
    const chat=e.target.closest("[data-chat-toggle]");
    if(chat){e.preventDefault();toggleChat();return;}
    const trigger=e.target.closest("[data-open]");
    if(trigger){
      const idx=parseInt(trigger.dataset.open,10);
      if(isNaN(idx)) return;
      if(trigger.tagName==="A") e.preventDefault();
      openProductModal(idx);
    }
  });
}

/* ---- Favoritos modal ---- */
function ensureFavModal(){
  if(document.querySelector("#favModal"))return;
  document.body.insertAdjacentHTML("beforeend",'<dialog id="favModal" class="product-modal fav-modal" aria-label="Favoritos"><button class="modal-close" data-close aria-label="Cerrar">&times;</button><div class="fav-modal-body"><span class="eyebrow">Tu seleccion</span><h3>Mis favoritos</h3><div data-fav-body></div></div></dialog>');
  const dlg=document.querySelector("#favModal");
  dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});
  dlg.addEventListener("close",()=>document.body.style.overflow="");
  dlg.querySelector("[data-close]").addEventListener("click",()=>dlg.close());
}
function renderFavModal(){
  const body=document.querySelector("[data-fav-body]");if(!body)return;
  const favs=getFavs();
  if(!favs.length){body.innerHTML='<div class="fav-empty"><p>Aun no has guardado piezas. Toca el corazon en cualquier perfume para guardarlo aqui.</p><a class="pill-btn primary" href="catalogo.html">Ver los perfumes</a></div>';return;}
  const rows=favs.map(i=>{const p=PRODUCTS[i];return p?`<div class="fav-row" data-cat="${p.cat}">${miniCard(p,i)}<button class="fav-remove" data-fav-toggle="${i}" aria-label="Quitar">Quitar</button></div>`:""}).join("");
  const names=favs.map(i=>{const p=PRODUCTS[i];return p?`• *${p.name}* (inspirado en ${p.brand})`:""}).filter(Boolean).join("\n");
  const msg=encodeURIComponent(`Hola Maison Duo 👋 Estos son mis favoritos:\n\n${names}\n\nCon el combo (${money(UNIT_PRICE)} c/u, 2 por ${money(COMBO_PRICE)}) me quedaría en *${money(comboTotal(favs.length))}*. ¿Me confirman disponibilidad y envío? Mi ciudad es: `);
  body.innerHTML=`<div class="fav-list">${rows}</div><a class="pill-btn primary wa-cta" href="https://wa.me/573112703720?text=${msg}" target="_blank" rel="noopener">${WA_SVG}<span>Pedir mis favoritos por WhatsApp</span></a>`;
  updateFavUI();
}
function openFavModal(){ensureFavModal();renderFavModal();document.body.style.overflow="hidden";const d=document.querySelector("#favModal");if(!d.open)d.showModal();}

/* ---- Search overlay ---- */
function ensureSearch(){
  if(document.querySelector("#searchOverlay"))return;
  document.body.insertAdjacentHTML("beforeend",'<div id="searchOverlay" class="search-overlay" hidden><div class="search-panel"><div class="search-bar">'+MAG_SVG+'<input type="search" id="searchOverlayInput" placeholder="Busca marca, nota u ocasion..." aria-label="Buscar perfumes"><button class="search-close" data-search-close aria-label="Cerrar">&times;</button></div><div class="search-results" data-search-results></div></div></div>');
  const ov=document.querySelector("#searchOverlay");
  const input=ov.querySelector("#searchOverlayInput");
  const paint=()=>{
    const q=input.value.trim().toLowerCase();
    const res=ov.querySelector("[data-search-results]");
    if(!q){res.innerHTML='<p class="search-hint">Escribe para encontrar entre las 74 piezas.</p>';return;}
    const hits=PRODUCTS.map((p,i)=>({p,i})).filter(({p})=>[p.brand,p.name,p.cat,p.mood,p.notes.join(" ")].join(" ").toLowerCase().includes(q)).slice(0,8);
    res.innerHTML=hits.length?hits.map(({p,i})=>miniCard(p,i)).join(""):'<p class="search-hint">Sin coincidencias. Prueba otra marca o nota.</p>';
  };
  input.addEventListener("input",paint);
  ov.addEventListener("click",e=>{if(e.target===ov||e.target.closest("[data-search-close]"))closeSearch()});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!ov.hidden)closeSearch()});
}
function openSearch(){ensureSearch();const ov=document.querySelector("#searchOverlay");ov.hidden=false;document.body.style.overflow="hidden";const inp=ov.querySelector("#searchOverlayInput");inp.value="";ov.querySelector("[data-search-results]").innerHTML='<p class="search-hint">Escribe para encontrar entre las 74 piezas.</p>';requestAnimationFrame(()=>inp.focus());}
function closeSearch(){const ov=document.querySelector("#searchOverlay");if(ov){ov.hidden=true;document.body.style.overflow=""}}

/* ---- Nav tools (search + favoritos) ---- */
function initNavTools(){
  document.querySelectorAll(".nav-actions").forEach(actions=>{
    actions.querySelectorAll("a.icon-btn").forEach(a=>{if(/buscar/i.test(a.textContent))a.remove()});
    const wa=actions.querySelector(".wa-btn");
    if(wa) wa.innerHTML=WA_SVG;
    const tools=`<button class="icon-btn nav-tool" data-search-open aria-label="Buscar">${MAG_SVG}</button><button class="icon-btn nav-tool fav-nav" data-fav-open aria-label="Favoritos">${HEART_SVG}<span class="fav-count" data-fav-count>0</span></button>`;
    if(wa) wa.insertAdjacentHTML("beforebegin",tools);
    else actions.insertAdjacentHTML("beforeend",tools);
  });
  updateFavUI();
}

/* ---- Chatbot ---- */
const CHAT_QUICK=[
  {q:"Precios y combo",a:`Cada perfume cuesta ${money(UNIT_PRICE)}, sin importar la marca. Y si llevas 2 a tu eleccion pagas ${money(COMBO_PRICE)}: ahorras ${money(COMBO_SIZE*UNIT_PRICE-COMBO_PRICE)}.`,link:{href:"catalogo.html#catalogo",label:"Armar mi combo"}},
  {q:"Hacen envios?",a:"Si 🚚 En Bogota y la sabana entregamos en 24h. Al resto de Colombia por transportadora con guia de seguimiento."},
  {q:"Metodos de pago",a:"Aceptamos Nequi, Daviplata, Bancolombia y pago contra entrega segun tu ciudad."},
  {q:"Que es \"inspirado en\"?",a:"Son perfumes con un aroma muy cercano al de fragancias famosas. Te decimos siempre en cual se inspira cada uno. No son los productos de esas marcas ni tenemos relacion con ellas."},
  {q:"Quiero una recomendacion",a:"Con gusto. Usa el Selector Duo aqui en la pagina, o cuentame para quien y para que ocasion, y te paso 3 opciones para armar tu combo.",link:{href:"guia.html",label:"Abrir selector"}},
  {q:"Ver catalogo",a:`Aqui tienes los ${PRODUCTS.length} perfumes del catalogo 👇`,link:{href:"catalogo.html",label:"Abrir catalogo"}}
];
function chatMsg(text,who){const log=document.querySelector("[data-chat-log]");if(!log)return;log.insertAdjacentHTML("beforeend",`<div class="chat-msg ${who}">${text}</div>`);log.scrollTop=log.scrollHeight;}
function chatTyping(show){const log=document.querySelector("[data-chat-log]");if(!log)return;let t=log.querySelector(".chat-typing");if(show){if(!t){log.insertAdjacentHTML("beforeend",'<div class="chat-msg bot chat-typing"><span></span><span></span><span></span></div>');log.scrollTop=log.scrollHeight}}else if(t)t.remove();}
function chatReply(item){
  chatMsg(item.q,"me");
  chatTyping(true);
  setTimeout(()=>{
    chatTyping(false);
    let html=item.a;
    if(item.link)html+=`<a class="chat-link" href="${item.link.href}">${item.link.label} &rarr;</a>`;
    chatMsg(html,"bot");
  },700);
}
function initChat(){
  document.querySelectorAll(".floating-wa").forEach(n=>n.remove());
  const quick=CHAT_QUICK.map((it,i)=>`<button class="chat-chip" data-chat-q="${i}">${it.q}</button>`).join("");
  const peekShown=sessionStorage.getItem("ir_peek_seen");
  const peekHtml=peekShown?"":`<div class="chat-peek" data-peek><button class="chat-peek-x" data-peek-close aria-label="Cerrar">&times;</button><b>2 perfumes por ${money(COMBO_PRICE)} 🔥</b><small>Te ayudo a elegir el tuyo por WhatsApp. Respondo en minutos.</small></div>`;
  document.body.insertAdjacentHTML("beforeend",`
    <div class="chat-widget">
      <div class="chat-panel" id="chatPanel" hidden>
        <header class="chat-head"><span class="chat-avatar">${WA_SVG}</span><div><b>Maison Duo</b><small><i></i> En linea &middot; responde al instante</small></div><button class="chat-x" data-chat-toggle aria-label="Cerrar">&times;</button></header>
        <div class="chat-log" data-chat-log></div>
        <div class="chat-quick">${quick}</div>
        <div class="chat-foot"><a class="pill-btn primary wa-cta" href="https://wa.me/573112703720?text=${encodeURIComponent(WA_GENERIC)}" target="_blank" rel="noopener">${WA_SVG}<span>Hablar con un asesor ahora</span></a></div>
      </div>
      ${peekHtml}
      <button class="chat-launch" data-chat-toggle aria-label="Abrir chat de WhatsApp">${WA_SVG}<span class="chat-badge">1</span></button>
    </div>`);
  document.querySelector(".chat-quick").addEventListener("click",e=>{const b=e.target.closest("[data-chat-q]");if(!b)return;chatReply(CHAT_QUICK[+b.dataset.chatQ]);});
  document.querySelector("[data-peek-close]")?.addEventListener("click",e=>{e.stopPropagation();dismissPeek();});
  if(!peekShown) setTimeout(dismissPeek,10000);
  window.__chatGreeted=false;
}
function dismissPeek(){const p=document.querySelector("[data-peek]");if(p){p.remove();try{sessionStorage.setItem("ir_peek_seen","1")}catch(e){}}}
function toggleChat(){
  const panel=document.querySelector("#chatPanel");if(!panel)return;
  const open=panel.hasAttribute("hidden");
  panel.toggleAttribute("hidden",!open);
  document.querySelector(".chat-launch")?.classList.toggle("active",open);
  const badge=document.querySelector(".chat-badge");if(badge)badge.style.display="none";
  dismissPeek();
  if(open&&!window.__chatGreeted){window.__chatGreeted=true;chatTyping(true);setTimeout(()=>{chatTyping(false);chatMsg(`Hola 👋 Soy el concierge de Maison Duo. Cada perfume vale ${money(UNIT_PRICE)} y llevas 2 por ${money(COMBO_PRICE)}. Toca una pregunta o habla con un asesor por WhatsApp.`,"bot")},600);}
}

function bindFinder(){
  const finder=document.querySelector("[data-scent-finder]");
  if(!finder) return;
  const results=finder.querySelector("[data-results]");
  const single=finder.querySelector("[data-result]");
  const picks={cat:"all",mood:"firma"};
  const rank=()=>PRODUCTS.map((p,i)=>{
    let s=0;
    if(picks.cat==="all"||p.cat===picks.cat) s+=3;
    if(p.mood===picks.mood) s+=3;
    s+=(100-(p.featured||50))*0.005;
    return {p,i,s};
  }).sort((a,b)=>b.s-a.s);
  const card=({p,i})=>`<button class="finder-card" data-cat="${p.cat}" data-open="${i}"><div class="finder-card-photo">${productArt(p)}</div><div class="finder-card-info"><span class="product-brand">${inspiredBy(p)}</span><b>${p.name}</b><span class="finder-card-price">${money(p.price)}</span></div></button>`;
  const paint=()=>{
    const ranked=rank().slice(0,3);
    if(!ranked.length) return;
    if(results){ results.innerHTML=ranked.map(card).join(""); }
    if(single){
      const m=ranked[0].p;
      single.innerHTML=`<div class="result-name">${m.name}</div><p class="result-copy">Inspirado en ${m.brand}: funciona para una compra ${picks.mood}: ${m.notes.join(", ")}.</p><div class="price">${money(m.price)}</div><button class="pill-btn primary" data-open="${ranked[0].i}">Ver detalle</button>`;
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
  injectDisclaimer();
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

function initPWA(){
  if(!document.querySelector('link[rel="manifest"]')) document.head.insertAdjacentHTML("beforeend",'<link rel="manifest" href="manifest.json">');
  if(!document.querySelector('meta[name="theme-color"]')) document.head.insertAdjacentHTML("beforeend",'<meta name="theme-color" content="#2b1722">');
}
bindGlobal();
bindCatalog();
bindFinder();
ensureModal();
bindGlobalClicks();
initNavTools();
initChat();
initPWA();
renderRecent();
updateFavUI();
updateComboUI();
