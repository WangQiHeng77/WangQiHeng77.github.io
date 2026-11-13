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
    "labels": {
      "lines": "研究主线",
      "news": "动态",
      "experience": "经历",
      "output": "荣誉与其他",
      "email": "邮箱",
      "project": "项目主页",
      "equal": "* 同等贡献",
      "line": "主线"
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
    "intro": "我把研究组织成几条主线。每条线都来自我对机器人未来几年的一个判断，各自可以独立成立或被推翻。它们共享的是一种做法：先说清预期的失败，用配对干预去检验，并写明什么结果会改变我的判断。",
    "lines": [
      {
        "title": "策略对时间的假设",
        "belief": "机器人需要比示教动得更快，而机载算力有限。",
        "question": "学到的策略对时间做了哪些假设？执行速度、延迟或硬件一变，哪些环节会失效，哪些不重训也能修好？",
        "items": [
          {
            "kind": "paper",
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
            "summary": "免训练模块，对已有策略输出的动作块做后处理，依据相邻动作的方向不一致性决定执行速度能调整多少。",
            "role": "我的工作：参与实现和评估重采样方法，完成时序、历史采样和重规划研究，搭建了 31 个任务、每任务 50 个配对初态的评测。"
          },
          {
            "kind": "project",
            "title": "世界动作模型的机载推理瓶颈",
            "meta": "2026 · 宇树科技实习",
            "summary": "分析 DreamZero 在 NVIDIA Jetson Thor 上的推理开销，涉及分词、上下文与 KV 缓存、编译和动作长度的取舍。"
          }
        ]
      },
      {
        "title": "判断进步是不是真的",
        "belief": "部署后的机器人会产生远多于人能标注的数据，改进只能来自少量可验证的数据。",
        "question": "一次宣称的提升，是真实的进步，还是训练噪声或评测集偏差？一个基准到底能分辨多大的差距？",
        "items": [
          {
            "kind": "note",
            "text": "一项关于评测基准分辨力的独作研究正在投稿双盲会议，预印本和代码预计 12 月公开。"
          },
          {
            "kind": "note",
            "text": "与上海创智合作：手部快速交互的视频理解，负责可自动校验的数据与评测（进行中）。"
          }
        ]
      },
      {
        "title": "运动中看清世界",
        "belief": "通用机器人不能依赖清晰、光照良好的画面。",
        "question": "全身运动造成的模糊、低光和恶劣天气，会不会伤害已训练好的策略？修正能否快到在闭环里有用？",
        "items": [
          {
            "kind": "project",
            "title": "机器人相机的图像复原与几何可用性",
            "meta": "2026 · 探索性项目",
            "summary": "为机器人相机搭建模糊、噪声、压缩复合退化的复原训练流程，用特征匹配和 RANSAC 内点检验复原对几何是否有用。初步观察：通用复原能提升几何一致性，也可能减少可匹配的特征。"
          },
          {
            "kind": "project",
            "title": "横岭：多模态煤矸石分选与巡检",
            "meta": "2023 - 2024 · 项目负责人",
            "summary": "面向夜间、粉尘的矿井环境，单一可见光视觉不稳定，于是结合 RGB 与红外热成像；完成数据采集、YOLOv5 部署和 ROS 集成。"
          }
        ]
      },
      {
        "title": "可检验的物理决策",
        "belief": "在人身边工作的机器人，要在动作发生前判断物理后果。",
        "question": "有限的触觉或力觉真值，能否支撑只用视觉和本体信号做出的执行风险判断？",
        "items": [
          {
            "kind": "project",
            "title": "硕士论文：从视觉和本体信号中提取接触信息",
            "meta": "2026 - 至今 · NTU",
            "summary": "训练时用触觉或腕部力信号监督，部署时只用视觉和本体感觉，与调好参的规则控制比较。审计公开数据集时发现其中的损伤标签与录制批次绑定，因此评测要留出物体、批次和速度。"
          }
        ]
      },
      {
        "title": "更早的工作",
        "belief": "",
        "question": "人形机器人控制，以及跨学科的建模训练。",
        "items": [
          {
            "kind": "project",
            "title": "人形机器人高度图表征与粗糙地形跑酷",
            "meta": "2026 · 本科毕设，北京理工大学",
            "summary": "在 Isaac Lab 中比较 raw、zero、shuffle、coarse 四种高度图输入对 Unitree G1 跑酷的影响，多 seed 对照。"
          },
          {
            "kind": "project",
            "title": "动作模仿数据与训练流水线",
            "meta": "2026 · 天链机器人实习",
            "summary": "把动捕、动作数据包、参考轨迹、训练和评估串成可复现的链路，用于 G1 与 Tlibot 的动作模仿和 sim2sim 验证。"
          },
          {
            "kind": "project",
            "title": "iGEM 2025：TRACER-IL24 多尺度建模",
            "meta": "2025 · 队长 · 金奖",
            "summary": "把转录组分析、蛋白结构、分子动力学和细胞/群体层建模连成一条服务实验决策的研究链。"
          },
          {
            "kind": "project",
            "title": "iGEM 2024：Gate-based 微生物传感器",
            "meta": "2024 · 建模负责人 · 金奖",
            "summary": "用 ODE 动力学模型给出工程菌浓度配比建议，并用结构计算筛选蛋白插入位点。"
          }
        ]
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
    "labels": {
      "lines": "Research",
      "news": "News",
      "experience": "Experience",
      "output": "Honors & Other",
      "email": "Email",
      "project": "project page",
      "equal": "* equal contribution",
      "line": "Line"
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
    "intro": "My work is organised as separate lines. Each starts from a belief about where robotics is going, and each can succeed or fail on its own. What they share is a way of working: name the failure I expect, test it with paired interventions, and state which result would change my mind.",
    "lines": [
      {
        "title": "What a policy assumes about time",
        "belief": "Robots will need to move faster than their demonstrations, on limited onboard compute.",
        "question": "What does a learned policy assume about time? When speed, latency or hardware changes, what breaks, and what can be fixed without retraining?",
        "items": [
          {
            "kind": "paper",
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
            "summary": "A training-free module that post-processes action chunks from pretrained policies, using the directional inconsistency between adjacent actions to decide how far execution speed can change.",
            "role": "My part: implementing and evaluating the resampling method, the timing, history-sampling and replanning studies, and paired evaluations over 31 tasks with 50 matched initial states each."
          },
          {
            "kind": "project",
            "title": "Onboard inference bottlenecks of a world-action model",
            "meta": "2026 · Unitree Robotics internship",
            "summary": "Analysed DreamZero inference on NVIDIA Jetson Thor across tokenization, context and KV-cache handling, compilation and action-horizon choices."
          }
        ]
      },
      {
        "title": "Telling whether progress is real",
        "belief": "Deployed robots will produce far more data than anyone can label, so improvement has to come from a small verified set.",
        "question": "Is a reported gain real progress, or training noise and test-set bias? How large a difference can a benchmark actually resolve?",
        "items": [
          {
            "kind": "note",
            "text": "A sole-author study of how much a benchmark can resolve is being submitted to a double-blind venue; the preprint and code are planned for December."
          },
          {
            "kind": "note",
            "text": "Collaboration with Shanghai Innovation Institute on video understanding of fast hand interactions, where I work on automatically verifiable data and evaluation (ongoing)."
          }
        ]
      },
      {
        "title": "Seeing while moving",
        "belief": "General-purpose robots cannot depend on sharp, well-lit images.",
        "question": "Do blur from whole-body motion, low light and bad weather hurt a trained policy, and can corrections run fast enough to matter in closed loop?",
        "items": [
          {
            "kind": "project",
            "title": "Image restoration and geometric utility for robot cameras",
            "meta": "2026 · exploratory project",
            "summary": "Built a restoration training pipeline for combined blur, noise and compression, and tested with feature matching and RANSAC inliers whether restoration helps geometry. Early observation: general restoration can improve geometric consistency but also remove matchable features."
          },
          {
            "kind": "project",
            "title": "Hengling: multimodal coal sorting and inspection",
            "meta": "2023 - 2024 · project lead",
            "summary": "Visible-light vision alone was unreliable in dusty, night-time mines, so the robot combined RGB with thermal infrared; I led data collection, YOLOv5 deployment and ROS integration."
          }
        ]
      },
      {
        "title": "Physical decisions that can be checked",
        "belief": "A robot working near people must judge the physical consequence of an action before it happens.",
        "question": "Can limited tactile or force ground truth support risk judgements made from vision and proprioception alone?",
        "items": [
          {
            "kind": "project",
            "title": "M.Sc. dissertation: contact signals from vision and proprioception",
            "meta": "2026 - present · NTU",
            "summary": "Tactile or wrist-force signals supervise training; deployment uses only vision and proprioception, compared against tuned rule-based control. An audit of public data found damage labels tied to recording sessions, so evaluation holds out objects, sessions and speeds."
          }
        ]
      },
      {
        "title": "Earlier work",
        "belief": "",
        "question": "Humanoid control, and cross-disciplinary modeling.",
        "items": [
          {
            "kind": "project",
            "title": "Height-map representations for rough-terrain humanoid parkour",
            "meta": "2026 · B.Eng. thesis, BIT",
            "summary": "Compared raw, zeroed, shuffled and coarse height-map inputs for Unitree G1 parkour in Isaac Lab across multiple seeds."
          },
          {
            "kind": "project",
            "title": "Motion-imitation data and training pipeline",
            "meta": "2026 · Tianlian Robotics internship",
            "summary": "Connected motion capture, motion packages, reference trajectories, training and evaluation into a reproducible chain for G1 and Tlibot imitation and sim-to-sim validation."
          },
          {
            "kind": "project",
            "title": "iGEM 2025: TRACER-IL24 multiscale modeling",
            "meta": "2025 · team lead · Gold Medal",
            "summary": "Linked transcriptomics, protein structure, molecular dynamics and cell/population models into one chain that guided experimental decisions."
          },
          {
            "kind": "project",
            "title": "iGEM 2024: gate-based microbial sensor",
            "meta": "2024 · modeling lead · Gold Medal",
            "summary": "Built an ODE model that set the engineered-strain ratio, and used structural computation to choose protein insertion sites."
          }
        ]
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
