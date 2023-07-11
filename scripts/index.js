const popup = document.querySelector(".popup");
const popupOpenButton = document.querySelector(
  ".profile__item-heading-edit-button"
);
const popupCloseButton = document.querySelector(".popup__close-button");
const popupSubmitFormButton = document.querySelector(".popup__submit");

function popupClassToggle(event) {
  popup.classList.toggle("popup_openeded");

  if (popup.classList.contains("popup_openeded")) {
    const personName = document.querySelector(
      ".profile__item-heading-title"
    ).textContent;
    const personProfile = document.querySelector(
      ".profile__item-heading-subtitle"
    ).textContent;

    document.querySelector(".popup__input_name").value = personName;
    document.querySelector(".popup__input_activity").value = personProfile;
  }

  if (event.currentTarget == popupSubmitFormButton) {
    document.querySelector(".profile__item-heading-title").textContent =
      document.querySelector(".popup__input_name").value;
    document.querySelector(".profile__item-heading-subtitle").textContent =
      document.querySelector(".popup__input_activity").value;
  }
}

const closeModalByClickToOverlay = function (event) {
  if (event.target == event.currentTarget) {
    popupClassToggle();
  }
};

popupOpenButton.addEventListener("click", popupClassToggle);
popupCloseButton.addEventListener("click", popupClassToggle);
popupSubmitFormButton.addEventListener("click", popupClassToggle);
popup.addEventListener("click", closeModalByClickToOverlay);
