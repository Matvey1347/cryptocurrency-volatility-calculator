import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const coin = searchParams.get('coin');
  const date = searchParams.get('date');

  if (!coin || !date) {
    return NextResponse.json({ error: 'Please provide both coin and date parameters' }, { status: 400 });
  }

  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coin}/history?date=${date}&localization=false`
  );

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to fetch data from CoinGecko' }, { status: 500 });
  }

  const data = await response.json();
  return NextResponse.json(data);
}
