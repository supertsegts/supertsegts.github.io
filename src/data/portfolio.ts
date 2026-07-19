export const site = {
  name: "Tsegts Temuujin",
  title: "Tsegts Temuujin | Software Engineer & Designer",
  description:
    "College student building games in C++, exploring neural networks, and crafting iOS-inspired interfaces. Portfolio of BE ALIVE, AI experiments, and design work.",
  url: "https://supertsegts.github.io",
  tagline: "Software Engineer & Designer",
  subtitle:
    "I build survival games in C++, experiment with neural networks, and design interfaces people love to use.",
  github: "https://github.com/supertsegts",
  githubUsername: "supertsegts",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Design", href: "#design" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  heading: "Building at the intersection of code and design",
  paragraphs: [
    "I'm a college student passionate about software engineering and visual design. I write performant C++ for games, study algorithms and AI, and care deeply about how things look and feel.",
    "From procedural island generation to TensorFlow Playground experiments, I learn by building, then polish until it ships. I'm looking for opportunities to grow as an engineer and designer.",
  ],
  highlights: [
    { label: "Focus", value: "Games, AI, UI" },
    { label: "Languages", value: "C++, TypeScript" },
    { label: "Tools", value: "Raylib, Figma, TF" },
    { label: "Status", value: "Open to opportunities" },
  ],
};

export const beAliveProject = {
  id: "be-alive",
  title: "BE ALIVE",
  subtitle: "Island Survival",
  tagline: "2D sandbox survival built from scratch in C++",
  description:
    "A solo indie survival game inspired by Don't Starve, with procedural terrain, day/night cycles, crafting, and enemy AI on a living island you must survive.",
  github: "https://github.com/supertsegts/be-alive-game",
  tech: ["C++", "Raylib", "Procedural Gen", "Game AI", "Pixel Art"],
  features: [
    {
      title: "Procedural World",
      description:
        "Island shape and ocean waves generated with harmonic sine/cosine algorithms, so every playthrough feels unique.",
    },
    {
      title: "Day / Night Cycle",
      description:
        "Time-of-day affects difficulty. Enemies grow stronger at night, forcing strategic survival planning.",
    },
    {
      title: "Crafting & Inventory",
      description:
        "Gather wood, stone, and ore. Use a 3×3 crafting grid to forge tools, weapons, and supplies.",
    },
    {
      title: "Enemy AI",
      description:
        "Zombies and snakes track the player with chase, ambush, and attack logic, not simple follow behavior.",
    },
  ],
  metrics: [
    { label: "Lines of C++", value: "600+" },
    { label: "World Size", value: "4000×4000" },
    { label: "Enemy Types", value: "3" },
    { label: "Craft Recipes", value: "4+" },
  ],
};

export type ExperimentResult = "best" | "warning" | "neutral";

export const neuralNetworkProject = {
  id: "neural-network",
  title: "Neural Network Lab",
  subtitle: "Architecture Experiments",
  tagline: "Systematic exploration of depth, neurons, and overfitting",
  description:
    "Hands-on lab using TensorFlow Playground to find optimal network architectures across Circle, XOR, and Spiral datasets, with clear conclusions on when deeper is better.",
  date: "May 4, 2026",
  tech: ["TensorFlow Playground", "Neural Networks", "ML Theory"],
  experiments: [
    {
      dataset: "Circle",
      config: "1 layer · 7 neurons",
      loss: "0.006",
      insight:
        "Increasing neurons within a single hidden layer lets the network learn curved decision boundaries instead of a single linear split.",
      result: "best",
    },
    {
      dataset: "XOR",
      config: "2 layers · 3,3 neurons",
      loss: "0.000",
      insight:
        "Non-linear data needs depth. A 2-layer network with 3,3 neurons achieved perfect classification.",
      result: "best",
    },
    {
      dataset: "XOR (overfit)",
      config: "4 layers · 3,2,3,2",
      loss: "0.049",
      insight:
        "More layers isn't always better: unnecessary depth caused unstable boundaries and worse loss.",
      result: "warning",
    },
    {
      dataset: "Spiral",
      config: "3 layers · 3,4,5",
      loss: "0.460",
      insight:
        "Highly complex patterns require deep networks, more neurons, and longer training. Simple architectures fail.",
      result: "neutral",
    },
  ],
  takeaways: [
    "Match network depth to data complexity",
    "Overfitting appears when architecture exceeds what the data needs",
    "Real-world parallels: image classification, spam filtering, fraud detection",
  ],
};

export const skills = [
  {
    category: "Languages",
    items: ["C++", "TypeScript", "Python", "Java"],
  },
  {
    category: "Engineering",
    items: ["Algorithms", "Data Structures", "Procedural Generation", "Game AI"],
  },
  {
    category: "AI / ML",
    items: ["Neural Networks", "TensorFlow", "Model Tuning", "Overfitting Analysis"],
  },
  {
    category: "Design",
    items: ["Figma", "UI/UX", "iOS Design", "Pixel Art", "Piskel"],
  },
  {
    category: "Game Dev",
    items: ["Raylib", "Spritesheets", "Crafting Systems", "Inventory Logic"],
  },
];

export const figma = {
  title: "iOS 17 Interface Design",
  description:
    "Interactive prototype exploring iOS 17 design patterns: typography, glass materials, and native-feeling components.",
  embedUrl:
    "https://embed.figma.com/proto/dz5nCD434Mvspwt9JIUi8z/iOS-17-and-iPadOS-17--Community-?scaling=scale-down&content-scaling=fixed&page-id=221%3A56229&node-id=2419-743&starting-point-node-id=2419%3A743&embed-host=share",
  openUrl:
    "https://www.figma.com/design/dz5nCD434Mvspwt9JIUi8z/iOS-17-and-iPadOS-17--Community-",
};

export const contact = {
  heading: "Let's build something together",
  description:
    "I'm open to internships, collaborations, and interesting projects. Reach out, I'd love to hear from you.",
  emailButtonLabel: "Email me",
};
