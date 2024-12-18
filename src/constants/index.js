import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C#",
    icon: backend,
  },
  {
    name: ".NET Core",
    icon: backend,
  },
  {
    name: "Angular",
    icon: web,
  },
  {
    name: "Azure",
    icon: web,
  },
  {
    name: "SQL Server",
    icon: backend,
  },
  {
    name: "GraphQL",
    icon: backend,
  },
  {
    name: "REST API",
    icon: backend,
  },
  {
    name: "Microservices",
    icon: backend,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Software Development Specialist",
    company_name: "Primary Health Care Corporation",
    icon: "https://ik.imagekit.io/quadrate/Primary-Health-Care-Corporation.png?updatedAt=1733949029677",
    iconBg: "#FFFFFF",
    date: "July 2022 - Present",
    points: [
      "Leading development of enterprise-level applications using .NET Core and modern web technologies",
      "Architecting microservices-based solutions with focus on scalability and performance",
      "Implementing CI/CD pipelines and DevOps practices",
      "Mentoring junior developers and conducting code reviews",
    ],
  },
  {
    title: "Senior Full-stack Engineer",
    company_name: "Quadrate Tech Solutions",
    icon: "https://ik.imagekit.io/quadrate/QTS%20Logo%20Primary.png?updatedAt=1733854434969",
    iconBg: "#FFFFFF",
    date: "July 2020 - June 2022",
    points: [
      "Developed and maintained administration module for Hotel ERP SaaS solution",
      "Implemented mail service and SMS gateway using Azure Functions and Logic Apps",
      "Enhanced system scalability using Cosmos Database with SQL API",
      "Developed Angular UIs and integrated microservices using Azure Service Bus and RabbitMQ",
    ],
  },
  {
    title: "Dot NET Engineer",
    company_name: "Voigue Private Limited",
    icon: "https://ik.imagekit.io/quadrate/logo-PNG-300x72-1.png?updatedAt=1733949152854",
    iconBg: "#FFFFFF",
    date: "Nov 2019 - June 2020",
    points: [
      "Developed Backend API with .NET Core for SmartPABX cloud-based phone system",
      "Updated existing PABX legacy system to latest version",
      "Optimized user interface by converting WinForms to WPF",
      "Implemented dynamic user interface functions",
    ],
  },
  {
    title: "Associate Full Stack-Engineer",
    company_name: "Virtusa Private Limited",
    icon: "https://ik.imagekit.io/quadrate/images.jpeg?updatedAt=1733949236783",
    iconBg: "#FFFFFF",
    date: "Jan 2019 - October 2019",
    points: [
      "Developed web application for McDonald's Workforce Operations Labor Forecasting",
      "Implemented new features and optimizations",
      "Maintained perfect client scorecards throughout the project",
      "Worked with Angular 6, .NET Core 2.0, and Azure services",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Nemico Holdings",
    icon: "https://ik.imagekit.io/quadrate/Nemioc%20Holdings.jpg?updatedAt=1733949381218",
    iconBg: "#FFFFFF",
    date: "Jan 2016 - Dec 2018",
    points: [
      "Developed and integrated POS system with inventory database for real-time updates",
      "Implemented cloud-based enterprise inventory management system using ASP.NET (4.8)",
      "Successfully migrated reporting system from Crystal Reports to iTextSharp",
      "Utilized C#.NET, Visual Studio 2015, SQL Server 2012, and ASP.NET for development",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Olayan (Saudi Arabia)",
    icon: "https://ik.imagekit.io/quadrate/download.png?updatedAt=1733949542846",
    iconBg: "#FFFFFF",
    date: "June 2012 - July 2015",
    points: [
      "Centralized and streamlined the online order-taking process",
      "Enhanced user experience by implementing real-time notifications using SignalR",
      "Successfully replaced Box View with PDF.js for improved document handling",
      "Worked with .NET Framework 4.0, SignalR, ASP.NET Web API, and SQL Server 2008 R2",
    ],
  },
  {
    title: "Junior Developer",
    company_name: "QTS Private Limited",
    icon: "https://ik.imagekit.io/quadrate/QTS-Logo-%20emposed.png?updatedAt=1722424244082",
    iconBg: "#FFFFFF",
    date: "Aug 2009 - April 2012",
    points: [
      "Developed field service application for LECO Energy's Field Report Writer/Total Maintenance Service",
      "Successfully reverse-engineered Office Info Path 2003 for enhanced functionality",
      "Developed and optimized add-ons while maintaining application performance",
      "Improved team efficiency in feature implementations through streamlined processes",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
