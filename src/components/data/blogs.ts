import { Blog } from "../entities/Blog";
import reactLibrary from "../../assets/images/blogThumnails/Right React Library.png";

export default [
  {
    id: "b01",
    createdAt: new Date(2024, 2, 12),
    title:
      "User Interface Magic: Choosing the Right React Library for Your Project.",
    desc: `In the ever-evolving landscape of web development, 
          React has established itself as a powerhouse for building dynamic 
          and interactive user interfaces. To streamline the development process 
          and enhance the visual appeal of your React applications, leveraging UI 
          libraries becomes crucial. In this blog post, we'll explore some of the 
          best free UI libraries for React components, highlighting their pros and 
          cons along with visual insights.`,
    imgUrls: [
      "https://miro.medium.com/v2/resize:fit:900/1*fEyeESs-HxVR7Zlr-fdlvw.png",
      "https://miro.medium.com/v2/resize:fit:600/1*DN33TEX1FASM3JvnnRGBvA.png",
      "https://s3-alpha.figma.com/hub/file/2764577929/4b6e189f-a0ea-4fbb-8e3e-f5241451f63d-cover.png",
    ],
    thumbnail: reactLibrary,
    points: [
      {
        slug: "Material-UI",
        heading: "Pros",
        points: [
          "Extensive documentation and community support.",
          "Consistent design based on Google's Material Design.",
          "Customizable components with theming options.",
        ],
      },
      {
        slug: "Material-UI",
        heading: "Cons",
        points: [
          "Can lead to large bundle sizes if not optimized.",
          "Customization might require a learning curve.",
        ],
      },
      {
        slug: "Ant Design",
        heading: "Pros",
        points: [
          "A comprehensive set of well-designed components.",
          "Good support for creating enterprise-level applications.",
          "Consistent updates and maintenance.",
        ],
      },

      {
        slug: "Ant Design",
        heading: "Cons",
        points: [
          "Integration with existing projects can be challenging.",
          "Heavy reliance on global styles may lead to conflicts.",
        ],
      },

      {
        slug: "Semantic UI React",
        heading: "Pros",
        points: [
          "Intuitive syntax and class names.",
          "Theming and customization are straightforward.",
          "Responsive design out of the box.",
        ],
      },

      {
        slug: "Chakra UI",
        heading: "Cons",
        points: [
          "Smaller community compared to others.",
          "Limited number of components compared to larger libraries.",
        ],
      },

      {
        slug: "Chakra UI",
        heading: "Props",
        points: [
          "Emphasis on accessibility and developer experience.",
          "Consistent and easy-to-use API.",
          "Lightweight and performant.",
        ],
      },

      {
        slug: "Semantic UI React",
        heading: "Cons",
        points: [
          "Smaller component library compared to more established options.",
          "Theming might not be as robust as other libraries.",
        ],
      },
    ],
    imgCredits: ["Medium", "Medium", "Figma"],
    subtitles: ["Material-UI", "Ant Design", "Semantic UI React", "Chakra UI"],
    introduction: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry",
    ],
    conclusion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    articles: [
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type 
      specimen book. It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essentially unchanged. It was popularised in 
      the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
      and more recently with desktop publishing software like Aldus PageMaker including 
      versions of Lorem Ipsum.
      `,
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type 
      specimen book. It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essentially unchanged. It was popularised in 
      the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
      and more recently with desktop publishing software like Aldus PageMaker including 
      versions of Lorem Ipsum.
      `,
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type 
      specimen book. It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essentially unchanged. It was popularised in 
      the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
      and more recently with desktop publishing software like Aldus PageMaker including 
      versions of Lorem Ipsum.
      `,
    ],
  },
] as Blog[];
