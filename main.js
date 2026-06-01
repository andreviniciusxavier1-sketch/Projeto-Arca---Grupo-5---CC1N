let prev = document.getElementById('notprev');
let next = document.getElementById('notnext');

let numeroNoticia = 1;
showNoticias(numeroNoticia);

function moverNoticias(n) {
  showNoticias(numeroNoticia += n);
}
function noticiaAtual(n) {
  showNoticias(numeroNoticia = n);
}

function showNoticias(n) {
  let i;
  let noticias = document.getElementsByClassName("noticia");
  let markers = document.getElementsByClassName("marker");
  if (n > noticias.length) {numeroNoticia = 1}
  if (n < 1) {numeroNoticia = noticias.length}
  for (i = 0; i < noticias.length; i++) {
    noticias[i].style.display = "none";
  }
  for (i = 0; i < markers.length; i++) {
    markers[i].className = markers[i].className.replace(" ativo", "");
  }
  noticias[numeroNoticia - 1].style.display = "block";
  markers[numeroNoticia - 1].className += " ativo";
}