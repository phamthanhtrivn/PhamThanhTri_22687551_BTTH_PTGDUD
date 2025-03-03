import { useState } from "react";
import "./Calculator.css"

const Calculator = () => {
  const [invest, setInvest] = useState("");
  const [rate, setRate] = useState("");
  const [goal, setGoal] = useState("");
  const [data, setData] = useState([]);

  const handleCalculate = (e) => {
    e.preventDefault();
    var money = Number(invest);
    var year = new Date().getFullYear();
    var result = [];

    while (money < Number(goal)) {
      let endYearMoney = money + (money * Number(rate)) / 100;
      result.push({ year, money, rate, endYear: endYearMoney.toFixed(2) });
      money = Number(endYearMoney.toFixed(2));
      year++;
    }
    setData(result);
  };

  const handleClear = () => {
    setInvest('')
    setRate('')
    setGoal('')
    setData('')
  }

  return (
    <>
      <div>
        <form onSubmit={handleCalculate}>
          <div>
            <label htmlFor="">Input Your Invest Money</label>
            <input
              value={invest}
              onChange={(e) => setInvest(e.target.value)}
              type="number"
              required
            />
          </div>
          <div>
            <label htmlFor="">Input Rate:</label>
            <input
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              type="number"
              required
            />
          </div>
          <div>
            <label htmlFor="">Input Your Goal:</label>
            <input
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              type="number"
              required
            />
          </div>
          <button type="submit">Calculate</button>
        </form>
        <button onClick={handleClear}>Clear</button>
      </div>
      <div>
        {data && (
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Money</th>
                <th>Rate</th>
                <th>End Year</th>
              </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.year}</td>
                        <td>{item.money}</td>
                        <td>{item.money}</td>
                        <td>{item.endYear}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Calculator;
