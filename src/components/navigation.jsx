// src/components/navigation.jsx
import React from 'react';
import { smoothScrollTo } from '../utils/smoothScroll';
import useScrollSpy from '../hooks/useScrollSpy';
import Icon from './icon';
import assets from '../utils/assets';

const Navigation = () => {
  const activeSection = useScrollSpy(['home', 'about', 'techstack', 'experiences', 'contact']);

  const socials = [
    {
      name: "linkedin",
      link: "https://linkedin.com/in/anthony-hana-797a3a208/",
      hoverColor: "hover:text-(--color-lb)",
      label: "LinkedIn"
    },
    {
      name: "github",
      link: "https://github.com/anthonyhana04",
      hoverColor: "hover:text-(--color-black-2)",
      label: "Github"
    },
    {
      name: "file",
      link: assets['resume.pdf'],
      hoverColor: "hover:text-(--color-indigo)",
      label: "Resume"
    }
  ];

  /* smooth-scroll helper */
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) smoothScrollTo(el);
  };

  return (
    <nav className="absolute top-0 w-full h-20 z-40">
      <div className="max-w-7xl mx-auto px-6 md:px-4 h-full flex justify-between items-center">
        <div className="flex items-center gap-4">
          {socials.map(social => (
            <div key={social.name} className="relative group">
              <a
                href={social.link}
                className={`text-gray-500 ${social.hoverColor} transition duration-200`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <Icon name={social.name} size={20} />
              </a>
              <span className="absolute left-1/2 top-7 mb-2 transform -translate-x-1/2 whitespace-nowrap
                               bg-gray-800 text-white text-xs rounded py-1 px-2
                               opacity-0 group-hover:opacity-100 transition-opacity">
                {social.label}
              </span>
            </div>
          ))}
        </div>
        <ul className="hidden md:flex gap-20">
          {["about", "experiences", "techstack"].map(id => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={e => handleNavClick(e, id)}
                className="relative text-lg font-medium text-gray-700 group"
              >
                {id === "techstack" ? "Tech Stack" : id.charAt(0).toUpperCase() + id.slice(1)}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gray-500 transition-all duration-400 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#footer"
          onClick={e => handleNavClick(e, "footer")}
          className="flex items-center gap-1 text-lg font-medium text-grey-700"
        >
          Contact
          <Icon name="arrowNE" size={22} strokeWidth={2} />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
