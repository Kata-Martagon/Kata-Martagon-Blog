//Working on Matt's JS, just for function
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

//Me:

function scrollToSection (sectionName) {
  // Get panel offset and scroll offset, then calculate yPosition to scroll to
  var panelOffset = document.getElementById(sectionName).getBoundingClientRect();
// getBoundingClientRect() gets values with respect to the window(only the current visible portion of the page),
// not the document(whole page).
if (panelOffset.top <== 0) {}
//y is the number of pixels that the document is currently scrolled from the top.
var y = window.scrollY;
// But The pageYOffset property is an alias for the scrollY property: for cross border compatibility use pageYOffset
//The below basically says, if document is off the top, so is not the number 0, it is truthy and the code will run
if (window.scrollY) {
