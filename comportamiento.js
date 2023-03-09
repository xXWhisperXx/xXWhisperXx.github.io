// Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
// ocultar menu una vez que seleccionamos una opcion
let links = document.querySelectorAll("nav a");
for(var x = 0; x<links.length; x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
// crear barritas
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let python = document.getElementById("python");
crearBarra(python);
let ingles = document.getElementById("ingles");
crearBarra(ingles);

let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 &&entro == false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 10, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 9, 1, intervalJavascript);
        },100);
        const intervalIngles = setInterval(function(){
            pintarBarra(ingles, 16, 2, intervalIngles);
        },100);
        const intervalWordpress = setInterval(function(){
            pintarBarra(wordpress, 7, 3, intervalWordpress);
        },100);
        const intervalPython = setInterval(function(){
            pintarBarra(python, 6, 4, intervalPython);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 11, 5, intervalPhotoshop);
        },100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x=contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }
    else{
        clearInterval(interval)
    }
}

window.onscroll = function(){
    efectoHabilidades();
}