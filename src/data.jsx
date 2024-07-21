import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiStyledcomponents } from "react-icons/si";
import { SiDaisyui } from "react-icons/si";
export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#about", text: "Contact" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },

  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React including knowledge of  Redux ,  React Router , React query with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Tailwind CSS",
    icon: <BiLogoTailwindCss className="h-16 w-16 text-emerald-500" />,
    text: "Ability to implement Tailwind CSS to optimize design  performance and translating design mockups into clean, maintainable code.",
  },

  {
    id: nanoid(),
    title: "Styled Components",
    icon: <SiStyledcomponents className="h-16 w-16 text-emerald-500" />,
    text: "Adept at using Styled Components to create dynamic, reusable styles in React applications. ",
  },

  {
    id: nanoid(),
    title: "Daisy UI",
    icon: <SiDaisyui className="h-16 w-16 text-emerald-500" />,
    text: "Experienced with DaisyUI for rapid, customizable component development in Tailwind CSS. Proficient in leveraging pre-built components to streamline design and enhance UI consistency.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url: "https://tea-station-url.netlify.app/",
    github: "https://github.com/rishinmather/Tea-station-",
    title: "Tea Station",
    text: "Tea station website showcasing  web development using only HTML and CSS",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url: "https://comfystore-ecommerce.netlify.app/",
    github: "https://github.com/rishinmather/comfyStore-website",
    title: "Comfy Store",
    text: "Fully functional  E-commerce  website of a  high end  furniture brand called Comfy Store built using React , React router , Redux ,Tailwind CSS ,Daisy UI ",
  },
  {
    id: nanoid(),
    img: "https://www.themexpert.com/images/easyblog_articles/2877/b2ap3_large_37.jpg",
    url: "https://unsplash-api-react-query.netlify.app/",
    github: "https://github.com/rishinmather/Unsplash-API",
    title: "Unsplash API",
    text: " SPA clone  of Unsplash built with React where we use React-Query to communicate with Unsplash API server and allow users to  search  and fetch  Images",
  },
];
