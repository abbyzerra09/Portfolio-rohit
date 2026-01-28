import React, { useEffect, useRef } from 'react';

const MouseTracking = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const cursorState = useRef({ 
    targetScale: 1, currentScale: 1, 
    targetOpacity: 0.6, currentOpacity: 0.6,
    label: "", isButton: false 
  });

  useEffect(() => {
    // 1. Exit if mobile/tablet
    if (window.innerWidth < 768) return; 

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      const parent = canvas.parentElement;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = parent.offsetWidth * dpr;
      canvas.height = parent.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${parent.offsetWidth}px`;
      canvas.style.height = `${parent.offsetHeight}px`;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleCursorUpdate = (e) => {
      cursorState.current.targetScale = e.detail.scale || 1;
      cursorState.current.label = e.detail.label || "";
      cursorState.current.targetOpacity = e.detail.scale > 1 ? 1 : 0.6; 
      cursorState.current.isButton = !!e.detail.label; 
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth following
      delayedMouse.current.x += (mouse.current.x - delayedMouse.current.x) * 0.2;
      delayedMouse.current.y += (mouse.current.y - delayedMouse.current.y) * 0.2;

      // Smooth scaling
      cursorState.current.currentScale += (cursorState.current.targetScale - cursorState.current.currentScale) * 0.1;
      cursorState.current.currentOpacity += (cursorState.current.targetOpacity - cursorState.current.currentOpacity) * 0.1;

      const dx = mouse.current.x - delayedMouse.current.x;
      const dy = mouse.current.y - delayedMouse.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);
      const baseRadius = 12 * cursorState.current.currentScale; 
      const stretch = Math.min(distance * 0.25, 15); 

      ctx.save();
      ctx.translate(delayedMouse.current.x, delayedMouse.current.y);
      ctx.globalAlpha = cursorState.current.currentOpacity;
      ctx.rotate(angle);

      // Draw Ball
      ctx.beginPath();
      ctx.fillStyle = cursorState.current.isButton ? "white" : "rgba(255, 255, 255, 0.2)"; 
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 1.5;
      ctx.ellipse(0, 0, baseRadius + stretch, baseRadius - (stretch * 0.2), 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Draw Label
      if (cursorState.current.label && cursorState.current.currentScale > 2) {
        ctx.save();
        ctx.translate(delayedMouse.current.x, delayedMouse.current.y);
        ctx.fillStyle = "black";
        ctx.font = '600 9px sans-serif'; 
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(cursorState.current.label, 0, 0);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('cursorUpdate', handleCursorUpdate);
    
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('cursorUpdate', handleCursorUpdate);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="hidden md:block absolute inset-0 pointer-events-none z-999" 
    />
  );
};

export default MouseTracking;