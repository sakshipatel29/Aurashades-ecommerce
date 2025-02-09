import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Basket from './pages/Basket';
import { StoreProvider } from './context-and-reduce/StoreContext';

function App() {
  return (
    <StoreProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
