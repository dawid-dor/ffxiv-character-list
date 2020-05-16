import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './bootstrap.min.css';
import Navbar from './modules/ui/Navbar';
import Footer from './modules/ui/Footer';
import Search from './modules/characters/Search';
import Characters from './modules/characters/Characters';
import CharacterDetails from './modules/characters/CharacterDetails';
import axios from 'axios';

// 26680369

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverList, setServerList] = useState([]);

  // Get server list for HTML Select
  useEffect(() => {
    axios
      .get('https://xivapi.com/servers')
      .then((response) => setServerList(response.data));
  }, []);

  // Search for character specified in query
  const searchCharacters = async (name, server) => {
    setLoading(true);
    const response = await axios.get(
      `https://xivapi.com/character/search?name=${name}&server=${server}`
    );

    setCharacters(response.data.Results);
    setLoading(false);
  };

  // Single character details (opens after clicking button "details")
  const characterDetails = async (id) => {
    setLoading(true);
    const response = await axios.get(
      `https://xivapi.com/character/${id}?extended=1&data=FC,CJ`
    );

    setDetails({
      character: response.data.Character,
      title: response.data.Character.Title.Name,
      race: response.data.Character.Race.Name,
      jobs: response.data.Character.ClassJobs,
      FC: response.data.FreeCompany,
    });
    setLoading(false);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <>
                  <Search search={searchCharacters} servers={serverList} />
                  <Characters characters={characters} loading={loading} />
                </>
              )}
            />
            <Route
              exact
              path='/character/:id'
              render={(props) => (
                <CharacterDetails
                  {...props}
                  getDetails={characterDetails}
                  details={details}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
