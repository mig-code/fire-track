import { useEffect, useState } from 'react';

import FiresFilter from '../fires.filter/fires.filter';
import FiresMap from '../fires.map/fires.map';
import FiresTable from '../fires.table/fires.table';
import Footer from '../footer/footer';
import Header from '../header/header';
import Pagination from '../pagination/pagination';
import './App.scss';

import { getFires } from '../../services/api';

const App = () => {
  const [fires, setFires] = useState([]);

  const fetchFires = async () => {
    const fires = await getFires();
    setFires(fires);
  };

  useEffect(() => {
    fetchFires();
  }, []);
  console.log(fires);

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
