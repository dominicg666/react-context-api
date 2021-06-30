import { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppContext } from '../../context/app'
import { login } from '../../services/api';

const useSignin = () => {
    const [isSubmitting, setSubmitting] = useState(false)

    const [_, appApi] = useAppContext()
    const history = useHistory();

    const handleLogin = useCallback(async (e) => {
        e.preventDefault()
        setSubmitting(true)
        const { email, password } = e.target.elements
        try {
            const response = await login({
                email: email.value,
                password: password.value
            })
            appApi.loginAction(response.access_token)
            history.push('/')
        } catch (error) {
            toast.error(error.error);
            console.log(error, "erro");
        } finally {
            setSubmitting(false)
        }

    }, [setSubmitting, history, appApi])

    return {
        isSubmitting,
        handleLogin
    }

}
export default useSignin