//styles
import styles from './App.css';

//components
import {useState} from 'react';
import Main from './components/Main'
import Menu from './components/Menu'
import Navbar from './components/Navbar'

function App() {

  const [cart,setCart] = useState(0)


  return (
    <div>
      <div>
        <Navbar cart={cart} />
      </div>
      <div className="main" >
        <Menu />
        <Main cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}

export default App;
