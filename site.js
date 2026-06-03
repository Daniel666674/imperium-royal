const PRODUCTS=[
  {brand:"Dior",name:"Sauvage EDP",cat:"hombre",price:469000,size:"100 ml",art:"art-fresh",box:"SAUVAGE",bottle:"Sauvage",notes:["Bergamota","Pimienta / Lavanda","Ambroxan / Cedro"],mood:"noche",featured:1},
  {brand:"Chanel",name:"Bleu de Chanel",cat:"hombre",price:520000,size:"100 ml",art:"art-blue",box:"BLEU",bottle:"Bleu",notes:["Citricos","Jengibre","Maderas nobles"],mood:"oficina",featured:2},
  {brand:"Carolina Herrera",name:"212 VIP Black",cat:"hombre",price:389000,size:"100 ml",art:"art-black",box:"212 VIP",bottle:"VIP Black",notes:["Pimienta negra","Cacao / Lavanda","Ambar / Vainilla"],mood:"noche",featured:3},
  {brand:"Lancome",name:"La Vie Est Belle",cat:"mujer",price:349000,size:"100 ml",art:"art-rose",box:"La Vie",bottle:"Belle",notes:["Pera","Iris / Jazmin","Praline / Vainilla"],mood:"regalo",featured:4},
  {brand:"Yves Saint Laurent",name:"Y EDP",cat:"hombre",price:430000,size:"100 ml",art:"art-blue",box:"YSL Y",bottle:"Y",notes:["Manzana","Salvia / Geranio","Cedro / Tonka"],mood:"oficina",featured:5},
  {brand:"Yves Saint Laurent",name:"Black Opium",cat:"mujer",price:399000,size:"90 ml",art:"art-black",box:"OPIUM",bottle:"Black",notes:["Pera","Cafe / Flor blanca","Vainilla / Pachuli"],mood:"noche",featured:6},
  {brand:"Versace",name:"Eros EDP",cat:"hombre",price:359000,size:"100 ml",art:"art-blue",box:"EROS",bottle:"Eros",notes:["Menta","Tonka / Geranio","Vainilla / Vetiver"],mood:"noche",featured:7},
  {brand:"Versace",name:"Dylan Blue",cat:"hombre",price:335000,size:"100 ml",art:"art-blue",box:"DYLAN",bottle:"Blue",notes:["Bergamota","Papiro / Pachuli","Incienso / Musk"],mood:"diario",featured:8},
  {brand:"Paco Rabanne",name:"Invictus",cat:"hombre",price:342000,size:"100 ml",art:"art-fresh",box:"INVICTUS",bottle:"Invictus",notes:["Toronja","Laurel / Jazmin","Guayaco / Ambar"],mood:"diario",featured:9},
  {brand:"Paco Rabanne",name:"One Million",cat:"hombre",price:378000,size:"100 ml",art:"art-black",box:"1 MILLION",bottle:"Gold",notes:["Mandarina","Canela / Rosa","Cuero / Ambar"],mood:"noche",featured:10},
  {brand:"Giorgio Armani",name:"Acqua di Gio Profondo",cat:"hombre",price:455000,size:"100 ml",art:"art-blue",box:"PROFONDO",bottle:"Gio",notes:["Notas marinas","Lavanda / Romero","Mineral / Musk"],mood:"diario",featured:11},
  {brand:"Giorgio Armani",name:"Si EDP",cat:"mujer",price:420000,size:"100 ml",art:"art-rose",box:"SI",bottle:"Si",notes:["Cassis","Rosa / Fresia","Vainilla / Ambroxan"],mood:"regalo",featured:12},
  {brand:"Carolina Herrera",name:"Good Girl",cat:"mujer",price:430000,size:"80 ml",art:"art-black",box:"GOOD GIRL",bottle:"Good",notes:["Almendra","Jazmin / Tuberosa","Cacao / Tonka"],mood:"noche",featured:13},
  {brand:"Jean Paul Gaultier",name:"Le Male Elixir",cat:"hombre",price:410000,size:"125 ml",art:"art-black",box:"LE MALE",bottle:"Elixir",notes:["Lavanda","Miel / Tabaco","Vainilla / Tonka"],mood:"noche",featured:14},
  {brand:"Jean Paul Gaultier",name:"La Belle",cat:"mujer",price:370000,size:"100 ml",art:"art-rose",box:"LA BELLE",bottle:"Belle",notes:["Pera","Vetiver","Vainilla"],mood:"regalo",featured:15},
  {brand:"Tom Ford",name:"Ombre Leather",cat:"unisex",price:650000,size:"100 ml",art:"art-black",box:"OMBRE",bottle:"Leather",notes:["Cardamomo","Cuero / Jazmin","Ambar / Musgo"],mood:"firma",featured:16},
  {brand:"Tom Ford",name:"Black Orchid",cat:"unisex",price:690000,size:"100 ml",art:"art-black",box:"ORCHID",bottle:"Black",notes:["Trufa","Orquidea negra","Chocolate / Pachuli"],mood:"firma",featured:17},
  {brand:"Maison Francis Kurkdjian",name:"Baccarat Rouge 540",cat:"unisex",price:980000,size:"70 ml",art:"art-rose",box:"BR 540",bottle:"Rouge",notes:["Azafran","Ambargris","Cedro / Resina"],mood:"firma",featured:18},
  {brand:"Creed",name:"Aventus",cat:"hombre",price:990000,size:"100 ml",art:"art-fresh",box:"AVENTUS",bottle:"Aventus",notes:["Pina / Bergamota","Abedul / Jazmin","Musk / Roble"],mood:"firma",featured:19},
  {brand:"Dolce & Gabbana",name:"Light Blue",cat:"unisex",price:329000,size:"100 ml",art:"art-blue",box:"LIGHT BLUE",bottle:"Blue",notes:["Limon siciliano","Bambu / Jazmin","Cedro / Musk"],mood:"diario",featured:20},
  {brand:"Givenchy",name:"L'Interdit",cat:"mujer",price:395000,size:"80 ml",art:"art-rose",box:"INTERDIT",bottle:"Interdit",notes:["Pera","Tuberosa / Jazmin","Vetiver / Pachuli"],mood:"noche",featured:21},
  {brand:"Valentino",name:"Born in Roma Donna",cat:"mujer",price:405000,size:"100 ml",art:"art-rose",box:"ROMA",bottle:"Donna",notes:["Grosella","Jazmin","Vainilla bourbon"],mood:"regalo",featured:22},
  {brand:"Azzaro",name:"The Most Wanted",cat:"hombre",price:360000,size:"100 ml",art:"art-black",box:"WANTED",bottle:"Wanted",notes:["Cardamomo","Toffee","Madera ambarada"],mood:"noche",featured:23},
  {brand:"Montblanc",name:"Explorer",cat:"hombre",price:290000,size:"100 ml",art:"art-fresh",box:"EXPLORER",bottle:"Explorer",notes:["Bergamota","Vetiver","Pachuli / Cuero"],mood:"diario",featured:24},
  {brand:"Calvin Klein",name:"CK One",cat:"unisex",price:210000,size:"200 ml",art:"art-blue",box:"CK ONE",bottle:"One",notes:["Bergamota","Te verde","Musk / Ambar"],mood:"diario",featured:25},
  {brand:"Narciso Rodriguez",name:"For Her",cat:"mujer",price:360000,size:"100 ml",art:"art-rose",box:"FOR HER",bottle:"Narciso",notes:["Rosa","Musk","Pachuli / Ambar"],mood:"oficina",featured:26},
  {brand:"Viktor&Rolf",name:"Flowerbomb",cat:"mujer",price:445000,size:"100 ml",art:"art-rose",box:"FLOWER",bottle:"Bomb",notes:["Te","Orquidea / Jazmin","Pachuli"],mood:"regalo",featured:27},
  {brand:"Lattafa",name:"Yara EDP",cat:"unisex",price:189000,size:"100 ml",art:"art-rose",box:"YARA",bottle:"Yara",notes:["Frutas","Rosa / Jazmin","Almizcle / Ambar"],mood:"regalo",featured:28},
  {brand:"Lattafa",name:"Oud For Glory",cat:"unisex",price:210000,size:"100 ml",art:"art-oud",box:"OUD",bottle:"Glory",notes:["Azafran","Oud","Almizcle / Ambar"],mood:"firma",featured:29},
  {brand:"Lattafa",name:"Khamrah",cat:"unisex",price:220000,size:"100 ml",art:"art-oud",box:"KHAMRAH",bottle:"Khamrah",notes:["Canela","Datil / Praline","Vainilla / Tonka"],mood:"noche",featured:30},
  {brand:"Armaf",name:"Club de Nuit Intense",cat:"hombre",price:230000,size:"105 ml",art:"art-fresh",box:"CDN",bottle:"Intense",notes:["Limon / Pina","Rosa / Abedul","Musk / Ambargris"],mood:"firma",featured:31},
  {brand:"Maison Alhambra",name:"Tobacco Touch",cat:"unisex",price:180000,size:"80 ml",art:"art-oud",box:"TOBACCO",bottle:"Touch",notes:["Tabaco","Especias","Vainilla / Cacao"],mood:"noche",featured:32},
  {brand:"Al Haramain",name:"Amber Oud Gold",cat:"unisex",price:315000,size:"120 ml",art:"art-rose",box:"AMBER OUD",bottle:"Gold",notes:["Bergamota","Melon / Pina","Vainilla / Musk"],mood:"firma",featured:33},
  {brand:"Rasasi",name:"Hawas For Him",cat:"hombre",price:260000,size:"100 ml",art:"art-blue",box:"HAWAS",bottle:"Hawas",notes:["Manzana","Ciruela / Cardamomo","Ambargris / Musk"],mood:"diario",featured:34}
];

const money=n=>"$"+n.toLocaleString("es-CO");
function productArt(p){return `<div class="scent-art ${p.art}" role="img" aria-label="${p.brand} ${p.name}"><span class="scent-box" data-brand="${p.box}"></span><span class="scent-bottle" data-name="${p.bottle}"></span></div>`}
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
  grid.innerHTML=list.map((p,i)=>`<article class="product-card enter" style="--i:${i}"><figure class="product-image">${productArt(p)}</figure><div class="product-info"><span class="product-brand">${p.brand} / ${p.size}</span><h3>${p.name}</h3><div class="notes"><div><b>Salida</b><span>${p.notes[0]}</span></div><div><b>Corazon</b><span>${p.notes[1]}</span></div><div><b>Base</b><span>${p.notes[2]}</span></div></div><div class="price-row"><span class="price">${money(p.price)}</span><button class="mini-add" data-add>Agregar</button></div></div></article>`).join("");
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
  document.querySelector(".menu-toggle")?.addEventListener("click",()=>document.querySelector(".nav-links")?.classList.toggle("open"));
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("visible")}),{threshold:.16});
  document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));
  window.addEventListener("scroll",()=>{
    const max=document.documentElement.scrollHeight-window.innerHeight;
    const progress=max>0?window.scrollY/max:0;
    document.querySelector("#scrollProgress").style.transform=`scaleX(${progress})`;
    document.querySelectorAll(".photo-frame").forEach((el,i)=>{el.style.marginTop=(i+1)*window.scrollY*.012+"px"});
    document.querySelectorAll(".atelier-panel").forEach((el,i)=>{el.style.translate=`${Math.sin((window.scrollY+i*90)/320)*8}px 0`});
  },{passive:true});
  document.querySelectorAll("form[data-soft-submit]").forEach(form=>form.addEventListener("submit",event=>{
    event.preventDefault();
    const btn=form.querySelector("button");
    const old=btn.textContent;
    btn.textContent="Enviado";
    setTimeout(()=>{btn.textContent=old;form.reset()},1300);
  }));
}

bindGlobal();
bindCatalog();
bindFinder();
