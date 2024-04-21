import Header from './components/Header';
import HeaderImage from './assets/investment-calculator-logo.png';
import Calculator from './components/Calculator';

function App() {
  return (
    <>
      <Header label="Investment calculator" image={HeaderImage} />
      <Calculator />
    </>
  );
}

export default App;
