"use client";


export default function CartDrawer(){


  return (

    <div

      className="
      fixed
      right-0
      top-0
      z-[60]
      h-full
      w-96
      bg-[#f8f1e7]
      p-6
      shadow-2xl
      "

    >


      <h2

        className="
        text-3xl
        font-semibold
        text-green-900
        "

      >

        Giỏ hàng

      </h2>



      <p

        className="
        mt-8
        text-gray-600
        "

      >

        Chưa có sản phẩm trong giỏ hàng

      </p>


    </div>

  );

}