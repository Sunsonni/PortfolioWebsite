// src/components/FlowyBackground.js
import React, { useRef, useEffect } from 'react';
import SimplexNoise from 'simplex-noise';

const FlowyBackground = () => {
  const canvasRef = useRef(null);
  const simplex = new SimplexNoise();

  const drawFlowyBackground = (ctx, width, height, time) => {
    ctx.clearRect(0, 0, width, height);
    const noiseValue1 = simplex.noise2D(time * 0.0001, 0) * 360;
    const noiseValue2 = simplex.noise2D(time * 0.00015, 100) * 360;
    const noiseValue3 = simplex.noise2D(time * 0.0002, 200) * 360;

    const gradient = ctx.createRadialGradient(
      width / 2,
      height / 2,
      0,
      width / 2,
      height / 2,
      Math.max(width, height) / 2
    );
    gradient.addColorStop(0, `hsl(${noiseValue1 % 360}, 70%, 60%)`);
    gradient.addColorStop(0.5, `hsl(${noiseValue2 % 360}, 70%, 60%)`);
    gradient.addColorStop(1, `hsl(${noiseValue3 % 360}, 70%, 60%)`);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = (time) => {
      drawFlowyBackground(ctx, canvas.width, canvas.height, time);
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Make sure it’s behind other content
        filter: 'blur(100px)',
      }}
    />
  );
};

export default FlowyBackground;
