import React from "react";
import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
ResponsiveContainer,
} from "recharts";
import Navigation from "../navigation/nav";

const data = [
{
	name: "Block A",
	
	l2: 2400,
	amt: 2400,
},
{
	name: "Block B",
	
	l2: 1398,
	amt: 2210,
},
{
	name: "Block C",
	
	l2: 9800,
	amt: 2290,
},
{
	name: "Block D",
	
	l2: 3908,
	amt: 2000,
},
];

export default function Recharts() {
return (
    <div className="">
        <Navigation />
        
        <div className="container" style={{ width: "1100px",
                    height: "600px",
                    backgroundColor: "black" }}>
        <ResponsiveContainer width="100%"
                            height="100%">
            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
                type="monotone"
                dataKey="l2"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
            </LineChart>
        </ResponsiveContainer>
        </div>
    </div>
);
}
