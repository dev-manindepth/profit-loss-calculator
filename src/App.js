import "./styles.css";
import { useState } from "react";

export default function App() {
  const [price, setPrice] = useState("");
  const [noOfStocks, setNoOfStocks] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const calculate = () => {
    if (!price || !noOfStocks || !currentPrice) {
      setResult("");
      return setError(
        "Please fill all three fields, Price No of Stocks and Current Price"
      );
    }
    if (Number(price) < Number(currentPrice)) {
      const profit = (Number(currentPrice) - Number(price)) * noOfStocks;
      const profitPercent = ((profit / price) * 100).toFixed(4);
      setResult(
        `🎉 Congratulation You have made the profit 📈 of ${profit} with profit percent of ${profitPercent}% `
      );
    } else {
      const loss = (Number(price) - Number(currentPrice)) * noOfStocks;
      const lossPercent = ((loss / price) * 100).toFixed(4);
      console.log(typeof lossPercent);

      setResult(
        `😔 Hey,You have made  loss 📉 of ${loss} and with loss percent of ${lossPercent}% `
      );
    }
    setError("");
  };
  return (
    <div className="container">
      <h1>Stock Profile & Loss Calculator</h1>
      <div className="error">{error}</div>
      <p className="input-label">Initial Price</p>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <p className="input-label">Quantity of Stocks</p>
      <input
        type="number"
        value={noOfStocks}
        onChange={(e) => setNoOfStocks(e.target.value)}
      />
      <p className="input-label">Current Price</p>
      <input
        type="number"
        value={currentPrice}
        onChange={(e) => setCurrentPrice(e.target.value)}
      />
      <button className="submit-btn" onClick={calculate}>
        Tell Me!!
      </button>
      <div className="result">{result}</div>
    </div>
  );
}
