// src/components/hero.jsx
import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Icon from './icon';
gsap.registerPlugin(ScrollTrigger);

const WORDS = {
  line1: ['Code ', 'is '],
  line2: ['my ', 'canvas.'],
};

const rand = (min, max) => Math.random() * (max - min) + min;

// rely on the parent’s gradient background clipping
function LetterDisplay({ word }) {
  return word.split('').map((ch, i) => (
    <div
      key={i}
      className="letter font-med 
      text-[clamp(6rem,10vw,12rem)]
      sm:text-[clamp(8rem,9vw,14rem)]
      md:text-[clamp(10rem,8vw,16rem)]
      lg:text-[clamp(14rem,7vw,18rem)]
      "
      data-speed={rand(0.8, 1.3)}
    >
      {ch}
    </div>
  ));
}

export default function Hero() {
  const box = useRef(null);
  const [showScroll, setShowScroll] = useState(true);

  useLayoutEffect(() => {
    if (!box.current) return;
    box.current.querySelectorAll('.letter').forEach(el => {
      const speed = parseFloat(el.dataset.speed);
      const slowdown = 0.5;
      gsap.to(el, {
        y: (1 - speed) * slowdown * ScrollTrigger.maxScroll(window),
        rotation: rand(-30, 30),
        ease: 'power2.out',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight,
          scrub: 0.5,
          invalidateOnRefresh: true,
        }
      });
    });
  }, []);

  useEffect(() => {
    const handler = () => setShowScroll(window.scrollY < 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <section
      id="home"
      ref={box}
      className="relative flex items-start justify-center pt-30
      lg:justify-start 
      h-screen px-6 md:px-12 lg:px-24 xl:px-40 
      lg:h-[110vh]
      overflow-visible"
    >
      <div className="hero-bottom-blur" />

      {/* Wrap each line in a parent with className="hero-line" */}
      <div className="text-left leading-[16em]">
        <div className="flex flex-wrap justify-start hero-line">
          <LetterDisplay word={WORDS.line1[0]} />
          <div className="w-10 sm:w-15" />
          <LetterDisplay word={WORDS.line1[1]} />
        </div>
        <div className="flex flex-wrap justify-start hero-line mt-0">
          <LetterDisplay word={WORDS.line2[0]} />
          <div className="w-10 sm:w-15" />
          <LetterDisplay word={WORDS.line2[1]} />
        </div>
      </div>

      {/* scroll indicator (unchanged) */}
      <button
        onClick={() =>
          document
            .getElementById('about')
            .scrollIntoView({ behavior: 'smooth' })
        }
        className={`
          group 
          absolute 
          bottom-35
          left-1/2 transform -translate-x-1/2
          lg:left-16 lg:transform-none

          lg:right-6
          lg:left-auto
          lg:transform-none
          
          flex flex-row items-center gap-2 select-none
          transition-opacity duration-400
          ${showScroll ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      >
        <span
          className="
            text-sm tracking-wider text-gray-800 font-semibold text-base
            transition-transform duration-300
            group-hover:translate-x-1 group-hover:translate-y-1
          "
        >
          scroll
        </span>

        <Icon
          name="arrowSE"
          size={20}
          className="
            stroke-gray-9000/80 transition-transform duration-300
            group-hover:translate-x-1 group-hover:translate-y-1
          "
        />
      </button>
    </section>
  );
}
