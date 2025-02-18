import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  redux,
  tailwind,
  figma,
  docker,
  net2all,
  cyberspector,
  tensorunit,
  sonar,
  att,
  carrent,
  jobit,
  tripguide,
  ayifa,
  python,
  c,
  c_p,
  nest,
  next,
  np,
  pd,
  plt,
  skl,
  tf,
  pytorch,
  wim,
  ouebx
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Modern UI",
    icon: mobile,
  },
  {
    title: "Software",
    icon: web,
  },
  {
    title: "Machine learning",
    icon: backend,
  },
  {
    title: "Robotics",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Sklearn",
    icon: skl,
  },
  {
    name: "C++",
    icon: c_p,
  },
  {
    name: "NextJS",
    icon: next,
  },
  {
    name: "NestJS",
    icon: nest,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Pyhton",
    icon: python,
  },
  {
    name: "docker",
    icon: docker,
  },{
    name: "Tensorflow",
    icon: tf,
  },
  {
    name: "Pytorch",
    icon: pytorch,
  },
];

const experiences = [
  {
    title: "Web developer (intern)",
    company_name: "AYIFA",
    icon: ayifa,
    iconBg: "#383E56",
    date: "Apr 2022 - Jul 2022",
    points: [
      "Application programming interface",
      "Landing page development",
      "I learn a lot of about competitive programming, data structure importance",
      "Using deeply mongoDB with express",
      "Help colleague in programming"
    ],
  },
  {
    title: "Software Developer",
    company_name: "Sonar",
    icon: sonar,
    iconBg: "#383E56",
    date: "Oct 2022 - Sep 2023",
    points: [
      "Develop rent management fullstack application",
      "Build system design for backend setup",
      "develop mobile application for managing electric meter",
      "Talk about AI advantage",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Net2All",
    icon: net2all,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Developing and maintaining API using NodeJS(NestJS)",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "Cyberspector",
    icon: cyberspector,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Mars 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Developing and maintaining API using NodeJS(NestJS) with microservice architecture",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Head R & D", //CTO & AI Developer
    company_name: "TensorUnit",
    icon: tensorunit,
    iconBg: "#E6DEDD",
    date: "", //April 2024 - Present
    points: [
      "Developing AI models for specifis problems",
      "Research about Machine Learning algorithm",
      "Talk about AI, Machine learning, Deep learning",
      "Make AI model available on modern and react UI application",
      "Participating in code reviews",
    ],
  },
  {
    title: "AI & Software Developer",
    company_name: "WIM",
    icon: wim,
    iconBg: "#E6DEDD",
    date: "April 2024 - Present",
    points: [
      "Developing AI models for specifis problems",
      "Research about Machine Learning algorithm",
      "Reading research paper",
      "R & D process",
      "Develop modern web app with ReactJs"
    ],
  },
  {
    title: "Software engineer",
    company_name: "Ouebx",
    icon: ouebx,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Prompt engineering for GPT",
      "Frontend engineering",
      "Developing SDK for spelling",
      "Frontend system design",
      "MVP functionnalities details"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Genius",
    description:
      "Web-based platform have misic, audio, code generation and chat functionalities",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Lambda",
    description:
      "Web application for multilingual e-learning containt. It have auto-dubbing functionnality",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Django Rest",
        color: "green-text-gradient",
      },
      {
        name: "AI model",
        color: "pink-text-gradient",
      },
      {
        name: "Whisper",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Action Feed",
    description:
      "A comprehensive that help chief to make a good decision based on their clients comments or reviews?",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "AI model",
        color: "green-text-gradient",
      },
      {
        name: "Hugging face",
        color: "pink-text-gradient",
      },
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
