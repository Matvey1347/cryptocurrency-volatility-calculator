import { useReducer, useEffect } from 'react';
import { CoinMarket } from '@/app/coin/interfaces/CoinAPIResponse';

// Define the initial state and reducer function
interface State {
  coins: CoinMarket[];
  loading: boolean;
  error: string | null;
  sortOrder: string;
  page: number;
  perPage: number;
  searchQuery: string;
}

const initialState: State = {
  coins: [],
  loading: true,
  error: null,
  sortOrder: 'market_cap_desc',
  page: 1,
  perPage: 20,
  searchQuery: '',
};

type Action =
  | { type: 'SET_COINS'; payload: CoinMarket[] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_SORT_ORDER'; payload: string }
  | { type: 'SET_PAGE'; payload: number }
  | { type: 'SET_PER_PAGE'; payload: number }
  | { type: 'SET_SEARCH_QUERY'; payload: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_COINS':
      return { ...state, coins: action.payload, loading: false };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'SET_SORT_ORDER':
      return { ...state, sortOrder: action.payload, page: 1 };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'SET_PER_PAGE':
      return { ...state, perPage: action.payload, page: 1 };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload, page: 1 };
    default:
      return state;
  }
}

async function fetchCoinsMarkets(dispatch: React.Dispatch<Action>, state: State) {
  dispatch({ type: 'SET_LOADING', payload: true });
  try {
    const response = await fetch(
      `/api/coin-markets?per_page=${state.perPage}&page=${state.page}&order=${state.sortOrder}&search=${state.searchQuery}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data from CoinGecko');
    }
    const data: CoinMarket[] = await response.json();
    dispatch({ type: 'SET_COINS', payload: data });
  } catch (err: any) {
    dispatch({ type: 'SET_ERROR', payload: err.message });
  }
}

export function useCoinList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchCoinsMarkets(dispatch, state);
  }, [state.sortOrder, state.page, state.perPage]);

  return {
    state,
    dispatch,
    fetchCoinsMarkets: () => fetchCoinsMarkets(dispatch, state),
  };
}
