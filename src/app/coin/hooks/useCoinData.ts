import { useCallback, useEffect, useState } from 'react';
import { AppCoinData, CryptoCompareHistoryItem } from '@/app/coin/interfaces/CoinAPIResponse';

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

export function useCoinData(id: string, limit: number) {
  const [loading, setLoading] = useState(true);
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [coin, setCoin] = useState<AppCoinData | null>(null);
  const [coinHistory, setCoinHistory] = useState<CryptoCompareHistoryItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setLoadingHistory(true);
    try {
      const coinData = await getCoinData(id);
      setCoin(coinData);
      setLoading(false);

      const history = await getCoinHistory(coinData?.symbol || '', limit);
      setCoinHistory(history);
      setLoadingHistory(false);

    } catch (err: any) {
      setError(err.message);
      setLoading(false);
      setLoadingHistory(false);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  async function getHistoryByLimit(newLimit: number) {
    setLoadingHistory(true);
    const history = await getCoinHistory(coin?.symbol || '', newLimit);
    setCoinHistory(history);
    setLoadingHistory(false);
  }

  return { loading, loadingHistory, coin, coinHistory, error, updateHistory: getHistoryByLimit };
}