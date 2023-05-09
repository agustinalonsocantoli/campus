/* eslint-disable @typescript-eslint/no-explicit-any */
export const notify = (toast: any, status: any, title: string ) => {
    
    toast({
        title: title,
        status: status,
        duration: 3000,
        isClosable: true,
    })
};

export enum status {
    success = "success",
    error = "error",
    warning = "warning",
    info = "info"
}