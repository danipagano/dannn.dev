export type ResearchLink = { label: string; href: string };

export type ResearchItem = {
  title: string;
  meta?: string; // small line under title
  description: string;
  status?: string; // lil badge
  href?: string; // makes whole card a link (use for simple items)
  links?: ResearchLink[]; // explicit links rendered at the bottom of the card
  tags?: string[];
  feature?: boolean; // span the full width of the grid
};

export const RESEARCH_INTRO =
  "I'm interested in how minds make sense of the world, and in how we keep records of this experience, both in memory and digitally.";

export const RESEARCH: ResearchItem[] = [
  {
    title: "On LLMs & Theory of Mind",
    meta: "Undergraduate Thesis in Cognitive Science - Rutgers",
    description:
      "A literature review turned position piece, examining the debate over whether LLMs have Theory of Mind",
    // links: [{ label: "Read my draft (PDF)", href: "" }],
    // tags: ["cognitive science", "philosophy of mind", "LLMs"],
    feature: false,
  },
];
