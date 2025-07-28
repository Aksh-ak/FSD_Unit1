import React from 'react';
import './index.css'; // or App.css if that's where your Tailwind directives are

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 p-4 rounded-lg shadow-lg">
        Hello Tailwind!
      </h1>
    </div>
  );
}

export default App;