var nav = document.getElementById('nav');

function navegador(){
  var scroll = document.body.scrollTop;
  if(scroll >= 500){
    nav.classList.add('nav-nuevo');
  } else if (scroll <= 483){
    nav.classList.remove('nav-nuevo');
  }
}
document.addEventListener("scroll", navegador);
