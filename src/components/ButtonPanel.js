import React from 'react';
import Button from './Button';

class ButtonPanel extends React.PureComponent {
  render() {
    const buttonNames = {
      'group-1': ['AC', '+/-', '%', '÷'],
      'group-2': ['7', '8', '9', 'X'],
      'group-3': ['4', '5', '6', '-'],
      'group-4': ['1', '2', '3', '+'],
      'group-5': ['0', '.', '+', ''],
    };

    return (

      <div className="ButtonPanel">
        {
          Object.keys(buttonNames).map(groupName => (
            <div id={groupName} key={groupName}>
              {
                buttonNames[groupName].map(buttonName => (
                  buttonName ? <Button name={buttonName} key={buttonName} /> : ''
                ))
              }
            </div>
          ))
        }
      </div>
    );
  }
}

export default ButtonPanel;
