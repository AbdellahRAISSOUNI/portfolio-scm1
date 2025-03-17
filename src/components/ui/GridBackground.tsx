"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface GridBackgroundProps {
  className?: string;
  variant?: 'default' | 'gradient' | 'dark';
  showLights?: boolean;
  gridSize?: number;
  gridOpacity?: number;
  animated?: boolean;
}

export default function GridBackground({
  className = "",
  variant = 'default',
  showLights = true,
  gridSize = 40,
  gridOpacity = 0.08,
  animated = true
}: GridBackgroundProps) {
  // Background colors based on variant
  const bgColors = {
    default: "from-white to-gray-50 dark:from-gray-950 dark:to-gray-900",
    gradient: "from-teal-50 via-white to-emerald-50 dark:from-gray-950 dark:via-teal-950/10 dark:to-gray-900",
    dark: "from-gray-900 to-gray-800 dark:from-black dark:to-gray-900"
  };

  // Grid colors based on variant
  const gridColors = {
    default: "stroke-gray-300 dark:stroke-gray-700",
    gradient: "stroke-teal-300/40 dark:stroke-teal-700/20",
    dark: "stroke-gray-700 dark:stroke-gray-800"
  };

  // Light colors based on variant
  const lightColors = {
    default: [
      "bg-blue-400/20 dark:bg-blue-500/20",
      "bg-purple-400/20 dark:bg-purple-500/20",
      "bg-teal-400/20 dark:bg-teal-500/20"
    ],
    gradient: [
      "bg-teal-400/20 dark:bg-teal-500/20",
      "bg-emerald-400/20 dark:bg-emerald-500/20",
      "bg-cyan-400/20 dark:bg-cyan-500/20"
    ],
    dark: [
      "bg-blue-500/10 dark:bg-blue-500/10",
      "bg-purple-500/10 dark:bg-purple-500/10",
      "bg-teal-500/10 dark:bg-teal-500/10"
    ]
  };

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${bgColors[variant]}`}></div>
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `linear-gradient(to right, ${variant === 'dark' ? 'rgba(75, 85, 99, 0.1)' : `rgba(0, 0, 0, ${gridOpacity})`} 1px, transparent 1px), 
                            linear-gradient(to bottom, ${variant === 'dark' ? 'rgba(75, 85, 99, 0.1)' : `rgba(0, 0, 0, ${gridOpacity})`} 1px, transparent 1px)`,
          backgroundSize: `${gridSize}px ${gridSize}px`
        }}
      ></div>
      
      {/* Animated grid lines (optional) */}
      {animated && (
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width={gridSize}
              height={gridSize}
              patternUnits="userSpaceOnUse"
            >
              <path
                d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
                fill="none"
                className={`${gridColors[variant]}`}
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      )}
      
      {/* Background lights */}
      {showLights && (
        <>
          <motion.div
            className={`absolute top-[5%] left-[10%] w-[25rem] h-[25rem] rounded-full filter blur-[6rem] opacity-50 ${lightColors[variant][0]}`}
            animate={{
              x: [0, 20, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className={`absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] rounded-full filter blur-[6rem] opacity-50 ${lightColors[variant][1]}`}
            animate={{
              x: [0, -20, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className={`absolute top-[40%] right-[30%] w-[20rem] h-[20rem] rounded-full filter blur-[6rem] opacity-40 ${lightColors[variant][2]}`}
            animate={{
              x: [0, -10, 0],
              y: [0, 10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </>
      )}
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 bg-repeat opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      ></div>
    </div>
  );
} 