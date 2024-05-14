import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Wedding from './components/Menu/Wedding';
import WeddingList from './pages/WeddingList';
import Homepages from './pages/Homepages';
import YearbookList from './pages/YearbookList';
import ComproVideoList from './pages/ComproVideoList';
import WeddingEdit from './pages/WeddingEdit';
import YearbookEdit from './pages/YearbookEdit';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/wedding" element={<WeddingList />} />
        <Route path="/yearbook" element={<YearbookList />} />
        <Route path="/comprovideo" element={<ComproVideoList />} />
        <Route path="/weddingedit" element={<WeddingEdit />} />
        <Route path="/yearbookedit" element={<YearbookEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
