import React, { Component } from 'react';
import { Star } from '../Star/Star';

interface AppProps {
  starCount: number;
}
interface AppState {
  rate: number;
  potentialRate?: number;
}

export class Rating extends Component<AppProps, AppState> {

  style = {
    display: 'inline-block',
    margin: "-2px 0 0  10px",
    border: "solid 1px gray",
    borderRadius: "50%",
    width: "18px",
    height: "18px",
    textAlign: "center"
  }

  constructor(props) {
    super(props);
    this.state = {
      rate: 0,
      potentialRate: 0
    }
  }
  static defaultProps = { starCount: 5 }
  setRate(rate) {
    if (!this.state.rate) {
      this.setState({ rate: rate });
    }
  }

  readyToRate(potentialRate = 0) {
    if (!this.state.rate) {
      this.setState({ potentialRate });
    }
  }

  reset() {
    this.setState({ rate: 0 });
  }

  render() {
    let rate = this.state.rate;

    return (
      <div
        className="ratingControl"
        onMouseLeave={() => { this.readyToRate() }}>
        {
          Array(this.props.starCount).fill(0).map((m, x) => {
            return (
              <Star
                potentialRate={this.state.potentialRate}
                readyToRate={this.readyToRate.bind(this)}
                setRate={this.setRate.bind(this)}
                selected={rate > x}
                val={x + 1}
              />
            );
          })
        }
        <span style={this.style}>{this.state.rate} </span>
        <span
          onClick={() => { this.reset() }}
          style={{ cursor: "pointer", display: (rate > 0) ? "block" : "none" }}>&#x27f2;</span>
      </div>
    );
  }
}