// ── Model Performance Over Epochs ──
export const trainingHistory = [
    { epoch: 1, "Train Loss": 0.82, "Val Loss": 0.91, "Train Acc": 0.58, "Val Acc": 0.52 },
    { epoch: 5, "Train Loss": 0.54, "Val Loss": 0.62, "Train Acc": 0.73, "Val Acc": 0.68 },
    { epoch: 10, "Train Loss": 0.35, "Val Loss": 0.44, "Train Acc": 0.84, "Val Acc": 0.79 },
    { epoch: 15, "Train Loss": 0.24, "Val Loss": 0.36, "Train Acc": 0.89, "Val Acc": 0.84 },
    { epoch: 20, "Train Loss": 0.18, "Val Loss": 0.31, "Train Acc": 0.93, "Val Acc": 0.87 },
    { epoch: 25, "Train Loss": 0.14, "Val Loss": 0.29, "Train Acc": 0.95, "Val Acc": 0.89 },
    { epoch: 30, "Train Loss": 0.11, "Val Loss": 0.27, "Train Acc": 0.96, "Val Acc": 0.91 },
    { epoch: 35, "Train Loss": 0.09, "Val Loss": 0.26, "Train Acc": 0.97, "Val Acc": 0.92 },
    { epoch: 40, "Train Loss": 0.07, "Val Loss": 0.25, "Train Acc": 0.98, "Val Acc": 0.93 },
];

// ── Model Comparison ──
export const modelComparison = [
    { model: "Logistic Reg.", Accuracy: 0.78, Precision: 0.76, Recall: 0.74, F1: 0.75 },
    { model: "Random Forest", Accuracy: 0.88, Precision: 0.87, Recall: 0.85, F1: 0.86 },
    { model: "XGBoost", Accuracy: 0.91, Precision: 0.90, Recall: 0.89, F1: 0.895 },
    { model: "LSTM", Accuracy: 0.93, Precision: 0.92, Recall: 0.91, F1: 0.915 },
    { model: "Transformer", Accuracy: 0.94, Precision: 0.93, Recall: 0.92, F1: 0.925 },
];

// ── Feature Importance ──
export const featureImportance = [
    { feature: "sensor_rolling_mean_12", importance: 0.401 },
    { feature: "sensor_rolling_mean_6", importance: 0.250 },
    { feature: "lag_1", importance: 0.147 },
    { feature: "rolling_mean_3", importance: 0.123 },
    { feature: "year", importance: 0.018 },
    { feature: "quarter", importance: 0.015 },
    { feature: "is_summer", importance: 0.013 },
    { feature: "month_sin", importance: 0.011 },
    { feature: "month_cos", importance: 0.009 },
    { feature: "lag_12", importance: 0.007 },
];

// ── Confusion Matrix Data ──
export const confusionMatrix = [
    { actual: "True Positive", predicted: "Positive", count: 842 },
    { actual: "False Positive", predicted: "Positive", count: 67 },
    { actual: "False Negative", predicted: "Negative", count: 73 },
    { actual: "True Negative", predicted: "Negative", count: 918 },
];

// ── Monthly Predictions vs Actuals ──
export const predVsActual = [
    { month: "Jan", Actual: 312, Predicted: 298 },
    { month: "Feb", Actual: 287, Predicted: 295 },
    { month: "Mar", Actual: 345, Predicted: 338 },
    { month: "Apr", Actual: 378, Predicted: 365 },
    { month: "May", Actual: 402, Predicted: 410 },
    { month: "Jun", Actual: 435, Predicted: 428 },
    { month: "Jul", Actual: 418, Predicted: 422 },
    { month: "Aug", Actual: 445, Predicted: 440 },
    { month: "Sep", Actual: 398, Predicted: 405 },
    { month: "Oct", Actual: 367, Predicted: 372 },
    { month: "Nov", Actual: 334, Predicted: 340 },
    { month: "Dec", Actual: 310, Predicted: 318 },
];

// ── Data Distribution (Histogram-like) ──
export const dataDistribution = [
    { bin: "0-50", count: 120 },
    { bin: "50-100", count: 340 },
    { bin: "100-150", count: 580 },
    { bin: "150-200", count: 890 },
    { bin: "200-250", count: 1120 },
    { bin: "250-300", count: 980 },
    { bin: "300-350", count: 720 },
    { bin: "350-400", count: 450 },
    { bin: "400-450", count: 280 },
    { bin: "450-500", count: 140 },
];

// ── Experiment Log ──
export const experiments = [
    { id: "EXP-042", model: "XGBoost + GridSearchCV", dataset: "FBI Crime (474K)", accuracy: "93.6%", rmse: "57.55", status: "Best", date: "15 Mar 2026" },
    { id: "EXP-041", model: "Random Forest (Tuned)", dataset: "FBI Crime (474K)", accuracy: "92.4%", rmse: "63.11", status: "Good", date: "14 Mar 2026" },
    { id: "EXP-040", model: "SARIMA (Per Type)", dataset: "FBI Crime (474K)", accuracy: "92.3%", rmse: "63.30", status: "Good", date: "14 Mar 2026" },
    { id: "EXP-039", model: "XGBoost (Tuned)", dataset: "Glassdoor Salary (742)", accuracy: "79.0%", rmse: "18.64", status: "Best", date: "12 Mar 2026" },
    { id: "EXP-038", model: "Ridge Regression", dataset: "Glassdoor Salary (742)", accuracy: "66.8%", rmse: "23.42", status: "Baseline", date: "12 Mar 2026" },
];

// ── Dataset Stats ──
export const datasetStats = [
    { name: "FBI Crime Records", rows: "474,565", features: 16, target: "Incident Count", type: "Time Series" },
    { name: "Glassdoor Salary", rows: "742", features: 21, target: "Avg Salary ($K)", type: "Regression" },
    { name: "Marine Sensor Data", rows: "131,000+", features: 132, target: "Alarm Risk Score", type: "Anomaly Detection" },
    { name: "Google Play Store", rows: "10,841", features: 13, target: "App Rating", type: "EDA / Sentiment" },
];

// ── Correlation Matrix Values ──
export const correlationData = [
    { x: "RPM", y: "Boost Press", corr: 0.90 },
    { x: "RPM", y: "Fuel Cons.", corr: 0.72 },
    { x: "RPM", y: "Exh. Temp", corr: 0.85 },
    { x: "Boost Press", y: "Fuel Cons.", corr: 0.80 },
    { x: "Boost Press", y: "Exh. Temp", corr: 0.78 },
    { x: "Fuel Cons.", y: "Exh. Temp", corr: 0.65 },
    { x: "Lub. Temp", y: "Lub. Press", corr: -0.55 },
    { x: "Lub. Temp", y: "Exh. Temp", corr: 0.48 },
    { x: "Engine Load", y: "RPM", corr: 0.82 },
    { x: "Engine Load", y: "Fuel Cons.", corr: 0.88 },
];
