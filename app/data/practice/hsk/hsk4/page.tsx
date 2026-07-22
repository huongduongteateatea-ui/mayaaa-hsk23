import Link from "next/link";


const lessons = [
{
title:"HSK4 Bài 1",
href:"/practice/hsk/hsk4/lesson1"
},

{
title:"HSK4 Bài 2",
href:"#"
},

{
title:"HSK4 Bài 3",
href:"#"
},

];


export default function HSK4Page(){

return(

<main className="
min-h-screen
px-6
py-16
bg-green-50
">

<div className="
max-w-6xl
mx-auto
">


<h1 className="
text-5xl
font-bold
text-green-900
text-center
">

HSK4

</h1>


<p className="
text-center
mt-4
text-gray-600
">

Luyện tập từ vựng HSK4 theo từng bài

</p>



<div className="
grid
md:grid-cols-4
gap-8
mt-12
">


{
lessons.map((lesson)=>(
<Link

key={lesson.title}

href={lesson.href}

className="
bg-white
rounded-3xl
p-8
shadow-lg
text-center
hover:-translate-y-2
transition
"

>


<div className="text-5xl">
📘
</div>


<h2 className="
mt-5
text-2xl
font-bold
text-green-900
">

{lesson.title}

</h2>


<p className="
mt-4
text-gray-600
">

100 câu trắc nghiệm + dịch câu + luyện nói

</p>


<div className="
mt-6
bg-green-900
text-white
rounded-full
py-3
">

Bắt đầu

</div>


</Link>
))

}


</div>


</div>


</main>

)

}