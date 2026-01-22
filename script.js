// scroll reveal 
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach((el, index) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");

      // one-by-one stagger
      el.style.transitionDelay = `${index * 120}ms`;
    } else {
      el.classList.remove("active");
      el.style.transitionDelay = "0ms";
    }
  });
};

let ticking = false;

const optimizedReveal = () => {
  revealOnScroll();
  ticking = false;
};

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(optimizedReveal);
    ticking = true;
  }
});

revealOnScroll();


// theme toggle
const toggle = document.getElementById("themeToggle");
const icon = toggle.querySelector("i");

toggle.onclick = () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  if (document.body.classList.contains("dark")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
};

// ultra smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

