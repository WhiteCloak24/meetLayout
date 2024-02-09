import { useState } from "react";
import Tile from "./Tile";
import "./App.scss";
function App() {
  const [number, setNumber] = useState(1);
  const [showGrid, setShowGrid] = useState(true);
  const incr = () => {
    setNumber((prev) => prev + 1);
  };
  const decr = () => {
    if (number === 1) return;
    setNumber((prev) => prev - 1);
  };

  const toggleView = () => {
    setShowGrid((prev) => !prev);
  };
  return (
    <div
      className="container"
      data-count={number}
      style={{ height: "100%", width: "100%", background: "grey", padding: "20px", position: "relative" }}>
      <div style={{ position: "absolute", display: "flex", flexDirection: "row", top: "0px", right: "50px" }}>
        <button onClick={incr}>Inc</button>
        <button onClick={decr}>Dec</button>
        <button onClick={toggleView}>Change view</button>
      </div>
      <div className={showGrid ? "grid" : "stage"}>
        <div className={`tiles${number}`}>
          {Array.from({ length: number }, (_, i) => i + 1).map((_, index) => {
            return <Tile index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
