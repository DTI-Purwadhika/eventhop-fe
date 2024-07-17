import restService from "../restService";

export const checkPromoCode = async (promoCode: string) => {
  console.log("promoCode");
  console.log(promoCode);
  const fetchUrl = `promotions?voucher_code_like=${promoCode}`;
  const response = await restService(fetchUrl);
  const promotion = response?.result?.[0];
  console.log(promotion);

  if (promotion && promotion.remaining_quota > 0) {
    return response?.result?.[0];
  } else {
    return false;
  }
};
