import Link from "next/link";



const roadmap = [

{
level:"HSK0 → HSK1",

title:"Cơ bản",

description:
"Dành cho người mới bắt đầu. Làm quen phát âm, chữ Hán, pinyin, từ vựng cơ bản và những mẫu câu đầu tiên.",

href:"/roadmap/hsk1"

},


{
level:"HSK2 → HSK3",

title:"Sơ cấp",

description:
"Mở rộng vốn từ vựng, giao tiếp hằng ngày và nắm vững các cấu trúc câu quan trọng.",

href:"/roadmap/hsk2"

},



{
level:"HSK4 → HSK5",

title:"Trung cấp",

description:
"Phát triển khả năng đọc hiểu, nghe hiểu và giao tiếp trong nhiều tình huống thực tế.",

href:"/roadmap/hsk4"

},



{
level:"HSK6",

title:"Nâng cao",

description:
"Luyện đọc dài, viết, tư duy tiếng Trung và sử dụng ngôn ngữ chuyên sâu.",

href:"/roadmap/hsk6"

}


];







export default function RoadmapPreview(){



return (

<section

className="
mt-24
px-6
"

>


<div className="text-center">


<h2

className="
text-6xl
font-bold
text-green-900
"

>

Tự học theo lộ trình

</h2>




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









<div

className="
mt-12
grid
gap-8
md:grid-cols-2
"

>


{

roadmap.map((item)=>(


<div

key={item.level}

className="
rounded-3xl
border
border-[#ddc8a8]
bg-white/90
p-10
shadow-sm
"

>





<div className="text-center">


<div className="
text-5xl
">

🌱

</div>





<h3

className="
mt-6
text-4xl
font-semibold
text-green-900
"

>

{item.level}

</h3>





<p

className="
mt-4
text-red-700
"

>

{item.title}

</p>





<p

className="
mt-8
leading-8
text-gray-700
"

>

{item.description}

</p>






<Link

href={item.href}

className="
mt-10
block
rounded-full
bg-green-900
py-4
text-center
text-lg
font-semibold
text-white
hover:bg-green-800
"

>

Bắt đầu học

</Link>



</div>





</div>


))


}



</div>





</section>


);


}