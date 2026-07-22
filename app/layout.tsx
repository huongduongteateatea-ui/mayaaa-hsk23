import type { Metadata } from "next";
import "./globals.css";

import BackHome from "@/app/components/BackHome";


export const metadata: Metadata = {

title:"MAYAAA HSK",

description:"Luyện thi HSK online"

};



export default function RootLayout({

children,

}: Readonly<{

children: React.ReactNode;

}>) {


return (

<html lang="vi">

<body>


<BackHome />


{children}


</body>

</html>

);


}