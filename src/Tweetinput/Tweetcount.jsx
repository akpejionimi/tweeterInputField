import React, { Component } from "react";
import Tweetinput from './Tweetinput.jsx';
import data from '../data';

class Tweeter extends Component {
  state = {
    contentText: "",
    Tweets: 0,
    data: data,
    details: data[1],
    maxText: 240,
    borderColor: "red"
  };

  
  TweetCount = () => {
    let Tweets = this.state.contentText;
    let inputLen = Tweets.length;
    this.setState({
      Tweets: inputLen
    });
  };

  submittedClick = e => {
    console.log("submit");
  };
  handleChange = e => {
    this.setState(
      {
        contentText: e.target.value
      },
      () => this.TweetCount()
    );
    console.log(this.state.contentText);
  };
  render() {
    return (
      <>
      <Tweetinput Tweets={this.state.Tweets}
      contentText={this.state.contentText}
      handleChange={this.handleChange}
      submittedClick={this.submittedClick}
      Tweetcount={this.TweetCount}
      data={this.state.data}
      details={this.state.details}
      maxText={this.state.maxText}
      bColor={this.state.borderColor}/>
      
     
     </>
    );
  }
}
export default Tweeter;
