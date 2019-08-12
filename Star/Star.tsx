
import React, { Component } from 'react';
import './star.css';

interface IStarProp {
  selected: boolean,
  val: number,
  setRate: Function,
  readyToRate: Function,
  potentialRate: number
}

export class Star extends Component<IStarProp> {
  static defaultProps = {
    selected: false,
    potentialRate: 0
  }

  updateClassName() {
    let cl =
      this.props.selected ?
        "star selected" :
        (this.props.potentialRate >= this.props.val) ?
          "star potentialSelect" : "star";

    return cl;
  }
  render() {
    return (<span
      onClick={() => this.props.setRate(this.props.val)}
      onMouseEnter={() => this.props.readyToRate(this.props.val)}
      title={this.props.val.toString()}
      className={this.updateClassName()}>&#x2605;</span>)
  }
}