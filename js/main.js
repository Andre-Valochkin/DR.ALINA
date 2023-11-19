"use strict";
// Выпадающее меню
//
const headerBurger = document.querySelector(".header-top__span");
console.log(headerBurger);
const navMenu = document.querySelector("nav");
console.log(navMenu);
const navSpan = document.querySelector(".header-top__span span");
const bodyScrol = document.querySelector("body");
const navBurger = document.querySelector("header nav");
headerBurger.addEventListener("click", function () {
  navMenu.classList.toggle("header-top__nav");
  navMenu.classList.toggle("header-top__nav_click");
  headerBurger.classList.toggle("header-top__span");
  headerBurger.classList.toggle("header-top__span_click");
  navSpan.classList.toggle("header__span");
  navSpan.classList.toggle("header__span-click");
  bodyScrol.classList.toggle("body__click");
});
const navContactBtn = document.querySelector(".nav__contact");
navContactBtn.addEventListener("click", function () {
  if (navMenu.classList.contains("header-top__nav_click")) {
    navMenu.classList.toggle("header-top__nav");
    navMenu.classList.toggle("header-top__nav_click");
    headerBurger.classList.toggle("header-top__span");
    headerBurger.classList.toggle("header-top__span_click");
    navSpan.classList.toggle("header__span");
    navSpan.classList.toggle("header__span-click");
    bodyScrol.classList.toggle("body__click");
  }
});
const navSharesBtn = document.querySelector(".nav__a_shares");
navSharesBtn.addEventListener("click", function () {
  if (navMenu.classList.contains("header-top__nav_click")) {
    navMenu.classList.toggle("header-top__nav");
    navMenu.classList.toggle("header-top__nav_click");
    headerBurger.classList.toggle("header-top__span");
    headerBurger.classList.toggle("header-top__span_click");
    navSpan.classList.toggle("header__span");
    navSpan.classList.toggle("header__span-click");
    bodyScrol.classList.toggle("body__click");
  }
});
//
// Выпадающее меню
// изменение цвета груга при наведении на кнопку
//
const navA = document.querySelector(".nav__a_hover");
const navSpanHeader = document.querySelector(".nav__list span");
console.log(navSpanHeader);
navA.addEventListener("mouseover", function () {
  navSpanHeader.classList.toggle("nav__circle-span");
  navSpanHeader.classList.toggle("nav__circle-span_hover");
});
navA.addEventListener("mouseout", function () {
  navSpanHeader.classList.toggle("nav__circle-span");
  navSpanHeader.classList.toggle("nav__circle-span_hover");
});
// ......
const buttonZapis = document.querySelector(".form__button");
const spanZapis = document.querySelector("._zapis");
console.log(navSpanHeader);
buttonZapis.addEventListener("mouseover", function () {
  spanZapis.classList.toggle("form__button__span");
  spanZapis.classList.toggle("form__button__span_hover");
});
buttonZapis.addEventListener("mouseout", function () {
  spanZapis.classList.toggle("form__button__span");
  spanZapis.classList.toggle("form__button__span_hover");
});
// .......
const servicesBtn = document.querySelector(".services-btn");
const servicesSpan = document.querySelector(".services-btn__blok span");
servicesBtn.addEventListener("mouseover", function () {
  servicesSpan.classList.toggle("services__span");
  servicesSpan.classList.toggle("services__span_hover");
});
servicesBtn.addEventListener("mouseout", function () {
  servicesSpan.classList.toggle("services__span");
  servicesSpan.classList.toggle("services__span_hover");
});
// .......
const whyUsBtn = document.querySelector(".why-us-btn");
const whyUsSpan = document.querySelector(".why-us-btn span");
console.log(whyUsBtn);
console.log(whyUsSpan);
whyUsBtn.addEventListener("mouseover", function () {
  whyUsSpan.classList.toggle("why-us__span");
  whyUsSpan.classList.toggle("why-us__span_hover");
});
whyUsBtn.addEventListener("mouseout", function () {
  whyUsSpan.classList.toggle("why-us__span");
  whyUsSpan.classList.toggle("why-us__span_hover");
});

// .......
const dermatoscopyBtn = document.querySelector(".dermatoscopyBtn");
const dermatoscopySpan = document.querySelector(".dermatoscopySpan");

dermatoscopyBtn.addEventListener("mouseover", function () {
  dermatoscopySpan.classList.toggle("why-us__span");
  dermatoscopySpan.classList.toggle("why-us__span_hover");
});
dermatoscopyBtn.addEventListener("mouseout", function () {
  dermatoscopySpan.classList.toggle("why-us__span");
  dermatoscopySpan.classList.toggle("why-us__span_hover");
});

// .......
const articlesBtn = document.querySelector(".articlesBtn");
const articlesSpan = document.querySelector(".articlesSpan");

articlesBtn.addEventListener("mouseover", function () {
  articlesSpan.classList.toggle("why-us__span");
  articlesSpan.classList.toggle("why-us__span_hover");
});
articlesBtn.addEventListener("mouseout", function () {
  articlesSpan.classList.toggle("why-us__span");
  articlesSpan.classList.toggle("why-us__span_hover");
});
//
// изменение цвета круга при наведении на кнопку
// услуги - смена класов при неведении
//
const servicesSlaider = document.querySelector(".services-slider");
console.log(servicesSlaider);
servicesSlaider.addEventListener("mouseover", elementClick);
function elementClick(event) {
  const target = event.target;
  // console.log(target);
  if (target.classList.contains("A")) {
    target.classList.toggle("services-slider__content");
    target.classList.toggle("services-slider__content_hover");
  }
}
servicesSlaider.addEventListener("mouseout", elementClick);
function elementClick(event) {
  const target = event.target;
  // console.log(target);
  if (target.classList.contains("A")) {
    target.classList.toggle("services-slider__content");
    target.classList.toggle("services-slider__content_hover");
  }
}

//
// услуги - смена класов при неведении

// решение проблем - переключение в списках
//
const problemsList = document.querySelector(".problems__problems_list");
const solutionsList = document.querySelectorAll(".problems__solutions_blok ul");
const problemsli = document.querySelectorAll(".problems__problems_list li");
console.log(problemsli);
console.log(problemsList);
console.log(solutionsList);
problemsList.addEventListener("click", function (elem) {
  let element = elem.target;
  console.log(element);
  problemsli.forEach(function (elem) {
    elem.classList.remove("problems__problems_li_circle");
  });
  element.classList.add("problems__problems_li_circle");
  let dataElement = element.dataset.list;
  console.log(dataElement);
  let solutions = document.getElementById(`${dataElement}`);
  console.log(solutions);
  solutionsList.forEach(function (elem) {
    elem.className = "problems__solutions_list-noactive";
    solutions.className = "problems__solutions_list";
  });
});
//
// решение проблем - переключение в списках
// выпадающее меню в блоке контакты
//

const contactBtn = document.querySelector(".contacts__span-block_js");
const contactMenu = document.querySelector(".contacts__block_js");
const documentFile = document.documentElement;
documentFile.addEventListener("click", function (e) {
  let vasa = e.target.className;
  let block1 = document.querySelector(".contacts__block_js ").className;
  let block2 = document.querySelector(".contacts__text_title").className;
  let block3 = document.querySelector(".contacts__li").className;
  let block4 = document.querySelector(".contacts__list").className;
  let block5 = document.querySelector(".contacts__a").className;
  let block6 = document.querySelector(".contacts__span-block_js").className;
  let block7 = document.querySelector(".contacts__span_btn").className;

  if (contactMenu.classList.contains("contacts__block_click")) {
    if (
      vasa == block1 ||
      vasa == block2 ||
      vasa == block3 ||
      vasa == block4 ||
      vasa == block5
    ) {
    } else {
      contactMenu.classList.toggle("contacts__block");
      contactMenu.classList.toggle("contacts__block_click");
      contactBtn.classList.toggle("contacts__span-block");
      contactBtn.classList.toggle("contacts__span-block_click");
    }
  } else {
    if (vasa == block6 || vasa == block7) {
      contactMenu.classList.toggle("contacts__block");
      contactMenu.classList.toggle("contacts__block_click");
      contactBtn.classList.toggle("contacts__span-block");
      contactBtn.classList.toggle("contacts__span-block_click");
    }
  }
});

//
// выпадающее меню в блоке контакты

//
//
//
//
//
// /* форма отправки сообщения на почту */

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault(); //отключаем стандартное действие браузера"отправку формы по клике на кнопку"
    console.log("нажатие кнопки");
    let error = formValidate(form); //обьявляем переменную в нее запишем результат работы функции

    let formData = new FormData(form); //получаем значения из полей формы

    if (error === 0) {
      document.querySelector(".form").classList.add("_sending");
      // если нет ошибок то отправляем форму спомощью PHP
      let response = await fetch("sendmail.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        //получаем ответ об отправке формы, чистим форму и выводим сообщение пользователю
        let result = await response.json();
        alert(result.message);
        formPreview.innerHTML = "";
        form.requestFullscreen();
        document.querySelector(".form").classList.remove("_sending");
      } else {
        const curentPopup = "sendingError";
        popupOpen(curentPopup);
        document.querySelector(".form").classList.remove("_sending");
      }
    } else {
      const curentPopup = "allFields";
      popupOpen(curentPopup);
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req"); //получаем поля со звездочкой

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("_email")) {
        //если неправильно заполненно поле, выбьет ошибку
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }
  function formAddError(input) {
    //дает инпутам клас в зависимости от результата роботы функции "formValidate"
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }
  function formRemoveError(input) {
    //удаляет инпутам клас в зависимости от результатов работы функции "formValidate"
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }
  function emailTest(input) {
    //функция проверки ввода емейла
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});
//
// /* форма отправки сообщения на почту */

// .....увеличение текстерия за контентом
//
function auto_grow(element) {
  element.style.height = "5px";
  element.style.height = element.scrollHeight + "px";
}
//
// .....увеличение текстерия за контентом

//
//..... выпабающий список в блоке "проблемы и их решения"
if (document.documentElement.clientWidth < 620) {
  const buttonProblems = document.querySelectorAll(
    ".problems__problems_buttun"
  );
  console.log(buttonProblems);
  const submenu = document.querySelectorAll(".submenu");
  console.log(submenu);
  buttonProblems.forEach(function (e) {
    e.addEventListener("click", function (elem) {
      const elementButton = e.dataset.list;
      console.log(elementButton);
      const elementSubmenu = document.getElementById(`${elementButton}`);
      console.log(elementSubmenu);

      submenu.forEach(function (e) {
        e.classList.remove("_activSubmenu");
      });
      elementSubmenu.classList.toggle("_activSubmenu");
    });
  });
}
//..... выпабающий список в блоке "проблемы и их решения"
//
