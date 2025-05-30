// src/components/about.jsx
import React from 'react';
import useFadeOnScroll from '../hooks/useFadeOnScroll';

const About = () => {
  // data
  const educationData = {
    institution: "McMaster University",
    department: "Department of Mathematics & Statistics",
    period: "September 2022 - April 2027",
    degree: "Honours Mathematics and Computer Science (B.Sc)",
    coursework: "Data Structures & Algorithms, Computer Architechture, Databases, Natural Language Processing, Numerical Linear Algebra, Mathematical Modeling, Discreate Mathematics."
  };

  useFadeOnScroll('.about-content', {threshold: 0.4, rootMargin: '0px'});
  useFadeOnScroll('.education-content', {threshold: 0.4, rootMargin: '0px'});

  return (
    <section id="about" className="bg-white about-section py-20">
      <div className="container max-w-7xl mx-auto px-8 lg:px-6 md:px-4">
        <div className="about-content grid grid-cols-1 md:grid-cols-[3.3fr_1.7fr] gap-16 items-center mb-18 animate-fade-in">
          <div className="order-2 md:order-1">
            <h1 className="text-sm font-medium text-gray-500 tracking-widest uppercase mb-8 m-0">
              About Me
            </h1>
            <h2 className="text-3xl font-normal text-gray-900 mb-2 md:text-2xl sm:text-xl">
              Let me tell you a little about myself...
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 md:text-base sm:text-sm">
              I'm a passionate developer who treats every “What if…?” as an invitation to build. 
              Supported by my background in math and computer science, I enjoy bringing ideas to life and tackling real-world problems one solution at a time.
              I’m always learning, always iterating, and always up for the next challenge, preferably with a good playlist and a room full of creative minds.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 md:text-base sm:text-sm">
              As a multidisciplinary engineer, I thrive on tackling challenges that impact real people at scale. I leverage my passion for learning 
              and diverse technical expertise to bring projects from prototype to production. Whether I’m working on a full-stack
              web app, developing software, or integrating machine-learning features, I’m always driven by the opportunity to showcase my skills through innovation. 
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-0 md:text-base sm:text-sm">
              During my experiences voluenteering or while working with clubs, and projects, I was fortunate enough to develop awesome 
              software pertaining to machine learning, full-stack development, and software arcitecture. I worked with 
              many great people in small and large teams, allowing me to learn from my mentors.
            </p>
          </div>
          <div className="about-image flex justify-center md:justify-end order-1 md:order-2">
            <img
              src="src/assets/images/profile-photo-copy.jpg"
              alt="Anthony Hana"
              className="w-94 rounded-xl shadow-xl border border-gray-200 hover:scale-105 transition-transform duration-300 md:w-80 sm:w-70"
            />
          </div>
        </div>

        <div className="education-section border-t border-gray-200 pt-12 md:pt-8 sm:pt-4">
          {/* move the label to the top-left of this container */}
          <h3
            className="section-label text-sm font-medium text-gray-500 tracking-widest uppercase mb-8"
          >
            EDUCATION
          </h3>
          <div className="education-content grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-32 items-center animate-fade-in">
            
            {/* Image on the left */}
            <div className="education-image flex justify-center md:justify-start">
              <img
                src="src/assets/images/university-hall.jpg"
                alt="Hamilton Hall at McMaster University"
                className="w-full h-full rounded-xl shadow-xl border border-gray-200
                          transition-transform duration-300 hover:scale-105
                          lg:h-76 md:h-100 sm:h-84"
              />
            </div>
            <div className="education-text flex flex-col justify-center">
              <h4 className="institution-name text-5xl font-semibold text-gray-900 mb-2 leading-tight md:text-4xl sm:text-3xl">
                {educationData.institution}
              </h4>
              <p className="department-name text-2xl font-normal text-gray-600 mb-0 md:text-xl sm:text-lg">
                {educationData.department}
              </p>
              <p className="education-period text-base text-gray-500 mb-4">
                {educationData.period}
              </p>
              <p className="degree-info text-lg font-normal text-gray-900 mb-4 leading-normal md:text-base">
                {educationData.degree}
              </p>
              <div className="coursework-section">
                <p className="coursework-text text-base text-gray-600 leading-relaxed m-0 sm:text-sm">
                  <strong className="text-gray-900 font-medium">Relevant Coursework:</strong>{' '}
                  {educationData.coursework}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
  );
};

export default About;