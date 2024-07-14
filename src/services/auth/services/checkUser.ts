import { dummyUser } from "./_dummyData";
// import { restService } from "@/services/restService";

const checkUser = async (userEmail: string) => {
  // dummy code
  const response = dummyUser.find((user: any) => user.email === userEmail);
  // const response = await restService({"api/auth/check", { email: userEmail}});

  return response;
};

export default checkUser;
