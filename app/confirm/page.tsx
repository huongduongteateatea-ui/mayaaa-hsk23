import Link from "next/link";


const products = {

  HSK1: "HSK1 Bộ 1000 từ",

  HSK2: "HSK2 Bộ 1200 từ",

  HSK3: "HSK3 Bộ 1500 từ",

  HSK4: "HSK4 Bộ 2500 từ",

  HSK5: "HSK5 Bộ 5000 từ",

  HSK6: "HSK6 Bộ 7000 từ",

};



export default async function ConfirmPage({

  searchParams,

}: {

  searchParams: Promise<{id?: string}>;

}) {


  const {id} = await searchParams;


  const product =
    products[id as keyof typeof products] || "Tài liệu HSK";



  return (

    <main className="mx-auto max-w-5xl px-6 py-20">



      <div className="rounded-3xl border border-[#ddc8a8] bg-white/70 p-10">





        <div className="text-center">


          <span className="rounded-full border border-red-700 px-6 py-2 text-red-700">

            MAYAAA HSK23

          </span>



          <h1 className="mt-8 font-serif text-5xl font-bold text-green-900">

            Xác nhận thanh toán

          </h1>



          <p className="mt-5 text-xl text-gray-700">

            Sản phẩm:

            <b className="text-green-700">
              {" "}{product}
            </b>

          </p>


        </div>






        <form className="mx-auto mt-12 max-w-xl space-y-6">


          <input

            type="text"

            placeholder="Họ và tên"

            className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-6
            py-4
            text-lg
            outline-none
            focus:border-green-700
            "

          />



          <input

            type="tel"

            placeholder="Số điện thoại"

            className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-6
            py-4
            text-lg
            outline-none
            focus:border-green-700
            "

          />





          <input

            type="email"

            placeholder="Email nhận tài liệu"

            className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-6
            py-4
            text-lg
            outline-none
            focus:border-green-700
            "

          />






          <button

            type="submit"

            className="
            w-full
            rounded-full
            bg-green-900
            py-4
            text-xl
            font-bold
            text-white
            hover:bg-green-800
            "

          >

            Gửi xác nhận

          </button>



        </form>





        <div className="mt-10 text-center text-gray-600">


          Sau khi xác nhận, MAYAAA HSK23 sẽ kiểm tra thanh toán
          và gửi tài liệu tới email của bạn.


        </div>





      </div>



    </main>

  );

}