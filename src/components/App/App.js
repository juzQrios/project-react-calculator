/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import calculate from '../../logic/calculate';
import './App.css';
import Display from '../Display/Display';
import ButtonPanel from '../ButtonPanel/ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    this.setState((state) => {
      const { total, next, operation } = state;
      return calculate({ total, next, operation }, buttonName);
    });
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="App">
        <Display result={String(next || total || 0)} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
