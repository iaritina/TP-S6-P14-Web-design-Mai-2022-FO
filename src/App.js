import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavMenu from './components/NavMenu';
import Content from './pages/Content';
import { HelmetProvider } from 'react-helmet-async';
function App() {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Home />} />
          <Route path='/content/:date/:id/ia/:title' element={<Content />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
