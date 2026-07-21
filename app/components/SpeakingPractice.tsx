"use client";

import { useState } from "react";


type SpeakingData = {

topic:string;

topicVN?:string;


question?:{

chinese:string;

pinyin:string;

meaning:string;

};



vocabulary?:{

chinese:string;

pinyin:string;

meaning:string;

}[];



outline?:{

chinese:string;

meaning:string;

}[];



sample:string;

samplePinyin:string;

translation:string;

};





export default function SpeakingPractice({

data

}:{

data:SpeakingData;

}){


const [answer,setAnswer]=useState("");

const [submitted,setSubmitted]=useState(false);



return (

<div className="space-y-10">





{/* CHỦ ĐỀ */}

<section className="
rounded-3xl
bg-white
p-8
shadow-md
border
border-green-100
">


<h2 className="
text-3xl
font-bold
text-green-900
">

🗣 Luyện nói

</h2>



<p className="
mt-5
text-2xl
font-bold
">

主题：{data.topic}

</p>




{

data.topicVN &&

<p className="
mt-2
text-gray-600
">

({data.topicVN})

</p>

}


</section>









{/* CÂU HỎI */}

{

data.question &&


<section className="
rounded-3xl
bg-white
p-8
shadow-md
border
border-green-100
">


<h3 className="
text-2xl
font-bold
text-green-900
mb-6
">

❓ Câu hỏi

</h3>




<div className="
rounded-xl
bg-gray-50
p-5
">


<p className="
text-xl
font-bold
text-green-900
">

{data.question.chinese}

</p>



<p className="
mt-3
italic
text-gray-600
">

🔊 {data.question.pinyin}

</p>



<p className="
mt-3
text-gray-700
">

🇻🇳 {data.question.meaning}

</p>


</div>


</section>


}









{/* TỪ VỰNG */}

{

data.vocabulary &&


<section className="
rounded-3xl
bg-white
p-8
shadow-md
border
border-green-100
">


<h3 className="
text-2xl
font-bold
text-green-900
mb-6
">

📚 Từ vựng sử dụng

</h3>




<div className="
grid
gap-4
md:grid-cols-2
">


{

data.vocabulary.map((item,index)=>(


<div

key={index}

className="
rounded-xl
bg-gray-50
p-5
"

>


<p className="
text-xl
font-bold
text-green-900
">

{item.chinese}

</p>



<p className="
text-gray-600
">

{item.pinyin}

</p>



<p>

{item.meaning}

</p>



</div>


))


}


</div>



</section>


}









{/* DÀN Ý */}

{

data.outline &&


<section className="
rounded-3xl
bg-white
p-8
shadow-md
border
border-green-100
">


<h3 className="
text-2xl
font-bold
text-green-900
mb-6
">

📝 Dàn ý mẫu

</h3>




<div className="
space-y-4
">


{

data.outline.map((item,index)=>(


<div

key={index}

className="
rounded-xl
bg-gray-50
p-5
"

>


<p className="
font-bold
text-lg
">

{index+1}. {item.chinese}

</p>



<p className="
mt-2
text-gray-600
">

→ {item.meaning}

</p>


</div>


))


}


</div>



</section>


}









{/* NHẬP BÀI NÓI */}

<section className="
rounded-3xl
bg-white
p-8
shadow-md
border
border-green-100
">


<h3 className="
text-2xl
font-bold
text-green-900
mb-5
">

🎤 Luyện nói của bạn

</h3>




<p className="
mb-5
text-gray-600
">

Dựa vào câu hỏi và dàn ý trên, hãy viết bài nói bằng tiếng Trung.

</p>




<textarea


value={answer}


onChange={(e)=>setAnswer(e.target.value)}


disabled={submitted}


placeholder="Nhập bài nói của bạn..."


className="
w-full
min-h-[200px]
rounded-xl
border
p-5
text-lg
focus:outline-none
focus:ring-2
focus:ring-green-700
disabled:bg-gray-100
"

/>





<button

onClick={()=>setSubmitted(true)}

disabled={!answer.trim() || submitted}

className="
mt-5
rounded-full
bg-green-900
px-8
py-3
text-white
disabled:bg-gray-400
"

>

{

submitted

?

"Đã nộp"

:

"Nộp bài"

}

</button>



</section>









{/* BÀI MẪU SAU KHI NỘP */}

{

submitted &&


<>


<section className="
rounded-3xl
bg-white
p-8
shadow-md
border
border-green-100
">


<h3 className="
text-2xl
font-bold
text-green-900
mb-5
">

📖 Bài mẫu tham khảo

</h3>



<div className="
rounded-xl
bg-gray-50
p-6
leading-relaxed
whitespace-pre-line
">

{data.sample}

</div>


</section>







<section className="
rounded-3xl
bg-white
p-8
shadow-md
border
border-green-100
">


<h3 className="
text-2xl
font-bold
text-green-900
mb-5
">

🔤 Pinyin

</h3>



<div className="
rounded-xl
bg-gray-50
p-6
italic
leading-relaxed
whitespace-pre-line
">

{data.samplePinyin}

</div>


</section>







<section className="
rounded-3xl
bg-white
p-8
shadow-md
border
border-green-100
">


<h3 className="
text-2xl
font-bold
text-green-900
mb-5
">

🇻🇳 Dịch nghĩa

</h3>



<div className="
rounded-xl
bg-gray-50
p-6
leading-relaxed
whitespace-pre-line
">

{data.translation}

</div>


</section>


</>


}





</div>


)

}