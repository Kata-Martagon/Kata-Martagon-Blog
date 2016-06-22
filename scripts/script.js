

function elementInViewport(el) {
  var top = 150 + el.offsetTop;
  // var left = el.offsetLeft;
  // var width = el.offsetWidth;
  // var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
  //  left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset
  );
}

var last_known_scroll_position = 0;
var ticking = false;


function doSomething(scroll_pos) {
  // do something with the scroll position
  var pic1 = document.getElementById("img1");
  var pic2 = document.getElementById("img2");
  var pic3 = document.getElementById("img3");
  var pic4 = document.getElementById("img4");

console.log("active")
    if (elementInViewport(document.getElementById("first")) === true) {
      // pic.src = "http://i.telegraph.co.uk/multimedia/archive/02830/cat_2830677b.jpg"
      pic1.style.opacity = 1;
      pic2.style.opacity = 0;
      pic3.style.opacity = 0;
      pic4.style.opacity = 0;
    }
    else if (elementInViewport(document.getElementById("second")) === true) {
      // pic.src = "https://i.vimeocdn.com/portrait/58832_300x300.jpg"
      pic1.style.opacity = 0;
      pic2.style.opacity = 1;
      pic3.style.opacity = 0;
      pic4.style.opacity = 0;
    }
    else if (elementInViewport(document.getElementById("third")) === true) {
      // pic.src = "https://upload.wikimedia.org/wikipedia/commons/8/8e/Eyjafjallaj%C3%B6kull.jpeg"
      pic1.style.opacity = 0;
      pic2.style.opacity = 0;
      pic3.style.opacity = 1;
      pic4.style.opacity = 0;
    }

    else if (elementInViewport(document.getElementById("fourth")) === true) {
      // pic.src = "https://upload.wikimedia.org/wikipedia/commons/8/8e/Eyjafjallaj%C3%B6kull.jpeg"
      pic1.style.opacity = 0;
      pic2.style.opacity = 0;
      pic3.style.opacity = 0;
      pic4.style.opacity = 1;
    }

    else if (elementInViewport(document.getElementById("fifth")) === true) {
      // pic.src = "https://upload.wikimedia.org/wikipedia/commons/8/8e/Eyjafjallaj%C3%B6kull.jpeg"
      pic1.style.opacity = 1;
      pic2.style.opacity = 0;
      pic3.style.opacity = 0;
      pic4.style.opacity = 0;
    }

    else if (elementInViewport(document.getElementById("sixth")) === true) {
      // pic.src = "https://upload.wikimedia.org/wikipedia/commons/8/8e/Eyjafjallaj%C3%B6kull.jpeg"
      pic1.style.opacity = 0;
      pic2.style.opacity = 1;
      pic3.style.opacity = 0;
      pic4.style.opacity = 0;
    }

    else if (elementInViewport(document.getElementById("seventh")) === true) {
      // pic.src = "https://upload.wikimedia.org/wikipedia/commons/8/8e/Eyjafjallaj%C3%B6kull.jpeg"
      pic1.style.opacity = 0;
      pic2.style.opacity = 0;
      pic3.style.opacity = 1;
      pic4.style.opacity = 0;
    }

    else if (elementInViewport(document.getElementById("eighth")) === true) {
      // pic.src = "https://upload.wikimedia.org/wikipedia/commons/8/8e/Eyjafjallaj%C3%B6kull.jpeg"
      pic1.style.opacity = 0;
      pic2.style.opacity = 0;
      pic3.style.opacity = 0;
      pic4.style.opacity = 1;
    }

    else if (elementInViewport(document.getElementById("ninth")) === true) {
      // pic.src = "https://upload.wikimedia.org/wikipedia/commons/8/8e/Eyjafjallaj%C3%B6kull.jpeg"
      pic1.style.opacity = 1;
      pic2.style.opacity = 0;
      pic3.style.opacity = 0;
      pic4.style.opacity = 0;
    }
};

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.pageYOffset;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});
