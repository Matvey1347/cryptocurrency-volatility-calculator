"use client";

import { Line } from "react-chartjs-2";
import { PriceByDay } from "../../interfaces/CoinAPIResponse";
import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import 'chartjs-adapter-date-fns'; // Используйте адаптер для обработки дат

ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartOpenCompareCloseProps {
  priceByDay: PriceByDay[] | null
}

export default function ChartOpenCompareClose({ priceByDay }: ChartOpenCompareCloseProps) {
  if (!priceByDay) return null;
  const chartDataClose = priceByDay?.map(({ date, close }) => {
    const [day, month, year] = date.split("/");
    const timestamp = new Date(`${year}-${month}-${day}`).getTime();
    return [timestamp, close];
  });

  const chartDataOpen = priceByDay?.map(({ date, open }) => {
    const [day, month, year] = date.split("/");
    const timestamp = new Date(`${year}-${month}-${day}`).getTime();

    return [timestamp, open];
  });

  const chartData = {
    datasets: [
      {
        label: 'Closing Price',
        data: chartDataClose,
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
      },
      {
        label: 'Opening Price',
        data: chartDataOpen,
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  const chartOptions: any = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
      },
      y: {
        beginAtZero: false,
      },
    },
  };
  return (
    <Line data={chartData} options={chartOptions} />
  )
}