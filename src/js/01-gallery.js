// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items'; 

// Change code below this line
console.log(galleryItems)

const makeGallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>
 </li>`
  )
  .join('');

makeGallery.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
