"use client";

import { motion } from "framer-motion";
import { SealMedallion } from "./SealMedallion";
import { eventData } from "@/lib/event";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.2, 0.8, 0.2, 1],
    },
  }),
};

const colors = [
  "text-red-500",
  "text-orange-500",
  "text-yellow-400",
  "text-lime-500",
  "text-green-500",
  "text-cyan-500",
  "text-sky-500",
  "text-blue-500",
  "text-purple-500",
  "text-pink-500",
];

const rotations = [
  "-rotate-6",
  "rotate-3",
  "-rotate-2",
  "rotate-6",
  "-rotate-4",
  "rotate-2",
  "-rotate-5",
  "rotate-4",
  "-rotate-2",
  "rotate-5",
];

function PreschoolTitle() {
  const word = "PRESCOLAR";

  return (
    <div className="mt-2 flex justify-center">
      <h2
        className="flex text-3xl md:text-4xl font-black uppercase tracking-wider"
        style={{
          fontFamily: "'Comic Sans MS', 'Fredoka', 'Baloo 2', cursive",
        }}
      >
        {word.split("").map((letter, index) => (
          <span
            key={index}
            className={`
              inline-block
              mx-[1px]
              ${colors[index]}
              ${rotations[index]}
              drop-shadow-[2px_2px_0_rgba(0,0,0,0.18)]
            `}
          >
            {letter}
          </span>
        ))}
      </h2>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-32 pb-32">

      {/* Fondo tipo cuaderno */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,#ffffff_0px,#ffffff_32px,#dbeafe_33px)] opacity-90" />

      {/* Crayolas superiores */}
      <img
        src="/themes/preschool/hero/crayons-top.png"
        alt=""
        className="absolute top-0 left-0 w-full z-20 pointer-events-none select-none"
      />

      {/* Crayolas inferiores */}
      <img
        src="/themes/preschool/hero/crayons-bottom.png"
        alt=""
        className="absolute bottom-0 left-0 w-full z-20 pointer-events-none select-none"
      />

      {/* Contenido */}
      <div className="relative z-30 mx-auto max-w-sm text-center">
      {/*
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="mb-3 text-xs tracking-[0.4em] uppercase text-gray-600"
        >
          YOU ARE INVITED TO
        </motion.p>

      
      *
      
      <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
        >
          <SealMedallion className="mx-auto h-28 w-28" />
        </motion.div>
         <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="mt-4 text-5xl font-black text-gray-800"
        >
          {eventData.graduateName}
        </motion.h1>
      
      */}
        
        
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.5}
          className="mt-2 text-3xl font-extrabold text-gray-800"
          style={{
            fontFamily: "'Comic Sans MS', 'Fredoka', cursive",
          }}
        >
          CEREMONIA DE GRADUACION
        </motion.p>

        {/* Título multicolor */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
        >
          <PreschoolTitle />
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.5}
          className="mt-2 text-3xl font-extrabold text-gray-800"
          style={{
            fontFamily: "'Comic Sans MS', 'Fredoka', cursive",
          }}
        >
          JARDIN DE NIÑOS JOSE VASCONCELOS
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.6}
          className="mt-8 flex justify-center"
        >
          <img
            src="/themes/preschool/hero/childrens.png"
            alt={eventData.graduateName}
            className="h-72 w-72 rounded-full border-8 border-white object-cover shadow-2xl"
          />
        </motion.div>

      </div>

    </section>
  );
}