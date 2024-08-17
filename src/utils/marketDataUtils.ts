import { AppCoinData, CoinGeckoSingleResponse, CryptoCompareHistoryItem, DailyCandle, MarketChart, PriceByDay } from "@/app/coin/interfaces/CoinAPIResponse";

export function calculateAverageClosePrice(coinHistory: CryptoCompareHistoryItem[]): number {
  if (!coinHistory || coinHistory.length === 0) {
    throw new Error("No priceByDay data available");
  }

  const totalClosePrice = coinHistory.reduce((sum, day) => sum + day.close, 0);
  return totalClosePrice / coinHistory.length;
}

export function transformCoinGeckoData(data: CoinGeckoSingleResponse): AppCoinData {
  return {
    id: data.id,
    symbol: data.symbol,
    name: data.name,
    web_slug: data.web_slug,
    categories: data.categories,
    image: {
      thumb: data.image.thumb,
      small: data.image.small,
      large: data.image.large,
    },
    market_data: {
      price_change_24h: data.market_data.price_change_24h,
      price_change_percentage_24h: data.market_data.price_change_percentage_24h,
      price_change_percentage_7d: data.market_data.price_change_percentage_7d,
      price_change_percentage_14d: data.market_data.price_change_percentage_14d,
      price_change_percentage_30d: data.market_data.price_change_percentage_30d,
      price_change_percentage_60d: data.market_data.price_change_percentage_60d,
      price_change_percentage_200d: data.market_data.price_change_percentage_200d,
      price_change_percentage_1y: data.market_data.price_change_percentage_1y,
      current_price: data.market_data.current_price.usd,
      high_24h: data.market_data.high_24h.usd,
      low_24h: data.market_data.low_24h.usd,
    },
  };
}

export function addPriceByDay(data: MarketChart): MarketChart {
  const prices = data.prices;

  // Объект для хранения данных открытия и закрытия по дням
  const dailyCandles: { [date: string]: DailyCandle } = {};
  let lastClose: number | null = null;

  // Группируем данные по дням
  prices.forEach(([timestamp, price]) => {
    const date = new Date(timestamp).toLocaleDateString('en-GB', { timeZone: 'GMT' });

    if (!dailyCandles[date]) {
      // Если нет данных для этого дня, создаем новую запись
      dailyCandles[date] = { open: lastClose !== null ? lastClose : price, close: price };
    } else {
      // Обновляем только цену закрытия
      dailyCandles[date].close = price;
    }

    // Обновляем lastClose для использования на следующей итерации
    lastClose = price;
  });

  // Преобразуем объект в массив объектов
  const priceByDay: PriceByDay[] = Object.entries(dailyCandles).map(
    ([date, { open, close }]) => ({
      date,
      open,
      close,
    })
  );

  // Добавляем новое поле в объект data
  data.priceByDay = priceByDay;

  return data;
}


export function filterOutToday(data: MarketChart): MarketChart {
  // Получаем начало сегодняшнего дня
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Фильтруем данные, исключая сегодняшние
  const filteredPrices = data.prices.filter(([timestamp,]) => {
    const date = new Date(timestamp);
    return date < today;
  });

  // Возвращаем отфильтрованные данные
  return {
    ...data,
    prices: filteredPrices,
  };
}