export interface CoinMarket {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
}

export interface CoinGeckoSingleResponse {
  id: string,
  symbol: string,
  name: string,
  web_slug: string,
  categories: string[],
  image: {
    thumb: string,
    small: string,
    large: string
  },
  market_data: {
    price_change_24h: number,
    price_change_percentage_24h: number,
    price_change_percentage_7d: number,
    price_change_percentage_14d: number,
    price_change_percentage_30d: number,
    price_change_percentage_60d: number,
    price_change_percentage_200d: number,
    price_change_percentage_1y: number,
    current_price: {
      usd: number
    },
    high_24h: {
      usd: number
    },
    low_24h: {
      usd: number
    },
  }
}

export interface AppCoinData {
  id: string,
  symbol: string,
  name: string,
  web_slug: string,
  categories: string[],
  image: {
    thumb: string,
    small: string,
    large: string
  },
  market_data: {
    price_change_24h: number,
    price_change_percentage_24h: number,
    price_change_percentage_7d: number,
    price_change_percentage_14d: number,
    price_change_percentage_30d: number,
    price_change_percentage_60d: number,
    price_change_percentage_200d: number,
    price_change_percentage_1y: number,
    current_price: number,
    high_24h: number,
    low_24h: number,
  }
}

// export interface MarketChart {
//   prices: [number, number][],
//   market_caps: [number, number][],
//   total_volumes: [number, number][]
// }

export interface PriceData {
  timestamp: number;
  price: number;
}

export interface DailyCandle {
  open: number;
  close: number;
}

export interface PriceByDay {
  date: string;
  open: number;
  close: number;
}

export interface MarketChart {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
  priceByDay?: PriceByDay[];
}