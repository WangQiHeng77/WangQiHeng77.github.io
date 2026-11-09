window.siteData = {
  profile: {
    name: "Wang Qiheng",
    portrait: "assets/portrait.jpg",
    links: {
      email: "mailto:wqhmail@126.com",
      github: "https://github.com/WangQiHeng77",
      cv: "#output"
    }
  },
  zh: {
    nav: [
      ["研究方向", "#research"], ["项目", "#work"], ["经历", "#experience"], ["成果", "#output"], ["联系", "#contact"]
    ],
    hero: {
      kicker: "ROBOTICS / MULTIMODAL PERCEPTION / EMBODIED AI",
      title: "王玘珩",
      summary: "北京理工大学自动化本科生，即将进入南洋理工大学计算机控制与自动化项目。我关注如何让机器人在不完美的感知、数据与真实环境约束下，依然获得稳定、可验证、可部署的能力。",
      actions: [["联系我", "mailto:wqhmail@126.com", "primary"], ["GitHub", "https://github.com/WangQiHeng77", "secondary"], ["研究成果", "#work", "secondary"]],
      location: "BEIJING / SINGAPORE",
      affiliation: "B.Eng. candidate, Automation, Beijing Institute of Technology\nIncoming M.Sc., Computer Control & Automation, NTU"
    },
    about: {
      kicker: "RESEARCH POSITIONING",
      title: "让机器人在训练条件之外继续工作",
      copy: "我认为机器人未来几年要同时面对几个不同的问题：动得比示教更快，在不理想的画面下工作，在人身边做出可检验的决策，并从部署数据中持续改进。这些方向各有各的问题，共同点是我的工作方式：先说清预期的失败，用配对干预检验，并写明什么结果会改变判断。"
    },
    research: {
      kicker: "CURRENT DIRECTIONS",
      title: "正在形成的研究线索",
      items: [
        ["策略对时间的假设", "机器人需要比示教更快地行动，而机载算力有限。我研究学习得到的策略对时间做了哪些假设：执行速度、延迟或硬件变化时哪些环节会失效，哪些问题不重训也能修复。", "Execution / Timing / Inference"],
        ["运动中看清世界", "通用机器人不能依赖清晰、光照良好的画面。我关注全身运动造成的模糊、低光和恶劣天气如何影响已训练好的策略，并以闭环任务成功率和处理延迟评价修正方法。", "Robot Vision / Closed-Loop Evaluation"],
        ["可检验的物理决策", "在人身边工作的机器人，要能在动作发生前判断物理后果。我研究如何用有限的触觉或力觉真值，从视觉和本体信号中判断执行风险，并和调好参的规则控制比较。", "Contact / Risk / Safety"],
        ["可验证的自我改进", "机器人部署后产生的数据远多于人能标注的量。我研究少量可验证的数据如何改进大量带噪数据，以及如何判断一次改进是真实进步，而不是噪声或过拟合。", "Verified Data / Evaluation"]
      ]
    },
    work: {
      kicker: "SELECTED WORK",
      title: "研究、系统与跨域建模",
      filters: ["全部", "机器人", "视觉", "建模", "系统"],
      read: "查看摘要",
      close: "收起摘要",
      empty: "该分类的项目正在整理中。",
      items: [
        { title: "机器人视觉复原：SwinIR 去噪与几何可用性", kind: "视觉", year: "2026 - Ongoing", label: "Research", summary: "构建面向机器人相机的 blur-noise-JPEG 复合退化训练流程，研究图像复原如何服务于几何匹配而非单纯提升感知质量。", detail: "搭建 NBJ degradation-aware 训练流程并提出 edge-aware recognition loss；以 ORB 匹配、RANSAC 内点和 proxy VO-style 几何估计作为下游评价。当前观察到：通用图像复原可改善几何一致性，但也可能减少可匹配特征；退化适配与 edge-aware 训练能进一步提升有效匹配。", tags: ["SwinIR", "Image Restoration", "ORB / RANSAC"] },
        { title: "人形机器人强化学习与高度图表征", kind: "机器人", year: "2026", label: "Research Internship", summary: "围绕 Unitree G1 粗糙地形跑酷，构建高度图感知研究与训练框架，并将消融、评估和审计流程统一起来。", detail: "完成 raw / zero / shuffle / coarse 表征消融、多 seed 对照和统一 i3000 训练口径；建立配置门禁、baseline 对齐、自动聚合及审计分析流程。基于 AMP + PPO 推进跨越、跳台、台阶等障碍通过，并建立统一 Evaluation & Benchmark。", tags: ["Isaac Lab", "AMP + PPO", "Unitree G1"] },
        { title: "动作模仿数据与训练流水线", kind: "系统", year: "2026 - Present", label: "Tianlian Robotics", summary: "将动捕、动作数据包、参考轨迹、训练、评估串成可复现的工程链路，并探索更高质量的人形动作数据。", detail: "参与构建双机解耦数据工程：从 GVHMR / GMR 输出标准化 motion package，到训练侧数据扫描、质量筛选、命令拼装与 post-train validation。复现 IsaacLab + Unitree RL Lab 的 G1 动作模仿训练，打通 motion.csv -> ref_motion.npz -> mimic task 的链路，并参与 Tlibot-1 的 sim2sim 验证与部署。", tags: ["Motion Imitation", "Data Infrastructure", "Sim2Sim"] },
        { title: "横岭：多模态煤矸石分选与巡检", kind: "机器人", year: "2023 - 2024", label: "Project Lead", summary: "面向煤矿夜间、粉尘与部署受限环境，主导从任务定义、数据集、感知模型到 ROS 系统集成的移动机器人项目。", detail: "针对单一视觉在真实工况下不稳定的问题，探索 RGB 与红外热成像结合的多模态方案；完成数据采集与标注规范、YOLOv5 训练部署、ROS 系统集成和现场调试。这段经历形成了我对系统级机器人问题的最初判断。", tags: ["RGB-IR", "ROS", "Mobile Robot"] },
        { title: "iGEM 2025：TRACER-IL24 多尺度建模", kind: "建模", year: "2025", label: "Team Lead", summary: "带领团队把转录组、生物信息学、蛋白结构、分子动力学与细胞/群体层建模连成一个面向实验决策的跨尺度研究链条。", detail: "以 CRC 转录组、通路富集和 PPI 网络定位 MMP9 高表达条件；用 AlphaFold3、分子对接和 GROMACS 100 ns MD 验证机制假设；用 ODE 与 ABM 模型研究细胞和群体层动力学。项目获 iGEM Gold Medal，相关一作论文正在整理。", tags: ["Multiscale Modeling", "GROMACS", "iGEM Gold"] },
        { title: "iGEM 2024：Gate-based 微生物传感器", kind: "建模", year: "2024", label: "Modeling Lead", summary: "独立承担建模工作，以动力学与结构计算为湿实验提供可操作的工程决策。", detail: "构建包含 AHL、LuxR 与 GFP 表达过程的 ODE 系统，预测工程菌浓度比并给出 1:2 的实验建议；枚举 RecA intein 插入位点，结合 AlphaFold3、SWISS-MODEL、对接与结构分析选择更稳健的候选位点。项目获 iGEM Gold Medal。", tags: ["ODE", "Protein Modeling", "iGEM Gold"] }
      ]
    },
    experience: {
      kicker: "TRAJECTORY",
      title: "从动手做系统，到研究系统为何可靠",
      items: [
        ["2026 - Present", "Tianlian Robotics | Research Intern", "动作模仿数据、Isaac Lab 训练流程、人形机器人部署与 manipulation 基础设施。"],
        ["2026", "Robot Learning Research", "围绕 Unitree G1 粗糙地形的强化学习与感知表征开展系统化实验。"],
        ["2025", "iGEM_BIT | Team Lead", "带领跨学科团队完成 TRACER-IL24 多尺度建模；获 iGEM 金奖。"],
        ["2024", "iGEM_BIT | Modeling Lead", "独立承担 Gate-based 微生物传感器建模；获 iGEM 金奖。"],
        ["2023 - 2024", "Hengling Intelligent Control | Project Lead", "发起并推进多模态移动机器人项目，完成 ROS 系统与视觉感知部署。"]
      ]
    },
    output: {
      kicker: "OUTPUT & RECOGNITION",
      title: "进行中的研究，也值得被清楚地呈现",
      items: [
        ["Manuscript in preparation", "机器人视觉复原与去噪：面向几何可用性的 degradation-aware SwinIR 研究。"],
        ["First-author manuscript in preparation", "iGEM 2025 TRACER-IL24 多尺度建模工作。"],
        ["Software Copyrights", "多传感器环境融合感知系统；群体机器人分布式协同平台；群体机器人任务分配调度平台。"],
        ["Selected Recognition", "2024 & 2025 iGEM Gold Medal；2023 中国机器人及人工智能大赛全国二等奖；多项创新创业与科创竞赛奖项。"]
      ]
    },
    contact: { kicker: "CONTACT", title: "关于研究、合作或机会，欢迎联系。", copy: "目前正准备进入 NTU 的 Computer Control & Automation 项目，并持续推进机器人感知、具身学习与多模态系统方向的研究。", email: "邮箱", github: "GitHub", cv: "研究成果", footer: "© 2026 Wang Qiheng" },
    backToTop: "回到顶部"
  },
  en: {
    nav: [["Research", "#research"], ["Work", "#work"], ["Experience", "#experience"], ["Output", "#output"], ["Contact", "#contact"]],
    hero: { kicker: "ROBOTICS / MULTIMODAL PERCEPTION / EMBODIED AI", title: "Wang Qiheng", summary: "Automation undergraduate at Beijing Institute of Technology and incoming M.Sc. student in Computer Control & Automation at NTU. I study how robots can remain stable, verifiable, and deployable despite imperfect perception, data, and real-world constraints.", actions: [["Get in touch", "mailto:wqhmail@126.com", "primary"], ["GitHub", "https://github.com/WangQiHeng77", "secondary"], ["Selected work", "#work", "secondary"]], location: "BEIJING / SINGAPORE", affiliation: "B.Eng. candidate, Automation, Beijing Institute of Technology\nIncoming M.Sc., Computer Control & Automation, NTU" },
    about: { kicker: "RESEARCH POSITIONING", title: "Keeping robots working beyond their training conditions", copy: "I believe robots will face several distinct problems in the coming years: moving faster than their demonstrations, working with imperfect images, making checkable decisions near people, and improving from deployment data. Each direction stands on its own. What they share is how I work: name the failure I expect, test it with paired interventions, and state which result would change my mind." },
    research: { kicker: "CURRENT DIRECTIONS", title: "Research threads in formation", items: [["What a policy assumes about time", "Robots need to move faster than their demonstrations, on limited onboard compute. I study what learned policies assume about time: what breaks when speed, latency, or hardware changes, and what can be fixed without retraining.", "Execution / Timing / Inference"], ["Seeing while moving", "General-purpose robots cannot depend on sharp, well-lit images. I study how blur from whole-body motion, low light, and bad weather affect trained policies, and I judge corrections by closed-loop task success and processing delay.", "Robot Vision / Closed-Loop Evaluation"], ["Physical decisions that can be checked", "A robot working near people must judge the physical consequence of an action before it happens. I study how limited tactile or force ground truth can support risk judgements from vision and proprioception, compared against tuned rule-based control.", "Contact / Risk / Safety"], ["Self-improvement that can be verified", "Deployed robots produce far more data than anyone can label. I study how a small verified set can improve a large noisy one, and how to tell real progress from noise or overfitting.", "Verified Data / Evaluation"]] },
    work: { kicker: "SELECTED WORK", title: "Research, systems, and cross-disciplinary modeling", filters: ["All", "Robotics", "Vision", "Modeling", "Systems"], read: "Read abstract", close: "Close abstract", empty: "Work in this category is being prepared.", items: [] },
    experience: { kicker: "TRAJECTORY", title: "From building systems to studying why they work", items: [["2026 - Present", "Tianlian Robotics | Research Intern", "Motion-imitation data, Isaac Lab training workflows, humanoid deployment, and manipulation infrastructure."], ["2026", "Robot Learning Research", "Systematic experiments on representation learning and reinforcement learning for rough-terrain Unitree G1 locomotion."], ["2025", "iGEM_BIT | Team Lead", "Led cross-disciplinary modeling for TRACER-IL24; received an iGEM Gold Medal."], ["2024", "iGEM_BIT | Modeling Lead", "Independently led the modeling for a gate-based microbial sensor; received an iGEM Gold Medal."], ["2023 - 2024", "Hengling Intelligent Control | Project Lead", "Initiated and led a multimodal mobile-robot project from perception through ROS integration."]] },
    output: { kicker: "OUTPUT & RECOGNITION", title: "Work in progress deserves a precise presentation", items: [["Manuscript in preparation", "Robot image restoration and denoising: a degradation-aware SwinIR study for geometric utility."], ["First-author manuscript in preparation", "Multiscale modeling for iGEM 2025 TRACER-IL24."], ["Software Copyrights", "Multi-sensor environmental fusion perception system; distributed multi-robot collaboration platform; multi-robot task-allocation platform."], ["Selected Recognition", "2024 & 2025 iGEM Gold Medal; Second Prize, China Robotics and AI Competition National Finals; additional innovation competition awards."]] },
    contact: { kicker: "CONTACT", title: "For research, collaboration, or opportunities.", copy: "I am preparing to begin NTU's Computer Control & Automation programme and am continuing work on robotic perception, embodied learning, and multimodal systems.", email: "Email", github: "GitHub", cv: "Selected work", footer: "© 2026 Wang Qiheng" },
    backToTop: "Back to top"
  }
};
