import axios from 'axios';

const setHeader = () => {
    const token=localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
export const login = async (credentials) => {
   return  axios.post('/user_login', credentials)
   .then((res)=>{
    return  res.data;
   }).catch(err=>{
       throw err.response.data;
   });
};
export const signup = async (credentials) => {
    return  axios.post('/user_register', credentials)
    .then((res)=>{
     return  res.data;
    }).catch(err=>{
        throw err.response.data;
    });
 };

 export const logout = async () => {
    setHeader();
    return  axios.post('/user_logout', {})
    .then((res)=>{
     return  res.data;
    }).catch(err=>{
        throw err.response.data;
    });
 };

 export const getFilms = async () => {
    setHeader();
    return  axios.get('/films')
    .then((res)=>{
     return  res.data;
    }).catch(err=>{
        throw err.response.data;
    });
 };
 export const getFilmsBygenre = async (id) => {
    setHeader();
    return  axios.get(`/films/${id}`)
    .then((res)=>{
     return  res.data;
    }).catch(err=>{
        throw err.response.data;
    });
 };