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
//==========================================
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
//=========================================
// Доставка
const countryList = [
    { value: "russia", name: "Россия" },
    { value: "ukraine", name: "Украина" },
    { value: "ostereich", name: "Австрия" },
    { value: "poland", name: "Польша" },
  ],
  russia = [
    { value: "moskov", name: "Москва" },
    { value: "sankPeterburg", name: "Санкт-Петербург" },
    { value: "novosibirsk", name: "Новосибирск" },
    { value: "ekaterinburg", name: "Екатеринбург" },
    { value: "kazan", name: "Казань" },
    { value: "nijniyNovgorod", name: "Нижний Новгород	" },
  ],
  ukraine = [
    { value: "kiev", name: "Київ" },
    { value: "kharkov", name: "Харків" },
    { value: "odessa", name: "Одеса" },
    { value: "dnepr", name: "Дніпро" },
    { value: "donetsk", name: "Донецьк" },
  ],
  poland = [
    { valee: "varshava", name: "Варшава" },
    { valee: "krakovo", name: "Краков" },
    { valee: "lodz", name: "Лодзь" },
    { valee: "vroclav", name: "Вроцлав" },
  ],
  ostereich = [
    { value: "vien", name: "Вена" },
    { value: "grac", name: "Грац" },
    { value: "linc", name: "Линц" },
    { value: "zalcburg", name: "Зальцбург" },
    { value: "vels", name: "Вельс" },
  ];
let tagCountry;
let tagCity;
const country = document.querySelector(".info-delivery__count-sel");
const city = document.querySelector(".info-delivery__city-sel");

if (country) {
  // add country list for option
  function addCountryList() {
    countryList.forEach((el) => {
      let option = document.createElement("option");
      option.setAttribute("value", el.value);
      option.innerText = `${el.name}`;
      tagCountry.appendChild(option);
    });
  }
  // add tag select for country
  const countrySelect = document.createElement("select");
  countrySelect.setAttribute("id", "count-sel");
  tagCountry = country.appendChild(countrySelect);
  addCountryList();
  const countSel = document.querySelector("#count-sel");
  // chenge country
  countSel.addEventListener("change", function () {
    cutySel.innerHTML = "";
    if (this.value === "russia") {
      changeCity(russia);
    }
    if (this.value === "ukraine") {
      changeCity(ukraine);
    }
    if (this.value === "poland") {
      changeCity(poland);
    }
    if (this.value === "ostereich") {
      changeCity(ostereich);
    }
  });
}
// add cuty select
if (city) {
  const citySelect = document.createElement("select");
  citySelect.setAttribute("id", "city-sel");
  tagCity = city.appendChild(citySelect);
  changeCity(russia);
}
const cutySel = document.querySelector("#city-sel");
// add city list for cityes
function changeCity(el) {
  el.forEach((item) => {
    let option = document.createElement("option");
    option.setAttribute("value", item.value);
    option.innerText = `${item.name}`;
    tagCity.appendChild(option);
  });
}
