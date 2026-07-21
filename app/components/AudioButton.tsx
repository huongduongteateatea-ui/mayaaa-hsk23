"use client";


import { useRef } from "react";



export default function AudioButton({

src

}:{

src:string;

}){


const audioRef = useRef<HTMLAudioElement | null>(null);



function play(){

audioRef.current?.play();

}




return (

<>

<audio

ref={audioRef}

src={src}

/>


<button

onClick={play}

className="
mt-3
rounded-full
bg-green-900
px-5
py-2
text-white
"

>

🔊 Nghe

</button>


</>


);


}