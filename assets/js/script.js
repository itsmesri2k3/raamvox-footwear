document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById('click').checked = false;
    });
});
