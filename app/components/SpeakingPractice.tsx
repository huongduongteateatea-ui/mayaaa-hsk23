"use client";

import { useState } from "react";


type Props = {

data:{
question:string;
pinyin:string;
meaning:string;
outline:string[];
keywords:string[];

answer:{
chinese:string;
pinyin:string;
meaning:string;
};

}

};



export default function SpeakingPractice({data}:Props){


const [text,setText]=useState("");

const [submitted,setSubmitted]=useState(false);

const [showKeyword,setShowKeyword]=useState(false);

const [showAnswer,setShowAnswer]=useState(false);



function submitAnswer(){

if(!text.trim()){

alert("Vui lòng viết câu trả lời trước khi nộp!");

return;

}

setSubmitted(true);

}



return (

<div className="
rounded-3xl
bg-white
p-8
shadow-md
space-y-8
">


{/* Câu hỏi */}

<div>


<h2 className="
text-2xl
font-bold
text-green-900
">

❓ Câu hỏi

</h2>


<p className="
mt-4
text-xl
font-bold
">

{data.question}

</p>



<p className="
mt-2
italic
text-gray-600
">

{data.pinyin}

</p>



<p className="
mt-3
text-gray-700
">

{data.meaning}

</p>


</div>








{/* Dàn ý */}

<div className="
rounded-2xl
bg-green-50
p-5
">


<h3 className="
font-bold
text-lg
text-green-900
">

📝 Dàn ý mẫu

</h3>


<div className="
mt-4
space-y-3
">

{

data.outline.map((item,index)=>(

<p key={index}>

{item}

</p>

))

}

</div>


</div>








{/* Từ gợi ý */}


<div>


<button

onClick={()=>setShowKeyword(!showKeyword)}

className="
rounded-full
bg-yellow-500
px-5
py-2
text-white
"

>

💡 {showKeyword ? "Ẩn từ gợi ý":"Xem từ gợi ý"}

</button>




{

showKeyword &&

<div className="
mt-4
rounded-xl
bg-yellow-50
p-4
leading-8
">

{

data.keywords.join(" | ")

}

</div>

}


</div>








{/* Viết bài */}


<div>


<h3 className="
font-bold
text-lg
text-green-900
">

✍️ Viết câu trả lời của bạn

</h3>



<textarea

value={text}

disabled={submitted}

onChange={(e)=>setText(e.target.value)}

placeholder="
Viết thành một đoạn văn hoàn chỉnh bằng tiếng Trung...
"

className="
mt-4
h-52
w-full
rounded-xl
border
p-4
leading-7
"

/>



<button

onClick={submitAnswer}

disabled={submitted}

className="
mt-4
rounded-full
bg-green-900
px-6
py-3
text-white
disabled:bg-gray-400
"

>

{

submitted

?

"✅ Đã nộp bài"

:

"📤 Nộp bài"

}

</button>


</div>










{/* Bài mẫu */}


{

submitted &&


<div className="
rounded-2xl
bg-blue-50
p-6
">


<button

onClick={()=>setShowAnswer(!showAnswer)}

className="
rounded-full
bg-blue-600
px-5
py-2
text-white
"

>

📖 {showAnswer ? "Ẩn bài mẫu":"Xem bài mẫu tham khảo"}

</button>





{

showAnswer &&


<div className="
mt-6
space-y-5
leading-8
">


<div>

<h4 className="
font-bold
text-green-900
">

中文:

</h4>


<p className="whitespace-pre-line">

{data.answer.chinese}

</p>

</div>





<div>

<h4 className="
font-bold
text-green-900
">

Pinyin:

</h4>


<p className="whitespace-pre-line">

{data.answer.pinyin}

</p>

</div>






<div>

<h4 className="
font-bold
text-green-900
">

Nghĩa tiếng Việt:

</h4>


<p className="whitespace-pre-line">

{data.answer.meaning}

</p>


</div>



</div>


}


</div>


}



</div>

);


}