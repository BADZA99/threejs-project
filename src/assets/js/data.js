import image from '../images/front-end.jpg'

import bg1 from '../images/wallpapers/77.jpg'
import bg2 from '../images/wallpapers/185.jpg'
import bg3 from '../images/wallpapers/213.png'
import bg4 from '../images/wallpapers/10.jpg'
import bg5 from '../images/wallpapers/49.jpg'
import bg6 from '../images/wallpapers/0.jpg'
import bg7 from '../images/wallpapers/50.jpg'
import bg8 from '../images/wallpapers/161.jpg'
import bg9 from '../images/wallpapers/184.jpg'
import bg10 from '../images/wallpapers/183.jpg'

import shade1 from '../images/shadebg/me1.jpg';
import shade2 from '../images/shadebg/me2.jpg';
import shade3 from '../images/shadebg/galsen.jpg';
import shade4 from '../images/shadebg/me4.jpg';
import shade5 from '../images/shadebg/me6.jpg';


// fais un tableau de tous les bg 
let backgrounds = {
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
  bg7,
  bg8,
  bg9,
  bg10,
  shade1,
  shade2,
  shade3,
  shade4,
  shade5,
};

let reviews = [
  {
    position: " self-taught front end developer",
    image: image,
    review:
      "I've created many websites (see my github) thanks to this, I was able to acquire a considerable amount of self-taught practice."
  },
  {
    position: " freelance front end developer",
    image: image,
    review:
      "I had to develop an interface (ux/ui) for an application for a French rental company.",
  },
  {
    position: "developer front end",
    image: image,
    review:
      "I have a professional degree in software engineering from the Institut Supérieur d'Informatique (ISI) in Dakar.",
  },
  {
    position: " freelance front end developer",
    image: image,
    review:
      "I had to develop an interface (ux/ui) for an application for a French rental company.",
  },
  {
    position: "software engineering degree",
    image: image,
    review:
      "I have a professional degree in software engineering from the Institut Supérieur d'Informatique (ISI) in Dakar.",
  },
  {
    position: " self-taught front end developer",
    image: image,
    review:
      "I've created many websites (see my github) thanks to this, I was able to acquire a considerable amount of self-taught practice.",
  },
];
export default backgrounds;
export  {reviews};