import { useEffect, useState } from 'react';
import { AppCoinData, CryptoCompareHistoryItem, MarketChart } from '@/app/coin/interfaces/CoinAPIResponse';

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

async function getCoinHistory(symbol: string, limit: number): Promise<CryptoCompareHistoryItem[] | null> {
  try {
    const res = await fetch(`/api/coin-history?symbol=${symbol}&limit=${limit}`, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error('Failed to fetch coin market chart');
    }
    const coin: CryptoCompareHistoryItem[] = await res.json();
    return coin;
  } catch (error) {
    console.error('Failed to fetch coin market chart:', error);
    return null;
  }
}

export function useCoinData(id: string) {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState<AppCoinData | null>(null);
  const [coinHistory, setCoinHistory] = useState<CryptoCompareHistoryItem[] | null>(null);
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

        const history = await getCoinHistory(fetchedCoin.symbol, 10);
        if (!history) {
          throw new Error('Failed to fetch market chart data');
        }
        setCoinHistory(history);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  return { loading, coin, coinHistory, error };
}
