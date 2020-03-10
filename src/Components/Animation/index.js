import React from 'react';
import ReactBodymovin from 'react-bodymovin';

const Animation = props => {
    const bodymovinOptions = {
      loop: true,
      autoplay: true,
      prerender: true,
      animationData: props.animation
    }
   
    return (
    <div
    style={{
        position: "relative",
        height: "100vh"
    }}>

        <div style={{
            maxWidth:"100px",   
            margin: "0",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }}>
            <ReactBodymovin options={bodymovinOptions} />
        </div>
    </div>
    )
  }
   
  export default Animation