"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
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

const groups = [
  {
    name: '3° "A" 🎓',
    image: "/themes/preschool/hero/3A.jpeg",
  },
  {
    name: '3° "B" 🎓',
    image: "/themes/preschool/hero/3B.jpeg",
  },
  {
    name: '3° "C" 🎓',
    image: "/themes/preschool/hero/3C.jpeg",
  },
];

export function Honoree() {
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    name: string;
  } | null>(null);

  return (
    <>
      <section className="relative overflow-hidden bg-white px-6 py-20">

        {/* ================= Fondo tipo cuaderno ================= */}

        <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,#ffffff_0px,#ffffff_32px,#dbeafe_33px)] opacity-90" />

        {/* ================= Marco inferior ================= */}

        <img
          src="/themes/preschool/honoree/honoree-bottom.png"
          alt=""
          className="absolute bottom-0 left-0 w-full pointer-events-none select-none"
        />

        {/* ================= Contenido ================= */}

        <div className="relative z-20">

          <Reveal className="mx-auto max-w-md">

            {/* Encabezado */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <p
                className="text-sm uppercase tracking-[0.35em] text-gray-800"
                style={{
                  fontFamily: "'Comic Sans MS','Fredoka',cursive",
                }}
              >
                RECUERDOS DE NUESTRA GENERACIÓN
              </p>

              <h2
                className="mt-3 text-4xl font-black text-gray-800"
                style={{
                  fontFamily: "'Comic Sans MS','Fredoka',cursive",
                }}
              >
                Terceros Años
              </h2>

              <p
                className="mt-3 text-lg text-gray-600"
                style={{
                  fontFamily: "'Comic Sans MS','Fredoka',cursive",
                }}
              >
                Generación 2023 – 2026
              </p>
            </motion.div>

            {/* Tarjetas */}

            <div className="space-y-10">

              {groups.map((group, index) => (

                <motion.div
                  key={group.name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={index * 0.15}
                  className="relative rounded-[26px] border-[3px] border-yellow-300 bg-white p-3 shadow-xl"
                >

                  {/* Esquinas */}

                  <span className="absolute left-2 top-2 h-5 w-5 rounded-tl-md border-l-4 border-t-4 border-red-500" />
                  <span className="absolute right-2 top-2 h-5 w-5 rounded-tr-md border-r-4 border-t-4 border-green-500" />
                  <span className="absolute bottom-2 left-2 h-5 w-5 rounded-bl-md border-b-4 border-l-4 border-purple-500" />
                  <span className="absolute bottom-2 right-2 h-5 w-5 rounded-br-md border-b-4 border-r-4 border-sky-500" />

                  {/* Imagen */}

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      setSelectedImage({
                        image: group.image,
                        name: group.name,
                      })
                    }
                    className="group relative aspect-[3/2] cursor-pointer overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={group.image}
                      alt={group.name}
                      fill
                      priority
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/15" />

                    <div
                      className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-sm font-bold shadow-lg"
                      style={{
                        fontFamily: "'Comic Sans MS','Fredoka',cursive",
                      }}
                    >
                      🔍 Ver foto
                    </div>

                  </motion.div>

                  {/* Pie */}

                  <div className="flex items-center justify-between px-2 pb-1 pt-4">

                    <p
                      className="text-xl font-black text-gray-800"
                      style={{
                        fontFamily: "'Comic Sans MS','Fredoka',cursive",
                      }}
                    >
                      {group.name}
                    </p>

                    <span
                      className="text-xs text-gray-700"
                      style={{
                        fontFamily: "'Comic Sans MS','Fredoka',cursive",
                      }}
                    >
                      2023 – 2026
                    </span>

                  </div>

                </motion.div>

              ))}

            </div>

          </Reveal>

        </div>

      </section>

      {/* ================= LIGHTBOX ================= */}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-5 backdrop-blur-md"
          >

            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 20,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl"
            >

              <div className="relative overflow-hidden rounded-3xl border-4 border-yellow-300 bg-white">

                {/* Fondo cuaderno */}

                <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,#ffffff_0px,#ffffff_32px,#dbeafe_33px)] opacity-90" />

                <div className="relative z-20 p-4">

                  <div className="relative h-[75vh] w-full">

                    <Image
                      src={selectedImage.image}
                      alt={selectedImage.name}
                      fill
                      className="rounded-2xl object-contain"
                    />

                  </div>

                  <h3
                    className="mt-5 text-center text-3xl font-black text-gray-800"
                    style={{
                      fontFamily: "'Comic Sans MS','Fredoka',cursive",
                    }}
                  >
                    {selectedImage.name}
                  </h3>

                </div>

              </div>

              {/* Botón cerrar */}

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-xl font-bold text-white shadow-xl transition hover:scale-110"
              >
                ✕
              </button>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}