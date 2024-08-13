import { NextResponse } from 'next/server';


const FAKE_DATA = [
  {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "current_price": 59182,
    "market_cap": 1168255740100,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 1242873295563,
    "total_volume": 35611095730,
    "high_24h": 60499,
    "low_24h": 58015,
    "price_change_24h": 360.32,
    "price_change_percentage_24h": 0.61256,
    "market_cap_change_24h": 14177311021,
    "market_cap_change_percentage_24h": 1.22845,
    "circulating_supply": 19739237.0,
    "total_supply": 21000000.0,
    "max_supply": 21000000.0,
    "ath": 73738,
    "ath_change_percentage": -19.4303,
    "ath_date": "2024-03-14T07:10:36.635Z",
    "atl": 67.81,
    "atl_change_percentage": 87514.37513,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2024-08-13T07:36:55.691Z"
  },
  {
    "id": "ethereum",
    "symbol": "eth",
    "name": "Ethereum",
    "image": "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    "current_price": 2648.3,
    "market_cap": 318455939240,
    "market_cap_rank": 2,
    "fully_diluted_valuation": 318455939240,
    "total_volume": 20301896821,
    "high_24h": 2737.53,
    "low_24h": 2563.27,
    "price_change_24h": 69.45,
    "price_change_percentage_24h": 2.69309,
    "market_cap_change_24h": 10134413618,
    "market_cap_change_percentage_24h": 3.28696,
    "circulating_supply": 120272420.576326,
    "total_supply": 120272420.576326,
    "max_supply": null,
    "ath": 4878.26,
    "ath_change_percentage": -45.51763,
    "ath_date": "2021-11-10T14:24:19.604Z",
    "atl": 0.432979,
    "atl_change_percentage": 613738.7051,
    "atl_date": "2015-10-20T00:00:00.000Z",
    "roi": {
      "times": 58.836352987331615,
      "currency": "btc",
      "percentage": 5883.635298733162
    },
    "last_updated": "2024-08-13T07:36:53.250Z"
  },
  {
    "id": "tether",
    "symbol": "usdt",
    "name": "Tether",
    "image": "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661",
    "current_price": 1.0,
    "market_cap": 115687461667,
    "market_cap_rank": 3,
    "fully_diluted_valuation": 115687461667,
    "total_volume": 50894113491,
    "high_24h": 1.006,
    "low_24h": 0.995704,
    "price_change_24h": -0.001752580342001542,
    "price_change_percentage_24h": -0.17494,
    "market_cap_change_24h": -48819408.89894104,
    "market_cap_change_percentage_24h": -0.04218,
    "circulating_supply": 115638558844.547,
    "total_supply": 115638558844.547,
    "max_supply": null,
    "ath": 1.32,
    "ath_change_percentage": -24.41351,
    "ath_date": "2018-07-24T00:00:00.000Z",
    "atl": 0.572521,
    "atl_change_percentage": 74.68029,
    "atl_date": "2015-03-02T00:00:00.000Z",
    "roi": null,
    "last_updated": "2024-08-13T07:36:52.694Z"
  },
  {
    "id": "binancecoin",
    "symbol": "bnb",
    "name": "BNB",
    "image": "https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
    "current_price": 522.07,
    "market_cap": 76163222029,
    "market_cap_rank": 4,
    "fully_diluted_valuation": 76163222029,
    "total_volume": 723528937,
    "high_24h": 523.98,
    "low_24h": 503.16,
    "price_change_24h": 10.39,
    "price_change_percentage_24h": 2.03063,
    "market_cap_change_24h": 1737233443,
    "market_cap_change_percentage_24h": 2.33418,
    "circulating_supply": 145887575.79,
    "total_supply": 145887575.79,
    "max_supply": 200000000.0,
    "ath": 717.48,
    "ath_change_percentage": -27.00405,
    "ath_date": "2024-06-06T14:10:59.816Z",
    "atl": 0.0398177,
    "atl_change_percentage": 1315214.44224,
    "atl_date": "2017-10-19T00:00:00.000Z",
    "roi": null,
    "last_updated": "2024-08-13T07:36:26.912Z"
  },
  {
    "id": "solana",
    "symbol": "sol",
    "name": "Solana",
    "image": "https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756",
    "current_price": 146.4,
    "market_cap": 68324879858,
    "market_cap_rank": 5,
    "fully_diluted_valuation": 85215180183,
    "total_volume": 4177611521,
    "high_24h": 150.74,
    "low_24h": 142.19,
    "price_change_24h": 0.334855,
    "price_change_percentage_24h": 0.22924,
    "market_cap_change_24h": 976139851,
    "market_cap_change_percentage_24h": 1.44938,
    "circulating_supply": 466727446.208234,
    "total_supply": 582105135.162311,
    "max_supply": null,
    "ath": 259.96,
    "ath_change_percentage": -43.49684,
    "ath_date": "2021-11-06T21:54:35.825Z",
    "atl": 0.500801,
    "atl_change_percentage": 29230.04088,
    "atl_date": "2020-05-11T19:35:23.449Z",
    "roi": null,
    "last_updated": "2024-08-13T07:36:27.296Z"
  },
  {
    "id": "usd-coin",
    "symbol": "usdc",
    "name": "USDC",
    "image": "https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
    "current_price": 0.99997,
    "market_cap": 34489379471,
    "market_cap_rank": 6,
    "fully_diluted_valuation": 34497762388,
    "total_volume": 9266685068,
    "high_24h": 1.006,
    "low_24h": 0.990454,
    "price_change_24h": -0.002016344065559839,
    "price_change_percentage_24h": -0.20123,
    "market_cap_change_24h": -11333885.114440918,
    "market_cap_change_percentage_24h": -0.03285,
    "circulating_supply": 34493520104.0139,
    "total_supply": 34501904027.1885,
    "max_supply": null,
    "ath": 1.17,
    "ath_change_percentage": -14.72643,
    "ath_date": "2019-05-08T00:40:28.300Z",
    "atl": 0.877647,
    "atl_change_percentage": 13.94204,
    "atl_date": "2023-03-11T08:02:13.981Z",
    "roi": null,
    "last_updated": "2024-08-13T07:36:51.814Z"
  },
  {
    "id": "ripple",
    "symbol": "xrp",
    "name": "XRP",
    "image": "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
    "current_price": 0.570597,
    "market_cap": 32017958404,
    "market_cap_rank": 7,
    "fully_diluted_valuation": 57052482174,
    "total_volume": 1537205889,
    "high_24h": 0.579418,
    "low_24h": 0.55997,
    "price_change_24h": 0.00220691,
    "price_change_percentage_24h": 0.38827,
    "market_cap_change_24h": 114976592,
    "market_cap_change_percentage_24h": 0.36039,
    "circulating_supply": 56113081096.0,
    "total_supply": 99987342059.0,
    "max_supply": 100000000000.0,
    "ath": 3.4,
    "ath_change_percentage": -83.19909,
    "ath_date": "2018-01-07T00:00:00.000Z",
    "atl": 0.00268621,
    "atl_change_percentage": 21155.64408,
    "atl_date": "2014-05-22T00:00:00.000Z",
    "roi": null,
    "last_updated": "2024-08-13T07:36:34.032Z"
  },
  {
    "id": "staked-ether",
    "symbol": "steth",
    "name": "Lido Staked Ether",
    "image": "https://coin-images.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206",
    "current_price": 2649.88,
    "market_cap": 25955528366,
    "market_cap_rank": 8,
    "fully_diluted_valuation": 25955528366,
    "total_volume": 66967204,
    "high_24h": 2740.19,
    "low_24h": 2564.65,
    "price_change_24h": 76.64,
    "price_change_percentage_24h": 2.97836,
    "market_cap_change_24h": 777564844,
    "market_cap_change_percentage_24h": 3.08828,
    "circulating_supply": 9795826.10816824,
    "total_supply": 9795826.10816824,
    "max_supply": null,
    "ath": 4829.57,
    "ath_change_percentage": -44.90192,
    "ath_date": "2021-11-10T14:40:47.256Z",
    "atl": 482.9,
    "atl_change_percentage": 451.05027,
    "atl_date": "2020-12-22T04:08:21.854Z",
    "roi": null,
    "last_updated": "2024-08-13T07:35:58.073Z"
  },
  {
    "id": "the-open-network",
    "symbol": "ton",
    "name": "Toncoin",
    "image": "https://coin-images.coingecko.com/coins/images/17980/large/ton_symbol.png?1696517498",
    "current_price": 6.33,
    "market_cap": 15953015202,
    "market_cap_rank": 9,
    "fully_diluted_valuation": 32370543851,
    "total_volume": 610629137,
    "high_24h": 6.62,
    "low_24h": 6.16,
    "price_change_24h": 0.144975,
    "price_change_percentage_24h": 2.34415,
    "market_cap_change_24h": 482114047,
    "market_cap_change_percentage_24h": 3.11626,
    "circulating_supply": 2518536640.40191,
    "total_supply": 5110407012.52035,
    "max_supply": null,
    "ath": 8.25,
    "ath_change_percentage": -23.10143,
    "ath_date": "2024-06-15T00:36:51.509Z",
    "atl": 0.519364,
    "atl_change_percentage": 1122.05394,
    "atl_date": "2021-09-21T00:33:11.092Z",
    "roi": null,
    "last_updated": "2024-08-13T07:36:39.220Z"
  },
  {
    "id": "dogecoin",
    "symbol": "doge",
    "name": "Dogecoin",
    "image": "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
    "current_price": 0.105031,
    "market_cap": 15284033657,
    "market_cap_rank": 10,
    "fully_diluted_valuation": 15286322759,
    "total_volume": 887353590,
    "high_24h": 0.108791,
    "low_24h": 0.102439,
    "price_change_24h": 0.00170283,
    "price_change_percentage_24h": 1.64798,
    "market_cap_change_24h": 343575382,
    "market_cap_change_percentage_24h": 2.29963,
    "circulating_supply": 145489016383.705,
    "total_supply": 145510806383.705,
    "max_supply": null,
    "ath": 0.731578,
    "ath_change_percentage": -85.56017,
    "ath_date": "2021-05-08T05:08:23.458Z",
    "atl": 8.69e-05,
    "atl_change_percentage": 121458.1992,
    "atl_date": "2015-05-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2024-08-13T07:36:47.439Z"
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search');
  const order = searchParams.get('order') || 'market_cap_desc';
  const per_page = searchParams.get('per_page') || 10;
  const page = searchParams.get('page') || 1;

  // const response = await fetch(
  //   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${order}&per_page=${per_page}&page=${page}&search=${search}&sparkline=false`
  // );

  // if (!response.ok) {
  //   return NextResponse.json({ error: 'Failed to fetch data from CoinGecko' }, { status: 500 });
  // }

  // const data = await response.json();
  // return NextResponse.json(data);
  return NextResponse.json(FAKE_DATA);
}