import { useState } from 'react';
import ReactConfetti from 'react-confetti';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const handleConfetti = () => {
    setIsConfettiActive(true);
    setTimeout(() => setIsConfettiActive(false), 5000); // Stop confetti after 5 seconds
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Blue Confetti App</h1>
      <Button
        onClick={handleConfetti}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Celebrate with Blue Confetti!
      </Button>
      {isConfettiActive && (
        <ReactConfetti
          width={window.innerWidth}
          height={window.innerHeight}
          colors={['#2196f3', '#90caf9', '#1976d2', '#bbdefb', '#64b5f6']}
        />
      )}
    </div>
  );
};

export default Index;
