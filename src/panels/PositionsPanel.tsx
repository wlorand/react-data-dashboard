import React, { useState, useEffect } from 'react';

// data service imports
import { getPositions } from '../services/dataService';

// TS interfaces
import { Position } from '../data/models';

// Data Grid UI Components
import { Grid, GridColumn, GridCellProps } from '@progress/kendo-react-grid'; // GridCellProps - not used til custom

// ChangeCell util function - if value > 0 color green, else color red
const ChangeCell = (props: GridCellProps) => {
  const value = props.dataItem[props.field || ''];
  return <td style={{ color: value > 0 ? 'green' : 'red' }}>{value}%</td>;
};

function PositionsPanel() {
  // local state via useState and TS
  const [positions, setPositions] = useState<Position[]>();

  // fetch data via useEffect (aka componentDidMount) - recall empty [] of watchers
  useEffect(() => {
    getPositions().then((data: Position[]) => setPositions(data));
  }, []);

  console.log(`positions data is ${JSON.stringify(positions)}`); // data in the console - youy are dev!

  return (
    <Grid data={positions} style={{ height: 700 }}>
      <GridColumn title="Symbol" field="symbol" locked={true} width={100} />
      <GridColumn title="Name" field="name" />
      <GridColumn title="Change" field="day_change" cell={ChangeCell} />
      <GridColumn title="% Change" field="change_pct" cell={ChangeCell} />
      <GridColumn title="Volume" field="volume" />
      <GridColumn title="Market Cap" field="market_cap" />
    </Grid>
  );
}

export default PositionsPanel;
