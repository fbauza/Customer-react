import React from 'react'
import PropTypes from 'prop-types'
import CustomerListItem from './CustomerListItem'

const CustomerList = ({customers, urlPath }) => {
  console.log("customers", customers);
  return (
    <div>
      <div className="div-customer-list">
        {
          customers.map( c => 
            <CustomerListItem
              key={c.dni}
              name={c.name}
              dni={c.dni}
              editAction={'Editar'}
              deleteAction={'Borrar'}
              urlPath={urlPath}
            >  
            </CustomerListItem>
            )
        }
      </div>
    </div>
  )
}

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired,
}

export default CustomerList
