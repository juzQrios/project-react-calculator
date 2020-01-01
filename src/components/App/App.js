/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import calculate from '../../logic/calculate';
import './App.css';
import Display from '../Display/Display';
import ButtonPanel from '../ButtonPanel/ButtonPanel';

class App extends React.Component {
  render() {
    const calculatorData = { total: null, next: null, operation: null };
    const { total, next } = calculate(calculatorData, '0');
    return (
      <div className="App">
        <Display result={total || next} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
