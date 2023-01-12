import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Greet name="Akshay" city="Bareilly">
        <p>Hello from children</p>
      </Greet>
      <Greet name="Aditya" city="Delhi">
        <button>Submit</button>
      </Greet>
      <Greet name="Aman" city="Raipur"></Greet> 
      <Welcome name="Yash" city="Patna"/>
      <Message />
    </div>
  );
}

export default App;
