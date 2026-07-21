import Link from "next/link";


export default function PracticePreview(){


return (

<section

className="
mt-24
px-6
"

>


<div

className="
mx-auto
max-w-6xl
"

>



<h2

className="
text-center
text-5xl
font-bold
text-green-900
"

>

Luyện tập nhớ từ vựng

</h2>




<p

className="
mt-5
text-center
text-gray-600
"

>

Ôn tập từ vựng qua trắc nghiệm, dịch câu và luyện nói

</p>






<div

className="
mt-12
grid
gap-8
md:grid-cols-2
"

>





<Link

href="/practice"

className="
rounded-3xl
border
border-[#ddc8a8]
bg-white
p-10
shadow-lg
transition
hover:scale-105
"

>


<div className="text-center">


<div className="text-6xl">

📚

</div>



<h3

className="
mt-6
text-3xl
font-bold
text-green-900
"

>

Giáo trình Hán Ngữ

</h3>




<p

className="
mt-4
text-gray-600
"

>

Hán Ngữ 1 - Hán Ngữ 6

Luyện tập theo từng bài học

</p>



<div

className="
mt-8
rounded-full
bg-green-900
py-3
text-white
"

>

Xem bài tập

</div>



</div>


</Link>








<Link

href="/practice"

className="
rounded-3xl
border
border-[#ddc8a8]
bg-white
p-10
shadow-lg
transition
hover:scale-105
"

>


<div className="text-center">


<div className="text-6xl">

🎯

</div>



<h3

className="
mt-6
text-3xl
font-bold
text-green-900
"

>

Giáo trình HSK

</h3>




<p

className="
mt-4
text-gray-600
"

>

HSK1 - HSK6

Ghi nhớ từ vựng theo cấp độ

</p>



<div

className="
mt-8
rounded-full
bg-green-900
py-3
text-white
"

>

Xem bài tập

</div>



</div>


</Link>





</div>



</div>


</section>


);


}