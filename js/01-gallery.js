import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryBoxRef = document.querySelector(".gallery");
console.log(galleryBoxRef);

const renderImage = ({ preview, original, description }) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image" 
      src="${preview}"
      data-source="${original}"
      alt="${description}" 
    />
  </a>
</div> `;
};

const galleryElements = galleryItems.map(renderImage).join(" ");
galleryBoxRef.insertAdjacentHTML("afterbegin", galleryElements);

const getUrlByClickOnGalleryBoxRef = function (element) {
  element.preventDefault();

  const originalSrcImgRef = element.target.getAttribute("data-source");

  //?----- LIGHTBOX -----
  if (element.target.nodeName === "IMG") {
    const openModal = basicLightbox.create(`
    <img src="${originalSrcImgRef}">
`);
    openModal.show();
  }
  //?----- LIGHTBOX -----
};

galleryBoxRef.addEventListener("click", getUrlByClickOnGalleryBoxRef);
