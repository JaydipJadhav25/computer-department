import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
  
//   plugins: [react(),
//      tailwindcss()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })


export default defineConfig(({ mode }) => {
  console.log("Running in mode:", mode);

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react()],
       resolve: {
     alias: {
       "@": path.resolve(__dirname, "./src"),
     },
   },
  }

});

// You do not need @tailwindcss/vite plugin manually
//  — Tailwind works with Vite automatically if PostCSS is set up.

