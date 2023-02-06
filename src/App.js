import logo from './logo.svg';
import './App.css';
import Header from './components/Home/header/Header';
import { BrowserRouter, Switch, Route, Link, Router } from "react-router-dom";
import Feature from './components/Feature/Feature';
import About from './components/About/About';
import aboutimage from './images/bossi.webp';
import aboutimage1 from './images/sticker.jpeg'
import Presentation from './components/Presentation/Presentation';
import Contact from './components/Contact/Contact';
function App() {
  return (
   <div className='App'>
   <Header/>
   <Feature/>
   <About image={aboutimage} title="Boss Olivia" button="Get the App"/>
   <Presentation/>

   <About image={aboutimage1} title="Be like Olivia" button="Get the App"/>
   <Contact/>
   {/* <Router>
   <Header/> */}
    {/* <Switch>
      <Route path='/' exact></Route>
    </Switch>
   </Router> */}
   </div>
  );
}

export default App;
