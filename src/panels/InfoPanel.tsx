import React, { useState, useEffect } from 'react';

// data service imports
import { getFundInfo } from '../services/dataService';

// TS interfaces
import { FundInfo } from '../data/models';

// UI Components (Kendo React)
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';

function InfoPanel() {
  // local state
  const [fundInfo, setFundInfo] = useState<FundInfo>();

  // fetch data by component via useEffect (aka componentDidMount)
  // better: use a data fetch service file for consolidated data fetching (get confirm)
  useEffect(() => {
    getFundInfo().then((data: FundInfo) => {
      setFundInfo(data); // pop data into local state right from the fetch
    });
  }, []); // mimic ComponentDidMount

  // return PanelBar, PanelBarItem UI Components and fill with mapped over data
  return (
    <PanelBar>
      <PanelBarItem expanded={true} title="Fund Managers">
        <div>
          {fundInfo &&
            fundInfo.managers.map((manager, i) => (
              <div className="manager" key={i}>
                <img
                  src={`/team/${manager.firstName}${manager.lastName}.png`}
                  alt={`${manager.firstName}  ${manager.lastName}`}
                />
                <span className="manager-info">
                  <h2>{`${manager.firstName} ${manager.lastName}`}</h2>
                  <p>{manager.position}</p>
                </span>
              </div>
            ))}
        </div>
      </PanelBarItem>
    </PanelBar>
  );
}

export default InfoPanel;
