import type { Metadata } from "next";

import { AuthProvider } from "./context/AuthContext";

import "./globals.css";



export const metadata: Metadata = {

title: "MAYAAA HSK",

description: "Luyện tiếng Trung HSK online"

};





export default function RootLayout({

children,

}: Readonly<{

children: React.ReactNode;

}>) {


return (

<html lang="vi">


<body>


<AuthProvider>


{children}


</AuthProvider>


</body>


</html>

);

}