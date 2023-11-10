import React from "react";
import { withRouter } from "next/router";
import { getAllEvents } from "../../../dummy-data";
import EventListComponent from "../../components/events/EventList";
import EventSearch from "../../components/events/event-search";

const EventList = ({ router }) => {
  const featureEvents = getAllEvents();
  const searchEventHandler = (year, month) => {
    const path = `/events/${year}/${month}`;
    router.push(path);
  };
  return (
    <>
      <EventSearch onSearch={searchEventHandler} />
      <EventListComponent items={featureEvents} />
    </>
  );
};

export default withRouter(EventList);
