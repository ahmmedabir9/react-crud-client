import React from "react";

const PaginationComponent = ({ count, page, setPage, users }) => {
  return (
    <div className="w-full flex justify-end mt-2 space-x-2">
      <button
        onClick={() => {
          if (page !== 1) setPage(page - 1);
        }}
        className={`${
          page !== 1 ? "bg-blue-600 p-2 hover:bg-blue-700" : "bg-gray-600"
        } rounded text-xs p-2 text-white font-bold `}
      >
        {"<< Prev"}
      </button>
      <button
        onClick={() => {
          if (count > users.length) setPage(page + 1);
        }}
        className={`${
          count > users.length
            ? "bg-blue-600 p-2 hover:bg-blue-700"
            : "bg-gray-600"
        } rounded text-xs p-2 text-white font-bold `}
      >
        {"Next >>"}
      </button>
    </div>
  );
};

export default PaginationComponent;
