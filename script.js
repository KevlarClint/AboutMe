const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

// Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));



// Loading
const greetings = ["Hello", "Hola", "Bonjour", "こんにちは", "안녕하세요"];
const greetingText = document.getElementById("greeting-text");
let index = 0;

// Lock scroll during loading
document.body.classList.add("loading");

const cycleGreetings = setInterval(() => {
  index++;
  if (index < greetings.length) {
    greetingText.textContent = greetings[index];
  } else {
    clearInterval(cycleGreetings);

    // Fade out loader
    document.getElementById("loader").classList.add("fade-out");

    // Show content and re-enable scroll
    setTimeout(() => {
      document.getElementById("main-content").style.opacity = 1;
      document.body.classList.remove("loading"); // Unlock scroll
    }, 1000);
  }
}, 2000);
