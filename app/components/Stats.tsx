const stats = [
  {
    icon: "📚",
    title: "Tài liệu chuẩn HSK",
    desc: "Hệ thống từ vựng HSK1 - HSK6",
  },

  {
    icon: "⚡",
    title: "Học nhanh - nhớ lâu",
    desc: "Phương pháp học khoa học",
  },

  {
    icon: "🎯",
    title: "Lộ trình rõ ràng",
    desc: "Dễ dàng chinh phục kỳ thi HSK",
  },

  {
    icon: "🌏",
    title: "Kết nối văn hóa",
    desc: "Ngôn ngữ mở ra thế giới",
  },
];



export default function Stats() {

  return (

    <section className="mt-16">


      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">


        {stats.map((item) => (

          <div

            key={item.title}

            className="
            rounded-3xl
            border border-[#ddc8a8]
            bg-white/70
            p-8
            text-center
            shadow-sm
            transition
            hover:-translate-y-2
            hover:shadow-xl
            "

          >


            <div className="text-5xl">
              {item.icon}
            </div>



            <h3 className="mt-5 font-serif text-xl font-bold text-green-900">

              {item.title}

            </h3>



            <p className="mt-3 text-gray-600">

              {item.desc}

            </p>



          </div>


        ))}


      </div>


    </section>

  );

}