import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchRegion } from './redux/slices/regionSlice';
import { AppDispatch } from './redux/store';
import { REGION_LIST, REGION_TYPE } from './api/config/region';
import MyChart from './components/ChartExample';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    REGION_LIST.forEach((region: REGION_TYPE) => {
      dispatch(fetchRegion(region));
    });
  }, []);

  return (
    <div>
      <MyChart />
    </div>
  );
}

export default App;
