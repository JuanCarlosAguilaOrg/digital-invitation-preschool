export const eventData = {
  eyebrow: "Ceremonia de graduación",
  title: "Distinción",
  titleAccent: "Académica",
  graduateName: "Valentina Ramírez Soto",
  degree: "Licenciatura en Arquitectura",
  institution: "Universidad Autónoma de Puebla",
  date: new Date("2026-07-07T20:00:00-09:00"),
  dateLabel: "07 de julio de 2026",
  timeLabel: "9:00 am",
  quote:
    "Cierro una etapa con la mochila llena de recuerdos y la mente lista para seguir aprendiendo.",
  quoteAuthor: "La graduada",
  photoAlt: "Retrato de la graduada con toga y birrete",
  program: [
    {
      time: "09:00 am",
      title: "Recepción en salón",
      icon: "map-pin" as const,
    },
    {
      time: "09:30 am",
      title: "Inicio de ceremonia",
      icon: "sparkles" as const,
    },
    {
      time: "11:00 am",
      title: "Entrega de reconocimientos",
      icon: "trophy" as const,
    },
    {
      time: "12:00 pm",
      title: "Comida",
      icon: "utensils" as const,
    },
    {
      time: "02:00 pm",
      title: "Fiesta",
      icon: "party-popper" as const,
    },
  ],
  venue: {
    name: "Salón Los Encinos",
    city: "Puebla, México",
    address: "Av. Reforma 1234, Centro Histórico, 72000 Puebla, Pue.",
    mapQuery: "Centro Histórico de Puebla, Puebla, México",
  },
};

export type ProgramItem = (typeof eventData.program)[number];
