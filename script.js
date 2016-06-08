


var last_known_scroll_position = 0;
var ticking = false;
var loc = 0;
var limit = 100;


function elementInViewport(el) {
  var top = limit + el.offsetTop;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
  }

  return (
    top >= window.pageYOffset
  );
}


function doSomething(scroll_pos) {
  // do something with the scroll position
  var pic1 = document.getElementById("img1");
  var pic2 = document.getElementById("img2");
  var pic3 = document.getElementById("img3");

console.log(loc);

    if (elementInViewport(document.getElementById("first")) === true) {
      // pic.src = "http://i.telegraph.co.uk/multimedia/archive/02830/cat_2830677b.jpg"
      pic1.style.opacity = 1;
      pic2.style.opacity = 0;
      pic3.style.opacity = 0;
      if (loc !== 0) {scrollToSection('first')
        loc = 0;
      }

    }
    else if (elementInViewport(document.getElementById("second")) === true) {
      // pic.src = "https://i.vimeocdn.com/portrait/58832_300x300.jpg"
      pic1.style.opacity = 0;
      pic2.style.opacity = 1;
      pic3.style.opacity = 0;
      if (loc !== 1) {scrollToSection('second')
        loc = 1;
      }

    }
    else if (elementInViewport(document.getElementById("third")) === true) {
      // pic.src = "https://upload.wikimedia.org/wikipedia/commons/8/8e/Eyjafjallaj%C3%B6kull.jpeg"
      pic1.style.opacity = 0;
      pic2.style.opacity = 0;
      pic3.style.opacity = 1;
      if (loc !== 2) {scrollToSection('third')
        loc = 2;
      }
    }

};

window.addEventListener('scroll', function(e) {
  if (last_known_scroll_position >= window.pageYOffset) {
    limit = 500;
  }
  else {
    limit = 100;
  }
  last_known_scroll_position = window.pageYOffset;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});

// Get window scroll offset
function getWindowScrollOffset () {
// Get values for ie9
// n.b. window.[pageXOffset|pageYOffset] should work in other browsers
var body = document.body;
var docElem = document.documentElement;

// Return object with top and left scroll position
return {
  top:  window.pageYOffset || docElem.scrollTop || body.scrollTop,
  left: window.pageXOffset || docElem.scrollLeft || body.scrollLeft
};
}

// Scroll window to given sectionName
function scrollToSection (sectionName) {
// Get panel offset and scroll offset, then calculate yPosition to scroll to
var panelOffset = document.getElementById(sectionName).getBoundingClientRect();
var windowScrollOffset = getWindowScrollOffset();
var yPos = panelOffset.top + windowScrollOffset.top;

// Scroll window to yPos
// window.scrollTo(0, yPos);
scrollToY(yPos, 1000, 'easeInOutQuint');

// Return false to override default behaviour of <a> tag
return false;
}



/*
* Script based on http://stackoverflow.com/a/26798337/4440396
*/

// first add raf shim
// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

// main function
function scrollToY(scrollTargetY, speed, easing) {
    // scrollTargetY: the target scrollY property of the window
    // speed: time in pixels per second
    // easing: easing equation to use

    var scrollY = window.scrollY;
    var scrollTargetY = scrollTargetY || 0;
    var speed = speed || 2000;
    var easing = easing || 'easeOutSine';
    var currentTime = 0;

    // min time .1, max time .8 seconds
    var time = Math.max(.5, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 1));

    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
    var PI_D2 = Math.PI / 2;
    var easingEquations = {
      easeOutSine: function (pos) {
          return Math.sin(pos * (Math.PI / 2));
      },
      easeInOutSine: function (pos) {
          return (-0.5 * (Math.cos(Math.PI * pos) - 1));
      },
      easeInOutQuint: function (pos) {
          if ((pos /= 0.5) < 1) {
              return 0.5 * Math.pow(pos, 5);
          }
          return 0.5 * (Math.pow((pos - 2), 5) + 2);
      }
    };

    // add animation loop
    function tick() {
        currentTime += 1 / 60;

        var p = currentTime / time;
        var t = easingEquations[easing](p);

        if (p < 1) {
          requestAnimFrame(tick);
          window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        } else {
          window.scrollTo(0, scrollTargetY);
        }
    }

    // call it once to get started
    tick();
}
