import * as math from './math.js';

export const doAdd      = (a, b) => math.add(a, b);
export const doSubtract = (a, b) => math.subtract(a, b);
export const doMultiply = (a, b) => math.multiply(a, b);
export const doDivide   = (a, b) => math.divide(a, b);

function App() {
  return (
    <div className="App">
      <h5>testing</h5>
    </div>
  );
}

export default App;
