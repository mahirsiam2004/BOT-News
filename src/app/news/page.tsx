import React from "react";

const Newspage = () => {
  return (
    <div>
      <h1 className="text-2xl">Latest News</h1>
      <div className="flex justify-between">
        <div className="md:w-4/5 h-96 bg-slate-100  flex items-center justify-center">
          all news
        </div>
        <div className="bg-purple-300 h-96 md:w-1/5">sidebar</div>
      </div>
    </div>
  );
};

export default Newspage;
