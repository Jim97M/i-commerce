import React, {useState, useEffect} from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { userRequest } from "../../requestMethod"; 
export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
   const getUsers = async() => {
     try{
      const res = await userRequest.get("/user");
      setUsers(res.data);
     } catch(err){
       res.status(500).data(err);
     }
    
   }

   getUsers();
  }, [])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
       { users.map((user) => (
             <li className="widgetSmListItem" key={user._id} >
             <img
               src={users.img || "https://res.cloudinary.com/dqpsoxe38/image/upload/v1619507891/EBC/profile3_nonqn4.png"}
               alt=""
               className="widgetSmImg"
             />
             <div className="widgetSmUser">
               <span className="widgetSmUsername">{user.username}</span>
             </div>
             <button className="widgetSmButton">
               <Visibility className="widgetSmIcon" />
               Display
             </button>
           </li>
       ))}
     
 
      </ul>
    </div>
  );
}