import React from "react";
import { withRouter } from "next/router";
import { getFilteredEvents } from "../../../dummy-data";
import EventList from "../../components/events/EventList";

const EventSlug = ({ router }) => {
  const filterData = router.query.path_data;
  if (!filterData) return <p>loading</p>;

  const filterEvents = getFilteredEvents({
    year: +filterData[0],
    month: +filterData[1],
  });

  return (
    <div>
      {filterEvents && filterEvents.length && (
        <EventList items={filterEvents} />
      )}
      {filterEvents.length === 0 && <p>no reulst bru</p>}
    </div>
  );
};

export default withRouter(EventSlug);
