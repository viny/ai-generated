import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [d, setD] = useState<number|null>(null);

  useEffect(() => {
    // Create a new worker
    const worker = new Worker(
      new URL('./computeWorker.ts', import.meta.url),
      { type: 'module' }
    );

    // Set up the message handler to receive the result
    worker.onmessage = (event) => {
      setD(event.data);
      // Terminate the worker when done
      worker.terminate();
    };

    // Start the computation
    worker.postMessage(null);

    // Clean up the worker when the component unmounts
    return () => {
      worker.terminate();
    };
  }, []);

  return (
    <div>
      {d === null ? 'Computing...' : d}
    </div>
  );
}
