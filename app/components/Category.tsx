const categories = [

  {
    level: "HSK1",
    title: "Khởi đầu",
    desc: "150 từ vựng cơ bản",
    color: "bg-green-100",
    border: "border-green-700",
  },


  {
    level: "HSK2",
    title: "Nền tảng",
    desc: "300 từ vựng giao tiếp",
    color: "bg-blue-100",
    border: "border-blue-700",
  },


  {
    level: "HSK3",
    title: "Trung cấp",
    desc: "600 từ vựng mở rộng",
    color: "bg-red-100",
    border: "border-red-700",
  },


  {
    level: "HSK4",
    title: "Nâng cao",
    desc: "1200 từ vựng",
    color: "bg-yellow-100",
    border: "border-yellow-700",
  },


  {
    level: "HSK5",
    title: "Chuyên sâu",
    desc: "2500 từ vựng",
    color: "bg-purple-100",
    border: "border-purple-700",
  },


  {
    level: "HSK6",
    title: "Thành thạo",
    desc: "5000+ từ vựng",
    color: "bg-orange-100",
    border: "border-orange-700",
  },

];



export default function Category(){


return (

<section
className="
mt-24
"
>


<div className="text-center">


<p
className="
tracking-[6px]
text-red-700
"
>
MAYAAA HSK23
</p>


<h2
className="
mt-5
text-5xl
text-green-900
"
>

Lộ trình học HSK

</h2>



<p
className="
mt-4
text-gray-600
"
>

Từ HSK1 đến HSK6

</p>



</div>





<div
className="
mt-12
grid
gap-6
md:grid-cols-3
lg:grid-cols-6
"
>


{
categories.map((item)=>(


<a

key={item.level}

href="/products"

className={`
rounded-3xl
border-2
${item.border}
${item.color}
p-6
text-center
shadow-sm
transition
hover:-translate-y-3
hover:shadow-xl
`}

>



<div
className="
text-4xl
font-bold
text-green-900
"
>

{item.level}

</div>



<h3
className="
mt-4
text-xl
font-bold
text-gray-800
"
>

{item.title}

</h3>



<p
className="
mt-3
text-sm
text-gray-600
"
>

{item.desc}

</p>



</a>



))


}



</div>



</section>

);

}