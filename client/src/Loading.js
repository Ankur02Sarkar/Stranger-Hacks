import React from "react";
import "./loading.css"
import Gif from "./load.gif"
function Loading() {
  return (
    <div className="centered">
    <img src="https://s2.gifyu.com/images/load.md.gif" alt="Loading Gif" className="gif" />
    <h1 className="loadHeading">Loading ...</h1>
  </div>
  );
}

export default Loading;
