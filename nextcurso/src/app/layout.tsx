import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/page";
import { Container } from "@/components/Container/page";
import Footer from "@/components/Footer/page";



export const metadata: Metadata = {
  title: {
    default: "The Blog - Este é um blog com Next.js",
    template: "%s | The Blog",
  },
  description: "O melhor blog do mundo, feito com Next.js",
};

type RootLayoutProps = { 
  children: React.ReactNode; 
}

export default function RootLayout({children,}: Readonly <RootLayoutProps> ) {
  return (
    <html lang="pt-br">
      <body >
        <Container>
               
          <Header />

          {children}
          
          <Footer />

        </Container>
        
      </body>
    </html>
  );
}
