import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date(),
        }

        this.tick = this.tick.bind(this);

    }

    componentDidMount() {
        const timing = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(timing); 
    }

    render() {
        return (
            <div className="clock-container">
                <h1 className="clock-title"> Clock</h1>
              <div className="time-container">

                <div>
                <h2 className="time-title"> Time: </h2> 
                <h2 className="clock-ticking-time"> {this.state.time.toLocaleTimeString()} EST</h2> 
                </div>

                <div>
                <h2 className="date-title"> Date: </h2> 
                <h2 className="clock-date"> {this.state.time.toDateString()}</h2>
                </div>

              </div>
            </div>
        )
    }

    tick() {
        this.setState({
            time: new Date()
        })  
    }
}

export default Clock;



// _tick() {
//     // 1. Increment the time by one second.
//     this._incrementSeconds();

//     // 2. Call printTime.
//     this.printTime();
// }

// _incrementSeconds() {
//     // 1. Increment the time by one second.
//     this.seconds += 1;
//     if (this.seconds === 60) {
//         this.seconds = 0;
//         this._incrementMinutes();
//     }
// }

// _incrementMinutes() {
//     this.minutes += 1;
//     if (this.minutes === 60) {
//         this.minutes = 0;
//         this._incrementHours();
//     }
// }

// _incrementHours() {
//     this.hours = (this.hours + 1) % 24;
// }
// }
