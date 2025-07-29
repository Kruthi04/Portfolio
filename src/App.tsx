import React, { useEffect, useState } from 'react';
import Portfolio from './components/portfolio/Portfolio';
export function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    // Simulate loading time to demonstrate transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);
  return <div className="w-full min-h-screen bg-gray-900">
      {isLoading ? <div className="flex items-center justify-center h-screen bg-gray-900">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div> : <div className="w-full">
          <Portfolio />
        </div>}
    </div>;
}