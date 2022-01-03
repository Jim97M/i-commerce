import React, {useState, useEffect, useMemo} from 'react';
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featureInfo/FeaturedInfo";
import "./Home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm.js";
import WidgetLg from "../../components/widgetLg/widgetLg.js";
import { userRequest } from '../../requestMethod';

export default function Home() {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(() => [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jly',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
  ],[]);

  useEffect(() => {
     const getStats = async () => {
      try{
          const res = await userRequest.get('/user/stats');
          res.data.map((item) => 
            setUserStats((prev) => [
              ...prev,
              {name: MONTHS[item._id - 1], "Active User": item.total },
            ])
          );
     } catch(err){
      res.status(500).json(err);
      }
     };
     getStats();
  }, [MONTHS]);


  return (
      <div className="homeWidgets">
        <WidgetSm/>
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="Active User"/>
        <WidgetLg/>
      </div>
    </div>
  );
  }