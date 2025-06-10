
# VLU Comunicación Website

Este es el sitio web de comunicación de VLU, construido con Next.js 14 y desplegado en Vercel.

## 🚀 Deployment en Vercel

### Configuración Automática
Este proyecto está configurado para desplegarse automáticamente en Vercel. La estructura simplificada elimina los problemas de workspace/monorepo que causaban fallos en el deployment.

### Configuración Manual (si es necesario)

1. **Importar el proyecto en Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Conecta tu cuenta de GitHub
   - Importa el repositorio: `EricToled564/vlu-comunicacion-website`

2. **Configuración del proyecto:**
   - **Framework Preset:** Next.js
   - **Root Directory:** `.` (raíz del proyecto)
   - **Build Command:** `npm run build` (por defecto)
   - **Output Directory:** `.next` (por defecto)
   - **Install Command:** `npm install` (automático con .npmrc)

3. **Variables de entorno (si las necesitas):**
   ```
   NODE_ENV=production
   ```

### Características del Proyecto

- ✅ **Estructura simplificada:** Sin workspace/monorepo
- ✅ **Dependencias unificadas:** Todas las dependencias en un solo package.json
- ✅ **Configuración legacy-peer-deps:** Resuelve conflictos de dependencias automáticamente
- ✅ **Node.js 18.x:** Versión especificada en engines
- ✅ **Build optimizado:** Generación estática de páginas

### Páginas Disponibles

- `/` - Página principal
- `/campaigns` - Campañas
- `/channels` - Canales
- `/customer-journey` - Customer Journey
- `/kpis` - KPIs
- `/messaging` - Mensajería
- `/timeline` - Timeline

### Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en modo producción
npm start
```

### Solución de Problemas

Si encuentras problemas de deployment:

1. **Verificar que el build funciona localmente:**
   ```bash
   npm run build
   ```

2. **Limpiar caché si es necesario:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Verificar logs de Vercel:**
   - Ve a tu dashboard de Vercel
   - Revisa los logs de deployment en la sección "Functions"

### Tecnologías Utilizadas

- **Framework:** Next.js 14.2.28
- **React:** 18.2.0
- **TypeScript:** 5.2.2
- **Styling:** Tailwind CSS 3.3.3
- **UI Components:** Radix UI
- **Charts:** Chart.js, Recharts, Plotly.js
- **State Management:** Zustand, Jotai
- **Forms:** React Hook Form, Formik
- **Database:** Prisma (configurado)

---

**Nota:** Esta versión simplificada resuelve los problemas de deployment que tenía la estructura de workspace anterior. El código y funcionalidad son idénticos, solo se ha simplificado la estructura del proyecto.
