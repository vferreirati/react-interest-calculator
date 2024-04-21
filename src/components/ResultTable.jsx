import { formatter } from '../util/investment';

function calculateTotalInterest(
  valueEndOfYear,
  annualInvestment,
  year,
  initialInvestment
) {
  return valueEndOfYear - year * annualInvestment - initialInvestment;
}

const ResultTable = ({ tableData }) => {
  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            const totalInterest = calculateTotalInterest(
              data.valueEndOfYear,
              data.annualInvestment,
              data.year,
              data.initialInvestment
            );
            const totalInvested = data.valueEndOfYear - totalInterest;

            return (
              <tr key={data.year}>
                <td>{data.year}</td>
                <td>{formatter.format(data.valueEndOfYear)}</td>
                <td>{formatter.format(data.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
