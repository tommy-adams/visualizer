import React, { useEffect, useState } from "react";

const SideNav = ({ selectedGroup, selected, setSelected, setPlaying }) => {
  const sortAlgos = [
    { id: "merge", name: "Merge Sort" },
    { id: "bubble", name: "Bubble Sort" }
  ];
  const searchAlgos = [
    { id: "bfs", name: "Breadth First Search" }
  ];
  const [algoArray, setAlgoArray] = useState(sortAlgos);
  console.log(algoArray);

  useEffect(() => {
    setPlaying(false);
    if (selectedGroup === "sorting") {
      setSelected("merge");
      setAlgoArray(sortAlgos);
    } else if (selectedGroup === "searching") {
      setSelected("bfs");
      setAlgoArray(searchAlgos);
    } else {
      setSelected("");
      setAlgoArray([]);
    }
  }, [selectedGroup]);

  return (
    <div className="fixed w-1/4 h-screen bg-purple-400 py-16 px-8">
      {algoArray.map(item => 
        <div
          key={item.id} className="text-white pb-4 cursor-pointer"
          onClick={() => {
            setSelected(item.id);
            setPlaying(false);
          }}
        >
          <p className={`${selected === item.id ? "font-bold" : ""} text-3xl pb-2`}>{item.name}</p>
          <hr />
        </div>
      )}
    </div>
  );
};

export default SideNav;