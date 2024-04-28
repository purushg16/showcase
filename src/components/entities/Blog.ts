import BlogPoints from "./BlogPoints";

export interface Blog {
  id: string;
  title: string;
  thumbnail: string;
  points: BlogPoints[];
  createdAt: Date;
  introduction: string[];
  conclusion: string;
  desc: string;
  imgUrls: string[];
  imgCredits: string[];
  subtitles: string[];
  articles: string[];
}
