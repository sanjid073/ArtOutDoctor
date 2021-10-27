
import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import AllService from './components/AllService/AllService';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <Router>
       <Header></Header>
       <Switch>
            <Route exact path="/">
                  <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/allservice">
              <AllService></AllService>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
       </Switch>
       <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
