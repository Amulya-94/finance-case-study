import React from 'react';
import './Analysis.css';

const Analysis = ({ onLinkClick }) => {
  // Helper component to make the citations clickable and cleaner in the JSX
  const Citation = ({ referenceKey, label }) => (
    <span 
      className="analysis-link" 
      onClick={() => onLinkClick(referenceKey)}
      title="Click to highlight the source data"
    >
      {label}
    </span>
  );

  return (
    <div className="analysis-panel">
      <h2>Analysis</h2>
      <p>
        No extraordinary or one-off items affecting EBITDA were reported in Maersk's Q2 2025 results. The report explicitly notes that EBITDA improvements stemmed from operational performance—including volume growth, cost control, and margin improvement across Ocean, Logistics & Services, and Terminals segments 
        <Citation referenceKey="ebitda" label="[1]" />
        <Citation referenceKey="ebitda" label="[2]" />.
        Gains or losses from asset sales, which could qualify as extraordinary items, are shown separately under EBIT and not included in EBITDA.
      </p>
      <p>
        The gain on sale of non-current assets was USD 25 m in Q2 2025, significantly lower than USD 208 m in Q2 2024, but these affect EBIT, not EBITDA. 
        <Citation referenceKey="assetSale" label="[3]" />
        Hence, Q2 2025 EBITDA reflects core operating activities without one-off extraordinary adjustments.
      </p>
      
      <hr />
      
      <h2>Findings</h2>
      <ul className="findings-list">
        <li>
          <strong>Page 3:</strong> Highlights Q2 2025... EBITDA increase (USD 2.3 bn vs USD 2.1 bn prior year) attributed to operational improvements; no mention of extraordinary or one-off items. 
          <Citation referenceKey="ebitda" label="[1]" />
        </li>
        <li>
          <strong>Page 5:</strong> Review Q2 2025... EBITDA rise driven by higher revenue and cost control across all segments; no extraordinary gains or losses included. 
          <Citation referenceKey="ebitda" label="[2]" />
        </li>
        <li>
          <strong>Page 15:</strong> Condensed Income Statement: Gain on sale of non-current assets USD 25 m (vs USD 208 m prior year) reported separately below EBITDA; therefore, not part of EBITDA. 
          <Citation referenceKey="assetSale" label="[3]" />
        </li>
      </ul>
      {/* Supporting Evidence and other content omitted for brevity */}
    </div>
  );
};

export default Analysis;