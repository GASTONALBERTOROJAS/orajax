"use client";

import { motion } from "framer-motion";

interface OrajaxLogoProps {
  size?: number;
  animated?: boolean;
}

export default function OrajaxLogo({ size = 120, animated = true }: OrajaxLogoProps) {
  if (!animated) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logo-orajax.png"
        alt="Orajax logo"
        width={size}
        height={size}
        style={{ width: size, height: size, objectFit: "contain", display: "block" }}
      />
    );
  }

  return (
    <motion.img
      src="/logo-orajax.png"
      alt="Orajax logo"
      width={size}
      height={size}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ width: size, height: size, objectFit: "contain", display: "block" }}
    />
  );
}
