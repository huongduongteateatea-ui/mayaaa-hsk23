"use client";


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { useCart } from "../context/CartContext";



export default function CheckoutPage(){


const {cart}=useCart();


const [name,setName]=useState("");

const [phone,setPhone]=useState("");

const [email,setEmail]=useState("");





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





const transferContent =

cart

.map(item=>item.title.split(" ")[0])

.join("-")

+

(phone ? " "+phone : "");






function submitOrder(){


const order={

customer:{

name,

phone,

email

},

products:cart,

total:formatMoney(total),

transferContent

};


console.log(order);


alert(
"Đã gửi thông tin đơn hàng. Vui lòng chuyển khoản để hoàn tất."
);


}





return (


<main

className="
mx-auto
max-w-6xl
px-6
py-16
"

>



<h1

className="
text-center
text-5xl
font-bold
text-green-900
"

>

Thanh toán tài liệu

</h1>







<div

className="
mt-12
grid
gap-10
md:grid-cols-2
"

>





{/* ĐƠN HÀNG */}


<div

className="
rounded-3xl
border
border-[#ddc8a8]
bg-white
p-8
"

>


<h2

className="
text-3xl
font-semibold
text-green-900
"

>

Đơn hàng của bạn

</h2>





{

cart.map(item=>(


<div

key={item.id}

className="
mt-5
border-b
pb-4
"

>


<h3 className="text-xl font-semibold">

{item.title}

</h3>


<p>

Số lượng: {item.quantity}

</p>



<p className="text-red-700 font-bold">

{

formatMoney(
getNumber(item.price)*item.quantity
)

}

</p>



</div>


))


}





<p

className="
mt-8
text-3xl
font-bold
text-red-700
"

>

Tổng:

{formatMoney(total)}

</p>




</div>









{/* THANH TOÁN */}



<div

className="
rounded-3xl
bg-[#f8f1e7]
p-8
"

>



<h2

className="
text-3xl
font-semibold
text-green-900
"

>

Thông tin khách hàng

</h2>





<input

placeholder="Họ và tên"

value={name}

onChange={(e)=>setName(e.target.value)}

className="
mt-5
w-full
rounded-xl
border
p-4
"

/>





<input

placeholder="Số điện thoại"

value={phone}

onChange={(e)=>setPhone(e.target.value)}

className="
mt-4
w-full
rounded-xl
border
p-4
"

/>





<input

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="
mt-4
w-full
rounded-xl
border
p-4
"

/>







<div

className="
mt-8
rounded-2xl
bg-white
p-6
"

>



<h3

className="
text-2xl
font-bold
text-green-900
"

>

Chuyển khoản Vietcombank

</h3>




<p className="mt-4">

Chủ tài khoản:

<b> PHAM THI HAI</b>

</p>




<p>

Số tài khoản:

<b>1041311093</b>

</p>






<Image

src="/payment/vietqr.png"

alt="VietQR"

width={250}

height={250}

className="mx-auto mt-5"

/>







<p className="mt-5 font-semibold">

Nội dung chuyển khoản (copy):

</p>



<div

className="
mt-3
rounded-xl
bg-yellow-100
p-4
font-bold
text-red-700
"

>

{transferContent || "Tên tài liệu + Số điện thoại"}

</div>






</div>






<button

onClick={submitOrder}

className="
mt-8
w-full
rounded-full
bg-green-900
py-4
text-xl
font-bold
text-white
"

>

Tôi đã thanh toán

</button>





</div>





</div>






<Link

href="/cart"

className="
mt-10
block
text-center
text-green-900
"

>

← Quay lại giỏ hàng

</Link>




</main>


);


}