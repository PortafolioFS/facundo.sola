# Facundo Sola Portfolio

Portfolio profesional construido con Next.js App Router, React y Tailwind CSS.
El sitio presenta experiencia en soporte técnico IT, formación en desarrollo de
software, proyectos y certificaciones.

## Arquitectura

La experiencia pública es estática y server-first:

- Perfil, experiencia, habilidades, proyectos y formación: lib/portfolio.ts.
- Rutas y metadatos: app/.
- Secciones visuales reutilizables: components/.
- Única isla cliente principal: diálogo del formulario de contacto.
- Envío de mensajes: app/api/contact/route.ts mediante Resend.

MongoDB queda disponible para una futura necesidad de persistencia server-side,
pero no participa del render ni del contenido actual.

Ver docs/ARCHITECTURE.md y docs/ROADMAP.md.

## Variables de entorno

    RESEND_API_KEY=
    CONTACT_TO_EMAIL=solafacu@gmail.com
    CONTACT_FROM_EMAIL=onboarding@resend.dev
    MONGODB_URI=
    MONGODB_DB=
    NEXT_PUBLIC_SITE_URL=

En producción:

- CONTACT_FROM_EMAIL debe usar un remitente permitido por Resend.
- NEXT_PUBLIC_SITE_URL puede definir el dominio canónico. En Vercel también se
  detecta automáticamente VERCEL_PROJECT_PRODUCTION_URL.

## Desarrollo local

    npm install
    npm run dev

Abrir http://localhost:3000.

## Validaciones

    npm run lint
    npm run build
    npm audit --omit=dev

También se debe revisar visualmente la Home y /projects en anchos móviles y de
escritorio antes de publicar.
