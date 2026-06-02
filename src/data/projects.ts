export type ProjectCard = {
  title: string;
  description: string;
  href: string;
  tags?: string[];
};

export const PROJECTS: ProjectCard[] = [
  {
    title: "New Brunswick NJ Music Archive",
    description: "Digital exhibit of New Brunswick's DIY music scene using RUcore metadata + Rutgers-hosted images",
    href: "https://github.com/danipagano/nb-music-archive",
    tags: ["R"],
  },

  {
    title: "RGB to YcBr Converter",
    description: "CLI tool that compares a purely Python implementation with a C kernel exposed to Python via ctypes, for converting JPEG images from RGB to YCbCr color space.",
    href: "https://github.com/danipagano/rgb-to-ycbr-converter",
    tags: ["C", "Python"],
  },

  {
    title: "Digital Collections Monitor",
    description: "Python tool to monitor the uptime of major digital collections & repositories",
    href: "https://github.com/danipagano/digital-collections-monitor",
    tags: ["Python"],
  },

  {
    title: "404 Page Finder",
    description: "Flask web app that returns the 404 error pages of any website",
    href: "https://github.com/danipagano/404-page-fetcher",
    tags: ["Python"],
  }

];