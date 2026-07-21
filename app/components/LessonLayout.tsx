"use client";


import Link from "next/link";



export default function LessonLayout({

children,

title,

lesson,

progress,

previous,

next

}:{

children:React.ReactNode;

title:string;

lesson:string;

progress:number;

previous?:string;

next?:string;


}){



return (

<div

className="
mx-auto
max-w-7xl
px-6
py-10
"

>



<div

className="
rounded-3xl
border
border-[#ddc8a8]
bg-white
p-10
"

>


<p className="text-red-700 tracking-[5px]">

MAYAAA HSK23

</p>




<h1

className="
mt-5
text-4xl
font-bold
text-green-900
"

>

{title}

</h1>




<p className="mt-3 text-gray-600">

{lesson}

</p>





<div className="mt-8">


<div className="flex justify-between">

<span>

Tiến độ học

</span>


<span>

{progress}%

</span>


</div>




<div className="
mt-3
h-3
rounded-full
bg-gray-200
">


<div

className="
h-3
rounded-full
bg-green-900
"

style={{

width:`${progress}%`

}}

/>



</div>



</div>



</div>







<main className="mt-10">

{children}

</main>








<div

className="
mt-12
flex
justify-between
"

>


{

previous ? (

<Link

href={previous}

className="
rounded-full
border
px-6
py-3
"

>

← Bài trước

</Link>

):(

<div />

)

}





{

next && (

<Link

href={next}

className="
rounded-full
bg-green-900
px-6
py-3
text-white
"

>

Bài tiếp →

</Link>


)


}



</div>





</div>


);


}