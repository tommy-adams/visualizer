import React from "react";

const Nav = ({ selected, setSelected }) => {
  let selectedStyle = "bg-purple-400 rounded-xl text-white";

  const onSelect = e => {
    setSelected(e.target.id);
  };

  return (
    <div className="w-screen h-16 bg-purple-400 fixed flex items-center justify-center">
      <div className="bg-white px-2 h-8 rounded-2xl flex items-center justify-center space-x-4">
        <p
          id="sorting"
          className={`px-6 cursor-pointer ${selected === "sorting" ? selectedStyle : "text-purple-400"}`}
          onClick={onSelect}
        >
          Sorting
        </p>
        <p
          id="searching"
          className={`px-6 cursor-pointer ${selected === "searching" ? selectedStyle : "text-purple-400"}`}
          onClick={onSelect}
        >
          Searching
        </p>
        <p
          id="other"
          className={`px-6 cursor-pointer ${selected === "other" ? selectedStyle : "text-purple-400"}`}
          onClick={onSelect}
        >
          Other
        </p>
      </div>
    </div>
  );
}

export default Nav;