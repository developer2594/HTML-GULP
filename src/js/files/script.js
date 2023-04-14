// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
import data from "../persons.js";
window.addEventListener("DOMContentLoaded", (event) => {
  const tBody = document.querySelector(".product-content__body");

  data.forEach((person) => {
    const tag = `
    <td class="product-content__name">${person.name}</td>
    <td class="product-content__company">${person.company}</td>
    <td class="product-content__phone">${person.phone}</td>
    <td class="product-content__email">${person.email}</td>
    <td class="product-content__country">${person.country}</td>
    <td class="product-content__button">
    <button class="product-content__btn">${person.status}</button>
    </td>
    `;
    const persone = document.createElement("tr");
    persone.classList.add("product-content__person");

    persone.innerHTML = tag;
    tBody.appendChild(persone);
  });
});
