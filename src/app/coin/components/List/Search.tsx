"use client";
import React from 'react';

interface SearchProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  setPage: (page: number) => void;
  onSearch: () => void;
}


export default function Search({ searchQuery, setSearchQuery, setPage, onSearch }: SearchProps) {
  const handleSearchChange = () => {
    setSearchQuery(searchQuery);
    setPage(1);
    onSearch();
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <input
        type="text"
        placeholder="Search for a coin..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow mr-2"
      />
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => handleSearchChange()}
      >
        Search
      </button>
    </div>
  )
}