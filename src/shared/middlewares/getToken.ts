/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";

export const getToken = async (email: string, password: string) => {
    try{
        const { data }: any = await axios.post(
            `${import.meta.env.VITE_URL_CAMPUS_API}auth/local`,{
                identifier: email,
                password: password,
            } 
        );

        return data.jwt;
    } catch(error) {
        console.log(error)
    }
};