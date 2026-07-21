export default function Footer() {


  return (

    <footer

      className="
      mt-20
      border-t
      border-[#ddc8a8]
      bg-[#f8f1e7]
      px-6
      py-12
      "

    >


      <div

        className="
        mx-auto
        grid
        max-w-7xl
        gap-10
        md:grid-cols-3
        "

      >



        {/* BRAND */}

        <div>


          <h2

            className="
            text-3xl
            font-semibold
            text-green-900
            "

          >

            MAYAAA HSK23

          </h2>



          <p

            className="
            mt-4
            text-gray-700
            "

          >

            Học tiếng Trung - Kết nối tri thức

          </p>


        </div>





        {/* LINK */}

        <div>


          <h3

            className="
            text-xl
            font-semibold
            text-green-900
            "

          >

            Liên kết

          </h3>



          <div className="mt-4 space-y-3 text-gray-700">


            <p>
              Trang chủ
            </p>


            <p>
              Tài liệu HSK
            </p>


            <p>
              Hướng dẫn
            </p>


          </div>


        </div>






        {/* CONTACT */}

        <div>


          <h3

            className="
            text-xl
            font-semibold
            text-green-900
            "

          >

            Liên hệ

          </h3>



          <p

            className="
            mt-4
            text-gray-700
            "

          >

            MAYAAA HSK23

          </p>



          <p

            className="
            mt-2
            text-gray-700
            "

          >

            Tài liệu học tiếng Trung HSK1 - HSK6

          </p>



        </div>



      </div>




      <div

        className="
        mt-10
        text-center
        text-sm
        text-gray-500
        "

      >

        © 2026 MAYAAA HSK23. All rights reserved.

      </div>



    </footer>

  );

}