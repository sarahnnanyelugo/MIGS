import React from "react";

function Events({ day, year, month }) {
  return (
    <div className="events">
      <center>
        <small>{month}</small>
        <h1>{day}</h1>
        <small>{year}</small>
      </center>
    </div>
  );
}

export default Events;
