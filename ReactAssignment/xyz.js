import React, { useState, useEffect } from 'react';

function App() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState(null);

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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  const filteredCompanies = companies.filter((company) =>
    company.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Company Financial Data</h1>
      <input
        type="text"
        placeholder="Search by company name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Exchange</th>
            <th>IPO Date</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {filteredCompanies.map((company) => (
            <tr key={company.symbol} onClick={() => handleCompanyClick(company)}>
              <td>{company.description}</td>
              <td>{company.symbol}</td>
              <td>{company.exchange}</td>
              <td>{company.ipo}</td>
              <td>{company.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCompany && (
        <div>
          <h2>{selectedCompany.description}</h2>
          <p>Symbol: {selectedCompany.symbol}</p>
          <p>Exchange: {selectedCompany.exchange}</p>
          <p>IPO Date: {selectedCompany.ipo}</p>
          <p>Country: {selectedCompany.country}</p>
        </div>
      )}
    </div>
  );
}

export default App;
