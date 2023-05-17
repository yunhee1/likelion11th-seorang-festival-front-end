import React from "react";
import BoothListItem from "./BoothListItem";

const BoothList = ({ booths, onToggle }) => {
  return (
    <div>
      {booths.map((booth) => (
        <BoothListItem booth={booth} key={booth.id} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default BoothList;
