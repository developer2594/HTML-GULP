// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
import data from "../persons.js";
window.addEventListener("DOMContentLoaded", (event) => {
  const persons = document.querySelector(".product-content__info");
  let persone;

  // persons.appendChild(html);
  // =================================
  data.forEach((persone) => {
    create(persone);
    // let html = document.createElement(tegs);
    // console.log("persons", persons);
    // persons.appendChild(html);
  });
  function create(persone) {
    //   let tegs = `<td>${persone.name}</td>
    // <td>${persone.company}</td>
    // <td>${persone.phone}</td>
    // <td>${persone.email}</td>
    // <td>${persone.country}</td>
    // <td>
    //   <button type="submit" class="product-content__button">
    //     ${persone.status}
    //   </button>
    // </td>`;
    let tegs = document.createElement("td");
    tegs.innerHTML = `<div></div>`;
    // let html = document.createElement(tegs);
    persons.appendChild(tegs);
    console.log("persone", persons);
  }
});
