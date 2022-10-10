import React from 'react';

const Spinner = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button type="button" className="bg-gray-500" disabled>
        <svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24"></svg>
        Processing...
      </button>
    </>
  );
};

export default Spinner;
