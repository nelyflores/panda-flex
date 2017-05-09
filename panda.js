  var close=document.getElementById('borrar');
  console.log(close);
  var close1=document.getElementById('borrar1');
  var close2=document.getElementById('borrar2');
  var close3=document.getElementById('borrar3');
  var imagen_seleccionada=document.getElementById("panda1")
  var imagen_seleccionada1=document.getElementById("panda2")
  var imagen_seleccionada2=document.getElementById("panda3")
  var imagen_seleccionada3=document.getElementById("panda4")
  var imagen=document.getElementsByClassName('panda');
  var restauracion=document.getElementById('restaurar');
  restaurar.addEventListener("click",restaurarImg);
  close.addEventListener("click", borrarImagen);
  close1.addEventListener("click", borrarImagen1);
  close2.addEventListener("click", borrarImagen2);
  close3.addEventListener("click", borrarImagen3);
  function borrarImagen() {
    var imagen_seleccionada=document.getElementById("panda1")
    imagen_seleccionada.style.display='none';
    close.style.display='none';


  }
  function borrarImagen1() {
    var imagen_seleccionada1=document.getElementById("panda2")
    imagen_seleccionada1.style.display='none';
    close1.style.display='none';


  }
  function borrarImagen2() {
    var imagen_seleccionada2=document.getElementById("panda3")
    imagen_seleccionada2.style.display='none';
    close2.style.display='none';


  }
  function borrarImagen3() {
    var imagen_seleccionada3=document.getElementById("panda4")
    imagen_seleccionada3.style.display='none';
    close3.style.display='none';


  }


  function restaurarImg() {
    imagen_seleccionada3.style.display='block';
    close3.style.display='block';
    imagen_seleccionada2.style.display='block';
    close2.style.display='block';
    imagen_seleccionada1.style.display='block';
    close1.style.display='block';
    imagen_seleccionada.style.display='block';
    close.style.display='block';


  };
