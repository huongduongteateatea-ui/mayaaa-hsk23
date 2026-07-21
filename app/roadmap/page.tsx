export default function RoadmapPage(){


const roadmaps = [

{
title:"HSK0 → HSK1",
icon:"🌱",
desc:"Dành cho người mới bắt đầu. Làm quen phát âm, từ vựng cơ bản và những mẫu câu đầu tiên.",
level:"Cơ bản"
},


{
title:"HSK2 → HSK3",
icon:"📚",
desc:"Xây dựng nền tảng giao tiếp, mở rộng vốn từ và nâng cao khả năng đọc hiểu.",
level:"Trung cấp"
},


{
title:"HSK4 → HSK6",
icon:"🚀",
desc:"Luyện thi nâng cao, phát triển khả năng đọc, viết và sử dụng tiếng Trung chuyên sâu.",
level:"Nâng cao"
}


];





return (


<main

className="
mx-auto
max-w-7xl
px-6
py-16
"

>



<div className="text-center">


<p

className="
text-sm
tracking-[8px]
text-red-700
"

>

MAYAAA HSK23

</p>




<h1

className="
mt-6
text-6xl
font-semibold
text-green-900
"

>

Tự học theo lộ trình

</h1>





<p

className="
mx-auto
mt-6
max-w-3xl
text-lg
text-gray-600
"

>

Lộ trình học tiếng Trung được thiết kế từ cơ bản đến nâng cao,
giúp bạn biết mình cần học gì và bắt đầu từ đâu.

</p>


</div>







<section

className="
mt-16
grid
gap-10
md:grid-cols-3
"

>



{

roadmaps.map((item)=>(


<div

key={item.title}

className="
rounded-3xl
border
border-[#ddc8a8]
bg-white/80
p-8
text-center
shadow-sm
transition
hover:-translate-y-2
hover:shadow-xl
"

>


<div className="text-6xl">

{item.icon}

</div>




<h2

className="
mt-6
text-3xl
font-semibold
text-green-900
"

>

{item.title}

</h2>





<p

className="
mt-4
text-sm
text-red-700
"

>

{item.level}

</p>





<p

className="
mt-5
leading-8
text-gray-700
"

>

{item.desc}

</p>







<button

className="
mt-8
w-full
rounded-full
bg-green-900
py-3
font-semibold
text-white
hover:bg-green-800
"

>

Bắt đầu học

</button>




</div>



))


}



</section>






<section

className="
mt-20
rounded-3xl
border
border-[#ddc8a8]
bg-[#f8f1e7]
p-10
text-center
"

>


<h2

className="
text-4xl
font-semibold
text-green-900
"

>

Mỗi bước nhỏ tạo nên hành trình lớn

</h2>




<p

className="
mt-5
text-gray-700
"

>

Từ phát âm, từ vựng, ngữ pháp đến giao tiếp và luyện thi HSK,
MAYAAA HSK23 đồng hành cùng bạn trên từng chặng đường.

</p>



</section>





</main>


);


}