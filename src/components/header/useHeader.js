
import { useCallback } from 'react'
import { toast } from 'react-toastify';
import { useAppContext } from '../../context/app'
import { logout } from '../../services/api';
export const useHeader = (props) => {
    const {
        setAnchorEl,
        handleMobileMenuClose
    } = props;
    const [appState, appApi] = useAppContext()
    const handleLogout = useCallback(async () => {
        setAnchorEl(null);
        handleMobileMenuClose();
        appApi.logoutAction()
        try {
            await logout()

        } catch (error) {
            toast.error(error.error);
            console.log(error, "erro");
        } finally {
            
        }

    }, [setAnchorEl, appApi, handleMobileMenuClose])

    return {
        token:appState.token,
        handleLogout
    }
}