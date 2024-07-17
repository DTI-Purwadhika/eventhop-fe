const url = process.env.NEXT_PUBLIC_EVENTHOP_API;

const restService = async (
  endpoint: string,
  method: string = "GET",
  data?: any
) => {
  try {
    const response = await fetch(`${url}/${endpoint}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Failed to ${method} ${endpoint}`);
    }
    const result = await response.json();
    const totalData = response.headers.get("X-Total-Count");
    return { result, totalData };
  } catch (error) {
    console.error(`Can't catch ${endpoint}:`, error);
  }
};

export const restById = async (
  id: string,
  method: "GET" | "PUT" | "DELETE" = "GET",
  from: string,
  data?: any
) => {
  console.log(`${from}/${id}`);
  const response = await restService(`${from}/${id}`, method, data);
  return response?.result;
};

export const restPost = async (from: string, data: any) => {
  const response = await restService(`${from}`, "POST", data);
  console.log(response);
  return response?.result;
};

export default restService;
