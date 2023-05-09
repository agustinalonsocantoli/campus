/* eslint-disable @typescript-eslint/no-explicit-any */
// DayJs
import dayjs from 'dayjs';

declare module 'dayjs' {
    interface Dayjs {
    $W: number;
    $M: number;
    $D: number;
 }
}

interface newDateInt {
    day: Array<number | string>;
    month: string;
} 

export const destructureDate = (value: any) => {
    const formatDate = dayjs(value);
    const newDate: newDateInt = { 
        day: [], 
        month: ""
    }
    
    if(formatDate.$W === 0) newDate.day = [formatDate.$D, "Domingo"];
    if(formatDate.$W === 1) newDate.day = [formatDate.$D, "Lunes"];
    if(formatDate.$W === 2) newDate.day = [formatDate.$D, "Martes"];
    if(formatDate.$W === 3) newDate.day = [formatDate.$D, "Miércoles"];
    if(formatDate.$W === 4) newDate.day = [formatDate.$D, "Juves"];
    if(formatDate.$W === 5) newDate.day = [formatDate.$D, "Viernes"];
    if(formatDate.$W === 6) newDate.day = [formatDate.$D, "Sábado"];

    if(formatDate.$M === 0) newDate.month = "Enero";
    if(formatDate.$M === 1) newDate.month = "Febrero";
    if(formatDate.$M === 2) newDate.month = "Marzo";
    if(formatDate.$M === 3) newDate.month = "Abril";
    if(formatDate.$M === 4) newDate.month = "Mayo";
    if(formatDate.$M === 5) newDate.month = "Junio";
    if(formatDate.$M === 6) newDate.month = "Julio";
    if(formatDate.$M === 7) newDate.month = "Agosto";
    if(formatDate.$M === 8) newDate.month = "Septiembre";
    if(formatDate.$M === 9) newDate.month = "Octubre";
    if(formatDate.$M === 10) newDate.month = "Noviembre";
    if(formatDate.$M === 11) newDate.month = "Diciembre";

    return newDate
}