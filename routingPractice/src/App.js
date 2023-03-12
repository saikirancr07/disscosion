import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="bg-container">
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </div>
)

export default App
