export default interface Work {
  id: string;
  date: string;
  title: string;
  slug: string;
  breif: string;
  description: string;
  note: string;
  tags: string[];
  platform: string[];

  url: string;
  logo: string;
  git: string;

  designSystem: {
    typography: string[];
    color: string[];
  };
  screenshots: string[];
  screenshostDesc: string[];
}
