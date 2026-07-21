import lesson0 from "../../../data/lessons/hsk1/lesson0";

import AudioButton from "../../../components/AudioButton";

import LessonLayout from "../../../components/LessonLayout";





export default function Lesson0Page(){



return (



<LessonLayout

title={lesson0.title}

lesson="HSK1 - Bài nhập môn tiếng Trung"

progress={10}

next="/roadmap/hsk1/lesson1"

>



<div className="space-y-10">






{/* GIỚI THIỆU */}



{

lesson0.sections.map((section)=>(


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


<h2

className="
text-3xl
font-bold
text-green-900
"

>

{section.title}

</h2>




<div className="mt-5 space-y-3">


{

section.content.map((text,index)=>(


<p

key={index}

className="
leading-8
text-gray-700
"

>

{text}

</p>


))


}


</div>



</section>


))


}









{/* THANH MẪU */}



<section

className="
rounded-3xl
border
border-[#ddc8a8]
bg-[#f8f1e7]
p-10
"

>


<h2 className="
text-3xl
font-bold
text-green-900
">

🔤 Thanh mẫu

</h2>




<div

className="
mt-6
grid
grid-cols-3
gap-4
md:grid-cols-6
"

>


{

lesson0.initials.map((item)=>(


<div

key={item.text}

className="
rounded-xl
bg-white
p-5
text-center
"

>


<p className="
text-3xl
font-bold
text-green-900
">

{item.text}

</p>



<AudioButton

src={item.audio}

/>


</div>


))


}



</div>


</section>









{/* VẬN MẪU */}



<section

className="
rounded-3xl
border
border-[#ddc8a8]
bg-white
p-10
"

>


<h2

className="
text-3xl
font-bold
text-green-900
"

>

🔡 Vận mẫu

</h2>




<div

className="
mt-6
grid
grid-cols-3
gap-4
md:grid-cols-6
"

>


{

lesson0.finals.map((item)=>(


<div

key={item.text}

className="
rounded-xl
bg-[#f8f1e7]
p-5
text-center
"

>


<p className="
text-3xl
font-bold
text-green-900
">

{item.text}

</p>



<AudioButton

src={item.audio}

/>


</div>


))


}



</div>


</section>









{/* PHÁT ÂM */}



<section

className="
rounded-3xl
border
border-[#ddc8a8]
bg-white
p-10
"

>


<h2

className="
text-3xl
font-bold
text-green-900
"

>

🎧 Luyện phát âm

</h2>




{

lesson0.pronunciation.map((item)=>(


<div

key={item.sound}

className="
mt-5
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

{item.sound}

</p>



<p className="mt-3">

{item.description}

</p>



<p className="
mt-2
text-red-700
">

Ví dụ: {item.example}

</p>



<AudioButton

src={item.audio}

/>



</div>


))


}



</section>









{/* THANH ĐIỆU */}



<section

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

🎵 Thanh điệu

</h2>




{

lesson0.tones.map((tone)=>(


<div

key={tone.number}

className="
mt-5
rounded-xl
bg-[#f8f1e7]
p-5
"

>


<p className="
text-5xl
font-bold
text-green-900
">

{tone.symbol}

</p>



<p className="mt-2">

{tone.description}

</p>



<p className="text-red-700">

Ví dụ: {tone.example}

</p>



<AudioButton

src={tone.audio}

/>


</div>


))


}



</section>









{/* NÉT CHỮ */}



<section

className="
rounded-3xl
bg-green-900
p-10
text-white
"

>


<h2 className="text-3xl font-bold">

✍️ Nét chữ Hán cơ bản

</h2>




<div

className="
mt-6
grid
gap-4
md:grid-cols-5
"

>


{

lesson0.strokes.map((stroke)=>(


<div

key={stroke.example}

className="
rounded-xl
bg-white
p-5
text-center
text-green-900
"

>


<p className="text-4xl">

{stroke.example}

</p>


<p>

{stroke.name}

</p>


</div>


))


}



</div>


</section>





</div>



</LessonLayout>


);


}