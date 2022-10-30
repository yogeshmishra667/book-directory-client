import HeroPage from './pages/HeroSec';
import { Route, Routes } from 'react-router-dom';
import BestSeller from './pages/bestSeller';
import GetBook from './pages/getBook';
import GetTopFive from './pages/getTopFive';
import GetLatestBook from './pages/latestBook.js';
import Delete from './pages/delete';
import { SignupForm } from './pages/form';
import Spinner from './pages/spinner';
import Signin from './pages/signin';
import Signup from './pages/signup';
import About from './pages/About';
import Contact from './pages/Contact';
import MainBook from './pages/mainBook';
import Index from './pages/index';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
