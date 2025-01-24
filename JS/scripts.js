console.log("test voor de JS file");

document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.getElementById('header_opties_container').classList.toggle('active');
});

document.querySelector('.hamburger-menu').addEventListener('click', function() {
  document.querySelector('header').classList.toggle('menu-open');
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contactformulier");
  const submitButton = document.querySelector(".contactformulier_button");
  const loadingAnimationContainer = document.getElementById("loading-animation");

  // Lottie-animatie initialiseren
  const loadingAnimation = lottie.loadAnimation({
      container: loadingAnimationContainer, // de container waarin de animatie wordt geladen
      renderer: "svg",
      loop: true,
      autoplay: false, // start pas wanneer het formulier wordt ingediend
      path: "json/loading.json", // URL van de animatie
  });

  form.addEventListener("submit", function (e) {
      // Zorg ervoor dat de animatie pas na submit verschijnt
      submitButton.style.display = "none"; // Verberg de knop
      loadingAnimationContainer.style.display = "block"; // Toon de animatie
      loadingAnimation.play(); // Start de animatie
  });
});
