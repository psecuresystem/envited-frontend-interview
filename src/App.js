import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import CreateEvent from './pages/Create';
import Event from './pages/Event';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<CreateEvent />} />
          <Route path='/event' element={<Event />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
