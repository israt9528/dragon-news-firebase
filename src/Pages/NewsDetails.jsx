import React, { use, useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import RightAside from "../Components/RightAside/RightAside";
import { useLoaderData, useParams } from "react-router";
import DetailsCard from "../Components/DetailsCard/DetailsCard";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState([]);
  console.log(data, id);

  useEffect(() => {
    const newsDetails = data.filter((news) => news.id == id);
    setNews(newsDetails);
  }, [data, id]);

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="grid grid-cols-12 gap-8 w-11/12 mx-auto">
        <div className="col-span-9">
          <h2 className="font-bold text-xl">Dragon News</h2>
          <div>
            {news.map((el) => (
              <DetailsCard key={el.id} el={el}></DetailsCard>
            ))}
          </div>
        </div>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
