import React from "react";

const Qstn = (params) => {
  //console.log(params.qstn.correctAnswer);
  const solve = (x) => {
    alert(x);
  };
  return (
    <div>
      <div className="border-2 border-teal-900	">
        <h1 className="text-2xl text-center my-5">{params.qstn.question}</h1>
        <div className="grid grid-cols-2 gap-4 p-5 	">
          <div className="text-xl border-2 border-sky-600 bg-teal-500	cursor-pointer		p-5">
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
              className="cursor-pointer"
              onClick={() => {
                solve(1);
              }}
            ></input>
              <label htmlFor="html">{params.qstn.options[0]}</label>
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
                solve();
              }}
            ></input>
              <label htmlFor="html">{params.qstn.options[1]}</label>
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
                solve();
              }}
            ></input>
              <label htmlFor="html">{params.qstn.options[2]}</label>
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
                solve();
              }}
            ></input>
              <label htmlFor="html">{params.qstn.options[3]}</label>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qstn;
