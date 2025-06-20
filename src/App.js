import React, { useState, useRef, useEffect } from "react";
import stations from "./data/stations";

function App() {
  const [current, setCurrent] = useState(null);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (current !== null && audioRef.current) {
      audioRef.current.src = stations[current].streamUrl;
      if (playing) {
        audioRef.current.play();
      }
    }
  }, [current]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const selectStation = (index) => {
    if (index === current) {
      togglePlay();
      return;
    }
    setCurrent(index);
    setPlaying(true);
  };

  const changeVolume = (e) => {
    if (audioRef.current) {
      audioRef.current.volume = e.target.value;
    }
  };

  return (
    <div className="App">
      <h1>Radio Pakistan</h1>
      <ul>
        {stations.map((s, i) => (
          <li key={i} className="station">
            {s.name}
            <button onClick={() => selectStation(i)}>
              {current === i && playing ? "Pause" : "Play"}
            </button>
          </li>
        ))}
      </ul>
      <audio ref={audioRef} style={{ display: "none" }} />
      {current !== null && (
        <div>
          <p>Now playing: {stations[current].name}</p>
          <button onClick={togglePlay}>{playing ? "Pause" : "Play"}</button>
          <input
            className="volume"
            type="range"
            min="0"
            max="1"
            step="0.01"
            defaultValue="1"
            onChange={changeVolume}
          />
        </div>
      )}
    </div>
  );
}

export default App;
