import restService from "@/services/restService";
import { SearchType } from "@/shares/types/search";

const getEvents = async ({
  filter,
  category,
  limit = 100,
  page = 1,
  sort = "nameAz",
  status = "all",
}: SearchType) => {
  let fetchUrl = `events?_limit=${limit}&_page=${page}`;

  if (category && category !== "all") {
    fetchUrl += `&category=${category}`;
  }

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
    case "high_price":
      fetchUrl += `&_sort=price&_order=desc`;
      break;
    case "low_price":
      fetchUrl += `&_sort=price&_order=asc`;
      break;
  }

  switch (status) {
    case "active":
      fetchUrl += `&start_date_gte=${new Date().toISOString()}`;
      break;
    case "past":
      fetchUrl += `&start_date_lt=${new Date().toISOString()}`;
      break;
    default:
      break;
  }
  console.log(fetchUrl);
  const response = await restService(fetchUrl);

  return { data: response?.result, totalPages: response?.totalData };
};

export default getEvents;
