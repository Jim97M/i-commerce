import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featureInfo/FeaturedInfo";
import "./Home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm.js";
import WidgetLg from "../../components/widgetLg/widgetLg.js";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
  }