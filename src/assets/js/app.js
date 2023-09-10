import gsap from "gsap";
import Swiper,{Pagination,Navigation} from "swiper";
import { reviews } from "./data";
const bar = document.querySelector(".loading__bar--inner");
const counter_number = document.querySelector(".loading__counter--number");

// loading bar
let counter = 0;
let barInterval = setInterval(() => {
  bar.style.width = counter + "%";
  counter_number.innerText = counter + "%";
  counter++;

  if (counter === 101) {
    clearInterval(barInterval);
    gsap.to(".loading__bar", {
      duration: 1,
      rotate: "90deg",
      left: "1000%",
    });
    gsap.to(".loading__text,.loading__counter", {
      duration: 0.5,
      opacity: 0,
    });
    gsap.to(".loading__box", {
      duration: 1,
      height: "500px",
      borderRadius: "50%",
    });
    gsap.to(".loading__svg", {
      opacity: 1,
      duration: 10,
      rotate: "360deg",
    });
    gsap.to(".loading__box", {
      delay: 2,
      border: "none",
    });
    gsap.to(".loading", {
      delay: 2,
      duration: 2,
      zIndex: 1,
      background: "transparent",
      opacity: 0.5,
    });
    gsap.to(".loading__svg", {
      delay: 2,
      duration: 100,
      rotate: "360deg",
    });
  }
}, 20);

// swiper reviews js
// Swiper.use([Pagination,Navigation]);
// var swiper = new Swiper(".swiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   breakpoints: {
//     850: {
//       slidesPerView: 1,
//     },
//     1400: {
//       slidesPerView: 3,
//     },
//   },

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     type: "bullets"
//   },
  
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

const swiper_container = document.querySelector(".swiper-wrapper");


reviews.map((review) => {
  let template = `  <div class="swiper-slide"> <div class="review"> <svg></svg> <div class="review__card"> <div class="review__topborder"></div> <div class="review__text"> <span>${review.review.substring(
    0,
    1
  )}</span>${review.review.substring(1, review.review.length)} </div> <img src=${
    review.image
  } alt="" class="review__img"> <div class="review__profile"> <span>${
    review.position
  }</span> <span>${review.date}</span> </div> </div> </div> </div>
              `;
  swiper_container.innerHTML+=template;
});


// ${review.review.substring(1, review.review.length)}