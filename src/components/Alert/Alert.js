import React from 'react';
import './Alert.css';
import infoIcon from './info.svg';
import warningIcon from './warning.svg';
import errorIcon from './error.svg';
import successIcon from './success.svg';

export const ALERT_VARIANT = {
  INFO: 'INFO',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
};

const ALERT_CLASSES = {
  [ALERT_VARIANT.INFO]: 'alert-info',
  [ALERT_VARIANT.WARNING]: 'alert-warning',
  [ALERT_VARIANT.ERROR]: 'alert-error',
  [ALERT_VARIANT.SUCCESS]: 'alert-success',
};

const ALERT_MESSAGES = {
  [ALERT_VARIANT.INFO]: 'Info!',
  [ALERT_VARIANT.WARNING]: 'Warning!',
  [ALERT_VARIANT.ERROR]: 'Error!',
  [ALERT_VARIANT.SUCCESS]: 'Success!',
};

const ALERT_ICONS = {
  [ALERT_VARIANT.INFO]: <img src={infoIcon} alt={'infoIcon'} />,
  [ALERT_VARIANT.WARNING]: <img src={warningIcon} alt={'warningIcon'} />,
  [ALERT_VARIANT.ERROR]: <img src={errorIcon} alt={'errorIcon'} />,
  [ALERT_VARIANT.SUCCESS]: <img src={successIcon} alt={'successIcon'} />,
};

const Alert = ({
  children,
  severity = ALERT_VARIANT.INFO,
  withMessage = true,
  onClose,
}) => {
  const handleClose = () => {
    if (onClose != null) {
      onClose();
    }
  };
  return (
    <div className={`alert ${ALERT_CLASSES[severity]} alert-white rounded`}>
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-hidden="true"
        onClick={handleClose}
      >
        ×
      </button>
      <div className="icon">{ALERT_ICONS[severity]}</div>
      {withMessage && <strong>{ALERT_MESSAGES[severity]}</strong>} {children}
    </div>
  );
};

export default Alert;
