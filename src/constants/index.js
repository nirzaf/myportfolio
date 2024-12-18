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
    title: "Software Development Specialist",
    company_name: "Primary Health Care Corporation",
    icon: web,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Migrated REST APIs to GraphQL and integrated Azure Active Directory for authentication",
      "Optimized query performance with Azure Redis caching",
      "Migrated data from SQL Server to FHIR database",
      "Developed Open API system for third-party service integrations",
    ],
  },
  {
    title: "Senior Full-stack Engineer",
    company_name: "Quadrate Tech Solutions",
    icon: web,
    iconBg: "#E6DEDD",
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
    icon: backend,
    iconBg: "#383E56",
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
    icon: web,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - October 2019",
    points: [
      "Developed web application for McDonald's Workforce Operations Labor Forecasting",
      "Implemented new features and optimizations",
      "Maintained perfect client scorecards throughout the project",
      "Worked with Angular 6, .NET Core 2.0, and Azure services",
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
