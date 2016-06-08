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
  window.scrollTo(0, yPos);

  // Return false to override default behaviour of <a> tag
  return false;
}
