import { useState } from 'react';
import './App.css';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';
import PollOption from './PollOption';

function App() {
  const [pets, setPets] = useState([
    { option: 'Cat', count: 0 },
    { option: 'Dog', count: 0 }
  ]);
  const [count, setCount] = useState(0);

  const handleVote = (index) => {
    const newPets = [...pets];
    newPets[index].count += 1;
    setPets(newPets);
  };

  const getLeader = () => {
    if (pets[0].count === pets[1].count) {
      return `It's a tie! Both have ${pets[0].count} vote(s)`;
    }

    const leader = pets.reduce((max, pet) =>
      pet.count > max.count ? pet : max
    );
    return `${leader.option} is leading with ${leader.count} vote(s)`;
  };

  return (
    <div className="App">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <hr />

      <h1>Pet Poll</h1>
      {pets.map((pet, index) => (
        <PollOption
          key={index}
          label={pet.option}
          count={pet.count}
          onVote={() => handleVote(index)}
        />
      ))}
      <h2>{getLeader()}</h2>
    </div>
  );
}

export default App;
