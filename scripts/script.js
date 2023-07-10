const popup = document.querySelector(".popup");
const popupOpenButton = document.querySelector(
  ".profile__item-heading-edit-button"
);
const popupCloseButton = document.querySelector(".popup__close-button");
const popupSubmitFormButton = document.querySelector(".popup__submit");

function popupClassToggle(event) {
  popup.classList.toggle("popup_open");

  if (popup.classList.contains("popup_open")) {

    const personName = document.querySelector(
      ".profile__item-heading-title"
    ).innerHTML;
    const personProfile = document.querySelector(
      ".profile__item-heading-subtitle"
    ).innerHTML;
  
    document.querySelector(".popup__input_name").value = personName;
    document.querySelector(".popup__input_activity").value = personProfile;

  } 

  if (event.currentTarget == popupSubmitFormButton) {
    document.querySelector(
      ".profile__item-heading-title"
    ).innerHTML = document.querySelector(".popup__input_name").value;
 document.querySelector(
    ".profile__item-heading-subtitle"
    ).innerHTML = document.querySelector(".popup__input_activity").value;
  }
}

const closeModalByClickToOverlay = function (event) {

  if (event.target == event.currentTarget){
    popupClassToggle()
  }
  
}

popupOpenButton.addEventListener("click", popupClassToggle);
popupCloseButton.addEventListener("click", popupClassToggle);
popupSubmitFormButton.addEventListener("click", popupClassToggle);
popup.addEventListener("click", closeModalByClickToOverlay);