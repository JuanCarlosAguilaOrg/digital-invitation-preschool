"use client";

import Image from "next/image";
import { Globe, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white px-6 pt-16 pb-20">

      {/* Fondo tipo cuaderno */}

      <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,#ffffff_0px,#ffffff_32px,#dbeafe_33px)] opacity-90" />

      {/* Marco inferior */}

      <img
        src="/themes/preschool/footer/footer-bottom.png"
        alt=""
        className="absolute bottom-0 left-0 w-full pointer-events-none select-none"
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-20 mx-auto max-w-md text-center"
      >

        <p
          className="uppercase tracking-[0.35em] text-green-600"
          style={{
            fontFamily: "'Comic Sans MS','Fredoka',cursive",
          }}
        >
          🦊 Patrocinado por
        </p>

        {/* Logo */}

        <div className="mt-5 flex justify-center">

          <Image
            src="/themes/preschool/footer/logo-vulpex.png"
            alt="Vulpex"
            width={70}
            height={70}
            className="rounded-xl shadow-lg"
          />

        </div>

        <h3
          className="mt-4 text-3xl font-black text-gray-800"
          style={{
            fontFamily: "'Comic Sans MS','Fredoka',cursive",
          }}
        >
          Vulpex
        </h3>

        <p
          className="mt-3 text-gray-600"
          style={{
            fontFamily: "'Comic Sans MS','Fredoka',cursive",
          }}
        >
          Creamos invitaciones digitales, páginas web y soluciones tecnológicas
          para hacer especiales tus momentos.
        </p>

        {/* Botones */}

        <div className="mt-8 flex flex-col gap-4">

          <a
            href="https://vulpexmx.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-gradient-to-r
              from-red-400
              via-yellow-400
              to-green-400
              px-6
              py-4
              text-lg
              font-black
              text-white
              shadow-lg
              transition
              duration-300
              hover:scale-105
            "
            style={{
              fontFamily: "'Comic Sans MS','Fredoka',cursive",
            }}
          >
            <Globe className="h-5 w-5" />

            Nuestros trabajos
          </a>

          <a
            href="https://wa.me/522212082035"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-3
              rounded-full
              border-4
              border-sky-300
              bg-sky-400
              px-6
              py-4
              text-lg
              font-black
              text-white
              shadow-lg
              transition
              duration-300
              hover:scale-105
            "
            style={{
              fontFamily: "'Comic Sans MS','Fredoka',cursive",
            }}
          >
            <MessageCircle className="h-5 w-5" />

            ¿Quieres una invitación digital?
          </a>

        </div>

        <p
          className="mt-10 text-xs text-gray-500"
          style={{
            fontFamily: "'Comic Sans MS','Fredoka',cursive",
          }}
        >
          © 2026 Vulpex · Diseñado con 💛 para celebrar grandes momentos.
        </p>

      </motion.div>

    </footer>
  );
}