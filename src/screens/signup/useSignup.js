import { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppContext } from '../../context/app'
import { signup } from '../../services/api';
const initialState={
    password:'',
    password_confirmation:''
}
const useSignup = () => {
    const [isSubmitting, setSubmitting] = useState(false)
    const [formField,setFormField] = useState(initialState);

    const [_, appApi] = useAppContext()
    const history = useHistory();


    const handleChange = (e)=>{
        setFormField({
            ...formField,
            [e.target.name]:e.target.value
        })
    }

    const handleSignup = useCallback(async (e) => {
        e.preventDefault()
        setSubmitting(true)
        if(formField.password!=formField.password_confirmation){
            return;
        }
        const { name, email, password, password_confirmation } = e.target.elements
        try {
            const response = await signup({
                name: name.value,
                email: email.value,
                password: password.value,
                password_confirmation:password_confirmation.value
            })
           // console.log(response.access_token);
            appApi.loginAction(response.access_token)
            history.push('/')
        } catch (error) {
            toast.error(error.error);
            console.log(error, "erro");
        } finally {
            setSubmitting(false)
        }

    }, [formField,setSubmitting, history, appApi])

    return {
        formField,
        isSubmitting,
        handleChange,
        handleSignup
    }

}
export default useSignup