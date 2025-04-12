import { useRef, useState } from "react";

function App() {
  const [isOnPlay, setIsOnPlay] = useState(false);
  let ref = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isOnPlay;
    setIsOnPlay(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current.play();
    }
    else {
      ref.current.pause();
    }
  }
  return (
    <>
      <div>
        <h1>Hello, world</h1>
        <button onClick={handleClick}>{isOnPlay ? "Pause" : "Play"}</button>
        <video
          width="250"
          ref={ref}
          onPlay={() => setIsOnPlay(true)}
          onPause={() => setIsOnPlay(false)}
        >
          <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default App;
