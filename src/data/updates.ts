export type UpdateLink = {
  kind: "paper" | "github" | "hf" | "youtube" | "slides";
  href: string;
};

/** Event category — drives the small icon prefix on each news line. */
export type UpdateKind = "paper" | "talk" | "oss" | "experience";

export type UpdateEntry = {
  date: string;
  body: string;
  kind: UpdateKind;
  /** Optional override for the leftmost kind icon (e.g. company logo for a job-change entry). */
  iconSrc?: string;
  refs?: UpdateLink[][];
};

export const updates: UpdateEntry[] = [
  {
    date: "2026-04",
    kind: "experience",
    body: '<a class="ecosystem-badge mono" href="https://www.nuancelabs.ai/"><img src="images/nuancelabs-icon.png" alt="" /><span>Nuance</span></a> Joined <a href="https://www.nuancelabs.ai/">Nuance Labs</a> as Founding Research Scientist, building full-duplex multimodal LLMs.',
  },
  {
    date: "2026-04",
    kind: "paper",
    body: '<a class="venue-badge" href="https://icml.cc/Conferences/2026">ICML 2026</a> 1 paper accepted: <a href="https://arxiv.org/pdf/2602.18527"><strong>JAEGER</strong></a>',
  },
  {
    date: "2026-04",
    kind: "paper",
    body: '<a class="venue-badge" href="https://2026.aclweb.org/">ACL 2026</a> 2 papers accepted: <a href="https://www.arxiv.org/pdf/2601.06896"><strong>TagSpeech</strong></a> (<span style="color: var(--highlight); font-weight: 600;">Oral</span>), <a href="https://arxiv.org/pdf/2511.16757"><strong>Revisiting Audio-Language Pretraining</strong></a> (Main)',
  },
  {
    date: "2026-03",
    kind: "talk",
    body: '<a class="ecosystem-badge" href="https://github.com/AudenAI/Auden"><img src="images/auden-logo.png" alt="" /><span>Auden</span></a> Gave a talk at <a href="https://poonehmousavi.github.io/rg.html">Mila Conversational AI Reading Group</a> — "<a href="https://youtu.be/BJ3L0Kmz7Jw">Auden: From Audio Encoders to LALMs</a>"',
  },
  {
    date: "2026-01",
    kind: "paper",
    body: '<a class="venue-badge" href="https://cvpr.thecvf.com/">CVPR 2026</a> 1 paper accepted: <a href="https://rorizzz.github.io/images/2026_CVPR.pdf"><strong>UTS</strong></a>',
  },
  {
    date: "2026-01",
    kind: "paper",
    body: '<a class="venue-badge" href="https://2026.ieeeicassp.org/">ICASSP 2026</a> 3 papers accepted: <a href="https://arxiv.org/pdf/2511.14410"><strong>TTA</strong></a>, <a href="https://arxiv.org/pdf/2511.15145"><strong>Auden-Voice</strong></a>, <a href="https://ieeexplore.ieee.org/abstract/document/11460887"><strong>SSL Discrete Tokens</strong></a>',
  },
  {
    date: "2026-01",
    kind: "paper",
    body: '<a class="ecosystem-badge" href="https://github.com/AudenAI/Auden"><img src="images/auden-logo.png" alt="" /><span>Auden</span></a> Released our Speech-LLM <a href="https://arxiv.org/pdf/2601.06086"><strong>AZEROS</strong></a> — SOTA on semantic + paralinguistic understanding.',
  },
  {
    date: "2025-12",
    kind: "oss",
    body: '<a class="ecosystem-badge" href="https://github.com/AudenAI/Auden"><img src="images/auden-logo.png" alt="" /><span>Auden</span></a> Initial release — a comprehensive toolkit for audio foundation models, growing into an open-source community.',
  },
  {
    date: "2025-11",
    kind: "paper",
    body: '<a class="venue-badge" href="https://aaai.org/conference/aaai/aaai-26/">AAAI 2026</a> 1 paper accepted: <a href="https://arxiv.org/pdf/2508.08961"><strong>DualSpeechLM</strong></a>',
  },
  {
    date: "2025-05",
    kind: "paper",
    body: '<a class="venue-badge" href="https://www.interspeech2025.org/home">Interspeech 2025</a> 2 papers accepted: <a href="https://arxiv.org/pdf/2506.21555"><strong>LoRA Language Experts</strong></a>, <a href="https://arxiv.org/pdf/2505.21527"><strong>VietASR</strong></a>',
  },
  {
    date: "2024-09",
    kind: "experience",
    body: 'Joined <a href="https://ailab.tencent.com/ailab/en/index/">Tencent AI Lab (Bellevue)</a> as Senior Research Scientist.',
  },
  {
    date: "2024-09",
    kind: "paper",
    body: '<a class="venue-badge" href="https://2024.ieeeslt.org/">SLT 2024</a> 2 papers accepted: <a href="https://ieeexplore.ieee.org/abstract/document/10832166"><strong>Spatialemb</strong></a> (first-authored), <a href="https://arxiv.org/pdf/2408.17431"><strong>Multi-talker ASR with LLMs</strong></a>',
  },
  {
    date: "2024-06",
    kind: "paper",
    body: '<a class="venue-badge" href="https://interspeech2024.org/">Interspeech 2024</a> 2 first-authored papers: <a href="https://arxiv.org/pdf/2406.09589"><strong>Solo Segment</strong></a>, <a href="https://arxiv.org/pdf/2311.00146"><strong>RIR-SF</strong></a>',
  },
  {
    date: "2023-12",
    kind: "talk",
    body: 'Gave a talk at <a href="https://www.clsp.jhu.edu/events/categories/seminar/">JHU CLSP Seminar</a> on <a href="https://arxiv.org/pdf/2311.00146"><strong>RIR-SF</strong></a>.',
  },
  {
    date: "2022-01",
    kind: "paper",
    body: '<a class="venue-badge" href="https://2022.ieeeicassp.org/">ICASSP 2022</a> 1 paper accepted: <a href="https://arxiv.org/pdf/2111.11023"><strong>3D Spatial ASR</strong></a> (first-authored)',
  },
  {
    date: "2020-08",
    kind: "oss",
    body: '<a class="venue-badge" href="https://www.interspeech2020.org/">Interspeech 2020</a> Released <a href="https://github.com/YiwenShaoStephen/pychain"><strong>PyChain</strong></a> — PyTorch implementation of LF-MMI.',
  },
];
