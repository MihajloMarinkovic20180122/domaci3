import logo from './logo.svg';
import './App.css';
import MenuBar from './components/MenuBar';
import Shop from './components/Shop';

function App() {
  // const prom = <h3>Cao svima!</h3>;
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <Shop />
     
    </div>
  );
}

export default App;
