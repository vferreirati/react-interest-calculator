import { useState } from 'react';
import CalculatorInput from './CalculatorInput';
import { calculateInvestmentResults } from '../util/investment';
import ResultTable from './ResultTable';

const Calculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(15000);
  const [annualInvestment, setAnnualInvestment] = useState(1500);
  const [expectedReturn, setExpectedReturn] = useState(2);
  const [duration, setDuration] = useState(10);

  const tableData = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  function handleInitialInvestmentChange(event) {
    let value = 0;

    if (event.target.value.length !== 0) {
      value = parseInt(event.target.value);
    }
    setInitialInvestment(value);
  }

  function handleAnnualInvestmentChange(event) {
    let value = 0;

    if (event.target.value.length !== 0) {
      value = parseInt(event.target.value);
    }
    setAnnualInvestment(value);
  }

  function handleExpectedReturnChange(event) {
    let value = 0;

    if (event.target.value.length !== 0) {
      value = parseInt(event.target.value);
    }
    setExpectedReturn(value);
  }

  function handleDurationChange(event) {
    let value = 0;

    if (event.target.value.length !== 0) {
      value = parseInt(event.target.value);
    }
    setDuration(value);
  }

  console.log(tableData);

  return (
    <>
      <div id="user-input" className="input-group">
        <CalculatorInput
          label="Initial investment"
          value={initialInvestment}
          onChange={handleInitialInvestmentChange}
        />
        <CalculatorInput
          label="Annual investment"
          value={annualInvestment}
          onChange={handleAnnualInvestmentChange}
        />
        <CalculatorInput
          label="Expected return"
          value={expectedReturn}
          onChange={handleExpectedReturnChange}
        />
        <CalculatorInput
          label="Duration"
          value={duration}
          onChange={handleDurationChange}
        />
      </div>

      <ResultTable tableData={tableData} />
    </>
  );
};

export default Calculator;
