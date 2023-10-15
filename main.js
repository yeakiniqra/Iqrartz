let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');


menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  navbar.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});



// Define the animation
  // Enable ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Define the animations
const aboutMeAnimation = gsap.from(".about-img", {
  scrollTrigger: {
    trigger: ".about", // Start animation when .about section enters the viewport
    start: "top 80%", // Start animation 80% from the top of the viewport
    end: "bottom top", // End animation when .about section leaves the viewport
    toggleActions: "play none none reverse", // Play animation on enter, reverse on exit
  },
  opacity: 0,
  x: -50,
  duration: 1,
  ease: "power2.inOut",
});

const aboutTextAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".about", // Start animation when the .about section enters the viewport
    start: "top 80%", // Start animation 80% from the top of the viewport
    end: "bottom top", // End animation when the .about section leaves the viewport
    toggleActions: "play none none reverse", 
  },
});

// Define animations for individual elements within the .about-text
aboutTextAnimation.from(".about-text h2", { opacity: 0, y: -50, duration: 0.5 });
aboutTextAnimation.from(".about-text p", { opacity: 0, y: 20, stagger: 0.3, duration: 0.5 });


const projectsAnimation = gsap.from(".work-samples .container", {
  scrollTrigger: {
    trigger: ".work-samples",
    start: "top 80%",
    end: "bottom top",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  duration: 1,

});

const headanimation = gsap.from(".about", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
    end: "bottom top",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  duration: 0.6,
  ease: "power2.inOut",
});

const mainanimation = gsap.from(".hero", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
    end: "bottom top",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  duration: 0.6,
  ease: "power2.inOut",
});


const sanimation = gsap.from(".work-experience", {
  scrollTrigger: {
    trigger: ".work-experience",
    start: "top 80%",
    end: "bottom top",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  duration: 0.6,
  ease: "power2.inOut",
});


const brandsanimation = gsap.from(".brands", {
  scrollTrigger: {
    trigger: ".brands",
    start: "top 80%",
    end: "bottom top",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  duration: 0.5,
  ease: "power2.inOut",
});

const contactMeAnimation = gsap.from(".contactme", {
  scrollTrigger: {
    trigger: ".contactme",
    start: "top 80%",
    end: "bottom top",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  duration: 0.6,
  ease: "power2.inOut",
});

const webanimation = gsap.from(".frontend", {
  scrollTrigger: {
    trigger: ".frontend",
    start: "top 80%",
    end: "bottom top",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  duration: 0.7,
  ease: "power2.inOut",
});