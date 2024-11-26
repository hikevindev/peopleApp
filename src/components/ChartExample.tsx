import React from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const MyChart = () => {
  const options = {
    chart: {
      type: 'bar', // Tipo de gráfico
    },
    title: {
      text: 'Mi gráfico de ejemplo',
    },
    xAxis: {
      categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    },
    yAxis: {
      title: {
        text: 'Valor',
      },
    },
    series: [
      {
        name: 'Ventas',
        data: [10, 20, 30, 40, 50],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default MyChart;
