import { useEffect, useState } from "react";
import { ErrorBoundary } from "../ErrorBoundary";

// Component that will throw an error
const BuggyComponent = () => {
  const [shouldThrow, setShouldThrow] = useState(false);
  
  useEffect(() => {
    // Throw an error after component mounts
    if (shouldThrow) {
      throw new Error("This is a simulated error");
    }
  }, [shouldThrow]);

  return (
    <div className="p-6 space-y-4">
      <h3 className="text-lg font-semibold">Buggy Component</h3>
      <p>This component will throw an error when the button is clicked.</p>
      <button 
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        onClick={() => setShouldThrow(true)}
      >
        Trigger Error
      </button>
    </div>
  );
};

// Wrapper component with ErrorBoundary
export const ErrorThrowerExample = () => {
  return (
    <div className="p-6 border border-gray-200 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Error Boundary Demo</h2>
      <ErrorBoundary moduleName="Buggy Component">
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
};
