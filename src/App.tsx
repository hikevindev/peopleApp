import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { RegionService } from './api/services/regionService';
import { RegionRepository } from './api/respositories/regionRepository';
import { CountryService } from './api/services/countryService';
import { CountryRepo } from './api/respositories/countryRepository';

const serviceCountry = new CountryService(new CountryRepo());
const regionService = new RegionService(new RegionRepository());
function App() {
  useEffect(() => {
    const handler = async () => {
      const data = await regionService.getCountryByName('asia');
      console.log(data);
    };
    handler();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
