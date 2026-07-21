"use client";

import { useState } from "react";
import { quizBai10 } from "@/app/data/quizBai10";


export default function Quiz(){

const [current,setCurrent]=useState(0);

const [selected,setSelected]=useState("");

const [checked,setChecked]=useState(false);

const [score,setScore]=useState(0);



const question = quizBai10[current];


function chooseAnswer(answer:string){

if(checked) return;

setSelected(answer);

}



function checkAnswer(){

if(!selected) return;


setChecked(true);


if(selected===question.answer){

setScore(score+1);

}

}



function next(){

if(current < quizBai10.length-1){

setCurrent(current+1);

setSelected("");

setChecked(false);

}

else{

setCurrent(0);

setSelected("");

setChecked(false);

alert(
`🎉 Hoàn thành! Bạn đúng ${score}/${quizBai10.length} câu`
);

}

}



const progress =
((current+1)/quizBai10.length)*100;



return (

<div className="
min-h-screen
bg-gradient-to-br
from-green-50
via-white
to-yellow-50
p-6
">


<div className="
max-w-xl
mx-auto
">


<h1 className="
text-3xl
font-bold
text-green-700
mb-2
">

🌸 MAYAAA HSK

</h1>


<h2 className="
text-xl
font-semibold
mb-6
">

📝 Trắc nghiệm từ vựng

</h2>



<div className="
bg-white
rounded-3xl
shadow-xl
p-6
">


<div className="
flex
justify-between
mb-3
font-bold
text-green-700
">

<span>

Câu {current+1}/{quizBai10.length}

</span>


<span>

🎯 {score} điểm

</span>


</div>



<div className="
w-full
h-3
bg-gray-200
rounded-full
mb-6
">


<div

className="
h-3
bg-green-500
rounded-full
"

style={{
width:`${progress}%`
}}

></div>


</div>




<div className="
bg-green-50
rounded-2xl
p-5
mb-6
text-lg
font-medium
">

{question.question}

</div>





<div className="space-y-4">


{
question.options.map((option,index)=>{


const letter =
String.fromCharCode(65+index);



let style = 
"bg-white border-gray-200";



if(!checked && selected===letter){

style =
"bg-green-100 border-green-500";

}



if(checked){

if(letter===question.answer){

style =
"bg-green-100 border-green-500";

}


else if(
letter===selected &&
selected!==question.answer
){

style =
"bg-red-100 border-red-500";

}

}



return (

<button

key={letter}

onClick={()=>chooseAnswer(letter)}

className={`
w-full
p-4
rounded-2xl
border-2
text-left
transition
${style}
`}

>


<span className="font-bold">

{index+1}.

</span>

{" "}

{option}


{
checked &&
letter===question.answer &&
<span className="ml-2">

✅

</span>
}


{
checked &&
letter===selected &&
letter!==question.answer &&
<span className="ml-2">

❌

</span>
}



</button>


)

})

}


</div>




{
checked &&

<div className="
mt-6
rounded-2xl
bg-gray-50
p-4
">


{
selected===question.answer

?

<p className="
text-green-600
font-bold
">

🎉 Chính xác!

</p>


:

<p className="
text-red-600
font-bold
">

💡 Chưa đúng

</p>

}



<p className="mt-2">

Đáp án đúng:

<b>

{" "}
{question.answer}.{" "}

{
question.options[
question.answer.charCodeAt(0)-65
]

}

</b>

</p>


</div>


}





<div className="mt-6">


{

!checked

?

<button

onClick={checkAnswer}

className="
w-full
bg-green-600
text-white
py-3
rounded-2xl
font-bold
"

>

Kiểm tra

</button>


:

<button

onClick={next}

className="
w-full
bg-blue-600
text-white
py-3
rounded-2xl
font-bold
"

>

Câu tiếp theo →

</button>


}



</div>


</div>


</div>


</div>

)

}