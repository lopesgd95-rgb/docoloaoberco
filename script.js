/* =========================================================
   DO COLO AO BERÇO — JavaScript
========================================================= */

const CHECKOUT_URL = "https://pay.hotmart.com/K107248678J";

/* Garante que todos os CTAs usem o mesmo checkout */
document.querySelectorAll("[data-checkout]").forEach((button) => {
  button.setAttribute("href", CHECKOUT_URL);
});

/* FAQ */
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.closest(".faq-item");
    const wasOpen = item.classList.contains("is-open");

    document.querySelectorAll(".faq-item.is-open").forEach((openItem) => {
      openItem.classList.remove("is-open");
      openItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
    });

    if (!wasOpen) {
      item.classList.add("is-open");
      question.setAttribute("aria-expanded", "true");
    }
  });
});

/* Ano automático no rodapé */
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
