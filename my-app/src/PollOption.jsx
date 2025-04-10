function PollOption({ label, count, onVote }) {
    return (
      <div style={{ marginBottom: '10px' }}>
        <h3>{label}</h3>
        <p>Votes: {count}</p>
        <button onClick={onVote}>Vote for {label}</button>
      </div>
    );
  }
  
  export default PollOption;
  