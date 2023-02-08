const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// ++++++++++++++++++ ВАРИАНТ 1  +++++++++++++++++++++++++
const galleryImages = document.querySelector(".gallery");

const makeGalleryMarkup = (image) => {
  const { url, alt } = image;
  return `<li class = "gallery__pic"><img class = "pic" src ="${url}" alt = "${alt}"></li>`;
};

const makeGalleryImages = images.map(makeGalleryMarkup).join(" ");

galleryImages.insertAdjacentHTML("beforeend", makeGalleryImages);

console.log(makeGalleryImages);

// ++++++++++++++++ ВАРИАНТ 2  +++++++++++++++++++++++
// const galleryImages = document.querySelector(".gallery");
// console.log(galleryImages);
// console.log(galleryImages.style);
// galleryImages.style.display = "flex";
// galleryImages.style.gap = "40px";
// galleryImages.style.justifyContent = "space-between";
// galleryImages.style.listStyle = "none";
// console.log(galleryImages.style);

// const galleryPicCatEl = document.createElement("li");
// galleryPicCatEl.classList.add("gallery__pic");
// const imgCatEl = document.createElement("img");
// imgCatEl.src =
//   "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
// imgCatEl.alt = "White and Black Long Fur Cat";
// // console.log(imgCatEl);
// imgCatEl.width = 600;
// imgCatEl.height = 333;

// galleryPicCatEl.appendChild(imgCatEl);
// console.log(galleryPicCatEl); // <li> <img> </li>

// const galleryPicFishEl = document.createElement("li");
// galleryPicFishEl.classList.add("gallery__pic");

// const imgFishEl = document.createElement("img");
// imgFishEl.src =
//   "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
// imgFishEl.alt = "Orange and White Koi Fish Near Yellow Koi Fish";
// // console.log(imgFishEl);
// imgFishEl.width = 500;

// galleryPicFishEl.appendChild(imgFishEl);
// console.log(galleryPicFishEl); // <li> <img> </li>

// const galleryPicHorsesEl = document.createElement("li");
// galleryPicHorsesEl.classList.add("gallery__pic");

// const imgHorsesEl = document.createElement("img");
// imgHorsesEl.src =
//   "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
// imgHorsesEl.alt = "Group of Horses Running";
// // console.log(imgHorsesEl);
// imgHorsesEl.width = 500;

// galleryPicHorsesEl.appendChild(imgHorsesEl);
// console.log(galleryPicHorsesEl); // <li> <img> </li>

// galleryImages.append(galleryPicCatEl, galleryPicFishEl, galleryPicHorsesEl);
// console.log(galleryImages);

// const gallery__picEl = document.querySelector(".gallery__pic");
// console.log(gallery__picEl);

// ++++++++++++++++++ ВАРИАНТ 3  +++++++++++++++++++++++++
// const galleryImages = document.querySelector(".gallery");
// console.log(galleryImages);

// galleryImages.insertAdjacentHTML(
//   "afterbegin",
//   `<li class = "gallery__pic"><img class = "pic" src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt = "White and Black Long Fur Cat"></li>
//   <li class = "gallery__pic"><img class = "pic" src = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt = "Orange and White Koi Fish Near Yellow Koi Fish"></li>
//   <li class = "gallery__pic"><img class = "pic" src = 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt = "Group of Horses Running"></li>`
// );
