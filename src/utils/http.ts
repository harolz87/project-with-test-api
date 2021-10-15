/* eslint-disable no-console */
import { store } from '../store';
import { actions as alertErrorActions } from '../store/slices/alert-error';
import { actions as loadActions } from '../store/slices/load';

const handleValidator = async (response: any): Promise<any> => {
  if (!response.ok) {
    const { status, statusText } = response;
    const error = new Error(`${status} ${statusText}`);
    error.statusCode = status;
    throw error;
  }
  return response.json();
};

const handleDataTransform = (data: any): any => data;

const handleError = (error: Error): any => {
  console.error(error);
  return error;
};

type FetchArgs = {
 url: string;
 init?: RequestInit;
}

export const Fetch = async ({
  url,
  init,
}: FetchArgs): Promise<any> => {
  const { dispatch } = store;

  try {
    dispatch(loadActions.setLoading(true));

    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      ...init,
    });

    const data = await handleValidator(response);
    return handleDataTransform(data);
  } catch (err: any) {
    const error = handleError(err);
    dispatch(alertErrorActions.setErrors([error.message]));
    throw error;
  } finally {
    dispatch(loadActions.setLoading(false));
  }
};
