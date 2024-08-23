"use client";

import { CryptoCompareHistoryItem } from "../../interfaces/CoinAPIResponse";

interface DaysTableProps {
  coinHistory: CryptoCompareHistoryItem[] | null
}

export default function DaysTable({ coinHistory }: DaysTableProps) {
  const sortedCoinHistory = coinHistory ? [...coinHistory].sort((a, b) => b.time - a.time) : [];

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="text-left p-4 font-medium text-gray-600">Date</th>
            <th className="text-left p-4 font-medium text-gray-600">Open</th>
            <th className="text-left p-4 font-medium text-gray-600">Close</th>
            <th className="text-left p-4 font-medium text-gray-600">Volumefrom</th>
            <th className="text-left p-4 font-medium text-gray-600">Volumeto</th>
          </tr>
        </thead>
        <tbody>
          {sortedCoinHistory?.map((item, index) => (
            <tr
              key={index}
              className={`border-b hover:bg-gray-50 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}
            >
              <td className="p-4 text-gray-800">
                {new Date(item.time * 1000).toLocaleDateString('en-GB')}
              </td>
              <td className="p-4 text-green-500 font-semibold">
                ${item.open}
              </td>
              <td className="p-4 text-red-500 font-semibold">
                ${item.close}
              </td>
              <td className="p-4 font-semibold">
                ${item.volumefrom}
              </td>
              <td className="p-4 font-semibold">
                ${item.volumeto}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}