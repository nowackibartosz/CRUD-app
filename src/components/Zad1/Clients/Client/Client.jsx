import React from "react";

const Client = ({ name, surname, city, number, imageURL }) => {
    return (
      
        
    <tr>
      <th>{name}</th>
      <th>{surname}</th>
      <th>{city}</th>
      <th>{number}</th>
      <th>{imageURL}</th>
    </tr>
  );
};

export default Client;

// {clientData.map((el) => (
//     <tr>
//       <Link to="/clients/${el.name}">
//         <th>{el.name}</th>
//         <th>{el.surname}</th>
//         <th>{el.city}</th>
//         <th>{el.number}</th>
//         <th>{el.imageURL}</th>
//       </Link>
//     </tr>
//   ))}
