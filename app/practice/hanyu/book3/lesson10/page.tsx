"use client";
import { useState } from "react";

import StudentProfile from "@/app/components/StudentProfile";

import lesson10 from "@/app/data/practice/hanyu/book3/lesson10";

import Quiz from "@/app/components/Quiz";

import TranslatePractice from "@/app/components/TranslatePractice";

import SpeakingPractice from "@/app/components/SpeakingPractice";



export default function Lesson10Page(){


const [started,setStarted] = useState(false);

const [quizDone,setQuizDone] = useState(false);


return (

<main className="
min-h-screen
bg-[#faf7ed]
px-6
py-16
">


<div className="
mx-auto
max-w-6xl
">


<StudentProfile

onStart={()=>setStarted(true)}

/>



{

started &&

<>


<h1 className="
text-center
text-5xl
font-bold
text-green-900
">

{lesson10.title}

</h1>



<p className="
mt-5
text-center
text-xl
text-gray-600
">

{lesson10.topic}

</p>





{/* A. TRẮC NGHIỆM */}


<section className="mt-16">


<h2 className="
mb-8
text-3xl
font-bold
text-green-900
">

📝 Trắc nghiệm từ vựng

</h2>


<Quiz />


</section>







{/* B. DỊCH CÂU */}


<section className="mt-16">


<h2 className="
mb-8
text-3xl
font-bold
text-green-900
">

✍️ Dịch câu

</h2>



<TranslatePractice

items={lesson10.translate}

/>


</section>







{/* C. DỊCH CÂU TỔNG HỢP */}


<section className="mt-16">


<h2 className="
mb-8
text-3xl
font-bold
text-green-900
">

✍️ Dịch câu tổng hợp

</h2>



<TranslatePractice

items={lesson10.translateTotal}

/>


</section>







{/* D. LUYỆN NÓI */}


<section className="mt-16">


<h2 className="
mb-8
text-3xl
font-bold
text-green-900
">

🗣 Luyện nói

</h2>


<SpeakingPractice

data={lesson10.speaking}

/>


</section>


</>


}


</div>


</main>

)

}