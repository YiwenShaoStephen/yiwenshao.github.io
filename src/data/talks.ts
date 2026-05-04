export type TalkLink = {
  kind: "youtube" | "slides" | "paper";
  href: string;
};

export type Talk = {
  title: string;
  venue: string;
  venueHref?: string;
  date: string;
  links?: TalkLink[];
};

export const talks: Talk[] = [
  {
    title: "Auden: From Audio Encoders to LALMs",
    venue: "Conversational AI Reading Group, Mila",
    venueHref: "https://poonehmousavi.github.io/rg.html",
    date: "2026-03",
    links: [
      { kind: "youtube", href: "https://youtu.be/BJ3L0Kmz7Jw" },
      {
        kind: "slides",
        href: "https://poonehmousavi.github.io/assets/slides/Yiwen_Shao_talk.pdf",
      },
    ],
  },
  {
    title: "RIR-SF: Spatial Features for Multi-Channel Multi-Speaker ASR",
    venue: "JHU CLSP Seminar",
    venueHref: "https://www.clsp.jhu.edu/events/categories/seminar/",
    date: "2023-12",
    links: [
      { kind: "paper", href: "https://arxiv.org/pdf/2311.00146" },
      { kind: "youtube", href: "https://www.youtube.com/watch?v=Q6eWOg42UBg" },
    ],
  },
];
