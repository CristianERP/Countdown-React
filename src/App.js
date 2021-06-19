
import './App.css';
import React from 'react';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octuber', 'November', 'December']

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      countDown: null
    }

    this.handleCount = this.handleCount.bind(this);
    this.formatCount = this.formatCount.bind(this);


    this.datenow = new Date()
    this.dateFuture = new Date( this.datenow.getFullYear(), this.datenow.getMonth(), this.datenow.getDate()+ 10, 11,30,0 )

  }
  componentDidMount(){
      let now = this.datenow.getTime()
      let future = this.dateFuture.getTime();
      let diference = future - now;
      this.setState({
        countDown: diference
      })

      setInterval(() => this.handleCount(), 1000)
  }

  handleCount(){
    this.setState({
      countDown: this.state.countDown - 1000
    })
  }

  formatCount(){
    let time = this.state.countDown
    let days = Math.floor(time/(1000 * 60 * 60 * 24));
    let hours = Math.floor(time/(1000 * 60 * 60) - days * 24);
    let mins  = Math.floor(time/(1000 * 60) - hours * 60 - days * 24 * 60)
    let sec = Math.floor(time/(1000) - mins * 60 - hours * 60 * 60 - days * 24 * 60 * 60)

    days = days > 10 ? days: '0' + days;
    hours = hours > 10 ? hours: '0' + hours; 
    mins = mins > 10 ? mins: '0' + mins; 
    sec = sec > 10 ? sec: '0' + sec;  
     
    return [days, hours, mins, sec]
  }

  render(){
    return (
      <div className="container">
        <div className="content">
        <h3 className="title" onClick={this.count}>old iphone giveaway</h3>
          <h4 class="giveaway">
            {`giveaway ends on ${DAYS[this.dateFuture.getDay()] + ', ' + this.dateFuture.getDate() + ' ' + MONTH[this.dateFuture.getMonth()] + ' ' +  this.dateFuture.getFullYear() + ' ' + this.dateFuture.getHours() + ':' + this.dateFuture.getMinutes()} am`}  
          </h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit molestiae cum libero atque ut voluptate qui consectetur
            aliquid incidunt voluptatem quos, dolore, non commodi quaerat aliquam
            eligendi, quisquam totam blanditiis.
          </p>
          <div className="time">
            
            <div>
              <h2>{this.formatCount()[0]}</h2>
              <h5>days</h5>
            </div>
            <div>
              <h2>{this.formatCount()[1]}</h2>
              <h5>hours</h5>
            </div>
            <div>
              <h2>{this.formatCount()[2]}</h2>
              <h5>mins</h5>
            </div>
            <div>
              <h2>{this.formatCount()[3]}</h2>
              <h5>secs</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
