// src/components/hero.jsx
import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Icon from './icon';
gsap.registerPlugin(ScrollTrigger);

const WORDS = {
  line1: ['Creativity ', 'is '],
  line2: ['my ', 'craft'],
};
const rand = (min, max) => Math.random() * (max - min) + min;

function LetterDisplay({ word }) {
  return word.split('').map((ch, i) => (
    <div
      key={i}
      className="letter text-[min(14vw,240px)] font-med"
      data-speed={rand(0.8, 1.3)}
    >
      {ch}
    </div>
  ));
}

export default function Hero() {
  const box = useRef(null);
  const [showScroll, setShowScroll] = useState(true);

  /* paralax */
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

  /* hide scroll indication after scroll */ 
  useEffect(() => {
    const handler = () => setShowScroll(window.scrollY < 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <section
      id="home"
      ref={box}
      className="relative flex items-start justify-start min-h-[120vh] pt-44 pl-10 pr-6 overflow-hidden"
    >
      <div className="hero-bottom-blur" />
      {/* HERO WORDS */}
      <div className="text-left leading-[15em]"> 
        <div className="flex flex-wrap justify-start">
          <LetterDisplay word={WORDS.line1[0]} />
          <div className="w-10 sm:w-15" /> 
          <LetterDisplay word={WORDS.line1[1]} />
        </div>

        <div className="flex flex-wrap justify-start">
          <LetterDisplay word={WORDS.line2[0]} />
          <div className="w-10 sm:w-15" /> 
          <LetterDisplay word={WORDS.line2[1]} />
        </div>
      </div>

      {/* scroll indicator */}
      <button
        onClick={() =>
          document
            .getElementById('about')
            .scrollIntoView({ behavior: 'smooth' })
        }
        className={`group absolute bottom-50 right-10 flex flex-row items-center gap-2 select-none
                    transition-opacity duration-400
                    ${showScroll ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <span className="text-sm tracking-wider text-gray-800 font-semibold text-base
                        transition-transform duration-300
                        group-hover:translate-x-1 group-hover:translate-y-1">
          scroll
        </span>

        <Icon
          name="arrowSE"
          size={20}
          className="stroke-gray-9000/80 transition-transform duration-300
                     group-hover:translate-x-1 group-hover:translate-y-1"
        />
      </button>
    </section>
  );
}