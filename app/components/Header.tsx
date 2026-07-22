"use client";

import Link from "next/link";
import Image from "next/image";


export default function Header(){


return (

<header
className="
w-full
bg-white
shadow-sm
"
>


<div
className="
max-w-6xl
mx-auto
flex
items-center
justify-between
px-6
py-4
"
>


{/* Logo */}

<Link
href="/"
className="
flex
items-center
gap-3
font-bold
text-green-800
text-xl
"
>


<Image

src="/images/pig.png"

alt="MAYAAA HSK"

width={45}

height={45}

/>


<span>
MAYAAA HSK
</span>


</Link>





{/* Menu */}

<nav
className="
flex
gap-6
text-gray-700
"
>


<Link
href="/"
className="
hover:text-green-700
"
>
Trang chủ
</Link>



<Link
href="/practice"
className="
hover:text-green-700
"
>
Luyện tập
</Link>



<Link
href="/products"
className="
hover:text-green-700
"
>
Sản phẩm
</Link>



</nav>



</div>


</header>

);


}