import React, { useEffect, useRef } from "react";

const Tile = ({ index, setPinned, pinned }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div
      id={`tile${index}`}
      className={`tile${index} ${pinned === index ? "main" : pinned > index ? "before-main" : "after-main"}`}
      style={{ border: "1px solid red" }}>
      <div>Tile&nbsp;{index}</div>
      <div style={{ cursor: "pointer" }} onClick={() => setPinned(index)}>
        {pinned === index ? "Pinned" : "Pin"}
      </div>
      <video style={{ width: "100%", height: "100%", objectFit: "contain" }} ref={videoRef} autoPlay />
    </div>
  );
};

export default Tile;
