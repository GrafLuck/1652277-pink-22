const form = document.querySelector(".form");
const modalSubmit = document.querySelector(".modal--submit");
const modalError = document.querySelector(".modal--error");
const modalSubmitButton = document.querySelector(".modal--submit .button");
const modalErrorButton = document.querySelector(".modal--error .button");
const buttonForm = document.querySelector(".form__button");

buttonForm.addEventListener("click", function (evt) {
  if (form.checkValidity()) {
    modalSubmit.classList.remove("modal--close");
    modalSubmit.classList.add("modal--show");
  } else {
    modalError.classList.remove("modal--close");
    modalError.classList.add("modal--show");
  }
});

modalErrorButton.addEventListener("click", function (evt) {
  modalError.classList.add("modal--close");
  modalError.classList.remove("modal--show");
});

modalSubmitButton.addEventListener("click", function (evt) {
  modalSubmit.classList.add("modal--close");
  modalSubmit.classList.remove("modal--show");
});
