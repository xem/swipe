Swipe
=====

A tiny touchable slider based on jQuery. 

Set up
------

````
// Include jQuery + my JS and CSS files, and write this when the page is loaded:

var mySwipe = Swipe(document.getElementById('slider'), {
  startSlide: (integer),                                           // default starting slide index: 0
  speed: (integer),                                                // default transition speed: 300ms
  callback: function(index, elem) { alert("callback"); },         
  transitionEnd: function(index, elem) { alert("transitionend"); }
});

````

API
---

````
mySwipe.prev();       // Previous slide
mySwipe.next();       // Next slide
n = mySwipe.getPos(); // Get current slide index (start at 0)
mySwipe.slide(n);     // Set current slide index

````

Demo
----

http://xem.github.io/swipe

