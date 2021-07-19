import "./App.css";
import React, { useEffect, useState } from "react";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octuber",
  "November",
  "December",
];

const App = () => {
  const [countDown, setCountDown] = useState(null);
  const [datenow, setDatenow] = useState(new Date());
  const [dateFuture, setDateFuture] = useState(
    new Date(
      datenow.getFullYear(),
      datenow.getMonth(),
      datenow.getDate() + 10,
      11,
      30,
      0
    )
  );

  useEffect(() => {
    let now = datenow.getTime();
    let future = dateFuture.getTime();
    let diference = future - now;
    setCountDown(diference);

    setInterval(() => handleCount(), 1000);
  }, []);

  const handleCount = () => {
    setCountDown((prevState) => prevState - 1000);
  };

  const formatCount = () => {
    let time = countDown;
    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours = Math.floor(time / (1000 * 60 * 60) - days * 24);
    let mins = Math.floor(time / (1000 * 60) - hours * 60 - days * 24 * 60);
    let sec = Math.floor(
      time / 1000 - mins * 60 - hours * 60 * 60 - days * 24 * 60 * 60
    );
    console.log(days);
    days = days > 9 ? days : "0" + days;
    hours = hours > 9 ? hours : "0" + hours;
    mins = mins > 9 ? mins : "0" + mins;
    sec = sec > 9 ? sec : "0" + sec;

    return [days, hours, mins, sec];
  };

  return (
    <div className="container">
      <div className="content">
        <h3 className="title">old iphone giveaway</h3>
        <h4 class="giveaway">
          {`giveaway ends on ${
            DAYS[dateFuture.getDay()] +
            ", " +
            dateFuture.getDate() +
            " " +
            MONTH[dateFuture.getMonth()] +
            " " +
            dateFuture.getFullYear() +
            " " +
            dateFuture.getHours() +
            ":" +
            dateFuture.getMinutes()
          } am`}
        </h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit molestiae cum libero atque ut voluptate qui consectetur
          aliquid incidunt voluptatem quos, dolore, non commodi quaerat aliquam
          eligendi, quisquam totam blanditiis.
        </p>
        <div className="time">
          <div>
            <h2>{formatCount()[0]}</h2>
            <h5>days</h5>
          </div>
          <div>
            <h2>{formatCount()[1]}</h2>
            <h5>hours</h5>
          </div>
          <div>
            <h2>{formatCount()[2]}</h2>
            <h5>mins</h5>
          </div>
          <div>
            <h2>{formatCount()[3]}</h2>
            <h5>secs</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
