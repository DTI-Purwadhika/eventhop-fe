import { restService } from "@/services/restService";
import { eventType } from "@/shares/types/event";

const postEvent = async (id: string, data: eventType) => {
  const response = await restService(`get-event/${id}`, "POST", data);
  return response?.result;
};

export default postEvent;
