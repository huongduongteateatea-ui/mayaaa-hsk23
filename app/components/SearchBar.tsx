"use client";


import { useState } from "react";
import Link from "next/link";


const products = [

  {
    id:"hsk1",
    title:"HSK1 Bộ 1000 từ"
  },

  {
    id:"hsk2",
    title:"HSK2 Bộ 1200 từ"
  },

  {
    id:"hsk3",
    title:"HSK3 Bộ 1500 từ"
  },

  {
    id:"hsk4",
    title:"HSK4 Bộ 2500 từ"
  },

  {
    id:"hsk5",
    title:"HSK5 Bộ 5000 từ"
  },

  {
    id:"hsk6",
    title:"HSK6 Bộ 7000 từ"
  }

];




export default function SearchBar(){


const [keyword,setKeyword] = useState("");



const result = products.filter((item)=>

item.title
.toLowerCase()
.includes(keyword.toLowerCase())

);



return (

<section
className="
mt-20
"
>



<div
className="
rounded-3xl
border
border-[#ddc8a8]
bg-white/70
p-10
"
>



<div className="text-center">


<h2
className="
text-5xl
text-green-900
"
>

Tìm kiếm tài liệu HSK

</h2>



<p
className="
mt-4
text-gray-600
"
>

Tìm nhanh bộ tài liệu bạn cần

</p>


</div>






<div
className="
mx-auto
mt-8
flex
max-w-3xl
overflow-hidden
rounded-full
border
bg-white
"
>



<input


value={keyword}


onChange={(e)=>

setKeyword(e.target.value)

}


placeholder="Nhập HSK1, HSK2, HSK6..."


className="
flex-1
px-8
py-5
outline-none
"



/>





<button

className="
bg-green-900
px-10
text-white
"

>

Tìm

</button>



</div>








{
keyword && (

<div
className="
mx-auto
mt-8
max-w-3xl
space-y-3
"
>


{

result.length > 0 ?

result.map((item)=>(


<Link

key={item.id}

href={`/products/${item.id}`}

className="
block
rounded-xl
bg-[#f8f1e7]
p-4
hover:bg-green-100
"

>

📚 {item.title}

</Link>


))


:

<p className="text-center text-gray-500">

Không tìm thấy tài liệu

</p>


}


</div>

)

}





</div>



</section>

);


}