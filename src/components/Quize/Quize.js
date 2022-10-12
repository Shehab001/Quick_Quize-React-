import React from "react";
import { useLoaderData } from "react-router-dom";
import Qstn from "../Qstn/Qstn";

const Quize = () => {
  const qstns = useLoaderData().data;
  // console.log(qstns);
  return (
    <div className="mx-10">
      <h1 className="text-4xl text-center my-5">Topic Name : {qstns.name}</h1>
      <h1 className="text-4xl text-center my-5">
        Total Question : {qstns.total}
      </h1>

      <div className="grid grid-cols-1 gap-4 p-5">
        {qstns.questions.map((qstn) => (
          <Qstn key={qstn.id} qstn={qstn}></Qstn>
        ))}
      </div>
    </div>
  );
};

export default Quize;
