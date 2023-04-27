// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
import data from "../persons.js";
window.addEventListener("DOMContentLoaded", (event) => {
  const tBody = document.querySelector(".content-info__body"),
    entries = document.querySelector(".navigation-length__entries");
  let personLength = data.length;

  const list = document.querySelectorAll(".content-info__list");
  list.forEach((item) => {
    const ul = document.createElement("ul");
    item.appendChild(ul);
  });

  list.forEach((i) => {
    data.forEach((person) => {
      i.querySelectorAll("ul").id = `${person.name}`;
      console.log("person", person.name, i);
    });
    console.log("i", i.querySelectorAll("ul"));
  });

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
    // const ul = (list = document.querySelectorAll("ul"));
    // ul.id = `${person.name}`;
    // console.log(ul);
    personLength = person.length;

    // persone.innerHTML = tag;
    // tBody.appendChild(persone);
    // creatUl(name);
  });
  function creatUl(name) {
    const ul = (list = document.querySelectorAll("ul"));
    ul.id = aaa;
  }
});
