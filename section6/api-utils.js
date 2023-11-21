const API_URL = "https://nextjs-343c0-default-rtdb.firebaseio.com";

const parseResponse = async (apiResult) => {
  const data = await apiResult.json();
  return Object.keys(data).map((key) => ({ id: key, ...data[key] }));
};

export const getAllEvents = async (searchCriteria = ".json") => {
  const apiResult = await fetch(`${API_URL}/events${searchCriteria}`);
  const data = await parseResponse(apiResult);
  return [...data];
};

export const getFeaturedEvents = async () => {
  return await getAllEvents(`.json?orderBy="isFeatured"&equalTo=true`);
};

export const getFilteredEvents = async (dateFilter) => {
  const { year, month } = dateFilter;

  let filteredEvents = await getAllEvents().filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};

export const getEventById = async (id) => {
  const apiResult = await fetch(`${API_URL}/events/${id}.json`);
  const data = await apiResult.json();
  return data ? { ...data, id } : data;
};
