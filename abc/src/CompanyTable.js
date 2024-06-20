import React, { useState, useEffect } from 'react';
import CompanyRow from './CompanyRow';

function CompanyTable() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
        const response = await fetch(
            `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=cn7fbohr01qgjtj4iutgcn7fbohr01qgjtj4iuu0`
          );
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Company Financial Data</h2>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Ticker Symbol</th>
            <th>Exchange</th>
            <th>IPO Date</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <CompanyRow key={company.symbol} company={company} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompanyTable;
