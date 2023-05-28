window.onscroll = function (){
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;
    if(scroll == 300 || scroll == 1439){
      var target = document.querySelector('.box-technologies');
      var player = target.animate([
        {transform: 'translate(-500px)'},
        {transform: 'translate(0px, 0px)'}
      ], 800);
    }
}


