import Charts from "../../components/charts/Charts";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { trainingHistory, predVsActual, featureImportance, dataDistribution } from "../../sampleData";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetBig from "../../components/widgetBig/WidgetBig";

export default function Home() {
    return (
        <div className="home">
            <div className="homePageTitle">
                <h2>ML Dashboard</h2>
                <span>Model performance & experiment tracking</span>
            </div>
            <FeaturedInfo />
            <div className="homeCharts">
                <div className="homeChartMain">
                    <Charts
                        data={trainingHistory}
                        title="Training Loss Curve"
                        grid
                        dataKey="Train Loss"
                        secondKey="Val Loss"
                        xKey="epoch"
                    />
                </div>
                <div className="homeChartSide">
                    <Charts
                        data={predVsActual}
                        title="Predicted vs Actual"
                        grid
                        dataKey="Actual"
                        secondKey="Predicted"
                        xKey="month"
                    />
                </div>
            </div>
            <div className="homeCharts">
                <div className="homeChartMain">
                    <Charts
                        data={featureImportance}
                        title="Feature Importance (Top 10)"
                        dataKey="importance"
                        xKey="feature"
                        forceBar
                    />
                </div>
                <div className="homeChartSide">
                    <Charts
                        data={dataDistribution}
                        title="Target Distribution"
                        dataKey="count"
                        xKey="bin"
                        forceBar
                    />
                </div>
            </div>
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetBig />
            </div>
        </div>
    );
}
