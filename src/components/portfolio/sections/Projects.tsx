import React, { useState } from "react";
import { ExternalLinkIcon, GithubIcon, MaximizeIcon } from "lucide-react";
const ProjectCard = ({
  title,
  description,
  image,
  // tags,
  // demoLink,
  codeLink,
  onClick,
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
      <div
        className="h-48 overflow-hidden relative group cursor-pointer"
        onClick={onClick}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-indigo-900 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <MaximizeIcon className="h-10 w-10 text-white" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        {/* <div className="flex flex-wrap gap-2 mb-4"> */}
        {/* {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs"
            >
              {tag}
            </span>
          ))} */}
        {/* </div> */}
        <div className="flex space-x-3">
          {/* <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <ExternalLinkIcon className="h-4 w-4 mr-1" />
            Live Demo
          </a> */}
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <GithubIcon className="h-4 w-4 mr-1" />
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 sm:h-80 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {project.title}
          </h2>
          {/* <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => <span key={tag} className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs">
                {tag}
              </span>)}
          </div> */}
          <p className="text-gray-600 mb-6">
            {project.fullDescription || project.description}
          </p>
          <h3 className="font-bold text-gray-900 mb-2">Key Features</h3>
          {/* <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-1">
            {project.features.map((feature, index) => <li key={index}>{feature}</li>)}
          </ul> */}
          <h3 className="font-bold text-gray-900 mb-2">Technologies Used</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            {/* <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
              <ExternalLinkIcon className="h-4 w-4 mr-2" />
              Live Demo
            </a> */}
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
            >
              <GithubIcon className="h-4 w-4 mr-2" />
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      id: 1,
      title: "DevLang",
      description:
        "Custom programming language inspired by Java and C with custom grammar, operators, and robust parsing using DCG.",
      fullDescription:
        "Built a custom language interpreter using Definite Clause Grammar (DCG), featuring structured syntax and user-defined operators. Developed a complete toolchain—including lexical analyzer, parser, and runtime—to enable smooth command-line execution. Prioritized clean AST generation and robust error handling for reliable and maintainable code interpretation.",
      image: "/devLangImg.png",
      technologies: ["Python", "Prolog", "Git & GitHub", "VSCode", "ANTLR"],
      codeLink: "https://github.com/Kruthi04/DevLANG",
      category: "frontend",
    },
    {
      id: 2,
      title: "Musical Chord Detection",
      description:
        "A machine learning-powered tool that identifies traditional Indian melodies by analyzing musical patterns and structures.",
      fullDescription:
        "Analyzed chord patterns using Python and MySQL to extract insights grounded in music theory, leveraging machine learning algorithms like K-Nearest Neighbors (KNN) and Random Forest for accurate classification. Processed and cleaned diverse musical datasets using pandas and NumPy, applying effective feature engineering and algorithm tuning to train models that achieved 96% accuracy. Integrated MySQL for structured data management and scalable storage, and combined audio pattern recognition with statistical modeling to decode complex harmonic progressions.",
      image: "/musicalChordImg.png",
      technologies: ["Python", "JavaScript", "MySQL", "pandas", "numpy"],
      codeLink:
        "https://github.com/Kruthi04/Machine-Learning-Driven-Musical-Chord-Detection",
      category: "frontend",
    },
    {
      id: 3,
      title: "CrimeWare",
      description:
        "Semantic knowledge graph built with OWL and GraphDB to analyze crime patterns using advanced SPARQL queries.",
      fullDescription:
        "Modeled semantic ontologies in Protégé and refined RDF data using OntoRefine to ensure structured, meaningful representation of linked data. Queried GraphDB using SPARQL to extract complex relationships and insights from the knowledge base. Built an interactive frontend using React, delivering intuitive visualizations and seamless user experience. Deployed the application as a static web app on Microsoft Azure, enabling streamlined access and updates through CI/CD automation. Delivered real-time data insights through dynamic linked data visualizations and in-depth knowledge graph analysis, supporting data-driven decision-making and semantic understanding.",
      image: "/image.png",
      technologies: ["OWL Ontology", "GraphDB", "SPARQL", "React.js", "Azure"],
      codeLink: "https://github.com/Kruthi04/Integrated-Crime-Data-Analysis",
      category: "frontend",
    },
    // {
    //   id: 4,
    //   title: 'Weather Dashboard',
    //   description: 'A weather application that provides current conditions and forecasts for locations worldwide.',
    //   fullDescription: 'A weather application that provides current conditions and forecasts for locations worldwide. Features a clean, intuitive interface and leverages multiple weather APIs for accurate data.',
    //   image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    //   tags: ['React', 'API', 'Frontend'],
    //   technologies: ['React', 'OpenWeather API', 'Geolocation API', 'CSS Modules', 'Axios'],
    //   features: ['Current weather conditions display', '5-day weather forecast', 'Location search and geolocation', 'Weather alerts and notifications', 'Unit conversion (metric/imperial)'],
    //   demoLink: 'https://example.com',
    //   codeLink: 'https://github.com',
    //   category: 'frontend'
    // }, {
    //   id: 5,
    //   title: 'Fitness Tracker',
    //   description: 'A mobile-first web application for tracking workouts, nutrition, and fitness goals.',
    //   fullDescription: 'A mobile-first web application for tracking workouts, nutrition, and fitness goals. Helps users maintain a healthy lifestyle with progress tracking and personalized recommendations.',
    //   image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    //   tags: ['React', 'Fullstack', 'Mobile'],
    //   technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'Progressive Web App'],
    //   features: ['Workout tracking and planning', 'Nutrition logging and analysis', 'Goal setting and progress tracking', 'Data visualization with charts', 'Offline functionality with PWA'],
    //   demoLink: 'https://example.com',
    //   codeLink: 'https://github.com',
    //   category: 'fullstack'
    // }, {
    //   id: 6,
    //   title: 'Content Management System',
    //   description: 'A custom CMS built for bloggers and content creators with a focus on performance and SEO.',
    //   fullDescription: 'A custom Content Management System built specifically for bloggers and content creators with a focus on performance and SEO. Provides an intuitive interface for managing digital content efficiently.',
    //   image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    //   tags: ['Node.js', 'Backend', 'CMS'],
    //   technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'AWS', 'SEO Optimization'],
    //   features: ['Content creation and management', 'User and role management', 'Media library and asset management', 'SEO tools and analytics', 'Performance optimization'],
    //   demoLink: 'https://example.com',
    //   codeLink: 'https://github.com',
    //   category: 'backend'
    // }
  ];
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.category === filter || project.tags.includes(filter)
        );
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            My Projects
          </h2>
          <div className="mt-2 w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600">
            Showcasing my latest work and personal projects
          </p>
        </div>
        {/* <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'all' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
              All Projects
            </button>
            <button onClick={() => setFilter('frontend')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'frontend' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
              Frontend
            </button>
            <button onClick={() => setFilter('backend')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'backend' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
              Backend
            </button>
            <button onClick={() => setFilter('fullstack')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'fullstack' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
              Full Stack
            </button>
          </div>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No projects found with the selected filter.
            </p>
          </div>
        )}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};
export default Projects;
