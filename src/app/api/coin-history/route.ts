import { CryptoCompareHistoryItem } from '@/app/coin/interfaces/CoinAPIResponse';
import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<NextResponse>{
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get('symbol');
  const limit = searchParams.get('limit');

  if (!symbol || !limit) {
    return NextResponse.json({ error: 'Please provide both symbol and date parameters' }, { status: 400 });
  }

  const response = await fetch(
    `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol}&tsym=USD&limit=${limit}&api_key=${process.env.CRYPTOCOMPARE_API_KEY}`
  );

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to fetch data from CryptoCompare' }, { status: 500 });
  }
  const data = await response.json();
  const history: CryptoCompareHistoryItem[] = data.Data.Data.map((item: any) => ({
    time: item.time,
    high: item.high,
    low: item.low,
    open: item.open,
    close: item.close,
    volumefrom: item.volumefrom,
    volumeto: item.volumeto,
  }));

  return NextResponse.json(history);
}
