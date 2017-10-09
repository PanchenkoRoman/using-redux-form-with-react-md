import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';

const PHONE_TEXT = 'Invalid phone number';
const REQUIRED_TEXT = 'This field is required';

const required = value => (value ? undefined : PHONE_TEXT);
const phoneNumber = value =>
  (value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? REQUIRED_TEXT
    : undefined);


const renderField = field => (
  <div className="md-grid">
    <TextField
      {...field.input}
      id={field.id}
      label={field.label}
      lineDirection="center"
      placeholder={field.placeholder}
      required={field.required}
      className="md-cell md-cell--bottom"
      error={!!((field.meta.touched && field.meta.error))}
      errorText={field.meta.error}
      type={field.type}
    />
  </div>
);

const ContactForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="firstName"
      id="first"
      label="First name"
      placeholder="enter your first name"
      type="text"
      required
      validate={required}
      component={renderField}
    />
    <Field
      name="lastName"
      id="last"
      label="Last name"
      placeholder="enter your last name"
      type="text"
      component={renderField}
    />
    <Field
      name="phone"
      id="phone"
      label="Phone"
      placeholder="enter your phone"
      type="tel"
      required
      validate={[required, phoneNumber]}
      component={renderField}
    />
    <Field
      name="email"
      id="mail"
      label="Email"
      placeholder="enter your email"
      type="email"
      component={renderField}
    />
    <Button type="submit" flat primary swapTheming>Submit</Button>
  </form>
);

ContactForm = reduxForm({
  form: 'contact',
})(ContactForm);

export default ContactForm;
