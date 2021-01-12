import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.scss'
import Producer from './components/producer'
import Operator from './components/operator'
import Dispatcher from './components/dispatcher'
import StartPage from './components/start-page'
import Confirmation from './components/afterConfirmationMobile'
import GeneralInputs from './components/form';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={StartPage}/>  
          <Route exact path="/producer" component={Producer}/>
          <Route exact path="/operator" component={Operator}/>
          <Route exact path="/dispatcher" component={Dispatcher}/>
          <Route exact path="/confirmation" component={Confirmation}/>
          <Route exact path="/form" component={GeneralInputs}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
