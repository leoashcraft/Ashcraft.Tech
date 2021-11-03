import { Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import About from './pages/About';
import Layout from './components/layout/Layout';
import { UserContext } from './UserContext';
import { useState } from 'react';



function App() {
  const [ current , setCurrent] = useState(false)

  const value = {
    current, setCurrent,
  }

  return (
    <UserContext.Provider value={value}>
      <Layout>
        <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Layout>
  </UserContext.Provider>
  );
}

export default App;
