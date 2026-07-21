"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useRouter } from "next/navigation";


export default function RegisterPage(){

const router = useRouter();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [message,setMessage] = useState("");



async function handleRegister(){

try{

await createUserWithEmailAndPassword(
auth,
email,
password
);


setMessage("Đăng ký thành công!");

router.push("/");


}catch(error:any){

setMessage(error.message);

}

}



return (

<div className="
min-h-screen
flex
items-center
justify-center
bg-gray-50
">


<div className="
bg-white
p-8
rounded-3xl
shadow-lg
w-full
max-w-md
">


<h1 className="
text-3xl
font-bold
text-green-900
mb-6
">

Đăng ký tài khoản

</h1>



<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="
w-full
border
rounded-xl
p-3
mb-4
"

/>



<input

type="password"

placeholder="Mật khẩu"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="
w-full
border
rounded-xl
p-3
mb-4
"

/>



<button

onClick={handleRegister}

className="
w-full
bg-green-900
text-white
rounded-xl
p-3
"

>

Đăng ký

</button>



<p className="mt-4 text-center">

{message}

</p>


</div>


</div>

)

}