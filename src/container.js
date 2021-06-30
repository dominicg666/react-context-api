import React from 'react';

/**
 * My custom context
 */

import AppContextProvider from './context/app';

const contextProviders = [
  AppContextProvider,
];

const ContextProvider = ({ children }) =>
  contextProviders.reduceRight(
    (memo, ContextProvider) => <ContextProvider>{memo}</ContextProvider>,
    children
  );

export default ContextProvider;
