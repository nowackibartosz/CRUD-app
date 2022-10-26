export const getAllOrders = async () => {
    const response = await fetch(`http://localhost:3000/orders`);
    if (!response.ok) {
      return [];
    }
    const data = await response.json();
    return data;
};

export const getSingleOrder = async (id) => {
    const response = await fetch(`http://localhost:3000/orders/${id}`);
    if (!response.ok) {
      return [];
    }
    const data = await response.json();
    return data;
};

export const addOrder = async (values) => {
    const response = await fetch(`http://localhost:3000/orders`, {
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(values),
    });
    if (!response.ok) {
      return {};
    }
    const data = await response.json();
    return data;
};
  
export const orderById = async (values) => {
  const response = await fetch(`http://localhost:3000/orders`, {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(values),
  });
  if (!response.ok) {
    return {};
  }
  const data = await response.json();
  return data;
};