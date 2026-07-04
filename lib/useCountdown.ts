"use client";

import { useEffect, useState } from "react";

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

function calculate(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, isPast: false };
}

/**
 * Calcula el tiempo restante hasta una fecha objetivo, actualizando cada segundo.
 * Evita desajustes de hidratación calculando el primer valor únicamente en el cliente.
 */
export function useCountdown(target: Date): TimeLeft | null {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculate(target));
    const interval = setInterval(() => {
      setTimeLeft(calculate(target));
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return timeLeft;
}
