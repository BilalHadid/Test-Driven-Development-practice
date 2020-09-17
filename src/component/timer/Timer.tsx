import React, { Component } from "react";
import "./Timer.css";
import TimerButton from "../TimerButton/TimerButton";

class Timer extends Component {
  constructor(props: any) {
    super(props);

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  state: {
    minutes: number;
    seconds: number;
    isOn: boolean;
    timer: any;
  } = {
    minutes: 25,
    seconds: 0,
    isOn: false,
    timer: "",
  };
  startTimer() {
    if (this.state.isOn === true) {
      return;
    }
    this.state.timer = setInterval(() => {
      const { seconds, minutes } = this.state;
      if (seconds > 0) {
        this.setState(({ seconds }: any) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.state.timer);
        } else {
          this.setState(({ minutes }: any) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
    this.setState({ isOn: true });
  }

  stopTimer() {
    clearInterval(this.state.timer);
    this.setState({ isOn: false });
  }

  resetTimer() {
    this.stopTimer();
    this.setState({
      minutes: 25,
      seconds: 0,
    });
  }

  render = () => {
    const { minutes, seconds } = this.state;

    return (
      <div className="timer-container">
        <div className="time-display">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
        <div className="timer-button-container">
          <button className="start-timer" onClick={this.startTimer}>
            {"start"}
          </button>
          <button className="stop-timer" onClick={this.stopTimer}>
            {"Stop"}
          </button>
          <button className="reset-timer" onClick={this.resetTimer}>
            {"Reset"}
          </button>
        </div>
      </div>
    );
  };
}

export default Timer;
