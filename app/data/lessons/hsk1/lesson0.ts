const lesson0 = {


id:0,


title:"Bài 0: Làm quen với tiếng Trung",


description:
"Nền tảng dành cho người mới bắt đầu: chữ Hán, pinyin, thanh điệu và phát âm tiếng Trung.",




sections:[


{
title:"1. Tiếng Trung gồm những gì?",

content:[

"Tiếng Trung gồm ba phần quan trọng: chữ Hán, pinyin và thanh điệu.",

"Chữ Hán là hệ thống chữ viết biểu đạt ý nghĩa.",

"Pinyin giúp người học đọc được chữ Hán bằng chữ cái Latin.",

"Thanh điệu quyết định ý nghĩa của từ."

]

},



{
title:"2. Làm quen chữ Hán",

content:[

"Chữ Hán được tạo thành từ các nét cơ bản.",

"Khi viết chữ Hán cần chú ý thứ tự nét.",

"Quy tắc cơ bản: trên trước dưới sau, trái trước phải sau."

]

},



{
title:"3. Pinyin",

content:[

"Một âm tiết tiếng Trung gồm thanh mẫu + vận mẫu + thanh điệu.",

"Ví dụ: nǐ = n + i + thanh 3."

]

},



{
title:"4. Thanh điệu",

content:[

"Tiếng Trung phổ thông có 4 thanh chính và 1 thanh nhẹ.",

"Thay đổi thanh điệu có thể làm thay đổi nghĩa của từ."

]

}



],







// Thanh mẫu

initials:[


{
text:"b",
audio:"/audio/hsk1/lesson0/b.mp3"
},

{
text:"p",
audio:"/audio/hsk1/lesson0/p.mp3"
},

{
text:"m",
audio:"/audio/hsk1/lesson0/m.mp3"
},

{
text:"f",
audio:"/audio/hsk1/lesson0/f.mp3"
},


{
text:"d",
audio:"/audio/hsk1/lesson0/d.mp3"
},

{
text:"t",
audio:"/audio/hsk1/lesson0/t.mp3"
},

{
text:"n",
audio:"/audio/hsk1/lesson0/n.mp3"
},

{
text:"l",
audio:"/audio/hsk1/lesson0/l.mp3"
}


],









// Vận mẫu

finals:[


{
text:"a",
audio:"/audio/hsk1/lesson0/a.mp3"
},


{
text:"o",
audio:"/audio/hsk1/lesson0/o.mp3"
},


{
text:"e",
audio:"/audio/hsk1/lesson0/e.mp3"
},


{
text:"i",
audio:"/audio/hsk1/lesson0/i.mp3"
},


{
text:"u",
audio:"/audio/hsk1/lesson0/u.mp3"
},


{
text:"ü",
audio:"/audio/hsk1/lesson0/v.mp3"
}


],










// Phát âm cơ bản

pronunciation:[


{
sound:"a",

description:
"Âm a: miệng mở rộng.",

example:"mā",

audio:"/audio/hsk1/lesson0/a.mp3"

},



{
sound:"o",

description:
"Âm o.",

example:"mō",

audio:"/audio/hsk1/lesson0/o.mp3"

},



{
sound:"i",

description:
"Âm i.",

example:"nǐ",

audio:"/audio/hsk1/lesson0/i.mp3"

},



{
sound:"u",

description:
"Âm u.",

example:"wǔ",

audio:"/audio/hsk1/lesson0/u.mp3"

},



{
sound:"ü",

description:
"Âm ü.",

example:"nǚ",

audio:"/audio/hsk1/lesson0/v.mp3"

}


],









// Thanh điệu

tones:[


{
number:1,

symbol:"ā",

example:"mā",

description:"Thanh 1: cao và ngang.",

audio:"/audio/hsk1/lesson0/tone1.mp3"

},



{
number:2,

symbol:"á",

example:"má",

description:"Thanh 2: đi lên.",

audio:"/audio/hsk1/lesson0/tone2.mp3"

},



{
number:3,

symbol:"ǎ",

example:"mǎ",

description:"Thanh 3: xuống rồi lên.",

audio:"/audio/hsk1/lesson0/tone3.mp3"

},



{
number:4,

symbol:"à",

example:"mà",

description:"Thanh 4: đi xuống.",

audio:"/audio/hsk1/lesson0/tone4.mp3"

},



{
number:5,

symbol:"a",

example:"ma",

description:"Thanh nhẹ.",

audio:"/audio/hsk1/lesson0/tone5.mp3"

}


],









// Nét chữ Hán

strokes:[


{
name:"Nét ngang",
example:"一"
},


{
name:"Nét sổ",
example:"丨"
},


{
name:"Nét phẩy",
example:"丿"
},


{
name:"Nét chấm",
example:"丶"
},


{
name:"Nét móc",
example:"乛"
}


],










// Bài tập

exercises:[


{
question:"Pinyin có tác dụng gì?",

options:[

"Giúp đọc chữ Hán",

"Thay thế chữ Hán",

"Viết tiếng Việt"

],

answer:0

},



{
question:"Tiếng Trung có bao nhiêu thanh điệu cơ bản?",

options:[

"2",

"4",

"8"

],

answer:1

},



{
question:"b thuộc nhóm nào?",

options:[

"Thanh mẫu",

"Vận mẫu",

"Thanh điệu"

],

answer:0

},



{
question:"a thuộc nhóm nào?",

options:[

"Thanh mẫu",

"Vận mẫu",

"Chữ Hán"

],

answer:1

}



]


};



export default lesson0;