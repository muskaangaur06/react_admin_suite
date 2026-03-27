import "../experiments/experiments.css";

export default function Hyperparameters() {
    return (
        <div className="experimentsPage">
            <h2 className="pageTitle">Hyperparameter Configurations</h2>
            <p className="pageSubtitle">Best parameters from tuning experiments across models</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div className="expTableWrap">
                    <h3 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "14px", color: "#2e2e2e" }}>XGBoost (GridSearchCV)</h3>
                    <table className="expFullTable">
                        <thead><tr><th>Parameter</th><th>Search Range</th><th>Best Value</th></tr></thead>
                        <tbody>
                            <tr><td className="expModelCell">n_estimators</td><td>[200, 300, 500]</td><td className="expMetricCell">200</td></tr>
                            <tr><td className="expModelCell">learning_rate</td><td>[0.01, 0.05, 0.1]</td><td className="expMetricCell">0.05</td></tr>
                            <tr><td className="expModelCell">max_depth</td><td>[4, 6, 8]</td><td className="expMetricCell">4</td></tr>
                            <tr><td className="expModelCell">subsample</td><td>[0.7, 0.8, 0.9]</td><td className="expMetricCell">0.8</td></tr>
                            <tr><td className="expModelCell">colsample_bytree</td><td>[0.7, 0.8, 0.9]</td><td className="expMetricCell">0.8</td></tr>
                        </tbody>
                    </table>
                    <p style={{ fontSize: "12px", color: "#888", marginTop: "10px" }}>5-Fold CV | Best RMSE: 57.55 | 243 combinations evaluated</p>
                </div>
                <div className="expTableWrap">
                    <h3 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "14px", color: "#2e2e2e" }}>Random Forest (RandomizedSearchCV)</h3>
                    <table className="expFullTable">
                        <thead><tr><th>Parameter</th><th>Search Range</th><th>Best Value</th></tr></thead>
                        <tbody>
                            <tr><td className="expModelCell">n_estimators</td><td>[100, 200, 300, 500]</td><td className="expMetricCell">100</td></tr>
                            <tr><td className="expModelCell">max_depth</td><td>[5, 8, 10, 15, None]</td><td className="expMetricCell">8</td></tr>
                            <tr><td className="expModelCell">min_samples_split</td><td>[2, 5, 10]</td><td className="expMetricCell">2</td></tr>
                            <tr><td className="expModelCell">min_samples_leaf</td><td>[1, 2, 5]</td><td className="expMetricCell">1</td></tr>
                            <tr><td className="expModelCell">max_features</td><td>[sqrt, log2, None]</td><td className="expMetricCell">None</td></tr>
                        </tbody>
                    </table>
                    <p style={{ fontSize: "12px", color: "#888", marginTop: "10px" }}>5-Fold CV | Best RMSE: 63.11 | 50 random iterations</p>
                </div>
                <div className="expTableWrap">
                    <h3 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "14px", color: "#2e2e2e" }}>LSTM (Neural Granger Causality)</h3>
                    <table className="expFullTable">
                        <thead><tr><th>Parameter</th><th>Value</th></tr></thead>
                        <tbody>
                            <tr><td className="expModelCell">hidden_dim</td><td className="expMetricCell">64</td></tr>
                            <tr><td className="expModelCell">num_layers</td><td className="expMetricCell">2</td></tr>
                            <tr><td className="expModelCell">learning_rate</td><td className="expMetricCell">0.001</td></tr>
                            <tr><td className="expModelCell">dropout</td><td className="expMetricCell">0.1</td></tr>
                            <tr><td className="expModelCell">sequence_length</td><td className="expMetricCell">60</td></tr>
                            <tr><td className="expModelCell">sparsity_lambda (L1)</td><td className="expMetricCell">0.01</td></tr>
                        </tbody>
                    </table>
                    <p style={{ fontSize: "12px", color: "#888", marginTop: "10px" }}>Early stopping patience: 10 | 100 epochs max</p>
                </div>
                <div className="expTableWrap">
                    <h3 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "14px", color: "#2e2e2e" }}>BiLSTM Alarm Classifier</h3>
                    <table className="expFullTable">
                        <thead><tr><th>Parameter</th><th>Value</th></tr></thead>
                        <tbody>
                            <tr><td className="expModelCell">hidden_size</td><td className="expMetricCell">64</td></tr>
                            <tr><td className="expModelCell">num_layers</td><td className="expMetricCell">2</td></tr>
                            <tr><td className="expModelCell">learning_rate</td><td className="expMetricCell">0.001</td></tr>
                            <tr><td className="expModelCell">dropout</td><td className="expMetricCell">0.2</td></tr>
                            <tr><td className="expModelCell">pos_weight (BCE)</td><td className="expMetricCell">5.0</td></tr>
                            <tr><td className="expModelCell">seq_len</td><td className="expMetricCell">60</td></tr>
                        </tbody>
                    </table>
                    <p style={{ fontSize: "12px", color: "#888", marginTop: "10px" }}>30 epochs | Batch size: 32</p>
                </div>
            </div>
        </div>
    );
}
