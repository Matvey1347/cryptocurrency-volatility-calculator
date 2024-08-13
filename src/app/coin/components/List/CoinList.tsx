"use client";

import Loader from '../../../../components/Loader';
import ErrorMessage from '../../../../components/ErrorMessage';
import PageNavigation from './PageNavigation';
import SortOrder from './SortOrder';
import PerPageChanger from './PerPageChanger';
import Search from './Search';
import List from './List';
import { useCoinList } from '@/app/coin/hooks/useCoinList';

export default function CoinList() {
  const { state, dispatch, fetchCoinsMarkets } = useCoinList();

  return (
    <>
      <Search
        searchQuery={state.searchQuery}
        setSearchQuery={(query) => dispatch({ type: 'SET_SEARCH_QUERY', payload: query })}
        setPage={(page) => dispatch({ type: 'SET_PAGE', payload: page })}
        onSearch={fetchCoinsMarkets}
      />
      <div className="flex justify-between items-center mb-4">
        <SortOrder
          sortOrder={state.sortOrder}
          setSortOrder={(order) => dispatch({ type: 'SET_SORT_ORDER', payload: order })}
          setPage={(page) => dispatch({ type: 'SET_PAGE', payload: page })}
        />
        <PerPageChanger
          perPage={state.perPage}
          setPerPage={(perPage) => dispatch({ type: 'SET_PER_PAGE', payload: perPage })}
          setPage={(page) => dispatch({ type: 'SET_PAGE', payload: page })}
        />
      </div>
      {state.loading ? (
        <Loader loading={state.loading} />
      ) : state.error ? (
        <ErrorMessage error={state.error} />
      ) : (
        <List coins={state.coins} />
      )}

      <PageNavigation
        page={state.page}
        setPage={(page) => dispatch({ type: 'SET_PAGE', payload: page })}
      />
    </>
  );
}