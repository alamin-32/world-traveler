import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import Destinations from './Pages/Destinations/Destinations';
import Home from './Pages/Home/Home';
import News from './Pages/News/News';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import Tours from './Pages/Tours/Tours';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/destinations' element={<Destinations></Destinations>}></Route>
        <Route path='/tours' element={<Tours></Tours>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/news' element={<News></News>}></Route>
        <Route path='/contactUs' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
