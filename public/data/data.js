/* eslint-disable no-unused-vars */

// @ts-ignore
import ouyane from '../images/ouyane.png';

// import Chivoiz from '../images/Chivoiz.png';
// import gelöscht da Bild nicht existierte

import Christian from '../images/christian.png';

import drigo from '../images/drigo.png';

import handball from '../images/handball.png';
import food from '../images/food.png';
import dsz from '../images/dsz.png';
import moya from '../images/moya.png';
import Diaspo_moya from '../download/Diaspo_moya.pdf';
import chrisJakober from '../images/chrisJakober.jpg';
import nicola from '../images/nicola.jpeg';
import sophie from '../images/sophie.jpg';
import patrick from '../images/patrick.png';

export const list = [
  {
    id: 'featured',
    title: 'Featured',
  },
  {
    id: 'web',
    title: 'Web App',
  },
  {
    id: 'graphic design',
    title: 'Graphic design',
  },
  {
    id: 'video',
    title: 'Video editing',
  },
];

export const featuredPortfolio = [
  {
    id: 1,
    title: 'Vegas studio pro',
    img: ouyane,
  },
  {
    id: 2,
    title: 'Wordpress, Html, Css and JavaScript',
    img: handball,
  },
  {
    id: 3,
    title: 'Adobe indesign',
    img: dsz,
  },
];

export const webPortfolio = [
  {
    id: 1,
    title: 'Wordpress, Html, Css and JavaScript',
    img: handball,
  },
  {
    id: 2,
    title: 'React js, Node js and Css',
    img: food,
  },
];

export const videoPortfolio = [
  {
    id: 1,
    title: 'Vegas studio pro',
    video: 'https://www.youtube.com/watch?v=Xd55WInP5tM',
    img: ouyane,
  },
  {
    id: 2,
    title: 'Vegas pro and photoshop',
    video: 'https://www.youtube.com/watch?v=GSrgCpIpnNA',
    img: '',
  },
  {
    id: 3,
    title: 'Adobe premier and photoshop',
    video: 'https://www.youtube.com/watch?v=r9x1Dc1Lgnc',
    img: drigo,
  },
  {
    id: 4,
    title: 'vegas pro',
    video: 'https://www.youtube.com/watch?v=aBUtNJhu5_M',
    img: Christian,
  },
];

export const designPortfolio = [
  {
    id: 1,
    title: 'Adobe indesign',
    img: dsz,
  },
  {
    id: 2,
    title: 'Adobe indesign and Photoshop',
    img: moya,
  },
];

export const data = [
  {
    id: '1',
    icon: './assets/mobile.png',
    title: 'Web Design',
    desc: 'I was responsible for the design and development of a website for a sports association.. ',
    infos:
      'I was responsible for the design and development of a website for a sports association. First, I started by meeting with the company team to discuss their website goals and needs.  Then I proceeded to develop a visual model of the website using graphic design tools. my work on this website included design, development, optimization, integration of e-commerce features and testing. The goal was to create an attractive, user-friendly and functional website that would meet the needs of the company and its customers.',
    img: handball,
    link: 'https://play-handball.org/de/home-de/',
    music: 'https://play-handball.org/de/home-de/',
  },
  {
    id: '2',
    icon: './assets/globe.png',
    title: 'Video music',
    desc: 'The musical video in question is a visual work that accompanies a song, creating a complete multimedia experience.',
    infos:
      'The musical video in question is a visual work that accompanies a song, creating a complete multimedia experience. In this video, different visual elements are used to reinforce and amplify the emotional impact of music. Here is a summary of this work: The video begins with a captivating introduction that immediately catches the viewer’s attention. Striking images, perhaps magnificent landscapes or artistic plans, are presented in harmony with the first notes of the song. This creates an immersive atmosphere and arouses the curiosity of the public. In short, this musical video is an artistic work that combines music and visual to create an immersive multimedia experience. She uses images, characters, choreographies and creative transitions to amplify the emotional impact of the song and captivate the viewer throughout the viewing.',
    img: drigo,
    link: 'https://play-handball.org/de/',
    music: 'https://www.youtube.com/watch?v=r9x1Dc1Lgnc',
  },
  {
    id: '3',
    icon: './assets/writing.png',
    title: 'Graphics design',
    desc: 'I was tasked with creating a promotional flyer for an upcoming event. First, I met with the team or client to discuss their objectives.',
    infos:
      ' I was tasked with creating a promotional flyer for an upcoming event. First, I met with the team or client to discuss their objectives, the message to be conveyed and the essential information to be included in the flyer. Then I started by building a model of the flyer using graphic design software such as Adobe Photoshop and end on adobe indesign. I selected colors, fonts and images that matched the visual identity of the event or business. In summary, my work on this flyer included graphic design, content writing, selecting appropriate images and preparing the flyer for printing. The goal was to create an attractive, informative and eye-catching flyer that would attract the attention of the target audience and effectively convey the message of the event or promotion. ',
    img: moya,
    link: 'https://play-handball.org/de/',
    music: Diaspo_moya,
  },
];

export const testimonials = [
  {
    id: 1,
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Ngassa proved me wrong.',
    name: 'Nicola Scholl',
    designation: 'CEO',
    company: 'Play-handball.org',
    image: nicola,
  },
  {
    id: 2,
    testimonial:
      'Ngassa is a web developer who, apart from the web service he provides, also gives advice on other areas.',
    name: 'Christian Jakober',
    designation: 'CEO',
    company: 'Global music player',
    image: chrisJakober,
  },
  {
    id: 3,
    testimonial:
      "After Ngassa filmed and edited our video clip, our traffic increased by 60%. We can't thank him enough!",
    name: 'Sophie Arenhövel',
    designation: 'MUSICIAN',
    company: 'Global music player',
    // @ts-ignore
    image: sophie,
  },
  // {
  //   id: 4,
  //   testimonial:
  //     "I didn't think it was possible to create a site as beautiful as our product, but Ngassa proved me a contrary.",
  //   name: 'Patrick BANGYA',
  //   designation: 'CEO',
  //   company: 'diaspomoya.org',

  //   image: patrick,
  // },
];
