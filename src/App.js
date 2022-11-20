import HeroPage from './pages/HeroSec';
import { Route, Routes } from 'react-router-dom';
import BestSeller from './pages/bestSeller';
import GetTopFive from './pages/getTopFive';
import GetLatestBook from './pages/latestBook.js';
import Delete from './pages/delete';

import Spinner from './pages/spinner';
import Signin from './pages/signin';
import Signup from './pages/signup';
import About from './pages/About';
import Contact from './pages/Contact';
import MainBook from './pages/mainBook';
import Index from './pages/index';
import BookDetails from './components/bookDetails';
import MoreBooks from './pages/moreBooks';
import Success from './pages/success';
import Failed from './pages/failed';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:id" element={<BookDetails />} />
        <Route path="/moreBooks" element={<MoreBooks />} />
        <Route path="/moreBooks/:id" element={<BookDetails />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failed" element={<Failed />} />
      </Routes>
    </div>
  );
}

export default App;
