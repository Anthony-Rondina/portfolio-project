import './App.css';
import { Route, Routes } from 'react-router-dom'
import BioPage from './pages/BioPage/BioPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<BioPage/>}/>
    </Routes>
  );
}

export default App;
