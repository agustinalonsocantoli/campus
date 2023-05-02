import axios from "axios";

export const getUsers = async () => {
    const token = import.meta.env.VITE_TOKEN_CAMPUS_API;
    
    try{
        const { data } = await axios.get(
            `${import.meta.env.VITE_URL_CAMPUS_API}users`,
            { 
                headers: {
                    "Authorization" : `Bearer ${token}`
                } 
            }
        );

        console.log(data)
    } catch(error) {
        console.log(error)
    }
};