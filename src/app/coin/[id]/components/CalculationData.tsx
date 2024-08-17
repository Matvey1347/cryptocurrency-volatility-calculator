"use client";

import { calculateAverageClosePrice } from "@/utils/marketDataUtils";
import { CryptoCompareHistoryItem } from "../../interfaces/CoinAPIResponse";

interface CalculationDataProps {
  coinHistory: CryptoCompareHistoryItem[] | null
}

export default function CalculationData({ coinHistory }: CalculationDataProps) {
  // Если данных нет, возвращаем null
  if (!coinHistory || coinHistory.length === 0) {
    return <h1 className="text-center text-gray-500">No Data Available</h1>;
  }

  // Вычисляем среднюю цену закрытия
  const averageClosePrice = calculateAverageClosePrice(coinHistory);

  // Находим самую высокую и самую низкую цены закрытия
  const highestClosePrice = Math.max(...coinHistory.map(day => day.close));
  const lowestClosePrice = Math.min(...coinHistory.map(day => day.close));

  // Вычисляем процентное изменение от средней цены до самой высокой и самой низкой
  const highestChangePercentage = ((highestClosePrice - averageClosePrice) / averageClosePrice) * 100;
  const lowestChangePercentage = ((lowestClosePrice - averageClosePrice) / averageClosePrice) * 100;

  // Вычисляем коэффициент волатильности
  const volatilityCoefficient = (highestChangePercentage / 100) * (lowestChangePercentage / 100);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Market Analysis</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700">Average Close Price</h2>
          <p className="text-3xl font-bold text-green-500">${averageClosePrice.toFixed(4)}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700">Highest Close Price</h2>
          <p className="text-3xl font-bold text-red-500">${highestClosePrice.toFixed(4)}</p>
          <p className="text-sm text-gray-600 mt-1">(+{highestChangePercentage.toFixed(4)}%)</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700">Lowest Close Price</h2>
          <p className="text-3xl font-bold text-blue-500">${lowestClosePrice.toFixed(4)}</p>
          <p className="text-sm text-gray-600 mt-1">({lowestChangePercentage.toFixed(4)}%)</p>
        </div>
      </div>
      <div className="mt-6 p-4 bg-blue-100 rounded-lg shadow text-center">
        <h3 className="text-lg font-semibold text-gray-700">Volatility Coefficient</h3>
        <p className="text-4xl font-bold text-purple-500">{volatilityCoefficient.toFixed(5)}</p>
      </div>
    </div>
  );
}