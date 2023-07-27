const popup = document.querySelector(".popup_person-edit");
const popupAddPlace = document.querySelector(".popup_add-place");
const popupBigImage = document.querySelector(".card-image-popup");

const popupOpenButton = document.querySelector(".profile__heading-edit-button");
const popupCloseButton = document.querySelectorAll(".popup__close-button");
const popupSubmitFormButton = document.querySelector(".popup__submit");
const popupForm = document.querySelector(".popup__form");

const popupAddPlaceOpenButton = document.querySelector(".profile__button");

const placesCards = document.querySelector(".places");
const placesCardsTemplate = document.querySelector(".card-template");
const popupFormAddPlace = document.querySelector(".popup__form_add-place");

const popupBigImageCloseButton = document.querySelector(
  ".card-image-popup__close-button"
);

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const placesCreateElByTemplate = (obj) => {
  const el = placesCardsTemplate.content.cloneNode(true);
  const imgSrc = el.querySelector(".places__item-img");
  const cardHeading = el.querySelector(".places__item-box-title");

  imgSrc.src = obj.link;
  cardHeading.textContent = obj.name;

  el.querySelector(".places__item-box-like-button").addEventListener(
    "click",
    placesCardLikeButtonToggle
  );
  el.querySelector(".places__item-delete-img").addEventListener(
    "click",
    placesCardDelete
  );
  el.querySelector(".places__item-img").addEventListener("click", () =>
    shownImagePopup(obj.link, obj.name)
  );

  return el;
};

const render = () => {
  initialCards.forEach((el) => {
    const liElement = placesCreateElByTemplate(el);

    placesCards.append(liElement);
  });
};

render();

function popupClassToggle(el) {
  el.classList.toggle("popup_opened");
}

function placesCardLikeButtonToggle(event) {
  event.target.classList.toggle("places__item-box-like-button_active");
}
function placesCardDelete(event) {
  const liItem = event.target.parentNode;
  liItem.remove();
}

function popupPersonEdit(event) {
  popupClassToggle(popup);

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

function closePopup(event) {
  const closeButtonPopup = event.target.parentNode.parentNode.parentNode;
  popupClassToggle(closeButtonPopup);
}

function closeBigImagePopup() {
  popupBigImage.classList.toggle("card-image-popup_opened");
}

function popupPlaceAdd(event) {
  popupClassToggle(popupAddPlace);
}

const closeModalByClickToOverlay = function (event) {
  if (event.target == event.currentTarget) {
    popupClassToggle(event.target);
  }
};
const closeBigImageModalByClickToOverlay = function (event) {
  if (event.target == event.currentTarget) {
    closeBigImagePopup();
  }
};

function formSubmit(event) {
  event.preventDefault();

  document.querySelector(".profile__heading-title").textContent =
    document.querySelector(".popup__input_type_name").value;
  document.querySelector(".profile__heading-subtitle").textContent =
    document.querySelector(".popup__input_type_activity").value;
  popupClassToggle(popup);
}

function addPlacesFormSubmit(event) {
  event.preventDefault();
  const el = {};
  el.name = document.querySelector(".popup__input_type_place-name").value;
  el.link = document.querySelector(".popup__input_type_place-img").value;
  const nodeElement = placesCreateElByTemplate(el);
  placesCards.prepend(nodeElement);
  popupClassToggle(popupAddPlace);
}

function shownImagePopup(link, name) {
  popupBigImage.classList.toggle("card-image-popup_opened");

  popupBigImage.querySelector(".card-image-popup__main-image").src = link;
  popupBigImage.querySelector(
    ".card-image-popup__main-image-name"
  ).textContent = name;
}

popup.addEventListener("click", closeModalByClickToOverlay);
popupOpenButton.addEventListener("click", popupPersonEdit);

popupCloseButton.forEach((el) => {
  el.addEventListener("click", closePopup);
});
popupForm.addEventListener("submit", formSubmit);
popupFormAddPlace.addEventListener("submit", addPlacesFormSubmit);

popupAddPlace.addEventListener("click", closeModalByClickToOverlay);
popupAddPlaceOpenButton.addEventListener("click", popupPlaceAdd);

popupBigImageCloseButton.addEventListener("click", closeBigImagePopup);
popupBigImage.addEventListener("click", closeBigImageModalByClickToOverlay);
