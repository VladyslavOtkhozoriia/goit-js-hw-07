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

let imageView = new SimpleLightbox(".gallery a", {
  animationSpeed: 500,
  fadeSpeed: 500,
  captions: true,
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

imageView.on(() => {
  imageView.next();
});
