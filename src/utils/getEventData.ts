import { GetAllEventsParams } from "@/types";

const getEventData = async ({
  filter,
  category,
  limit = 6,
  page = 1,
  sort = "nameAz",
}: GetAllEventsParams) => {
  const eventData = process.env.NEXT_PUBLIC_EVENT_API;
  let fetchUrl = `${eventData}/get-events?_limit=${limit}&_page=${page}`;

  if (category && category !== "all") {
    fetchUrl += `&category=${category}`;
  }

  if (filter && filter !== "") {
    fetchUrl += `&${filter}`;
  }

  switch (sort) {
    case "nameAz":
      fetchUrl += `&_sort=name&_order=asc`;
      break;
    case "nameZa":
      fetchUrl += `&_sort=name&_order=desc`;
      break;
    case "newest":
      fetchUrl += `&_sort=id&_order=desc`;
      break;
    case "oldest":
      fetchUrl += `&_sort=id&_order=asc`;
      break;
    case "early_date":
      fetchUrl += `&_sort=start_date&_order=asc`;
      break;
    case "far_date":
      fetchUrl += `&_sort=start_date&_order=desc`;
      break;
    case "high_price":
      fetchUrl += `&_sort=price&_order=desc`;
      break;
    case "low_price":
      fetchUrl += `&_sort=price&_order=asc`;
      break;
  }

  try {
    const response = await fetch(fetchUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch event data");
    }
    const data = await response.json();
    const totalPages = response.headers.get("X-Total-Count");
    return { data, totalPages };
  } catch (error) {
    console.error("Can't catch event data:", error);
  }
};

export default getEventData;
