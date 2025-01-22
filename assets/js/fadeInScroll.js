const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.classList.remove("hidden");
        observer.unobserve(entry.target); // Optionnel : arrêter d'observer
      }
    });
  },
  { threshold: 0.1 } // 10% visible
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
