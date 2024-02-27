import logo from './logo.svg';
import './App.css';
import { MyContextProvider } from './MyContext';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
    <MyContextProvider>
      <MyComponent />
    </MyContextProvider>
    </div>
  );
}

export default App;
