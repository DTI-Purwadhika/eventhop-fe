import { GetAllEventsParams } from "@/types";

const getEventData = async ({
  filter = "all",
  category = "all",
  limit = 8,
  page = 1,
}: GetAllEventsParams) => {
  const eventData = process.env.NEXT_PUBLIC_EVENT_API;
  try {
    const response = await fetch(
      `${eventData}/get-events?filter=${filter}&category=${category}&limit=${limit}&page=${page}`
    );
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
