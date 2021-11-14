import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryBoxRef = document.querySelector(".gallery");
console.log(galleryBoxRef);

const renderImage = ({ preview, original, description }) => {
  return `<li>
  <a class="gallery__item" href="${original}">
    <img class="gallery__image"
    src="${preview}" 
    alt="${description}" />
  </a>
</li> `;
};

const galleryElements = galleryItems.map(renderImage).join(" ");
galleryBoxRef.insertAdjacentHTML("afterbegin", galleryElements);

const getUrlByClickOnGalleryBoxRef = function (element) {
  element.preventDefault();

  new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });
};

galleryBoxRef.addEventListener("click", getUrlByClickOnGalleryBoxRef);
