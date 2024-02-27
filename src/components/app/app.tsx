import { useState } from 'react';

import './app.scss';

export const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className='app'>
      <h1>Webpack Sandbox</h1>
      <div>
        <p>Counter:</p>
        <p className='value'>{count}</p>
        <div className='buttons'>
          <button onClick={() => setCount((prev) => prev + 1)}>inc</button>
          <button onClick={() => setCount((prev) => prev - 1)}>dec</button>
        </div>
      </div>
    </div>
  );
};
