import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import DestructoringArray from './components/DestructoringArray';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Akshay" city="Bareilly">
        <p>Hello from children</p>
      </Greet>
      <Greet name="Aditya" city="Delhi">
        <button>Submit</button>
      </Greet>
      <Greet name="Aman" city="Raipur"></Greet> 
      <Welcome name="Yash" city="Patna"/> */}
      <Message />
      <Counter />
      <DestructoringArray framework="react" name="Chandler"/>
      <FunctionClick />
      <EventBind />
      <ParentComponent />
      <UserGreeting />
    </div>
  );
}

export default App;
