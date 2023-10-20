import { useEffect, useState, useCallback } from 'react';

import uuid from 'react-uuid';

import FiresFilter from '../fires.filter/fires.filter';
import FiresMap from '../fires.map/fires.map';
import FiresTable from '../fires.table/fires.table';
import Footer from '../footer/footer';
import Header from '../header/header';
import Pagination from '../pagination/pagination';
import './App.scss';

import { getFires } from '../../services/api';

const App = () => {
  console.log('RENDER');
  const [fires, setFires] = useState([]);


 // Fetch fires from the API
  const fetchFires = useCallback(async () => {
    const fires = await getFires();

    // Here i add an id to each fire to be able to render 
    const updatedResults = fires.results.map((fire) => ({
      ...fire,
      id: uuid(),
    }));

    setFires({ ...fires, results: updatedResults });
  }, []);




  useEffect(() => {
    fetchFires();
  }, [fetchFires]);

  return (
    <div className='layout-container'>
      <Header />
      <div className='page-container'>
        <FiresFilter></FiresFilter>
        {fires.length === 0 ? (
          <div className='loading'>
            <p>Loading...</p>
          </div>
        ) : (
          <FiresTable fires={fires.results}></FiresTable>
        )}
        <Pagination></Pagination>
        <FiresMap></FiresMap>
      </div>
      <Footer />
    </div>
  );
};

export default App;
