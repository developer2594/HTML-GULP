// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
import data from "../persons.js";
window.addEventListener("DOMContentLoaded", (event) => {
  const tBody = document.querySelector(".product-content__body");
  let key = "";
  // =================================
  data.forEach((person, i, array) => {
    // persons.innerHTML = `<td>${person}</td>`;
    //   let tegs = `<div>${persone.id}</div>
    // <td>${persone.name}</td>
    // <td>${persone.company}</td>
    // <td>${persone.phone}</td>
    // <td>${persone.email}</td>
    // <td>${persone.country}</td>
    // <td>
    //   <button type="submit" class="product-content__button">
    //     ${persone.status}
    //   </button>
    // </td>`;
  });

  for (key in data) {
    const person = document.createElement("tr"),
      name = document.createElement("td"),
      company = document.createElement("td"),
      phone = document.createElement("td"),
      email = document.createElement("td"),
      country = document.createElement("td"),
      status = document.createElement("td"),
      tdButton = document.createElement("td"),
      button = document.createElement("button");
    // let tag = {};

    person.classList.add("product-content__person");
    let tag = `<td class="product-content__name">${data[key].name}</td>
    <td class="product-content__company">${data[key].company}</td>
    <td class="product-content__phone">${data[key].phone}</td>
    <td class="product-content__email">${data[key].email}</td>
    <td class="product-content__country">${data[key].country}</td>
    <td class="product-content__button">
    <button class="product-content__btn">${data[key].status}</button>
    </td>`;
    // name.classList.add("product-content__name");
    // company.classList.add("product-content__company");
    // phone.classList.add("product-content__phone");
    // email.classList.add("product-content__email");
    // country.classList.add("product-content__country");
    // tdButton.classList.add("product-content__button");
    // button.classList.add("product-content__btn");

    // name.innerHTML = `${data[key].name}`;
    // company.innerHTML = `${data[key].company}`;
    // phone.innerHTML = `${data[key].phone}`;
    // email.innerHTML = `${data[key].email}`;
    // country.innerHTML = `${data[key].country}`;

    // tdButton.appendChild(button);
    // person.appendChild(name);
    person.innerHTML = tag;
    // person.appendChild(company);
    // person.appendChild(phone);
    // person.appendChild(email);
    // person.appendChild(country);
    // person.appendChild(status);
    tBody.appendChild(person);

    // console.log("key:", data[key].name);
    console.log("tag:", tag);
  }
  // for (let i = 0; i < data.length; i++) {
  //   console.log("data", data[i]);
  // }
});
