import { useState } from 'react';

function ScoreKeeper() {
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    setScore(score + 5);
  };

  const decreaseScore = () => {
    setScore(score - 5);
  };

  return (
    <div>
      <p>Score: {score}</p>
      <button onClick={increaseScore}>Increase by 5</button>
      <button onClick={decreaseScore}>Decrease by 5</button>
    </div>
  );
}

export default ScoreKeeper;