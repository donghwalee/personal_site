
function slideMenu() {
  var $hamburger = $('#hamburger-wrapper');
  var $menuWrapper = $('#menu-wrapper');

  $menuWrapper.toggleClass('open');
  $hamburger.toggleClass('open');
}

function animateHamburger() {
  var $hamburgerButton = $(this);
  $hamburgerButton.toggleClass('open');
}

function setHamburgerListener(){
var $hamburgerButton = $('#hamburger-button');
$hamburgerButton.on('click', slideMenu);
$hamburgerButton.on('click', animateHamburger);

var $menu = $('#menu');
var menuItems = $menu.children();

for (var i = 0; i < menuItems.length; i++) {
  $(menuItems[i]).on('click', selectMenuItem);
}
};

setHamburgerListener();
