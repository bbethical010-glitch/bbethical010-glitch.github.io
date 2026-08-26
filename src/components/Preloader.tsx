import { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [unmount, setUnmount] = useState(false);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const doneTimer = setTimeout(() => {
        setDone(true);
      }, 200);
      return () => clearTimeout(doneTimer);
    }
  }, [progress]);

  useEffect(() => {
    if (done) {
      const unmountTimer = setTimeout(() => {
        setUnmount(true);
      }, 800); // 0.8s ease
      return () => clearTimeout(unmountTimer);
    }
  }, [done]);

  if (unmount) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#131313] flex flex-col items-center justify-center transition-all duration-800 ease-in-out ${
        done ? 'opacity-0 invisible' : 'opacity-100 visible'
      }`}
      style={{ transitionDuration: '800ms' }}
    >
      <div className="flex flex-col items-center w-full max-w-sm px-6">
        <div className="w-16 h-16 mb-6 bg-surface border-2 border-purple p-1.5 shadow-[4px_4px_0px_#f4c300]">
          <img src={logoImg} alt="Meme Capsule Logo" className="w-full h-full object-contain" />
        </div>
        <h1 className="font-anton text-4xl text-[#e5e2e1] mb-8 tracking-wider">MEME CAPSULE</h1>
        
        <div className="w-full flex justify-between text-[#988ca1] text-xs font-oswald uppercase tracking-widest mb-3">
          <span>Loading capsules...</span>
          <span>{progress}%</span>
        </div>
        
        <div className="w-full h-[1px] bg-[#2a2a2a] relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-[#9b30ff] transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
