import { Fragment } from "react";
import { useRouter } from "next/router";

import { getEventById } from "../../api-utils";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

function EventDetailPage({ event }) {
  const router = useRouter();

  const eventId = router.query.eventId;

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export const getServerSideProps = async (context) => {
  const id = context.params.eventId;
  const event = await getEventById(id);
  if (!event) {
    return {
      redirect: "/notFound",
      props: {},
    };
  }
  return {
    props: {
      event: event,
    },
  };
};

export default EventDetailPage;
