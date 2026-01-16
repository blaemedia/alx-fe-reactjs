import { useState } from 'react';

const Counter = () => {
  // State to track count
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Display current count */}
      <p>Count: {count}</p>

      {/* Counter buttons */}
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
