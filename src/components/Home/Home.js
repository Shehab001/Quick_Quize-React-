import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Home = () => {
  const topics = useLoaderData();
  //console.log(topics.data);
  return (
    <div className="grid  lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 my-10 sm:mx-10 ">
      {topics.data.map((topic) => {
        return <Card key={topic.id} topic={topic}></Card>;
      })}
    </div>
  );
};

export default Home;
