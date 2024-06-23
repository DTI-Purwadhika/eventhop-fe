import { GetAllEventsParams } from "@/types";

const getEventData = async ({
  filter,
  category,
  limit = 6,
  page = 1,
}: GetAllEventsParams) => {
  const eventData = process.env.NEXT_PUBLIC_EVENT_API;
  const fetchUrl = `${eventData}/get-events?_limit=${limit}&_page=${page}`;

  console.log(fetchUrl);
  try {
    const response = await fetch(fetchUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch event data");
    }
    const data = await response.json();
    const totalPages = response.headers.get("X-Total-Count");
    console.log(response.headers.get("X-Total-Count"));
    return { data, totalPages };
  } catch (error) {
    console.error("Can't catch event data:", error);
  }
};

export default getEventData;
