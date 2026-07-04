# Distinción Académica — Invitación de graduación

Microsite de invitación digital construido con **Next.js 15 (App Router)**,
**TypeScript**, **Tailwind CSS** y **Framer Motion**.

## Dirección de diseño

Reinterpretación editorial "dark ledger" de una invitación de graduación:
tinta azul-noche, pergamino, latón envejecido y acento burdeos, en lugar
del clásico crema + dorado + script. El elemento de firma es un **sello de
cera / medallón de latón** grabado en el hero (`components/SealMedallion.tsx`)
y una **cinta de programa** que conecta cada punto del itinerario como el
listón de un diploma real (`components/Program.tsx`).

## Empezar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Editar el contenido del evento

Toda la información editable (nombre de la graduada, fecha, programa, sede,
cita) vive en un único archivo:

```
lib/event.ts
```

Cambia los valores ahí — el resto de la página se actualiza automáticamente,
incluyendo la cuenta regresiva, el `.ics` descargable y el enlace a Google
Calendar.

## Estructura del proyecto

```
app/
  layout.tsx        # Fuentes (Fraunces, IBM Plex Sans/Mono) y metadata
  page.tsx           # Ensambla todas las secciones dentro del contenedor "tarjeta"
  globals.css         # Tokens base, textura de papel, accesibilidad
components/
  Hero.tsx            # Encabezado con sello animado
  SealMedallion.tsx    # Elemento de firma visual (SVG animado)
  Countdown.tsx        # Cuenta regresiva estilo boleto/transcript
  Quote.tsx            # Cita de la graduada
  Honoree.tsx           # Retrato con marco tipo lámina académica
  Program.tsx            # Itinerario con cinta vertical animada
  Venue.tsx               # Sede + mapa embebido de Google Maps
  CalendarCTA.tsx          # Descarga .ics / enlace a Google Calendar
  Footer.tsx
  Reveal.tsx                # Wrapper de animación on-scroll reutilizable
lib/
  event.ts             # Fuente única de datos del evento
  useCountdown.ts        # Hook de cuenta regresiva
  generateICS.ts           # Generación de archivo .ics y URL de Google Calendar
```

## Accesibilidad y rendimiento

- Contraste AA verificado en textos sobre fondo tinta y pergamino.
- `:focus-visible` visible en todos los elementos interactivos.
- `prefers-reduced-motion` respetado globalmente.
- Imagen del hero optimizada con `next/image`.
- Mapa cargado con `loading="lazy"`.

## Notas de despliegue

- El mapa usa el modo de incrustación pública de Google Maps (`output=embed`),
  sin necesidad de API key. Para un mapa con marcador personalizado o
  autocompletado de direcciones, sustituye por la API de Google Maps con tu
  propia clave.
- La foto de portada usa una URL de Unsplash como placeholder. Sustitúyela
  por la fotografía real de la graduada en `components/Honoree.tsx`.
