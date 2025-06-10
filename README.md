
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

### ✅ Estado del Proyecto
- ✅ Git inicializado y configurado
- ✅ Build de producción verificado
- ✅ Archivos de configuración creados
- ✅ Listo para deployment

### Paso 1: Crear Repositorio en GitHub

1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio llamado `vlu-comunicacion-website`
2. **NO** inicialices con README, .gitignore o licencia (ya están configurados)
3. Copia la URL del repositorio (ej: `https://github.com/tu-usuario/vlu-comunicacion-website.git`)

### Paso 2: Conectar y Subir el Código

Ejecuta estos comandos en tu terminal:

```bash
cd /home/ubuntu/vlu_comunicacion_website
git remote add origin https://github.com/TU-USUARIO/vlu-comunicacion-website.git
git push -u origin main
```

### Paso 3: Configurar Vercel

1. Ve a [vercel.com](https://vercel.com) y crea una cuenta o inicia sesión
2. Haz clic en "New Project"
3. Importa tu repositorio `vlu-comunicacion-website`
4. **IMPORTANTE**: Configura estos valores:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm install --legacy-peer-deps && cd app && npm run build`
   - **Output Directory**: `app/.next`
   - **Install Command**: `npm install --legacy-peer-deps`
   - **Development Command**: `cd app && npm run dev`

### Paso 4: Variables de Entorno (si aplica)

En la sección "Environment Variables" de Vercel, agrega:
- `DATABASE_URL` (si usas base de datos)
- `NEXTAUTH_SECRET` (si usas autenticación)
- `NEXTAUTH_URL` = `https://lssm.com.mx`

### Paso 5: Configurar Dominio Personalizado

1. En el dashboard de Vercel, ve a tu proyecto
2. Ve a la pestaña "Domains"
3. Agrega el dominio: `lssm.com.mx`
4. Vercel te dará instrucciones específicas para configurar DNS
5. Configura estos registros en tu proveedor de dominio:
   - **Tipo A**: `@` → `76.76.19.61`
   - **Tipo CNAME**: `www` → `cname.vercel-dns.com`

### Paso 6: Deploy Automático

Una vez configurado, cada push a `main` desplegará automáticamente:
```bash
git add .
git commit -m "Update website"
git push origin main
```

### 🚀 URLs del Proyecto
- **Desarrollo**: `http://localhost:3000`
- **Producción**: `https://lssm.com.mx`
- **Vercel URL**: Se generará automáticamente (ej: `https://vlu-comunicacion-website.vercel.app`)

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
