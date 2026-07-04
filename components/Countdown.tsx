"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCountdown } from "@/lib/useCountdown";
import { Reveal } from "./Reveal";

function Digit({
  value,
  unit,
  color,
}: {
  value: number;
  unit: string;
  color: string;
}) {
  const display = value.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-3">

      <div
        className={`
          relative
          flex
          h-16
          w-16
          sm:h-20
          sm:w-20
          items-center
          justify-center
          rounded-3xl
          border-[4px]
          border-white
          shadow-2xl
          ${color}
        `}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-3xl sm:text-4xl font-black text-white drop-shadow-md"
            style={{
              fontFamily: "'Comic Sans MS','Fredoka',cursive",
            }}
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>

      <span
        className="text-xs font-bold uppercase tracking-widest text-gray-700"
        style={{
          fontFamily: "'Comic Sans MS','Fredoka',cursive",
        }}
      >
        {unit}
      </span>

    </div>
  );
}

export function Countdown({ target }: { target: Date }) {

  const timeLeft = useCountdown(target);

  const colors = [
    "bg-gradient-to-b from-red-300 to-red-500",
    "bg-gradient-to-b from-yellow-300 to-yellow-500",
    "bg-gradient-to-b from-green-300 to-green-500",
    "bg-gradient-to-b from-sky-300 to-sky-500",
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 pt-20 pb-52">

      {/* Fondo tipo cuaderno */}

      <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,#ffffff_0px,#ffffff_32px,#dbeafe_33px)] opacity-90" />

      {/* Marco inferior */}

      <img
        src="/themes/preschool/countdown/countdown-bottom.png"
        alt=""
        className="absolute bottom-0 left-0 w-full pointer-events-none select-none"
      />

      <div className="relative z-20">

        <Reveal className="mx-auto max-w-lg">

          {/* Encabezado */}

          <div className="text-center">

            <p
              className="uppercase tracking-[0.35em] text-gray-700"
              style={{
                fontFamily: "'Comic Sans MS','Fredoka',cursive",
              }}
            >
              ⏰ YA FALTA MUY POCO
            </p>

            <h2
              className="mt-3 text-4xl font-black text-gray-800"
              style={{
                fontFamily: "'Comic Sans MS','Fredoka',cursive",
              }}
            >
              Cuenta Regresiva
            </h2>

            <p
              className="mt-3 text-gray-600"
              style={{
                fontFamily: "'Comic Sans MS','Fredoka',cursive",
              }}
            >
              ¡Estamos contando los días para celebrar juntos!
            </p>

          </div>

          {/* Tarjeta del contador */}

          <div
            className="
              relative
              z-30
              mt-12
              rounded-[32px]
              border-[4px]
              border-yellow-300
              bg-white/95
              p-8
              shadow-[0_20px_45px_rgba(0,0,0,.18)]
              backdrop-blur-sm
            "
          >

            {/* Chinchetas */}

            <div className="absolute left-5 top-5 h-4 w-4 rounded-full bg-red-400 shadow-md" />
            <div className="absolute right-5 top-5 h-4 w-4 rounded-full bg-blue-400 shadow-md" />
            <div className="absolute bottom-5 left-5 h-4 w-4 rounded-full bg-green-400 shadow-md" />
            <div className="absolute bottom-5 right-5 h-4 w-4 rounded-full bg-yellow-400 shadow-md" />

            <div className="flex flex-wrap justify-center gap-5">

              {timeLeft ? (
                <>
                  <Digit value={timeLeft.days} color={colors[0]} unit="Días" />
                  <Digit value={timeLeft.hours} color={colors[1]} unit="Horas" />
                  <Digit value={timeLeft.minutes} color={colors[2]} unit="Min" />
                  <Digit value={timeLeft.seconds} color={colors[3]} unit="Seg" />
                </>
              ) : (
                <>
                  {["Días", "Horas", "Min", "Seg"].map((unit, i) => (
                    <Digit
                      key={unit}
                      value={0}
                      color={colors[i]}
                      unit={unit}
                    />
                  ))}
                </>
              )}

            </div>

          </div>

        </Reveal>

      </div>

    </section>
  );
}