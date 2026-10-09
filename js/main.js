(() => {
  "use strict";

  const body = document.body;
  const checkoutUrl = body.dataset.checkoutUrl.trim();
  const checkoutLinks = document.querySelectorAll("[data-checkout]");
  const stickyCta = document.querySelector("[data-sticky-cta]");
  const offerSection = document.getElementById("oferta");

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  if (checkoutUrl) {
    checkoutLinks.forEach((link) => {
      link.href = checkoutUrl;
    });
  }

  const updateStickyCta = () => {
    if (!stickyCta) return;
    stickyCta.classList.toggle("is-visible", window.scrollY > 520);
    body.classList.toggle("has-sticky-cta", window.scrollY > 520);
  };

  updateStickyCta();
  window.addEventListener("scroll", updateStickyCta, { passive: true });

  if (stickyCta && offerSection && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        stickyCta.hidden = entry.isIntersecting;
      },
      { threshold: 0.18 }
    );

    observer.observe(offerSection);
  }

  document.querySelectorAll("[data-policy]").forEach((link) => {
    link.setAttribute("aria-label", `${link.textContent.trim()} — pendiente de incorporar`);
  });
})();
