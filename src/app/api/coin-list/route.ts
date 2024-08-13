import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/list`
  );

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to fetch data from CoinGecko' }, { status: 500 });
  }

  const data = await response.json();
  return NextResponse.json(data);
}