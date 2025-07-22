import Home from './pages/Home';
import BelleBio from './pages/BelleBio';
import Deramus from './pages/DeramusBio';
import Kennedy from './pages/KennedyBio';
import Kandy from './pages/KandyBio';
import Abbey from './pages/AbbeyBio';
import Lloyd from './pages/LloydBio';
import Lanning from './pages/LanningBio';
import King from './pages/KingBio';
import Mccullough from './pages/McculloughBio';
import Wilson from './pages/WilsonBio';
import MurphyBio from './pages/MurphyBio';
import WrightBio from './pages/WrightBio';
import ZornBio from './pages/ZornBio';
import Programs from './pages/Programs';
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
        <Route path='/kennedybio' element={<Kennedy />} />
        <Route path='/kandybio' element={<Kandy />} />
        <Route path='/abbeybio' element={<Abbey />} />
        <Route path='/lloydbio' element={<Lloyd />} />
        <Route path='/lanningbio' element={<Lanning />} />
        <Route path='/mcculloughbio' element={<Mccullough />} />
        <Route path='/wilsonbio' element={<Wilson />} />
        <Route path='/murphybio' element={<MurphyBio />} />
        <Route path='/wrightbio' element={<WrightBio />} />
        <Route path='/kingbio' element={<King />} />
        <Route path='/zornbio' element={<ZornBio />} />
        <Route path='/programs' element={<Programs />}/>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
