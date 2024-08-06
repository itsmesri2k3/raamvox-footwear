document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById('click').checked = false;
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const menuCheckbox = document.getElementById('click');
    const nav = document.querySelector('nav');
    const navMenu = nav.querySelector('ul');
    let touchStartX = 0;
  
    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
      if (!nav.contains(event.target) && menuCheckbox.checked) {
        menuCheckbox.checked = false;
      }
    });
  
    // Detect swipe left to close the menu
    nav.addEventListener('touchstart', function (event) {
      touchStartX = event.changedTouches[0].screenX;
    });
  
    nav.addEventListener('touchend', function (event) {
      let touchEndX = event.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) { // Adjust the threshold as needed
        menuCheckbox.checked = false;
      }
    });
  });
  