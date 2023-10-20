import FiresFilter from '../fires.filter/fires.filter';
import FiresMap from '../fires.map/fires.map';
import FiresTable from '../fires.table/fires.table';
import Footer from '../footer/footer';
import Header from '../header/header';
import Pagination from '../pagination/pagination';
import './App.scss';

const App = () => {
  return (
    <div className='layout-container'>
      <Header />
      <div className='page-container'>
        <FiresFilter></FiresFilter>
        <FiresTable></FiresTable>
        <Pagination></Pagination>
        <FiresMap></FiresMap>
      </div>
      <Footer />
    </div>
  );
};

export default App;
