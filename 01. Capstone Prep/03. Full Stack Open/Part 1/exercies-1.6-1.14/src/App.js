import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({
  bad: { bad, setBad },
  neutral: { neutral, setNeutral },
  good: { good, setGood },
}) => {
  return (
    <>
      <h1>Give Feedback</h1>
      <Button text={"good"} onClick={() => setGood(good + 1)}></Button>
      <Button text={"neutral"} onClick={() => setNeutral(neutral + 1)}></Button>
      <Button text={"bad"} onClick={() => setBad(bad + 1)}></Button>
      <h2>Statistics</h2>
      {!bad && !good && !neutral ? (
        <p>Nothing to show</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text={"Good"} value={good} />
            <StatisticLine text={"Neutral"} value={neutral} />
            <StatisticLine text={"Bad"} value={bad} />
            <StatisticLine text={"All"} value={good + neutral + bad} />
            <StatisticLine
              text={"Average"}
              value={(good + neutral + bad) / 3}
            />
            <StatisticLine
              text={"Positive"}
              value={good / (good + neutral + bad)}
            />
          </tbody>
        </table>
      )}
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <Statistics
      bad={{ bad, setBad }}
      neutral={{ neutral, setNeutral }}
      good={{ good, setGood }}
    />
  );
};

export default App;
