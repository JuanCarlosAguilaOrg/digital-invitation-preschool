"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { eventData, type ProgramItem } from "@/lib/event";

const icons = {
  "map-pin": "📍",
  sparkles: "🎓",
  trophy: "📚",
  utensils: "🍰",
  "party-popper": "🎉",
} as const;

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

function ProgramRow({
  item,
  index,
}: {
  item: ProgramItem;
  index: number;
}) {
  const icon = icons[item.icon];

  return (
    <Reveal
      delay={index * 0.08}
      className="relative flex gap-5 pb-10 last:pb-0"
    >
      {/* Icono */}

      <div className="relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-full border-4 border-white bg-yellow-300 shadow-lg">
        <span className="text-xl">{icon}</span>
      </div>

      <div className="flex-1">

        {/* Número */}

        <h3
          className="text-5xl font-black leading-none text-sky-500"
          style={{
            fontFamily: "'Comic Sans MS','Fredoka',cursive",
          }}
        >
          {item.time}
        </h3>

        {/* Título */}

        <h4
          className="mt-2 text-2xl font-black text-gray-800"
          style={{
            fontFamily: "'Comic Sans MS','Fredoka',cursive",
          }}
        >
          {item.title}
        </h4>

        {/* Descripción */}

        <div className="mt-3 rounded-2xl border-2 border-dashed border-yellow-300 bg-white/90 p-4 shadow-md">
          <p
            className="whitespace-pre-line text-base leading-7 text-gray-700"
            style={{
              fontFamily: "'Comic Sans MS','Fredoka',cursive",
            }}
          >
            {item.subtitle}
          </p>
        </div>

      </div>
    </Reveal>
  );
}

export function Program() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-40 pb-32">

      {/* Fondo cuaderno */}

      <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,#ffffff_0px,#ffffff_32px,#dbeafe_33px)] opacity-90" />

      {/* Banderines */}

      <img
        src="/themes/preschool/program/banner-top.png"
        alt=""
        className="absolute top-0 left-0 w-full pointer-events-none select-none"
      />

      {/* Crayola */}

      <img
        src="/themes/preschool/program/crayon-left.png"
        alt=""
        className="
          absolute
          -left-8
          top-24
          h-[78%]
          opacity-40
          blur-[1px]
          pointer-events-none
          select-none
        "
        style={{
          maskImage:
            "linear-gradient(to right, black 35%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 35%, transparent 100%)",
        }}
      />

      {/* Marco inferior */}

      <img
        src="/themes/preschool/program/border-bottom.png"
        alt=""
        className="absolute bottom-0 left-0 w-full pointer-events-none select-none"
      />

      <div className="relative z-20">

        {/* Encabezado */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-md text-center"
        >
          <p
            className="uppercase tracking-[0.35em] text-gray-800"
            style={{
              fontFamily: "'Comic Sans MS','Fredoka',cursive",
            }}
          >
            ✏️ Itinerario 🎈
          </p>

          <h2
            className="mt-3 text-4xl font-black text-gray-800"
            style={{
              fontFamily: "'Comic Sans MS','Fredoka',cursive",
            }}
          >
            Programa
          </h2>

          <p
            className="mt-3 text-gray-600"
            style={{
              fontFamily: "'Comic Sans MS','Fredoka',cursive",
            }}
          >
            Acompáñanos durante esta hermosa ceremonia.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mx-auto max-w-xl pl-8">

          <svg
            className="pointer-events-none absolute left-[23px] top-2 h-full w-1"
            viewBox="0 0 4 100"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="2"
              y1="0"
              x2="2"
              y2="100"
              stroke="url(#timeline)"
              strokeWidth="3"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
            />

            <defs>
              <linearGradient
                id="timeline"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="30%" stopColor="#22C55E" />
                <stop offset="60%" stopColor="#FACC15" />
                <stop offset="100%" stopColor="#EF4444" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative">
            {eventData.program.map((item, index) => (
              <ProgramRow
                key={index}
                item={item}
                index={index}
              />
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}