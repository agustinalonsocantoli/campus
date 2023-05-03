import axios from "axios";

export const getCourses = async () => {
    const token = import.meta.env.VITE_TOKEN_CAMPUS_API;
    
    try{
        const { data } = await axios.get(
            `${import.meta.env.VITE_URL_CAMPUS_API}cursos`,
            { 
                headers: {
                    "Authorization" : `Bearer ${token}`
                } 
            }
        );

        return data.data;
    } catch(error) {
        console.log(error)
    }
};