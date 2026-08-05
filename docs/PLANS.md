# Planes de implementación

## 2026-08-04 - Alineación del portfolio con el CV

### Objetivo

Revisar el código completo y ajustar contenido, interfaz y arquitectura para que
el portfolio sea agradable, rápido y fiel al CV vigente.

### Decisiones

1. Presentar soporte técnico IT freelance desde 2019 como experiencia principal.
2. Mantener desarrollo de software, bases de datos y ciberseguridad como
   formación y evidencia mediante proyectos.
3. Mostrar únicamente la formación respaldada por el CV vigente en la Home.
4. Reemplazar la Home completamente cliente por una composición de Server
   Components.
5. Eliminar efectos continuos y controles incompletos.
6. Compartir navegación, fondo y pie entre todas las rutas.
7. Resolver la URL canónica mediante variables del entorno de despliegue.

### Verificación requerida

- ESLint.
- Build de producción y chequeo de TypeScript.
- Auditoría de dependencias de producción.
- Revisión visual en escritorio y móvil.
- Comprobación de navegación, formulario y ausencia de overflow horizontal.

### No objetivos

- Publicar el sitio o modificar configuración externa de Vercel.
- Reescribir o reemplazar el CV.
- Crear experiencia, habilidades o certificaciones no respaldadas por las
  fuentes disponibles.
