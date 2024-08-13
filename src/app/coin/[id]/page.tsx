"use client";
import { AppCoinData, MarketChart } from '@/app/coin/interfaces/CoinAPIResponse';
import Categories from './components/Categories';
import { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import { useCoinData } from '../hooks/useCoinData';

async function getCoinData(id: string): Promise<AppCoinData | null> {
  try {
    const res = await fetch(`http://localhost:3000/api/coin-detail?id=${id}`, { cache: 'no-store' });

    if (!res.ok) {
      return null;
    }
    const coin: AppCoinData = await res.json();
    return coin;
  } catch (error) {
    console.error('Failed to fetch coin data:', error);
    return null;
  }
}

async function getMarketChart(id: string, days: number): Promise<MarketChart | null> {
  try {
    const res = await fetch(`http://localhost:3000/api/coin-market-chart?id=${id}&days=${days}`, { cache: 'no-store' });

    if (!res.ok) {
      return null;
    }
    const coin: MarketChart = await res.json();
    return coin;
  } catch (error) {
    console.error('Failed to fetch coin market chart:', error);
    return null;
  }
}

export default function CoinPage({ params }: { params: { id: string } }) {
  const { loading, coin, marketChart, error } = useCoinData(params.id);

  if (loading) {
    return <Loader loading={loading} />
  }

  if (!coin || !coin.name) {
    return <main className="container mx-auto p-4">Coin data not available</main>;
  }

  return (
    <main className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <img src={coin.image.small} alt={coin.name} className="w-16 h-16 mr-4" />
        <h1 className="text-2xl font-bold">{coin.name} ({coin.symbol.toUpperCase()})</h1>
        <span className="ml-4 text-xl font-semibold text-green-500">
          ${coin.market_data.current_price.toFixed(2)}
        </span>
      </div>
      <Categories categories={coin.categories} />
      <pre>
        {marketChart ? JSON.stringify(marketChart, null, 2) : '{}'}
      </pre>
    </main>
  );
}
