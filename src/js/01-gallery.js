// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector(".gallery")
const listItems = galleryItems.map(item => 
  `<li><a class="gallery__item" href=${item.original}><img src=${item.preview} class="gallery__image" data-source=${item.original} alt=${item.description}></a></li>`
).join("")
galleryList.insertAdjacentHTML("beforeend", listItems);
console.log(galleryItems);
var lightbox = new SimpleLightbox('.gallery a', { captions: true, captionsData: "alt", captionDelay: 250});
console.log(galleryItems);
