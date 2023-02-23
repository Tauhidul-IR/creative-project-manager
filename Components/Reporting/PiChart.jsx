import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJs,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    
} from 'chart.js';
ChartJs.register(
    ArcElement,
    Title,
    Tooltip,
    Legend,
  
)

function PiChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ['Red', 'Green', 'Blue'],
            datasets: [
                {
                    label: ' Projects Sales $',
                    data: [18127, 22201, 19490],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: ['Red','blue', 'Green']
                },
            ],
           
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Reporting Management'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])
    return (
        <>
            <div className='w-96 md:col-span-2 relative lg:h-[50vh] m-auto p-4 border rounded-lg bg-white'>
                <Pie data={chartData} options={chartOptions} />
            </div>
        </>
    )
}

export default PiChart