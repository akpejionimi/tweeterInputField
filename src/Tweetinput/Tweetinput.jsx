import React from "react";
import './Tweetinput.css'

const Tweetinput = (props) =>{
    let boxLimit;
    let completionperc = props.Tweets * (100 / 240);
    let Bopacity = completionperc / 100;
    boxLimit = {
      border: `3px solid rgba(255,0,0, ${Bopacity})`,
      transition: "all .5s"
    };

    let inputStyle;
    if (props.Tweets > 240) {
      inputStyle = {
        color: "red"
      };
    }
    
    return (
      <>
        <textarea
          style={boxLimit}
          onChange={props.handleChange}
          name=""
          id=""
          cols="30"
          rows="6" placeholder="What's happening?"
        />
        <button
          onClick={props.submittedClick}
          disabled={props.Tweets > 240}
        >
          tweet
        </button>
        <h2>
          <span style={inputStyle}>{props.Tweets}</span>
          /240
        </h2>
        <div className="profDisplay">
                <div className="prof">
                    <h1>{props.details.name}</h1>
                    <h2>{props.details.role}</h2>
                    <p>{props.details.Testimony}</p>
                </div>
                   <div className="profilepix">
                   <img alt="phone" src={props.details.url} />
                   </div>
                </div>
            
      </>
    );
  
}
export default Tweetinput;
