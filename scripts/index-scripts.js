
var arte = document.getElementById("n-arte");
var ciencias = document.getElementById("n-ciencias");
var deportes = document.getElementById("n-deportes");
var historia = document.getElementById("n-historia");

var img_arte = document.getElementById("i-arte");
var img_ciencias = document.getElementById("i-ciencias");
var img_deportes = document.getElementById("i-deportes");
var img_historia = document.getElementById("i-historia");
var elemento = elemento;


//*******************ARTE**********************
function mostrar_arte(){
    arte.style.visibility="visible";
}

function ocultar_arte(){
    arte.style.visibility="hidden";
}

img_arte.onmouseover = mostrar_arte, img_arte.onmouseout = ocultar_arte;


//*******************CIENCIAS**********************
function mostrar_ciencias(){
    ciencias.style.visibility="visible";
}

function ocultar_ciencias(){
    ciencias.style.visibility="hidden";
}

img_ciencias.onmouseover = mostrar_ciencias, img_ciencias.onmouseout = ocultar_ciencias;

//*******************DEPORTES**********************
function mostrar_deportes(){
    deportes.style.visibility="visible";
}

function ocultar_deportes(){
    deportes.style.visibility="hidden";
}

img_deportes.onmouseover = mostrar_deportes, img_deportes.onmouseout = ocultar_deportes;


//*******************HISTORIA**********************
function mostrar_historia(){
    historia.style.visibility="visible";
}

function ocultar_historia(){
    historia.style.visibility="hidden";
}

img_historia.onmouseover = mostrar_historia, img_historia.onmouseout = ocultar_historia;