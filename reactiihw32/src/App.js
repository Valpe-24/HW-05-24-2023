import './App.css';
import { DisplayArray } from './DisplayArray';

function App() {
  return (
    <div className="App">
      <DisplayArray animalList={['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']} />

    </div>
      
  );
}

export default App;
