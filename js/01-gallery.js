import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const createImageGallery = () => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `     
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `;
    })
    .join("");
};

const onImageClick = (event) => {
  event.preventDefault();

  if (event.target.tagName !== "IMG") return;

  const originalImg = event.target.dataset.source;
  const modalImg = basicLightbox.create(
    `<img width="1400" height="900" src="${originalImg}">`
  );
  modalImg.show();

  window.addEventListener("keydown", closeModal);

  function closeModal(event) {
    if (event.code === "Escape") {
      modalImg.close();
      window.removeEventListener("keydown", closeModal);
    }
  }
};

gallery.insertAdjacentHTML("beforeend", createImageGallery());

gallery.addEventListener("click", onImageClick);
