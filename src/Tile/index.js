import React from "react";

const Tile = ({ index, setPinned, pinned }) => {
  return (
    <div
      id={`tile${index}`}
      className={`tile${index} ${pinned === index ? "main" : pinned > index ? "before-main" : "after-main"}`}
      style={{ border: "1px solid black", borderRadius: "10px" }}>
      <div>Tile&nbsp;{index}</div>
      <div style={{ cursor: "pointer" }} onClick={() => setPinned(index)}>
        {pinned === index ? "Pinned" : "Pin"}
      </div>
    </div>
  );
};

export default Tile;
