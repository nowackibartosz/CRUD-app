import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";





const ClientsIdEdit = ({clientData }) => {
  const { id } = useParams();
  console.log(id); // {orderId: '1'}
  return (
    <div>
     
      <form>
        
<input type="text" value={clientData[id].name}/>

        
<button>EDIT</button>
</form>



      
      <Link to={`/clients/${id}`}>
        {" "}
        <button>Cancel</button>
      </Link>
    </div>
  );
};

export default ClientsIdEdit;
