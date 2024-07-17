import restService from "@/services/restService";
import { SearchType } from "@/shares/types/search";

const getTickets = async ({
  filter,
  limit = 6,
  page = 1,
  sort = "nameAz",
}: SearchType) => {
  let fetchUrl = `ticket_purchases?_limit=${limit}&_page=${page}`;

  if (filter && filter !== "") {
    fetchUrl += `${filter}`;
  }

  //fetchUrl + `&_sort=${sort.replace("_", "")}&_order=${sort.endsWith("Az") ? "asc" : "desc"}`;

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
  }

  const response = await restService(fetchUrl);

  return { data: response?.result, totalPages: response?.totalData };
};

export const getLastTicketId = async () => {
  const fetchUrl = `ticket_purchases?_limit=1&_sort=id&_order=desc`;
  const response = await restService(fetchUrl);
  const lastTicket = response?.result?.[0];

  return lastTicket?.id;
};

export default getTickets;
