import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from './../components/AppFrame';
import CustomerList from './../components/CustomerList';
import CustomerActions from './../components/CustomerActions';
import { fetchCustomers } from '../actions/fetchCustomers';
import { getCustomer } from '../selectors/customers';

class CustomerContainer extends Component {

  componentDidMount(){
    this.props.fetchCustomers();
  }

  handleAddNew = () => {
    this.props.history.push('/customers/new');
  };

  renderBody = customers => (
    <div>
      <CustomerList 
          customers={customers} 
          urlPath={'customers/'} 
      >
      </CustomerList>
      <CustomerActions>
        <button onClick={this.handleAddNew}>Nuevo Cliente</button>
      </CustomerActions>
    </div>
  );

  render() {
    return (
      <div>
        <AppFrame header={'Listado de clientes'}
          body={this.renderBody(this.props.customers)}>
        </AppFrame>        
      </div>
    )
  }
};

CustomerContainer.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
};

const mapDispatchToProps = { fetchCustomers };
/*
const mapDispatchToProps = dispatch => (
  {
    fetchCustomers: () => dispatch(fetchCustomers())
  }
)
*/

CustomerContainer.defaultProps = {
  customers: [ ]
};

const mapStateToProps = state => ({
  customers: getCustomer(state)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerContainer));
