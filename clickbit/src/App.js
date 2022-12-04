import logo from './logo.svg';
import './App.css';
import { Navbar } from './navbar';
import { Banner } from './banner';
import { Footer } from './footer';
import { Review } from './review';
import { Services } from './services';
import { Looking } from './looking';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
   <div className='window'>
    <Navbar/>
    <Banner/>
    <Services/>
    <Looking/>
    <Review/>
    <Footer/>

   </div>
   );
}

export default App;
