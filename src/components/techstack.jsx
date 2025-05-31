// src/components/TechStack.jsx
import React from 'react';
import Icon from '../components/icon';

// data
const techData = {
  languages: ['JavaScript', 'Python', 'Swift', 'ELM', 'C++', 'SQL', 'R', 'Haskell'],
  frameworks: ['React', 'Node.js', 'Flask', 'Tailwind CSS', 'PyTorch', 'Pandas', 'Numpy', 'Scikit-learn'],
  technologies: ['Jira', 'PostgreSQL', 'GCP', 'Docker', 'AWS', 'Git/GitHub', 'ESLint'],
  devTools: ['Overleaf', 'Figma', 'DBeaver', 'NetBeans', 'Jupyter', 'RStudio', 'Intellij']
};

// map disp -> icon
const iconKeyMap = {
  'JavaScript': 'javascript',
  'Python': 'python',
  'Swift': 'swift',
  'ELM': 'elm',
  'C++': 'cplusplus',
  'SQL': 'sql',
  'R': 'r',
  'Haskell': 'haskell',

  'React': 'react',
  'Node.js': 'nodejs',
  'Flask': 'flask',
  'Tailwind CSS': 'tailwind',
  'PyTorch': 'pytorch',
  'Pandas': 'pandas',
  'Scikit-learn': 'scikit-learn',
  'Numpy': 'numpy',

  'Jira': 'jira',
  'PostgreSQL': 'postgresql',
  'GCP': 'googlecloud',
  'Docker': 'docker',
  'AWS': 'aws',
  'ESLint': 'eslint',
  'Git/GitHub': 'github',

  'Overleaf': 'overleaf',
  'Figma': 'figma',
  'DBeaver': 'dbeaver',
  'RStudio': 'rstudio',
  'Intellij': 'intellij',
  'NetBeans': 'netbeans',
  'Jupyter': 'jupyter'
};

const TechStack = () => (
  <section id="techstack" className="py-20 pb-40 relative">
    <div className="container mx-auto px-8 lg:px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Tech Stack</h2>
        <p className="text-gray-600 mt-2">Tools & technologies I work with</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {Object.entries(techData).map(([key, items]) => {
          const title =
            key === 'devTools' ? 'Developer Tools' : key.charAt(0).toUpperCase() + key.slice(1);
          
          return (
            <div
              key={key}
              className="relative bg-white rounded-2xl p-6 overflow-hidden hover:shadow-xl transition-shadow duration-200"
            >
              <span
                className={`absolute left-0 top-0 h-2 w-16 bg-${
                  key === 'languages'
                    ? 'indigo'
                    : key === 'frameworks'
                    ? 'emerald'
                    : key === 'technologies'
                    ? 'amber'
                    : 'rose'
                }-500`}
              />

              <h3 className="relative text-2xl font-semibold text-gray-800 mb-4">
                {title}
              </h3>

              <div className="flex flex-wrap gap-6">
                {items.map((name) => {
                  const iconKey = iconKeyMap[name] || 'file';
                  return (
                    <div key={name} className="flex flex-col items-center w-24 group">
                      <Icon
                        name={iconKey}
                        size={48}
                        color="currentColor"
                        className="mb-2"
                      />
                      <span className="text-sm text-gray-700 text-center">{name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* banner overlapping the bottom of techstack */}
      <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2 flex justify-center z-20">
        <div className="max-w-6xl w-full mx-auto bg-gradient-to-r from-(--color-p) to-(--color-lp) rounded-xl p-6 flex flex-col md:flex-row items-center justify-between text-white shadow-lg">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold">Let's Work Together!</h2>
            <p className="text-base opacity-90">
              Send me a quick message to discuss future opportunities.
            </p>
          </div>
          <a
            href="mailto:anthonyhana04@gmail.com"
            className="inline-block px-6 py-2 border border-white rounded-lg font-medium text-white hover:bg-white hover:text-indigo-500 transition"
          >
            Send Email
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default TechStack;
