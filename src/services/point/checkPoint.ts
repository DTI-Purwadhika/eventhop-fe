import { getRest } from "../restService";

export const getTotalPoints = async () => {
  const fetchUrl = `/users/points`;
  const response = await getRest(fetchUrl);
  return response?.totalData;
};
