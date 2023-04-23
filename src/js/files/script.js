// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
import data from "../persons.js";
window.addEventListener("DOMContentLoaded", (event) => {
  const tBody = document.querySelector(".content-info__body"),
    entries = document.querySelector(".navigation-length__entries");
  let personLength = data.length;

  const name = document.createElement("ul");
  name.id = "name";
  const contentName = document
    .querySelector(".content-info__name")
    .appendChild(name);

  const company = document.createElement("ul");
  company.id = "company";
  const contentCompany = document
    .querySelector(".content-info__company")
    .appendChild(company);

  const number = document.createElement("ul");
  number.id = "number";
  const contentNumber = document
    .querySelector(".content-info__number")
    .appendChild(number);

  const email = document.createElement("ul");
  email.id = "email";
  const contentEmail = document
    .querySelector(".content-info__email")
    .appendChild(email);

  const country = document.createElement("ul");
  country.id = "country";
  const contentCountry = document
    .querySelector(".content-info__country")
    .appendChild(country);

  const status = document.createElement("ul");
  status.id = "status";
  const contentStatus = document
    .querySelector(".content-info__status")
    .appendChild(status);

  entries.innerHTML = `${personLength}`;

  data.forEach((person) => {
    const tag = `
    <div class="content-info__name">${person.name}</div>
    <div class="content-info__company">${person.company}</div>
    <div class="content-info__phone">${person.phone}</div>
    <div class="content-info__email">${person.email}</div>
    <div class="content-info__country">${person.country}</div>
    <div class="content-info__button">
    <button class="content-info__btn">${person.status}</button>
    </div>
    `;
    const liName = document.createElement("li");
    liName.innerHTML = `${person.name}`;
    contentName.appendChild(liName);

    const liCompany = document.createElement("li");
    liCompany.innerHTML = `${person.company}`;
    contentCompany.appendChild(liCompany);

    const liNumber = document.createElement("li");
    liNumber.innerHTML = `${person.phone}`;
    contentNumber.appendChild(liNumber);

    const liEmail = document.createElement("li");
    liEmail.innerHTML = `${person.email}`;
    contentEmail.appendChild(liEmail);

    const liCountry = document.createElement("li");
    liCountry.innerHTML = `${person.country}`;
    contentCountry.appendChild(liCountry);

    const listatus = document.createElement("li");
    listatus.innerHTML = `${person.status}`;
    contentStatus.appendChild(listatus);

    const persone = document.createElement("div");
    persone.classList.add("content-info__person");

    personLength = person.length;

    // persone.innerHTML = tag;
    // tBody.appendChild(persone);
  });
});
