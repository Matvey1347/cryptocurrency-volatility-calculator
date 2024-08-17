"use client";
import Link from 'next/link';
import { CoinMarket } from '@/app/coin/interfaces/CoinAPIResponse';

interface ListProps {
  coins: CoinMarket[];
}

export default function List({ coins }: ListProps) {
  return (
    <ul>
      {coins.map((coin) => (
        <li key={coin.id} className="p-2 border-b border-gray-300 flex items-center hover:bg-gray-100">
          <Link href={`/coin/${coin.symbol}`} className="flex items-center w-full">
            <img src={coin.image || coin.large} alt={coin.name} className="w-8 h-8 mr-4" />
            <span>{coin.name} ({coin.symbol}) {(coin.current_price) ? ' - ' + coin.current_price : ''}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
