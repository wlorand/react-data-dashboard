import React, { useState, useEffect } from 'react';

// data service imports
import { getPerformance } from '../services/dataService';

// Chart UI Components
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartTooltip,
} from '@progress/kendo-react-charts';

const renderTooltip = (e: any) => {
  return (
    <div>
      {e.point
        ? '$' + e.point.value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        : ''}
    </div>
  );
};

function PerformancePanel() {
  // local state
  const [data, setData] = useState<string[]>();

  // fetch data via useEffect (aka componentDidMount)
  useEffect(() => {
    getPerformance().then((results: string[]) => {
      setData(results);
    });
  }, []);

  return (
    <Chart>
      <ChartSeries>
        <ChartSeriesItem type="line" data={data} />
      </ChartSeries>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem
          categories={['2014', '2015', '2016', '2017', '2018', '2019', '2020']}
        />
      </ChartCategoryAxis>
      <ChartTitle text="Fund Performance" />
      <ChartTooltip render={renderTooltip} />
    </Chart>
  );
}

export default PerformancePanel;
