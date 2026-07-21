"use client";


import Link from "next/link";
import Image from "next/image";

import { useCart } from "../context/CartContext";



export default function ProductCard({

id,

title,

price,

pages,

image,

slug,

}:{

id:number;

title:string;

price:string;

pages:string;

image:string;

slug:string;

}) {



const {addToCart}=useCart();




return (


<div

className="
group
overflow-hidden
rounded-3xl
border
border-[#ddc8a8]
bg-white/80
p-6
shadow-sm
transition-all
duration-300
hover:-translate-y-3
hover:shadow-xl
"

>


<div

className="
relative
h-80
rounded-2xl
bg-[#f8f1e7]
"

>


<Image

src={image}

alt={title}

fill

className="
object-contain
p-5
"

/>


</div>






<div className="mt-6 text-center">



<h3

className="
text-2xl
font-semibold
text-green-900
"

>

{title}

</h3>




<p className="mt-3 text-gray-600">

{pages}

</p>




<p className="mt-5 text-3xl font-bold text-red-700">

{price}

</p>





<Link

href={`/products/${slug}`}

className="
mt-5
block
rounded-full
border
border-green-900
py-3
font-semibold
text-green-900
"

>

Xem chi tiết

</Link>







<button

onClick={()=>addToCart({

id,

title,

price,

image,

quantity:1

})}


className="
mt-3
w-full
rounded-full
bg-green-900
py-3
font-semibold
text-white
hover:bg-green-800
"

>

🛒 Thêm vào giỏ

</button>





</div>


</div>


);


}