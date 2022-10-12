import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Qstn = (params) => {
  //console.log(params.qstn.correctAnswer);
  let a = params.qstn.options[0];
  let b = params.qstn.options[1];
  let c = params.qstn.options[2];
  let d = params.qstn.options[3];
  const solve = (x) => {
    if (params.qstn.correctAnswer === x) {
      toast("Correct Answer...");
    } else {
      toast("Wrong Answer...");
    }
  };
  const correctAnswer = () => {
    toast(`Correct Answer : ${params.qstn.correctAnswer}`);
  };
  return (
    <div>
      <ToastContainer />
      <div className="border-2 border-teal-900 relative	">
        <span
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => {
            correctAnswer();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </span>
        <h1 className="text-2xl text-center my-5">{params.qstn.question}</h1>
        <div className="grid grid-cols-2 gap-4 p-5 	">
          <div className="text-xl border-2 border-sky-600 bg-teal-500	cursor-pointer		p-5">
            <input
              type="radio"
              id="html"
              name="fav_language"
              className="cursor-pointer"
              onClick={() => {
                solve(a);
              }}
            ></input>
              <label htmlFor="html">{a}</label>
            <br></br>
          </div>
          <div className="text-xl border-2 border-sky-600 bg-teal-500	cursor-pointer		p-5">
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
              className="cursor-pointer"
              onClick={() => {
                solve(b);
              }}
            ></input>
              <label htmlFor="html">{b}</label>
            <br></br>
          </div>
          <div className="text-xl border-2 border-sky-600 bg-teal-500	cursor-pointer		p-5">
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
              className="cursor-pointer"
              onClick={() => {
                solve(c);
              }}
            ></input>
              <label htmlFor="html">{c}</label>
            <br></br>
          </div>
          <div className="text-xl border-2 border-sky-600 bg-teal-500	cursor-pointer		p-5">
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
              className="cursor-pointer"
              onClick={() => {
                solve(d);
              }}
            ></input>
              <label htmlFor="html">{d}</label>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qstn;
