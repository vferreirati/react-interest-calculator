const CalculatorInput = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="number" value={value} onChange={onChange} required />
    </div>
  );
};

export default CalculatorInput;
