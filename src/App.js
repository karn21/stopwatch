import React from 'react';
import './App.css';
import Basic from './Basic';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type: 'basic',
      time: '',
      basic_time: [0, 0, 0, 0],
      running: false,
    }
  }

  basicHandler = (event) => {
    var timer = event.target.value;
    var t = this.convertToSec(timer);
    this.setState({
      time: timer,
      basic_time: t,
    })
  }

  convertToSec(time) {
    var sec = time % 60;
    var min, day = 0, hour = 0;
    min = Math.floor(time / 60);
    if (min >= 60) {
      hour = Math.floor(min / 60);
      min = min % 60;
      if (hour >= 24) {
        day = Math.floor(hour / 24);
        hour = hour % 24;
      }
    }
    return [day, hour, min, sec];
  }

  reset = (event) => {
    event.preventDefault();
    clearInterval(this.timerId);
    this.setState({
      time: 0,
      basic_time: [0, 0, 0, 0],
      running: false,
    })
  }

  tick() {
    var t = this.convertToSec(this.state.time - 1)
    if (this.state.time <= 0) {
      this.setState({
        running: false,
      })
      clearInterval(this.timerId);
    } else {
      this.setState({
        time: this.state.time - 1,
        basic_time: t,
      })
    }

  }

  start = (event) => {
    event.preventDefault();
    if (this.state.time !== 0 && !this.state.running) {
      this.setState({
        running: true,
      })
      this.timerId = setInterval(() => this.tick(), 1000);
    }
  }

  pause = (event) => {
    event.preventDefault();
    this.setState({
      running: false,
    })
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <i className="fa fa-hourglass-start" aria-hidden="true"></i>
            &nbsp;
            StopWatch
        </h1>
        </header>
        <Basic basicHandler={this.basicHandler} running={this.state.running} start={this.start}
          pause={this.pause} reset={this.reset} basicTime={this.state.basic_time} time={this.state.time} />
      </div>
    );
  }
}

export default App;
