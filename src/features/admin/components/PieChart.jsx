import React from 'react';
import { Pie } from 'react-chartjs-2';

function PieChart({ chartData }) {
  return (
    <div className='chart-container w-full h-full'>
      {/* <h2 style={{ textAlign: 'center' }}>Dashboard user</h2> */}
      <Pie
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
          },
        }}
      />
    </div>
  );
}
export default PieChart;
