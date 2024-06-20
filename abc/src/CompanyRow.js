import React from 'react';

function CompanyRow({ company }) {
  return (
    <tr>
      <td>{company.description}</td>
      <td>{company.symbol}</td>
      <td>{company.exchange}</td>
      <td>{company.ipo}</td>
      <td>{company.country}</td>
    </tr>
  );
}

export default CompanyRow;
