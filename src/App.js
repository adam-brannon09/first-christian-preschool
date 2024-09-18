import Home from './pages/Home';
import BelleBio from './pages/BelleBio';
import Deramus from './pages/DeramusBio';
import Jami from './pages/JamiBio';
import Kennedy from './pages/KennedyBio';
import Kandy from './pages/KandyBio';
import Edwards from './pages/EdwardsBio';
import Lloyd from './pages/LloydBio';
import Lanning from './pages/LanningBio';
import King from './pages/KingBio';
import Mccullough from './pages/McculloughBio';
import Wilson from './pages/WilsonBio';
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
        <Route path='/bellebio' element={<BelleBio />} />
        <Route path='/deramusbio' element={<Deramus />} />
        <Route path='/jamibio' element={<Jami />} />
        <Route path='/kennedybio' element={<Kennedy />} />
        <Route path='/kandybio' element={<Kandy />} />
        <Route path='/edwardsBio' element={<Edwards />} />
        <Route path='/lloydbio' element={<Lloyd />} />
        <Route path='/lanningbio' element={<Lanning />} />
        <Route path='/mcculloughbio' element={<Mccullough />} />
        <Route path='/wilsonbio' element={<Wilson />} />
        <Route path='/murphybio' element={<MurphyBio />} />
        <Route path='/wrightbio' element={<WrightBio />} />
        <Route path='/kingbio' element={<King />} />
        <Route path='/zornbio' element={<ZornBio />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
