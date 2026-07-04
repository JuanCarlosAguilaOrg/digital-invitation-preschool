"use client";

import { motion } from "framer-motion";

/**
 * Elemento de firma del diseño: un sello de cera / medalla de latón
 * que se "graba" al entrar en pantalla, evocando el sello de un
 * documento oficial o acta de titulación. Sustituye al birrete
 * ilustrado genérico del diseño original por una pieza más singular.
 */
export function SealMedallion({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
    >
      <svg
        viewBox="0 0 200 200"
        className="h-full w-full drop-shadow-[0_10px_25px_rgba(184,134,60,0.35)]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="brassGradient" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#E9C97D" />
            <stop offset="55%" stopColor="#B8863C" />
            <stop offset="100%" stopColor="#7C5A25" />
          </radialGradient>
          <linearGradient id="ribbonGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8C3A44" />
            <stop offset="100%" stopColor="#4E1D23" />
          </linearGradient>
        </defs>

        {/* Cintas colgantes */}
        <path
          d="M76 150 L60 196 L84 182 L100 198 L116 182 L140 196 L124 150 Z"
          fill="url(#ribbonGradient)"
          opacity={0.95}
        />

        {/* Disco exterior */}
        <circle
          cx="100"
          cy="86"
          r="72"
          fill="url(#brassGradient)"
          stroke="#4E3413"
          strokeWidth="2"
        />
        {/* Anillo dentado */}
        <circle
          cx="100"
          cy="86"
          r="72"
          fill="none"
          stroke="#F7F1E1"
          strokeOpacity="0.25"
          strokeWidth="1"
          strokeDasharray="2 6"
        />
        {/* Disco interior */}
        <circle
          cx="100"
          cy="86"
          r="54"
          fill="none"
          stroke="#241705"
          strokeOpacity="0.4"
          strokeWidth="1.5"
        />

        {/* Iniciales grabadas */}
        <text
          x="100"
          y="98"
          textAnchor="middle"
          fontFamily="var(--font-fraunces), serif"
          fontStyle="italic"
          fontSize="46"
          fill="#241705"
          fillOpacity="0.85"
        >
          V
        </text>

        {/* Texto perimetral */}
        <path
          id="circlePath"
          d="M 100, 86 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
          fill="none"
        />
        <text
          fontFamily="var(--font-plex-mono), monospace"
          fontSize="7.5"
          letterSpacing="3"
          fill="#241705"
          fillOpacity="0.75"
        >
          <textPath href="#circlePath" startOffset="2%">
            DISTINCIÓN ACADÉMICA · PROMOCIÓN 2026 ·
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
}
