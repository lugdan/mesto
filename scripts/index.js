const popupPersonEdit = document.querySelector(".popup_person-edit");
const popupAddPlace = document.querySelector(".popup_add-place");
const popupBigImage = document.querySelector(".popup_card-image");

const buttonPopupPersonEditOpen = document.querySelector(
  ".profile__heading-edit-button"
);

const popupCloseButtonList = document.querySelectorAll(".popup__close-button");
const popupPersonEditForm = popupPersonEdit.querySelector(".popup__form");

const popupAddPlaceOpenButton = document.querySelector(".profile__button");

const profilePersonEditHeading = document.querySelector(
  ".profile__heading-title"
);
const profilePersonEditSubtitle = document.querySelector(
  ".profile__heading-subtitle"
);

const inputPersonNamePopup = document.querySelector(".popup__input_type_name");
const inputPersonActivityPopup = document.querySelector(
  ".popup__input_type_activity"
);

const placesCards = document.querySelector(".places");
const placesCardsTemplate = document.querySelector(".card-template");
const popupFormAddPlace = document.querySelector(".popup__form_add-place");

const inputPlaceNamePopup = document.querySelector(
  ".popup__input_type_place-name"
);
const inputPlaceImagePopup = document.querySelector(
  ".popup__input_type_place-img"
);

const popupBigImageMaimImage =
  popupBigImage.querySelector(".popup__main-image");

const popupBigImageMaimImageText = popupBigImage.querySelector(
  ".popup__main-image-name"
);

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
  const liItem = event.target.closest(".places__item");
  liItem.remove();
}

function editPopupPersonValues(event) {
  popupClassToggle(popupPersonEdit);

  if (popupPersonEdit.classList.contains("popup_opened")) {
    const personName = profilePersonEditHeading.textContent
      .trimStart()
      .trimEnd();
    const personProfile = profilePersonEditSubtitle.textContent
      .trimStart()
      .trimEnd();

    inputPersonNamePopup.value = personName;
    inputPersonActivityPopup.value = personProfile;
  }
}

function closePopup(event) {
  const closeButtonPopup = event.target.closest(".popup");
  popupClassToggle(closeButtonPopup);
}

function popupPlaceAdd(event) {
  popupClassToggle(popupAddPlace);
}

const closeModalByClickToOverlay = function (event) {
  if (event.target == event.currentTarget) {
    popupClassToggle(event.target);
  }
};

function popupPersonEditFormSubmit(event) {
  event.preventDefault();

  profilePersonEditHeading.textContent = inputPersonNamePopup.value;
  profilePersonEditSubtitle.textContent = inputPersonActivityPopup.value;
  popupClassToggle(popupPersonEdit);
}

function addPlacesFormSubmit(event) {
  event.preventDefault();
  const el = {};
  el.name = inputPlaceNamePopup.value;
  el.link = inputPlaceImagePopup.value;
  const nodeElement = placesCreateElByTemplate(el);
  placesCards.prepend(nodeElement);
  popupClassToggle(popupAddPlace);
  inputPlaceNamePopup.value = "";
  inputPlaceImagePopup.value = "";
}

function shownImagePopup(link, name) {
  popupClassToggle(popupBigImage);

  popupBigImageMaimImage.src = link;
  popupBigImageMaimImageText.textContent = name;
}

popupPersonEdit.addEventListener("click", closeModalByClickToOverlay);
buttonPopupPersonEditOpen.addEventListener("click", editPopupPersonValues);

popupCloseButtonList.forEach((el) => {
  el.addEventListener("click", closePopup);
});
popupPersonEditForm.addEventListener("submit", popupPersonEditFormSubmit);
popupFormAddPlace.addEventListener("submit", addPlacesFormSubmit);

popupAddPlace.addEventListener("click", closeModalByClickToOverlay);
popupAddPlaceOpenButton.addEventListener("click", popupPlaceAdd);

popupBigImage.addEventListener("click", closeModalByClickToOverlay);
