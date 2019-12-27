import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.PureComponent {
  render() {
    const { result } = this.props;
    return (
      <div className="Display">
        { result }
      </div>
    );
  }
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: 0,
};

export default Display;
