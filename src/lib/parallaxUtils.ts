"use client";

import { useEffect, useState, useRef } from 'react';
import { useMotionValue, useTransform, useScroll, useSpring, MotionValue } from 'framer-motion';

// Hook to create a parallax effect based on scroll position
export function useParallax(distance: number = 100, direction: 'up' | 'down' | 'left' | 'right' = 'up') {
  const { scrollY } = useScroll();
  const ref = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    
    const setValues = () => {
      setElementTop(ref.current?.offsetTop || 0);
      setClientHeight(window.innerHeight);
    };
    
    setValues();
    window.addEventListener('resize', setValues);
    
    return () => window.removeEventListener('resize', setValues);
  }, [ref]);

  const initial = elementTop - clientHeight;
  const final = elementTop + distance;

  const yRange = useTransform(scrollY, [initial, final], [distance, -distance]);
  const xRange = useTransform(scrollY, [initial, final], [distance, -distance]);
  
  const springConfig = { damping: 15, stiffness: 55 };
  const y = useSpring(yRange, springConfig);
  const x = useSpring(xRange, springConfig);

  if (direction === 'down') return { ref, transform: useTransform(y, value => `translateY(${-value}px)`) };
  if (direction === 'left') return { ref, transform: useTransform(x, value => `translateX(${value}px)`) };
  if (direction === 'right') return { ref, transform: useTransform(x, value => `translateX(${-value}px)`) };
  
  // Default is 'up'
  return { ref, transform: useTransform(y, value => `translateY(${value}px)`) };
}

// Hook to create a rotation effect based on scroll position
export function useParallaxRotation(factor: number = 10) {
  const { scrollY } = useScroll();
  const ref = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    
    const setValues = () => {
      setElementTop(ref.current?.offsetTop || 0);
      setClientHeight(window.innerHeight);
    };
    
    setValues();
    window.addEventListener('resize', setValues);
    
    return () => window.removeEventListener('resize', setValues);
  }, [ref]);

  const initial = elementTop - clientHeight;
  const final = elementTop + clientHeight;

  const rotateRange = useTransform(scrollY, [initial, final], [-factor, factor]);
  const rotate = useSpring(rotateRange, { damping: 15, stiffness: 55 });

  return { ref, transform: useTransform(rotate, value => `rotate(${value}deg)`) };
}

// Hook to create a scale effect based on scroll position
export function useParallaxScale(min: number = 0.8, max: number = 1.2) {
  const { scrollY } = useScroll();
  const ref = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    
    const setValues = () => {
      setElementTop(ref.current?.offsetTop || 0);
      setClientHeight(window.innerHeight);
    };
    
    setValues();
    window.addEventListener('resize', setValues);
    
    return () => window.removeEventListener('resize', setValues);
  }, [ref]);

  const initial = elementTop - clientHeight;
  const final = elementTop + clientHeight / 2;

  const scaleRange = useTransform(scrollY, [initial, final], [min, max]);
  const scale = useSpring(scaleRange, { damping: 15, stiffness: 55 });

  return { ref, transform: useTransform(scale, value => `scale(${value})`) };
}

// Hook to create a parallax opacity effect based on scroll position
export function useParallaxOpacity(startOpacity: number = 0, endOpacity: number = 1) {
  const { scrollY } = useScroll();
  const ref = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    
    const setValues = () => {
      setElementTop(ref.current?.offsetTop || 0);
      setClientHeight(window.innerHeight);
    };
    
    setValues();
    window.addEventListener('resize', setValues);
    
    return () => window.removeEventListener('resize', setValues);
  }, [ref]);

  const initial = elementTop - clientHeight;
  const final = elementTop - clientHeight / 2;

  const opacityRange = useTransform(scrollY, [initial, final], [startOpacity, endOpacity]);
  const opacity = useSpring(opacityRange, { damping: 15, stiffness: 55 });

  return { ref, opacity };
}

// Hook to create a mouse parallax effect
export function useMouseParallax(factor: number = 20) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * factor,
        y: (e.clientY / window.innerHeight - 0.5) * factor
      });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [factor]);
  
  return mousePosition;
} 