export const site = {
  name: "Yiwen Shao",
  title: "Yiwen Shao — AI Researcher",
  description:
    "Founding Research Scientist at Nuance Labs, building full-duplex multimodal LLMs. Founder of Auden. Previously Audio Understanding Lead at Tencent HY & AI Lab, working on audio representation learning and large audio-language models.",
  role: "Founding Research Scientist",
  affiliation: {
    name: "Nuance Labs",
    href: "https://www.nuancelabs.ai/",
  },
  topics: [
    "Speech & Audio",
    "Large Audio-Language Models",
    "Representation Learning",
  ],
  social: [
    { kind: "email", label: "yshao18@jhu.edu", href: "mailto:yshao18@jhu.edu" },
    {
      kind: "scholar",
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=CX2Eo2MAAAAJ&hl=en&oi=ao",
    },
    { kind: "github", label: "GitHub", href: "https://github.com/YiwenShaoStephen" },
    {
      kind: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yiwen-shao-a4642710a/",
    },
  ],
} as const;

export type SocialKind = (typeof site.social)[number]["kind"];
