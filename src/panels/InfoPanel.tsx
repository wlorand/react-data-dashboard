import React, { useState, useEffect } from 'react';

// data service imports
import { getFundInfo } from '../services/dataService';

// TS interfaces
import { FundInfo } from '../data/models';

// UI Components
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';

function InfoPanel() {
  // local state
  const [fundInfo, setFundInfo] = useState<FundInfo>();

  // fetch data via useEffect (aka componentDidMount)
  useEffect(() => {
    getFundInfo().then((data: FundInfo) => {
      setFundInfo(data);
    });
  }, []);

  return <h2>My Info Panel</h2>;
}

export default InfoPanel;
