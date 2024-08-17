"use client";

import { PriceByDay } from "../../interfaces/CoinAPIResponse";

interface DaysTableProps {
  priceByDay: PriceByDay[] | null
}

export default function DaysTable({ priceByDay }: DaysTableProps) {
  const sortedPriceByDay = priceByDay ? [...priceByDay].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) : [];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="text-left p-4 font-medium text-gray-600">Date</th>
            <th className="text-left p-4 font-medium text-gray-600">Open</th>
            <th className="text-left p-4 font-medium text-gray-600">Close</th>
          </tr>
        </thead>
        <tbody>
          {sortedPriceByDay?.map((item, index) => (
            <tr
              key={index}
              className={`border-b hover:bg-gray-50 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}
            >
              <td className="p-4 text-gray-800">
                {item.date}
              </td>
              <td className="p-4 text-green-500 font-semibold">
                ${item.open.toFixed(2)}
              </td>
              <td className="p-4 text-red-500 font-semibold">
                ${item.close.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}