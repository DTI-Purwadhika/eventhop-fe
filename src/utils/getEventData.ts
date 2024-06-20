const getEventData = async () => {
  const eventData = process.env.NEXT_PUBLIC_EVENT_API;
  try {
    const response = await fetch(`${eventData}/get-events`);
    if (!response.ok) {
      throw new Error("Failed to fetch event data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Can't catch event data:", error);
  }
};

export default getEventData;
