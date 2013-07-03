===Swipe===

Set up

````

var mySwipe = Swipe(document.getElementById('slider'), {
  startSlide: (integer),
  speed: 300,
  callback: function(index, elem) { alert("callback"); },
  transitionEnd: function(index, elem) { alert("transitionend"); }
});

````

API

````
mySwipe.prev();
mySwipe.next();
n = mySwipe.getPos();
mySwipe.slide(n);