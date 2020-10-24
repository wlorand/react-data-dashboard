import React from 'react';

// child components
import InfoPanel from './panels/InfoPanel';
import AllocationPanel from './panels/AllocationPanel';
import PerformancePanel from './panels/PerformancePanel';
import PositionsPanel from './panels/PositionsPanel';

// Render Chart Components in a Dashboard with CSS Grid Layout
function Dashboard() {
  return (
    <div className="panels">
      <div className="panel-info">
        <InfoPanel />
      </div>
      <div className="panel-allocation">
        <AllocationPanel />
      </div>
      <div className="panel-balance">
        <PerformancePanel />
      </div>
      <div className="panel-positions">
        <PositionsPanel />
      </div>
    </div>
  );
}

export default Dashboard;
