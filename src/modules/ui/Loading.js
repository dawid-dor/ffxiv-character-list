import React from 'react';
import loader from '../../images/loading.gif';

const Loading = () => {
  return (
    <div className='text-center mt-5'>
      <img src={loader} alt='Loading...' />
    </div>
  );
};

export default Loading;
