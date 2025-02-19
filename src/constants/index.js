import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpeg";

export const HERO_CONTENT = `You have a project idea but do not know how to build it? No worries we are here to help you and guide you through it.`;

export const ABOUT_TEXT = `We guide you and help you build projectsin various domains such as machine learning,IOT,deep learning, NLP, renewable energy, Circuit design and a lot more Turn ideas into impactful projects along with conference and journal paper publications. Our expert team is dedicated to delivering top-tier writing and research services that help you shine in the academic and professional world.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - Aug 2024",
    role: "Technical Intern",
    company: "Informategy Analytical Solutions Pvt. Ltd.",
    description: `Collaborated with a team of passionate individuals in building a GenAI based compilance chatbot to resolve customer policy queries`,
    technologies: ["Javascript", "Node.js", "Express.js", "PostgresSQL","GenAI","API"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "TailwindCSS", "React"],
  },
  {
    title:"OwlitasAI",
    image: project2,
    description:"Developed an AI-powered chatbot designed to enhance customer service by understanding company policies and integrating with social platforms.",
    technologies:["Node.js","Express.js","PostgreSQL","GenAI","API"],
    url:"https://owlitas.com/",
  },
  {
    title: "Breast Cancer Detection using Gene Analysis",
    image: project3,
    description:
      "Developed a breast cancer detection and prediction model that works with an accuracy of 96% that uses gene based data to classify breast cancer into its different subtypes",
    technologies: ["Python", "Pandas","Numpy","sklearn"],
  },
  {
    title: "Audio Sentiment Detection using Hybrid Analysis Model",
    image: project4,
    description:
      " Engineered amachine learningmodel that transcribed speech to text and performed sentiment analysis,generating product reports and reducing customer support response time by 40% through actionable insights.",
    technologies: ["Python", "NLP", "API"],
  },
];

export const CONTACT = {
  phoneNo: "+91 9666572895 ",
  email: "helpdesk.write@gmail.com",
};
