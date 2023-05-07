import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

const Banner = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <div className='banner-bg'>
      <h1>iPhone 14 Pro Max</h1>
      <h2>Pro.Beyond.</h2>
      <Link to="/Service">learn more <i class="fa-solid fa-greater-than"></i></Link>
      <Link to="/Products">shop now <i class="fa-solid fa-greater-than"></i></Link>
      <video
        playsInline
        loop
        muted
        autoplay
        src="https://www.apple.com/105/media/us/iphone-14-pro/2023/b094f6e4-dcdb-494f-bd72-45d659126dcd/anim/hero/large.mp4"
        ref={videoEl}
      >
      </video>
    </div >
  )
}

export default Banner
