'use strict';

function onScrollEnd (fn) {

  var lastPosition = getWindowScrollOffset().top;
  var currentPosition;
  var scrollDirection;
  var finalCheck;

  window.addEventListener('scroll', onScrollEvent);

  function onScrollEvent () {
    currentPosition = getWindowScrollOffset().top;

    if (lastPosition === currentPosition) {
      fn(scrollDirection);
    } else {
      if (finalCheck != null) window.clearTimeout(finalCheck);
      finalCheck = window.setTimeout(onScrollEvent, 100);
      scrollDirection = lastPosition < currentPosition ? 'down' : 'up';
      lastPosition = currentPosition;
    }
  }
}

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

function scrollToNextSection (scrollDirection) {
  var sectionNames = ['first', 'second', 'third','fourth'];
  if (scrollDirection === 'up') sectionNames.reverse();

  var nextY =
    sectionNames
      .map(function (sectionName) { return document.getElementById(sectionName).getBoundingClientRect().top; })
      .reduce(function (acc, sectionYPos) {
        if (acc !== null) return acc;
        if (scrollDirection === 'down' && sectionYPos >= 0) return sectionYPos;
        if (scrollDirection === 'up' && sectionYPos <= 0) return sectionYPos;
        return acc;
      }, null);

  scrollToY(nextY + getWindowScrollOffset().top, 1000, 'easeInOutQuint');
}

// onScrollEnd(scrollToNextSection);
