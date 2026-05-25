import { useEffect, useRef } from 'react';

/**
 * CursorTrail — a quiet line that follows the cursor and fades away.
 *
 * How it works (canvas-based, ~60fps via requestAnimationFrame):
 *   1. Each frame, the entire canvas is faded by a small alpha using a
 *      `destination-out` composite op. This erases pixels uniformly,
 *      independent of the page background — works for both themes.
 *   2. A short line segment is drawn from the previous cursor position
 *      to the current one. Over consecutive frames these segments form
 *      a continuous trail that decays naturally.
 *
 * Behavior:
 *   - Hidden on touch/coarse pointers (where there's no cursor).
 *   - Disabled when the user has `prefers-reduced-motion`.
 *   - Uses the accent indigo so it stays cohesive with the rest of the site.
 */
export default function CursorTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Skip on touch devices and when motion is reduced
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Track cursor position. -1 sentinel means "no position yet".
    let mouseX = -1;
    let mouseY = -1;
    let lastX = -1;
    let lastY = -1;

    let rafId = 0;

    // ── Sizing: match canvas pixel buffer to viewport × devicePixelRatio
    //    so the line stays crisp on HiDPI screens.
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2); // cap at 2x for perf
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset before re-scaling
      ctx.scale(dpr, dpr);
    };
    resize();

    // ── Pointer tracking
    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // On first sample, seed lastX/Y so we don't draw a giant first segment.
      if (lastX < 0) {
        lastX = mouseX;
        lastY = mouseY;
      }
    };

    // When cursor leaves the window, freeze tracking so the tail just fades.
    const onLeave = () => {
      lastX = -1;
      lastY = -1;
      mouseX = -1;
      mouseY = -1;
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', resize);

    // ── Draw loop
    const tick = () => {
      // 1) Fade existing trail. `destination-out` erases pixels by the alpha
      //    of what we draw, so the canvas stays background-agnostic.
      //    Lower alpha → longer-lived trail. 0.05 ≈ ~1.8s decay at 60fps.
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'source-over';

      const isDark = document.documentElement.classList.contains('dark');

      // 2) Draw the main soft line from the last position to the current one.
      if (mouseX >= 0 && lastX >= 0 && (mouseX !== lastX || mouseY !== lastY)) {
        // Lighter alpha + wider stroke → softer, more diffuse ribbon feel.
        ctx.strokeStyle = isDark
          ? 'rgba(165, 180, 252, 0.30)'  // accent-300 — luminous in dark
          : 'rgba(99, 102, 241, 0.28)';  // accent-500 — soft in light
        ctx.lineWidth = 2.8;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
      }

      // 3) Sprinkle a few bright sparkles around the cursor.
      //    They fade with the canvas decay, so no separate cleanup needed.
      if (mouseX >= 0) {
        const sparkleColor = isDark
          ? 'rgba(224, 231, 255, '   // accent-100 in dark — almost white
          : 'rgba(79, 70, 229, ';    // accent-600 in light — vivid indigo
        // Drop 1–3 sparks per frame at randomized offsets/sizes.
        const count = 1 + Math.floor(Math.random() * 3);
        for (let i = 0; i < count; i++) {
          const offsetX = (Math.random() - 0.5) * 22;
          const offsetY = (Math.random() - 0.5) * 22;
          const radius = Math.random() * 1.4 + 0.4;       // 0.4 – 1.8 px
          const alpha = Math.random() * 0.4 + 0.5;        // 0.5 – 0.9
          ctx.beginPath();
          ctx.arc(mouseX + offsetX, mouseY + offsetY, radius, 0, Math.PI * 2);
          ctx.fillStyle = `${sparkleColor}${alpha.toFixed(2)})`;
          ctx.fill();
        }

        // Occasional brighter "twinkle" — a slightly larger highlight spark.
        if (Math.random() < 0.18) {
          const offsetX = (Math.random() - 0.5) * 14;
          const offsetY = (Math.random() - 0.5) * 14;
          ctx.beginPath();
          ctx.arc(mouseX + offsetX, mouseY + offsetY, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = isDark
            ? 'rgba(255, 255, 255, 0.85)'
            : 'rgba(99, 102, 241, 0.85)';
          ctx.fill();
        }
      }

      lastX = mouseX;
      lastY = mouseY;

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      // z-[60] keeps the trail above the navbar (z-50) and scroll-to-top (z-40).
      // pointer-events-none ensures clicks, hovers, and selection still work.
      className="pointer-events-none fixed inset-0 z-[60]"
    />
  );
}
