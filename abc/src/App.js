import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar';
import CompanyTable from './CompanyTable';
import CompanyDetails from './CompanyDetails';
import CountryDetails from './CountryDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" exact component={CompanyTable} />
          <Route path="/company/:companyId" component={CompanyDetails} />
          <Route path="/country/:countryId" component={CountryDetails} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
