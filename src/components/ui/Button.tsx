"use client";

import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
  icon,
  iconPosition = 'left'
}: ButtonProps) {
  // Base styles
  const baseStyles = cn(
    "relative font-medium rounded-full transition-all duration-300 inline-flex items-center justify-center overflow-hidden",
    fullWidth ? "w-full" : "",
    disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer",
  );
  
  // Size styles
  const sizeStyles = {
    sm: "text-sm py-2 px-4",
    md: "text-base py-2.5 px-6",
    lg: "text-lg py-3 px-8"
  };
  
  // Variant styles
  const variantStyles = {
    primary: "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-md hover:shadow-lg hover:translate-y-[-2px]",
    secondary: "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md hover:shadow-lg hover:translate-y-[-2px]",
    outline: "border-2 border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:translate-y-[-2px] hover:shadow-md",
    ghost: "text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:translate-y-[-2px]",
    glow: "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-[0_0_15px_rgba(20,184,166,0.5)] hover:shadow-[0_0_25px_rgba(20,184,166,0.7)] hover:translate-y-[-2px]",
    link: "text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 p-0 hover:underline"
  };
  
  // Combined styles
  const buttonStyles = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );
  
  // Content with icon
  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {icon && iconPosition === 'left' && (
          <motion.span 
            initial={{ x: 0 }} 
            whileHover={{ x: -3 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {icon}
          </motion.span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <motion.span 
            initial={{ x: 0 }} 
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {icon}
          </motion.span>
        )}
      </span>
      
      {/* Hover effect overlay */}
      {variant === 'primary' && (
        <>
          <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_60%)] group-hover:animate-pulse-slow"></span>
        </>
      )}
      {variant === 'secondary' && (
        <>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_60%)] group-hover:animate-pulse-slow"></span>
        </>
      )}
      {variant === 'outline' && (
        <>
          <span className="absolute inset-0 bg-teal-50 dark:bg-teal-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.3),transparent_60%)] group-hover:animate-pulse-slow"></span>
        </>
      )}
      {variant === 'ghost' && (
        <>
          <span className="absolute inset-0 bg-teal-50 dark:bg-teal-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.3),transparent_60%)] group-hover:animate-pulse-slow"></span>
        </>
      )}
      {variant === 'glow' && (
        <>
          <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="absolute inset-0 opacity-0 group-hover:opacity-40 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_60%)] group-hover:animate-pulse-slow"></span>
          <span className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-30 blur-md bg-gradient-to-r from-teal-400 to-emerald-400 group-hover:animate-pulse-slow transition-opacity duration-300"></span>
        </>
      )}
    </>
  );
  
  // If href is provided, render as Link
  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link 
          href={href} 
          className={cn(buttonStyles, "group")}
          onClick={onClick}
        >
          {content}
        </Link>
      </motion.div>
    );
  }
  
  // Otherwise, render as button
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <button
        type={type}
        className={cn(buttonStyles, "group")}
        onClick={onClick}
        disabled={disabled}
      >
        {content}
      </button>
    </motion.div>
  );
} 