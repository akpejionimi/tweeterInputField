import React, { Component } from "react";
import Tweetinput from './Tweetinput'

class BorderLimit extends Component {
  state = {
    contentText: "",
    Tweets: 0
  };
  
  render() {
    let  boxLimit;
    let completionperc = this.state.Tweets * (100 / 10);
    let Bopacity = completionperc / 100;
    boxLimit = {
      border: `3px solid rgba(255,0,0, ${Bopacity})`,
      transition: "all .5s"
    };

    let inputStyle;
    if (this.state.Tweets > 10) {
      inputStyle = {
        color: "red"
      };
    }
    return (
        <Tweetinput boxLimit={this.boxLimit}
        inputStyle={this.inputStyle}
        Tweets={this.state.Tweets}
        contentText={this.state.contentText} />
        
    );
  }
}
export default BorderLimit;
