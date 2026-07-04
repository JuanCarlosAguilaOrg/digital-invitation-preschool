"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
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

export function Quote() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20">

      {/* Fondo tipo cuaderno */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,#ffffff_0px,#ffffff_32px,#dbeafe_33px)] opacity-90" />

      {/* Marco inferior */}
      <img
        src="/themes/preschool/quote/quote-bottom.png"
        alt=""
        className="absolute bottom-0 left-0 w-full pointer-events-none select-none"
      />

      <div className="relative z-20">

        <Reveal className="mx-auto max-w-md">

          {/* Encabezado */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >

            <p
              className="uppercase tracking-[0.35em] text-green-600"
              style={{
                fontFamily: "'Comic Sans MS','Fredoka',cursive",
              }}
            >
              💖 para quienes han sido parte de este camino 💖
            </p>

            <h2
              className="mt-3 text-4xl font-black text-gray-800"
              style={{
                fontFamily: "'Comic Sans MS','Fredoka',cursive",
              }}
            >
              Un pedacito de mi corazón 💖
            </h2>

          </motion.div>

          {/* Tarjeta */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.2}
            className="mt-10 rounded-3xl border-4 border-yellow-300 bg-white p-8 shadow-xl"
          >

            <div className="text-center">

              <span className="text-6xl">
                💌
              </span>

              <p
                className="mt-4 text-xl leading-9 text-gray-700"
                style={{
                  fontFamily: "'Comic Sans MS','Fredoka',cursive",
                }}
              >
                {eventData.quote}
              </p>

              <div className="mt-8 h-1 w-20 rounded-full bg-yellow-300 mx-auto" />

                <p
                  className="mt-5 text-lg font-bold text-pink-500"
                  style={{
                    fontFamily: "'Comic Sans MS','Fredoka',cursive",
                  }}
                >
                  🎓 {eventData.quoteAuthor} 🎓
                </p>

            </div>

          </motion.div>

        </Reveal>

      </div>

    </section>
  );
}