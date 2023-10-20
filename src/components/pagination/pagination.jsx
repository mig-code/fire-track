/* eslint-disable react/prop-types */

import './pagination.scss';
import { totalFiresPerRequest } from '../../services/api';

const Pagination = ({ offSetPage, setOffsetPage, totalElements }) => {
  //Math to calculate the total pages and the current page
  const totalPages = Math.ceil(totalElements / totalFiresPerRequest);
  const currentePage = offSetPage / totalFiresPerRequest + 1;

  // Handlers for pagination
  const handlePreviousPage = () => {
    if (currentePage > 1) {
      setOffsetPage(offSetPage - totalFiresPerRequest);
    }
  };

  const handleNextPage = () => {
    if (currentePage < totalPages) {
      setOffsetPage(offSetPage + totalFiresPerRequest);
    }
  };

  return (
    <div className='pagination'>
      <button className={'pagination__button'} onClick={handlePreviousPage}>
        Anterior
      </button>
      <p className='pagination__current-page'>
        {`${currentePage} / ${totalPages} `}
      </p>
      <button className='pagination__button' onClick={handleNextPage}>
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
