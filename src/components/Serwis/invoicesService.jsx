export const getAllInvoices = async () => {
  const response = await fetch(`http://localhost:3000/faktury`);
  if (!response.ok) {
    return [];
  }
  const data = await response.json();
  return data;
};
