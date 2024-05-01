import React from "react";
import { useEffect, useRef } from "react";

const VideoPlayer = () => {


  return (
    <>
      <iframe
        src="https://res.cloudinary.com/dmdg0lwhz/video/upload/v1714479057/Shopping-capcut_duiptm.mp4"
        width="640"
        height="360"
        style={{height: 'auto', width: '100%', aspectRatio: '640/360', borderRadius: '10px'}}
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      ></iframe>
    </>
  );
};

export default VideoPlayer;
