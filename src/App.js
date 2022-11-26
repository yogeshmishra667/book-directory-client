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
import ManageUsers from './pages/Admin/AdminUser';
import ManageBooks from './pages/Admin/AdminBook';
import AccountSetting from './pages/Setting';
import Success from './pages/success';
import Failed from './pages/failed';
import { useEffect, useState } from 'react';
import FetchAPIData from './utils/FetchAPIData';

function App() {
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    const userDataRaw = await FetchAPIData('users/getUserData', 'get');
    setUserData(userDataRaw.data.data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Index userData={userData} />} />
        <Route path="/:id" element={<BookDetails />} />
        <Route path="/moreBooks" element={<MoreBooks />} />
        <Route path="/moreBooks/:id" element={<BookDetails userData={userData} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AccountSetting userData={userData} />} />
        <Route path="/admin/manageUsers" element={<ManageUsers />} />
        <Route path="/admin/manageBooks" element={<ManageBooks />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failed" element={<Failed />} />
      </Routes>
    </div>
  );
}

export default App;
