
import { Routes, Route } from 'react-router-dom';
import LabPage from '../../pages/labPage/LabPage';

function PageRouting() {

  return (
    <>
        <Routes>
            <Route path='/' element={LabPage} />
        </Routes>
    </>
  );
}

export default PageRouting;
