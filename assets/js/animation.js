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