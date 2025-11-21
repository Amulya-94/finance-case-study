import React, { useState } from 'react';
import './App.css';
import Analysis from './Analysis';
import FinancialsSnippet from './FinancialsSnippet';

const App = () => {
  // State to track the key of the currently highlighted item ('ebitda' or 'assetSale')
  const [highlightedItem, setHighlightedItem] = useState(null);

  // Handler function to toggle the highlight state
  const handleLinkClick = (itemKey) => {
    // Toggles the highlight: if itemKey is already active, set to null (un-highlight)
    setHighlightedItem(prev => (prev === itemKey ? null : itemKey));
  };

  return (
    <div className="app-container">
      <h1 className="main-title">A.P. Møller - Mærsk Q2 2025 Financial Review</h1>
      <div className="content-area">
        <FinancialsSnippet highlightedItem={highlightedItem} />
        <Analysis onLinkClick={handleLinkClick} />
      </div>
    </div>
  );
};

export default App;