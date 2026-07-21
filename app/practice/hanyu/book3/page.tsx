import Link from "next/link";


const lessons = [

{
title:"Bài 1",
href:"/practice/hanyu/book3/lesson1"
},

{
title:"Bài 2",
href:"/practice/hanyu/book3/lesson2"
},

{
title:"Bài 3",
href:"/practice/hanyu/book3/lesson3"
},

{
title:"Bài 4",
href:"/practice/hanyu/book3/lesson4"
},

{
title:"Bài 5",
href:"/practice/hanyu/book3/lesson5"
},

{
title:"Bài 6",
href:"/practice/hanyu/book3/lesson6"
},

{
title:"Bài 7",
href:"/practice/hanyu/book3/lesson7"
},

{
title:"Bài 8",
href:"/practice/hanyu/book3/lesson8"
},

{
title:"Bài 9",
href:"/practice/hanyu/book3/lesson9"
},

{
title:"Bài 10",
href:"/practice/hanyu/book3/lesson10"
},

{
title:"Luyện tập tổng hợp",
href:"/practice/hanyu/book3/review",
special:true
}


];



export default function Book3Page(){


return (

<main

className="
min-h-screen
px-6
py-16
"

>


<div

className="
mx-auto
max-w-6xl
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

Giáo trình Hán Ngữ 3

</h1>



<p

className="
mt-5
text-center
text-gray-600
"

>

Luyện tập nhớ từ vựng theo từng bài học

</p>





<div

className="
mt-12
grid
gap-8
md:grid-cols-4
"

>


{

lessons.map((lesson)=>(


<Link

key={lesson.title}

href={lesson.href}

className={

`
rounded-3xl
border
p-8
text-center
shadow-lg
transition
hover:-translate-y-2

${

lesson.special

?

"border-yellow-500 bg-yellow-50"

:

"border-[#ddc8a8] bg-white"

}

`

}

>



<div className="text-5xl">

{

lesson.special

?

"⭐"

:

"📖"

}

</div>




<h2

className="
mt-5
text-2xl
font-bold
text-green-900
"

>

{lesson.title}

</h2>




<p

className="
mt-3
text-gray-600
"

>

{

lesson.special

?

"Ôn tập toàn bộ kiến thức Hán Ngữ 3"

:

"Luyện tập từ vựng, dịch câu và luyện nói"

}

</p>



<div

className="
mt-6
rounded-full
bg-green-900
py-3
text-white
"

>

Bắt đầu

</div>




</Link>


))


}



</div>



</div>


</main>


);


}