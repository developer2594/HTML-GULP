// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
import data from "../persons.js";
window.addEventListener("DOMContentLoaded", (event) => {
  const tBody = document.querySelector(".content-info__body"),
    entries = document.querySelector(".navigation-length__entries");
  let personLength = data.length;

  entries.innerHTML = `${personLength}`;

  data.forEach((person) => {
    const tag = `
    <td class="content-info__name">${person.name}</td>
    <td class="content-info__company">${person.company}</td>
    <td class="content-info__phone">${person.phone}</td>
    <td class="content-info__email">${person.email}</td>
    <td class="content-info__country">${person.country}</td>
    <td class="content-info__button">
    <button class="content-info__btn">${person.status}</button>
    </td>
    `;
    const persone = document.createElement("tr");
    persone.classList.add("content-info__person");

    personLength = person.length;

    persone.innerHTML = tag;
    tBody.appendChild(persone);
  });
});
