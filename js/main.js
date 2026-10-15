(() => {
  "use strict";

  const body = document.body;
  const checkoutUrl = body.dataset.checkoutUrl.trim();
  const stickyBuy = document.querySelector("[data-sticky-buy]");
  const offer = document.getElementById("oferta");

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  if (checkoutUrl) {
    document.querySelectorAll("[data-checkout]").forEach((link) => {
      link.href = checkoutUrl;
    });
  }

  const updateStickyBuy = () => {
    if (!stickyBuy) return;
    const visible = window.scrollY > 680;
    stickyBuy.classList.toggle("is-visible", visible);
    body.classList.toggle("has-sticky-buy", visible);
  };

  updateStickyBuy();
  window.addEventListener("scroll", updateStickyBuy, { passive: true });

  if (stickyBuy && offer && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(([entry]) => {
      stickyBuy.hidden = entry.isIntersecting;
    }, { threshold: 0.2 });
    observer.observe(offer);
  }
})();
