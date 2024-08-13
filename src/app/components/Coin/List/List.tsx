"use client";
import { CoinMarket } from '@/app/interfaces/api/CoinAPIResponse';
interface ListProps {
  coins: CoinMarket[]
}
export default function List({ coins }: ListProps) {
  return (
    <ul>
      <h1>Test</h1>
      {coins.map((coin) => (
        <li key={coin.id} className="p-2 border-b border-gray-300 flex items-center">
          <img src={coin.image} alt={coin.name} className="w-8 h-8 mr-4" />
          <span>{coin.name} ({coin.symbol}) - ${coin.current_price}</span>
        </li>
      ))}
    </ul>
  )
}