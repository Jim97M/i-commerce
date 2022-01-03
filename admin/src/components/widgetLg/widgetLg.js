import React,{useState, useEffect} from "react";
import "./widgetLg.css";
import { userRequest } from "../../requestMethod";
import {format} from "timeago.js";

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  useEffect(() => {
    const getOrders = async() => {
    try{
      const res = await userRequest.get("/order");
      setOrders(res.data);
    }catch(err){
      res.status(500).json(err);
    }
   };
   getOrders();
  }, [])

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders.map((order) => (
               <tr className="widgetLgTr" key={order._id}>
               <td className="widgetLgUser">
                 <span className="widgetLgName">{order._id}</span>
               </td>
               <td className="widgetLgDate">{format(order.createdAt)}</td>
               <td className="widgetLgAmount">{order.amount}</td>
               <td className="widgetLgStatus">
                 <Button type={order.status} />
               </td>
             </tr>
        ))}
   
     
    
      </table>
    </div>
  );
}

