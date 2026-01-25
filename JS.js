let width = window.innerWidth;
let height = window.innerHeight;
const screenWidth = screen.width;
const screenHeight = screen.height;

document.documentElement.style.overflowX = "hidden";

let placementBase;
const tailleTel = 675;

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
modal.style.overflow = "hidden";

const retour = document.getElementById("retour");
const fav = document.getElementById("fav");
const livret = document.getElementById("livret");
const favMenu = document.getElementById("favMenu");
const textFavNone = document.getElementById("textFavNone");
const videFav = document.getElementById("videFav");
const title_desc = document.getElementById("title_desc");
const desc = document.getElementById("desc");
const dossIcoFav = document.getElementById("dossIcoFav");

const refshit = document.getElementById("refshit");
const dessin = document.getElementById("dessin");
const montage = document.getElementById("montage");
const fond = document.getElementById("fond");
const amiibo = document.getElementById("amiibo");


/* Démarre le JSON pour l'application automatisé des images */
const data = [
  {
    "image": "images/img_montage/Chinf.png",
    "alt": "alt Finch - Xenoblade Chronicles 2",
    "class": "",
    "titre": "Chaette",
    "description": ""
  },
  {
    "image": "images/img_fond/Chaette.png",
    "alt": "alt chouette - Carimara",
    "class": "",
    "titre": "Chaette",
    "description": ""
  },
  {
    "image": "images/dessin_base/Chanard_got_real.png",
    "alt": "alt Chanard got real",
    "class": "",
    "titre": "Chanard Got Real",
    "description": ""
  },
  {
    "image": "images/img_montage/GreenChage.png",
    "alt": "alt Green Mage - Everhood",
    "class": "",
    "titre": "Green Chage",
    "description": ""
  },
  {
    "image": "images/img_montage/Cholpain.png",
    "alt": "alt Volpain - Fortales",
    "class": "",
    "titre": "Cholpain",
    "description": ""
  },
  {
    "image": "images/img_montage/starchifter.png",
    "alt": "alt - Starshifter",
    "class": "",
    "titre": "Starchifter",
    "description": ""
  },
  {
    "image": "images/img_fond/Chodd.png",
    "alt": "alt Todd - Ship of Fool",
    "class": "",
    "titre": "Chodd",
    "description": ""
  },
  {
    "image": "images/img_montage/BallChirds.png",
    "alt": "alt Ball Bird - Steven Universe",
    "class": "",
    "titre": "Ball Chird",
    "description": ""
  },
  {
    "image": "images/img_montage/Lilich.png",
    "alt": "alt Lilith - Fire Emblem",
    "class": "",
    "titre": "Lilich",
    "description": ""
  },
  {
    "image": "images/img_fond/NutNut.png",
    "alt": "alt Nut Nut meme",
    "class": "",
    "titre": "Nut Nut",
    "description": ""
  },
  {
    "image": "images/img_montage/agentBlack.png",
    "alt": "alt Agent Black - Iconoblasts",
    "class": "",
    "titre": "Agent Crow",
    "description": ""
  },
  {
    "image": "images/img_fond/Paysage Flow.png",
    "alt": "alt Flow",
    "class": "",
    "titre": "Paysage Flow",
    "description": ""
  },
  {
    "image": "images/img_montage/Apocrowlyps.png",
    "alt": "alt Doom - Bad Guys",
    "class": "",
    "titre": "Apocrowlyps",
    "description": ""
  },
  {
    "image": "images/img_montage/Choumang.png",
    "alt": "alt Goumang - Nine Sols",
    "class": "",
    "titre": "Choumang",
    "description": ""
  },
  {
    "image": "images/img_montage/Choazo.png",
    "alt": "alt Oazo - Kirby",
    "class": "lowQuality",
    "titre": "Choazo",
    "description": ""
  },
  {
    "image": "images/dessin_base/Niruhtra.png",
    "alt": "alt Niruhtra",
    "class": "",
    "titre": "Niruhtra",
    "description": ""
  },
  {
    "image": "images/img_fond/Kpop Demon Chunter.png",
    "alt": "alt Kpop Demon Hunter",
    "class": "",
    "titre": "Kpop Demon Chunter",
    "description": ""
  },
  {
    "image": "images/dessin_base/chopi chaupe.png",
    "alt": "alt chopi chaupe",
    "class": "lowQuality",
    "titre": "chopi chaupe",
    "description": ""
  },
  {
    "image": "images/dessin_base/C)-(4.png",
    "alt": "alt C)-(4",
    "class": "",
    "titre": "C)-(4",
    "description": ""
  },
  {
    "image": "images/img_montage/Chalula.png",
    "alt": "alt Alula - One Shot",
    "class": "",
    "titre": "Chalula",
    "description": ""
  },
  {
    "image": "images/img_montage/Cholasaurus Toys.png",
    "alt": "alt Kolasaurus Toys - Genshin Impact",
    "class": "lowQuality",
    "titre": "Cholasaurus Toys",
    "description": ""
  },
  {
    "image": "images/img_fond/Djinn Chonic.png",
    "alt": "alt Djinn Tonic - Cassette Beast",
    "class": "",
    "titre": "Djinn Chonic",
    "description": ""
  },
  {
    "image": "images/img_fond/Chine Sols.png",
    "alt": "alt - Nine Sols",
    "class": "",
    "titre": "Chine Sols",
    "description": ""
  },
  {
    "image": "images/img_montage/Chroa.png",
    "alt": "alt Skroa - Les Légendaires",
    "class": "",
    "titre": "Chroa",
    "description": ""
  },
  {
    "image": "images/dessin_base/Ledrob.png",
    "alt": "alt Ledrob",
    "class": "",
    "titre": "Ledrob",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanard scout.png",
    "alt": "alt Scout - Peak",
    "class": "",
    "titre": "Chanard Scout",
    "description": ""
  },
  {
    "image": "images/dessin_base/Arthurin.png",
    "alt": "alt Arthurin",
    "class": "",
    "titre": "Arthurin",
    "description": ""
  },
  {
    "image": "images/dessin_base/Chabatteur.png",
    "alt": "alt Chabatteur",
    "class": "",
    "titre": "Chabatteur",
    "description": ""
  },
  {
    "image": "images/dessin_base/Dranach.png",
    "alt": "alt Dranach",
    "class": "",
    "titre": "Dranach",
    "description": ""
  },
  {
    "image": "images/dessin_base/Chanard et son fidèle Panneau.png",
    "alt": "alt Chanard et son fidèle Panneau",
    "class": "",
    "titre": "Chanard et son fidèle Panneau",
    "description": ""
  },
  {
    "image": "images/dessin_base/Protochanard.png",
    "alt": "alt Protochanard",
    "class": "",
    "titre": "Protochanard",
    "description": ""
  },
  {
    "image": "images/dessin_base/Choubrette.png",
    "alt": "alt Choubrette",
    "class": "",
    "titre": "Choubrette",
    "description": ""
  },
  {
    "image": "images/img_montage/Chino.png",
    "alt": "alt Chino", 
    "class": "",
    "titre": "Chino",
    "description": ""
  },
  {
    "image": "images/img_montage/Chedouard.png",
    "alt": "alt Edouard - Life Fantasy II", 
    "class": "",
    "titre": "Chedouard",
    "description": ""
  },
  {
    "image": "images/img_montage/Chasteque.png",
    "alt": "alt oiseau pastèque - Steven Universe", 
    "class": "",
    "titre": "Chasteque",
    "description": ""
  },
  {
    "image": "images/img_montage/Chenry.png",
    "alt": "alt Henry - Fire Emblem", 
    "class": "",
    "titre": "Chenry",
    "description": ""
  },
  {
    "image": "images/img_montage/Chishl.png",
    "alt": "alt Fishl - Genshin Impact", 
    "class": "",
    "titre": "Chishl",
    "description": ""
  },
  {
    "image": "images/img_montage/Charja.png",
    "alt": "alt Tarja - Fire Emblem", 
    "class": "",
    "titre": "Charja",
    "description": ""
  },
  {
    "image": "images/img_montage/Chametist.png",
    "alt": "alt Ametist - Steven Universe", 
    "class": "",
    "titre": "Chametist",
    "description": ""
  },
  {
    "image": "images/img_montage/Chion.png",
    "alt": "alt le lion - Steven Universe", 
    "class": "",
    "titre": "Chion",
    "description": ""
  },
  {
    "image": "images/img_montage/ChlissTaker.png",
    "alt": "alt BlissTaker - AK-xolotl", 
    "class": "",
    "titre": "ChlissTaker",
    "description": ""
  },
  {
    "image": "images/img_montage/Giant Chapsucker.png",
    "alt": "alt Giant Sapsucker - Lethal Compagny", 
    "class": "",
    "titre": "Giant Chapsucker",
    "description": ""
  },
  {
    "image": "images/img_montage/Choy.png",
    "alt": "alt Joy - Cassette Beast", 
    "class": "",
    "titre": "Choy",
    "description": ""
  },
  {
    "image": "images/img_montage/Chashley.png",
    "alt": "alt Ashley - The Coffin of Andy and Leyley", 
    "class": "",
    "titre": "Chashley",
    "description": ""
  },
  {
    "image": "images/img_montage/Chuneko.png",
    "alt": "alt Kuneko - Cassette Beast", 
    "class": "",
    "titre": "Chuneko",
    "description": ""
  },
  {
    "image": "images/img_montage/Chassette.png",
    "alt": "alt Cassette - Cassette Beast", 
    "class": "lowQuality",
    "titre": "Chassette",
    "description": ""
  },
  {
    "image": "images/img_montage/Charvaillus.png",
    "alt": "alt Corvaillus - Pokémon", 
    "class": "",
    "titre": "Charvaillus",
    "description": ""
  },
  {
    "image": "images/img_montage/Neverchort.png",
    "alt": "alt Nevermort - Cassette Beast", 
    "class": "lowQuality",
    "titre": "Neverchort",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanardeur.png",
    "alt": "alt Canardeur - Enter the Gungeon", 
    "class": "lowQuality",
    "titre": "Chanardeur",
    "description": ""
  },
  {
    "image": "images/img_montage/Chwig.png",
    "alt": "alt Chwig - ???", 
    "class": "lowQuality",
    "titre": "Chwig",
    "description": ""
  },
  {
    "image": "images/img_montage/Wan Chi Tong.png",
    "alt": "alt Wan Shi Tong - Avatar", 
    "class": "lowQuality",
    "titre": "Wan Chi Tong",
    "description": ""
  },
  {
    "image": "images/img_montage/Chufel.png",
    "alt": "alt Lufel - Persona", 
    "class": "",
    "titre": "Chufel",
    "description": ""
  },
  {
    "image": "images/img_montage/Chuffy.png",
    "alt": "alt Lufel - Persona", 
    "class": "",
    "titre": "Chuffy",
    "description": ""
  },
  {
    "image": "images/img_montage/Adventure Chime.png",
    "alt": "alt - Adventure Time", 
    "class": "",
    "titre": "Adventure Chime",
    "description": ""
  },
  {
    "image": "images/img_montage/Adventure with Chanard anxiety.png",
    "alt": "alt - Adventure with anxiety", 
    "class": "",
    "titre": "Adventure with Chanard anxiety",
    "description": ""
  },
  {
    "image": "images/img_montage/Angry Chanard.png",
    "alt": "alt - Angry Bird", 
    "class": "",
    "titre": "Angry Chanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Banard.png",
    "alt": "alt Badeline - Céleste", 
    "class": "",
    "titre": "Banard",
    "description": ""
  },
  {
    "image": "images/img_montage/Bancheenard.png",
    "alt": "alt Bansheep - Cassette Beast", 
    "class": "",
    "titre": "Bancheenard",
    "description": ""
  },
  {
    "image": "images/img_montage/Banjo-chazooie.png",
    "alt": "alt - Banjo-Kazooie", 
    "class": "",
    "titre": "Banjo-Chazooie",
    "description": ""
  },
  {
    "image": "images/img_montage/Blitcho.png",
    "alt": "alt Blitzo - Helluva Boss", 
    "class": "",
    "titre": "Blitcho",
    "description": ""
  },
  {
    "image": "images/img_montage/Brettcha.png",
    "alt": "alt Bretta - HollowKnight", 
    "class": "lowQuality",
    "titre": "Brettcha",
    "description": ""
  },
  {
    "image": "images/img_montage/Chabby.png",
    "alt": "alt Tabby - Genshin Impact", 
    "class": "",
    "titre": "Chabby",
    "description": ""
  },
  {
    "image": "images/img_montage/Chabil.png",
    "alt": "alt Babil - The legend of Zelda", 
    "class": "",
    "titre": "Chabil",
    "description": ""
  },
  {
    "image": "images/img_montage/Chabou.png",
    "alt": "alt Tibou - Animal Crossing", 
    "class": "",
    "titre": "Chabou",
    "description": ""
  },
  {
    "image": "images/img_montage/Chabus.png",
    "alt": "alt Le Dernier Coléoptère - Hollow Knight", 
    "class": "lowQuality",
    "titre": "Chabus",
    "description": ""
  },
  {
    "image": "images/img_montage/Chacaba.png",
    "alt": "alt Chocobo - Final Fantasy", 
    "class": "",
    "titre": "Chacaba",
    "description": ""
  },
  {
    "image": "images/img_montage/Chacaw.png",
    "alt": "alt Martlet - Undertale Yellow", 
    "class": "",
    "titre": "Chartlet",
    "description": ""
  },
  {
    "image": "images/img_montage/Chacholas.png",
    "alt": "alt Piti Stolas - Helluva Boss", 
    "class": "",
    "titre": "Chacholas",
    "description": ""
  },
  {
    "image": "images/img_montage/Chaepora.png",
    "alt": "alt Kaepora - The legend of Zelda", 
    "class": "",
    "titre": "Chaepora",
    "description": ""
  },
  {
    "image": "images/img_montage/Chainbow Dash.png",
    "alt": "alt Rainbow Dash - My Little Pony", 
    "class": "",
    "titre": "Chainbow Dash",
    "description": ""
  },
  {
    "image": "images/img_montage/Chaken.png",
    "alt": "alt Bracken - Lethal Compagny", 
    "class": "",
    "titre": "Chacken",
    "description": ""
  },
  {
    "image": "images/img_montage/Chako.png",
    "alt": "alt Niko - One Shot", 
    "class": "",
    "titre": "Chako",
    "description": ""
  },
  {
    "image": "images/img_montage/Chalastor.png",
    "alt": "alt Alastor - Hazbin Hotel", 
    "class": "",
    "titre": "Chalastor",
    "description": ""
  },
  {
    "image": "images/img_montage/Chalco.png",
    "alt": "alt Falco - Chalco", 
    "class": "",
    "titre": "Chalco",
    "description": ""
  },
  {
    "image": "images/img_montage/Chaléar.png",
    "alt": "alt Aléar - Fire Emblem", 
    "class": "",
    "titre": "Chaléar",
    "description": ""
  },
  {
    "image": "images/img_montage/Chaleste.png",
    "alt": "alt - Céleste", 
    "class": "",
    "titre": "Chaleste",
    "description": ""
  },
  {
    "image": "images/img_montage/Chally face.png",
    "alt": "alt - Sally face", 
    "class": "",
    "titre": "Chally face",
    "description": ""
  },
  {
    "image": "images/img_montage/Chaloona.png",
    "alt": "alt Loona - Helluva Boss", 
    "class": "",
    "titre": "Chaloona",
    "description": ""
  },
  {
    "image": "images/img_montage/Chalsei.png",
    "alt": "alt Ralsei - Deltarune", 
    "class": "",
    "titre": "Chalsei",
    "description": ""
  },
  {
    "image": "images/img_montage/Chalumeau.png",
    "alt": "alt Chalumeau - ???", 
    "class": "lowQuality",
    "titre": "Chalumeau",
    "description": ""
  },
  {
    "image": "images/img_montage/Chamach.png",
    "alt": "alt ??? - Cult of the Lamb", 
    "class": "",
    "titre": "Chamach",
    "description": ""
  },
  {
    "image": "images/img_montage/Chamaloo.png",
    "alt": "alt Kaloo - One Piece", 
    "class": "",
    "titre": "Chamaloo",
    "description": ""
  },
  {
    "image": "images/img_montage/Chamon.png",
    "alt": "alt Paimon - Genshin Impact", 
    "class": "",
    "titre": "Chamon",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanane.png",
    "alt": "alt Chanane - Fornite", 
    "class": "",
    "titre": "Chanane",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanaraïme.png",
    "alt": "alt ??? - ???", 
    "class": "",
    "titre": "Chanaraïme",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanard babouin.png",
    "alt": "alt Faucon babouin - Lethal Compagny", 
    "class": "",
    "titre": "Chanard babouin",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanard Bust Up.png",
    "alt": "alt ??? - ???", 
    "class": "",
    "titre": "Chanard Bust Up",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanard dans la secte.png",
    "alt": "alt Chanard dans la secte - Cult of the Lamb", 
    "class": "",
    "titre": "Chanard dans la secte",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanard de Kiki.png",
    "alt": "alt Jiji - Kiki la petite sorcière", 
    "class": "",
    "titre": "Chanard de Kiki",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanard le pompier.png",
    "alt": "alt - Sam le pompier", 
    "class": "",
    "titre": "Chanard le pompier",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanard Nook.png",
    "alt": "alt Tom Nook - Animal Crossing", 
    "class": "",
    "titre": "Chanard Nook",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanard pikle.png",
    "alt": "alt Rick pikle - Rick et Morty", 
    "class": "lowQuality",
    "titre": "Chanard pikle",
    "description": ""
  },
  {
    "image": "images/img_montage/Chingouin.png",
    "alt": "alt Pingouin skin - ???", 
    "class": "",
    "titre": "Chingouin",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanard the hawk.png",
    "alt": "alt Jet the Hawk - Sonic", 
    "class": "",
    "titre": "Chanard the Hawk",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanarda.png",
    "alt": "alt Miascarade - Pokémon", 
    "class": "",
    "titre": "Chanarda",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanareater.png",
    "alt": "alt Maneaters - Lethal Compagny", 
    "class": "",
    "titre": "Chanareater",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanarosado.png",
    "alt": "alt Rosado - Fire Emblem", 
    "class": "",
    "titre": "Chanarosado",
    "description": ""
  },
  {
    "image": "images/img_montage/Chaney.png",
    "alt": "alt Flowey - Undertale", 
    "class": "lowQuality",
    "titre": "Chaney",
    "description": ""
  },
  {
    "image": "images/img_montage/Changel Dust.png",
    "alt": "alt Angel Dust - Hazbin Hotel", 
    "class": "",
    "titre": "Changel Dust",
    "description": ""
  },
  {
    "image": "images/img_montage/Channi.png",
    "alt": "alt Ranni - Elden Ring", 
    "class": "",
    "titre": "Channi",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanondorf.png",
    "alt": "alt Ganondorf - The legend of Zelda", 
    "class": "",
    "titre": "Chanondorf",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanoomba.png",
    "alt": "alt Goomba - Mario Bros", 
    "class": "lowQuality",
    "titre": "Chanoomba",
    "description": ""
  },
  {
    "image": "images/img_montage/Chans.png",
    "alt": "alt Sans - Undertale", 
    "class": "",
    "titre": "Chans",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanyrus.png",
    "alt": "alt Papyrus - Undertale", 
    "class": "",
    "titre": "Chanyrus",
    "description": ""
  },
  {
    "image": "images/img_montage/Chaphet.png",
    "alt": "alt ??? - ???", 
    "class": "",
    "titre": "Chaphet",
    "description": ""
  },
  {
    "image": "images/img_montage/Chappa.png",
    "alt": "alt Appa - Avatar", 
    "class": "",
    "titre": "Chappa",
    "description": ""
  },
  {
    "image": "images/img_montage/Chappeee.png",
    "alt": "alt Insecte Syllogomane - Lethal Compagny", 
    "class": "lowQuality",
    "titre": "Chappeee",
    "description": ""
  },
  {
    "image": "images/img_montage/Chaqueen.png",
    "alt": "alt Queen - Deltatune", 
    "class": "",
    "titre": "Chween",
    "description": ""
  },
  {
    "image": "images/img_montage/Charboss.png",
    "alt": "alt Corboss - Pokémon", 
    "class": "",
    "titre": "Charboss",
    "description": ""
  },
  {
    "image": "images/img_montage/Chardevoir.png",
    "alt": "alt Gardevoir - Pokémon", 
    "class": "",
    "titre": "Chardevoir",
    "description": ""
  },
  {
    "image": "images/img_montage/Charie.png",
    "alt": "alt Marie - Animal Crossing", 
    "class": "",
    "titre": "Charie",
    "description": ""
  },
  {
    "image": "images/img_montage/Charo.png",
    "alt": "alt ??? - Cult of the Lamb", 
    "class": "",
    "titre": "Charo",
    "description": ""
  },
  {
    "image": "images/img_montage/Charonica.png",
    "alt": "alt ??? - Fire Emblem", 
    "class": "",
    "titre": "Charonica",
    "description": ""
  },
  {
    "image": "images/img_montage/Chasalina.png",
    "alt": "alt Harmonie - Mario Bros", 
    "class": "",
    "titre": "Chasalina",
    "description": ""
  },
  {
    "image": "images/img_montage/Chataro.png",
    "alt": "alt Jotaro - Jojo Bizarre Aventure", 
    "class": "",
    "titre": "Chataro",
    "description": ""
  },
  {
    "image": "images/img_montage/Chatewaki Kunard.png",
    "alt": "alt ??? - Ranma 1/2", 
    "class": "",
    "titre": "Chatewaki Kunard",
    "description": ""
  },
  {
    "image": "images/img_montage/Chathalos.png",
    "alt": "alt Rathalos - Monster Hunter", 
    "class": "",
    "titre": "Chathalos",
    "description": ""
  },
  {
    "image": "images/img_montage/Chatsuko.png",
    "alt": "alt ??? - ???", 
    "class": "lowQuality",
    "titre": "Chatsuko",
    "description": ""
  },
  {
    "image": "images/img_montage/Chava.png",
    "alt": "alt Ava - Fornite", 
    "class": "",
    "titre": "Chava",
    "description": ""
  },
  {
    "image": "images/img_montage/Chaven.png",
    "alt": "alt Raven - Teans Titan Go", 
    "class": "",
    "titre": "Chaven",
    "description": ""
  },
  {
    "image": "images/img_montage/Chavirou.png",
    "alt": "alt Navirou - Monster Hunter", 
    "class": "lowQuality",
    "titre": "Chavirou",
    "description": ""
  },
  {
    "image": "images/img_montage/Chawr Chura.png",
    "alt": "alt Gawr Gura - ???", 
    "class": "",
    "titre": "Chawr Chura",
    "description": ""
  },
  {
    "image": "images/img_montage/Chazu.png",
    "alt": "alt Zazu - Le Roi Lion", 
    "class": "lowQuality",
    "titre": "Chazu",
    "description": ""
  },
  {
    "image": "images/img_montage/Cheadard.png",
    "alt": "alt Coil-Head - Lethal Compagny", 
    "class": "",
    "titre": "Choil-Head",
    "description": ""
  },
  {
    "image": "images/img_montage/Chealth Elf.png",
    "alt": "alt Stealth Elf - Skylanders", 
    "class": "",
    "titre": "Chealth Elf",
    "description": ""
  },
  {
    "image": "images/img_montage/Cheemie.png",
    "alt": "alt Teemie - Undertale", 
    "class": "lowQuality",
    "titre": "Cheemie",
    "description": ""
  },
  {
    "image": "images/img_montage/Cheimerdinguer.png",
    "alt": "alt Heimerdinguer - Arcane", 
    "class": "",
    "titre": "Cheimerdinguer",
    "description": ""
  },
  {
    "image": "images/img_montage/Chélestriard.png",
    "alt": "alt Célestrier - The legend of Zelda", 
    "class": "",
    "titre": "Chélestriard",
    "description": ""
  },
  {
    "image": "images/img_montage/Chemmet.png",
    "alt": "alt Hemmet - Lego", 
    "class": "",
    "titre": "Chemmet",
    "description": ""
  },
  {
    "image": "images/img_montage/Chengubre.png",
    "alt": "alt Tengubre - Yokai Watch", 
    "class": "lowQuality",
    "titre": "Chengubre",
    "description": ""
  },
  {
    "image": "images/img_montage/Cherdly.png",
    "alt": "alt Berdly - Deltarune", 
    "class": "",
    "titre": "Cherdly",
    "description": ""
  },
  {
    "image": "images/img_montage/Cheureka.png",
    "alt": "alt Eureka - La petite Sirène", 
    "class": "lowQuality",
    "titre": "Cheureka",
    "description": ""
  },
  {
    "image": "images/img_montage/Chevalier Chanard.png",
    "alt": "alt Défenseur Bousier - Hollow Knight", 
    "class": "",
    "titre": "Chevalier Chanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Chiaousclé Midas.png",
    "alt": "alt Miaousclé Midas - Fornite", 
    "class": "",
    "titre": "Chiaousclé Midas",
    "description": ""
  },
  {
    "image": "images/img_montage/Chichiru Kagemori.png",
    "alt": "alt Michiru Kagemori - BNA: Brand New Animal", 
    "class": "",
    "titre": "Chichiru Kagemori",
    "description": ""
  },
  {
    "image": "images/img_montage/Chichu.png",
    "alt": "alt Pichu - Les mystérieuses Cité d'Or", 
    "class": "",
    "titre": "Chichu",
    "description": ""
  },
  {
    "image": "images/img_montage/Chicsou.png",
    "alt": "alt - Picsou", 
    "class": "",
    "titre": "Chicsou",
    "description": ""
  },
  {
    "image": "images/img_montage/Ectochanard.png",
    "alt": "alt Ectochien - Luigi Mansion", 
    "class": "",
    "titre": "Ectochanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Chikey.png",
    "alt": "alt - Mickey", 
    "class": "",
    "titre": "Chikey",
    "description": ""
  },
  {
    "image": "images/img_montage/Chiktomisaure.png",
    "alt": "alt Iktomisaurus - Genshin Impact", 
    "class": "",
    "titre": "Chiktomisaure",
    "description": ""
  },
  {
    "image": "images/img_montage/Childa.png",
    "alt": "alt Hilda - ???", 
    "class": "",
    "titre": "Childa",
    "description": ""
  },
  {
    "image": "images/img_montage/China.png",
    "alt": "alt Pina - SAO Sword Art Online", 
    "class": "lowQuality",
    "titre": "China",
    "description": ""
  },
  {
    "image": "images/img_montage/Chink Cartoons.png",
    "alt": "alt Link Cartoons - The legend of Zelda", 
    "class": "",
    "titre": "Chink Cartoons",
    "description": ""
  },
  {
    "image": "images/img_montage/Chink.png",
    "alt": "alt Link - The legend of Zelda", 
    "class": "",
    "titre": "Chink",
    "description": ""
  },
  {
    "image": "images/img_montage/Chinnamoroll.png",
    "alt": "alt - Cinnamoroll", 
    "class": "",
    "titre": "Chinnamoroll",
    "description": ""
  },
  {
    "image": "images/img_montage/Chio.png",
    "alt": "alt Dio - Jojo Bizarre Aventure", 
    "class": "",
    "titre": "Chio",
    "description": ""
  },
  {
    "image": "images/img_montage/Chira et Chythra.png",
    "alt": "alt Pira et Mythra - Xenoblade Chronicles", 
    "class": "",
    "titre": "Chira et Chythra",
    "description": ""
  },
  {
    "image": "images/img_montage/Chirbo.png",
    "alt": "alt - Kirby", 
    "class": "lowQuality",
    "titre": "Chirbo",
    "description": ""
  },
  {
    "image": "images/img_montage/Chivine.png",
    "alt": "alt Divine - Hollow Knight", 
    "class": "",
    "titre": "Chivine",
    "description": ""
  },
  {
    "image": "images/img_montage/Chizzik.png",
    "alt": "alt Lizzik - Fornite", 
    "class": "",
    "titre": "Chizzik",
    "description": ""
  },
  {
    "image": "images/img_montage/Chlaidd.png",
    "alt": "alt Blaidd - Elden Ring", 
    "class": "",
    "titre": "Chlaidd",
    "description": ""
  },
  {
    "image": "images/img_montage/Chlauneck.png",
    "alt": "alt ??? - Cult of the Lamb", 
    "class": "",
    "titre": "Chlauneck",
    "description": ""
  },
  {
    "image": "images/img_montage/Chlewbird.png",
    "alt": "alt ??? - Mario Bros", 
    "class": "lowQuality",
    "titre": "Chlewbird",
    "description": ""
  },
  {
    "image": "images/img_montage/Chluke Hermit.png",
    "alt": "alt Fluke Hermit - Hollow Knight", 
    "class": "lowQuality",
    "titre": "Chluke Hermit",
    "description": ""
  },
  {
    "image": "images/img_montage/Cho Cho.png",
    "alt": "alt Ho-Oh - Pokémon", 
    "class": "",
    "titre": "Cho-Cho",
    "description": ""
  },
  {
    "image": "images/img_montage/Choald.png",
    "alt": "alt ??? - Animal Crossing", 
    "class": "lowQuality",
    "titre": "Choald",
    "description": ""
  },
  {
    "image": "images/img_montage/Chochogro.png",
    "alt": "alt - Totoro", 
    "class": "",
    "titre": "Chochogro",
    "description": ""
  },
  {
    "image": "images/img_montage/Choeur.png",
    "alt": "alt coeur - Undertale", 
    "class": "lowQuality",
    "titre": "Choeur",
    "description": ""
  },
  {
    "image": "images/img_montage/Choker.png",
    "alt": "alt Joker - Persona", 
    "class": "",
    "titre": "Choker",
    "description": ""
  },
  {
    "image": "images/img_montage/Cholas.png",
    "alt": "alt Stolas - Helluva Boss", 
    "class": "",
    "titre": "Cholas",
    "description": ""
  },
  {
    "image": "images/img_montage/Chollie.png",
    "alt": "alt ??? - ???", 
    "class": "",
    "titre": "Chollie",
    "description": ""
  },
  {
    "image": "images/img_montage/Chombre.png",
    "alt": "alt Ombre - Hollow Knight", 
    "class": "",
    "titre": "Chombre",
    "description": ""
  },
  {
    "image": "images/img_montage/Chomokuma.png",
    "alt": "alt Momokuma - Danganrompa", 
    "class": "",
    "titre": "Chomokuma",
    "description": ""
  },
  {
    "image": "images/img_montage/Chomori.png",
    "alt": "alt - Omori", 
    "class": "",
    "titre": "Chomori",
    "description": ""
  },
  {
    "image": "images/img_montage/Chorgana.png",
    "alt": "alt Morgana - Persona", 
    "class": "",
    "titre": "Chorgana",
    "description": ""
  },
  {
    "image": "images/img_montage/Chori.png",
    "alt": "alt - Ori", 
    "class": "",
    "titre": "Chori",
    "description": ""
  },
  {
    "image": "images/img_montage/Chornet.png",
    "alt": "alt Hornet - Hollow Knight", 
    "class": "lowQuality",
    "titre": "Chornet",
    "description": ""
  },
  {
    "image": "images/img_montage/Chorusto.png",
    "alt": "alt Rorusto - Animal Crossing", 
    "class": "",
    "titre": "Chorusto",
    "description": ""
  },
  {
    "image": "images/img_montage/Chote.png",
    "alt": "alt Zote - Hollow Knight", 
    "class": "",
    "titre": "Chote",
    "description": ""
  },
  {
    "image": "images/img_montage/Choudoudou.png",
    "alt": "alt Rondoudou - Pokémon", 
    "class": "lowQuality",
    "titre": "Choudoudou",
    "description": ""
  },
  {
    "image": "images/img_montage/Chouge.png",
    "alt": "alt Rouge - Sonic", 
    "class": "",
    "titre": "Chouge",
    "description": ""
  },
  {
    "image": "images/img_montage/Chounard.png",
    "alt": "alt Rounard - Animal Crossing", 
    "class": "",
    "titre": "Chounard",
    "description": ""
  },
  {
    "image": "images/img_montage/Chpike.png",
    "alt": "alt Chpike - My Little Pony", 
    "class": "lowQuality",
    "titre": "Chpike",
    "description": ""
  },
  {
    "image": "images/img_montage/Chucky.png",
    "alt": "alt Ducky - Smash Legend", 
    "class": "",
    "titre": "Chucky",
    "description": ""
  },
  {
    "image": "images/img_montage/Chuigi et Choshi.png",
    "alt": "alt Luigi Yoshi - Mario Bros", 
    "class": "",
    "titre": "Chuigi et Choshi",
    "description": ""
  },
  {
    "image": "images/img_montage/Chullivar.png",
    "alt": "alt Gullivar - Animal Crossing", 
    "class": "",
    "titre": "Chullivar",
    "description": ""
  },
  {
    "image": "images/img_montage/Chumine.png",
    "alt": "alt Lumine - Genshin Impact", 
    "class": "",
    "titre": "Chumine",
    "description": ""
  },
  {
    "image": "images/img_montage/Chumper.png",
    "alt": "alt Thumper - Lethal Compagny", 
    "class": "",
    "titre": "Chumper",
    "description": ""
  },
  {
    "image": "images/img_montage/Chunther.png",
    "alt": "alt Gunther - Adventure Time", 
    "class": "lowQuality",
    "titre": "Chunther",
    "description": ""
  },
  {
    "image": "images/img_montage/Churo.png",
    "alt": "alt Puro - Changed", 
    "class": "",
    "titre": "Churo",
    "description": ""
  },
  {
    "image": "images/img_montage/Chutaba.png",
    "alt": "alt Futaba - Persona", 
    "class": "",
    "titre": "Chutaba",
    "description": ""
  },
  {
    "image": "images/img_montage/Chutler.png",
    "alt": "alt Butler - Lethal Compagny", 
    "class": "",
    "titre": "Chutler",
    "description": ""
  },
  {
    "image": "images/img_montage/Chyanja.png",
    "alt": "alt Nyanja - Fornite", 
    "class": "",
    "titre": "Chyanja",
    "description": ""
  },
  {
    "image": "images/img_montage/Chyuk.png",
    "alt": "alt Ryuk - Death Note", 
    "class": "",
    "titre": "Chyuk",
    "description": ""
  },
  {
    "image": "images/img_montage/CMO.png",
    "alt": "alt BMO - Adventure Time", 
    "class": "lowQuality",
    "titre": "CMO",
    "description": ""
  },
  {
    "image": "images/img_montage/Corvanard.png",
    "alt": "alt Corvus - Fornite", 
    "class": "",
    "titre": "Corvanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Cult of the Chanard.png",
    "alt": "alt - Cult of the Lamb", 
    "class": "",
    "titre": "Cult of the Chanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Daddy Crow v. Chanard.png",
    "alt": "alt Crow - Everhood", 
    "class": "",
    "titre": "Daddy Crow v. Chanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Duo Chanard Hunt.png",
    "alt": "alt - Duo Duck Hunt", 
    "class": "",
    "titre": "Duo Chanard Hunt",
    "description": ""
  },
  {
    "image": "images/img_montage/Flunnard.png",
    "alt": "alt ??? - Mario Bros", 
    "class": "",
    "titre": "Flunnard",
    "description": ""
  },
  {
    "image": "images/img_montage/Goro Chakechi.png",
    "alt": "alt Goro Akechi - Persona", 
    "class": "",
    "titre": "Goro Chakechi",
    "description": ""
  },
  {
    "image": "images/img_montage/Hat in Chanard.png",
    "alt": "alt - Hat in Time", 
    "class": "",
    "titre": "Hat in Chanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Kranard.png",
    "alt": "alt Kris - Deltarune", 
    "class": "",
    "titre": "Kranard",
    "description": ""
  },
  {
    "image": "images/img_montage/Chalarve.png",
    "alt": "alt Larve - Hollow Knight", 
    "class": "lowQuality",
    "titre": "Chalarve",
    "description": ""
  },
  {
    "image": "images/img_montage/Chalecet.png",
    "alt": "alt Bralecet - Fire Emblem", 
    "class": "lowQuality",
    "titre": "Chalecet",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanardeduc.png",
    "alt": "alt Ardeduc - Pokémon", 
    "class": "",
    "titre": "Chanardeduc",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanolimar.png",
    "alt": "alt Olimar - Pikmin", 
    "class": "",
    "titre": "Chanolimar",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanoussu.png",
    "alt": "alt Moussue - Hollow Knight", 
    "class": "lowQuality",
    "titre": "Chanoussu",
    "description": ""
  },
  {
    "image": "images/img_montage/Chauru.png",
    "alt": "alt Rauru - The legend of Zelda", 
    "class": "",
    "titre": "Chauru",
    "description": ""
  },
  {
    "image": "images/img_montage/Le Grand, Magnifique, Chanarticho.png",
    "alt": "alt Palarticho - Pokémon", 
    "class": "",
    "titre": "Le Grand, Magnifique, Chanarticho",
    "description": ""
  },
  {
    "image": "images/img_montage/Violeur n°2.png",
    "alt": "alt Le Collectionneur - Hollow Knight", 
    "class": "",
    "titre": "Violeur n°2",
    "description": ""
  },
  {
    "image": "images/img_montage/Le Chrisonnier.png",
    "alt": "alt Le Prisonnier - Outer Wilds", 
    "class": "",
    "titre": "Le Chrisonnier",
    "description": ""
  },
  {
    "image": "images/img_montage/Luchas.png",
    "alt": "alt Lucas - EarthBound", 
    "class": "",
    "titre": "Luchas",
    "description": ""
  },
  {
    "image": "images/img_montage/Tasse Chanard.png",
    "alt": "alt Tasse Chanard", 
    "class": "lowQuality",
    "titre": "Tasse Chanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Maître Chanu.png",
    "alt": "alt Maître Wu - Kungfu Panda", 
    "class": "",
    "titre": "Maître Chanu",
    "description": ""
  },
  {
    "image": "images/img_montage/Mini Chadam.png",
    "alt": "alt Adam - Hazbin Hotel", 
    "class": "lowQuality",
    "titre": "Mini Chadam",
    "description": ""
  },
  {
    "image": "images/img_montage/Monkey D. Chanard.png",
    "alt": "alt Monkey D. Luffy - One Piece", 
    "class": "",
    "titre": "Monkey D. Chanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Overchanard.png",
    "alt": "alt - Overcooked", 
    "class": "",
    "titre": "Overchanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Patate Chanard.png",
    "alt": "alt Patate", 
    "class": "lowQuality",
    "titre": "Patate Chanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Peter Chaffrin.png",
    "alt": "alt Peter Griffrin - Family Guy", 
    "class": "lowQuality",
    "titre": "Peter Chaffrin",
    "description": ""
  },
  {
    "image": "images/img_montage/Peppino Chaghetti.png",
    "alt": "alt Peppino Spaghetti - Pizza Tower", 
    "class": "",
    "titre": "Peppino Chaghetti",
    "description": ""
  },
  {
    "image": "images/img_montage/Chlumette.png",
    "alt": "alt Plumette", 
    "class": "",
    "titre": "Chlumette",
    "description": ""
  },
  {
    "image": "images/img_montage/Poichinard.png",
    "alt": "alt Poichigeon - Pokémon", 
    "class": "lowQuality",
    "titre": "Poichinard",
    "description": ""
  },
  {
    "image": "images/img_montage/Prof Chanard.png",
    "alt": "alt - Professeur Layton", 
    "class": "",
    "titre": "Prof Chanard",
    "description": ""
  },
  {
    "image": "images/img_montage/Professeur Charl Tastroff.png",
    "alt": "alt Professeur Karl Tastroff - Luigi Mansion", 
    "class": "",
    "titre": "Professeur Charl Tastroff",
    "description": ""
  },
  {
    "image": "images/img_montage/Psykochwak.png",
    "alt": "alt Psykokwak - Pokémon", 
    "class": "",
    "titre": "Psykochwak",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanard Show.png",
    "alt": "alt - Regular Show", 
    "class": "",
    "titre": "Chanard Show",
    "description": ""
  },
  {
    "image": "images/img_montage/Chevali.png",
    "alt": "alt Revali - The legend of Zelda", 
    "class": "",
    "titre": "Chevali",
    "description": ""
  },
  {
    "image": "images/img_montage/Roi Charassé.png",
    "alt": "alt Roi Cuirassé - The legend of Zelda", 
    "class": "",
    "titre": "Roi Charassé",
    "description": ""
  },
  {
    "image": "images/img_montage/Roi des Chlace.png",
    "alt": "alt Roi des Glace - Adventure Time", 
    "class": "",
    "titre": "Roi des Chlace",
    "description": ""
  },
  {
    "image": "images/img_montage/Roronoa Chorro.png",
    "alt": "alt Roronoa Zorro - One piece", 
    "class": "",
    "titre": "Roronoa Chorro",
    "description": ""
  },
  {
    "image": "images/img_montage/Ruchanard.png",
    "alt": "alt Budge - Fornite", 
    "class": "",
    "titre": "Chadge",
    "description": ""
  },
  {
    "image": "images/img_montage/Shun-nard.png",
    "alt": "alt Shun-day - Les Légendaires", 
    "class": "",
    "titre": "Shun-nard",
    "description": ""
  },
  {
    "image": "images/img_montage/Chlime.png",
    "alt": "alt Slime Chat - Slime Rancher", 
    "class": "lowQuality",
    "titre": "Chlime",
    "description": ""
  },
  {
    "image": "images/img_montage/Chanardtrap.png",
    "alt": "alt Chanardtrap - fnaf Five night at Freddy's", 
    "class": "",
    "titre": "Chanardtrap",
    "description": ""
  },
  {
    "image": "images/img_montage/Sunard.png",
    "alt": "alt Susie - Deltarune", 
    "class": "",
    "titre": "Sunard",
    "description": ""
  },
  {
    "image": "images/img_montage/The Chatcher.png",
    "alt": "alt The Snatcher - Hat in Time", 
    "class": "",
    "titre": "The Chatcher",
    "description": ""
  },
  {
    "image": "images/img_montage/Tochanard.png",
    "alt": "alt Tora - Xenoblade Chronicles", 
    "class": "",
    "titre": "Toranard",
    "description": ""
  },
  {
    "image": "images/img_montage/Trigger Chappy.png",
    "alt": "alt Trigger Happy - Skylanders", 
    "class": "",
    "titre": "Trigger Chappy",
    "description": ""
  },
  {
    "image": "images/img_montage/Untitled Chanard Game.png",
    "alt": "alt - Untitled Goose Game", 
    "class": "",
    "titre": "Untitled Chanard Game",
    "description": ""
  },
  {
    "image": "images/img_montage/Woody Woodcherper.png",
    "alt": "alt - Woody Woodpecker", 
    "class": "",
    "titre": "Woody Woodchecker",
    "description": ""
  },
  {
    "image": "images/img_montage/Zechyr.png",
    "alt": "alt Zephyr - ???", 
    "class": "",
    "titre": "Zechyr",
    "description": ""
  },
  {
    "image": "images/img_fond/Chark Knight.png",
    "alt": "alt Roaring Knight - Deltarune",
    "titre": "Roaring Cha. Knight",
    "description": ""
  },
  {
    "image": "images/img_fond/Chaouette.png",
    "alt": "alt Chouette - Avatar",
    "titre": "Chaouette",
    "description": ""
  },
  {
    "image": "images/img_fond/Cheva.png",
    "alt": "alt - Neva",
    "titre": "Cheva",
    "description": ""
  },
  {
    "image": "images/img_fond/Amis de Chomori.png",
    "alt": "alt Amis d' Omori",
    "titre": "Amis de Chomori",
    "description": ""
  },
  {
    "image": "images/img_fond/Chain World.png",
    "alt": "alt - Rain World",
    "titre": "Chain World",
    "description": ""
  },
  {
    "image": "images/img_fond/Chanard Bad.png",
    "alt": "alt - Breaking Bad",
    "titre": "Chanard Bad",
    "description": ""
  },
  {
    "image": "images/img_fond/Chanard en Editting.png",
    "alt": "alt - Miitopia",
    "titre": "Chanard en Editting",
    "description": ""
  },
  {
    "image": "images/img_fond/Charinder.png",
    "alt": "alt Narinder - Cult of the Lamb",
    "titre": "Charinder",
    "description": ""
  },
  {
    "image": "images/img_fond/Chauru.png",
    "alt": "alt ??? - Le Chateau Ambulant",
    "titre": "Chauru",
    "description": ""
  },
  {
    "image": "images/img_fond/Chéleste.png",
    "alt": "alt Céleste - Animal Crossing",
    "titre": "Chéleste",
    "description": ""
  },
  {
    "image": "images/img_fond/Chiffrin.png",
    "alt": "alt ??? - ???",
    "titre": "Chiffrin",
    "description": ""
  },
  {
    "image": "images/img_fond/Chikachu Gigacul.png",
    "alt": "alt Pikachu Gigamax - Pokémon",
    "titre": "Chikachu Gigacul",
    "description": ""
  },
  {
    "image": "images/img_fond/Chisobelle.png",
    "alt": "alt Isabelle - Baldur Gate",
    "titre": "Chisobelle",
    "description": ""
  },
  {
    "image": "images/img_fond/Chobalt Core.png",
    "alt": "alt Cobalt Core",
    "titre": "Chobalt Core",
    "description": ""
  },
  {
    "image": "images/img_fond/Chobrey.png",
    "alt": "alt Aubrey - Omori",
    "titre": "Chobrey",
    "description": ""
  },
  {
    "image": "images/img_fond/Chragon.png",
    "alt": "alt Dragon - Fire Emblem",
    "titre": "Chragon",
    "description": ""
  },
  {
    "image": "images/img_fond/Chrisk.png",
    "alt": "alt Frisk - Undertale",
    "titre": "Chrisk",
    "description": ""
  },
  {
    "image": "images/img_fond/Chunard.png",
    "alt": "alt Ku - Ori",
    "titre": "Chunard",
    "description": ""
  },
  {
    "image": "images/img_fond/Chuolinguo.png",
    "alt": "alt - Duolingo",
    "titre": "Chuolinguo",
    "description": ""
  },
  {
    "image": "images/img_fond/Crownard.png",
    "alt": "alt Corbac Crow - Brawl Star",
    "titre": "Chorbac",
    "description": ""
  },
  {
    "image": "images/img_fond/David Goodchenough.png",
    "alt": "alt David Goodenough",
    "titre": "Chavid Goodenough",
    "description": ""
  },
  {
    "image": "images/img_fond/Digital Charcus.png",
    "alt": "alt - Digital Circus",
    "titre": "Digital Charcus",
    "description": ""
  },
  {
    "image": "images/img_fond/Eminence Of Shadow, Chanard.png",
    "alt": "alt - Eminence Of Shadow",
    "titre": "Eminence Of Shadow, Chanard",
    "description": ""
  },
  {
    "image": "images/img_fond/Five Night At Chanard.png",
    "alt": "alt Five Night At Freddy",
    "titre": "Five Night At Chanard",
    "description": ""
  },
  {
    "image": "images/img_fond/Good Confident.png",
    "alt": "alt Good Confident - Persona",
    "titre": "Good Confident",
    "description": ""
  },
  {
    "image": "images/img_fond/Hollow Chight.png",
    "alt": "alt - Hollow Knight",
    "titre": "Hollow Chight",
    "description": ""
  },
  {
    "image": "images/img_fond/Jenard.png",
    "alt": "alt Jevil - Deltarune",
    "titre": "Jenard",
    "description": ""
  },
  {
    "image": "images/img_fond/Just Chonika.png",
    "alt": "alt Monika - ddlc Doki Doki Littérature Club",
    "titre": "Just Chonika",
    "description": ""
  },
  {
    "image": "images/img_fond/Photo de famille.png",
    "alt": "alt - Fire Emblem",
    "titre": "Photo de famille",
    "description": ""
  },
  {
    "image": "images/img_fond/Roi Chumkasaure.png",
    "alt": "alt Roi Yumkasaurus - Genshin Impact",
    "titre": "Roi Chumkasaure",
    "description": ""
  },
  {
    "image": "images/img_fond/Le Violeur.png",
    "alt": "alt Leshy - Inscryption",
    "titre": "Le Violeur",
    "description": ""
  },
  {
    "image": "images/img_fond/Night in the Chanard.png",
    "alt": "alt - Night in the Wood",
    "titre": "Night in the Chanard",
    "description": ""
  },
  {
    "image": "images/img_fond/Choleil.png",
    "alt": "alt Soleil - Teletubbies",
    "titre": "Choleil",
    "description": ""
  },
  {
    "image": "images/img_fond/The Stone Chanard Witch.png",
    "alt": "alt The Stone Witch - Islets",
    "titre": "The Stone Chanard Witch",
    "description": ""
  },
  {
    "image": "images/img_autre/Chanard Refshit.png",
    "alt": "alt Chanard Refshit",
    "titre": "Chanard",
    "description": ""
  },
  {
    "image": "images/img_autre/Table d'Amiibo.png",
    "alt": "alt table Amiibo",
    "titre": "Table d'Amiibo",
    "description": ""
  }
]

data.forEach(item => {
    const img = document.createElement('img');
    img.src = `${item.image}`;
    img.alt = `${item.alt}`;
    img.loading = "lazy";

    img.classList.add("smallThumb");
    if (img.src.includes("dessin_base/")) {
        dessin.appendChild(img);
    }
    else if (img.src.includes("img_fond/")) {
        fond.appendChild(img);
    }
    else if (img.src.includes("img_montage/")) {
        montage.appendChild(img);
    }
    if (`${item.class}` == "lowQuality") {
      img.classList.add("lowQuality");
    }
    
    img.onload = () => {
        if (img.naturalWidth > img.naturalHeight) {
            img.classList.add("largeur");
        }
        else {
            img.classList.add("hauteur");
        }
    }
    console.log("spawn dessin ", `${item.image}`, " / largeur : ", img.naturalWidth, " / hauteur : ", img.naturalHeight);
});


const thumbnails = document.querySelectorAll(".smallThumb");
const favNone = document.querySelectorAll(".favNone");
const description = document.querySelector(".description")
const fond_noir_desc = document.querySelector(".fond_noir_desc")

let favoris = JSON.parse(localStorage.getItem("favoris") || "[]");


/* Système changement de fond d'écran */
let id = 0;
let list_fond = [
    "images/gif_fond/Aurores_boreales.gif",    
    "images/gif_fond/Danse_Persona5.gif",
    "images/gif_fond/Zero_Two_Anime_Girl_Dancing.webp",     
    "images/gif_fond/adventure_time.gif",              
    "images/gif_fond/Aurores_boreales.gif",                                             
    "images/gif_fond/Jojo.gif"
];

document.getElementById("buttonchange").onclick = function() {
    const image = document.getElementById("imageid");
    const button = document.getElementById("rotateButton");
    // Ajouter la classe fade-out pour faire le fondu  
    image.classList.remove("fade-in");
    image.classList.add("fade-out");
    // Ajouter la classe pour faire la rotation  
    button.classList.toggle("rotate");
    setTimeout(() => {
        id = (id + 1) % list_fond.length; // revient à 0 à la fin  
        image.src = list_fond[id]; // Changer la source de l'image  
        image.classList.remove("fade-out"); // Retirer la classe pour faire réapparaître l'image  
        image.classList.add("fade-in");
    }, 500); // Correspond à la durée de la transition (500ms)
}



/* Système de mise en avant des images */
thumbnails.forEach(smallThumb => {
    console.log("click listener ->", smallThumb);
    if (favoris.includes(nameFichier(smallThumb.src))) {
        smallThumb.classList.add("favori_image");
    }

    smallThumb.addEventListener("click", () => {
        bloquerScroll();
        console.log("thumb clicked", nameFichier(smallThumb.src));
        if (smallThumb.classList.contains("favori_image")) {
            fav.src = "images/arrangement/etoile_gold.png"; 
            
        }
        else {
            fav.src = "images/arrangement/etoile_blanc.png";
            
        }
        modal.style.display = "flex";
        modalImage.src = smallThumb.src;
        const nomFichier = nameFichier(modalImage.src);
        const nomDessin = nameDessin(modalImage.src);

        data.forEach(item => {
            if (nomFichier == nameFichier(`${item.image}`)) {
                title_desc.textContent = `${item.titre}`;
                desc.textContent = `${item.description}`;
                if (desc.textContent == "") {
                  desc.style.margin = "0px";
                }
            }
        });

        if ((!smallThumb.closest(".grid4")) && (window.innerWidth >= tailleTel)) {
            description.style.transform = "translateX(0) translateY(10vh)";
            modalImage.classList.add("fondimg");
            description.style.width = "57vw";
            console.log("mode fond pc");
        }
        else if ((smallThumb.closest(".grid4")) && (window.innerWidth >= tailleTel)) {
            description.style.transform = "translateX(30vw) translateY(0)";
            console.log("mode dessin pc");
        }
        else {
            description.style.transform = "translateX(0) translateY(20%)";
            desc.style.maxHeight = "0vh";
            console.log("mode tel");
        }

        // agrandis titre si trop petit
        console.log(title_desc.clientWidth);
        console.log(description.clientWidth);
        if (title_desc.clientWidth < description.clientWidth) {
            title_desc.style.fontSize = "8vw !important;";
        }

        console.log("thumb clicked");

        
        /* Système de stokage des fav avec "localStorage" */
        document.getElementById("fav").onclick = function() {
            const chemin = fav.src;
            if (chemin.endsWith("images/arrangement/etoile_blanc.png")) {
                fav.src = "images/arrangement/etoile_gold.png"; 
                ajouterFavori(nomFichier);
                smallThumb.classList.add("favori_image");
                afficherFavoris();
            }
            else {
                fav.src = "images/arrangement/etoile_blanc.png";
                supprimerFavori(nomFichier);
                smallThumb.classList.remove("favori_image");
            }
            affFav(favMenu.src.endsWith("images/arrangement/etoileMenu_gold.png"));
            if (favMenu.src.endsWith("images/arrangement/etoileMenu_gold.png")) {
              window.scrollTo(0, 0);
            }
            else {
              window.scrollTo({top: placementBase});
            }
        }

        /* Système de livret des images zoomés */
        document.getElementById("livret").onclick = function() {
            const chemin = livret.src;
            if (chemin.endsWith("images/arrangement/livret.png")) {
                livret.src = "images/arrangement/livret2.png";

                if ((!smallThumb.closest(".grid4")) && (window.innerWidth >= tailleTel)) {
                    modal.classList.add("active2");
                }
                else {
                    modal.classList.add("active");
                    if (window.innerWidth < tailleTel) {
                        desc.style.maxHeight = "20vh";
                    }
                }
            }
            else {
                livret.src = "images/arrangement/livret.png";
                modal.classList.remove("active");
                modal.classList.remove("active2");
                desc.style.maxHeight = "30vh";
                desc.scrollTop = 0;
            }
        }

        /* Quand la flèche retour est survolé */
        retour.addEventListener('mouseenter', () => {
            retour.src = "images/arrangement/retour-fleche2.png";
        });

        retour.addEventListener('mouseleave', () => {
            retour.src = "images/arrangement/retour-fleche.png";
        });
    });
});

// Close modal when clicking outside the image
modal.addEventListener("click", (event) => {
    if ((event.target === modal) || (event.target === retour) || (event.target === description)) {
        modal.style.display = "none";
        debloquerScroll();
        livret.src = "images/arrangement/livret.png";
        retour.src = "images/arrangement/retour-fleche.png";
        modal.classList.remove("active");
        modal.classList.remove("active2");
        modalImage.classList.remove("fondimg");
        desc.style.maxHeight = "30vh";
        desc.style.margin = "clamp(0px, 0.5vw, 10px) clamp(0px, 0.5vw, 10px) clamp(0px, 2vw, 20px) clamp(0px, 0.5vw, 10px)";
        desc.scrollTop = 0;
        if (window.innerWidth >= tailleTel) {
          description.style.width = "45vw";
        }
        else {
          description.style.width = "80vw";
        }
    }
});



/* Système d'affichage des favori par le bouton menuFav */
document.getElementById("favMenu").onclick = function() {
    if (favMenu.src.endsWith("images/arrangement/etoileMenu.png")) {
        favMenu.src = "images/arrangement/etoileMenu_gold.png"; 
        affFav(true);
        window.scrollTo(0, 0);
    }
    else {
        favMenu.src = "images/arrangement/etoileMenu.png"; 
        affFav(false);
        window.scrollTo({top: placementBase});
    }
}

videFav.addEventListener("click", function(event) {
    event.preventDefault();
    viderFavoris();
    location.reload();
});


/*************************/
/* FONCTIONS UTILITAIRES */
/*************************/

// Reset le roll Favori page
function affFav(elem) {
    if (elem) {
        placementBase = window.scrollY;
        //window.scrollTo(0, 0);
        textFavNone.style.display = "flex"; 
        favNone.forEach(truc => {
            truc.style.display = "none";
        });

        thumbnails.forEach(smallThumb => {
                smallThumb.style.display = "none"; 
        });
        thumbnails.forEach(smallThumb => {
            if (smallThumb.classList.contains("favori_image")) {
                smallThumb.style.display = "block"; 
                textFavNone.style.display = "none"; 
            }
        });
    }

    else {
        favNone.forEach(truc => {
            truc.style.display = "block";
        });

        thumbnails.forEach(smallThumb => {
            smallThumb.style.display = "block"; 
        });

        textFavNone.style.display = "none"; 
        //window.scrollTo({top: placementBase});
    }
}

// Retourne le nom simple de l'image selectionné

/*
function nameFichier(elem) {
    return decodeURIComponent(new URL(elem).pathname.split('/').pop());
}
*/

function nameFichier(elem) {
    return decodeURIComponent(elem.split('/').pop());
}

function nameDessin(elem) {
    return nameFichier(elem).split('.').slice(0, -1).join('.');
}

// Ajouter un favori
function ajouterFavori(item) {
    let favoris = JSON.parse(localStorage.getItem("favoris") || "[]");
    if (!favoris.includes(item)) {
        favoris.push(item);
        localStorage.setItem("favoris", JSON.stringify(favoris));
        console.log("fav add : ", item);
    }
}

// Supprimer un favori
function supprimerFavori(item) {
    let favoris = JSON.parse(localStorage.getItem("favoris") || "[]");
    favoris = favoris.filter(f => f !== item);
    localStorage.setItem("favoris", JSON.stringify(favoris));
    console.log("fav remove : ", item);
}

// Afficher les favoris
function afficherFavoris() {
    let favoris = JSON.parse(localStorage.getItem("favoris") || "[]");
    favoris.forEach(fav => console.log("Favori :", fav));
}

// Vide les favoris
function viderFavoris() {
    localStorage.setItem("favoris", JSON.stringify([]));
    console.log("fav vidés");
}

// Bloque le scroll
function bloquerScroll() {
    document.body.style.overflowY = "hidden";
    document.documentElement.style.overflowY = "hidden"; // pour <html>
}

// Réactive le scroll
function debloquerScroll() {
    document.body.style.overflowY = "";
    document.documentElement.style.overflowY = "";
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach(img => {
    img.setAttribute("loading", "lazy");
    img.setAttribute("decoding", "async");
  });
});