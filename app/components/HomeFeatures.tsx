import Link from "next/link";


export default function HomeFeatures(){


return (

<section className="
bg-[#faf7ed]
py-20
">


<div className="
mx-auto
max-w-6xl
px-6
">


<h2 className="
text-center
text-5xl
font-bold
text-green-900
">

Học tiếng Trung hiệu quả

</h2>


<p className="
mt-5
text-center
text-xl
text-gray-600
">

Lộ trình học toàn diện từ từ vựng, luyện tập đến tự học

</p>





<div className="
mt-16
grid
gap-8
md:grid-cols-3
">





{/* BÁN TÀI LIỆU */}

<div className="
rounded-3xl
bg-white
p-8
shadow-lg
border
border-green-100
text-center
">


<div className="text-6xl">

📚

</div>


<h3 className="
mt-6
text-2xl
font-bold
text-green-900
">

Bán tài liệu

</h3>


<p className="
mt-4
text-gray-600
">

Bộ tài liệu HSK, từ vựng, bài tập PDF giúp bạn học nhanh và có hệ thống.

</p>



<Link

href="/products"

className="
mt-6
inline-block
rounded-full
bg-green-900
px-7
py-3
text-white
hover:bg-green-800
"

>

Xem tài liệu →

</Link>


</div>








{/* LUYỆN TẬP */}

<div className="
rounded-3xl
bg-white
p-8
shadow-lg
border
border-green-100
text-center
">


<div className="text-6xl">

📝

</div>


<h3 className="
mt-6
text-2xl
font-bold
text-green-900
">

Luyện tập nhớ từ vựng

</h3>



<p className="
mt-4
text-gray-600
">

Ghi nhớ từ vựng thông qua trắc nghiệm, dịch câu và luyện nói theo từng bài học.

</p>



<Link

href="/practice"

className="
mt-6
inline-block
rounded-full
bg-green-900
px-7
py-3
text-white
hover:bg-green-800
"

>

Bắt đầu luyện tập →

</Link>



</div>









{/* TỰ HỌC */}

<div className="
rounded-3xl
bg-white
p-8
shadow-lg
border
border-green-100
text-center
">


<div className="text-6xl">

🎓

</div>


<h3 className="
mt-6
text-2xl
font-bold
text-green-900
">

Tự học tiếng Trung

</h3>



<p className="
mt-4
text-gray-600
">

Học theo giáo trình Hán Ngữ 1 - 6, HSK và các bài hướng dẫn chi tiết.

</p>



<Link

href="/guide"

className="
mt-6
inline-block
rounded-full
bg-green-900
px-7
py-3
text-white
hover:bg-green-800
"

>

Xem hướng dẫn →

</Link>


</div>





</div>


</div>


</section>

)

}