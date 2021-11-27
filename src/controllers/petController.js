import Pet from "../models/Pet";

const PetController = {};

PetController.createPet = async (request, response,next) => {
    const {name,gender,age,personality} = request.body;
    console.log(request.headers.user)
    const {id} = request.headers.user

    //validateData
    try {
        const pet = await Pet.create({name,gender,age,personality,owner:id})
        return response.status(201).json(pet);
    } catch (error) {
        console.log(error);
        error.message = 'There was an error creating the pet';
        error.type = 'CreateObjectError';
        next(error);
    }
}

PetController.getPets = async (request, response) => {
    const {id} = request.headers.user
    
    const data = await Pet.find({owner:id})
    return response.status(200).json(data)

}

PetController.deletePet = async (request, response) => {
    const {id} = request.params

    try {
        await Pet.findOneAndDelete(id);
    } catch (error) {
        error.type = 'DeleteObjectError'
        error.message = "There was an error deleting the pet"
    }
}

export default PetController;