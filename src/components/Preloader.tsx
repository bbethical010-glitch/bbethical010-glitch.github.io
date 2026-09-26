import { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';
import logoWebp from '../assets/logo.webp';

let hasShownInSession = false;

export function Preloader() {
  const [alreadyShown] = useState(() => {
    if (hasShownInSession) return true;
    if (typeof window !== 'undefined' && sessionStorage.getItem('mc_preloader_shown') === 'true') {
      hasShownInSession = true;
      return true;
    }
    return false;
  });

  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [unmount, setUnmount] = useState(alreadyShown);

  useEffect(() => {
    if (alreadyShown) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const inc = Math.floor(Math.random() * 5) + 1;
        const next = prev + inc;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [alreadyShown]);

  useEffect(() => {
    if (alreadyShown) return;
    if (progress === 100) {
      hasShownInSession = true;
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('mc_preloader_shown', 'true');
      }
      const doneTimer = setTimeout(() => {
        setDone(true);
      }, 200);
      return () => clearTimeout(doneTimer);
    }
  }, [progress, alreadyShown]);

  useEffect(() => {
    if (done) {
      const unmountTimer = setTimeout(() => {
        setUnmount(true);
      }, 800); // 0.8s ease
      return () => clearTimeout(unmountTimer);
    }
  }, [done]);

  if (unmount || alreadyShown) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#131313] flex flex-col items-center justify-center transition-all duration-800 ease-in-out ${
        done ? 'opacity-0 invisible' : 'opacity-100 visible'
      }`}
      style={{ transitionDuration: '800ms' }}
    >
      <div className="flex flex-col items-center w-full max-w-sm px-6">
        <div className="w-16 h-16 mb-6 bg-surface border-2 border-purple p-1.5 shadow-[4px_4px_0px_#f4c300]">
          <picture>
            <source srcSet={logoWebp} type="image/webp" />
            <img src={logoImg} alt="Meme Capsule Logo" className="w-full h-full object-contain" width="128" height="128" />
          </picture>
        </div>
        <h1 className="font-anton text-4xl text-[#e5e2e1] mb-8 tracking-wider">MEME CAPSULE</h1>
        
        <div className="w-full flex justify-between text-[#988ca1] text-xs font-oswald uppercase tracking-widest mb-3">
          <span>Loading capsules...</span>
          <span>{progress}%</span>
        </div>
        
        <div className="w-full h-[1px] bg-[#2a2a2a] relative overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full bg-[#9b30ff] transition-transform duration-75 origin-left"
            style={{ transform: `scaleX(${progress / 100})`, transformOrigin: 'left' }}
          />
        </div>
      </div>
    </div>
  );
}
