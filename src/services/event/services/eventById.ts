import { restService } from "@/services/restService";

const eventById = async (
  id: string,
  method: "GET" | "PUT" | "DELETE" = "GET",
  data?: any
) => {
  const response = await restService(`get-event/${id}`, method, data);
  return response?.result;
};

export default eventById;
