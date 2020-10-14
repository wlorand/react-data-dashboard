import React, { useState, useEffect } from 'react';

// data service imports
import { getPositions } from '../services/dataService';

// TS interfaces
import { Position } from '../data/models';

// Data Grid UI Components
import { Grid, GridCellProps, GridColumn } from '@progress/kendo-react-grid';

function PositionsPanel() {
  // local state
  const [positions, setPositions] = useState<Position[]>();

  // fetch data via useEffect (aka componentDidMount)
  useEffect(() => {
    getPositions().then((data: Position[]) => {
      setPositions(data);
    });
  }, []);

  return <h2>[Data Grid] Positions Panel</h2>;
}

export default PositionsPanel;
