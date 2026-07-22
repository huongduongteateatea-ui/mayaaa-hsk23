"use client";

import Quiz from "@/app/components/Quiz";
import TranslatePractice from "@/app/components/TranslatePractice";

import { reviewBook3 } from "@/app/data/practice/hanyu/book3/review";

import { useState } from "react";


export default function ReviewBook3Page(){

const [quizDone,setQuizDone]=useState(false);


return (

<main className="min-h-screen px-6 py-12">


<div className="mx-auto max-w-5xl">


<h1 className="
text-4xl
font-bold
text-green-900
text-center
">

⭐ Tổng ôn Hán Ngữ 3 (Bài 1-10)

</h1>


<p className="
mt-4
text-center
text-gray-600
">

200 câu trắc nghiệm + 10 câu dịch

</p>



<section className="mt-12">


<h2 className="
text-2xl
font-bold
text-green-900
mb-6
">

📚 Trắc nghiệm tổng hợp

</h2>


<Quiz

questions={reviewBook3.quiz}

onComplete={()=>setQuizDone(true)}

/>


</section>



<section className="mt-16">


<h2 className="
text-2xl
font-bold
text-green-900
mb-6
">

✍️ Dịch câu

</h2>



<TranslatePractice

items={reviewBook3.translateTotal}

/>


</section>


</div>


</main>


);

}