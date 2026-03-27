import "./datasets.css";
import { datasetStats } from "../../sampleData";

export default function Datasets() {
    return (
        <div className="datasetsPage">
            <h2 className="pageTitle">Dataset Registry</h2>
            <p className="pageSubtitle">Managed datasets used across ML projects</p>
            <div className="dsGrid">
                {datasetStats.map(ds => (
                    <div className="dsCard" key={ds.name}>
                        <div className="dsCardHeader">
                            <span className="dsType">{ds.type}</span>
                        </div>
                        <h3 className="dsName">{ds.name}</h3>
                        <div className="dsStats">
                            <div className="dsStat">
                                <span className="dsStatVal">{ds.rows}</span>
                                <span className="dsStatLabel">Rows</span>
                            </div>
                            <div className="dsStat">
                                <span className="dsStatVal">{ds.features}</span>
                                <span className="dsStatLabel">Features</span>
                            </div>
                        </div>
                        <div className="dsTarget">
                            <span className="dsTargetLabel">Target:</span> {ds.target}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
