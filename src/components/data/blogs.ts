import { Blog } from "../entities/Blog";

export default [
  {
    id: "b01",
    createdAt: new Date(2024, 2, 12),
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgUrls: [
      "https://miro.medium.com/v2/resize:fit:900/1*fEyeESs-HxVR7Zlr-fdlvw.png",
      "https://miro.medium.com/v2/resize:fit:600/1*DN33TEX1FASM3JvnnRGBvA.png",
      "https://s3-alpha.figma.com/hub/file/2764577929/4b6e189f-a0ea-4fbb-8e3e-f5241451f63d-cover.png",
    ],
    imgCredits: ["Medium", "Medium", "Figma"],
    subtitles: ["Lorem Ipsum ", "Lorem Ipsum", "Lorem Ipsum "],
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
