const defaultProperties = (type=String,unique=false)=>{
    return {
        type,
        required: true, 
        unique
    }
}
export default defaultProperties