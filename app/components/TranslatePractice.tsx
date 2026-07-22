"use client";

import { useState } from "react";

type TranslateItem = {
  question: string;
  answer: string;
  pinyin?: string;
};

export default function TranslatePractice({
items = [],
onComplete
}:{
items?:TranslateItem[];
onComplete?:()=>void;
}){

if(items.length === 0){
  return null;
}


const [current,setCurrent]=useState(0);
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [score, setScore] = useState(0);

  const currentItem = items[current];


  function normalize(text:string){
    return text
      .replace(/\s+/g,"")
      .replace(/[。，！？,.!?]/g,"")
      .toLowerCase();
  }


  function checkAnswer(){

    const user = normalize(answer);

    const right = normalize(
      currentItem.answer
    );

    if(user === right){
      setCorrect(true);
      setScore(score + 1);
    }
    else{
      setCorrect(false);
    }

    setSubmitted(true);
  }



  function nextQuestion(){

    if(current === items.length - 1){

      if(onComplete){
        onComplete();
      }

      return;
    }


    setCurrent(current + 1);
    setAnswer("");
    setSubmitted(false);
    setCorrect(false);

  }



  function skipQuestion(){

    if(current < items.length - 1){

      setCurrent(current + 1);
      setAnswer("");
      setSubmitted(false);
      setCorrect(false);

    }

  }



  return (

    <div className="space-y-8">

      <div className="
      rounded-3xl
      bg-white
      p-8
      shadow-md
      border
      border-green-100
      ">


        <h3 className="
        text-3xl
        font-bold
        text-green-900
        ">
          ✍️ Dịch câu
        </h3>


        <p className="mt-3 text-gray-600">
          Câu {current + 1}/{items.length}
        </p>


        <div className="
        mt-6
        rounded-xl
        bg-gray-50
        p-5
        ">

          <p className="text-lg font-medium">
            🇻🇳 {currentItem.question}
          </p>

        </div>



        <textarea

          value={answer}

          disabled={submitted}

          onChange={(e)=>
            setAnswer(e.target.value)
          }

          placeholder="Nhập câu tiếng Trung của bạn..."

          className="
          mt-5
          w-full
          min-h-[130px]
          rounded-xl
          border
          p-4
          text-lg
          "

        />



        {!submitted && (

          <>

          <button

          onClick={checkAnswer}

          disabled={!answer.trim()}

          className="
          mt-5
          rounded-full
          bg-green-900
          px-8
          py-3
          text-white
          "

          >
            Kiểm tra
          </button>


          {
          current < items.length - 1 &&
          <button

          onClick={skipQuestion}

          className="
          ml-4
          rounded-full
          border
          px-8
          py-3
          "

          >
            Bỏ qua
          </button>
          }


          </>

        )}




        {
        submitted && (

          <div className="
          mt-6
          rounded-xl
          bg-green-50
          p-6
          ">


          <h4 className="font-bold text-xl">

          {
          correct
          ? "✅ Chính xác"
          : "❌ Chưa chính xác"
          }

          </h4>


          <p className="mt-4 text-xl font-bold text-green-900">

          🇨🇳 {currentItem.answer}

          </p>


          {
          currentItem.pinyin &&
          <p className="mt-3 italic">
            🔊 {currentItem.pinyin}
          </p>
          }



          <button

          onClick={nextQuestion}

          className="
          mt-6
          rounded-full
          bg-green-900
          px-8
          py-3
          text-white
          "

          >

          {
          current === items.length -1
          ? "Hoàn thành"
          : "Câu tiếp theo"
          }

          </button>


          </div>

        )
        }


      </div>


    </div>

  );

}