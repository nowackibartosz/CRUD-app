import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const getSingleClient = async (clientId) => {
  const response = await fetch(`http://localhost:3000/clients/${clientId}`);
  if(!response.ok){
    return {}
  }
  const data=await response.json();
  return data;
};

const ClientsId = ({ clientData }) => {
  const { id } = useParams();

  const [data,setData]=useState({})

  useEffect(()=>{
    getSingleClient(id).then(data=>{
      setData(data)
    })
  },[])

  const handleDelete=(id)=>{
    fetch(`http://localhost:3000/clients/${id}`,{
      method: "DELETE"
    })
  }

  return (
    <div className="detailsID">
      <p>{data.name}</p>
      <p>{data.surname}</p>
      <p>{data.street}</p>
      <p>{data.code}</p>
      <p>{data.city}</p>
      <p>{data.region}</p>
      <p>{data.imageURL}</p>
      <p>{data.number}</p>

      <button
        onClick={() => handleDelete(data.id)}
      >
        USUŃ
      </button>

      <Link to={`/clients/${id}/edit`}>
        {" "}
        <button>EDIT</button>
      </Link>
    </div>
  );
};

export default ClientsId;
