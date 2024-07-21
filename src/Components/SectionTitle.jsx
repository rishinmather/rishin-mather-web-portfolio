import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-gray-200 pb-5">
      <h2 className="capitalize text-3xl font-semibold tracking-wider">
        {text}
      </h2>
    </div>
  );
};

export default SectionTitle;
