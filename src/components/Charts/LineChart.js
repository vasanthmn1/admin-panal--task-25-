import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';


import {

    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,

    Filler,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Filler,
    Legend,

);
// ChartJS.register(ArcElement, Tooltip, Legend);
const LineChart = () => {
    return (
        <>
            <Line options={{
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Chart.js Line Chart',
                    },
                },

            }} data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First Dataset',
                    data: [65, 59, 150, 81, 56, 200, 40],
                    fill: true,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            }} />


        </>
    )
}

export default LineChart
