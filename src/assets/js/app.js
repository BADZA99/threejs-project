import gsap from "gsap";
import Swiper,{Pagination,Navigation} from "swiper";
import { reviews } from "./data";
import imagesLoaded from "imagesloaded";
import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";
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

    // imagesLoaded(document.querySelectorAll('img',()=>{

    // }))
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
    gsap.to(".header", {
      duration: 1,
      delay: 2,
      top: "0",
    });
    gsap.to(".socials", {
      duration: 1,
      delay: 2.5,
      bottom: "10rem",
    });
    gsap.to(".scrollDown", {
      duration: 1,
      delay: 3,
      bottom: "3rem",
    });

    // fix scrollbar issue
    class DisableScrollPlugin extends ScrollbarPlugin {
      static pluginName = "disableScroll";

      static defaultOptions = {
        direction: "",
      };

      transformDelta(delta) {
        if (this.options.direction) {
          delta[this.options.direction] = 0;
        }

        return { ...delta };
      }
    }
    // load the plugin
    Scrollbar.use(DisableScrollPlugin);
    setTimeout(() => {
      let options = {
        damping: 0.1,
        alwaysShowTracks: true,
        plugins: {
          disableScroll: {
            direction: "x",
          },
        },
      };
      let pageSmoothScroll = Scrollbar.init(document.body, options);
      pageSmoothScroll.track.xAxis.element.remove();
    }, 2000);
  }
}, 20);


class AnchorPlugin extends ScrollbarPlugin {
  static pluginName = "anchor";

  onHashChange = () => {
    this.jumpToHash(window.location.hash);
  };

  onClick = (event) => {
    const { target } = event;

    if (target.tagName !== "A") {
      return;
    }

    const hash = target.getAttribute("href");

    if (!hash || hash.charAt(0) !== "#") {
      return;
    }

    this.jumpToHash(hash);
  };

  jumpToHash = (hash) => {
    const { scrollbar } = this;

    if (!hash) {
      return;
    }

    // reset scrollTop
    scrollbar.containerEl.scrollTop = 0;

    scrollbar.scrollIntoView(document.querySelector(hash));
  };

  onInit() {
    this.jumpToHash(window.location.hash);

    window.addEventListener("hashchange", this.onHashChange);

    this.scrollbar.contentEl.addEventListener("click", this.onClick);
  }

  onDestory() {
    window.removeEventListener("hashchange", this.onHashChange);

    this.scrollbar.contentEl.removeEventListener("click", this.onClick);
  }
}

// usage
Scrollbar.use(AnchorPlugin);

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
  let template = ` <div class="swiper-slide"> <div class="review"> <svg></svg> <div class="review__card"> <div class="review__topborder"></div> <div class="review__text"> <span>${review.review.substring(0,1)}</span>${review.review.substring(1, review.review.length)} </div> <img src=${review.image} alt="" class="review__img"> <div class="review__profile"> <span>${review.position}</span> <span>${review.date}</span> </div> </div> </div> </div>`;
  swiper_container.innerHTML+=template;
});

// faq

const questions =[...document.querySelectorAll('.question')];

questions.map((question)=>{
  let q_text=question.querySelector('h3');
  q_text.addEventListener('click',()=>{
    questions.filter((q)=> q !== question ).map((q)=>q.classList.remove("open"));
    question.classList.toggle("open")
  })
}
)