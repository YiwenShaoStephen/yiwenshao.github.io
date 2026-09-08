export type WorkLink = {
  kind: "github" | "hf" | "youtube" | "slides";
  href: string;
  label?: string;
};

export type Work = {
  title: string;
  authors: string;
  description: string;
  thumb: string;
  venue: string;
  venueHref?: string;
  tag?: string;
  links?: WorkLink[];
};

export type WorkGroup = {
  id: string;
  title: string;
  works: Work[];
};

/**
 * Recent works — surfaces ongoing & recent projects, grouped by topic.
 * `authors` uses HTML; `me` is bolded with the `<em class="me">…</em>` marker.
 */
export const recentWorks: WorkGroup[] = [
  {
    id: "speech-mllm",
    title: "Speech & Multimodal LLMs",
    works: [
      {
        title:
          "JAEGER: Joint 3D Audio-Visual Grounding and Reasoning in Simulated Physical Environments",
        authors:
          'Zhan Liu, Changli Tang, Yuxin Wang, Zhiyuan Zhu, Youjun Chen, <em class="me">Yiwen Shao<sup>†</sup></em>, Tianzi Wang, Lei Ke, Zengrui Jin, Chao Zhang<sup>†</sup>',
        description:
          "Joint 3D audio-visual grounding and reasoning benchmark and method in simulated physical environments.",
        thumb: "",
        venue: "ICML 2026",
        venueHref: "https://arxiv.org/pdf/2602.18527",
      },
      {
        title:
          "TagSpeech: End-to-End Multi-Speaker ASR and Diarization with Fine-Grained Temporal Grounding",
        authors:
          'Mingyue Huo, <em class="me">Yiwen Shao</em>, Yuheng Zhang',
        description:
          "LLM-based framework with temporal anchor grounding for joint multi-speaker ASR and diarization.",
        thumb: "images/tagspeech.png",
        venue: "ACL 2026",
        tag: "Oral",
        venueHref: "https://www.arxiv.org/pdf/2601.06896",
        links: [
          {
            kind: "github",
            href: "https://github.com/AudenAI/Auden/tree/main/examples/tagspeech",
            label: "Auden",
          },
          {
            kind: "hf",
            href: "https://huggingface.co/AudenAI/TagSpeech-AMI",
            label: "Auden",
          },
        ],
      },
      {
        title:
          "AzeroS: Extending LLM to Speech with Self-Generated Instruction-Free Tuning",
        authors:
          '<em class="me">Yiwen Shao<sup>*†</sup></em>, Wei Liu<sup>*</sup>, Jiahong Li<sup>*</sup>, Tianzi Wang, Kun Wei, Meng Yu, Dong Yu',
        description:
          "Self-generated instruction-free tuning eliminates task-specific data, achieving SOTA on VoiceBench and AIR-Bench with minimal training.",
        thumb: "images/azeros.png",
        venue: "Tech Report 2026",
        venueHref: "/yiwenshao.github.io/papers/azeros",
        links: [
          {
            kind: "github",
            href: "https://github.com/AudenAI/Auden/tree/main/examples/azeros",
            label: "Auden",
          },
          {
            kind: "hf",
            href: "https://huggingface.co/AudenAI/azeros",
            label: "Auden",
          },
        ],
      },
      {
        title: "Efficient Scaling for LLM-based ASR",
        authors:
          'Bingshen Mu, <em class="me">Yiwen Shao<sup>†</sup></em>, Kun Wei, Dong Yu, Lei Xie',
        description:
          "EFIN (Encoder First Integration) training paradigm achieves more efficient and effective LLM-ASR.",
        thumb: "images/llm_asr.png",
        venue: "ASRU 2025",
        venueHref: "https://arxiv.org/pdf/2508.04096",
        links: [
          {
            kind: "github",
            href: "https://github.com/AudenAI/Auden/tree/main/examples/asr_llm",
            label: "Auden",
          },
        ],
      },
      {
        title:
          "Advancing multi-talker ASR performance with large language models",
        authors:
          'Mohan Shi, Zengrui Jin, Yaoxun Xu, Yong Xu, Shi-Xiong Zhang, Kun Wei, <em class="me">Yiwen Shao</em>, Chunlei Zhang, Dong Yu',
        description:
          "Leveraging large language models to advance multi-talker ASR performance.",
        thumb: "images/multi_llm.png",
        venue: "SLT 2024",
        venueHref: "https://arxiv.org/pdf/2408.17431",
      },
    ],
  },
  {
    id: "audio-encoders",
    title: "Audio Encoders / Tokenizers",
    works: [
      {
        title:
          "Unlocking Strong Supervision: A Data-Centric Study of General-Purpose Audio Pre-Training Methods",
        authors:
          'Xuanru Zhou, <em class="me">Yiwen Shao<sup>†</sup></em>, Wei-Cheng Tseng, Dong Yu',
        description:
          "Data-centric strong-supervision audio pretraining with high-fidelity captions and unified tags across speech, music, environmental sounds.",
        thumb: "images/tag.png",
        venue: "CVPR 2026",
        venueHref: "https://openaccess.thecvf.com/content/CVPR2026/html/Zhou_Unlocking_Strong_Supervision_A_Data-Centric_Study_of_General-Purpose_Audio_Pre-Training_CVPR_2026_paper.html",
        links: [
          {
            kind: "github",
            href: "https://github.com/AudenAI/Auden/tree/main/examples/uts",
            label: "Auden",
          },
          {
            kind: "hf",
            href: "https://huggingface.co/datasets/AudenAI/UTS",
            label: "UTS",
          },
        ],
      },
      {
        title:
          "Revisiting Audio-language Pretraining for Learning General-purpose Audio Representation",
        authors:
          'Wei-Cheng Tseng, Xuanru Zhou, Mingyue Huo, <em class="me">Yiwen Shao<sup>†</sup></em>, Hao Zhang, Dong Yu',
        description:
          "10.7M CaptionStew enables the first contrastive vs. captioning study for general-purpose audio-language representations.",
        thumb: "images/caption.png",
        venue: "ACL 2026",
        venueHref: "https://arxiv.org/pdf/2511.16757",
        links: [
          {
            kind: "github",
            href: "https://github.com/AudenAI/Auden/tree/main/examples/audio_caption",
            label: "Auden",
          },
          {
            kind: "hf",
            href: "https://huggingface.co/datasets/RayTseng0406/CaptionStew",
            label: "CaptionStew",
          },
        ],
      },
      {
        title:
          "TTA: Transcribe, Translate and Alignment for Cross-lingual Speech Representation",
        authors:
          'Wei Liu<sup>*</sup>, Jiahong Li<sup>*</sup>, <em class="me">Yiwen Shao<sup>†</sup></em>, Dong Yu',
        description:
          "Jointly trains ASR, translation, and contrastive objectives on a shared encoder, yielding strong cross-lingual semantic representations.",
        thumb: "images/tta.png",
        venue: "ICASSP 2026",
        venueHref: "https://arxiv.org/pdf/2511.14410",
        links: [
          {
            kind: "github",
            href: "https://github.com/AudenAI/Auden/tree/main/examples/tta",
            label: "Auden",
          },
          {
            kind: "hf",
            href: "https://huggingface.co/AudenAI/auden-encoder-tta-m10",
            label: "Auden",
          },
        ],
      },
      {
        title:
          "Auden-Voice: General-Purpose Voice Encoder for Speech and Language Understanding",
        authors:
          'Mingyue Huo, Wei-Cheng Tseng, <em class="me">Yiwen Shao<sup>†</sup></em>, Hao Zhang, Dong Yu',
        description:
          "Multi-task training yields balanced identity and paralinguistic voice encoder; Auden-Voice integrates strongly with LLMs.",
        thumb: "images/voice.png",
        venue: "ICASSP 2026",
        venueHref: "https://arxiv.org/pdf/2511.15145",
        links: [
          {
            kind: "github",
            href: "https://github.com/AudenAI/Auden/tree/main/examples/voice",
            label: "Auden",
          },
          {
            kind: "hf",
            href: "https://huggingface.co/AudenAI/auden-encoder-voice",
            label: "Auden",
          },
        ],
      },
      {
        title:
          "Exploring SSL Discrete Tokens for Multilingual Automatic Speech Recognition",
        authors:
          'Mengzhe Cui, Mingyu Geng, <em class="me">Yiwen Shao</em>, Junhui Kang, Lingwei Meng, Dongchao Wang, Chunxi Li, Meng Yu, Xunying Liu',
        description:
          "Studies SSL discrete tokens as a representation backbone for multilingual ASR.",
        thumb: "",
        venue: "ICASSP 2026",
        venueHref: "https://ieeexplore.ieee.org/abstract/document/11460887",
      },
      {
        title:
          "DualSpeechLM: Towards Unified Speech Understanding and Generation via Dual Speech Token Modeling with Large Language Models",
        authors:
          'Yuanyuan Wang, Dongchao Yang, <em class="me">Yiwen Shao<sup>†</sup></em>, Hangting Chen, Jiankun Zhao, Zhiyong Wu, Helen Meng, Xixin Wu',
        description:
          "Dual-token speech modeling with LLMs for unified speech understanding and generation across tasks.",
        thumb: "images/dual.png",
        venue: "AAAI 2026",
        venueHref: "https://arxiv.org/pdf/2508.08961",
      },
    ],
  },
  {
    id: "asr",
    title: "ASR",
    works: [
      {
        title: "Efficient Multilingual ASR Finetuning via LoRA Language Experts",
        authors:
          'Jiahong Li, <em class="me">Yiwen Shao<sup>†</sup></em>, Jianheng Zhuo, Chenda Li, Liliang Tang, Dong Yu, Yanmin Qian',
        description:
          "LoRA language experts via fusion/distillation improve multilingual ASR by 10–15% relative gain over standard fine-tuning.",
        thumb: "images/asr_lora.png",
        venue: "Interspeech 2025",
        venueHref: "https://arxiv.org/pdf/2506.21555",
      },
      {
        title:
          "VietASR: Achieving Industry-level Vietnamese ASR with 50-hour Labeled Data and Large-Scale Speech Pretraining",
        authors:
          'Jianheng Zhuo, Yifan Yang, <em class="me">Yiwen Shao<sup>†</sup></em>, Yong Xu, Dong Yu, Kai Yu, Xie Chen',
        description:
          "Cost-effective ASR training pipeline for low-resource languages using multi-iteration ASR-biased self-supervised learning.",
        thumb: "images/vietasr.png",
        venue: "Interspeech 2025",
        venueHref: "https://arxiv.org/pdf/2505.21527",
        links: [
          {
            kind: "github",
            href: "https://github.com/zzasdf/VietASR",
            label: "VietASR",
          },
        ],
      },
      {
        title:
          "Spatialemb: Extract and Encode Spatial Information for 1-Stage Multi-Channel Multi-Speaker ASR on Arbitrary Microphone Arrays",
        authors:
          '<em class="me">Yiwen Shao</em>, Yong Xu, Sanjeev Khudanpur, Dong Yu',
        description:
          "Novel spatial embedding approach for single-stage multi-channel multi-speaker ASR that works with arbitrary microphone array configurations.",
        thumb: "images/spatial.png",
        venue: "SLT 2024",
        venueHref: "https://ieeexplore.ieee.org/abstract/document/10832166",
        links: [
          {
            kind: "github",
            href: "https://github.com/YiwenShaoStephen/SpatialEmb",
            label: "SpatialEmb",
          },
        ],
      },
      {
        title:
          "Multi-Channel Multi-Speaker ASR Using Target Speaker's Solo Segment",
        authors:
          '<em class="me">Yiwen Shao</em>, Shi-Xiong Zhang, Yong Xu, Meng Yu, Dong Yu, Daniel Povey, Sanjeev Khudanpur',
        description:
          "Leverages target speaker's solo segments for improved multi-channel multi-speaker ASR through speaker-conditioned modeling.",
        thumb: "images/solo.png",
        venue: "Interspeech 2024",
        venueHref: "https://arxiv.org/pdf/2406.09589",
      },
      {
        title:
          "RIR-SF: Room Impulse Response Based Spatial Feature for Target Speech Recognition in Multi-Channel Multi-Speaker Scenarios",
        authors:
          '<em class="me">Yiwen Shao</em>, Shi-Xiong Zhang, Dong Yu',
        description:
          "Novel spatial feature based on room impulse response for multi-channel multi-speaker ASR, achieving improved target speaker recognition.",
        thumb: "images/rir.png",
        venue: "Interspeech 2024",
        venueHref: "https://arxiv.org/pdf/2311.00146",
        links: [
          {
            kind: "youtube",
            href: "https://www.youtube.com/watch?v=Q6eWOg42UBg",
          },
        ],
      },
      {
        title: "Multi-channel multi-speaker ASR using 3D spatial feature",
        authors:
          '<em class="me">Yiwen Shao<sup>*</sup></em>, Shi-Xiong Zhang<sup>*</sup>, Dong Yu',
        description:
          "Using 3D spatial features from depth camera to enable end-to-end multi-speaker ASR via All-In-One model, achieving 31% CERR over 1D directional approaches.",
        thumb: "images/asr_3d.png",
        venue: "ICASSP 2022",
        venueHref: "https://arxiv.org/pdf/2111.11023",
      },
      {
        title:
          "PyChain: A Fully Parallelized PyTorch Implementation of LF-MMI for End-to-End ASR",
        authors:
          '<em class="me">Yiwen Shao</em>, Yiming Wang, Daniel Povey, Sanjeev Khudanpur',
        description:
          'PyTorch native implementation of LF-MMI loss with fully parallelized CUDA kernels. Integrated into <a href="https://github.com/freewym/espresso">espresso</a> and a precursor to <a href="https://github.com/k2-fsa/k2">next-gen Kaldi</a>.',
        thumb: "images/pychain.png",
        venue: "Interspeech 2020",
        links: [
          {
            kind: "github",
            href: "https://github.com/YiwenShaoStephen/pychain",
            label: "PyChain",
          },
        ],
      },
    ],
  },
];
