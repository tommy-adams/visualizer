import React, { useState } from "react";
import Nav from "../components/Nav";
import PlayButton from "../components/PlayButton";
import SideNav from "../components/SideNav";

const Home = () => {
  const [selectedGroup, setSelectedGroup] = useState("sorting");
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSubGroup, setSelectedSubGroup] = useState("merge");

  return (
    <>
      <Nav selected={selectedGroup} setSelected={setSelectedGroup} />
      <SideNav selectedGroup={selectedGroup} selected={selectedSubGroup} setSelected={setSelectedSubGroup} setPlaying={setIsPlaying} />
      <PlayButton playState={isPlaying} setPlayState={setIsPlaying} />
    </>
  );
};

export default Home;