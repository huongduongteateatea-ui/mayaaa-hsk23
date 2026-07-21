"use client";


import Link from "next/link";


export default function FloatingHomeButton(){


  return (

    <Link

      href="/"

      title="Về trang chủ"

      className="
      fixed
      bottom-8
      right-8
      z-50
      flex
      flex-col
      items-center
      justify-center
      "

    >


      <div

        className="
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        border-4
        border-[#ddc8a8]
        bg-pink-100
        text-4xl
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        "

      >

        🐽

      </div>



      <span

        className="
        mt-2
        rounded-full
        bg-[#f8f1e7]
        px-3
        py-1
        text-xs
        font-medium
        text-green-900
        shadow
        "

      >

        Về trang chủ

      </span>



    </Link>

  );

}