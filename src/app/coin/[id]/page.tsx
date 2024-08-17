"use client";
import Categories from './components/Categories';
import Loader from '@/components/Loader';
import { useCoinData } from '../hooks/useCoinData';
import ChartOpenCompareClose from './components/ChartOpenCompareClose';
import DaysTable from './components/DaysTable';
import CalculationData from './components/CalculationData';

export default function CoinPage({ params }: { params: { id: string } }) {
  const { loading, coin, coinHistory, error } = useCoinData(params.id);


  if (loading) {
    return <Loader loading={loading} />
  }

  if (!coin || !coin.name || !coinHistory) {
    return <main className="container mx-auto p-4">Coin data not available</main>;
  }

  return (
    <main className="container mx-auto p-4">
      <div className="flex justify-center items-center mb-4">
        <img src={coin.image.small} alt={coin.name} className="w-16 h-16 mr-4" />
        <h1 className="text-2xl font-bold">{coin.name} ({coin.symbol.toUpperCase()})</h1>
        <span className="ml-4 text-xl font-semibold text-green-500">
          ${coin.market_data.current_price.toFixed(2)}
        </span>
      </div>
      {/* <Categories categories={coin.categories} /> */}
      <CalculationData
        coinHistory={coinHistory ?? null}
      />
      <DaysTable
        coinHistory={coinHistory ?? null}
      />
      {/* 
      <ChartOpenCompareClose
        priceByDay={coinHistory.priceByDay ?? null}
      /> */}
    </main>
  );
}
