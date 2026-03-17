import Charts from "../../components/charts/Charts";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData, revenueData } from "../../sampleData";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetBig from "../../components/widgetBig/WidgetBig";

export default function Home() {
    return (
        <div className="home">
            <div className="homePageTitle">
                <h2>Dashboard Overview</h2>
                <span>Welcome back, Anna 👋</span>
            </div>
            <FeaturedInfo />
            <div className="homeCharts">
                <div className="homeChartMain">
                    <Charts data={userData} title="User Analytics" grid dataKey="Active Users" />
                </div>
                <div className="homeChartSide">
                    <Charts data={revenueData} title="Revenue" grid dataKey="Revenue" />
                </div>
            </div>
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetBig />
            </div>
        </div>
    );
}
