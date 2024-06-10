import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart: React.FC = () => {
  const options = {
    chart: {
      type: 'spline',
      spacingTop: 10,
      spacingBottom: 0,
      spacingLeft: 0,
      spacingRight: 10,
      renderTo: 'container',
      backgroundColor: 'var(--bs-bg-color)'
    },
    title: {
      text: '',
      align: 'left',
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      useHTML: true,
      formatter: function (this: any) {
        return `<span style="font-size:8px">${this.point.friendlydate}</span><br><table><tr><td style="padding:0"><span style="color: '${this.series.color}'">Transactions: </a></span><b> ${this.point.formattedValue} </b><br><br>Price: ${this.point.price}</td></tr></table>`;
      },
      plotX: 10,
    },
    xAxis: {
      title:
      {
        text: '',
      },
      labels: {
        step: 7,
        enabled: true,
        style: {
          color: 'var(--bs-text-color)'
        }
      },
      lineWidth: 0,
      minorTickLength: 0,
      tickLength: 0,
      categories: [
        'May 19',
        'May 26',
        'June 1',
      ],
    },
    yAxis: {
      labels: {
        enabled: true,
        style: {
          color: 'var(--bs-text-color)'
        }
      },
      gridLineWidth: 0,
      title: {
        text: null,
      },
      height: 60,
    },
    plotOptions: {
      series: {
        color: 'var(--bs-text-color)',
        enableMouseTracking: true,
        lineWidth: 1,
        shadow: false,
        animation: false,
        cursor: 'pointer',
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        marker: {
          radius: 0,
        },
        point: {
          events: {
            select: function (this: any) {
              location.href = `txs?dt=${this.options.dt}`;
            },
          },
        },
      },
      column: {
        pointPadding: 0.1,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Transactions',
        type: 'spline',
        data: [
          {
            y: 994076,
            dt: '1674259200',
            formattedValue: '994,076',
            friendlydate: 'Saturday, May 19, 2024',
            price: '$1,626.68',
          },
          {
            y: 994076,
            dt: '1674259200',
            formattedValue: '994,076',
            friendlydate: 'Saturday, May 20, 2024',
            price: '$1,626.68',
          },
          {
            y: 994076,
            dt: '1674259200',
            formattedValue: '994,076',
            friendlydate: 'Saturday, May 21, 2024',
            price: '$1,626.68',
          },
          {
            y: 889814,
            dt: '1674345600',
            formattedValue: '889,814',
            friendlydate: 'Sunday, May 22, 2024',
            price: '$1,627.79',
          },
          {
            y: 947725,
            dt: '1674432000',
            formattedValue: '947,725',
            friendlydate: 'Monday, May 23, 2024',
            price: '$1,626.47',
          },
          {
            y: 1032293,
            dt: '1674518400',
            formattedValue: '1,032,293',
            friendlydate: 'Tuesday, May 24, 2024',
            price: '$1,556.12',
          },
          {
            y: 1020705,
            dt: '1674604800',
            formattedValue: '1,020,705',
            friendlydate: 'Wednesday, May 25, 2024',
            price: '$1,610.94',
          },
          {
            y: 1048864,
            dt: '1674691200',
            formattedValue: '1,048,864',
            friendlydate: 'Thursday, May 26, 2024',
            price: '$1,601.35',
          },
          {
            y: 1100192,
            dt: '1674777600',
            formattedValue: '1,100,192',
            friendlydate: 'Friday, May 27, 2024',
            price: '$1,597.86',
          },
          {
            y: 964429,
            dt: '1674864000',
            formattedValue: '964,429',
            friendlydate: 'Saturday, May 28, 2024',
            price: '$1,572.46',
          },
          {
            y: 998228,
            dt: '1674950400',
            formattedValue: '998,228',
            friendlydate: 'Sunday, May 29, 2024',
            price: '$1,645.46',
          },
          {
            y: 1074566,
            dt: '1675036800',
            formattedValue: '1,074,566',
            friendlydate: 'Monday, May 30, 2024',
            price: '$1,566.49',
          },
          {
            y: 1086364,
            dt: '1675123200',
            formattedValue: '1,086,364',
            friendlydate: 'Tuesday, May 31, 2024',
            price: '$1,585.47',
          },
          {
            y: 1064236,
            dt: '1675209600',
            formattedValue: '1,064,236',
            friendlydate: 'Wednesday, June 1, 2024',
            price: '$1,641.61',
          },
        ],
        allowPointSelect: true,
        pointStart: 0,
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{ style: { height: '100%' } }}
    />
  );
};
export default Chart;
