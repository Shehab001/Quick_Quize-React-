import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, logo, name, total } = props.topic;
  //console.log(logo);
  return (
    <div className="mx-auto">
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 ">
        <a href="/home">
          <img className="rounded-t-lg bg-cyan-800" src={logo} alt="pic"></img>
        </a>
        <div className="p-5">
          <a href="/home">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <p className="text-white">Total Question : {total}</p>
          <a
            href="#"
            className="inline-flex items-center py-2 my-5 px-3 text-sm font-medium text-center text-white bg-cyan-800	rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-cyan-800	 bg-cyan-800		"
          >
            <Link className="text-xl " to={`/quize/${id}`}>
              Attempt Quize
            </Link>
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
