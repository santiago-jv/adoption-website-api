const  errorHandlerMiddleware = (error, request, response,next) => {
    switch (error.type) {
        case 'createOwner':
            return response.status(503).send({error: error.message})
        case '':
            return
        default:
            console.log(error);
        
    }
}


export default errorHandlerMiddleware