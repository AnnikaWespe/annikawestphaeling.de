$(document).ready(function(){

    function explode(){
            console.log('scrolling')
    
    window.scrollBy(0,200);
    didScroll = true;
      }
      setTimeout(explode, 2000);
})