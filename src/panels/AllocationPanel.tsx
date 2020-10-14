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
  const [data, setData] = React.useState<Allocation[]>();

  // fetch data via useEffect (aka componentDidMount)
  useEffect(() => {
    getFundAllocation().then((data: Allocation[]) => {
      setData(data);
    });
  }, []);

  return <h2>[Pie Chart] Allocation Panel</h2>;
}

export default AllocationPanel;
