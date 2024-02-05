import img from "../../assets/img1.png";
import img1 from "../../assets/img2.png";
import img2 from "../../assets/img3.png";
import img3 from "../../assets/img4.png";

export default {
  count: 2,
  results: {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem.",
    toolKit: [
      "ReactJs",
      "NodeJs",
      "Javascript",
      "Typescript",
      "MongoDB",
      "Multer",
      "Material UI",
      "Chakra UI",
    ],
    data: [
      {
        id: "1",
        title: "Urja",
        slug: "urja",
        url: "https://urja-thedyingstudio.netlify.app/",
        duration: 100,
        durationUnit: "days",
        breif: "Urja is an E-Commerce web application that runs on MERN Stack.",
        description:
          "Urja is an E-Commerce web application that runs on MERN Stack. Admin Panel, Online Payment, Cart and more have been incorporated in Urja. ",

        tags: ["MERN", "Javascript", "Github"],
        platform: ["Netlify", "render"],
        image_url:
          "https://urja-thedyingstudio.netlify.app/static/media/logo.b7237d76420d18270deb.png",
        screenshots: [img, img1, img2],
        screenshostDesc: [
          "Landing Page",
          "Top products browsing in homepage.",
          "Seperate Products List page",
          "Cart Page",
        ],
        git: "https://github.com/purushg16/boutique",
        designSystem: {
          typography: ["MackinacMed", "Poppins"],
          color: ["D2F5E0", "417570", "F8F6F3", "54B84C"],
        },
      },
      // {
      //   id: "2",
      //   title: "Lorem Ipsum.",
      //   url: "https://urja-thedyingstudio.netlify.app/",

      //   slug: "lorem-ipsum",
      //   duration: 3,
      //   durationUnit: "months",
      //   description:
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem.",
      //   platform: ["Netlify", "render"],
      //   tags: ["MongoDB", "VScode", "Github", "Netlify", "render"],
      //   image_url: "",
      //   screenshots: [img, img1, img2, img3],
      //   screenshostDesc: [
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,maxime.",
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,maxime.",
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,maxime.",
      //   ],
      //   git: "",
      //   designSystem: {
      //     typography: ["MackinacMed", "Poppins"],
      //     color: ["D2F5E0", "417570", "F8F6F3", "54B84C"],
      //   },
      // },
      // {
      //   id: "2",
      //   title: "Lorem Ipsum.",
      //   url: "https://urja-thedyingstudio.netlify.app/",

      //   slug: "lorem-ipsum",
      //   duration: 3,
      //   durationUnit: "months",
      //   description:
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem.",
      //   platform: ["Netlify", "render"],
      //   tags: ["MongoDB", "VScode", "Github", "Netlify", "render"],
      //   image_url: "",
      //   screenshots: [img, img1, img2],
      //   screenshostDesc: [
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,maxime.",
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,maxime.",
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,maxime.",
      //   ],
      //   git: "",
      //   designSystem: {
      //     typography: ["MackinacMed", "Poppins"],
      //     color: ["D2F5E0", "417570", "F8F6F3", "54B84C"],
      //   },
      // },
    ],
  },
};
