"use client";

import { ExternalLink } from "lucide-react";
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

export function Venue() {
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    eventData.venue.address
  )}`;

  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    eventData.venue.mapQuery
  )}&output=embed`;

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20">

      {/* Fondo tipo cuaderno */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,#ffffff_0px,#ffffff_32px,#dbeafe_33px)] opacity-90" />

      {/* Marco inferior */}
      <img
        src="/themes/preschool/venue/venue-bottom.png"
        alt=""
        className="absolute bottom-0 left-0 w-full pointer-events-none select-none"
      />

      <div className="relative z-20">

        {/* Encabezado */}

        <Reveal className="mx-auto mb-12 max-w-md">

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
              📍 ¡Te esperamos aquí!
            </p>

            <h2
              className="mt-3 text-4xl font-black text-gray-800"
              style={{
                fontFamily: "'Comic Sans MS','Fredoka',cursive",
              }}
            >
              Ubicación
            </h2>

            <p
              className="mt-4 text-2xl font-bold text-sky-600"
              style={{
                fontFamily: "'Comic Sans MS','Fredoka',cursive",
              }}
            >
              {eventData.venue.name}
            </p>

            <p
              className="mt-3 text-gray-600"
              style={{
                fontFamily: "'Comic Sans MS','Fredoka',cursive",
              }}
            >
              {eventData.venue.address}
            </p>

          </motion.div>

        </Reveal>

        {/* Tarjeta */}

        <Reveal delay={0.2} className="mx-auto max-w-md">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border-4 border-yellow-300 bg-white shadow-2xl"
          >

            {/* Mapa */}

            <div className="h-72 w-full">

              <iframe
                title={`Mapa de ${eventData.venue.name}`}
                src={mapsEmbedUrl}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>

            {/* Botón */}

            <a
              href={mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                gap-3
                bg-gradient-to-r
                from-red-400
                via-yellow-400
                to-green-400
                px-6
                py-5
                text-lg
                font-black
                text-white
                transition-transform
                duration-300
                hover:scale-[1.02]
              "
              style={{
                fontFamily: "'Comic Sans MS','Fredoka',cursive",
              }}
            >
              🗺️ Cómo llegar

              <ExternalLink
                className="h-5 w-5"
                strokeWidth={2}
              />

            </a>

          </motion.div>

        </Reveal>

      </div>

    </section>
  );
}