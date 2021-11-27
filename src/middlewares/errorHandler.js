const  errorHandlerMiddleware = (error, request, response,next) => {
    switch (error.type) {
        case 'CreateObjectError':
            return response.status(503).send({error: error.message})
        case 'DeleteObjectError':
            return response.status(500).send({error: error.message})
        default:
            console.log(error);
        
    }
}


export default errorHandlerMiddleware