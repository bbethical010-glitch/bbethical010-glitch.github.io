import React, { useEffect, useRef } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let isHovering = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateHoverState = () => {
      const elements = document.querySelectorAll('[data-cursor]');
      elements.forEach(el => {
        el.addEventListener('mouseenter', () => { isHovering = true; });
        el.addEventListener('mouseleave', () => { isHovering = false; });
      });
    };

    updateHoverState();

    const mutationObserver = new MutationObserver(() => {
      updateHoverState();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    let animationFrameId: number;
    const render = () => {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;

      if (isHovering) {
        cursor.style.width = '52px';
        cursor.style.height = '52px';
        cursor.style.backgroundColor = 'rgba(155, 48, 255, 0.1)';
      } else {
        cursor.style.width = '26px';
        cursor.style.height = '26px';
        cursor.style.backgroundColor = 'transparent';
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <>
      <style>
        {`
          .custom-cursor {
            position: fixed;
            top: 0;
            left: 0;
            border-radius: 50%;
            border: 1px solid #dcb8ff;
            pointer-events: none;
            z-index: 80;
            transform: translate3d(-100px, -100px, 0) translate(-50%, -50%); /* Start hidden/offscreen */
            transition: width 0.2s, height 0.2s, background-color 0.2s;
            mix-blend-mode: difference;
          }
          @media (hover: none) {
            .custom-cursor {
              display: none;
            }
          }
        `}
      </style>
      <div ref={cursorRef} className="custom-cursor" />
    </>
  );
}
