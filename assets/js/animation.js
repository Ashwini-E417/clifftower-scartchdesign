 const starCount = 400; // how many stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      document.body.appendChild(star);

      // random position & animation
      star.style.left = Math.random() * 100 + "vw";
      star.style.top = Math.random() * 100 + "vh";
      star.style.animationDuration = 5 + Math.random() * 10 + "s";
      star.style.animationDelay = Math.random() * 10 + "s";
      star.style.opacity = Math.random();
      star.style.width = star.style.height = Math.random() * 3 + "px";
    }



    document.addEventListener("DOMContentLoaded", () => {
  const animateSquareSection = document.querySelectorAll(".animateSquare");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [0,0.05, 0.3] // only fire at fully hidden OR half visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.30) {
        // Element is "in" (more than 50% visible)
        if (!entry.target.classList.contains("visible")) {
          entry.target.classList.add("visible");
        }
      } 
    else if (entry.intersectionRatio < 0.05) {
        // Fully out of view â†’ reset
        entry.target.classList.remove("visible");
      }
    });
  }, observerOptions);

  animateSquareSection.forEach(section => observer.observe(section));
});



document.addEventListener("DOMContentLoaded", () => {
  const animateDownSection = document.querySelectorAll(".animateDown");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [0,0.3,] // only fire at fully hidden OR half visible2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.30) {
        if (!entry.target.classList.contains("visible2")) {
          entry.target.classList.add("visible2");
        }
      } 
    else if (entry.isIntersecting && entry.intersectionRatio <= 0.01) {
        // Fully out of view → reset
        entry.target.classList.remove("visible2");
      }
    });
  }, observerOptions);

  animateDownSection.forEach(section => observer.observe(section));
});


document.addEventListener("DOMContentLoaded", () => {
  const animateRightSection = document.querySelectorAll(".animateRight");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [0,0.05, 0.3] // only fire at fully hidden OR half visible2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.30) {
        if (!entry.target.classList.contains("visible3")) {
          entry.target.classList.add("visible3");
        }
      } 
    else if (!entry.isIntersecting && entry.intersectionRatio < 0.05) {
        // Fully out of view â†’ reset
        entry.target.classList.remove("visible3");
      }
    });
  }, observerOptions);

  animateRightSection.forEach(section => observer.observe(section));
});

document.addEventListener("DOMContentLoaded", () => {
  const animateLeftSection = document.querySelectorAll(".animateLeft");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [0, 0.3] // only fire at fully hidden OR half visible2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.30) {
        if (!entry.target.classList.contains("visible4")) {
          entry.target.classList.add("visible4");
        }
      } 
    else if (!entry.isIntersecting &&  entry.intersectionRatio == 0) {
        // Fully out of view → reset
        entry.target.classList.remove("visible4");
      }
    });
  }, observerOptions);

  animateLeftSection.forEach(section => observer.observe(section));
});


document.addEventListener("DOMContentLoaded", () => {
  const animateCircleSection = document.querySelectorAll(".animateCircle");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [0,0.05, 0.3] // only fire at fully hidden OR half visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.30) {
        // Element is "in" (more than 50% visible)
        if (!entry.target.classList.contains("visible5")) {
          entry.target.classList.add("visible5");
        }
      } 
    else if (!entry.isIntersecting && entry.intersectionRatio < 0.01) {
        // Fully out of view → reset
        entry.target.classList.remove("visible5");
      }
    });
  }, observerOptions);

  animateCircleSection.forEach(section => observer.observe(section));
});
