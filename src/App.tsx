import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Test from './components/Test';
import Result from './components/Result';

const App: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [testStarted, setTestStarted] = useState(false);
  const [testSubmitted, setTestSubmitted] = useState(false);

  const handleUserCreated = (id: string) => {
    setUserId(id);
  };

  const handleStartTest = () => {
    setTestStarted(true);
  };

  const handleSubmitTest = () => {
    setTestSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {!userId && !testStarted && !testSubmitted && (
          <LandingPage onGetStarted={() => setUserId('')} />
        )}
        {userId === '' && <Login onUserCreated={handleUserCreated} />}
        {userId && userId !== '' && !testStarted && !testSubmitted && (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Welcome, {userId}!</h2>
            <p className="mb-6 text-gray-600">Are you ready to start the test?</p>
            <button
              onClick={handleStartTest}
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Start Test
            </button>
          </div>
        )}
        {testStarted && !testSubmitted && <Test onSubmit={handleSubmitTest} />}
        {testSubmitted && <Result />}
      </div>
    </div>
  );
};

export default App;