// src/components/footer.jsx
import React, { useState, useEffect } from 'react';
import Icon from './icon';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState('');

  // my timezone (EST)
  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString('en-CA', {
        timeZone: 'America/Toronto',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentTime(time);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="footer" className="bg-[#1d1d1d] text-(--color-gray-1) pt-22 pb-8">
      <div className="max-w-7xl mx-auto px-8 lg:px-6 md:px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium m-0">Anthony Hana</h2>
          <p className="font-mono text-sm m-0">{currentTime} EST (GMT-5)</p>
        </div>
        <div className="h-px bg-gray-300 mb-6" /> {/* line divider */}
        <div className="flex justify-between items-start">
          <div className="text-sm leading-relaxed max-w-md">
            <p className="mb-2">Mathematics & Computer Science Student</p>
            <p className="mb-0">McMaster University – Hamilton, Ontario, Canada</p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <a href="mailto:anthonyhana04@gmail.com" className="text-sm hover:text-gray-400">
              anthonyhana04@gmail.com
            </a>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/anthony.hana"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Icon name="instagram" size={24} color="#E1306C" />
              </a>

              <a
                href="https://linkedin.com/in/anthony-hana-797a3a208/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" size={24} color="#0084d1" />
              </a>

              <a
                href="https://github.com/anthonyhana04"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Icon name="github" size={24} color="#d1d5dc" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
