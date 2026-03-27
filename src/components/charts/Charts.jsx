import { useState } from "react";
import "./charts.css";
import {
    AreaChart, Area, BarChart, Bar, LineChart, Line,
    XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";

export default function Charts({ title, data, dataKey, secondKey, xKey = "name", grid, forceBar }) {
    const [chartType, setChartType] = useState(forceBar ? "bar" : "area");

    const var_primary = "#5550BD";
    const var_secondary = "#e8656d";
    const tooltipStyle = {
        backgroundColor: "white",
        border: "1px solid #e8e0d8",
        borderRadius: "8px",
        fontSize: "13px",
    };

    const renderChart = () => {
        if (chartType === "bar" || forceBar) {
            return (
                <BarChart data={data}>
                    {grid && <CartesianGrid stroke="#e8e0d8" strokeDasharray="4 4" />}
                    <XAxis dataKey={xKey} stroke={var_primary} tick={{ fontSize: 10 }} angle={xKey === "feature" ? -25 : 0} textAnchor={xKey === "feature" ? "end" : "middle"} height={xKey === "feature" ? 80 : 30} />
                    <YAxis stroke={var_primary} tick={{ fontSize: 12 }} />
                    <Tooltip contentStyle={tooltipStyle} />
                    {secondKey && <Legend />}
                    <Bar dataKey={dataKey} fill={var_primary} radius={[4, 4, 0, 0]} />
                    {secondKey && <Bar dataKey={secondKey} fill={var_secondary} radius={[4, 4, 0, 0]} />}
                </BarChart>
            );
        }
        if (chartType === "line") {
            return (
                <LineChart data={data}>
                    {grid && <CartesianGrid stroke="#e8e0d8" strokeDasharray="4 4" />}
                    <XAxis dataKey={xKey} stroke={var_primary} tick={{ fontSize: 12 }} />
                    <YAxis stroke={var_primary} tick={{ fontSize: 12 }} />
                    <Tooltip contentStyle={tooltipStyle} />
                    {secondKey && <Legend />}
                    <Line type="monotone" dataKey={dataKey} stroke={var_primary} strokeWidth={2} dot={{ fill: var_primary, r: 3 }} />
                    {secondKey && <Line type="monotone" dataKey={secondKey} stroke={var_secondary} strokeWidth={2} dot={{ fill: var_secondary, r: 3 }} strokeDasharray="5 5" />}
                </LineChart>
            );
        }
        return (
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="gradPrimary" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={var_primary} stopOpacity={0.15} />
                        <stop offset="95%" stopColor={var_primary} stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="gradSecondary" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={var_secondary} stopOpacity={0.15} />
                        <stop offset="95%" stopColor={var_secondary} stopOpacity={0} />
                    </linearGradient>
                </defs>
                {grid && <CartesianGrid stroke="#e8e0d8" strokeDasharray="4 4" />}
                <XAxis dataKey={xKey} stroke={var_primary} tick={{ fontSize: 12 }} />
                <YAxis stroke={var_primary} tick={{ fontSize: 12 }} />
                <Tooltip contentStyle={tooltipStyle} />
                {secondKey && <Legend />}
                <Area type="monotone" dataKey={dataKey} stroke={var_primary} strokeWidth={2} fill="url(#gradPrimary)" />
                {secondKey && <Area type="monotone" dataKey={secondKey} stroke={var_secondary} strokeWidth={2} fill="url(#gradSecondary)" />}
            </AreaChart>
        );
    };

    return (
        <div className="charts">
            <div className="chartsHeader">
                <h3 className="chartsTitle">{title}</h3>
                {!forceBar && (
                    <div className="chartTypeTabs">
                        {["area", "bar", "line"].map(t => (
                            <button key={t} className={`chartTab ${chartType === t ? "active" : ""}`} onClick={() => setChartType(t)}>
                                {t.charAt(0).toUpperCase() + t.slice(1)}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <ResponsiveContainer width="100%" height={240}>
                {renderChart()}
            </ResponsiveContainer>
        </div>
    );
}
