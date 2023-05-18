import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rutas de Aprendizaje de Programación para Niños | Crack The Code",
  description: `¿Buscas cursos de programación online? En Crack The Code encontrarás los 
  mejores cursos de programación y desarrollo de videojuegos para niños ¡Descúbrelos!`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
