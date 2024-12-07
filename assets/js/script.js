
document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById('click').checked = false;
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const menuCheckbox = document.getElementById('click');
  const nav = document.querySelector('nav');

  document.addEventListener('click', function (event) {
    if (!nav.contains(event.target) && menuCheckbox.checked) {
      menuCheckbox.checked = false;
    }
  });
});
 
  window.onload = function() {
    document.body.style.opacity = '1';
  };

  function showAlert() {
    {
      document.getElementById('customAlert').style.display = 'block';
      return false;
  }
}

// lazyload.js
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");
  images.forEach(img => {
      img.setAttribute("loading", "lazy");
  });
});
