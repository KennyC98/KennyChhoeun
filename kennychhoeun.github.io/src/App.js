import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import Projects from './components/Projects.js';
import Home from './components/Home.js';
import Resume from './components/Resume.js';

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/Home' component={Home} />
        <Route path='/Projects' component={Projects} />
        <Route path='/Resume' component={Resume} />
      </div>
      </Router>
  );
}

export default App;
