import restService from "../restService";

const isFirstTime = async (userId: string) => {
  const fetchUrl = `ticket_purchases?user_id=${userId}`;
  const response = await restService(fetchUrl);
  const firstTime = Number(response?.totalData) == 0;
  return firstTime;
};
export default isFirstTime;
