const popup = document.querySelector(".popup");
const popupOpenButton = document.querySelector(".profile__heading-edit-button");
const popupCloseButton = document.querySelector(".popup__close-button");
const popupSubmitFormButton = document.querySelector(".popup__submit");
const popupForm = document.querySelector(".popup__form");

function popupClassToggle(event) {
  popup.classList.toggle("popup_opened");

  if (popup.classList.contains("popup_opened")) {
    const personName = document
      .querySelector(".profile__heading-title")
      .textContent.trimStart()
      .trimEnd();
    const personProfile = document
      .querySelector(".profile__heading-subtitle")
      .textContent.trimStart()
      .trimEnd();

    document.querySelector(".popup__input_type_name").value = personName;
    document.querySelector(".popup__input_type_activity").value = personProfile;
  }
}

const closeModalByClickToOverlay = function (event) {
  if (event.target == event.currentTarget) {
    popupClassToggle();
  }
};

function formSubmit(event) {
  event.preventDefault();

  document.querySelector(".profile__heading-title").textContent =
    document.querySelector(".popup__input_type_name").value;
  document.querySelector(".profile__heading-subtitle").textContent =
    document.querySelector(".popup__input_type_activity").value;

  popup.classList.toggle("popup_opened");
}

popup.addEventListener("click", closeModalByClickToOverlay);
popupOpenButton.addEventListener("click", popupClassToggle);
popupCloseButton.addEventListener("click", popupClassToggle);
popupForm.addEventListener("submit", formSubmit);
