import './App.css';
import { Input } from '../Input';

function App() {
  return (
    <div className="App">
        <h1>Welcome to Wally's Widgets!</h1>
        <h4>Please enter the number of widgets you would like to order, and we will calculate the packs that will be sent out to you.</h4>
        <Input />
    </div>
  );
}

export default App;
