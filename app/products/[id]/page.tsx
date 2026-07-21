import Image from "next/image";
import Link from "next/link";


const products = {

  hsk1: {
    level: "HSK1",
    title: "HSK1 Bộ 1000 từ",
    price: "39.000đ",
    image: "/images/products/hsk1.png",
    desc: "Bộ tài liệu dành cho người mới bắt đầu học tiếng Trung.",
  },


  hsk2: {
    level: "HSK2",
    title: "HSK2 Bộ 1200 từ",
    price: "49.000đ",
    image: "/images/products/hsk2.png",
    desc: "Mở rộng vốn từ vựng và giao tiếp cơ bản.",
  },


  hsk3: {
    level: "HSK3",
    title: "HSK3 Bộ 1500 từ",
    price: "59.000đ",
    image: "/images/products/hsk3.png",
    desc: "Nền tảng trung cấp giúp nâng cao khả năng sử dụng tiếng Trung.",
  },


  hsk4: {
    level: "HSK4",
    title: "HSK4 Bộ 2500 từ",
    price: "79.000đ",
    image: "/images/products/hsk4.png",
    desc: "Phù hợp cho người muốn nâng cao trình độ.",
  },


  hsk5: {
    level: "HSK5",
    title: "HSK5 Bộ 5000 từ",
    price: "99.000đ",
    image: "/images/products/hsk5.png",
    desc: "Tài liệu chuyên sâu phục vụ học tập và thi HSK5.",
  },


  hsk6: {
    level: "HSK6",
    title: "HSK6 Bộ 7000 từ",
    price: "129.000đ",
    image: "/images/products/hsk6.png",
    desc: "Bộ từ vựng nâng cao dành cho mục tiêu chinh phục HSK6.",
  },

};



export default async function ProductDetailPage({

 params,

}:{

 params: Promise<{id:string}>;

}) {


 const {id}=await params;


 const product =
 products[id as keyof typeof products];



 if(!product){

  return (

   <div className="p-20 text-center">

    Không tìm thấy sản phẩm

   </div>

  );

 }




 return (

  <main className="mx-auto max-w-6xl px-6 py-16">


   <div className="
    grid
    gap-12
    rounded-3xl
    border
    border-[#ddc8a8]
    bg-white/70
    p-10
    md:grid-cols-2
   ">



    {/* IMAGE */}

    <div>


     <div className="relative h-[550px]">


      <Image

       src={product.image}

       alt={product.title}

       fill

       className="object-contain"

      />


     </div>


    </div>





    {/* CONTENT */}

    <div>


     <span className="
      rounded-full
      bg-red-700
      px-6
      py-2
      text-white
     ">

      {product.level}

     </span>




     <h1 className="
      mt-8
      font-serif
      text-5xl
      font-bold
      text-green-900
     ">

      {product.title}

     </h1>




     <p className="mt-6 text-xl leading-8 text-gray-700">

      {product.desc}

     </p>





     <div className="
      mt-8
      rounded-2xl
      bg-[#f8f1e7]
      p-6
     ">


      <h2 className="text-2xl font-bold text-green-900">

       Bạn nhận được:

      </h2>


      <ul className="mt-4 space-y-3 text-gray-700">


       <li>
        ✓ File PDF chất lượng cao
       </li>


       <li>
        ✓ Từ vựng chuẩn HSK
       </li>


       <li>
        ✓ Học mọi lúc mọi nơi
       </li>


       <li>
        ✓ Phù hợp tự học và luyện thi
       </li>


      </ul>


     </div>





     <div className="mt-8">


      <p className="text-4xl font-bold text-red-700">

       {product.price}

      </p>



      <Link

       href={`/checkout?id=${id}`}

       className="
        mt-6
        block
        rounded-full
        bg-green-900
        py-5
        text-center
        text-xl
        font-bold
        text-white
        hover:bg-green-800
       "

      >

       Mua ngay

      </Link>



     </div>



    </div>



   </div>



  </main>

 );

}