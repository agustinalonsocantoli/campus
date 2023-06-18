import axios from "axios";

export const getJobs = async () => {
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
    
    try{
        const { data } = await axios.get(
            `${import.meta.env.VITE_URL_CAMPUS_API}jobs`,
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