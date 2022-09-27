import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import DestinationDetails from './Pages/Destinations/DestinationDetails';
import Destinations from './Pages/Destinations/Destinations';
import DestinationsList from './Pages/Destinations/DestinationsList';
import Home from './Pages/Home/Home';
import LogIn from './Pages/Login/LogIn';
import RequiredAuth from './Pages/Login/RequiredAuth';
import SignUp from './Pages/Login/SignUp';
import News from './Pages/News/News';
import NotFound from './Pages/NotFound/NotFound';
import OurTeam from './Pages/OurTeam/OurTeam';
import OurTeams from './Pages/OurTeam/OurTeams';
import Reviews from './Pages/Review/Reviews';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import TourDetails from './Pages/Tours/TourDetails';
import Tours from './Pages/Tours/Tours';

function App() {
  return (
    <div className='page-container'>
      <div className="contend-wrap">
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          {/* <Route path='/destinations' element={<Destinations></Destinations>}></Route> */}
          <Route
            path='/destinationList' element={
              <RequiredAuth><DestinationsList></DestinationsList></RequiredAuth>}>
          </Route>

          <Route path='/destinationDetails/:id' element={<DestinationDetails></DestinationDetails>}></Route>
          <Route path='/ourTeams' element={<OurTeams></OurTeams>}></Route>

          <Route path='/tours' element={<RequiredAuth><Tours></Tours></RequiredAuth>}></Route>

          <Route path='/tourDetails/:id' element={<TourDetails></TourDetails>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/news' element={<News></News>}></Route>
          <Route path='/reviews' element={<RequiredAuth><Reviews></Reviews></RequiredAuth>}></Route>
          <Route path='/logIn' element={<LogIn></LogIn>}></Route>
          <Route path='/signUp' element={<SignUp></SignUp>}></Route>
          <Route path='/contactUs' element={<RequiredAuth><Contact></Contact></RequiredAuth>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
