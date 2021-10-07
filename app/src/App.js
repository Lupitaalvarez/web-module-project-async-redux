import { connect } from 'react-redux';
import './App.css';
import MemeList from './components/MemeList';
import data from './data/memes';

function App(props) {
  const memes = data;
  const loading = false;
   const error = "";

  return (
    <div className="App">
      <h1>SEARCH FOR MEMES</h1>
<form>
  <input />
  <button>Search</button>
</form>

{
  loading ? <h3>WE ARE LOADING</h3> : <MemeList memes={memes}/>
}

    </div>
  );
}

export default App;
