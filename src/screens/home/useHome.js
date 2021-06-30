
import { useEffect, useCallback } from 'react'
import { toast } from 'react-toastify';
import { useAppContext } from '../../context/app'
import { getFilms } from '../../services/api';
import { useHistory } from 'react-router-dom';
export const useHome = () => {

    const [appState, appApi] = useAppContext()

    const history = useHistory();

    const viewDetails = useCallback((item) => {
        history.push(`/film/${item.id}`)
    }, [history])

    useEffect(() => {
        async function init() {
            try {
                const data = await getFilms();
                appApi.setFilmAction(data.films)

            } catch (error) {
                console.log(error);
            } finally {

            }
        }
        init()
    }, [])


    return {
        viewDetails,
        films: appState.films
    }
}