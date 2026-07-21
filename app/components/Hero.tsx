import Link from "next/link";


export default function Hero() {


  return (

    <section
      className="
      relative
      overflow-hidden
      py-24
      "
    >



      <div
        className="
        mx-auto
        max-w-5xl
        px-6
        text-center
        "
      >



        {/* BRAND */}

        <p
          className="
          text-lg
          tracking-[8px]
          text-red-700
          "
        >

          MAYAAA HSK23

        </p>





        {/* TITLE */}

        <h1
          className="
          mt-8
          text-6xl
          leading-tight
          text-green-900
          md:text-7xl
          "
        >

          Học tiếng Trung

          <br />

          <span className="text-red-700">

            Vững bước tương lai

          </span>


        </h1>






        {/* DESCRIPTION */}

        <p
          className="
          mx-auto
          mt-8
          max-w-3xl
          text-xl
          leading-9
          text-gray-700
          "
        >

          Tài liệu HSK1 - HSK6

          <br />

          Đồng hành cùng bạn trên hành trình chinh phục tiếng Trung


        </p>






        {/* BUTTON */}

        <div
          className="
          mt-12
          flex
          justify-center
          gap-5
          "
        >


          <Link

            href="/products"

            className="
            rounded-full
            bg-green-900
            px-10
            py-4
            text-lg
            font-semibold
            text-white
            hover:bg-green-800
            "

          >

            Khám phá tài liệu

          </Link>





          <Link

            href="/about"

            className="
            rounded-full
            border
            border-green-900
            px-10
            py-4
            text-lg
            text-green-900
            hover:bg-green-50
            "

          >

            Về Mayaaa

          </Link>



        </div>




      </div>




      {/* DECOR */}

      <div
        className="
        absolute
        left-10
        top-10
        text-8xl
        opacity-10
        "
      >

        花

      </div>



      <div
        className="
        absolute
        bottom-10
        right-10
        text-8xl
        opacity-10
        "
      >

        学

      </div>



    </section>

  );

}