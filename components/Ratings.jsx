import React, { useState } from "react";
import {
  BsArrowDown,
  BsArrowUp,
  BsHeart,
  BsHeartFill,
  BsStarFill,
  BsStarHalf,
  BsThreeDotsVertical,
} from "react-icons/bs";

const Comments = () => {
  const [showRating, setShowRating] = useState(false);
  const [likeButton, setLikeButton] = useState(false);

  return (
    <>
      <div className="title flex items-center justify-between pb-4">
        <h1 className="text-3xl">Avaliações</h1>
        <button
          onClick={() => setShowRating(!showRating)}
          className="p-2 hover:bg-slate-200 rounded-full hover:shadow transition"
        >
          {showRating ? <BsArrowUp /> : <BsArrowDown />}
        </button>
      </div>
      {showRating && (
        <>
          <div className="bg-slate-100 rounded-lg p-4">
            <div className="top flex items-center justify-between">
              <div className="font-light text-lg flex items-center space-x-4">
                <div className="title">
                  <span className="font-medium">leandrordg</span>
                  <span> - </span>
                  <span className="text-sm">em 10/06/22</span>
                </div>
                <div className="flex items-center text-yellow-400">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setLikeButton(!likeButton)}
                  className="hover:bg-slate-200 rounded-full hover:shadow transition p-2 flex items-center space-x-2"
                >
                  {likeButton ? (
                    <BsHeartFill className="text-red-500" />
                  ) : (
                    <BsHeart className="text-gray-500" />
                  )}
                </button>
                <button className="p-2 hover:bg-slate-200 rounded-full hover:shadow transition">
                  <BsThreeDotsVertical />
                </button>
              </div>
            </div>
            <div className="my-2">
              <p className="text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus perspiciatis eius harum hic blanditiis ducimus illo
                culpa est illum quia?
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Comments;
