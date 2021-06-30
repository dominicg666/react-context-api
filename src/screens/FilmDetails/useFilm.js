
import { useEffect } from 'react'
import { toast } from 'react-toastify';
import { useAppContext } from '../../context/app'
import { useParams } from 'react-router-dom';
import { getFilmsBygenre } from '../../services/api';
export const useFilm = () => {

    const [appState, appApi] = useAppContext()
    const { id } = useParams();

    useEffect(() => {
        async function init() {
            try {
                const data = await getFilmsBygenre(id);
                console.log(data.film);
                 appApi.setFilmDetailsAction(data.film)

            } catch (error) {
                console.log(error);
            } finally {

            }
        }
        init()
    }, [])


    return {
        film: appState.filmDetails
    }
}