// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
//import { isMobile } from "./functions.js";
//========================================================================================================================================================

document.addEventListener("click", documentAction);
// проверка дляны элементов в блоке и проставление класса с номером длины элемента
const menuBlocks = document.querySelectorAll(".sub-menu-catalog__block");
if (menuBlocks.length) {
  menuBlocks.forEach((menuBlock) => {
    const menuBlockItems = menuBlock.querySelectorAll(
      ".sub-menu-catalog__category"
    ).length;
    menuBlock.classList.add(`sub-menu-catalog__block_${menuBlockItems}`);
  });
}
//========================================================================================================================================================
// открытие и закрытие мены по дата данным
function documentAction(e) {
  const targetElement = e.target;
  if (targetElement.closest("[data-parent]")) {
    const subMenuId = targetElement.dataset.parent
      ? targetElement.dataset.parent
      : null;
    const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);

    if (subMenu) {
      const activeLink = document.querySelector("._sub-menu-active");
      const activeBlock = document.querySelector("._sub-menu-open");
      // Проверка открытого меню и удаление классов
      if (activeLink && activeLink !== targetElement) {
        activeBlock.classList.remove("_sub-menu-open");
        activeLink.classList.remove("_sub-menu-active");
        document.documentElement.classList.remove("_sub-menu-open");
        document.documentElement.classList.remove("_sub-menu-active");
        document.documentElement.classList.remove("sub-menu-open");
      }
      // toggle class
      document.documentElement.classList.toggle("sub-menu-open");
      targetElement.classList.toggle("_sub-menu-active");
      subMenu.classList.toggle("_sub-menu-open");
    } else {
      console.log("Ой ой, нет такого подменю :(");
    }
    e.preventDefault();
  }
  if (targetElement.closest(".menu-top-header__link_catalog")) {
    document.documentElement.classList.add("catalog-open");
    e.preventDefault();
  }
  if (targetElement.closest(".menu-catalog__back")) {
    document.documentElement.classList.remove("catalog-open");
    document.querySelector("._sub-menu-active")
      ? document
          .querySelector("._sub-menu-active")
          .classList.remove("_sub-menu-active")
      : null;
    document.querySelector("._sub-menu-open")
      ? document
          .querySelector("._sub-menu-open")
          .classList.remove("_sub-menu-open")
      : null;
    e.preventDefault();
  }
  if (targetElement.closest(".sub-menu-catalog__back")) {
    document.documentElement.classList.remove("sub-menu-open");
    document.querySelector("._sub-menu-active")
      ? document
          .querySelector("._sub-menu-active")
          .classList.remove("_sub-menu-active")
      : null;
    document.querySelector("._sub-menu-open")
      ? document
          .querySelector("._sub-menu-open")
          .classList.remove("_sub-menu-open")
      : null;
    e.preventDefault();
  }
}
//========================================================================================================================================================
// Доставка
const countryList = ["Россия", "Украина", "Австрия", "Польша"],
  russia = [
    "Москва",
    "Санкт-Петербург",
    "Новосибирск",
    "Екатеринбург",
    "Казань",
    "Нижний Новгород	",
  ],
  ukraine = ["Київ", "Харків", "Одеса", "Дніпро", "Донецьк"],
  poland = ["Варшава", "Краков", "Лодзь", "Вроцлав"],
  ostereich = ["Вена", "Грац", "Линц", "Зальцбург", "Вельс"];
let tagCountry;
let tagCity;
let selectedCity;
const country = document.querySelector("#country");
const city = document.querySelector("#city");

if (country) {
  // add tag select for country
  const countrySelect = document.createElement("select");
  countrySelect.classList.add("info-delivery__country");
  tagCountry = country.appendChild(countrySelect);
  // add country list for
  countryList.forEach((item) => {
    let option = document.createElement("option");
    option.setAttribute("value", item);
    option.innerText = `${item}`;
    tagCountry.appendChild(option);
  });
  countrySelect.onchange = function (country) {
    changCountry(country);
    // console.log("sel", country.innerText);
    // add tag select cuty
  };
}

if (city) {
  const citySelect = document.createElement("select");
  citySelect.classList.add("info-delivery__city");
  const tagCity = city.appendChild(citySelect);

  const changCountry = function (item) {
    // console.log("change country", tagCountry.value);

    // add cityes russia
    if (tagCountry.value === "Россия") {
      russia.forEach((item) => {
        let option = document.createElement("option");
        option.setAttribute("value", item);
        option.innerText = `${item}`;
        tagCity.appendChild(option);
        // console.log(item);
      });

      // console.log("russia");
    }
  };
}

// country.onchange = function (item) {
//   selectedCity = tagCountry.value;
//   // changCountry();
//   console.log("value", tagCountry.value);
// };

// tagCity.onchange = function () {};
