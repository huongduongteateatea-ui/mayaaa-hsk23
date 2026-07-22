import Link from "next/link";


const books=[

{
title:"Hán Ngữ 1",
desc:"Luyện tập từ vựng và bài học quyển 1",
link:"/practice/hanyu/book1"
},

{
title:"Hán Ngữ 2",
desc:"Luyện tập từ vựng và bài học quyển 2",
link:"/practice/hanyu/book2"
},

{
title:"Hán Ngữ 3",
desc:"Trắc nghiệm, dịch câu, luyện nói theo từng bài",
link:"/practice/hanyu/book3"
},
{
title:"HSK4",
desc:"Luyện tập từ vựng HSK4 theo từng bài",
link:"/practice/hsk/hsk4"
},
{
title:"HSK 1 - HSK 6",
desc:"Ôn tập từ vựng theo cấp độ HSK",
link:"/practice/hsk"
}

];



export default function PracticePage(){


return (

<main className="
min-h-screen
bg-[#faf7ed]
px-6
py-20
">


<div className="
mx-auto
max-w-6xl
">


<h1 className="
text-center
text-5xl
font-bold
text-green-900
">

Luyện tập nhớ từ vựng

</h1>


<p className="
mt-5
text-center
text-xl
text-gray-600
">

Ghi nhớ từ vựng thông qua trắc nghiệm, dịch câu và luyện nói

</p>



<div className="
mt-16
grid
gap-8
md:grid-cols-2
">


{
books.map((book,index)=>(


<div

key={index}

className="
rounded-3xl
bg-white
p-10
shadow-lg
border
border-green-100
text-center
"


>


<h2 className="
text-3xl
font-bold
text-green-900
">

📚 {book.title}

</h2>


<p className="
mt-4
text-gray-600
">

{book.desc}

</p>


<Link

href={book.link}

className="
mt-8
inline-block
rounded-full
bg-green-900
px-8
py-3
text-white
"

>

Vào học →

</Link>


</div>


))


}


</div>


</div>


</main>

)

}