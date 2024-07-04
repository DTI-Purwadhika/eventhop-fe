const getCategories = async () => {
  const eventData = process.env.NEXT_PUBLIC_EVENT_API;
  try {
    const response = await fetch(`${eventData}/categories`);
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Can't catch categories:", error);
  }
};

export default getCategories;
