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
///?????????????????????///
export const editSingleClient = async (clientId, values) => {
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
/////////????????????????/////////////
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


// {
//   "clients": [
//     {
//       "name": "Bart",
//       "surname": "Nowacki",
//       "street": "langiewicza",
//       "code": "45-988",
//       "city": "Wroclaw",
//       "region": "Wroclawski",
//       "imageURL": "imageimage",
//       "number": "8888",
//       "id": 1
//     },
//     {
//       "name": "Niemasz",
//       "surname": "Niemasz",
//       "street": "Wieluńska",
//       "code": "66-988",
//       "city": "Wieluń",
//       "region": "chybatak",
//       "imageURL": "imageimage",
//       "number": "85567888",
//       "id": 2
//     },
//     {
//       "name": "Bogdan",
//       "surname": "Gurby",
//       "street": "Legnicka",
//       "code": "51-107",
//       "city": "Wrocław",
//       "region": "dolnośląskie",
//       "imageURL": "zdolnyslask.pl",
//       "number": "788366088",
//       "id": 3
//     },
//     {
//       "name": "Adam",
//       "surname": "Jochemczyk",
//       "street": "Leśna",
//       "code": "51-600",
//       "city": "Dziwnów",
//       "region": "morskie",
//       "imageURL": "wodawoda",
//       "number": "123456",
//       "id": 4
//     },
//     {
//       "name": "AJam",
//       "surname": "Pol",
//       "street": "Lenokna",
//       "code": "51-800",
//       "city": "Dzwonnice",
//       "region": "wlkp",
//       "imageURL": "wodawoda",
//       "number": "123456",
//       "id": 5
//     }
//   ],
//   "orders": [
//     {
//       "tele": "85567888",
//       "body": "trawa",
//       "description": "koszenie trawy",
//       "id": 1
//     },
//     {
//       "tele": "8888",
//       "body": "beton",
//       "description": "4kg beton",
//       "id": 2
//     },
//     {
//       "tele": "788366088",
//       "body": "pizza",
//       "description": "na grubym",
//       "id": 3
//     },
//     {
//       "tele": "788366088",
//       "body": "makaron",
//       "description": "dużo makaronu",
//       "id": 4
//     },
//     {
//       "tele": "111222333",
//       "body": "tona pisaku",
//       "description": "iarnisty",
//       "id": 5
//     }
//   ],
//   "faktury": [
//     {
//       "id": 1,
//       "invoiceName": "fakturka1",
//       "invoiceCost": "150zł"
//     },
//     {
//       "id": 2,
//       "invoiceName": "fakturka2",
//       "invoiceCost": "1150zł"
//     },
//     {
//       "id": 3,
//       "invoiceName": "fakturka1",
//       "invoiceCost": "610zł"
//     }
//   ]
// }
