import { getFeaturedEvents } from "../api-utils";
import EventList from "../components/events/event-list";

function HomePage({ events }) {
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  const data = await getFeaturedEvents();
  return {
    props: {
      events: data,
    },
    revalidate: 30,
  };
};

export default HomePage;
