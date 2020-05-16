import React from 'react';
import CharacterCard from './CharacterCard';
import Loading from '../ui/Loading';

const Characters = ({ characters, loading }) => {
  if (loading) return <Loading />;
  else
    return (
      <div className='row p-3 mx-2'>
        {characters.map((character) => (
          <div className='col-12 col-md-3 mt-4' key={character.ID}>
            <CharacterCard character={character} />
          </div>
        ))}
      </div>
    );
};

export default Characters;
