import React from "react";
import EventItem from "./EventItem";

const EventList = ({ items }) => {
  return (
    <ul>
      {items.map((event) => (
        <li>
          <EventItem {...event} />
        </li>
      ))}
    </ul>
  );
};

export default EventList;
