"use client"
import classes from "./chart.module.css";
import { LineChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Line,ResponsiveContainer  } from "recharts";
const data = [
  {
    name: "Sun",
    visit: 4000,
    click: 2400,
  },
  {
    name: "Mon",
    visit: 3000,
    click: 1398,
  },
  {
    name: "Tue",
    visit: 2000,
    click: 3800,
  },
  {
    name: "Wed",
    visit: 2780,
    click: 3908,
  },
  {
    name: "Thu",
    visit: 1890,
    click: 4800,
  },
  {
    name: "Fri",
    visit: 2390,
    click: 3800,
  },
  {
    name: "Sat",
    visit: 3490,
    click: 4300,
  },
];
                            

export default function Chart() {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Weekly Recap</h2>
  <ResponsiveContainer height={"100%"} width={"100%"}>
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip contentStyle={{backgroundColor:"#11173a",border:"none" ,color:"white"}} />
        <Legend />
        <Line type="monotone" dataKey="visit" stroke="#8884d8" />
        <Line type="monotone" dataKey="click" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
    </div>
  
  );
}