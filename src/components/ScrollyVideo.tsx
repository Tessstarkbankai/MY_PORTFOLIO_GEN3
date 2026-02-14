"use client";

import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Overlay from "./Overlay";

interface Props {
  frameCount: number;
}

export default function ScrollyCanvas({ frameCount }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = `/frames/frame_${String(i).padStart(4, "0")}.jpg`;
      images.push(img);
    }

    const render = () => {
      const progress = scrollYProgress.get();
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(progress * frameCount)
      );

      const image = images[frameIndex];

      if (image && image.complete) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
      }

      requestAnimationFrame(render);
    };

    render();
  }, [frameCount, scrollYProgress]);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Overlay here directly */}
        <Overlay scrollYProgress={scrollYProgress} />

      </div>
    </div>
  );
}

