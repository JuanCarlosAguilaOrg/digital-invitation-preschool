import { Hero } from "@/components/Hero";
import { Countdown } from "@/components/Countdown";
import { Quote } from "@/components/Quote";
import { Honoree } from "@/components/Honoree";
import { Program } from "@/components/Program";
import { Venue } from "@/components/Venue";
import { CalendarCTA } from "@/components/CalendarCTA";
import { Footer } from "@/components/Footer";
import { eventData } from "@/lib/event";
import { MusicPlayer } from "@/components/MusicPlayer";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center bg-[#0e3fae] py-0 sm:py-14">
      {/* Contenedor "tarjeta de invitación": ancho fijo en desktop,
          full-bleed en móvil — resuelve la limitación responsive
          del diseño original, que no tenía un tratamiento de desktop. */}
      <div className="w-full max-w-[480px] overflow-hidden bg-parchment shadow-card sm:rounded-[32px]">
       <MusicPlayer />

        <Hero />
        <Countdown target={eventData.date} />
        <Quote />
        <Honoree />
        <Program />
        <Venue />
        <CalendarCTA />
        <Footer />
      </div>
    </main>
  );
}