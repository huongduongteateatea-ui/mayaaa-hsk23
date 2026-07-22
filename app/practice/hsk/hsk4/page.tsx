import Link from "next/link";


const lessons = [
  {
    title:"HSK4 Bài 1",
    href:"/practice/hsk/hsk4/lesson1"
  },
  {
    title:"HSK4 Bài 2",
    href:"#"
  },
  {
    title:"HSK4 Bài 3",
    href:"#"
  }
];


export default function HSK4Page(){

  return (

    <main className="min-h-screen px-6 py-16 bg-green-50">

      <div className="max-w-6xl mx-auto">


        <h1 className="
        text-center
        text-5xl
        font-bold
        text-green-900
        ">
          HSK4
        </h1>


        <p className="
        mt-5
        text-center
        text-gray-600
        ">
          Luyện tập HSK4 theo từng bài
        </p>



        <div className="
        mt-12
        grid
        gap-8
        md:grid-cols-3
        ">


        {
          lessons.map((lesson)=>(

            <Link

            key={lesson.title}

            href={lesson.href}

            className="
            rounded-3xl
            bg-white
            p-8
            text-center
            shadow-lg
            "

            >

              <div className="text-5xl">
                📘
              </div>


              <h2 className="
              mt-5
              text-2xl
              font-bold
              text-green-900
              ">
                {lesson.title}
              </h2>


              <div className="
              mt-6
              rounded-full
              bg-green-900
              py-3
              text-white
              ">
                Bắt đầu
              </div>


            </Link>

          ))
        }


        </div>


      </div>

    </main>

  );

}