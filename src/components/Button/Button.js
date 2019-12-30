import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ name, color, wide }) => (
  <button
    type="button"
    className={`Button ${wide ? 'btn-wide' : 'btn-normal'} ${color}`}
  >
    { name }
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
