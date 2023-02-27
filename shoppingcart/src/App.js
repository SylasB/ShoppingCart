import './App.css';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import Item from './components/Item';
import data from './data';

function App() {
  return (
    <div className="AppContainer">
      <NavBar />
      <Homepage />
    </div>
  );
}

export default App;
