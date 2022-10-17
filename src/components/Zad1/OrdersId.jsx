import React from 'react'
import { useParams } from "react-router-dom";


const OrdersId = () => {
    const param = useParams();
    console.log(param); // {orderId: '1'}
    return <div>OrdersId</div>;
  };


export default OrdersId