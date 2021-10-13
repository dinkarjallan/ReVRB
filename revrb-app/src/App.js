import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from "./components/pages/Home"
import Display from './components/pages/Display';
import Register from './components/pages/Register';
import Podcast from './components/pages/Podcast';
import Radio from './components/pages/Radio';
import Explore from './components/pages/Explore';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          {/* switch-rendering pages, based on the Link URLs */}
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/explore" component={Explore} />
          <Route path="/podcast" component={Podcast} />
          <Route path="/radio" component={Radio} />
          <Route path="/songs" component={Display} />+
        </Switch>
      </Router>
    </>
  );
}

export default App;
