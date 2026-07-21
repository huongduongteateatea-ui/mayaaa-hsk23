import type { Metadata } from "next";

import "./globals.css";

import { CartProvider } from "./context/CartContext";

import FloatingHomeButton from "./components/FloatingHomeButton";



export const metadata: Metadata = {

  title: "MAYAAA HSK23",

  description:
    "Tài liệu học tiếng Trung HSK1 - HSK6",

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


{children}


<FloatingHomeButton />


</CartProvider>



</body>


</html>

);


}