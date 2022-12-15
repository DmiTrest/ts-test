import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { APIRequest, callAPI } from '../../core/utils/axiosAPI';
import { components } from '../schemes';

const getWidgets: APIRequest<null, components['schemas']['HomeResource']> = args => {
  return callAPI({
    url: 'widgets',
    config: {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    },
    ...args,
  });
};

export const APIs = {
  getWidgets,
};

export const homeAPI = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      ...APIs,
    },
    dispatch,
  );
};
