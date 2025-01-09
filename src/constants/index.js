import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpeg";

export const HERO_CONTENT = `I am a passionate developer passionate about applying my techincal knowledge in creating real world applications to solve practical problems.`;

export const ABOUT_TEXT = `I am a dedicated developer with a passion for creating efficient and user-friendly applications. I have worked with a variety of technologies, including React, Node.js, MySQL, PostgreSQL, and MongoDB.I also have experience working on latest technologies such as GenAI and built several projects using Machine Learning Algorithms. I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

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
  phoneNo: "+91 7013447479 ",
  address:"Vijayawada,India📍",
  email: "kushalthandra@gmail.com",
  linkedin: "https://www.linkedin.com/in/kushal-thandra-7a8",
  github: "https://github.com/kushalthandra",
  location: "India",
};
