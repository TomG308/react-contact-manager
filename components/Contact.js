import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {  
  render() {
    const {contact} = this.props

    return (
      <div className='card card-body mb-3'>
        <h4>{contact.name}</h4>
        <ul className='list-group'>
          <li className='list-group-item'>{contact.phone}</li>
          <li className='list-group-item'>{contact.email}</li>
        </ul>
      </div>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default Contact