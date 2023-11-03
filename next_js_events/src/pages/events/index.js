import React from "react";
import { withRouter } from "next/router";
import { getFeaturedEvents } from "../../../dummy-data";
import EventListComponent from "../../components/events/EventList";

const EventList = ({ ...args }) => {
  const featureEvents = getFeaturedEvents();

  debugger;
  return (
    <div>
      <h1>Event List</h1>
      <EventListComponent items={featureEvents} />
    </div>
  );
};

export default withRouter(EventList);
