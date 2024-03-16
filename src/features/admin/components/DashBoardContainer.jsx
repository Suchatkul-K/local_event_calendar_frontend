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
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PieChart from './PieChart';
import useAdmin from '../hooks/useAdmin';
import { BackIcon } from '../../../icons';

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

export default function DashboardContainer() {
  const adminObj = useAdmin();
  const navigate = useNavigate();

  const { statisticUser, loading, setLoading } = adminObj;

  const [chartData, setChartData] = useState({
    labels: ['user', 'organizer'],
    datasets: [
      {
        label: 'amount',
        data: [0, 0],
        backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
      },
    ],
  });

  useEffect(() => {
    try {
      setLoading(true);
      if (statisticUser) {
        setChartData({
          labels: ['user', 'organizer'],
          datasets: [
            {
              label: 'amount',
              data: [statisticUser?.user?.user, statisticUser?.user?.organizer],
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
              ],
            },
          ],
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [statisticUser]);
  if (loading) {
    return (
      <div className='h-dvh w-dvw flex justify-center items-center animate-pulse'>
        <span className='loading loading-spinner loading-lg' />
        &nbsp; Loading... &nbsp; <span />
      </div>
    );
  }

  return (
    <div className='p-4 flex-col flex gap-4'>
      <div className='flex justify-between border p-4 rounded-lg font-semibold w-full'>
        <button
          type='button'
          aria-label='Save'
          className='flex-1 items-center'
          onClick={() => navigate(-1)}
        >
          <BackIcon />
        </button>
        <div className='flex-grow flex justify-center items-center'>
          DashBoard
        </div>
        <div className='flex-1' />
      </div>
      <div className='w-full text-center  font-bold'> User data</div>
      <div className='flex justify-center items-center border p-3 rounded-lg'>
        <PieChart chartData={chartData} />
      </div>
      <div className='flex justify-around border p-2 rounded-lg'>
        <div className='flex flex-col items-center font-semibold'>
          <h1>Total User</h1>
          <p>{statisticUser?.user?.total}</p>
        </div>
        <div className='flex flex-col items-center font-semibold '>
          <h1 className='text-[#FF6384]'>User</h1>
          <p className='text-[#FF6384]'>{statisticUser?.user?.user}</p>
        </div>
        <div className='flex flex-col items-center font-semibold'>
          <h1 className='text-[#4bc0c0]'>Organizer</h1>
          <p className='text-[#4bc0c0]'>{statisticUser?.user?.organizer}</p>
        </div>
      </div>
    </div>
  );
}
