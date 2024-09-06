import './App.css';
import { Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import Header from '../header/Header';
import { BrowserRouter } from 'react-router-dom';
import LabPage from '../../pages/labPage/LabPage';

function App() {

  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path='/' element={LabPage} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
