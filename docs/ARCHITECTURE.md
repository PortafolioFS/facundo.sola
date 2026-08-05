# Arquitectura

## Objetivo

El repositorio implementa un portfolio profesional estático con Next.js App
Router. La prioridad es presentar con claridad la experiencia, las habilidades y
los proyectos de Facundo Sola con el menor costo posible de JavaScript cliente.

## Estructura

- app/: rutas, metadatos, sitemap, robots y Route Handlers.
- components/: secciones visuales y componentes compartidos.
- lib/portfolio.ts: fuente tipada del contenido público.
- lib/resend.ts: cliente server-side para el formulario de contacto.
- lib/mongodb.ts: conexión opcional para necesidades futuras de persistencia.
- public/: imágenes y recursos estáticos.

## Renderizado

- Los layouts, páginas y secciones son React Server Components por defecto.
- components/contact-email-dialog.tsx es el único componente cliente necesario
  en la experiencia principal porque gestiona un diálogo y estado de formulario.
- El contenido del portfolio se genera estáticamente durante el build.
- app/api/contact/route.ts se ejecuta en Node.js y envía mensajes mediante
  Resend.

## Datos

El contenido profesional es curado y versionado en lib/portfolio.ts. Esta
decisión evita una dependencia de red durante el render y permite revisar en el
mismo cambio el texto, los tipos y la interfaz.

MongoDB no participa del render actual. Se conserva como infraestructura
server-side disponible únicamente cuando exista una necesidad real de
persistencia.

## SEO y URLs

El layout raíz define metadatos comunes y datos estructurados Person. Las rutas
públicas relevantes agregan metadatos específicos. app/sitemap.ts y
app/robots.ts se generan desde la URL pública.

La URL base se resuelve en este orden:

1. NEXT_PUBLIC_SITE_URL;
2. VERCEL_PROJECT_PRODUCTION_URL o VERCEL_URL;
3. http://localhost:3000 para desarrollo local.

## Accesibilidad y rendimiento

- Navegación por teclado y enlace para saltar al contenido.
- Estados de foco visibles y soporte para prefers-reduced-motion.
- Jerarquía semántica de encabezados y textos alternativos.
- Imágenes optimizadas con next/image.
- Sin animaciones de estado por frame ni JavaScript global de navegación.

## Integraciones

- Resend: envío del formulario de contacto.
- GitHub: enlaces a repositorios curados; no se consulta la API durante el
  render.
- Google Drive: CV público enlazado desde el perfil.
