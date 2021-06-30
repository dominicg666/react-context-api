import React, { createContext, useContext, useMemo } from 'react';
import { useAppReducer } from '../store/appReducer'

const AppContext = createContext();

const AppContextProvider = (props) => {
    const { children } = props;
    const [appState, appApi] = useAppReducer();

    const contextValue = useMemo(() => [appState, appApi], [appApi, appState]);

    return (
        <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
    );
};


export default AppContextProvider;

export const useAppContext = () => useContext(AppContext);
