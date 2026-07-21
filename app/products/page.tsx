import ProductCard from "../components/ProductCard";
import products from "../data/products";



export default function ProductsPage(){


  return (

    <main

      className="
      mx-auto
      max-w-7xl
      px-6
      py-16
      "

    >



      <div

        className="
        text-center
        "

      >


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

          Tài liệu HSK

        </h1>





        <p

          className="
          mx-auto
          mt-5
          max-w-3xl
          text-lg
          text-gray-600
          "

        >

          Bộ tài liệu học tiếng Trung từ HSK1 đến HSK6,
          phù hợp cho người mới bắt đầu đến luyện thi nâng cao.

        </p>


      </div>







      <section

        className="
        mt-16
        grid
        gap-10
        md:grid-cols-2
        lg:grid-cols-3
        "

      >



        {

          products.map((product)=>(


            <ProductCard


              key={product.id}


              id={product.id}


              title={product.title}


              price={product.price}


              pages={product.pages}


              image={product.image}


              slug={product.slug}


            />


          ))

        }



      </section>








      <section

        className="
        mt-20
        rounded-3xl
        border
        border-[#ddc8a8]
        bg-white/70
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

          Học tiếng Trung theo lộ trình

        </h2>





        <p

          className="
          mt-5
          text-gray-700
          "

        >

          Bắt đầu từ HSK1 và từng bước chinh phục HSK6
          cùng MAYAAA HSK23.

        </p>



      </section>




    </main>

  );

}