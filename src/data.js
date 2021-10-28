import clay from "./images/clay.gif";
import movie from "./images/movie.gif";
import path from "./images/path.gif";
import iptv from "./images/iptv.gif";
import peka from "./images/peka.gif";

export const portfolio = [
  {
    id: 1,
    title: "AntonioKnezovic.dev",
    info: "Portfolio Website",
    desc: "I made this personal website with react just to have some kind of terrain to showcase all of my work. Sometimes the more simple is better.",
  },
  {
    id: 2,
    title: "Clay Pottery Shop",
    img: clay,
    info: "Webshop App",
    desc: "This is my latest work in which I created a webshop app with an admin area for my client. Currently, the payment mode is still in test mode. I used node, react and mongodb to connect all the dots. It is very well secured and I used STRIPE for payment options.",
  },
  {
    id: 3,
    title: "Review a Movie",
    info: "Movie Review Web App",
    img: movie,
    desc: "I am huge fan of movies and so I created the app with third-party API. In addition to the ability to search for your movie, you can register and comment on your favourite movie.",
  },
  {
    id: 4,
    title: "Path 2 Nowhere",
    img: path,
    info: "Personal Blog App",
    desc: "This is my personal blog where I comment on the latest news in the world and in general. I decided to do something like this so that people would have different views on the current situation.",
  },
  {
    id: 5,
    title: "Glinene Peke",
    img: peka,
    info: "Art Craft Website",
    desc: "This react app is made for my client who was not happy with his old website. With clear instructions and pictures, he wanted something like this. With basic animations and little bit of javascript the website runs smoothly.",
  },
  {
    id: 6,
    title: "Free IPTV Daily",
    img: iptv,
    info: "IPTV Project",
    desc: "This app is currently in Phase 1. Now I am creating an admin area where I will upload playlists for IPTV just for my viewers. My plan now is to expand that, because a lot of people are sending requests for it. Since I will have an administrative area just for myself, I will give everyone the opportunity to upload their own playlists.",
  },
];
