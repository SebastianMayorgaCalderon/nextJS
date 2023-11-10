import React from "react";
import EventItem from "./EventItem";
import classes from "./event-list.module.css";

const EventList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <li>
          <EventItem {...event} />
        </li>
      ))}
    </ul>
  );
};

export default EventList;
