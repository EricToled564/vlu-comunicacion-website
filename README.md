
# VLU Comunicación Website (lssm.com.mx)

Este es el sitio web de VLU Comunicación construido con Next.js 14, TypeScript, Tailwind CSS y Prisma.

## Estructura del Proyecto

Este proyecto utiliza un workspace de npm con la siguiente estructura:
- `/` - Directorio raíz con dependencias principales
- `/app` - Aplicación Next.js

## Scripts de Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
cd app && npm run dev

# Construir para producción
cd app && npm run build

# Ejecutar en producción
cd app && npm run start
```

## Deployment en Vercel

### Paso 1: Preparar el Repositorio Git

1. Crear un repositorio en GitHub/GitLab
2. Agregar el remote:
```bash
git remote add origin https://github.com/tu-usuario/vlu-comunicacion-website.git
git push -u origin main
```

### Paso 2: Configurar Vercel

1. Ve a [vercel.com](https://vercel.com) y crea una cuenta o inicia sesión
2. Haz clic en "New Project"
3. Importa tu repositorio de GitHub/GitLab
4. Vercel detectará automáticamente que es un proyecto Next.js
5. **Importante**: En la configuración del proyecto:
   - **Build Command**: `cd app && npm run build`
   - **Output Directory**: `app/.next`
   - **Install Command**: `npm install`
   - **Development Command**: `cd app && npm run dev`

### Paso 3: Variables de Entorno

Si tu proyecto usa variables de entorno, agrégalas en la sección "Environment Variables" de Vercel:
- `DATABASE_URL` (si usas Prisma)
- `NEXTAUTH_SECRET` (si usas NextAuth)
- `NEXTAUTH_URL` (debe ser https://lssm.com.mx en producción)
- Otras variables específicas del proyecto

### Paso 4: Configurar Dominio Personalizado

1. En el dashboard de Vercel, ve a tu proyecto
2. Ve a la pestaña "Domains"
3. Agrega el dominio: `lssm.com.mx`
4. Configura los registros DNS en tu proveedor de dominio:
   - **Tipo A**: `@` → `76.76.19.61`
   - **Tipo CNAME**: `www` → `cname.vercel-dns.com`

### Paso 5: Deploy

1. Haz push a la rama `main`:
```bash
git push origin main
```
2. Vercel automáticamente detectará el cambio y desplegará tu sitio
3. El sitio estará disponible en `https://lssm.com.mx`

## Tecnologías Utilizadas

- **Framework**: Next.js 14
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Base de Datos**: Prisma ORM
- **Autenticación**: NextAuth.js
- **UI Components**: Radix UI
- **Deployment**: Vercel

## Soporte

Para problemas con el deployment, revisa:
1. Los logs de build en Vercel
2. Que todas las variables de entorno estén configuradas
3. Que la base de datos esté accesible desde Vercel
