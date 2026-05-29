# Facundo Sola Portfolio

Portfolio personal construido con Next.js App Router, React 19 y Tailwind CSS 4.

## Estrategia de datos

El contenido publico del portafolio se mantiene estatico por decision de arquitectura.

- MongoDB Atlas queda disponible para persistencia server-side cuando una ruta lo necesite, por ejemplo leads o formularios.
- La conexion se centraliza en `lib/mongodb.ts` con `MONGODB_URI` y `attachDatabasePool`.
- No se usa Mongoose ni modelos persistentes por defecto.
- El contenido editable vive en archivos del repo:
  - Perfil, proyectos y certificados: `lib/portfolio.ts`
  - Proyectos destacados en Home: `components/projects-section.tsx`
  - Proyectos ampliados: `app/projects/page.tsx`
  - Formacion y certificados: `components/training-section.tsx`

## Cuando ampliar esta decision

Tiene sentido ampliar la persistencia si aparece una necesidad real de:

1. editar contenido sin tocar codigo ni redeployar, o
2. guardar mas datos operativos que leads, mensajes o formularios.

Si eso pasa, la prioridad recomendada es:

1. MDX o CMS liviano para contenido editorial,
2. despues ampliar el uso de MongoDB para persistencia real.

## Variables de entorno

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=solafacu@gmail.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
MONGODB_URI=
MONGODB_DB=
```

Para produccion, `CONTACT_FROM_EMAIL` debe usar un remitente permitido por
Resend. `onboarding@resend.dev` sirve para pruebas; lo ideal es verificar un
dominio propio en Resend y usar algo como `Portfolio <contacto@tu-dominio>`.

## Desarrollo local

```bash
npm run dev
```

Abrir `http://localhost:3000` para ver el sitio.

## Validaciones rapidas

- Home renderiza secciones con contenido estatico desde componentes locales.
- Blog esta desactivado publicamente y `/blog` muestra un placeholder de "Proximamente".
- Projects usa datos curados del perfil `Facundo2504`.
- Formacion y certificados se renderizan desde una fuente tipada unica.
