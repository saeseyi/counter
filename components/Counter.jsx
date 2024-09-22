"use client"; // Add this at the top of your component

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 sm:text-4xl lg:text-5xl">Counter App</h1>
        <p className="text-5xl font-semibold mb-6 sm:text-6xl lg:text-7xl">{count}</p>

        <div className="space-x-2 sm:space-x-4">
          <button
            onClick={decrement}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-red-500 text-white rounded hover:bg-red-600 w-full sm:w-auto mt-2 sm:mt-0"
          >
            Decrement
          </button>
          
          <button
            onClick={increment}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white rounded hover:bg-blue-600 w-full sm:w-auto"
          >
            Increment
          </button>

          <button
            onClick={reset}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-500 text-white rounded hover:bg-gray-600 w-full sm:w-auto mt-2 sm:mt-0"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
