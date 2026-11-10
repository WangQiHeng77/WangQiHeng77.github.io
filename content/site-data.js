window.siteData = {
  "profile": {
    "name": "Wang Qiheng",
    "portrait": "assets/portrait.jpg",
    "links": {
      "email": "mailto:wqhmail@126.com",
      "github": "https://github.com/WangQiHeng77"
    }
  },
  "zh": {
    "hero": {
      "title": "王玘珩",
      "affiliation": "南洋理工大学 · 硕士研究生",
      "summary": "南洋理工大学计算机控制与自动化硕士在读（硕士论文导师杨剑飞），本科毕业于北京理工大学自动化专业。我研究学习得到的机器人系统怎样在训练条件之外继续工作。正在寻找 2027 年秋季入学的机器人方向博士机会。"
    },
    "about": {
      "copy": "我认为机器人未来几年要同时面对几个不同的问题：动得比示教更快，在不理想的画面下工作，在人身边做出可检验的决策，并从部署数据中持续改进。这些方向各有各的问题，共同点是我的工作方式：先说清预期的失败，用配对干预检验，并写明什么结果会改变判断。"
    },
    "labels": {
      "research": "研究方向",
      "papers": "论文",
      "news": "动态",
      "projects": "项目",
      "experience": "经历",
      "output": "荣誉与其他",
      "email": "邮箱",
      "project": "项目主页",
      "equal": "* 同等贡献"
    },
    "news": [
      [
        "2026.10",
        "FreeSpeed 论文公开在 arXiv。"
      ],
      [
        "2026.08",
        "入读南洋理工大学计算机控制与自动化硕士（MSc CCA），硕士论文导师为杨剑飞。"
      ],
      [
        "2026.04",
        "开始在宇树科技实习，任 AI 算法实习生。"
      ]
    ],
    "research": [
      [
        "策略对时间的假设",
        "机器人需要比示教更快地行动，而机载算力有限。我研究学习得到的策略对时间做了哪些假设：执行速度、延迟或硬件变化时哪些环节会失效，哪些问题不重训也能修复。"
      ],
      [
        "运动中看清世界",
        "通用机器人不能依赖清晰、光照良好的画面。我关注全身运动造成的模糊、低光和恶劣天气如何影响已训练好的策略，并以闭环任务成功率和处理延迟评价修正方法。"
      ],
      [
        "可检验的物理决策",
        "在人身边工作的机器人，要能在动作发生前判断物理后果。我研究如何用有限的触觉或力觉真值，从视觉和本体信号中判断执行风险，并和调好参的规则控制比较。"
      ],
      [
        "可验证的自我改进",
        "机器人部署后产生的数据远多于人能标注的量。我研究少量可验证的数据如何改进大量带噪数据，以及如何判断一次改进是真实进步，而不是噪声或过拟合。"
      ]
    ],
    "papers": [
      {
        "title": "FreeSpeed: Training-Free Speed Control for Generative Robot Policies",
        "url": "https://yuxuanhu9.github.io/FreeSpeed/",
        "authors": [
          "Yuxuan Hu*",
          "Shilin Shan*",
          "Qiheng Wang",
          "Jinghan Yang",
          "Junqiao Fan",
          "Hao Wan",
          "Jianfei Yang"
        ],
        "links": [
          [
            "arXiv",
            "https://arxiv.org/abs/2610.05734"
          ]
        ],
        "venue": "arXiv，2026（ICLR 2027 在审）",
        "summary": "免训练模块，对已有策略输出的动作块做后处理，依据相邻动作的方向不一致性决定执行速度能调整多少。"
      }
    ],
    "projects": [
      {
        "title": "机器人视觉复原：SwinIR 去噪与几何可用性",
        "year": "2026",
        "label": "Research",
        "summary": "构建面向机器人相机的 blur-noise-JPEG 复合退化训练流程，研究图像复原如何服务于几何匹配而非单纯提升感知质量。"
      },
      {
        "title": "人形机器人强化学习与高度图表征",
        "year": "2026",
        "label": "Research Internship",
        "summary": "围绕 Unitree G1 粗糙地形跑酷，构建高度图感知研究与训练框架，并将消融、评估和审计流程统一起来。"
      },
      {
        "title": "动作模仿数据与训练流水线",
        "year": "2026",
        "label": "Tianlian Robotics",
        "summary": "将动捕、动作数据包、参考轨迹、训练、评估串成可复现的工程链路，并探索更高质量的人形动作数据。"
      },
      {
        "title": "横岭：多模态煤矸石分选与巡检",
        "year": "2023 - 2024",
        "label": "Project Lead",
        "summary": "面向煤矿夜间、粉尘与部署受限环境，主导从任务定义、数据集、感知模型到 ROS 系统集成的移动机器人项目。"
      },
      {
        "title": "iGEM 2025：TRACER-IL24 多尺度建模",
        "year": "2025",
        "label": "Team Lead",
        "summary": "带领团队把转录组、生物信息学、蛋白结构、分子动力学与细胞/群体层建模连成一个面向实验决策的跨尺度研究链条。"
      },
      {
        "title": "iGEM 2024：Gate-based 微生物传感器",
        "year": "2024",
        "label": "Modeling Lead",
        "summary": "独立承担建模工作，以动力学与结构计算为湿实验提供可操作的工程决策。"
      }
    ],
    "experience": [
      [
        "2026.08 - Now",
        "NTU MARS Lab | M.Sc. Research",
        "机器人策略执行与硕士论文：从视觉和本体信号中提取接触信息。"
      ],
      [
        "2026.04 - 08",
        "Unitree Robotics | AI Algorithm Intern",
        "家庭操作示教采集；ACT、Diffusion Policy、GR00T 训练；DreamZero 在 Jetson Thor 上的推理瓶颈分析。"
      ],
      [
        "2026.02 - 04",
        "Tianlian Robotics | Robotics Algorithm Intern",
        "AMP/PPO 动作模仿，人形机器人行走与操作协调，sim-to-real 评估。"
      ],
      [
        "2026",
        "Undergraduate Thesis | BIT",
        "Unitree G1 粗糙地形跑酷的高度图表征对比。"
      ],
      [
        "2025",
        "iGEM_BIT | Team Lead",
        "带领跨学科团队完成 TRACER-IL24 多尺度建模；获 iGEM 金奖。"
      ],
      [
        "2024",
        "iGEM_BIT | Modeling Lead",
        "独立承担 Gate-based 微生物传感器建模；获 iGEM 金奖。"
      ],
      [
        "2023 - 2024",
        "Hengling Intelligent Control | Project Lead",
        "发起并推进多模态移动机器人项目，完成 ROS 系统与视觉感知部署。"
      ]
    ],
    "output": [
      [
        "First-author manuscript in preparation",
        "iGEM 2025 TRACER-IL24 多尺度建模工作。"
      ],
      [
        "Software Copyrights",
        "多传感器环境融合感知系统；群体机器人分布式协同平台；群体机器人任务分配调度平台。"
      ],
      [
        "Selected Recognition",
        "2024 & 2025 iGEM Gold Medal；2023 中国机器人及人工智能大赛全国二等奖；多项创新创业与科创竞赛奖项。"
      ]
    ],
    "footer": "© 2026 Wang Qiheng"
  },
  "en": {
    "hero": {
      "title": "Wang Qiheng",
      "affiliation": "M.Sc. Student, Nanyang Technological University",
      "summary": "M.Sc. student in Computer Control & Automation at NTU (dissertation supervised by Jianfei Yang), with a B.Eng. in Automation from Beijing Institute of Technology. I study how learned robot systems keep working beyond their training conditions. I am looking for robotics PhD positions starting in Fall 2027."
    },
    "about": {
      "copy": "I believe robots will face several distinct problems in the coming years: moving faster than their demonstrations, working with imperfect images, making checkable decisions near people, and improving from deployment data. Each direction stands on its own. What they share is how I work: name the failure I expect, test it with paired interventions, and state which result would change my mind."
    },
    "labels": {
      "research": "Research",
      "papers": "Publications",
      "news": "News",
      "projects": "Projects",
      "experience": "Experience",
      "output": "Honors & Other",
      "email": "Email",
      "project": "project page",
      "equal": "* equal contribution"
    },
    "news": [
      [
        "2026.10",
        "FreeSpeed is on arXiv."
      ],
      [
        "2026.08",
        "Started the M.Sc. in Computer Control & Automation at NTU, with a dissertation supervised by Jianfei Yang."
      ],
      [
        "2026.04",
        "Started an internship at Unitree Robotics as an AI algorithm intern."
      ]
    ],
    "research": [
      [
        "What a policy assumes about time",
        "Robots need to move faster than their demonstrations, on limited onboard compute. I study what learned policies assume about time: what breaks when speed, latency, or hardware changes, and what can be fixed without retraining."
      ],
      [
        "Seeing while moving",
        "General-purpose robots cannot depend on sharp, well-lit images. I study how blur from whole-body motion, low light, and bad weather affect trained policies, and I judge corrections by closed-loop task success and processing delay."
      ],
      [
        "Physical decisions that can be checked",
        "A robot working near people must judge the physical consequence of an action before it happens. I study how limited tactile or force ground truth can support risk judgements from vision and proprioception, compared against tuned rule-based control."
      ],
      [
        "Self-improvement that can be verified",
        "Deployed robots produce far more data than anyone can label. I study how a small verified set can improve a large noisy one, and how to tell real progress from noise or overfitting."
      ]
    ],
    "papers": [
      {
        "title": "FreeSpeed: Training-Free Speed Control for Generative Robot Policies",
        "url": "https://yuxuanhu9.github.io/FreeSpeed/",
        "authors": [
          "Yuxuan Hu*",
          "Shilin Shan*",
          "Qiheng Wang",
          "Jinghan Yang",
          "Junqiao Fan",
          "Hao Wan",
          "Jianfei Yang"
        ],
        "links": [
          [
            "arXiv",
            "https://arxiv.org/abs/2610.05734"
          ]
        ],
        "venue": "arXiv, 2026 (under review at ICLR 2027)",
        "summary": "A training-free module that post-processes action chunks from pretrained policies, using the directional inconsistency between adjacent actions to decide how far execution speed can change."
      }
    ],
    "projects": [
      {
        "title": "Robot image restoration: SwinIR denoising and geometric utility",
        "year": "2026",
        "label": "Research",
        "summary": "Developing a blur-noise-JPEG degradation-aware workflow for robot cameras, asking whether restoration improves geometric matching rather than merely visual quality."
      },
      {
        "title": "Humanoid reinforcement learning and height-map representations",
        "year": "2026",
        "label": "Research Internship",
        "summary": "A height-perception research and training framework for rough-terrain Unitree G1 locomotion, with unified ablations, evaluation, and auditability."
      },
      {
        "title": "Motion-imitation data and training pipeline",
        "year": "2026",
        "label": "Tianlian Robotics",
        "summary": "A reproducible engineering chain connecting motion capture, standardized motion packages, reference trajectories, training, and evaluation."
      },
      {
        "title": "Hengling: multimodal coal sorting and inspection",
        "year": "2023 - 2024",
        "label": "Project Lead",
        "summary": "A mobile-robot project for a dusty, night-time mine setting, led from task definition and dataset work through perception and ROS integration."
      },
      {
        "title": "iGEM 2025: TRACER-IL24 multiscale modeling",
        "year": "2025",
        "label": "Team Lead",
        "summary": "A cross-scale research chain spanning transcriptomics, bioinformatics, protein structure, molecular dynamics, and cell/population modeling."
      },
      {
        "title": "iGEM 2024: gate-based microbial sensor",
        "year": "2024",
        "label": "Modeling Lead",
        "summary": "Independent modeling work that produced actionable experimental guidance through kinetic and structural computation."
      }
    ],
    "experience": [
      [
        "2026.08 - Now",
        "NTU MARS Lab | M.Sc. Research",
        "Robot policy execution and an MSc thesis on extracting contact signals from vision and proprioception."
      ],
      [
        "2026.04 - 08",
        "Unitree Robotics | AI Algorithm Intern",
        "Household manipulation demonstrations; ACT, Diffusion Policy, and GR00T training; DreamZero inference bottlenecks on Jetson Thor."
      ],
      [
        "2026.02 - 04",
        "Tianlian Robotics | Robotics Algorithm Intern",
        "AMP/PPO motion imitation, humanoid locomotion-manipulation coordination, and sim-to-real evaluation."
      ],
      [
        "2026",
        "Undergraduate Thesis | BIT",
        "Height-map representations for rough-terrain Unitree G1 parkour."
      ],
      [
        "2025",
        "iGEM_BIT | Team Lead",
        "Led cross-disciplinary modeling for TRACER-IL24; received an iGEM Gold Medal."
      ],
      [
        "2024",
        "iGEM_BIT | Modeling Lead",
        "Independently led the modeling for a gate-based microbial sensor; received an iGEM Gold Medal."
      ],
      [
        "2023 - 2024",
        "Hengling Intelligent Control | Project Lead",
        "Initiated and led a multimodal mobile-robot project from perception through ROS integration."
      ]
    ],
    "output": [
      [
        "First-author manuscript in preparation",
        "Multiscale modeling for iGEM 2025 TRACER-IL24."
      ],
      [
        "Software Copyrights",
        "Multi-sensor environmental fusion perception system; distributed multi-robot collaboration platform; multi-robot task-allocation platform."
      ],
      [
        "Selected Recognition",
        "2024 & 2025 iGEM Gold Medal; Second Prize, China Robotics and AI Competition National Finals; additional innovation competition awards."
      ]
    ],
    "footer": "© 2026 Wang Qiheng"
  }
};
