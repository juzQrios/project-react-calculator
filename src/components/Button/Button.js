import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends React.PureComponent {
  handleClick = (buttonName) => {
    const { clickHandler } = this.props;
    return clickHandler(buttonName);
  }

  render() {
    const { name, color, wide } = this.props;
    return (
      <button
        type="button"
        className={`Button ${wide ? 'btn-wide' : 'btn-normal'} ${color}`}
        onClick={() => this.handleClick(name)}
      >
        { name }
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
