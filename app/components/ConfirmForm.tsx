"use client";


import { useState } from "react";


export default function ConfirmForm({
  product
}:{
  product:string;
}) {


  const [sent,setSent] = useState(false);



  function handleSubmit(e:React.FormEvent){

    e.preventDefault();

    setSent(true);

  }



  if(sent){

    return (

      <div className="mt-12 rounded-3xl bg-green-100 p-8 text-center">


        <h2 className="text-3xl font-bold text-green-900">

          ✅ Đã gửi xác nhận

        </h2>


        <p className="mt-4 text-lg text-gray-700">

          MAYAAA HSK23 sẽ kiểm tra thanh toán và
          gửi tài liệu tới email của bạn.

        </p>


      </div>

    );

  }





  return (

    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-12 max-w-xl space-y-6"
    >


      <input

        required

        placeholder="Họ và tên"

        className="
        w-full
        rounded-xl
        border
        px-6
        py-4
        "

      />



      <input

        required

        placeholder="Số điện thoại"

        className="
        w-full
        rounded-xl
        border
        px-6
        py-4
        "

      />



      <input

        required

        type="email"

        placeholder="Email nhận tài liệu"

        className="
        w-full
        rounded-xl
        border
        px-6
        py-4
        "

      />





      <button

        className="
        w-full
        rounded-full
        bg-green-900
        py-4
        text-xl
        font-bold
        text-white
        "

      >

        Gửi xác nhận

      </button>


    </form>

  );

}