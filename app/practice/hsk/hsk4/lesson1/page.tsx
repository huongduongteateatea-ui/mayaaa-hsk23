import Quiz from "@/app/components/Quiz";
import TranslatePractice from "@/app/components/TranslatePractice";
import SpeakingPractice from "@/app/components/SpeakingPractice";

import lesson1 from "@/app/data/practice/hsk/hsk4/lesson1";



export default function Lesson1Page(){


return (

<main

className="
min-h-screen
bg-gradient-to-br
from-green-50
to-yellow-50
px-6
py-12
"

>


<div

className="
max-w-5xl
mx-auto
"

>


<h1

className="
text-4xl
font-bold
text-green-900
"

>

HSK4 Bài 1

</h1>


<p

className="
mt-3
text-gray-600
"

>

Ôn tập từ vựng HSK4 Bài 1

</p>




<section className="mt-10">


<h2

className="
text-2xl
font-bold
text-green-900
mb-5
"

>

📝 Trắc nghiệm từ vựng (100 câu)

</h2>


<Quiz

questions={lesson1.quiz}

/>


</section>






<section className="mt-16">


<h2

className="
text-2xl
font-bold
text-green-900
mb-5
"

>

✍️ Dịch câu phần B

</h2>


<TranslatePractice

items={lesson1.translateB}

/>


</section>






<section className="mt-16">


<h2

className="
text-2xl
font-bold
text-green-900
mb-5
"

>

📖 Dịch câu phần C

</h2>


<TranslatePractice

items={lesson1.translateC}

/>


</section>






<section className="mt-16">


<h2

className="
text-2xl
font-bold
text-green-900
mb-5
"

>

🗣 Luyện nói

</h2>



<SpeakingPractice

data={lesson1.speaking}

/>



</section>






</div>


</main>


);


}