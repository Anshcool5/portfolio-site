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
  skills: [
    "C#",
    "Python",
    "RISC-V",
    "MongoDb",
    "JavaScript",
    "CSS",
    "Java",
    "C",
    "TensorFlow",
    "PyTorch"
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
      company: "Albertaloop",
      badges: [],
      href: "https://albertaloop.ca/",
      location: "In-person",
      title: "Business Co-Lead and Software team member",
      logoUrl: "/abloop.png",
      start: "Sep 2024",
      end: "Present",
      description:
        "Currently serving as the Business co-lead of our University's hyperloop chapter where I conduct outreach and aid in event planning while managing assets worth thousands.",
    },
    {
      company: "Computing Research Association (CRA)",
      href: "https://cra.org/ur2phd",
      badges: [],
      location: "Remote",
      title: "UR2PhD Research Student",
      logoUrl: "/CRAlogo.png",
      start: "Sep 2024",
      end: "Present",
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
          </a>. The proposal was recently aprroved funding via the <a
            href="https://cra.org/ur2phd/for-undergraduate-students/funding/#:~:text=Conference%20Travel%20Application-,REU%20Funding,-Application%20Deadlines"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            UR2PhD REU program
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
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
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
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
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
      links:{
          type: "Blog Post",
          href: "https://devpost.com/software/turbo-alpaca",
          icon: <Icons.globe className="size-3" />,
        },
    },
  ],
} as const;
