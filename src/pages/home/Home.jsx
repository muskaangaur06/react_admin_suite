import Charts from "../../components/charts/Charts"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import {userData} from "../../sampleData"
import WidgetSmall from "../../components/widgetSmall/WidgetSmall"
import WidgetBig from "../../components/widgetBig/WidgetBig"

export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo />
        <Charts data={userData} title="User Analytics" grid dataKey="Active Users"/>
        <div className="homeWidgets">
          <WidgetSmall/>
          <WidgetBig />
        </div>
    </div>
  )
}
