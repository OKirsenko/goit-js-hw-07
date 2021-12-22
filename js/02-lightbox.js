import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const createImageGallery = () => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
      `;
    })
    .join("");
};

gallery.insertAdjacentHTML("beforeend", createImageGallery());

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: "250ms",
  captionsData: "alt",
});
lightbox.close();
