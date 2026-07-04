"use client";

import { CalendarPlus } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { eventData } from "@/lib/event";
import { downloadICS, googleCalendarUrl } from "@/lib/generateICS";

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

export function CalendarCTA() {
  const icsPayload = {
    title: `Graduación de ${eventData.graduateName}`,
    description: `${eventData.degree} · ${eventData.institution}`,
    location: eventData.venue.address,
    start: eventData.date,
  };

  return (
    <section className="relative overflow-hidden bg-white px-6 pt-20 pb-36">

      {/* Fondo tipo cuaderno */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,#ffffff_0px,#ffffff_32px,#dbeafe_33px)] opacity-90" />

      {/* Marco inferior */}
      <img
        src="/themes/preschool/calendar/calendar-bottom.png"
        alt=""
        className="absolute bottom-0 left-0 w-full pointer-events-none select-none"
      />

      <div className="relative z-20">

        <Reveal className="mx-auto max-w-md">

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
              📅 ¡No olvides la fecha!
            </p>

            <h2
              className="mt-3 text-4xl font-black text-gray-800"
              style={{
                fontFamily: "'Comic Sans MS','Fredoka',cursive",
              }}
            >
              Guarda el Evento
            </h2>

            <p
              className="mt-4 text-lg text-gray-600"
              style={{
                fontFamily: "'Comic Sans MS','Fredoka',cursive",
              }}
            >
              Nos encantará contar con tu compañía en este día tan especial.
            </p>
          </motion.div>

          {/* Tarjeta */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.2}
            className="mt-10 rounded-3xl border-4 border-yellow-300 bg-white p-8 shadow-2xl"
          >
            <div className="text-center">

              <div className="text-6xl">
                📆
              </div>

              <p
                className="mt-4 text-xl font-bold text-gray-800"
                style={{
                  fontFamily: "'Comic Sans MS','Fredoka',cursive",
                }}
              >
                ¡Aparta este día en tu calendario!
              </p>

              <p
                className="mt-2 text-gray-600"
                style={{
                  fontFamily: "'Comic Sans MS','Fredoka',cursive",
                }}
              >
                Así no te perderás esta hermosa celebración.
              </p>

              <div className="mt-8 flex flex-col gap-4">

                {/* Botón ICS */}

                <button
                  onClick={() => downloadICS(icsPayload)}
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
                  <CalendarPlus className="h-6 w-6" />

                  Añadir al Calendario
                </button>

                {/* Google */}

                <a
                  href={googleCalendarUrl(icsPayload)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
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
                  🌈 Abrir en Google Calendar
                </a>

              </div>

            </div>

          </motion.div>

        </Reveal>

      </div>

    </section>
  );
}