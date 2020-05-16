import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = ({ character: { Name, Server, Avatar, ID } }) => {
  return (
    <div className='card col-12 p-1 h-100'>
      <img src={Avatar} alt='character avatar' className='card-img-top p-4' />
      <div className='card-body text-center d-flex flex-column justify-content-around'>
        <h5 className='card-title font-weight-bold text-primary mb-4'>
          {Name}
        </h5>
        <div className='m-n2'>
          <p>
            Server: <br></br>
            <span className='font-weight-bold'>{Server}</span>
          </p>
        </div>
      </div>
      <Link to={`/character/${ID}`} className='btn btn-primary m-2'>
        Details
      </Link>
    </div>
  );
};

export default CharacterCard;
