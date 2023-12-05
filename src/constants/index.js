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
    title: "Modern UI creator",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Devops",
    icon: backend,
  },
  {
    title: "Data scientist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Pandas",
    icon: pd,
  },
  {
    name: "Matplotlib",
    icon: plt,
  },
  {
    name: "Sklearn",
    icon: skl,
  },
  {
    name: "C",
    icon: c,
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
    name: "Numpy",
    icon: np,
  },
];

const experiences = [
  {
    title: "Full stack developer, AI interest",
    company_name: "AYIFA",
    icon: ayifa,
    iconBg: "#383E56",
    date: "Apr 2022 - Sep 2022",
    points: [
      "Application programming interface",
      "Landing page development",
      "I learn a lot of about competitive programming, data structure importance",
      "Using deeply mongoDB with express",
      "Talk about AI",
      "Help colleague in programming"
    ],
  },
  {
    title: "Datascientist",
    company_name: "Africa Tech Up tour",
    icon: att,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Jun 2023",
    points: [
      "It was a great experience",
      "I reviewed the concepts of datascientist from start to finish with data experts.",
      "We worked on statistics, probability, data analysis, data engineering, machine learning, deeplearning, LLM based on GPT and BERT.",
      "I then contributed to the development of the ActionFeed platform, a platform based on our BERT model, enabling decision-makers to make decisions based on the positive and negative opinions of users of their platforms in Benin and Africa.",
      "I'm still learning about MLOPS best practices."
    ],
  },
  {
    title: "Software engineer & AI consultant",
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
    title: "Software Engineer",
    company_name: "Cyberspector",
    icon: cyberspector,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Developing and maintaining API using NodeJS(NestJS) with microservice architecture",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Co-founder & AI scientist",
    company_name: "TensorUnit",
    icon: tensorunit,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Developing AI models for specifis problems",
      "Research about Machine Learning algorithm",
      "Talk about AI, Machine learning, Deep learning",
      "Make AI model available on modern and react UI application",
      "Participating in code reviews",
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
