import React from "react";
import { BsPlayFill, BsPause } from "react-icons/bs";

const PlayButton = ({ playState, setPlayState }) => {
  return (
    <div
      className="rounded-full bg-purple-400 w-12 h-12 absolute z-50 bottom-12 right-12 flex items-center justify-center cursor-pointer"
      onClick={() => setPlayState(!playState)}
    >
      {playState
        ? <BsPause className="text-white text-4xl"/>
        : <BsPlayFill className="text-white text-4xl"/>
      }
    </div>
  );
};

export default PlayButton;