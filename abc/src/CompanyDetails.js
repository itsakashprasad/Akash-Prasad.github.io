import React from 'react';

function CompanyDetails({ selectedCompany }) {
  return (
    <div>
      <h2>Company Details</h2>
      {selectedCompany && (
        <div>
          <p>Company Name: {selectedCompany.description}</p>
          <p>Ticker Symbol: {selectedCompany.symbol}</p>
          <p>Exchange: {selectedCompany.exchange}</p>
          <p>IPO Date: {selectedCompany.ipo}</p>
          <p>Country: {selectedCompany.country}</p>
        </div>
      )}
    </div>
  );
}

export default CompanyDetails;
