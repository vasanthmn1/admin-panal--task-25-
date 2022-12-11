import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import DoughnutChart from '../Charts/DoughnutChart';
import LineChart from '../Charts/LineChart';
ChartJS.register(ArcElement, Tooltip, Legend);
const Dasbord = () => {

    let cardarray = [
        {
            name: "a",
            color: "primary",
            salery: "$40,000",
        },
        {
            name: "a",
            color: "primary",
            salery: "$40,000",
        },
        {
            name: "a",
            color: "primary",
            salery: "$40,000",
        },
        {
            name: "a",
            color: "primary",
            salery: "$40,000",
        },
    ]

    return (
        <div className='container'>
            <div class="row">
                <Card name="EARNINGS (MONTHLY)" color="primary" salery="$40,000" />
                <Card name="EARNINGS (ANNUAL)" color="success" salery="$40,000" />
                <Card name="TASKS" color="info" salery="140" />
                <Card name="PENDING REQUESTS" color="secondary" salery="20" />
            </div>
            <div className='row'>
                <div className='col-lg-4'>
                    <div className="header">
                        {/* <Doughnut data={data} />; */}
                        <DoughnutChart />
                    </div>
                </div >
                <div className='col-lg-6'>
                    <LineChart />
                </div>

            </div>
        </div>
    )
}

export default Dasbord
