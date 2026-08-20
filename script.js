/* =========================================================
   DO COLO AO BERÇO
   JavaScript da página
========================================================= */

/*
  1) COLE O LINK REAL DO SEU CHECKOUT ENTRE AS ASPAS.
  2) Você só precisa alterar este local.
  3) Todos os botões de compra usam esta mesma variável.
*/
const CHECKOUT_URL = "COLE_AQUI_O_LINK_DO_CHECKOUT";

/* BOTÕES DE COMPRA */
const checkoutButtons = document.querySelectorAll("[data-checkout]");

checkoutButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    const linkFoiConfigurado =
      CHECKOUT_URL &&
      CHECKOUT_URL !== "COLE_AQUI_O_LINK_DO_CHECKOUT";

    if (!linkFoiConfigurado) {
      alert(
        "O link do checkout ainda não foi configurado. Abra o arquivo script.js e substitua COLE_AQUI_O_LINK_DO_CHECKOUT pelo seu link real."
      );
      return;
    }

    window.location.href = CHECKOUT_URL;
  });
});

/* FAQ */
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.closest(".faq-item");
    const isOpen = item.classList.contains("is-open");

    document.querySelectorAll(".faq-item.is-open").forEach((openItem) => {
      openItem.classList.remove("is-open");
      const openButton = openItem.querySelector(".faq-question");
      openButton.setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("is-open");
      question.setAttribute("aria-expanded", "true");
    }
  });
});

/* ANO AUTOMÁTICO NO RODAPÉ */
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
