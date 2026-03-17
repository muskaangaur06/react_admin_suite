import { useState } from "react";
import "./charts.css";
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Charts({ title, data, dataKey, grid }) {
    const [chartType, setChartType] = useState("area");

    const renderChart = () => {
        if (chartType === "bar") {
            return (
                <BarChart data={data}>
                    {grid && <CartesianGrid stroke="#e8e0d8" strokeDasharray="4 4" />}
                    <XAxis dataKey="name" stroke={var_chart} tick={{ fontSize: 12 }} />
                    <YAxis stroke={var_chart} tick={{ fontSize: 12 }} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Bar dataKey={dataKey} fill={var_chart} radius={[4, 4, 0, 0]} />
                </BarChart>
            );
        }
        if (chartType === "line") {
            return (
                <LineChart data={data}>
                    {grid && <CartesianGrid stroke="#e8e0d8" strokeDasharray="4 4" />}
                    <XAxis dataKey="name" stroke={var_chart} tick={{ fontSize: 12 }} />
                    <YAxis stroke={var_chart} tick={{ fontSize: 12 }} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Line type="monotone" dataKey={dataKey} stroke={var_chart} strokeWidth={2} dot={{ fill: var_chart, r: 4 }} />
                </LineChart>
            );
        }
        return (
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={var_chart} stopOpacity={0.15} />
                        <stop offset="95%" stopColor={var_chart} stopOpacity={0} />
                    </linearGradient>
                </defs>
                {grid && <CartesianGrid stroke="#e8e0d8" strokeDasharray="4 4" />}
                <XAxis dataKey="name" stroke={var_chart} tick={{ fontSize: 12 }} />
                <YAxis stroke={var_chart} tick={{ fontSize: 12 }} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey={dataKey} stroke={var_chart} strokeWidth={2} fill="url(#chartGradient)" />
            </AreaChart>
        );
    };

    const var_chart = "#5550BD";
    const tooltipStyle = {
        backgroundColor: "white",
        border: "1px solid #e8e0d8",
        borderRadius: "8px",
        fontSize: "13px",
    };

    return (
        <div className="charts">
            <div className="chartsHeader">
                <h3 className="chartsTitle">{title}</h3>
                <div className="chartTypeTabs">
                    {["area", "bar", "line"].map(t => (
                        <button key={t} className={`chartTab ${chartType === t ? "active" : ""}`} onClick={() => setChartType(t)}>
                            {t.charAt(0).toUpperCase() + t.slice(1)}
                        </button>
                    ))}
                </div>
            </div>
            <ResponsiveContainer width="100%" height={240}>
                {renderChart()}
            </ResponsiveContainer>
        </div>
    );
}
