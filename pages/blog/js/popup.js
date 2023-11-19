/*   \/   попапы  \/  */
const popupLinks = document.querySelectorAll("._popup");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding"); //получаем колекцию элементов

let unlock = true; //переменная предотвращения двойных нажитий
const timeout = 800; //нужно для блокировки скрола

// проверяем наличие кнопок, вешаем событие при клике, получаем id и передаем в открывающую функцию
if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const curentPopup = this.dataset.id;
      console.log(curentPopup);
      popupOpen(curentPopup);
    });
  }
}

//проверяем наличие кнопки, вешаем событие при клике и закрываем попап
const buttonClose = document.querySelectorAll(".popup__close");

if (buttonClose.length > 0) {
  for (let index = 0; index < buttonClose.length; index++) {
    const el = buttonClose[index];

    // el.addEventListener("click", function (e) {
    //   popupClose(el.closest("_popup"));
    //   console.log("aaaaa");
    // });
  }
}

function popupOpen(curentPopup) {
  const popupOpenelement = document.querySelector(`.${curentPopup}`);
  console.log(popupOpenelement);
  // \/ закрываем первый попап если откраваем попап в попапе
  if (curentPopup && unlock) {
    const popupActive = document.querySelector("._open");
    if (popupActive) {
      bodyLock();
    } else {
      bodyLock();
    }
    console.log(curentPopup);

    // /\ закрываем первый попап если откраваем попап в попапе

    popupOpenelement.classList.add("_open");
    popupOpenelement.addEventListener("click", function (e) {
      if (e.target.closest(".popup__close")) {
        console.log("yafuuuu");
        popupClose(e.target.closest(".popup"));
      } else if (
        e.target.closest("._popup-form") ||
        e.target.closest(".dermatoscopyBtn")
      ) {
        console.log("VASA");
        start();
      } else {
        if (!e.target.closest(".popup__content") || buttonClose) {
          //проверка на клик если нету в кликнутом элементи родителя 'popup' то закрываеп попап
          popupClose(e.target.closest(".popup"));
        }
      }
    });
  }
}
// \/закрывающая функция
function popupClose(popupOpenelement, doUnlock = true) {
  if (unlock) {
    popupOpenelement.classList.remove("_open");
    if (doUnlock) {
      bodyUnlock();
    }
  }
}
// /\закрывающая функция

//блокировка скрола и убирание скачков страници
function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector(".shares").offsetWidth + "px";

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add("close");

  // блокировка двойных нажатий на открытие попапа
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
  // блокировка двойных нажатий на открытие попапа
}
//блокировка скрола и убирание скачков страници

//возвращение скрола через времмя
function bodyUnlock() {
  setTimeout(function () {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = "0px";
    }
    body.style.paddingRight = "0px";
    body.classList.remove("close");
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}
//возвращение скрола через времмя

// закрытие попапа по кнопке Esc
document.addEventListener("keydown", function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector("._open");
    popupClose(popupActive);
  }
});
// закрытие попапа по кнопке Esc

/*   \/   попапы  \/  */
