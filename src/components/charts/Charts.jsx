import "./charts.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Charts({title, data, dataKey, grid}) {
    

  return (
    <div className="charts">
        <h3 className="chartsTitle" >{title}</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#5550BD"/>
                <Line type="monotone" dataKey= {dataKey} stroke="#5550BD"/>
                <Tooltip/>
                {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5 "/>}
            </LineChart>    
        </ResponsiveContainer>   
    </div>
  )
}
