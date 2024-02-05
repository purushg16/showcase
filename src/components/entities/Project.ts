export default interface Project {
  id: string;
  title: string;
  slug: string;
  url: string;
  git: string;
  duration: number;
  durationUnit: string;
  breif: string;
  description: string;
  image_url: string;
  tags: string[];
  platform: string[];
  designSystem: {
    typography: string[];
    color: string[];
  };
  screenshots: string[];
  screenshostDesc: string[];
}
