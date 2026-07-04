export const eventData = {
  eyebrow: "Ceremonia de graduación",
  title: "Graduacion",
  titleAccent: "",
  graduateName: "Generacion 2025 - 2026",
  degree: "Jardin de Niños",
  institution: "Jose Vasconcelos",
  date: new Date("2026-07-07T10:00:00-13:00"),
  dateLabel: "07 de julio de 2026",
  timeLabel: "10:00 am",
  quote:
    "Entre juegos, risas y aprendizajes crecimos sin darnos cuenta. Hoy dejamos el preescolar con el corazón lleno de recuerdos y la ilusión de descubrir un mundo nuevo.",
  quoteAuthor: "Gracias por acompañarme",
  photoAlt: "Retrato de la graduada con toga y birrete",
  program: [
  {
    time: "1",
    title: "Bienvenida",
    subtitle: "Recepción y bienvenida a todos los presentes.",
    icon: "map-pin" as const,
  },
  {
    time: "2",
    title: "Entrada de los alumnos egresados",
    subtitle: "Ingreso de los alumnos de tercer grado al recinto.",
    icon: "sparkles" as const,
  },
  {
    time: "3",
    title: "Demostración de habilidades",
    subtitle:
      "Presentación artística dirigida por el maestro de música Omar Adorno Martínez.",
    icon: "party-popper" as const,
  },
  {
    time: "4",
    title: "Último pase de lista y entrega de diplomas",
    subtitle:
      'Grupo 3° "A"\nPalabras de despedida por la alumna Bryana Olinka González Méndez.',
    icon: "trophy" as const,
  },
  {
    time: "5",
    title: "Último pase de lista y entrega de diplomas",
    subtitle:
      'Grupo 3° "B"\nPalabras de despedida por la alumna Brenda Tlacomulco García.',
    icon: "trophy" as const,
  },
  {
    time: "6",
    title: "Último pase de lista y entrega de diplomas",
    subtitle:
      'Grupo 3° "C"\nPalabras de despedida por la alumna Mia Alexa Martínez Luna.',
    icon: "trophy" as const,
  },
  {
    time: "7",
    title: "Canto de despedida",
    subtitle: "Interpretado por los alumnos de tercer grado.",
    icon: "party-popper" as const,
  },
  {
    time: "8",
    title: "Mensaje de despedida",
    subtitle: "Palabras finales por las docentes de tercer grado.",
    icon: "sparkles" as const,
  },
],
  venue: {
    name: "Jardin de Niños Jose Vasconcelos",
    city: "Puebla, México",
    address: "Salvador Serrano, Xilotzingo, INFONAVIT Luis N. Morones, 72590 Heroica Puebla de Zaragoza, Pue.",
    mapQuery: "INFONAVIT Luis N. Morones, Heroica Puebla de Zaragoza Puebla, México",
  },
};

export type ProgramItem = (typeof eventData.program)[number];
