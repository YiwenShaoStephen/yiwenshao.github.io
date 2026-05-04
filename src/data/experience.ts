export type ExperienceItem = {
  role: string;
  org: string;
  orgHref?: string;
  location?: string;
  period: string;
  advisor?: string;
  advisorLinks?: { name: string; href: string }[];
  description?: string;
  bullets?: string[];
  logo: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Founding Research Scientist",
    org: "Nuance Labs",
    orgHref: "https://www.nuancelabs.ai/",
    period: "2026.04 — Present",
    description:
      "Building full-duplex multimodal LLMs.",
    logo: "images/nuancelabs-logo.png",
  },
  {
    role: "Senior Researcher",
    org: "Tencent AI Lab & Hunyuan",
    orgHref: "https://hunyuan.tencent.com/",
    location: "Bellevue",
    period: "2024.09 — 2026.04",
    advisorLinks: [
      {
        name: "Dong Yu",
        href: "https://scholar.google.com/citations?user=tMY31_gAAAAJ",
      },
    ],
    bullets: [
      "<strong>Hunyuan Speech 3.0</strong>: Lead audio encoder pretraining; contributor on post-training (SFT, RL).",
      '<strong>AI Lab Frontier Exploration</strong>: Lead speech &amp; audio understanding for the native MLLM; founded <a class="ecosystem-badge" href="https://github.com/AudenAI/Auden"><img src="images/auden-logo.png" alt="" /><span>Auden</span></a>.',
      "<strong>Hunyuan Speech 1.0</strong>: Tencent's first LLM-ASR; 0&rarr;1 launch in <a href=\"https://yuanbao.tencent.com/\">Yuanbao</a>. Main ASR contributor.",
    ],
    logo: "images/tencent-logo.png",
  },
  {
    role: "Research Intern",
    org: "Tencent AI Lab",
    orgHref: "https://ailab.tencent.com/ailab/en/index/",
    location: "Bellevue",
    period: "2021 — 2024 (multiple terms)",
    advisor: "Shi-Xiong Zhang, Dong Yu",
    advisorLinks: [
      {
        name: "Shi-Xiong Zhang",
        href: "https://scholar.google.com/citations?user=4nGncN4AAAAJ&hl=en&oi=ao",
      },
      {
        name: "Dong Yu",
        href: "https://scholar.google.com/citations?user=tMY31_gAAAAJ",
      },
    ],
    description:
      "Developed audio-visual models for multi-channel multi-speaker speech recognition.",
    logo: "images/tencent-logo.png",
  },
];

export const education: ExperienceItem[] = [
  {
    role: "M.S. + Ph.D.",
    org: "CLSP, Johns Hopkins University",
    orgHref: "https://www.clsp.jhu.edu/",
    period: "2017 — 2024",
    advisor: "Daniel Povey, Sanjeev Khudanpur",
    advisorLinks: [
      { name: "Daniel Povey", href: "https://danielpovey.com/" },
      {
        name: "Sanjeev Khudanpur",
        href: "https://www.clsp.jhu.edu/people/sanjeev-khudanpur/",
      },
    ],
    bullets: [
      "<strong>Thesis</strong>: Spatial features for multi-channel multi-speaker ASR.",
      "<strong>Robustness</strong>: Adversarial attacks &amp; defenses for speech recognition.",
      '<strong>Open-source ASR</strong>: Contributor to <a href="https://github.com/kaldi-asr/kaldi">Kaldi</a> and <a href="https://github.com/freewym/espresso">Espresso</a>; creator of <a href="https://github.com/YiwenShaoStephen/pychain">PyChain</a> (LF-MMI in PyTorch).',
    ],
    logo: "images/jhu.png",
  },
  {
    role: "B.Eng., Electronic Engineering",
    org: "Southeast University",
    orgHref: "https://www.seu.edu.cn/english/",
    period: "2013 — 2017",
    description: "Ranked 1/30 in major.",
    logo: "images/seu-logo.png",
  },
];
