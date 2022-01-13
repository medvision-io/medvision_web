import React from 'react';
import { ContactStyles } from './ContactStyles';
import Alert, { ALERT_VARIANT } from '../Alert/Alert';

const Contact = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setTimeout(() => {
      setOpen(!open);
    }, open ? 0 : 1000)
  };
  return (
    <ContactStyles>
      {/*<form name="contact">*/}
      <input placeholder="Your name" type="text" name="name" />
      <input placeholder="Your email" type="email" name="email" />
      <textarea placeholder="Your message" name="message" rows="5"></textarea>
      <button className="btn" type="submit" onClick={handleClick}>
        Send Message
      </button>
      {/*</form>*/}
      {open && (
        <Alert severity={ALERT_VARIANT.ERROR} onClose={handleClick}>
          Cannot connect to the mail server, please contact <a href={`mailto:ceo@zhiva.ai`} >ceo@zhiva.ai</a> directly. We are very sorry for your inconvenience.
        </Alert>
      )}
    </ContactStyles>
  );
};

export default Contact;
