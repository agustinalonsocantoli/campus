/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";

export const getToken = async (email: string, password: string) => {
    try{
        const { data }: any = await axios.post(
            `${import.meta.env.VITE_URL_CAMPUS_API}auth/login`,{
                email: email,
                password: password,
            } 
        );
        
        console.log(data);
        return data;
    } catch(error) {
        console.log(error)
    }
};