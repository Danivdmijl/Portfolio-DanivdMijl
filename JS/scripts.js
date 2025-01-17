console.log("test voor de JS file");

document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.getElementById('header_opties_container').classList.toggle('active');
});

document.querySelector('.hamburger-menu').addEventListener('click', function() {
  document.querySelector('header').classList.toggle('menu-open');
});