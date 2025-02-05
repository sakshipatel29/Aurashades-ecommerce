import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Basket from './pages/Basket';
import { StoreProvider } from './context-and-reduce/StoreContext';

function App() {
  return (
    <div className="App">
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/basket' element={<Basket />}/>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
    </div>
  );
}

export default App;
