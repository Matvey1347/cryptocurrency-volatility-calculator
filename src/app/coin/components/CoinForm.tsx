"use client";
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function CoinForm() {
  const [coin, setCoin] = useState('cellframe');
  const [data, setData] = useState(null);
  const [error, setError] = useState<String | null>(null);

  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const setDateRange = (dates: [Date | null, Date | null] | null) => {
    const [start, end] = dates || [undefined, undefined];
    setStartDate(start || undefined);
    setEndDate(end || undefined);
  };

  const fetchCoinData = async () => {
    try {
      const response = await fetch(`/api/coin-history?coin=${coin}&from=${startDate}&to=endDate`);
      const result = await response.json();

      if (response.ok) {
        setData(result);
      } else {
        setError(result.error);
      }
    } catch (err: any) {
      setError(err);
    }
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 max-w-[800px] mx-auto">
      <input
        type="text"
        value={coin}
        onChange={(e) => setCoin(e.target.value)}
        placeholder="Enter coin name"
        className="p-2 border border-gray-300 rounded w-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <DatePicker
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => setDateRange(update as [Date | null, Date | null])}
        dateFormat="dd-MM-yyyy"
        placeholderText="Enter date"
        className="p-2 border border-gray-300 rounded w- focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={fetchCoinData}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
      >
        Fetch Coin Data
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  )
}