const  errorHandlerMiddleware = (error, request, response,next) => {
    switch (error.type) {
        case 1:
        default:
            console.log(error);
        
    }
}


export default errorHandlerMiddleware