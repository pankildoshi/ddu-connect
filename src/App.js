import './App.css';
import Home from './components/Home'
import Buzz from './components/Buzz'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Navbar id="#top" />
          <Switch>
            <Route path="/buzz">
              <Buzz />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        <Footer />
        {/* <!-- back to top button --> */}
        <a href="#top" class="top-link">
          <i class="fas fa-arrow-up"></i>
        </a>
      </Router>
  );
}

export default App;
