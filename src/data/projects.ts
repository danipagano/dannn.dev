export type ProjectCard = {
  title: string;
  description: string;
  href: string;
  tags?: string[];
};

export const PROJECTS: ProjectCard[] = [
  {
    title: "404 Page Finder",
    description: "fetches & displays 404 error pages of given URLs",
    href: "https://github.com/danipagano/404-page-fetcher",
    tags: ["python", "flask"],
  },
  {
    title: "RGB to YcBr Converter",
    description: "compares a purely Python implementation with a C kernel exposed to Python via ctypes for converting JPEG images from RGB to YCbCr color space.",
    href: "https://github.com/danipagano/rgb-to-ycbr-converter",
    tags: ["C", "python"],
  },
  {
    title: "Digital Collections Monitor",
    description: "tool to monitor uptime of major digital collections",
    href: "https://github.com/danipagano/digital-collections-monitor",
    tags: ["python"],
  }
  // more...
];