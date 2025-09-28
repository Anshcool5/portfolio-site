import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Anshul Verma",
  initials: "AV",
  url: "https://anshul5.io", /* Blog doesn't exist */
  location: "Edmonton, AB",
  locationLink: "https://www.google.com/maps/place/edmonton",
  description:
    "University student with a passion for Machine Learning, Computer Vision, and Software Development.",
  summary:
    "I'm currently pursuing a [Computing Science Honors degree](/#education) at the University of Alberta, graduating in June 2026. I have a strong interest in machine learning, computer vision, and scalable software solutions. My journey includes hands-on experience with diverse projects, continuous learning, research, and an enthusiasm for tackling real-world challenges.",
  avatarUrl: "/LinkedIn_Photo.jpeg",
  languages: [
    "Python", 
    "R", 
    "Java", 
    "Julia", 
    "C", 
    "C#", 
    "SQL",
    "C#",
    "RISC-V",
    "JavaScript",
    "CSS",
  ],
  ml_frameworks: [
    "TensorFlow", 
    "PyTorch", 
    "scikit-learn", 
    "Hugging Face Transformers",
    "unsloth",
    "LangChain",
  ],
  databases: [
    "Snowflake", 
    "PostgreSQL", 
    "MongoDB",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "anshu.ver4@gmail.com",
    tel: "+1 825-977-6471",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Anshcool5",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anshuv2",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Figorar",
      badges: [],
      href: "https://figorar.com/",
      location: "Hybrid",
      title: "Student Cofounder",
      logoUrl: "/Figorar-logo-only.png",
      start: "May 2025",
      end: "Present",
      description:(
        <>
          Cofounder of Figorar — a digital loyalty platform for small businesses with mentorship from{" "}
          <a
            href="https://edmontonunlimited.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Edmonton Unlimited
          </a>{" "}
          , built with React/TypeScript, Supabase, and Netlify.
        </>
      ),
    },
    {
      company: "Computing Research Association (CRA)",
      badges: [],
      href: "https://cra.org/ur2phd/for-undergraduate-students/funding/#:~:text=are%20especially%20limited.-,REU%20Funding,-Application%20Deadlines",
      location: "Remote",
      title: "UR2PhD REU Student Researcher",
      logoUrl: "/CRAlogo.png",
      start: "May 2025",
      end: "Sep 2025",
      description:
        "Selected for CRA’s UR2PhD REU program and awarded $11000 research funding. Built a novel reinforcement learning-based image segmentation architecture using the PLANET pipeline, achieving 33% faster training under GPU constraints. Authored a NeurIPS-style research paper on my contributions to the shared domain of reinforcement learning and computer vision for satellite image segmentation.",
    },
    {
      company: "Albertaloop",
      badges: [],
      href: "https://albertaloop.ca/",
      location: "In-person",
      title: "Software Team Lead",
      logoUrl: "/abloop.png",
      start: "Sep 2025",
      end: "Present",
      description:
        "Leading the AlbertaLoop software team, where I architect real-time control systems in Python/C++ and mentor 10+ developers to build IoT-driven Hyperloop technology.",
    },
    {
      company: "Albertaloop",
      badges: [],
      href: "https://albertaloop.ca/",
      location: "In-person",
      title: "Business Co-Lead and Software team member",
      logoUrl: "/abloop.png",
      start: "Sep 2024",
      end: "Sep 2025",
      description:
        "As Business Co-Lead and Software Developer at AlbertaLoop, I helped bridge technical and business strategy. Organized sponsor showcases, while also contributing to our ROS-based control systems with LoRa and CANbus integration for our Hyperloop pod.",
    },
    {
      company: "Computing Research Association (CRA)",
      href: "https://cra.org/ur2phd",
      badges: [],
      location: "Remote",
      title: "UR2PhD Research Student",
      logoUrl: "/CRAlogo.png",
      start: "Sep 2024",
      end: "Dec 2024",
      description: (
        <>
          Built a proposal for custom image segmentation model for detecting plant leaf diseases. The model uses TensorFlow and PyTorch and combines{" "}
          <a
            href="https://github.com/facebookresearch/sam2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Meta&apos;s Segment Anything Model (SAM) 2&apos;s
          </a>{" "}
          image encoder with a U-shaped architecture. The proposal draft and video can be found{" "}
          <a
            href="https://drive.google.com/drive/folders/1Rt9GklWqR3D31j_62ofeVNAnvjCqwnBv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            here
          </a>.
        </>
      ),
    },
    {
      company: "Deepija Telecom Pvt. Ltd.",
      badges: [],
      href: "https://www.deepijatel.com/",
      location: "In-person",
      title: "AI and ML Intern",
      logoUrl: "/DtelLogo.png",
      start: "May 2024",
      end: "Aug 2024",
      description:
        "Interned with newly formed AI and ML department. Improved call agent efficiency with query pre-screening using LLaMA-3. Embedded company info metrics document using a Vector Database.",
    },
  ],

  education: [
    {
      school: "University of Alberta",
      href: "https://www.ualberta.ca",
      degree: "Bachelor of Science with Honors in Computer Science",
      logoUrl: "/UalbertaLogo.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Edmonton Unlimited",
      href: "https://edmontonunlimited.com/programs/student-founders-program/",
      degree: "Student Founders Launch",
      logoUrl: "/edmonton_unlimited_logo.png",
      start: "2025",
      end: "2025",
    },
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s5",
      logoUrl: "/buildspace.jpg",
      start: "2024",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Figorar",
      href: "https://figorar.com/",
      dates: "June 2025 - Present",
      active: true,
      description:
        "Figorar lets merchants create and update loyalty programs while letting customers track and redeem rewards in real time.",
      technologies: [
        "React",
        "Typescript",
        "Vite",
        "Tailwind CSS",
        "Post CSS",
        "Node.js",
        "Supabase",
        "Netlify",
      ],
      links: [
        {
          type: "Website",
          href: "https://figorar.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "HackED 2025",
      dates: "February 15th - 17th, 2025",
      location: "Edmonton, Alberta",
      description:
        "Developed an AI-driven business intelligence platform using LangChain, LLaMa, Hugging Face models, and Pinecone. Built end-to-end on Django backend and React frontend; explored Groq for inference optimization.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/003/275/570/datas/full_width.png",
      links:[{
          title: "Blog Post",
          href: "https://devpost.com/software/turbo-alpaca",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
} as const;
