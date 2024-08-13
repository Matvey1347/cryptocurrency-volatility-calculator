"use client";
import React from 'react';

interface PerPageChangerProps {
  perPage: number;
  setPerPage: (perPage: number) => void;
  setPage: (page: number) => void;
}

export default function PerPageChanger(
  { perPage, setPerPage, setPage }: PerPageChangerProps
) {

  const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(parseInt(e.target.value));
    setPage(1);
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-700">Show rows</span>
      <select
        value={perPage}
        onChange={handlePerPageChange}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value={100}>100</option>
        <option value={50}>50</option>
        <option value={20}>20</option>
      </select>
    </div>
  )
}