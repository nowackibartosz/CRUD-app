export const getAllOrders = async () => {
    const response = await fetch(`http://localhost:3000/orders`);
    if (!response.ok) {
      return [];
    }
    const data = await response.json();
    return data;
};