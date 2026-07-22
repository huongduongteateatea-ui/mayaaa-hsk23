import type { Metadata } from "next";
import "./globals.css";

import BackHome from "@/app/components/BackHome";
import { CartProvider } from "@/app/context/CartContext";


export const metadata: Metadata = {
  title: "MAYAAA HSK",
  description: "Luyện tiếng Trung HSK online",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="vi">

      <body>

        <CartProvider>

          <BackHome />

          {children}

        </CartProvider>


      </body>

    </html>

  );

}