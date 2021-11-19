import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Monster from './components/Monsters';
import Spell from './components/Spells';
import Trap from './components/Traps';
import ASpell from './components/ASpell';
import ATrap from './components/ATrap';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <Switch>

        <Route path="/cards/spells/:id">
          <ASpell />
        </Route>

        <Route path="/cards/traps/:id">
          <ATrap />
        </Route>

        <Route path="/cards/monsters">
          <Monster />
        </Route>

        <Route path="/cards/spells">
          <Spell />
        </Route>

        <Route path="/cards/traps">
          <Trap />
        </Route>

        <Route path="/cards/shop">
          <Shop />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
