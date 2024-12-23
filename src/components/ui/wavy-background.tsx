"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useRef, useState, useCallback ,useMemo} from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: unknown;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);

  const [isSafari, setIsSafari] = useState(false);

  const waveColors = useMemo(
    () =>
      colors ?? [
        "#38bdf8",
        "#818cf8",
        "#c084fc",
        "#e879f9",
        "#22d3ee",
      ],
    [colors]
  );
  

  const getSpeed = useCallback(() => {
    return speed === "fast" ? 0.002 : 0.001;
  }, [speed]);

  const drawWave = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number, nt: number) => {
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    },
    [waveColors, waveWidth, noise]
  );

  const render = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number) => {
      const nt = performance.now() * getSpeed();
      ctx.fillStyle = backgroundFill || "black";
      ctx.globalAlpha = waveOpacity || 0.5;
      ctx.fillRect(0, 0, w, h);
      drawWave(ctx, w, h, nt);
      animationIdRef.current = requestAnimationFrame(() =>
        render(ctx, w, h)
      );
    },
    [backgroundFill, waveOpacity, drawWave, getSpeed]
  );

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        ctx.filter = `blur(${blur}px)`;
        render(ctx, ctx.canvas.width, ctx.canvas.height);
        window.onresize = () => {
          ctx.canvas.width = window.innerWidth;
          ctx.canvas.height = window.innerHeight;
          ctx.filter = `blur(${blur}px)`;
        };
      }
    }
  }, [blur, render]);
  

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationIdRef.current!);
    };
  }, [init]);

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
