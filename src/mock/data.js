import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Marc Gotzens', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Marc Gotzens Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I am',
  name: 'Marc Gotzens',
  subtitle: 'Web developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'quadrada.jpg',
  paragraphOne:
    'I live in Spain and always have been passionate for technology. After I finished my bachelor degree in Telecomunications engineering I became really interested in programming. This year I was admited for the Ironhack Bootcamp where I could specialize as a Web Developer and master the whole MERN stack ',
  paragraphTwo:
    'As a front-end I really like working in React and Gatsby which allows well structured and dynamic single-page applications that loads very fast. Recently I started building projects with React Native.',
  paragraphThree:
    'As a back-end I recently developed projects with non-relational databases as MongoDB and I am amazed of the flexibility that allows. I am excited to develop my next projects using NextJS and Redux',
  resume: 'https://drive.google.com/file/d/1LYxBYt-5qylM2oCFwGMUGunQ6Y_6TP-T/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'payatthetable.jpg',
    title: 'Pay at the table',
    info:
      'Designed a solution for restaurants providing responsive,menu editing, ordering and payment gateway through stripe. Built two different repositories where client is deployed in netlify and server in heroku',
    info2: 'React, ExpressJS, MongoDB, Bcrypt, SaaS, Bulma.io.',
    url: 'https://pay-at-the-table.netlify.app',
    repo: 'https://github.com/Mgot12602/payatthetableclient', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hotelcostabella.jpg',
    title: 'Hotel Costabella',
    info:
      'Multi-language Wordpress website using a template several pluggins, integrated with the booking engine',
    info2: 'Wordpress, Html, Css',
    url: 'https://hotelcostabella.com',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'marcgotzens@hotmail.com',
  btn: 'Send me an email',
  email: 'marcgotzens@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/marc-gotzens/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Mgot12602',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
