// /* форма отправки сообщения на почту */
("use strict");

function start() {
  const popupOpenForm = document.querySelector("._popup-js");
  if (popupOpenForm.classList.contains("_open")) {
    const form = document.getElementById("form_popup");
    form.addEventListener("submit", formSending);
    console.log("gagagagagagag");
    async function formSending(e) {
      console.log("ffffffff");

      e.preventDefault(); //отключаем стандартное действие браузера"отправку формы по клике на кнопку"
      console.log("нажатие кнопки");

      let error = formValidate(form); //обьявляем переменную в нее запишем результат работы функции

      let formData = new FormData(form); //получаем значения из полей формы
      formData.append("image", formImage.files[0]); //добавляем изображение

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
      let formReq = document.querySelectorAll("._requz"); //получаем поля со звездочкой
      console.log(formReq);

      for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);
        console.log(input);

        if (input.classList.contains("_email")) {
          //если неправильно заполненно проле, выбьет ошибку
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
      //дает инпутам клас в зависимости о результата роботы функции "formValidate"
      input.parentElement.classList.add("_error");
      input.classList.add("_error");
    }
    function formRemoveError(input) {
      //удаляет инпутам клас в зависимости результатов работы функции "formValidate"
      input.parentElement.classList.remove("_error");
      input.classList.remove("_error");
    }
    function emailTest(input) {
      //функция проверки ввода емейла
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    // \/ работаем с прикрепленным изображением
    //

    const formImage = document.getElementById("formImage"); // получаем инпут
    const formPreview = document.getElementById("formPreview"); //получаем див для превью

    formImage.addEventListener("change", () => {
      //слушаем изменнения в инпуте file
      uploadFile(formImage.files[0]);
    });

    function uploadFile(file) {
      if (!["image/jpeg", "image/png", "imsge/gif"].includes(file.type)) {
        //проверяем тип файла
        const curentPopup = "imageIsAllowed";
        popupOpen(curentPopup);
        formImage.value = "";
        return;
      }

      if (file.size > 2 * 1024 * 1024) {
        //проверяем размер файла
        const curentPopup = "fileMore";
        popupOpen(curentPopup);
        return;
      }

      // выводим изображение
      let reader = new FileReader();
      reader.onload = function (e) {
        formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
      };
      reader.onerror = function (e) {
        const curentPopup = "imageError";
        popupOpen(curentPopup);
      };
      reader.readAsDataURL(file);
    }
    //проверяем размер файла  }
    //
    //  /\работаем с прикрепленным изображением
  }
}
