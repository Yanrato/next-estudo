import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "The Blog - Esse é um blog com Next.js",
  description: "O melhor blog do mundo, feito com Next.js",
};

type RootLayoutProps = { 
  children: React.ReactNode; 
}

export default function RootLayout({children,}: Readonly <RootLayoutProps> ) {
  return (
    <html lang="pt-br">
      <body >
        <header>
          <h1>Esse é o header do blog</h1>
        </header>
        <div className="bg-red-500">{children}</div>
        <footer>
          <h1>Esse é o footer do blog</h1>
        </footer>
      </body>
    </html>
  );
}
