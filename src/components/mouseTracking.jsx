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
    if (window.innerWidth < 768) return; 

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true }); // Ensure alpha optimization
    let animationFrameId;

    const resize = () => {
      // Use window dimensions instead of parent to keep canvas small
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    const handleMouseMove = (e) => {
      // With 'fixed' positioning, we just use client coordinates
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleCursorUpdate = (e) => {
      cursorState.current.targetScale = e.detail.scale ?? 1;
      cursorState.current.label = e.detail.label || "";
      // Allow scale 0 to fully hide the cursor
      cursorState.current.targetOpacity = e.detail.scale === 0 ? 0 : (e.detail.scale > 1 ? 1 : 0.6); 
      cursorState.current.isButton = !!e.detail.label; 
    };

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Smooth following
      delayedMouse.current.x += (mouse.current.x - delayedMouse.current.x) * 0.15;
      delayedMouse.current.y += (mouse.current.y - delayedMouse.current.y) * 0.15;

      // Smooth scaling
      cursorState.current.currentScale += (cursorState.current.targetScale - cursorState.current.currentScale) * 0.1;
      cursorState.current.currentOpacity += (cursorState.current.targetOpacity - cursorState.current.currentOpacity) * 0.1;

      // Skip drawing entirely if invisible to save CPU
      if (cursorState.current.currentScale < 0.01) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const dx = mouse.current.x - delayedMouse.current.x;
      const dy = mouse.current.y - delayedMouse.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);
      const baseRadius = 12 * cursorState.current.currentScale; 
      const stretch = Math.min(distance * 0.25, 15); 

      // Use Math.round to prevent sub-pixel rendering lag
      const drawX = Math.round(delayedMouse.current.x);
      const drawY = Math.round(delayedMouse.current.y);

      ctx.save();
      ctx.translate(drawX, drawY);
      ctx.globalAlpha = cursorState.current.currentOpacity;
      ctx.rotate(angle);

      ctx.beginPath();
      ctx.fillStyle = cursorState.current.isButton ? "white" : "rgba(255, 255, 255, 0.2)"; 
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 1.5;
      ctx.ellipse(0, 0, baseRadius + stretch, baseRadius - (stretch * 0.2), 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      if (cursorState.current.label && cursorState.current.currentScale > 2) {
        ctx.save();
        ctx.translate(drawX, drawY);
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
      className="hidden md:block fixed top-0 left-0 pointer-events-none z-9999" 
    />
  );
};

export default MouseTracking;