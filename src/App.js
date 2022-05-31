import './App.css';
import { Route, Routes } from 'react-router-dom'
import BioPage from './pages/BioPage/BioPage';
import Amazon from "../src/pages/Amazon"
import Atelier from "../src/pages/Atelier"
import CYOA from "../src/pages/CYOA"
import Pazzak from "../src/pages/Pazzak"
import Pokemon from "../src/pages/Pokemon"
function App() {
  return (
    <Routes>
      <Route path="/" element={<BioPage />} />
      <Route path="/amazon" element={<Amazon />} />
      <Route path="/atelier-collab" element={<Atelier />} />
      <Route path="/choose-your-own-adventure" element={<CYOA />} />
      <Route path="/pazaak" element={<Pazzak />} />
      <Route path="/pokemon" element={<Pokemon />} />
    </Routes>
  );
}

export default App;
