import img from "../../../dist/assets/bf-d copy.png";
import img1 from "../../../dist/assets/bf-f copy.png";
import img2 from "../../../dist/assets/bf-h copy.png";
import img3 from "../../../dist/assets/bf-p copy.png";

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
        title: "Urja - The Dying Studio.",
        slug: "urja-the-dying-studio",
        url: "https://urja-thedyingstudio.netlify.app/",
        duration: 100,
        durationUnit: "days",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem.",
        language: ["React", "Node", "Javascript"],
        tools: ["MongoDB", "VScode", "Github"],
        platform: ["Netlify", "render"],
        image_url:
          "https://urja-thedyingstudio.netlify.app/static/media/logo.b7237d76420d18270deb.png",
        screenshots: [img, img1, img2, img3],
        git: "https://github.com/purushg16/boutique",
        designSystem: {
          typography: ["MackinacMed", "Poppins"],
          color: ["D2F5E0", "417570", "F8F6F3", "54B84C"],
        },
      },
      {
        id: "2",
        title: "Lorem Ipsum.",
        url: "https://urja-thedyingstudio.netlify.app/",

        slug: "lorem-ipsum",
        duration: 3,
        durationUnit: "months",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem.",
        language: [],
        platform: ["Netlify", "render"],
        tools: ["MongoDB", "VScode", "Github", "Netlify", "render"],
        image_url: "",
        screenshots: [img, img1, img2, img3],

        git: "",
        designSystem: {
          typography: ["MackinacMed", "Poppins"],
          color: ["D2F5E0", "417570", "F8F6F3", "54B84C"],
        },
      },
    ],
  },
};
