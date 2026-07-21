"use client";


import Link from "next/link";



export default function Header(){


return (

<header

className="
border-b
border-[#ddc8a8]
bg-white
"

>


<div

className="
mx-auto
flex
max-w-7xl
items-center
justify-between
px-6
py-5
"

>




<Link

href="/"

className="
text-2xl
font-bold
text-green-900
"

>

MAYAAA HSK23

</Link>






<nav

className="
flex
items-center
gap-8
text-gray-700
"

>


<Link

href="/"

className="
hover:text-green-900
"

>

Trang chủ

</Link>




<Link

href="/roadmap/hsk1"

className="
hover:text-green-900
"

>

Lộ trình học

</Link>





<Link

href="/practice"

className="
hover:text-green-900
"

>

Luyện tập từ vựng

</Link>





<Link

href="/shop"

className="
hover:text-green-900
"

>

Tài liệu

</Link>



</nav>





</div>



</header>


);


}