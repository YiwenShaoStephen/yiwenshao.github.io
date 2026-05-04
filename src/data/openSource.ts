export type OpenSourceTool = {
  name: string;
  href: string;
  hf?: string;
  years: string;
  role: string;
  blurb: string;
  starsRepo?: string;
};

export const openSource: OpenSourceTool[] = [
  {
    name: "Auden",
    href: "https://github.com/AudenAI/Auden",
    hf: "https://huggingface.co/AudenAI",
    years: "2025",
    role: "Founder & Lead Developer",
    blurb:
      "A comprehensive toolkit for audio foundation models — growing into an open-source community.",
    starsRepo: "AudenAI/Auden",
  },
  {
    name: "PyChain",
    href: "https://github.com/YiwenShaoStephen/pychain",
    years: "2020",
    role: "Creator",
    blurb:
      "PyTorch implementation of lattice-free MMI for end-to-end ASR with fully parallelized CUDA kernels.",
    starsRepo: "YiwenShaoStephen/pychain",
  },
  {
    name: "IBM Adversarial Robustness Toolbox",
    href: "https://github.com/Trusted-AI/adversarial-robustness-toolbox",
    years: "2021",
    role: "Contributor (ASR modules)",
    blurb: "Library for adversarial machine learning.",
    starsRepo: "Trusted-AI/adversarial-robustness-toolbox",
  },
  {
    name: "Espresso",
    href: "https://github.com/freewym/espresso",
    years: "2019",
    role: "Contributor",
    blurb: "End-to-end neural speech recognition toolkit built on Fairseq.",
    starsRepo: "freewym/espresso",
  },
  {
    name: "Kaldi",
    href: "https://github.com/kaldi-asr/kaldi",
    years: "2017",
    role: "Contributor",
    blurb: "Speech recognition toolkit with extensive training recipes.",
    starsRepo: "kaldi-asr/kaldi",
  },
];
