import React, { useState, useEffect } from 'react';

// data service imports
import { getFundAllocation } from '../services/dataService';

// TS interfaces
import { Allocation } from '../data/models';

// Chart UI Components
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartTitle,
  ChartTooltip,
} from '@progress/kendo-react-charts';

function AllocationPanel() {
  // local state
  const [data, setData] = useState<Allocation[]>();

  // fetch data via useEffect (aka componentDidMount)
  useEffect(() => {
    getFundAllocation().then((data: Allocation[]) => {
      console.table(data);
      setData(data);
    });
  }, []);

  return (
    <Chart>
      <ChartTitle text={'Asset Allocation'}></ChartTitle>
      <ChartSeries>
        <ChartSeriesItem type="donut" data={data}>
          <ChartSeriesLabels
            content={(e) => `${e.value}%`}
            background="none"
            color="#fff"
          />
        </ChartSeriesItem>
      </ChartSeries>
      <ChartLegend position={'bottom'} visible={true} />
      <ChartTooltip
        render={(e: any) => <div>{e.point ? e.point.category : ''}</div>}
      />
    </Chart>
  );
}

export default AllocationPanel;
