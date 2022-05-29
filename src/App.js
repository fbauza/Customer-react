import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CustomerContainer from './containers/CustomerContainer';
import HomeContainer from './containers/HomeContainer';

class App extends Component {
  renderHome = () => <HomeContainer />
  
  renderCustomerContainer = () => <h1>Customer container</h1>

  renderCustomerListContainer = () => <CustomerContainer />

  renderCustomerNewContainer = () => <h1>Customer New container</h1>

  render() {
    return (
      <Router>
        <Route exact path="/" component={this.renderHome} />
        <Route exact path="/customers" component={this.renderCustomerListContainer} />
        <Switch>
          <Route exact path="/customers/new" component={this.renderCustomerNewContainer} />
          <Route exact path="/customers/:dni" component={this.renderCustomerContainer} />
        </Switch>
      </Router>
    );
  }
}

export default App;
