"use client";

import Link from "next/link";


export default function BackHome(){

  return (

    <Link

      href="/"

      className="
      fixed
      right-6
      bottom-6
      z-50
      flex
      flex-col
      items-center
      group
      "

    >

      <div

        className="
        w-16
        h-16
        rounded-full
        bg-pink-50
        flex
        items-center
        justify-center
        shadow-md
        border
        border-pink-200
        group-hover:scale-110
        transition
        "

      >

        <span className="text-4xl">
          🐽
        </span>

      </div>


      <span

        className="
        mt-2
        text-sm
        font-medium
        text-gray-700
        bg-white
        px-3
        py-1
        rounded-full
        shadow-sm
        "

      >

        Về trang chủ

      </span>


    </Link>

  );

}