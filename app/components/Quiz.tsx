"use client";

import { useState } from "react";



type Question = {
 id?: number;
 passage?: string;
 question:string;
 options:string[];
 answer:number;
};



type Props = {

questions:Question[];

onComplete?:()=>void;

};



export default function Quiz({
questions,
onComplete
}:Props){


const [current,setCurrent]=useState(0);

const [selected,setSelected]=useState("");

const [checked,setChecked]=useState(false);

const [score,setScore]=useState(0);



const q = questions[current];

function getCorrectAnswer(){
  if(typeof q.answer === "number"){
    return String.fromCharCode(65 + q.answer);
  }

  return q.answer;
}

function chooseAnswer(answer:string){

if(checked) return;

setSelected(answer);

}



function checkAnswer(){

if(!selected) return;


setChecked(true);


if(
selected === String.fromCharCode(65 + Number(q.answer))
){

setScore(prev => prev + 1);

}

}



function nextQuestion(){

if(current < questions.length-1){

setCurrent(current+1);

setSelected("");

setChecked(false);

}

else{

if(onComplete){

onComplete();

}

alert(
`🎉 Hoàn thành! Bạn đúng ${score}/${questions.length} câu`
);

}

}



function previous(){

if(current>0){

setCurrent(current-1);

setSelected("");

setChecked(false);

}

}



const progress =
((current+1)/questions.length)*100;



return (

<div className="
min-h-screen
bg-gradient-to-br
from-green-50
to-yellow-50
p-4
">


<div className="
max-w-lg
mx-auto
">


<h1 className="
text-2xl
font-bold
text-green-700
mb-4
">

🌸 MAYAAA HSK

</h1>



<div className="
bg-white
rounded-2xl
shadow-md
p-4
">


<div className="
flex
justify-between
text-sm
font-semibold
mb-2
">


<span>

Câu {current+1}/{questions.length}

</span>


<span>

🎯 {score}

</span>


</div>




<div className="
h-2
bg-gray-200
rounded-full
mb-5
">


<div

className="
h-2
bg-green-500
rounded-full
"

style={{
width:`${progress}%`
}}

></div>


</div>





{
q.passage &&

<div className="
bg-yellow-50
border
rounded-xl
p-3
mb-4
text-sm
leading-6
">


<div className="font-bold mb-2">

📖 Đọc đoạn văn

</div>


{q.passage}


</div>

}





<div className="
bg-green-50
rounded-xl
p-4
mb-4
font-semibold
">


{q.question}


</div>





<div className="
space-y-3
">


{
q.options.map((option,index)=>{


const letter =
String.fromCharCode(65+index);



let color =
"border-gray-200";



if(!checked && selected===letter){

color=
"border-green-500 bg-green-50";

}



if(checked){

if(
letter === String.fromCharCode(65 + Number(q.answer))
){

color=
"border-green-500 bg-green-100";

}

if(
  letter === selected &&
  selected !== (
    typeof q.answer === "number"
      ? String.fromCharCode(65 + q.answer)
      : q.answer
  )
)
{

color=
"border-red-500 bg-red-100";

}

}



return (

<button

key={letter}

onClick={()=>chooseAnswer(letter)}

className={`
w-full
text-left
p-3
rounded-xl
border-2
text-sm
${color}
`}

>

<span className="font-bold">

{index+1}.

</span>

{" "}

{option}


</button>

)


})

}


</div>





{
checked &&

<div className="
mt-4
bg-gray-50
rounded-xl
p-3
text-sm
">


{
selected === (
  typeof q.answer === "number"
    ? String.fromCharCode(65 + q.answer)
    : q.answer
)

?

<p className="text-green-600 font-bold">

✅ Chính xác!

</p>

:

<p className="text-red-600 font-bold">

❌ Sai rồi!

</p>

}


<p className="mt-2">

Đáp án đúng:

<b>

{" "}
{
String.fromCharCode(65 + Number(q.answer))
}
.
{
q.options[Number(q.answer)]
}

</b>

</p>


</div>

}





<div className="
flex
justify-between
mt-5
">


<button

onClick={previous}

disabled={current===0}

className="
px-4
py-2
border
rounded-lg
text-sm
"

>

← Trước

</button>





{

!checked

?

<button

onClick={checkAnswer}

className="
px-5
py-2
bg-green-600
text-white
rounded-lg
text-sm
"

>

Kiểm tra

</button>


:

<button

onClick={nextQuestion}

className="
px-5
py-2
bg-blue-600
text-white
rounded-lg
text-sm
"

>

Tiếp →

</button>


}



</div>



</div>


</div>


</div>

)

}