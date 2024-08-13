import { useEffect, useState } from 'react';
import { AppCoinData, MarketChart } from '@/app/coin/interfaces/CoinAPIResponse';

async function getCoinData(id: string): Promise<AppCoinData | null> {
  try {
    const res = await fetch(`/api/coin-detail?id=${id}`, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error('Failed to fetch coin data');
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
    const res = await fetch(`/api/coin-market-chart?id=${id}&days=${days}`, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error('Failed to fetch coin market chart');
    }
    const coin: MarketChart = await res.json();
    return coin;
  } catch (error) {
    console.error('Failed to fetch coin market chart:', error);
    return null;
  }
}

export function useCoinData(id: string) {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState<AppCoinData | null>(null);
  const [marketChart, setMarketChart] = useState<MarketChart | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    async function fetchData() {
      try {
        const fetchedCoin = await getCoinData(id);
        if (!fetchedCoin) {
          throw new Error('Failed to fetch coin data');
        }
        setCoin(fetchedCoin);

        const fetchedMarketChart = await getMarketChart(id, 30);
        if (!fetchedMarketChart) {
          throw new Error('Failed to fetch market chart data');
        }
        setMarketChart(fetchedMarketChart);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  return { loading, coin, marketChart, error };
}
