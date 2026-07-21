import Link from "next/link";


const lessons = [

{
id:0,
title:"Bài 0: Làm quen với tiếng Trung",
desc:"Học chữ Hán, pinyin, thanh điệu và nền tảng phát âm.",
slug:"lesson0"
},


{
id:1,
title:"Bài 1: Xin chào",
desc:"Học cách chào hỏi và giới thiệu bản thân.",
slug:"lesson1"
},


{
id:2,
title:"Bài 2: Bạn tên là gì?",
desc:"Học cách hỏi tên và giao tiếp cơ bản.",
slug:"lesson2"
},


{
id:3,
title:"Bài 3: Bạn là người nước nào?",
desc:"Học cách hỏi quốc tịch.",
slug:"lesson3"
}

];





export default function HSK1Page(){


return (


<main

className="
mx-auto
max-w-6xl
px-6
py-16
"

>



<div className="text-center">


<p className="tracking-[8px] text-red-700">

MAYAAA HSK23

</p>



<h1 className="
mt-6
text-5xl
font-bold
text-green-900
">

HSK1 - Người mới bắt đầu

</h1>



<p className="
mt-5
text-gray-600
">

Lộ trình học tiếng Trung từ số 0 đến HSK1

</p>



</div>







<section className="mt-12 space-y-6">



{

lessons.map((lesson,index)=>(


<div

key={lesson.id}

className="
rounded-3xl
border
border-[#ddc8a8]
bg-white
p-8
"

>


<h2 className="
text-2xl
font-bold
text-green-900
">

{lesson.title}

</h2>




<p className="mt-3 text-gray-600">

{lesson.desc}

</p>





<Link

href={`/roadmap/hsk1/${lesson.slug}`}

className="
mt-6
block
rounded-full
bg-green-900
py-3
text-center
font-semibold
text-white
"

>

Bắt đầu học

</Link>




</div>



))


}



</section>





</main>


);


}