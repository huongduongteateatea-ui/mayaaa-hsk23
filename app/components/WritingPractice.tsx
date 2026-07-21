"use client";

import { useState } from "react";


type WritingItem = {

keywords:string;

answer:string;

pinyin?:string;

meaning?:string;

};



export default function WritingPractice({

items

}:{

items:WritingItem[];

}){


const [show,setShow] = useState<number | null>(null);



if(!items || items.length===0){

return (

<div className="
rounded-3xl
bg-white
p-8
shadow
text-center
">


<p className="
text-xl
font-bold
">

Chưa có nội dung viết câu

</p>


</div>

)

}



return (

<div className="
space-y-6
">

{

items.map((item,index)=>(


<div

key={index}

className="
rounded-3xl
bg-white
p-8
shadow
"

>


<h3 className="
text-xl
font-bold
text-green-900
">

Câu {index+1}

</h3>



<p className="
mt-5
"

>

📌 Từ gợi ý:

<strong>

{item.keywords}

</strong>

</p>




<button

onClick={()=>setShow(

show===index ? null : index

)}

className="
mt-5
rounded-full
bg-green-900
px-6
py-2
text-white
"

>

{

show===index

?

"Ẩn đáp án"

:

"Xem câu mẫu"

}


</button>





{

show===index &&

<div className="
mt-6
rounded-xl
bg-green-50
p-5
"

>


<p className="
text-xl
font-bold
"

>

{item.answer}

</p>




{

item.pinyin &&

<p className="
mt-3
text-gray-600
">

{item.pinyin}

</p>

}




{

item.meaning &&

<p className="
mt-3
"

>

{item.meaning}

</p>

}



</div>


}



</div>


))


}


</div>

)

}