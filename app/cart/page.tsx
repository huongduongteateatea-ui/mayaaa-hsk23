"use client";


import Link from "next/link";

import { useCart } from "../context/CartContext";



export default function CartPage(){


const {

cart,

increase,

decrease,

remove

}=useCart();





function getNumber(price:string){


return Number(

price

.replace("đ","")

.replace(".","")

);


}





const total = cart.reduce(

(sum,item)=>

sum + getNumber(item.price)*item.quantity

,0);



const formatMoney=(money:number)=>

money.toLocaleString("vi-VN")+"đ";





return (


<main

className="
mx-auto
max-w-5xl
px-6
py-16
"

>



<h1

className="
text-center
text-5xl
text-green-900
"

>

Giỏ hàng

</h1>







{

cart.length===0 ? (


<p

className="
mt-10
text-center
text-gray-600
"

>

Giỏ hàng đang trống

</p>



):(



<div className="mt-10 space-y-6">


{


cart.map((item)=>(


<div

key={item.id}

className="
rounded-3xl
border
border-[#ddc8a8]
bg-white
p-6
"

>



<h2

className="
text-2xl
font-semibold
text-green-900
"

>

{item.title}

</h2>




<p className="mt-3 text-red-700">

{item.price}

</p>






<div

className="
mt-5
flex
items-center
gap-4
"

>


<button

onClick={()=>decrease(item.id)}

className="
h-10
w-10
rounded-full
bg-gray-200
text-xl
"

>

-

</button>





<span

className="
text-xl
font-semibold
"

>

{item.quantity}

</span>





<button

onClick={()=>increase(item.id)}

className="
h-10
w-10
rounded-full
bg-green-900
text-xl
text-white
"

>

+

</button>



</div>







<p

className="
mt-4
font-semibold
text-gray-700
"

>

Thành tiền:

{

formatMoney(
getNumber(item.price)*item.quantity
)

}

</p>







<button

onClick={()=>remove(item.id)}

className="
mt-4
text-red-600
"

>

Xóa sản phẩm

</button>





</div>



))


}



</div>



)


}








{

cart.length>0 && (


<div

className="
mt-10
rounded-3xl
border
border-[#ddc8a8]
bg-white
p-8
text-center
"

>



<h2

className="
text-3xl
font-semibold
text-green-900
"

>

Tổng cộng:

</h2>




<p

className="
mt-4
text-4xl
font-bold
text-red-700
"

>

{formatMoney(total)}

</p>





<Link

href="/checkout"

className="
mt-8
block
rounded-full
bg-green-900
py-4
text-white
"

>

Thanh toán

</Link>



</div>


)


}






<Link

href="/"

className="
mt-10
block
text-center
rounded-full
bg-green-900
py-4
text-white
"

>

← Tiếp tục mua hàng

</Link>




</main>


);


}