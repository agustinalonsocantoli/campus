import axios from "axios";
import { RegisterInt } from "../../interfaces/RegisterInt";

export const getUsers = async () => {
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
    
    try{
        const { data } = await axios.get(
            `${import.meta.env.VITE_URL_CAMPUS_API}users`,
            { 
                headers: {
                    "x-access-token" : `${token}`
                } 
            }
        );

        return data.data;
    } catch(error) {
        console.log(error)
    }
};

export const registerUsers = async (newUser: RegisterInt) => {
    
    try{
        const { data } = await axios.post(
            `${import.meta.env.VITE_URL_CAMPUS_API}auth/singup`,
            { 
                username: newUser.username,
                email: newUser.email,
                password: newUser.password,
            }
        );

        return data;
    } catch(error) {
        console.log(error)
    }
};