import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
} from 'chart.js';
import { useState } from 'react';
import PieChart from './PieChart';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement
);

const data = [
  { role: 'user', amount: 2 },
  { role: 'organizer', amount: 3 },
];

export default function DashboardContainer() {
  const [chartData, setChartData] = useState({
    label: ['user', 'organizer'],
    datasets: [
      {
        label: '1',
        data: data.map((el) => el.amount),
      },
    ],
  });

  const data2 = {
    labels: ['user', 'organizer'],
    datasets: [
      {
        label: ['user', 'organizer'],
        data: [50, 50],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(75, 192, 192, 0.2)'],
      },
    ],
  };

  return (
    <div className='h-dvh p-4 flex-col flex gap-4'>
      <div className='border p-4 rounded-lg font-semibold'>DashBoard</div>
      <div className='w-full text-center'> User data</div>
      <div className='flex justify-center items-center border p-3 rounded-lg'>
        <PieChart chartData={data2} />
      </div>
    </div>
  );
}
