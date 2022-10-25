export const getAllClients = async () => {
  const response = await fetch(`http://localhost:3000/clients`);
  if (!response.ok) {
    return [];
  }
  const data = await response.json();
  return data;
};

export const getSingleClient = async (clientId) => {
  const response = await fetch(`http://localhost:3000/clients/${clientId}`);
  if (!response.ok) {
    return {};
  }
  const data = await response.json();
  return data;
};

export const getEditSingleClient = async (clientId, values) => {
  const response = await fetch(`http://localhost:3000/clients/${clientId}`, {
    method: "PUT",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(values),
  });
  if (!response.ok) {
    return {};
  }
  const data = await response.json();
  return data;
};

export const addClient = async (values) => {
  const response = await fetch(`http://localhost:3000/clients`, {
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

export const handleDelete = (id) => {
  fetch(`http://localhost:3000/clients/${id}`, {
    method: "DELETE",
  });
};
