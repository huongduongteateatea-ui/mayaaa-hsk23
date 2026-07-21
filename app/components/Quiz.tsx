"use client";

import { useState } from "react";


type Question = {

question:string;

options:string[];

answer:number;

};



export default function Quiz({

questions,

onComplete

}:{

questions:Question[];

onComplete?:()=>void;

}){


const [current,setCurrent] = useState(0);

const [selected,setSelected] = useState<number|null>(null);

const [submitted,setSubmitted] = useState(false);

const [score,setScore] = useState(0);

const [finished,setFinished] = useState(false);





function checkAnswer(){


if(selected===null) return;



if(selected===questions[current].answer){

setScore(score+1);

}


setSubmitted(true);


}





function next(){


if(current === questions.length-1){


setFinished(true);


if(onComplete){

onComplete();

}


return;


}



setCurrent(current+1);

setSelected(null);

setSubmitted(false);


}





if(finished){


return (

<div className="
rounded-3xl
bg-green-50
p-8
text-center
">


<h2 className="
text-3xl
font-bold
text-green-900
">

🎉 Hoàn thành trắc nghiệm

</h2>



<p className="
mt-4
text-xl
">

Điểm:

{score}/{questions.length}

</p>



</div>

)


}






return (

<div className="
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
">

Câu {current+1}/{questions.length}

</h3>




<div className="
mt-6
rounded-xl
bg-gray-50
p-5
">

<p className="text-lg font-medium">

{questions[current].question}

</p>


</div>






<div className="
mt-6
space-y-3
">


{

questions[current].options.map((option,index)=>(


<button


key={index}


disabled={submitted}


onClick={()=>setSelected(index)}


className={`
w-full
rounded-xl
border
p-4
text-left

${

selected===index

?

"bg-green-100 border-green-900"

:

"bg-white"

}

`}


>


{index+1}. {option}


</button>


))


}


</div>







{

!submitted &&


<button

onClick={checkAnswer}

disabled={selected===null}

className="
mt-6
rounded-full
bg-green-900
px-8
py-3
text-white
disabled:bg-gray-400
"

>

Kiểm tra

</button>


}






{

submitted &&


<button

onClick={next}

className="
mt-6
rounded-full
bg-green-900
px-8
py-3
text-white
"

>

{

current===questions.length-1

?

"Hoàn thành"

:

"Câu tiếp theo"

}

</button>


}





</div>


)

}