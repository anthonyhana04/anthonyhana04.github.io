import React from 'react';
import useFadeOnScroll from '../hooks/useFadeOnScroll';
import ProjectCard from '../components/projectcard';
import { projectsData } from '../assets/data/projectsData';

const Projects = () => {
  useFadeOnScroll('.project-card', {
  threshold: 0.3,
  rootMargin: '0px'
})
  return (
    <section id="experiences" className="projects-section py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-8 lg:px-6 md:px-4">
        <div className="projects-header text-center mb-20 max-w-3xl mx-auto">
          <h2 className="section-title text-4xl font-bold text-gray-900 mb-4">
            Featured Work
          </h2>
          <p className="projects-subtitle text-lg text-gray-600 leading-relaxed mt-4 mb-0">
            Selected projects and experiences showcasing different approaches and creative solutions
          </p>
        </div>

        {/* projects container */}
        <div className="projects-container max-w-6xl mx-auto mb-16 flex flex-col gap-3 animate-fade-in lg:gap-5 md:gap-4">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isReverse={index % 2 === 1}
            />
          ))}
        </div>

        {/* footer */}
        <div className="projects-footer text-center max-w-xl mx-auto">
          <div className="footer-content p-12 bg-gray-50 rounded-xl border border-gray-200 md:p-8 sm:p-6">
            <p className="text-lg text-gray-600 mb-6 m-0">
              Interested in learning more about my projects?
            </p>
            <a 
              href="https://github.com/anthonyhana04"
              className="contact-cta inline-block px-6 py-3 bg-gray-900 text-white rounded-md font-medium text-base transition-all duration-200 hover:bg-gray-700 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              Take a Look →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;