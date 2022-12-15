import React from 'react';

import { APIStatus } from '../utils/axiosAPI';
import { homeAPI } from '../api/homeAPI';
import { homeActionCreators } from '../slices/homeSlice';

export const useGetWidgets = () => {
  const [status, setStatus] = React.useState(APIStatus.Initial);
  const { getWidgets } = homeAPI();
  const { setData } = homeActionCreators();

  const fetch = React.useCallback(() => {
    setStatus(APIStatus.Loading);
    getWidgets({
      onSuccess: response => {
        setStatus(APIStatus.Success);
        setData(response);
      },
      onError: () => setStatus(APIStatus.Failure),
    });
  }, []);

  return { fetch, status };
};
