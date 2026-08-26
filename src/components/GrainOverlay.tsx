import React, { useEffect, useState } from 'react';

export function GrainOverlay() {
  const [dataUrl, setDataUrl] = useState('');

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.createImageData(128, 128);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const v = Math.random() * 255;
      data[i] = v;
      data[i + 1] = v;
      data[i + 2] = v;
      data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
    setDataUrl(canvas.toDataURL());
  }, []);

  if (!dataUrl) return null;

  return (
    <>
      <style>
        {`
          @keyframes grain-animation {
            0%, 100% { transform: translate(0, 0); }
            10% { transform: translate(-5%, -10%); }
            20% { transform: translate(-15%, 5%); }
            30% { transform: translate(7%, -25%); }
            40% { transform: translate(-5%, 25%); }
            50% { transform: translate(-15%, 10%); }
            60% { transform: translate(15%, 0%); }
            70% { transform: translate(0%, 15%); }
            80% { transform: translate(3%, 35%); }
            90% { transform: translate(-10%, 10%); }
          }
          .grain-overlay {
            position: fixed;
            inset: -100%;
            width: 300%;
            height: 300%;
            z-index: 60;
            pointer-events: none;
            opacity: 0.04;
            mix-blend-mode: overlay;
            animation: grain-animation 8s steps(10) infinite;
          }
        `}
      </style>
      <div
        className="grain-overlay"
        style={{ backgroundImage: `url(${dataUrl})` }}
      />
    </>
  );
}
