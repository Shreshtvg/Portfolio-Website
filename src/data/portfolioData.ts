export interface Project {
  id: string;
  name: string;
  description: string;
  features: string[];
  stack: string[];
  image: string;
  github: string;
  live: string;
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface JourneyItem {
  year: string;
  title: string;
  description: string;
  details: string[];
}

export interface Achievement {
  title: string;
  description: string;
  badge?: string;
}

export const portfolioData = {
  personal: {
    name: "SHRESHT VG",
    tagline: "Software Engineer",
    subTagline: "Computer Science student passionate about Developing Products and Scalable Web applications, while leveraging modern AI software development practices.",
    rotatingTitles: [
      "Software Engineer",
      "Problem Solver"
    ],
    avatar: "/images/shresht_avatar_1779794430571.jpeg",
    socials: {
      github: "https://github.com/shreshtvg",
      linkedin: "https://www.linkedin.com/in/shresht-v-g-506465241/",
      email: "shreshtvg@gmail.com",
      resume: "https://drive.google.com/file/d/1Y_b8jMgW_PNhOndzvz0Vu801BB6q2PnF/view?usp=sharing"
    }
  },
  about: {
    heading: "About Me",
    bio: "I am a Computer Science student and Software Engineer passionate about building performant, scalable, and secure software systems. A journey driven by intense curiosity in understanding how complex distributed infrastructures work under the hood.",
    keyInterests: [
      "Backend Engineering",
      "System Design",
      "Cloud Computing",
      "Distributed Systems",
      "AI Applications",
      "Problem Solving"
    ],
    highlights: [
      {
        id: "highlight-backend",
        title: "Backend Development",
        description: "Designing robust server architectures, RESTful/gRPC APIs, microservices, and thread-safe systems using Go and Node.js."
      },
      {
        id: "highlight-fullstack",
        title: "Full Stack Development",
        description: "Crafting fully-integrated applications with interactive React.js frontends powered by reliable, scalable backends."
      },
      {
        id: "highlight-system",
        title: "System Design",
        description: "Studying load balancers, caching layers, horizontal partitioning, distributed queues, and reliable failover mechanisms."
      },
      {
        id: "highlight-learning",
        title: "Continuous Learning",
        description: "Constantly diving into academic papers, competing in coding marathons, and building high-performance sandbox services."
      }
    ]
  },
  skills: [
    {
      title: "Languages",
      skills: ["Python", "Java", "JavaScript", "Go"]
    },
    {
      title: "Web Frameworks",
      skills: ["Reactjs", "Nodejs", "SpringBoot"]
    },
    {
      title: "Databases and Microservices",
      skills: ["MySQL", "Docker", "Kafka"]
    }
  ] as SkillCategory[],
  projects: [
    {
      id: "hospital-frontdesk",
      name: "Hospital FrontDesk System",
      description: "A full-stack healthcare administration platform supporting appointment booking, doctor onboarding, queue management, and patient workflow automation.",
      features: [
        "Architected a full-stack healthcare administration platform using Next.js, FastAPI, SQLAlchemy, and SQLite, supporting appointment booking, doctor onboarding, queue management, and patient workflow automation.",
        "Engineered secure authentication and authorization using JWT, OAuth2 flows, and bcrypt password hashing, protecting sensitive medical administration operations and user data.",
        "Built and consumed 15+ RESTful API endpoints for appointment lifecycle management, doctor scheduling, queue operations, and account management, improving operational efficiency through automated workflows and centralized data management."
      ],
      stack: ["Next.js", "FastAPI", "SQLAlchemy", "SQLite", "JWT", "OAuth2"],
      image: "/images/hospital_frontdesk_1779801230297.png",
      github: "https://github.com/Shreshtvg/Hospital-FrontDesk-System",
      live: "https://hospital-front-desk-system.vercel.app/"
    },
    {
      id: "convo-chat",
      name: "Convo Chat Platform",
      description: "A sophisticated, high-concurrency Discord clone featuring real-time messaging, hierarchical channels, custom servers, and persistent direct messages.",
      features: [
        "Scalable Real-time Architecture: Built with a high-concurrency Go backend and a Redis Pub/Sub layer, the application ensures sub-millisecond message delivery and instant presence updates across multiple server instances.",
        "Comprehensive Social Ecosystem: Implements a sophisticated Discord-style organizational structure featuring hierarchical Servers and Channels, a complete Friendship lifecycle (optimized search, requests, and mutual confirmation), and persistent Direct Messaging.",
        "Enterprise-Grade Security & UX: Features robust JWT authentication with 1-hour session expirations, automatic inactivity timeouts, and rich messaging capabilities including WhatsApp-style replies, multipart image uploads, and secure multi-select bulk actions."
      ],
      stack: ["Reactjs", "Go(Fiber)", "PostgreSql", "Redis", "WebSockets", "JWT", "Docker"],
      image: "/images/project_convo_discord_1779797861085.png",
      github: "https://github.com/Shreshtvg/TheConvoChat",
      live: "https://github.com/Shreshtvg/TheConvoChat"
    },
    {
      id: "school-management",
      name: "School Management System",
      description: "A highly-scalable full-stack academic monitoring and administrative hub with fine-grained authorization policies.",
      features: [
        "Built a scalable full-stack School Management System using Spring Boot and Angular with JWT-based authentication and role-based authorization.",
        "Engineered RESTful APIs and a responsive frontend to manage student records, attendance, and courses, following clean architecture and optimized database interactions."
      ],
      stack: ["Java", "Spring Boot", "Angular", "JWT", "MySQL"],
      image: "/images/project_school_white_1779797880437.png",
      github: "https://github.com/Shreshtvg/SchoolManagementSystem",
      live: "https://github.com/Shreshtvg/SchoolManagementSystem"
    },
    {
      id: "rag-pdf-qa",
      name: "RAG-based PDF Question Answering System",
      description: "An intelligent Retrieval-Augmented Generation application that performs high-speed semantic retrieval on technical texts.",
      features: [
        "Designed and developed a Retrieval-Augmented Generation (RAG) application using Streamlit, FAISS, and transformer-based NLP models for textbook question answering.",
        "Built an embedding-based semantic search pipeline using SentenceTransformers to retrieve contextually relevant text chunks from PDF documents.",
        "Optimized application performance using model caching and efficient vector similarity search for low-latency document querying."
      ],
      stack: ["Python", "Streamlit", "FAISS"],
      image: "/images/project_github_1779794467857.png",
      github: "https://github.com/Shreshtvg/PDF-Chat-Assistant-RAG-Groq-FAISS",
      live: "https://ragpdfchatassistant.streamlit.app/"
    }
  ] as Project[],
  journey: [
    {
      year: "Nov 2025 - May 2026",
      title: "Manhattan Associates, Software Engineer Intern",
      description: "Integrated Carrier Select API with Manhattan WMS, troubleshooting OAuth2 client-credential and scope issues to stabilize carrier label generation and reduce outbound shipment integration failures.",
      details: [
        "Integrated Carrier Select API with Manhattan WMS, troubleshooting OAuth2 client-credential and scope issues to stabilize carrier label generation and reduce outbound shipment integration failures.",
        "Resolved issues across Java/Spring services, Oracle DB, Queues and Git-based deployments, improving system stability."
      ]
    },
    {
      year: "Feb 2025 - May 2025",
      title: "CCBD CDSAML Center PES UNIVERSITY, Project Intern",
      description: "Engineered an AI-powered trailer generation system that automatically extracts high-impact clips from full-length movies.",
      details: [
        "Engineered an AI-powered trailer generation system that automatically extracts high-impact clips from full-length movies by performing multi-modal emotion and genre classification using synchronized analysis of audio features, video frames, and speech-to-text transcripts."
      ]
    },
    {
      year: "June 2024 - Aug 2024",
      title: "WeCreateProblems, Software Engineer Intern",
      description: "Configured launch details on AppSumo and integrated candidate interview analysis alerts via Microsoft Teams.",
      details: [
        "Collaborated with the product team to configure and publish platform details for launch on AppSumo, enhancing marketing readiness.",
        "Contributed in service integration with MS Teams for notifications regarding candidate interview analysis."
      ]
    }
  ] as JourneyItem[],
  achievements: [] as Achievement[],
  learningInterests: [] as string[]
};
