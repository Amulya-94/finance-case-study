import React from 'react';
import './FinancialsSnippet.css';

const FinancialsSnippet = ({ highlightedItem }) => {
  // Data set from the Maersk Q2 2025 Interim Report (Page 15)
  const financialData = [
    // The key in this array MUST match the referenceKey sent by Analysis.js
    { name: "Revenue", q2_25: "13,130", q2_24: "12,771", m6_25: "26,451", m6_24: "25,126", key: 'revenue' },
    { name: "Profit before depreciation... (EBITDA)", q2_25: "2,298", q2_24: "2,144", m6_25: "5,008", m6_24: "3,734", key: 'ebitda' }, // Target for [1] and [2]
    { name: "Depreciation, amortisation and impairment losses, net", q2_25: "1,651", q2_24: "1,481", m6_25: "3,271", m6_24: "2,999", key: 'depreciation' },
    { name: "Gain on sale of non-current assets, etc., net", q2_25: "25", q2_24: "208", m6_25: "80", m6_24: "215", key: 'assetSale' }, // Target for [3]
    { name: "Share of profit in joint ventures and associated companies", q2_25: "173", q2_24: "92", m6_25: "281", m6_24: "190", key: 'jvProfit' },
    { name: "Profit before financial items (EBIT)", q2_25: "845", q2_24: "963", m6_25: "2,098", m6_24: "1,140", key: 'ebit' },
  ];

  return (
    <div className="financials-snippet">
      <h2>Condensed Income Statement (Snippet) - Page 15</h2>
      
      <table className="income-statement-table">
        <thead>
          <tr>
            <th>Income Statement</th>
            <th>Q2 2025 (USDm)</th>
            <th>Q2 2024 (USDm)</th>
            <th>6M 2025 (USDm)</th>
            <th>6M 2024 (USDm)</th>
          </tr>
        </thead>
        <tbody>
          {financialData.map((row) => {
            // Check if the current row's key matches the state being highlighted
            const isHighlighted = row.key === highlightedItem;

            return (
              <tr 
                key={row.key} 
                // Apply 'highlight-yellow' if the current row is the target
                className={isHighlighted ? 'highlight-yellow' : ''}
              >
                {/* Make the target line item name bold for better visual clarity */}
                <td className={(row.key === 'assetSale' || row.key === 'ebitda') ? 'font-bold' : ''}>
                  {row.name}
                </td>
                <td>{row.q2_25}</td>
                <td>{row.q2_24}</td>
                <td>{row.m6_25}</td>
                <td>{row.m6_24}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialsSnippet;