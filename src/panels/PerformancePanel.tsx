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

function PerformancePanel() {
  // local state
  const [data, setData] = useState<string[]>();

  // fetch data via useEffect (aka componentDidMount)
  useEffect(() => {
    getPerformance().then((results: string[]) => {
      setData(results);
    });
  }, []);

  return <h2>[Line Chart] Performance Panel</h2>;
}

export default PerformancePanel;
