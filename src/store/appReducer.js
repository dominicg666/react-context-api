import { useCallback, useMemo, useReducer } from 'react';
const init = () => {
    return {
        token: localStorage.getItem('token'),
        films:[],
        filmDetails:[]
    }
};

const reducer = (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case 'login': {
            const data = { ...state, token: payload };
            return data;
        }
        case 'logout': {
            const data = { ...state, token: '' };
            return data;
        }
        case 'films': {
            const data = { ...state, films: payload };
            return data;
        }
        case 'filmsdetails': {
            const data = { ...state, filmDetails: payload };
            return data;
        }
    }
};


export const useAppReducer = () => {
    const [state, dispatch] = useReducer(reducer, null, init);

    const loginAction = useCallback(
        (payload) => {
            localStorage.setItem('token',payload)
            dispatch({ payload, type: 'login' });
        },
        [dispatch]
    );
    const logoutAction = useCallback(
        (payload) => {
            localStorage.removeItem('token')
            dispatch({ payload, type: 'logout' });
        },
        [dispatch]
    );

    const setFilmAction = useCallback(
        (payload) => {
            dispatch({ payload, type: 'films' });
        },
        [dispatch]
    );
    const setFilmDetailsAction = useCallback(
        (payload) => {
            dispatch({ payload, type: 'filmsdetails' });
        },
        [dispatch]
    );


    const api = useMemo(
        () => ({
            loginAction,
            logoutAction,
            setFilmAction,
            setFilmDetailsAction,
            dispatch,
        }),
        [
            loginAction,
            logoutAction,
            setFilmAction,
            setFilmDetailsAction,
            dispatch,
        ]
    );

    return [state, api];
};
