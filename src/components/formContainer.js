import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './form';
import { fetchData } from '../actions/index';

class ContactPage extends Component {
    submit = (values) => {
      fetchData(values);
    };

    render() {
      return (
        <ContactForm onSubmit={this.submit} />
      );
    }
}

export default connect(null, { fetchData })(ContactPage);
