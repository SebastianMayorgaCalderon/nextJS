import React from "react";
import { withRouter } from "next/router";

import { getEventById } from "../../../dummy-data";
import EventSummary from "../../components/event-details/event-summary";
import EventLogistics from "../../components/event-details/event-logistics";
import EventContent from "../../components/event-details/event-content";

const EventDetails = ({ router }) => {
  const {
    query: { event_id },
  } = router;
  const eventDetails = getEventById(event_id);
  if (!eventDetails) return <p>No event found</p>;
  const { description, title, image, location, date } = eventDetails;
  debugger;
  return (
    <>
      <EventSummary title={title} />
      <EventLogistics
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
};

export default withRouter(EventDetails);
