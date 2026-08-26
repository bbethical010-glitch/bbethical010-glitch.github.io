import React from 'react';

export function Vignette() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 55,
        pointerEvents: 'none',
        background: 'radial-gradient(125% 95% at 50% 42%, transparent 40%, rgba(19, 19, 19, 0.6) 100%)',
      }}
    />
  );
}
