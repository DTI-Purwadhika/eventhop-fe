import { restService } from "@/services/restService";

const getCategories = async () => {
  const response = await restService(`categories`);
  return response?.result;
};

export default getCategories;
