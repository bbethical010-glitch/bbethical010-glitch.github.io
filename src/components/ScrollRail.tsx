import React from 'react';

interface ScrollRailProps {
  activeSection: string;
}

export function ScrollRail({ activeSection }: ScrollRailProps) {
  const sections = ['hero', 'see-it-in-action', 'features', 'how-it-works', 'changelog', 'faq', 'comments', 'contact'];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col gap-3 z-[45]">
      {sections.map((section) => {
        const isActive = activeSection === section;
        return (
          <button
            key={section}
            onClick={() => handleScrollTo(section)}
            className={`w-1 rounded-full transition-all duration-300 ${
              isActive ? 'bg-[#9b30ff] h-8 shadow-[0_0_8px_#9b30ff]' : 'bg-[#2a2a2a] h-4 hover:bg-[#988ca1]'
            }`}
            aria-label={`Scroll to ${section}`}
          />
        );
      })}
    </div>
  );
}
