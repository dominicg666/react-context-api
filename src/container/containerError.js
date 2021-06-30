import React from 'react';
import { useErrorContext } from 'Context/unhandledErrors';

import App from '../App';
import { useErrorBoundary } from './useErrorBoundary';

const AppContainer = () => {
  const ErrorBoundary = useErrorBoundary(App);
  const [unhandledErrors, errorApi] = useErrorContext();

  return <ErrorBoundary unhandledErrors={unhandledErrors} {...errorApi} />;
};

export default AppContainer;
