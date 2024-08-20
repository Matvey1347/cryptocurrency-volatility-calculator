import { transformCoinGeckoData } from '@/utils/marketDataUtils';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Please provide id' }, { status: 400 });
  }

  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}`
  );

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to fetch data from CoinGecko' }, { status: 500 });
  }

  const data = await response.json();
  const transformedData = transformCoinGeckoData(data);

  return NextResponse.json(transformedData);
}