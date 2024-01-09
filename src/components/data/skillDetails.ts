import {
  IoLogoGithub,
  IoLogoNodejs,
  IoLogoPython,
  IoLogoReact,
} from "react-icons/io5";
import { SiFlutter, SiMongodb, SiTypescript } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

export default {
  front: {
    title: "frontend_",
    desc: "As a Frontend Developer, I specialize in building responsive and dynamic user interfaces using React, TypeScript, and JavaScript. My expertise lies in crafting efficient and maintainable code, ensuring seamless user experiences across various platforms.",
    icons: [IoLogoReact, SiTypescript, TbBrandJavascript],
  },

  back: {
    title: "backend_",
    desc: "As a Full Stack Developer, I leverage the power of Node.js and Express to build scalable and performant server-side applications. Proficient in MongoDB, I design dynamic and efficient databases. My collaborative approach is reflected in my active contributions to open-source projects on GitHub.",
    icons: [IoLogoNodejs, IoLogoGithub, SiMongodb],
  },
  others: {
    title: "Others_",
    desc: "As other, I specialize in creating cross-platform mobile applications with Flutter, delivering smooth and visually appealing user interfaces. Proficient in Python, I develop robust backend solutions, leveraging its versatility for web applications and data processing tasks.",
    icons: [IoLogoPython, SiFlutter],
  },
};
