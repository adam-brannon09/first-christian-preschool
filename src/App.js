import Home from './pages/Home';
import MurphyBio from './pages/MurphyBio';
import WrightBio from './pages/WrightBio';
import ZornBio from './pages/ZornBio';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoogleFontLoader from 'react-google-fonts';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/murphybio' element={<MurphyBio />} />
        <Route path='/wrightbio' element={<WrightBio />} />
        <Route path='/zornbio' element={<ZornBio />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
