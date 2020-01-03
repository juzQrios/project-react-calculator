import React from 'react';
import PropTypes from 'prop-types';
import './ButtonPanel.css';
import Button from '../Button/Button';

class ButtonPanel extends React.PureComponent {
  handleClick = (buttonName) => {
    const { clickHandler } = this.props;
    return clickHandler(buttonName);
  };

  render() {
    const buttonNames = {
      'group-1': ['AC', '+/-', '%', '÷'],
      'group-2': ['7', '8', '9', 'X'],
      'group-3': ['4', '5', '6', '-'],
      'group-4': ['1', '2', '3', '+'],
      'group-5': ['0', '.', '=', ''],
    };

    return (

      <div className="ButtonPanel">
        {
          Object.keys(buttonNames).map(groupName => (
            <div id={groupName} className="group" key={groupName}>
              {
                buttonNames[groupName].map(buttonName => (
                  buttonName ? (
                    <Button
                      name={buttonName}
                      key={buttonName}
                      wide={buttonName === '0'}
                      color={['÷', 'X', '-', '+', '='].includes(buttonName) ? 'orange' : 'light-gray'}
                      clickHandler={this.handleClick}
                    />
                  ) : ''
                ))
              }
            </div>
          ))
        }
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
