const getEventById = async (id: string) => {
  const eventData = process.env.NEXT_PUBLIC_EVENT_API;
  try {
    const response = await fetch(`${eventData}/event-detail`);
    if (!response.ok) {
      throw new Error("Failed to fetch event data");
    }
    const data = await response.json();
    const event = data.data.find((event: any) => event.id === id);
    return event;
  } catch (error) {
    console.error("Can't catch event data:", error);
  }
};

export default getEventById;
