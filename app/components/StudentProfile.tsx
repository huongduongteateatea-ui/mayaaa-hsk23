"use client";

import { useEffect, useState } from "react";


export default function StudentProfile({

onStart

}:{

onStart:(name:string)=>void;

}){


const [name,setName] = useState("");

const [input,setInput] = useState("");



useEffect(()=>{

const saved = localStorage.getItem("studentName");


if(saved){

setName(saved);

onStart(saved);

}


},[]);





function saveName(){


const newName = input.trim();


if(!newName) return;


localStorage.setItem(
"studentName",
newName
);


setName(newName);


onStart(newName);


}




if(name){

return null;

}



return (

<section className="
min-h-screen
flex
items-center
justify-center
">


<div className="
w-full
max-w-md
rounded-3xl
bg-white
p-8
shadow-lg
border
border-green-100
">


<h2 className="
text-3xl
font-bold
text-green-900
">

👋 Chào mừng bạn!

</h2>



<p className="
mt-3
text-gray-600
">

Nhập tên để bắt đầu học và lưu tiến độ.

</p>




<input

value={input}

onChange={(e)=>setInput(e.target.value)}

placeholder="Nhập tên của bạn..."

className="
mt-6
w-full
rounded-xl
border
p-4
text-lg
"

/>





<button

onClick={saveName}

className="
mt-5
w-full
rounded-full
bg-green-900
py-3
text-white
hover:bg-green-800
"

>

Bắt đầu học

</button>


</div>


</section>

)

}