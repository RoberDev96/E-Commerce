# 🛒 Mi E-commerce con React

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://e-commerce-xi-tawny-82.vercel.app)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

E-commerce funcional construido con React, TypeScript y Tailwind CSS. Incluye autenticación, carrito de compras y productos desde API real.

📱 **Demo en vivo**: [https://e-commerce-xi-tawny-82.vercel.app](https://e-commerce-xi-tawny-82.vercel.app)

## 📸 Captura

![Vista previa del proyecto](https://github.com/RoberDev96/E-Commerce/blob/main/public/Captura%20de%20pantalla%20de%202026-05-02%2011-35-40.png?raw=true)

## 🚀 Características

- ✅ Autenticación de usuarios (Context API + localStorage)
- ✅ Rutas protegidas (PrivateRoute)
- ✅ Listado de productos desde FakeStore API
- ✅ Filtrado por categorías
- ✅ Detalle de producto
- ✅ Carrito de compras (Context + localStorage)
- ✅ Persistencia de sesión y carrito
- ✅ Formularios con React Hook Form + Zod
- ✅ Fetching con TanStack Query (caché, loading, errores)
- ✅ Diseño responsive con Tailwind CSS

## 🔐 Credenciales de prueba

Para probar la aplicación sin registrarte, usa:

| Campo | Valor |
|-------|-------|
| **Usuario** | `Roberto` |
| **Contraseña** | `123456` |

> ℹ️ La autenticación es simulada para demostración. Los datos solo persisten en localStorage.

## 🛠️ Tecnologías utilizadas

| Categoría | Tecnologías |
|-----------|-------------|
| **Frontend** | React 18, TypeScript |
| **Rutas** | React Router DOM |
| **Estado** | Context API |
| **Formularios** | React Hook Form, Zod |
| **Fetching** | TanStack Query, Axios |
| **Estilos** | Tailwind CSS |
| **API** | FakeStore API |

## 📦 Instalación local

```bash
# Clonar repositorio
git clone https://github.com/RoberDev96/E-Commerce.git
cd E-Commerce

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
