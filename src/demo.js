import React, { Component } from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Lottie from 'react-lottie';
import bgsvg from "./background.svg";
import animationData from './lottieflying.json';


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid meet"
  }
};

export const Example = () => {
  return (
    <TransformWrapper
      initialScale={1}
      initialPositionX={0}
      initialPositionY={0}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <React.Fragment>
          <div className="tools">
            <button onClick={() => zoomIn()}>+</button>
            <button onClick={() => zoomOut()}>-</button>
            <button onClick={() => resetTransform()}>x</button>
          </div>
          <TransformComponent contentStyle={{"backgroundColor": "white"}}>
            <div style={{ position: "relative", width: "1000px", height: "1000px" }}>
              <img src={bgsvg} alt="test" style={{ width: "100%", height: "100%", backgroundColor: "blue" }} />
              <Lottie options={defaultOptions} width={100} style={{ position: "absolute", top: "-200px", left: "700px"}} />
              <Lottie options={defaultOptions} width={100} style={{ position: "absolute", top: "200px", left: "500px"}} />
              <Lottie options={defaultOptions} width={100} style={{ position: "absolute", top: "-100px", left: "200px"}} />

            </div>
          </TransformComponent>
        </React.Fragment>
      )}
    </TransformWrapper>
  );
};