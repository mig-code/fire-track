import { useEffect, useState } from 'react';

import FiresFilter from '../fires.filter/fires.filter';
import FiresMap from '../fires.map/fires.map';
import FiresTable from '../fires.table/fires.table';
import Footer from '../footer/footer';
import Header from '../header/header';
import Pagination from '../pagination/pagination';
import './App.scss';
import { listOfFires } from '../../mocks/fires';

const App = () => {
  const [fires, setFires] = useState([]);

  useEffect(() => {
    setFires(listOfFires.results);
  }, []);

  return (
    <div className='layout-container'>
      <Header />
      <div className='page-container'>
        <FiresFilter></FiresFilter>
        <FiresTable fires={fires}></FiresTable>
        <Pagination></Pagination>
        <FiresMap></FiresMap>
      </div>
      <Footer />
    </div>
  );
};

export default App;
