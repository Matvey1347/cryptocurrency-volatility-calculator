"use client";
import React from 'react';

interface PageNavigationProps {
  page: number;
  setPage: (page: number) => void;
}

export default function PageNavigation({ page, setPage }: PageNavigationProps) {
  return (
    <div className="flex justify-between items-center mt-4">
      <button
        onClick={() => setPage(page > 1 ? page - 1 : 1)}
        disabled={page === 1}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
      >
        Previous
      </button>
      <span>Page {page}</span>
      <button
        onClick={() => setPage(page + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
      >
        Next
      </button>
    </div>
  );
}
