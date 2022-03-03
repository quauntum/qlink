// https://gist.github.com/IceCreamYou/cd517596e5847a88e2bb0a091da43fb4

// this should return true only when scrollbars are forced in system settings

function areScrollbarsVisible() {
  var scrollableElem = document.createElement('div'),
    innerElem = document.createElement('div');
  scrollableElem.style.width = '30px';
  scrollableElem.style.height = '30px';
  scrollableElem.style.overflow = 'scroll';
  scrollableElem.style.borderWidth = '0';
  innerElem.style.width = '30px';
  innerElem.style.height = '60px';
  scrollableElem.appendChild(innerElem);
  document.body.appendChild(scrollableElem); // Elements only have width if they're in the layout
  var diff = scrollableElem.offsetWidth - scrollableElem.clientWidth;
  document.body.removeChild(scrollableElem);
  return diff > 0;
}

export default areScrollbarsVisible;
