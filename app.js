const stations = [
  { name: 'Radio Pakistan Islamabad', stream: 'https://stream-uk1.radioparadise.com/mp3-192' },
  { name: 'Radio Pakistan Karachi', stream: 'https://stream.live.vc.bbcmedia.co.uk/bbc_world_service' },
];

function App() {
  const [current, setCurrent] = React.useState(null);
  const [playing, setPlaying] = React.useState(false);
  const audioRef = React.useRef(null);

  React.useEffect(() => {
    if (current !== null) {
      audioRef.current.src = stations[current].stream;
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
      // clicking currently playing station toggles playback
      togglePlay();
      return;
    }
    setCurrent(index);
    setPlaying(true);
    // play will happen in useEffect
  };

  const changeVolume = (e) => {
    if (audioRef.current) {
      audioRef.current.volume = e.target.value;
    }
  };

  return (
    <div>
      <h1>Radio Pakistan</h1>
      <ul>
        {stations.map((s, i) => (
          <li key={i} className="station">
            {s.name}
            <button onClick={() => selectStation(i)}>
              {current === i && playing ? 'Pause' : 'Play'}
            </button>
          </li>
        ))}
      </ul>
      <audio ref={audioRef} style={{ display: 'none' }} />
      {current !== null && (
        <div>
          <p>Now playing: {stations[current].name}</p>
          <button onClick={togglePlay}>{playing ? 'Pause' : 'Play'}</button>
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

ReactDOM.render(<App />, document.getElementById('root'));
