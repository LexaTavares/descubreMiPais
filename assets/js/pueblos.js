
var imagen=document.getElementsByClassName('imagen');
var modal=document.getElementsByClassName('modal')[0];
var img=document.getElementById('image');

for (var i=0;i<imagen.length;i++){
  imagen[i].addEventListener('click',disparaImagen);
}

function disparaImagen(){
   modal.style.display="block";
   img.src=this.src;
 }
