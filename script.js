document.addEventListener("DOMContentLoaded", () => {

  /* Mobile navigation */
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const active = nav.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", active);
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }


  /* FAQ accordion */
  const faqButtons = document.querySelectorAll(".faq-question");

  faqButtons.forEach(button => {
    button.addEventListener("click", () => {

      const currentItem = button.parentElement;
      const isActive = currentItem.classList.contains("active");

      document.querySelectorAll(".faq-item").forEach(item => {
        item.classList.remove("active");
      });

      if (!isActive) {
        currentItem.classList.add("active");
      }
    });
  });


  /* Current year */
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* Smooth internal links */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(event) {

      const targetId = this.getAttribute("href");

      if (targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

});
