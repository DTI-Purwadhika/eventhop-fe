export const register = async (
  name: string,
  email: string,
  password: string,
  referralCode?: string
) => {
  try {
    const authData = process.env.NEXT_PUBLIC_EVENTH0P_API;
    const response = await fetch(`${authData}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        referralCode: referralCode,
      }),
    }).then((res) => res.json());

    const data = await response;
    return data;
  } catch (error) {
    console.error("Can't catch data:", error);
  }
};
