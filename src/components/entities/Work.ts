export default interface Work {
  id: string;
  title: string;
  slug: string;
  url: string;
  git: string;
  duration: number;
  durationUnit: string;
  description: string;
  image_url: string;
  language: string[];
  tools: string[];
  platform: string[];
}
