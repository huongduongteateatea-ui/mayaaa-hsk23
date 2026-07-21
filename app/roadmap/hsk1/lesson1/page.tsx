import lesson1 from "../../../data/lessons/hsk1/lesson1";

import LessonLayout from "../../../components/LessonLayout";





export default function Lesson1Page(){


return (

<LessonLayout

title={lesson1.title}

lesson="HSK1 - Bài 1"

progress={20}

previous="/roadmap/hsk1/lesson0"

>


<div className="space-y-10">



{

lesson1.sections.map((section)=>(


<section

key={section.title}

className="
rounded-3xl
border
border-[#ddc8a8]
bg-white
p-10
"

>


<h2 className="
text-3xl
font-bold
text-green-900
">

{section.title}

</h2>





{/* TỪ VỰNG */}

{

section.words && (


<div className="
mt-6
grid
gap-5
md:grid-cols-3
">


{

section.words.map((word)=>(


<div

key={word.chinese}

className="
rounded-xl
bg-[#f8f1e7]
p-5
"

>


<p className="
text-4xl
font-bold
text-green-900
">

{word.chinese}

</p>



<p className="mt-2 text-red-700">

{word.pinyin}

</p>



<p>

{word.meaning}

</p>


</div>


))


}


</div>


)

}







{/* CÂU */}

{

section.sentences && (


<div className="mt-6 space-y-5">


{

section.sentences.map((item)=>(


<div

key={item.chinese}

className="
rounded-xl
bg-[#f8f1e7]
p-5
"

>


<p className="text-3xl font-bold">

{item.chinese}

</p>


<p className="text-red-700">

{item.pinyin}

</p>


<p>

{item.meaning}

</p>


</div>


))


}


</div>


)

}







{/* HỘI THOẠI */}

{

section.dialogue && (


<div className="mt-6 space-y-4">


{

section.dialogue.map((item,index)=>(


<div

key={index}

className="
rounded-xl
border
p-5
"

>


<p className="font-bold">

{item.speaker}:

{item.text}

</p>


<p className="text-red-700">

{item.pinyin}

</p>


<p>

{item.meaning}

</p>


</div>


))


}


</div>


)

}





</section>


))


}



</div>



</LessonLayout>


);


}