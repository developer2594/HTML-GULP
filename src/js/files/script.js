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
const countryList = [
  {
    name: "Россия",
    city: [
      { value: "moskow", name: "Москва" },
      { value: "sankPeterburg", name: "Санкт-Петербург" },
      { value: "novosibirsk", name: "Новосибирск" },
      { value: "ekaterinburg", name: "Екатеринбург" },
      { value: "kazan", name: "Казань" },
      { value: "nijniyNovgorod", name: "Нижний Новгород" },
    ],
  },

  {
    name: "Украина",
    city: [
      { value: "kiev", name: "Київ" },
      { value: "kharkov", name: "Харків" },
      { value: "odessa", name: "Одеса" },
      { value: "dnepr", name: "Дніпро" },
      { value: "donesk", name: "Донецьк" },
    ],
  },

  {
    name: "австрия",
    city: [
      { value: "vien", name: "Вена" },
      { value: "grac", name: "Грац" },
      { value: "linc", name: "Линц" },
      { value: "zalcburg", name: "Зальцбург" },
      { value: "vels", name: "Вельс" },
    ],
  },

  {
    name: "Польша",
    city: [
      { value: "vorshava", name: "Варшава" },
      { value: "krakov", name: "Краков" },
      { value: "lodz", name: "Лодзь" },
      { value: "vroclav", name: "Вроцлав" },
    ],
  },
];
countryList.forEach((el) => {
  console.log("country test 127", el.city);
});
// ==============

// ==============
let cityList = countryList[0];
let tagCountry;
let tagCity;
let selectedCity;
const country = document.querySelector("#country");
const city = document.querySelector("#city");
// console.log(cityList);

if (country) {
  // add tag select for country
  const countrySelect = document.createElement("select");
  countrySelect.classList.add("info-delivery__country");
  tagCountry = country.appendChild(countrySelect);
  // add cuty select
  if (city) {
    const citySelect = document.createElement("select");
    citySelect.classList.add("info-delivery__city");
    tagCity = city.appendChild(citySelect);
    changeCity();
  }
  // add country list for option
  countryList.forEach((el) => {
    let option = document.createElement("option");
    option.setAttribute("value", el.name);
    option.innerText = `${el.name}`;
    tagCountry.appendChild(option);
  });
  // ================

  country.onchange = function (count) {
    console.log(count.selectedIndex);
  };
  // ================================

  function changeCity(el) {
    console.log("city list", cityList.city);
    // add city list for cityes
    cityList.city.forEach((el) => {
      let option = document.createElement("option");
      option.setAttribute("value", el.value);
      option.innerText = `${el.name}`;
      tagCity.appendChild(option);
    });
  }
  // =======================
  // add cityes
  // function changCountry() {
  //   cityList.forEach((item) => {
  //     let option = document.createElement("option");
  //     option.setAttribute("value", item);
  //     option.innerText = `${item}`;
  //     tagCity.appendChild(option);
  //   });
  // }
  // change country
  // countrySelect.onchange = function (country) {
  //   this.cityList = country;
  //   console.log("citylist", country.option);
  //   this.city = "";
  //   changCountry();
  // };
  // ======================
}

// country.onchange = function (item) {
//   selectedCity = tagCountry.value;
//   // changCountry();
//   console.log("value", tagCountry.value);
// };

// tagCity.onchange = function () {};
