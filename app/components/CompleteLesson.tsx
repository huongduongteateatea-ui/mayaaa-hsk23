"use client";


import { useRouter } from "next/navigation";



export default function CompleteLesson({

lessonId

}:{

lessonId:number;

}){



const router = useRouter();





function completeLesson(){



const oldData =
localStorage.getItem("completedLessons");



const completed:number[] =
oldData
?
JSON.parse(oldData)
:
[];





if(!completed.includes(lessonId)){


completed.push(lessonId);


localStorage.setItem(

"completedLessons",

JSON.stringify(completed)

);


}





router.push("/roadmap/hsk1");


router.refresh();



}







return (



<button


onClick={completeLesson}


className="
mt-8
w-full
rounded-full
bg-green-900
py-4
text-lg
font-semibold
text-white
hover:bg-green-800
"


>



✓ Hoàn thành bài học


</button>


);


}