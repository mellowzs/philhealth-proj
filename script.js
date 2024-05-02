
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  let slideIndex = 1;

  function displaySlide(index) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index].style.display = "block";
    dots[index].className += " active";
  }

  function currentSlide(n) {
    slideIndex = n - 1;
    displaySlide(slideIndex);
}

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    displaySlide(slideIndex);
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    displaySlide(slideIndex);
  }
    setupDotListeners();
  // Event listeners for dots
  function setupDotListeners() {
    for (let i = 1; i <= 23; i++) {
        const dot = document.getElementById(`dot${i}`);
        dot.addEventListener("click", () => currentSlide(i));
    }
}

  // Event listeners for buttons
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

// Display the current or first slide before the 3 second interval
  currentSlide(slideIndex);

  // Change image every 3 seconds (adjust timing as needed)
  setInterval(nextSlide, 3000); // Change image every 3 seconds
}


