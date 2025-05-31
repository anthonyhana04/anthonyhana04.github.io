// components/assets/data/projectsData.js
import assets from '../../utils/assets'
export const projectsData = [
  {
    id: 1,
    title: "MacPad",
    description: "MacPad is a feather‑light, all‑native notepad designed exclusively for macOS. Built with SwiftUI for a seamless modern interface and AppKit under the hood for rock‑solid integration, MacPad delivers a refreshingly simple yet powerful writing experience",  
    image: assets['macpad.jpg'],
    imagescale: "scale-100",
    tech: ["Swift", "AppKit", "SwiftUI", "Swift Concurrency"],
    githubUrl: "https://github.com/anthonyhana04/MacPad",
    category: "Text Editor"
  },
  {
    id: 2,
    title: "Coding Workshop Mentor", 
    description: "As a Coding Workshop Mentor at McMaster Start Coding, I introduce students to functional programming concepts using Elm and Haskell. I focus on teaching core principles like pure functions, immutability, and declarative logic, while guiding students through building interactive projects that strengthen their computational thinking and problem-solving skills.",
    image: assets['msclogo.jpg'],
    imagescale: "scale-10",
    tech: ["Elm", "Haskell", "Teaching"],
    category: "Voluenteer"
  },
  {
    id: 3,
    title: "Portfolio",
    description: "My portfolio is a sleek, single-page React site styled with Tailwind CSS that puts your projects and skills front and center. It features smooth scroll-in animations, interactive project previews, and a fully responsive layout for an engaging, polished browsing experience on any device.",
    image: assets['portfolio.jpg'],
    tech: ["React", "JavaScript", "Tailwind CSS", "HTML"],
    githubUrl: "https://github.com/anthonyhana04/portfolio",
    category: "Web App"
  }
];

// grab proj id
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === id);
};

// grab proj category
export const getProjectsByCategory = (category) => {
  return projectsData.filter(project => project.category === category);
};

// grab proj tech
export const getProjectsByTech = (technology) => {
  return projectsData.filter(project => 
    project.tech.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

// grab unique categories
export const getAllCategories = () => {
  return [...new Set(projectsData.map(project => project.category))];
};

// grab unique tech
//export const getAllTechnologies = () => {
//  const allTech = projectsData.flatMap(project => project.tech);
//  return [...new Set(allTech)].sort();
//};
