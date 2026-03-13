# ⬡ Proyecto VueAuth con Supabase

Este proyecto es una aplicación de Single Page (SPA) construida con **Vue 3** que implementa un sistema de autenticación real utilizando **Supabase**.

## 🌟 Funcionalidades

- **Autenticación con Supabase:** Login real mediante correo y contraseña.
- **Estado de Sesión Persistente:** La aplicación reconoce si el usuario sigue conectado al recargar la página.
- **Navbar Dinámica:** Cambia sus opciones (Login / Dashboard / Cerrar Sesión) según el estado del usuario.
- **Estilos Premium:** Interfaz oscura con efectos visuales modernos.

## 🛠️ Tecnologías

- **Framework:** Vue 3 (Vite)
- **Backend:** Supabase (Auth & PostgreSQL)
- **Routing:** Vue Router
- **Estilos:** CSS3 con variables y transiciones.

## 🚀 Instalación y Uso

### 1. Clonar y preparar
```bash
npm install
```

### 2. Configuración de Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y añade tus credenciales de Supabase:
```env
VITE_SUPABASE_URL_PROYECTO=tu_url_aqui
VITE_SUPABASE_LLAVE_ANONIMA=tu_llave_anonima_aqui
```

### 3. Ejecución en desarrollo
```bash
npm run dev
```

## 💻 Configuración Recomendada

### IDE Setup

- **VS Code** + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- Desactivar la extensión **Vetur** para evitar conflictos.

### Browser DevTools

Se recomienda instalar las herramientas de desarrollo para una mejor depuración:

- [Vue.js devtools](https://devtools.vuejs.org/)
- Activar el **Custom Object Formatter** en la configuración de la consola del navegador.

## 🏗️ Estructura del Proyecto

| Archivo | Descripción |
|---|---|
| `src/lib/supabaseClient.js` | Configuración del cliente de Supabase. |
| `src/composables/useAuth.js` | Lógica global de autenticación compartida. |
| `src/views/LoginView.vue` | Interfaz de acceso con validaciones. |
| `src/App.vue` | Estructura principal y navegación protegida. |

---

Desarrollado por **Alejandra Rodríguez** | Proyecto de Rutas Protegidas 2026