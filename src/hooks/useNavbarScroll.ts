import { useState, useEffect } from 'react';

export function useNavbarScroll() {
  const [isHidden, setIsHidden] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const sections = ['hero', 'see-it-in-action', 'features', 'how-it-works', 'changelog', 'faq', 'comments', 'contact'];

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          if (currentScrollY > 100) {
            setIsStuck(true);
          } else {
            setIsStuck(false);
          }

          if (currentScrollY > 200 && currentScrollY > lastScrollY) {
            setIsHidden(true);
          } else if (currentScrollY < lastScrollY) {
            setIsHidden(false);
          }
          
          lastScrollY = currentScrollY;

          // Check active section
          let currentSection = '';
          for (const sectionId of sections) {
            const el = document.getElementById(sectionId);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
                currentSection = sectionId;
                break;
              }
            }
          }
          if (currentSection !== activeSection) {
            setActiveSection(currentSection);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Init

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return { isHidden, isStuck, activeSection };
}
