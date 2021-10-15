import './App.css';
import { Switch, Route } from 'react-router-dom'
import Projects from './components/Projects'
import Home from './components/Home';

function App() {
  return (
    <Switch>
      <Route path="/my-work">
        <Projects />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
