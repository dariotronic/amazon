//styles
import styles from './App.css';

//components
import Main from './components/Main'
import Menu from './components/Menu'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="main" >
        <Menu />
        <Main />
      </div>
    </div>
  );
}

export default App;
