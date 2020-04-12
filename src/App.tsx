import React from 'react';

import Tree from './components/Tree';
import { DATA_STUB } from './constants/data'

import './app.scss';

function App() {
  return (
    <div className="app">
      Test react tree
      <Tree data={DATA_STUB}/>
    </div>
  );
}

export default App;
