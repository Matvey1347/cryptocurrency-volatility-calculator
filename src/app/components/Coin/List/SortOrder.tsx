"use client";
import React from 'react';

interface SortProps {
  sortOrder: string;
  setSortOrder: (sortOrder: string) => void;
  setPage: (page: number) => void;
}

export default function SortOrder({ sortOrder, setSortOrder, setPage }: SortProps) {

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
    setPage(1);
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-700">Sort By</span>
      <select
        value={sortOrder}
        onChange={handleSortChange}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="market_cap_desc">Market Cap Desc</option>
        <option value="market_cap_asc">Market Cap Asc</option>
        <option value="price_desc">Price Desc</option>
        <option value="price_asc">Price Asc</option>
      </select>
    </div>
  )
}
