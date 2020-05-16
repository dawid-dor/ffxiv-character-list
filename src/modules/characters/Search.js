import React, { useState } from 'react';

const Search = ({ search, servers }) => {
  const [name, setName] = useState('');
  const [server, setServer] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      alert('You must provide character name');
    } else {
      search(name, server);
      setName('');
      setServer('');
    }
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeServer = (e) => {
    setServer(e.target.value);
  };

  return (
    <div className='container text-center mt-4 px-5'>
      <form onSubmit={onSubmit}>
        {/* Character */}
        <div className='form-group row'>
          <label
            htmlFor='characterName'
            className='col-sm-2 col-form-label text-info font-weight-bold'
          >
            Character Name
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              onChange={changeName}
              value={name}
            />
          </div>
        </div>

        {/* Server */}
        <div className='form-group row'>
          <label
            htmlFor='server'
            className='col-sm-2 col-form-label text-info font-weight-bold'
          >
            Server*
          </label>
          <div className='col-sm-10'>
            <select
              className='custom-select'
              value={server}
              onChange={changeServer}
            >
              <option value={null}></option>
              {servers.map((server, i) => (
                <option key={i} value={server}>
                  {server}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button className='btn btn-primary mb-2 px-4 py-2' type='submit'>
          Search
        </button>
        <p className='text-muted mt-2'>
          *Server field is optional (can be left blank)
        </p>
      </form>
    </div>
  );
};

export default Search;
