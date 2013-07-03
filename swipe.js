/* swipe */

function Swipe(slider, params){

  // Swipe object
  var swipe = {
  
    // Slider
    slider: slider,
    
    // Finger position on the screen
    x: 0,
    
    // Current speed (left when < 0, right when > 0)
    vx: 0,
    
    // Get current slide index
    getPos: function(){ return this.currentIndex },
    
    // Slide to an index
    slide: function(index){
      if(!(index < 0 || index > $(this.slider).find(".slide").length - 1)){
        this.currentSlide = $($(this.slider).find(".slide")[index]);
        this.currentSlide.addClass("currentslide").removeClass("leftslide rightslide");
        this.currentSlide.prevAll().addClass("leftslide").removeClass("currentslide rightslide");
        this.currentSlide.nextAll().addClass("rightslide").removeClass("currentslide leftslide");
        this.currentIndex = index;
      }
    },
    
    // Previous slide
    prev: function(){ this.slide(this.currentIndex - 1); },
    
    // Next slide
    next: function(){ this.slide(this.currentIndex + 1); }
  };
  
  // Show starting slide
  swipe.slide(params.startSlide || 0);
  
  // Set default speed
  swipe.speed = params.speed || 300;
  
  // Enable transitions
  setTimeout(function(){ $(swipe.slider).removeClass("notransition"); }, swipe.speed);
  
  // Set transition end callback
  swipe.transitonend = params.transitionEnd || function(){};
  
  // Touch start
  $(slider).on("touchstart", function(e){

    // Disable transitions
    $(swipe.slider).addClass("notransition");
    
    // Save finger position
    swipe.x = e.originalEvent.changedTouches[0].pageX - e.currentTarget.offsetLeft;

  })
  
  // Touch move
  .on("touchmove", function(e){
    
    // Disable native scroll
    e.preventDefault();
    
    // Get finger position
    var x = e.originalEvent.changedTouches[0].pageX - e.currentTarget.offsetLeft;
    
    // Get finger speed and direction
    swipe.vx = x - swipe.x;
    
    // Save finger position
    swipe.x = x;
    
    // Move current slide and neighbours
    swipe.currentSlide.css("left", parseInt(swipe.currentSlide.css("left")) + swipe.vx);
    swipe.currentSlide.next().css("left", parseInt(swipe.currentSlide.next().css("left")) + swipe.vx);
    swipe.currentSlide.prev().css("left", parseInt(swipe.currentSlide.prev().css("left")) + swipe.vx);
    
  })
  
  // Touch end
  .on("touchend", function(e){
  
    // Enable transitions
    $(swipe.slider).removeClass("notransition");
    
    // Reset slides position to auto
    $(swipe.slider).find(".slide").css("left", "");
    
    /*sl = document.body.scrollLeft;
    sl += dir * vw / 3;
    $('body').animate(
      {scrollLeft: vw * Math.round(sl/vw)},
      200
    );
    $("video").each(function(){
      this.pause();
    });
    $("video").get(Math.round(sl/vw) - 1).play();*/
    
  });
  
  // Return the swipe object
  return swipe;

}







// test
var mySwipe = Swipe(document.getElementById('slider'), {
  startSlide: 2,
  speed: 300,
  callback: function(index, elem) { alert("callback"); },
  transitionEnd: function(index, elem) { alert("transitionend"); }
});