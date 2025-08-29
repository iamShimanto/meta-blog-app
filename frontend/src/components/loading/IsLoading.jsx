import React from 'react'

const IsLoading = () => {
  return (
    <div role="status" className="max-w-sm animate-pulse container">
      <h3 className="h-3 bg-gray-300 rounded-full  w-48 mb-4"></h3>
      <p className="h-2 bg-gray-300 rounded-full max-w-[380px] mb-2.5"></p>
      <p className="h-2 bg-gray-300 rounded-full max-w-[340px] mb-2.5"></p>
      <p className="h-2 bg-gray-300 rounded-full max-w-[320px] mb-2.5"></p>
    </div>
  );
}

export default IsLoading
