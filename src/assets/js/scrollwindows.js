window.onscroll = function (){
    // Obtenemos la posicion del scroll en pantall
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;
    // Realizamos alguna accion cuando el scroll este entre la posicion 300 y 400
   // console.log(scroll);
    if(scroll > 1405 && scroll < 1500){
      var target = document.querySelector('.box');
      var player = target.animate([
        {transform: 'translate(-500px)'},
        {transform: 'translate(0px, 0px)'}
      ], 800);
    }else if(scroll > 2500 && scroll < 2600){
      var target = document.querySelector('.box');
      var player = target.animate([
        {transform: 'translate(-500px)'},
        {transform: 'translate(0px, 0px)'}
      ], 800);
    }
}