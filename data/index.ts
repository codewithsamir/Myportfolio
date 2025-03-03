import { Github, Linkedin, Youtube } from "lucide-react";

const data = {
  home: {
    name: "Samir Rain", // Update to your name
    description:
      "Full Stack Developer | React, Next.js, Django, and More", 
    cvLink: "#contact",
  },
  sidebar: {
    links: [
      {
        name: "github",
        link: "https://github.com/CodeWithSamir", // Update with your GitHub link
        icon: Github,
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/codewithsamir/", // Update with your LinkedIn link
        icon: Linkedin,
      },
      {
        name: "youtube",
        link: "https://www.youtube.com/@CodeWithSamir", // Your YouTube link
        icon: Youtube,
      },
    ],
  },
  projects: {
    projects: [
      {
        id: 1,
        title: "YouTube Clone",
        description:
          "A fully functional YouTube clone featuring video uploads, streaming, and user authentication. Technologies Used: Next.js, React.js, Tailwind CSS, Firebase.",
        image: "/projects-imgs/youtube-clone.png",
        previewLink: "https://youtube-clone.example.com",
      },
      {
        id: 2,
        title: "E-commerce Website",
        description:
          "An online store with secure payment integration, user authentication, and product management. Technologies Used: Next.js, Tailwind CSS, React.js, Django, Stripe API.",
        image: "/projects-imgs/ecommerce.png",
        previewLink: "https://ecommerce.example.com",
      },
      {
        id: 3,
        title: "Portfolio Website",
        description:
          "A modern portfolio website showcasing my projects, skills, and experience. Technologies Used: Next.js, React.js, Tailwind CSS.",
        image: "/projects-imgs/portfolio.png",
        previewLink: "https://mahatoarjun.com.np", // Update this to your portfolio website
      },
    ],
  },
  technologies: {
    skills: [
      {
        id: 1,
        name: "html",
        src: "/skills/html.svg",
        link: "https://en.wikipedia.org/wiki/HTML",
      },
      {
        id: 2,
        name: "css",
        src: "/skills/css.svg",
        link: "https://en.wikipedia.org/wiki/CSS",
      },
      {
        id: 3,
        name: "javascript",
        src: "/skills/javascript.svg",
        link: "https://en.wikipedia.org/wiki/JavaScript",
      },
      {
        id: 4,
        name: "typescript",
        src: "/skills/typescript.svg",
        link: "https://en.wikipedia.org/wiki/TypeScript",
      },
      {
        id: 5,
        name: "react",
        src: "/skills/react.svg",
        link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      },
      {
        id: 6,
        name: "tailwind",
        src: "/skills/tailwind.svg",
        link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
      },
      {
        id: 7,
        name: "nextJS",
        src: "/skills/nextJS.svg",
        link: "https://en.wikipedia.org/wiki/Next.js",
      },
      {
        id: 8,
        name: "django",
        src: "/skills/django.svg",
        link: "https://en.wikipedia.org/wiki/Django_(web_framework)",
      },
      {
        id: 9,
        name: "mongodb",
        src: "/skills/mongoDB.svg",
        link: "https://en.wikipedia.org/wiki/MongoDB",
      },
      {
        id: 10,
        name: "git",
        src: "/skills/git.svg",
        link: "https://en.wikipedia.org/wiki/Git",
      },
    ],
  },
  contact: {
    email: "codewithsamir@gmail.com", // Update with your email
  },
};

export default data;
