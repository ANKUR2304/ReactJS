import Purchase from './components/Purchase';
import Cart from './components/Cart';
import Total from './components/Total';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Login/>
      <Purchase/>
      <Cart/>
      <Total/>
    </div>
  );
}

export default App;
