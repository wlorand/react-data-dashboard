import React from 'react';

// ?
import 'hammerjs';

// child UI components
import DrawerContainer from './layout/DrawerContainer';
import Dashboard from './Dashboard';

// sass styles
import './app.scss';

function App() {
  return (
    <DrawerContainer>
      <div className="page-container">
        <Dashboard />
      </div>
    </DrawerContainer>
  );
}

export default App;
