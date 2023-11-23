import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { ContactStyles } from './ContactStyles';
import Alert, { ALERT_VARIANT } from '../Alert/Alert';

const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const validateFormData = ({ name, email, content }) => {
  return {
    name: name.length > 0,
    email: emailRegex.test(email),
    content: content.length > 0,
  };
};

const Contact = () => {
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [captcha, setCaptcha] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    content: '',
  });
  const [touched, setTouched] = React.useState({
    name: false,
    email: false,
    content: false,
  });
  const errors = validateFormData(formData);
  const isSubmitDisabled = !(captcha && errors.name && errors.email && errors.content);

  const handleClick = () => {
    setError(false);
    setSuccess(false);
  };

  const handleChange = event => {
    setTouched({
      ...touched,
      [event.target.name]: true,
    });
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCaptcha = () => {
    setCaptcha(true);
  }
  const handleCaptchaError = () => {
    setCaptcha(false);
  }

  const handleSubmit = async event => {
    event.preventDefault();
    if (!isSubmitDisabled) {
      setTouched({
        name: false,
        email: false,
        content: false,
      });
      const url = process.env.GATSBY_CONTACT_API;
      try {
        const response = await fetch(url, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.status < 400) {
          setSuccess(true);
        } else {
          setError(true);
        }
      } catch (e) {
        setError(true);
      }

    }
  };

  return (
    <ContactStyles>
      <form name="contact" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            onChange={handleChange}
            placeholder="Your name"
            type="text"
            name="name"
            required
          />
          {!errors.name && touched.name && (
            <div className="error-message">Please provide your name</div>
          )}
        </div>
        <div className="input-container">
          <input
            onChange={handleChange}
            placeholder="Your email"
            type="email"
            name="email"
            required
          />
          {!errors.email && touched.email && (
            <div className="error-message">Please provide a valid email</div>
          )}
        </div>
        <div className="input-container">
          <textarea
            onChange={handleChange}
            placeholder="Your message"
            name="content"
            rows="5"
            required
          ></textarea>
          {!errors.content && touched.content && (
            <div className="error-message">Message cannot be empty</div>
          )}
        </div>
        <ReCAPTCHA
          sitekey={process.env.GATSBY_CAPTCHA_SITE_KEY}
          onChange={handleCaptcha}
          onErrored={handleCaptchaError}
          onExpired={handleCaptchaError}
        />
        <button
          disabled={isSubmitDisabled}
          className="btn"
          type="submit"
          style={{ marginTop: '10px' }}
        >
          Send Message
        </button>
      </form>
      {error && (
        <Alert severity={ALERT_VARIANT.ERROR} onClose={handleClick}>
          Cannot connect to the mail server, please contact{' '}
          <a href={`mailto:ceo@zhiva.org`}>ceo@zhiva.org</a> directly. <br/>We are very
          sorry for your inconvenience.
        </Alert>
      )}
      {success && (
        <Alert severity={ALERT_VARIANT.SUCCESS} onClose={handleClick}>
          Message has been sent. We'll try to answer as soon as possible. <br/>Have a
          nice day.
        </Alert>
      )}
    </ContactStyles>
  );
};

export default Contact;
