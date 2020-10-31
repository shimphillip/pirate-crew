import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pirates from './components/Pirates';
import './App.css';
import AddPirate from './components/AddPirate';

/**
 * Routing for Single Page App
 * Could've used server side rendering using Next.js
 */
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Pirates />
          </Route>
          <Route exact path="/pirates">
            <Pirates />
          </Route>
          <Route exact path="/add">
            <AddPirate />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
