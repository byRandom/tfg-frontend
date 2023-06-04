import React from "react";

const LoadingSpinner = () => {
  return (
    <div
      //align the div on the middle of the page
      class="spinner-border text-primary mt-72 z-10 absolute left-1/2 "
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
