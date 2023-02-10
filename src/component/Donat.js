import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Layar LCD', 'Fingerprint', 'Kabel USB', 'Motherboard'],
    datasets: [
      {
        label: 'Total Complain',
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
        ],
        borderWidth: 2,
      },
    ],
  };
  
const Donat = () => {
  return (
    <div><Doughnut data={data} /></div>
  )
}

export default Donat