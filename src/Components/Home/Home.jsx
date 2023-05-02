import React from "react";

function Home() {
  const cloudLayerLeftStyle = {
    position: "fixed",
    left: "0",
    top: "0",
    zIndex: "-1",
    animation: "slide-left 30s linear infinite",
  };

  const cloudLayerRightStyle = {
    position: "fixed",
    right: "0",
    top: "0",
    zIndex: "-1",
    animation: "slide-right 40s linear infinite",
  };

  const clouds = Array.from({ length: 40 }, (_, i) => {
    const xPos = Math.random() * window.innerWidth;
    const yPos = Math.random() * window.innerHeight;
    const minSize = 1000;
    const maxSize = 1250;
    const size = Math.floor(
      Math.random() * (maxSize - minSize + 1) + minSize
    );
    const aspectRatio = 0.75;

    const width = Math.floor(size * aspectRatio);
    const height = size;

    const slideCloudsKeyframes = `@keyframes slide-clouds-${i} {
      0% { left: ${xPos - window.innerWidth}px; }
      100% { left: ${xPos + window.innerWidth}px; }
    }`;

    return (
      <>
        <style>{slideCloudsKeyframes}</style>
        <img
          key={i}
          style={{
            position: "absolute",
            left: `${xPos}px`,
            top: `${yPos}px`,
            width: `${width}px`,
            height: `${height}px`,
            animation: `slide-clouds-${i} 60s linear infinite`,
          }}
          src="./nube1.png"
          alt="cloud"
        />
      </>
    );
  });

  return (
    <>
      <div style={cloudLayerLeftStyle}>{clouds}</div>
      <div style={cloudLayerRightStyle}>{clouds}</div>
    </>
  );
}

export default Home;
